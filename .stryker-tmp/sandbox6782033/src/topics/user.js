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
const db = require('../database');
module.exports = function (Topics) {
  if (stryMutAct_9fa48("41673")) {
    {}
  } else {
    stryCov_9fa48("41673");
    Topics.isOwner = async function (tid, uid) {
      if (stryMutAct_9fa48("41674")) {
        {}
      } else {
        stryCov_9fa48("41674");
        uid = parseInt(uid, 10);
        if (stryMutAct_9fa48("41678") ? uid > 0 : stryMutAct_9fa48("41677") ? uid < 0 : stryMutAct_9fa48("41676") ? false : stryMutAct_9fa48("41675") ? true : (stryCov_9fa48("41675", "41676", "41677", "41678"), uid <= 0)) {
          if (stryMutAct_9fa48("41679")) {
            {}
          } else {
            stryCov_9fa48("41679");
            return stryMutAct_9fa48("41680") ? true : (stryCov_9fa48("41680"), false);
          }
        }
        const author = await Topics.getTopicField(tid, stryMutAct_9fa48("41681") ? "" : (stryCov_9fa48("41681"), 'uid'));
        return stryMutAct_9fa48("41684") ? author !== uid : stryMutAct_9fa48("41683") ? false : stryMutAct_9fa48("41682") ? true : (stryCov_9fa48("41682", "41683", "41684"), author === uid);
      }
    };
    Topics.getUids = async function (tid) {
      if (stryMutAct_9fa48("41685")) {
        {}
      } else {
        stryCov_9fa48("41685");
        return await db.getSortedSetRevRangeByScore(stryMutAct_9fa48("41686") ? `` : (stryCov_9fa48("41686"), `tid:${tid}:posters`), 0, stryMutAct_9fa48("41687") ? +1 : (stryCov_9fa48("41687"), -1), stryMutAct_9fa48("41688") ? "" : (stryCov_9fa48("41688"), '+inf'), 1);
      }
    };
  }
};