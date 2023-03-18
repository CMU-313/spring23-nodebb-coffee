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
module.exports = stryMutAct_9fa48("44887") ? {} : (stryCov_9fa48("44887"), {
  name: stryMutAct_9fa48("44888") ? "" : (stryCov_9fa48("44888"), 'Give vote privilege to registered-users on all categories'),
  timestamp: Date.UTC(2018, 0, 9),
  method: function (callback) {
    if (stryMutAct_9fa48("44889")) {
      {}
    } else {
      stryCov_9fa48("44889");
      db.getSortedSetRange(stryMutAct_9fa48("44890") ? "" : (stryCov_9fa48("44890"), 'categories:cid'), 0, stryMutAct_9fa48("44891") ? +1 : (stryCov_9fa48("44891"), -1), (err, cids) => {
        if (stryMutAct_9fa48("44892")) {
          {}
        } else {
          stryCov_9fa48("44892");
          if (stryMutAct_9fa48("44894") ? false : stryMutAct_9fa48("44893") ? true : (stryCov_9fa48("44893", "44894"), err)) {
            if (stryMutAct_9fa48("44895")) {
              {}
            } else {
              stryCov_9fa48("44895");
              return callback(err);
            }
          }
          async.eachSeries(cids, (cid, next) => {
            if (stryMutAct_9fa48("44896")) {
              {}
            } else {
              stryCov_9fa48("44896");
              privileges.categories.give(stryMutAct_9fa48("44897") ? [] : (stryCov_9fa48("44897"), [stryMutAct_9fa48("44898") ? "" : (stryCov_9fa48("44898"), 'groups:posts:upvote'), stryMutAct_9fa48("44899") ? "" : (stryCov_9fa48("44899"), 'groups:posts:downvote')]), cid, stryMutAct_9fa48("44900") ? "" : (stryCov_9fa48("44900"), 'registered-users'), next);
            }
          }, callback);
        }
      });
    }
  }
});