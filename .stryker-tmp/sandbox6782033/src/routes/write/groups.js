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
  if (stryMutAct_9fa48("33617")) {
    {}
  } else {
    stryCov_9fa48("33617");
    const middlewares = stryMutAct_9fa48("33618") ? [] : (stryCov_9fa48("33618"), [middleware.ensureLoggedIn]);
    setupApiRoute(router, stryMutAct_9fa48("33619") ? "" : (stryCov_9fa48("33619"), 'post'), stryMutAct_9fa48("33620") ? "" : (stryCov_9fa48("33620"), '/'), stryMutAct_9fa48("33621") ? [] : (stryCov_9fa48("33621"), [...middlewares, middleware.checkRequired.bind(null, stryMutAct_9fa48("33622") ? [] : (stryCov_9fa48("33622"), [stryMutAct_9fa48("33623") ? "" : (stryCov_9fa48("33623"), 'name')]))]), controllers.write.groups.create);
    setupApiRoute(router, stryMutAct_9fa48("33624") ? "" : (stryCov_9fa48("33624"), 'head'), stryMutAct_9fa48("33625") ? "" : (stryCov_9fa48("33625"), '/:slug'), stryMutAct_9fa48("33626") ? [] : (stryCov_9fa48("33626"), [middleware.assert.group]), controllers.write.groups.exists);
    setupApiRoute(router, stryMutAct_9fa48("33627") ? "" : (stryCov_9fa48("33627"), 'put'), stryMutAct_9fa48("33628") ? "" : (stryCov_9fa48("33628"), '/:slug'), stryMutAct_9fa48("33629") ? [] : (stryCov_9fa48("33629"), [...middlewares, middleware.assert.group]), controllers.write.groups.update);
    setupApiRoute(router, stryMutAct_9fa48("33630") ? "" : (stryCov_9fa48("33630"), 'delete'), stryMutAct_9fa48("33631") ? "" : (stryCov_9fa48("33631"), '/:slug'), stryMutAct_9fa48("33632") ? [] : (stryCov_9fa48("33632"), [...middlewares, middleware.assert.group]), controllers.write.groups.delete);
    setupApiRoute(router, stryMutAct_9fa48("33633") ? "" : (stryCov_9fa48("33633"), 'put'), stryMutAct_9fa48("33634") ? "" : (stryCov_9fa48("33634"), '/:slug/membership/:uid'), stryMutAct_9fa48("33635") ? [] : (stryCov_9fa48("33635"), [...middlewares, middleware.assert.group]), controllers.write.groups.join);
    setupApiRoute(router, stryMutAct_9fa48("33636") ? "" : (stryCov_9fa48("33636"), 'delete'), stryMutAct_9fa48("33637") ? "" : (stryCov_9fa48("33637"), '/:slug/membership/:uid'), stryMutAct_9fa48("33638") ? [] : (stryCov_9fa48("33638"), [...middlewares, middleware.assert.group]), controllers.write.groups.leave);
    setupApiRoute(router, stryMutAct_9fa48("33639") ? "" : (stryCov_9fa48("33639"), 'put'), stryMutAct_9fa48("33640") ? "" : (stryCov_9fa48("33640"), '/:slug/ownership/:uid'), stryMutAct_9fa48("33641") ? [] : (stryCov_9fa48("33641"), [...middlewares, middleware.assert.group]), controllers.write.groups.grant);
    setupApiRoute(router, stryMutAct_9fa48("33642") ? "" : (stryCov_9fa48("33642"), 'delete'), stryMutAct_9fa48("33643") ? "" : (stryCov_9fa48("33643"), '/:slug/ownership/:uid'), stryMutAct_9fa48("33644") ? [] : (stryCov_9fa48("33644"), [...middlewares, middleware.assert.group]), controllers.write.groups.rescind);
    return router;
  }
};