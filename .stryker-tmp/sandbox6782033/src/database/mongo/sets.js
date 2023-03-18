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
  if (stryMutAct_9fa48("13706")) {
    {}
  } else {
    stryCov_9fa48("13706");
    const _ = require('lodash');
    const helpers = require('./helpers');
    module.setAdd = async function (key, value) {
      if (stryMutAct_9fa48("13707")) {
        {}
      } else {
        stryCov_9fa48("13707");
        if (stryMutAct_9fa48("13710") ? false : stryMutAct_9fa48("13709") ? true : stryMutAct_9fa48("13708") ? Array.isArray(value) : (stryCov_9fa48("13708", "13709", "13710"), !Array.isArray(value))) {
          if (stryMutAct_9fa48("13711")) {
            {}
          } else {
            stryCov_9fa48("13711");
            value = stryMutAct_9fa48("13712") ? [] : (stryCov_9fa48("13712"), [value]);
          }
        }
        if (stryMutAct_9fa48("13715") ? false : stryMutAct_9fa48("13714") ? true : stryMutAct_9fa48("13713") ? value.length : (stryCov_9fa48("13713", "13714", "13715"), !value.length)) {
          if (stryMutAct_9fa48("13716")) {
            {}
          } else {
            stryCov_9fa48("13716");
            return;
          }
        }
        value = value.map(stryMutAct_9fa48("13717") ? () => undefined : (stryCov_9fa48("13717"), v => helpers.valueToString(v)));
        await module.client.collection(stryMutAct_9fa48("13718") ? "" : (stryCov_9fa48("13718"), 'objects')).updateOne(stryMutAct_9fa48("13719") ? {} : (stryCov_9fa48("13719"), {
          _key: key
        }), stryMutAct_9fa48("13720") ? {} : (stryCov_9fa48("13720"), {
          $addToSet: stryMutAct_9fa48("13721") ? {} : (stryCov_9fa48("13721"), {
            members: stryMutAct_9fa48("13722") ? {} : (stryCov_9fa48("13722"), {
              $each: value
            })
          })
        }), stryMutAct_9fa48("13723") ? {} : (stryCov_9fa48("13723"), {
          upsert: stryMutAct_9fa48("13724") ? false : (stryCov_9fa48("13724"), true)
        }));
      }
    };
    module.setsAdd = async function (keys, value) {
      if (stryMutAct_9fa48("13725")) {
        {}
      } else {
        stryCov_9fa48("13725");
        if (stryMutAct_9fa48("13728") ? !Array.isArray(keys) && !keys.length : stryMutAct_9fa48("13727") ? false : stryMutAct_9fa48("13726") ? true : (stryCov_9fa48("13726", "13727", "13728"), (stryMutAct_9fa48("13729") ? Array.isArray(keys) : (stryCov_9fa48("13729"), !Array.isArray(keys))) || (stryMutAct_9fa48("13730") ? keys.length : (stryCov_9fa48("13730"), !keys.length)))) {
          if (stryMutAct_9fa48("13731")) {
            {}
          } else {
            stryCov_9fa48("13731");
            return;
          }
        }
        if (stryMutAct_9fa48("13734") ? false : stryMutAct_9fa48("13733") ? true : stryMutAct_9fa48("13732") ? Array.isArray(value) : (stryCov_9fa48("13732", "13733", "13734"), !Array.isArray(value))) {
          if (stryMutAct_9fa48("13735")) {
            {}
          } else {
            stryCov_9fa48("13735");
            value = stryMutAct_9fa48("13736") ? [] : (stryCov_9fa48("13736"), [value]);
          }
        }
        value = value.map(stryMutAct_9fa48("13737") ? () => undefined : (stryCov_9fa48("13737"), v => helpers.valueToString(v)));
        const bulk = module.client.collection(stryMutAct_9fa48("13738") ? "" : (stryCov_9fa48("13738"), 'objects')).initializeUnorderedBulkOp();
        for (let i = 0; stryMutAct_9fa48("13741") ? i >= keys.length : stryMutAct_9fa48("13740") ? i <= keys.length : stryMutAct_9fa48("13739") ? false : (stryCov_9fa48("13739", "13740", "13741"), i < keys.length); stryMutAct_9fa48("13742") ? i -= 1 : (stryCov_9fa48("13742"), i += 1)) {
          if (stryMutAct_9fa48("13743")) {
            {}
          } else {
            stryCov_9fa48("13743");
            bulk.find(stryMutAct_9fa48("13744") ? {} : (stryCov_9fa48("13744"), {
              _key: keys[i]
            })).upsert().updateOne(stryMutAct_9fa48("13745") ? {} : (stryCov_9fa48("13745"), {
              $addToSet: stryMutAct_9fa48("13746") ? {} : (stryCov_9fa48("13746"), {
                members: stryMutAct_9fa48("13747") ? {} : (stryCov_9fa48("13747"), {
                  $each: value
                })
              })
            }));
          }
        }
        try {
          if (stryMutAct_9fa48("13748")) {
            {}
          } else {
            stryCov_9fa48("13748");
            await bulk.execute();
          }
        } catch (err) {
          if (stryMutAct_9fa48("13749")) {
            {}
          } else {
            stryCov_9fa48("13749");
            if (stryMutAct_9fa48("13752") ? err || err.message.startsWith('E11000 duplicate key error') : stryMutAct_9fa48("13751") ? false : stryMutAct_9fa48("13750") ? true : (stryCov_9fa48("13750", "13751", "13752"), err && (stryMutAct_9fa48("13753") ? err.message.endsWith('E11000 duplicate key error') : (stryCov_9fa48("13753"), err.message.startsWith(stryMutAct_9fa48("13754") ? "" : (stryCov_9fa48("13754"), 'E11000 duplicate key error')))))) {
              if (stryMutAct_9fa48("13755")) {
                {}
              } else {
                stryCov_9fa48("13755");
                return await module.setsAdd(keys, value);
              }
            }
            throw err;
          }
        }
      }
    };
    module.setRemove = async function (key, value) {
      if (stryMutAct_9fa48("13756")) {
        {}
      } else {
        stryCov_9fa48("13756");
        if (stryMutAct_9fa48("13759") ? false : stryMutAct_9fa48("13758") ? true : stryMutAct_9fa48("13757") ? Array.isArray(value) : (stryCov_9fa48("13757", "13758", "13759"), !Array.isArray(value))) {
          if (stryMutAct_9fa48("13760")) {
            {}
          } else {
            stryCov_9fa48("13760");
            value = stryMutAct_9fa48("13761") ? [] : (stryCov_9fa48("13761"), [value]);
          }
        }
        value = value.map(stryMutAct_9fa48("13762") ? () => undefined : (stryCov_9fa48("13762"), v => helpers.valueToString(v)));
        await module.client.collection(stryMutAct_9fa48("13763") ? "" : (stryCov_9fa48("13763"), 'objects')).updateMany(stryMutAct_9fa48("13764") ? {} : (stryCov_9fa48("13764"), {
          _key: Array.isArray(key) ? stryMutAct_9fa48("13765") ? {} : (stryCov_9fa48("13765"), {
            $in: key
          }) : key
        }), stryMutAct_9fa48("13766") ? {} : (stryCov_9fa48("13766"), {
          $pullAll: stryMutAct_9fa48("13767") ? {} : (stryCov_9fa48("13767"), {
            members: value
          })
        }));
      }
    };
    module.setsRemove = async function (keys, value) {
      if (stryMutAct_9fa48("13768")) {
        {}
      } else {
        stryCov_9fa48("13768");
        if (stryMutAct_9fa48("13771") ? !Array.isArray(keys) && !keys.length : stryMutAct_9fa48("13770") ? false : stryMutAct_9fa48("13769") ? true : (stryCov_9fa48("13769", "13770", "13771"), (stryMutAct_9fa48("13772") ? Array.isArray(keys) : (stryCov_9fa48("13772"), !Array.isArray(keys))) || (stryMutAct_9fa48("13773") ? keys.length : (stryCov_9fa48("13773"), !keys.length)))) {
          if (stryMutAct_9fa48("13774")) {
            {}
          } else {
            stryCov_9fa48("13774");
            return;
          }
        }
        value = helpers.valueToString(value);
        await module.client.collection(stryMutAct_9fa48("13775") ? "" : (stryCov_9fa48("13775"), 'objects')).updateMany(stryMutAct_9fa48("13776") ? {} : (stryCov_9fa48("13776"), {
          _key: stryMutAct_9fa48("13777") ? {} : (stryCov_9fa48("13777"), {
            $in: keys
          })
        }), stryMutAct_9fa48("13778") ? {} : (stryCov_9fa48("13778"), {
          $pull: stryMutAct_9fa48("13779") ? {} : (stryCov_9fa48("13779"), {
            members: value
          })
        }));
      }
    };
    module.isSetMember = async function (key, value) {
      if (stryMutAct_9fa48("13780")) {
        {}
      } else {
        stryCov_9fa48("13780");
        if (stryMutAct_9fa48("13783") ? false : stryMutAct_9fa48("13782") ? true : stryMutAct_9fa48("13781") ? key : (stryCov_9fa48("13781", "13782", "13783"), !key)) {
          if (stryMutAct_9fa48("13784")) {
            {}
          } else {
            stryCov_9fa48("13784");
            return stryMutAct_9fa48("13785") ? true : (stryCov_9fa48("13785"), false);
          }
        }
        value = helpers.valueToString(value);
        const item = await module.client.collection(stryMutAct_9fa48("13786") ? "" : (stryCov_9fa48("13786"), 'objects')).findOne(stryMutAct_9fa48("13787") ? {} : (stryCov_9fa48("13787"), {
          _key: key,
          members: value
        }), stryMutAct_9fa48("13788") ? {} : (stryCov_9fa48("13788"), {
          projection: stryMutAct_9fa48("13789") ? {} : (stryCov_9fa48("13789"), {
            _id: 0,
            members: 0
          })
        }));
        return stryMutAct_9fa48("13792") ? item !== null || item !== undefined : stryMutAct_9fa48("13791") ? false : stryMutAct_9fa48("13790") ? true : (stryCov_9fa48("13790", "13791", "13792"), (stryMutAct_9fa48("13794") ? item === null : stryMutAct_9fa48("13793") ? true : (stryCov_9fa48("13793", "13794"), item !== null)) && (stryMutAct_9fa48("13796") ? item === undefined : stryMutAct_9fa48("13795") ? true : (stryCov_9fa48("13795", "13796"), item !== undefined)));
      }
    };
    module.isSetMembers = async function (key, values) {
      if (stryMutAct_9fa48("13797")) {
        {}
      } else {
        stryCov_9fa48("13797");
        if (stryMutAct_9fa48("13800") ? (!key || !Array.isArray(values)) && !values.length : stryMutAct_9fa48("13799") ? false : stryMutAct_9fa48("13798") ? true : (stryCov_9fa48("13798", "13799", "13800"), (stryMutAct_9fa48("13802") ? !key && !Array.isArray(values) : stryMutAct_9fa48("13801") ? false : (stryCov_9fa48("13801", "13802"), (stryMutAct_9fa48("13803") ? key : (stryCov_9fa48("13803"), !key)) || (stryMutAct_9fa48("13804") ? Array.isArray(values) : (stryCov_9fa48("13804"), !Array.isArray(values))))) || (stryMutAct_9fa48("13805") ? values.length : (stryCov_9fa48("13805"), !values.length)))) {
          if (stryMutAct_9fa48("13806")) {
            {}
          } else {
            stryCov_9fa48("13806");
            return stryMutAct_9fa48("13807") ? ["Stryker was here"] : (stryCov_9fa48("13807"), []);
          }
        }
        values = values.map(stryMutAct_9fa48("13808") ? () => undefined : (stryCov_9fa48("13808"), v => helpers.valueToString(v)));
        const result = await module.client.collection(stryMutAct_9fa48("13809") ? "" : (stryCov_9fa48("13809"), 'objects')).findOne(stryMutAct_9fa48("13810") ? {} : (stryCov_9fa48("13810"), {
          _key: key
        }), stryMutAct_9fa48("13811") ? {} : (stryCov_9fa48("13811"), {
          projection: stryMutAct_9fa48("13812") ? {} : (stryCov_9fa48("13812"), {
            _id: 0,
            _key: 0
          })
        }));
        const membersSet = new Set((stryMutAct_9fa48("13815") ? result || Array.isArray(result.members) : stryMutAct_9fa48("13814") ? false : stryMutAct_9fa48("13813") ? true : (stryCov_9fa48("13813", "13814", "13815"), result && Array.isArray(result.members))) ? result.members : stryMutAct_9fa48("13816") ? ["Stryker was here"] : (stryCov_9fa48("13816"), []));
        return values.map(stryMutAct_9fa48("13817") ? () => undefined : (stryCov_9fa48("13817"), v => membersSet.has(v)));
      }
    };
    module.isMemberOfSets = async function (sets, value) {
      if (stryMutAct_9fa48("13818")) {
        {}
      } else {
        stryCov_9fa48("13818");
        if (stryMutAct_9fa48("13821") ? !Array.isArray(sets) && !sets.length : stryMutAct_9fa48("13820") ? false : stryMutAct_9fa48("13819") ? true : (stryCov_9fa48("13819", "13820", "13821"), (stryMutAct_9fa48("13822") ? Array.isArray(sets) : (stryCov_9fa48("13822"), !Array.isArray(sets))) || (stryMutAct_9fa48("13823") ? sets.length : (stryCov_9fa48("13823"), !sets.length)))) {
          if (stryMutAct_9fa48("13824")) {
            {}
          } else {
            stryCov_9fa48("13824");
            return stryMutAct_9fa48("13825") ? ["Stryker was here"] : (stryCov_9fa48("13825"), []);
          }
        }
        value = helpers.valueToString(value);
        const result = await module.client.collection(stryMutAct_9fa48("13826") ? "" : (stryCov_9fa48("13826"), 'objects')).find(stryMutAct_9fa48("13827") ? {} : (stryCov_9fa48("13827"), {
          _key: stryMutAct_9fa48("13828") ? {} : (stryCov_9fa48("13828"), {
            $in: sets
          }),
          members: value
        }), stryMutAct_9fa48("13829") ? {} : (stryCov_9fa48("13829"), {
          projection: stryMutAct_9fa48("13830") ? {} : (stryCov_9fa48("13830"), {
            _id: 0,
            members: 0
          })
        })).toArray();
        const map = {};
        result.forEach(item => {
          if (stryMutAct_9fa48("13831")) {
            {}
          } else {
            stryCov_9fa48("13831");
            map[item._key] = stryMutAct_9fa48("13832") ? false : (stryCov_9fa48("13832"), true);
          }
        });
        return sets.map(stryMutAct_9fa48("13833") ? () => undefined : (stryCov_9fa48("13833"), set => stryMutAct_9fa48("13834") ? !map[set] : (stryCov_9fa48("13834"), !(stryMutAct_9fa48("13835") ? map[set] : (stryCov_9fa48("13835"), !map[set])))));
      }
    };
    module.getSetMembers = async function (key) {
      if (stryMutAct_9fa48("13836")) {
        {}
      } else {
        stryCov_9fa48("13836");
        if (stryMutAct_9fa48("13839") ? false : stryMutAct_9fa48("13838") ? true : stryMutAct_9fa48("13837") ? key : (stryCov_9fa48("13837", "13838", "13839"), !key)) {
          if (stryMutAct_9fa48("13840")) {
            {}
          } else {
            stryCov_9fa48("13840");
            return stryMutAct_9fa48("13841") ? ["Stryker was here"] : (stryCov_9fa48("13841"), []);
          }
        }
        const data = await module.client.collection(stryMutAct_9fa48("13842") ? "" : (stryCov_9fa48("13842"), 'objects')).findOne(stryMutAct_9fa48("13843") ? {} : (stryCov_9fa48("13843"), {
          _key: key
        }), stryMutAct_9fa48("13844") ? {} : (stryCov_9fa48("13844"), {
          projection: stryMutAct_9fa48("13845") ? {} : (stryCov_9fa48("13845"), {
            _id: 0,
            _key: 0
          })
        }));
        return data ? data.members : stryMutAct_9fa48("13846") ? ["Stryker was here"] : (stryCov_9fa48("13846"), []);
      }
    };
    module.getSetsMembers = async function (keys) {
      if (stryMutAct_9fa48("13847")) {
        {}
      } else {
        stryCov_9fa48("13847");
        if (stryMutAct_9fa48("13850") ? !Array.isArray(keys) && !keys.length : stryMutAct_9fa48("13849") ? false : stryMutAct_9fa48("13848") ? true : (stryCov_9fa48("13848", "13849", "13850"), (stryMutAct_9fa48("13851") ? Array.isArray(keys) : (stryCov_9fa48("13851"), !Array.isArray(keys))) || (stryMutAct_9fa48("13852") ? keys.length : (stryCov_9fa48("13852"), !keys.length)))) {
          if (stryMutAct_9fa48("13853")) {
            {}
          } else {
            stryCov_9fa48("13853");
            return stryMutAct_9fa48("13854") ? ["Stryker was here"] : (stryCov_9fa48("13854"), []);
          }
        }
        const data = await module.client.collection(stryMutAct_9fa48("13855") ? "" : (stryCov_9fa48("13855"), 'objects')).find(stryMutAct_9fa48("13856") ? {} : (stryCov_9fa48("13856"), {
          _key: stryMutAct_9fa48("13857") ? {} : (stryCov_9fa48("13857"), {
            $in: keys
          })
        }), stryMutAct_9fa48("13858") ? {} : (stryCov_9fa48("13858"), {
          projection: stryMutAct_9fa48("13859") ? {} : (stryCov_9fa48("13859"), {
            _id: 0
          })
        })).toArray();
        const sets = {};
        data.forEach(set => {
          if (stryMutAct_9fa48("13860")) {
            {}
          } else {
            stryCov_9fa48("13860");
            sets[set._key] = stryMutAct_9fa48("13863") ? set.members && [] : stryMutAct_9fa48("13862") ? false : stryMutAct_9fa48("13861") ? true : (stryCov_9fa48("13861", "13862", "13863"), set.members || (stryMutAct_9fa48("13864") ? ["Stryker was here"] : (stryCov_9fa48("13864"), [])));
          }
        });
        return keys.map(stryMutAct_9fa48("13865") ? () => undefined : (stryCov_9fa48("13865"), k => stryMutAct_9fa48("13868") ? sets[k] && [] : stryMutAct_9fa48("13867") ? false : stryMutAct_9fa48("13866") ? true : (stryCov_9fa48("13866", "13867", "13868"), sets[k] || (stryMutAct_9fa48("13869") ? ["Stryker was here"] : (stryCov_9fa48("13869"), [])))));
      }
    };
    module.setCount = async function (key) {
      if (stryMutAct_9fa48("13870")) {
        {}
      } else {
        stryCov_9fa48("13870");
        if (stryMutAct_9fa48("13873") ? false : stryMutAct_9fa48("13872") ? true : stryMutAct_9fa48("13871") ? key : (stryCov_9fa48("13871", "13872", "13873"), !key)) {
          if (stryMutAct_9fa48("13874")) {
            {}
          } else {
            stryCov_9fa48("13874");
            return 0;
          }
        }
        const data = await module.client.collection(stryMutAct_9fa48("13875") ? "" : (stryCov_9fa48("13875"), 'objects')).aggregate(stryMutAct_9fa48("13876") ? [] : (stryCov_9fa48("13876"), [stryMutAct_9fa48("13877") ? {} : (stryCov_9fa48("13877"), {
          $match: stryMutAct_9fa48("13878") ? {} : (stryCov_9fa48("13878"), {
            _key: key
          })
        }), stryMutAct_9fa48("13879") ? {} : (stryCov_9fa48("13879"), {
          $project: stryMutAct_9fa48("13880") ? {} : (stryCov_9fa48("13880"), {
            _id: 0,
            count: stryMutAct_9fa48("13881") ? {} : (stryCov_9fa48("13881"), {
              $size: stryMutAct_9fa48("13882") ? "" : (stryCov_9fa48("13882"), '$members')
            })
          })
        })])).toArray();
        return (stryMutAct_9fa48("13885") ? Array.isArray(data) || data.length : stryMutAct_9fa48("13884") ? false : stryMutAct_9fa48("13883") ? true : (stryCov_9fa48("13883", "13884", "13885"), Array.isArray(data) && data.length)) ? data[0].count : 0;
      }
    };
    module.setsCount = async function (keys) {
      if (stryMutAct_9fa48("13886")) {
        {}
      } else {
        stryCov_9fa48("13886");
        const data = await module.client.collection(stryMutAct_9fa48("13887") ? "" : (stryCov_9fa48("13887"), 'objects')).aggregate(stryMutAct_9fa48("13888") ? [] : (stryCov_9fa48("13888"), [stryMutAct_9fa48("13889") ? {} : (stryCov_9fa48("13889"), {
          $match: stryMutAct_9fa48("13890") ? {} : (stryCov_9fa48("13890"), {
            _key: stryMutAct_9fa48("13891") ? {} : (stryCov_9fa48("13891"), {
              $in: keys
            })
          })
        }), stryMutAct_9fa48("13892") ? {} : (stryCov_9fa48("13892"), {
          $project: stryMutAct_9fa48("13893") ? {} : (stryCov_9fa48("13893"), {
            _id: 0,
            _key: 1,
            count: stryMutAct_9fa48("13894") ? {} : (stryCov_9fa48("13894"), {
              $size: stryMutAct_9fa48("13895") ? "" : (stryCov_9fa48("13895"), '$members')
            })
          })
        })])).toArray();
        const map = _.keyBy(data, stryMutAct_9fa48("13896") ? "" : (stryCov_9fa48("13896"), '_key'));
        return keys.map(stryMutAct_9fa48("13897") ? () => undefined : (stryCov_9fa48("13897"), key => map.hasOwnProperty(key) ? map[key].count : 0));
      }
    };
    module.setRemoveRandom = async function (key) {
      if (stryMutAct_9fa48("13898")) {
        {}
      } else {
        stryCov_9fa48("13898");
        const data = await module.client.collection(stryMutAct_9fa48("13899") ? "" : (stryCov_9fa48("13899"), 'objects')).findOne(stryMutAct_9fa48("13900") ? {} : (stryCov_9fa48("13900"), {
          _key: key
        }));
        if (stryMutAct_9fa48("13903") ? false : stryMutAct_9fa48("13902") ? true : stryMutAct_9fa48("13901") ? data : (stryCov_9fa48("13901", "13902", "13903"), !data)) {
          if (stryMutAct_9fa48("13904")) {
            {}
          } else {
            stryCov_9fa48("13904");
            return;
          }
        }
        const randomIndex = Math.floor(stryMutAct_9fa48("13905") ? Math.random() / data.members.length : (stryCov_9fa48("13905"), Math.random() * data.members.length));
        const value = data.members[randomIndex];
        await module.setRemove(data._key, value);
        return value;
      }
    };
  }
};