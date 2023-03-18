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
module.exports = stryMutAct_9fa48("43754") ? {} : (stryCov_9fa48("43754"), {
  name: stryMutAct_9fa48("43755") ? "" : (stryCov_9fa48("43755"), 'Create category name sorted set'),
  timestamp: Date.UTC(2021, 0, 27),
  method: async function () {
    if (stryMutAct_9fa48("43756")) {
      {}
    } else {
      stryCov_9fa48("43756");
      const {
        progress
      } = this;
      await batch.processSortedSet(stryMutAct_9fa48("43757") ? "" : (stryCov_9fa48("43757"), 'categories:cid'), async cids => {
        if (stryMutAct_9fa48("43758")) {
          {}
        } else {
          stryCov_9fa48("43758");
          const keys = cids.map(stryMutAct_9fa48("43759") ? () => undefined : (stryCov_9fa48("43759"), cid => stryMutAct_9fa48("43760") ? `` : (stryCov_9fa48("43760"), `category:${cid}`)));
          let categoryData = await db.getObjectsFields(keys, stryMutAct_9fa48("43761") ? [] : (stryCov_9fa48("43761"), [stryMutAct_9fa48("43762") ? "" : (stryCov_9fa48("43762"), 'cid'), stryMutAct_9fa48("43763") ? "" : (stryCov_9fa48("43763"), 'name')]));
          categoryData = stryMutAct_9fa48("43764") ? categoryData : (stryCov_9fa48("43764"), categoryData.filter(stryMutAct_9fa48("43765") ? () => undefined : (stryCov_9fa48("43765"), c => stryMutAct_9fa48("43768") ? c.cid || c.name : stryMutAct_9fa48("43767") ? false : stryMutAct_9fa48("43766") ? true : (stryCov_9fa48("43766", "43767", "43768"), c.cid && c.name))));
          const bulkAdd = categoryData.map(stryMutAct_9fa48("43769") ? () => undefined : (stryCov_9fa48("43769"), cat => stryMutAct_9fa48("43770") ? [] : (stryCov_9fa48("43770"), [stryMutAct_9fa48("43771") ? "" : (stryCov_9fa48("43771"), 'categories:name'), 0, stryMutAct_9fa48("43772") ? `` : (stryCov_9fa48("43772"), `${stryMutAct_9fa48("43774") ? String(cat.name).toLowerCase() : stryMutAct_9fa48("43773") ? String(cat.name).slice(0, 200).toUpperCase() : (stryCov_9fa48("43773", "43774"), String(cat.name).slice(0, 200).toLowerCase())}:${cat.cid}`)])));
          await db.sortedSetAddBulk(bulkAdd);
          progress.incr(cids.length);
        }
      }, stryMutAct_9fa48("43775") ? {} : (stryCov_9fa48("43775"), {
        batch: 500,
        progress: progress
      }));
    }
  }
});