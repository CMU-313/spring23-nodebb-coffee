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
module.exports = stryMutAct_9fa48("42953") ? {} : (stryCov_9fa48("42953"), {
  name: stryMutAct_9fa48("42954") ? "" : (stryCov_9fa48("42954"), 'Clean flag byCid zsets'),
  timestamp: Date.UTC(2019, 8, 24),
  method: async function () {
    if (stryMutAct_9fa48("42955")) {
      {}
    } else {
      stryCov_9fa48("42955");
      const {
        progress
      } = this;
      await batch.processSortedSet(stryMutAct_9fa48("42956") ? "" : (stryCov_9fa48("42956"), 'flags:datetime'), async flagIds => {
        if (stryMutAct_9fa48("42957")) {
          {}
        } else {
          stryCov_9fa48("42957");
          progress.incr(flagIds.length);
          const flagData = await db.getObjects(flagIds.map(stryMutAct_9fa48("42958") ? () => undefined : (stryCov_9fa48("42958"), id => stryMutAct_9fa48("42959") ? `` : (stryCov_9fa48("42959"), `flag:${id}`))));
          const bulkRemove = stryMutAct_9fa48("42960") ? ["Stryker was here"] : (stryCov_9fa48("42960"), []);
          for (const flagObj of flagData) {
            if (stryMutAct_9fa48("42961")) {
              {}
            } else {
              stryCov_9fa48("42961");
              if (stryMutAct_9fa48("42964") ? flagObj && flagObj.type === 'user' && flagObj.targetId || flagObj.flagId : stryMutAct_9fa48("42963") ? false : stryMutAct_9fa48("42962") ? true : (stryCov_9fa48("42962", "42963", "42964"), (stryMutAct_9fa48("42966") ? flagObj && flagObj.type === 'user' || flagObj.targetId : stryMutAct_9fa48("42965") ? true : (stryCov_9fa48("42965", "42966"), (stryMutAct_9fa48("42968") ? flagObj || flagObj.type === 'user' : stryMutAct_9fa48("42967") ? true : (stryCov_9fa48("42967", "42968"), flagObj && (stryMutAct_9fa48("42970") ? flagObj.type !== 'user' : stryMutAct_9fa48("42969") ? true : (stryCov_9fa48("42969", "42970"), flagObj.type === (stryMutAct_9fa48("42971") ? "" : (stryCov_9fa48("42971"), 'user')))))) && flagObj.targetId)) && flagObj.flagId)) {
                if (stryMutAct_9fa48("42972")) {
                  {}
                } else {
                  stryCov_9fa48("42972");
                  bulkRemove.push(stryMutAct_9fa48("42973") ? [] : (stryCov_9fa48("42973"), [stryMutAct_9fa48("42974") ? `` : (stryCov_9fa48("42974"), `flags:byCid:${flagObj.targetId}`), flagObj.flagId]));
                }
              }
            }
          }
          await db.sortedSetRemoveBulk(bulkRemove);
        }
      }, stryMutAct_9fa48("42975") ? {} : (stryCov_9fa48("42975"), {
        progress: progress
      }));
    }
  }
});