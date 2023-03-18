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
const user = require('../user');
const notifications = require('../notifications');
const SocketNotifs = module.exports;
SocketNotifs.get = async function (socket, data) {
  if (stryMutAct_9fa48("36545")) {
    {}
  } else {
    stryCov_9fa48("36545");
    if (stryMutAct_9fa48("36548") ? data && Array.isArray(data.nids) || socket.uid : stryMutAct_9fa48("36547") ? false : stryMutAct_9fa48("36546") ? true : (stryCov_9fa48("36546", "36547", "36548"), (stryMutAct_9fa48("36550") ? data || Array.isArray(data.nids) : stryMutAct_9fa48("36549") ? true : (stryCov_9fa48("36549", "36550"), data && Array.isArray(data.nids))) && socket.uid)) {
      if (stryMutAct_9fa48("36551")) {
        {}
      } else {
        stryCov_9fa48("36551");
        return await user.notifications.getNotifications(data.nids, socket.uid);
      }
    }
    return await user.notifications.get(socket.uid);
  }
};
SocketNotifs.getCount = async function (socket) {
  if (stryMutAct_9fa48("36552")) {
    {}
  } else {
    stryCov_9fa48("36552");
    return await user.notifications.getUnreadCount(socket.uid);
  }
};
SocketNotifs.deleteAll = async function (socket) {
  if (stryMutAct_9fa48("36553")) {
    {}
  } else {
    stryCov_9fa48("36553");
    if (stryMutAct_9fa48("36556") ? false : stryMutAct_9fa48("36555") ? true : stryMutAct_9fa48("36554") ? socket.uid : (stryCov_9fa48("36554", "36555", "36556"), !socket.uid)) {
      if (stryMutAct_9fa48("36557")) {
        {}
      } else {
        stryCov_9fa48("36557");
        throw new Error(stryMutAct_9fa48("36558") ? "" : (stryCov_9fa48("36558"), '[[error:no-privileges]]'));
      }
    }
    await user.notifications.deleteAll(socket.uid);
  }
};
SocketNotifs.markRead = async function (socket, nid) {
  if (stryMutAct_9fa48("36559")) {
    {}
  } else {
    stryCov_9fa48("36559");
    await notifications.markRead(nid, socket.uid);
    user.notifications.pushCount(socket.uid);
  }
};
SocketNotifs.markUnread = async function (socket, nid) {
  if (stryMutAct_9fa48("36560")) {
    {}
  } else {
    stryCov_9fa48("36560");
    await notifications.markUnread(nid, socket.uid);
    user.notifications.pushCount(socket.uid);
  }
};
SocketNotifs.markAllRead = async function (socket) {
  if (stryMutAct_9fa48("36561")) {
    {}
  } else {
    stryCov_9fa48("36561");
    await notifications.markAllRead(socket.uid);
    user.notifications.pushCount(socket.uid);
  }
};
require('../promisify')(SocketNotifs);