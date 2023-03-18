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

// eslint-disable-next-line no-unused-vars
function guestRoutes() {
  // like registration, login...
}
function authenticatedRoutes() {
  if (stryMutAct_9fa48("33831")) {
    {}
  } else {
    stryCov_9fa48("33831");
    const middlewares = stryMutAct_9fa48("33832") ? [] : (stryCov_9fa48("33832"), [middleware.ensureLoggedIn]);
    setupApiRoute(router, stryMutAct_9fa48("33833") ? "" : (stryCov_9fa48("33833"), 'post'), stryMutAct_9fa48("33834") ? "" : (stryCov_9fa48("33834"), '/'), stryMutAct_9fa48("33835") ? [] : (stryCov_9fa48("33835"), [...middlewares, middleware.checkRequired.bind(null, stryMutAct_9fa48("33836") ? [] : (stryCov_9fa48("33836"), [stryMutAct_9fa48("33837") ? "" : (stryCov_9fa48("33837"), 'username')]))]), controllers.write.users.create);
    setupApiRoute(router, stryMutAct_9fa48("33838") ? "" : (stryCov_9fa48("33838"), 'delete'), stryMutAct_9fa48("33839") ? "" : (stryCov_9fa48("33839"), '/'), stryMutAct_9fa48("33840") ? [] : (stryCov_9fa48("33840"), [...middlewares, middleware.checkRequired.bind(null, stryMutAct_9fa48("33841") ? [] : (stryCov_9fa48("33841"), [stryMutAct_9fa48("33842") ? "" : (stryCov_9fa48("33842"), 'uids')]))]), controllers.write.users.deleteMany);
    setupApiRoute(router, stryMutAct_9fa48("33843") ? "" : (stryCov_9fa48("33843"), 'head'), stryMutAct_9fa48("33844") ? "" : (stryCov_9fa48("33844"), '/:uid'), stryMutAct_9fa48("33845") ? [] : (stryCov_9fa48("33845"), [middleware.assert.user]), controllers.write.users.exists);
    setupApiRoute(router, stryMutAct_9fa48("33846") ? "" : (stryCov_9fa48("33846"), 'get'), stryMutAct_9fa48("33847") ? "" : (stryCov_9fa48("33847"), '/:uid'), stryMutAct_9fa48("33848") ? [] : (stryCov_9fa48("33848"), [...middlewares, middleware.assert.user]), controllers.write.users.get);
    setupApiRoute(router, stryMutAct_9fa48("33849") ? "" : (stryCov_9fa48("33849"), 'put'), stryMutAct_9fa48("33850") ? "" : (stryCov_9fa48("33850"), '/:uid'), stryMutAct_9fa48("33851") ? [] : (stryCov_9fa48("33851"), [...middlewares, middleware.assert.user]), controllers.write.users.update);
    setupApiRoute(router, stryMutAct_9fa48("33852") ? "" : (stryCov_9fa48("33852"), 'delete'), stryMutAct_9fa48("33853") ? "" : (stryCov_9fa48("33853"), '/:uid'), stryMutAct_9fa48("33854") ? [] : (stryCov_9fa48("33854"), [...middlewares, middleware.assert.user]), controllers.write.users.delete);
    setupApiRoute(router, stryMutAct_9fa48("33855") ? "" : (stryCov_9fa48("33855"), 'put'), stryMutAct_9fa48("33856") ? "" : (stryCov_9fa48("33856"), '/:uid/picture'), stryMutAct_9fa48("33857") ? [] : (stryCov_9fa48("33857"), [...middlewares, middleware.assert.user]), controllers.write.users.changePicture);
    setupApiRoute(router, stryMutAct_9fa48("33858") ? "" : (stryCov_9fa48("33858"), 'delete'), stryMutAct_9fa48("33859") ? "" : (stryCov_9fa48("33859"), '/:uid/content'), stryMutAct_9fa48("33860") ? [] : (stryCov_9fa48("33860"), [...middlewares, middleware.assert.user]), controllers.write.users.deleteContent);
    setupApiRoute(router, stryMutAct_9fa48("33861") ? "" : (stryCov_9fa48("33861"), 'delete'), stryMutAct_9fa48("33862") ? "" : (stryCov_9fa48("33862"), '/:uid/account'), stryMutAct_9fa48("33863") ? [] : (stryCov_9fa48("33863"), [...middlewares, middleware.assert.user]), controllers.write.users.deleteAccount);
    setupApiRoute(router, stryMutAct_9fa48("33864") ? "" : (stryCov_9fa48("33864"), 'put'), stryMutAct_9fa48("33865") ? "" : (stryCov_9fa48("33865"), '/:uid/settings'), stryMutAct_9fa48("33866") ? [] : (stryCov_9fa48("33866"), [...middlewares, middleware.checkRequired.bind(null, stryMutAct_9fa48("33867") ? [] : (stryCov_9fa48("33867"), [stryMutAct_9fa48("33868") ? "" : (stryCov_9fa48("33868"), 'settings')]))]), controllers.write.users.updateSettings);
    setupApiRoute(router, stryMutAct_9fa48("33869") ? "" : (stryCov_9fa48("33869"), 'put'), stryMutAct_9fa48("33870") ? "" : (stryCov_9fa48("33870"), '/:uid/password'), stryMutAct_9fa48("33871") ? [] : (stryCov_9fa48("33871"), [...middlewares, middleware.checkRequired.bind(null, stryMutAct_9fa48("33872") ? [] : (stryCov_9fa48("33872"), [stryMutAct_9fa48("33873") ? "" : (stryCov_9fa48("33873"), 'newPassword')])), middleware.assert.user]), controllers.write.users.changePassword);
    setupApiRoute(router, stryMutAct_9fa48("33874") ? "" : (stryCov_9fa48("33874"), 'put'), stryMutAct_9fa48("33875") ? "" : (stryCov_9fa48("33875"), '/:uid/follow'), stryMutAct_9fa48("33876") ? [] : (stryCov_9fa48("33876"), [...middlewares, middleware.assert.user]), controllers.write.users.follow);
    setupApiRoute(router, stryMutAct_9fa48("33877") ? "" : (stryCov_9fa48("33877"), 'delete'), stryMutAct_9fa48("33878") ? "" : (stryCov_9fa48("33878"), '/:uid/follow'), stryMutAct_9fa48("33879") ? [] : (stryCov_9fa48("33879"), [...middlewares, middleware.assert.user]), controllers.write.users.unfollow);
    setupApiRoute(router, stryMutAct_9fa48("33880") ? "" : (stryCov_9fa48("33880"), 'put'), stryMutAct_9fa48("33881") ? "" : (stryCov_9fa48("33881"), '/:uid/ban'), stryMutAct_9fa48("33882") ? [] : (stryCov_9fa48("33882"), [...middlewares, middleware.assert.user]), controllers.write.users.ban);
    setupApiRoute(router, stryMutAct_9fa48("33883") ? "" : (stryCov_9fa48("33883"), 'delete'), stryMutAct_9fa48("33884") ? "" : (stryCov_9fa48("33884"), '/:uid/ban'), stryMutAct_9fa48("33885") ? [] : (stryCov_9fa48("33885"), [...middlewares, middleware.assert.user]), controllers.write.users.unban);
    setupApiRoute(router, stryMutAct_9fa48("33886") ? "" : (stryCov_9fa48("33886"), 'put'), stryMutAct_9fa48("33887") ? "" : (stryCov_9fa48("33887"), '/:uid/mute'), stryMutAct_9fa48("33888") ? [] : (stryCov_9fa48("33888"), [...middlewares, middleware.assert.user]), controllers.write.users.mute);
    setupApiRoute(router, stryMutAct_9fa48("33889") ? "" : (stryCov_9fa48("33889"), 'delete'), stryMutAct_9fa48("33890") ? "" : (stryCov_9fa48("33890"), '/:uid/mute'), stryMutAct_9fa48("33891") ? [] : (stryCov_9fa48("33891"), [...middlewares, middleware.assert.user]), controllers.write.users.unmute);
    setupApiRoute(router, stryMutAct_9fa48("33892") ? "" : (stryCov_9fa48("33892"), 'post'), stryMutAct_9fa48("33893") ? "" : (stryCov_9fa48("33893"), '/:uid/tokens'), stryMutAct_9fa48("33894") ? [] : (stryCov_9fa48("33894"), [...middlewares, middleware.assert.user]), controllers.write.users.generateToken);
    setupApiRoute(router, stryMutAct_9fa48("33895") ? "" : (stryCov_9fa48("33895"), 'delete'), stryMutAct_9fa48("33896") ? "" : (stryCov_9fa48("33896"), '/:uid/tokens/:token'), stryMutAct_9fa48("33897") ? [] : (stryCov_9fa48("33897"), [...middlewares, middleware.assert.user]), controllers.write.users.deleteToken);
    setupApiRoute(router, stryMutAct_9fa48("33898") ? "" : (stryCov_9fa48("33898"), 'delete'), stryMutAct_9fa48("33899") ? "" : (stryCov_9fa48("33899"), '/:uid/sessions/:uuid'), stryMutAct_9fa48("33900") ? [] : (stryCov_9fa48("33900"), [...middlewares, middleware.assert.user]), controllers.write.users.revokeSession);
    setupApiRoute(router, stryMutAct_9fa48("33901") ? "" : (stryCov_9fa48("33901"), 'post'), stryMutAct_9fa48("33902") ? "" : (stryCov_9fa48("33902"), '/:uid/invites'), middlewares, controllers.write.users.invite);
    setupApiRoute(router, stryMutAct_9fa48("33903") ? "" : (stryCov_9fa48("33903"), 'get'), stryMutAct_9fa48("33904") ? "" : (stryCov_9fa48("33904"), '/:uid/invites/groups'), stryMutAct_9fa48("33905") ? [] : (stryCov_9fa48("33905"), [...middlewares, middleware.assert.user]), controllers.write.users.getInviteGroups);
    setupApiRoute(router, stryMutAct_9fa48("33906") ? "" : (stryCov_9fa48("33906"), 'get'), stryMutAct_9fa48("33907") ? "" : (stryCov_9fa48("33907"), '/:uid/emails'), stryMutAct_9fa48("33908") ? [] : (stryCov_9fa48("33908"), [...middlewares, middleware.assert.user]), controllers.write.users.listEmails);
    setupApiRoute(router, stryMutAct_9fa48("33909") ? "" : (stryCov_9fa48("33909"), 'get'), stryMutAct_9fa48("33910") ? "" : (stryCov_9fa48("33910"), '/:uid/emails/:email'), stryMutAct_9fa48("33911") ? [] : (stryCov_9fa48("33911"), [...middlewares, middleware.assert.user]), controllers.write.users.getEmail);
    setupApiRoute(router, stryMutAct_9fa48("33912") ? "" : (stryCov_9fa48("33912"), 'post'), stryMutAct_9fa48("33913") ? "" : (stryCov_9fa48("33913"), '/:uid/emails/:email/confirm'), stryMutAct_9fa48("33914") ? [] : (stryCov_9fa48("33914"), [...middlewares, middleware.assert.user]), controllers.write.users.confirmEmail);
    setupApiRoute(router, stryMutAct_9fa48("33915") ? "" : (stryCov_9fa48("33915"), 'head'), stryMutAct_9fa48("33916") ? "" : (stryCov_9fa48("33916"), '/:uid/exports/:type'), stryMutAct_9fa48("33917") ? [] : (stryCov_9fa48("33917"), [...middlewares, middleware.assert.user, middleware.checkAccountPermissions]), controllers.write.users.checkExportByType);
    setupApiRoute(router, stryMutAct_9fa48("33918") ? "" : (stryCov_9fa48("33918"), 'get'), stryMutAct_9fa48("33919") ? "" : (stryCov_9fa48("33919"), '/:uid/exports/:type'), stryMutAct_9fa48("33920") ? [] : (stryCov_9fa48("33920"), [...middlewares, middleware.assert.user, middleware.checkAccountPermissions]), controllers.write.users.getExportByType);
    setupApiRoute(router, stryMutAct_9fa48("33921") ? "" : (stryCov_9fa48("33921"), 'post'), stryMutAct_9fa48("33922") ? "" : (stryCov_9fa48("33922"), '/:uid/exports/:type'), stryMutAct_9fa48("33923") ? [] : (stryCov_9fa48("33923"), [...middlewares, middleware.assert.user, middleware.checkAccountPermissions]), controllers.write.users.generateExportsByType);

    // Shorthand route to access user routes by userslug
    router.all(stryMutAct_9fa48("33924") ? "" : (stryCov_9fa48("33924"), '/+bySlug/:userslug*?'), stryMutAct_9fa48("33925") ? ["Stryker was here"] : (stryCov_9fa48("33925"), []), controllers.write.users.redirectBySlug);
  }
}
module.exports = function () {
  if (stryMutAct_9fa48("33926")) {
    {}
  } else {
    stryCov_9fa48("33926");
    authenticatedRoutes();
    return router;
  }
};