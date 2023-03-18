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
const helpers = require('../helpers');
const accountHelpers = require('./helpers');
const pagination = require('../../pagination');
const followController = module.exports;
followController.getFollowing = async function (req, res, next) {
  if (stryMutAct_9fa48("5466")) {
    {}
  } else {
    stryCov_9fa48("5466");
    await getFollow(stryMutAct_9fa48("5467") ? "" : (stryCov_9fa48("5467"), 'account/following'), stryMutAct_9fa48("5468") ? "" : (stryCov_9fa48("5468"), 'following'), req, res, next);
  }
};
followController.getFollowers = async function (req, res, next) {
  if (stryMutAct_9fa48("5469")) {
    {}
  } else {
    stryCov_9fa48("5469");
    await getFollow(stryMutAct_9fa48("5470") ? "" : (stryCov_9fa48("5470"), 'account/followers'), stryMutAct_9fa48("5471") ? "" : (stryCov_9fa48("5471"), 'followers'), req, res, next);
  }
};
async function getFollow(tpl, name, req, res, next) {
  if (stryMutAct_9fa48("5472")) {
    {}
  } else {
    stryCov_9fa48("5472");
    const userData = await accountHelpers.getUserDataByUserSlug(req.params.userslug, req.uid, req.query);
    if (stryMutAct_9fa48("5475") ? false : stryMutAct_9fa48("5474") ? true : stryMutAct_9fa48("5473") ? userData : (stryCov_9fa48("5473", "5474", "5475"), !userData)) {
      if (stryMutAct_9fa48("5476")) {
        {}
      } else {
        stryCov_9fa48("5476");
        return next();
      }
    }
    const page = stryMutAct_9fa48("5479") ? parseInt(req.query.page, 10) && 1 : stryMutAct_9fa48("5478") ? false : stryMutAct_9fa48("5477") ? true : (stryCov_9fa48("5477", "5478", "5479"), parseInt(req.query.page, 10) || 1);
    const resultsPerPage = 50;
    const start = stryMutAct_9fa48("5480") ? Math.max(0, page - 1) / resultsPerPage : (stryCov_9fa48("5480"), Math.max(0, stryMutAct_9fa48("5481") ? page + 1 : (stryCov_9fa48("5481"), page - 1)) * resultsPerPage);
    const stop = stryMutAct_9fa48("5482") ? start + resultsPerPage + 1 : (stryCov_9fa48("5482"), (stryMutAct_9fa48("5483") ? start - resultsPerPage : (stryCov_9fa48("5483"), start + resultsPerPage)) - 1);
    userData.title = stryMutAct_9fa48("5484") ? `` : (stryCov_9fa48("5484"), `[[pages:${tpl}, ${userData.username}]]`);
    const method = (stryMutAct_9fa48("5487") ? name !== 'following' : stryMutAct_9fa48("5486") ? false : stryMutAct_9fa48("5485") ? true : (stryCov_9fa48("5485", "5486", "5487"), name === (stryMutAct_9fa48("5488") ? "" : (stryCov_9fa48("5488"), 'following')))) ? stryMutAct_9fa48("5489") ? "" : (stryCov_9fa48("5489"), 'getFollowing') : stryMutAct_9fa48("5490") ? "" : (stryCov_9fa48("5490"), 'getFollowers');
    userData.users = await user[method](userData.uid, start, stop);
    const count = (stryMutAct_9fa48("5493") ? name !== 'following' : stryMutAct_9fa48("5492") ? false : stryMutAct_9fa48("5491") ? true : (stryCov_9fa48("5491", "5492", "5493"), name === (stryMutAct_9fa48("5494") ? "" : (stryCov_9fa48("5494"), 'following')))) ? userData.followingCount : userData.followerCount;
    const pageCount = Math.ceil(stryMutAct_9fa48("5495") ? count * resultsPerPage : (stryCov_9fa48("5495"), count / resultsPerPage));
    userData.pagination = pagination.create(page, pageCount);
    userData.breadcrumbs = helpers.buildBreadcrumbs(stryMutAct_9fa48("5496") ? [] : (stryCov_9fa48("5496"), [stryMutAct_9fa48("5497") ? {} : (stryCov_9fa48("5497"), {
      text: userData.username,
      url: stryMutAct_9fa48("5498") ? `` : (stryCov_9fa48("5498"), `/user/${userData.userslug}`)
    }), stryMutAct_9fa48("5499") ? {} : (stryCov_9fa48("5499"), {
      text: stryMutAct_9fa48("5500") ? `` : (stryCov_9fa48("5500"), `[[user:${name}]]`)
    })]));
    res.render(tpl, userData);
  }
}