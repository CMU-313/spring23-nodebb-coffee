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
const path = require('path');
const fs = require('fs').promises;
const nconf = require('nconf');
const db = require('../../database');
const batch = require('../../batch');
const file = require('../../file');
module.exports = stryMutAct_9fa48("43913") ? {} : (stryCov_9fa48("43913"), {
  name: stryMutAct_9fa48("43914") ? "" : (stryCov_9fa48("43914"), 'Clean up leftover topic thumb sorted sets and files for since-purged topics'),
  timestamp: Date.UTC(2022, 1, 7),
  method: async function () {
    if (stryMutAct_9fa48("43915")) {
      {}
    } else {
      stryCov_9fa48("43915");
      const {
        progress
      } = this;
      const nextTid = await db.getObjectField(stryMutAct_9fa48("43916") ? "" : (stryCov_9fa48("43916"), 'global'), stryMutAct_9fa48("43917") ? "" : (stryCov_9fa48("43917"), 'nextTid'));
      const tids = stryMutAct_9fa48("43918") ? ["Stryker was here"] : (stryCov_9fa48("43918"), []);
      for (let x = 1; stryMutAct_9fa48("43921") ? x >= nextTid : stryMutAct_9fa48("43920") ? x <= nextTid : stryMutAct_9fa48("43919") ? false : (stryCov_9fa48("43919", "43920", "43921"), x < nextTid); stryMutAct_9fa48("43922") ? x-- : (stryCov_9fa48("43922"), x++)) {
        if (stryMutAct_9fa48("43923")) {
          {}
        } else {
          stryCov_9fa48("43923");
          tids.push(x);
        }
      }
      const purgedTids = stryMutAct_9fa48("43924") ? (await db.isSortedSetMembers('topics:tid', tids)).map((exists, idx) => exists ? false : tids[idx]) : (stryCov_9fa48("43924"), (await db.isSortedSetMembers(stryMutAct_9fa48("43925") ? "" : (stryCov_9fa48("43925"), 'topics:tid'), tids)).map(stryMutAct_9fa48("43926") ? () => undefined : (stryCov_9fa48("43926"), (exists, idx) => exists ? stryMutAct_9fa48("43927") ? true : (stryCov_9fa48("43927"), false) : tids[idx])).filter(Boolean));
      const affectedTids = stryMutAct_9fa48("43928") ? (await db.exists(purgedTids.map(tid => `topic:${tid}:thumbs`))).map((exists, idx) => exists ? purgedTids[idx] : false) : (stryCov_9fa48("43928"), (await db.exists(purgedTids.map(stryMutAct_9fa48("43929") ? () => undefined : (stryCov_9fa48("43929"), tid => stryMutAct_9fa48("43930") ? `` : (stryCov_9fa48("43930"), `topic:${tid}:thumbs`))))).map(stryMutAct_9fa48("43931") ? () => undefined : (stryCov_9fa48("43931"), (exists, idx) => exists ? purgedTids[idx] : stryMutAct_9fa48("43932") ? true : (stryCov_9fa48("43932"), false))).filter(Boolean));
      progress.total = affectedTids.length;
      await batch.processArray(affectedTids, async tids => {
        if (stryMutAct_9fa48("43933")) {
          {}
        } else {
          stryCov_9fa48("43933");
          await Promise.all(tids.map(async tid => {
            if (stryMutAct_9fa48("43934")) {
              {}
            } else {
              stryCov_9fa48("43934");
              const relativePaths = await db.getSortedSetMembers(stryMutAct_9fa48("43935") ? `` : (stryCov_9fa48("43935"), `topic:${tid}:thumbs`));
              const absolutePaths = relativePaths.map(stryMutAct_9fa48("43936") ? () => undefined : (stryCov_9fa48("43936"), relativePath => path.join(nconf.get(stryMutAct_9fa48("43937") ? "" : (stryCov_9fa48("43937"), 'upload_path')), relativePath)));
              await Promise.all(absolutePaths.map(async absolutePath => {
                if (stryMutAct_9fa48("43938")) {
                  {}
                } else {
                  stryCov_9fa48("43938");
                  const exists = await file.exists(absolutePath);
                  if (stryMutAct_9fa48("43940") ? false : stryMutAct_9fa48("43939") ? true : (stryCov_9fa48("43939", "43940"), exists)) {
                    if (stryMutAct_9fa48("43941")) {
                      {}
                    } else {
                      stryCov_9fa48("43941");
                      await fs.unlink(absolutePath);
                    }
                  }
                }
              }));
              await db.delete(stryMutAct_9fa48("43942") ? `` : (stryCov_9fa48("43942"), `topic:${tid}:thumbs`));
              progress.incr();
            }
          }));
        }
      }, stryMutAct_9fa48("43943") ? {} : (stryCov_9fa48("43943"), {
        progress,
        batch: 100
      }));
    }
  }
});