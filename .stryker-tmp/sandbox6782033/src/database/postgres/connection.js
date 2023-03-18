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
const winston = require('winston');
const _ = require('lodash');
const connection = module.exports;
connection.getConnectionOptions = function (postgres) {
  if (stryMutAct_9fa48("15200")) {
    {}
  } else {
    stryCov_9fa48("15200");
    postgres = stryMutAct_9fa48("15203") ? postgres && nconf.get('postgres') : stryMutAct_9fa48("15202") ? false : stryMutAct_9fa48("15201") ? true : (stryCov_9fa48("15201", "15202", "15203"), postgres || nconf.get(stryMutAct_9fa48("15204") ? "" : (stryCov_9fa48("15204"), 'postgres')));
    // Sensible defaults for PostgreSQL, if not set
    if (stryMutAct_9fa48("15207") ? false : stryMutAct_9fa48("15206") ? true : stryMutAct_9fa48("15205") ? postgres.host : (stryCov_9fa48("15205", "15206", "15207"), !postgres.host)) {
      if (stryMutAct_9fa48("15208")) {
        {}
      } else {
        stryCov_9fa48("15208");
        postgres.host = stryMutAct_9fa48("15209") ? "" : (stryCov_9fa48("15209"), '127.0.0.1');
      }
    }
    if (stryMutAct_9fa48("15212") ? false : stryMutAct_9fa48("15211") ? true : stryMutAct_9fa48("15210") ? postgres.port : (stryCov_9fa48("15210", "15211", "15212"), !postgres.port)) {
      if (stryMutAct_9fa48("15213")) {
        {}
      } else {
        stryCov_9fa48("15213");
        postgres.port = 5432;
      }
    }
    const dbName = postgres.database;
    if (stryMutAct_9fa48("15216") ? dbName === undefined && dbName === '' : stryMutAct_9fa48("15215") ? false : stryMutAct_9fa48("15214") ? true : (stryCov_9fa48("15214", "15215", "15216"), (stryMutAct_9fa48("15218") ? dbName !== undefined : stryMutAct_9fa48("15217") ? false : (stryCov_9fa48("15217", "15218"), dbName === undefined)) || (stryMutAct_9fa48("15220") ? dbName !== '' : stryMutAct_9fa48("15219") ? false : (stryCov_9fa48("15219", "15220"), dbName === (stryMutAct_9fa48("15221") ? "Stryker was here!" : (stryCov_9fa48("15221"), '')))))) {
      if (stryMutAct_9fa48("15222")) {
        {}
      } else {
        stryCov_9fa48("15222");
        winston.warn(stryMutAct_9fa48("15223") ? "" : (stryCov_9fa48("15223"), 'You have no database name, using "nodebb"'));
        postgres.database = stryMutAct_9fa48("15224") ? "" : (stryCov_9fa48("15224"), 'nodebb');
      }
    }
    const connOptions = stryMutAct_9fa48("15225") ? {} : (stryCov_9fa48("15225"), {
      host: postgres.host,
      port: postgres.port,
      user: postgres.username,
      password: postgres.password,
      database: postgres.database,
      ssl: stryMutAct_9fa48("15228") ? String(postgres.ssl) !== 'true' : stryMutAct_9fa48("15227") ? false : stryMutAct_9fa48("15226") ? true : (stryCov_9fa48("15226", "15227", "15228"), String(postgres.ssl) === (stryMutAct_9fa48("15229") ? "" : (stryCov_9fa48("15229"), 'true')))
    });
    return _.merge(connOptions, stryMutAct_9fa48("15232") ? postgres.options && {} : stryMutAct_9fa48("15231") ? false : stryMutAct_9fa48("15230") ? true : (stryCov_9fa48("15230", "15231", "15232"), postgres.options || {}));
  }
};
connection.connect = async function (options) {
  if (stryMutAct_9fa48("15233")) {
    {}
  } else {
    stryCov_9fa48("15233");
    const {
      Pool
    } = require('pg');
    const connOptions = connection.getConnectionOptions(options);
    const db = new Pool(connOptions);
    await db.connect();
    return db;
  }
};
require('../../promisify')(connection);