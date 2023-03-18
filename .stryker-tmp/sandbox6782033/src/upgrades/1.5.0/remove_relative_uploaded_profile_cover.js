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
const db = require('../../database');
const batch = require('../../batch');
module.exports = stryMutAct_9fa48("44438") ? {} : (stryCov_9fa48("44438"), {
  name: stryMutAct_9fa48("44439") ? "" : (stryCov_9fa48("44439"), 'Remove relative_path from uploaded profile cover urls'),
  timestamp: Date.UTC(2017, 3, 26),
  method: async function () {
    if (stryMutAct_9fa48("44440")) {
      {}
    } else {
      stryCov_9fa48("44440");
      const {
        progress
      } = this;
      await batch.processSortedSet(stryMutAct_9fa48("44441") ? "" : (stryCov_9fa48("44441"), 'users:joindate'), async ids => {
        if (stryMutAct_9fa48("44442")) {
          {}
        } else {
          stryCov_9fa48("44442");
          await Promise.all(ids.map(async uid => {
            if (stryMutAct_9fa48("44443")) {
              {}
            } else {
              stryCov_9fa48("44443");
              const url = await db.getObjectField(stryMutAct_9fa48("44444") ? `` : (stryCov_9fa48("44444"), `user:${uid}`), stryMutAct_9fa48("44445") ? "" : (stryCov_9fa48("44445"), 'cover:url'));
              progress.incr();
              if (stryMutAct_9fa48("44447") ? false : stryMutAct_9fa48("44446") ? true : (stryCov_9fa48("44446", "44447"), url)) {
                if (stryMutAct_9fa48("44448")) {
                  {}
                } else {
                  stryCov_9fa48("44448");
                  const newUrl = url.replace(stryMutAct_9fa48("44450") ? /^.\/uploads\// : stryMutAct_9fa48("44449") ? /.*?\/uploads\// : (stryCov_9fa48("44449", "44450"), /^.*?\/uploads\//), stryMutAct_9fa48("44451") ? "" : (stryCov_9fa48("44451"), '/assets/uploads/'));
                  await db.setObjectField(stryMutAct_9fa48("44452") ? `` : (stryCov_9fa48("44452"), `user:${uid}`), stryMutAct_9fa48("44453") ? "" : (stryCov_9fa48("44453"), 'cover:url'), newUrl);
                }
              }
            }
          }));
        }
      }, stryMutAct_9fa48("44454") ? {} : (stryCov_9fa48("44454"), {
        progress: this.progress
      }));
    }
  }
});