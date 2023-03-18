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
const _ = require('lodash');
const db = require('../database');
const user = require('../user');
const posts = require('../posts');
const notifications = require('../notifications');
const categories = require('../categories');
const privileges = require('../privileges');
const meta = require('../meta');
const utils = require('../utils');
const plugins = require('../plugins');
module.exports = function (Topics) {
  if (stryMutAct_9fa48("41229")) {
    {}
  } else {
    stryCov_9fa48("41229");
    Topics.getTotalUnread = async function (uid, filter) {
      if (stryMutAct_9fa48("41230")) {
        {}
      } else {
        stryCov_9fa48("41230");
        filter = stryMutAct_9fa48("41233") ? filter && '' : stryMutAct_9fa48("41232") ? false : stryMutAct_9fa48("41231") ? true : (stryCov_9fa48("41231", "41232", "41233"), filter || (stryMutAct_9fa48("41234") ? "Stryker was here!" : (stryCov_9fa48("41234"), '')));
        const counts = await Topics.getUnreadTids(stryMutAct_9fa48("41235") ? {} : (stryCov_9fa48("41235"), {
          cid: 0,
          uid: uid,
          count: stryMutAct_9fa48("41236") ? false : (stryCov_9fa48("41236"), true)
        }));
        return stryMutAct_9fa48("41239") ? counts || counts[filter] : stryMutAct_9fa48("41238") ? false : stryMutAct_9fa48("41237") ? true : (stryCov_9fa48("41237", "41238", "41239"), counts && counts[filter]);
      }
    };
    Topics.getUnreadTopics = async function (params) {
      if (stryMutAct_9fa48("41240")) {
        {}
      } else {
        stryCov_9fa48("41240");
        const unreadTopics = stryMutAct_9fa48("41241") ? {} : (stryCov_9fa48("41241"), {
          showSelect: stryMutAct_9fa48("41242") ? false : (stryCov_9fa48("41242"), true),
          nextStart: 0,
          topics: stryMutAct_9fa48("41243") ? ["Stryker was here"] : (stryCov_9fa48("41243"), [])
        });
        let tids = await Topics.getUnreadTids(params);
        unreadTopics.topicCount = tids.length;
        if (stryMutAct_9fa48("41246") ? false : stryMutAct_9fa48("41245") ? true : stryMutAct_9fa48("41244") ? tids.length : (stryCov_9fa48("41244", "41245", "41246"), !tids.length)) {
          if (stryMutAct_9fa48("41247")) {
            {}
          } else {
            stryCov_9fa48("41247");
            return unreadTopics;
          }
        }
        tids = stryMutAct_9fa48("41248") ? tids : (stryCov_9fa48("41248"), tids.slice(params.start, (stryMutAct_9fa48("41251") ? params.stop === -1 : stryMutAct_9fa48("41250") ? false : stryMutAct_9fa48("41249") ? true : (stryCov_9fa48("41249", "41250", "41251"), params.stop !== (stryMutAct_9fa48("41252") ? +1 : (stryCov_9fa48("41252"), -1)))) ? stryMutAct_9fa48("41253") ? params.stop - 1 : (stryCov_9fa48("41253"), params.stop + 1) : undefined));
        const topicData = await Topics.getTopicsByTids(tids, params.uid);
        if (stryMutAct_9fa48("41256") ? false : stryMutAct_9fa48("41255") ? true : stryMutAct_9fa48("41254") ? topicData.length : (stryCov_9fa48("41254", "41255", "41256"), !topicData.length)) {
          if (stryMutAct_9fa48("41257")) {
            {}
          } else {
            stryCov_9fa48("41257");
            return unreadTopics;
          }
        }
        Topics.calculateTopicIndices(topicData, params.start);
        unreadTopics.topics = topicData;
        unreadTopics.nextStart = stryMutAct_9fa48("41258") ? params.stop - 1 : (stryCov_9fa48("41258"), params.stop + 1);
        return unreadTopics;
      }
    };
    Topics.unreadCutoff = async function (uid) {
      if (stryMutAct_9fa48("41259")) {
        {}
      } else {
        stryCov_9fa48("41259");
        const cutoff = stryMutAct_9fa48("41260") ? Date.now() + meta.config.unreadCutoff * 86400000 : (stryCov_9fa48("41260"), Date.now() - (stryMutAct_9fa48("41261") ? meta.config.unreadCutoff / 86400000 : (stryCov_9fa48("41261"), meta.config.unreadCutoff * 86400000)));
        const data = await plugins.hooks.fire(stryMutAct_9fa48("41262") ? "" : (stryCov_9fa48("41262"), 'filter:topics.unreadCutoff'), stryMutAct_9fa48("41263") ? {} : (stryCov_9fa48("41263"), {
          uid: uid,
          cutoff: cutoff
        }));
        return parseInt(data.cutoff, 10);
      }
    };
    Topics.getUnreadTids = async function (params) {
      if (stryMutAct_9fa48("41264")) {
        {}
      } else {
        stryCov_9fa48("41264");
        const results = await Topics.getUnreadData(params);
        return params.count ? results.counts : results.tids;
      }
    };
    Topics.getUnreadData = async function (params) {
      if (stryMutAct_9fa48("41265")) {
        {}
      } else {
        stryCov_9fa48("41265");
        const uid = parseInt(params.uid, 10);
        params.filter = stryMutAct_9fa48("41268") ? params.filter && '' : stryMutAct_9fa48("41267") ? false : stryMutAct_9fa48("41266") ? true : (stryCov_9fa48("41266", "41267", "41268"), params.filter || (stryMutAct_9fa48("41269") ? "Stryker was here!" : (stryCov_9fa48("41269"), '')));
        if (stryMutAct_9fa48("41272") ? params.cid || !Array.isArray(params.cid) : stryMutAct_9fa48("41271") ? false : stryMutAct_9fa48("41270") ? true : (stryCov_9fa48("41270", "41271", "41272"), params.cid && (stryMutAct_9fa48("41273") ? Array.isArray(params.cid) : (stryCov_9fa48("41273"), !Array.isArray(params.cid))))) {
          if (stryMutAct_9fa48("41274")) {
            {}
          } else {
            stryCov_9fa48("41274");
            params.cid = stryMutAct_9fa48("41275") ? [] : (stryCov_9fa48("41275"), [params.cid]);
          }
        }
        const data = await getTids(params);
        if (stryMutAct_9fa48("41278") ? (uid <= 0 || !data.tids) && !data.tids.length : stryMutAct_9fa48("41277") ? false : stryMutAct_9fa48("41276") ? true : (stryCov_9fa48("41276", "41277", "41278"), (stryMutAct_9fa48("41280") ? uid <= 0 && !data.tids : stryMutAct_9fa48("41279") ? false : (stryCov_9fa48("41279", "41280"), (stryMutAct_9fa48("41283") ? uid > 0 : stryMutAct_9fa48("41282") ? uid < 0 : stryMutAct_9fa48("41281") ? false : (stryCov_9fa48("41281", "41282", "41283"), uid <= 0)) || (stryMutAct_9fa48("41284") ? data.tids : (stryCov_9fa48("41284"), !data.tids)))) || (stryMutAct_9fa48("41285") ? data.tids.length : (stryCov_9fa48("41285"), !data.tids.length)))) {
          if (stryMutAct_9fa48("41286")) {
            {}
          } else {
            stryCov_9fa48("41286");
            return data;
          }
        }
        const result = await plugins.hooks.fire(stryMutAct_9fa48("41287") ? "" : (stryCov_9fa48("41287"), 'filter:topics.getUnreadTids'), stryMutAct_9fa48("41288") ? {} : (stryCov_9fa48("41288"), {
          uid: uid,
          tids: data.tids,
          counts: data.counts,
          tidsByFilter: data.tidsByFilter,
          cid: params.cid,
          filter: params.filter,
          query: stryMutAct_9fa48("41291") ? params.query && {} : stryMutAct_9fa48("41290") ? false : stryMutAct_9fa48("41289") ? true : (stryCov_9fa48("41289", "41290", "41291"), params.query || {})
        }));
        return result;
      }
    };
    async function getTids(params) {
      if (stryMutAct_9fa48("41292")) {
        {}
      } else {
        stryCov_9fa48("41292");
        const counts = stryMutAct_9fa48("41293") ? {} : (stryCov_9fa48("41293"), {
          '': 0,
          new: 0,
          watched: 0,
          unreplied: 0
        });
        const tidsByFilter = stryMutAct_9fa48("41294") ? {} : (stryCov_9fa48("41294"), {
          '': stryMutAct_9fa48("41295") ? ["Stryker was here"] : (stryCov_9fa48("41295"), []),
          new: stryMutAct_9fa48("41296") ? ["Stryker was here"] : (stryCov_9fa48("41296"), []),
          watched: stryMutAct_9fa48("41297") ? ["Stryker was here"] : (stryCov_9fa48("41297"), []),
          unreplied: stryMutAct_9fa48("41298") ? ["Stryker was here"] : (stryCov_9fa48("41298"), [])
        });
        if (stryMutAct_9fa48("41302") ? params.uid > 0 : stryMutAct_9fa48("41301") ? params.uid < 0 : stryMutAct_9fa48("41300") ? false : stryMutAct_9fa48("41299") ? true : (stryCov_9fa48("41299", "41300", "41301", "41302"), params.uid <= 0)) {
          if (stryMutAct_9fa48("41303")) {
            {}
          } else {
            stryCov_9fa48("41303");
            return stryMutAct_9fa48("41304") ? {} : (stryCov_9fa48("41304"), {
              counts: counts,
              tids: stryMutAct_9fa48("41305") ? ["Stryker was here"] : (stryCov_9fa48("41305"), []),
              tidsByFilter: tidsByFilter
            });
          }
        }
        params.cutoff = await Topics.unreadCutoff(params.uid);
        const [followedTids, ignoredTids, categoryTids, userScores, tids_unread] = await Promise.all(stryMutAct_9fa48("41306") ? [] : (stryCov_9fa48("41306"), [getFollowedTids(params), user.getIgnoredTids(params.uid, 0, stryMutAct_9fa48("41307") ? +1 : (stryCov_9fa48("41307"), -1)), getCategoryTids(params), db.getSortedSetRevRangeByScoreWithScores(stryMutAct_9fa48("41308") ? `` : (stryCov_9fa48("41308"), `uid:${params.uid}:tids_read`), 0, stryMutAct_9fa48("41309") ? +1 : (stryCov_9fa48("41309"), -1), stryMutAct_9fa48("41310") ? "" : (stryCov_9fa48("41310"), '+inf'), params.cutoff), db.getSortedSetRevRangeWithScores(stryMutAct_9fa48("41311") ? `` : (stryCov_9fa48("41311"), `uid:${params.uid}:tids_unread`), 0, stryMutAct_9fa48("41312") ? +1 : (stryCov_9fa48("41312"), -1))]));
        const userReadTimes = _.mapValues(_.keyBy(userScores, stryMutAct_9fa48("41313") ? "" : (stryCov_9fa48("41313"), 'value')), stryMutAct_9fa48("41314") ? "" : (stryCov_9fa48("41314"), 'score'));
        const isTopicsFollowed = {};
        followedTids.forEach(t => {
          if (stryMutAct_9fa48("41315")) {
            {}
          } else {
            stryCov_9fa48("41315");
            isTopicsFollowed[t.value] = stryMutAct_9fa48("41316") ? false : (stryCov_9fa48("41316"), true);
          }
        });
        const unreadFollowed = await db.isSortedSetMembers(stryMutAct_9fa48("41317") ? `` : (stryCov_9fa48("41317"), `uid:${params.uid}:followed_tids`), tids_unread.map(stryMutAct_9fa48("41318") ? () => undefined : (stryCov_9fa48("41318"), t => t.value)));
        tids_unread.forEach((t, i) => {
          if (stryMutAct_9fa48("41319")) {
            {}
          } else {
            stryCov_9fa48("41319");
            isTopicsFollowed[t.value] = unreadFollowed[i];
          }
        });
        const unreadTopics = stryMutAct_9fa48("41321") ? _.unionWith(categoryTids, followedTids, (a, b) => a.value === b.value).concat(tids_unread.filter(t => !ignoredTids.includes(t.value))).sort((a, b) => b.score - a.score) : stryMutAct_9fa48("41320") ? _.unionWith(categoryTids, followedTids, (a, b) => a.value === b.value).filter(t => !ignoredTids.includes(t.value) && (!userReadTimes[t.value] || t.score > userReadTimes[t.value])).concat(tids_unread.filter(t => !ignoredTids.includes(t.value))) : (stryCov_9fa48("41320", "41321"), _.unionWith(categoryTids, followedTids, stryMutAct_9fa48("41322") ? () => undefined : (stryCov_9fa48("41322"), (a, b) => stryMutAct_9fa48("41325") ? a.value !== b.value : stryMutAct_9fa48("41324") ? false : stryMutAct_9fa48("41323") ? true : (stryCov_9fa48("41323", "41324", "41325"), a.value === b.value))).filter(stryMutAct_9fa48("41326") ? () => undefined : (stryCov_9fa48("41326"), t => stryMutAct_9fa48("41329") ? !ignoredTids.includes(t.value) || !userReadTimes[t.value] || t.score > userReadTimes[t.value] : stryMutAct_9fa48("41328") ? false : stryMutAct_9fa48("41327") ? true : (stryCov_9fa48("41327", "41328", "41329"), (stryMutAct_9fa48("41330") ? ignoredTids.includes(t.value) : (stryCov_9fa48("41330"), !ignoredTids.includes(t.value))) && (stryMutAct_9fa48("41332") ? !userReadTimes[t.value] && t.score > userReadTimes[t.value] : stryMutAct_9fa48("41331") ? true : (stryCov_9fa48("41331", "41332"), (stryMutAct_9fa48("41333") ? userReadTimes[t.value] : (stryCov_9fa48("41333"), !userReadTimes[t.value])) || (stryMutAct_9fa48("41336") ? t.score <= userReadTimes[t.value] : stryMutAct_9fa48("41335") ? t.score >= userReadTimes[t.value] : stryMutAct_9fa48("41334") ? false : (stryCov_9fa48("41334", "41335", "41336"), t.score > userReadTimes[t.value]))))))).concat(stryMutAct_9fa48("41337") ? tids_unread : (stryCov_9fa48("41337"), tids_unread.filter(stryMutAct_9fa48("41338") ? () => undefined : (stryCov_9fa48("41338"), t => stryMutAct_9fa48("41339") ? ignoredTids.includes(t.value) : (stryCov_9fa48("41339"), !ignoredTids.includes(t.value)))))).sort(stryMutAct_9fa48("41340") ? () => undefined : (stryCov_9fa48("41340"), (a, b) => stryMutAct_9fa48("41341") ? b.score + a.score : (stryCov_9fa48("41341"), b.score - a.score))));
        let tids = stryMutAct_9fa48("41342") ? _.uniq(unreadTopics.map(topic => topic.value)) : (stryCov_9fa48("41342"), _.uniq(unreadTopics.map(stryMutAct_9fa48("41343") ? () => undefined : (stryCov_9fa48("41343"), topic => topic.value))).slice(0, 200));
        if (stryMutAct_9fa48("41346") ? false : stryMutAct_9fa48("41345") ? true : stryMutAct_9fa48("41344") ? tids.length : (stryCov_9fa48("41344", "41345", "41346"), !tids.length)) {
          if (stryMutAct_9fa48("41347")) {
            {}
          } else {
            stryCov_9fa48("41347");
            return stryMutAct_9fa48("41348") ? {} : (stryCov_9fa48("41348"), {
              counts: counts,
              tids: tids,
              tidsByFilter: tidsByFilter
            });
          }
        }
        const blockedUids = await user.blocks.list(params.uid);
        tids = await filterTidsThatHaveBlockedPosts(stryMutAct_9fa48("41349") ? {} : (stryCov_9fa48("41349"), {
          uid: params.uid,
          tids: tids,
          blockedUids: blockedUids,
          recentTids: categoryTids
        }));
        tids = await privileges.topics.filterTids(stryMutAct_9fa48("41350") ? "" : (stryCov_9fa48("41350"), 'topics:read'), tids, params.uid);
        const topicData = stryMutAct_9fa48("41351") ? await Topics.getTopicsFields(tids, ['tid', 'cid', 'uid', 'postcount', 'deleted', 'scheduled']) : (stryCov_9fa48("41351"), (await Topics.getTopicsFields(tids, stryMutAct_9fa48("41352") ? [] : (stryCov_9fa48("41352"), [stryMutAct_9fa48("41353") ? "" : (stryCov_9fa48("41353"), 'tid'), stryMutAct_9fa48("41354") ? "" : (stryCov_9fa48("41354"), 'cid'), stryMutAct_9fa48("41355") ? "" : (stryCov_9fa48("41355"), 'uid'), stryMutAct_9fa48("41356") ? "" : (stryCov_9fa48("41356"), 'postcount'), stryMutAct_9fa48("41357") ? "" : (stryCov_9fa48("41357"), 'deleted'), stryMutAct_9fa48("41358") ? "" : (stryCov_9fa48("41358"), 'scheduled')]))).filter(stryMutAct_9fa48("41359") ? () => undefined : (stryCov_9fa48("41359"), t => stryMutAct_9fa48("41362") ? t.scheduled && !t.deleted : stryMutAct_9fa48("41361") ? false : stryMutAct_9fa48("41360") ? true : (stryCov_9fa48("41360", "41361", "41362"), t.scheduled || (stryMutAct_9fa48("41363") ? t.deleted : (stryCov_9fa48("41363"), !t.deleted))))));
        const topicCids = stryMutAct_9fa48("41364") ? _.uniq(topicData.map(topic => topic.cid)) : (stryCov_9fa48("41364"), _.uniq(topicData.map(stryMutAct_9fa48("41365") ? () => undefined : (stryCov_9fa48("41365"), topic => topic.cid))).filter(Boolean));
        const categoryWatchState = await categories.getWatchState(topicCids, params.uid);
        const userCidState = _.zipObject(topicCids, categoryWatchState);
        const filterCids = stryMutAct_9fa48("41368") ? params.cid || params.cid.map(cid => parseInt(cid, 10)) : stryMutAct_9fa48("41367") ? false : stryMutAct_9fa48("41366") ? true : (stryCov_9fa48("41366", "41367", "41368"), params.cid && params.cid.map(stryMutAct_9fa48("41369") ? () => undefined : (stryCov_9fa48("41369"), cid => parseInt(cid, 10))));
        topicData.forEach(topic => {
          if (stryMutAct_9fa48("41370")) {
            {}
          } else {
            stryCov_9fa48("41370");
            if (stryMutAct_9fa48("41373") ? topic && topic.cid && (!filterCids || filterCids.includes(topic.cid)) || !blockedUids.includes(topic.uid) : stryMutAct_9fa48("41372") ? false : stryMutAct_9fa48("41371") ? true : (stryCov_9fa48("41371", "41372", "41373"), (stryMutAct_9fa48("41375") ? topic && topic.cid || !filterCids || filterCids.includes(topic.cid) : stryMutAct_9fa48("41374") ? true : (stryCov_9fa48("41374", "41375"), (stryMutAct_9fa48("41377") ? topic || topic.cid : stryMutAct_9fa48("41376") ? true : (stryCov_9fa48("41376", "41377"), topic && topic.cid)) && (stryMutAct_9fa48("41379") ? !filterCids && filterCids.includes(topic.cid) : stryMutAct_9fa48("41378") ? true : (stryCov_9fa48("41378", "41379"), (stryMutAct_9fa48("41380") ? filterCids : (stryCov_9fa48("41380"), !filterCids)) || filterCids.includes(topic.cid))))) && (stryMutAct_9fa48("41381") ? blockedUids.includes(topic.uid) : (stryCov_9fa48("41381"), !blockedUids.includes(topic.uid))))) {
              if (stryMutAct_9fa48("41382")) {
                {}
              } else {
                stryCov_9fa48("41382");
                if (stryMutAct_9fa48("41385") ? isTopicsFollowed[topic.tid] && userCidState[topic.cid] === categories.watchStates.watching : stryMutAct_9fa48("41384") ? false : stryMutAct_9fa48("41383") ? true : (stryCov_9fa48("41383", "41384", "41385"), isTopicsFollowed[topic.tid] || (stryMutAct_9fa48("41387") ? userCidState[topic.cid] !== categories.watchStates.watching : stryMutAct_9fa48("41386") ? false : (stryCov_9fa48("41386", "41387"), userCidState[topic.cid] === categories.watchStates.watching)))) {
                  if (stryMutAct_9fa48("41388")) {
                    {}
                  } else {
                    stryCov_9fa48("41388");
                    tidsByFilter[stryMutAct_9fa48("41389") ? "Stryker was here!" : (stryCov_9fa48("41389"), '')].push(topic.tid);
                  }
                }
                if (stryMutAct_9fa48("41391") ? false : stryMutAct_9fa48("41390") ? true : (stryCov_9fa48("41390", "41391"), isTopicsFollowed[topic.tid])) {
                  if (stryMutAct_9fa48("41392")) {
                    {}
                  } else {
                    stryCov_9fa48("41392");
                    tidsByFilter.watched.push(topic.tid);
                  }
                }
                if (stryMutAct_9fa48("41396") ? topic.postcount > 1 : stryMutAct_9fa48("41395") ? topic.postcount < 1 : stryMutAct_9fa48("41394") ? false : stryMutAct_9fa48("41393") ? true : (stryCov_9fa48("41393", "41394", "41395", "41396"), topic.postcount <= 1)) {
                  if (stryMutAct_9fa48("41397")) {
                    {}
                  } else {
                    stryCov_9fa48("41397");
                    tidsByFilter.unreplied.push(topic.tid);
                  }
                }
                if (stryMutAct_9fa48("41400") ? false : stryMutAct_9fa48("41399") ? true : stryMutAct_9fa48("41398") ? userReadTimes[topic.tid] : (stryCov_9fa48("41398", "41399", "41400"), !userReadTimes[topic.tid])) {
                  if (stryMutAct_9fa48("41401")) {
                    {}
                  } else {
                    stryCov_9fa48("41401");
                    tidsByFilter.new.push(topic.tid);
                  }
                }
              }
            }
          }
        });
        counts[stryMutAct_9fa48("41402") ? "Stryker was here!" : (stryCov_9fa48("41402"), '')] = tidsByFilter[stryMutAct_9fa48("41403") ? "Stryker was here!" : (stryCov_9fa48("41403"), '')].length;
        counts.watched = tidsByFilter.watched.length;
        counts.unreplied = tidsByFilter.unreplied.length;
        counts.new = tidsByFilter.new.length;
        return stryMutAct_9fa48("41404") ? {} : (stryCov_9fa48("41404"), {
          counts: counts,
          tids: tidsByFilter[params.filter],
          tidsByFilter: tidsByFilter
        });
      }
    }
    async function getCategoryTids(params) {
      if (stryMutAct_9fa48("41405")) {
        {}
      } else {
        stryCov_9fa48("41405");
        if (stryMutAct_9fa48("41407") ? false : stryMutAct_9fa48("41406") ? true : (stryCov_9fa48("41406", "41407"), plugins.hooks.hasListeners(stryMutAct_9fa48("41408") ? "" : (stryCov_9fa48("41408"), 'filter:topics.unread.getCategoryTids')))) {
          if (stryMutAct_9fa48("41409")) {
            {}
          } else {
            stryCov_9fa48("41409");
            const result = await plugins.hooks.fire(stryMutAct_9fa48("41410") ? "" : (stryCov_9fa48("41410"), 'filter:topics.unread.getCategoryTids'), stryMutAct_9fa48("41411") ? {} : (stryCov_9fa48("41411"), {
              params: params,
              tids: stryMutAct_9fa48("41412") ? ["Stryker was here"] : (stryCov_9fa48("41412"), [])
            }));
            return result.tids;
          }
        }
        if (stryMutAct_9fa48("41415") ? params.filter !== 'watched' : stryMutAct_9fa48("41414") ? false : stryMutAct_9fa48("41413") ? true : (stryCov_9fa48("41413", "41414", "41415"), params.filter === (stryMutAct_9fa48("41416") ? "" : (stryCov_9fa48("41416"), 'watched')))) {
          if (stryMutAct_9fa48("41417")) {
            {}
          } else {
            stryCov_9fa48("41417");
            return stryMutAct_9fa48("41418") ? ["Stryker was here"] : (stryCov_9fa48("41418"), []);
          }
        }
        const cids = stryMutAct_9fa48("41421") ? params.cid && (await user.getWatchedCategories(params.uid)) : stryMutAct_9fa48("41420") ? false : stryMutAct_9fa48("41419") ? true : (stryCov_9fa48("41419", "41420", "41421"), params.cid || (await user.getWatchedCategories(params.uid)));
        const keys = cids.map(stryMutAct_9fa48("41422") ? () => undefined : (stryCov_9fa48("41422"), cid => stryMutAct_9fa48("41423") ? `` : (stryCov_9fa48("41423"), `cid:${cid}:tids:lastposttime`)));
        return await db.getSortedSetRevRangeByScoreWithScores(keys, 0, stryMutAct_9fa48("41424") ? +1 : (stryCov_9fa48("41424"), -1), stryMutAct_9fa48("41425") ? "" : (stryCov_9fa48("41425"), '+inf'), params.cutoff);
      }
    }
    async function getFollowedTids(params) {
      if (stryMutAct_9fa48("41426")) {
        {}
      } else {
        stryCov_9fa48("41426");
        let tids = await db.getSortedSetMembers(stryMutAct_9fa48("41427") ? `` : (stryCov_9fa48("41427"), `uid:${params.uid}:followed_tids`));
        const filterCids = stryMutAct_9fa48("41430") ? params.cid || params.cid.map(cid => parseInt(cid, 10)) : stryMutAct_9fa48("41429") ? false : stryMutAct_9fa48("41428") ? true : (stryCov_9fa48("41428", "41429", "41430"), params.cid && params.cid.map(stryMutAct_9fa48("41431") ? () => undefined : (stryCov_9fa48("41431"), cid => parseInt(cid, 10))));
        if (stryMutAct_9fa48("41433") ? false : stryMutAct_9fa48("41432") ? true : (stryCov_9fa48("41432", "41433"), filterCids)) {
          if (stryMutAct_9fa48("41434")) {
            {}
          } else {
            stryCov_9fa48("41434");
            const topicData = await Topics.getTopicsFields(tids, stryMutAct_9fa48("41435") ? [] : (stryCov_9fa48("41435"), [stryMutAct_9fa48("41436") ? "" : (stryCov_9fa48("41436"), 'tid'), stryMutAct_9fa48("41437") ? "" : (stryCov_9fa48("41437"), 'cid')]));
            tids = stryMutAct_9fa48("41438") ? topicData.map(t => t.tid) : (stryCov_9fa48("41438"), topicData.filter(stryMutAct_9fa48("41439") ? () => undefined : (stryCov_9fa48("41439"), t => filterCids.includes(t.cid))).map(stryMutAct_9fa48("41440") ? () => undefined : (stryCov_9fa48("41440"), t => t.tid)));
          }
        }
        const scores = await db.sortedSetScores(stryMutAct_9fa48("41441") ? "" : (stryCov_9fa48("41441"), 'topics:recent'), tids);
        const data = tids.map(stryMutAct_9fa48("41442") ? () => undefined : (stryCov_9fa48("41442"), (tid, index) => stryMutAct_9fa48("41443") ? {} : (stryCov_9fa48("41443"), {
          value: String(tid),
          score: scores[index]
        })));
        return stryMutAct_9fa48("41444") ? data : (stryCov_9fa48("41444"), data.filter(stryMutAct_9fa48("41445") ? () => undefined : (stryCov_9fa48("41445"), item => stryMutAct_9fa48("41449") ? item.score <= params.cutoff : stryMutAct_9fa48("41448") ? item.score >= params.cutoff : stryMutAct_9fa48("41447") ? false : stryMutAct_9fa48("41446") ? true : (stryCov_9fa48("41446", "41447", "41448", "41449"), item.score > params.cutoff))));
      }
    }
    async function filterTidsThatHaveBlockedPosts(params) {
      if (stryMutAct_9fa48("41450")) {
        {}
      } else {
        stryCov_9fa48("41450");
        if (stryMutAct_9fa48("41453") ? false : stryMutAct_9fa48("41452") ? true : stryMutAct_9fa48("41451") ? params.blockedUids.length : (stryCov_9fa48("41451", "41452", "41453"), !params.blockedUids.length)) {
          if (stryMutAct_9fa48("41454")) {
            {}
          } else {
            stryCov_9fa48("41454");
            return params.tids;
          }
        }
        const topicScores = _.mapValues(_.keyBy(params.recentTids, stryMutAct_9fa48("41455") ? "" : (stryCov_9fa48("41455"), 'value')), stryMutAct_9fa48("41456") ? "" : (stryCov_9fa48("41456"), 'score'));
        const results = await db.sortedSetScores(stryMutAct_9fa48("41457") ? `` : (stryCov_9fa48("41457"), `uid:${params.uid}:tids_read`), params.tids);
        const userScores = _.zipObject(params.tids, results);
        return await (stryMutAct_9fa48("41458") ? async : (stryCov_9fa48("41458"), async.filter(params.tids, stryMutAct_9fa48("41459") ? () => undefined : (stryCov_9fa48("41459"), async tid => await doesTidHaveUnblockedUnreadPosts(tid, stryMutAct_9fa48("41460") ? {} : (stryCov_9fa48("41460"), {
          blockedUids: params.blockedUids,
          topicTimestamp: topicScores[tid],
          userLastReadTimestamp: userScores[tid]
        }))))));
      }
    }
    async function doesTidHaveUnblockedUnreadPosts(tid, params) {
      if (stryMutAct_9fa48("41461")) {
        {}
      } else {
        stryCov_9fa48("41461");
        const {
          userLastReadTimestamp
        } = params;
        if (stryMutAct_9fa48("41464") ? false : stryMutAct_9fa48("41463") ? true : stryMutAct_9fa48("41462") ? userLastReadTimestamp : (stryCov_9fa48("41462", "41463", "41464"), !userLastReadTimestamp)) {
          if (stryMutAct_9fa48("41465")) {
            {}
          } else {
            stryCov_9fa48("41465");
            return stryMutAct_9fa48("41466") ? false : (stryCov_9fa48("41466"), true);
          }
        }
        let start = 0;
        const count = 3;
        let done = stryMutAct_9fa48("41467") ? true : (stryCov_9fa48("41467"), false);
        let hasUnblockedUnread = stryMutAct_9fa48("41471") ? params.topicTimestamp <= userLastReadTimestamp : stryMutAct_9fa48("41470") ? params.topicTimestamp >= userLastReadTimestamp : stryMutAct_9fa48("41469") ? false : stryMutAct_9fa48("41468") ? true : (stryCov_9fa48("41468", "41469", "41470", "41471"), params.topicTimestamp > userLastReadTimestamp);
        if (stryMutAct_9fa48("41474") ? false : stryMutAct_9fa48("41473") ? true : stryMutAct_9fa48("41472") ? params.blockedUids.length : (stryCov_9fa48("41472", "41473", "41474"), !params.blockedUids.length)) {
          if (stryMutAct_9fa48("41475")) {
            {}
          } else {
            stryCov_9fa48("41475");
            return hasUnblockedUnread;
          }
        }
        while (stryMutAct_9fa48("41477") ? false : stryMutAct_9fa48("41476") ? done : (stryCov_9fa48("41476", "41477"), !done)) {
          if (stryMutAct_9fa48("41478")) {
            {}
          } else {
            stryCov_9fa48("41478");
            /* eslint-disable no-await-in-loop */
            const pidsSinceLastVisit = await db.getSortedSetRangeByScore(stryMutAct_9fa48("41479") ? `` : (stryCov_9fa48("41479"), `tid:${tid}:posts`), start, count, userLastReadTimestamp, stryMutAct_9fa48("41480") ? "" : (stryCov_9fa48("41480"), '+inf'));
            if (stryMutAct_9fa48("41483") ? false : stryMutAct_9fa48("41482") ? true : stryMutAct_9fa48("41481") ? pidsSinceLastVisit.length : (stryCov_9fa48("41481", "41482", "41483"), !pidsSinceLastVisit.length)) {
              if (stryMutAct_9fa48("41484")) {
                {}
              } else {
                stryCov_9fa48("41484");
                return hasUnblockedUnread;
              }
            }
            let postData = await posts.getPostsFields(pidsSinceLastVisit, stryMutAct_9fa48("41485") ? [] : (stryCov_9fa48("41485"), [stryMutAct_9fa48("41486") ? "" : (stryCov_9fa48("41486"), 'pid'), stryMutAct_9fa48("41487") ? "" : (stryCov_9fa48("41487"), 'uid')]));
            postData = stryMutAct_9fa48("41488") ? postData : (stryCov_9fa48("41488"), postData.filter(stryMutAct_9fa48("41489") ? () => undefined : (stryCov_9fa48("41489"), post => stryMutAct_9fa48("41490") ? params.blockedUids.includes(parseInt(post.uid, 10)) : (stryCov_9fa48("41490"), !params.blockedUids.includes(parseInt(post.uid, 10))))));
            done = stryMutAct_9fa48("41494") ? postData.length <= 0 : stryMutAct_9fa48("41493") ? postData.length >= 0 : stryMutAct_9fa48("41492") ? false : stryMutAct_9fa48("41491") ? true : (stryCov_9fa48("41491", "41492", "41493", "41494"), postData.length > 0);
            hasUnblockedUnread = stryMutAct_9fa48("41498") ? postData.length <= 0 : stryMutAct_9fa48("41497") ? postData.length >= 0 : stryMutAct_9fa48("41496") ? false : stryMutAct_9fa48("41495") ? true : (stryCov_9fa48("41495", "41496", "41497", "41498"), postData.length > 0);
            stryMutAct_9fa48("41499") ? start -= count : (stryCov_9fa48("41499"), start += count);
          }
        }
        return hasUnblockedUnread;
      }
    }
    Topics.pushUnreadCount = async function (uid) {
      if (stryMutAct_9fa48("41500")) {
        {}
      } else {
        stryCov_9fa48("41500");
        if (stryMutAct_9fa48("41503") ? !uid && parseInt(uid, 10) <= 0 : stryMutAct_9fa48("41502") ? false : stryMutAct_9fa48("41501") ? true : (stryCov_9fa48("41501", "41502", "41503"), (stryMutAct_9fa48("41504") ? uid : (stryCov_9fa48("41504"), !uid)) || (stryMutAct_9fa48("41507") ? parseInt(uid, 10) > 0 : stryMutAct_9fa48("41506") ? parseInt(uid, 10) < 0 : stryMutAct_9fa48("41505") ? false : (stryCov_9fa48("41505", "41506", "41507"), parseInt(uid, 10) <= 0)))) {
          if (stryMutAct_9fa48("41508")) {
            {}
          } else {
            stryCov_9fa48("41508");
            return;
          }
        }
        const results = await Topics.getUnreadTids(stryMutAct_9fa48("41509") ? {} : (stryCov_9fa48("41509"), {
          uid: uid,
          count: stryMutAct_9fa48("41510") ? false : (stryCov_9fa48("41510"), true)
        }));
        require('../socket.io').in(stryMutAct_9fa48("41511") ? `` : (stryCov_9fa48("41511"), `uid_${uid}`)).emit(stryMutAct_9fa48("41512") ? "" : (stryCov_9fa48("41512"), 'event:unread.updateCount'), stryMutAct_9fa48("41513") ? {} : (stryCov_9fa48("41513"), {
          unreadTopicCount: results[stryMutAct_9fa48("41514") ? "Stryker was here!" : (stryCov_9fa48("41514"), '')],
          unreadNewTopicCount: results.new,
          unreadWatchedTopicCount: results.watched,
          unreadUnrepliedTopicCount: results.unreplied
        }));
      }
    };
    Topics.markAsUnreadForAll = async function (tid) {
      if (stryMutAct_9fa48("41515")) {
        {}
      } else {
        stryCov_9fa48("41515");
        await Topics.markCategoryUnreadForAll(tid);
      }
    };
    Topics.markAsRead = async function (tids, uid) {
      if (stryMutAct_9fa48("41516")) {
        {}
      } else {
        stryCov_9fa48("41516");
        if (stryMutAct_9fa48("41519") ? !Array.isArray(tids) && !tids.length : stryMutAct_9fa48("41518") ? false : stryMutAct_9fa48("41517") ? true : (stryCov_9fa48("41517", "41518", "41519"), (stryMutAct_9fa48("41520") ? Array.isArray(tids) : (stryCov_9fa48("41520"), !Array.isArray(tids))) || (stryMutAct_9fa48("41521") ? tids.length : (stryCov_9fa48("41521"), !tids.length)))) {
          if (stryMutAct_9fa48("41522")) {
            {}
          } else {
            stryCov_9fa48("41522");
            return stryMutAct_9fa48("41523") ? true : (stryCov_9fa48("41523"), false);
          }
        }
        tids = stryMutAct_9fa48("41524") ? _.uniq(tids) : (stryCov_9fa48("41524"), _.uniq(tids).filter(stryMutAct_9fa48("41525") ? () => undefined : (stryCov_9fa48("41525"), tid => stryMutAct_9fa48("41528") ? tid || utils.isNumber(tid) : stryMutAct_9fa48("41527") ? false : stryMutAct_9fa48("41526") ? true : (stryCov_9fa48("41526", "41527", "41528"), tid && utils.isNumber(tid)))));
        if (stryMutAct_9fa48("41531") ? false : stryMutAct_9fa48("41530") ? true : stryMutAct_9fa48("41529") ? tids.length : (stryCov_9fa48("41529", "41530", "41531"), !tids.length)) {
          if (stryMutAct_9fa48("41532")) {
            {}
          } else {
            stryCov_9fa48("41532");
            return stryMutAct_9fa48("41533") ? true : (stryCov_9fa48("41533"), false);
          }
        }
        const [topicScores, userScores] = await Promise.all(stryMutAct_9fa48("41534") ? [] : (stryCov_9fa48("41534"), [Topics.getTopicsFields(tids, stryMutAct_9fa48("41535") ? [] : (stryCov_9fa48("41535"), [stryMutAct_9fa48("41536") ? "" : (stryCov_9fa48("41536"), 'tid'), stryMutAct_9fa48("41537") ? "" : (stryCov_9fa48("41537"), 'lastposttime'), stryMutAct_9fa48("41538") ? "" : (stryCov_9fa48("41538"), 'scheduled')])), db.sortedSetScores(stryMutAct_9fa48("41539") ? `` : (stryCov_9fa48("41539"), `uid:${uid}:tids_read`), tids)]));
        const topics = stryMutAct_9fa48("41540") ? topicScores : (stryCov_9fa48("41540"), topicScores.filter(stryMutAct_9fa48("41541") ? () => undefined : (stryCov_9fa48("41541"), (t, i) => stryMutAct_9fa48("41544") ? t.lastposttime || !userScores[i] || userScores[i] < t.lastposttime : stryMutAct_9fa48("41543") ? false : stryMutAct_9fa48("41542") ? true : (stryCov_9fa48("41542", "41543", "41544"), t.lastposttime && (stryMutAct_9fa48("41546") ? !userScores[i] && userScores[i] < t.lastposttime : stryMutAct_9fa48("41545") ? true : (stryCov_9fa48("41545", "41546"), (stryMutAct_9fa48("41547") ? userScores[i] : (stryCov_9fa48("41547"), !userScores[i])) || (stryMutAct_9fa48("41550") ? userScores[i] >= t.lastposttime : stryMutAct_9fa48("41549") ? userScores[i] <= t.lastposttime : stryMutAct_9fa48("41548") ? false : (stryCov_9fa48("41548", "41549", "41550"), userScores[i] < t.lastposttime))))))));
        tids = topics.map(stryMutAct_9fa48("41551") ? () => undefined : (stryCov_9fa48("41551"), t => t.tid));
        if (stryMutAct_9fa48("41554") ? false : stryMutAct_9fa48("41553") ? true : stryMutAct_9fa48("41552") ? tids.length : (stryCov_9fa48("41552", "41553", "41554"), !tids.length)) {
          if (stryMutAct_9fa48("41555")) {
            {}
          } else {
            stryCov_9fa48("41555");
            return stryMutAct_9fa48("41556") ? true : (stryCov_9fa48("41556"), false);
          }
        }
        const now = Date.now();
        const scores = topics.map(stryMutAct_9fa48("41557") ? () => undefined : (stryCov_9fa48("41557"), topic => topic.scheduled ? topic.lastposttime : now));
        const [topicData] = await Promise.all(stryMutAct_9fa48("41558") ? [] : (stryCov_9fa48("41558"), [Topics.getTopicsFields(tids, stryMutAct_9fa48("41559") ? [] : (stryCov_9fa48("41559"), [stryMutAct_9fa48("41560") ? "" : (stryCov_9fa48("41560"), 'cid')])), db.sortedSetAdd(stryMutAct_9fa48("41561") ? `` : (stryCov_9fa48("41561"), `uid:${uid}:tids_read`), scores, tids), db.sortedSetRemove(stryMutAct_9fa48("41562") ? `` : (stryCov_9fa48("41562"), `uid:${uid}:tids_unread`), tids)]));
        const cids = _.uniq(stryMutAct_9fa48("41563") ? topicData.map(t => t && t.cid) : (stryCov_9fa48("41563"), topicData.map(stryMutAct_9fa48("41564") ? () => undefined : (stryCov_9fa48("41564"), t => stryMutAct_9fa48("41567") ? t || t.cid : stryMutAct_9fa48("41566") ? false : stryMutAct_9fa48("41565") ? true : (stryCov_9fa48("41565", "41566", "41567"), t && t.cid))).filter(Boolean)));
        await categories.markAsRead(cids, uid);
        plugins.hooks.fire(stryMutAct_9fa48("41568") ? "" : (stryCov_9fa48("41568"), 'action:topics.markAsRead'), stryMutAct_9fa48("41569") ? {} : (stryCov_9fa48("41569"), {
          uid: uid,
          tids: tids
        }));
        return stryMutAct_9fa48("41570") ? false : (stryCov_9fa48("41570"), true);
      }
    };
    Topics.markAllRead = async function (uid) {
      if (stryMutAct_9fa48("41571")) {
        {}
      } else {
        stryCov_9fa48("41571");
        const cutoff = await Topics.unreadCutoff(uid);
        const tids = await db.getSortedSetRevRangeByScore(stryMutAct_9fa48("41572") ? "" : (stryCov_9fa48("41572"), 'topics:recent'), 0, stryMutAct_9fa48("41573") ? +1 : (stryCov_9fa48("41573"), -1), stryMutAct_9fa48("41574") ? "" : (stryCov_9fa48("41574"), '+inf'), cutoff);
        Topics.markTopicNotificationsRead(tids, uid);
        await Topics.markAsRead(tids, uid);
        await db.delete(stryMutAct_9fa48("41575") ? `` : (stryCov_9fa48("41575"), `uid:${uid}:tids_unread`));
      }
    };
    Topics.markTopicNotificationsRead = async function (tids, uid) {
      if (stryMutAct_9fa48("41576")) {
        {}
      } else {
        stryCov_9fa48("41576");
        if (stryMutAct_9fa48("41579") ? !Array.isArray(tids) && !tids.length : stryMutAct_9fa48("41578") ? false : stryMutAct_9fa48("41577") ? true : (stryCov_9fa48("41577", "41578", "41579"), (stryMutAct_9fa48("41580") ? Array.isArray(tids) : (stryCov_9fa48("41580"), !Array.isArray(tids))) || (stryMutAct_9fa48("41581") ? tids.length : (stryCov_9fa48("41581"), !tids.length)))) {
          if (stryMutAct_9fa48("41582")) {
            {}
          } else {
            stryCov_9fa48("41582");
            return;
          }
        }
        const nids = await user.notifications.getUnreadByField(uid, stryMutAct_9fa48("41583") ? "" : (stryCov_9fa48("41583"), 'tid'), tids);
        await notifications.markReadMultiple(nids, uid);
        user.notifications.pushCount(uid);
      }
    };
    Topics.markCategoryUnreadForAll = async function (tid) {
      if (stryMutAct_9fa48("41584")) {
        {}
      } else {
        stryCov_9fa48("41584");
        const cid = await Topics.getTopicField(tid, stryMutAct_9fa48("41585") ? "" : (stryCov_9fa48("41585"), 'cid'));
        await categories.markAsUnreadForAll(cid);
      }
    };
    Topics.hasReadTopics = async function (tids, uid) {
      if (stryMutAct_9fa48("41586")) {
        {}
      } else {
        stryCov_9fa48("41586");
        if (stryMutAct_9fa48("41589") ? false : stryMutAct_9fa48("41588") ? true : stryMutAct_9fa48("41587") ? parseInt(uid, 10) > 0 : (stryCov_9fa48("41587", "41588", "41589"), !(stryMutAct_9fa48("41593") ? parseInt(uid, 10) <= 0 : stryMutAct_9fa48("41592") ? parseInt(uid, 10) >= 0 : stryMutAct_9fa48("41591") ? false : stryMutAct_9fa48("41590") ? true : (stryCov_9fa48("41590", "41591", "41592", "41593"), parseInt(uid, 10) > 0)))) {
          if (stryMutAct_9fa48("41594")) {
            {}
          } else {
            stryCov_9fa48("41594");
            return tids.map(stryMutAct_9fa48("41595") ? () => undefined : (stryCov_9fa48("41595"), () => stryMutAct_9fa48("41596") ? true : (stryCov_9fa48("41596"), false)));
          }
        }
        const [topicScores, userScores, tids_unread, blockedUids] = await Promise.all(stryMutAct_9fa48("41597") ? [] : (stryCov_9fa48("41597"), [db.sortedSetScores(stryMutAct_9fa48("41598") ? "" : (stryCov_9fa48("41598"), 'topics:recent'), tids), db.sortedSetScores(stryMutAct_9fa48("41599") ? `` : (stryCov_9fa48("41599"), `uid:${uid}:tids_read`), tids), db.sortedSetScores(stryMutAct_9fa48("41600") ? `` : (stryCov_9fa48("41600"), `uid:${uid}:tids_unread`), tids), user.blocks.list(uid)]));
        const cutoff = await Topics.unreadCutoff(uid);
        const result = tids.map((tid, index) => {
          if (stryMutAct_9fa48("41601")) {
            {}
          } else {
            stryCov_9fa48("41601");
            const read = stryMutAct_9fa48("41604") ? !tids_unread[index] || topicScores[index] < cutoff || !!(userScores[index] && userScores[index] >= topicScores[index]) : stryMutAct_9fa48("41603") ? false : stryMutAct_9fa48("41602") ? true : (stryCov_9fa48("41602", "41603", "41604"), (stryMutAct_9fa48("41605") ? tids_unread[index] : (stryCov_9fa48("41605"), !tids_unread[index])) && (stryMutAct_9fa48("41607") ? topicScores[index] < cutoff && !!(userScores[index] && userScores[index] >= topicScores[index]) : stryMutAct_9fa48("41606") ? true : (stryCov_9fa48("41606", "41607"), (stryMutAct_9fa48("41610") ? topicScores[index] >= cutoff : stryMutAct_9fa48("41609") ? topicScores[index] <= cutoff : stryMutAct_9fa48("41608") ? false : (stryCov_9fa48("41608", "41609", "41610"), topicScores[index] < cutoff)) || (stryMutAct_9fa48("41611") ? !(userScores[index] && userScores[index] >= topicScores[index]) : (stryCov_9fa48("41611"), !(stryMutAct_9fa48("41612") ? userScores[index] && userScores[index] >= topicScores[index] : (stryCov_9fa48("41612"), !(stryMutAct_9fa48("41615") ? userScores[index] || userScores[index] >= topicScores[index] : stryMutAct_9fa48("41614") ? false : stryMutAct_9fa48("41613") ? true : (stryCov_9fa48("41613", "41614", "41615"), userScores[index] && (stryMutAct_9fa48("41618") ? userScores[index] < topicScores[index] : stryMutAct_9fa48("41617") ? userScores[index] > topicScores[index] : stryMutAct_9fa48("41616") ? true : (stryCov_9fa48("41616", "41617", "41618"), userScores[index] >= topicScores[index])))))))))));
            return stryMutAct_9fa48("41619") ? {} : (stryCov_9fa48("41619"), {
              tid: tid,
              read: read,
              index: index
            });
          }
        });
        return await async.map(result, async data => {
          if (stryMutAct_9fa48("41620")) {
            {}
          } else {
            stryCov_9fa48("41620");
            if (stryMutAct_9fa48("41622") ? false : stryMutAct_9fa48("41621") ? true : (stryCov_9fa48("41621", "41622"), data.read)) {
              if (stryMutAct_9fa48("41623")) {
                {}
              } else {
                stryCov_9fa48("41623");
                return stryMutAct_9fa48("41624") ? false : (stryCov_9fa48("41624"), true);
              }
            }
            const hasUnblockedUnread = await doesTidHaveUnblockedUnreadPosts(data.tid, stryMutAct_9fa48("41625") ? {} : (stryCov_9fa48("41625"), {
              topicTimestamp: topicScores[data.index],
              userLastReadTimestamp: userScores[data.index],
              blockedUids: blockedUids
            }));
            if (stryMutAct_9fa48("41628") ? false : stryMutAct_9fa48("41627") ? true : stryMutAct_9fa48("41626") ? hasUnblockedUnread : (stryCov_9fa48("41626", "41627", "41628"), !hasUnblockedUnread)) {
              if (stryMutAct_9fa48("41629")) {
                {}
              } else {
                stryCov_9fa48("41629");
                data.read = stryMutAct_9fa48("41630") ? false : (stryCov_9fa48("41630"), true);
              }
            }
            return data.read;
          }
        });
      }
    };
    Topics.hasReadTopic = async function (tid, uid) {
      if (stryMutAct_9fa48("41631")) {
        {}
      } else {
        stryCov_9fa48("41631");
        const hasRead = await Topics.hasReadTopics(stryMutAct_9fa48("41632") ? [] : (stryCov_9fa48("41632"), [tid]), uid);
        return (stryMutAct_9fa48("41635") ? Array.isArray(hasRead) || hasRead.length : stryMutAct_9fa48("41634") ? false : stryMutAct_9fa48("41633") ? true : (stryCov_9fa48("41633", "41634", "41635"), Array.isArray(hasRead) && hasRead.length)) ? hasRead[0] : stryMutAct_9fa48("41636") ? true : (stryCov_9fa48("41636"), false);
      }
    };
    Topics.markUnread = async function (tid, uid) {
      if (stryMutAct_9fa48("41637")) {
        {}
      } else {
        stryCov_9fa48("41637");
        const exists = await Topics.exists(tid);
        if (stryMutAct_9fa48("41640") ? false : stryMutAct_9fa48("41639") ? true : stryMutAct_9fa48("41638") ? exists : (stryCov_9fa48("41638", "41639", "41640"), !exists)) {
          if (stryMutAct_9fa48("41641")) {
            {}
          } else {
            stryCov_9fa48("41641");
            throw new Error(stryMutAct_9fa48("41642") ? "" : (stryCov_9fa48("41642"), '[[error:no-topic]]'));
          }
        }
        await db.sortedSetRemove(stryMutAct_9fa48("41643") ? `` : (stryCov_9fa48("41643"), `uid:${uid}:tids_read`), tid);
        await db.sortedSetAdd(stryMutAct_9fa48("41644") ? `` : (stryCov_9fa48("41644"), `uid:${uid}:tids_unread`), Date.now(), tid);
      }
    };
    Topics.filterNewTids = async function (tids, uid) {
      if (stryMutAct_9fa48("41645")) {
        {}
      } else {
        stryCov_9fa48("41645");
        if (stryMutAct_9fa48("41649") ? parseInt(uid, 10) > 0 : stryMutAct_9fa48("41648") ? parseInt(uid, 10) < 0 : stryMutAct_9fa48("41647") ? false : stryMutAct_9fa48("41646") ? true : (stryCov_9fa48("41646", "41647", "41648", "41649"), parseInt(uid, 10) <= 0)) {
          if (stryMutAct_9fa48("41650")) {
            {}
          } else {
            stryCov_9fa48("41650");
            return stryMutAct_9fa48("41651") ? ["Stryker was here"] : (stryCov_9fa48("41651"), []);
          }
        }
        const scores = await db.sortedSetScores(stryMutAct_9fa48("41652") ? `` : (stryCov_9fa48("41652"), `uid:${uid}:tids_read`), tids);
        return stryMutAct_9fa48("41653") ? tids : (stryCov_9fa48("41653"), tids.filter(stryMutAct_9fa48("41654") ? () => undefined : (stryCov_9fa48("41654"), (tid, index) => stryMutAct_9fa48("41657") ? tid || !scores[index] : stryMutAct_9fa48("41656") ? false : stryMutAct_9fa48("41655") ? true : (stryCov_9fa48("41655", "41656", "41657"), tid && (stryMutAct_9fa48("41658") ? scores[index] : (stryCov_9fa48("41658"), !scores[index]))))));
      }
    };
    Topics.filterUnrepliedTids = async function (tids) {
      if (stryMutAct_9fa48("41659")) {
        {}
      } else {
        stryCov_9fa48("41659");
        const scores = await db.sortedSetScores(stryMutAct_9fa48("41660") ? "" : (stryCov_9fa48("41660"), 'topics:posts'), tids);
        return stryMutAct_9fa48("41661") ? tids : (stryCov_9fa48("41661"), tids.filter(stryMutAct_9fa48("41662") ? () => undefined : (stryCov_9fa48("41662"), (tid, index) => stryMutAct_9fa48("41665") ? tid && scores[index] !== null || scores[index] <= 1 : stryMutAct_9fa48("41664") ? false : stryMutAct_9fa48("41663") ? true : (stryCov_9fa48("41663", "41664", "41665"), (stryMutAct_9fa48("41667") ? tid || scores[index] !== null : stryMutAct_9fa48("41666") ? true : (stryCov_9fa48("41666", "41667"), tid && (stryMutAct_9fa48("41669") ? scores[index] === null : stryMutAct_9fa48("41668") ? true : (stryCov_9fa48("41668", "41669"), scores[index] !== null)))) && (stryMutAct_9fa48("41672") ? scores[index] > 1 : stryMutAct_9fa48("41671") ? scores[index] < 1 : stryMutAct_9fa48("41670") ? true : (stryCov_9fa48("41670", "41671", "41672"), scores[index] <= 1))))));
      }
    };
  }
};