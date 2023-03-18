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
const db = require('../../database');
module.exports = stryMutAct_9fa48("44471") ? {} : (stryCov_9fa48("44471"), {
  name: stryMutAct_9fa48("44472") ? "" : (stryCov_9fa48("44472"), 'Wipe all existing RSS tokens'),
  timestamp: Date.UTC(2017, 6, 5),
  method: function (callback) {
    if (stryMutAct_9fa48("44473")) {
      {}
    } else {
      stryCov_9fa48("44473");
      const {
        progress
      } = this;
      batch.processSortedSet(stryMutAct_9fa48("44474") ? "" : (stryCov_9fa48("44474"), 'users:joindate'), (uids, next) => {
        if (stryMutAct_9fa48("44475")) {
          {}
        } else {
          stryCov_9fa48("44475");
          async.eachLimit(uids, 500, (uid, next) => {
            if (stryMutAct_9fa48("44476")) {
              {}
            } else {
              stryCov_9fa48("44476");
              progress.incr();
              db.deleteObjectField(stryMutAct_9fa48("44477") ? `` : (stryCov_9fa48("44477"), `user:${uid}`), stryMutAct_9fa48("44478") ? "" : (stryCov_9fa48("44478"), 'rss_token'), next);
            }
          }, next);
        }
      }, stryMutAct_9fa48("44479") ? {} : (stryCov_9fa48("44479"), {
        progress: progress
      }), callback);
    }
  }
});