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
const batch = require('../../batch');
const posts = require('../../posts');
const db = require('../../database');
module.exports = stryMutAct_9fa48("42816") ? {} : (stryCov_9fa48("42816"), {
  name: stryMutAct_9fa48("42817") ? "" : (stryCov_9fa48("42817"), 'Calculate image sizes of all uploaded images'),
  timestamp: Date.UTC(2019, 2, 16),
  method: async function () {
    if (stryMutAct_9fa48("42818")) {
      {}
    } else {
      stryCov_9fa48("42818");
      const {
        progress
      } = this;
      await batch.processSortedSet(stryMutAct_9fa48("42819") ? "" : (stryCov_9fa48("42819"), 'posts:pid'), async pids => {
        if (stryMutAct_9fa48("42820")) {
          {}
        } else {
          stryCov_9fa48("42820");
          const keys = pids.map(stryMutAct_9fa48("42821") ? () => undefined : (stryCov_9fa48("42821"), p => stryMutAct_9fa48("42822") ? `` : (stryCov_9fa48("42822"), `post:${p}:uploads`)));
          const uploads = await db.getSortedSetRange(keys, 0, stryMutAct_9fa48("42823") ? +1 : (stryCov_9fa48("42823"), -1));
          await posts.uploads.saveSize(uploads);
          progress.incr(pids.length);
        }
      }, stryMutAct_9fa48("42824") ? {} : (stryCov_9fa48("42824"), {
        batch: 100,
        progress: progress
      }));
    }
  }
});