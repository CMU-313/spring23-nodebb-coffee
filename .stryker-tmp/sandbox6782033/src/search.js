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
const db = require('./database');
const posts = require('./posts');
const topics = require('./topics');
const categories = require('./categories');
const user = require('./user');
const plugins = require('./plugins');
const privileges = require('./privileges');
const utils = require('./utils');
const search = module.exports;
search.search = async function (data) {
  if (stryMutAct_9fa48("33934")) {
    {}
  } else {
    stryCov_9fa48("33934");
    const start = process.hrtime();
    data.sortBy = stryMutAct_9fa48("33937") ? data.sortBy && 'relevance' : stryMutAct_9fa48("33936") ? false : stryMutAct_9fa48("33935") ? true : (stryCov_9fa48("33935", "33936", "33937"), data.sortBy || (stryMutAct_9fa48("33938") ? "" : (stryCov_9fa48("33938"), 'relevance')));
    let result;
    if (stryMutAct_9fa48("33941") ? (data.searchIn === 'posts' || data.searchIn === 'titles') && data.searchIn === 'titlesposts' : stryMutAct_9fa48("33940") ? false : stryMutAct_9fa48("33939") ? true : (stryCov_9fa48("33939", "33940", "33941"), (stryMutAct_9fa48("33943") ? data.searchIn === 'posts' && data.searchIn === 'titles' : stryMutAct_9fa48("33942") ? false : (stryCov_9fa48("33942", "33943"), (stryMutAct_9fa48("33945") ? data.searchIn !== 'posts' : stryMutAct_9fa48("33944") ? false : (stryCov_9fa48("33944", "33945"), data.searchIn === (stryMutAct_9fa48("33946") ? "" : (stryCov_9fa48("33946"), 'posts')))) || (stryMutAct_9fa48("33948") ? data.searchIn !== 'titles' : stryMutAct_9fa48("33947") ? false : (stryCov_9fa48("33947", "33948"), data.searchIn === (stryMutAct_9fa48("33949") ? "" : (stryCov_9fa48("33949"), 'titles')))))) || (stryMutAct_9fa48("33951") ? data.searchIn !== 'titlesposts' : stryMutAct_9fa48("33950") ? false : (stryCov_9fa48("33950", "33951"), data.searchIn === (stryMutAct_9fa48("33952") ? "" : (stryCov_9fa48("33952"), 'titlesposts')))))) {
      if (stryMutAct_9fa48("33953")) {
        {}
      } else {
        stryCov_9fa48("33953");
        result = await searchInContent(data);
      }
    } else if (stryMutAct_9fa48("33956") ? data.searchIn !== 'users' : stryMutAct_9fa48("33955") ? false : stryMutAct_9fa48("33954") ? true : (stryCov_9fa48("33954", "33955", "33956"), data.searchIn === (stryMutAct_9fa48("33957") ? "" : (stryCov_9fa48("33957"), 'users')))) {
      if (stryMutAct_9fa48("33958")) {
        {}
      } else {
        stryCov_9fa48("33958");
        result = await user.search(data);
      }
    } else if (stryMutAct_9fa48("33961") ? data.searchIn !== 'categories' : stryMutAct_9fa48("33960") ? false : stryMutAct_9fa48("33959") ? true : (stryCov_9fa48("33959", "33960", "33961"), data.searchIn === (stryMutAct_9fa48("33962") ? "" : (stryCov_9fa48("33962"), 'categories')))) {
      if (stryMutAct_9fa48("33963")) {
        {}
      } else {
        stryCov_9fa48("33963");
        result = await categories.search(data);
      }
    } else if (stryMutAct_9fa48("33966") ? data.searchIn !== 'tags' : stryMutAct_9fa48("33965") ? false : stryMutAct_9fa48("33964") ? true : (stryCov_9fa48("33964", "33965", "33966"), data.searchIn === (stryMutAct_9fa48("33967") ? "" : (stryCov_9fa48("33967"), 'tags')))) {
      if (stryMutAct_9fa48("33968")) {
        {}
      } else {
        stryCov_9fa48("33968");
        result = await topics.searchAndLoadTags(data);
      }
    } else if (stryMutAct_9fa48("33970") ? false : stryMutAct_9fa48("33969") ? true : (stryCov_9fa48("33969", "33970"), data.searchIn)) {
      if (stryMutAct_9fa48("33971")) {
        {}
      } else {
        stryCov_9fa48("33971");
        result = await plugins.hooks.fire(stryMutAct_9fa48("33972") ? "" : (stryCov_9fa48("33972"), 'filter:search.searchIn'), stryMutAct_9fa48("33973") ? {} : (stryCov_9fa48("33973"), {
          data
        }));
      }
    } else {
      if (stryMutAct_9fa48("33974")) {
        {}
      } else {
        stryCov_9fa48("33974");
        throw new Error(stryMutAct_9fa48("33975") ? "" : (stryCov_9fa48("33975"), '[[error:unknown-search-filter]]'));
      }
    }
    result.time = (stryMutAct_9fa48("33976") ? process.elapsedTimeSince(start) * 1000 : (stryCov_9fa48("33976"), process.elapsedTimeSince(start) / 1000)).toFixed(2);
    return result;
  }
};
async function searchInContent(data) {
  if (stryMutAct_9fa48("33977")) {
    {}
  } else {
    stryCov_9fa48("33977");
    data.uid = stryMutAct_9fa48("33980") ? data.uid && 0 : stryMutAct_9fa48("33979") ? false : stryMutAct_9fa48("33978") ? true : (stryCov_9fa48("33978", "33979", "33980"), data.uid || 0);
    const [searchCids, searchUids] = await Promise.all(stryMutAct_9fa48("33981") ? [] : (stryCov_9fa48("33981"), [getSearchCids(data), getSearchUids(data)]));
    async function doSearch(type, searchIn) {
      if (stryMutAct_9fa48("33982")) {
        {}
      } else {
        stryCov_9fa48("33982");
        if (stryMutAct_9fa48("33984") ? false : stryMutAct_9fa48("33983") ? true : (stryCov_9fa48("33983", "33984"), searchIn.includes(data.searchIn))) {
          if (stryMutAct_9fa48("33985")) {
            {}
          } else {
            stryCov_9fa48("33985");
            const result = await plugins.hooks.fire(stryMutAct_9fa48("33986") ? "" : (stryCov_9fa48("33986"), 'filter:search.query'), stryMutAct_9fa48("33987") ? {} : (stryCov_9fa48("33987"), {
              index: type,
              content: data.query,
              matchWords: stryMutAct_9fa48("33990") ? data.matchWords && 'all' : stryMutAct_9fa48("33989") ? false : stryMutAct_9fa48("33988") ? true : (stryCov_9fa48("33988", "33989", "33990"), data.matchWords || (stryMutAct_9fa48("33991") ? "" : (stryCov_9fa48("33991"), 'all'))),
              cid: searchCids,
              uid: searchUids,
              searchData: data,
              ids: stryMutAct_9fa48("33992") ? ["Stryker was here"] : (stryCov_9fa48("33992"), [])
            }));
            return Array.isArray(result) ? result : result.ids;
          }
        }
        return stryMutAct_9fa48("33993") ? ["Stryker was here"] : (stryCov_9fa48("33993"), []);
      }
    }
    let pids = stryMutAct_9fa48("33994") ? ["Stryker was here"] : (stryCov_9fa48("33994"), []);
    let tids = stryMutAct_9fa48("33995") ? ["Stryker was here"] : (stryCov_9fa48("33995"), []);
    const inTopic = String(stryMutAct_9fa48("33998") ? data.query && '' : stryMutAct_9fa48("33997") ? false : stryMutAct_9fa48("33996") ? true : (stryCov_9fa48("33996", "33997", "33998"), data.query || (stryMutAct_9fa48("33999") ? "Stryker was here!" : (stryCov_9fa48("33999"), '')))).match(stryMutAct_9fa48("34003") ? /^in:topic-([\D]+) / : stryMutAct_9fa48("34002") ? /^in:topic-([^\d]+) / : stryMutAct_9fa48("34001") ? /^in:topic-([\d]) / : stryMutAct_9fa48("34000") ? /in:topic-([\d]+) / : (stryCov_9fa48("34000", "34001", "34002", "34003"), /^in:topic-([\d]+) /));
    if (stryMutAct_9fa48("34005") ? false : stryMutAct_9fa48("34004") ? true : (stryCov_9fa48("34004", "34005"), inTopic)) {
      if (stryMutAct_9fa48("34006")) {
        {}
      } else {
        stryCov_9fa48("34006");
        const tid = inTopic[1];
        const cleanedTerm = data.query.replace(inTopic[0], stryMutAct_9fa48("34007") ? "Stryker was here!" : (stryCov_9fa48("34007"), ''));
        pids = await topics.search(tid, cleanedTerm);
      }
    } else {
      if (stryMutAct_9fa48("34008")) {
        {}
      } else {
        stryCov_9fa48("34008");
        [pids, tids] = await Promise.all(stryMutAct_9fa48("34009") ? [] : (stryCov_9fa48("34009"), [doSearch(stryMutAct_9fa48("34010") ? "" : (stryCov_9fa48("34010"), 'post'), stryMutAct_9fa48("34011") ? [] : (stryCov_9fa48("34011"), [stryMutAct_9fa48("34012") ? "" : (stryCov_9fa48("34012"), 'posts'), stryMutAct_9fa48("34013") ? "" : (stryCov_9fa48("34013"), 'titlesposts')])), doSearch(stryMutAct_9fa48("34014") ? "" : (stryCov_9fa48("34014"), 'topic'), stryMutAct_9fa48("34015") ? [] : (stryCov_9fa48("34015"), [stryMutAct_9fa48("34016") ? "" : (stryCov_9fa48("34016"), 'titles'), stryMutAct_9fa48("34017") ? "" : (stryCov_9fa48("34017"), 'titlesposts')]))]));
      }
    }
    const mainPids = await topics.getMainPids(tids);
    let allPids = stryMutAct_9fa48("34018") ? mainPids.concat(pids) : (stryCov_9fa48("34018"), mainPids.concat(pids).filter(Boolean));
    allPids = await (stryMutAct_9fa48("34019") ? privileges.posts : (stryCov_9fa48("34019"), privileges.posts.filter(stryMutAct_9fa48("34020") ? "" : (stryCov_9fa48("34020"), 'topics:read'), allPids, data.uid)));
    allPids = await filterAndSort(allPids, data);
    const metadata = await plugins.hooks.fire(stryMutAct_9fa48("34021") ? "" : (stryCov_9fa48("34021"), 'filter:search.inContent'), stryMutAct_9fa48("34022") ? {} : (stryCov_9fa48("34022"), {
      pids: allPids,
      data: data
    }));
    if (stryMutAct_9fa48("34024") ? false : stryMutAct_9fa48("34023") ? true : (stryCov_9fa48("34023", "34024"), data.returnIds)) {
      if (stryMutAct_9fa48("34025")) {
        {}
      } else {
        stryCov_9fa48("34025");
        const mainPidsSet = new Set(mainPids);
        const mainPidToTid = _.zipObject(mainPids, tids);
        const pidsSet = new Set(pids);
        const returnPids = stryMutAct_9fa48("34026") ? allPids : (stryCov_9fa48("34026"), allPids.filter(stryMutAct_9fa48("34027") ? () => undefined : (stryCov_9fa48("34027"), pid => pidsSet.has(pid))));
        const returnTids = stryMutAct_9fa48("34028") ? allPids.map(pid => mainPidToTid[pid]) : (stryCov_9fa48("34028"), allPids.filter(stryMutAct_9fa48("34029") ? () => undefined : (stryCov_9fa48("34029"), pid => mainPidsSet.has(pid))).map(stryMutAct_9fa48("34030") ? () => undefined : (stryCov_9fa48("34030"), pid => mainPidToTid[pid])));
        return stryMutAct_9fa48("34031") ? {} : (stryCov_9fa48("34031"), {
          pids: returnPids,
          tids: returnTids
        });
      }
    }
    const itemsPerPage = Math.min(stryMutAct_9fa48("34034") ? data.itemsPerPage && 10 : stryMutAct_9fa48("34033") ? false : stryMutAct_9fa48("34032") ? true : (stryCov_9fa48("34032", "34033", "34034"), data.itemsPerPage || 10), 100);
    const returnData = stryMutAct_9fa48("34035") ? {} : (stryCov_9fa48("34035"), {
      posts: stryMutAct_9fa48("34036") ? ["Stryker was here"] : (stryCov_9fa48("34036"), []),
      matchCount: metadata.pids.length,
      pageCount: Math.max(1, Math.ceil(stryMutAct_9fa48("34037") ? parseInt(metadata.pids.length, 10) * itemsPerPage : (stryCov_9fa48("34037"), parseInt(metadata.pids.length, 10) / itemsPerPage)))
    });
    if (stryMutAct_9fa48("34039") ? false : stryMutAct_9fa48("34038") ? true : (stryCov_9fa48("34038", "34039"), data.page)) {
      if (stryMutAct_9fa48("34040")) {
        {}
      } else {
        stryCov_9fa48("34040");
        const start = stryMutAct_9fa48("34041") ? Math.max(0, data.page - 1) / itemsPerPage : (stryCov_9fa48("34041"), Math.max(0, stryMutAct_9fa48("34042") ? data.page + 1 : (stryCov_9fa48("34042"), data.page - 1)) * itemsPerPage);
        metadata.pids = stryMutAct_9fa48("34043") ? metadata.pids : (stryCov_9fa48("34043"), metadata.pids.slice(start, stryMutAct_9fa48("34044") ? start - itemsPerPage : (stryCov_9fa48("34044"), start + itemsPerPage)));
      }
    }
    returnData.posts = await posts.getPostSummaryByPids(metadata.pids, data.uid, {});
    await plugins.hooks.fire(stryMutAct_9fa48("34045") ? "" : (stryCov_9fa48("34045"), 'filter:search.contentGetResult'), stryMutAct_9fa48("34046") ? {} : (stryCov_9fa48("34046"), {
      result: returnData,
      data: data
    }));
    delete metadata.pids;
    delete metadata.data;
    return Object.assign(returnData, metadata);
  }
}
async function filterAndSort(pids, data) {
  if (stryMutAct_9fa48("34047")) {
    {}
  } else {
    stryCov_9fa48("34047");
    if (stryMutAct_9fa48("34050") ? data.sortBy === 'relevance' && !data.replies && !data.timeRange && !data.hasTags || !plugins.hooks.hasListeners('filter:search.filterAndSort') : stryMutAct_9fa48("34049") ? false : stryMutAct_9fa48("34048") ? true : (stryCov_9fa48("34048", "34049", "34050"), (stryMutAct_9fa48("34052") ? data.sortBy === 'relevance' && !data.replies && !data.timeRange || !data.hasTags : stryMutAct_9fa48("34051") ? true : (stryCov_9fa48("34051", "34052"), (stryMutAct_9fa48("34054") ? data.sortBy === 'relevance' && !data.replies || !data.timeRange : stryMutAct_9fa48("34053") ? true : (stryCov_9fa48("34053", "34054"), (stryMutAct_9fa48("34056") ? data.sortBy === 'relevance' || !data.replies : stryMutAct_9fa48("34055") ? true : (stryCov_9fa48("34055", "34056"), (stryMutAct_9fa48("34058") ? data.sortBy !== 'relevance' : stryMutAct_9fa48("34057") ? true : (stryCov_9fa48("34057", "34058"), data.sortBy === (stryMutAct_9fa48("34059") ? "" : (stryCov_9fa48("34059"), 'relevance')))) && (stryMutAct_9fa48("34060") ? data.replies : (stryCov_9fa48("34060"), !data.replies)))) && (stryMutAct_9fa48("34061") ? data.timeRange : (stryCov_9fa48("34061"), !data.timeRange)))) && (stryMutAct_9fa48("34062") ? data.hasTags : (stryCov_9fa48("34062"), !data.hasTags)))) && (stryMutAct_9fa48("34063") ? plugins.hooks.hasListeners('filter:search.filterAndSort') : (stryCov_9fa48("34063"), !plugins.hooks.hasListeners(stryMutAct_9fa48("34064") ? "" : (stryCov_9fa48("34064"), 'filter:search.filterAndSort')))))) {
      if (stryMutAct_9fa48("34065")) {
        {}
      } else {
        stryCov_9fa48("34065");
        return pids;
      }
    }
    let postsData = await getMatchedPosts(pids, data);
    if (stryMutAct_9fa48("34068") ? false : stryMutAct_9fa48("34067") ? true : stryMutAct_9fa48("34066") ? postsData.length : (stryCov_9fa48("34066", "34067", "34068"), !postsData.length)) {
      if (stryMutAct_9fa48("34069")) {
        {}
      } else {
        stryCov_9fa48("34069");
        return pids;
      }
    }
    postsData = stryMutAct_9fa48("34070") ? postsData : (stryCov_9fa48("34070"), postsData.filter(Boolean));
    postsData = filterByPostcount(postsData, data.replies, data.repliesFilter);
    postsData = filterByTimerange(postsData, data.timeRange, data.timeFilter);
    postsData = filterByTags(postsData, data.hasTags);
    sortPosts(postsData, data);
    const result = await plugins.hooks.fire(stryMutAct_9fa48("34071") ? "" : (stryCov_9fa48("34071"), 'filter:search.filterAndSort'), stryMutAct_9fa48("34072") ? {} : (stryCov_9fa48("34072"), {
      pids: pids,
      posts: postsData,
      data: data
    }));
    return result.posts.map(stryMutAct_9fa48("34073") ? () => undefined : (stryCov_9fa48("34073"), post => stryMutAct_9fa48("34076") ? post || post.pid : stryMutAct_9fa48("34075") ? false : stryMutAct_9fa48("34074") ? true : (stryCov_9fa48("34074", "34075", "34076"), post && post.pid)));
  }
}
async function getMatchedPosts(pids, data) {
  if (stryMutAct_9fa48("34077")) {
    {}
  } else {
    stryCov_9fa48("34077");
    const postFields = stryMutAct_9fa48("34078") ? [] : (stryCov_9fa48("34078"), [stryMutAct_9fa48("34079") ? "" : (stryCov_9fa48("34079"), 'pid'), stryMutAct_9fa48("34080") ? "" : (stryCov_9fa48("34080"), 'uid'), stryMutAct_9fa48("34081") ? "" : (stryCov_9fa48("34081"), 'tid'), stryMutAct_9fa48("34082") ? "" : (stryCov_9fa48("34082"), 'timestamp'), stryMutAct_9fa48("34083") ? "" : (stryCov_9fa48("34083"), 'deleted'), stryMutAct_9fa48("34084") ? "" : (stryCov_9fa48("34084"), 'upvotes'), stryMutAct_9fa48("34085") ? "" : (stryCov_9fa48("34085"), 'downvotes')]);
    let postsData = await posts.getPostsFields(pids, postFields);
    postsData = stryMutAct_9fa48("34086") ? postsData : (stryCov_9fa48("34086"), postsData.filter(stryMutAct_9fa48("34087") ? () => undefined : (stryCov_9fa48("34087"), post => stryMutAct_9fa48("34090") ? post || !post.deleted : stryMutAct_9fa48("34089") ? false : stryMutAct_9fa48("34088") ? true : (stryCov_9fa48("34088", "34089", "34090"), post && (stryMutAct_9fa48("34091") ? post.deleted : (stryCov_9fa48("34091"), !post.deleted))))));
    const uids = _.uniq(postsData.map(stryMutAct_9fa48("34092") ? () => undefined : (stryCov_9fa48("34092"), post => post.uid)));
    const tids = _.uniq(postsData.map(stryMutAct_9fa48("34093") ? () => undefined : (stryCov_9fa48("34093"), post => post.tid)));
    const [users, topics] = await Promise.all(stryMutAct_9fa48("34094") ? [] : (stryCov_9fa48("34094"), [getUsers(uids, data), getTopics(tids, data)]));
    const tidToTopic = _.zipObject(tids, topics);
    const uidToUser = _.zipObject(uids, users);
    postsData.forEach(post => {
      if (stryMutAct_9fa48("34095")) {
        {}
      } else {
        stryCov_9fa48("34095");
        if (stryMutAct_9fa48("34098") ? topics || tidToTopic[post.tid] : stryMutAct_9fa48("34097") ? false : stryMutAct_9fa48("34096") ? true : (stryCov_9fa48("34096", "34097", "34098"), topics && tidToTopic[post.tid])) {
          if (stryMutAct_9fa48("34099")) {
            {}
          } else {
            stryCov_9fa48("34099");
            post.topic = tidToTopic[post.tid];
            if (stryMutAct_9fa48("34102") ? post.topic || post.topic.category : stryMutAct_9fa48("34101") ? false : stryMutAct_9fa48("34100") ? true : (stryCov_9fa48("34100", "34101", "34102"), post.topic && post.topic.category)) {
              if (stryMutAct_9fa48("34103")) {
                {}
              } else {
                stryCov_9fa48("34103");
                post.category = post.topic.category;
              }
            }
          }
        }
        if (stryMutAct_9fa48("34105") ? false : stryMutAct_9fa48("34104") ? true : (stryCov_9fa48("34104", "34105"), uidToUser[post.uid])) {
          if (stryMutAct_9fa48("34106")) {
            {}
          } else {
            stryCov_9fa48("34106");
            post.user = uidToUser[post.uid];
          }
        }
      }
    });
    return stryMutAct_9fa48("34107") ? postsData : (stryCov_9fa48("34107"), postsData.filter(stryMutAct_9fa48("34108") ? () => undefined : (stryCov_9fa48("34108"), post => stryMutAct_9fa48("34111") ? post && post.topic || !post.topic.deleted : stryMutAct_9fa48("34110") ? false : stryMutAct_9fa48("34109") ? true : (stryCov_9fa48("34109", "34110", "34111"), (stryMutAct_9fa48("34113") ? post || post.topic : stryMutAct_9fa48("34112") ? true : (stryCov_9fa48("34112", "34113"), post && post.topic)) && (stryMutAct_9fa48("34114") ? post.topic.deleted : (stryCov_9fa48("34114"), !post.topic.deleted))))));
  }
}
async function getUsers(uids, data) {
  if (stryMutAct_9fa48("34115")) {
    {}
  } else {
    stryCov_9fa48("34115");
    if (stryMutAct_9fa48("34118") ? data.sortBy.endsWith('user') : stryMutAct_9fa48("34117") ? false : stryMutAct_9fa48("34116") ? true : (stryCov_9fa48("34116", "34117", "34118"), data.sortBy.startsWith(stryMutAct_9fa48("34119") ? "" : (stryCov_9fa48("34119"), 'user')))) {
      if (stryMutAct_9fa48("34120")) {
        {}
      } else {
        stryCov_9fa48("34120");
        return user.getUsersFields(uids, stryMutAct_9fa48("34121") ? [] : (stryCov_9fa48("34121"), [stryMutAct_9fa48("34122") ? "" : (stryCov_9fa48("34122"), 'username')]));
      }
    }
    return stryMutAct_9fa48("34123") ? ["Stryker was here"] : (stryCov_9fa48("34123"), []);
  }
}
async function getTopics(tids, data) {
  if (stryMutAct_9fa48("34124")) {
    {}
  } else {
    stryCov_9fa48("34124");
    const topicsData = await topics.getTopicsData(tids);
    const cids = _.uniq(topicsData.map(stryMutAct_9fa48("34125") ? () => undefined : (stryCov_9fa48("34125"), topic => stryMutAct_9fa48("34128") ? topic || topic.cid : stryMutAct_9fa48("34127") ? false : stryMutAct_9fa48("34126") ? true : (stryCov_9fa48("34126", "34127", "34128"), topic && topic.cid))));
    const categories = await getCategories(cids, data);
    const cidToCategory = _.zipObject(cids, categories);
    topicsData.forEach(topic => {
      if (stryMutAct_9fa48("34129")) {
        {}
      } else {
        stryCov_9fa48("34129");
        if (stryMutAct_9fa48("34132") ? topic && categories || cidToCategory[topic.cid] : stryMutAct_9fa48("34131") ? false : stryMutAct_9fa48("34130") ? true : (stryCov_9fa48("34130", "34131", "34132"), (stryMutAct_9fa48("34134") ? topic || categories : stryMutAct_9fa48("34133") ? true : (stryCov_9fa48("34133", "34134"), topic && categories)) && cidToCategory[topic.cid])) {
          if (stryMutAct_9fa48("34135")) {
            {}
          } else {
            stryCov_9fa48("34135");
            topic.category = cidToCategory[topic.cid];
          }
        }
        if (stryMutAct_9fa48("34138") ? topic || topic.tags : stryMutAct_9fa48("34137") ? false : stryMutAct_9fa48("34136") ? true : (stryCov_9fa48("34136", "34137", "34138"), topic && topic.tags)) {
          if (stryMutAct_9fa48("34139")) {
            {}
          } else {
            stryCov_9fa48("34139");
            topic.tags = topic.tags.map(stryMutAct_9fa48("34140") ? () => undefined : (stryCov_9fa48("34140"), tag => tag.value));
          }
        }
      }
    });
    return topicsData;
  }
}
async function getCategories(cids, data) {
  if (stryMutAct_9fa48("34141")) {
    {}
  } else {
    stryCov_9fa48("34141");
    const categoryFields = stryMutAct_9fa48("34142") ? ["Stryker was here"] : (stryCov_9fa48("34142"), []);
    if (stryMutAct_9fa48("34145") ? data.sortBy.endsWith('category.') : stryMutAct_9fa48("34144") ? false : stryMutAct_9fa48("34143") ? true : (stryCov_9fa48("34143", "34144", "34145"), data.sortBy.startsWith(stryMutAct_9fa48("34146") ? "" : (stryCov_9fa48("34146"), 'category.')))) {
      if (stryMutAct_9fa48("34147")) {
        {}
      } else {
        stryCov_9fa48("34147");
        categoryFields.push(data.sortBy.split(stryMutAct_9fa48("34148") ? "" : (stryCov_9fa48("34148"), '.'))[1]);
      }
    }
    if (stryMutAct_9fa48("34151") ? false : stryMutAct_9fa48("34150") ? true : stryMutAct_9fa48("34149") ? categoryFields.length : (stryCov_9fa48("34149", "34150", "34151"), !categoryFields.length)) {
      if (stryMutAct_9fa48("34152")) {
        {}
      } else {
        stryCov_9fa48("34152");
        return null;
      }
    }
    return await db.getObjectsFields(cids.map(stryMutAct_9fa48("34153") ? () => undefined : (stryCov_9fa48("34153"), cid => stryMutAct_9fa48("34154") ? `` : (stryCov_9fa48("34154"), `category:${cid}`))), categoryFields);
  }
}
function filterByPostcount(posts, postCount, repliesFilter) {
  if (stryMutAct_9fa48("34155")) {
    {}
  } else {
    stryCov_9fa48("34155");
    postCount = parseInt(postCount, 10);
    if (stryMutAct_9fa48("34157") ? false : stryMutAct_9fa48("34156") ? true : (stryCov_9fa48("34156", "34157"), postCount)) {
      if (stryMutAct_9fa48("34158")) {
        {}
      } else {
        stryCov_9fa48("34158");
        if (stryMutAct_9fa48("34161") ? repliesFilter !== 'atleast' : stryMutAct_9fa48("34160") ? false : stryMutAct_9fa48("34159") ? true : (stryCov_9fa48("34159", "34160", "34161"), repliesFilter === (stryMutAct_9fa48("34162") ? "" : (stryCov_9fa48("34162"), 'atleast')))) {
          if (stryMutAct_9fa48("34163")) {
            {}
          } else {
            stryCov_9fa48("34163");
            posts = stryMutAct_9fa48("34164") ? posts : (stryCov_9fa48("34164"), posts.filter(stryMutAct_9fa48("34165") ? () => undefined : (stryCov_9fa48("34165"), post => stryMutAct_9fa48("34168") ? post.topic || post.topic.postcount >= postCount : stryMutAct_9fa48("34167") ? false : stryMutAct_9fa48("34166") ? true : (stryCov_9fa48("34166", "34167", "34168"), post.topic && (stryMutAct_9fa48("34171") ? post.topic.postcount < postCount : stryMutAct_9fa48("34170") ? post.topic.postcount > postCount : stryMutAct_9fa48("34169") ? true : (stryCov_9fa48("34169", "34170", "34171"), post.topic.postcount >= postCount))))));
          }
        } else {
          if (stryMutAct_9fa48("34172")) {
            {}
          } else {
            stryCov_9fa48("34172");
            posts = stryMutAct_9fa48("34173") ? posts : (stryCov_9fa48("34173"), posts.filter(stryMutAct_9fa48("34174") ? () => undefined : (stryCov_9fa48("34174"), post => stryMutAct_9fa48("34177") ? post.topic || post.topic.postcount <= postCount : stryMutAct_9fa48("34176") ? false : stryMutAct_9fa48("34175") ? true : (stryCov_9fa48("34175", "34176", "34177"), post.topic && (stryMutAct_9fa48("34180") ? post.topic.postcount > postCount : stryMutAct_9fa48("34179") ? post.topic.postcount < postCount : stryMutAct_9fa48("34178") ? true : (stryCov_9fa48("34178", "34179", "34180"), post.topic.postcount <= postCount))))));
          }
        }
      }
    }
    return posts;
  }
}
function filterByTimerange(posts, timeRange, timeFilter) {
  if (stryMutAct_9fa48("34181")) {
    {}
  } else {
    stryCov_9fa48("34181");
    timeRange = stryMutAct_9fa48("34182") ? parseInt(timeRange, 10) / 1000 : (stryCov_9fa48("34182"), parseInt(timeRange, 10) * 1000);
    if (stryMutAct_9fa48("34184") ? false : stryMutAct_9fa48("34183") ? true : (stryCov_9fa48("34183", "34184"), timeRange)) {
      if (stryMutAct_9fa48("34185")) {
        {}
      } else {
        stryCov_9fa48("34185");
        const time = stryMutAct_9fa48("34186") ? Date.now() + timeRange : (stryCov_9fa48("34186"), Date.now() - timeRange);
        if (stryMutAct_9fa48("34189") ? timeFilter !== 'newer' : stryMutAct_9fa48("34188") ? false : stryMutAct_9fa48("34187") ? true : (stryCov_9fa48("34187", "34188", "34189"), timeFilter === (stryMutAct_9fa48("34190") ? "" : (stryCov_9fa48("34190"), 'newer')))) {
          if (stryMutAct_9fa48("34191")) {
            {}
          } else {
            stryCov_9fa48("34191");
            posts = stryMutAct_9fa48("34192") ? posts : (stryCov_9fa48("34192"), posts.filter(stryMutAct_9fa48("34193") ? () => undefined : (stryCov_9fa48("34193"), post => stryMutAct_9fa48("34197") ? post.timestamp < time : stryMutAct_9fa48("34196") ? post.timestamp > time : stryMutAct_9fa48("34195") ? false : stryMutAct_9fa48("34194") ? true : (stryCov_9fa48("34194", "34195", "34196", "34197"), post.timestamp >= time))));
          }
        } else {
          if (stryMutAct_9fa48("34198")) {
            {}
          } else {
            stryCov_9fa48("34198");
            posts = stryMutAct_9fa48("34199") ? posts : (stryCov_9fa48("34199"), posts.filter(stryMutAct_9fa48("34200") ? () => undefined : (stryCov_9fa48("34200"), post => stryMutAct_9fa48("34204") ? post.timestamp > time : stryMutAct_9fa48("34203") ? post.timestamp < time : stryMutAct_9fa48("34202") ? false : stryMutAct_9fa48("34201") ? true : (stryCov_9fa48("34201", "34202", "34203", "34204"), post.timestamp <= time))));
          }
        }
      }
    }
    return posts;
  }
}
function filterByTags(posts, hasTags) {
  if (stryMutAct_9fa48("34205")) {
    {}
  } else {
    stryCov_9fa48("34205");
    if (stryMutAct_9fa48("34208") ? Array.isArray(hasTags) || hasTags.length : stryMutAct_9fa48("34207") ? false : stryMutAct_9fa48("34206") ? true : (stryCov_9fa48("34206", "34207", "34208"), Array.isArray(hasTags) && hasTags.length)) {
      if (stryMutAct_9fa48("34209")) {
        {}
      } else {
        stryCov_9fa48("34209");
        posts = stryMutAct_9fa48("34210") ? posts : (stryCov_9fa48("34210"), posts.filter(post => {
          if (stryMutAct_9fa48("34211")) {
            {}
          } else {
            stryCov_9fa48("34211");
            let hasAllTags = stryMutAct_9fa48("34212") ? true : (stryCov_9fa48("34212"), false);
            if (stryMutAct_9fa48("34215") ? post && post.topic && Array.isArray(post.topic.tags) || post.topic.tags.length : stryMutAct_9fa48("34214") ? false : stryMutAct_9fa48("34213") ? true : (stryCov_9fa48("34213", "34214", "34215"), (stryMutAct_9fa48("34217") ? post && post.topic || Array.isArray(post.topic.tags) : stryMutAct_9fa48("34216") ? true : (stryCov_9fa48("34216", "34217"), (stryMutAct_9fa48("34219") ? post || post.topic : stryMutAct_9fa48("34218") ? true : (stryCov_9fa48("34218", "34219"), post && post.topic)) && Array.isArray(post.topic.tags))) && post.topic.tags.length)) {
              if (stryMutAct_9fa48("34220")) {
                {}
              } else {
                stryCov_9fa48("34220");
                hasAllTags = stryMutAct_9fa48("34221") ? hasTags.some(tag => post.topic.tags.includes(tag)) : (stryCov_9fa48("34221"), hasTags.every(stryMutAct_9fa48("34222") ? () => undefined : (stryCov_9fa48("34222"), tag => post.topic.tags.includes(tag))));
              }
            }
            return hasAllTags;
          }
        }));
      }
    }
    return posts;
  }
}
function sortPosts(posts, data) {
  if (stryMutAct_9fa48("34223")) {
    {}
  } else {
    stryCov_9fa48("34223");
    if (stryMutAct_9fa48("34226") ? !posts.length && data.sortBy === 'relevance' : stryMutAct_9fa48("34225") ? false : stryMutAct_9fa48("34224") ? true : (stryCov_9fa48("34224", "34225", "34226"), (stryMutAct_9fa48("34227") ? posts.length : (stryCov_9fa48("34227"), !posts.length)) || (stryMutAct_9fa48("34229") ? data.sortBy !== 'relevance' : stryMutAct_9fa48("34228") ? false : (stryCov_9fa48("34228", "34229"), data.sortBy === (stryMutAct_9fa48("34230") ? "" : (stryCov_9fa48("34230"), 'relevance')))))) {
      if (stryMutAct_9fa48("34231")) {
        {}
      } else {
        stryCov_9fa48("34231");
        return;
      }
    }
    data.sortDirection = stryMutAct_9fa48("34234") ? data.sortDirection && 'desc' : stryMutAct_9fa48("34233") ? false : stryMutAct_9fa48("34232") ? true : (stryCov_9fa48("34232", "34233", "34234"), data.sortDirection || (stryMutAct_9fa48("34235") ? "" : (stryCov_9fa48("34235"), 'desc')));
    const direction = (stryMutAct_9fa48("34238") ? data.sortDirection !== 'desc' : stryMutAct_9fa48("34237") ? false : stryMutAct_9fa48("34236") ? true : (stryCov_9fa48("34236", "34237", "34238"), data.sortDirection === (stryMutAct_9fa48("34239") ? "" : (stryCov_9fa48("34239"), 'desc')))) ? 1 : stryMutAct_9fa48("34240") ? +1 : (stryCov_9fa48("34240"), -1);
    const fields = data.sortBy.split(stryMutAct_9fa48("34241") ? "" : (stryCov_9fa48("34241"), '.'));
    if (stryMutAct_9fa48("34244") ? fields.length !== 1 : stryMutAct_9fa48("34243") ? false : stryMutAct_9fa48("34242") ? true : (stryCov_9fa48("34242", "34243", "34244"), fields.length === 1)) {
      if (stryMutAct_9fa48("34245")) {
        {}
      } else {
        stryCov_9fa48("34245");
        return stryMutAct_9fa48("34246") ? posts : (stryCov_9fa48("34246"), posts.sort(stryMutAct_9fa48("34247") ? () => undefined : (stryCov_9fa48("34247"), (p1, p2) => stryMutAct_9fa48("34248") ? direction / (p2[fields[0]] - p1[fields[0]]) : (stryCov_9fa48("34248"), direction * (stryMutAct_9fa48("34249") ? p2[fields[0]] + p1[fields[0]] : (stryCov_9fa48("34249"), p2[fields[0]] - p1[fields[0]]))))));
      }
    }
    const firstPost = posts[0];
    if (stryMutAct_9fa48("34252") ? (!fields || fields.length !== 2 || !firstPost[fields[0]]) && !firstPost[fields[0]][fields[1]] : stryMutAct_9fa48("34251") ? false : stryMutAct_9fa48("34250") ? true : (stryCov_9fa48("34250", "34251", "34252"), (stryMutAct_9fa48("34254") ? (!fields || fields.length !== 2) && !firstPost[fields[0]] : stryMutAct_9fa48("34253") ? false : (stryCov_9fa48("34253", "34254"), (stryMutAct_9fa48("34256") ? !fields && fields.length !== 2 : stryMutAct_9fa48("34255") ? false : (stryCov_9fa48("34255", "34256"), (stryMutAct_9fa48("34257") ? fields : (stryCov_9fa48("34257"), !fields)) || (stryMutAct_9fa48("34259") ? fields.length === 2 : stryMutAct_9fa48("34258") ? false : (stryCov_9fa48("34258", "34259"), fields.length !== 2)))) || (stryMutAct_9fa48("34260") ? firstPost[fields[0]] : (stryCov_9fa48("34260"), !firstPost[fields[0]])))) || (stryMutAct_9fa48("34261") ? firstPost[fields[0]][fields[1]] : (stryCov_9fa48("34261"), !firstPost[fields[0]][fields[1]])))) {
      if (stryMutAct_9fa48("34262")) {
        {}
      } else {
        stryCov_9fa48("34262");
        return;
      }
    }
    const isNumeric = utils.isNumber(firstPost[fields[0]][fields[1]]);
    if (stryMutAct_9fa48("34264") ? false : stryMutAct_9fa48("34263") ? true : (stryCov_9fa48("34263", "34264"), isNumeric)) {
      if (stryMutAct_9fa48("34265")) {
        {}
      } else {
        stryCov_9fa48("34265");
        stryMutAct_9fa48("34266") ? posts : (stryCov_9fa48("34266"), posts.sort(stryMutAct_9fa48("34267") ? () => undefined : (stryCov_9fa48("34267"), (p1, p2) => stryMutAct_9fa48("34268") ? direction / (p2[fields[0]][fields[1]] - p1[fields[0]][fields[1]]) : (stryCov_9fa48("34268"), direction * (stryMutAct_9fa48("34269") ? p2[fields[0]][fields[1]] + p1[fields[0]][fields[1]] : (stryCov_9fa48("34269"), p2[fields[0]][fields[1]] - p1[fields[0]][fields[1]]))))));
      }
    } else {
      if (stryMutAct_9fa48("34270")) {
        {}
      } else {
        stryCov_9fa48("34270");
        stryMutAct_9fa48("34271") ? posts : (stryCov_9fa48("34271"), posts.sort((p1, p2) => {
          if (stryMutAct_9fa48("34272")) {
            {}
          } else {
            stryCov_9fa48("34272");
            if (stryMutAct_9fa48("34276") ? p1[fields[0]][fields[1]] <= p2[fields[0]][fields[1]] : stryMutAct_9fa48("34275") ? p1[fields[0]][fields[1]] >= p2[fields[0]][fields[1]] : stryMutAct_9fa48("34274") ? false : stryMutAct_9fa48("34273") ? true : (stryCov_9fa48("34273", "34274", "34275", "34276"), p1[fields[0]][fields[1]] > p2[fields[0]][fields[1]])) {
              if (stryMutAct_9fa48("34277")) {
                {}
              } else {
                stryCov_9fa48("34277");
                return direction;
              }
            } else if (stryMutAct_9fa48("34281") ? p1[fields[0]][fields[1]] >= p2[fields[0]][fields[1]] : stryMutAct_9fa48("34280") ? p1[fields[0]][fields[1]] <= p2[fields[0]][fields[1]] : stryMutAct_9fa48("34279") ? false : stryMutAct_9fa48("34278") ? true : (stryCov_9fa48("34278", "34279", "34280", "34281"), p1[fields[0]][fields[1]] < p2[fields[0]][fields[1]])) {
              if (stryMutAct_9fa48("34282")) {
                {}
              } else {
                stryCov_9fa48("34282");
                return stryMutAct_9fa48("34283") ? +direction : (stryCov_9fa48("34283"), -direction);
              }
            }
            return 0;
          }
        }));
      }
    }
  }
}
async function getSearchCids(data) {
  if (stryMutAct_9fa48("34284")) {
    {}
  } else {
    stryCov_9fa48("34284");
    if (stryMutAct_9fa48("34287") ? !Array.isArray(data.categories) && !data.categories.length : stryMutAct_9fa48("34286") ? false : stryMutAct_9fa48("34285") ? true : (stryCov_9fa48("34285", "34286", "34287"), (stryMutAct_9fa48("34288") ? Array.isArray(data.categories) : (stryCov_9fa48("34288"), !Array.isArray(data.categories))) || (stryMutAct_9fa48("34289") ? data.categories.length : (stryCov_9fa48("34289"), !data.categories.length)))) {
      if (stryMutAct_9fa48("34290")) {
        {}
      } else {
        stryCov_9fa48("34290");
        return stryMutAct_9fa48("34291") ? ["Stryker was here"] : (stryCov_9fa48("34291"), []);
      }
    }
    if (stryMutAct_9fa48("34293") ? false : stryMutAct_9fa48("34292") ? true : (stryCov_9fa48("34292", "34293"), data.categories.includes(stryMutAct_9fa48("34294") ? "" : (stryCov_9fa48("34294"), 'all')))) {
      if (stryMutAct_9fa48("34295")) {
        {}
      } else {
        stryCov_9fa48("34295");
        return await categories.getCidsByPrivilege(stryMutAct_9fa48("34296") ? "" : (stryCov_9fa48("34296"), 'categories:cid'), data.uid, stryMutAct_9fa48("34297") ? "" : (stryCov_9fa48("34297"), 'read'));
      }
    }
    const [watchedCids, childrenCids] = await Promise.all(stryMutAct_9fa48("34298") ? [] : (stryCov_9fa48("34298"), [getWatchedCids(data), getChildrenCids(data)]));
    return _.uniq(stryMutAct_9fa48("34299") ? watchedCids.concat(childrenCids).concat(data.categories) : (stryCov_9fa48("34299"), watchedCids.concat(childrenCids).concat(data.categories).filter(Boolean)));
  }
}
async function getWatchedCids(data) {
  if (stryMutAct_9fa48("34300")) {
    {}
  } else {
    stryCov_9fa48("34300");
    if (stryMutAct_9fa48("34303") ? false : stryMutAct_9fa48("34302") ? true : stryMutAct_9fa48("34301") ? data.categories.includes('watched') : (stryCov_9fa48("34301", "34302", "34303"), !data.categories.includes(stryMutAct_9fa48("34304") ? "" : (stryCov_9fa48("34304"), 'watched')))) {
      if (stryMutAct_9fa48("34305")) {
        {}
      } else {
        stryCov_9fa48("34305");
        return stryMutAct_9fa48("34306") ? ["Stryker was here"] : (stryCov_9fa48("34306"), []);
      }
    }
    return await user.getWatchedCategories(data.uid);
  }
}
async function getChildrenCids(data) {
  if (stryMutAct_9fa48("34307")) {
    {}
  } else {
    stryCov_9fa48("34307");
    if (stryMutAct_9fa48("34310") ? false : stryMutAct_9fa48("34309") ? true : stryMutAct_9fa48("34308") ? data.searchChildren : (stryCov_9fa48("34308", "34309", "34310"), !data.searchChildren)) {
      if (stryMutAct_9fa48("34311")) {
        {}
      } else {
        stryCov_9fa48("34311");
        return stryMutAct_9fa48("34312") ? ["Stryker was here"] : (stryCov_9fa48("34312"), []);
      }
    }
    const childrenCids = await Promise.all(data.categories.map(stryMutAct_9fa48("34313") ? () => undefined : (stryCov_9fa48("34313"), cid => categories.getChildrenCids(cid))));
    return await privileges.categories.filterCids(stryMutAct_9fa48("34314") ? "" : (stryCov_9fa48("34314"), 'find'), _.uniq(_.flatten(childrenCids)), data.uid);
  }
}
async function getSearchUids(data) {
  if (stryMutAct_9fa48("34315")) {
    {}
  } else {
    stryCov_9fa48("34315");
    if (stryMutAct_9fa48("34318") ? false : stryMutAct_9fa48("34317") ? true : stryMutAct_9fa48("34316") ? data.postedBy : (stryCov_9fa48("34316", "34317", "34318"), !data.postedBy)) {
      if (stryMutAct_9fa48("34319")) {
        {}
      } else {
        stryCov_9fa48("34319");
        return stryMutAct_9fa48("34320") ? ["Stryker was here"] : (stryCov_9fa48("34320"), []);
      }
    }
    return await user.getUidsByUsernames(Array.isArray(data.postedBy) ? data.postedBy : stryMutAct_9fa48("34321") ? [] : (stryCov_9fa48("34321"), [data.postedBy]));
  }
}
require('./promisify')(search);