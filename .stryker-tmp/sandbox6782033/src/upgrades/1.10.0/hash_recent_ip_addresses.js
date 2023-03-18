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
const crypto = require('crypto');
const nconf = require('nconf');
const batch = require('../../batch');
const db = require('../../database');
module.exports = stryMutAct_9fa48("42357") ? {} : (stryCov_9fa48("42357"), {
  name: stryMutAct_9fa48("42358") ? "" : (stryCov_9fa48("42358"), 'Hash all IP addresses stored in Recent IPs zset'),
  timestamp: Date.UTC(2018, 5, 22),
  method: function (callback) {
    if (stryMutAct_9fa48("42359")) {
      {}
    } else {
      stryCov_9fa48("42359");
      const {
        progress
      } = this;
      const hashed = stryMutAct_9fa48("42361") ? /[^a-f0-9]{32}/ : stryMutAct_9fa48("42360") ? /[a-f0-9]/ : (stryCov_9fa48("42360", "42361"), /[a-f0-9]{32}/);
      let hash;
      batch.processSortedSet(stryMutAct_9fa48("42362") ? "" : (stryCov_9fa48("42362"), 'ip:recent'), (ips, next) => {
        if (stryMutAct_9fa48("42363")) {
          {}
        } else {
          stryCov_9fa48("42363");
          async.each(ips, (set, next) => {
            if (stryMutAct_9fa48("42364")) {
              {}
            } else {
              stryCov_9fa48("42364");
              // Short circuit if already processed
              if (stryMutAct_9fa48("42366") ? false : stryMutAct_9fa48("42365") ? true : (stryCov_9fa48("42365", "42366"), hashed.test(set.value))) {
                if (stryMutAct_9fa48("42367")) {
                  {}
                } else {
                  stryCov_9fa48("42367");
                  progress.incr();
                  return setImmediate(next);
                }
              }
              hash = crypto.createHash(stryMutAct_9fa48("42368") ? "" : (stryCov_9fa48("42368"), 'sha1')).update(stryMutAct_9fa48("42369") ? set.value - nconf.get('secret') : (stryCov_9fa48("42369"), set.value + nconf.get(stryMutAct_9fa48("42370") ? "" : (stryCov_9fa48("42370"), 'secret')))).digest(stryMutAct_9fa48("42371") ? "" : (stryCov_9fa48("42371"), 'hex'));
              async.series(stryMutAct_9fa48("42372") ? [] : (stryCov_9fa48("42372"), [async.apply(db.sortedSetAdd, stryMutAct_9fa48("42373") ? "" : (stryCov_9fa48("42373"), 'ip:recent'), set.score, hash), async.apply(db.sortedSetRemove, stryMutAct_9fa48("42374") ? "" : (stryCov_9fa48("42374"), 'ip:recent'), set.value)]), err => {
                if (stryMutAct_9fa48("42375")) {
                  {}
                } else {
                  stryCov_9fa48("42375");
                  progress.incr();
                  next(err);
                }
              });
            }
          }, next);
        }
      }, stryMutAct_9fa48("42376") ? {} : (stryCov_9fa48("42376"), {
        withScores: 1,
        progress: this.progress
      }), callback);
    }
  }
});