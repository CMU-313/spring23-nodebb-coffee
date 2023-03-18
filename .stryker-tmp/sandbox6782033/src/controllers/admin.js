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
const privileges = require('../privileges');
const helpers = require('./helpers');
const adminController = stryMutAct_9fa48("8079") ? {} : (stryCov_9fa48("8079"), {
  dashboard: require('./admin/dashboard'),
  categories: require('./admin/categories'),
  privileges: require('./admin/privileges'),
  adminsMods: require('./admin/admins-mods'),
  tags: require('./admin/tags'),
  groups: require('./admin/groups'),
  digest: require('./admin/digest'),
  appearance: require('./admin/appearance'),
  extend: stryMutAct_9fa48("8080") ? {} : (stryCov_9fa48("8080"), {
    widgets: require('./admin/widgets'),
    rewards: require('./admin/rewards')
  }),
  events: require('./admin/events'),
  hooks: require('./admin/hooks'),
  logs: require('./admin/logs'),
  errors: require('./admin/errors'),
  database: require('./admin/database'),
  cache: require('./admin/cache'),
  plugins: require('./admin/plugins'),
  settings: require('./admin/settings'),
  logger: require('./admin/logger'),
  themes: require('./admin/themes'),
  users: require('./admin/users'),
  uploads: require('./admin/uploads'),
  info: require('./admin/info')
});
adminController.routeIndex = async (req, res) => {
  if (stryMutAct_9fa48("8081")) {
    {}
  } else {
    stryCov_9fa48("8081");
    const privilegeSet = await privileges.admin.get(req.uid);
    if (stryMutAct_9fa48("8084") ? privilegeSet.superadmin && privilegeSet['admin:dashboard'] : stryMutAct_9fa48("8083") ? false : stryMutAct_9fa48("8082") ? true : (stryCov_9fa48("8082", "8083", "8084"), privilegeSet.superadmin || privilegeSet[stryMutAct_9fa48("8085") ? "" : (stryCov_9fa48("8085"), 'admin:dashboard')])) {
      if (stryMutAct_9fa48("8086")) {
        {}
      } else {
        stryCov_9fa48("8086");
        return adminController.dashboard.get(req, res);
      }
    } else if (stryMutAct_9fa48("8088") ? false : stryMutAct_9fa48("8087") ? true : (stryCov_9fa48("8087", "8088"), privilegeSet[stryMutAct_9fa48("8089") ? "" : (stryCov_9fa48("8089"), 'admin:categories')])) {
      if (stryMutAct_9fa48("8090")) {
        {}
      } else {
        stryCov_9fa48("8090");
        return helpers.redirect(res, stryMutAct_9fa48("8091") ? "" : (stryCov_9fa48("8091"), 'admin/manage/categories'));
      }
    } else if (stryMutAct_9fa48("8093") ? false : stryMutAct_9fa48("8092") ? true : (stryCov_9fa48("8092", "8093"), privilegeSet[stryMutAct_9fa48("8094") ? "" : (stryCov_9fa48("8094"), 'admin:privileges')])) {
      if (stryMutAct_9fa48("8095")) {
        {}
      } else {
        stryCov_9fa48("8095");
        return helpers.redirect(res, stryMutAct_9fa48("8096") ? "" : (stryCov_9fa48("8096"), 'admin/manage/privileges'));
      }
    } else if (stryMutAct_9fa48("8098") ? false : stryMutAct_9fa48("8097") ? true : (stryCov_9fa48("8097", "8098"), privilegeSet[stryMutAct_9fa48("8099") ? "" : (stryCov_9fa48("8099"), 'admin:users')])) {
      if (stryMutAct_9fa48("8100")) {
        {}
      } else {
        stryCov_9fa48("8100");
        return helpers.redirect(res, stryMutAct_9fa48("8101") ? "" : (stryCov_9fa48("8101"), 'admin/manage/users'));
      }
    } else if (stryMutAct_9fa48("8103") ? false : stryMutAct_9fa48("8102") ? true : (stryCov_9fa48("8102", "8103"), privilegeSet[stryMutAct_9fa48("8104") ? "" : (stryCov_9fa48("8104"), 'admin:groups')])) {
      if (stryMutAct_9fa48("8105")) {
        {}
      } else {
        stryCov_9fa48("8105");
        return helpers.redirect(res, stryMutAct_9fa48("8106") ? "" : (stryCov_9fa48("8106"), 'admin/manage/groups'));
      }
    } else if (stryMutAct_9fa48("8108") ? false : stryMutAct_9fa48("8107") ? true : (stryCov_9fa48("8107", "8108"), privilegeSet[stryMutAct_9fa48("8109") ? "" : (stryCov_9fa48("8109"), 'admin:admins-mods')])) {
      if (stryMutAct_9fa48("8110")) {
        {}
      } else {
        stryCov_9fa48("8110");
        return helpers.redirect(res, stryMutAct_9fa48("8111") ? "" : (stryCov_9fa48("8111"), 'admin/manage/admins-mods'));
      }
    } else if (stryMutAct_9fa48("8113") ? false : stryMutAct_9fa48("8112") ? true : (stryCov_9fa48("8112", "8113"), privilegeSet[stryMutAct_9fa48("8114") ? "" : (stryCov_9fa48("8114"), 'admin:tags')])) {
      if (stryMutAct_9fa48("8115")) {
        {}
      } else {
        stryCov_9fa48("8115");
        return helpers.redirect(res, stryMutAct_9fa48("8116") ? "" : (stryCov_9fa48("8116"), 'admin/manage/tags'));
      }
    } else if (stryMutAct_9fa48("8118") ? false : stryMutAct_9fa48("8117") ? true : (stryCov_9fa48("8117", "8118"), privilegeSet[stryMutAct_9fa48("8119") ? "" : (stryCov_9fa48("8119"), 'admin:settings')])) {
      if (stryMutAct_9fa48("8120")) {
        {}
      } else {
        stryCov_9fa48("8120");
        return helpers.redirect(res, stryMutAct_9fa48("8121") ? "" : (stryCov_9fa48("8121"), 'admin/settings/general'));
      }
    }
    return helpers.notAllowed(req, res);
  }
};
module.exports = adminController;