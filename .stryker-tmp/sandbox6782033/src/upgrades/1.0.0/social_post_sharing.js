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
const async = require('async');
const db = require('../../database');
module.exports = stryMutAct_9fa48("42075") ? {} : (stryCov_9fa48("42075"), {
  name: stryMutAct_9fa48("42076") ? "" : (stryCov_9fa48("42076"), 'Social: Post Sharing'),
  timestamp: Date.UTC(2016, 1, 25),
  method: function (callback) {
    if (stryMutAct_9fa48("42077")) {
      {}
    } else {
      stryCov_9fa48("42077");
      const social = require('../../social');
      async.parallel(stryMutAct_9fa48("42078") ? [] : (stryCov_9fa48("42078"), [async function () {
        if (stryMutAct_9fa48("42079")) {
          {}
        } else {
          stryCov_9fa48("42079");
          await social.setActivePostSharingNetworks(stryMutAct_9fa48("42080") ? [] : (stryCov_9fa48("42080"), [stryMutAct_9fa48("42081") ? "" : (stryCov_9fa48("42081"), 'facebook'), stryMutAct_9fa48("42082") ? "" : (stryCov_9fa48("42082"), 'google'), stryMutAct_9fa48("42083") ? "" : (stryCov_9fa48("42083"), 'twitter')]));
        }
      }, async function () {
        if (stryMutAct_9fa48("42084")) {
          {}
        } else {
          stryCov_9fa48("42084");
          await db.deleteObjectField(stryMutAct_9fa48("42085") ? "" : (stryCov_9fa48("42085"), 'config'), stryMutAct_9fa48("42086") ? "" : (stryCov_9fa48("42086"), 'disableSocialButtons'));
        }
      }]), callback);
    }
  }
});