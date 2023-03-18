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
const winston = require('winston');
const async = require('async');
const nconf = require('nconf');
const session = require('express-session');
const semver = require('semver');
const connection = require('./postgres/connection');
const postgresModule = module.exports;
postgresModule.questions = stryMutAct_9fa48("16876") ? [] : (stryCov_9fa48("16876"), [stryMutAct_9fa48("16877") ? {} : (stryCov_9fa48("16877"), {
  name: stryMutAct_9fa48("16878") ? "" : (stryCov_9fa48("16878"), 'postgres:host'),
  description: stryMutAct_9fa48("16879") ? "" : (stryCov_9fa48("16879"), 'Host IP or address of your PostgreSQL instance'),
  default: stryMutAct_9fa48("16882") ? nconf.get('postgres:host') && '127.0.0.1' : stryMutAct_9fa48("16881") ? false : stryMutAct_9fa48("16880") ? true : (stryCov_9fa48("16880", "16881", "16882"), nconf.get(stryMutAct_9fa48("16883") ? "" : (stryCov_9fa48("16883"), 'postgres:host')) || (stryMutAct_9fa48("16884") ? "" : (stryCov_9fa48("16884"), '127.0.0.1')))
}), stryMutAct_9fa48("16885") ? {} : (stryCov_9fa48("16885"), {
  name: stryMutAct_9fa48("16886") ? "" : (stryCov_9fa48("16886"), 'postgres:port'),
  description: stryMutAct_9fa48("16887") ? "" : (stryCov_9fa48("16887"), 'Host port of your PostgreSQL instance'),
  default: stryMutAct_9fa48("16890") ? nconf.get('postgres:port') && 5432 : stryMutAct_9fa48("16889") ? false : stryMutAct_9fa48("16888") ? true : (stryCov_9fa48("16888", "16889", "16890"), nconf.get(stryMutAct_9fa48("16891") ? "" : (stryCov_9fa48("16891"), 'postgres:port')) || 5432)
}), stryMutAct_9fa48("16892") ? {} : (stryCov_9fa48("16892"), {
  name: stryMutAct_9fa48("16893") ? "" : (stryCov_9fa48("16893"), 'postgres:username'),
  description: stryMutAct_9fa48("16894") ? "" : (stryCov_9fa48("16894"), 'PostgreSQL username'),
  default: stryMutAct_9fa48("16897") ? nconf.get('postgres:username') && '' : stryMutAct_9fa48("16896") ? false : stryMutAct_9fa48("16895") ? true : (stryCov_9fa48("16895", "16896", "16897"), nconf.get(stryMutAct_9fa48("16898") ? "" : (stryCov_9fa48("16898"), 'postgres:username')) || (stryMutAct_9fa48("16899") ? "Stryker was here!" : (stryCov_9fa48("16899"), '')))
}), stryMutAct_9fa48("16900") ? {} : (stryCov_9fa48("16900"), {
  name: stryMutAct_9fa48("16901") ? "" : (stryCov_9fa48("16901"), 'postgres:password'),
  description: stryMutAct_9fa48("16902") ? "" : (stryCov_9fa48("16902"), 'Password of your PostgreSQL database'),
  hidden: stryMutAct_9fa48("16903") ? false : (stryCov_9fa48("16903"), true),
  default: stryMutAct_9fa48("16906") ? nconf.get('postgres:password') && '' : stryMutAct_9fa48("16905") ? false : stryMutAct_9fa48("16904") ? true : (stryCov_9fa48("16904", "16905", "16906"), nconf.get(stryMutAct_9fa48("16907") ? "" : (stryCov_9fa48("16907"), 'postgres:password')) || (stryMutAct_9fa48("16908") ? "Stryker was here!" : (stryCov_9fa48("16908"), ''))),
  before: function (value) {
    if (stryMutAct_9fa48("16909")) {
      {}
    } else {
      stryCov_9fa48("16909");
      value = stryMutAct_9fa48("16912") ? (value || nconf.get('postgres:password')) && '' : stryMutAct_9fa48("16911") ? false : stryMutAct_9fa48("16910") ? true : (stryCov_9fa48("16910", "16911", "16912"), (stryMutAct_9fa48("16914") ? value && nconf.get('postgres:password') : stryMutAct_9fa48("16913") ? false : (stryCov_9fa48("16913", "16914"), value || nconf.get(stryMutAct_9fa48("16915") ? "" : (stryCov_9fa48("16915"), 'postgres:password')))) || (stryMutAct_9fa48("16916") ? "Stryker was here!" : (stryCov_9fa48("16916"), '')));
      return value;
    }
  }
}), stryMutAct_9fa48("16917") ? {} : (stryCov_9fa48("16917"), {
  name: stryMutAct_9fa48("16918") ? "" : (stryCov_9fa48("16918"), 'postgres:database'),
  description: stryMutAct_9fa48("16919") ? "" : (stryCov_9fa48("16919"), 'PostgreSQL database name'),
  default: stryMutAct_9fa48("16922") ? nconf.get('postgres:database') && 'nodebb' : stryMutAct_9fa48("16921") ? false : stryMutAct_9fa48("16920") ? true : (stryCov_9fa48("16920", "16921", "16922"), nconf.get(stryMutAct_9fa48("16923") ? "" : (stryCov_9fa48("16923"), 'postgres:database')) || (stryMutAct_9fa48("16924") ? "" : (stryCov_9fa48("16924"), 'nodebb')))
}), stryMutAct_9fa48("16925") ? {} : (stryCov_9fa48("16925"), {
  name: stryMutAct_9fa48("16926") ? "" : (stryCov_9fa48("16926"), 'postgres:ssl'),
  description: stryMutAct_9fa48("16927") ? "" : (stryCov_9fa48("16927"), 'Enable SSL for PostgreSQL database access'),
  default: stryMutAct_9fa48("16930") ? nconf.get('postgres:ssl') && false : stryMutAct_9fa48("16929") ? false : stryMutAct_9fa48("16928") ? true : (stryCov_9fa48("16928", "16929", "16930"), nconf.get(stryMutAct_9fa48("16931") ? "" : (stryCov_9fa48("16931"), 'postgres:ssl')) || (stryMutAct_9fa48("16932") ? true : (stryCov_9fa48("16932"), false)))
})]);
postgresModule.init = async function () {
  if (stryMutAct_9fa48("16933")) {
    {}
  } else {
    stryCov_9fa48("16933");
    const {
      Pool
    } = require('pg');
    const connOptions = connection.getConnectionOptions();
    const pool = new Pool(connOptions);
    postgresModule.pool = pool;
    postgresModule.client = pool;
    const client = await pool.connect();
    try {
      if (stryMutAct_9fa48("16934")) {
        {}
      } else {
        stryCov_9fa48("16934");
        await checkUpgrade(client);
      }
    } catch (err) {
      if (stryMutAct_9fa48("16935")) {
        {}
      } else {
        stryCov_9fa48("16935");
        winston.error(stryMutAct_9fa48("16936") ? `` : (stryCov_9fa48("16936"), `NodeBB could not connect to your PostgreSQL database. PostgreSQL returned the following error: ${err.message}`));
        throw err;
      }
    } finally {
      if (stryMutAct_9fa48("16937")) {
        {}
      } else {
        stryCov_9fa48("16937");
        client.release();
      }
    }
  }
};
async function checkUpgrade(client) {
  if (stryMutAct_9fa48("16938")) {
    {}
  } else {
    stryCov_9fa48("16938");
    const res = await client.query(stryMutAct_9fa48("16939") ? `` : (stryCov_9fa48("16939"), `
SELECT EXISTS(SELECT *
                FROM "information_schema"."columns"
               WHERE "table_schema" = 'public'
                 AND "table_name" = 'objects'
                 AND "column_name" = 'data') a,
       EXISTS(SELECT *
                FROM "information_schema"."columns"
               WHERE "table_schema" = 'public'
                 AND "table_name" = 'legacy_hash'
                 AND "column_name" = '_key') b,
       EXISTS(SELECT *
                FROM "information_schema"."routines"
               WHERE "routine_schema" = 'public'
                 AND "routine_name" = 'nodebb_get_sorted_set_members') c`));
    if (stryMutAct_9fa48("16942") ? res.rows[0].a && res.rows[0].b || res.rows[0].c : stryMutAct_9fa48("16941") ? false : stryMutAct_9fa48("16940") ? true : (stryCov_9fa48("16940", "16941", "16942"), (stryMutAct_9fa48("16944") ? res.rows[0].a || res.rows[0].b : stryMutAct_9fa48("16943") ? true : (stryCov_9fa48("16943", "16944"), res.rows[0].a && res.rows[0].b)) && res.rows[0].c)) {
      if (stryMutAct_9fa48("16945")) {
        {}
      } else {
        stryCov_9fa48("16945");
        return;
      }
    }
    await client.query(stryMutAct_9fa48("16946") ? `` : (stryCov_9fa48("16946"), `BEGIN`));
    try {
      if (stryMutAct_9fa48("16947")) {
        {}
      } else {
        stryCov_9fa48("16947");
        if (stryMutAct_9fa48("16950") ? false : stryMutAct_9fa48("16949") ? true : stryMutAct_9fa48("16948") ? res.rows[0].b : (stryCov_9fa48("16948", "16949", "16950"), !res.rows[0].b)) {
          if (stryMutAct_9fa48("16951")) {
            {}
          } else {
            stryCov_9fa48("16951");
            await client.query(stryMutAct_9fa48("16952") ? `` : (stryCov_9fa48("16952"), `
CREATE TYPE LEGACY_OBJECT_TYPE AS ENUM (
    'hash', 'zset', 'set', 'list', 'string'
)`));
            await client.query(stryMutAct_9fa48("16953") ? `` : (stryCov_9fa48("16953"), `
CREATE TABLE "legacy_object" (
    "_key" TEXT NOT NULL
        PRIMARY KEY,
    "type" LEGACY_OBJECT_TYPE NOT NULL,
    "expireAt" TIMESTAMPTZ DEFAULT NULL,
    UNIQUE ( "_key", "type" )
)`));
            await client.query(stryMutAct_9fa48("16954") ? `` : (stryCov_9fa48("16954"), `
CREATE TABLE "legacy_hash" (
    "_key" TEXT NOT NULL
        PRIMARY KEY,
    "data" JSONB NOT NULL,
    "type" LEGACY_OBJECT_TYPE NOT NULL
        DEFAULT 'hash'::LEGACY_OBJECT_TYPE
        CHECK ( "type" = 'hash' ),
    CONSTRAINT "fk__legacy_hash__key"
        FOREIGN KEY ("_key", "type")
        REFERENCES "legacy_object"("_key", "type")
        ON UPDATE CASCADE
        ON DELETE CASCADE
)`));
            await client.query(stryMutAct_9fa48("16955") ? `` : (stryCov_9fa48("16955"), `
CREATE TABLE "legacy_zset" (
    "_key" TEXT NOT NULL,
    "value" TEXT NOT NULL,
    "score" NUMERIC NOT NULL,
    "type" LEGACY_OBJECT_TYPE NOT NULL
        DEFAULT 'zset'::LEGACY_OBJECT_TYPE
        CHECK ( "type" = 'zset' ),
    PRIMARY KEY ("_key", "value"),
    CONSTRAINT "fk__legacy_zset__key"
        FOREIGN KEY ("_key", "type")
        REFERENCES "legacy_object"("_key", "type")
        ON UPDATE CASCADE
        ON DELETE CASCADE
)`));
            await client.query(stryMutAct_9fa48("16956") ? `` : (stryCov_9fa48("16956"), `
CREATE TABLE "legacy_set" (
    "_key" TEXT NOT NULL,
    "member" TEXT NOT NULL,
    "type" LEGACY_OBJECT_TYPE NOT NULL
        DEFAULT 'set'::LEGACY_OBJECT_TYPE
        CHECK ( "type" = 'set' ),
    PRIMARY KEY ("_key", "member"),
    CONSTRAINT "fk__legacy_set__key"
        FOREIGN KEY ("_key", "type")
        REFERENCES "legacy_object"("_key", "type")
        ON UPDATE CASCADE
        ON DELETE CASCADE
)`));
            await client.query(stryMutAct_9fa48("16957") ? `` : (stryCov_9fa48("16957"), `
CREATE TABLE "legacy_list" (
    "_key" TEXT NOT NULL
        PRIMARY KEY,
    "array" TEXT[] NOT NULL,
    "type" LEGACY_OBJECT_TYPE NOT NULL
        DEFAULT 'list'::LEGACY_OBJECT_TYPE
        CHECK ( "type" = 'list' ),
    CONSTRAINT "fk__legacy_list__key"
        FOREIGN KEY ("_key", "type")
        REFERENCES "legacy_object"("_key", "type")
        ON UPDATE CASCADE
        ON DELETE CASCADE
)`));
            await client.query(stryMutAct_9fa48("16958") ? `` : (stryCov_9fa48("16958"), `
CREATE TABLE "legacy_string" (
    "_key" TEXT NOT NULL
        PRIMARY KEY,
    "data" TEXT NOT NULL,
    "type" LEGACY_OBJECT_TYPE NOT NULL
        DEFAULT 'string'::LEGACY_OBJECT_TYPE
        CHECK ( "type" = 'string' ),
    CONSTRAINT "fk__legacy_string__key"
        FOREIGN KEY ("_key", "type")
        REFERENCES "legacy_object"("_key", "type")
        ON UPDATE CASCADE
        ON DELETE CASCADE
)`));
            if (stryMutAct_9fa48("16960") ? false : stryMutAct_9fa48("16959") ? true : (stryCov_9fa48("16959", "16960"), res.rows[0].a)) {
              if (stryMutAct_9fa48("16961")) {
                {}
              } else {
                stryCov_9fa48("16961");
                await client.query(stryMutAct_9fa48("16962") ? `` : (stryCov_9fa48("16962"), `
INSERT INTO "legacy_object" ("_key", "type", "expireAt")
SELECT DISTINCT "data"->>'_key',
                CASE WHEN (SELECT COUNT(*)
                             FROM jsonb_object_keys("data" - 'expireAt')) = 2
                     THEN CASE WHEN ("data" ? 'value')
                                 OR ("data" ? 'data')
                               THEN 'string'
                               WHEN "data" ? 'array'
                               THEN 'list'
                               WHEN "data" ? 'members'
                               THEN 'set'
                               ELSE 'hash'
                          END
                     WHEN (SELECT COUNT(*)
                             FROM jsonb_object_keys("data" - 'expireAt')) = 3
                     THEN CASE WHEN ("data" ? 'value')
                                AND ("data" ? 'score')
                               THEN 'zset'
                               ELSE 'hash'
                          END
                     ELSE 'hash'
                END::LEGACY_OBJECT_TYPE,
                CASE WHEN ("data" ? 'expireAt')
                     THEN to_timestamp(("data"->>'expireAt')::double precision / 1000)
                     ELSE NULL
                END
  FROM "objects"`));
                await client.query(stryMutAct_9fa48("16963") ? `` : (stryCov_9fa48("16963"), `
INSERT INTO "legacy_hash" ("_key", "data")
SELECT "data"->>'_key',
       "data" - '_key' - 'expireAt'
  FROM "objects"
 WHERE CASE WHEN (SELECT COUNT(*)
                    FROM jsonb_object_keys("data" - 'expireAt')) = 2
            THEN NOT (("data" ? 'value')
                   OR ("data" ? 'data')
                   OR ("data" ? 'members')
                   OR ("data" ? 'array'))
            WHEN (SELECT COUNT(*)
                    FROM jsonb_object_keys("data" - 'expireAt')) = 3
            THEN NOT (("data" ? 'value')
                  AND ("data" ? 'score'))
            ELSE TRUE
       END`));
                await client.query(stryMutAct_9fa48("16964") ? `` : (stryCov_9fa48("16964"), `
INSERT INTO "legacy_zset" ("_key", "value", "score")
SELECT "data"->>'_key',
       "data"->>'value',
       ("data"->>'score')::NUMERIC
  FROM "objects"
 WHERE (SELECT COUNT(*)
          FROM jsonb_object_keys("data" - 'expireAt')) = 3
   AND ("data" ? 'value')
   AND ("data" ? 'score')`));
                await client.query(stryMutAct_9fa48("16965") ? `` : (stryCov_9fa48("16965"), `
INSERT INTO "legacy_set" ("_key", "member")
SELECT "data"->>'_key',
       jsonb_array_elements_text("data"->'members')
  FROM "objects"
 WHERE (SELECT COUNT(*)
          FROM jsonb_object_keys("data" - 'expireAt')) = 2
   AND ("data" ? 'members')`));
                await client.query(stryMutAct_9fa48("16966") ? `` : (stryCov_9fa48("16966"), `
INSERT INTO "legacy_list" ("_key", "array")
SELECT "data"->>'_key',
       ARRAY(SELECT t
               FROM jsonb_array_elements_text("data"->'list') WITH ORDINALITY l(t, i)
              ORDER BY i ASC)
  FROM "objects"
 WHERE (SELECT COUNT(*)
          FROM jsonb_object_keys("data" - 'expireAt')) = 2
   AND ("data" ? 'array')`));
                await client.query(stryMutAct_9fa48("16967") ? `` : (stryCov_9fa48("16967"), `
INSERT INTO "legacy_string" ("_key", "data")
SELECT "data"->>'_key',
       CASE WHEN "data" ? 'value'
            THEN "data"->>'value'
            ELSE "data"->>'data'
       END
  FROM "objects"
 WHERE (SELECT COUNT(*)
          FROM jsonb_object_keys("data" - 'expireAt')) = 2
   AND (("data" ? 'value')
     OR ("data" ? 'data'))`));
                await client.query(stryMutAct_9fa48("16968") ? `` : (stryCov_9fa48("16968"), `DROP TABLE "objects" CASCADE`));
                await client.query(stryMutAct_9fa48("16969") ? `` : (stryCov_9fa48("16969"), `DROP FUNCTION "fun__objects__expireAt"() CASCADE`));
              }
            }
            await client.query(stryMutAct_9fa48("16970") ? `` : (stryCov_9fa48("16970"), `
CREATE VIEW "legacy_object_live" AS
SELECT "_key", "type"
  FROM "legacy_object"
 WHERE "expireAt" IS NULL
    OR "expireAt" > CURRENT_TIMESTAMP`));
          }
        }
        if (stryMutAct_9fa48("16973") ? false : stryMutAct_9fa48("16972") ? true : stryMutAct_9fa48("16971") ? res.rows[0].c : (stryCov_9fa48("16971", "16972", "16973"), !res.rows[0].c)) {
          if (stryMutAct_9fa48("16974")) {
            {}
          } else {
            stryCov_9fa48("16974");
            await client.query(stryMutAct_9fa48("16975") ? `` : (stryCov_9fa48("16975"), `
CREATE FUNCTION "nodebb_get_sorted_set_members"(TEXT) RETURNS TEXT[] AS $$
    SELECT array_agg(z."value" ORDER BY z."score" ASC)
      FROM "legacy_object_live" o
     INNER JOIN "legacy_zset" z
             ON o."_key" = z."_key"
            AND o."type" = z."type"
          WHERE o."_key" = $1
$$ LANGUAGE sql
STABLE
STRICT
PARALLEL SAFE`));
          }
        }
      }
    } catch (ex) {
      if (stryMutAct_9fa48("16976")) {
        {}
      } else {
        stryCov_9fa48("16976");
        await client.query(stryMutAct_9fa48("16977") ? `` : (stryCov_9fa48("16977"), `ROLLBACK`));
        throw ex;
      }
    }
    await client.query(stryMutAct_9fa48("16978") ? `` : (stryCov_9fa48("16978"), `COMMIT`));
  }
}
postgresModule.createSessionStore = async function (options) {
  if (stryMutAct_9fa48("16979")) {
    {}
  } else {
    stryCov_9fa48("16979");
    const meta = require('../meta');
    function done(db) {
      if (stryMutAct_9fa48("16980")) {
        {}
      } else {
        stryCov_9fa48("16980");
        const sessionStore = require('connect-pg-simple')(session);
        return new sessionStore(stryMutAct_9fa48("16981") ? {} : (stryCov_9fa48("16981"), {
          pool: db,
          ttl: meta.getSessionTTLSeconds(),
          pruneSessionInterval: nconf.get(stryMutAct_9fa48("16982") ? "" : (stryCov_9fa48("16982"), 'isPrimary')) ? 60 : stryMutAct_9fa48("16983") ? true : (stryCov_9fa48("16983"), false)
        }));
      }
    }
    const db = await connection.connect(options);
    if (stryMutAct_9fa48("16986") ? false : stryMutAct_9fa48("16985") ? true : stryMutAct_9fa48("16984") ? nconf.get('isPrimary') : (stryCov_9fa48("16984", "16985", "16986"), !nconf.get(stryMutAct_9fa48("16987") ? "" : (stryCov_9fa48("16987"), 'isPrimary')))) {
      if (stryMutAct_9fa48("16988")) {
        {}
      } else {
        stryCov_9fa48("16988");
        return done(db);
      }
    }
    await db.query(stryMutAct_9fa48("16989") ? `` : (stryCov_9fa48("16989"), `
CREATE TABLE IF NOT EXISTS "session" (
    "sid" CHAR(32) NOT NULL
        COLLATE "C"
        PRIMARY KEY,
    "sess" JSONB NOT NULL,
    "expire" TIMESTAMPTZ NOT NULL
) WITHOUT OIDS;

CREATE INDEX IF NOT EXISTS "session_expire_idx" ON "session"("expire");

ALTER TABLE "session"
    ALTER "sid" SET STORAGE MAIN,
    CLUSTER ON "session_expire_idx";`));
    return done(db);
  }
};
postgresModule.createIndices = function (callback) {
  if (stryMutAct_9fa48("16990")) {
    {}
  } else {
    stryCov_9fa48("16990");
    if (stryMutAct_9fa48("16993") ? false : stryMutAct_9fa48("16992") ? true : stryMutAct_9fa48("16991") ? postgresModule.pool : (stryCov_9fa48("16991", "16992", "16993"), !postgresModule.pool)) {
      if (stryMutAct_9fa48("16994")) {
        {}
      } else {
        stryCov_9fa48("16994");
        winston.warn(stryMutAct_9fa48("16995") ? "" : (stryCov_9fa48("16995"), '[database/createIndices] database not initialized'));
        return callback();
      }
    }
    const query = postgresModule.pool.query.bind(postgresModule.pool);
    winston.info(stryMutAct_9fa48("16996") ? "" : (stryCov_9fa48("16996"), '[database] Checking database indices.'));
    async.series(stryMutAct_9fa48("16997") ? [] : (stryCov_9fa48("16997"), [async.apply(query, stryMutAct_9fa48("16998") ? `` : (stryCov_9fa48("16998"), `CREATE INDEX IF NOT EXISTS "idx__legacy_zset__key__score" ON "legacy_zset"("_key" ASC, "score" DESC)`)), async.apply(query, stryMutAct_9fa48("16999") ? `` : (stryCov_9fa48("16999"), `CREATE INDEX IF NOT EXISTS "idx__legacy_object__expireAt" ON "legacy_object"("expireAt" ASC)`))]), err => {
      if (stryMutAct_9fa48("17000")) {
        {}
      } else {
        stryCov_9fa48("17000");
        if (stryMutAct_9fa48("17002") ? false : stryMutAct_9fa48("17001") ? true : (stryCov_9fa48("17001", "17002"), err)) {
          if (stryMutAct_9fa48("17003")) {
            {}
          } else {
            stryCov_9fa48("17003");
            winston.error(stryMutAct_9fa48("17004") ? `` : (stryCov_9fa48("17004"), `Error creating index ${err.message}`));
            return callback(err);
          }
        }
        winston.info(stryMutAct_9fa48("17005") ? "" : (stryCov_9fa48("17005"), '[database] Checking database indices done!'));
        callback();
      }
    });
  }
};
postgresModule.checkCompatibility = function (callback) {
  if (stryMutAct_9fa48("17006")) {
    {}
  } else {
    stryCov_9fa48("17006");
    const postgresPkg = require('pg/package.json');
    postgresModule.checkCompatibilityVersion(postgresPkg.version, callback);
  }
};
postgresModule.checkCompatibilityVersion = function (version, callback) {
  if (stryMutAct_9fa48("17007")) {
    {}
  } else {
    stryCov_9fa48("17007");
    if (stryMutAct_9fa48("17009") ? false : stryMutAct_9fa48("17008") ? true : (stryCov_9fa48("17008", "17009"), semver.lt(version, stryMutAct_9fa48("17010") ? "" : (stryCov_9fa48("17010"), '7.0.0')))) {
      if (stryMutAct_9fa48("17011")) {
        {}
      } else {
        stryCov_9fa48("17011");
        return callback(new Error(stryMutAct_9fa48("17012") ? "" : (stryCov_9fa48("17012"), 'The `pg` package is out-of-date, please run `./nodebb setup` again.')));
      }
    }
    callback();
  }
};
postgresModule.info = async function (db) {
  if (stryMutAct_9fa48("17013")) {
    {}
  } else {
    stryCov_9fa48("17013");
    if (stryMutAct_9fa48("17016") ? false : stryMutAct_9fa48("17015") ? true : stryMutAct_9fa48("17014") ? db : (stryCov_9fa48("17014", "17015", "17016"), !db)) {
      if (stryMutAct_9fa48("17017")) {
        {}
      } else {
        stryCov_9fa48("17017");
        db = await connection.connect(nconf.get(stryMutAct_9fa48("17018") ? "" : (stryCov_9fa48("17018"), 'postgres')));
      }
    }
    postgresModule.pool = stryMutAct_9fa48("17021") ? postgresModule.pool && db : stryMutAct_9fa48("17020") ? false : stryMutAct_9fa48("17019") ? true : (stryCov_9fa48("17019", "17020", "17021"), postgresModule.pool || db);
    const res = await db.query(stryMutAct_9fa48("17022") ? `` : (stryCov_9fa48("17022"), `
        SELECT true "postgres",
           current_setting('server_version') "version",
             EXTRACT(EPOCH FROM NOW() - pg_postmaster_start_time()) * 1000 "uptime"
    `));
    return stryMutAct_9fa48("17023") ? {} : (stryCov_9fa48("17023"), {
      ...res.rows[0],
      raw: JSON.stringify(res.rows[0], null, 4)
    });
  }
};
postgresModule.close = async function () {
  if (stryMutAct_9fa48("17024")) {
    {}
  } else {
    stryCov_9fa48("17024");
    await postgresModule.pool.end();
  }
};
require('./postgres/main')(postgresModule);
require('./postgres/hash')(postgresModule);
require('./postgres/sets')(postgresModule);
require('./postgres/sorted')(postgresModule);
require('./postgres/list')(postgresModule);
require('./postgres/transaction')(postgresModule);
require('../promisify')(postgresModule, stryMutAct_9fa48("17025") ? [] : (stryCov_9fa48("17025"), [stryMutAct_9fa48("17026") ? "" : (stryCov_9fa48("17026"), 'client'), stryMutAct_9fa48("17027") ? "" : (stryCov_9fa48("17027"), 'sessionStore'), stryMutAct_9fa48("17028") ? "" : (stryCov_9fa48("17028"), 'pool'), stryMutAct_9fa48("17029") ? "" : (stryCov_9fa48("17029"), 'transaction')]));