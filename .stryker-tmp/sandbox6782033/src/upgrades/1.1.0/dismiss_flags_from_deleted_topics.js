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
const winston = require('winston');
const db = require('../../database');
module.exports = stryMutAct_9fa48("42168") ? {} : (stryCov_9fa48("42168"), {
  name: stryMutAct_9fa48("42169") ? "" : (stryCov_9fa48("42169"), 'Dismiss flags from deleted topics'),
  timestamp: Date.UTC(2016, 3, 29),
  method: async function () {
    if (stryMutAct_9fa48("42170")) {
      {}
    } else {
      stryCov_9fa48("42170");
      const posts = require('../../posts');
      const topics = require('../../topics');
      const pids = await db.getSortedSetRange(stryMutAct_9fa48("42171") ? "" : (stryCov_9fa48("42171"), 'posts:flagged'), 0, stryMutAct_9fa48("42172") ? +1 : (stryCov_9fa48("42172"), -1));
      const postData = await posts.getPostsFields(pids, stryMutAct_9fa48("42173") ? [] : (stryCov_9fa48("42173"), [stryMutAct_9fa48("42174") ? "" : (stryCov_9fa48("42174"), 'tid')]));
      const tids = postData.map(stryMutAct_9fa48("42175") ? () => undefined : (stryCov_9fa48("42175"), t => t.tid));
      const topicData = await topics.getTopicsFields(tids, stryMutAct_9fa48("42176") ? [] : (stryCov_9fa48("42176"), [stryMutAct_9fa48("42177") ? "" : (stryCov_9fa48("42177"), 'deleted')]));
      const toDismiss = stryMutAct_9fa48("42178") ? topicData.map((t, idx) => parseInt(t.deleted, 10) === 1 ? pids[idx] : null) : (stryCov_9fa48("42178"), topicData.map(stryMutAct_9fa48("42179") ? () => undefined : (stryCov_9fa48("42179"), (t, idx) => (stryMutAct_9fa48("42182") ? parseInt(t.deleted, 10) !== 1 : stryMutAct_9fa48("42181") ? false : stryMutAct_9fa48("42180") ? true : (stryCov_9fa48("42180", "42181", "42182"), parseInt(t.deleted, 10) === 1)) ? pids[idx] : null)).filter(Boolean));
      winston.verbose(stryMutAct_9fa48("42183") ? `` : (stryCov_9fa48("42183"), `[2016/04/29] ${toDismiss.length} dismissable flags found`));
      await Promise.all(toDismiss.map(dismissFlag));
    }
  }
});

// copied from core since this function was removed
// https://github.com/NodeBB/NodeBB/blob/v1.x.x/src/posts/flags.js
async function dismissFlag(pid) {
  if (stryMutAct_9fa48("42184")) {
    {}
  } else {
    stryCov_9fa48("42184");
    const postData = await db.getObjectFields(stryMutAct_9fa48("42185") ? `` : (stryCov_9fa48("42185"), `post:${pid}`), stryMutAct_9fa48("42186") ? [] : (stryCov_9fa48("42186"), [stryMutAct_9fa48("42187") ? "" : (stryCov_9fa48("42187"), 'pid'), stryMutAct_9fa48("42188") ? "" : (stryCov_9fa48("42188"), 'uid'), stryMutAct_9fa48("42189") ? "" : (stryCov_9fa48("42189"), 'flags')]));
    if (stryMutAct_9fa48("42192") ? false : stryMutAct_9fa48("42191") ? true : stryMutAct_9fa48("42190") ? postData.pid : (stryCov_9fa48("42190", "42191", "42192"), !postData.pid)) {
      if (stryMutAct_9fa48("42193")) {
        {}
      } else {
        stryCov_9fa48("42193");
        return;
      }
    }
    if (stryMutAct_9fa48("42196") ? parseInt(postData.uid, 10) || parseInt(postData.flags, 10) > 0 : stryMutAct_9fa48("42195") ? false : stryMutAct_9fa48("42194") ? true : (stryCov_9fa48("42194", "42195", "42196"), parseInt(postData.uid, 10) && (stryMutAct_9fa48("42199") ? parseInt(postData.flags, 10) <= 0 : stryMutAct_9fa48("42198") ? parseInt(postData.flags, 10) >= 0 : stryMutAct_9fa48("42197") ? true : (stryCov_9fa48("42197", "42198", "42199"), parseInt(postData.flags, 10) > 0)))) {
      if (stryMutAct_9fa48("42200")) {
        {}
      } else {
        stryCov_9fa48("42200");
        await Promise.all(stryMutAct_9fa48("42201") ? [] : (stryCov_9fa48("42201"), [db.sortedSetIncrBy(stryMutAct_9fa48("42202") ? "" : (stryCov_9fa48("42202"), 'users:flags'), stryMutAct_9fa48("42203") ? +postData.flags : (stryCov_9fa48("42203"), -postData.flags), postData.uid), db.incrObjectFieldBy(stryMutAct_9fa48("42204") ? `` : (stryCov_9fa48("42204"), `user:${postData.uid}`), stryMutAct_9fa48("42205") ? "" : (stryCov_9fa48("42205"), 'flags'), stryMutAct_9fa48("42206") ? +postData.flags : (stryCov_9fa48("42206"), -postData.flags))]));
      }
    }
    const uids = await db.getSortedSetRange(stryMutAct_9fa48("42207") ? `` : (stryCov_9fa48("42207"), `pid:${pid}:flag:uids`), 0, stryMutAct_9fa48("42208") ? +1 : (stryCov_9fa48("42208"), -1));
    const nids = uids.map(stryMutAct_9fa48("42209") ? () => undefined : (stryCov_9fa48("42209"), uid => stryMutAct_9fa48("42210") ? `` : (stryCov_9fa48("42210"), `post_flag:${pid}:uid:${uid}`)));
    await Promise.all(stryMutAct_9fa48("42211") ? [] : (stryCov_9fa48("42211"), [db.deleteAll(nids.map(stryMutAct_9fa48("42212") ? () => undefined : (stryCov_9fa48("42212"), nid => stryMutAct_9fa48("42213") ? `` : (stryCov_9fa48("42213"), `notifications:${nid}`)))), db.sortedSetRemove(stryMutAct_9fa48("42214") ? "" : (stryCov_9fa48("42214"), 'notifications'), nids), db.delete(stryMutAct_9fa48("42215") ? `` : (stryCov_9fa48("42215"), `pid:${pid}:flag:uids`)), db.sortedSetsRemove(stryMutAct_9fa48("42216") ? [] : (stryCov_9fa48("42216"), [stryMutAct_9fa48("42217") ? "" : (stryCov_9fa48("42217"), 'posts:flagged'), stryMutAct_9fa48("42218") ? "" : (stryCov_9fa48("42218"), 'posts:flags:count'), stryMutAct_9fa48("42219") ? `` : (stryCov_9fa48("42219"), `uid:${postData.uid}:flag:pids`)]), pid), db.deleteObjectField(stryMutAct_9fa48("42220") ? `` : (stryCov_9fa48("42220"), `post:${pid}`), stryMutAct_9fa48("42221") ? "" : (stryCov_9fa48("42221"), 'flags')), db.delete(stryMutAct_9fa48("42222") ? `` : (stryCov_9fa48("42222"), `pid:${pid}:flag:uid:reason`)), db.deleteObjectFields(stryMutAct_9fa48("42223") ? `` : (stryCov_9fa48("42223"), `post:${pid}`), stryMutAct_9fa48("42224") ? [] : (stryCov_9fa48("42224"), [stryMutAct_9fa48("42225") ? "" : (stryCov_9fa48("42225"), 'flag:state'), stryMutAct_9fa48("42226") ? "" : (stryCov_9fa48("42226"), 'flag:assignee'), stryMutAct_9fa48("42227") ? "" : (stryCov_9fa48("42227"), 'flag:notes'), stryMutAct_9fa48("42228") ? "" : (stryCov_9fa48("42228"), 'flag:history')]))]));
    await db.sortedSetsRemoveRangeByScore(stryMutAct_9fa48("42229") ? [] : (stryCov_9fa48("42229"), [stryMutAct_9fa48("42230") ? "" : (stryCov_9fa48("42230"), 'users:flags')]), stryMutAct_9fa48("42231") ? "" : (stryCov_9fa48("42231"), '-inf'), 0);
  }
}