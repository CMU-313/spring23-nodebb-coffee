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
module.exports = stryMutAct_9fa48("43872") ? {} : (stryCov_9fa48("43872"), {
  name: stryMutAct_9fa48("43873") ? "" : (stryCov_9fa48("43873"), 'Upgrade navigation items to hashes'),
  timestamp: Date.UTC(2021, 11, 13),
  method: async function () {
    if (stryMutAct_9fa48("43874")) {
      {}
    } else {
      stryCov_9fa48("43874");
      const data = await db.getSortedSetRangeWithScores(stryMutAct_9fa48("43875") ? "" : (stryCov_9fa48("43875"), 'navigation:enabled'), 0, stryMutAct_9fa48("43876") ? +1 : (stryCov_9fa48("43876"), -1));
      const order = stryMutAct_9fa48("43877") ? ["Stryker was here"] : (stryCov_9fa48("43877"), []);
      const bulkSet = stryMutAct_9fa48("43878") ? ["Stryker was here"] : (stryCov_9fa48("43878"), []);
      data.forEach(item => {
        if (stryMutAct_9fa48("43879")) {
          {}
        } else {
          stryCov_9fa48("43879");
          const navItem = JSON.parse(item.value);
          if (stryMutAct_9fa48("43882") ? navItem.hasOwnProperty('properties') || navItem.properties : stryMutAct_9fa48("43881") ? false : stryMutAct_9fa48("43880") ? true : (stryCov_9fa48("43880", "43881", "43882"), navItem.hasOwnProperty(stryMutAct_9fa48("43883") ? "" : (stryCov_9fa48("43883"), 'properties')) && navItem.properties)) {
            if (stryMutAct_9fa48("43884")) {
              {}
            } else {
              stryCov_9fa48("43884");
              if (stryMutAct_9fa48("43886") ? false : stryMutAct_9fa48("43885") ? true : (stryCov_9fa48("43885", "43886"), navItem.properties.hasOwnProperty(stryMutAct_9fa48("43887") ? "" : (stryCov_9fa48("43887"), 'targetBlank')))) {
                if (stryMutAct_9fa48("43888")) {
                  {}
                } else {
                  stryCov_9fa48("43888");
                  navItem.targetBlank = navItem.properties.targetBlank;
                }
              }
              delete navItem.properties;
            }
          }
          if (stryMutAct_9fa48("43891") ? navItem.hasOwnProperty('groups') || Array.isArray(navItem.groups) || typeof navItem.groups === 'string' : stryMutAct_9fa48("43890") ? false : stryMutAct_9fa48("43889") ? true : (stryCov_9fa48("43889", "43890", "43891"), navItem.hasOwnProperty(stryMutAct_9fa48("43892") ? "" : (stryCov_9fa48("43892"), 'groups')) && (stryMutAct_9fa48("43894") ? Array.isArray(navItem.groups) && typeof navItem.groups === 'string' : stryMutAct_9fa48("43893") ? true : (stryCov_9fa48("43893", "43894"), Array.isArray(navItem.groups) || (stryMutAct_9fa48("43896") ? typeof navItem.groups !== 'string' : stryMutAct_9fa48("43895") ? false : (stryCov_9fa48("43895", "43896"), typeof navItem.groups === (stryMutAct_9fa48("43897") ? "" : (stryCov_9fa48("43897"), 'string')))))))) {
            if (stryMutAct_9fa48("43898")) {
              {}
            } else {
              stryCov_9fa48("43898");
              navItem.groups = JSON.stringify(navItem.groups);
            }
          }
          bulkSet.push(stryMutAct_9fa48("43899") ? [] : (stryCov_9fa48("43899"), [stryMutAct_9fa48("43900") ? `` : (stryCov_9fa48("43900"), `navigation:enabled:${item.score}`), navItem]));
          order.push(item.score);
        }
      });
      await db.setObjectBulk(bulkSet);
      await db.delete(stryMutAct_9fa48("43901") ? "" : (stryCov_9fa48("43901"), 'navigation:enabled'));
      await db.sortedSetAdd(stryMutAct_9fa48("43902") ? "" : (stryCov_9fa48("43902"), 'navigation:enabled'), order, order);
    }
  }
});