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
  if (stryMutAct_9fa48("13093")) {
    {}
  } else {
    stryCov_9fa48("13093");
    const helpers = require('./helpers');
    const cache = require('../cache').create(stryMutAct_9fa48("13094") ? "" : (stryCov_9fa48("13094"), 'mongo'));
    module.objectCache = cache;
    module.setObject = async function (key, data) {
      if (stryMutAct_9fa48("13095")) {
        {}
      } else {
        stryCov_9fa48("13095");
        const isArray = Array.isArray(key);
        if (stryMutAct_9fa48("13098") ? (!key || !data) && isArray && !key.length : stryMutAct_9fa48("13097") ? false : stryMutAct_9fa48("13096") ? true : (stryCov_9fa48("13096", "13097", "13098"), (stryMutAct_9fa48("13100") ? !key && !data : stryMutAct_9fa48("13099") ? false : (stryCov_9fa48("13099", "13100"), (stryMutAct_9fa48("13101") ? key : (stryCov_9fa48("13101"), !key)) || (stryMutAct_9fa48("13102") ? data : (stryCov_9fa48("13102"), !data)))) || (stryMutAct_9fa48("13104") ? isArray || !key.length : stryMutAct_9fa48("13103") ? false : (stryCov_9fa48("13103", "13104"), isArray && (stryMutAct_9fa48("13105") ? key.length : (stryCov_9fa48("13105"), !key.length)))))) {
          if (stryMutAct_9fa48("13106")) {
            {}
          } else {
            stryCov_9fa48("13106");
            return;
          }
        }
        const writeData = helpers.serializeData(data);
        if (stryMutAct_9fa48("13109") ? false : stryMutAct_9fa48("13108") ? true : stryMutAct_9fa48("13107") ? Object.keys(writeData).length : (stryCov_9fa48("13107", "13108", "13109"), !Object.keys(writeData).length)) {
          if (stryMutAct_9fa48("13110")) {
            {}
          } else {
            stryCov_9fa48("13110");
            return;
          }
        }
        try {
          if (stryMutAct_9fa48("13111")) {
            {}
          } else {
            stryCov_9fa48("13111");
            if (stryMutAct_9fa48("13113") ? false : stryMutAct_9fa48("13112") ? true : (stryCov_9fa48("13112", "13113"), isArray)) {
              if (stryMutAct_9fa48("13114")) {
                {}
              } else {
                stryCov_9fa48("13114");
                const bulk = module.client.collection(stryMutAct_9fa48("13115") ? "" : (stryCov_9fa48("13115"), 'objects')).initializeUnorderedBulkOp();
                key.forEach(stryMutAct_9fa48("13116") ? () => undefined : (stryCov_9fa48("13116"), key => bulk.find(stryMutAct_9fa48("13117") ? {} : (stryCov_9fa48("13117"), {
                  _key: key
                })).upsert().updateOne(stryMutAct_9fa48("13118") ? {} : (stryCov_9fa48("13118"), {
                  $set: writeData
                }))));
                await bulk.execute();
              }
            } else {
              if (stryMutAct_9fa48("13119")) {
                {}
              } else {
                stryCov_9fa48("13119");
                await module.client.collection(stryMutAct_9fa48("13120") ? "" : (stryCov_9fa48("13120"), 'objects')).updateOne(stryMutAct_9fa48("13121") ? {} : (stryCov_9fa48("13121"), {
                  _key: key
                }), stryMutAct_9fa48("13122") ? {} : (stryCov_9fa48("13122"), {
                  $set: writeData
                }), stryMutAct_9fa48("13123") ? {} : (stryCov_9fa48("13123"), {
                  upsert: stryMutAct_9fa48("13124") ? false : (stryCov_9fa48("13124"), true)
                }));
              }
            }
          }
        } catch (err) {
          if (stryMutAct_9fa48("13125")) {
            {}
          } else {
            stryCov_9fa48("13125");
            if (stryMutAct_9fa48("13128") ? err || err.message.startsWith('E11000 duplicate key error') : stryMutAct_9fa48("13127") ? false : stryMutAct_9fa48("13126") ? true : (stryCov_9fa48("13126", "13127", "13128"), err && (stryMutAct_9fa48("13129") ? err.message.endsWith('E11000 duplicate key error') : (stryCov_9fa48("13129"), err.message.startsWith(stryMutAct_9fa48("13130") ? "" : (stryCov_9fa48("13130"), 'E11000 duplicate key error')))))) {
              if (stryMutAct_9fa48("13131")) {
                {}
              } else {
                stryCov_9fa48("13131");
                return await module.setObject(key, data);
              }
            }
            throw err;
          }
        }
        cache.del(key);
      }
    };
    module.setObjectBulk = async function (...args) {
      if (stryMutAct_9fa48("13132")) {
        {}
      } else {
        stryCov_9fa48("13132");
        let data = args[0];
        if (stryMutAct_9fa48("13135") ? !Array.isArray(data) && !data.length : stryMutAct_9fa48("13134") ? false : stryMutAct_9fa48("13133") ? true : (stryCov_9fa48("13133", "13134", "13135"), (stryMutAct_9fa48("13136") ? Array.isArray(data) : (stryCov_9fa48("13136"), !Array.isArray(data))) || (stryMutAct_9fa48("13137") ? data.length : (stryCov_9fa48("13137"), !data.length)))) {
          if (stryMutAct_9fa48("13138")) {
            {}
          } else {
            stryCov_9fa48("13138");
            return;
          }
        }
        if (stryMutAct_9fa48("13140") ? false : stryMutAct_9fa48("13139") ? true : (stryCov_9fa48("13139", "13140"), Array.isArray(args[1]))) {
          if (stryMutAct_9fa48("13141")) {
            {}
          } else {
            stryCov_9fa48("13141");
            console.warn(stryMutAct_9fa48("13142") ? "" : (stryCov_9fa48("13142"), '[deprecated] db.setObjectBulk(keys, data) usage is deprecated, please use db.setObjectBulk(data)'));
            // conver old format to new format for backwards compatibility
            data = args[0].map(stryMutAct_9fa48("13143") ? () => undefined : (stryCov_9fa48("13143"), (key, i) => stryMutAct_9fa48("13144") ? [] : (stryCov_9fa48("13144"), [key, args[1][i]])));
          }
        }
        try {
          if (stryMutAct_9fa48("13145")) {
            {}
          } else {
            stryCov_9fa48("13145");
            let bulk;
            data.forEach(item => {
              if (stryMutAct_9fa48("13146")) {
                {}
              } else {
                stryCov_9fa48("13146");
                const writeData = helpers.serializeData(item[1]);
                if (stryMutAct_9fa48("13148") ? false : stryMutAct_9fa48("13147") ? true : (stryCov_9fa48("13147", "13148"), Object.keys(writeData).length)) {
                  if (stryMutAct_9fa48("13149")) {
                    {}
                  } else {
                    stryCov_9fa48("13149");
                    if (stryMutAct_9fa48("13152") ? false : stryMutAct_9fa48("13151") ? true : stryMutAct_9fa48("13150") ? bulk : (stryCov_9fa48("13150", "13151", "13152"), !bulk)) {
                      if (stryMutAct_9fa48("13153")) {
                        {}
                      } else {
                        stryCov_9fa48("13153");
                        bulk = module.client.collection(stryMutAct_9fa48("13154") ? "" : (stryCov_9fa48("13154"), 'objects')).initializeUnorderedBulkOp();
                      }
                    }
                    bulk.find(stryMutAct_9fa48("13155") ? {} : (stryCov_9fa48("13155"), {
                      _key: item[0]
                    })).upsert().updateOne(stryMutAct_9fa48("13156") ? {} : (stryCov_9fa48("13156"), {
                      $set: writeData
                    }));
                  }
                }
              }
            });
            if (stryMutAct_9fa48("13158") ? false : stryMutAct_9fa48("13157") ? true : (stryCov_9fa48("13157", "13158"), bulk)) {
              if (stryMutAct_9fa48("13159")) {
                {}
              } else {
                stryCov_9fa48("13159");
                await bulk.execute();
              }
            }
          }
        } catch (err) {
          if (stryMutAct_9fa48("13160")) {
            {}
          } else {
            stryCov_9fa48("13160");
            if (stryMutAct_9fa48("13163") ? err || err.message.startsWith('E11000 duplicate key error') : stryMutAct_9fa48("13162") ? false : stryMutAct_9fa48("13161") ? true : (stryCov_9fa48("13161", "13162", "13163"), err && (stryMutAct_9fa48("13164") ? err.message.endsWith('E11000 duplicate key error') : (stryCov_9fa48("13164"), err.message.startsWith(stryMutAct_9fa48("13165") ? "" : (stryCov_9fa48("13165"), 'E11000 duplicate key error')))))) {
              if (stryMutAct_9fa48("13166")) {
                {}
              } else {
                stryCov_9fa48("13166");
                return await module.setObjectBulk(data);
              }
            }
            throw err;
          }
        }
        cache.del(data.map(stryMutAct_9fa48("13167") ? () => undefined : (stryCov_9fa48("13167"), item => item[0])));
      }
    };
    module.setObjectField = async function (key, field, value) {
      if (stryMutAct_9fa48("13168")) {
        {}
      } else {
        stryCov_9fa48("13168");
        if (stryMutAct_9fa48("13171") ? false : stryMutAct_9fa48("13170") ? true : stryMutAct_9fa48("13169") ? field : (stryCov_9fa48("13169", "13170", "13171"), !field)) {
          if (stryMutAct_9fa48("13172")) {
            {}
          } else {
            stryCov_9fa48("13172");
            return;
          }
        }
        const data = {};
        data[field] = value;
        await module.setObject(key, data);
      }
    };
    module.getObject = async function (key, fields = stryMutAct_9fa48("13173") ? ["Stryker was here"] : (stryCov_9fa48("13173"), [])) {
      if (stryMutAct_9fa48("13174")) {
        {}
      } else {
        stryCov_9fa48("13174");
        if (stryMutAct_9fa48("13177") ? false : stryMutAct_9fa48("13176") ? true : stryMutAct_9fa48("13175") ? key : (stryCov_9fa48("13175", "13176", "13177"), !key)) {
          if (stryMutAct_9fa48("13178")) {
            {}
          } else {
            stryCov_9fa48("13178");
            return null;
          }
        }
        const data = await module.getObjects(stryMutAct_9fa48("13179") ? [] : (stryCov_9fa48("13179"), [key]), fields);
        return (stryMutAct_9fa48("13182") ? data || data.length : stryMutAct_9fa48("13181") ? false : stryMutAct_9fa48("13180") ? true : (stryCov_9fa48("13180", "13181", "13182"), data && data.length)) ? data[0] : null;
      }
    };
    module.getObjects = async function (keys, fields = stryMutAct_9fa48("13183") ? ["Stryker was here"] : (stryCov_9fa48("13183"), [])) {
      if (stryMutAct_9fa48("13184")) {
        {}
      } else {
        stryCov_9fa48("13184");
        return await module.getObjectsFields(keys, fields);
      }
    };
    module.getObjectField = async function (key, field) {
      if (stryMutAct_9fa48("13185")) {
        {}
      } else {
        stryCov_9fa48("13185");
        if (stryMutAct_9fa48("13188") ? false : stryMutAct_9fa48("13187") ? true : stryMutAct_9fa48("13186") ? key : (stryCov_9fa48("13186", "13187", "13188"), !key)) {
          if (stryMutAct_9fa48("13189")) {
            {}
          } else {
            stryCov_9fa48("13189");
            return null;
          }
        }
        const cachedData = {};
        cache.getUnCachedKeys(stryMutAct_9fa48("13190") ? [] : (stryCov_9fa48("13190"), [key]), cachedData);
        if (stryMutAct_9fa48("13192") ? false : stryMutAct_9fa48("13191") ? true : (stryCov_9fa48("13191", "13192"), cachedData[key])) {
          if (stryMutAct_9fa48("13193")) {
            {}
          } else {
            stryCov_9fa48("13193");
            return cachedData[key].hasOwnProperty(field) ? cachedData[key][field] : null;
          }
        }
        field = helpers.fieldToString(field);
        const item = await module.client.collection(stryMutAct_9fa48("13194") ? "" : (stryCov_9fa48("13194"), 'objects')).findOne(stryMutAct_9fa48("13195") ? {} : (stryCov_9fa48("13195"), {
          _key: key
        }), stryMutAct_9fa48("13196") ? {} : (stryCov_9fa48("13196"), {
          projection: stryMutAct_9fa48("13197") ? {} : (stryCov_9fa48("13197"), {
            _id: 0,
            [field]: 1
          })
        }));
        if (stryMutAct_9fa48("13200") ? false : stryMutAct_9fa48("13199") ? true : stryMutAct_9fa48("13198") ? item : (stryCov_9fa48("13198", "13199", "13200"), !item)) {
          if (stryMutAct_9fa48("13201")) {
            {}
          } else {
            stryCov_9fa48("13201");
            return null;
          }
        }
        return item.hasOwnProperty(field) ? item[field] : null;
      }
    };
    module.getObjectFields = async function (key, fields) {
      if (stryMutAct_9fa48("13202")) {
        {}
      } else {
        stryCov_9fa48("13202");
        if (stryMutAct_9fa48("13205") ? false : stryMutAct_9fa48("13204") ? true : stryMutAct_9fa48("13203") ? key : (stryCov_9fa48("13203", "13204", "13205"), !key)) {
          if (stryMutAct_9fa48("13206")) {
            {}
          } else {
            stryCov_9fa48("13206");
            return null;
          }
        }
        const data = await module.getObjectsFields(stryMutAct_9fa48("13207") ? [] : (stryCov_9fa48("13207"), [key]), fields);
        return data ? data[0] : null;
      }
    };
    module.getObjectsFields = async function (keys, fields) {
      if (stryMutAct_9fa48("13208")) {
        {}
      } else {
        stryCov_9fa48("13208");
        if (stryMutAct_9fa48("13211") ? !Array.isArray(keys) && !keys.length : stryMutAct_9fa48("13210") ? false : stryMutAct_9fa48("13209") ? true : (stryCov_9fa48("13209", "13210", "13211"), (stryMutAct_9fa48("13212") ? Array.isArray(keys) : (stryCov_9fa48("13212"), !Array.isArray(keys))) || (stryMutAct_9fa48("13213") ? keys.length : (stryCov_9fa48("13213"), !keys.length)))) {
          if (stryMutAct_9fa48("13214")) {
            {}
          } else {
            stryCov_9fa48("13214");
            return stryMutAct_9fa48("13215") ? ["Stryker was here"] : (stryCov_9fa48("13215"), []);
          }
        }
        const cachedData = {};
        const unCachedKeys = cache.getUnCachedKeys(keys, cachedData);
        let data = stryMutAct_9fa48("13216") ? ["Stryker was here"] : (stryCov_9fa48("13216"), []);
        if (stryMutAct_9fa48("13220") ? unCachedKeys.length < 1 : stryMutAct_9fa48("13219") ? unCachedKeys.length > 1 : stryMutAct_9fa48("13218") ? false : stryMutAct_9fa48("13217") ? true : (stryCov_9fa48("13217", "13218", "13219", "13220"), unCachedKeys.length >= 1)) {
          if (stryMutAct_9fa48("13221")) {
            {}
          } else {
            stryCov_9fa48("13221");
            data = await module.client.collection(stryMutAct_9fa48("13222") ? "" : (stryCov_9fa48("13222"), 'objects')).find(stryMutAct_9fa48("13223") ? {} : (stryCov_9fa48("13223"), {
              _key: (stryMutAct_9fa48("13226") ? unCachedKeys.length !== 1 : stryMutAct_9fa48("13225") ? false : stryMutAct_9fa48("13224") ? true : (stryCov_9fa48("13224", "13225", "13226"), unCachedKeys.length === 1)) ? unCachedKeys[0] : stryMutAct_9fa48("13227") ? {} : (stryCov_9fa48("13227"), {
                $in: unCachedKeys
              })
            }), stryMutAct_9fa48("13228") ? {} : (stryCov_9fa48("13228"), {
              projection: stryMutAct_9fa48("13229") ? {} : (stryCov_9fa48("13229"), {
                _id: 0
              })
            })).toArray();
            data = data.map(helpers.deserializeData);
          }
        }
        const map = helpers.toMap(data);
        unCachedKeys.forEach(key => {
          if (stryMutAct_9fa48("13230")) {
            {}
          } else {
            stryCov_9fa48("13230");
            cachedData[key] = stryMutAct_9fa48("13233") ? map[key] && null : stryMutAct_9fa48("13232") ? false : stryMutAct_9fa48("13231") ? true : (stryCov_9fa48("13231", "13232", "13233"), map[key] || null);
            cache.set(key, cachedData[key]);
          }
        });
        if (stryMutAct_9fa48("13236") ? !Array.isArray(fields) && !fields.length : stryMutAct_9fa48("13235") ? false : stryMutAct_9fa48("13234") ? true : (stryCov_9fa48("13234", "13235", "13236"), (stryMutAct_9fa48("13237") ? Array.isArray(fields) : (stryCov_9fa48("13237"), !Array.isArray(fields))) || (stryMutAct_9fa48("13238") ? fields.length : (stryCov_9fa48("13238"), !fields.length)))) {
          if (stryMutAct_9fa48("13239")) {
            {}
          } else {
            stryCov_9fa48("13239");
            return keys.map(stryMutAct_9fa48("13240") ? () => undefined : (stryCov_9fa48("13240"), key => cachedData[key] ? stryMutAct_9fa48("13241") ? {} : (stryCov_9fa48("13241"), {
              ...cachedData[key]
            }) : null));
          }
        }
        return keys.map(key => {
          if (stryMutAct_9fa48("13242")) {
            {}
          } else {
            stryCov_9fa48("13242");
            const item = stryMutAct_9fa48("13245") ? cachedData[key] && {} : stryMutAct_9fa48("13244") ? false : stryMutAct_9fa48("13243") ? true : (stryCov_9fa48("13243", "13244", "13245"), cachedData[key] || {});
            const result = {};
            fields.forEach(field => {
              if (stryMutAct_9fa48("13246")) {
                {}
              } else {
                stryCov_9fa48("13246");
                result[field] = (stryMutAct_9fa48("13249") ? item[field] === undefined : stryMutAct_9fa48("13248") ? false : stryMutAct_9fa48("13247") ? true : (stryCov_9fa48("13247", "13248", "13249"), item[field] !== undefined)) ? item[field] : null;
              }
            });
            return result;
          }
        });
      }
    };
    module.getObjectKeys = async function (key) {
      if (stryMutAct_9fa48("13250")) {
        {}
      } else {
        stryCov_9fa48("13250");
        const data = await module.getObject(key);
        return data ? Object.keys(data) : stryMutAct_9fa48("13251") ? ["Stryker was here"] : (stryCov_9fa48("13251"), []);
      }
    };
    module.getObjectValues = async function (key) {
      if (stryMutAct_9fa48("13252")) {
        {}
      } else {
        stryCov_9fa48("13252");
        const data = await module.getObject(key);
        return data ? Object.values(data) : stryMutAct_9fa48("13253") ? ["Stryker was here"] : (stryCov_9fa48("13253"), []);
      }
    };
    module.isObjectField = async function (key, field) {
      if (stryMutAct_9fa48("13254")) {
        {}
      } else {
        stryCov_9fa48("13254");
        const data = await module.isObjectFields(key, stryMutAct_9fa48("13255") ? [] : (stryCov_9fa48("13255"), [field]));
        return (stryMutAct_9fa48("13258") ? Array.isArray(data) || data.length : stryMutAct_9fa48("13257") ? false : stryMutAct_9fa48("13256") ? true : (stryCov_9fa48("13256", "13257", "13258"), Array.isArray(data) && data.length)) ? data[0] : stryMutAct_9fa48("13259") ? true : (stryCov_9fa48("13259"), false);
      }
    };
    module.isObjectFields = async function (key, fields) {
      if (stryMutAct_9fa48("13260")) {
        {}
      } else {
        stryCov_9fa48("13260");
        if (stryMutAct_9fa48("13263") ? false : stryMutAct_9fa48("13262") ? true : stryMutAct_9fa48("13261") ? key : (stryCov_9fa48("13261", "13262", "13263"), !key)) {
          if (stryMutAct_9fa48("13264")) {
            {}
          } else {
            stryCov_9fa48("13264");
            return;
          }
        }
        const data = {};
        fields.forEach(field => {
          if (stryMutAct_9fa48("13265")) {
            {}
          } else {
            stryCov_9fa48("13265");
            field = helpers.fieldToString(field);
            if (stryMutAct_9fa48("13267") ? false : stryMutAct_9fa48("13266") ? true : (stryCov_9fa48("13266", "13267"), field)) {
              if (stryMutAct_9fa48("13268")) {
                {}
              } else {
                stryCov_9fa48("13268");
                data[field] = 1;
              }
            }
          }
        });
        const item = await module.client.collection(stryMutAct_9fa48("13269") ? "" : (stryCov_9fa48("13269"), 'objects')).findOne(stryMutAct_9fa48("13270") ? {} : (stryCov_9fa48("13270"), {
          _key: key
        }), stryMutAct_9fa48("13271") ? {} : (stryCov_9fa48("13271"), {
          projection: data
        }));
        const results = fields.map(stryMutAct_9fa48("13272") ? () => undefined : (stryCov_9fa48("13272"), f => stryMutAct_9fa48("13275") ? !!item && item[f] !== undefined || item[f] !== null : stryMutAct_9fa48("13274") ? false : stryMutAct_9fa48("13273") ? true : (stryCov_9fa48("13273", "13274", "13275"), (stryMutAct_9fa48("13277") ? !!item || item[f] !== undefined : stryMutAct_9fa48("13276") ? true : (stryCov_9fa48("13276", "13277"), (stryMutAct_9fa48("13278") ? !item : (stryCov_9fa48("13278"), !(stryMutAct_9fa48("13279") ? item : (stryCov_9fa48("13279"), !item)))) && (stryMutAct_9fa48("13281") ? item[f] === undefined : stryMutAct_9fa48("13280") ? true : (stryCov_9fa48("13280", "13281"), item[f] !== undefined)))) && (stryMutAct_9fa48("13283") ? item[f] === null : stryMutAct_9fa48("13282") ? true : (stryCov_9fa48("13282", "13283"), item[f] !== null)))));
        return results;
      }
    };
    module.deleteObjectField = async function (key, field) {
      if (stryMutAct_9fa48("13284")) {
        {}
      } else {
        stryCov_9fa48("13284");
        await module.deleteObjectFields(key, stryMutAct_9fa48("13285") ? [] : (stryCov_9fa48("13285"), [field]));
      }
    };
    module.deleteObjectFields = async function (key, fields) {
      if (stryMutAct_9fa48("13286")) {
        {}
      } else {
        stryCov_9fa48("13286");
        if (stryMutAct_9fa48("13289") ? (!key || Array.isArray(key) && !key.length || !Array.isArray(fields)) && !fields.length : stryMutAct_9fa48("13288") ? false : stryMutAct_9fa48("13287") ? true : (stryCov_9fa48("13287", "13288", "13289"), (stryMutAct_9fa48("13291") ? (!key || Array.isArray(key) && !key.length) && !Array.isArray(fields) : stryMutAct_9fa48("13290") ? false : (stryCov_9fa48("13290", "13291"), (stryMutAct_9fa48("13293") ? !key && Array.isArray(key) && !key.length : stryMutAct_9fa48("13292") ? false : (stryCov_9fa48("13292", "13293"), (stryMutAct_9fa48("13294") ? key : (stryCov_9fa48("13294"), !key)) || (stryMutAct_9fa48("13296") ? Array.isArray(key) || !key.length : stryMutAct_9fa48("13295") ? false : (stryCov_9fa48("13295", "13296"), Array.isArray(key) && (stryMutAct_9fa48("13297") ? key.length : (stryCov_9fa48("13297"), !key.length)))))) || (stryMutAct_9fa48("13298") ? Array.isArray(fields) : (stryCov_9fa48("13298"), !Array.isArray(fields))))) || (stryMutAct_9fa48("13299") ? fields.length : (stryCov_9fa48("13299"), !fields.length)))) {
          if (stryMutAct_9fa48("13300")) {
            {}
          } else {
            stryCov_9fa48("13300");
            return;
          }
        }
        fields = stryMutAct_9fa48("13301") ? fields : (stryCov_9fa48("13301"), fields.filter(Boolean));
        if (stryMutAct_9fa48("13304") ? false : stryMutAct_9fa48("13303") ? true : stryMutAct_9fa48("13302") ? fields.length : (stryCov_9fa48("13302", "13303", "13304"), !fields.length)) {
          if (stryMutAct_9fa48("13305")) {
            {}
          } else {
            stryCov_9fa48("13305");
            return;
          }
        }
        const data = {};
        fields.forEach(field => {
          if (stryMutAct_9fa48("13306")) {
            {}
          } else {
            stryCov_9fa48("13306");
            field = helpers.fieldToString(field);
            data[field] = stryMutAct_9fa48("13307") ? "Stryker was here!" : (stryCov_9fa48("13307"), '');
          }
        });
        if (stryMutAct_9fa48("13309") ? false : stryMutAct_9fa48("13308") ? true : (stryCov_9fa48("13308", "13309"), Array.isArray(key))) {
          if (stryMutAct_9fa48("13310")) {
            {}
          } else {
            stryCov_9fa48("13310");
            await module.client.collection(stryMutAct_9fa48("13311") ? "" : (stryCov_9fa48("13311"), 'objects')).updateMany(stryMutAct_9fa48("13312") ? {} : (stryCov_9fa48("13312"), {
              _key: stryMutAct_9fa48("13313") ? {} : (stryCov_9fa48("13313"), {
                $in: key
              })
            }), stryMutAct_9fa48("13314") ? {} : (stryCov_9fa48("13314"), {
              $unset: data
            }));
          }
        } else {
          if (stryMutAct_9fa48("13315")) {
            {}
          } else {
            stryCov_9fa48("13315");
            await module.client.collection(stryMutAct_9fa48("13316") ? "" : (stryCov_9fa48("13316"), 'objects')).updateOne(stryMutAct_9fa48("13317") ? {} : (stryCov_9fa48("13317"), {
              _key: key
            }), stryMutAct_9fa48("13318") ? {} : (stryCov_9fa48("13318"), {
              $unset: data
            }));
          }
        }
        cache.del(key);
      }
    };
    module.incrObjectField = async function (key, field) {
      if (stryMutAct_9fa48("13319")) {
        {}
      } else {
        stryCov_9fa48("13319");
        return await module.incrObjectFieldBy(key, field, 1);
      }
    };
    module.decrObjectField = async function (key, field) {
      if (stryMutAct_9fa48("13320")) {
        {}
      } else {
        stryCov_9fa48("13320");
        return await module.incrObjectFieldBy(key, field, stryMutAct_9fa48("13321") ? +1 : (stryCov_9fa48("13321"), -1));
      }
    };
    module.incrObjectFieldBy = async function (key, field, value) {
      if (stryMutAct_9fa48("13322")) {
        {}
      } else {
        stryCov_9fa48("13322");
        value = parseInt(value, 10);
        if (stryMutAct_9fa48("13325") ? !key && isNaN(value) : stryMutAct_9fa48("13324") ? false : stryMutAct_9fa48("13323") ? true : (stryCov_9fa48("13323", "13324", "13325"), (stryMutAct_9fa48("13326") ? key : (stryCov_9fa48("13326"), !key)) || isNaN(value))) {
          if (stryMutAct_9fa48("13327")) {
            {}
          } else {
            stryCov_9fa48("13327");
            return null;
          }
        }
        const increment = {};
        field = helpers.fieldToString(field);
        increment[field] = value;
        if (stryMutAct_9fa48("13329") ? false : stryMutAct_9fa48("13328") ? true : (stryCov_9fa48("13328", "13329"), Array.isArray(key))) {
          if (stryMutAct_9fa48("13330")) {
            {}
          } else {
            stryCov_9fa48("13330");
            const bulk = module.client.collection(stryMutAct_9fa48("13331") ? "" : (stryCov_9fa48("13331"), 'objects')).initializeUnorderedBulkOp();
            key.forEach(key => {
              if (stryMutAct_9fa48("13332")) {
                {}
              } else {
                stryCov_9fa48("13332");
                bulk.find(stryMutAct_9fa48("13333") ? {} : (stryCov_9fa48("13333"), {
                  _key: key
                })).upsert().update(stryMutAct_9fa48("13334") ? {} : (stryCov_9fa48("13334"), {
                  $inc: increment
                }));
              }
            });
            await bulk.execute();
            cache.del(key);
            const result = await module.getObjectsFields(key, stryMutAct_9fa48("13335") ? [] : (stryCov_9fa48("13335"), [field]));
            return result.map(stryMutAct_9fa48("13336") ? () => undefined : (stryCov_9fa48("13336"), data => stryMutAct_9fa48("13339") ? data || data[field] : stryMutAct_9fa48("13338") ? false : stryMutAct_9fa48("13337") ? true : (stryCov_9fa48("13337", "13338", "13339"), data && data[field])));
          }
        }
        try {
          if (stryMutAct_9fa48("13340")) {
            {}
          } else {
            stryCov_9fa48("13340");
            const result = await module.client.collection(stryMutAct_9fa48("13341") ? "" : (stryCov_9fa48("13341"), 'objects')).findOneAndUpdate(stryMutAct_9fa48("13342") ? {} : (stryCov_9fa48("13342"), {
              _key: key
            }), stryMutAct_9fa48("13343") ? {} : (stryCov_9fa48("13343"), {
              $inc: increment
            }), stryMutAct_9fa48("13344") ? {} : (stryCov_9fa48("13344"), {
              returnDocument: stryMutAct_9fa48("13345") ? "" : (stryCov_9fa48("13345"), 'after'),
              upsert: stryMutAct_9fa48("13346") ? false : (stryCov_9fa48("13346"), true)
            }));
            cache.del(key);
            return (stryMutAct_9fa48("13349") ? result || result.value : stryMutAct_9fa48("13348") ? false : stryMutAct_9fa48("13347") ? true : (stryCov_9fa48("13347", "13348", "13349"), result && result.value)) ? result.value[field] : null;
          }
        } catch (err) {
          if (stryMutAct_9fa48("13350")) {
            {}
          } else {
            stryCov_9fa48("13350");
            // if there is duplicate key error retry the upsert
            // https://github.com/NodeBB/NodeBB/issues/4467
            // https://jira.mongodb.org/browse/SERVER-14322
            // https://docs.mongodb.org/manual/reference/command/findAndModify/#upsert-and-unique-index
            if (stryMutAct_9fa48("13353") ? err || err.message.startsWith('E11000 duplicate key error') : stryMutAct_9fa48("13352") ? false : stryMutAct_9fa48("13351") ? true : (stryCov_9fa48("13351", "13352", "13353"), err && (stryMutAct_9fa48("13354") ? err.message.endsWith('E11000 duplicate key error') : (stryCov_9fa48("13354"), err.message.startsWith(stryMutAct_9fa48("13355") ? "" : (stryCov_9fa48("13355"), 'E11000 duplicate key error')))))) {
              if (stryMutAct_9fa48("13356")) {
                {}
              } else {
                stryCov_9fa48("13356");
                return await module.incrObjectFieldBy(key, field, value);
              }
            }
            throw err;
          }
        }
      }
    };
    module.incrObjectFieldByBulk = async function (data) {
      if (stryMutAct_9fa48("13357")) {
        {}
      } else {
        stryCov_9fa48("13357");
        if (stryMutAct_9fa48("13360") ? !Array.isArray(data) && !data.length : stryMutAct_9fa48("13359") ? false : stryMutAct_9fa48("13358") ? true : (stryCov_9fa48("13358", "13359", "13360"), (stryMutAct_9fa48("13361") ? Array.isArray(data) : (stryCov_9fa48("13361"), !Array.isArray(data))) || (stryMutAct_9fa48("13362") ? data.length : (stryCov_9fa48("13362"), !data.length)))) {
          if (stryMutAct_9fa48("13363")) {
            {}
          } else {
            stryCov_9fa48("13363");
            return;
          }
        }
        const bulk = module.client.collection(stryMutAct_9fa48("13364") ? "" : (stryCov_9fa48("13364"), 'objects')).initializeUnorderedBulkOp();
        data.forEach(item => {
          if (stryMutAct_9fa48("13365")) {
            {}
          } else {
            stryCov_9fa48("13365");
            const increment = {};
            for (const [field, value] of Object.entries(item[1])) {
              if (stryMutAct_9fa48("13366")) {
                {}
              } else {
                stryCov_9fa48("13366");
                increment[helpers.fieldToString(field)] = value;
              }
            }
            bulk.find(stryMutAct_9fa48("13367") ? {} : (stryCov_9fa48("13367"), {
              _key: item[0]
            })).upsert().update(stryMutAct_9fa48("13368") ? {} : (stryCov_9fa48("13368"), {
              $inc: increment
            }));
          }
        });
        await bulk.execute();
        cache.del(data.map(stryMutAct_9fa48("13369") ? () => undefined : (stryCov_9fa48("13369"), item => item[0])));
      }
    };
  }
};