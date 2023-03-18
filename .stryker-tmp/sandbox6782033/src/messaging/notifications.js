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
const winston = require('winston');
const user = require('../user');
const notifications = require('../notifications');
const sockets = require('../socket.io');
const plugins = require('../plugins');
const meta = require('../meta');
module.exports = function (Messaging) {
  if (stryMutAct_9fa48("22851")) {
    {}
  } else {
    stryCov_9fa48("22851");
    Messaging.notifyQueue = {}; // Only used to notify a user of a new chat message, see Messaging.notifyUser

    Messaging.notifyUsersInRoom = async (fromUid, roomId, messageObj) => {
      if (stryMutAct_9fa48("22852")) {
        {}
      } else {
        stryCov_9fa48("22852");
        let uids = await Messaging.getUidsInRoom(roomId, 0, stryMutAct_9fa48("22853") ? +1 : (stryCov_9fa48("22853"), -1));
        uids = await user.blocks.filterUids(fromUid, uids);
        let data = stryMutAct_9fa48("22854") ? {} : (stryCov_9fa48("22854"), {
          roomId: roomId,
          fromUid: fromUid,
          message: messageObj,
          uids: uids
        });
        data = await plugins.hooks.fire(stryMutAct_9fa48("22855") ? "" : (stryCov_9fa48("22855"), 'filter:messaging.notify'), data);
        if (stryMutAct_9fa48("22858") ? (!data || !data.uids) && !data.uids.length : stryMutAct_9fa48("22857") ? false : stryMutAct_9fa48("22856") ? true : (stryCov_9fa48("22856", "22857", "22858"), (stryMutAct_9fa48("22860") ? !data && !data.uids : stryMutAct_9fa48("22859") ? false : (stryCov_9fa48("22859", "22860"), (stryMutAct_9fa48("22861") ? data : (stryCov_9fa48("22861"), !data)) || (stryMutAct_9fa48("22862") ? data.uids : (stryCov_9fa48("22862"), !data.uids)))) || (stryMutAct_9fa48("22863") ? data.uids.length : (stryCov_9fa48("22863"), !data.uids.length)))) {
          if (stryMutAct_9fa48("22864")) {
            {}
          } else {
            stryCov_9fa48("22864");
            return;
          }
        }
        uids = data.uids;
        uids.forEach(uid => {
          if (stryMutAct_9fa48("22865")) {
            {}
          } else {
            stryCov_9fa48("22865");
            data.self = (stryMutAct_9fa48("22868") ? parseInt(uid, 10) !== parseInt(fromUid, 10) : stryMutAct_9fa48("22867") ? false : stryMutAct_9fa48("22866") ? true : (stryCov_9fa48("22866", "22867", "22868"), parseInt(uid, 10) === parseInt(fromUid, 10))) ? 1 : 0;
            Messaging.pushUnreadCount(uid);
            sockets.in(stryMutAct_9fa48("22869") ? `` : (stryCov_9fa48("22869"), `uid_${uid}`)).emit(stryMutAct_9fa48("22870") ? "" : (stryCov_9fa48("22870"), 'event:chats.receive'), data);
          }
        });
        if (stryMutAct_9fa48("22872") ? false : stryMutAct_9fa48("22871") ? true : (stryCov_9fa48("22871", "22872"), messageObj.system)) {
          if (stryMutAct_9fa48("22873")) {
            {}
          } else {
            stryCov_9fa48("22873");
            return;
          }
        }
        // Delayed notifications
        let queueObj = Messaging.notifyQueue[stryMutAct_9fa48("22874") ? `` : (stryCov_9fa48("22874"), `${fromUid}:${roomId}`)];
        if (stryMutAct_9fa48("22876") ? false : stryMutAct_9fa48("22875") ? true : (stryCov_9fa48("22875", "22876"), queueObj)) {
          if (stryMutAct_9fa48("22877")) {
            {}
          } else {
            stryCov_9fa48("22877");
            queueObj.message.content += stryMutAct_9fa48("22878") ? `` : (stryCov_9fa48("22878"), `\n${messageObj.content}`);
            clearTimeout(queueObj.timeout);
          }
        } else {
          if (stryMutAct_9fa48("22879")) {
            {}
          } else {
            stryCov_9fa48("22879");
            queueObj = stryMutAct_9fa48("22880") ? {} : (stryCov_9fa48("22880"), {
              message: messageObj
            });
            Messaging.notifyQueue[stryMutAct_9fa48("22881") ? `` : (stryCov_9fa48("22881"), `${fromUid}:${roomId}`)] = queueObj;
          }
        }
        queueObj.timeout = setTimeout(async () => {
          if (stryMutAct_9fa48("22882")) {
            {}
          } else {
            stryCov_9fa48("22882");
            try {
              if (stryMutAct_9fa48("22883")) {
                {}
              } else {
                stryCov_9fa48("22883");
                await sendNotifications(fromUid, uids, roomId, queueObj.message);
              }
            } catch (err) {
              if (stryMutAct_9fa48("22884")) {
                {}
              } else {
                stryCov_9fa48("22884");
                winston.error(stryMutAct_9fa48("22885") ? `` : (stryCov_9fa48("22885"), `[messaging/notifications] Unabled to send notification\n${err.stack}`));
              }
            }
          }
        }, stryMutAct_9fa48("22886") ? meta.config.notificationSendDelay / 1000 : (stryCov_9fa48("22886"), meta.config.notificationSendDelay * 1000));
      }
    };
    async function sendNotifications(fromuid, uids, roomId, messageObj) {
      if (stryMutAct_9fa48("22887")) {
        {}
      } else {
        stryCov_9fa48("22887");
        const isOnline = await user.isOnline(uids);
        uids = stryMutAct_9fa48("22888") ? uids : (stryCov_9fa48("22888"), uids.filter(stryMutAct_9fa48("22889") ? () => undefined : (stryCov_9fa48("22889"), (uid, index) => stryMutAct_9fa48("22892") ? !isOnline[index] || parseInt(fromuid, 10) !== parseInt(uid, 10) : stryMutAct_9fa48("22891") ? false : stryMutAct_9fa48("22890") ? true : (stryCov_9fa48("22890", "22891", "22892"), (stryMutAct_9fa48("22893") ? isOnline[index] : (stryCov_9fa48("22893"), !isOnline[index])) && (stryMutAct_9fa48("22895") ? parseInt(fromuid, 10) === parseInt(uid, 10) : stryMutAct_9fa48("22894") ? true : (stryCov_9fa48("22894", "22895"), parseInt(fromuid, 10) !== parseInt(uid, 10)))))));
        if (stryMutAct_9fa48("22898") ? false : stryMutAct_9fa48("22897") ? true : stryMutAct_9fa48("22896") ? uids.length : (stryCov_9fa48("22896", "22897", "22898"), !uids.length)) {
          if (stryMutAct_9fa48("22899")) {
            {}
          } else {
            stryCov_9fa48("22899");
            return;
          }
        }
        const {
          displayname
        } = messageObj.fromUser;
        const isGroupChat = await Messaging.isGroupChat(roomId);
        const notification = await notifications.create(stryMutAct_9fa48("22900") ? {} : (stryCov_9fa48("22900"), {
          type: isGroupChat ? stryMutAct_9fa48("22901") ? "" : (stryCov_9fa48("22901"), 'new-group-chat') : stryMutAct_9fa48("22902") ? "" : (stryCov_9fa48("22902"), 'new-chat'),
          subject: stryMutAct_9fa48("22903") ? `` : (stryCov_9fa48("22903"), `[[email:notif.chat.subject, ${displayname}]]`),
          bodyShort: stryMutAct_9fa48("22904") ? `` : (stryCov_9fa48("22904"), `[[notifications:new_message_from, ${displayname}]]`),
          bodyLong: messageObj.content,
          nid: stryMutAct_9fa48("22905") ? `` : (stryCov_9fa48("22905"), `chat_${fromuid}_${roomId}`),
          from: fromuid,
          path: stryMutAct_9fa48("22906") ? `` : (stryCov_9fa48("22906"), `/chats/${messageObj.roomId}`)
        }));
        delete Messaging.notifyQueue[stryMutAct_9fa48("22907") ? `` : (stryCov_9fa48("22907"), `${fromuid}:${roomId}`)];
        notifications.push(notification, uids);
      }
    }
  }
};