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
module.exports = stryMutAct_9fa48("43394") ? {} : (stryCov_9fa48("43394"), {
  name: stryMutAct_9fa48("43395") ? "" : (stryCov_9fa48("43395"), 'Disable nodebb-plugin-soundpack-default'),
  timestamp: Date.UTC(2020, 8, 6),
  method: async function () {
    if (stryMutAct_9fa48("43396")) {
      {}
    } else {
      stryCov_9fa48("43396");
      await db.sortedSetRemove(stryMutAct_9fa48("43397") ? "" : (stryCov_9fa48("43397"), 'plugins:active'), stryMutAct_9fa48("43398") ? "" : (stryCov_9fa48("43398"), 'nodebb-plugin-soundpack-default'));
    }
  }
});