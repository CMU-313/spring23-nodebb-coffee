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
  if (stryMutAct_9fa48("16091")) {
    {}
  } else {
    stryCov_9fa48("16091");
    module.sortedSetIntersectCard = async function (keys) {
      if (stryMutAct_9fa48("16092")) {
        {}
      } else {
        stryCov_9fa48("16092");
        if (stryMutAct_9fa48("16095") ? !Array.isArray(keys) && !keys.length : stryMutAct_9fa48("16094") ? false : stryMutAct_9fa48("16093") ? true : (stryCov_9fa48("16093", "16094", "16095"), (stryMutAct_9fa48("16096") ? Array.isArray(keys) : (stryCov_9fa48("16096"), !Array.isArray(keys))) || (stryMutAct_9fa48("16097") ? keys.length : (stryCov_9fa48("16097"), !keys.length)))) {
          if (stryMutAct_9fa48("16098")) {
            {}
          } else {
            stryCov_9fa48("16098");
            return 0;
          }
        }
        const res = await module.pool.query(stryMutAct_9fa48("16099") ? {} : (stryCov_9fa48("16099"), {
          name: stryMutAct_9fa48("16100") ? "" : (stryCov_9fa48("16100"), 'sortedSetIntersectCard'),
          text: stryMutAct_9fa48("16101") ? `` : (stryCov_9fa48("16101"), `
WITH A AS (SELECT z."value" v,
                  COUNT(*) c
             FROM "legacy_object_live" o
            INNER JOIN "legacy_zset" z
                    ON o."_key" = z."_key"
                   AND o."type" = z."type"
            WHERE o."_key" = ANY($1::TEXT[])
            GROUP BY z."value")
SELECT COUNT(*) c
  FROM A
 WHERE A.c = array_length($1::TEXT[], 1)`),
          values: stryMutAct_9fa48("16102") ? [] : (stryCov_9fa48("16102"), [keys])
        }));
        return parseInt(res.rows[0].c, 10);
      }
    };
    module.getSortedSetIntersect = async function (params) {
      if (stryMutAct_9fa48("16103")) {
        {}
      } else {
        stryCov_9fa48("16103");
        params.sort = 1;
        return await getSortedSetIntersect(params);
      }
    };
    module.getSortedSetRevIntersect = async function (params) {
      if (stryMutAct_9fa48("16104")) {
        {}
      } else {
        stryCov_9fa48("16104");
        params.sort = stryMutAct_9fa48("16105") ? +1 : (stryCov_9fa48("16105"), -1);
        return await getSortedSetIntersect(params);
      }
    };
    async function getSortedSetIntersect(params) {
      if (stryMutAct_9fa48("16106")) {
        {}
      } else {
        stryCov_9fa48("16106");
        const {
          sets
        } = params;
        const start = params.hasOwnProperty(stryMutAct_9fa48("16107") ? "" : (stryCov_9fa48("16107"), 'start')) ? params.start : 0;
        const stop = params.hasOwnProperty(stryMutAct_9fa48("16108") ? "" : (stryCov_9fa48("16108"), 'stop')) ? params.stop : stryMutAct_9fa48("16109") ? +1 : (stryCov_9fa48("16109"), -1);
        let weights = stryMutAct_9fa48("16112") ? params.weights && [] : stryMutAct_9fa48("16111") ? false : stryMutAct_9fa48("16110") ? true : (stryCov_9fa48("16110", "16111", "16112"), params.weights || (stryMutAct_9fa48("16113") ? ["Stryker was here"] : (stryCov_9fa48("16113"), [])));
        const aggregate = stryMutAct_9fa48("16116") ? params.aggregate && 'SUM' : stryMutAct_9fa48("16115") ? false : stryMutAct_9fa48("16114") ? true : (stryCov_9fa48("16114", "16115", "16116"), params.aggregate || (stryMutAct_9fa48("16117") ? "" : (stryCov_9fa48("16117"), 'SUM')));
        if (stryMutAct_9fa48("16121") ? sets.length >= weights.length : stryMutAct_9fa48("16120") ? sets.length <= weights.length : stryMutAct_9fa48("16119") ? false : stryMutAct_9fa48("16118") ? true : (stryCov_9fa48("16118", "16119", "16120", "16121"), sets.length < weights.length)) {
          if (stryMutAct_9fa48("16122")) {
            {}
          } else {
            stryCov_9fa48("16122");
            weights = stryMutAct_9fa48("16123") ? weights : (stryCov_9fa48("16123"), weights.slice(0, sets.length));
          }
        }
        while (stryMutAct_9fa48("16126") ? sets.length <= weights.length : stryMutAct_9fa48("16125") ? sets.length >= weights.length : stryMutAct_9fa48("16124") ? false : (stryCov_9fa48("16124", "16125", "16126"), sets.length > weights.length)) {
          if (stryMutAct_9fa48("16127")) {
            {}
          } else {
            stryCov_9fa48("16127");
            weights.push(1);
          }
        }
        let limit = stryMutAct_9fa48("16128") ? stop - start - 1 : (stryCov_9fa48("16128"), (stryMutAct_9fa48("16129") ? stop + start : (stryCov_9fa48("16129"), stop - start)) + 1);
        if (stryMutAct_9fa48("16133") ? limit > 0 : stryMutAct_9fa48("16132") ? limit < 0 : stryMutAct_9fa48("16131") ? false : stryMutAct_9fa48("16130") ? true : (stryCov_9fa48("16130", "16131", "16132", "16133"), limit <= 0)) {
          if (stryMutAct_9fa48("16134")) {
            {}
          } else {
            stryCov_9fa48("16134");
            limit = null;
          }
        }
        const res = await module.pool.query(stryMutAct_9fa48("16135") ? {} : (stryCov_9fa48("16135"), {
          name: stryMutAct_9fa48("16136") ? `` : (stryCov_9fa48("16136"), `getSortedSetIntersect${aggregate}${(stryMutAct_9fa48("16140") ? params.sort <= 0 : stryMutAct_9fa48("16139") ? params.sort >= 0 : stryMutAct_9fa48("16138") ? false : stryMutAct_9fa48("16137") ? true : (stryCov_9fa48("16137", "16138", "16139", "16140"), params.sort > 0)) ? stryMutAct_9fa48("16141") ? "" : (stryCov_9fa48("16141"), 'Asc') : stryMutAct_9fa48("16142") ? "" : (stryCov_9fa48("16142"), 'Desc')}WithScores`),
          text: stryMutAct_9fa48("16143") ? `` : (stryCov_9fa48("16143"), `
WITH A AS (SELECT z."value",
                  ${aggregate}(z."score" * k."weight") "score",
                  COUNT(*) c
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
 WHERE c = array_length($1::TEXT[], 1)
 ORDER BY A."score" ${(stryMutAct_9fa48("16147") ? params.sort <= 0 : stryMutAct_9fa48("16146") ? params.sort >= 0 : stryMutAct_9fa48("16145") ? false : stryMutAct_9fa48("16144") ? true : (stryCov_9fa48("16144", "16145", "16146", "16147"), params.sort > 0)) ? stryMutAct_9fa48("16148") ? "" : (stryCov_9fa48("16148"), 'ASC') : stryMutAct_9fa48("16149") ? "" : (stryCov_9fa48("16149"), 'DESC')}
 LIMIT $4::INTEGER
OFFSET $3::INTEGER`),
          values: stryMutAct_9fa48("16150") ? [] : (stryCov_9fa48("16150"), [sets, weights, start, limit])
        }));
        if (stryMutAct_9fa48("16152") ? false : stryMutAct_9fa48("16151") ? true : (stryCov_9fa48("16151", "16152"), params.withScores)) {
          if (stryMutAct_9fa48("16153")) {
            {}
          } else {
            stryCov_9fa48("16153");
            res.rows = res.rows.map(stryMutAct_9fa48("16154") ? () => undefined : (stryCov_9fa48("16154"), r => stryMutAct_9fa48("16155") ? {} : (stryCov_9fa48("16155"), {
              value: r.value,
              score: parseFloat(r.score)
            })));
          }
        } else {
          if (stryMutAct_9fa48("16156")) {
            {}
          } else {
            stryCov_9fa48("16156");
            res.rows = res.rows.map(stryMutAct_9fa48("16157") ? () => undefined : (stryCov_9fa48("16157"), r => r.value));
          }
        }
        return res.rows;
      }
    }
  }
};