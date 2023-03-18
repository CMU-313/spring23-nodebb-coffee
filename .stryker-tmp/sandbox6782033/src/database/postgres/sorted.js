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
  if (stryMutAct_9fa48("16298")) {
    {}
  } else {
    stryCov_9fa48("16298");
    const helpers = require('./helpers');
    const util = require('util');
    const Cursor = require('pg-cursor');
    Cursor.prototype.readAsync = util.promisify(Cursor.prototype.read);
    const sleep = util.promisify(setTimeout);
    require('./sorted/add')(module);
    require('./sorted/remove')(module);
    require('./sorted/union')(module);
    require('./sorted/intersect')(module);
    module.getSortedSetRange = async function (key, start, stop) {
      if (stryMutAct_9fa48("16299")) {
        {}
      } else {
        stryCov_9fa48("16299");
        return await getSortedSetRange(key, start, stop, 1, stryMutAct_9fa48("16300") ? true : (stryCov_9fa48("16300"), false));
      }
    };
    module.getSortedSetRevRange = async function (key, start, stop) {
      if (stryMutAct_9fa48("16301")) {
        {}
      } else {
        stryCov_9fa48("16301");
        return await getSortedSetRange(key, start, stop, stryMutAct_9fa48("16302") ? +1 : (stryCov_9fa48("16302"), -1), stryMutAct_9fa48("16303") ? true : (stryCov_9fa48("16303"), false));
      }
    };
    module.getSortedSetRangeWithScores = async function (key, start, stop) {
      if (stryMutAct_9fa48("16304")) {
        {}
      } else {
        stryCov_9fa48("16304");
        return await getSortedSetRange(key, start, stop, 1, stryMutAct_9fa48("16305") ? false : (stryCov_9fa48("16305"), true));
      }
    };
    module.getSortedSetRevRangeWithScores = async function (key, start, stop) {
      if (stryMutAct_9fa48("16306")) {
        {}
      } else {
        stryCov_9fa48("16306");
        return await getSortedSetRange(key, start, stop, stryMutAct_9fa48("16307") ? +1 : (stryCov_9fa48("16307"), -1), stryMutAct_9fa48("16308") ? false : (stryCov_9fa48("16308"), true));
      }
    };
    async function getSortedSetRange(key, start, stop, sort, withScores) {
      if (stryMutAct_9fa48("16309")) {
        {}
      } else {
        stryCov_9fa48("16309");
        if (stryMutAct_9fa48("16312") ? false : stryMutAct_9fa48("16311") ? true : stryMutAct_9fa48("16310") ? key : (stryCov_9fa48("16310", "16311", "16312"), !key)) {
          if (stryMutAct_9fa48("16313")) {
            {}
          } else {
            stryCov_9fa48("16313");
            return;
          }
        }
        if (stryMutAct_9fa48("16316") ? false : stryMutAct_9fa48("16315") ? true : stryMutAct_9fa48("16314") ? Array.isArray(key) : (stryCov_9fa48("16314", "16315", "16316"), !Array.isArray(key))) {
          if (stryMutAct_9fa48("16317")) {
            {}
          } else {
            stryCov_9fa48("16317");
            key = stryMutAct_9fa48("16318") ? [] : (stryCov_9fa48("16318"), [key]);
          }
        }
        if (stryMutAct_9fa48("16321") ? start < 0 || start > stop : stryMutAct_9fa48("16320") ? false : stryMutAct_9fa48("16319") ? true : (stryCov_9fa48("16319", "16320", "16321"), (stryMutAct_9fa48("16324") ? start >= 0 : stryMutAct_9fa48("16323") ? start <= 0 : stryMutAct_9fa48("16322") ? true : (stryCov_9fa48("16322", "16323", "16324"), start < 0)) && (stryMutAct_9fa48("16327") ? start <= stop : stryMutAct_9fa48("16326") ? start >= stop : stryMutAct_9fa48("16325") ? true : (stryCov_9fa48("16325", "16326", "16327"), start > stop)))) {
          if (stryMutAct_9fa48("16328")) {
            {}
          } else {
            stryCov_9fa48("16328");
            return stryMutAct_9fa48("16329") ? ["Stryker was here"] : (stryCov_9fa48("16329"), []);
          }
        }
        let reverse = stryMutAct_9fa48("16330") ? true : (stryCov_9fa48("16330"), false);
        if (stryMutAct_9fa48("16333") ? start === 0 || stop < -1 : stryMutAct_9fa48("16332") ? false : stryMutAct_9fa48("16331") ? true : (stryCov_9fa48("16331", "16332", "16333"), (stryMutAct_9fa48("16335") ? start !== 0 : stryMutAct_9fa48("16334") ? true : (stryCov_9fa48("16334", "16335"), start === 0)) && (stryMutAct_9fa48("16338") ? stop >= -1 : stryMutAct_9fa48("16337") ? stop <= -1 : stryMutAct_9fa48("16336") ? true : (stryCov_9fa48("16336", "16337", "16338"), stop < (stryMutAct_9fa48("16339") ? +1 : (stryCov_9fa48("16339"), -1)))))) {
          if (stryMutAct_9fa48("16340")) {
            {}
          } else {
            stryCov_9fa48("16340");
            reverse = stryMutAct_9fa48("16341") ? false : (stryCov_9fa48("16341"), true);
            stryMutAct_9fa48("16342") ? sort /= -1 : (stryCov_9fa48("16342"), sort *= stryMutAct_9fa48("16343") ? +1 : (stryCov_9fa48("16343"), -1));
            start = Math.abs(stryMutAct_9fa48("16344") ? stop - 1 : (stryCov_9fa48("16344"), stop + 1));
            stop = stryMutAct_9fa48("16345") ? +1 : (stryCov_9fa48("16345"), -1);
          }
        } else if (stryMutAct_9fa48("16348") ? start < 0 || stop > start : stryMutAct_9fa48("16347") ? false : stryMutAct_9fa48("16346") ? true : (stryCov_9fa48("16346", "16347", "16348"), (stryMutAct_9fa48("16351") ? start >= 0 : stryMutAct_9fa48("16350") ? start <= 0 : stryMutAct_9fa48("16349") ? true : (stryCov_9fa48("16349", "16350", "16351"), start < 0)) && (stryMutAct_9fa48("16354") ? stop <= start : stryMutAct_9fa48("16353") ? stop >= start : stryMutAct_9fa48("16352") ? true : (stryCov_9fa48("16352", "16353", "16354"), stop > start)))) {
          if (stryMutAct_9fa48("16355")) {
            {}
          } else {
            stryCov_9fa48("16355");
            const tmp1 = Math.abs(stryMutAct_9fa48("16356") ? stop - 1 : (stryCov_9fa48("16356"), stop + 1));
            stop = Math.abs(stryMutAct_9fa48("16357") ? start - 1 : (stryCov_9fa48("16357"), start + 1));
            start = tmp1;
          }
        }
        let limit = stryMutAct_9fa48("16358") ? stop - start - 1 : (stryCov_9fa48("16358"), (stryMutAct_9fa48("16359") ? stop + start : (stryCov_9fa48("16359"), stop - start)) + 1);
        if (stryMutAct_9fa48("16363") ? limit > 0 : stryMutAct_9fa48("16362") ? limit < 0 : stryMutAct_9fa48("16361") ? false : stryMutAct_9fa48("16360") ? true : (stryCov_9fa48("16360", "16361", "16362", "16363"), limit <= 0)) {
          if (stryMutAct_9fa48("16364")) {
            {}
          } else {
            stryCov_9fa48("16364");
            limit = null;
          }
        }
        const res = await module.pool.query(stryMutAct_9fa48("16365") ? {} : (stryCov_9fa48("16365"), {
          name: stryMutAct_9fa48("16366") ? `` : (stryCov_9fa48("16366"), `getSortedSetRangeWithScores${(stryMutAct_9fa48("16370") ? sort <= 0 : stryMutAct_9fa48("16369") ? sort >= 0 : stryMutAct_9fa48("16368") ? false : stryMutAct_9fa48("16367") ? true : (stryCov_9fa48("16367", "16368", "16369", "16370"), sort > 0)) ? stryMutAct_9fa48("16371") ? "" : (stryCov_9fa48("16371"), 'Asc') : stryMutAct_9fa48("16372") ? "" : (stryCov_9fa48("16372"), 'Desc')}`),
          text: stryMutAct_9fa48("16373") ? `` : (stryCov_9fa48("16373"), `
SELECT z."value",
       z."score"
  FROM "legacy_object_live" o
 INNER JOIN "legacy_zset" z
         ON o."_key" = z."_key"
        AND o."type" = z."type"
 WHERE o."_key" = ANY($1::TEXT[])
 ORDER BY z."score" ${(stryMutAct_9fa48("16377") ? sort <= 0 : stryMutAct_9fa48("16376") ? sort >= 0 : stryMutAct_9fa48("16375") ? false : stryMutAct_9fa48("16374") ? true : (stryCov_9fa48("16374", "16375", "16376", "16377"), sort > 0)) ? stryMutAct_9fa48("16378") ? "" : (stryCov_9fa48("16378"), 'ASC') : stryMutAct_9fa48("16379") ? "" : (stryCov_9fa48("16379"), 'DESC')}
 LIMIT $3::INTEGER
OFFSET $2::INTEGER`),
          values: stryMutAct_9fa48("16380") ? [] : (stryCov_9fa48("16380"), [key, start, limit])
        }));
        if (stryMutAct_9fa48("16382") ? false : stryMutAct_9fa48("16381") ? true : (stryCov_9fa48("16381", "16382"), reverse)) {
          if (stryMutAct_9fa48("16383")) {
            {}
          } else {
            stryCov_9fa48("16383");
            stryMutAct_9fa48("16384") ? res.rows : (stryCov_9fa48("16384"), res.rows.reverse());
          }
        }
        if (stryMutAct_9fa48("16386") ? false : stryMutAct_9fa48("16385") ? true : (stryCov_9fa48("16385", "16386"), withScores)) {
          if (stryMutAct_9fa48("16387")) {
            {}
          } else {
            stryCov_9fa48("16387");
            res.rows = res.rows.map(stryMutAct_9fa48("16388") ? () => undefined : (stryCov_9fa48("16388"), r => stryMutAct_9fa48("16389") ? {} : (stryCov_9fa48("16389"), {
              value: r.value,
              score: parseFloat(r.score)
            })));
          }
        } else {
          if (stryMutAct_9fa48("16390")) {
            {}
          } else {
            stryCov_9fa48("16390");
            res.rows = res.rows.map(stryMutAct_9fa48("16391") ? () => undefined : (stryCov_9fa48("16391"), r => r.value));
          }
        }
        return res.rows;
      }
    }
    module.getSortedSetRangeByScore = async function (key, start, count, min, max) {
      if (stryMutAct_9fa48("16392")) {
        {}
      } else {
        stryCov_9fa48("16392");
        return await getSortedSetRangeByScore(key, start, count, min, max, 1, stryMutAct_9fa48("16393") ? true : (stryCov_9fa48("16393"), false));
      }
    };
    module.getSortedSetRevRangeByScore = async function (key, start, count, max, min) {
      if (stryMutAct_9fa48("16394")) {
        {}
      } else {
        stryCov_9fa48("16394");
        return await getSortedSetRangeByScore(key, start, count, min, max, stryMutAct_9fa48("16395") ? +1 : (stryCov_9fa48("16395"), -1), stryMutAct_9fa48("16396") ? true : (stryCov_9fa48("16396"), false));
      }
    };
    module.getSortedSetRangeByScoreWithScores = async function (key, start, count, min, max) {
      if (stryMutAct_9fa48("16397")) {
        {}
      } else {
        stryCov_9fa48("16397");
        return await getSortedSetRangeByScore(key, start, count, min, max, 1, stryMutAct_9fa48("16398") ? false : (stryCov_9fa48("16398"), true));
      }
    };
    module.getSortedSetRevRangeByScoreWithScores = async function (key, start, count, max, min) {
      if (stryMutAct_9fa48("16399")) {
        {}
      } else {
        stryCov_9fa48("16399");
        return await getSortedSetRangeByScore(key, start, count, min, max, stryMutAct_9fa48("16400") ? +1 : (stryCov_9fa48("16400"), -1), stryMutAct_9fa48("16401") ? false : (stryCov_9fa48("16401"), true));
      }
    };
    async function getSortedSetRangeByScore(key, start, count, min, max, sort, withScores) {
      if (stryMutAct_9fa48("16402")) {
        {}
      } else {
        stryCov_9fa48("16402");
        if (stryMutAct_9fa48("16405") ? false : stryMutAct_9fa48("16404") ? true : stryMutAct_9fa48("16403") ? key : (stryCov_9fa48("16403", "16404", "16405"), !key)) {
          if (stryMutAct_9fa48("16406")) {
            {}
          } else {
            stryCov_9fa48("16406");
            return;
          }
        }
        if (stryMutAct_9fa48("16409") ? false : stryMutAct_9fa48("16408") ? true : stryMutAct_9fa48("16407") ? Array.isArray(key) : (stryCov_9fa48("16407", "16408", "16409"), !Array.isArray(key))) {
          if (stryMutAct_9fa48("16410")) {
            {}
          } else {
            stryCov_9fa48("16410");
            key = stryMutAct_9fa48("16411") ? [] : (stryCov_9fa48("16411"), [key]);
          }
        }
        if (stryMutAct_9fa48("16414") ? parseInt(count, 10) !== -1 : stryMutAct_9fa48("16413") ? false : stryMutAct_9fa48("16412") ? true : (stryCov_9fa48("16412", "16413", "16414"), parseInt(count, 10) === (stryMutAct_9fa48("16415") ? +1 : (stryCov_9fa48("16415"), -1)))) {
          if (stryMutAct_9fa48("16416")) {
            {}
          } else {
            stryCov_9fa48("16416");
            count = null;
          }
        }
        if (stryMutAct_9fa48("16419") ? min !== '-inf' : stryMutAct_9fa48("16418") ? false : stryMutAct_9fa48("16417") ? true : (stryCov_9fa48("16417", "16418", "16419"), min === (stryMutAct_9fa48("16420") ? "" : (stryCov_9fa48("16420"), '-inf')))) {
          if (stryMutAct_9fa48("16421")) {
            {}
          } else {
            stryCov_9fa48("16421");
            min = null;
          }
        }
        if (stryMutAct_9fa48("16424") ? max !== '+inf' : stryMutAct_9fa48("16423") ? false : stryMutAct_9fa48("16422") ? true : (stryCov_9fa48("16422", "16423", "16424"), max === (stryMutAct_9fa48("16425") ? "" : (stryCov_9fa48("16425"), '+inf')))) {
          if (stryMutAct_9fa48("16426")) {
            {}
          } else {
            stryCov_9fa48("16426");
            max = null;
          }
        }
        const res = await module.pool.query(stryMutAct_9fa48("16427") ? {} : (stryCov_9fa48("16427"), {
          name: stryMutAct_9fa48("16428") ? `` : (stryCov_9fa48("16428"), `getSortedSetRangeByScoreWithScores${(stryMutAct_9fa48("16432") ? sort <= 0 : stryMutAct_9fa48("16431") ? sort >= 0 : stryMutAct_9fa48("16430") ? false : stryMutAct_9fa48("16429") ? true : (stryCov_9fa48("16429", "16430", "16431", "16432"), sort > 0)) ? stryMutAct_9fa48("16433") ? "" : (stryCov_9fa48("16433"), 'Asc') : stryMutAct_9fa48("16434") ? "" : (stryCov_9fa48("16434"), 'Desc')}`),
          text: stryMutAct_9fa48("16435") ? `` : (stryCov_9fa48("16435"), `
SELECT z."value",
       z."score"
  FROM "legacy_object_live" o
 INNER JOIN "legacy_zset" z
         ON o."_key" = z."_key"
        AND o."type" = z."type"
 WHERE o."_key" = ANY($1::TEXT[])
   AND (z."score" >= $4::NUMERIC OR $4::NUMERIC IS NULL)
   AND (z."score" <= $5::NUMERIC OR $5::NUMERIC IS NULL)
 ORDER BY z."score" ${(stryMutAct_9fa48("16439") ? sort <= 0 : stryMutAct_9fa48("16438") ? sort >= 0 : stryMutAct_9fa48("16437") ? false : stryMutAct_9fa48("16436") ? true : (stryCov_9fa48("16436", "16437", "16438", "16439"), sort > 0)) ? stryMutAct_9fa48("16440") ? "" : (stryCov_9fa48("16440"), 'ASC') : stryMutAct_9fa48("16441") ? "" : (stryCov_9fa48("16441"), 'DESC')}
 LIMIT $3::INTEGER
OFFSET $2::INTEGER`),
          values: stryMutAct_9fa48("16442") ? [] : (stryCov_9fa48("16442"), [key, start, count, min, max])
        }));
        if (stryMutAct_9fa48("16444") ? false : stryMutAct_9fa48("16443") ? true : (stryCov_9fa48("16443", "16444"), withScores)) {
          if (stryMutAct_9fa48("16445")) {
            {}
          } else {
            stryCov_9fa48("16445");
            res.rows = res.rows.map(stryMutAct_9fa48("16446") ? () => undefined : (stryCov_9fa48("16446"), r => stryMutAct_9fa48("16447") ? {} : (stryCov_9fa48("16447"), {
              value: r.value,
              score: parseFloat(r.score)
            })));
          }
        } else {
          if (stryMutAct_9fa48("16448")) {
            {}
          } else {
            stryCov_9fa48("16448");
            res.rows = res.rows.map(stryMutAct_9fa48("16449") ? () => undefined : (stryCov_9fa48("16449"), r => r.value));
          }
        }
        return res.rows;
      }
    }
    module.sortedSetCount = async function (key, min, max) {
      if (stryMutAct_9fa48("16450")) {
        {}
      } else {
        stryCov_9fa48("16450");
        if (stryMutAct_9fa48("16453") ? false : stryMutAct_9fa48("16452") ? true : stryMutAct_9fa48("16451") ? key : (stryCov_9fa48("16451", "16452", "16453"), !key)) {
          if (stryMutAct_9fa48("16454")) {
            {}
          } else {
            stryCov_9fa48("16454");
            return;
          }
        }
        if (stryMutAct_9fa48("16457") ? min !== '-inf' : stryMutAct_9fa48("16456") ? false : stryMutAct_9fa48("16455") ? true : (stryCov_9fa48("16455", "16456", "16457"), min === (stryMutAct_9fa48("16458") ? "" : (stryCov_9fa48("16458"), '-inf')))) {
          if (stryMutAct_9fa48("16459")) {
            {}
          } else {
            stryCov_9fa48("16459");
            min = null;
          }
        }
        if (stryMutAct_9fa48("16462") ? max !== '+inf' : stryMutAct_9fa48("16461") ? false : stryMutAct_9fa48("16460") ? true : (stryCov_9fa48("16460", "16461", "16462"), max === (stryMutAct_9fa48("16463") ? "" : (stryCov_9fa48("16463"), '+inf')))) {
          if (stryMutAct_9fa48("16464")) {
            {}
          } else {
            stryCov_9fa48("16464");
            max = null;
          }
        }
        const res = await module.pool.query(stryMutAct_9fa48("16465") ? {} : (stryCov_9fa48("16465"), {
          name: stryMutAct_9fa48("16466") ? "" : (stryCov_9fa48("16466"), 'sortedSetCount'),
          text: stryMutAct_9fa48("16467") ? `` : (stryCov_9fa48("16467"), `
SELECT COUNT(*) c
  FROM "legacy_object_live" o
 INNER JOIN "legacy_zset" z
         ON o."_key" = z."_key"
        AND o."type" = z."type"
 WHERE o."_key" = $1::TEXT
   AND (z."score" >= $2::NUMERIC OR $2::NUMERIC IS NULL)
   AND (z."score" <= $3::NUMERIC OR $3::NUMERIC IS NULL)`),
          values: stryMutAct_9fa48("16468") ? [] : (stryCov_9fa48("16468"), [key, min, max])
        }));
        return parseInt(res.rows[0].c, 10);
      }
    };
    module.sortedSetCard = async function (key) {
      if (stryMutAct_9fa48("16469")) {
        {}
      } else {
        stryCov_9fa48("16469");
        if (stryMutAct_9fa48("16472") ? false : stryMutAct_9fa48("16471") ? true : stryMutAct_9fa48("16470") ? key : (stryCov_9fa48("16470", "16471", "16472"), !key)) {
          if (stryMutAct_9fa48("16473")) {
            {}
          } else {
            stryCov_9fa48("16473");
            return 0;
          }
        }
        const res = await module.pool.query(stryMutAct_9fa48("16474") ? {} : (stryCov_9fa48("16474"), {
          name: stryMutAct_9fa48("16475") ? "" : (stryCov_9fa48("16475"), 'sortedSetCard'),
          text: stryMutAct_9fa48("16476") ? `` : (stryCov_9fa48("16476"), `
SELECT COUNT(*) c
  FROM "legacy_object_live" o
 INNER JOIN "legacy_zset" z
         ON o."_key" = z."_key"
        AND o."type" = z."type"
 WHERE o."_key" = $1::TEXT`),
          values: stryMutAct_9fa48("16477") ? [] : (stryCov_9fa48("16477"), [key])
        }));
        return parseInt(res.rows[0].c, 10);
      }
    };
    module.sortedSetsCard = async function (keys) {
      if (stryMutAct_9fa48("16478")) {
        {}
      } else {
        stryCov_9fa48("16478");
        if (stryMutAct_9fa48("16481") ? !Array.isArray(keys) && !keys.length : stryMutAct_9fa48("16480") ? false : stryMutAct_9fa48("16479") ? true : (stryCov_9fa48("16479", "16480", "16481"), (stryMutAct_9fa48("16482") ? Array.isArray(keys) : (stryCov_9fa48("16482"), !Array.isArray(keys))) || (stryMutAct_9fa48("16483") ? keys.length : (stryCov_9fa48("16483"), !keys.length)))) {
          if (stryMutAct_9fa48("16484")) {
            {}
          } else {
            stryCov_9fa48("16484");
            return stryMutAct_9fa48("16485") ? ["Stryker was here"] : (stryCov_9fa48("16485"), []);
          }
        }
        const res = await module.pool.query(stryMutAct_9fa48("16486") ? {} : (stryCov_9fa48("16486"), {
          name: stryMutAct_9fa48("16487") ? "" : (stryCov_9fa48("16487"), 'sortedSetsCard'),
          text: stryMutAct_9fa48("16488") ? `` : (stryCov_9fa48("16488"), `
SELECT o."_key" k,
       COUNT(*) c
  FROM "legacy_object_live" o
 INNER JOIN "legacy_zset" z
         ON o."_key" = z."_key"
        AND o."type" = z."type"
 WHERE o."_key" = ANY($1::TEXT[])
 GROUP BY o."_key"`),
          values: stryMutAct_9fa48("16489") ? [] : (stryCov_9fa48("16489"), [keys])
        }));
        return keys.map(stryMutAct_9fa48("16490") ? () => undefined : (stryCov_9fa48("16490"), k => parseInt((stryMutAct_9fa48("16493") ? res.rows.find(r => r.k === k) && {
          c: 0
        } : stryMutAct_9fa48("16492") ? false : stryMutAct_9fa48("16491") ? true : (stryCov_9fa48("16491", "16492", "16493"), res.rows.find(stryMutAct_9fa48("16494") ? () => undefined : (stryCov_9fa48("16494"), r => stryMutAct_9fa48("16497") ? r.k !== k : stryMutAct_9fa48("16496") ? false : stryMutAct_9fa48("16495") ? true : (stryCov_9fa48("16495", "16496", "16497"), r.k === k))) || (stryMutAct_9fa48("16498") ? {} : (stryCov_9fa48("16498"), {
          c: 0
        })))).c, 10)));
      }
    };
    module.sortedSetsCardSum = async function (keys) {
      if (stryMutAct_9fa48("16499")) {
        {}
      } else {
        stryCov_9fa48("16499");
        if (stryMutAct_9fa48("16502") ? !keys && Array.isArray(keys) && !keys.length : stryMutAct_9fa48("16501") ? false : stryMutAct_9fa48("16500") ? true : (stryCov_9fa48("16500", "16501", "16502"), (stryMutAct_9fa48("16503") ? keys : (stryCov_9fa48("16503"), !keys)) || (stryMutAct_9fa48("16505") ? Array.isArray(keys) || !keys.length : stryMutAct_9fa48("16504") ? false : (stryCov_9fa48("16504", "16505"), Array.isArray(keys) && (stryMutAct_9fa48("16506") ? keys.length : (stryCov_9fa48("16506"), !keys.length)))))) {
          if (stryMutAct_9fa48("16507")) {
            {}
          } else {
            stryCov_9fa48("16507");
            return 0;
          }
        }
        if (stryMutAct_9fa48("16510") ? false : stryMutAct_9fa48("16509") ? true : stryMutAct_9fa48("16508") ? Array.isArray(keys) : (stryCov_9fa48("16508", "16509", "16510"), !Array.isArray(keys))) {
          if (stryMutAct_9fa48("16511")) {
            {}
          } else {
            stryCov_9fa48("16511");
            keys = stryMutAct_9fa48("16512") ? [] : (stryCov_9fa48("16512"), [keys]);
          }
        }
        const counts = await module.sortedSetsCard(keys);
        const sum = counts.reduce(stryMutAct_9fa48("16513") ? () => undefined : (stryCov_9fa48("16513"), (acc, val) => stryMutAct_9fa48("16514") ? acc - val : (stryCov_9fa48("16514"), acc + val)), 0);
        return sum;
      }
    };
    module.sortedSetRank = async function (key, value) {
      if (stryMutAct_9fa48("16515")) {
        {}
      } else {
        stryCov_9fa48("16515");
        const result = await getSortedSetRank(stryMutAct_9fa48("16516") ? "" : (stryCov_9fa48("16516"), 'ASC'), stryMutAct_9fa48("16517") ? [] : (stryCov_9fa48("16517"), [key]), stryMutAct_9fa48("16518") ? [] : (stryCov_9fa48("16518"), [value]));
        return result ? result[0] : null;
      }
    };
    module.sortedSetRevRank = async function (key, value) {
      if (stryMutAct_9fa48("16519")) {
        {}
      } else {
        stryCov_9fa48("16519");
        const result = await getSortedSetRank(stryMutAct_9fa48("16520") ? "" : (stryCov_9fa48("16520"), 'DESC'), stryMutAct_9fa48("16521") ? [] : (stryCov_9fa48("16521"), [key]), stryMutAct_9fa48("16522") ? [] : (stryCov_9fa48("16522"), [value]));
        return result ? result[0] : null;
      }
    };
    async function getSortedSetRank(sort, keys, values) {
      if (stryMutAct_9fa48("16523")) {
        {}
      } else {
        stryCov_9fa48("16523");
        values = values.map(helpers.valueToString);
        const res = await module.pool.query(stryMutAct_9fa48("16524") ? {} : (stryCov_9fa48("16524"), {
          name: stryMutAct_9fa48("16525") ? `` : (stryCov_9fa48("16525"), `getSortedSetRank${sort}`),
          text: stryMutAct_9fa48("16526") ? `` : (stryCov_9fa48("16526"), `
SELECT (SELECT r
          FROM (SELECT z."value" v,
                       RANK() OVER (PARTITION BY o."_key"
                                        ORDER BY z."score" ${sort},
                                                 z."value" ${sort}) - 1 r
                  FROM "legacy_object_live" o
                 INNER JOIN "legacy_zset" z
                         ON o."_key" = z."_key"
                        AND o."type" = z."type"
                 WHERE o."_key" = kvi.k) r
         WHERE v = kvi.v) r
  FROM UNNEST($1::TEXT[], $2::TEXT[]) WITH ORDINALITY kvi(k, v, i)
 ORDER BY kvi.i ASC`),
          values: stryMutAct_9fa48("16527") ? [] : (stryCov_9fa48("16527"), [keys, values])
        }));
        return res.rows.map(stryMutAct_9fa48("16528") ? () => undefined : (stryCov_9fa48("16528"), r => (stryMutAct_9fa48("16531") ? r.r !== null : stryMutAct_9fa48("16530") ? false : stryMutAct_9fa48("16529") ? true : (stryCov_9fa48("16529", "16530", "16531"), r.r === null)) ? null : parseFloat(r.r)));
      }
    }
    module.sortedSetsRanks = async function (keys, values) {
      if (stryMutAct_9fa48("16532")) {
        {}
      } else {
        stryCov_9fa48("16532");
        if (stryMutAct_9fa48("16535") ? !Array.isArray(keys) && !keys.length : stryMutAct_9fa48("16534") ? false : stryMutAct_9fa48("16533") ? true : (stryCov_9fa48("16533", "16534", "16535"), (stryMutAct_9fa48("16536") ? Array.isArray(keys) : (stryCov_9fa48("16536"), !Array.isArray(keys))) || (stryMutAct_9fa48("16537") ? keys.length : (stryCov_9fa48("16537"), !keys.length)))) {
          if (stryMutAct_9fa48("16538")) {
            {}
          } else {
            stryCov_9fa48("16538");
            return stryMutAct_9fa48("16539") ? ["Stryker was here"] : (stryCov_9fa48("16539"), []);
          }
        }
        return await getSortedSetRank(stryMutAct_9fa48("16540") ? "" : (stryCov_9fa48("16540"), 'ASC'), keys, values);
      }
    };
    module.sortedSetsRevRanks = async function (keys, values) {
      if (stryMutAct_9fa48("16541")) {
        {}
      } else {
        stryCov_9fa48("16541");
        if (stryMutAct_9fa48("16544") ? !Array.isArray(keys) && !keys.length : stryMutAct_9fa48("16543") ? false : stryMutAct_9fa48("16542") ? true : (stryCov_9fa48("16542", "16543", "16544"), (stryMutAct_9fa48("16545") ? Array.isArray(keys) : (stryCov_9fa48("16545"), !Array.isArray(keys))) || (stryMutAct_9fa48("16546") ? keys.length : (stryCov_9fa48("16546"), !keys.length)))) {
          if (stryMutAct_9fa48("16547")) {
            {}
          } else {
            stryCov_9fa48("16547");
            return stryMutAct_9fa48("16548") ? ["Stryker was here"] : (stryCov_9fa48("16548"), []);
          }
        }
        return await getSortedSetRank(stryMutAct_9fa48("16549") ? "" : (stryCov_9fa48("16549"), 'DESC'), keys, values);
      }
    };
    module.sortedSetRanks = async function (key, values) {
      if (stryMutAct_9fa48("16550")) {
        {}
      } else {
        stryCov_9fa48("16550");
        if (stryMutAct_9fa48("16553") ? !Array.isArray(values) && !values.length : stryMutAct_9fa48("16552") ? false : stryMutAct_9fa48("16551") ? true : (stryCov_9fa48("16551", "16552", "16553"), (stryMutAct_9fa48("16554") ? Array.isArray(values) : (stryCov_9fa48("16554"), !Array.isArray(values))) || (stryMutAct_9fa48("16555") ? values.length : (stryCov_9fa48("16555"), !values.length)))) {
          if (stryMutAct_9fa48("16556")) {
            {}
          } else {
            stryCov_9fa48("16556");
            return stryMutAct_9fa48("16557") ? ["Stryker was here"] : (stryCov_9fa48("16557"), []);
          }
        }
        return await getSortedSetRank(stryMutAct_9fa48("16558") ? "" : (stryCov_9fa48("16558"), 'ASC'), (stryMutAct_9fa48("16559") ? new Array() : (stryCov_9fa48("16559"), new Array(values.length))).fill(key), values);
      }
    };
    module.sortedSetRevRanks = async function (key, values) {
      if (stryMutAct_9fa48("16560")) {
        {}
      } else {
        stryCov_9fa48("16560");
        if (stryMutAct_9fa48("16563") ? !Array.isArray(values) && !values.length : stryMutAct_9fa48("16562") ? false : stryMutAct_9fa48("16561") ? true : (stryCov_9fa48("16561", "16562", "16563"), (stryMutAct_9fa48("16564") ? Array.isArray(values) : (stryCov_9fa48("16564"), !Array.isArray(values))) || (stryMutAct_9fa48("16565") ? values.length : (stryCov_9fa48("16565"), !values.length)))) {
          if (stryMutAct_9fa48("16566")) {
            {}
          } else {
            stryCov_9fa48("16566");
            return stryMutAct_9fa48("16567") ? ["Stryker was here"] : (stryCov_9fa48("16567"), []);
          }
        }
        return await getSortedSetRank(stryMutAct_9fa48("16568") ? "" : (stryCov_9fa48("16568"), 'DESC'), (stryMutAct_9fa48("16569") ? new Array() : (stryCov_9fa48("16569"), new Array(values.length))).fill(key), values);
      }
    };
    module.sortedSetScore = async function (key, value) {
      if (stryMutAct_9fa48("16570")) {
        {}
      } else {
        stryCov_9fa48("16570");
        if (stryMutAct_9fa48("16573") ? false : stryMutAct_9fa48("16572") ? true : stryMutAct_9fa48("16571") ? key : (stryCov_9fa48("16571", "16572", "16573"), !key)) {
          if (stryMutAct_9fa48("16574")) {
            {}
          } else {
            stryCov_9fa48("16574");
            return null;
          }
        }
        value = helpers.valueToString(value);
        const res = await module.pool.query(stryMutAct_9fa48("16575") ? {} : (stryCov_9fa48("16575"), {
          name: stryMutAct_9fa48("16576") ? "" : (stryCov_9fa48("16576"), 'sortedSetScore'),
          text: stryMutAct_9fa48("16577") ? `` : (stryCov_9fa48("16577"), `
SELECT z."score" s
  FROM "legacy_object_live" o
 INNER JOIN "legacy_zset" z
         ON o."_key" = z."_key"
        AND o."type" = z."type"
 WHERE o."_key" = $1::TEXT
   AND z."value" = $2::TEXT`),
          values: stryMutAct_9fa48("16578") ? [] : (stryCov_9fa48("16578"), [key, value])
        }));
        if (stryMutAct_9fa48("16580") ? false : stryMutAct_9fa48("16579") ? true : (stryCov_9fa48("16579", "16580"), res.rows.length)) {
          if (stryMutAct_9fa48("16581")) {
            {}
          } else {
            stryCov_9fa48("16581");
            return parseFloat(res.rows[0].s);
          }
        }
        return null;
      }
    };
    module.sortedSetsScore = async function (keys, value) {
      if (stryMutAct_9fa48("16582")) {
        {}
      } else {
        stryCov_9fa48("16582");
        if (stryMutAct_9fa48("16585") ? !Array.isArray(keys) && !keys.length : stryMutAct_9fa48("16584") ? false : stryMutAct_9fa48("16583") ? true : (stryCov_9fa48("16583", "16584", "16585"), (stryMutAct_9fa48("16586") ? Array.isArray(keys) : (stryCov_9fa48("16586"), !Array.isArray(keys))) || (stryMutAct_9fa48("16587") ? keys.length : (stryCov_9fa48("16587"), !keys.length)))) {
          if (stryMutAct_9fa48("16588")) {
            {}
          } else {
            stryCov_9fa48("16588");
            return stryMutAct_9fa48("16589") ? ["Stryker was here"] : (stryCov_9fa48("16589"), []);
          }
        }
        value = helpers.valueToString(value);
        const res = await module.pool.query(stryMutAct_9fa48("16590") ? {} : (stryCov_9fa48("16590"), {
          name: stryMutAct_9fa48("16591") ? "" : (stryCov_9fa48("16591"), 'sortedSetsScore'),
          text: stryMutAct_9fa48("16592") ? `` : (stryCov_9fa48("16592"), `
SELECT o."_key" k,
       z."score" s
  FROM "legacy_object_live" o
 INNER JOIN "legacy_zset" z
         ON o."_key" = z."_key"
        AND o."type" = z."type"
 WHERE o."_key" = ANY($1::TEXT[])
   AND z."value" = $2::TEXT`),
          values: stryMutAct_9fa48("16593") ? [] : (stryCov_9fa48("16593"), [keys, value])
        }));
        return keys.map(k => {
          if (stryMutAct_9fa48("16594")) {
            {}
          } else {
            stryCov_9fa48("16594");
            const s = res.rows.find(stryMutAct_9fa48("16595") ? () => undefined : (stryCov_9fa48("16595"), r => stryMutAct_9fa48("16598") ? r.k !== k : stryMutAct_9fa48("16597") ? false : stryMutAct_9fa48("16596") ? true : (stryCov_9fa48("16596", "16597", "16598"), r.k === k)));
            return s ? parseFloat(s.s) : null;
          }
        });
      }
    };
    module.sortedSetScores = async function (key, values) {
      if (stryMutAct_9fa48("16599")) {
        {}
      } else {
        stryCov_9fa48("16599");
        if (stryMutAct_9fa48("16602") ? false : stryMutAct_9fa48("16601") ? true : stryMutAct_9fa48("16600") ? key : (stryCov_9fa48("16600", "16601", "16602"), !key)) {
          if (stryMutAct_9fa48("16603")) {
            {}
          } else {
            stryCov_9fa48("16603");
            return null;
          }
        }
        if (stryMutAct_9fa48("16606") ? false : stryMutAct_9fa48("16605") ? true : stryMutAct_9fa48("16604") ? values.length : (stryCov_9fa48("16604", "16605", "16606"), !values.length)) {
          if (stryMutAct_9fa48("16607")) {
            {}
          } else {
            stryCov_9fa48("16607");
            return stryMutAct_9fa48("16608") ? ["Stryker was here"] : (stryCov_9fa48("16608"), []);
          }
        }
        values = values.map(helpers.valueToString);
        const res = await module.pool.query(stryMutAct_9fa48("16609") ? {} : (stryCov_9fa48("16609"), {
          name: stryMutAct_9fa48("16610") ? "" : (stryCov_9fa48("16610"), 'sortedSetScores'),
          text: stryMutAct_9fa48("16611") ? `` : (stryCov_9fa48("16611"), `
SELECT z."value" v,
       z."score" s
  FROM "legacy_object_live" o
 INNER JOIN "legacy_zset" z
         ON o."_key" = z."_key"
        AND o."type" = z."type"
 WHERE o."_key" = $1::TEXT
   AND z."value" = ANY($2::TEXT[])`),
          values: stryMutAct_9fa48("16612") ? [] : (stryCov_9fa48("16612"), [key, values])
        }));
        return values.map(v => {
          if (stryMutAct_9fa48("16613")) {
            {}
          } else {
            stryCov_9fa48("16613");
            const s = res.rows.find(stryMutAct_9fa48("16614") ? () => undefined : (stryCov_9fa48("16614"), r => stryMutAct_9fa48("16617") ? r.v !== v : stryMutAct_9fa48("16616") ? false : stryMutAct_9fa48("16615") ? true : (stryCov_9fa48("16615", "16616", "16617"), r.v === v)));
            return s ? parseFloat(s.s) : null;
          }
        });
      }
    };
    module.isSortedSetMember = async function (key, value) {
      if (stryMutAct_9fa48("16618")) {
        {}
      } else {
        stryCov_9fa48("16618");
        if (stryMutAct_9fa48("16621") ? false : stryMutAct_9fa48("16620") ? true : stryMutAct_9fa48("16619") ? key : (stryCov_9fa48("16619", "16620", "16621"), !key)) {
          if (stryMutAct_9fa48("16622")) {
            {}
          } else {
            stryCov_9fa48("16622");
            return;
          }
        }
        value = helpers.valueToString(value);
        const res = await module.pool.query(stryMutAct_9fa48("16623") ? {} : (stryCov_9fa48("16623"), {
          name: stryMutAct_9fa48("16624") ? "" : (stryCov_9fa48("16624"), 'isSortedSetMember'),
          text: stryMutAct_9fa48("16625") ? `` : (stryCov_9fa48("16625"), `
SELECT 1
  FROM "legacy_object_live" o
 INNER JOIN "legacy_zset" z
         ON o."_key" = z."_key"
        AND o."type" = z."type"
 WHERE o."_key" = $1::TEXT
   AND z."value" = $2::TEXT`),
          values: stryMutAct_9fa48("16626") ? [] : (stryCov_9fa48("16626"), [key, value])
        }));
        return stryMutAct_9fa48("16627") ? !res.rows.length : (stryCov_9fa48("16627"), !(stryMutAct_9fa48("16628") ? res.rows.length : (stryCov_9fa48("16628"), !res.rows.length)));
      }
    };
    module.isSortedSetMembers = async function (key, values) {
      if (stryMutAct_9fa48("16629")) {
        {}
      } else {
        stryCov_9fa48("16629");
        if (stryMutAct_9fa48("16632") ? false : stryMutAct_9fa48("16631") ? true : stryMutAct_9fa48("16630") ? key : (stryCov_9fa48("16630", "16631", "16632"), !key)) {
          if (stryMutAct_9fa48("16633")) {
            {}
          } else {
            stryCov_9fa48("16633");
            return;
          }
        }
        if (stryMutAct_9fa48("16636") ? false : stryMutAct_9fa48("16635") ? true : stryMutAct_9fa48("16634") ? values.length : (stryCov_9fa48("16634", "16635", "16636"), !values.length)) {
          if (stryMutAct_9fa48("16637")) {
            {}
          } else {
            stryCov_9fa48("16637");
            return stryMutAct_9fa48("16638") ? ["Stryker was here"] : (stryCov_9fa48("16638"), []);
          }
        }
        values = values.map(helpers.valueToString);
        const res = await module.pool.query(stryMutAct_9fa48("16639") ? {} : (stryCov_9fa48("16639"), {
          name: stryMutAct_9fa48("16640") ? "" : (stryCov_9fa48("16640"), 'isSortedSetMembers'),
          text: stryMutAct_9fa48("16641") ? `` : (stryCov_9fa48("16641"), `
SELECT z."value" v
  FROM "legacy_object_live" o
 INNER JOIN "legacy_zset" z
         ON o."_key" = z."_key"
        AND o."type" = z."type"
 WHERE o."_key" = $1::TEXT
   AND z."value" = ANY($2::TEXT[])`),
          values: stryMutAct_9fa48("16642") ? [] : (stryCov_9fa48("16642"), [key, values])
        }));
        return values.map(stryMutAct_9fa48("16643") ? () => undefined : (stryCov_9fa48("16643"), v => stryMutAct_9fa48("16644") ? res.rows.every(r => r.v === v) : (stryCov_9fa48("16644"), res.rows.some(stryMutAct_9fa48("16645") ? () => undefined : (stryCov_9fa48("16645"), r => stryMutAct_9fa48("16648") ? r.v !== v : stryMutAct_9fa48("16647") ? false : stryMutAct_9fa48("16646") ? true : (stryCov_9fa48("16646", "16647", "16648"), r.v === v))))));
      }
    };
    module.isMemberOfSortedSets = async function (keys, value) {
      if (stryMutAct_9fa48("16649")) {
        {}
      } else {
        stryCov_9fa48("16649");
        if (stryMutAct_9fa48("16652") ? !Array.isArray(keys) && !keys.length : stryMutAct_9fa48("16651") ? false : stryMutAct_9fa48("16650") ? true : (stryCov_9fa48("16650", "16651", "16652"), (stryMutAct_9fa48("16653") ? Array.isArray(keys) : (stryCov_9fa48("16653"), !Array.isArray(keys))) || (stryMutAct_9fa48("16654") ? keys.length : (stryCov_9fa48("16654"), !keys.length)))) {
          if (stryMutAct_9fa48("16655")) {
            {}
          } else {
            stryCov_9fa48("16655");
            return stryMutAct_9fa48("16656") ? ["Stryker was here"] : (stryCov_9fa48("16656"), []);
          }
        }
        value = helpers.valueToString(value);
        const res = await module.pool.query(stryMutAct_9fa48("16657") ? {} : (stryCov_9fa48("16657"), {
          name: stryMutAct_9fa48("16658") ? "" : (stryCov_9fa48("16658"), 'isMemberOfSortedSets'),
          text: stryMutAct_9fa48("16659") ? `` : (stryCov_9fa48("16659"), `
SELECT o."_key" k
  FROM "legacy_object_live" o
 INNER JOIN "legacy_zset" z
         ON o."_key" = z."_key"
        AND o."type" = z."type"
 WHERE o."_key" = ANY($1::TEXT[])
   AND z."value" = $2::TEXT`),
          values: stryMutAct_9fa48("16660") ? [] : (stryCov_9fa48("16660"), [keys, value])
        }));
        return keys.map(stryMutAct_9fa48("16661") ? () => undefined : (stryCov_9fa48("16661"), k => stryMutAct_9fa48("16662") ? res.rows.every(r => r.k === k) : (stryCov_9fa48("16662"), res.rows.some(stryMutAct_9fa48("16663") ? () => undefined : (stryCov_9fa48("16663"), r => stryMutAct_9fa48("16666") ? r.k !== k : stryMutAct_9fa48("16665") ? false : stryMutAct_9fa48("16664") ? true : (stryCov_9fa48("16664", "16665", "16666"), r.k === k))))));
      }
    };
    module.getSortedSetMembers = async function (key) {
      if (stryMutAct_9fa48("16667")) {
        {}
      } else {
        stryCov_9fa48("16667");
        const data = await module.getSortedSetsMembers(stryMutAct_9fa48("16668") ? [] : (stryCov_9fa48("16668"), [key]));
        return stryMutAct_9fa48("16671") ? data || data[0] : stryMutAct_9fa48("16670") ? false : stryMutAct_9fa48("16669") ? true : (stryCov_9fa48("16669", "16670", "16671"), data && data[0]);
      }
    };
    module.getSortedSetsMembers = async function (keys) {
      if (stryMutAct_9fa48("16672")) {
        {}
      } else {
        stryCov_9fa48("16672");
        if (stryMutAct_9fa48("16675") ? !Array.isArray(keys) && !keys.length : stryMutAct_9fa48("16674") ? false : stryMutAct_9fa48("16673") ? true : (stryCov_9fa48("16673", "16674", "16675"), (stryMutAct_9fa48("16676") ? Array.isArray(keys) : (stryCov_9fa48("16676"), !Array.isArray(keys))) || (stryMutAct_9fa48("16677") ? keys.length : (stryCov_9fa48("16677"), !keys.length)))) {
          if (stryMutAct_9fa48("16678")) {
            {}
          } else {
            stryCov_9fa48("16678");
            return stryMutAct_9fa48("16679") ? ["Stryker was here"] : (stryCov_9fa48("16679"), []);
          }
        }
        const res = await module.pool.query(stryMutAct_9fa48("16680") ? {} : (stryCov_9fa48("16680"), {
          name: stryMutAct_9fa48("16681") ? "" : (stryCov_9fa48("16681"), 'getSortedSetsMembers'),
          text: stryMutAct_9fa48("16682") ? `` : (stryCov_9fa48("16682"), `
SELECT "_key" k,
       "nodebb_get_sorted_set_members"("_key") m
  FROM UNNEST($1::TEXT[]) "_key";`),
          values: stryMutAct_9fa48("16683") ? [] : (stryCov_9fa48("16683"), [keys])
        }));
        return keys.map(stryMutAct_9fa48("16684") ? () => undefined : (stryCov_9fa48("16684"), k => stryMutAct_9fa48("16687") ? (res.rows.find(r => r.k === k) || {}).m && [] : stryMutAct_9fa48("16686") ? false : stryMutAct_9fa48("16685") ? true : (stryCov_9fa48("16685", "16686", "16687"), (stryMutAct_9fa48("16690") ? res.rows.find(r => r.k === k) && {} : stryMutAct_9fa48("16689") ? false : stryMutAct_9fa48("16688") ? true : (stryCov_9fa48("16688", "16689", "16690"), res.rows.find(stryMutAct_9fa48("16691") ? () => undefined : (stryCov_9fa48("16691"), r => stryMutAct_9fa48("16694") ? r.k !== k : stryMutAct_9fa48("16693") ? false : stryMutAct_9fa48("16692") ? true : (stryCov_9fa48("16692", "16693", "16694"), r.k === k))) || {})).m || (stryMutAct_9fa48("16695") ? ["Stryker was here"] : (stryCov_9fa48("16695"), [])))));
      }
    };
    module.sortedSetIncrBy = async function (key, increment, value) {
      if (stryMutAct_9fa48("16696")) {
        {}
      } else {
        stryCov_9fa48("16696");
        if (stryMutAct_9fa48("16699") ? false : stryMutAct_9fa48("16698") ? true : stryMutAct_9fa48("16697") ? key : (stryCov_9fa48("16697", "16698", "16699"), !key)) {
          if (stryMutAct_9fa48("16700")) {
            {}
          } else {
            stryCov_9fa48("16700");
            return;
          }
        }
        value = helpers.valueToString(value);
        increment = parseFloat(increment);
        return await module.transaction(async client => {
          if (stryMutAct_9fa48("16701")) {
            {}
          } else {
            stryCov_9fa48("16701");
            await helpers.ensureLegacyObjectType(client, key, stryMutAct_9fa48("16702") ? "" : (stryCov_9fa48("16702"), 'zset'));
            const res = await client.query(stryMutAct_9fa48("16703") ? {} : (stryCov_9fa48("16703"), {
              name: stryMutAct_9fa48("16704") ? "" : (stryCov_9fa48("16704"), 'sortedSetIncrBy'),
              text: stryMutAct_9fa48("16705") ? `` : (stryCov_9fa48("16705"), `
INSERT INTO "legacy_zset" ("_key", "value", "score")
VALUES ($1::TEXT, $2::TEXT, $3::NUMERIC)
ON CONFLICT ("_key", "value")
DO UPDATE SET "score" = "legacy_zset"."score" + $3::NUMERIC
RETURNING "score" s`),
              values: stryMutAct_9fa48("16706") ? [] : (stryCov_9fa48("16706"), [key, value, increment])
            }));
            return parseFloat(res.rows[0].s);
          }
        });
      }
    };
    module.sortedSetIncrByBulk = async function (data) {
      if (stryMutAct_9fa48("16707")) {
        {}
      } else {
        stryCov_9fa48("16707");
        // TODO: perf single query?
        return await Promise.all(data.map(stryMutAct_9fa48("16708") ? () => undefined : (stryCov_9fa48("16708"), item => module.sortedSetIncrBy(item[0], item[1], item[2]))));
      }
    };
    module.getSortedSetRangeByLex = async function (key, min, max, start, count) {
      if (stryMutAct_9fa48("16709")) {
        {}
      } else {
        stryCov_9fa48("16709");
        return await sortedSetLex(key, min, max, 1, start, count);
      }
    };
    module.getSortedSetRevRangeByLex = async function (key, max, min, start, count) {
      if (stryMutAct_9fa48("16710")) {
        {}
      } else {
        stryCov_9fa48("16710");
        return await sortedSetLex(key, min, max, stryMutAct_9fa48("16711") ? +1 : (stryCov_9fa48("16711"), -1), start, count);
      }
    };
    module.sortedSetLexCount = async function (key, min, max) {
      if (stryMutAct_9fa48("16712")) {
        {}
      } else {
        stryCov_9fa48("16712");
        const q = buildLexQuery(key, min, max);
        const res = await module.pool.query(stryMutAct_9fa48("16713") ? {} : (stryCov_9fa48("16713"), {
          name: stryMutAct_9fa48("16714") ? `` : (stryCov_9fa48("16714"), `sortedSetLexCount${q.suffix}`),
          text: stryMutAct_9fa48("16715") ? `` : (stryCov_9fa48("16715"), `
SELECT COUNT(*) c
  FROM "legacy_object_live" o
 INNER JOIN "legacy_zset" z
         ON o."_key" = z."_key"
        AND o."type" = z."type"
 WHERE ${q.where}`),
          values: q.values
        }));
        return parseInt(res.rows[0].c, 10);
      }
    };
    async function sortedSetLex(key, min, max, sort, start, count) {
      if (stryMutAct_9fa48("16716")) {
        {}
      } else {
        stryCov_9fa48("16716");
        start = (stryMutAct_9fa48("16719") ? start === undefined : stryMutAct_9fa48("16718") ? false : stryMutAct_9fa48("16717") ? true : (stryCov_9fa48("16717", "16718", "16719"), start !== undefined)) ? start : 0;
        count = (stryMutAct_9fa48("16722") ? count === undefined : stryMutAct_9fa48("16721") ? false : stryMutAct_9fa48("16720") ? true : (stryCov_9fa48("16720", "16721", "16722"), count !== undefined)) ? count : 0;
        const q = buildLexQuery(key, min, max);
        q.values.push(start);
        q.values.push((stryMutAct_9fa48("16726") ? count > 0 : stryMutAct_9fa48("16725") ? count < 0 : stryMutAct_9fa48("16724") ? false : stryMutAct_9fa48("16723") ? true : (stryCov_9fa48("16723", "16724", "16725", "16726"), count <= 0)) ? null : count);
        const res = await module.pool.query(stryMutAct_9fa48("16727") ? {} : (stryCov_9fa48("16727"), {
          name: stryMutAct_9fa48("16728") ? `` : (stryCov_9fa48("16728"), `sortedSetLex${(stryMutAct_9fa48("16732") ? sort <= 0 : stryMutAct_9fa48("16731") ? sort >= 0 : stryMutAct_9fa48("16730") ? false : stryMutAct_9fa48("16729") ? true : (stryCov_9fa48("16729", "16730", "16731", "16732"), sort > 0)) ? stryMutAct_9fa48("16733") ? "" : (stryCov_9fa48("16733"), 'Asc') : stryMutAct_9fa48("16734") ? "" : (stryCov_9fa48("16734"), 'Desc')}${q.suffix}`),
          text: stryMutAct_9fa48("16735") ? `` : (stryCov_9fa48("16735"), `
SELECT z."value" v
  FROM "legacy_object_live" o
 INNER JOIN "legacy_zset" z
         ON o."_key" = z."_key"
        AND o."type" = z."type"
 WHERE ${q.where}
 ORDER BY z."value" ${(stryMutAct_9fa48("16739") ? sort <= 0 : stryMutAct_9fa48("16738") ? sort >= 0 : stryMutAct_9fa48("16737") ? false : stryMutAct_9fa48("16736") ? true : (stryCov_9fa48("16736", "16737", "16738", "16739"), sort > 0)) ? stryMutAct_9fa48("16740") ? "" : (stryCov_9fa48("16740"), 'ASC') : stryMutAct_9fa48("16741") ? "" : (stryCov_9fa48("16741"), 'DESC')}
 LIMIT $${q.values.length}::INTEGER
OFFSET $${stryMutAct_9fa48("16742") ? q.values.length + 1 : (stryCov_9fa48("16742"), q.values.length - 1)}::INTEGER`),
          values: q.values
        }));
        return res.rows.map(stryMutAct_9fa48("16743") ? () => undefined : (stryCov_9fa48("16743"), r => r.v));
      }
    }
    module.sortedSetRemoveRangeByLex = async function (key, min, max) {
      if (stryMutAct_9fa48("16744")) {
        {}
      } else {
        stryCov_9fa48("16744");
        const q = buildLexQuery(key, min, max);
        await module.pool.query(stryMutAct_9fa48("16745") ? {} : (stryCov_9fa48("16745"), {
          name: stryMutAct_9fa48("16746") ? `` : (stryCov_9fa48("16746"), `sortedSetRemoveRangeByLex${q.suffix}`),
          text: stryMutAct_9fa48("16747") ? `` : (stryCov_9fa48("16747"), `
DELETE FROM "legacy_zset" z
 USING "legacy_object_live" o
 WHERE o."_key" = z."_key"
   AND o."type" = z."type"
   AND ${q.where}`),
          values: q.values
        }));
      }
    };
    function buildLexQuery(key, min, max) {
      if (stryMutAct_9fa48("16748")) {
        {}
      } else {
        stryCov_9fa48("16748");
        const q = stryMutAct_9fa48("16749") ? {} : (stryCov_9fa48("16749"), {
          suffix: stryMutAct_9fa48("16750") ? "Stryker was here!" : (stryCov_9fa48("16750"), ''),
          where: stryMutAct_9fa48("16751") ? `` : (stryCov_9fa48("16751"), `o."_key" = $1::TEXT`),
          values: stryMutAct_9fa48("16752") ? [] : (stryCov_9fa48("16752"), [key])
        });
        if (stryMutAct_9fa48("16755") ? min === '-' : stryMutAct_9fa48("16754") ? false : stryMutAct_9fa48("16753") ? true : (stryCov_9fa48("16753", "16754", "16755"), min !== (stryMutAct_9fa48("16756") ? "" : (stryCov_9fa48("16756"), '-')))) {
          if (stryMutAct_9fa48("16757")) {
            {}
          } else {
            stryCov_9fa48("16757");
            if (stryMutAct_9fa48("16759") ? false : stryMutAct_9fa48("16758") ? true : (stryCov_9fa48("16758", "16759"), min.match(stryMutAct_9fa48("16760") ? /\(/ : (stryCov_9fa48("16760"), /^\(/)))) {
              if (stryMutAct_9fa48("16761")) {
                {}
              } else {
                stryCov_9fa48("16761");
                q.values.push(stryMutAct_9fa48("16762") ? min : (stryCov_9fa48("16762"), min.slice(1)));
                q.suffix += stryMutAct_9fa48("16763") ? "" : (stryCov_9fa48("16763"), 'GT');
                q.where += stryMutAct_9fa48("16764") ? `` : (stryCov_9fa48("16764"), ` AND z."value" > $${q.values.length}::TEXT COLLATE "C"`);
              }
            } else if (stryMutAct_9fa48("16766") ? false : stryMutAct_9fa48("16765") ? true : (stryCov_9fa48("16765", "16766"), min.match(stryMutAct_9fa48("16767") ? /\[/ : (stryCov_9fa48("16767"), /^\[/)))) {
              if (stryMutAct_9fa48("16768")) {
                {}
              } else {
                stryCov_9fa48("16768");
                q.values.push(stryMutAct_9fa48("16769") ? min : (stryCov_9fa48("16769"), min.slice(1)));
                q.suffix += stryMutAct_9fa48("16770") ? "" : (stryCov_9fa48("16770"), 'GE');
                q.where += stryMutAct_9fa48("16771") ? `` : (stryCov_9fa48("16771"), ` AND z."value" >= $${q.values.length}::TEXT COLLATE "C"`);
              }
            } else {
              if (stryMutAct_9fa48("16772")) {
                {}
              } else {
                stryCov_9fa48("16772");
                q.values.push(min);
                q.suffix += stryMutAct_9fa48("16773") ? "" : (stryCov_9fa48("16773"), 'GE');
                q.where += stryMutAct_9fa48("16774") ? `` : (stryCov_9fa48("16774"), ` AND z."value" >= $${q.values.length}::TEXT COLLATE "C"`);
              }
            }
          }
        }
        if (stryMutAct_9fa48("16777") ? max === '+' : stryMutAct_9fa48("16776") ? false : stryMutAct_9fa48("16775") ? true : (stryCov_9fa48("16775", "16776", "16777"), max !== (stryMutAct_9fa48("16778") ? "" : (stryCov_9fa48("16778"), '+')))) {
          if (stryMutAct_9fa48("16779")) {
            {}
          } else {
            stryCov_9fa48("16779");
            if (stryMutAct_9fa48("16781") ? false : stryMutAct_9fa48("16780") ? true : (stryCov_9fa48("16780", "16781"), max.match(stryMutAct_9fa48("16782") ? /\(/ : (stryCov_9fa48("16782"), /^\(/)))) {
              if (stryMutAct_9fa48("16783")) {
                {}
              } else {
                stryCov_9fa48("16783");
                q.values.push(stryMutAct_9fa48("16784") ? max : (stryCov_9fa48("16784"), max.slice(1)));
                q.suffix += stryMutAct_9fa48("16785") ? "" : (stryCov_9fa48("16785"), 'LT');
                q.where += stryMutAct_9fa48("16786") ? `` : (stryCov_9fa48("16786"), ` AND z."value" < $${q.values.length}::TEXT COLLATE "C"`);
              }
            } else if (stryMutAct_9fa48("16788") ? false : stryMutAct_9fa48("16787") ? true : (stryCov_9fa48("16787", "16788"), max.match(stryMutAct_9fa48("16789") ? /\[/ : (stryCov_9fa48("16789"), /^\[/)))) {
              if (stryMutAct_9fa48("16790")) {
                {}
              } else {
                stryCov_9fa48("16790");
                q.values.push(stryMutAct_9fa48("16791") ? max : (stryCov_9fa48("16791"), max.slice(1)));
                q.suffix += stryMutAct_9fa48("16792") ? "" : (stryCov_9fa48("16792"), 'LE');
                q.where += stryMutAct_9fa48("16793") ? `` : (stryCov_9fa48("16793"), ` AND z."value" <= $${q.values.length}::TEXT COLLATE "C"`);
              }
            } else {
              if (stryMutAct_9fa48("16794")) {
                {}
              } else {
                stryCov_9fa48("16794");
                q.values.push(max);
                q.suffix += stryMutAct_9fa48("16795") ? "" : (stryCov_9fa48("16795"), 'LE');
                q.where += stryMutAct_9fa48("16796") ? `` : (stryCov_9fa48("16796"), ` AND z."value" <= $${q.values.length}::TEXT COLLATE "C"`);
              }
            }
          }
        }
        return q;
      }
    }
    module.getSortedSetScan = async function (params) {
      if (stryMutAct_9fa48("16797")) {
        {}
      } else {
        stryCov_9fa48("16797");
        let {
          match
        } = params;
        if (stryMutAct_9fa48("16800") ? match.endsWith('*') : stryMutAct_9fa48("16799") ? false : stryMutAct_9fa48("16798") ? true : (stryCov_9fa48("16798", "16799", "16800"), match.startsWith(stryMutAct_9fa48("16801") ? "" : (stryCov_9fa48("16801"), '*')))) {
          if (stryMutAct_9fa48("16802")) {
            {}
          } else {
            stryCov_9fa48("16802");
            match = stryMutAct_9fa48("16803") ? `` : (stryCov_9fa48("16803"), `%${stryMutAct_9fa48("16804") ? match : (stryCov_9fa48("16804"), match.substring(1))}`);
          }
        }
        if (stryMutAct_9fa48("16807") ? match.startsWith('*') : stryMutAct_9fa48("16806") ? false : stryMutAct_9fa48("16805") ? true : (stryCov_9fa48("16805", "16806", "16807"), match.endsWith(stryMutAct_9fa48("16808") ? "" : (stryCov_9fa48("16808"), '*')))) {
          if (stryMutAct_9fa48("16809")) {
            {}
          } else {
            stryCov_9fa48("16809");
            match = stryMutAct_9fa48("16810") ? `` : (stryCov_9fa48("16810"), `${stryMutAct_9fa48("16811") ? match : (stryCov_9fa48("16811"), match.substring(0, stryMutAct_9fa48("16812") ? match.length + 1 : (stryCov_9fa48("16812"), match.length - 1)))}%`);
          }
        }
        const res = await module.pool.query(stryMutAct_9fa48("16813") ? {} : (stryCov_9fa48("16813"), {
          text: stryMutAct_9fa48("16814") ? `` : (stryCov_9fa48("16814"), `
SELECT z."value",
       z."score"
  FROM "legacy_object_live" o
 INNER JOIN "legacy_zset" z
         ON o."_key" = z."_key"
        AND o."type" = z."type"
 WHERE o."_key" = $1::TEXT
  AND z."value" LIKE '${match}'
  LIMIT $2::INTEGER`),
          values: stryMutAct_9fa48("16815") ? [] : (stryCov_9fa48("16815"), [params.key, params.limit])
        }));
        if (stryMutAct_9fa48("16818") ? false : stryMutAct_9fa48("16817") ? true : stryMutAct_9fa48("16816") ? params.withScores : (stryCov_9fa48("16816", "16817", "16818"), !params.withScores)) {
          if (stryMutAct_9fa48("16819")) {
            {}
          } else {
            stryCov_9fa48("16819");
            return res.rows.map(stryMutAct_9fa48("16820") ? () => undefined : (stryCov_9fa48("16820"), r => r.value));
          }
        }
        return res.rows.map(stryMutAct_9fa48("16821") ? () => undefined : (stryCov_9fa48("16821"), r => stryMutAct_9fa48("16822") ? {} : (stryCov_9fa48("16822"), {
          value: r.value,
          score: parseFloat(r.score)
        })));
      }
    };
    module.processSortedSet = async function (setKey, process, options) {
      if (stryMutAct_9fa48("16823")) {
        {}
      } else {
        stryCov_9fa48("16823");
        const client = await module.pool.connect();
        const batchSize = stryMutAct_9fa48("16826") ? (options || {}).batch && 100 : stryMutAct_9fa48("16825") ? false : stryMutAct_9fa48("16824") ? true : (stryCov_9fa48("16824", "16825", "16826"), (stryMutAct_9fa48("16829") ? options && {} : stryMutAct_9fa48("16828") ? false : stryMutAct_9fa48("16827") ? true : (stryCov_9fa48("16827", "16828", "16829"), options || {})).batch || 100);
        const cursor = client.query(new Cursor(stryMutAct_9fa48("16830") ? `` : (stryCov_9fa48("16830"), `
SELECT z."value", z."score"
  FROM "legacy_object_live" o
 INNER JOIN "legacy_zset" z
         ON o."_key" = z."_key"
        AND o."type" = z."type"
 WHERE o."_key" = $1::TEXT
 ORDER BY z."score" ASC, z."value" ASC`), stryMutAct_9fa48("16831") ? [] : (stryCov_9fa48("16831"), [setKey])));
        if (stryMutAct_9fa48("16834") ? process && process.constructor || process.constructor.name !== 'AsyncFunction' : stryMutAct_9fa48("16833") ? false : stryMutAct_9fa48("16832") ? true : (stryCov_9fa48("16832", "16833", "16834"), (stryMutAct_9fa48("16836") ? process || process.constructor : stryMutAct_9fa48("16835") ? true : (stryCov_9fa48("16835", "16836"), process && process.constructor)) && (stryMutAct_9fa48("16838") ? process.constructor.name === 'AsyncFunction' : stryMutAct_9fa48("16837") ? true : (stryCov_9fa48("16837", "16838"), process.constructor.name !== (stryMutAct_9fa48("16839") ? "" : (stryCov_9fa48("16839"), 'AsyncFunction')))))) {
          if (stryMutAct_9fa48("16840")) {
            {}
          } else {
            stryCov_9fa48("16840");
            process = util.promisify(process);
          }
        }
        while (stryMutAct_9fa48("16842") ? false : stryMutAct_9fa48("16841") ? false : (stryCov_9fa48("16841", "16842"), true)) {
          if (stryMutAct_9fa48("16843")) {
            {}
          } else {
            stryCov_9fa48("16843");
            /* eslint-disable no-await-in-loop */
            let rows = await cursor.readAsync(batchSize);
            if (stryMutAct_9fa48("16846") ? false : stryMutAct_9fa48("16845") ? true : stryMutAct_9fa48("16844") ? rows.length : (stryCov_9fa48("16844", "16845", "16846"), !rows.length)) {
              if (stryMutAct_9fa48("16847")) {
                {}
              } else {
                stryCov_9fa48("16847");
                client.release();
                return;
              }
            }
            if (stryMutAct_9fa48("16849") ? false : stryMutAct_9fa48("16848") ? true : (stryCov_9fa48("16848", "16849"), options.withScores)) {
              if (stryMutAct_9fa48("16850")) {
                {}
              } else {
                stryCov_9fa48("16850");
                rows = rows.map(stryMutAct_9fa48("16851") ? () => undefined : (stryCov_9fa48("16851"), r => stryMutAct_9fa48("16852") ? {} : (stryCov_9fa48("16852"), {
                  value: r.value,
                  score: parseFloat(r.score)
                })));
              }
            } else {
              if (stryMutAct_9fa48("16853")) {
                {}
              } else {
                stryCov_9fa48("16853");
                rows = rows.map(stryMutAct_9fa48("16854") ? () => undefined : (stryCov_9fa48("16854"), r => r.value));
              }
            }
            try {
              if (stryMutAct_9fa48("16855")) {
                {}
              } else {
                stryCov_9fa48("16855");
                await process(rows);
              }
            } catch (err) {
              if (stryMutAct_9fa48("16856")) {
                {}
              } else {
                stryCov_9fa48("16856");
                await client.release();
                throw err;
              }
            }
            if (stryMutAct_9fa48("16858") ? false : stryMutAct_9fa48("16857") ? true : (stryCov_9fa48("16857", "16858"), options.interval)) {
              if (stryMutAct_9fa48("16859")) {
                {}
              } else {
                stryCov_9fa48("16859");
                await sleep(options.interval);
              }
            }
          }
        }
      }
    };
  }
};