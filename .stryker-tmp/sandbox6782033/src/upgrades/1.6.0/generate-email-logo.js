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
const async = require('async');
const path = require('path');
const nconf = require('nconf');
const fs = require('fs');
const meta = require('../../meta');
const image = require('../../image');
module.exports = stryMutAct_9fa48("44507") ? {} : (stryCov_9fa48("44507"), {
  name: stryMutAct_9fa48("44508") ? "" : (stryCov_9fa48("44508"), 'Generate email logo for use in email header'),
  timestamp: Date.UTC(2017, 6, 17),
  method: function (callback) {
    if (stryMutAct_9fa48("44509")) {
      {}
    } else {
      stryCov_9fa48("44509");
      let skip = stryMutAct_9fa48("44510") ? true : (stryCov_9fa48("44510"), false);
      async.series(stryMutAct_9fa48("44511") ? [] : (stryCov_9fa48("44511"), [function (next) {
        if (stryMutAct_9fa48("44512")) {
          {}
        } else {
          stryCov_9fa48("44512");
          // Resize existing logo (if present) to email header size
          const uploadPath = path.join(nconf.get(stryMutAct_9fa48("44513") ? "" : (stryCov_9fa48("44513"), 'upload_path')), stryMutAct_9fa48("44514") ? "" : (stryCov_9fa48("44514"), 'system'), stryMutAct_9fa48("44515") ? "" : (stryCov_9fa48("44515"), 'site-logo-x50.png'));
          const sourcePath = meta.config[stryMutAct_9fa48("44516") ? "" : (stryCov_9fa48("44516"), 'brand:logo')] ? path.join(nconf.get(stryMutAct_9fa48("44517") ? "" : (stryCov_9fa48("44517"), 'upload_path')), stryMutAct_9fa48("44518") ? "" : (stryCov_9fa48("44518"), 'system'), path.basename(meta.config[stryMutAct_9fa48("44519") ? "" : (stryCov_9fa48("44519"), 'brand:logo')])) : null;
          if (stryMutAct_9fa48("44522") ? false : stryMutAct_9fa48("44521") ? true : stryMutAct_9fa48("44520") ? sourcePath : (stryCov_9fa48("44520", "44521", "44522"), !sourcePath)) {
            if (stryMutAct_9fa48("44523")) {
              {}
            } else {
              stryCov_9fa48("44523");
              skip = stryMutAct_9fa48("44524") ? false : (stryCov_9fa48("44524"), true);
              return setImmediate(next);
            }
          }
          fs.access(sourcePath, err => {
            if (stryMutAct_9fa48("44525")) {
              {}
            } else {
              stryCov_9fa48("44525");
              if (stryMutAct_9fa48("44528") ? err && path.extname(sourcePath) === '.svg' : stryMutAct_9fa48("44527") ? false : stryMutAct_9fa48("44526") ? true : (stryCov_9fa48("44526", "44527", "44528"), err || (stryMutAct_9fa48("44530") ? path.extname(sourcePath) !== '.svg' : stryMutAct_9fa48("44529") ? false : (stryCov_9fa48("44529", "44530"), path.extname(sourcePath) === (stryMutAct_9fa48("44531") ? "" : (stryCov_9fa48("44531"), '.svg')))))) {
                if (stryMutAct_9fa48("44532")) {
                  {}
                } else {
                  stryCov_9fa48("44532");
                  skip = stryMutAct_9fa48("44533") ? false : (stryCov_9fa48("44533"), true);
                  return setImmediate(next);
                }
              }
              image.resizeImage(stryMutAct_9fa48("44534") ? {} : (stryCov_9fa48("44534"), {
                path: sourcePath,
                target: uploadPath,
                height: 50
              }), next);
            }
          });
        }
      }, function (next) {
        if (stryMutAct_9fa48("44535")) {
          {}
        } else {
          stryCov_9fa48("44535");
          if (stryMutAct_9fa48("44537") ? false : stryMutAct_9fa48("44536") ? true : (stryCov_9fa48("44536", "44537"), skip)) {
            if (stryMutAct_9fa48("44538")) {
              {}
            } else {
              stryCov_9fa48("44538");
              return setImmediate(next);
            }
          }
          meta.configs.setMultiple(stryMutAct_9fa48("44539") ? {} : (stryCov_9fa48("44539"), {
            'brand:logo': path.join(stryMutAct_9fa48("44540") ? "" : (stryCov_9fa48("44540"), '/assets/uploads/system'), path.basename(meta.config[stryMutAct_9fa48("44541") ? "" : (stryCov_9fa48("44541"), 'brand:logo')])),
            'brand:emailLogo': stryMutAct_9fa48("44542") ? "" : (stryCov_9fa48("44542"), '/assets/uploads/system/site-logo-x50.png')
          }), next);
        }
      }]), callback);
    }
  }
});