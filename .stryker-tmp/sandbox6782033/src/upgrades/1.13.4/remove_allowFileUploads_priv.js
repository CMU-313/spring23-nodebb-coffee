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
const privileges = require('../../privileges');
module.exports = stryMutAct_9fa48("43209") ? {} : (stryCov_9fa48("43209"), {
  name: stryMutAct_9fa48("43210") ? "" : (stryCov_9fa48("43210"), 'Removing file upload privilege if file uploads were disabled (`allowFileUploads`)'),
  timestamp: Date.UTC(2020, 4, 21),
  method: async () => {
    if (stryMutAct_9fa48("43211")) {
      {}
    } else {
      stryCov_9fa48("43211");
      const allowFileUploads = parseInt(await db.getObjectField(stryMutAct_9fa48("43212") ? "" : (stryCov_9fa48("43212"), 'config'), stryMutAct_9fa48("43213") ? "" : (stryCov_9fa48("43213"), 'allowFileUploads')), 10);
      if (stryMutAct_9fa48("43216") ? allowFileUploads !== 1 : stryMutAct_9fa48("43215") ? false : stryMutAct_9fa48("43214") ? true : (stryCov_9fa48("43214", "43215", "43216"), allowFileUploads === 1)) {
        if (stryMutAct_9fa48("43217")) {
          {}
        } else {
          stryCov_9fa48("43217");
          await db.deleteObjectField(stryMutAct_9fa48("43218") ? "" : (stryCov_9fa48("43218"), 'config'), stryMutAct_9fa48("43219") ? "" : (stryCov_9fa48("43219"), 'allowFileUploads'));
          return;
        }
      }

      // Remove `upload:post:file` privilege for all groups
      await privileges.categories.rescind(stryMutAct_9fa48("43220") ? [] : (stryCov_9fa48("43220"), [stryMutAct_9fa48("43221") ? "" : (stryCov_9fa48("43221"), 'groups:upload:post:file')]), 0, stryMutAct_9fa48("43222") ? [] : (stryCov_9fa48("43222"), [stryMutAct_9fa48("43223") ? "" : (stryCov_9fa48("43223"), 'guests'), stryMutAct_9fa48("43224") ? "" : (stryCov_9fa48("43224"), 'registered-users'), stryMutAct_9fa48("43225") ? "" : (stryCov_9fa48("43225"), 'Global Moderators')]));

      // Clean up the old option from the config hash
      await db.deleteObjectField(stryMutAct_9fa48("43226") ? "" : (stryCov_9fa48("43226"), 'config'), stryMutAct_9fa48("43227") ? "" : (stryCov_9fa48("43227"), 'allowFileUploads'));
    }
  }
});