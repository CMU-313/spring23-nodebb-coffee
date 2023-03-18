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
const _ = require('lodash');
const db = require('../../database');
const batch = require('../../batch');
module.exports = stryMutAct_9fa48("43622") ? {} : (stryCov_9fa48("43622"), {
  name: stryMutAct_9fa48("43623") ? "" : (stryCov_9fa48("43623"), 'Clear purged replies and toPid'),
  timestamp: Date.UTC(2020, 10, 26),
  method: async function () {
    if (stryMutAct_9fa48("43624")) {
      {}
    } else {
      stryCov_9fa48("43624");
      const {
        progress
      } = this;
      await batch.processSortedSet(stryMutAct_9fa48("43625") ? "" : (stryCov_9fa48("43625"), 'posts:pid'), async pids => {
        if (stryMutAct_9fa48("43626")) {
          {}
        } else {
          stryCov_9fa48("43626");
          progress.incr(pids.length);
          let postData = await db.getObjects(pids.map(stryMutAct_9fa48("43627") ? () => undefined : (stryCov_9fa48("43627"), pid => stryMutAct_9fa48("43628") ? `` : (stryCov_9fa48("43628"), `post:${pid}`))));
          postData = stryMutAct_9fa48("43629") ? postData : (stryCov_9fa48("43629"), postData.filter(stryMutAct_9fa48("43630") ? () => undefined : (stryCov_9fa48("43630"), p => stryMutAct_9fa48("43633") ? p || parseInt(p.toPid, 10) : stryMutAct_9fa48("43632") ? false : stryMutAct_9fa48("43631") ? true : (stryCov_9fa48("43631", "43632", "43633"), p && parseInt(p.toPid, 10)))));
          if (stryMutAct_9fa48("43636") ? false : stryMutAct_9fa48("43635") ? true : stryMutAct_9fa48("43634") ? postData.length : (stryCov_9fa48("43634", "43635", "43636"), !postData.length)) {
            if (stryMutAct_9fa48("43637")) {
              {}
            } else {
              stryCov_9fa48("43637");
              return;
            }
          }
          const toPids = postData.map(stryMutAct_9fa48("43638") ? () => undefined : (stryCov_9fa48("43638"), p => p.toPid));
          const exists = await db.exists(toPids.map(stryMutAct_9fa48("43639") ? () => undefined : (stryCov_9fa48("43639"), pid => stryMutAct_9fa48("43640") ? `` : (stryCov_9fa48("43640"), `post:${pid}`))));
          const pidsToDelete = stryMutAct_9fa48("43641") ? postData.map(p => p.pid) : (stryCov_9fa48("43641"), postData.filter(stryMutAct_9fa48("43642") ? () => undefined : (stryCov_9fa48("43642"), (p, index) => stryMutAct_9fa48("43643") ? exists[index] : (stryCov_9fa48("43643"), !exists[index]))).map(stryMutAct_9fa48("43644") ? () => undefined : (stryCov_9fa48("43644"), p => p.pid)));
          await db.deleteObjectFields(pidsToDelete.map(stryMutAct_9fa48("43645") ? () => undefined : (stryCov_9fa48("43645"), pid => stryMutAct_9fa48("43646") ? `` : (stryCov_9fa48("43646"), `post:${pid}`))), stryMutAct_9fa48("43647") ? [] : (stryCov_9fa48("43647"), [stryMutAct_9fa48("43648") ? "" : (stryCov_9fa48("43648"), 'toPid')]));
          const repliesToDelete = _.uniq(stryMutAct_9fa48("43649") ? toPids : (stryCov_9fa48("43649"), toPids.filter(stryMutAct_9fa48("43650") ? () => undefined : (stryCov_9fa48("43650"), (pid, index) => stryMutAct_9fa48("43651") ? exists[index] : (stryCov_9fa48("43651"), !exists[index])))));
          await db.deleteAll(repliesToDelete.map(stryMutAct_9fa48("43652") ? () => undefined : (stryCov_9fa48("43652"), pid => stryMutAct_9fa48("43653") ? `` : (stryCov_9fa48("43653"), `pid:${pid}:replies`))));
        }
      }, stryMutAct_9fa48("43654") ? {} : (stryCov_9fa48("43654"), {
        progress: progress,
        batchSize: 500
      }));
    }
  }
});