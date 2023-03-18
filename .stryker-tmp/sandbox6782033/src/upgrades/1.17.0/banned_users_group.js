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
const db = require('../../database');
const groups = require('../../groups');
const now = Date.now();
module.exports = stryMutAct_9fa48("43716") ? {} : (stryCov_9fa48("43716"), {
  name: stryMutAct_9fa48("43717") ? "" : (stryCov_9fa48("43717"), 'Move banned users to banned-users group'),
  timestamp: Date.UTC(2020, 11, 13),
  method: async function () {
    if (stryMutAct_9fa48("43718")) {
      {}
    } else {
      stryCov_9fa48("43718");
      const {
        progress
      } = this;
      const timestamp = await db.getObjectField(stryMutAct_9fa48("43719") ? "" : (stryCov_9fa48("43719"), 'group:administrators'), stryMutAct_9fa48("43720") ? "" : (stryCov_9fa48("43720"), 'timestamp'));
      const bannedExists = await groups.exists(stryMutAct_9fa48("43721") ? "" : (stryCov_9fa48("43721"), 'banned-users'));
      if (stryMutAct_9fa48("43724") ? false : stryMutAct_9fa48("43723") ? true : stryMutAct_9fa48("43722") ? bannedExists : (stryCov_9fa48("43722", "43723", "43724"), !bannedExists)) {
        if (stryMutAct_9fa48("43725")) {
          {}
        } else {
          stryCov_9fa48("43725");
          await groups.create(stryMutAct_9fa48("43726") ? {} : (stryCov_9fa48("43726"), {
            name: stryMutAct_9fa48("43727") ? "" : (stryCov_9fa48("43727"), 'banned-users'),
            hidden: 1,
            private: 1,
            system: 1,
            disableLeave: 1,
            disableJoinRequests: 1,
            timestamp: stryMutAct_9fa48("43728") ? timestamp - 1 : (stryCov_9fa48("43728"), timestamp + 1)
          }));
        }
      }
      await batch.processSortedSet(stryMutAct_9fa48("43729") ? "" : (stryCov_9fa48("43729"), 'users:banned'), async uids => {
        if (stryMutAct_9fa48("43730")) {
          {}
        } else {
          stryCov_9fa48("43730");
          progress.incr(uids.length);
          await db.sortedSetAdd(stryMutAct_9fa48("43731") ? "" : (stryCov_9fa48("43731"), 'group:banned-users:members'), uids.map(stryMutAct_9fa48("43732") ? () => undefined : (stryCov_9fa48("43732"), () => now)), uids);
          await db.sortedSetRemove(stryMutAct_9fa48("43733") ? [] : (stryCov_9fa48("43733"), [stryMutAct_9fa48("43734") ? "" : (stryCov_9fa48("43734"), 'group:registered-users:members'), stryMutAct_9fa48("43735") ? "" : (stryCov_9fa48("43735"), 'group:verified-users:members'), stryMutAct_9fa48("43736") ? "" : (stryCov_9fa48("43736"), 'group:unverified-users:members'), stryMutAct_9fa48("43737") ? "" : (stryCov_9fa48("43737"), 'group:Global Moderators:members')]), uids);
        }
      }, stryMutAct_9fa48("43738") ? {} : (stryCov_9fa48("43738"), {
        batch: 500,
        progress: this.progress
      }));
      const bannedCount = await db.sortedSetCard(stryMutAct_9fa48("43739") ? "" : (stryCov_9fa48("43739"), 'group:banned-users:members'));
      const registeredCount = await db.sortedSetCard(stryMutAct_9fa48("43740") ? "" : (stryCov_9fa48("43740"), 'group:registered-users:members'));
      const verifiedCount = await db.sortedSetCard(stryMutAct_9fa48("43741") ? "" : (stryCov_9fa48("43741"), 'group:verified-users:members'));
      const unverifiedCount = await db.sortedSetCard(stryMutAct_9fa48("43742") ? "" : (stryCov_9fa48("43742"), 'group:unverified-users:members'));
      const globalModCount = await db.sortedSetCard(stryMutAct_9fa48("43743") ? "" : (stryCov_9fa48("43743"), 'group:Global Moderators:members'));
      await db.setObjectField(stryMutAct_9fa48("43744") ? "" : (stryCov_9fa48("43744"), 'group:banned-users'), stryMutAct_9fa48("43745") ? "" : (stryCov_9fa48("43745"), 'memberCount'), bannedCount);
      await db.setObjectField(stryMutAct_9fa48("43746") ? "" : (stryCov_9fa48("43746"), 'group:registered-users'), stryMutAct_9fa48("43747") ? "" : (stryCov_9fa48("43747"), 'memberCount'), registeredCount);
      await db.setObjectField(stryMutAct_9fa48("43748") ? "" : (stryCov_9fa48("43748"), 'group:verified-users'), stryMutAct_9fa48("43749") ? "" : (stryCov_9fa48("43749"), 'memberCount'), verifiedCount);
      await db.setObjectField(stryMutAct_9fa48("43750") ? "" : (stryCov_9fa48("43750"), 'group:unverified-users'), stryMutAct_9fa48("43751") ? "" : (stryCov_9fa48("43751"), 'memberCount'), unverifiedCount);
      await db.setObjectField(stryMutAct_9fa48("43752") ? "" : (stryCov_9fa48("43752"), 'group:Global Moderators'), stryMutAct_9fa48("43753") ? "" : (stryCov_9fa48("43753"), 'memberCount'), globalModCount);
    }
  }
});