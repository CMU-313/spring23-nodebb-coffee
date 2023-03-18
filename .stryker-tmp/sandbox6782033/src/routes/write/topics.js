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
  if (stryMutAct_9fa48("33745")) {
    {}
  } else {
    stryCov_9fa48("33745");
    const middlewares = stryMutAct_9fa48("33746") ? [] : (stryCov_9fa48("33746"), [middleware.ensureLoggedIn]);
    const multipart = require('connect-multiparty');
    const multipartMiddleware = multipart();
    setupApiRoute(router, stryMutAct_9fa48("33747") ? "" : (stryCov_9fa48("33747"), 'post'), stryMutAct_9fa48("33748") ? "" : (stryCov_9fa48("33748"), '/'), stryMutAct_9fa48("33749") ? [] : (stryCov_9fa48("33749"), [middleware.checkRequired.bind(null, stryMutAct_9fa48("33750") ? [] : (stryCov_9fa48("33750"), [stryMutAct_9fa48("33751") ? "" : (stryCov_9fa48("33751"), 'cid'), stryMutAct_9fa48("33752") ? "" : (stryCov_9fa48("33752"), 'title'), stryMutAct_9fa48("33753") ? "" : (stryCov_9fa48("33753"), 'content')]))]), controllers.write.topics.create);
    setupApiRoute(router, stryMutAct_9fa48("33754") ? "" : (stryCov_9fa48("33754"), 'get'), stryMutAct_9fa48("33755") ? "" : (stryCov_9fa48("33755"), '/:tid'), stryMutAct_9fa48("33756") ? ["Stryker was here"] : (stryCov_9fa48("33756"), []), controllers.write.topics.get);
    setupApiRoute(router, stryMutAct_9fa48("33757") ? "" : (stryCov_9fa48("33757"), 'post'), stryMutAct_9fa48("33758") ? "" : (stryCov_9fa48("33758"), '/:tid'), stryMutAct_9fa48("33759") ? [] : (stryCov_9fa48("33759"), [middleware.checkRequired.bind(null, stryMutAct_9fa48("33760") ? [] : (stryCov_9fa48("33760"), [stryMutAct_9fa48("33761") ? "" : (stryCov_9fa48("33761"), 'content')])), middleware.assert.topic]), controllers.write.topics.reply);
    setupApiRoute(router, stryMutAct_9fa48("33762") ? "" : (stryCov_9fa48("33762"), 'delete'), stryMutAct_9fa48("33763") ? "" : (stryCov_9fa48("33763"), '/:tid'), stryMutAct_9fa48("33764") ? [] : (stryCov_9fa48("33764"), [...middlewares]), controllers.write.topics.purge);
    setupApiRoute(router, stryMutAct_9fa48("33765") ? "" : (stryCov_9fa48("33765"), 'put'), stryMutAct_9fa48("33766") ? "" : (stryCov_9fa48("33766"), '/:tid/state'), stryMutAct_9fa48("33767") ? [] : (stryCov_9fa48("33767"), [...middlewares]), controllers.write.topics.restore);
    setupApiRoute(router, stryMutAct_9fa48("33768") ? "" : (stryCov_9fa48("33768"), 'delete'), stryMutAct_9fa48("33769") ? "" : (stryCov_9fa48("33769"), '/:tid/state'), stryMutAct_9fa48("33770") ? [] : (stryCov_9fa48("33770"), [...middlewares]), controllers.write.topics.delete);
    setupApiRoute(router, stryMutAct_9fa48("33771") ? "" : (stryCov_9fa48("33771"), 'put'), stryMutAct_9fa48("33772") ? "" : (stryCov_9fa48("33772"), '/:tid/pin'), stryMutAct_9fa48("33773") ? [] : (stryCov_9fa48("33773"), [...middlewares, middleware.assert.topic]), controllers.write.topics.pin);
    setupApiRoute(router, stryMutAct_9fa48("33774") ? "" : (stryCov_9fa48("33774"), 'delete'), stryMutAct_9fa48("33775") ? "" : (stryCov_9fa48("33775"), '/:tid/pin'), stryMutAct_9fa48("33776") ? [] : (stryCov_9fa48("33776"), [...middlewares]), controllers.write.topics.unpin);
    setupApiRoute(router, stryMutAct_9fa48("33777") ? "" : (stryCov_9fa48("33777"), 'put'), stryMutAct_9fa48("33778") ? "" : (stryCov_9fa48("33778"), '/:tid/lock'), stryMutAct_9fa48("33779") ? [] : (stryCov_9fa48("33779"), [...middlewares]), controllers.write.topics.lock);
    setupApiRoute(router, stryMutAct_9fa48("33780") ? "" : (stryCov_9fa48("33780"), 'delete'), stryMutAct_9fa48("33781") ? "" : (stryCov_9fa48("33781"), '/:tid/lock'), stryMutAct_9fa48("33782") ? [] : (stryCov_9fa48("33782"), [...middlewares]), controllers.write.topics.unlock);
    setupApiRoute(router, stryMutAct_9fa48("33783") ? "" : (stryCov_9fa48("33783"), 'put'), stryMutAct_9fa48("33784") ? "" : (stryCov_9fa48("33784"), '/:tid/follow'), stryMutAct_9fa48("33785") ? [] : (stryCov_9fa48("33785"), [...middlewares, middleware.assert.topic]), controllers.write.topics.follow);
    setupApiRoute(router, stryMutAct_9fa48("33786") ? "" : (stryCov_9fa48("33786"), 'delete'), stryMutAct_9fa48("33787") ? "" : (stryCov_9fa48("33787"), '/:tid/follow'), stryMutAct_9fa48("33788") ? [] : (stryCov_9fa48("33788"), [...middlewares, middleware.assert.topic]), controllers.write.topics.unfollow);
    setupApiRoute(router, stryMutAct_9fa48("33789") ? "" : (stryCov_9fa48("33789"), 'put'), stryMutAct_9fa48("33790") ? "" : (stryCov_9fa48("33790"), '/:tid/ignore'), stryMutAct_9fa48("33791") ? [] : (stryCov_9fa48("33791"), [...middlewares, middleware.assert.topic]), controllers.write.topics.ignore);
    setupApiRoute(router, stryMutAct_9fa48("33792") ? "" : (stryCov_9fa48("33792"), 'delete'), stryMutAct_9fa48("33793") ? "" : (stryCov_9fa48("33793"), '/:tid/ignore'), stryMutAct_9fa48("33794") ? [] : (stryCov_9fa48("33794"), [...middlewares, middleware.assert.topic]), controllers.write.topics.unfollow); // intentional, unignore == unfollow

    setupApiRoute(router, stryMutAct_9fa48("33795") ? "" : (stryCov_9fa48("33795"), 'put'), stryMutAct_9fa48("33796") ? "" : (stryCov_9fa48("33796"), '/:tid/tags'), stryMutAct_9fa48("33797") ? [] : (stryCov_9fa48("33797"), [...middlewares, middleware.checkRequired.bind(null, stryMutAct_9fa48("33798") ? [] : (stryCov_9fa48("33798"), [stryMutAct_9fa48("33799") ? "" : (stryCov_9fa48("33799"), 'tags')])), middleware.assert.topic]), controllers.write.topics.addTags);
    setupApiRoute(router, stryMutAct_9fa48("33800") ? "" : (stryCov_9fa48("33800"), 'delete'), stryMutAct_9fa48("33801") ? "" : (stryCov_9fa48("33801"), '/:tid/tags'), stryMutAct_9fa48("33802") ? [] : (stryCov_9fa48("33802"), [...middlewares, middleware.assert.topic]), controllers.write.topics.deleteTags);
    setupApiRoute(router, stryMutAct_9fa48("33803") ? "" : (stryCov_9fa48("33803"), 'get'), stryMutAct_9fa48("33804") ? "" : (stryCov_9fa48("33804"), '/:tid/thumbs'), stryMutAct_9fa48("33805") ? ["Stryker was here"] : (stryCov_9fa48("33805"), []), controllers.write.topics.getThumbs);
    setupApiRoute(router, stryMutAct_9fa48("33806") ? "" : (stryCov_9fa48("33806"), 'post'), stryMutAct_9fa48("33807") ? "" : (stryCov_9fa48("33807"), '/:tid/thumbs'), stryMutAct_9fa48("33808") ? [] : (stryCov_9fa48("33808"), [multipartMiddleware, middleware.validateFiles, middleware.uploads.ratelimit, ...middlewares]), controllers.write.topics.addThumb);
    setupApiRoute(router, stryMutAct_9fa48("33809") ? "" : (stryCov_9fa48("33809"), 'put'), stryMutAct_9fa48("33810") ? "" : (stryCov_9fa48("33810"), '/:tid/thumbs'), stryMutAct_9fa48("33811") ? [] : (stryCov_9fa48("33811"), [...middlewares, middleware.checkRequired.bind(null, stryMutAct_9fa48("33812") ? [] : (stryCov_9fa48("33812"), [stryMutAct_9fa48("33813") ? "" : (stryCov_9fa48("33813"), 'tid')]))]), controllers.write.topics.migrateThumbs);
    setupApiRoute(router, stryMutAct_9fa48("33814") ? "" : (stryCov_9fa48("33814"), 'delete'), stryMutAct_9fa48("33815") ? "" : (stryCov_9fa48("33815"), '/:tid/thumbs'), stryMutAct_9fa48("33816") ? [] : (stryCov_9fa48("33816"), [...middlewares, middleware.checkRequired.bind(null, stryMutAct_9fa48("33817") ? [] : (stryCov_9fa48("33817"), [stryMutAct_9fa48("33818") ? "" : (stryCov_9fa48("33818"), 'path')]))]), controllers.write.topics.deleteThumb);
    setupApiRoute(router, stryMutAct_9fa48("33819") ? "" : (stryCov_9fa48("33819"), 'put'), stryMutAct_9fa48("33820") ? "" : (stryCov_9fa48("33820"), '/:tid/thumbs/order'), stryMutAct_9fa48("33821") ? [] : (stryCov_9fa48("33821"), [...middlewares, middleware.checkRequired.bind(null, stryMutAct_9fa48("33822") ? [] : (stryCov_9fa48("33822"), [stryMutAct_9fa48("33823") ? "" : (stryCov_9fa48("33823"), 'path'), stryMutAct_9fa48("33824") ? "" : (stryCov_9fa48("33824"), 'order')]))]), controllers.write.topics.reorderThumbs);
    setupApiRoute(router, stryMutAct_9fa48("33825") ? "" : (stryCov_9fa48("33825"), 'get'), stryMutAct_9fa48("33826") ? "" : (stryCov_9fa48("33826"), '/:tid/events'), stryMutAct_9fa48("33827") ? [] : (stryCov_9fa48("33827"), [middleware.assert.topic]), controllers.write.topics.getEvents);
    setupApiRoute(router, stryMutAct_9fa48("33828") ? "" : (stryCov_9fa48("33828"), 'delete'), stryMutAct_9fa48("33829") ? "" : (stryCov_9fa48("33829"), '/:tid/events/:eventId'), stryMutAct_9fa48("33830") ? [] : (stryCov_9fa48("33830"), [middleware.assert.topic]), controllers.write.topics.deleteEvent);
    return router;
  }
};