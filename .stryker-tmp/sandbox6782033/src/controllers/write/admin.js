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
const meta = require('../../meta');
const privileges = require('../../privileges');
const analytics = require('../../analytics');
const helpers = require('../helpers');
const Admin = module.exports;
Admin.updateSetting = async (req, res) => {
  if (stryMutAct_9fa48("12256")) {
    {}
  } else {
    stryCov_9fa48("12256");
    const ok = await privileges.admin.can(stryMutAct_9fa48("12257") ? "" : (stryCov_9fa48("12257"), 'admin:settings'), req.uid);
    if (stryMutAct_9fa48("12260") ? false : stryMutAct_9fa48("12259") ? true : stryMutAct_9fa48("12258") ? ok : (stryCov_9fa48("12258", "12259", "12260"), !ok)) {
      if (stryMutAct_9fa48("12261")) {
        {}
      } else {
        stryCov_9fa48("12261");
        return helpers.formatApiResponse(403, res);
      }
    }
    await meta.configs.set(req.params.setting, req.body.value);
    helpers.formatApiResponse(200, res);
  }
};
Admin.getAnalyticsKeys = async (req, res) => {
  if (stryMutAct_9fa48("12262")) {
    {}
  } else {
    stryCov_9fa48("12262");
    let keys = await analytics.getKeys();

    // Sort keys alphabetically
    keys = stryMutAct_9fa48("12263") ? keys : (stryCov_9fa48("12263"), keys.sort(stryMutAct_9fa48("12264") ? () => undefined : (stryCov_9fa48("12264"), (a, b) => (stryMutAct_9fa48("12268") ? a >= b : stryMutAct_9fa48("12267") ? a <= b : stryMutAct_9fa48("12266") ? false : stryMutAct_9fa48("12265") ? true : (stryCov_9fa48("12265", "12266", "12267", "12268"), a < b)) ? stryMutAct_9fa48("12269") ? +1 : (stryCov_9fa48("12269"), -1) : 1)));
    helpers.formatApiResponse(200, res, stryMutAct_9fa48("12270") ? {} : (stryCov_9fa48("12270"), {
      keys
    }));
  }
};
Admin.getAnalyticsData = async (req, res) => {
  if (stryMutAct_9fa48("12271")) {
    {}
  } else {
    stryCov_9fa48("12271");
    // Default returns views from past 24 hours, by hour
    if (stryMutAct_9fa48("12274") ? false : stryMutAct_9fa48("12273") ? true : stryMutAct_9fa48("12272") ? req.query.amount : (stryCov_9fa48("12272", "12273", "12274"), !req.query.amount)) {
      if (stryMutAct_9fa48("12275")) {
        {}
      } else {
        stryCov_9fa48("12275");
        if (stryMutAct_9fa48("12278") ? req.query.units !== 'days' : stryMutAct_9fa48("12277") ? false : stryMutAct_9fa48("12276") ? true : (stryCov_9fa48("12276", "12277", "12278"), req.query.units === (stryMutAct_9fa48("12279") ? "" : (stryCov_9fa48("12279"), 'days')))) {
          if (stryMutAct_9fa48("12280")) {
            {}
          } else {
            stryCov_9fa48("12280");
            req.query.amount = 30;
          }
        } else {
          if (stryMutAct_9fa48("12281")) {
            {}
          } else {
            stryCov_9fa48("12281");
            req.query.amount = 24;
          }
        }
      }
    }
    const getStats = (stryMutAct_9fa48("12284") ? req.query.units !== 'days' : stryMutAct_9fa48("12283") ? false : stryMutAct_9fa48("12282") ? true : (stryCov_9fa48("12282", "12283", "12284"), req.query.units === (stryMutAct_9fa48("12285") ? "" : (stryCov_9fa48("12285"), 'days')))) ? analytics.getDailyStatsForSet : analytics.getHourlyStatsForSet;
    helpers.formatApiResponse(200, res, await getStats(stryMutAct_9fa48("12286") ? `` : (stryCov_9fa48("12286"), `analytics:${req.params.set}`), stryMutAct_9fa48("12289") ? parseInt(req.query.until, 10) && Date.now() : stryMutAct_9fa48("12288") ? false : stryMutAct_9fa48("12287") ? true : (stryCov_9fa48("12287", "12288", "12289"), parseInt(req.query.until, 10) || Date.now()), req.query.amount));
  }
};