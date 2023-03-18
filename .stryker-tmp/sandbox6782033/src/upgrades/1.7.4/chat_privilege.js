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
const groups = require('../../groups');
module.exports = stryMutAct_9fa48("44765") ? {} : (stryCov_9fa48("44765"), {
  name: stryMutAct_9fa48("44766") ? "" : (stryCov_9fa48("44766"), 'Give chat privilege to registered-users'),
  timestamp: Date.UTC(2017, 11, 18),
  method: function (callback) {
    if (stryMutAct_9fa48("44767")) {
      {}
    } else {
      stryCov_9fa48("44767");
      groups.join(stryMutAct_9fa48("44768") ? "" : (stryCov_9fa48("44768"), 'cid:0:privileges:groups:chat'), stryMutAct_9fa48("44769") ? "" : (stryCov_9fa48("44769"), 'registered-users'), callback);
    }
  }
});