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
const _ = require('lodash');
const nconf = require('nconf');
const categories = require('../../categories');
const analytics = require('../../analytics');
const plugins = require('../../plugins');
const translator = require('../../translator');
const meta = require('../../meta');
const helpers = require('../helpers');
const pagination = require('../../pagination');
const categoriesController = module.exports;
categoriesController.get = async function (req, res, next) {
  if (stryMutAct_9fa48("6652")) {
    {}
  } else {
    stryCov_9fa48("6652");
    const [categoryData, parent, selectedData] = await Promise.all(stryMutAct_9fa48("6653") ? [] : (stryCov_9fa48("6653"), [categories.getCategories(stryMutAct_9fa48("6654") ? [] : (stryCov_9fa48("6654"), [req.params.category_id]), req.uid), categories.getParents(stryMutAct_9fa48("6655") ? [] : (stryCov_9fa48("6655"), [req.params.category_id])), helpers.getSelectedCategory(req.params.category_id)]));
    const category = categoryData[0];
    if (stryMutAct_9fa48("6658") ? false : stryMutAct_9fa48("6657") ? true : stryMutAct_9fa48("6656") ? category : (stryCov_9fa48("6656", "6657", "6658"), !category)) {
      if (stryMutAct_9fa48("6659")) {
        {}
      } else {
        stryCov_9fa48("6659");
        return next();
      }
    }
    category.parent = parent[0];
    const data = await plugins.hooks.fire(stryMutAct_9fa48("6660") ? "" : (stryCov_9fa48("6660"), 'filter:admin.category.get'), stryMutAct_9fa48("6661") ? {} : (stryCov_9fa48("6661"), {
      req: req,
      res: res,
      category: category,
      customClasses: stryMutAct_9fa48("6662") ? ["Stryker was here"] : (stryCov_9fa48("6662"), [])
    }));
    data.category.name = translator.escape(String(data.category.name));
    data.category.description = translator.escape(String(data.category.description));
    res.render(stryMutAct_9fa48("6663") ? "" : (stryCov_9fa48("6663"), 'admin/manage/category'), stryMutAct_9fa48("6664") ? {} : (stryCov_9fa48("6664"), {
      category: data.category,
      selectedCategory: selectedData.selectedCategory,
      customClasses: data.customClasses,
      postQueueEnabled: stryMutAct_9fa48("6665") ? !meta.config.postQueue : (stryCov_9fa48("6665"), !(stryMutAct_9fa48("6666") ? meta.config.postQueue : (stryCov_9fa48("6666"), !meta.config.postQueue)))
    }));
  }
};
categoriesController.getAll = async function (req, res) {
  if (stryMutAct_9fa48("6667")) {
    {}
  } else {
    stryCov_9fa48("6667");
    const rootCid = stryMutAct_9fa48("6670") ? parseInt(req.query.cid, 10) && 0 : stryMutAct_9fa48("6669") ? false : stryMutAct_9fa48("6668") ? true : (stryCov_9fa48("6668", "6669", "6670"), parseInt(req.query.cid, 10) || 0);
    async function getRootAndChildren() {
      if (stryMutAct_9fa48("6671")) {
        {}
      } else {
        stryCov_9fa48("6671");
        const rootChildren = await categories.getAllCidsFromSet(stryMutAct_9fa48("6672") ? `` : (stryCov_9fa48("6672"), `cid:${rootCid}:children`));
        const childCids = _.flatten(await Promise.all(rootChildren.map(stryMutAct_9fa48("6673") ? () => undefined : (stryCov_9fa48("6673"), cid => categories.getChildrenCids(cid)))));
        return (stryMutAct_9fa48("6674") ? [] : (stryCov_9fa48("6674"), [rootCid])).concat(rootChildren.concat(childCids));
      }
    }

    // Categories list will be rendered on client side with recursion, etc.
    const cids = await (rootCid ? getRootAndChildren() : categories.getAllCidsFromSet(stryMutAct_9fa48("6675") ? "" : (stryCov_9fa48("6675"), 'categories:cid')));
    let rootParent = 0;
    if (stryMutAct_9fa48("6677") ? false : stryMutAct_9fa48("6676") ? true : (stryCov_9fa48("6676", "6677"), rootCid)) {
      if (stryMutAct_9fa48("6678")) {
        {}
      } else {
        stryCov_9fa48("6678");
        rootParent = stryMutAct_9fa48("6681") ? (await categories.getCategoryField(rootCid, 'parentCid')) && 0 : stryMutAct_9fa48("6680") ? false : stryMutAct_9fa48("6679") ? true : (stryCov_9fa48("6679", "6680", "6681"), (await categories.getCategoryField(rootCid, stryMutAct_9fa48("6682") ? "" : (stryCov_9fa48("6682"), 'parentCid'))) || 0);
      }
    }
    const fields = stryMutAct_9fa48("6683") ? [] : (stryCov_9fa48("6683"), [stryMutAct_9fa48("6684") ? "" : (stryCov_9fa48("6684"), 'cid'), stryMutAct_9fa48("6685") ? "" : (stryCov_9fa48("6685"), 'name'), stryMutAct_9fa48("6686") ? "" : (stryCov_9fa48("6686"), 'icon'), stryMutAct_9fa48("6687") ? "" : (stryCov_9fa48("6687"), 'parentCid'), stryMutAct_9fa48("6688") ? "" : (stryCov_9fa48("6688"), 'disabled'), stryMutAct_9fa48("6689") ? "" : (stryCov_9fa48("6689"), 'link'), stryMutAct_9fa48("6690") ? "" : (stryCov_9fa48("6690"), 'order'), stryMutAct_9fa48("6691") ? "" : (stryCov_9fa48("6691"), 'color'), stryMutAct_9fa48("6692") ? "" : (stryCov_9fa48("6692"), 'bgColor'), stryMutAct_9fa48("6693") ? "" : (stryCov_9fa48("6693"), 'backgroundImage'), stryMutAct_9fa48("6694") ? "" : (stryCov_9fa48("6694"), 'imageClass'), stryMutAct_9fa48("6695") ? "" : (stryCov_9fa48("6695"), 'subCategoriesPerPage')]);
    const categoriesData = await categories.getCategoriesFields(cids, fields);
    const result = await plugins.hooks.fire(stryMutAct_9fa48("6696") ? "" : (stryCov_9fa48("6696"), 'filter:admin.categories.get'), stryMutAct_9fa48("6697") ? {} : (stryCov_9fa48("6697"), {
      categories: categoriesData,
      fields: fields
    }));
    let tree = categories.getTree(result.categories, rootParent);
    const cidsCount = (stryMutAct_9fa48("6700") ? rootCid || tree[0] : stryMutAct_9fa48("6699") ? false : stryMutAct_9fa48("6698") ? true : (stryCov_9fa48("6698", "6699", "6700"), rootCid && tree[0])) ? tree[0].children.length : tree.length;
    const pageCount = Math.max(1, Math.ceil(stryMutAct_9fa48("6701") ? cidsCount * meta.config.categoriesPerPage : (stryCov_9fa48("6701"), cidsCount / meta.config.categoriesPerPage)));
    const page = Math.min(stryMutAct_9fa48("6704") ? parseInt(req.query.page, 10) && 1 : stryMutAct_9fa48("6703") ? false : stryMutAct_9fa48("6702") ? true : (stryCov_9fa48("6702", "6703", "6704"), parseInt(req.query.page, 10) || 1), pageCount);
    const start = Math.max(0, stryMutAct_9fa48("6705") ? (page - 1) / meta.config.categoriesPerPage : (stryCov_9fa48("6705"), (stryMutAct_9fa48("6706") ? page + 1 : (stryCov_9fa48("6706"), page - 1)) * meta.config.categoriesPerPage));
    const stop = stryMutAct_9fa48("6707") ? start - meta.config.categoriesPerPage : (stryCov_9fa48("6707"), start + meta.config.categoriesPerPage);
    function trim(c) {
      if (stryMutAct_9fa48("6708")) {
        {}
      } else {
        stryCov_9fa48("6708");
        if (stryMutAct_9fa48("6710") ? false : stryMutAct_9fa48("6709") ? true : (stryCov_9fa48("6709", "6710"), c.children)) {
          if (stryMutAct_9fa48("6711")) {
            {}
          } else {
            stryCov_9fa48("6711");
            c.subCategoriesLeft = Math.max(0, stryMutAct_9fa48("6712") ? c.children.length + c.subCategoriesPerPage : (stryCov_9fa48("6712"), c.children.length - c.subCategoriesPerPage));
            c.hasMoreSubCategories = stryMutAct_9fa48("6716") ? c.children.length <= c.subCategoriesPerPage : stryMutAct_9fa48("6715") ? c.children.length >= c.subCategoriesPerPage : stryMutAct_9fa48("6714") ? false : stryMutAct_9fa48("6713") ? true : (stryCov_9fa48("6713", "6714", "6715", "6716"), c.children.length > c.subCategoriesPerPage);
            c.showMorePage = Math.ceil(stryMutAct_9fa48("6717") ? c.subCategoriesPerPage * meta.config.categoriesPerPage : (stryCov_9fa48("6717"), c.subCategoriesPerPage / meta.config.categoriesPerPage));
            c.children = stryMutAct_9fa48("6718") ? c.children : (stryCov_9fa48("6718"), c.children.slice(0, c.subCategoriesPerPage));
            c.children.forEach(stryMutAct_9fa48("6719") ? () => undefined : (stryCov_9fa48("6719"), c => trim(c)));
          }
        }
      }
    }
    if (stryMutAct_9fa48("6722") ? rootCid && tree[0] || Array.isArray(tree[0].children) : stryMutAct_9fa48("6721") ? false : stryMutAct_9fa48("6720") ? true : (stryCov_9fa48("6720", "6721", "6722"), (stryMutAct_9fa48("6724") ? rootCid || tree[0] : stryMutAct_9fa48("6723") ? true : (stryCov_9fa48("6723", "6724"), rootCid && tree[0])) && Array.isArray(tree[0].children))) {
      if (stryMutAct_9fa48("6725")) {
        {}
      } else {
        stryCov_9fa48("6725");
        tree[0].children = stryMutAct_9fa48("6726") ? tree[0].children : (stryCov_9fa48("6726"), tree[0].children.slice(start, stop));
        tree[0].children.forEach(trim);
      }
    } else {
      if (stryMutAct_9fa48("6727")) {
        {}
      } else {
        stryCov_9fa48("6727");
        tree = stryMutAct_9fa48("6728") ? tree : (stryCov_9fa48("6728"), tree.slice(start, stop));
        tree.forEach(trim);
      }
    }
    let selectedCategory;
    if (stryMutAct_9fa48("6730") ? false : stryMutAct_9fa48("6729") ? true : (stryCov_9fa48("6729", "6730"), rootCid)) {
      if (stryMutAct_9fa48("6731")) {
        {}
      } else {
        stryCov_9fa48("6731");
        selectedCategory = await categories.getCategoryData(rootCid);
      }
    }
    const crumbs = await buildBreadcrumbs(selectedCategory, stryMutAct_9fa48("6732") ? "" : (stryCov_9fa48("6732"), '/admin/manage/categories'));
    res.render(stryMutAct_9fa48("6733") ? "" : (stryCov_9fa48("6733"), 'admin/manage/categories'), stryMutAct_9fa48("6734") ? {} : (stryCov_9fa48("6734"), {
      categoriesTree: tree,
      selectedCategory: selectedCategory,
      breadcrumbs: crumbs,
      pagination: pagination.create(page, pageCount, req.query),
      categoriesPerPage: meta.config.categoriesPerPage
    }));
  }
};
async function buildBreadcrumbs(categoryData, url) {
  if (stryMutAct_9fa48("6735")) {
    {}
  } else {
    stryCov_9fa48("6735");
    if (stryMutAct_9fa48("6738") ? false : stryMutAct_9fa48("6737") ? true : stryMutAct_9fa48("6736") ? categoryData : (stryCov_9fa48("6736", "6737", "6738"), !categoryData)) {
      if (stryMutAct_9fa48("6739")) {
        {}
      } else {
        stryCov_9fa48("6739");
        return;
      }
    }
    const breadcrumbs = stryMutAct_9fa48("6740") ? [] : (stryCov_9fa48("6740"), [stryMutAct_9fa48("6741") ? {} : (stryCov_9fa48("6741"), {
      text: categoryData.name,
      url: stryMutAct_9fa48("6742") ? `` : (stryCov_9fa48("6742"), `${nconf.get(stryMutAct_9fa48("6743") ? "" : (stryCov_9fa48("6743"), 'relative_path'))}${url}?cid=${categoryData.cid}`),
      cid: categoryData.cid
    })]);
    const allCrumbs = await helpers.buildCategoryBreadcrumbs(categoryData.parentCid);
    const crumbs = stryMutAct_9fa48("6744") ? allCrumbs : (stryCov_9fa48("6744"), allCrumbs.filter(stryMutAct_9fa48("6745") ? () => undefined : (stryCov_9fa48("6745"), c => c.cid)));
    crumbs.forEach(c => {
      if (stryMutAct_9fa48("6746")) {
        {}
      } else {
        stryCov_9fa48("6746");
        c.url = stryMutAct_9fa48("6747") ? `` : (stryCov_9fa48("6747"), `${url}?cid=${c.cid}`);
      }
    });
    crumbs.unshift(stryMutAct_9fa48("6748") ? {} : (stryCov_9fa48("6748"), {
      text: stryMutAct_9fa48("6749") ? "" : (stryCov_9fa48("6749"), '[[admin/manage/categories:top-level]]'),
      url: url
    }));
    return crumbs.concat(breadcrumbs);
  }
}
categoriesController.buildBreadCrumbs = buildBreadcrumbs;
categoriesController.getAnalytics = async function (req, res) {
  if (stryMutAct_9fa48("6750")) {
    {}
  } else {
    stryCov_9fa48("6750");
    const [name, analyticsData] = await Promise.all(stryMutAct_9fa48("6751") ? [] : (stryCov_9fa48("6751"), [categories.getCategoryField(req.params.category_id, stryMutAct_9fa48("6752") ? "" : (stryCov_9fa48("6752"), 'name')), analytics.getCategoryAnalytics(req.params.category_id)]));
    res.render(stryMutAct_9fa48("6753") ? "" : (stryCov_9fa48("6753"), 'admin/manage/category-analytics'), stryMutAct_9fa48("6754") ? {} : (stryCov_9fa48("6754"), {
      name: name,
      analytics: analyticsData
    }));
  }
};