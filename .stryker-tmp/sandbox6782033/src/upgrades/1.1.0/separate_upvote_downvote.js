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
module.exports = stryMutAct_9fa48("42251") ? {} : (stryCov_9fa48("42251"), {
  name: stryMutAct_9fa48("42252") ? "" : (stryCov_9fa48("42252"), 'Store upvotes/downvotes separately'),
  timestamp: Date.UTC(2016, 5, 13),
  method: function (callback) {
    if (stryMutAct_9fa48("42253")) {
      {}
    } else {
      stryCov_9fa48("42253");
      const batch = require('../../batch');
      const posts = require('../../posts');
      let count = 0;
      const {
        progress
      } = this;
      batch.processSortedSet(stryMutAct_9fa48("42254") ? "" : (stryCov_9fa48("42254"), 'posts:pid'), (pids, next) => {
        if (stryMutAct_9fa48("42255")) {
          {}
        } else {
          stryCov_9fa48("42255");
          winston.verbose(stryMutAct_9fa48("42256") ? `` : (stryCov_9fa48("42256"), `upgraded ${count} posts`));
          stryMutAct_9fa48("42257") ? count -= pids.length : (stryCov_9fa48("42257"), count += pids.length);
          async.each(pids, (pid, next) => {
            if (stryMutAct_9fa48("42258")) {
              {}
            } else {
              stryCov_9fa48("42258");
              async.parallel(stryMutAct_9fa48("42259") ? {} : (stryCov_9fa48("42259"), {
                upvotes: function (next) {
                  if (stryMutAct_9fa48("42260")) {
                    {}
                  } else {
                    stryCov_9fa48("42260");
                    db.setCount(stryMutAct_9fa48("42261") ? `` : (stryCov_9fa48("42261"), `pid:${pid}:upvote`), next);
                  }
                },
                downvotes: function (next) {
                  if (stryMutAct_9fa48("42262")) {
                    {}
                  } else {
                    stryCov_9fa48("42262");
                    db.setCount(stryMutAct_9fa48("42263") ? `` : (stryCov_9fa48("42263"), `pid:${pid}:downvote`), next);
                  }
                }
              }), (err, results) => {
                if (stryMutAct_9fa48("42264")) {
                  {}
                } else {
                  stryCov_9fa48("42264");
                  if (stryMutAct_9fa48("42266") ? false : stryMutAct_9fa48("42265") ? true : (stryCov_9fa48("42265", "42266"), err)) {
                    if (stryMutAct_9fa48("42267")) {
                      {}
                    } else {
                      stryCov_9fa48("42267");
                      return next(err);
                    }
                  }
                  const data = {};
                  if (stryMutAct_9fa48("42271") ? parseInt(results.upvotes, 10) <= 0 : stryMutAct_9fa48("42270") ? parseInt(results.upvotes, 10) >= 0 : stryMutAct_9fa48("42269") ? false : stryMutAct_9fa48("42268") ? true : (stryCov_9fa48("42268", "42269", "42270", "42271"), parseInt(results.upvotes, 10) > 0)) {
                    if (stryMutAct_9fa48("42272")) {
                      {}
                    } else {
                      stryCov_9fa48("42272");
                      data.upvotes = results.upvotes;
                    }
                  }
                  if (stryMutAct_9fa48("42276") ? parseInt(results.downvotes, 10) <= 0 : stryMutAct_9fa48("42275") ? parseInt(results.downvotes, 10) >= 0 : stryMutAct_9fa48("42274") ? false : stryMutAct_9fa48("42273") ? true : (stryCov_9fa48("42273", "42274", "42275", "42276"), parseInt(results.downvotes, 10) > 0)) {
                    if (stryMutAct_9fa48("42277")) {
                      {}
                    } else {
                      stryCov_9fa48("42277");
                      data.downvotes = results.downvotes;
                    }
                  }
                  if (stryMutAct_9fa48("42279") ? false : stryMutAct_9fa48("42278") ? true : (stryCov_9fa48("42278", "42279"), Object.keys(data).length)) {
                    if (stryMutAct_9fa48("42280")) {
                      {}
                    } else {
                      stryCov_9fa48("42280");
                      posts.setPostFields(pid, data, next);
                    }
                  } else {
                    if (stryMutAct_9fa48("42281")) {
                      {}
                    } else {
                      stryCov_9fa48("42281");
                      next();
                    }
                  }
                  progress.incr();
                }
              }, next);
            }
          }, next);
        }
      }, stryMutAct_9fa48("42282") ? {} : (stryCov_9fa48("42282"), {
        progress: progress
      }), callback);
    }
  }
});