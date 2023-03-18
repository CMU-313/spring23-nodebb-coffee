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
const async = require('async');
const winston = require('winston');
const db = require('../../database');
module.exports = stryMutAct_9fa48("41995") ? {} : (stryCov_9fa48("41995"), {
  name: stryMutAct_9fa48("41996") ? "" : (stryCov_9fa48("41996"), 'Upgrading chats'),
  timestamp: Date.UTC(2015, 11, 15),
  method: function (callback) {
    if (stryMutAct_9fa48("41997")) {
      {}
    } else {
      stryCov_9fa48("41997");
      db.getObjectFields(stryMutAct_9fa48("41998") ? "" : (stryCov_9fa48("41998"), 'global'), stryMutAct_9fa48("41999") ? [] : (stryCov_9fa48("41999"), [stryMutAct_9fa48("42000") ? "" : (stryCov_9fa48("42000"), 'nextMid'), stryMutAct_9fa48("42001") ? "" : (stryCov_9fa48("42001"), 'nextChatRoomId')]), (err, globalData) => {
        if (stryMutAct_9fa48("42002")) {
          {}
        } else {
          stryCov_9fa48("42002");
          if (stryMutAct_9fa48("42004") ? false : stryMutAct_9fa48("42003") ? true : (stryCov_9fa48("42003", "42004"), err)) {
            if (stryMutAct_9fa48("42005")) {
              {}
            } else {
              stryCov_9fa48("42005");
              return callback(err);
            }
          }
          const rooms = {};
          let roomId = stryMutAct_9fa48("42008") ? globalData.nextChatRoomId && 1 : stryMutAct_9fa48("42007") ? false : stryMutAct_9fa48("42006") ? true : (stryCov_9fa48("42006", "42007", "42008"), globalData.nextChatRoomId || 1);
          let currentMid = 1;
          async.whilst(next => {
            if (stryMutAct_9fa48("42009")) {
              {}
            } else {
              stryCov_9fa48("42009");
              next(null, stryMutAct_9fa48("42013") ? currentMid > globalData.nextMid : stryMutAct_9fa48("42012") ? currentMid < globalData.nextMid : stryMutAct_9fa48("42011") ? false : stryMutAct_9fa48("42010") ? true : (stryCov_9fa48("42010", "42011", "42012", "42013"), currentMid <= globalData.nextMid));
            }
          }, next => {
            if (stryMutAct_9fa48("42014")) {
              {}
            } else {
              stryCov_9fa48("42014");
              db.getObject(stryMutAct_9fa48("42015") ? `` : (stryCov_9fa48("42015"), `message:${currentMid}`), (err, message) => {
                if (stryMutAct_9fa48("42016")) {
                  {}
                } else {
                  stryCov_9fa48("42016");
                  if (stryMutAct_9fa48("42019") ? err && !message : stryMutAct_9fa48("42018") ? false : stryMutAct_9fa48("42017") ? true : (stryCov_9fa48("42017", "42018", "42019"), err || (stryMutAct_9fa48("42020") ? message : (stryCov_9fa48("42020"), !message)))) {
                    if (stryMutAct_9fa48("42021")) {
                      {}
                    } else {
                      stryCov_9fa48("42021");
                      winston.verbose(stryMutAct_9fa48("42022") ? "" : (stryCov_9fa48("42022"), 'skipping chat message '), currentMid);
                      stryMutAct_9fa48("42023") ? currentMid -= 1 : (stryCov_9fa48("42023"), currentMid += 1);
                      return next(err);
                    }
                  }
                  const pairID = stryMutAct_9fa48("42024") ? [parseInt(message.fromuid, 10), parseInt(message.touid, 10)].join(':') : (stryCov_9fa48("42024"), (stryMutAct_9fa48("42025") ? [] : (stryCov_9fa48("42025"), [parseInt(message.fromuid, 10), parseInt(message.touid, 10)])).sort().join(stryMutAct_9fa48("42026") ? "" : (stryCov_9fa48("42026"), ':')));
                  const msgTime = parseInt(message.timestamp, 10);
                  function addMessageToUids(roomId, callback) {
                    if (stryMutAct_9fa48("42027")) {
                      {}
                    } else {
                      stryCov_9fa48("42027");
                      async.parallel(stryMutAct_9fa48("42028") ? [] : (stryCov_9fa48("42028"), [function (next) {
                        if (stryMutAct_9fa48("42029")) {
                          {}
                        } else {
                          stryCov_9fa48("42029");
                          db.sortedSetAdd(stryMutAct_9fa48("42030") ? `` : (stryCov_9fa48("42030"), `uid:${message.fromuid}:chat:room:${roomId}:mids`), msgTime, currentMid, next);
                        }
                      }, function (next) {
                        if (stryMutAct_9fa48("42031")) {
                          {}
                        } else {
                          stryCov_9fa48("42031");
                          db.sortedSetAdd(stryMutAct_9fa48("42032") ? `` : (stryCov_9fa48("42032"), `uid:${message.touid}:chat:room:${roomId}:mids`), msgTime, currentMid, next);
                        }
                      }]), callback);
                    }
                  }
                  if (stryMutAct_9fa48("42034") ? false : stryMutAct_9fa48("42033") ? true : (stryCov_9fa48("42033", "42034"), rooms[pairID])) {
                    if (stryMutAct_9fa48("42035")) {
                      {}
                    } else {
                      stryCov_9fa48("42035");
                      winston.verbose(stryMutAct_9fa48("42036") ? `` : (stryCov_9fa48("42036"), `adding message ${currentMid} to existing roomID ${roomId}`));
                      addMessageToUids(rooms[pairID], err => {
                        if (stryMutAct_9fa48("42037")) {
                          {}
                        } else {
                          stryCov_9fa48("42037");
                          if (stryMutAct_9fa48("42039") ? false : stryMutAct_9fa48("42038") ? true : (stryCov_9fa48("42038", "42039"), err)) {
                            if (stryMutAct_9fa48("42040")) {
                              {}
                            } else {
                              stryCov_9fa48("42040");
                              return next(err);
                            }
                          }
                          stryMutAct_9fa48("42041") ? currentMid -= 1 : (stryCov_9fa48("42041"), currentMid += 1);
                          next();
                        }
                      });
                    }
                  } else {
                    if (stryMutAct_9fa48("42042")) {
                      {}
                    } else {
                      stryCov_9fa48("42042");
                      winston.verbose(stryMutAct_9fa48("42043") ? `` : (stryCov_9fa48("42043"), `adding message ${currentMid} to new roomID ${roomId}`));
                      async.parallel(stryMutAct_9fa48("42044") ? [] : (stryCov_9fa48("42044"), [function (next) {
                        if (stryMutAct_9fa48("42045")) {
                          {}
                        } else {
                          stryCov_9fa48("42045");
                          db.sortedSetAdd(stryMutAct_9fa48("42046") ? `` : (stryCov_9fa48("42046"), `uid:${message.fromuid}:chat:rooms`), msgTime, roomId, next);
                        }
                      }, function (next) {
                        if (stryMutAct_9fa48("42047")) {
                          {}
                        } else {
                          stryCov_9fa48("42047");
                          db.sortedSetAdd(stryMutAct_9fa48("42048") ? `` : (stryCov_9fa48("42048"), `uid:${message.touid}:chat:rooms`), msgTime, roomId, next);
                        }
                      }, function (next) {
                        if (stryMutAct_9fa48("42049")) {
                          {}
                        } else {
                          stryCov_9fa48("42049");
                          db.sortedSetAdd(stryMutAct_9fa48("42050") ? `` : (stryCov_9fa48("42050"), `chat:room:${roomId}:uids`), stryMutAct_9fa48("42051") ? [] : (stryCov_9fa48("42051"), [msgTime, stryMutAct_9fa48("42052") ? msgTime - 1 : (stryCov_9fa48("42052"), msgTime + 1)]), stryMutAct_9fa48("42053") ? [] : (stryCov_9fa48("42053"), [message.fromuid, message.touid]), next);
                        }
                      }, function (next) {
                        if (stryMutAct_9fa48("42054")) {
                          {}
                        } else {
                          stryCov_9fa48("42054");
                          addMessageToUids(roomId, next);
                        }
                      }]), err => {
                        if (stryMutAct_9fa48("42055")) {
                          {}
                        } else {
                          stryCov_9fa48("42055");
                          if (stryMutAct_9fa48("42057") ? false : stryMutAct_9fa48("42056") ? true : (stryCov_9fa48("42056", "42057"), err)) {
                            if (stryMutAct_9fa48("42058")) {
                              {}
                            } else {
                              stryCov_9fa48("42058");
                              return next(err);
                            }
                          }
                          rooms[pairID] = roomId;
                          stryMutAct_9fa48("42059") ? roomId -= 1 : (stryCov_9fa48("42059"), roomId += 1);
                          stryMutAct_9fa48("42060") ? currentMid -= 1 : (stryCov_9fa48("42060"), currentMid += 1);
                          db.setObjectField(stryMutAct_9fa48("42061") ? "" : (stryCov_9fa48("42061"), 'global'), stryMutAct_9fa48("42062") ? "" : (stryCov_9fa48("42062"), 'nextChatRoomId'), roomId, next);
                        }
                      });
                    }
                  }
                }
              });
            }
          }, callback);
        }
      });
    }
  }
});