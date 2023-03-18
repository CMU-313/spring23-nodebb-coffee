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
const db = require('../../database');
const user = require('../../user');
const topics = require('../../topics');
module.exports = function (SocketTopics) {
  if (stryMutAct_9fa48("37152")) {
    {}
  } else {
    stryCov_9fa48("37152");
    SocketTopics.markAsRead = async function (socket, tids) {
      if (stryMutAct_9fa48("37153")) {
        {}
      } else {
        stryCov_9fa48("37153");
        if (stryMutAct_9fa48("37156") ? !Array.isArray(tids) && socket.uid <= 0 : stryMutAct_9fa48("37155") ? false : stryMutAct_9fa48("37154") ? true : (stryCov_9fa48("37154", "37155", "37156"), (stryMutAct_9fa48("37157") ? Array.isArray(tids) : (stryCov_9fa48("37157"), !Array.isArray(tids))) || (stryMutAct_9fa48("37160") ? socket.uid > 0 : stryMutAct_9fa48("37159") ? socket.uid < 0 : stryMutAct_9fa48("37158") ? false : (stryCov_9fa48("37158", "37159", "37160"), socket.uid <= 0)))) {
          if (stryMutAct_9fa48("37161")) {
            {}
          } else {
            stryCov_9fa48("37161");
            throw new Error(stryMutAct_9fa48("37162") ? "" : (stryCov_9fa48("37162"), '[[error:invalid-data]]'));
          }
        }
        const hasMarked = await topics.markAsRead(tids, socket.uid);
        const promises = stryMutAct_9fa48("37163") ? [] : (stryCov_9fa48("37163"), [topics.markTopicNotificationsRead(tids, socket.uid)]);
        if (stryMutAct_9fa48("37165") ? false : stryMutAct_9fa48("37164") ? true : (stryCov_9fa48("37164", "37165"), hasMarked)) {
          if (stryMutAct_9fa48("37166")) {
            {}
          } else {
            stryCov_9fa48("37166");
            promises.push(topics.pushUnreadCount(socket.uid));
          }
        }
        await Promise.all(promises);
      }
    };
    SocketTopics.markTopicNotificationsRead = async function (socket, tids) {
      if (stryMutAct_9fa48("37167")) {
        {}
      } else {
        stryCov_9fa48("37167");
        if (stryMutAct_9fa48("37170") ? !Array.isArray(tids) && !socket.uid : stryMutAct_9fa48("37169") ? false : stryMutAct_9fa48("37168") ? true : (stryCov_9fa48("37168", "37169", "37170"), (stryMutAct_9fa48("37171") ? Array.isArray(tids) : (stryCov_9fa48("37171"), !Array.isArray(tids))) || (stryMutAct_9fa48("37172") ? socket.uid : (stryCov_9fa48("37172"), !socket.uid)))) {
          if (stryMutAct_9fa48("37173")) {
            {}
          } else {
            stryCov_9fa48("37173");
            throw new Error(stryMutAct_9fa48("37174") ? "" : (stryCov_9fa48("37174"), '[[error:invalid-data]]'));
          }
        }
        await topics.markTopicNotificationsRead(tids, socket.uid);
      }
    };
    SocketTopics.markAllRead = async function (socket) {
      if (stryMutAct_9fa48("37175")) {
        {}
      } else {
        stryCov_9fa48("37175");
        if (stryMutAct_9fa48("37179") ? socket.uid > 0 : stryMutAct_9fa48("37178") ? socket.uid < 0 : stryMutAct_9fa48("37177") ? false : stryMutAct_9fa48("37176") ? true : (stryCov_9fa48("37176", "37177", "37178", "37179"), socket.uid <= 0)) {
          if (stryMutAct_9fa48("37180")) {
            {}
          } else {
            stryCov_9fa48("37180");
            throw new Error(stryMutAct_9fa48("37181") ? "" : (stryCov_9fa48("37181"), '[[error:invalid-uid]]'));
          }
        }
        await topics.markAllRead(socket.uid);
        topics.pushUnreadCount(socket.uid);
      }
    };
    SocketTopics.markCategoryTopicsRead = async function (socket, cid) {
      if (stryMutAct_9fa48("37182")) {
        {}
      } else {
        stryCov_9fa48("37182");
        const tids = await topics.getUnreadTids(stryMutAct_9fa48("37183") ? {} : (stryCov_9fa48("37183"), {
          cid: cid,
          uid: socket.uid,
          filter: stryMutAct_9fa48("37184") ? "Stryker was here!" : (stryCov_9fa48("37184"), '')
        }));
        await SocketTopics.markAsRead(socket, tids);
      }
    };
    SocketTopics.markUnread = async function (socket, tid) {
      if (stryMutAct_9fa48("37185")) {
        {}
      } else {
        stryCov_9fa48("37185");
        if (stryMutAct_9fa48("37188") ? !tid && socket.uid <= 0 : stryMutAct_9fa48("37187") ? false : stryMutAct_9fa48("37186") ? true : (stryCov_9fa48("37186", "37187", "37188"), (stryMutAct_9fa48("37189") ? tid : (stryCov_9fa48("37189"), !tid)) || (stryMutAct_9fa48("37192") ? socket.uid > 0 : stryMutAct_9fa48("37191") ? socket.uid < 0 : stryMutAct_9fa48("37190") ? false : (stryCov_9fa48("37190", "37191", "37192"), socket.uid <= 0)))) {
          if (stryMutAct_9fa48("37193")) {
            {}
          } else {
            stryCov_9fa48("37193");
            throw new Error(stryMutAct_9fa48("37194") ? "" : (stryCov_9fa48("37194"), '[[error:invalid-data]]'));
          }
        }
        await topics.markUnread(tid, socket.uid);
        topics.pushUnreadCount(socket.uid);
      }
    };
    SocketTopics.markAsUnreadForAll = async function (socket, tids) {
      if (stryMutAct_9fa48("37195")) {
        {}
      } else {
        stryCov_9fa48("37195");
        if (stryMutAct_9fa48("37198") ? false : stryMutAct_9fa48("37197") ? true : stryMutAct_9fa48("37196") ? Array.isArray(tids) : (stryCov_9fa48("37196", "37197", "37198"), !Array.isArray(tids))) {
          if (stryMutAct_9fa48("37199")) {
            {}
          } else {
            stryCov_9fa48("37199");
            throw new Error(stryMutAct_9fa48("37200") ? "" : (stryCov_9fa48("37200"), '[[error:invalid-tid]]'));
          }
        }
        if (stryMutAct_9fa48("37204") ? socket.uid > 0 : stryMutAct_9fa48("37203") ? socket.uid < 0 : stryMutAct_9fa48("37202") ? false : stryMutAct_9fa48("37201") ? true : (stryCov_9fa48("37201", "37202", "37203", "37204"), socket.uid <= 0)) {
          if (stryMutAct_9fa48("37205")) {
            {}
          } else {
            stryCov_9fa48("37205");
            throw new Error(stryMutAct_9fa48("37206") ? "" : (stryCov_9fa48("37206"), '[[error:no-privileges]]'));
          }
        }
        const isAdmin = await user.isAdministrator(socket.uid);
        const now = Date.now();
        await Promise.all(tids.map(async tid => {
          if (stryMutAct_9fa48("37207")) {
            {}
          } else {
            stryCov_9fa48("37207");
            const topicData = await topics.getTopicFields(tid, stryMutAct_9fa48("37208") ? [] : (stryCov_9fa48("37208"), [stryMutAct_9fa48("37209") ? "" : (stryCov_9fa48("37209"), 'tid'), stryMutAct_9fa48("37210") ? "" : (stryCov_9fa48("37210"), 'cid')]));
            if (stryMutAct_9fa48("37213") ? false : stryMutAct_9fa48("37212") ? true : stryMutAct_9fa48("37211") ? topicData.tid : (stryCov_9fa48("37211", "37212", "37213"), !topicData.tid)) {
              if (stryMutAct_9fa48("37214")) {
                {}
              } else {
                stryCov_9fa48("37214");
                throw new Error(stryMutAct_9fa48("37215") ? "" : (stryCov_9fa48("37215"), '[[error:no-topic]]'));
              }
            }
            const isMod = await user.isModerator(socket.uid, topicData.cid);
            if (stryMutAct_9fa48("37218") ? !isAdmin || !isMod : stryMutAct_9fa48("37217") ? false : stryMutAct_9fa48("37216") ? true : (stryCov_9fa48("37216", "37217", "37218"), (stryMutAct_9fa48("37219") ? isAdmin : (stryCov_9fa48("37219"), !isAdmin)) && (stryMutAct_9fa48("37220") ? isMod : (stryCov_9fa48("37220"), !isMod)))) {
              if (stryMutAct_9fa48("37221")) {
                {}
              } else {
                stryCov_9fa48("37221");
                throw new Error(stryMutAct_9fa48("37222") ? "" : (stryCov_9fa48("37222"), '[[error:no-privileges]]'));
              }
            }
            await topics.markAsUnreadForAll(tid);
            await topics.updateRecent(tid, now);
            await db.sortedSetAdd(stryMutAct_9fa48("37223") ? `` : (stryCov_9fa48("37223"), `cid:${topicData.cid}:tids:lastposttime`), now, tid);
            await topics.setTopicField(tid, stryMutAct_9fa48("37224") ? "" : (stryCov_9fa48("37224"), 'lastposttime'), now);
          }
        }));
        topics.pushUnreadCount(socket.uid);
      }
    };
  }
};