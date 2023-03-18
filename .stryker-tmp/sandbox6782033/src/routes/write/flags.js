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
  if (stryMutAct_9fa48("33597")) {
    {}
  } else {
    stryCov_9fa48("33597");
    const middlewares = stryMutAct_9fa48("33598") ? [] : (stryCov_9fa48("33598"), [middleware.ensureLoggedIn]);
    setupApiRoute(router, stryMutAct_9fa48("33599") ? "" : (stryCov_9fa48("33599"), 'post'), stryMutAct_9fa48("33600") ? "" : (stryCov_9fa48("33600"), '/'), stryMutAct_9fa48("33601") ? [] : (stryCov_9fa48("33601"), [...middlewares]), controllers.write.flags.create);
    setupApiRoute(router, stryMutAct_9fa48("33602") ? "" : (stryCov_9fa48("33602"), 'get'), stryMutAct_9fa48("33603") ? "" : (stryCov_9fa48("33603"), '/:flagId'), stryMutAct_9fa48("33604") ? [] : (stryCov_9fa48("33604"), [...middlewares, middleware.assert.flag]), controllers.write.flags.get);
    setupApiRoute(router, stryMutAct_9fa48("33605") ? "" : (stryCov_9fa48("33605"), 'put'), stryMutAct_9fa48("33606") ? "" : (stryCov_9fa48("33606"), '/:flagId'), stryMutAct_9fa48("33607") ? [] : (stryCov_9fa48("33607"), [...middlewares, middleware.assert.flag]), controllers.write.flags.update);
    setupApiRoute(router, stryMutAct_9fa48("33608") ? "" : (stryCov_9fa48("33608"), 'delete'), stryMutAct_9fa48("33609") ? "" : (stryCov_9fa48("33609"), '/:flagId'), stryMutAct_9fa48("33610") ? [] : (stryCov_9fa48("33610"), [...middlewares, middleware.assert.flag]), controllers.write.flags.delete);
    setupApiRoute(router, stryMutAct_9fa48("33611") ? "" : (stryCov_9fa48("33611"), 'post'), stryMutAct_9fa48("33612") ? "" : (stryCov_9fa48("33612"), '/:flagId/notes'), stryMutAct_9fa48("33613") ? [] : (stryCov_9fa48("33613"), [...middlewares, middleware.assert.flag]), controllers.write.flags.appendNote);
    setupApiRoute(router, stryMutAct_9fa48("33614") ? "" : (stryCov_9fa48("33614"), 'delete'), stryMutAct_9fa48("33615") ? "" : (stryCov_9fa48("33615"), '/:flagId/notes/:datetime'), stryMutAct_9fa48("33616") ? [] : (stryCov_9fa48("33616"), [...middlewares, middleware.assert.flag]), controllers.write.flags.deleteNote);
    return router;
  }
};