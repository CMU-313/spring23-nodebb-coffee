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
const winston = require('winston');
const db = require('../../database');
module.exports = stryMutAct_9fa48("42232") ? {} : (stryCov_9fa48("42232"), {
  name: stryMutAct_9fa48("42233") ? "" : (stryCov_9fa48("42233"), 'Group title from settings to user profile'),
  timestamp: Date.UTC(2016, 3, 14),
  method: function (callback) {
    if (stryMutAct_9fa48("42234")) {
      {}
    } else {
      stryCov_9fa48("42234");
      const user = require('../../user');
      const batch = require('../../batch');
      let count = 0;
      batch.processSortedSet(stryMutAct_9fa48("42235") ? "" : (stryCov_9fa48("42235"), 'users:joindate'), (uids, next) => {
        if (stryMutAct_9fa48("42236")) {
          {}
        } else {
          stryCov_9fa48("42236");
          winston.verbose(stryMutAct_9fa48("42237") ? `` : (stryCov_9fa48("42237"), `upgraded ${count} users`));
          user.getMultipleUserSettings(uids, (err, settings) => {
            if (stryMutAct_9fa48("42238")) {
              {}
            } else {
              stryCov_9fa48("42238");
              if (stryMutAct_9fa48("42240") ? false : stryMutAct_9fa48("42239") ? true : (stryCov_9fa48("42239", "42240"), err)) {
                if (stryMutAct_9fa48("42241")) {
                  {}
                } else {
                  stryCov_9fa48("42241");
                  return next(err);
                }
              }
              stryMutAct_9fa48("42242") ? count -= uids.length : (stryCov_9fa48("42242"), count += uids.length);
              settings = stryMutAct_9fa48("42243") ? settings : (stryCov_9fa48("42243"), settings.filter(stryMutAct_9fa48("42244") ? () => undefined : (stryCov_9fa48("42244"), setting => stryMutAct_9fa48("42247") ? setting || setting.groupTitle : stryMutAct_9fa48("42246") ? false : stryMutAct_9fa48("42245") ? true : (stryCov_9fa48("42245", "42246", "42247"), setting && setting.groupTitle))));
              async.each(settings, (setting, next) => {
                if (stryMutAct_9fa48("42248")) {
                  {}
                } else {
                  stryCov_9fa48("42248");
                  db.setObjectField(stryMutAct_9fa48("42249") ? `` : (stryCov_9fa48("42249"), `user:${setting.uid}`), stryMutAct_9fa48("42250") ? "" : (stryCov_9fa48("42250"), 'groupTitle'), setting.groupTitle, next);
                }
              }, next);
            }
          });
        }
      }, {}, callback);
    }
  }
});