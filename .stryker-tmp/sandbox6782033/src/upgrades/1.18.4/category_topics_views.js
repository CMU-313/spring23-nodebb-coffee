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
const topics = require('../../topics');
module.exports = stryMutAct_9fa48("43855") ? {} : (stryCov_9fa48("43855"), {
  name: stryMutAct_9fa48("43856") ? "" : (stryCov_9fa48("43856"), 'Category topics sorted sets by views'),
  timestamp: Date.UTC(2021, 8, 28),
  method: async function () {
    if (stryMutAct_9fa48("43857")) {
      {}
    } else {
      stryCov_9fa48("43857");
      const {
        progress
      } = this;
      await batch.processSortedSet(stryMutAct_9fa48("43858") ? "" : (stryCov_9fa48("43858"), 'topics:tid'), async tids => {
        if (stryMutAct_9fa48("43859")) {
          {}
        } else {
          stryCov_9fa48("43859");
          let topicData = await topics.getTopicsData(tids);
          topicData = stryMutAct_9fa48("43860") ? topicData : (stryCov_9fa48("43860"), topicData.filter(stryMutAct_9fa48("43861") ? () => undefined : (stryCov_9fa48("43861"), t => stryMutAct_9fa48("43864") ? t || t.cid : stryMutAct_9fa48("43863") ? false : stryMutAct_9fa48("43862") ? true : (stryCov_9fa48("43862", "43863", "43864"), t && t.cid))));
          await db.sortedSetAddBulk(topicData.map(stryMutAct_9fa48("43865") ? () => undefined : (stryCov_9fa48("43865"), t => stryMutAct_9fa48("43866") ? [] : (stryCov_9fa48("43866"), [stryMutAct_9fa48("43867") ? `` : (stryCov_9fa48("43867"), `cid:${t.cid}:tids:views`), stryMutAct_9fa48("43870") ? t.viewcount && 0 : stryMutAct_9fa48("43869") ? false : stryMutAct_9fa48("43868") ? true : (stryCov_9fa48("43868", "43869", "43870"), t.viewcount || 0), t.tid]))));
          progress.incr(tids.length);
        }
      }, stryMutAct_9fa48("43871") ? {} : (stryCov_9fa48("43871"), {
        batch: 500,
        progress: progress
      }));
    }
  }
});