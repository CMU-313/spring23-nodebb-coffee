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
const posts = require('../../posts');
module.exports = stryMutAct_9fa48("45049") ? {} : (stryCov_9fa48("45049"), {
  name: stryMutAct_9fa48("45050") ? "" : (stryCov_9fa48("45050"), 'Refresh post-upload associations'),
  timestamp: Date.UTC(2018, 3, 16),
  method: function (callback) {
    if (stryMutAct_9fa48("45051")) {
      {}
    } else {
      stryCov_9fa48("45051");
      const {
        progress
      } = this;
      require('../../batch').processSortedSet(stryMutAct_9fa48("45052") ? "" : (stryCov_9fa48("45052"), 'posts:pid'), (pids, next) => {
        if (stryMutAct_9fa48("45053")) {
          {}
        } else {
          stryCov_9fa48("45053");
          async.each(pids, (pid, next) => {
            if (stryMutAct_9fa48("45054")) {
              {}
            } else {
              stryCov_9fa48("45054");
              posts.uploads.sync(pid, next);
              progress.incr();
            }
          }, next);
        }
      }, stryMutAct_9fa48("45055") ? {} : (stryCov_9fa48("45055"), {
        progress: this.progress
      }), callback);
    }
  }
});