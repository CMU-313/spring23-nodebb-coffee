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
  if (stryMutAct_9fa48("14345")) {
    {}
  } else {
    stryCov_9fa48("14345");
    module.sortedSetUnionCard = async function (keys) {
      if (stryMutAct_9fa48("14346")) {
        {}
      } else {
        stryCov_9fa48("14346");
        if (stryMutAct_9fa48("14349") ? !Array.isArray(keys) && !keys.length : stryMutAct_9fa48("14348") ? false : stryMutAct_9fa48("14347") ? true : (stryCov_9fa48("14347", "14348", "14349"), (stryMutAct_9fa48("14350") ? Array.isArray(keys) : (stryCov_9fa48("14350"), !Array.isArray(keys))) || (stryMutAct_9fa48("14351") ? keys.length : (stryCov_9fa48("14351"), !keys.length)))) {
          if (stryMutAct_9fa48("14352")) {
            {}
          } else {
            stryCov_9fa48("14352");
            return 0;
          }
        }
        const data = await module.client.collection(stryMutAct_9fa48("14353") ? "" : (stryCov_9fa48("14353"), 'objects')).aggregate(stryMutAct_9fa48("14354") ? [] : (stryCov_9fa48("14354"), [stryMutAct_9fa48("14355") ? {} : (stryCov_9fa48("14355"), {
          $match: stryMutAct_9fa48("14356") ? {} : (stryCov_9fa48("14356"), {
            _key: stryMutAct_9fa48("14357") ? {} : (stryCov_9fa48("14357"), {
              $in: keys
            })
          })
        }), stryMutAct_9fa48("14358") ? {} : (stryCov_9fa48("14358"), {
          $group: stryMutAct_9fa48("14359") ? {} : (stryCov_9fa48("14359"), {
            _id: stryMutAct_9fa48("14360") ? {} : (stryCov_9fa48("14360"), {
              value: stryMutAct_9fa48("14361") ? "" : (stryCov_9fa48("14361"), '$value')
            })
          })
        }), stryMutAct_9fa48("14362") ? {} : (stryCov_9fa48("14362"), {
          $group: stryMutAct_9fa48("14363") ? {} : (stryCov_9fa48("14363"), {
            _id: null,
            count: stryMutAct_9fa48("14364") ? {} : (stryCov_9fa48("14364"), {
              $sum: 1
            })
          })
        })])).toArray();
        return (stryMutAct_9fa48("14367") ? Array.isArray(data) || data.length : stryMutAct_9fa48("14366") ? false : stryMutAct_9fa48("14365") ? true : (stryCov_9fa48("14365", "14366", "14367"), Array.isArray(data) && data.length)) ? data[0].count : 0;
      }
    };
    module.getSortedSetUnion = async function (params) {
      if (stryMutAct_9fa48("14368")) {
        {}
      } else {
        stryCov_9fa48("14368");
        params.sort = 1;
        return await getSortedSetUnion(params);
      }
    };
    module.getSortedSetRevUnion = async function (params) {
      if (stryMutAct_9fa48("14369")) {
        {}
      } else {
        stryCov_9fa48("14369");
        params.sort = stryMutAct_9fa48("14370") ? +1 : (stryCov_9fa48("14370"), -1);
        return await getSortedSetUnion(params);
      }
    };
    async function getSortedSetUnion(params) {
      if (stryMutAct_9fa48("14371")) {
        {}
      } else {
        stryCov_9fa48("14371");
        if (stryMutAct_9fa48("14374") ? !Array.isArray(params.sets) && !params.sets.length : stryMutAct_9fa48("14373") ? false : stryMutAct_9fa48("14372") ? true : (stryCov_9fa48("14372", "14373", "14374"), (stryMutAct_9fa48("14375") ? Array.isArray(params.sets) : (stryCov_9fa48("14375"), !Array.isArray(params.sets))) || (stryMutAct_9fa48("14376") ? params.sets.length : (stryCov_9fa48("14376"), !params.sets.length)))) {
          if (stryMutAct_9fa48("14377")) {
            {}
          } else {
            stryCov_9fa48("14377");
            return;
          }
        }
        let limit = stryMutAct_9fa48("14378") ? params.stop - params.start - 1 : (stryCov_9fa48("14378"), (stryMutAct_9fa48("14379") ? params.stop + params.start : (stryCov_9fa48("14379"), params.stop - params.start)) + 1);
        if (stryMutAct_9fa48("14383") ? limit > 0 : stryMutAct_9fa48("14382") ? limit < 0 : stryMutAct_9fa48("14381") ? false : stryMutAct_9fa48("14380") ? true : (stryCov_9fa48("14380", "14381", "14382", "14383"), limit <= 0)) {
          if (stryMutAct_9fa48("14384")) {
            {}
          } else {
            stryCov_9fa48("14384");
            limit = 0;
          }
        }
        const aggregate = {};
        if (stryMutAct_9fa48("14386") ? false : stryMutAct_9fa48("14385") ? true : (stryCov_9fa48("14385", "14386"), params.aggregate)) {
          if (stryMutAct_9fa48("14387")) {
            {}
          } else {
            stryCov_9fa48("14387");
            aggregate[stryMutAct_9fa48("14388") ? `` : (stryCov_9fa48("14388"), `$${stryMutAct_9fa48("14389") ? params.aggregate.toUpperCase() : (stryCov_9fa48("14389"), params.aggregate.toLowerCase())}`)] = stryMutAct_9fa48("14390") ? "" : (stryCov_9fa48("14390"), '$score');
          }
        } else {
          if (stryMutAct_9fa48("14391")) {
            {}
          } else {
            stryCov_9fa48("14391");
            aggregate.$sum = stryMutAct_9fa48("14392") ? "" : (stryCov_9fa48("14392"), '$score');
          }
        }
        const pipeline = stryMutAct_9fa48("14393") ? [] : (stryCov_9fa48("14393"), [stryMutAct_9fa48("14394") ? {} : (stryCov_9fa48("14394"), {
          $match: stryMutAct_9fa48("14395") ? {} : (stryCov_9fa48("14395"), {
            _key: stryMutAct_9fa48("14396") ? {} : (stryCov_9fa48("14396"), {
              $in: params.sets
            })
          })
        }), stryMutAct_9fa48("14397") ? {} : (stryCov_9fa48("14397"), {
          $group: stryMutAct_9fa48("14398") ? {} : (stryCov_9fa48("14398"), {
            _id: stryMutAct_9fa48("14399") ? {} : (stryCov_9fa48("14399"), {
              value: stryMutAct_9fa48("14400") ? "" : (stryCov_9fa48("14400"), '$value')
            }),
            totalScore: aggregate
          })
        }), stryMutAct_9fa48("14401") ? {} : (stryCov_9fa48("14401"), {
          $sort: stryMutAct_9fa48("14402") ? {} : (stryCov_9fa48("14402"), {
            totalScore: params.sort
          })
        })]);
        if (stryMutAct_9fa48("14404") ? false : stryMutAct_9fa48("14403") ? true : (stryCov_9fa48("14403", "14404"), params.start)) {
          if (stryMutAct_9fa48("14405")) {
            {}
          } else {
            stryCov_9fa48("14405");
            pipeline.push(stryMutAct_9fa48("14406") ? {} : (stryCov_9fa48("14406"), {
              $skip: params.start
            }));
          }
        }
        if (stryMutAct_9fa48("14410") ? limit <= 0 : stryMutAct_9fa48("14409") ? limit >= 0 : stryMutAct_9fa48("14408") ? false : stryMutAct_9fa48("14407") ? true : (stryCov_9fa48("14407", "14408", "14409", "14410"), limit > 0)) {
          if (stryMutAct_9fa48("14411")) {
            {}
          } else {
            stryCov_9fa48("14411");
            pipeline.push(stryMutAct_9fa48("14412") ? {} : (stryCov_9fa48("14412"), {
              $limit: limit
            }));
          }
        }
        const project = stryMutAct_9fa48("14413") ? {} : (stryCov_9fa48("14413"), {
          _id: 0,
          value: stryMutAct_9fa48("14414") ? "" : (stryCov_9fa48("14414"), '$_id.value')
        });
        if (stryMutAct_9fa48("14416") ? false : stryMutAct_9fa48("14415") ? true : (stryCov_9fa48("14415", "14416"), params.withScores)) {
          if (stryMutAct_9fa48("14417")) {
            {}
          } else {
            stryCov_9fa48("14417");
            project.score = stryMutAct_9fa48("14418") ? "" : (stryCov_9fa48("14418"), '$totalScore');
          }
        }
        pipeline.push(stryMutAct_9fa48("14419") ? {} : (stryCov_9fa48("14419"), {
          $project: project
        }));
        let data = await module.client.collection(stryMutAct_9fa48("14420") ? "" : (stryCov_9fa48("14420"), 'objects')).aggregate(pipeline).toArray();
        if (stryMutAct_9fa48("14423") ? false : stryMutAct_9fa48("14422") ? true : stryMutAct_9fa48("14421") ? params.withScores : (stryCov_9fa48("14421", "14422", "14423"), !params.withScores)) {
          if (stryMutAct_9fa48("14424")) {
            {}
          } else {
            stryCov_9fa48("14424");
            data = data.map(stryMutAct_9fa48("14425") ? () => undefined : (stryCov_9fa48("14425"), item => item.value));
          }
        }
        return data;
      }
    }
  }
};