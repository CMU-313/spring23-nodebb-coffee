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
const user = require('../../user');
const authenticationController = require('../authentication');
const helpers = require('../helpers');
const Utilities = module.exports;
Utilities.ping = {};
Utilities.ping.get = (req, res) => {
  if (stryMutAct_9fa48("12891")) {
    {}
  } else {
    stryCov_9fa48("12891");
    helpers.formatApiResponse(200, res, stryMutAct_9fa48("12892") ? {} : (stryCov_9fa48("12892"), {
      pong: stryMutAct_9fa48("12893") ? false : (stryCov_9fa48("12893"), true)
    }));
  }
};
Utilities.ping.post = (req, res) => {
  if (stryMutAct_9fa48("12894")) {
    {}
  } else {
    stryCov_9fa48("12894");
    helpers.formatApiResponse(200, res, stryMutAct_9fa48("12895") ? {} : (stryCov_9fa48("12895"), {
      uid: req.user.uid,
      received: req.body
    }));
  }
};
Utilities.login = (req, res) => {
  if (stryMutAct_9fa48("12896")) {
    {}
  } else {
    stryCov_9fa48("12896");
    res.locals.redirectAfterLogin = async (req, res) => {
      if (stryMutAct_9fa48("12897")) {
        {}
      } else {
        stryCov_9fa48("12897");
        const userData = (await user.getUsers(stryMutAct_9fa48("12898") ? [] : (stryCov_9fa48("12898"), [req.uid]), req.uid)).pop();
        helpers.formatApiResponse(200, res, userData);
      }
    };
    res.locals.noScriptErrors = (req, res, err, statusCode) => {
      if (stryMutAct_9fa48("12899")) {
        {}
      } else {
        stryCov_9fa48("12899");
        helpers.formatApiResponse(statusCode, res, new Error(err));
      }
    };
    authenticationController.login(req, res);
  }
};