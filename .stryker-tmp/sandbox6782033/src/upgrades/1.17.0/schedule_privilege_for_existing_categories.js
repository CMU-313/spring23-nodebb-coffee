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
const privileges = require('../../privileges');
module.exports = stryMutAct_9fa48("43790") ? {} : (stryCov_9fa48("43790"), {
  name: stryMutAct_9fa48("43791") ? "" : (stryCov_9fa48("43791"), 'Add "schedule" to default privileges of admins and gmods for existing categories'),
  timestamp: Date.UTC(2021, 2, 11),
  method: async () => {
    if (stryMutAct_9fa48("43792")) {
      {}
    } else {
      stryCov_9fa48("43792");
      const privilegeToGive = stryMutAct_9fa48("43793") ? [] : (stryCov_9fa48("43793"), [stryMutAct_9fa48("43794") ? "" : (stryCov_9fa48("43794"), 'groups:topics:schedule')]);
      const cids = await db.getSortedSetRevRange(stryMutAct_9fa48("43795") ? "" : (stryCov_9fa48("43795"), 'categories:cid'), 0, stryMutAct_9fa48("43796") ? +1 : (stryCov_9fa48("43796"), -1));
      for (const cid of cids) {
        if (stryMutAct_9fa48("43797")) {
          {}
        } else {
          stryCov_9fa48("43797");
          /* eslint-disable no-await-in-loop */
          await privileges.categories.give(privilegeToGive, cid, stryMutAct_9fa48("43798") ? [] : (stryCov_9fa48("43798"), [stryMutAct_9fa48("43799") ? "" : (stryCov_9fa48("43799"), 'administrators'), stryMutAct_9fa48("43800") ? "" : (stryCov_9fa48("43800"), 'Global Moderators')]));
        }
      }
    }
  }
});