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
const notifications = require('../notifications');
const Messaging = require('../messaging');
const utils = require('../utils');
const server = require('./index');
const user = require('../user');
const privileges = require('../privileges');
const sockets = require('.');
const api = require('../api');
const SocketModules = module.exports;
SocketModules.chats = {};
SocketModules.settings = {};

/* Chat */

SocketModules.chats.getRaw = async function (socket, data) {
  if (stryMutAct_9fa48("36301")) {
    {}
  } else {
    stryCov_9fa48("36301");
    if (stryMutAct_9fa48("36304") ? !data && !data.hasOwnProperty('mid') : stryMutAct_9fa48("36303") ? false : stryMutAct_9fa48("36302") ? true : (stryCov_9fa48("36302", "36303", "36304"), (stryMutAct_9fa48("36305") ? data : (stryCov_9fa48("36305"), !data)) || (stryMutAct_9fa48("36306") ? data.hasOwnProperty('mid') : (stryCov_9fa48("36306"), !data.hasOwnProperty(stryMutAct_9fa48("36307") ? "" : (stryCov_9fa48("36307"), 'mid')))))) {
      if (stryMutAct_9fa48("36308")) {
        {}
      } else {
        stryCov_9fa48("36308");
        throw new Error(stryMutAct_9fa48("36309") ? "" : (stryCov_9fa48("36309"), '[[error:invalid-data]]'));
      }
    }
    const roomId = await Messaging.getMessageField(data.mid, stryMutAct_9fa48("36310") ? "" : (stryCov_9fa48("36310"), 'roomId'));
    const [isAdmin, hasMessage, inRoom] = await Promise.all(stryMutAct_9fa48("36311") ? [] : (stryCov_9fa48("36311"), [user.isAdministrator(socket.uid), db.isSortedSetMember(stryMutAct_9fa48("36312") ? `` : (stryCov_9fa48("36312"), `uid:${socket.uid}:chat:room:${roomId}:mids`), data.mid), Messaging.isUserInRoom(socket.uid, roomId)]));
    if (stryMutAct_9fa48("36315") ? !isAdmin || !inRoom || !hasMessage : stryMutAct_9fa48("36314") ? false : stryMutAct_9fa48("36313") ? true : (stryCov_9fa48("36313", "36314", "36315"), (stryMutAct_9fa48("36316") ? isAdmin : (stryCov_9fa48("36316"), !isAdmin)) && (stryMutAct_9fa48("36318") ? !inRoom && !hasMessage : stryMutAct_9fa48("36317") ? true : (stryCov_9fa48("36317", "36318"), (stryMutAct_9fa48("36319") ? inRoom : (stryCov_9fa48("36319"), !inRoom)) || (stryMutAct_9fa48("36320") ? hasMessage : (stryCov_9fa48("36320"), !hasMessage)))))) {
      if (stryMutAct_9fa48("36321")) {
        {}
      } else {
        stryCov_9fa48("36321");
        throw new Error(stryMutAct_9fa48("36322") ? "" : (stryCov_9fa48("36322"), '[[error:not-allowed]]'));
      }
    }
    return await Messaging.getMessageField(data.mid, stryMutAct_9fa48("36323") ? "" : (stryCov_9fa48("36323"), 'content'));
  }
};
SocketModules.chats.isDnD = async function (socket, uid) {
  if (stryMutAct_9fa48("36324")) {
    {}
  } else {
    stryCov_9fa48("36324");
    const status = await db.getObjectField(stryMutAct_9fa48("36325") ? `` : (stryCov_9fa48("36325"), `user:${uid}`), stryMutAct_9fa48("36326") ? "" : (stryCov_9fa48("36326"), 'status'));
    return stryMutAct_9fa48("36329") ? status !== 'dnd' : stryMutAct_9fa48("36328") ? false : stryMutAct_9fa48("36327") ? true : (stryCov_9fa48("36327", "36328", "36329"), status === (stryMutAct_9fa48("36330") ? "" : (stryCov_9fa48("36330"), 'dnd')));
  }
};
SocketModules.chats.newRoom = async function (socket, data) {
  if (stryMutAct_9fa48("36331")) {
    {}
  } else {
    stryCov_9fa48("36331");
    sockets.warnDeprecated(socket, stryMutAct_9fa48("36332") ? "" : (stryCov_9fa48("36332"), 'POST /api/v3/chats'));
    if (stryMutAct_9fa48("36335") ? false : stryMutAct_9fa48("36334") ? true : stryMutAct_9fa48("36333") ? data : (stryCov_9fa48("36333", "36334", "36335"), !data)) {
      if (stryMutAct_9fa48("36336")) {
        {}
      } else {
        stryCov_9fa48("36336");
        throw new Error(stryMutAct_9fa48("36337") ? "" : (stryCov_9fa48("36337"), '[[error:invalid-data]]'));
      }
    }
    const roomObj = await api.chats.create(socket, stryMutAct_9fa48("36338") ? {} : (stryCov_9fa48("36338"), {
      uids: stryMutAct_9fa48("36339") ? [] : (stryCov_9fa48("36339"), [data.touid])
    }));
    return roomObj.roomId;
  }
};
SocketModules.chats.send = async function (socket, data) {
  if (stryMutAct_9fa48("36340")) {
    {}
  } else {
    stryCov_9fa48("36340");
    sockets.warnDeprecated(socket, stryMutAct_9fa48("36341") ? "" : (stryCov_9fa48("36341"), 'POST /api/v3/chats/:roomId'));
    if (stryMutAct_9fa48("36344") ? (!data || !data.roomId) && !socket.uid : stryMutAct_9fa48("36343") ? false : stryMutAct_9fa48("36342") ? true : (stryCov_9fa48("36342", "36343", "36344"), (stryMutAct_9fa48("36346") ? !data && !data.roomId : stryMutAct_9fa48("36345") ? false : (stryCov_9fa48("36345", "36346"), (stryMutAct_9fa48("36347") ? data : (stryCov_9fa48("36347"), !data)) || (stryMutAct_9fa48("36348") ? data.roomId : (stryCov_9fa48("36348"), !data.roomId)))) || (stryMutAct_9fa48("36349") ? socket.uid : (stryCov_9fa48("36349"), !socket.uid)))) {
      if (stryMutAct_9fa48("36350")) {
        {}
      } else {
        stryCov_9fa48("36350");
        throw new Error(stryMutAct_9fa48("36351") ? "" : (stryCov_9fa48("36351"), '[[error:invalid-data]]'));
      }
    }
    const canChat = await privileges.global.can(stryMutAct_9fa48("36352") ? "" : (stryCov_9fa48("36352"), 'chat'), socket.uid);
    if (stryMutAct_9fa48("36355") ? false : stryMutAct_9fa48("36354") ? true : stryMutAct_9fa48("36353") ? canChat : (stryCov_9fa48("36353", "36354", "36355"), !canChat)) {
      if (stryMutAct_9fa48("36356")) {
        {}
      } else {
        stryCov_9fa48("36356");
        throw new Error(stryMutAct_9fa48("36357") ? "" : (stryCov_9fa48("36357"), '[[error:no-privileges]]'));
      }
    }
    return api.chats.post(socket, data);
  }
};
SocketModules.chats.loadRoom = async function (socket, data) {
  if (stryMutAct_9fa48("36358")) {
    {}
  } else {
    stryCov_9fa48("36358");
    sockets.warnDeprecated(socket, stryMutAct_9fa48("36359") ? "" : (stryCov_9fa48("36359"), 'GET /api/v3/chats/:roomId'));
    if (stryMutAct_9fa48("36362") ? !data && !data.roomId : stryMutAct_9fa48("36361") ? false : stryMutAct_9fa48("36360") ? true : (stryCov_9fa48("36360", "36361", "36362"), (stryMutAct_9fa48("36363") ? data : (stryCov_9fa48("36363"), !data)) || (stryMutAct_9fa48("36364") ? data.roomId : (stryCov_9fa48("36364"), !data.roomId)))) {
      if (stryMutAct_9fa48("36365")) {
        {}
      } else {
        stryCov_9fa48("36365");
        throw new Error(stryMutAct_9fa48("36366") ? "" : (stryCov_9fa48("36366"), '[[error:invalid-data]]'));
      }
    }
    return await Messaging.loadRoom(socket.uid, data);
  }
};
SocketModules.chats.getUsersInRoom = async function (socket, data) {
  if (stryMutAct_9fa48("36367")) {
    {}
  } else {
    stryCov_9fa48("36367");
    sockets.warnDeprecated(socket, stryMutAct_9fa48("36368") ? "" : (stryCov_9fa48("36368"), 'GET /api/v3/chats/:roomId/users'));
    if (stryMutAct_9fa48("36371") ? !data && !data.roomId : stryMutAct_9fa48("36370") ? false : stryMutAct_9fa48("36369") ? true : (stryCov_9fa48("36369", "36370", "36371"), (stryMutAct_9fa48("36372") ? data : (stryCov_9fa48("36372"), !data)) || (stryMutAct_9fa48("36373") ? data.roomId : (stryCov_9fa48("36373"), !data.roomId)))) {
      if (stryMutAct_9fa48("36374")) {
        {}
      } else {
        stryCov_9fa48("36374");
        throw new Error(stryMutAct_9fa48("36375") ? "" : (stryCov_9fa48("36375"), '[[error:invalid-data]]'));
      }
    }
    const isUserInRoom = await Messaging.isUserInRoom(socket.uid, data.roomId);
    if (stryMutAct_9fa48("36378") ? false : stryMutAct_9fa48("36377") ? true : stryMutAct_9fa48("36376") ? isUserInRoom : (stryCov_9fa48("36376", "36377", "36378"), !isUserInRoom)) {
      if (stryMutAct_9fa48("36379")) {
        {}
      } else {
        stryCov_9fa48("36379");
        throw new Error(stryMutAct_9fa48("36380") ? "" : (stryCov_9fa48("36380"), '[[error:no-privileges]]'));
      }
    }
    return api.chats.users(socket, data);
  }
};
SocketModules.chats.addUserToRoom = async function (socket, data) {
  if (stryMutAct_9fa48("36381")) {
    {}
  } else {
    stryCov_9fa48("36381");
    sockets.warnDeprecated(socket, stryMutAct_9fa48("36382") ? "" : (stryCov_9fa48("36382"), 'POST /api/v3/chats/:roomId/users'));
    if (stryMutAct_9fa48("36385") ? (!data || !data.roomId) && !data.username : stryMutAct_9fa48("36384") ? false : stryMutAct_9fa48("36383") ? true : (stryCov_9fa48("36383", "36384", "36385"), (stryMutAct_9fa48("36387") ? !data && !data.roomId : stryMutAct_9fa48("36386") ? false : (stryCov_9fa48("36386", "36387"), (stryMutAct_9fa48("36388") ? data : (stryCov_9fa48("36388"), !data)) || (stryMutAct_9fa48("36389") ? data.roomId : (stryCov_9fa48("36389"), !data.roomId)))) || (stryMutAct_9fa48("36390") ? data.username : (stryCov_9fa48("36390"), !data.username)))) {
      if (stryMutAct_9fa48("36391")) {
        {}
      } else {
        stryCov_9fa48("36391");
        throw new Error(stryMutAct_9fa48("36392") ? "" : (stryCov_9fa48("36392"), '[[error:invalid-data]]'));
      }
    }
    const canChat = await privileges.global.can(stryMutAct_9fa48("36393") ? "" : (stryCov_9fa48("36393"), 'chat'), socket.uid);
    if (stryMutAct_9fa48("36396") ? false : stryMutAct_9fa48("36395") ? true : stryMutAct_9fa48("36394") ? canChat : (stryCov_9fa48("36394", "36395", "36396"), !canChat)) {
      if (stryMutAct_9fa48("36397")) {
        {}
      } else {
        stryCov_9fa48("36397");
        throw new Error(stryMutAct_9fa48("36398") ? "" : (stryCov_9fa48("36398"), '[[error:no-privileges]]'));
      }
    }

    // Revised API now takes uids, not usernames
    data.uids = stryMutAct_9fa48("36399") ? [] : (stryCov_9fa48("36399"), [await user.getUidByUsername(data.username)]);
    delete data.username;
    await api.chats.invite(socket, data);
  }
};
SocketModules.chats.removeUserFromRoom = async function (socket, data) {
  if (stryMutAct_9fa48("36400")) {
    {}
  } else {
    stryCov_9fa48("36400");
    sockets.warnDeprecated(socket, stryMutAct_9fa48("36401") ? "" : (stryCov_9fa48("36401"), 'DELETE /api/v3/chats/:roomId/users OR DELETE /api/v3/chats/:roomId/users/:uid'));
    if (stryMutAct_9fa48("36404") ? !data && !data.roomId : stryMutAct_9fa48("36403") ? false : stryMutAct_9fa48("36402") ? true : (stryCov_9fa48("36402", "36403", "36404"), (stryMutAct_9fa48("36405") ? data : (stryCov_9fa48("36405"), !data)) || (stryMutAct_9fa48("36406") ? data.roomId : (stryCov_9fa48("36406"), !data.roomId)))) {
      if (stryMutAct_9fa48("36407")) {
        {}
      } else {
        stryCov_9fa48("36407");
        throw new Error(stryMutAct_9fa48("36408") ? "" : (stryCov_9fa48("36408"), '[[error:invalid-data]]'));
      }
    }

    // Revised API can accept multiple uids now
    data.uids = stryMutAct_9fa48("36409") ? [] : (stryCov_9fa48("36409"), [data.uid]);
    delete data.uid;
    await api.chats.kick(socket, data);
  }
};
SocketModules.chats.leave = async function (socket, roomid) {
  if (stryMutAct_9fa48("36410")) {
    {}
  } else {
    stryCov_9fa48("36410");
    sockets.warnDeprecated(socket, stryMutAct_9fa48("36411") ? "" : (stryCov_9fa48("36411"), 'DELETE /api/v3/chats/:roomId/users OR DELETE /api/v3/chats/:roomId/users/:uid'));
    if (stryMutAct_9fa48("36414") ? !socket.uid && !roomid : stryMutAct_9fa48("36413") ? false : stryMutAct_9fa48("36412") ? true : (stryCov_9fa48("36412", "36413", "36414"), (stryMutAct_9fa48("36415") ? socket.uid : (stryCov_9fa48("36415"), !socket.uid)) || (stryMutAct_9fa48("36416") ? roomid : (stryCov_9fa48("36416"), !roomid)))) {
      if (stryMutAct_9fa48("36417")) {
        {}
      } else {
        stryCov_9fa48("36417");
        throw new Error(stryMutAct_9fa48("36418") ? "" : (stryCov_9fa48("36418"), '[[error:invalid-data]]'));
      }
    }
    await Messaging.leaveRoom(stryMutAct_9fa48("36419") ? [] : (stryCov_9fa48("36419"), [socket.uid]), roomid);
  }
};
SocketModules.chats.edit = async function (socket, data) {
  if (stryMutAct_9fa48("36420")) {
    {}
  } else {
    stryCov_9fa48("36420");
    sockets.warnDeprecated(socket, stryMutAct_9fa48("36421") ? "" : (stryCov_9fa48("36421"), 'PUT /api/v3/chats/:roomId/:mid'));
    if (stryMutAct_9fa48("36424") ? (!data || !data.roomId) && !data.message : stryMutAct_9fa48("36423") ? false : stryMutAct_9fa48("36422") ? true : (stryCov_9fa48("36422", "36423", "36424"), (stryMutAct_9fa48("36426") ? !data && !data.roomId : stryMutAct_9fa48("36425") ? false : (stryCov_9fa48("36425", "36426"), (stryMutAct_9fa48("36427") ? data : (stryCov_9fa48("36427"), !data)) || (stryMutAct_9fa48("36428") ? data.roomId : (stryCov_9fa48("36428"), !data.roomId)))) || (stryMutAct_9fa48("36429") ? data.message : (stryCov_9fa48("36429"), !data.message)))) {
      if (stryMutAct_9fa48("36430")) {
        {}
      } else {
        stryCov_9fa48("36430");
        throw new Error(stryMutAct_9fa48("36431") ? "" : (stryCov_9fa48("36431"), '[[error:invalid-data]]'));
      }
    }
    await Messaging.canEdit(data.mid, socket.uid);
    await Messaging.editMessage(socket.uid, data.mid, data.roomId, data.message);
  }
};
SocketModules.chats.delete = async function (socket, data) {
  if (stryMutAct_9fa48("36432")) {
    {}
  } else {
    stryCov_9fa48("36432");
    sockets.warnDeprecated(socket, stryMutAct_9fa48("36433") ? "" : (stryCov_9fa48("36433"), 'DELETE /api/v3/chats/:roomId/:mid'));
    if (stryMutAct_9fa48("36436") ? (!data || !data.roomId) && !data.messageId : stryMutAct_9fa48("36435") ? false : stryMutAct_9fa48("36434") ? true : (stryCov_9fa48("36434", "36435", "36436"), (stryMutAct_9fa48("36438") ? !data && !data.roomId : stryMutAct_9fa48("36437") ? false : (stryCov_9fa48("36437", "36438"), (stryMutAct_9fa48("36439") ? data : (stryCov_9fa48("36439"), !data)) || (stryMutAct_9fa48("36440") ? data.roomId : (stryCov_9fa48("36440"), !data.roomId)))) || (stryMutAct_9fa48("36441") ? data.messageId : (stryCov_9fa48("36441"), !data.messageId)))) {
      if (stryMutAct_9fa48("36442")) {
        {}
      } else {
        stryCov_9fa48("36442");
        throw new Error(stryMutAct_9fa48("36443") ? "" : (stryCov_9fa48("36443"), '[[error:invalid-data]]'));
      }
    }
    await Messaging.canDelete(data.messageId, socket.uid);
    await Messaging.deleteMessage(data.messageId, socket.uid);
  }
};
SocketModules.chats.restore = async function (socket, data) {
  if (stryMutAct_9fa48("36444")) {
    {}
  } else {
    stryCov_9fa48("36444");
    sockets.warnDeprecated(socket, stryMutAct_9fa48("36445") ? "" : (stryCov_9fa48("36445"), 'POST /api/v3/chats/:roomId/:mid'));
    if (stryMutAct_9fa48("36448") ? (!data || !data.roomId) && !data.messageId : stryMutAct_9fa48("36447") ? false : stryMutAct_9fa48("36446") ? true : (stryCov_9fa48("36446", "36447", "36448"), (stryMutAct_9fa48("36450") ? !data && !data.roomId : stryMutAct_9fa48("36449") ? false : (stryCov_9fa48("36449", "36450"), (stryMutAct_9fa48("36451") ? data : (stryCov_9fa48("36451"), !data)) || (stryMutAct_9fa48("36452") ? data.roomId : (stryCov_9fa48("36452"), !data.roomId)))) || (stryMutAct_9fa48("36453") ? data.messageId : (stryCov_9fa48("36453"), !data.messageId)))) {
      if (stryMutAct_9fa48("36454")) {
        {}
      } else {
        stryCov_9fa48("36454");
        throw new Error(stryMutAct_9fa48("36455") ? "" : (stryCov_9fa48("36455"), '[[error:invalid-data]]'));
      }
    }
    await Messaging.canDelete(data.messageId, socket.uid);
    await Messaging.restoreMessage(data.messageId, socket.uid);
  }
};
SocketModules.chats.canMessage = async function (socket, roomId) {
  if (stryMutAct_9fa48("36456")) {
    {}
  } else {
    stryCov_9fa48("36456");
    await Messaging.canMessageRoom(socket.uid, roomId);
  }
};
SocketModules.chats.markRead = async function (socket, roomId) {
  if (stryMutAct_9fa48("36457")) {
    {}
  } else {
    stryCov_9fa48("36457");
    if (stryMutAct_9fa48("36460") ? !socket.uid && !roomId : stryMutAct_9fa48("36459") ? false : stryMutAct_9fa48("36458") ? true : (stryCov_9fa48("36458", "36459", "36460"), (stryMutAct_9fa48("36461") ? socket.uid : (stryCov_9fa48("36461"), !socket.uid)) || (stryMutAct_9fa48("36462") ? roomId : (stryCov_9fa48("36462"), !roomId)))) {
      if (stryMutAct_9fa48("36463")) {
        {}
      } else {
        stryCov_9fa48("36463");
        throw new Error(stryMutAct_9fa48("36464") ? "" : (stryCov_9fa48("36464"), '[[error:invalid-data]]'));
      }
    }
    const [uidsInRoom] = await Promise.all(stryMutAct_9fa48("36465") ? [] : (stryCov_9fa48("36465"), [Messaging.getUidsInRoom(roomId, 0, stryMutAct_9fa48("36466") ? +1 : (stryCov_9fa48("36466"), -1)), Messaging.markRead(socket.uid, roomId)]));
    Messaging.pushUnreadCount(socket.uid);
    server.in(stryMutAct_9fa48("36467") ? `` : (stryCov_9fa48("36467"), `uid_${socket.uid}`)).emit(stryMutAct_9fa48("36468") ? "" : (stryCov_9fa48("36468"), 'event:chats.markedAsRead'), stryMutAct_9fa48("36469") ? {} : (stryCov_9fa48("36469"), {
      roomId: roomId
    }));
    if (stryMutAct_9fa48("36472") ? false : stryMutAct_9fa48("36471") ? true : stryMutAct_9fa48("36470") ? uidsInRoom.includes(String(socket.uid)) : (stryCov_9fa48("36470", "36471", "36472"), !uidsInRoom.includes(String(socket.uid)))) {
      if (stryMutAct_9fa48("36473")) {
        {}
      } else {
        stryCov_9fa48("36473");
        return;
      }
    }

    // Mark notification read
    const nids = stryMutAct_9fa48("36474") ? uidsInRoom.map(uid => `chat_${uid}_${roomId}`) : (stryCov_9fa48("36474"), uidsInRoom.filter(stryMutAct_9fa48("36475") ? () => undefined : (stryCov_9fa48("36475"), uid => stryMutAct_9fa48("36478") ? parseInt(uid, 10) === socket.uid : stryMutAct_9fa48("36477") ? false : stryMutAct_9fa48("36476") ? true : (stryCov_9fa48("36476", "36477", "36478"), parseInt(uid, 10) !== socket.uid))).map(stryMutAct_9fa48("36479") ? () => undefined : (stryCov_9fa48("36479"), uid => stryMutAct_9fa48("36480") ? `` : (stryCov_9fa48("36480"), `chat_${uid}_${roomId}`))));
    await notifications.markReadMultiple(nids, socket.uid);
    await user.notifications.pushCount(socket.uid);
  }
};
SocketModules.chats.markAllRead = async function (socket) {
  if (stryMutAct_9fa48("36481")) {
    {}
  } else {
    stryCov_9fa48("36481");
    await Messaging.markAllRead(socket.uid);
    Messaging.pushUnreadCount(socket.uid);
  }
};
SocketModules.chats.renameRoom = async function (socket, data) {
  if (stryMutAct_9fa48("36482")) {
    {}
  } else {
    stryCov_9fa48("36482");
    sockets.warnDeprecated(socket, stryMutAct_9fa48("36483") ? "" : (stryCov_9fa48("36483"), 'PUT /api/v3/chats/:roomId'));
    if (stryMutAct_9fa48("36486") ? (!data || !data.roomId) && !data.newName : stryMutAct_9fa48("36485") ? false : stryMutAct_9fa48("36484") ? true : (stryCov_9fa48("36484", "36485", "36486"), (stryMutAct_9fa48("36488") ? !data && !data.roomId : stryMutAct_9fa48("36487") ? false : (stryCov_9fa48("36487", "36488"), (stryMutAct_9fa48("36489") ? data : (stryCov_9fa48("36489"), !data)) || (stryMutAct_9fa48("36490") ? data.roomId : (stryCov_9fa48("36490"), !data.roomId)))) || (stryMutAct_9fa48("36491") ? data.newName : (stryCov_9fa48("36491"), !data.newName)))) {
      if (stryMutAct_9fa48("36492")) {
        {}
      } else {
        stryCov_9fa48("36492");
        throw new Error(stryMutAct_9fa48("36493") ? "" : (stryCov_9fa48("36493"), '[[error:invalid-data]]'));
      }
    }
    data.name = data.newName;
    delete data.newName;
    await api.chats.rename(socket, data);
  }
};
SocketModules.chats.getRecentChats = async function (socket, data) {
  if (stryMutAct_9fa48("36494")) {
    {}
  } else {
    stryCov_9fa48("36494");
    if (stryMutAct_9fa48("36497") ? (!data || !utils.isNumber(data.after)) && !utils.isNumber(data.uid) : stryMutAct_9fa48("36496") ? false : stryMutAct_9fa48("36495") ? true : (stryCov_9fa48("36495", "36496", "36497"), (stryMutAct_9fa48("36499") ? !data && !utils.isNumber(data.after) : stryMutAct_9fa48("36498") ? false : (stryCov_9fa48("36498", "36499"), (stryMutAct_9fa48("36500") ? data : (stryCov_9fa48("36500"), !data)) || (stryMutAct_9fa48("36501") ? utils.isNumber(data.after) : (stryCov_9fa48("36501"), !utils.isNumber(data.after))))) || (stryMutAct_9fa48("36502") ? utils.isNumber(data.uid) : (stryCov_9fa48("36502"), !utils.isNumber(data.uid))))) {
      if (stryMutAct_9fa48("36503")) {
        {}
      } else {
        stryCov_9fa48("36503");
        throw new Error(stryMutAct_9fa48("36504") ? "" : (stryCov_9fa48("36504"), '[[error:invalid-data]]'));
      }
    }
    const start = parseInt(data.after, 10);
    const stop = stryMutAct_9fa48("36505") ? start - 9 : (stryCov_9fa48("36505"), start + 9);
    return await Messaging.getRecentChats(socket.uid, data.uid, start, stop);
  }
};
SocketModules.chats.hasPrivateChat = async function (socket, uid) {
  if (stryMutAct_9fa48("36506")) {
    {}
  } else {
    stryCov_9fa48("36506");
    if (stryMutAct_9fa48("36509") ? socket.uid <= 0 && uid <= 0 : stryMutAct_9fa48("36508") ? false : stryMutAct_9fa48("36507") ? true : (stryCov_9fa48("36507", "36508", "36509"), (stryMutAct_9fa48("36512") ? socket.uid > 0 : stryMutAct_9fa48("36511") ? socket.uid < 0 : stryMutAct_9fa48("36510") ? false : (stryCov_9fa48("36510", "36511", "36512"), socket.uid <= 0)) || (stryMutAct_9fa48("36515") ? uid > 0 : stryMutAct_9fa48("36514") ? uid < 0 : stryMutAct_9fa48("36513") ? false : (stryCov_9fa48("36513", "36514", "36515"), uid <= 0)))) {
      if (stryMutAct_9fa48("36516")) {
        {}
      } else {
        stryCov_9fa48("36516");
        throw new Error(stryMutAct_9fa48("36517") ? "" : (stryCov_9fa48("36517"), '[[error:invalid-data]]'));
      }
    }
    return await Messaging.hasPrivateChat(socket.uid, uid);
  }
};
SocketModules.chats.getMessages = async function (socket, data) {
  if (stryMutAct_9fa48("36518")) {
    {}
  } else {
    stryCov_9fa48("36518");
    sockets.warnDeprecated(socket, stryMutAct_9fa48("36519") ? "" : (stryCov_9fa48("36519"), 'GET /api/v3/chats/:roomId/messages'));
    if (stryMutAct_9fa48("36522") ? (!socket.uid || !data || !data.uid) && !data.roomId : stryMutAct_9fa48("36521") ? false : stryMutAct_9fa48("36520") ? true : (stryCov_9fa48("36520", "36521", "36522"), (stryMutAct_9fa48("36524") ? (!socket.uid || !data) && !data.uid : stryMutAct_9fa48("36523") ? false : (stryCov_9fa48("36523", "36524"), (stryMutAct_9fa48("36526") ? !socket.uid && !data : stryMutAct_9fa48("36525") ? false : (stryCov_9fa48("36525", "36526"), (stryMutAct_9fa48("36527") ? socket.uid : (stryCov_9fa48("36527"), !socket.uid)) || (stryMutAct_9fa48("36528") ? data : (stryCov_9fa48("36528"), !data)))) || (stryMutAct_9fa48("36529") ? data.uid : (stryCov_9fa48("36529"), !data.uid)))) || (stryMutAct_9fa48("36530") ? data.roomId : (stryCov_9fa48("36530"), !data.roomId)))) {
      if (stryMutAct_9fa48("36531")) {
        {}
      } else {
        stryCov_9fa48("36531");
        throw new Error(stryMutAct_9fa48("36532") ? "" : (stryCov_9fa48("36532"), '[[error:invalid-data]]'));
      }
    }
    return await Messaging.getMessages(stryMutAct_9fa48("36533") ? {} : (stryCov_9fa48("36533"), {
      callerUid: socket.uid,
      uid: data.uid,
      roomId: data.roomId,
      start: stryMutAct_9fa48("36536") ? parseInt(data.start, 10) && 0 : stryMutAct_9fa48("36535") ? false : stryMutAct_9fa48("36534") ? true : (stryCov_9fa48("36534", "36535", "36536"), parseInt(data.start, 10) || 0),
      count: 50
    }));
  }
};
SocketModules.chats.getIP = async function (socket, mid) {
  if (stryMutAct_9fa48("36537")) {
    {}
  } else {
    stryCov_9fa48("36537");
    const allowed = await privileges.global.can(stryMutAct_9fa48("36538") ? "" : (stryCov_9fa48("36538"), 'view:users:info'), socket.uid);
    if (stryMutAct_9fa48("36541") ? false : stryMutAct_9fa48("36540") ? true : stryMutAct_9fa48("36539") ? allowed : (stryCov_9fa48("36539", "36540", "36541"), !allowed)) {
      if (stryMutAct_9fa48("36542")) {
        {}
      } else {
        stryCov_9fa48("36542");
        throw new Error(stryMutAct_9fa48("36543") ? "" : (stryCov_9fa48("36543"), '[[error:no-privilege]]'));
      }
    }
    return await Messaging.getMessageField(mid, stryMutAct_9fa48("36544") ? "" : (stryCov_9fa48("36544"), 'ip'));
  }
};
require('../promisify')(SocketModules);