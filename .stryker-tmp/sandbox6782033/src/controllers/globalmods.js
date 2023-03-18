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
const user = require('../user');
const meta = require('../meta');
const analytics = require('../analytics');
const usersController = require('./admin/users');
const helpers = require('./helpers');
const globalModsController = module.exports;
globalModsController.ipBlacklist = async function (req, res, next) {
  if (stryMutAct_9fa48("9413")) {
    {}
  } else {
    stryCov_9fa48("9413");
    const isAdminOrGlobalMod = await user.isAdminOrGlobalMod(req.uid);
    if (stryMutAct_9fa48("9416") ? false : stryMutAct_9fa48("9415") ? true : stryMutAct_9fa48("9414") ? isAdminOrGlobalMod : (stryCov_9fa48("9414", "9415", "9416"), !isAdminOrGlobalMod)) {
      if (stryMutAct_9fa48("9417")) {
        {}
      } else {
        stryCov_9fa48("9417");
        return next();
      }
    }
    const [rules, analyticsData] = await Promise.all(stryMutAct_9fa48("9418") ? [] : (stryCov_9fa48("9418"), [meta.blacklist.get(), analytics.getBlacklistAnalytics()]));
    res.render(stryMutAct_9fa48("9419") ? "" : (stryCov_9fa48("9419"), 'ip-blacklist'), stryMutAct_9fa48("9420") ? {} : (stryCov_9fa48("9420"), {
      title: stryMutAct_9fa48("9421") ? "" : (stryCov_9fa48("9421"), '[[pages:ip-blacklist]]'),
      rules: rules,
      analytics: analyticsData,
      breadcrumbs: helpers.buildBreadcrumbs(stryMutAct_9fa48("9422") ? [] : (stryCov_9fa48("9422"), [stryMutAct_9fa48("9423") ? {} : (stryCov_9fa48("9423"), {
        text: stryMutAct_9fa48("9424") ? "" : (stryCov_9fa48("9424"), '[[pages:ip-blacklist]]')
      })]))
    }));
  }
};
globalModsController.registrationQueue = async function (req, res, next) {
  if (stryMutAct_9fa48("9425")) {
    {}
  } else {
    stryCov_9fa48("9425");
    const isAdminOrGlobalMod = await user.isAdminOrGlobalMod(req.uid);
    if (stryMutAct_9fa48("9428") ? false : stryMutAct_9fa48("9427") ? true : stryMutAct_9fa48("9426") ? isAdminOrGlobalMod : (stryCov_9fa48("9426", "9427", "9428"), !isAdminOrGlobalMod)) {
      if (stryMutAct_9fa48("9429")) {
        {}
      } else {
        stryCov_9fa48("9429");
        return next();
      }
    }
    await usersController.registrationQueue(req, res);
  }
};