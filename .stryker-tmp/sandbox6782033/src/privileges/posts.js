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
const meta = require('../meta');
const posts = require('../posts');
const topics = require('../topics');
const user = require('../user');
const helpers = require('./helpers');
const plugins = require('../plugins');
const utils = require('../utils');
const privsCategories = require('./categories');
const privsTopics = require('./topics');
const privsPosts = module.exports;
privsPosts.get = async function (pids, uid) {
  if (stryMutAct_9fa48("31614")) {
    {}
  } else {
    stryCov_9fa48("31614");
    if (stryMutAct_9fa48("31617") ? !Array.isArray(pids) && !pids.length : stryMutAct_9fa48("31616") ? false : stryMutAct_9fa48("31615") ? true : (stryCov_9fa48("31615", "31616", "31617"), (stryMutAct_9fa48("31618") ? Array.isArray(pids) : (stryCov_9fa48("31618"), !Array.isArray(pids))) || (stryMutAct_9fa48("31619") ? pids.length : (stryCov_9fa48("31619"), !pids.length)))) {
      if (stryMutAct_9fa48("31620")) {
        {}
      } else {
        stryCov_9fa48("31620");
        return stryMutAct_9fa48("31621") ? ["Stryker was here"] : (stryCov_9fa48("31621"), []);
      }
    }
    const cids = await posts.getCidsByPids(pids);
    const uniqueCids = _.uniq(cids);
    const results = await utils.promiseParallel(stryMutAct_9fa48("31622") ? {} : (stryCov_9fa48("31622"), {
      isAdmin: user.isAdministrator(uid),
      isModerator: user.isModerator(uid, uniqueCids),
      isOwner: posts.isOwner(pids, uid),
      'topics:read': helpers.isAllowedTo(stryMutAct_9fa48("31623") ? "" : (stryCov_9fa48("31623"), 'topics:read'), uid, uniqueCids),
      read: helpers.isAllowedTo(stryMutAct_9fa48("31624") ? "" : (stryCov_9fa48("31624"), 'read'), uid, uniqueCids),
      'posts:edit': helpers.isAllowedTo(stryMutAct_9fa48("31625") ? "" : (stryCov_9fa48("31625"), 'posts:edit'), uid, uniqueCids),
      'posts:history': helpers.isAllowedTo(stryMutAct_9fa48("31626") ? "" : (stryCov_9fa48("31626"), 'posts:history'), uid, uniqueCids),
      'posts:view_deleted': helpers.isAllowedTo(stryMutAct_9fa48("31627") ? "" : (stryCov_9fa48("31627"), 'posts:view_deleted'), uid, uniqueCids)
    }));
    const isModerator = _.zipObject(uniqueCids, results.isModerator);
    const privData = {};
    privData[stryMutAct_9fa48("31628") ? "" : (stryCov_9fa48("31628"), 'topics:read')] = _.zipObject(uniqueCids, results[stryMutAct_9fa48("31629") ? "" : (stryCov_9fa48("31629"), 'topics:read')]);
    privData.read = _.zipObject(uniqueCids, results.read);
    privData[stryMutAct_9fa48("31630") ? "" : (stryCov_9fa48("31630"), 'posts:edit')] = _.zipObject(uniqueCids, results[stryMutAct_9fa48("31631") ? "" : (stryCov_9fa48("31631"), 'posts:edit')]);
    privData[stryMutAct_9fa48("31632") ? "" : (stryCov_9fa48("31632"), 'posts:history')] = _.zipObject(uniqueCids, results[stryMutAct_9fa48("31633") ? "" : (stryCov_9fa48("31633"), 'posts:history')]);
    privData[stryMutAct_9fa48("31634") ? "" : (stryCov_9fa48("31634"), 'posts:view_deleted')] = _.zipObject(uniqueCids, results[stryMutAct_9fa48("31635") ? "" : (stryCov_9fa48("31635"), 'posts:view_deleted')]);
    const privileges = cids.map((cid, i) => {
      if (stryMutAct_9fa48("31636")) {
        {}
      } else {
        stryCov_9fa48("31636");
        const isAdminOrMod = stryMutAct_9fa48("31639") ? results.isAdmin && isModerator[cid] : stryMutAct_9fa48("31638") ? false : stryMutAct_9fa48("31637") ? true : (stryCov_9fa48("31637", "31638", "31639"), results.isAdmin || isModerator[cid]);
        const editable = stryMutAct_9fa48("31642") ? privData['posts:edit'][cid] && (results.isOwner[i] || results.isModerator) && results.isAdmin : stryMutAct_9fa48("31641") ? false : stryMutAct_9fa48("31640") ? true : (stryCov_9fa48("31640", "31641", "31642"), (stryMutAct_9fa48("31644") ? privData['posts:edit'][cid] || results.isOwner[i] || results.isModerator : stryMutAct_9fa48("31643") ? false : (stryCov_9fa48("31643", "31644"), privData[stryMutAct_9fa48("31645") ? "" : (stryCov_9fa48("31645"), 'posts:edit')][cid] && (stryMutAct_9fa48("31647") ? results.isOwner[i] && results.isModerator : stryMutAct_9fa48("31646") ? true : (stryCov_9fa48("31646", "31647"), results.isOwner[i] || results.isModerator)))) || results.isAdmin);
        const viewDeletedPosts = stryMutAct_9fa48("31650") ? (results.isOwner[i] || privData['posts:view_deleted'][cid]) && results.isAdmin : stryMutAct_9fa48("31649") ? false : stryMutAct_9fa48("31648") ? true : (stryCov_9fa48("31648", "31649", "31650"), (stryMutAct_9fa48("31652") ? results.isOwner[i] && privData['posts:view_deleted'][cid] : stryMutAct_9fa48("31651") ? false : (stryCov_9fa48("31651", "31652"), results.isOwner[i] || privData[stryMutAct_9fa48("31653") ? "" : (stryCov_9fa48("31653"), 'posts:view_deleted')][cid])) || results.isAdmin);
        const viewHistory = stryMutAct_9fa48("31656") ? (results.isOwner[i] || privData['posts:history'][cid]) && results.isAdmin : stryMutAct_9fa48("31655") ? false : stryMutAct_9fa48("31654") ? true : (stryCov_9fa48("31654", "31655", "31656"), (stryMutAct_9fa48("31658") ? results.isOwner[i] && privData['posts:history'][cid] : stryMutAct_9fa48("31657") ? false : (stryCov_9fa48("31657", "31658"), results.isOwner[i] || privData[stryMutAct_9fa48("31659") ? "" : (stryCov_9fa48("31659"), 'posts:history')][cid])) || results.isAdmin);
        return stryMutAct_9fa48("31660") ? {} : (stryCov_9fa48("31660"), {
          editable: editable,
          move: isAdminOrMod,
          isAdminOrMod: isAdminOrMod,
          'topics:read': stryMutAct_9fa48("31663") ? privData['topics:read'][cid] && results.isAdmin : stryMutAct_9fa48("31662") ? false : stryMutAct_9fa48("31661") ? true : (stryCov_9fa48("31661", "31662", "31663"), privData[stryMutAct_9fa48("31664") ? "" : (stryCov_9fa48("31664"), 'topics:read')][cid] || results.isAdmin),
          read: stryMutAct_9fa48("31667") ? privData.read[cid] && results.isAdmin : stryMutAct_9fa48("31666") ? false : stryMutAct_9fa48("31665") ? true : (stryCov_9fa48("31665", "31666", "31667"), privData.read[cid] || results.isAdmin),
          'posts:history': viewHistory,
          'posts:view_deleted': viewDeletedPosts
        });
      }
    });
    return privileges;
  }
};
privsPosts.can = async function (privilege, pid, uid) {
  if (stryMutAct_9fa48("31668")) {
    {}
  } else {
    stryCov_9fa48("31668");
    const cid = await posts.getCidByPid(pid);
    return await privsCategories.can(privilege, cid, uid);
  }
};
privsPosts.filter = async function (privilege, pids, uid) {
  if (stryMutAct_9fa48("31669")) {
    {}
  } else {
    stryCov_9fa48("31669");
    if (stryMutAct_9fa48("31672") ? !Array.isArray(pids) && !pids.length : stryMutAct_9fa48("31671") ? false : stryMutAct_9fa48("31670") ? true : (stryCov_9fa48("31670", "31671", "31672"), (stryMutAct_9fa48("31673") ? Array.isArray(pids) : (stryCov_9fa48("31673"), !Array.isArray(pids))) || (stryMutAct_9fa48("31674") ? pids.length : (stryCov_9fa48("31674"), !pids.length)))) {
      if (stryMutAct_9fa48("31675")) {
        {}
      } else {
        stryCov_9fa48("31675");
        return stryMutAct_9fa48("31676") ? ["Stryker was here"] : (stryCov_9fa48("31676"), []);
      }
    }
    pids = _.uniq(pids);
    const postData = await posts.getPostsFields(pids, stryMutAct_9fa48("31677") ? [] : (stryCov_9fa48("31677"), [stryMutAct_9fa48("31678") ? "" : (stryCov_9fa48("31678"), 'uid'), stryMutAct_9fa48("31679") ? "" : (stryCov_9fa48("31679"), 'tid'), stryMutAct_9fa48("31680") ? "" : (stryCov_9fa48("31680"), 'deleted')]));
    const tids = _.uniq(stryMutAct_9fa48("31681") ? postData.map(post => post && post.tid) : (stryCov_9fa48("31681"), postData.map(stryMutAct_9fa48("31682") ? () => undefined : (stryCov_9fa48("31682"), post => stryMutAct_9fa48("31685") ? post || post.tid : stryMutAct_9fa48("31684") ? false : stryMutAct_9fa48("31683") ? true : (stryCov_9fa48("31683", "31684", "31685"), post && post.tid))).filter(Boolean)));
    const topicData = await topics.getTopicsFields(tids, stryMutAct_9fa48("31686") ? [] : (stryCov_9fa48("31686"), [stryMutAct_9fa48("31687") ? "" : (stryCov_9fa48("31687"), 'deleted'), stryMutAct_9fa48("31688") ? "" : (stryCov_9fa48("31688"), 'scheduled'), stryMutAct_9fa48("31689") ? "" : (stryCov_9fa48("31689"), 'cid')]));
    const tidToTopic = _.zipObject(tids, topicData);
    let cids = stryMutAct_9fa48("31690") ? postData.map((post, index) => {
      if (post) {
        post.pid = pids[index];
        post.topic = tidToTopic[post.tid];
      }
      return tidToTopic[post.tid] && tidToTopic[post.tid].cid;
    }) : (stryCov_9fa48("31690"), postData.map((post, index) => {
      if (stryMutAct_9fa48("31691")) {
        {}
      } else {
        stryCov_9fa48("31691");
        if (stryMutAct_9fa48("31693") ? false : stryMutAct_9fa48("31692") ? true : (stryCov_9fa48("31692", "31693"), post)) {
          if (stryMutAct_9fa48("31694")) {
            {}
          } else {
            stryCov_9fa48("31694");
            post.pid = pids[index];
            post.topic = tidToTopic[post.tid];
          }
        }
        return stryMutAct_9fa48("31697") ? tidToTopic[post.tid] || tidToTopic[post.tid].cid : stryMutAct_9fa48("31696") ? false : stryMutAct_9fa48("31695") ? true : (stryCov_9fa48("31695", "31696", "31697"), tidToTopic[post.tid] && tidToTopic[post.tid].cid);
      }
    }).filter(stryMutAct_9fa48("31698") ? () => undefined : (stryCov_9fa48("31698"), cid => parseInt(cid, 10))));
    cids = _.uniq(cids);
    const results = await privsCategories.getBase(privilege, cids, uid);
    const allowedCids = stryMutAct_9fa48("31699") ? cids : (stryCov_9fa48("31699"), cids.filter(stryMutAct_9fa48("31700") ? () => undefined : (stryCov_9fa48("31700"), (cid, index) => stryMutAct_9fa48("31703") ? !results.categories[index].disabled || results.allowedTo[index] || results.isAdmin : stryMutAct_9fa48("31702") ? false : stryMutAct_9fa48("31701") ? true : (stryCov_9fa48("31701", "31702", "31703"), (stryMutAct_9fa48("31704") ? results.categories[index].disabled : (stryCov_9fa48("31704"), !results.categories[index].disabled)) && (stryMutAct_9fa48("31706") ? results.allowedTo[index] && results.isAdmin : stryMutAct_9fa48("31705") ? true : (stryCov_9fa48("31705", "31706"), results.allowedTo[index] || results.isAdmin))))));
    const cidsSet = new Set(allowedCids);
    const canViewDeleted = _.zipObject(cids, results.view_deleted);
    const canViewScheduled = _.zipObject(cids, results.view_scheduled);
    pids = stryMutAct_9fa48("31707") ? postData.map(post => post.pid) : (stryCov_9fa48("31707"), postData.filter(stryMutAct_9fa48("31708") ? () => undefined : (stryCov_9fa48("31708"), post => stryMutAct_9fa48("31711") ? post.topic && cidsSet.has(post.topic.cid) || privsTopics.canViewDeletedScheduled({
      deleted: post.topic.deleted || post.deleted,
      scheduled: post.topic.scheduled
    }, {}, canViewDeleted[post.topic.cid], canViewScheduled[post.topic.cid]) || results.isAdmin : stryMutAct_9fa48("31710") ? false : stryMutAct_9fa48("31709") ? true : (stryCov_9fa48("31709", "31710", "31711"), (stryMutAct_9fa48("31713") ? post.topic || cidsSet.has(post.topic.cid) : stryMutAct_9fa48("31712") ? true : (stryCov_9fa48("31712", "31713"), post.topic && cidsSet.has(post.topic.cid))) && (stryMutAct_9fa48("31715") ? privsTopics.canViewDeletedScheduled({
      deleted: post.topic.deleted || post.deleted,
      scheduled: post.topic.scheduled
    }, {}, canViewDeleted[post.topic.cid], canViewScheduled[post.topic.cid]) && results.isAdmin : stryMutAct_9fa48("31714") ? true : (stryCov_9fa48("31714", "31715"), privsTopics.canViewDeletedScheduled(stryMutAct_9fa48("31716") ? {} : (stryCov_9fa48("31716"), {
      deleted: stryMutAct_9fa48("31719") ? post.topic.deleted && post.deleted : stryMutAct_9fa48("31718") ? false : stryMutAct_9fa48("31717") ? true : (stryCov_9fa48("31717", "31718", "31719"), post.topic.deleted || post.deleted),
      scheduled: post.topic.scheduled
    }), {}, canViewDeleted[post.topic.cid], canViewScheduled[post.topic.cid]) || results.isAdmin))))).map(stryMutAct_9fa48("31720") ? () => undefined : (stryCov_9fa48("31720"), post => post.pid)));
    const data = await plugins.hooks.fire(stryMutAct_9fa48("31721") ? "" : (stryCov_9fa48("31721"), 'filter:privileges.posts.filter'), stryMutAct_9fa48("31722") ? {} : (stryCov_9fa48("31722"), {
      privilege: privilege,
      uid: uid,
      pids: pids
    }));
    return data ? data.pids : null;
  }
};
privsPosts.canEdit = async function (pid, uid) {
  if (stryMutAct_9fa48("31723")) {
    {}
  } else {
    stryCov_9fa48("31723");
    const results = await utils.promiseParallel(stryMutAct_9fa48("31724") ? {} : (stryCov_9fa48("31724"), {
      isAdmin: user.isAdministrator(uid),
      isMod: posts.isModerator(stryMutAct_9fa48("31725") ? [] : (stryCov_9fa48("31725"), [pid]), uid),
      owner: posts.isOwner(pid, uid),
      edit: privsPosts.can(stryMutAct_9fa48("31726") ? "" : (stryCov_9fa48("31726"), 'posts:edit'), pid, uid),
      postData: posts.getPostFields(pid, stryMutAct_9fa48("31727") ? [] : (stryCov_9fa48("31727"), [stryMutAct_9fa48("31728") ? "" : (stryCov_9fa48("31728"), 'tid'), stryMutAct_9fa48("31729") ? "" : (stryCov_9fa48("31729"), 'timestamp'), stryMutAct_9fa48("31730") ? "" : (stryCov_9fa48("31730"), 'deleted'), stryMutAct_9fa48("31731") ? "" : (stryCov_9fa48("31731"), 'deleterUid')])),
      userData: user.getUserFields(uid, stryMutAct_9fa48("31732") ? [] : (stryCov_9fa48("31732"), [stryMutAct_9fa48("31733") ? "" : (stryCov_9fa48("31733"), 'reputation')]))
    }));
    results.isMod = results.isMod[0];
    if (stryMutAct_9fa48("31735") ? false : stryMutAct_9fa48("31734") ? true : (stryCov_9fa48("31734", "31735"), results.isAdmin)) {
      if (stryMutAct_9fa48("31736")) {
        {}
      } else {
        stryCov_9fa48("31736");
        return stryMutAct_9fa48("31737") ? {} : (stryCov_9fa48("31737"), {
          flag: stryMutAct_9fa48("31738") ? false : (stryCov_9fa48("31738"), true)
        });
      }
    }
    if (stryMutAct_9fa48("31741") ? !results.isMod && meta.config.postEditDuration || Date.now() - results.postData.timestamp > meta.config.postEditDuration * 1000 : stryMutAct_9fa48("31740") ? false : stryMutAct_9fa48("31739") ? true : (stryCov_9fa48("31739", "31740", "31741"), (stryMutAct_9fa48("31743") ? !results.isMod || meta.config.postEditDuration : stryMutAct_9fa48("31742") ? true : (stryCov_9fa48("31742", "31743"), (stryMutAct_9fa48("31744") ? results.isMod : (stryCov_9fa48("31744"), !results.isMod)) && meta.config.postEditDuration)) && (stryMutAct_9fa48("31747") ? Date.now() - results.postData.timestamp <= meta.config.postEditDuration * 1000 : stryMutAct_9fa48("31746") ? Date.now() - results.postData.timestamp >= meta.config.postEditDuration * 1000 : stryMutAct_9fa48("31745") ? true : (stryCov_9fa48("31745", "31746", "31747"), (stryMutAct_9fa48("31748") ? Date.now() + results.postData.timestamp : (stryCov_9fa48("31748"), Date.now() - results.postData.timestamp)) > (stryMutAct_9fa48("31749") ? meta.config.postEditDuration / 1000 : (stryCov_9fa48("31749"), meta.config.postEditDuration * 1000)))))) {
      if (stryMutAct_9fa48("31750")) {
        {}
      } else {
        stryCov_9fa48("31750");
        return stryMutAct_9fa48("31751") ? {} : (stryCov_9fa48("31751"), {
          flag: stryMutAct_9fa48("31752") ? true : (stryCov_9fa48("31752"), false),
          message: stryMutAct_9fa48("31753") ? `` : (stryCov_9fa48("31753"), `[[error:post-edit-duration-expired, ${meta.config.postEditDuration}]]`)
        });
      }
    }
    if (stryMutAct_9fa48("31756") ? !results.isMod && meta.config.newbiePostEditDuration > 0 && meta.config.newbiePostDelayThreshold > results.userData.reputation || Date.now() - results.postData.timestamp > meta.config.newbiePostEditDuration * 1000 : stryMutAct_9fa48("31755") ? false : stryMutAct_9fa48("31754") ? true : (stryCov_9fa48("31754", "31755", "31756"), (stryMutAct_9fa48("31758") ? !results.isMod && meta.config.newbiePostEditDuration > 0 || meta.config.newbiePostDelayThreshold > results.userData.reputation : stryMutAct_9fa48("31757") ? true : (stryCov_9fa48("31757", "31758"), (stryMutAct_9fa48("31760") ? !results.isMod || meta.config.newbiePostEditDuration > 0 : stryMutAct_9fa48("31759") ? true : (stryCov_9fa48("31759", "31760"), (stryMutAct_9fa48("31761") ? results.isMod : (stryCov_9fa48("31761"), !results.isMod)) && (stryMutAct_9fa48("31764") ? meta.config.newbiePostEditDuration <= 0 : stryMutAct_9fa48("31763") ? meta.config.newbiePostEditDuration >= 0 : stryMutAct_9fa48("31762") ? true : (stryCov_9fa48("31762", "31763", "31764"), meta.config.newbiePostEditDuration > 0)))) && (stryMutAct_9fa48("31767") ? meta.config.newbiePostDelayThreshold <= results.userData.reputation : stryMutAct_9fa48("31766") ? meta.config.newbiePostDelayThreshold >= results.userData.reputation : stryMutAct_9fa48("31765") ? true : (stryCov_9fa48("31765", "31766", "31767"), meta.config.newbiePostDelayThreshold > results.userData.reputation)))) && (stryMutAct_9fa48("31770") ? Date.now() - results.postData.timestamp <= meta.config.newbiePostEditDuration * 1000 : stryMutAct_9fa48("31769") ? Date.now() - results.postData.timestamp >= meta.config.newbiePostEditDuration * 1000 : stryMutAct_9fa48("31768") ? true : (stryCov_9fa48("31768", "31769", "31770"), (stryMutAct_9fa48("31771") ? Date.now() + results.postData.timestamp : (stryCov_9fa48("31771"), Date.now() - results.postData.timestamp)) > (stryMutAct_9fa48("31772") ? meta.config.newbiePostEditDuration / 1000 : (stryCov_9fa48("31772"), meta.config.newbiePostEditDuration * 1000)))))) {
      if (stryMutAct_9fa48("31773")) {
        {}
      } else {
        stryCov_9fa48("31773");
        return stryMutAct_9fa48("31774") ? {} : (stryCov_9fa48("31774"), {
          flag: stryMutAct_9fa48("31775") ? true : (stryCov_9fa48("31775"), false),
          message: stryMutAct_9fa48("31776") ? `` : (stryCov_9fa48("31776"), `[[error:post-edit-duration-expired, ${meta.config.newbiePostEditDuration}]]`)
        });
      }
    }
    const isLocked = await topics.isLocked(results.postData.tid);
    if (stryMutAct_9fa48("31779") ? !results.isMod || isLocked : stryMutAct_9fa48("31778") ? false : stryMutAct_9fa48("31777") ? true : (stryCov_9fa48("31777", "31778", "31779"), (stryMutAct_9fa48("31780") ? results.isMod : (stryCov_9fa48("31780"), !results.isMod)) && isLocked)) {
      if (stryMutAct_9fa48("31781")) {
        {}
      } else {
        stryCov_9fa48("31781");
        return stryMutAct_9fa48("31782") ? {} : (stryCov_9fa48("31782"), {
          flag: stryMutAct_9fa48("31783") ? true : (stryCov_9fa48("31783"), false),
          message: stryMutAct_9fa48("31784") ? "" : (stryCov_9fa48("31784"), '[[error:topic-locked]]')
        });
      }
    }
    if (stryMutAct_9fa48("31787") ? !results.isMod && results.postData.deleted || parseInt(uid, 10) !== parseInt(results.postData.deleterUid, 10) : stryMutAct_9fa48("31786") ? false : stryMutAct_9fa48("31785") ? true : (stryCov_9fa48("31785", "31786", "31787"), (stryMutAct_9fa48("31789") ? !results.isMod || results.postData.deleted : stryMutAct_9fa48("31788") ? true : (stryCov_9fa48("31788", "31789"), (stryMutAct_9fa48("31790") ? results.isMod : (stryCov_9fa48("31790"), !results.isMod)) && results.postData.deleted)) && (stryMutAct_9fa48("31792") ? parseInt(uid, 10) === parseInt(results.postData.deleterUid, 10) : stryMutAct_9fa48("31791") ? true : (stryCov_9fa48("31791", "31792"), parseInt(uid, 10) !== parseInt(results.postData.deleterUid, 10))))) {
      if (stryMutAct_9fa48("31793")) {
        {}
      } else {
        stryCov_9fa48("31793");
        return stryMutAct_9fa48("31794") ? {} : (stryCov_9fa48("31794"), {
          flag: stryMutAct_9fa48("31795") ? true : (stryCov_9fa48("31795"), false),
          message: stryMutAct_9fa48("31796") ? "" : (stryCov_9fa48("31796"), '[[error:post-deleted]]')
        });
      }
    }
    results.pid = parseInt(pid, 10);
    results.uid = uid;
    const result = await plugins.hooks.fire(stryMutAct_9fa48("31797") ? "" : (stryCov_9fa48("31797"), 'filter:privileges.posts.edit'), results);
    return stryMutAct_9fa48("31798") ? {} : (stryCov_9fa48("31798"), {
      flag: stryMutAct_9fa48("31801") ? result.edit || result.owner || result.isMod : stryMutAct_9fa48("31800") ? false : stryMutAct_9fa48("31799") ? true : (stryCov_9fa48("31799", "31800", "31801"), result.edit && (stryMutAct_9fa48("31803") ? result.owner && result.isMod : stryMutAct_9fa48("31802") ? true : (stryCov_9fa48("31802", "31803"), result.owner || result.isMod))),
      message: stryMutAct_9fa48("31804") ? "" : (stryCov_9fa48("31804"), '[[error:no-privileges]]')
    });
  }
};
privsPosts.canDelete = async function (pid, uid) {
  if (stryMutAct_9fa48("31805")) {
    {}
  } else {
    stryCov_9fa48("31805");
    const postData = await posts.getPostFields(pid, stryMutAct_9fa48("31806") ? [] : (stryCov_9fa48("31806"), [stryMutAct_9fa48("31807") ? "" : (stryCov_9fa48("31807"), 'uid'), stryMutAct_9fa48("31808") ? "" : (stryCov_9fa48("31808"), 'tid'), stryMutAct_9fa48("31809") ? "" : (stryCov_9fa48("31809"), 'timestamp'), stryMutAct_9fa48("31810") ? "" : (stryCov_9fa48("31810"), 'deleterUid')]));
    const results = await utils.promiseParallel(stryMutAct_9fa48("31811") ? {} : (stryCov_9fa48("31811"), {
      isAdmin: user.isAdministrator(uid),
      isMod: posts.isModerator(stryMutAct_9fa48("31812") ? [] : (stryCov_9fa48("31812"), [pid]), uid),
      isLocked: topics.isLocked(postData.tid),
      isOwner: posts.isOwner(pid, uid),
      'posts:delete': privsPosts.can(stryMutAct_9fa48("31813") ? "" : (stryCov_9fa48("31813"), 'posts:delete'), pid, uid)
    }));
    results.isMod = results.isMod[0];
    if (stryMutAct_9fa48("31815") ? false : stryMutAct_9fa48("31814") ? true : (stryCov_9fa48("31814", "31815"), results.isAdmin)) {
      if (stryMutAct_9fa48("31816")) {
        {}
      } else {
        stryCov_9fa48("31816");
        return stryMutAct_9fa48("31817") ? {} : (stryCov_9fa48("31817"), {
          flag: stryMutAct_9fa48("31818") ? false : (stryCov_9fa48("31818"), true)
        });
      }
    }
    if (stryMutAct_9fa48("31821") ? !results.isMod || results.isLocked : stryMutAct_9fa48("31820") ? false : stryMutAct_9fa48("31819") ? true : (stryCov_9fa48("31819", "31820", "31821"), (stryMutAct_9fa48("31822") ? results.isMod : (stryCov_9fa48("31822"), !results.isMod)) && results.isLocked)) {
      if (stryMutAct_9fa48("31823")) {
        {}
      } else {
        stryCov_9fa48("31823");
        return stryMutAct_9fa48("31824") ? {} : (stryCov_9fa48("31824"), {
          flag: stryMutAct_9fa48("31825") ? true : (stryCov_9fa48("31825"), false),
          message: stryMutAct_9fa48("31826") ? "" : (stryCov_9fa48("31826"), '[[error:topic-locked]]')
        });
      }
    }
    const {
      postDeleteDuration
    } = meta.config;
    if (stryMutAct_9fa48("31829") ? !results.isMod && postDeleteDuration || Date.now() - postData.timestamp > postDeleteDuration * 1000 : stryMutAct_9fa48("31828") ? false : stryMutAct_9fa48("31827") ? true : (stryCov_9fa48("31827", "31828", "31829"), (stryMutAct_9fa48("31831") ? !results.isMod || postDeleteDuration : stryMutAct_9fa48("31830") ? true : (stryCov_9fa48("31830", "31831"), (stryMutAct_9fa48("31832") ? results.isMod : (stryCov_9fa48("31832"), !results.isMod)) && postDeleteDuration)) && (stryMutAct_9fa48("31835") ? Date.now() - postData.timestamp <= postDeleteDuration * 1000 : stryMutAct_9fa48("31834") ? Date.now() - postData.timestamp >= postDeleteDuration * 1000 : stryMutAct_9fa48("31833") ? true : (stryCov_9fa48("31833", "31834", "31835"), (stryMutAct_9fa48("31836") ? Date.now() + postData.timestamp : (stryCov_9fa48("31836"), Date.now() - postData.timestamp)) > (stryMutAct_9fa48("31837") ? postDeleteDuration / 1000 : (stryCov_9fa48("31837"), postDeleteDuration * 1000)))))) {
      if (stryMutAct_9fa48("31838")) {
        {}
      } else {
        stryCov_9fa48("31838");
        return stryMutAct_9fa48("31839") ? {} : (stryCov_9fa48("31839"), {
          flag: stryMutAct_9fa48("31840") ? true : (stryCov_9fa48("31840"), false),
          message: stryMutAct_9fa48("31841") ? `` : (stryCov_9fa48("31841"), `[[error:post-delete-duration-expired, ${meta.config.postDeleteDuration}]]`)
        });
      }
    }
    const {
      deleterUid
    } = postData;
    const flag = stryMutAct_9fa48("31844") ? results['posts:delete'] || results.isOwner && (deleterUid === 0 || deleterUid === postData.uid) || results.isMod : stryMutAct_9fa48("31843") ? false : stryMutAct_9fa48("31842") ? true : (stryCov_9fa48("31842", "31843", "31844"), results[stryMutAct_9fa48("31845") ? "" : (stryCov_9fa48("31845"), 'posts:delete')] && (stryMutAct_9fa48("31847") ? results.isOwner && (deleterUid === 0 || deleterUid === postData.uid) && results.isMod : stryMutAct_9fa48("31846") ? true : (stryCov_9fa48("31846", "31847"), (stryMutAct_9fa48("31849") ? results.isOwner || deleterUid === 0 || deleterUid === postData.uid : stryMutAct_9fa48("31848") ? false : (stryCov_9fa48("31848", "31849"), results.isOwner && (stryMutAct_9fa48("31851") ? deleterUid === 0 && deleterUid === postData.uid : stryMutAct_9fa48("31850") ? true : (stryCov_9fa48("31850", "31851"), (stryMutAct_9fa48("31853") ? deleterUid !== 0 : stryMutAct_9fa48("31852") ? false : (stryCov_9fa48("31852", "31853"), deleterUid === 0)) || (stryMutAct_9fa48("31855") ? deleterUid !== postData.uid : stryMutAct_9fa48("31854") ? false : (stryCov_9fa48("31854", "31855"), deleterUid === postData.uid)))))) || results.isMod)));
    return stryMutAct_9fa48("31856") ? {} : (stryCov_9fa48("31856"), {
      flag: flag,
      message: stryMutAct_9fa48("31857") ? "" : (stryCov_9fa48("31857"), '[[error:no-privileges]]')
    });
  }
};
privsPosts.canFlag = async function (pid, uid) {
  if (stryMutAct_9fa48("31858")) {
    {}
  } else {
    stryCov_9fa48("31858");
    const targetUid = await posts.getPostField(pid, stryMutAct_9fa48("31859") ? "" : (stryCov_9fa48("31859"), 'uid'));
    const [userReputation, isAdminOrModerator, targetPrivileged, reporterPrivileged] = await Promise.all(stryMutAct_9fa48("31860") ? [] : (stryCov_9fa48("31860"), [user.getUserField(uid, stryMutAct_9fa48("31861") ? "" : (stryCov_9fa48("31861"), 'reputation')), isAdminOrMod(pid, uid), user.isPrivileged(targetUid), user.isPrivileged(uid)]));
    const minimumReputation = meta.config[stryMutAct_9fa48("31862") ? "" : (stryCov_9fa48("31862"), 'min:rep:flag')];
    let canFlag = stryMutAct_9fa48("31865") ? isAdminOrModerator && userReputation >= minimumReputation : stryMutAct_9fa48("31864") ? false : stryMutAct_9fa48("31863") ? true : (stryCov_9fa48("31863", "31864", "31865"), isAdminOrModerator || (stryMutAct_9fa48("31868") ? userReputation < minimumReputation : stryMutAct_9fa48("31867") ? userReputation > minimumReputation : stryMutAct_9fa48("31866") ? false : (stryCov_9fa48("31866", "31867", "31868"), userReputation >= minimumReputation)));
    if (stryMutAct_9fa48("31871") ? targetPrivileged || !reporterPrivileged : stryMutAct_9fa48("31870") ? false : stryMutAct_9fa48("31869") ? true : (stryCov_9fa48("31869", "31870", "31871"), targetPrivileged && (stryMutAct_9fa48("31872") ? reporterPrivileged : (stryCov_9fa48("31872"), !reporterPrivileged)))) {
      if (stryMutAct_9fa48("31873")) {
        {}
      } else {
        stryCov_9fa48("31873");
        canFlag = stryMutAct_9fa48("31874") ? true : (stryCov_9fa48("31874"), false);
      }
    }
    return stryMutAct_9fa48("31875") ? {} : (stryCov_9fa48("31875"), {
      flag: canFlag
    });
  }
};
privsPosts.canMove = async function (pid, uid) {
  if (stryMutAct_9fa48("31876")) {
    {}
  } else {
    stryCov_9fa48("31876");
    const isMain = await posts.isMain(pid);
    if (stryMutAct_9fa48("31878") ? false : stryMutAct_9fa48("31877") ? true : (stryCov_9fa48("31877", "31878"), isMain)) {
      if (stryMutAct_9fa48("31879")) {
        {}
      } else {
        stryCov_9fa48("31879");
        throw new Error(stryMutAct_9fa48("31880") ? "" : (stryCov_9fa48("31880"), '[[error:cant-move-mainpost]]'));
      }
    }
    return await isAdminOrMod(pid, uid);
  }
};
privsPosts.canPurge = async function (pid, uid) {
  if (stryMutAct_9fa48("31881")) {
    {}
  } else {
    stryCov_9fa48("31881");
    const cid = await posts.getCidByPid(pid);
    const results = await utils.promiseParallel(stryMutAct_9fa48("31882") ? {} : (stryCov_9fa48("31882"), {
      purge: privsCategories.isUserAllowedTo(stryMutAct_9fa48("31883") ? "" : (stryCov_9fa48("31883"), 'purge'), cid, uid),
      owner: posts.isOwner(pid, uid),
      isAdmin: user.isAdministrator(uid),
      isModerator: user.isModerator(uid, cid)
    }));
    return stryMutAct_9fa48("31886") ? results.purge && (results.owner || results.isModerator) && results.isAdmin : stryMutAct_9fa48("31885") ? false : stryMutAct_9fa48("31884") ? true : (stryCov_9fa48("31884", "31885", "31886"), (stryMutAct_9fa48("31888") ? results.purge || results.owner || results.isModerator : stryMutAct_9fa48("31887") ? false : (stryCov_9fa48("31887", "31888"), results.purge && (stryMutAct_9fa48("31890") ? results.owner && results.isModerator : stryMutAct_9fa48("31889") ? true : (stryCov_9fa48("31889", "31890"), results.owner || results.isModerator)))) || results.isAdmin);
  }
};
async function isAdminOrMod(pid, uid) {
  if (stryMutAct_9fa48("31891")) {
    {}
  } else {
    stryCov_9fa48("31891");
    if (stryMutAct_9fa48("31895") ? parseInt(uid, 10) > 0 : stryMutAct_9fa48("31894") ? parseInt(uid, 10) < 0 : stryMutAct_9fa48("31893") ? false : stryMutAct_9fa48("31892") ? true : (stryCov_9fa48("31892", "31893", "31894", "31895"), parseInt(uid, 10) <= 0)) {
      if (stryMutAct_9fa48("31896")) {
        {}
      } else {
        stryCov_9fa48("31896");
        return stryMutAct_9fa48("31897") ? true : (stryCov_9fa48("31897"), false);
      }
    }
    const cid = await posts.getCidByPid(pid);
    return await privsCategories.isAdminOrMod(cid, uid);
  }
}