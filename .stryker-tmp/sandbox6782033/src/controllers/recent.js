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
const user = require('../user');
const categories = require('../categories');
const topics = require('../topics');
const meta = require('../meta');
const helpers = require('./helpers');
const pagination = require('../pagination');
const privileges = require('../privileges');
const recentController = module.exports;
const relative_path = nconf.get(stryMutAct_9fa48("10886") ? "" : (stryCov_9fa48("10886"), 'relative_path'));
recentController.get = async function (req, res, next) {
  if (stryMutAct_9fa48("10887")) {
    {}
  } else {
    stryCov_9fa48("10887");
    const data = await recentController.getData(req, stryMutAct_9fa48("10888") ? "" : (stryCov_9fa48("10888"), 'recent'), stryMutAct_9fa48("10889") ? "" : (stryCov_9fa48("10889"), 'recent'));
    if (stryMutAct_9fa48("10892") ? false : stryMutAct_9fa48("10891") ? true : stryMutAct_9fa48("10890") ? data : (stryCov_9fa48("10890", "10891", "10892"), !data)) {
      if (stryMutAct_9fa48("10893")) {
        {}
      } else {
        stryCov_9fa48("10893");
        return next();
      }
    }
    res.render(stryMutAct_9fa48("10894") ? "" : (stryCov_9fa48("10894"), 'recent'), data);
  }
};
recentController.getData = async function (req, url, sort) {
  if (stryMutAct_9fa48("10895")) {
    {}
  } else {
    stryCov_9fa48("10895");
    const page = stryMutAct_9fa48("10898") ? parseInt(req.query.page, 10) && 1 : stryMutAct_9fa48("10897") ? false : stryMutAct_9fa48("10896") ? true : (stryCov_9fa48("10896", "10897", "10898"), parseInt(req.query.page, 10) || 1);
    let term = helpers.terms[req.query.term];
    const {
      cid,
      tags
    } = req.query;
    const filter = stryMutAct_9fa48("10901") ? req.query.filter && '' : stryMutAct_9fa48("10900") ? false : stryMutAct_9fa48("10899") ? true : (stryCov_9fa48("10899", "10900", "10901"), req.query.filter || (stryMutAct_9fa48("10902") ? "Stryker was here!" : (stryCov_9fa48("10902"), '')));
    if (stryMutAct_9fa48("10905") ? !term || req.query.term : stryMutAct_9fa48("10904") ? false : stryMutAct_9fa48("10903") ? true : (stryCov_9fa48("10903", "10904", "10905"), (stryMutAct_9fa48("10906") ? term : (stryCov_9fa48("10906"), !term)) && req.query.term)) {
      if (stryMutAct_9fa48("10907")) {
        {}
      } else {
        stryCov_9fa48("10907");
        return null;
      }
    }
    term = stryMutAct_9fa48("10910") ? term && 'alltime' : stryMutAct_9fa48("10909") ? false : stryMutAct_9fa48("10908") ? true : (stryCov_9fa48("10908", "10909", "10910"), term || (stryMutAct_9fa48("10911") ? "" : (stryCov_9fa48("10911"), 'alltime')));
    const [settings, categoryData, rssToken, canPost, isPrivileged] = await Promise.all(stryMutAct_9fa48("10912") ? [] : (stryCov_9fa48("10912"), [user.getSettings(req.uid), helpers.getSelectedCategory(cid), user.auth.getFeedToken(req.uid), canPostTopic(req.uid), user.isPrivileged(req.uid)]));
    const start = Math.max(0, stryMutAct_9fa48("10913") ? (page - 1) / settings.topicsPerPage : (stryCov_9fa48("10913"), (stryMutAct_9fa48("10914") ? page + 1 : (stryCov_9fa48("10914"), page - 1)) * settings.topicsPerPage));
    const stop = stryMutAct_9fa48("10915") ? start + settings.topicsPerPage + 1 : (stryCov_9fa48("10915"), (stryMutAct_9fa48("10916") ? start - settings.topicsPerPage : (stryCov_9fa48("10916"), start + settings.topicsPerPage)) - 1);
    const data = await topics.getSortedTopics(stryMutAct_9fa48("10917") ? {} : (stryCov_9fa48("10917"), {
      cids: cid,
      tags: tags,
      uid: req.uid,
      start: start,
      stop: stop,
      filter: filter,
      term: term,
      sort: sort,
      floatPinned: req.query.pinned,
      query: req.query
    }));
    const isDisplayedAsHome = stryMutAct_9fa48("10918") ? req.originalUrl.startsWith(`${relative_path}/api/${url}`) || req.originalUrl.startsWith(`${relative_path}/${url}`) : (stryCov_9fa48("10918"), !(stryMutAct_9fa48("10921") ? req.originalUrl.startsWith(`${relative_path}/api/${url}`) && req.originalUrl.startsWith(`${relative_path}/${url}`) : stryMutAct_9fa48("10920") ? false : stryMutAct_9fa48("10919") ? true : (stryCov_9fa48("10919", "10920", "10921"), (stryMutAct_9fa48("10922") ? req.originalUrl.endsWith(`${relative_path}/api/${url}`) : (stryCov_9fa48("10922"), req.originalUrl.startsWith(stryMutAct_9fa48("10923") ? `` : (stryCov_9fa48("10923"), `${relative_path}/api/${url}`)))) || (stryMutAct_9fa48("10924") ? req.originalUrl.endsWith(`${relative_path}/${url}`) : (stryCov_9fa48("10924"), req.originalUrl.startsWith(stryMutAct_9fa48("10925") ? `` : (stryCov_9fa48("10925"), `${relative_path}/${url}`)))))));
    const baseUrl = isDisplayedAsHome ? stryMutAct_9fa48("10926") ? "Stryker was here!" : (stryCov_9fa48("10926"), '') : url;
    if (stryMutAct_9fa48("10928") ? false : stryMutAct_9fa48("10927") ? true : (stryCov_9fa48("10927", "10928"), isDisplayedAsHome)) {
      if (stryMutAct_9fa48("10929")) {
        {}
      } else {
        stryCov_9fa48("10929");
        data.title = stryMutAct_9fa48("10932") ? meta.config.homePageTitle && '[[pages:home]]' : stryMutAct_9fa48("10931") ? false : stryMutAct_9fa48("10930") ? true : (stryCov_9fa48("10930", "10931", "10932"), meta.config.homePageTitle || (stryMutAct_9fa48("10933") ? "" : (stryCov_9fa48("10933"), '[[pages:home]]')));
      }
    } else {
      if (stryMutAct_9fa48("10934")) {
        {}
      } else {
        stryCov_9fa48("10934");
        data.title = stryMutAct_9fa48("10935") ? `` : (stryCov_9fa48("10935"), `[[pages:${url}]]`);
        data.breadcrumbs = helpers.buildBreadcrumbs(stryMutAct_9fa48("10936") ? [] : (stryCov_9fa48("10936"), [stryMutAct_9fa48("10937") ? {} : (stryCov_9fa48("10937"), {
          text: stryMutAct_9fa48("10938") ? `` : (stryCov_9fa48("10938"), `[[${url}:title]]`)
        })]));
      }
    }
    data.canPost = canPost;
    data.showSelect = isPrivileged;
    data.showTopicTools = isPrivileged;
    data.allCategoriesUrl = stryMutAct_9fa48("10939") ? baseUrl - helpers.buildQueryString(req.query, 'cid', '') : (stryCov_9fa48("10939"), baseUrl + helpers.buildQueryString(req.query, stryMutAct_9fa48("10940") ? "" : (stryCov_9fa48("10940"), 'cid'), stryMutAct_9fa48("10941") ? "Stryker was here!" : (stryCov_9fa48("10941"), '')));
    data.selectedCategory = categoryData.selectedCategory;
    data.selectedCids = categoryData.selectedCids;
    data[stryMutAct_9fa48("10942") ? "" : (stryCov_9fa48("10942"), 'feeds:disableRSS')] = stryMutAct_9fa48("10945") ? meta.config['feeds:disableRSS'] && 0 : stryMutAct_9fa48("10944") ? false : stryMutAct_9fa48("10943") ? true : (stryCov_9fa48("10943", "10944", "10945"), meta.config[stryMutAct_9fa48("10946") ? "" : (stryCov_9fa48("10946"), 'feeds:disableRSS')] || 0);
    data.rssFeedUrl = stryMutAct_9fa48("10947") ? `` : (stryCov_9fa48("10947"), `${relative_path}/${url}.rss`);
    if (stryMutAct_9fa48("10949") ? false : stryMutAct_9fa48("10948") ? true : (stryCov_9fa48("10948", "10949"), req.loggedIn)) {
      if (stryMutAct_9fa48("10950")) {
        {}
      } else {
        stryCov_9fa48("10950");
        data.rssFeedUrl += stryMutAct_9fa48("10951") ? `` : (stryCov_9fa48("10951"), `?uid=${req.uid}&token=${rssToken}`);
      }
    }
    data.filters = helpers.buildFilters(baseUrl, filter, req.query);
    data.selectedFilter = data.filters.find(stryMutAct_9fa48("10952") ? () => undefined : (stryCov_9fa48("10952"), filter => stryMutAct_9fa48("10955") ? filter || filter.selected : stryMutAct_9fa48("10954") ? false : stryMutAct_9fa48("10953") ? true : (stryCov_9fa48("10953", "10954", "10955"), filter && filter.selected)));
    data.terms = helpers.buildTerms(baseUrl, term, req.query);
    data.selectedTerm = data.terms.find(stryMutAct_9fa48("10956") ? () => undefined : (stryCov_9fa48("10956"), term => stryMutAct_9fa48("10959") ? term || term.selected : stryMutAct_9fa48("10958") ? false : stryMutAct_9fa48("10957") ? true : (stryCov_9fa48("10957", "10958", "10959"), term && term.selected)));
    const pageCount = Math.max(1, Math.ceil(stryMutAct_9fa48("10960") ? data.topicCount * settings.topicsPerPage : (stryCov_9fa48("10960"), data.topicCount / settings.topicsPerPage)));
    data.pagination = pagination.create(page, pageCount, req.query);
    helpers.addLinkTags(stryMutAct_9fa48("10961") ? {} : (stryCov_9fa48("10961"), {
      url: url,
      res: req.res,
      tags: data.pagination.rel
    }));
    return data;
  }
};
async function canPostTopic(uid) {
  if (stryMutAct_9fa48("10962")) {
    {}
  } else {
    stryCov_9fa48("10962");
    let cids = await categories.getAllCidsFromSet(stryMutAct_9fa48("10963") ? "" : (stryCov_9fa48("10963"), 'categories:cid'));
    cids = await privileges.categories.filterCids(stryMutAct_9fa48("10964") ? "" : (stryCov_9fa48("10964"), 'topics:create'), cids, uid);
    return stryMutAct_9fa48("10968") ? cids.length <= 0 : stryMutAct_9fa48("10967") ? cids.length >= 0 : stryMutAct_9fa48("10966") ? false : stryMutAct_9fa48("10965") ? true : (stryCov_9fa48("10965", "10966", "10967", "10968"), cids.length > 0);
  }
}
require('../promisify')(recentController, stryMutAct_9fa48("10969") ? [] : (stryCov_9fa48("10969"), [stryMutAct_9fa48("10970") ? "" : (stryCov_9fa48("10970"), 'get')]));