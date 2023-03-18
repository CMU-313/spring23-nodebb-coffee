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
module.exports = stryMutAct_9fa48("42063") ? {} : (stryCov_9fa48("42063"), {
  name: stryMutAct_9fa48("42064") ? "" : (stryCov_9fa48("42064"), 'Creating Global moderators group'),
  timestamp: Date.UTC(2016, 0, 23),
  method: async function () {
    if (stryMutAct_9fa48("42065")) {
      {}
    } else {
      stryCov_9fa48("42065");
      const groups = require('../../groups');
      const exists = await groups.exists(stryMutAct_9fa48("42066") ? "" : (stryCov_9fa48("42066"), 'Global Moderators'));
      if (stryMutAct_9fa48("42068") ? false : stryMutAct_9fa48("42067") ? true : (stryCov_9fa48("42067", "42068"), exists)) {
        if (stryMutAct_9fa48("42069")) {
          {}
        } else {
          stryCov_9fa48("42069");
          return;
        }
      }
      await groups.create(stryMutAct_9fa48("42070") ? {} : (stryCov_9fa48("42070"), {
        name: stryMutAct_9fa48("42071") ? "" : (stryCov_9fa48("42071"), 'Global Moderators'),
        userTitle: stryMutAct_9fa48("42072") ? "" : (stryCov_9fa48("42072"), 'Global Moderator'),
        description: stryMutAct_9fa48("42073") ? "" : (stryCov_9fa48("42073"), 'Forum wide moderators'),
        hidden: 0,
        private: 1,
        disableJoinRequests: 1
      }));
      await groups.show(stryMutAct_9fa48("42074") ? "" : (stryCov_9fa48("42074"), 'Global Moderators'));
    }
  }
});