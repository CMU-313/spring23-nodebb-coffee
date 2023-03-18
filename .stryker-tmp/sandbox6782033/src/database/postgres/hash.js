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
  if (stryMutAct_9fa48("15234")) {
    {}
  } else {
    stryCov_9fa48("15234");
    const helpers = require('./helpers');
    module.setObject = async function (key, data) {
      if (stryMutAct_9fa48("15235")) {
        {}
      } else {
        stryCov_9fa48("15235");
        if (stryMutAct_9fa48("15238") ? !key && !data : stryMutAct_9fa48("15237") ? false : stryMutAct_9fa48("15236") ? true : (stryCov_9fa48("15236", "15237", "15238"), (stryMutAct_9fa48("15239") ? key : (stryCov_9fa48("15239"), !key)) || (stryMutAct_9fa48("15240") ? data : (stryCov_9fa48("15240"), !data)))) {
          if (stryMutAct_9fa48("15241")) {
            {}
          } else {
            stryCov_9fa48("15241");
            return;
          }
        }
        if (stryMutAct_9fa48("15243") ? false : stryMutAct_9fa48("15242") ? true : (stryCov_9fa48("15242", "15243"), data.hasOwnProperty(stryMutAct_9fa48("15244") ? "Stryker was here!" : (stryCov_9fa48("15244"), '')))) {
          if (stryMutAct_9fa48("15245")) {
            {}
          } else {
            stryCov_9fa48("15245");
            delete data[stryMutAct_9fa48("15246") ? "Stryker was here!" : (stryCov_9fa48("15246"), '')];
          }
        }
        if (stryMutAct_9fa48("15249") ? false : stryMutAct_9fa48("15248") ? true : stryMutAct_9fa48("15247") ? Object.keys(data).length : (stryCov_9fa48("15247", "15248", "15249"), !Object.keys(data).length)) {
          if (stryMutAct_9fa48("15250")) {
            {}
          } else {
            stryCov_9fa48("15250");
            return;
          }
        }
        await module.transaction(async client => {
          if (stryMutAct_9fa48("15251")) {
            {}
          } else {
            stryCov_9fa48("15251");
            const dataString = JSON.stringify(data);
            if (stryMutAct_9fa48("15253") ? false : stryMutAct_9fa48("15252") ? true : (stryCov_9fa48("15252", "15253"), Array.isArray(key))) {
              if (stryMutAct_9fa48("15254")) {
                {}
              } else {
                stryCov_9fa48("15254");
                await helpers.ensureLegacyObjectsType(client, key, stryMutAct_9fa48("15255") ? "" : (stryCov_9fa48("15255"), 'hash'));
                await client.query(stryMutAct_9fa48("15256") ? {} : (stryCov_9fa48("15256"), {
                  name: stryMutAct_9fa48("15257") ? "" : (stryCov_9fa48("15257"), 'setObjectKeys'),
                  text: stryMutAct_9fa48("15258") ? `` : (stryCov_9fa48("15258"), `
    INSERT INTO "legacy_hash" ("_key", "data")
    SELECT k, $2::TEXT::JSONB
    FROM UNNEST($1::TEXT[]) vs(k)
    ON CONFLICT ("_key")
    DO UPDATE SET "data" = "legacy_hash"."data" || $2::TEXT::JSONB`),
                  values: stryMutAct_9fa48("15259") ? [] : (stryCov_9fa48("15259"), [key, dataString])
                }));
              }
            } else {
              if (stryMutAct_9fa48("15260")) {
                {}
              } else {
                stryCov_9fa48("15260");
                await helpers.ensureLegacyObjectType(client, key, stryMutAct_9fa48("15261") ? "" : (stryCov_9fa48("15261"), 'hash'));
                await client.query(stryMutAct_9fa48("15262") ? {} : (stryCov_9fa48("15262"), {
                  name: stryMutAct_9fa48("15263") ? "" : (stryCov_9fa48("15263"), 'setObject'),
                  text: stryMutAct_9fa48("15264") ? `` : (stryCov_9fa48("15264"), `
    INSERT INTO "legacy_hash" ("_key", "data")
    VALUES ($1::TEXT, $2::TEXT::JSONB)
    ON CONFLICT ("_key")
    DO UPDATE SET "data" = "legacy_hash"."data" || $2::TEXT::JSONB`),
                  values: stryMutAct_9fa48("15265") ? [] : (stryCov_9fa48("15265"), [key, dataString])
                }));
              }
            }
          }
        });
      }
    };
    module.setObjectBulk = async function (...args) {
      if (stryMutAct_9fa48("15266")) {
        {}
      } else {
        stryCov_9fa48("15266");
        let data = args[0];
        if (stryMutAct_9fa48("15269") ? !Array.isArray(data) && !data.length : stryMutAct_9fa48("15268") ? false : stryMutAct_9fa48("15267") ? true : (stryCov_9fa48("15267", "15268", "15269"), (stryMutAct_9fa48("15270") ? Array.isArray(data) : (stryCov_9fa48("15270"), !Array.isArray(data))) || (stryMutAct_9fa48("15271") ? data.length : (stryCov_9fa48("15271"), !data.length)))) {
          if (stryMutAct_9fa48("15272")) {
            {}
          } else {
            stryCov_9fa48("15272");
            return;
          }
        }
        if (stryMutAct_9fa48("15274") ? false : stryMutAct_9fa48("15273") ? true : (stryCov_9fa48("15273", "15274"), Array.isArray(args[1]))) {
          if (stryMutAct_9fa48("15275")) {
            {}
          } else {
            stryCov_9fa48("15275");
            console.warn(stryMutAct_9fa48("15276") ? "" : (stryCov_9fa48("15276"), '[deprecated] db.setObjectBulk(keys, data) usage is deprecated, please use db.setObjectBulk(data)'));
            // conver old format to new format for backwards compatibility
            data = args[0].map(stryMutAct_9fa48("15277") ? () => undefined : (stryCov_9fa48("15277"), (key, i) => stryMutAct_9fa48("15278") ? [] : (stryCov_9fa48("15278"), [key, args[1][i]])));
          }
        }
        await module.transaction(async client => {
          if (stryMutAct_9fa48("15279")) {
            {}
          } else {
            stryCov_9fa48("15279");
            data = stryMutAct_9fa48("15280") ? data : (stryCov_9fa48("15280"), data.filter(item => {
              if (stryMutAct_9fa48("15281")) {
                {}
              } else {
                stryCov_9fa48("15281");
                if (stryMutAct_9fa48("15283") ? false : stryMutAct_9fa48("15282") ? true : (stryCov_9fa48("15282", "15283"), item[1].hasOwnProperty(stryMutAct_9fa48("15284") ? "Stryker was here!" : (stryCov_9fa48("15284"), '')))) {
                  if (stryMutAct_9fa48("15285")) {
                    {}
                  } else {
                    stryCov_9fa48("15285");
                    delete item[1][stryMutAct_9fa48("15286") ? "Stryker was here!" : (stryCov_9fa48("15286"), '')];
                  }
                }
                return stryMutAct_9fa48("15287") ? !Object.keys(item[1]).length : (stryCov_9fa48("15287"), !(stryMutAct_9fa48("15288") ? Object.keys(item[1]).length : (stryCov_9fa48("15288"), !Object.keys(item[1]).length)));
              }
            }));
            const keys = data.map(stryMutAct_9fa48("15289") ? () => undefined : (stryCov_9fa48("15289"), item => item[0]));
            if (stryMutAct_9fa48("15292") ? false : stryMutAct_9fa48("15291") ? true : stryMutAct_9fa48("15290") ? keys.length : (stryCov_9fa48("15290", "15291", "15292"), !keys.length)) {
              if (stryMutAct_9fa48("15293")) {
                {}
              } else {
                stryCov_9fa48("15293");
                return;
              }
            }
            await helpers.ensureLegacyObjectsType(client, keys, stryMutAct_9fa48("15294") ? "" : (stryCov_9fa48("15294"), 'hash'));
            const dataStrings = data.map(stryMutAct_9fa48("15295") ? () => undefined : (stryCov_9fa48("15295"), item => JSON.stringify(item[1])));
            await client.query(stryMutAct_9fa48("15296") ? {} : (stryCov_9fa48("15296"), {
              name: stryMutAct_9fa48("15297") ? "" : (stryCov_9fa48("15297"), 'setObjectBulk'),
              text: stryMutAct_9fa48("15298") ? `` : (stryCov_9fa48("15298"), `
            INSERT INTO "legacy_hash" ("_key", "data")
            SELECT k, d
            FROM UNNEST($1::TEXT[], $2::TEXT::JSONB[]) vs(k, d)
            ON CONFLICT ("_key")
            DO UPDATE SET "data" = "legacy_hash"."data" || EXCLUDED.data`),
              values: stryMutAct_9fa48("15299") ? [] : (stryCov_9fa48("15299"), [keys, dataStrings])
            }));
          }
        });
      }
    };
    module.setObjectField = async function (key, field, value) {
      if (stryMutAct_9fa48("15300")) {
        {}
      } else {
        stryCov_9fa48("15300");
        if (stryMutAct_9fa48("15303") ? false : stryMutAct_9fa48("15302") ? true : stryMutAct_9fa48("15301") ? field : (stryCov_9fa48("15301", "15302", "15303"), !field)) {
          if (stryMutAct_9fa48("15304")) {
            {}
          } else {
            stryCov_9fa48("15304");
            return;
          }
        }
        await module.transaction(async client => {
          if (stryMutAct_9fa48("15305")) {
            {}
          } else {
            stryCov_9fa48("15305");
            const valueString = JSON.stringify(value);
            if (stryMutAct_9fa48("15307") ? false : stryMutAct_9fa48("15306") ? true : (stryCov_9fa48("15306", "15307"), Array.isArray(key))) {
              if (stryMutAct_9fa48("15308")) {
                {}
              } else {
                stryCov_9fa48("15308");
                await module.setObject(key, stryMutAct_9fa48("15309") ? {} : (stryCov_9fa48("15309"), {
                  [field]: value
                }));
              }
            } else {
              if (stryMutAct_9fa48("15310")) {
                {}
              } else {
                stryCov_9fa48("15310");
                await helpers.ensureLegacyObjectType(client, key, stryMutAct_9fa48("15311") ? "" : (stryCov_9fa48("15311"), 'hash'));
                await client.query(stryMutAct_9fa48("15312") ? {} : (stryCov_9fa48("15312"), {
                  name: stryMutAct_9fa48("15313") ? "" : (stryCov_9fa48("15313"), 'setObjectField'),
                  text: stryMutAct_9fa48("15314") ? `` : (stryCov_9fa48("15314"), `
    INSERT INTO "legacy_hash" ("_key", "data")
    VALUES ($1::TEXT, jsonb_build_object($2::TEXT, $3::TEXT::JSONB))
    ON CONFLICT ("_key")
    DO UPDATE SET "data" = jsonb_set("legacy_hash"."data", ARRAY[$2::TEXT], $3::TEXT::JSONB)`),
                  values: stryMutAct_9fa48("15315") ? [] : (stryCov_9fa48("15315"), [key, field, valueString])
                }));
              }
            }
          }
        });
      }
    };
    module.getObject = async function (key, fields = stryMutAct_9fa48("15316") ? ["Stryker was here"] : (stryCov_9fa48("15316"), [])) {
      if (stryMutAct_9fa48("15317")) {
        {}
      } else {
        stryCov_9fa48("15317");
        if (stryMutAct_9fa48("15320") ? false : stryMutAct_9fa48("15319") ? true : stryMutAct_9fa48("15318") ? key : (stryCov_9fa48("15318", "15319", "15320"), !key)) {
          if (stryMutAct_9fa48("15321")) {
            {}
          } else {
            stryCov_9fa48("15321");
            return null;
          }
        }
        if (stryMutAct_9fa48("15323") ? false : stryMutAct_9fa48("15322") ? true : (stryCov_9fa48("15322", "15323"), fields.length)) {
          if (stryMutAct_9fa48("15324")) {
            {}
          } else {
            stryCov_9fa48("15324");
            return await module.getObjectFields(key, fields);
          }
        }
        const res = await module.pool.query(stryMutAct_9fa48("15325") ? {} : (stryCov_9fa48("15325"), {
          name: stryMutAct_9fa48("15326") ? "" : (stryCov_9fa48("15326"), 'getObject'),
          text: stryMutAct_9fa48("15327") ? `` : (stryCov_9fa48("15327"), `
SELECT h."data"
  FROM "legacy_object_live" o
 INNER JOIN "legacy_hash" h
         ON o."_key" = h."_key"
        AND o."type" = h."type"
 WHERE o."_key" = $1::TEXT
 LIMIT 1`),
          values: stryMutAct_9fa48("15328") ? [] : (stryCov_9fa48("15328"), [key])
        }));
        return res.rows.length ? res.rows[0].data : null;
      }
    };
    module.getObjects = async function (keys, fields = stryMutAct_9fa48("15329") ? ["Stryker was here"] : (stryCov_9fa48("15329"), [])) {
      if (stryMutAct_9fa48("15330")) {
        {}
      } else {
        stryCov_9fa48("15330");
        if (stryMutAct_9fa48("15333") ? !Array.isArray(keys) && !keys.length : stryMutAct_9fa48("15332") ? false : stryMutAct_9fa48("15331") ? true : (stryCov_9fa48("15331", "15332", "15333"), (stryMutAct_9fa48("15334") ? Array.isArray(keys) : (stryCov_9fa48("15334"), !Array.isArray(keys))) || (stryMutAct_9fa48("15335") ? keys.length : (stryCov_9fa48("15335"), !keys.length)))) {
          if (stryMutAct_9fa48("15336")) {
            {}
          } else {
            stryCov_9fa48("15336");
            return stryMutAct_9fa48("15337") ? ["Stryker was here"] : (stryCov_9fa48("15337"), []);
          }
        }
        if (stryMutAct_9fa48("15339") ? false : stryMutAct_9fa48("15338") ? true : (stryCov_9fa48("15338", "15339"), fields.length)) {
          if (stryMutAct_9fa48("15340")) {
            {}
          } else {
            stryCov_9fa48("15340");
            return await module.getObjectsFields(keys, fields);
          }
        }
        const res = await module.pool.query(stryMutAct_9fa48("15341") ? {} : (stryCov_9fa48("15341"), {
          name: stryMutAct_9fa48("15342") ? "" : (stryCov_9fa48("15342"), 'getObjects'),
          text: stryMutAct_9fa48("15343") ? `` : (stryCov_9fa48("15343"), `
SELECT h."data"
  FROM UNNEST($1::TEXT[]) WITH ORDINALITY k("_key", i)
  LEFT OUTER JOIN "legacy_object_live" o
               ON o."_key" = k."_key"
  LEFT OUTER JOIN "legacy_hash" h
               ON o."_key" = h."_key"
              AND o."type" = h."type"
 ORDER BY k.i ASC`),
          values: stryMutAct_9fa48("15344") ? [] : (stryCov_9fa48("15344"), [keys])
        }));
        return res.rows.map(stryMutAct_9fa48("15345") ? () => undefined : (stryCov_9fa48("15345"), row => row.data));
      }
    };
    module.getObjectField = async function (key, field) {
      if (stryMutAct_9fa48("15346")) {
        {}
      } else {
        stryCov_9fa48("15346");
        if (stryMutAct_9fa48("15349") ? false : stryMutAct_9fa48("15348") ? true : stryMutAct_9fa48("15347") ? key : (stryCov_9fa48("15347", "15348", "15349"), !key)) {
          if (stryMutAct_9fa48("15350")) {
            {}
          } else {
            stryCov_9fa48("15350");
            return null;
          }
        }
        const res = await module.pool.query(stryMutAct_9fa48("15351") ? {} : (stryCov_9fa48("15351"), {
          name: stryMutAct_9fa48("15352") ? "" : (stryCov_9fa48("15352"), 'getObjectField'),
          text: stryMutAct_9fa48("15353") ? `` : (stryCov_9fa48("15353"), `
SELECT h."data"->>$2::TEXT f
  FROM "legacy_object_live" o
 INNER JOIN "legacy_hash" h
         ON o."_key" = h."_key"
        AND o."type" = h."type"
 WHERE o."_key" = $1::TEXT
 LIMIT 1`),
          values: stryMutAct_9fa48("15354") ? [] : (stryCov_9fa48("15354"), [key, field])
        }));
        return res.rows.length ? res.rows[0].f : null;
      }
    };
    module.getObjectFields = async function (key, fields) {
      if (stryMutAct_9fa48("15355")) {
        {}
      } else {
        stryCov_9fa48("15355");
        if (stryMutAct_9fa48("15358") ? false : stryMutAct_9fa48("15357") ? true : stryMutAct_9fa48("15356") ? key : (stryCov_9fa48("15356", "15357", "15358"), !key)) {
          if (stryMutAct_9fa48("15359")) {
            {}
          } else {
            stryCov_9fa48("15359");
            return null;
          }
        }
        if (stryMutAct_9fa48("15362") ? !Array.isArray(fields) && !fields.length : stryMutAct_9fa48("15361") ? false : stryMutAct_9fa48("15360") ? true : (stryCov_9fa48("15360", "15361", "15362"), (stryMutAct_9fa48("15363") ? Array.isArray(fields) : (stryCov_9fa48("15363"), !Array.isArray(fields))) || (stryMutAct_9fa48("15364") ? fields.length : (stryCov_9fa48("15364"), !fields.length)))) {
          if (stryMutAct_9fa48("15365")) {
            {}
          } else {
            stryCov_9fa48("15365");
            return await module.getObject(key);
          }
        }
        const res = await module.pool.query(stryMutAct_9fa48("15366") ? {} : (stryCov_9fa48("15366"), {
          name: stryMutAct_9fa48("15367") ? "" : (stryCov_9fa48("15367"), 'getObjectFields'),
          text: stryMutAct_9fa48("15368") ? `` : (stryCov_9fa48("15368"), `
SELECT (SELECT jsonb_object_agg(f, d."value")
          FROM UNNEST($2::TEXT[]) f
          LEFT OUTER JOIN jsonb_each(h."data") d
                       ON d."key" = f) d
  FROM "legacy_object_live" o
 INNER JOIN "legacy_hash" h
         ON o."_key" = h."_key"
        AND o."type" = h."type"
 WHERE o."_key" = $1::TEXT`),
          values: stryMutAct_9fa48("15369") ? [] : (stryCov_9fa48("15369"), [key, fields])
        }));
        if (stryMutAct_9fa48("15371") ? false : stryMutAct_9fa48("15370") ? true : (stryCov_9fa48("15370", "15371"), res.rows.length)) {
          if (stryMutAct_9fa48("15372")) {
            {}
          } else {
            stryCov_9fa48("15372");
            return res.rows[0].d;
          }
        }
        const obj = {};
        fields.forEach(f => {
          if (stryMutAct_9fa48("15373")) {
            {}
          } else {
            stryCov_9fa48("15373");
            obj[f] = null;
          }
        });
        return obj;
      }
    };
    module.getObjectsFields = async function (keys, fields) {
      if (stryMutAct_9fa48("15374")) {
        {}
      } else {
        stryCov_9fa48("15374");
        if (stryMutAct_9fa48("15377") ? !Array.isArray(keys) && !keys.length : stryMutAct_9fa48("15376") ? false : stryMutAct_9fa48("15375") ? true : (stryCov_9fa48("15375", "15376", "15377"), (stryMutAct_9fa48("15378") ? Array.isArray(keys) : (stryCov_9fa48("15378"), !Array.isArray(keys))) || (stryMutAct_9fa48("15379") ? keys.length : (stryCov_9fa48("15379"), !keys.length)))) {
          if (stryMutAct_9fa48("15380")) {
            {}
          } else {
            stryCov_9fa48("15380");
            return stryMutAct_9fa48("15381") ? ["Stryker was here"] : (stryCov_9fa48("15381"), []);
          }
        }
        if (stryMutAct_9fa48("15384") ? !Array.isArray(fields) && !fields.length : stryMutAct_9fa48("15383") ? false : stryMutAct_9fa48("15382") ? true : (stryCov_9fa48("15382", "15383", "15384"), (stryMutAct_9fa48("15385") ? Array.isArray(fields) : (stryCov_9fa48("15385"), !Array.isArray(fields))) || (stryMutAct_9fa48("15386") ? fields.length : (stryCov_9fa48("15386"), !fields.length)))) {
          if (stryMutAct_9fa48("15387")) {
            {}
          } else {
            stryCov_9fa48("15387");
            return await module.getObjects(keys);
          }
        }
        const res = await module.pool.query(stryMutAct_9fa48("15388") ? {} : (stryCov_9fa48("15388"), {
          name: stryMutAct_9fa48("15389") ? "" : (stryCov_9fa48("15389"), 'getObjectsFields'),
          text: stryMutAct_9fa48("15390") ? `` : (stryCov_9fa48("15390"), `
SELECT (SELECT jsonb_object_agg(f, d."value")
          FROM UNNEST($2::TEXT[]) f
          LEFT OUTER JOIN jsonb_each(h."data") d
                       ON d."key" = f) d
  FROM UNNEST($1::text[]) WITH ORDINALITY k("_key", i)
  LEFT OUTER JOIN "legacy_object_live" o
               ON o."_key" = k."_key"
  LEFT OUTER JOIN "legacy_hash" h
               ON o."_key" = h."_key"
              AND o."type" = h."type"
 ORDER BY k.i ASC`),
          values: stryMutAct_9fa48("15391") ? [] : (stryCov_9fa48("15391"), [keys, fields])
        }));
        return res.rows.map(stryMutAct_9fa48("15392") ? () => undefined : (stryCov_9fa48("15392"), row => row.d));
      }
    };
    module.getObjectKeys = async function (key) {
      if (stryMutAct_9fa48("15393")) {
        {}
      } else {
        stryCov_9fa48("15393");
        if (stryMutAct_9fa48("15396") ? false : stryMutAct_9fa48("15395") ? true : stryMutAct_9fa48("15394") ? key : (stryCov_9fa48("15394", "15395", "15396"), !key)) {
          if (stryMutAct_9fa48("15397")) {
            {}
          } else {
            stryCov_9fa48("15397");
            return;
          }
        }
        const res = await module.pool.query(stryMutAct_9fa48("15398") ? {} : (stryCov_9fa48("15398"), {
          name: stryMutAct_9fa48("15399") ? "" : (stryCov_9fa48("15399"), 'getObjectKeys'),
          text: stryMutAct_9fa48("15400") ? `` : (stryCov_9fa48("15400"), `
SELECT ARRAY(SELECT jsonb_object_keys(h."data")) k
  FROM "legacy_object_live" o
 INNER JOIN "legacy_hash" h
         ON o."_key" = h."_key"
        AND o."type" = h."type"
 WHERE o."_key" = $1::TEXT
 LIMIT 1`),
          values: stryMutAct_9fa48("15401") ? [] : (stryCov_9fa48("15401"), [key])
        }));
        return res.rows.length ? res.rows[0].k : stryMutAct_9fa48("15402") ? ["Stryker was here"] : (stryCov_9fa48("15402"), []);
      }
    };
    module.getObjectValues = async function (key) {
      if (stryMutAct_9fa48("15403")) {
        {}
      } else {
        stryCov_9fa48("15403");
        const data = await module.getObject(key);
        return data ? Object.values(data) : stryMutAct_9fa48("15404") ? ["Stryker was here"] : (stryCov_9fa48("15404"), []);
      }
    };
    module.isObjectField = async function (key, field) {
      if (stryMutAct_9fa48("15405")) {
        {}
      } else {
        stryCov_9fa48("15405");
        if (stryMutAct_9fa48("15408") ? false : stryMutAct_9fa48("15407") ? true : stryMutAct_9fa48("15406") ? key : (stryCov_9fa48("15406", "15407", "15408"), !key)) {
          if (stryMutAct_9fa48("15409")) {
            {}
          } else {
            stryCov_9fa48("15409");
            return;
          }
        }
        const res = await module.pool.query(stryMutAct_9fa48("15410") ? {} : (stryCov_9fa48("15410"), {
          name: stryMutAct_9fa48("15411") ? "" : (stryCov_9fa48("15411"), 'isObjectField'),
          text: stryMutAct_9fa48("15412") ? `` : (stryCov_9fa48("15412"), `
SELECT (h."data" ? $2::TEXT AND h."data"->>$2::TEXT IS NOT NULL) b
  FROM "legacy_object_live" o
 INNER JOIN "legacy_hash" h
         ON o."_key" = h."_key"
        AND o."type" = h."type"
 WHERE o."_key" = $1::TEXT
 LIMIT 1`),
          values: stryMutAct_9fa48("15413") ? [] : (stryCov_9fa48("15413"), [key, field])
        }));
        return res.rows.length ? res.rows[0].b : stryMutAct_9fa48("15414") ? true : (stryCov_9fa48("15414"), false);
      }
    };
    module.isObjectFields = async function (key, fields) {
      if (stryMutAct_9fa48("15415")) {
        {}
      } else {
        stryCov_9fa48("15415");
        if (stryMutAct_9fa48("15418") ? false : stryMutAct_9fa48("15417") ? true : stryMutAct_9fa48("15416") ? key : (stryCov_9fa48("15416", "15417", "15418"), !key)) {
          if (stryMutAct_9fa48("15419")) {
            {}
          } else {
            stryCov_9fa48("15419");
            return;
          }
        }
        const data = await module.getObjectFields(key, fields);
        if (stryMutAct_9fa48("15422") ? false : stryMutAct_9fa48("15421") ? true : stryMutAct_9fa48("15420") ? data : (stryCov_9fa48("15420", "15421", "15422"), !data)) {
          if (stryMutAct_9fa48("15423")) {
            {}
          } else {
            stryCov_9fa48("15423");
            return fields.map(stryMutAct_9fa48("15424") ? () => undefined : (stryCov_9fa48("15424"), () => stryMutAct_9fa48("15425") ? true : (stryCov_9fa48("15425"), false)));
          }
        }
        return fields.map(stryMutAct_9fa48("15426") ? () => undefined : (stryCov_9fa48("15426"), field => stryMutAct_9fa48("15429") ? data.hasOwnProperty(field) || data[field] !== null : stryMutAct_9fa48("15428") ? false : stryMutAct_9fa48("15427") ? true : (stryCov_9fa48("15427", "15428", "15429"), data.hasOwnProperty(field) && (stryMutAct_9fa48("15431") ? data[field] === null : stryMutAct_9fa48("15430") ? true : (stryCov_9fa48("15430", "15431"), data[field] !== null)))));
      }
    };
    module.deleteObjectField = async function (key, field) {
      if (stryMutAct_9fa48("15432")) {
        {}
      } else {
        stryCov_9fa48("15432");
        await module.deleteObjectFields(key, stryMutAct_9fa48("15433") ? [] : (stryCov_9fa48("15433"), [field]));
      }
    };
    module.deleteObjectFields = async function (key, fields) {
      if (stryMutAct_9fa48("15434")) {
        {}
      } else {
        stryCov_9fa48("15434");
        if (stryMutAct_9fa48("15437") ? (!key || Array.isArray(key) && !key.length || !Array.isArray(fields)) && !fields.length : stryMutAct_9fa48("15436") ? false : stryMutAct_9fa48("15435") ? true : (stryCov_9fa48("15435", "15436", "15437"), (stryMutAct_9fa48("15439") ? (!key || Array.isArray(key) && !key.length) && !Array.isArray(fields) : stryMutAct_9fa48("15438") ? false : (stryCov_9fa48("15438", "15439"), (stryMutAct_9fa48("15441") ? !key && Array.isArray(key) && !key.length : stryMutAct_9fa48("15440") ? false : (stryCov_9fa48("15440", "15441"), (stryMutAct_9fa48("15442") ? key : (stryCov_9fa48("15442"), !key)) || (stryMutAct_9fa48("15444") ? Array.isArray(key) || !key.length : stryMutAct_9fa48("15443") ? false : (stryCov_9fa48("15443", "15444"), Array.isArray(key) && (stryMutAct_9fa48("15445") ? key.length : (stryCov_9fa48("15445"), !key.length)))))) || (stryMutAct_9fa48("15446") ? Array.isArray(fields) : (stryCov_9fa48("15446"), !Array.isArray(fields))))) || (stryMutAct_9fa48("15447") ? fields.length : (stryCov_9fa48("15447"), !fields.length)))) {
          if (stryMutAct_9fa48("15448")) {
            {}
          } else {
            stryCov_9fa48("15448");
            return;
          }
        }
        if (stryMutAct_9fa48("15450") ? false : stryMutAct_9fa48("15449") ? true : (stryCov_9fa48("15449", "15450"), Array.isArray(key))) {
          if (stryMutAct_9fa48("15451")) {
            {}
          } else {
            stryCov_9fa48("15451");
            await module.pool.query(stryMutAct_9fa48("15452") ? {} : (stryCov_9fa48("15452"), {
              name: stryMutAct_9fa48("15453") ? "" : (stryCov_9fa48("15453"), 'deleteObjectFieldsKeys'),
              text: stryMutAct_9fa48("15454") ? `` : (stryCov_9fa48("15454"), `
    UPDATE "legacy_hash"
       SET "data" = COALESCE((SELECT jsonb_object_agg("key", "value")
                                FROM jsonb_each("data")
                               WHERE "key" <> ALL ($2::TEXT[])), '{}')
     WHERE "_key" = ANY($1::TEXT[])`),
              values: stryMutAct_9fa48("15455") ? [] : (stryCov_9fa48("15455"), [key, fields])
            }));
          }
        } else {
          if (stryMutAct_9fa48("15456")) {
            {}
          } else {
            stryCov_9fa48("15456");
            await module.pool.query(stryMutAct_9fa48("15457") ? {} : (stryCov_9fa48("15457"), {
              name: stryMutAct_9fa48("15458") ? "" : (stryCov_9fa48("15458"), 'deleteObjectFields'),
              text: stryMutAct_9fa48("15459") ? `` : (stryCov_9fa48("15459"), `
    UPDATE "legacy_hash"
       SET "data" = COALESCE((SELECT jsonb_object_agg("key", "value")
                                FROM jsonb_each("data")
                               WHERE "key" <> ALL ($2::TEXT[])), '{}')
     WHERE "_key" = $1::TEXT`),
              values: stryMutAct_9fa48("15460") ? [] : (stryCov_9fa48("15460"), [key, fields])
            }));
          }
        }
      }
    };
    module.incrObjectField = async function (key, field) {
      if (stryMutAct_9fa48("15461")) {
        {}
      } else {
        stryCov_9fa48("15461");
        return await module.incrObjectFieldBy(key, field, 1);
      }
    };
    module.decrObjectField = async function (key, field) {
      if (stryMutAct_9fa48("15462")) {
        {}
      } else {
        stryCov_9fa48("15462");
        return await module.incrObjectFieldBy(key, field, stryMutAct_9fa48("15463") ? +1 : (stryCov_9fa48("15463"), -1));
      }
    };
    module.incrObjectFieldBy = async function (key, field, value) {
      if (stryMutAct_9fa48("15464")) {
        {}
      } else {
        stryCov_9fa48("15464");
        value = parseInt(value, 10);
        if (stryMutAct_9fa48("15467") ? !key && isNaN(value) : stryMutAct_9fa48("15466") ? false : stryMutAct_9fa48("15465") ? true : (stryCov_9fa48("15465", "15466", "15467"), (stryMutAct_9fa48("15468") ? key : (stryCov_9fa48("15468"), !key)) || isNaN(value))) {
          if (stryMutAct_9fa48("15469")) {
            {}
          } else {
            stryCov_9fa48("15469");
            return null;
          }
        }
        return await module.transaction(async client => {
          if (stryMutAct_9fa48("15470")) {
            {}
          } else {
            stryCov_9fa48("15470");
            if (stryMutAct_9fa48("15472") ? false : stryMutAct_9fa48("15471") ? true : (stryCov_9fa48("15471", "15472"), Array.isArray(key))) {
              if (stryMutAct_9fa48("15473")) {
                {}
              } else {
                stryCov_9fa48("15473");
                await helpers.ensureLegacyObjectsType(client, key, stryMutAct_9fa48("15474") ? "" : (stryCov_9fa48("15474"), 'hash'));
              }
            } else {
              if (stryMutAct_9fa48("15475")) {
                {}
              } else {
                stryCov_9fa48("15475");
                await helpers.ensureLegacyObjectType(client, key, stryMutAct_9fa48("15476") ? "" : (stryCov_9fa48("15476"), 'hash'));
              }
            }
            const res = await client.query(Array.isArray(key) ? stryMutAct_9fa48("15477") ? {} : (stryCov_9fa48("15477"), {
              name: stryMutAct_9fa48("15478") ? "" : (stryCov_9fa48("15478"), 'incrObjectFieldByMulti'),
              text: stryMutAct_9fa48("15479") ? `` : (stryCov_9fa48("15479"), `
INSERT INTO "legacy_hash" ("_key", "data")
SELECT UNNEST($1::TEXT[]), jsonb_build_object($2::TEXT, $3::NUMERIC)
ON CONFLICT ("_key")
DO UPDATE SET "data" = jsonb_set("legacy_hash"."data", ARRAY[$2::TEXT], to_jsonb(COALESCE(("legacy_hash"."data"->>$2::TEXT)::NUMERIC, 0) + $3::NUMERIC))
RETURNING ("data"->>$2::TEXT)::NUMERIC v`),
              values: stryMutAct_9fa48("15480") ? [] : (stryCov_9fa48("15480"), [key, field, value])
            }) : stryMutAct_9fa48("15481") ? {} : (stryCov_9fa48("15481"), {
              name: stryMutAct_9fa48("15482") ? "" : (stryCov_9fa48("15482"), 'incrObjectFieldBy'),
              text: stryMutAct_9fa48("15483") ? `` : (stryCov_9fa48("15483"), `
INSERT INTO "legacy_hash" ("_key", "data")
VALUES ($1::TEXT, jsonb_build_object($2::TEXT, $3::NUMERIC))
ON CONFLICT ("_key")
DO UPDATE SET "data" = jsonb_set("legacy_hash"."data", ARRAY[$2::TEXT], to_jsonb(COALESCE(("legacy_hash"."data"->>$2::TEXT)::NUMERIC, 0) + $3::NUMERIC))
RETURNING ("data"->>$2::TEXT)::NUMERIC v`),
              values: stryMutAct_9fa48("15484") ? [] : (stryCov_9fa48("15484"), [key, field, value])
            }));
            return Array.isArray(key) ? res.rows.map(stryMutAct_9fa48("15485") ? () => undefined : (stryCov_9fa48("15485"), r => parseFloat(r.v))) : parseFloat(res.rows[0].v);
          }
        });
      }
    };
    module.incrObjectFieldByBulk = async function (data) {
      if (stryMutAct_9fa48("15486")) {
        {}
      } else {
        stryCov_9fa48("15486");
        if (stryMutAct_9fa48("15489") ? !Array.isArray(data) && !data.length : stryMutAct_9fa48("15488") ? false : stryMutAct_9fa48("15487") ? true : (stryCov_9fa48("15487", "15488", "15489"), (stryMutAct_9fa48("15490") ? Array.isArray(data) : (stryCov_9fa48("15490"), !Array.isArray(data))) || (stryMutAct_9fa48("15491") ? data.length : (stryCov_9fa48("15491"), !data.length)))) {
          if (stryMutAct_9fa48("15492")) {
            {}
          } else {
            stryCov_9fa48("15492");
            return;
          }
        }
        // TODO: perf?
        await Promise.all(data.map(async item => {
          if (stryMutAct_9fa48("15493")) {
            {}
          } else {
            stryCov_9fa48("15493");
            for (const [field, value] of Object.entries(item[1])) {
              if (stryMutAct_9fa48("15494")) {
                {}
              } else {
                stryCov_9fa48("15494");
                // eslint-disable-next-line no-await-in-loop
                await module.incrObjectFieldBy(item[0], field, value);
              }
            }
          }
        }));
      }
    };
  }
};