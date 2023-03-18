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
module.exports = stryMutAct_9fa48("43471") ? {} : (stryCov_9fa48("43471"), {
  name: stryMutAct_9fa48("43472") ? "" : (stryCov_9fa48("43472"), 'Remove flag reporters sorted set'),
  timestamp: Date.UTC(2020, 6, 31),
  method: async function () {
    if (stryMutAct_9fa48("43473")) {
      {}
    } else {
      stryCov_9fa48("43473");
      const {
        progress
      } = this;
      progress.total = await db.sortedSetCard(stryMutAct_9fa48("43474") ? "" : (stryCov_9fa48("43474"), 'flags:datetime'));
      await batch.processSortedSet(stryMutAct_9fa48("43475") ? "" : (stryCov_9fa48("43475"), 'flags:datetime'), async flagIds => {
        if (stryMutAct_9fa48("43476")) {
          {}
        } else {
          stryCov_9fa48("43476");
          await Promise.all(flagIds.map(async flagId => {
            if (stryMutAct_9fa48("43477")) {
              {}
            } else {
              stryCov_9fa48("43477");
              const [reports, reporterUids] = await Promise.all(stryMutAct_9fa48("43478") ? [] : (stryCov_9fa48("43478"), [db.getSortedSetRevRangeWithScores(stryMutAct_9fa48("43479") ? `` : (stryCov_9fa48("43479"), `flag:${flagId}:reports`), 0, stryMutAct_9fa48("43480") ? +1 : (stryCov_9fa48("43480"), -1)), db.getSortedSetRevRange(stryMutAct_9fa48("43481") ? `` : (stryCov_9fa48("43481"), `flag:${flagId}:reporters`), 0, stryMutAct_9fa48("43482") ? +1 : (stryCov_9fa48("43482"), -1))]));
              const values = reports.reduce((memo, cur, idx) => {
                if (stryMutAct_9fa48("43483")) {
                  {}
                } else {
                  stryCov_9fa48("43483");
                  memo.push(stryMutAct_9fa48("43484") ? [] : (stryCov_9fa48("43484"), [stryMutAct_9fa48("43485") ? `` : (stryCov_9fa48("43485"), `flag:${flagId}:reports`), cur.score, (stryMutAct_9fa48("43486") ? [] : (stryCov_9fa48("43486"), [stryMutAct_9fa48("43489") ? reporterUids[idx] && 0 : stryMutAct_9fa48("43488") ? false : stryMutAct_9fa48("43487") ? true : (stryCov_9fa48("43487", "43488", "43489"), reporterUids[idx] || 0), cur.value])).join(stryMutAct_9fa48("43490") ? "" : (stryCov_9fa48("43490"), ';'))]));
                  return memo;
                }
              }, stryMutAct_9fa48("43491") ? ["Stryker was here"] : (stryCov_9fa48("43491"), []));
              await db.delete(stryMutAct_9fa48("43492") ? `` : (stryCov_9fa48("43492"), `flag:${flagId}:reports`));
              await db.sortedSetAddBulk(values);
            }
          }));
        }
      }, stryMutAct_9fa48("43493") ? {} : (stryCov_9fa48("43493"), {
        batch: 500,
        progress: progress
      }));
    }
  }
});