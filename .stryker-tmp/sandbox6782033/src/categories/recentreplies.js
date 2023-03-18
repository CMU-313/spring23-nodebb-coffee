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
const winston = require('winston');
const _ = require('lodash');
const db = require('../database');
const posts = require('../posts');
const topics = require('../topics');
const privileges = require('../privileges');
const plugins = require('../plugins');
const batch = require('../batch');
module.exports = function (Categories) {
  if (stryMutAct_9fa48("2870")) {
    {}
  } else {
    stryCov_9fa48("2870");
    Categories.getRecentReplies = async function (cid, uid, start, stop) {
      if (stryMutAct_9fa48("2871")) {
        {}
      } else {
        stryCov_9fa48("2871");
        // backwards compatibility, treat start as count
        if (stryMutAct_9fa48("2874") ? stop === undefined || start > 0 : stryMutAct_9fa48("2873") ? false : stryMutAct_9fa48("2872") ? true : (stryCov_9fa48("2872", "2873", "2874"), (stryMutAct_9fa48("2876") ? stop !== undefined : stryMutAct_9fa48("2875") ? true : (stryCov_9fa48("2875", "2876"), stop === undefined)) && (stryMutAct_9fa48("2879") ? start <= 0 : stryMutAct_9fa48("2878") ? start >= 0 : stryMutAct_9fa48("2877") ? true : (stryCov_9fa48("2877", "2878", "2879"), start > 0)))) {
          if (stryMutAct_9fa48("2880")) {
            {}
          } else {
            stryCov_9fa48("2880");
            winston.warn(stryMutAct_9fa48("2881") ? "" : (stryCov_9fa48("2881"), '[Categories.getRecentReplies] 3 params deprecated please use Categories.getRecentReplies(cid, uid, start, stop)'));
            stop = stryMutAct_9fa48("2882") ? start + 1 : (stryCov_9fa48("2882"), start - 1);
            start = 0;
          }
        }
        let pids = await db.getSortedSetRevRange(stryMutAct_9fa48("2883") ? `` : (stryCov_9fa48("2883"), `cid:${cid}:pids`), start, stop);
        pids = await (stryMutAct_9fa48("2884") ? privileges.posts : (stryCov_9fa48("2884"), privileges.posts.filter(stryMutAct_9fa48("2885") ? "" : (stryCov_9fa48("2885"), 'topics:read'), pids, uid)));
        return await posts.getPostSummaryByPids(pids, uid, stryMutAct_9fa48("2886") ? {} : (stryCov_9fa48("2886"), {
          stripTags: stryMutAct_9fa48("2887") ? false : (stryCov_9fa48("2887"), true)
        }));
      }
    };
    Categories.updateRecentTid = async function (cid, tid) {
      if (stryMutAct_9fa48("2888")) {
        {}
      } else {
        stryCov_9fa48("2888");
        const [count, numRecentReplies] = await Promise.all(stryMutAct_9fa48("2889") ? [] : (stryCov_9fa48("2889"), [db.sortedSetCard(stryMutAct_9fa48("2890") ? `` : (stryCov_9fa48("2890"), `cid:${cid}:recent_tids`)), db.getObjectField(stryMutAct_9fa48("2891") ? `` : (stryCov_9fa48("2891"), `category:${cid}`), stryMutAct_9fa48("2892") ? "" : (stryCov_9fa48("2892"), 'numRecentReplies'))]));
        if (stryMutAct_9fa48("2896") ? count < numRecentReplies : stryMutAct_9fa48("2895") ? count > numRecentReplies : stryMutAct_9fa48("2894") ? false : stryMutAct_9fa48("2893") ? true : (stryCov_9fa48("2893", "2894", "2895", "2896"), count >= numRecentReplies)) {
          if (stryMutAct_9fa48("2897")) {
            {}
          } else {
            stryCov_9fa48("2897");
            const data = await db.getSortedSetRangeWithScores(stryMutAct_9fa48("2898") ? `` : (stryCov_9fa48("2898"), `cid:${cid}:recent_tids`), 0, stryMutAct_9fa48("2899") ? count + numRecentReplies : (stryCov_9fa48("2899"), count - numRecentReplies));
            const shouldRemove = stryMutAct_9fa48("2900") ? data.length === 1 && count === 1 && data[0].value === String(tid) : (stryCov_9fa48("2900"), !(stryMutAct_9fa48("2903") ? data.length === 1 && count === 1 || data[0].value === String(tid) : stryMutAct_9fa48("2902") ? false : stryMutAct_9fa48("2901") ? true : (stryCov_9fa48("2901", "2902", "2903"), (stryMutAct_9fa48("2905") ? data.length === 1 || count === 1 : stryMutAct_9fa48("2904") ? true : (stryCov_9fa48("2904", "2905"), (stryMutAct_9fa48("2907") ? data.length !== 1 : stryMutAct_9fa48("2906") ? true : (stryCov_9fa48("2906", "2907"), data.length === 1)) && (stryMutAct_9fa48("2909") ? count !== 1 : stryMutAct_9fa48("2908") ? true : (stryCov_9fa48("2908", "2909"), count === 1)))) && (stryMutAct_9fa48("2911") ? data[0].value !== String(tid) : stryMutAct_9fa48("2910") ? true : (stryCov_9fa48("2910", "2911"), data[0].value === String(tid))))));
            if (stryMutAct_9fa48("2914") ? data.length || shouldRemove : stryMutAct_9fa48("2913") ? false : stryMutAct_9fa48("2912") ? true : (stryCov_9fa48("2912", "2913", "2914"), data.length && shouldRemove)) {
              if (stryMutAct_9fa48("2915")) {
                {}
              } else {
                stryCov_9fa48("2915");
                await db.sortedSetsRemoveRangeByScore(stryMutAct_9fa48("2916") ? [] : (stryCov_9fa48("2916"), [stryMutAct_9fa48("2917") ? `` : (stryCov_9fa48("2917"), `cid:${cid}:recent_tids`)]), stryMutAct_9fa48("2918") ? "" : (stryCov_9fa48("2918"), '-inf'), data[stryMutAct_9fa48("2919") ? data.length + 1 : (stryCov_9fa48("2919"), data.length - 1)].score);
              }
            }
          }
        }
        if (stryMutAct_9fa48("2923") ? numRecentReplies <= 0 : stryMutAct_9fa48("2922") ? numRecentReplies >= 0 : stryMutAct_9fa48("2921") ? false : stryMutAct_9fa48("2920") ? true : (stryCov_9fa48("2920", "2921", "2922", "2923"), numRecentReplies > 0)) {
          if (stryMutAct_9fa48("2924")) {
            {}
          } else {
            stryCov_9fa48("2924");
            await db.sortedSetAdd(stryMutAct_9fa48("2925") ? `` : (stryCov_9fa48("2925"), `cid:${cid}:recent_tids`), Date.now(), tid);
          }
        }
        await plugins.hooks.fire(stryMutAct_9fa48("2926") ? "" : (stryCov_9fa48("2926"), 'action:categories.updateRecentTid'), stryMutAct_9fa48("2927") ? {} : (stryCov_9fa48("2927"), {
          cid: cid,
          tid: tid
        }));
      }
    };
    Categories.updateRecentTidForCid = async function (cid) {
      if (stryMutAct_9fa48("2928")) {
        {}
      } else {
        stryCov_9fa48("2928");
        let postData;
        let topicData;
        let index = 0;
        do {
          if (stryMutAct_9fa48("2934")) {
            {}
          } else {
            stryCov_9fa48("2934");
            /* eslint-disable no-await-in-loop */
            const pids = await db.getSortedSetRevRange(stryMutAct_9fa48("2935") ? `` : (stryCov_9fa48("2935"), `cid:${cid}:pids`), index, index);
            if (stryMutAct_9fa48("2938") ? false : stryMutAct_9fa48("2937") ? true : stryMutAct_9fa48("2936") ? pids.length : (stryCov_9fa48("2936", "2937", "2938"), !pids.length)) {
              if (stryMutAct_9fa48("2939")) {
                {}
              } else {
                stryCov_9fa48("2939");
                return;
              }
            }
            postData = await posts.getPostFields(pids[0], stryMutAct_9fa48("2940") ? [] : (stryCov_9fa48("2940"), [stryMutAct_9fa48("2941") ? "" : (stryCov_9fa48("2941"), 'tid'), stryMutAct_9fa48("2942") ? "" : (stryCov_9fa48("2942"), 'deleted')]));
            if (stryMutAct_9fa48("2945") ? postData && postData.tid || !postData.deleted : stryMutAct_9fa48("2944") ? false : stryMutAct_9fa48("2943") ? true : (stryCov_9fa48("2943", "2944", "2945"), (stryMutAct_9fa48("2947") ? postData || postData.tid : stryMutAct_9fa48("2946") ? true : (stryCov_9fa48("2946", "2947"), postData && postData.tid)) && (stryMutAct_9fa48("2948") ? postData.deleted : (stryCov_9fa48("2948"), !postData.deleted)))) {
              if (stryMutAct_9fa48("2949")) {
                {}
              } else {
                stryCov_9fa48("2949");
                topicData = await topics.getTopicData(postData.tid);
              }
            }
            stryMutAct_9fa48("2950") ? index -= 1 : (stryCov_9fa48("2950"), index += 1);
          }
        } while (stryMutAct_9fa48("2930") ? (!topicData || topicData.deleted) && topicData.scheduled : stryMutAct_9fa48("2929") ? false : (stryCov_9fa48("2929", "2930"), (stryMutAct_9fa48("2932") ? !topicData && topicData.deleted : stryMutAct_9fa48("2931") ? false : (stryCov_9fa48("2931", "2932"), (stryMutAct_9fa48("2933") ? topicData : (stryCov_9fa48("2933"), !topicData)) || topicData.deleted)) || topicData.scheduled));
        if (stryMutAct_9fa48("2953") ? postData || postData.tid : stryMutAct_9fa48("2952") ? false : stryMutAct_9fa48("2951") ? true : (stryCov_9fa48("2951", "2952", "2953"), postData && postData.tid)) {
          if (stryMutAct_9fa48("2954")) {
            {}
          } else {
            stryCov_9fa48("2954");
            await Categories.updateRecentTid(cid, postData.tid);
          }
        }
      }
    };
    Categories.getRecentTopicReplies = async function (categoryData, uid, query) {
      if (stryMutAct_9fa48("2955")) {
        {}
      } else {
        stryCov_9fa48("2955");
        if (stryMutAct_9fa48("2958") ? !Array.isArray(categoryData) && !categoryData.length : stryMutAct_9fa48("2957") ? false : stryMutAct_9fa48("2956") ? true : (stryCov_9fa48("2956", "2957", "2958"), (stryMutAct_9fa48("2959") ? Array.isArray(categoryData) : (stryCov_9fa48("2959"), !Array.isArray(categoryData))) || (stryMutAct_9fa48("2960") ? categoryData.length : (stryCov_9fa48("2960"), !categoryData.length)))) {
          if (stryMutAct_9fa48("2961")) {
            {}
          } else {
            stryCov_9fa48("2961");
            return;
          }
        }
        const categoriesToLoad = stryMutAct_9fa48("2962") ? categoryData : (stryCov_9fa48("2962"), categoryData.filter(stryMutAct_9fa48("2963") ? () => undefined : (stryCov_9fa48("2963"), c => stryMutAct_9fa48("2966") ? c && c.numRecentReplies || parseInt(c.numRecentReplies, 10) > 0 : stryMutAct_9fa48("2965") ? false : stryMutAct_9fa48("2964") ? true : (stryCov_9fa48("2964", "2965", "2966"), (stryMutAct_9fa48("2968") ? c || c.numRecentReplies : stryMutAct_9fa48("2967") ? true : (stryCov_9fa48("2967", "2968"), c && c.numRecentReplies)) && (stryMutAct_9fa48("2971") ? parseInt(c.numRecentReplies, 10) <= 0 : stryMutAct_9fa48("2970") ? parseInt(c.numRecentReplies, 10) >= 0 : stryMutAct_9fa48("2969") ? true : (stryCov_9fa48("2969", "2970", "2971"), parseInt(c.numRecentReplies, 10) > 0))))));
        let keys = stryMutAct_9fa48("2972") ? ["Stryker was here"] : (stryCov_9fa48("2972"), []);
        if (stryMutAct_9fa48("2974") ? false : stryMutAct_9fa48("2973") ? true : (stryCov_9fa48("2973", "2974"), plugins.hooks.hasListeners(stryMutAct_9fa48("2975") ? "" : (stryCov_9fa48("2975"), 'filter:categories.getRecentTopicReplies')))) {
          if (stryMutAct_9fa48("2976")) {
            {}
          } else {
            stryCov_9fa48("2976");
            const result = await plugins.hooks.fire(stryMutAct_9fa48("2977") ? "" : (stryCov_9fa48("2977"), 'filter:categories.getRecentTopicReplies'), stryMutAct_9fa48("2978") ? {} : (stryCov_9fa48("2978"), {
              categories: categoriesToLoad,
              uid: uid,
              query: query,
              keys: stryMutAct_9fa48("2979") ? ["Stryker was here"] : (stryCov_9fa48("2979"), [])
            }));
            keys = result.keys;
          }
        } else {
          if (stryMutAct_9fa48("2980")) {
            {}
          } else {
            stryCov_9fa48("2980");
            keys = categoriesToLoad.map(stryMutAct_9fa48("2981") ? () => undefined : (stryCov_9fa48("2981"), c => stryMutAct_9fa48("2982") ? `` : (stryCov_9fa48("2982"), `cid:${c.cid}:recent_tids`)));
          }
        }
        const results = await db.getSortedSetsMembers(keys);
        let tids = _.uniq(stryMutAct_9fa48("2983") ? _.flatten(results) : (stryCov_9fa48("2983"), _.flatten(results).filter(Boolean)));
        tids = await privileges.topics.filterTids(stryMutAct_9fa48("2984") ? "" : (stryCov_9fa48("2984"), 'topics:read'), tids, uid);
        const topics = await getTopics(tids, uid);
        assignTopicsToCategories(categoryData, topics);
        bubbleUpChildrenPosts(categoryData);
      }
    };
    async function getTopics(tids, uid) {
      if (stryMutAct_9fa48("2985")) {
        {}
      } else {
        stryCov_9fa48("2985");
        const topicData = await topics.getTopicsFields(tids, stryMutAct_9fa48("2986") ? [] : (stryCov_9fa48("2986"), [stryMutAct_9fa48("2987") ? "" : (stryCov_9fa48("2987"), 'tid'), stryMutAct_9fa48("2988") ? "" : (stryCov_9fa48("2988"), 'mainPid'), stryMutAct_9fa48("2989") ? "" : (stryCov_9fa48("2989"), 'slug'), stryMutAct_9fa48("2990") ? "" : (stryCov_9fa48("2990"), 'title'), stryMutAct_9fa48("2991") ? "" : (stryCov_9fa48("2991"), 'teaserPid'), stryMutAct_9fa48("2992") ? "" : (stryCov_9fa48("2992"), 'cid'), stryMutAct_9fa48("2993") ? "" : (stryCov_9fa48("2993"), 'postcount')]));
        topicData.forEach(topic => {
          if (stryMutAct_9fa48("2994")) {
            {}
          } else {
            stryCov_9fa48("2994");
            if (stryMutAct_9fa48("2996") ? false : stryMutAct_9fa48("2995") ? true : (stryCov_9fa48("2995", "2996"), topic)) {
              if (stryMutAct_9fa48("2997")) {
                {}
              } else {
                stryCov_9fa48("2997");
                topic.teaserPid = stryMutAct_9fa48("3000") ? topic.teaserPid && topic.mainPid : stryMutAct_9fa48("2999") ? false : stryMutAct_9fa48("2998") ? true : (stryCov_9fa48("2998", "2999", "3000"), topic.teaserPid || topic.mainPid);
              }
            }
          }
        });
        const cids = _.uniq(stryMutAct_9fa48("3001") ? topicData.map(t => t && t.cid) : (stryCov_9fa48("3001"), topicData.map(stryMutAct_9fa48("3002") ? () => undefined : (stryCov_9fa48("3002"), t => stryMutAct_9fa48("3005") ? t || t.cid : stryMutAct_9fa48("3004") ? false : stryMutAct_9fa48("3003") ? true : (stryCov_9fa48("3003", "3004", "3005"), t && t.cid))).filter(stryMutAct_9fa48("3006") ? () => undefined : (stryCov_9fa48("3006"), cid => parseInt(cid, 10)))));
        const getToRoot = stryMutAct_9fa48("3007") ? () => undefined : (stryCov_9fa48("3007"), (() => {
          const getToRoot = async () => await Promise.all(cids.map(Categories.getParentCids));
          return getToRoot;
        })());
        const [toRoot, teasers] = await Promise.all(stryMutAct_9fa48("3008") ? [] : (stryCov_9fa48("3008"), [getToRoot(), topics.getTeasers(topicData, uid)]));
        const cidToRoot = _.zipObject(cids, toRoot);
        teasers.forEach((teaser, index) => {
          if (stryMutAct_9fa48("3009")) {
            {}
          } else {
            stryCov_9fa48("3009");
            if (stryMutAct_9fa48("3011") ? false : stryMutAct_9fa48("3010") ? true : (stryCov_9fa48("3010", "3011"), teaser)) {
              if (stryMutAct_9fa48("3012")) {
                {}
              } else {
                stryCov_9fa48("3012");
                teaser.cid = topicData[index].cid;
                teaser.parentCids = cidToRoot[teaser.cid];
                teaser.tid = undefined;
                teaser.uid = undefined;
                teaser.topic = stryMutAct_9fa48("3013") ? {} : (stryCov_9fa48("3013"), {
                  slug: topicData[index].slug,
                  title: topicData[index].title
                });
              }
            }
          }
        });
        return stryMutAct_9fa48("3014") ? teasers : (stryCov_9fa48("3014"), teasers.filter(Boolean));
      }
    }
    function assignTopicsToCategories(categories, topics) {
      if (stryMutAct_9fa48("3015")) {
        {}
      } else {
        stryCov_9fa48("3015");
        categories.forEach(category => {
          if (stryMutAct_9fa48("3016")) {
            {}
          } else {
            stryCov_9fa48("3016");
            if (stryMutAct_9fa48("3018") ? false : stryMutAct_9fa48("3017") ? true : (stryCov_9fa48("3017", "3018"), category)) {
              if (stryMutAct_9fa48("3019")) {
                {}
              } else {
                stryCov_9fa48("3019");
                category.posts = stryMutAct_9fa48("3022") ? topics.sort((a, b) => b.pid - a.pid).slice(0, parseInt(category.numRecentReplies, 10)) : stryMutAct_9fa48("3021") ? topics.filter(t => t.cid && (t.cid === category.cid || t.parentCids.includes(category.cid))).slice(0, parseInt(category.numRecentReplies, 10)) : stryMutAct_9fa48("3020") ? topics.filter(t => t.cid && (t.cid === category.cid || t.parentCids.includes(category.cid))).sort((a, b) => b.pid - a.pid) : (stryCov_9fa48("3020", "3021", "3022"), topics.filter(stryMutAct_9fa48("3023") ? () => undefined : (stryCov_9fa48("3023"), t => stryMutAct_9fa48("3026") ? t.cid || t.cid === category.cid || t.parentCids.includes(category.cid) : stryMutAct_9fa48("3025") ? false : stryMutAct_9fa48("3024") ? true : (stryCov_9fa48("3024", "3025", "3026"), t.cid && (stryMutAct_9fa48("3028") ? t.cid === category.cid && t.parentCids.includes(category.cid) : stryMutAct_9fa48("3027") ? true : (stryCov_9fa48("3027", "3028"), (stryMutAct_9fa48("3030") ? t.cid !== category.cid : stryMutAct_9fa48("3029") ? false : (stryCov_9fa48("3029", "3030"), t.cid === category.cid)) || t.parentCids.includes(category.cid)))))).sort(stryMutAct_9fa48("3031") ? () => undefined : (stryCov_9fa48("3031"), (a, b) => stryMutAct_9fa48("3032") ? b.pid + a.pid : (stryCov_9fa48("3032"), b.pid - a.pid))).slice(0, parseInt(category.numRecentReplies, 10)));
              }
            }
          }
        });
        topics.forEach(t => {
          if (stryMutAct_9fa48("3033")) {
            {}
          } else {
            stryCov_9fa48("3033");
            t.parentCids = undefined;
          }
        });
      }
    }
    function bubbleUpChildrenPosts(categoryData) {
      if (stryMutAct_9fa48("3034")) {
        {}
      } else {
        stryCov_9fa48("3034");
        categoryData.forEach(category => {
          if (stryMutAct_9fa48("3035")) {
            {}
          } else {
            stryCov_9fa48("3035");
            if (stryMutAct_9fa48("3037") ? false : stryMutAct_9fa48("3036") ? true : (stryCov_9fa48("3036", "3037"), category)) {
              if (stryMutAct_9fa48("3038")) {
                {}
              } else {
                stryCov_9fa48("3038");
                if (stryMutAct_9fa48("3040") ? false : stryMutAct_9fa48("3039") ? true : (stryCov_9fa48("3039", "3040"), category.posts.length)) {
                  if (stryMutAct_9fa48("3041")) {
                    {}
                  } else {
                    stryCov_9fa48("3041");
                    return;
                  }
                }
                const posts = stryMutAct_9fa48("3042") ? ["Stryker was here"] : (stryCov_9fa48("3042"), []);
                getPostsRecursive(category, posts);
                stryMutAct_9fa48("3043") ? posts : (stryCov_9fa48("3043"), posts.sort(stryMutAct_9fa48("3044") ? () => undefined : (stryCov_9fa48("3044"), (a, b) => stryMutAct_9fa48("3045") ? b.pid + a.pid : (stryCov_9fa48("3045"), b.pid - a.pid))));
                if (stryMutAct_9fa48("3047") ? false : stryMutAct_9fa48("3046") ? true : (stryCov_9fa48("3046", "3047"), posts.length)) {
                  if (stryMutAct_9fa48("3048")) {
                    {}
                  } else {
                    stryCov_9fa48("3048");
                    category.posts = stryMutAct_9fa48("3049") ? [] : (stryCov_9fa48("3049"), [posts[0]]);
                  }
                }
              }
            }
          }
        });
      }
    }
    function getPostsRecursive(category, posts) {
      if (stryMutAct_9fa48("3050")) {
        {}
      } else {
        stryCov_9fa48("3050");
        if (stryMutAct_9fa48("3052") ? false : stryMutAct_9fa48("3051") ? true : (stryCov_9fa48("3051", "3052"), Array.isArray(category.posts))) {
          if (stryMutAct_9fa48("3053")) {
            {}
          } else {
            stryCov_9fa48("3053");
            category.posts.forEach(stryMutAct_9fa48("3054") ? () => undefined : (stryCov_9fa48("3054"), p => posts.push(p)));
          }
        }
        category.children.forEach(stryMutAct_9fa48("3055") ? () => undefined : (stryCov_9fa48("3055"), child => getPostsRecursive(child, posts)));
      }
    }

    // terrible name, should be topics.moveTopicPosts
    Categories.moveRecentReplies = async function (tid, oldCid, cid) {
      if (stryMutAct_9fa48("3056")) {
        {}
      } else {
        stryCov_9fa48("3056");
        await updatePostCount(tid, oldCid, cid);
        const [pids, topicDeleted] = await Promise.all(stryMutAct_9fa48("3057") ? [] : (stryCov_9fa48("3057"), [topics.getPids(tid), topics.getTopicField(tid, stryMutAct_9fa48("3058") ? "" : (stryCov_9fa48("3058"), 'deleted'))]));
        await batch.processArray(pids, async pids => {
          if (stryMutAct_9fa48("3059")) {
            {}
          } else {
            stryCov_9fa48("3059");
            const postData = await posts.getPostsFields(pids, stryMutAct_9fa48("3060") ? [] : (stryCov_9fa48("3060"), [stryMutAct_9fa48("3061") ? "" : (stryCov_9fa48("3061"), 'pid'), stryMutAct_9fa48("3062") ? "" : (stryCov_9fa48("3062"), 'deleted'), stryMutAct_9fa48("3063") ? "" : (stryCov_9fa48("3063"), 'uid'), stryMutAct_9fa48("3064") ? "" : (stryCov_9fa48("3064"), 'timestamp'), stryMutAct_9fa48("3065") ? "" : (stryCov_9fa48("3065"), 'upvotes'), stryMutAct_9fa48("3066") ? "" : (stryCov_9fa48("3066"), 'downvotes')]));
            const bulkRemove = stryMutAct_9fa48("3067") ? ["Stryker was here"] : (stryCov_9fa48("3067"), []);
            const bulkAdd = stryMutAct_9fa48("3068") ? ["Stryker was here"] : (stryCov_9fa48("3068"), []);
            postData.forEach(post => {
              if (stryMutAct_9fa48("3069")) {
                {}
              } else {
                stryCov_9fa48("3069");
                bulkRemove.push(stryMutAct_9fa48("3070") ? [] : (stryCov_9fa48("3070"), [stryMutAct_9fa48("3071") ? `` : (stryCov_9fa48("3071"), `cid:${oldCid}:uid:${post.uid}:pids`), post.pid]));
                bulkRemove.push(stryMutAct_9fa48("3072") ? [] : (stryCov_9fa48("3072"), [stryMutAct_9fa48("3073") ? `` : (stryCov_9fa48("3073"), `cid:${oldCid}:uid:${post.uid}:pids:votes`), post.pid]));
                bulkAdd.push(stryMutAct_9fa48("3074") ? [] : (stryCov_9fa48("3074"), [stryMutAct_9fa48("3075") ? `` : (stryCov_9fa48("3075"), `cid:${cid}:uid:${post.uid}:pids`), post.timestamp, post.pid]));
                if (stryMutAct_9fa48("3078") ? post.votes > 0 && post.votes < 0 : stryMutAct_9fa48("3077") ? false : stryMutAct_9fa48("3076") ? true : (stryCov_9fa48("3076", "3077", "3078"), (stryMutAct_9fa48("3081") ? post.votes <= 0 : stryMutAct_9fa48("3080") ? post.votes >= 0 : stryMutAct_9fa48("3079") ? false : (stryCov_9fa48("3079", "3080", "3081"), post.votes > 0)) || (stryMutAct_9fa48("3084") ? post.votes >= 0 : stryMutAct_9fa48("3083") ? post.votes <= 0 : stryMutAct_9fa48("3082") ? false : (stryCov_9fa48("3082", "3083", "3084"), post.votes < 0)))) {
                  if (stryMutAct_9fa48("3085")) {
                    {}
                  } else {
                    stryCov_9fa48("3085");
                    bulkAdd.push(stryMutAct_9fa48("3086") ? [] : (stryCov_9fa48("3086"), [stryMutAct_9fa48("3087") ? `` : (stryCov_9fa48("3087"), `cid:${cid}:uid:${post.uid}:pids:votes`), post.votes, post.pid]));
                  }
                }
              }
            });
            const postsToReAdd = stryMutAct_9fa48("3088") ? postData : (stryCov_9fa48("3088"), postData.filter(stryMutAct_9fa48("3089") ? () => undefined : (stryCov_9fa48("3089"), p => stryMutAct_9fa48("3092") ? !p.deleted || !topicDeleted : stryMutAct_9fa48("3091") ? false : stryMutAct_9fa48("3090") ? true : (stryCov_9fa48("3090", "3091", "3092"), (stryMutAct_9fa48("3093") ? p.deleted : (stryCov_9fa48("3093"), !p.deleted)) && (stryMutAct_9fa48("3094") ? topicDeleted : (stryCov_9fa48("3094"), !topicDeleted))))));
            const timestamps = postsToReAdd.map(stryMutAct_9fa48("3095") ? () => undefined : (stryCov_9fa48("3095"), p => stryMutAct_9fa48("3098") ? p || p.timestamp : stryMutAct_9fa48("3097") ? false : stryMutAct_9fa48("3096") ? true : (stryCov_9fa48("3096", "3097", "3098"), p && p.timestamp)));
            await Promise.all(stryMutAct_9fa48("3099") ? [] : (stryCov_9fa48("3099"), [db.sortedSetRemove(stryMutAct_9fa48("3100") ? `` : (stryCov_9fa48("3100"), `cid:${oldCid}:pids`), pids), db.sortedSetAdd(stryMutAct_9fa48("3101") ? `` : (stryCov_9fa48("3101"), `cid:${cid}:pids`), timestamps, postsToReAdd.map(stryMutAct_9fa48("3102") ? () => undefined : (stryCov_9fa48("3102"), p => p.pid))), db.sortedSetRemoveBulk(bulkRemove), db.sortedSetAddBulk(bulkAdd)]));
          }
        }, stryMutAct_9fa48("3103") ? {} : (stryCov_9fa48("3103"), {
          batch: 500
        }));
      }
    };
    async function updatePostCount(tid, oldCid, newCid) {
      if (stryMutAct_9fa48("3104")) {
        {}
      } else {
        stryCov_9fa48("3104");
        const postCount = await topics.getTopicField(tid, stryMutAct_9fa48("3105") ? "" : (stryCov_9fa48("3105"), 'postcount'));
        if (stryMutAct_9fa48("3108") ? false : stryMutAct_9fa48("3107") ? true : stryMutAct_9fa48("3106") ? postCount : (stryCov_9fa48("3106", "3107", "3108"), !postCount)) {
          if (stryMutAct_9fa48("3109")) {
            {}
          } else {
            stryCov_9fa48("3109");
            return;
          }
        }
        await Promise.all(stryMutAct_9fa48("3110") ? [] : (stryCov_9fa48("3110"), [db.incrObjectFieldBy(stryMutAct_9fa48("3111") ? `` : (stryCov_9fa48("3111"), `category:${oldCid}`), stryMutAct_9fa48("3112") ? "" : (stryCov_9fa48("3112"), 'post_count'), stryMutAct_9fa48("3113") ? +postCount : (stryCov_9fa48("3113"), -postCount)), db.incrObjectFieldBy(stryMutAct_9fa48("3114") ? `` : (stryCov_9fa48("3114"), `category:${newCid}`), stryMutAct_9fa48("3115") ? "" : (stryCov_9fa48("3115"), 'post_count'), postCount)]));
      }
    }
  }
};