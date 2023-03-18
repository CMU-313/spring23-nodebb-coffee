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
const groups = require('../../groups');
const helpers = require('../helpers');
const accountHelpers = require('./helpers');
const groupsController = module.exports;
groupsController.get = async function (req, res, next) {
  if (stryMutAct_9fa48("5501")) {
    {}
  } else {
    stryCov_9fa48("5501");
    const userData = await accountHelpers.getUserDataByUserSlug(req.params.userslug, req.uid, req.query);
    if (stryMutAct_9fa48("5504") ? false : stryMutAct_9fa48("5503") ? true : stryMutAct_9fa48("5502") ? userData : (stryCov_9fa48("5502", "5503", "5504"), !userData)) {
      if (stryMutAct_9fa48("5505")) {
        {}
      } else {
        stryCov_9fa48("5505");
        return next();
      }
    }
    let groupsData = await groups.getUserGroups(stryMutAct_9fa48("5506") ? [] : (stryCov_9fa48("5506"), [userData.uid]));
    groupsData = groupsData[0];
    const groupNames = stryMutAct_9fa48("5507") ? groupsData.map(group => group.name) : (stryCov_9fa48("5507"), groupsData.filter(Boolean).map(stryMutAct_9fa48("5508") ? () => undefined : (stryCov_9fa48("5508"), group => group.name)));
    const members = await groups.getMemberUsers(groupNames, 0, 3);
    groupsData.forEach((group, index) => {
      if (stryMutAct_9fa48("5509")) {
        {}
      } else {
        stryCov_9fa48("5509");
        group.members = members[index];
      }
    });
    userData.groups = groupsData;
    userData.title = stryMutAct_9fa48("5510") ? `` : (stryCov_9fa48("5510"), `[[pages:account/groups, ${userData.username}]]`);
    userData.breadcrumbs = helpers.buildBreadcrumbs(stryMutAct_9fa48("5511") ? [] : (stryCov_9fa48("5511"), [stryMutAct_9fa48("5512") ? {} : (stryCov_9fa48("5512"), {
      text: userData.username,
      url: stryMutAct_9fa48("5513") ? `` : (stryCov_9fa48("5513"), `/user/${userData.userslug}`)
    }), stryMutAct_9fa48("5514") ? {} : (stryCov_9fa48("5514"), {
      text: stryMutAct_9fa48("5515") ? "" : (stryCov_9fa48("5515"), '[[global:header.groups]]')
    })]));
    res.render(stryMutAct_9fa48("5516") ? "" : (stryCov_9fa48("5516"), 'account/groups'), userData);
  }
};