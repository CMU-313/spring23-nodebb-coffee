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
module.exports = stryMutAct_9fa48("44110") ? {} : (stryCov_9fa48("44110"), {
  name: stryMutAct_9fa48("44111") ? "" : (stryCov_9fa48("44111"), 'Favourites to Bookmarks'),
  timestamp: Date.UTC(2016, 9, 8),
  method: async function () {
    if (stryMutAct_9fa48("44112")) {
      {}
    } else {
      stryCov_9fa48("44112");
      const {
        progress
      } = this;
      const batch = require('../../batch');
      async function upgradePosts() {
        if (stryMutAct_9fa48("44113")) {
          {}
        } else {
          stryCov_9fa48("44113");
          await batch.processSortedSet(stryMutAct_9fa48("44114") ? "" : (stryCov_9fa48("44114"), 'posts:pid'), async ids => {
            if (stryMutAct_9fa48("44115")) {
              {}
            } else {
              stryCov_9fa48("44115");
              await Promise.all(ids.map(async id => {
                if (stryMutAct_9fa48("44116")) {
                  {}
                } else {
                  stryCov_9fa48("44116");
                  progress.incr();
                  await db.rename(stryMutAct_9fa48("44117") ? `` : (stryCov_9fa48("44117"), `pid:${id}:users_favourited`), stryMutAct_9fa48("44118") ? `` : (stryCov_9fa48("44118"), `pid:${id}:users_bookmarked`));
                  const reputation = await db.getObjectField(stryMutAct_9fa48("44119") ? `` : (stryCov_9fa48("44119"), `post:${id}`), stryMutAct_9fa48("44120") ? "" : (stryCov_9fa48("44120"), 'reputation'));
                  if (stryMutAct_9fa48("44122") ? false : stryMutAct_9fa48("44121") ? true : (stryCov_9fa48("44121", "44122"), parseInt(reputation, 10))) {
                    if (stryMutAct_9fa48("44123")) {
                      {}
                    } else {
                      stryCov_9fa48("44123");
                      await db.setObjectField(stryMutAct_9fa48("44124") ? `` : (stryCov_9fa48("44124"), `post:${id}`), stryMutAct_9fa48("44125") ? "" : (stryCov_9fa48("44125"), 'bookmarks'), reputation);
                    }
                  }
                  await db.deleteObjectField(stryMutAct_9fa48("44126") ? `` : (stryCov_9fa48("44126"), `post:${id}`), stryMutAct_9fa48("44127") ? "" : (stryCov_9fa48("44127"), 'reputation'));
                }
              }));
            }
          }, stryMutAct_9fa48("44128") ? {} : (stryCov_9fa48("44128"), {
            progress: progress
          }));
        }
      }
      async function upgradeUsers() {
        if (stryMutAct_9fa48("44129")) {
          {}
        } else {
          stryCov_9fa48("44129");
          await batch.processSortedSet(stryMutAct_9fa48("44130") ? "" : (stryCov_9fa48("44130"), 'users:joindate'), async ids => {
            if (stryMutAct_9fa48("44131")) {
              {}
            } else {
              stryCov_9fa48("44131");
              await Promise.all(ids.map(async id => {
                if (stryMutAct_9fa48("44132")) {
                  {}
                } else {
                  stryCov_9fa48("44132");
                  await db.rename(stryMutAct_9fa48("44133") ? `` : (stryCov_9fa48("44133"), `uid:${id}:favourites`), stryMutAct_9fa48("44134") ? `` : (stryCov_9fa48("44134"), `uid:${id}:bookmarks`));
                }
              }));
            }
          }, {});
        }
      }
      await upgradePosts();
      await upgradeUsers();
    }
  }
});