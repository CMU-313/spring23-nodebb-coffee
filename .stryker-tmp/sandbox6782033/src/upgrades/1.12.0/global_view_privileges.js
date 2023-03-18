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
const async = require('async');
const privileges = require('../../privileges');
module.exports = stryMutAct_9fa48("42725") ? {} : (stryCov_9fa48("42725"), {
  name: stryMutAct_9fa48("42726") ? "" : (stryCov_9fa48("42726"), 'Global view privileges'),
  timestamp: Date.UTC(2019, 0, 5),
  method: function (callback) {
    if (stryMutAct_9fa48("42727")) {
      {}
    } else {
      stryCov_9fa48("42727");
      const meta = require('../../meta');
      const tasks = stryMutAct_9fa48("42728") ? [] : (stryCov_9fa48("42728"), [async.apply(privileges.global.give, stryMutAct_9fa48("42729") ? [] : (stryCov_9fa48("42729"), [stryMutAct_9fa48("42730") ? "" : (stryCov_9fa48("42730"), 'groups:view:users'), stryMutAct_9fa48("42731") ? "" : (stryCov_9fa48("42731"), 'groups:view:tags'), stryMutAct_9fa48("42732") ? "" : (stryCov_9fa48("42732"), 'groups:view:groups')]), stryMutAct_9fa48("42733") ? "" : (stryCov_9fa48("42733"), 'registered-users'))]);
      if (stryMutAct_9fa48("42736") ? parseInt(meta.config.privateUserInfo, 10) === 1 : stryMutAct_9fa48("42735") ? false : stryMutAct_9fa48("42734") ? true : (stryCov_9fa48("42734", "42735", "42736"), parseInt(meta.config.privateUserInfo, 10) !== 1)) {
        if (stryMutAct_9fa48("42737")) {
          {}
        } else {
          stryCov_9fa48("42737");
          tasks.push(async.apply(privileges.global.give, stryMutAct_9fa48("42738") ? [] : (stryCov_9fa48("42738"), [stryMutAct_9fa48("42739") ? "" : (stryCov_9fa48("42739"), 'groups:view:users'), stryMutAct_9fa48("42740") ? "" : (stryCov_9fa48("42740"), 'groups:view:groups')]), stryMutAct_9fa48("42741") ? "" : (stryCov_9fa48("42741"), 'guests')));
          tasks.push(async.apply(privileges.global.give, stryMutAct_9fa48("42742") ? [] : (stryCov_9fa48("42742"), [stryMutAct_9fa48("42743") ? "" : (stryCov_9fa48("42743"), 'groups:view:users'), stryMutAct_9fa48("42744") ? "" : (stryCov_9fa48("42744"), 'groups:view:groups')]), stryMutAct_9fa48("42745") ? "" : (stryCov_9fa48("42745"), 'spiders')));
        }
      }
      if (stryMutAct_9fa48("42748") ? parseInt(meta.config.privateTagListing, 10) === 1 : stryMutAct_9fa48("42747") ? false : stryMutAct_9fa48("42746") ? true : (stryCov_9fa48("42746", "42747", "42748"), parseInt(meta.config.privateTagListing, 10) !== 1)) {
        if (stryMutAct_9fa48("42749")) {
          {}
        } else {
          stryCov_9fa48("42749");
          tasks.push(async.apply(privileges.global.give, stryMutAct_9fa48("42750") ? [] : (stryCov_9fa48("42750"), [stryMutAct_9fa48("42751") ? "" : (stryCov_9fa48("42751"), 'groups:view:tags')]), stryMutAct_9fa48("42752") ? "" : (stryCov_9fa48("42752"), 'guests')));
          tasks.push(async.apply(privileges.global.give, stryMutAct_9fa48("42753") ? [] : (stryCov_9fa48("42753"), [stryMutAct_9fa48("42754") ? "" : (stryCov_9fa48("42754"), 'groups:view:tags')]), stryMutAct_9fa48("42755") ? "" : (stryCov_9fa48("42755"), 'spiders')));
        }
      }
      async.series(tasks, callback);
    }
  }
});