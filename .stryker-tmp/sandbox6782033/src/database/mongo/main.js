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
  if (stryMutAct_9fa48("13534")) {
    {}
  } else {
    stryCov_9fa48("13534");
    const helpers = require('./helpers');
    module.flushdb = async function () {
      if (stryMutAct_9fa48("13535")) {
        {}
      } else {
        stryCov_9fa48("13535");
        await module.client.dropDatabase();
      }
    };
    module.emptydb = async function () {
      if (stryMutAct_9fa48("13536")) {
        {}
      } else {
        stryCov_9fa48("13536");
        await module.client.collection(stryMutAct_9fa48("13537") ? "" : (stryCov_9fa48("13537"), 'objects')).deleteMany({});
        module.objectCache.reset();
      }
    };
    module.exists = async function (key) {
      if (stryMutAct_9fa48("13538")) {
        {}
      } else {
        stryCov_9fa48("13538");
        if (stryMutAct_9fa48("13541") ? false : stryMutAct_9fa48("13540") ? true : stryMutAct_9fa48("13539") ? key : (stryCov_9fa48("13539", "13540", "13541"), !key)) {
          if (stryMutAct_9fa48("13542")) {
            {}
          } else {
            stryCov_9fa48("13542");
            return;
          }
        }
        if (stryMutAct_9fa48("13544") ? false : stryMutAct_9fa48("13543") ? true : (stryCov_9fa48("13543", "13544"), Array.isArray(key))) {
          if (stryMutAct_9fa48("13545")) {
            {}
          } else {
            stryCov_9fa48("13545");
            const data = await module.client.collection(stryMutAct_9fa48("13546") ? "" : (stryCov_9fa48("13546"), 'objects')).find(stryMutAct_9fa48("13547") ? {} : (stryCov_9fa48("13547"), {
              _key: stryMutAct_9fa48("13548") ? {} : (stryCov_9fa48("13548"), {
                $in: key
              })
            }), stryMutAct_9fa48("13549") ? {} : (stryCov_9fa48("13549"), {
              _id: 0,
              _key: 1
            })).toArray();
            const map = {};
            data.forEach(item => {
              if (stryMutAct_9fa48("13550")) {
                {}
              } else {
                stryCov_9fa48("13550");
                map[item._key] = stryMutAct_9fa48("13551") ? false : (stryCov_9fa48("13551"), true);
              }
            });
            return key.map(stryMutAct_9fa48("13552") ? () => undefined : (stryCov_9fa48("13552"), key => stryMutAct_9fa48("13553") ? !map[key] : (stryCov_9fa48("13553"), !(stryMutAct_9fa48("13554") ? map[key] : (stryCov_9fa48("13554"), !map[key])))));
          }
        }
        const item = await module.client.collection(stryMutAct_9fa48("13555") ? "" : (stryCov_9fa48("13555"), 'objects')).findOne(stryMutAct_9fa48("13556") ? {} : (stryCov_9fa48("13556"), {
          _key: key
        }), stryMutAct_9fa48("13557") ? {} : (stryCov_9fa48("13557"), {
          _id: 0,
          _key: 1
        }));
        return stryMutAct_9fa48("13560") ? item !== undefined || item !== null : stryMutAct_9fa48("13559") ? false : stryMutAct_9fa48("13558") ? true : (stryCov_9fa48("13558", "13559", "13560"), (stryMutAct_9fa48("13562") ? item === undefined : stryMutAct_9fa48("13561") ? true : (stryCov_9fa48("13561", "13562"), item !== undefined)) && (stryMutAct_9fa48("13564") ? item === null : stryMutAct_9fa48("13563") ? true : (stryCov_9fa48("13563", "13564"), item !== null)));
      }
    };
    module.scan = async function (params) {
      if (stryMutAct_9fa48("13565")) {
        {}
      } else {
        stryCov_9fa48("13565");
        const match = helpers.buildMatchQuery(params.match);
        return await module.client.collection(stryMutAct_9fa48("13566") ? "" : (stryCov_9fa48("13566"), 'objects')).distinct(stryMutAct_9fa48("13567") ? "" : (stryCov_9fa48("13567"), '_key'), stryMutAct_9fa48("13568") ? {} : (stryCov_9fa48("13568"), {
          _key: stryMutAct_9fa48("13569") ? {} : (stryCov_9fa48("13569"), {
            $regex: new RegExp(match)
          })
        }));
      }
    };
    module.delete = async function (key) {
      if (stryMutAct_9fa48("13570")) {
        {}
      } else {
        stryCov_9fa48("13570");
        if (stryMutAct_9fa48("13573") ? false : stryMutAct_9fa48("13572") ? true : stryMutAct_9fa48("13571") ? key : (stryCov_9fa48("13571", "13572", "13573"), !key)) {
          if (stryMutAct_9fa48("13574")) {
            {}
          } else {
            stryCov_9fa48("13574");
            return;
          }
        }
        await module.client.collection(stryMutAct_9fa48("13575") ? "" : (stryCov_9fa48("13575"), 'objects')).deleteMany(stryMutAct_9fa48("13576") ? {} : (stryCov_9fa48("13576"), {
          _key: key
        }));
        module.objectCache.del(key);
      }
    };
    module.deleteAll = async function (keys) {
      if (stryMutAct_9fa48("13577")) {
        {}
      } else {
        stryCov_9fa48("13577");
        if (stryMutAct_9fa48("13580") ? !Array.isArray(keys) && !keys.length : stryMutAct_9fa48("13579") ? false : stryMutAct_9fa48("13578") ? true : (stryCov_9fa48("13578", "13579", "13580"), (stryMutAct_9fa48("13581") ? Array.isArray(keys) : (stryCov_9fa48("13581"), !Array.isArray(keys))) || (stryMutAct_9fa48("13582") ? keys.length : (stryCov_9fa48("13582"), !keys.length)))) {
          if (stryMutAct_9fa48("13583")) {
            {}
          } else {
            stryCov_9fa48("13583");
            return;
          }
        }
        await module.client.collection(stryMutAct_9fa48("13584") ? "" : (stryCov_9fa48("13584"), 'objects')).deleteMany(stryMutAct_9fa48("13585") ? {} : (stryCov_9fa48("13585"), {
          _key: stryMutAct_9fa48("13586") ? {} : (stryCov_9fa48("13586"), {
            $in: keys
          })
        }));
        module.objectCache.del(keys);
      }
    };
    module.get = async function (key) {
      if (stryMutAct_9fa48("13587")) {
        {}
      } else {
        stryCov_9fa48("13587");
        if (stryMutAct_9fa48("13590") ? false : stryMutAct_9fa48("13589") ? true : stryMutAct_9fa48("13588") ? key : (stryCov_9fa48("13588", "13589", "13590"), !key)) {
          if (stryMutAct_9fa48("13591")) {
            {}
          } else {
            stryCov_9fa48("13591");
            return;
          }
        }
        const objectData = await module.client.collection(stryMutAct_9fa48("13592") ? "" : (stryCov_9fa48("13592"), 'objects')).findOne(stryMutAct_9fa48("13593") ? {} : (stryCov_9fa48("13593"), {
          _key: key
        }), stryMutAct_9fa48("13594") ? {} : (stryCov_9fa48("13594"), {
          projection: stryMutAct_9fa48("13595") ? {} : (stryCov_9fa48("13595"), {
            _id: 0
          })
        }));

        // fallback to old field name 'value' for backwards compatibility #6340
        let value = null;
        if (stryMutAct_9fa48("13597") ? false : stryMutAct_9fa48("13596") ? true : (stryCov_9fa48("13596", "13597"), objectData)) {
          if (stryMutAct_9fa48("13598")) {
            {}
          } else {
            stryCov_9fa48("13598");
            if (stryMutAct_9fa48("13600") ? false : stryMutAct_9fa48("13599") ? true : (stryCov_9fa48("13599", "13600"), objectData.hasOwnProperty(stryMutAct_9fa48("13601") ? "" : (stryCov_9fa48("13601"), 'data')))) {
              if (stryMutAct_9fa48("13602")) {
                {}
              } else {
                stryCov_9fa48("13602");
                value = objectData.data;
              }
            } else if (stryMutAct_9fa48("13604") ? false : stryMutAct_9fa48("13603") ? true : (stryCov_9fa48("13603", "13604"), objectData.hasOwnProperty(stryMutAct_9fa48("13605") ? "" : (stryCov_9fa48("13605"), 'value')))) {
              if (stryMutAct_9fa48("13606")) {
                {}
              } else {
                stryCov_9fa48("13606");
                value = objectData.value;
              }
            }
          }
        }
        return value;
      }
    };
    module.set = async function (key, value) {
      if (stryMutAct_9fa48("13607")) {
        {}
      } else {
        stryCov_9fa48("13607");
        if (stryMutAct_9fa48("13610") ? false : stryMutAct_9fa48("13609") ? true : stryMutAct_9fa48("13608") ? key : (stryCov_9fa48("13608", "13609", "13610"), !key)) {
          if (stryMutAct_9fa48("13611")) {
            {}
          } else {
            stryCov_9fa48("13611");
            return;
          }
        }
        await module.setObject(key, stryMutAct_9fa48("13612") ? {} : (stryCov_9fa48("13612"), {
          data: value
        }));
      }
    };
    module.increment = async function (key) {
      if (stryMutAct_9fa48("13613")) {
        {}
      } else {
        stryCov_9fa48("13613");
        if (stryMutAct_9fa48("13616") ? false : stryMutAct_9fa48("13615") ? true : stryMutAct_9fa48("13614") ? key : (stryCov_9fa48("13614", "13615", "13616"), !key)) {
          if (stryMutAct_9fa48("13617")) {
            {}
          } else {
            stryCov_9fa48("13617");
            return;
          }
        }
        const result = await module.client.collection(stryMutAct_9fa48("13618") ? "" : (stryCov_9fa48("13618"), 'objects')).findOneAndUpdate(stryMutAct_9fa48("13619") ? {} : (stryCov_9fa48("13619"), {
          _key: key
        }), stryMutAct_9fa48("13620") ? {} : (stryCov_9fa48("13620"), {
          $inc: stryMutAct_9fa48("13621") ? {} : (stryCov_9fa48("13621"), {
            data: 1
          })
        }), stryMutAct_9fa48("13622") ? {} : (stryCov_9fa48("13622"), {
          returnDocument: stryMutAct_9fa48("13623") ? "" : (stryCov_9fa48("13623"), 'after'),
          upsert: stryMutAct_9fa48("13624") ? false : (stryCov_9fa48("13624"), true)
        }));
        return (stryMutAct_9fa48("13627") ? result || result.value : stryMutAct_9fa48("13626") ? false : stryMutAct_9fa48("13625") ? true : (stryCov_9fa48("13625", "13626", "13627"), result && result.value)) ? result.value.data : null;
      }
    };
    module.rename = async function (oldKey, newKey) {
      if (stryMutAct_9fa48("13628")) {
        {}
      } else {
        stryCov_9fa48("13628");
        await module.client.collection(stryMutAct_9fa48("13629") ? "" : (stryCov_9fa48("13629"), 'objects')).updateMany(stryMutAct_9fa48("13630") ? {} : (stryCov_9fa48("13630"), {
          _key: oldKey
        }), stryMutAct_9fa48("13631") ? {} : (stryCov_9fa48("13631"), {
          $set: stryMutAct_9fa48("13632") ? {} : (stryCov_9fa48("13632"), {
            _key: newKey
          })
        }));
        module.objectCache.del(stryMutAct_9fa48("13633") ? [] : (stryCov_9fa48("13633"), [oldKey, newKey]));
      }
    };
    module.type = async function (key) {
      if (stryMutAct_9fa48("13634")) {
        {}
      } else {
        stryCov_9fa48("13634");
        const data = await module.client.collection(stryMutAct_9fa48("13635") ? "" : (stryCov_9fa48("13635"), 'objects')).findOne(stryMutAct_9fa48("13636") ? {} : (stryCov_9fa48("13636"), {
          _key: key
        }));
        if (stryMutAct_9fa48("13639") ? false : stryMutAct_9fa48("13638") ? true : stryMutAct_9fa48("13637") ? data : (stryCov_9fa48("13637", "13638", "13639"), !data)) {
          if (stryMutAct_9fa48("13640")) {
            {}
          } else {
            stryCov_9fa48("13640");
            return null;
          }
        }
        delete data.expireAt;
        const keys = Object.keys(data);
        if (stryMutAct_9fa48("13643") ? keys.length === 4 && data.hasOwnProperty('_key') && data.hasOwnProperty('score') || data.hasOwnProperty('value') : stryMutAct_9fa48("13642") ? false : stryMutAct_9fa48("13641") ? true : (stryCov_9fa48("13641", "13642", "13643"), (stryMutAct_9fa48("13645") ? keys.length === 4 && data.hasOwnProperty('_key') || data.hasOwnProperty('score') : stryMutAct_9fa48("13644") ? true : (stryCov_9fa48("13644", "13645"), (stryMutAct_9fa48("13647") ? keys.length === 4 || data.hasOwnProperty('_key') : stryMutAct_9fa48("13646") ? true : (stryCov_9fa48("13646", "13647"), (stryMutAct_9fa48("13649") ? keys.length !== 4 : stryMutAct_9fa48("13648") ? true : (stryCov_9fa48("13648", "13649"), keys.length === 4)) && data.hasOwnProperty(stryMutAct_9fa48("13650") ? "" : (stryCov_9fa48("13650"), '_key')))) && data.hasOwnProperty(stryMutAct_9fa48("13651") ? "" : (stryCov_9fa48("13651"), 'score')))) && data.hasOwnProperty(stryMutAct_9fa48("13652") ? "" : (stryCov_9fa48("13652"), 'value')))) {
          if (stryMutAct_9fa48("13653")) {
            {}
          } else {
            stryCov_9fa48("13653");
            return stryMutAct_9fa48("13654") ? "" : (stryCov_9fa48("13654"), 'zset');
          }
        } else if (stryMutAct_9fa48("13657") ? keys.length === 3 && data.hasOwnProperty('_key') || data.hasOwnProperty('members') : stryMutAct_9fa48("13656") ? false : stryMutAct_9fa48("13655") ? true : (stryCov_9fa48("13655", "13656", "13657"), (stryMutAct_9fa48("13659") ? keys.length === 3 || data.hasOwnProperty('_key') : stryMutAct_9fa48("13658") ? true : (stryCov_9fa48("13658", "13659"), (stryMutAct_9fa48("13661") ? keys.length !== 3 : stryMutAct_9fa48("13660") ? true : (stryCov_9fa48("13660", "13661"), keys.length === 3)) && data.hasOwnProperty(stryMutAct_9fa48("13662") ? "" : (stryCov_9fa48("13662"), '_key')))) && data.hasOwnProperty(stryMutAct_9fa48("13663") ? "" : (stryCov_9fa48("13663"), 'members')))) {
          if (stryMutAct_9fa48("13664")) {
            {}
          } else {
            stryCov_9fa48("13664");
            return stryMutAct_9fa48("13665") ? "" : (stryCov_9fa48("13665"), 'set');
          }
        } else if (stryMutAct_9fa48("13668") ? keys.length === 3 && data.hasOwnProperty('_key') || data.hasOwnProperty('array') : stryMutAct_9fa48("13667") ? false : stryMutAct_9fa48("13666") ? true : (stryCov_9fa48("13666", "13667", "13668"), (stryMutAct_9fa48("13670") ? keys.length === 3 || data.hasOwnProperty('_key') : stryMutAct_9fa48("13669") ? true : (stryCov_9fa48("13669", "13670"), (stryMutAct_9fa48("13672") ? keys.length !== 3 : stryMutAct_9fa48("13671") ? true : (stryCov_9fa48("13671", "13672"), keys.length === 3)) && data.hasOwnProperty(stryMutAct_9fa48("13673") ? "" : (stryCov_9fa48("13673"), '_key')))) && data.hasOwnProperty(stryMutAct_9fa48("13674") ? "" : (stryCov_9fa48("13674"), 'array')))) {
          if (stryMutAct_9fa48("13675")) {
            {}
          } else {
            stryCov_9fa48("13675");
            return stryMutAct_9fa48("13676") ? "" : (stryCov_9fa48("13676"), 'list');
          }
        } else if (stryMutAct_9fa48("13679") ? keys.length === 3 && data.hasOwnProperty('_key') || data.hasOwnProperty('data') : stryMutAct_9fa48("13678") ? false : stryMutAct_9fa48("13677") ? true : (stryCov_9fa48("13677", "13678", "13679"), (stryMutAct_9fa48("13681") ? keys.length === 3 || data.hasOwnProperty('_key') : stryMutAct_9fa48("13680") ? true : (stryCov_9fa48("13680", "13681"), (stryMutAct_9fa48("13683") ? keys.length !== 3 : stryMutAct_9fa48("13682") ? true : (stryCov_9fa48("13682", "13683"), keys.length === 3)) && data.hasOwnProperty(stryMutAct_9fa48("13684") ? "" : (stryCov_9fa48("13684"), '_key')))) && data.hasOwnProperty(stryMutAct_9fa48("13685") ? "" : (stryCov_9fa48("13685"), 'data')))) {
          if (stryMutAct_9fa48("13686")) {
            {}
          } else {
            stryCov_9fa48("13686");
            return stryMutAct_9fa48("13687") ? "" : (stryCov_9fa48("13687"), 'string');
          }
        }
        return stryMutAct_9fa48("13688") ? "" : (stryCov_9fa48("13688"), 'hash');
      }
    };
    module.expire = async function (key, seconds) {
      if (stryMutAct_9fa48("13689")) {
        {}
      } else {
        stryCov_9fa48("13689");
        await module.expireAt(key, stryMutAct_9fa48("13690") ? Math.round(Date.now() / 1000) - seconds : (stryCov_9fa48("13690"), Math.round(stryMutAct_9fa48("13691") ? Date.now() * 1000 : (stryCov_9fa48("13691"), Date.now() / 1000)) + seconds));
      }
    };
    module.expireAt = async function (key, timestamp) {
      if (stryMutAct_9fa48("13692")) {
        {}
      } else {
        stryCov_9fa48("13692");
        await module.setObjectField(key, stryMutAct_9fa48("13693") ? "" : (stryCov_9fa48("13693"), 'expireAt'), new Date(stryMutAct_9fa48("13694") ? timestamp / 1000 : (stryCov_9fa48("13694"), timestamp * 1000)));
      }
    };
    module.pexpire = async function (key, ms) {
      if (stryMutAct_9fa48("13695")) {
        {}
      } else {
        stryCov_9fa48("13695");
        await module.pexpireAt(key, stryMutAct_9fa48("13696") ? Date.now() - parseInt(ms, 10) : (stryCov_9fa48("13696"), Date.now() + parseInt(ms, 10)));
      }
    };
    module.pexpireAt = async function (key, timestamp) {
      if (stryMutAct_9fa48("13697")) {
        {}
      } else {
        stryCov_9fa48("13697");
        timestamp = Math.min(timestamp, 8640000000000000);
        await module.setObjectField(key, stryMutAct_9fa48("13698") ? "" : (stryCov_9fa48("13698"), 'expireAt'), new Date(timestamp));
      }
    };
    module.ttl = async function (key) {
      if (stryMutAct_9fa48("13699")) {
        {}
      } else {
        stryCov_9fa48("13699");
        return Math.round(stryMutAct_9fa48("13700") ? ((await module.getObjectField(key, 'expireAt')) - Date.now()) * 1000 : (stryCov_9fa48("13700"), (stryMutAct_9fa48("13701") ? (await module.getObjectField(key, 'expireAt')) + Date.now() : (stryCov_9fa48("13701"), (await module.getObjectField(key, stryMutAct_9fa48("13702") ? "" : (stryCov_9fa48("13702"), 'expireAt'))) - Date.now())) / 1000));
      }
    };
    module.pttl = async function (key) {
      if (stryMutAct_9fa48("13703")) {
        {}
      } else {
        stryCov_9fa48("13703");
        return stryMutAct_9fa48("13704") ? (await module.getObjectField(key, 'expireAt')) + Date.now() : (stryCov_9fa48("13704"), (await module.getObjectField(key, stryMutAct_9fa48("13705") ? "" : (stryCov_9fa48("13705"), 'expireAt'))) - Date.now());
      }
    };
  }
};