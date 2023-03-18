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
const express = require('express');
const nconf = require('nconf');
const fs = require('fs').promises;
const path = require('path');
module.exports = function (app) {
  if (stryMutAct_9fa48("32788")) {
    {}
  } else {
    stryCov_9fa48("32788");
    const router = express.Router();
    router.get(stryMutAct_9fa48("32789") ? "" : (stryCov_9fa48("32789"), '/test'), async (req, res) => {
      if (stryMutAct_9fa48("32790")) {
        {}
      } else {
        stryCov_9fa48("32790");
        res.redirect(404);
      }
    });

    // Redoc
    router.get(stryMutAct_9fa48("32791") ? "" : (stryCov_9fa48("32791"), '/spec/:type'), async (req, res, next) => {
      if (stryMutAct_9fa48("32792")) {
        {}
      } else {
        stryCov_9fa48("32792");
        const types = stryMutAct_9fa48("32793") ? [] : (stryCov_9fa48("32793"), [stryMutAct_9fa48("32794") ? "" : (stryCov_9fa48("32794"), 'read'), stryMutAct_9fa48("32795") ? "" : (stryCov_9fa48("32795"), 'write')]);
        const {
          type
        } = req.params;
        if (stryMutAct_9fa48("32798") ? false : stryMutAct_9fa48("32797") ? true : stryMutAct_9fa48("32796") ? types.includes(type) : (stryCov_9fa48("32796", "32797", "32798"), !types.includes(type))) {
          if (stryMutAct_9fa48("32799")) {
            {}
          } else {
            stryCov_9fa48("32799");
            return next();
          }
        }
        const handle = await fs.open(path.resolve(__dirname, stryMutAct_9fa48("32800") ? "" : (stryCov_9fa48("32800"), '../../public/vendor/redoc/index.html')), stryMutAct_9fa48("32801") ? "" : (stryCov_9fa48("32801"), 'r'));
        let html = await handle.readFile(stryMutAct_9fa48("32802") ? {} : (stryCov_9fa48("32802"), {
          encoding: stryMutAct_9fa48("32803") ? "" : (stryCov_9fa48("32803"), 'utf-8')
        }));
        await handle.close();
        html = html.replace(stryMutAct_9fa48("32804") ? "" : (stryCov_9fa48("32804"), 'apiUrl'), stryMutAct_9fa48("32805") ? `` : (stryCov_9fa48("32805"), `${nconf.get(stryMutAct_9fa48("32806") ? "" : (stryCov_9fa48("32806"), 'relative_path'))}/assets/openapi/${type}.yaml`));
        res.status(200).type(stryMutAct_9fa48("32807") ? "" : (stryCov_9fa48("32807"), 'text/html')).send(html);
      }
    });
    app.use(stryMutAct_9fa48("32808") ? `` : (stryCov_9fa48("32808"), `${nconf.get(stryMutAct_9fa48("32809") ? "" : (stryCov_9fa48("32809"), 'relative_path'))}/debug`), router);
  }
};