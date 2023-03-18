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
  if (stryMutAct_9fa48("13906")) {
    {}
  } else {
    stryCov_9fa48("13906");
    const helpers = require('../helpers');
    const utils = require('../../../utils');
    module.sortedSetAdd = async function (key, score, value) {
      if (stryMutAct_9fa48("13907")) {
        {}
      } else {
        stryCov_9fa48("13907");
        if (stryMutAct_9fa48("13910") ? false : stryMutAct_9fa48("13909") ? true : stryMutAct_9fa48("13908") ? key : (stryCov_9fa48("13908", "13909", "13910"), !key)) {
          if (stryMutAct_9fa48("13911")) {
            {}
          } else {
            stryCov_9fa48("13911");
            return;
          }
        }
        if (stryMutAct_9fa48("13914") ? Array.isArray(score) || Array.isArray(value) : stryMutAct_9fa48("13913") ? false : stryMutAct_9fa48("13912") ? true : (stryCov_9fa48("13912", "13913", "13914"), Array.isArray(score) && Array.isArray(value))) {
          if (stryMutAct_9fa48("13915")) {
            {}
          } else {
            stryCov_9fa48("13915");
            return await sortedSetAddBulk(key, score, value);
          }
        }
        if (stryMutAct_9fa48("13918") ? false : stryMutAct_9fa48("13917") ? true : stryMutAct_9fa48("13916") ? utils.isNumber(score) : (stryCov_9fa48("13916", "13917", "13918"), !utils.isNumber(score))) {
          if (stryMutAct_9fa48("13919")) {
            {}
          } else {
            stryCov_9fa48("13919");
            throw new Error(stryMutAct_9fa48("13920") ? `` : (stryCov_9fa48("13920"), `[[error:invalid-score, ${score}]]`));
          }
        }
        value = helpers.valueToString(value);
        try {
          if (stryMutAct_9fa48("13921")) {
            {}
          } else {
            stryCov_9fa48("13921");
            await module.client.collection(stryMutAct_9fa48("13922") ? "" : (stryCov_9fa48("13922"), 'objects')).updateOne(stryMutAct_9fa48("13923") ? {} : (stryCov_9fa48("13923"), {
              _key: key,
              value: value
            }), stryMutAct_9fa48("13924") ? {} : (stryCov_9fa48("13924"), {
              $set: stryMutAct_9fa48("13925") ? {} : (stryCov_9fa48("13925"), {
                score: parseFloat(score)
              })
            }), stryMutAct_9fa48("13926") ? {} : (stryCov_9fa48("13926"), {
              upsert: stryMutAct_9fa48("13927") ? false : (stryCov_9fa48("13927"), true)
            }));
          }
        } catch (err) {
          if (stryMutAct_9fa48("13928")) {
            {}
          } else {
            stryCov_9fa48("13928");
            if (stryMutAct_9fa48("13931") ? err || err.message.startsWith('E11000 duplicate key error') : stryMutAct_9fa48("13930") ? false : stryMutAct_9fa48("13929") ? true : (stryCov_9fa48("13929", "13930", "13931"), err && (stryMutAct_9fa48("13932") ? err.message.endsWith('E11000 duplicate key error') : (stryCov_9fa48("13932"), err.message.startsWith(stryMutAct_9fa48("13933") ? "" : (stryCov_9fa48("13933"), 'E11000 duplicate key error')))))) {
              if (stryMutAct_9fa48("13934")) {
                {}
              } else {
                stryCov_9fa48("13934");
                return await module.sortedSetAdd(key, score, value);
              }
            }
            throw err;
          }
        }
      }
    };
    async function sortedSetAddBulk(key, scores, values) {
      if (stryMutAct_9fa48("13935")) {
        {}
      } else {
        stryCov_9fa48("13935");
        if (stryMutAct_9fa48("13938") ? !scores.length && !values.length : stryMutAct_9fa48("13937") ? false : stryMutAct_9fa48("13936") ? true : (stryCov_9fa48("13936", "13937", "13938"), (stryMutAct_9fa48("13939") ? scores.length : (stryCov_9fa48("13939"), !scores.length)) || (stryMutAct_9fa48("13940") ? values.length : (stryCov_9fa48("13940"), !values.length)))) {
          if (stryMutAct_9fa48("13941")) {
            {}
          } else {
            stryCov_9fa48("13941");
            return;
          }
        }
        if (stryMutAct_9fa48("13944") ? scores.length === values.length : stryMutAct_9fa48("13943") ? false : stryMutAct_9fa48("13942") ? true : (stryCov_9fa48("13942", "13943", "13944"), scores.length !== values.length)) {
          if (stryMutAct_9fa48("13945")) {
            {}
          } else {
            stryCov_9fa48("13945");
            throw new Error(stryMutAct_9fa48("13946") ? "" : (stryCov_9fa48("13946"), '[[error:invalid-data]]'));
          }
        }
        for (let i = 0; stryMutAct_9fa48("13949") ? i >= scores.length : stryMutAct_9fa48("13948") ? i <= scores.length : stryMutAct_9fa48("13947") ? false : (stryCov_9fa48("13947", "13948", "13949"), i < scores.length); stryMutAct_9fa48("13950") ? i -= 1 : (stryCov_9fa48("13950"), i += 1)) {
          if (stryMutAct_9fa48("13951")) {
            {}
          } else {
            stryCov_9fa48("13951");
            if (stryMutAct_9fa48("13954") ? false : stryMutAct_9fa48("13953") ? true : stryMutAct_9fa48("13952") ? utils.isNumber(scores[i]) : (stryCov_9fa48("13952", "13953", "13954"), !utils.isNumber(scores[i]))) {
              if (stryMutAct_9fa48("13955")) {
                {}
              } else {
                stryCov_9fa48("13955");
                throw new Error(stryMutAct_9fa48("13956") ? `` : (stryCov_9fa48("13956"), `[[error:invalid-score, ${scores[i]}]]`));
              }
            }
          }
        }
        values = values.map(helpers.valueToString);
        const bulk = module.client.collection(stryMutAct_9fa48("13957") ? "" : (stryCov_9fa48("13957"), 'objects')).initializeUnorderedBulkOp();
        for (let i = 0; stryMutAct_9fa48("13960") ? i >= scores.length : stryMutAct_9fa48("13959") ? i <= scores.length : stryMutAct_9fa48("13958") ? false : (stryCov_9fa48("13958", "13959", "13960"), i < scores.length); stryMutAct_9fa48("13961") ? i -= 1 : (stryCov_9fa48("13961"), i += 1)) {
          if (stryMutAct_9fa48("13962")) {
            {}
          } else {
            stryCov_9fa48("13962");
            bulk.find(stryMutAct_9fa48("13963") ? {} : (stryCov_9fa48("13963"), {
              _key: key,
              value: values[i]
            })).upsert().updateOne(stryMutAct_9fa48("13964") ? {} : (stryCov_9fa48("13964"), {
              $set: stryMutAct_9fa48("13965") ? {} : (stryCov_9fa48("13965"), {
                score: parseFloat(scores[i])
              })
            }));
          }
        }
        await bulk.execute();
      }
    }
    module.sortedSetsAdd = async function (keys, scores, value) {
      if (stryMutAct_9fa48("13966")) {
        {}
      } else {
        stryCov_9fa48("13966");
        if (stryMutAct_9fa48("13969") ? !Array.isArray(keys) && !keys.length : stryMutAct_9fa48("13968") ? false : stryMutAct_9fa48("13967") ? true : (stryCov_9fa48("13967", "13968", "13969"), (stryMutAct_9fa48("13970") ? Array.isArray(keys) : (stryCov_9fa48("13970"), !Array.isArray(keys))) || (stryMutAct_9fa48("13971") ? keys.length : (stryCov_9fa48("13971"), !keys.length)))) {
          if (stryMutAct_9fa48("13972")) {
            {}
          } else {
            stryCov_9fa48("13972");
            return;
          }
        }
        const isArrayOfScores = Array.isArray(scores);
        if (stryMutAct_9fa48("13975") ? !isArrayOfScores && !utils.isNumber(scores) && isArrayOfScores && scores.map(s => utils.isNumber(s)).includes(false) : stryMutAct_9fa48("13974") ? false : stryMutAct_9fa48("13973") ? true : (stryCov_9fa48("13973", "13974", "13975"), (stryMutAct_9fa48("13977") ? !isArrayOfScores || !utils.isNumber(scores) : stryMutAct_9fa48("13976") ? false : (stryCov_9fa48("13976", "13977"), (stryMutAct_9fa48("13978") ? isArrayOfScores : (stryCov_9fa48("13978"), !isArrayOfScores)) && (stryMutAct_9fa48("13979") ? utils.isNumber(scores) : (stryCov_9fa48("13979"), !utils.isNumber(scores))))) || (stryMutAct_9fa48("13981") ? isArrayOfScores || scores.map(s => utils.isNumber(s)).includes(false) : stryMutAct_9fa48("13980") ? false : (stryCov_9fa48("13980", "13981"), isArrayOfScores && scores.map(stryMutAct_9fa48("13982") ? () => undefined : (stryCov_9fa48("13982"), s => utils.isNumber(s))).includes(stryMutAct_9fa48("13983") ? true : (stryCov_9fa48("13983"), false)))))) {
          if (stryMutAct_9fa48("13984")) {
            {}
          } else {
            stryCov_9fa48("13984");
            throw new Error(stryMutAct_9fa48("13985") ? `` : (stryCov_9fa48("13985"), `[[error:invalid-score, ${scores}]]`));
          }
        }
        if (stryMutAct_9fa48("13988") ? isArrayOfScores || scores.length !== keys.length : stryMutAct_9fa48("13987") ? false : stryMutAct_9fa48("13986") ? true : (stryCov_9fa48("13986", "13987", "13988"), isArrayOfScores && (stryMutAct_9fa48("13990") ? scores.length === keys.length : stryMutAct_9fa48("13989") ? true : (stryCov_9fa48("13989", "13990"), scores.length !== keys.length)))) {
          if (stryMutAct_9fa48("13991")) {
            {}
          } else {
            stryCov_9fa48("13991");
            throw new Error(stryMutAct_9fa48("13992") ? "" : (stryCov_9fa48("13992"), '[[error:invalid-data]]'));
          }
        }
        value = helpers.valueToString(value);
        const bulk = module.client.collection(stryMutAct_9fa48("13993") ? "" : (stryCov_9fa48("13993"), 'objects')).initializeUnorderedBulkOp();
        for (let i = 0; stryMutAct_9fa48("13996") ? i >= keys.length : stryMutAct_9fa48("13995") ? i <= keys.length : stryMutAct_9fa48("13994") ? false : (stryCov_9fa48("13994", "13995", "13996"), i < keys.length); stryMutAct_9fa48("13997") ? i -= 1 : (stryCov_9fa48("13997"), i += 1)) {
          if (stryMutAct_9fa48("13998")) {
            {}
          } else {
            stryCov_9fa48("13998");
            bulk.find(stryMutAct_9fa48("13999") ? {} : (stryCov_9fa48("13999"), {
              _key: keys[i],
              value: value
            })).upsert().updateOne(stryMutAct_9fa48("14000") ? {} : (stryCov_9fa48("14000"), {
              $set: stryMutAct_9fa48("14001") ? {} : (stryCov_9fa48("14001"), {
                score: parseFloat(isArrayOfScores ? scores[i] : scores)
              })
            }));
          }
        }
        await bulk.execute();
      }
    };
    module.sortedSetAddBulk = async function (data) {
      if (stryMutAct_9fa48("14002")) {
        {}
      } else {
        stryCov_9fa48("14002");
        if (stryMutAct_9fa48("14005") ? !Array.isArray(data) && !data.length : stryMutAct_9fa48("14004") ? false : stryMutAct_9fa48("14003") ? true : (stryCov_9fa48("14003", "14004", "14005"), (stryMutAct_9fa48("14006") ? Array.isArray(data) : (stryCov_9fa48("14006"), !Array.isArray(data))) || (stryMutAct_9fa48("14007") ? data.length : (stryCov_9fa48("14007"), !data.length)))) {
          if (stryMutAct_9fa48("14008")) {
            {}
          } else {
            stryCov_9fa48("14008");
            return;
          }
        }
        const bulk = module.client.collection(stryMutAct_9fa48("14009") ? "" : (stryCov_9fa48("14009"), 'objects')).initializeUnorderedBulkOp();
        data.forEach(item => {
          if (stryMutAct_9fa48("14010")) {
            {}
          } else {
            stryCov_9fa48("14010");
            if (stryMutAct_9fa48("14013") ? false : stryMutAct_9fa48("14012") ? true : stryMutAct_9fa48("14011") ? utils.isNumber(item[1]) : (stryCov_9fa48("14011", "14012", "14013"), !utils.isNumber(item[1]))) {
              if (stryMutAct_9fa48("14014")) {
                {}
              } else {
                stryCov_9fa48("14014");
                throw new Error(stryMutAct_9fa48("14015") ? `` : (stryCov_9fa48("14015"), `[[error:invalid-score, ${item[1]}]]`));
              }
            }
            bulk.find(stryMutAct_9fa48("14016") ? {} : (stryCov_9fa48("14016"), {
              _key: item[0],
              value: String(item[2])
            })).upsert().updateOne(stryMutAct_9fa48("14017") ? {} : (stryCov_9fa48("14017"), {
              $set: stryMutAct_9fa48("14018") ? {} : (stryCov_9fa48("14018"), {
                score: parseFloat(item[1])
              })
            }));
          }
        });
        await bulk.execute();
      }
    };
  }
};