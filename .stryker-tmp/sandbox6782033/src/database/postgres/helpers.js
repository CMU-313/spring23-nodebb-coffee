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
const helpers = module.exports;
helpers.valueToString = function (value) {
  if (stryMutAct_9fa48("15495")) {
    {}
  } else {
    stryCov_9fa48("15495");
    return String(value);
  }
};
helpers.removeDuplicateValues = function (values, ...others) {
  if (stryMutAct_9fa48("15496")) {
    {}
  } else {
    stryCov_9fa48("15496");
    for (let i = 0; stryMutAct_9fa48("15499") ? i >= values.length : stryMutAct_9fa48("15498") ? i <= values.length : stryMutAct_9fa48("15497") ? false : (stryCov_9fa48("15497", "15498", "15499"), i < values.length); stryMutAct_9fa48("15500") ? i-- : (stryCov_9fa48("15500"), i++)) {
      if (stryMutAct_9fa48("15501")) {
        {}
      } else {
        stryCov_9fa48("15501");
        if (stryMutAct_9fa48("15504") ? values.lastIndexOf(values[i]) === i : stryMutAct_9fa48("15503") ? false : stryMutAct_9fa48("15502") ? true : (stryCov_9fa48("15502", "15503", "15504"), values.lastIndexOf(values[i]) !== i)) {
          if (stryMutAct_9fa48("15505")) {
            {}
          } else {
            stryCov_9fa48("15505");
            values.splice(i, 1);
            for (let j = 0; stryMutAct_9fa48("15508") ? j >= others.length : stryMutAct_9fa48("15507") ? j <= others.length : stryMutAct_9fa48("15506") ? false : (stryCov_9fa48("15506", "15507", "15508"), j < others.length); stryMutAct_9fa48("15509") ? j-- : (stryCov_9fa48("15509"), j++)) {
              if (stryMutAct_9fa48("15510")) {
                {}
              } else {
                stryCov_9fa48("15510");
                others[j].splice(i, 1);
              }
            }
            stryMutAct_9fa48("15511") ? i += 1 : (stryCov_9fa48("15511"), i -= 1);
          }
        }
      }
    }
  }
};
helpers.ensureLegacyObjectType = async function (db, key, type) {
  if (stryMutAct_9fa48("15512")) {
    {}
  } else {
    stryCov_9fa48("15512");
    await db.query(stryMutAct_9fa48("15513") ? {} : (stryCov_9fa48("15513"), {
      name: stryMutAct_9fa48("15514") ? "" : (stryCov_9fa48("15514"), 'ensureLegacyObjectTypeBefore'),
      text: stryMutAct_9fa48("15515") ? `` : (stryCov_9fa48("15515"), `
DELETE FROM "legacy_object"
 WHERE "expireAt" IS NOT NULL
   AND "expireAt" <= CURRENT_TIMESTAMP`)
    }));
    await db.query(stryMutAct_9fa48("15516") ? {} : (stryCov_9fa48("15516"), {
      name: stryMutAct_9fa48("15517") ? "" : (stryCov_9fa48("15517"), 'ensureLegacyObjectType1'),
      text: stryMutAct_9fa48("15518") ? `` : (stryCov_9fa48("15518"), `
INSERT INTO "legacy_object" ("_key", "type")
VALUES ($1::TEXT, $2::TEXT::LEGACY_OBJECT_TYPE)
    ON CONFLICT
    DO NOTHING`),
      values: stryMutAct_9fa48("15519") ? [] : (stryCov_9fa48("15519"), [key, type])
    }));
    const res = await db.query(stryMutAct_9fa48("15520") ? {} : (stryCov_9fa48("15520"), {
      name: stryMutAct_9fa48("15521") ? "" : (stryCov_9fa48("15521"), 'ensureLegacyObjectType2'),
      text: stryMutAct_9fa48("15522") ? `` : (stryCov_9fa48("15522"), `
SELECT "type"
  FROM "legacy_object_live"
 WHERE "_key" = $1::TEXT`),
      values: stryMutAct_9fa48("15523") ? [] : (stryCov_9fa48("15523"), [key])
    }));
    if (stryMutAct_9fa48("15526") ? res.rows[0].type === type : stryMutAct_9fa48("15525") ? false : stryMutAct_9fa48("15524") ? true : (stryCov_9fa48("15524", "15525", "15526"), res.rows[0].type !== type)) {
      if (stryMutAct_9fa48("15527")) {
        {}
      } else {
        stryCov_9fa48("15527");
        throw new Error(stryMutAct_9fa48("15528") ? `` : (stryCov_9fa48("15528"), `database: cannot insert ${JSON.stringify(key)} as ${type} because it already exists as ${res.rows[0].type}`));
      }
    }
  }
};
helpers.ensureLegacyObjectsType = async function (db, keys, type) {
  if (stryMutAct_9fa48("15529")) {
    {}
  } else {
    stryCov_9fa48("15529");
    await db.query(stryMutAct_9fa48("15530") ? {} : (stryCov_9fa48("15530"), {
      name: stryMutAct_9fa48("15531") ? "" : (stryCov_9fa48("15531"), 'ensureLegacyObjectTypeBefore'),
      text: stryMutAct_9fa48("15532") ? `` : (stryCov_9fa48("15532"), `
DELETE FROM "legacy_object"
 WHERE "expireAt" IS NOT NULL
   AND "expireAt" <= CURRENT_TIMESTAMP`)
    }));
    await db.query(stryMutAct_9fa48("15533") ? {} : (stryCov_9fa48("15533"), {
      name: stryMutAct_9fa48("15534") ? "" : (stryCov_9fa48("15534"), 'ensureLegacyObjectsType1'),
      text: stryMutAct_9fa48("15535") ? `` : (stryCov_9fa48("15535"), `
INSERT INTO "legacy_object" ("_key", "type")
SELECT k, $2::TEXT::LEGACY_OBJECT_TYPE
  FROM UNNEST($1::TEXT[]) k
    ON CONFLICT
    DO NOTHING`),
      values: stryMutAct_9fa48("15536") ? [] : (stryCov_9fa48("15536"), [keys, type])
    }));
    const res = await db.query(stryMutAct_9fa48("15537") ? {} : (stryCov_9fa48("15537"), {
      name: stryMutAct_9fa48("15538") ? "" : (stryCov_9fa48("15538"), 'ensureLegacyObjectsType2'),
      text: stryMutAct_9fa48("15539") ? `` : (stryCov_9fa48("15539"), `
SELECT "_key", "type"
  FROM "legacy_object_live"
 WHERE "_key" = ANY($1::TEXT[])`),
      values: stryMutAct_9fa48("15540") ? [] : (stryCov_9fa48("15540"), [keys])
    }));
    const invalid = stryMutAct_9fa48("15541") ? res.rows : (stryCov_9fa48("15541"), res.rows.filter(stryMutAct_9fa48("15542") ? () => undefined : (stryCov_9fa48("15542"), r => stryMutAct_9fa48("15545") ? r.type === type : stryMutAct_9fa48("15544") ? false : stryMutAct_9fa48("15543") ? true : (stryCov_9fa48("15543", "15544", "15545"), r.type !== type))));
    if (stryMutAct_9fa48("15547") ? false : stryMutAct_9fa48("15546") ? true : (stryCov_9fa48("15546", "15547"), invalid.length)) {
      if (stryMutAct_9fa48("15548")) {
        {}
      } else {
        stryCov_9fa48("15548");
        const parts = invalid.map(stryMutAct_9fa48("15549") ? () => undefined : (stryCov_9fa48("15549"), r => stryMutAct_9fa48("15550") ? `` : (stryCov_9fa48("15550"), `${JSON.stringify(r._key)} is ${r.type}`)));
        throw new Error(stryMutAct_9fa48("15551") ? `` : (stryCov_9fa48("15551"), `database: cannot insert multiple objects as ${type} because they already exist: ${parts.join(stryMutAct_9fa48("15552") ? "" : (stryCov_9fa48("15552"), ', '))}`));
      }
    }
    const missing = stryMutAct_9fa48("15553") ? keys : (stryCov_9fa48("15553"), keys.filter(stryMutAct_9fa48("15554") ? () => undefined : (stryCov_9fa48("15554"), k => stryMutAct_9fa48("15555") ? res.rows.some(r => r._key === k) : (stryCov_9fa48("15555"), !(stryMutAct_9fa48("15556") ? res.rows.every(r => r._key === k) : (stryCov_9fa48("15556"), res.rows.some(stryMutAct_9fa48("15557") ? () => undefined : (stryCov_9fa48("15557"), r => stryMutAct_9fa48("15560") ? r._key !== k : stryMutAct_9fa48("15559") ? false : stryMutAct_9fa48("15558") ? true : (stryCov_9fa48("15558", "15559", "15560"), r._key === k)))))))));
    if (stryMutAct_9fa48("15562") ? false : stryMutAct_9fa48("15561") ? true : (stryCov_9fa48("15561", "15562"), missing.length)) {
      if (stryMutAct_9fa48("15563")) {
        {}
      } else {
        stryCov_9fa48("15563");
        throw new Error(stryMutAct_9fa48("15564") ? `` : (stryCov_9fa48("15564"), `database: failed to insert keys for objects: ${JSON.stringify(missing)}`));
      }
    }
  }
};
helpers.noop = function () {};