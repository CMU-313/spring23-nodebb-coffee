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
const sockets = require('../socket.io');
module.exports = function (Messaging) {
  if (stryMutAct_9fa48("23131")) {
    {}
  } else {
    stryCov_9fa48("23131");
    Messaging.getUnreadCount = async uid => {
      if (stryMutAct_9fa48("23132")) {
        {}
      } else {
        stryCov_9fa48("23132");
        if (stryMutAct_9fa48("23136") ? parseInt(uid, 10) > 0 : stryMutAct_9fa48("23135") ? parseInt(uid, 10) < 0 : stryMutAct_9fa48("23134") ? false : stryMutAct_9fa48("23133") ? true : (stryCov_9fa48("23133", "23134", "23135", "23136"), parseInt(uid, 10) <= 0)) {
          if (stryMutAct_9fa48("23137")) {
            {}
          } else {
            stryCov_9fa48("23137");
            return 0;
          }
        }
        return await db.sortedSetCard(stryMutAct_9fa48("23138") ? `` : (stryCov_9fa48("23138"), `uid:${uid}:chat:rooms:unread`));
      }
    };
    Messaging.pushUnreadCount = async uid => {
      if (stryMutAct_9fa48("23139")) {
        {}
      } else {
        stryCov_9fa48("23139");
        if (stryMutAct_9fa48("23143") ? parseInt(uid, 10) > 0 : stryMutAct_9fa48("23142") ? parseInt(uid, 10) < 0 : stryMutAct_9fa48("23141") ? false : stryMutAct_9fa48("23140") ? true : (stryCov_9fa48("23140", "23141", "23142", "23143"), parseInt(uid, 10) <= 0)) {
          if (stryMutAct_9fa48("23144")) {
            {}
          } else {
            stryCov_9fa48("23144");
            return;
          }
        }
        const unreadCount = await Messaging.getUnreadCount(uid);
        sockets.in(stryMutAct_9fa48("23145") ? `` : (stryCov_9fa48("23145"), `uid_${uid}`)).emit(stryMutAct_9fa48("23146") ? "" : (stryCov_9fa48("23146"), 'event:unread.updateChatCount'), unreadCount);
      }
    };
    Messaging.markRead = async (uid, roomId) => {
      if (stryMutAct_9fa48("23147")) {
        {}
      } else {
        stryCov_9fa48("23147");
        await db.sortedSetRemove(stryMutAct_9fa48("23148") ? `` : (stryCov_9fa48("23148"), `uid:${uid}:chat:rooms:unread`), roomId);
      }
    };
    Messaging.markAllRead = async uid => {
      if (stryMutAct_9fa48("23149")) {
        {}
      } else {
        stryCov_9fa48("23149");
        await db.delete(stryMutAct_9fa48("23150") ? `` : (stryCov_9fa48("23150"), `uid:${uid}:chat:rooms:unread`));
      }
    };
    Messaging.markUnread = async (uids, roomId) => {
      if (stryMutAct_9fa48("23151")) {
        {}
      } else {
        stryCov_9fa48("23151");
        const exists = await Messaging.roomExists(roomId);
        if (stryMutAct_9fa48("23154") ? false : stryMutAct_9fa48("23153") ? true : stryMutAct_9fa48("23152") ? exists : (stryCov_9fa48("23152", "23153", "23154"), !exists)) {
          if (stryMutAct_9fa48("23155")) {
            {}
          } else {
            stryCov_9fa48("23155");
            return;
          }
        }
        const keys = uids.map(stryMutAct_9fa48("23156") ? () => undefined : (stryCov_9fa48("23156"), uid => stryMutAct_9fa48("23157") ? `` : (stryCov_9fa48("23157"), `uid:${uid}:chat:rooms:unread`)));
        return await db.sortedSetsAdd(keys, Date.now(), roomId);
      }
    };
  }
};