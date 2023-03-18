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
const sockets = require('../socket.io');
module.exports = function (Messaging) {
  if (stryMutAct_9fa48("22421")) {
    {}
  } else {
    stryCov_9fa48("22421");
    Messaging.deleteMessage = stryMutAct_9fa48("22422") ? () => undefined : (stryCov_9fa48("22422"), async (mid, uid) => await doDeleteRestore(mid, 1, uid));
    Messaging.restoreMessage = stryMutAct_9fa48("22423") ? () => undefined : (stryCov_9fa48("22423"), async (mid, uid) => await doDeleteRestore(mid, 0, uid));
    async function doDeleteRestore(mid, state, uid) {
      if (stryMutAct_9fa48("22424")) {
        {}
      } else {
        stryCov_9fa48("22424");
        const field = state ? stryMutAct_9fa48("22425") ? "" : (stryCov_9fa48("22425"), 'deleted') : stryMutAct_9fa48("22426") ? "" : (stryCov_9fa48("22426"), 'restored');
        const {
          deleted,
          roomId
        } = await Messaging.getMessageFields(mid, stryMutAct_9fa48("22427") ? [] : (stryCov_9fa48("22427"), [stryMutAct_9fa48("22428") ? "" : (stryCov_9fa48("22428"), 'deleted'), stryMutAct_9fa48("22429") ? "" : (stryCov_9fa48("22429"), 'roomId')]));
        if (stryMutAct_9fa48("22432") ? deleted !== state : stryMutAct_9fa48("22431") ? false : stryMutAct_9fa48("22430") ? true : (stryCov_9fa48("22430", "22431", "22432"), deleted === state)) {
          if (stryMutAct_9fa48("22433")) {
            {}
          } else {
            stryCov_9fa48("22433");
            throw new Error(stryMutAct_9fa48("22434") ? `` : (stryCov_9fa48("22434"), `[[error:chat-${field}-already]]`));
          }
        }
        await Messaging.setMessageField(mid, stryMutAct_9fa48("22435") ? "" : (stryCov_9fa48("22435"), 'deleted'), state);
        const [uids, messages] = await Promise.all(stryMutAct_9fa48("22436") ? [] : (stryCov_9fa48("22436"), [Messaging.getUidsInRoom(roomId, 0, stryMutAct_9fa48("22437") ? +1 : (stryCov_9fa48("22437"), -1)), Messaging.getMessagesData(stryMutAct_9fa48("22438") ? [] : (stryCov_9fa48("22438"), [mid]), uid, roomId, stryMutAct_9fa48("22439") ? false : (stryCov_9fa48("22439"), true))]));
        uids.forEach(_uid => {
          if (stryMutAct_9fa48("22440")) {
            {}
          } else {
            stryCov_9fa48("22440");
            if (stryMutAct_9fa48("22443") ? parseInt(_uid, 10) === parseInt(uid, 10) : stryMutAct_9fa48("22442") ? false : stryMutAct_9fa48("22441") ? true : (stryCov_9fa48("22441", "22442", "22443"), parseInt(_uid, 10) !== parseInt(uid, 10))) {
              if (stryMutAct_9fa48("22444")) {
                {}
              } else {
                stryCov_9fa48("22444");
                if (stryMutAct_9fa48("22447") ? state !== 1 : stryMutAct_9fa48("22446") ? false : stryMutAct_9fa48("22445") ? true : (stryCov_9fa48("22445", "22446", "22447"), state === 1)) {
                  if (stryMutAct_9fa48("22448")) {
                    {}
                  } else {
                    stryCov_9fa48("22448");
                    sockets.in(stryMutAct_9fa48("22449") ? `` : (stryCov_9fa48("22449"), `uid_${_uid}`)).emit(stryMutAct_9fa48("22450") ? "" : (stryCov_9fa48("22450"), 'event:chats.delete'), mid);
                  }
                } else if (stryMutAct_9fa48("22453") ? state !== 0 : stryMutAct_9fa48("22452") ? false : stryMutAct_9fa48("22451") ? true : (stryCov_9fa48("22451", "22452", "22453"), state === 0)) {
                  if (stryMutAct_9fa48("22454")) {
                    {}
                  } else {
                    stryCov_9fa48("22454");
                    sockets.in(stryMutAct_9fa48("22455") ? `` : (stryCov_9fa48("22455"), `uid_${_uid}`)).emit(stryMutAct_9fa48("22456") ? "" : (stryCov_9fa48("22456"), 'event:chats.restore'), messages[0]);
                  }
                }
              }
            }
          }
        });
      }
    }
  }
};