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
module.exports = stryMutAct_9fa48("42087") ? {} : (stryCov_9fa48("42087"), {
  name: stryMutAct_9fa48("42088") ? "" : (stryCov_9fa48("42088"), 'Adding theme to active plugins sorted set'),
  timestamp: Date.UTC(2015, 11, 23),
  method: async function () {
    if (stryMutAct_9fa48("42089")) {
      {}
    } else {
      stryCov_9fa48("42089");
      const themeId = await db.getObjectField(stryMutAct_9fa48("42090") ? "" : (stryCov_9fa48("42090"), 'config'), stryMutAct_9fa48("42091") ? "" : (stryCov_9fa48("42091"), 'theme:id'));
      await db.sortedSetAdd(stryMutAct_9fa48("42092") ? "" : (stryCov_9fa48("42092"), 'plugins:active'), 0, themeId);
    }
  }
});