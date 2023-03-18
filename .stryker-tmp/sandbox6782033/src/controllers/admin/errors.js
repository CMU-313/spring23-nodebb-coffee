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
const json2csvAsync = require('json2csv').parseAsync;
const meta = require('../../meta');
const analytics = require('../../analytics');
const utils = require('../../utils');
const errorsController = module.exports;
errorsController.get = async function (req, res) {
  if (stryMutAct_9fa48("7060")) {
    {}
  } else {
    stryCov_9fa48("7060");
    const data = await utils.promiseParallel(stryMutAct_9fa48("7061") ? {} : (stryCov_9fa48("7061"), {
      'not-found': meta.errors.get(stryMutAct_9fa48("7062") ? false : (stryCov_9fa48("7062"), true)),
      analytics: analytics.getErrorAnalytics()
    }));
    res.render(stryMutAct_9fa48("7063") ? "" : (stryCov_9fa48("7063"), 'admin/advanced/errors'), data);
  }
};
errorsController.export = async function (req, res) {
  if (stryMutAct_9fa48("7064")) {
    {}
  } else {
    stryCov_9fa48("7064");
    const data = await meta.errors.get(stryMutAct_9fa48("7065") ? true : (stryCov_9fa48("7065"), false));
    const fields = data.length ? Object.keys(data[0]) : stryMutAct_9fa48("7066") ? ["Stryker was here"] : (stryCov_9fa48("7066"), []);
    const opts = stryMutAct_9fa48("7067") ? {} : (stryCov_9fa48("7067"), {
      fields
    });
    const csv = await json2csvAsync(data, opts);
    res.set(stryMutAct_9fa48("7068") ? "" : (stryCov_9fa48("7068"), 'Content-Type'), stryMutAct_9fa48("7069") ? "" : (stryCov_9fa48("7069"), 'text/csv')).set(stryMutAct_9fa48("7070") ? "" : (stryCov_9fa48("7070"), 'Content-Disposition'), stryMutAct_9fa48("7071") ? "" : (stryCov_9fa48("7071"), 'attachment; filename="404.csv"')).send(csv);
  }
};