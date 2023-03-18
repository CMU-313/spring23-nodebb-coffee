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
module.exports = function (module) {
  if (stryMutAct_9fa48("17621")) {
    {}
  } else {
    stryCov_9fa48("17621");
    const helpers = require('../helpers');
    module.sortedSetRemove = async function (key, value) {
      if (stryMutAct_9fa48("17622")) {
        {}
      } else {
        stryCov_9fa48("17622");
        if (stryMutAct_9fa48("17625") ? false : stryMutAct_9fa48("17624") ? true : stryMutAct_9fa48("17623") ? key : (stryCov_9fa48("17623", "17624", "17625"), !key)) {
          if (stryMutAct_9fa48("17626")) {
            {}
          } else {
            stryCov_9fa48("17626");
            return;
          }
        }
        const isValueArray = Array.isArray(value);
        if (stryMutAct_9fa48("17629") ? !value && isValueArray && !value.length : stryMutAct_9fa48("17628") ? false : stryMutAct_9fa48("17627") ? true : (stryCov_9fa48("17627", "17628", "17629"), (stryMutAct_9fa48("17630") ? value : (stryCov_9fa48("17630"), !value)) || (stryMutAct_9fa48("17632") ? isValueArray || !value.length : stryMutAct_9fa48("17631") ? false : (stryCov_9fa48("17631", "17632"), isValueArray && (stryMutAct_9fa48("17633") ? value.length : (stryCov_9fa48("17633"), !value.length)))))) {
          if (stryMutAct_9fa48("17634")) {
            {}
          } else {
            stryCov_9fa48("17634");
            return;
          }
        }
        if (stryMutAct_9fa48("17637") ? false : stryMutAct_9fa48("17636") ? true : stryMutAct_9fa48("17635") ? isValueArray : (stryCov_9fa48("17635", "17636", "17637"), !isValueArray)) {
          if (stryMutAct_9fa48("17638")) {
            {}
          } else {
            stryCov_9fa48("17638");
            value = stryMutAct_9fa48("17639") ? [] : (stryCov_9fa48("17639"), [value]);
          }
        }
        if (stryMutAct_9fa48("17641") ? false : stryMutAct_9fa48("17640") ? true : (stryCov_9fa48("17640", "17641"), Array.isArray(key))) {
          if (stryMutAct_9fa48("17642")) {
            {}
          } else {
            stryCov_9fa48("17642");
            const batch = module.client.batch();
            key.forEach(stryMutAct_9fa48("17643") ? () => undefined : (stryCov_9fa48("17643"), k => batch.zrem(k, value)));
            await helpers.execBatch(batch);
          }
        } else {
          if (stryMutAct_9fa48("17644")) {
            {}
          } else {
            stryCov_9fa48("17644");
            await module.client.zrem(key, value);
          }
        }
      }
    };
    module.sortedSetsRemove = async function (keys, value) {
      if (stryMutAct_9fa48("17645")) {
        {}
      } else {
        stryCov_9fa48("17645");
        await module.sortedSetRemove(keys, value);
      }
    };
    module.sortedSetsRemoveRangeByScore = async function (keys, min, max) {
      if (stryMutAct_9fa48("17646")) {
        {}
      } else {
        stryCov_9fa48("17646");
        const batch = module.client.batch();
        keys.forEach(stryMutAct_9fa48("17647") ? () => undefined : (stryCov_9fa48("17647"), k => batch.zremrangebyscore(k, min, max)));
        await helpers.execBatch(batch);
      }
    };
    module.sortedSetRemoveBulk = async function (data) {
      if (stryMutAct_9fa48("17648")) {
        {}
      } else {
        stryCov_9fa48("17648");
        if (stryMutAct_9fa48("17651") ? !Array.isArray(data) && !data.length : stryMutAct_9fa48("17650") ? false : stryMutAct_9fa48("17649") ? true : (stryCov_9fa48("17649", "17650", "17651"), (stryMutAct_9fa48("17652") ? Array.isArray(data) : (stryCov_9fa48("17652"), !Array.isArray(data))) || (stryMutAct_9fa48("17653") ? data.length : (stryCov_9fa48("17653"), !data.length)))) {
          if (stryMutAct_9fa48("17654")) {
            {}
          } else {
            stryCov_9fa48("17654");
            return;
          }
        }
        const batch = module.client.batch();
        data.forEach(stryMutAct_9fa48("17655") ? () => undefined : (stryCov_9fa48("17655"), item => batch.zrem(item[0], item[1])));
        await helpers.execBatch(batch);
      }
    };
  }
};