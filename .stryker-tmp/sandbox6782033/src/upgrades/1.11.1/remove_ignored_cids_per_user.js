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
const batch = require('../../batch');
module.exports = stryMutAct_9fa48("42698") ? {} : (stryCov_9fa48("42698"), {
  name: stryMutAct_9fa48("42699") ? "" : (stryCov_9fa48("42699"), 'Remove uid:<uid>:ignored:cids'),
  timestamp: Date.UTC(2018, 11, 11),
  method: function (callback) {
    if (stryMutAct_9fa48("42700")) {
      {}
    } else {
      stryCov_9fa48("42700");
      const {
        progress
      } = this;
      batch.processSortedSet(stryMutAct_9fa48("42701") ? "" : (stryCov_9fa48("42701"), 'users:joindate'), (uids, next) => {
        if (stryMutAct_9fa48("42702")) {
          {}
        } else {
          stryCov_9fa48("42702");
          progress.incr(uids.length);
          const keys = uids.map(stryMutAct_9fa48("42703") ? () => undefined : (stryCov_9fa48("42703"), uid => stryMutAct_9fa48("42704") ? `` : (stryCov_9fa48("42704"), `uid:${uid}:ignored:cids`)));
          db.deleteAll(keys, next);
        }
      }, stryMutAct_9fa48("42705") ? {} : (stryCov_9fa48("42705"), {
        progress: this.progress,
        batch: 500
      }), callback);
    }
  }
});