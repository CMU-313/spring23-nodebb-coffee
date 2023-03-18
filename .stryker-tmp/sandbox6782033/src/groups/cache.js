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
const cacheCreate = require('../cache/lru');
module.exports = function (Groups) {
  if (stryMutAct_9fa48("19645")) {
    {}
  } else {
    stryCov_9fa48("19645");
    Groups.cache = cacheCreate(stryMutAct_9fa48("19646") ? {} : (stryCov_9fa48("19646"), {
      name: stryMutAct_9fa48("19647") ? "" : (stryCov_9fa48("19647"), 'group'),
      max: 40000,
      ttl: 0
    }));
    Groups.clearCache = function (uid, groupNames) {
      if (stryMutAct_9fa48("19648")) {
        {}
      } else {
        stryCov_9fa48("19648");
        if (stryMutAct_9fa48("19651") ? false : stryMutAct_9fa48("19650") ? true : stryMutAct_9fa48("19649") ? Array.isArray(groupNames) : (stryCov_9fa48("19649", "19650", "19651"), !Array.isArray(groupNames))) {
          if (stryMutAct_9fa48("19652")) {
            {}
          } else {
            stryCov_9fa48("19652");
            groupNames = stryMutAct_9fa48("19653") ? [] : (stryCov_9fa48("19653"), [groupNames]);
          }
        }
        const keys = groupNames.map(stryMutAct_9fa48("19654") ? () => undefined : (stryCov_9fa48("19654"), name => stryMutAct_9fa48("19655") ? `` : (stryCov_9fa48("19655"), `${uid}:${name}`)));
        Groups.cache.del(keys);
      }
    };
  }
};