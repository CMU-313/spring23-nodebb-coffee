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
const helpers = require('../helpers');
const accountHelpers = require('./helpers');
const pagination = require('../../pagination');
const user = require('../../user');
const plugins = require('../../plugins');
const blocksController = module.exports;
blocksController.getBlocks = async function (req, res, next) {
  if (stryMutAct_9fa48("5127")) {
    {}
  } else {
    stryCov_9fa48("5127");
    const page = stryMutAct_9fa48("5130") ? parseInt(req.query.page, 10) && 1 : stryMutAct_9fa48("5129") ? false : stryMutAct_9fa48("5128") ? true : (stryCov_9fa48("5128", "5129", "5130"), parseInt(req.query.page, 10) || 1);
    const resultsPerPage = 50;
    const start = stryMutAct_9fa48("5131") ? Math.max(0, page - 1) / resultsPerPage : (stryCov_9fa48("5131"), Math.max(0, stryMutAct_9fa48("5132") ? page + 1 : (stryCov_9fa48("5132"), page - 1)) * resultsPerPage);
    const stop = stryMutAct_9fa48("5133") ? start + resultsPerPage + 1 : (stryCov_9fa48("5133"), (stryMutAct_9fa48("5134") ? start - resultsPerPage : (stryCov_9fa48("5134"), start + resultsPerPage)) - 1);
    const userData = await accountHelpers.getUserDataByUserSlug(req.params.userslug, req.uid, req.query);
    if (stryMutAct_9fa48("5137") ? false : stryMutAct_9fa48("5136") ? true : stryMutAct_9fa48("5135") ? userData : (stryCov_9fa48("5135", "5136", "5137"), !userData)) {
      if (stryMutAct_9fa48("5138")) {
        {}
      } else {
        stryCov_9fa48("5138");
        return next();
      }
    }
    const uids = await user.blocks.list(userData.uid);
    const data = await plugins.hooks.fire(stryMutAct_9fa48("5139") ? "" : (stryCov_9fa48("5139"), 'filter:user.getBlocks'), stryMutAct_9fa48("5140") ? {} : (stryCov_9fa48("5140"), {
      uids: uids,
      uid: userData.uid,
      start: start,
      stop: stop
    }));
    data.uids = stryMutAct_9fa48("5141") ? data.uids : (stryCov_9fa48("5141"), data.uids.slice(start, stryMutAct_9fa48("5142") ? stop - 1 : (stryCov_9fa48("5142"), stop + 1)));
    userData.users = await user.getUsers(data.uids, req.uid);
    userData.title = stryMutAct_9fa48("5143") ? `` : (stryCov_9fa48("5143"), `[[pages:account/blocks, ${userData.username}]]`);
    const pageCount = Math.ceil(stryMutAct_9fa48("5144") ? userData.counts.blocks * resultsPerPage : (stryCov_9fa48("5144"), userData.counts.blocks / resultsPerPage));
    userData.pagination = pagination.create(page, pageCount);
    userData.breadcrumbs = helpers.buildBreadcrumbs(stryMutAct_9fa48("5145") ? [] : (stryCov_9fa48("5145"), [stryMutAct_9fa48("5146") ? {} : (stryCov_9fa48("5146"), {
      text: userData.username,
      url: stryMutAct_9fa48("5147") ? `` : (stryCov_9fa48("5147"), `/user/${userData.userslug}`)
    }), stryMutAct_9fa48("5148") ? {} : (stryCov_9fa48("5148"), {
      text: stryMutAct_9fa48("5149") ? "" : (stryCov_9fa48("5149"), '[[user:blocks]]')
    })]));
    res.render(stryMutAct_9fa48("5150") ? "" : (stryCov_9fa48("5150"), 'account/blocks'), userData);
  }
};