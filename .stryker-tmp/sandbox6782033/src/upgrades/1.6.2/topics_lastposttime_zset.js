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
module.exports = stryMutAct_9fa48("44579") ? {} : (stryCov_9fa48("44579"), {
  name: stryMutAct_9fa48("44580") ? "" : (stryCov_9fa48("44580"), 'New sorted set cid:<cid>:tids:lastposttime'),
  timestamp: Date.UTC(2017, 9, 30),
  method: function (callback) {
    if (stryMutAct_9fa48("44581")) {
      {}
    } else {
      stryCov_9fa48("44581");
      const {
        progress
      } = this;
      require('../../batch').processSortedSet(stryMutAct_9fa48("44582") ? "" : (stryCov_9fa48("44582"), 'topics:tid'), (tids, next) => {
        if (stryMutAct_9fa48("44583")) {
          {}
        } else {
          stryCov_9fa48("44583");
          async.eachSeries(tids, (tid, next) => {
            if (stryMutAct_9fa48("44584")) {
              {}
            } else {
              stryCov_9fa48("44584");
              db.getObjectFields(stryMutAct_9fa48("44585") ? `` : (stryCov_9fa48("44585"), `topic:${tid}`), stryMutAct_9fa48("44586") ? [] : (stryCov_9fa48("44586"), [stryMutAct_9fa48("44587") ? "" : (stryCov_9fa48("44587"), 'cid'), stryMutAct_9fa48("44588") ? "" : (stryCov_9fa48("44588"), 'timestamp'), stryMutAct_9fa48("44589") ? "" : (stryCov_9fa48("44589"), 'lastposttime')]), (err, topicData) => {
                if (stryMutAct_9fa48("44590")) {
                  {}
                } else {
                  stryCov_9fa48("44590");
                  if (stryMutAct_9fa48("44593") ? err && !topicData : stryMutAct_9fa48("44592") ? false : stryMutAct_9fa48("44591") ? true : (stryCov_9fa48("44591", "44592", "44593"), err || (stryMutAct_9fa48("44594") ? topicData : (stryCov_9fa48("44594"), !topicData)))) {
                    if (stryMutAct_9fa48("44595")) {
                      {}
                    } else {
                      stryCov_9fa48("44595");
                      return next(err);
                    }
                  }
                  progress.incr();
                  const timestamp = stryMutAct_9fa48("44598") ? (topicData.lastposttime || topicData.timestamp) && Date.now() : stryMutAct_9fa48("44597") ? false : stryMutAct_9fa48("44596") ? true : (stryCov_9fa48("44596", "44597", "44598"), (stryMutAct_9fa48("44600") ? topicData.lastposttime && topicData.timestamp : stryMutAct_9fa48("44599") ? false : (stryCov_9fa48("44599", "44600"), topicData.lastposttime || topicData.timestamp)) || Date.now());
                  db.sortedSetAdd(stryMutAct_9fa48("44601") ? `` : (stryCov_9fa48("44601"), `cid:${topicData.cid}:tids:lastposttime`), timestamp, tid, next);
                }
              }, next);
            }
          }, next);
        }
      }, stryMutAct_9fa48("44602") ? {} : (stryCov_9fa48("44602"), {
        progress: this.progress
      }), callback);
    }
  }
});