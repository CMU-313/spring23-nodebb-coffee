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
module.exports = stryMutAct_9fa48("44218") ? {} : (stryCov_9fa48("44218"), {
  name: stryMutAct_9fa48("44219") ? "" : (stryCov_9fa48("44219"), 'Upgrading config urls to use assets route'),
  timestamp: Date.UTC(2017, 1, 28),
  method: async function () {
    if (stryMutAct_9fa48("44220")) {
      {}
    } else {
      stryCov_9fa48("44220");
      const config = await db.getObject(stryMutAct_9fa48("44221") ? "" : (stryCov_9fa48("44221"), 'config'));
      if (stryMutAct_9fa48("44223") ? false : stryMutAct_9fa48("44222") ? true : (stryCov_9fa48("44222", "44223"), config)) {
        if (stryMutAct_9fa48("44224")) {
          {}
        } else {
          stryCov_9fa48("44224");
          const keys = stryMutAct_9fa48("44225") ? [] : (stryCov_9fa48("44225"), [stryMutAct_9fa48("44226") ? "" : (stryCov_9fa48("44226"), 'brand:favicon'), stryMutAct_9fa48("44227") ? "" : (stryCov_9fa48("44227"), 'brand:touchicon'), stryMutAct_9fa48("44228") ? "" : (stryCov_9fa48("44228"), 'og:image'), stryMutAct_9fa48("44229") ? "" : (stryCov_9fa48("44229"), 'brand:logo:url'), stryMutAct_9fa48("44230") ? "" : (stryCov_9fa48("44230"), 'defaultAvatar'), stryMutAct_9fa48("44231") ? "" : (stryCov_9fa48("44231"), 'profile:defaultCovers')]);
          keys.forEach(key => {
            if (stryMutAct_9fa48("44232")) {
              {}
            } else {
              stryCov_9fa48("44232");
              const oldValue = config[key];
              if (stryMutAct_9fa48("44235") ? !oldValue && typeof oldValue !== 'string' : stryMutAct_9fa48("44234") ? false : stryMutAct_9fa48("44233") ? true : (stryCov_9fa48("44233", "44234", "44235"), (stryMutAct_9fa48("44236") ? oldValue : (stryCov_9fa48("44236"), !oldValue)) || (stryMutAct_9fa48("44238") ? typeof oldValue === 'string' : stryMutAct_9fa48("44237") ? false : (stryCov_9fa48("44237", "44238"), typeof oldValue !== (stryMutAct_9fa48("44239") ? "" : (stryCov_9fa48("44239"), 'string')))))) {
                if (stryMutAct_9fa48("44240")) {
                  {}
                } else {
                  stryCov_9fa48("44240");
                  return;
                }
              }
              config[key] = oldValue.replace(stryMutAct_9fa48("44241") ? /(?:\/assets)\/(images|uploads)\//g : (stryCov_9fa48("44241"), /(?:\/assets)?\/(images|uploads)\//g), stryMutAct_9fa48("44242") ? "" : (stryCov_9fa48("44242"), '/assets/$1/'));
            }
          });
          await db.setObject(stryMutAct_9fa48("44243") ? "" : (stryCov_9fa48("44243"), 'config'), config);
        }
      }
    }
  }
});