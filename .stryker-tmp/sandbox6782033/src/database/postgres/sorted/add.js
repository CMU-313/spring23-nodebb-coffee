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
  if (stryMutAct_9fa48("15983")) {
    {}
  } else {
    stryCov_9fa48("15983");
    const helpers = require('../helpers');
    const utils = require('../../../utils');
    module.sortedSetAdd = async function (key, score, value) {
      if (stryMutAct_9fa48("15984")) {
        {}
      } else {
        stryCov_9fa48("15984");
        if (stryMutAct_9fa48("15987") ? false : stryMutAct_9fa48("15986") ? true : stryMutAct_9fa48("15985") ? key : (stryCov_9fa48("15985", "15986", "15987"), !key)) {
          if (stryMutAct_9fa48("15988")) {
            {}
          } else {
            stryCov_9fa48("15988");
            return;
          }
        }
        if (stryMutAct_9fa48("15991") ? Array.isArray(score) || Array.isArray(value) : stryMutAct_9fa48("15990") ? false : stryMutAct_9fa48("15989") ? true : (stryCov_9fa48("15989", "15990", "15991"), Array.isArray(score) && Array.isArray(value))) {
          if (stryMutAct_9fa48("15992")) {
            {}
          } else {
            stryCov_9fa48("15992");
            return await sortedSetAddBulk(key, score, value);
          }
        }
        if (stryMutAct_9fa48("15995") ? false : stryMutAct_9fa48("15994") ? true : stryMutAct_9fa48("15993") ? utils.isNumber(score) : (stryCov_9fa48("15993", "15994", "15995"), !utils.isNumber(score))) {
          if (stryMutAct_9fa48("15996")) {
            {}
          } else {
            stryCov_9fa48("15996");
            throw new Error(stryMutAct_9fa48("15997") ? `` : (stryCov_9fa48("15997"), `[[error:invalid-score, ${score}]]`));
          }
        }
        value = helpers.valueToString(value);
        score = parseFloat(score);
        await module.transaction(async client => {
          if (stryMutAct_9fa48("15998")) {
            {}
          } else {
            stryCov_9fa48("15998");
            await helpers.ensureLegacyObjectType(client, key, stryMutAct_9fa48("15999") ? "" : (stryCov_9fa48("15999"), 'zset'));
            await client.query(stryMutAct_9fa48("16000") ? {} : (stryCov_9fa48("16000"), {
              name: stryMutAct_9fa48("16001") ? "" : (stryCov_9fa48("16001"), 'sortedSetAdd'),
              text: stryMutAct_9fa48("16002") ? `` : (stryCov_9fa48("16002"), `
    INSERT INTO "legacy_zset" ("_key", "value", "score")
    VALUES ($1::TEXT, $2::TEXT, $3::NUMERIC)
    ON CONFLICT ("_key", "value")
    DO UPDATE SET "score" = $3::NUMERIC`),
              values: stryMutAct_9fa48("16003") ? [] : (stryCov_9fa48("16003"), [key, value, score])
            }));
          }
        });
      }
    };
    async function sortedSetAddBulk(key, scores, values) {
      if (stryMutAct_9fa48("16004")) {
        {}
      } else {
        stryCov_9fa48("16004");
        if (stryMutAct_9fa48("16007") ? !scores.length && !values.length : stryMutAct_9fa48("16006") ? false : stryMutAct_9fa48("16005") ? true : (stryCov_9fa48("16005", "16006", "16007"), (stryMutAct_9fa48("16008") ? scores.length : (stryCov_9fa48("16008"), !scores.length)) || (stryMutAct_9fa48("16009") ? values.length : (stryCov_9fa48("16009"), !values.length)))) {
          if (stryMutAct_9fa48("16010")) {
            {}
          } else {
            stryCov_9fa48("16010");
            return;
          }
        }
        if (stryMutAct_9fa48("16013") ? scores.length === values.length : stryMutAct_9fa48("16012") ? false : stryMutAct_9fa48("16011") ? true : (stryCov_9fa48("16011", "16012", "16013"), scores.length !== values.length)) {
          if (stryMutAct_9fa48("16014")) {
            {}
          } else {
            stryCov_9fa48("16014");
            throw new Error(stryMutAct_9fa48("16015") ? "" : (stryCov_9fa48("16015"), '[[error:invalid-data]]'));
          }
        }
        for (let i = 0; stryMutAct_9fa48("16018") ? i >= scores.length : stryMutAct_9fa48("16017") ? i <= scores.length : stryMutAct_9fa48("16016") ? false : (stryCov_9fa48("16016", "16017", "16018"), i < scores.length); stryMutAct_9fa48("16019") ? i -= 1 : (stryCov_9fa48("16019"), i += 1)) {
          if (stryMutAct_9fa48("16020")) {
            {}
          } else {
            stryCov_9fa48("16020");
            if (stryMutAct_9fa48("16023") ? false : stryMutAct_9fa48("16022") ? true : stryMutAct_9fa48("16021") ? utils.isNumber(scores[i]) : (stryCov_9fa48("16021", "16022", "16023"), !utils.isNumber(scores[i]))) {
              if (stryMutAct_9fa48("16024")) {
                {}
              } else {
                stryCov_9fa48("16024");
                throw new Error(stryMutAct_9fa48("16025") ? `` : (stryCov_9fa48("16025"), `[[error:invalid-score, ${scores[i]}]]`));
              }
            }
          }
        }
        values = values.map(helpers.valueToString);
        scores = scores.map(stryMutAct_9fa48("16026") ? () => undefined : (stryCov_9fa48("16026"), score => parseFloat(score)));
        helpers.removeDuplicateValues(values, scores);
        await module.transaction(async client => {
          if (stryMutAct_9fa48("16027")) {
            {}
          } else {
            stryCov_9fa48("16027");
            await helpers.ensureLegacyObjectType(client, key, stryMutAct_9fa48("16028") ? "" : (stryCov_9fa48("16028"), 'zset'));
            await client.query(stryMutAct_9fa48("16029") ? {} : (stryCov_9fa48("16029"), {
              name: stryMutAct_9fa48("16030") ? "" : (stryCov_9fa48("16030"), 'sortedSetAddBulk'),
              text: stryMutAct_9fa48("16031") ? `` : (stryCov_9fa48("16031"), `
INSERT INTO "legacy_zset" ("_key", "value", "score")
SELECT $1::TEXT, v, s
FROM UNNEST($2::TEXT[], $3::NUMERIC[]) vs(v, s)
ON CONFLICT ("_key", "value")
DO UPDATE SET "score" = EXCLUDED."score"`),
              values: stryMutAct_9fa48("16032") ? [] : (stryCov_9fa48("16032"), [key, values, scores])
            }));
          }
        });
      }
    }
    module.sortedSetsAdd = async function (keys, scores, value) {
      if (stryMutAct_9fa48("16033")) {
        {}
      } else {
        stryCov_9fa48("16033");
        if (stryMutAct_9fa48("16036") ? !Array.isArray(keys) && !keys.length : stryMutAct_9fa48("16035") ? false : stryMutAct_9fa48("16034") ? true : (stryCov_9fa48("16034", "16035", "16036"), (stryMutAct_9fa48("16037") ? Array.isArray(keys) : (stryCov_9fa48("16037"), !Array.isArray(keys))) || (stryMutAct_9fa48("16038") ? keys.length : (stryCov_9fa48("16038"), !keys.length)))) {
          if (stryMutAct_9fa48("16039")) {
            {}
          } else {
            stryCov_9fa48("16039");
            return;
          }
        }
        const isArrayOfScores = Array.isArray(scores);
        if (stryMutAct_9fa48("16042") ? !isArrayOfScores && !utils.isNumber(scores) && isArrayOfScores && scores.map(s => utils.isNumber(s)).includes(false) : stryMutAct_9fa48("16041") ? false : stryMutAct_9fa48("16040") ? true : (stryCov_9fa48("16040", "16041", "16042"), (stryMutAct_9fa48("16044") ? !isArrayOfScores || !utils.isNumber(scores) : stryMutAct_9fa48("16043") ? false : (stryCov_9fa48("16043", "16044"), (stryMutAct_9fa48("16045") ? isArrayOfScores : (stryCov_9fa48("16045"), !isArrayOfScores)) && (stryMutAct_9fa48("16046") ? utils.isNumber(scores) : (stryCov_9fa48("16046"), !utils.isNumber(scores))))) || (stryMutAct_9fa48("16048") ? isArrayOfScores || scores.map(s => utils.isNumber(s)).includes(false) : stryMutAct_9fa48("16047") ? false : (stryCov_9fa48("16047", "16048"), isArrayOfScores && scores.map(stryMutAct_9fa48("16049") ? () => undefined : (stryCov_9fa48("16049"), s => utils.isNumber(s))).includes(stryMutAct_9fa48("16050") ? true : (stryCov_9fa48("16050"), false)))))) {
          if (stryMutAct_9fa48("16051")) {
            {}
          } else {
            stryCov_9fa48("16051");
            throw new Error(stryMutAct_9fa48("16052") ? `` : (stryCov_9fa48("16052"), `[[error:invalid-score, ${scores}]]`));
          }
        }
        if (stryMutAct_9fa48("16055") ? isArrayOfScores || scores.length !== keys.length : stryMutAct_9fa48("16054") ? false : stryMutAct_9fa48("16053") ? true : (stryCov_9fa48("16053", "16054", "16055"), isArrayOfScores && (stryMutAct_9fa48("16057") ? scores.length === keys.length : stryMutAct_9fa48("16056") ? true : (stryCov_9fa48("16056", "16057"), scores.length !== keys.length)))) {
          if (stryMutAct_9fa48("16058")) {
            {}
          } else {
            stryCov_9fa48("16058");
            throw new Error(stryMutAct_9fa48("16059") ? "" : (stryCov_9fa48("16059"), '[[error:invalid-data]]'));
          }
        }
        value = helpers.valueToString(value);
        scores = isArrayOfScores ? scores.map(stryMutAct_9fa48("16060") ? () => undefined : (stryCov_9fa48("16060"), score => parseFloat(score))) : parseFloat(scores);
        await module.transaction(async client => {
          if (stryMutAct_9fa48("16061")) {
            {}
          } else {
            stryCov_9fa48("16061");
            await helpers.ensureLegacyObjectsType(client, keys, stryMutAct_9fa48("16062") ? "" : (stryCov_9fa48("16062"), 'zset'));
            await client.query(stryMutAct_9fa48("16063") ? {} : (stryCov_9fa48("16063"), {
              name: isArrayOfScores ? stryMutAct_9fa48("16064") ? "" : (stryCov_9fa48("16064"), 'sortedSetsAddScores') : stryMutAct_9fa48("16065") ? "" : (stryCov_9fa48("16065"), 'sortedSetsAdd'),
              text: isArrayOfScores ? stryMutAct_9fa48("16066") ? `` : (stryCov_9fa48("16066"), `
INSERT INTO "legacy_zset" ("_key", "value", "score")
SELECT k, $2::TEXT, s
FROM UNNEST($1::TEXT[], $3::NUMERIC[]) vs(k, s)
ON CONFLICT ("_key", "value")
    DO UPDATE SET "score" = EXCLUDED."score"`) : stryMutAct_9fa48("16067") ? `` : (stryCov_9fa48("16067"), `
INSERT INTO "legacy_zset" ("_key", "value", "score")
    SELECT k, $2::TEXT, $3::NUMERIC
        FROM UNNEST($1::TEXT[]) k
            ON CONFLICT ("_key", "value")
            DO UPDATE SET "score" = $3::NUMERIC`),
              values: stryMutAct_9fa48("16068") ? [] : (stryCov_9fa48("16068"), [keys, value, scores])
            }));
          }
        });
      }
    };
    module.sortedSetAddBulk = async function (data) {
      if (stryMutAct_9fa48("16069")) {
        {}
      } else {
        stryCov_9fa48("16069");
        if (stryMutAct_9fa48("16072") ? !Array.isArray(data) && !data.length : stryMutAct_9fa48("16071") ? false : stryMutAct_9fa48("16070") ? true : (stryCov_9fa48("16070", "16071", "16072"), (stryMutAct_9fa48("16073") ? Array.isArray(data) : (stryCov_9fa48("16073"), !Array.isArray(data))) || (stryMutAct_9fa48("16074") ? data.length : (stryCov_9fa48("16074"), !data.length)))) {
          if (stryMutAct_9fa48("16075")) {
            {}
          } else {
            stryCov_9fa48("16075");
            return;
          }
        }
        const keys = stryMutAct_9fa48("16076") ? ["Stryker was here"] : (stryCov_9fa48("16076"), []);
        const values = stryMutAct_9fa48("16077") ? ["Stryker was here"] : (stryCov_9fa48("16077"), []);
        const scores = stryMutAct_9fa48("16078") ? ["Stryker was here"] : (stryCov_9fa48("16078"), []);
        data.forEach(item => {
          if (stryMutAct_9fa48("16079")) {
            {}
          } else {
            stryCov_9fa48("16079");
            if (stryMutAct_9fa48("16082") ? false : stryMutAct_9fa48("16081") ? true : stryMutAct_9fa48("16080") ? utils.isNumber(item[1]) : (stryCov_9fa48("16080", "16081", "16082"), !utils.isNumber(item[1]))) {
              if (stryMutAct_9fa48("16083")) {
                {}
              } else {
                stryCov_9fa48("16083");
                throw new Error(stryMutAct_9fa48("16084") ? `` : (stryCov_9fa48("16084"), `[[error:invalid-score, ${item[1]}]]`));
              }
            }
            keys.push(item[0]);
            scores.push(item[1]);
            values.push(item[2]);
          }
        });
        await module.transaction(async client => {
          if (stryMutAct_9fa48("16085")) {
            {}
          } else {
            stryCov_9fa48("16085");
            await helpers.ensureLegacyObjectsType(client, keys, stryMutAct_9fa48("16086") ? "" : (stryCov_9fa48("16086"), 'zset'));
            await client.query(stryMutAct_9fa48("16087") ? {} : (stryCov_9fa48("16087"), {
              name: stryMutAct_9fa48("16088") ? "" : (stryCov_9fa48("16088"), 'sortedSetAddBulk2'),
              text: stryMutAct_9fa48("16089") ? `` : (stryCov_9fa48("16089"), `
INSERT INTO "legacy_zset" ("_key", "value", "score")
SELECT k, v, s
FROM UNNEST($1::TEXT[], $2::TEXT[], $3::NUMERIC[]) vs(k, v, s)
ON CONFLICT ("_key", "value")
DO UPDATE SET "score" = EXCLUDED."score"`),
              values: stryMutAct_9fa48("16090") ? [] : (stryCov_9fa48("16090"), [keys, values, scores])
            }));
          }
        });
      }
    };
  }
};