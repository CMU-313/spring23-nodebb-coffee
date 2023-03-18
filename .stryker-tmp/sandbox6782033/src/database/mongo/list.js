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
  if (stryMutAct_9fa48("13430")) {
    {}
  } else {
    stryCov_9fa48("13430");
    const helpers = require('./helpers');
    module.listPrepend = async function (key, value) {
      if (stryMutAct_9fa48("13431")) {
        {}
      } else {
        stryCov_9fa48("13431");
        if (stryMutAct_9fa48("13434") ? false : stryMutAct_9fa48("13433") ? true : stryMutAct_9fa48("13432") ? key : (stryCov_9fa48("13432", "13433", "13434"), !key)) {
          if (stryMutAct_9fa48("13435")) {
            {}
          } else {
            stryCov_9fa48("13435");
            return;
          }
        }
        value = Array.isArray(value) ? value : stryMutAct_9fa48("13436") ? [] : (stryCov_9fa48("13436"), [value]);
        stryMutAct_9fa48("13437") ? value : (stryCov_9fa48("13437"), value.reverse());
        const exists = await module.isObjectField(key, stryMutAct_9fa48("13438") ? "" : (stryCov_9fa48("13438"), 'array'));
        if (stryMutAct_9fa48("13440") ? false : stryMutAct_9fa48("13439") ? true : (stryCov_9fa48("13439", "13440"), exists)) {
          if (stryMutAct_9fa48("13441")) {
            {}
          } else {
            stryCov_9fa48("13441");
            await listPush(key, value, stryMutAct_9fa48("13442") ? {} : (stryCov_9fa48("13442"), {
              $position: 0
            }));
          }
        } else {
          if (stryMutAct_9fa48("13443")) {
            {}
          } else {
            stryCov_9fa48("13443");
            await module.listAppend(key, value);
          }
        }
      }
    };
    module.listAppend = async function (key, value) {
      if (stryMutAct_9fa48("13444")) {
        {}
      } else {
        stryCov_9fa48("13444");
        if (stryMutAct_9fa48("13447") ? false : stryMutAct_9fa48("13446") ? true : stryMutAct_9fa48("13445") ? key : (stryCov_9fa48("13445", "13446", "13447"), !key)) {
          if (stryMutAct_9fa48("13448")) {
            {}
          } else {
            stryCov_9fa48("13448");
            return;
          }
        }
        value = Array.isArray(value) ? value : stryMutAct_9fa48("13449") ? [] : (stryCov_9fa48("13449"), [value]);
        await listPush(key, value);
      }
    };
    async function listPush(key, values, position) {
      if (stryMutAct_9fa48("13450")) {
        {}
      } else {
        stryCov_9fa48("13450");
        values = values.map(helpers.valueToString);
        await module.client.collection(stryMutAct_9fa48("13451") ? "" : (stryCov_9fa48("13451"), 'objects')).updateOne(stryMutAct_9fa48("13452") ? {} : (stryCov_9fa48("13452"), {
          _key: key
        }), stryMutAct_9fa48("13453") ? {} : (stryCov_9fa48("13453"), {
          $push: stryMutAct_9fa48("13454") ? {} : (stryCov_9fa48("13454"), {
            array: stryMutAct_9fa48("13455") ? {} : (stryCov_9fa48("13455"), {
              $each: values,
              ...(stryMutAct_9fa48("13458") ? position && {} : stryMutAct_9fa48("13457") ? false : stryMutAct_9fa48("13456") ? true : (stryCov_9fa48("13456", "13457", "13458"), position || {}))
            })
          })
        }), stryMutAct_9fa48("13459") ? {} : (stryCov_9fa48("13459"), {
          upsert: stryMutAct_9fa48("13460") ? false : (stryCov_9fa48("13460"), true)
        }));
      }
    }
    module.listRemoveLast = async function (key) {
      if (stryMutAct_9fa48("13461")) {
        {}
      } else {
        stryCov_9fa48("13461");
        if (stryMutAct_9fa48("13464") ? false : stryMutAct_9fa48("13463") ? true : stryMutAct_9fa48("13462") ? key : (stryCov_9fa48("13462", "13463", "13464"), !key)) {
          if (stryMutAct_9fa48("13465")) {
            {}
          } else {
            stryCov_9fa48("13465");
            return;
          }
        }
        const value = await module.getListRange(key, stryMutAct_9fa48("13466") ? +1 : (stryCov_9fa48("13466"), -1), stryMutAct_9fa48("13467") ? +1 : (stryCov_9fa48("13467"), -1));
        module.client.collection(stryMutAct_9fa48("13468") ? "" : (stryCov_9fa48("13468"), 'objects')).updateOne(stryMutAct_9fa48("13469") ? {} : (stryCov_9fa48("13469"), {
          _key: key
        }), stryMutAct_9fa48("13470") ? {} : (stryCov_9fa48("13470"), {
          $pop: stryMutAct_9fa48("13471") ? {} : (stryCov_9fa48("13471"), {
            array: 1
          })
        }));
        return (stryMutAct_9fa48("13474") ? value || value.length : stryMutAct_9fa48("13473") ? false : stryMutAct_9fa48("13472") ? true : (stryCov_9fa48("13472", "13473", "13474"), value && value.length)) ? value[0] : null;
      }
    };
    module.listRemoveAll = async function (key, value) {
      if (stryMutAct_9fa48("13475")) {
        {}
      } else {
        stryCov_9fa48("13475");
        if (stryMutAct_9fa48("13478") ? false : stryMutAct_9fa48("13477") ? true : stryMutAct_9fa48("13476") ? key : (stryCov_9fa48("13476", "13477", "13478"), !key)) {
          if (stryMutAct_9fa48("13479")) {
            {}
          } else {
            stryCov_9fa48("13479");
            return;
          }
        }
        const isArray = Array.isArray(value);
        if (stryMutAct_9fa48("13481") ? false : stryMutAct_9fa48("13480") ? true : (stryCov_9fa48("13480", "13481"), isArray)) {
          if (stryMutAct_9fa48("13482")) {
            {}
          } else {
            stryCov_9fa48("13482");
            value = value.map(helpers.valueToString);
          }
        } else {
          if (stryMutAct_9fa48("13483")) {
            {}
          } else {
            stryCov_9fa48("13483");
            value = helpers.valueToString(value);
          }
        }
        await module.client.collection(stryMutAct_9fa48("13484") ? "" : (stryCov_9fa48("13484"), 'objects')).updateOne(stryMutAct_9fa48("13485") ? {} : (stryCov_9fa48("13485"), {
          _key: key
        }), stryMutAct_9fa48("13486") ? {} : (stryCov_9fa48("13486"), {
          $pull: stryMutAct_9fa48("13487") ? {} : (stryCov_9fa48("13487"), {
            array: isArray ? stryMutAct_9fa48("13488") ? {} : (stryCov_9fa48("13488"), {
              $in: value
            }) : value
          })
        }));
      }
    };
    module.listTrim = async function (key, start, stop) {
      if (stryMutAct_9fa48("13489")) {
        {}
      } else {
        stryCov_9fa48("13489");
        if (stryMutAct_9fa48("13492") ? false : stryMutAct_9fa48("13491") ? true : stryMutAct_9fa48("13490") ? key : (stryCov_9fa48("13490", "13491", "13492"), !key)) {
          if (stryMutAct_9fa48("13493")) {
            {}
          } else {
            stryCov_9fa48("13493");
            return;
          }
        }
        const value = await module.getListRange(key, start, stop);
        await module.client.collection(stryMutAct_9fa48("13494") ? "" : (stryCov_9fa48("13494"), 'objects')).updateOne(stryMutAct_9fa48("13495") ? {} : (stryCov_9fa48("13495"), {
          _key: key
        }), stryMutAct_9fa48("13496") ? {} : (stryCov_9fa48("13496"), {
          $set: stryMutAct_9fa48("13497") ? {} : (stryCov_9fa48("13497"), {
            array: value
          })
        }));
      }
    };
    module.getListRange = async function (key, start, stop) {
      if (stryMutAct_9fa48("13498")) {
        {}
      } else {
        stryCov_9fa48("13498");
        if (stryMutAct_9fa48("13501") ? false : stryMutAct_9fa48("13500") ? true : stryMutAct_9fa48("13499") ? key : (stryCov_9fa48("13499", "13500", "13501"), !key)) {
          if (stryMutAct_9fa48("13502")) {
            {}
          } else {
            stryCov_9fa48("13502");
            return;
          }
        }
        const data = await module.client.collection(stryMutAct_9fa48("13503") ? "" : (stryCov_9fa48("13503"), 'objects')).findOne(stryMutAct_9fa48("13504") ? {} : (stryCov_9fa48("13504"), {
          _key: key
        }), stryMutAct_9fa48("13505") ? {} : (stryCov_9fa48("13505"), {
          array: 1
        }));
        if (stryMutAct_9fa48("13508") ? false : stryMutAct_9fa48("13507") ? true : stryMutAct_9fa48("13506") ? data && data.array : (stryCov_9fa48("13506", "13507", "13508"), !(stryMutAct_9fa48("13511") ? data || data.array : stryMutAct_9fa48("13510") ? false : stryMutAct_9fa48("13509") ? true : (stryCov_9fa48("13509", "13510", "13511"), data && data.array)))) {
          if (stryMutAct_9fa48("13512")) {
            {}
          } else {
            stryCov_9fa48("13512");
            return stryMutAct_9fa48("13513") ? ["Stryker was here"] : (stryCov_9fa48("13513"), []);
          }
        }
        return stryMutAct_9fa48("13514") ? data.array : (stryCov_9fa48("13514"), data.array.slice(start, (stryMutAct_9fa48("13517") ? stop === -1 : stryMutAct_9fa48("13516") ? false : stryMutAct_9fa48("13515") ? true : (stryCov_9fa48("13515", "13516", "13517"), stop !== (stryMutAct_9fa48("13518") ? +1 : (stryCov_9fa48("13518"), -1)))) ? stryMutAct_9fa48("13519") ? stop - 1 : (stryCov_9fa48("13519"), stop + 1) : undefined));
      }
    };
    module.listLength = async function (key) {
      if (stryMutAct_9fa48("13520")) {
        {}
      } else {
        stryCov_9fa48("13520");
        const result = await module.client.collection(stryMutAct_9fa48("13521") ? "" : (stryCov_9fa48("13521"), 'objects')).aggregate(stryMutAct_9fa48("13522") ? [] : (stryCov_9fa48("13522"), [stryMutAct_9fa48("13523") ? {} : (stryCov_9fa48("13523"), {
          $match: stryMutAct_9fa48("13524") ? {} : (stryCov_9fa48("13524"), {
            _key: key
          })
        }), stryMutAct_9fa48("13525") ? {} : (stryCov_9fa48("13525"), {
          $project: stryMutAct_9fa48("13526") ? {} : (stryCov_9fa48("13526"), {
            count: stryMutAct_9fa48("13527") ? {} : (stryCov_9fa48("13527"), {
              $size: stryMutAct_9fa48("13528") ? "" : (stryCov_9fa48("13528"), '$array')
            })
          })
        })])).toArray();
        return stryMutAct_9fa48("13531") ? Array.isArray(result) && result.length || result[0].count : stryMutAct_9fa48("13530") ? false : stryMutAct_9fa48("13529") ? true : (stryCov_9fa48("13529", "13530", "13531"), (stryMutAct_9fa48("13533") ? Array.isArray(result) || result.length : stryMutAct_9fa48("13532") ? true : (stryCov_9fa48("13532", "13533"), Array.isArray(result) && result.length)) && result[0].count);
      }
    };
  }
};