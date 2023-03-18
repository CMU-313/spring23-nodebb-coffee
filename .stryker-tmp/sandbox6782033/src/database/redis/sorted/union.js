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
  if (stryMutAct_9fa48("17656")) {
    {}
  } else {
    stryCov_9fa48("17656");
    const helpers = require('../helpers');
    module.sortedSetUnionCard = async function (keys) {
      if (stryMutAct_9fa48("17657")) {
        {}
      } else {
        stryCov_9fa48("17657");
        const tempSetName = stryMutAct_9fa48("17658") ? `` : (stryCov_9fa48("17658"), `temp_${Date.now()}`);
        if (stryMutAct_9fa48("17661") ? false : stryMutAct_9fa48("17660") ? true : stryMutAct_9fa48("17659") ? keys.length : (stryCov_9fa48("17659", "17660", "17661"), !keys.length)) {
          if (stryMutAct_9fa48("17662")) {
            {}
          } else {
            stryCov_9fa48("17662");
            return 0;
          }
        }
        const multi = module.client.multi();
        multi.zunionstore((stryMutAct_9fa48("17663") ? [] : (stryCov_9fa48("17663"), [tempSetName, keys.length])).concat(keys));
        multi.zcard(tempSetName);
        multi.del(tempSetName);
        const results = await helpers.execBatch(multi);
        return (stryMutAct_9fa48("17666") ? Array.isArray(results) || results.length : stryMutAct_9fa48("17665") ? false : stryMutAct_9fa48("17664") ? true : (stryCov_9fa48("17664", "17665", "17666"), Array.isArray(results) && results.length)) ? results[1] : 0;
      }
    };
    module.getSortedSetUnion = async function (params) {
      if (stryMutAct_9fa48("17667")) {
        {}
      } else {
        stryCov_9fa48("17667");
        params.method = stryMutAct_9fa48("17668") ? "" : (stryCov_9fa48("17668"), 'zrange');
        return await module.sortedSetUnion(params);
      }
    };
    module.getSortedSetRevUnion = async function (params) {
      if (stryMutAct_9fa48("17669")) {
        {}
      } else {
        stryCov_9fa48("17669");
        params.method = stryMutAct_9fa48("17670") ? "" : (stryCov_9fa48("17670"), 'zrevrange');
        return await module.sortedSetUnion(params);
      }
    };
    module.sortedSetUnion = async function (params) {
      if (stryMutAct_9fa48("17671")) {
        {}
      } else {
        stryCov_9fa48("17671");
        if (stryMutAct_9fa48("17674") ? false : stryMutAct_9fa48("17673") ? true : stryMutAct_9fa48("17672") ? params.sets.length : (stryCov_9fa48("17672", "17673", "17674"), !params.sets.length)) {
          if (stryMutAct_9fa48("17675")) {
            {}
          } else {
            stryCov_9fa48("17675");
            return stryMutAct_9fa48("17676") ? ["Stryker was here"] : (stryCov_9fa48("17676"), []);
          }
        }
        const tempSetName = stryMutAct_9fa48("17677") ? `` : (stryCov_9fa48("17677"), `temp_${Date.now()}`);
        const rangeParams = stryMutAct_9fa48("17678") ? [] : (stryCov_9fa48("17678"), [tempSetName, params.start, params.stop]);
        if (stryMutAct_9fa48("17680") ? false : stryMutAct_9fa48("17679") ? true : (stryCov_9fa48("17679", "17680"), params.withScores)) {
          if (stryMutAct_9fa48("17681")) {
            {}
          } else {
            stryCov_9fa48("17681");
            rangeParams.push(stryMutAct_9fa48("17682") ? "" : (stryCov_9fa48("17682"), 'WITHSCORES'));
          }
        }
        const multi = module.client.multi();
        multi.zunionstore((stryMutAct_9fa48("17683") ? [] : (stryCov_9fa48("17683"), [tempSetName, params.sets.length])).concat(params.sets));
        multi[params.method](rangeParams);
        multi.del(tempSetName);
        let results = await helpers.execBatch(multi);
        if (stryMutAct_9fa48("17686") ? false : stryMutAct_9fa48("17685") ? true : stryMutAct_9fa48("17684") ? params.withScores : (stryCov_9fa48("17684", "17685", "17686"), !params.withScores)) {
          if (stryMutAct_9fa48("17687")) {
            {}
          } else {
            stryCov_9fa48("17687");
            return results ? results[1] : null;
          }
        }
        results = stryMutAct_9fa48("17690") ? results[1] && [] : stryMutAct_9fa48("17689") ? false : stryMutAct_9fa48("17688") ? true : (stryCov_9fa48("17688", "17689", "17690"), results[1] || (stryMutAct_9fa48("17691") ? ["Stryker was here"] : (stryCov_9fa48("17691"), [])));
        return helpers.zsetToObjectArray(results);
      }
    };
  }
};