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
module.exports = function (app, name, middleware, controllers) {
  if (stryMutAct_9fa48("32538")) {
    {}
  } else {
    stryCov_9fa48("32538");
    const middlewares = stryMutAct_9fa48("32539") ? [] : (stryCov_9fa48("32539"), [middleware.pluginHooks]);
    helpers.setupAdminPageRoute(app, stryMutAct_9fa48("32540") ? `` : (stryCov_9fa48("32540"), `/${name}`), middlewares, controllers.admin.routeIndex);
    helpers.setupAdminPageRoute(app, stryMutAct_9fa48("32541") ? `` : (stryCov_9fa48("32541"), `/${name}/dashboard`), middlewares, controllers.admin.dashboard.get);
    helpers.setupAdminPageRoute(app, stryMutAct_9fa48("32542") ? `` : (stryCov_9fa48("32542"), `/${name}/dashboard/logins`), middlewares, controllers.admin.dashboard.getLogins);
    helpers.setupAdminPageRoute(app, stryMutAct_9fa48("32543") ? `` : (stryCov_9fa48("32543"), `/${name}/dashboard/users`), middlewares, controllers.admin.dashboard.getUsers);
    helpers.setupAdminPageRoute(app, stryMutAct_9fa48("32544") ? `` : (stryCov_9fa48("32544"), `/${name}/dashboard/topics`), middlewares, controllers.admin.dashboard.getTopics);
    helpers.setupAdminPageRoute(app, stryMutAct_9fa48("32545") ? `` : (stryCov_9fa48("32545"), `/${name}/dashboard/searches`), middlewares, controllers.admin.dashboard.getSearches);
    helpers.setupAdminPageRoute(app, stryMutAct_9fa48("32546") ? `` : (stryCov_9fa48("32546"), `/${name}/manage/categories`), middlewares, controllers.admin.categories.getAll);
    helpers.setupAdminPageRoute(app, stryMutAct_9fa48("32547") ? `` : (stryCov_9fa48("32547"), `/${name}/manage/categories/:category_id`), middlewares, controllers.admin.categories.get);
    helpers.setupAdminPageRoute(app, stryMutAct_9fa48("32548") ? `` : (stryCov_9fa48("32548"), `/${name}/manage/categories/:category_id/analytics`), middlewares, controllers.admin.categories.getAnalytics);
    helpers.setupAdminPageRoute(app, stryMutAct_9fa48("32549") ? `` : (stryCov_9fa48("32549"), `/${name}/manage/privileges/:cid?`), middlewares, controllers.admin.privileges.get);
    helpers.setupAdminPageRoute(app, stryMutAct_9fa48("32550") ? `` : (stryCov_9fa48("32550"), `/${name}/manage/tags`), middlewares, controllers.admin.tags.get);
    helpers.setupAdminPageRoute(app, stryMutAct_9fa48("32551") ? `` : (stryCov_9fa48("32551"), `/${name}/manage/users`), middlewares, controllers.admin.users.index);
    helpers.setupAdminPageRoute(app, stryMutAct_9fa48("32552") ? `` : (stryCov_9fa48("32552"), `/${name}/manage/registration`), middlewares, controllers.admin.users.registrationQueue);
    helpers.setupAdminPageRoute(app, stryMutAct_9fa48("32553") ? `` : (stryCov_9fa48("32553"), `/${name}/manage/admins-mods`), middlewares, controllers.admin.adminsMods.get);
    helpers.setupAdminPageRoute(app, stryMutAct_9fa48("32554") ? `` : (stryCov_9fa48("32554"), `/${name}/manage/groups`), middlewares, controllers.admin.groups.list);
    helpers.setupAdminPageRoute(app, stryMutAct_9fa48("32555") ? `` : (stryCov_9fa48("32555"), `/${name}/manage/groups/:name`), middlewares, controllers.admin.groups.get);
    helpers.setupAdminPageRoute(app, stryMutAct_9fa48("32556") ? `` : (stryCov_9fa48("32556"), `/${name}/manage/uploads`), middlewares, controllers.admin.uploads.get);
    helpers.setupAdminPageRoute(app, stryMutAct_9fa48("32557") ? `` : (stryCov_9fa48("32557"), `/${name}/manage/digest`), middlewares, controllers.admin.digest.get);
    helpers.setupAdminPageRoute(app, stryMutAct_9fa48("32558") ? `` : (stryCov_9fa48("32558"), `/${name}/settings/email`), middlewares, controllers.admin.settings.email);
    helpers.setupAdminPageRoute(app, stryMutAct_9fa48("32559") ? `` : (stryCov_9fa48("32559"), `/${name}/settings/user`), middlewares, controllers.admin.settings.user);
    helpers.setupAdminPageRoute(app, stryMutAct_9fa48("32560") ? `` : (stryCov_9fa48("32560"), `/${name}/settings/post`), middlewares, controllers.admin.settings.post);
    helpers.setupAdminPageRoute(app, stryMutAct_9fa48("32561") ? `` : (stryCov_9fa48("32561"), `/${name}/settings/advanced`), middlewares, controllers.admin.settings.advanced);
    helpers.setupAdminPageRoute(app, stryMutAct_9fa48("32562") ? `` : (stryCov_9fa48("32562"), `/${name}/settings/languages`), middlewares, controllers.admin.settings.languages);
    helpers.setupAdminPageRoute(app, stryMutAct_9fa48("32563") ? `` : (stryCov_9fa48("32563"), `/${name}/settings/navigation`), middlewares, controllers.admin.settings.navigation);
    helpers.setupAdminPageRoute(app, stryMutAct_9fa48("32564") ? `` : (stryCov_9fa48("32564"), `/${name}/settings/homepage`), middlewares, controllers.admin.settings.homepage);
    helpers.setupAdminPageRoute(app, stryMutAct_9fa48("32565") ? `` : (stryCov_9fa48("32565"), `/${name}/settings/social`), middlewares, controllers.admin.settings.social);
    helpers.setupAdminPageRoute(app, stryMutAct_9fa48("32566") ? `` : (stryCov_9fa48("32566"), `/${name}/settings/:term?`), middlewares, controllers.admin.settings.get);
    helpers.setupAdminPageRoute(app, stryMutAct_9fa48("32567") ? `` : (stryCov_9fa48("32567"), `/${name}/appearance/:term?`), middlewares, controllers.admin.appearance.get);
    helpers.setupAdminPageRoute(app, stryMutAct_9fa48("32568") ? `` : (stryCov_9fa48("32568"), `/${name}/extend/plugins`), middlewares, controllers.admin.plugins.get);
    helpers.setupAdminPageRoute(app, stryMutAct_9fa48("32569") ? `` : (stryCov_9fa48("32569"), `/${name}/extend/widgets`), middlewares, controllers.admin.extend.widgets.get);
    helpers.setupAdminPageRoute(app, stryMutAct_9fa48("32570") ? `` : (stryCov_9fa48("32570"), `/${name}/extend/rewards`), middlewares, controllers.admin.extend.rewards.get);
    helpers.setupAdminPageRoute(app, stryMutAct_9fa48("32571") ? `` : (stryCov_9fa48("32571"), `/${name}/advanced/database`), middlewares, controllers.admin.database.get);
    helpers.setupAdminPageRoute(app, stryMutAct_9fa48("32572") ? `` : (stryCov_9fa48("32572"), `/${name}/advanced/events`), middlewares, controllers.admin.events.get);
    helpers.setupAdminPageRoute(app, stryMutAct_9fa48("32573") ? `` : (stryCov_9fa48("32573"), `/${name}/advanced/hooks`), middlewares, controllers.admin.hooks.get);
    helpers.setupAdminPageRoute(app, stryMutAct_9fa48("32574") ? `` : (stryCov_9fa48("32574"), `/${name}/advanced/logs`), middlewares, controllers.admin.logs.get);
    helpers.setupAdminPageRoute(app, stryMutAct_9fa48("32575") ? `` : (stryCov_9fa48("32575"), `/${name}/advanced/errors`), middlewares, controllers.admin.errors.get);
    helpers.setupAdminPageRoute(app, stryMutAct_9fa48("32576") ? `` : (stryCov_9fa48("32576"), `/${name}/advanced/errors/export`), middlewares, controllers.admin.errors.export);
    helpers.setupAdminPageRoute(app, stryMutAct_9fa48("32577") ? `` : (stryCov_9fa48("32577"), `/${name}/advanced/cache`), middlewares, controllers.admin.cache.get);
    helpers.setupAdminPageRoute(app, stryMutAct_9fa48("32578") ? `` : (stryCov_9fa48("32578"), `/${name}/development/logger`), middlewares, controllers.admin.logger.get);
    helpers.setupAdminPageRoute(app, stryMutAct_9fa48("32579") ? `` : (stryCov_9fa48("32579"), `/${name}/development/info`), middlewares, controllers.admin.info.get);
    apiRoutes(app, name, middleware, controllers);
  }
};
function apiRoutes(router, name, middleware, controllers) {
  if (stryMutAct_9fa48("32580")) {
    {}
  } else {
    stryCov_9fa48("32580");
    router.get(stryMutAct_9fa48("32581") ? `` : (stryCov_9fa48("32581"), `/api/${name}/users/csv`), middleware.ensureLoggedIn, helpers.tryRoute(controllers.admin.users.getCSV));
    router.get(stryMutAct_9fa48("32582") ? `` : (stryCov_9fa48("32582"), `/api/${name}/groups/:groupname/csv`), middleware.ensureLoggedIn, helpers.tryRoute(controllers.admin.groups.getCSV));
    router.get(stryMutAct_9fa48("32583") ? `` : (stryCov_9fa48("32583"), `/api/${name}/analytics`), middleware.ensureLoggedIn, helpers.tryRoute(controllers.admin.dashboard.getAnalytics));
    router.get(stryMutAct_9fa48("32584") ? `` : (stryCov_9fa48("32584"), `/api/${name}/advanced/cache/dump`), middleware.ensureLoggedIn, helpers.tryRoute(controllers.admin.cache.dump));
    const multipart = require('connect-multiparty');
    const multipartMiddleware = multipart();
    const middlewares = stryMutAct_9fa48("32585") ? [] : (stryCov_9fa48("32585"), [multipartMiddleware, middleware.validateFiles, middleware.applyCSRF, middleware.ensureLoggedIn]);
    router.post(stryMutAct_9fa48("32586") ? `` : (stryCov_9fa48("32586"), `/api/${name}/category/uploadpicture`), middlewares, helpers.tryRoute(controllers.admin.uploads.uploadCategoryPicture));
    router.post(stryMutAct_9fa48("32587") ? `` : (stryCov_9fa48("32587"), `/api/${name}/uploadfavicon`), middlewares, helpers.tryRoute(controllers.admin.uploads.uploadFavicon));
    router.post(stryMutAct_9fa48("32588") ? `` : (stryCov_9fa48("32588"), `/api/${name}/uploadTouchIcon`), middlewares, helpers.tryRoute(controllers.admin.uploads.uploadTouchIcon));
    router.post(stryMutAct_9fa48("32589") ? `` : (stryCov_9fa48("32589"), `/api/${name}/uploadMaskableIcon`), middlewares, helpers.tryRoute(controllers.admin.uploads.uploadMaskableIcon));
    router.post(stryMutAct_9fa48("32590") ? `` : (stryCov_9fa48("32590"), `/api/${name}/uploadlogo`), middlewares, helpers.tryRoute(controllers.admin.uploads.uploadLogo));
    router.post(stryMutAct_9fa48("32591") ? `` : (stryCov_9fa48("32591"), `/api/${name}/uploadOgImage`), middlewares, helpers.tryRoute(controllers.admin.uploads.uploadOgImage));
    router.post(stryMutAct_9fa48("32592") ? `` : (stryCov_9fa48("32592"), `/api/${name}/upload/file`), middlewares, helpers.tryRoute(controllers.admin.uploads.uploadFile));
    router.post(stryMutAct_9fa48("32593") ? `` : (stryCov_9fa48("32593"), `/api/${name}/uploadDefaultAvatar`), middlewares, helpers.tryRoute(controllers.admin.uploads.uploadDefaultAvatar));
  }
}