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
const topics = require('../topics');
const SocketMeta = stryMutAct_9fa48("36253") ? {} : (stryCov_9fa48("36253"), {
  rooms: {}
});
SocketMeta.reconnected = function (socket, data, callback) {
  if (stryMutAct_9fa48("36254")) {
    {}
  } else {
    stryCov_9fa48("36254");
    callback = stryMutAct_9fa48("36257") ? callback && function () {} : stryMutAct_9fa48("36256") ? false : stryMutAct_9fa48("36255") ? true : (stryCov_9fa48("36255", "36256", "36257"), callback || function () {});
    if (stryMutAct_9fa48("36259") ? false : stryMutAct_9fa48("36258") ? true : (stryCov_9fa48("36258", "36259"), socket.uid)) {
      if (stryMutAct_9fa48("36260")) {
        {}
      } else {
        stryCov_9fa48("36260");
        topics.pushUnreadCount(socket.uid);
        user.notifications.pushCount(socket.uid);
      }
    }
    callback();
  }
};

/* Rooms */

SocketMeta.rooms.enter = function (socket, data, callback) {
  if (stryMutAct_9fa48("36261")) {
    {}
  } else {
    stryCov_9fa48("36261");
    if (stryMutAct_9fa48("36264") ? false : stryMutAct_9fa48("36263") ? true : stryMutAct_9fa48("36262") ? socket.uid : (stryCov_9fa48("36262", "36263", "36264"), !socket.uid)) {
      if (stryMutAct_9fa48("36265")) {
        {}
      } else {
        stryCov_9fa48("36265");
        return callback();
      }
    }
    if (stryMutAct_9fa48("36268") ? false : stryMutAct_9fa48("36267") ? true : stryMutAct_9fa48("36266") ? data : (stryCov_9fa48("36266", "36267", "36268"), !data)) {
      if (stryMutAct_9fa48("36269")) {
        {}
      } else {
        stryCov_9fa48("36269");
        return callback(new Error(stryMutAct_9fa48("36270") ? "" : (stryCov_9fa48("36270"), '[[error:invalid-data]]')));
      }
    }
    if (stryMutAct_9fa48("36272") ? false : stryMutAct_9fa48("36271") ? true : (stryCov_9fa48("36271", "36272"), data.enter)) {
      if (stryMutAct_9fa48("36273")) {
        {}
      } else {
        stryCov_9fa48("36273");
        data.enter = data.enter.toString();
      }
    }
    if (stryMutAct_9fa48("36276") ? data.enter && data.enter.startsWith('uid_') || data.enter !== `uid_${socket.uid}` : stryMutAct_9fa48("36275") ? false : stryMutAct_9fa48("36274") ? true : (stryCov_9fa48("36274", "36275", "36276"), (stryMutAct_9fa48("36278") ? data.enter || data.enter.startsWith('uid_') : stryMutAct_9fa48("36277") ? true : (stryCov_9fa48("36277", "36278"), data.enter && (stryMutAct_9fa48("36279") ? data.enter.endsWith('uid_') : (stryCov_9fa48("36279"), data.enter.startsWith(stryMutAct_9fa48("36280") ? "" : (stryCov_9fa48("36280"), 'uid_')))))) && (stryMutAct_9fa48("36282") ? data.enter === `uid_${socket.uid}` : stryMutAct_9fa48("36281") ? true : (stryCov_9fa48("36281", "36282"), data.enter !== (stryMutAct_9fa48("36283") ? `` : (stryCov_9fa48("36283"), `uid_${socket.uid}`)))))) {
      if (stryMutAct_9fa48("36284")) {
        {}
      } else {
        stryCov_9fa48("36284");
        return callback(new Error(stryMutAct_9fa48("36285") ? "" : (stryCov_9fa48("36285"), '[[error:not-allowed]]')));
      }
    }
    leaveCurrentRoom(socket);
    if (stryMutAct_9fa48("36287") ? false : stryMutAct_9fa48("36286") ? true : (stryCov_9fa48("36286", "36287"), data.enter)) {
      if (stryMutAct_9fa48("36288")) {
        {}
      } else {
        stryCov_9fa48("36288");
        socket.join(data.enter);
        socket.currentRoom = data.enter;
      }
    }
    callback();
  }
};
SocketMeta.rooms.leaveCurrent = function (socket, data, callback) {
  if (stryMutAct_9fa48("36289")) {
    {}
  } else {
    stryCov_9fa48("36289");
    if (stryMutAct_9fa48("36292") ? !socket.uid && !socket.currentRoom : stryMutAct_9fa48("36291") ? false : stryMutAct_9fa48("36290") ? true : (stryCov_9fa48("36290", "36291", "36292"), (stryMutAct_9fa48("36293") ? socket.uid : (stryCov_9fa48("36293"), !socket.uid)) || (stryMutAct_9fa48("36294") ? socket.currentRoom : (stryCov_9fa48("36294"), !socket.currentRoom)))) {
      if (stryMutAct_9fa48("36295")) {
        {}
      } else {
        stryCov_9fa48("36295");
        return callback();
      }
    }
    leaveCurrentRoom(socket);
    callback();
  }
};
function leaveCurrentRoom(socket) {
  if (stryMutAct_9fa48("36296")) {
    {}
  } else {
    stryCov_9fa48("36296");
    if (stryMutAct_9fa48("36298") ? false : stryMutAct_9fa48("36297") ? true : (stryCov_9fa48("36297", "36298"), socket.currentRoom)) {
      if (stryMutAct_9fa48("36299")) {
        {}
      } else {
        stryCov_9fa48("36299");
        socket.leave(socket.currentRoom);
        socket.currentRoom = stryMutAct_9fa48("36300") ? "Stryker was here!" : (stryCov_9fa48("36300"), '');
      }
    }
  }
}
module.exports = SocketMeta;