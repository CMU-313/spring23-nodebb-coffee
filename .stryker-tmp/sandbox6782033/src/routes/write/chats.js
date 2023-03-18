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
  if (stryMutAct_9fa48("33527")) {
    {}
  } else {
    stryCov_9fa48("33527");
    const middlewares = stryMutAct_9fa48("33528") ? [] : (stryCov_9fa48("33528"), [middleware.ensureLoggedIn, middleware.canChat]);
    setupApiRoute(router, stryMutAct_9fa48("33529") ? "" : (stryCov_9fa48("33529"), 'get'), stryMutAct_9fa48("33530") ? "" : (stryCov_9fa48("33530"), '/'), stryMutAct_9fa48("33531") ? [] : (stryCov_9fa48("33531"), [...middlewares]), controllers.write.chats.list);
    setupApiRoute(router, stryMutAct_9fa48("33532") ? "" : (stryCov_9fa48("33532"), 'post'), stryMutAct_9fa48("33533") ? "" : (stryCov_9fa48("33533"), '/'), stryMutAct_9fa48("33534") ? [] : (stryCov_9fa48("33534"), [...middlewares, middleware.checkRequired.bind(null, stryMutAct_9fa48("33535") ? [] : (stryCov_9fa48("33535"), [stryMutAct_9fa48("33536") ? "" : (stryCov_9fa48("33536"), 'uids')]))]), controllers.write.chats.create);
    setupApiRoute(router, stryMutAct_9fa48("33537") ? "" : (stryCov_9fa48("33537"), 'head'), stryMutAct_9fa48("33538") ? "" : (stryCov_9fa48("33538"), '/:roomId'), stryMutAct_9fa48("33539") ? [] : (stryCov_9fa48("33539"), [...middlewares, middleware.assert.room]), controllers.write.chats.exists);
    setupApiRoute(router, stryMutAct_9fa48("33540") ? "" : (stryCov_9fa48("33540"), 'get'), stryMutAct_9fa48("33541") ? "" : (stryCov_9fa48("33541"), '/:roomId'), stryMutAct_9fa48("33542") ? [] : (stryCov_9fa48("33542"), [...middlewares, middleware.assert.room]), controllers.write.chats.get);
    setupApiRoute(router, stryMutAct_9fa48("33543") ? "" : (stryCov_9fa48("33543"), 'post'), stryMutAct_9fa48("33544") ? "" : (stryCov_9fa48("33544"), '/:roomId'), stryMutAct_9fa48("33545") ? [] : (stryCov_9fa48("33545"), [...middlewares, middleware.assert.room, middleware.checkRequired.bind(null, stryMutAct_9fa48("33546") ? [] : (stryCov_9fa48("33546"), [stryMutAct_9fa48("33547") ? "" : (stryCov_9fa48("33547"), 'message')]))]), controllers.write.chats.post);
    setupApiRoute(router, stryMutAct_9fa48("33548") ? "" : (stryCov_9fa48("33548"), 'put'), stryMutAct_9fa48("33549") ? "" : (stryCov_9fa48("33549"), '/:roomId'), stryMutAct_9fa48("33550") ? [] : (stryCov_9fa48("33550"), [...middlewares, middleware.assert.room, middleware.checkRequired.bind(null, stryMutAct_9fa48("33551") ? [] : (stryCov_9fa48("33551"), [stryMutAct_9fa48("33552") ? "" : (stryCov_9fa48("33552"), 'name')]))]), controllers.write.chats.rename);
    // no route for room deletion, noted here just in case...

    setupApiRoute(router, stryMutAct_9fa48("33553") ? "" : (stryCov_9fa48("33553"), 'get'), stryMutAct_9fa48("33554") ? "" : (stryCov_9fa48("33554"), '/:roomId/users'), stryMutAct_9fa48("33555") ? [] : (stryCov_9fa48("33555"), [...middlewares, middleware.assert.room]), controllers.write.chats.users);
    setupApiRoute(router, stryMutAct_9fa48("33556") ? "" : (stryCov_9fa48("33556"), 'post'), stryMutAct_9fa48("33557") ? "" : (stryCov_9fa48("33557"), '/:roomId/users'), stryMutAct_9fa48("33558") ? [] : (stryCov_9fa48("33558"), [...middlewares, middleware.assert.room, middleware.checkRequired.bind(null, stryMutAct_9fa48("33559") ? [] : (stryCov_9fa48("33559"), [stryMutAct_9fa48("33560") ? "" : (stryCov_9fa48("33560"), 'uids')]))]), controllers.write.chats.invite);
    setupApiRoute(router, stryMutAct_9fa48("33561") ? "" : (stryCov_9fa48("33561"), 'delete'), stryMutAct_9fa48("33562") ? "" : (stryCov_9fa48("33562"), '/:roomId/users'), stryMutAct_9fa48("33563") ? [] : (stryCov_9fa48("33563"), [...middlewares, middleware.assert.room, middleware.checkRequired.bind(null, stryMutAct_9fa48("33564") ? [] : (stryCov_9fa48("33564"), [stryMutAct_9fa48("33565") ? "" : (stryCov_9fa48("33565"), 'uids')]))]), controllers.write.chats.kick);
    setupApiRoute(router, stryMutAct_9fa48("33566") ? "" : (stryCov_9fa48("33566"), 'delete'), stryMutAct_9fa48("33567") ? "" : (stryCov_9fa48("33567"), '/:roomId/users/:uid'), stryMutAct_9fa48("33568") ? [] : (stryCov_9fa48("33568"), [...middlewares, middleware.assert.room, middleware.assert.user]), controllers.write.chats.kickUser);
    setupApiRoute(router, stryMutAct_9fa48("33569") ? "" : (stryCov_9fa48("33569"), 'get'), stryMutAct_9fa48("33570") ? "" : (stryCov_9fa48("33570"), '/:roomId/messages'), stryMutAct_9fa48("33571") ? [] : (stryCov_9fa48("33571"), [...middlewares, middleware.assert.room]), controllers.write.chats.messages.list);
    setupApiRoute(router, stryMutAct_9fa48("33572") ? "" : (stryCov_9fa48("33572"), 'get'), stryMutAct_9fa48("33573") ? "" : (stryCov_9fa48("33573"), '/:roomId/messages/:mid'), stryMutAct_9fa48("33574") ? [] : (stryCov_9fa48("33574"), [...middlewares, middleware.assert.room, middleware.assert.message]), controllers.write.chats.messages.get);
    setupApiRoute(router, stryMutAct_9fa48("33575") ? "" : (stryCov_9fa48("33575"), 'put'), stryMutAct_9fa48("33576") ? "" : (stryCov_9fa48("33576"), '/:roomId/messages/:mid'), stryMutAct_9fa48("33577") ? [] : (stryCov_9fa48("33577"), [...middlewares, middleware.assert.room, middleware.assert.message]), controllers.write.chats.messages.edit);
    setupApiRoute(router, stryMutAct_9fa48("33578") ? "" : (stryCov_9fa48("33578"), 'post'), stryMutAct_9fa48("33579") ? "" : (stryCov_9fa48("33579"), '/:roomId/messages/:mid'), stryMutAct_9fa48("33580") ? [] : (stryCov_9fa48("33580"), [...middlewares, middleware.assert.room, middleware.assert.message]), controllers.write.chats.messages.restore);
    setupApiRoute(router, stryMutAct_9fa48("33581") ? "" : (stryCov_9fa48("33581"), 'delete'), stryMutAct_9fa48("33582") ? "" : (stryCov_9fa48("33582"), '/:roomId/messages/:mid'), stryMutAct_9fa48("33583") ? [] : (stryCov_9fa48("33583"), [...middlewares, middleware.assert.room, middleware.assert.message]), controllers.write.chats.messages.delete);
    return router;
  }
};