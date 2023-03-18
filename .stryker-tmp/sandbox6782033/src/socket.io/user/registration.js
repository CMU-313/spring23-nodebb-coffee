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
const user = require('../../user');
const events = require('../../events');
module.exports = function (SocketUser) {
  if (stryMutAct_9fa48("37489")) {
    {}
  } else {
    stryCov_9fa48("37489");
    SocketUser.acceptRegistration = async function (socket, data) {
      if (stryMutAct_9fa48("37490")) {
        {}
      } else {
        stryCov_9fa48("37490");
        const isAdminOrGlobalMod = await user.isAdminOrGlobalMod(socket.uid);
        if (stryMutAct_9fa48("37493") ? false : stryMutAct_9fa48("37492") ? true : stryMutAct_9fa48("37491") ? isAdminOrGlobalMod : (stryCov_9fa48("37491", "37492", "37493"), !isAdminOrGlobalMod)) {
          if (stryMutAct_9fa48("37494")) {
            {}
          } else {
            stryCov_9fa48("37494");
            throw new Error(stryMutAct_9fa48("37495") ? "" : (stryCov_9fa48("37495"), '[[error:no-privileges]]'));
          }
        }
        const uid = await user.acceptRegistration(data.username);
        await events.log(stryMutAct_9fa48("37496") ? {} : (stryCov_9fa48("37496"), {
          type: stryMutAct_9fa48("37497") ? "" : (stryCov_9fa48("37497"), 'registration-approved'),
          uid: socket.uid,
          ip: socket.ip,
          targetUid: uid
        }));
        return uid;
      }
    };
    SocketUser.rejectRegistration = async function (socket, data) {
      if (stryMutAct_9fa48("37498")) {
        {}
      } else {
        stryCov_9fa48("37498");
        const isAdminOrGlobalMod = await user.isAdminOrGlobalMod(socket.uid);
        if (stryMutAct_9fa48("37501") ? false : stryMutAct_9fa48("37500") ? true : stryMutAct_9fa48("37499") ? isAdminOrGlobalMod : (stryCov_9fa48("37499", "37500", "37501"), !isAdminOrGlobalMod)) {
          if (stryMutAct_9fa48("37502")) {
            {}
          } else {
            stryCov_9fa48("37502");
            throw new Error(stryMutAct_9fa48("37503") ? "" : (stryCov_9fa48("37503"), '[[error:no-privileges]]'));
          }
        }
        await user.rejectRegistration(data.username);
        await events.log(stryMutAct_9fa48("37504") ? {} : (stryCov_9fa48("37504"), {
          type: stryMutAct_9fa48("37505") ? "" : (stryCov_9fa48("37505"), 'registration-rejected'),
          uid: socket.uid,
          ip: socket.ip,
          username: data.username
        }));
      }
    };
    SocketUser.deleteInvitation = async function (socket, data) {
      if (stryMutAct_9fa48("37506")) {
        {}
      } else {
        stryCov_9fa48("37506");
        const isAdminOrGlobalMod = await user.isAdminOrGlobalMod(socket.uid);
        if (stryMutAct_9fa48("37509") ? false : stryMutAct_9fa48("37508") ? true : stryMutAct_9fa48("37507") ? isAdminOrGlobalMod : (stryCov_9fa48("37507", "37508", "37509"), !isAdminOrGlobalMod)) {
          if (stryMutAct_9fa48("37510")) {
            {}
          } else {
            stryCov_9fa48("37510");
            throw new Error(stryMutAct_9fa48("37511") ? "" : (stryCov_9fa48("37511"), '[[error:no-privileges]]'));
          }
        }
        await user.deleteInvitation(data.invitedBy, data.email);
      }
    };
  }
};