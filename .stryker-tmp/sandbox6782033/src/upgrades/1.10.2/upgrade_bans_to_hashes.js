/* eslint-disable no-await-in-loop */
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
module.exports = stryMutAct_9fa48("42520") ? {} : (stryCov_9fa48("42520"), {
  name: stryMutAct_9fa48("42521") ? "" : (stryCov_9fa48("42521"), 'Upgrade bans to hashes'),
  timestamp: Date.UTC(2018, 8, 24),
  method: async function () {
    if (stryMutAct_9fa48("42522")) {
      {}
    } else {
      stryCov_9fa48("42522");
      const {
        progress
      } = this;
      await batch.processSortedSet(stryMutAct_9fa48("42523") ? "" : (stryCov_9fa48("42523"), 'users:joindate'), async uids => {
        if (stryMutAct_9fa48("42524")) {
          {}
        } else {
          stryCov_9fa48("42524");
          for (const uid of uids) {
            if (stryMutAct_9fa48("42525")) {
              {}
            } else {
              stryCov_9fa48("42525");
              progress.incr();
              const [bans, reasons, userData] = await Promise.all(stryMutAct_9fa48("42526") ? [] : (stryCov_9fa48("42526"), [db.getSortedSetRevRangeWithScores(stryMutAct_9fa48("42527") ? `` : (stryCov_9fa48("42527"), `uid:${uid}:bans`), 0, stryMutAct_9fa48("42528") ? +1 : (stryCov_9fa48("42528"), -1)), db.getSortedSetRevRangeWithScores(stryMutAct_9fa48("42529") ? `` : (stryCov_9fa48("42529"), `banned:${uid}:reasons`), 0, stryMutAct_9fa48("42530") ? +1 : (stryCov_9fa48("42530"), -1)), db.getObjectFields(stryMutAct_9fa48("42531") ? `` : (stryCov_9fa48("42531"), `user:${uid}`), stryMutAct_9fa48("42532") ? [] : (stryCov_9fa48("42532"), [stryMutAct_9fa48("42533") ? "" : (stryCov_9fa48("42533"), 'banned'), stryMutAct_9fa48("42534") ? "" : (stryCov_9fa48("42534"), 'banned:expire'), stryMutAct_9fa48("42535") ? "" : (stryCov_9fa48("42535"), 'joindate'), stryMutAct_9fa48("42536") ? "" : (stryCov_9fa48("42536"), 'lastposttime'), stryMutAct_9fa48("42537") ? "" : (stryCov_9fa48("42537"), 'lastonline')]))]));

              // has no history, but is banned, create plain object with just uid and timestmap
              if (stryMutAct_9fa48("42540") ? !bans.length || parseInt(userData.banned, 10) : stryMutAct_9fa48("42539") ? false : stryMutAct_9fa48("42538") ? true : (stryCov_9fa48("42538", "42539", "42540"), (stryMutAct_9fa48("42541") ? bans.length : (stryCov_9fa48("42541"), !bans.length)) && parseInt(userData.banned, 10))) {
                if (stryMutAct_9fa48("42542")) {
                  {}
                } else {
                  stryCov_9fa48("42542");
                  const banTimestamp = stryMutAct_9fa48("42545") ? (userData.lastonline || userData.lastposttime || userData.joindate) && Date.now() : stryMutAct_9fa48("42544") ? false : stryMutAct_9fa48("42543") ? true : (stryCov_9fa48("42543", "42544", "42545"), (stryMutAct_9fa48("42547") ? (userData.lastonline || userData.lastposttime) && userData.joindate : stryMutAct_9fa48("42546") ? false : (stryCov_9fa48("42546", "42547"), (stryMutAct_9fa48("42549") ? userData.lastonline && userData.lastposttime : stryMutAct_9fa48("42548") ? false : (stryCov_9fa48("42548", "42549"), userData.lastonline || userData.lastposttime)) || userData.joindate)) || Date.now());
                  const banKey = stryMutAct_9fa48("42550") ? `` : (stryCov_9fa48("42550"), `uid:${uid}:ban:${banTimestamp}`);
                  await addBan(uid, banKey, stryMutAct_9fa48("42551") ? {} : (stryCov_9fa48("42551"), {
                    uid: uid,
                    timestamp: banTimestamp
                  }));
                }
              } else if (stryMutAct_9fa48("42553") ? false : stryMutAct_9fa48("42552") ? true : (stryCov_9fa48("42552", "42553"), bans.length)) {
                if (stryMutAct_9fa48("42554")) {
                  {}
                } else {
                  stryCov_9fa48("42554");
                  // process ban history
                  for (const ban of bans) {
                    if (stryMutAct_9fa48("42555")) {
                      {}
                    } else {
                      stryCov_9fa48("42555");
                      const reasonData = reasons.find(stryMutAct_9fa48("42556") ? () => undefined : (stryCov_9fa48("42556"), reasonData => stryMutAct_9fa48("42559") ? reasonData.score !== ban.score : stryMutAct_9fa48("42558") ? false : stryMutAct_9fa48("42557") ? true : (stryCov_9fa48("42557", "42558", "42559"), reasonData.score === ban.score)));
                      const banKey = stryMutAct_9fa48("42560") ? `` : (stryCov_9fa48("42560"), `uid:${uid}:ban:${ban.score}`);
                      const data = stryMutAct_9fa48("42561") ? {} : (stryCov_9fa48("42561"), {
                        uid: uid,
                        timestamp: ban.score,
                        expire: parseInt(ban.value, 10)
                      });
                      if (stryMutAct_9fa48("42563") ? false : stryMutAct_9fa48("42562") ? true : (stryCov_9fa48("42562", "42563"), reasonData)) {
                        if (stryMutAct_9fa48("42564")) {
                          {}
                        } else {
                          stryCov_9fa48("42564");
                          data.reason = reasonData.value;
                        }
                      }
                      await addBan(uid, banKey, data);
                    }
                  }
                }
              }
            }
          }
        }
      }, stryMutAct_9fa48("42565") ? {} : (stryCov_9fa48("42565"), {
        progress: this.progress
      }));
    }
  }
});
async function addBan(uid, key, data) {
  if (stryMutAct_9fa48("42566")) {
    {}
  } else {
    stryCov_9fa48("42566");
    await db.setObject(key, data);
    await db.sortedSetAdd(stryMutAct_9fa48("42567") ? `` : (stryCov_9fa48("42567"), `uid:${uid}:bans:timestamp`), data.timestamp, key);
  }
}