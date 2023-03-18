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
const _ = require('lodash');
const chalk = require('chalk');
const aliases = stryMutAct_9fa48("23158") ? {} : (stryCov_9fa48("23158"), {
  'plugin static dirs': stryMutAct_9fa48("23159") ? [] : (stryCov_9fa48("23159"), [stryMutAct_9fa48("23160") ? "" : (stryCov_9fa48("23160"), 'staticdirs')]),
  'requirejs modules': stryMutAct_9fa48("23161") ? [] : (stryCov_9fa48("23161"), [stryMutAct_9fa48("23162") ? "" : (stryCov_9fa48("23162"), 'rjs'), stryMutAct_9fa48("23163") ? "" : (stryCov_9fa48("23163"), 'modules')]),
  'client js bundle': stryMutAct_9fa48("23164") ? [] : (stryCov_9fa48("23164"), [stryMutAct_9fa48("23165") ? "" : (stryCov_9fa48("23165"), 'clientjs'), stryMutAct_9fa48("23166") ? "" : (stryCov_9fa48("23166"), 'clientscript'), stryMutAct_9fa48("23167") ? "" : (stryCov_9fa48("23167"), 'clientscripts')]),
  'admin js bundle': stryMutAct_9fa48("23168") ? [] : (stryCov_9fa48("23168"), [stryMutAct_9fa48("23169") ? "" : (stryCov_9fa48("23169"), 'adminjs'), stryMutAct_9fa48("23170") ? "" : (stryCov_9fa48("23170"), 'adminscript'), stryMutAct_9fa48("23171") ? "" : (stryCov_9fa48("23171"), 'adminscripts')]),
  javascript: stryMutAct_9fa48("23172") ? [] : (stryCov_9fa48("23172"), [stryMutAct_9fa48("23173") ? "" : (stryCov_9fa48("23173"), 'js')]),
  'client side styles': stryMutAct_9fa48("23174") ? [] : (stryCov_9fa48("23174"), [stryMutAct_9fa48("23175") ? "" : (stryCov_9fa48("23175"), 'clientcss'), stryMutAct_9fa48("23176") ? "" : (stryCov_9fa48("23176"), 'clientless'), stryMutAct_9fa48("23177") ? "" : (stryCov_9fa48("23177"), 'clientstyles'), stryMutAct_9fa48("23178") ? "" : (stryCov_9fa48("23178"), 'clientstyle')]),
  'admin control panel styles': stryMutAct_9fa48("23179") ? [] : (stryCov_9fa48("23179"), [stryMutAct_9fa48("23180") ? "" : (stryCov_9fa48("23180"), 'admincss'), stryMutAct_9fa48("23181") ? "" : (stryCov_9fa48("23181"), 'adminless'), stryMutAct_9fa48("23182") ? "" : (stryCov_9fa48("23182"), 'adminstyles'), stryMutAct_9fa48("23183") ? "" : (stryCov_9fa48("23183"), 'adminstyle'), stryMutAct_9fa48("23184") ? "" : (stryCov_9fa48("23184"), 'acpcss'), stryMutAct_9fa48("23185") ? "" : (stryCov_9fa48("23185"), 'acpless'), stryMutAct_9fa48("23186") ? "" : (stryCov_9fa48("23186"), 'acpstyles'), stryMutAct_9fa48("23187") ? "" : (stryCov_9fa48("23187"), 'acpstyle')]),
  styles: stryMutAct_9fa48("23188") ? [] : (stryCov_9fa48("23188"), [stryMutAct_9fa48("23189") ? "" : (stryCov_9fa48("23189"), 'css'), stryMutAct_9fa48("23190") ? "" : (stryCov_9fa48("23190"), 'less'), stryMutAct_9fa48("23191") ? "" : (stryCov_9fa48("23191"), 'style')]),
  templates: stryMutAct_9fa48("23192") ? [] : (stryCov_9fa48("23192"), [stryMutAct_9fa48("23193") ? "" : (stryCov_9fa48("23193"), 'tpl')]),
  languages: stryMutAct_9fa48("23194") ? [] : (stryCov_9fa48("23194"), [stryMutAct_9fa48("23195") ? "" : (stryCov_9fa48("23195"), 'lang'), stryMutAct_9fa48("23196") ? "" : (stryCov_9fa48("23196"), 'i18n')])
});
exports.aliases = aliases;
function buildTargets() {
  if (stryMutAct_9fa48("23197")) {
    {}
  } else {
    stryCov_9fa48("23197");
    let length = 0;
    const output = Object.keys(aliases).map(name => {
      if (stryMutAct_9fa48("23198")) {
        {}
      } else {
        stryCov_9fa48("23198");
        const arr = aliases[name];
        if (stryMutAct_9fa48("23202") ? name.length <= length : stryMutAct_9fa48("23201") ? name.length >= length : stryMutAct_9fa48("23200") ? false : stryMutAct_9fa48("23199") ? true : (stryCov_9fa48("23199", "23200", "23201", "23202"), name.length > length)) {
          if (stryMutAct_9fa48("23203")) {
            {}
          } else {
            stryCov_9fa48("23203");
            length = name.length;
          }
        }
        return stryMutAct_9fa48("23204") ? [] : (stryCov_9fa48("23204"), [name, arr.join(stryMutAct_9fa48("23205") ? "" : (stryCov_9fa48("23205"), ', '))]);
      }
    }).map(stryMutAct_9fa48("23206") ? () => undefined : (stryCov_9fa48("23206"), tuple => stryMutAct_9fa48("23207") ? `` : (stryCov_9fa48("23207"), `     ${chalk.magenta(_.padEnd(stryMutAct_9fa48("23208") ? `` : (stryCov_9fa48("23208"), `"${tuple[0]}"`), stryMutAct_9fa48("23209") ? length - 2 : (stryCov_9fa48("23209"), length + 2)))}  |  ${tuple[1]}`))).join(stryMutAct_9fa48("23210") ? "" : (stryCov_9fa48("23210"), '\n'));
    process.stdout.write((stryMutAct_9fa48("23211") ? "" : (stryCov_9fa48("23211"), '\n\n  Build targets:\n')) + (stryMutAct_9fa48("23212") ? `` : (stryCov_9fa48("23212"), `${chalk.green(stryMutAct_9fa48("23213") ? `` : (stryCov_9fa48("23213"), `\n     ${_.padEnd(stryMutAct_9fa48("23214") ? "" : (stryCov_9fa48("23214"), 'Target'), stryMutAct_9fa48("23215") ? length - 2 : (stryCov_9fa48("23215"), length + 2))}  |  Aliases`))}`)) + (stryMutAct_9fa48("23216") ? `` : (stryCov_9fa48("23216"), `${chalk.blue(stryMutAct_9fa48("23217") ? "" : (stryCov_9fa48("23217"), '\n     ------------------------------------------------------\n'))}`)) + (stryMutAct_9fa48("23218") ? `` : (stryCov_9fa48("23218"), `${output}\n\n`)));
  }
}
exports.buildTargets = buildTargets;