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
module.exports = stryMutAct_9fa48("44550") ? {} : (stryCov_9fa48("44550"), {
  name: stryMutAct_9fa48("44551") ? "" : (stryCov_9fa48("44551"), 'Fix incorrect robots.txt schema'),
  timestamp: Date.UTC(2017, 6, 10),
  method: async function () {
    if (stryMutAct_9fa48("44552")) {
      {}
    } else {
      stryCov_9fa48("44552");
      const config = await db.getObject(stryMutAct_9fa48("44553") ? "" : (stryCov_9fa48("44553"), 'config'));
      if (stryMutAct_9fa48("44555") ? false : stryMutAct_9fa48("44554") ? true : (stryCov_9fa48("44554", "44555"), config)) {
        if (stryMutAct_9fa48("44556")) {
          {}
        } else {
          stryCov_9fa48("44556");
          // fix mongo nested data
          if (stryMutAct_9fa48("44559") ? config.robots || config.robots.txt : stryMutAct_9fa48("44558") ? false : stryMutAct_9fa48("44557") ? true : (stryCov_9fa48("44557", "44558", "44559"), config.robots && config.robots.txt)) {
            if (stryMutAct_9fa48("44560")) {
              {}
            } else {
              stryCov_9fa48("44560");
              await db.setObjectField(stryMutAct_9fa48("44561") ? "" : (stryCov_9fa48("44561"), 'config'), stryMutAct_9fa48("44562") ? "" : (stryCov_9fa48("44562"), 'robots:txt'), config.robots.txt);
            }
          } else if (stryMutAct_9fa48("44565") ? typeof config['robots.txt'] === 'string' || config['robots.txt'] : stryMutAct_9fa48("44564") ? false : stryMutAct_9fa48("44563") ? true : (stryCov_9fa48("44563", "44564", "44565"), (stryMutAct_9fa48("44567") ? typeof config['robots.txt'] !== 'string' : stryMutAct_9fa48("44566") ? true : (stryCov_9fa48("44566", "44567"), typeof config[stryMutAct_9fa48("44568") ? "" : (stryCov_9fa48("44568"), 'robots.txt')] === (stryMutAct_9fa48("44569") ? "" : (stryCov_9fa48("44569"), 'string')))) && config[stryMutAct_9fa48("44570") ? "" : (stryCov_9fa48("44570"), 'robots.txt')])) {
            if (stryMutAct_9fa48("44571")) {
              {}
            } else {
              stryCov_9fa48("44571");
              await db.setObjectField(stryMutAct_9fa48("44572") ? "" : (stryCov_9fa48("44572"), 'config'), stryMutAct_9fa48("44573") ? "" : (stryCov_9fa48("44573"), 'robots:txt'), config[stryMutAct_9fa48("44574") ? "" : (stryCov_9fa48("44574"), 'robots.txt')]);
            }
          }
          await db.deleteObjectField(stryMutAct_9fa48("44575") ? "" : (stryCov_9fa48("44575"), 'config'), stryMutAct_9fa48("44576") ? "" : (stryCov_9fa48("44576"), 'robots'));
          await db.deleteObjectField(stryMutAct_9fa48("44577") ? "" : (stryCov_9fa48("44577"), 'config'), stryMutAct_9fa48("44578") ? "" : (stryCov_9fa48("44578"), 'robots.txt'));
        }
      }
    }
  }
});