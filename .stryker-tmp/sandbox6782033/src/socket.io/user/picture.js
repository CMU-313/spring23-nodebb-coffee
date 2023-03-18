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
const plugins = require('../../plugins');
module.exports = function (SocketUser) {
  if (stryMutAct_9fa48("37400")) {
    {}
  } else {
    stryCov_9fa48("37400");
    SocketUser.removeUploadedPicture = async function (socket, data) {
      if (stryMutAct_9fa48("37401")) {
        {}
      } else {
        stryCov_9fa48("37401");
        if (stryMutAct_9fa48("37404") ? (!socket.uid || !data) && !data.uid : stryMutAct_9fa48("37403") ? false : stryMutAct_9fa48("37402") ? true : (stryCov_9fa48("37402", "37403", "37404"), (stryMutAct_9fa48("37406") ? !socket.uid && !data : stryMutAct_9fa48("37405") ? false : (stryCov_9fa48("37405", "37406"), (stryMutAct_9fa48("37407") ? socket.uid : (stryCov_9fa48("37407"), !socket.uid)) || (stryMutAct_9fa48("37408") ? data : (stryCov_9fa48("37408"), !data)))) || (stryMutAct_9fa48("37409") ? data.uid : (stryCov_9fa48("37409"), !data.uid)))) {
          if (stryMutAct_9fa48("37410")) {
            {}
          } else {
            stryCov_9fa48("37410");
            throw new Error(stryMutAct_9fa48("37411") ? "" : (stryCov_9fa48("37411"), '[[error:invalid-data]]'));
          }
        }
        await user.isAdminOrSelf(socket.uid, data.uid);
        // 'keepAllUserImages' is ignored, since there is explicit user intent
        const userData = await user.removeProfileImage(data.uid);
        plugins.hooks.fire(stryMutAct_9fa48("37412") ? "" : (stryCov_9fa48("37412"), 'action:user.removeUploadedPicture'), stryMutAct_9fa48("37413") ? {} : (stryCov_9fa48("37413"), {
          callerUid: socket.uid,
          uid: data.uid,
          user: userData
        }));
      }
    };
    SocketUser.getProfilePictures = async function (socket, data) {
      if (stryMutAct_9fa48("37414")) {
        {}
      } else {
        stryCov_9fa48("37414");
        if (stryMutAct_9fa48("37417") ? !data && !data.uid : stryMutAct_9fa48("37416") ? false : stryMutAct_9fa48("37415") ? true : (stryCov_9fa48("37415", "37416", "37417"), (stryMutAct_9fa48("37418") ? data : (stryCov_9fa48("37418"), !data)) || (stryMutAct_9fa48("37419") ? data.uid : (stryCov_9fa48("37419"), !data.uid)))) {
          if (stryMutAct_9fa48("37420")) {
            {}
          } else {
            stryCov_9fa48("37420");
            throw new Error(stryMutAct_9fa48("37421") ? "" : (stryCov_9fa48("37421"), '[[error:invalid-data]]'));
          }
        }
        const [list, uploaded] = await Promise.all(stryMutAct_9fa48("37422") ? [] : (stryCov_9fa48("37422"), [plugins.hooks.fire(stryMutAct_9fa48("37423") ? "" : (stryCov_9fa48("37423"), 'filter:user.listPictures'), stryMutAct_9fa48("37424") ? {} : (stryCov_9fa48("37424"), {
          uid: data.uid,
          pictures: stryMutAct_9fa48("37425") ? ["Stryker was here"] : (stryCov_9fa48("37425"), [])
        })), user.getUserField(data.uid, stryMutAct_9fa48("37426") ? "" : (stryCov_9fa48("37426"), 'uploadedpicture'))]));
        if (stryMutAct_9fa48("37428") ? false : stryMutAct_9fa48("37427") ? true : (stryCov_9fa48("37427", "37428"), uploaded)) {
          if (stryMutAct_9fa48("37429")) {
            {}
          } else {
            stryCov_9fa48("37429");
            list.pictures.push(stryMutAct_9fa48("37430") ? {} : (stryCov_9fa48("37430"), {
              type: stryMutAct_9fa48("37431") ? "" : (stryCov_9fa48("37431"), 'uploaded'),
              url: uploaded,
              text: stryMutAct_9fa48("37432") ? "" : (stryCov_9fa48("37432"), '[[user:uploaded_picture]]')
            }));
          }
        }
        return list.pictures;
      }
    };
  }
};