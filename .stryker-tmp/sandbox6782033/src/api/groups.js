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
const validator = require('validator');
const privileges = require('../privileges');
const events = require('../events');
const groups = require('../groups');
const user = require('../user');
const meta = require('../meta');
const notifications = require('../notifications');
const slugify = require('../slugify');
const groupsAPI = module.exports;
groupsAPI.create = async function (caller, data) {
  if (stryMutAct_9fa48("598")) {
    {}
  } else {
    stryCov_9fa48("598");
    if (stryMutAct_9fa48("601") ? false : stryMutAct_9fa48("600") ? true : stryMutAct_9fa48("599") ? caller.uid : (stryCov_9fa48("599", "600", "601"), !caller.uid)) {
      if (stryMutAct_9fa48("602")) {
        {}
      } else {
        stryCov_9fa48("602");
        throw new Error(stryMutAct_9fa48("603") ? "" : (stryCov_9fa48("603"), '[[error:no-privileges]]'));
      }
    } else if (stryMutAct_9fa48("606") ? false : stryMutAct_9fa48("605") ? true : stryMutAct_9fa48("604") ? data : (stryCov_9fa48("604", "605", "606"), !data)) {
      if (stryMutAct_9fa48("607")) {
        {}
      } else {
        stryCov_9fa48("607");
        throw new Error(stryMutAct_9fa48("608") ? "" : (stryCov_9fa48("608"), '[[error:invalid-data]]'));
      }
    } else if (stryMutAct_9fa48("611") ? typeof data.name !== 'string' && groups.isPrivilegeGroup(data.name) : stryMutAct_9fa48("610") ? false : stryMutAct_9fa48("609") ? true : (stryCov_9fa48("609", "610", "611"), (stryMutAct_9fa48("613") ? typeof data.name === 'string' : stryMutAct_9fa48("612") ? false : (stryCov_9fa48("612", "613"), typeof data.name !== (stryMutAct_9fa48("614") ? "" : (stryCov_9fa48("614"), 'string')))) || groups.isPrivilegeGroup(data.name))) {
      if (stryMutAct_9fa48("615")) {
        {}
      } else {
        stryCov_9fa48("615");
        throw new Error(stryMutAct_9fa48("616") ? "" : (stryCov_9fa48("616"), '[[error:invalid-group-name]]'));
      }
    }
    const canCreate = await privileges.global.can(stryMutAct_9fa48("617") ? "" : (stryCov_9fa48("617"), 'group:create'), caller.uid);
    if (stryMutAct_9fa48("620") ? false : stryMutAct_9fa48("619") ? true : stryMutAct_9fa48("618") ? canCreate : (stryCov_9fa48("618", "619", "620"), !canCreate)) {
      if (stryMutAct_9fa48("621")) {
        {}
      } else {
        stryCov_9fa48("621");
        throw new Error(stryMutAct_9fa48("622") ? "" : (stryCov_9fa48("622"), '[[error:no-privileges]]'));
      }
    }
    data.ownerUid = caller.uid;
    data.system = stryMutAct_9fa48("623") ? true : (stryCov_9fa48("623"), false);
    const groupData = await groups.create(data);
    logGroupEvent(caller, stryMutAct_9fa48("624") ? "" : (stryCov_9fa48("624"), 'group-create'), stryMutAct_9fa48("625") ? {} : (stryCov_9fa48("625"), {
      groupName: data.name
    }));
    return groupData;
  }
};
groupsAPI.update = async function (caller, data) {
  if (stryMutAct_9fa48("626")) {
    {}
  } else {
    stryCov_9fa48("626");
    if (stryMutAct_9fa48("629") ? false : stryMutAct_9fa48("628") ? true : stryMutAct_9fa48("627") ? data : (stryCov_9fa48("627", "628", "629"), !data)) {
      if (stryMutAct_9fa48("630")) {
        {}
      } else {
        stryCov_9fa48("630");
        throw new Error(stryMutAct_9fa48("631") ? "" : (stryCov_9fa48("631"), '[[error:invalid-data]]'));
      }
    }
    const groupName = await groups.getGroupNameByGroupSlug(data.slug);
    await isOwner(caller, groupName);
    delete data.slug;
    await groups.update(groupName, data);
    return await groups.getGroupData(stryMutAct_9fa48("634") ? data.name && groupName : stryMutAct_9fa48("633") ? false : stryMutAct_9fa48("632") ? true : (stryCov_9fa48("632", "633", "634"), data.name || groupName));
  }
};
groupsAPI.delete = async function (caller, data) {
  if (stryMutAct_9fa48("635")) {
    {}
  } else {
    stryCov_9fa48("635");
    const groupName = await groups.getGroupNameByGroupSlug(data.slug);
    await isOwner(caller, groupName);
    if (stryMutAct_9fa48("638") ? groups.systemGroups.includes(groupName) && groups.ephemeralGroups.includes(groupName) : stryMutAct_9fa48("637") ? false : stryMutAct_9fa48("636") ? true : (stryCov_9fa48("636", "637", "638"), groups.systemGroups.includes(groupName) || groups.ephemeralGroups.includes(groupName))) {
      if (stryMutAct_9fa48("639")) {
        {}
      } else {
        stryCov_9fa48("639");
        throw new Error(stryMutAct_9fa48("640") ? "" : (stryCov_9fa48("640"), '[[error:not-allowed]]'));
      }
    }
    await groups.destroy(groupName);
    logGroupEvent(caller, stryMutAct_9fa48("641") ? "" : (stryCov_9fa48("641"), 'group-delete'), stryMutAct_9fa48("642") ? {} : (stryCov_9fa48("642"), {
      groupName: groupName
    }));
  }
};
groupsAPI.join = async function (caller, data) {
  if (stryMutAct_9fa48("643")) {
    {}
  } else {
    stryCov_9fa48("643");
    if (stryMutAct_9fa48("646") ? false : stryMutAct_9fa48("645") ? true : stryMutAct_9fa48("644") ? data : (stryCov_9fa48("644", "645", "646"), !data)) {
      if (stryMutAct_9fa48("647")) {
        {}
      } else {
        stryCov_9fa48("647");
        throw new Error(stryMutAct_9fa48("648") ? "" : (stryCov_9fa48("648"), '[[error:invalid-data]]'));
      }
    }
    if (stryMutAct_9fa48("651") ? caller.uid <= 0 && !data.uid : stryMutAct_9fa48("650") ? false : stryMutAct_9fa48("649") ? true : (stryCov_9fa48("649", "650", "651"), (stryMutAct_9fa48("654") ? caller.uid > 0 : stryMutAct_9fa48("653") ? caller.uid < 0 : stryMutAct_9fa48("652") ? false : (stryCov_9fa48("652", "653", "654"), caller.uid <= 0)) || (stryMutAct_9fa48("655") ? data.uid : (stryCov_9fa48("655"), !data.uid)))) {
      if (stryMutAct_9fa48("656")) {
        {}
      } else {
        stryCov_9fa48("656");
        throw new Error(stryMutAct_9fa48("657") ? "" : (stryCov_9fa48("657"), '[[error:invalid-uid]]'));
      }
    }
    const groupName = await groups.getGroupNameByGroupSlug(data.slug);
    if (stryMutAct_9fa48("660") ? false : stryMutAct_9fa48("659") ? true : stryMutAct_9fa48("658") ? groupName : (stryCov_9fa48("658", "659", "660"), !groupName)) {
      if (stryMutAct_9fa48("661")) {
        {}
      } else {
        stryCov_9fa48("661");
        throw new Error(stryMutAct_9fa48("662") ? "" : (stryCov_9fa48("662"), '[[error:no-group]]'));
      }
    }
    const isCallerAdmin = await user.isAdministrator(caller.uid);
    if (stryMutAct_9fa48("665") ? !isCallerAdmin || groups.systemGroups.includes(groupName) || groups.isPrivilegeGroup(groupName) : stryMutAct_9fa48("664") ? false : stryMutAct_9fa48("663") ? true : (stryCov_9fa48("663", "664", "665"), (stryMutAct_9fa48("666") ? isCallerAdmin : (stryCov_9fa48("666"), !isCallerAdmin)) && (stryMutAct_9fa48("668") ? groups.systemGroups.includes(groupName) && groups.isPrivilegeGroup(groupName) : stryMutAct_9fa48("667") ? true : (stryCov_9fa48("667", "668"), groups.systemGroups.includes(groupName) || groups.isPrivilegeGroup(groupName))))) {
      if (stryMutAct_9fa48("669")) {
        {}
      } else {
        stryCov_9fa48("669");
        throw new Error(stryMutAct_9fa48("670") ? "" : (stryCov_9fa48("670"), '[[error:not-allowed]]'));
      }
    }
    const [groupData, isCallerOwner, userExists] = await Promise.all(stryMutAct_9fa48("671") ? [] : (stryCov_9fa48("671"), [groups.getGroupData(groupName), groups.ownership.isOwner(caller.uid, groupName), user.exists(data.uid)]));
    if (stryMutAct_9fa48("674") ? false : stryMutAct_9fa48("673") ? true : stryMutAct_9fa48("672") ? userExists : (stryCov_9fa48("672", "673", "674"), !userExists)) {
      if (stryMutAct_9fa48("675")) {
        {}
      } else {
        stryCov_9fa48("675");
        throw new Error(stryMutAct_9fa48("676") ? "" : (stryCov_9fa48("676"), '[[error:invalid-uid]]'));
      }
    }
    const isSelf = stryMutAct_9fa48("679") ? parseInt(caller.uid, 10) !== parseInt(data.uid, 10) : stryMutAct_9fa48("678") ? false : stryMutAct_9fa48("677") ? true : (stryCov_9fa48("677", "678", "679"), parseInt(caller.uid, 10) === parseInt(data.uid, 10));
    if (stryMutAct_9fa48("682") ? !meta.config.allowPrivateGroups || isSelf : stryMutAct_9fa48("681") ? false : stryMutAct_9fa48("680") ? true : (stryCov_9fa48("680", "681", "682"), (stryMutAct_9fa48("683") ? meta.config.allowPrivateGroups : (stryCov_9fa48("683"), !meta.config.allowPrivateGroups)) && isSelf)) {
      if (stryMutAct_9fa48("684")) {
        {}
      } else {
        stryCov_9fa48("684");
        // all groups are public!
        await groups.join(groupName, data.uid);
        logGroupEvent(caller, stryMutAct_9fa48("685") ? "" : (stryCov_9fa48("685"), 'group-join'), stryMutAct_9fa48("686") ? {} : (stryCov_9fa48("686"), {
          groupName: groupName,
          targetUid: data.uid
        }));
        return;
      }
    }
    if (stryMutAct_9fa48("689") ? !isCallerAdmin && isSelf && groupData.private || groupData.disableJoinRequests : stryMutAct_9fa48("688") ? false : stryMutAct_9fa48("687") ? true : (stryCov_9fa48("687", "688", "689"), (stryMutAct_9fa48("691") ? !isCallerAdmin && isSelf || groupData.private : stryMutAct_9fa48("690") ? true : (stryCov_9fa48("690", "691"), (stryMutAct_9fa48("693") ? !isCallerAdmin || isSelf : stryMutAct_9fa48("692") ? true : (stryCov_9fa48("692", "693"), (stryMutAct_9fa48("694") ? isCallerAdmin : (stryCov_9fa48("694"), !isCallerAdmin)) && isSelf)) && groupData.private)) && groupData.disableJoinRequests)) {
      if (stryMutAct_9fa48("695")) {
        {}
      } else {
        stryCov_9fa48("695");
        throw new Error(stryMutAct_9fa48("696") ? "" : (stryCov_9fa48("696"), '[[error:group-join-disabled]]'));
      }
    }
    if (stryMutAct_9fa48("699") ? (!groupData.private && isSelf || isCallerAdmin) && isCallerOwner : stryMutAct_9fa48("698") ? false : stryMutAct_9fa48("697") ? true : (stryCov_9fa48("697", "698", "699"), (stryMutAct_9fa48("701") ? !groupData.private && isSelf && isCallerAdmin : stryMutAct_9fa48("700") ? false : (stryCov_9fa48("700", "701"), (stryMutAct_9fa48("703") ? !groupData.private || isSelf : stryMutAct_9fa48("702") ? false : (stryCov_9fa48("702", "703"), (stryMutAct_9fa48("704") ? groupData.private : (stryCov_9fa48("704"), !groupData.private)) && isSelf)) || isCallerAdmin)) || isCallerOwner)) {
      if (stryMutAct_9fa48("705")) {
        {}
      } else {
        stryCov_9fa48("705");
        await groups.join(groupName, data.uid);
        logGroupEvent(caller, stryMutAct_9fa48("706") ? "" : (stryCov_9fa48("706"), 'group-join'), stryMutAct_9fa48("707") ? {} : (stryCov_9fa48("707"), {
          groupName: groupName,
          targetUid: data.uid
        }));
      }
    } else if (stryMutAct_9fa48("709") ? false : stryMutAct_9fa48("708") ? true : (stryCov_9fa48("708", "709"), isSelf)) {
      if (stryMutAct_9fa48("710")) {
        {}
      } else {
        stryCov_9fa48("710");
        await groups.requestMembership(groupName, caller.uid);
        logGroupEvent(caller, stryMutAct_9fa48("711") ? "" : (stryCov_9fa48("711"), 'group-request-membership'), stryMutAct_9fa48("712") ? {} : (stryCov_9fa48("712"), {
          groupName: groupName,
          targetUid: data.uid
        }));
      }
    }
  }
};
groupsAPI.leave = async function (caller, data) {
  if (stryMutAct_9fa48("713")) {
    {}
  } else {
    stryCov_9fa48("713");
    if (stryMutAct_9fa48("716") ? false : stryMutAct_9fa48("715") ? true : stryMutAct_9fa48("714") ? data : (stryCov_9fa48("714", "715", "716"), !data)) {
      if (stryMutAct_9fa48("717")) {
        {}
      } else {
        stryCov_9fa48("717");
        throw new Error(stryMutAct_9fa48("718") ? "" : (stryCov_9fa48("718"), '[[error:invalid-data]]'));
      }
    }
    if (stryMutAct_9fa48("722") ? caller.uid > 0 : stryMutAct_9fa48("721") ? caller.uid < 0 : stryMutAct_9fa48("720") ? false : stryMutAct_9fa48("719") ? true : (stryCov_9fa48("719", "720", "721", "722"), caller.uid <= 0)) {
      if (stryMutAct_9fa48("723")) {
        {}
      } else {
        stryCov_9fa48("723");
        throw new Error(stryMutAct_9fa48("724") ? "" : (stryCov_9fa48("724"), '[[error:invalid-uid]]'));
      }
    }
    const isSelf = stryMutAct_9fa48("727") ? parseInt(caller.uid, 10) !== parseInt(data.uid, 10) : stryMutAct_9fa48("726") ? false : stryMutAct_9fa48("725") ? true : (stryCov_9fa48("725", "726", "727"), parseInt(caller.uid, 10) === parseInt(data.uid, 10));
    const groupName = await groups.getGroupNameByGroupSlug(data.slug);
    if (stryMutAct_9fa48("730") ? false : stryMutAct_9fa48("729") ? true : stryMutAct_9fa48("728") ? groupName : (stryCov_9fa48("728", "729", "730"), !groupName)) {
      if (stryMutAct_9fa48("731")) {
        {}
      } else {
        stryCov_9fa48("731");
        throw new Error(stryMutAct_9fa48("732") ? "" : (stryCov_9fa48("732"), '[[error:no-group]]'));
      }
    }
    if (stryMutAct_9fa48("735") ? typeof groupName === 'string' : stryMutAct_9fa48("734") ? false : stryMutAct_9fa48("733") ? true : (stryCov_9fa48("733", "734", "735"), typeof groupName !== (stryMutAct_9fa48("736") ? "" : (stryCov_9fa48("736"), 'string')))) {
      if (stryMutAct_9fa48("737")) {
        {}
      } else {
        stryCov_9fa48("737");
        throw new Error(stryMutAct_9fa48("738") ? "" : (stryCov_9fa48("738"), '[[error:invalid-group-name]]'));
      }
    }
    if (stryMutAct_9fa48("741") ? groupName === 'administrators' || isSelf : stryMutAct_9fa48("740") ? false : stryMutAct_9fa48("739") ? true : (stryCov_9fa48("739", "740", "741"), (stryMutAct_9fa48("743") ? groupName !== 'administrators' : stryMutAct_9fa48("742") ? true : (stryCov_9fa48("742", "743"), groupName === (stryMutAct_9fa48("744") ? "" : (stryCov_9fa48("744"), 'administrators')))) && isSelf)) {
      if (stryMutAct_9fa48("745")) {
        {}
      } else {
        stryCov_9fa48("745");
        throw new Error(stryMutAct_9fa48("746") ? "" : (stryCov_9fa48("746"), '[[error:cant-remove-self-as-admin]]'));
      }
    }
    const [groupData, isCallerAdmin, isCallerOwner, userExists, isMember] = await Promise.all(stryMutAct_9fa48("747") ? [] : (stryCov_9fa48("747"), [groups.getGroupData(groupName), user.isAdministrator(caller.uid), groups.ownership.isOwner(caller.uid, groupName), user.exists(data.uid), groups.isMember(data.uid, groupName)]));
    if (stryMutAct_9fa48("750") ? false : stryMutAct_9fa48("749") ? true : stryMutAct_9fa48("748") ? userExists : (stryCov_9fa48("748", "749", "750"), !userExists)) {
      if (stryMutAct_9fa48("751")) {
        {}
      } else {
        stryCov_9fa48("751");
        throw new Error(stryMutAct_9fa48("752") ? "" : (stryCov_9fa48("752"), '[[error:invalid-uid]]'));
      }
    }
    if (stryMutAct_9fa48("755") ? false : stryMutAct_9fa48("754") ? true : stryMutAct_9fa48("753") ? isMember : (stryCov_9fa48("753", "754", "755"), !isMember)) {
      if (stryMutAct_9fa48("756")) {
        {}
      } else {
        stryCov_9fa48("756");
        return;
      }
    }
    if (stryMutAct_9fa48("759") ? groupData.disableLeave || isSelf : stryMutAct_9fa48("758") ? false : stryMutAct_9fa48("757") ? true : (stryCov_9fa48("757", "758", "759"), groupData.disableLeave && isSelf)) {
      if (stryMutAct_9fa48("760")) {
        {}
      } else {
        stryCov_9fa48("760");
        throw new Error(stryMutAct_9fa48("761") ? "" : (stryCov_9fa48("761"), '[[error:group-leave-disabled]]'));
      }
    }
    if (stryMutAct_9fa48("764") ? (isSelf || isCallerAdmin) && isCallerOwner : stryMutAct_9fa48("763") ? false : stryMutAct_9fa48("762") ? true : (stryCov_9fa48("762", "763", "764"), (stryMutAct_9fa48("766") ? isSelf && isCallerAdmin : stryMutAct_9fa48("765") ? false : (stryCov_9fa48("765", "766"), isSelf || isCallerAdmin)) || isCallerOwner)) {
      if (stryMutAct_9fa48("767")) {
        {}
      } else {
        stryCov_9fa48("767");
        await groups.leave(groupName, data.uid);
      }
    } else {
      if (stryMutAct_9fa48("768")) {
        {}
      } else {
        stryCov_9fa48("768");
        throw new Error(stryMutAct_9fa48("769") ? "" : (stryCov_9fa48("769"), '[[error:no-privileges]]'));
      }
    }
    const {
      displayname
    } = await user.getUserFields(data.uid, stryMutAct_9fa48("770") ? [] : (stryCov_9fa48("770"), [stryMutAct_9fa48("771") ? "" : (stryCov_9fa48("771"), 'username')]));
    const notification = await notifications.create(stryMutAct_9fa48("772") ? {} : (stryCov_9fa48("772"), {
      type: stryMutAct_9fa48("773") ? "" : (stryCov_9fa48("773"), 'group-leave'),
      bodyShort: stryMutAct_9fa48("774") ? `` : (stryCov_9fa48("774"), `[[groups:membership.leave.notification_title, ${displayname}, ${groupName}]]`),
      nid: stryMutAct_9fa48("775") ? `` : (stryCov_9fa48("775"), `group:${validator.escape(groupName)}:uid:${data.uid}:group-leave`),
      path: stryMutAct_9fa48("776") ? `` : (stryCov_9fa48("776"), `/groups/${slugify(groupName)}`),
      from: data.uid
    }));
    const uids = await groups.getOwners(groupName);
    await notifications.push(notification, uids);
    logGroupEvent(caller, stryMutAct_9fa48("777") ? "" : (stryCov_9fa48("777"), 'group-leave'), stryMutAct_9fa48("778") ? {} : (stryCov_9fa48("778"), {
      groupName: groupName,
      targetUid: data.uid
    }));
  }
};
groupsAPI.grant = async (caller, data) => {
  if (stryMutAct_9fa48("779")) {
    {}
  } else {
    stryCov_9fa48("779");
    const groupName = await groups.getGroupNameByGroupSlug(data.slug);
    await isOwner(caller, groupName);
    await groups.ownership.grant(data.uid, groupName);
    logGroupEvent(caller, stryMutAct_9fa48("780") ? "" : (stryCov_9fa48("780"), 'group-owner-grant'), stryMutAct_9fa48("781") ? {} : (stryCov_9fa48("781"), {
      groupName: groupName,
      targetUid: data.uid
    }));
  }
};
groupsAPI.rescind = async (caller, data) => {
  if (stryMutAct_9fa48("782")) {
    {}
  } else {
    stryCov_9fa48("782");
    const groupName = await groups.getGroupNameByGroupSlug(data.slug);
    await isOwner(caller, groupName);
    await groups.ownership.rescind(data.uid, groupName);
    logGroupEvent(caller, stryMutAct_9fa48("783") ? "" : (stryCov_9fa48("783"), 'group-owner-rescind'), stryMutAct_9fa48("784") ? {} : (stryCov_9fa48("784"), {
      groupName: groupName,
      targetUid: data.uid
    }));
  }
};
async function isOwner(caller, groupName) {
  if (stryMutAct_9fa48("785")) {
    {}
  } else {
    stryCov_9fa48("785");
    if (stryMutAct_9fa48("788") ? typeof groupName === 'string' : stryMutAct_9fa48("787") ? false : stryMutAct_9fa48("786") ? true : (stryCov_9fa48("786", "787", "788"), typeof groupName !== (stryMutAct_9fa48("789") ? "" : (stryCov_9fa48("789"), 'string')))) {
      if (stryMutAct_9fa48("790")) {
        {}
      } else {
        stryCov_9fa48("790");
        throw new Error(stryMutAct_9fa48("791") ? "" : (stryCov_9fa48("791"), '[[error:invalid-group-name]]'));
      }
    }
    const [hasAdminPrivilege, isGlobalModerator, isOwner, group] = await Promise.all(stryMutAct_9fa48("792") ? [] : (stryCov_9fa48("792"), [privileges.admin.can(stryMutAct_9fa48("793") ? "" : (stryCov_9fa48("793"), 'admin:groups'), caller.uid), user.isGlobalModerator(caller.uid), groups.ownership.isOwner(caller.uid, groupName), groups.getGroupData(groupName)]));
    const check = stryMutAct_9fa48("796") ? (isOwner || hasAdminPrivilege) && isGlobalModerator && !group.system : stryMutAct_9fa48("795") ? false : stryMutAct_9fa48("794") ? true : (stryCov_9fa48("794", "795", "796"), (stryMutAct_9fa48("798") ? isOwner && hasAdminPrivilege : stryMutAct_9fa48("797") ? false : (stryCov_9fa48("797", "798"), isOwner || hasAdminPrivilege)) || (stryMutAct_9fa48("800") ? isGlobalModerator || !group.system : stryMutAct_9fa48("799") ? false : (stryCov_9fa48("799", "800"), isGlobalModerator && (stryMutAct_9fa48("801") ? group.system : (stryCov_9fa48("801"), !group.system)))));
    if (stryMutAct_9fa48("804") ? false : stryMutAct_9fa48("803") ? true : stryMutAct_9fa48("802") ? check : (stryCov_9fa48("802", "803", "804"), !check)) {
      if (stryMutAct_9fa48("805")) {
        {}
      } else {
        stryCov_9fa48("805");
        throw new Error(stryMutAct_9fa48("806") ? "" : (stryCov_9fa48("806"), '[[error:no-privileges]]'));
      }
    }
  }
}
function logGroupEvent(caller, event, additional) {
  if (stryMutAct_9fa48("807")) {
    {}
  } else {
    stryCov_9fa48("807");
    events.log(stryMutAct_9fa48("808") ? {} : (stryCov_9fa48("808"), {
      type: event,
      uid: caller.uid,
      ip: caller.ip,
      ...additional
    }));
  }
}