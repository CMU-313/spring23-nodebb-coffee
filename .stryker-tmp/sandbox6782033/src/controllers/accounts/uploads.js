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
const path = require('path');
const nconf = require('nconf');
const db = require('../../database');
const helpers = require('../helpers');
const meta = require('../../meta');
const pagination = require('../../pagination');
const accountHelpers = require('./helpers');
const uploadsController = module.exports;
uploadsController.get = async function (req, res, next) {
  if (stryMutAct_9fa48("6546")) {
    {}
  } else {
    stryCov_9fa48("6546");
    const userData = await accountHelpers.getUserDataByUserSlug(req.params.userslug, req.uid, req.query);
    if (stryMutAct_9fa48("6549") ? false : stryMutAct_9fa48("6548") ? true : stryMutAct_9fa48("6547") ? userData : (stryCov_9fa48("6547", "6548", "6549"), !userData)) {
      if (stryMutAct_9fa48("6550")) {
        {}
      } else {
        stryCov_9fa48("6550");
        return next();
      }
    }
    const page = Math.max(1, stryMutAct_9fa48("6553") ? parseInt(req.query.page, 10) && 1 : stryMutAct_9fa48("6552") ? false : stryMutAct_9fa48("6551") ? true : (stryCov_9fa48("6551", "6552", "6553"), parseInt(req.query.page, 10) || 1));
    const itemsPerPage = 25;
    const start = stryMutAct_9fa48("6554") ? (page - 1) / itemsPerPage : (stryCov_9fa48("6554"), (stryMutAct_9fa48("6555") ? page + 1 : (stryCov_9fa48("6555"), page - 1)) * itemsPerPage);
    const stop = stryMutAct_9fa48("6556") ? start + itemsPerPage + 1 : (stryCov_9fa48("6556"), (stryMutAct_9fa48("6557") ? start - itemsPerPage : (stryCov_9fa48("6557"), start + itemsPerPage)) - 1);
    const [itemCount, uploadNames] = await Promise.all(stryMutAct_9fa48("6558") ? [] : (stryCov_9fa48("6558"), [db.sortedSetCard(stryMutAct_9fa48("6559") ? `` : (stryCov_9fa48("6559"), `uid:${userData.uid}:uploads`)), db.getSortedSetRevRange(stryMutAct_9fa48("6560") ? `` : (stryCov_9fa48("6560"), `uid:${userData.uid}:uploads`), start, stop)]));
    userData.uploads = uploadNames.map(stryMutAct_9fa48("6561") ? () => undefined : (stryCov_9fa48("6561"), uploadName => stryMutAct_9fa48("6562") ? {} : (stryCov_9fa48("6562"), {
      name: uploadName,
      url: path.resolve(nconf.get(stryMutAct_9fa48("6563") ? "" : (stryCov_9fa48("6563"), 'upload_url')), uploadName)
    })));
    const pageCount = Math.ceil(stryMutAct_9fa48("6564") ? itemCount * itemsPerPage : (stryCov_9fa48("6564"), itemCount / itemsPerPage));
    userData.pagination = pagination.create(page, pageCount, req.query);
    userData.privateUploads = stryMutAct_9fa48("6567") ? meta.config.privateUploads !== 1 : stryMutAct_9fa48("6566") ? false : stryMutAct_9fa48("6565") ? true : (stryCov_9fa48("6565", "6566", "6567"), meta.config.privateUploads === 1);
    userData.title = stryMutAct_9fa48("6568") ? `` : (stryCov_9fa48("6568"), `[[pages:account/uploads, ${userData.username}]]`);
    userData.breadcrumbs = helpers.buildBreadcrumbs(stryMutAct_9fa48("6569") ? [] : (stryCov_9fa48("6569"), [stryMutAct_9fa48("6570") ? {} : (stryCov_9fa48("6570"), {
      text: userData.username,
      url: stryMutAct_9fa48("6571") ? `` : (stryCov_9fa48("6571"), `/user/${userData.userslug}`)
    }), stryMutAct_9fa48("6572") ? {} : (stryCov_9fa48("6572"), {
      text: stryMutAct_9fa48("6573") ? "" : (stryCov_9fa48("6573"), '[[global:uploads]]')
    })]));
    res.render(stryMutAct_9fa48("6574") ? "" : (stryCov_9fa48("6574"), 'account/uploads'), userData);
  }
};