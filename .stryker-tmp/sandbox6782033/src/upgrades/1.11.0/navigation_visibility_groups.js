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
module.exports = stryMutAct_9fa48("42596") ? {} : (stryCov_9fa48("42596"), {
  name: stryMutAct_9fa48("42597") ? "" : (stryCov_9fa48("42597"), 'Navigation item visibility groups'),
  timestamp: Date.UTC(2018, 10, 10),
  method: async function () {
    if (stryMutAct_9fa48("42598")) {
      {}
    } else {
      stryCov_9fa48("42598");
      const data = await navigationAdminGet();
      data.forEach(navItem => {
        if (stryMutAct_9fa48("42599")) {
          {}
        } else {
          stryCov_9fa48("42599");
          if (stryMutAct_9fa48("42602") ? navItem || navItem.properties : stryMutAct_9fa48("42601") ? false : stryMutAct_9fa48("42600") ? true : (stryCov_9fa48("42600", "42601", "42602"), navItem && navItem.properties)) {
            if (stryMutAct_9fa48("42603")) {
              {}
            } else {
              stryCov_9fa48("42603");
              navItem.groups = stryMutAct_9fa48("42604") ? ["Stryker was here"] : (stryCov_9fa48("42604"), []);
              if (stryMutAct_9fa48("42606") ? false : stryMutAct_9fa48("42605") ? true : (stryCov_9fa48("42605", "42606"), navItem.properties.adminOnly)) {
                if (stryMutAct_9fa48("42607")) {
                  {}
                } else {
                  stryCov_9fa48("42607");
                  navItem.groups.push(stryMutAct_9fa48("42608") ? "" : (stryCov_9fa48("42608"), 'administrators'));
                }
              } else if (stryMutAct_9fa48("42610") ? false : stryMutAct_9fa48("42609") ? true : (stryCov_9fa48("42609", "42610"), navItem.properties.globalMod)) {
                if (stryMutAct_9fa48("42611")) {
                  {}
                } else {
                  stryCov_9fa48("42611");
                  navItem.groups.push(stryMutAct_9fa48("42612") ? "" : (stryCov_9fa48("42612"), 'Global Moderators'));
                }
              }
              if (stryMutAct_9fa48("42614") ? false : stryMutAct_9fa48("42613") ? true : (stryCov_9fa48("42613", "42614"), navItem.properties.loggedIn)) {
                if (stryMutAct_9fa48("42615")) {
                  {}
                } else {
                  stryCov_9fa48("42615");
                  navItem.groups.push(stryMutAct_9fa48("42616") ? "" : (stryCov_9fa48("42616"), 'registered-users'));
                }
              } else if (stryMutAct_9fa48("42618") ? false : stryMutAct_9fa48("42617") ? true : (stryCov_9fa48("42617", "42618"), navItem.properties.guestOnly)) {
                if (stryMutAct_9fa48("42619")) {
                  {}
                } else {
                  stryCov_9fa48("42619");
                  navItem.groups.push(stryMutAct_9fa48("42620") ? "" : (stryCov_9fa48("42620"), 'guests'));
                }
              }
            }
          }
        }
      });
      await navigationAdminSave(data);
    }
  }
});
// use navigation.get/save as it was in 1.11.0 so upgrade script doesn't crash on latest nbb
// see https://github.com/NodeBB/NodeBB/pull/11013
async function navigationAdminGet() {
  if (stryMutAct_9fa48("42621")) {
    {}
  } else {
    stryCov_9fa48("42621");
    const db = require('../../database');
    const data = await db.getSortedSetRange(stryMutAct_9fa48("42622") ? "" : (stryCov_9fa48("42622"), 'navigation:enabled'), 0, stryMutAct_9fa48("42623") ? +1 : (stryCov_9fa48("42623"), -1));
    return stryMutAct_9fa48("42624") ? data.map(item => {
      item = JSON.parse(item);
      item.groups = item.groups || [];
      if (item.groups && !Array.isArray(item.groups)) {
        item.groups = [item.groups];
      }
      return item;
    }) : (stryCov_9fa48("42624"), data.filter(Boolean).map(item => {
      if (stryMutAct_9fa48("42625")) {
        {}
      } else {
        stryCov_9fa48("42625");
        item = JSON.parse(item);
        item.groups = stryMutAct_9fa48("42628") ? item.groups && [] : stryMutAct_9fa48("42627") ? false : stryMutAct_9fa48("42626") ? true : (stryCov_9fa48("42626", "42627", "42628"), item.groups || (stryMutAct_9fa48("42629") ? ["Stryker was here"] : (stryCov_9fa48("42629"), [])));
        if (stryMutAct_9fa48("42632") ? item.groups || !Array.isArray(item.groups) : stryMutAct_9fa48("42631") ? false : stryMutAct_9fa48("42630") ? true : (stryCov_9fa48("42630", "42631", "42632"), item.groups && (stryMutAct_9fa48("42633") ? Array.isArray(item.groups) : (stryCov_9fa48("42633"), !Array.isArray(item.groups))))) {
          if (stryMutAct_9fa48("42634")) {
            {}
          } else {
            stryCov_9fa48("42634");
            item.groups = stryMutAct_9fa48("42635") ? [] : (stryCov_9fa48("42635"), [item.groups]);
          }
        }
        return item;
      }
    }));
  }
}
async function navigationAdminSave(data) {
  if (stryMutAct_9fa48("42636")) {
    {}
  } else {
    stryCov_9fa48("42636");
    const db = require('../../database');
    const translator = require('../../translator');
    const order = Object.keys(data);
    const items = data.map((item, index) => {
      if (stryMutAct_9fa48("42637")) {
        {}
      } else {
        stryCov_9fa48("42637");
        Object.keys(item).forEach(key => {
          if (stryMutAct_9fa48("42638")) {
            {}
          } else {
            stryCov_9fa48("42638");
            if (stryMutAct_9fa48("42641") ? item.hasOwnProperty(key) && typeof item[key] === 'string' || key === 'title' || key === 'text' : stryMutAct_9fa48("42640") ? false : stryMutAct_9fa48("42639") ? true : (stryCov_9fa48("42639", "42640", "42641"), (stryMutAct_9fa48("42643") ? item.hasOwnProperty(key) || typeof item[key] === 'string' : stryMutAct_9fa48("42642") ? true : (stryCov_9fa48("42642", "42643"), item.hasOwnProperty(key) && (stryMutAct_9fa48("42645") ? typeof item[key] !== 'string' : stryMutAct_9fa48("42644") ? true : (stryCov_9fa48("42644", "42645"), typeof item[key] === (stryMutAct_9fa48("42646") ? "" : (stryCov_9fa48("42646"), 'string')))))) && (stryMutAct_9fa48("42648") ? key === 'title' && key === 'text' : stryMutAct_9fa48("42647") ? true : (stryCov_9fa48("42647", "42648"), (stryMutAct_9fa48("42650") ? key !== 'title' : stryMutAct_9fa48("42649") ? false : (stryCov_9fa48("42649", "42650"), key === (stryMutAct_9fa48("42651") ? "" : (stryCov_9fa48("42651"), 'title')))) || (stryMutAct_9fa48("42653") ? key !== 'text' : stryMutAct_9fa48("42652") ? false : (stryCov_9fa48("42652", "42653"), key === (stryMutAct_9fa48("42654") ? "" : (stryCov_9fa48("42654"), 'text')))))))) {
              if (stryMutAct_9fa48("42655")) {
                {}
              } else {
                stryCov_9fa48("42655");
                item[key] = translator.escape(item[key]);
              }
            }
          }
        });
        item.order = order[index];
        return JSON.stringify(item);
      }
    });
    await db.delete(stryMutAct_9fa48("42656") ? "" : (stryCov_9fa48("42656"), 'navigation:enabled'));
    await db.sortedSetAdd(stryMutAct_9fa48("42657") ? "" : (stryCov_9fa48("42657"), 'navigation:enabled'), order, items);
  }
}