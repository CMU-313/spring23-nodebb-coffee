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
const user = require('../../user');
module.exports = stryMutAct_9fa48("42767") ? {} : (stryCov_9fa48("42767"), {
  name: stryMutAct_9fa48("42768") ? "" : (stryCov_9fa48("42768"), 'Delete username email history for deleted users'),
  timestamp: Date.UTC(2019, 2, 25),
  method: function (callback) {
    if (stryMutAct_9fa48("42769")) {
      {}
    } else {
      stryCov_9fa48("42769");
      const {
        progress
      } = this;
      let currentUid = 1;
      db.getObjectField(stryMutAct_9fa48("42770") ? "" : (stryCov_9fa48("42770"), 'global'), stryMutAct_9fa48("42771") ? "" : (stryCov_9fa48("42771"), 'nextUid'), (err, nextUid) => {
        if (stryMutAct_9fa48("42772")) {
          {}
        } else {
          stryCov_9fa48("42772");
          if (stryMutAct_9fa48("42774") ? false : stryMutAct_9fa48("42773") ? true : (stryCov_9fa48("42773", "42774"), err)) {
            if (stryMutAct_9fa48("42775")) {
              {}
            } else {
              stryCov_9fa48("42775");
              return callback(err);
            }
          }
          progress.total = nextUid;
          async.whilst(next => {
            if (stryMutAct_9fa48("42776")) {
              {}
            } else {
              stryCov_9fa48("42776");
              next(null, stryMutAct_9fa48("42780") ? currentUid >= nextUid : stryMutAct_9fa48("42779") ? currentUid <= nextUid : stryMutAct_9fa48("42778") ? false : stryMutAct_9fa48("42777") ? true : (stryCov_9fa48("42777", "42778", "42779", "42780"), currentUid < nextUid));
            }
          }, next => {
            if (stryMutAct_9fa48("42781")) {
              {}
            } else {
              stryCov_9fa48("42781");
              progress.incr();
              user.exists(currentUid, (err, exists) => {
                if (stryMutAct_9fa48("42782")) {
                  {}
                } else {
                  stryCov_9fa48("42782");
                  if (stryMutAct_9fa48("42784") ? false : stryMutAct_9fa48("42783") ? true : (stryCov_9fa48("42783", "42784"), err)) {
                    if (stryMutAct_9fa48("42785")) {
                      {}
                    } else {
                      stryCov_9fa48("42785");
                      return next(err);
                    }
                  }
                  if (stryMutAct_9fa48("42787") ? false : stryMutAct_9fa48("42786") ? true : (stryCov_9fa48("42786", "42787"), exists)) {
                    if (stryMutAct_9fa48("42788")) {
                      {}
                    } else {
                      stryCov_9fa48("42788");
                      stryMutAct_9fa48("42789") ? currentUid -= 1 : (stryCov_9fa48("42789"), currentUid += 1);
                      return next();
                    }
                  }
                  db.deleteAll(stryMutAct_9fa48("42790") ? [] : (stryCov_9fa48("42790"), [stryMutAct_9fa48("42791") ? `` : (stryCov_9fa48("42791"), `user:${currentUid}:usernames`), stryMutAct_9fa48("42792") ? `` : (stryCov_9fa48("42792"), `user:${currentUid}:emails`)]), err => {
                    if (stryMutAct_9fa48("42793")) {
                      {}
                    } else {
                      stryCov_9fa48("42793");
                      if (stryMutAct_9fa48("42795") ? false : stryMutAct_9fa48("42794") ? true : (stryCov_9fa48("42794", "42795"), err)) {
                        if (stryMutAct_9fa48("42796")) {
                          {}
                        } else {
                          stryCov_9fa48("42796");
                          return next(err);
                        }
                      }
                      stryMutAct_9fa48("42797") ? currentUid -= 1 : (stryCov_9fa48("42797"), currentUid += 1);
                      next();
                    }
                  });
                }
              });
            }
          }, err => {
            if (stryMutAct_9fa48("42798")) {
              {}
            } else {
              stryCov_9fa48("42798");
              callback(err);
            }
          });
        }
      });
    }
  }
});