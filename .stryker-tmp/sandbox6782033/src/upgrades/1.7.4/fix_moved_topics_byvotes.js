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
module.exports = stryMutAct_9fa48("44770") ? {} : (stryCov_9fa48("44770"), {
  name: stryMutAct_9fa48("44771") ? "" : (stryCov_9fa48("44771"), 'Fix sort by votes for moved topics'),
  timestamp: Date.UTC(2018, 0, 8),
  method: async function () {
    if (stryMutAct_9fa48("44772")) {
      {}
    } else {
      stryCov_9fa48("44772");
      const {
        progress
      } = this;
      await batch.processSortedSet(stryMutAct_9fa48("44773") ? "" : (stryCov_9fa48("44773"), 'topics:tid'), async tids => {
        if (stryMutAct_9fa48("44774")) {
          {}
        } else {
          stryCov_9fa48("44774");
          await Promise.all(tids.map(async tid => {
            if (stryMutAct_9fa48("44775")) {
              {}
            } else {
              stryCov_9fa48("44775");
              progress.incr();
              const topicData = await db.getObjectFields(stryMutAct_9fa48("44776") ? `` : (stryCov_9fa48("44776"), `topic:${tid}`), stryMutAct_9fa48("44777") ? [] : (stryCov_9fa48("44777"), [stryMutAct_9fa48("44778") ? "" : (stryCov_9fa48("44778"), 'cid'), stryMutAct_9fa48("44779") ? "" : (stryCov_9fa48("44779"), 'oldCid'), stryMutAct_9fa48("44780") ? "" : (stryCov_9fa48("44780"), 'upvotes'), stryMutAct_9fa48("44781") ? "" : (stryCov_9fa48("44781"), 'downvotes'), stryMutAct_9fa48("44782") ? "" : (stryCov_9fa48("44782"), 'pinned')]));
              if (stryMutAct_9fa48("44785") ? topicData.cid || topicData.oldCid : stryMutAct_9fa48("44784") ? false : stryMutAct_9fa48("44783") ? true : (stryCov_9fa48("44783", "44784", "44785"), topicData.cid && topicData.oldCid)) {
                if (stryMutAct_9fa48("44786")) {
                  {}
                } else {
                  stryCov_9fa48("44786");
                  const upvotes = stryMutAct_9fa48("44789") ? parseInt(topicData.upvotes, 10) && 0 : stryMutAct_9fa48("44788") ? false : stryMutAct_9fa48("44787") ? true : (stryCov_9fa48("44787", "44788", "44789"), parseInt(topicData.upvotes, 10) || 0);
                  const downvotes = stryMutAct_9fa48("44792") ? parseInt(topicData.downvotes, 10) && 0 : stryMutAct_9fa48("44791") ? false : stryMutAct_9fa48("44790") ? true : (stryCov_9fa48("44790", "44791", "44792"), parseInt(topicData.downvotes, 10) || 0);
                  const votes = stryMutAct_9fa48("44793") ? upvotes + downvotes : (stryCov_9fa48("44793"), upvotes - downvotes);
                  await db.sortedSetRemove(stryMutAct_9fa48("44794") ? `` : (stryCov_9fa48("44794"), `cid:${topicData.oldCid}:tids:votes`), tid);
                  if (stryMutAct_9fa48("44797") ? parseInt(topicData.pinned, 10) === 1 : stryMutAct_9fa48("44796") ? false : stryMutAct_9fa48("44795") ? true : (stryCov_9fa48("44795", "44796", "44797"), parseInt(topicData.pinned, 10) !== 1)) {
                    if (stryMutAct_9fa48("44798")) {
                      {}
                    } else {
                      stryCov_9fa48("44798");
                      await db.sortedSetAdd(stryMutAct_9fa48("44799") ? `` : (stryCov_9fa48("44799"), `cid:${topicData.cid}:tids:votes`), votes, tid);
                    }
                  }
                }
              }
            }
          }));
        }
      }, stryMutAct_9fa48("44800") ? {} : (stryCov_9fa48("44800"), {
        progress: progress,
        batch: 500
      }));
    }
  }
});