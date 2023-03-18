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
const privileges = require('../../privileges');
module.exports = stryMutAct_9fa48("42756") ? {} : (stryCov_9fa48("42756"), {
  name: stryMutAct_9fa48("42757") ? "" : (stryCov_9fa48("42757"), 'Group create global privilege'),
  timestamp: Date.UTC(2019, 0, 4),
  method: function (callback) {
    if (stryMutAct_9fa48("42758")) {
      {}
    } else {
      stryCov_9fa48("42758");
      const meta = require('../../meta');
      if (stryMutAct_9fa48("42761") ? parseInt(meta.config.allowGroupCreation, 10) !== 1 : stryMutAct_9fa48("42760") ? false : stryMutAct_9fa48("42759") ? true : (stryCov_9fa48("42759", "42760", "42761"), parseInt(meta.config.allowGroupCreation, 10) === 1)) {
        if (stryMutAct_9fa48("42762")) {
          {}
        } else {
          stryCov_9fa48("42762");
          privileges.global.give(stryMutAct_9fa48("42763") ? [] : (stryCov_9fa48("42763"), [stryMutAct_9fa48("42764") ? "" : (stryCov_9fa48("42764"), 'groups:group:create')]), stryMutAct_9fa48("42765") ? "" : (stryCov_9fa48("42765"), 'registered-users'), callback);
        }
      } else {
        if (stryMutAct_9fa48("42766")) {
          {}
        } else {
          stryCov_9fa48("42766");
          setImmediate(callback);
        }
      }
    }
  }
});