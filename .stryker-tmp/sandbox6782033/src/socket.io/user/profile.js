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
const privileges = require('../../privileges');
const plugins = require('../../plugins');
const sockets = require('..');
const api = require('../../api');
module.exports = function (SocketUser) {
  if (stryMutAct_9fa48("37433")) {
    {}
  } else {
    stryCov_9fa48("37433");
    SocketUser.updateCover = async function (socket, data) {
      if (stryMutAct_9fa48("37434")) {
        {}
      } else {
        stryCov_9fa48("37434");
        if (stryMutAct_9fa48("37437") ? false : stryMutAct_9fa48("37436") ? true : stryMutAct_9fa48("37435") ? socket.uid : (stryCov_9fa48("37435", "37436", "37437"), !socket.uid)) {
          if (stryMutAct_9fa48("37438")) {
            {}
          } else {
            stryCov_9fa48("37438");
            throw new Error(stryMutAct_9fa48("37439") ? "" : (stryCov_9fa48("37439"), '[[error:no-privileges]]'));
          }
        }
        await user.isAdminOrGlobalModOrSelf(socket.uid, data.uid);
        await user.checkMinReputation(socket.uid, data.uid, stryMutAct_9fa48("37440") ? "" : (stryCov_9fa48("37440"), 'min:rep:cover-picture'));
        return await user.updateCoverPicture(data);
      }
    };
    SocketUser.uploadCroppedPicture = async function (socket, data) {
      if (stryMutAct_9fa48("37441")) {
        {}
      } else {
        stryCov_9fa48("37441");
        if (stryMutAct_9fa48("37444") ? !socket.uid && !(await privileges.users.canEdit(socket.uid, data.uid)) : stryMutAct_9fa48("37443") ? false : stryMutAct_9fa48("37442") ? true : (stryCov_9fa48("37442", "37443", "37444"), (stryMutAct_9fa48("37445") ? socket.uid : (stryCov_9fa48("37445"), !socket.uid)) || (stryMutAct_9fa48("37446") ? await privileges.users.canEdit(socket.uid, data.uid) : (stryCov_9fa48("37446"), !(await privileges.users.canEdit(socket.uid, data.uid)))))) {
          if (stryMutAct_9fa48("37447")) {
            {}
          } else {
            stryCov_9fa48("37447");
            throw new Error(stryMutAct_9fa48("37448") ? "" : (stryCov_9fa48("37448"), '[[error:no-privileges]]'));
          }
        }
        await user.checkMinReputation(socket.uid, data.uid, stryMutAct_9fa48("37449") ? "" : (stryCov_9fa48("37449"), 'min:rep:profile-picture'));
        data.callerUid = socket.uid;
        return await user.uploadCroppedPicture(data);
      }
    };
    SocketUser.removeCover = async function (socket, data) {
      if (stryMutAct_9fa48("37450")) {
        {}
      } else {
        stryCov_9fa48("37450");
        if (stryMutAct_9fa48("37453") ? false : stryMutAct_9fa48("37452") ? true : stryMutAct_9fa48("37451") ? socket.uid : (stryCov_9fa48("37451", "37452", "37453"), !socket.uid)) {
          if (stryMutAct_9fa48("37454")) {
            {}
          } else {
            stryCov_9fa48("37454");
            throw new Error(stryMutAct_9fa48("37455") ? "" : (stryCov_9fa48("37455"), '[[error:no-privileges]]'));
          }
        }
        await user.isAdminOrGlobalModOrSelf(socket.uid, data.uid);
        const userData = await user.getUserFields(data.uid, stryMutAct_9fa48("37456") ? [] : (stryCov_9fa48("37456"), [stryMutAct_9fa48("37457") ? "" : (stryCov_9fa48("37457"), 'cover:url')]));
        // 'keepAllUserImages' is ignored, since there is explicit user intent
        await user.removeCoverPicture(data);
        plugins.hooks.fire(stryMutAct_9fa48("37458") ? "" : (stryCov_9fa48("37458"), 'action:user.removeCoverPicture'), stryMutAct_9fa48("37459") ? {} : (stryCov_9fa48("37459"), {
          callerUid: socket.uid,
          uid: data.uid,
          user: userData
        }));
      }
    };
    SocketUser.toggleBlock = async function (socket, data) {
      if (stryMutAct_9fa48("37460")) {
        {}
      } else {
        stryCov_9fa48("37460");
        const isBlocked = await user.blocks.is(data.blockeeUid, data.blockerUid);
        await user.blocks.can(socket.uid, data.blockerUid, data.blockeeUid, isBlocked ? stryMutAct_9fa48("37461") ? "" : (stryCov_9fa48("37461"), 'unblock') : stryMutAct_9fa48("37462") ? "" : (stryCov_9fa48("37462"), 'block'));
        await user.blocks[isBlocked ? stryMutAct_9fa48("37463") ? "" : (stryCov_9fa48("37463"), 'remove') : stryMutAct_9fa48("37464") ? "" : (stryCov_9fa48("37464"), 'add')](data.blockeeUid, data.blockerUid);
        return stryMutAct_9fa48("37465") ? isBlocked : (stryCov_9fa48("37465"), !isBlocked);
      }
    };
    SocketUser.exportProfile = async function (socket, data) {
      if (stryMutAct_9fa48("37466")) {
        {}
      } else {
        stryCov_9fa48("37466");
        await doExport(socket, data, stryMutAct_9fa48("37467") ? "" : (stryCov_9fa48("37467"), 'profile'));
      }
    };
    SocketUser.exportPosts = async function (socket, data) {
      if (stryMutAct_9fa48("37468")) {
        {}
      } else {
        stryCov_9fa48("37468");
        await doExport(socket, data, stryMutAct_9fa48("37469") ? "" : (stryCov_9fa48("37469"), 'posts'));
      }
    };
    SocketUser.exportUploads = async function (socket, data) {
      if (stryMutAct_9fa48("37470")) {
        {}
      } else {
        stryCov_9fa48("37470");
        await doExport(socket, data, stryMutAct_9fa48("37471") ? "" : (stryCov_9fa48("37471"), 'uploads'));
      }
    };
    async function doExport(socket, data, type) {
      if (stryMutAct_9fa48("37472")) {
        {}
      } else {
        stryCov_9fa48("37472");
        sockets.warnDeprecated(socket, stryMutAct_9fa48("37473") ? "" : (stryCov_9fa48("37473"), 'POST /api/v3/users/:uid/exports/:type'));
        if (stryMutAct_9fa48("37476") ? false : stryMutAct_9fa48("37475") ? true : stryMutAct_9fa48("37474") ? socket.uid : (stryCov_9fa48("37474", "37475", "37476"), !socket.uid)) {
          if (stryMutAct_9fa48("37477")) {
            {}
          } else {
            stryCov_9fa48("37477");
            throw new Error(stryMutAct_9fa48("37478") ? "" : (stryCov_9fa48("37478"), '[[error:invalid-uid]]'));
          }
        }
        if (stryMutAct_9fa48("37481") ? !data && parseInt(data.uid, 10) <= 0 : stryMutAct_9fa48("37480") ? false : stryMutAct_9fa48("37479") ? true : (stryCov_9fa48("37479", "37480", "37481"), (stryMutAct_9fa48("37482") ? data : (stryCov_9fa48("37482"), !data)) || (stryMutAct_9fa48("37485") ? parseInt(data.uid, 10) > 0 : stryMutAct_9fa48("37484") ? parseInt(data.uid, 10) < 0 : stryMutAct_9fa48("37483") ? false : (stryCov_9fa48("37483", "37484", "37485"), parseInt(data.uid, 10) <= 0)))) {
          if (stryMutAct_9fa48("37486")) {
            {}
          } else {
            stryCov_9fa48("37486");
            throw new Error(stryMutAct_9fa48("37487") ? "" : (stryCov_9fa48("37487"), '[[error:invalid-data]]'));
          }
        }
        await user.isAdminOrSelf(socket.uid, data.uid);
        api.users.generateExport(socket, stryMutAct_9fa48("37488") ? {} : (stryCov_9fa48("37488"), {
          type,
          ...data
        }));
      }
    }
  }
};