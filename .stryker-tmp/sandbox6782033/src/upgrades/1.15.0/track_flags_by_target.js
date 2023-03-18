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
module.exports = stryMutAct_9fa48("43517") ? {} : (stryCov_9fa48("43517"), {
  name: stryMutAct_9fa48("43518") ? "" : (stryCov_9fa48("43518"), 'New sorted set for tracking flags by target'),
  timestamp: Date.UTC(2020, 6, 15),
  method: async () => {
    if (stryMutAct_9fa48("43519")) {
      {}
    } else {
      stryCov_9fa48("43519");
      const flags = await db.getSortedSetRange(stryMutAct_9fa48("43520") ? "" : (stryCov_9fa48("43520"), 'flags:hash'), 0, stryMutAct_9fa48("43521") ? +1 : (stryCov_9fa48("43521"), -1));
      await Promise.all(flags.map(async flag => {
        if (stryMutAct_9fa48("43522")) {
          {}
        } else {
          stryCov_9fa48("43522");
          flag = stryMutAct_9fa48("43523") ? flag.split(':') : (stryCov_9fa48("43523"), flag.split(stryMutAct_9fa48("43524") ? "" : (stryCov_9fa48("43524"), ':')).slice(0, 2));
          await db.sortedSetIncrBy(stryMutAct_9fa48("43525") ? "" : (stryCov_9fa48("43525"), 'flags:byTarget'), 1, flag.join(stryMutAct_9fa48("43526") ? "" : (stryCov_9fa48("43526"), ':')));
        }
      }));
    }
  }
});