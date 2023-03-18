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
const winston = require('winston');
const path = require('path');
const fs = require('fs').promises;
const nconf = require('nconf');
const os = require('os');
const cproc = require('child_process');
const util = require('util');
const request = require('request-promise-native');
const db = require('../database');
const meta = require('../meta');
const pubsub = require('../pubsub');
const {
  paths
} = require('../constants');
const pkgInstall = require('../cli/package-install');
const packageManager = pkgInstall.getPackageManager();
let packageManagerExecutable = packageManager;
const packageManagerCommands = stryMutAct_9fa48("28030") ? {} : (stryCov_9fa48("28030"), {
  yarn: stryMutAct_9fa48("28031") ? {} : (stryCov_9fa48("28031"), {
    install: stryMutAct_9fa48("28032") ? "" : (stryCov_9fa48("28032"), 'add'),
    uninstall: stryMutAct_9fa48("28033") ? "" : (stryCov_9fa48("28033"), 'remove')
  }),
  npm: stryMutAct_9fa48("28034") ? {} : (stryCov_9fa48("28034"), {
    install: stryMutAct_9fa48("28035") ? "" : (stryCov_9fa48("28035"), 'install'),
    uninstall: stryMutAct_9fa48("28036") ? "" : (stryCov_9fa48("28036"), 'uninstall')
  }),
  cnpm: stryMutAct_9fa48("28037") ? {} : (stryCov_9fa48("28037"), {
    install: stryMutAct_9fa48("28038") ? "" : (stryCov_9fa48("28038"), 'install'),
    uninstall: stryMutAct_9fa48("28039") ? "" : (stryCov_9fa48("28039"), 'uninstall')
  }),
  pnpm: stryMutAct_9fa48("28040") ? {} : (stryCov_9fa48("28040"), {
    install: stryMutAct_9fa48("28041") ? "" : (stryCov_9fa48("28041"), 'install'),
    uninstall: stryMutAct_9fa48("28042") ? "" : (stryCov_9fa48("28042"), 'uninstall')
  })
});
if (stryMutAct_9fa48("28045") ? process.platform !== 'win32' : stryMutAct_9fa48("28044") ? false : stryMutAct_9fa48("28043") ? true : (stryCov_9fa48("28043", "28044", "28045"), process.platform === (stryMutAct_9fa48("28046") ? "" : (stryCov_9fa48("28046"), 'win32')))) {
  if (stryMutAct_9fa48("28047")) {
    {}
  } else {
    stryCov_9fa48("28047");
    packageManagerExecutable += stryMutAct_9fa48("28048") ? "" : (stryCov_9fa48("28048"), '.cmd');
  }
}
module.exports = function (Plugins) {
  if (stryMutAct_9fa48("28049")) {
    {}
  } else {
    stryCov_9fa48("28049");
    if (stryMutAct_9fa48("28051") ? false : stryMutAct_9fa48("28050") ? true : (stryCov_9fa48("28050", "28051"), nconf.get(stryMutAct_9fa48("28052") ? "" : (stryCov_9fa48("28052"), 'isPrimary')))) {
      if (stryMutAct_9fa48("28053")) {
        {}
      } else {
        stryCov_9fa48("28053");
        pubsub.on(stryMutAct_9fa48("28054") ? "" : (stryCov_9fa48("28054"), 'plugins:toggleInstall'), data => {
          if (stryMutAct_9fa48("28055")) {
            {}
          } else {
            stryCov_9fa48("28055");
            if (stryMutAct_9fa48("28058") ? data.hostname === os.hostname() : stryMutAct_9fa48("28057") ? false : stryMutAct_9fa48("28056") ? true : (stryCov_9fa48("28056", "28057", "28058"), data.hostname !== os.hostname())) {
              if (stryMutAct_9fa48("28059")) {
                {}
              } else {
                stryCov_9fa48("28059");
                toggleInstall(data.id, data.version);
              }
            }
          }
        });
        pubsub.on(stryMutAct_9fa48("28060") ? "" : (stryCov_9fa48("28060"), 'plugins:upgrade'), data => {
          if (stryMutAct_9fa48("28061")) {
            {}
          } else {
            stryCov_9fa48("28061");
            if (stryMutAct_9fa48("28064") ? data.hostname === os.hostname() : stryMutAct_9fa48("28063") ? false : stryMutAct_9fa48("28062") ? true : (stryCov_9fa48("28062", "28063", "28064"), data.hostname !== os.hostname())) {
              if (stryMutAct_9fa48("28065")) {
                {}
              } else {
                stryCov_9fa48("28065");
                upgrade(data.id, data.version);
              }
            }
          }
        });
      }
    }
    Plugins.toggleActive = async function (id) {
      if (stryMutAct_9fa48("28066")) {
        {}
      } else {
        stryCov_9fa48("28066");
        if (stryMutAct_9fa48("28068") ? false : stryMutAct_9fa48("28067") ? true : (stryCov_9fa48("28067", "28068"), nconf.get(stryMutAct_9fa48("28069") ? "" : (stryCov_9fa48("28069"), 'plugins:active')))) {
          if (stryMutAct_9fa48("28070")) {
            {}
          } else {
            stryCov_9fa48("28070");
            winston.error(stryMutAct_9fa48("28071") ? "" : (stryCov_9fa48("28071"), 'Cannot activate plugins while plugin state is set in the configuration (config.json, environmental variables or terminal arguments), please modify the configuration instead'));
            throw new Error(stryMutAct_9fa48("28072") ? "" : (stryCov_9fa48("28072"), '[[error:plugins-set-in-configuration]]'));
          }
        }
        const isActive = await Plugins.isActive(id);
        if (stryMutAct_9fa48("28074") ? false : stryMutAct_9fa48("28073") ? true : (stryCov_9fa48("28073", "28074"), isActive)) {
          if (stryMutAct_9fa48("28075")) {
            {}
          } else {
            stryCov_9fa48("28075");
            await db.sortedSetRemove(stryMutAct_9fa48("28076") ? "" : (stryCov_9fa48("28076"), 'plugins:active'), id);
          }
        } else {
          if (stryMutAct_9fa48("28077")) {
            {}
          } else {
            stryCov_9fa48("28077");
            const count = await db.sortedSetCard(stryMutAct_9fa48("28078") ? "" : (stryCov_9fa48("28078"), 'plugins:active'));
            await db.sortedSetAdd(stryMutAct_9fa48("28079") ? "" : (stryCov_9fa48("28079"), 'plugins:active'), count, id);
          }
        }
        meta.reloadRequired = stryMutAct_9fa48("28080") ? false : (stryCov_9fa48("28080"), true);
        const hook = isActive ? stryMutAct_9fa48("28081") ? "" : (stryCov_9fa48("28081"), 'deactivate') : stryMutAct_9fa48("28082") ? "" : (stryCov_9fa48("28082"), 'activate');
        Plugins.hooks.fire(stryMutAct_9fa48("28083") ? `` : (stryCov_9fa48("28083"), `action:plugin.${hook}`), stryMutAct_9fa48("28084") ? {} : (stryCov_9fa48("28084"), {
          id: id
        }));
        return stryMutAct_9fa48("28085") ? {} : (stryCov_9fa48("28085"), {
          id: id,
          active: stryMutAct_9fa48("28086") ? isActive : (stryCov_9fa48("28086"), !isActive)
        });
      }
    };
    Plugins.checkWhitelist = async function (id, version) {
      if (stryMutAct_9fa48("28087")) {
        {}
      } else {
        stryCov_9fa48("28087");
        const body = await request(stryMutAct_9fa48("28088") ? {} : (stryCov_9fa48("28088"), {
          method: stryMutAct_9fa48("28089") ? "" : (stryCov_9fa48("28089"), 'GET'),
          url: stryMutAct_9fa48("28090") ? `` : (stryCov_9fa48("28090"), `https://packages.nodebb.org/api/v1/plugins/${encodeURIComponent(id)}`),
          json: stryMutAct_9fa48("28091") ? false : (stryCov_9fa48("28091"), true)
        }));
        if (stryMutAct_9fa48("28094") ? body && body.code === 'ok' || version === 'latest' || body.payload.valid.includes(version) : stryMutAct_9fa48("28093") ? false : stryMutAct_9fa48("28092") ? true : (stryCov_9fa48("28092", "28093", "28094"), (stryMutAct_9fa48("28096") ? body || body.code === 'ok' : stryMutAct_9fa48("28095") ? true : (stryCov_9fa48("28095", "28096"), body && (stryMutAct_9fa48("28098") ? body.code !== 'ok' : stryMutAct_9fa48("28097") ? true : (stryCov_9fa48("28097", "28098"), body.code === (stryMutAct_9fa48("28099") ? "" : (stryCov_9fa48("28099"), 'ok')))))) && (stryMutAct_9fa48("28101") ? version === 'latest' && body.payload.valid.includes(version) : stryMutAct_9fa48("28100") ? true : (stryCov_9fa48("28100", "28101"), (stryMutAct_9fa48("28103") ? version !== 'latest' : stryMutAct_9fa48("28102") ? false : (stryCov_9fa48("28102", "28103"), version === (stryMutAct_9fa48("28104") ? "" : (stryCov_9fa48("28104"), 'latest')))) || body.payload.valid.includes(version))))) {
          if (stryMutAct_9fa48("28105")) {
            {}
          } else {
            stryCov_9fa48("28105");
            return;
          }
        }
        throw new Error(stryMutAct_9fa48("28106") ? "" : (stryCov_9fa48("28106"), '[[error:plugin-not-whitelisted]]'));
      }
    };
    Plugins.suggest = async function (pluginId, nbbVersion) {
      if (stryMutAct_9fa48("28107")) {
        {}
      } else {
        stryCov_9fa48("28107");
        const body = await request(stryMutAct_9fa48("28108") ? {} : (stryCov_9fa48("28108"), {
          method: stryMutAct_9fa48("28109") ? "" : (stryCov_9fa48("28109"), 'GET'),
          url: stryMutAct_9fa48("28110") ? `` : (stryCov_9fa48("28110"), `https://packages.nodebb.org/api/v1/suggest?package=${encodeURIComponent(pluginId)}&version=${encodeURIComponent(nbbVersion)}`),
          json: stryMutAct_9fa48("28111") ? false : (stryCov_9fa48("28111"), true)
        }));
        return body;
      }
    };
    Plugins.toggleInstall = async function (id, version) {
      if (stryMutAct_9fa48("28112")) {
        {}
      } else {
        stryCov_9fa48("28112");
        pubsub.publish(stryMutAct_9fa48("28113") ? "" : (stryCov_9fa48("28113"), 'plugins:toggleInstall'), stryMutAct_9fa48("28114") ? {} : (stryCov_9fa48("28114"), {
          hostname: os.hostname(),
          id: id,
          version: version
        }));
        return await toggleInstall(id, version);
      }
    };
    const runPackageManagerCommandAsync = util.promisify(runPackageManagerCommand);
    async function toggleInstall(id, version) {
      if (stryMutAct_9fa48("28115")) {
        {}
      } else {
        stryCov_9fa48("28115");
        const [installed, active] = await Promise.all(stryMutAct_9fa48("28116") ? [] : (stryCov_9fa48("28116"), [Plugins.isInstalled(id), Plugins.isActive(id)]));
        const type = installed ? stryMutAct_9fa48("28117") ? "" : (stryCov_9fa48("28117"), 'uninstall') : stryMutAct_9fa48("28118") ? "" : (stryCov_9fa48("28118"), 'install');
        if (stryMutAct_9fa48("28120") ? false : stryMutAct_9fa48("28119") ? true : (stryCov_9fa48("28119", "28120"), active)) {
          if (stryMutAct_9fa48("28121")) {
            {}
          } else {
            stryCov_9fa48("28121");
            await Plugins.toggleActive(id);
          }
        }
        await runPackageManagerCommandAsync(type, id, stryMutAct_9fa48("28124") ? version && 'latest' : stryMutAct_9fa48("28123") ? false : stryMutAct_9fa48("28122") ? true : (stryCov_9fa48("28122", "28123", "28124"), version || (stryMutAct_9fa48("28125") ? "" : (stryCov_9fa48("28125"), 'latest'))));
        const pluginData = await Plugins.get(id);
        Plugins.hooks.fire(stryMutAct_9fa48("28126") ? `` : (stryCov_9fa48("28126"), `action:plugin.${type}`), stryMutAct_9fa48("28127") ? {} : (stryCov_9fa48("28127"), {
          id: id,
          version: version
        }));
        return pluginData;
      }
    }
    function runPackageManagerCommand(command, pkgName, version, callback) {
      if (stryMutAct_9fa48("28128")) {
        {}
      } else {
        stryCov_9fa48("28128");
        cproc.execFile(packageManagerExecutable, stryMutAct_9fa48("28129") ? [] : (stryCov_9fa48("28129"), [packageManagerCommands[packageManager][command], stryMutAct_9fa48("28130") ? pkgName - (command === 'install' ? `@${version}` : '') : (stryCov_9fa48("28130"), pkgName + ((stryMutAct_9fa48("28133") ? command !== 'install' : stryMutAct_9fa48("28132") ? false : stryMutAct_9fa48("28131") ? true : (stryCov_9fa48("28131", "28132", "28133"), command === (stryMutAct_9fa48("28134") ? "" : (stryCov_9fa48("28134"), 'install')))) ? stryMutAct_9fa48("28135") ? `` : (stryCov_9fa48("28135"), `@${version}`) : stryMutAct_9fa48("28136") ? "Stryker was here!" : (stryCov_9fa48("28136"), ''))), stryMutAct_9fa48("28137") ? "" : (stryCov_9fa48("28137"), '--save')]), (err, stdout) => {
          if (stryMutAct_9fa48("28138")) {
            {}
          } else {
            stryCov_9fa48("28138");
            if (stryMutAct_9fa48("28140") ? false : stryMutAct_9fa48("28139") ? true : (stryCov_9fa48("28139", "28140"), err)) {
              if (stryMutAct_9fa48("28141")) {
                {}
              } else {
                stryCov_9fa48("28141");
                return callback(err);
              }
            }
            winston.verbose(stryMutAct_9fa48("28142") ? `` : (stryCov_9fa48("28142"), `[plugins/${command}] ${stdout}`));
            callback();
          }
        });
      }
    }
    Plugins.upgrade = async function (id, version) {
      if (stryMutAct_9fa48("28143")) {
        {}
      } else {
        stryCov_9fa48("28143");
        pubsub.publish(stryMutAct_9fa48("28144") ? "" : (stryCov_9fa48("28144"), 'plugins:upgrade'), stryMutAct_9fa48("28145") ? {} : (stryCov_9fa48("28145"), {
          hostname: os.hostname(),
          id: id,
          version: version
        }));
        return await upgrade(id, version);
      }
    };
    async function upgrade(id, version) {
      if (stryMutAct_9fa48("28146")) {
        {}
      } else {
        stryCov_9fa48("28146");
        await runPackageManagerCommandAsync(stryMutAct_9fa48("28147") ? "" : (stryCov_9fa48("28147"), 'install'), id, stryMutAct_9fa48("28150") ? version && 'latest' : stryMutAct_9fa48("28149") ? false : stryMutAct_9fa48("28148") ? true : (stryCov_9fa48("28148", "28149", "28150"), version || (stryMutAct_9fa48("28151") ? "" : (stryCov_9fa48("28151"), 'latest'))));
        const isActive = await Plugins.isActive(id);
        meta.reloadRequired = isActive;
        return isActive;
      }
    }
    Plugins.isInstalled = async function (id) {
      if (stryMutAct_9fa48("28152")) {
        {}
      } else {
        stryCov_9fa48("28152");
        const pluginDir = path.join(paths.nodeModules, id);
        try {
          if (stryMutAct_9fa48("28153")) {
            {}
          } else {
            stryCov_9fa48("28153");
            const stats = await fs.stat(pluginDir);
            return stats.isDirectory();
          }
        } catch (err) {
          if (stryMutAct_9fa48("28154")) {
            {}
          } else {
            stryCov_9fa48("28154");
            return stryMutAct_9fa48("28155") ? true : (stryCov_9fa48("28155"), false);
          }
        }
      }
    };
    Plugins.isActive = async function (id) {
      if (stryMutAct_9fa48("28156")) {
        {}
      } else {
        stryCov_9fa48("28156");
        if (stryMutAct_9fa48("28158") ? false : stryMutAct_9fa48("28157") ? true : (stryCov_9fa48("28157", "28158"), nconf.get(stryMutAct_9fa48("28159") ? "" : (stryCov_9fa48("28159"), 'plugins:active')))) {
          if (stryMutAct_9fa48("28160")) {
            {}
          } else {
            stryCov_9fa48("28160");
            return nconf.get(stryMutAct_9fa48("28161") ? "" : (stryCov_9fa48("28161"), 'plugins:active')).includes(id);
          }
        }
        return await db.isSortedSetMember(stryMutAct_9fa48("28162") ? "" : (stryCov_9fa48("28162"), 'plugins:active'), id);
      }
    };
    Plugins.getActive = async function () {
      if (stryMutAct_9fa48("28163")) {
        {}
      } else {
        stryCov_9fa48("28163");
        if (stryMutAct_9fa48("28165") ? false : stryMutAct_9fa48("28164") ? true : (stryCov_9fa48("28164", "28165"), nconf.get(stryMutAct_9fa48("28166") ? "" : (stryCov_9fa48("28166"), 'plugins:active')))) {
          if (stryMutAct_9fa48("28167")) {
            {}
          } else {
            stryCov_9fa48("28167");
            return nconf.get(stryMutAct_9fa48("28168") ? "" : (stryCov_9fa48("28168"), 'plugins:active'));
          }
        }
        return await db.getSortedSetRange(stryMutAct_9fa48("28169") ? "" : (stryCov_9fa48("28169"), 'plugins:active'), 0, stryMutAct_9fa48("28170") ? +1 : (stryCov_9fa48("28170"), -1));
      }
    };
    Plugins.autocomplete = async fragment => {
      if (stryMutAct_9fa48("28171")) {
        {}
      } else {
        stryCov_9fa48("28171");
        const pluginDir = paths.nodeModules;
        const plugins = stryMutAct_9fa48("28172") ? await fs.readdir(pluginDir) : (stryCov_9fa48("28172"), (await fs.readdir(pluginDir)).filter(stryMutAct_9fa48("28173") ? () => undefined : (stryCov_9fa48("28173"), filename => stryMutAct_9fa48("28174") ? filename.endsWith(fragment) : (stryCov_9fa48("28174"), filename.startsWith(fragment)))));

        // Autocomplete only if single match
        return (stryMutAct_9fa48("28177") ? plugins.length !== 1 : stryMutAct_9fa48("28176") ? false : stryMutAct_9fa48("28175") ? true : (stryCov_9fa48("28175", "28176", "28177"), plugins.length === 1)) ? plugins.pop() : fragment;
      }
    };
  }
};