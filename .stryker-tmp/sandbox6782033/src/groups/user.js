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
const user = require('../user');
module.exports = function (Groups) {
  if (stryMutAct_9fa48("21221")) {
    {}
  } else {
    stryCov_9fa48("21221");
    Groups.getUsersFromSet = async function (set, fields) {
      if (stryMutAct_9fa48("21222")) {
        {}
      } else {
        stryCov_9fa48("21222");
        const uids = await db.getSetMembers(set);
        if (stryMutAct_9fa48("21224") ? false : stryMutAct_9fa48("21223") ? true : (stryCov_9fa48("21223", "21224"), fields)) {
          if (stryMutAct_9fa48("21225")) {
            {}
          } else {
            stryCov_9fa48("21225");
            return await user.getUsersFields(uids, fields);
          }
        }
        return await user.getUsersData(uids);
      }
    };
    Groups.getUserGroups = async function (uids) {
      if (stryMutAct_9fa48("21226")) {
        {}
      } else {
        stryCov_9fa48("21226");
        return await Groups.getUserGroupsFromSet(stryMutAct_9fa48("21227") ? "" : (stryCov_9fa48("21227"), 'groups:visible:createtime'), uids);
      }
    };
    Groups.getUserGroupsFromSet = async function (set, uids) {
      if (stryMutAct_9fa48("21228")) {
        {}
      } else {
        stryCov_9fa48("21228");
        const memberOf = await Groups.getUserGroupMembership(set, uids);
        return await Promise.all(memberOf.map(stryMutAct_9fa48("21229") ? () => undefined : (stryCov_9fa48("21229"), memberOf => Groups.getGroupsData(memberOf))));
      }
    };
    Groups.getUserGroupMembership = async function (set, uids) {
      if (stryMutAct_9fa48("21230")) {
        {}
      } else {
        stryCov_9fa48("21230");
        const groupNames = await db.getSortedSetRevRange(set, 0, stryMutAct_9fa48("21231") ? +1 : (stryCov_9fa48("21231"), -1));
        return await Promise.all(uids.map(stryMutAct_9fa48("21232") ? () => undefined : (stryCov_9fa48("21232"), uid => findUserGroups(uid, groupNames))));
      }
    };
    async function findUserGroups(uid, groupNames) {
      if (stryMutAct_9fa48("21233")) {
        {}
      } else {
        stryCov_9fa48("21233");
        const isMembers = await Groups.isMemberOfGroups(uid, groupNames);
        return stryMutAct_9fa48("21234") ? groupNames : (stryCov_9fa48("21234"), groupNames.filter(stryMutAct_9fa48("21235") ? () => undefined : (stryCov_9fa48("21235"), (name, i) => isMembers[i])));
      }
    }
    Groups.getUserInviteGroups = async function (uid) {
      if (stryMutAct_9fa48("21236")) {
        {}
      } else {
        stryCov_9fa48("21236");
        let allGroups = await Groups.getNonPrivilegeGroups(stryMutAct_9fa48("21237") ? "" : (stryCov_9fa48("21237"), 'groups:createtime'), 0, stryMutAct_9fa48("21238") ? +1 : (stryCov_9fa48("21238"), -1));
        allGroups = stryMutAct_9fa48("21239") ? allGroups : (stryCov_9fa48("21239"), allGroups.filter(stryMutAct_9fa48("21240") ? () => undefined : (stryCov_9fa48("21240"), group => stryMutAct_9fa48("21241") ? Groups.ephemeralGroups.includes(group.name) : (stryCov_9fa48("21241"), !Groups.ephemeralGroups.includes(group.name)))));
        const publicGroups = stryMutAct_9fa48("21242") ? allGroups : (stryCov_9fa48("21242"), allGroups.filter(stryMutAct_9fa48("21243") ? () => undefined : (stryCov_9fa48("21243"), group => stryMutAct_9fa48("21246") ? group.hidden === 0 && group.system === 0 || group.private === 0 : stryMutAct_9fa48("21245") ? false : stryMutAct_9fa48("21244") ? true : (stryCov_9fa48("21244", "21245", "21246"), (stryMutAct_9fa48("21248") ? group.hidden === 0 || group.system === 0 : stryMutAct_9fa48("21247") ? true : (stryCov_9fa48("21247", "21248"), (stryMutAct_9fa48("21250") ? group.hidden !== 0 : stryMutAct_9fa48("21249") ? true : (stryCov_9fa48("21249", "21250"), group.hidden === 0)) && (stryMutAct_9fa48("21252") ? group.system !== 0 : stryMutAct_9fa48("21251") ? true : (stryCov_9fa48("21251", "21252"), group.system === 0)))) && (stryMutAct_9fa48("21254") ? group.private !== 0 : stryMutAct_9fa48("21253") ? true : (stryCov_9fa48("21253", "21254"), group.private === 0))))));
        const adminModGroups = stryMutAct_9fa48("21255") ? [] : (stryCov_9fa48("21255"), [stryMutAct_9fa48("21256") ? {} : (stryCov_9fa48("21256"), {
          name: stryMutAct_9fa48("21257") ? "" : (stryCov_9fa48("21257"), 'administrators'),
          displayName: stryMutAct_9fa48("21258") ? "" : (stryCov_9fa48("21258"), 'administrators')
        }), stryMutAct_9fa48("21259") ? {} : (stryCov_9fa48("21259"), {
          name: stryMutAct_9fa48("21260") ? "" : (stryCov_9fa48("21260"), 'Global Moderators'),
          displayName: stryMutAct_9fa48("21261") ? "" : (stryCov_9fa48("21261"), 'Global Moderators')
        })]);
        // Private (but not hidden)
        const privateGroups = stryMutAct_9fa48("21262") ? allGroups : (stryCov_9fa48("21262"), allGroups.filter(stryMutAct_9fa48("21263") ? () => undefined : (stryCov_9fa48("21263"), group => stryMutAct_9fa48("21266") ? group.hidden === 0 && group.system === 0 || group.private === 1 : stryMutAct_9fa48("21265") ? false : stryMutAct_9fa48("21264") ? true : (stryCov_9fa48("21264", "21265", "21266"), (stryMutAct_9fa48("21268") ? group.hidden === 0 || group.system === 0 : stryMutAct_9fa48("21267") ? true : (stryCov_9fa48("21267", "21268"), (stryMutAct_9fa48("21270") ? group.hidden !== 0 : stryMutAct_9fa48("21269") ? true : (stryCov_9fa48("21269", "21270"), group.hidden === 0)) && (stryMutAct_9fa48("21272") ? group.system !== 0 : stryMutAct_9fa48("21271") ? true : (stryCov_9fa48("21271", "21272"), group.system === 0)))) && (stryMutAct_9fa48("21274") ? group.private !== 1 : stryMutAct_9fa48("21273") ? true : (stryCov_9fa48("21273", "21274"), group.private === 1))))));
        const [ownership, isAdmin, isGlobalMod] = await Promise.all(stryMutAct_9fa48("21275") ? [] : (stryCov_9fa48("21275"), [Promise.all(privateGroups.map(stryMutAct_9fa48("21276") ? () => undefined : (stryCov_9fa48("21276"), group => Groups.ownership.isOwner(uid, group.name)))), user.isAdministrator(uid), user.isGlobalModerator(uid)]));
        const ownGroups = stryMutAct_9fa48("21277") ? privateGroups : (stryCov_9fa48("21277"), privateGroups.filter(stryMutAct_9fa48("21278") ? () => undefined : (stryCov_9fa48("21278"), (group, index) => ownership[index])));
        let inviteGroups = stryMutAct_9fa48("21279") ? ["Stryker was here"] : (stryCov_9fa48("21279"), []);
        if (stryMutAct_9fa48("21281") ? false : stryMutAct_9fa48("21280") ? true : (stryCov_9fa48("21280", "21281"), isAdmin)) {
          if (stryMutAct_9fa48("21282")) {
            {}
          } else {
            stryCov_9fa48("21282");
            inviteGroups = inviteGroups.concat(adminModGroups).concat(privateGroups);
          }
        } else if (stryMutAct_9fa48("21284") ? false : stryMutAct_9fa48("21283") ? true : (stryCov_9fa48("21283", "21284"), isGlobalMod)) {
          if (stryMutAct_9fa48("21285")) {
            {}
          } else {
            stryCov_9fa48("21285");
            inviteGroups = inviteGroups.concat(privateGroups);
          }
        } else {
          if (stryMutAct_9fa48("21286")) {
            {}
          } else {
            stryCov_9fa48("21286");
            inviteGroups = inviteGroups.concat(ownGroups);
          }
        }
        return inviteGroups.concat(publicGroups);
      }
    };
  }
};