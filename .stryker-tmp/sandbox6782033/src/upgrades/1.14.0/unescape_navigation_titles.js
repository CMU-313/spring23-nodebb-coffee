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
module.exports = stryMutAct_9fa48("43256") ? {} : (stryCov_9fa48("43256"), {
  name: stryMutAct_9fa48("43257") ? "" : (stryCov_9fa48("43257"), 'Unescape navigation titles'),
  timestamp: Date.UTC(2020, 5, 26),
  method: async function () {
    if (stryMutAct_9fa48("43258")) {
      {}
    } else {
      stryCov_9fa48("43258");
      const data = await db.getSortedSetRangeWithScores(stryMutAct_9fa48("43259") ? "" : (stryCov_9fa48("43259"), 'navigation:enabled'), 0, stryMutAct_9fa48("43260") ? +1 : (stryCov_9fa48("43260"), -1));
      const translator = require('../../translator');
      const order = stryMutAct_9fa48("43261") ? ["Stryker was here"] : (stryCov_9fa48("43261"), []);
      const items = stryMutAct_9fa48("43262") ? ["Stryker was here"] : (stryCov_9fa48("43262"), []);
      data.forEach(item => {
        if (stryMutAct_9fa48("43263")) {
          {}
        } else {
          stryCov_9fa48("43263");
          const navItem = JSON.parse(item.value);
          if (stryMutAct_9fa48("43265") ? false : stryMutAct_9fa48("43264") ? true : (stryCov_9fa48("43264", "43265"), navItem.hasOwnProperty(stryMutAct_9fa48("43266") ? "" : (stryCov_9fa48("43266"), 'title')))) {
            if (stryMutAct_9fa48("43267")) {
              {}
            } else {
              stryCov_9fa48("43267");
              navItem.title = translator.unescape(navItem.title);
              navItem.title = navItem.title.replace(/&#x5C;/g, stryMutAct_9fa48("43268") ? "Stryker was here!" : (stryCov_9fa48("43268"), ''));
            }
          }
          if (stryMutAct_9fa48("43270") ? false : stryMutAct_9fa48("43269") ? true : (stryCov_9fa48("43269", "43270"), navItem.hasOwnProperty(stryMutAct_9fa48("43271") ? "" : (stryCov_9fa48("43271"), 'text')))) {
            if (stryMutAct_9fa48("43272")) {
              {}
            } else {
              stryCov_9fa48("43272");
              navItem.text = translator.unescape(navItem.text);
              navItem.text = navItem.text.replace(/&#x5C;/g, stryMutAct_9fa48("43273") ? "Stryker was here!" : (stryCov_9fa48("43273"), ''));
            }
          }
          if (stryMutAct_9fa48("43275") ? false : stryMutAct_9fa48("43274") ? true : (stryCov_9fa48("43274", "43275"), navItem.hasOwnProperty(stryMutAct_9fa48("43276") ? "" : (stryCov_9fa48("43276"), 'route')))) {
            if (stryMutAct_9fa48("43277")) {
              {}
            } else {
              stryCov_9fa48("43277");
              navItem.route = navItem.route.replace(stryMutAct_9fa48("43278") ? "" : (stryCov_9fa48("43278"), '&#x2F;'), stryMutAct_9fa48("43279") ? "" : (stryCov_9fa48("43279"), '/'));
            }
          }
          order.push(item.score);
          items.push(JSON.stringify(navItem));
        }
      });
      await db.delete(stryMutAct_9fa48("43280") ? "" : (stryCov_9fa48("43280"), 'navigation:enabled'));
      await db.sortedSetAdd(stryMutAct_9fa48("43281") ? "" : (stryCov_9fa48("43281"), 'navigation:enabled'), order, items);
    }
  }
});