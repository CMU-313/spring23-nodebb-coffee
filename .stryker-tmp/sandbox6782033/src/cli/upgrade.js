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
const chalk = require('chalk');
const packageInstall = require('./package-install');
const {
  upgradePlugins
} = require('./upgrade-plugins');
const steps = stryMutAct_9fa48("4721") ? {} : (stryCov_9fa48("4721"), {
  package: stryMutAct_9fa48("4722") ? {} : (stryCov_9fa48("4722"), {
    message: stryMutAct_9fa48("4723") ? "" : (stryCov_9fa48("4723"), 'Updating package.json file with defaults...'),
    handler: function () {
      if (stryMutAct_9fa48("4724")) {
        {}
      } else {
        stryCov_9fa48("4724");
        packageInstall.updatePackageFile();
        packageInstall.preserveExtraneousPlugins();
        process.stdout.write(chalk.green(stryMutAct_9fa48("4725") ? "" : (stryCov_9fa48("4725"), '  OK\n')));
      }
    }
  }),
  install: stryMutAct_9fa48("4726") ? {} : (stryCov_9fa48("4726"), {
    message: stryMutAct_9fa48("4727") ? "" : (stryCov_9fa48("4727"), 'Bringing base dependencies up to date...'),
    handler: function () {
      if (stryMutAct_9fa48("4728")) {
        {}
      } else {
        stryCov_9fa48("4728");
        process.stdout.write(chalk.green(stryMutAct_9fa48("4729") ? "" : (stryCov_9fa48("4729"), '  started\n')));
        packageInstall.installAll();
      }
    }
  }),
  plugins: stryMutAct_9fa48("4730") ? {} : (stryCov_9fa48("4730"), {
    message: stryMutAct_9fa48("4731") ? "" : (stryCov_9fa48("4731"), 'Checking installed plugins for updates...'),
    handler: async function () {
      if (stryMutAct_9fa48("4732")) {
        {}
      } else {
        stryCov_9fa48("4732");
        await require('../database').init();
        await upgradePlugins();
      }
    }
  }),
  schema: stryMutAct_9fa48("4733") ? {} : (stryCov_9fa48("4733"), {
    message: stryMutAct_9fa48("4734") ? "" : (stryCov_9fa48("4734"), 'Updating NodeBB data store schema...'),
    handler: async function () {
      if (stryMutAct_9fa48("4735")) {
        {}
      } else {
        stryCov_9fa48("4735");
        await require('../database').init();
        await require('../meta').configs.init();
        await require('../upgrade').run();
      }
    }
  }),
  build: stryMutAct_9fa48("4736") ? {} : (stryCov_9fa48("4736"), {
    message: stryMutAct_9fa48("4737") ? "" : (stryCov_9fa48("4737"), 'Rebuilding assets...'),
    handler: async function () {
      if (stryMutAct_9fa48("4738")) {
        {}
      } else {
        stryCov_9fa48("4738");
        await require('../meta/build').buildAll();
      }
    }
  })
});
async function runSteps(tasks) {
  if (stryMutAct_9fa48("4739")) {
    {}
  } else {
    stryCov_9fa48("4739");
    try {
      if (stryMutAct_9fa48("4740")) {
        {}
      } else {
        stryCov_9fa48("4740");
        for (let i = 0; stryMutAct_9fa48("4743") ? i >= tasks.length : stryMutAct_9fa48("4742") ? i <= tasks.length : stryMutAct_9fa48("4741") ? false : (stryCov_9fa48("4741", "4742", "4743"), i < tasks.length); stryMutAct_9fa48("4744") ? i-- : (stryCov_9fa48("4744"), i++)) {
          if (stryMutAct_9fa48("4745")) {
            {}
          } else {
            stryCov_9fa48("4745");
            const step = steps[tasks[i]];
            if (stryMutAct_9fa48("4748") ? step && step.message || step.handler : stryMutAct_9fa48("4747") ? false : stryMutAct_9fa48("4746") ? true : (stryCov_9fa48("4746", "4747", "4748"), (stryMutAct_9fa48("4750") ? step || step.message : stryMutAct_9fa48("4749") ? true : (stryCov_9fa48("4749", "4750"), step && step.message)) && step.handler)) {
              if (stryMutAct_9fa48("4751")) {
                {}
              } else {
                stryCov_9fa48("4751");
                process.stdout.write(stryMutAct_9fa48("4752") ? `` : (stryCov_9fa48("4752"), `\n${chalk.bold(stryMutAct_9fa48("4753") ? `` : (stryCov_9fa48("4753"), `${stryMutAct_9fa48("4754") ? i - 1 : (stryCov_9fa48("4754"), i + 1)}. `))}${chalk.yellow(step.message)}`));
                /* eslint-disable-next-line */
                await step.handler();
              }
            }
          }
        }
        const message = stryMutAct_9fa48("4755") ? "" : (stryCov_9fa48("4755"), 'NodeBB Upgrade Complete!');
        // some consoles will return undefined/zero columns,
        // so just use 2 spaces in upgrade script if we can't get our column count
        const {
          columns
        } = process.stdout;
        const spaces = columns ? (stryMutAct_9fa48("4756") ? new Array() : (stryCov_9fa48("4756"), new Array(stryMutAct_9fa48("4757") ? Math.floor(columns / 2) - message.length / 2 - 1 : (stryCov_9fa48("4757"), (stryMutAct_9fa48("4758") ? Math.floor(columns / 2) + message.length / 2 : (stryCov_9fa48("4758"), Math.floor(stryMutAct_9fa48("4759") ? columns * 2 : (stryCov_9fa48("4759"), columns / 2)) - (stryMutAct_9fa48("4760") ? message.length * 2 : (stryCov_9fa48("4760"), message.length / 2)))) + 1)))).join(stryMutAct_9fa48("4761") ? "" : (stryCov_9fa48("4761"), ' ')) : stryMutAct_9fa48("4762") ? "" : (stryCov_9fa48("4762"), '  ');
        console.log(stryMutAct_9fa48("4763") ? `` : (stryCov_9fa48("4763"), `\n\n${spaces}${chalk.green.bold(message)}\n`));
        process.exit();
      }
    } catch (err) {
      if (stryMutAct_9fa48("4764")) {
        {}
      } else {
        stryCov_9fa48("4764");
        console.error(stryMutAct_9fa48("4765") ? `` : (stryCov_9fa48("4765"), `Error occurred during upgrade: ${err.stack}`));
        throw err;
      }
    }
  }
}
async function runUpgrade(upgrades, options) {
  if (stryMutAct_9fa48("4766")) {
    {}
  } else {
    stryCov_9fa48("4766");
    console.log(chalk.cyan(stryMutAct_9fa48("4767") ? "" : (stryCov_9fa48("4767"), '\nUpdating NodeBB...')));
    options = stryMutAct_9fa48("4770") ? options && {} : stryMutAct_9fa48("4769") ? false : stryMutAct_9fa48("4768") ? true : (stryCov_9fa48("4768", "4769", "4770"), options || {});
    // disable mongo timeouts during upgrade
    nconf.set(stryMutAct_9fa48("4771") ? "" : (stryCov_9fa48("4771"), 'mongo:options:socketTimeoutMS'), 0);
    if (stryMutAct_9fa48("4774") ? upgrades !== true : stryMutAct_9fa48("4773") ? false : stryMutAct_9fa48("4772") ? true : (stryCov_9fa48("4772", "4773", "4774"), upgrades === (stryMutAct_9fa48("4775") ? false : (stryCov_9fa48("4775"), true)))) {
      if (stryMutAct_9fa48("4776")) {
        {}
      } else {
        stryCov_9fa48("4776");
        let tasks = Object.keys(steps);
        if (stryMutAct_9fa48("4779") ? (options.package || options.install || options.plugins || options.schema) && options.build : stryMutAct_9fa48("4778") ? false : stryMutAct_9fa48("4777") ? true : (stryCov_9fa48("4777", "4778", "4779"), (stryMutAct_9fa48("4781") ? (options.package || options.install || options.plugins) && options.schema : stryMutAct_9fa48("4780") ? false : (stryCov_9fa48("4780", "4781"), (stryMutAct_9fa48("4783") ? (options.package || options.install) && options.plugins : stryMutAct_9fa48("4782") ? false : (stryCov_9fa48("4782", "4783"), (stryMutAct_9fa48("4785") ? options.package && options.install : stryMutAct_9fa48("4784") ? false : (stryCov_9fa48("4784", "4785"), options.package || options.install)) || options.plugins)) || options.schema)) || options.build)) {
          if (stryMutAct_9fa48("4786")) {
            {}
          } else {
            stryCov_9fa48("4786");
            tasks = stryMutAct_9fa48("4787") ? tasks : (stryCov_9fa48("4787"), tasks.filter(stryMutAct_9fa48("4788") ? () => undefined : (stryCov_9fa48("4788"), key => options[key])));
          }
        }
        await runSteps(tasks);
        return;
      }
    }
    await require('../database').init();
    await require('../meta').configs.init();
    await require('../upgrade').runParticular(upgrades);
    process.exit(0);
  }
}
exports.upgrade = runUpgrade;