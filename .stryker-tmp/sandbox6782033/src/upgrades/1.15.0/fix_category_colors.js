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
module.exports = stryMutAct_9fa48("43399") ? {} : (stryCov_9fa48("43399"), {
  name: stryMutAct_9fa48("43400") ? "" : (stryCov_9fa48("43400"), 'Fix category colors that are 3 digit hex colors'),
  timestamp: Date.UTC(2020, 9, 11),
  method: async () => {
    if (stryMutAct_9fa48("43401")) {
      {}
    } else {
      stryCov_9fa48("43401");
      const batch = require('../../batch');
      await batch.processSortedSet(stryMutAct_9fa48("43402") ? "" : (stryCov_9fa48("43402"), 'categories:cid'), async cids => {
        if (stryMutAct_9fa48("43403")) {
          {}
        } else {
          stryCov_9fa48("43403");
          let categoryData = await db.getObjects(cids.map(stryMutAct_9fa48("43404") ? () => undefined : (stryCov_9fa48("43404"), c => stryMutAct_9fa48("43405") ? `` : (stryCov_9fa48("43405"), `category:${c}`))));
          categoryData = stryMutAct_9fa48("43406") ? categoryData : (stryCov_9fa48("43406"), categoryData.filter(stryMutAct_9fa48("43407") ? () => undefined : (stryCov_9fa48("43407"), c => stryMutAct_9fa48("43410") ? c || c.color === '#fff' || c.color === '#333' || String(c.color).length !== 7 : stryMutAct_9fa48("43409") ? false : stryMutAct_9fa48("43408") ? true : (stryCov_9fa48("43408", "43409", "43410"), c && (stryMutAct_9fa48("43412") ? (c.color === '#fff' || c.color === '#333') && String(c.color).length !== 7 : stryMutAct_9fa48("43411") ? true : (stryCov_9fa48("43411", "43412"), (stryMutAct_9fa48("43414") ? c.color === '#fff' && c.color === '#333' : stryMutAct_9fa48("43413") ? false : (stryCov_9fa48("43413", "43414"), (stryMutAct_9fa48("43416") ? c.color !== '#fff' : stryMutAct_9fa48("43415") ? false : (stryCov_9fa48("43415", "43416"), c.color === (stryMutAct_9fa48("43417") ? "" : (stryCov_9fa48("43417"), '#fff')))) || (stryMutAct_9fa48("43419") ? c.color !== '#333' : stryMutAct_9fa48("43418") ? false : (stryCov_9fa48("43418", "43419"), c.color === (stryMutAct_9fa48("43420") ? "" : (stryCov_9fa48("43420"), '#333')))))) || (stryMutAct_9fa48("43422") ? String(c.color).length === 7 : stryMutAct_9fa48("43421") ? false : (stryCov_9fa48("43421", "43422"), String(c.color).length !== 7))))))));
          if (stryMutAct_9fa48("43424") ? false : stryMutAct_9fa48("43423") ? true : (stryCov_9fa48("43423", "43424"), categoryData.length)) {
            if (stryMutAct_9fa48("43425")) {
              {}
            } else {
              stryCov_9fa48("43425");
              await Promise.all(categoryData.map(async data => {
                if (stryMutAct_9fa48("43426")) {
                  {}
                } else {
                  stryCov_9fa48("43426");
                  const color = stryMutAct_9fa48("43427") ? `` : (stryCov_9fa48("43427"), `#${(stryMutAct_9fa48("43428") ? new Array() : (stryCov_9fa48("43428"), new Array(6))).fill(stryMutAct_9fa48("43431") ? data.color && data.color[1] && 'f' : stryMutAct_9fa48("43430") ? false : stryMutAct_9fa48("43429") ? true : (stryCov_9fa48("43429", "43430", "43431"), (stryMutAct_9fa48("43433") ? data.color || data.color[1] : stryMutAct_9fa48("43432") ? false : (stryCov_9fa48("43432", "43433"), data.color && data.color[1])) || (stryMutAct_9fa48("43434") ? "" : (stryCov_9fa48("43434"), 'f')))).join(stryMutAct_9fa48("43435") ? "Stryker was here!" : (stryCov_9fa48("43435"), ''))}`);
                  await db.setObjectField(stryMutAct_9fa48("43436") ? `` : (stryCov_9fa48("43436"), `category:${data.cid}`), stryMutAct_9fa48("43437") ? "" : (stryCov_9fa48("43437"), 'color'), color);
                }
              }));
            }
          }
        }
      }, stryMutAct_9fa48("43438") ? {} : (stryCov_9fa48("43438"), {
        batch: 500
      }));
    }
  }
});