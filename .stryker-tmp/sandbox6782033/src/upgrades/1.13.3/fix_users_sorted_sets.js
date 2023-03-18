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
module.exports = stryMutAct_9fa48("43141") ? {} : (stryCov_9fa48("43141"), {
  name: stryMutAct_9fa48("43142") ? "" : (stryCov_9fa48("43142"), 'Fix user sorted sets'),
  timestamp: Date.UTC(2020, 4, 2),
  method: async function () {
    if (stryMutAct_9fa48("43143")) {
      {}
    } else {
      stryCov_9fa48("43143");
      const {
        progress
      } = this;
      const nextUid = await db.getObjectField(stryMutAct_9fa48("43144") ? "" : (stryCov_9fa48("43144"), 'global'), stryMutAct_9fa48("43145") ? "" : (stryCov_9fa48("43145"), 'nextUid'));
      const allUids = stryMutAct_9fa48("43146") ? ["Stryker was here"] : (stryCov_9fa48("43146"), []);
      for (let i = 1; stryMutAct_9fa48("43149") ? i > nextUid : stryMutAct_9fa48("43148") ? i < nextUid : stryMutAct_9fa48("43147") ? false : (stryCov_9fa48("43147", "43148", "43149"), i <= nextUid); stryMutAct_9fa48("43150") ? i-- : (stryCov_9fa48("43150"), i++)) {
        if (stryMutAct_9fa48("43151")) {
          {}
        } else {
          stryCov_9fa48("43151");
          allUids.push(i);
        }
      }
      progress.total = nextUid;
      let totalUserCount = 0;
      await db.delete(stryMutAct_9fa48("43152") ? "" : (stryCov_9fa48("43152"), 'user:null'));
      await db.sortedSetsRemove(stryMutAct_9fa48("43153") ? [] : (stryCov_9fa48("43153"), [stryMutAct_9fa48("43154") ? "" : (stryCov_9fa48("43154"), 'users:joindate'), stryMutAct_9fa48("43155") ? "" : (stryCov_9fa48("43155"), 'users:reputation'), stryMutAct_9fa48("43156") ? "" : (stryCov_9fa48("43156"), 'users:postcount'), stryMutAct_9fa48("43157") ? "" : (stryCov_9fa48("43157"), 'users:flags')]), stryMutAct_9fa48("43158") ? "" : (stryCov_9fa48("43158"), 'null'));
      await batch.processArray(allUids, async uids => {
        if (stryMutAct_9fa48("43159")) {
          {}
        } else {
          stryCov_9fa48("43159");
          progress.incr(uids.length);
          const userData = await db.getObjects(uids.map(stryMutAct_9fa48("43160") ? () => undefined : (stryCov_9fa48("43160"), id => stryMutAct_9fa48("43161") ? `` : (stryCov_9fa48("43161"), `user:${id}`))));
          await Promise.all(userData.map(async (userData, index) => {
            if (stryMutAct_9fa48("43162")) {
              {}
            } else {
              stryCov_9fa48("43162");
              if (stryMutAct_9fa48("43165") ? !userData && !userData.uid : stryMutAct_9fa48("43164") ? false : stryMutAct_9fa48("43163") ? true : (stryCov_9fa48("43163", "43164", "43165"), (stryMutAct_9fa48("43166") ? userData : (stryCov_9fa48("43166"), !userData)) || (stryMutAct_9fa48("43167") ? userData.uid : (stryCov_9fa48("43167"), !userData.uid)))) {
                if (stryMutAct_9fa48("43168")) {
                  {}
                } else {
                  stryCov_9fa48("43168");
                  await db.sortedSetsRemove(stryMutAct_9fa48("43169") ? [] : (stryCov_9fa48("43169"), [stryMutAct_9fa48("43170") ? "" : (stryCov_9fa48("43170"), 'users:joindate'), stryMutAct_9fa48("43171") ? "" : (stryCov_9fa48("43171"), 'users:reputation'), stryMutAct_9fa48("43172") ? "" : (stryCov_9fa48("43172"), 'users:postcount'), stryMutAct_9fa48("43173") ? "" : (stryCov_9fa48("43173"), 'users:flags')]), uids[index]);
                  if (stryMutAct_9fa48("43176") ? userData || !userData.uid : stryMutAct_9fa48("43175") ? false : stryMutAct_9fa48("43174") ? true : (stryCov_9fa48("43174", "43175", "43176"), userData && (stryMutAct_9fa48("43177") ? userData.uid : (stryCov_9fa48("43177"), !userData.uid)))) {
                    if (stryMutAct_9fa48("43178")) {
                      {}
                    } else {
                      stryCov_9fa48("43178");
                      await db.delete(stryMutAct_9fa48("43179") ? `` : (stryCov_9fa48("43179"), `user:${uids[index]}`));
                    }
                  }
                  return;
                }
              }
              stryMutAct_9fa48("43180") ? totalUserCount -= 1 : (stryCov_9fa48("43180"), totalUserCount += 1);
              await db.sortedSetAddBulk(stryMutAct_9fa48("43181") ? [] : (stryCov_9fa48("43181"), [stryMutAct_9fa48("43182") ? [] : (stryCov_9fa48("43182"), [stryMutAct_9fa48("43183") ? "" : (stryCov_9fa48("43183"), 'users:joindate'), stryMutAct_9fa48("43186") ? userData.joindate && Date.now() : stryMutAct_9fa48("43185") ? false : stryMutAct_9fa48("43184") ? true : (stryCov_9fa48("43184", "43185", "43186"), userData.joindate || Date.now()), uids[index]]), stryMutAct_9fa48("43187") ? [] : (stryCov_9fa48("43187"), [stryMutAct_9fa48("43188") ? "" : (stryCov_9fa48("43188"), 'users:reputation'), stryMutAct_9fa48("43191") ? userData.reputation && 0 : stryMutAct_9fa48("43190") ? false : stryMutAct_9fa48("43189") ? true : (stryCov_9fa48("43189", "43190", "43191"), userData.reputation || 0), uids[index]]), stryMutAct_9fa48("43192") ? [] : (stryCov_9fa48("43192"), [stryMutAct_9fa48("43193") ? "" : (stryCov_9fa48("43193"), 'users:postcount'), stryMutAct_9fa48("43196") ? userData.postcount && 0 : stryMutAct_9fa48("43195") ? false : stryMutAct_9fa48("43194") ? true : (stryCov_9fa48("43194", "43195", "43196"), userData.postcount || 0), uids[index]])]));
              if (stryMutAct_9fa48("43199") ? userData.hasOwnProperty('flags') || parseInt(userData.flags, 10) > 0 : stryMutAct_9fa48("43198") ? false : stryMutAct_9fa48("43197") ? true : (stryCov_9fa48("43197", "43198", "43199"), userData.hasOwnProperty(stryMutAct_9fa48("43200") ? "" : (stryCov_9fa48("43200"), 'flags')) && (stryMutAct_9fa48("43203") ? parseInt(userData.flags, 10) <= 0 : stryMutAct_9fa48("43202") ? parseInt(userData.flags, 10) >= 0 : stryMutAct_9fa48("43201") ? true : (stryCov_9fa48("43201", "43202", "43203"), parseInt(userData.flags, 10) > 0)))) {
                if (stryMutAct_9fa48("43204")) {
                  {}
                } else {
                  stryCov_9fa48("43204");
                  await db.sortedSetAdd(stryMutAct_9fa48("43205") ? "" : (stryCov_9fa48("43205"), 'users:flags'), userData.flags, uids[index]);
                }
              }
            }
          }));
        }
      }, stryMutAct_9fa48("43206") ? {} : (stryCov_9fa48("43206"), {
        progress: progress,
        batch: 500
      }));
      await db.setObjectField(stryMutAct_9fa48("43207") ? "" : (stryCov_9fa48("43207"), 'global'), stryMutAct_9fa48("43208") ? "" : (stryCov_9fa48("43208"), 'userCount'), totalUserCount);
    }
  }
});