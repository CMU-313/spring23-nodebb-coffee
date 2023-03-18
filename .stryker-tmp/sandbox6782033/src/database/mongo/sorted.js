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
const _ = require('lodash');
const utils = require('../../utils');
module.exports = function (module) {
  if (stryMutAct_9fa48("14426")) {
    {}
  } else {
    stryCov_9fa48("14426");
    const helpers = require('./helpers');
    const dbHelpers = require('../helpers');
    const util = require('util');
    const sleep = util.promisify(setTimeout);
    require('./sorted/add')(module);
    require('./sorted/remove')(module);
    require('./sorted/union')(module);
    require('./sorted/intersect')(module);
    module.getSortedSetRange = async function (key, start, stop) {
      if (stryMutAct_9fa48("14427")) {
        {}
      } else {
        stryCov_9fa48("14427");
        return await getSortedSetRange(key, start, stop, stryMutAct_9fa48("14428") ? "" : (stryCov_9fa48("14428"), '-inf'), stryMutAct_9fa48("14429") ? "" : (stryCov_9fa48("14429"), '+inf'), 1, stryMutAct_9fa48("14430") ? true : (stryCov_9fa48("14430"), false));
      }
    };
    module.getSortedSetRevRange = async function (key, start, stop) {
      if (stryMutAct_9fa48("14431")) {
        {}
      } else {
        stryCov_9fa48("14431");
        return await getSortedSetRange(key, start, stop, stryMutAct_9fa48("14432") ? "" : (stryCov_9fa48("14432"), '-inf'), stryMutAct_9fa48("14433") ? "" : (stryCov_9fa48("14433"), '+inf'), stryMutAct_9fa48("14434") ? +1 : (stryCov_9fa48("14434"), -1), stryMutAct_9fa48("14435") ? true : (stryCov_9fa48("14435"), false));
      }
    };
    module.getSortedSetRangeWithScores = async function (key, start, stop) {
      if (stryMutAct_9fa48("14436")) {
        {}
      } else {
        stryCov_9fa48("14436");
        return await getSortedSetRange(key, start, stop, stryMutAct_9fa48("14437") ? "" : (stryCov_9fa48("14437"), '-inf'), stryMutAct_9fa48("14438") ? "" : (stryCov_9fa48("14438"), '+inf'), 1, stryMutAct_9fa48("14439") ? false : (stryCov_9fa48("14439"), true));
      }
    };
    module.getSortedSetRevRangeWithScores = async function (key, start, stop) {
      if (stryMutAct_9fa48("14440")) {
        {}
      } else {
        stryCov_9fa48("14440");
        return await getSortedSetRange(key, start, stop, stryMutAct_9fa48("14441") ? "" : (stryCov_9fa48("14441"), '-inf'), stryMutAct_9fa48("14442") ? "" : (stryCov_9fa48("14442"), '+inf'), stryMutAct_9fa48("14443") ? +1 : (stryCov_9fa48("14443"), -1), stryMutAct_9fa48("14444") ? false : (stryCov_9fa48("14444"), true));
      }
    };
    async function getSortedSetRange(key, start, stop, min, max, sort, withScores) {
      if (stryMutAct_9fa48("14445")) {
        {}
      } else {
        stryCov_9fa48("14445");
        if (stryMutAct_9fa48("14448") ? false : stryMutAct_9fa48("14447") ? true : stryMutAct_9fa48("14446") ? key : (stryCov_9fa48("14446", "14447", "14448"), !key)) {
          if (stryMutAct_9fa48("14449")) {
            {}
          } else {
            stryCov_9fa48("14449");
            return;
          }
        }
        const isArray = Array.isArray(key);
        if (stryMutAct_9fa48("14452") ? start < 0 && start > stop && isArray && !key.length : stryMutAct_9fa48("14451") ? false : stryMutAct_9fa48("14450") ? true : (stryCov_9fa48("14450", "14451", "14452"), (stryMutAct_9fa48("14454") ? start < 0 || start > stop : stryMutAct_9fa48("14453") ? false : (stryCov_9fa48("14453", "14454"), (stryMutAct_9fa48("14457") ? start >= 0 : stryMutAct_9fa48("14456") ? start <= 0 : stryMutAct_9fa48("14455") ? true : (stryCov_9fa48("14455", "14456", "14457"), start < 0)) && (stryMutAct_9fa48("14460") ? start <= stop : stryMutAct_9fa48("14459") ? start >= stop : stryMutAct_9fa48("14458") ? true : (stryCov_9fa48("14458", "14459", "14460"), start > stop)))) || (stryMutAct_9fa48("14462") ? isArray || !key.length : stryMutAct_9fa48("14461") ? false : (stryCov_9fa48("14461", "14462"), isArray && (stryMutAct_9fa48("14463") ? key.length : (stryCov_9fa48("14463"), !key.length)))))) {
          if (stryMutAct_9fa48("14464")) {
            {}
          } else {
            stryCov_9fa48("14464");
            return stryMutAct_9fa48("14465") ? ["Stryker was here"] : (stryCov_9fa48("14465"), []);
          }
        }
        const query = stryMutAct_9fa48("14466") ? {} : (stryCov_9fa48("14466"), {
          _key: key
        });
        if (stryMutAct_9fa48("14468") ? false : stryMutAct_9fa48("14467") ? true : (stryCov_9fa48("14467", "14468"), isArray)) {
          if (stryMutAct_9fa48("14469")) {
            {}
          } else {
            stryCov_9fa48("14469");
            if (stryMutAct_9fa48("14473") ? key.length <= 1 : stryMutAct_9fa48("14472") ? key.length >= 1 : stryMutAct_9fa48("14471") ? false : stryMutAct_9fa48("14470") ? true : (stryCov_9fa48("14470", "14471", "14472", "14473"), key.length > 1)) {
              if (stryMutAct_9fa48("14474")) {
                {}
              } else {
                stryCov_9fa48("14474");
                query._key = stryMutAct_9fa48("14475") ? {} : (stryCov_9fa48("14475"), {
                  $in: key
                });
              }
            } else {
              if (stryMutAct_9fa48("14476")) {
                {}
              } else {
                stryCov_9fa48("14476");
                query._key = key[0];
              }
            }
          }
        }
        if (stryMutAct_9fa48("14479") ? min === '-inf' : stryMutAct_9fa48("14478") ? false : stryMutAct_9fa48("14477") ? true : (stryCov_9fa48("14477", "14478", "14479"), min !== (stryMutAct_9fa48("14480") ? "" : (stryCov_9fa48("14480"), '-inf')))) {
          if (stryMutAct_9fa48("14481")) {
            {}
          } else {
            stryCov_9fa48("14481");
            query.score = stryMutAct_9fa48("14482") ? {} : (stryCov_9fa48("14482"), {
              $gte: min
            });
          }
        }
        if (stryMutAct_9fa48("14485") ? max === '+inf' : stryMutAct_9fa48("14484") ? false : stryMutAct_9fa48("14483") ? true : (stryCov_9fa48("14483", "14484", "14485"), max !== (stryMutAct_9fa48("14486") ? "" : (stryCov_9fa48("14486"), '+inf')))) {
          if (stryMutAct_9fa48("14487")) {
            {}
          } else {
            stryCov_9fa48("14487");
            query.score = stryMutAct_9fa48("14490") ? query.score && {} : stryMutAct_9fa48("14489") ? false : stryMutAct_9fa48("14488") ? true : (stryCov_9fa48("14488", "14489", "14490"), query.score || {});
            query.score.$lte = max;
          }
        }
        if (stryMutAct_9fa48("14493") ? max !== min : stryMutAct_9fa48("14492") ? false : stryMutAct_9fa48("14491") ? true : (stryCov_9fa48("14491", "14492", "14493"), max === min)) {
          if (stryMutAct_9fa48("14494")) {
            {}
          } else {
            stryCov_9fa48("14494");
            query.score = max;
          }
        }
        const fields = stryMutAct_9fa48("14495") ? {} : (stryCov_9fa48("14495"), {
          _id: 0,
          _key: 0
        });
        if (stryMutAct_9fa48("14498") ? false : stryMutAct_9fa48("14497") ? true : stryMutAct_9fa48("14496") ? withScores : (stryCov_9fa48("14496", "14497", "14498"), !withScores)) {
          if (stryMutAct_9fa48("14499")) {
            {}
          } else {
            stryCov_9fa48("14499");
            fields.score = 0;
          }
        }
        let reverse = stryMutAct_9fa48("14500") ? true : (stryCov_9fa48("14500"), false);
        if (stryMutAct_9fa48("14503") ? start === 0 || stop < -1 : stryMutAct_9fa48("14502") ? false : stryMutAct_9fa48("14501") ? true : (stryCov_9fa48("14501", "14502", "14503"), (stryMutAct_9fa48("14505") ? start !== 0 : stryMutAct_9fa48("14504") ? true : (stryCov_9fa48("14504", "14505"), start === 0)) && (stryMutAct_9fa48("14508") ? stop >= -1 : stryMutAct_9fa48("14507") ? stop <= -1 : stryMutAct_9fa48("14506") ? true : (stryCov_9fa48("14506", "14507", "14508"), stop < (stryMutAct_9fa48("14509") ? +1 : (stryCov_9fa48("14509"), -1)))))) {
          if (stryMutAct_9fa48("14510")) {
            {}
          } else {
            stryCov_9fa48("14510");
            reverse = stryMutAct_9fa48("14511") ? false : (stryCov_9fa48("14511"), true);
            stryMutAct_9fa48("14512") ? sort /= -1 : (stryCov_9fa48("14512"), sort *= stryMutAct_9fa48("14513") ? +1 : (stryCov_9fa48("14513"), -1));
            start = Math.abs(stryMutAct_9fa48("14514") ? stop - 1 : (stryCov_9fa48("14514"), stop + 1));
            stop = stryMutAct_9fa48("14515") ? +1 : (stryCov_9fa48("14515"), -1);
          }
        } else if (stryMutAct_9fa48("14518") ? start < 0 || stop > start : stryMutAct_9fa48("14517") ? false : stryMutAct_9fa48("14516") ? true : (stryCov_9fa48("14516", "14517", "14518"), (stryMutAct_9fa48("14521") ? start >= 0 : stryMutAct_9fa48("14520") ? start <= 0 : stryMutAct_9fa48("14519") ? true : (stryCov_9fa48("14519", "14520", "14521"), start < 0)) && (stryMutAct_9fa48("14524") ? stop <= start : stryMutAct_9fa48("14523") ? stop >= start : stryMutAct_9fa48("14522") ? true : (stryCov_9fa48("14522", "14523", "14524"), stop > start)))) {
          if (stryMutAct_9fa48("14525")) {
            {}
          } else {
            stryCov_9fa48("14525");
            const tmp1 = Math.abs(stryMutAct_9fa48("14526") ? stop - 1 : (stryCov_9fa48("14526"), stop + 1));
            stop = Math.abs(stryMutAct_9fa48("14527") ? start - 1 : (stryCov_9fa48("14527"), start + 1));
            start = tmp1;
          }
        }
        let limit = stryMutAct_9fa48("14528") ? stop - start - 1 : (stryCov_9fa48("14528"), (stryMutAct_9fa48("14529") ? stop + start : (stryCov_9fa48("14529"), stop - start)) + 1);
        if (stryMutAct_9fa48("14533") ? limit > 0 : stryMutAct_9fa48("14532") ? limit < 0 : stryMutAct_9fa48("14531") ? false : stryMutAct_9fa48("14530") ? true : (stryCov_9fa48("14530", "14531", "14532", "14533"), limit <= 0)) {
          if (stryMutAct_9fa48("14534")) {
            {}
          } else {
            stryCov_9fa48("14534");
            limit = 0;
          }
        }
        let result = stryMutAct_9fa48("14535") ? ["Stryker was here"] : (stryCov_9fa48("14535"), []);
        async function doQuery(_key, fields, skip, limit) {
          if (stryMutAct_9fa48("14536")) {
            {}
          } else {
            stryCov_9fa48("14536");
            return await (stryMutAct_9fa48("14537") ? module.client.collection('objects').find({
              ...query,
              ...{
                _key: _key
              }
            }, {
              projection: fields
            }).skip(skip).limit(limit).toArray() : (stryCov_9fa48("14537"), module.client.collection(stryMutAct_9fa48("14538") ? "" : (stryCov_9fa48("14538"), 'objects')).find(stryMutAct_9fa48("14539") ? {} : (stryCov_9fa48("14539"), {
              ...query,
              ...(stryMutAct_9fa48("14540") ? {} : (stryCov_9fa48("14540"), {
                _key: _key
              }))
            }), stryMutAct_9fa48("14541") ? {} : (stryCov_9fa48("14541"), {
              projection: fields
            })).sort(stryMutAct_9fa48("14542") ? {} : (stryCov_9fa48("14542"), {
              score: sort
            })).skip(skip).limit(limit).toArray()));
          }
        }
        if (stryMutAct_9fa48("14545") ? isArray || key.length > 100 : stryMutAct_9fa48("14544") ? false : stryMutAct_9fa48("14543") ? true : (stryCov_9fa48("14543", "14544", "14545"), isArray && (stryMutAct_9fa48("14548") ? key.length <= 100 : stryMutAct_9fa48("14547") ? key.length >= 100 : stryMutAct_9fa48("14546") ? true : (stryCov_9fa48("14546", "14547", "14548"), key.length > 100)))) {
          if (stryMutAct_9fa48("14549")) {
            {}
          } else {
            stryCov_9fa48("14549");
            const batches = stryMutAct_9fa48("14550") ? ["Stryker was here"] : (stryCov_9fa48("14550"), []);
            const batch = require('../../batch');
            const batchSize = Math.ceil(stryMutAct_9fa48("14551") ? key.length * Math.ceil(key.length / 100) : (stryCov_9fa48("14551"), key.length / Math.ceil(stryMutAct_9fa48("14552") ? key.length * 100 : (stryCov_9fa48("14552"), key.length / 100))));
            await batch.processArray(key, stryMutAct_9fa48("14553") ? () => undefined : (stryCov_9fa48("14553"), async currentBatch => batches.push(currentBatch)), stryMutAct_9fa48("14554") ? {} : (stryCov_9fa48("14554"), {
              batch: batchSize
            }));
            const batchData = await Promise.all(batches.map(stryMutAct_9fa48("14555") ? () => undefined : (stryCov_9fa48("14555"), batch => doQuery(stryMutAct_9fa48("14556") ? {} : (stryCov_9fa48("14556"), {
              $in: batch
            }), stryMutAct_9fa48("14557") ? {} : (stryCov_9fa48("14557"), {
              _id: 0,
              _key: 0
            }), 0, stryMutAct_9fa48("14558") ? stop - 1 : (stryCov_9fa48("14558"), stop + 1)))));
            result = dbHelpers.mergeBatch(batchData, 0, stop, sort);
            if (stryMutAct_9fa48("14562") ? start <= 0 : stryMutAct_9fa48("14561") ? start >= 0 : stryMutAct_9fa48("14560") ? false : stryMutAct_9fa48("14559") ? true : (stryCov_9fa48("14559", "14560", "14561", "14562"), start > 0)) {
              if (stryMutAct_9fa48("14563")) {
                {}
              } else {
                stryCov_9fa48("14563");
                result = stryMutAct_9fa48("14564") ? result : (stryCov_9fa48("14564"), result.slice(start, (stryMutAct_9fa48("14567") ? stop === -1 : stryMutAct_9fa48("14566") ? false : stryMutAct_9fa48("14565") ? true : (stryCov_9fa48("14565", "14566", "14567"), stop !== (stryMutAct_9fa48("14568") ? +1 : (stryCov_9fa48("14568"), -1)))) ? stryMutAct_9fa48("14569") ? stop - 1 : (stryCov_9fa48("14569"), stop + 1) : undefined));
              }
            }
          }
        } else {
          if (stryMutAct_9fa48("14570")) {
            {}
          } else {
            stryCov_9fa48("14570");
            result = await doQuery(query._key, fields, start, limit);
          }
        }
        if (stryMutAct_9fa48("14572") ? false : stryMutAct_9fa48("14571") ? true : (stryCov_9fa48("14571", "14572"), reverse)) {
          if (stryMutAct_9fa48("14573")) {
            {}
          } else {
            stryCov_9fa48("14573");
            stryMutAct_9fa48("14574") ? result : (stryCov_9fa48("14574"), result.reverse());
          }
        }
        if (stryMutAct_9fa48("14577") ? false : stryMutAct_9fa48("14576") ? true : stryMutAct_9fa48("14575") ? withScores : (stryCov_9fa48("14575", "14576", "14577"), !withScores)) {
          if (stryMutAct_9fa48("14578")) {
            {}
          } else {
            stryCov_9fa48("14578");
            result = result.map(stryMutAct_9fa48("14579") ? () => undefined : (stryCov_9fa48("14579"), item => item.value));
          }
        }
        return result;
      }
    }
    module.getSortedSetRangeByScore = async function (key, start, count, min, max) {
      if (stryMutAct_9fa48("14580")) {
        {}
      } else {
        stryCov_9fa48("14580");
        return await getSortedSetRangeByScore(key, start, count, min, max, 1, stryMutAct_9fa48("14581") ? true : (stryCov_9fa48("14581"), false));
      }
    };
    module.getSortedSetRevRangeByScore = async function (key, start, count, max, min) {
      if (stryMutAct_9fa48("14582")) {
        {}
      } else {
        stryCov_9fa48("14582");
        return await getSortedSetRangeByScore(key, start, count, min, max, stryMutAct_9fa48("14583") ? +1 : (stryCov_9fa48("14583"), -1), stryMutAct_9fa48("14584") ? true : (stryCov_9fa48("14584"), false));
      }
    };
    module.getSortedSetRangeByScoreWithScores = async function (key, start, count, min, max) {
      if (stryMutAct_9fa48("14585")) {
        {}
      } else {
        stryCov_9fa48("14585");
        return await getSortedSetRangeByScore(key, start, count, min, max, 1, stryMutAct_9fa48("14586") ? false : (stryCov_9fa48("14586"), true));
      }
    };
    module.getSortedSetRevRangeByScoreWithScores = async function (key, start, count, max, min) {
      if (stryMutAct_9fa48("14587")) {
        {}
      } else {
        stryCov_9fa48("14587");
        return await getSortedSetRangeByScore(key, start, count, min, max, stryMutAct_9fa48("14588") ? +1 : (stryCov_9fa48("14588"), -1), stryMutAct_9fa48("14589") ? false : (stryCov_9fa48("14589"), true));
      }
    };
    async function getSortedSetRangeByScore(key, start, count, min, max, sort, withScores) {
      if (stryMutAct_9fa48("14590")) {
        {}
      } else {
        stryCov_9fa48("14590");
        if (stryMutAct_9fa48("14593") ? parseInt(count, 10) !== 0 : stryMutAct_9fa48("14592") ? false : stryMutAct_9fa48("14591") ? true : (stryCov_9fa48("14591", "14592", "14593"), parseInt(count, 10) === 0)) {
          if (stryMutAct_9fa48("14594")) {
            {}
          } else {
            stryCov_9fa48("14594");
            return stryMutAct_9fa48("14595") ? ["Stryker was here"] : (stryCov_9fa48("14595"), []);
          }
        }
        const stop = (stryMutAct_9fa48("14598") ? parseInt(count, 10) !== -1 : stryMutAct_9fa48("14597") ? false : stryMutAct_9fa48("14596") ? true : (stryCov_9fa48("14596", "14597", "14598"), parseInt(count, 10) === (stryMutAct_9fa48("14599") ? +1 : (stryCov_9fa48("14599"), -1)))) ? stryMutAct_9fa48("14600") ? +1 : (stryCov_9fa48("14600"), -1) : stryMutAct_9fa48("14601") ? start + count + 1 : (stryCov_9fa48("14601"), (stryMutAct_9fa48("14602") ? start - count : (stryCov_9fa48("14602"), start + count)) - 1);
        return await getSortedSetRange(key, start, stop, min, max, sort, withScores);
      }
    }
    module.sortedSetCount = async function (key, min, max) {
      if (stryMutAct_9fa48("14603")) {
        {}
      } else {
        stryCov_9fa48("14603");
        if (stryMutAct_9fa48("14606") ? false : stryMutAct_9fa48("14605") ? true : stryMutAct_9fa48("14604") ? key : (stryCov_9fa48("14604", "14605", "14606"), !key)) {
          if (stryMutAct_9fa48("14607")) {
            {}
          } else {
            stryCov_9fa48("14607");
            return;
          }
        }
        const query = stryMutAct_9fa48("14608") ? {} : (stryCov_9fa48("14608"), {
          _key: key
        });
        if (stryMutAct_9fa48("14611") ? min === '-inf' : stryMutAct_9fa48("14610") ? false : stryMutAct_9fa48("14609") ? true : (stryCov_9fa48("14609", "14610", "14611"), min !== (stryMutAct_9fa48("14612") ? "" : (stryCov_9fa48("14612"), '-inf')))) {
          if (stryMutAct_9fa48("14613")) {
            {}
          } else {
            stryCov_9fa48("14613");
            query.score = stryMutAct_9fa48("14614") ? {} : (stryCov_9fa48("14614"), {
              $gte: min
            });
          }
        }
        if (stryMutAct_9fa48("14617") ? max === '+inf' : stryMutAct_9fa48("14616") ? false : stryMutAct_9fa48("14615") ? true : (stryCov_9fa48("14615", "14616", "14617"), max !== (stryMutAct_9fa48("14618") ? "" : (stryCov_9fa48("14618"), '+inf')))) {
          if (stryMutAct_9fa48("14619")) {
            {}
          } else {
            stryCov_9fa48("14619");
            query.score = stryMutAct_9fa48("14622") ? query.score && {} : stryMutAct_9fa48("14621") ? false : stryMutAct_9fa48("14620") ? true : (stryCov_9fa48("14620", "14621", "14622"), query.score || {});
            query.score.$lte = max;
          }
        }
        const count = await module.client.collection(stryMutAct_9fa48("14623") ? "" : (stryCov_9fa48("14623"), 'objects')).countDocuments(query);
        return stryMutAct_9fa48("14626") ? count && 0 : stryMutAct_9fa48("14625") ? false : stryMutAct_9fa48("14624") ? true : (stryCov_9fa48("14624", "14625", "14626"), count || 0);
      }
    };
    module.sortedSetCard = async function (key) {
      if (stryMutAct_9fa48("14627")) {
        {}
      } else {
        stryCov_9fa48("14627");
        if (stryMutAct_9fa48("14630") ? false : stryMutAct_9fa48("14629") ? true : stryMutAct_9fa48("14628") ? key : (stryCov_9fa48("14628", "14629", "14630"), !key)) {
          if (stryMutAct_9fa48("14631")) {
            {}
          } else {
            stryCov_9fa48("14631");
            return 0;
          }
        }
        const count = await module.client.collection(stryMutAct_9fa48("14632") ? "" : (stryCov_9fa48("14632"), 'objects')).countDocuments(stryMutAct_9fa48("14633") ? {} : (stryCov_9fa48("14633"), {
          _key: key
        }));
        return stryMutAct_9fa48("14636") ? parseInt(count, 10) && 0 : stryMutAct_9fa48("14635") ? false : stryMutAct_9fa48("14634") ? true : (stryCov_9fa48("14634", "14635", "14636"), parseInt(count, 10) || 0);
      }
    };
    module.sortedSetsCard = async function (keys) {
      if (stryMutAct_9fa48("14637")) {
        {}
      } else {
        stryCov_9fa48("14637");
        if (stryMutAct_9fa48("14640") ? !Array.isArray(keys) && !keys.length : stryMutAct_9fa48("14639") ? false : stryMutAct_9fa48("14638") ? true : (stryCov_9fa48("14638", "14639", "14640"), (stryMutAct_9fa48("14641") ? Array.isArray(keys) : (stryCov_9fa48("14641"), !Array.isArray(keys))) || (stryMutAct_9fa48("14642") ? keys.length : (stryCov_9fa48("14642"), !keys.length)))) {
          if (stryMutAct_9fa48("14643")) {
            {}
          } else {
            stryCov_9fa48("14643");
            return stryMutAct_9fa48("14644") ? ["Stryker was here"] : (stryCov_9fa48("14644"), []);
          }
        }
        const promises = keys.map(stryMutAct_9fa48("14645") ? () => undefined : (stryCov_9fa48("14645"), k => module.sortedSetCard(k)));
        return await Promise.all(promises);
      }
    };
    module.sortedSetsCardSum = async function (keys) {
      if (stryMutAct_9fa48("14646")) {
        {}
      } else {
        stryCov_9fa48("14646");
        if (stryMutAct_9fa48("14649") ? !keys && Array.isArray(keys) && !keys.length : stryMutAct_9fa48("14648") ? false : stryMutAct_9fa48("14647") ? true : (stryCov_9fa48("14647", "14648", "14649"), (stryMutAct_9fa48("14650") ? keys : (stryCov_9fa48("14650"), !keys)) || (stryMutAct_9fa48("14652") ? Array.isArray(keys) || !keys.length : stryMutAct_9fa48("14651") ? false : (stryCov_9fa48("14651", "14652"), Array.isArray(keys) && (stryMutAct_9fa48("14653") ? keys.length : (stryCov_9fa48("14653"), !keys.length)))))) {
          if (stryMutAct_9fa48("14654")) {
            {}
          } else {
            stryCov_9fa48("14654");
            return 0;
          }
        }
        const count = await module.client.collection(stryMutAct_9fa48("14655") ? "" : (stryCov_9fa48("14655"), 'objects')).countDocuments(stryMutAct_9fa48("14656") ? {} : (stryCov_9fa48("14656"), {
          _key: Array.isArray(keys) ? stryMutAct_9fa48("14657") ? {} : (stryCov_9fa48("14657"), {
            $in: keys
          }) : keys
        }));
        return stryMutAct_9fa48("14660") ? parseInt(count, 10) && 0 : stryMutAct_9fa48("14659") ? false : stryMutAct_9fa48("14658") ? true : (stryCov_9fa48("14658", "14659", "14660"), parseInt(count, 10) || 0);
      }
    };
    module.sortedSetRank = async function (key, value) {
      if (stryMutAct_9fa48("14661")) {
        {}
      } else {
        stryCov_9fa48("14661");
        return await getSortedSetRank(stryMutAct_9fa48("14662") ? true : (stryCov_9fa48("14662"), false), key, value);
      }
    };
    module.sortedSetRevRank = async function (key, value) {
      if (stryMutAct_9fa48("14663")) {
        {}
      } else {
        stryCov_9fa48("14663");
        return await getSortedSetRank(stryMutAct_9fa48("14664") ? false : (stryCov_9fa48("14664"), true), key, value);
      }
    };
    async function getSortedSetRank(reverse, key, value) {
      if (stryMutAct_9fa48("14665")) {
        {}
      } else {
        stryCov_9fa48("14665");
        if (stryMutAct_9fa48("14668") ? false : stryMutAct_9fa48("14667") ? true : stryMutAct_9fa48("14666") ? key : (stryCov_9fa48("14666", "14667", "14668"), !key)) {
          if (stryMutAct_9fa48("14669")) {
            {}
          } else {
            stryCov_9fa48("14669");
            return;
          }
        }
        value = helpers.valueToString(value);
        const score = await module.sortedSetScore(key, value);
        if (stryMutAct_9fa48("14672") ? score !== null : stryMutAct_9fa48("14671") ? false : stryMutAct_9fa48("14670") ? true : (stryCov_9fa48("14670", "14671", "14672"), score === null)) {
          if (stryMutAct_9fa48("14673")) {
            {}
          } else {
            stryCov_9fa48("14673");
            return null;
          }
        }
        return await module.client.collection(stryMutAct_9fa48("14674") ? "" : (stryCov_9fa48("14674"), 'objects')).countDocuments(stryMutAct_9fa48("14675") ? {} : (stryCov_9fa48("14675"), {
          $or: stryMutAct_9fa48("14676") ? [] : (stryCov_9fa48("14676"), [stryMutAct_9fa48("14677") ? {} : (stryCov_9fa48("14677"), {
            _key: key,
            score: reverse ? stryMutAct_9fa48("14678") ? {} : (stryCov_9fa48("14678"), {
              $gt: score
            }) : stryMutAct_9fa48("14679") ? {} : (stryCov_9fa48("14679"), {
              $lt: score
            })
          }), stryMutAct_9fa48("14680") ? {} : (stryCov_9fa48("14680"), {
            _key: key,
            score: score,
            value: reverse ? stryMutAct_9fa48("14681") ? {} : (stryCov_9fa48("14681"), {
              $gt: value
            }) : stryMutAct_9fa48("14682") ? {} : (stryCov_9fa48("14682"), {
              $lt: value
            })
          })])
        }));
      }
    }
    module.sortedSetsRanks = async function (keys, values) {
      if (stryMutAct_9fa48("14683")) {
        {}
      } else {
        stryCov_9fa48("14683");
        return await sortedSetsRanks(module.sortedSetRank, keys, values);
      }
    };
    module.sortedSetsRevRanks = async function (keys, values) {
      if (stryMutAct_9fa48("14684")) {
        {}
      } else {
        stryCov_9fa48("14684");
        return await sortedSetsRanks(module.sortedSetRevRank, keys, values);
      }
    };
    async function sortedSetsRanks(method, keys, values) {
      if (stryMutAct_9fa48("14685")) {
        {}
      } else {
        stryCov_9fa48("14685");
        if (stryMutAct_9fa48("14688") ? !Array.isArray(keys) && !keys.length : stryMutAct_9fa48("14687") ? false : stryMutAct_9fa48("14686") ? true : (stryCov_9fa48("14686", "14687", "14688"), (stryMutAct_9fa48("14689") ? Array.isArray(keys) : (stryCov_9fa48("14689"), !Array.isArray(keys))) || (stryMutAct_9fa48("14690") ? keys.length : (stryCov_9fa48("14690"), !keys.length)))) {
          if (stryMutAct_9fa48("14691")) {
            {}
          } else {
            stryCov_9fa48("14691");
            return stryMutAct_9fa48("14692") ? ["Stryker was here"] : (stryCov_9fa48("14692"), []);
          }
        }
        const data = stryMutAct_9fa48("14693") ? new Array() : (stryCov_9fa48("14693"), new Array(values.length));
        for (let i = 0; stryMutAct_9fa48("14696") ? i >= values.length : stryMutAct_9fa48("14695") ? i <= values.length : stryMutAct_9fa48("14694") ? false : (stryCov_9fa48("14694", "14695", "14696"), i < values.length); stryMutAct_9fa48("14697") ? i -= 1 : (stryCov_9fa48("14697"), i += 1)) {
          if (stryMutAct_9fa48("14698")) {
            {}
          } else {
            stryCov_9fa48("14698");
            data[i] = stryMutAct_9fa48("14699") ? {} : (stryCov_9fa48("14699"), {
              key: keys[i],
              value: values[i]
            });
          }
        }
        const promises = data.map(stryMutAct_9fa48("14700") ? () => undefined : (stryCov_9fa48("14700"), item => method(item.key, item.value)));
        return await Promise.all(promises);
      }
    }
    module.sortedSetRanks = async function (key, values) {
      if (stryMutAct_9fa48("14701")) {
        {}
      } else {
        stryCov_9fa48("14701");
        return await sortedSetRanks(stryMutAct_9fa48("14702") ? true : (stryCov_9fa48("14702"), false), key, values);
      }
    };
    module.sortedSetRevRanks = async function (key, values) {
      if (stryMutAct_9fa48("14703")) {
        {}
      } else {
        stryCov_9fa48("14703");
        return await sortedSetRanks(stryMutAct_9fa48("14704") ? false : (stryCov_9fa48("14704"), true), key, values);
      }
    };
    async function sortedSetRanks(reverse, key, values) {
      if (stryMutAct_9fa48("14705")) {
        {}
      } else {
        stryCov_9fa48("14705");
        if (stryMutAct_9fa48("14708") ? values.length !== 1 : stryMutAct_9fa48("14707") ? false : stryMutAct_9fa48("14706") ? true : (stryCov_9fa48("14706", "14707", "14708"), values.length === 1)) {
          if (stryMutAct_9fa48("14709")) {
            {}
          } else {
            stryCov_9fa48("14709");
            return stryMutAct_9fa48("14710") ? [] : (stryCov_9fa48("14710"), [await getSortedSetRank(reverse, key, values[0])]);
          }
        }
        const sortedSet = await module[reverse ? stryMutAct_9fa48("14711") ? "" : (stryCov_9fa48("14711"), 'getSortedSetRevRange') : stryMutAct_9fa48("14712") ? "" : (stryCov_9fa48("14712"), 'getSortedSetRange')](key, 0, stryMutAct_9fa48("14713") ? +1 : (stryCov_9fa48("14713"), -1));
        return values.map(value => {
          if (stryMutAct_9fa48("14714")) {
            {}
          } else {
            stryCov_9fa48("14714");
            if (stryMutAct_9fa48("14717") ? false : stryMutAct_9fa48("14716") ? true : stryMutAct_9fa48("14715") ? value : (stryCov_9fa48("14715", "14716", "14717"), !value)) {
              if (stryMutAct_9fa48("14718")) {
                {}
              } else {
                stryCov_9fa48("14718");
                return null;
              }
            }
            const index = sortedSet.indexOf(value.toString());
            return (stryMutAct_9fa48("14721") ? index === -1 : stryMutAct_9fa48("14720") ? false : stryMutAct_9fa48("14719") ? true : (stryCov_9fa48("14719", "14720", "14721"), index !== (stryMutAct_9fa48("14722") ? +1 : (stryCov_9fa48("14722"), -1)))) ? index : null;
          }
        });
      }
    }
    module.sortedSetScore = async function (key, value) {
      if (stryMutAct_9fa48("14723")) {
        {}
      } else {
        stryCov_9fa48("14723");
        if (stryMutAct_9fa48("14726") ? false : stryMutAct_9fa48("14725") ? true : stryMutAct_9fa48("14724") ? key : (stryCov_9fa48("14724", "14725", "14726"), !key)) {
          if (stryMutAct_9fa48("14727")) {
            {}
          } else {
            stryCov_9fa48("14727");
            return null;
          }
        }
        value = helpers.valueToString(value);
        const result = await module.client.collection(stryMutAct_9fa48("14728") ? "" : (stryCov_9fa48("14728"), 'objects')).findOne(stryMutAct_9fa48("14729") ? {} : (stryCov_9fa48("14729"), {
          _key: key,
          value: value
        }), stryMutAct_9fa48("14730") ? {} : (stryCov_9fa48("14730"), {
          projection: stryMutAct_9fa48("14731") ? {} : (stryCov_9fa48("14731"), {
            _id: 0,
            _key: 0,
            value: 0
          })
        }));
        return result ? result.score : null;
      }
    };
    module.sortedSetsScore = async function (keys, value) {
      if (stryMutAct_9fa48("14732")) {
        {}
      } else {
        stryCov_9fa48("14732");
        if (stryMutAct_9fa48("14735") ? !Array.isArray(keys) && !keys.length : stryMutAct_9fa48("14734") ? false : stryMutAct_9fa48("14733") ? true : (stryCov_9fa48("14733", "14734", "14735"), (stryMutAct_9fa48("14736") ? Array.isArray(keys) : (stryCov_9fa48("14736"), !Array.isArray(keys))) || (stryMutAct_9fa48("14737") ? keys.length : (stryCov_9fa48("14737"), !keys.length)))) {
          if (stryMutAct_9fa48("14738")) {
            {}
          } else {
            stryCov_9fa48("14738");
            return stryMutAct_9fa48("14739") ? ["Stryker was here"] : (stryCov_9fa48("14739"), []);
          }
        }
        value = helpers.valueToString(value);
        const result = await module.client.collection(stryMutAct_9fa48("14740") ? "" : (stryCov_9fa48("14740"), 'objects')).find(stryMutAct_9fa48("14741") ? {} : (stryCov_9fa48("14741"), {
          _key: stryMutAct_9fa48("14742") ? {} : (stryCov_9fa48("14742"), {
            $in: keys
          }),
          value: value
        }), stryMutAct_9fa48("14743") ? {} : (stryCov_9fa48("14743"), {
          projection: stryMutAct_9fa48("14744") ? {} : (stryCov_9fa48("14744"), {
            _id: 0,
            value: 0
          })
        })).toArray();
        const map = {};
        result.forEach(item => {
          if (stryMutAct_9fa48("14745")) {
            {}
          } else {
            stryCov_9fa48("14745");
            if (stryMutAct_9fa48("14747") ? false : stryMutAct_9fa48("14746") ? true : (stryCov_9fa48("14746", "14747"), item)) {
              if (stryMutAct_9fa48("14748")) {
                {}
              } else {
                stryCov_9fa48("14748");
                map[item._key] = item;
              }
            }
          }
        });
        return keys.map(stryMutAct_9fa48("14749") ? () => undefined : (stryCov_9fa48("14749"), key => map[key] ? map[key].score : null));
      }
    };
    module.sortedSetScores = async function (key, values) {
      if (stryMutAct_9fa48("14750")) {
        {}
      } else {
        stryCov_9fa48("14750");
        if (stryMutAct_9fa48("14753") ? false : stryMutAct_9fa48("14752") ? true : stryMutAct_9fa48("14751") ? key : (stryCov_9fa48("14751", "14752", "14753"), !key)) {
          if (stryMutAct_9fa48("14754")) {
            {}
          } else {
            stryCov_9fa48("14754");
            return null;
          }
        }
        if (stryMutAct_9fa48("14757") ? false : stryMutAct_9fa48("14756") ? true : stryMutAct_9fa48("14755") ? values.length : (stryCov_9fa48("14755", "14756", "14757"), !values.length)) {
          if (stryMutAct_9fa48("14758")) {
            {}
          } else {
            stryCov_9fa48("14758");
            return stryMutAct_9fa48("14759") ? ["Stryker was here"] : (stryCov_9fa48("14759"), []);
          }
        }
        values = values.map(helpers.valueToString);
        const result = await module.client.collection(stryMutAct_9fa48("14760") ? "" : (stryCov_9fa48("14760"), 'objects')).find(stryMutAct_9fa48("14761") ? {} : (stryCov_9fa48("14761"), {
          _key: key,
          value: stryMutAct_9fa48("14762") ? {} : (stryCov_9fa48("14762"), {
            $in: values
          })
        }), stryMutAct_9fa48("14763") ? {} : (stryCov_9fa48("14763"), {
          projection: stryMutAct_9fa48("14764") ? {} : (stryCov_9fa48("14764"), {
            _id: 0,
            _key: 0
          })
        })).toArray();
        const valueToScore = {};
        result.forEach(item => {
          if (stryMutAct_9fa48("14765")) {
            {}
          } else {
            stryCov_9fa48("14765");
            if (stryMutAct_9fa48("14767") ? false : stryMutAct_9fa48("14766") ? true : (stryCov_9fa48("14766", "14767"), item)) {
              if (stryMutAct_9fa48("14768")) {
                {}
              } else {
                stryCov_9fa48("14768");
                valueToScore[item.value] = item.score;
              }
            }
          }
        });
        return values.map(stryMutAct_9fa48("14769") ? () => undefined : (stryCov_9fa48("14769"), v => utils.isNumber(valueToScore[v]) ? valueToScore[v] : null));
      }
    };
    module.isSortedSetMember = async function (key, value) {
      if (stryMutAct_9fa48("14770")) {
        {}
      } else {
        stryCov_9fa48("14770");
        if (stryMutAct_9fa48("14773") ? false : stryMutAct_9fa48("14772") ? true : stryMutAct_9fa48("14771") ? key : (stryCov_9fa48("14771", "14772", "14773"), !key)) {
          if (stryMutAct_9fa48("14774")) {
            {}
          } else {
            stryCov_9fa48("14774");
            return;
          }
        }
        value = helpers.valueToString(value);
        const result = await module.client.collection(stryMutAct_9fa48("14775") ? "" : (stryCov_9fa48("14775"), 'objects')).findOne(stryMutAct_9fa48("14776") ? {} : (stryCov_9fa48("14776"), {
          _key: key,
          value: value
        }), stryMutAct_9fa48("14777") ? {} : (stryCov_9fa48("14777"), {
          projection: stryMutAct_9fa48("14778") ? {} : (stryCov_9fa48("14778"), {
            _id: 0,
            value: 1
          })
        }));
        return stryMutAct_9fa48("14779") ? !result : (stryCov_9fa48("14779"), !(stryMutAct_9fa48("14780") ? result : (stryCov_9fa48("14780"), !result)));
      }
    };
    module.isSortedSetMembers = async function (key, values) {
      if (stryMutAct_9fa48("14781")) {
        {}
      } else {
        stryCov_9fa48("14781");
        if (stryMutAct_9fa48("14784") ? false : stryMutAct_9fa48("14783") ? true : stryMutAct_9fa48("14782") ? key : (stryCov_9fa48("14782", "14783", "14784"), !key)) {
          if (stryMutAct_9fa48("14785")) {
            {}
          } else {
            stryCov_9fa48("14785");
            return;
          }
        }
        if (stryMutAct_9fa48("14788") ? false : stryMutAct_9fa48("14787") ? true : stryMutAct_9fa48("14786") ? values.length : (stryCov_9fa48("14786", "14787", "14788"), !values.length)) {
          if (stryMutAct_9fa48("14789")) {
            {}
          } else {
            stryCov_9fa48("14789");
            return stryMutAct_9fa48("14790") ? ["Stryker was here"] : (stryCov_9fa48("14790"), []);
          }
        }
        values = values.map(helpers.valueToString);
        const results = await module.client.collection(stryMutAct_9fa48("14791") ? "" : (stryCov_9fa48("14791"), 'objects')).find(stryMutAct_9fa48("14792") ? {} : (stryCov_9fa48("14792"), {
          _key: key,
          value: stryMutAct_9fa48("14793") ? {} : (stryCov_9fa48("14793"), {
            $in: values
          })
        }), stryMutAct_9fa48("14794") ? {} : (stryCov_9fa48("14794"), {
          projection: stryMutAct_9fa48("14795") ? {} : (stryCov_9fa48("14795"), {
            _id: 0,
            value: 1
          })
        })).toArray();
        const isMember = {};
        results.forEach(item => {
          if (stryMutAct_9fa48("14796")) {
            {}
          } else {
            stryCov_9fa48("14796");
            if (stryMutAct_9fa48("14798") ? false : stryMutAct_9fa48("14797") ? true : (stryCov_9fa48("14797", "14798"), item)) {
              if (stryMutAct_9fa48("14799")) {
                {}
              } else {
                stryCov_9fa48("14799");
                isMember[item.value] = stryMutAct_9fa48("14800") ? false : (stryCov_9fa48("14800"), true);
              }
            }
          }
        });
        return values.map(stryMutAct_9fa48("14801") ? () => undefined : (stryCov_9fa48("14801"), value => stryMutAct_9fa48("14802") ? !isMember[value] : (stryCov_9fa48("14802"), !(stryMutAct_9fa48("14803") ? isMember[value] : (stryCov_9fa48("14803"), !isMember[value])))));
      }
    };
    module.isMemberOfSortedSets = async function (keys, value) {
      if (stryMutAct_9fa48("14804")) {
        {}
      } else {
        stryCov_9fa48("14804");
        if (stryMutAct_9fa48("14807") ? !Array.isArray(keys) && !keys.length : stryMutAct_9fa48("14806") ? false : stryMutAct_9fa48("14805") ? true : (stryCov_9fa48("14805", "14806", "14807"), (stryMutAct_9fa48("14808") ? Array.isArray(keys) : (stryCov_9fa48("14808"), !Array.isArray(keys))) || (stryMutAct_9fa48("14809") ? keys.length : (stryCov_9fa48("14809"), !keys.length)))) {
          if (stryMutAct_9fa48("14810")) {
            {}
          } else {
            stryCov_9fa48("14810");
            return stryMutAct_9fa48("14811") ? ["Stryker was here"] : (stryCov_9fa48("14811"), []);
          }
        }
        value = helpers.valueToString(value);
        const results = await module.client.collection(stryMutAct_9fa48("14812") ? "" : (stryCov_9fa48("14812"), 'objects')).find(stryMutAct_9fa48("14813") ? {} : (stryCov_9fa48("14813"), {
          _key: stryMutAct_9fa48("14814") ? {} : (stryCov_9fa48("14814"), {
            $in: keys
          }),
          value: value
        }), stryMutAct_9fa48("14815") ? {} : (stryCov_9fa48("14815"), {
          projection: stryMutAct_9fa48("14816") ? {} : (stryCov_9fa48("14816"), {
            _id: 0,
            _key: 1,
            value: 1
          })
        })).toArray();
        const isMember = {};
        results.forEach(item => {
          if (stryMutAct_9fa48("14817")) {
            {}
          } else {
            stryCov_9fa48("14817");
            if (stryMutAct_9fa48("14819") ? false : stryMutAct_9fa48("14818") ? true : (stryCov_9fa48("14818", "14819"), item)) {
              if (stryMutAct_9fa48("14820")) {
                {}
              } else {
                stryCov_9fa48("14820");
                isMember[item._key] = stryMutAct_9fa48("14821") ? false : (stryCov_9fa48("14821"), true);
              }
            }
          }
        });
        return keys.map(stryMutAct_9fa48("14822") ? () => undefined : (stryCov_9fa48("14822"), key => stryMutAct_9fa48("14823") ? !isMember[key] : (stryCov_9fa48("14823"), !(stryMutAct_9fa48("14824") ? isMember[key] : (stryCov_9fa48("14824"), !isMember[key])))));
      }
    };
    module.getSortedSetMembers = async function (key) {
      if (stryMutAct_9fa48("14825")) {
        {}
      } else {
        stryCov_9fa48("14825");
        const data = await module.getSortedSetsMembers(stryMutAct_9fa48("14826") ? [] : (stryCov_9fa48("14826"), [key]));
        return stryMutAct_9fa48("14829") ? data || data[0] : stryMutAct_9fa48("14828") ? false : stryMutAct_9fa48("14827") ? true : (stryCov_9fa48("14827", "14828", "14829"), data && data[0]);
      }
    };
    module.getSortedSetsMembers = async function (keys) {
      if (stryMutAct_9fa48("14830")) {
        {}
      } else {
        stryCov_9fa48("14830");
        if (stryMutAct_9fa48("14833") ? !Array.isArray(keys) && !keys.length : stryMutAct_9fa48("14832") ? false : stryMutAct_9fa48("14831") ? true : (stryCov_9fa48("14831", "14832", "14833"), (stryMutAct_9fa48("14834") ? Array.isArray(keys) : (stryCov_9fa48("14834"), !Array.isArray(keys))) || (stryMutAct_9fa48("14835") ? keys.length : (stryCov_9fa48("14835"), !keys.length)))) {
          if (stryMutAct_9fa48("14836")) {
            {}
          } else {
            stryCov_9fa48("14836");
            return stryMutAct_9fa48("14837") ? ["Stryker was here"] : (stryCov_9fa48("14837"), []);
          }
        }
        const arrayOfKeys = stryMutAct_9fa48("14841") ? keys.length <= 1 : stryMutAct_9fa48("14840") ? keys.length >= 1 : stryMutAct_9fa48("14839") ? false : stryMutAct_9fa48("14838") ? true : (stryCov_9fa48("14838", "14839", "14840", "14841"), keys.length > 1);
        const projection = stryMutAct_9fa48("14842") ? {} : (stryCov_9fa48("14842"), {
          _id: 0,
          value: 1
        });
        if (stryMutAct_9fa48("14844") ? false : stryMutAct_9fa48("14843") ? true : (stryCov_9fa48("14843", "14844"), arrayOfKeys)) {
          if (stryMutAct_9fa48("14845")) {
            {}
          } else {
            stryCov_9fa48("14845");
            projection._key = 1;
          }
        }
        const data = await module.client.collection(stryMutAct_9fa48("14846") ? "" : (stryCov_9fa48("14846"), 'objects')).find(stryMutAct_9fa48("14847") ? {} : (stryCov_9fa48("14847"), {
          _key: arrayOfKeys ? stryMutAct_9fa48("14848") ? {} : (stryCov_9fa48("14848"), {
            $in: keys
          }) : keys[0]
        }), stryMutAct_9fa48("14849") ? {} : (stryCov_9fa48("14849"), {
          projection: projection
        })).toArray();
        if (stryMutAct_9fa48("14852") ? false : stryMutAct_9fa48("14851") ? true : stryMutAct_9fa48("14850") ? arrayOfKeys : (stryCov_9fa48("14850", "14851", "14852"), !arrayOfKeys)) {
          if (stryMutAct_9fa48("14853")) {
            {}
          } else {
            stryCov_9fa48("14853");
            return stryMutAct_9fa48("14854") ? [] : (stryCov_9fa48("14854"), [data.map(stryMutAct_9fa48("14855") ? () => undefined : (stryCov_9fa48("14855"), item => item.value))]);
          }
        }
        const sets = {};
        data.forEach(item => {
          if (stryMutAct_9fa48("14856")) {
            {}
          } else {
            stryCov_9fa48("14856");
            sets[item._key] = stryMutAct_9fa48("14859") ? sets[item._key] && [] : stryMutAct_9fa48("14858") ? false : stryMutAct_9fa48("14857") ? true : (stryCov_9fa48("14857", "14858", "14859"), sets[item._key] || (stryMutAct_9fa48("14860") ? ["Stryker was here"] : (stryCov_9fa48("14860"), [])));
            sets[item._key].push(item.value);
          }
        });
        return keys.map(stryMutAct_9fa48("14861") ? () => undefined : (stryCov_9fa48("14861"), k => stryMutAct_9fa48("14864") ? sets[k] && [] : stryMutAct_9fa48("14863") ? false : stryMutAct_9fa48("14862") ? true : (stryCov_9fa48("14862", "14863", "14864"), sets[k] || (stryMutAct_9fa48("14865") ? ["Stryker was here"] : (stryCov_9fa48("14865"), [])))));
      }
    };
    module.sortedSetIncrBy = async function (key, increment, value) {
      if (stryMutAct_9fa48("14866")) {
        {}
      } else {
        stryCov_9fa48("14866");
        if (stryMutAct_9fa48("14869") ? false : stryMutAct_9fa48("14868") ? true : stryMutAct_9fa48("14867") ? key : (stryCov_9fa48("14867", "14868", "14869"), !key)) {
          if (stryMutAct_9fa48("14870")) {
            {}
          } else {
            stryCov_9fa48("14870");
            return;
          }
        }
        const data = {};
        value = helpers.valueToString(value);
        data.score = parseFloat(increment);
        try {
          if (stryMutAct_9fa48("14871")) {
            {}
          } else {
            stryCov_9fa48("14871");
            const result = await module.client.collection(stryMutAct_9fa48("14872") ? "" : (stryCov_9fa48("14872"), 'objects')).findOneAndUpdate(stryMutAct_9fa48("14873") ? {} : (stryCov_9fa48("14873"), {
              _key: key,
              value: value
            }), stryMutAct_9fa48("14874") ? {} : (stryCov_9fa48("14874"), {
              $inc: data
            }), stryMutAct_9fa48("14875") ? {} : (stryCov_9fa48("14875"), {
              returnDocument: stryMutAct_9fa48("14876") ? "" : (stryCov_9fa48("14876"), 'after'),
              upsert: stryMutAct_9fa48("14877") ? false : (stryCov_9fa48("14877"), true)
            }));
            return (stryMutAct_9fa48("14880") ? result || result.value : stryMutAct_9fa48("14879") ? false : stryMutAct_9fa48("14878") ? true : (stryCov_9fa48("14878", "14879", "14880"), result && result.value)) ? result.value.score : null;
          }
        } catch (err) {
          if (stryMutAct_9fa48("14881")) {
            {}
          } else {
            stryCov_9fa48("14881");
            // if there is duplicate key error retry the upsert
            // https://github.com/NodeBB/NodeBB/issues/4467
            // https://jira.mongodb.org/browse/SERVER-14322
            // https://docs.mongodb.org/manual/reference/command/findAndModify/#upsert-and-unique-index
            if (stryMutAct_9fa48("14884") ? err || err.message.startsWith('E11000 duplicate key error') : stryMutAct_9fa48("14883") ? false : stryMutAct_9fa48("14882") ? true : (stryCov_9fa48("14882", "14883", "14884"), err && (stryMutAct_9fa48("14885") ? err.message.endsWith('E11000 duplicate key error') : (stryCov_9fa48("14885"), err.message.startsWith(stryMutAct_9fa48("14886") ? "" : (stryCov_9fa48("14886"), 'E11000 duplicate key error')))))) {
              if (stryMutAct_9fa48("14887")) {
                {}
              } else {
                stryCov_9fa48("14887");
                return await module.sortedSetIncrBy(key, increment, value);
              }
            }
            throw err;
          }
        }
      }
    };
    module.sortedSetIncrByBulk = async function (data) {
      if (stryMutAct_9fa48("14888")) {
        {}
      } else {
        stryCov_9fa48("14888");
        const bulk = module.client.collection(stryMutAct_9fa48("14889") ? "" : (stryCov_9fa48("14889"), 'objects')).initializeUnorderedBulkOp();
        data.forEach(item => {
          if (stryMutAct_9fa48("14890")) {
            {}
          } else {
            stryCov_9fa48("14890");
            bulk.find(stryMutAct_9fa48("14891") ? {} : (stryCov_9fa48("14891"), {
              _key: item[0],
              value: helpers.valueToString(item[2])
            })).upsert().update(stryMutAct_9fa48("14892") ? {} : (stryCov_9fa48("14892"), {
              $inc: stryMutAct_9fa48("14893") ? {} : (stryCov_9fa48("14893"), {
                score: parseFloat(item[1])
              })
            }));
          }
        });
        await bulk.execute();
        const result = await module.client.collection(stryMutAct_9fa48("14894") ? "" : (stryCov_9fa48("14894"), 'objects')).find(stryMutAct_9fa48("14895") ? {} : (stryCov_9fa48("14895"), {
          _key: stryMutAct_9fa48("14896") ? {} : (stryCov_9fa48("14896"), {
            $in: _.uniq(data.map(stryMutAct_9fa48("14897") ? () => undefined : (stryCov_9fa48("14897"), i => i[0])))
          }),
          value: stryMutAct_9fa48("14898") ? {} : (stryCov_9fa48("14898"), {
            $in: _.uniq(data.map(stryMutAct_9fa48("14899") ? () => undefined : (stryCov_9fa48("14899"), i => i[2])))
          })
        }), stryMutAct_9fa48("14900") ? {} : (stryCov_9fa48("14900"), {
          projection: stryMutAct_9fa48("14901") ? {} : (stryCov_9fa48("14901"), {
            _id: 0,
            _key: 1,
            value: 1,
            score: 1
          })
        })).toArray();
        const map = {};
        result.forEach(item => {
          if (stryMutAct_9fa48("14902")) {
            {}
          } else {
            stryCov_9fa48("14902");
            map[stryMutAct_9fa48("14903") ? `` : (stryCov_9fa48("14903"), `${item._key}:${item.value}`)] = item.score;
          }
        });
        return data.map(stryMutAct_9fa48("14904") ? () => undefined : (stryCov_9fa48("14904"), item => map[stryMutAct_9fa48("14905") ? `` : (stryCov_9fa48("14905"), `${item[0]}:${item[2]}`)]));
      }
    };
    module.getSortedSetRangeByLex = async function (key, min, max, start, count) {
      if (stryMutAct_9fa48("14906")) {
        {}
      } else {
        stryCov_9fa48("14906");
        return await sortedSetLex(key, min, max, 1, start, count);
      }
    };
    module.getSortedSetRevRangeByLex = async function (key, max, min, start, count) {
      if (stryMutAct_9fa48("14907")) {
        {}
      } else {
        stryCov_9fa48("14907");
        return await sortedSetLex(key, min, max, stryMutAct_9fa48("14908") ? +1 : (stryCov_9fa48("14908"), -1), start, count);
      }
    };
    module.sortedSetLexCount = async function (key, min, max) {
      if (stryMutAct_9fa48("14909")) {
        {}
      } else {
        stryCov_9fa48("14909");
        const data = await sortedSetLex(key, min, max, 1, 0, 0);
        return data ? data.length : null;
      }
    };
    async function sortedSetLex(key, min, max, sort, start, count) {
      if (stryMutAct_9fa48("14910")) {
        {}
      } else {
        stryCov_9fa48("14910");
        const query = stryMutAct_9fa48("14911") ? {} : (stryCov_9fa48("14911"), {
          _key: key
        });
        start = (stryMutAct_9fa48("14914") ? start === undefined : stryMutAct_9fa48("14913") ? false : stryMutAct_9fa48("14912") ? true : (stryCov_9fa48("14912", "14913", "14914"), start !== undefined)) ? start : 0;
        count = (stryMutAct_9fa48("14917") ? count === undefined : stryMutAct_9fa48("14916") ? false : stryMutAct_9fa48("14915") ? true : (stryCov_9fa48("14915", "14916", "14917"), count !== undefined)) ? count : 0;
        buildLexQuery(query, min, max);
        const data = await (stryMutAct_9fa48("14918") ? module.client.collection('objects').find(query, {
          projection: {
            _id: 0,
            value: 1
          }
        }).skip(start).limit(count === -1 ? 0 : count).toArray() : (stryCov_9fa48("14918"), module.client.collection(stryMutAct_9fa48("14919") ? "" : (stryCov_9fa48("14919"), 'objects')).find(query, stryMutAct_9fa48("14920") ? {} : (stryCov_9fa48("14920"), {
          projection: stryMutAct_9fa48("14921") ? {} : (stryCov_9fa48("14921"), {
            _id: 0,
            value: 1
          })
        })).sort(stryMutAct_9fa48("14922") ? {} : (stryCov_9fa48("14922"), {
          value: sort
        })).skip(start).limit((stryMutAct_9fa48("14925") ? count !== -1 : stryMutAct_9fa48("14924") ? false : stryMutAct_9fa48("14923") ? true : (stryCov_9fa48("14923", "14924", "14925"), count === (stryMutAct_9fa48("14926") ? +1 : (stryCov_9fa48("14926"), -1)))) ? 0 : count).toArray()));
        return data.map(stryMutAct_9fa48("14927") ? () => undefined : (stryCov_9fa48("14927"), item => stryMutAct_9fa48("14930") ? item || item.value : stryMutAct_9fa48("14929") ? false : stryMutAct_9fa48("14928") ? true : (stryCov_9fa48("14928", "14929", "14930"), item && item.value)));
      }
    }
    module.sortedSetRemoveRangeByLex = async function (key, min, max) {
      if (stryMutAct_9fa48("14931")) {
        {}
      } else {
        stryCov_9fa48("14931");
        const query = stryMutAct_9fa48("14932") ? {} : (stryCov_9fa48("14932"), {
          _key: key
        });
        buildLexQuery(query, min, max);
        await module.client.collection(stryMutAct_9fa48("14933") ? "" : (stryCov_9fa48("14933"), 'objects')).deleteMany(query);
      }
    };
    function buildLexQuery(query, min, max) {
      if (stryMutAct_9fa48("14934")) {
        {}
      } else {
        stryCov_9fa48("14934");
        if (stryMutAct_9fa48("14937") ? min === '-' : stryMutAct_9fa48("14936") ? false : stryMutAct_9fa48("14935") ? true : (stryCov_9fa48("14935", "14936", "14937"), min !== (stryMutAct_9fa48("14938") ? "" : (stryCov_9fa48("14938"), '-')))) {
          if (stryMutAct_9fa48("14939")) {
            {}
          } else {
            stryCov_9fa48("14939");
            if (stryMutAct_9fa48("14941") ? false : stryMutAct_9fa48("14940") ? true : (stryCov_9fa48("14940", "14941"), min.match(stryMutAct_9fa48("14942") ? /\(/ : (stryCov_9fa48("14942"), /^\(/)))) {
              if (stryMutAct_9fa48("14943")) {
                {}
              } else {
                stryCov_9fa48("14943");
                query.value = stryMutAct_9fa48("14944") ? {} : (stryCov_9fa48("14944"), {
                  $gt: stryMutAct_9fa48("14945") ? min : (stryCov_9fa48("14945"), min.slice(1))
                });
              }
            } else if (stryMutAct_9fa48("14947") ? false : stryMutAct_9fa48("14946") ? true : (stryCov_9fa48("14946", "14947"), min.match(stryMutAct_9fa48("14948") ? /\[/ : (stryCov_9fa48("14948"), /^\[/)))) {
              if (stryMutAct_9fa48("14949")) {
                {}
              } else {
                stryCov_9fa48("14949");
                query.value = stryMutAct_9fa48("14950") ? {} : (stryCov_9fa48("14950"), {
                  $gte: stryMutAct_9fa48("14951") ? min : (stryCov_9fa48("14951"), min.slice(1))
                });
              }
            } else {
              if (stryMutAct_9fa48("14952")) {
                {}
              } else {
                stryCov_9fa48("14952");
                query.value = stryMutAct_9fa48("14953") ? {} : (stryCov_9fa48("14953"), {
                  $gte: min
                });
              }
            }
          }
        }
        if (stryMutAct_9fa48("14956") ? max === '+' : stryMutAct_9fa48("14955") ? false : stryMutAct_9fa48("14954") ? true : (stryCov_9fa48("14954", "14955", "14956"), max !== (stryMutAct_9fa48("14957") ? "" : (stryCov_9fa48("14957"), '+')))) {
          if (stryMutAct_9fa48("14958")) {
            {}
          } else {
            stryCov_9fa48("14958");
            query.value = stryMutAct_9fa48("14961") ? query.value && {} : stryMutAct_9fa48("14960") ? false : stryMutAct_9fa48("14959") ? true : (stryCov_9fa48("14959", "14960", "14961"), query.value || {});
            if (stryMutAct_9fa48("14963") ? false : stryMutAct_9fa48("14962") ? true : (stryCov_9fa48("14962", "14963"), max.match(stryMutAct_9fa48("14964") ? /\(/ : (stryCov_9fa48("14964"), /^\(/)))) {
              if (stryMutAct_9fa48("14965")) {
                {}
              } else {
                stryCov_9fa48("14965");
                query.value.$lt = stryMutAct_9fa48("14966") ? max : (stryCov_9fa48("14966"), max.slice(1));
              }
            } else if (stryMutAct_9fa48("14968") ? false : stryMutAct_9fa48("14967") ? true : (stryCov_9fa48("14967", "14968"), max.match(stryMutAct_9fa48("14969") ? /\[/ : (stryCov_9fa48("14969"), /^\[/)))) {
              if (stryMutAct_9fa48("14970")) {
                {}
              } else {
                stryCov_9fa48("14970");
                query.value.$lte = stryMutAct_9fa48("14971") ? max : (stryCov_9fa48("14971"), max.slice(1));
              }
            } else {
              if (stryMutAct_9fa48("14972")) {
                {}
              } else {
                stryCov_9fa48("14972");
                query.value.$lte = max;
              }
            }
          }
        }
      }
    }
    module.getSortedSetScan = async function (params) {
      if (stryMutAct_9fa48("14973")) {
        {}
      } else {
        stryCov_9fa48("14973");
        const project = stryMutAct_9fa48("14974") ? {} : (stryCov_9fa48("14974"), {
          _id: 0,
          value: 1
        });
        if (stryMutAct_9fa48("14976") ? false : stryMutAct_9fa48("14975") ? true : (stryCov_9fa48("14975", "14976"), params.withScores)) {
          if (stryMutAct_9fa48("14977")) {
            {}
          } else {
            stryCov_9fa48("14977");
            project.score = 1;
          }
        }
        const match = helpers.buildMatchQuery(params.match);
        let regex;
        try {
          if (stryMutAct_9fa48("14978")) {
            {}
          } else {
            stryCov_9fa48("14978");
            regex = new RegExp(match);
          }
        } catch (err) {
          if (stryMutAct_9fa48("14979")) {
            {}
          } else {
            stryCov_9fa48("14979");
            return stryMutAct_9fa48("14980") ? ["Stryker was here"] : (stryCov_9fa48("14980"), []);
          }
        }
        const cursor = module.client.collection(stryMutAct_9fa48("14981") ? "" : (stryCov_9fa48("14981"), 'objects')).find(stryMutAct_9fa48("14982") ? {} : (stryCov_9fa48("14982"), {
          _key: params.key,
          value: stryMutAct_9fa48("14983") ? {} : (stryCov_9fa48("14983"), {
            $regex: regex
          })
        }), stryMutAct_9fa48("14984") ? {} : (stryCov_9fa48("14984"), {
          projection: project
        }));
        if (stryMutAct_9fa48("14986") ? false : stryMutAct_9fa48("14985") ? true : (stryCov_9fa48("14985", "14986"), params.limit)) {
          if (stryMutAct_9fa48("14987")) {
            {}
          } else {
            stryCov_9fa48("14987");
            cursor.limit(params.limit);
          }
        }
        const data = await cursor.toArray();
        if (stryMutAct_9fa48("14990") ? false : stryMutAct_9fa48("14989") ? true : stryMutAct_9fa48("14988") ? params.withScores : (stryCov_9fa48("14988", "14989", "14990"), !params.withScores)) {
          if (stryMutAct_9fa48("14991")) {
            {}
          } else {
            stryCov_9fa48("14991");
            return data.map(stryMutAct_9fa48("14992") ? () => undefined : (stryCov_9fa48("14992"), d => d.value));
          }
        }
        return data;
      }
    };
    module.processSortedSet = async function (setKey, processFn, options) {
      if (stryMutAct_9fa48("14993")) {
        {}
      } else {
        stryCov_9fa48("14993");
        let done = stryMutAct_9fa48("14994") ? true : (stryCov_9fa48("14994"), false);
        const ids = stryMutAct_9fa48("14995") ? ["Stryker was here"] : (stryCov_9fa48("14995"), []);
        const project = stryMutAct_9fa48("14996") ? {} : (stryCov_9fa48("14996"), {
          _id: 0,
          _key: 0
        });
        if (stryMutAct_9fa48("14999") ? false : stryMutAct_9fa48("14998") ? true : stryMutAct_9fa48("14997") ? options.withScores : (stryCov_9fa48("14997", "14998", "14999"), !options.withScores)) {
          if (stryMutAct_9fa48("15000")) {
            {}
          } else {
            stryCov_9fa48("15000");
            project.score = 0;
          }
        }
        const cursor = await (stryMutAct_9fa48("15001") ? module.client.collection('objects').find({
          _key: setKey
        }, {
          projection: project
        }).batchSize(options.batch) : (stryCov_9fa48("15001"), module.client.collection(stryMutAct_9fa48("15002") ? "" : (stryCov_9fa48("15002"), 'objects')).find(stryMutAct_9fa48("15003") ? {} : (stryCov_9fa48("15003"), {
          _key: setKey
        }), stryMutAct_9fa48("15004") ? {} : (stryCov_9fa48("15004"), {
          projection: project
        })).sort(stryMutAct_9fa48("15005") ? {} : (stryCov_9fa48("15005"), {
          score: 1
        })).batchSize(options.batch)));
        if (stryMutAct_9fa48("15008") ? processFn && processFn.constructor || processFn.constructor.name !== 'AsyncFunction' : stryMutAct_9fa48("15007") ? false : stryMutAct_9fa48("15006") ? true : (stryCov_9fa48("15006", "15007", "15008"), (stryMutAct_9fa48("15010") ? processFn || processFn.constructor : stryMutAct_9fa48("15009") ? true : (stryCov_9fa48("15009", "15010"), processFn && processFn.constructor)) && (stryMutAct_9fa48("15012") ? processFn.constructor.name === 'AsyncFunction' : stryMutAct_9fa48("15011") ? true : (stryCov_9fa48("15011", "15012"), processFn.constructor.name !== (stryMutAct_9fa48("15013") ? "" : (stryCov_9fa48("15013"), 'AsyncFunction')))))) {
          if (stryMutAct_9fa48("15014")) {
            {}
          } else {
            stryCov_9fa48("15014");
            processFn = util.promisify(processFn);
          }
        }
        while (stryMutAct_9fa48("15016") ? false : stryMutAct_9fa48("15015") ? done : (stryCov_9fa48("15015", "15016"), !done)) {
          if (stryMutAct_9fa48("15017")) {
            {}
          } else {
            stryCov_9fa48("15017");
            /* eslint-disable no-await-in-loop */
            const item = await cursor.next();
            if (stryMutAct_9fa48("15020") ? item !== null : stryMutAct_9fa48("15019") ? false : stryMutAct_9fa48("15018") ? true : (stryCov_9fa48("15018", "15019", "15020"), item === null)) {
              if (stryMutAct_9fa48("15021")) {
                {}
              } else {
                stryCov_9fa48("15021");
                done = stryMutAct_9fa48("15022") ? false : (stryCov_9fa48("15022"), true);
              }
            } else {
              if (stryMutAct_9fa48("15023")) {
                {}
              } else {
                stryCov_9fa48("15023");
                ids.push(options.withScores ? item : item.value);
              }
            }
            if (stryMutAct_9fa48("15026") ? ids.length >= options.batch && done && ids.length !== 0 : stryMutAct_9fa48("15025") ? false : stryMutAct_9fa48("15024") ? true : (stryCov_9fa48("15024", "15025", "15026"), (stryMutAct_9fa48("15029") ? ids.length < options.batch : stryMutAct_9fa48("15028") ? ids.length > options.batch : stryMutAct_9fa48("15027") ? false : (stryCov_9fa48("15027", "15028", "15029"), ids.length >= options.batch)) || (stryMutAct_9fa48("15031") ? done || ids.length !== 0 : stryMutAct_9fa48("15030") ? false : (stryCov_9fa48("15030", "15031"), done && (stryMutAct_9fa48("15033") ? ids.length === 0 : stryMutAct_9fa48("15032") ? true : (stryCov_9fa48("15032", "15033"), ids.length !== 0)))))) {
              if (stryMutAct_9fa48("15034")) {
                {}
              } else {
                stryCov_9fa48("15034");
                await processFn(ids);
                ids.length = 0;
                if (stryMutAct_9fa48("15036") ? false : stryMutAct_9fa48("15035") ? true : (stryCov_9fa48("15035", "15036"), options.interval)) {
                  if (stryMutAct_9fa48("15037")) {
                    {}
                  } else {
                    stryCov_9fa48("15037");
                    await sleep(options.interval);
                  }
                }
              }
            }
          }
        }
      }
    };
  }
};