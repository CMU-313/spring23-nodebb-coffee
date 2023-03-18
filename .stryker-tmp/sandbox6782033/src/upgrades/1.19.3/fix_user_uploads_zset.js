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
const crypto = require('crypto');
const db = require('../../database');
const batch = require('../../batch');
const md5 = stryMutAct_9fa48("43969") ? () => undefined : (stryCov_9fa48("43969"), (() => {
  const md5 = filename => crypto.createHash(stryMutAct_9fa48("43970") ? "" : (stryCov_9fa48("43970"), 'md5')).update(filename).digest(stryMutAct_9fa48("43971") ? "" : (stryCov_9fa48("43971"), 'hex'));
  return md5;
})());
module.exports = stryMutAct_9fa48("43972") ? {} : (stryCov_9fa48("43972"), {
  name: stryMutAct_9fa48("43973") ? "" : (stryCov_9fa48("43973"), 'Fix paths in user uploads sorted sets'),
  timestamp: Date.UTC(2022, 1, 10),
  method: async function () {
    if (stryMutAct_9fa48("43974")) {
      {}
    } else {
      stryCov_9fa48("43974");
      const {
        progress
      } = this;
      await batch.processSortedSet(stryMutAct_9fa48("43975") ? "" : (stryCov_9fa48("43975"), 'users:joindate'), async uids => {
        if (stryMutAct_9fa48("43976")) {
          {}
        } else {
          stryCov_9fa48("43976");
          progress.incr(uids.length);
          await Promise.all(uids.map(async uid => {
            if (stryMutAct_9fa48("43977")) {
              {}
            } else {
              stryCov_9fa48("43977");
              const key = stryMutAct_9fa48("43978") ? `` : (stryCov_9fa48("43978"), `uid:${uid}:uploads`);
              // Rename the paths within
              let uploads = await db.getSortedSetRangeWithScores(key, 0, stryMutAct_9fa48("43979") ? +1 : (stryCov_9fa48("43979"), -1));
              if (stryMutAct_9fa48("43981") ? false : stryMutAct_9fa48("43980") ? true : (stryCov_9fa48("43980", "43981"), uploads.length)) {
                if (stryMutAct_9fa48("43982")) {
                  {}
                } else {
                  stryCov_9fa48("43982");
                  // Don't process those that have already the right format
                  uploads = stryMutAct_9fa48("43983") ? uploads : (stryCov_9fa48("43983"), uploads.filter(stryMutAct_9fa48("43984") ? () => undefined : (stryCov_9fa48("43984"), upload => stryMutAct_9fa48("43985") ? upload.value.endsWith('/files/') : (stryCov_9fa48("43985"), upload.value.startsWith(stryMutAct_9fa48("43986") ? "" : (stryCov_9fa48("43986"), '/files/'))))));
                  await db.sortedSetRemove(key, uploads.map(stryMutAct_9fa48("43987") ? () => undefined : (stryCov_9fa48("43987"), upload => upload.value)));
                  await db.sortedSetAdd(key, uploads.map(stryMutAct_9fa48("43988") ? () => undefined : (stryCov_9fa48("43988"), upload => upload.score)), uploads.map(stryMutAct_9fa48("43989") ? () => undefined : (stryCov_9fa48("43989"), upload => stryMutAct_9fa48("43990") ? upload.value : (stryCov_9fa48("43990"), upload.value.slice(1)))));
                  // Add uid to the upload's hash object
                  uploads = await db.getSortedSetMembers(key);
                  await db.setObjectBulk(uploads.map(stryMutAct_9fa48("43991") ? () => undefined : (stryCov_9fa48("43991"), relativePath => stryMutAct_9fa48("43992") ? [] : (stryCov_9fa48("43992"), [stryMutAct_9fa48("43993") ? `` : (stryCov_9fa48("43993"), `upload:${md5(relativePath)}`), stryMutAct_9fa48("43994") ? {} : (stryCov_9fa48("43994"), {
                    uid: uid
                  })]))));
                }
              }
            }
          }));
        }
      }, stryMutAct_9fa48("43995") ? {} : (stryCov_9fa48("43995"), {
        batch: 500,
        progress: progress
      }));
    }
  }
});