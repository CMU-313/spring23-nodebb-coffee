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
  if (stryMutAct_9fa48("17428")) {
    {}
  } else {
    stryCov_9fa48("17428");
    const helpers = require('./helpers');
    module.setAdd = async function (key, value) {
      if (stryMutAct_9fa48("17429")) {
        {}
      } else {
        stryCov_9fa48("17429");
        if (stryMutAct_9fa48("17432") ? false : stryMutAct_9fa48("17431") ? true : stryMutAct_9fa48("17430") ? Array.isArray(value) : (stryCov_9fa48("17430", "17431", "17432"), !Array.isArray(value))) {
          if (stryMutAct_9fa48("17433")) {
            {}
          } else {
            stryCov_9fa48("17433");
            value = stryMutAct_9fa48("17434") ? [] : (stryCov_9fa48("17434"), [value]);
          }
        }
        if (stryMutAct_9fa48("17437") ? false : stryMutAct_9fa48("17436") ? true : stryMutAct_9fa48("17435") ? value.length : (stryCov_9fa48("17435", "17436", "17437"), !value.length)) {
          if (stryMutAct_9fa48("17438")) {
            {}
          } else {
            stryCov_9fa48("17438");
            return;
          }
        }
        await module.client.sadd(key, value);
      }
    };
    module.setsAdd = async function (keys, value) {
      if (stryMutAct_9fa48("17439")) {
        {}
      } else {
        stryCov_9fa48("17439");
        if (stryMutAct_9fa48("17442") ? !Array.isArray(keys) && !keys.length : stryMutAct_9fa48("17441") ? false : stryMutAct_9fa48("17440") ? true : (stryCov_9fa48("17440", "17441", "17442"), (stryMutAct_9fa48("17443") ? Array.isArray(keys) : (stryCov_9fa48("17443"), !Array.isArray(keys))) || (stryMutAct_9fa48("17444") ? keys.length : (stryCov_9fa48("17444"), !keys.length)))) {
          if (stryMutAct_9fa48("17445")) {
            {}
          } else {
            stryCov_9fa48("17445");
            return;
          }
        }
        const batch = module.client.batch();
        keys.forEach(stryMutAct_9fa48("17446") ? () => undefined : (stryCov_9fa48("17446"), k => batch.sadd(String(k), String(value))));
        await helpers.execBatch(batch);
      }
    };
    module.setRemove = async function (key, value) {
      if (stryMutAct_9fa48("17447")) {
        {}
      } else {
        stryCov_9fa48("17447");
        if (stryMutAct_9fa48("17450") ? false : stryMutAct_9fa48("17449") ? true : stryMutAct_9fa48("17448") ? Array.isArray(value) : (stryCov_9fa48("17448", "17449", "17450"), !Array.isArray(value))) {
          if (stryMutAct_9fa48("17451")) {
            {}
          } else {
            stryCov_9fa48("17451");
            value = stryMutAct_9fa48("17452") ? [] : (stryCov_9fa48("17452"), [value]);
          }
        }
        if (stryMutAct_9fa48("17455") ? false : stryMutAct_9fa48("17454") ? true : stryMutAct_9fa48("17453") ? Array.isArray(key) : (stryCov_9fa48("17453", "17454", "17455"), !Array.isArray(key))) {
          if (stryMutAct_9fa48("17456")) {
            {}
          } else {
            stryCov_9fa48("17456");
            key = stryMutAct_9fa48("17457") ? [] : (stryCov_9fa48("17457"), [key]);
          }
        }
        if (stryMutAct_9fa48("17460") ? false : stryMutAct_9fa48("17459") ? true : stryMutAct_9fa48("17458") ? value.length : (stryCov_9fa48("17458", "17459", "17460"), !value.length)) {
          if (stryMutAct_9fa48("17461")) {
            {}
          } else {
            stryCov_9fa48("17461");
            return;
          }
        }
        const batch = module.client.batch();
        key.forEach(stryMutAct_9fa48("17462") ? () => undefined : (stryCov_9fa48("17462"), k => batch.srem(String(k), value)));
        await helpers.execBatch(batch);
      }
    };
    module.setsRemove = async function (keys, value) {
      if (stryMutAct_9fa48("17463")) {
        {}
      } else {
        stryCov_9fa48("17463");
        const batch = module.client.batch();
        keys.forEach(stryMutAct_9fa48("17464") ? () => undefined : (stryCov_9fa48("17464"), k => batch.srem(String(k), value)));
        await helpers.execBatch(batch);
      }
    };
    module.isSetMember = async function (key, value) {
      if (stryMutAct_9fa48("17465")) {
        {}
      } else {
        stryCov_9fa48("17465");
        const result = await module.client.sismember(key, value);
        return stryMutAct_9fa48("17468") ? result !== 1 : stryMutAct_9fa48("17467") ? false : stryMutAct_9fa48("17466") ? true : (stryCov_9fa48("17466", "17467", "17468"), result === 1);
      }
    };
    module.isSetMembers = async function (key, values) {
      if (stryMutAct_9fa48("17469")) {
        {}
      } else {
        stryCov_9fa48("17469");
        const batch = module.client.batch();
        values.forEach(stryMutAct_9fa48("17470") ? () => undefined : (stryCov_9fa48("17470"), v => batch.sismember(String(key), String(v))));
        const results = await helpers.execBatch(batch);
        return results ? helpers.resultsToBool(results) : null;
      }
    };
    module.isMemberOfSets = async function (sets, value) {
      if (stryMutAct_9fa48("17471")) {
        {}
      } else {
        stryCov_9fa48("17471");
        const batch = module.client.batch();
        sets.forEach(stryMutAct_9fa48("17472") ? () => undefined : (stryCov_9fa48("17472"), s => batch.sismember(String(s), String(value))));
        const results = await helpers.execBatch(batch);
        return results ? helpers.resultsToBool(results) : null;
      }
    };
    module.getSetMembers = async function (key) {
      if (stryMutAct_9fa48("17473")) {
        {}
      } else {
        stryCov_9fa48("17473");
        return await module.client.smembers(key);
      }
    };
    module.getSetsMembers = async function (keys) {
      if (stryMutAct_9fa48("17474")) {
        {}
      } else {
        stryCov_9fa48("17474");
        const batch = module.client.batch();
        keys.forEach(stryMutAct_9fa48("17475") ? () => undefined : (stryCov_9fa48("17475"), k => batch.smembers(String(k))));
        return await helpers.execBatch(batch);
      }
    };
    module.setCount = async function (key) {
      if (stryMutAct_9fa48("17476")) {
        {}
      } else {
        stryCov_9fa48("17476");
        return await module.client.scard(key);
      }
    };
    module.setsCount = async function (keys) {
      if (stryMutAct_9fa48("17477")) {
        {}
      } else {
        stryCov_9fa48("17477");
        const batch = module.client.batch();
        keys.forEach(stryMutAct_9fa48("17478") ? () => undefined : (stryCov_9fa48("17478"), k => batch.scard(String(k))));
        return await helpers.execBatch(batch);
      }
    };
    module.setRemoveRandom = async function (key) {
      if (stryMutAct_9fa48("17479")) {
        {}
      } else {
        stryCov_9fa48("17479");
        return await module.client.spop(key);
      }
    };
    return module;
  }
};