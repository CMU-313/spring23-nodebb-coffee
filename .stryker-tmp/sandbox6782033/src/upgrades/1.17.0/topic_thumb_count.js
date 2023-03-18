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
const db = require('../../database');
const batch = require('../../batch');
module.exports = stryMutAct_9fa48("43810") ? {} : (stryCov_9fa48("43810"), {
  name: stryMutAct_9fa48("43811") ? "" : (stryCov_9fa48("43811"), 'Store number of thumbs a topic has in the topic object'),
  timestamp: Date.UTC(2021, 1, 7),
  method: async function () {
    if (stryMutAct_9fa48("43812")) {
      {}
    } else {
      stryCov_9fa48("43812");
      const {
        progress
      } = this;
      await batch.processSortedSet(stryMutAct_9fa48("43813") ? "" : (stryCov_9fa48("43813"), 'topics:tid'), async tids => {
        if (stryMutAct_9fa48("43814")) {
          {}
        } else {
          stryCov_9fa48("43814");
          const keys = tids.map(stryMutAct_9fa48("43815") ? () => undefined : (stryCov_9fa48("43815"), tid => stryMutAct_9fa48("43816") ? `` : (stryCov_9fa48("43816"), `topic:${tid}:thumbs`)));
          const counts = await db.sortedSetsCard(keys);
          const tidToCount = _.zipObject(tids, counts);
          const tidsWithThumbs = stryMutAct_9fa48("43817") ? tids : (stryCov_9fa48("43817"), tids.filter(stryMutAct_9fa48("43818") ? () => undefined : (stryCov_9fa48("43818"), (t, i) => stryMutAct_9fa48("43822") ? counts[i] <= 0 : stryMutAct_9fa48("43821") ? counts[i] >= 0 : stryMutAct_9fa48("43820") ? false : stryMutAct_9fa48("43819") ? true : (stryCov_9fa48("43819", "43820", "43821", "43822"), counts[i] > 0))));
          await db.setObjectBulk(tidsWithThumbs.map(stryMutAct_9fa48("43823") ? () => undefined : (stryCov_9fa48("43823"), tid => stryMutAct_9fa48("43824") ? [] : (stryCov_9fa48("43824"), [stryMutAct_9fa48("43825") ? `` : (stryCov_9fa48("43825"), `topic:${tid}`), stryMutAct_9fa48("43826") ? {} : (stryCov_9fa48("43826"), {
            numThumbs: tidToCount[tid]
          })]))));
          progress.incr(tids.length);
        }
      }, stryMutAct_9fa48("43827") ? {} : (stryCov_9fa48("43827"), {
        batch: 500,
        progress: progress
      }));
    }
  }
});