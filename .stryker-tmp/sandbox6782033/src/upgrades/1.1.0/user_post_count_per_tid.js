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
module.exports = stryMutAct_9fa48("42283") ? {} : (stryCov_9fa48("42283"), {
  name: stryMutAct_9fa48("42284") ? "" : (stryCov_9fa48("42284"), 'Users post count per tid'),
  timestamp: Date.UTC(2016, 3, 19),
  method: function (callback) {
    if (stryMutAct_9fa48("42285")) {
      {}
    } else {
      stryCov_9fa48("42285");
      const batch = require('../../batch');
      const topics = require('../../topics');
      let count = 0;
      batch.processSortedSet(stryMutAct_9fa48("42286") ? "" : (stryCov_9fa48("42286"), 'topics:tid'), (tids, next) => {
        if (stryMutAct_9fa48("42287")) {
          {}
        } else {
          stryCov_9fa48("42287");
          winston.verbose(stryMutAct_9fa48("42288") ? `` : (stryCov_9fa48("42288"), `upgraded ${count} topics`));
          stryMutAct_9fa48("42289") ? count -= tids.length : (stryCov_9fa48("42289"), count += tids.length);
          async.each(tids, (tid, next) => {
            if (stryMutAct_9fa48("42290")) {
              {}
            } else {
              stryCov_9fa48("42290");
              db.delete(stryMutAct_9fa48("42291") ? `` : (stryCov_9fa48("42291"), `tid:${tid}:posters`), err => {
                if (stryMutAct_9fa48("42292")) {
                  {}
                } else {
                  stryCov_9fa48("42292");
                  if (stryMutAct_9fa48("42294") ? false : stryMutAct_9fa48("42293") ? true : (stryCov_9fa48("42293", "42294"), err)) {
                    if (stryMutAct_9fa48("42295")) {
                      {}
                    } else {
                      stryCov_9fa48("42295");
                      return next(err);
                    }
                  }
                  topics.getPids(tid, (err, pids) => {
                    if (stryMutAct_9fa48("42296")) {
                      {}
                    } else {
                      stryCov_9fa48("42296");
                      if (stryMutAct_9fa48("42298") ? false : stryMutAct_9fa48("42297") ? true : (stryCov_9fa48("42297", "42298"), err)) {
                        if (stryMutAct_9fa48("42299")) {
                          {}
                        } else {
                          stryCov_9fa48("42299");
                          return next(err);
                        }
                      }
                      if (stryMutAct_9fa48("42302") ? false : stryMutAct_9fa48("42301") ? true : stryMutAct_9fa48("42300") ? pids.length : (stryCov_9fa48("42300", "42301", "42302"), !pids.length)) {
                        if (stryMutAct_9fa48("42303")) {
                          {}
                        } else {
                          stryCov_9fa48("42303");
                          return next();
                        }
                      }
                      async.eachSeries(pids, (pid, next) => {
                        if (stryMutAct_9fa48("42304")) {
                          {}
                        } else {
                          stryCov_9fa48("42304");
                          db.getObjectField(stryMutAct_9fa48("42305") ? `` : (stryCov_9fa48("42305"), `post:${pid}`), stryMutAct_9fa48("42306") ? "" : (stryCov_9fa48("42306"), 'uid'), (err, uid) => {
                            if (stryMutAct_9fa48("42307")) {
                              {}
                            } else {
                              stryCov_9fa48("42307");
                              if (stryMutAct_9fa48("42309") ? false : stryMutAct_9fa48("42308") ? true : (stryCov_9fa48("42308", "42309"), err)) {
                                if (stryMutAct_9fa48("42310")) {
                                  {}
                                } else {
                                  stryCov_9fa48("42310");
                                  return next(err);
                                }
                              }
                              if (stryMutAct_9fa48("42313") ? false : stryMutAct_9fa48("42312") ? true : stryMutAct_9fa48("42311") ? parseInt(uid, 10) : (stryCov_9fa48("42311", "42312", "42313"), !parseInt(uid, 10))) {
                                if (stryMutAct_9fa48("42314")) {
                                  {}
                                } else {
                                  stryCov_9fa48("42314");
                                  return next();
                                }
                              }
                              db.sortedSetIncrBy(stryMutAct_9fa48("42315") ? `` : (stryCov_9fa48("42315"), `tid:${tid}:posters`), 1, uid, next);
                            }
                          });
                        }
                      }, next);
                    }
                  });
                }
              });
            }
          }, next);
        }
      }, {}, callback);
    }
  }
});