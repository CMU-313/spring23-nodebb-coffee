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
const express = require('express');
const winston = require('winston');
const uploadsController = require('../controllers/uploads');
const helpers = require('./helpers');
module.exports = function (app, middleware, controllers) {
  if (stryMutAct_9fa48("32594")) {
    {}
  } else {
    stryCov_9fa48("32594");
    const middlewares = stryMutAct_9fa48("32595") ? [] : (stryCov_9fa48("32595"), [middleware.authenticateRequest]);
    const router = express.Router();
    app.use(stryMutAct_9fa48("32596") ? "" : (stryCov_9fa48("32596"), '/api'), router);
    router.get(stryMutAct_9fa48("32597") ? "" : (stryCov_9fa48("32597"), '/config'), stryMutAct_9fa48("32598") ? [] : (stryCov_9fa48("32598"), [...middlewares, middleware.applyCSRF]), helpers.tryRoute(controllers.api.getConfig));
    router.get(stryMutAct_9fa48("32599") ? "" : (stryCov_9fa48("32599"), '/self'), stryMutAct_9fa48("32600") ? [] : (stryCov_9fa48("32600"), [...middlewares]), helpers.tryRoute(controllers.user.getCurrentUser));
    router.get(stryMutAct_9fa48("32601") ? "" : (stryCov_9fa48("32601"), '/user/uid/:uid'), stryMutAct_9fa48("32602") ? [] : (stryCov_9fa48("32602"), [...middlewares, middleware.canViewUsers]), helpers.tryRoute(controllers.user.getUserByUID));
    router.get(stryMutAct_9fa48("32603") ? "" : (stryCov_9fa48("32603"), '/user/username/:username'), stryMutAct_9fa48("32604") ? [] : (stryCov_9fa48("32604"), [...middlewares, middleware.canViewUsers]), helpers.tryRoute(controllers.user.getUserByUsername));
    router.get(stryMutAct_9fa48("32605") ? "" : (stryCov_9fa48("32605"), '/user/email/:email'), stryMutAct_9fa48("32606") ? [] : (stryCov_9fa48("32606"), [...middlewares, middleware.canViewUsers]), helpers.tryRoute(controllers.user.getUserByEmail));
    router.get(stryMutAct_9fa48("32607") ? "" : (stryCov_9fa48("32607"), '/user/:userslug/export/posts'), stryMutAct_9fa48("32608") ? [] : (stryCov_9fa48("32608"), [...middlewares, middleware.authenticateRequest, middleware.ensureLoggedIn, middleware.checkAccountPermissions, middleware.exposeUid]), helpers.tryRoute(controllers.user.exportPosts));
    router.get(stryMutAct_9fa48("32609") ? "" : (stryCov_9fa48("32609"), '/user/:userslug/export/uploads'), stryMutAct_9fa48("32610") ? [] : (stryCov_9fa48("32610"), [...middlewares, middleware.authenticateRequest, middleware.ensureLoggedIn, middleware.checkAccountPermissions, middleware.exposeUid]), helpers.tryRoute(controllers.user.exportUploads));
    router.get(stryMutAct_9fa48("32611") ? "" : (stryCov_9fa48("32611"), '/user/:userslug/export/profile'), stryMutAct_9fa48("32612") ? [] : (stryCov_9fa48("32612"), [...middlewares, middleware.authenticateRequest, middleware.ensureLoggedIn, middleware.checkAccountPermissions, middleware.exposeUid]), helpers.tryRoute(controllers.user.exportProfile));

    // Deprecated, remove in v1.20.0
    router.get(stryMutAct_9fa48("32613") ? "" : (stryCov_9fa48("32613"), '/user/uid/:userslug/export/:type'), (req, res) => {
      if (stryMutAct_9fa48("32614")) {
        {}
      } else {
        stryCov_9fa48("32614");
        winston.warn(stryMutAct_9fa48("32615") ? `` : (stryCov_9fa48("32615"), `[router] \`/api/user/uid/${req.params.userslug}/export/${req.params.type}\` is deprecated, call it \`/api/user/${req.params.userslug}/export/${req.params.type}\`instead.`));
        res.redirect(stryMutAct_9fa48("32616") ? `` : (stryCov_9fa48("32616"), `/api/user/${req.params.userslug}/export/${req.params.type}`));
      }
    });
    router.get(stryMutAct_9fa48("32617") ? "" : (stryCov_9fa48("32617"), '/categories/:cid/moderators'), stryMutAct_9fa48("32618") ? [] : (stryCov_9fa48("32618"), [...middlewares]), helpers.tryRoute(controllers.api.getModerators));
    router.get(stryMutAct_9fa48("32619") ? "" : (stryCov_9fa48("32619"), '/recent/posts/:term?'), stryMutAct_9fa48("32620") ? [] : (stryCov_9fa48("32620"), [...middlewares]), helpers.tryRoute(controllers.posts.getRecentPosts));
    router.get(stryMutAct_9fa48("32621") ? "" : (stryCov_9fa48("32621"), '/unread/total'), stryMutAct_9fa48("32622") ? [] : (stryCov_9fa48("32622"), [...middlewares, middleware.ensureLoggedIn]), helpers.tryRoute(controllers.unread.unreadTotal));
    router.get(stryMutAct_9fa48("32623") ? "" : (stryCov_9fa48("32623"), '/topic/teaser/:topic_id'), stryMutAct_9fa48("32624") ? [] : (stryCov_9fa48("32624"), [...middlewares]), helpers.tryRoute(controllers.topics.teaser));
    router.get(stryMutAct_9fa48("32625") ? "" : (stryCov_9fa48("32625"), '/topic/pagination/:topic_id'), stryMutAct_9fa48("32626") ? [] : (stryCov_9fa48("32626"), [...middlewares]), helpers.tryRoute(controllers.topics.pagination));
    const multipart = require('connect-multiparty');
    const multipartMiddleware = multipart();
    const postMiddlewares = stryMutAct_9fa48("32627") ? [] : (stryCov_9fa48("32627"), [middleware.maintenanceMode, multipartMiddleware, middleware.validateFiles, middleware.uploads.ratelimit, middleware.applyCSRF]);
    router.post(stryMutAct_9fa48("32628") ? "" : (stryCov_9fa48("32628"), '/post/upload'), postMiddlewares, helpers.tryRoute(uploadsController.uploadPost));
    router.post(stryMutAct_9fa48("32629") ? "" : (stryCov_9fa48("32629"), '/user/:userslug/uploadpicture'), stryMutAct_9fa48("32630") ? [] : (stryCov_9fa48("32630"), [...middlewares, ...postMiddlewares, middleware.exposeUid, middleware.ensureLoggedIn, middleware.canViewUsers, middleware.checkAccountPermissions]), helpers.tryRoute(controllers.accounts.edit.uploadPicture));
  }
};