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
const path = require('path');
const fs = require('fs');
const Logs = module.exports;
Logs.path = path.resolve(__dirname, stryMutAct_9fa48("24350") ? "" : (stryCov_9fa48("24350"), '../../logs/output.log'));
Logs.get = async function () {
  if (stryMutAct_9fa48("24351")) {
    {}
  } else {
    stryCov_9fa48("24351");
    return await fs.promises.readFile(Logs.path, stryMutAct_9fa48("24352") ? "" : (stryCov_9fa48("24352"), 'utf-8'));
  }
};
Logs.clear = async function () {
  if (stryMutAct_9fa48("24353")) {
    {}
  } else {
    stryCov_9fa48("24353");
    await fs.promises.truncate(Logs.path, 0);
  }
};