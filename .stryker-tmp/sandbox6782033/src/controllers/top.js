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
const topController = module.exports;
topController.get = async function (req, res, next) {
  if (stryMutAct_9fa48("11235")) {
    {}
  } else {
    stryCov_9fa48("11235");
    const data = await recentController.getData(req, stryMutAct_9fa48("11236") ? "" : (stryCov_9fa48("11236"), 'top'), stryMutAct_9fa48("11237") ? "" : (stryCov_9fa48("11237"), 'votes'));
    if (stryMutAct_9fa48("11240") ? false : stryMutAct_9fa48("11239") ? true : stryMutAct_9fa48("11238") ? data : (stryCov_9fa48("11238", "11239", "11240"), !data)) {
      if (stryMutAct_9fa48("11241")) {
        {}
      } else {
        stryCov_9fa48("11241");
        return next();
      }
    }
    const term = stryMutAct_9fa48("11244") ? helpers.terms[req.query.term] && 'alltime' : stryMutAct_9fa48("11243") ? false : stryMutAct_9fa48("11242") ? true : (stryCov_9fa48("11242", "11243", "11244"), helpers.terms[req.query.term] || (stryMutAct_9fa48("11245") ? "" : (stryCov_9fa48("11245"), 'alltime')));
    if (stryMutAct_9fa48("11248") ? req.originalUrl.startsWith(`${nconf.get('relative_path')}/api/top`) && req.originalUrl.startsWith(`${nconf.get('relative_path')}/top`) : stryMutAct_9fa48("11247") ? false : stryMutAct_9fa48("11246") ? true : (stryCov_9fa48("11246", "11247", "11248"), (stryMutAct_9fa48("11249") ? req.originalUrl.endsWith(`${nconf.get('relative_path')}/api/top`) : (stryCov_9fa48("11249"), req.originalUrl.startsWith(stryMutAct_9fa48("11250") ? `` : (stryCov_9fa48("11250"), `${nconf.get(stryMutAct_9fa48("11251") ? "" : (stryCov_9fa48("11251"), 'relative_path'))}/api/top`)))) || (stryMutAct_9fa48("11252") ? req.originalUrl.endsWith(`${nconf.get('relative_path')}/top`) : (stryCov_9fa48("11252"), req.originalUrl.startsWith(stryMutAct_9fa48("11253") ? `` : (stryCov_9fa48("11253"), `${nconf.get(stryMutAct_9fa48("11254") ? "" : (stryCov_9fa48("11254"), 'relative_path'))}/top`)))))) {
      if (stryMutAct_9fa48("11255")) {
        {}
      } else {
        stryCov_9fa48("11255");
        data.title = stryMutAct_9fa48("11256") ? `` : (stryCov_9fa48("11256"), `[[pages:top-${term}]]`);
      }
    }
    const feedQs = data.rssFeedUrl.split(stryMutAct_9fa48("11257") ? "" : (stryCov_9fa48("11257"), '?'))[1];
    data.rssFeedUrl = stryMutAct_9fa48("11258") ? `` : (stryCov_9fa48("11258"), `${nconf.get(stryMutAct_9fa48("11259") ? "" : (stryCov_9fa48("11259"), 'relative_path'))}/top/${validator.escape(String(stryMutAct_9fa48("11262") ? req.query.term && 'alltime' : stryMutAct_9fa48("11261") ? false : stryMutAct_9fa48("11260") ? true : (stryCov_9fa48("11260", "11261", "11262"), req.query.term || (stryMutAct_9fa48("11263") ? "" : (stryCov_9fa48("11263"), 'alltime')))))}.rss`);
    if (stryMutAct_9fa48("11265") ? false : stryMutAct_9fa48("11264") ? true : (stryCov_9fa48("11264", "11265"), req.loggedIn)) {
      if (stryMutAct_9fa48("11266")) {
        {}
      } else {
        stryCov_9fa48("11266");
        data.rssFeedUrl += stryMutAct_9fa48("11267") ? `` : (stryCov_9fa48("11267"), `?${feedQs}`);
      }
    }
    res.render(stryMutAct_9fa48("11268") ? "" : (stryCov_9fa48("11268"), 'top'), data);
  }
};