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
const categories = require('../categories');
const user = require('../user');
const groups = require('../groups');
const helpers = require('./helpers');
const plugins = require('../plugins');
const utils = require('../utils');
const privsCategories = module.exports;

/**
 * Looking to add a new category privilege via plugin/theme? Attach a hook to
 * `static:privileges.category.init` and call .set() on the privilege map passed
 * in to your listener.
 */
const _privilegeMap = new Map(stryMutAct_9fa48("31114") ? [] : (stryCov_9fa48("31114"), [stryMutAct_9fa48("31115") ? [] : (stryCov_9fa48("31115"), [stryMutAct_9fa48("31116") ? "" : (stryCov_9fa48("31116"), 'find'), stryMutAct_9fa48("31117") ? {} : (stryCov_9fa48("31117"), {
  label: stryMutAct_9fa48("31118") ? "" : (stryCov_9fa48("31118"), '[[admin/manage/privileges:find-category]]')
})]), stryMutAct_9fa48("31119") ? [] : (stryCov_9fa48("31119"), [stryMutAct_9fa48("31120") ? "" : (stryCov_9fa48("31120"), 'read'), stryMutAct_9fa48("31121") ? {} : (stryCov_9fa48("31121"), {
  label: stryMutAct_9fa48("31122") ? "" : (stryCov_9fa48("31122"), '[[admin/manage/privileges:access-category]]')
})]), stryMutAct_9fa48("31123") ? [] : (stryCov_9fa48("31123"), [stryMutAct_9fa48("31124") ? "" : (stryCov_9fa48("31124"), 'topics:read'), stryMutAct_9fa48("31125") ? {} : (stryCov_9fa48("31125"), {
  label: stryMutAct_9fa48("31126") ? "" : (stryCov_9fa48("31126"), '[[admin/manage/privileges:access-topics]]')
})]), stryMutAct_9fa48("31127") ? [] : (stryCov_9fa48("31127"), [stryMutAct_9fa48("31128") ? "" : (stryCov_9fa48("31128"), 'topics:create'), stryMutAct_9fa48("31129") ? {} : (stryCov_9fa48("31129"), {
  label: stryMutAct_9fa48("31130") ? "" : (stryCov_9fa48("31130"), '[[admin/manage/privileges:create-topics]]')
})]), stryMutAct_9fa48("31131") ? [] : (stryCov_9fa48("31131"), [stryMutAct_9fa48("31132") ? "" : (stryCov_9fa48("31132"), 'topics:reply'), stryMutAct_9fa48("31133") ? {} : (stryCov_9fa48("31133"), {
  label: stryMutAct_9fa48("31134") ? "" : (stryCov_9fa48("31134"), '[[admin/manage/privileges:reply-to-topics]]')
})]), stryMutAct_9fa48("31135") ? [] : (stryCov_9fa48("31135"), [stryMutAct_9fa48("31136") ? "" : (stryCov_9fa48("31136"), 'topics:schedule'), stryMutAct_9fa48("31137") ? {} : (stryCov_9fa48("31137"), {
  label: stryMutAct_9fa48("31138") ? "" : (stryCov_9fa48("31138"), '[[admin/manage/privileges:schedule-topics]]')
})]), stryMutAct_9fa48("31139") ? [] : (stryCov_9fa48("31139"), [stryMutAct_9fa48("31140") ? "" : (stryCov_9fa48("31140"), 'topics:tag'), stryMutAct_9fa48("31141") ? {} : (stryCov_9fa48("31141"), {
  label: stryMutAct_9fa48("31142") ? "" : (stryCov_9fa48("31142"), '[[admin/manage/privileges:tag-topics]]')
})]), stryMutAct_9fa48("31143") ? [] : (stryCov_9fa48("31143"), [stryMutAct_9fa48("31144") ? "" : (stryCov_9fa48("31144"), 'posts:edit'), stryMutAct_9fa48("31145") ? {} : (stryCov_9fa48("31145"), {
  label: stryMutAct_9fa48("31146") ? "" : (stryCov_9fa48("31146"), '[[admin/manage/privileges:edit-posts]]')
})]), stryMutAct_9fa48("31147") ? [] : (stryCov_9fa48("31147"), [stryMutAct_9fa48("31148") ? "" : (stryCov_9fa48("31148"), 'posts:history'), stryMutAct_9fa48("31149") ? {} : (stryCov_9fa48("31149"), {
  label: stryMutAct_9fa48("31150") ? "" : (stryCov_9fa48("31150"), '[[admin/manage/privileges:view-edit-history]]')
})]), stryMutAct_9fa48("31151") ? [] : (stryCov_9fa48("31151"), [stryMutAct_9fa48("31152") ? "" : (stryCov_9fa48("31152"), 'posts:delete'), stryMutAct_9fa48("31153") ? {} : (stryCov_9fa48("31153"), {
  label: stryMutAct_9fa48("31154") ? "" : (stryCov_9fa48("31154"), '[[admin/manage/privileges:delete-posts]]')
})]), stryMutAct_9fa48("31155") ? [] : (stryCov_9fa48("31155"), [stryMutAct_9fa48("31156") ? "" : (stryCov_9fa48("31156"), 'posts:upvote'), stryMutAct_9fa48("31157") ? {} : (stryCov_9fa48("31157"), {
  label: stryMutAct_9fa48("31158") ? "" : (stryCov_9fa48("31158"), '[[admin/manage/privileges:upvote-posts]]')
})]), stryMutAct_9fa48("31159") ? [] : (stryCov_9fa48("31159"), [stryMutAct_9fa48("31160") ? "" : (stryCov_9fa48("31160"), 'posts:downvote'), stryMutAct_9fa48("31161") ? {} : (stryCov_9fa48("31161"), {
  label: stryMutAct_9fa48("31162") ? "" : (stryCov_9fa48("31162"), '[[admin/manage/privileges:downvote-posts]]')
})]), stryMutAct_9fa48("31163") ? [] : (stryCov_9fa48("31163"), [stryMutAct_9fa48("31164") ? "" : (stryCov_9fa48("31164"), 'topics:delete'), stryMutAct_9fa48("31165") ? {} : (stryCov_9fa48("31165"), {
  label: stryMutAct_9fa48("31166") ? "" : (stryCov_9fa48("31166"), '[[admin/manage/privileges:delete-topics]]')
})]), stryMutAct_9fa48("31167") ? [] : (stryCov_9fa48("31167"), [stryMutAct_9fa48("31168") ? "" : (stryCov_9fa48("31168"), 'posts:view_deleted'), stryMutAct_9fa48("31169") ? {} : (stryCov_9fa48("31169"), {
  label: stryMutAct_9fa48("31170") ? "" : (stryCov_9fa48("31170"), '[[admin/manage/privileges:view_deleted]]')
})]), stryMutAct_9fa48("31171") ? [] : (stryCov_9fa48("31171"), [stryMutAct_9fa48("31172") ? "" : (stryCov_9fa48("31172"), 'purge'), stryMutAct_9fa48("31173") ? {} : (stryCov_9fa48("31173"), {
  label: stryMutAct_9fa48("31174") ? "" : (stryCov_9fa48("31174"), '[[admin/manage/privileges:purge]]')
})]), stryMutAct_9fa48("31175") ? [] : (stryCov_9fa48("31175"), [stryMutAct_9fa48("31176") ? "" : (stryCov_9fa48("31176"), 'moderate'), stryMutAct_9fa48("31177") ? {} : (stryCov_9fa48("31177"), {
  label: stryMutAct_9fa48("31178") ? "" : (stryCov_9fa48("31178"), '[[admin/manage/privileges:moderate]]')
})])]));
privsCategories.getUserPrivilegeList = stryMutAct_9fa48("31179") ? () => undefined : (stryCov_9fa48("31179"), async () => await plugins.hooks.fire(stryMutAct_9fa48("31180") ? "" : (stryCov_9fa48("31180"), 'filter:privileges.list'), Array.from(_privilegeMap.keys())));
privsCategories.getGroupPrivilegeList = stryMutAct_9fa48("31181") ? () => undefined : (stryCov_9fa48("31181"), async () => await plugins.hooks.fire(stryMutAct_9fa48("31182") ? "" : (stryCov_9fa48("31182"), 'filter:privileges.groups.list'), Array.from(_privilegeMap.keys()).map(stryMutAct_9fa48("31183") ? () => undefined : (stryCov_9fa48("31183"), privilege => stryMutAct_9fa48("31184") ? `` : (stryCov_9fa48("31184"), `groups:${privilege}`)))));
privsCategories.getPrivilegeList = async () => {
  if (stryMutAct_9fa48("31185")) {
    {}
  } else {
    stryCov_9fa48("31185");
    const [user, group] = await Promise.all(stryMutAct_9fa48("31186") ? [] : (stryCov_9fa48("31186"), [privsCategories.getUserPrivilegeList(), privsCategories.getGroupPrivilegeList()]));
    return user.concat(group);
  }
};
privsCategories.init = async () => {
  if (stryMutAct_9fa48("31187")) {
    {}
  } else {
    stryCov_9fa48("31187");
    privsCategories._coreSize = _privilegeMap.size;
    await plugins.hooks.fire(stryMutAct_9fa48("31188") ? "" : (stryCov_9fa48("31188"), 'static:privileges.categories.init'), stryMutAct_9fa48("31189") ? {} : (stryCov_9fa48("31189"), {
      privileges: _privilegeMap
    }));
  }
};

// Method used in admin/category controller to show all users/groups with privs in that given cid
privsCategories.list = async function (cid) {
  if (stryMutAct_9fa48("31190")) {
    {}
  } else {
    stryCov_9fa48("31190");
    let labels = Array.from(_privilegeMap.values()).map(stryMutAct_9fa48("31191") ? () => undefined : (stryCov_9fa48("31191"), data => data.label));
    labels = await utils.promiseParallel(stryMutAct_9fa48("31192") ? {} : (stryCov_9fa48("31192"), {
      users: plugins.hooks.fire(stryMutAct_9fa48("31193") ? "" : (stryCov_9fa48("31193"), 'filter:privileges.list_human'), stryMutAct_9fa48("31194") ? labels : (stryCov_9fa48("31194"), labels.slice())),
      groups: plugins.hooks.fire(stryMutAct_9fa48("31195") ? "" : (stryCov_9fa48("31195"), 'filter:privileges.groups.list_human'), stryMutAct_9fa48("31196") ? labels : (stryCov_9fa48("31196"), labels.slice()))
    }));
    const keys = await utils.promiseParallel(stryMutAct_9fa48("31197") ? {} : (stryCov_9fa48("31197"), {
      users: privsCategories.getUserPrivilegeList(),
      groups: privsCategories.getGroupPrivilegeList()
    }));
    const payload = await utils.promiseParallel(stryMutAct_9fa48("31198") ? {} : (stryCov_9fa48("31198"), {
      labels,
      users: helpers.getUserPrivileges(cid, keys.users),
      groups: helpers.getGroupPrivileges(cid, keys.groups)
    }));
    payload.keys = keys;
    payload.columnCountUserOther = stryMutAct_9fa48("31199") ? payload.labels.users.length + privsCategories._coreSize : (stryCov_9fa48("31199"), payload.labels.users.length - privsCategories._coreSize);
    payload.columnCountGroupOther = stryMutAct_9fa48("31200") ? payload.labels.groups.length + privsCategories._coreSize : (stryCov_9fa48("31200"), payload.labels.groups.length - privsCategories._coreSize);
    return payload;
  }
};
privsCategories.get = async function (cid, uid) {
  if (stryMutAct_9fa48("31201")) {
    {}
  } else {
    stryCov_9fa48("31201");
    const privs = stryMutAct_9fa48("31202") ? [] : (stryCov_9fa48("31202"), [stryMutAct_9fa48("31203") ? "" : (stryCov_9fa48("31203"), 'topics:create'), stryMutAct_9fa48("31204") ? "" : (stryCov_9fa48("31204"), 'topics:read'), stryMutAct_9fa48("31205") ? "" : (stryCov_9fa48("31205"), 'topics:schedule'), stryMutAct_9fa48("31206") ? "" : (stryCov_9fa48("31206"), 'topics:tag'), stryMutAct_9fa48("31207") ? "" : (stryCov_9fa48("31207"), 'read'), stryMutAct_9fa48("31208") ? "" : (stryCov_9fa48("31208"), 'posts:view_deleted')]);
    const [userPrivileges, isAdministrator, isModerator] = await Promise.all(stryMutAct_9fa48("31209") ? [] : (stryCov_9fa48("31209"), [helpers.isAllowedTo(privs, uid, cid), user.isAdministrator(uid), user.isModerator(uid, cid)]));
    const combined = userPrivileges.map(stryMutAct_9fa48("31210") ? () => undefined : (stryCov_9fa48("31210"), allowed => stryMutAct_9fa48("31213") ? allowed && isAdministrator : stryMutAct_9fa48("31212") ? false : stryMutAct_9fa48("31211") ? true : (stryCov_9fa48("31211", "31212", "31213"), allowed || isAdministrator)));
    const privData = _.zipObject(privs, combined);
    const isAdminOrMod = stryMutAct_9fa48("31216") ? isAdministrator && isModerator : stryMutAct_9fa48("31215") ? false : stryMutAct_9fa48("31214") ? true : (stryCov_9fa48("31214", "31215", "31216"), isAdministrator || isModerator);
    return await plugins.hooks.fire(stryMutAct_9fa48("31217") ? "" : (stryCov_9fa48("31217"), 'filter:privileges.categories.get'), stryMutAct_9fa48("31218") ? {} : (stryCov_9fa48("31218"), {
      ...privData,
      cid: cid,
      uid: uid,
      editable: isAdminOrMod,
      view_deleted: stryMutAct_9fa48("31221") ? isAdminOrMod && privData['posts:view_deleted'] : stryMutAct_9fa48("31220") ? false : stryMutAct_9fa48("31219") ? true : (stryCov_9fa48("31219", "31220", "31221"), isAdminOrMod || privData[stryMutAct_9fa48("31222") ? "" : (stryCov_9fa48("31222"), 'posts:view_deleted')]),
      isAdminOrMod: isAdminOrMod
    }));
  }
};
privsCategories.isAdminOrMod = async function (cid, uid) {
  if (stryMutAct_9fa48("31223")) {
    {}
  } else {
    stryCov_9fa48("31223");
    if (stryMutAct_9fa48("31227") ? parseInt(uid, 10) > 0 : stryMutAct_9fa48("31226") ? parseInt(uid, 10) < 0 : stryMutAct_9fa48("31225") ? false : stryMutAct_9fa48("31224") ? true : (stryCov_9fa48("31224", "31225", "31226", "31227"), parseInt(uid, 10) <= 0)) {
      if (stryMutAct_9fa48("31228")) {
        {}
      } else {
        stryCov_9fa48("31228");
        return stryMutAct_9fa48("31229") ? true : (stryCov_9fa48("31229"), false);
      }
    }
    const [isAdmin, isMod] = await Promise.all(stryMutAct_9fa48("31230") ? [] : (stryCov_9fa48("31230"), [user.isAdministrator(uid), user.isModerator(uid, cid)]));
    return stryMutAct_9fa48("31233") ? isAdmin && isMod : stryMutAct_9fa48("31232") ? false : stryMutAct_9fa48("31231") ? true : (stryCov_9fa48("31231", "31232", "31233"), isAdmin || isMod);
  }
};
privsCategories.isUserAllowedTo = async function (privilege, cid, uid) {
  if (stryMutAct_9fa48("31234")) {
    {}
  } else {
    stryCov_9fa48("31234");
    if (stryMutAct_9fa48("31237") ? Array.isArray(privilege) && !privilege.length && Array.isArray(cid) && !cid.length : stryMutAct_9fa48("31236") ? false : stryMutAct_9fa48("31235") ? true : (stryCov_9fa48("31235", "31236", "31237"), (stryMutAct_9fa48("31239") ? Array.isArray(privilege) || !privilege.length : stryMutAct_9fa48("31238") ? false : (stryCov_9fa48("31238", "31239"), Array.isArray(privilege) && (stryMutAct_9fa48("31240") ? privilege.length : (stryCov_9fa48("31240"), !privilege.length)))) || (stryMutAct_9fa48("31242") ? Array.isArray(cid) || !cid.length : stryMutAct_9fa48("31241") ? false : (stryCov_9fa48("31241", "31242"), Array.isArray(cid) && (stryMutAct_9fa48("31243") ? cid.length : (stryCov_9fa48("31243"), !cid.length)))))) {
      if (stryMutAct_9fa48("31244")) {
        {}
      } else {
        stryCov_9fa48("31244");
        return stryMutAct_9fa48("31245") ? ["Stryker was here"] : (stryCov_9fa48("31245"), []);
      }
    }
    if (stryMutAct_9fa48("31248") ? false : stryMutAct_9fa48("31247") ? true : stryMutAct_9fa48("31246") ? cid : (stryCov_9fa48("31246", "31247", "31248"), !cid)) {
      if (stryMutAct_9fa48("31249")) {
        {}
      } else {
        stryCov_9fa48("31249");
        return stryMutAct_9fa48("31250") ? true : (stryCov_9fa48("31250"), false);
      }
    }
    const results = await helpers.isAllowedTo(privilege, uid, Array.isArray(cid) ? cid : stryMutAct_9fa48("31251") ? [] : (stryCov_9fa48("31251"), [cid]));
    if (stryMutAct_9fa48("31254") ? Array.isArray(results) || results.length : stryMutAct_9fa48("31253") ? false : stryMutAct_9fa48("31252") ? true : (stryCov_9fa48("31252", "31253", "31254"), Array.isArray(results) && results.length)) {
      if (stryMutAct_9fa48("31255")) {
        {}
      } else {
        stryCov_9fa48("31255");
        return Array.isArray(cid) ? results : results[0];
      }
    }
    return stryMutAct_9fa48("31256") ? true : (stryCov_9fa48("31256"), false);
  }
};
privsCategories.can = async function (privilege, cid, uid) {
  if (stryMutAct_9fa48("31257")) {
    {}
  } else {
    stryCov_9fa48("31257");
    if (stryMutAct_9fa48("31260") ? false : stryMutAct_9fa48("31259") ? true : stryMutAct_9fa48("31258") ? cid : (stryCov_9fa48("31258", "31259", "31260"), !cid)) {
      if (stryMutAct_9fa48("31261")) {
        {}
      } else {
        stryCov_9fa48("31261");
        return stryMutAct_9fa48("31262") ? true : (stryCov_9fa48("31262"), false);
      }
    }
    const [disabled, isAdmin, isAllowed] = await Promise.all(stryMutAct_9fa48("31263") ? [] : (stryCov_9fa48("31263"), [categories.getCategoryField(cid, stryMutAct_9fa48("31264") ? "" : (stryCov_9fa48("31264"), 'disabled')), user.isAdministrator(uid), privsCategories.isUserAllowedTo(privilege, cid, uid)]));
    return stryMutAct_9fa48("31267") ? !disabled || isAllowed || isAdmin : stryMutAct_9fa48("31266") ? false : stryMutAct_9fa48("31265") ? true : (stryCov_9fa48("31265", "31266", "31267"), (stryMutAct_9fa48("31268") ? disabled : (stryCov_9fa48("31268"), !disabled)) && (stryMutAct_9fa48("31270") ? isAllowed && isAdmin : stryMutAct_9fa48("31269") ? true : (stryCov_9fa48("31269", "31270"), isAllowed || isAdmin)));
  }
};
privsCategories.filterCids = async function (privilege, cids, uid) {
  if (stryMutAct_9fa48("31271")) {
    {}
  } else {
    stryCov_9fa48("31271");
    if (stryMutAct_9fa48("31274") ? !Array.isArray(cids) && !cids.length : stryMutAct_9fa48("31273") ? false : stryMutAct_9fa48("31272") ? true : (stryCov_9fa48("31272", "31273", "31274"), (stryMutAct_9fa48("31275") ? Array.isArray(cids) : (stryCov_9fa48("31275"), !Array.isArray(cids))) || (stryMutAct_9fa48("31276") ? cids.length : (stryCov_9fa48("31276"), !cids.length)))) {
      if (stryMutAct_9fa48("31277")) {
        {}
      } else {
        stryCov_9fa48("31277");
        return stryMutAct_9fa48("31278") ? ["Stryker was here"] : (stryCov_9fa48("31278"), []);
      }
    }
    cids = _.uniq(cids);
    const [categoryData, allowedTo, isAdmin] = await Promise.all(stryMutAct_9fa48("31279") ? [] : (stryCov_9fa48("31279"), [categories.getCategoriesFields(cids, stryMutAct_9fa48("31280") ? [] : (stryCov_9fa48("31280"), [stryMutAct_9fa48("31281") ? "" : (stryCov_9fa48("31281"), 'disabled')])), helpers.isAllowedTo(privilege, uid, cids), user.isAdministrator(uid)]));
    return stryMutAct_9fa48("31282") ? cids : (stryCov_9fa48("31282"), cids.filter(stryMutAct_9fa48("31283") ? () => undefined : (stryCov_9fa48("31283"), (cid, index) => stryMutAct_9fa48("31286") ? !!cid && !categoryData[index].disabled || allowedTo[index] || isAdmin : stryMutAct_9fa48("31285") ? false : stryMutAct_9fa48("31284") ? true : (stryCov_9fa48("31284", "31285", "31286"), (stryMutAct_9fa48("31288") ? !!cid || !categoryData[index].disabled : stryMutAct_9fa48("31287") ? true : (stryCov_9fa48("31287", "31288"), (stryMutAct_9fa48("31289") ? !cid : (stryCov_9fa48("31289"), !(stryMutAct_9fa48("31290") ? cid : (stryCov_9fa48("31290"), !cid)))) && (stryMutAct_9fa48("31291") ? categoryData[index].disabled : (stryCov_9fa48("31291"), !categoryData[index].disabled)))) && (stryMutAct_9fa48("31293") ? allowedTo[index] && isAdmin : stryMutAct_9fa48("31292") ? true : (stryCov_9fa48("31292", "31293"), allowedTo[index] || isAdmin))))));
  }
};
privsCategories.getBase = async function (privilege, cids, uid) {
  if (stryMutAct_9fa48("31294")) {
    {}
  } else {
    stryCov_9fa48("31294");
    return await utils.promiseParallel(stryMutAct_9fa48("31295") ? {} : (stryCov_9fa48("31295"), {
      categories: categories.getCategoriesFields(cids, stryMutAct_9fa48("31296") ? [] : (stryCov_9fa48("31296"), [stryMutAct_9fa48("31297") ? "" : (stryCov_9fa48("31297"), 'disabled')])),
      allowedTo: helpers.isAllowedTo(privilege, uid, cids),
      view_deleted: helpers.isAllowedTo(stryMutAct_9fa48("31298") ? "" : (stryCov_9fa48("31298"), 'posts:view_deleted'), uid, cids),
      view_scheduled: helpers.isAllowedTo(stryMutAct_9fa48("31299") ? "" : (stryCov_9fa48("31299"), 'topics:schedule'), uid, cids),
      isAdmin: user.isAdministrator(uid)
    }));
  }
};
privsCategories.filterUids = async function (privilege, cid, uids) {
  if (stryMutAct_9fa48("31300")) {
    {}
  } else {
    stryCov_9fa48("31300");
    if (stryMutAct_9fa48("31303") ? false : stryMutAct_9fa48("31302") ? true : stryMutAct_9fa48("31301") ? uids.length : (stryCov_9fa48("31301", "31302", "31303"), !uids.length)) {
      if (stryMutAct_9fa48("31304")) {
        {}
      } else {
        stryCov_9fa48("31304");
        return stryMutAct_9fa48("31305") ? ["Stryker was here"] : (stryCov_9fa48("31305"), []);
      }
    }
    uids = _.uniq(uids);
    const [allowedTo, isAdmins] = await Promise.all(stryMutAct_9fa48("31306") ? [] : (stryCov_9fa48("31306"), [helpers.isUsersAllowedTo(privilege, uids, cid), user.isAdministrator(uids)]));
    return stryMutAct_9fa48("31307") ? uids : (stryCov_9fa48("31307"), uids.filter(stryMutAct_9fa48("31308") ? () => undefined : (stryCov_9fa48("31308"), (uid, index) => stryMutAct_9fa48("31311") ? allowedTo[index] && isAdmins[index] : stryMutAct_9fa48("31310") ? false : stryMutAct_9fa48("31309") ? true : (stryCov_9fa48("31309", "31310", "31311"), allowedTo[index] || isAdmins[index]))));
  }
};
privsCategories.give = async function (privileges, cid, members) {
  if (stryMutAct_9fa48("31312")) {
    {}
  } else {
    stryCov_9fa48("31312");
    await helpers.giveOrRescind(groups.join, privileges, cid, members);
    plugins.hooks.fire(stryMutAct_9fa48("31313") ? "" : (stryCov_9fa48("31313"), 'action:privileges.categories.give'), stryMutAct_9fa48("31314") ? {} : (stryCov_9fa48("31314"), {
      privileges: privileges,
      cids: Array.isArray(cid) ? cid : stryMutAct_9fa48("31315") ? [] : (stryCov_9fa48("31315"), [cid]),
      members: Array.isArray(members) ? members : stryMutAct_9fa48("31316") ? [] : (stryCov_9fa48("31316"), [members])
    }));
  }
};
privsCategories.rescind = async function (privileges, cid, members) {
  if (stryMutAct_9fa48("31317")) {
    {}
  } else {
    stryCov_9fa48("31317");
    await helpers.giveOrRescind(groups.leave, privileges, cid, members);
    plugins.hooks.fire(stryMutAct_9fa48("31318") ? "" : (stryCov_9fa48("31318"), 'action:privileges.categories.rescind'), stryMutAct_9fa48("31319") ? {} : (stryCov_9fa48("31319"), {
      privileges: privileges,
      cids: Array.isArray(cid) ? cid : stryMutAct_9fa48("31320") ? [] : (stryCov_9fa48("31320"), [cid]),
      members: Array.isArray(members) ? members : stryMutAct_9fa48("31321") ? [] : (stryCov_9fa48("31321"), [members])
    }));
  }
};
privsCategories.canMoveAllTopics = async function (currentCid, targetCid, uid) {
  if (stryMutAct_9fa48("31322")) {
    {}
  } else {
    stryCov_9fa48("31322");
    const [isAdmin, isModerators] = await Promise.all(stryMutAct_9fa48("31323") ? [] : (stryCov_9fa48("31323"), [user.isAdministrator(uid), user.isModerator(uid, stryMutAct_9fa48("31324") ? [] : (stryCov_9fa48("31324"), [currentCid, targetCid]))]));
    return stryMutAct_9fa48("31327") ? isAdmin && !isModerators.includes(false) : stryMutAct_9fa48("31326") ? false : stryMutAct_9fa48("31325") ? true : (stryCov_9fa48("31325", "31326", "31327"), isAdmin || (stryMutAct_9fa48("31328") ? isModerators.includes(false) : (stryCov_9fa48("31328"), !isModerators.includes(stryMutAct_9fa48("31329") ? true : (stryCov_9fa48("31329"), false)))));
  }
};
privsCategories.userPrivileges = async function (cid, uid) {
  if (stryMutAct_9fa48("31330")) {
    {}
  } else {
    stryCov_9fa48("31330");
    const userPrivilegeList = await privsCategories.getUserPrivilegeList();
    return await helpers.userOrGroupPrivileges(cid, uid, userPrivilegeList);
  }
};
privsCategories.groupPrivileges = async function (cid, groupName) {
  if (stryMutAct_9fa48("31331")) {
    {}
  } else {
    stryCov_9fa48("31331");
    const groupPrivilegeList = await privsCategories.getGroupPrivilegeList();
    return await helpers.userOrGroupPrivileges(cid, groupName, groupPrivilegeList);
  }
};