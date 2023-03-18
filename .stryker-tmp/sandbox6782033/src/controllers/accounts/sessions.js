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
const sessionController = module.exports;
sessionController.get = async function (req, res, next) {
  if (stryMutAct_9fa48("6249")) {
    {}
  } else {
    stryCov_9fa48("6249");
    const userData = await accountHelpers.getUserDataByUserSlug(req.params.userslug, req.uid, req.query);
    if (stryMutAct_9fa48("6252") ? false : stryMutAct_9fa48("6251") ? true : stryMutAct_9fa48("6250") ? userData : (stryCov_9fa48("6250", "6251", "6252"), !userData)) {
      if (stryMutAct_9fa48("6253")) {
        {}
      } else {
        stryCov_9fa48("6253");
        return next();
      }
    }
    userData.sessions = await user.auth.getSessions(userData.uid, req.sessionID);
    userData.title = stryMutAct_9fa48("6254") ? "" : (stryCov_9fa48("6254"), '[[pages:account/sessions]]');
    userData.breadcrumbs = helpers.buildBreadcrumbs(stryMutAct_9fa48("6255") ? [] : (stryCov_9fa48("6255"), [stryMutAct_9fa48("6256") ? {} : (stryCov_9fa48("6256"), {
      text: userData.username,
      url: stryMutAct_9fa48("6257") ? `` : (stryCov_9fa48("6257"), `/user/${userData.userslug}`)
    }), stryMutAct_9fa48("6258") ? {} : (stryCov_9fa48("6258"), {
      text: stryMutAct_9fa48("6259") ? "" : (stryCov_9fa48("6259"), '[[pages:account/sessions]]')
    })]));
    res.render(stryMutAct_9fa48("6260") ? "" : (stryCov_9fa48("6260"), 'account/sessions'), userData);
  }
};