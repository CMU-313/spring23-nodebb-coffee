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
const user = require('../../user');
const websockets = require('../index');
module.exports = function (SocketUser) {
  if (stryMutAct_9fa48("37512")) {
    {}
  } else {
    stryCov_9fa48("37512");
    SocketUser.checkStatus = async function (socket, uid) {
      if (stryMutAct_9fa48("37513")) {
        {}
      } else {
        stryCov_9fa48("37513");
        if (stryMutAct_9fa48("37516") ? false : stryMutAct_9fa48("37515") ? true : stryMutAct_9fa48("37514") ? socket.uid : (stryCov_9fa48("37514", "37515", "37516"), !socket.uid)) {
          if (stryMutAct_9fa48("37517")) {
            {}
          } else {
            stryCov_9fa48("37517");
            throw new Error(stryMutAct_9fa48("37518") ? "" : (stryCov_9fa48("37518"), '[[error:invalid-uid]]'));
          }
        }
        const userData = await user.getUserFields(uid, stryMutAct_9fa48("37519") ? [] : (stryCov_9fa48("37519"), [stryMutAct_9fa48("37520") ? "" : (stryCov_9fa48("37520"), 'lastonline'), stryMutAct_9fa48("37521") ? "" : (stryCov_9fa48("37521"), 'status')]));
        return user.getStatus(userData);
      }
    };
    SocketUser.setStatus = async function (socket, status) {
      if (stryMutAct_9fa48("37522")) {
        {}
      } else {
        stryCov_9fa48("37522");
        if (stryMutAct_9fa48("37526") ? socket.uid > 0 : stryMutAct_9fa48("37525") ? socket.uid < 0 : stryMutAct_9fa48("37524") ? false : stryMutAct_9fa48("37523") ? true : (stryCov_9fa48("37523", "37524", "37525", "37526"), socket.uid <= 0)) {
          if (stryMutAct_9fa48("37527")) {
            {}
          } else {
            stryCov_9fa48("37527");
            throw new Error(stryMutAct_9fa48("37528") ? "" : (stryCov_9fa48("37528"), '[[error:invalid-uid]]'));
          }
        }
        const allowedStatus = stryMutAct_9fa48("37529") ? [] : (stryCov_9fa48("37529"), [stryMutAct_9fa48("37530") ? "" : (stryCov_9fa48("37530"), 'online'), stryMutAct_9fa48("37531") ? "" : (stryCov_9fa48("37531"), 'offline'), stryMutAct_9fa48("37532") ? "" : (stryCov_9fa48("37532"), 'dnd'), stryMutAct_9fa48("37533") ? "" : (stryCov_9fa48("37533"), 'away')]);
        if (stryMutAct_9fa48("37536") ? false : stryMutAct_9fa48("37535") ? true : stryMutAct_9fa48("37534") ? allowedStatus.includes(status) : (stryCov_9fa48("37534", "37535", "37536"), !allowedStatus.includes(status))) {
          if (stryMutAct_9fa48("37537")) {
            {}
          } else {
            stryCov_9fa48("37537");
            throw new Error(stryMutAct_9fa48("37538") ? "" : (stryCov_9fa48("37538"), '[[error:invalid-user-status]]'));
          }
        }
        const userData = stryMutAct_9fa48("37539") ? {} : (stryCov_9fa48("37539"), {
          status: status
        });
        if (stryMutAct_9fa48("37542") ? status === 'offline' : stryMutAct_9fa48("37541") ? false : stryMutAct_9fa48("37540") ? true : (stryCov_9fa48("37540", "37541", "37542"), status !== (stryMutAct_9fa48("37543") ? "" : (stryCov_9fa48("37543"), 'offline')))) {
          if (stryMutAct_9fa48("37544")) {
            {}
          } else {
            stryCov_9fa48("37544");
            userData.lastonline = Date.now();
          }
        }
        await user.setUserFields(socket.uid, userData);
        if (stryMutAct_9fa48("37547") ? status === 'offline' : stryMutAct_9fa48("37546") ? false : stryMutAct_9fa48("37545") ? true : (stryCov_9fa48("37545", "37546", "37547"), status !== (stryMutAct_9fa48("37548") ? "" : (stryCov_9fa48("37548"), 'offline')))) {
          if (stryMutAct_9fa48("37549")) {
            {}
          } else {
            stryCov_9fa48("37549");
            await user.updateOnlineUsers(socket.uid);
          }
        }
        const eventData = stryMutAct_9fa48("37550") ? {} : (stryCov_9fa48("37550"), {
          uid: socket.uid,
          status: status
        });
        websockets.server.emit(stryMutAct_9fa48("37551") ? "" : (stryCov_9fa48("37551"), 'event:user_status_change'), eventData);
        return eventData;
      }
    };
  }
};