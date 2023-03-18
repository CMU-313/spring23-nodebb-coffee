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
const meta = require('../../meta');
const widgets = require('../../widgets');
const Themes = module.exports;
Themes.getInstalled = async function () {
  if (stryMutAct_9fa48("35145")) {
    {}
  } else {
    stryCov_9fa48("35145");
    return await meta.themes.get();
  }
};
Themes.set = async function (socket, data) {
  if (stryMutAct_9fa48("35146")) {
    {}
  } else {
    stryCov_9fa48("35146");
    if (stryMutAct_9fa48("35149") ? false : stryMutAct_9fa48("35148") ? true : stryMutAct_9fa48("35147") ? data : (stryCov_9fa48("35147", "35148", "35149"), !data)) {
      if (stryMutAct_9fa48("35150")) {
        {}
      } else {
        stryCov_9fa48("35150");
        throw new Error(stryMutAct_9fa48("35151") ? "" : (stryCov_9fa48("35151"), '[[error:invalid-data]]'));
      }
    }
    if (stryMutAct_9fa48("35154") ? data.type !== 'local' : stryMutAct_9fa48("35153") ? false : stryMutAct_9fa48("35152") ? true : (stryCov_9fa48("35152", "35153", "35154"), data.type === (stryMutAct_9fa48("35155") ? "" : (stryCov_9fa48("35155"), 'local')))) {
      if (stryMutAct_9fa48("35156")) {
        {}
      } else {
        stryCov_9fa48("35156");
        await widgets.reset();
      }
    }
    data.ip = socket.ip;
    data.uid = socket.uid;
    await meta.themes.set(data);
  }
};