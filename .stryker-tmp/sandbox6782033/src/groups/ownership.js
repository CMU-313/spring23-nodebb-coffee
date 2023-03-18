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
const db = require('../database');
const plugins = require('../plugins');
module.exports = function (Groups) {
  if (stryMutAct_9fa48("20742")) {
    {}
  } else {
    stryCov_9fa48("20742");
    Groups.ownership = {};
    Groups.ownership.isOwner = async function (uid, groupName) {
      if (stryMutAct_9fa48("20743")) {
        {}
      } else {
        stryCov_9fa48("20743");
        if (stryMutAct_9fa48("20746") ? false : stryMutAct_9fa48("20745") ? true : stryMutAct_9fa48("20744") ? parseInt(uid, 10) > 0 : (stryCov_9fa48("20744", "20745", "20746"), !(stryMutAct_9fa48("20750") ? parseInt(uid, 10) <= 0 : stryMutAct_9fa48("20749") ? parseInt(uid, 10) >= 0 : stryMutAct_9fa48("20748") ? false : stryMutAct_9fa48("20747") ? true : (stryCov_9fa48("20747", "20748", "20749", "20750"), parseInt(uid, 10) > 0)))) {
          if (stryMutAct_9fa48("20751")) {
            {}
          } else {
            stryCov_9fa48("20751");
            return stryMutAct_9fa48("20752") ? true : (stryCov_9fa48("20752"), false);
          }
        }
        return await db.isSetMember(stryMutAct_9fa48("20753") ? `` : (stryCov_9fa48("20753"), `group:${groupName}:owners`), uid);
      }
    };
    Groups.ownership.isOwners = async function (uids, groupName) {
      if (stryMutAct_9fa48("20754")) {
        {}
      } else {
        stryCov_9fa48("20754");
        if (stryMutAct_9fa48("20757") ? false : stryMutAct_9fa48("20756") ? true : stryMutAct_9fa48("20755") ? Array.isArray(uids) : (stryCov_9fa48("20755", "20756", "20757"), !Array.isArray(uids))) {
          if (stryMutAct_9fa48("20758")) {
            {}
          } else {
            stryCov_9fa48("20758");
            return stryMutAct_9fa48("20759") ? ["Stryker was here"] : (stryCov_9fa48("20759"), []);
          }
        }
        return await db.isSetMembers(stryMutAct_9fa48("20760") ? `` : (stryCov_9fa48("20760"), `group:${groupName}:owners`), uids);
      }
    };
    Groups.ownership.grant = async function (toUid, groupName) {
      if (stryMutAct_9fa48("20761")) {
        {}
      } else {
        stryCov_9fa48("20761");
        await db.setAdd(stryMutAct_9fa48("20762") ? `` : (stryCov_9fa48("20762"), `group:${groupName}:owners`), toUid);
        plugins.hooks.fire(stryMutAct_9fa48("20763") ? "" : (stryCov_9fa48("20763"), 'action:group.grantOwnership'), stryMutAct_9fa48("20764") ? {} : (stryCov_9fa48("20764"), {
          uid: toUid,
          groupName: groupName
        }));
      }
    };
    Groups.ownership.rescind = async function (toUid, groupName) {
      if (stryMutAct_9fa48("20765")) {
        {}
      } else {
        stryCov_9fa48("20765");
        // If the owners set only contains one member (and toUid is that member), error out!
        const numOwners = await db.setCount(stryMutAct_9fa48("20766") ? `` : (stryCov_9fa48("20766"), `group:${groupName}:owners`));
        const isOwner = await db.isSortedSetMember(stryMutAct_9fa48("20767") ? `` : (stryCov_9fa48("20767"), `group:${groupName}:owners`));
        if (stryMutAct_9fa48("20770") ? numOwners <= 1 || isOwner : stryMutAct_9fa48("20769") ? false : stryMutAct_9fa48("20768") ? true : (stryCov_9fa48("20768", "20769", "20770"), (stryMutAct_9fa48("20773") ? numOwners > 1 : stryMutAct_9fa48("20772") ? numOwners < 1 : stryMutAct_9fa48("20771") ? true : (stryCov_9fa48("20771", "20772", "20773"), numOwners <= 1)) && isOwner)) {
          if (stryMutAct_9fa48("20774")) {
            {}
          } else {
            stryCov_9fa48("20774");
            throw new Error(stryMutAct_9fa48("20775") ? "" : (stryCov_9fa48("20775"), '[[error:group-needs-owner]]'));
          }
        }
        await db.setRemove(stryMutAct_9fa48("20776") ? `` : (stryCov_9fa48("20776"), `group:${groupName}:owners`), toUid);
        plugins.hooks.fire(stryMutAct_9fa48("20777") ? "" : (stryCov_9fa48("20777"), 'action:group.rescindOwnership'), stryMutAct_9fa48("20778") ? {} : (stryCov_9fa48("20778"), {
          uid: toUid,
          groupName: groupName
        }));
      }
    };
  }
};