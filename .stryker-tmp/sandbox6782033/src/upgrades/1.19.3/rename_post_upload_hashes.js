/* eslint-disable no-await-in-loop */
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
const md5 = stryMutAct_9fa48("43996") ? () => undefined : (stryCov_9fa48("43996"), (() => {
  const md5 = filename => crypto.createHash(stryMutAct_9fa48("43997") ? "" : (stryCov_9fa48("43997"), 'md5')).update(filename).digest(stryMutAct_9fa48("43998") ? "" : (stryCov_9fa48("43998"), 'hex'));
  return md5;
})());
module.exports = stryMutAct_9fa48("43999") ? {} : (stryCov_9fa48("43999"), {
  name: stryMutAct_9fa48("44000") ? "" : (stryCov_9fa48("44000"), 'Rename object and sorted sets used in post uploads'),
  timestamp: Date.UTC(2022, 1, 10),
  method: async function () {
    if (stryMutAct_9fa48("44001")) {
      {}
    } else {
      stryCov_9fa48("44001");
      const {
        progress
      } = this;
      await batch.processSortedSet(stryMutAct_9fa48("44002") ? "" : (stryCov_9fa48("44002"), 'posts:pid'), async pids => {
        if (stryMutAct_9fa48("44003")) {
          {}
        } else {
          stryCov_9fa48("44003");
          let keys = pids.map(stryMutAct_9fa48("44004") ? () => undefined : (stryCov_9fa48("44004"), pid => stryMutAct_9fa48("44005") ? `` : (stryCov_9fa48("44005"), `post:${pid}:uploads`)));
          const exists = await db.exists(keys);
          keys = stryMutAct_9fa48("44006") ? keys : (stryCov_9fa48("44006"), keys.filter(stryMutAct_9fa48("44007") ? () => undefined : (stryCov_9fa48("44007"), (key, idx) => exists[idx])));
          progress.incr(pids.length);
          for (const key of keys) {
            if (stryMutAct_9fa48("44008")) {
              {}
            } else {
              stryCov_9fa48("44008");
              // Rename the paths within
              let uploads = await db.getSortedSetRangeWithScores(key, 0, stryMutAct_9fa48("44009") ? +1 : (stryCov_9fa48("44009"), -1));

              // Don't process those that have already the right format
              uploads = stryMutAct_9fa48("44010") ? uploads : (stryCov_9fa48("44010"), uploads.filter(stryMutAct_9fa48("44011") ? () => undefined : (stryCov_9fa48("44011"), upload => stryMutAct_9fa48("44014") ? upload && upload.value || !upload.value.startsWith('files/') : stryMutAct_9fa48("44013") ? false : stryMutAct_9fa48("44012") ? true : (stryCov_9fa48("44012", "44013", "44014"), (stryMutAct_9fa48("44016") ? upload || upload.value : stryMutAct_9fa48("44015") ? true : (stryCov_9fa48("44015", "44016"), upload && upload.value)) && (stryMutAct_9fa48("44017") ? upload.value.startsWith('files/') : (stryCov_9fa48("44017"), !(stryMutAct_9fa48("44018") ? upload.value.endsWith('files/') : (stryCov_9fa48("44018"), upload.value.startsWith(stryMutAct_9fa48("44019") ? "" : (stryCov_9fa48("44019"), 'files/'))))))))));

              // Rename the zset members
              await db.sortedSetRemove(key, uploads.map(stryMutAct_9fa48("44020") ? () => undefined : (stryCov_9fa48("44020"), upload => upload.value)));
              await db.sortedSetAdd(key, uploads.map(stryMutAct_9fa48("44021") ? () => undefined : (stryCov_9fa48("44021"), upload => upload.score)), uploads.map(stryMutAct_9fa48("44022") ? () => undefined : (stryCov_9fa48("44022"), upload => stryMutAct_9fa48("44023") ? `` : (stryCov_9fa48("44023"), `files/${upload.value}`))));

              // Rename the object and pids zsets
              const hashes = uploads.map(stryMutAct_9fa48("44024") ? () => undefined : (stryCov_9fa48("44024"), upload => md5(upload.value)));
              const newHashes = uploads.map(stryMutAct_9fa48("44025") ? () => undefined : (stryCov_9fa48("44025"), upload => md5(stryMutAct_9fa48("44026") ? `` : (stryCov_9fa48("44026"), `files/${upload.value}`))));

              // cant use db.rename since `fix_user_uploads_zset.js` upgrade script already creates
              // `upload:md5(upload.value) hash, trying to rename to existing key results in dupe error
              const oldData = await db.getObjects(hashes.map(stryMutAct_9fa48("44027") ? () => undefined : (stryCov_9fa48("44027"), hash => stryMutAct_9fa48("44028") ? `` : (stryCov_9fa48("44028"), `upload:${hash}`))));
              const bulkSet = stryMutAct_9fa48("44029") ? ["Stryker was here"] : (stryCov_9fa48("44029"), []);
              oldData.forEach((data, idx) => {
                if (stryMutAct_9fa48("44030")) {
                  {}
                } else {
                  stryCov_9fa48("44030");
                  if (stryMutAct_9fa48("44032") ? false : stryMutAct_9fa48("44031") ? true : (stryCov_9fa48("44031", "44032"), data)) {
                    if (stryMutAct_9fa48("44033")) {
                      {}
                    } else {
                      stryCov_9fa48("44033");
                      bulkSet.push(stryMutAct_9fa48("44034") ? [] : (stryCov_9fa48("44034"), [stryMutAct_9fa48("44035") ? `` : (stryCov_9fa48("44035"), `upload:${newHashes[idx]}`), data]));
                    }
                  }
                }
              });
              await db.setObjectBulk(bulkSet);
              await db.deleteAll(hashes.map(stryMutAct_9fa48("44036") ? () => undefined : (stryCov_9fa48("44036"), hash => stryMutAct_9fa48("44037") ? `` : (stryCov_9fa48("44037"), `upload:${hash}`))));
              await Promise.all(hashes.map(stryMutAct_9fa48("44038") ? () => undefined : (stryCov_9fa48("44038"), (hash, idx) => db.rename(stryMutAct_9fa48("44039") ? `` : (stryCov_9fa48("44039"), `upload:${hash}:pids`), stryMutAct_9fa48("44040") ? `` : (stryCov_9fa48("44040"), `upload:${newHashes[idx]}:pids`)))));
            }
          }
        }
      }, stryMutAct_9fa48("44041") ? {} : (stryCov_9fa48("44041"), {
        batch: 100,
        progress: progress
      }));
    }
  }
});