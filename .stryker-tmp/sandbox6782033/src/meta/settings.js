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
const db = require('../database');
const plugins = require('../plugins');
const Meta = require('./index');
const pubsub = require('../pubsub');
const cache = require('../cache');
const Settings = module.exports;
Settings.get = async function (hash) {
  if (stryMutAct_9fa48("24510")) {
    {}
  } else {
    stryCov_9fa48("24510");
    const cached = cache.get(stryMutAct_9fa48("24511") ? `` : (stryCov_9fa48("24511"), `settings:${hash}`));
    if (stryMutAct_9fa48("24513") ? false : stryMutAct_9fa48("24512") ? true : (stryCov_9fa48("24512", "24513"), cached)) {
      if (stryMutAct_9fa48("24514")) {
        {}
      } else {
        stryCov_9fa48("24514");
        return _.cloneDeep(cached);
      }
    }
    const [data, sortedLists] = await Promise.all(stryMutAct_9fa48("24515") ? [] : (stryCov_9fa48("24515"), [db.getObject(stryMutAct_9fa48("24516") ? `` : (stryCov_9fa48("24516"), `settings:${hash}`)), db.getSetMembers(stryMutAct_9fa48("24517") ? `` : (stryCov_9fa48("24517"), `settings:${hash}:sorted-lists`))]));
    const values = stryMutAct_9fa48("24520") ? data && {} : stryMutAct_9fa48("24519") ? false : stryMutAct_9fa48("24518") ? true : (stryCov_9fa48("24518", "24519", "24520"), data || {});
    await Promise.all(sortedLists.map(async list => {
      if (stryMutAct_9fa48("24521")) {
        {}
      } else {
        stryCov_9fa48("24521");
        const members = await db.getSortedSetRange(stryMutAct_9fa48("24522") ? `` : (stryCov_9fa48("24522"), `settings:${hash}:sorted-list:${list}`), 0, stryMutAct_9fa48("24523") ? +1 : (stryCov_9fa48("24523"), -1));
        const keys = members.map(stryMutAct_9fa48("24524") ? () => undefined : (stryCov_9fa48("24524"), order => stryMutAct_9fa48("24525") ? `` : (stryCov_9fa48("24525"), `settings:${hash}:sorted-list:${list}:${order}`)));
        values[list] = stryMutAct_9fa48("24526") ? ["Stryker was here"] : (stryCov_9fa48("24526"), []);
        const objects = await db.getObjects(keys);
        objects.forEach(obj => {
          if (stryMutAct_9fa48("24527")) {
            {}
          } else {
            stryCov_9fa48("24527");
            values[list].push(obj);
          }
        });
      }
    }));
    const result = await plugins.hooks.fire(stryMutAct_9fa48("24528") ? "" : (stryCov_9fa48("24528"), 'filter:settings.get'), stryMutAct_9fa48("24529") ? {} : (stryCov_9fa48("24529"), {
      plugin: hash,
      values: values
    }));
    cache.set(stryMutAct_9fa48("24530") ? `` : (stryCov_9fa48("24530"), `settings:${hash}`), result.values);
    return _.cloneDeep(result.values);
  }
};
Settings.getOne = async function (hash, field) {
  if (stryMutAct_9fa48("24531")) {
    {}
  } else {
    stryCov_9fa48("24531");
    const data = await Settings.get(hash);
    return (stryMutAct_9fa48("24534") ? data[field] === undefined : stryMutAct_9fa48("24533") ? false : stryMutAct_9fa48("24532") ? true : (stryCov_9fa48("24532", "24533", "24534"), data[field] !== undefined)) ? data[field] : null;
  }
};
Settings.set = async function (hash, values, quiet) {
  if (stryMutAct_9fa48("24535")) {
    {}
  } else {
    stryCov_9fa48("24535");
    quiet = stryMutAct_9fa48("24538") ? quiet && false : stryMutAct_9fa48("24537") ? false : stryMutAct_9fa48("24536") ? true : (stryCov_9fa48("24536", "24537", "24538"), quiet || (stryMutAct_9fa48("24539") ? true : (stryCov_9fa48("24539"), false)));
    ({
      plugin: hash,
      settings: values,
      quiet
    } = await plugins.hooks.fire(stryMutAct_9fa48("24540") ? "" : (stryCov_9fa48("24540"), 'filter:settings.set'), stryMutAct_9fa48("24541") ? {} : (stryCov_9fa48("24541"), {
      plugin: hash,
      settings: values,
      quiet
    })));
    const sortedListData = {};
    for (const [key, value] of Object.entries(values)) {
      if (stryMutAct_9fa48("24542")) {
        {}
      } else {
        stryCov_9fa48("24542");
        if (stryMutAct_9fa48("24545") ? Array.isArray(value) || typeof value[0] !== 'string' : stryMutAct_9fa48("24544") ? false : stryMutAct_9fa48("24543") ? true : (stryCov_9fa48("24543", "24544", "24545"), Array.isArray(value) && (stryMutAct_9fa48("24547") ? typeof value[0] === 'string' : stryMutAct_9fa48("24546") ? true : (stryCov_9fa48("24546", "24547"), typeof value[0] !== (stryMutAct_9fa48("24548") ? "" : (stryCov_9fa48("24548"), 'string')))))) {
          if (stryMutAct_9fa48("24549")) {
            {}
          } else {
            stryCov_9fa48("24549");
            sortedListData[key] = value;
            delete values[key];
          }
        }
      }
    }
    const sortedLists = Object.keys(sortedListData);
    if (stryMutAct_9fa48("24551") ? false : stryMutAct_9fa48("24550") ? true : (stryCov_9fa48("24550", "24551"), sortedLists.length)) {
      if (stryMutAct_9fa48("24552")) {
        {}
      } else {
        stryCov_9fa48("24552");
        // Remove provided (but empty) sorted lists from the hash set
        await db.setRemove(stryMutAct_9fa48("24553") ? `` : (stryCov_9fa48("24553"), `settings:${hash}:sorted-lists`), stryMutAct_9fa48("24554") ? sortedLists : (stryCov_9fa48("24554"), sortedLists.filter(stryMutAct_9fa48("24555") ? () => undefined : (stryCov_9fa48("24555"), list => stryMutAct_9fa48("24556") ? sortedListData[list].length : (stryCov_9fa48("24556"), !sortedListData[list].length)))));
        await db.setAdd(stryMutAct_9fa48("24557") ? `` : (stryCov_9fa48("24557"), `settings:${hash}:sorted-lists`), sortedLists);
        await Promise.all(sortedLists.map(async list => {
          if (stryMutAct_9fa48("24558")) {
            {}
          } else {
            stryCov_9fa48("24558");
            const numItems = await db.sortedSetCard(stryMutAct_9fa48("24559") ? `` : (stryCov_9fa48("24559"), `settings:${hash}:sorted-list:${list}`));
            const deleteKeys = stryMutAct_9fa48("24560") ? [] : (stryCov_9fa48("24560"), [stryMutAct_9fa48("24561") ? `` : (stryCov_9fa48("24561"), `settings:${hash}:sorted-list:${list}`)]);
            for (let x = 0; stryMutAct_9fa48("24564") ? x >= numItems : stryMutAct_9fa48("24563") ? x <= numItems : stryMutAct_9fa48("24562") ? false : (stryCov_9fa48("24562", "24563", "24564"), x < numItems); stryMutAct_9fa48("24565") ? x-- : (stryCov_9fa48("24565"), x++)) {
              if (stryMutAct_9fa48("24566")) {
                {}
              } else {
                stryCov_9fa48("24566");
                deleteKeys.push(stryMutAct_9fa48("24567") ? `` : (stryCov_9fa48("24567"), `settings:${hash}:sorted-list:${list}:${x}`));
              }
            }
            await db.deleteAll(deleteKeys);
          }
        }));
        const sortedSetData = stryMutAct_9fa48("24568") ? ["Stryker was here"] : (stryCov_9fa48("24568"), []);
        const objectData = stryMutAct_9fa48("24569") ? ["Stryker was here"] : (stryCov_9fa48("24569"), []);
        sortedLists.forEach(list => {
          if (stryMutAct_9fa48("24570")) {
            {}
          } else {
            stryCov_9fa48("24570");
            const arr = sortedListData[list];
            arr.forEach((data, order) => {
              if (stryMutAct_9fa48("24571")) {
                {}
              } else {
                stryCov_9fa48("24571");
                sortedSetData.push(stryMutAct_9fa48("24572") ? [] : (stryCov_9fa48("24572"), [stryMutAct_9fa48("24573") ? `` : (stryCov_9fa48("24573"), `settings:${hash}:sorted-list:${list}`), order, order]));
                objectData.push(stryMutAct_9fa48("24574") ? [] : (stryCov_9fa48("24574"), [stryMutAct_9fa48("24575") ? `` : (stryCov_9fa48("24575"), `settings:${hash}:sorted-list:${list}:${order}`), data]));
              }
            });
          }
        });
        await Promise.all(stryMutAct_9fa48("24576") ? [] : (stryCov_9fa48("24576"), [db.sortedSetAddBulk(sortedSetData), db.setObjectBulk(objectData)]));
      }
    }
    if (stryMutAct_9fa48("24578") ? false : stryMutAct_9fa48("24577") ? true : (stryCov_9fa48("24577", "24578"), Object.keys(values).length)) {
      if (stryMutAct_9fa48("24579")) {
        {}
      } else {
        stryCov_9fa48("24579");
        await db.setObject(stryMutAct_9fa48("24580") ? `` : (stryCov_9fa48("24580"), `settings:${hash}`), values);
      }
    }
    cache.del(stryMutAct_9fa48("24581") ? `` : (stryCov_9fa48("24581"), `settings:${hash}`));
    plugins.hooks.fire(stryMutAct_9fa48("24582") ? "" : (stryCov_9fa48("24582"), 'action:settings.set'), stryMutAct_9fa48("24583") ? {} : (stryCov_9fa48("24583"), {
      plugin: hash,
      settings: stryMutAct_9fa48("24584") ? {} : (stryCov_9fa48("24584"), {
        ...values,
        ...sortedListData
      }),
      // Add back sorted list data to values hash
      quiet
    }));
    pubsub.publish(stryMutAct_9fa48("24585") ? `` : (stryCov_9fa48("24585"), `action:settings.set.${hash}`), values);
    if (stryMutAct_9fa48("24588") ? !Meta.reloadRequired || !quiet : stryMutAct_9fa48("24587") ? false : stryMutAct_9fa48("24586") ? true : (stryCov_9fa48("24586", "24587", "24588"), (stryMutAct_9fa48("24589") ? Meta.reloadRequired : (stryCov_9fa48("24589"), !Meta.reloadRequired)) && (stryMutAct_9fa48("24590") ? quiet : (stryCov_9fa48("24590"), !quiet)))) {
      if (stryMutAct_9fa48("24591")) {
        {}
      } else {
        stryCov_9fa48("24591");
        Meta.reloadRequired = stryMutAct_9fa48("24592") ? false : (stryCov_9fa48("24592"), true);
      }
    }
  }
};
Settings.setOne = async function (hash, field, value) {
  if (stryMutAct_9fa48("24593")) {
    {}
  } else {
    stryCov_9fa48("24593");
    const data = {};
    data[field] = value;
    await Settings.set(hash, data);
  }
};
Settings.setOnEmpty = async function (hash, values) {
  if (stryMutAct_9fa48("24594")) {
    {}
  } else {
    stryCov_9fa48("24594");
    const settings = stryMutAct_9fa48("24597") ? (await Settings.get(hash)) && {} : stryMutAct_9fa48("24596") ? false : stryMutAct_9fa48("24595") ? true : (stryCov_9fa48("24595", "24596", "24597"), (await Settings.get(hash)) || {});
    const empty = {};
    Object.keys(values).forEach(key => {
      if (stryMutAct_9fa48("24598")) {
        {}
      } else {
        stryCov_9fa48("24598");
        if (stryMutAct_9fa48("24601") ? false : stryMutAct_9fa48("24600") ? true : stryMutAct_9fa48("24599") ? settings.hasOwnProperty(key) : (stryCov_9fa48("24599", "24600", "24601"), !settings.hasOwnProperty(key))) {
          if (stryMutAct_9fa48("24602")) {
            {}
          } else {
            stryCov_9fa48("24602");
            empty[key] = values[key];
          }
        }
      }
    });
    if (stryMutAct_9fa48("24604") ? false : stryMutAct_9fa48("24603") ? true : (stryCov_9fa48("24603", "24604"), Object.keys(empty).length)) {
      if (stryMutAct_9fa48("24605")) {
        {}
      } else {
        stryCov_9fa48("24605");
        await Settings.set(hash, empty);
      }
    }
  }
};