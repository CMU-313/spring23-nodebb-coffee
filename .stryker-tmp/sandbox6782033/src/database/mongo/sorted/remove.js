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
  if (stryMutAct_9fa48("14275")) {
    {}
  } else {
    stryCov_9fa48("14275");
    const helpers = require('../helpers');
    module.sortedSetRemove = async function (key, value) {
      if (stryMutAct_9fa48("14276")) {
        {}
      } else {
        stryCov_9fa48("14276");
        if (stryMutAct_9fa48("14279") ? false : stryMutAct_9fa48("14278") ? true : stryMutAct_9fa48("14277") ? key : (stryCov_9fa48("14277", "14278", "14279"), !key)) {
          if (stryMutAct_9fa48("14280")) {
            {}
          } else {
            stryCov_9fa48("14280");
            return;
          }
        }
        const isValueArray = Array.isArray(value);
        if (stryMutAct_9fa48("14283") ? !value && isValueArray && !value.length : stryMutAct_9fa48("14282") ? false : stryMutAct_9fa48("14281") ? true : (stryCov_9fa48("14281", "14282", "14283"), (stryMutAct_9fa48("14284") ? value : (stryCov_9fa48("14284"), !value)) || (stryMutAct_9fa48("14286") ? isValueArray || !value.length : stryMutAct_9fa48("14285") ? false : (stryCov_9fa48("14285", "14286"), isValueArray && (stryMutAct_9fa48("14287") ? value.length : (stryCov_9fa48("14287"), !value.length)))))) {
          if (stryMutAct_9fa48("14288")) {
            {}
          } else {
            stryCov_9fa48("14288");
            return;
          }
        }
        if (stryMutAct_9fa48("14290") ? false : stryMutAct_9fa48("14289") ? true : (stryCov_9fa48("14289", "14290"), isValueArray)) {
          if (stryMutAct_9fa48("14291")) {
            {}
          } else {
            stryCov_9fa48("14291");
            value = value.map(helpers.valueToString);
          }
        } else {
          if (stryMutAct_9fa48("14292")) {
            {}
          } else {
            stryCov_9fa48("14292");
            value = helpers.valueToString(value);
          }
        }
        await module.client.collection(stryMutAct_9fa48("14293") ? "" : (stryCov_9fa48("14293"), 'objects')).deleteMany(stryMutAct_9fa48("14294") ? {} : (stryCov_9fa48("14294"), {
          _key: Array.isArray(key) ? stryMutAct_9fa48("14295") ? {} : (stryCov_9fa48("14295"), {
            $in: key
          }) : key,
          value: isValueArray ? stryMutAct_9fa48("14296") ? {} : (stryCov_9fa48("14296"), {
            $in: value
          }) : value
        }));
      }
    };
    module.sortedSetsRemove = async function (keys, value) {
      if (stryMutAct_9fa48("14297")) {
        {}
      } else {
        stryCov_9fa48("14297");
        if (stryMutAct_9fa48("14300") ? !Array.isArray(keys) && !keys.length : stryMutAct_9fa48("14299") ? false : stryMutAct_9fa48("14298") ? true : (stryCov_9fa48("14298", "14299", "14300"), (stryMutAct_9fa48("14301") ? Array.isArray(keys) : (stryCov_9fa48("14301"), !Array.isArray(keys))) || (stryMutAct_9fa48("14302") ? keys.length : (stryCov_9fa48("14302"), !keys.length)))) {
          if (stryMutAct_9fa48("14303")) {
            {}
          } else {
            stryCov_9fa48("14303");
            return;
          }
        }
        value = helpers.valueToString(value);
        await module.client.collection(stryMutAct_9fa48("14304") ? "" : (stryCov_9fa48("14304"), 'objects')).deleteMany(stryMutAct_9fa48("14305") ? {} : (stryCov_9fa48("14305"), {
          _key: stryMutAct_9fa48("14306") ? {} : (stryCov_9fa48("14306"), {
            $in: keys
          }),
          value: value
        }));
      }
    };
    module.sortedSetsRemoveRangeByScore = async function (keys, min, max) {
      if (stryMutAct_9fa48("14307")) {
        {}
      } else {
        stryCov_9fa48("14307");
        if (stryMutAct_9fa48("14310") ? !Array.isArray(keys) && !keys.length : stryMutAct_9fa48("14309") ? false : stryMutAct_9fa48("14308") ? true : (stryCov_9fa48("14308", "14309", "14310"), (stryMutAct_9fa48("14311") ? Array.isArray(keys) : (stryCov_9fa48("14311"), !Array.isArray(keys))) || (stryMutAct_9fa48("14312") ? keys.length : (stryCov_9fa48("14312"), !keys.length)))) {
          if (stryMutAct_9fa48("14313")) {
            {}
          } else {
            stryCov_9fa48("14313");
            return;
          }
        }
        const query = stryMutAct_9fa48("14314") ? {} : (stryCov_9fa48("14314"), {
          _key: stryMutAct_9fa48("14315") ? {} : (stryCov_9fa48("14315"), {
            $in: keys
          })
        });
        if (stryMutAct_9fa48("14318") ? keys.length !== 1 : stryMutAct_9fa48("14317") ? false : stryMutAct_9fa48("14316") ? true : (stryCov_9fa48("14316", "14317", "14318"), keys.length === 1)) {
          if (stryMutAct_9fa48("14319")) {
            {}
          } else {
            stryCov_9fa48("14319");
            query._key = keys[0];
          }
        }
        if (stryMutAct_9fa48("14322") ? min === '-inf' : stryMutAct_9fa48("14321") ? false : stryMutAct_9fa48("14320") ? true : (stryCov_9fa48("14320", "14321", "14322"), min !== (stryMutAct_9fa48("14323") ? "" : (stryCov_9fa48("14323"), '-inf')))) {
          if (stryMutAct_9fa48("14324")) {
            {}
          } else {
            stryCov_9fa48("14324");
            query.score = stryMutAct_9fa48("14325") ? {} : (stryCov_9fa48("14325"), {
              $gte: parseFloat(min)
            });
          }
        }
        if (stryMutAct_9fa48("14328") ? max === '+inf' : stryMutAct_9fa48("14327") ? false : stryMutAct_9fa48("14326") ? true : (stryCov_9fa48("14326", "14327", "14328"), max !== (stryMutAct_9fa48("14329") ? "" : (stryCov_9fa48("14329"), '+inf')))) {
          if (stryMutAct_9fa48("14330")) {
            {}
          } else {
            stryCov_9fa48("14330");
            query.score = stryMutAct_9fa48("14333") ? query.score && {} : stryMutAct_9fa48("14332") ? false : stryMutAct_9fa48("14331") ? true : (stryCov_9fa48("14331", "14332", "14333"), query.score || {});
            query.score.$lte = parseFloat(max);
          }
        }
        await module.client.collection(stryMutAct_9fa48("14334") ? "" : (stryCov_9fa48("14334"), 'objects')).deleteMany(query);
      }
    };
    module.sortedSetRemoveBulk = async function (data) {
      if (stryMutAct_9fa48("14335")) {
        {}
      } else {
        stryCov_9fa48("14335");
        if (stryMutAct_9fa48("14338") ? !Array.isArray(data) && !data.length : stryMutAct_9fa48("14337") ? false : stryMutAct_9fa48("14336") ? true : (stryCov_9fa48("14336", "14337", "14338"), (stryMutAct_9fa48("14339") ? Array.isArray(data) : (stryCov_9fa48("14339"), !Array.isArray(data))) || (stryMutAct_9fa48("14340") ? data.length : (stryCov_9fa48("14340"), !data.length)))) {
          if (stryMutAct_9fa48("14341")) {
            {}
          } else {
            stryCov_9fa48("14341");
            return;
          }
        }
        const bulk = module.client.collection(stryMutAct_9fa48("14342") ? "" : (stryCov_9fa48("14342"), 'objects')).initializeUnorderedBulkOp();
        data.forEach(stryMutAct_9fa48("14343") ? () => undefined : (stryCov_9fa48("14343"), item => bulk.find(stryMutAct_9fa48("14344") ? {} : (stryCov_9fa48("14344"), {
          _key: item[0],
          value: String(item[1])
        })).delete()));
        await bulk.execute();
      }
    };
  }
};