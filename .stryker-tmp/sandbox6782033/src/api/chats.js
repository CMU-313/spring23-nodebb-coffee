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
const validator = require('validator');
const user = require('../user');
const meta = require('../meta');
const messaging = require('../messaging');
const plugins = require('../plugins');

// const websockets = require('../socket.io');
const socketHelpers = require('../socket.io/helpers');
const chatsAPI = module.exports;
function rateLimitExceeded(caller) {
  if (stryMutAct_9fa48("462")) {
    {}
  } else {
    stryCov_9fa48("462");
    const session = caller.request ? caller.request.session : caller.session; // socket vs req
    const now = Date.now();
    session.lastChatMessageTime = stryMutAct_9fa48("465") ? session.lastChatMessageTime && 0 : stryMutAct_9fa48("464") ? false : stryMutAct_9fa48("463") ? true : (stryCov_9fa48("463", "464", "465"), session.lastChatMessageTime || 0);
    if (stryMutAct_9fa48("469") ? now - session.lastChatMessageTime >= meta.config.chatMessageDelay : stryMutAct_9fa48("468") ? now - session.lastChatMessageTime <= meta.config.chatMessageDelay : stryMutAct_9fa48("467") ? false : stryMutAct_9fa48("466") ? true : (stryCov_9fa48("466", "467", "468", "469"), (stryMutAct_9fa48("470") ? now + session.lastChatMessageTime : (stryCov_9fa48("470"), now - session.lastChatMessageTime)) < meta.config.chatMessageDelay)) {
      if (stryMutAct_9fa48("471")) {
        {}
      } else {
        stryCov_9fa48("471");
        return stryMutAct_9fa48("472") ? false : (stryCov_9fa48("472"), true);
      }
    }
    session.lastChatMessageTime = now;
    return stryMutAct_9fa48("473") ? true : (stryCov_9fa48("473"), false);
  }
}
chatsAPI.create = async function (caller, data) {
  if (stryMutAct_9fa48("474")) {
    {}
  } else {
    stryCov_9fa48("474");
    if (stryMutAct_9fa48("476") ? false : stryMutAct_9fa48("475") ? true : (stryCov_9fa48("475", "476"), rateLimitExceeded(caller))) {
      if (stryMutAct_9fa48("477")) {
        {}
      } else {
        stryCov_9fa48("477");
        throw new Error(stryMutAct_9fa48("478") ? "" : (stryCov_9fa48("478"), '[[error:too-many-messages]]'));
      }
    }
    if (stryMutAct_9fa48("481") ? !data.uids && !Array.isArray(data.uids) : stryMutAct_9fa48("480") ? false : stryMutAct_9fa48("479") ? true : (stryCov_9fa48("479", "480", "481"), (stryMutAct_9fa48("482") ? data.uids : (stryCov_9fa48("482"), !data.uids)) || (stryMutAct_9fa48("483") ? Array.isArray(data.uids) : (stryCov_9fa48("483"), !Array.isArray(data.uids))))) {
      if (stryMutAct_9fa48("484")) {
        {}
      } else {
        stryCov_9fa48("484");
        throw new Error(stryMutAct_9fa48("485") ? `` : (stryCov_9fa48("485"), `[[error:wrong-parameter-type, uids, ${typeof data.uids}, Array]]`));
      }
    }
    await Promise.all(data.uids.map(stryMutAct_9fa48("486") ? () => undefined : (stryCov_9fa48("486"), async uid => messaging.canMessageUser(caller.uid, uid))));
    const roomId = await messaging.newRoom(caller.uid, data.uids);
    return await messaging.getRoomData(roomId);
  }
};
chatsAPI.post = async (caller, data) => {
  if (stryMutAct_9fa48("487")) {
    {}
  } else {
    stryCov_9fa48("487");
    if (stryMutAct_9fa48("489") ? false : stryMutAct_9fa48("488") ? true : (stryCov_9fa48("488", "489"), rateLimitExceeded(caller))) {
      if (stryMutAct_9fa48("490")) {
        {}
      } else {
        stryCov_9fa48("490");
        throw new Error(stryMutAct_9fa48("491") ? "" : (stryCov_9fa48("491"), '[[error:too-many-messages]]'));
      }
    }
    ({
      data
    } = await plugins.hooks.fire(stryMutAct_9fa48("492") ? "" : (stryCov_9fa48("492"), 'filter:messaging.send'), stryMutAct_9fa48("493") ? {} : (stryCov_9fa48("493"), {
      data,
      uid: caller.uid
    })));
    await messaging.canMessageRoom(caller.uid, data.roomId);
    const message = await messaging.sendMessage(stryMutAct_9fa48("494") ? {} : (stryCov_9fa48("494"), {
      uid: caller.uid,
      roomId: data.roomId,
      content: data.message,
      timestamp: Date.now(),
      ip: caller.ip
    }));
    messaging.notifyUsersInRoom(caller.uid, data.roomId, message);
    user.updateOnlineUsers(caller.uid);
    return message;
  }
};
chatsAPI.rename = async (caller, data) => {
  if (stryMutAct_9fa48("495")) {
    {}
  } else {
    stryCov_9fa48("495");
    await messaging.renameRoom(caller.uid, data.roomId, data.name);
    const uids = await messaging.getUidsInRoom(data.roomId, 0, stryMutAct_9fa48("496") ? +1 : (stryCov_9fa48("496"), -1));
    const eventData = stryMutAct_9fa48("497") ? {} : (stryCov_9fa48("497"), {
      roomId: data.roomId,
      newName: validator.escape(String(data.name))
    });
    socketHelpers.emitToUids(stryMutAct_9fa48("498") ? "" : (stryCov_9fa48("498"), 'event:chats.roomRename'), eventData, uids);
    return messaging.loadRoom(caller.uid, stryMutAct_9fa48("499") ? {} : (stryCov_9fa48("499"), {
      roomId: data.roomId
    }));
  }
};
chatsAPI.users = async (caller, data) => {
  if (stryMutAct_9fa48("500")) {
    {}
  } else {
    stryCov_9fa48("500");
    const [isOwner, users] = await Promise.all(stryMutAct_9fa48("501") ? [] : (stryCov_9fa48("501"), [messaging.isRoomOwner(caller.uid, data.roomId), messaging.getUsersInRoom(data.roomId, 0, stryMutAct_9fa48("502") ? +1 : (stryCov_9fa48("502"), -1))]));
    users.forEach(user => {
      if (stryMutAct_9fa48("503")) {
        {}
      } else {
        stryCov_9fa48("503");
        user.canKick = stryMutAct_9fa48("506") ? parseInt(user.uid, 10) !== parseInt(caller.uid, 10) || isOwner : stryMutAct_9fa48("505") ? false : stryMutAct_9fa48("504") ? true : (stryCov_9fa48("504", "505", "506"), (stryMutAct_9fa48("508") ? parseInt(user.uid, 10) === parseInt(caller.uid, 10) : stryMutAct_9fa48("507") ? true : (stryCov_9fa48("507", "508"), parseInt(user.uid, 10) !== parseInt(caller.uid, 10))) && isOwner);
      }
    });
    return stryMutAct_9fa48("509") ? {} : (stryCov_9fa48("509"), {
      users
    });
  }
};
chatsAPI.invite = async (caller, data) => {
  if (stryMutAct_9fa48("510")) {
    {}
  } else {
    stryCov_9fa48("510");
    const userCount = await messaging.getUserCountInRoom(data.roomId);
    const maxUsers = meta.config.maximumUsersInChatRoom;
    if (stryMutAct_9fa48("513") ? maxUsers || userCount >= maxUsers : stryMutAct_9fa48("512") ? false : stryMutAct_9fa48("511") ? true : (stryCov_9fa48("511", "512", "513"), maxUsers && (stryMutAct_9fa48("516") ? userCount < maxUsers : stryMutAct_9fa48("515") ? userCount > maxUsers : stryMutAct_9fa48("514") ? true : (stryCov_9fa48("514", "515", "516"), userCount >= maxUsers)))) {
      if (stryMutAct_9fa48("517")) {
        {}
      } else {
        stryCov_9fa48("517");
        throw new Error(stryMutAct_9fa48("518") ? "" : (stryCov_9fa48("518"), '[[error:cant-add-more-users-to-chat-room]]'));
      }
    }
    const uidsExist = await user.exists(data.uids);
    if (stryMutAct_9fa48("521") ? false : stryMutAct_9fa48("520") ? true : stryMutAct_9fa48("519") ? uidsExist.every(Boolean) : (stryCov_9fa48("519", "520", "521"), !(stryMutAct_9fa48("522") ? uidsExist.some(Boolean) : (stryCov_9fa48("522"), uidsExist.every(Boolean))))) {
      if (stryMutAct_9fa48("523")) {
        {}
      } else {
        stryCov_9fa48("523");
        throw new Error(stryMutAct_9fa48("524") ? "" : (stryCov_9fa48("524"), '[[error:no-user]]'));
      }
    }
    await Promise.all(data.uids.map(stryMutAct_9fa48("525") ? () => undefined : (stryCov_9fa48("525"), async uid => messaging.canMessageUser(caller.uid, uid))));
    await messaging.addUsersToRoom(caller.uid, data.uids, data.roomId);
    delete data.uids;
    return chatsAPI.users(caller, data);
  }
};
chatsAPI.kick = async (caller, data) => {
  if (stryMutAct_9fa48("526")) {
    {}
  } else {
    stryCov_9fa48("526");
    const uidsExist = await user.exists(data.uids);
    if (stryMutAct_9fa48("529") ? false : stryMutAct_9fa48("528") ? true : stryMutAct_9fa48("527") ? uidsExist.every(Boolean) : (stryCov_9fa48("527", "528", "529"), !(stryMutAct_9fa48("530") ? uidsExist.some(Boolean) : (stryCov_9fa48("530"), uidsExist.every(Boolean))))) {
      if (stryMutAct_9fa48("531")) {
        {}
      } else {
        stryCov_9fa48("531");
        throw new Error(stryMutAct_9fa48("532") ? "" : (stryCov_9fa48("532"), '[[error:no-user]]'));
      }
    }

    // Additional checks if kicking vs leaving
    if (stryMutAct_9fa48("535") ? data.uids.length === 1 || parseInt(data.uids[0], 10) === caller.uid : stryMutAct_9fa48("534") ? false : stryMutAct_9fa48("533") ? true : (stryCov_9fa48("533", "534", "535"), (stryMutAct_9fa48("537") ? data.uids.length !== 1 : stryMutAct_9fa48("536") ? true : (stryCov_9fa48("536", "537"), data.uids.length === 1)) && (stryMutAct_9fa48("539") ? parseInt(data.uids[0], 10) !== caller.uid : stryMutAct_9fa48("538") ? true : (stryCov_9fa48("538", "539"), parseInt(data.uids[0], 10) === caller.uid)))) {
      if (stryMutAct_9fa48("540")) {
        {}
      } else {
        stryCov_9fa48("540");
        await messaging.leaveRoom(stryMutAct_9fa48("541") ? [] : (stryCov_9fa48("541"), [caller.uid]), data.roomId);
      }
    } else {
      if (stryMutAct_9fa48("542")) {
        {}
      } else {
        stryCov_9fa48("542");
        await messaging.removeUsersFromRoom(caller.uid, data.uids, data.roomId);
      }
    }
    delete data.uids;
    return chatsAPI.users(caller, data);
  }
};