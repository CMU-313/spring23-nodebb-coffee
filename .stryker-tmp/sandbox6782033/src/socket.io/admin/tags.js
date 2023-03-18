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
const topics = require('../../topics');
const Tags = module.exports;
Tags.create = async function (socket, data) {
  if (stryMutAct_9fa48("35127")) {
    {}
  } else {
    stryCov_9fa48("35127");
    if (stryMutAct_9fa48("35130") ? false : stryMutAct_9fa48("35129") ? true : stryMutAct_9fa48("35128") ? data : (stryCov_9fa48("35128", "35129", "35130"), !data)) {
      if (stryMutAct_9fa48("35131")) {
        {}
      } else {
        stryCov_9fa48("35131");
        throw new Error(stryMutAct_9fa48("35132") ? "" : (stryCov_9fa48("35132"), '[[error:invalid-data]]'));
      }
    }
    await topics.createEmptyTag(data.tag);
  }
};
Tags.rename = async function (socket, data) {
  if (stryMutAct_9fa48("35133")) {
    {}
  } else {
    stryCov_9fa48("35133");
    if (stryMutAct_9fa48("35136") ? false : stryMutAct_9fa48("35135") ? true : stryMutAct_9fa48("35134") ? Array.isArray(data) : (stryCov_9fa48("35134", "35135", "35136"), !Array.isArray(data))) {
      if (stryMutAct_9fa48("35137")) {
        {}
      } else {
        stryCov_9fa48("35137");
        throw new Error(stryMutAct_9fa48("35138") ? "" : (stryCov_9fa48("35138"), '[[error:invalid-data]]'));
      }
    }
    await topics.renameTags(data);
  }
};
Tags.deleteTags = async function (socket, data) {
  if (stryMutAct_9fa48("35139")) {
    {}
  } else {
    stryCov_9fa48("35139");
    if (stryMutAct_9fa48("35142") ? false : stryMutAct_9fa48("35141") ? true : stryMutAct_9fa48("35140") ? data : (stryCov_9fa48("35140", "35141", "35142"), !data)) {
      if (stryMutAct_9fa48("35143")) {
        {}
      } else {
        stryCov_9fa48("35143");
        throw new Error(stryMutAct_9fa48("35144") ? "" : (stryCov_9fa48("35144"), '[[error:invalid-data]]'));
      }
    }
    await topics.deleteTags(data.tags);
  }
};