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
const categories = require('../../categories');
const Categories = module.exports;
Categories.getNames = async function () {
  if (stryMutAct_9fa48("34877")) {
    {}
  } else {
    stryCov_9fa48("34877");
    return await categories.getAllCategoryFields(stryMutAct_9fa48("34878") ? [] : (stryCov_9fa48("34878"), [stryMutAct_9fa48("34879") ? "" : (stryCov_9fa48("34879"), 'cid'), stryMutAct_9fa48("34880") ? "" : (stryCov_9fa48("34880"), 'name')]));
  }
};
Categories.copyPrivilegesToChildren = async function (socket, data) {
  if (stryMutAct_9fa48("34881")) {
    {}
  } else {
    stryCov_9fa48("34881");
    const result = await categories.getChildren(stryMutAct_9fa48("34882") ? [] : (stryCov_9fa48("34882"), [data.cid]), socket.uid);
    const children = result[0];
    for (const child of children) {
      if (stryMutAct_9fa48("34883")) {
        {}
      } else {
        stryCov_9fa48("34883");
        // eslint-disable-next-line no-await-in-loop
        await copyPrivilegesToChildrenRecursive(data.cid, child, data.group, data.filter);
      }
    }
  }
};
async function copyPrivilegesToChildrenRecursive(parentCid, category, group, filter) {
  if (stryMutAct_9fa48("34884")) {
    {}
  } else {
    stryCov_9fa48("34884");
    await categories.copyPrivilegesFrom(parentCid, category.cid, group, filter);
    for (const child of category.children) {
      if (stryMutAct_9fa48("34885")) {
        {}
      } else {
        stryCov_9fa48("34885");
        // eslint-disable-next-line no-await-in-loop
        await copyPrivilegesToChildrenRecursive(parentCid, child, group, filter);
      }
    }
  }
}
Categories.copySettingsFrom = async function (socket, data) {
  if (stryMutAct_9fa48("34886")) {
    {}
  } else {
    stryCov_9fa48("34886");
    return await categories.copySettingsFrom(data.fromCid, data.toCid, data.copyParent);
  }
};
Categories.copyPrivilegesFrom = async function (socket, data) {
  if (stryMutAct_9fa48("34887")) {
    {}
  } else {
    stryCov_9fa48("34887");
    await categories.copyPrivilegesFrom(data.fromCid, data.toCid, data.group, data.filter);
  }
};
Categories.copyPrivilegesToAllCategories = async function (socket, data) {
  if (stryMutAct_9fa48("34888")) {
    {}
  } else {
    stryCov_9fa48("34888");
    let cids = await categories.getAllCidsFromSet(stryMutAct_9fa48("34889") ? "" : (stryCov_9fa48("34889"), 'categories:cid'));
    cids = stryMutAct_9fa48("34890") ? cids : (stryCov_9fa48("34890"), cids.filter(stryMutAct_9fa48("34891") ? () => undefined : (stryCov_9fa48("34891"), cid => stryMutAct_9fa48("34894") ? parseInt(cid, 10) === parseInt(data.cid, 10) : stryMutAct_9fa48("34893") ? false : stryMutAct_9fa48("34892") ? true : (stryCov_9fa48("34892", "34893", "34894"), parseInt(cid, 10) !== parseInt(data.cid, 10)))));
    for (const toCid of cids) {
      if (stryMutAct_9fa48("34895")) {
        {}
      } else {
        stryCov_9fa48("34895");
        // eslint-disable-next-line no-await-in-loop
        await categories.copyPrivilegesFrom(data.cid, toCid, data.group, data.filter);
      }
    }
  }
};