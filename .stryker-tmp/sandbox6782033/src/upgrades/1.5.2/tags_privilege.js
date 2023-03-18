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
const batch = require('../../batch');
module.exports = stryMutAct_9fa48("44480") ? {} : (stryCov_9fa48("44480"), {
  name: stryMutAct_9fa48("44481") ? "" : (stryCov_9fa48("44481"), 'Give tag privilege to registered-users on all categories'),
  timestamp: Date.UTC(2017, 5, 16),
  method: function (callback) {
    if (stryMutAct_9fa48("44482")) {
      {}
    } else {
      stryCov_9fa48("44482");
      const {
        progress
      } = this;
      const privileges = require('../../privileges');
      batch.processSortedSet(stryMutAct_9fa48("44483") ? "" : (stryCov_9fa48("44483"), 'categories:cid'), (cids, next) => {
        if (stryMutAct_9fa48("44484")) {
          {}
        } else {
          stryCov_9fa48("44484");
          async.eachSeries(cids, (cid, next) => {
            if (stryMutAct_9fa48("44485")) {
              {}
            } else {
              stryCov_9fa48("44485");
              progress.incr();
              privileges.categories.give(stryMutAct_9fa48("44486") ? [] : (stryCov_9fa48("44486"), [stryMutAct_9fa48("44487") ? "" : (stryCov_9fa48("44487"), 'groups:topics:tag')]), cid, stryMutAct_9fa48("44488") ? "" : (stryCov_9fa48("44488"), 'registered-users'), next);
            }
          }, next);
        }
      }, stryMutAct_9fa48("44489") ? {} : (stryCov_9fa48("44489"), {
        progress: progress
      }), callback);
    }
  }
});