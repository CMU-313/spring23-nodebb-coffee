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
const batch = require('../../batch');
const groups = require('../../groups');
module.exports = stryMutAct_9fa48("44455") ? {} : (stryCov_9fa48("44455"), {
  name: stryMutAct_9fa48("44456") ? "" : (stryCov_9fa48("44456"), 'rename user mod privileges group'),
  timestamp: Date.UTC(2017, 4, 26),
  method: function (callback) {
    if (stryMutAct_9fa48("44457")) {
      {}
    } else {
      stryCov_9fa48("44457");
      const {
        progress
      } = this;
      batch.processSortedSet(stryMutAct_9fa48("44458") ? "" : (stryCov_9fa48("44458"), 'categories:cid'), (cids, next) => {
        if (stryMutAct_9fa48("44459")) {
          {}
        } else {
          stryCov_9fa48("44459");
          async.eachSeries(cids, (cid, next) => {
            if (stryMutAct_9fa48("44460")) {
              {}
            } else {
              stryCov_9fa48("44460");
              const groupName = stryMutAct_9fa48("44461") ? `` : (stryCov_9fa48("44461"), `cid:${cid}:privileges:mods`);
              const newName = stryMutAct_9fa48("44462") ? `` : (stryCov_9fa48("44462"), `cid:${cid}:privileges:moderate`);
              groups.exists(groupName, (err, exists) => {
                if (stryMutAct_9fa48("44463")) {
                  {}
                } else {
                  stryCov_9fa48("44463");
                  if (stryMutAct_9fa48("44466") ? err && !exists : stryMutAct_9fa48("44465") ? false : stryMutAct_9fa48("44464") ? true : (stryCov_9fa48("44464", "44465", "44466"), err || (stryMutAct_9fa48("44467") ? exists : (stryCov_9fa48("44467"), !exists)))) {
                    if (stryMutAct_9fa48("44468")) {
                      {}
                    } else {
                      stryCov_9fa48("44468");
                      progress.incr();
                      return next(err);
                    }
                  }
                  winston.verbose(stryMutAct_9fa48("44469") ? `` : (stryCov_9fa48("44469"), `renaming ${groupName} to ${newName}`));
                  progress.incr();
                  groups.renameGroup(groupName, newName, next);
                }
              });
            }
          }, next);
        }
      }, stryMutAct_9fa48("44470") ? {} : (stryCov_9fa48("44470"), {
        progress: progress
      }), callback);
    }
  }
});