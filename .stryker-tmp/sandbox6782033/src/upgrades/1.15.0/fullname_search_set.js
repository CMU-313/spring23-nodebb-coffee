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
const batch = require('../../batch');
const user = require('../../user');
module.exports = stryMutAct_9fa48("43439") ? {} : (stryCov_9fa48("43439"), {
  name: stryMutAct_9fa48("43440") ? "" : (stryCov_9fa48("43440"), 'Create fullname search set'),
  timestamp: Date.UTC(2020, 8, 11),
  method: async function () {
    if (stryMutAct_9fa48("43441")) {
      {}
    } else {
      stryCov_9fa48("43441");
      const {
        progress
      } = this;
      await batch.processSortedSet(stryMutAct_9fa48("43442") ? "" : (stryCov_9fa48("43442"), 'users:joindate'), async uids => {
        if (stryMutAct_9fa48("43443")) {
          {}
        } else {
          stryCov_9fa48("43443");
          progress.incr(uids.length);
          const userData = await user.getUsersFields(uids, stryMutAct_9fa48("43444") ? [] : (stryCov_9fa48("43444"), [stryMutAct_9fa48("43445") ? "" : (stryCov_9fa48("43445"), 'uid'), stryMutAct_9fa48("43446") ? "" : (stryCov_9fa48("43446"), 'fullname')]));
          const bulkAdd = stryMutAct_9fa48("43447") ? userData.map(u => ['fullname:sorted', 0, `${String(u.fullname).slice(0, 255).toLowerCase()}:${u.uid}`]) : (stryCov_9fa48("43447"), userData.filter(stryMutAct_9fa48("43448") ? () => undefined : (stryCov_9fa48("43448"), u => stryMutAct_9fa48("43451") ? u.uid || u.fullname : stryMutAct_9fa48("43450") ? false : stryMutAct_9fa48("43449") ? true : (stryCov_9fa48("43449", "43450", "43451"), u.uid && u.fullname))).map(stryMutAct_9fa48("43452") ? () => undefined : (stryCov_9fa48("43452"), u => stryMutAct_9fa48("43453") ? [] : (stryCov_9fa48("43453"), [stryMutAct_9fa48("43454") ? "" : (stryCov_9fa48("43454"), 'fullname:sorted'), 0, stryMutAct_9fa48("43455") ? `` : (stryCov_9fa48("43455"), `${stryMutAct_9fa48("43457") ? String(u.fullname).toLowerCase() : stryMutAct_9fa48("43456") ? String(u.fullname).slice(0, 255).toUpperCase() : (stryCov_9fa48("43456", "43457"), String(u.fullname).slice(0, 255).toLowerCase())}:${u.uid}`)]))));
          await db.sortedSetAddBulk(bulkAdd);
        }
      }, stryMutAct_9fa48("43458") ? {} : (stryCov_9fa48("43458"), {
        batch: 500,
        progress: this.progress
      }));
    }
  }
});