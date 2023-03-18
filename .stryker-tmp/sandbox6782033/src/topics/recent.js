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
const plugins = require('../plugins');
const posts = require('../posts');
module.exports = function (Topics) {
  if (stryMutAct_9fa48("39593")) {
    {}
  } else {
    stryCov_9fa48("39593");
    const terms = stryMutAct_9fa48("39594") ? {} : (stryCov_9fa48("39594"), {
      day: 86400000,
      week: 604800000,
      month: 2592000000,
      year: 31104000000
    });
    Topics.getRecentTopics = async function (cid, uid, start, stop, filter) {
      if (stryMutAct_9fa48("39595")) {
        {}
      } else {
        stryCov_9fa48("39595");
        return await Topics.getSortedTopics(stryMutAct_9fa48("39596") ? {} : (stryCov_9fa48("39596"), {
          cids: cid,
          uid: uid,
          start: start,
          stop: stop,
          filter: filter,
          sort: stryMutAct_9fa48("39597") ? "" : (stryCov_9fa48("39597"), 'recent')
        }));
      }
    };

    /* not an orphan method, used in widget-essentials */
    Topics.getLatestTopics = async function (options) {
      if (stryMutAct_9fa48("39598")) {
        {}
      } else {
        stryCov_9fa48("39598");
        // uid, start, stop, term
        const tids = await Topics.getLatestTidsFromSet(stryMutAct_9fa48("39599") ? "" : (stryCov_9fa48("39599"), 'topics:recent'), options.start, options.stop, options.term);
        const topics = await Topics.getTopics(tids, options);
        return stryMutAct_9fa48("39600") ? {} : (stryCov_9fa48("39600"), {
          topics: topics,
          nextStart: stryMutAct_9fa48("39601") ? options.stop - 1 : (stryCov_9fa48("39601"), options.stop + 1)
        });
      }
    };
    Topics.getLatestTidsFromSet = async function (set, start, stop, term) {
      if (stryMutAct_9fa48("39602")) {
        {}
      } else {
        stryCov_9fa48("39602");
        let since = terms.day;
        if (stryMutAct_9fa48("39604") ? false : stryMutAct_9fa48("39603") ? true : (stryCov_9fa48("39603", "39604"), terms[term])) {
          if (stryMutAct_9fa48("39605")) {
            {}
          } else {
            stryCov_9fa48("39605");
            since = terms[term];
          }
        }
        const count = (stryMutAct_9fa48("39608") ? parseInt(stop, 10) !== -1 : stryMutAct_9fa48("39607") ? false : stryMutAct_9fa48("39606") ? true : (stryCov_9fa48("39606", "39607", "39608"), parseInt(stop, 10) === (stryMutAct_9fa48("39609") ? +1 : (stryCov_9fa48("39609"), -1)))) ? stop : stryMutAct_9fa48("39610") ? stop - start - 1 : (stryCov_9fa48("39610"), (stryMutAct_9fa48("39611") ? stop + start : (stryCov_9fa48("39611"), stop - start)) + 1);
        return await db.getSortedSetRevRangeByScore(set, start, count, stryMutAct_9fa48("39612") ? "" : (stryCov_9fa48("39612"), '+inf'), stryMutAct_9fa48("39613") ? Date.now() + since : (stryCov_9fa48("39613"), Date.now() - since));
      }
    };
    Topics.updateLastPostTimeFromLastPid = async function (tid) {
      if (stryMutAct_9fa48("39614")) {
        {}
      } else {
        stryCov_9fa48("39614");
        const pid = await Topics.getLatestUndeletedPid(tid);
        if (stryMutAct_9fa48("39617") ? false : stryMutAct_9fa48("39616") ? true : stryMutAct_9fa48("39615") ? pid : (stryCov_9fa48("39615", "39616", "39617"), !pid)) {
          if (stryMutAct_9fa48("39618")) {
            {}
          } else {
            stryCov_9fa48("39618");
            return;
          }
        }
        const timestamp = await posts.getPostField(pid, stryMutAct_9fa48("39619") ? "" : (stryCov_9fa48("39619"), 'timestamp'));
        if (stryMutAct_9fa48("39622") ? false : stryMutAct_9fa48("39621") ? true : stryMutAct_9fa48("39620") ? timestamp : (stryCov_9fa48("39620", "39621", "39622"), !timestamp)) {
          if (stryMutAct_9fa48("39623")) {
            {}
          } else {
            stryCov_9fa48("39623");
            return;
          }
        }
        await Topics.updateLastPostTime(tid, timestamp);
      }
    };
    Topics.updateLastPostTime = async function (tid, lastposttime) {
      if (stryMutAct_9fa48("39624")) {
        {}
      } else {
        stryCov_9fa48("39624");
        await Topics.setTopicField(tid, stryMutAct_9fa48("39625") ? "" : (stryCov_9fa48("39625"), 'lastposttime'), lastposttime);
        const topicData = await Topics.getTopicFields(tid, stryMutAct_9fa48("39626") ? [] : (stryCov_9fa48("39626"), [stryMutAct_9fa48("39627") ? "" : (stryCov_9fa48("39627"), 'cid'), stryMutAct_9fa48("39628") ? "" : (stryCov_9fa48("39628"), 'deleted'), stryMutAct_9fa48("39629") ? "" : (stryCov_9fa48("39629"), 'pinned')]));
        await db.sortedSetAdd(stryMutAct_9fa48("39630") ? `` : (stryCov_9fa48("39630"), `cid:${topicData.cid}:tids:lastposttime`), lastposttime, tid);
        await Topics.updateRecent(tid, lastposttime);
        if (stryMutAct_9fa48("39633") ? false : stryMutAct_9fa48("39632") ? true : stryMutAct_9fa48("39631") ? topicData.pinned : (stryCov_9fa48("39631", "39632", "39633"), !topicData.pinned)) {
          if (stryMutAct_9fa48("39634")) {
            {}
          } else {
            stryCov_9fa48("39634");
            await db.sortedSetAdd(stryMutAct_9fa48("39635") ? `` : (stryCov_9fa48("39635"), `cid:${topicData.cid}:tids`), lastposttime, tid);
          }
        }
      }
    };
    Topics.updateRecent = async function (tid, timestamp) {
      if (stryMutAct_9fa48("39636")) {
        {}
      } else {
        stryCov_9fa48("39636");
        let data = stryMutAct_9fa48("39637") ? {} : (stryCov_9fa48("39637"), {
          tid: tid,
          timestamp: timestamp
        });
        if (stryMutAct_9fa48("39639") ? false : stryMutAct_9fa48("39638") ? true : (stryCov_9fa48("39638", "39639"), plugins.hooks.hasListeners(stryMutAct_9fa48("39640") ? "" : (stryCov_9fa48("39640"), 'filter:topics.updateRecent')))) {
          if (stryMutAct_9fa48("39641")) {
            {}
          } else {
            stryCov_9fa48("39641");
            data = await plugins.hooks.fire(stryMutAct_9fa48("39642") ? "" : (stryCov_9fa48("39642"), 'filter:topics.updateRecent'), stryMutAct_9fa48("39643") ? {} : (stryCov_9fa48("39643"), {
              tid: tid,
              timestamp: timestamp
            }));
          }
        }
        if (stryMutAct_9fa48("39646") ? data && data.tid || data.timestamp : stryMutAct_9fa48("39645") ? false : stryMutAct_9fa48("39644") ? true : (stryCov_9fa48("39644", "39645", "39646"), (stryMutAct_9fa48("39648") ? data || data.tid : stryMutAct_9fa48("39647") ? true : (stryCov_9fa48("39647", "39648"), data && data.tid)) && data.timestamp)) {
          if (stryMutAct_9fa48("39649")) {
            {}
          } else {
            stryCov_9fa48("39649");
            await db.sortedSetAdd(stryMutAct_9fa48("39650") ? "" : (stryCov_9fa48("39650"), 'topics:recent'), data.timestamp, data.tid);
          }
        }
      }
    };
  }
};