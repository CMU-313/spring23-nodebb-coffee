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
  if (stryMutAct_9fa48("15565")) {
    {}
  } else {
    stryCov_9fa48("15565");
    const helpers = require('./helpers');
    module.listPrepend = async function (key, value) {
      if (stryMutAct_9fa48("15566")) {
        {}
      } else {
        stryCov_9fa48("15566");
        if (stryMutAct_9fa48("15569") ? false : stryMutAct_9fa48("15568") ? true : stryMutAct_9fa48("15567") ? key : (stryCov_9fa48("15567", "15568", "15569"), !key)) {
          if (stryMutAct_9fa48("15570")) {
            {}
          } else {
            stryCov_9fa48("15570");
            return;
          }
        }
        await module.transaction(async client => {
          if (stryMutAct_9fa48("15571")) {
            {}
          } else {
            stryCov_9fa48("15571");
            await helpers.ensureLegacyObjectType(client, key, stryMutAct_9fa48("15572") ? "" : (stryCov_9fa48("15572"), 'list'));
            value = Array.isArray(value) ? value : stryMutAct_9fa48("15573") ? [] : (stryCov_9fa48("15573"), [value]);
            stryMutAct_9fa48("15574") ? value : (stryCov_9fa48("15574"), value.reverse());
            await client.query(stryMutAct_9fa48("15575") ? {} : (stryCov_9fa48("15575"), {
              name: stryMutAct_9fa48("15576") ? "" : (stryCov_9fa48("15576"), 'listPrependValues'),
              text: stryMutAct_9fa48("15577") ? `` : (stryCov_9fa48("15577"), `
INSERT INTO "legacy_list" ("_key", "array")
VALUES ($1::TEXT, $2::TEXT[])
ON CONFLICT ("_key")
DO UPDATE SET "array" = EXCLUDED.array || "legacy_list"."array"`),
              values: stryMutAct_9fa48("15578") ? [] : (stryCov_9fa48("15578"), [key, value])
            }));
          }
        });
      }
    };
    module.listAppend = async function (key, value) {
      if (stryMutAct_9fa48("15579")) {
        {}
      } else {
        stryCov_9fa48("15579");
        if (stryMutAct_9fa48("15582") ? false : stryMutAct_9fa48("15581") ? true : stryMutAct_9fa48("15580") ? key : (stryCov_9fa48("15580", "15581", "15582"), !key)) {
          if (stryMutAct_9fa48("15583")) {
            {}
          } else {
            stryCov_9fa48("15583");
            return;
          }
        }
        await module.transaction(async client => {
          if (stryMutAct_9fa48("15584")) {
            {}
          } else {
            stryCov_9fa48("15584");
            value = Array.isArray(value) ? value : stryMutAct_9fa48("15585") ? [] : (stryCov_9fa48("15585"), [value]);
            await helpers.ensureLegacyObjectType(client, key, stryMutAct_9fa48("15586") ? "" : (stryCov_9fa48("15586"), 'list'));
            await client.query(stryMutAct_9fa48("15587") ? {} : (stryCov_9fa48("15587"), {
              name: stryMutAct_9fa48("15588") ? "" : (stryCov_9fa48("15588"), 'listAppend'),
              text: stryMutAct_9fa48("15589") ? `` : (stryCov_9fa48("15589"), `
INSERT INTO "legacy_list" ("_key", "array")
VALUES ($1::TEXT, $2::TEXT[])
ON CONFLICT ("_key")
DO UPDATE SET "array" = "legacy_list"."array" || EXCLUDED.array`),
              values: stryMutAct_9fa48("15590") ? [] : (stryCov_9fa48("15590"), [key, value])
            }));
          }
        });
      }
    };
    module.listRemoveLast = async function (key) {
      if (stryMutAct_9fa48("15591")) {
        {}
      } else {
        stryCov_9fa48("15591");
        if (stryMutAct_9fa48("15594") ? false : stryMutAct_9fa48("15593") ? true : stryMutAct_9fa48("15592") ? key : (stryCov_9fa48("15592", "15593", "15594"), !key)) {
          if (stryMutAct_9fa48("15595")) {
            {}
          } else {
            stryCov_9fa48("15595");
            return;
          }
        }
        const res = await module.pool.query(stryMutAct_9fa48("15596") ? {} : (stryCov_9fa48("15596"), {
          name: stryMutAct_9fa48("15597") ? "" : (stryCov_9fa48("15597"), 'listRemoveLast'),
          text: stryMutAct_9fa48("15598") ? `` : (stryCov_9fa48("15598"), `
WITH A AS (
    SELECT l.*
      FROM "legacy_object_live" o
     INNER JOIN "legacy_list" l
             ON o."_key" = l."_key"
            AND o."type" = l."type"
     WHERE o."_key" = $1::TEXT
       FOR UPDATE)
UPDATE "legacy_list" l
   SET "array" = A."array"[1 : array_length(A."array", 1) - 1]
  FROM A
 WHERE A."_key" = l."_key"
RETURNING A."array"[array_length(A."array", 1)] v`),
          values: stryMutAct_9fa48("15599") ? [] : (stryCov_9fa48("15599"), [key])
        }));
        return res.rows.length ? res.rows[0].v : null;
      }
    };
    module.listRemoveAll = async function (key, value) {
      if (stryMutAct_9fa48("15600")) {
        {}
      } else {
        stryCov_9fa48("15600");
        if (stryMutAct_9fa48("15603") ? false : stryMutAct_9fa48("15602") ? true : stryMutAct_9fa48("15601") ? key : (stryCov_9fa48("15601", "15602", "15603"), !key)) {
          if (stryMutAct_9fa48("15604")) {
            {}
          } else {
            stryCov_9fa48("15604");
            return;
          }
        }
        // TODO: remove all values with one query
        if (stryMutAct_9fa48("15606") ? false : stryMutAct_9fa48("15605") ? true : (stryCov_9fa48("15605", "15606"), Array.isArray(value))) {
          if (stryMutAct_9fa48("15607")) {
            {}
          } else {
            stryCov_9fa48("15607");
            await Promise.all(value.map(stryMutAct_9fa48("15608") ? () => undefined : (stryCov_9fa48("15608"), v => module.listRemoveAll(key, v))));
            return;
          }
        }
        await module.pool.query(stryMutAct_9fa48("15609") ? {} : (stryCov_9fa48("15609"), {
          name: stryMutAct_9fa48("15610") ? "" : (stryCov_9fa48("15610"), 'listRemoveAll'),
          text: stryMutAct_9fa48("15611") ? `` : (stryCov_9fa48("15611"), `
UPDATE "legacy_list" l
   SET "array" = array_remove(l."array", $2::TEXT)
  FROM "legacy_object_live" o
 WHERE o."_key" = l."_key"
   AND o."type" = l."type"
   AND o."_key" = $1::TEXT`),
          values: stryMutAct_9fa48("15612") ? [] : (stryCov_9fa48("15612"), [key, value])
        }));
      }
    };
    module.listTrim = async function (key, start, stop) {
      if (stryMutAct_9fa48("15613")) {
        {}
      } else {
        stryCov_9fa48("15613");
        if (stryMutAct_9fa48("15616") ? false : stryMutAct_9fa48("15615") ? true : stryMutAct_9fa48("15614") ? key : (stryCov_9fa48("15614", "15615", "15616"), !key)) {
          if (stryMutAct_9fa48("15617")) {
            {}
          } else {
            stryCov_9fa48("15617");
            return;
          }
        }
        stryMutAct_9fa48("15618") ? stop -= 1 : (stryCov_9fa48("15618"), stop += 1);
        await module.pool.query((stryMutAct_9fa48("15622") ? stop <= 0 : stryMutAct_9fa48("15621") ? stop >= 0 : stryMutAct_9fa48("15620") ? false : stryMutAct_9fa48("15619") ? true : (stryCov_9fa48("15619", "15620", "15621", "15622"), stop > 0)) ? stryMutAct_9fa48("15623") ? {} : (stryCov_9fa48("15623"), {
          name: stryMutAct_9fa48("15624") ? "" : (stryCov_9fa48("15624"), 'listTrim'),
          text: stryMutAct_9fa48("15625") ? `` : (stryCov_9fa48("15625"), `
UPDATE "legacy_list" l
   SET "array" = ARRAY(SELECT m.m
                         FROM UNNEST(l."array") WITH ORDINALITY m(m, i)
                        ORDER BY m.i ASC
                        LIMIT ($3::INTEGER - $2::INTEGER)
                       OFFSET $2::INTEGER)
  FROM "legacy_object_live" o
 WHERE o."_key" = l."_key"
   AND o."type" = l."type"
   AND o."_key" = $1::TEXT`),
          values: stryMutAct_9fa48("15626") ? [] : (stryCov_9fa48("15626"), [key, start, stop])
        }) : stryMutAct_9fa48("15627") ? {} : (stryCov_9fa48("15627"), {
          name: stryMutAct_9fa48("15628") ? "" : (stryCov_9fa48("15628"), 'listTrimBack'),
          text: stryMutAct_9fa48("15629") ? `` : (stryCov_9fa48("15629"), `
UPDATE "legacy_list" l
   SET "array" = ARRAY(SELECT m.m
                         FROM UNNEST(l."array") WITH ORDINALITY m(m, i)
                        ORDER BY m.i ASC
                        LIMIT ($3::INTEGER - $2::INTEGER + array_length(l."array", 1))
                       OFFSET $2::INTEGER)
  FROM "legacy_object_live" o
 WHERE o."_key" = l."_key"
   AND o."type" = l."type"
   AND o."_key" = $1::TEXT`),
          values: stryMutAct_9fa48("15630") ? [] : (stryCov_9fa48("15630"), [key, start, stop])
        }));
      }
    };
    module.getListRange = async function (key, start, stop) {
      if (stryMutAct_9fa48("15631")) {
        {}
      } else {
        stryCov_9fa48("15631");
        if (stryMutAct_9fa48("15634") ? false : stryMutAct_9fa48("15633") ? true : stryMutAct_9fa48("15632") ? key : (stryCov_9fa48("15632", "15633", "15634"), !key)) {
          if (stryMutAct_9fa48("15635")) {
            {}
          } else {
            stryCov_9fa48("15635");
            return;
          }
        }
        stryMutAct_9fa48("15636") ? stop -= 1 : (stryCov_9fa48("15636"), stop += 1);
        const res = await module.pool.query((stryMutAct_9fa48("15640") ? stop <= 0 : stryMutAct_9fa48("15639") ? stop >= 0 : stryMutAct_9fa48("15638") ? false : stryMutAct_9fa48("15637") ? true : (stryCov_9fa48("15637", "15638", "15639", "15640"), stop > 0)) ? stryMutAct_9fa48("15641") ? {} : (stryCov_9fa48("15641"), {
          name: stryMutAct_9fa48("15642") ? "" : (stryCov_9fa48("15642"), 'getListRange'),
          text: stryMutAct_9fa48("15643") ? `` : (stryCov_9fa48("15643"), `
SELECT ARRAY(SELECT m.m
               FROM UNNEST(l."array") WITH ORDINALITY m(m, i)
              ORDER BY m.i ASC
              LIMIT ($3::INTEGER - $2::INTEGER)
             OFFSET $2::INTEGER) l
  FROM "legacy_object_live" o
 INNER JOIN "legacy_list" l
         ON o."_key" = l."_key"
        AND o."type" = l."type"
      WHERE o."_key" = $1::TEXT`),
          values: stryMutAct_9fa48("15644") ? [] : (stryCov_9fa48("15644"), [key, start, stop])
        }) : stryMutAct_9fa48("15645") ? {} : (stryCov_9fa48("15645"), {
          name: stryMutAct_9fa48("15646") ? "" : (stryCov_9fa48("15646"), 'getListRangeBack'),
          text: stryMutAct_9fa48("15647") ? `` : (stryCov_9fa48("15647"), `
SELECT ARRAY(SELECT m.m
               FROM UNNEST(l."array") WITH ORDINALITY m(m, i)
              ORDER BY m.i ASC
              LIMIT ($3::INTEGER - $2::INTEGER + array_length(l."array", 1))
             OFFSET $2::INTEGER) l
  FROM "legacy_object_live" o
 INNER JOIN "legacy_list" l
         ON o."_key" = l."_key"
        AND o."type" = l."type"
 WHERE o."_key" = $1::TEXT`),
          values: stryMutAct_9fa48("15648") ? [] : (stryCov_9fa48("15648"), [key, start, stop])
        }));
        return res.rows.length ? res.rows[0].l : stryMutAct_9fa48("15649") ? ["Stryker was here"] : (stryCov_9fa48("15649"), []);
      }
    };
    module.listLength = async function (key) {
      if (stryMutAct_9fa48("15650")) {
        {}
      } else {
        stryCov_9fa48("15650");
        const res = await module.pool.query(stryMutAct_9fa48("15651") ? {} : (stryCov_9fa48("15651"), {
          name: stryMutAct_9fa48("15652") ? "" : (stryCov_9fa48("15652"), 'listLength'),
          text: stryMutAct_9fa48("15653") ? `` : (stryCov_9fa48("15653"), `
SELECT array_length(l."array", 1) l
  FROM "legacy_object_live" o
 INNER JOIN "legacy_list" l
         ON o."_key" = l."_key"
        AND o."type" = l."type"
      WHERE o."_key" = $1::TEXT`),
          values: stryMutAct_9fa48("15654") ? [] : (stryCov_9fa48("15654"), [key])
        }));
        return res.rows.length ? res.rows[0].l : 0;
      }
    };
  }
};