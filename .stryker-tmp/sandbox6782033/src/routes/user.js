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
const helpers = require('./helpers');
const {
  setupPageRoute
} = helpers;
module.exports = function (app, name, middleware, controllers) {
  if (stryMutAct_9fa48("33438")) {
    {}
  } else {
    stryCov_9fa48("33438");
    const middlewares = stryMutAct_9fa48("33439") ? [] : (stryCov_9fa48("33439"), [middleware.exposeUid, middleware.canViewUsers]);
    const accountMiddlewares = stryMutAct_9fa48("33440") ? [] : (stryCov_9fa48("33440"), [middleware.exposeUid, middleware.ensureLoggedIn, middleware.canViewUsers, middleware.checkAccountPermissions]);
    setupPageRoute(app, stryMutAct_9fa48("33441") ? "" : (stryCov_9fa48("33441"), '/me'), stryMutAct_9fa48("33442") ? ["Stryker was here"] : (stryCov_9fa48("33442"), []), middleware.redirectMeToUserslug);
    setupPageRoute(app, stryMutAct_9fa48("33443") ? "" : (stryCov_9fa48("33443"), '/me/*'), stryMutAct_9fa48("33444") ? ["Stryker was here"] : (stryCov_9fa48("33444"), []), middleware.redirectMeToUserslug);
    setupPageRoute(app, stryMutAct_9fa48("33445") ? "" : (stryCov_9fa48("33445"), '/uid/:uid*'), stryMutAct_9fa48("33446") ? ["Stryker was here"] : (stryCov_9fa48("33446"), []), middleware.redirectUidToUserslug);
    setupPageRoute(app, stryMutAct_9fa48("33447") ? `` : (stryCov_9fa48("33447"), `/${name}/:userslug`), middlewares, controllers.accounts.profile.get);
    setupPageRoute(app, stryMutAct_9fa48("33448") ? `` : (stryCov_9fa48("33448"), `/${name}/:userslug/following`), middlewares, controllers.accounts.follow.getFollowing);
    setupPageRoute(app, stryMutAct_9fa48("33449") ? `` : (stryCov_9fa48("33449"), `/${name}/:userslug/followers`), middlewares, controllers.accounts.follow.getFollowers);
    setupPageRoute(app, stryMutAct_9fa48("33450") ? `` : (stryCov_9fa48("33450"), `/${name}/:userslug/posts`), middlewares, controllers.accounts.posts.getPosts);
    setupPageRoute(app, stryMutAct_9fa48("33451") ? `` : (stryCov_9fa48("33451"), `/${name}/:userslug/topics`), middlewares, controllers.accounts.posts.getTopics);
    setupPageRoute(app, stryMutAct_9fa48("33452") ? `` : (stryCov_9fa48("33452"), `/${name}/:userslug/best`), middlewares, controllers.accounts.posts.getBestPosts);
    setupPageRoute(app, stryMutAct_9fa48("33453") ? `` : (stryCov_9fa48("33453"), `/${name}/:userslug/controversial`), middlewares, controllers.accounts.posts.getControversialPosts);
    setupPageRoute(app, stryMutAct_9fa48("33454") ? `` : (stryCov_9fa48("33454"), `/${name}/:userslug/groups`), middlewares, controllers.accounts.groups.get);
    setupPageRoute(app, stryMutAct_9fa48("33455") ? `` : (stryCov_9fa48("33455"), `/${name}/:userslug/categories`), accountMiddlewares, controllers.accounts.categories.get);
    setupPageRoute(app, stryMutAct_9fa48("33456") ? `` : (stryCov_9fa48("33456"), `/${name}/:userslug/bookmarks`), accountMiddlewares, controllers.accounts.posts.getBookmarks);
    setupPageRoute(app, stryMutAct_9fa48("33457") ? `` : (stryCov_9fa48("33457"), `/${name}/:userslug/watched`), accountMiddlewares, controllers.accounts.posts.getWatchedTopics);
    setupPageRoute(app, stryMutAct_9fa48("33458") ? `` : (stryCov_9fa48("33458"), `/${name}/:userslug/ignored`), accountMiddlewares, controllers.accounts.posts.getIgnoredTopics);
    setupPageRoute(app, stryMutAct_9fa48("33459") ? `` : (stryCov_9fa48("33459"), `/${name}/:userslug/upvoted`), accountMiddlewares, controllers.accounts.posts.getUpVotedPosts);
    setupPageRoute(app, stryMutAct_9fa48("33460") ? `` : (stryCov_9fa48("33460"), `/${name}/:userslug/downvoted`), accountMiddlewares, controllers.accounts.posts.getDownVotedPosts);
    setupPageRoute(app, stryMutAct_9fa48("33461") ? `` : (stryCov_9fa48("33461"), `/${name}/:userslug/edit`), accountMiddlewares, controllers.accounts.edit.get);
    setupPageRoute(app, stryMutAct_9fa48("33462") ? `` : (stryCov_9fa48("33462"), `/${name}/:userslug/edit/username`), accountMiddlewares, controllers.accounts.edit.username);
    setupPageRoute(app, stryMutAct_9fa48("33463") ? `` : (stryCov_9fa48("33463"), `/${name}/:userslug/edit/email`), accountMiddlewares, controllers.accounts.edit.email);
    setupPageRoute(app, stryMutAct_9fa48("33464") ? `` : (stryCov_9fa48("33464"), `/${name}/:userslug/edit/password`), accountMiddlewares, controllers.accounts.edit.password);
    app.use(stryMutAct_9fa48("33465") ? "" : (stryCov_9fa48("33465"), '/.well-known/change-password'), (req, res) => {
      if (stryMutAct_9fa48("33466")) {
        {}
      } else {
        stryCov_9fa48("33466");
        res.redirect(stryMutAct_9fa48("33467") ? "" : (stryCov_9fa48("33467"), '/me/edit/password'));
      }
    });
    setupPageRoute(app, stryMutAct_9fa48("33468") ? `` : (stryCov_9fa48("33468"), `/${name}/:userslug/info`), accountMiddlewares, controllers.accounts.info.get);
    setupPageRoute(app, stryMutAct_9fa48("33469") ? `` : (stryCov_9fa48("33469"), `/${name}/:userslug/settings`), accountMiddlewares, controllers.accounts.settings.get);
    setupPageRoute(app, stryMutAct_9fa48("33470") ? `` : (stryCov_9fa48("33470"), `/${name}/:userslug/uploads`), accountMiddlewares, controllers.accounts.uploads.get);
    setupPageRoute(app, stryMutAct_9fa48("33471") ? `` : (stryCov_9fa48("33471"), `/${name}/:userslug/consent`), accountMiddlewares, controllers.accounts.consent.get);
    setupPageRoute(app, stryMutAct_9fa48("33472") ? `` : (stryCov_9fa48("33472"), `/${name}/:userslug/blocks`), accountMiddlewares, controllers.accounts.blocks.getBlocks);
    setupPageRoute(app, stryMutAct_9fa48("33473") ? `` : (stryCov_9fa48("33473"), `/${name}/:userslug/sessions`), accountMiddlewares, controllers.accounts.sessions.get);
    setupPageRoute(app, stryMutAct_9fa48("33474") ? "" : (stryCov_9fa48("33474"), '/notifications'), stryMutAct_9fa48("33475") ? [] : (stryCov_9fa48("33475"), [middleware.ensureLoggedIn]), controllers.accounts.notifications.get);
    setupPageRoute(app, stryMutAct_9fa48("33476") ? `` : (stryCov_9fa48("33476"), `/${name}/:userslug/chats/:roomid?`), middlewares, controllers.accounts.chats.get);
    setupPageRoute(app, stryMutAct_9fa48("33477") ? "" : (stryCov_9fa48("33477"), '/chats/:roomid?'), stryMutAct_9fa48("33478") ? [] : (stryCov_9fa48("33478"), [middleware.ensureLoggedIn]), controllers.accounts.chats.redirectToChat);
  }
};