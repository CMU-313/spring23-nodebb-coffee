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
const winston = require('winston');
const db = require('../../database');
module.exports = stryMutAct_9fa48("42148") ? {} : (stryCov_9fa48("42148"), {
  name: stryMutAct_9fa48("42149") ? "" : (stryCov_9fa48("42149"), 'Giving topics:read privs to any group/user that was previously allowed to Find & Access Category'),
  timestamp: Date.UTC(2016, 4, 28),
  method: async function () {
    if (stryMutAct_9fa48("42150")) {
      {}
    } else {
      stryCov_9fa48("42150");
      const groupsAPI = require('../../groups');
      const privilegesAPI = require('../../privileges');
      const cids = await db.getSortedSetRange(stryMutAct_9fa48("42151") ? "" : (stryCov_9fa48("42151"), 'categories:cid'), 0, stryMutAct_9fa48("42152") ? +1 : (stryCov_9fa48("42152"), -1));
      for (const cid of cids) {
        if (stryMutAct_9fa48("42153")) {
          {}
        } else {
          stryCov_9fa48("42153");
          const {
            groups,
            users
          } = await privilegesAPI.categories.list(cid);
          for (const group of groups) {
            if (stryMutAct_9fa48("42154")) {
              {}
            } else {
              stryCov_9fa48("42154");
              if (stryMutAct_9fa48("42156") ? false : stryMutAct_9fa48("42155") ? true : (stryCov_9fa48("42155", "42156"), group.privileges[stryMutAct_9fa48("42157") ? "" : (stryCov_9fa48("42157"), 'groups:read')])) {
                if (stryMutAct_9fa48("42158")) {
                  {}
                } else {
                  stryCov_9fa48("42158");
                  await groupsAPI.join(stryMutAct_9fa48("42159") ? `` : (stryCov_9fa48("42159"), `cid:${cid}:privileges:groups:topics:read`), group.name);
                  winston.verbose(stryMutAct_9fa48("42160") ? `` : (stryCov_9fa48("42160"), `cid:${cid}:privileges:groups:topics:read granted to gid: ${group.name}`));
                }
              }
            }
          }
          for (const user of users) {
            if (stryMutAct_9fa48("42161")) {
              {}
            } else {
              stryCov_9fa48("42161");
              if (stryMutAct_9fa48("42163") ? false : stryMutAct_9fa48("42162") ? true : (stryCov_9fa48("42162", "42163"), user.privileges.read)) {
                if (stryMutAct_9fa48("42164")) {
                  {}
                } else {
                  stryCov_9fa48("42164");
                  await groupsAPI.join(stryMutAct_9fa48("42165") ? `` : (stryCov_9fa48("42165"), `cid:${cid}:privileges:topics:read`), user.uid);
                  winston.verbose(stryMutAct_9fa48("42166") ? `` : (stryCov_9fa48("42166"), `cid:${cid}:privileges:topics:read granted to uid: ${user.uid}`));
                }
              }
            }
          }
          winston.verbose(stryMutAct_9fa48("42167") ? `` : (stryCov_9fa48("42167"), `-- cid ${cid} upgraded`));
        }
      }
    }
  }
});