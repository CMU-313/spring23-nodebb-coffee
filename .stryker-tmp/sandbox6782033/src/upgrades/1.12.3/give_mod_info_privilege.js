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
const privileges = require('../../privileges');
const groups = require('../../groups');
module.exports = stryMutAct_9fa48("42830") ? {} : (stryCov_9fa48("42830"), {
  name: stryMutAct_9fa48("42831") ? "" : (stryCov_9fa48("42831"), 'give mod info privilege'),
  timestamp: Date.UTC(2019, 9, 8),
  method: async function () {
    if (stryMutAct_9fa48("42832")) {
      {}
    } else {
      stryCov_9fa48("42832");
      const cids = await db.getSortedSetRevRange(stryMutAct_9fa48("42833") ? "" : (stryCov_9fa48("42833"), 'categories:cid'), 0, stryMutAct_9fa48("42834") ? +1 : (stryCov_9fa48("42834"), -1));
      for (const cid of cids) {
        if (stryMutAct_9fa48("42835")) {
          {}
        } else {
          stryCov_9fa48("42835");
          await givePrivsToModerators(cid, stryMutAct_9fa48("42836") ? "Stryker was here!" : (stryCov_9fa48("42836"), ''));
          await givePrivsToModerators(cid, stryMutAct_9fa48("42837") ? "" : (stryCov_9fa48("42837"), 'groups:'));
        }
      }
      await privileges.global.give(stryMutAct_9fa48("42838") ? [] : (stryCov_9fa48("42838"), [stryMutAct_9fa48("42839") ? "" : (stryCov_9fa48("42839"), 'groups:view:users:info')]), stryMutAct_9fa48("42840") ? "" : (stryCov_9fa48("42840"), 'Global Moderators'));
      async function givePrivsToModerators(cid, groupPrefix) {
        if (stryMutAct_9fa48("42841")) {
          {}
        } else {
          stryCov_9fa48("42841");
          const members = await db.getSortedSetRevRange(stryMutAct_9fa48("42842") ? `` : (stryCov_9fa48("42842"), `group:cid:${cid}:privileges:${groupPrefix}moderate:members`), 0, stryMutAct_9fa48("42843") ? +1 : (stryCov_9fa48("42843"), -1));
          for (const member of members) {
            if (stryMutAct_9fa48("42844")) {
              {}
            } else {
              stryCov_9fa48("42844");
              await groups.join(stryMutAct_9fa48("42845") ? [] : (stryCov_9fa48("42845"), [stryMutAct_9fa48("42846") ? "" : (stryCov_9fa48("42846"), 'cid:0:privileges:view:users:info')]), member);
            }
          }
        }
      }
    }
  }
});