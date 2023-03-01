'use strict';

import _ from 'lodash';
import meta from '../meta';
import db from '../database';
import plugins from '../plugins';
import user from '../user';
import topics from '../topics';
import categories from '../categories';
import groups from '../groups';
import utils from '../utils';

interface PostData {
  pid: number;
  uid: number;
  tid: number;
  content: string;
  timestamp: number;
  isMain?: boolean;
  toPid?: number;
  ip?: string;
  handle?: string;
  cid?: number;
}

export default function (Posts: any): void {
  Posts.create = async function (data: PostData): Promise<PostData> {
    // This is an internal method, consider using Topics.reply instead
    const { uid } = data;
    const { tid } = data;
    const content = data.content.toString();
    const timestamp = data.timestamp || Date.now();
    const isMain = data.isMain || false;

    if (!uid && parseInt(uid.toString(), 10) !== 0) {
      throw new Error('[[error:invalid-uid]]');
    }

    if (data.toPid && !utils.isNumber(data.toPid)) {
      throw new Error('[[error:invalid-pid]]');
    }

    const pid = await db.incrObjectField('global', 'nextPid');
    let postData: PostData = {
      pid: pid,
      uid: uid,
      tid: tid,
      content: content,
      timestamp: timestamp,
    };

    if (data.toPid) {
      postData.toPid = data.toPid;
    }
    if (data.ip && meta.config.trackIpPerPost) {
      postData.ip = data.ip;
    }
    if (data.handle && !parseInt(uid.toString(), 10)) {
      postData.handle = data.handle;
    }

    let result = await plugins.hooks.fire('filter:post.create', { post: postData, data: data });
    postData = result.post;
    await db.setObject(`post:${postData.pid}`, postData);

    const topicData = await topics.getTopicFields(tid, ['cid', 'pinned']);
    postData.cid = topicData.cid;

    await Promise.all([
      db.sortedSetAdd('posts:pid', timestamp, postData.pid),
      db.incrObjectField('global', 'postCount'),
      user.onNewPostMade(postData),
      topics.onNewPostMade(postData),
      categories.onNewPostMade(topicData.cid, topicData.pinned, postData),
      groups.onNewPostMade(postData),
      addReplyTo(postData, timestamp),
      Posts.uploads.sync(postData.pid),
    ]);

    result = await plugins.hooks.fire('filter:post.get', { post: postData, uid: data.uid });
    result.post.isMain = isMain;
    plugins.hooks.fire('action:post.save', { post: _.clone(result.post) });
    return result.post;
  };

  async function addReplyTo(postData: PostData, timestamp: number): Promise<void> {
    if (!postData.toPid) {
      return;
    }
    await Promise.all([
      db.sortedSetAdd(`pid:${postData.toPid}:replies`, timestamp, postData.pid),
      db.incrObjectField(`post:${postData.toPid}`, 'replies'),
    ]);
  }
};
