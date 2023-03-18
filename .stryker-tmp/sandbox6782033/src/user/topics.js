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
module.exports = function (User) {
  if (stryMutAct_9fa48("49502")) {
    {}
  } else {
    stryCov_9fa48("49502");
    User.getIgnoredTids = async function (uid, start, stop) {
      if (stryMutAct_9fa48("49503")) {
        {}
      } else {
        stryCov_9fa48("49503");
        return await db.getSortedSetRevRange(stryMutAct_9fa48("49504") ? `` : (stryCov_9fa48("49504"), `uid:${uid}:ignored_tids`), start, stop);
      }
    };
    User.addTopicIdToUser = async function (uid, tid, timestamp) {
      if (stryMutAct_9fa48("49505")) {
        {}
      } else {
        stryCov_9fa48("49505");
        await Promise.all(stryMutAct_9fa48("49506") ? [] : (stryCov_9fa48("49506"), [db.sortedSetAdd(stryMutAct_9fa48("49507") ? `` : (stryCov_9fa48("49507"), `uid:${uid}:topics`), timestamp, tid), User.incrementUserFieldBy(uid, stryMutAct_9fa48("49508") ? "" : (stryCov_9fa48("49508"), 'topiccount'), 1)]));
      }
    };
  }
};