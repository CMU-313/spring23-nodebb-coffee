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
const _ = require('lodash');
module.exports = function (module) {
  if (stryMutAct_9fa48("15810")) {
    {}
  } else {
    stryCov_9fa48("15810");
    const helpers = require('./helpers');
    module.setAdd = async function (key, value) {
      if (stryMutAct_9fa48("15811")) {
        {}
      } else {
        stryCov_9fa48("15811");
        if (stryMutAct_9fa48("15814") ? false : stryMutAct_9fa48("15813") ? true : stryMutAct_9fa48("15812") ? Array.isArray(value) : (stryCov_9fa48("15812", "15813", "15814"), !Array.isArray(value))) {
          if (stryMutAct_9fa48("15815")) {
            {}
          } else {
            stryCov_9fa48("15815");
            value = stryMutAct_9fa48("15816") ? [] : (stryCov_9fa48("15816"), [value]);
          }
        }
        if (stryMutAct_9fa48("15819") ? false : stryMutAct_9fa48("15818") ? true : stryMutAct_9fa48("15817") ? value.length : (stryCov_9fa48("15817", "15818", "15819"), !value.length)) {
          if (stryMutAct_9fa48("15820")) {
            {}
          } else {
            stryCov_9fa48("15820");
            return;
          }
        }
        await module.transaction(async client => {
          if (stryMutAct_9fa48("15821")) {
            {}
          } else {
            stryCov_9fa48("15821");
            await helpers.ensureLegacyObjectType(client, key, stryMutAct_9fa48("15822") ? "" : (stryCov_9fa48("15822"), 'set'));
            await client.query(stryMutAct_9fa48("15823") ? {} : (stryCov_9fa48("15823"), {
              name: stryMutAct_9fa48("15824") ? "" : (stryCov_9fa48("15824"), 'setAdd'),
              text: stryMutAct_9fa48("15825") ? `` : (stryCov_9fa48("15825"), `
INSERT INTO "legacy_set" ("_key", "member")
SELECT $1::TEXT, m
FROM UNNEST($2::TEXT[]) m
ON CONFLICT ("_key", "member")
DO NOTHING`),
              values: stryMutAct_9fa48("15826") ? [] : (stryCov_9fa48("15826"), [key, value])
            }));
          }
        });
      }
    };
    module.setsAdd = async function (keys, value) {
      if (stryMutAct_9fa48("15827")) {
        {}
      } else {
        stryCov_9fa48("15827");
        if (stryMutAct_9fa48("15830") ? !Array.isArray(keys) && !keys.length : stryMutAct_9fa48("15829") ? false : stryMutAct_9fa48("15828") ? true : (stryCov_9fa48("15828", "15829", "15830"), (stryMutAct_9fa48("15831") ? Array.isArray(keys) : (stryCov_9fa48("15831"), !Array.isArray(keys))) || (stryMutAct_9fa48("15832") ? keys.length : (stryCov_9fa48("15832"), !keys.length)))) {
          if (stryMutAct_9fa48("15833")) {
            {}
          } else {
            stryCov_9fa48("15833");
            return;
          }
        }
        if (stryMutAct_9fa48("15836") ? false : stryMutAct_9fa48("15835") ? true : stryMutAct_9fa48("15834") ? Array.isArray(value) : (stryCov_9fa48("15834", "15835", "15836"), !Array.isArray(value))) {
          if (stryMutAct_9fa48("15837")) {
            {}
          } else {
            stryCov_9fa48("15837");
            value = stryMutAct_9fa48("15838") ? [] : (stryCov_9fa48("15838"), [value]);
          }
        }
        keys = _.uniq(keys);
        await module.transaction(async client => {
          if (stryMutAct_9fa48("15839")) {
            {}
          } else {
            stryCov_9fa48("15839");
            await helpers.ensureLegacyObjectsType(client, keys, stryMutAct_9fa48("15840") ? "" : (stryCov_9fa48("15840"), 'set'));
            await client.query(stryMutAct_9fa48("15841") ? {} : (stryCov_9fa48("15841"), {
              name: stryMutAct_9fa48("15842") ? "" : (stryCov_9fa48("15842"), 'setsAdd'),
              text: stryMutAct_9fa48("15843") ? `` : (stryCov_9fa48("15843"), `
INSERT INTO "legacy_set" ("_key", "member")
SELECT k, m
FROM UNNEST($1::TEXT[]) k
CROSS JOIN UNNEST($2::TEXT[]) m
ON CONFLICT ("_key", "member")
DO NOTHING`),
              values: stryMutAct_9fa48("15844") ? [] : (stryCov_9fa48("15844"), [keys, value])
            }));
          }
        });
      }
    };
    module.setRemove = async function (key, value) {
      if (stryMutAct_9fa48("15845")) {
        {}
      } else {
        stryCov_9fa48("15845");
        if (stryMutAct_9fa48("15848") ? false : stryMutAct_9fa48("15847") ? true : stryMutAct_9fa48("15846") ? Array.isArray(key) : (stryCov_9fa48("15846", "15847", "15848"), !Array.isArray(key))) {
          if (stryMutAct_9fa48("15849")) {
            {}
          } else {
            stryCov_9fa48("15849");
            key = stryMutAct_9fa48("15850") ? [] : (stryCov_9fa48("15850"), [key]);
          }
        }
        if (stryMutAct_9fa48("15853") ? false : stryMutAct_9fa48("15852") ? true : stryMutAct_9fa48("15851") ? Array.isArray(value) : (stryCov_9fa48("15851", "15852", "15853"), !Array.isArray(value))) {
          if (stryMutAct_9fa48("15854")) {
            {}
          } else {
            stryCov_9fa48("15854");
            value = stryMutAct_9fa48("15855") ? [] : (stryCov_9fa48("15855"), [value]);
          }
        }
        await module.pool.query(stryMutAct_9fa48("15856") ? {} : (stryCov_9fa48("15856"), {
          name: stryMutAct_9fa48("15857") ? "" : (stryCov_9fa48("15857"), 'setRemove'),
          text: stryMutAct_9fa48("15858") ? `` : (stryCov_9fa48("15858"), `
DELETE FROM "legacy_set"
 WHERE "_key" = ANY($1::TEXT[])
   AND "member" = ANY($2::TEXT[])`),
          values: stryMutAct_9fa48("15859") ? [] : (stryCov_9fa48("15859"), [key, value])
        }));
      }
    };
    module.setsRemove = async function (keys, value) {
      if (stryMutAct_9fa48("15860")) {
        {}
      } else {
        stryCov_9fa48("15860");
        if (stryMutAct_9fa48("15863") ? !Array.isArray(keys) && !keys.length : stryMutAct_9fa48("15862") ? false : stryMutAct_9fa48("15861") ? true : (stryCov_9fa48("15861", "15862", "15863"), (stryMutAct_9fa48("15864") ? Array.isArray(keys) : (stryCov_9fa48("15864"), !Array.isArray(keys))) || (stryMutAct_9fa48("15865") ? keys.length : (stryCov_9fa48("15865"), !keys.length)))) {
          if (stryMutAct_9fa48("15866")) {
            {}
          } else {
            stryCov_9fa48("15866");
            return;
          }
        }
        await module.pool.query(stryMutAct_9fa48("15867") ? {} : (stryCov_9fa48("15867"), {
          name: stryMutAct_9fa48("15868") ? "" : (stryCov_9fa48("15868"), 'setsRemove'),
          text: stryMutAct_9fa48("15869") ? `` : (stryCov_9fa48("15869"), `
DELETE FROM "legacy_set"
 WHERE "_key" = ANY($1::TEXT[])
   AND "member" = $2::TEXT`),
          values: stryMutAct_9fa48("15870") ? [] : (stryCov_9fa48("15870"), [keys, value])
        }));
      }
    };
    module.isSetMember = async function (key, value) {
      if (stryMutAct_9fa48("15871")) {
        {}
      } else {
        stryCov_9fa48("15871");
        if (stryMutAct_9fa48("15874") ? false : stryMutAct_9fa48("15873") ? true : stryMutAct_9fa48("15872") ? key : (stryCov_9fa48("15872", "15873", "15874"), !key)) {
          if (stryMutAct_9fa48("15875")) {
            {}
          } else {
            stryCov_9fa48("15875");
            return stryMutAct_9fa48("15876") ? true : (stryCov_9fa48("15876"), false);
          }
        }
        const res = await module.pool.query(stryMutAct_9fa48("15877") ? {} : (stryCov_9fa48("15877"), {
          name: stryMutAct_9fa48("15878") ? "" : (stryCov_9fa48("15878"), 'isSetMember'),
          text: stryMutAct_9fa48("15879") ? `` : (stryCov_9fa48("15879"), `
SELECT 1
  FROM "legacy_object_live" o
 INNER JOIN "legacy_set" s
    ON o."_key" = s."_key"
   AND o."type" = s."type"
 WHERE o."_key" = $1::TEXT
   AND s."member" = $2::TEXT`),
          values: stryMutAct_9fa48("15880") ? [] : (stryCov_9fa48("15880"), [key, value])
        }));
        return stryMutAct_9fa48("15881") ? !res.rows.length : (stryCov_9fa48("15881"), !(stryMutAct_9fa48("15882") ? res.rows.length : (stryCov_9fa48("15882"), !res.rows.length)));
      }
    };
    module.isSetMembers = async function (key, values) {
      if (stryMutAct_9fa48("15883")) {
        {}
      } else {
        stryCov_9fa48("15883");
        if (stryMutAct_9fa48("15886") ? (!key || !Array.isArray(values)) && !values.length : stryMutAct_9fa48("15885") ? false : stryMutAct_9fa48("15884") ? true : (stryCov_9fa48("15884", "15885", "15886"), (stryMutAct_9fa48("15888") ? !key && !Array.isArray(values) : stryMutAct_9fa48("15887") ? false : (stryCov_9fa48("15887", "15888"), (stryMutAct_9fa48("15889") ? key : (stryCov_9fa48("15889"), !key)) || (stryMutAct_9fa48("15890") ? Array.isArray(values) : (stryCov_9fa48("15890"), !Array.isArray(values))))) || (stryMutAct_9fa48("15891") ? values.length : (stryCov_9fa48("15891"), !values.length)))) {
          if (stryMutAct_9fa48("15892")) {
            {}
          } else {
            stryCov_9fa48("15892");
            return stryMutAct_9fa48("15893") ? ["Stryker was here"] : (stryCov_9fa48("15893"), []);
          }
        }
        values = values.map(helpers.valueToString);
        const res = await module.pool.query(stryMutAct_9fa48("15894") ? {} : (stryCov_9fa48("15894"), {
          name: stryMutAct_9fa48("15895") ? "" : (stryCov_9fa48("15895"), 'isSetMembers'),
          text: stryMutAct_9fa48("15896") ? `` : (stryCov_9fa48("15896"), `
SELECT s."member" m
  FROM "legacy_object_live" o
 INNER JOIN "legacy_set" s
         ON o."_key" = s."_key"
        AND o."type" = s."type"
 WHERE o."_key" = $1::TEXT
   AND s."member" = ANY($2::TEXT[])`),
          values: stryMutAct_9fa48("15897") ? [] : (stryCov_9fa48("15897"), [key, values])
        }));
        return values.map(stryMutAct_9fa48("15898") ? () => undefined : (stryCov_9fa48("15898"), v => stryMutAct_9fa48("15899") ? res.rows.every(r => r.m === v) : (stryCov_9fa48("15899"), res.rows.some(stryMutAct_9fa48("15900") ? () => undefined : (stryCov_9fa48("15900"), r => stryMutAct_9fa48("15903") ? r.m !== v : stryMutAct_9fa48("15902") ? false : stryMutAct_9fa48("15901") ? true : (stryCov_9fa48("15901", "15902", "15903"), r.m === v))))));
      }
    };
    module.isMemberOfSets = async function (sets, value) {
      if (stryMutAct_9fa48("15904")) {
        {}
      } else {
        stryCov_9fa48("15904");
        if (stryMutAct_9fa48("15907") ? !Array.isArray(sets) && !sets.length : stryMutAct_9fa48("15906") ? false : stryMutAct_9fa48("15905") ? true : (stryCov_9fa48("15905", "15906", "15907"), (stryMutAct_9fa48("15908") ? Array.isArray(sets) : (stryCov_9fa48("15908"), !Array.isArray(sets))) || (stryMutAct_9fa48("15909") ? sets.length : (stryCov_9fa48("15909"), !sets.length)))) {
          if (stryMutAct_9fa48("15910")) {
            {}
          } else {
            stryCov_9fa48("15910");
            return stryMutAct_9fa48("15911") ? ["Stryker was here"] : (stryCov_9fa48("15911"), []);
          }
        }
        value = helpers.valueToString(value);
        const res = await module.pool.query(stryMutAct_9fa48("15912") ? {} : (stryCov_9fa48("15912"), {
          name: stryMutAct_9fa48("15913") ? "" : (stryCov_9fa48("15913"), 'isMemberOfSets'),
          text: stryMutAct_9fa48("15914") ? `` : (stryCov_9fa48("15914"), `
SELECT o."_key" k
  FROM "legacy_object_live" o
 INNER JOIN "legacy_set" s
         ON o."_key" = s."_key"
        AND o."type" = s."type"
 WHERE o."_key" = ANY($1::TEXT[])
   AND s."member" = $2::TEXT`),
          values: stryMutAct_9fa48("15915") ? [] : (stryCov_9fa48("15915"), [sets, value])
        }));
        return sets.map(stryMutAct_9fa48("15916") ? () => undefined : (stryCov_9fa48("15916"), s => stryMutAct_9fa48("15917") ? res.rows.every(r => r.k === s) : (stryCov_9fa48("15917"), res.rows.some(stryMutAct_9fa48("15918") ? () => undefined : (stryCov_9fa48("15918"), r => stryMutAct_9fa48("15921") ? r.k !== s : stryMutAct_9fa48("15920") ? false : stryMutAct_9fa48("15919") ? true : (stryCov_9fa48("15919", "15920", "15921"), r.k === s))))));
      }
    };
    module.getSetMembers = async function (key) {
      if (stryMutAct_9fa48("15922")) {
        {}
      } else {
        stryCov_9fa48("15922");
        if (stryMutAct_9fa48("15925") ? false : stryMutAct_9fa48("15924") ? true : stryMutAct_9fa48("15923") ? key : (stryCov_9fa48("15923", "15924", "15925"), !key)) {
          if (stryMutAct_9fa48("15926")) {
            {}
          } else {
            stryCov_9fa48("15926");
            return stryMutAct_9fa48("15927") ? ["Stryker was here"] : (stryCov_9fa48("15927"), []);
          }
        }
        const res = await module.pool.query(stryMutAct_9fa48("15928") ? {} : (stryCov_9fa48("15928"), {
          name: stryMutAct_9fa48("15929") ? "" : (stryCov_9fa48("15929"), 'getSetMembers'),
          text: stryMutAct_9fa48("15930") ? `` : (stryCov_9fa48("15930"), `
SELECT s."member" m
  FROM "legacy_object_live" o
 INNER JOIN "legacy_set" s
         ON o."_key" = s."_key"
        AND o."type" = s."type"
 WHERE o."_key" = $1::TEXT`),
          values: stryMutAct_9fa48("15931") ? [] : (stryCov_9fa48("15931"), [key])
        }));
        return res.rows.map(stryMutAct_9fa48("15932") ? () => undefined : (stryCov_9fa48("15932"), r => r.m));
      }
    };
    module.getSetsMembers = async function (keys) {
      if (stryMutAct_9fa48("15933")) {
        {}
      } else {
        stryCov_9fa48("15933");
        if (stryMutAct_9fa48("15936") ? !Array.isArray(keys) && !keys.length : stryMutAct_9fa48("15935") ? false : stryMutAct_9fa48("15934") ? true : (stryCov_9fa48("15934", "15935", "15936"), (stryMutAct_9fa48("15937") ? Array.isArray(keys) : (stryCov_9fa48("15937"), !Array.isArray(keys))) || (stryMutAct_9fa48("15938") ? keys.length : (stryCov_9fa48("15938"), !keys.length)))) {
          if (stryMutAct_9fa48("15939")) {
            {}
          } else {
            stryCov_9fa48("15939");
            return stryMutAct_9fa48("15940") ? ["Stryker was here"] : (stryCov_9fa48("15940"), []);
          }
        }
        const res = await module.pool.query(stryMutAct_9fa48("15941") ? {} : (stryCov_9fa48("15941"), {
          name: stryMutAct_9fa48("15942") ? "" : (stryCov_9fa48("15942"), 'getSetsMembers'),
          text: stryMutAct_9fa48("15943") ? `` : (stryCov_9fa48("15943"), `
SELECT o."_key" k,
       array_agg(s."member") m
  FROM "legacy_object_live" o
 INNER JOIN "legacy_set" s
         ON o."_key" = s."_key"
        AND o."type" = s."type"
 WHERE o."_key" = ANY($1::TEXT[])
 GROUP BY o."_key"`),
          values: stryMutAct_9fa48("15944") ? [] : (stryCov_9fa48("15944"), [keys])
        }));
        return keys.map(stryMutAct_9fa48("15945") ? () => undefined : (stryCov_9fa48("15945"), k => (stryMutAct_9fa48("15948") ? res.rows.find(r => r.k === k) && {
          m: []
        } : stryMutAct_9fa48("15947") ? false : stryMutAct_9fa48("15946") ? true : (stryCov_9fa48("15946", "15947", "15948"), res.rows.find(stryMutAct_9fa48("15949") ? () => undefined : (stryCov_9fa48("15949"), r => stryMutAct_9fa48("15952") ? r.k !== k : stryMutAct_9fa48("15951") ? false : stryMutAct_9fa48("15950") ? true : (stryCov_9fa48("15950", "15951", "15952"), r.k === k))) || (stryMutAct_9fa48("15953") ? {} : (stryCov_9fa48("15953"), {
          m: stryMutAct_9fa48("15954") ? ["Stryker was here"] : (stryCov_9fa48("15954"), [])
        })))).m));
      }
    };
    module.setCount = async function (key) {
      if (stryMutAct_9fa48("15955")) {
        {}
      } else {
        stryCov_9fa48("15955");
        if (stryMutAct_9fa48("15958") ? false : stryMutAct_9fa48("15957") ? true : stryMutAct_9fa48("15956") ? key : (stryCov_9fa48("15956", "15957", "15958"), !key)) {
          if (stryMutAct_9fa48("15959")) {
            {}
          } else {
            stryCov_9fa48("15959");
            return 0;
          }
        }
        const res = await module.pool.query(stryMutAct_9fa48("15960") ? {} : (stryCov_9fa48("15960"), {
          name: stryMutAct_9fa48("15961") ? "" : (stryCov_9fa48("15961"), 'setCount'),
          text: stryMutAct_9fa48("15962") ? `` : (stryCov_9fa48("15962"), `
SELECT COUNT(*) c
  FROM "legacy_object_live" o
 INNER JOIN "legacy_set" s
         ON o."_key" = s."_key"
        AND o."type" = s."type"
 WHERE o."_key" = $1::TEXT`),
          values: stryMutAct_9fa48("15963") ? [] : (stryCov_9fa48("15963"), [key])
        }));
        return parseInt(res.rows[0].c, 10);
      }
    };
    module.setsCount = async function (keys) {
      if (stryMutAct_9fa48("15964")) {
        {}
      } else {
        stryCov_9fa48("15964");
        const res = await module.pool.query(stryMutAct_9fa48("15965") ? {} : (stryCov_9fa48("15965"), {
          name: stryMutAct_9fa48("15966") ? "" : (stryCov_9fa48("15966"), 'setsCount'),
          text: stryMutAct_9fa48("15967") ? `` : (stryCov_9fa48("15967"), `
SELECT o."_key" k,
       COUNT(*) c
  FROM "legacy_object_live" o
 INNER JOIN "legacy_set" s
         ON o."_key" = s."_key"
        AND o."type" = s."type"
 WHERE o."_key" = ANY($1::TEXT[])
 GROUP BY o."_key"`),
          values: stryMutAct_9fa48("15968") ? [] : (stryCov_9fa48("15968"), [keys])
        }));
        return keys.map(stryMutAct_9fa48("15969") ? () => undefined : (stryCov_9fa48("15969"), k => (stryMutAct_9fa48("15972") ? res.rows.find(r => r.k === k) && {
          c: 0
        } : stryMutAct_9fa48("15971") ? false : stryMutAct_9fa48("15970") ? true : (stryCov_9fa48("15970", "15971", "15972"), res.rows.find(stryMutAct_9fa48("15973") ? () => undefined : (stryCov_9fa48("15973"), r => stryMutAct_9fa48("15976") ? r.k !== k : stryMutAct_9fa48("15975") ? false : stryMutAct_9fa48("15974") ? true : (stryCov_9fa48("15974", "15975", "15976"), r.k === k))) || (stryMutAct_9fa48("15977") ? {} : (stryCov_9fa48("15977"), {
          c: 0
        })))).c));
      }
    };
    module.setRemoveRandom = async function (key) {
      if (stryMutAct_9fa48("15978")) {
        {}
      } else {
        stryCov_9fa48("15978");
        const res = await module.pool.query(stryMutAct_9fa48("15979") ? {} : (stryCov_9fa48("15979"), {
          name: stryMutAct_9fa48("15980") ? "" : (stryCov_9fa48("15980"), 'setRemoveRandom'),
          text: stryMutAct_9fa48("15981") ? `` : (stryCov_9fa48("15981"), `
WITH A AS (
    SELECT s."member"
      FROM "legacy_object_live" o
     INNER JOIN "legacy_set" s
             ON o."_key" = s."_key"
            AND o."type" = s."type"
     WHERE o."_key" = $1::TEXT
     ORDER BY RANDOM()
     LIMIT 1
       FOR UPDATE)
DELETE FROM "legacy_set" s
 USING A
 WHERE s."_key" = $1::TEXT
   AND s."member" = A."member"
RETURNING A."member" m`),
          values: stryMutAct_9fa48("15982") ? [] : (stryCov_9fa48("15982"), [key])
        }));
        return res.rows.length ? res.rows[0].m : null;
      }
    };
  }
};