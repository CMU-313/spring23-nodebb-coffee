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
const nconf = require('nconf');
const validator = require('validator');
const admin = require('./admin');
const groups = require('../groups');
const navigation = module.exports;
const relative_path = nconf.get(stryMutAct_9fa48("26543") ? "" : (stryCov_9fa48("26543"), 'relative_path'));
navigation.get = async function (uid) {
  if (stryMutAct_9fa48("26544")) {
    {}
  } else {
    stryCov_9fa48("26544");
    let data = await admin.get();
    data = stryMutAct_9fa48("26545") ? data.map(item => {
      item.originalRoute = validator.unescape(item.route);
      if (!item.route.startsWith('http')) {
        item.route = relative_path + item.route;
      }
      return item;
    }) : (stryCov_9fa48("26545"), data.filter(stryMutAct_9fa48("26546") ? () => undefined : (stryCov_9fa48("26546"), item => stryMutAct_9fa48("26549") ? item || item.enabled : stryMutAct_9fa48("26548") ? false : stryMutAct_9fa48("26547") ? true : (stryCov_9fa48("26547", "26548", "26549"), item && item.enabled))).map(item => {
      if (stryMutAct_9fa48("26550")) {
        {}
      } else {
        stryCov_9fa48("26550");
        item.originalRoute = validator.unescape(item.route);
        if (stryMutAct_9fa48("26553") ? false : stryMutAct_9fa48("26552") ? true : stryMutAct_9fa48("26551") ? item.route.startsWith('http') : (stryCov_9fa48("26551", "26552", "26553"), !(stryMutAct_9fa48("26554") ? item.route.endsWith('http') : (stryCov_9fa48("26554"), item.route.startsWith(stryMutAct_9fa48("26555") ? "" : (stryCov_9fa48("26555"), 'http')))))) {
          if (stryMutAct_9fa48("26556")) {
            {}
          } else {
            stryCov_9fa48("26556");
            item.route = stryMutAct_9fa48("26557") ? relative_path - item.route : (stryCov_9fa48("26557"), relative_path + item.route);
          }
        }
        return item;
      }
    }));
    const pass = await Promise.all(data.map(async navItem => {
      if (stryMutAct_9fa48("26558")) {
        {}
      } else {
        stryCov_9fa48("26558");
        if (stryMutAct_9fa48("26561") ? false : stryMutAct_9fa48("26560") ? true : stryMutAct_9fa48("26559") ? navItem.groups.length : (stryCov_9fa48("26559", "26560", "26561"), !navItem.groups.length)) {
          if (stryMutAct_9fa48("26562")) {
            {}
          } else {
            stryCov_9fa48("26562");
            return stryMutAct_9fa48("26563") ? false : (stryCov_9fa48("26563"), true);
          }
        }
        return await groups.isMemberOfAny(uid, navItem.groups);
      }
    }));
    return stryMutAct_9fa48("26564") ? data : (stryCov_9fa48("26564"), data.filter(stryMutAct_9fa48("26565") ? () => undefined : (stryCov_9fa48("26565"), (navItem, i) => pass[i])));
  }
};
require('../promisify')(navigation);