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
const validator = require('validator');
const plugins = require('../../plugins');
const hooksController = module.exports;
hooksController.get = function (req, res) {
  if (stryMutAct_9fa48("7217")) {
    {}
  } else {
    stryCov_9fa48("7217");
    const hooks = stryMutAct_9fa48("7218") ? ["Stryker was here"] : (stryCov_9fa48("7218"), []);
    Object.keys(plugins.loadedHooks).forEach((key, hookIndex) => {
      if (stryMutAct_9fa48("7219")) {
        {}
      } else {
        stryCov_9fa48("7219");
        const current = stryMutAct_9fa48("7220") ? {} : (stryCov_9fa48("7220"), {
          hookName: key,
          methods: stryMutAct_9fa48("7221") ? ["Stryker was here"] : (stryCov_9fa48("7221"), []),
          index: stryMutAct_9fa48("7222") ? `` : (stryCov_9fa48("7222"), `hook-${hookIndex}`),
          count: plugins.loadedHooks[key].length
        });
        plugins.loadedHooks[key].forEach((hookData, methodIndex) => {
          if (stryMutAct_9fa48("7223")) {
            {}
          } else {
            stryCov_9fa48("7223");
            current.methods.push(stryMutAct_9fa48("7224") ? {} : (stryCov_9fa48("7224"), {
              id: hookData.id,
              priority: hookData.priority,
              method: hookData.method ? validator.escape(hookData.method.toString()) : stryMutAct_9fa48("7225") ? "" : (stryCov_9fa48("7225"), 'No plugin function!'),
              index: stryMutAct_9fa48("7226") ? `` : (stryCov_9fa48("7226"), `${hookIndex}-code-${methodIndex}`)
            }));
          }
        });
        hooks.push(current);
      }
    });
    stryMutAct_9fa48("7227") ? hooks : (stryCov_9fa48("7227"), hooks.sort(stryMutAct_9fa48("7228") ? () => undefined : (stryCov_9fa48("7228"), (a, b) => stryMutAct_9fa48("7229") ? b.count + a.count : (stryCov_9fa48("7229"), b.count - a.count))));
    res.render(stryMutAct_9fa48("7230") ? "" : (stryCov_9fa48("7230"), 'admin/advanced/hooks'), stryMutAct_9fa48("7231") ? {} : (stryCov_9fa48("7231"), {
      hooks: hooks
    }));
  }
};