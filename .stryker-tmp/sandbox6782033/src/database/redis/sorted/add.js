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
  if (stryMutAct_9fa48("17480")) {
    {}
  } else {
    stryCov_9fa48("17480");
    const helpers = require('../helpers');
    const utils = require('../../../utils');
    module.sortedSetAdd = async function (key, score, value) {
      if (stryMutAct_9fa48("17481")) {
        {}
      } else {
        stryCov_9fa48("17481");
        if (stryMutAct_9fa48("17484") ? false : stryMutAct_9fa48("17483") ? true : stryMutAct_9fa48("17482") ? key : (stryCov_9fa48("17482", "17483", "17484"), !key)) {
          if (stryMutAct_9fa48("17485")) {
            {}
          } else {
            stryCov_9fa48("17485");
            return;
          }
        }
        if (stryMutAct_9fa48("17488") ? Array.isArray(score) || Array.isArray(value) : stryMutAct_9fa48("17487") ? false : stryMutAct_9fa48("17486") ? true : (stryCov_9fa48("17486", "17487", "17488"), Array.isArray(score) && Array.isArray(value))) {
          if (stryMutAct_9fa48("17489")) {
            {}
          } else {
            stryCov_9fa48("17489");
            return await sortedSetAddMulti(key, score, value);
          }
        }
        if (stryMutAct_9fa48("17492") ? false : stryMutAct_9fa48("17491") ? true : stryMutAct_9fa48("17490") ? utils.isNumber(score) : (stryCov_9fa48("17490", "17491", "17492"), !utils.isNumber(score))) {
          if (stryMutAct_9fa48("17493")) {
            {}
          } else {
            stryCov_9fa48("17493");
            throw new Error(stryMutAct_9fa48("17494") ? `` : (stryCov_9fa48("17494"), `[[error:invalid-score, ${score}]]`));
          }
        }
        await module.client.zadd(key, score, String(value));
      }
    };
    async function sortedSetAddMulti(key, scores, values) {
      if (stryMutAct_9fa48("17495")) {
        {}
      } else {
        stryCov_9fa48("17495");
        if (stryMutAct_9fa48("17498") ? !scores.length && !values.length : stryMutAct_9fa48("17497") ? false : stryMutAct_9fa48("17496") ? true : (stryCov_9fa48("17496", "17497", "17498"), (stryMutAct_9fa48("17499") ? scores.length : (stryCov_9fa48("17499"), !scores.length)) || (stryMutAct_9fa48("17500") ? values.length : (stryCov_9fa48("17500"), !values.length)))) {
          if (stryMutAct_9fa48("17501")) {
            {}
          } else {
            stryCov_9fa48("17501");
            return;
          }
        }
        if (stryMutAct_9fa48("17504") ? scores.length === values.length : stryMutAct_9fa48("17503") ? false : stryMutAct_9fa48("17502") ? true : (stryCov_9fa48("17502", "17503", "17504"), scores.length !== values.length)) {
          if (stryMutAct_9fa48("17505")) {
            {}
          } else {
            stryCov_9fa48("17505");
            throw new Error(stryMutAct_9fa48("17506") ? "" : (stryCov_9fa48("17506"), '[[error:invalid-data]]'));
          }
        }
        for (let i = 0; stryMutAct_9fa48("17509") ? i >= scores.length : stryMutAct_9fa48("17508") ? i <= scores.length : stryMutAct_9fa48("17507") ? false : (stryCov_9fa48("17507", "17508", "17509"), i < scores.length); stryMutAct_9fa48("17510") ? i -= 1 : (stryCov_9fa48("17510"), i += 1)) {
          if (stryMutAct_9fa48("17511")) {
            {}
          } else {
            stryCov_9fa48("17511");
            if (stryMutAct_9fa48("17514") ? false : stryMutAct_9fa48("17513") ? true : stryMutAct_9fa48("17512") ? utils.isNumber(scores[i]) : (stryCov_9fa48("17512", "17513", "17514"), !utils.isNumber(scores[i]))) {
              if (stryMutAct_9fa48("17515")) {
                {}
              } else {
                stryCov_9fa48("17515");
                throw new Error(stryMutAct_9fa48("17516") ? `` : (stryCov_9fa48("17516"), `[[error:invalid-score, ${scores[i]}]]`));
              }
            }
          }
        }
        const args = stryMutAct_9fa48("17517") ? [] : (stryCov_9fa48("17517"), [key]);
        for (let i = 0; stryMutAct_9fa48("17520") ? i >= scores.length : stryMutAct_9fa48("17519") ? i <= scores.length : stryMutAct_9fa48("17518") ? false : (stryCov_9fa48("17518", "17519", "17520"), i < scores.length); stryMutAct_9fa48("17521") ? i -= 1 : (stryCov_9fa48("17521"), i += 1)) {
          if (stryMutAct_9fa48("17522")) {
            {}
          } else {
            stryCov_9fa48("17522");
            args.push(scores[i], String(values[i]));
          }
        }
        await module.client.zadd(args);
      }
    }
    module.sortedSetsAdd = async function (keys, scores, value) {
      if (stryMutAct_9fa48("17523")) {
        {}
      } else {
        stryCov_9fa48("17523");
        if (stryMutAct_9fa48("17526") ? !Array.isArray(keys) && !keys.length : stryMutAct_9fa48("17525") ? false : stryMutAct_9fa48("17524") ? true : (stryCov_9fa48("17524", "17525", "17526"), (stryMutAct_9fa48("17527") ? Array.isArray(keys) : (stryCov_9fa48("17527"), !Array.isArray(keys))) || (stryMutAct_9fa48("17528") ? keys.length : (stryCov_9fa48("17528"), !keys.length)))) {
          if (stryMutAct_9fa48("17529")) {
            {}
          } else {
            stryCov_9fa48("17529");
            return;
          }
        }
        const isArrayOfScores = Array.isArray(scores);
        if (stryMutAct_9fa48("17532") ? !isArrayOfScores && !utils.isNumber(scores) && isArrayOfScores && scores.map(s => utils.isNumber(s)).includes(false) : stryMutAct_9fa48("17531") ? false : stryMutAct_9fa48("17530") ? true : (stryCov_9fa48("17530", "17531", "17532"), (stryMutAct_9fa48("17534") ? !isArrayOfScores || !utils.isNumber(scores) : stryMutAct_9fa48("17533") ? false : (stryCov_9fa48("17533", "17534"), (stryMutAct_9fa48("17535") ? isArrayOfScores : (stryCov_9fa48("17535"), !isArrayOfScores)) && (stryMutAct_9fa48("17536") ? utils.isNumber(scores) : (stryCov_9fa48("17536"), !utils.isNumber(scores))))) || (stryMutAct_9fa48("17538") ? isArrayOfScores || scores.map(s => utils.isNumber(s)).includes(false) : stryMutAct_9fa48("17537") ? false : (stryCov_9fa48("17537", "17538"), isArrayOfScores && scores.map(stryMutAct_9fa48("17539") ? () => undefined : (stryCov_9fa48("17539"), s => utils.isNumber(s))).includes(stryMutAct_9fa48("17540") ? true : (stryCov_9fa48("17540"), false)))))) {
          if (stryMutAct_9fa48("17541")) {
            {}
          } else {
            stryCov_9fa48("17541");
            throw new Error(stryMutAct_9fa48("17542") ? `` : (stryCov_9fa48("17542"), `[[error:invalid-score, ${scores}]]`));
          }
        }
        if (stryMutAct_9fa48("17545") ? isArrayOfScores || scores.length !== keys.length : stryMutAct_9fa48("17544") ? false : stryMutAct_9fa48("17543") ? true : (stryCov_9fa48("17543", "17544", "17545"), isArrayOfScores && (stryMutAct_9fa48("17547") ? scores.length === keys.length : stryMutAct_9fa48("17546") ? true : (stryCov_9fa48("17546", "17547"), scores.length !== keys.length)))) {
          if (stryMutAct_9fa48("17548")) {
            {}
          } else {
            stryCov_9fa48("17548");
            throw new Error(stryMutAct_9fa48("17549") ? "" : (stryCov_9fa48("17549"), '[[error:invalid-data]]'));
          }
        }
        const batch = module.client.batch();
        for (let i = 0; stryMutAct_9fa48("17552") ? i >= keys.length : stryMutAct_9fa48("17551") ? i <= keys.length : stryMutAct_9fa48("17550") ? false : (stryCov_9fa48("17550", "17551", "17552"), i < keys.length); stryMutAct_9fa48("17553") ? i -= 1 : (stryCov_9fa48("17553"), i += 1)) {
          if (stryMutAct_9fa48("17554")) {
            {}
          } else {
            stryCov_9fa48("17554");
            if (stryMutAct_9fa48("17556") ? false : stryMutAct_9fa48("17555") ? true : (stryCov_9fa48("17555", "17556"), keys[i])) {
              if (stryMutAct_9fa48("17557")) {
                {}
              } else {
                stryCov_9fa48("17557");
                batch.zadd(keys[i], isArrayOfScores ? scores[i] : scores, String(value));
              }
            }
          }
        }
        await helpers.execBatch(batch);
      }
    };
    module.sortedSetAddBulk = async function (data) {
      if (stryMutAct_9fa48("17558")) {
        {}
      } else {
        stryCov_9fa48("17558");
        if (stryMutAct_9fa48("17561") ? !Array.isArray(data) && !data.length : stryMutAct_9fa48("17560") ? false : stryMutAct_9fa48("17559") ? true : (stryCov_9fa48("17559", "17560", "17561"), (stryMutAct_9fa48("17562") ? Array.isArray(data) : (stryCov_9fa48("17562"), !Array.isArray(data))) || (stryMutAct_9fa48("17563") ? data.length : (stryCov_9fa48("17563"), !data.length)))) {
          if (stryMutAct_9fa48("17564")) {
            {}
          } else {
            stryCov_9fa48("17564");
            return;
          }
        }
        const batch = module.client.batch();
        data.forEach(item => {
          if (stryMutAct_9fa48("17565")) {
            {}
          } else {
            stryCov_9fa48("17565");
            if (stryMutAct_9fa48("17568") ? false : stryMutAct_9fa48("17567") ? true : stryMutAct_9fa48("17566") ? utils.isNumber(item[1]) : (stryCov_9fa48("17566", "17567", "17568"), !utils.isNumber(item[1]))) {
              if (stryMutAct_9fa48("17569")) {
                {}
              } else {
                stryCov_9fa48("17569");
                throw new Error(stryMutAct_9fa48("17570") ? `` : (stryCov_9fa48("17570"), `[[error:invalid-score, ${item[1]}]]`));
              }
            }
            batch.zadd(item[0], item[1], item[2]);
          }
        });
        await helpers.execBatch(batch);
      }
    };
  }
};