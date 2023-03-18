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
const topics = require('../topics');
const user = require('../user');
const helpers = require('./helpers');
const categories = require('../categories');
const plugins = require('../plugins');
const privsCategories = require('./categories');
const privsTopics = module.exports;
privsTopics.get = async function (tid, uid) {
  if (stryMutAct_9fa48("31898")) {
    {}
  } else {
    stryCov_9fa48("31898");
    uid = parseInt(uid, 10);
    const privs = stryMutAct_9fa48("31899") ? [] : (stryCov_9fa48("31899"), [stryMutAct_9fa48("31900") ? "" : (stryCov_9fa48("31900"), 'topics:reply'), stryMutAct_9fa48("31901") ? "" : (stryCov_9fa48("31901"), 'topics:read'), stryMutAct_9fa48("31902") ? "" : (stryCov_9fa48("31902"), 'topics:schedule'), stryMutAct_9fa48("31903") ? "" : (stryCov_9fa48("31903"), 'topics:tag'), stryMutAct_9fa48("31904") ? "" : (stryCov_9fa48("31904"), 'topics:delete'), stryMutAct_9fa48("31905") ? "" : (stryCov_9fa48("31905"), 'posts:edit'), stryMutAct_9fa48("31906") ? "" : (stryCov_9fa48("31906"), 'posts:history'), stryMutAct_9fa48("31907") ? "" : (stryCov_9fa48("31907"), 'posts:delete'), stryMutAct_9fa48("31908") ? "" : (stryCov_9fa48("31908"), 'posts:view_deleted'), stryMutAct_9fa48("31909") ? "" : (stryCov_9fa48("31909"), 'read'), stryMutAct_9fa48("31910") ? "" : (stryCov_9fa48("31910"), 'purge')]);
    const topicData = await topics.getTopicFields(tid, stryMutAct_9fa48("31911") ? [] : (stryCov_9fa48("31911"), [stryMutAct_9fa48("31912") ? "" : (stryCov_9fa48("31912"), 'cid'), stryMutAct_9fa48("31913") ? "" : (stryCov_9fa48("31913"), 'uid'), stryMutAct_9fa48("31914") ? "" : (stryCov_9fa48("31914"), 'locked'), stryMutAct_9fa48("31915") ? "" : (stryCov_9fa48("31915"), 'deleted'), stryMutAct_9fa48("31916") ? "" : (stryCov_9fa48("31916"), 'scheduled')]));
    const [userPrivileges, isAdministrator, isModerator, disabled] = await Promise.all(stryMutAct_9fa48("31917") ? [] : (stryCov_9fa48("31917"), [helpers.isAllowedTo(privs, uid, topicData.cid), user.isAdministrator(uid), user.isModerator(uid, topicData.cid), categories.getCategoryField(topicData.cid, stryMutAct_9fa48("31918") ? "" : (stryCov_9fa48("31918"), 'disabled'))]));
    const privData = _.zipObject(privs, userPrivileges);
    const isOwner = stryMutAct_9fa48("31921") ? uid > 0 || uid === topicData.uid : stryMutAct_9fa48("31920") ? false : stryMutAct_9fa48("31919") ? true : (stryCov_9fa48("31919", "31920", "31921"), (stryMutAct_9fa48("31924") ? uid <= 0 : stryMutAct_9fa48("31923") ? uid >= 0 : stryMutAct_9fa48("31922") ? true : (stryCov_9fa48("31922", "31923", "31924"), uid > 0)) && (stryMutAct_9fa48("31926") ? uid !== topicData.uid : stryMutAct_9fa48("31925") ? true : (stryCov_9fa48("31925", "31926"), uid === topicData.uid)));
    const isAdminOrMod = stryMutAct_9fa48("31929") ? isAdministrator && isModerator : stryMutAct_9fa48("31928") ? false : stryMutAct_9fa48("31927") ? true : (stryCov_9fa48("31927", "31928", "31929"), isAdministrator || isModerator);
    const editable = isAdminOrMod;
    const deletable = stryMutAct_9fa48("31932") ? privData['topics:delete'] && (isOwner || isModerator) && isAdministrator : stryMutAct_9fa48("31931") ? false : stryMutAct_9fa48("31930") ? true : (stryCov_9fa48("31930", "31931", "31932"), (stryMutAct_9fa48("31934") ? privData['topics:delete'] || isOwner || isModerator : stryMutAct_9fa48("31933") ? false : (stryCov_9fa48("31933", "31934"), privData[stryMutAct_9fa48("31935") ? "" : (stryCov_9fa48("31935"), 'topics:delete')] && (stryMutAct_9fa48("31937") ? isOwner && isModerator : stryMutAct_9fa48("31936") ? true : (stryCov_9fa48("31936", "31937"), isOwner || isModerator)))) || isAdministrator);
    const mayReply = privsTopics.canViewDeletedScheduled(topicData, {}, stryMutAct_9fa48("31938") ? true : (stryCov_9fa48("31938"), false), privData[stryMutAct_9fa48("31939") ? "" : (stryCov_9fa48("31939"), 'topics:schedule')]);
    return await plugins.hooks.fire(stryMutAct_9fa48("31940") ? "" : (stryCov_9fa48("31940"), 'filter:privileges.topics.get'), stryMutAct_9fa48("31941") ? {} : (stryCov_9fa48("31941"), {
      'topics:reply': stryMutAct_9fa48("31944") ? privData['topics:reply'] && (!topicData.locked && mayReply || isModerator) && isAdministrator : stryMutAct_9fa48("31943") ? false : stryMutAct_9fa48("31942") ? true : (stryCov_9fa48("31942", "31943", "31944"), (stryMutAct_9fa48("31946") ? privData['topics:reply'] || !topicData.locked && mayReply || isModerator : stryMutAct_9fa48("31945") ? false : (stryCov_9fa48("31945", "31946"), privData[stryMutAct_9fa48("31947") ? "" : (stryCov_9fa48("31947"), 'topics:reply')] && (stryMutAct_9fa48("31949") ? !topicData.locked && mayReply && isModerator : stryMutAct_9fa48("31948") ? true : (stryCov_9fa48("31948", "31949"), (stryMutAct_9fa48("31951") ? !topicData.locked || mayReply : stryMutAct_9fa48("31950") ? false : (stryCov_9fa48("31950", "31951"), (stryMutAct_9fa48("31952") ? topicData.locked : (stryCov_9fa48("31952"), !topicData.locked)) && mayReply)) || isModerator)))) || isAdministrator),
      'topics:read': stryMutAct_9fa48("31955") ? privData['topics:read'] && isAdministrator : stryMutAct_9fa48("31954") ? false : stryMutAct_9fa48("31953") ? true : (stryCov_9fa48("31953", "31954", "31955"), privData[stryMutAct_9fa48("31956") ? "" : (stryCov_9fa48("31956"), 'topics:read')] || isAdministrator),
      'topics:schedule': stryMutAct_9fa48("31959") ? privData['topics:schedule'] && isAdministrator : stryMutAct_9fa48("31958") ? false : stryMutAct_9fa48("31957") ? true : (stryCov_9fa48("31957", "31958", "31959"), privData[stryMutAct_9fa48("31960") ? "" : (stryCov_9fa48("31960"), 'topics:schedule')] || isAdministrator),
      'topics:tag': stryMutAct_9fa48("31963") ? privData['topics:tag'] && isAdministrator : stryMutAct_9fa48("31962") ? false : stryMutAct_9fa48("31961") ? true : (stryCov_9fa48("31961", "31962", "31963"), privData[stryMutAct_9fa48("31964") ? "" : (stryCov_9fa48("31964"), 'topics:tag')] || isAdministrator),
      'topics:delete': stryMutAct_9fa48("31967") ? privData['topics:delete'] && (isOwner || isModerator) && isAdministrator : stryMutAct_9fa48("31966") ? false : stryMutAct_9fa48("31965") ? true : (stryCov_9fa48("31965", "31966", "31967"), (stryMutAct_9fa48("31969") ? privData['topics:delete'] || isOwner || isModerator : stryMutAct_9fa48("31968") ? false : (stryCov_9fa48("31968", "31969"), privData[stryMutAct_9fa48("31970") ? "" : (stryCov_9fa48("31970"), 'topics:delete')] && (stryMutAct_9fa48("31972") ? isOwner && isModerator : stryMutAct_9fa48("31971") ? true : (stryCov_9fa48("31971", "31972"), isOwner || isModerator)))) || isAdministrator),
      'posts:edit': stryMutAct_9fa48("31975") ? privData['posts:edit'] && (!topicData.locked || isModerator) && isAdministrator : stryMutAct_9fa48("31974") ? false : stryMutAct_9fa48("31973") ? true : (stryCov_9fa48("31973", "31974", "31975"), (stryMutAct_9fa48("31977") ? privData['posts:edit'] || !topicData.locked || isModerator : stryMutAct_9fa48("31976") ? false : (stryCov_9fa48("31976", "31977"), privData[stryMutAct_9fa48("31978") ? "" : (stryCov_9fa48("31978"), 'posts:edit')] && (stryMutAct_9fa48("31980") ? !topicData.locked && isModerator : stryMutAct_9fa48("31979") ? true : (stryCov_9fa48("31979", "31980"), (stryMutAct_9fa48("31981") ? topicData.locked : (stryCov_9fa48("31981"), !topicData.locked)) || isModerator)))) || isAdministrator),
      'posts:history': stryMutAct_9fa48("31984") ? privData['posts:history'] && isAdministrator : stryMutAct_9fa48("31983") ? false : stryMutAct_9fa48("31982") ? true : (stryCov_9fa48("31982", "31983", "31984"), privData[stryMutAct_9fa48("31985") ? "" : (stryCov_9fa48("31985"), 'posts:history')] || isAdministrator),
      'posts:delete': stryMutAct_9fa48("31988") ? privData['posts:delete'] && (!topicData.locked || isModerator) && isAdministrator : stryMutAct_9fa48("31987") ? false : stryMutAct_9fa48("31986") ? true : (stryCov_9fa48("31986", "31987", "31988"), (stryMutAct_9fa48("31990") ? privData['posts:delete'] || !topicData.locked || isModerator : stryMutAct_9fa48("31989") ? false : (stryCov_9fa48("31989", "31990"), privData[stryMutAct_9fa48("31991") ? "" : (stryCov_9fa48("31991"), 'posts:delete')] && (stryMutAct_9fa48("31993") ? !topicData.locked && isModerator : stryMutAct_9fa48("31992") ? true : (stryCov_9fa48("31992", "31993"), (stryMutAct_9fa48("31994") ? topicData.locked : (stryCov_9fa48("31994"), !topicData.locked)) || isModerator)))) || isAdministrator),
      'posts:view_deleted': stryMutAct_9fa48("31997") ? privData['posts:view_deleted'] && isAdministrator : stryMutAct_9fa48("31996") ? false : stryMutAct_9fa48("31995") ? true : (stryCov_9fa48("31995", "31996", "31997"), privData[stryMutAct_9fa48("31998") ? "" : (stryCov_9fa48("31998"), 'posts:view_deleted')] || isAdministrator),
      read: stryMutAct_9fa48("32001") ? privData.read && isAdministrator : stryMutAct_9fa48("32000") ? false : stryMutAct_9fa48("31999") ? true : (stryCov_9fa48("31999", "32000", "32001"), privData.read || isAdministrator),
      purge: stryMutAct_9fa48("32004") ? privData.purge && (isOwner || isModerator) && isAdministrator : stryMutAct_9fa48("32003") ? false : stryMutAct_9fa48("32002") ? true : (stryCov_9fa48("32002", "32003", "32004"), (stryMutAct_9fa48("32006") ? privData.purge || isOwner || isModerator : stryMutAct_9fa48("32005") ? false : (stryCov_9fa48("32005", "32006"), privData.purge && (stryMutAct_9fa48("32008") ? isOwner && isModerator : stryMutAct_9fa48("32007") ? true : (stryCov_9fa48("32007", "32008"), isOwner || isModerator)))) || isAdministrator),
      view_thread_tools: stryMutAct_9fa48("32011") ? editable && deletable : stryMutAct_9fa48("32010") ? false : stryMutAct_9fa48("32009") ? true : (stryCov_9fa48("32009", "32010", "32011"), editable || deletable),
      editable: editable,
      deletable: deletable,
      view_deleted: stryMutAct_9fa48("32014") ? (isAdminOrMod || isOwner) && privData['posts:view_deleted'] : stryMutAct_9fa48("32013") ? false : stryMutAct_9fa48("32012") ? true : (stryCov_9fa48("32012", "32013", "32014"), (stryMutAct_9fa48("32016") ? isAdminOrMod && isOwner : stryMutAct_9fa48("32015") ? false : (stryCov_9fa48("32015", "32016"), isAdminOrMod || isOwner)) || privData[stryMutAct_9fa48("32017") ? "" : (stryCov_9fa48("32017"), 'posts:view_deleted')]),
      view_scheduled: stryMutAct_9fa48("32020") ? privData['topics:schedule'] && isAdministrator : stryMutAct_9fa48("32019") ? false : stryMutAct_9fa48("32018") ? true : (stryCov_9fa48("32018", "32019", "32020"), privData[stryMutAct_9fa48("32021") ? "" : (stryCov_9fa48("32021"), 'topics:schedule')] || isAdministrator),
      isAdminOrMod: isAdminOrMod,
      disabled: disabled,
      tid: tid,
      uid: uid
    }));
  }
};
privsTopics.can = async function (privilege, tid, uid) {
  if (stryMutAct_9fa48("32022")) {
    {}
  } else {
    stryCov_9fa48("32022");
    const cid = await topics.getTopicField(tid, stryMutAct_9fa48("32023") ? "" : (stryCov_9fa48("32023"), 'cid'));
    return await privsCategories.can(privilege, cid, uid);
  }
};
privsTopics.filterTids = async function (privilege, tids, uid) {
  if (stryMutAct_9fa48("32024")) {
    {}
  } else {
    stryCov_9fa48("32024");
    if (stryMutAct_9fa48("32027") ? !Array.isArray(tids) && !tids.length : stryMutAct_9fa48("32026") ? false : stryMutAct_9fa48("32025") ? true : (stryCov_9fa48("32025", "32026", "32027"), (stryMutAct_9fa48("32028") ? Array.isArray(tids) : (stryCov_9fa48("32028"), !Array.isArray(tids))) || (stryMutAct_9fa48("32029") ? tids.length : (stryCov_9fa48("32029"), !tids.length)))) {
      if (stryMutAct_9fa48("32030")) {
        {}
      } else {
        stryCov_9fa48("32030");
        return stryMutAct_9fa48("32031") ? ["Stryker was here"] : (stryCov_9fa48("32031"), []);
      }
    }
    const topicsData = await topics.getTopicsFields(tids, stryMutAct_9fa48("32032") ? [] : (stryCov_9fa48("32032"), [stryMutAct_9fa48("32033") ? "" : (stryCov_9fa48("32033"), 'tid'), stryMutAct_9fa48("32034") ? "" : (stryCov_9fa48("32034"), 'cid'), stryMutAct_9fa48("32035") ? "" : (stryCov_9fa48("32035"), 'deleted'), stryMutAct_9fa48("32036") ? "" : (stryCov_9fa48("32036"), 'scheduled')]));
    const cids = _.uniq(topicsData.map(stryMutAct_9fa48("32037") ? () => undefined : (stryCov_9fa48("32037"), topic => topic.cid)));
    const results = await privsCategories.getBase(privilege, cids, uid);
    const allowedCids = stryMutAct_9fa48("32038") ? cids : (stryCov_9fa48("32038"), cids.filter(stryMutAct_9fa48("32039") ? () => undefined : (stryCov_9fa48("32039"), (cid, index) => stryMutAct_9fa48("32042") ? !results.categories[index].disabled || results.allowedTo[index] || results.isAdmin : stryMutAct_9fa48("32041") ? false : stryMutAct_9fa48("32040") ? true : (stryCov_9fa48("32040", "32041", "32042"), (stryMutAct_9fa48("32043") ? results.categories[index].disabled : (stryCov_9fa48("32043"), !results.categories[index].disabled)) && (stryMutAct_9fa48("32045") ? results.allowedTo[index] && results.isAdmin : stryMutAct_9fa48("32044") ? true : (stryCov_9fa48("32044", "32045"), results.allowedTo[index] || results.isAdmin))))));
    const cidsSet = new Set(allowedCids);
    const canViewDeleted = _.zipObject(cids, results.view_deleted);
    const canViewScheduled = _.zipObject(cids, results.view_scheduled);
    tids = stryMutAct_9fa48("32046") ? topicsData.map(t => t.tid) : (stryCov_9fa48("32046"), topicsData.filter(stryMutAct_9fa48("32047") ? () => undefined : (stryCov_9fa48("32047"), t => stryMutAct_9fa48("32050") ? cidsSet.has(t.cid) || results.isAdmin || privsTopics.canViewDeletedScheduled(t, {}, canViewDeleted[t.cid], canViewScheduled[t.cid]) : stryMutAct_9fa48("32049") ? false : stryMutAct_9fa48("32048") ? true : (stryCov_9fa48("32048", "32049", "32050"), cidsSet.has(t.cid) && (stryMutAct_9fa48("32052") ? results.isAdmin && privsTopics.canViewDeletedScheduled(t, {}, canViewDeleted[t.cid], canViewScheduled[t.cid]) : stryMutAct_9fa48("32051") ? true : (stryCov_9fa48("32051", "32052"), results.isAdmin || privsTopics.canViewDeletedScheduled(t, {}, canViewDeleted[t.cid], canViewScheduled[t.cid])))))).map(stryMutAct_9fa48("32053") ? () => undefined : (stryCov_9fa48("32053"), t => t.tid)));
    const data = await plugins.hooks.fire(stryMutAct_9fa48("32054") ? "" : (stryCov_9fa48("32054"), 'filter:privileges.topics.filter'), stryMutAct_9fa48("32055") ? {} : (stryCov_9fa48("32055"), {
      privilege: privilege,
      uid: uid,
      tids: tids
    }));
    return data ? data.tids : stryMutAct_9fa48("32056") ? ["Stryker was here"] : (stryCov_9fa48("32056"), []);
  }
};
privsTopics.filterUids = async function (privilege, tid, uids) {
  if (stryMutAct_9fa48("32057")) {
    {}
  } else {
    stryCov_9fa48("32057");
    if (stryMutAct_9fa48("32060") ? !Array.isArray(uids) && !uids.length : stryMutAct_9fa48("32059") ? false : stryMutAct_9fa48("32058") ? true : (stryCov_9fa48("32058", "32059", "32060"), (stryMutAct_9fa48("32061") ? Array.isArray(uids) : (stryCov_9fa48("32061"), !Array.isArray(uids))) || (stryMutAct_9fa48("32062") ? uids.length : (stryCov_9fa48("32062"), !uids.length)))) {
      if (stryMutAct_9fa48("32063")) {
        {}
      } else {
        stryCov_9fa48("32063");
        return stryMutAct_9fa48("32064") ? ["Stryker was here"] : (stryCov_9fa48("32064"), []);
      }
    }
    uids = _.uniq(uids);
    const topicData = await topics.getTopicFields(tid, stryMutAct_9fa48("32065") ? [] : (stryCov_9fa48("32065"), [stryMutAct_9fa48("32066") ? "" : (stryCov_9fa48("32066"), 'tid'), stryMutAct_9fa48("32067") ? "" : (stryCov_9fa48("32067"), 'cid'), stryMutAct_9fa48("32068") ? "" : (stryCov_9fa48("32068"), 'deleted'), stryMutAct_9fa48("32069") ? "" : (stryCov_9fa48("32069"), 'scheduled')]));
    const [disabled, allowedTo, isAdmins] = await Promise.all(stryMutAct_9fa48("32070") ? [] : (stryCov_9fa48("32070"), [categories.getCategoryField(topicData.cid, stryMutAct_9fa48("32071") ? "" : (stryCov_9fa48("32071"), 'disabled')), helpers.isUsersAllowedTo(privilege, uids, topicData.cid), user.isAdministrator(uids)]));
    if (stryMutAct_9fa48("32073") ? false : stryMutAct_9fa48("32072") ? true : (stryCov_9fa48("32072", "32073"), topicData.scheduled)) {
      if (stryMutAct_9fa48("32074")) {
        {}
      } else {
        stryCov_9fa48("32074");
        const canViewScheduled = await helpers.isUsersAllowedTo(stryMutAct_9fa48("32075") ? "" : (stryCov_9fa48("32075"), 'topics:schedule'), uids, topicData.cid);
        uids = stryMutAct_9fa48("32076") ? uids : (stryCov_9fa48("32076"), uids.filter(stryMutAct_9fa48("32077") ? () => undefined : (stryCov_9fa48("32077"), (uid, index) => canViewScheduled[index])));
      }
    }
    return stryMutAct_9fa48("32078") ? uids : (stryCov_9fa48("32078"), uids.filter(stryMutAct_9fa48("32079") ? () => undefined : (stryCov_9fa48("32079"), (uid, index) => stryMutAct_9fa48("32082") ? !disabled || allowedTo[index] && (topicData.scheduled || !topicData.deleted) || isAdmins[index] : stryMutAct_9fa48("32081") ? false : stryMutAct_9fa48("32080") ? true : (stryCov_9fa48("32080", "32081", "32082"), (stryMutAct_9fa48("32083") ? disabled : (stryCov_9fa48("32083"), !disabled)) && (stryMutAct_9fa48("32085") ? allowedTo[index] && (topicData.scheduled || !topicData.deleted) && isAdmins[index] : stryMutAct_9fa48("32084") ? true : (stryCov_9fa48("32084", "32085"), (stryMutAct_9fa48("32087") ? allowedTo[index] || topicData.scheduled || !topicData.deleted : stryMutAct_9fa48("32086") ? false : (stryCov_9fa48("32086", "32087"), allowedTo[index] && (stryMutAct_9fa48("32089") ? topicData.scheduled && !topicData.deleted : stryMutAct_9fa48("32088") ? true : (stryCov_9fa48("32088", "32089"), topicData.scheduled || (stryMutAct_9fa48("32090") ? topicData.deleted : (stryCov_9fa48("32090"), !topicData.deleted)))))) || isAdmins[index]))))));
  }
};
privsTopics.canPurge = async function (tid, uid) {
  if (stryMutAct_9fa48("32091")) {
    {}
  } else {
    stryCov_9fa48("32091");
    const cid = await topics.getTopicField(tid, stryMutAct_9fa48("32092") ? "" : (stryCov_9fa48("32092"), 'cid'));
    const [purge, owner, isAdmin, isModerator] = await Promise.all(stryMutAct_9fa48("32093") ? [] : (stryCov_9fa48("32093"), [privsCategories.isUserAllowedTo(stryMutAct_9fa48("32094") ? "" : (stryCov_9fa48("32094"), 'purge'), cid, uid), topics.isOwner(tid, uid), user.isAdministrator(uid), user.isModerator(uid, cid)]));
    return stryMutAct_9fa48("32097") ? purge && (owner || isModerator) && isAdmin : stryMutAct_9fa48("32096") ? false : stryMutAct_9fa48("32095") ? true : (stryCov_9fa48("32095", "32096", "32097"), (stryMutAct_9fa48("32099") ? purge || owner || isModerator : stryMutAct_9fa48("32098") ? false : (stryCov_9fa48("32098", "32099"), purge && (stryMutAct_9fa48("32101") ? owner && isModerator : stryMutAct_9fa48("32100") ? true : (stryCov_9fa48("32100", "32101"), owner || isModerator)))) || isAdmin);
  }
};
privsTopics.canDelete = async function (tid, uid) {
  if (stryMutAct_9fa48("32102")) {
    {}
  } else {
    stryCov_9fa48("32102");
    const topicData = await topics.getTopicFields(tid, stryMutAct_9fa48("32103") ? [] : (stryCov_9fa48("32103"), [stryMutAct_9fa48("32104") ? "" : (stryCov_9fa48("32104"), 'uid'), stryMutAct_9fa48("32105") ? "" : (stryCov_9fa48("32105"), 'cid'), stryMutAct_9fa48("32106") ? "" : (stryCov_9fa48("32106"), 'postcount'), stryMutAct_9fa48("32107") ? "" : (stryCov_9fa48("32107"), 'deleterUid')]));
    const [isModerator, isAdministrator, isOwner, allowedTo] = await Promise.all(stryMutAct_9fa48("32108") ? [] : (stryCov_9fa48("32108"), [user.isModerator(uid, topicData.cid), user.isAdministrator(uid), topics.isOwner(tid, uid), helpers.isAllowedTo(stryMutAct_9fa48("32109") ? "" : (stryCov_9fa48("32109"), 'topics:delete'), uid, stryMutAct_9fa48("32110") ? [] : (stryCov_9fa48("32110"), [topicData.cid]))]));
    if (stryMutAct_9fa48("32112") ? false : stryMutAct_9fa48("32111") ? true : (stryCov_9fa48("32111", "32112"), isAdministrator)) {
      if (stryMutAct_9fa48("32113")) {
        {}
      } else {
        stryCov_9fa48("32113");
        return stryMutAct_9fa48("32114") ? false : (stryCov_9fa48("32114"), true);
      }
    }
    const {
      preventTopicDeleteAfterReplies
    } = meta.config;
    if (stryMutAct_9fa48("32117") ? !isModerator && preventTopicDeleteAfterReplies || topicData.postcount - 1 >= preventTopicDeleteAfterReplies : stryMutAct_9fa48("32116") ? false : stryMutAct_9fa48("32115") ? true : (stryCov_9fa48("32115", "32116", "32117"), (stryMutAct_9fa48("32119") ? !isModerator || preventTopicDeleteAfterReplies : stryMutAct_9fa48("32118") ? true : (stryCov_9fa48("32118", "32119"), (stryMutAct_9fa48("32120") ? isModerator : (stryCov_9fa48("32120"), !isModerator)) && preventTopicDeleteAfterReplies)) && (stryMutAct_9fa48("32123") ? topicData.postcount - 1 < preventTopicDeleteAfterReplies : stryMutAct_9fa48("32122") ? topicData.postcount - 1 > preventTopicDeleteAfterReplies : stryMutAct_9fa48("32121") ? true : (stryCov_9fa48("32121", "32122", "32123"), (stryMutAct_9fa48("32124") ? topicData.postcount + 1 : (stryCov_9fa48("32124"), topicData.postcount - 1)) >= preventTopicDeleteAfterReplies)))) {
      if (stryMutAct_9fa48("32125")) {
        {}
      } else {
        stryCov_9fa48("32125");
        const langKey = (stryMutAct_9fa48("32129") ? preventTopicDeleteAfterReplies <= 1 : stryMutAct_9fa48("32128") ? preventTopicDeleteAfterReplies >= 1 : stryMutAct_9fa48("32127") ? false : stryMutAct_9fa48("32126") ? true : (stryCov_9fa48("32126", "32127", "32128", "32129"), preventTopicDeleteAfterReplies > 1)) ? stryMutAct_9fa48("32130") ? `` : (stryCov_9fa48("32130"), `[[error:cant-delete-topic-has-replies, ${meta.config.preventTopicDeleteAfterReplies}]]`) : stryMutAct_9fa48("32131") ? "" : (stryCov_9fa48("32131"), '[[error:cant-delete-topic-has-reply]]');
        throw new Error(langKey);
      }
    }
    const {
      deleterUid
    } = topicData;
    return stryMutAct_9fa48("32134") ? allowedTo[0] || isOwner && (deleterUid === 0 || deleterUid === topicData.uid) || isModerator : stryMutAct_9fa48("32133") ? false : stryMutAct_9fa48("32132") ? true : (stryCov_9fa48("32132", "32133", "32134"), allowedTo[0] && (stryMutAct_9fa48("32136") ? isOwner && (deleterUid === 0 || deleterUid === topicData.uid) && isModerator : stryMutAct_9fa48("32135") ? true : (stryCov_9fa48("32135", "32136"), (stryMutAct_9fa48("32138") ? isOwner || deleterUid === 0 || deleterUid === topicData.uid : stryMutAct_9fa48("32137") ? false : (stryCov_9fa48("32137", "32138"), isOwner && (stryMutAct_9fa48("32140") ? deleterUid === 0 && deleterUid === topicData.uid : stryMutAct_9fa48("32139") ? true : (stryCov_9fa48("32139", "32140"), (stryMutAct_9fa48("32142") ? deleterUid !== 0 : stryMutAct_9fa48("32141") ? false : (stryCov_9fa48("32141", "32142"), deleterUid === 0)) || (stryMutAct_9fa48("32144") ? deleterUid !== topicData.uid : stryMutAct_9fa48("32143") ? false : (stryCov_9fa48("32143", "32144"), deleterUid === topicData.uid)))))) || isModerator)));
  }
};
privsTopics.canEdit = async function (tid, uid) {
  if (stryMutAct_9fa48("32145")) {
    {}
  } else {
    stryCov_9fa48("32145");
    return await privsTopics.isOwnerOrAdminOrMod(tid, uid);
  }
};
privsTopics.isOwnerOrAdminOrMod = async function (tid, uid) {
  if (stryMutAct_9fa48("32146")) {
    {}
  } else {
    stryCov_9fa48("32146");
    const [isOwner, isAdminOrMod] = await Promise.all(stryMutAct_9fa48("32147") ? [] : (stryCov_9fa48("32147"), [topics.isOwner(tid, uid), privsTopics.isAdminOrMod(tid, uid)]));
    return stryMutAct_9fa48("32150") ? isOwner && isAdminOrMod : stryMutAct_9fa48("32149") ? false : stryMutAct_9fa48("32148") ? true : (stryCov_9fa48("32148", "32149", "32150"), isOwner || isAdminOrMod);
  }
};
privsTopics.isAdminOrMod = async function (tid, uid) {
  if (stryMutAct_9fa48("32151")) {
    {}
  } else {
    stryCov_9fa48("32151");
    if (stryMutAct_9fa48("32155") ? parseInt(uid, 10) > 0 : stryMutAct_9fa48("32154") ? parseInt(uid, 10) < 0 : stryMutAct_9fa48("32153") ? false : stryMutAct_9fa48("32152") ? true : (stryCov_9fa48("32152", "32153", "32154", "32155"), parseInt(uid, 10) <= 0)) {
      if (stryMutAct_9fa48("32156")) {
        {}
      } else {
        stryCov_9fa48("32156");
        return stryMutAct_9fa48("32157") ? true : (stryCov_9fa48("32157"), false);
      }
    }
    const cid = await topics.getTopicField(tid, stryMutAct_9fa48("32158") ? "" : (stryCov_9fa48("32158"), 'cid'));
    return await privsCategories.isAdminOrMod(cid, uid);
  }
};
privsTopics.canViewDeletedScheduled = function (topic, privileges = {}, viewDeleted = stryMutAct_9fa48("32159") ? true : (stryCov_9fa48("32159"), false), viewScheduled = stryMutAct_9fa48("32160") ? true : (stryCov_9fa48("32160"), false)) {
  if (stryMutAct_9fa48("32161")) {
    {}
  } else {
    stryCov_9fa48("32161");
    if (stryMutAct_9fa48("32164") ? false : stryMutAct_9fa48("32163") ? true : stryMutAct_9fa48("32162") ? topic : (stryCov_9fa48("32162", "32163", "32164"), !topic)) {
      if (stryMutAct_9fa48("32165")) {
        {}
      } else {
        stryCov_9fa48("32165");
        return stryMutAct_9fa48("32166") ? true : (stryCov_9fa48("32166"), false);
      }
    }
    const {
      deleted = stryMutAct_9fa48("32167") ? true : (stryCov_9fa48("32167"), false),
      scheduled = stryMutAct_9fa48("32168") ? true : (stryCov_9fa48("32168"), false)
    } = topic;
    const {
      view_deleted = viewDeleted,
      view_scheduled = viewScheduled
    } = privileges;

    // conceptually exclusive, scheduled topics deemed to be not deleted (they can only be purged)
    if (stryMutAct_9fa48("32170") ? false : stryMutAct_9fa48("32169") ? true : (stryCov_9fa48("32169", "32170"), scheduled)) {
      if (stryMutAct_9fa48("32171")) {
        {}
      } else {
        stryCov_9fa48("32171");
        return view_scheduled;
      }
    } else if (stryMutAct_9fa48("32173") ? false : stryMutAct_9fa48("32172") ? true : (stryCov_9fa48("32172", "32173"), deleted)) {
      if (stryMutAct_9fa48("32174")) {
        {}
      } else {
        stryCov_9fa48("32174");
        return view_deleted;
      }
    }
    return stryMutAct_9fa48("32175") ? false : (stryCov_9fa48("32175"), true);
  }
};