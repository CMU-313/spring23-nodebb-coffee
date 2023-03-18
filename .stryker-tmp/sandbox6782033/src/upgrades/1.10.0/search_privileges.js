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
module.exports = stryMutAct_9fa48("42390") ? {} : (stryCov_9fa48("42390"), {
  name: stryMutAct_9fa48("42391") ? "" : (stryCov_9fa48("42391"), 'Give global search privileges'),
  timestamp: Date.UTC(2018, 4, 28),
  method: async function () {
    if (stryMutAct_9fa48("42392")) {
      {}
    } else {
      stryCov_9fa48("42392");
      const meta = require('../../meta');
      const privileges = require('../../privileges');
      const allowGuestSearching = stryMutAct_9fa48("42395") ? parseInt(meta.config.allowGuestSearching, 10) !== 1 : stryMutAct_9fa48("42394") ? false : stryMutAct_9fa48("42393") ? true : (stryCov_9fa48("42393", "42394", "42395"), parseInt(meta.config.allowGuestSearching, 10) === 1);
      const allowGuestUserSearching = stryMutAct_9fa48("42398") ? parseInt(meta.config.allowGuestUserSearching, 10) !== 1 : stryMutAct_9fa48("42397") ? false : stryMutAct_9fa48("42396") ? true : (stryCov_9fa48("42396", "42397", "42398"), parseInt(meta.config.allowGuestUserSearching, 10) === 1);
      await privileges.global.give(stryMutAct_9fa48("42399") ? [] : (stryCov_9fa48("42399"), [stryMutAct_9fa48("42400") ? "" : (stryCov_9fa48("42400"), 'groups:search:content'), stryMutAct_9fa48("42401") ? "" : (stryCov_9fa48("42401"), 'groups:search:users'), stryMutAct_9fa48("42402") ? "" : (stryCov_9fa48("42402"), 'groups:search:tags')]), stryMutAct_9fa48("42403") ? "" : (stryCov_9fa48("42403"), 'registered-users'));
      const guestPrivs = stryMutAct_9fa48("42404") ? ["Stryker was here"] : (stryCov_9fa48("42404"), []);
      if (stryMutAct_9fa48("42406") ? false : stryMutAct_9fa48("42405") ? true : (stryCov_9fa48("42405", "42406"), allowGuestSearching)) {
        if (stryMutAct_9fa48("42407")) {
          {}
        } else {
          stryCov_9fa48("42407");
          guestPrivs.push(stryMutAct_9fa48("42408") ? "" : (stryCov_9fa48("42408"), 'groups:search:content'));
        }
      }
      if (stryMutAct_9fa48("42410") ? false : stryMutAct_9fa48("42409") ? true : (stryCov_9fa48("42409", "42410"), allowGuestUserSearching)) {
        if (stryMutAct_9fa48("42411")) {
          {}
        } else {
          stryCov_9fa48("42411");
          guestPrivs.push(stryMutAct_9fa48("42412") ? "" : (stryCov_9fa48("42412"), 'groups:search:users'));
        }
      }
      guestPrivs.push(stryMutAct_9fa48("42413") ? "" : (stryCov_9fa48("42413"), 'groups:search:tags'));
      await privileges.global.give(guestPrivs, stryMutAct_9fa48("42414") ? "" : (stryCov_9fa48("42414"), 'guests'));
    }
  }
});