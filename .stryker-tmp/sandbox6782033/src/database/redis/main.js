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
  if (stryMutAct_9fa48("17339")) {
    {}
  } else {
    stryCov_9fa48("17339");
    const helpers = require('./helpers');
    module.flushdb = async function () {
      if (stryMutAct_9fa48("17340")) {
        {}
      } else {
        stryCov_9fa48("17340");
        await module.client.send_command(stryMutAct_9fa48("17341") ? "" : (stryCov_9fa48("17341"), 'flushdb'), stryMutAct_9fa48("17342") ? ["Stryker was here"] : (stryCov_9fa48("17342"), []));
      }
    };
    module.emptydb = async function () {
      if (stryMutAct_9fa48("17343")) {
        {}
      } else {
        stryCov_9fa48("17343");
        await module.flushdb();
        module.objectCache.reset();
      }
    };
    module.exists = async function (key) {
      if (stryMutAct_9fa48("17344")) {
        {}
      } else {
        stryCov_9fa48("17344");
        if (stryMutAct_9fa48("17346") ? false : stryMutAct_9fa48("17345") ? true : (stryCov_9fa48("17345", "17346"), Array.isArray(key))) {
          if (stryMutAct_9fa48("17347")) {
            {}
          } else {
            stryCov_9fa48("17347");
            const batch = module.client.batch();
            key.forEach(stryMutAct_9fa48("17348") ? () => undefined : (stryCov_9fa48("17348"), key => batch.exists(key)));
            const data = await helpers.execBatch(batch);
            return data.map(stryMutAct_9fa48("17349") ? () => undefined : (stryCov_9fa48("17349"), exists => stryMutAct_9fa48("17352") ? exists !== 1 : stryMutAct_9fa48("17351") ? false : stryMutAct_9fa48("17350") ? true : (stryCov_9fa48("17350", "17351", "17352"), exists === 1)));
          }
        }
        const exists = await module.client.exists(key);
        return stryMutAct_9fa48("17355") ? exists !== 1 : stryMutAct_9fa48("17354") ? false : stryMutAct_9fa48("17353") ? true : (stryCov_9fa48("17353", "17354", "17355"), exists === 1);
      }
    };
    module.scan = async function (params) {
      if (stryMutAct_9fa48("17356")) {
        {}
      } else {
        stryCov_9fa48("17356");
        let cursor = stryMutAct_9fa48("17357") ? "" : (stryCov_9fa48("17357"), '0');
        let returnData = stryMutAct_9fa48("17358") ? ["Stryker was here"] : (stryCov_9fa48("17358"), []);
        const seen = {};
        do {
          if (stryMutAct_9fa48("17362")) {
            {}
          } else {
            stryCov_9fa48("17362");
            /* eslint-disable no-await-in-loop */
            const res = await module.client.scan(cursor, stryMutAct_9fa48("17363") ? "" : (stryCov_9fa48("17363"), 'MATCH'), params.match, stryMutAct_9fa48("17364") ? "" : (stryCov_9fa48("17364"), 'COUNT'), 10000);
            cursor = res[0];
            const values = stryMutAct_9fa48("17365") ? res[1] : (stryCov_9fa48("17365"), res[1].filter(value => {
              if (stryMutAct_9fa48("17366")) {
                {}
              } else {
                stryCov_9fa48("17366");
                const isSeen = stryMutAct_9fa48("17367") ? !seen[value] : (stryCov_9fa48("17367"), !(stryMutAct_9fa48("17368") ? seen[value] : (stryCov_9fa48("17368"), !seen[value])));
                if (stryMutAct_9fa48("17371") ? false : stryMutAct_9fa48("17370") ? true : stryMutAct_9fa48("17369") ? isSeen : (stryCov_9fa48("17369", "17370", "17371"), !isSeen)) {
                  if (stryMutAct_9fa48("17372")) {
                    {}
                  } else {
                    stryCov_9fa48("17372");
                    seen[value] = 1;
                  }
                }
                return stryMutAct_9fa48("17373") ? isSeen : (stryCov_9fa48("17373"), !isSeen);
              }
            }));
            returnData = returnData.concat(values);
          }
        } while (stryMutAct_9fa48("17360") ? cursor === '0' : stryMutAct_9fa48("17359") ? false : (stryCov_9fa48("17359", "17360"), cursor !== (stryMutAct_9fa48("17361") ? "" : (stryCov_9fa48("17361"), '0'))));
        return returnData;
      }
    };
    module.delete = async function (key) {
      if (stryMutAct_9fa48("17374")) {
        {}
      } else {
        stryCov_9fa48("17374");
        await module.client.del(key);
        module.objectCache.del(key);
      }
    };
    module.deleteAll = async function (keys) {
      if (stryMutAct_9fa48("17375")) {
        {}
      } else {
        stryCov_9fa48("17375");
        if (stryMutAct_9fa48("17378") ? !Array.isArray(keys) && !keys.length : stryMutAct_9fa48("17377") ? false : stryMutAct_9fa48("17376") ? true : (stryCov_9fa48("17376", "17377", "17378"), (stryMutAct_9fa48("17379") ? Array.isArray(keys) : (stryCov_9fa48("17379"), !Array.isArray(keys))) || (stryMutAct_9fa48("17380") ? keys.length : (stryCov_9fa48("17380"), !keys.length)))) {
          if (stryMutAct_9fa48("17381")) {
            {}
          } else {
            stryCov_9fa48("17381");
            return;
          }
        }
        await module.client.del(keys);
        module.objectCache.del(keys);
      }
    };
    module.get = async function (key) {
      if (stryMutAct_9fa48("17382")) {
        {}
      } else {
        stryCov_9fa48("17382");
        return await module.client.get(key);
      }
    };
    module.set = async function (key, value) {
      if (stryMutAct_9fa48("17383")) {
        {}
      } else {
        stryCov_9fa48("17383");
        await module.client.set(key, value);
      }
    };
    module.increment = async function (key) {
      if (stryMutAct_9fa48("17384")) {
        {}
      } else {
        stryCov_9fa48("17384");
        return await module.client.incr(key);
      }
    };
    module.rename = async function (oldKey, newKey) {
      if (stryMutAct_9fa48("17385")) {
        {}
      } else {
        stryCov_9fa48("17385");
        try {
          if (stryMutAct_9fa48("17386")) {
            {}
          } else {
            stryCov_9fa48("17386");
            await module.client.rename(oldKey, newKey);
          }
        } catch (err) {
          if (stryMutAct_9fa48("17387")) {
            {}
          } else {
            stryCov_9fa48("17387");
            if (stryMutAct_9fa48("17390") ? err || err.message !== 'ERR no such key' : stryMutAct_9fa48("17389") ? false : stryMutAct_9fa48("17388") ? true : (stryCov_9fa48("17388", "17389", "17390"), err && (stryMutAct_9fa48("17392") ? err.message === 'ERR no such key' : stryMutAct_9fa48("17391") ? true : (stryCov_9fa48("17391", "17392"), err.message !== (stryMutAct_9fa48("17393") ? "" : (stryCov_9fa48("17393"), 'ERR no such key')))))) {
              if (stryMutAct_9fa48("17394")) {
                {}
              } else {
                stryCov_9fa48("17394");
                throw err;
              }
            }
          }
        }
        module.objectCache.del(stryMutAct_9fa48("17395") ? [] : (stryCov_9fa48("17395"), [oldKey, newKey]));
      }
    };
    module.type = async function (key) {
      if (stryMutAct_9fa48("17396")) {
        {}
      } else {
        stryCov_9fa48("17396");
        const type = await module.client.type(key);
        return (stryMutAct_9fa48("17399") ? type === 'none' : stryMutAct_9fa48("17398") ? false : stryMutAct_9fa48("17397") ? true : (stryCov_9fa48("17397", "17398", "17399"), type !== (stryMutAct_9fa48("17400") ? "" : (stryCov_9fa48("17400"), 'none')))) ? type : null;
      }
    };
    module.expire = async function (key, seconds) {
      if (stryMutAct_9fa48("17401")) {
        {}
      } else {
        stryCov_9fa48("17401");
        await module.client.expire(key, seconds);
      }
    };
    module.expireAt = async function (key, timestamp) {
      if (stryMutAct_9fa48("17402")) {
        {}
      } else {
        stryCov_9fa48("17402");
        await module.client.expireat(key, timestamp);
      }
    };
    module.pexpire = async function (key, ms) {
      if (stryMutAct_9fa48("17403")) {
        {}
      } else {
        stryCov_9fa48("17403");
        await module.client.pexpire(key, ms);
      }
    };
    module.pexpireAt = async function (key, timestamp) {
      if (stryMutAct_9fa48("17404")) {
        {}
      } else {
        stryCov_9fa48("17404");
        await module.client.pexpireat(key, timestamp);
      }
    };
    module.ttl = async function (key) {
      if (stryMutAct_9fa48("17405")) {
        {}
      } else {
        stryCov_9fa48("17405");
        return await module.client.ttl(key);
      }
    };
    module.pttl = async function (key) {
      if (stryMutAct_9fa48("17406")) {
        {}
      } else {
        stryCov_9fa48("17406");
        return await module.client.pttl(key);
      }
    };
  }
};