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
const nconf = require('nconf');
const meta = require('./meta');
const relative_path = nconf.get(stryMutAct_9fa48("12900") ? "" : (stryCov_9fa48("12900"), 'relative_path'));
const coverPhoto = module.exports;
coverPhoto.getDefaultGroupCover = function (groupName) {
  if (stryMutAct_9fa48("12901")) {
    {}
  } else {
    stryCov_9fa48("12901");
    return getCover(stryMutAct_9fa48("12902") ? "" : (stryCov_9fa48("12902"), 'groups'), groupName);
  }
};
coverPhoto.getDefaultProfileCover = function (uid) {
  if (stryMutAct_9fa48("12903")) {
    {}
  } else {
    stryCov_9fa48("12903");
    return getCover(stryMutAct_9fa48("12904") ? "" : (stryCov_9fa48("12904"), 'profile'), parseInt(uid, 10));
  }
};
function getCover(type, id) {
  if (stryMutAct_9fa48("12905")) {
    {}
  } else {
    stryCov_9fa48("12905");
    const defaultCover = stryMutAct_9fa48("12906") ? `` : (stryCov_9fa48("12906"), `${relative_path}/assets/images/cover-default.png`);
    if (stryMutAct_9fa48("12908") ? false : stryMutAct_9fa48("12907") ? true : (stryCov_9fa48("12907", "12908"), meta.config[stryMutAct_9fa48("12909") ? `` : (stryCov_9fa48("12909"), `${type}:defaultCovers`)])) {
      if (stryMutAct_9fa48("12910")) {
        {}
      } else {
        stryCov_9fa48("12910");
        const covers = stryMutAct_9fa48("12911") ? String(meta.config[`${type}:defaultCovers`]).split(/[\s,]+/g) : (stryCov_9fa48("12911"), String(meta.config[stryMutAct_9fa48("12912") ? `` : (stryCov_9fa48("12912"), `${type}:defaultCovers`)]).trim().split(stryMutAct_9fa48("12915") ? /[\S,]+/g : stryMutAct_9fa48("12914") ? /[^\s,]+/g : stryMutAct_9fa48("12913") ? /[\s,]/g : (stryCov_9fa48("12913", "12914", "12915"), /[\s,]+/g)));
        let coverPhoto = defaultCover;
        if (stryMutAct_9fa48("12918") ? false : stryMutAct_9fa48("12917") ? true : stryMutAct_9fa48("12916") ? covers.length : (stryCov_9fa48("12916", "12917", "12918"), !covers.length)) {
          if (stryMutAct_9fa48("12919")) {
            {}
          } else {
            stryCov_9fa48("12919");
            return coverPhoto;
          }
        }
        if (stryMutAct_9fa48("12922") ? typeof id !== 'string' : stryMutAct_9fa48("12921") ? false : stryMutAct_9fa48("12920") ? true : (stryCov_9fa48("12920", "12921", "12922"), typeof id === (stryMutAct_9fa48("12923") ? "" : (stryCov_9fa48("12923"), 'string')))) {
          if (stryMutAct_9fa48("12924")) {
            {}
          } else {
            stryCov_9fa48("12924");
            id = stryMutAct_9fa48("12925") ? (id.charCodeAt(0) + id.charCodeAt(1)) * covers.length : (stryCov_9fa48("12925"), (stryMutAct_9fa48("12926") ? id.charCodeAt(0) - id.charCodeAt(1) : (stryCov_9fa48("12926"), id.charCodeAt(0) + id.charCodeAt(1))) % covers.length);
          }
        } else {
          if (stryMutAct_9fa48("12927")) {
            {}
          } else {
            stryCov_9fa48("12927");
            stryMutAct_9fa48("12928") ? id *= covers.length : (stryCov_9fa48("12928"), id %= covers.length);
          }
        }
        if (stryMutAct_9fa48("12930") ? false : stryMutAct_9fa48("12929") ? true : (stryCov_9fa48("12929", "12930"), covers[id])) {
          if (stryMutAct_9fa48("12931")) {
            {}
          } else {
            stryCov_9fa48("12931");
            coverPhoto = (stryMutAct_9fa48("12932") ? covers[id].endsWith('http') : (stryCov_9fa48("12932"), covers[id].startsWith(stryMutAct_9fa48("12933") ? "" : (stryCov_9fa48("12933"), 'http')))) ? covers[id] : stryMutAct_9fa48("12934") ? relative_path - covers[id] : (stryCov_9fa48("12934"), relative_path + covers[id]);
          }
        }
        return coverPhoto;
      }
    }
    return defaultCover;
  }
}