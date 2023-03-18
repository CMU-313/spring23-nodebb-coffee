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
module.exports = stryMutAct_9fa48("42658") ? {} : (stryCov_9fa48("42658"), {
  name: stryMutAct_9fa48("42659") ? "" : (stryCov_9fa48("42659"), 'Rename maximumImageWidth to resizeImageWidth'),
  timestamp: Date.UTC(2018, 9, 24),
  method: async function () {
    if (stryMutAct_9fa48("42660")) {
      {}
    } else {
      stryCov_9fa48("42660");
      const meta = require('../../meta');
      const value = await meta.configs.get(stryMutAct_9fa48("42661") ? "" : (stryCov_9fa48("42661"), 'maximumImageWidth'));
      await meta.configs.set(stryMutAct_9fa48("42662") ? "" : (stryCov_9fa48("42662"), 'resizeImageWidth'), value);
      await db.deleteObjectField(stryMutAct_9fa48("42663") ? "" : (stryCov_9fa48("42663"), 'config'), stryMutAct_9fa48("42664") ? "" : (stryCov_9fa48("42664"), 'maximumImageWidth'));
    }
  }
});