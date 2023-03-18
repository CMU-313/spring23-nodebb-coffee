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
const _ = require('lodash');
const db = require('../database');
const user = require('../user');
const groups = require('../groups');
const plugins = require('../plugins');
const privileges = require('../privileges');
const cache = require('../cache');
const meta = require('../meta');
const Categories = module.exports;
require('./data')(Categories);
require('./create')(Categories);
require('./delete')(Categories);
require('./topics')(Categories);
require('./unread')(Categories);
require('./activeusers')(Categories);
require('./recentreplies')(Categories);
require('./update')(Categories);
require('./watch')(Categories);
require('./search')(Categories);
Categories.exists = async function (cids) {
  if (stryMutAct_9fa48("2519")) {
    {}
  } else {
    stryCov_9fa48("2519");
    return await db.exists(Array.isArray(cids) ? cids.map(stryMutAct_9fa48("2520") ? () => undefined : (stryCov_9fa48("2520"), cid => stryMutAct_9fa48("2521") ? `` : (stryCov_9fa48("2521"), `category:${cid}`))) : stryMutAct_9fa48("2522") ? `` : (stryCov_9fa48("2522"), `category:${cids}`));
  }
};
Categories.getCategoryById = async function (data) {
  if (stryMutAct_9fa48("2523")) {
    {}
  } else {
    stryCov_9fa48("2523");
    const categories = await Categories.getCategories(stryMutAct_9fa48("2524") ? [] : (stryCov_9fa48("2524"), [data.cid]), data.uid);
    if (stryMutAct_9fa48("2527") ? false : stryMutAct_9fa48("2526") ? true : stryMutAct_9fa48("2525") ? categories[0] : (stryCov_9fa48("2525", "2526", "2527"), !categories[0])) {
      if (stryMutAct_9fa48("2528")) {
        {}
      } else {
        stryCov_9fa48("2528");
        return null;
      }
    }
    const category = categories[0];
    data.category = category;
    const promises = stryMutAct_9fa48("2529") ? [] : (stryCov_9fa48("2529"), [Categories.getCategoryTopics(data), Categories.getTopicCount(data), Categories.getWatchState(stryMutAct_9fa48("2530") ? [] : (stryCov_9fa48("2530"), [data.cid]), data.uid), getChildrenTree(category, data.uid)]);
    if (stryMutAct_9fa48("2532") ? false : stryMutAct_9fa48("2531") ? true : (stryCov_9fa48("2531", "2532"), category.parentCid)) {
      if (stryMutAct_9fa48("2533")) {
        {}
      } else {
        stryCov_9fa48("2533");
        promises.push(Categories.getCategoryData(category.parentCid));
      }
    }
    const [topics, topicCount, watchState,, parent] = await Promise.all(promises);
    category.topics = topics.topics;
    category.nextStart = topics.nextStart;
    category.topic_count = topicCount;
    category.isWatched = stryMutAct_9fa48("2536") ? watchState[0] !== Categories.watchStates.watching : stryMutAct_9fa48("2535") ? false : stryMutAct_9fa48("2534") ? true : (stryCov_9fa48("2534", "2535", "2536"), watchState[0] === Categories.watchStates.watching);
    category.isNotWatched = stryMutAct_9fa48("2539") ? watchState[0] !== Categories.watchStates.notwatching : stryMutAct_9fa48("2538") ? false : stryMutAct_9fa48("2537") ? true : (stryCov_9fa48("2537", "2538", "2539"), watchState[0] === Categories.watchStates.notwatching);
    category.isIgnored = stryMutAct_9fa48("2542") ? watchState[0] !== Categories.watchStates.ignoring : stryMutAct_9fa48("2541") ? false : stryMutAct_9fa48("2540") ? true : (stryCov_9fa48("2540", "2541", "2542"), watchState[0] === Categories.watchStates.ignoring);
    category.parent = parent;
    calculateTopicPostCount(category);
    const result = await plugins.hooks.fire(stryMutAct_9fa48("2543") ? "" : (stryCov_9fa48("2543"), 'filter:category.get'), stryMutAct_9fa48("2544") ? {} : (stryCov_9fa48("2544"), {
      category: category,
      ...data
    }));
    return result.category;
  }
};
Categories.getAllCidsFromSet = async function (key) {
  if (stryMutAct_9fa48("2545")) {
    {}
  } else {
    stryCov_9fa48("2545");
    let cids = cache.get(key);
    if (stryMutAct_9fa48("2547") ? false : stryMutAct_9fa48("2546") ? true : (stryCov_9fa48("2546", "2547"), cids)) {
      if (stryMutAct_9fa48("2548")) {
        {}
      } else {
        stryCov_9fa48("2548");
        return stryMutAct_9fa48("2549") ? cids : (stryCov_9fa48("2549"), cids.slice());
      }
    }
    cids = await db.getSortedSetRange(key, 0, stryMutAct_9fa48("2550") ? +1 : (stryCov_9fa48("2550"), -1));
    cids = cids.map(stryMutAct_9fa48("2551") ? () => undefined : (stryCov_9fa48("2551"), cid => parseInt(cid, 10)));
    cache.set(key, cids);
    return stryMutAct_9fa48("2552") ? cids : (stryCov_9fa48("2552"), cids.slice());
  }
};
Categories.getAllCategories = async function (uid) {
  if (stryMutAct_9fa48("2553")) {
    {}
  } else {
    stryCov_9fa48("2553");
    const cids = await Categories.getAllCidsFromSet(stryMutAct_9fa48("2554") ? "" : (stryCov_9fa48("2554"), 'categories:cid'));
    return await Categories.getCategories(cids, uid);
  }
};
Categories.getCidsByPrivilege = async function (set, uid, privilege) {
  if (stryMutAct_9fa48("2555")) {
    {}
  } else {
    stryCov_9fa48("2555");
    const cids = await Categories.getAllCidsFromSet(set);
    return await privileges.categories.filterCids(privilege, cids, uid);
  }
};
Categories.getCategoriesByPrivilege = async function (set, uid, privilege) {
  if (stryMutAct_9fa48("2556")) {
    {}
  } else {
    stryCov_9fa48("2556");
    const cids = await Categories.getCidsByPrivilege(set, uid, privilege);
    return await Categories.getCategories(cids, uid);
  }
};
Categories.getModerators = async function (cid) {
  if (stryMutAct_9fa48("2557")) {
    {}
  } else {
    stryCov_9fa48("2557");
    const uids = await Categories.getModeratorUids(stryMutAct_9fa48("2558") ? [] : (stryCov_9fa48("2558"), [cid]));
    return await user.getUsersFields(uids[0], stryMutAct_9fa48("2559") ? [] : (stryCov_9fa48("2559"), [stryMutAct_9fa48("2560") ? "" : (stryCov_9fa48("2560"), 'uid'), stryMutAct_9fa48("2561") ? "" : (stryCov_9fa48("2561"), 'username'), stryMutAct_9fa48("2562") ? "" : (stryCov_9fa48("2562"), 'userslug'), stryMutAct_9fa48("2563") ? "" : (stryCov_9fa48("2563"), 'picture')]));
  }
};
Categories.getModeratorUids = async function (cids) {
  if (stryMutAct_9fa48("2564")) {
    {}
  } else {
    stryCov_9fa48("2564");
    const groupNames = cids.reduce((memo, cid) => {
      if (stryMutAct_9fa48("2565")) {
        {}
      } else {
        stryCov_9fa48("2565");
        memo.push(stryMutAct_9fa48("2566") ? `` : (stryCov_9fa48("2566"), `cid:${cid}:privileges:moderate`));
        memo.push(stryMutAct_9fa48("2567") ? `` : (stryCov_9fa48("2567"), `cid:${cid}:privileges:groups:moderate`));
        return memo;
      }
    }, stryMutAct_9fa48("2568") ? ["Stryker was here"] : (stryCov_9fa48("2568"), []));
    const memberSets = await groups.getMembersOfGroups(groupNames);
    // Every other set is actually a list of user groups, not uids, so convert those to members
    const sets = memberSets.reduce((memo, set, idx) => {
      if (stryMutAct_9fa48("2569")) {
        {}
      } else {
        stryCov_9fa48("2569");
        if (stryMutAct_9fa48("2572") ? false : stryMutAct_9fa48("2571") ? true : stryMutAct_9fa48("2570") ? idx * 2 : (stryCov_9fa48("2570", "2571", "2572"), idx % 2)) {
          if (stryMutAct_9fa48("2573")) {
            {}
          } else {
            stryCov_9fa48("2573");
            memo.groupNames.push(set);
          }
        } else {
          if (stryMutAct_9fa48("2574")) {
            {}
          } else {
            stryCov_9fa48("2574");
            memo.uids.push(set);
          }
        }
        return memo;
      }
    }, stryMutAct_9fa48("2575") ? {} : (stryCov_9fa48("2575"), {
      groupNames: stryMutAct_9fa48("2576") ? ["Stryker was here"] : (stryCov_9fa48("2576"), []),
      uids: stryMutAct_9fa48("2577") ? ["Stryker was here"] : (stryCov_9fa48("2577"), [])
    }));
    const uniqGroups = _.uniq(_.flatten(sets.groupNames));
    const groupUids = await groups.getMembersOfGroups(uniqGroups);
    const map = _.zipObject(uniqGroups, groupUids);
    const moderatorUids = cids.map(stryMutAct_9fa48("2578") ? () => undefined : (stryCov_9fa48("2578"), (cid, index) => _.uniq(sets.uids[index].concat(_.flatten(sets.groupNames[index].map(stryMutAct_9fa48("2579") ? () => undefined : (stryCov_9fa48("2579"), g => map[g])))))));
    return moderatorUids;
  }
};
Categories.getCategories = async function (cids, uid) {
  if (stryMutAct_9fa48("2580")) {
    {}
  } else {
    stryCov_9fa48("2580");
    if (stryMutAct_9fa48("2583") ? false : stryMutAct_9fa48("2582") ? true : stryMutAct_9fa48("2581") ? Array.isArray(cids) : (stryCov_9fa48("2581", "2582", "2583"), !Array.isArray(cids))) {
      if (stryMutAct_9fa48("2584")) {
        {}
      } else {
        stryCov_9fa48("2584");
        throw new Error(stryMutAct_9fa48("2585") ? "" : (stryCov_9fa48("2585"), '[[error:invalid-cid]]'));
      }
    }
    if (stryMutAct_9fa48("2588") ? false : stryMutAct_9fa48("2587") ? true : stryMutAct_9fa48("2586") ? cids.length : (stryCov_9fa48("2586", "2587", "2588"), !cids.length)) {
      if (stryMutAct_9fa48("2589")) {
        {}
      } else {
        stryCov_9fa48("2589");
        return stryMutAct_9fa48("2590") ? ["Stryker was here"] : (stryCov_9fa48("2590"), []);
      }
    }
    uid = parseInt(uid, 10);
    const [categories, tagWhitelist, hasRead] = await Promise.all(stryMutAct_9fa48("2591") ? [] : (stryCov_9fa48("2591"), [Categories.getCategoriesData(cids), Categories.getTagWhitelist(cids), Categories.hasReadCategories(cids, uid)]));
    categories.forEach((category, i) => {
      if (stryMutAct_9fa48("2592")) {
        {}
      } else {
        stryCov_9fa48("2592");
        if (stryMutAct_9fa48("2594") ? false : stryMutAct_9fa48("2593") ? true : (stryCov_9fa48("2593", "2594"), category)) {
          if (stryMutAct_9fa48("2595")) {
            {}
          } else {
            stryCov_9fa48("2595");
            category.tagWhitelist = tagWhitelist[i];
            category[stryMutAct_9fa48("2596") ? "" : (stryCov_9fa48("2596"), 'unread-class')] = (stryMutAct_9fa48("2599") ? category.topic_count === 0 && hasRead[i] && uid !== 0 : stryMutAct_9fa48("2598") ? false : stryMutAct_9fa48("2597") ? true : (stryCov_9fa48("2597", "2598", "2599"), (stryMutAct_9fa48("2601") ? category.topic_count !== 0 : stryMutAct_9fa48("2600") ? false : (stryCov_9fa48("2600", "2601"), category.topic_count === 0)) || (stryMutAct_9fa48("2603") ? hasRead[i] || uid !== 0 : stryMutAct_9fa48("2602") ? false : (stryCov_9fa48("2602", "2603"), hasRead[i] && (stryMutAct_9fa48("2605") ? uid === 0 : stryMutAct_9fa48("2604") ? true : (stryCov_9fa48("2604", "2605"), uid !== 0)))))) ? stryMutAct_9fa48("2606") ? "Stryker was here!" : (stryCov_9fa48("2606"), '') : stryMutAct_9fa48("2607") ? "" : (stryCov_9fa48("2607"), 'unread');
          }
        }
      }
    });
    return categories;
  }
};
Categories.getTagWhitelist = async function (cids) {
  if (stryMutAct_9fa48("2608")) {
    {}
  } else {
    stryCov_9fa48("2608");
    const cachedData = {};
    const nonCachedCids = stryMutAct_9fa48("2609") ? cids : (stryCov_9fa48("2609"), cids.filter(cid => {
      if (stryMutAct_9fa48("2610")) {
        {}
      } else {
        stryCov_9fa48("2610");
        const data = cache.get(stryMutAct_9fa48("2611") ? `` : (stryCov_9fa48("2611"), `cid:${cid}:tag:whitelist`));
        const isInCache = stryMutAct_9fa48("2614") ? data === undefined : stryMutAct_9fa48("2613") ? false : stryMutAct_9fa48("2612") ? true : (stryCov_9fa48("2612", "2613", "2614"), data !== undefined);
        if (stryMutAct_9fa48("2616") ? false : stryMutAct_9fa48("2615") ? true : (stryCov_9fa48("2615", "2616"), isInCache)) {
          if (stryMutAct_9fa48("2617")) {
            {}
          } else {
            stryCov_9fa48("2617");
            cachedData[cid] = data;
          }
        }
        return stryMutAct_9fa48("2618") ? isInCache : (stryCov_9fa48("2618"), !isInCache);
      }
    }));
    if (stryMutAct_9fa48("2621") ? false : stryMutAct_9fa48("2620") ? true : stryMutAct_9fa48("2619") ? nonCachedCids.length : (stryCov_9fa48("2619", "2620", "2621"), !nonCachedCids.length)) {
      if (stryMutAct_9fa48("2622")) {
        {}
      } else {
        stryCov_9fa48("2622");
        return cids.map(stryMutAct_9fa48("2623") ? () => undefined : (stryCov_9fa48("2623"), cid => cachedData[cid]));
      }
    }
    const keys = nonCachedCids.map(stryMutAct_9fa48("2624") ? () => undefined : (stryCov_9fa48("2624"), cid => stryMutAct_9fa48("2625") ? `` : (stryCov_9fa48("2625"), `cid:${cid}:tag:whitelist`)));
    const data = await db.getSortedSetsMembers(keys);
    nonCachedCids.forEach((cid, index) => {
      if (stryMutAct_9fa48("2626")) {
        {}
      } else {
        stryCov_9fa48("2626");
        cachedData[cid] = data[index];
        cache.set(stryMutAct_9fa48("2627") ? `` : (stryCov_9fa48("2627"), `cid:${cid}:tag:whitelist`), data[index]);
      }
    });
    return cids.map(stryMutAct_9fa48("2628") ? () => undefined : (stryCov_9fa48("2628"), cid => cachedData[cid]));
  }
};

// remove system tags from tag whitelist for non privileged user
Categories.filterTagWhitelist = function (tagWhitelist, isAdminOrMod) {
  if (stryMutAct_9fa48("2629")) {
    {}
  } else {
    stryCov_9fa48("2629");
    const systemTags = (stryMutAct_9fa48("2632") ? meta.config.systemTags && '' : stryMutAct_9fa48("2631") ? false : stryMutAct_9fa48("2630") ? true : (stryCov_9fa48("2630", "2631", "2632"), meta.config.systemTags || (stryMutAct_9fa48("2633") ? "Stryker was here!" : (stryCov_9fa48("2633"), '')))).split(stryMutAct_9fa48("2634") ? "" : (stryCov_9fa48("2634"), ','));
    if (stryMutAct_9fa48("2637") ? !isAdminOrMod || systemTags.length : stryMutAct_9fa48("2636") ? false : stryMutAct_9fa48("2635") ? true : (stryCov_9fa48("2635", "2636", "2637"), (stryMutAct_9fa48("2638") ? isAdminOrMod : (stryCov_9fa48("2638"), !isAdminOrMod)) && systemTags.length)) {
      if (stryMutAct_9fa48("2639")) {
        {}
      } else {
        stryCov_9fa48("2639");
        return stryMutAct_9fa48("2640") ? tagWhitelist : (stryCov_9fa48("2640"), tagWhitelist.filter(stryMutAct_9fa48("2641") ? () => undefined : (stryCov_9fa48("2641"), tag => stryMutAct_9fa48("2642") ? systemTags.includes(tag) : (stryCov_9fa48("2642"), !systemTags.includes(tag)))));
      }
    }
    return tagWhitelist;
  }
};
function calculateTopicPostCount(category) {
  if (stryMutAct_9fa48("2643")) {
    {}
  } else {
    stryCov_9fa48("2643");
    if (stryMutAct_9fa48("2646") ? false : stryMutAct_9fa48("2645") ? true : stryMutAct_9fa48("2644") ? category : (stryCov_9fa48("2644", "2645", "2646"), !category)) {
      if (stryMutAct_9fa48("2647")) {
        {}
      } else {
        stryCov_9fa48("2647");
        return;
      }
    }
    let postCount = category.post_count;
    let topicCount = category.topic_count;
    if (stryMutAct_9fa48("2649") ? false : stryMutAct_9fa48("2648") ? true : (stryCov_9fa48("2648", "2649"), Array.isArray(category.children))) {
      if (stryMutAct_9fa48("2650")) {
        {}
      } else {
        stryCov_9fa48("2650");
        category.children.forEach(child => {
          if (stryMutAct_9fa48("2651")) {
            {}
          } else {
            stryCov_9fa48("2651");
            calculateTopicPostCount(child);
            stryMutAct_9fa48("2652") ? postCount -= parseInt(child.totalPostCount, 10) || 0 : (stryCov_9fa48("2652"), postCount += stryMutAct_9fa48("2655") ? parseInt(child.totalPostCount, 10) && 0 : stryMutAct_9fa48("2654") ? false : stryMutAct_9fa48("2653") ? true : (stryCov_9fa48("2653", "2654", "2655"), parseInt(child.totalPostCount, 10) || 0));
            stryMutAct_9fa48("2656") ? topicCount -= parseInt(child.totalTopicCount, 10) || 0 : (stryCov_9fa48("2656"), topicCount += stryMutAct_9fa48("2659") ? parseInt(child.totalTopicCount, 10) && 0 : stryMutAct_9fa48("2658") ? false : stryMutAct_9fa48("2657") ? true : (stryCov_9fa48("2657", "2658", "2659"), parseInt(child.totalTopicCount, 10) || 0));
          }
        });
      }
    }
    category.totalPostCount = postCount;
    category.totalTopicCount = topicCount;
  }
}
Categories.calculateTopicPostCount = calculateTopicPostCount;
Categories.getParents = async function (cids) {
  if (stryMutAct_9fa48("2660")) {
    {}
  } else {
    stryCov_9fa48("2660");
    const categoriesData = await Categories.getCategoriesFields(cids, stryMutAct_9fa48("2661") ? [] : (stryCov_9fa48("2661"), [stryMutAct_9fa48("2662") ? "" : (stryCov_9fa48("2662"), 'parentCid')]));
    const parentCids = stryMutAct_9fa48("2663") ? categoriesData.map(c => c.parentCid) : (stryCov_9fa48("2663"), categoriesData.filter(stryMutAct_9fa48("2664") ? () => undefined : (stryCov_9fa48("2664"), c => stryMutAct_9fa48("2667") ? c || c.parentCid : stryMutAct_9fa48("2666") ? false : stryMutAct_9fa48("2665") ? true : (stryCov_9fa48("2665", "2666", "2667"), c && c.parentCid))).map(stryMutAct_9fa48("2668") ? () => undefined : (stryCov_9fa48("2668"), c => c.parentCid)));
    if (stryMutAct_9fa48("2671") ? false : stryMutAct_9fa48("2670") ? true : stryMutAct_9fa48("2669") ? parentCids.length : (stryCov_9fa48("2669", "2670", "2671"), !parentCids.length)) {
      if (stryMutAct_9fa48("2672")) {
        {}
      } else {
        stryCov_9fa48("2672");
        return cids.map(stryMutAct_9fa48("2673") ? () => undefined : (stryCov_9fa48("2673"), () => null));
      }
    }
    const parentData = await Categories.getCategoriesData(parentCids);
    const cidToParent = _.zipObject(parentCids, parentData);
    return categoriesData.map(stryMutAct_9fa48("2674") ? () => undefined : (stryCov_9fa48("2674"), category => cidToParent[category.parentCid]));
  }
};
Categories.getChildren = async function (cids, uid) {
  if (stryMutAct_9fa48("2675")) {
    {}
  } else {
    stryCov_9fa48("2675");
    const categoryData = await Categories.getCategoriesFields(cids, stryMutAct_9fa48("2676") ? [] : (stryCov_9fa48("2676"), [stryMutAct_9fa48("2677") ? "" : (stryCov_9fa48("2677"), 'parentCid')]));
    const categories = categoryData.map(stryMutAct_9fa48("2678") ? () => undefined : (stryCov_9fa48("2678"), (category, index) => stryMutAct_9fa48("2679") ? {} : (stryCov_9fa48("2679"), {
      cid: cids[index],
      parentCid: category.parentCid
    })));
    await Promise.all(categories.map(stryMutAct_9fa48("2680") ? () => undefined : (stryCov_9fa48("2680"), c => getChildrenTree(c, uid))));
    return categories.map(stryMutAct_9fa48("2681") ? () => undefined : (stryCov_9fa48("2681"), c => stryMutAct_9fa48("2684") ? c || c.children : stryMutAct_9fa48("2683") ? false : stryMutAct_9fa48("2682") ? true : (stryCov_9fa48("2682", "2683", "2684"), c && c.children)));
  }
};
async function getChildrenTree(category, uid) {
  if (stryMutAct_9fa48("2685")) {
    {}
  } else {
    stryCov_9fa48("2685");
    let childrenCids = await Categories.getChildrenCids(category.cid);
    childrenCids = await privileges.categories.filterCids(stryMutAct_9fa48("2686") ? "" : (stryCov_9fa48("2686"), 'find'), childrenCids, uid);
    childrenCids = stryMutAct_9fa48("2687") ? childrenCids : (stryCov_9fa48("2687"), childrenCids.filter(stryMutAct_9fa48("2688") ? () => undefined : (stryCov_9fa48("2688"), cid => stryMutAct_9fa48("2691") ? parseInt(category.cid, 10) === parseInt(cid, 10) : stryMutAct_9fa48("2690") ? false : stryMutAct_9fa48("2689") ? true : (stryCov_9fa48("2689", "2690", "2691"), parseInt(category.cid, 10) !== parseInt(cid, 10)))));
    if (stryMutAct_9fa48("2694") ? false : stryMutAct_9fa48("2693") ? true : stryMutAct_9fa48("2692") ? childrenCids.length : (stryCov_9fa48("2692", "2693", "2694"), !childrenCids.length)) {
      if (stryMutAct_9fa48("2695")) {
        {}
      } else {
        stryCov_9fa48("2695");
        category.children = stryMutAct_9fa48("2696") ? ["Stryker was here"] : (stryCov_9fa48("2696"), []);
        return;
      }
    }
    let childrenData = await Categories.getCategoriesData(childrenCids);
    childrenData = stryMutAct_9fa48("2697") ? childrenData : (stryCov_9fa48("2697"), childrenData.filter(Boolean));
    childrenCids = childrenData.map(stryMutAct_9fa48("2698") ? () => undefined : (stryCov_9fa48("2698"), child => child.cid));
    const hasRead = await Categories.hasReadCategories(childrenCids, uid);
    childrenData.forEach((child, i) => {
      if (stryMutAct_9fa48("2699")) {
        {}
      } else {
        stryCov_9fa48("2699");
        child[stryMutAct_9fa48("2700") ? "" : (stryCov_9fa48("2700"), 'unread-class')] = (stryMutAct_9fa48("2703") ? child.topic_count === 0 && hasRead[i] && uid !== 0 : stryMutAct_9fa48("2702") ? false : stryMutAct_9fa48("2701") ? true : (stryCov_9fa48("2701", "2702", "2703"), (stryMutAct_9fa48("2705") ? child.topic_count !== 0 : stryMutAct_9fa48("2704") ? false : (stryCov_9fa48("2704", "2705"), child.topic_count === 0)) || (stryMutAct_9fa48("2707") ? hasRead[i] || uid !== 0 : stryMutAct_9fa48("2706") ? false : (stryCov_9fa48("2706", "2707"), hasRead[i] && (stryMutAct_9fa48("2709") ? uid === 0 : stryMutAct_9fa48("2708") ? true : (stryCov_9fa48("2708", "2709"), uid !== 0)))))) ? stryMutAct_9fa48("2710") ? "Stryker was here!" : (stryCov_9fa48("2710"), '') : stryMutAct_9fa48("2711") ? "" : (stryCov_9fa48("2711"), 'unread');
      }
    });
    Categories.getTree((stryMutAct_9fa48("2712") ? [] : (stryCov_9fa48("2712"), [category])).concat(childrenData), category.parentCid);
  }
}
Categories.getChildrenTree = getChildrenTree;
Categories.getParentCids = async function (currentCid) {
  if (stryMutAct_9fa48("2713")) {
    {}
  } else {
    stryCov_9fa48("2713");
    let cid = currentCid;
    const parents = stryMutAct_9fa48("2714") ? ["Stryker was here"] : (stryCov_9fa48("2714"), []);
    while (stryMutAct_9fa48("2715") ? false : (stryCov_9fa48("2715"), parseInt(cid, 10))) {
      if (stryMutAct_9fa48("2716")) {
        {}
      } else {
        stryCov_9fa48("2716");
        // eslint-disable-next-line
        cid = await Categories.getCategoryField(cid, stryMutAct_9fa48("2717") ? "" : (stryCov_9fa48("2717"), 'parentCid'));
        if (stryMutAct_9fa48("2719") ? false : stryMutAct_9fa48("2718") ? true : (stryCov_9fa48("2718", "2719"), cid)) {
          if (stryMutAct_9fa48("2720")) {
            {}
          } else {
            stryCov_9fa48("2720");
            parents.unshift(cid);
          }
        }
      }
    }
    return parents;
  }
};
Categories.getChildrenCids = async function (rootCid) {
  if (stryMutAct_9fa48("2721")) {
    {}
  } else {
    stryCov_9fa48("2721");
    let allCids = stryMutAct_9fa48("2722") ? ["Stryker was here"] : (stryCov_9fa48("2722"), []);
    async function recursive(keys) {
      if (stryMutAct_9fa48("2723")) {
        {}
      } else {
        stryCov_9fa48("2723");
        let childrenCids = await db.getSortedSetRange(keys, 0, stryMutAct_9fa48("2724") ? +1 : (stryCov_9fa48("2724"), -1));
        childrenCids = stryMutAct_9fa48("2725") ? childrenCids : (stryCov_9fa48("2725"), childrenCids.filter(stryMutAct_9fa48("2726") ? () => undefined : (stryCov_9fa48("2726"), cid => stryMutAct_9fa48("2727") ? allCids.includes(parseInt(cid, 10)) : (stryCov_9fa48("2727"), !allCids.includes(parseInt(cid, 10))))));
        if (stryMutAct_9fa48("2730") ? false : stryMutAct_9fa48("2729") ? true : stryMutAct_9fa48("2728") ? childrenCids.length : (stryCov_9fa48("2728", "2729", "2730"), !childrenCids.length)) {
          if (stryMutAct_9fa48("2731")) {
            {}
          } else {
            stryCov_9fa48("2731");
            return;
          }
        }
        keys = childrenCids.map(stryMutAct_9fa48("2732") ? () => undefined : (stryCov_9fa48("2732"), cid => stryMutAct_9fa48("2733") ? `` : (stryCov_9fa48("2733"), `cid:${cid}:children`)));
        childrenCids.forEach(stryMutAct_9fa48("2734") ? () => undefined : (stryCov_9fa48("2734"), cid => allCids.push(parseInt(cid, 10))));
        await recursive(keys);
      }
    }
    const key = stryMutAct_9fa48("2735") ? `` : (stryCov_9fa48("2735"), `cid:${rootCid}:children`);
    const cacheKey = stryMutAct_9fa48("2736") ? `` : (stryCov_9fa48("2736"), `${key}:all`);
    const childrenCids = cache.get(cacheKey);
    if (stryMutAct_9fa48("2738") ? false : stryMutAct_9fa48("2737") ? true : (stryCov_9fa48("2737", "2738"), childrenCids)) {
      if (stryMutAct_9fa48("2739")) {
        {}
      } else {
        stryCov_9fa48("2739");
        return stryMutAct_9fa48("2740") ? childrenCids : (stryCov_9fa48("2740"), childrenCids.slice());
      }
    }
    await recursive(key);
    allCids = _.uniq(allCids);
    cache.set(cacheKey, allCids);
    return stryMutAct_9fa48("2741") ? allCids : (stryCov_9fa48("2741"), allCids.slice());
  }
};
Categories.flattenCategories = function (allCategories, categoryData) {
  if (stryMutAct_9fa48("2742")) {
    {}
  } else {
    stryCov_9fa48("2742");
    categoryData.forEach(category => {
      if (stryMutAct_9fa48("2743")) {
        {}
      } else {
        stryCov_9fa48("2743");
        if (stryMutAct_9fa48("2745") ? false : stryMutAct_9fa48("2744") ? true : (stryCov_9fa48("2744", "2745"), category)) {
          if (stryMutAct_9fa48("2746")) {
            {}
          } else {
            stryCov_9fa48("2746");
            allCategories.push(category);
            if (stryMutAct_9fa48("2749") ? Array.isArray(category.children) || category.children.length : stryMutAct_9fa48("2748") ? false : stryMutAct_9fa48("2747") ? true : (stryCov_9fa48("2747", "2748", "2749"), Array.isArray(category.children) && category.children.length)) {
              if (stryMutAct_9fa48("2750")) {
                {}
              } else {
                stryCov_9fa48("2750");
                Categories.flattenCategories(allCategories, category.children);
              }
            }
          }
        }
      }
    });
  }
};

/**
 * build tree from flat list of categories
 *
 * @param categories {array} flat list of categories
 * @param parentCid {number} start from 0 to build full tree
 */
Categories.getTree = function (categories, parentCid) {
  if (stryMutAct_9fa48("2751")) {
    {}
  } else {
    stryCov_9fa48("2751");
    parentCid = stryMutAct_9fa48("2754") ? parentCid && 0 : stryMutAct_9fa48("2753") ? false : stryMutAct_9fa48("2752") ? true : (stryCov_9fa48("2752", "2753", "2754"), parentCid || 0);
    const cids = categories.map(stryMutAct_9fa48("2755") ? () => undefined : (stryCov_9fa48("2755"), category => stryMutAct_9fa48("2758") ? category || category.cid : stryMutAct_9fa48("2757") ? false : stryMutAct_9fa48("2756") ? true : (stryCov_9fa48("2756", "2757", "2758"), category && category.cid)));
    const cidToCategory = {};
    const parents = {};
    cids.forEach((cid, index) => {
      if (stryMutAct_9fa48("2759")) {
        {}
      } else {
        stryCov_9fa48("2759");
        if (stryMutAct_9fa48("2761") ? false : stryMutAct_9fa48("2760") ? true : (stryCov_9fa48("2760", "2761"), cid)) {
          if (stryMutAct_9fa48("2762")) {
            {}
          } else {
            stryCov_9fa48("2762");
            categories[index].children = undefined;
            cidToCategory[cid] = categories[index];
            parents[cid] = stryMutAct_9fa48("2763") ? {} : (stryCov_9fa48("2763"), {
              ...categories[index]
            });
          }
        }
      }
    });
    const tree = stryMutAct_9fa48("2764") ? ["Stryker was here"] : (stryCov_9fa48("2764"), []);
    categories.forEach(category => {
      if (stryMutAct_9fa48("2765")) {
        {}
      } else {
        stryCov_9fa48("2765");
        if (stryMutAct_9fa48("2767") ? false : stryMutAct_9fa48("2766") ? true : (stryCov_9fa48("2766", "2767"), category)) {
          if (stryMutAct_9fa48("2768")) {
            {}
          } else {
            stryCov_9fa48("2768");
            category.children = stryMutAct_9fa48("2771") ? category.children && [] : stryMutAct_9fa48("2770") ? false : stryMutAct_9fa48("2769") ? true : (stryCov_9fa48("2769", "2770", "2771"), category.children || (stryMutAct_9fa48("2772") ? ["Stryker was here"] : (stryCov_9fa48("2772"), [])));
            if (stryMutAct_9fa48("2775") ? false : stryMutAct_9fa48("2774") ? true : stryMutAct_9fa48("2773") ? category.cid : (stryCov_9fa48("2773", "2774", "2775"), !category.cid)) {
              if (stryMutAct_9fa48("2776")) {
                {}
              } else {
                stryCov_9fa48("2776");
                return;
              }
            }
            if (stryMutAct_9fa48("2779") ? !category.hasOwnProperty('parentCid') && category.parentCid === null : stryMutAct_9fa48("2778") ? false : stryMutAct_9fa48("2777") ? true : (stryCov_9fa48("2777", "2778", "2779"), (stryMutAct_9fa48("2780") ? category.hasOwnProperty('parentCid') : (stryCov_9fa48("2780"), !category.hasOwnProperty(stryMutAct_9fa48("2781") ? "" : (stryCov_9fa48("2781"), 'parentCid')))) || (stryMutAct_9fa48("2783") ? category.parentCid !== null : stryMutAct_9fa48("2782") ? false : (stryCov_9fa48("2782", "2783"), category.parentCid === null)))) {
              if (stryMutAct_9fa48("2784")) {
                {}
              } else {
                stryCov_9fa48("2784");
                category.parentCid = 0;
              }
            }
            if (stryMutAct_9fa48("2787") ? category.parentCid !== parentCid : stryMutAct_9fa48("2786") ? false : stryMutAct_9fa48("2785") ? true : (stryCov_9fa48("2785", "2786", "2787"), category.parentCid === parentCid)) {
              if (stryMutAct_9fa48("2788")) {
                {}
              } else {
                stryCov_9fa48("2788");
                tree.push(category);
                category.parent = parents[parentCid];
              }
            } else {
              if (stryMutAct_9fa48("2789")) {
                {}
              } else {
                stryCov_9fa48("2789");
                const parent = cidToCategory[category.parentCid];
                if (stryMutAct_9fa48("2792") ? parent || parent.cid !== category.cid : stryMutAct_9fa48("2791") ? false : stryMutAct_9fa48("2790") ? true : (stryCov_9fa48("2790", "2791", "2792"), parent && (stryMutAct_9fa48("2794") ? parent.cid === category.cid : stryMutAct_9fa48("2793") ? true : (stryCov_9fa48("2793", "2794"), parent.cid !== category.cid)))) {
                  if (stryMutAct_9fa48("2795")) {
                    {}
                  } else {
                    stryCov_9fa48("2795");
                    category.parent = parents[category.parentCid];
                    parent.children = stryMutAct_9fa48("2798") ? parent.children && [] : stryMutAct_9fa48("2797") ? false : stryMutAct_9fa48("2796") ? true : (stryCov_9fa48("2796", "2797", "2798"), parent.children || (stryMutAct_9fa48("2799") ? ["Stryker was here"] : (stryCov_9fa48("2799"), [])));
                    parent.children.push(category);
                  }
                }
              }
            }
          }
        }
      }
    });
    function sortTree(tree) {
      if (stryMutAct_9fa48("2800")) {
        {}
      } else {
        stryCov_9fa48("2800");
        stryMutAct_9fa48("2801") ? tree : (stryCov_9fa48("2801"), tree.sort((a, b) => {
          if (stryMutAct_9fa48("2802")) {
            {}
          } else {
            stryCov_9fa48("2802");
            if (stryMutAct_9fa48("2805") ? a.order === b.order : stryMutAct_9fa48("2804") ? false : stryMutAct_9fa48("2803") ? true : (stryCov_9fa48("2803", "2804", "2805"), a.order !== b.order)) {
              if (stryMutAct_9fa48("2806")) {
                {}
              } else {
                stryCov_9fa48("2806");
                return stryMutAct_9fa48("2807") ? a.order + b.order : (stryCov_9fa48("2807"), a.order - b.order);
              }
            }
            return stryMutAct_9fa48("2808") ? a.cid + b.cid : (stryCov_9fa48("2808"), a.cid - b.cid);
          }
        }));
        tree.forEach(category => {
          if (stryMutAct_9fa48("2809")) {
            {}
          } else {
            stryCov_9fa48("2809");
            if (stryMutAct_9fa48("2812") ? category || Array.isArray(category.children) : stryMutAct_9fa48("2811") ? false : stryMutAct_9fa48("2810") ? true : (stryCov_9fa48("2810", "2811", "2812"), category && Array.isArray(category.children))) {
              if (stryMutAct_9fa48("2813")) {
                {}
              } else {
                stryCov_9fa48("2813");
                sortTree(category.children);
              }
            }
          }
        });
      }
    }
    sortTree(tree);
    categories.forEach(stryMutAct_9fa48("2814") ? () => undefined : (stryCov_9fa48("2814"), c => calculateTopicPostCount(c)));
    return tree;
  }
};
Categories.buildForSelect = async function (uid, privilege, fields) {
  if (stryMutAct_9fa48("2815")) {
    {}
  } else {
    stryCov_9fa48("2815");
    const cids = await Categories.getCidsByPrivilege(stryMutAct_9fa48("2816") ? "" : (stryCov_9fa48("2816"), 'categories:cid'), uid, privilege);
    return await getSelectData(cids, fields);
  }
};
Categories.buildForSelectAll = async function (fields) {
  if (stryMutAct_9fa48("2817")) {
    {}
  } else {
    stryCov_9fa48("2817");
    const cids = await Categories.getAllCidsFromSet(stryMutAct_9fa48("2818") ? "" : (stryCov_9fa48("2818"), 'categories:cid'));
    return await getSelectData(cids, fields);
  }
};
async function getSelectData(cids, fields) {
  if (stryMutAct_9fa48("2819")) {
    {}
  } else {
    stryCov_9fa48("2819");
    const categoryData = await Categories.getCategoriesData(cids);
    const tree = Categories.getTree(categoryData);
    return Categories.buildForSelectCategories(tree, fields);
  }
}
Categories.buildForSelectCategories = function (categories, fields, parentCid) {
  if (stryMutAct_9fa48("2820")) {
    {}
  } else {
    stryCov_9fa48("2820");
    function recursive(category, categoriesData, level, depth) {
      if (stryMutAct_9fa48("2821")) {
        {}
      } else {
        stryCov_9fa48("2821");
        const bullet = level ? stryMutAct_9fa48("2822") ? "" : (stryCov_9fa48("2822"), '&bull; ') : stryMutAct_9fa48("2823") ? "Stryker was here!" : (stryCov_9fa48("2823"), '');
        category.value = category.cid;
        category.level = level;
        category.text = stryMutAct_9fa48("2824") ? level + bullet - category.name : (stryCov_9fa48("2824"), (stryMutAct_9fa48("2825") ? level - bullet : (stryCov_9fa48("2825"), level + bullet)) + category.name);
        category.depth = depth;
        categoriesData.push(category);
        if (stryMutAct_9fa48("2827") ? false : stryMutAct_9fa48("2826") ? true : (stryCov_9fa48("2826", "2827"), Array.isArray(category.children))) {
          if (stryMutAct_9fa48("2828")) {
            {}
          } else {
            stryCov_9fa48("2828");
            category.children.forEach(stryMutAct_9fa48("2829") ? () => undefined : (stryCov_9fa48("2829"), child => recursive(child, categoriesData, stryMutAct_9fa48("2830") ? `` : (stryCov_9fa48("2830"), `&nbsp;&nbsp;&nbsp;&nbsp;${level}`), stryMutAct_9fa48("2831") ? depth - 1 : (stryCov_9fa48("2831"), depth + 1))));
          }
        }
      }
    }
    parentCid = stryMutAct_9fa48("2834") ? parentCid && 0 : stryMutAct_9fa48("2833") ? false : stryMutAct_9fa48("2832") ? true : (stryCov_9fa48("2832", "2833", "2834"), parentCid || 0);
    const categoriesData = stryMutAct_9fa48("2835") ? ["Stryker was here"] : (stryCov_9fa48("2835"), []);
    const rootCategories = stryMutAct_9fa48("2836") ? categories : (stryCov_9fa48("2836"), categories.filter(stryMutAct_9fa48("2837") ? () => undefined : (stryCov_9fa48("2837"), category => stryMutAct_9fa48("2840") ? category || category.parentCid === parentCid : stryMutAct_9fa48("2839") ? false : stryMutAct_9fa48("2838") ? true : (stryCov_9fa48("2838", "2839", "2840"), category && (stryMutAct_9fa48("2842") ? category.parentCid !== parentCid : stryMutAct_9fa48("2841") ? true : (stryCov_9fa48("2841", "2842"), category.parentCid === parentCid))))));
    rootCategories.forEach(stryMutAct_9fa48("2843") ? () => undefined : (stryCov_9fa48("2843"), category => recursive(category, categoriesData, stryMutAct_9fa48("2844") ? "Stryker was here!" : (stryCov_9fa48("2844"), ''), 0)));
    const pickFields = stryMutAct_9fa48("2845") ? [] : (stryCov_9fa48("2845"), [stryMutAct_9fa48("2846") ? "" : (stryCov_9fa48("2846"), 'cid'), stryMutAct_9fa48("2847") ? "" : (stryCov_9fa48("2847"), 'name'), stryMutAct_9fa48("2848") ? "" : (stryCov_9fa48("2848"), 'level'), stryMutAct_9fa48("2849") ? "" : (stryCov_9fa48("2849"), 'icon'), stryMutAct_9fa48("2850") ? "" : (stryCov_9fa48("2850"), 'parentCid'), stryMutAct_9fa48("2851") ? "" : (stryCov_9fa48("2851"), 'color'), stryMutAct_9fa48("2852") ? "" : (stryCov_9fa48("2852"), 'bgColor'), stryMutAct_9fa48("2853") ? "" : (stryCov_9fa48("2853"), 'backgroundImage'), stryMutAct_9fa48("2854") ? "" : (stryCov_9fa48("2854"), 'imageClass')]);
    fields = stryMutAct_9fa48("2857") ? fields && [] : stryMutAct_9fa48("2856") ? false : stryMutAct_9fa48("2855") ? true : (stryCov_9fa48("2855", "2856", "2857"), fields || (stryMutAct_9fa48("2858") ? ["Stryker was here"] : (stryCov_9fa48("2858"), [])));
    if (stryMutAct_9fa48("2861") ? fields.includes('text') || fields.includes('value') : stryMutAct_9fa48("2860") ? false : stryMutAct_9fa48("2859") ? true : (stryCov_9fa48("2859", "2860", "2861"), fields.includes(stryMutAct_9fa48("2862") ? "" : (stryCov_9fa48("2862"), 'text')) && fields.includes(stryMutAct_9fa48("2863") ? "" : (stryCov_9fa48("2863"), 'value')))) {
      if (stryMutAct_9fa48("2864")) {
        {}
      } else {
        stryCov_9fa48("2864");
        return categoriesData.map(stryMutAct_9fa48("2865") ? () => undefined : (stryCov_9fa48("2865"), category => _.pick(category, fields)));
      }
    }
    if (stryMutAct_9fa48("2867") ? false : stryMutAct_9fa48("2866") ? true : (stryCov_9fa48("2866", "2867"), fields.length)) {
      if (stryMutAct_9fa48("2868")) {
        {}
      } else {
        stryCov_9fa48("2868");
        pickFields.push(...fields);
      }
    }
    return categoriesData.map(stryMutAct_9fa48("2869") ? () => undefined : (stryCov_9fa48("2869"), category => _.pick(category, pickFields)));
  }
};
require('../promisify')(Categories);