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
const util = require('util');
module.exports = function (theModule, ignoreKeys) {
  if (stryMutAct_9fa48("32297")) {
    {}
  } else {
    stryCov_9fa48("32297");
    ignoreKeys = stryMutAct_9fa48("32300") ? ignoreKeys && [] : stryMutAct_9fa48("32299") ? false : stryMutAct_9fa48("32298") ? true : (stryCov_9fa48("32298", "32299", "32300"), ignoreKeys || (stryMutAct_9fa48("32301") ? ["Stryker was here"] : (stryCov_9fa48("32301"), [])));
    function isCallbackedFunction(func) {
      if (stryMutAct_9fa48("32302")) {
        {}
      } else {
        stryCov_9fa48("32302");
        if (stryMutAct_9fa48("32305") ? typeof func === 'function' : stryMutAct_9fa48("32304") ? false : stryMutAct_9fa48("32303") ? true : (stryCov_9fa48("32303", "32304", "32305"), typeof func !== (stryMutAct_9fa48("32306") ? "" : (stryCov_9fa48("32306"), 'function')))) {
          if (stryMutAct_9fa48("32307")) {
            {}
          } else {
            stryCov_9fa48("32307");
            return stryMutAct_9fa48("32308") ? true : (stryCov_9fa48("32308"), false);
          }
        }
        const str = func.toString().split(stryMutAct_9fa48("32309") ? "" : (stryCov_9fa48("32309"), '\n'))[0];
        return str.includes(stryMutAct_9fa48("32310") ? "" : (stryCov_9fa48("32310"), 'callback)'));
      }
    }
    function isAsyncFunction(fn) {
      if (stryMutAct_9fa48("32311")) {
        {}
      } else {
        stryCov_9fa48("32311");
        return stryMutAct_9fa48("32314") ? fn && fn.constructor || fn.constructor.name === 'AsyncFunction' : stryMutAct_9fa48("32313") ? false : stryMutAct_9fa48("32312") ? true : (stryCov_9fa48("32312", "32313", "32314"), (stryMutAct_9fa48("32316") ? fn || fn.constructor : stryMutAct_9fa48("32315") ? true : (stryCov_9fa48("32315", "32316"), fn && fn.constructor)) && (stryMutAct_9fa48("32318") ? fn.constructor.name !== 'AsyncFunction' : stryMutAct_9fa48("32317") ? true : (stryCov_9fa48("32317", "32318"), fn.constructor.name === (stryMutAct_9fa48("32319") ? "" : (stryCov_9fa48("32319"), 'AsyncFunction')))));
      }
    }
    function promisifyRecursive(module) {
      if (stryMutAct_9fa48("32320")) {
        {}
      } else {
        stryCov_9fa48("32320");
        if (stryMutAct_9fa48("32323") ? false : stryMutAct_9fa48("32322") ? true : stryMutAct_9fa48("32321") ? module : (stryCov_9fa48("32321", "32322", "32323"), !module)) {
          if (stryMutAct_9fa48("32324")) {
            {}
          } else {
            stryCov_9fa48("32324");
            return;
          }
        }
        const keys = Object.keys(module);
        keys.forEach(key => {
          if (stryMutAct_9fa48("32325")) {
            {}
          } else {
            stryCov_9fa48("32325");
            if (stryMutAct_9fa48("32327") ? false : stryMutAct_9fa48("32326") ? true : (stryCov_9fa48("32326", "32327"), ignoreKeys.includes(key))) {
              if (stryMutAct_9fa48("32328")) {
                {}
              } else {
                stryCov_9fa48("32328");
                return;
              }
            }
            if (stryMutAct_9fa48("32330") ? false : stryMutAct_9fa48("32329") ? true : (stryCov_9fa48("32329", "32330"), isAsyncFunction(module[key]))) {
              if (stryMutAct_9fa48("32331")) {
                {}
              } else {
                stryCov_9fa48("32331");
                module[key] = wrapCallback(module[key], util.callbackify(module[key]));
              }
            } else if (stryMutAct_9fa48("32333") ? false : stryMutAct_9fa48("32332") ? true : (stryCov_9fa48("32332", "32333"), isCallbackedFunction(module[key]))) {
              if (stryMutAct_9fa48("32334")) {
                {}
              } else {
                stryCov_9fa48("32334");
                module[key] = wrapPromise(module[key], util.promisify(module[key]));
              }
            } else if (stryMutAct_9fa48("32337") ? typeof module[key] !== 'object' : stryMutAct_9fa48("32336") ? false : stryMutAct_9fa48("32335") ? true : (stryCov_9fa48("32335", "32336", "32337"), typeof module[key] === (stryMutAct_9fa48("32338") ? "" : (stryCov_9fa48("32338"), 'object')))) {
              if (stryMutAct_9fa48("32339")) {
                {}
              } else {
                stryCov_9fa48("32339");
                promisifyRecursive(module[key]);
              }
            }
          }
        });
      }
    }
    function wrapCallback(origFn, callbackFn) {
      if (stryMutAct_9fa48("32340")) {
        {}
      } else {
        stryCov_9fa48("32340");
        return async function wrapperCallback(...args) {
          if (stryMutAct_9fa48("32341")) {
            {}
          } else {
            stryCov_9fa48("32341");
            if (stryMutAct_9fa48("32344") ? args.length || typeof args[args.length - 1] === 'function' : stryMutAct_9fa48("32343") ? false : stryMutAct_9fa48("32342") ? true : (stryCov_9fa48("32342", "32343", "32344"), args.length && (stryMutAct_9fa48("32346") ? typeof args[args.length - 1] !== 'function' : stryMutAct_9fa48("32345") ? true : (stryCov_9fa48("32345", "32346"), typeof args[stryMutAct_9fa48("32347") ? args.length + 1 : (stryCov_9fa48("32347"), args.length - 1)] === (stryMutAct_9fa48("32348") ? "" : (stryCov_9fa48("32348"), 'function')))))) {
              if (stryMutAct_9fa48("32349")) {
                {}
              } else {
                stryCov_9fa48("32349");
                const cb = args.pop();
                args.push(stryMutAct_9fa48("32350") ? () => undefined : (stryCov_9fa48("32350"), (err, res) => (stryMutAct_9fa48("32353") ? res === undefined : stryMutAct_9fa48("32352") ? false : stryMutAct_9fa48("32351") ? true : (stryCov_9fa48("32351", "32352", "32353"), res !== undefined)) ? cb(err, res) : cb(err)));
                return callbackFn(...args);
              }
            }
            return origFn(...args);
          }
        };
      }
    }
    function wrapPromise(origFn, promiseFn) {
      if (stryMutAct_9fa48("32354")) {
        {}
      } else {
        stryCov_9fa48("32354");
        return function wrapperPromise(...args) {
          if (stryMutAct_9fa48("32355")) {
            {}
          } else {
            stryCov_9fa48("32355");
            if (stryMutAct_9fa48("32358") ? args.length || typeof args[args.length - 1] === 'function' : stryMutAct_9fa48("32357") ? false : stryMutAct_9fa48("32356") ? true : (stryCov_9fa48("32356", "32357", "32358"), args.length && (stryMutAct_9fa48("32360") ? typeof args[args.length - 1] !== 'function' : stryMutAct_9fa48("32359") ? true : (stryCov_9fa48("32359", "32360"), typeof args[stryMutAct_9fa48("32361") ? args.length + 1 : (stryCov_9fa48("32361"), args.length - 1)] === (stryMutAct_9fa48("32362") ? "" : (stryCov_9fa48("32362"), 'function')))))) {
              if (stryMutAct_9fa48("32363")) {
                {}
              } else {
                stryCov_9fa48("32363");
                return origFn(...args);
              }
            }
            return promiseFn(...args);
          }
        };
      }
    }
    promisifyRecursive(theModule);
  }
};