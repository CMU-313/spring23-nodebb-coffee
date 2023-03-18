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
  if (stryMutAct_9fa48("17302")) {
    {}
  } else {
    stryCov_9fa48("17302");
    const helpers = require('./helpers');
    module.listPrepend = async function (key, value) {
      if (stryMutAct_9fa48("17303")) {
        {}
      } else {
        stryCov_9fa48("17303");
        if (stryMutAct_9fa48("17306") ? false : stryMutAct_9fa48("17305") ? true : stryMutAct_9fa48("17304") ? key : (stryCov_9fa48("17304", "17305", "17306"), !key)) {
          if (stryMutAct_9fa48("17307")) {
            {}
          } else {
            stryCov_9fa48("17307");
            return;
          }
        }
        await module.client.lpush(key, value);
      }
    };
    module.listAppend = async function (key, value) {
      if (stryMutAct_9fa48("17308")) {
        {}
      } else {
        stryCov_9fa48("17308");
        if (stryMutAct_9fa48("17311") ? false : stryMutAct_9fa48("17310") ? true : stryMutAct_9fa48("17309") ? key : (stryCov_9fa48("17309", "17310", "17311"), !key)) {
          if (stryMutAct_9fa48("17312")) {
            {}
          } else {
            stryCov_9fa48("17312");
            return;
          }
        }
        await module.client.rpush(key, value);
      }
    };
    module.listRemoveLast = async function (key) {
      if (stryMutAct_9fa48("17313")) {
        {}
      } else {
        stryCov_9fa48("17313");
        if (stryMutAct_9fa48("17316") ? false : stryMutAct_9fa48("17315") ? true : stryMutAct_9fa48("17314") ? key : (stryCov_9fa48("17314", "17315", "17316"), !key)) {
          if (stryMutAct_9fa48("17317")) {
            {}
          } else {
            stryCov_9fa48("17317");
            return;
          }
        }
        return await module.client.rpop(key);
      }
    };
    module.listRemoveAll = async function (key, value) {
      if (stryMutAct_9fa48("17318")) {
        {}
      } else {
        stryCov_9fa48("17318");
        if (stryMutAct_9fa48("17321") ? false : stryMutAct_9fa48("17320") ? true : stryMutAct_9fa48("17319") ? key : (stryCov_9fa48("17319", "17320", "17321"), !key)) {
          if (stryMutAct_9fa48("17322")) {
            {}
          } else {
            stryCov_9fa48("17322");
            return;
          }
        }
        if (stryMutAct_9fa48("17324") ? false : stryMutAct_9fa48("17323") ? true : (stryCov_9fa48("17323", "17324"), Array.isArray(value))) {
          if (stryMutAct_9fa48("17325")) {
            {}
          } else {
            stryCov_9fa48("17325");
            const batch = module.client.batch();
            value.forEach(stryMutAct_9fa48("17326") ? () => undefined : (stryCov_9fa48("17326"), value => batch.lrem(key, 0, value)));
            await helpers.execBatch(batch);
          }
        } else {
          if (stryMutAct_9fa48("17327")) {
            {}
          } else {
            stryCov_9fa48("17327");
            await module.client.lrem(key, 0, value);
          }
        }
      }
    };
    module.listTrim = async function (key, start, stop) {
      if (stryMutAct_9fa48("17328")) {
        {}
      } else {
        stryCov_9fa48("17328");
        if (stryMutAct_9fa48("17331") ? false : stryMutAct_9fa48("17330") ? true : stryMutAct_9fa48("17329") ? key : (stryCov_9fa48("17329", "17330", "17331"), !key)) {
          if (stryMutAct_9fa48("17332")) {
            {}
          } else {
            stryCov_9fa48("17332");
            return;
          }
        }
        await module.client.ltrim(key, start, stop);
      }
    };
    module.getListRange = async function (key, start, stop) {
      if (stryMutAct_9fa48("17333")) {
        {}
      } else {
        stryCov_9fa48("17333");
        if (stryMutAct_9fa48("17336") ? false : stryMutAct_9fa48("17335") ? true : stryMutAct_9fa48("17334") ? key : (stryCov_9fa48("17334", "17335", "17336"), !key)) {
          if (stryMutAct_9fa48("17337")) {
            {}
          } else {
            stryCov_9fa48("17337");
            return;
          }
        }
        return await module.client.lrange(key, start, stop);
      }
    };
    module.listLength = async function (key) {
      if (stryMutAct_9fa48("17338")) {
        {}
      } else {
        stryCov_9fa48("17338");
        return await module.client.llen(key);
      }
    };
  }
};