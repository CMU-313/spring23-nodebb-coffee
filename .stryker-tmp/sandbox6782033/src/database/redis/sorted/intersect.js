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
  if (stryMutAct_9fa48("17571")) {
    {}
  } else {
    stryCov_9fa48("17571");
    const helpers = require('../helpers');
    module.sortedSetIntersectCard = async function (keys) {
      if (stryMutAct_9fa48("17572")) {
        {}
      } else {
        stryCov_9fa48("17572");
        if (stryMutAct_9fa48("17575") ? !Array.isArray(keys) && !keys.length : stryMutAct_9fa48("17574") ? false : stryMutAct_9fa48("17573") ? true : (stryCov_9fa48("17573", "17574", "17575"), (stryMutAct_9fa48("17576") ? Array.isArray(keys) : (stryCov_9fa48("17576"), !Array.isArray(keys))) || (stryMutAct_9fa48("17577") ? keys.length : (stryCov_9fa48("17577"), !keys.length)))) {
          if (stryMutAct_9fa48("17578")) {
            {}
          } else {
            stryCov_9fa48("17578");
            return 0;
          }
        }
        const tempSetName = stryMutAct_9fa48("17579") ? `` : (stryCov_9fa48("17579"), `temp_${Date.now()}`);
        const interParams = (stryMutAct_9fa48("17580") ? [] : (stryCov_9fa48("17580"), [tempSetName, keys.length])).concat(keys);
        const multi = module.client.multi();
        multi.zinterstore(interParams);
        multi.zcard(tempSetName);
        multi.del(tempSetName);
        const results = await helpers.execBatch(multi);
        return stryMutAct_9fa48("17583") ? results[1] && 0 : stryMutAct_9fa48("17582") ? false : stryMutAct_9fa48("17581") ? true : (stryCov_9fa48("17581", "17582", "17583"), results[1] || 0);
      }
    };
    module.getSortedSetIntersect = async function (params) {
      if (stryMutAct_9fa48("17584")) {
        {}
      } else {
        stryCov_9fa48("17584");
        params.method = stryMutAct_9fa48("17585") ? "" : (stryCov_9fa48("17585"), 'zrange');
        return await getSortedSetRevIntersect(params);
      }
    };
    module.getSortedSetRevIntersect = async function (params) {
      if (stryMutAct_9fa48("17586")) {
        {}
      } else {
        stryCov_9fa48("17586");
        params.method = stryMutAct_9fa48("17587") ? "" : (stryCov_9fa48("17587"), 'zrevrange');
        return await getSortedSetRevIntersect(params);
      }
    };
    async function getSortedSetRevIntersect(params) {
      if (stryMutAct_9fa48("17588")) {
        {}
      } else {
        stryCov_9fa48("17588");
        const {
          sets
        } = params;
        const start = params.hasOwnProperty(stryMutAct_9fa48("17589") ? "" : (stryCov_9fa48("17589"), 'start')) ? params.start : 0;
        const stop = params.hasOwnProperty(stryMutAct_9fa48("17590") ? "" : (stryCov_9fa48("17590"), 'stop')) ? params.stop : stryMutAct_9fa48("17591") ? +1 : (stryCov_9fa48("17591"), -1);
        const weights = stryMutAct_9fa48("17594") ? params.weights && [] : stryMutAct_9fa48("17593") ? false : stryMutAct_9fa48("17592") ? true : (stryCov_9fa48("17592", "17593", "17594"), params.weights || (stryMutAct_9fa48("17595") ? ["Stryker was here"] : (stryCov_9fa48("17595"), [])));
        const tempSetName = stryMutAct_9fa48("17596") ? `` : (stryCov_9fa48("17596"), `temp_${Date.now()}`);
        let interParams = (stryMutAct_9fa48("17597") ? [] : (stryCov_9fa48("17597"), [tempSetName, sets.length])).concat(sets);
        if (stryMutAct_9fa48("17599") ? false : stryMutAct_9fa48("17598") ? true : (stryCov_9fa48("17598", "17599"), weights.length)) {
          if (stryMutAct_9fa48("17600")) {
            {}
          } else {
            stryCov_9fa48("17600");
            interParams = interParams.concat((stryMutAct_9fa48("17601") ? [] : (stryCov_9fa48("17601"), [stryMutAct_9fa48("17602") ? "" : (stryCov_9fa48("17602"), 'WEIGHTS')])).concat(weights));
          }
        }
        if (stryMutAct_9fa48("17604") ? false : stryMutAct_9fa48("17603") ? true : (stryCov_9fa48("17603", "17604"), params.aggregate)) {
          if (stryMutAct_9fa48("17605")) {
            {}
          } else {
            stryCov_9fa48("17605");
            interParams = interParams.concat(stryMutAct_9fa48("17606") ? [] : (stryCov_9fa48("17606"), [stryMutAct_9fa48("17607") ? "" : (stryCov_9fa48("17607"), 'AGGREGATE'), params.aggregate]));
          }
        }
        const rangeParams = stryMutAct_9fa48("17608") ? [] : (stryCov_9fa48("17608"), [tempSetName, start, stop]);
        if (stryMutAct_9fa48("17610") ? false : stryMutAct_9fa48("17609") ? true : (stryCov_9fa48("17609", "17610"), params.withScores)) {
          if (stryMutAct_9fa48("17611")) {
            {}
          } else {
            stryCov_9fa48("17611");
            rangeParams.push(stryMutAct_9fa48("17612") ? "" : (stryCov_9fa48("17612"), 'WITHSCORES'));
          }
        }
        const multi = module.client.multi();
        multi.zinterstore(interParams);
        multi[params.method](rangeParams);
        multi.del(tempSetName);
        let results = await helpers.execBatch(multi);
        if (stryMutAct_9fa48("17615") ? false : stryMutAct_9fa48("17614") ? true : stryMutAct_9fa48("17613") ? params.withScores : (stryCov_9fa48("17613", "17614", "17615"), !params.withScores)) {
          if (stryMutAct_9fa48("17616")) {
            {}
          } else {
            stryCov_9fa48("17616");
            return results ? results[1] : null;
          }
        }
        results = stryMutAct_9fa48("17619") ? results[1] && [] : stryMutAct_9fa48("17618") ? false : stryMutAct_9fa48("17617") ? true : (stryCov_9fa48("17617", "17618", "17619"), results[1] || (stryMutAct_9fa48("17620") ? ["Stryker was here"] : (stryCov_9fa48("17620"), [])));
        return helpers.zsetToObjectArray(results);
      }
    }
  }
};