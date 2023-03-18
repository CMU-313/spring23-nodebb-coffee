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
const validator = require('validator');
const nconf = require('nconf');
const meta = require('../meta');
const user = require('../user');
const categories = require('../categories');
const topics = require('../topics');
const privileges = require('../privileges');
const pagination = require('../pagination');
const utils = require('../utils');
const helpers = require('./helpers');
const tagsController = module.exports;
tagsController.getTag = async function (req, res) {
  if (stryMutAct_9fa48("11179")) {
    {}
  } else {
    stryCov_9fa48("11179");
    const tag = validator.escape(utils.cleanUpTag(req.params.tag, meta.config.maximumTagLength));
    const page = stryMutAct_9fa48("11182") ? parseInt(req.query.page, 10) && 1 : stryMutAct_9fa48("11181") ? false : stryMutAct_9fa48("11180") ? true : (stryCov_9fa48("11180", "11181", "11182"), parseInt(req.query.page, 10) || 1);
    const cid = (stryMutAct_9fa48("11185") ? Array.isArray(req.query.cid) && !req.query.cid : stryMutAct_9fa48("11184") ? false : stryMutAct_9fa48("11183") ? true : (stryCov_9fa48("11183", "11184", "11185"), Array.isArray(req.query.cid) || (stryMutAct_9fa48("11186") ? req.query.cid : (stryCov_9fa48("11186"), !req.query.cid)))) ? req.query.cid : stryMutAct_9fa48("11187") ? [] : (stryCov_9fa48("11187"), [req.query.cid]);
    const templateData = stryMutAct_9fa48("11188") ? {} : (stryCov_9fa48("11188"), {
      topics: stryMutAct_9fa48("11189") ? ["Stryker was here"] : (stryCov_9fa48("11189"), []),
      tag: tag,
      breadcrumbs: helpers.buildBreadcrumbs(stryMutAct_9fa48("11190") ? [] : (stryCov_9fa48("11190"), [stryMutAct_9fa48("11191") ? {} : (stryCov_9fa48("11191"), {
        text: stryMutAct_9fa48("11192") ? "" : (stryCov_9fa48("11192"), '[[tags:tags]]'),
        url: stryMutAct_9fa48("11193") ? "" : (stryCov_9fa48("11193"), '/tags')
      }), stryMutAct_9fa48("11194") ? {} : (stryCov_9fa48("11194"), {
        text: tag
      })])),
      title: stryMutAct_9fa48("11195") ? `` : (stryCov_9fa48("11195"), `[[pages:tag, ${tag}]]`)
    });
    const [settings, cids, categoryData, isPrivileged] = await Promise.all(stryMutAct_9fa48("11196") ? [] : (stryCov_9fa48("11196"), [user.getSettings(req.uid), stryMutAct_9fa48("11199") ? cid && categories.getCidsByPrivilege('categories:cid', req.uid, 'topics:read') : stryMutAct_9fa48("11198") ? false : stryMutAct_9fa48("11197") ? true : (stryCov_9fa48("11197", "11198", "11199"), cid || categories.getCidsByPrivilege(stryMutAct_9fa48("11200") ? "" : (stryCov_9fa48("11200"), 'categories:cid'), req.uid, stryMutAct_9fa48("11201") ? "" : (stryCov_9fa48("11201"), 'topics:read'))), helpers.getSelectedCategory(cid), user.isPrivileged(req.uid)]));
    const start = Math.max(0, stryMutAct_9fa48("11202") ? (page - 1) / settings.topicsPerPage : (stryCov_9fa48("11202"), (stryMutAct_9fa48("11203") ? page + 1 : (stryCov_9fa48("11203"), page - 1)) * settings.topicsPerPage));
    const stop = stryMutAct_9fa48("11204") ? start + settings.topicsPerPage + 1 : (stryCov_9fa48("11204"), (stryMutAct_9fa48("11205") ? start - settings.topicsPerPage : (stryCov_9fa48("11205"), start + settings.topicsPerPage)) - 1);
    const [topicCount, tids] = await Promise.all(stryMutAct_9fa48("11206") ? [] : (stryCov_9fa48("11206"), [topics.getTagTopicCount(tag, cids), topics.getTagTidsByCids(tag, cids, start, stop)]));
    templateData.topics = await topics.getTopics(tids, req.uid);
    templateData.showSelect = isPrivileged;
    templateData.showTopicTools = isPrivileged;
    templateData.allCategoriesUrl = stryMutAct_9fa48("11207") ? `` : (stryCov_9fa48("11207"), `tags/${tag}${helpers.buildQueryString(req.query, stryMutAct_9fa48("11208") ? "" : (stryCov_9fa48("11208"), 'cid'), stryMutAct_9fa48("11209") ? "Stryker was here!" : (stryCov_9fa48("11209"), ''))}`);
    templateData.selectedCategory = categoryData.selectedCategory;
    templateData.selectedCids = categoryData.selectedCids;
    topics.calculateTopicIndices(templateData.topics, start);
    res.locals.metaTags = stryMutAct_9fa48("11210") ? [] : (stryCov_9fa48("11210"), [stryMutAct_9fa48("11211") ? {} : (stryCov_9fa48("11211"), {
      name: stryMutAct_9fa48("11212") ? "" : (stryCov_9fa48("11212"), 'title'),
      content: tag
    }), stryMutAct_9fa48("11213") ? {} : (stryCov_9fa48("11213"), {
      property: stryMutAct_9fa48("11214") ? "" : (stryCov_9fa48("11214"), 'og:title'),
      content: tag
    })]);
    const pageCount = Math.max(1, Math.ceil(stryMutAct_9fa48("11215") ? topicCount * settings.topicsPerPage : (stryCov_9fa48("11215"), topicCount / settings.topicsPerPage)));
    templateData.pagination = pagination.create(page, pageCount, req.query);
    helpers.addLinkTags(stryMutAct_9fa48("11216") ? {} : (stryCov_9fa48("11216"), {
      url: stryMutAct_9fa48("11217") ? `` : (stryCov_9fa48("11217"), `tags/${tag}`),
      res: req.res,
      tags: templateData.pagination.rel
    }));
    templateData[stryMutAct_9fa48("11218") ? "" : (stryCov_9fa48("11218"), 'feeds:disableRSS')] = meta.config[stryMutAct_9fa48("11219") ? "" : (stryCov_9fa48("11219"), 'feeds:disableRSS')];
    templateData.rssFeedUrl = stryMutAct_9fa48("11220") ? `` : (stryCov_9fa48("11220"), `${nconf.get(stryMutAct_9fa48("11221") ? "" : (stryCov_9fa48("11221"), 'relative_path'))}/tags/${tag}.rss`);
    res.render(stryMutAct_9fa48("11222") ? "" : (stryCov_9fa48("11222"), 'tag'), templateData);
  }
};
tagsController.getTags = async function (req, res) {
  if (stryMutAct_9fa48("11223")) {
    {}
  } else {
    stryCov_9fa48("11223");
    const cids = await categories.getCidsByPrivilege(stryMutAct_9fa48("11224") ? "" : (stryCov_9fa48("11224"), 'categories:cid'), req.uid, stryMutAct_9fa48("11225") ? "" : (stryCov_9fa48("11225"), 'topics:read'));
    const [canSearch, tags] = await Promise.all(stryMutAct_9fa48("11226") ? [] : (stryCov_9fa48("11226"), [privileges.global.can(stryMutAct_9fa48("11227") ? "" : (stryCov_9fa48("11227"), 'search:tags'), req.uid), topics.getCategoryTagsData(cids, 0, 99)]));
    res.render(stryMutAct_9fa48("11228") ? "" : (stryCov_9fa48("11228"), 'tags'), stryMutAct_9fa48("11229") ? {} : (stryCov_9fa48("11229"), {
      tags: stryMutAct_9fa48("11230") ? tags : (stryCov_9fa48("11230"), tags.filter(Boolean)),
      displayTagSearch: canSearch,
      nextStart: 100,
      breadcrumbs: helpers.buildBreadcrumbs(stryMutAct_9fa48("11231") ? [] : (stryCov_9fa48("11231"), [stryMutAct_9fa48("11232") ? {} : (stryCov_9fa48("11232"), {
        text: stryMutAct_9fa48("11233") ? "" : (stryCov_9fa48("11233"), '[[tags:tags]]')
      })])),
      title: stryMutAct_9fa48("11234") ? "" : (stryCov_9fa48("11234"), '[[pages:tags]]')
    }));
  }
};