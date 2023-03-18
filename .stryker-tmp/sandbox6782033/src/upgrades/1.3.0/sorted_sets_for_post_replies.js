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
module.exports = stryMutAct_9fa48("44135") ? {} : (stryCov_9fa48("44135"), {
  name: stryMutAct_9fa48("44136") ? "" : (stryCov_9fa48("44136"), 'Sorted sets for post replies'),
  timestamp: Date.UTC(2016, 9, 14),
  method: function (callback) {
    if (stryMutAct_9fa48("44137")) {
      {}
    } else {
      stryCov_9fa48("44137");
      const posts = require('../../posts');
      const batch = require('../../batch');
      const {
        progress
      } = this;
      batch.processSortedSet(stryMutAct_9fa48("44138") ? "" : (stryCov_9fa48("44138"), 'posts:pid'), (ids, next) => {
        if (stryMutAct_9fa48("44139")) {
          {}
        } else {
          stryCov_9fa48("44139");
          posts.getPostsFields(ids, stryMutAct_9fa48("44140") ? [] : (stryCov_9fa48("44140"), [stryMutAct_9fa48("44141") ? "" : (stryCov_9fa48("44141"), 'pid'), stryMutAct_9fa48("44142") ? "" : (stryCov_9fa48("44142"), 'toPid'), stryMutAct_9fa48("44143") ? "" : (stryCov_9fa48("44143"), 'timestamp')]), (err, data) => {
            if (stryMutAct_9fa48("44144")) {
              {}
            } else {
              stryCov_9fa48("44144");
              if (stryMutAct_9fa48("44146") ? false : stryMutAct_9fa48("44145") ? true : (stryCov_9fa48("44145", "44146"), err)) {
                if (stryMutAct_9fa48("44147")) {
                  {}
                } else {
                  stryCov_9fa48("44147");
                  return next(err);
                }
              }
              progress.incr();
              async.eachSeries(data, (postData, next) => {
                if (stryMutAct_9fa48("44148")) {
                  {}
                } else {
                  stryCov_9fa48("44148");
                  if (stryMutAct_9fa48("44151") ? false : stryMutAct_9fa48("44150") ? true : stryMutAct_9fa48("44149") ? parseInt(postData.toPid, 10) : (stryCov_9fa48("44149", "44150", "44151"), !parseInt(postData.toPid, 10))) {
                    if (stryMutAct_9fa48("44152")) {
                      {}
                    } else {
                      stryCov_9fa48("44152");
                      return next(null);
                    }
                  }
                  winston.verbose(stryMutAct_9fa48("44153") ? `` : (stryCov_9fa48("44153"), `processing pid: ${postData.pid} toPid: ${postData.toPid}`));
                  async.parallel(stryMutAct_9fa48("44154") ? [] : (stryCov_9fa48("44154"), [async.apply(db.sortedSetAdd, stryMutAct_9fa48("44155") ? `` : (stryCov_9fa48("44155"), `pid:${postData.toPid}:replies`), postData.timestamp, postData.pid), async.apply(db.incrObjectField, stryMutAct_9fa48("44156") ? `` : (stryCov_9fa48("44156"), `post:${postData.toPid}`), stryMutAct_9fa48("44157") ? "" : (stryCov_9fa48("44157"), 'replies'))]), next);
                }
              }, next);
            }
          });
        }
      }, stryMutAct_9fa48("44158") ? {} : (stryCov_9fa48("44158"), {
        progress: progress
      }), callback);
    }
  }
});