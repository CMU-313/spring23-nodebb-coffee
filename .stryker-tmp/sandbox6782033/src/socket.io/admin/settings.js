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
const events = require('../../events');
const Settings = module.exports;
Settings.get = async function (socket, data) {
  if (stryMutAct_9fa48("35122")) {
    {}
  } else {
    stryCov_9fa48("35122");
    return await meta.settings.get(data.hash);
  }
};
Settings.set = async function (socket, data) {
  if (stryMutAct_9fa48("35123")) {
    {}
  } else {
    stryCov_9fa48("35123");
    await meta.settings.set(data.hash, data.values);
    const eventData = data.values;
    eventData.type = stryMutAct_9fa48("35124") ? "" : (stryCov_9fa48("35124"), 'settings-change');
    eventData.uid = socket.uid;
    eventData.ip = socket.ip;
    eventData.hash = data.hash;
    await events.log(eventData);
  }
};
Settings.clearSitemapCache = async function () {
  if (stryMutAct_9fa48("35125")) {
    {}
  } else {
    stryCov_9fa48("35125");
    require('../../sitemap').clearCache();
  }
};