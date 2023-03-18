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
const nconf = require('nconf');
const db = require('../database');
module.exports.ping = async function (req, res, next) {
  if (stryMutAct_9fa48("10814")) {
    {}
  } else {
    stryCov_9fa48("10814");
    try {
      if (stryMutAct_9fa48("10815")) {
        {}
      } else {
        stryCov_9fa48("10815");
        await db.getObject(stryMutAct_9fa48("10816") ? "" : (stryCov_9fa48("10816"), 'config'));
        res.status(200).send((stryMutAct_9fa48("10819") ? req.path !== `${nconf.get('relative_path')}/sping` : stryMutAct_9fa48("10818") ? false : stryMutAct_9fa48("10817") ? true : (stryCov_9fa48("10817", "10818", "10819"), req.path === (stryMutAct_9fa48("10820") ? `` : (stryCov_9fa48("10820"), `${nconf.get(stryMutAct_9fa48("10821") ? "" : (stryCov_9fa48("10821"), 'relative_path'))}/sping`)))) ? stryMutAct_9fa48("10822") ? "" : (stryCov_9fa48("10822"), 'healthy') : stryMutAct_9fa48("10823") ? "" : (stryCov_9fa48("10823"), '200'));
      }
    } catch (err) {
      if (stryMutAct_9fa48("10824")) {
        {}
      } else {
        stryCov_9fa48("10824");
        next(err);
      }
    }
  }
};