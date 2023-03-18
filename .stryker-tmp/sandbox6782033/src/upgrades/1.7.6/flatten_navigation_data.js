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
module.exports = stryMutAct_9fa48("44901") ? {} : (stryCov_9fa48("44901"), {
  name: stryMutAct_9fa48("44902") ? "" : (stryCov_9fa48("44902"), 'Flatten navigation data'),
  timestamp: Date.UTC(2018, 1, 17),
  method: async function () {
    if (stryMutAct_9fa48("44903")) {
      {}
    } else {
      stryCov_9fa48("44903");
      const data = await db.getSortedSetRangeWithScores(stryMutAct_9fa48("44904") ? "" : (stryCov_9fa48("44904"), 'navigation:enabled'), 0, stryMutAct_9fa48("44905") ? +1 : (stryCov_9fa48("44905"), -1));
      const order = stryMutAct_9fa48("44906") ? ["Stryker was here"] : (stryCov_9fa48("44906"), []);
      const items = stryMutAct_9fa48("44907") ? ["Stryker was here"] : (stryCov_9fa48("44907"), []);
      data.forEach(item => {
        if (stryMutAct_9fa48("44908")) {
          {}
        } else {
          stryCov_9fa48("44908");
          let navItem = JSON.parse(item.value);
          const keys = Object.keys(navItem);
          if (stryMutAct_9fa48("44911") ? keys.length || parseInt(keys[0], 10) >= 0 : stryMutAct_9fa48("44910") ? false : stryMutAct_9fa48("44909") ? true : (stryCov_9fa48("44909", "44910", "44911"), keys.length && (stryMutAct_9fa48("44914") ? parseInt(keys[0], 10) < 0 : stryMutAct_9fa48("44913") ? parseInt(keys[0], 10) > 0 : stryMutAct_9fa48("44912") ? true : (stryCov_9fa48("44912", "44913", "44914"), parseInt(keys[0], 10) >= 0)))) {
            if (stryMutAct_9fa48("44915")) {
              {}
            } else {
              stryCov_9fa48("44915");
              navItem = navItem[keys[0]];
            }
          }
          order.push(item.score);
          items.push(JSON.stringify(navItem));
        }
      });
      await db.delete(stryMutAct_9fa48("44916") ? "" : (stryCov_9fa48("44916"), 'navigation:enabled'));
      await db.sortedSetAdd(stryMutAct_9fa48("44917") ? "" : (stryCov_9fa48("44917"), 'navigation:enabled'), order, items);
    }
  }
});