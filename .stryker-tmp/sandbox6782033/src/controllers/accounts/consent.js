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
const db = require('../../database');
const meta = require('../../meta');
const helpers = require('../helpers');
const accountHelpers = require('./helpers');
const consentController = module.exports;
consentController.get = async function (req, res, next) {
  if (stryMutAct_9fa48("5244")) {
    {}
  } else {
    stryCov_9fa48("5244");
    if (stryMutAct_9fa48("5247") ? false : stryMutAct_9fa48("5246") ? true : stryMutAct_9fa48("5245") ? meta.config.gdpr_enabled : (stryCov_9fa48("5245", "5246", "5247"), !meta.config.gdpr_enabled)) {
      if (stryMutAct_9fa48("5248")) {
        {}
      } else {
        stryCov_9fa48("5248");
        return next();
      }
    }
    const userData = await accountHelpers.getUserDataByUserSlug(req.params.userslug, req.uid, req.query);
    if (stryMutAct_9fa48("5251") ? false : stryMutAct_9fa48("5250") ? true : stryMutAct_9fa48("5249") ? userData : (stryCov_9fa48("5249", "5250", "5251"), !userData)) {
      if (stryMutAct_9fa48("5252")) {
        {}
      } else {
        stryCov_9fa48("5252");
        return next();
      }
    }
    const consented = await db.getObjectField(stryMutAct_9fa48("5253") ? `` : (stryCov_9fa48("5253"), `user:${userData.uid}`), stryMutAct_9fa48("5254") ? "" : (stryCov_9fa48("5254"), 'gdpr_consent'));
    userData.gdpr_consent = stryMutAct_9fa48("5257") ? parseInt(consented, 10) !== 1 : stryMutAct_9fa48("5256") ? false : stryMutAct_9fa48("5255") ? true : (stryCov_9fa48("5255", "5256", "5257"), parseInt(consented, 10) === 1);
    userData.digest = stryMutAct_9fa48("5258") ? {} : (stryCov_9fa48("5258"), {
      frequency: stryMutAct_9fa48("5261") ? meta.config.dailyDigestFreq && 'off' : stryMutAct_9fa48("5260") ? false : stryMutAct_9fa48("5259") ? true : (stryCov_9fa48("5259", "5260", "5261"), meta.config.dailyDigestFreq || (stryMutAct_9fa48("5262") ? "" : (stryCov_9fa48("5262"), 'off'))),
      enabled: stryMutAct_9fa48("5265") ? meta.config.dailyDigestFreq === 'off' : stryMutAct_9fa48("5264") ? false : stryMutAct_9fa48("5263") ? true : (stryCov_9fa48("5263", "5264", "5265"), meta.config.dailyDigestFreq !== (stryMutAct_9fa48("5266") ? "" : (stryCov_9fa48("5266"), 'off')))
    });
    userData.title = stryMutAct_9fa48("5267") ? "" : (stryCov_9fa48("5267"), '[[user:consent.title]]');
    userData.breadcrumbs = helpers.buildBreadcrumbs(stryMutAct_9fa48("5268") ? [] : (stryCov_9fa48("5268"), [stryMutAct_9fa48("5269") ? {} : (stryCov_9fa48("5269"), {
      text: userData.username,
      url: stryMutAct_9fa48("5270") ? `` : (stryCov_9fa48("5270"), `/user/${userData.userslug}`)
    }), stryMutAct_9fa48("5271") ? {} : (stryCov_9fa48("5271"), {
      text: stryMutAct_9fa48("5272") ? "" : (stryCov_9fa48("5272"), '[[user:consent.title]]')
    })]));
    res.render(stryMutAct_9fa48("5273") ? "" : (stryCov_9fa48("5273"), 'account/consent'), userData);
  }
};