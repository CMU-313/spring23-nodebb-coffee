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
const baseDir = path.join(__dirname, stryMutAct_9fa48("5027") ? "" : (stryCov_9fa48("5027"), '../'));
const loader = path.join(baseDir, stryMutAct_9fa48("5028") ? "" : (stryCov_9fa48("5028"), 'loader.js'));
const app = path.join(baseDir, stryMutAct_9fa48("5029") ? "" : (stryCov_9fa48("5029"), 'app.js'));
const pidfile = path.join(baseDir, stryMutAct_9fa48("5030") ? "" : (stryCov_9fa48("5030"), 'pidfile'));
const config = path.join(baseDir, stryMutAct_9fa48("5031") ? "" : (stryCov_9fa48("5031"), 'config.json'));
const currentPackage = path.join(baseDir, stryMutAct_9fa48("5032") ? "" : (stryCov_9fa48("5032"), 'package.json'));
const installPackage = path.join(baseDir, stryMutAct_9fa48("5033") ? "" : (stryCov_9fa48("5033"), 'install/package.json'));
const nodeModules = path.join(baseDir, stryMutAct_9fa48("5034") ? "" : (stryCov_9fa48("5034"), 'node_modules'));
const themes = path.join(baseDir, stryMutAct_9fa48("5035") ? "" : (stryCov_9fa48("5035"), 'themes'));
exports.paths = stryMutAct_9fa48("5036") ? {} : (stryCov_9fa48("5036"), {
  baseDir,
  loader,
  app,
  pidfile,
  config,
  currentPackage,
  installPackage,
  nodeModules,
  themes
});
exports.pluginNamePattern = stryMutAct_9fa48("5045") ? /^(@[\w-]+\/)?nodebb-(theme|plugin|widget|rewards)-[\W-]+$/ : stryMutAct_9fa48("5044") ? /^(@[\w-]+\/)?nodebb-(theme|plugin|widget|rewards)-[^\w-]+$/ : stryMutAct_9fa48("5043") ? /^(@[\w-]+\/)?nodebb-(theme|plugin|widget|rewards)-[\w-]$/ : stryMutAct_9fa48("5042") ? /^(@[\W-]+\/)?nodebb-(theme|plugin|widget|rewards)-[\w-]+$/ : stryMutAct_9fa48("5041") ? /^(@[^\w-]+\/)?nodebb-(theme|plugin|widget|rewards)-[\w-]+$/ : stryMutAct_9fa48("5040") ? /^(@[\w-]\/)?nodebb-(theme|plugin|widget|rewards)-[\w-]+$/ : stryMutAct_9fa48("5039") ? /^(@[\w-]+\/)nodebb-(theme|plugin|widget|rewards)-[\w-]+$/ : stryMutAct_9fa48("5038") ? /^(@[\w-]+\/)?nodebb-(theme|plugin|widget|rewards)-[\w-]+/ : stryMutAct_9fa48("5037") ? /(@[\w-]+\/)?nodebb-(theme|plugin|widget|rewards)-[\w-]+$/ : (stryCov_9fa48("5037", "5038", "5039", "5040", "5041", "5042", "5043", "5044", "5045"), /^(@[\w-]+\/)?nodebb-(theme|plugin|widget|rewards)-[\w-]+$/);
exports.themeNamePattern = stryMutAct_9fa48("5054") ? /^(@[\w-]+\/)?nodebb-theme-[\W-]+$/ : stryMutAct_9fa48("5053") ? /^(@[\w-]+\/)?nodebb-theme-[^\w-]+$/ : stryMutAct_9fa48("5052") ? /^(@[\w-]+\/)?nodebb-theme-[\w-]$/ : stryMutAct_9fa48("5051") ? /^(@[\W-]+\/)?nodebb-theme-[\w-]+$/ : stryMutAct_9fa48("5050") ? /^(@[^\w-]+\/)?nodebb-theme-[\w-]+$/ : stryMutAct_9fa48("5049") ? /^(@[\w-]\/)?nodebb-theme-[\w-]+$/ : stryMutAct_9fa48("5048") ? /^(@[\w-]+\/)nodebb-theme-[\w-]+$/ : stryMutAct_9fa48("5047") ? /^(@[\w-]+\/)?nodebb-theme-[\w-]+/ : stryMutAct_9fa48("5046") ? /(@[\w-]+\/)?nodebb-theme-[\w-]+$/ : (stryCov_9fa48("5046", "5047", "5048", "5049", "5050", "5051", "5052", "5053", "5054"), /^(@[\w-]+\/)?nodebb-theme-[\w-]+$/);