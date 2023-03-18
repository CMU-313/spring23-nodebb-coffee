// @ts-nocheck
function stryNS_9fa48() {
  var g = new Function("return this")();
  var ns = g.__stryker__ || (g.__stryker__ = {});
  if (ns.activeMutant === undefined && g.process && g.process.env && g.process.env.__STRYKER_ACTIVE_MUTANT__) {
    ns.activeMutant = g.process.env.__STRYKER_ACTIVE_MUTANT__;
  }
  function retrieveNS() {
    return ns;
  }
  stryNS_9fa48 = retrieveNS;
  return retrieveNS();
}
stryNS_9fa48();
function stryCov_9fa48() {
  var ns = stryNS_9fa48();
  var cov = ns.mutantCoverage || (ns.mutantCoverage = {
    static: {},
    perTest: {}
  });
  function cover() {
    var c = cov.static;
    if (ns.currentTestId) {
      c = cov.perTest[ns.currentTestId] = cov.perTest[ns.currentTestId] || {};
    }
    var a = arguments;
    for (var i = 0; i < a.length; i++) {
      c[a[i]] = (c[a[i]] || 0) + 1;
    }
  }
  stryCov_9fa48 = cover;
  cover.apply(null, arguments);
}
function stryMutAct_9fa48(id) {
  var ns = stryNS_9fa48();
  function isActive(id) {
    if (ns.activeMutant === id) {
      if (ns.hitCount !== void 0 && ++ns.hitCount > ns.hitLimit) {
        throw new Error('Stryker: Hit count limit reached (' + ns.hitCount + ')');
      }
      return true;
    }
    return false;
  }
  stryMutAct_9fa48 = isActive;
  return isActive(id);
}
import _ = require('lodash');
import meta = require('../meta');
import db = require('../database');
import plugins = require('../plugins');
import user = require('../user');
import topics = require('../topics');
import categories = require('../categories');
import groups = require('../groups');
import utils = require('../utils');
export type PostObject = {
  pid: number;
  tid: number;
  content: string;
  uid: string;
  timestamp: number;
  isMain?: boolean;
  create?: (data: PostObject) => Promise<PostObject>;
  toPid?: number;
  ip?: number;
  handle?: number;
  cid?: number;
  uploads?: any;
  anon?: string;
  isanon?: boolean;
};
type TopicObject = {
  cid: number;
  pinned: number;
};
type Result = {
  post: PostObject;
};
module.exports = function (Posts: PostObject) {
  if (stryMutAct_9fa48("28550")) {
    {}
  } else {
    stryCov_9fa48("28550");
    Posts.create = async function (data: PostObject) {
      if (stryMutAct_9fa48("28551")) {
        {}
      } else {
        stryCov_9fa48("28551");
        // This is an internal method, consider using Topics.reply instead
        const {
          uid
        } = data;
        const {
          tid
        } = data;
        const content = data.content.toString();
        const timestamp = stryMutAct_9fa48("28554") ? data.timestamp && Date.now() : stryMutAct_9fa48("28553") ? false : stryMutAct_9fa48("28552") ? true : (stryCov_9fa48("28552", "28553", "28554"), data.timestamp || Date.now());
        const isMain = stryMutAct_9fa48("28557") ? data.isMain && false : stryMutAct_9fa48("28556") ? false : stryMutAct_9fa48("28555") ? true : (stryCov_9fa48("28555", "28556", "28557"), data.isMain || (stryMutAct_9fa48("28558") ? true : (stryCov_9fa48("28558"), false)));
        if (stryMutAct_9fa48("28561") ? !uid || parseInt(uid, 10) !== 0 : stryMutAct_9fa48("28560") ? false : stryMutAct_9fa48("28559") ? true : (stryCov_9fa48("28559", "28560", "28561"), (stryMutAct_9fa48("28562") ? uid : (stryCov_9fa48("28562"), !uid)) && (stryMutAct_9fa48("28564") ? parseInt(uid, 10) === 0 : stryMutAct_9fa48("28563") ? true : (stryCov_9fa48("28563", "28564"), parseInt(uid, 10) !== 0)))) {
          if (stryMutAct_9fa48("28565")) {
            {}
          } else {
            stryCov_9fa48("28565");
            throw new Error(stryMutAct_9fa48("28566") ? "" : (stryCov_9fa48("28566"), '[[error:invalid-uid]]'));
          }
        }
        if (stryMutAct_9fa48("28569") ? data.toPid || !utils.isNumber(data.toPid) : stryMutAct_9fa48("28568") ? false : stryMutAct_9fa48("28567") ? true : (stryCov_9fa48("28567", "28568", "28569"), data.toPid && (stryMutAct_9fa48("28570") ? utils.isNumber(data.toPid) : (stryCov_9fa48("28570"), !utils.isNumber(data.toPid))))) {
          if (stryMutAct_9fa48("28571")) {
            {}
          } else {
            stryCov_9fa48("28571");
            throw new Error(stryMutAct_9fa48("28572") ? "" : (stryCov_9fa48("28572"), '[[error:invalid-pid]]'));
          }
        }
        // The next line calls a function in a module that has not been updated to TS yet
        // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access, @typescript-eslint/no-unsafe-call
        const pid: number = (await db.incrObjectField('global', 'nextPid') as number);

        // The next line calls a function in a module that has not been updated to TS yet
        // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access, @typescript-eslint/no-unsafe-call
        let anonname: string = (await user.getUserField(uid, 'username') as string);
        if (stryMutAct_9fa48("28574") ? false : stryMutAct_9fa48("28573") ? true : (stryCov_9fa48("28573", "28574"), data.isanon)) {
          if (stryMutAct_9fa48("28575")) {
            {}
          } else {
            stryCov_9fa48("28575");
            anonname = stryMutAct_9fa48("28576") ? "" : (stryCov_9fa48("28576"), 'Anonymous');
          }
        }
        let postData: PostObject = stryMutAct_9fa48("28577") ? {} : (stryCov_9fa48("28577"), {
          pid: pid,
          uid: uid,
          tid: tid,
          content: content,
          timestamp: timestamp,
          anon: anonname
        });
        if (stryMutAct_9fa48("28579") ? false : stryMutAct_9fa48("28578") ? true : (stryCov_9fa48("28578", "28579"), data.toPid)) {
          if (stryMutAct_9fa48("28580")) {
            {}
          } else {
            stryCov_9fa48("28580");
            postData.toPid = data.toPid;
          }
        }
        // The next line calls a function in a module that has not been updated to TS yet
        // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
        if (stryMutAct_9fa48("28583") ? data.ip || meta.config.trackIpPerPost : stryMutAct_9fa48("28582") ? false : stryMutAct_9fa48("28581") ? true : (stryCov_9fa48("28581", "28582", "28583"), data.ip && meta.config.trackIpPerPost)) {
          if (stryMutAct_9fa48("28584")) {
            {}
          } else {
            stryCov_9fa48("28584");
            postData.ip = data.ip;
          }
        }
        if (stryMutAct_9fa48("28587") ? data.handle || !parseInt(uid, 10) : stryMutAct_9fa48("28586") ? false : stryMutAct_9fa48("28585") ? true : (stryCov_9fa48("28585", "28586", "28587"), data.handle && (stryMutAct_9fa48("28588") ? parseInt(uid, 10) : (stryCov_9fa48("28588"), !parseInt(uid, 10))))) {
          if (stryMutAct_9fa48("28589")) {
            {}
          } else {
            stryCov_9fa48("28589");
            postData.handle = data.handle;
          }
        }
        // The next line calls a function in a module that has not been updated to TS yet
        // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
        let result: Result = (await plugins.hooks.fire('filter:post.create', {
          post: postData,
          data: data
        }) as Result);
        postData = result.post;
        // The next line calls a function in a module that has not been updated to TS yet
        // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access, @typescript-eslint/no-unsafe-call
        await db.setObject(stryMutAct_9fa48("28590") ? `` : (stryCov_9fa48("28590"), `post:${postData.pid}`), postData);

        // The next line calls a function in a module that has not been updated to TS yet
        // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access, @typescript-eslint/no-unsafe-call
        const topicData: TopicObject = (await topics.getTopicFields(tid, ['cid', 'pinned']) as TopicObject);
        postData.cid = topicData.cid;
        async function addReplyTo(postData: PostObject, timestamp: number) {
          if (stryMutAct_9fa48("28591")) {
            {}
          } else {
            stryCov_9fa48("28591");
            if (stryMutAct_9fa48("28594") ? false : stryMutAct_9fa48("28593") ? true : stryMutAct_9fa48("28592") ? postData.toPid : (stryCov_9fa48("28592", "28593", "28594"), !postData.toPid)) {
              if (stryMutAct_9fa48("28595")) {
                {}
              } else {
                stryCov_9fa48("28595");
                return;
              }
            }
            await Promise.all(stryMutAct_9fa48("28596") ? [] : (stryCov_9fa48("28596"), [(
            // The next line calls a function in a module that has not been updated to TS yet
            // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access,@typescript-eslint/no-unsafe-call
            db.sortedSetAdd(`pid:${postData.toPid}:replies`, timestamp, postData.pid) as PostObject), (
            // The next line calls a function in a module that has not been updated to TS yet
            // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access,@typescript-eslint/no-unsafe-call
            db.incrObjectField(`post:${postData.toPid}`, 'replies') as PostObject)]));
          }
        }
        await Promise.all(stryMutAct_9fa48("28597") ? [] : (stryCov_9fa48("28597"), [
        // The next line calls a function in a module that has not been updated to TS yet
        // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access, @typescript-eslint/no-unsafe-call
        db.sortedSetAdd(stryMutAct_9fa48("28598") ? "" : (stryCov_9fa48("28598"), 'posts:pid'), timestamp, postData.pid),
        // The next line calls a function in a module that has not been updated to TS yet
        // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access, @typescript-eslint/no-unsafe-call
        db.incrObjectField(stryMutAct_9fa48("28599") ? "" : (stryCov_9fa48("28599"), 'global'), stryMutAct_9fa48("28600") ? "" : (stryCov_9fa48("28600"), 'postCount')),
        // The next line calls a function in a module that has not been updated to TS yet
        // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access, @typescript-eslint/no-unsafe-call
        user.onNewPostMade(postData),
        // The next line calls a function in a module that has not been updated to TS yet
        // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access, @typescript-eslint/no-unsafe-call
        topics.onNewPostMade(postData),
        // The next line calls a function in a module that has not been updated to TS yet
        // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access, @typescript-eslint/no-unsafe-call
        categories.onNewPostMade(topicData.cid, topicData.pinned, postData),
        // The next line calls a function in a module that has not been updated to TS yet
        // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access, @typescript-eslint/no-unsafe-call
        groups.onNewPostMade(postData), addReplyTo(postData, timestamp),
        // The next line calls a function in a module that has not been updated to TS yet
        // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access, @typescript-eslint/no-unsafe-call
        Posts.uploads.sync(postData.pid)]));
        // The next line calls a function in a module that has not been updated to TS yet
        // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access, @typescript-eslint/no-unsafe-call
        result = (await plugins.hooks.fire('filter:post.get', {
          post: postData,
          uid: data.uid
        }) as Result);
        result.post.isMain = isMain;
        // The next line calls a function in a module that has not been updated to TS yet
        // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access, @typescript-eslint/no-unsafe-call
        (plugins.hooks.fire('action:post.save', {
          post: _.clone(result.post)
        }) as Promise<void>);
        return result.post;
      }
    };
  }
};