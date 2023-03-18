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
const db = require('../../database');
module.exports = stryMutAct_9fa48("42326") ? {} : (stryCov_9fa48("42326"), {
  name: stryMutAct_9fa48("42327") ? "" : (stryCov_9fa48("42327"), 'Giving upload privileges'),
  timestamp: Date.UTC(2016, 6, 12),
  method: function (callback) {
    if (stryMutAct_9fa48("42328")) {
      {}
    } else {
      stryCov_9fa48("42328");
      const privilegesAPI = require('../../privileges');
      const meta = require('../../meta');
      db.getSortedSetRange(stryMutAct_9fa48("42329") ? "" : (stryCov_9fa48("42329"), 'categories:cid'), 0, stryMutAct_9fa48("42330") ? +1 : (stryCov_9fa48("42330"), -1), (err, cids) => {
        if (stryMutAct_9fa48("42331")) {
          {}
        } else {
          stryCov_9fa48("42331");
          if (stryMutAct_9fa48("42333") ? false : stryMutAct_9fa48("42332") ? true : (stryCov_9fa48("42332", "42333"), err)) {
            if (stryMutAct_9fa48("42334")) {
              {}
            } else {
              stryCov_9fa48("42334");
              return callback(err);
            }
          }
          async.eachSeries(cids, (cid, next) => {
            if (stryMutAct_9fa48("42335")) {
              {}
            } else {
              stryCov_9fa48("42335");
              privilegesAPI.categories.list(cid, (err, data) => {
                if (stryMutAct_9fa48("42336")) {
                  {}
                } else {
                  stryCov_9fa48("42336");
                  if (stryMutAct_9fa48("42338") ? false : stryMutAct_9fa48("42337") ? true : (stryCov_9fa48("42337", "42338"), err)) {
                    if (stryMutAct_9fa48("42339")) {
                      {}
                    } else {
                      stryCov_9fa48("42339");
                      return next(err);
                    }
                  }
                  async.eachSeries(data.groups, (group, next) => {
                    if (stryMutAct_9fa48("42340")) {
                      {}
                    } else {
                      stryCov_9fa48("42340");
                      if (stryMutAct_9fa48("42343") ? group.name === 'guests' || parseInt(meta.config.allowGuestUploads, 10) !== 1 : stryMutAct_9fa48("42342") ? false : stryMutAct_9fa48("42341") ? true : (stryCov_9fa48("42341", "42342", "42343"), (stryMutAct_9fa48("42345") ? group.name !== 'guests' : stryMutAct_9fa48("42344") ? true : (stryCov_9fa48("42344", "42345"), group.name === (stryMutAct_9fa48("42346") ? "" : (stryCov_9fa48("42346"), 'guests')))) && (stryMutAct_9fa48("42348") ? parseInt(meta.config.allowGuestUploads, 10) === 1 : stryMutAct_9fa48("42347") ? true : (stryCov_9fa48("42347", "42348"), parseInt(meta.config.allowGuestUploads, 10) !== 1)))) {
                        if (stryMutAct_9fa48("42349")) {
                          {}
                        } else {
                          stryCov_9fa48("42349");
                          return next();
                        }
                      }
                      if (stryMutAct_9fa48("42351") ? false : stryMutAct_9fa48("42350") ? true : (stryCov_9fa48("42350", "42351"), group.privileges[stryMutAct_9fa48("42352") ? "" : (stryCov_9fa48("42352"), 'groups:read')])) {
                        if (stryMutAct_9fa48("42353")) {
                          {}
                        } else {
                          stryCov_9fa48("42353");
                          privilegesAPI.categories.give(stryMutAct_9fa48("42354") ? [] : (stryCov_9fa48("42354"), [stryMutAct_9fa48("42355") ? "" : (stryCov_9fa48("42355"), 'upload:post:image')]), cid, group.name, next);
                        }
                      } else {
                        if (stryMutAct_9fa48("42356")) {
                          {}
                        } else {
                          stryCov_9fa48("42356");
                          next();
                        }
                      }
                    }
                  }, next);
                }
              });
            }
          }, callback);
        }
      });
    }
  }
});