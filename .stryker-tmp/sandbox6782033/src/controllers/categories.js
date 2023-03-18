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
const _ = require('lodash');
const categories = require('../categories');
const meta = require('../meta');
const pagination = require('../pagination');
const helpers = require('./helpers');
const privileges = require('../privileges');
const categoriesController = module.exports;
categoriesController.list = async function (req, res) {
  if (stryMutAct_9fa48("8839")) {
    {}
  } else {
    stryCov_9fa48("8839");
    res.locals.metaTags = stryMutAct_9fa48("8840") ? [] : (stryCov_9fa48("8840"), [stryMutAct_9fa48("8841") ? {} : (stryCov_9fa48("8841"), {
      name: stryMutAct_9fa48("8842") ? "" : (stryCov_9fa48("8842"), 'title'),
      content: String(stryMutAct_9fa48("8845") ? meta.config.title && 'NodeBB' : stryMutAct_9fa48("8844") ? false : stryMutAct_9fa48("8843") ? true : (stryCov_9fa48("8843", "8844", "8845"), meta.config.title || (stryMutAct_9fa48("8846") ? "" : (stryCov_9fa48("8846"), 'NodeBB'))))
    }), stryMutAct_9fa48("8847") ? {} : (stryCov_9fa48("8847"), {
      property: stryMutAct_9fa48("8848") ? "" : (stryCov_9fa48("8848"), 'og:type'),
      content: stryMutAct_9fa48("8849") ? "" : (stryCov_9fa48("8849"), 'website')
    })]);
    const allRootCids = await categories.getAllCidsFromSet(stryMutAct_9fa48("8850") ? "" : (stryCov_9fa48("8850"), 'cid:0:children'));
    const rootCids = await privileges.categories.filterCids(stryMutAct_9fa48("8851") ? "" : (stryCov_9fa48("8851"), 'find'), allRootCids, req.uid);
    const pageCount = Math.max(1, Math.ceil(stryMutAct_9fa48("8852") ? rootCids.length * meta.config.categoriesPerPage : (stryCov_9fa48("8852"), rootCids.length / meta.config.categoriesPerPage)));
    const page = Math.min(stryMutAct_9fa48("8855") ? parseInt(req.query.page, 10) && 1 : stryMutAct_9fa48("8854") ? false : stryMutAct_9fa48("8853") ? true : (stryCov_9fa48("8853", "8854", "8855"), parseInt(req.query.page, 10) || 1), pageCount);
    const start = Math.max(0, stryMutAct_9fa48("8856") ? (page - 1) / meta.config.categoriesPerPage : (stryCov_9fa48("8856"), (stryMutAct_9fa48("8857") ? page + 1 : (stryCov_9fa48("8857"), page - 1)) * meta.config.categoriesPerPage));
    const stop = stryMutAct_9fa48("8858") ? start + meta.config.categoriesPerPage + 1 : (stryCov_9fa48("8858"), (stryMutAct_9fa48("8859") ? start - meta.config.categoriesPerPage : (stryCov_9fa48("8859"), start + meta.config.categoriesPerPage)) - 1);
    const pageCids = stryMutAct_9fa48("8860") ? rootCids : (stryCov_9fa48("8860"), rootCids.slice(start, stryMutAct_9fa48("8861") ? stop - 1 : (stryCov_9fa48("8861"), stop + 1)));
    const allChildCids = _.flatten(await Promise.all(pageCids.map(categories.getChildrenCids)));
    const childCids = await privileges.categories.filterCids(stryMutAct_9fa48("8862") ? "" : (stryCov_9fa48("8862"), 'find'), allChildCids, req.uid);
    const categoryData = await categories.getCategories(pageCids.concat(childCids), req.uid);
    const tree = categories.getTree(categoryData, 0);
    await categories.getRecentTopicReplies(categoryData, req.uid, req.query);
    const data = stryMutAct_9fa48("8863") ? {} : (stryCov_9fa48("8863"), {
      title: stryMutAct_9fa48("8866") ? meta.config.homePageTitle && '[[pages:home]]' : stryMutAct_9fa48("8865") ? false : stryMutAct_9fa48("8864") ? true : (stryCov_9fa48("8864", "8865", "8866"), meta.config.homePageTitle || (stryMutAct_9fa48("8867") ? "" : (stryCov_9fa48("8867"), '[[pages:home]]'))),
      selectCategoryLabel: stryMutAct_9fa48("8868") ? "" : (stryCov_9fa48("8868"), '[[pages:categories]]'),
      categories: tree,
      pagination: pagination.create(page, pageCount, req.query)
    });
    data.categories.forEach(category => {
      if (stryMutAct_9fa48("8869")) {
        {}
      } else {
        stryCov_9fa48("8869");
        if (stryMutAct_9fa48("8871") ? false : stryMutAct_9fa48("8870") ? true : (stryCov_9fa48("8870", "8871"), category)) {
          if (stryMutAct_9fa48("8872")) {
            {}
          } else {
            stryCov_9fa48("8872");
            helpers.trimChildren(category);
            helpers.setCategoryTeaser(category);
          }
        }
      }
    });
    if (stryMutAct_9fa48("8875") ? req.originalUrl.startsWith(`${nconf.get('relative_path')}/api/categories`) && req.originalUrl.startsWith(`${nconf.get('relative_path')}/categories`) : stryMutAct_9fa48("8874") ? false : stryMutAct_9fa48("8873") ? true : (stryCov_9fa48("8873", "8874", "8875"), (stryMutAct_9fa48("8876") ? req.originalUrl.endsWith(`${nconf.get('relative_path')}/api/categories`) : (stryCov_9fa48("8876"), req.originalUrl.startsWith(stryMutAct_9fa48("8877") ? `` : (stryCov_9fa48("8877"), `${nconf.get(stryMutAct_9fa48("8878") ? "" : (stryCov_9fa48("8878"), 'relative_path'))}/api/categories`)))) || (stryMutAct_9fa48("8879") ? req.originalUrl.endsWith(`${nconf.get('relative_path')}/categories`) : (stryCov_9fa48("8879"), req.originalUrl.startsWith(stryMutAct_9fa48("8880") ? `` : (stryCov_9fa48("8880"), `${nconf.get(stryMutAct_9fa48("8881") ? "" : (stryCov_9fa48("8881"), 'relative_path'))}/categories`)))))) {
      if (stryMutAct_9fa48("8882")) {
        {}
      } else {
        stryCov_9fa48("8882");
        data.title = stryMutAct_9fa48("8883") ? "" : (stryCov_9fa48("8883"), '[[pages:categories]]');
        data.breadcrumbs = helpers.buildBreadcrumbs(stryMutAct_9fa48("8884") ? [] : (stryCov_9fa48("8884"), [stryMutAct_9fa48("8885") ? {} : (stryCov_9fa48("8885"), {
          text: data.title
        })]));
        res.locals.metaTags.push(stryMutAct_9fa48("8886") ? {} : (stryCov_9fa48("8886"), {
          property: stryMutAct_9fa48("8887") ? "" : (stryCov_9fa48("8887"), 'og:title'),
          content: stryMutAct_9fa48("8888") ? "" : (stryCov_9fa48("8888"), '[[pages:categories]]')
        }));
      }
    }
    res.render(stryMutAct_9fa48("8889") ? "" : (stryCov_9fa48("8889"), 'categories'), data);
  }
};