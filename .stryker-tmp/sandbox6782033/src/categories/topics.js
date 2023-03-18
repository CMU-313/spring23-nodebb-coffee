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
const db = require('../database');
const topics = require('../topics');
const plugins = require('../plugins');
const meta = require('../meta');
const privileges = require('../privileges');
const user = require('../user');
module.exports = function (Categories) {
  if (stryMutAct_9fa48("3185")) {
    {}
  } else {
    stryCov_9fa48("3185");
    Categories.getCategoryTopics = async function (data) {
      if (stryMutAct_9fa48("3186")) {
        {}
      } else {
        stryCov_9fa48("3186");
        let results = await plugins.hooks.fire(stryMutAct_9fa48("3187") ? "" : (stryCov_9fa48("3187"), 'filter:category.topics.prepare'), data);
        const tids = await Categories.getTopicIds(results);
        let topicsData = await topics.getTopicsByTids(tids, data.uid);
        topicsData = await (stryMutAct_9fa48("3188") ? user.blocks : (stryCov_9fa48("3188"), user.blocks.filter(data.uid, topicsData)));
        if (stryMutAct_9fa48("3191") ? false : stryMutAct_9fa48("3190") ? true : stryMutAct_9fa48("3189") ? topicsData.length : (stryCov_9fa48("3189", "3190", "3191"), !topicsData.length)) {
          if (stryMutAct_9fa48("3192")) {
            {}
          } else {
            stryCov_9fa48("3192");
            return stryMutAct_9fa48("3193") ? {} : (stryCov_9fa48("3193"), {
              topics: stryMutAct_9fa48("3194") ? ["Stryker was here"] : (stryCov_9fa48("3194"), []),
              uid: data.uid
            });
          }
        }
        topics.calculateTopicIndices(topicsData, data.start);
        results = await plugins.hooks.fire(stryMutAct_9fa48("3195") ? "" : (stryCov_9fa48("3195"), 'filter:category.topics.get'), stryMutAct_9fa48("3196") ? {} : (stryCov_9fa48("3196"), {
          cid: data.cid,
          topics: topicsData,
          uid: data.uid
        }));
        return stryMutAct_9fa48("3197") ? {} : (stryCov_9fa48("3197"), {
          topics: results.topics,
          nextStart: stryMutAct_9fa48("3198") ? data.stop - 1 : (stryCov_9fa48("3198"), data.stop + 1)
        });
      }
    };
    Categories.getTopicIds = async function (data) {
      if (stryMutAct_9fa48("3199")) {
        {}
      } else {
        stryCov_9fa48("3199");
        const dataForPinned = stryMutAct_9fa48("3200") ? {} : (stryCov_9fa48("3200"), {
          ...data
        });
        dataForPinned.start = 0;
        dataForPinned.stop = stryMutAct_9fa48("3201") ? +1 : (stryCov_9fa48("3201"), -1);
        const [pinnedTids, set, direction] = await Promise.all(stryMutAct_9fa48("3202") ? [] : (stryCov_9fa48("3202"), [Categories.getPinnedTids(dataForPinned), Categories.buildTopicsSortedSet(data), Categories.getSortedSetRangeDirection(data.sort)]));
        const totalPinnedCount = pinnedTids.length;
        const pinnedTidsOnPage = stryMutAct_9fa48("3203") ? pinnedTids : (stryCov_9fa48("3203"), pinnedTids.slice(data.start, (stryMutAct_9fa48("3206") ? data.stop === -1 : stryMutAct_9fa48("3205") ? false : stryMutAct_9fa48("3204") ? true : (stryCov_9fa48("3204", "3205", "3206"), data.stop !== (stryMutAct_9fa48("3207") ? +1 : (stryCov_9fa48("3207"), -1)))) ? stryMutAct_9fa48("3208") ? data.stop - 1 : (stryCov_9fa48("3208"), data.stop + 1) : undefined));
        const pinnedCountOnPage = pinnedTidsOnPage.length;
        const topicsPerPage = stryMutAct_9fa48("3209") ? data.stop - data.start - 1 : (stryCov_9fa48("3209"), (stryMutAct_9fa48("3210") ? data.stop + data.start : (stryCov_9fa48("3210"), data.stop - data.start)) + 1);
        const normalTidsToGet = Math.max(0, stryMutAct_9fa48("3211") ? topicsPerPage + pinnedCountOnPage : (stryCov_9fa48("3211"), topicsPerPage - pinnedCountOnPage));
        if (stryMutAct_9fa48("3214") ? !normalTidsToGet || data.stop !== -1 : stryMutAct_9fa48("3213") ? false : stryMutAct_9fa48("3212") ? true : (stryCov_9fa48("3212", "3213", "3214"), (stryMutAct_9fa48("3215") ? normalTidsToGet : (stryCov_9fa48("3215"), !normalTidsToGet)) && (stryMutAct_9fa48("3217") ? data.stop === -1 : stryMutAct_9fa48("3216") ? true : (stryCov_9fa48("3216", "3217"), data.stop !== (stryMutAct_9fa48("3218") ? +1 : (stryCov_9fa48("3218"), -1)))))) {
          if (stryMutAct_9fa48("3219")) {
            {}
          } else {
            stryCov_9fa48("3219");
            return pinnedTidsOnPage;
          }
        }
        if (stryMutAct_9fa48("3221") ? false : stryMutAct_9fa48("3220") ? true : (stryCov_9fa48("3220", "3221"), plugins.hooks.hasListeners(stryMutAct_9fa48("3222") ? "" : (stryCov_9fa48("3222"), 'filter:categories.getTopicIds')))) {
          if (stryMutAct_9fa48("3223")) {
            {}
          } else {
            stryCov_9fa48("3223");
            const result = await plugins.hooks.fire(stryMutAct_9fa48("3224") ? "" : (stryCov_9fa48("3224"), 'filter:categories.getTopicIds'), stryMutAct_9fa48("3225") ? {} : (stryCov_9fa48("3225"), {
              tids: stryMutAct_9fa48("3226") ? ["Stryker was here"] : (stryCov_9fa48("3226"), []),
              data: data,
              pinnedTids: pinnedTidsOnPage,
              allPinnedTids: pinnedTids,
              totalPinnedCount: totalPinnedCount,
              normalTidsToGet: normalTidsToGet
            }));
            return stryMutAct_9fa48("3229") ? result || result.tids : stryMutAct_9fa48("3228") ? false : stryMutAct_9fa48("3227") ? true : (stryCov_9fa48("3227", "3228", "3229"), result && result.tids);
          }
        }
        let {
          start
        } = data;
        if (stryMutAct_9fa48("3232") ? start > 0 || totalPinnedCount : stryMutAct_9fa48("3231") ? false : stryMutAct_9fa48("3230") ? true : (stryCov_9fa48("3230", "3231", "3232"), (stryMutAct_9fa48("3235") ? start <= 0 : stryMutAct_9fa48("3234") ? start >= 0 : stryMutAct_9fa48("3233") ? true : (stryCov_9fa48("3233", "3234", "3235"), start > 0)) && totalPinnedCount)) {
          if (stryMutAct_9fa48("3236")) {
            {}
          } else {
            stryCov_9fa48("3236");
            stryMutAct_9fa48("3237") ? start += totalPinnedCount - pinnedCountOnPage : (stryCov_9fa48("3237"), start -= stryMutAct_9fa48("3238") ? totalPinnedCount + pinnedCountOnPage : (stryCov_9fa48("3238"), totalPinnedCount - pinnedCountOnPage));
          }
        }
        const stop = (stryMutAct_9fa48("3241") ? data.stop !== -1 : stryMutAct_9fa48("3240") ? false : stryMutAct_9fa48("3239") ? true : (stryCov_9fa48("3239", "3240", "3241"), data.stop === (stryMutAct_9fa48("3242") ? +1 : (stryCov_9fa48("3242"), -1)))) ? data.stop : stryMutAct_9fa48("3243") ? start + normalTidsToGet + 1 : (stryCov_9fa48("3243"), (stryMutAct_9fa48("3244") ? start - normalTidsToGet : (stryCov_9fa48("3244"), start + normalTidsToGet)) - 1);
        let normalTids;
        const reverse = stryMutAct_9fa48("3247") ? direction !== 'highest-to-lowest' : stryMutAct_9fa48("3246") ? false : stryMutAct_9fa48("3245") ? true : (stryCov_9fa48("3245", "3246", "3247"), direction === (stryMutAct_9fa48("3248") ? "" : (stryCov_9fa48("3248"), 'highest-to-lowest')));
        if (stryMutAct_9fa48("3250") ? false : stryMutAct_9fa48("3249") ? true : (stryCov_9fa48("3249", "3250"), Array.isArray(set))) {
          if (stryMutAct_9fa48("3251")) {
            {}
          } else {
            stryCov_9fa48("3251");
            const weights = set.map(stryMutAct_9fa48("3252") ? () => undefined : (stryCov_9fa48("3252"), (s, index) => index ? 0 : 1));
            normalTids = await db[reverse ? stryMutAct_9fa48("3253") ? "" : (stryCov_9fa48("3253"), 'getSortedSetRevIntersect') : stryMutAct_9fa48("3254") ? "" : (stryCov_9fa48("3254"), 'getSortedSetIntersect')](stryMutAct_9fa48("3255") ? {} : (stryCov_9fa48("3255"), {
              sets: set,
              start: start,
              stop: stop,
              weights: weights
            }));
          }
        } else {
          if (stryMutAct_9fa48("3256")) {
            {}
          } else {
            stryCov_9fa48("3256");
            normalTids = await db[reverse ? stryMutAct_9fa48("3257") ? "" : (stryCov_9fa48("3257"), 'getSortedSetRevRange') : stryMutAct_9fa48("3258") ? "" : (stryCov_9fa48("3258"), 'getSortedSetRange')](set, start, stop);
          }
        }
        normalTids = stryMutAct_9fa48("3259") ? normalTids : (stryCov_9fa48("3259"), normalTids.filter(stryMutAct_9fa48("3260") ? () => undefined : (stryCov_9fa48("3260"), tid => stryMutAct_9fa48("3261") ? pinnedTids.includes(tid) : (stryCov_9fa48("3261"), !pinnedTids.includes(tid)))));
        return pinnedTidsOnPage.concat(normalTids);
      }
    };
    Categories.getTopicCount = async function (data) {
      if (stryMutAct_9fa48("3262")) {
        {}
      } else {
        stryCov_9fa48("3262");
        if (stryMutAct_9fa48("3264") ? false : stryMutAct_9fa48("3263") ? true : (stryCov_9fa48("3263", "3264"), plugins.hooks.hasListeners(stryMutAct_9fa48("3265") ? "" : (stryCov_9fa48("3265"), 'filter:categories.getTopicCount')))) {
          if (stryMutAct_9fa48("3266")) {
            {}
          } else {
            stryCov_9fa48("3266");
            const result = await plugins.hooks.fire(stryMutAct_9fa48("3267") ? "" : (stryCov_9fa48("3267"), 'filter:categories.getTopicCount'), stryMutAct_9fa48("3268") ? {} : (stryCov_9fa48("3268"), {
              topicCount: data.category.topic_count,
              data: data
            }));
            return stryMutAct_9fa48("3271") ? result || result.topicCount : stryMutAct_9fa48("3270") ? false : stryMutAct_9fa48("3269") ? true : (stryCov_9fa48("3269", "3270", "3271"), result && result.topicCount);
          }
        }
        const set = await Categories.buildTopicsSortedSet(data);
        if (stryMutAct_9fa48("3273") ? false : stryMutAct_9fa48("3272") ? true : (stryCov_9fa48("3272", "3273"), Array.isArray(set))) {
          if (stryMutAct_9fa48("3274")) {
            {}
          } else {
            stryCov_9fa48("3274");
            return await db.sortedSetIntersectCard(set);
          }
        } else if (stryMutAct_9fa48("3277") ? data.targetUid || set : stryMutAct_9fa48("3276") ? false : stryMutAct_9fa48("3275") ? true : (stryCov_9fa48("3275", "3276", "3277"), data.targetUid && set)) {
          if (stryMutAct_9fa48("3278")) {
            {}
          } else {
            stryCov_9fa48("3278");
            return await db.sortedSetCard(set);
          }
        }
        return data.category.topic_count;
      }
    };
    Categories.buildTopicsSortedSet = async function (data) {
      if (stryMutAct_9fa48("3279")) {
        {}
      } else {
        stryCov_9fa48("3279");
        const {
          cid
        } = data;
        let set = stryMutAct_9fa48("3280") ? `` : (stryCov_9fa48("3280"), `cid:${cid}:tids`);
        const sort = stryMutAct_9fa48("3283") ? (data.sort || data.settings && data.settings.categoryTopicSort || meta.config.categoryTopicSort) && 'newest_to_oldest' : stryMutAct_9fa48("3282") ? false : stryMutAct_9fa48("3281") ? true : (stryCov_9fa48("3281", "3282", "3283"), (stryMutAct_9fa48("3285") ? (data.sort || data.settings && data.settings.categoryTopicSort) && meta.config.categoryTopicSort : stryMutAct_9fa48("3284") ? false : (stryCov_9fa48("3284", "3285"), (stryMutAct_9fa48("3287") ? data.sort && data.settings && data.settings.categoryTopicSort : stryMutAct_9fa48("3286") ? false : (stryCov_9fa48("3286", "3287"), data.sort || (stryMutAct_9fa48("3289") ? data.settings || data.settings.categoryTopicSort : stryMutAct_9fa48("3288") ? false : (stryCov_9fa48("3288", "3289"), data.settings && data.settings.categoryTopicSort)))) || meta.config.categoryTopicSort)) || (stryMutAct_9fa48("3290") ? "" : (stryCov_9fa48("3290"), 'newest_to_oldest')));
        if (stryMutAct_9fa48("3293") ? sort !== 'most_posts' : stryMutAct_9fa48("3292") ? false : stryMutAct_9fa48("3291") ? true : (stryCov_9fa48("3291", "3292", "3293"), sort === (stryMutAct_9fa48("3294") ? "" : (stryCov_9fa48("3294"), 'most_posts')))) {
          if (stryMutAct_9fa48("3295")) {
            {}
          } else {
            stryCov_9fa48("3295");
            set = stryMutAct_9fa48("3296") ? `` : (stryCov_9fa48("3296"), `cid:${cid}:tids:posts`);
          }
        } else if (stryMutAct_9fa48("3299") ? sort !== 'most_votes' : stryMutAct_9fa48("3298") ? false : stryMutAct_9fa48("3297") ? true : (stryCov_9fa48("3297", "3298", "3299"), sort === (stryMutAct_9fa48("3300") ? "" : (stryCov_9fa48("3300"), 'most_votes')))) {
          if (stryMutAct_9fa48("3301")) {
            {}
          } else {
            stryCov_9fa48("3301");
            set = stryMutAct_9fa48("3302") ? `` : (stryCov_9fa48("3302"), `cid:${cid}:tids:votes`);
          }
        } else if (stryMutAct_9fa48("3305") ? sort !== 'most_views' : stryMutAct_9fa48("3304") ? false : stryMutAct_9fa48("3303") ? true : (stryCov_9fa48("3303", "3304", "3305"), sort === (stryMutAct_9fa48("3306") ? "" : (stryCov_9fa48("3306"), 'most_views')))) {
          if (stryMutAct_9fa48("3307")) {
            {}
          } else {
            stryCov_9fa48("3307");
            set = stryMutAct_9fa48("3308") ? `` : (stryCov_9fa48("3308"), `cid:${cid}:tids:views`);
          }
        }
        if (stryMutAct_9fa48("3310") ? false : stryMutAct_9fa48("3309") ? true : (stryCov_9fa48("3309", "3310"), data.tag)) {
          if (stryMutAct_9fa48("3311")) {
            {}
          } else {
            stryCov_9fa48("3311");
            if (stryMutAct_9fa48("3313") ? false : stryMutAct_9fa48("3312") ? true : (stryCov_9fa48("3312", "3313"), Array.isArray(data.tag))) {
              if (stryMutAct_9fa48("3314")) {
                {}
              } else {
                stryCov_9fa48("3314");
                set = (stryMutAct_9fa48("3315") ? [] : (stryCov_9fa48("3315"), [set])).concat(data.tag.map(stryMutAct_9fa48("3316") ? () => undefined : (stryCov_9fa48("3316"), tag => stryMutAct_9fa48("3317") ? `` : (stryCov_9fa48("3317"), `tag:${tag}:topics`))));
              }
            } else {
              if (stryMutAct_9fa48("3318")) {
                {}
              } else {
                stryCov_9fa48("3318");
                set = stryMutAct_9fa48("3319") ? [] : (stryCov_9fa48("3319"), [set, stryMutAct_9fa48("3320") ? `` : (stryCov_9fa48("3320"), `tag:${data.tag}:topics`)]);
              }
            }
          }
        }
        if (stryMutAct_9fa48("3322") ? false : stryMutAct_9fa48("3321") ? true : (stryCov_9fa48("3321", "3322"), data.targetUid)) {
          if (stryMutAct_9fa48("3323")) {
            {}
          } else {
            stryCov_9fa48("3323");
            set = (Array.isArray(set) ? set : stryMutAct_9fa48("3324") ? [] : (stryCov_9fa48("3324"), [set])).concat(stryMutAct_9fa48("3325") ? [] : (stryCov_9fa48("3325"), [stryMutAct_9fa48("3326") ? `` : (stryCov_9fa48("3326"), `cid:${cid}:uid:${data.targetUid}:tids`)]));
          }
        }
        const result = await plugins.hooks.fire(stryMutAct_9fa48("3327") ? "" : (stryCov_9fa48("3327"), 'filter:categories.buildTopicsSortedSet'), stryMutAct_9fa48("3328") ? {} : (stryCov_9fa48("3328"), {
          set: set,
          data: data
        }));
        return stryMutAct_9fa48("3331") ? result || result.set : stryMutAct_9fa48("3330") ? false : stryMutAct_9fa48("3329") ? true : (stryCov_9fa48("3329", "3330", "3331"), result && result.set);
      }
    };
    Categories.getSortedSetRangeDirection = async function (sort) {
      if (stryMutAct_9fa48("3332")) {
        {}
      } else {
        stryCov_9fa48("3332");
        sort = stryMutAct_9fa48("3335") ? sort && 'newest_to_oldest' : stryMutAct_9fa48("3334") ? false : stryMutAct_9fa48("3333") ? true : (stryCov_9fa48("3333", "3334", "3335"), sort || (stryMutAct_9fa48("3336") ? "" : (stryCov_9fa48("3336"), 'newest_to_oldest')));
        const direction = (stryMutAct_9fa48("3337") ? [] : (stryCov_9fa48("3337"), [stryMutAct_9fa48("3338") ? "" : (stryCov_9fa48("3338"), 'newest_to_oldest'), stryMutAct_9fa48("3339") ? "" : (stryCov_9fa48("3339"), 'most_posts'), stryMutAct_9fa48("3340") ? "" : (stryCov_9fa48("3340"), 'most_votes'), stryMutAct_9fa48("3341") ? "" : (stryCov_9fa48("3341"), 'most_views')])).includes(sort) ? stryMutAct_9fa48("3342") ? "" : (stryCov_9fa48("3342"), 'highest-to-lowest') : stryMutAct_9fa48("3343") ? "" : (stryCov_9fa48("3343"), 'lowest-to-highest');
        const result = await plugins.hooks.fire(stryMutAct_9fa48("3344") ? "" : (stryCov_9fa48("3344"), 'filter:categories.getSortedSetRangeDirection'), stryMutAct_9fa48("3345") ? {} : (stryCov_9fa48("3345"), {
          sort: sort,
          direction: direction
        }));
        return stryMutAct_9fa48("3348") ? result || result.direction : stryMutAct_9fa48("3347") ? false : stryMutAct_9fa48("3346") ? true : (stryCov_9fa48("3346", "3347", "3348"), result && result.direction);
      }
    };
    Categories.getAllTopicIds = async function (cid, start, stop) {
      if (stryMutAct_9fa48("3349")) {
        {}
      } else {
        stryCov_9fa48("3349");
        return await db.getSortedSetRange(stryMutAct_9fa48("3350") ? [] : (stryCov_9fa48("3350"), [stryMutAct_9fa48("3351") ? `` : (stryCov_9fa48("3351"), `cid:${cid}:tids:pinned`), stryMutAct_9fa48("3352") ? `` : (stryCov_9fa48("3352"), `cid:${cid}:tids`)]), start, stop);
      }
    };
    Categories.getPinnedTids = async function (data) {
      if (stryMutAct_9fa48("3353")) {
        {}
      } else {
        stryCov_9fa48("3353");
        if (stryMutAct_9fa48("3355") ? false : stryMutAct_9fa48("3354") ? true : (stryCov_9fa48("3354", "3355"), plugins.hooks.hasListeners(stryMutAct_9fa48("3356") ? "" : (stryCov_9fa48("3356"), 'filter:categories.getPinnedTids')))) {
          if (stryMutAct_9fa48("3357")) {
            {}
          } else {
            stryCov_9fa48("3357");
            const result = await plugins.hooks.fire(stryMutAct_9fa48("3358") ? "" : (stryCov_9fa48("3358"), 'filter:categories.getPinnedTids'), stryMutAct_9fa48("3359") ? {} : (stryCov_9fa48("3359"), {
              pinnedTids: stryMutAct_9fa48("3360") ? ["Stryker was here"] : (stryCov_9fa48("3360"), []),
              data: data
            }));
            return stryMutAct_9fa48("3363") ? result || result.pinnedTids : stryMutAct_9fa48("3362") ? false : stryMutAct_9fa48("3361") ? true : (stryCov_9fa48("3361", "3362", "3363"), result && result.pinnedTids);
          }
        }
        const [allPinnedTids, canSchedule] = await Promise.all(stryMutAct_9fa48("3364") ? [] : (stryCov_9fa48("3364"), [db.getSortedSetRevRange(stryMutAct_9fa48("3365") ? `` : (stryCov_9fa48("3365"), `cid:${data.cid}:tids:pinned`), data.start, data.stop), privileges.categories.can(stryMutAct_9fa48("3366") ? "" : (stryCov_9fa48("3366"), 'topics:schedule'), data.cid, data.uid)]));
        const pinnedTids = canSchedule ? allPinnedTids : await filterScheduledTids(allPinnedTids);
        return await topics.tools.checkPinExpiry(pinnedTids);
      }
    };
    Categories.modifyTopicsByPrivilege = function (topics, privileges) {
      if (stryMutAct_9fa48("3367")) {
        {}
      } else {
        stryCov_9fa48("3367");
        if (stryMutAct_9fa48("3370") ? (!Array.isArray(topics) || !topics.length) && privileges.view_deleted : stryMutAct_9fa48("3369") ? false : stryMutAct_9fa48("3368") ? true : (stryCov_9fa48("3368", "3369", "3370"), (stryMutAct_9fa48("3372") ? !Array.isArray(topics) && !topics.length : stryMutAct_9fa48("3371") ? false : (stryCov_9fa48("3371", "3372"), (stryMutAct_9fa48("3373") ? Array.isArray(topics) : (stryCov_9fa48("3373"), !Array.isArray(topics))) || (stryMutAct_9fa48("3374") ? topics.length : (stryCov_9fa48("3374"), !topics.length)))) || privileges.view_deleted)) {
          if (stryMutAct_9fa48("3375")) {
            {}
          } else {
            stryCov_9fa48("3375");
            return;
          }
        }
        topics.forEach(topic => {
          if (stryMutAct_9fa48("3376")) {
            {}
          } else {
            stryCov_9fa48("3376");
            if (stryMutAct_9fa48("3379") ? !topic.scheduled && topic.deleted || !topic.isOwner : stryMutAct_9fa48("3378") ? false : stryMutAct_9fa48("3377") ? true : (stryCov_9fa48("3377", "3378", "3379"), (stryMutAct_9fa48("3381") ? !topic.scheduled || topic.deleted : stryMutAct_9fa48("3380") ? true : (stryCov_9fa48("3380", "3381"), (stryMutAct_9fa48("3382") ? topic.scheduled : (stryCov_9fa48("3382"), !topic.scheduled)) && topic.deleted)) && (stryMutAct_9fa48("3383") ? topic.isOwner : (stryCov_9fa48("3383"), !topic.isOwner)))) {
              if (stryMutAct_9fa48("3384")) {
                {}
              } else {
                stryCov_9fa48("3384");
                topic.title = stryMutAct_9fa48("3385") ? "" : (stryCov_9fa48("3385"), '[[topic:topic_is_deleted]]');
                if (stryMutAct_9fa48("3387") ? false : stryMutAct_9fa48("3386") ? true : (stryCov_9fa48("3386", "3387"), topic.hasOwnProperty(stryMutAct_9fa48("3388") ? "" : (stryCov_9fa48("3388"), 'titleRaw')))) {
                  if (stryMutAct_9fa48("3389")) {
                    {}
                  } else {
                    stryCov_9fa48("3389");
                    topic.titleRaw = stryMutAct_9fa48("3390") ? "" : (stryCov_9fa48("3390"), '[[topic:topic_is_deleted]]');
                  }
                }
                topic.slug = topic.tid;
                topic.teaser = null;
                topic.noAnchor = stryMutAct_9fa48("3391") ? false : (stryCov_9fa48("3391"), true);
                topic.tags = stryMutAct_9fa48("3392") ? ["Stryker was here"] : (stryCov_9fa48("3392"), []);
              }
            }
          }
        });
      }
    };
    Categories.onNewPostMade = async function (cid, pinned, postData) {
      if (stryMutAct_9fa48("3393")) {
        {}
      } else {
        stryCov_9fa48("3393");
        if (stryMutAct_9fa48("3396") ? !cid && !postData : stryMutAct_9fa48("3395") ? false : stryMutAct_9fa48("3394") ? true : (stryCov_9fa48("3394", "3395", "3396"), (stryMutAct_9fa48("3397") ? cid : (stryCov_9fa48("3397"), !cid)) || (stryMutAct_9fa48("3398") ? postData : (stryCov_9fa48("3398"), !postData)))) {
          if (stryMutAct_9fa48("3399")) {
            {}
          } else {
            stryCov_9fa48("3399");
            return;
          }
        }
        const promises = stryMutAct_9fa48("3400") ? [] : (stryCov_9fa48("3400"), [db.sortedSetAdd(stryMutAct_9fa48("3401") ? `` : (stryCov_9fa48("3401"), `cid:${cid}:pids`), postData.timestamp, postData.pid), db.incrObjectField(stryMutAct_9fa48("3402") ? `` : (stryCov_9fa48("3402"), `category:${cid}`), stryMutAct_9fa48("3403") ? "" : (stryCov_9fa48("3403"), 'post_count'))]);
        if (stryMutAct_9fa48("3406") ? false : stryMutAct_9fa48("3405") ? true : stryMutAct_9fa48("3404") ? pinned : (stryCov_9fa48("3404", "3405", "3406"), !pinned)) {
          if (stryMutAct_9fa48("3407")) {
            {}
          } else {
            stryCov_9fa48("3407");
            promises.push(db.sortedSetIncrBy(stryMutAct_9fa48("3408") ? `` : (stryCov_9fa48("3408"), `cid:${cid}:tids:posts`), 1, postData.tid));
          }
        }
        await Promise.all(promises);
        await Categories.updateRecentTidForCid(cid);
      }
    };
    async function filterScheduledTids(tids) {
      if (stryMutAct_9fa48("3409")) {
        {}
      } else {
        stryCov_9fa48("3409");
        const scores = await db.sortedSetScores(stryMutAct_9fa48("3410") ? "" : (stryCov_9fa48("3410"), 'topics:scheduled'), tids);
        const now = Date.now();
        return stryMutAct_9fa48("3411") ? tids : (stryCov_9fa48("3411"), tids.filter(stryMutAct_9fa48("3412") ? () => undefined : (stryCov_9fa48("3412"), (tid, index) => stryMutAct_9fa48("3415") ? tid || !scores[index] || scores[index] <= now : stryMutAct_9fa48("3414") ? false : stryMutAct_9fa48("3413") ? true : (stryCov_9fa48("3413", "3414", "3415"), tid && (stryMutAct_9fa48("3417") ? !scores[index] && scores[index] <= now : stryMutAct_9fa48("3416") ? true : (stryCov_9fa48("3416", "3417"), (stryMutAct_9fa48("3418") ? scores[index] : (stryCov_9fa48("3418"), !scores[index])) || (stryMutAct_9fa48("3421") ? scores[index] > now : stryMutAct_9fa48("3420") ? scores[index] < now : stryMutAct_9fa48("3419") ? false : (stryCov_9fa48("3419", "3420", "3421"), scores[index] <= now))))))));
      }
    }
  }
};