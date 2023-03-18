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
const db = require('../../database');
module.exports = stryMutAct_9fa48("44858") ? {} : (stryCov_9fa48("44858"), {
  name: stryMutAct_9fa48("44859") ? "" : (stryCov_9fa48("44859"), 'Rename privileges:downvote and privileges:flag to min:rep:downvote, min:rep:flag respectively'),
  timestamp: Date.UTC(2018, 0, 12),
  method: function (callback) {
    if (stryMutAct_9fa48("44860")) {
      {}
    } else {
      stryCov_9fa48("44860");
      db.getObjectFields(stryMutAct_9fa48("44861") ? "" : (stryCov_9fa48("44861"), 'config'), stryMutAct_9fa48("44862") ? [] : (stryCov_9fa48("44862"), [stryMutAct_9fa48("44863") ? "" : (stryCov_9fa48("44863"), 'privileges:downvote'), stryMutAct_9fa48("44864") ? "" : (stryCov_9fa48("44864"), 'privileges:flag')]), (err, config) => {
        if (stryMutAct_9fa48("44865")) {
          {}
        } else {
          stryCov_9fa48("44865");
          if (stryMutAct_9fa48("44867") ? false : stryMutAct_9fa48("44866") ? true : (stryCov_9fa48("44866", "44867"), err)) {
            if (stryMutAct_9fa48("44868")) {
              {}
            } else {
              stryCov_9fa48("44868");
              return callback(err);
            }
          }
          db.setObject(stryMutAct_9fa48("44869") ? "" : (stryCov_9fa48("44869"), 'config'), stryMutAct_9fa48("44870") ? {} : (stryCov_9fa48("44870"), {
            'min:rep:downvote': stryMutAct_9fa48("44873") ? parseInt(config['privileges:downvote'], 10) && 0 : stryMutAct_9fa48("44872") ? false : stryMutAct_9fa48("44871") ? true : (stryCov_9fa48("44871", "44872", "44873"), parseInt(config[stryMutAct_9fa48("44874") ? "" : (stryCov_9fa48("44874"), 'privileges:downvote')], 10) || 0),
            'min:rep:flag': stryMutAct_9fa48("44877") ? parseInt(config['privileges:downvote'], 10) && 0 : stryMutAct_9fa48("44876") ? false : stryMutAct_9fa48("44875") ? true : (stryCov_9fa48("44875", "44876", "44877"), parseInt(config[stryMutAct_9fa48("44878") ? "" : (stryCov_9fa48("44878"), 'privileges:downvote')], 10) || 0)
          }), err => {
            if (stryMutAct_9fa48("44879")) {
              {}
            } else {
              stryCov_9fa48("44879");
              if (stryMutAct_9fa48("44881") ? false : stryMutAct_9fa48("44880") ? true : (stryCov_9fa48("44880", "44881"), err)) {
                if (stryMutAct_9fa48("44882")) {
                  {}
                } else {
                  stryCov_9fa48("44882");
                  return callback(err);
                }
              }
              db.deleteObjectFields(stryMutAct_9fa48("44883") ? "" : (stryCov_9fa48("44883"), 'config'), stryMutAct_9fa48("44884") ? [] : (stryCov_9fa48("44884"), [stryMutAct_9fa48("44885") ? "" : (stryCov_9fa48("44885"), 'privileges:downvote'), stryMutAct_9fa48("44886") ? "" : (stryCov_9fa48("44886"), 'privileges:flag')]), callback);
            }
          });
        }
      });
    }
  }
});