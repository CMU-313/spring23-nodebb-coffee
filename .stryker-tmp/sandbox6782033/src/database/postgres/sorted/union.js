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
  if (stryMutAct_9fa48("16231")) {
    {}
  } else {
    stryCov_9fa48("16231");
    module.sortedSetUnionCard = async function (keys) {
      if (stryMutAct_9fa48("16232")) {
        {}
      } else {
        stryCov_9fa48("16232");
        if (stryMutAct_9fa48("16235") ? !Array.isArray(keys) && !keys.length : stryMutAct_9fa48("16234") ? false : stryMutAct_9fa48("16233") ? true : (stryCov_9fa48("16233", "16234", "16235"), (stryMutAct_9fa48("16236") ? Array.isArray(keys) : (stryCov_9fa48("16236"), !Array.isArray(keys))) || (stryMutAct_9fa48("16237") ? keys.length : (stryCov_9fa48("16237"), !keys.length)))) {
          if (stryMutAct_9fa48("16238")) {
            {}
          } else {
            stryCov_9fa48("16238");
            return 0;
          }
        }
        const res = await module.pool.query(stryMutAct_9fa48("16239") ? {} : (stryCov_9fa48("16239"), {
          name: stryMutAct_9fa48("16240") ? "" : (stryCov_9fa48("16240"), 'sortedSetUnionCard'),
          text: stryMutAct_9fa48("16241") ? `` : (stryCov_9fa48("16241"), `
SELECT COUNT(DISTINCT z."value") c
  FROM "legacy_object_live" o
 INNER JOIN "legacy_zset" z
         ON o."_key" = z."_key"
        AND o."type" = z."type"
 WHERE o."_key" = ANY($1::TEXT[])`),
          values: stryMutAct_9fa48("16242") ? [] : (stryCov_9fa48("16242"), [keys])
        }));
        return res.rows[0].c;
      }
    };
    module.getSortedSetUnion = async function (params) {
      if (stryMutAct_9fa48("16243")) {
        {}
      } else {
        stryCov_9fa48("16243");
        params.sort = 1;
        return await getSortedSetUnion(params);
      }
    };
    module.getSortedSetRevUnion = async function (params) {
      if (stryMutAct_9fa48("16244")) {
        {}
      } else {
        stryCov_9fa48("16244");
        params.sort = stryMutAct_9fa48("16245") ? +1 : (stryCov_9fa48("16245"), -1);
        return await getSortedSetUnion(params);
      }
    };
    async function getSortedSetUnion(params) {
      if (stryMutAct_9fa48("16246")) {
        {}
      } else {
        stryCov_9fa48("16246");
        const {
          sets
        } = params;
        const start = params.hasOwnProperty(stryMutAct_9fa48("16247") ? "" : (stryCov_9fa48("16247"), 'start')) ? params.start : 0;
        const stop = params.hasOwnProperty(stryMutAct_9fa48("16248") ? "" : (stryCov_9fa48("16248"), 'stop')) ? params.stop : stryMutAct_9fa48("16249") ? +1 : (stryCov_9fa48("16249"), -1);
        let weights = stryMutAct_9fa48("16252") ? params.weights && [] : stryMutAct_9fa48("16251") ? false : stryMutAct_9fa48("16250") ? true : (stryCov_9fa48("16250", "16251", "16252"), params.weights || (stryMutAct_9fa48("16253") ? ["Stryker was here"] : (stryCov_9fa48("16253"), [])));
        const aggregate = stryMutAct_9fa48("16256") ? params.aggregate && 'SUM' : stryMutAct_9fa48("16255") ? false : stryMutAct_9fa48("16254") ? true : (stryCov_9fa48("16254", "16255", "16256"), params.aggregate || (stryMutAct_9fa48("16257") ? "" : (stryCov_9fa48("16257"), 'SUM')));
        if (stryMutAct_9fa48("16261") ? sets.length >= weights.length : stryMutAct_9fa48("16260") ? sets.length <= weights.length : stryMutAct_9fa48("16259") ? false : stryMutAct_9fa48("16258") ? true : (stryCov_9fa48("16258", "16259", "16260", "16261"), sets.length < weights.length)) {
          if (stryMutAct_9fa48("16262")) {
            {}
          } else {
            stryCov_9fa48("16262");
            weights = stryMutAct_9fa48("16263") ? weights : (stryCov_9fa48("16263"), weights.slice(0, sets.length));
          }
        }
        while (stryMutAct_9fa48("16266") ? sets.length <= weights.length : stryMutAct_9fa48("16265") ? sets.length >= weights.length : stryMutAct_9fa48("16264") ? false : (stryCov_9fa48("16264", "16265", "16266"), sets.length > weights.length)) {
          if (stryMutAct_9fa48("16267")) {
            {}
          } else {
            stryCov_9fa48("16267");
            weights.push(1);
          }
        }
        let limit = stryMutAct_9fa48("16268") ? stop - start - 1 : (stryCov_9fa48("16268"), (stryMutAct_9fa48("16269") ? stop + start : (stryCov_9fa48("16269"), stop - start)) + 1);
        if (stryMutAct_9fa48("16273") ? limit > 0 : stryMutAct_9fa48("16272") ? limit < 0 : stryMutAct_9fa48("16271") ? false : stryMutAct_9fa48("16270") ? true : (stryCov_9fa48("16270", "16271", "16272", "16273"), limit <= 0)) {
          if (stryMutAct_9fa48("16274")) {
            {}
          } else {
            stryCov_9fa48("16274");
            limit = null;
          }
        }
        const res = await module.pool.query(stryMutAct_9fa48("16275") ? {} : (stryCov_9fa48("16275"), {
          name: stryMutAct_9fa48("16276") ? `` : (stryCov_9fa48("16276"), `getSortedSetUnion${aggregate}${(stryMutAct_9fa48("16280") ? params.sort <= 0 : stryMutAct_9fa48("16279") ? params.sort >= 0 : stryMutAct_9fa48("16278") ? false : stryMutAct_9fa48("16277") ? true : (stryCov_9fa48("16277", "16278", "16279", "16280"), params.sort > 0)) ? stryMutAct_9fa48("16281") ? "" : (stryCov_9fa48("16281"), 'Asc') : stryMutAct_9fa48("16282") ? "" : (stryCov_9fa48("16282"), 'Desc')}WithScores`),
          text: stryMutAct_9fa48("16283") ? `` : (stryCov_9fa48("16283"), `
WITH A AS (SELECT z."value",
                  ${aggregate}(z."score" * k."weight") "score"
             FROM UNNEST($1::TEXT[], $2::NUMERIC[]) k("_key", "weight")
            INNER JOIN "legacy_object_live" o
                    ON o."_key" = k."_key"
            INNER JOIN "legacy_zset" z
                    ON o."_key" = z."_key"
                   AND o."type" = z."type"
            GROUP BY z."value")
SELECT A."value",
       A."score"
  FROM A
 ORDER BY A."score" ${(stryMutAct_9fa48("16287") ? params.sort <= 0 : stryMutAct_9fa48("16286") ? params.sort >= 0 : stryMutAct_9fa48("16285") ? false : stryMutAct_9fa48("16284") ? true : (stryCov_9fa48("16284", "16285", "16286", "16287"), params.sort > 0)) ? stryMutAct_9fa48("16288") ? "" : (stryCov_9fa48("16288"), 'ASC') : stryMutAct_9fa48("16289") ? "" : (stryCov_9fa48("16289"), 'DESC')}
 LIMIT $4::INTEGER
OFFSET $3::INTEGER`),
          values: stryMutAct_9fa48("16290") ? [] : (stryCov_9fa48("16290"), [sets, weights, start, limit])
        }));
        if (stryMutAct_9fa48("16292") ? false : stryMutAct_9fa48("16291") ? true : (stryCov_9fa48("16291", "16292"), params.withScores)) {
          if (stryMutAct_9fa48("16293")) {
            {}
          } else {
            stryCov_9fa48("16293");
            res.rows = res.rows.map(stryMutAct_9fa48("16294") ? () => undefined : (stryCov_9fa48("16294"), r => stryMutAct_9fa48("16295") ? {} : (stryCov_9fa48("16295"), {
              value: r.value,
              score: parseFloat(r.score)
            })));
          }
        } else {
          if (stryMutAct_9fa48("16296")) {
            {}
          } else {
            stryCov_9fa48("16296");
            res.rows = res.rows.map(stryMutAct_9fa48("16297") ? () => undefined : (stryCov_9fa48("16297"), r => r.value));
          }
        }
        return res.rows;
      }
    }
  }
};