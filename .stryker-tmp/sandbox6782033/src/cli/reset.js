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
const path = require('path');
const winston = require('winston');
const fs = require('fs');
const chalk = require('chalk');
const nconf = require('nconf');
const db = require('../database');
const events = require('../events');
const meta = require('../meta');
const plugins = require('../plugins');
const widgets = require('../widgets');
const privileges = require('../privileges');
const {
  paths,
  pluginNamePattern,
  themeNamePattern
} = require('../constants');
exports.reset = async function (options) {
  if (stryMutAct_9fa48("4343")) {
    {}
  } else {
    stryCov_9fa48("4343");
    const map = stryMutAct_9fa48("4344") ? {} : (stryCov_9fa48("4344"), {
      theme: async function () {
        if (stryMutAct_9fa48("4345")) {
          {}
        } else {
          stryCov_9fa48("4345");
          let themeId = options.theme;
          if (stryMutAct_9fa48("4348") ? themeId !== true : stryMutAct_9fa48("4347") ? false : stryMutAct_9fa48("4346") ? true : (stryCov_9fa48("4346", "4347", "4348"), themeId === (stryMutAct_9fa48("4349") ? false : (stryCov_9fa48("4349"), true)))) {
            if (stryMutAct_9fa48("4350")) {
              {}
            } else {
              stryCov_9fa48("4350");
              await resetThemes();
            }
          } else {
            if (stryMutAct_9fa48("4351")) {
              {}
            } else {
              stryCov_9fa48("4351");
              if (stryMutAct_9fa48("4354") ? false : stryMutAct_9fa48("4353") ? true : stryMutAct_9fa48("4352") ? themeNamePattern.test(themeId) : (stryCov_9fa48("4352", "4353", "4354"), !themeNamePattern.test(themeId))) {
                if (stryMutAct_9fa48("4355")) {
                  {}
                } else {
                  stryCov_9fa48("4355");
                  // Allow omission of `nodebb-theme-`
                  themeId = stryMutAct_9fa48("4356") ? `` : (stryCov_9fa48("4356"), `nodebb-theme-${themeId}`);
                }
              }
              themeId = await plugins.autocomplete(themeId);
              await resetTheme(themeId);
            }
          }
        }
      },
      plugin: async function () {
        if (stryMutAct_9fa48("4357")) {
          {}
        } else {
          stryCov_9fa48("4357");
          let pluginId = options.plugin;
          if (stryMutAct_9fa48("4360") ? pluginId !== true : stryMutAct_9fa48("4359") ? false : stryMutAct_9fa48("4358") ? true : (stryCov_9fa48("4358", "4359", "4360"), pluginId === (stryMutAct_9fa48("4361") ? false : (stryCov_9fa48("4361"), true)))) {
            if (stryMutAct_9fa48("4362")) {
              {}
            } else {
              stryCov_9fa48("4362");
              await resetPlugins();
            }
          } else {
            if (stryMutAct_9fa48("4363")) {
              {}
            } else {
              stryCov_9fa48("4363");
              if (stryMutAct_9fa48("4366") ? false : stryMutAct_9fa48("4365") ? true : stryMutAct_9fa48("4364") ? pluginNamePattern.test(pluginId) : (stryCov_9fa48("4364", "4365", "4366"), !pluginNamePattern.test(pluginId))) {
                if (stryMutAct_9fa48("4367")) {
                  {}
                } else {
                  stryCov_9fa48("4367");
                  // Allow omission of `nodebb-plugin-`
                  pluginId = stryMutAct_9fa48("4368") ? `` : (stryCov_9fa48("4368"), `nodebb-plugin-${pluginId}`);
                }
              }
              pluginId = await plugins.autocomplete(pluginId);
              await resetPlugin(pluginId);
            }
          }
        }
      },
      widgets: resetWidgets,
      settings: resetSettings,
      all: async function () {
        if (stryMutAct_9fa48("4369")) {
          {}
        } else {
          stryCov_9fa48("4369");
          await resetWidgets();
          await resetThemes();
          await resetPlugin();
          await resetSettings();
        }
      }
    });
    const tasks = stryMutAct_9fa48("4370") ? Object.keys(map).map(x => map[x]) : (stryCov_9fa48("4370"), Object.keys(map).filter(stryMutAct_9fa48("4371") ? () => undefined : (stryCov_9fa48("4371"), x => options[x])).map(stryMutAct_9fa48("4372") ? () => undefined : (stryCov_9fa48("4372"), x => map[x])));
    if (stryMutAct_9fa48("4375") ? false : stryMutAct_9fa48("4374") ? true : stryMutAct_9fa48("4373") ? tasks.length : (stryCov_9fa48("4373", "4374", "4375"), !tasks.length)) {
      if (stryMutAct_9fa48("4376")) {
        {}
      } else {
        stryCov_9fa48("4376");
        console.log((stryMutAct_9fa48("4377") ? [] : (stryCov_9fa48("4377"), [chalk.yellow(stryMutAct_9fa48("4378") ? "" : (stryCov_9fa48("4378"), 'No arguments passed in, so nothing was reset.\n')), stryMutAct_9fa48("4379") ? `` : (stryCov_9fa48("4379"), `Use ./nodebb reset ${chalk.red(stryMutAct_9fa48("4380") ? "" : (stryCov_9fa48("4380"), '{-t|-p|-w|-s|-a}'))}`), stryMutAct_9fa48("4381") ? "" : (stryCov_9fa48("4381"), '    -t\tthemes'), stryMutAct_9fa48("4382") ? "" : (stryCov_9fa48("4382"), '    -p\tplugins'), stryMutAct_9fa48("4383") ? "" : (stryCov_9fa48("4383"), '    -w\twidgets'), stryMutAct_9fa48("4384") ? "" : (stryCov_9fa48("4384"), '    -s\tsettings'), stryMutAct_9fa48("4385") ? "" : (stryCov_9fa48("4385"), '    -a\tall of the above'), stryMutAct_9fa48("4386") ? "Stryker was here!" : (stryCov_9fa48("4386"), ''), stryMutAct_9fa48("4387") ? "" : (stryCov_9fa48("4387"), 'Plugin and theme reset flags (-p & -t) can take a single argument'), stryMutAct_9fa48("4388") ? "" : (stryCov_9fa48("4388"), '    e.g. ./nodebb reset -p nodebb-plugin-mentions, ./nodebb reset -t nodebb-theme-persona'), stryMutAct_9fa48("4389") ? "" : (stryCov_9fa48("4389"), '         Prefix is optional, e.g. ./nodebb reset -p markdown, ./nodebb reset -t persona')])).join(stryMutAct_9fa48("4390") ? "" : (stryCov_9fa48("4390"), '\n')));
        process.exit(0);
      }
    }
    try {
      if (stryMutAct_9fa48("4391")) {
        {}
      } else {
        stryCov_9fa48("4391");
        await db.init();
        for (const task of tasks) {
          if (stryMutAct_9fa48("4392")) {
            {}
          } else {
            stryCov_9fa48("4392");
            /* eslint-disable no-await-in-loop */
            await task();
          }
        }
        winston.info(stryMutAct_9fa48("4393") ? "" : (stryCov_9fa48("4393"), '[reset] Reset complete. Please run `./nodebb build` to rebuild assets.'));
        process.exit(0);
      }
    } catch (err) {
      if (stryMutAct_9fa48("4394")) {
        {}
      } else {
        stryCov_9fa48("4394");
        winston.error(stryMutAct_9fa48("4395") ? `` : (stryCov_9fa48("4395"), `[reset] Errors were encountered during reset -- ${err.message}`));
        process.exit(1);
      }
    }
  }
};
async function resetSettings() {
  if (stryMutAct_9fa48("4396")) {
    {}
  } else {
    stryCov_9fa48("4396");
    await privileges.global.give(stryMutAct_9fa48("4397") ? [] : (stryCov_9fa48("4397"), [stryMutAct_9fa48("4398") ? "" : (stryCov_9fa48("4398"), 'groups:local:login')]), stryMutAct_9fa48("4399") ? "" : (stryCov_9fa48("4399"), 'registered-users'));
    winston.info(stryMutAct_9fa48("4400") ? "" : (stryCov_9fa48("4400"), '[reset] registered-users given login privilege'));
    winston.info(stryMutAct_9fa48("4401") ? "" : (stryCov_9fa48("4401"), '[reset] Settings reset to default'));
  }
}
async function resetTheme(themeId) {
  if (stryMutAct_9fa48("4402")) {
    {}
  } else {
    stryCov_9fa48("4402");
    try {
      if (stryMutAct_9fa48("4403")) {
        {}
      } else {
        stryCov_9fa48("4403");
        await fs.promises.access(path.join(paths.nodeModules, themeId, stryMutAct_9fa48("4404") ? "" : (stryCov_9fa48("4404"), 'package.json')));
      }
    } catch (err) {
      if (stryMutAct_9fa48("4405")) {
        {}
      } else {
        stryCov_9fa48("4405");
        winston.warn(stryMutAct_9fa48("4406") ? "" : (stryCov_9fa48("4406"), '[reset] Theme `%s` is not installed on this forum'), themeId);
        throw new Error(stryMutAct_9fa48("4407") ? "" : (stryCov_9fa48("4407"), 'theme-not-found'));
      }
    }
    await resetThemeTo(themeId);
  }
}
async function resetThemes() {
  if (stryMutAct_9fa48("4408")) {
    {}
  } else {
    stryCov_9fa48("4408");
    await resetThemeTo(stryMutAct_9fa48("4409") ? "" : (stryCov_9fa48("4409"), 'nodebb-theme-persona'));
  }
}
async function resetThemeTo(themeId) {
  if (stryMutAct_9fa48("4410")) {
    {}
  } else {
    stryCov_9fa48("4410");
    await meta.themes.set(stryMutAct_9fa48("4411") ? {} : (stryCov_9fa48("4411"), {
      type: stryMutAct_9fa48("4412") ? "" : (stryCov_9fa48("4412"), 'local'),
      id: themeId
    }));
    await meta.configs.set(stryMutAct_9fa48("4413") ? "" : (stryCov_9fa48("4413"), 'bootswatchSkin'), stryMutAct_9fa48("4414") ? "Stryker was here!" : (stryCov_9fa48("4414"), ''));
    winston.info(stryMutAct_9fa48("4415") ? `` : (stryCov_9fa48("4415"), `[reset] Theme reset to ${themeId} and default skin`));
  }
}
async function resetPlugin(pluginId) {
  if (stryMutAct_9fa48("4416")) {
    {}
  } else {
    stryCov_9fa48("4416");
    try {
      if (stryMutAct_9fa48("4417")) {
        {}
      } else {
        stryCov_9fa48("4417");
        if (stryMutAct_9fa48("4419") ? false : stryMutAct_9fa48("4418") ? true : (stryCov_9fa48("4418", "4419"), nconf.get(stryMutAct_9fa48("4420") ? "" : (stryCov_9fa48("4420"), 'plugins:active')))) {
          if (stryMutAct_9fa48("4421")) {
            {}
          } else {
            stryCov_9fa48("4421");
            winston.error(stryMutAct_9fa48("4422") ? "" : (stryCov_9fa48("4422"), 'Cannot reset plugins while plugin state is set in the configuration (config.json, environmental variables or terminal arguments), please modify the configuration instead'));
            process.exit(1);
          }
        }
        const isActive = await db.isSortedSetMember(stryMutAct_9fa48("4423") ? "" : (stryCov_9fa48("4423"), 'plugins:active'), pluginId);
        if (stryMutAct_9fa48("4425") ? false : stryMutAct_9fa48("4424") ? true : (stryCov_9fa48("4424", "4425"), isActive)) {
          if (stryMutAct_9fa48("4426")) {
            {}
          } else {
            stryCov_9fa48("4426");
            await db.sortedSetRemove(stryMutAct_9fa48("4427") ? "" : (stryCov_9fa48("4427"), 'plugins:active'), pluginId);
            await events.log(stryMutAct_9fa48("4428") ? {} : (stryCov_9fa48("4428"), {
              type: stryMutAct_9fa48("4429") ? "" : (stryCov_9fa48("4429"), 'plugin-deactivate'),
              text: pluginId
            }));
            winston.info(stryMutAct_9fa48("4430") ? "" : (stryCov_9fa48("4430"), '[reset] Plugin `%s` disabled'), pluginId);
          }
        } else {
          if (stryMutAct_9fa48("4431")) {
            {}
          } else {
            stryCov_9fa48("4431");
            winston.warn(stryMutAct_9fa48("4432") ? "" : (stryCov_9fa48("4432"), '[reset] Plugin `%s` was not active on this forum'), pluginId);
            winston.info(stryMutAct_9fa48("4433") ? "" : (stryCov_9fa48("4433"), '[reset] No action taken.'));
          }
        }
      }
    } catch (err) {
      if (stryMutAct_9fa48("4434")) {
        {}
      } else {
        stryCov_9fa48("4434");
        winston.error(stryMutAct_9fa48("4435") ? `` : (stryCov_9fa48("4435"), `[reset] Could not disable plugin: ${pluginId} encountered error %s\n${err.stack}`));
        throw err;
      }
    }
  }
}
async function resetPlugins() {
  if (stryMutAct_9fa48("4436")) {
    {}
  } else {
    stryCov_9fa48("4436");
    if (stryMutAct_9fa48("4438") ? false : stryMutAct_9fa48("4437") ? true : (stryCov_9fa48("4437", "4438"), nconf.get(stryMutAct_9fa48("4439") ? "" : (stryCov_9fa48("4439"), 'plugins:active')))) {
      if (stryMutAct_9fa48("4440")) {
        {}
      } else {
        stryCov_9fa48("4440");
        winston.error(stryMutAct_9fa48("4441") ? "" : (stryCov_9fa48("4441"), 'Cannot reset plugins while plugin state is set in the configuration (config.json, environmental variables or terminal arguments), please modify the configuration instead'));
        process.exit(1);
      }
    }
    await db.delete(stryMutAct_9fa48("4442") ? "" : (stryCov_9fa48("4442"), 'plugins:active'));
    winston.info(stryMutAct_9fa48("4443") ? "" : (stryCov_9fa48("4443"), '[reset] All Plugins De-activated'));
  }
}
async function resetWidgets() {
  if (stryMutAct_9fa48("4444")) {
    {}
  } else {
    stryCov_9fa48("4444");
    await plugins.reload();
    await widgets.reset();
    winston.info(stryMutAct_9fa48("4445") ? "" : (stryCov_9fa48("4445"), '[reset] All Widgets moved to Draft Zone'));
  }
}