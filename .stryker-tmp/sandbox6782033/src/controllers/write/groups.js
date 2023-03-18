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
const api = require('../../api');
const helpers = require('../helpers');
const Groups = module.exports;
Groups.exists = async (req, res) => {
  if (stryMutAct_9fa48("12404")) {
    {}
  } else {
    stryCov_9fa48("12404");
    helpers.formatApiResponse(200, res);
  }
};
Groups.create = async (req, res) => {
  if (stryMutAct_9fa48("12405")) {
    {}
  } else {
    stryCov_9fa48("12405");
    const groupObj = await api.groups.create(req, req.body);
    helpers.formatApiResponse(200, res, groupObj);
  }
};
Groups.update = async (req, res) => {
  if (stryMutAct_9fa48("12406")) {
    {}
  } else {
    stryCov_9fa48("12406");
    const groupObj = await api.groups.update(req, stryMutAct_9fa48("12407") ? {} : (stryCov_9fa48("12407"), {
      ...req.body,
      slug: req.params.slug
    }));
    helpers.formatApiResponse(200, res, groupObj);
  }
};
Groups.delete = async (req, res) => {
  if (stryMutAct_9fa48("12408")) {
    {}
  } else {
    stryCov_9fa48("12408");
    await api.groups.delete(req, req.params);
    helpers.formatApiResponse(200, res);
  }
};
Groups.join = async (req, res) => {
  if (stryMutAct_9fa48("12409")) {
    {}
  } else {
    stryCov_9fa48("12409");
    await api.groups.join(req, req.params);
    helpers.formatApiResponse(200, res);
  }
};
Groups.leave = async (req, res) => {
  if (stryMutAct_9fa48("12410")) {
    {}
  } else {
    stryCov_9fa48("12410");
    await api.groups.leave(req, req.params);
    helpers.formatApiResponse(200, res);
  }
};
Groups.grant = async (req, res) => {
  if (stryMutAct_9fa48("12411")) {
    {}
  } else {
    stryCov_9fa48("12411");
    await api.groups.grant(req, req.params);
    helpers.formatApiResponse(200, res);
  }
};
Groups.rescind = async (req, res) => {
  if (stryMutAct_9fa48("12412")) {
    {}
  } else {
    stryCov_9fa48("12412");
    await api.groups.rescind(req, req.params);
    helpers.formatApiResponse(200, res);
  }
};