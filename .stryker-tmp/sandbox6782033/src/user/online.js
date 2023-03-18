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
module.exports = function (User) {
  if (stryMutAct_9fa48("48161")) {
    {}
  } else {
    stryCov_9fa48("48161");
    User.updateLastOnlineTime = async function (uid) {
      if (stryMutAct_9fa48("48162")) {
        {}
      } else {
        stryCov_9fa48("48162");
        if (stryMutAct_9fa48("48165") ? false : stryMutAct_9fa48("48164") ? true : stryMutAct_9fa48("48163") ? parseInt(uid, 10) > 0 : (stryCov_9fa48("48163", "48164", "48165"), !(stryMutAct_9fa48("48169") ? parseInt(uid, 10) <= 0 : stryMutAct_9fa48("48168") ? parseInt(uid, 10) >= 0 : stryMutAct_9fa48("48167") ? false : stryMutAct_9fa48("48166") ? true : (stryCov_9fa48("48166", "48167", "48168", "48169"), parseInt(uid, 10) > 0)))) {
          if (stryMutAct_9fa48("48170")) {
            {}
          } else {
            stryCov_9fa48("48170");
            return;
          }
        }
        const userData = await db.getObjectFields(stryMutAct_9fa48("48171") ? `` : (stryCov_9fa48("48171"), `user:${uid}`), stryMutAct_9fa48("48172") ? [] : (stryCov_9fa48("48172"), [stryMutAct_9fa48("48173") ? "" : (stryCov_9fa48("48173"), 'status'), stryMutAct_9fa48("48174") ? "" : (stryCov_9fa48("48174"), 'lastonline')]));
        const now = Date.now();
        if (stryMutAct_9fa48("48177") ? userData.status === 'offline' && now - parseInt(userData.lastonline, 10) < 300000 : stryMutAct_9fa48("48176") ? false : stryMutAct_9fa48("48175") ? true : (stryCov_9fa48("48175", "48176", "48177"), (stryMutAct_9fa48("48179") ? userData.status !== 'offline' : stryMutAct_9fa48("48178") ? false : (stryCov_9fa48("48178", "48179"), userData.status === (stryMutAct_9fa48("48180") ? "" : (stryCov_9fa48("48180"), 'offline')))) || (stryMutAct_9fa48("48183") ? now - parseInt(userData.lastonline, 10) >= 300000 : stryMutAct_9fa48("48182") ? now - parseInt(userData.lastonline, 10) <= 300000 : stryMutAct_9fa48("48181") ? false : (stryCov_9fa48("48181", "48182", "48183"), (stryMutAct_9fa48("48184") ? now + parseInt(userData.lastonline, 10) : (stryCov_9fa48("48184"), now - parseInt(userData.lastonline, 10))) < 300000)))) {
          if (stryMutAct_9fa48("48185")) {
            {}
          } else {
            stryCov_9fa48("48185");
            return;
          }
        }
        await User.setUserField(uid, stryMutAct_9fa48("48186") ? "" : (stryCov_9fa48("48186"), 'lastonline'), now);
      }
    };
    User.updateOnlineUsers = async function (uid) {
      if (stryMutAct_9fa48("48187")) {
        {}
      } else {
        stryCov_9fa48("48187");
        if (stryMutAct_9fa48("48190") ? false : stryMutAct_9fa48("48189") ? true : stryMutAct_9fa48("48188") ? parseInt(uid, 10) > 0 : (stryCov_9fa48("48188", "48189", "48190"), !(stryMutAct_9fa48("48194") ? parseInt(uid, 10) <= 0 : stryMutAct_9fa48("48193") ? parseInt(uid, 10) >= 0 : stryMutAct_9fa48("48192") ? false : stryMutAct_9fa48("48191") ? true : (stryCov_9fa48("48191", "48192", "48193", "48194"), parseInt(uid, 10) > 0)))) {
          if (stryMutAct_9fa48("48195")) {
            {}
          } else {
            stryCov_9fa48("48195");
            return;
          }
        }
        const now = Date.now();
        const userOnlineTime = await db.sortedSetScore(stryMutAct_9fa48("48196") ? "" : (stryCov_9fa48("48196"), 'users:online'), uid);
        if (stryMutAct_9fa48("48200") ? now - parseInt(userOnlineTime, 10) >= 300000 : stryMutAct_9fa48("48199") ? now - parseInt(userOnlineTime, 10) <= 300000 : stryMutAct_9fa48("48198") ? false : stryMutAct_9fa48("48197") ? true : (stryCov_9fa48("48197", "48198", "48199", "48200"), (stryMutAct_9fa48("48201") ? now + parseInt(userOnlineTime, 10) : (stryCov_9fa48("48201"), now - parseInt(userOnlineTime, 10))) < 300000)) {
          if (stryMutAct_9fa48("48202")) {
            {}
          } else {
            stryCov_9fa48("48202");
            return;
          }
        }
        await db.sortedSetAdd(stryMutAct_9fa48("48203") ? "" : (stryCov_9fa48("48203"), 'users:online'), now, uid);
        topics.pushUnreadCount(uid);
        plugins.hooks.fire(stryMutAct_9fa48("48204") ? "" : (stryCov_9fa48("48204"), 'action:user.online'), stryMutAct_9fa48("48205") ? {} : (stryCov_9fa48("48205"), {
          uid: uid,
          timestamp: now
        }));
      }
    };
    User.isOnline = async function (uid) {
      if (stryMutAct_9fa48("48206")) {
        {}
      } else {
        stryCov_9fa48("48206");
        const now = Date.now();
        const isArray = Array.isArray(uid);
        uid = isArray ? uid : stryMutAct_9fa48("48207") ? [] : (stryCov_9fa48("48207"), [uid]);
        const lastonline = await db.sortedSetScores(stryMutAct_9fa48("48208") ? "" : (stryCov_9fa48("48208"), 'users:online'), uid);
        const isOnline = uid.map(stryMutAct_9fa48("48209") ? () => undefined : (stryCov_9fa48("48209"), (uid, index) => stryMutAct_9fa48("48213") ? now - lastonline[index] >= meta.config.onlineCutoff * 60000 : stryMutAct_9fa48("48212") ? now - lastonline[index] <= meta.config.onlineCutoff * 60000 : stryMutAct_9fa48("48211") ? false : stryMutAct_9fa48("48210") ? true : (stryCov_9fa48("48210", "48211", "48212", "48213"), (stryMutAct_9fa48("48214") ? now + lastonline[index] : (stryCov_9fa48("48214"), now - lastonline[index])) < (stryMutAct_9fa48("48215") ? meta.config.onlineCutoff / 60000 : (stryCov_9fa48("48215"), meta.config.onlineCutoff * 60000)))));
        return isArray ? isOnline : isOnline[0];
      }
    };
  }
};