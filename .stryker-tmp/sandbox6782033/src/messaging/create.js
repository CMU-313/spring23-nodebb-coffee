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
const plugins = require('../plugins');
const db = require('../database');
const user = require('../user');
module.exports = function (Messaging) {
  if (stryMutAct_9fa48("22184")) {
    {}
  } else {
    stryCov_9fa48("22184");
    Messaging.sendMessage = async data => {
      if (stryMutAct_9fa48("22185")) {
        {}
      } else {
        stryCov_9fa48("22185");
        await Messaging.checkContent(data.content);
        const inRoom = await Messaging.isUserInRoom(data.uid, data.roomId);
        if (stryMutAct_9fa48("22188") ? false : stryMutAct_9fa48("22187") ? true : stryMutAct_9fa48("22186") ? inRoom : (stryCov_9fa48("22186", "22187", "22188"), !inRoom)) {
          if (stryMutAct_9fa48("22189")) {
            {}
          } else {
            stryCov_9fa48("22189");
            throw new Error(stryMutAct_9fa48("22190") ? "" : (stryCov_9fa48("22190"), '[[error:not-allowed]]'));
          }
        }
        return await Messaging.addMessage(data);
      }
    };
    Messaging.checkContent = async content => {
      if (stryMutAct_9fa48("22191")) {
        {}
      } else {
        stryCov_9fa48("22191");
        if (stryMutAct_9fa48("22194") ? false : stryMutAct_9fa48("22193") ? true : stryMutAct_9fa48("22192") ? content : (stryCov_9fa48("22192", "22193", "22194"), !content)) {
          if (stryMutAct_9fa48("22195")) {
            {}
          } else {
            stryCov_9fa48("22195");
            throw new Error(stryMutAct_9fa48("22196") ? "" : (stryCov_9fa48("22196"), '[[error:invalid-chat-message]]'));
          }
        }
        const maximumChatMessageLength = stryMutAct_9fa48("22199") ? meta.config.maximumChatMessageLength && 1000 : stryMutAct_9fa48("22198") ? false : stryMutAct_9fa48("22197") ? true : (stryCov_9fa48("22197", "22198", "22199"), meta.config.maximumChatMessageLength || 1000);
        content = stryMutAct_9fa48("22200") ? String(content) : (stryCov_9fa48("22200"), String(content).trim());
        let {
          length
        } = content;
        ({
          content,
          length
        } = await plugins.hooks.fire(stryMutAct_9fa48("22201") ? "" : (stryCov_9fa48("22201"), 'filter:messaging.checkContent'), stryMutAct_9fa48("22202") ? {} : (stryCov_9fa48("22202"), {
          content,
          length
        })));
        if (stryMutAct_9fa48("22205") ? false : stryMutAct_9fa48("22204") ? true : stryMutAct_9fa48("22203") ? content : (stryCov_9fa48("22203", "22204", "22205"), !content)) {
          if (stryMutAct_9fa48("22206")) {
            {}
          } else {
            stryCov_9fa48("22206");
            throw new Error(stryMutAct_9fa48("22207") ? "" : (stryCov_9fa48("22207"), '[[error:invalid-chat-message]]'));
          }
        }
        if (stryMutAct_9fa48("22211") ? length <= maximumChatMessageLength : stryMutAct_9fa48("22210") ? length >= maximumChatMessageLength : stryMutAct_9fa48("22209") ? false : stryMutAct_9fa48("22208") ? true : (stryCov_9fa48("22208", "22209", "22210", "22211"), length > maximumChatMessageLength)) {
          if (stryMutAct_9fa48("22212")) {
            {}
          } else {
            stryCov_9fa48("22212");
            throw new Error(stryMutAct_9fa48("22213") ? `` : (stryCov_9fa48("22213"), `[[error:chat-message-too-long, ${maximumChatMessageLength}]]`));
          }
        }
      }
    };
    Messaging.addMessage = async data => {
      if (stryMutAct_9fa48("22214")) {
        {}
      } else {
        stryCov_9fa48("22214");
        const mid = await db.incrObjectField(stryMutAct_9fa48("22215") ? "" : (stryCov_9fa48("22215"), 'global'), stryMutAct_9fa48("22216") ? "" : (stryCov_9fa48("22216"), 'nextMid'));
        const timestamp = stryMutAct_9fa48("22219") ? data.timestamp && Date.now() : stryMutAct_9fa48("22218") ? false : stryMutAct_9fa48("22217") ? true : (stryCov_9fa48("22217", "22218", "22219"), data.timestamp || Date.now());
        let message = stryMutAct_9fa48("22220") ? {} : (stryCov_9fa48("22220"), {
          content: String(data.content),
          timestamp: timestamp,
          fromuid: data.uid,
          roomId: data.roomId,
          deleted: 0,
          system: stryMutAct_9fa48("22223") ? data.system && 0 : stryMutAct_9fa48("22222") ? false : stryMutAct_9fa48("22221") ? true : (stryCov_9fa48("22221", "22222", "22223"), data.system || 0)
        });
        if (stryMutAct_9fa48("22225") ? false : stryMutAct_9fa48("22224") ? true : (stryCov_9fa48("22224", "22225"), data.ip)) {
          if (stryMutAct_9fa48("22226")) {
            {}
          } else {
            stryCov_9fa48("22226");
            message.ip = data.ip;
          }
        }
        message = await plugins.hooks.fire(stryMutAct_9fa48("22227") ? "" : (stryCov_9fa48("22227"), 'filter:messaging.save'), message);
        await db.setObject(stryMutAct_9fa48("22228") ? `` : (stryCov_9fa48("22228"), `message:${mid}`), message);
        const isNewSet = await Messaging.isNewSet(data.uid, data.roomId, timestamp);
        let uids = await db.getSortedSetRange(stryMutAct_9fa48("22229") ? `` : (stryCov_9fa48("22229"), `chat:room:${data.roomId}:uids`), 0, stryMutAct_9fa48("22230") ? +1 : (stryCov_9fa48("22230"), -1));
        uids = await user.blocks.filterUids(data.uid, uids);
        await Promise.all(stryMutAct_9fa48("22231") ? [] : (stryCov_9fa48("22231"), [Messaging.addRoomToUsers(data.roomId, uids, timestamp), Messaging.addMessageToUsers(data.roomId, uids, mid, timestamp), Messaging.markUnread(stryMutAct_9fa48("22232") ? uids : (stryCov_9fa48("22232"), uids.filter(stryMutAct_9fa48("22233") ? () => undefined : (stryCov_9fa48("22233"), uid => stryMutAct_9fa48("22236") ? uid === String(data.uid) : stryMutAct_9fa48("22235") ? false : stryMutAct_9fa48("22234") ? true : (stryCov_9fa48("22234", "22235", "22236"), uid !== String(data.uid))))), data.roomId)]));
        const messages = await Messaging.getMessagesData(stryMutAct_9fa48("22237") ? [] : (stryCov_9fa48("22237"), [mid]), data.uid, data.roomId, stryMutAct_9fa48("22238") ? false : (stryCov_9fa48("22238"), true));
        if (stryMutAct_9fa48("22241") ? !messages && !messages[0] : stryMutAct_9fa48("22240") ? false : stryMutAct_9fa48("22239") ? true : (stryCov_9fa48("22239", "22240", "22241"), (stryMutAct_9fa48("22242") ? messages : (stryCov_9fa48("22242"), !messages)) || (stryMutAct_9fa48("22243") ? messages[0] : (stryCov_9fa48("22243"), !messages[0])))) {
          if (stryMutAct_9fa48("22244")) {
            {}
          } else {
            stryCov_9fa48("22244");
            return null;
          }
        }
        messages[0].newSet = isNewSet;
        messages[0].mid = mid;
        messages[0].roomId = data.roomId;
        plugins.hooks.fire(stryMutAct_9fa48("22245") ? "" : (stryCov_9fa48("22245"), 'action:messaging.save'), stryMutAct_9fa48("22246") ? {} : (stryCov_9fa48("22246"), {
          message: messages[0],
          data: data
        }));
        return messages[0];
      }
    };
    Messaging.addSystemMessage = async (content, uid, roomId) => {
      if (stryMutAct_9fa48("22247")) {
        {}
      } else {
        stryCov_9fa48("22247");
        const message = await Messaging.addMessage(stryMutAct_9fa48("22248") ? {} : (stryCov_9fa48("22248"), {
          content: content,
          uid: uid,
          roomId: roomId,
          system: 1
        }));
        Messaging.notifyUsersInRoom(uid, roomId, message);
      }
    };
    Messaging.addRoomToUsers = async (roomId, uids, timestamp) => {
      if (stryMutAct_9fa48("22249")) {
        {}
      } else {
        stryCov_9fa48("22249");
        if (stryMutAct_9fa48("22252") ? false : stryMutAct_9fa48("22251") ? true : stryMutAct_9fa48("22250") ? uids.length : (stryCov_9fa48("22250", "22251", "22252"), !uids.length)) {
          if (stryMutAct_9fa48("22253")) {
            {}
          } else {
            stryCov_9fa48("22253");
            return;
          }
        }
        const keys = uids.map(stryMutAct_9fa48("22254") ? () => undefined : (stryCov_9fa48("22254"), uid => stryMutAct_9fa48("22255") ? `` : (stryCov_9fa48("22255"), `uid:${uid}:chat:rooms`)));
        await db.sortedSetsAdd(keys, timestamp, roomId);
      }
    };
    Messaging.addMessageToUsers = async (roomId, uids, mid, timestamp) => {
      if (stryMutAct_9fa48("22256")) {
        {}
      } else {
        stryCov_9fa48("22256");
        if (stryMutAct_9fa48("22259") ? false : stryMutAct_9fa48("22258") ? true : stryMutAct_9fa48("22257") ? uids.length : (stryCov_9fa48("22257", "22258", "22259"), !uids.length)) {
          if (stryMutAct_9fa48("22260")) {
            {}
          } else {
            stryCov_9fa48("22260");
            return;
          }
        }
        const keys = uids.map(stryMutAct_9fa48("22261") ? () => undefined : (stryCov_9fa48("22261"), uid => stryMutAct_9fa48("22262") ? `` : (stryCov_9fa48("22262"), `uid:${uid}:chat:room:${roomId}:mids`)));
        await db.sortedSetsAdd(keys, timestamp, mid);
      }
    };
  }
};