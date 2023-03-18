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
const childProcess = require('child_process');
const CliGraph = require('cli-graph');
const chalk = require('chalk');
const nconf = require('nconf');
const build = require('../meta/build');
const db = require('../database');
const plugins = require('../plugins');
const events = require('../events');
const analytics = require('../analytics');
const reset = require('./reset');
const {
  pluginNamePattern,
  themeNamePattern,
  paths
} = require('../constants');
async function install(plugin, options) {
  if (stryMutAct_9fa48("4071")) {
    {}
  } else {
    stryCov_9fa48("4071");
    if (stryMutAct_9fa48("4074") ? false : stryMutAct_9fa48("4073") ? true : stryMutAct_9fa48("4072") ? options : (stryCov_9fa48("4072", "4073", "4074"), !options)) {
      if (stryMutAct_9fa48("4075")) {
        {}
      } else {
        stryCov_9fa48("4075");
        options = {};
      }
    }
    try {
      if (stryMutAct_9fa48("4076")) {
        {}
      } else {
        stryCov_9fa48("4076");
        await db.init();
        if (stryMutAct_9fa48("4079") ? false : stryMutAct_9fa48("4078") ? true : stryMutAct_9fa48("4077") ? pluginNamePattern.test(plugin) : (stryCov_9fa48("4077", "4078", "4079"), !pluginNamePattern.test(plugin))) {
          if (stryMutAct_9fa48("4080")) {
            {}
          } else {
            stryCov_9fa48("4080");
            // Allow omission of `nodebb-plugin-`
            plugin = stryMutAct_9fa48("4081") ? `` : (stryCov_9fa48("4081"), `nodebb-plugin-${plugin}`);
          }
        }
        plugin = await plugins.autocomplete(plugin);
        const isInstalled = await plugins.isInstalled(plugin);
        if (stryMutAct_9fa48("4083") ? false : stryMutAct_9fa48("4082") ? true : (stryCov_9fa48("4082", "4083"), isInstalled)) {
          if (stryMutAct_9fa48("4084")) {
            {}
          } else {
            stryCov_9fa48("4084");
            throw new Error(stryMutAct_9fa48("4085") ? "" : (stryCov_9fa48("4085"), 'plugin already installed'));
          }
        }
        const nbbVersion = require(paths.currentPackage).version;
        const suggested = await plugins.suggest(plugin, nbbVersion);
        if (stryMutAct_9fa48("4088") ? false : stryMutAct_9fa48("4087") ? true : stryMutAct_9fa48("4086") ? suggested.version : (stryCov_9fa48("4086", "4087", "4088"), !suggested.version)) {
          if (stryMutAct_9fa48("4089")) {
            {}
          } else {
            stryCov_9fa48("4089");
            if (stryMutAct_9fa48("4092") ? false : stryMutAct_9fa48("4091") ? true : stryMutAct_9fa48("4090") ? options.force : (stryCov_9fa48("4090", "4091", "4092"), !options.force)) {
              if (stryMutAct_9fa48("4093")) {
                {}
              } else {
                stryCov_9fa48("4093");
                throw new Error(suggested.message);
              }
            }
            winston.warn(stryMutAct_9fa48("4094") ? `` : (stryCov_9fa48("4094"), `${suggested.message} Proceeding with installation anyway due to force option being provided`));
            suggested.version = stryMutAct_9fa48("4095") ? "" : (stryCov_9fa48("4095"), 'latest');
          }
        }
        winston.info(stryMutAct_9fa48("4096") ? "" : (stryCov_9fa48("4096"), 'Installing Plugin `%s@%s`'), plugin, suggested.version);
        await plugins.toggleInstall(plugin, suggested.version);
        process.exit(0);
      }
    } catch (err) {
      if (stryMutAct_9fa48("4097")) {
        {}
      } else {
        stryCov_9fa48("4097");
        winston.error(stryMutAct_9fa48("4098") ? `` : (stryCov_9fa48("4098"), `An error occurred during plugin installation\n${err.stack}`));
        process.exit(1);
      }
    }
  }
}
async function activate(plugin) {
  if (stryMutAct_9fa48("4099")) {
    {}
  } else {
    stryCov_9fa48("4099");
    if (stryMutAct_9fa48("4101") ? false : stryMutAct_9fa48("4100") ? true : (stryCov_9fa48("4100", "4101"), themeNamePattern.test(plugin))) {
      if (stryMutAct_9fa48("4102")) {
        {}
      } else {
        stryCov_9fa48("4102");
        await reset.reset(stryMutAct_9fa48("4103") ? {} : (stryCov_9fa48("4103"), {
          theme: plugin
        }));
        process.exit();
      }
    }
    try {
      if (stryMutAct_9fa48("4104")) {
        {}
      } else {
        stryCov_9fa48("4104");
        await db.init();
        if (stryMutAct_9fa48("4107") ? false : stryMutAct_9fa48("4106") ? true : stryMutAct_9fa48("4105") ? pluginNamePattern.test(plugin) : (stryCov_9fa48("4105", "4106", "4107"), !pluginNamePattern.test(plugin))) {
          if (stryMutAct_9fa48("4108")) {
            {}
          } else {
            stryCov_9fa48("4108");
            // Allow omission of `nodebb-plugin-`
            plugin = stryMutAct_9fa48("4109") ? `` : (stryCov_9fa48("4109"), `nodebb-plugin-${plugin}`);
          }
        }
        plugin = await plugins.autocomplete(plugin);
        const isInstalled = await plugins.isInstalled(plugin);
        if (stryMutAct_9fa48("4112") ? false : stryMutAct_9fa48("4111") ? true : stryMutAct_9fa48("4110") ? isInstalled : (stryCov_9fa48("4110", "4111", "4112"), !isInstalled)) {
          if (stryMutAct_9fa48("4113")) {
            {}
          } else {
            stryCov_9fa48("4113");
            throw new Error(stryMutAct_9fa48("4114") ? "" : (stryCov_9fa48("4114"), 'plugin not installed'));
          }
        }
        const isActive = await plugins.isActive(plugin);
        if (stryMutAct_9fa48("4116") ? false : stryMutAct_9fa48("4115") ? true : (stryCov_9fa48("4115", "4116"), isActive)) {
          if (stryMutAct_9fa48("4117")) {
            {}
          } else {
            stryCov_9fa48("4117");
            winston.info(stryMutAct_9fa48("4118") ? "" : (stryCov_9fa48("4118"), 'Plugin `%s` already active'), plugin);
            process.exit(0);
          }
        }
        if (stryMutAct_9fa48("4120") ? false : stryMutAct_9fa48("4119") ? true : (stryCov_9fa48("4119", "4120"), nconf.get(stryMutAct_9fa48("4121") ? "" : (stryCov_9fa48("4121"), 'plugins:active')))) {
          if (stryMutAct_9fa48("4122")) {
            {}
          } else {
            stryCov_9fa48("4122");
            winston.error(stryMutAct_9fa48("4123") ? "" : (stryCov_9fa48("4123"), 'Cannot activate plugins while plugin state configuration is set, please change your active configuration (config.json, environmental variables or terminal arguments) instead'));
            process.exit(1);
          }
        }
        const numPlugins = await db.sortedSetCard(stryMutAct_9fa48("4124") ? "" : (stryCov_9fa48("4124"), 'plugins:active'));
        winston.info(stryMutAct_9fa48("4125") ? "" : (stryCov_9fa48("4125"), 'Activating plugin `%s`'), plugin);
        await db.sortedSetAdd(stryMutAct_9fa48("4126") ? "" : (stryCov_9fa48("4126"), 'plugins:active'), numPlugins, plugin);
        await events.log(stryMutAct_9fa48("4127") ? {} : (stryCov_9fa48("4127"), {
          type: stryMutAct_9fa48("4128") ? "" : (stryCov_9fa48("4128"), 'plugin-activate'),
          text: plugin
        }));
        process.exit(0);
      }
    } catch (err) {
      if (stryMutAct_9fa48("4129")) {
        {}
      } else {
        stryCov_9fa48("4129");
        winston.error(stryMutAct_9fa48("4130") ? `` : (stryCov_9fa48("4130"), `An error occurred during plugin activation\n${err.stack}`));
        process.exit(1);
      }
    }
  }
}
async function listPlugins() {
  if (stryMutAct_9fa48("4131")) {
    {}
  } else {
    stryCov_9fa48("4131");
    await db.init();
    const installed = await plugins.showInstalled();
    const installedList = installed.map(stryMutAct_9fa48("4132") ? () => undefined : (stryCov_9fa48("4132"), plugin => plugin.name));
    const active = await plugins.getActive();
    // Merge the two sets, defer to plugins in  `installed` if already present
    const combined = installed.concat(active.reduce((memo, cur) => {
      if (stryMutAct_9fa48("4133")) {
        {}
      } else {
        stryCov_9fa48("4133");
        if (stryMutAct_9fa48("4136") ? false : stryMutAct_9fa48("4135") ? true : stryMutAct_9fa48("4134") ? installedList.includes(cur) : (stryCov_9fa48("4134", "4135", "4136"), !installedList.includes(cur))) {
          if (stryMutAct_9fa48("4137")) {
            {}
          } else {
            stryCov_9fa48("4137");
            memo.push(stryMutAct_9fa48("4138") ? {} : (stryCov_9fa48("4138"), {
              id: cur,
              active: stryMutAct_9fa48("4139") ? false : (stryCov_9fa48("4139"), true),
              installed: stryMutAct_9fa48("4140") ? true : (stryCov_9fa48("4140"), false)
            }));
          }
        }
        return memo;
      }
    }, stryMutAct_9fa48("4141") ? ["Stryker was here"] : (stryCov_9fa48("4141"), [])));

    // Alphabetical sort
    stryMutAct_9fa48("4142") ? combined : (stryCov_9fa48("4142"), combined.sort(stryMutAct_9fa48("4143") ? () => undefined : (stryCov_9fa48("4143"), (a, b) => (stryMutAct_9fa48("4147") ? a.id <= b.id : stryMutAct_9fa48("4146") ? a.id >= b.id : stryMutAct_9fa48("4145") ? false : stryMutAct_9fa48("4144") ? true : (stryCov_9fa48("4144", "4145", "4146", "4147"), a.id > b.id)) ? 1 : stryMutAct_9fa48("4148") ? +1 : (stryCov_9fa48("4148"), -1))));

    // Pretty output
    process.stdout.write(stryMutAct_9fa48("4149") ? "" : (stryCov_9fa48("4149"), 'Active plugins:\n'));
    combined.forEach(plugin => {
      if (stryMutAct_9fa48("4150")) {
        {}
      } else {
        stryCov_9fa48("4150");
        process.stdout.write(stryMutAct_9fa48("4151") ? `` : (stryCov_9fa48("4151"), `\t* ${plugin.id}${plugin.version ? stryMutAct_9fa48("4152") ? `` : (stryCov_9fa48("4152"), `@${plugin.version}`) : stryMutAct_9fa48("4153") ? "Stryker was here!" : (stryCov_9fa48("4153"), '')} (`));
        process.stdout.write(plugin.installed ? chalk.green(stryMutAct_9fa48("4154") ? "" : (stryCov_9fa48("4154"), 'installed')) : chalk.red(stryMutAct_9fa48("4155") ? "" : (stryCov_9fa48("4155"), 'not installed')));
        process.stdout.write(stryMutAct_9fa48("4156") ? "" : (stryCov_9fa48("4156"), ', '));
        process.stdout.write(plugin.active ? chalk.green(stryMutAct_9fa48("4157") ? "" : (stryCov_9fa48("4157"), 'enabled')) : chalk.yellow(stryMutAct_9fa48("4158") ? "" : (stryCov_9fa48("4158"), 'disabled')));
        process.stdout.write(stryMutAct_9fa48("4159") ? "" : (stryCov_9fa48("4159"), ')\n'));
      }
    });
    process.exit();
  }
}
async function listEvents(count = 10) {
  if (stryMutAct_9fa48("4160")) {
    {}
  } else {
    stryCov_9fa48("4160");
    await db.init();
    const eventData = await events.getEvents(stryMutAct_9fa48("4161") ? "Stryker was here!" : (stryCov_9fa48("4161"), ''), 0, stryMutAct_9fa48("4162") ? count + 1 : (stryCov_9fa48("4162"), count - 1));
    console.log(chalk.bold(stryMutAct_9fa48("4163") ? `` : (stryCov_9fa48("4163"), `\nDisplaying last ${count} administrative events...`)));
    eventData.forEach(event => {
      if (stryMutAct_9fa48("4164")) {
        {}
      } else {
        stryCov_9fa48("4164");
        console.log(stryMutAct_9fa48("4165") ? `` : (stryCov_9fa48("4165"), `  * ${chalk.green(String(event.timestampISO))} ${chalk.yellow(String(event.type))}${event.text ? stryMutAct_9fa48("4166") ? `` : (stryCov_9fa48("4166"), ` ${event.text}`) : stryMutAct_9fa48("4167") ? "Stryker was here!" : (stryCov_9fa48("4167"), '')} (uid: ${event.uid ? event.uid : 0})`));
      }
    });
    process.exit();
  }
}
async function info() {
  if (stryMutAct_9fa48("4168")) {
    {}
  } else {
    stryCov_9fa48("4168");
    console.log(stryMutAct_9fa48("4169") ? "Stryker was here!" : (stryCov_9fa48("4169"), ''));
    const {
      version
    } = require('../../package.json');
    console.log(stryMutAct_9fa48("4170") ? `` : (stryCov_9fa48("4170"), `  version:  ${version}`));
    console.log(stryMutAct_9fa48("4171") ? `` : (stryCov_9fa48("4171"), `  Node ver: ${process.version}`));
    const hash = childProcess.execSync(stryMutAct_9fa48("4172") ? "" : (stryCov_9fa48("4172"), 'git rev-parse HEAD'));
    console.log(stryMutAct_9fa48("4173") ? `` : (stryCov_9fa48("4173"), `  git hash: ${hash}`));
    console.log(stryMutAct_9fa48("4174") ? `` : (stryCov_9fa48("4174"), `  database: ${nconf.get(stryMutAct_9fa48("4175") ? "" : (stryCov_9fa48("4175"), 'database'))}`));
    await db.init();
    const info = await db.info(db.client);
    switch (nconf.get(stryMutAct_9fa48("4176") ? "" : (stryCov_9fa48("4176"), 'database'))) {
      case stryMutAct_9fa48("4178") ? "" : (stryCov_9fa48("4178"), 'redis'):
        if (stryMutAct_9fa48("4177")) {} else {
          stryCov_9fa48("4177");
          console.log(stryMutAct_9fa48("4179") ? `` : (stryCov_9fa48("4179"), `        version: ${info.redis_version}`));
          console.log(stryMutAct_9fa48("4180") ? `` : (stryCov_9fa48("4180"), `        disk sync:  ${info.rdb_last_bgsave_status}`));
          break;
        }
      case stryMutAct_9fa48("4182") ? "" : (stryCov_9fa48("4182"), 'mongo'):
        if (stryMutAct_9fa48("4181")) {} else {
          stryCov_9fa48("4181");
          console.log(stryMutAct_9fa48("4183") ? `` : (stryCov_9fa48("4183"), `        version: ${info.version}`));
          console.log(stryMutAct_9fa48("4184") ? `` : (stryCov_9fa48("4184"), `        engine:  ${info.storageEngine}`));
          break;
        }
      case stryMutAct_9fa48("4186") ? "" : (stryCov_9fa48("4186"), 'postgres'):
        if (stryMutAct_9fa48("4185")) {} else {
          stryCov_9fa48("4185");
          console.log(stryMutAct_9fa48("4187") ? `` : (stryCov_9fa48("4187"), `        version: ${info.version}`));
          console.log(stryMutAct_9fa48("4188") ? `` : (stryCov_9fa48("4188"), `        uptime:  ${info.uptime}`));
          break;
        }
    }
    const analyticsData = await analytics.getHourlyStatsForSet(stryMutAct_9fa48("4189") ? "" : (stryCov_9fa48("4189"), 'analytics:pageviews'), Date.now(), 24);
    const graph = new CliGraph(stryMutAct_9fa48("4190") ? {} : (stryCov_9fa48("4190"), {
      height: 12,
      width: 25,
      center: stryMutAct_9fa48("4191") ? {} : (stryCov_9fa48("4191"), {
        x: 0,
        y: 11
      })
    }));
    const min = Math.min(...analyticsData);
    const max = Math.max(...analyticsData);
    analyticsData.forEach((point, idx) => {
      if (stryMutAct_9fa48("4192")) {
        {}
      } else {
        stryCov_9fa48("4192");
        graph.addPoint(stryMutAct_9fa48("4193") ? idx - 1 : (stryCov_9fa48("4193"), idx + 1), Math.round(stryMutAct_9fa48("4194") ? point / max / 10 : (stryCov_9fa48("4194"), (stryMutAct_9fa48("4195") ? point * max : (stryCov_9fa48("4195"), point / max)) * 10)));
      }
    });
    console.log(stryMutAct_9fa48("4196") ? "Stryker was here!" : (stryCov_9fa48("4196"), ''));
    console.log(graph.toString());
    console.log(stryMutAct_9fa48("4197") ? `` : (stryCov_9fa48("4197"), `Pageviews, last 24h (min: ${min}  max: ${max})`));
    process.exit();
  }
}
async function buildWrapper(targets, options) {
  if (stryMutAct_9fa48("4198")) {
    {}
  } else {
    stryCov_9fa48("4198");
    try {
      if (stryMutAct_9fa48("4199")) {
        {}
      } else {
        stryCov_9fa48("4199");
        await build.build(targets, options);
        process.exit(0);
      }
    } catch (err) {
      if (stryMutAct_9fa48("4200")) {
        {}
      } else {
        stryCov_9fa48("4200");
        winston.error(err.stack);
        process.exit(1);
      }
    }
  }
}
exports.build = buildWrapper;
exports.install = install;
exports.activate = activate;
exports.listPlugins = listPlugins;
exports.listEvents = listEvents;
exports.info = info;