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
module.exports = stryMutAct_9fa48("44729") ? {} : (stryCov_9fa48("44729"), {
  name: stryMutAct_9fa48("44730") ? "" : (stryCov_9fa48("44730"), 'Add votes to topics'),
  timestamp: Date.UTC(2017, 11, 8),
  method: async function () {
    if (stryMutAct_9fa48("44731")) {
      {}
    } else {
      stryCov_9fa48("44731");
      const {
        progress
      } = this;
      batch.processSortedSet(stryMutAct_9fa48("44732") ? "" : (stryCov_9fa48("44732"), 'topics:tid'), async tids => {
        if (stryMutAct_9fa48("44733")) {
          {}
        } else {
          stryCov_9fa48("44733");
          await Promise.all(tids.map(async tid => {
            if (stryMutAct_9fa48("44734")) {
              {}
            } else {
              stryCov_9fa48("44734");
              progress.incr();
              const topicData = await db.getObjectFields(stryMutAct_9fa48("44735") ? `` : (stryCov_9fa48("44735"), `topic:${tid}`), stryMutAct_9fa48("44736") ? [] : (stryCov_9fa48("44736"), [stryMutAct_9fa48("44737") ? "" : (stryCov_9fa48("44737"), 'mainPid'), stryMutAct_9fa48("44738") ? "" : (stryCov_9fa48("44738"), 'cid'), stryMutAct_9fa48("44739") ? "" : (stryCov_9fa48("44739"), 'pinned')]));
              if (stryMutAct_9fa48("44742") ? topicData.mainPid || topicData.cid : stryMutAct_9fa48("44741") ? false : stryMutAct_9fa48("44740") ? true : (stryCov_9fa48("44740", "44741", "44742"), topicData.mainPid && topicData.cid)) {
                if (stryMutAct_9fa48("44743")) {
                  {}
                } else {
                  stryCov_9fa48("44743");
                  const postData = await db.getObject(stryMutAct_9fa48("44744") ? `` : (stryCov_9fa48("44744"), `post:${topicData.mainPid}`));
                  if (stryMutAct_9fa48("44746") ? false : stryMutAct_9fa48("44745") ? true : (stryCov_9fa48("44745", "44746"), postData)) {
                    if (stryMutAct_9fa48("44747")) {
                      {}
                    } else {
                      stryCov_9fa48("44747");
                      const upvotes = stryMutAct_9fa48("44750") ? parseInt(postData.upvotes, 10) && 0 : stryMutAct_9fa48("44749") ? false : stryMutAct_9fa48("44748") ? true : (stryCov_9fa48("44748", "44749", "44750"), parseInt(postData.upvotes, 10) || 0);
                      const downvotes = stryMutAct_9fa48("44753") ? parseInt(postData.downvotes, 10) && 0 : stryMutAct_9fa48("44752") ? false : stryMutAct_9fa48("44751") ? true : (stryCov_9fa48("44751", "44752", "44753"), parseInt(postData.downvotes, 10) || 0);
                      const data = stryMutAct_9fa48("44754") ? {} : (stryCov_9fa48("44754"), {
                        upvotes: upvotes,
                        downvotes: downvotes
                      });
                      const votes = stryMutAct_9fa48("44755") ? upvotes + downvotes : (stryCov_9fa48("44755"), upvotes - downvotes);
                      await Promise.all(stryMutAct_9fa48("44756") ? [] : (stryCov_9fa48("44756"), [db.setObject(stryMutAct_9fa48("44757") ? `` : (stryCov_9fa48("44757"), `topic:${tid}`), data), db.sortedSetAdd(stryMutAct_9fa48("44758") ? "" : (stryCov_9fa48("44758"), 'topics:votes'), votes, tid)]));
                      if (stryMutAct_9fa48("44761") ? parseInt(topicData.pinned, 10) === 1 : stryMutAct_9fa48("44760") ? false : stryMutAct_9fa48("44759") ? true : (stryCov_9fa48("44759", "44760", "44761"), parseInt(topicData.pinned, 10) !== 1)) {
                        if (stryMutAct_9fa48("44762")) {
                          {}
                        } else {
                          stryCov_9fa48("44762");
                          await db.sortedSetAdd(stryMutAct_9fa48("44763") ? `` : (stryCov_9fa48("44763"), `cid:${topicData.cid}:tids:votes`), votes, tid);
                        }
                      }
                    }
                  }
                }
              }
            }
          }));
        }
      }, stryMutAct_9fa48("44764") ? {} : (stryCov_9fa48("44764"), {
        progress: progress,
        batch: 500
      }));
    }
  }
});