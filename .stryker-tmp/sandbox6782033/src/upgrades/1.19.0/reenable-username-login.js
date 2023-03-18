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
const meta = require('../../meta');
module.exports = stryMutAct_9fa48("43903") ? {} : (stryCov_9fa48("43903"), {
  name: stryMutAct_9fa48("43904") ? "" : (stryCov_9fa48("43904"), 'Re-enable username login'),
  timestamp: Date.UTC(2021, 10, 23),
  method: async () => {
    if (stryMutAct_9fa48("43905")) {
      {}
    } else {
      stryCov_9fa48("43905");
      const setting = await meta.config.allowLoginWith;
      if (stryMutAct_9fa48("43908") ? setting !== 'email' : stryMutAct_9fa48("43907") ? false : stryMutAct_9fa48("43906") ? true : (stryCov_9fa48("43906", "43907", "43908"), setting === (stryMutAct_9fa48("43909") ? "" : (stryCov_9fa48("43909"), 'email')))) {
        if (stryMutAct_9fa48("43910")) {
          {}
        } else {
          stryCov_9fa48("43910");
          await meta.configs.set(stryMutAct_9fa48("43911") ? "" : (stryCov_9fa48("43911"), 'allowLoginWith'), stryMutAct_9fa48("43912") ? "" : (stryCov_9fa48("43912"), 'username-email'));
        }
      }
    }
  }
});