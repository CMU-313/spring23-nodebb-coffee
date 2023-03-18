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
const {
  fork
} = require('child_process');
let debugArg = process.execArgv.find(stryMutAct_9fa48("24016") ? () => undefined : (stryCov_9fa48("24016"), arg => (stryMutAct_9fa48("24017") ? /--(debug|inspect)/ : (stryCov_9fa48("24017"), /^--(debug|inspect)/)).test(arg)));
const debugging = stryMutAct_9fa48("24018") ? !debugArg : (stryCov_9fa48("24018"), !(stryMutAct_9fa48("24019") ? debugArg : (stryCov_9fa48("24019"), !debugArg)));
debugArg = debugArg ? debugArg.replace(stryMutAct_9fa48("24020") ? "" : (stryCov_9fa48("24020"), '-brk'), stryMutAct_9fa48("24021") ? "Stryker was here!" : (stryCov_9fa48("24021"), '')).split(stryMutAct_9fa48("24022") ? "" : (stryCov_9fa48("24022"), '=')) : stryMutAct_9fa48("24023") ? [] : (stryCov_9fa48("24023"), [stryMutAct_9fa48("24024") ? "" : (stryCov_9fa48("24024"), '--debug'), 5859]);
let lastAddress = parseInt(debugArg[1], 10);

/**
 * child-process.fork, but safe for use in debuggers
 * @param {string} modulePath
 * @param {string[]} [args]
 * @param {any} [options]
 */
function debugFork(modulePath, args, options) {
  if (stryMutAct_9fa48("24025")) {
    {}
  } else {
    stryCov_9fa48("24025");
    let execArgv = stryMutAct_9fa48("24026") ? ["Stryker was here"] : (stryCov_9fa48("24026"), []);
    if (stryMutAct_9fa48("24029") ? global.v8debug && debugging : stryMutAct_9fa48("24028") ? false : stryMutAct_9fa48("24027") ? true : (stryCov_9fa48("24027", "24028", "24029"), global.v8debug || debugging)) {
      if (stryMutAct_9fa48("24030")) {
        {}
      } else {
        stryCov_9fa48("24030");
        stryMutAct_9fa48("24031") ? lastAddress -= 1 : (stryCov_9fa48("24031"), lastAddress += 1);
        execArgv = stryMutAct_9fa48("24032") ? [] : (stryCov_9fa48("24032"), [stryMutAct_9fa48("24033") ? `` : (stryCov_9fa48("24033"), `${debugArg[0]}=${lastAddress}`), stryMutAct_9fa48("24034") ? "" : (stryCov_9fa48("24034"), '--nolazy')]);
      }
    }
    if (stryMutAct_9fa48("24037") ? false : stryMutAct_9fa48("24036") ? true : stryMutAct_9fa48("24035") ? Array.isArray(args) : (stryCov_9fa48("24035", "24036", "24037"), !Array.isArray(args))) {
      if (stryMutAct_9fa48("24038")) {
        {}
      } else {
        stryCov_9fa48("24038");
        options = args;
        args = stryMutAct_9fa48("24039") ? ["Stryker was here"] : (stryCov_9fa48("24039"), []);
      }
    }
    options = stryMutAct_9fa48("24042") ? options && {} : stryMutAct_9fa48("24041") ? false : stryMutAct_9fa48("24040") ? true : (stryCov_9fa48("24040", "24041", "24042"), options || {});
    options = stryMutAct_9fa48("24043") ? {} : (stryCov_9fa48("24043"), {
      ...options,
      execArgv: execArgv
    });
    return fork(modulePath, args, options);
  }
}
debugFork.debugging = debugging;
module.exports = debugFork;