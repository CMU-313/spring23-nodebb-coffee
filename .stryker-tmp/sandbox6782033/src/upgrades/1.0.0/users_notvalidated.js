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
module.exports = stryMutAct_9fa48("42120") ? {} : (stryCov_9fa48("42120"), {
  name: stryMutAct_9fa48("42121") ? "" : (stryCov_9fa48("42121"), 'Creating users:notvalidated'),
  timestamp: Date.UTC(2016, 0, 20),
  method: function (callback) {
    if (stryMutAct_9fa48("42122")) {
      {}
    } else {
      stryCov_9fa48("42122");
      const batch = require('../../batch');
      const now = Date.now();
      batch.processSortedSet(stryMutAct_9fa48("42123") ? "" : (stryCov_9fa48("42123"), 'users:joindate'), (ids, next) => {
        if (stryMutAct_9fa48("42124")) {
          {}
        } else {
          stryCov_9fa48("42124");
          async.eachSeries(ids, (id, next) => {
            if (stryMutAct_9fa48("42125")) {
              {}
            } else {
              stryCov_9fa48("42125");
              db.getObjectFields(stryMutAct_9fa48("42126") ? `` : (stryCov_9fa48("42126"), `user:${id}`), stryMutAct_9fa48("42127") ? [] : (stryCov_9fa48("42127"), [stryMutAct_9fa48("42128") ? "" : (stryCov_9fa48("42128"), 'uid'), stryMutAct_9fa48("42129") ? "" : (stryCov_9fa48("42129"), 'email:confirmed')]), (err, userData) => {
                if (stryMutAct_9fa48("42130")) {
                  {}
                } else {
                  stryCov_9fa48("42130");
                  if (stryMutAct_9fa48("42132") ? false : stryMutAct_9fa48("42131") ? true : (stryCov_9fa48("42131", "42132"), err)) {
                    if (stryMutAct_9fa48("42133")) {
                      {}
                    } else {
                      stryCov_9fa48("42133");
                      return next(err);
                    }
                  }
                  if (stryMutAct_9fa48("42136") ? (!userData || !parseInt(userData.uid, 10)) && parseInt(userData['email:confirmed'], 10) === 1 : stryMutAct_9fa48("42135") ? false : stryMutAct_9fa48("42134") ? true : (stryCov_9fa48("42134", "42135", "42136"), (stryMutAct_9fa48("42138") ? !userData && !parseInt(userData.uid, 10) : stryMutAct_9fa48("42137") ? false : (stryCov_9fa48("42137", "42138"), (stryMutAct_9fa48("42139") ? userData : (stryCov_9fa48("42139"), !userData)) || (stryMutAct_9fa48("42140") ? parseInt(userData.uid, 10) : (stryCov_9fa48("42140"), !parseInt(userData.uid, 10))))) || (stryMutAct_9fa48("42142") ? parseInt(userData['email:confirmed'], 10) !== 1 : stryMutAct_9fa48("42141") ? false : (stryCov_9fa48("42141", "42142"), parseInt(userData[stryMutAct_9fa48("42143") ? "" : (stryCov_9fa48("42143"), 'email:confirmed')], 10) === 1)))) {
                    if (stryMutAct_9fa48("42144")) {
                      {}
                    } else {
                      stryCov_9fa48("42144");
                      return next();
                    }
                  }
                  winston.verbose(stryMutAct_9fa48("42145") ? `` : (stryCov_9fa48("42145"), `processing uid: ${userData.uid} email:confirmed: ${userData[stryMutAct_9fa48("42146") ? "" : (stryCov_9fa48("42146"), 'email:confirmed')]}`));
                  db.sortedSetAdd(stryMutAct_9fa48("42147") ? "" : (stryCov_9fa48("42147"), 'users:notvalidated'), now, userData.uid, next);
                }
              });
            }
          }, next);
        }
      }, callback);
    }
  }
});