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
const messaging = require('../../messaging');
const meta = require('../../meta');
const user = require('../../user');
const privileges = require('../../privileges');
const helpers = require('../helpers');
const chatsController = module.exports;
chatsController.get = async function (req, res, next) {
  if (stryMutAct_9fa48("5192")) {
    {}
  } else {
    stryCov_9fa48("5192");
    if (stryMutAct_9fa48("5194") ? false : stryMutAct_9fa48("5193") ? true : (stryCov_9fa48("5193", "5194"), meta.config.disableChat)) {
      if (stryMutAct_9fa48("5195")) {
        {}
      } else {
        stryCov_9fa48("5195");
        return next();
      }
    }
    const uid = await user.getUidByUserslug(req.params.userslug);
    if (stryMutAct_9fa48("5198") ? false : stryMutAct_9fa48("5197") ? true : stryMutAct_9fa48("5196") ? uid : (stryCov_9fa48("5196", "5197", "5198"), !uid)) {
      if (stryMutAct_9fa48("5199")) {
        {}
      } else {
        stryCov_9fa48("5199");
        return next();
      }
    }
    const canChat = await privileges.global.can(stryMutAct_9fa48("5200") ? "" : (stryCov_9fa48("5200"), 'chat'), req.uid);
    if (stryMutAct_9fa48("5203") ? false : stryMutAct_9fa48("5202") ? true : stryMutAct_9fa48("5201") ? canChat : (stryCov_9fa48("5201", "5202", "5203"), !canChat)) {
      if (stryMutAct_9fa48("5204")) {
        {}
      } else {
        stryCov_9fa48("5204");
        return next(new Error(stryMutAct_9fa48("5205") ? "" : (stryCov_9fa48("5205"), '[[error:no-privileges]]')));
      }
    }
    const recentChats = await messaging.getRecentChats(req.uid, uid, 0, 19);
    if (stryMutAct_9fa48("5208") ? false : stryMutAct_9fa48("5207") ? true : stryMutAct_9fa48("5206") ? recentChats : (stryCov_9fa48("5206", "5207", "5208"), !recentChats)) {
      if (stryMutAct_9fa48("5209")) {
        {}
      } else {
        stryCov_9fa48("5209");
        return next();
      }
    }
    if (stryMutAct_9fa48("5212") ? false : stryMutAct_9fa48("5211") ? true : stryMutAct_9fa48("5210") ? req.params.roomid : (stryCov_9fa48("5210", "5211", "5212"), !req.params.roomid)) {
      if (stryMutAct_9fa48("5213")) {
        {}
      } else {
        stryCov_9fa48("5213");
        return res.render(stryMutAct_9fa48("5214") ? "" : (stryCov_9fa48("5214"), 'chats'), stryMutAct_9fa48("5215") ? {} : (stryCov_9fa48("5215"), {
          rooms: recentChats.rooms,
          uid: uid,
          userslug: req.params.userslug,
          nextStart: recentChats.nextStart,
          allowed: stryMutAct_9fa48("5216") ? false : (stryCov_9fa48("5216"), true),
          title: stryMutAct_9fa48("5217") ? "" : (stryCov_9fa48("5217"), '[[pages:chats]]')
        }));
      }
    }
    const room = await messaging.loadRoom(req.uid, stryMutAct_9fa48("5218") ? {} : (stryCov_9fa48("5218"), {
      uid: uid,
      roomId: req.params.roomid
    }));
    if (stryMutAct_9fa48("5221") ? false : stryMutAct_9fa48("5220") ? true : stryMutAct_9fa48("5219") ? room : (stryCov_9fa48("5219", "5220", "5221"), !room)) {
      if (stryMutAct_9fa48("5222")) {
        {}
      } else {
        stryCov_9fa48("5222");
        return next();
      }
    }
    room.rooms = recentChats.rooms;
    room.nextStart = recentChats.nextStart;
    room.title = stryMutAct_9fa48("5225") ? (room.roomName || room.usernames) && '[[pages:chats]]' : stryMutAct_9fa48("5224") ? false : stryMutAct_9fa48("5223") ? true : (stryCov_9fa48("5223", "5224", "5225"), (stryMutAct_9fa48("5227") ? room.roomName && room.usernames : stryMutAct_9fa48("5226") ? false : (stryCov_9fa48("5226", "5227"), room.roomName || room.usernames)) || (stryMutAct_9fa48("5228") ? "" : (stryCov_9fa48("5228"), '[[pages:chats]]')));
    room.uid = uid;
    room.userslug = req.params.userslug;
    room.canViewInfo = await privileges.global.can(stryMutAct_9fa48("5229") ? "" : (stryCov_9fa48("5229"), 'view:users:info'), uid);
    res.render(stryMutAct_9fa48("5230") ? "" : (stryCov_9fa48("5230"), 'chats'), room);
  }
};
chatsController.redirectToChat = async function (req, res, next) {
  if (stryMutAct_9fa48("5231")) {
    {}
  } else {
    stryCov_9fa48("5231");
    if (stryMutAct_9fa48("5234") ? false : stryMutAct_9fa48("5233") ? true : stryMutAct_9fa48("5232") ? req.loggedIn : (stryCov_9fa48("5232", "5233", "5234"), !req.loggedIn)) {
      if (stryMutAct_9fa48("5235")) {
        {}
      } else {
        stryCov_9fa48("5235");
        return next();
      }
    }
    const userslug = await user.getUserField(req.uid, stryMutAct_9fa48("5236") ? "" : (stryCov_9fa48("5236"), 'userslug'));
    if (stryMutAct_9fa48("5239") ? false : stryMutAct_9fa48("5238") ? true : stryMutAct_9fa48("5237") ? userslug : (stryCov_9fa48("5237", "5238", "5239"), !userslug)) {
      if (stryMutAct_9fa48("5240")) {
        {}
      } else {
        stryCov_9fa48("5240");
        return next();
      }
    }
    const roomid = parseInt(req.params.roomid, 10);
    helpers.redirect(res, stryMutAct_9fa48("5241") ? `` : (stryCov_9fa48("5241"), `/user/${userslug}/chats${roomid ? stryMutAct_9fa48("5242") ? `` : (stryCov_9fa48("5242"), `/${roomid}`) : stryMutAct_9fa48("5243") ? "Stryker was here!" : (stryCov_9fa48("5243"), '')}`));
  }
};