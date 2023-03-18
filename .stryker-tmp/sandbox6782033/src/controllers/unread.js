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
const nconf = require('nconf');
const querystring = require('querystring');
const meta = require('../meta');
const pagination = require('../pagination');
const user = require('../user');
const topics = require('../topics');
const helpers = require('./helpers');
const unreadController = module.exports;
const relative_path = nconf.get(stryMutAct_9fa48("11698") ? "" : (stryCov_9fa48("11698"), 'relative_path'));
unreadController.get = async function (req, res) {
  if (stryMutAct_9fa48("11699")) {
    {}
  } else {
    stryCov_9fa48("11699");
    const {
      cid
    } = req.query;
    const filter = stryMutAct_9fa48("11702") ? req.query.filter && '' : stryMutAct_9fa48("11701") ? false : stryMutAct_9fa48("11700") ? true : (stryCov_9fa48("11700", "11701", "11702"), req.query.filter || (stryMutAct_9fa48("11703") ? "Stryker was here!" : (stryCov_9fa48("11703"), '')));
    const [categoryData, userSettings, isPrivileged] = await Promise.all(stryMutAct_9fa48("11704") ? [] : (stryCov_9fa48("11704"), [helpers.getSelectedCategory(cid), user.getSettings(req.uid), user.isPrivileged(req.uid)]));
    const page = stryMutAct_9fa48("11707") ? parseInt(req.query.page, 10) && 1 : stryMutAct_9fa48("11706") ? false : stryMutAct_9fa48("11705") ? true : (stryCov_9fa48("11705", "11706", "11707"), parseInt(req.query.page, 10) || 1);
    const start = Math.max(0, stryMutAct_9fa48("11708") ? (page - 1) / userSettings.topicsPerPage : (stryCov_9fa48("11708"), (stryMutAct_9fa48("11709") ? page + 1 : (stryCov_9fa48("11709"), page - 1)) * userSettings.topicsPerPage));
    const stop = stryMutAct_9fa48("11710") ? start + userSettings.topicsPerPage + 1 : (stryCov_9fa48("11710"), (stryMutAct_9fa48("11711") ? start - userSettings.topicsPerPage : (stryCov_9fa48("11711"), start + userSettings.topicsPerPage)) - 1);
    const data = await topics.getUnreadTopics(stryMutAct_9fa48("11712") ? {} : (stryCov_9fa48("11712"), {
      cid: cid,
      uid: req.uid,
      start: start,
      stop: stop,
      filter: filter,
      query: req.query
    }));
    const isDisplayedAsHome = stryMutAct_9fa48("11713") ? req.originalUrl.startsWith(`${relative_path}/api/unread`) || req.originalUrl.startsWith(`${relative_path}/unread`) : (stryCov_9fa48("11713"), !(stryMutAct_9fa48("11716") ? req.originalUrl.startsWith(`${relative_path}/api/unread`) && req.originalUrl.startsWith(`${relative_path}/unread`) : stryMutAct_9fa48("11715") ? false : stryMutAct_9fa48("11714") ? true : (stryCov_9fa48("11714", "11715", "11716"), (stryMutAct_9fa48("11717") ? req.originalUrl.endsWith(`${relative_path}/api/unread`) : (stryCov_9fa48("11717"), req.originalUrl.startsWith(stryMutAct_9fa48("11718") ? `` : (stryCov_9fa48("11718"), `${relative_path}/api/unread`)))) || (stryMutAct_9fa48("11719") ? req.originalUrl.endsWith(`${relative_path}/unread`) : (stryCov_9fa48("11719"), req.originalUrl.startsWith(stryMutAct_9fa48("11720") ? `` : (stryCov_9fa48("11720"), `${relative_path}/unread`)))))));
    const baseUrl = isDisplayedAsHome ? stryMutAct_9fa48("11721") ? "Stryker was here!" : (stryCov_9fa48("11721"), '') : stryMutAct_9fa48("11722") ? "" : (stryCov_9fa48("11722"), 'unread');
    if (stryMutAct_9fa48("11724") ? false : stryMutAct_9fa48("11723") ? true : (stryCov_9fa48("11723", "11724"), isDisplayedAsHome)) {
      if (stryMutAct_9fa48("11725")) {
        {}
      } else {
        stryCov_9fa48("11725");
        data.title = stryMutAct_9fa48("11728") ? meta.config.homePageTitle && '[[pages:home]]' : stryMutAct_9fa48("11727") ? false : stryMutAct_9fa48("11726") ? true : (stryCov_9fa48("11726", "11727", "11728"), meta.config.homePageTitle || (stryMutAct_9fa48("11729") ? "" : (stryCov_9fa48("11729"), '[[pages:home]]')));
      }
    } else {
      if (stryMutAct_9fa48("11730")) {
        {}
      } else {
        stryCov_9fa48("11730");
        data.title = stryMutAct_9fa48("11731") ? "" : (stryCov_9fa48("11731"), '[[pages:unread]]');
        data.breadcrumbs = helpers.buildBreadcrumbs(stryMutAct_9fa48("11732") ? [] : (stryCov_9fa48("11732"), [stryMutAct_9fa48("11733") ? {} : (stryCov_9fa48("11733"), {
          text: stryMutAct_9fa48("11734") ? "" : (stryCov_9fa48("11734"), '[[unread:title]]')
        })]));
      }
    }
    data.pageCount = Math.max(1, Math.ceil(stryMutAct_9fa48("11735") ? data.topicCount * userSettings.topicsPerPage : (stryCov_9fa48("11735"), data.topicCount / userSettings.topicsPerPage)));
    data.pagination = pagination.create(page, data.pageCount, req.query);
    helpers.addLinkTags(stryMutAct_9fa48("11736") ? {} : (stryCov_9fa48("11736"), {
      url: stryMutAct_9fa48("11737") ? "" : (stryCov_9fa48("11737"), 'unread'),
      res: req.res,
      tags: data.pagination.rel
    }));
    if (stryMutAct_9fa48("11740") ? userSettings.usePagination || page < 1 || page > data.pageCount : stryMutAct_9fa48("11739") ? false : stryMutAct_9fa48("11738") ? true : (stryCov_9fa48("11738", "11739", "11740"), userSettings.usePagination && (stryMutAct_9fa48("11742") ? page < 1 && page > data.pageCount : stryMutAct_9fa48("11741") ? true : (stryCov_9fa48("11741", "11742"), (stryMutAct_9fa48("11745") ? page >= 1 : stryMutAct_9fa48("11744") ? page <= 1 : stryMutAct_9fa48("11743") ? false : (stryCov_9fa48("11743", "11744", "11745"), page < 1)) || (stryMutAct_9fa48("11748") ? page <= data.pageCount : stryMutAct_9fa48("11747") ? page >= data.pageCount : stryMutAct_9fa48("11746") ? false : (stryCov_9fa48("11746", "11747", "11748"), page > data.pageCount)))))) {
      if (stryMutAct_9fa48("11749")) {
        {}
      } else {
        stryCov_9fa48("11749");
        req.query.page = Math.max(1, Math.min(data.pageCount, page));
        return helpers.redirect(res, stryMutAct_9fa48("11750") ? `` : (stryCov_9fa48("11750"), `/unread?${querystring.stringify(req.query)}`));
      }
    }
    data.showSelect = stryMutAct_9fa48("11751") ? false : (stryCov_9fa48("11751"), true);
    data.showTopicTools = isPrivileged;
    data.allCategoriesUrl = stryMutAct_9fa48("11752") ? `` : (stryCov_9fa48("11752"), `${baseUrl}${helpers.buildQueryString(req.query, stryMutAct_9fa48("11753") ? "" : (stryCov_9fa48("11753"), 'cid'), stryMutAct_9fa48("11754") ? "Stryker was here!" : (stryCov_9fa48("11754"), ''))}`);
    data.selectedCategory = categoryData.selectedCategory;
    data.selectedCids = categoryData.selectedCids;
    data.selectCategoryLabel = stryMutAct_9fa48("11755") ? "" : (stryCov_9fa48("11755"), '[[unread:mark_as_read]]');
    data.selectCategoryIcon = stryMutAct_9fa48("11756") ? "" : (stryCov_9fa48("11756"), 'fa-inbox');
    data.showCategorySelectLabel = stryMutAct_9fa48("11757") ? false : (stryCov_9fa48("11757"), true);
    data.filters = helpers.buildFilters(baseUrl, filter, req.query);
    data.selectedFilter = data.filters.find(stryMutAct_9fa48("11758") ? () => undefined : (stryCov_9fa48("11758"), filter => stryMutAct_9fa48("11761") ? filter || filter.selected : stryMutAct_9fa48("11760") ? false : stryMutAct_9fa48("11759") ? true : (stryCov_9fa48("11759", "11760", "11761"), filter && filter.selected)));
    res.render(stryMutAct_9fa48("11762") ? "" : (stryCov_9fa48("11762"), 'unread'), data);
  }
};
unreadController.unreadTotal = async function (req, res, next) {
  if (stryMutAct_9fa48("11763")) {
    {}
  } else {
    stryCov_9fa48("11763");
    const filter = stryMutAct_9fa48("11766") ? req.query.filter && '' : stryMutAct_9fa48("11765") ? false : stryMutAct_9fa48("11764") ? true : (stryCov_9fa48("11764", "11765", "11766"), req.query.filter || (stryMutAct_9fa48("11767") ? "Stryker was here!" : (stryCov_9fa48("11767"), '')));
    try {
      if (stryMutAct_9fa48("11768")) {
        {}
      } else {
        stryCov_9fa48("11768");
        const unreadCount = await topics.getTotalUnread(req.uid, filter);
        res.json(unreadCount);
      }
    } catch (err) {
      if (stryMutAct_9fa48("11769")) {
        {}
      } else {
        stryCov_9fa48("11769");
        next(err);
      }
    }
  }
};