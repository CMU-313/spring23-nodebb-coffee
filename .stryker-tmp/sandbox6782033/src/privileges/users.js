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
const user = require('../user');
const meta = require('../meta');
const groups = require('../groups');
const plugins = require('../plugins');
const helpers = require('./helpers');
const privsUsers = module.exports;
privsUsers.isAdministrator = async function (uid) {
  if (stryMutAct_9fa48("32176")) {
    {}
  } else {
    stryCov_9fa48("32176");
    return await isGroupMember(uid, stryMutAct_9fa48("32177") ? "" : (stryCov_9fa48("32177"), 'administrators'));
  }
};
privsUsers.isGlobalModerator = async function (uid) {
  if (stryMutAct_9fa48("32178")) {
    {}
  } else {
    stryCov_9fa48("32178");
    return await isGroupMember(uid, stryMutAct_9fa48("32179") ? "" : (stryCov_9fa48("32179"), 'Global Moderators'));
  }
};
async function isGroupMember(uid, groupName) {
  if (stryMutAct_9fa48("32180")) {
    {}
  } else {
    stryCov_9fa48("32180");
    return await groups[Array.isArray(uid) ? stryMutAct_9fa48("32181") ? "" : (stryCov_9fa48("32181"), 'isMembers') : stryMutAct_9fa48("32182") ? "" : (stryCov_9fa48("32182"), 'isMember')](uid, groupName);
  }
}
privsUsers.isModerator = async function (uid, cid) {
  if (stryMutAct_9fa48("32183")) {
    {}
  } else {
    stryCov_9fa48("32183");
    if (stryMutAct_9fa48("32185") ? false : stryMutAct_9fa48("32184") ? true : (stryCov_9fa48("32184", "32185"), Array.isArray(cid))) {
      if (stryMutAct_9fa48("32186")) {
        {}
      } else {
        stryCov_9fa48("32186");
        return await isModeratorOfCategories(cid, uid);
      }
    } else if (stryMutAct_9fa48("32188") ? false : stryMutAct_9fa48("32187") ? true : (stryCov_9fa48("32187", "32188"), Array.isArray(uid))) {
      if (stryMutAct_9fa48("32189")) {
        {}
      } else {
        stryCov_9fa48("32189");
        return await isModeratorsOfCategory(cid, uid);
      }
    }
    return await isModeratorOfCategory(cid, uid);
  }
};
async function isModeratorOfCategories(cids, uid) {
  if (stryMutAct_9fa48("32190")) {
    {}
  } else {
    stryCov_9fa48("32190");
    if (stryMutAct_9fa48("32194") ? parseInt(uid, 10) > 0 : stryMutAct_9fa48("32193") ? parseInt(uid, 10) < 0 : stryMutAct_9fa48("32192") ? false : stryMutAct_9fa48("32191") ? true : (stryCov_9fa48("32191", "32192", "32193", "32194"), parseInt(uid, 10) <= 0)) {
      if (stryMutAct_9fa48("32195")) {
        {}
      } else {
        stryCov_9fa48("32195");
        return await filterIsModerator(cids, uid, cids.map(stryMutAct_9fa48("32196") ? () => undefined : (stryCov_9fa48("32196"), () => stryMutAct_9fa48("32197") ? true : (stryCov_9fa48("32197"), false))));
      }
    }
    const isGlobalModerator = await privsUsers.isGlobalModerator(uid);
    if (stryMutAct_9fa48("32199") ? false : stryMutAct_9fa48("32198") ? true : (stryCov_9fa48("32198", "32199"), isGlobalModerator)) {
      if (stryMutAct_9fa48("32200")) {
        {}
      } else {
        stryCov_9fa48("32200");
        return await filterIsModerator(cids, uid, cids.map(stryMutAct_9fa48("32201") ? () => undefined : (stryCov_9fa48("32201"), () => stryMutAct_9fa48("32202") ? false : (stryCov_9fa48("32202"), true))));
      }
    }
    const uniqueCids = _.uniq(cids);
    const isAllowed = await helpers.isAllowedTo(stryMutAct_9fa48("32203") ? "" : (stryCov_9fa48("32203"), 'moderate'), uid, uniqueCids);
    const cidToIsAllowed = _.zipObject(uniqueCids, isAllowed);
    const isModerator = cids.map(stryMutAct_9fa48("32204") ? () => undefined : (stryCov_9fa48("32204"), cid => cidToIsAllowed[cid]));
    return await filterIsModerator(cids, uid, isModerator);
  }
}
async function isModeratorsOfCategory(cid, uids) {
  if (stryMutAct_9fa48("32205")) {
    {}
  } else {
    stryCov_9fa48("32205");
    const [check1, check2, check3] = await Promise.all(stryMutAct_9fa48("32206") ? [] : (stryCov_9fa48("32206"), [privsUsers.isGlobalModerator(uids), groups.isMembers(uids, stryMutAct_9fa48("32207") ? `` : (stryCov_9fa48("32207"), `cid:${cid}:privileges:moderate`)), groups.isMembersOfGroupList(uids, stryMutAct_9fa48("32208") ? `` : (stryCov_9fa48("32208"), `cid:${cid}:privileges:groups:moderate`))]));
    const isModerator = uids.map(stryMutAct_9fa48("32209") ? () => undefined : (stryCov_9fa48("32209"), (uid, idx) => stryMutAct_9fa48("32212") ? (check1[idx] || check2[idx]) && check3[idx] : stryMutAct_9fa48("32211") ? false : stryMutAct_9fa48("32210") ? true : (stryCov_9fa48("32210", "32211", "32212"), (stryMutAct_9fa48("32214") ? check1[idx] && check2[idx] : stryMutAct_9fa48("32213") ? false : (stryCov_9fa48("32213", "32214"), check1[idx] || check2[idx])) || check3[idx])));
    return await filterIsModerator(cid, uids, isModerator);
  }
}
async function isModeratorOfCategory(cid, uid) {
  if (stryMutAct_9fa48("32215")) {
    {}
  } else {
    stryCov_9fa48("32215");
    const result = await isModeratorOfCategories(stryMutAct_9fa48("32216") ? [] : (stryCov_9fa48("32216"), [cid]), uid);
    return result ? result[0] : stryMutAct_9fa48("32217") ? true : (stryCov_9fa48("32217"), false);
  }
}
async function filterIsModerator(cid, uid, isModerator) {
  if (stryMutAct_9fa48("32218")) {
    {}
  } else {
    stryCov_9fa48("32218");
    const data = await plugins.hooks.fire(stryMutAct_9fa48("32219") ? "" : (stryCov_9fa48("32219"), 'filter:user.isModerator'), stryMutAct_9fa48("32220") ? {} : (stryCov_9fa48("32220"), {
      uid: uid,
      cid: cid,
      isModerator: isModerator
    }));
    if (stryMutAct_9fa48("32223") ? Array.isArray(uid) || Array.isArray(cid) || !Array.isArray(data.isModerator) : stryMutAct_9fa48("32222") ? false : stryMutAct_9fa48("32221") ? true : (stryCov_9fa48("32221", "32222", "32223"), (stryMutAct_9fa48("32225") ? Array.isArray(uid) && Array.isArray(cid) : stryMutAct_9fa48("32224") ? true : (stryCov_9fa48("32224", "32225"), Array.isArray(uid) || Array.isArray(cid))) && (stryMutAct_9fa48("32226") ? Array.isArray(data.isModerator) : (stryCov_9fa48("32226"), !Array.isArray(data.isModerator))))) {
      if (stryMutAct_9fa48("32227")) {
        {}
      } else {
        stryCov_9fa48("32227");
        throw new Error(stryMutAct_9fa48("32228") ? "" : (stryCov_9fa48("32228"), 'filter:user.isModerator - i/o mismatch'));
      }
    }
    return data.isModerator;
  }
}
privsUsers.canEdit = async function (callerUid, uid) {
  if (stryMutAct_9fa48("32229")) {
    {}
  } else {
    stryCov_9fa48("32229");
    if (stryMutAct_9fa48("32232") ? parseInt(callerUid, 10) !== parseInt(uid, 10) : stryMutAct_9fa48("32231") ? false : stryMutAct_9fa48("32230") ? true : (stryCov_9fa48("32230", "32231", "32232"), parseInt(callerUid, 10) === parseInt(uid, 10))) {
      if (stryMutAct_9fa48("32233")) {
        {}
      } else {
        stryCov_9fa48("32233");
        return stryMutAct_9fa48("32234") ? false : (stryCov_9fa48("32234"), true);
      }
    }
    const [isAdmin, isGlobalMod, isTargetAdmin] = await Promise.all(stryMutAct_9fa48("32235") ? [] : (stryCov_9fa48("32235"), [privsUsers.isAdministrator(callerUid), privsUsers.isGlobalModerator(callerUid), privsUsers.isAdministrator(uid)]));
    const data = await plugins.hooks.fire(stryMutAct_9fa48("32236") ? "" : (stryCov_9fa48("32236"), 'filter:user.canEdit'), stryMutAct_9fa48("32237") ? {} : (stryCov_9fa48("32237"), {
      isAdmin: isAdmin,
      isGlobalMod: isGlobalMod,
      isTargetAdmin: isTargetAdmin,
      canEdit: stryMutAct_9fa48("32240") ? isAdmin && isGlobalMod && !isTargetAdmin : stryMutAct_9fa48("32239") ? false : stryMutAct_9fa48("32238") ? true : (stryCov_9fa48("32238", "32239", "32240"), isAdmin || (stryMutAct_9fa48("32242") ? isGlobalMod || !isTargetAdmin : stryMutAct_9fa48("32241") ? false : (stryCov_9fa48("32241", "32242"), isGlobalMod && (stryMutAct_9fa48("32243") ? isTargetAdmin : (stryCov_9fa48("32243"), !isTargetAdmin))))),
      callerUid: callerUid,
      uid: uid
    }));
    return data.canEdit;
  }
};
privsUsers.canBanUser = async function (callerUid, uid) {
  if (stryMutAct_9fa48("32244")) {
    {}
  } else {
    stryCov_9fa48("32244");
    const privsGlobal = require('./global');
    const [canBan, isTargetAdmin] = await Promise.all(stryMutAct_9fa48("32245") ? [] : (stryCov_9fa48("32245"), [privsGlobal.can(stryMutAct_9fa48("32246") ? "" : (stryCov_9fa48("32246"), 'ban'), callerUid), privsUsers.isAdministrator(uid)]));
    const data = await plugins.hooks.fire(stryMutAct_9fa48("32247") ? "" : (stryCov_9fa48("32247"), 'filter:user.canBanUser'), stryMutAct_9fa48("32248") ? {} : (stryCov_9fa48("32248"), {
      canBan: stryMutAct_9fa48("32251") ? canBan || !isTargetAdmin : stryMutAct_9fa48("32250") ? false : stryMutAct_9fa48("32249") ? true : (stryCov_9fa48("32249", "32250", "32251"), canBan && (stryMutAct_9fa48("32252") ? isTargetAdmin : (stryCov_9fa48("32252"), !isTargetAdmin))),
      callerUid: callerUid,
      uid: uid
    }));
    return data.canBan;
  }
};
privsUsers.canMuteUser = async function (callerUid, uid) {
  if (stryMutAct_9fa48("32253")) {
    {}
  } else {
    stryCov_9fa48("32253");
    const privsGlobal = require('./global');
    const [canMute, isTargetAdmin] = await Promise.all(stryMutAct_9fa48("32254") ? [] : (stryCov_9fa48("32254"), [privsGlobal.can(stryMutAct_9fa48("32255") ? "" : (stryCov_9fa48("32255"), 'mute'), callerUid), privsUsers.isAdministrator(uid)]));
    const data = await plugins.hooks.fire(stryMutAct_9fa48("32256") ? "" : (stryCov_9fa48("32256"), 'filter:user.canMuteUser'), stryMutAct_9fa48("32257") ? {} : (stryCov_9fa48("32257"), {
      canMute: stryMutAct_9fa48("32260") ? canMute || !isTargetAdmin : stryMutAct_9fa48("32259") ? false : stryMutAct_9fa48("32258") ? true : (stryCov_9fa48("32258", "32259", "32260"), canMute && (stryMutAct_9fa48("32261") ? isTargetAdmin : (stryCov_9fa48("32261"), !isTargetAdmin))),
      callerUid: callerUid,
      uid: uid
    }));
    return data.canMute;
  }
};
privsUsers.canFlag = async function (callerUid, uid) {
  if (stryMutAct_9fa48("32262")) {
    {}
  } else {
    stryCov_9fa48("32262");
    const [userReputation, targetPrivileged, reporterPrivileged] = await Promise.all(stryMutAct_9fa48("32263") ? [] : (stryCov_9fa48("32263"), [user.getUserField(callerUid, stryMutAct_9fa48("32264") ? "" : (stryCov_9fa48("32264"), 'reputation')), user.isPrivileged(uid), user.isPrivileged(callerUid)]));
    const minimumReputation = meta.config[stryMutAct_9fa48("32265") ? "" : (stryCov_9fa48("32265"), 'min:rep:flag')];
    let canFlag = stryMutAct_9fa48("32268") ? reporterPrivileged && userReputation >= minimumReputation : stryMutAct_9fa48("32267") ? false : stryMutAct_9fa48("32266") ? true : (stryCov_9fa48("32266", "32267", "32268"), reporterPrivileged || (stryMutAct_9fa48("32271") ? userReputation < minimumReputation : stryMutAct_9fa48("32270") ? userReputation > minimumReputation : stryMutAct_9fa48("32269") ? false : (stryCov_9fa48("32269", "32270", "32271"), userReputation >= minimumReputation)));
    if (stryMutAct_9fa48("32274") ? targetPrivileged || !reporterPrivileged : stryMutAct_9fa48("32273") ? false : stryMutAct_9fa48("32272") ? true : (stryCov_9fa48("32272", "32273", "32274"), targetPrivileged && (stryMutAct_9fa48("32275") ? reporterPrivileged : (stryCov_9fa48("32275"), !reporterPrivileged)))) {
      if (stryMutAct_9fa48("32276")) {
        {}
      } else {
        stryCov_9fa48("32276");
        canFlag = stryMutAct_9fa48("32277") ? true : (stryCov_9fa48("32277"), false);
      }
    }
    return stryMutAct_9fa48("32278") ? {} : (stryCov_9fa48("32278"), {
      flag: canFlag
    });
  }
};
privsUsers.hasBanPrivilege = stryMutAct_9fa48("32279") ? () => undefined : (stryCov_9fa48("32279"), async uid => await hasGlobalPrivilege(stryMutAct_9fa48("32280") ? "" : (stryCov_9fa48("32280"), 'ban'), uid));
privsUsers.hasMutePrivilege = stryMutAct_9fa48("32281") ? () => undefined : (stryCov_9fa48("32281"), async uid => await hasGlobalPrivilege(stryMutAct_9fa48("32282") ? "" : (stryCov_9fa48("32282"), 'mute'), uid));
privsUsers.hasInvitePrivilege = stryMutAct_9fa48("32283") ? () => undefined : (stryCov_9fa48("32283"), async uid => await hasGlobalPrivilege(stryMutAct_9fa48("32284") ? "" : (stryCov_9fa48("32284"), 'invite'), uid));
async function hasGlobalPrivilege(privilege, uid) {
  if (stryMutAct_9fa48("32285")) {
    {}
  } else {
    stryCov_9fa48("32285");
    const privsGlobal = require('./global');
    const privilegeName = privilege.split(stryMutAct_9fa48("32286") ? "" : (stryCov_9fa48("32286"), '-')).map(stryMutAct_9fa48("32287") ? () => undefined : (stryCov_9fa48("32287"), word => stryMutAct_9fa48("32288") ? word.slice(0, 1).toUpperCase() - word.slice(1) : (stryCov_9fa48("32288"), (stryMutAct_9fa48("32290") ? word.toUpperCase() : stryMutAct_9fa48("32289") ? word.slice(0, 1).toLowerCase() : (stryCov_9fa48("32289", "32290"), word.slice(0, 1).toUpperCase())) + (stryMutAct_9fa48("32291") ? word : (stryCov_9fa48("32291"), word.slice(1)))))).join(stryMutAct_9fa48("32292") ? "Stryker was here!" : (stryCov_9fa48("32292"), ''));
    let payload = stryMutAct_9fa48("32293") ? {} : (stryCov_9fa48("32293"), {
      uid
    });
    payload[stryMutAct_9fa48("32294") ? `` : (stryCov_9fa48("32294"), `can${privilegeName}`)] = await privsGlobal.can(privilege, uid);
    payload = await plugins.hooks.fire(stryMutAct_9fa48("32295") ? `` : (stryCov_9fa48("32295"), `filter:user.has${privilegeName}Privilege`), payload);
    return payload[stryMutAct_9fa48("32296") ? `` : (stryCov_9fa48("32296"), `can${privilegeName}`)];
  }
}