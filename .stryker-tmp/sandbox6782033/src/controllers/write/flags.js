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
const flags = require('../../flags');
const api = require('../../api');
const helpers = require('../helpers');
const Flags = module.exports;
Flags.create = async (req, res) => {
  if (stryMutAct_9fa48("12388")) {
    {}
  } else {
    stryCov_9fa48("12388");
    const flagObj = await api.flags.create(req, stryMutAct_9fa48("12389") ? {} : (stryCov_9fa48("12389"), {
      ...req.body
    }));
    helpers.formatApiResponse(200, res, (await user.isPrivileged(req.uid)) ? flagObj : undefined);
  }
};
Flags.get = async (req, res) => {
  if (stryMutAct_9fa48("12390")) {
    {}
  } else {
    stryCov_9fa48("12390");
    const isPrivileged = await user.isPrivileged(req.uid);
    if (stryMutAct_9fa48("12393") ? false : stryMutAct_9fa48("12392") ? true : stryMutAct_9fa48("12391") ? isPrivileged : (stryCov_9fa48("12391", "12392", "12393"), !isPrivileged)) {
      if (stryMutAct_9fa48("12394")) {
        {}
      } else {
        stryCov_9fa48("12394");
        return helpers.formatApiResponse(403, res);
      }
    }
    helpers.formatApiResponse(200, res, await flags.get(req.params.flagId));
  }
};
Flags.update = async (req, res) => {
  if (stryMutAct_9fa48("12395")) {
    {}
  } else {
    stryCov_9fa48("12395");
    const history = await api.flags.update(req, stryMutAct_9fa48("12396") ? {} : (stryCov_9fa48("12396"), {
      flagId: req.params.flagId,
      ...req.body
    }));
    helpers.formatApiResponse(200, res, stryMutAct_9fa48("12397") ? {} : (stryCov_9fa48("12397"), {
      history
    }));
  }
};
Flags.delete = async (req, res) => {
  if (stryMutAct_9fa48("12398")) {
    {}
  } else {
    stryCov_9fa48("12398");
    await flags.purge(stryMutAct_9fa48("12399") ? [] : (stryCov_9fa48("12399"), [req.params.flagId]));
    helpers.formatApiResponse(200, res);
  }
};
Flags.appendNote = async (req, res) => {
  if (stryMutAct_9fa48("12400")) {
    {}
  } else {
    stryCov_9fa48("12400");
    const payload = await api.flags.appendNote(req, stryMutAct_9fa48("12401") ? {} : (stryCov_9fa48("12401"), {
      flagId: req.params.flagId,
      ...req.body
    }));
    helpers.formatApiResponse(200, res, payload);
  }
};
Flags.deleteNote = async (req, res) => {
  if (stryMutAct_9fa48("12402")) {
    {}
  } else {
    stryCov_9fa48("12402");
    const payload = await api.flags.deleteNote(req, stryMutAct_9fa48("12403") ? {} : (stryCov_9fa48("12403"), {
      ...req.params
    }));
    helpers.formatApiResponse(200, res, payload);
  }
};