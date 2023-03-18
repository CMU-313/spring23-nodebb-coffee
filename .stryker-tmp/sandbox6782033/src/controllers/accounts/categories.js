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
const user = require('../../user');
const categories = require('../../categories');
const accountHelpers = require('./helpers');
const helpers = require('../helpers');
const pagination = require('../../pagination');
const meta = require('../../meta');
const categoriesController = module.exports;
categoriesController.get = async function (req, res, next) {
  if (stryMutAct_9fa48("5151")) {
    {}
  } else {
    stryCov_9fa48("5151");
    const userData = await accountHelpers.getUserDataByUserSlug(req.params.userslug, req.uid, req.query);
    if (stryMutAct_9fa48("5154") ? false : stryMutAct_9fa48("5153") ? true : stryMutAct_9fa48("5152") ? userData : (stryCov_9fa48("5152", "5153", "5154"), !userData)) {
      if (stryMutAct_9fa48("5155")) {
        {}
      } else {
        stryCov_9fa48("5155");
        return next();
      }
    }
    const [states, allCategoriesData] = await Promise.all(stryMutAct_9fa48("5156") ? [] : (stryCov_9fa48("5156"), [user.getCategoryWatchState(userData.uid), categories.buildForSelect(userData.uid, stryMutAct_9fa48("5157") ? "" : (stryCov_9fa48("5157"), 'find'), stryMutAct_9fa48("5158") ? [] : (stryCov_9fa48("5158"), [stryMutAct_9fa48("5159") ? "" : (stryCov_9fa48("5159"), 'descriptionParsed'), stryMutAct_9fa48("5160") ? "" : (stryCov_9fa48("5160"), 'depth'), stryMutAct_9fa48("5161") ? "" : (stryCov_9fa48("5161"), 'slug')]))]));
    const pageCount = Math.max(1, Math.ceil(stryMutAct_9fa48("5162") ? allCategoriesData.length * meta.config.categoriesPerPage : (stryCov_9fa48("5162"), allCategoriesData.length / meta.config.categoriesPerPage)));
    const page = Math.min(stryMutAct_9fa48("5165") ? parseInt(req.query.page, 10) && 1 : stryMutAct_9fa48("5164") ? false : stryMutAct_9fa48("5163") ? true : (stryCov_9fa48("5163", "5164", "5165"), parseInt(req.query.page, 10) || 1), pageCount);
    const start = Math.max(0, stryMutAct_9fa48("5166") ? (page - 1) / meta.config.categoriesPerPage : (stryCov_9fa48("5166"), (stryMutAct_9fa48("5167") ? page + 1 : (stryCov_9fa48("5167"), page - 1)) * meta.config.categoriesPerPage));
    const stop = stryMutAct_9fa48("5168") ? start + meta.config.categoriesPerPage + 1 : (stryCov_9fa48("5168"), (stryMutAct_9fa48("5169") ? start - meta.config.categoriesPerPage : (stryCov_9fa48("5169"), start + meta.config.categoriesPerPage)) - 1);
    const categoriesData = stryMutAct_9fa48("5170") ? allCategoriesData : (stryCov_9fa48("5170"), allCategoriesData.slice(start, stryMutAct_9fa48("5171") ? stop - 1 : (stryCov_9fa48("5171"), stop + 1)));
    categoriesData.forEach(category => {
      if (stryMutAct_9fa48("5172")) {
        {}
      } else {
        stryCov_9fa48("5172");
        if (stryMutAct_9fa48("5174") ? false : stryMutAct_9fa48("5173") ? true : (stryCov_9fa48("5173", "5174"), category)) {
          if (stryMutAct_9fa48("5175")) {
            {}
          } else {
            stryCov_9fa48("5175");
            category.isIgnored = stryMutAct_9fa48("5178") ? states[category.cid] !== categories.watchStates.ignoring : stryMutAct_9fa48("5177") ? false : stryMutAct_9fa48("5176") ? true : (stryCov_9fa48("5176", "5177", "5178"), states[category.cid] === categories.watchStates.ignoring);
            category.isWatched = stryMutAct_9fa48("5181") ? states[category.cid] !== categories.watchStates.watching : stryMutAct_9fa48("5180") ? false : stryMutAct_9fa48("5179") ? true : (stryCov_9fa48("5179", "5180", "5181"), states[category.cid] === categories.watchStates.watching);
            category.isNotWatched = stryMutAct_9fa48("5184") ? states[category.cid] !== categories.watchStates.notwatching : stryMutAct_9fa48("5183") ? false : stryMutAct_9fa48("5182") ? true : (stryCov_9fa48("5182", "5183", "5184"), states[category.cid] === categories.watchStates.notwatching);
          }
        }
      }
    });
    userData.categories = categoriesData;
    userData.title = stryMutAct_9fa48("5185") ? `` : (stryCov_9fa48("5185"), `[[pages:account/watched_categories, ${userData.username}]]`);
    userData.breadcrumbs = helpers.buildBreadcrumbs(stryMutAct_9fa48("5186") ? [] : (stryCov_9fa48("5186"), [stryMutAct_9fa48("5187") ? {} : (stryCov_9fa48("5187"), {
      text: userData.username,
      url: stryMutAct_9fa48("5188") ? `` : (stryCov_9fa48("5188"), `/user/${userData.userslug}`)
    }), stryMutAct_9fa48("5189") ? {} : (stryCov_9fa48("5189"), {
      text: stryMutAct_9fa48("5190") ? "" : (stryCov_9fa48("5190"), '[[pages:categories]]')
    })]));
    userData.pagination = pagination.create(page, pageCount, req.query);
    res.render(stryMutAct_9fa48("5191") ? "" : (stryCov_9fa48("5191"), 'account/categories'), userData);
  }
};