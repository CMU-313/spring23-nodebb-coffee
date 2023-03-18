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
const posts = require('../posts');
const db = require('../database');
module.exports = function (Categories) {
  if (stryMutAct_9fa48("2112")) {
    {}
  } else {
    stryCov_9fa48("2112");
    Categories.getActiveUsers = async function (cids) {
      if (stryMutAct_9fa48("2113")) {
        {}
      } else {
        stryCov_9fa48("2113");
        if (stryMutAct_9fa48("2116") ? false : stryMutAct_9fa48("2115") ? true : stryMutAct_9fa48("2114") ? Array.isArray(cids) : (stryCov_9fa48("2114", "2115", "2116"), !Array.isArray(cids))) {
          if (stryMutAct_9fa48("2117")) {
            {}
          } else {
            stryCov_9fa48("2117");
            cids = stryMutAct_9fa48("2118") ? [] : (stryCov_9fa48("2118"), [cids]);
          }
        }
        const pids = await db.getSortedSetRevRange(cids.map(stryMutAct_9fa48("2119") ? () => undefined : (stryCov_9fa48("2119"), cid => stryMutAct_9fa48("2120") ? `` : (stryCov_9fa48("2120"), `cid:${cid}:pids`))), 0, 24);
        const postData = await posts.getPostsFields(pids, stryMutAct_9fa48("2121") ? [] : (stryCov_9fa48("2121"), [stryMutAct_9fa48("2122") ? "" : (stryCov_9fa48("2122"), 'uid')]));
        return _.uniq(stryMutAct_9fa48("2123") ? postData.map(post => post.uid) : (stryCov_9fa48("2123"), postData.map(stryMutAct_9fa48("2124") ? () => undefined : (stryCov_9fa48("2124"), post => post.uid)).filter(stryMutAct_9fa48("2125") ? () => undefined : (stryCov_9fa48("2125"), uid => uid))));
      }
    };
  }
};