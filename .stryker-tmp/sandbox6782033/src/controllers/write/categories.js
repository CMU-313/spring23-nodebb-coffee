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
const privileges = require('../../privileges');
const categories = require('../../categories');
const api = require('../../api');
const helpers = require('../helpers');
const Categories = module.exports;
const hasAdminPrivilege = async uid => {
  if (stryMutAct_9fa48("12290")) {
    {}
  } else {
    stryCov_9fa48("12290");
    const ok = await privileges.admin.can(stryMutAct_9fa48("12291") ? `` : (stryCov_9fa48("12291"), `admin:categories`), uid);
    if (stryMutAct_9fa48("12294") ? false : stryMutAct_9fa48("12293") ? true : stryMutAct_9fa48("12292") ? ok : (stryCov_9fa48("12292", "12293", "12294"), !ok)) {
      if (stryMutAct_9fa48("12295")) {
        {}
      } else {
        stryCov_9fa48("12295");
        throw new Error(stryMutAct_9fa48("12296") ? "" : (stryCov_9fa48("12296"), '[[error:no-privileges]]'));
      }
    }
  }
};
Categories.get = async (req, res) => {
  if (stryMutAct_9fa48("12297")) {
    {}
  } else {
    stryCov_9fa48("12297");
    helpers.formatApiResponse(200, res, await api.categories.get(req, req.params));
  }
};
Categories.create = async (req, res) => {
  if (stryMutAct_9fa48("12298")) {
    {}
  } else {
    stryCov_9fa48("12298");
    await hasAdminPrivilege(req.uid);
    const response = await api.categories.create(req, req.body);
    helpers.formatApiResponse(200, res, response);
  }
};
Categories.update = async (req, res) => {
  if (stryMutAct_9fa48("12299")) {
    {}
  } else {
    stryCov_9fa48("12299");
    await hasAdminPrivilege(req.uid);
    const payload = {};
    payload[req.params.cid] = req.body;
    await api.categories.update(req, payload);
    const categoryObjs = await categories.getCategories(stryMutAct_9fa48("12300") ? [] : (stryCov_9fa48("12300"), [req.params.cid]));
    helpers.formatApiResponse(200, res, categoryObjs[0]);
  }
};
Categories.delete = async (req, res) => {
  if (stryMutAct_9fa48("12301")) {
    {}
  } else {
    stryCov_9fa48("12301");
    await hasAdminPrivilege(req.uid);
    await api.categories.delete(req, stryMutAct_9fa48("12302") ? {} : (stryCov_9fa48("12302"), {
      cid: req.params.cid
    }));
    helpers.formatApiResponse(200, res);
  }
};
Categories.getPrivileges = async (req, res) => {
  if (stryMutAct_9fa48("12303")) {
    {}
  } else {
    stryCov_9fa48("12303");
    if (stryMutAct_9fa48("12306") ? false : stryMutAct_9fa48("12305") ? true : stryMutAct_9fa48("12304") ? await privileges.admin.can('admin:privileges', req.uid) : (stryCov_9fa48("12304", "12305", "12306"), !(await privileges.admin.can(stryMutAct_9fa48("12307") ? "" : (stryCov_9fa48("12307"), 'admin:privileges'), req.uid)))) {
      if (stryMutAct_9fa48("12308")) {
        {}
      } else {
        stryCov_9fa48("12308");
        throw new Error(stryMutAct_9fa48("12309") ? "" : (stryCov_9fa48("12309"), '[[error:no-privileges]]'));
      }
    }
    const privilegeSet = await api.categories.getPrivileges(req, req.params.cid);
    helpers.formatApiResponse(200, res, privilegeSet);
  }
};
Categories.setPrivilege = async (req, res) => {
  if (stryMutAct_9fa48("12310")) {
    {}
  } else {
    stryCov_9fa48("12310");
    if (stryMutAct_9fa48("12313") ? false : stryMutAct_9fa48("12312") ? true : stryMutAct_9fa48("12311") ? await privileges.admin.can('admin:privileges', req.uid) : (stryCov_9fa48("12311", "12312", "12313"), !(await privileges.admin.can(stryMutAct_9fa48("12314") ? "" : (stryCov_9fa48("12314"), 'admin:privileges'), req.uid)))) {
      if (stryMutAct_9fa48("12315")) {
        {}
      } else {
        stryCov_9fa48("12315");
        throw new Error(stryMutAct_9fa48("12316") ? "" : (stryCov_9fa48("12316"), '[[error:no-privileges]]'));
      }
    }
    await api.categories.setPrivilege(req, stryMutAct_9fa48("12317") ? {} : (stryCov_9fa48("12317"), {
      ...req.params,
      member: req.body.member,
      set: stryMutAct_9fa48("12320") ? req.method !== 'PUT' : stryMutAct_9fa48("12319") ? false : stryMutAct_9fa48("12318") ? true : (stryCov_9fa48("12318", "12319", "12320"), req.method === (stryMutAct_9fa48("12321") ? "" : (stryCov_9fa48("12321"), 'PUT')))
    }));
    const privilegeSet = await api.categories.getPrivileges(req, req.params.cid);
    helpers.formatApiResponse(200, res, privilegeSet);
  }
};
Categories.setModerator = async (req, res) => {
  if (stryMutAct_9fa48("12322")) {
    {}
  } else {
    stryCov_9fa48("12322");
    if (stryMutAct_9fa48("12325") ? false : stryMutAct_9fa48("12324") ? true : stryMutAct_9fa48("12323") ? await privileges.admin.can('admin:admins-mods', req.uid) : (stryCov_9fa48("12323", "12324", "12325"), !(await privileges.admin.can(stryMutAct_9fa48("12326") ? "" : (stryCov_9fa48("12326"), 'admin:admins-mods'), req.uid)))) {
      if (stryMutAct_9fa48("12327")) {
        {}
      } else {
        stryCov_9fa48("12327");
        throw new Error(stryMutAct_9fa48("12328") ? "" : (stryCov_9fa48("12328"), '[[error:no-privileges]]'));
      }
    }
    const privilegeList = await privileges.categories.getUserPrivilegeList();
    await api.categories.setPrivilege(req, stryMutAct_9fa48("12329") ? {} : (stryCov_9fa48("12329"), {
      cid: req.params.cid,
      privilege: privilegeList,
      member: req.params.uid,
      set: stryMutAct_9fa48("12332") ? req.method !== 'PUT' : stryMutAct_9fa48("12331") ? false : stryMutAct_9fa48("12330") ? true : (stryCov_9fa48("12330", "12331", "12332"), req.method === (stryMutAct_9fa48("12333") ? "" : (stryCov_9fa48("12333"), 'PUT')))
    }));
    helpers.formatApiResponse(200, res);
  }
};