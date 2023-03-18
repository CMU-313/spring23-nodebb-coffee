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
const meta = require('../meta');
const user = require('../user');
const plugins = require('../plugins');
const privileges = require('../privileges');
const sockets = require('../socket.io');
module.exports = function (Messaging) {
  if (stryMutAct_9fa48("22457")) {
    {}
  } else {
    stryCov_9fa48("22457");
    Messaging.editMessage = async (uid, mid, roomId, content) => {
      if (stryMutAct_9fa48("22458")) {
        {}
      } else {
        stryCov_9fa48("22458");
        await Messaging.checkContent(content);
        const raw = await Messaging.getMessageField(mid, stryMutAct_9fa48("22459") ? "" : (stryCov_9fa48("22459"), 'content'));
        if (stryMutAct_9fa48("22462") ? raw !== content : stryMutAct_9fa48("22461") ? false : stryMutAct_9fa48("22460") ? true : (stryCov_9fa48("22460", "22461", "22462"), raw === content)) {
          if (stryMutAct_9fa48("22463")) {
            {}
          } else {
            stryCov_9fa48("22463");
            return;
          }
        }
        const payload = await plugins.hooks.fire(stryMutAct_9fa48("22464") ? "" : (stryCov_9fa48("22464"), 'filter:messaging.edit'), stryMutAct_9fa48("22465") ? {} : (stryCov_9fa48("22465"), {
          content: content,
          edited: Date.now()
        }));
        if (stryMutAct_9fa48("22468") ? false : stryMutAct_9fa48("22467") ? true : stryMutAct_9fa48("22466") ? String(payload.content).trim() : (stryCov_9fa48("22466", "22467", "22468"), !(stryMutAct_9fa48("22469") ? String(payload.content) : (stryCov_9fa48("22469"), String(payload.content).trim())))) {
          if (stryMutAct_9fa48("22470")) {
            {}
          } else {
            stryCov_9fa48("22470");
            throw new Error(stryMutAct_9fa48("22471") ? "" : (stryCov_9fa48("22471"), '[[error:invalid-chat-message]]'));
          }
        }
        await Messaging.setMessageFields(mid, payload);

        // Propagate this change to users in the room
        const [uids, messages] = await Promise.all(stryMutAct_9fa48("22472") ? [] : (stryCov_9fa48("22472"), [Messaging.getUidsInRoom(roomId, 0, stryMutAct_9fa48("22473") ? +1 : (stryCov_9fa48("22473"), -1)), Messaging.getMessagesData(stryMutAct_9fa48("22474") ? [] : (stryCov_9fa48("22474"), [mid]), uid, roomId, stryMutAct_9fa48("22475") ? false : (stryCov_9fa48("22475"), true))]));
        uids.forEach(uid => {
          if (stryMutAct_9fa48("22476")) {
            {}
          } else {
            stryCov_9fa48("22476");
            sockets.in(stryMutAct_9fa48("22477") ? `` : (stryCov_9fa48("22477"), `uid_${uid}`)).emit(stryMutAct_9fa48("22478") ? "" : (stryCov_9fa48("22478"), 'event:chats.edit'), stryMutAct_9fa48("22479") ? {} : (stryCov_9fa48("22479"), {
              messages: messages
            }));
          }
        });
      }
    };
    const canEditDelete = async (messageId, uid, type) => {
      if (stryMutAct_9fa48("22480")) {
        {}
      } else {
        stryCov_9fa48("22480");
        let durationConfig = stryMutAct_9fa48("22481") ? "Stryker was here!" : (stryCov_9fa48("22481"), '');
        if (stryMutAct_9fa48("22484") ? type !== 'edit' : stryMutAct_9fa48("22483") ? false : stryMutAct_9fa48("22482") ? true : (stryCov_9fa48("22482", "22483", "22484"), type === (stryMutAct_9fa48("22485") ? "" : (stryCov_9fa48("22485"), 'edit')))) {
          if (stryMutAct_9fa48("22486")) {
            {}
          } else {
            stryCov_9fa48("22486");
            durationConfig = stryMutAct_9fa48("22487") ? "" : (stryCov_9fa48("22487"), 'chatEditDuration');
          }
        } else if (stryMutAct_9fa48("22490") ? type !== 'delete' : stryMutAct_9fa48("22489") ? false : stryMutAct_9fa48("22488") ? true : (stryCov_9fa48("22488", "22489", "22490"), type === (stryMutAct_9fa48("22491") ? "" : (stryCov_9fa48("22491"), 'delete')))) {
          if (stryMutAct_9fa48("22492")) {
            {}
          } else {
            stryCov_9fa48("22492");
            durationConfig = stryMutAct_9fa48("22493") ? "" : (stryCov_9fa48("22493"), 'chatDeleteDuration');
          }
        }
        const exists = await Messaging.messageExists(messageId);
        if (stryMutAct_9fa48("22496") ? false : stryMutAct_9fa48("22495") ? true : stryMutAct_9fa48("22494") ? exists : (stryCov_9fa48("22494", "22495", "22496"), !exists)) {
          if (stryMutAct_9fa48("22497")) {
            {}
          } else {
            stryCov_9fa48("22497");
            throw new Error(stryMutAct_9fa48("22498") ? "" : (stryCov_9fa48("22498"), '[[error:invalid-mid]]'));
          }
        }
        const isAdminOrGlobalMod = await user.isAdminOrGlobalMod(uid);
        if (stryMutAct_9fa48("22500") ? false : stryMutAct_9fa48("22499") ? true : (stryCov_9fa48("22499", "22500"), meta.config.disableChat)) {
          if (stryMutAct_9fa48("22501")) {
            {}
          } else {
            stryCov_9fa48("22501");
            throw new Error(stryMutAct_9fa48("22502") ? "" : (stryCov_9fa48("22502"), '[[error:chat-disabled]]'));
          }
        } else if (stryMutAct_9fa48("22505") ? !isAdminOrGlobalMod || meta.config.disableChatMessageEditing : stryMutAct_9fa48("22504") ? false : stryMutAct_9fa48("22503") ? true : (stryCov_9fa48("22503", "22504", "22505"), (stryMutAct_9fa48("22506") ? isAdminOrGlobalMod : (stryCov_9fa48("22506"), !isAdminOrGlobalMod)) && meta.config.disableChatMessageEditing)) {
          if (stryMutAct_9fa48("22507")) {
            {}
          } else {
            stryCov_9fa48("22507");
            throw new Error(stryMutAct_9fa48("22508") ? "" : (stryCov_9fa48("22508"), '[[error:chat-message-editing-disabled]]'));
          }
        }
        const userData = await user.getUserFields(uid, stryMutAct_9fa48("22509") ? [] : (stryCov_9fa48("22509"), [stryMutAct_9fa48("22510") ? "" : (stryCov_9fa48("22510"), 'banned')]));
        if (stryMutAct_9fa48("22512") ? false : stryMutAct_9fa48("22511") ? true : (stryCov_9fa48("22511", "22512"), userData.banned)) {
          if (stryMutAct_9fa48("22513")) {
            {}
          } else {
            stryCov_9fa48("22513");
            throw new Error(stryMutAct_9fa48("22514") ? "" : (stryCov_9fa48("22514"), '[[error:user-banned]]'));
          }
        }
        const canChat = await privileges.global.can(stryMutAct_9fa48("22515") ? "" : (stryCov_9fa48("22515"), 'chat'), uid);
        if (stryMutAct_9fa48("22518") ? false : stryMutAct_9fa48("22517") ? true : stryMutAct_9fa48("22516") ? canChat : (stryCov_9fa48("22516", "22517", "22518"), !canChat)) {
          if (stryMutAct_9fa48("22519")) {
            {}
          } else {
            stryCov_9fa48("22519");
            throw new Error(stryMutAct_9fa48("22520") ? "" : (stryCov_9fa48("22520"), '[[error:no-privileges]]'));
          }
        }
        const messageData = await Messaging.getMessageFields(messageId, stryMutAct_9fa48("22521") ? [] : (stryCov_9fa48("22521"), [stryMutAct_9fa48("22522") ? "" : (stryCov_9fa48("22522"), 'fromuid'), stryMutAct_9fa48("22523") ? "" : (stryCov_9fa48("22523"), 'timestamp'), stryMutAct_9fa48("22524") ? "" : (stryCov_9fa48("22524"), 'system')]));
        if (stryMutAct_9fa48("22527") ? isAdminOrGlobalMod || !messageData.system : stryMutAct_9fa48("22526") ? false : stryMutAct_9fa48("22525") ? true : (stryCov_9fa48("22525", "22526", "22527"), isAdminOrGlobalMod && (stryMutAct_9fa48("22528") ? messageData.system : (stryCov_9fa48("22528"), !messageData.system)))) {
          if (stryMutAct_9fa48("22529")) {
            {}
          } else {
            stryCov_9fa48("22529");
            return;
          }
        }
        const chatConfigDuration = meta.config[durationConfig];
        if (stryMutAct_9fa48("22532") ? chatConfigDuration || Date.now() - messageData.timestamp > chatConfigDuration * 1000 : stryMutAct_9fa48("22531") ? false : stryMutAct_9fa48("22530") ? true : (stryCov_9fa48("22530", "22531", "22532"), chatConfigDuration && (stryMutAct_9fa48("22535") ? Date.now() - messageData.timestamp <= chatConfigDuration * 1000 : stryMutAct_9fa48("22534") ? Date.now() - messageData.timestamp >= chatConfigDuration * 1000 : stryMutAct_9fa48("22533") ? true : (stryCov_9fa48("22533", "22534", "22535"), (stryMutAct_9fa48("22536") ? Date.now() + messageData.timestamp : (stryCov_9fa48("22536"), Date.now() - messageData.timestamp)) > (stryMutAct_9fa48("22537") ? chatConfigDuration / 1000 : (stryCov_9fa48("22537"), chatConfigDuration * 1000)))))) {
          if (stryMutAct_9fa48("22538")) {
            {}
          } else {
            stryCov_9fa48("22538");
            throw new Error(stryMutAct_9fa48("22539") ? `` : (stryCov_9fa48("22539"), `[[error:chat-${type}-duration-expired, ${meta.config[durationConfig]}]]`));
          }
        }
        if (stryMutAct_9fa48("22542") ? messageData.fromuid === parseInt(uid, 10) || !messageData.system : stryMutAct_9fa48("22541") ? false : stryMutAct_9fa48("22540") ? true : (stryCov_9fa48("22540", "22541", "22542"), (stryMutAct_9fa48("22544") ? messageData.fromuid !== parseInt(uid, 10) : stryMutAct_9fa48("22543") ? true : (stryCov_9fa48("22543", "22544"), messageData.fromuid === parseInt(uid, 10))) && (stryMutAct_9fa48("22545") ? messageData.system : (stryCov_9fa48("22545"), !messageData.system)))) {
          if (stryMutAct_9fa48("22546")) {
            {}
          } else {
            stryCov_9fa48("22546");
            return;
          }
        }
        throw new Error(stryMutAct_9fa48("22547") ? `` : (stryCov_9fa48("22547"), `[[error:cant-${type}-chat-message]]`));
      }
    };
    Messaging.canEdit = stryMutAct_9fa48("22548") ? () => undefined : (stryCov_9fa48("22548"), async (messageId, uid) => await canEditDelete(messageId, uid, stryMutAct_9fa48("22549") ? "" : (stryCov_9fa48("22549"), 'edit')));
    Messaging.canDelete = stryMutAct_9fa48("22550") ? () => undefined : (stryCov_9fa48("22550"), async (messageId, uid) => await canEditDelete(messageId, uid, stryMutAct_9fa48("22551") ? "" : (stryCov_9fa48("22551"), 'delete')));
  }
};