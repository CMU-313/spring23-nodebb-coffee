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
const plugins = require('../../plugins');
const events = require('../../events');
const db = require('../../database');
const Plugins = module.exports;
Plugins.toggleActive = async function (socket, plugin_id) {
  if (stryMutAct_9fa48("35002")) {
    {}
  } else {
    stryCov_9fa48("35002");
    require('../../posts/cache').reset();
    const data = await plugins.toggleActive(plugin_id);
    await events.log(stryMutAct_9fa48("35003") ? {} : (stryCov_9fa48("35003"), {
      type: stryMutAct_9fa48("35004") ? `` : (stryCov_9fa48("35004"), `plugin-${data.active ? stryMutAct_9fa48("35005") ? "" : (stryCov_9fa48("35005"), 'activate') : stryMutAct_9fa48("35006") ? "" : (stryCov_9fa48("35006"), 'deactivate')}`),
      text: plugin_id,
      uid: socket.uid
    }));
    return data;
  }
};
Plugins.toggleInstall = async function (socket, data) {
  if (stryMutAct_9fa48("35007")) {
    {}
  } else {
    stryCov_9fa48("35007");
    require('../../posts/cache').reset();
    await plugins.checkWhitelist(data.id, data.version);
    const pluginData = await plugins.toggleInstall(data.id, data.version);
    await events.log(stryMutAct_9fa48("35008") ? {} : (stryCov_9fa48("35008"), {
      type: stryMutAct_9fa48("35009") ? `` : (stryCov_9fa48("35009"), `plugin-${pluginData.installed ? stryMutAct_9fa48("35010") ? "" : (stryCov_9fa48("35010"), 'install') : stryMutAct_9fa48("35011") ? "" : (stryCov_9fa48("35011"), 'uninstall')}`),
      text: data.id,
      version: data.version,
      uid: socket.uid
    }));
    return pluginData;
  }
};
Plugins.getActive = async function () {
  if (stryMutAct_9fa48("35012")) {
    {}
  } else {
    stryCov_9fa48("35012");
    return await plugins.getActive();
  }
};
Plugins.orderActivePlugins = async function (socket, data) {
  if (stryMutAct_9fa48("35013")) {
    {}
  } else {
    stryCov_9fa48("35013");
    if (stryMutAct_9fa48("35015") ? false : stryMutAct_9fa48("35014") ? true : (stryCov_9fa48("35014", "35015"), nconf.get(stryMutAct_9fa48("35016") ? "" : (stryCov_9fa48("35016"), 'plugins:active')))) {
      if (stryMutAct_9fa48("35017")) {
        {}
      } else {
        stryCov_9fa48("35017");
        throw new Error(stryMutAct_9fa48("35018") ? "" : (stryCov_9fa48("35018"), '[[error:plugins-set-in-configuration]]'));
      }
    }
    data = stryMutAct_9fa48("35019") ? data : (stryCov_9fa48("35019"), data.filter(stryMutAct_9fa48("35020") ? () => undefined : (stryCov_9fa48("35020"), plugin => stryMutAct_9fa48("35023") ? plugin || plugin.name : stryMutAct_9fa48("35022") ? false : stryMutAct_9fa48("35021") ? true : (stryCov_9fa48("35021", "35022", "35023"), plugin && plugin.name))));
    await Promise.all(data.map(stryMutAct_9fa48("35024") ? () => undefined : (stryCov_9fa48("35024"), plugin => db.sortedSetAdd(stryMutAct_9fa48("35025") ? "" : (stryCov_9fa48("35025"), 'plugins:active'), stryMutAct_9fa48("35028") ? plugin.order && 0 : stryMutAct_9fa48("35027") ? false : stryMutAct_9fa48("35026") ? true : (stryCov_9fa48("35026", "35027", "35028"), plugin.order || 0), plugin.name))));
  }
};
Plugins.upgrade = async function (socket, data) {
  if (stryMutAct_9fa48("35029")) {
    {}
  } else {
    stryCov_9fa48("35029");
    return await plugins.upgrade(data.id, data.version);
  }
};