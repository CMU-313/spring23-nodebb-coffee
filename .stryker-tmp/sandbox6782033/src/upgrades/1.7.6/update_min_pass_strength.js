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
module.exports = stryMutAct_9fa48("44960") ? {} : (stryCov_9fa48("44960"), {
  name: stryMutAct_9fa48("44961") ? "" : (stryCov_9fa48("44961"), 'Revising minimum password strength to 1 (from 0)'),
  timestamp: Date.UTC(2018, 1, 21),
  method: async function () {
    if (stryMutAct_9fa48("44962")) {
      {}
    } else {
      stryCov_9fa48("44962");
      const strength = await db.getObjectField(stryMutAct_9fa48("44963") ? "" : (stryCov_9fa48("44963"), 'config'), stryMutAct_9fa48("44964") ? "" : (stryCov_9fa48("44964"), 'minimumPasswordStrength'));
      if (stryMutAct_9fa48("44967") ? false : stryMutAct_9fa48("44966") ? true : stryMutAct_9fa48("44965") ? strength : (stryCov_9fa48("44965", "44966", "44967"), !strength)) {
        if (stryMutAct_9fa48("44968")) {
          {}
        } else {
          stryCov_9fa48("44968");
          await db.setObjectField(stryMutAct_9fa48("44969") ? "" : (stryCov_9fa48("44969"), 'config'), stryMutAct_9fa48("44970") ? "" : (stryCov_9fa48("44970"), 'minimumPasswordStrength'), 1);
        }
      }
    }
  }
});