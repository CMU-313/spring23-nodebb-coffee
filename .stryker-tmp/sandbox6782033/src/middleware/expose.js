// @ts-nocheck
'use strict';

/**
 * The middlewares here strictly act to "expose" certain values from the database,
 * into `res.locals` for use in middlewares and/or controllers down the line
 */
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
const user = require('../user');
const privileges = require('../privileges');
const utils = require('../utils');
module.exports = function (middleware) {
  if (stryMutAct_9fa48("25361")) {
    {}
  } else {
    stryCov_9fa48("25361");
    middleware.exposeAdmin = async (req, res, next) => {
      if (stryMutAct_9fa48("25362")) {
        {}
      } else {
        stryCov_9fa48("25362");
        // Unlike `requireAdmin`, this middleware just checks the uid, and sets `isAdmin` in `res.locals`
        res.locals.isAdmin = stryMutAct_9fa48("25363") ? true : (stryCov_9fa48("25363"), false);
        if (stryMutAct_9fa48("25366") ? false : stryMutAct_9fa48("25365") ? true : stryMutAct_9fa48("25364") ? req.user : (stryCov_9fa48("25364", "25365", "25366"), !req.user)) {
          if (stryMutAct_9fa48("25367")) {
            {}
          } else {
            stryCov_9fa48("25367");
            return next();
          }
        }
        res.locals.isAdmin = await user.isAdministrator(req.user.uid);
        next();
      }
    };
    middleware.exposePrivileges = async (req, res, next) => {
      if (stryMutAct_9fa48("25368")) {
        {}
      } else {
        stryCov_9fa48("25368");
        // Exposes a hash of user's ranks (admin, gmod, etc.)
        const hash = await utils.promiseParallel(stryMutAct_9fa48("25369") ? {} : (stryCov_9fa48("25369"), {
          isAdmin: user.isAdministrator(req.user.uid),
          isGmod: user.isGlobalModerator(req.user.uid),
          isPrivileged: user.isPrivileged(req.user.uid)
        }));
        if (stryMutAct_9fa48("25371") ? false : stryMutAct_9fa48("25370") ? true : (stryCov_9fa48("25370", "25371"), req.params.uid)) {
          if (stryMutAct_9fa48("25372")) {
            {}
          } else {
            stryCov_9fa48("25372");
            hash.isSelf = stryMutAct_9fa48("25375") ? parseInt(req.params.uid, 10) !== req.user.uid : stryMutAct_9fa48("25374") ? false : stryMutAct_9fa48("25373") ? true : (stryCov_9fa48("25373", "25374", "25375"), parseInt(req.params.uid, 10) === req.user.uid);
          }
        }
        res.locals.privileges = hash;
        next();
      }
    };
    middleware.exposePrivilegeSet = async (req, res, next) => {
      if (stryMutAct_9fa48("25376")) {
        {}
      } else {
        stryCov_9fa48("25376");
        // Exposes a user's global/admin privilege set
        res.locals.privileges = stryMutAct_9fa48("25377") ? {} : (stryCov_9fa48("25377"), {
          ...(await privileges.global.get(req.user.uid)),
          ...(await privileges.admin.get(req.user.uid))
        });
        next();
      }
    };
  }
};