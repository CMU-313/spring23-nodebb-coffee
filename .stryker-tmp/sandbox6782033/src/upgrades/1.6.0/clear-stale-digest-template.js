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
const meta = require('../../meta');
module.exports = stryMutAct_9fa48("44490") ? {} : (stryCov_9fa48("44490"), {
  name: stryMutAct_9fa48("44491") ? "" : (stryCov_9fa48("44491"), 'Clearing stale digest templates that were accidentally saved as custom'),
  timestamp: Date.UTC(2017, 8, 6),
  method: async function () {
    if (stryMutAct_9fa48("44492")) {
      {}
    } else {
      stryCov_9fa48("44492");
      const matches = stryMutAct_9fa48("44493") ? [] : (stryCov_9fa48("44493"), [stryMutAct_9fa48("44494") ? "" : (stryCov_9fa48("44494"), '112e541b40023d6530dd44df4b0d9c5d'), // digest @ 75917e25b3b5ad7bed8ed0c36433fb35c9ab33eb
      stryMutAct_9fa48("44495") ? "" : (stryCov_9fa48("44495"), '110b8805f70395b0282fd10555059e9f'), // digest @ 9b02bb8f51f0e47c6e335578f776ffc17bc03537
      stryMutAct_9fa48("44496") ? "" : (stryCov_9fa48("44496"), '9538e7249edb369b2a25b03f2bd3282b') // digest @ 3314ab4b83138c7ae579ac1f1f463098b8c2d414
      ]);
      const fieldset = await meta.configs.getFields(stryMutAct_9fa48("44497") ? [] : (stryCov_9fa48("44497"), [stryMutAct_9fa48("44498") ? "" : (stryCov_9fa48("44498"), 'email:custom:digest')]));
      const hash = fieldset[stryMutAct_9fa48("44499") ? "" : (stryCov_9fa48("44499"), 'email:custom:digest')] ? crypto.createHash(stryMutAct_9fa48("44500") ? "" : (stryCov_9fa48("44500"), 'md5')).update(fieldset[stryMutAct_9fa48("44501") ? "" : (stryCov_9fa48("44501"), 'email:custom:digest')]).digest(stryMutAct_9fa48("44502") ? "" : (stryCov_9fa48("44502"), 'hex')) : null;
      if (stryMutAct_9fa48("44504") ? false : stryMutAct_9fa48("44503") ? true : (stryCov_9fa48("44503", "44504"), matches.includes(hash))) {
        if (stryMutAct_9fa48("44505")) {
          {}
        } else {
          stryCov_9fa48("44505");
          await meta.configs.remove(stryMutAct_9fa48("44506") ? "" : (stryCov_9fa48("44506"), 'email:custom:digest'));
        }
      }
    }
  }
});