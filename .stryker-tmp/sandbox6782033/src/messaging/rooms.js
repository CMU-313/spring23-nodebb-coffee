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
const db = require('../database');
const user = require('../user');
const plugins = require('../plugins');
const privileges = require('../privileges');
const meta = require('../meta');
module.exports = function (Messaging) {
  if (stryMutAct_9fa48("22908")) {
    {}
  } else {
    stryCov_9fa48("22908");
    Messaging.getRoomData = async roomId => {
      if (stryMutAct_9fa48("22909")) {
        {}
      } else {
        stryCov_9fa48("22909");
        const data = await db.getObject(stryMutAct_9fa48("22910") ? `` : (stryCov_9fa48("22910"), `chat:room:${roomId}`));
        if (stryMutAct_9fa48("22913") ? false : stryMutAct_9fa48("22912") ? true : stryMutAct_9fa48("22911") ? data : (stryCov_9fa48("22911", "22912", "22913"), !data)) {
          if (stryMutAct_9fa48("22914")) {
            {}
          } else {
            stryCov_9fa48("22914");
            throw new Error(stryMutAct_9fa48("22915") ? "" : (stryCov_9fa48("22915"), '[[error:no-chat-room]]'));
          }
        }
        modifyRoomData(stryMutAct_9fa48("22916") ? [] : (stryCov_9fa48("22916"), [data]));
        return data;
      }
    };
    Messaging.getRoomsData = async roomIds => {
      if (stryMutAct_9fa48("22917")) {
        {}
      } else {
        stryCov_9fa48("22917");
        const roomData = await db.getObjects(roomIds.map(stryMutAct_9fa48("22918") ? () => undefined : (stryCov_9fa48("22918"), roomId => stryMutAct_9fa48("22919") ? `` : (stryCov_9fa48("22919"), `chat:room:${roomId}`))));
        modifyRoomData(roomData);
        return roomData;
      }
    };
    function modifyRoomData(rooms) {
      if (stryMutAct_9fa48("22920")) {
        {}
      } else {
        stryCov_9fa48("22920");
        rooms.forEach(data => {
          if (stryMutAct_9fa48("22921")) {
            {}
          } else {
            stryCov_9fa48("22921");
            if (stryMutAct_9fa48("22923") ? false : stryMutAct_9fa48("22922") ? true : (stryCov_9fa48("22922", "22923"), data)) {
              if (stryMutAct_9fa48("22924")) {
                {}
              } else {
                stryCov_9fa48("22924");
                data.roomName = stryMutAct_9fa48("22927") ? data.roomName && '' : stryMutAct_9fa48("22926") ? false : stryMutAct_9fa48("22925") ? true : (stryCov_9fa48("22925", "22926", "22927"), data.roomName || (stryMutAct_9fa48("22928") ? "Stryker was here!" : (stryCov_9fa48("22928"), '')));
                data.roomName = validator.escape(String(data.roomName));
                if (stryMutAct_9fa48("22930") ? false : stryMutAct_9fa48("22929") ? true : (stryCov_9fa48("22929", "22930"), data.hasOwnProperty(stryMutAct_9fa48("22931") ? "" : (stryCov_9fa48("22931"), 'groupChat')))) {
                  if (stryMutAct_9fa48("22932")) {
                    {}
                  } else {
                    stryCov_9fa48("22932");
                    data.groupChat = stryMutAct_9fa48("22935") ? parseInt(data.groupChat, 10) !== 1 : stryMutAct_9fa48("22934") ? false : stryMutAct_9fa48("22933") ? true : (stryCov_9fa48("22933", "22934", "22935"), parseInt(data.groupChat, 10) === 1);
                  }
                }
              }
            }
          }
        });
      }
    }
    Messaging.newRoom = async (uid, toUids) => {
      if (stryMutAct_9fa48("22936")) {
        {}
      } else {
        stryCov_9fa48("22936");
        const now = Date.now();
        const roomId = await db.incrObjectField(stryMutAct_9fa48("22937") ? "" : (stryCov_9fa48("22937"), 'global'), stryMutAct_9fa48("22938") ? "" : (stryCov_9fa48("22938"), 'nextChatRoomId'));
        const room = stryMutAct_9fa48("22939") ? {} : (stryCov_9fa48("22939"), {
          owner: uid,
          roomId: roomId
        });
        await Promise.all(stryMutAct_9fa48("22940") ? [] : (stryCov_9fa48("22940"), [db.setObject(stryMutAct_9fa48("22941") ? `` : (stryCov_9fa48("22941"), `chat:room:${roomId}`), room), db.sortedSetAdd(stryMutAct_9fa48("22942") ? `` : (stryCov_9fa48("22942"), `chat:room:${roomId}:uids`), now, uid)]));
        await Promise.all(stryMutAct_9fa48("22943") ? [] : (stryCov_9fa48("22943"), [Messaging.addUsersToRoom(uid, toUids, roomId), Messaging.addRoomToUsers(roomId, (stryMutAct_9fa48("22944") ? [] : (stryCov_9fa48("22944"), [uid])).concat(toUids), now)]));
        // chat owner should also get the user-join system message
        await Messaging.addSystemMessage(stryMutAct_9fa48("22945") ? "" : (stryCov_9fa48("22945"), 'user-join'), uid, roomId);
        return roomId;
      }
    };
    Messaging.isUserInRoom = async (uid, roomId) => {
      if (stryMutAct_9fa48("22946")) {
        {}
      } else {
        stryCov_9fa48("22946");
        const inRoom = await db.isSortedSetMember(stryMutAct_9fa48("22947") ? `` : (stryCov_9fa48("22947"), `chat:room:${roomId}:uids`), uid);
        const data = await plugins.hooks.fire(stryMutAct_9fa48("22948") ? "" : (stryCov_9fa48("22948"), 'filter:messaging.isUserInRoom'), stryMutAct_9fa48("22949") ? {} : (stryCov_9fa48("22949"), {
          uid: uid,
          roomId: roomId,
          inRoom: inRoom
        }));
        return data.inRoom;
      }
    };
    Messaging.roomExists = stryMutAct_9fa48("22950") ? () => undefined : (stryCov_9fa48("22950"), async roomId => db.exists(stryMutAct_9fa48("22951") ? `` : (stryCov_9fa48("22951"), `chat:room:${roomId}:uids`)));
    Messaging.getUserCountInRoom = stryMutAct_9fa48("22952") ? () => undefined : (stryCov_9fa48("22952"), async roomId => db.sortedSetCard(stryMutAct_9fa48("22953") ? `` : (stryCov_9fa48("22953"), `chat:room:${roomId}:uids`)));
    Messaging.isRoomOwner = async (uids, roomId) => {
      if (stryMutAct_9fa48("22954")) {
        {}
      } else {
        stryCov_9fa48("22954");
        const isArray = Array.isArray(uids);
        if (stryMutAct_9fa48("22957") ? false : stryMutAct_9fa48("22956") ? true : stryMutAct_9fa48("22955") ? isArray : (stryCov_9fa48("22955", "22956", "22957"), !isArray)) {
          if (stryMutAct_9fa48("22958")) {
            {}
          } else {
            stryCov_9fa48("22958");
            uids = stryMutAct_9fa48("22959") ? [] : (stryCov_9fa48("22959"), [uids]);
          }
        }
        const owner = await db.getObjectField(stryMutAct_9fa48("22960") ? `` : (stryCov_9fa48("22960"), `chat:room:${roomId}`), stryMutAct_9fa48("22961") ? "" : (stryCov_9fa48("22961"), 'owner'));
        const isOwners = uids.map(stryMutAct_9fa48("22962") ? () => undefined : (stryCov_9fa48("22962"), uid => stryMutAct_9fa48("22965") ? parseInt(uid, 10) !== parseInt(owner, 10) : stryMutAct_9fa48("22964") ? false : stryMutAct_9fa48("22963") ? true : (stryCov_9fa48("22963", "22964", "22965"), parseInt(uid, 10) === parseInt(owner, 10))));
        const result = await Promise.all(isOwners.map(async (isOwner, index) => {
          if (stryMutAct_9fa48("22966")) {
            {}
          } else {
            stryCov_9fa48("22966");
            const payload = await plugins.hooks.fire(stryMutAct_9fa48("22967") ? "" : (stryCov_9fa48("22967"), 'filter:messaging.isRoomOwner'), stryMutAct_9fa48("22968") ? {} : (stryCov_9fa48("22968"), {
              uid: uids[index],
              roomId,
              owner,
              isOwner
            }));
            return payload.isOwner;
          }
        }));
        return isArray ? result : result[0];
      }
    };
    Messaging.addUsersToRoom = async function (uid, uids, roomId) {
      if (stryMutAct_9fa48("22969")) {
        {}
      } else {
        stryCov_9fa48("22969");
        const inRoom = await Messaging.isUserInRoom(uid, roomId);
        const payload = await plugins.hooks.fire(stryMutAct_9fa48("22970") ? "" : (stryCov_9fa48("22970"), 'filter:messaging.addUsersToRoom'), stryMutAct_9fa48("22971") ? {} : (stryCov_9fa48("22971"), {
          uid,
          uids,
          roomId,
          inRoom
        }));
        if (stryMutAct_9fa48("22974") ? false : stryMutAct_9fa48("22973") ? true : stryMutAct_9fa48("22972") ? payload.inRoom : (stryCov_9fa48("22972", "22973", "22974"), !payload.inRoom)) {
          if (stryMutAct_9fa48("22975")) {
            {}
          } else {
            stryCov_9fa48("22975");
            throw new Error(stryMutAct_9fa48("22976") ? "" : (stryCov_9fa48("22976"), '[[error:cant-add-users-to-chat-room]]'));
          }
        }
        const now = Date.now();
        const timestamps = payload.uids.map(stryMutAct_9fa48("22977") ? () => undefined : (stryCov_9fa48("22977"), () => now));
        await db.sortedSetAdd(stryMutAct_9fa48("22978") ? `` : (stryCov_9fa48("22978"), `chat:room:${payload.roomId}:uids`), timestamps, payload.uids);
        await updateGroupChatField(stryMutAct_9fa48("22979") ? [] : (stryCov_9fa48("22979"), [payload.roomId]));
        await Promise.all(payload.uids.map(stryMutAct_9fa48("22980") ? () => undefined : (stryCov_9fa48("22980"), uid => Messaging.addSystemMessage(stryMutAct_9fa48("22981") ? "" : (stryCov_9fa48("22981"), 'user-join'), uid, payload.roomId))));
      }
    };
    Messaging.removeUsersFromRoom = async (uid, uids, roomId) => {
      if (stryMutAct_9fa48("22982")) {
        {}
      } else {
        stryCov_9fa48("22982");
        const [isOwner, userCount] = await Promise.all(stryMutAct_9fa48("22983") ? [] : (stryCov_9fa48("22983"), [Messaging.isRoomOwner(uid, roomId), Messaging.getUserCountInRoom(roomId)]));
        const payload = await plugins.hooks.fire(stryMutAct_9fa48("22984") ? "" : (stryCov_9fa48("22984"), 'filter:messaging.removeUsersFromRoom'), stryMutAct_9fa48("22985") ? {} : (stryCov_9fa48("22985"), {
          uid,
          uids,
          roomId,
          isOwner,
          userCount
        }));
        if (stryMutAct_9fa48("22988") ? false : stryMutAct_9fa48("22987") ? true : stryMutAct_9fa48("22986") ? payload.isOwner : (stryCov_9fa48("22986", "22987", "22988"), !payload.isOwner)) {
          if (stryMutAct_9fa48("22989")) {
            {}
          } else {
            stryCov_9fa48("22989");
            throw new Error(stryMutAct_9fa48("22990") ? "" : (stryCov_9fa48("22990"), '[[error:cant-remove-users-from-chat-room]]'));
          }
        }
        await Messaging.leaveRoom(payload.uids, payload.roomId);
      }
    };
    Messaging.isGroupChat = async function (roomId) {
      if (stryMutAct_9fa48("22991")) {
        {}
      } else {
        stryCov_9fa48("22991");
        return (await Messaging.getRoomData(roomId)).groupChat;
      }
    };
    async function updateGroupChatField(roomIds) {
      if (stryMutAct_9fa48("22992")) {
        {}
      } else {
        stryCov_9fa48("22992");
        const userCounts = await db.sortedSetsCard(roomIds.map(stryMutAct_9fa48("22993") ? () => undefined : (stryCov_9fa48("22993"), roomId => stryMutAct_9fa48("22994") ? `` : (stryCov_9fa48("22994"), `chat:room:${roomId}:uids`))));
        const groupChats = stryMutAct_9fa48("22995") ? roomIds : (stryCov_9fa48("22995"), roomIds.filter(stryMutAct_9fa48("22996") ? () => undefined : (stryCov_9fa48("22996"), (roomId, index) => stryMutAct_9fa48("23000") ? userCounts[index] <= 2 : stryMutAct_9fa48("22999") ? userCounts[index] >= 2 : stryMutAct_9fa48("22998") ? false : stryMutAct_9fa48("22997") ? true : (stryCov_9fa48("22997", "22998", "22999", "23000"), userCounts[index] > 2))));
        const privateChats = stryMutAct_9fa48("23001") ? roomIds : (stryCov_9fa48("23001"), roomIds.filter(stryMutAct_9fa48("23002") ? () => undefined : (stryCov_9fa48("23002"), (roomId, index) => stryMutAct_9fa48("23006") ? userCounts[index] > 2 : stryMutAct_9fa48("23005") ? userCounts[index] < 2 : stryMutAct_9fa48("23004") ? false : stryMutAct_9fa48("23003") ? true : (stryCov_9fa48("23003", "23004", "23005", "23006"), userCounts[index] <= 2))));
        await db.setObjectBulk(stryMutAct_9fa48("23007") ? [] : (stryCov_9fa48("23007"), [...groupChats.map(stryMutAct_9fa48("23008") ? () => undefined : (stryCov_9fa48("23008"), id => stryMutAct_9fa48("23009") ? [] : (stryCov_9fa48("23009"), [stryMutAct_9fa48("23010") ? `` : (stryCov_9fa48("23010"), `chat:room:${id}`), stryMutAct_9fa48("23011") ? {} : (stryCov_9fa48("23011"), {
          groupChat: 1
        })]))), ...privateChats.map(stryMutAct_9fa48("23012") ? () => undefined : (stryCov_9fa48("23012"), id => stryMutAct_9fa48("23013") ? [] : (stryCov_9fa48("23013"), [stryMutAct_9fa48("23014") ? `` : (stryCov_9fa48("23014"), `chat:room:${id}`), stryMutAct_9fa48("23015") ? {} : (stryCov_9fa48("23015"), {
          groupChat: 0
        })])))]));
      }
    }
    Messaging.leaveRoom = async (uids, roomId) => {
      if (stryMutAct_9fa48("23016")) {
        {}
      } else {
        stryCov_9fa48("23016");
        const isInRoom = await Promise.all(uids.map(stryMutAct_9fa48("23017") ? () => undefined : (stryCov_9fa48("23017"), uid => Messaging.isUserInRoom(uid, roomId))));
        uids = stryMutAct_9fa48("23018") ? uids : (stryCov_9fa48("23018"), uids.filter(stryMutAct_9fa48("23019") ? () => undefined : (stryCov_9fa48("23019"), (uid, index) => isInRoom[index])));
        const keys = uids.map(stryMutAct_9fa48("23020") ? () => undefined : (stryCov_9fa48("23020"), uid => stryMutAct_9fa48("23021") ? `` : (stryCov_9fa48("23021"), `uid:${uid}:chat:rooms`))).concat(uids.map(stryMutAct_9fa48("23022") ? () => undefined : (stryCov_9fa48("23022"), uid => stryMutAct_9fa48("23023") ? `` : (stryCov_9fa48("23023"), `uid:${uid}:chat:rooms:unread`))));
        await Promise.all(stryMutAct_9fa48("23024") ? [] : (stryCov_9fa48("23024"), [db.sortedSetRemove(stryMutAct_9fa48("23025") ? `` : (stryCov_9fa48("23025"), `chat:room:${roomId}:uids`), uids), db.sortedSetsRemove(keys, roomId)]));
        await Promise.all(uids.map(stryMutAct_9fa48("23026") ? () => undefined : (stryCov_9fa48("23026"), uid => Messaging.addSystemMessage(stryMutAct_9fa48("23027") ? "" : (stryCov_9fa48("23027"), 'user-leave'), uid, roomId))));
        await updateOwner(roomId);
        await updateGroupChatField(stryMutAct_9fa48("23028") ? [] : (stryCov_9fa48("23028"), [roomId]));
      }
    };
    Messaging.leaveRooms = async (uid, roomIds) => {
      if (stryMutAct_9fa48("23029")) {
        {}
      } else {
        stryCov_9fa48("23029");
        const isInRoom = await Promise.all(roomIds.map(stryMutAct_9fa48("23030") ? () => undefined : (stryCov_9fa48("23030"), roomId => Messaging.isUserInRoom(uid, roomId))));
        roomIds = stryMutAct_9fa48("23031") ? roomIds : (stryCov_9fa48("23031"), roomIds.filter(stryMutAct_9fa48("23032") ? () => undefined : (stryCov_9fa48("23032"), (roomId, index) => isInRoom[index])));
        const roomKeys = roomIds.map(stryMutAct_9fa48("23033") ? () => undefined : (stryCov_9fa48("23033"), roomId => stryMutAct_9fa48("23034") ? `` : (stryCov_9fa48("23034"), `chat:room:${roomId}:uids`)));
        await Promise.all(stryMutAct_9fa48("23035") ? [] : (stryCov_9fa48("23035"), [db.sortedSetsRemove(roomKeys, uid), db.sortedSetRemove(stryMutAct_9fa48("23036") ? [] : (stryCov_9fa48("23036"), [stryMutAct_9fa48("23037") ? `` : (stryCov_9fa48("23037"), `uid:${uid}:chat:rooms`), stryMutAct_9fa48("23038") ? `` : (stryCov_9fa48("23038"), `uid:${uid}:chat:rooms:unread`)]), roomIds)]));
        await Promise.all(roomIds.map(stryMutAct_9fa48("23039") ? () => undefined : (stryCov_9fa48("23039"), roomId => updateOwner(roomId))).concat(roomIds.map(stryMutAct_9fa48("23040") ? () => undefined : (stryCov_9fa48("23040"), roomId => Messaging.addSystemMessage(stryMutAct_9fa48("23041") ? "" : (stryCov_9fa48("23041"), 'user-leave'), uid, roomId)))));
        await updateGroupChatField(roomIds);
      }
    };
    async function updateOwner(roomId) {
      if (stryMutAct_9fa48("23042")) {
        {}
      } else {
        stryCov_9fa48("23042");
        const uids = await db.getSortedSetRange(stryMutAct_9fa48("23043") ? `` : (stryCov_9fa48("23043"), `chat:room:${roomId}:uids`), 0, 0);
        const newOwner = stryMutAct_9fa48("23046") ? uids[0] && 0 : stryMutAct_9fa48("23045") ? false : stryMutAct_9fa48("23044") ? true : (stryCov_9fa48("23044", "23045", "23046"), uids[0] || 0);
        await db.setObjectField(stryMutAct_9fa48("23047") ? `` : (stryCov_9fa48("23047"), `chat:room:${roomId}`), stryMutAct_9fa48("23048") ? "" : (stryCov_9fa48("23048"), 'owner'), newOwner);
      }
    }
    Messaging.getUidsInRoom = stryMutAct_9fa48("23049") ? () => undefined : (stryCov_9fa48("23049"), async (roomId, start, stop) => db.getSortedSetRevRange(stryMutAct_9fa48("23050") ? `` : (stryCov_9fa48("23050"), `chat:room:${roomId}:uids`), start, stop));
    Messaging.getUsersInRoom = async (roomId, start, stop) => {
      if (stryMutAct_9fa48("23051")) {
        {}
      } else {
        stryCov_9fa48("23051");
        const uids = await Messaging.getUidsInRoom(roomId, start, stop);
        const [users, isOwners] = await Promise.all(stryMutAct_9fa48("23052") ? [] : (stryCov_9fa48("23052"), [user.getUsersFields(uids, stryMutAct_9fa48("23053") ? [] : (stryCov_9fa48("23053"), [stryMutAct_9fa48("23054") ? "" : (stryCov_9fa48("23054"), 'uid'), stryMutAct_9fa48("23055") ? "" : (stryCov_9fa48("23055"), 'username'), stryMutAct_9fa48("23056") ? "" : (stryCov_9fa48("23056"), 'picture'), stryMutAct_9fa48("23057") ? "" : (stryCov_9fa48("23057"), 'status')])), Messaging.isRoomOwner(uids, roomId)]));
        return users.map((user, index) => {
          if (stryMutAct_9fa48("23058")) {
            {}
          } else {
            stryCov_9fa48("23058");
            user.isOwner = isOwners[index];
            return user;
          }
        });
      }
    };
    Messaging.renameRoom = async function (uid, roomId, newName) {
      if (stryMutAct_9fa48("23059")) {
        {}
      } else {
        stryCov_9fa48("23059");
        if (stryMutAct_9fa48("23062") ? false : stryMutAct_9fa48("23061") ? true : stryMutAct_9fa48("23060") ? newName : (stryCov_9fa48("23060", "23061", "23062"), !newName)) {
          if (stryMutAct_9fa48("23063")) {
            {}
          } else {
            stryCov_9fa48("23063");
            throw new Error(stryMutAct_9fa48("23064") ? "" : (stryCov_9fa48("23064"), '[[error:invalid-data]]'));
          }
        }
        newName = stryMutAct_9fa48("23065") ? newName : (stryCov_9fa48("23065"), newName.trim());
        if (stryMutAct_9fa48("23069") ? newName.length <= 75 : stryMutAct_9fa48("23068") ? newName.length >= 75 : stryMutAct_9fa48("23067") ? false : stryMutAct_9fa48("23066") ? true : (stryCov_9fa48("23066", "23067", "23068", "23069"), newName.length > 75)) {
          if (stryMutAct_9fa48("23070")) {
            {}
          } else {
            stryCov_9fa48("23070");
            throw new Error(stryMutAct_9fa48("23071") ? "" : (stryCov_9fa48("23071"), '[[error:chat-room-name-too-long]]'));
          }
        }
        const payload = await plugins.hooks.fire(stryMutAct_9fa48("23072") ? "" : (stryCov_9fa48("23072"), 'filter:chat.renameRoom'), stryMutAct_9fa48("23073") ? {} : (stryCov_9fa48("23073"), {
          uid: uid,
          roomId: roomId,
          newName: newName
        }));
        const isOwner = await Messaging.isRoomOwner(payload.uid, payload.roomId);
        if (stryMutAct_9fa48("23076") ? false : stryMutAct_9fa48("23075") ? true : stryMutAct_9fa48("23074") ? isOwner : (stryCov_9fa48("23074", "23075", "23076"), !isOwner)) {
          if (stryMutAct_9fa48("23077")) {
            {}
          } else {
            stryCov_9fa48("23077");
            throw new Error(stryMutAct_9fa48("23078") ? "" : (stryCov_9fa48("23078"), '[[error:no-privileges]]'));
          }
        }
        await db.setObjectField(stryMutAct_9fa48("23079") ? `` : (stryCov_9fa48("23079"), `chat:room:${payload.roomId}`), stryMutAct_9fa48("23080") ? "" : (stryCov_9fa48("23080"), 'roomName'), payload.newName);
        await Messaging.addSystemMessage(stryMutAct_9fa48("23081") ? `` : (stryCov_9fa48("23081"), `room-rename, ${payload.newName.replace(stryMutAct_9fa48("23082") ? "" : (stryCov_9fa48("23082"), ','), stryMutAct_9fa48("23083") ? "" : (stryCov_9fa48("23083"), '&#44;'))}`), payload.uid, payload.roomId);
        plugins.hooks.fire(stryMutAct_9fa48("23084") ? "" : (stryCov_9fa48("23084"), 'action:chat.renameRoom'), stryMutAct_9fa48("23085") ? {} : (stryCov_9fa48("23085"), {
          roomId: payload.roomId,
          newName: payload.newName
        }));
      }
    };
    Messaging.canReply = async (roomId, uid) => {
      if (stryMutAct_9fa48("23086")) {
        {}
      } else {
        stryCov_9fa48("23086");
        const inRoom = await db.isSortedSetMember(stryMutAct_9fa48("23087") ? `` : (stryCov_9fa48("23087"), `chat:room:${roomId}:uids`), uid);
        const data = await plugins.hooks.fire(stryMutAct_9fa48("23088") ? "" : (stryCov_9fa48("23088"), 'filter:messaging.canReply'), stryMutAct_9fa48("23089") ? {} : (stryCov_9fa48("23089"), {
          uid: uid,
          roomId: roomId,
          inRoom: inRoom,
          canReply: inRoom
        }));
        return data.canReply;
      }
    };
    Messaging.loadRoom = async (uid, data) => {
      if (stryMutAct_9fa48("23090")) {
        {}
      } else {
        stryCov_9fa48("23090");
        const canChat = await privileges.global.can(stryMutAct_9fa48("23091") ? "" : (stryCov_9fa48("23091"), 'chat'), uid);
        if (stryMutAct_9fa48("23094") ? false : stryMutAct_9fa48("23093") ? true : stryMutAct_9fa48("23092") ? canChat : (stryCov_9fa48("23092", "23093", "23094"), !canChat)) {
          if (stryMutAct_9fa48("23095")) {
            {}
          } else {
            stryCov_9fa48("23095");
            throw new Error(stryMutAct_9fa48("23096") ? "" : (stryCov_9fa48("23096"), '[[error:no-privileges]]'));
          }
        }
        const inRoom = await Messaging.isUserInRoom(uid, data.roomId);
        if (stryMutAct_9fa48("23099") ? false : stryMutAct_9fa48("23098") ? true : stryMutAct_9fa48("23097") ? inRoom : (stryCov_9fa48("23097", "23098", "23099"), !inRoom)) {
          if (stryMutAct_9fa48("23100")) {
            {}
          } else {
            stryCov_9fa48("23100");
            return null;
          }
        }
        const [room, canReply, users, messages, isAdminOrGlobalMod] = await Promise.all(stryMutAct_9fa48("23101") ? [] : (stryCov_9fa48("23101"), [Messaging.getRoomData(data.roomId), Messaging.canReply(data.roomId, uid), Messaging.getUsersInRoom(data.roomId, 0, stryMutAct_9fa48("23102") ? +1 : (stryCov_9fa48("23102"), -1)), Messaging.getMessages(stryMutAct_9fa48("23103") ? {} : (stryCov_9fa48("23103"), {
          callerUid: uid,
          uid: stryMutAct_9fa48("23106") ? data.uid && uid : stryMutAct_9fa48("23105") ? false : stryMutAct_9fa48("23104") ? true : (stryCov_9fa48("23104", "23105", "23106"), data.uid || uid),
          roomId: data.roomId,
          isNew: stryMutAct_9fa48("23107") ? true : (stryCov_9fa48("23107"), false)
        })), user.isAdminOrGlobalMod(uid)]));
        room.messages = messages;
        room.isOwner = await Messaging.isRoomOwner(uid, room.roomId);
        room.users = stryMutAct_9fa48("23108") ? users : (stryCov_9fa48("23108"), users.filter(stryMutAct_9fa48("23109") ? () => undefined : (stryCov_9fa48("23109"), user => stryMutAct_9fa48("23112") ? user && parseInt(user.uid, 10) || parseInt(user.uid, 10) !== parseInt(uid, 10) : stryMutAct_9fa48("23111") ? false : stryMutAct_9fa48("23110") ? true : (stryCov_9fa48("23110", "23111", "23112"), (stryMutAct_9fa48("23114") ? user || parseInt(user.uid, 10) : stryMutAct_9fa48("23113") ? true : (stryCov_9fa48("23113", "23114"), user && parseInt(user.uid, 10))) && (stryMutAct_9fa48("23116") ? parseInt(user.uid, 10) === parseInt(uid, 10) : stryMutAct_9fa48("23115") ? true : (stryCov_9fa48("23115", "23116"), parseInt(user.uid, 10) !== parseInt(uid, 10)))))));
        room.canReply = canReply;
        room.groupChat = room.hasOwnProperty(stryMutAct_9fa48("23117") ? "" : (stryCov_9fa48("23117"), 'groupChat')) ? room.groupChat : stryMutAct_9fa48("23121") ? users.length <= 2 : stryMutAct_9fa48("23120") ? users.length >= 2 : stryMutAct_9fa48("23119") ? false : stryMutAct_9fa48("23118") ? true : (stryCov_9fa48("23118", "23119", "23120", "23121"), users.length > 2);
        room.usernames = Messaging.generateUsernames(users, uid);
        room.maximumUsersInChatRoom = meta.config.maximumUsersInChatRoom;
        room.maximumChatMessageLength = meta.config.maximumChatMessageLength;
        room.showUserInput = stryMutAct_9fa48("23124") ? !room.maximumUsersInChatRoom && room.maximumUsersInChatRoom > 2 : stryMutAct_9fa48("23123") ? false : stryMutAct_9fa48("23122") ? true : (stryCov_9fa48("23122", "23123", "23124"), (stryMutAct_9fa48("23125") ? room.maximumUsersInChatRoom : (stryCov_9fa48("23125"), !room.maximumUsersInChatRoom)) || (stryMutAct_9fa48("23128") ? room.maximumUsersInChatRoom <= 2 : stryMutAct_9fa48("23127") ? room.maximumUsersInChatRoom >= 2 : stryMutAct_9fa48("23126") ? false : (stryCov_9fa48("23126", "23127", "23128"), room.maximumUsersInChatRoom > 2)));
        room.isAdminOrGlobalMod = isAdminOrGlobalMod;
        const payload = await plugins.hooks.fire(stryMutAct_9fa48("23129") ? "" : (stryCov_9fa48("23129"), 'filter:messaging.loadRoom'), stryMutAct_9fa48("23130") ? {} : (stryCov_9fa48("23130"), {
          uid,
          data,
          room
        }));
        return payload.room;
      }
    };
  }
};