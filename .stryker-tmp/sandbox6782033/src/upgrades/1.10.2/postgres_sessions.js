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
const nconf = require('nconf');
const db = require('../../database');
module.exports = stryMutAct_9fa48("42506") ? {} : (stryCov_9fa48("42506"), {
  name: stryMutAct_9fa48("42507") ? "" : (stryCov_9fa48("42507"), 'Optimize PostgreSQL sessions'),
  timestamp: Date.UTC(2018, 9, 1),
  method: function (callback) {
    if (stryMutAct_9fa48("42508")) {
      {}
    } else {
      stryCov_9fa48("42508");
      if (stryMutAct_9fa48("42511") ? nconf.get('database') !== 'postgres' && nconf.get('redis') : stryMutAct_9fa48("42510") ? false : stryMutAct_9fa48("42509") ? true : (stryCov_9fa48("42509", "42510", "42511"), (stryMutAct_9fa48("42513") ? nconf.get('database') === 'postgres' : stryMutAct_9fa48("42512") ? false : (stryCov_9fa48("42512", "42513"), nconf.get(stryMutAct_9fa48("42514") ? "" : (stryCov_9fa48("42514"), 'database')) !== (stryMutAct_9fa48("42515") ? "" : (stryCov_9fa48("42515"), 'postgres')))) || nconf.get(stryMutAct_9fa48("42516") ? "" : (stryCov_9fa48("42516"), 'redis')))) {
        if (stryMutAct_9fa48("42517")) {
          {}
        } else {
          stryCov_9fa48("42517");
          return callback();
        }
      }
      db.pool.query(stryMutAct_9fa48("42518") ? `` : (stryCov_9fa48("42518"), `
BEGIN TRANSACTION;

CREATE TABLE IF NOT EXISTS "session" (
    "sid" CHAR(32) NOT NULL
        COLLATE "C"
        PRIMARY KEY,
    "sess" JSONB NOT NULL,
    "expire" TIMESTAMPTZ NOT NULL
) WITHOUT OIDS;

CREATE INDEX IF NOT EXISTS "session_expire_idx" ON "session"("expire");

ALTER TABLE "session"
    ALTER "sid" TYPE CHAR(32) COLLATE "C",
    ALTER "sid" SET STORAGE PLAIN,
    ALTER "sess" TYPE JSONB,
    ALTER "expire" TYPE TIMESTAMPTZ,
    CLUSTER ON "session_expire_idx";

CLUSTER "session";
ANALYZE "session";

COMMIT;`), err => {
        if (stryMutAct_9fa48("42519")) {
          {}
        } else {
          stryCov_9fa48("42519");
          callback(err);
        }
      });
    }
  }
});