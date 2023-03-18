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
  if (stryMutAct_9fa48("16158")) {
    {}
  } else {
    stryCov_9fa48("16158");
    const helpers = require('../helpers');
    module.sortedSetRemove = async function (key, value) {
      if (stryMutAct_9fa48("16159")) {
        {}
      } else {
        stryCov_9fa48("16159");
        if (stryMutAct_9fa48("16162") ? false : stryMutAct_9fa48("16161") ? true : stryMutAct_9fa48("16160") ? key : (stryCov_9fa48("16160", "16161", "16162"), !key)) {
          if (stryMutAct_9fa48("16163")) {
            {}
          } else {
            stryCov_9fa48("16163");
            return;
          }
        }
        const isValueArray = Array.isArray(value);
        if (stryMutAct_9fa48("16166") ? !value && isValueArray && !value.length : stryMutAct_9fa48("16165") ? false : stryMutAct_9fa48("16164") ? true : (stryCov_9fa48("16164", "16165", "16166"), (stryMutAct_9fa48("16167") ? value : (stryCov_9fa48("16167"), !value)) || (stryMutAct_9fa48("16169") ? isValueArray || !value.length : stryMutAct_9fa48("16168") ? false : (stryCov_9fa48("16168", "16169"), isValueArray && (stryMutAct_9fa48("16170") ? value.length : (stryCov_9fa48("16170"), !value.length)))))) {
          if (stryMutAct_9fa48("16171")) {
            {}
          } else {
            stryCov_9fa48("16171");
            return;
          }
        }
        if (stryMutAct_9fa48("16174") ? false : stryMutAct_9fa48("16173") ? true : stryMutAct_9fa48("16172") ? Array.isArray(key) : (stryCov_9fa48("16172", "16173", "16174"), !Array.isArray(key))) {
          if (stryMutAct_9fa48("16175")) {
            {}
          } else {
            stryCov_9fa48("16175");
            key = stryMutAct_9fa48("16176") ? [] : (stryCov_9fa48("16176"), [key]);
          }
        }
        if (stryMutAct_9fa48("16179") ? false : stryMutAct_9fa48("16178") ? true : stryMutAct_9fa48("16177") ? isValueArray : (stryCov_9fa48("16177", "16178", "16179"), !isValueArray)) {
          if (stryMutAct_9fa48("16180")) {
            {}
          } else {
            stryCov_9fa48("16180");
            value = stryMutAct_9fa48("16181") ? [] : (stryCov_9fa48("16181"), [value]);
          }
        }
        value = value.map(helpers.valueToString);
        await module.pool.query(stryMutAct_9fa48("16182") ? {} : (stryCov_9fa48("16182"), {
          name: stryMutAct_9fa48("16183") ? "" : (stryCov_9fa48("16183"), 'sortedSetRemove'),
          text: stryMutAct_9fa48("16184") ? `` : (stryCov_9fa48("16184"), `
DELETE FROM "legacy_zset"
 WHERE "_key" = ANY($1::TEXT[])
   AND "value" = ANY($2::TEXT[])`),
          values: stryMutAct_9fa48("16185") ? [] : (stryCov_9fa48("16185"), [key, value])
        }));
      }
    };
    module.sortedSetsRemove = async function (keys, value) {
      if (stryMutAct_9fa48("16186")) {
        {}
      } else {
        stryCov_9fa48("16186");
        if (stryMutAct_9fa48("16189") ? !Array.isArray(keys) && !keys.length : stryMutAct_9fa48("16188") ? false : stryMutAct_9fa48("16187") ? true : (stryCov_9fa48("16187", "16188", "16189"), (stryMutAct_9fa48("16190") ? Array.isArray(keys) : (stryCov_9fa48("16190"), !Array.isArray(keys))) || (stryMutAct_9fa48("16191") ? keys.length : (stryCov_9fa48("16191"), !keys.length)))) {
          if (stryMutAct_9fa48("16192")) {
            {}
          } else {
            stryCov_9fa48("16192");
            return;
          }
        }
        value = helpers.valueToString(value);
        await module.pool.query(stryMutAct_9fa48("16193") ? {} : (stryCov_9fa48("16193"), {
          name: stryMutAct_9fa48("16194") ? "" : (stryCov_9fa48("16194"), 'sortedSetsRemove'),
          text: stryMutAct_9fa48("16195") ? `` : (stryCov_9fa48("16195"), `
DELETE FROM "legacy_zset"
 WHERE "_key" = ANY($1::TEXT[])
   AND "value" = $2::TEXT`),
          values: stryMutAct_9fa48("16196") ? [] : (stryCov_9fa48("16196"), [keys, value])
        }));
      }
    };
    module.sortedSetsRemoveRangeByScore = async function (keys, min, max) {
      if (stryMutAct_9fa48("16197")) {
        {}
      } else {
        stryCov_9fa48("16197");
        if (stryMutAct_9fa48("16200") ? !Array.isArray(keys) && !keys.length : stryMutAct_9fa48("16199") ? false : stryMutAct_9fa48("16198") ? true : (stryCov_9fa48("16198", "16199", "16200"), (stryMutAct_9fa48("16201") ? Array.isArray(keys) : (stryCov_9fa48("16201"), !Array.isArray(keys))) || (stryMutAct_9fa48("16202") ? keys.length : (stryCov_9fa48("16202"), !keys.length)))) {
          if (stryMutAct_9fa48("16203")) {
            {}
          } else {
            stryCov_9fa48("16203");
            return;
          }
        }
        if (stryMutAct_9fa48("16206") ? min !== '-inf' : stryMutAct_9fa48("16205") ? false : stryMutAct_9fa48("16204") ? true : (stryCov_9fa48("16204", "16205", "16206"), min === (stryMutAct_9fa48("16207") ? "" : (stryCov_9fa48("16207"), '-inf')))) {
          if (stryMutAct_9fa48("16208")) {
            {}
          } else {
            stryCov_9fa48("16208");
            min = null;
          }
        }
        if (stryMutAct_9fa48("16211") ? max !== '+inf' : stryMutAct_9fa48("16210") ? false : stryMutAct_9fa48("16209") ? true : (stryCov_9fa48("16209", "16210", "16211"), max === (stryMutAct_9fa48("16212") ? "" : (stryCov_9fa48("16212"), '+inf')))) {
          if (stryMutAct_9fa48("16213")) {
            {}
          } else {
            stryCov_9fa48("16213");
            max = null;
          }
        }
        await module.pool.query(stryMutAct_9fa48("16214") ? {} : (stryCov_9fa48("16214"), {
          name: stryMutAct_9fa48("16215") ? "" : (stryCov_9fa48("16215"), 'sortedSetsRemoveRangeByScore'),
          text: stryMutAct_9fa48("16216") ? `` : (stryCov_9fa48("16216"), `
DELETE FROM "legacy_zset"
 WHERE "_key" = ANY($1::TEXT[])
   AND ("score" >= $2::NUMERIC OR $2::NUMERIC IS NULL)
   AND ("score" <= $3::NUMERIC OR $3::NUMERIC IS NULL)`),
          values: stryMutAct_9fa48("16217") ? [] : (stryCov_9fa48("16217"), [keys, min, max])
        }));
      }
    };
    module.sortedSetRemoveBulk = async function (data) {
      if (stryMutAct_9fa48("16218")) {
        {}
      } else {
        stryCov_9fa48("16218");
        if (stryMutAct_9fa48("16221") ? !Array.isArray(data) && !data.length : stryMutAct_9fa48("16220") ? false : stryMutAct_9fa48("16219") ? true : (stryCov_9fa48("16219", "16220", "16221"), (stryMutAct_9fa48("16222") ? Array.isArray(data) : (stryCov_9fa48("16222"), !Array.isArray(data))) || (stryMutAct_9fa48("16223") ? data.length : (stryCov_9fa48("16223"), !data.length)))) {
          if (stryMutAct_9fa48("16224")) {
            {}
          } else {
            stryCov_9fa48("16224");
            return;
          }
        }
        const keys = data.map(stryMutAct_9fa48("16225") ? () => undefined : (stryCov_9fa48("16225"), d => d[0]));
        const values = data.map(stryMutAct_9fa48("16226") ? () => undefined : (stryCov_9fa48("16226"), d => d[1]));
        await module.pool.query(stryMutAct_9fa48("16227") ? {} : (stryCov_9fa48("16227"), {
          name: stryMutAct_9fa48("16228") ? "" : (stryCov_9fa48("16228"), 'sortedSetRemoveBulk'),
          text: stryMutAct_9fa48("16229") ? `` : (stryCov_9fa48("16229"), `
    DELETE FROM "legacy_zset"
    WHERE (_key, value) IN (
        SELECT k, v
        FROM UNNEST($1::TEXT[], $2::TEXT[]) vs(k, v)
        )`),
          values: stryMutAct_9fa48("16230") ? [] : (stryCov_9fa48("16230"), [keys, values])
        }));
      }
    };
  }
};