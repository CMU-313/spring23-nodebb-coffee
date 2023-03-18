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
  if (stryMutAct_9fa48("17692")) {
    {}
  } else {
    stryCov_9fa48("17692");
    const utils = require('../../utils');
    const helpers = require('./helpers');
    const dbHelpers = require('../helpers');
    require('./sorted/add')(module);
    require('./sorted/remove')(module);
    require('./sorted/union')(module);
    require('./sorted/intersect')(module);
    module.getSortedSetRange = async function (key, start, stop) {
      if (stryMutAct_9fa48("17693")) {
        {}
      } else {
        stryCov_9fa48("17693");
        return await sortedSetRange(stryMutAct_9fa48("17694") ? "" : (stryCov_9fa48("17694"), 'zrange'), key, start, stop, stryMutAct_9fa48("17695") ? "" : (stryCov_9fa48("17695"), '-inf'), stryMutAct_9fa48("17696") ? "" : (stryCov_9fa48("17696"), '+inf'), stryMutAct_9fa48("17697") ? true : (stryCov_9fa48("17697"), false));
      }
    };
    module.getSortedSetRevRange = async function (key, start, stop) {
      if (stryMutAct_9fa48("17698")) {
        {}
      } else {
        stryCov_9fa48("17698");
        return await sortedSetRange(stryMutAct_9fa48("17699") ? "" : (stryCov_9fa48("17699"), 'zrevrange'), key, start, stop, stryMutAct_9fa48("17700") ? "" : (stryCov_9fa48("17700"), '-inf'), stryMutAct_9fa48("17701") ? "" : (stryCov_9fa48("17701"), '+inf'), stryMutAct_9fa48("17702") ? true : (stryCov_9fa48("17702"), false));
      }
    };
    module.getSortedSetRangeWithScores = async function (key, start, stop) {
      if (stryMutAct_9fa48("17703")) {
        {}
      } else {
        stryCov_9fa48("17703");
        return await sortedSetRange(stryMutAct_9fa48("17704") ? "" : (stryCov_9fa48("17704"), 'zrange'), key, start, stop, stryMutAct_9fa48("17705") ? "" : (stryCov_9fa48("17705"), '-inf'), stryMutAct_9fa48("17706") ? "" : (stryCov_9fa48("17706"), '+inf'), stryMutAct_9fa48("17707") ? false : (stryCov_9fa48("17707"), true));
      }
    };
    module.getSortedSetRevRangeWithScores = async function (key, start, stop) {
      if (stryMutAct_9fa48("17708")) {
        {}
      } else {
        stryCov_9fa48("17708");
        return await sortedSetRange(stryMutAct_9fa48("17709") ? "" : (stryCov_9fa48("17709"), 'zrevrange'), key, start, stop, stryMutAct_9fa48("17710") ? "" : (stryCov_9fa48("17710"), '-inf'), stryMutAct_9fa48("17711") ? "" : (stryCov_9fa48("17711"), '+inf'), stryMutAct_9fa48("17712") ? false : (stryCov_9fa48("17712"), true));
      }
    };
    async function sortedSetRange(method, key, start, stop, min, max, withScores) {
      if (stryMutAct_9fa48("17713")) {
        {}
      } else {
        stryCov_9fa48("17713");
        if (stryMutAct_9fa48("17715") ? false : stryMutAct_9fa48("17714") ? true : (stryCov_9fa48("17714", "17715"), Array.isArray(key))) {
          if (stryMutAct_9fa48("17716")) {
            {}
          } else {
            stryCov_9fa48("17716");
            if (stryMutAct_9fa48("17719") ? false : stryMutAct_9fa48("17718") ? true : stryMutAct_9fa48("17717") ? key.length : (stryCov_9fa48("17717", "17718", "17719"), !key.length)) {
              if (stryMutAct_9fa48("17720")) {
                {}
              } else {
                stryCov_9fa48("17720");
                return stryMutAct_9fa48("17721") ? ["Stryker was here"] : (stryCov_9fa48("17721"), []);
              }
            }
            const batch = module.client.batch();
            key.forEach(stryMutAct_9fa48("17722") ? () => undefined : (stryCov_9fa48("17722"), key => batch[method](genParams(method, key, 0, stop, min, max, stryMutAct_9fa48("17723") ? false : (stryCov_9fa48("17723"), true)))));
            const data = await helpers.execBatch(batch);
            const batchData = data.map(stryMutAct_9fa48("17724") ? () => undefined : (stryCov_9fa48("17724"), setData => helpers.zsetToObjectArray(setData)));
            let objects = dbHelpers.mergeBatch(batchData, 0, stop, (stryMutAct_9fa48("17727") ? method !== 'zrange' : stryMutAct_9fa48("17726") ? false : stryMutAct_9fa48("17725") ? true : (stryCov_9fa48("17725", "17726", "17727"), method === (stryMutAct_9fa48("17728") ? "" : (stryCov_9fa48("17728"), 'zrange')))) ? 1 : stryMutAct_9fa48("17729") ? +1 : (stryCov_9fa48("17729"), -1));
            if (stryMutAct_9fa48("17733") ? start <= 0 : stryMutAct_9fa48("17732") ? start >= 0 : stryMutAct_9fa48("17731") ? false : stryMutAct_9fa48("17730") ? true : (stryCov_9fa48("17730", "17731", "17732", "17733"), start > 0)) {
              if (stryMutAct_9fa48("17734")) {
                {}
              } else {
                stryCov_9fa48("17734");
                objects = stryMutAct_9fa48("17735") ? objects : (stryCov_9fa48("17735"), objects.slice(start, (stryMutAct_9fa48("17738") ? stop === -1 : stryMutAct_9fa48("17737") ? false : stryMutAct_9fa48("17736") ? true : (stryCov_9fa48("17736", "17737", "17738"), stop !== (stryMutAct_9fa48("17739") ? +1 : (stryCov_9fa48("17739"), -1)))) ? stryMutAct_9fa48("17740") ? stop - 1 : (stryCov_9fa48("17740"), stop + 1) : undefined));
              }
            }
            if (stryMutAct_9fa48("17743") ? false : stryMutAct_9fa48("17742") ? true : stryMutAct_9fa48("17741") ? withScores : (stryCov_9fa48("17741", "17742", "17743"), !withScores)) {
              if (stryMutAct_9fa48("17744")) {
                {}
              } else {
                stryCov_9fa48("17744");
                objects = objects.map(stryMutAct_9fa48("17745") ? () => undefined : (stryCov_9fa48("17745"), item => item.value));
              }
            }
            return objects;
          }
        }
        const params = genParams(method, key, start, stop, min, max, withScores);
        const data = await module.client[method](params);
        if (stryMutAct_9fa48("17748") ? false : stryMutAct_9fa48("17747") ? true : stryMutAct_9fa48("17746") ? withScores : (stryCov_9fa48("17746", "17747", "17748"), !withScores)) {
          if (stryMutAct_9fa48("17749")) {
            {}
          } else {
            stryCov_9fa48("17749");
            return data;
          }
        }
        const objects = helpers.zsetToObjectArray(data);
        return objects;
      }
    }
    function genParams(method, key, start, stop, min, max, withScores) {
      if (stryMutAct_9fa48("17750")) {
        {}
      } else {
        stryCov_9fa48("17750");
        const params = stryMutAct_9fa48("17751") ? {} : (stryCov_9fa48("17751"), {
          zrevrange: stryMutAct_9fa48("17752") ? [] : (stryCov_9fa48("17752"), [key, start, stop]),
          zrange: stryMutAct_9fa48("17753") ? [] : (stryCov_9fa48("17753"), [key, start, stop]),
          zrangebyscore: stryMutAct_9fa48("17754") ? [] : (stryCov_9fa48("17754"), [key, min, max]),
          zrevrangebyscore: stryMutAct_9fa48("17755") ? [] : (stryCov_9fa48("17755"), [key, max, min])
        });
        if (stryMutAct_9fa48("17757") ? false : stryMutAct_9fa48("17756") ? true : (stryCov_9fa48("17756", "17757"), withScores)) {
          if (stryMutAct_9fa48("17758")) {
            {}
          } else {
            stryCov_9fa48("17758");
            params[method].push(stryMutAct_9fa48("17759") ? "" : (stryCov_9fa48("17759"), 'WITHSCORES'));
          }
        }
        if (stryMutAct_9fa48("17762") ? method === 'zrangebyscore' && method === 'zrevrangebyscore' : stryMutAct_9fa48("17761") ? false : stryMutAct_9fa48("17760") ? true : (stryCov_9fa48("17760", "17761", "17762"), (stryMutAct_9fa48("17764") ? method !== 'zrangebyscore' : stryMutAct_9fa48("17763") ? false : (stryCov_9fa48("17763", "17764"), method === (stryMutAct_9fa48("17765") ? "" : (stryCov_9fa48("17765"), 'zrangebyscore')))) || (stryMutAct_9fa48("17767") ? method !== 'zrevrangebyscore' : stryMutAct_9fa48("17766") ? false : (stryCov_9fa48("17766", "17767"), method === (stryMutAct_9fa48("17768") ? "" : (stryCov_9fa48("17768"), 'zrevrangebyscore')))))) {
          if (stryMutAct_9fa48("17769")) {
            {}
          } else {
            stryCov_9fa48("17769");
            const count = (stryMutAct_9fa48("17772") ? stop === -1 : stryMutAct_9fa48("17771") ? false : stryMutAct_9fa48("17770") ? true : (stryCov_9fa48("17770", "17771", "17772"), stop !== (stryMutAct_9fa48("17773") ? +1 : (stryCov_9fa48("17773"), -1)))) ? stryMutAct_9fa48("17774") ? stop - start - 1 : (stryCov_9fa48("17774"), (stryMutAct_9fa48("17775") ? stop + start : (stryCov_9fa48("17775"), stop - start)) + 1) : stop;
            params[method].push(stryMutAct_9fa48("17776") ? "" : (stryCov_9fa48("17776"), 'LIMIT'), start, count);
          }
        }
        return params[method];
      }
    }
    module.getSortedSetRangeByScore = async function (key, start, count, min, max) {
      if (stryMutAct_9fa48("17777")) {
        {}
      } else {
        stryCov_9fa48("17777");
        return await sortedSetRangeByScore(stryMutAct_9fa48("17778") ? "" : (stryCov_9fa48("17778"), 'zrangebyscore'), key, start, count, min, max, stryMutAct_9fa48("17779") ? true : (stryCov_9fa48("17779"), false));
      }
    };
    module.getSortedSetRevRangeByScore = async function (key, start, count, max, min) {
      if (stryMutAct_9fa48("17780")) {
        {}
      } else {
        stryCov_9fa48("17780");
        return await sortedSetRangeByScore(stryMutAct_9fa48("17781") ? "" : (stryCov_9fa48("17781"), 'zrevrangebyscore'), key, start, count, min, max, stryMutAct_9fa48("17782") ? true : (stryCov_9fa48("17782"), false));
      }
    };
    module.getSortedSetRangeByScoreWithScores = async function (key, start, count, min, max) {
      if (stryMutAct_9fa48("17783")) {
        {}
      } else {
        stryCov_9fa48("17783");
        return await sortedSetRangeByScore(stryMutAct_9fa48("17784") ? "" : (stryCov_9fa48("17784"), 'zrangebyscore'), key, start, count, min, max, stryMutAct_9fa48("17785") ? false : (stryCov_9fa48("17785"), true));
      }
    };
    module.getSortedSetRevRangeByScoreWithScores = async function (key, start, count, max, min) {
      if (stryMutAct_9fa48("17786")) {
        {}
      } else {
        stryCov_9fa48("17786");
        return await sortedSetRangeByScore(stryMutAct_9fa48("17787") ? "" : (stryCov_9fa48("17787"), 'zrevrangebyscore'), key, start, count, min, max, stryMutAct_9fa48("17788") ? false : (stryCov_9fa48("17788"), true));
      }
    };
    async function sortedSetRangeByScore(method, key, start, count, min, max, withScores) {
      if (stryMutAct_9fa48("17789")) {
        {}
      } else {
        stryCov_9fa48("17789");
        if (stryMutAct_9fa48("17792") ? parseInt(count, 10) !== 0 : stryMutAct_9fa48("17791") ? false : stryMutAct_9fa48("17790") ? true : (stryCov_9fa48("17790", "17791", "17792"), parseInt(count, 10) === 0)) {
          if (stryMutAct_9fa48("17793")) {
            {}
          } else {
            stryCov_9fa48("17793");
            return stryMutAct_9fa48("17794") ? ["Stryker was here"] : (stryCov_9fa48("17794"), []);
          }
        }
        const stop = (stryMutAct_9fa48("17797") ? parseInt(count, 10) !== -1 : stryMutAct_9fa48("17796") ? false : stryMutAct_9fa48("17795") ? true : (stryCov_9fa48("17795", "17796", "17797"), parseInt(count, 10) === (stryMutAct_9fa48("17798") ? +1 : (stryCov_9fa48("17798"), -1)))) ? stryMutAct_9fa48("17799") ? +1 : (stryCov_9fa48("17799"), -1) : stryMutAct_9fa48("17800") ? start + count + 1 : (stryCov_9fa48("17800"), (stryMutAct_9fa48("17801") ? start - count : (stryCov_9fa48("17801"), start + count)) - 1);
        return await sortedSetRange(method, key, start, stop, min, max, withScores);
      }
    }
    module.sortedSetCount = async function (key, min, max) {
      if (stryMutAct_9fa48("17802")) {
        {}
      } else {
        stryCov_9fa48("17802");
        return await module.client.zcount(key, min, max);
      }
    };
    module.sortedSetCard = async function (key) {
      if (stryMutAct_9fa48("17803")) {
        {}
      } else {
        stryCov_9fa48("17803");
        return await module.client.zcard(key);
      }
    };
    module.sortedSetsCard = async function (keys) {
      if (stryMutAct_9fa48("17804")) {
        {}
      } else {
        stryCov_9fa48("17804");
        if (stryMutAct_9fa48("17807") ? !Array.isArray(keys) && !keys.length : stryMutAct_9fa48("17806") ? false : stryMutAct_9fa48("17805") ? true : (stryCov_9fa48("17805", "17806", "17807"), (stryMutAct_9fa48("17808") ? Array.isArray(keys) : (stryCov_9fa48("17808"), !Array.isArray(keys))) || (stryMutAct_9fa48("17809") ? keys.length : (stryCov_9fa48("17809"), !keys.length)))) {
          if (stryMutAct_9fa48("17810")) {
            {}
          } else {
            stryCov_9fa48("17810");
            return stryMutAct_9fa48("17811") ? ["Stryker was here"] : (stryCov_9fa48("17811"), []);
          }
        }
        const batch = module.client.batch();
        keys.forEach(stryMutAct_9fa48("17812") ? () => undefined : (stryCov_9fa48("17812"), k => batch.zcard(String(k))));
        return await helpers.execBatch(batch);
      }
    };
    module.sortedSetsCardSum = async function (keys) {
      if (stryMutAct_9fa48("17813")) {
        {}
      } else {
        stryCov_9fa48("17813");
        if (stryMutAct_9fa48("17816") ? !keys && Array.isArray(keys) && !keys.length : stryMutAct_9fa48("17815") ? false : stryMutAct_9fa48("17814") ? true : (stryCov_9fa48("17814", "17815", "17816"), (stryMutAct_9fa48("17817") ? keys : (stryCov_9fa48("17817"), !keys)) || (stryMutAct_9fa48("17819") ? Array.isArray(keys) || !keys.length : stryMutAct_9fa48("17818") ? false : (stryCov_9fa48("17818", "17819"), Array.isArray(keys) && (stryMutAct_9fa48("17820") ? keys.length : (stryCov_9fa48("17820"), !keys.length)))))) {
          if (stryMutAct_9fa48("17821")) {
            {}
          } else {
            stryCov_9fa48("17821");
            return 0;
          }
        }
        if (stryMutAct_9fa48("17824") ? false : stryMutAct_9fa48("17823") ? true : stryMutAct_9fa48("17822") ? Array.isArray(keys) : (stryCov_9fa48("17822", "17823", "17824"), !Array.isArray(keys))) {
          if (stryMutAct_9fa48("17825")) {
            {}
          } else {
            stryCov_9fa48("17825");
            keys = stryMutAct_9fa48("17826") ? [] : (stryCov_9fa48("17826"), [keys]);
          }
        }
        const counts = await module.sortedSetsCard(keys);
        const sum = counts.reduce(stryMutAct_9fa48("17827") ? () => undefined : (stryCov_9fa48("17827"), (acc, val) => stryMutAct_9fa48("17828") ? acc - val : (stryCov_9fa48("17828"), acc + val)), 0);
        return sum;
      }
    };
    module.sortedSetRank = async function (key, value) {
      if (stryMutAct_9fa48("17829")) {
        {}
      } else {
        stryCov_9fa48("17829");
        return await module.client.zrank(key, value);
      }
    };
    module.sortedSetRevRank = async function (key, value) {
      if (stryMutAct_9fa48("17830")) {
        {}
      } else {
        stryCov_9fa48("17830");
        return await module.client.zrevrank(key, value);
      }
    };
    module.sortedSetsRanks = async function (keys, values) {
      if (stryMutAct_9fa48("17831")) {
        {}
      } else {
        stryCov_9fa48("17831");
        const batch = module.client.batch();
        for (let i = 0; stryMutAct_9fa48("17834") ? i >= values.length : stryMutAct_9fa48("17833") ? i <= values.length : stryMutAct_9fa48("17832") ? false : (stryCov_9fa48("17832", "17833", "17834"), i < values.length); stryMutAct_9fa48("17835") ? i -= 1 : (stryCov_9fa48("17835"), i += 1)) {
          if (stryMutAct_9fa48("17836")) {
            {}
          } else {
            stryCov_9fa48("17836");
            batch.zrank(keys[i], String(values[i]));
          }
        }
        return await helpers.execBatch(batch);
      }
    };
    module.sortedSetsRevRanks = async function (keys, values) {
      if (stryMutAct_9fa48("17837")) {
        {}
      } else {
        stryCov_9fa48("17837");
        const batch = module.client.batch();
        for (let i = 0; stryMutAct_9fa48("17840") ? i >= values.length : stryMutAct_9fa48("17839") ? i <= values.length : stryMutAct_9fa48("17838") ? false : (stryCov_9fa48("17838", "17839", "17840"), i < values.length); stryMutAct_9fa48("17841") ? i -= 1 : (stryCov_9fa48("17841"), i += 1)) {
          if (stryMutAct_9fa48("17842")) {
            {}
          } else {
            stryCov_9fa48("17842");
            batch.zrevrank(keys[i], String(values[i]));
          }
        }
        return await helpers.execBatch(batch);
      }
    };
    module.sortedSetRanks = async function (key, values) {
      if (stryMutAct_9fa48("17843")) {
        {}
      } else {
        stryCov_9fa48("17843");
        const batch = module.client.batch();
        for (let i = 0; stryMutAct_9fa48("17846") ? i >= values.length : stryMutAct_9fa48("17845") ? i <= values.length : stryMutAct_9fa48("17844") ? false : (stryCov_9fa48("17844", "17845", "17846"), i < values.length); stryMutAct_9fa48("17847") ? i -= 1 : (stryCov_9fa48("17847"), i += 1)) {
          if (stryMutAct_9fa48("17848")) {
            {}
          } else {
            stryCov_9fa48("17848");
            batch.zrank(key, String(values[i]));
          }
        }
        return await helpers.execBatch(batch);
      }
    };
    module.sortedSetRevRanks = async function (key, values) {
      if (stryMutAct_9fa48("17849")) {
        {}
      } else {
        stryCov_9fa48("17849");
        const batch = module.client.batch();
        for (let i = 0; stryMutAct_9fa48("17852") ? i >= values.length : stryMutAct_9fa48("17851") ? i <= values.length : stryMutAct_9fa48("17850") ? false : (stryCov_9fa48("17850", "17851", "17852"), i < values.length); stryMutAct_9fa48("17853") ? i -= 1 : (stryCov_9fa48("17853"), i += 1)) {
          if (stryMutAct_9fa48("17854")) {
            {}
          } else {
            stryCov_9fa48("17854");
            batch.zrevrank(key, String(values[i]));
          }
        }
        return await helpers.execBatch(batch);
      }
    };
    module.sortedSetScore = async function (key, value) {
      if (stryMutAct_9fa48("17855")) {
        {}
      } else {
        stryCov_9fa48("17855");
        if (stryMutAct_9fa48("17858") ? !key && value === undefined : stryMutAct_9fa48("17857") ? false : stryMutAct_9fa48("17856") ? true : (stryCov_9fa48("17856", "17857", "17858"), (stryMutAct_9fa48("17859") ? key : (stryCov_9fa48("17859"), !key)) || (stryMutAct_9fa48("17861") ? value !== undefined : stryMutAct_9fa48("17860") ? false : (stryCov_9fa48("17860", "17861"), value === undefined)))) {
          if (stryMutAct_9fa48("17862")) {
            {}
          } else {
            stryCov_9fa48("17862");
            return null;
          }
        }
        const score = await module.client.zscore(key, value);
        return (stryMutAct_9fa48("17865") ? score !== null : stryMutAct_9fa48("17864") ? false : stryMutAct_9fa48("17863") ? true : (stryCov_9fa48("17863", "17864", "17865"), score === null)) ? score : parseFloat(score);
      }
    };
    module.sortedSetsScore = async function (keys, value) {
      if (stryMutAct_9fa48("17866")) {
        {}
      } else {
        stryCov_9fa48("17866");
        if (stryMutAct_9fa48("17869") ? !Array.isArray(keys) && !keys.length : stryMutAct_9fa48("17868") ? false : stryMutAct_9fa48("17867") ? true : (stryCov_9fa48("17867", "17868", "17869"), (stryMutAct_9fa48("17870") ? Array.isArray(keys) : (stryCov_9fa48("17870"), !Array.isArray(keys))) || (stryMutAct_9fa48("17871") ? keys.length : (stryCov_9fa48("17871"), !keys.length)))) {
          if (stryMutAct_9fa48("17872")) {
            {}
          } else {
            stryCov_9fa48("17872");
            return stryMutAct_9fa48("17873") ? ["Stryker was here"] : (stryCov_9fa48("17873"), []);
          }
        }
        const batch = module.client.batch();
        keys.forEach(stryMutAct_9fa48("17874") ? () => undefined : (stryCov_9fa48("17874"), key => batch.zscore(String(key), String(value))));
        const scores = await helpers.execBatch(batch);
        return scores.map(stryMutAct_9fa48("17875") ? () => undefined : (stryCov_9fa48("17875"), d => (stryMutAct_9fa48("17878") ? d !== null : stryMutAct_9fa48("17877") ? false : stryMutAct_9fa48("17876") ? true : (stryCov_9fa48("17876", "17877", "17878"), d === null)) ? d : parseFloat(d)));
      }
    };
    module.sortedSetScores = async function (key, values) {
      if (stryMutAct_9fa48("17879")) {
        {}
      } else {
        stryCov_9fa48("17879");
        if (stryMutAct_9fa48("17882") ? false : stryMutAct_9fa48("17881") ? true : stryMutAct_9fa48("17880") ? values.length : (stryCov_9fa48("17880", "17881", "17882"), !values.length)) {
          if (stryMutAct_9fa48("17883")) {
            {}
          } else {
            stryCov_9fa48("17883");
            return stryMutAct_9fa48("17884") ? ["Stryker was here"] : (stryCov_9fa48("17884"), []);
          }
        }
        const batch = module.client.batch();
        values.forEach(stryMutAct_9fa48("17885") ? () => undefined : (stryCov_9fa48("17885"), value => batch.zscore(String(key), String(value))));
        const scores = await helpers.execBatch(batch);
        return scores.map(stryMutAct_9fa48("17886") ? () => undefined : (stryCov_9fa48("17886"), d => (stryMutAct_9fa48("17889") ? d !== null : stryMutAct_9fa48("17888") ? false : stryMutAct_9fa48("17887") ? true : (stryCov_9fa48("17887", "17888", "17889"), d === null)) ? d : parseFloat(d)));
      }
    };
    module.isSortedSetMember = async function (key, value) {
      if (stryMutAct_9fa48("17890")) {
        {}
      } else {
        stryCov_9fa48("17890");
        const score = await module.sortedSetScore(key, value);
        return utils.isNumber(score);
      }
    };
    module.isSortedSetMembers = async function (key, values) {
      if (stryMutAct_9fa48("17891")) {
        {}
      } else {
        stryCov_9fa48("17891");
        if (stryMutAct_9fa48("17894") ? false : stryMutAct_9fa48("17893") ? true : stryMutAct_9fa48("17892") ? values.length : (stryCov_9fa48("17892", "17893", "17894"), !values.length)) {
          if (stryMutAct_9fa48("17895")) {
            {}
          } else {
            stryCov_9fa48("17895");
            return stryMutAct_9fa48("17896") ? ["Stryker was here"] : (stryCov_9fa48("17896"), []);
          }
        }
        const batch = module.client.batch();
        values.forEach(stryMutAct_9fa48("17897") ? () => undefined : (stryCov_9fa48("17897"), v => batch.zscore(key, String(v))));
        const results = await helpers.execBatch(batch);
        return results.map(utils.isNumber);
      }
    };
    module.isMemberOfSortedSets = async function (keys, value) {
      if (stryMutAct_9fa48("17898")) {
        {}
      } else {
        stryCov_9fa48("17898");
        if (stryMutAct_9fa48("17901") ? !Array.isArray(keys) && !keys.length : stryMutAct_9fa48("17900") ? false : stryMutAct_9fa48("17899") ? true : (stryCov_9fa48("17899", "17900", "17901"), (stryMutAct_9fa48("17902") ? Array.isArray(keys) : (stryCov_9fa48("17902"), !Array.isArray(keys))) || (stryMutAct_9fa48("17903") ? keys.length : (stryCov_9fa48("17903"), !keys.length)))) {
          if (stryMutAct_9fa48("17904")) {
            {}
          } else {
            stryCov_9fa48("17904");
            return stryMutAct_9fa48("17905") ? ["Stryker was here"] : (stryCov_9fa48("17905"), []);
          }
        }
        const batch = module.client.batch();
        keys.forEach(stryMutAct_9fa48("17906") ? () => undefined : (stryCov_9fa48("17906"), k => batch.zscore(k, String(value))));
        const results = await helpers.execBatch(batch);
        return results.map(utils.isNumber);
      }
    };
    module.getSortedSetMembers = async function (key) {
      if (stryMutAct_9fa48("17907")) {
        {}
      } else {
        stryCov_9fa48("17907");
        return await module.client.zrange(key, 0, stryMutAct_9fa48("17908") ? +1 : (stryCov_9fa48("17908"), -1));
      }
    };
    module.getSortedSetsMembers = async function (keys) {
      if (stryMutAct_9fa48("17909")) {
        {}
      } else {
        stryCov_9fa48("17909");
        if (stryMutAct_9fa48("17912") ? !Array.isArray(keys) && !keys.length : stryMutAct_9fa48("17911") ? false : stryMutAct_9fa48("17910") ? true : (stryCov_9fa48("17910", "17911", "17912"), (stryMutAct_9fa48("17913") ? Array.isArray(keys) : (stryCov_9fa48("17913"), !Array.isArray(keys))) || (stryMutAct_9fa48("17914") ? keys.length : (stryCov_9fa48("17914"), !keys.length)))) {
          if (stryMutAct_9fa48("17915")) {
            {}
          } else {
            stryCov_9fa48("17915");
            return stryMutAct_9fa48("17916") ? ["Stryker was here"] : (stryCov_9fa48("17916"), []);
          }
        }
        const batch = module.client.batch();
        keys.forEach(stryMutAct_9fa48("17917") ? () => undefined : (stryCov_9fa48("17917"), k => batch.zrange(k, 0, stryMutAct_9fa48("17918") ? +1 : (stryCov_9fa48("17918"), -1))));
        return await helpers.execBatch(batch);
      }
    };
    module.sortedSetIncrBy = async function (key, increment, value) {
      if (stryMutAct_9fa48("17919")) {
        {}
      } else {
        stryCov_9fa48("17919");
        const newValue = await module.client.zincrby(key, increment, value);
        return parseFloat(newValue);
      }
    };
    module.sortedSetIncrByBulk = async function (data) {
      if (stryMutAct_9fa48("17920")) {
        {}
      } else {
        stryCov_9fa48("17920");
        const multi = module.client.multi();
        data.forEach(item => {
          if (stryMutAct_9fa48("17921")) {
            {}
          } else {
            stryCov_9fa48("17921");
            multi.zincrby(item[0], item[1], item[2]);
          }
        });
        const result = await multi.exec();
        return result.map(stryMutAct_9fa48("17922") ? () => undefined : (stryCov_9fa48("17922"), item => stryMutAct_9fa48("17925") ? item || parseFloat(item[1]) : stryMutAct_9fa48("17924") ? false : stryMutAct_9fa48("17923") ? true : (stryCov_9fa48("17923", "17924", "17925"), item && parseFloat(item[1]))));
      }
    };
    module.getSortedSetRangeByLex = async function (key, min, max, start, count) {
      if (stryMutAct_9fa48("17926")) {
        {}
      } else {
        stryCov_9fa48("17926");
        return await sortedSetLex(stryMutAct_9fa48("17927") ? "" : (stryCov_9fa48("17927"), 'zrangebylex'), stryMutAct_9fa48("17928") ? true : (stryCov_9fa48("17928"), false), key, min, max, start, count);
      }
    };
    module.getSortedSetRevRangeByLex = async function (key, max, min, start, count) {
      if (stryMutAct_9fa48("17929")) {
        {}
      } else {
        stryCov_9fa48("17929");
        return await sortedSetLex(stryMutAct_9fa48("17930") ? "" : (stryCov_9fa48("17930"), 'zrevrangebylex'), stryMutAct_9fa48("17931") ? false : (stryCov_9fa48("17931"), true), key, max, min, start, count);
      }
    };
    module.sortedSetRemoveRangeByLex = async function (key, min, max) {
      if (stryMutAct_9fa48("17932")) {
        {}
      } else {
        stryCov_9fa48("17932");
        await sortedSetLex(stryMutAct_9fa48("17933") ? "" : (stryCov_9fa48("17933"), 'zremrangebylex'), stryMutAct_9fa48("17934") ? true : (stryCov_9fa48("17934"), false), key, min, max);
      }
    };
    module.sortedSetLexCount = async function (key, min, max) {
      if (stryMutAct_9fa48("17935")) {
        {}
      } else {
        stryCov_9fa48("17935");
        return await sortedSetLex(stryMutAct_9fa48("17936") ? "" : (stryCov_9fa48("17936"), 'zlexcount'), stryMutAct_9fa48("17937") ? true : (stryCov_9fa48("17937"), false), key, min, max);
      }
    };
    async function sortedSetLex(method, reverse, key, min, max, start, count) {
      if (stryMutAct_9fa48("17938")) {
        {}
      } else {
        stryCov_9fa48("17938");
        let minmin;
        let maxmax;
        if (stryMutAct_9fa48("17940") ? false : stryMutAct_9fa48("17939") ? true : (stryCov_9fa48("17939", "17940"), reverse)) {
          if (stryMutAct_9fa48("17941")) {
            {}
          } else {
            stryCov_9fa48("17941");
            minmin = stryMutAct_9fa48("17942") ? "" : (stryCov_9fa48("17942"), '+');
            maxmax = stryMutAct_9fa48("17943") ? "" : (stryCov_9fa48("17943"), '-');
          }
        } else {
          if (stryMutAct_9fa48("17944")) {
            {}
          } else {
            stryCov_9fa48("17944");
            minmin = stryMutAct_9fa48("17945") ? "" : (stryCov_9fa48("17945"), '-');
            maxmax = stryMutAct_9fa48("17946") ? "" : (stryCov_9fa48("17946"), '+');
          }
        }
        if (stryMutAct_9fa48("17949") ? min !== minmin || !min.match(/^[[(]/) : stryMutAct_9fa48("17948") ? false : stryMutAct_9fa48("17947") ? true : (stryCov_9fa48("17947", "17948", "17949"), (stryMutAct_9fa48("17951") ? min === minmin : stryMutAct_9fa48("17950") ? true : (stryCov_9fa48("17950", "17951"), min !== minmin)) && (stryMutAct_9fa48("17952") ? min.match(/^[[(]/) : (stryCov_9fa48("17952"), !min.match(stryMutAct_9fa48("17954") ? /^[^[(]/ : stryMutAct_9fa48("17953") ? /[[(]/ : (stryCov_9fa48("17953", "17954"), /^[[(]/)))))) {
          if (stryMutAct_9fa48("17955")) {
            {}
          } else {
            stryCov_9fa48("17955");
            min = stryMutAct_9fa48("17956") ? `` : (stryCov_9fa48("17956"), `[${min}`);
          }
        }
        if (stryMutAct_9fa48("17959") ? max !== maxmax || !max.match(/^[[(]/) : stryMutAct_9fa48("17958") ? false : stryMutAct_9fa48("17957") ? true : (stryCov_9fa48("17957", "17958", "17959"), (stryMutAct_9fa48("17961") ? max === maxmax : stryMutAct_9fa48("17960") ? true : (stryCov_9fa48("17960", "17961"), max !== maxmax)) && (stryMutAct_9fa48("17962") ? max.match(/^[[(]/) : (stryCov_9fa48("17962"), !max.match(stryMutAct_9fa48("17964") ? /^[^[(]/ : stryMutAct_9fa48("17963") ? /[[(]/ : (stryCov_9fa48("17963", "17964"), /^[[(]/)))))) {
          if (stryMutAct_9fa48("17965")) {
            {}
          } else {
            stryCov_9fa48("17965");
            max = stryMutAct_9fa48("17966") ? `` : (stryCov_9fa48("17966"), `[${max}`);
          }
        }
        const args = stryMutAct_9fa48("17967") ? [] : (stryCov_9fa48("17967"), [key, min, max]);
        if (stryMutAct_9fa48("17969") ? false : stryMutAct_9fa48("17968") ? true : (stryCov_9fa48("17968", "17969"), count)) {
          if (stryMutAct_9fa48("17970")) {
            {}
          } else {
            stryCov_9fa48("17970");
            args.push(stryMutAct_9fa48("17971") ? "" : (stryCov_9fa48("17971"), 'LIMIT'), start, count);
          }
        }
        return await module.client[method](args);
      }
    }
    module.getSortedSetScan = async function (params) {
      if (stryMutAct_9fa48("17972")) {
        {}
      } else {
        stryCov_9fa48("17972");
        let cursor = stryMutAct_9fa48("17973") ? "" : (stryCov_9fa48("17973"), '0');
        const returnData = stryMutAct_9fa48("17974") ? ["Stryker was here"] : (stryCov_9fa48("17974"), []);
        let done = stryMutAct_9fa48("17975") ? true : (stryCov_9fa48("17975"), false);
        const seen = {};
        do {
          if (stryMutAct_9fa48("17978")) {
            {}
          } else {
            stryCov_9fa48("17978");
            /* eslint-disable no-await-in-loop */
            const res = await module.client.zscan(params.key, cursor, stryMutAct_9fa48("17979") ? "" : (stryCov_9fa48("17979"), 'MATCH'), params.match, stryMutAct_9fa48("17980") ? "" : (stryCov_9fa48("17980"), 'COUNT'), 5000);
            cursor = res[0];
            done = stryMutAct_9fa48("17983") ? cursor !== '0' : stryMutAct_9fa48("17982") ? false : stryMutAct_9fa48("17981") ? true : (stryCov_9fa48("17981", "17982", "17983"), cursor === (stryMutAct_9fa48("17984") ? "" : (stryCov_9fa48("17984"), '0')));
            const data = res[1];
            for (let i = 0; stryMutAct_9fa48("17987") ? i >= data.length : stryMutAct_9fa48("17986") ? i <= data.length : stryMutAct_9fa48("17985") ? false : (stryCov_9fa48("17985", "17986", "17987"), i < data.length); stryMutAct_9fa48("17988") ? i -= 2 : (stryCov_9fa48("17988"), i += 2)) {
              if (stryMutAct_9fa48("17989")) {
                {}
              } else {
                stryCov_9fa48("17989");
                const value = data[i];
                if (stryMutAct_9fa48("17992") ? false : stryMutAct_9fa48("17991") ? true : stryMutAct_9fa48("17990") ? seen[value] : (stryCov_9fa48("17990", "17991", "17992"), !seen[value])) {
                  if (stryMutAct_9fa48("17993")) {
                    {}
                  } else {
                    stryCov_9fa48("17993");
                    seen[value] = 1;
                    if (stryMutAct_9fa48("17995") ? false : stryMutAct_9fa48("17994") ? true : (stryCov_9fa48("17994", "17995"), params.withScores)) {
                      if (stryMutAct_9fa48("17996")) {
                        {}
                      } else {
                        stryCov_9fa48("17996");
                        returnData.push(stryMutAct_9fa48("17997") ? {} : (stryCov_9fa48("17997"), {
                          value: value,
                          score: parseFloat(data[stryMutAct_9fa48("17998") ? i - 1 : (stryCov_9fa48("17998"), i + 1)])
                        }));
                      }
                    } else {
                      if (stryMutAct_9fa48("17999")) {
                        {}
                      } else {
                        stryCov_9fa48("17999");
                        returnData.push(value);
                      }
                    }
                    if (stryMutAct_9fa48("18002") ? params.limit || returnData.length >= params.limit : stryMutAct_9fa48("18001") ? false : stryMutAct_9fa48("18000") ? true : (stryCov_9fa48("18000", "18001", "18002"), params.limit && (stryMutAct_9fa48("18005") ? returnData.length < params.limit : stryMutAct_9fa48("18004") ? returnData.length > params.limit : stryMutAct_9fa48("18003") ? true : (stryCov_9fa48("18003", "18004", "18005"), returnData.length >= params.limit)))) {
                      if (stryMutAct_9fa48("18006")) {
                        {}
                      } else {
                        stryCov_9fa48("18006");
                        done = stryMutAct_9fa48("18007") ? false : (stryCov_9fa48("18007"), true);
                        break;
                      }
                    }
                  }
                }
              }
            }
          }
        } while (stryMutAct_9fa48("17977") ? false : stryMutAct_9fa48("17976") ? done : (stryCov_9fa48("17976", "17977"), !done));
        return returnData;
      }
    };
  }
};