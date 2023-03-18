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
const batch = require('../../batch');
const user = require('../../user');
module.exports = stryMutAct_9fa48("42568") ? {} : (stryCov_9fa48("42568"), {
  name: stryMutAct_9fa48("42569") ? "" : (stryCov_9fa48("42569"), 'Record first entry in username/email history'),
  timestamp: Date.UTC(2018, 7, 28),
  method: async function () {
    if (stryMutAct_9fa48("42570")) {
      {}
    } else {
      stryCov_9fa48("42570");
      const {
        progress
      } = this;
      await batch.processSortedSet(stryMutAct_9fa48("42571") ? "" : (stryCov_9fa48("42571"), 'users:joindate'), async uids => {
        if (stryMutAct_9fa48("42572")) {
          {}
        } else {
          stryCov_9fa48("42572");
          async function updateHistory(uid, set, fieldName) {
            if (stryMutAct_9fa48("42573")) {
              {}
            } else {
              stryCov_9fa48("42573");
              const count = await db.sortedSetCard(set);
              if (stryMutAct_9fa48("42577") ? count > 0 : stryMutAct_9fa48("42576") ? count < 0 : stryMutAct_9fa48("42575") ? false : stryMutAct_9fa48("42574") ? true : (stryCov_9fa48("42574", "42575", "42576", "42577"), count <= 0)) {
                if (stryMutAct_9fa48("42578")) {
                  {}
                } else {
                  stryCov_9fa48("42578");
                  // User has not changed their username/email before, record original username
                  const userData = await user.getUserFields(uid, stryMutAct_9fa48("42579") ? [] : (stryCov_9fa48("42579"), [fieldName, stryMutAct_9fa48("42580") ? "" : (stryCov_9fa48("42580"), 'joindate')]));
                  if (stryMutAct_9fa48("42583") ? userData && userData.joindate || userData[fieldName] : stryMutAct_9fa48("42582") ? false : stryMutAct_9fa48("42581") ? true : (stryCov_9fa48("42581", "42582", "42583"), (stryMutAct_9fa48("42585") ? userData || userData.joindate : stryMutAct_9fa48("42584") ? true : (stryCov_9fa48("42584", "42585"), userData && userData.joindate)) && userData[fieldName])) {
                    if (stryMutAct_9fa48("42586")) {
                      {}
                    } else {
                      stryCov_9fa48("42586");
                      await db.sortedSetAdd(set, userData.joindate, (stryMutAct_9fa48("42587") ? [] : (stryCov_9fa48("42587"), [userData[fieldName], userData.joindate])).join(stryMutAct_9fa48("42588") ? "" : (stryCov_9fa48("42588"), ':')));
                    }
                  }
                }
              }
            }
          }
          await Promise.all(uids.map(async uid => {
            if (stryMutAct_9fa48("42589")) {
              {}
            } else {
              stryCov_9fa48("42589");
              await Promise.all(stryMutAct_9fa48("42590") ? [] : (stryCov_9fa48("42590"), [updateHistory(uid, stryMutAct_9fa48("42591") ? `` : (stryCov_9fa48("42591"), `user:${uid}:usernames`), stryMutAct_9fa48("42592") ? "" : (stryCov_9fa48("42592"), 'username')), updateHistory(uid, stryMutAct_9fa48("42593") ? `` : (stryCov_9fa48("42593"), `user:${uid}:emails`), stryMutAct_9fa48("42594") ? "" : (stryCov_9fa48("42594"), 'email'))]));
              progress.incr();
            }
          }));
        }
      }, stryMutAct_9fa48("42595") ? {} : (stryCov_9fa48("42595"), {
        progress: this.progress
      }));
    }
  }
});