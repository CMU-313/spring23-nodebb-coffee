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
const privsGlobal = module.exports;

/**
 * Looking to add a new global privilege via plugin/theme? Attach a hook to
 * `static:privileges.global.init` and call .set() on the privilege map passed
 * in to your listener.
 */
const _privilegeMap = new Map(stryMutAct_9fa48("31332") ? [] : (stryCov_9fa48("31332"), [stryMutAct_9fa48("31333") ? [] : (stryCov_9fa48("31333"), [stryMutAct_9fa48("31334") ? "" : (stryCov_9fa48("31334"), 'chat'), stryMutAct_9fa48("31335") ? {} : (stryCov_9fa48("31335"), {
  label: stryMutAct_9fa48("31336") ? "" : (stryCov_9fa48("31336"), '[[admin/manage/privileges:chat]]')
})]), stryMutAct_9fa48("31337") ? [] : (stryCov_9fa48("31337"), [stryMutAct_9fa48("31338") ? "" : (stryCov_9fa48("31338"), 'upload:post:image'), stryMutAct_9fa48("31339") ? {} : (stryCov_9fa48("31339"), {
  label: stryMutAct_9fa48("31340") ? "" : (stryCov_9fa48("31340"), '[[admin/manage/privileges:upload-images]]')
})]), stryMutAct_9fa48("31341") ? [] : (stryCov_9fa48("31341"), [stryMutAct_9fa48("31342") ? "" : (stryCov_9fa48("31342"), 'upload:post:file'), stryMutAct_9fa48("31343") ? {} : (stryCov_9fa48("31343"), {
  label: stryMutAct_9fa48("31344") ? "" : (stryCov_9fa48("31344"), '[[admin/manage/privileges:upload-files]]')
})]), stryMutAct_9fa48("31345") ? [] : (stryCov_9fa48("31345"), [stryMutAct_9fa48("31346") ? "" : (stryCov_9fa48("31346"), 'signature'), stryMutAct_9fa48("31347") ? {} : (stryCov_9fa48("31347"), {
  label: stryMutAct_9fa48("31348") ? "" : (stryCov_9fa48("31348"), '[[admin/manage/privileges:signature]]')
})]), stryMutAct_9fa48("31349") ? [] : (stryCov_9fa48("31349"), [stryMutAct_9fa48("31350") ? "" : (stryCov_9fa48("31350"), 'invite'), stryMutAct_9fa48("31351") ? {} : (stryCov_9fa48("31351"), {
  label: stryMutAct_9fa48("31352") ? "" : (stryCov_9fa48("31352"), '[[admin/manage/privileges:invite]]')
})]), stryMutAct_9fa48("31353") ? [] : (stryCov_9fa48("31353"), [stryMutAct_9fa48("31354") ? "" : (stryCov_9fa48("31354"), 'group:create'), stryMutAct_9fa48("31355") ? {} : (stryCov_9fa48("31355"), {
  label: stryMutAct_9fa48("31356") ? "" : (stryCov_9fa48("31356"), '[[admin/manage/privileges:allow-group-creation]]')
})]), stryMutAct_9fa48("31357") ? [] : (stryCov_9fa48("31357"), [stryMutAct_9fa48("31358") ? "" : (stryCov_9fa48("31358"), 'search:content'), stryMutAct_9fa48("31359") ? {} : (stryCov_9fa48("31359"), {
  label: stryMutAct_9fa48("31360") ? "" : (stryCov_9fa48("31360"), '[[admin/manage/privileges:search-content]]')
})]), stryMutAct_9fa48("31361") ? [] : (stryCov_9fa48("31361"), [stryMutAct_9fa48("31362") ? "" : (stryCov_9fa48("31362"), 'search:users'), stryMutAct_9fa48("31363") ? {} : (stryCov_9fa48("31363"), {
  label: stryMutAct_9fa48("31364") ? "" : (stryCov_9fa48("31364"), '[[admin/manage/privileges:search-users]]')
})]), stryMutAct_9fa48("31365") ? [] : (stryCov_9fa48("31365"), [stryMutAct_9fa48("31366") ? "" : (stryCov_9fa48("31366"), 'search:tags'), stryMutAct_9fa48("31367") ? {} : (stryCov_9fa48("31367"), {
  label: stryMutAct_9fa48("31368") ? "" : (stryCov_9fa48("31368"), '[[admin/manage/privileges:search-tags]]')
})]), stryMutAct_9fa48("31369") ? [] : (stryCov_9fa48("31369"), [stryMutAct_9fa48("31370") ? "" : (stryCov_9fa48("31370"), 'view:users'), stryMutAct_9fa48("31371") ? {} : (stryCov_9fa48("31371"), {
  label: stryMutAct_9fa48("31372") ? "" : (stryCov_9fa48("31372"), '[[admin/manage/privileges:view-users]]')
})]), stryMutAct_9fa48("31373") ? [] : (stryCov_9fa48("31373"), [stryMutAct_9fa48("31374") ? "" : (stryCov_9fa48("31374"), 'view:tags'), stryMutAct_9fa48("31375") ? {} : (stryCov_9fa48("31375"), {
  label: stryMutAct_9fa48("31376") ? "" : (stryCov_9fa48("31376"), '[[admin/manage/privileges:view-tags]]')
})]), stryMutAct_9fa48("31377") ? [] : (stryCov_9fa48("31377"), [stryMutAct_9fa48("31378") ? "" : (stryCov_9fa48("31378"), 'view:groups'), stryMutAct_9fa48("31379") ? {} : (stryCov_9fa48("31379"), {
  label: stryMutAct_9fa48("31380") ? "" : (stryCov_9fa48("31380"), '[[admin/manage/privileges:view-groups]]')
})]), stryMutAct_9fa48("31381") ? [] : (stryCov_9fa48("31381"), [stryMutAct_9fa48("31382") ? "" : (stryCov_9fa48("31382"), 'local:login'), stryMutAct_9fa48("31383") ? {} : (stryCov_9fa48("31383"), {
  label: stryMutAct_9fa48("31384") ? "" : (stryCov_9fa48("31384"), '[[admin/manage/privileges:allow-local-login]]')
})]), stryMutAct_9fa48("31385") ? [] : (stryCov_9fa48("31385"), [stryMutAct_9fa48("31386") ? "" : (stryCov_9fa48("31386"), 'ban'), stryMutAct_9fa48("31387") ? {} : (stryCov_9fa48("31387"), {
  label: stryMutAct_9fa48("31388") ? "" : (stryCov_9fa48("31388"), '[[admin/manage/privileges:ban]]')
})]), stryMutAct_9fa48("31389") ? [] : (stryCov_9fa48("31389"), [stryMutAct_9fa48("31390") ? "" : (stryCov_9fa48("31390"), 'mute'), stryMutAct_9fa48("31391") ? {} : (stryCov_9fa48("31391"), {
  label: stryMutAct_9fa48("31392") ? "" : (stryCov_9fa48("31392"), '[[admin/manage/privileges:mute]]')
})]), stryMutAct_9fa48("31393") ? [] : (stryCov_9fa48("31393"), [stryMutAct_9fa48("31394") ? "" : (stryCov_9fa48("31394"), 'view:users:info'), stryMutAct_9fa48("31395") ? {} : (stryCov_9fa48("31395"), {
  label: stryMutAct_9fa48("31396") ? "" : (stryCov_9fa48("31396"), '[[admin/manage/privileges:view-users-info]]')
})])]));
privsGlobal.getUserPrivilegeList = stryMutAct_9fa48("31397") ? () => undefined : (stryCov_9fa48("31397"), async () => await plugins.hooks.fire(stryMutAct_9fa48("31398") ? "" : (stryCov_9fa48("31398"), 'filter:privileges.global.list'), Array.from(_privilegeMap.keys())));
privsGlobal.getGroupPrivilegeList = stryMutAct_9fa48("31399") ? () => undefined : (stryCov_9fa48("31399"), async () => await plugins.hooks.fire(stryMutAct_9fa48("31400") ? "" : (stryCov_9fa48("31400"), 'filter:privileges.global.groups.list'), Array.from(_privilegeMap.keys()).map(stryMutAct_9fa48("31401") ? () => undefined : (stryCov_9fa48("31401"), privilege => stryMutAct_9fa48("31402") ? `` : (stryCov_9fa48("31402"), `groups:${privilege}`)))));
privsGlobal.getPrivilegeList = async () => {
  if (stryMutAct_9fa48("31403")) {
    {}
  } else {
    stryCov_9fa48("31403");
    const [user, group] = await Promise.all(stryMutAct_9fa48("31404") ? [] : (stryCov_9fa48("31404"), [privsGlobal.getUserPrivilegeList(), privsGlobal.getGroupPrivilegeList()]));
    return user.concat(group);
  }
};
privsGlobal.init = async () => {
  if (stryMutAct_9fa48("31405")) {
    {}
  } else {
    stryCov_9fa48("31405");
    privsGlobal._coreSize = _privilegeMap.size;
    await plugins.hooks.fire(stryMutAct_9fa48("31406") ? "" : (stryCov_9fa48("31406"), 'static:privileges.global.init'), stryMutAct_9fa48("31407") ? {} : (stryCov_9fa48("31407"), {
      privileges: _privilegeMap
    }));
  }
};
privsGlobal.list = async function () {
  if (stryMutAct_9fa48("31408")) {
    {}
  } else {
    stryCov_9fa48("31408");
    async function getLabels() {
      if (stryMutAct_9fa48("31409")) {
        {}
      } else {
        stryCov_9fa48("31409");
        const labels = Array.from(_privilegeMap.values()).map(stryMutAct_9fa48("31410") ? () => undefined : (stryCov_9fa48("31410"), data => data.label));
        return await utils.promiseParallel(stryMutAct_9fa48("31411") ? {} : (stryCov_9fa48("31411"), {
          users: plugins.hooks.fire(stryMutAct_9fa48("31412") ? "" : (stryCov_9fa48("31412"), 'filter:privileges.global.list_human'), stryMutAct_9fa48("31413") ? labels : (stryCov_9fa48("31413"), labels.slice())),
          groups: plugins.hooks.fire(stryMutAct_9fa48("31414") ? "" : (stryCov_9fa48("31414"), 'filter:privileges.global.groups.list_human'), stryMutAct_9fa48("31415") ? labels : (stryCov_9fa48("31415"), labels.slice()))
        }));
      }
    }
    const keys = await utils.promiseParallel(stryMutAct_9fa48("31416") ? {} : (stryCov_9fa48("31416"), {
      users: privsGlobal.getUserPrivilegeList(),
      groups: privsGlobal.getGroupPrivilegeList()
    }));
    const payload = await utils.promiseParallel(stryMutAct_9fa48("31417") ? {} : (stryCov_9fa48("31417"), {
      labels: getLabels(),
      users: helpers.getUserPrivileges(0, keys.users),
      groups: helpers.getGroupPrivileges(0, keys.groups)
    }));
    payload.keys = keys;
    payload.columnCountUserOther = stryMutAct_9fa48("31418") ? keys.users.length + privsGlobal._coreSize : (stryCov_9fa48("31418"), keys.users.length - privsGlobal._coreSize);
    payload.columnCountGroupOther = stryMutAct_9fa48("31419") ? keys.groups.length + privsGlobal._coreSize : (stryCov_9fa48("31419"), keys.groups.length - privsGlobal._coreSize);
    return payload;
  }
};
privsGlobal.get = async function (uid) {
  if (stryMutAct_9fa48("31420")) {
    {}
  } else {
    stryCov_9fa48("31420");
    const userPrivilegeList = await privsGlobal.getUserPrivilegeList();
    const [userPrivileges, isAdministrator] = await Promise.all(stryMutAct_9fa48("31421") ? [] : (stryCov_9fa48("31421"), [helpers.isAllowedTo(userPrivilegeList, uid, 0), user.isAdministrator(uid)]));
    const combined = userPrivileges.map(stryMutAct_9fa48("31422") ? () => undefined : (stryCov_9fa48("31422"), allowed => stryMutAct_9fa48("31425") ? allowed && isAdministrator : stryMutAct_9fa48("31424") ? false : stryMutAct_9fa48("31423") ? true : (stryCov_9fa48("31423", "31424", "31425"), allowed || isAdministrator)));
    const privData = _.zipObject(userPrivilegeList, combined);
    return await plugins.hooks.fire(stryMutAct_9fa48("31426") ? "" : (stryCov_9fa48("31426"), 'filter:privileges.global.get'), privData);
  }
};
privsGlobal.can = async function (privilege, uid) {
  if (stryMutAct_9fa48("31427")) {
    {}
  } else {
    stryCov_9fa48("31427");
    const [isAdministrator, isUserAllowedTo] = await Promise.all(stryMutAct_9fa48("31428") ? [] : (stryCov_9fa48("31428"), [user.isAdministrator(uid), helpers.isAllowedTo(privilege, uid, stryMutAct_9fa48("31429") ? [] : (stryCov_9fa48("31429"), [0]))]));
    return stryMutAct_9fa48("31432") ? isAdministrator && isUserAllowedTo[0] : stryMutAct_9fa48("31431") ? false : stryMutAct_9fa48("31430") ? true : (stryCov_9fa48("31430", "31431", "31432"), isAdministrator || isUserAllowedTo[0]);
  }
};
privsGlobal.canGroup = async function (privilege, groupName) {
  if (stryMutAct_9fa48("31433")) {
    {}
  } else {
    stryCov_9fa48("31433");
    return await groups.isMember(groupName, stryMutAct_9fa48("31434") ? `` : (stryCov_9fa48("31434"), `cid:0:privileges:groups:${privilege}`));
  }
};
privsGlobal.filterUids = async function (privilege, uids) {
  if (stryMutAct_9fa48("31435")) {
    {}
  } else {
    stryCov_9fa48("31435");
    const privCategories = require('./categories');
    return await privCategories.filterUids(privilege, 0, uids);
  }
};
privsGlobal.give = async function (privileges, groupName) {
  if (stryMutAct_9fa48("31436")) {
    {}
  } else {
    stryCov_9fa48("31436");
    await helpers.giveOrRescind(groups.join, privileges, 0, groupName);
    plugins.hooks.fire(stryMutAct_9fa48("31437") ? "" : (stryCov_9fa48("31437"), 'action:privileges.global.give'), stryMutAct_9fa48("31438") ? {} : (stryCov_9fa48("31438"), {
      privileges: privileges,
      groupNames: Array.isArray(groupName) ? groupName : stryMutAct_9fa48("31439") ? [] : (stryCov_9fa48("31439"), [groupName])
    }));
  }
};
privsGlobal.rescind = async function (privileges, groupName) {
  if (stryMutAct_9fa48("31440")) {
    {}
  } else {
    stryCov_9fa48("31440");
    await helpers.giveOrRescind(groups.leave, privileges, 0, groupName);
    plugins.hooks.fire(stryMutAct_9fa48("31441") ? "" : (stryCov_9fa48("31441"), 'action:privileges.global.rescind'), stryMutAct_9fa48("31442") ? {} : (stryCov_9fa48("31442"), {
      privileges: privileges,
      groupNames: Array.isArray(groupName) ? groupName : stryMutAct_9fa48("31443") ? [] : (stryCov_9fa48("31443"), [groupName])
    }));
  }
};
privsGlobal.userPrivileges = async function (uid) {
  if (stryMutAct_9fa48("31444")) {
    {}
  } else {
    stryCov_9fa48("31444");
    const userPrivilegeList = await privsGlobal.getUserPrivilegeList();
    return await helpers.userOrGroupPrivileges(0, uid, userPrivilegeList);
  }
};
privsGlobal.groupPrivileges = async function (groupName) {
  if (stryMutAct_9fa48("31445")) {
    {}
  } else {
    stryCov_9fa48("31445");
    const groupPrivilegeList = await privsGlobal.getGroupPrivilegeList();
    return await helpers.userOrGroupPrivileges(0, groupName, groupPrivilegeList);
  }
};