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
const db = require('../database');
const batch = require('../batch');
const plugins = require('../plugins');
const topics = require('../topics');
const groups = require('../groups');
const privileges = require('../privileges');
const cache = require('../cache');
module.exports = function (Categories) {
  if (stryMutAct_9fa48("2453")) {
    {}
  } else {
    stryCov_9fa48("2453");
    Categories.purge = async function (cid, uid) {
      if (stryMutAct_9fa48("2454")) {
        {}
      } else {
        stryCov_9fa48("2454");
        await batch.processSortedSet(stryMutAct_9fa48("2455") ? `` : (stryCov_9fa48("2455"), `cid:${cid}:tids`), async tids => {
          if (stryMutAct_9fa48("2456")) {
            {}
          } else {
            stryCov_9fa48("2456");
            await async.eachLimit(tids, 10, async tid => {
              if (stryMutAct_9fa48("2457")) {
                {}
              } else {
                stryCov_9fa48("2457");
                await topics.purgePostsAndTopic(tid, uid);
              }
            });
          }
        }, stryMutAct_9fa48("2458") ? {} : (stryCov_9fa48("2458"), {
          alwaysStartAt: 0
        }));
        const pinnedTids = await db.getSortedSetRevRange(stryMutAct_9fa48("2459") ? `` : (stryCov_9fa48("2459"), `cid:${cid}:tids:pinned`), 0, stryMutAct_9fa48("2460") ? +1 : (stryCov_9fa48("2460"), -1));
        await async.eachLimit(pinnedTids, 10, async tid => {
          if (stryMutAct_9fa48("2461")) {
            {}
          } else {
            stryCov_9fa48("2461");
            await topics.purgePostsAndTopic(tid, uid);
          }
        });
        const categoryData = await Categories.getCategoryData(cid);
        await purgeCategory(cid, categoryData);
        plugins.hooks.fire(stryMutAct_9fa48("2462") ? "" : (stryCov_9fa48("2462"), 'action:category.delete'), stryMutAct_9fa48("2463") ? {} : (stryCov_9fa48("2463"), {
          cid: cid,
          uid: uid,
          category: categoryData
        }));
      }
    };
    async function purgeCategory(cid, categoryData) {
      if (stryMutAct_9fa48("2464")) {
        {}
      } else {
        stryCov_9fa48("2464");
        const bulkRemove = stryMutAct_9fa48("2465") ? [] : (stryCov_9fa48("2465"), [stryMutAct_9fa48("2466") ? [] : (stryCov_9fa48("2466"), [stryMutAct_9fa48("2467") ? "" : (stryCov_9fa48("2467"), 'categories:cid'), cid])]);
        if (stryMutAct_9fa48("2470") ? categoryData || categoryData.name : stryMutAct_9fa48("2469") ? false : stryMutAct_9fa48("2468") ? true : (stryCov_9fa48("2468", "2469", "2470"), categoryData && categoryData.name)) {
          if (stryMutAct_9fa48("2471")) {
            {}
          } else {
            stryCov_9fa48("2471");
            bulkRemove.push(stryMutAct_9fa48("2472") ? [] : (stryCov_9fa48("2472"), [stryMutAct_9fa48("2473") ? "" : (stryCov_9fa48("2473"), 'categories:name'), stryMutAct_9fa48("2474") ? `` : (stryCov_9fa48("2474"), `${stryMutAct_9fa48("2476") ? categoryData.name.toLowerCase() : stryMutAct_9fa48("2475") ? categoryData.name.slice(0, 200).toUpperCase() : (stryCov_9fa48("2475", "2476"), categoryData.name.slice(0, 200).toLowerCase())}:${cid}`)]));
          }
        }
        await db.sortedSetRemoveBulk(bulkRemove);
        await removeFromParent(cid);
        await deleteTags(cid);
        await db.deleteAll(stryMutAct_9fa48("2477") ? [] : (stryCov_9fa48("2477"), [stryMutAct_9fa48("2478") ? `` : (stryCov_9fa48("2478"), `cid:${cid}:tids`), stryMutAct_9fa48("2479") ? `` : (stryCov_9fa48("2479"), `cid:${cid}:tids:pinned`), stryMutAct_9fa48("2480") ? `` : (stryCov_9fa48("2480"), `cid:${cid}:tids:posts`), stryMutAct_9fa48("2481") ? `` : (stryCov_9fa48("2481"), `cid:${cid}:tids:votes`), stryMutAct_9fa48("2482") ? `` : (stryCov_9fa48("2482"), `cid:${cid}:tids:views`), stryMutAct_9fa48("2483") ? `` : (stryCov_9fa48("2483"), `cid:${cid}:tids:lastposttime`), stryMutAct_9fa48("2484") ? `` : (stryCov_9fa48("2484"), `cid:${cid}:recent_tids`), stryMutAct_9fa48("2485") ? `` : (stryCov_9fa48("2485"), `cid:${cid}:pids`), stryMutAct_9fa48("2486") ? `` : (stryCov_9fa48("2486"), `cid:${cid}:read_by_uid`), stryMutAct_9fa48("2487") ? `` : (stryCov_9fa48("2487"), `cid:${cid}:uid:watch:state`), stryMutAct_9fa48("2488") ? `` : (stryCov_9fa48("2488"), `cid:${cid}:children`), stryMutAct_9fa48("2489") ? `` : (stryCov_9fa48("2489"), `cid:${cid}:tag:whitelist`), stryMutAct_9fa48("2490") ? `` : (stryCov_9fa48("2490"), `category:${cid}`)]));
        const privilegeList = await privileges.categories.getPrivilegeList();
        await groups.destroy(privilegeList.map(stryMutAct_9fa48("2491") ? () => undefined : (stryCov_9fa48("2491"), privilege => stryMutAct_9fa48("2492") ? `` : (stryCov_9fa48("2492"), `cid:${cid}:privileges:${privilege}`))));
      }
    }
    async function removeFromParent(cid) {
      if (stryMutAct_9fa48("2493")) {
        {}
      } else {
        stryCov_9fa48("2493");
        const [parentCid, children] = await Promise.all(stryMutAct_9fa48("2494") ? [] : (stryCov_9fa48("2494"), [Categories.getCategoryField(cid, stryMutAct_9fa48("2495") ? "" : (stryCov_9fa48("2495"), 'parentCid')), db.getSortedSetRange(stryMutAct_9fa48("2496") ? `` : (stryCov_9fa48("2496"), `cid:${cid}:children`), 0, stryMutAct_9fa48("2497") ? +1 : (stryCov_9fa48("2497"), -1))]));
        const bulkAdd = stryMutAct_9fa48("2498") ? ["Stryker was here"] : (stryCov_9fa48("2498"), []);
        const childrenKeys = children.map(cid => {
          if (stryMutAct_9fa48("2499")) {
            {}
          } else {
            stryCov_9fa48("2499");
            bulkAdd.push(stryMutAct_9fa48("2500") ? [] : (stryCov_9fa48("2500"), [stryMutAct_9fa48("2501") ? "" : (stryCov_9fa48("2501"), 'cid:0:children'), cid, cid]));
            return stryMutAct_9fa48("2502") ? `` : (stryCov_9fa48("2502"), `category:${cid}`);
          }
        });
        await Promise.all(stryMutAct_9fa48("2503") ? [] : (stryCov_9fa48("2503"), [db.sortedSetRemove(stryMutAct_9fa48("2504") ? `` : (stryCov_9fa48("2504"), `cid:${parentCid}:children`), cid), db.setObjectField(childrenKeys, stryMutAct_9fa48("2505") ? "" : (stryCov_9fa48("2505"), 'parentCid'), 0), db.sortedSetAddBulk(bulkAdd)]));
        cache.del(stryMutAct_9fa48("2506") ? [] : (stryCov_9fa48("2506"), [stryMutAct_9fa48("2507") ? "" : (stryCov_9fa48("2507"), 'categories:cid'), stryMutAct_9fa48("2508") ? "" : (stryCov_9fa48("2508"), 'cid:0:children'), stryMutAct_9fa48("2509") ? `` : (stryCov_9fa48("2509"), `cid:${parentCid}:children`), stryMutAct_9fa48("2510") ? `` : (stryCov_9fa48("2510"), `cid:${parentCid}:children:all`), stryMutAct_9fa48("2511") ? `` : (stryCov_9fa48("2511"), `cid:${cid}:children`), stryMutAct_9fa48("2512") ? `` : (stryCov_9fa48("2512"), `cid:${cid}:children:all`), stryMutAct_9fa48("2513") ? `` : (stryCov_9fa48("2513"), `cid:${cid}:tag:whitelist`)]));
      }
    }
    async function deleteTags(cid) {
      if (stryMutAct_9fa48("2514")) {
        {}
      } else {
        stryCov_9fa48("2514");
        const tags = await db.getSortedSetMembers(stryMutAct_9fa48("2515") ? `` : (stryCov_9fa48("2515"), `cid:${cid}:tags`));
        await db.deleteAll(tags.map(stryMutAct_9fa48("2516") ? () => undefined : (stryCov_9fa48("2516"), tag => stryMutAct_9fa48("2517") ? `` : (stryCov_9fa48("2517"), `cid:${cid}:tag:${tag}:topics`))));
        await db.delete(stryMutAct_9fa48("2518") ? `` : (stryCov_9fa48("2518"), `cid:${cid}:tags`));
      }
    }
  }
};