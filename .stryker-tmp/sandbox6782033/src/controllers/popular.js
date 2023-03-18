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
const nconf = require('nconf');
const validator = require('validator');
const helpers = require('./helpers');
const recentController = require('./recent');
const popularController = module.exports;
popularController.get = async function (req, res, next) {
  if (stryMutAct_9fa48("10825")) {
    {}
  } else {
    stryCov_9fa48("10825");
    const data = await recentController.getData(req, stryMutAct_9fa48("10826") ? "" : (stryCov_9fa48("10826"), 'popular'), stryMutAct_9fa48("10827") ? "" : (stryCov_9fa48("10827"), 'posts'));
    if (stryMutAct_9fa48("10830") ? false : stryMutAct_9fa48("10829") ? true : stryMutAct_9fa48("10828") ? data : (stryCov_9fa48("10828", "10829", "10830"), !data)) {
      if (stryMutAct_9fa48("10831")) {
        {}
      } else {
        stryCov_9fa48("10831");
        return next();
      }
    }
    const term = stryMutAct_9fa48("10834") ? helpers.terms[req.query.term] && 'alltime' : stryMutAct_9fa48("10833") ? false : stryMutAct_9fa48("10832") ? true : (stryCov_9fa48("10832", "10833", "10834"), helpers.terms[req.query.term] || (stryMutAct_9fa48("10835") ? "" : (stryCov_9fa48("10835"), 'alltime')));
    if (stryMutAct_9fa48("10838") ? req.originalUrl.startsWith(`${nconf.get('relative_path')}/api/popular`) && req.originalUrl.startsWith(`${nconf.get('relative_path')}/popular`) : stryMutAct_9fa48("10837") ? false : stryMutAct_9fa48("10836") ? true : (stryCov_9fa48("10836", "10837", "10838"), (stryMutAct_9fa48("10839") ? req.originalUrl.endsWith(`${nconf.get('relative_path')}/api/popular`) : (stryCov_9fa48("10839"), req.originalUrl.startsWith(stryMutAct_9fa48("10840") ? `` : (stryCov_9fa48("10840"), `${nconf.get(stryMutAct_9fa48("10841") ? "" : (stryCov_9fa48("10841"), 'relative_path'))}/api/popular`)))) || (stryMutAct_9fa48("10842") ? req.originalUrl.endsWith(`${nconf.get('relative_path')}/popular`) : (stryCov_9fa48("10842"), req.originalUrl.startsWith(stryMutAct_9fa48("10843") ? `` : (stryCov_9fa48("10843"), `${nconf.get(stryMutAct_9fa48("10844") ? "" : (stryCov_9fa48("10844"), 'relative_path'))}/popular`)))))) {
      if (stryMutAct_9fa48("10845")) {
        {}
      } else {
        stryCov_9fa48("10845");
        data.title = stryMutAct_9fa48("10846") ? `` : (stryCov_9fa48("10846"), `[[pages:popular-${term}]]`);
        const breadcrumbs = stryMutAct_9fa48("10847") ? [] : (stryCov_9fa48("10847"), [stryMutAct_9fa48("10848") ? {} : (stryCov_9fa48("10848"), {
          text: stryMutAct_9fa48("10849") ? "" : (stryCov_9fa48("10849"), '[[global:header.popular]]')
        })]);
        data.breadcrumbs = helpers.buildBreadcrumbs(breadcrumbs);
      }
    }
    const feedQs = data.rssFeedUrl.split(stryMutAct_9fa48("10850") ? "" : (stryCov_9fa48("10850"), '?'))[1];
    data.rssFeedUrl = stryMutAct_9fa48("10851") ? `` : (stryCov_9fa48("10851"), `${nconf.get(stryMutAct_9fa48("10852") ? "" : (stryCov_9fa48("10852"), 'relative_path'))}/popular/${validator.escape(String(stryMutAct_9fa48("10855") ? req.query.term && 'alltime' : stryMutAct_9fa48("10854") ? false : stryMutAct_9fa48("10853") ? true : (stryCov_9fa48("10853", "10854", "10855"), req.query.term || (stryMutAct_9fa48("10856") ? "" : (stryCov_9fa48("10856"), 'alltime')))))}.rss`);
    if (stryMutAct_9fa48("10858") ? false : stryMutAct_9fa48("10857") ? true : (stryCov_9fa48("10857", "10858"), req.loggedIn)) {
      if (stryMutAct_9fa48("10859")) {
        {}
      } else {
        stryCov_9fa48("10859");
        data.rssFeedUrl += stryMutAct_9fa48("10860") ? `` : (stryCov_9fa48("10860"), `?${feedQs}`);
      }
    }
    res.render(stryMutAct_9fa48("10861") ? "" : (stryCov_9fa48("10861"), 'popular'), data);
  }
};