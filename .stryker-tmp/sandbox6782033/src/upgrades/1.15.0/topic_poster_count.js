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
module.exports = stryMutAct_9fa48("43494") ? {} : (stryCov_9fa48("43494"), {
  name: stryMutAct_9fa48("43495") ? "" : (stryCov_9fa48("43495"), 'Store poster count in topic hash'),
  timestamp: Date.UTC(2020, 9, 24),
  method: async function () {
    if (stryMutAct_9fa48("43496")) {
      {}
    } else {
      stryCov_9fa48("43496");
      const {
        progress
      } = this;
      await batch.processSortedSet(stryMutAct_9fa48("43497") ? "" : (stryCov_9fa48("43497"), 'topics:tid'), async tids => {
        if (stryMutAct_9fa48("43498")) {
          {}
        } else {
          stryCov_9fa48("43498");
          progress.incr(tids.length);
          const keys = tids.map(stryMutAct_9fa48("43499") ? () => undefined : (stryCov_9fa48("43499"), tid => stryMutAct_9fa48("43500") ? `` : (stryCov_9fa48("43500"), `tid:${tid}:posters`)));
          await db.sortedSetsRemoveRangeByScore(keys, stryMutAct_9fa48("43501") ? "" : (stryCov_9fa48("43501"), '-inf'), 0);
          const counts = await db.sortedSetsCard(keys);
          const bulkSet = stryMutAct_9fa48("43502") ? ["Stryker was here"] : (stryCov_9fa48("43502"), []);
          for (let i = 0; stryMutAct_9fa48("43505") ? i >= tids.length : stryMutAct_9fa48("43504") ? i <= tids.length : stryMutAct_9fa48("43503") ? false : (stryCov_9fa48("43503", "43504", "43505"), i < tids.length); stryMutAct_9fa48("43506") ? i-- : (stryCov_9fa48("43506"), i++)) {
            if (stryMutAct_9fa48("43507")) {
              {}
            } else {
              stryCov_9fa48("43507");
              if (stryMutAct_9fa48("43511") ? counts[i] <= 0 : stryMutAct_9fa48("43510") ? counts[i] >= 0 : stryMutAct_9fa48("43509") ? false : stryMutAct_9fa48("43508") ? true : (stryCov_9fa48("43508", "43509", "43510", "43511"), counts[i] > 0)) {
                if (stryMutAct_9fa48("43512")) {
                  {}
                } else {
                  stryCov_9fa48("43512");
                  bulkSet.push(stryMutAct_9fa48("43513") ? [] : (stryCov_9fa48("43513"), [stryMutAct_9fa48("43514") ? `` : (stryCov_9fa48("43514"), `topic:${tids[i]}`), stryMutAct_9fa48("43515") ? {} : (stryCov_9fa48("43515"), {
                    postercount: counts[i]
                  })]));
                }
              }
            }
          }
          await db.setObjectBulk(bulkSet);
        }
      }, stryMutAct_9fa48("43516") ? {} : (stryCov_9fa48("43516"), {
        progress: progress,
        batchSize: 500
      }));
    }
  }
});