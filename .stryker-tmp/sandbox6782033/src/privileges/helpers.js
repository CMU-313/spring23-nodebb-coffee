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
const validator = require('validator');
const groups = require('../groups');
const user = require('../user');
const plugins = require('../plugins');
const translator = require('../translator');
const helpers = module.exports;
const uidToSystemGroup = stryMutAct_9fa48("31446") ? {} : (stryCov_9fa48("31446"), {
  0: stryMutAct_9fa48("31447") ? "" : (stryCov_9fa48("31447"), 'guests'),
  '-1': stryMutAct_9fa48("31448") ? "" : (stryCov_9fa48("31448"), 'spiders')
});
helpers.isUsersAllowedTo = async function (privilege, uids, cid) {
  if (stryMutAct_9fa48("31449")) {
    {}
  } else {
    stryCov_9fa48("31449");
    const [hasUserPrivilege, hasGroupPrivilege] = await Promise.all(stryMutAct_9fa48("31450") ? [] : (stryCov_9fa48("31450"), [groups.isMembers(uids, stryMutAct_9fa48("31451") ? `` : (stryCov_9fa48("31451"), `cid:${cid}:privileges:${privilege}`)), groups.isMembersOfGroupList(uids, stryMutAct_9fa48("31452") ? `` : (stryCov_9fa48("31452"), `cid:${cid}:privileges:groups:${privilege}`))]));
    const allowed = uids.map(stryMutAct_9fa48("31453") ? () => undefined : (stryCov_9fa48("31453"), (uid, index) => stryMutAct_9fa48("31456") ? hasUserPrivilege[index] && hasGroupPrivilege[index] : stryMutAct_9fa48("31455") ? false : stryMutAct_9fa48("31454") ? true : (stryCov_9fa48("31454", "31455", "31456"), hasUserPrivilege[index] || hasGroupPrivilege[index])));
    const result = await plugins.hooks.fire(stryMutAct_9fa48("31457") ? "" : (stryCov_9fa48("31457"), 'filter:privileges:isUsersAllowedTo'), stryMutAct_9fa48("31458") ? {} : (stryCov_9fa48("31458"), {
      allowed: allowed,
      privilege: privilege,
      uids: uids,
      cid: cid
    }));
    return result.allowed;
  }
};
helpers.isAllowedTo = async function (privilege, uidOrGroupName, cid) {
  if (stryMutAct_9fa48("31459")) {
    {}
  } else {
    stryCov_9fa48("31459");
    let allowed;
    if (stryMutAct_9fa48("31462") ? Array.isArray(privilege) || !Array.isArray(cid) : stryMutAct_9fa48("31461") ? false : stryMutAct_9fa48("31460") ? true : (stryCov_9fa48("31460", "31461", "31462"), Array.isArray(privilege) && (stryMutAct_9fa48("31463") ? Array.isArray(cid) : (stryCov_9fa48("31463"), !Array.isArray(cid))))) {
      if (stryMutAct_9fa48("31464")) {
        {}
      } else {
        stryCov_9fa48("31464");
        allowed = await isAllowedToPrivileges(privilege, uidOrGroupName, cid);
      }
    } else if (stryMutAct_9fa48("31467") ? Array.isArray(cid) || !Array.isArray(privilege) : stryMutAct_9fa48("31466") ? false : stryMutAct_9fa48("31465") ? true : (stryCov_9fa48("31465", "31466", "31467"), Array.isArray(cid) && (stryMutAct_9fa48("31468") ? Array.isArray(privilege) : (stryCov_9fa48("31468"), !Array.isArray(privilege))))) {
      if (stryMutAct_9fa48("31469")) {
        {}
      } else {
        stryCov_9fa48("31469");
        allowed = await isAllowedToCids(privilege, uidOrGroupName, cid);
      }
    }
    if (stryMutAct_9fa48("31471") ? false : stryMutAct_9fa48("31470") ? true : (stryCov_9fa48("31470", "31471"), allowed)) {
      if (stryMutAct_9fa48("31472")) {
        {}
      } else {
        stryCov_9fa48("31472");
        ({
          allowed
        } = await plugins.hooks.fire(stryMutAct_9fa48("31473") ? "" : (stryCov_9fa48("31473"), 'filter:privileges:isAllowedTo'), stryMutAct_9fa48("31474") ? {} : (stryCov_9fa48("31474"), {
          allowed: allowed,
          privilege: privilege,
          uid: uidOrGroupName,
          cid: cid
        })));
        return allowed;
      }
    }
    throw new Error(stryMutAct_9fa48("31475") ? "" : (stryCov_9fa48("31475"), '[[error:invalid-data]]'));
  }
};
async function isAllowedToCids(privilege, uidOrGroupName, cids) {
  if (stryMutAct_9fa48("31476")) {
    {}
  } else {
    stryCov_9fa48("31476");
    if (stryMutAct_9fa48("31479") ? false : stryMutAct_9fa48("31478") ? true : stryMutAct_9fa48("31477") ? privilege : (stryCov_9fa48("31477", "31478", "31479"), !privilege)) {
      if (stryMutAct_9fa48("31480")) {
        {}
      } else {
        stryCov_9fa48("31480");
        return cids.map(stryMutAct_9fa48("31481") ? () => undefined : (stryCov_9fa48("31481"), () => stryMutAct_9fa48("31482") ? true : (stryCov_9fa48("31482"), false)));
      }
    }
    const groupKeys = cids.map(stryMutAct_9fa48("31483") ? () => undefined : (stryCov_9fa48("31483"), cid => stryMutAct_9fa48("31484") ? `` : (stryCov_9fa48("31484"), `cid:${cid}:privileges:groups:${privilege}`)));

    // Group handling
    if (stryMutAct_9fa48("31487") ? isNaN(parseInt(uidOrGroupName, 10)) || (uidOrGroupName || '').length : stryMutAct_9fa48("31486") ? false : stryMutAct_9fa48("31485") ? true : (stryCov_9fa48("31485", "31486", "31487"), isNaN(parseInt(uidOrGroupName, 10)) && (stryMutAct_9fa48("31490") ? uidOrGroupName && '' : stryMutAct_9fa48("31489") ? false : stryMutAct_9fa48("31488") ? true : (stryCov_9fa48("31488", "31489", "31490"), uidOrGroupName || (stryMutAct_9fa48("31491") ? "Stryker was here!" : (stryCov_9fa48("31491"), '')))).length)) {
      if (stryMutAct_9fa48("31492")) {
        {}
      } else {
        stryCov_9fa48("31492");
        return await checkIfAllowedGroup(uidOrGroupName, groupKeys);
      }
    }

    // User handling
    if (stryMutAct_9fa48("31496") ? parseInt(uidOrGroupName, 10) > 0 : stryMutAct_9fa48("31495") ? parseInt(uidOrGroupName, 10) < 0 : stryMutAct_9fa48("31494") ? false : stryMutAct_9fa48("31493") ? true : (stryCov_9fa48("31493", "31494", "31495", "31496"), parseInt(uidOrGroupName, 10) <= 0)) {
      if (stryMutAct_9fa48("31497")) {
        {}
      } else {
        stryCov_9fa48("31497");
        return await isSystemGroupAllowedToCids(privilege, uidOrGroupName, cids);
      }
    }
    const userKeys = cids.map(stryMutAct_9fa48("31498") ? () => undefined : (stryCov_9fa48("31498"), cid => stryMutAct_9fa48("31499") ? `` : (stryCov_9fa48("31499"), `cid:${cid}:privileges:${privilege}`)));
    return await checkIfAllowedUser(uidOrGroupName, userKeys, groupKeys);
  }
}
async function isAllowedToPrivileges(privileges, uidOrGroupName, cid) {
  if (stryMutAct_9fa48("31500")) {
    {}
  } else {
    stryCov_9fa48("31500");
    const groupKeys = privileges.map(stryMutAct_9fa48("31501") ? () => undefined : (stryCov_9fa48("31501"), privilege => stryMutAct_9fa48("31502") ? `` : (stryCov_9fa48("31502"), `cid:${cid}:privileges:groups:${privilege}`)));
    // Group handling
    if (stryMutAct_9fa48("31505") ? isNaN(parseInt(uidOrGroupName, 10)) || (uidOrGroupName || '').length : stryMutAct_9fa48("31504") ? false : stryMutAct_9fa48("31503") ? true : (stryCov_9fa48("31503", "31504", "31505"), isNaN(parseInt(uidOrGroupName, 10)) && (stryMutAct_9fa48("31508") ? uidOrGroupName && '' : stryMutAct_9fa48("31507") ? false : stryMutAct_9fa48("31506") ? true : (stryCov_9fa48("31506", "31507", "31508"), uidOrGroupName || (stryMutAct_9fa48("31509") ? "Stryker was here!" : (stryCov_9fa48("31509"), '')))).length)) {
      if (stryMutAct_9fa48("31510")) {
        {}
      } else {
        stryCov_9fa48("31510");
        return await checkIfAllowedGroup(uidOrGroupName, groupKeys);
      }
    }

    // User handling
    if (stryMutAct_9fa48("31514") ? parseInt(uidOrGroupName, 10) > 0 : stryMutAct_9fa48("31513") ? parseInt(uidOrGroupName, 10) < 0 : stryMutAct_9fa48("31512") ? false : stryMutAct_9fa48("31511") ? true : (stryCov_9fa48("31511", "31512", "31513", "31514"), parseInt(uidOrGroupName, 10) <= 0)) {
      if (stryMutAct_9fa48("31515")) {
        {}
      } else {
        stryCov_9fa48("31515");
        return await isSystemGroupAllowedToPrivileges(privileges, uidOrGroupName, cid);
      }
    }
    const userKeys = privileges.map(stryMutAct_9fa48("31516") ? () => undefined : (stryCov_9fa48("31516"), privilege => stryMutAct_9fa48("31517") ? `` : (stryCov_9fa48("31517"), `cid:${cid}:privileges:${privilege}`)));
    return await checkIfAllowedUser(uidOrGroupName, userKeys, groupKeys);
  }
}
async function checkIfAllowedUser(uid, userKeys, groupKeys) {
  if (stryMutAct_9fa48("31518")) {
    {}
  } else {
    stryCov_9fa48("31518");
    const [hasUserPrivilege, hasGroupPrivilege] = await Promise.all(stryMutAct_9fa48("31519") ? [] : (stryCov_9fa48("31519"), [groups.isMemberOfGroups(uid, userKeys), groups.isMemberOfGroupsList(uid, groupKeys)]));
    return userKeys.map(stryMutAct_9fa48("31520") ? () => undefined : (stryCov_9fa48("31520"), (key, index) => stryMutAct_9fa48("31523") ? hasUserPrivilege[index] && hasGroupPrivilege[index] : stryMutAct_9fa48("31522") ? false : stryMutAct_9fa48("31521") ? true : (stryCov_9fa48("31521", "31522", "31523"), hasUserPrivilege[index] || hasGroupPrivilege[index])));
  }
}
async function checkIfAllowedGroup(groupName, groupKeys) {
  if (stryMutAct_9fa48("31524")) {
    {}
  } else {
    stryCov_9fa48("31524");
    const sets = await Promise.all(stryMutAct_9fa48("31525") ? [] : (stryCov_9fa48("31525"), [groups.isMemberOfGroups(groupName, groupKeys), groups.isMemberOfGroups(stryMutAct_9fa48("31526") ? "" : (stryCov_9fa48("31526"), 'registered-users'), groupKeys)]));
    return groupKeys.map(stryMutAct_9fa48("31527") ? () => undefined : (stryCov_9fa48("31527"), (key, index) => stryMutAct_9fa48("31530") ? sets[0][index] && sets[1][index] : stryMutAct_9fa48("31529") ? false : stryMutAct_9fa48("31528") ? true : (stryCov_9fa48("31528", "31529", "31530"), sets[0][index] || sets[1][index])));
  }
}
async function isSystemGroupAllowedToCids(privilege, uid, cids) {
  if (stryMutAct_9fa48("31531")) {
    {}
  } else {
    stryCov_9fa48("31531");
    const groupKeys = cids.map(stryMutAct_9fa48("31532") ? () => undefined : (stryCov_9fa48("31532"), cid => stryMutAct_9fa48("31533") ? `` : (stryCov_9fa48("31533"), `cid:${cid}:privileges:groups:${privilege}`)));
    return await groups.isMemberOfGroups(uidToSystemGroup[uid], groupKeys);
  }
}
async function isSystemGroupAllowedToPrivileges(privileges, uid, cid) {
  if (stryMutAct_9fa48("31534")) {
    {}
  } else {
    stryCov_9fa48("31534");
    const groupKeys = privileges.map(stryMutAct_9fa48("31535") ? () => undefined : (stryCov_9fa48("31535"), privilege => stryMutAct_9fa48("31536") ? `` : (stryCov_9fa48("31536"), `cid:${cid}:privileges:groups:${privilege}`)));
    return await groups.isMemberOfGroups(uidToSystemGroup[uid], groupKeys);
  }
}
helpers.getUserPrivileges = async function (cid, userPrivileges) {
  if (stryMutAct_9fa48("31537")) {
    {}
  } else {
    stryCov_9fa48("31537");
    let memberSets = await groups.getMembersOfGroups(userPrivileges.map(stryMutAct_9fa48("31538") ? () => undefined : (stryCov_9fa48("31538"), privilege => stryMutAct_9fa48("31539") ? `` : (stryCov_9fa48("31539"), `cid:${cid}:privileges:${privilege}`))));
    memberSets = memberSets.map(stryMutAct_9fa48("31540") ? () => undefined : (stryCov_9fa48("31540"), set => set.map(stryMutAct_9fa48("31541") ? () => undefined : (stryCov_9fa48("31541"), uid => parseInt(uid, 10)))));
    const members = _.uniq(_.flatten(memberSets));
    const memberData = await user.getUsersFields(members, stryMutAct_9fa48("31542") ? [] : (stryCov_9fa48("31542"), [stryMutAct_9fa48("31543") ? "" : (stryCov_9fa48("31543"), 'picture'), stryMutAct_9fa48("31544") ? "" : (stryCov_9fa48("31544"), 'username'), stryMutAct_9fa48("31545") ? "" : (stryCov_9fa48("31545"), 'banned')]));
    memberData.forEach(member => {
      if (stryMutAct_9fa48("31546")) {
        {}
      } else {
        stryCov_9fa48("31546");
        member.privileges = {};
        for (let x = 0, numPrivs = userPrivileges.length; stryMutAct_9fa48("31549") ? x >= numPrivs : stryMutAct_9fa48("31548") ? x <= numPrivs : stryMutAct_9fa48("31547") ? false : (stryCov_9fa48("31547", "31548", "31549"), x < numPrivs); stryMutAct_9fa48("31550") ? x -= 1 : (stryCov_9fa48("31550"), x += 1)) {
          if (stryMutAct_9fa48("31551")) {
            {}
          } else {
            stryCov_9fa48("31551");
            member.privileges[userPrivileges[x]] = memberSets[x].includes(parseInt(member.uid, 10));
          }
        }
      }
    });
    return memberData;
  }
};
helpers.getGroupPrivileges = async function (cid, groupPrivileges) {
  if (stryMutAct_9fa48("31552")) {
    {}
  } else {
    stryCov_9fa48("31552");
    const [memberSets, allGroupNames] = await Promise.all(stryMutAct_9fa48("31553") ? [] : (stryCov_9fa48("31553"), [groups.getMembersOfGroups(groupPrivileges.map(stryMutAct_9fa48("31554") ? () => undefined : (stryCov_9fa48("31554"), privilege => stryMutAct_9fa48("31555") ? `` : (stryCov_9fa48("31555"), `cid:${cid}:privileges:${privilege}`)))), groups.getGroups(stryMutAct_9fa48("31556") ? "" : (stryCov_9fa48("31556"), 'groups:createtime'), 0, stryMutAct_9fa48("31557") ? +1 : (stryCov_9fa48("31557"), -1))]));
    const uniqueGroups = _.uniq(_.flatten(memberSets));
    let groupNames = stryMutAct_9fa48("31558") ? allGroupNames : (stryCov_9fa48("31558"), allGroupNames.filter(stryMutAct_9fa48("31559") ? () => undefined : (stryCov_9fa48("31559"), groupName => stryMutAct_9fa48("31562") ? !groupName.includes(':privileges:') || uniqueGroups.includes(groupName) : stryMutAct_9fa48("31561") ? false : stryMutAct_9fa48("31560") ? true : (stryCov_9fa48("31560", "31561", "31562"), (stryMutAct_9fa48("31563") ? groupName.includes(':privileges:') : (stryCov_9fa48("31563"), !groupName.includes(stryMutAct_9fa48("31564") ? "" : (stryCov_9fa48("31564"), ':privileges:')))) && uniqueGroups.includes(groupName)))));
    groupNames = groups.ephemeralGroups.concat(groupNames);
    moveToFront(groupNames, groups.BANNED_USERS);
    moveToFront(groupNames, stryMutAct_9fa48("31565") ? "" : (stryCov_9fa48("31565"), 'Global Moderators'));
    moveToFront(groupNames, stryMutAct_9fa48("31566") ? "" : (stryCov_9fa48("31566"), 'unverified-users'));
    moveToFront(groupNames, stryMutAct_9fa48("31567") ? "" : (stryCov_9fa48("31567"), 'verified-users'));
    moveToFront(groupNames, stryMutAct_9fa48("31568") ? "" : (stryCov_9fa48("31568"), 'registered-users'));
    const adminIndex = groupNames.indexOf(stryMutAct_9fa48("31569") ? "" : (stryCov_9fa48("31569"), 'administrators'));
    if (stryMutAct_9fa48("31572") ? adminIndex === -1 : stryMutAct_9fa48("31571") ? false : stryMutAct_9fa48("31570") ? true : (stryCov_9fa48("31570", "31571", "31572"), adminIndex !== (stryMutAct_9fa48("31573") ? +1 : (stryCov_9fa48("31573"), -1)))) {
      if (stryMutAct_9fa48("31574")) {
        {}
      } else {
        stryCov_9fa48("31574");
        groupNames.splice(adminIndex, 1);
      }
    }
    const groupData = await groups.getGroupsFields(groupNames, stryMutAct_9fa48("31575") ? [] : (stryCov_9fa48("31575"), [stryMutAct_9fa48("31576") ? "" : (stryCov_9fa48("31576"), 'private'), stryMutAct_9fa48("31577") ? "" : (stryCov_9fa48("31577"), 'system')]));
    const memberData = groupNames.map((member, index) => {
      if (stryMutAct_9fa48("31578")) {
        {}
      } else {
        stryCov_9fa48("31578");
        const memberPrivs = {};
        for (let x = 0, numPrivs = groupPrivileges.length; stryMutAct_9fa48("31581") ? x >= numPrivs : stryMutAct_9fa48("31580") ? x <= numPrivs : stryMutAct_9fa48("31579") ? false : (stryCov_9fa48("31579", "31580", "31581"), x < numPrivs); stryMutAct_9fa48("31582") ? x -= 1 : (stryCov_9fa48("31582"), x += 1)) {
          if (stryMutAct_9fa48("31583")) {
            {}
          } else {
            stryCov_9fa48("31583");
            memberPrivs[groupPrivileges[x]] = memberSets[x].includes(member);
          }
        }
        return stryMutAct_9fa48("31584") ? {} : (stryCov_9fa48("31584"), {
          name: validator.escape(member),
          nameEscaped: translator.escape(validator.escape(member)),
          privileges: memberPrivs,
          isPrivate: stryMutAct_9fa48("31587") ? groupData[index] || !!groupData[index].private : stryMutAct_9fa48("31586") ? false : stryMutAct_9fa48("31585") ? true : (stryCov_9fa48("31585", "31586", "31587"), groupData[index] && (stryMutAct_9fa48("31588") ? !groupData[index].private : (stryCov_9fa48("31588"), !(stryMutAct_9fa48("31589") ? groupData[index].private : (stryCov_9fa48("31589"), !groupData[index].private))))),
          isSystem: stryMutAct_9fa48("31592") ? groupData[index] || !!groupData[index].system : stryMutAct_9fa48("31591") ? false : stryMutAct_9fa48("31590") ? true : (stryCov_9fa48("31590", "31591", "31592"), groupData[index] && (stryMutAct_9fa48("31593") ? !groupData[index].system : (stryCov_9fa48("31593"), !(stryMutAct_9fa48("31594") ? groupData[index].system : (stryCov_9fa48("31594"), !groupData[index].system)))))
        });
      }
    });
    return memberData;
  }
};
function moveToFront(groupNames, groupToMove) {
  if (stryMutAct_9fa48("31595")) {
    {}
  } else {
    stryCov_9fa48("31595");
    const index = groupNames.indexOf(groupToMove);
    if (stryMutAct_9fa48("31598") ? index === -1 : stryMutAct_9fa48("31597") ? false : stryMutAct_9fa48("31596") ? true : (stryCov_9fa48("31596", "31597", "31598"), index !== (stryMutAct_9fa48("31599") ? +1 : (stryCov_9fa48("31599"), -1)))) {
      if (stryMutAct_9fa48("31600")) {
        {}
      } else {
        stryCov_9fa48("31600");
        groupNames.splice(0, 0, groupNames.splice(index, 1)[0]);
      }
    } else {
      if (stryMutAct_9fa48("31601")) {
        {}
      } else {
        stryCov_9fa48("31601");
        groupNames.unshift(groupToMove);
      }
    }
  }
}
helpers.giveOrRescind = async function (method, privileges, cids, members) {
  if (stryMutAct_9fa48("31602")) {
    {}
  } else {
    stryCov_9fa48("31602");
    members = Array.isArray(members) ? members : stryMutAct_9fa48("31603") ? [] : (stryCov_9fa48("31603"), [members]);
    cids = Array.isArray(cids) ? cids : stryMutAct_9fa48("31604") ? [] : (stryCov_9fa48("31604"), [cids]);
    for (const member of members) {
      if (stryMutAct_9fa48("31605")) {
        {}
      } else {
        stryCov_9fa48("31605");
        const groupKeys = stryMutAct_9fa48("31606") ? ["Stryker was here"] : (stryCov_9fa48("31606"), []);
        cids.forEach(cid => {
          if (stryMutAct_9fa48("31607")) {
            {}
          } else {
            stryCov_9fa48("31607");
            privileges.forEach(privilege => {
              if (stryMutAct_9fa48("31608")) {
                {}
              } else {
                stryCov_9fa48("31608");
                groupKeys.push(stryMutAct_9fa48("31609") ? `` : (stryCov_9fa48("31609"), `cid:${cid}:privileges:${privilege}`));
              }
            });
          }
        });
        /* eslint-disable no-await-in-loop */
        await method(groupKeys, member);
      }
    }
  }
};
helpers.userOrGroupPrivileges = async function (cid, uidOrGroup, privilegeList) {
  if (stryMutAct_9fa48("31610")) {
    {}
  } else {
    stryCov_9fa48("31610");
    const groupNames = privilegeList.map(stryMutAct_9fa48("31611") ? () => undefined : (stryCov_9fa48("31611"), privilege => stryMutAct_9fa48("31612") ? `` : (stryCov_9fa48("31612"), `cid:${cid}:privileges:${privilege}`)));
    const isMembers = await groups.isMemberOfGroups(uidOrGroup, groupNames);
    return _.zipObject(privilegeList, isMembers);
  }
};
require('../promisify')(helpers);