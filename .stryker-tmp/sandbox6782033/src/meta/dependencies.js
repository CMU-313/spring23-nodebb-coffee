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
const fs = require('fs');
const semver = require('semver');
const winston = require('winston');
const chalk = require('chalk');
const pkg = require('../../package.json');
const {
  paths,
  pluginNamePattern
} = require('../constants');
const Dependencies = module.exports;
let depsMissing = stryMutAct_9fa48("24044") ? true : (stryCov_9fa48("24044"), false);
let depsOutdated = stryMutAct_9fa48("24045") ? true : (stryCov_9fa48("24045"), false);
Dependencies.check = async function () {
  if (stryMutAct_9fa48("24046")) {
    {}
  } else {
    stryCov_9fa48("24046");
    const modules = Object.keys(pkg.dependencies);
    winston.verbose(stryMutAct_9fa48("24047") ? "" : (stryCov_9fa48("24047"), 'Checking dependencies for outdated modules'));
    await Promise.all(modules.map(stryMutAct_9fa48("24048") ? () => undefined : (stryCov_9fa48("24048"), module => Dependencies.checkModule(module))));
    if (stryMutAct_9fa48("24050") ? false : stryMutAct_9fa48("24049") ? true : (stryCov_9fa48("24049", "24050"), depsMissing)) {
      if (stryMutAct_9fa48("24051")) {
        {}
      } else {
        stryCov_9fa48("24051");
        throw new Error(stryMutAct_9fa48("24052") ? "" : (stryCov_9fa48("24052"), 'dependencies-missing'));
      }
    } else if (stryMutAct_9fa48("24055") ? depsOutdated || global.env !== 'development' : stryMutAct_9fa48("24054") ? false : stryMutAct_9fa48("24053") ? true : (stryCov_9fa48("24053", "24054", "24055"), depsOutdated && (stryMutAct_9fa48("24057") ? global.env === 'development' : stryMutAct_9fa48("24056") ? true : (stryCov_9fa48("24056", "24057"), global.env !== (stryMutAct_9fa48("24058") ? "" : (stryCov_9fa48("24058"), 'development')))))) {
      if (stryMutAct_9fa48("24059")) {
        {}
      } else {
        stryCov_9fa48("24059");
        throw new Error(stryMutAct_9fa48("24060") ? "" : (stryCov_9fa48("24060"), 'dependencies-out-of-date'));
      }
    }
  }
};
Dependencies.checkModule = async function (moduleName) {
  if (stryMutAct_9fa48("24061")) {
    {}
  } else {
    stryCov_9fa48("24061");
    try {
      if (stryMutAct_9fa48("24062")) {
        {}
      } else {
        stryCov_9fa48("24062");
        let pkgData = await fs.promises.readFile(path.join(paths.nodeModules, moduleName, stryMutAct_9fa48("24063") ? "" : (stryCov_9fa48("24063"), 'package.json')), stryMutAct_9fa48("24064") ? "" : (stryCov_9fa48("24064"), 'utf8'));
        pkgData = Dependencies.parseModuleData(moduleName, pkgData);
        const satisfies = Dependencies.doesSatisfy(pkgData, pkg.dependencies[moduleName]);
        return satisfies;
      }
    } catch (err) {
      if (stryMutAct_9fa48("24065")) {
        {}
      } else {
        stryCov_9fa48("24065");
        if (stryMutAct_9fa48("24068") ? err.code === 'ENOENT' || pluginNamePattern.test(moduleName) : stryMutAct_9fa48("24067") ? false : stryMutAct_9fa48("24066") ? true : (stryCov_9fa48("24066", "24067", "24068"), (stryMutAct_9fa48("24070") ? err.code !== 'ENOENT' : stryMutAct_9fa48("24069") ? true : (stryCov_9fa48("24069", "24070"), err.code === (stryMutAct_9fa48("24071") ? "" : (stryCov_9fa48("24071"), 'ENOENT')))) && pluginNamePattern.test(moduleName))) {
          if (stryMutAct_9fa48("24072")) {
            {}
          } else {
            stryCov_9fa48("24072");
            winston.warn(stryMutAct_9fa48("24073") ? `` : (stryCov_9fa48("24073"), `[meta/dependencies] Bundled plugin ${moduleName} not found, skipping dependency check.`));
            return stryMutAct_9fa48("24074") ? false : (stryCov_9fa48("24074"), true);
          }
        }
        throw err;
      }
    }
  }
};
Dependencies.parseModuleData = function (moduleName, pkgData) {
  if (stryMutAct_9fa48("24075")) {
    {}
  } else {
    stryCov_9fa48("24075");
    try {
      if (stryMutAct_9fa48("24076")) {
        {}
      } else {
        stryCov_9fa48("24076");
        pkgData = JSON.parse(pkgData);
      }
    } catch (e) {
      if (stryMutAct_9fa48("24077")) {
        {}
      } else {
        stryCov_9fa48("24077");
        winston.warn(stryMutAct_9fa48("24078") ? `` : (stryCov_9fa48("24078"), `[${chalk.red(stryMutAct_9fa48("24079") ? "" : (stryCov_9fa48("24079"), 'missing'))}] ${chalk.bold(moduleName)} is a required dependency but could not be found\n`));
        depsMissing = stryMutAct_9fa48("24080") ? false : (stryCov_9fa48("24080"), true);
        return null;
      }
    }
    return pkgData;
  }
};
Dependencies.doesSatisfy = function (moduleData, packageJSONVersion) {
  if (stryMutAct_9fa48("24081")) {
    {}
  } else {
    stryCov_9fa48("24081");
    if (stryMutAct_9fa48("24084") ? false : stryMutAct_9fa48("24083") ? true : stryMutAct_9fa48("24082") ? moduleData : (stryCov_9fa48("24082", "24083", "24084"), !moduleData)) {
      if (stryMutAct_9fa48("24085")) {
        {}
      } else {
        stryCov_9fa48("24085");
        return stryMutAct_9fa48("24086") ? true : (stryCov_9fa48("24086"), false);
      }
    }
    const versionOk = stryMutAct_9fa48("24089") ? !semver.validRange(packageJSONVersion) && semver.satisfies(moduleData.version, packageJSONVersion) : stryMutAct_9fa48("24088") ? false : stryMutAct_9fa48("24087") ? true : (stryCov_9fa48("24087", "24088", "24089"), (stryMutAct_9fa48("24090") ? semver.validRange(packageJSONVersion) : (stryCov_9fa48("24090"), !semver.validRange(packageJSONVersion))) || semver.satisfies(moduleData.version, packageJSONVersion));
    const githubRepo = stryMutAct_9fa48("24093") ? moduleData._resolved || moduleData._resolved.includes('//github.com') : stryMutAct_9fa48("24092") ? false : stryMutAct_9fa48("24091") ? true : (stryCov_9fa48("24091", "24092", "24093"), moduleData._resolved && moduleData._resolved.includes(stryMutAct_9fa48("24094") ? "" : (stryCov_9fa48("24094"), '//github.com')));
    const satisfies = stryMutAct_9fa48("24097") ? versionOk && githubRepo : stryMutAct_9fa48("24096") ? false : stryMutAct_9fa48("24095") ? true : (stryCov_9fa48("24095", "24096", "24097"), versionOk || githubRepo);
    if (stryMutAct_9fa48("24100") ? false : stryMutAct_9fa48("24099") ? true : stryMutAct_9fa48("24098") ? satisfies : (stryCov_9fa48("24098", "24099", "24100"), !satisfies)) {
      if (stryMutAct_9fa48("24101")) {
        {}
      } else {
        stryCov_9fa48("24101");
        winston.warn(stryMutAct_9fa48("24102") ? `` : (stryCov_9fa48("24102"), `[${chalk.yellow(stryMutAct_9fa48("24103") ? "" : (stryCov_9fa48("24103"), 'outdated'))}] ${chalk.bold(moduleData.name)} installed v${moduleData.version}, package.json requires ${packageJSONVersion}\n`));
        depsOutdated = stryMutAct_9fa48("24104") ? false : (stryCov_9fa48("24104"), true);
      }
    }
    return satisfies;
  }
};