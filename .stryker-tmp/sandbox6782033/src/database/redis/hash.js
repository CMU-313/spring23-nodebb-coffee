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
  if (stryMutAct_9fa48("17070")) {
    {}
  } else {
    stryCov_9fa48("17070");
    const helpers = require('./helpers');
    const cache = require('../cache').create(stryMutAct_9fa48("17071") ? "" : (stryCov_9fa48("17071"), 'redis'));
    module.objectCache = cache;
    module.setObject = async function (key, data) {
      if (stryMutAct_9fa48("17072")) {
        {}
      } else {
        stryCov_9fa48("17072");
        if (stryMutAct_9fa48("17075") ? !key && !data : stryMutAct_9fa48("17074") ? false : stryMutAct_9fa48("17073") ? true : (stryCov_9fa48("17073", "17074", "17075"), (stryMutAct_9fa48("17076") ? key : (stryCov_9fa48("17076"), !key)) || (stryMutAct_9fa48("17077") ? data : (stryCov_9fa48("17077"), !data)))) {
          if (stryMutAct_9fa48("17078")) {
            {}
          } else {
            stryCov_9fa48("17078");
            return;
          }
        }
        if (stryMutAct_9fa48("17080") ? false : stryMutAct_9fa48("17079") ? true : (stryCov_9fa48("17079", "17080"), data.hasOwnProperty(stryMutAct_9fa48("17081") ? "Stryker was here!" : (stryCov_9fa48("17081"), '')))) {
          if (stryMutAct_9fa48("17082")) {
            {}
          } else {
            stryCov_9fa48("17082");
            delete data[stryMutAct_9fa48("17083") ? "Stryker was here!" : (stryCov_9fa48("17083"), '')];
          }
        }
        Object.keys(data).forEach(key => {
          if (stryMutAct_9fa48("17084")) {
            {}
          } else {
            stryCov_9fa48("17084");
            if (stryMutAct_9fa48("17087") ? data[key] === undefined && data[key] === null : stryMutAct_9fa48("17086") ? false : stryMutAct_9fa48("17085") ? true : (stryCov_9fa48("17085", "17086", "17087"), (stryMutAct_9fa48("17089") ? data[key] !== undefined : stryMutAct_9fa48("17088") ? false : (stryCov_9fa48("17088", "17089"), data[key] === undefined)) || (stryMutAct_9fa48("17091") ? data[key] !== null : stryMutAct_9fa48("17090") ? false : (stryCov_9fa48("17090", "17091"), data[key] === null)))) {
              if (stryMutAct_9fa48("17092")) {
                {}
              } else {
                stryCov_9fa48("17092");
                delete data[key];
              }
            }
          }
        });
        if (stryMutAct_9fa48("17095") ? false : stryMutAct_9fa48("17094") ? true : stryMutAct_9fa48("17093") ? Object.keys(data).length : (stryCov_9fa48("17093", "17094", "17095"), !Object.keys(data).length)) {
          if (stryMutAct_9fa48("17096")) {
            {}
          } else {
            stryCov_9fa48("17096");
            return;
          }
        }
        if (stryMutAct_9fa48("17098") ? false : stryMutAct_9fa48("17097") ? true : (stryCov_9fa48("17097", "17098"), Array.isArray(key))) {
          if (stryMutAct_9fa48("17099")) {
            {}
          } else {
            stryCov_9fa48("17099");
            const batch = module.client.batch();
            key.forEach(stryMutAct_9fa48("17100") ? () => undefined : (stryCov_9fa48("17100"), k => batch.hmset(k, data)));
            await helpers.execBatch(batch);
          }
        } else {
          if (stryMutAct_9fa48("17101")) {
            {}
          } else {
            stryCov_9fa48("17101");
            await module.client.hmset(key, data);
          }
        }
        cache.del(key);
      }
    };
    module.setObjectBulk = async function (...args) {
      if (stryMutAct_9fa48("17102")) {
        {}
      } else {
        stryCov_9fa48("17102");
        let data = args[0];
        if (stryMutAct_9fa48("17105") ? !Array.isArray(data) && !data.length : stryMutAct_9fa48("17104") ? false : stryMutAct_9fa48("17103") ? true : (stryCov_9fa48("17103", "17104", "17105"), (stryMutAct_9fa48("17106") ? Array.isArray(data) : (stryCov_9fa48("17106"), !Array.isArray(data))) || (stryMutAct_9fa48("17107") ? data.length : (stryCov_9fa48("17107"), !data.length)))) {
          if (stryMutAct_9fa48("17108")) {
            {}
          } else {
            stryCov_9fa48("17108");
            return;
          }
        }
        if (stryMutAct_9fa48("17110") ? false : stryMutAct_9fa48("17109") ? true : (stryCov_9fa48("17109", "17110"), Array.isArray(args[1]))) {
          if (stryMutAct_9fa48("17111")) {
            {}
          } else {
            stryCov_9fa48("17111");
            console.warn(stryMutAct_9fa48("17112") ? "" : (stryCov_9fa48("17112"), '[deprecated] db.setObjectBulk(keys, data) usage is deprecated, please use db.setObjectBulk(data)'));
            // conver old format to new format for backwards compatibility
            data = args[0].map(stryMutAct_9fa48("17113") ? () => undefined : (stryCov_9fa48("17113"), (key, i) => stryMutAct_9fa48("17114") ? [] : (stryCov_9fa48("17114"), [key, args[1][i]])));
          }
        }
        const batch = module.client.batch();
        data.forEach(item => {
          if (stryMutAct_9fa48("17115")) {
            {}
          } else {
            stryCov_9fa48("17115");
            if (stryMutAct_9fa48("17117") ? false : stryMutAct_9fa48("17116") ? true : (stryCov_9fa48("17116", "17117"), Object.keys(item[1]).length)) {
              if (stryMutAct_9fa48("17118")) {
                {}
              } else {
                stryCov_9fa48("17118");
                batch.hmset(item[0], item[1]);
              }
            }
          }
        });
        await helpers.execBatch(batch);
        cache.del(data.map(stryMutAct_9fa48("17119") ? () => undefined : (stryCov_9fa48("17119"), item => item[0])));
      }
    };
    module.setObjectField = async function (key, field, value) {
      if (stryMutAct_9fa48("17120")) {
        {}
      } else {
        stryCov_9fa48("17120");
        if (stryMutAct_9fa48("17123") ? false : stryMutAct_9fa48("17122") ? true : stryMutAct_9fa48("17121") ? field : (stryCov_9fa48("17121", "17122", "17123"), !field)) {
          if (stryMutAct_9fa48("17124")) {
            {}
          } else {
            stryCov_9fa48("17124");
            return;
          }
        }
        if (stryMutAct_9fa48("17126") ? false : stryMutAct_9fa48("17125") ? true : (stryCov_9fa48("17125", "17126"), Array.isArray(key))) {
          if (stryMutAct_9fa48("17127")) {
            {}
          } else {
            stryCov_9fa48("17127");
            const batch = module.client.batch();
            key.forEach(stryMutAct_9fa48("17128") ? () => undefined : (stryCov_9fa48("17128"), k => batch.hset(k, field, value)));
            await helpers.execBatch(batch);
          }
        } else {
          if (stryMutAct_9fa48("17129")) {
            {}
          } else {
            stryCov_9fa48("17129");
            await module.client.hset(key, field, value);
          }
        }
        cache.del(key);
      }
    };
    module.getObject = async function (key, fields = stryMutAct_9fa48("17130") ? ["Stryker was here"] : (stryCov_9fa48("17130"), [])) {
      if (stryMutAct_9fa48("17131")) {
        {}
      } else {
        stryCov_9fa48("17131");
        if (stryMutAct_9fa48("17134") ? false : stryMutAct_9fa48("17133") ? true : stryMutAct_9fa48("17132") ? key : (stryCov_9fa48("17132", "17133", "17134"), !key)) {
          if (stryMutAct_9fa48("17135")) {
            {}
          } else {
            stryCov_9fa48("17135");
            return null;
          }
        }
        const data = await module.getObjectsFields(stryMutAct_9fa48("17136") ? [] : (stryCov_9fa48("17136"), [key]), fields);
        return (stryMutAct_9fa48("17139") ? data || data.length : stryMutAct_9fa48("17138") ? false : stryMutAct_9fa48("17137") ? true : (stryCov_9fa48("17137", "17138", "17139"), data && data.length)) ? data[0] : null;
      }
    };
    module.getObjects = async function (keys, fields = stryMutAct_9fa48("17140") ? ["Stryker was here"] : (stryCov_9fa48("17140"), [])) {
      if (stryMutAct_9fa48("17141")) {
        {}
      } else {
        stryCov_9fa48("17141");
        return await module.getObjectsFields(keys, fields);
      }
    };
    module.getObjectField = async function (key, field) {
      if (stryMutAct_9fa48("17142")) {
        {}
      } else {
        stryCov_9fa48("17142");
        if (stryMutAct_9fa48("17145") ? false : stryMutAct_9fa48("17144") ? true : stryMutAct_9fa48("17143") ? key : (stryCov_9fa48("17143", "17144", "17145"), !key)) {
          if (stryMutAct_9fa48("17146")) {
            {}
          } else {
            stryCov_9fa48("17146");
            return null;
          }
        }
        const cachedData = {};
        cache.getUnCachedKeys(stryMutAct_9fa48("17147") ? [] : (stryCov_9fa48("17147"), [key]), cachedData);
        if (stryMutAct_9fa48("17149") ? false : stryMutAct_9fa48("17148") ? true : (stryCov_9fa48("17148", "17149"), cachedData[key])) {
          if (stryMutAct_9fa48("17150")) {
            {}
          } else {
            stryCov_9fa48("17150");
            return cachedData[key].hasOwnProperty(field) ? cachedData[key][field] : null;
          }
        }
        return await module.client.hget(key, String(field));
      }
    };
    module.getObjectFields = async function (key, fields) {
      if (stryMutAct_9fa48("17151")) {
        {}
      } else {
        stryCov_9fa48("17151");
        if (stryMutAct_9fa48("17154") ? false : stryMutAct_9fa48("17153") ? true : stryMutAct_9fa48("17152") ? key : (stryCov_9fa48("17152", "17153", "17154"), !key)) {
          if (stryMutAct_9fa48("17155")) {
            {}
          } else {
            stryCov_9fa48("17155");
            return null;
          }
        }
        const results = await module.getObjectsFields(stryMutAct_9fa48("17156") ? [] : (stryCov_9fa48("17156"), [key]), fields);
        return results ? results[0] : null;
      }
    };
    module.getObjectsFields = async function (keys, fields) {
      if (stryMutAct_9fa48("17157")) {
        {}
      } else {
        stryCov_9fa48("17157");
        if (stryMutAct_9fa48("17160") ? !Array.isArray(keys) && !keys.length : stryMutAct_9fa48("17159") ? false : stryMutAct_9fa48("17158") ? true : (stryCov_9fa48("17158", "17159", "17160"), (stryMutAct_9fa48("17161") ? Array.isArray(keys) : (stryCov_9fa48("17161"), !Array.isArray(keys))) || (stryMutAct_9fa48("17162") ? keys.length : (stryCov_9fa48("17162"), !keys.length)))) {
          if (stryMutAct_9fa48("17163")) {
            {}
          } else {
            stryCov_9fa48("17163");
            return stryMutAct_9fa48("17164") ? ["Stryker was here"] : (stryCov_9fa48("17164"), []);
          }
        }
        const cachedData = {};
        const unCachedKeys = cache.getUnCachedKeys(keys, cachedData);
        let data = stryMutAct_9fa48("17165") ? ["Stryker was here"] : (stryCov_9fa48("17165"), []);
        if (stryMutAct_9fa48("17169") ? unCachedKeys.length <= 1 : stryMutAct_9fa48("17168") ? unCachedKeys.length >= 1 : stryMutAct_9fa48("17167") ? false : stryMutAct_9fa48("17166") ? true : (stryCov_9fa48("17166", "17167", "17168", "17169"), unCachedKeys.length > 1)) {
          if (stryMutAct_9fa48("17170")) {
            {}
          } else {
            stryCov_9fa48("17170");
            const batch = module.client.batch();
            unCachedKeys.forEach(stryMutAct_9fa48("17171") ? () => undefined : (stryCov_9fa48("17171"), k => batch.hgetall(k)));
            data = await helpers.execBatch(batch);
          }
        } else if (stryMutAct_9fa48("17174") ? unCachedKeys.length !== 1 : stryMutAct_9fa48("17173") ? false : stryMutAct_9fa48("17172") ? true : (stryCov_9fa48("17172", "17173", "17174"), unCachedKeys.length === 1)) {
          if (stryMutAct_9fa48("17175")) {
            {}
          } else {
            stryCov_9fa48("17175");
            data = stryMutAct_9fa48("17176") ? [] : (stryCov_9fa48("17176"), [await module.client.hgetall(unCachedKeys[0])]);
          }
        }

        // convert empty objects into null for back-compat with node_redis
        data = data.map(elem => {
          if (stryMutAct_9fa48("17177")) {
            {}
          } else {
            stryCov_9fa48("17177");
            if (stryMutAct_9fa48("17180") ? false : stryMutAct_9fa48("17179") ? true : stryMutAct_9fa48("17178") ? Object.keys(elem).length : (stryCov_9fa48("17178", "17179", "17180"), !Object.keys(elem).length)) {
              if (stryMutAct_9fa48("17181")) {
                {}
              } else {
                stryCov_9fa48("17181");
                return null;
              }
            }
            return elem;
          }
        });
        unCachedKeys.forEach((key, i) => {
          if (stryMutAct_9fa48("17182")) {
            {}
          } else {
            stryCov_9fa48("17182");
            cachedData[key] = stryMutAct_9fa48("17185") ? data[i] && null : stryMutAct_9fa48("17184") ? false : stryMutAct_9fa48("17183") ? true : (stryCov_9fa48("17183", "17184", "17185"), data[i] || null);
            cache.set(key, cachedData[key]);
          }
        });
        if (stryMutAct_9fa48("17188") ? !Array.isArray(fields) && !fields.length : stryMutAct_9fa48("17187") ? false : stryMutAct_9fa48("17186") ? true : (stryCov_9fa48("17186", "17187", "17188"), (stryMutAct_9fa48("17189") ? Array.isArray(fields) : (stryCov_9fa48("17189"), !Array.isArray(fields))) || (stryMutAct_9fa48("17190") ? fields.length : (stryCov_9fa48("17190"), !fields.length)))) {
          if (stryMutAct_9fa48("17191")) {
            {}
          } else {
            stryCov_9fa48("17191");
            return keys.map(stryMutAct_9fa48("17192") ? () => undefined : (stryCov_9fa48("17192"), key => cachedData[key] ? stryMutAct_9fa48("17193") ? {} : (stryCov_9fa48("17193"), {
              ...cachedData[key]
            }) : null));
          }
        }
        return keys.map(key => {
          if (stryMutAct_9fa48("17194")) {
            {}
          } else {
            stryCov_9fa48("17194");
            const item = stryMutAct_9fa48("17197") ? cachedData[key] && {} : stryMutAct_9fa48("17196") ? false : stryMutAct_9fa48("17195") ? true : (stryCov_9fa48("17195", "17196", "17197"), cachedData[key] || {});
            const result = {};
            fields.forEach(field => {
              if (stryMutAct_9fa48("17198")) {
                {}
              } else {
                stryCov_9fa48("17198");
                result[field] = (stryMutAct_9fa48("17201") ? item[field] === undefined : stryMutAct_9fa48("17200") ? false : stryMutAct_9fa48("17199") ? true : (stryCov_9fa48("17199", "17200", "17201"), item[field] !== undefined)) ? item[field] : null;
              }
            });
            return result;
          }
        });
      }
    };
    module.getObjectKeys = async function (key) {
      if (stryMutAct_9fa48("17202")) {
        {}
      } else {
        stryCov_9fa48("17202");
        return await module.client.hkeys(key);
      }
    };
    module.getObjectValues = async function (key) {
      if (stryMutAct_9fa48("17203")) {
        {}
      } else {
        stryCov_9fa48("17203");
        return await module.client.hvals(key);
      }
    };
    module.isObjectField = async function (key, field) {
      if (stryMutAct_9fa48("17204")) {
        {}
      } else {
        stryCov_9fa48("17204");
        const exists = await module.client.hexists(key, field);
        return stryMutAct_9fa48("17207") ? exists !== 1 : stryMutAct_9fa48("17206") ? false : stryMutAct_9fa48("17205") ? true : (stryCov_9fa48("17205", "17206", "17207"), exists === 1);
      }
    };
    module.isObjectFields = async function (key, fields) {
      if (stryMutAct_9fa48("17208")) {
        {}
      } else {
        stryCov_9fa48("17208");
        const batch = module.client.batch();
        fields.forEach(stryMutAct_9fa48("17209") ? () => undefined : (stryCov_9fa48("17209"), f => batch.hexists(String(key), String(f))));
        const results = await helpers.execBatch(batch);
        return Array.isArray(results) ? helpers.resultsToBool(results) : null;
      }
    };
    module.deleteObjectField = async function (key, field) {
      if (stryMutAct_9fa48("17210")) {
        {}
      } else {
        stryCov_9fa48("17210");
        if (stryMutAct_9fa48("17213") ? (key === undefined || key === null || field === undefined) && field === null : stryMutAct_9fa48("17212") ? false : stryMutAct_9fa48("17211") ? true : (stryCov_9fa48("17211", "17212", "17213"), (stryMutAct_9fa48("17215") ? (key === undefined || key === null) && field === undefined : stryMutAct_9fa48("17214") ? false : (stryCov_9fa48("17214", "17215"), (stryMutAct_9fa48("17217") ? key === undefined && key === null : stryMutAct_9fa48("17216") ? false : (stryCov_9fa48("17216", "17217"), (stryMutAct_9fa48("17219") ? key !== undefined : stryMutAct_9fa48("17218") ? false : (stryCov_9fa48("17218", "17219"), key === undefined)) || (stryMutAct_9fa48("17221") ? key !== null : stryMutAct_9fa48("17220") ? false : (stryCov_9fa48("17220", "17221"), key === null)))) || (stryMutAct_9fa48("17223") ? field !== undefined : stryMutAct_9fa48("17222") ? false : (stryCov_9fa48("17222", "17223"), field === undefined)))) || (stryMutAct_9fa48("17225") ? field !== null : stryMutAct_9fa48("17224") ? false : (stryCov_9fa48("17224", "17225"), field === null)))) {
          if (stryMutAct_9fa48("17226")) {
            {}
          } else {
            stryCov_9fa48("17226");
            return;
          }
        }
        await module.client.hdel(key, field);
        cache.del(key);
      }
    };
    module.deleteObjectFields = async function (key, fields) {
      if (stryMutAct_9fa48("17227")) {
        {}
      } else {
        stryCov_9fa48("17227");
        if (stryMutAct_9fa48("17230") ? (!key || Array.isArray(key) && !key.length || !Array.isArray(fields)) && !fields.length : stryMutAct_9fa48("17229") ? false : stryMutAct_9fa48("17228") ? true : (stryCov_9fa48("17228", "17229", "17230"), (stryMutAct_9fa48("17232") ? (!key || Array.isArray(key) && !key.length) && !Array.isArray(fields) : stryMutAct_9fa48("17231") ? false : (stryCov_9fa48("17231", "17232"), (stryMutAct_9fa48("17234") ? !key && Array.isArray(key) && !key.length : stryMutAct_9fa48("17233") ? false : (stryCov_9fa48("17233", "17234"), (stryMutAct_9fa48("17235") ? key : (stryCov_9fa48("17235"), !key)) || (stryMutAct_9fa48("17237") ? Array.isArray(key) || !key.length : stryMutAct_9fa48("17236") ? false : (stryCov_9fa48("17236", "17237"), Array.isArray(key) && (stryMutAct_9fa48("17238") ? key.length : (stryCov_9fa48("17238"), !key.length)))))) || (stryMutAct_9fa48("17239") ? Array.isArray(fields) : (stryCov_9fa48("17239"), !Array.isArray(fields))))) || (stryMutAct_9fa48("17240") ? fields.length : (stryCov_9fa48("17240"), !fields.length)))) {
          if (stryMutAct_9fa48("17241")) {
            {}
          } else {
            stryCov_9fa48("17241");
            return;
          }
        }
        fields = stryMutAct_9fa48("17242") ? fields : (stryCov_9fa48("17242"), fields.filter(Boolean));
        if (stryMutAct_9fa48("17245") ? false : stryMutAct_9fa48("17244") ? true : stryMutAct_9fa48("17243") ? fields.length : (stryCov_9fa48("17243", "17244", "17245"), !fields.length)) {
          if (stryMutAct_9fa48("17246")) {
            {}
          } else {
            stryCov_9fa48("17246");
            return;
          }
        }
        if (stryMutAct_9fa48("17248") ? false : stryMutAct_9fa48("17247") ? true : (stryCov_9fa48("17247", "17248"), Array.isArray(key))) {
          if (stryMutAct_9fa48("17249")) {
            {}
          } else {
            stryCov_9fa48("17249");
            const batch = module.client.batch();
            key.forEach(stryMutAct_9fa48("17250") ? () => undefined : (stryCov_9fa48("17250"), k => batch.hdel(k, fields)));
            await helpers.execBatch(batch);
          }
        } else {
          if (stryMutAct_9fa48("17251")) {
            {}
          } else {
            stryCov_9fa48("17251");
            await module.client.hdel(key, fields);
          }
        }
        cache.del(key);
      }
    };
    module.incrObjectField = async function (key, field) {
      if (stryMutAct_9fa48("17252")) {
        {}
      } else {
        stryCov_9fa48("17252");
        return await module.incrObjectFieldBy(key, field, 1);
      }
    };
    module.decrObjectField = async function (key, field) {
      if (stryMutAct_9fa48("17253")) {
        {}
      } else {
        stryCov_9fa48("17253");
        return await module.incrObjectFieldBy(key, field, stryMutAct_9fa48("17254") ? +1 : (stryCov_9fa48("17254"), -1));
      }
    };
    module.incrObjectFieldBy = async function (key, field, value) {
      if (stryMutAct_9fa48("17255")) {
        {}
      } else {
        stryCov_9fa48("17255");
        value = parseInt(value, 10);
        if (stryMutAct_9fa48("17258") ? !key && isNaN(value) : stryMutAct_9fa48("17257") ? false : stryMutAct_9fa48("17256") ? true : (stryCov_9fa48("17256", "17257", "17258"), (stryMutAct_9fa48("17259") ? key : (stryCov_9fa48("17259"), !key)) || isNaN(value))) {
          if (stryMutAct_9fa48("17260")) {
            {}
          } else {
            stryCov_9fa48("17260");
            return null;
          }
        }
        let result;
        if (stryMutAct_9fa48("17262") ? false : stryMutAct_9fa48("17261") ? true : (stryCov_9fa48("17261", "17262"), Array.isArray(key))) {
          if (stryMutAct_9fa48("17263")) {
            {}
          } else {
            stryCov_9fa48("17263");
            const batch = module.client.batch();
            key.forEach(stryMutAct_9fa48("17264") ? () => undefined : (stryCov_9fa48("17264"), k => batch.hincrby(k, field, value)));
            result = await helpers.execBatch(batch);
          }
        } else {
          if (stryMutAct_9fa48("17265")) {
            {}
          } else {
            stryCov_9fa48("17265");
            result = await module.client.hincrby(key, field, value);
          }
        }
        cache.del(key);
        return Array.isArray(result) ? result.map(stryMutAct_9fa48("17266") ? () => undefined : (stryCov_9fa48("17266"), value => parseInt(value, 10))) : parseInt(result, 10);
      }
    };
    module.incrObjectFieldByBulk = async function (data) {
      if (stryMutAct_9fa48("17267")) {
        {}
      } else {
        stryCov_9fa48("17267");
        if (stryMutAct_9fa48("17270") ? !Array.isArray(data) && !data.length : stryMutAct_9fa48("17269") ? false : stryMutAct_9fa48("17268") ? true : (stryCov_9fa48("17268", "17269", "17270"), (stryMutAct_9fa48("17271") ? Array.isArray(data) : (stryCov_9fa48("17271"), !Array.isArray(data))) || (stryMutAct_9fa48("17272") ? data.length : (stryCov_9fa48("17272"), !data.length)))) {
          if (stryMutAct_9fa48("17273")) {
            {}
          } else {
            stryCov_9fa48("17273");
            return;
          }
        }
        const batch = module.client.batch();
        data.forEach(item => {
          if (stryMutAct_9fa48("17274")) {
            {}
          } else {
            stryCov_9fa48("17274");
            for (const [field, value] of Object.entries(item[1])) {
              if (stryMutAct_9fa48("17275")) {
                {}
              } else {
                stryCov_9fa48("17275");
                batch.hincrby(item[0], field, value);
              }
            }
          }
        });
        await helpers.execBatch(batch);
        cache.del(data.map(stryMutAct_9fa48("17276") ? () => undefined : (stryCov_9fa48("17276"), item => item[0])));
      }
    };
  }
};