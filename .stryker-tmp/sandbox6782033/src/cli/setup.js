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
const nconf = require('nconf');
const {
  install
} = require('../../install/web');
async function setup(initConfig) {
  if (stryMutAct_9fa48("4561")) {
    {}
  } else {
    stryCov_9fa48("4561");
    const {
      paths
    } = require('../constants');
    const install = require('../install');
    const build = require('../meta/build');
    const prestart = require('../prestart');
    const pkg = require('../../package.json');
    winston.info(stryMutAct_9fa48("4562") ? "" : (stryCov_9fa48("4562"), 'NodeBB Setup Triggered via Command Line'));
    console.log(stryMutAct_9fa48("4563") ? `` : (stryCov_9fa48("4563"), `\nWelcome to NodeBB v${pkg.version}!`));
    console.log(stryMutAct_9fa48("4564") ? "" : (stryCov_9fa48("4564"), '\nThis looks like a new installation, so you\'ll have to answer a few questions about your environment before we can proceed.'));
    console.log(stryMutAct_9fa48("4565") ? "" : (stryCov_9fa48("4565"), 'Press enter to accept the default setting (shown in brackets).'));
    install.values = initConfig;
    const data = await install.setup();
    let configFile = paths.config;
    if (stryMutAct_9fa48("4567") ? false : stryMutAct_9fa48("4566") ? true : (stryCov_9fa48("4566", "4567"), nconf.get(stryMutAct_9fa48("4568") ? "" : (stryCov_9fa48("4568"), 'config')))) {
      if (stryMutAct_9fa48("4569")) {
        {}
      } else {
        stryCov_9fa48("4569");
        configFile = path.resolve(paths.baseDir, nconf.get(stryMutAct_9fa48("4570") ? "" : (stryCov_9fa48("4570"), 'config')));
      }
    }
    prestart.loadConfig(configFile);
    if (stryMutAct_9fa48("4573") ? false : stryMutAct_9fa48("4572") ? true : stryMutAct_9fa48("4571") ? nconf.get('skip-build') : (stryCov_9fa48("4571", "4572", "4573"), !nconf.get(stryMutAct_9fa48("4574") ? "" : (stryCov_9fa48("4574"), 'skip-build')))) {
      if (stryMutAct_9fa48("4575")) {
        {}
      } else {
        stryCov_9fa48("4575");
        await build.buildAll();
      }
    }
    let separator = stryMutAct_9fa48("4576") ? "" : (stryCov_9fa48("4576"), '     ');
    if (stryMutAct_9fa48("4580") ? process.stdout.columns <= 10 : stryMutAct_9fa48("4579") ? process.stdout.columns >= 10 : stryMutAct_9fa48("4578") ? false : stryMutAct_9fa48("4577") ? true : (stryCov_9fa48("4577", "4578", "4579", "4580"), process.stdout.columns > 10)) {
      if (stryMutAct_9fa48("4581")) {
        {}
      } else {
        stryCov_9fa48("4581");
        for (let x = 0, cols = stryMutAct_9fa48("4582") ? process.stdout.columns + 10 : (stryCov_9fa48("4582"), process.stdout.columns - 10); stryMutAct_9fa48("4585") ? x >= cols : stryMutAct_9fa48("4584") ? x <= cols : stryMutAct_9fa48("4583") ? false : (stryCov_9fa48("4583", "4584", "4585"), x < cols); stryMutAct_9fa48("4586") ? x -= 1 : (stryCov_9fa48("4586"), x += 1)) {
          if (stryMutAct_9fa48("4587")) {
            {}
          } else {
            stryCov_9fa48("4587");
            separator += stryMutAct_9fa48("4588") ? "" : (stryCov_9fa48("4588"), '=');
          }
        }
      }
    }
    console.log(stryMutAct_9fa48("4589") ? `` : (stryCov_9fa48("4589"), `\n${separator}\n`));
    if (stryMutAct_9fa48("4591") ? false : stryMutAct_9fa48("4590") ? true : (stryCov_9fa48("4590", "4591"), data.hasOwnProperty(stryMutAct_9fa48("4592") ? "" : (stryCov_9fa48("4592"), 'password')))) {
      if (stryMutAct_9fa48("4593")) {
        {}
      } else {
        stryCov_9fa48("4593");
        console.log(stryMutAct_9fa48("4594") ? "" : (stryCov_9fa48("4594"), 'An administrative user was automatically created for you:'));
        console.log(stryMutAct_9fa48("4595") ? `` : (stryCov_9fa48("4595"), `    Username: ${data.username}`));
        console.log(stryMutAct_9fa48("4596") ? `` : (stryCov_9fa48("4596"), `    Password: ${data.password}`));
        console.log(stryMutAct_9fa48("4597") ? "Stryker was here!" : (stryCov_9fa48("4597"), ''));
      }
    }
    console.log(stryMutAct_9fa48("4598") ? "" : (stryCov_9fa48("4598"), 'NodeBB Setup Completed. Run "./nodebb start" to manually start your NodeBB server.'));

    // If I am a child process, notify the parent of the returned data before exiting (useful for notifying
    // hosts of auto-generated username/password during headless setups)
    if (stryMutAct_9fa48("4600") ? false : stryMutAct_9fa48("4599") ? true : (stryCov_9fa48("4599", "4600"), process.send)) {
      if (stryMutAct_9fa48("4601")) {
        {}
      } else {
        stryCov_9fa48("4601");
        process.send(data);
      }
    }
    process.exit();
  }
}
exports.setup = setup;
exports.webInstall = install;