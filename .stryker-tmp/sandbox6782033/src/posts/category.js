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
const topics = require('../topics');
module.exports = function (Posts) {
  if (stryMutAct_9fa48("28417")) {
    {}
  } else {
    stryCov_9fa48("28417");
    Posts.getCidByPid = async function (pid) {
      if (stryMutAct_9fa48("28418")) {
        {}
      } else {
        stryCov_9fa48("28418");
        const tid = await Posts.getPostField(pid, stryMutAct_9fa48("28419") ? "" : (stryCov_9fa48("28419"), 'tid'));
        return await topics.getTopicField(tid, stryMutAct_9fa48("28420") ? "" : (stryCov_9fa48("28420"), 'cid'));
      }
    };
    Posts.getCidsByPids = async function (pids) {
      if (stryMutAct_9fa48("28421")) {
        {}
      } else {
        stryCov_9fa48("28421");
        const postData = await Posts.getPostsFields(pids, stryMutAct_9fa48("28422") ? [] : (stryCov_9fa48("28422"), [stryMutAct_9fa48("28423") ? "" : (stryCov_9fa48("28423"), 'tid')]));
        const tids = _.uniq(stryMutAct_9fa48("28424") ? postData.map(post => post && post.tid) : (stryCov_9fa48("28424"), postData.map(stryMutAct_9fa48("28425") ? () => undefined : (stryCov_9fa48("28425"), post => stryMutAct_9fa48("28428") ? post || post.tid : stryMutAct_9fa48("28427") ? false : stryMutAct_9fa48("28426") ? true : (stryCov_9fa48("28426", "28427", "28428"), post && post.tid))).filter(Boolean)));
        const topicData = await topics.getTopicsFields(tids, stryMutAct_9fa48("28429") ? [] : (stryCov_9fa48("28429"), [stryMutAct_9fa48("28430") ? "" : (stryCov_9fa48("28430"), 'cid')]));
        const tidToTopic = _.zipObject(tids, topicData);
        const cids = postData.map(stryMutAct_9fa48("28431") ? () => undefined : (stryCov_9fa48("28431"), post => stryMutAct_9fa48("28434") ? tidToTopic[post.tid] || tidToTopic[post.tid].cid : stryMutAct_9fa48("28433") ? false : stryMutAct_9fa48("28432") ? true : (stryCov_9fa48("28432", "28433", "28434"), tidToTopic[post.tid] && tidToTopic[post.tid].cid)));
        return cids;
      }
    };
    Posts.filterPidsByCid = async function (pids, cid) {
      if (stryMutAct_9fa48("28435")) {
        {}
      } else {
        stryCov_9fa48("28435");
        if (stryMutAct_9fa48("28438") ? false : stryMutAct_9fa48("28437") ? true : stryMutAct_9fa48("28436") ? cid : (stryCov_9fa48("28436", "28437", "28438"), !cid)) {
          if (stryMutAct_9fa48("28439")) {
            {}
          } else {
            stryCov_9fa48("28439");
            return pids;
          }
        }
        if (stryMutAct_9fa48("28442") ? !Array.isArray(cid) && cid.length === 1 : stryMutAct_9fa48("28441") ? false : stryMutAct_9fa48("28440") ? true : (stryCov_9fa48("28440", "28441", "28442"), (stryMutAct_9fa48("28443") ? Array.isArray(cid) : (stryCov_9fa48("28443"), !Array.isArray(cid))) || (stryMutAct_9fa48("28445") ? cid.length !== 1 : stryMutAct_9fa48("28444") ? false : (stryCov_9fa48("28444", "28445"), cid.length === 1)))) {
          if (stryMutAct_9fa48("28446")) {
            {}
          } else {
            stryCov_9fa48("28446");
            return await filterPidsBySingleCid(pids, cid);
          }
        }
        const pidsArr = await Promise.all(cid.map(stryMutAct_9fa48("28447") ? () => undefined : (stryCov_9fa48("28447"), c => Posts.filterPidsByCid(pids, c))));
        return _.union(...pidsArr);
      }
    };
    async function filterPidsBySingleCid(pids, cid) {
      if (stryMutAct_9fa48("28448")) {
        {}
      } else {
        stryCov_9fa48("28448");
        const isMembers = await db.isSortedSetMembers(stryMutAct_9fa48("28449") ? `` : (stryCov_9fa48("28449"), `cid:${parseInt(cid, 10)}:pids`), pids);
        return stryMutAct_9fa48("28450") ? pids : (stryCov_9fa48("28450"), pids.filter(stryMutAct_9fa48("28451") ? () => undefined : (stryCov_9fa48("28451"), (pid, index) => stryMutAct_9fa48("28454") ? pid || isMembers[index] : stryMutAct_9fa48("28453") ? false : stryMutAct_9fa48("28452") ? true : (stryCov_9fa48("28452", "28453", "28454"), pid && isMembers[index]))));
      }
    }
  }
};