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
const db = require('../../database');
module.exports = stryMutAct_9fa48("44042") ? {} : (stryCov_9fa48("44042"), {
  name: stryMutAct_9fa48("44043") ? "" : (stryCov_9fa48("44043"), 'Category recent tids'),
  timestamp: Date.UTC(2016, 8, 22),
  method: function (callback) {
    if (stryMutAct_9fa48("44044")) {
      {}
    } else {
      stryCov_9fa48("44044");
      db.getSortedSetRange(stryMutAct_9fa48("44045") ? "" : (stryCov_9fa48("44045"), 'categories:cid'), 0, stryMutAct_9fa48("44046") ? +1 : (stryCov_9fa48("44046"), -1), (err, cids) => {
        if (stryMutAct_9fa48("44047")) {
          {}
        } else {
          stryCov_9fa48("44047");
          if (stryMutAct_9fa48("44049") ? false : stryMutAct_9fa48("44048") ? true : (stryCov_9fa48("44048", "44049"), err)) {
            if (stryMutAct_9fa48("44050")) {
              {}
            } else {
              stryCov_9fa48("44050");
              return callback(err);
            }
          }
          async.eachSeries(cids, (cid, next) => {
            if (stryMutAct_9fa48("44051")) {
              {}
            } else {
              stryCov_9fa48("44051");
              db.getSortedSetRevRange(stryMutAct_9fa48("44052") ? `` : (stryCov_9fa48("44052"), `cid:${cid}:pids`), 0, 0, (err, pid) => {
                if (stryMutAct_9fa48("44053")) {
                  {}
                } else {
                  stryCov_9fa48("44053");
                  if (stryMutAct_9fa48("44056") ? err && !pid : stryMutAct_9fa48("44055") ? false : stryMutAct_9fa48("44054") ? true : (stryCov_9fa48("44054", "44055", "44056"), err || (stryMutAct_9fa48("44057") ? pid : (stryCov_9fa48("44057"), !pid)))) {
                    if (stryMutAct_9fa48("44058")) {
                      {}
                    } else {
                      stryCov_9fa48("44058");
                      return next(err);
                    }
                  }
                  db.getObjectFields(stryMutAct_9fa48("44059") ? `` : (stryCov_9fa48("44059"), `post:${pid}`), stryMutAct_9fa48("44060") ? [] : (stryCov_9fa48("44060"), [stryMutAct_9fa48("44061") ? "" : (stryCov_9fa48("44061"), 'tid'), stryMutAct_9fa48("44062") ? "" : (stryCov_9fa48("44062"), 'timestamp')]), (err, postData) => {
                    if (stryMutAct_9fa48("44063")) {
                      {}
                    } else {
                      stryCov_9fa48("44063");
                      if (stryMutAct_9fa48("44066") ? (err || !postData) && !postData.tid : stryMutAct_9fa48("44065") ? false : stryMutAct_9fa48("44064") ? true : (stryCov_9fa48("44064", "44065", "44066"), (stryMutAct_9fa48("44068") ? err && !postData : stryMutAct_9fa48("44067") ? false : (stryCov_9fa48("44067", "44068"), err || (stryMutAct_9fa48("44069") ? postData : (stryCov_9fa48("44069"), !postData)))) || (stryMutAct_9fa48("44070") ? postData.tid : (stryCov_9fa48("44070"), !postData.tid)))) {
                        if (stryMutAct_9fa48("44071")) {
                          {}
                        } else {
                          stryCov_9fa48("44071");
                          return next(err);
                        }
                      }
                      db.sortedSetAdd(stryMutAct_9fa48("44072") ? `` : (stryCov_9fa48("44072"), `cid:${cid}:recent_tids`), postData.timestamp, postData.tid, next);
                    }
                  });
                }
              });
            }
          }, callback);
        }
      });
    }
  }
});