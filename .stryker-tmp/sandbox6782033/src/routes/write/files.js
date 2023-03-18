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
  if (stryMutAct_9fa48("33584")) {
    {}
  } else {
    stryCov_9fa48("33584");
    const middlewares = stryMutAct_9fa48("33585") ? [] : (stryCov_9fa48("33585"), [middleware.ensureLoggedIn, middleware.admin.checkPrivileges]);

    // setupApiRoute(router, 'put', '/', [
    //  ...middlewares,
    //  middleware.checkRequired.bind(null, ['path']),
    //  middleware.assert.folder
    // ], controllers.write.files.upload);
    setupApiRoute(router, stryMutAct_9fa48("33586") ? "" : (stryCov_9fa48("33586"), 'delete'), stryMutAct_9fa48("33587") ? "" : (stryCov_9fa48("33587"), '/'), stryMutAct_9fa48("33588") ? [] : (stryCov_9fa48("33588"), [...middlewares, middleware.checkRequired.bind(null, stryMutAct_9fa48("33589") ? [] : (stryCov_9fa48("33589"), [stryMutAct_9fa48("33590") ? "" : (stryCov_9fa48("33590"), 'path')])), middleware.assert.path]), controllers.write.files.delete);
    setupApiRoute(router, stryMutAct_9fa48("33591") ? "" : (stryCov_9fa48("33591"), 'put'), stryMutAct_9fa48("33592") ? "" : (stryCov_9fa48("33592"), '/folder'), stryMutAct_9fa48("33593") ? [] : (stryCov_9fa48("33593"), [...middlewares, middleware.checkRequired.bind(null, stryMutAct_9fa48("33594") ? [] : (stryCov_9fa48("33594"), [stryMutAct_9fa48("33595") ? "" : (stryCov_9fa48("33595"), 'path'), stryMutAct_9fa48("33596") ? "" : (stryCov_9fa48("33596"), 'folderName')])), middleware.assert.path,
    // Should come after assert.path
    middleware.assert.folderName]), controllers.write.files.createFolder);
    return router;
  }
};