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
  if (stryMutAct_9fa48("33695")) {
    {}
  } else {
    stryCov_9fa48("33695");
    const middlewares = stryMutAct_9fa48("33696") ? [] : (stryCov_9fa48("33696"), [middleware.ensureLoggedIn]);
    setupApiRoute(router, stryMutAct_9fa48("33697") ? "" : (stryCov_9fa48("33697"), 'get'), stryMutAct_9fa48("33698") ? "" : (stryCov_9fa48("33698"), '/:pid'), stryMutAct_9fa48("33699") ? ["Stryker was here"] : (stryCov_9fa48("33699"), []), controllers.write.posts.get);
    // There is no POST route because you POST to a topic to create a new post. Intuitive, no?
    setupApiRoute(router, stryMutAct_9fa48("33700") ? "" : (stryCov_9fa48("33700"), 'put'), stryMutAct_9fa48("33701") ? "" : (stryCov_9fa48("33701"), '/:pid'), stryMutAct_9fa48("33702") ? [] : (stryCov_9fa48("33702"), [...middlewares, middleware.checkRequired.bind(null, stryMutAct_9fa48("33703") ? [] : (stryCov_9fa48("33703"), [stryMutAct_9fa48("33704") ? "" : (stryCov_9fa48("33704"), 'content')]))]), controllers.write.posts.edit);
    setupApiRoute(router, stryMutAct_9fa48("33705") ? "" : (stryCov_9fa48("33705"), 'delete'), stryMutAct_9fa48("33706") ? "" : (stryCov_9fa48("33706"), '/:pid'), stryMutAct_9fa48("33707") ? [] : (stryCov_9fa48("33707"), [...middlewares, middleware.assert.post]), controllers.write.posts.purge);
    setupApiRoute(router, stryMutAct_9fa48("33708") ? "" : (stryCov_9fa48("33708"), 'put'), stryMutAct_9fa48("33709") ? "" : (stryCov_9fa48("33709"), '/:pid/state'), stryMutAct_9fa48("33710") ? [] : (stryCov_9fa48("33710"), [...middlewares, middleware.assert.post]), controllers.write.posts.restore);
    setupApiRoute(router, stryMutAct_9fa48("33711") ? "" : (stryCov_9fa48("33711"), 'delete'), stryMutAct_9fa48("33712") ? "" : (stryCov_9fa48("33712"), '/:pid/state'), stryMutAct_9fa48("33713") ? [] : (stryCov_9fa48("33713"), [...middlewares, middleware.assert.post]), controllers.write.posts.delete);
    setupApiRoute(router, stryMutAct_9fa48("33714") ? "" : (stryCov_9fa48("33714"), 'put'), stryMutAct_9fa48("33715") ? "" : (stryCov_9fa48("33715"), '/:pid/move'), stryMutAct_9fa48("33716") ? [] : (stryCov_9fa48("33716"), [...middlewares, middleware.assert.post, middleware.checkRequired.bind(null, stryMutAct_9fa48("33717") ? [] : (stryCov_9fa48("33717"), [stryMutAct_9fa48("33718") ? "" : (stryCov_9fa48("33718"), 'tid')]))]), controllers.write.posts.move);
    setupApiRoute(router, stryMutAct_9fa48("33719") ? "" : (stryCov_9fa48("33719"), 'put'), stryMutAct_9fa48("33720") ? "" : (stryCov_9fa48("33720"), '/:pid/vote'), stryMutAct_9fa48("33721") ? [] : (stryCov_9fa48("33721"), [...middlewares, middleware.checkRequired.bind(null, stryMutAct_9fa48("33722") ? [] : (stryCov_9fa48("33722"), [stryMutAct_9fa48("33723") ? "" : (stryCov_9fa48("33723"), 'delta')])), middleware.assert.post]), controllers.write.posts.vote);
    setupApiRoute(router, stryMutAct_9fa48("33724") ? "" : (stryCov_9fa48("33724"), 'delete'), stryMutAct_9fa48("33725") ? "" : (stryCov_9fa48("33725"), '/:pid/vote'), stryMutAct_9fa48("33726") ? [] : (stryCov_9fa48("33726"), [...middlewares, middleware.assert.post]), controllers.write.posts.unvote);
    setupApiRoute(router, stryMutAct_9fa48("33727") ? "" : (stryCov_9fa48("33727"), 'put'), stryMutAct_9fa48("33728") ? "" : (stryCov_9fa48("33728"), '/:pid/bookmark'), stryMutAct_9fa48("33729") ? [] : (stryCov_9fa48("33729"), [...middlewares, middleware.assert.post]), controllers.write.posts.bookmark);
    setupApiRoute(router, stryMutAct_9fa48("33730") ? "" : (stryCov_9fa48("33730"), 'delete'), stryMutAct_9fa48("33731") ? "" : (stryCov_9fa48("33731"), '/:pid/bookmark'), stryMutAct_9fa48("33732") ? [] : (stryCov_9fa48("33732"), [...middlewares, middleware.assert.post]), controllers.write.posts.unbookmark);
    setupApiRoute(router, stryMutAct_9fa48("33733") ? "" : (stryCov_9fa48("33733"), 'get'), stryMutAct_9fa48("33734") ? "" : (stryCov_9fa48("33734"), '/:pid/diffs'), stryMutAct_9fa48("33735") ? [] : (stryCov_9fa48("33735"), [middleware.assert.post]), controllers.write.posts.getDiffs);
    setupApiRoute(router, stryMutAct_9fa48("33736") ? "" : (stryCov_9fa48("33736"), 'get'), stryMutAct_9fa48("33737") ? "" : (stryCov_9fa48("33737"), '/:pid/diffs/:since'), stryMutAct_9fa48("33738") ? [] : (stryCov_9fa48("33738"), [middleware.assert.post]), controllers.write.posts.loadDiff);
    setupApiRoute(router, stryMutAct_9fa48("33739") ? "" : (stryCov_9fa48("33739"), 'put'), stryMutAct_9fa48("33740") ? "" : (stryCov_9fa48("33740"), '/:pid/diffs/:since'), stryMutAct_9fa48("33741") ? [] : (stryCov_9fa48("33741"), [...middlewares, middleware.assert.post]), controllers.write.posts.restoreDiff);
    setupApiRoute(router, stryMutAct_9fa48("33742") ? "" : (stryCov_9fa48("33742"), 'delete'), stryMutAct_9fa48("33743") ? "" : (stryCov_9fa48("33743"), '/:pid/diffs/:timestamp'), stryMutAct_9fa48("33744") ? [] : (stryCov_9fa48("33744"), [...middlewares, middleware.assert.post]), controllers.write.posts.deleteDiff);
    return router;
  }
};