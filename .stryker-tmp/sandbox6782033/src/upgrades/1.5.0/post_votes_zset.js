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
module.exports = stryMutAct_9fa48("44413") ? {} : (stryCov_9fa48("44413"), {
  name: stryMutAct_9fa48("44414") ? "" : (stryCov_9fa48("44414"), 'New sorted set posts:votes'),
  timestamp: Date.UTC(2017, 1, 27),
  method: function (callback) {
    if (stryMutAct_9fa48("44415")) {
      {}
    } else {
      stryCov_9fa48("44415");
      const {
        progress
      } = this;
      require('../../batch').processSortedSet(stryMutAct_9fa48("44416") ? "" : (stryCov_9fa48("44416"), 'posts:pid'), (pids, next) => {
        if (stryMutAct_9fa48("44417")) {
          {}
        } else {
          stryCov_9fa48("44417");
          async.each(pids, (pid, next) => {
            if (stryMutAct_9fa48("44418")) {
              {}
            } else {
              stryCov_9fa48("44418");
              db.getObjectFields(stryMutAct_9fa48("44419") ? `` : (stryCov_9fa48("44419"), `post:${pid}`), stryMutAct_9fa48("44420") ? [] : (stryCov_9fa48("44420"), [stryMutAct_9fa48("44421") ? "" : (stryCov_9fa48("44421"), 'upvotes'), stryMutAct_9fa48("44422") ? "" : (stryCov_9fa48("44422"), 'downvotes')]), (err, postData) => {
                if (stryMutAct_9fa48("44423")) {
                  {}
                } else {
                  stryCov_9fa48("44423");
                  if (stryMutAct_9fa48("44426") ? err && !postData : stryMutAct_9fa48("44425") ? false : stryMutAct_9fa48("44424") ? true : (stryCov_9fa48("44424", "44425", "44426"), err || (stryMutAct_9fa48("44427") ? postData : (stryCov_9fa48("44427"), !postData)))) {
                    if (stryMutAct_9fa48("44428")) {
                      {}
                    } else {
                      stryCov_9fa48("44428");
                      return next(err);
                    }
                  }
                  progress.incr();
                  const votes = stryMutAct_9fa48("44429") ? parseInt(postData.upvotes || 0, 10) + parseInt(postData.downvotes || 0, 10) : (stryCov_9fa48("44429"), parseInt(stryMutAct_9fa48("44432") ? postData.upvotes && 0 : stryMutAct_9fa48("44431") ? false : stryMutAct_9fa48("44430") ? true : (stryCov_9fa48("44430", "44431", "44432"), postData.upvotes || 0), 10) - parseInt(stryMutAct_9fa48("44435") ? postData.downvotes && 0 : stryMutAct_9fa48("44434") ? false : stryMutAct_9fa48("44433") ? true : (stryCov_9fa48("44433", "44434", "44435"), postData.downvotes || 0), 10));
                  db.sortedSetAdd(stryMutAct_9fa48("44436") ? "" : (stryCov_9fa48("44436"), 'posts:votes'), votes, pid, next);
                }
              });
            }
          }, next);
        }
      }, stryMutAct_9fa48("44437") ? {} : (stryCov_9fa48("44437"), {
        progress: this.progress
      }), callback);
    }
  }
});