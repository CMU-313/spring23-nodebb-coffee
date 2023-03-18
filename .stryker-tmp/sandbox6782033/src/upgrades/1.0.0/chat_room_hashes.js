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
const db = require('../../database');
module.exports = stryMutAct_9fa48("41958") ? {} : (stryCov_9fa48("41958"), {
  name: stryMutAct_9fa48("41959") ? "" : (stryCov_9fa48("41959"), 'Chat room hashes'),
  timestamp: Date.UTC(2015, 11, 23),
  method: function (callback) {
    if (stryMutAct_9fa48("41960")) {
      {}
    } else {
      stryCov_9fa48("41960");
      db.getObjectField(stryMutAct_9fa48("41961") ? "" : (stryCov_9fa48("41961"), 'global'), stryMutAct_9fa48("41962") ? "" : (stryCov_9fa48("41962"), 'nextChatRoomId'), (err, nextChatRoomId) => {
        if (stryMutAct_9fa48("41963")) {
          {}
        } else {
          stryCov_9fa48("41963");
          if (stryMutAct_9fa48("41965") ? false : stryMutAct_9fa48("41964") ? true : (stryCov_9fa48("41964", "41965"), err)) {
            if (stryMutAct_9fa48("41966")) {
              {}
            } else {
              stryCov_9fa48("41966");
              return callback(err);
            }
          }
          let currentChatRoomId = 1;
          async.whilst(next => {
            if (stryMutAct_9fa48("41967")) {
              {}
            } else {
              stryCov_9fa48("41967");
              next(null, stryMutAct_9fa48("41971") ? currentChatRoomId > nextChatRoomId : stryMutAct_9fa48("41970") ? currentChatRoomId < nextChatRoomId : stryMutAct_9fa48("41969") ? false : stryMutAct_9fa48("41968") ? true : (stryCov_9fa48("41968", "41969", "41970", "41971"), currentChatRoomId <= nextChatRoomId));
            }
          }, next => {
            if (stryMutAct_9fa48("41972")) {
              {}
            } else {
              stryCov_9fa48("41972");
              db.getSortedSetRange(stryMutAct_9fa48("41973") ? `` : (stryCov_9fa48("41973"), `chat:room:${currentChatRoomId}:uids`), 0, 0, (err, uids) => {
                if (stryMutAct_9fa48("41974")) {
                  {}
                } else {
                  stryCov_9fa48("41974");
                  if (stryMutAct_9fa48("41976") ? false : stryMutAct_9fa48("41975") ? true : (stryCov_9fa48("41975", "41976"), err)) {
                    if (stryMutAct_9fa48("41977")) {
                      {}
                    } else {
                      stryCov_9fa48("41977");
                      return next(err);
                    }
                  }
                  if (stryMutAct_9fa48("41980") ? (!Array.isArray(uids) || !uids.length) && !uids[0] : stryMutAct_9fa48("41979") ? false : stryMutAct_9fa48("41978") ? true : (stryCov_9fa48("41978", "41979", "41980"), (stryMutAct_9fa48("41982") ? !Array.isArray(uids) && !uids.length : stryMutAct_9fa48("41981") ? false : (stryCov_9fa48("41981", "41982"), (stryMutAct_9fa48("41983") ? Array.isArray(uids) : (stryCov_9fa48("41983"), !Array.isArray(uids))) || (stryMutAct_9fa48("41984") ? uids.length : (stryCov_9fa48("41984"), !uids.length)))) || (stryMutAct_9fa48("41985") ? uids[0] : (stryCov_9fa48("41985"), !uids[0])))) {
                    if (stryMutAct_9fa48("41986")) {
                      {}
                    } else {
                      stryCov_9fa48("41986");
                      stryMutAct_9fa48("41987") ? currentChatRoomId -= 1 : (stryCov_9fa48("41987"), currentChatRoomId += 1);
                      return next();
                    }
                  }
                  db.setObject(stryMutAct_9fa48("41988") ? `` : (stryCov_9fa48("41988"), `chat:room:${currentChatRoomId}`), stryMutAct_9fa48("41989") ? {} : (stryCov_9fa48("41989"), {
                    owner: uids[0],
                    roomId: currentChatRoomId
                  }), err => {
                    if (stryMutAct_9fa48("41990")) {
                      {}
                    } else {
                      stryCov_9fa48("41990");
                      if (stryMutAct_9fa48("41992") ? false : stryMutAct_9fa48("41991") ? true : (stryCov_9fa48("41991", "41992"), err)) {
                        if (stryMutAct_9fa48("41993")) {
                          {}
                        } else {
                          stryCov_9fa48("41993");
                          return next(err);
                        }
                      }
                      stryMutAct_9fa48("41994") ? currentChatRoomId -= 1 : (stryCov_9fa48("41994"), currentChatRoomId += 1);
                      next();
                    }
                  });
                }
              });
            }
          }, callback);
        }
      });
    }
  }
});