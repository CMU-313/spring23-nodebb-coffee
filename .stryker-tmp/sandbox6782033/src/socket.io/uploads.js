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
const socketUser = require('./user');
const socketGroup = require('./groups');
const image = require('../image');
const meta = require('../meta');
const inProgress = {};
const uploads = module.exports;
uploads.upload = async function (socket, data) {
  if (stryMutAct_9fa48("37351")) {
    {}
  } else {
    stryCov_9fa48("37351");
    const methodToFunc = stryMutAct_9fa48("37352") ? {} : (stryCov_9fa48("37352"), {
      'user.uploadCroppedPicture': socketUser.uploadCroppedPicture,
      'user.updateCover': socketUser.updateCover,
      'groups.cover.update': socketGroup.cover.update
    });
    if (stryMutAct_9fa48("37355") ? (!socket.uid || !data || !data.chunk || !data.params || !data.params.method) && !methodToFunc.hasOwnProperty(data.params.method) : stryMutAct_9fa48("37354") ? false : stryMutAct_9fa48("37353") ? true : (stryCov_9fa48("37353", "37354", "37355"), (stryMutAct_9fa48("37357") ? (!socket.uid || !data || !data.chunk || !data.params) && !data.params.method : stryMutAct_9fa48("37356") ? false : (stryCov_9fa48("37356", "37357"), (stryMutAct_9fa48("37359") ? (!socket.uid || !data || !data.chunk) && !data.params : stryMutAct_9fa48("37358") ? false : (stryCov_9fa48("37358", "37359"), (stryMutAct_9fa48("37361") ? (!socket.uid || !data) && !data.chunk : stryMutAct_9fa48("37360") ? false : (stryCov_9fa48("37360", "37361"), (stryMutAct_9fa48("37363") ? !socket.uid && !data : stryMutAct_9fa48("37362") ? false : (stryCov_9fa48("37362", "37363"), (stryMutAct_9fa48("37364") ? socket.uid : (stryCov_9fa48("37364"), !socket.uid)) || (stryMutAct_9fa48("37365") ? data : (stryCov_9fa48("37365"), !data)))) || (stryMutAct_9fa48("37366") ? data.chunk : (stryCov_9fa48("37366"), !data.chunk)))) || (stryMutAct_9fa48("37367") ? data.params : (stryCov_9fa48("37367"), !data.params)))) || (stryMutAct_9fa48("37368") ? data.params.method : (stryCov_9fa48("37368"), !data.params.method)))) || (stryMutAct_9fa48("37369") ? methodToFunc.hasOwnProperty(data.params.method) : (stryCov_9fa48("37369"), !methodToFunc.hasOwnProperty(data.params.method))))) {
      if (stryMutAct_9fa48("37370")) {
        {}
      } else {
        stryCov_9fa48("37370");
        throw new Error(stryMutAct_9fa48("37371") ? "" : (stryCov_9fa48("37371"), '[[error:invalid-data]]'));
      }
    }
    inProgress[socket.id] = stryMutAct_9fa48("37374") ? inProgress[socket.id] && Object.create(null) : stryMutAct_9fa48("37373") ? false : stryMutAct_9fa48("37372") ? true : (stryCov_9fa48("37372", "37373", "37374"), inProgress[socket.id] || Object.create(null));
    const socketUploads = inProgress[socket.id];
    const {
      method
    } = data.params;
    socketUploads[method] = stryMutAct_9fa48("37377") ? socketUploads[method] && {
      imageData: ''
    } : stryMutAct_9fa48("37376") ? false : stryMutAct_9fa48("37375") ? true : (stryCov_9fa48("37375", "37376", "37377"), socketUploads[method] || (stryMutAct_9fa48("37378") ? {} : (stryCov_9fa48("37378"), {
      imageData: stryMutAct_9fa48("37379") ? "Stryker was here!" : (stryCov_9fa48("37379"), '')
    })));
    stryMutAct_9fa48("37380") ? socketUploads[method].imageData -= data.chunk : (stryCov_9fa48("37380"), socketUploads[method].imageData += data.chunk);
    try {
      if (stryMutAct_9fa48("37381")) {
        {}
      } else {
        stryCov_9fa48("37381");
        const maxSize = (stryMutAct_9fa48("37384") ? data.params.method !== 'user.uploadCroppedPicture' : stryMutAct_9fa48("37383") ? false : stryMutAct_9fa48("37382") ? true : (stryCov_9fa48("37382", "37383", "37384"), data.params.method === (stryMutAct_9fa48("37385") ? "" : (stryCov_9fa48("37385"), 'user.uploadCroppedPicture')))) ? meta.config.maximumProfileImageSize : meta.config.maximumCoverImageSize;
        const size = image.sizeFromBase64(socketUploads[method].imageData);
        if (stryMutAct_9fa48("37389") ? size <= maxSize * 1024 : stryMutAct_9fa48("37388") ? size >= maxSize * 1024 : stryMutAct_9fa48("37387") ? false : stryMutAct_9fa48("37386") ? true : (stryCov_9fa48("37386", "37387", "37388", "37389"), size > (stryMutAct_9fa48("37390") ? maxSize / 1024 : (stryCov_9fa48("37390"), maxSize * 1024)))) {
          if (stryMutAct_9fa48("37391")) {
            {}
          } else {
            stryCov_9fa48("37391");
            throw new Error(stryMutAct_9fa48("37392") ? `` : (stryCov_9fa48("37392"), `[[error:file-too-big, ${maxSize}]]`));
          }
        }
        if (stryMutAct_9fa48("37396") ? socketUploads[method].imageData.length >= data.params.size : stryMutAct_9fa48("37395") ? socketUploads[method].imageData.length <= data.params.size : stryMutAct_9fa48("37394") ? false : stryMutAct_9fa48("37393") ? true : (stryCov_9fa48("37393", "37394", "37395", "37396"), socketUploads[method].imageData.length < data.params.size)) {
          if (stryMutAct_9fa48("37397")) {
            {}
          } else {
            stryCov_9fa48("37397");
            return;
          }
        }
        data.params.imageData = socketUploads[method].imageData;
        const result = await methodToFunc[data.params.method](socket, data.params);
        delete socketUploads[method];
        return result;
      }
    } catch (err) {
      if (stryMutAct_9fa48("37398")) {
        {}
      } else {
        stryCov_9fa48("37398");
        delete inProgress[socket.id];
        throw err;
      }
    }
  }
};
uploads.clear = function (sid) {
  if (stryMutAct_9fa48("37399")) {
    {}
  } else {
    stryCov_9fa48("37399");
    delete inProgress[sid];
  }
};