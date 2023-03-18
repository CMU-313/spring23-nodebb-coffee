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
const db = require('../../database');
module.exports = stryMutAct_9fa48("42377") ? {} : (stryCov_9fa48("42377"), {
  name: stryMutAct_9fa48("42378") ? "" : (stryCov_9fa48("42378"), 'Give post history viewing privilege to registered-users on all categories'),
  timestamp: Date.UTC(2018, 5, 7),
  method: function (callback) {
    if (stryMutAct_9fa48("42379")) {
      {}
    } else {
      stryCov_9fa48("42379");
      db.getSortedSetRange(stryMutAct_9fa48("42380") ? "" : (stryCov_9fa48("42380"), 'categories:cid'), 0, stryMutAct_9fa48("42381") ? +1 : (stryCov_9fa48("42381"), -1), (err, cids) => {
        if (stryMutAct_9fa48("42382")) {
          {}
        } else {
          stryCov_9fa48("42382");
          if (stryMutAct_9fa48("42384") ? false : stryMutAct_9fa48("42383") ? true : (stryCov_9fa48("42383", "42384"), err)) {
            if (stryMutAct_9fa48("42385")) {
              {}
            } else {
              stryCov_9fa48("42385");
              return callback(err);
            }
          }
          async.eachSeries(cids, (cid, next) => {
            if (stryMutAct_9fa48("42386")) {
              {}
            } else {
              stryCov_9fa48("42386");
              privileges.categories.give(stryMutAct_9fa48("42387") ? [] : (stryCov_9fa48("42387"), [stryMutAct_9fa48("42388") ? "" : (stryCov_9fa48("42388"), 'groups:posts:history')]), cid, stryMutAct_9fa48("42389") ? "" : (stryCov_9fa48("42389"), 'registered-users'), next);
            }
          }, callback);
        }
      });
    }
  }
});