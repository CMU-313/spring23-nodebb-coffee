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
const crypto = require('crypto');
process.profile = function (operation, start) {
  if (stryMutAct_9fa48("49588")) {
    {}
  } else {
    stryCov_9fa48("49588");
    console.log(stryMutAct_9fa48("49589") ? "" : (stryCov_9fa48("49589"), '%s took %d milliseconds'), operation, process.elapsedTimeSince(start));
  }
};
process.elapsedTimeSince = function (start) {
  if (stryMutAct_9fa48("49590")) {
    {}
  } else {
    stryCov_9fa48("49590");
    const diff = process.hrtime(start);
    return stryMutAct_9fa48("49591") ? diff[0] * 1e3 - diff[1] / 1e6 : (stryCov_9fa48("49591"), (stryMutAct_9fa48("49592") ? diff[0] / 1e3 : (stryCov_9fa48("49592"), diff[0] * 1e3)) + (stryMutAct_9fa48("49593") ? diff[1] * 1e6 : (stryCov_9fa48("49593"), diff[1] / 1e6)));
  }
};
const utils = stryMutAct_9fa48("49594") ? {} : (stryCov_9fa48("49594"), {
  ...require('../public/src/utils.common')
});
utils.getLanguage = function () {
  if (stryMutAct_9fa48("49595")) {
    {}
  } else {
    stryCov_9fa48("49595");
    const meta = require('./meta');
    return (stryMutAct_9fa48("49598") ? meta.config || meta.config.defaultLang : stryMutAct_9fa48("49597") ? false : stryMutAct_9fa48("49596") ? true : (stryCov_9fa48("49596", "49597", "49598"), meta.config && meta.config.defaultLang)) ? meta.config.defaultLang : stryMutAct_9fa48("49599") ? "" : (stryCov_9fa48("49599"), 'en-GB');
  }
};
utils.generateUUID = function () {
  if (stryMutAct_9fa48("49600")) {
    {}
  } else {
    stryCov_9fa48("49600");
    // from https://github.com/tracker1/node-uuid4/blob/master/index.js
    let rnd = crypto.randomBytes(16);
    /* eslint-disable no-bitwise */
    rnd[6] = rnd[6] & 0x0f | 0x40;
    rnd[8] = rnd[8] & 0x3f | 0x80;
    /* eslint-enable no-bitwise */
    rnd = rnd.toString(stryMutAct_9fa48("49601") ? "" : (stryCov_9fa48("49601"), 'hex')).match(stryMutAct_9fa48("49606") ? /(.{8})(.{4})(.{4})(.{4})(.)/ : stryMutAct_9fa48("49605") ? /(.{8})(.{4})(.{4})(.)(.{12})/ : stryMutAct_9fa48("49604") ? /(.{8})(.{4})(.)(.{4})(.{12})/ : stryMutAct_9fa48("49603") ? /(.{8})(.)(.{4})(.{4})(.{12})/ : stryMutAct_9fa48("49602") ? /(.)(.{4})(.{4})(.{4})(.{12})/ : (stryCov_9fa48("49602", "49603", "49604", "49605", "49606"), /(.{8})(.{4})(.{4})(.{4})(.{12})/));
    rnd.shift();
    return rnd.join(stryMutAct_9fa48("49607") ? "" : (stryCov_9fa48("49607"), '-'));
  }
};
module.exports = utils;