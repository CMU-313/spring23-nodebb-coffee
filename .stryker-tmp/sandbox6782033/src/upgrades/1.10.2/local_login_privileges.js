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
module.exports = stryMutAct_9fa48("42493") ? {} : (stryCov_9fa48("42493"), {
  name: stryMutAct_9fa48("42494") ? "" : (stryCov_9fa48("42494"), 'Give global local login privileges'),
  timestamp: Date.UTC(2018, 8, 28),
  method: function (callback) {
    if (stryMutAct_9fa48("42495")) {
      {}
    } else {
      stryCov_9fa48("42495");
      const meta = require('../../meta');
      const privileges = require('../../privileges');
      const allowLocalLogin = stryMutAct_9fa48("42498") ? parseInt(meta.config.allowLocalLogin, 10) === 0 : stryMutAct_9fa48("42497") ? false : stryMutAct_9fa48("42496") ? true : (stryCov_9fa48("42496", "42497", "42498"), parseInt(meta.config.allowLocalLogin, 10) !== 0);
      if (stryMutAct_9fa48("42500") ? false : stryMutAct_9fa48("42499") ? true : (stryCov_9fa48("42499", "42500"), allowLocalLogin)) {
        if (stryMutAct_9fa48("42501")) {
          {}
        } else {
          stryCov_9fa48("42501");
          privileges.global.give(stryMutAct_9fa48("42502") ? [] : (stryCov_9fa48("42502"), [stryMutAct_9fa48("42503") ? "" : (stryCov_9fa48("42503"), 'groups:local:login')]), stryMutAct_9fa48("42504") ? "" : (stryCov_9fa48("42504"), 'registered-users'), callback);
        }
      } else {
        if (stryMutAct_9fa48("42505")) {
          {}
        } else {
          stryCov_9fa48("42505");
          callback();
        }
      }
    }
  }
});