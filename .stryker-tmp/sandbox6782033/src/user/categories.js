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
const categories = require('../categories');
const plugins = require('../plugins');
module.exports = function (User) {
  if (stryMutAct_9fa48("45688")) {
    {}
  } else {
    stryCov_9fa48("45688");
    User.setCategoryWatchState = async function (uid, cids, state) {
      if (stryMutAct_9fa48("45689")) {
        {}
      } else {
        stryCov_9fa48("45689");
        if (stryMutAct_9fa48("45692") ? false : stryMutAct_9fa48("45691") ? true : stryMutAct_9fa48("45690") ? parseInt(uid, 10) > 0 : (stryCov_9fa48("45690", "45691", "45692"), !(stryMutAct_9fa48("45696") ? parseInt(uid, 10) <= 0 : stryMutAct_9fa48("45695") ? parseInt(uid, 10) >= 0 : stryMutAct_9fa48("45694") ? false : stryMutAct_9fa48("45693") ? true : (stryCov_9fa48("45693", "45694", "45695", "45696"), parseInt(uid, 10) > 0)))) {
          if (stryMutAct_9fa48("45697")) {
            {}
          } else {
            stryCov_9fa48("45697");
            return;
          }
        }
        const isStateValid = Object.values(categories.watchStates).includes(parseInt(state, 10));
        if (stryMutAct_9fa48("45700") ? false : stryMutAct_9fa48("45699") ? true : stryMutAct_9fa48("45698") ? isStateValid : (stryCov_9fa48("45698", "45699", "45700"), !isStateValid)) {
          if (stryMutAct_9fa48("45701")) {
            {}
          } else {
            stryCov_9fa48("45701");
            throw new Error(stryMutAct_9fa48("45702") ? "" : (stryCov_9fa48("45702"), '[[error:invalid-watch-state]]'));
          }
        }
        cids = Array.isArray(cids) ? cids : stryMutAct_9fa48("45703") ? [] : (stryCov_9fa48("45703"), [cids]);
        const exists = await categories.exists(cids);
        if (stryMutAct_9fa48("45705") ? false : stryMutAct_9fa48("45704") ? true : (stryCov_9fa48("45704", "45705"), exists.includes(stryMutAct_9fa48("45706") ? true : (stryCov_9fa48("45706"), false)))) {
          if (stryMutAct_9fa48("45707")) {
            {}
          } else {
            stryCov_9fa48("45707");
            throw new Error(stryMutAct_9fa48("45708") ? "" : (stryCov_9fa48("45708"), '[[error:no-category]]'));
          }
        }
        await db.sortedSetsAdd(cids.map(stryMutAct_9fa48("45709") ? () => undefined : (stryCov_9fa48("45709"), cid => stryMutAct_9fa48("45710") ? `` : (stryCov_9fa48("45710"), `cid:${cid}:uid:watch:state`))), state, uid);
      }
    };
    User.getCategoryWatchState = async function (uid) {
      if (stryMutAct_9fa48("45711")) {
        {}
      } else {
        stryCov_9fa48("45711");
        if (stryMutAct_9fa48("45714") ? false : stryMutAct_9fa48("45713") ? true : stryMutAct_9fa48("45712") ? parseInt(uid, 10) > 0 : (stryCov_9fa48("45712", "45713", "45714"), !(stryMutAct_9fa48("45718") ? parseInt(uid, 10) <= 0 : stryMutAct_9fa48("45717") ? parseInt(uid, 10) >= 0 : stryMutAct_9fa48("45716") ? false : stryMutAct_9fa48("45715") ? true : (stryCov_9fa48("45715", "45716", "45717", "45718"), parseInt(uid, 10) > 0)))) {
          if (stryMutAct_9fa48("45719")) {
            {}
          } else {
            stryCov_9fa48("45719");
            return {};
          }
        }
        const cids = await categories.getAllCidsFromSet(stryMutAct_9fa48("45720") ? "" : (stryCov_9fa48("45720"), 'categories:cid'));
        const states = await categories.getWatchState(cids, uid);
        return _.zipObject(cids, states);
      }
    };
    User.getIgnoredCategories = async function (uid) {
      if (stryMutAct_9fa48("45721")) {
        {}
      } else {
        stryCov_9fa48("45721");
        if (stryMutAct_9fa48("45724") ? false : stryMutAct_9fa48("45723") ? true : stryMutAct_9fa48("45722") ? parseInt(uid, 10) > 0 : (stryCov_9fa48("45722", "45723", "45724"), !(stryMutAct_9fa48("45728") ? parseInt(uid, 10) <= 0 : stryMutAct_9fa48("45727") ? parseInt(uid, 10) >= 0 : stryMutAct_9fa48("45726") ? false : stryMutAct_9fa48("45725") ? true : (stryCov_9fa48("45725", "45726", "45727", "45728"), parseInt(uid, 10) > 0)))) {
          if (stryMutAct_9fa48("45729")) {
            {}
          } else {
            stryCov_9fa48("45729");
            return stryMutAct_9fa48("45730") ? ["Stryker was here"] : (stryCov_9fa48("45730"), []);
          }
        }
        const cids = await User.getCategoriesByStates(uid, stryMutAct_9fa48("45731") ? [] : (stryCov_9fa48("45731"), [categories.watchStates.ignoring]));
        const result = await plugins.hooks.fire(stryMutAct_9fa48("45732") ? "" : (stryCov_9fa48("45732"), 'filter:user.getIgnoredCategories'), stryMutAct_9fa48("45733") ? {} : (stryCov_9fa48("45733"), {
          uid: uid,
          cids: cids
        }));
        return result.cids;
      }
    };
    User.getWatchedCategories = async function (uid) {
      if (stryMutAct_9fa48("45734")) {
        {}
      } else {
        stryCov_9fa48("45734");
        if (stryMutAct_9fa48("45737") ? false : stryMutAct_9fa48("45736") ? true : stryMutAct_9fa48("45735") ? parseInt(uid, 10) > 0 : (stryCov_9fa48("45735", "45736", "45737"), !(stryMutAct_9fa48("45741") ? parseInt(uid, 10) <= 0 : stryMutAct_9fa48("45740") ? parseInt(uid, 10) >= 0 : stryMutAct_9fa48("45739") ? false : stryMutAct_9fa48("45738") ? true : (stryCov_9fa48("45738", "45739", "45740", "45741"), parseInt(uid, 10) > 0)))) {
          if (stryMutAct_9fa48("45742")) {
            {}
          } else {
            stryCov_9fa48("45742");
            return stryMutAct_9fa48("45743") ? ["Stryker was here"] : (stryCov_9fa48("45743"), []);
          }
        }
        const cids = await User.getCategoriesByStates(uid, stryMutAct_9fa48("45744") ? [] : (stryCov_9fa48("45744"), [categories.watchStates.watching]));
        const result = await plugins.hooks.fire(stryMutAct_9fa48("45745") ? "" : (stryCov_9fa48("45745"), 'filter:user.getWatchedCategories'), stryMutAct_9fa48("45746") ? {} : (stryCov_9fa48("45746"), {
          uid: uid,
          cids: cids
        }));
        return result.cids;
      }
    };
    User.getCategoriesByStates = async function (uid, states) {
      if (stryMutAct_9fa48("45747")) {
        {}
      } else {
        stryCov_9fa48("45747");
        if (stryMutAct_9fa48("45750") ? false : stryMutAct_9fa48("45749") ? true : stryMutAct_9fa48("45748") ? parseInt(uid, 10) > 0 : (stryCov_9fa48("45748", "45749", "45750"), !(stryMutAct_9fa48("45754") ? parseInt(uid, 10) <= 0 : stryMutAct_9fa48("45753") ? parseInt(uid, 10) >= 0 : stryMutAct_9fa48("45752") ? false : stryMutAct_9fa48("45751") ? true : (stryCov_9fa48("45751", "45752", "45753", "45754"), parseInt(uid, 10) > 0)))) {
          if (stryMutAct_9fa48("45755")) {
            {}
          } else {
            stryCov_9fa48("45755");
            return await categories.getAllCidsFromSet(stryMutAct_9fa48("45756") ? "" : (stryCov_9fa48("45756"), 'categories:cid'));
          }
        }
        const cids = await categories.getAllCidsFromSet(stryMutAct_9fa48("45757") ? "" : (stryCov_9fa48("45757"), 'categories:cid'));
        const userState = await categories.getWatchState(cids, uid);
        return stryMutAct_9fa48("45758") ? cids : (stryCov_9fa48("45758"), cids.filter(stryMutAct_9fa48("45759") ? () => undefined : (stryCov_9fa48("45759"), (cid, index) => states.includes(userState[index]))));
      }
    };
    User.ignoreCategory = async function (uid, cid) {
      if (stryMutAct_9fa48("45760")) {
        {}
      } else {
        stryCov_9fa48("45760");
        await User.setCategoryWatchState(uid, cid, categories.watchStates.ignoring);
      }
    };
    User.watchCategory = async function (uid, cid) {
      if (stryMutAct_9fa48("45761")) {
        {}
      } else {
        stryCov_9fa48("45761");
        await User.setCategoryWatchState(uid, cid, categories.watchStates.watching);
      }
    };
  }
};