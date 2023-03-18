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
const analytics = require('../../analytics');
const utils = require('../../utils');
const Analytics = module.exports;
Analytics.get = async function (socket, data) {
  if (stryMutAct_9fa48("34808")) {
    {}
  } else {
    stryCov_9fa48("34808");
    if (stryMutAct_9fa48("34811") ? (!data || !data.graph) && !data.units : stryMutAct_9fa48("34810") ? false : stryMutAct_9fa48("34809") ? true : (stryCov_9fa48("34809", "34810", "34811"), (stryMutAct_9fa48("34813") ? !data && !data.graph : stryMutAct_9fa48("34812") ? false : (stryCov_9fa48("34812", "34813"), (stryMutAct_9fa48("34814") ? data : (stryCov_9fa48("34814"), !data)) || (stryMutAct_9fa48("34815") ? data.graph : (stryCov_9fa48("34815"), !data.graph)))) || (stryMutAct_9fa48("34816") ? data.units : (stryCov_9fa48("34816"), !data.units)))) {
      if (stryMutAct_9fa48("34817")) {
        {}
      } else {
        stryCov_9fa48("34817");
        throw new Error(stryMutAct_9fa48("34818") ? "" : (stryCov_9fa48("34818"), '[[error:invalid-data]]'));
      }
    }

    // Default returns views from past 24 hours, by hour
    if (stryMutAct_9fa48("34821") ? false : stryMutAct_9fa48("34820") ? true : stryMutAct_9fa48("34819") ? data.amount : (stryCov_9fa48("34819", "34820", "34821"), !data.amount)) {
      if (stryMutAct_9fa48("34822")) {
        {}
      } else {
        stryCov_9fa48("34822");
        if (stryMutAct_9fa48("34825") ? data.units !== 'days' : stryMutAct_9fa48("34824") ? false : stryMutAct_9fa48("34823") ? true : (stryCov_9fa48("34823", "34824", "34825"), data.units === (stryMutAct_9fa48("34826") ? "" : (stryCov_9fa48("34826"), 'days')))) {
          if (stryMutAct_9fa48("34827")) {
            {}
          } else {
            stryCov_9fa48("34827");
            data.amount = 30;
          }
        } else {
          if (stryMutAct_9fa48("34828")) {
            {}
          } else {
            stryCov_9fa48("34828");
            data.amount = 24;
          }
        }
      }
    }
    const getStats = (stryMutAct_9fa48("34831") ? data.units !== 'days' : stryMutAct_9fa48("34830") ? false : stryMutAct_9fa48("34829") ? true : (stryCov_9fa48("34829", "34830", "34831"), data.units === (stryMutAct_9fa48("34832") ? "" : (stryCov_9fa48("34832"), 'days')))) ? analytics.getDailyStatsForSet : analytics.getHourlyStatsForSet;
    if (stryMutAct_9fa48("34835") ? data.graph !== 'traffic' : stryMutAct_9fa48("34834") ? false : stryMutAct_9fa48("34833") ? true : (stryCov_9fa48("34833", "34834", "34835"), data.graph === (stryMutAct_9fa48("34836") ? "" : (stryCov_9fa48("34836"), 'traffic')))) {
      if (stryMutAct_9fa48("34837")) {
        {}
      } else {
        stryCov_9fa48("34837");
        const result = await utils.promiseParallel(stryMutAct_9fa48("34838") ? {} : (stryCov_9fa48("34838"), {
          uniqueVisitors: getStats(stryMutAct_9fa48("34839") ? "" : (stryCov_9fa48("34839"), 'analytics:uniquevisitors'), stryMutAct_9fa48("34842") ? data.until && Date.now() : stryMutAct_9fa48("34841") ? false : stryMutAct_9fa48("34840") ? true : (stryCov_9fa48("34840", "34841", "34842"), data.until || Date.now()), data.amount),
          pageviews: getStats(stryMutAct_9fa48("34843") ? "" : (stryCov_9fa48("34843"), 'analytics:pageviews'), stryMutAct_9fa48("34846") ? data.until && Date.now() : stryMutAct_9fa48("34845") ? false : stryMutAct_9fa48("34844") ? true : (stryCov_9fa48("34844", "34845", "34846"), data.until || Date.now()), data.amount),
          pageviewsRegistered: getStats(stryMutAct_9fa48("34847") ? "" : (stryCov_9fa48("34847"), 'analytics:pageviews:registered'), stryMutAct_9fa48("34850") ? data.until && Date.now() : stryMutAct_9fa48("34849") ? false : stryMutAct_9fa48("34848") ? true : (stryCov_9fa48("34848", "34849", "34850"), data.until || Date.now()), data.amount),
          pageviewsGuest: getStats(stryMutAct_9fa48("34851") ? "" : (stryCov_9fa48("34851"), 'analytics:pageviews:guest'), stryMutAct_9fa48("34854") ? data.until && Date.now() : stryMutAct_9fa48("34853") ? false : stryMutAct_9fa48("34852") ? true : (stryCov_9fa48("34852", "34853", "34854"), data.until || Date.now()), data.amount),
          pageviewsBot: getStats(stryMutAct_9fa48("34855") ? "" : (stryCov_9fa48("34855"), 'analytics:pageviews:bot'), stryMutAct_9fa48("34858") ? data.until && Date.now() : stryMutAct_9fa48("34857") ? false : stryMutAct_9fa48("34856") ? true : (stryCov_9fa48("34856", "34857", "34858"), data.until || Date.now()), data.amount),
          summary: analytics.getSummary()
        }));
        result.pastDay = result.pageviews.reduce(stryMutAct_9fa48("34859") ? () => undefined : (stryCov_9fa48("34859"), (a, b) => stryMutAct_9fa48("34860") ? parseInt(a, 10) - parseInt(b, 10) : (stryCov_9fa48("34860"), parseInt(a, 10) + parseInt(b, 10))));
        const last = stryMutAct_9fa48("34861") ? result.pageviews.length + 1 : (stryCov_9fa48("34861"), result.pageviews.length - 1);
        result.pageviews[last] = stryMutAct_9fa48("34862") ? parseInt(result.pageviews[last], 10) - analytics.getUnwrittenPageviews() : (stryCov_9fa48("34862"), parseInt(result.pageviews[last], 10) + analytics.getUnwrittenPageviews());
        return result;
      }
    }
  }
};