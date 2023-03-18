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
const SocketCache = module.exports;
const db = require('../../database');
const plugins = require('../../plugins');
SocketCache.clear = async function (socket, data) {
  if (stryMutAct_9fa48("34863")) {
    {}
  } else {
    stryCov_9fa48("34863");
    let caches = stryMutAct_9fa48("34864") ? {} : (stryCov_9fa48("34864"), {
      post: require('../../posts/cache'),
      object: db.objectCache,
      group: require('../../groups').cache,
      local: require('../../cache')
    });
    caches = await plugins.hooks.fire(stryMutAct_9fa48("34865") ? "" : (stryCov_9fa48("34865"), 'filter:admin.cache.get'), caches);
    if (stryMutAct_9fa48("34868") ? false : stryMutAct_9fa48("34867") ? true : stryMutAct_9fa48("34866") ? caches[data.name] : (stryCov_9fa48("34866", "34867", "34868"), !caches[data.name])) {
      if (stryMutAct_9fa48("34869")) {
        {}
      } else {
        stryCov_9fa48("34869");
        return;
      }
    }
    caches[data.name].reset();
  }
};
SocketCache.toggle = async function (socket, data) {
  if (stryMutAct_9fa48("34870")) {
    {}
  } else {
    stryCov_9fa48("34870");
    let caches = stryMutAct_9fa48("34871") ? {} : (stryCov_9fa48("34871"), {
      post: require('../../posts/cache'),
      object: db.objectCache,
      group: require('../../groups').cache,
      local: require('../../cache')
    });
    caches = await plugins.hooks.fire(stryMutAct_9fa48("34872") ? "" : (stryCov_9fa48("34872"), 'filter:admin.cache.get'), caches);
    if (stryMutAct_9fa48("34875") ? false : stryMutAct_9fa48("34874") ? true : stryMutAct_9fa48("34873") ? caches[data.name] : (stryCov_9fa48("34873", "34874", "34875"), !caches[data.name])) {
      if (stryMutAct_9fa48("34876")) {
        {}
      } else {
        stryCov_9fa48("34876");
        return;
      }
    }
    caches[data.name].enabled = data.enabled;
  }
};