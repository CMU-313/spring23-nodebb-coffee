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
const plugins = require('../plugins');
const cache = require('../cache');
module.exports = function (Groups) {
  if (stryMutAct_9fa48("20468")) {
    {}
  } else {
    stryCov_9fa48("20468");
    Groups.leave = async function (groupNames, uid) {
      if (stryMutAct_9fa48("20469")) {
        {}
      } else {
        stryCov_9fa48("20469");
        if (stryMutAct_9fa48("20472") ? Array.isArray(groupNames) || !groupNames.length : stryMutAct_9fa48("20471") ? false : stryMutAct_9fa48("20470") ? true : (stryCov_9fa48("20470", "20471", "20472"), Array.isArray(groupNames) && (stryMutAct_9fa48("20473") ? groupNames.length : (stryCov_9fa48("20473"), !groupNames.length)))) {
          if (stryMutAct_9fa48("20474")) {
            {}
          } else {
            stryCov_9fa48("20474");
            return;
          }
        }
        if (stryMutAct_9fa48("20477") ? false : stryMutAct_9fa48("20476") ? true : stryMutAct_9fa48("20475") ? Array.isArray(groupNames) : (stryCov_9fa48("20475", "20476", "20477"), !Array.isArray(groupNames))) {
          if (stryMutAct_9fa48("20478")) {
            {}
          } else {
            stryCov_9fa48("20478");
            groupNames = stryMutAct_9fa48("20479") ? [] : (stryCov_9fa48("20479"), [groupNames]);
          }
        }
        const isMembers = await Groups.isMemberOfGroups(uid, groupNames);
        const groupsToLeave = stryMutAct_9fa48("20480") ? groupNames : (stryCov_9fa48("20480"), groupNames.filter(stryMutAct_9fa48("20481") ? () => undefined : (stryCov_9fa48("20481"), (groupName, index) => isMembers[index])));
        if (stryMutAct_9fa48("20484") ? false : stryMutAct_9fa48("20483") ? true : stryMutAct_9fa48("20482") ? groupsToLeave.length : (stryCov_9fa48("20482", "20483", "20484"), !groupsToLeave.length)) {
          if (stryMutAct_9fa48("20485")) {
            {}
          } else {
            stryCov_9fa48("20485");
            return;
          }
        }
        await Promise.all(stryMutAct_9fa48("20486") ? [] : (stryCov_9fa48("20486"), [db.sortedSetRemove(groupsToLeave.map(stryMutAct_9fa48("20487") ? () => undefined : (stryCov_9fa48("20487"), groupName => stryMutAct_9fa48("20488") ? `` : (stryCov_9fa48("20488"), `group:${groupName}:members`))), uid), db.setRemove(groupsToLeave.map(stryMutAct_9fa48("20489") ? () => undefined : (stryCov_9fa48("20489"), groupName => stryMutAct_9fa48("20490") ? `` : (stryCov_9fa48("20490"), `group:${groupName}:owners`))), uid), db.decrObjectField(groupsToLeave.map(stryMutAct_9fa48("20491") ? () => undefined : (stryCov_9fa48("20491"), groupName => stryMutAct_9fa48("20492") ? `` : (stryCov_9fa48("20492"), `group:${groupName}`))), stryMutAct_9fa48("20493") ? "" : (stryCov_9fa48("20493"), 'memberCount'))]));
        Groups.clearCache(uid, groupsToLeave);
        cache.del(groupsToLeave.map(stryMutAct_9fa48("20494") ? () => undefined : (stryCov_9fa48("20494"), name => stryMutAct_9fa48("20495") ? `` : (stryCov_9fa48("20495"), `group:${name}:members`))));
        const groupData = await Groups.getGroupsFields(groupsToLeave, stryMutAct_9fa48("20496") ? [] : (stryCov_9fa48("20496"), [stryMutAct_9fa48("20497") ? "" : (stryCov_9fa48("20497"), 'name'), stryMutAct_9fa48("20498") ? "" : (stryCov_9fa48("20498"), 'hidden'), stryMutAct_9fa48("20499") ? "" : (stryCov_9fa48("20499"), 'memberCount')]));
        if (stryMutAct_9fa48("20502") ? false : stryMutAct_9fa48("20501") ? true : stryMutAct_9fa48("20500") ? groupData : (stryCov_9fa48("20500", "20501", "20502"), !groupData)) {
          if (stryMutAct_9fa48("20503")) {
            {}
          } else {
            stryCov_9fa48("20503");
            return;
          }
        }
        const emptyPrivilegeGroups = stryMutAct_9fa48("20504") ? groupData : (stryCov_9fa48("20504"), groupData.filter(stryMutAct_9fa48("20505") ? () => undefined : (stryCov_9fa48("20505"), g => stryMutAct_9fa48("20508") ? g && Groups.isPrivilegeGroup(g.name) || g.memberCount === 0 : stryMutAct_9fa48("20507") ? false : stryMutAct_9fa48("20506") ? true : (stryCov_9fa48("20506", "20507", "20508"), (stryMutAct_9fa48("20510") ? g || Groups.isPrivilegeGroup(g.name) : stryMutAct_9fa48("20509") ? true : (stryCov_9fa48("20509", "20510"), g && Groups.isPrivilegeGroup(g.name))) && (stryMutAct_9fa48("20512") ? g.memberCount !== 0 : stryMutAct_9fa48("20511") ? true : (stryCov_9fa48("20511", "20512"), g.memberCount === 0))))));
        const visibleGroups = stryMutAct_9fa48("20513") ? groupData : (stryCov_9fa48("20513"), groupData.filter(stryMutAct_9fa48("20514") ? () => undefined : (stryCov_9fa48("20514"), g => stryMutAct_9fa48("20517") ? g || !g.hidden : stryMutAct_9fa48("20516") ? false : stryMutAct_9fa48("20515") ? true : (stryCov_9fa48("20515", "20516", "20517"), g && (stryMutAct_9fa48("20518") ? g.hidden : (stryCov_9fa48("20518"), !g.hidden))))));
        const promises = stryMutAct_9fa48("20519") ? ["Stryker was here"] : (stryCov_9fa48("20519"), []);
        if (stryMutAct_9fa48("20521") ? false : stryMutAct_9fa48("20520") ? true : (stryCov_9fa48("20520", "20521"), emptyPrivilegeGroups.length)) {
          if (stryMutAct_9fa48("20522")) {
            {}
          } else {
            stryCov_9fa48("20522");
            promises.push(Groups.destroy, emptyPrivilegeGroups);
          }
        }
        if (stryMutAct_9fa48("20524") ? false : stryMutAct_9fa48("20523") ? true : (stryCov_9fa48("20523", "20524"), visibleGroups.length)) {
          if (stryMutAct_9fa48("20525")) {
            {}
          } else {
            stryCov_9fa48("20525");
            promises.push(db.sortedSetAdd, stryMutAct_9fa48("20526") ? "" : (stryCov_9fa48("20526"), 'groups:visible:memberCount'), visibleGroups.map(stryMutAct_9fa48("20527") ? () => undefined : (stryCov_9fa48("20527"), groupData => groupData.memberCount)), visibleGroups.map(stryMutAct_9fa48("20528") ? () => undefined : (stryCov_9fa48("20528"), groupData => groupData.name)));
          }
        }
        await Promise.all(promises);
        await clearGroupTitleIfSet(groupsToLeave, uid);
        plugins.hooks.fire(stryMutAct_9fa48("20529") ? "" : (stryCov_9fa48("20529"), 'action:group.leave'), stryMutAct_9fa48("20530") ? {} : (stryCov_9fa48("20530"), {
          groupNames: groupsToLeave,
          uid: uid
        }));
      }
    };
    async function clearGroupTitleIfSet(groupNames, uid) {
      if (stryMutAct_9fa48("20531")) {
        {}
      } else {
        stryCov_9fa48("20531");
        groupNames = stryMutAct_9fa48("20532") ? groupNames : (stryCov_9fa48("20532"), groupNames.filter(stryMutAct_9fa48("20533") ? () => undefined : (stryCov_9fa48("20533"), groupName => stryMutAct_9fa48("20536") ? groupName !== 'registered-users' || !Groups.isPrivilegeGroup(groupName) : stryMutAct_9fa48("20535") ? false : stryMutAct_9fa48("20534") ? true : (stryCov_9fa48("20534", "20535", "20536"), (stryMutAct_9fa48("20538") ? groupName === 'registered-users' : stryMutAct_9fa48("20537") ? true : (stryCov_9fa48("20537", "20538"), groupName !== (stryMutAct_9fa48("20539") ? "" : (stryCov_9fa48("20539"), 'registered-users')))) && (stryMutAct_9fa48("20540") ? Groups.isPrivilegeGroup(groupName) : (stryCov_9fa48("20540"), !Groups.isPrivilegeGroup(groupName)))))));
        if (stryMutAct_9fa48("20543") ? false : stryMutAct_9fa48("20542") ? true : stryMutAct_9fa48("20541") ? groupNames.length : (stryCov_9fa48("20541", "20542", "20543"), !groupNames.length)) {
          if (stryMutAct_9fa48("20544")) {
            {}
          } else {
            stryCov_9fa48("20544");
            return;
          }
        }
        const userData = await user.getUserData(uid);
        if (stryMutAct_9fa48("20547") ? false : stryMutAct_9fa48("20546") ? true : stryMutAct_9fa48("20545") ? userData : (stryCov_9fa48("20545", "20546", "20547"), !userData)) {
          if (stryMutAct_9fa48("20548")) {
            {}
          } else {
            stryCov_9fa48("20548");
            return;
          }
        }
        const newTitleArray = stryMutAct_9fa48("20549") ? userData.groupTitleArray : (stryCov_9fa48("20549"), userData.groupTitleArray.filter(stryMutAct_9fa48("20550") ? () => undefined : (stryCov_9fa48("20550"), groupTitle => stryMutAct_9fa48("20551") ? groupNames.includes(groupTitle) : (stryCov_9fa48("20551"), !groupNames.includes(groupTitle)))));
        if (stryMutAct_9fa48("20553") ? false : stryMutAct_9fa48("20552") ? true : (stryCov_9fa48("20552", "20553"), newTitleArray.length)) {
          if (stryMutAct_9fa48("20554")) {
            {}
          } else {
            stryCov_9fa48("20554");
            await db.setObjectField(stryMutAct_9fa48("20555") ? `` : (stryCov_9fa48("20555"), `user:${uid}`), stryMutAct_9fa48("20556") ? "" : (stryCov_9fa48("20556"), 'groupTitle'), JSON.stringify(newTitleArray));
          }
        } else {
          if (stryMutAct_9fa48("20557")) {
            {}
          } else {
            stryCov_9fa48("20557");
            await db.deleteObjectField(stryMutAct_9fa48("20558") ? `` : (stryCov_9fa48("20558"), `user:${uid}`), stryMutAct_9fa48("20559") ? "" : (stryCov_9fa48("20559"), 'groupTitle'));
          }
        }
      }
    }
    Groups.leaveAllGroups = async function (uid) {
      if (stryMutAct_9fa48("20560")) {
        {}
      } else {
        stryCov_9fa48("20560");
        const groups = await db.getSortedSetRange(stryMutAct_9fa48("20561") ? "" : (stryCov_9fa48("20561"), 'groups:createtime'), 0, stryMutAct_9fa48("20562") ? +1 : (stryCov_9fa48("20562"), -1));
        await Promise.all(stryMutAct_9fa48("20563") ? [] : (stryCov_9fa48("20563"), [Groups.leave(groups, uid), Groups.rejectMembership(groups, uid)]));
      }
    };
    Groups.kick = async function (uid, groupName, isOwner) {
      if (stryMutAct_9fa48("20564")) {
        {}
      } else {
        stryCov_9fa48("20564");
        if (stryMutAct_9fa48("20566") ? false : stryMutAct_9fa48("20565") ? true : (stryCov_9fa48("20565", "20566"), isOwner)) {
          if (stryMutAct_9fa48("20567")) {
            {}
          } else {
            stryCov_9fa48("20567");
            // If the owners set only contains one member, error out!
            const numOwners = await db.setCount(stryMutAct_9fa48("20568") ? `` : (stryCov_9fa48("20568"), `group:${groupName}:owners`));
            if (stryMutAct_9fa48("20572") ? numOwners > 1 : stryMutAct_9fa48("20571") ? numOwners < 1 : stryMutAct_9fa48("20570") ? false : stryMutAct_9fa48("20569") ? true : (stryCov_9fa48("20569", "20570", "20571", "20572"), numOwners <= 1)) {
              if (stryMutAct_9fa48("20573")) {
                {}
              } else {
                stryCov_9fa48("20573");
                throw new Error(stryMutAct_9fa48("20574") ? "" : (stryCov_9fa48("20574"), '[[error:group-needs-owner]]'));
              }
            }
          }
        }
        await Groups.leave(groupName, uid);
      }
    };
  }
};