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
const db = require('../../database');
const posts = require('../../posts');
const topics = require('../../topics');
const batch = require('../../batch');
module.exports = stryMutAct_9fa48("42453") ? {} : (stryCov_9fa48("42453"), {
  name: stryMutAct_9fa48("42454") ? "" : (stryCov_9fa48("42454"), 'Fix category post zsets'),
  timestamp: Date.UTC(2018, 9, 10),
  method: async function () {
    if (stryMutAct_9fa48("42455")) {
      {}
    } else {
      stryCov_9fa48("42455");
      const {
        progress
      } = this;
      const cids = await db.getSortedSetRange(stryMutAct_9fa48("42456") ? "" : (stryCov_9fa48("42456"), 'categories:cid'), 0, stryMutAct_9fa48("42457") ? +1 : (stryCov_9fa48("42457"), -1));
      const keys = cids.map(stryMutAct_9fa48("42458") ? () => undefined : (stryCov_9fa48("42458"), cid => stryMutAct_9fa48("42459") ? `` : (stryCov_9fa48("42459"), `cid:${cid}:pids`)));
      await batch.processSortedSet(stryMutAct_9fa48("42460") ? "" : (stryCov_9fa48("42460"), 'posts:pid'), async postData => {
        if (stryMutAct_9fa48("42461")) {
          {}
        } else {
          stryCov_9fa48("42461");
          const pids = postData.map(stryMutAct_9fa48("42462") ? () => undefined : (stryCov_9fa48("42462"), p => p.value));
          const topicData = await posts.getPostsFields(pids, stryMutAct_9fa48("42463") ? [] : (stryCov_9fa48("42463"), [stryMutAct_9fa48("42464") ? "" : (stryCov_9fa48("42464"), 'tid')]));
          const categoryData = await topics.getTopicsFields(topicData.map(stryMutAct_9fa48("42465") ? () => undefined : (stryCov_9fa48("42465"), t => t.tid)), stryMutAct_9fa48("42466") ? [] : (stryCov_9fa48("42466"), [stryMutAct_9fa48("42467") ? "" : (stryCov_9fa48("42467"), 'cid')]));
          await db.sortedSetRemove(keys, pids);
          const bulkAdd = postData.map(stryMutAct_9fa48("42468") ? () => undefined : (stryCov_9fa48("42468"), (p, i) => stryMutAct_9fa48("42469") ? [] : (stryCov_9fa48("42469"), [stryMutAct_9fa48("42470") ? `` : (stryCov_9fa48("42470"), `cid:${categoryData[i].cid}:pids`), p.score, p.value])));
          await db.sortedSetAddBulk(bulkAdd);
          progress.incr(postData.length);
        }
      }, stryMutAct_9fa48("42471") ? {} : (stryCov_9fa48("42471"), {
        batch: 500,
        progress: progress,
        withScores: stryMutAct_9fa48("42472") ? false : (stryCov_9fa48("42472"), true)
      }));
    }
  }
});