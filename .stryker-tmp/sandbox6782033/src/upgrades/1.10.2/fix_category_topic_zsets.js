/* eslint-disable no-await-in-loop */
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
const db = require('../../database');
const batch = require('../../batch');
module.exports = stryMutAct_9fa48("42473") ? {} : (stryCov_9fa48("42473"), {
  name: stryMutAct_9fa48("42474") ? "" : (stryCov_9fa48("42474"), 'Fix category topic zsets'),
  timestamp: Date.UTC(2018, 9, 11),
  method: async function () {
    if (stryMutAct_9fa48("42475")) {
      {}
    } else {
      stryCov_9fa48("42475");
      const {
        progress
      } = this;
      const topics = require('../../topics');
      await batch.processSortedSet(stryMutAct_9fa48("42476") ? "" : (stryCov_9fa48("42476"), 'topics:tid'), async tids => {
        if (stryMutAct_9fa48("42477")) {
          {}
        } else {
          stryCov_9fa48("42477");
          for (const tid of tids) {
            if (stryMutAct_9fa48("42478")) {
              {}
            } else {
              stryCov_9fa48("42478");
              progress.incr();
              const topicData = await db.getObjectFields(stryMutAct_9fa48("42479") ? `` : (stryCov_9fa48("42479"), `topic:${tid}`), stryMutAct_9fa48("42480") ? [] : (stryCov_9fa48("42480"), [stryMutAct_9fa48("42481") ? "" : (stryCov_9fa48("42481"), 'cid'), stryMutAct_9fa48("42482") ? "" : (stryCov_9fa48("42482"), 'pinned'), stryMutAct_9fa48("42483") ? "" : (stryCov_9fa48("42483"), 'postcount')]));
              if (stryMutAct_9fa48("42486") ? parseInt(topicData.pinned, 10) === 1 : stryMutAct_9fa48("42485") ? false : stryMutAct_9fa48("42484") ? true : (stryCov_9fa48("42484", "42485", "42486"), parseInt(topicData.pinned, 10) !== 1)) {
                if (stryMutAct_9fa48("42487")) {
                  {}
                } else {
                  stryCov_9fa48("42487");
                  topicData.postcount = stryMutAct_9fa48("42490") ? parseInt(topicData.postcount, 10) && 0 : stryMutAct_9fa48("42489") ? false : stryMutAct_9fa48("42488") ? true : (stryCov_9fa48("42488", "42489", "42490"), parseInt(topicData.postcount, 10) || 0);
                  await db.sortedSetAdd(stryMutAct_9fa48("42491") ? `` : (stryCov_9fa48("42491"), `cid:${topicData.cid}:tids:posts`), topicData.postcount, tid);
                }
              }
              await topics.updateLastPostTimeFromLastPid(tid);
            }
          }
        }
      }, stryMutAct_9fa48("42492") ? {} : (stryCov_9fa48("42492"), {
        progress: progress
      }));
    }
  }
});