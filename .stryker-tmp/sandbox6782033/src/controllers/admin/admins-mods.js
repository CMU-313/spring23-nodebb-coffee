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
const db = require('../../database');
const groups = require('../../groups');
const categories = require('../../categories');
const user = require('../../user');
const meta = require('../../meta');
const pagination = require('../../pagination');
const categoriesController = require('./categories');
const AdminsMods = module.exports;
AdminsMods.get = async function (req, res) {
  if (stryMutAct_9fa48("6576")) {
    {}
  } else {
    stryCov_9fa48("6576");
    const rootCid = stryMutAct_9fa48("6579") ? parseInt(req.query.cid, 10) && 0 : stryMutAct_9fa48("6578") ? false : stryMutAct_9fa48("6577") ? true : (stryCov_9fa48("6577", "6578", "6579"), parseInt(req.query.cid, 10) || 0);
    const cidsCount = await db.sortedSetCard(stryMutAct_9fa48("6580") ? `` : (stryCov_9fa48("6580"), `cid:${rootCid}:children`));
    const pageCount = Math.max(1, Math.ceil(stryMutAct_9fa48("6581") ? cidsCount * meta.config.categoriesPerPage : (stryCov_9fa48("6581"), cidsCount / meta.config.categoriesPerPage)));
    const page = Math.min(stryMutAct_9fa48("6584") ? parseInt(req.query.page, 10) && 1 : stryMutAct_9fa48("6583") ? false : stryMutAct_9fa48("6582") ? true : (stryCov_9fa48("6582", "6583", "6584"), parseInt(req.query.page, 10) || 1), pageCount);
    const start = Math.max(0, stryMutAct_9fa48("6585") ? (page - 1) / meta.config.categoriesPerPage : (stryCov_9fa48("6585"), (stryMutAct_9fa48("6586") ? page + 1 : (stryCov_9fa48("6586"), page - 1)) * meta.config.categoriesPerPage));
    const stop = stryMutAct_9fa48("6587") ? start + meta.config.categoriesPerPage + 1 : (stryCov_9fa48("6587"), (stryMutAct_9fa48("6588") ? start - meta.config.categoriesPerPage : (stryCov_9fa48("6588"), start + meta.config.categoriesPerPage)) - 1);
    const cids = await db.getSortedSetRange(stryMutAct_9fa48("6589") ? `` : (stryCov_9fa48("6589"), `cid:${rootCid}:children`), start, stop);
    const selectedCategory = rootCid ? await categories.getCategoryData(rootCid) : null;
    const pageCategories = await categories.getCategoriesData(cids);
    const [admins, globalMods, moderators, crumbs] = await Promise.all(stryMutAct_9fa48("6590") ? [] : (stryCov_9fa48("6590"), [groups.get(stryMutAct_9fa48("6591") ? "" : (stryCov_9fa48("6591"), 'administrators'), stryMutAct_9fa48("6592") ? {} : (stryCov_9fa48("6592"), {
      uid: req.uid
    })), groups.get(stryMutAct_9fa48("6593") ? "" : (stryCov_9fa48("6593"), 'Global Moderators'), stryMutAct_9fa48("6594") ? {} : (stryCov_9fa48("6594"), {
      uid: req.uid
    })), getModeratorsOfCategories(pageCategories), categoriesController.buildBreadCrumbs(selectedCategory, stryMutAct_9fa48("6595") ? "" : (stryCov_9fa48("6595"), '/admin/manage/admins-mods'))]));
    res.render(stryMutAct_9fa48("6596") ? "" : (stryCov_9fa48("6596"), 'admin/manage/admins-mods'), stryMutAct_9fa48("6597") ? {} : (stryCov_9fa48("6597"), {
      admins: admins,
      globalMods: globalMods,
      categoryMods: moderators,
      selectedCategory: selectedCategory,
      pagination: pagination.create(page, pageCount, req.query),
      breadcrumbs: crumbs
    }));
  }
};
async function getModeratorsOfCategories(categoryData) {
  if (stryMutAct_9fa48("6598")) {
    {}
  } else {
    stryCov_9fa48("6598");
    const [moderatorUids, childrenCounts] = await Promise.all(stryMutAct_9fa48("6599") ? [] : (stryCov_9fa48("6599"), [categories.getModeratorUids(categoryData.map(stryMutAct_9fa48("6600") ? () => undefined : (stryCov_9fa48("6600"), c => c.cid))), db.sortedSetsCard(categoryData.map(stryMutAct_9fa48("6601") ? () => undefined : (stryCov_9fa48("6601"), c => stryMutAct_9fa48("6602") ? `` : (stryCov_9fa48("6602"), `cid:${c.cid}:children`))))]));
    const uids = _.uniq(_.flatten(moderatorUids));
    const moderatorData = await user.getUsersFields(uids, stryMutAct_9fa48("6603") ? [] : (stryCov_9fa48("6603"), [stryMutAct_9fa48("6604") ? "" : (stryCov_9fa48("6604"), 'uid'), stryMutAct_9fa48("6605") ? "" : (stryCov_9fa48("6605"), 'username'), stryMutAct_9fa48("6606") ? "" : (stryCov_9fa48("6606"), 'userslug'), stryMutAct_9fa48("6607") ? "" : (stryCov_9fa48("6607"), 'picture')]));
    const moderatorMap = _.zipObject(uids, moderatorData);
    categoryData.forEach((c, index) => {
      if (stryMutAct_9fa48("6608")) {
        {}
      } else {
        stryCov_9fa48("6608");
        c.moderators = moderatorUids[index].map(stryMutAct_9fa48("6609") ? () => undefined : (stryCov_9fa48("6609"), uid => moderatorMap[uid]));
        c.subCategoryCount = childrenCounts[index];
      }
    });
    return categoryData;
  }
}