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
const router = require('express').Router();
const middleware = require('../../middleware');
const controllers = require('../../controllers');
const routeHelpers = require('../helpers');
const {
  setupApiRoute
} = routeHelpers;
module.exports = function () {
  if (stryMutAct_9fa48("33479")) {
    {}
  } else {
    stryCov_9fa48("33479");
    const middlewares = stryMutAct_9fa48("33480") ? [] : (stryCov_9fa48("33480"), [middleware.ensureLoggedIn, middleware.admin.checkPrivileges]);
    setupApiRoute(router, stryMutAct_9fa48("33481") ? "" : (stryCov_9fa48("33481"), 'put'), stryMutAct_9fa48("33482") ? "" : (stryCov_9fa48("33482"), '/settings/:setting'), stryMutAct_9fa48("33483") ? [] : (stryCov_9fa48("33483"), [...middlewares, middleware.checkRequired.bind(null, stryMutAct_9fa48("33484") ? [] : (stryCov_9fa48("33484"), [stryMutAct_9fa48("33485") ? "" : (stryCov_9fa48("33485"), 'value')]))]), controllers.write.admin.updateSetting);
    setupApiRoute(router, stryMutAct_9fa48("33486") ? "" : (stryCov_9fa48("33486"), 'get'), stryMutAct_9fa48("33487") ? "" : (stryCov_9fa48("33487"), '/analytics'), stryMutAct_9fa48("33488") ? [] : (stryCov_9fa48("33488"), [...middlewares]), controllers.write.admin.getAnalyticsKeys);
    setupApiRoute(router, stryMutAct_9fa48("33489") ? "" : (stryCov_9fa48("33489"), 'get'), stryMutAct_9fa48("33490") ? "" : (stryCov_9fa48("33490"), '/analytics/:set'), stryMutAct_9fa48("33491") ? [] : (stryCov_9fa48("33491"), [...middlewares]), controllers.write.admin.getAnalyticsData);
    return router;
  }
};