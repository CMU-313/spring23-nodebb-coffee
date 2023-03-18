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
  if (stryMutAct_9fa48("33492")) {
    {}
  } else {
    stryCov_9fa48("33492");
    const middlewares = stryMutAct_9fa48("33493") ? [] : (stryCov_9fa48("33493"), [middleware.ensureLoggedIn]);
    setupApiRoute(router, stryMutAct_9fa48("33494") ? "" : (stryCov_9fa48("33494"), 'post'), stryMutAct_9fa48("33495") ? "" : (stryCov_9fa48("33495"), '/'), stryMutAct_9fa48("33496") ? [] : (stryCov_9fa48("33496"), [...middlewares, middleware.checkRequired.bind(null, stryMutAct_9fa48("33497") ? [] : (stryCov_9fa48("33497"), [stryMutAct_9fa48("33498") ? "" : (stryCov_9fa48("33498"), 'name')]))]), controllers.write.categories.create);
    setupApiRoute(router, stryMutAct_9fa48("33499") ? "" : (stryCov_9fa48("33499"), 'get'), stryMutAct_9fa48("33500") ? "" : (stryCov_9fa48("33500"), '/:cid'), stryMutAct_9fa48("33501") ? ["Stryker was here"] : (stryCov_9fa48("33501"), []), controllers.write.categories.get);
    setupApiRoute(router, stryMutAct_9fa48("33502") ? "" : (stryCov_9fa48("33502"), 'put'), stryMutAct_9fa48("33503") ? "" : (stryCov_9fa48("33503"), '/:cid'), stryMutAct_9fa48("33504") ? [] : (stryCov_9fa48("33504"), [...middlewares]), controllers.write.categories.update);
    setupApiRoute(router, stryMutAct_9fa48("33505") ? "" : (stryCov_9fa48("33505"), 'delete'), stryMutAct_9fa48("33506") ? "" : (stryCov_9fa48("33506"), '/:cid'), stryMutAct_9fa48("33507") ? [] : (stryCov_9fa48("33507"), [...middlewares]), controllers.write.categories.delete);
    setupApiRoute(router, stryMutAct_9fa48("33508") ? "" : (stryCov_9fa48("33508"), 'get'), stryMutAct_9fa48("33509") ? "" : (stryCov_9fa48("33509"), '/:cid/privileges'), stryMutAct_9fa48("33510") ? [] : (stryCov_9fa48("33510"), [...middlewares]), controllers.write.categories.getPrivileges);
    setupApiRoute(router, stryMutAct_9fa48("33511") ? "" : (stryCov_9fa48("33511"), 'put'), stryMutAct_9fa48("33512") ? "" : (stryCov_9fa48("33512"), '/:cid/privileges/:privilege'), stryMutAct_9fa48("33513") ? [] : (stryCov_9fa48("33513"), [...middlewares, middleware.checkRequired.bind(null, stryMutAct_9fa48("33514") ? [] : (stryCov_9fa48("33514"), [stryMutAct_9fa48("33515") ? "" : (stryCov_9fa48("33515"), 'member')]))]), controllers.write.categories.setPrivilege);
    setupApiRoute(router, stryMutAct_9fa48("33516") ? "" : (stryCov_9fa48("33516"), 'delete'), stryMutAct_9fa48("33517") ? "" : (stryCov_9fa48("33517"), '/:cid/privileges/:privilege'), stryMutAct_9fa48("33518") ? [] : (stryCov_9fa48("33518"), [...middlewares, middleware.checkRequired.bind(null, stryMutAct_9fa48("33519") ? [] : (stryCov_9fa48("33519"), [stryMutAct_9fa48("33520") ? "" : (stryCov_9fa48("33520"), 'member')]))]), controllers.write.categories.setPrivilege);
    setupApiRoute(router, stryMutAct_9fa48("33521") ? "" : (stryCov_9fa48("33521"), 'put'), stryMutAct_9fa48("33522") ? "" : (stryCov_9fa48("33522"), '/:cid/moderator/:uid'), stryMutAct_9fa48("33523") ? [] : (stryCov_9fa48("33523"), [...middlewares]), controllers.write.categories.setModerator);
    setupApiRoute(router, stryMutAct_9fa48("33524") ? "" : (stryCov_9fa48("33524"), 'delete'), stryMutAct_9fa48("33525") ? "" : (stryCov_9fa48("33525"), '/:cid/moderator/:uid'), stryMutAct_9fa48("33526") ? [] : (stryCov_9fa48("33526"), [...middlewares]), controllers.write.categories.setModerator);
    return router;
  }
};