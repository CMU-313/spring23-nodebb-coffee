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
const batch = require('../../batch');
module.exports = stryMutAct_9fa48("45016") ? {} : (stryCov_9fa48("45016"), {
  name: stryMutAct_9fa48("45017") ? "" : (stryCov_9fa48("45017"), 'Reformatting post diffs to be stored in lists and hash instead of single zset'),
  timestamp: Date.UTC(2018, 2, 15),
  method: function (callback) {
    if (stryMutAct_9fa48("45018")) {
      {}
    } else {
      stryCov_9fa48("45018");
      const {
        progress
      } = this;
      batch.processSortedSet(stryMutAct_9fa48("45019") ? "" : (stryCov_9fa48("45019"), 'posts:pid'), (pids, next) => {
        if (stryMutAct_9fa48("45020")) {
          {}
        } else {
          stryCov_9fa48("45020");
          async.each(pids, (pid, next) => {
            if (stryMutAct_9fa48("45021")) {
              {}
            } else {
              stryCov_9fa48("45021");
              db.getSortedSetRangeWithScores(stryMutAct_9fa48("45022") ? `` : (stryCov_9fa48("45022"), `post:${pid}:diffs`), 0, stryMutAct_9fa48("45023") ? +1 : (stryCov_9fa48("45023"), -1), (err, diffs) => {
                if (stryMutAct_9fa48("45024")) {
                  {}
                } else {
                  stryCov_9fa48("45024");
                  if (stryMutAct_9fa48("45026") ? false : stryMutAct_9fa48("45025") ? true : (stryCov_9fa48("45025", "45026"), err)) {
                    if (stryMutAct_9fa48("45027")) {
                      {}
                    } else {
                      stryCov_9fa48("45027");
                      return next(err);
                    }
                  }
                  if (stryMutAct_9fa48("45030") ? !diffs && !diffs.length : stryMutAct_9fa48("45029") ? false : stryMutAct_9fa48("45028") ? true : (stryCov_9fa48("45028", "45029", "45030"), (stryMutAct_9fa48("45031") ? diffs : (stryCov_9fa48("45031"), !diffs)) || (stryMutAct_9fa48("45032") ? diffs.length : (stryCov_9fa48("45032"), !diffs.length)))) {
                    if (stryMutAct_9fa48("45033")) {
                      {}
                    } else {
                      stryCov_9fa48("45033");
                      progress.incr();
                      return next();
                    }
                  }

                  // For each diff, push to list
                  async.each(diffs, (diff, next) => {
                    if (stryMutAct_9fa48("45034")) {
                      {}
                    } else {
                      stryCov_9fa48("45034");
                      async.series(stryMutAct_9fa48("45035") ? [] : (stryCov_9fa48("45035"), [async.apply(db.delete.bind(db), stryMutAct_9fa48("45036") ? `` : (stryCov_9fa48("45036"), `post:${pid}:diffs`)), async.apply(db.listPrepend.bind(db), stryMutAct_9fa48("45037") ? `` : (stryCov_9fa48("45037"), `post:${pid}:diffs`), diff.score), async.apply(db.setObject.bind(db), stryMutAct_9fa48("45038") ? `` : (stryCov_9fa48("45038"), `diff:${pid}.${diff.score}`), stryMutAct_9fa48("45039") ? {} : (stryCov_9fa48("45039"), {
                        pid: pid,
                        patch: diff.value
                      }))]), next);
                    }
                  }, err => {
                    if (stryMutAct_9fa48("45040")) {
                      {}
                    } else {
                      stryCov_9fa48("45040");
                      if (stryMutAct_9fa48("45042") ? false : stryMutAct_9fa48("45041") ? true : (stryCov_9fa48("45041", "45042"), err)) {
                        if (stryMutAct_9fa48("45043")) {
                          {}
                        } else {
                          stryCov_9fa48("45043");
                          return next(err);
                        }
                      }
                      progress.incr();
                      return next();
                    }
                  });
                }
              });
            }
          }, err => {
            if (stryMutAct_9fa48("45044")) {
              {}
            } else {
              stryCov_9fa48("45044");
              if (stryMutAct_9fa48("45046") ? false : stryMutAct_9fa48("45045") ? true : (stryCov_9fa48("45045", "45046"), err)) {
                if (stryMutAct_9fa48("45047")) {
                  {}
                } else {
                  stryCov_9fa48("45047");
                  // Probably type error, ok to incr and continue
                  progress.incr();
                }
              }
              return next();
            }
          });
        }
      }, stryMutAct_9fa48("45048") ? {} : (stryCov_9fa48("45048"), {
        progress: progress
      }), callback);
    }
  }
});