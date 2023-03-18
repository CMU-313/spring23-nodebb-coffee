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
const groups = require('../../groups');
const privileges = require('../../privileges');
const db = require('../../database');
module.exports = stryMutAct_9fa48("44825") ? {} : (stryCov_9fa48("44825"), {
  name: stryMutAct_9fa48("44826") ? "" : (stryCov_9fa48("44826"), 'Give upload privilege to registered-users globally if it is given on a category'),
  timestamp: Date.UTC(2018, 0, 3),
  method: function (callback) {
    if (stryMutAct_9fa48("44827")) {
      {}
    } else {
      stryCov_9fa48("44827");
      db.getSortedSetRange(stryMutAct_9fa48("44828") ? "" : (stryCov_9fa48("44828"), 'categories:cid'), 0, stryMutAct_9fa48("44829") ? +1 : (stryCov_9fa48("44829"), -1), (err, cids) => {
        if (stryMutAct_9fa48("44830")) {
          {}
        } else {
          stryCov_9fa48("44830");
          if (stryMutAct_9fa48("44832") ? false : stryMutAct_9fa48("44831") ? true : (stryCov_9fa48("44831", "44832"), err)) {
            if (stryMutAct_9fa48("44833")) {
              {}
            } else {
              stryCov_9fa48("44833");
              return callback(err);
            }
          }
          async.eachSeries(cids, (cid, next) => {
            if (stryMutAct_9fa48("44834")) {
              {}
            } else {
              stryCov_9fa48("44834");
              getGroupPrivileges(cid, (err, groupPrivileges) => {
                if (stryMutAct_9fa48("44835")) {
                  {}
                } else {
                  stryCov_9fa48("44835");
                  if (stryMutAct_9fa48("44837") ? false : stryMutAct_9fa48("44836") ? true : (stryCov_9fa48("44836", "44837"), err)) {
                    if (stryMutAct_9fa48("44838")) {
                      {}
                    } else {
                      stryCov_9fa48("44838");
                      return next(err);
                    }
                  }
                  const privs = stryMutAct_9fa48("44839") ? ["Stryker was here"] : (stryCov_9fa48("44839"), []);
                  if (stryMutAct_9fa48("44841") ? false : stryMutAct_9fa48("44840") ? true : (stryCov_9fa48("44840", "44841"), groupPrivileges[stryMutAct_9fa48("44842") ? "" : (stryCov_9fa48("44842"), 'groups:upload:post:image')])) {
                    if (stryMutAct_9fa48("44843")) {
                      {}
                    } else {
                      stryCov_9fa48("44843");
                      privs.push(stryMutAct_9fa48("44844") ? "" : (stryCov_9fa48("44844"), 'groups:upload:post:image'));
                    }
                  }
                  if (stryMutAct_9fa48("44846") ? false : stryMutAct_9fa48("44845") ? true : (stryCov_9fa48("44845", "44846"), groupPrivileges[stryMutAct_9fa48("44847") ? "" : (stryCov_9fa48("44847"), 'groups:upload:post:file')])) {
                    if (stryMutAct_9fa48("44848")) {
                      {}
                    } else {
                      stryCov_9fa48("44848");
                      privs.push(stryMutAct_9fa48("44849") ? "" : (stryCov_9fa48("44849"), 'groups:upload:post:file'));
                    }
                  }
                  privileges.global.give(privs, stryMutAct_9fa48("44850") ? "" : (stryCov_9fa48("44850"), 'registered-users'), next);
                }
              });
            }
          }, callback);
        }
      });
    }
  }
});
function getGroupPrivileges(cid, callback) {
  if (stryMutAct_9fa48("44851")) {
    {}
  } else {
    stryCov_9fa48("44851");
    const tasks = {};
    (stryMutAct_9fa48("44852") ? [] : (stryCov_9fa48("44852"), [stryMutAct_9fa48("44853") ? "" : (stryCov_9fa48("44853"), 'groups:upload:post:image'), stryMutAct_9fa48("44854") ? "" : (stryCov_9fa48("44854"), 'groups:upload:post:file')])).forEach(privilege => {
      if (stryMutAct_9fa48("44855")) {
        {}
      } else {
        stryCov_9fa48("44855");
        tasks[privilege] = async.apply(groups.isMember, stryMutAct_9fa48("44856") ? "" : (stryCov_9fa48("44856"), 'registered-users'), stryMutAct_9fa48("44857") ? `` : (stryCov_9fa48("44857"), `cid:${cid}:privileges:${privilege}`));
      }
    });
    async.parallel(tasks, callback);
  }
}