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
const winston = require('winston');
const plugins = require('../plugins');
const db = require('../database');
const pubsub = require('../pubsub');
const admin = module.exports;
let cache = null;
pubsub.on(stryMutAct_9fa48("26453") ? "" : (stryCov_9fa48("26453"), 'admin:navigation:save'), () => {
  if (stryMutAct_9fa48("26454")) {
    {}
  } else {
    stryCov_9fa48("26454");
    cache = null;
  }
});
admin.save = async function (data) {
  if (stryMutAct_9fa48("26455")) {
    {}
  } else {
    stryCov_9fa48("26455");
    const order = Object.keys(data);
    const bulkSet = stryMutAct_9fa48("26456") ? ["Stryker was here"] : (stryCov_9fa48("26456"), []);
    data.forEach((item, index) => {
      if (stryMutAct_9fa48("26457")) {
        {}
      } else {
        stryCov_9fa48("26457");
        item.order = order[index];
        if (stryMutAct_9fa48("26459") ? false : stryMutAct_9fa48("26458") ? true : (stryCov_9fa48("26458", "26459"), item.hasOwnProperty(stryMutAct_9fa48("26460") ? "" : (stryCov_9fa48("26460"), 'groups')))) {
          if (stryMutAct_9fa48("26461")) {
            {}
          } else {
            stryCov_9fa48("26461");
            item.groups = JSON.stringify(item.groups);
          }
        }
        bulkSet.push(stryMutAct_9fa48("26462") ? [] : (stryCov_9fa48("26462"), [stryMutAct_9fa48("26463") ? `` : (stryCov_9fa48("26463"), `navigation:enabled:${item.order}`), item]));
      }
    });
    cache = null;
    pubsub.publish(stryMutAct_9fa48("26464") ? "" : (stryCov_9fa48("26464"), 'admin:navigation:save'));
    const ids = await db.getSortedSetRange(stryMutAct_9fa48("26465") ? "" : (stryCov_9fa48("26465"), 'navigation:enabled'), 0, stryMutAct_9fa48("26466") ? +1 : (stryCov_9fa48("26466"), -1));
    await db.deleteAll(ids.map(stryMutAct_9fa48("26467") ? () => undefined : (stryCov_9fa48("26467"), id => stryMutAct_9fa48("26468") ? `` : (stryCov_9fa48("26468"), `navigation:enabled:${id}`))));
    await db.setObjectBulk(bulkSet);
    await db.delete(stryMutAct_9fa48("26469") ? "" : (stryCov_9fa48("26469"), 'navigation:enabled'));
    await db.sortedSetAdd(stryMutAct_9fa48("26470") ? "" : (stryCov_9fa48("26470"), 'navigation:enabled'), order, order);
  }
};
admin.getAdmin = async function () {
  if (stryMutAct_9fa48("26471")) {
    {}
  } else {
    stryCov_9fa48("26471");
    const [enabled, available] = await Promise.all(stryMutAct_9fa48("26472") ? [] : (stryCov_9fa48("26472"), [admin.get(), getAvailable()]));
    return stryMutAct_9fa48("26473") ? {} : (stryCov_9fa48("26473"), {
      enabled: enabled,
      available: available
    });
  }
};
const fieldsToEscape = stryMutAct_9fa48("26474") ? [] : (stryCov_9fa48("26474"), [stryMutAct_9fa48("26475") ? "" : (stryCov_9fa48("26475"), 'iconClass'), stryMutAct_9fa48("26476") ? "" : (stryCov_9fa48("26476"), 'class'), stryMutAct_9fa48("26477") ? "" : (stryCov_9fa48("26477"), 'route'), stryMutAct_9fa48("26478") ? "" : (stryCov_9fa48("26478"), 'id'), stryMutAct_9fa48("26479") ? "" : (stryCov_9fa48("26479"), 'text'), stryMutAct_9fa48("26480") ? "" : (stryCov_9fa48("26480"), 'textClass'), stryMutAct_9fa48("26481") ? "" : (stryCov_9fa48("26481"), 'title')]);
admin.escapeFields = stryMutAct_9fa48("26482") ? () => undefined : (stryCov_9fa48("26482"), navItems => toggleEscape(navItems, stryMutAct_9fa48("26483") ? false : (stryCov_9fa48("26483"), true)));
admin.unescapeFields = stryMutAct_9fa48("26484") ? () => undefined : (stryCov_9fa48("26484"), navItems => toggleEscape(navItems, stryMutAct_9fa48("26485") ? true : (stryCov_9fa48("26485"), false)));
function toggleEscape(navItems, flag) {
  if (stryMutAct_9fa48("26486")) {
    {}
  } else {
    stryCov_9fa48("26486");
    navItems.forEach(item => {
      if (stryMutAct_9fa48("26487")) {
        {}
      } else {
        stryCov_9fa48("26487");
        if (stryMutAct_9fa48("26489") ? false : stryMutAct_9fa48("26488") ? true : (stryCov_9fa48("26488", "26489"), item)) {
          if (stryMutAct_9fa48("26490")) {
            {}
          } else {
            stryCov_9fa48("26490");
            fieldsToEscape.forEach(field => {
              if (stryMutAct_9fa48("26491")) {
                {}
              } else {
                stryCov_9fa48("26491");
                if (stryMutAct_9fa48("26493") ? false : stryMutAct_9fa48("26492") ? true : (stryCov_9fa48("26492", "26493"), item.hasOwnProperty(field))) {
                  if (stryMutAct_9fa48("26494")) {
                    {}
                  } else {
                    stryCov_9fa48("26494");
                    item[field] = validator[flag ? stryMutAct_9fa48("26495") ? "" : (stryCov_9fa48("26495"), 'escape') : stryMutAct_9fa48("26496") ? "" : (stryCov_9fa48("26496"), 'unescape')](String(item[field]));
                  }
                }
              }
            });
          }
        }
      }
    });
  }
}
admin.get = async function () {
  if (stryMutAct_9fa48("26497")) {
    {}
  } else {
    stryCov_9fa48("26497");
    if (stryMutAct_9fa48("26499") ? false : stryMutAct_9fa48("26498") ? true : (stryCov_9fa48("26498", "26499"), cache)) {
      if (stryMutAct_9fa48("26500")) {
        {}
      } else {
        stryCov_9fa48("26500");
        return cache.map(stryMutAct_9fa48("26501") ? () => undefined : (stryCov_9fa48("26501"), item => stryMutAct_9fa48("26502") ? {} : (stryCov_9fa48("26502"), {
          ...item
        })));
      }
    }
    const ids = await db.getSortedSetRange(stryMutAct_9fa48("26503") ? "" : (stryCov_9fa48("26503"), 'navigation:enabled'), 0, stryMutAct_9fa48("26504") ? +1 : (stryCov_9fa48("26504"), -1));
    const data = await db.getObjects(ids.map(stryMutAct_9fa48("26505") ? () => undefined : (stryCov_9fa48("26505"), id => stryMutAct_9fa48("26506") ? `` : (stryCov_9fa48("26506"), `navigation:enabled:${id}`))));
    cache = data.map(item => {
      if (stryMutAct_9fa48("26507")) {
        {}
      } else {
        stryCov_9fa48("26507");
        if (stryMutAct_9fa48("26509") ? false : stryMutAct_9fa48("26508") ? true : (stryCov_9fa48("26508", "26509"), item.hasOwnProperty(stryMutAct_9fa48("26510") ? "" : (stryCov_9fa48("26510"), 'groups')))) {
          if (stryMutAct_9fa48("26511")) {
            {}
          } else {
            stryCov_9fa48("26511");
            try {
              if (stryMutAct_9fa48("26512")) {
                {}
              } else {
                stryCov_9fa48("26512");
                item.groups = JSON.parse(item.groups);
              }
            } catch (err) {
              if (stryMutAct_9fa48("26513")) {
                {}
              } else {
                stryCov_9fa48("26513");
                winston.error(err.stack);
                item.groups = stryMutAct_9fa48("26514") ? ["Stryker was here"] : (stryCov_9fa48("26514"), []);
              }
            }
          }
        }
        item.groups = stryMutAct_9fa48("26517") ? item.groups && [] : stryMutAct_9fa48("26516") ? false : stryMutAct_9fa48("26515") ? true : (stryCov_9fa48("26515", "26516", "26517"), item.groups || (stryMutAct_9fa48("26518") ? ["Stryker was here"] : (stryCov_9fa48("26518"), [])));
        if (stryMutAct_9fa48("26521") ? item.groups || !Array.isArray(item.groups) : stryMutAct_9fa48("26520") ? false : stryMutAct_9fa48("26519") ? true : (stryCov_9fa48("26519", "26520", "26521"), item.groups && (stryMutAct_9fa48("26522") ? Array.isArray(item.groups) : (stryCov_9fa48("26522"), !Array.isArray(item.groups))))) {
          if (stryMutAct_9fa48("26523")) {
            {}
          } else {
            stryCov_9fa48("26523");
            item.groups = stryMutAct_9fa48("26524") ? [] : (stryCov_9fa48("26524"), [item.groups]);
          }
        }
        return item;
      }
    });
    admin.escapeFields(cache);
    return cache.map(stryMutAct_9fa48("26525") ? () => undefined : (stryCov_9fa48("26525"), item => stryMutAct_9fa48("26526") ? {} : (stryCov_9fa48("26526"), {
      ...item
    })));
  }
};
async function getAvailable() {
  if (stryMutAct_9fa48("26527")) {
    {}
  } else {
    stryCov_9fa48("26527");
    const core = require('../../install/data/navigation.json').map(item => {
      if (stryMutAct_9fa48("26528")) {
        {}
      } else {
        stryCov_9fa48("26528");
        item.core = stryMutAct_9fa48("26529") ? false : (stryCov_9fa48("26529"), true);
        item.id = stryMutAct_9fa48("26532") ? item.id && '' : stryMutAct_9fa48("26531") ? false : stryMutAct_9fa48("26530") ? true : (stryCov_9fa48("26530", "26531", "26532"), item.id || (stryMutAct_9fa48("26533") ? "Stryker was here!" : (stryCov_9fa48("26533"), '')));
        return item;
      }
    });
    const navItems = await plugins.hooks.fire(stryMutAct_9fa48("26534") ? "" : (stryCov_9fa48("26534"), 'filter:navigation.available'), core);
    navItems.forEach(item => {
      if (stryMutAct_9fa48("26535")) {
        {}
      } else {
        stryCov_9fa48("26535");
        if (stryMutAct_9fa48("26538") ? item || !item.hasOwnProperty('enabled') : stryMutAct_9fa48("26537") ? false : stryMutAct_9fa48("26536") ? true : (stryCov_9fa48("26536", "26537", "26538"), item && (stryMutAct_9fa48("26539") ? item.hasOwnProperty('enabled') : (stryCov_9fa48("26539"), !item.hasOwnProperty(stryMutAct_9fa48("26540") ? "" : (stryCov_9fa48("26540"), 'enabled')))))) {
          if (stryMutAct_9fa48("26541")) {
            {}
          } else {
            stryCov_9fa48("26541");
            item.enabled = stryMutAct_9fa48("26542") ? false : (stryCov_9fa48("26542"), true);
          }
        }
      }
    });
    return navItems;
  }
}
require('../promisify')(admin);