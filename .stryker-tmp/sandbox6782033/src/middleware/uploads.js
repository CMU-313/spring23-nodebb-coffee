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
const cacheCreate = require('../cache/ttl');
const meta = require('../meta');
const helpers = require('./helpers');
const user = require('../user');
const cache = cacheCreate(stryMutAct_9fa48("26210") ? {} : (stryCov_9fa48("26210"), {
  ttl: stryMutAct_9fa48("26211") ? meta.config.uploadRateLimitCooldown / 1000 : (stryCov_9fa48("26211"), meta.config.uploadRateLimitCooldown * 1000)
}));
exports.clearCache = function () {
  if (stryMutAct_9fa48("26212")) {
    {}
  } else {
    stryCov_9fa48("26212");
    cache.clear();
  }
};
exports.ratelimit = helpers.try(async (req, res, next) => {
  if (stryMutAct_9fa48("26213")) {
    {}
  } else {
    stryCov_9fa48("26213");
    const {
      uid
    } = req;
    if (stryMutAct_9fa48("26216") ? !meta.config.uploadRateLimitThreshold && uid && (await user.isAdminOrGlobalMod(uid)) : stryMutAct_9fa48("26215") ? false : stryMutAct_9fa48("26214") ? true : (stryCov_9fa48("26214", "26215", "26216"), (stryMutAct_9fa48("26217") ? meta.config.uploadRateLimitThreshold : (stryCov_9fa48("26217"), !meta.config.uploadRateLimitThreshold)) || (stryMutAct_9fa48("26219") ? uid || (await user.isAdminOrGlobalMod(uid)) : stryMutAct_9fa48("26218") ? false : (stryCov_9fa48("26218", "26219"), uid && (await user.isAdminOrGlobalMod(uid)))))) {
      if (stryMutAct_9fa48("26220")) {
        {}
      } else {
        stryCov_9fa48("26220");
        return next();
      }
    }
    const count = stryMutAct_9fa48("26221") ? (cache.get(`${req.ip}:uploaded_file_count`) || 0) - req.files.files.length : (stryCov_9fa48("26221"), (stryMutAct_9fa48("26224") ? cache.get(`${req.ip}:uploaded_file_count`) && 0 : stryMutAct_9fa48("26223") ? false : stryMutAct_9fa48("26222") ? true : (stryCov_9fa48("26222", "26223", "26224"), cache.get(stryMutAct_9fa48("26225") ? `` : (stryCov_9fa48("26225"), `${req.ip}:uploaded_file_count`)) || 0)) + req.files.files.length);
    if (stryMutAct_9fa48("26229") ? count <= meta.config.uploadRateLimitThreshold : stryMutAct_9fa48("26228") ? count >= meta.config.uploadRateLimitThreshold : stryMutAct_9fa48("26227") ? false : stryMutAct_9fa48("26226") ? true : (stryCov_9fa48("26226", "26227", "26228", "26229"), count > meta.config.uploadRateLimitThreshold)) {
      if (stryMutAct_9fa48("26230")) {
        {}
      } else {
        stryCov_9fa48("26230");
        return next(new Error(stryMutAct_9fa48("26231") ? [] : (stryCov_9fa48("26231"), [stryMutAct_9fa48("26232") ? "" : (stryCov_9fa48("26232"), '[[error:upload-ratelimit-reached]]')])));
      }
    }
    cache.set(stryMutAct_9fa48("26233") ? `` : (stryCov_9fa48("26233"), `${req.ip}:uploaded_file_count`), count);
    next();
  }
});