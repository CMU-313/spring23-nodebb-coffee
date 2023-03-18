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
const winston = require('winston');
const plugins = require('../../plugins');
const meta = require('../../meta');
const pluginsController = module.exports;
pluginsController.get = async function (req, res) {
  if (stryMutAct_9fa48("7350")) {
    {}
  } else {
    stryCov_9fa48("7350");
    const [compatible, all, trending] = await Promise.all(stryMutAct_9fa48("7351") ? [] : (stryCov_9fa48("7351"), [getCompatiblePlugins(), getAllPlugins(), plugins.listTrending()]));
    const compatiblePkgNames = compatible.map(stryMutAct_9fa48("7352") ? () => undefined : (stryCov_9fa48("7352"), pkgData => pkgData.name));
    const installedPlugins = stryMutAct_9fa48("7353") ? compatible : (stryCov_9fa48("7353"), compatible.filter(stryMutAct_9fa48("7354") ? () => undefined : (stryCov_9fa48("7354"), plugin => stryMutAct_9fa48("7357") ? plugin || plugin.installed : stryMutAct_9fa48("7356") ? false : stryMutAct_9fa48("7355") ? true : (stryCov_9fa48("7355", "7356", "7357"), plugin && plugin.installed))));
    const activePlugins = stryMutAct_9fa48("7358") ? all : (stryCov_9fa48("7358"), all.filter(stryMutAct_9fa48("7359") ? () => undefined : (stryCov_9fa48("7359"), plugin => stryMutAct_9fa48("7362") ? plugin && plugin.installed || plugin.active : stryMutAct_9fa48("7361") ? false : stryMutAct_9fa48("7360") ? true : (stryCov_9fa48("7360", "7361", "7362"), (stryMutAct_9fa48("7364") ? plugin || plugin.installed : stryMutAct_9fa48("7363") ? true : (stryCov_9fa48("7363", "7364"), plugin && plugin.installed)) && plugin.active))));
    const trendingScores = trending.reduce((memo, cur) => {
      if (stryMutAct_9fa48("7365")) {
        {}
      } else {
        stryCov_9fa48("7365");
        memo[cur.label] = cur.value;
        return memo;
      }
    }, {});
    const trendingPlugins = stryMutAct_9fa48("7367") ? all.sort((a, b) => trendingScores[b.id] - trendingScores[a.id]).map(plugin => {
      plugin.downloads = trendingScores[plugin.id];
      return plugin;
    }) : stryMutAct_9fa48("7366") ? all.filter(plugin => plugin && Object.keys(trendingScores).includes(plugin.id)).map(plugin => {
      plugin.downloads = trendingScores[plugin.id];
      return plugin;
    }) : (stryCov_9fa48("7366", "7367"), all.filter(stryMutAct_9fa48("7368") ? () => undefined : (stryCov_9fa48("7368"), plugin => stryMutAct_9fa48("7371") ? plugin || Object.keys(trendingScores).includes(plugin.id) : stryMutAct_9fa48("7370") ? false : stryMutAct_9fa48("7369") ? true : (stryCov_9fa48("7369", "7370", "7371"), plugin && Object.keys(trendingScores).includes(plugin.id)))).sort(stryMutAct_9fa48("7372") ? () => undefined : (stryCov_9fa48("7372"), (a, b) => stryMutAct_9fa48("7373") ? trendingScores[b.id] + trendingScores[a.id] : (stryCov_9fa48("7373"), trendingScores[b.id] - trendingScores[a.id]))).map(plugin => {
      if (stryMutAct_9fa48("7374")) {
        {}
      } else {
        stryCov_9fa48("7374");
        plugin.downloads = trendingScores[plugin.id];
        return plugin;
      }
    }));
    res.render(stryMutAct_9fa48("7375") ? "" : (stryCov_9fa48("7375"), 'admin/extend/plugins'), stryMutAct_9fa48("7376") ? {} : (stryCov_9fa48("7376"), {
      installed: installedPlugins,
      installedCount: installedPlugins.length,
      activeCount: activePlugins.length,
      inactiveCount: Math.max(0, stryMutAct_9fa48("7377") ? installedPlugins.length + activePlugins.length : (stryCov_9fa48("7377"), installedPlugins.length - activePlugins.length)),
      canChangeState: stryMutAct_9fa48("7378") ? nconf.get('plugins:active') : (stryCov_9fa48("7378"), !nconf.get(stryMutAct_9fa48("7379") ? "" : (stryCov_9fa48("7379"), 'plugins:active'))),
      upgradeCount: compatible.reduce((count, current) => {
        if (stryMutAct_9fa48("7380")) {
          {}
        } else {
          stryCov_9fa48("7380");
          if (stryMutAct_9fa48("7383") ? current.installed || current.outdated : stryMutAct_9fa48("7382") ? false : stryMutAct_9fa48("7381") ? true : (stryCov_9fa48("7381", "7382", "7383"), current.installed && current.outdated)) {
            if (stryMutAct_9fa48("7384")) {
              {}
            } else {
              stryCov_9fa48("7384");
              stryMutAct_9fa48("7385") ? count -= 1 : (stryCov_9fa48("7385"), count += 1);
            }
          }
          return count;
        }
      }, 0),
      download: stryMutAct_9fa48("7386") ? compatible : (stryCov_9fa48("7386"), compatible.filter(stryMutAct_9fa48("7387") ? () => undefined : (stryCov_9fa48("7387"), plugin => stryMutAct_9fa48("7388") ? plugin.installed : (stryCov_9fa48("7388"), !plugin.installed)))),
      incompatible: stryMutAct_9fa48("7389") ? all : (stryCov_9fa48("7389"), all.filter(stryMutAct_9fa48("7390") ? () => undefined : (stryCov_9fa48("7390"), plugin => stryMutAct_9fa48("7391") ? compatiblePkgNames.includes(plugin.name) : (stryCov_9fa48("7391"), !compatiblePkgNames.includes(plugin.name))))),
      trending: trendingPlugins,
      submitPluginUsage: meta.config.submitPluginUsage,
      version: nconf.get(stryMutAct_9fa48("7392") ? "" : (stryCov_9fa48("7392"), 'version'))
    }));
  }
};
async function getCompatiblePlugins() {
  if (stryMutAct_9fa48("7393")) {
    {}
  } else {
    stryCov_9fa48("7393");
    return await getPlugins(stryMutAct_9fa48("7394") ? false : (stryCov_9fa48("7394"), true));
  }
}
async function getAllPlugins() {
  if (stryMutAct_9fa48("7395")) {
    {}
  } else {
    stryCov_9fa48("7395");
    return await getPlugins(stryMutAct_9fa48("7396") ? true : (stryCov_9fa48("7396"), false));
  }
}
async function getPlugins(matching) {
  if (stryMutAct_9fa48("7397")) {
    {}
  } else {
    stryCov_9fa48("7397");
    try {
      if (stryMutAct_9fa48("7398")) {
        {}
      } else {
        stryCov_9fa48("7398");
        const pluginsData = await plugins.list(matching);
        return stryMutAct_9fa48("7401") ? pluginsData && [] : stryMutAct_9fa48("7400") ? false : stryMutAct_9fa48("7399") ? true : (stryCov_9fa48("7399", "7400", "7401"), pluginsData || (stryMutAct_9fa48("7402") ? ["Stryker was here"] : (stryCov_9fa48("7402"), [])));
      }
    } catch (err) {
      if (stryMutAct_9fa48("7403")) {
        {}
      } else {
        stryCov_9fa48("7403");
        winston.error(err.stack);
        return stryMutAct_9fa48("7404") ? ["Stryker was here"] : (stryCov_9fa48("7404"), []);
      }
    }
  }
}