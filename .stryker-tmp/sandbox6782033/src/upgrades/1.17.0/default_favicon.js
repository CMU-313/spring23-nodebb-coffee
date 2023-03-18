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
const nconf = require('nconf');
const path = require('path');
const fs = require('fs');
const file = require('../../file');
module.exports = stryMutAct_9fa48("43776") ? {} : (stryCov_9fa48("43776"), {
  name: stryMutAct_9fa48("43777") ? "" : (stryCov_9fa48("43777"), 'Store default favicon if it does not exist'),
  timestamp: Date.UTC(2021, 2, 9),
  method: async function () {
    if (stryMutAct_9fa48("43778")) {
      {}
    } else {
      stryCov_9fa48("43778");
      const pathToIco = path.join(nconf.get(stryMutAct_9fa48("43779") ? "" : (stryCov_9fa48("43779"), 'upload_path')), stryMutAct_9fa48("43780") ? "" : (stryCov_9fa48("43780"), 'system'), stryMutAct_9fa48("43781") ? "" : (stryCov_9fa48("43781"), 'favicon.ico'));
      const defaultIco = path.join(nconf.get(stryMutAct_9fa48("43782") ? "" : (stryCov_9fa48("43782"), 'base_dir')), stryMutAct_9fa48("43783") ? "" : (stryCov_9fa48("43783"), 'public'), stryMutAct_9fa48("43784") ? "" : (stryCov_9fa48("43784"), 'favicon.ico'));
      const targetExists = await file.exists(pathToIco);
      const defaultExists = await file.exists(defaultIco);
      if (stryMutAct_9fa48("43787") ? defaultExists || !targetExists : stryMutAct_9fa48("43786") ? false : stryMutAct_9fa48("43785") ? true : (stryCov_9fa48("43785", "43786", "43787"), defaultExists && (stryMutAct_9fa48("43788") ? targetExists : (stryCov_9fa48("43788"), !targetExists)))) {
        if (stryMutAct_9fa48("43789")) {
          {}
        } else {
          stryCov_9fa48("43789");
          await fs.promises.copyFile(defaultIco, pathToIco);
        }
      }
    }
  }
});