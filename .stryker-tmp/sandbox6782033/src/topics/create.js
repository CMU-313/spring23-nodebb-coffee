// @ts-nocheck
'use strict';

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
const _ = require('lodash');
const db = require('../database');
const utils = require('../utils');
const slugify = require('../slugify');
const plugins = require('../plugins');
const analytics = require('../analytics');
const user = require('../user');
const meta = require('../meta');
const posts = require('../posts');
const privileges = require('../privileges');
const categories = require('../categories');
const translator = require('../translator');
module.exports = function (Topics) {
  if (stryMutAct_9fa48("37865")) {
    {}
  } else {
    stryCov_9fa48("37865");
    Topics.create = async function (data) {
      if (stryMutAct_9fa48("37866")) {
        {}
      } else {
        stryCov_9fa48("37866");
        // This is an internal method, consider using Topics.post instead
        const timestamp = stryMutAct_9fa48("37869") ? data.timestamp && Date.now() : stryMutAct_9fa48("37868") ? false : stryMutAct_9fa48("37867") ? true : (stryCov_9fa48("37867", "37868", "37869"), data.timestamp || Date.now());
        const tid = await db.incrObjectField(stryMutAct_9fa48("37870") ? "" : (stryCov_9fa48("37870"), 'global'), stryMutAct_9fa48("37871") ? "" : (stryCov_9fa48("37871"), 'nextTid'));
        let topicData = stryMutAct_9fa48("37872") ? {} : (stryCov_9fa48("37872"), {
          tid: tid,
          uid: data.uid,
          cid: data.cid,
          mainPid: 0,
          title: data.title,
          slug: stryMutAct_9fa48("37873") ? `` : (stryCov_9fa48("37873"), `${tid}/${stryMutAct_9fa48("37876") ? slugify(data.title) && 'topic' : stryMutAct_9fa48("37875") ? false : stryMutAct_9fa48("37874") ? true : (stryCov_9fa48("37874", "37875", "37876"), slugify(data.title) || (stryMutAct_9fa48("37877") ? "" : (stryCov_9fa48("37877"), 'topic')))}`),
          timestamp: timestamp,
          lastposttime: 0,
          postcount: 0,
          viewcount: 0
        });
        if (stryMutAct_9fa48("37880") ? Array.isArray(data.tags) || data.tags.length : stryMutAct_9fa48("37879") ? false : stryMutAct_9fa48("37878") ? true : (stryCov_9fa48("37878", "37879", "37880"), Array.isArray(data.tags) && data.tags.length)) {
          if (stryMutAct_9fa48("37881")) {
            {}
          } else {
            stryCov_9fa48("37881");
            topicData.tags = data.tags.join(stryMutAct_9fa48("37882") ? "" : (stryCov_9fa48("37882"), ','));
          }
        }
        const result = await plugins.hooks.fire(stryMutAct_9fa48("37883") ? "" : (stryCov_9fa48("37883"), 'filter:topic.create'), stryMutAct_9fa48("37884") ? {} : (stryCov_9fa48("37884"), {
          topic: topicData,
          data: data
        }));
        topicData = result.topic;
        await db.setObject(stryMutAct_9fa48("37885") ? `` : (stryCov_9fa48("37885"), `topic:${topicData.tid}`), topicData);
        const timestampedSortedSetKeys = stryMutAct_9fa48("37886") ? [] : (stryCov_9fa48("37886"), [stryMutAct_9fa48("37887") ? "" : (stryCov_9fa48("37887"), 'topics:tid'), stryMutAct_9fa48("37888") ? `` : (stryCov_9fa48("37888"), `cid:${topicData.cid}:tids`), stryMutAct_9fa48("37889") ? `` : (stryCov_9fa48("37889"), `cid:${topicData.cid}:uid:${topicData.uid}:tids`)]);
        const scheduled = stryMutAct_9fa48("37893") ? timestamp <= Date.now() : stryMutAct_9fa48("37892") ? timestamp >= Date.now() : stryMutAct_9fa48("37891") ? false : stryMutAct_9fa48("37890") ? true : (stryCov_9fa48("37890", "37891", "37892", "37893"), timestamp > Date.now());
        if (stryMutAct_9fa48("37895") ? false : stryMutAct_9fa48("37894") ? true : (stryCov_9fa48("37894", "37895"), scheduled)) {
          if (stryMutAct_9fa48("37896")) {
            {}
          } else {
            stryCov_9fa48("37896");
            timestampedSortedSetKeys.push(stryMutAct_9fa48("37897") ? "" : (stryCov_9fa48("37897"), 'topics:scheduled'));
          }
        }
        await Promise.all(stryMutAct_9fa48("37898") ? [] : (stryCov_9fa48("37898"), [db.sortedSetsAdd(timestampedSortedSetKeys, timestamp, topicData.tid), db.sortedSetsAdd(stryMutAct_9fa48("37899") ? [] : (stryCov_9fa48("37899"), [stryMutAct_9fa48("37900") ? "" : (stryCov_9fa48("37900"), 'topics:views'), stryMutAct_9fa48("37901") ? "" : (stryCov_9fa48("37901"), 'topics:posts'), stryMutAct_9fa48("37902") ? "" : (stryCov_9fa48("37902"), 'topics:votes'), stryMutAct_9fa48("37903") ? `` : (stryCov_9fa48("37903"), `cid:${topicData.cid}:tids:votes`), stryMutAct_9fa48("37904") ? `` : (stryCov_9fa48("37904"), `cid:${topicData.cid}:tids:posts`), stryMutAct_9fa48("37905") ? `` : (stryCov_9fa48("37905"), `cid:${topicData.cid}:tids:views`)]), 0, topicData.tid), user.addTopicIdToUser(topicData.uid, topicData.tid, timestamp), db.incrObjectField(stryMutAct_9fa48("37906") ? `` : (stryCov_9fa48("37906"), `category:${topicData.cid}`), stryMutAct_9fa48("37907") ? "" : (stryCov_9fa48("37907"), 'topic_count')), db.incrObjectField(stryMutAct_9fa48("37908") ? "" : (stryCov_9fa48("37908"), 'global'), stryMutAct_9fa48("37909") ? "" : (stryCov_9fa48("37909"), 'topicCount')), Topics.createTags(data.tags, topicData.tid, timestamp), scheduled ? Promise.resolve() : categories.updateRecentTid(topicData.cid, topicData.tid)]));
        if (stryMutAct_9fa48("37911") ? false : stryMutAct_9fa48("37910") ? true : (stryCov_9fa48("37910", "37911"), scheduled)) {
          if (stryMutAct_9fa48("37912")) {
            {}
          } else {
            stryCov_9fa48("37912");
            await Topics.scheduled.pin(tid, topicData);
          }
        }
        plugins.hooks.fire(stryMutAct_9fa48("37913") ? "" : (stryCov_9fa48("37913"), 'action:topic.save'), stryMutAct_9fa48("37914") ? {} : (stryCov_9fa48("37914"), {
          topic: _.clone(topicData),
          data: data
        }));
        return topicData.tid;
      }
    };
    Topics.post = async function (data) {
      if (stryMutAct_9fa48("37915")) {
        {}
      } else {
        stryCov_9fa48("37915");
        data = await plugins.hooks.fire(stryMutAct_9fa48("37916") ? "" : (stryCov_9fa48("37916"), 'filter:topic.post'), data);
        const {
          uid
        } = data;
        data.title = stryMutAct_9fa48("37917") ? String(data.title) : (stryCov_9fa48("37917"), String(data.title).trim());
        data.tags = stryMutAct_9fa48("37920") ? data.tags && [] : stryMutAct_9fa48("37919") ? false : stryMutAct_9fa48("37918") ? true : (stryCov_9fa48("37918", "37919", "37920"), data.tags || (stryMutAct_9fa48("37921") ? ["Stryker was here"] : (stryCov_9fa48("37921"), [])));
        if (stryMutAct_9fa48("37923") ? false : stryMutAct_9fa48("37922") ? true : (stryCov_9fa48("37922", "37923"), data.content)) {
          if (stryMutAct_9fa48("37924")) {
            {}
          } else {
            stryCov_9fa48("37924");
            data.content = utils.rtrim(data.content);
          }
        }
        Topics.checkTitle(data.title);
        await Topics.validateTags(data.tags, data.cid, uid);
        data.tags = await Topics.filterTags(data.tags, data.cid);
        if (stryMutAct_9fa48("37927") ? false : stryMutAct_9fa48("37926") ? true : stryMutAct_9fa48("37925") ? data.fromQueue : (stryCov_9fa48("37925", "37926", "37927"), !data.fromQueue)) {
          if (stryMutAct_9fa48("37928")) {
            {}
          } else {
            stryCov_9fa48("37928");
            Topics.checkContent(data.content);
          }
        }
        const [categoryExists, canCreate, canTag] = await Promise.all(stryMutAct_9fa48("37929") ? [] : (stryCov_9fa48("37929"), [categories.exists(data.cid), privileges.categories.can(stryMutAct_9fa48("37930") ? "" : (stryCov_9fa48("37930"), 'topics:create'), data.cid, uid), privileges.categories.can(stryMutAct_9fa48("37931") ? "" : (stryCov_9fa48("37931"), 'topics:tag'), data.cid, uid)]));
        if (stryMutAct_9fa48("37934") ? false : stryMutAct_9fa48("37933") ? true : stryMutAct_9fa48("37932") ? categoryExists : (stryCov_9fa48("37932", "37933", "37934"), !categoryExists)) {
          if (stryMutAct_9fa48("37935")) {
            {}
          } else {
            stryCov_9fa48("37935");
            throw new Error(stryMutAct_9fa48("37936") ? "" : (stryCov_9fa48("37936"), '[[error:no-category]]'));
          }
        }
        if (stryMutAct_9fa48("37939") ? !canCreate && !canTag && data.tags.length : stryMutAct_9fa48("37938") ? false : stryMutAct_9fa48("37937") ? true : (stryCov_9fa48("37937", "37938", "37939"), (stryMutAct_9fa48("37940") ? canCreate : (stryCov_9fa48("37940"), !canCreate)) || (stryMutAct_9fa48("37942") ? !canTag || data.tags.length : stryMutAct_9fa48("37941") ? false : (stryCov_9fa48("37941", "37942"), (stryMutAct_9fa48("37943") ? canTag : (stryCov_9fa48("37943"), !canTag)) && data.tags.length)))) {
          if (stryMutAct_9fa48("37944")) {
            {}
          } else {
            stryCov_9fa48("37944");
            throw new Error(stryMutAct_9fa48("37945") ? "" : (stryCov_9fa48("37945"), '[[error:no-privileges]]'));
          }
        }
        await guestHandleValid(data);
        if (stryMutAct_9fa48("37948") ? false : stryMutAct_9fa48("37947") ? true : stryMutAct_9fa48("37946") ? data.fromQueue : (stryCov_9fa48("37946", "37947", "37948"), !data.fromQueue)) {
          if (stryMutAct_9fa48("37949")) {
            {}
          } else {
            stryCov_9fa48("37949");
            await user.isReadyToPost(uid, data.cid);
          }
        }
        const tid = await Topics.create(data);
        let postData = data;
        postData.tid = tid;
        postData.ip = data.req ? data.req.ip : null;
        postData.isMain = stryMutAct_9fa48("37950") ? false : (stryCov_9fa48("37950"), true);
        postData = await posts.create(postData);
        postData = await onNewPost(postData, data);
        const [settings, topics] = await Promise.all(stryMutAct_9fa48("37951") ? [] : (stryCov_9fa48("37951"), [user.getSettings(uid), Topics.getTopicsByTids(stryMutAct_9fa48("37952") ? [] : (stryCov_9fa48("37952"), [postData.tid]), uid)]));
        if (stryMutAct_9fa48("37955") ? !Array.isArray(topics) && !topics.length : stryMutAct_9fa48("37954") ? false : stryMutAct_9fa48("37953") ? true : (stryCov_9fa48("37953", "37954", "37955"), (stryMutAct_9fa48("37956") ? Array.isArray(topics) : (stryCov_9fa48("37956"), !Array.isArray(topics))) || (stryMutAct_9fa48("37957") ? topics.length : (stryCov_9fa48("37957"), !topics.length)))) {
          if (stryMutAct_9fa48("37958")) {
            {}
          } else {
            stryCov_9fa48("37958");
            throw new Error(stryMutAct_9fa48("37959") ? "" : (stryCov_9fa48("37959"), '[[error:no-topic]]'));
          }
        }
        if (stryMutAct_9fa48("37962") ? uid > 0 || settings.followTopicsOnCreate : stryMutAct_9fa48("37961") ? false : stryMutAct_9fa48("37960") ? true : (stryCov_9fa48("37960", "37961", "37962"), (stryMutAct_9fa48("37965") ? uid <= 0 : stryMutAct_9fa48("37964") ? uid >= 0 : stryMutAct_9fa48("37963") ? true : (stryCov_9fa48("37963", "37964", "37965"), uid > 0)) && settings.followTopicsOnCreate)) {
          if (stryMutAct_9fa48("37966")) {
            {}
          } else {
            stryCov_9fa48("37966");
            await Topics.follow(postData.tid, uid);
          }
        }
        const topicData = topics[0];
        topicData.unreplied = stryMutAct_9fa48("37967") ? false : (stryCov_9fa48("37967"), true);
        topicData.mainPost = postData;
        topicData.index = 0;
        postData.index = 0;
        if (stryMutAct_9fa48("37969") ? false : stryMutAct_9fa48("37968") ? true : (stryCov_9fa48("37968", "37969"), topicData.scheduled)) {
          if (stryMutAct_9fa48("37970")) {
            {}
          } else {
            stryCov_9fa48("37970");
            await Topics.delete(tid);
          }
        }
        analytics.increment(stryMutAct_9fa48("37971") ? [] : (stryCov_9fa48("37971"), [stryMutAct_9fa48("37972") ? "" : (stryCov_9fa48("37972"), 'topics'), stryMutAct_9fa48("37973") ? `` : (stryCov_9fa48("37973"), `topics:byCid:${topicData.cid}`)]));
        plugins.hooks.fire(stryMutAct_9fa48("37974") ? "" : (stryCov_9fa48("37974"), 'action:topic.post'), stryMutAct_9fa48("37975") ? {} : (stryCov_9fa48("37975"), {
          topic: topicData,
          post: postData,
          data: data
        }));
        if (stryMutAct_9fa48("37978") ? parseInt(uid, 10) || !topicData.scheduled : stryMutAct_9fa48("37977") ? false : stryMutAct_9fa48("37976") ? true : (stryCov_9fa48("37976", "37977", "37978"), parseInt(uid, 10) && (stryMutAct_9fa48("37979") ? topicData.scheduled : (stryCov_9fa48("37979"), !topicData.scheduled)))) {
          if (stryMutAct_9fa48("37980")) {
            {}
          } else {
            stryCov_9fa48("37980");
            user.notifications.sendTopicNotificationToFollowers(uid, topicData, postData);
          }
        }
        return stryMutAct_9fa48("37981") ? {} : (stryCov_9fa48("37981"), {
          topicData: topicData,
          postData: postData
        });
      }
    };
    Topics.reply = async function (data) {
      if (stryMutAct_9fa48("37982")) {
        {}
      } else {
        stryCov_9fa48("37982");
        data = await plugins.hooks.fire(stryMutAct_9fa48("37983") ? "" : (stryCov_9fa48("37983"), 'filter:topic.reply'), data);
        const {
          tid
        } = data;
        const {
          uid
        } = data;
        const topicData = await Topics.getTopicData(tid);
        await canReply(data, topicData);
        data.cid = topicData.cid;
        await guestHandleValid(data);
        if (stryMutAct_9fa48("37985") ? false : stryMutAct_9fa48("37984") ? true : (stryCov_9fa48("37984", "37985"), data.content)) {
          if (stryMutAct_9fa48("37986")) {
            {}
          } else {
            stryCov_9fa48("37986");
            data.content = utils.rtrim(data.content);
          }
        }
        if (stryMutAct_9fa48("37989") ? false : stryMutAct_9fa48("37988") ? true : stryMutAct_9fa48("37987") ? data.fromQueue : (stryCov_9fa48("37987", "37988", "37989"), !data.fromQueue)) {
          if (stryMutAct_9fa48("37990")) {
            {}
          } else {
            stryCov_9fa48("37990");
            await user.isReadyToPost(uid, data.cid);
            Topics.checkContent(data.content);
          }
        }

        // For replies to scheduled topics, don't have a timestamp older than topic's itself
        if (stryMutAct_9fa48("37992") ? false : stryMutAct_9fa48("37991") ? true : (stryCov_9fa48("37991", "37992"), topicData.scheduled)) {
          if (stryMutAct_9fa48("37993")) {
            {}
          } else {
            stryCov_9fa48("37993");
            data.timestamp = stryMutAct_9fa48("37994") ? topicData.lastposttime - 1 : (stryCov_9fa48("37994"), topicData.lastposttime + 1);
          }
        }
        data.ip = data.req ? data.req.ip : null;
        let postData = await posts.create(data);
        postData = await onNewPost(postData, data);
        const settings = await user.getSettings(uid);
        if (stryMutAct_9fa48("37997") ? uid > 0 || settings.followTopicsOnReply : stryMutAct_9fa48("37996") ? false : stryMutAct_9fa48("37995") ? true : (stryCov_9fa48("37995", "37996", "37997"), (stryMutAct_9fa48("38000") ? uid <= 0 : stryMutAct_9fa48("37999") ? uid >= 0 : stryMutAct_9fa48("37998") ? true : (stryCov_9fa48("37998", "37999", "38000"), uid > 0)) && settings.followTopicsOnReply)) {
          if (stryMutAct_9fa48("38001")) {
            {}
          } else {
            stryCov_9fa48("38001");
            await Topics.follow(postData.tid, uid);
          }
        }
        if (stryMutAct_9fa48("38003") ? false : stryMutAct_9fa48("38002") ? true : (stryCov_9fa48("38002", "38003"), parseInt(uid, 10))) {
          if (stryMutAct_9fa48("38004")) {
            {}
          } else {
            stryCov_9fa48("38004");
            user.setUserField(uid, stryMutAct_9fa48("38005") ? "" : (stryCov_9fa48("38005"), 'lastonline'), Date.now());
          }
        }
        if (stryMutAct_9fa48("38008") ? parseInt(uid, 10) && meta.config.allowGuestReplyNotifications : stryMutAct_9fa48("38007") ? false : stryMutAct_9fa48("38006") ? true : (stryCov_9fa48("38006", "38007", "38008"), parseInt(uid, 10) || meta.config.allowGuestReplyNotifications)) {
          if (stryMutAct_9fa48("38009")) {
            {}
          } else {
            stryCov_9fa48("38009");
            const {
              displayname
            } = postData.user;
            Topics.notifyFollowers(postData, uid, stryMutAct_9fa48("38010") ? {} : (stryCov_9fa48("38010"), {
              type: stryMutAct_9fa48("38011") ? "" : (stryCov_9fa48("38011"), 'new-reply'),
              bodyShort: translator.compile(stryMutAct_9fa48("38012") ? "" : (stryCov_9fa48("38012"), 'notifications:user_posted_to'), displayname, postData.topic.title),
              nid: stryMutAct_9fa48("38013") ? `` : (stryCov_9fa48("38013"), `new_post:tid:${postData.topic.tid}:pid:${postData.pid}:uid:${uid}`),
              mergeId: stryMutAct_9fa48("38014") ? `` : (stryCov_9fa48("38014"), `notifications:user_posted_to|${postData.topic.tid}`)
            }));
          }
        }
        analytics.increment(stryMutAct_9fa48("38015") ? [] : (stryCov_9fa48("38015"), [stryMutAct_9fa48("38016") ? "" : (stryCov_9fa48("38016"), 'posts'), stryMutAct_9fa48("38017") ? `` : (stryCov_9fa48("38017"), `posts:byCid:${data.cid}`)]));
        plugins.hooks.fire(stryMutAct_9fa48("38018") ? "" : (stryCov_9fa48("38018"), 'action:topic.reply'), stryMutAct_9fa48("38019") ? {} : (stryCov_9fa48("38019"), {
          post: _.clone(postData),
          data: data
        }));
        return postData;
      }
    };
    async function onNewPost(postData, data) {
      if (stryMutAct_9fa48("38020")) {
        {}
      } else {
        stryCov_9fa48("38020");
        const {
          tid
        } = postData;
        const {
          uid
        } = postData;
        await Topics.markAsUnreadForAll(tid);
        await Topics.markAsRead(stryMutAct_9fa48("38021") ? [] : (stryCov_9fa48("38021"), [tid]), uid);
        const [userInfo, topicInfo] = await Promise.all(stryMutAct_9fa48("38022") ? [] : (stryCov_9fa48("38022"), [posts.getUserInfoForPosts(stryMutAct_9fa48("38023") ? [] : (stryCov_9fa48("38023"), [postData.uid]), uid), Topics.getTopicFields(tid, stryMutAct_9fa48("38024") ? [] : (stryCov_9fa48("38024"), [stryMutAct_9fa48("38025") ? "" : (stryCov_9fa48("38025"), 'tid'), stryMutAct_9fa48("38026") ? "" : (stryCov_9fa48("38026"), 'uid'), stryMutAct_9fa48("38027") ? "" : (stryCov_9fa48("38027"), 'title'), stryMutAct_9fa48("38028") ? "" : (stryCov_9fa48("38028"), 'slug'), stryMutAct_9fa48("38029") ? "" : (stryCov_9fa48("38029"), 'cid'), stryMutAct_9fa48("38030") ? "" : (stryCov_9fa48("38030"), 'postcount'), stryMutAct_9fa48("38031") ? "" : (stryCov_9fa48("38031"), 'mainPid'), stryMutAct_9fa48("38032") ? "" : (stryCov_9fa48("38032"), 'scheduled')])), Topics.addParentPosts(stryMutAct_9fa48("38033") ? [] : (stryCov_9fa48("38033"), [postData])), Topics.syncBacklinks(postData), posts.parsePost(postData)]));
        postData.user = userInfo[0];
        postData.topic = topicInfo;
        postData.index = stryMutAct_9fa48("38034") ? topicInfo.postcount + 1 : (stryCov_9fa48("38034"), topicInfo.postcount - 1);
        posts.overrideGuestHandle(postData, data.handle);
        postData.votes = 0;
        postData.bookmarked = stryMutAct_9fa48("38035") ? true : (stryCov_9fa48("38035"), false);
        postData.display_edit_tools = stryMutAct_9fa48("38036") ? false : (stryCov_9fa48("38036"), true);
        postData.display_delete_tools = stryMutAct_9fa48("38037") ? false : (stryCov_9fa48("38037"), true);
        postData.display_moderator_tools = stryMutAct_9fa48("38038") ? false : (stryCov_9fa48("38038"), true);
        postData.display_move_tools = stryMutAct_9fa48("38039") ? false : (stryCov_9fa48("38039"), true);
        postData.selfPost = stryMutAct_9fa48("38040") ? true : (stryCov_9fa48("38040"), false);
        postData.timestampISO = utils.toISOString(postData.timestamp);
        postData.topic.title = String(postData.topic.title);
        return postData;
      }
    }
    Topics.checkTitle = function (title) {
      if (stryMutAct_9fa48("38041")) {
        {}
      } else {
        stryCov_9fa48("38041");
        check(title, meta.config.minimumTitleLength, meta.config.maximumTitleLength, stryMutAct_9fa48("38042") ? "" : (stryCov_9fa48("38042"), 'title-too-short'), stryMutAct_9fa48("38043") ? "" : (stryCov_9fa48("38043"), 'title-too-long'));
      }
    };
    Topics.checkContent = function (content) {
      if (stryMutAct_9fa48("38044")) {
        {}
      } else {
        stryCov_9fa48("38044");
        check(content, meta.config.minimumPostLength, meta.config.maximumPostLength, stryMutAct_9fa48("38045") ? "" : (stryCov_9fa48("38045"), 'content-too-short'), stryMutAct_9fa48("38046") ? "" : (stryCov_9fa48("38046"), 'content-too-long'));
      }
    };
    function check(item, min, max, minError, maxError) {
      if (stryMutAct_9fa48("38047")) {
        {}
      } else {
        stryCov_9fa48("38047");
        // Trim and remove HTML (latter for composers that send in HTML, like redactor)
        if (stryMutAct_9fa48("38050") ? typeof item !== 'string' : stryMutAct_9fa48("38049") ? false : stryMutAct_9fa48("38048") ? true : (stryCov_9fa48("38048", "38049", "38050"), typeof item === (stryMutAct_9fa48("38051") ? "" : (stryCov_9fa48("38051"), 'string')))) {
          if (stryMutAct_9fa48("38052")) {
            {}
          } else {
            stryCov_9fa48("38052");
            item = stryMutAct_9fa48("38053") ? utils.stripHTMLTags(item) : (stryCov_9fa48("38053"), utils.stripHTMLTags(item).trim());
          }
        }
        if (stryMutAct_9fa48("38056") ? (item === null || item === undefined) && item.length < parseInt(min, 10) : stryMutAct_9fa48("38055") ? false : stryMutAct_9fa48("38054") ? true : (stryCov_9fa48("38054", "38055", "38056"), (stryMutAct_9fa48("38058") ? item === null && item === undefined : stryMutAct_9fa48("38057") ? false : (stryCov_9fa48("38057", "38058"), (stryMutAct_9fa48("38060") ? item !== null : stryMutAct_9fa48("38059") ? false : (stryCov_9fa48("38059", "38060"), item === null)) || (stryMutAct_9fa48("38062") ? item !== undefined : stryMutAct_9fa48("38061") ? false : (stryCov_9fa48("38061", "38062"), item === undefined)))) || (stryMutAct_9fa48("38065") ? item.length >= parseInt(min, 10) : stryMutAct_9fa48("38064") ? item.length <= parseInt(min, 10) : stryMutAct_9fa48("38063") ? false : (stryCov_9fa48("38063", "38064", "38065"), item.length < parseInt(min, 10))))) {
          if (stryMutAct_9fa48("38066")) {
            {}
          } else {
            stryCov_9fa48("38066");
            throw new Error(stryMutAct_9fa48("38067") ? `` : (stryCov_9fa48("38067"), `[[error:${minError}, ${min}]]`));
          }
        } else if (stryMutAct_9fa48("38071") ? item.length <= parseInt(max, 10) : stryMutAct_9fa48("38070") ? item.length >= parseInt(max, 10) : stryMutAct_9fa48("38069") ? false : stryMutAct_9fa48("38068") ? true : (stryCov_9fa48("38068", "38069", "38070", "38071"), item.length > parseInt(max, 10))) {
          if (stryMutAct_9fa48("38072")) {
            {}
          } else {
            stryCov_9fa48("38072");
            throw new Error(stryMutAct_9fa48("38073") ? `` : (stryCov_9fa48("38073"), `[[error:${maxError}, ${max}]]`));
          }
        }
      }
    }
    async function guestHandleValid(data) {
      if (stryMutAct_9fa48("38074")) {
        {}
      } else {
        stryCov_9fa48("38074");
        if (stryMutAct_9fa48("38077") ? meta.config.allowGuestHandles && parseInt(data.uid, 10) === 0 || data.handle : stryMutAct_9fa48("38076") ? false : stryMutAct_9fa48("38075") ? true : (stryCov_9fa48("38075", "38076", "38077"), (stryMutAct_9fa48("38079") ? meta.config.allowGuestHandles || parseInt(data.uid, 10) === 0 : stryMutAct_9fa48("38078") ? true : (stryCov_9fa48("38078", "38079"), meta.config.allowGuestHandles && (stryMutAct_9fa48("38081") ? parseInt(data.uid, 10) !== 0 : stryMutAct_9fa48("38080") ? true : (stryCov_9fa48("38080", "38081"), parseInt(data.uid, 10) === 0)))) && data.handle)) {
          if (stryMutAct_9fa48("38082")) {
            {}
          } else {
            stryCov_9fa48("38082");
            if (stryMutAct_9fa48("38086") ? data.handle.length <= meta.config.maximumUsernameLength : stryMutAct_9fa48("38085") ? data.handle.length >= meta.config.maximumUsernameLength : stryMutAct_9fa48("38084") ? false : stryMutAct_9fa48("38083") ? true : (stryCov_9fa48("38083", "38084", "38085", "38086"), data.handle.length > meta.config.maximumUsernameLength)) {
              if (stryMutAct_9fa48("38087")) {
                {}
              } else {
                stryCov_9fa48("38087");
                throw new Error(stryMutAct_9fa48("38088") ? "" : (stryCov_9fa48("38088"), '[[error:guest-handle-invalid]]'));
              }
            }
            const exists = await user.existsBySlug(slugify(data.handle));
            if (stryMutAct_9fa48("38090") ? false : stryMutAct_9fa48("38089") ? true : (stryCov_9fa48("38089", "38090"), exists)) {
              if (stryMutAct_9fa48("38091")) {
                {}
              } else {
                stryCov_9fa48("38091");
                throw new Error(stryMutAct_9fa48("38092") ? "" : (stryCov_9fa48("38092"), '[[error:username-taken]]'));
              }
            }
          }
        }
      }
    }
    async function canReply(data, topicData) {
      if (stryMutAct_9fa48("38093")) {
        {}
      } else {
        stryCov_9fa48("38093");
        if (stryMutAct_9fa48("38096") ? false : stryMutAct_9fa48("38095") ? true : stryMutAct_9fa48("38094") ? topicData : (stryCov_9fa48("38094", "38095", "38096"), !topicData)) {
          if (stryMutAct_9fa48("38097")) {
            {}
          } else {
            stryCov_9fa48("38097");
            throw new Error(stryMutAct_9fa48("38098") ? "" : (stryCov_9fa48("38098"), '[[error:no-topic]]'));
          }
        }
        const {
          tid,
          uid
        } = data;
        const {
          cid,
          deleted,
          locked,
          scheduled
        } = topicData;
        const [canReply, canSchedule, isAdminOrMod] = await Promise.all(stryMutAct_9fa48("38099") ? [] : (stryCov_9fa48("38099"), [privileges.topics.can(stryMutAct_9fa48("38100") ? "" : (stryCov_9fa48("38100"), 'topics:reply'), tid, uid), privileges.topics.can(stryMutAct_9fa48("38101") ? "" : (stryCov_9fa48("38101"), 'topics:schedule'), tid, uid), privileges.categories.isAdminOrMod(cid, uid)]));
        if (stryMutAct_9fa48("38104") ? locked || !isAdminOrMod : stryMutAct_9fa48("38103") ? false : stryMutAct_9fa48("38102") ? true : (stryCov_9fa48("38102", "38103", "38104"), locked && (stryMutAct_9fa48("38105") ? isAdminOrMod : (stryCov_9fa48("38105"), !isAdminOrMod)))) {
          if (stryMutAct_9fa48("38106")) {
            {}
          } else {
            stryCov_9fa48("38106");
            throw new Error(stryMutAct_9fa48("38107") ? "" : (stryCov_9fa48("38107"), '[[error:topic-locked]]'));
          }
        }
        if (stryMutAct_9fa48("38110") ? !scheduled && deleted || !isAdminOrMod : stryMutAct_9fa48("38109") ? false : stryMutAct_9fa48("38108") ? true : (stryCov_9fa48("38108", "38109", "38110"), (stryMutAct_9fa48("38112") ? !scheduled || deleted : stryMutAct_9fa48("38111") ? true : (stryCov_9fa48("38111", "38112"), (stryMutAct_9fa48("38113") ? scheduled : (stryCov_9fa48("38113"), !scheduled)) && deleted)) && (stryMutAct_9fa48("38114") ? isAdminOrMod : (stryCov_9fa48("38114"), !isAdminOrMod)))) {
          if (stryMutAct_9fa48("38115")) {
            {}
          } else {
            stryCov_9fa48("38115");
            throw new Error(stryMutAct_9fa48("38116") ? "" : (stryCov_9fa48("38116"), '[[error:topic-deleted]]'));
          }
        }
        if (stryMutAct_9fa48("38119") ? scheduled || !canSchedule : stryMutAct_9fa48("38118") ? false : stryMutAct_9fa48("38117") ? true : (stryCov_9fa48("38117", "38118", "38119"), scheduled && (stryMutAct_9fa48("38120") ? canSchedule : (stryCov_9fa48("38120"), !canSchedule)))) {
          if (stryMutAct_9fa48("38121")) {
            {}
          } else {
            stryCov_9fa48("38121");
            throw new Error(stryMutAct_9fa48("38122") ? "" : (stryCov_9fa48("38122"), '[[error:no-privileges]]'));
          }
        }
        if (stryMutAct_9fa48("38125") ? false : stryMutAct_9fa48("38124") ? true : stryMutAct_9fa48("38123") ? canReply : (stryCov_9fa48("38123", "38124", "38125"), !canReply)) {
          if (stryMutAct_9fa48("38126")) {
            {}
          } else {
            stryCov_9fa48("38126");
            throw new Error(stryMutAct_9fa48("38127") ? "" : (stryCov_9fa48("38127"), '[[error:no-privileges]]'));
          }
        }
      }
    }
  }
};