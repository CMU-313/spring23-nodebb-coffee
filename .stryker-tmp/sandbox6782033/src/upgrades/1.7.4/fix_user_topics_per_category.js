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
const batch = require('../../batch');
const db = require('../../database');
module.exports = stryMutAct_9fa48("44801") ? {} : (stryCov_9fa48("44801"), {
  name: stryMutAct_9fa48("44802") ? "" : (stryCov_9fa48("44802"), 'Fix topics in categories per user if they were moved'),
  timestamp: Date.UTC(2018, 0, 22),
  method: async function () {
    if (stryMutAct_9fa48("44803")) {
      {}
    } else {
      stryCov_9fa48("44803");
      const {
        progress
      } = this;
      await batch.processSortedSet(stryMutAct_9fa48("44804") ? "" : (stryCov_9fa48("44804"), 'topics:tid'), async tids => {
        if (stryMutAct_9fa48("44805")) {
          {}
        } else {
          stryCov_9fa48("44805");
          await Promise.all(tids.map(async tid => {
            if (stryMutAct_9fa48("44806")) {
              {}
            } else {
              stryCov_9fa48("44806");
              progress.incr();
              const topicData = await db.getObjectFields(stryMutAct_9fa48("44807") ? `` : (stryCov_9fa48("44807"), `topic:${tid}`), stryMutAct_9fa48("44808") ? [] : (stryCov_9fa48("44808"), [stryMutAct_9fa48("44809") ? "" : (stryCov_9fa48("44809"), 'cid'), stryMutAct_9fa48("44810") ? "" : (stryCov_9fa48("44810"), 'tid'), stryMutAct_9fa48("44811") ? "" : (stryCov_9fa48("44811"), 'uid'), stryMutAct_9fa48("44812") ? "" : (stryCov_9fa48("44812"), 'oldCid'), stryMutAct_9fa48("44813") ? "" : (stryCov_9fa48("44813"), 'timestamp')]));
              if (stryMutAct_9fa48("44816") ? topicData.cid || topicData.oldCid : stryMutAct_9fa48("44815") ? false : stryMutAct_9fa48("44814") ? true : (stryCov_9fa48("44814", "44815", "44816"), topicData.cid && topicData.oldCid)) {
                if (stryMutAct_9fa48("44817")) {
                  {}
                } else {
                  stryCov_9fa48("44817");
                  const isMember = await db.isSortedSetMember(stryMutAct_9fa48("44818") ? `` : (stryCov_9fa48("44818"), `cid:${topicData.oldCid}:uid:${topicData.uid}`), topicData.tid);
                  if (stryMutAct_9fa48("44820") ? false : stryMutAct_9fa48("44819") ? true : (stryCov_9fa48("44819", "44820"), isMember)) {
                    if (stryMutAct_9fa48("44821")) {
                      {}
                    } else {
                      stryCov_9fa48("44821");
                      await db.sortedSetRemove(stryMutAct_9fa48("44822") ? `` : (stryCov_9fa48("44822"), `cid:${topicData.oldCid}:uid:${topicData.uid}:tids`), tid);
                      await db.sortedSetAdd(stryMutAct_9fa48("44823") ? `` : (stryCov_9fa48("44823"), `cid:${topicData.cid}:uid:${topicData.uid}:tids`), topicData.timestamp, tid);
                    }
                  }
                }
              }
            }
          }));
        }
      }, stryMutAct_9fa48("44824") ? {} : (stryCov_9fa48("44824"), {
        progress: progress,
        batch: 500
      }));
    }
  }
});