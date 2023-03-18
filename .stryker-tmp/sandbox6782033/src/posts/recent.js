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
const privileges = require('../privileges');
module.exports = function (Posts) {
  if (stryMutAct_9fa48("29830")) {
    {}
  } else {
    stryCov_9fa48("29830");
    const terms = stryMutAct_9fa48("29831") ? {} : (stryCov_9fa48("29831"), {
      day: 86400000,
      week: 604800000,
      month: 2592000000
    });
    Posts.getRecentPosts = async function (uid, start, stop, term) {
      if (stryMutAct_9fa48("29832")) {
        {}
      } else {
        stryCov_9fa48("29832");
        let min = 0;
        if (stryMutAct_9fa48("29834") ? false : stryMutAct_9fa48("29833") ? true : (stryCov_9fa48("29833", "29834"), terms[term])) {
          if (stryMutAct_9fa48("29835")) {
            {}
          } else {
            stryCov_9fa48("29835");
            min = stryMutAct_9fa48("29836") ? Date.now() + terms[term] : (stryCov_9fa48("29836"), Date.now() - terms[term]);
          }
        }
        const count = (stryMutAct_9fa48("29839") ? parseInt(stop, 10) !== -1 : stryMutAct_9fa48("29838") ? false : stryMutAct_9fa48("29837") ? true : (stryCov_9fa48("29837", "29838", "29839"), parseInt(stop, 10) === (stryMutAct_9fa48("29840") ? +1 : (stryCov_9fa48("29840"), -1)))) ? stop : stryMutAct_9fa48("29841") ? stop - start - 1 : (stryCov_9fa48("29841"), (stryMutAct_9fa48("29842") ? stop + start : (stryCov_9fa48("29842"), stop - start)) + 1);
        let pids = await db.getSortedSetRevRangeByScore(stryMutAct_9fa48("29843") ? "" : (stryCov_9fa48("29843"), 'posts:pid'), start, count, stryMutAct_9fa48("29844") ? "" : (stryCov_9fa48("29844"), '+inf'), min);
        pids = await (stryMutAct_9fa48("29845") ? privileges.posts : (stryCov_9fa48("29845"), privileges.posts.filter(stryMutAct_9fa48("29846") ? "" : (stryCov_9fa48("29846"), 'topics:read'), pids, uid)));
        return await Posts.getPostSummaryByPids(pids, uid, stryMutAct_9fa48("29847") ? {} : (stryCov_9fa48("29847"), {
          stripTags: stryMutAct_9fa48("29848") ? false : (stryCov_9fa48("29848"), true)
        }));
      }
    };
    Posts.getRecentPosterUids = async function (start, stop) {
      if (stryMutAct_9fa48("29849")) {
        {}
      } else {
        stryCov_9fa48("29849");
        const pids = await db.getSortedSetRevRange(stryMutAct_9fa48("29850") ? "" : (stryCov_9fa48("29850"), 'posts:pid'), start, stop);
        const postData = await Posts.getPostsFields(pids, stryMutAct_9fa48("29851") ? [] : (stryCov_9fa48("29851"), [stryMutAct_9fa48("29852") ? "" : (stryCov_9fa48("29852"), 'uid')]));
        return _.uniq(stryMutAct_9fa48("29853") ? postData.map(p => p && p.uid) : (stryCov_9fa48("29853"), postData.map(stryMutAct_9fa48("29854") ? () => undefined : (stryCov_9fa48("29854"), p => stryMutAct_9fa48("29857") ? p || p.uid : stryMutAct_9fa48("29856") ? false : stryMutAct_9fa48("29855") ? true : (stryCov_9fa48("29855", "29856", "29857"), p && p.uid))).filter(stryMutAct_9fa48("29858") ? () => undefined : (stryCov_9fa48("29858"), uid => parseInt(uid, 10)))));
      }
    };
  }
};