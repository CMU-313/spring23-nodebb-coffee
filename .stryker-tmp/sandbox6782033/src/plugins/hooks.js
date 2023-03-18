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
const winston = require('winston');
const plugins = require('.');
const utils = require('../utils');
const Hooks = module.exports;
Hooks._deprecated = new Map(stryMutAct_9fa48("27462") ? [] : (stryCov_9fa48("27462"), [stryMutAct_9fa48("27463") ? [] : (stryCov_9fa48("27463"), [stryMutAct_9fa48("27464") ? "" : (stryCov_9fa48("27464"), 'filter:email.send'), stryMutAct_9fa48("27465") ? {} : (stryCov_9fa48("27465"), {
  new: stryMutAct_9fa48("27466") ? "" : (stryCov_9fa48("27466"), 'static:email.send'),
  since: stryMutAct_9fa48("27467") ? "" : (stryCov_9fa48("27467"), 'v1.17.0'),
  until: stryMutAct_9fa48("27468") ? "" : (stryCov_9fa48("27468"), 'v2.0.0')
})]), stryMutAct_9fa48("27469") ? [] : (stryCov_9fa48("27469"), [stryMutAct_9fa48("27470") ? "" : (stryCov_9fa48("27470"), 'filter:router.page'), stryMutAct_9fa48("27471") ? {} : (stryCov_9fa48("27471"), {
  new: stryMutAct_9fa48("27472") ? "" : (stryCov_9fa48("27472"), 'response:router.page'),
  since: stryMutAct_9fa48("27473") ? "" : (stryCov_9fa48("27473"), 'v1.15.3'),
  until: stryMutAct_9fa48("27474") ? "" : (stryCov_9fa48("27474"), 'v2.1.0')
})]), stryMutAct_9fa48("27475") ? [] : (stryCov_9fa48("27475"), [stryMutAct_9fa48("27476") ? "" : (stryCov_9fa48("27476"), 'filter:post.purge'), stryMutAct_9fa48("27477") ? {} : (stryCov_9fa48("27477"), {
  new: stryMutAct_9fa48("27478") ? "" : (stryCov_9fa48("27478"), 'filter:posts.purge'),
  since: stryMutAct_9fa48("27479") ? "" : (stryCov_9fa48("27479"), 'v1.19.6'),
  until: stryMutAct_9fa48("27480") ? "" : (stryCov_9fa48("27480"), 'v2.1.0')
})]), stryMutAct_9fa48("27481") ? [] : (stryCov_9fa48("27481"), [stryMutAct_9fa48("27482") ? "" : (stryCov_9fa48("27482"), 'action:post.purge'), stryMutAct_9fa48("27483") ? {} : (stryCov_9fa48("27483"), {
  new: stryMutAct_9fa48("27484") ? "" : (stryCov_9fa48("27484"), 'action:posts.purge'),
  since: stryMutAct_9fa48("27485") ? "" : (stryCov_9fa48("27485"), 'v1.19.6'),
  until: stryMutAct_9fa48("27486") ? "" : (stryCov_9fa48("27486"), 'v2.1.0')
})]), stryMutAct_9fa48("27487") ? [] : (stryCov_9fa48("27487"), [stryMutAct_9fa48("27488") ? "" : (stryCov_9fa48("27488"), 'filter:user.verify.code'), stryMutAct_9fa48("27489") ? {} : (stryCov_9fa48("27489"), {
  new: stryMutAct_9fa48("27490") ? "" : (stryCov_9fa48("27490"), 'filter:user.verify'),
  since: stryMutAct_9fa48("27491") ? "" : (stryCov_9fa48("27491"), 'v2.2.0'),
  until: stryMutAct_9fa48("27492") ? "" : (stryCov_9fa48("27492"), 'v3.0.0')
})]), stryMutAct_9fa48("27493") ? [] : (stryCov_9fa48("27493"), [stryMutAct_9fa48("27494") ? "" : (stryCov_9fa48("27494"), 'filter:flags.getFilters'), stryMutAct_9fa48("27495") ? {} : (stryCov_9fa48("27495"), {
  new: stryMutAct_9fa48("27496") ? "" : (stryCov_9fa48("27496"), 'filter:flags.init'),
  since: stryMutAct_9fa48("27497") ? "" : (stryCov_9fa48("27497"), 'v2.7.0'),
  until: stryMutAct_9fa48("27498") ? "" : (stryCov_9fa48("27498"), 'v3.0.0')
})])]));
Hooks.internals = stryMutAct_9fa48("27499") ? {} : (stryCov_9fa48("27499"), {
  _register: function (data) {
    if (stryMutAct_9fa48("27500")) {
      {}
    } else {
      stryCov_9fa48("27500");
      plugins.loadedHooks[data.hook] = stryMutAct_9fa48("27503") ? plugins.loadedHooks[data.hook] && [] : stryMutAct_9fa48("27502") ? false : stryMutAct_9fa48("27501") ? true : (stryCov_9fa48("27501", "27502", "27503"), plugins.loadedHooks[data.hook] || (stryMutAct_9fa48("27504") ? ["Stryker was here"] : (stryCov_9fa48("27504"), [])));
      plugins.loadedHooks[data.hook].push(data);
    }
  }
});
const hookTypeToMethod = stryMutAct_9fa48("27505") ? {} : (stryCov_9fa48("27505"), {
  filter: fireFilterHook,
  action: fireActionHook,
  static: fireStaticHook,
  response: fireResponseHook
});

/*
    `data` is an object consisting of (* is required):
        `data.hook`*, the name of the NodeBB hook
        `data.method`*, the method called in that plugin (can be an array of functions)
        `data.priority`, the relative priority of the method when it is eventually called (default: 10)
*/
Hooks.register = function (id, data) {
  if (stryMutAct_9fa48("27506")) {
    {}
  } else {
    stryCov_9fa48("27506");
    if (stryMutAct_9fa48("27509") ? !data.hook && !data.method : stryMutAct_9fa48("27508") ? false : stryMutAct_9fa48("27507") ? true : (stryCov_9fa48("27507", "27508", "27509"), (stryMutAct_9fa48("27510") ? data.hook : (stryCov_9fa48("27510"), !data.hook)) || (stryMutAct_9fa48("27511") ? data.method : (stryCov_9fa48("27511"), !data.method)))) {
      if (stryMutAct_9fa48("27512")) {
        {}
      } else {
        stryCov_9fa48("27512");
        winston.warn(stryMutAct_9fa48("27513") ? `` : (stryCov_9fa48("27513"), `[plugins/${id}] registerHook called with invalid data.hook/method`), data);
        return;
      }
    }

    // `hasOwnProperty` needed for hooks with no alternative (set to null)
    if (stryMutAct_9fa48("27515") ? false : stryMutAct_9fa48("27514") ? true : (stryCov_9fa48("27514", "27515"), Hooks._deprecated.has(data.hook))) {
      if (stryMutAct_9fa48("27516")) {
        {}
      } else {
        stryCov_9fa48("27516");
        const deprecation = Hooks._deprecated.get(data.hook);
        if (stryMutAct_9fa48("27519") ? false : stryMutAct_9fa48("27518") ? true : stryMutAct_9fa48("27517") ? deprecation.hasOwnProperty('affected') : (stryCov_9fa48("27517", "27518", "27519"), !deprecation.hasOwnProperty(stryMutAct_9fa48("27520") ? "" : (stryCov_9fa48("27520"), 'affected')))) {
          if (stryMutAct_9fa48("27521")) {
            {}
          } else {
            stryCov_9fa48("27521");
            deprecation.affected = new Set();
          }
        }
        deprecation.affected.add(id);
        Hooks._deprecated.set(data.hook, deprecation);
      }
    }
    data.id = id;
    if (stryMutAct_9fa48("27524") ? false : stryMutAct_9fa48("27523") ? true : stryMutAct_9fa48("27522") ? data.priority : (stryCov_9fa48("27522", "27523", "27524"), !data.priority)) {
      if (stryMutAct_9fa48("27525")) {
        {}
      } else {
        stryCov_9fa48("27525");
        data.priority = 10;
      }
    }
    if (stryMutAct_9fa48("27528") ? Array.isArray(data.method) || data.method.every(method => typeof method === 'function' || typeof method === 'string') : stryMutAct_9fa48("27527") ? false : stryMutAct_9fa48("27526") ? true : (stryCov_9fa48("27526", "27527", "27528"), Array.isArray(data.method) && (stryMutAct_9fa48("27529") ? data.method.some(method => typeof method === 'function' || typeof method === 'string') : (stryCov_9fa48("27529"), data.method.every(stryMutAct_9fa48("27530") ? () => undefined : (stryCov_9fa48("27530"), method => stryMutAct_9fa48("27533") ? typeof method === 'function' && typeof method === 'string' : stryMutAct_9fa48("27532") ? false : stryMutAct_9fa48("27531") ? true : (stryCov_9fa48("27531", "27532", "27533"), (stryMutAct_9fa48("27535") ? typeof method !== 'function' : stryMutAct_9fa48("27534") ? false : (stryCov_9fa48("27534", "27535"), typeof method === (stryMutAct_9fa48("27536") ? "" : (stryCov_9fa48("27536"), 'function')))) || (stryMutAct_9fa48("27538") ? typeof method !== 'string' : stryMutAct_9fa48("27537") ? false : (stryCov_9fa48("27537", "27538"), typeof method === (stryMutAct_9fa48("27539") ? "" : (stryCov_9fa48("27539"), 'string'))))))))))) {
      if (stryMutAct_9fa48("27540")) {
        {}
      } else {
        stryCov_9fa48("27540");
        // Go go gadget recursion!
        data.method.forEach(method => {
          if (stryMutAct_9fa48("27541")) {
            {}
          } else {
            stryCov_9fa48("27541");
            const singularData = stryMutAct_9fa48("27542") ? {} : (stryCov_9fa48("27542"), {
              ...data,
              method: method
            });
            Hooks.register(id, singularData);
          }
        });
      }
    } else if (stryMutAct_9fa48("27545") ? typeof data.method === 'string' || data.method.length > 0 : stryMutAct_9fa48("27544") ? false : stryMutAct_9fa48("27543") ? true : (stryCov_9fa48("27543", "27544", "27545"), (stryMutAct_9fa48("27547") ? typeof data.method !== 'string' : stryMutAct_9fa48("27546") ? true : (stryCov_9fa48("27546", "27547"), typeof data.method === (stryMutAct_9fa48("27548") ? "" : (stryCov_9fa48("27548"), 'string')))) && (stryMutAct_9fa48("27551") ? data.method.length <= 0 : stryMutAct_9fa48("27550") ? data.method.length >= 0 : stryMutAct_9fa48("27549") ? true : (stryCov_9fa48("27549", "27550", "27551"), data.method.length > 0)))) {
      if (stryMutAct_9fa48("27552")) {
        {}
      } else {
        stryCov_9fa48("27552");
        const method = data.method.split(stryMutAct_9fa48("27553") ? "" : (stryCov_9fa48("27553"), '.')).reduce((memo, prop) => {
          if (stryMutAct_9fa48("27554")) {
            {}
          } else {
            stryCov_9fa48("27554");
            if (stryMutAct_9fa48("27557") ? memo || memo[prop] : stryMutAct_9fa48("27556") ? false : stryMutAct_9fa48("27555") ? true : (stryCov_9fa48("27555", "27556", "27557"), memo && memo[prop])) {
              if (stryMutAct_9fa48("27558")) {
                {}
              } else {
                stryCov_9fa48("27558");
                return memo[prop];
              }
            }
            // Couldn't find method by path, aborting
            return null;
          }
        }, plugins.libraries[data.id]);

        // Write the actual method reference to the hookObj
        data.method = method;
        Hooks.internals._register(data);
      }
    } else if (stryMutAct_9fa48("27561") ? typeof data.method !== 'function' : stryMutAct_9fa48("27560") ? false : stryMutAct_9fa48("27559") ? true : (stryCov_9fa48("27559", "27560", "27561"), typeof data.method === (stryMutAct_9fa48("27562") ? "" : (stryCov_9fa48("27562"), 'function')))) {
      if (stryMutAct_9fa48("27563")) {
        {}
      } else {
        stryCov_9fa48("27563");
        Hooks.internals._register(data);
      }
    } else {
      if (stryMutAct_9fa48("27564")) {
        {}
      } else {
        stryCov_9fa48("27564");
        winston.warn(stryMutAct_9fa48("27565") ? `` : (stryCov_9fa48("27565"), `[plugins/${id}] Hook method mismatch: ${data.hook} => ${data.method}`));
      }
    }
  }
};
Hooks.unregister = function (id, hook, method) {
  if (stryMutAct_9fa48("27566")) {
    {}
  } else {
    stryCov_9fa48("27566");
    const hooks = stryMutAct_9fa48("27569") ? plugins.loadedHooks[hook] && [] : stryMutAct_9fa48("27568") ? false : stryMutAct_9fa48("27567") ? true : (stryCov_9fa48("27567", "27568", "27569"), plugins.loadedHooks[hook] || (stryMutAct_9fa48("27570") ? ["Stryker was here"] : (stryCov_9fa48("27570"), [])));
    plugins.loadedHooks[hook] = stryMutAct_9fa48("27571") ? hooks : (stryCov_9fa48("27571"), hooks.filter(stryMutAct_9fa48("27572") ? () => undefined : (stryCov_9fa48("27572"), hookData => stryMutAct_9fa48("27575") ? hookData && hookData.id !== id || hookData.method !== method : stryMutAct_9fa48("27574") ? false : stryMutAct_9fa48("27573") ? true : (stryCov_9fa48("27573", "27574", "27575"), (stryMutAct_9fa48("27577") ? hookData || hookData.id !== id : stryMutAct_9fa48("27576") ? true : (stryCov_9fa48("27576", "27577"), hookData && (stryMutAct_9fa48("27579") ? hookData.id === id : stryMutAct_9fa48("27578") ? true : (stryCov_9fa48("27578", "27579"), hookData.id !== id)))) && (stryMutAct_9fa48("27581") ? hookData.method === method : stryMutAct_9fa48("27580") ? true : (stryCov_9fa48("27580", "27581"), hookData.method !== method))))));
  }
};
Hooks.fire = async function (hook, params) {
  if (stryMutAct_9fa48("27582")) {
    {}
  } else {
    stryCov_9fa48("27582");
    const hookList = plugins.loadedHooks[hook];
    const hookType = hook.split(stryMutAct_9fa48("27583") ? "" : (stryCov_9fa48("27583"), ':'))[0];
    if (stryMutAct_9fa48("27586") ? global.env === 'development' && hook !== 'action:plugins.firehook' || hook !== 'filter:plugins.firehook' : stryMutAct_9fa48("27585") ? false : stryMutAct_9fa48("27584") ? true : (stryCov_9fa48("27584", "27585", "27586"), (stryMutAct_9fa48("27588") ? global.env === 'development' || hook !== 'action:plugins.firehook' : stryMutAct_9fa48("27587") ? true : (stryCov_9fa48("27587", "27588"), (stryMutAct_9fa48("27590") ? global.env !== 'development' : stryMutAct_9fa48("27589") ? true : (stryCov_9fa48("27589", "27590"), global.env === (stryMutAct_9fa48("27591") ? "" : (stryCov_9fa48("27591"), 'development')))) && (stryMutAct_9fa48("27593") ? hook === 'action:plugins.firehook' : stryMutAct_9fa48("27592") ? true : (stryCov_9fa48("27592", "27593"), hook !== (stryMutAct_9fa48("27594") ? "" : (stryCov_9fa48("27594"), 'action:plugins.firehook')))))) && (stryMutAct_9fa48("27596") ? hook === 'filter:plugins.firehook' : stryMutAct_9fa48("27595") ? true : (stryCov_9fa48("27595", "27596"), hook !== (stryMutAct_9fa48("27597") ? "" : (stryCov_9fa48("27597"), 'filter:plugins.firehook')))))) {
      if (stryMutAct_9fa48("27598")) {
        {}
      } else {
        stryCov_9fa48("27598");
        winston.verbose(stryMutAct_9fa48("27599") ? `` : (stryCov_9fa48("27599"), `[plugins/fireHook] ${hook}`));
      }
    }
    if (stryMutAct_9fa48("27602") ? false : stryMutAct_9fa48("27601") ? true : stryMutAct_9fa48("27600") ? hookTypeToMethod[hookType] : (stryCov_9fa48("27600", "27601", "27602"), !hookTypeToMethod[hookType])) {
      if (stryMutAct_9fa48("27603")) {
        {}
      } else {
        stryCov_9fa48("27603");
        winston.warn(stryMutAct_9fa48("27604") ? `` : (stryCov_9fa48("27604"), `[plugins] Unknown hookType: ${hookType}, hook : ${hook}`));
        return;
      }
    }
    let deleteCaller = stryMutAct_9fa48("27605") ? true : (stryCov_9fa48("27605"), false);
    if (stryMutAct_9fa48("27608") ? params && typeof params === 'object' && !Array.isArray(params) || !params.hasOwnProperty('caller') : stryMutAct_9fa48("27607") ? false : stryMutAct_9fa48("27606") ? true : (stryCov_9fa48("27606", "27607", "27608"), (stryMutAct_9fa48("27610") ? params && typeof params === 'object' || !Array.isArray(params) : stryMutAct_9fa48("27609") ? true : (stryCov_9fa48("27609", "27610"), (stryMutAct_9fa48("27612") ? params || typeof params === 'object' : stryMutAct_9fa48("27611") ? true : (stryCov_9fa48("27611", "27612"), params && (stryMutAct_9fa48("27614") ? typeof params !== 'object' : stryMutAct_9fa48("27613") ? true : (stryCov_9fa48("27613", "27614"), typeof params === (stryMutAct_9fa48("27615") ? "" : (stryCov_9fa48("27615"), 'object')))))) && (stryMutAct_9fa48("27616") ? Array.isArray(params) : (stryCov_9fa48("27616"), !Array.isArray(params))))) && (stryMutAct_9fa48("27617") ? params.hasOwnProperty('caller') : (stryCov_9fa48("27617"), !params.hasOwnProperty(stryMutAct_9fa48("27618") ? "" : (stryCov_9fa48("27618"), 'caller')))))) {
      if (stryMutAct_9fa48("27619")) {
        {}
      } else {
        stryCov_9fa48("27619");
        const als = require('../als');
        params.caller = als.getStore();
        deleteCaller = stryMutAct_9fa48("27620") ? false : (stryCov_9fa48("27620"), true);
      }
    }
    const result = await hookTypeToMethod[hookType](hook, hookList, params);
    if (stryMutAct_9fa48("27623") ? hook !== 'action:plugins.firehook' || hook !== 'filter:plugins.firehook' : stryMutAct_9fa48("27622") ? false : stryMutAct_9fa48("27621") ? true : (stryCov_9fa48("27621", "27622", "27623"), (stryMutAct_9fa48("27625") ? hook === 'action:plugins.firehook' : stryMutAct_9fa48("27624") ? true : (stryCov_9fa48("27624", "27625"), hook !== (stryMutAct_9fa48("27626") ? "" : (stryCov_9fa48("27626"), 'action:plugins.firehook')))) && (stryMutAct_9fa48("27628") ? hook === 'filter:plugins.firehook' : stryMutAct_9fa48("27627") ? true : (stryCov_9fa48("27627", "27628"), hook !== (stryMutAct_9fa48("27629") ? "" : (stryCov_9fa48("27629"), 'filter:plugins.firehook')))))) {
      if (stryMutAct_9fa48("27630")) {
        {}
      } else {
        stryCov_9fa48("27630");
        const payload = await Hooks.fire(stryMutAct_9fa48("27631") ? "" : (stryCov_9fa48("27631"), 'filter:plugins.firehook'), stryMutAct_9fa48("27632") ? {} : (stryCov_9fa48("27632"), {
          hook: hook,
          params: stryMutAct_9fa48("27635") ? result && params : stryMutAct_9fa48("27634") ? false : stryMutAct_9fa48("27633") ? true : (stryCov_9fa48("27633", "27634", "27635"), result || params)
        }));
        Hooks.fire(stryMutAct_9fa48("27636") ? "" : (stryCov_9fa48("27636"), 'action:plugins.firehook'), payload);
      }
    }
    if (stryMutAct_9fa48("27639") ? result === undefined : stryMutAct_9fa48("27638") ? false : stryMutAct_9fa48("27637") ? true : (stryCov_9fa48("27637", "27638", "27639"), result !== undefined)) {
      if (stryMutAct_9fa48("27640")) {
        {}
      } else {
        stryCov_9fa48("27640");
        if (stryMutAct_9fa48("27643") ? deleteCaller && result || result.hasOwnProperty('caller') : stryMutAct_9fa48("27642") ? false : stryMutAct_9fa48("27641") ? true : (stryCov_9fa48("27641", "27642", "27643"), (stryMutAct_9fa48("27645") ? deleteCaller || result : stryMutAct_9fa48("27644") ? true : (stryCov_9fa48("27644", "27645"), deleteCaller && result)) && result.hasOwnProperty(stryMutAct_9fa48("27646") ? "" : (stryCov_9fa48("27646"), 'caller')))) {
          if (stryMutAct_9fa48("27647")) {
            {}
          } else {
            stryCov_9fa48("27647");
            delete result.caller;
          }
        }
        return result;
      }
    }
  }
};
Hooks.hasListeners = function (hook) {
  if (stryMutAct_9fa48("27648")) {
    {}
  } else {
    stryCov_9fa48("27648");
    return stryMutAct_9fa48("27649") ? !(plugins.loadedHooks[hook] && plugins.loadedHooks[hook].length > 0) : (stryCov_9fa48("27649"), !(stryMutAct_9fa48("27650") ? plugins.loadedHooks[hook] && plugins.loadedHooks[hook].length > 0 : (stryCov_9fa48("27650"), !(stryMutAct_9fa48("27653") ? plugins.loadedHooks[hook] || plugins.loadedHooks[hook].length > 0 : stryMutAct_9fa48("27652") ? false : stryMutAct_9fa48("27651") ? true : (stryCov_9fa48("27651", "27652", "27653"), plugins.loadedHooks[hook] && (stryMutAct_9fa48("27656") ? plugins.loadedHooks[hook].length <= 0 : stryMutAct_9fa48("27655") ? plugins.loadedHooks[hook].length >= 0 : stryMutAct_9fa48("27654") ? true : (stryCov_9fa48("27654", "27655", "27656"), plugins.loadedHooks[hook].length > 0)))))));
  }
};
async function fireFilterHook(hook, hookList, params) {
  if (stryMutAct_9fa48("27657")) {
    {}
  } else {
    stryCov_9fa48("27657");
    if (stryMutAct_9fa48("27660") ? !Array.isArray(hookList) && !hookList.length : stryMutAct_9fa48("27659") ? false : stryMutAct_9fa48("27658") ? true : (stryCov_9fa48("27658", "27659", "27660"), (stryMutAct_9fa48("27661") ? Array.isArray(hookList) : (stryCov_9fa48("27661"), !Array.isArray(hookList))) || (stryMutAct_9fa48("27662") ? hookList.length : (stryCov_9fa48("27662"), !hookList.length)))) {
      if (stryMutAct_9fa48("27663")) {
        {}
      } else {
        stryCov_9fa48("27663");
        return params;
      }
    }
    async function fireMethod(hookObj, params) {
      if (stryMutAct_9fa48("27664")) {
        {}
      } else {
        stryCov_9fa48("27664");
        if (stryMutAct_9fa48("27667") ? typeof hookObj.method === 'function' : stryMutAct_9fa48("27666") ? false : stryMutAct_9fa48("27665") ? true : (stryCov_9fa48("27665", "27666", "27667"), typeof hookObj.method !== (stryMutAct_9fa48("27668") ? "" : (stryCov_9fa48("27668"), 'function')))) {
          if (stryMutAct_9fa48("27669")) {
            {}
          } else {
            stryCov_9fa48("27669");
            if (stryMutAct_9fa48("27672") ? global.env !== 'development' : stryMutAct_9fa48("27671") ? false : stryMutAct_9fa48("27670") ? true : (stryCov_9fa48("27670", "27671", "27672"), global.env === (stryMutAct_9fa48("27673") ? "" : (stryCov_9fa48("27673"), 'development')))) {
              if (stryMutAct_9fa48("27674")) {
                {}
              } else {
                stryCov_9fa48("27674");
                winston.warn(stryMutAct_9fa48("27675") ? `` : (stryCov_9fa48("27675"), `[plugins] Expected method for hook '${hook}' in plugin '${hookObj.id}' not found, skipping.`));
              }
            }
            return params;
          }
        }
        if (stryMutAct_9fa48("27678") ? hookObj.method.constructor || hookObj.method.constructor.name === 'AsyncFunction' : stryMutAct_9fa48("27677") ? false : stryMutAct_9fa48("27676") ? true : (stryCov_9fa48("27676", "27677", "27678"), hookObj.method.constructor && (stryMutAct_9fa48("27680") ? hookObj.method.constructor.name !== 'AsyncFunction' : stryMutAct_9fa48("27679") ? true : (stryCov_9fa48("27679", "27680"), hookObj.method.constructor.name === (stryMutAct_9fa48("27681") ? "" : (stryCov_9fa48("27681"), 'AsyncFunction')))))) {
          if (stryMutAct_9fa48("27682")) {
            {}
          } else {
            stryCov_9fa48("27682");
            return await hookObj.method(params);
          }
        }
        return new Promise((resolve, reject) => {
          if (stryMutAct_9fa48("27683")) {
            {}
          } else {
            stryCov_9fa48("27683");
            let resolved = stryMutAct_9fa48("27684") ? true : (stryCov_9fa48("27684"), false);
            function _resolve(result) {
              if (stryMutAct_9fa48("27685")) {
                {}
              } else {
                stryCov_9fa48("27685");
                if (stryMutAct_9fa48("27687") ? false : stryMutAct_9fa48("27686") ? true : (stryCov_9fa48("27686", "27687"), resolved)) {
                  if (stryMutAct_9fa48("27688")) {
                    {}
                  } else {
                    stryCov_9fa48("27688");
                    winston.warn(stryMutAct_9fa48("27689") ? `` : (stryCov_9fa48("27689"), `[plugins] ${hook} already resolved in plugin ${hookObj.id}`));
                    return;
                  }
                }
                resolved = stryMutAct_9fa48("27690") ? false : (stryCov_9fa48("27690"), true);
                resolve(result);
              }
            }
            const returned = hookObj.method(params, (err, result) => {
              if (stryMutAct_9fa48("27691")) {
                {}
              } else {
                stryCov_9fa48("27691");
                if (stryMutAct_9fa48("27693") ? false : stryMutAct_9fa48("27692") ? true : (stryCov_9fa48("27692", "27693"), err)) reject(err);else _resolve(result);
              }
            });
            if (stryMutAct_9fa48("27695") ? false : stryMutAct_9fa48("27694") ? true : (stryCov_9fa48("27694", "27695"), utils.isPromise(returned))) {
              if (stryMutAct_9fa48("27696")) {
                {}
              } else {
                stryCov_9fa48("27696");
                returned.then(stryMutAct_9fa48("27697") ? () => undefined : (stryCov_9fa48("27697"), payload => _resolve(payload)), stryMutAct_9fa48("27698") ? () => undefined : (stryCov_9fa48("27698"), err => reject(err)));
                return;
              }
            }
            if (stryMutAct_9fa48("27700") ? false : stryMutAct_9fa48("27699") ? true : (stryCov_9fa48("27699", "27700"), returned)) {
              if (stryMutAct_9fa48("27701")) {
                {}
              } else {
                stryCov_9fa48("27701");
                _resolve(returned);
              }
            }
          }
        });
      }
    }
    for (const hookObj of hookList) {
      if (stryMutAct_9fa48("27702")) {
        {}
      } else {
        stryCov_9fa48("27702");
        // eslint-disable-next-line
        params = await fireMethod(hookObj, params);
      }
    }
    return params;
  }
}
async function fireActionHook(hook, hookList, params) {
  if (stryMutAct_9fa48("27703")) {
    {}
  } else {
    stryCov_9fa48("27703");
    if (stryMutAct_9fa48("27706") ? !Array.isArray(hookList) && !hookList.length : stryMutAct_9fa48("27705") ? false : stryMutAct_9fa48("27704") ? true : (stryCov_9fa48("27704", "27705", "27706"), (stryMutAct_9fa48("27707") ? Array.isArray(hookList) : (stryCov_9fa48("27707"), !Array.isArray(hookList))) || (stryMutAct_9fa48("27708") ? hookList.length : (stryCov_9fa48("27708"), !hookList.length)))) {
      if (stryMutAct_9fa48("27709")) {
        {}
      } else {
        stryCov_9fa48("27709");
        return;
      }
    }
    for (const hookObj of hookList) {
      if (stryMutAct_9fa48("27710")) {
        {}
      } else {
        stryCov_9fa48("27710");
        if (stryMutAct_9fa48("27713") ? typeof hookObj.method === 'function' : stryMutAct_9fa48("27712") ? false : stryMutAct_9fa48("27711") ? true : (stryCov_9fa48("27711", "27712", "27713"), typeof hookObj.method !== (stryMutAct_9fa48("27714") ? "" : (stryCov_9fa48("27714"), 'function')))) {
          if (stryMutAct_9fa48("27715")) {
            {}
          } else {
            stryCov_9fa48("27715");
            if (stryMutAct_9fa48("27718") ? global.env !== 'development' : stryMutAct_9fa48("27717") ? false : stryMutAct_9fa48("27716") ? true : (stryCov_9fa48("27716", "27717", "27718"), global.env === (stryMutAct_9fa48("27719") ? "" : (stryCov_9fa48("27719"), 'development')))) {
              if (stryMutAct_9fa48("27720")) {
                {}
              } else {
                stryCov_9fa48("27720");
                winston.warn(stryMutAct_9fa48("27721") ? `` : (stryCov_9fa48("27721"), `[plugins] Expected method for hook '${hook}' in plugin '${hookObj.id}' not found, skipping.`));
              }
            }
          }
        } else {
          if (stryMutAct_9fa48("27722")) {
            {}
          } else {
            stryCov_9fa48("27722");
            // eslint-disable-next-line
            await hookObj.method(params);
          }
        }
      }
    }
  }
}
async function fireStaticHook(hook, hookList, params) {
  if (stryMutAct_9fa48("27723")) {
    {}
  } else {
    stryCov_9fa48("27723");
    if (stryMutAct_9fa48("27726") ? !Array.isArray(hookList) && !hookList.length : stryMutAct_9fa48("27725") ? false : stryMutAct_9fa48("27724") ? true : (stryCov_9fa48("27724", "27725", "27726"), (stryMutAct_9fa48("27727") ? Array.isArray(hookList) : (stryCov_9fa48("27727"), !Array.isArray(hookList))) || (stryMutAct_9fa48("27728") ? hookList.length : (stryCov_9fa48("27728"), !hookList.length)))) {
      if (stryMutAct_9fa48("27729")) {
        {}
      } else {
        stryCov_9fa48("27729");
        return;
      }
    }
    // don't bubble errors from these hooks, so bad plugins don't stop startup
    const noErrorHooks = stryMutAct_9fa48("27730") ? [] : (stryCov_9fa48("27730"), [stryMutAct_9fa48("27731") ? "" : (stryCov_9fa48("27731"), 'static:app.load'), stryMutAct_9fa48("27732") ? "" : (stryCov_9fa48("27732"), 'static:assets.prepare'), stryMutAct_9fa48("27733") ? "" : (stryCov_9fa48("27733"), 'static:app.preload')]);
    for (const hookObj of hookList) {
      if (stryMutAct_9fa48("27734")) {
        {}
      } else {
        stryCov_9fa48("27734");
        if (stryMutAct_9fa48("27737") ? typeof hookObj.method === 'function' : stryMutAct_9fa48("27736") ? false : stryMutAct_9fa48("27735") ? true : (stryCov_9fa48("27735", "27736", "27737"), typeof hookObj.method !== (stryMutAct_9fa48("27738") ? "" : (stryCov_9fa48("27738"), 'function')))) {
          if (stryMutAct_9fa48("27739")) {
            {}
          } else {
            stryCov_9fa48("27739");
            if (stryMutAct_9fa48("27742") ? global.env !== 'development' : stryMutAct_9fa48("27741") ? false : stryMutAct_9fa48("27740") ? true : (stryCov_9fa48("27740", "27741", "27742"), global.env === (stryMutAct_9fa48("27743") ? "" : (stryCov_9fa48("27743"), 'development')))) {
              if (stryMutAct_9fa48("27744")) {
                {}
              } else {
                stryCov_9fa48("27744");
                winston.warn(stryMutAct_9fa48("27745") ? `` : (stryCov_9fa48("27745"), `[plugins] Expected method for hook '${hook}' in plugin '${hookObj.id}' not found, skipping.`));
              }
            }
          }
        } else {
          if (stryMutAct_9fa48("27746")) {
            {}
          } else {
            stryCov_9fa48("27746");
            let hookFn = hookObj.method;
            if (stryMutAct_9fa48("27749") ? hookFn.constructor || hookFn.constructor.name !== 'AsyncFunction' : stryMutAct_9fa48("27748") ? false : stryMutAct_9fa48("27747") ? true : (stryCov_9fa48("27747", "27748", "27749"), hookFn.constructor && (stryMutAct_9fa48("27751") ? hookFn.constructor.name === 'AsyncFunction' : stryMutAct_9fa48("27750") ? true : (stryCov_9fa48("27750", "27751"), hookFn.constructor.name !== (stryMutAct_9fa48("27752") ? "" : (stryCov_9fa48("27752"), 'AsyncFunction')))))) {
              if (stryMutAct_9fa48("27753")) {
                {}
              } else {
                stryCov_9fa48("27753");
                hookFn = util.promisify(hookFn);
              }
            }
            try {
              if (stryMutAct_9fa48("27754")) {
                {}
              } else {
                stryCov_9fa48("27754");
                // eslint-disable-next-line
                await timeout(hookFn(params), 5000, stryMutAct_9fa48("27755") ? "" : (stryCov_9fa48("27755"), 'timeout'));
              }
            } catch (err) {
              if (stryMutAct_9fa48("27756")) {
                {}
              } else {
                stryCov_9fa48("27756");
                if (stryMutAct_9fa48("27759") ? err || err.message === 'timeout' : stryMutAct_9fa48("27758") ? false : stryMutAct_9fa48("27757") ? true : (stryCov_9fa48("27757", "27758", "27759"), err && (stryMutAct_9fa48("27761") ? err.message !== 'timeout' : stryMutAct_9fa48("27760") ? true : (stryCov_9fa48("27760", "27761"), err.message === (stryMutAct_9fa48("27762") ? "" : (stryCov_9fa48("27762"), 'timeout')))))) {
                  if (stryMutAct_9fa48("27763")) {
                    {}
                  } else {
                    stryCov_9fa48("27763");
                    winston.warn(stryMutAct_9fa48("27764") ? `` : (stryCov_9fa48("27764"), `[plugins] Callback timed out, hook '${hook}' in plugin '${hookObj.id}'`));
                  }
                } else {
                  if (stryMutAct_9fa48("27765")) {
                    {}
                  } else {
                    stryCov_9fa48("27765");
                    winston.error(stryMutAct_9fa48("27766") ? `` : (stryCov_9fa48("27766"), `[plugins] Error executing '${hook}' in plugin '${hookObj.id}'\n${err.stack}`));
                    if (stryMutAct_9fa48("27769") ? false : stryMutAct_9fa48("27768") ? true : stryMutAct_9fa48("27767") ? noErrorHooks.includes(hook) : (stryCov_9fa48("27767", "27768", "27769"), !noErrorHooks.includes(hook))) {
                      if (stryMutAct_9fa48("27770")) {
                        {}
                      } else {
                        stryCov_9fa48("27770");
                        throw err;
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
  }
}

// https://advancedweb.hu/how-to-add-timeout-to-a-promise-in-javascript/
const timeout = (prom, time, error) => {
  if (stryMutAct_9fa48("27771")) {
    {}
  } else {
    stryCov_9fa48("27771");
    let timer;
    return Promise.race(stryMutAct_9fa48("27772") ? [] : (stryCov_9fa48("27772"), [prom, new Promise((resolve, reject) => {
      if (stryMutAct_9fa48("27773")) {
        {}
      } else {
        stryCov_9fa48("27773");
        timer = setTimeout(reject, time, new Error(error));
      }
    })])).finally(stryMutAct_9fa48("27774") ? () => undefined : (stryCov_9fa48("27774"), () => clearTimeout(timer)));
  }
};
async function fireResponseHook(hook, hookList, params) {
  if (stryMutAct_9fa48("27775")) {
    {}
  } else {
    stryCov_9fa48("27775");
    if (stryMutAct_9fa48("27778") ? !Array.isArray(hookList) && !hookList.length : stryMutAct_9fa48("27777") ? false : stryMutAct_9fa48("27776") ? true : (stryCov_9fa48("27776", "27777", "27778"), (stryMutAct_9fa48("27779") ? Array.isArray(hookList) : (stryCov_9fa48("27779"), !Array.isArray(hookList))) || (stryMutAct_9fa48("27780") ? hookList.length : (stryCov_9fa48("27780"), !hookList.length)))) {
      if (stryMutAct_9fa48("27781")) {
        {}
      } else {
        stryCov_9fa48("27781");
        return;
      }
    }
    for (const hookObj of hookList) {
      if (stryMutAct_9fa48("27782")) {
        {}
      } else {
        stryCov_9fa48("27782");
        if (stryMutAct_9fa48("27785") ? typeof hookObj.method === 'function' : stryMutAct_9fa48("27784") ? false : stryMutAct_9fa48("27783") ? true : (stryCov_9fa48("27783", "27784", "27785"), typeof hookObj.method !== (stryMutAct_9fa48("27786") ? "" : (stryCov_9fa48("27786"), 'function')))) {
          if (stryMutAct_9fa48("27787")) {
            {}
          } else {
            stryCov_9fa48("27787");
            if (stryMutAct_9fa48("27790") ? global.env !== 'development' : stryMutAct_9fa48("27789") ? false : stryMutAct_9fa48("27788") ? true : (stryCov_9fa48("27788", "27789", "27790"), global.env === (stryMutAct_9fa48("27791") ? "" : (stryCov_9fa48("27791"), 'development')))) {
              if (stryMutAct_9fa48("27792")) {
                {}
              } else {
                stryCov_9fa48("27792");
                winston.warn(stryMutAct_9fa48("27793") ? `` : (stryCov_9fa48("27793"), `[plugins] Expected method for hook '${hook}' in plugin '${hookObj.id}' not found, skipping.`));
              }
            }
          }
        } else {
          if (stryMutAct_9fa48("27794")) {
            {}
          } else {
            stryCov_9fa48("27794");
            // Skip remaining hooks if headers have been sent
            if (stryMutAct_9fa48("27796") ? false : stryMutAct_9fa48("27795") ? true : (stryCov_9fa48("27795", "27796"), params.res.headersSent)) {
              if (stryMutAct_9fa48("27797")) {
                {}
              } else {
                stryCov_9fa48("27797");
                return;
              }
            }
            // eslint-disable-next-line
            await hookObj.method(params);
          }
        }
      }
    }
  }
}