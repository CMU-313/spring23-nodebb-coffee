/* eslint-disable no-await-in-loop */
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
const categories = require('../../categories');
module.exports = stryMutAct_9fa48("42706") ? {} : (stryCov_9fa48("42706"), {
  name: stryMutAct_9fa48("42707") ? "" : (stryCov_9fa48("42707"), 'Update category watch data'),
  timestamp: Date.UTC(2018, 11, 13),
  method: async function () {
    if (stryMutAct_9fa48("42708")) {
      {}
    } else {
      stryCov_9fa48("42708");
      const {
        progress
      } = this;
      const cids = await db.getSortedSetRange(stryMutAct_9fa48("42709") ? "" : (stryCov_9fa48("42709"), 'categories:cid'), 0, stryMutAct_9fa48("42710") ? +1 : (stryCov_9fa48("42710"), -1));
      const keys = cids.map(stryMutAct_9fa48("42711") ? () => undefined : (stryCov_9fa48("42711"), cid => stryMutAct_9fa48("42712") ? `` : (stryCov_9fa48("42712"), `cid:${cid}:ignorers`)));
      await batch.processSortedSet(stryMutAct_9fa48("42713") ? "" : (stryCov_9fa48("42713"), 'users:joindate'), async uids => {
        if (stryMutAct_9fa48("42714")) {
          {}
        } else {
          stryCov_9fa48("42714");
          progress.incr(uids.length);
          for (const cid of cids) {
            if (stryMutAct_9fa48("42715")) {
              {}
            } else {
              stryCov_9fa48("42715");
              const isMembers = await db.isSortedSetMembers(stryMutAct_9fa48("42716") ? `` : (stryCov_9fa48("42716"), `cid:${cid}:ignorers`), uids);
              uids = stryMutAct_9fa48("42717") ? uids : (stryCov_9fa48("42717"), uids.filter(stryMutAct_9fa48("42718") ? () => undefined : (stryCov_9fa48("42718"), (uid, index) => isMembers[index])));
              if (stryMutAct_9fa48("42720") ? false : stryMutAct_9fa48("42719") ? true : (stryCov_9fa48("42719", "42720"), uids.length)) {
                if (stryMutAct_9fa48("42721")) {
                  {}
                } else {
                  stryCov_9fa48("42721");
                  const states = uids.map(stryMutAct_9fa48("42722") ? () => undefined : (stryCov_9fa48("42722"), () => categories.watchStates.ignoring));
                  await db.sortedSetAdd(stryMutAct_9fa48("42723") ? `` : (stryCov_9fa48("42723"), `cid:${cid}:uid:watch:state`), states, uids);
                }
              }
            }
          }
        }
      }, stryMutAct_9fa48("42724") ? {} : (stryCov_9fa48("42724"), {
        progress: progress,
        batch: 500
      }));
      await db.deleteAll(keys);
    }
  }
});