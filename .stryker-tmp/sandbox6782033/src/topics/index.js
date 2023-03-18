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
const validator = require('validator');
const db = require('../database');
const posts = require('../posts');
const utils = require('../utils');
const plugins = require('../plugins');
const meta = require('../meta');
const user = require('../user');
const categories = require('../categories');
const privileges = require('../privileges');
const social = require('../social');
const Topics = module.exports;
require('./data')(Topics);
require('./create')(Topics);
require('./delete')(Topics);
require('./sorted')(Topics);
require('./unread')(Topics);
require('./recent')(Topics);
require('./user')(Topics);
require('./fork')(Topics);
require('./posts')(Topics);
require('./follow')(Topics);
require('./tags')(Topics);
require('./teaser')(Topics);
Topics.scheduled = require('./scheduled');
require('./suggested')(Topics);
require('./tools')(Topics);
Topics.thumbs = require('./thumbs');
require('./bookmarks')(Topics);
require('./merge')(Topics);
Topics.events = require('./events');
Topics.exists = async function (tids) {
  if (stryMutAct_9fa48("38858")) {
    {}
  } else {
    stryCov_9fa48("38858");
    return await db.exists(Array.isArray(tids) ? tids.map(stryMutAct_9fa48("38859") ? () => undefined : (stryCov_9fa48("38859"), tid => stryMutAct_9fa48("38860") ? `` : (stryCov_9fa48("38860"), `topic:${tid}`))) : stryMutAct_9fa48("38861") ? `` : (stryCov_9fa48("38861"), `topic:${tids}`));
  }
};
Topics.getTopicsFromSet = async function (set, uid, start, stop) {
  if (stryMutAct_9fa48("38862")) {
    {}
  } else {
    stryCov_9fa48("38862");
    const tids = await db.getSortedSetRevRange(set, start, stop);
    const topics = await Topics.getTopics(tids, uid);
    Topics.calculateTopicIndices(topics, start);
    return stryMutAct_9fa48("38863") ? {} : (stryCov_9fa48("38863"), {
      topics: topics,
      nextStart: stryMutAct_9fa48("38864") ? stop - 1 : (stryCov_9fa48("38864"), stop + 1)
    });
  }
};
Topics.getTopics = async function (tids, options) {
  if (stryMutAct_9fa48("38865")) {
    {}
  } else {
    stryCov_9fa48("38865");
    let uid = options;
    if (stryMutAct_9fa48("38868") ? typeof options !== 'object' : stryMutAct_9fa48("38867") ? false : stryMutAct_9fa48("38866") ? true : (stryCov_9fa48("38866", "38867", "38868"), typeof options === (stryMutAct_9fa48("38869") ? "" : (stryCov_9fa48("38869"), 'object')))) {
      if (stryMutAct_9fa48("38870")) {
        {}
      } else {
        stryCov_9fa48("38870");
        uid = options.uid;
      }
    }
    tids = await privileges.topics.filterTids(stryMutAct_9fa48("38871") ? "" : (stryCov_9fa48("38871"), 'topics:read'), tids, uid);
    return await Topics.getTopicsByTids(tids, options);
  }
};
Topics.getTopicsByTids = async function (tids, options) {
  if (stryMutAct_9fa48("38872")) {
    {}
  } else {
    stryCov_9fa48("38872");
    if (stryMutAct_9fa48("38875") ? !Array.isArray(tids) && !tids.length : stryMutAct_9fa48("38874") ? false : stryMutAct_9fa48("38873") ? true : (stryCov_9fa48("38873", "38874", "38875"), (stryMutAct_9fa48("38876") ? Array.isArray(tids) : (stryCov_9fa48("38876"), !Array.isArray(tids))) || (stryMutAct_9fa48("38877") ? tids.length : (stryCov_9fa48("38877"), !tids.length)))) {
      if (stryMutAct_9fa48("38878")) {
        {}
      } else {
        stryCov_9fa48("38878");
        return stryMutAct_9fa48("38879") ? ["Stryker was here"] : (stryCov_9fa48("38879"), []);
      }
    }
    let uid = options;
    if (stryMutAct_9fa48("38882") ? typeof options !== 'object' : stryMutAct_9fa48("38881") ? false : stryMutAct_9fa48("38880") ? true : (stryCov_9fa48("38880", "38881", "38882"), typeof options === (stryMutAct_9fa48("38883") ? "" : (stryCov_9fa48("38883"), 'object')))) {
      if (stryMutAct_9fa48("38884")) {
        {}
      } else {
        stryCov_9fa48("38884");
        uid = options.uid;
      }
    }
    async function loadTopics() {
      if (stryMutAct_9fa48("38885")) {
        {}
      } else {
        stryCov_9fa48("38885");
        const topics = await Topics.getTopicsData(tids);
        const uids = _.uniq(stryMutAct_9fa48("38886") ? topics.map(t => t && t.uid && t.uid.toString()) : (stryCov_9fa48("38886"), topics.map(stryMutAct_9fa48("38887") ? () => undefined : (stryCov_9fa48("38887"), t => stryMutAct_9fa48("38890") ? t && t.uid || t.uid.toString() : stryMutAct_9fa48("38889") ? false : stryMutAct_9fa48("38888") ? true : (stryCov_9fa48("38888", "38889", "38890"), (stryMutAct_9fa48("38892") ? t || t.uid : stryMutAct_9fa48("38891") ? true : (stryCov_9fa48("38891", "38892"), t && t.uid)) && t.uid.toString()))).filter(stryMutAct_9fa48("38893") ? () => undefined : (stryCov_9fa48("38893"), v => utils.isNumber(v)))));
        const cids = _.uniq(stryMutAct_9fa48("38894") ? topics.map(t => t && t.cid && t.cid.toString()) : (stryCov_9fa48("38894"), topics.map(stryMutAct_9fa48("38895") ? () => undefined : (stryCov_9fa48("38895"), t => stryMutAct_9fa48("38898") ? t && t.cid || t.cid.toString() : stryMutAct_9fa48("38897") ? false : stryMutAct_9fa48("38896") ? true : (stryCov_9fa48("38896", "38897", "38898"), (stryMutAct_9fa48("38900") ? t || t.cid : stryMutAct_9fa48("38899") ? true : (stryCov_9fa48("38899", "38900"), t && t.cid)) && t.cid.toString()))).filter(stryMutAct_9fa48("38901") ? () => undefined : (stryCov_9fa48("38901"), v => utils.isNumber(v)))));
        const guestTopics = stryMutAct_9fa48("38902") ? topics : (stryCov_9fa48("38902"), topics.filter(stryMutAct_9fa48("38903") ? () => undefined : (stryCov_9fa48("38903"), t => stryMutAct_9fa48("38906") ? t || t.uid === 0 : stryMutAct_9fa48("38905") ? false : stryMutAct_9fa48("38904") ? true : (stryCov_9fa48("38904", "38905", "38906"), t && (stryMutAct_9fa48("38908") ? t.uid !== 0 : stryMutAct_9fa48("38907") ? true : (stryCov_9fa48("38907", "38908"), t.uid === 0))))));
        async function loadGuestHandles() {
          if (stryMutAct_9fa48("38909")) {
            {}
          } else {
            stryCov_9fa48("38909");
            const mainPids = guestTopics.map(stryMutAct_9fa48("38910") ? () => undefined : (stryCov_9fa48("38910"), t => t.mainPid));
            const postData = await posts.getPostsFields(mainPids, stryMutAct_9fa48("38911") ? [] : (stryCov_9fa48("38911"), [stryMutAct_9fa48("38912") ? "" : (stryCov_9fa48("38912"), 'handle')]));
            return postData.map(stryMutAct_9fa48("38913") ? () => undefined : (stryCov_9fa48("38913"), p => p.handle));
          }
        }
        async function loadShowfullnameSettings() {
          if (stryMutAct_9fa48("38914")) {
            {}
          } else {
            stryCov_9fa48("38914");
            if (stryMutAct_9fa48("38916") ? false : stryMutAct_9fa48("38915") ? true : (stryCov_9fa48("38915", "38916"), meta.config.hideFullname)) {
              if (stryMutAct_9fa48("38917")) {
                {}
              } else {
                stryCov_9fa48("38917");
                return uids.map(stryMutAct_9fa48("38918") ? () => undefined : (stryCov_9fa48("38918"), () => stryMutAct_9fa48("38919") ? {} : (stryCov_9fa48("38919"), {
                  showfullname: stryMutAct_9fa48("38920") ? true : (stryCov_9fa48("38920"), false)
                })));
              }
            }
            const data = await db.getObjectsFields(uids.map(stryMutAct_9fa48("38921") ? () => undefined : (stryCov_9fa48("38921"), uid => stryMutAct_9fa48("38922") ? `` : (stryCov_9fa48("38922"), `user:${uid}:settings`))), stryMutAct_9fa48("38923") ? [] : (stryCov_9fa48("38923"), [stryMutAct_9fa48("38924") ? "" : (stryCov_9fa48("38924"), 'showfullname')]));
            data.forEach(settings => {
              if (stryMutAct_9fa48("38925")) {
                {}
              } else {
                stryCov_9fa48("38925");
                settings.showfullname = stryMutAct_9fa48("38928") ? parseInt(settings.showfullname, 10) !== 1 : stryMutAct_9fa48("38927") ? false : stryMutAct_9fa48("38926") ? true : (stryCov_9fa48("38926", "38927", "38928"), parseInt(settings.showfullname, 10) === 1);
              }
            });
            return data;
          }
        }
        const [teasers, users, userSettings, categoriesData, guestHandles, thumbs] = await Promise.all(stryMutAct_9fa48("38929") ? [] : (stryCov_9fa48("38929"), [Topics.getTeasers(topics, options), user.getUsersFields(uids, stryMutAct_9fa48("38930") ? [] : (stryCov_9fa48("38930"), [stryMutAct_9fa48("38931") ? "" : (stryCov_9fa48("38931"), 'uid'), stryMutAct_9fa48("38932") ? "" : (stryCov_9fa48("38932"), 'username'), stryMutAct_9fa48("38933") ? "" : (stryCov_9fa48("38933"), 'fullname'), stryMutAct_9fa48("38934") ? "" : (stryCov_9fa48("38934"), 'userslug'), stryMutAct_9fa48("38935") ? "" : (stryCov_9fa48("38935"), 'reputation'), stryMutAct_9fa48("38936") ? "" : (stryCov_9fa48("38936"), 'postcount'), stryMutAct_9fa48("38937") ? "" : (stryCov_9fa48("38937"), 'picture'), stryMutAct_9fa48("38938") ? "" : (stryCov_9fa48("38938"), 'signature'), stryMutAct_9fa48("38939") ? "" : (stryCov_9fa48("38939"), 'banned'), stryMutAct_9fa48("38940") ? "" : (stryCov_9fa48("38940"), 'status')])), loadShowfullnameSettings(), categories.getCategoriesFields(cids, stryMutAct_9fa48("38941") ? [] : (stryCov_9fa48("38941"), [stryMutAct_9fa48("38942") ? "" : (stryCov_9fa48("38942"), 'cid'), stryMutAct_9fa48("38943") ? "" : (stryCov_9fa48("38943"), 'name'), stryMutAct_9fa48("38944") ? "" : (stryCov_9fa48("38944"), 'slug'), stryMutAct_9fa48("38945") ? "" : (stryCov_9fa48("38945"), 'icon'), stryMutAct_9fa48("38946") ? "" : (stryCov_9fa48("38946"), 'backgroundImage'), stryMutAct_9fa48("38947") ? "" : (stryCov_9fa48("38947"), 'imageClass'), stryMutAct_9fa48("38948") ? "" : (stryCov_9fa48("38948"), 'bgColor'), stryMutAct_9fa48("38949") ? "" : (stryCov_9fa48("38949"), 'color'), stryMutAct_9fa48("38950") ? "" : (stryCov_9fa48("38950"), 'disabled')])), loadGuestHandles(), Topics.thumbs.load(topics)]));
        users.forEach((userObj, idx) => {
          if (stryMutAct_9fa48("38951")) {
            {}
          } else {
            stryCov_9fa48("38951");
            // Hide fullname if needed
            if (stryMutAct_9fa48("38954") ? false : stryMutAct_9fa48("38953") ? true : stryMutAct_9fa48("38952") ? userSettings[idx].showfullname : (stryCov_9fa48("38952", "38953", "38954"), !userSettings[idx].showfullname)) {
              if (stryMutAct_9fa48("38955")) {
                {}
              } else {
                stryCov_9fa48("38955");
                userObj.fullname = undefined;
              }
            }
          }
        });
        return stryMutAct_9fa48("38956") ? {} : (stryCov_9fa48("38956"), {
          topics,
          teasers,
          usersMap: _.zipObject(uids, users),
          categoriesMap: _.zipObject(cids, categoriesData),
          tidToGuestHandle: _.zipObject(guestTopics.map(stryMutAct_9fa48("38957") ? () => undefined : (stryCov_9fa48("38957"), t => t.tid)), guestHandles),
          thumbs
        });
      }
    }
    const [result, hasRead, isIgnored, bookmarks, callerSettings] = await Promise.all(stryMutAct_9fa48("38958") ? [] : (stryCov_9fa48("38958"), [loadTopics(), Topics.hasReadTopics(tids, uid), Topics.isIgnoring(tids, uid), Topics.getUserBookmarks(tids, uid), user.getSettings(uid)]));
    const sortNewToOld = stryMutAct_9fa48("38961") ? callerSettings.topicPostSort !== 'newest_to_oldest' : stryMutAct_9fa48("38960") ? false : stryMutAct_9fa48("38959") ? true : (stryCov_9fa48("38959", "38960", "38961"), callerSettings.topicPostSort === (stryMutAct_9fa48("38962") ? "" : (stryCov_9fa48("38962"), 'newest_to_oldest')));
    result.topics.forEach((topic, i) => {
      if (stryMutAct_9fa48("38963")) {
        {}
      } else {
        stryCov_9fa48("38963");
        if (stryMutAct_9fa48("38965") ? false : stryMutAct_9fa48("38964") ? true : (stryCov_9fa48("38964", "38965"), topic)) {
          if (stryMutAct_9fa48("38966")) {
            {}
          } else {
            stryCov_9fa48("38966");
            topic.thumbs = result.thumbs[i];
            topic.category = result.categoriesMap[topic.cid];
            topic.user = topic.uid ? result.usersMap[topic.uid] : stryMutAct_9fa48("38967") ? {} : (stryCov_9fa48("38967"), {
              ...result.usersMap[topic.uid]
            });
            if (stryMutAct_9fa48("38969") ? false : stryMutAct_9fa48("38968") ? true : (stryCov_9fa48("38968", "38969"), result.tidToGuestHandle[topic.tid])) {
              if (stryMutAct_9fa48("38970")) {
                {}
              } else {
                stryCov_9fa48("38970");
                topic.user.username = validator.escape(result.tidToGuestHandle[topic.tid]);
                topic.user.displayname = topic.user.username;
              }
            }
            topic.teaser = stryMutAct_9fa48("38973") ? result.teasers[i] && null : stryMutAct_9fa48("38972") ? false : stryMutAct_9fa48("38971") ? true : (stryCov_9fa48("38971", "38972", "38973"), result.teasers[i] || null);
            topic.isOwner = stryMutAct_9fa48("38976") ? topic.uid !== parseInt(uid, 10) : stryMutAct_9fa48("38975") ? false : stryMutAct_9fa48("38974") ? true : (stryCov_9fa48("38974", "38975", "38976"), topic.uid === parseInt(uid, 10));
            topic.ignored = isIgnored[i];
            topic.unread = stryMutAct_9fa48("38979") ? parseInt(uid, 10) <= 0 && !hasRead[i] && !isIgnored[i] : stryMutAct_9fa48("38978") ? false : stryMutAct_9fa48("38977") ? true : (stryCov_9fa48("38977", "38978", "38979"), (stryMutAct_9fa48("38982") ? parseInt(uid, 10) > 0 : stryMutAct_9fa48("38981") ? parseInt(uid, 10) < 0 : stryMutAct_9fa48("38980") ? false : (stryCov_9fa48("38980", "38981", "38982"), parseInt(uid, 10) <= 0)) || (stryMutAct_9fa48("38984") ? !hasRead[i] || !isIgnored[i] : stryMutAct_9fa48("38983") ? false : (stryCov_9fa48("38983", "38984"), (stryMutAct_9fa48("38985") ? hasRead[i] : (stryCov_9fa48("38985"), !hasRead[i])) && (stryMutAct_9fa48("38986") ? isIgnored[i] : (stryCov_9fa48("38986"), !isIgnored[i])))));
            topic.bookmark = sortNewToOld ? Math.max(1, stryMutAct_9fa48("38987") ? topic.postcount + 2 + bookmarks[i] : (stryCov_9fa48("38987"), (stryMutAct_9fa48("38988") ? topic.postcount - 2 : (stryCov_9fa48("38988"), topic.postcount + 2)) - bookmarks[i])) : Math.min(topic.postcount, stryMutAct_9fa48("38989") ? bookmarks[i] - 1 : (stryCov_9fa48("38989"), bookmarks[i] + 1));
            topic.unreplied = stryMutAct_9fa48("38990") ? topic.teaser : (stryCov_9fa48("38990"), !topic.teaser);
            topic.icons = stryMutAct_9fa48("38991") ? ["Stryker was here"] : (stryCov_9fa48("38991"), []);
          }
        }
      }
    });
    const filteredTopics = stryMutAct_9fa48("38992") ? result.topics : (stryCov_9fa48("38992"), result.topics.filter(stryMutAct_9fa48("38993") ? () => undefined : (stryCov_9fa48("38993"), topic => stryMutAct_9fa48("38996") ? topic && topic.category || !topic.category.disabled : stryMutAct_9fa48("38995") ? false : stryMutAct_9fa48("38994") ? true : (stryCov_9fa48("38994", "38995", "38996"), (stryMutAct_9fa48("38998") ? topic || topic.category : stryMutAct_9fa48("38997") ? true : (stryCov_9fa48("38997", "38998"), topic && topic.category)) && (stryMutAct_9fa48("38999") ? topic.category.disabled : (stryCov_9fa48("38999"), !topic.category.disabled))))));
    const hookResult = await plugins.hooks.fire(stryMutAct_9fa48("39000") ? "" : (stryCov_9fa48("39000"), 'filter:topics.get'), stryMutAct_9fa48("39001") ? {} : (stryCov_9fa48("39001"), {
      topics: filteredTopics,
      uid: uid
    }));
    return hookResult.topics;
  }
};
Topics.getTopicWithPosts = async function (topicData, set, uid, start, stop, reverse) {
  if (stryMutAct_9fa48("39002")) {
    {}
  } else {
    stryCov_9fa48("39002");
    const [posts, category, tagWhitelist, threadTools, followData, bookmark, postSharing, deleter, merger, related, thumbs, events] = await Promise.all(stryMutAct_9fa48("39003") ? [] : (stryCov_9fa48("39003"), [Topics.getTopicPosts(topicData, set, start, stop, uid, reverse), categories.getCategoryData(topicData.cid), categories.getTagWhitelist(stryMutAct_9fa48("39004") ? [] : (stryCov_9fa48("39004"), [topicData.cid])), plugins.hooks.fire(stryMutAct_9fa48("39005") ? "" : (stryCov_9fa48("39005"), 'filter:topic.thread_tools'), stryMutAct_9fa48("39006") ? {} : (stryCov_9fa48("39006"), {
      topic: topicData,
      uid: uid,
      tools: stryMutAct_9fa48("39007") ? ["Stryker was here"] : (stryCov_9fa48("39007"), [])
    })), Topics.getFollowData(stryMutAct_9fa48("39008") ? [] : (stryCov_9fa48("39008"), [topicData.tid]), uid), Topics.getUserBookmark(topicData.tid, uid), social.getActivePostSharing(), getDeleter(topicData), getMerger(topicData), Topics.getRelatedTopics(topicData, uid), Topics.thumbs.load(stryMutAct_9fa48("39009") ? [] : (stryCov_9fa48("39009"), [topicData])), Topics.events.get(topicData.tid, uid, reverse)]));
    topicData.thumbs = thumbs[0];
    topicData.posts = posts;
    topicData.events = events;
    topicData.posts.forEach(p => {
      if (stryMutAct_9fa48("39010")) {
        {}
      } else {
        stryCov_9fa48("39010");
        p.events = stryMutAct_9fa48("39011") ? events : (stryCov_9fa48("39011"), events.filter(stryMutAct_9fa48("39012") ? () => undefined : (stryCov_9fa48("39012"), event => stryMutAct_9fa48("39015") ? event.timestamp >= p.eventStart || event.timestamp < p.eventEnd : stryMutAct_9fa48("39014") ? false : stryMutAct_9fa48("39013") ? true : (stryCov_9fa48("39013", "39014", "39015"), (stryMutAct_9fa48("39018") ? event.timestamp < p.eventStart : stryMutAct_9fa48("39017") ? event.timestamp > p.eventStart : stryMutAct_9fa48("39016") ? true : (stryCov_9fa48("39016", "39017", "39018"), event.timestamp >= p.eventStart)) && (stryMutAct_9fa48("39021") ? event.timestamp >= p.eventEnd : stryMutAct_9fa48("39020") ? event.timestamp <= p.eventEnd : stryMutAct_9fa48("39019") ? true : (stryCov_9fa48("39019", "39020", "39021"), event.timestamp < p.eventEnd))))));
      }
    });
    topicData.category = category;
    topicData.tagWhitelist = tagWhitelist[0];
    topicData.minTags = category.minTags;
    topicData.maxTags = category.maxTags;
    topicData.thread_tools = threadTools.tools;
    topicData.isFollowing = followData[0].following;
    topicData.isNotFollowing = stryMutAct_9fa48("39024") ? !followData[0].following || !followData[0].ignoring : stryMutAct_9fa48("39023") ? false : stryMutAct_9fa48("39022") ? true : (stryCov_9fa48("39022", "39023", "39024"), (stryMutAct_9fa48("39025") ? followData[0].following : (stryCov_9fa48("39025"), !followData[0].following)) && (stryMutAct_9fa48("39026") ? followData[0].ignoring : (stryCov_9fa48("39026"), !followData[0].ignoring)));
    topicData.isIgnoring = followData[0].ignoring;
    topicData.bookmark = bookmark;
    topicData.postSharing = postSharing;
    topicData.deleter = deleter;
    if (stryMutAct_9fa48("39028") ? false : stryMutAct_9fa48("39027") ? true : (stryCov_9fa48("39027", "39028"), deleter)) {
      if (stryMutAct_9fa48("39029")) {
        {}
      } else {
        stryCov_9fa48("39029");
        topicData.deletedTimestampISO = utils.toISOString(topicData.deletedTimestamp);
      }
    }
    topicData.merger = merger;
    if (stryMutAct_9fa48("39031") ? false : stryMutAct_9fa48("39030") ? true : (stryCov_9fa48("39030", "39031"), merger)) {
      if (stryMutAct_9fa48("39032")) {
        {}
      } else {
        stryCov_9fa48("39032");
        topicData.mergedTimestampISO = utils.toISOString(topicData.mergedTimestamp);
      }
    }
    topicData.related = stryMutAct_9fa48("39035") ? related && [] : stryMutAct_9fa48("39034") ? false : stryMutAct_9fa48("39033") ? true : (stryCov_9fa48("39033", "39034", "39035"), related || (stryMutAct_9fa48("39036") ? ["Stryker was here"] : (stryCov_9fa48("39036"), [])));
    topicData.unreplied = stryMutAct_9fa48("39039") ? topicData.postcount !== 1 : stryMutAct_9fa48("39038") ? false : stryMutAct_9fa48("39037") ? true : (stryCov_9fa48("39037", "39038", "39039"), topicData.postcount === 1);
    topicData.icons = stryMutAct_9fa48("39040") ? ["Stryker was here"] : (stryCov_9fa48("39040"), []);
    const result = await plugins.hooks.fire(stryMutAct_9fa48("39041") ? "" : (stryCov_9fa48("39041"), 'filter:topic.get'), stryMutAct_9fa48("39042") ? {} : (stryCov_9fa48("39042"), {
      topic: topicData,
      uid: uid
    }));
    return result.topic;
  }
};
async function getDeleter(topicData) {
  if (stryMutAct_9fa48("39043")) {
    {}
  } else {
    stryCov_9fa48("39043");
    if (stryMutAct_9fa48("39046") ? false : stryMutAct_9fa48("39045") ? true : stryMutAct_9fa48("39044") ? parseInt(topicData.deleterUid, 10) : (stryCov_9fa48("39044", "39045", "39046"), !parseInt(topicData.deleterUid, 10))) {
      if (stryMutAct_9fa48("39047")) {
        {}
      } else {
        stryCov_9fa48("39047");
        return null;
      }
    }
    return await user.getUserFields(topicData.deleterUid, stryMutAct_9fa48("39048") ? [] : (stryCov_9fa48("39048"), [stryMutAct_9fa48("39049") ? "" : (stryCov_9fa48("39049"), 'username'), stryMutAct_9fa48("39050") ? "" : (stryCov_9fa48("39050"), 'userslug'), stryMutAct_9fa48("39051") ? "" : (stryCov_9fa48("39051"), 'picture')]));
  }
}
async function getMerger(topicData) {
  if (stryMutAct_9fa48("39052")) {
    {}
  } else {
    stryCov_9fa48("39052");
    if (stryMutAct_9fa48("39055") ? false : stryMutAct_9fa48("39054") ? true : stryMutAct_9fa48("39053") ? parseInt(topicData.mergerUid, 10) : (stryCov_9fa48("39053", "39054", "39055"), !parseInt(topicData.mergerUid, 10))) {
      if (stryMutAct_9fa48("39056")) {
        {}
      } else {
        stryCov_9fa48("39056");
        return null;
      }
    }
    const [merger, mergedIntoTitle] = await Promise.all(stryMutAct_9fa48("39057") ? [] : (stryCov_9fa48("39057"), [user.getUserFields(topicData.mergerUid, stryMutAct_9fa48("39058") ? [] : (stryCov_9fa48("39058"), [stryMutAct_9fa48("39059") ? "" : (stryCov_9fa48("39059"), 'username'), stryMutAct_9fa48("39060") ? "" : (stryCov_9fa48("39060"), 'userslug'), stryMutAct_9fa48("39061") ? "" : (stryCov_9fa48("39061"), 'picture')])), Topics.getTopicField(topicData.mergeIntoTid, stryMutAct_9fa48("39062") ? "" : (stryCov_9fa48("39062"), 'title'))]));
    merger.mergedIntoTitle = mergedIntoTitle;
    return merger;
  }
}
Topics.getMainPost = async function (tid, uid) {
  if (stryMutAct_9fa48("39063")) {
    {}
  } else {
    stryCov_9fa48("39063");
    const mainPosts = await Topics.getMainPosts(stryMutAct_9fa48("39064") ? [] : (stryCov_9fa48("39064"), [tid]), uid);
    return (stryMutAct_9fa48("39067") ? Array.isArray(mainPosts) || mainPosts.length : stryMutAct_9fa48("39066") ? false : stryMutAct_9fa48("39065") ? true : (stryCov_9fa48("39065", "39066", "39067"), Array.isArray(mainPosts) && mainPosts.length)) ? mainPosts[0] : null;
  }
};
Topics.getMainPids = async function (tids) {
  if (stryMutAct_9fa48("39068")) {
    {}
  } else {
    stryCov_9fa48("39068");
    if (stryMutAct_9fa48("39071") ? !Array.isArray(tids) && !tids.length : stryMutAct_9fa48("39070") ? false : stryMutAct_9fa48("39069") ? true : (stryCov_9fa48("39069", "39070", "39071"), (stryMutAct_9fa48("39072") ? Array.isArray(tids) : (stryCov_9fa48("39072"), !Array.isArray(tids))) || (stryMutAct_9fa48("39073") ? tids.length : (stryCov_9fa48("39073"), !tids.length)))) {
      if (stryMutAct_9fa48("39074")) {
        {}
      } else {
        stryCov_9fa48("39074");
        return stryMutAct_9fa48("39075") ? ["Stryker was here"] : (stryCov_9fa48("39075"), []);
      }
    }
    const topicData = await Topics.getTopicsFields(tids, stryMutAct_9fa48("39076") ? [] : (stryCov_9fa48("39076"), [stryMutAct_9fa48("39077") ? "" : (stryCov_9fa48("39077"), 'mainPid')]));
    return topicData.map(stryMutAct_9fa48("39078") ? () => undefined : (stryCov_9fa48("39078"), topic => stryMutAct_9fa48("39081") ? topic || topic.mainPid : stryMutAct_9fa48("39080") ? false : stryMutAct_9fa48("39079") ? true : (stryCov_9fa48("39079", "39080", "39081"), topic && topic.mainPid)));
  }
};
Topics.getMainPosts = async function (tids, uid) {
  if (stryMutAct_9fa48("39082")) {
    {}
  } else {
    stryCov_9fa48("39082");
    const mainPids = await Topics.getMainPids(tids);
    return await getMainPosts(mainPids, uid);
  }
};
async function getMainPosts(mainPids, uid) {
  if (stryMutAct_9fa48("39083")) {
    {}
  } else {
    stryCov_9fa48("39083");
    let postData = await posts.getPostsByPids(mainPids, uid);
    postData = await (stryMutAct_9fa48("39084") ? user.blocks : (stryCov_9fa48("39084"), user.blocks.filter(uid, postData)));
    postData.forEach(post => {
      if (stryMutAct_9fa48("39085")) {
        {}
      } else {
        stryCov_9fa48("39085");
        if (stryMutAct_9fa48("39087") ? false : stryMutAct_9fa48("39086") ? true : (stryCov_9fa48("39086", "39087"), post)) {
          if (stryMutAct_9fa48("39088")) {
            {}
          } else {
            stryCov_9fa48("39088");
            post.index = 0;
          }
        }
      }
    });
    return await Topics.addPostData(postData, uid);
  }
}
Topics.isLocked = async function (tid) {
  if (stryMutAct_9fa48("39089")) {
    {}
  } else {
    stryCov_9fa48("39089");
    const locked = await Topics.getTopicField(tid, stryMutAct_9fa48("39090") ? "" : (stryCov_9fa48("39090"), 'locked'));
    return stryMutAct_9fa48("39093") ? locked !== 1 : stryMutAct_9fa48("39092") ? false : stryMutAct_9fa48("39091") ? true : (stryCov_9fa48("39091", "39092", "39093"), locked === 1);
  }
};
Topics.search = async function (tid, term) {
  if (stryMutAct_9fa48("39094")) {
    {}
  } else {
    stryCov_9fa48("39094");
    if (stryMutAct_9fa48("39097") ? !tid && !term : stryMutAct_9fa48("39096") ? false : stryMutAct_9fa48("39095") ? true : (stryCov_9fa48("39095", "39096", "39097"), (stryMutAct_9fa48("39098") ? tid : (stryCov_9fa48("39098"), !tid)) || (stryMutAct_9fa48("39099") ? term : (stryCov_9fa48("39099"), !term)))) {
      if (stryMutAct_9fa48("39100")) {
        {}
      } else {
        stryCov_9fa48("39100");
        throw new Error(stryMutAct_9fa48("39101") ? "" : (stryCov_9fa48("39101"), '[[error:invalid-data]]'));
      }
    }
    const result = await plugins.hooks.fire(stryMutAct_9fa48("39102") ? "" : (stryCov_9fa48("39102"), 'filter:topic.search'), stryMutAct_9fa48("39103") ? {} : (stryCov_9fa48("39103"), {
      tid: tid,
      term: term,
      ids: stryMutAct_9fa48("39104") ? ["Stryker was here"] : (stryCov_9fa48("39104"), [])
    }));
    return Array.isArray(result) ? result : result.ids;
  }
};
require('../promisify')(Topics);