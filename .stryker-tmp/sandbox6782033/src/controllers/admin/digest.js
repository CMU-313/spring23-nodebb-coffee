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
const meta = require('../../meta');
const digest = require('../../user/digest');
const pagination = require('../../pagination');
const digestController = module.exports;
digestController.get = async function (req, res) {
  if (stryMutAct_9fa48("7048")) {
    {}
  } else {
    stryCov_9fa48("7048");
    const page = stryMutAct_9fa48("7051") ? parseInt(req.query.page, 10) && 1 : stryMutAct_9fa48("7050") ? false : stryMutAct_9fa48("7049") ? true : (stryCov_9fa48("7049", "7050", "7051"), parseInt(req.query.page, 10) || 1);
    const resultsPerPage = 50;
    const start = stryMutAct_9fa48("7052") ? Math.max(0, page - 1) / resultsPerPage : (stryCov_9fa48("7052"), Math.max(0, stryMutAct_9fa48("7053") ? page + 1 : (stryCov_9fa48("7053"), page - 1)) * resultsPerPage);
    const stop = stryMutAct_9fa48("7054") ? start + resultsPerPage + 1 : (stryCov_9fa48("7054"), (stryMutAct_9fa48("7055") ? start - resultsPerPage : (stryCov_9fa48("7055"), start + resultsPerPage)) - 1);
    const delivery = await digest.getDeliveryTimes(start, stop);
    const pageCount = Math.ceil(stryMutAct_9fa48("7056") ? delivery.count * resultsPerPage : (stryCov_9fa48("7056"), delivery.count / resultsPerPage));
    res.render(stryMutAct_9fa48("7057") ? "" : (stryCov_9fa48("7057"), 'admin/manage/digest'), stryMutAct_9fa48("7058") ? {} : (stryCov_9fa48("7058"), {
      title: stryMutAct_9fa48("7059") ? "" : (stryCov_9fa48("7059"), '[[admin/menu:manage/digest]]'),
      delivery: delivery.users,
      default: meta.config.dailyDigestFreq,
      pagination: pagination.create(page, pageCount)
    }));
  }
};