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
  if (stryMutAct_9fa48("15655")) {
    {}
  } else {
    stryCov_9fa48("15655");
    const helpers = require('./helpers');
    module.flushdb = async function () {
      if (stryMutAct_9fa48("15656")) {
        {}
      } else {
        stryCov_9fa48("15656");
        await module.pool.query(stryMutAct_9fa48("15657") ? `` : (stryCov_9fa48("15657"), `DROP SCHEMA "public" CASCADE`));
        await module.pool.query(stryMutAct_9fa48("15658") ? `` : (stryCov_9fa48("15658"), `CREATE SCHEMA "public"`));
      }
    };
    module.emptydb = async function () {
      if (stryMutAct_9fa48("15659")) {
        {}
      } else {
        stryCov_9fa48("15659");
        await module.pool.query(stryMutAct_9fa48("15660") ? `` : (stryCov_9fa48("15660"), `DELETE FROM "legacy_object"`));
      }
    };
    module.exists = async function (key) {
      if (stryMutAct_9fa48("15661")) {
        {}
      } else {
        stryCov_9fa48("15661");
        if (stryMutAct_9fa48("15664") ? false : stryMutAct_9fa48("15663") ? true : stryMutAct_9fa48("15662") ? key : (stryCov_9fa48("15662", "15663", "15664"), !key)) {
          if (stryMutAct_9fa48("15665")) {
            {}
          } else {
            stryCov_9fa48("15665");
            return;
          }
        }

        // Redis/Mongo consider empty zsets as non-existent, match that behaviour
        const type = await module.type(key);
        if (stryMutAct_9fa48("15668") ? type !== 'zset' : stryMutAct_9fa48("15667") ? false : stryMutAct_9fa48("15666") ? true : (stryCov_9fa48("15666", "15667", "15668"), type === (stryMutAct_9fa48("15669") ? "" : (stryCov_9fa48("15669"), 'zset')))) {
          if (stryMutAct_9fa48("15670")) {
            {}
          } else {
            stryCov_9fa48("15670");
            if (stryMutAct_9fa48("15672") ? false : stryMutAct_9fa48("15671") ? true : (stryCov_9fa48("15671", "15672"), Array.isArray(key))) {
              if (stryMutAct_9fa48("15673")) {
                {}
              } else {
                stryCov_9fa48("15673");
                const members = await Promise.all(key.map(stryMutAct_9fa48("15674") ? () => undefined : (stryCov_9fa48("15674"), key => module.getSortedSetRange(key, 0, 0))));
                return members.map(stryMutAct_9fa48("15675") ? () => undefined : (stryCov_9fa48("15675"), member => stryMutAct_9fa48("15679") ? member.length <= 0 : stryMutAct_9fa48("15678") ? member.length >= 0 : stryMutAct_9fa48("15677") ? false : stryMutAct_9fa48("15676") ? true : (stryCov_9fa48("15676", "15677", "15678", "15679"), member.length > 0)));
              }
            }
            const members = await module.getSortedSetRange(key, 0, 0);
            return stryMutAct_9fa48("15683") ? members.length <= 0 : stryMutAct_9fa48("15682") ? members.length >= 0 : stryMutAct_9fa48("15681") ? false : stryMutAct_9fa48("15680") ? true : (stryCov_9fa48("15680", "15681", "15682", "15683"), members.length > 0);
          }
        }
        if (stryMutAct_9fa48("15685") ? false : stryMutAct_9fa48("15684") ? true : (stryCov_9fa48("15684", "15685"), Array.isArray(key))) {
          if (stryMutAct_9fa48("15686")) {
            {}
          } else {
            stryCov_9fa48("15686");
            const res = await module.pool.query(stryMutAct_9fa48("15687") ? {} : (stryCov_9fa48("15687"), {
              name: stryMutAct_9fa48("15688") ? "" : (stryCov_9fa48("15688"), 'existsArray'),
              text: stryMutAct_9fa48("15689") ? `` : (stryCov_9fa48("15689"), `
                SELECT o."_key" k
                  FROM "legacy_object_live" o
                 WHERE o."_key" = ANY($1::TEXT[])`),
              values: stryMutAct_9fa48("15690") ? [] : (stryCov_9fa48("15690"), [key])
            }));
            return key.map(stryMutAct_9fa48("15691") ? () => undefined : (stryCov_9fa48("15691"), k => stryMutAct_9fa48("15692") ? res.rows.every(r => r.k === k) : (stryCov_9fa48("15692"), res.rows.some(stryMutAct_9fa48("15693") ? () => undefined : (stryCov_9fa48("15693"), r => stryMutAct_9fa48("15696") ? r.k !== k : stryMutAct_9fa48("15695") ? false : stryMutAct_9fa48("15694") ? true : (stryCov_9fa48("15694", "15695", "15696"), r.k === k))))));
          }
        }
        const res = await module.pool.query(stryMutAct_9fa48("15697") ? {} : (stryCov_9fa48("15697"), {
          name: stryMutAct_9fa48("15698") ? "" : (stryCov_9fa48("15698"), 'exists'),
          text: stryMutAct_9fa48("15699") ? `` : (stryCov_9fa48("15699"), `
            SELECT EXISTS(SELECT *
                    FROM "legacy_object_live"
                   WHERE "_key" = $1::TEXT
                   LIMIT 1) e`),
          values: stryMutAct_9fa48("15700") ? [] : (stryCov_9fa48("15700"), [key])
        }));
        return res.rows[0].e;
      }
    };
    module.scan = async function (params) {
      if (stryMutAct_9fa48("15701")) {
        {}
      } else {
        stryCov_9fa48("15701");
        let {
          match
        } = params;
        if (stryMutAct_9fa48("15704") ? match.endsWith('*') : stryMutAct_9fa48("15703") ? false : stryMutAct_9fa48("15702") ? true : (stryCov_9fa48("15702", "15703", "15704"), match.startsWith(stryMutAct_9fa48("15705") ? "" : (stryCov_9fa48("15705"), '*')))) {
          if (stryMutAct_9fa48("15706")) {
            {}
          } else {
            stryCov_9fa48("15706");
            match = stryMutAct_9fa48("15707") ? `` : (stryCov_9fa48("15707"), `%${stryMutAct_9fa48("15708") ? match : (stryCov_9fa48("15708"), match.substring(1))}`);
          }
        }
        if (stryMutAct_9fa48("15711") ? match.startsWith('*') : stryMutAct_9fa48("15710") ? false : stryMutAct_9fa48("15709") ? true : (stryCov_9fa48("15709", "15710", "15711"), match.endsWith(stryMutAct_9fa48("15712") ? "" : (stryCov_9fa48("15712"), '*')))) {
          if (stryMutAct_9fa48("15713")) {
            {}
          } else {
            stryCov_9fa48("15713");
            match = stryMutAct_9fa48("15714") ? `` : (stryCov_9fa48("15714"), `${stryMutAct_9fa48("15715") ? match : (stryCov_9fa48("15715"), match.substring(0, stryMutAct_9fa48("15716") ? match.length + 1 : (stryCov_9fa48("15716"), match.length - 1)))}%`);
          }
        }
        const res = await module.pool.query(stryMutAct_9fa48("15717") ? {} : (stryCov_9fa48("15717"), {
          text: stryMutAct_9fa48("15718") ? `` : (stryCov_9fa48("15718"), `
        SELECT o."_key"
        FROM "legacy_object_live" o
        WHERE o."_key" LIKE '${match}'`)
        }));
        return res.rows.map(stryMutAct_9fa48("15719") ? () => undefined : (stryCov_9fa48("15719"), r => r._key));
      }
    };
    module.delete = async function (key) {
      if (stryMutAct_9fa48("15720")) {
        {}
      } else {
        stryCov_9fa48("15720");
        if (stryMutAct_9fa48("15723") ? false : stryMutAct_9fa48("15722") ? true : stryMutAct_9fa48("15721") ? key : (stryCov_9fa48("15721", "15722", "15723"), !key)) {
          if (stryMutAct_9fa48("15724")) {
            {}
          } else {
            stryCov_9fa48("15724");
            return;
          }
        }
        await module.pool.query(stryMutAct_9fa48("15725") ? {} : (stryCov_9fa48("15725"), {
          name: stryMutAct_9fa48("15726") ? "" : (stryCov_9fa48("15726"), 'delete'),
          text: stryMutAct_9fa48("15727") ? `` : (stryCov_9fa48("15727"), `
DELETE FROM "legacy_object"
 WHERE "_key" = $1::TEXT`),
          values: stryMutAct_9fa48("15728") ? [] : (stryCov_9fa48("15728"), [key])
        }));
      }
    };
    module.deleteAll = async function (keys) {
      if (stryMutAct_9fa48("15729")) {
        {}
      } else {
        stryCov_9fa48("15729");
        if (stryMutAct_9fa48("15732") ? !Array.isArray(keys) && !keys.length : stryMutAct_9fa48("15731") ? false : stryMutAct_9fa48("15730") ? true : (stryCov_9fa48("15730", "15731", "15732"), (stryMutAct_9fa48("15733") ? Array.isArray(keys) : (stryCov_9fa48("15733"), !Array.isArray(keys))) || (stryMutAct_9fa48("15734") ? keys.length : (stryCov_9fa48("15734"), !keys.length)))) {
          if (stryMutAct_9fa48("15735")) {
            {}
          } else {
            stryCov_9fa48("15735");
            return;
          }
        }
        await module.pool.query(stryMutAct_9fa48("15736") ? {} : (stryCov_9fa48("15736"), {
          name: stryMutAct_9fa48("15737") ? "" : (stryCov_9fa48("15737"), 'deleteAll'),
          text: stryMutAct_9fa48("15738") ? `` : (stryCov_9fa48("15738"), `
DELETE FROM "legacy_object"
 WHERE "_key" = ANY($1::TEXT[])`),
          values: stryMutAct_9fa48("15739") ? [] : (stryCov_9fa48("15739"), [keys])
        }));
      }
    };
    module.get = async function (key) {
      if (stryMutAct_9fa48("15740")) {
        {}
      } else {
        stryCov_9fa48("15740");
        if (stryMutAct_9fa48("15743") ? false : stryMutAct_9fa48("15742") ? true : stryMutAct_9fa48("15741") ? key : (stryCov_9fa48("15741", "15742", "15743"), !key)) {
          if (stryMutAct_9fa48("15744")) {
            {}
          } else {
            stryCov_9fa48("15744");
            return;
          }
        }
        const res = await module.pool.query(stryMutAct_9fa48("15745") ? {} : (stryCov_9fa48("15745"), {
          name: stryMutAct_9fa48("15746") ? "" : (stryCov_9fa48("15746"), 'get'),
          text: stryMutAct_9fa48("15747") ? `` : (stryCov_9fa48("15747"), `
SELECT s."data" t
  FROM "legacy_object_live" o
 INNER JOIN "legacy_string" s
         ON o."_key" = s."_key"
        AND o."type" = s."type"
 WHERE o."_key" = $1::TEXT
 LIMIT 1`),
          values: stryMutAct_9fa48("15748") ? [] : (stryCov_9fa48("15748"), [key])
        }));
        return res.rows.length ? res.rows[0].t : null;
      }
    };
    module.set = async function (key, value) {
      if (stryMutAct_9fa48("15749")) {
        {}
      } else {
        stryCov_9fa48("15749");
        if (stryMutAct_9fa48("15752") ? false : stryMutAct_9fa48("15751") ? true : stryMutAct_9fa48("15750") ? key : (stryCov_9fa48("15750", "15751", "15752"), !key)) {
          if (stryMutAct_9fa48("15753")) {
            {}
          } else {
            stryCov_9fa48("15753");
            return;
          }
        }
        await module.transaction(async client => {
          if (stryMutAct_9fa48("15754")) {
            {}
          } else {
            stryCov_9fa48("15754");
            await helpers.ensureLegacyObjectType(client, key, stryMutAct_9fa48("15755") ? "" : (stryCov_9fa48("15755"), 'string'));
            await client.query(stryMutAct_9fa48("15756") ? {} : (stryCov_9fa48("15756"), {
              name: stryMutAct_9fa48("15757") ? "" : (stryCov_9fa48("15757"), 'set'),
              text: stryMutAct_9fa48("15758") ? `` : (stryCov_9fa48("15758"), `
INSERT INTO "legacy_string" ("_key", "data")
VALUES ($1::TEXT, $2::TEXT)
ON CONFLICT ("_key")
DO UPDATE SET "data" = $2::TEXT`),
              values: stryMutAct_9fa48("15759") ? [] : (stryCov_9fa48("15759"), [key, value])
            }));
          }
        });
      }
    };
    module.increment = async function (key) {
      if (stryMutAct_9fa48("15760")) {
        {}
      } else {
        stryCov_9fa48("15760");
        if (stryMutAct_9fa48("15763") ? false : stryMutAct_9fa48("15762") ? true : stryMutAct_9fa48("15761") ? key : (stryCov_9fa48("15761", "15762", "15763"), !key)) {
          if (stryMutAct_9fa48("15764")) {
            {}
          } else {
            stryCov_9fa48("15764");
            return;
          }
        }
        return await module.transaction(async client => {
          if (stryMutAct_9fa48("15765")) {
            {}
          } else {
            stryCov_9fa48("15765");
            await helpers.ensureLegacyObjectType(client, key, stryMutAct_9fa48("15766") ? "" : (stryCov_9fa48("15766"), 'string'));
            const res = await client.query(stryMutAct_9fa48("15767") ? {} : (stryCov_9fa48("15767"), {
              name: stryMutAct_9fa48("15768") ? "" : (stryCov_9fa48("15768"), 'increment'),
              text: stryMutAct_9fa48("15769") ? `` : (stryCov_9fa48("15769"), `
INSERT INTO "legacy_string" ("_key", "data")
VALUES ($1::TEXT, '1')
ON CONFLICT ("_key")
DO UPDATE SET "data" = ("legacy_string"."data"::NUMERIC + 1)::TEXT
RETURNING "data" d`),
              values: stryMutAct_9fa48("15770") ? [] : (stryCov_9fa48("15770"), [key])
            }));
            return parseFloat(res.rows[0].d);
          }
        });
      }
    };
    module.rename = async function (oldKey, newKey) {
      if (stryMutAct_9fa48("15771")) {
        {}
      } else {
        stryCov_9fa48("15771");
        await module.transaction(async client => {
          if (stryMutAct_9fa48("15772")) {
            {}
          } else {
            stryCov_9fa48("15772");
            await client.query(stryMutAct_9fa48("15773") ? {} : (stryCov_9fa48("15773"), {
              name: stryMutAct_9fa48("15774") ? "" : (stryCov_9fa48("15774"), 'deleteRename'),
              text: stryMutAct_9fa48("15775") ? `` : (stryCov_9fa48("15775"), `
    DELETE FROM "legacy_object"
     WHERE "_key" = $1::TEXT`),
              values: stryMutAct_9fa48("15776") ? [] : (stryCov_9fa48("15776"), [newKey])
            }));
            await client.query(stryMutAct_9fa48("15777") ? {} : (stryCov_9fa48("15777"), {
              name: stryMutAct_9fa48("15778") ? "" : (stryCov_9fa48("15778"), 'rename'),
              text: stryMutAct_9fa48("15779") ? `` : (stryCov_9fa48("15779"), `
UPDATE "legacy_object"
SET "_key" = $2::TEXT
WHERE "_key" = $1::TEXT`),
              values: stryMutAct_9fa48("15780") ? [] : (stryCov_9fa48("15780"), [oldKey, newKey])
            }));
          }
        });
      }
    };
    module.type = async function (key) {
      if (stryMutAct_9fa48("15781")) {
        {}
      } else {
        stryCov_9fa48("15781");
        const res = await module.pool.query(stryMutAct_9fa48("15782") ? {} : (stryCov_9fa48("15782"), {
          name: stryMutAct_9fa48("15783") ? "" : (stryCov_9fa48("15783"), 'type'),
          text: stryMutAct_9fa48("15784") ? `` : (stryCov_9fa48("15784"), `
SELECT "type"::TEXT t
  FROM "legacy_object_live"
 WHERE "_key" = $1::TEXT
 LIMIT 1`),
          values: stryMutAct_9fa48("15785") ? [] : (stryCov_9fa48("15785"), [key])
        }));
        return res.rows.length ? res.rows[0].t : null;
      }
    };
    async function doExpire(key, date) {
      if (stryMutAct_9fa48("15786")) {
        {}
      } else {
        stryCov_9fa48("15786");
        await module.pool.query(stryMutAct_9fa48("15787") ? {} : (stryCov_9fa48("15787"), {
          name: stryMutAct_9fa48("15788") ? "" : (stryCov_9fa48("15788"), 'expire'),
          text: stryMutAct_9fa48("15789") ? `` : (stryCov_9fa48("15789"), `
UPDATE "legacy_object"
   SET "expireAt" = $2::TIMESTAMPTZ
 WHERE "_key" = $1::TEXT`),
          values: stryMutAct_9fa48("15790") ? [] : (stryCov_9fa48("15790"), [key, date])
        }));
      }
    }
    module.expire = async function (key, seconds) {
      if (stryMutAct_9fa48("15791")) {
        {}
      } else {
        stryCov_9fa48("15791");
        await doExpire(key, new Date(stryMutAct_9fa48("15792") ? (Date.now() / 1000 + seconds) / 1000 : (stryCov_9fa48("15792"), (stryMutAct_9fa48("15793") ? Date.now() / 1000 - seconds : (stryCov_9fa48("15793"), (stryMutAct_9fa48("15794") ? Date.now() * 1000 : (stryCov_9fa48("15794"), Date.now() / 1000)) + seconds)) * 1000)));
      }
    };
    module.expireAt = async function (key, timestamp) {
      if (stryMutAct_9fa48("15795")) {
        {}
      } else {
        stryCov_9fa48("15795");
        await doExpire(key, new Date(stryMutAct_9fa48("15796") ? timestamp / 1000 : (stryCov_9fa48("15796"), timestamp * 1000)));
      }
    };
    module.pexpire = async function (key, ms) {
      if (stryMutAct_9fa48("15797")) {
        {}
      } else {
        stryCov_9fa48("15797");
        await doExpire(key, new Date(stryMutAct_9fa48("15798") ? Date.now() - parseInt(ms, 10) : (stryCov_9fa48("15798"), Date.now() + parseInt(ms, 10))));
      }
    };
    module.pexpireAt = async function (key, timestamp) {
      if (stryMutAct_9fa48("15799")) {
        {}
      } else {
        stryCov_9fa48("15799");
        await doExpire(key, new Date(timestamp));
      }
    };
    async function getExpire(key) {
      if (stryMutAct_9fa48("15800")) {
        {}
      } else {
        stryCov_9fa48("15800");
        const res = await module.pool.query(stryMutAct_9fa48("15801") ? {} : (stryCov_9fa48("15801"), {
          name: stryMutAct_9fa48("15802") ? "" : (stryCov_9fa48("15802"), 'ttl'),
          text: stryMutAct_9fa48("15803") ? `` : (stryCov_9fa48("15803"), `
SELECT "expireAt"::TEXT
  FROM "legacy_object"
 WHERE "_key" = $1::TEXT
 LIMIT 1`),
          values: stryMutAct_9fa48("15804") ? [] : (stryCov_9fa48("15804"), [key])
        }));
        return res.rows.length ? new Date(res.rows[0].expireAt).getTime() : null;
      }
    }
    module.ttl = async function (key) {
      if (stryMutAct_9fa48("15805")) {
        {}
      } else {
        stryCov_9fa48("15805");
        return Math.round(stryMutAct_9fa48("15806") ? ((await getExpire(key)) - Date.now()) * 1000 : (stryCov_9fa48("15806"), (stryMutAct_9fa48("15807") ? (await getExpire(key)) + Date.now() : (stryCov_9fa48("15807"), (await getExpire(key)) - Date.now())) / 1000));
      }
    };
    module.pttl = async function (key) {
      if (stryMutAct_9fa48("15808")) {
        {}
      } else {
        stryCov_9fa48("15808");
        return stryMutAct_9fa48("15809") ? (await getExpire(key)) + Date.now() : (stryCov_9fa48("15809"), (await getExpire(key)) - Date.now());
      }
    };
  }
};