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
const querystring = require('querystring');
const posts = require('../posts');
const privileges = require('../privileges');
const helpers = require('./helpers');
const postsController = module.exports;
postsController.redirectToPost = async function (req, res, next) {
  if (stryMutAct_9fa48("10862")) {
    {}
  } else {
    stryCov_9fa48("10862");
    const pid = parseInt(req.params.pid, 10);
    if (stryMutAct_9fa48("10865") ? false : stryMutAct_9fa48("10864") ? true : stryMutAct_9fa48("10863") ? pid : (stryCov_9fa48("10863", "10864", "10865"), !pid)) {
      if (stryMutAct_9fa48("10866")) {
        {}
      } else {
        stryCov_9fa48("10866");
        return next();
      }
    }
    const [canRead, path] = await Promise.all(stryMutAct_9fa48("10867") ? [] : (stryCov_9fa48("10867"), [privileges.posts.can(stryMutAct_9fa48("10868") ? "" : (stryCov_9fa48("10868"), 'topics:read'), pid, req.uid), posts.generatePostPath(pid, req.uid)]));
    if (stryMutAct_9fa48("10871") ? false : stryMutAct_9fa48("10870") ? true : stryMutAct_9fa48("10869") ? path : (stryCov_9fa48("10869", "10870", "10871"), !path)) {
      if (stryMutAct_9fa48("10872")) {
        {}
      } else {
        stryCov_9fa48("10872");
        return next();
      }
    }
    if (stryMutAct_9fa48("10875") ? false : stryMutAct_9fa48("10874") ? true : stryMutAct_9fa48("10873") ? canRead : (stryCov_9fa48("10873", "10874", "10875"), !canRead)) {
      if (stryMutAct_9fa48("10876")) {
        {}
      } else {
        stryCov_9fa48("10876");
        return helpers.notAllowed(req, res);
      }
    }
    const qs = querystring.stringify(req.query);
    helpers.redirect(res, qs ? stryMutAct_9fa48("10877") ? `` : (stryCov_9fa48("10877"), `${path}?${qs}`) : path);
  }
};
postsController.getRecentPosts = async function (req, res) {
  if (stryMutAct_9fa48("10878")) {
    {}
  } else {
    stryCov_9fa48("10878");
    const page = stryMutAct_9fa48("10881") ? parseInt(req.query.page, 10) && 1 : stryMutAct_9fa48("10880") ? false : stryMutAct_9fa48("10879") ? true : (stryCov_9fa48("10879", "10880", "10881"), parseInt(req.query.page, 10) || 1);
    const postsPerPage = 20;
    const start = Math.max(0, stryMutAct_9fa48("10882") ? (page - 1) / postsPerPage : (stryCov_9fa48("10882"), (stryMutAct_9fa48("10883") ? page + 1 : (stryCov_9fa48("10883"), page - 1)) * postsPerPage));
    const stop = stryMutAct_9fa48("10884") ? start + postsPerPage + 1 : (stryCov_9fa48("10884"), (stryMutAct_9fa48("10885") ? start - postsPerPage : (stryCov_9fa48("10885"), start + postsPerPage)) - 1);
    const data = await posts.getRecentPosts(req.uid, start, stop, req.params.term);
    res.json(data);
  }
};