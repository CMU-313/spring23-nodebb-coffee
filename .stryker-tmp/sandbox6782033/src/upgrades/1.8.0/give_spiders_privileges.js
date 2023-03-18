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
module.exports = stryMutAct_9fa48("44977") ? {} : (stryCov_9fa48("44977"), {
  name: stryMutAct_9fa48("44978") ? "" : (stryCov_9fa48("44978"), 'Give category access privileges to spiders system group'),
  timestamp: Date.UTC(2018, 0, 31),
  method: function (callback) {
    if (stryMutAct_9fa48("44979")) {
      {}
    } else {
      stryCov_9fa48("44979");
      db.getSortedSetRange(stryMutAct_9fa48("44980") ? "" : (stryCov_9fa48("44980"), 'categories:cid'), 0, stryMutAct_9fa48("44981") ? +1 : (stryCov_9fa48("44981"), -1), (err, cids) => {
        if (stryMutAct_9fa48("44982")) {
          {}
        } else {
          stryCov_9fa48("44982");
          if (stryMutAct_9fa48("44984") ? false : stryMutAct_9fa48("44983") ? true : (stryCov_9fa48("44983", "44984"), err)) {
            if (stryMutAct_9fa48("44985")) {
              {}
            } else {
              stryCov_9fa48("44985");
              return callback(err);
            }
          }
          async.eachSeries(cids, (cid, next) => {
            if (stryMutAct_9fa48("44986")) {
              {}
            } else {
              stryCov_9fa48("44986");
              getGroupPrivileges(cid, (err, groupPrivileges) => {
                if (stryMutAct_9fa48("44987")) {
                  {}
                } else {
                  stryCov_9fa48("44987");
                  if (stryMutAct_9fa48("44989") ? false : stryMutAct_9fa48("44988") ? true : (stryCov_9fa48("44988", "44989"), err)) {
                    if (stryMutAct_9fa48("44990")) {
                      {}
                    } else {
                      stryCov_9fa48("44990");
                      return next(err);
                    }
                  }
                  const privs = stryMutAct_9fa48("44991") ? ["Stryker was here"] : (stryCov_9fa48("44991"), []);
                  if (stryMutAct_9fa48("44993") ? false : stryMutAct_9fa48("44992") ? true : (stryCov_9fa48("44992", "44993"), groupPrivileges[stryMutAct_9fa48("44994") ? "" : (stryCov_9fa48("44994"), 'groups:find')])) {
                    if (stryMutAct_9fa48("44995")) {
                      {}
                    } else {
                      stryCov_9fa48("44995");
                      privs.push(stryMutAct_9fa48("44996") ? "" : (stryCov_9fa48("44996"), 'groups:find'));
                    }
                  }
                  if (stryMutAct_9fa48("44998") ? false : stryMutAct_9fa48("44997") ? true : (stryCov_9fa48("44997", "44998"), groupPrivileges[stryMutAct_9fa48("44999") ? "" : (stryCov_9fa48("44999"), 'groups:read')])) {
                    if (stryMutAct_9fa48("45000")) {
                      {}
                    } else {
                      stryCov_9fa48("45000");
                      privs.push(stryMutAct_9fa48("45001") ? "" : (stryCov_9fa48("45001"), 'groups:read'));
                    }
                  }
                  if (stryMutAct_9fa48("45003") ? false : stryMutAct_9fa48("45002") ? true : (stryCov_9fa48("45002", "45003"), groupPrivileges[stryMutAct_9fa48("45004") ? "" : (stryCov_9fa48("45004"), 'groups:topics:read')])) {
                    if (stryMutAct_9fa48("45005")) {
                      {}
                    } else {
                      stryCov_9fa48("45005");
                      privs.push(stryMutAct_9fa48("45006") ? "" : (stryCov_9fa48("45006"), 'groups:topics:read'));
                    }
                  }
                  privileges.categories.give(privs, cid, stryMutAct_9fa48("45007") ? "" : (stryCov_9fa48("45007"), 'spiders'), next);
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
  if (stryMutAct_9fa48("45008")) {
    {}
  } else {
    stryCov_9fa48("45008");
    const tasks = {};
    (stryMutAct_9fa48("45009") ? [] : (stryCov_9fa48("45009"), [stryMutAct_9fa48("45010") ? "" : (stryCov_9fa48("45010"), 'groups:find'), stryMutAct_9fa48("45011") ? "" : (stryCov_9fa48("45011"), 'groups:read'), stryMutAct_9fa48("45012") ? "" : (stryCov_9fa48("45012"), 'groups:topics:read')])).forEach(privilege => {
      if (stryMutAct_9fa48("45013")) {
        {}
      } else {
        stryCov_9fa48("45013");
        tasks[privilege] = async.apply(groups.isMember, stryMutAct_9fa48("45014") ? "" : (stryCov_9fa48("45014"), 'guests'), stryMutAct_9fa48("45015") ? `` : (stryCov_9fa48("45015"), `cid:${cid}:privileges:${privilege}`));
      }
    });
    async.parallel(tasks, callback);
  }
}