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
const winston = require('winston');
const db = require('../../database');
module.exports = stryMutAct_9fa48("42093") ? {} : (stryCov_9fa48("42093"), {
  name: stryMutAct_9fa48("42094") ? "" : (stryCov_9fa48("42094"), 'Creating user best post sorted sets'),
  timestamp: Date.UTC(2016, 0, 14),
  method: function (callback) {
    if (stryMutAct_9fa48("42095")) {
      {}
    } else {
      stryCov_9fa48("42095");
      const batch = require('../../batch');
      const {
        progress
      } = this;
      batch.processSortedSet(stryMutAct_9fa48("42096") ? "" : (stryCov_9fa48("42096"), 'posts:pid'), (ids, next) => {
        if (stryMutAct_9fa48("42097")) {
          {}
        } else {
          stryCov_9fa48("42097");
          async.eachSeries(ids, (id, next) => {
            if (stryMutAct_9fa48("42098")) {
              {}
            } else {
              stryCov_9fa48("42098");
              db.getObjectFields(stryMutAct_9fa48("42099") ? `` : (stryCov_9fa48("42099"), `post:${id}`), stryMutAct_9fa48("42100") ? [] : (stryCov_9fa48("42100"), [stryMutAct_9fa48("42101") ? "" : (stryCov_9fa48("42101"), 'pid'), stryMutAct_9fa48("42102") ? "" : (stryCov_9fa48("42102"), 'uid'), stryMutAct_9fa48("42103") ? "" : (stryCov_9fa48("42103"), 'votes')]), (err, postData) => {
                if (stryMutAct_9fa48("42104")) {
                  {}
                } else {
                  stryCov_9fa48("42104");
                  if (stryMutAct_9fa48("42106") ? false : stryMutAct_9fa48("42105") ? true : (stryCov_9fa48("42105", "42106"), err)) {
                    if (stryMutAct_9fa48("42107")) {
                      {}
                    } else {
                      stryCov_9fa48("42107");
                      return next(err);
                    }
                  }
                  if (stryMutAct_9fa48("42110") ? (!postData || !parseInt(postData.votes, 10)) && !parseInt(postData.uid, 10) : stryMutAct_9fa48("42109") ? false : stryMutAct_9fa48("42108") ? true : (stryCov_9fa48("42108", "42109", "42110"), (stryMutAct_9fa48("42112") ? !postData && !parseInt(postData.votes, 10) : stryMutAct_9fa48("42111") ? false : (stryCov_9fa48("42111", "42112"), (stryMutAct_9fa48("42113") ? postData : (stryCov_9fa48("42113"), !postData)) || (stryMutAct_9fa48("42114") ? parseInt(postData.votes, 10) : (stryCov_9fa48("42114"), !parseInt(postData.votes, 10))))) || (stryMutAct_9fa48("42115") ? parseInt(postData.uid, 10) : (stryCov_9fa48("42115"), !parseInt(postData.uid, 10))))) {
                    if (stryMutAct_9fa48("42116")) {
                      {}
                    } else {
                      stryCov_9fa48("42116");
                      return next();
                    }
                  }
                  winston.verbose(stryMutAct_9fa48("42117") ? `` : (stryCov_9fa48("42117"), `processing pid: ${postData.pid} uid: ${postData.uid} votes: ${postData.votes}`));
                  db.sortedSetAdd(stryMutAct_9fa48("42118") ? `` : (stryCov_9fa48("42118"), `uid:${postData.uid}:posts:votes`), postData.votes, postData.pid, next);
                  progress.incr();
                }
              });
            }
          }, next);
        }
      }, stryMutAct_9fa48("42119") ? {} : (stryCov_9fa48("42119"), {
        progress: progress
      }), callback);
    }
  }
});