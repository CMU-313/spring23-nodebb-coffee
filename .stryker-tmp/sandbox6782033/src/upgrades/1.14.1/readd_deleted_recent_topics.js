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
module.exports = stryMutAct_9fa48("43282") ? {} : (stryCov_9fa48("43282"), {
  name: stryMutAct_9fa48("43283") ? "" : (stryCov_9fa48("43283"), 'Re-add deleted topics to topics:recent'),
  timestamp: Date.UTC(2018, 9, 11),
  method: async function () {
    if (stryMutAct_9fa48("43284")) {
      {}
    } else {
      stryCov_9fa48("43284");
      const {
        progress
      } = this;
      await batch.processSortedSet(stryMutAct_9fa48("43285") ? "" : (stryCov_9fa48("43285"), 'topics:tid'), async tids => {
        if (stryMutAct_9fa48("43286")) {
          {}
        } else {
          stryCov_9fa48("43286");
          progress.incr(tids.length);
          const topicData = await db.getObjectsFields(tids.map(stryMutAct_9fa48("43287") ? () => undefined : (stryCov_9fa48("43287"), tid => stryMutAct_9fa48("43288") ? `` : (stryCov_9fa48("43288"), `topic:${tid}`))), stryMutAct_9fa48("43289") ? [] : (stryCov_9fa48("43289"), [stryMutAct_9fa48("43290") ? "" : (stryCov_9fa48("43290"), 'tid'), stryMutAct_9fa48("43291") ? "" : (stryCov_9fa48("43291"), 'lastposttime'), stryMutAct_9fa48("43292") ? "" : (stryCov_9fa48("43292"), 'viewcount'), stryMutAct_9fa48("43293") ? "" : (stryCov_9fa48("43293"), 'postcount'), stryMutAct_9fa48("43294") ? "" : (stryCov_9fa48("43294"), 'upvotes'), stryMutAct_9fa48("43295") ? "" : (stryCov_9fa48("43295"), 'downvotes')]));
          if (stryMutAct_9fa48("43298") ? false : stryMutAct_9fa48("43297") ? true : stryMutAct_9fa48("43296") ? topicData.tid : (stryCov_9fa48("43296", "43297", "43298"), !topicData.tid)) {
            if (stryMutAct_9fa48("43299")) {
              {}
            } else {
              stryCov_9fa48("43299");
              return;
            }
          }
          topicData.forEach(t => {
            if (stryMutAct_9fa48("43300")) {
              {}
            } else {
              stryCov_9fa48("43300");
              if (stryMutAct_9fa48("43303") ? t.hasOwnProperty('upvotes') || t.hasOwnProperty('downvotes') : stryMutAct_9fa48("43302") ? false : stryMutAct_9fa48("43301") ? true : (stryCov_9fa48("43301", "43302", "43303"), t.hasOwnProperty(stryMutAct_9fa48("43304") ? "" : (stryCov_9fa48("43304"), 'upvotes')) && t.hasOwnProperty(stryMutAct_9fa48("43305") ? "" : (stryCov_9fa48("43305"), 'downvotes')))) {
                if (stryMutAct_9fa48("43306")) {
                  {}
                } else {
                  stryCov_9fa48("43306");
                  t.votes = stryMutAct_9fa48("43307") ? parseInt(t.upvotes, 10) + parseInt(t.downvotes, 10) : (stryCov_9fa48("43307"), parseInt(t.upvotes, 10) - parseInt(t.downvotes, 10));
                }
              }
            }
          });
          await db.sortedSetAdd(stryMutAct_9fa48("43308") ? "" : (stryCov_9fa48("43308"), 'topics:recent'), topicData.map(stryMutAct_9fa48("43309") ? () => undefined : (stryCov_9fa48("43309"), t => stryMutAct_9fa48("43312") ? t.lastposttime && 0 : stryMutAct_9fa48("43311") ? false : stryMutAct_9fa48("43310") ? true : (stryCov_9fa48("43310", "43311", "43312"), t.lastposttime || 0))), topicData.map(stryMutAct_9fa48("43313") ? () => undefined : (stryCov_9fa48("43313"), t => t.tid)));
          await db.sortedSetAdd(stryMutAct_9fa48("43314") ? "" : (stryCov_9fa48("43314"), 'topics:views'), topicData.map(stryMutAct_9fa48("43315") ? () => undefined : (stryCov_9fa48("43315"), t => stryMutAct_9fa48("43318") ? t.viewcount && 0 : stryMutAct_9fa48("43317") ? false : stryMutAct_9fa48("43316") ? true : (stryCov_9fa48("43316", "43317", "43318"), t.viewcount || 0))), topicData.map(stryMutAct_9fa48("43319") ? () => undefined : (stryCov_9fa48("43319"), t => t.tid)));
          await db.sortedSetAdd(stryMutAct_9fa48("43320") ? "" : (stryCov_9fa48("43320"), 'topics:posts'), topicData.map(stryMutAct_9fa48("43321") ? () => undefined : (stryCov_9fa48("43321"), t => stryMutAct_9fa48("43324") ? t.postcount && 0 : stryMutAct_9fa48("43323") ? false : stryMutAct_9fa48("43322") ? true : (stryCov_9fa48("43322", "43323", "43324"), t.postcount || 0))), topicData.map(stryMutAct_9fa48("43325") ? () => undefined : (stryCov_9fa48("43325"), t => t.tid)));
          await db.sortedSetAdd(stryMutAct_9fa48("43326") ? "" : (stryCov_9fa48("43326"), 'topics:votes'), topicData.map(stryMutAct_9fa48("43327") ? () => undefined : (stryCov_9fa48("43327"), t => stryMutAct_9fa48("43330") ? t.votes && 0 : stryMutAct_9fa48("43329") ? false : stryMutAct_9fa48("43328") ? true : (stryCov_9fa48("43328", "43329", "43330"), t.votes || 0))), topicData.map(stryMutAct_9fa48("43331") ? () => undefined : (stryCov_9fa48("43331"), t => t.tid)));
        }
      }, stryMutAct_9fa48("43332") ? {} : (stryCov_9fa48("43332"), {
        progress: progress,
        batchSize: 500
      }));
    }
  }
});