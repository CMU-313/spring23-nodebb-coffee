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
const batch = require('../../batch');
const posts = require('../../posts');
module.exports = stryMutAct_9fa48("43333") ? {} : (stryCov_9fa48("43333"), {
  name: stryMutAct_9fa48("43334") ? "" : (stryCov_9fa48("43334"), 'Add target uid to flag objects'),
  timestamp: Date.UTC(2020, 7, 22),
  method: async function () {
    if (stryMutAct_9fa48("43335")) {
      {}
    } else {
      stryCov_9fa48("43335");
      const {
        progress
      } = this;
      await batch.processSortedSet(stryMutAct_9fa48("43336") ? "" : (stryCov_9fa48("43336"), 'flags:datetime'), async flagIds => {
        if (stryMutAct_9fa48("43337")) {
          {}
        } else {
          stryCov_9fa48("43337");
          progress.incr(flagIds.length);
          const flagData = await db.getObjects(flagIds.map(stryMutAct_9fa48("43338") ? () => undefined : (stryCov_9fa48("43338"), id => stryMutAct_9fa48("43339") ? `` : (stryCov_9fa48("43339"), `flag:${id}`))));
          for (const flagObj of flagData) {
            if (stryMutAct_9fa48("43340")) {
              {}
            } else {
              stryCov_9fa48("43340");
              /* eslint-disable no-await-in-loop */
              if (stryMutAct_9fa48("43342") ? false : stryMutAct_9fa48("43341") ? true : (stryCov_9fa48("43341", "43342"), flagObj)) {
                if (stryMutAct_9fa48("43343")) {
                  {}
                } else {
                  stryCov_9fa48("43343");
                  const {
                    targetId
                  } = flagObj;
                  if (stryMutAct_9fa48("43345") ? false : stryMutAct_9fa48("43344") ? true : (stryCov_9fa48("43344", "43345"), targetId)) {
                    if (stryMutAct_9fa48("43346")) {
                      {}
                    } else {
                      stryCov_9fa48("43346");
                      if (stryMutAct_9fa48("43349") ? flagObj.type !== 'post' : stryMutAct_9fa48("43348") ? false : stryMutAct_9fa48("43347") ? true : (stryCov_9fa48("43347", "43348", "43349"), flagObj.type === (stryMutAct_9fa48("43350") ? "" : (stryCov_9fa48("43350"), 'post')))) {
                        if (stryMutAct_9fa48("43351")) {
                          {}
                        } else {
                          stryCov_9fa48("43351");
                          const targetUid = await posts.getPostField(targetId, stryMutAct_9fa48("43352") ? "" : (stryCov_9fa48("43352"), 'uid'));
                          if (stryMutAct_9fa48("43354") ? false : stryMutAct_9fa48("43353") ? true : (stryCov_9fa48("43353", "43354"), targetUid)) {
                            if (stryMutAct_9fa48("43355")) {
                              {}
                            } else {
                              stryCov_9fa48("43355");
                              await db.setObjectField(stryMutAct_9fa48("43356") ? `` : (stryCov_9fa48("43356"), `flag:${flagObj.flagId}`), stryMutAct_9fa48("43357") ? "" : (stryCov_9fa48("43357"), 'targetUid'), targetUid);
                            }
                          }
                        }
                      } else if (stryMutAct_9fa48("43360") ? flagObj.type !== 'user' : stryMutAct_9fa48("43359") ? false : stryMutAct_9fa48("43358") ? true : (stryCov_9fa48("43358", "43359", "43360"), flagObj.type === (stryMutAct_9fa48("43361") ? "" : (stryCov_9fa48("43361"), 'user')))) {
                        if (stryMutAct_9fa48("43362")) {
                          {}
                        } else {
                          stryCov_9fa48("43362");
                          await db.setObjectField(stryMutAct_9fa48("43363") ? `` : (stryCov_9fa48("43363"), `flag:${flagObj.flagId}`), stryMutAct_9fa48("43364") ? "" : (stryCov_9fa48("43364"), 'targetUid'), targetId);
                        }
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }, stryMutAct_9fa48("43365") ? {} : (stryCov_9fa48("43365"), {
        progress: progress,
        batch: 500
      }));
    }
  }
});