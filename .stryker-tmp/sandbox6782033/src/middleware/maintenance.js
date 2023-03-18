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
const util = require('util');
const nconf = require('nconf');
const meta = require('../meta');
const user = require('../user');
const groups = require('../groups');
const helpers = require('./helpers');
module.exports = function (middleware) {
  if (stryMutAct_9fa48("26033")) {
    {}
  } else {
    stryCov_9fa48("26033");
    middleware.maintenanceMode = helpers.try(async (req, res, next) => {
      if (stryMutAct_9fa48("26034")) {
        {}
      } else {
        stryCov_9fa48("26034");
        if (stryMutAct_9fa48("26037") ? false : stryMutAct_9fa48("26036") ? true : stryMutAct_9fa48("26035") ? meta.config.maintenanceMode : (stryCov_9fa48("26035", "26036", "26037"), !meta.config.maintenanceMode)) {
          if (stryMutAct_9fa48("26038")) {
            {}
          } else {
            stryCov_9fa48("26038");
            return next();
          }
        }
        const hooksAsync = util.promisify(middleware.pluginHooks);
        await hooksAsync(req, res);
        const url = req.url.replace(nconf.get(stryMutAct_9fa48("26039") ? "" : (stryCov_9fa48("26039"), 'relative_path')), stryMutAct_9fa48("26040") ? "Stryker was here!" : (stryCov_9fa48("26040"), ''));
        if (stryMutAct_9fa48("26043") ? url.startsWith('/login') && url.startsWith('/api/login') : stryMutAct_9fa48("26042") ? false : stryMutAct_9fa48("26041") ? true : (stryCov_9fa48("26041", "26042", "26043"), (stryMutAct_9fa48("26044") ? url.endsWith('/login') : (stryCov_9fa48("26044"), url.startsWith(stryMutAct_9fa48("26045") ? "" : (stryCov_9fa48("26045"), '/login')))) || (stryMutAct_9fa48("26046") ? url.endsWith('/api/login') : (stryCov_9fa48("26046"), url.startsWith(stryMutAct_9fa48("26047") ? "" : (stryCov_9fa48("26047"), '/api/login')))))) {
          if (stryMutAct_9fa48("26048")) {
            {}
          } else {
            stryCov_9fa48("26048");
            return next();
          }
        }
        const [isAdmin, isMemberOfExempt] = await Promise.all(stryMutAct_9fa48("26049") ? [] : (stryCov_9fa48("26049"), [user.isAdministrator(req.uid), groups.isMemberOfAny(req.uid, meta.config.groupsExemptFromMaintenanceMode)]));
        if (stryMutAct_9fa48("26052") ? isAdmin && isMemberOfExempt : stryMutAct_9fa48("26051") ? false : stryMutAct_9fa48("26050") ? true : (stryCov_9fa48("26050", "26051", "26052"), isAdmin || isMemberOfExempt)) {
          if (stryMutAct_9fa48("26053")) {
            {}
          } else {
            stryCov_9fa48("26053");
            return next();
          }
        }
        res.status(meta.config.maintenanceModeStatus);
        const data = stryMutAct_9fa48("26054") ? {} : (stryCov_9fa48("26054"), {
          site_title: stryMutAct_9fa48("26057") ? meta.config.title && 'NodeBB' : stryMutAct_9fa48("26056") ? false : stryMutAct_9fa48("26055") ? true : (stryCov_9fa48("26055", "26056", "26057"), meta.config.title || (stryMutAct_9fa48("26058") ? "" : (stryCov_9fa48("26058"), 'NodeBB'))),
          message: meta.config.maintenanceModeMessage
        });
        if (stryMutAct_9fa48("26060") ? false : stryMutAct_9fa48("26059") ? true : (stryCov_9fa48("26059", "26060"), res.locals.isAPI)) {
          if (stryMutAct_9fa48("26061")) {
            {}
          } else {
            stryCov_9fa48("26061");
            return res.json(data);
          }
        }
        await middleware.buildHeaderAsync(req, res);
        res.render(stryMutAct_9fa48("26062") ? "" : (stryCov_9fa48("26062"), '503'), data);
      }
    });
  }
};