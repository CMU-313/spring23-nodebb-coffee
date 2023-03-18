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
const groups = require('.');
const privileges = require('../privileges');
const posts = require('../posts');
module.exports = function (Groups) {
  if (stryMutAct_9fa48("20779")) {
    {}
  } else {
    stryCov_9fa48("20779");
    Groups.onNewPostMade = async function (postData) {
      if (stryMutAct_9fa48("20780")) {
        {}
      } else {
        stryCov_9fa48("20780");
        if (stryMutAct_9fa48("20783") ? false : stryMutAct_9fa48("20782") ? true : stryMutAct_9fa48("20781") ? parseInt(postData.uid, 10) : (stryCov_9fa48("20781", "20782", "20783"), !parseInt(postData.uid, 10))) {
          if (stryMutAct_9fa48("20784")) {
            {}
          } else {
            stryCov_9fa48("20784");
            return;
          }
        }
        let groupNames = await Groups.getUserGroupMembership(stryMutAct_9fa48("20785") ? "" : (stryCov_9fa48("20785"), 'groups:visible:createtime'), stryMutAct_9fa48("20786") ? [] : (stryCov_9fa48("20786"), [postData.uid]));
        groupNames = groupNames[0];

        // Only process those groups that have the cid in its memberPostCids setting (or no setting at all)
        const groupData = await groups.getGroupsFields(groupNames, stryMutAct_9fa48("20787") ? [] : (stryCov_9fa48("20787"), [stryMutAct_9fa48("20788") ? "" : (stryCov_9fa48("20788"), 'memberPostCids')]));
        groupNames = stryMutAct_9fa48("20789") ? groupNames : (stryCov_9fa48("20789"), groupNames.filter(stryMutAct_9fa48("20790") ? () => undefined : (stryCov_9fa48("20790"), (groupName, idx) => stryMutAct_9fa48("20793") ? !groupData[idx].memberPostCidsArray.length && groupData[idx].memberPostCidsArray.includes(postData.cid) : stryMutAct_9fa48("20792") ? false : stryMutAct_9fa48("20791") ? true : (stryCov_9fa48("20791", "20792", "20793"), (stryMutAct_9fa48("20794") ? groupData[idx].memberPostCidsArray.length : (stryCov_9fa48("20794"), !groupData[idx].memberPostCidsArray.length)) || groupData[idx].memberPostCidsArray.includes(postData.cid)))));
        const keys = groupNames.map(stryMutAct_9fa48("20795") ? () => undefined : (stryCov_9fa48("20795"), groupName => stryMutAct_9fa48("20796") ? `` : (stryCov_9fa48("20796"), `group:${groupName}:member:pids`)));
        await db.sortedSetsAdd(keys, postData.timestamp, postData.pid);
        await Promise.all(groupNames.map(stryMutAct_9fa48("20797") ? () => undefined : (stryCov_9fa48("20797"), name => truncateMemberPosts(name))));
      }
    };
    async function truncateMemberPosts(groupName) {
      if (stryMutAct_9fa48("20798")) {
        {}
      } else {
        stryCov_9fa48("20798");
        let lastPid = await db.getSortedSetRevRange(stryMutAct_9fa48("20799") ? `` : (stryCov_9fa48("20799"), `group:${groupName}:member:pids`), 10, 10);
        lastPid = lastPid[0];
        if (stryMutAct_9fa48("20802") ? false : stryMutAct_9fa48("20801") ? true : stryMutAct_9fa48("20800") ? parseInt(lastPid, 10) : (stryCov_9fa48("20800", "20801", "20802"), !parseInt(lastPid, 10))) {
          if (stryMutAct_9fa48("20803")) {
            {}
          } else {
            stryCov_9fa48("20803");
            return;
          }
        }
        const score = await db.sortedSetScore(stryMutAct_9fa48("20804") ? `` : (stryCov_9fa48("20804"), `group:${groupName}:member:pids`), lastPid);
        await db.sortedSetsRemoveRangeByScore(stryMutAct_9fa48("20805") ? [] : (stryCov_9fa48("20805"), [stryMutAct_9fa48("20806") ? `` : (stryCov_9fa48("20806"), `group:${groupName}:member:pids`)]), stryMutAct_9fa48("20807") ? "" : (stryCov_9fa48("20807"), '-inf'), score);
      }
    }
    Groups.getLatestMemberPosts = async function (groupName, max, uid) {
      if (stryMutAct_9fa48("20808")) {
        {}
      } else {
        stryCov_9fa48("20808");
        let pids = await db.getSortedSetRevRange(stryMutAct_9fa48("20809") ? `` : (stryCov_9fa48("20809"), `group:${groupName}:member:pids`), 0, stryMutAct_9fa48("20810") ? max + 1 : (stryCov_9fa48("20810"), max - 1));
        pids = await (stryMutAct_9fa48("20811") ? privileges.posts : (stryCov_9fa48("20811"), privileges.posts.filter(stryMutAct_9fa48("20812") ? "" : (stryCov_9fa48("20812"), 'topics:read'), pids, uid)));
        return await posts.getPostSummaryByPids(pids, uid, stryMutAct_9fa48("20813") ? {} : (stryCov_9fa48("20813"), {
          stripTags: stryMutAct_9fa48("20814") ? true : (stryCov_9fa48("20814"), false)
        }));
      }
    };
  }
};