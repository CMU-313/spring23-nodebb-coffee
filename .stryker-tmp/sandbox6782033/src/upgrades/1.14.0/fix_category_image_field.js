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
module.exports = stryMutAct_9fa48("43228") ? {} : (stryCov_9fa48("43228"), {
  name: stryMutAct_9fa48("43229") ? "" : (stryCov_9fa48("43229"), 'Remove duplicate image field for categories'),
  timestamp: Date.UTC(2020, 5, 9),
  method: async () => {
    if (stryMutAct_9fa48("43230")) {
      {}
    } else {
      stryCov_9fa48("43230");
      const batch = require('../../batch');
      await batch.processSortedSet(stryMutAct_9fa48("43231") ? "" : (stryCov_9fa48("43231"), 'categories:cid'), async cids => {
        if (stryMutAct_9fa48("43232")) {
          {}
        } else {
          stryCov_9fa48("43232");
          let categoryData = await db.getObjects(cids.map(stryMutAct_9fa48("43233") ? () => undefined : (stryCov_9fa48("43233"), c => stryMutAct_9fa48("43234") ? `` : (stryCov_9fa48("43234"), `category:${c}`))));
          categoryData = stryMutAct_9fa48("43235") ? categoryData : (stryCov_9fa48("43235"), categoryData.filter(stryMutAct_9fa48("43236") ? () => undefined : (stryCov_9fa48("43236"), c => stryMutAct_9fa48("43239") ? c || c.image || c.backgroundImage : stryMutAct_9fa48("43238") ? false : stryMutAct_9fa48("43237") ? true : (stryCov_9fa48("43237", "43238", "43239"), c && (stryMutAct_9fa48("43241") ? c.image && c.backgroundImage : stryMutAct_9fa48("43240") ? true : (stryCov_9fa48("43240", "43241"), c.image || c.backgroundImage))))));
          if (stryMutAct_9fa48("43243") ? false : stryMutAct_9fa48("43242") ? true : (stryCov_9fa48("43242", "43243"), categoryData.length)) {
            if (stryMutAct_9fa48("43244")) {
              {}
            } else {
              stryCov_9fa48("43244");
              await Promise.all(categoryData.map(async data => {
                if (stryMutAct_9fa48("43245")) {
                  {}
                } else {
                  stryCov_9fa48("43245");
                  if (stryMutAct_9fa48("43248") ? data.image || !data.backgroundImage : stryMutAct_9fa48("43247") ? false : stryMutAct_9fa48("43246") ? true : (stryCov_9fa48("43246", "43247", "43248"), data.image && (stryMutAct_9fa48("43249") ? data.backgroundImage : (stryCov_9fa48("43249"), !data.backgroundImage)))) {
                    if (stryMutAct_9fa48("43250")) {
                      {}
                    } else {
                      stryCov_9fa48("43250");
                      await db.setObjectField(stryMutAct_9fa48("43251") ? `` : (stryCov_9fa48("43251"), `category:${data.cid}`), stryMutAct_9fa48("43252") ? "" : (stryCov_9fa48("43252"), 'backgroundImage'), data.image);
                    }
                  }
                  await db.deleteObjectField(stryMutAct_9fa48("43253") ? `` : (stryCov_9fa48("43253"), `category:${data.cid}`), stryMutAct_9fa48("43254") ? "" : (stryCov_9fa48("43254"), 'image'), data.image);
                }
              }));
            }
          }
        }
      }, stryMutAct_9fa48("43255") ? {} : (stryCov_9fa48("43255"), {
        batch: 500
      }));
    }
  }
});