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
const groups = require('../groups');
const helpers = require('./helpers');
const plugins = require('../plugins');
const utils = require('../utils');
const privsAdmin = module.exports;

/**
 * Looking to add a new admin privilege via plugin/theme? Attach a hook to
 * `static:privileges.admin.init` and call .set() on the privilege map passed
 * in to your listener.
 */
const _privilegeMap = new Map(stryMutAct_9fa48("30962") ? [] : (stryCov_9fa48("30962"), [stryMutAct_9fa48("30963") ? [] : (stryCov_9fa48("30963"), [stryMutAct_9fa48("30964") ? "" : (stryCov_9fa48("30964"), 'admin:dashboard'), stryMutAct_9fa48("30965") ? {} : (stryCov_9fa48("30965"), {
  label: stryMutAct_9fa48("30966") ? "" : (stryCov_9fa48("30966"), '[[admin/manage/privileges:admin-dashboard]]')
})]), stryMutAct_9fa48("30967") ? [] : (stryCov_9fa48("30967"), [stryMutAct_9fa48("30968") ? "" : (stryCov_9fa48("30968"), 'admin:categories'), stryMutAct_9fa48("30969") ? {} : (stryCov_9fa48("30969"), {
  label: stryMutAct_9fa48("30970") ? "" : (stryCov_9fa48("30970"), '[[admin/manage/privileges:admin-categories]]')
})]), stryMutAct_9fa48("30971") ? [] : (stryCov_9fa48("30971"), [stryMutAct_9fa48("30972") ? "" : (stryCov_9fa48("30972"), 'admin:privileges'), stryMutAct_9fa48("30973") ? {} : (stryCov_9fa48("30973"), {
  label: stryMutAct_9fa48("30974") ? "" : (stryCov_9fa48("30974"), '[[admin/manage/privileges:admin-privileges]]')
})]), stryMutAct_9fa48("30975") ? [] : (stryCov_9fa48("30975"), [stryMutAct_9fa48("30976") ? "" : (stryCov_9fa48("30976"), 'admin:admins-mods'), stryMutAct_9fa48("30977") ? {} : (stryCov_9fa48("30977"), {
  label: stryMutAct_9fa48("30978") ? "" : (stryCov_9fa48("30978"), '[[admin/manage/privileges:admin-admins-mods]]')
})]), stryMutAct_9fa48("30979") ? [] : (stryCov_9fa48("30979"), [stryMutAct_9fa48("30980") ? "" : (stryCov_9fa48("30980"), 'admin:users'), stryMutAct_9fa48("30981") ? {} : (stryCov_9fa48("30981"), {
  label: stryMutAct_9fa48("30982") ? "" : (stryCov_9fa48("30982"), '[[admin/manage/privileges:admin-users]]')
})]), stryMutAct_9fa48("30983") ? [] : (stryCov_9fa48("30983"), [stryMutAct_9fa48("30984") ? "" : (stryCov_9fa48("30984"), 'admin:groups'), stryMutAct_9fa48("30985") ? {} : (stryCov_9fa48("30985"), {
  label: stryMutAct_9fa48("30986") ? "" : (stryCov_9fa48("30986"), '[[admin/manage/privileges:admin-groups]]')
})]), stryMutAct_9fa48("30987") ? [] : (stryCov_9fa48("30987"), [stryMutAct_9fa48("30988") ? "" : (stryCov_9fa48("30988"), 'admin:tags'), stryMutAct_9fa48("30989") ? {} : (stryCov_9fa48("30989"), {
  label: stryMutAct_9fa48("30990") ? "" : (stryCov_9fa48("30990"), '[[admin/manage/privileges:admin-tags]]')
})]), stryMutAct_9fa48("30991") ? [] : (stryCov_9fa48("30991"), [stryMutAct_9fa48("30992") ? "" : (stryCov_9fa48("30992"), 'admin:settings'), stryMutAct_9fa48("30993") ? {} : (stryCov_9fa48("30993"), {
  label: stryMutAct_9fa48("30994") ? "" : (stryCov_9fa48("30994"), '[[admin/manage/privileges:admin-settings]]')
})])]));
privsAdmin.getUserPrivilegeList = stryMutAct_9fa48("30995") ? () => undefined : (stryCov_9fa48("30995"), async () => await plugins.hooks.fire(stryMutAct_9fa48("30996") ? "" : (stryCov_9fa48("30996"), 'filter:privileges.admin.list'), Array.from(_privilegeMap.keys())));
privsAdmin.getGroupPrivilegeList = stryMutAct_9fa48("30997") ? () => undefined : (stryCov_9fa48("30997"), async () => await plugins.hooks.fire(stryMutAct_9fa48("30998") ? "" : (stryCov_9fa48("30998"), 'filter:privileges.admin.groups.list'), Array.from(_privilegeMap.keys()).map(stryMutAct_9fa48("30999") ? () => undefined : (stryCov_9fa48("30999"), privilege => stryMutAct_9fa48("31000") ? `` : (stryCov_9fa48("31000"), `groups:${privilege}`)))));
privsAdmin.getPrivilegeList = async () => {
  if (stryMutAct_9fa48("31001")) {
    {}
  } else {
    stryCov_9fa48("31001");
    const [user, group] = await Promise.all(stryMutAct_9fa48("31002") ? [] : (stryCov_9fa48("31002"), [privsAdmin.getUserPrivilegeList(), privsAdmin.getGroupPrivilegeList()]));
    return user.concat(group);
  }
};
privsAdmin.init = async () => {
  if (stryMutAct_9fa48("31003")) {
    {}
  } else {
    stryCov_9fa48("31003");
    await plugins.hooks.fire(stryMutAct_9fa48("31004") ? "" : (stryCov_9fa48("31004"), 'static:privileges.admin.init'), stryMutAct_9fa48("31005") ? {} : (stryCov_9fa48("31005"), {
      privileges: _privilegeMap
    }));
  }
};

// Mapping for a page route (via direct match or regexp) to a privilege
privsAdmin.routeMap = stryMutAct_9fa48("31006") ? {} : (stryCov_9fa48("31006"), {
  dashboard: stryMutAct_9fa48("31007") ? "" : (stryCov_9fa48("31007"), 'admin:dashboard'),
  'manage/categories': stryMutAct_9fa48("31008") ? "" : (stryCov_9fa48("31008"), 'admin:categories'),
  'manage/privileges': stryMutAct_9fa48("31009") ? "" : (stryCov_9fa48("31009"), 'admin:privileges'),
  'manage/admins-mods': stryMutAct_9fa48("31010") ? "" : (stryCov_9fa48("31010"), 'admin:admins-mods'),
  'manage/users': stryMutAct_9fa48("31011") ? "" : (stryCov_9fa48("31011"), 'admin:users'),
  'manage/groups': stryMutAct_9fa48("31012") ? "" : (stryCov_9fa48("31012"), 'admin:groups'),
  'manage/tags': stryMutAct_9fa48("31013") ? "" : (stryCov_9fa48("31013"), 'admin:tags'),
  'settings/tags': stryMutAct_9fa48("31014") ? "" : (stryCov_9fa48("31014"), 'admin:tags'),
  'extend/plugins': stryMutAct_9fa48("31015") ? "" : (stryCov_9fa48("31015"), 'admin:settings'),
  'extend/widgets': stryMutAct_9fa48("31016") ? "" : (stryCov_9fa48("31016"), 'admin:settings'),
  'extend/rewards': stryMutAct_9fa48("31017") ? "" : (stryCov_9fa48("31017"), 'admin:settings'),
  // uploads
  'category/uploadpicture': stryMutAct_9fa48("31018") ? "" : (stryCov_9fa48("31018"), 'admin:categories'),
  uploadfavicon: stryMutAct_9fa48("31019") ? "" : (stryCov_9fa48("31019"), 'admin:settings'),
  uploadTouchIcon: stryMutAct_9fa48("31020") ? "" : (stryCov_9fa48("31020"), 'admin:settings'),
  uploadMaskableIcon: stryMutAct_9fa48("31021") ? "" : (stryCov_9fa48("31021"), 'admin:settings'),
  uploadlogo: stryMutAct_9fa48("31022") ? "" : (stryCov_9fa48("31022"), 'admin:settings'),
  uploadOgImage: stryMutAct_9fa48("31023") ? "" : (stryCov_9fa48("31023"), 'admin:settings'),
  uploadDefaultAvatar: stryMutAct_9fa48("31024") ? "" : (stryCov_9fa48("31024"), 'admin:settings')
});
privsAdmin.routePrefixMap = stryMutAct_9fa48("31025") ? {} : (stryCov_9fa48("31025"), {
  'manage/categories/': stryMutAct_9fa48("31026") ? "" : (stryCov_9fa48("31026"), 'admin:categories'),
  'manage/privileges/': stryMutAct_9fa48("31027") ? "" : (stryCov_9fa48("31027"), 'admin:privileges'),
  'manage/groups/': stryMutAct_9fa48("31028") ? "" : (stryCov_9fa48("31028"), 'admin:groups'),
  'settings/': stryMutAct_9fa48("31029") ? "" : (stryCov_9fa48("31029"), 'admin:settings'),
  'appearance/': stryMutAct_9fa48("31030") ? "" : (stryCov_9fa48("31030"), 'admin:settings'),
  'plugins/': stryMutAct_9fa48("31031") ? "" : (stryCov_9fa48("31031"), 'admin:settings')
});

// Mapping for socket call methods to a privilege
// In NodeBB v2, these socket calls will be removed in favour of xhr calls
privsAdmin.socketMap = stryMutAct_9fa48("31032") ? {} : (stryCov_9fa48("31032"), {
  'admin.rooms.getAll': stryMutAct_9fa48("31033") ? "" : (stryCov_9fa48("31033"), 'admin:dashboard'),
  'admin.analytics.get': stryMutAct_9fa48("31034") ? "" : (stryCov_9fa48("31034"), 'admin:dashboard'),
  'admin.categories.copySettingsFrom': stryMutAct_9fa48("31035") ? "" : (stryCov_9fa48("31035"), 'admin:categories'),
  'admin.categories.copyPrivilegesToChildren': stryMutAct_9fa48("31036") ? "" : (stryCov_9fa48("31036"), 'admin:privileges'),
  'admin.categories.copyPrivilegesFrom': stryMutAct_9fa48("31037") ? "" : (stryCov_9fa48("31037"), 'admin:privileges'),
  'admin.categories.copyPrivilegesToAllCategories': stryMutAct_9fa48("31038") ? "" : (stryCov_9fa48("31038"), 'admin:privileges'),
  'admin.user.makeAdmins': stryMutAct_9fa48("31039") ? "" : (stryCov_9fa48("31039"), 'admin:admins-mods'),
  'admin.user.removeAdmins': stryMutAct_9fa48("31040") ? "" : (stryCov_9fa48("31040"), 'admin:admins-mods'),
  'admin.user.loadGroups': stryMutAct_9fa48("31041") ? "" : (stryCov_9fa48("31041"), 'admin:users'),
  'admin.groups.join': stryMutAct_9fa48("31042") ? "" : (stryCov_9fa48("31042"), 'admin:users'),
  'admin.groups.leave': stryMutAct_9fa48("31043") ? "" : (stryCov_9fa48("31043"), 'admin:users'),
  'admin.user.resetLockouts': stryMutAct_9fa48("31044") ? "" : (stryCov_9fa48("31044"), 'admin:users'),
  'admin.user.validateEmail': stryMutAct_9fa48("31045") ? "" : (stryCov_9fa48("31045"), 'admin:users'),
  'admin.user.sendValidationEmail': stryMutAct_9fa48("31046") ? "" : (stryCov_9fa48("31046"), 'admin:users'),
  'admin.user.sendPasswordResetEmail': stryMutAct_9fa48("31047") ? "" : (stryCov_9fa48("31047"), 'admin:users'),
  'admin.user.forcePasswordReset': stryMutAct_9fa48("31048") ? "" : (stryCov_9fa48("31048"), 'admin:users'),
  'admin.user.invite': stryMutAct_9fa48("31049") ? "" : (stryCov_9fa48("31049"), 'admin:users'),
  'admin.tags.create': stryMutAct_9fa48("31050") ? "" : (stryCov_9fa48("31050"), 'admin:tags'),
  'admin.tags.rename': stryMutAct_9fa48("31051") ? "" : (stryCov_9fa48("31051"), 'admin:tags'),
  'admin.tags.deleteTags': stryMutAct_9fa48("31052") ? "" : (stryCov_9fa48("31052"), 'admin:tags'),
  'admin.getSearchDict': stryMutAct_9fa48("31053") ? "" : (stryCov_9fa48("31053"), 'admin:settings'),
  'admin.config.setMultiple': stryMutAct_9fa48("31054") ? "" : (stryCov_9fa48("31054"), 'admin:settings'),
  'admin.config.remove': stryMutAct_9fa48("31055") ? "" : (stryCov_9fa48("31055"), 'admin:settings'),
  'admin.themes.getInstalled': stryMutAct_9fa48("31056") ? "" : (stryCov_9fa48("31056"), 'admin:settings'),
  'admin.themes.set': stryMutAct_9fa48("31057") ? "" : (stryCov_9fa48("31057"), 'admin:settings'),
  'admin.reloadAllSessions': stryMutAct_9fa48("31058") ? "" : (stryCov_9fa48("31058"), 'admin:settings'),
  'admin.settings.get': stryMutAct_9fa48("31059") ? "" : (stryCov_9fa48("31059"), 'admin:settings'),
  'admin.settings.set': stryMutAct_9fa48("31060") ? "" : (stryCov_9fa48("31060"), 'admin:settings')
});
privsAdmin.resolve = path => {
  if (stryMutAct_9fa48("31061")) {
    {}
  } else {
    stryCov_9fa48("31061");
    if (stryMutAct_9fa48("31063") ? false : stryMutAct_9fa48("31062") ? true : (stryCov_9fa48("31062", "31063"), privsAdmin.routeMap.hasOwnProperty(path))) {
      if (stryMutAct_9fa48("31064")) {
        {}
      } else {
        stryCov_9fa48("31064");
        return privsAdmin.routeMap[path];
      }
    }
    const found = stryMutAct_9fa48("31066") ? Object.entries(privsAdmin.routePrefixMap).sort((entry1, entry2) => entry2[0].length - entry1[0].length) : stryMutAct_9fa48("31065") ? Object.entries(privsAdmin.routePrefixMap).filter(entry => path.startsWith(entry[0])) : (stryCov_9fa48("31065", "31066"), Object.entries(privsAdmin.routePrefixMap).filter(stryMutAct_9fa48("31067") ? () => undefined : (stryCov_9fa48("31067"), entry => stryMutAct_9fa48("31068") ? path.endsWith(entry[0]) : (stryCov_9fa48("31068"), path.startsWith(entry[0])))).sort(stryMutAct_9fa48("31069") ? () => undefined : (stryCov_9fa48("31069"), (entry1, entry2) => stryMutAct_9fa48("31070") ? entry2[0].length + entry1[0].length : (stryCov_9fa48("31070"), entry2[0].length - entry1[0].length))));
    if (stryMutAct_9fa48("31073") ? false : stryMutAct_9fa48("31072") ? true : stryMutAct_9fa48("31071") ? found.length : (stryCov_9fa48("31071", "31072", "31073"), !found.length)) {
      if (stryMutAct_9fa48("31074")) {
        {}
      } else {
        stryCov_9fa48("31074");
        return undefined;
      }
    }
    return found[0][1]; // [0] is path [1] is privilege
  }
};

privsAdmin.list = async function (uid) {
  if (stryMutAct_9fa48("31075")) {
    {}
  } else {
    stryCov_9fa48("31075");
    const privilegeLabels = Array.from(_privilegeMap.values()).map(stryMutAct_9fa48("31076") ? () => undefined : (stryCov_9fa48("31076"), data => data.label));
    const userPrivilegeList = await privsAdmin.getUserPrivilegeList();
    const groupPrivilegeList = await privsAdmin.getGroupPrivilegeList();

    // Restrict privileges column to superadmins
    if (stryMutAct_9fa48("31079") ? false : stryMutAct_9fa48("31078") ? true : stryMutAct_9fa48("31077") ? await user.isAdministrator(uid) : (stryCov_9fa48("31077", "31078", "31079"), !(await user.isAdministrator(uid)))) {
      if (stryMutAct_9fa48("31080")) {
        {}
      } else {
        stryCov_9fa48("31080");
        const idx = Array.from(_privilegeMap.keys()).indexOf(stryMutAct_9fa48("31081") ? "" : (stryCov_9fa48("31081"), 'admin:privileges'));
        privilegeLabels.splice(idx, 1);
        userPrivilegeList.splice(idx, 1);
        groupPrivilegeList.splice(idx, 1);
      }
    }
    const labels = await utils.promiseParallel(stryMutAct_9fa48("31082") ? {} : (stryCov_9fa48("31082"), {
      users: plugins.hooks.fire(stryMutAct_9fa48("31083") ? "" : (stryCov_9fa48("31083"), 'filter:privileges.admin.list_human'), stryMutAct_9fa48("31084") ? privilegeLabels : (stryCov_9fa48("31084"), privilegeLabels.slice())),
      groups: plugins.hooks.fire(stryMutAct_9fa48("31085") ? "" : (stryCov_9fa48("31085"), 'filter:privileges.admin.groups.list_human'), stryMutAct_9fa48("31086") ? privilegeLabels : (stryCov_9fa48("31086"), privilegeLabels.slice()))
    }));
    const keys = stryMutAct_9fa48("31087") ? {} : (stryCov_9fa48("31087"), {
      users: userPrivilegeList,
      groups: groupPrivilegeList
    });
    const payload = await utils.promiseParallel(stryMutAct_9fa48("31088") ? {} : (stryCov_9fa48("31088"), {
      labels,
      users: helpers.getUserPrivileges(0, keys.users),
      groups: helpers.getGroupPrivileges(0, keys.groups)
    }));
    payload.keys = keys;
    return payload;
  }
};
privsAdmin.get = async function (uid) {
  if (stryMutAct_9fa48("31089")) {
    {}
  } else {
    stryCov_9fa48("31089");
    const userPrivilegeList = await privsAdmin.getUserPrivilegeList();
    const [userPrivileges, isAdministrator] = await Promise.all(stryMutAct_9fa48("31090") ? [] : (stryCov_9fa48("31090"), [helpers.isAllowedTo(userPrivilegeList, uid, 0), user.isAdministrator(uid)]));
    const combined = userPrivileges.map(stryMutAct_9fa48("31091") ? () => undefined : (stryCov_9fa48("31091"), allowed => stryMutAct_9fa48("31094") ? allowed && isAdministrator : stryMutAct_9fa48("31093") ? false : stryMutAct_9fa48("31092") ? true : (stryCov_9fa48("31092", "31093", "31094"), allowed || isAdministrator)));
    const privData = _.zipObject(userPrivilegeList, combined);
    privData.superadmin = isAdministrator;
    return await plugins.hooks.fire(stryMutAct_9fa48("31095") ? "" : (stryCov_9fa48("31095"), 'filter:privileges.admin.get'), privData);
  }
};
privsAdmin.can = async function (privilege, uid) {
  if (stryMutAct_9fa48("31096")) {
    {}
  } else {
    stryCov_9fa48("31096");
    const [isUserAllowedTo, isAdministrator] = await Promise.all(stryMutAct_9fa48("31097") ? [] : (stryCov_9fa48("31097"), [helpers.isAllowedTo(privilege, uid, stryMutAct_9fa48("31098") ? [] : (stryCov_9fa48("31098"), [0])), user.isAdministrator(uid)]));
    return stryMutAct_9fa48("31101") ? isAdministrator && isUserAllowedTo[0] : stryMutAct_9fa48("31100") ? false : stryMutAct_9fa48("31099") ? true : (stryCov_9fa48("31099", "31100", "31101"), isAdministrator || isUserAllowedTo[0]);
  }
};
privsAdmin.canGroup = async function (privilege, groupName) {
  if (stryMutAct_9fa48("31102")) {
    {}
  } else {
    stryCov_9fa48("31102");
    return await groups.isMember(groupName, stryMutAct_9fa48("31103") ? `` : (stryCov_9fa48("31103"), `cid:0:privileges:groups:${privilege}`));
  }
};
privsAdmin.give = async function (privileges, groupName) {
  if (stryMutAct_9fa48("31104")) {
    {}
  } else {
    stryCov_9fa48("31104");
    await helpers.giveOrRescind(groups.join, privileges, 0, groupName);
    plugins.hooks.fire(stryMutAct_9fa48("31105") ? "" : (stryCov_9fa48("31105"), 'action:privileges.admin.give'), stryMutAct_9fa48("31106") ? {} : (stryCov_9fa48("31106"), {
      privileges: privileges,
      groupNames: Array.isArray(groupName) ? groupName : stryMutAct_9fa48("31107") ? [] : (stryCov_9fa48("31107"), [groupName])
    }));
  }
};
privsAdmin.rescind = async function (privileges, groupName) {
  if (stryMutAct_9fa48("31108")) {
    {}
  } else {
    stryCov_9fa48("31108");
    await helpers.giveOrRescind(groups.leave, privileges, 0, groupName);
    plugins.hooks.fire(stryMutAct_9fa48("31109") ? "" : (stryCov_9fa48("31109"), 'action:privileges.admin.rescind'), stryMutAct_9fa48("31110") ? {} : (stryCov_9fa48("31110"), {
      privileges: privileges,
      groupNames: Array.isArray(groupName) ? groupName : stryMutAct_9fa48("31111") ? [] : (stryCov_9fa48("31111"), [groupName])
    }));
  }
};
privsAdmin.userPrivileges = async function (uid) {
  if (stryMutAct_9fa48("31112")) {
    {}
  } else {
    stryCov_9fa48("31112");
    const userPrivilegeList = await privsAdmin.getUserPrivilegeList();
    return await helpers.userOrGroupPrivileges(0, uid, userPrivilegeList);
  }
};
privsAdmin.groupPrivileges = async function (groupName) {
  if (stryMutAct_9fa48("31113")) {
    {}
  } else {
    stryCov_9fa48("31113");
    const groupPrivilegeList = await privsAdmin.getGroupPrivilegeList();
    return await helpers.userOrGroupPrivileges(0, groupName, groupPrivilegeList);
  }
};