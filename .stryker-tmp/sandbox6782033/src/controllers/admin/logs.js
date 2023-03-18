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
const winston = require('winston');
const meta = require('../../meta');
const logsController = module.exports;
logsController.get = async function (req, res) {
  if (stryMutAct_9fa48("7344")) {
    {}
  } else {
    stryCov_9fa48("7344");
    let logs = stryMutAct_9fa48("7345") ? "Stryker was here!" : (stryCov_9fa48("7345"), '');
    try {
      if (stryMutAct_9fa48("7346")) {
        {}
      } else {
        stryCov_9fa48("7346");
        logs = await meta.logs.get();
      }
    } catch (err) {
      if (stryMutAct_9fa48("7347")) {
        {}
      } else {
        stryCov_9fa48("7347");
        winston.error(err.stack);
      }
    }
    res.render(stryMutAct_9fa48("7348") ? "" : (stryCov_9fa48("7348"), 'admin/advanced/logs'), stryMutAct_9fa48("7349") ? {} : (stryCov_9fa48("7349"), {
      data: validator.escape(logs)
    }));
  }
};