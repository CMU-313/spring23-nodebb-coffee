/* eslint-disable no-await-in-loop */
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
const groups = require('../../groups');
const db = require('../../database');
module.exports = stryMutAct_9fa48("42415") ? {} : (stryCov_9fa48("42415"), {
  name: stryMutAct_9fa48("42416") ? "" : (stryCov_9fa48("42416"), 'Give deleted post viewing privilege to moderators on all categories'),
  timestamp: Date.UTC(2018, 5, 8),
  method: async function () {
    if (stryMutAct_9fa48("42417")) {
      {}
    } else {
      stryCov_9fa48("42417");
      const {
        progress
      } = this;
      const cids = await db.getSortedSetRange(stryMutAct_9fa48("42418") ? "" : (stryCov_9fa48("42418"), 'categories:cid'), 0, stryMutAct_9fa48("42419") ? +1 : (stryCov_9fa48("42419"), -1));
      for (const cid of cids) {
        if (stryMutAct_9fa48("42420")) {
          {}
        } else {
          stryCov_9fa48("42420");
          const uids = await db.getSortedSetRange(stryMutAct_9fa48("42421") ? `` : (stryCov_9fa48("42421"), `group:cid:${cid}:privileges:moderate:members`), 0, stryMutAct_9fa48("42422") ? +1 : (stryCov_9fa48("42422"), -1));
          for (const uid of uids) {
            if (stryMutAct_9fa48("42423")) {
              {}
            } else {
              stryCov_9fa48("42423");
              await groups.join(stryMutAct_9fa48("42424") ? `` : (stryCov_9fa48("42424"), `cid:${cid}:privileges:posts:view_deleted`), uid);
            }
          }
          progress.incr();
        }
      }
    }
  }
});