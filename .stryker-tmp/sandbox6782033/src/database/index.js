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
const databaseName = nconf.get(stryMutAct_9fa48("12986") ? "" : (stryCov_9fa48("12986"), 'database'));
const winston = require('winston');
if (stryMutAct_9fa48("12989") ? false : stryMutAct_9fa48("12988") ? true : stryMutAct_9fa48("12987") ? databaseName : (stryCov_9fa48("12987", "12988", "12989"), !databaseName)) {
  if (stryMutAct_9fa48("12990")) {
    {}
  } else {
    stryCov_9fa48("12990");
    winston.error(new Error(stryMutAct_9fa48("12991") ? "" : (stryCov_9fa48("12991"), 'Database type not set! Run ./nodebb setup')));
    process.exit();
  }
}
const primaryDB = require(stryMutAct_9fa48("12992") ? `` : (stryCov_9fa48("12992"), `./${databaseName}`));
primaryDB.parseIntFields = function (data, intFields, requestedFields) {
  if (stryMutAct_9fa48("12993")) {
    {}
  } else {
    stryCov_9fa48("12993");
    intFields.forEach(field => {
      if (stryMutAct_9fa48("12994")) {
        {}
      } else {
        stryCov_9fa48("12994");
        if (stryMutAct_9fa48("12997") ? (!requestedFields || !requestedFields.length) && requestedFields.includes(field) : stryMutAct_9fa48("12996") ? false : stryMutAct_9fa48("12995") ? true : (stryCov_9fa48("12995", "12996", "12997"), (stryMutAct_9fa48("12999") ? !requestedFields && !requestedFields.length : stryMutAct_9fa48("12998") ? false : (stryCov_9fa48("12998", "12999"), (stryMutAct_9fa48("13000") ? requestedFields : (stryCov_9fa48("13000"), !requestedFields)) || (stryMutAct_9fa48("13001") ? requestedFields.length : (stryCov_9fa48("13001"), !requestedFields.length)))) || requestedFields.includes(field))) {
          if (stryMutAct_9fa48("13002")) {
            {}
          } else {
            stryCov_9fa48("13002");
            data[field] = stryMutAct_9fa48("13005") ? parseInt(data[field], 10) && 0 : stryMutAct_9fa48("13004") ? false : stryMutAct_9fa48("13003") ? true : (stryCov_9fa48("13003", "13004", "13005"), parseInt(data[field], 10) || 0);
          }
        }
      }
    });
  }
};
primaryDB.initSessionStore = async function () {
  if (stryMutAct_9fa48("13006")) {
    {}
  } else {
    stryCov_9fa48("13006");
    const sessionStoreConfig = stryMutAct_9fa48("13009") ? (nconf.get('session_store') || nconf.get('redis')) && nconf.get(databaseName) : stryMutAct_9fa48("13008") ? false : stryMutAct_9fa48("13007") ? true : (stryCov_9fa48("13007", "13008", "13009"), (stryMutAct_9fa48("13011") ? nconf.get('session_store') && nconf.get('redis') : stryMutAct_9fa48("13010") ? false : (stryCov_9fa48("13010", "13011"), nconf.get(stryMutAct_9fa48("13012") ? "" : (stryCov_9fa48("13012"), 'session_store')) || nconf.get(stryMutAct_9fa48("13013") ? "" : (stryCov_9fa48("13013"), 'redis')))) || nconf.get(databaseName));
    let sessionStoreDB = primaryDB;
    if (stryMutAct_9fa48("13015") ? false : stryMutAct_9fa48("13014") ? true : (stryCov_9fa48("13014", "13015"), nconf.get(stryMutAct_9fa48("13016") ? "" : (stryCov_9fa48("13016"), 'session_store')))) {
      if (stryMutAct_9fa48("13017")) {
        {}
      } else {
        stryCov_9fa48("13017");
        sessionStoreDB = require(stryMutAct_9fa48("13018") ? `` : (stryCov_9fa48("13018"), `./${sessionStoreConfig.name}`));
      }
    } else if (stryMutAct_9fa48("13020") ? false : stryMutAct_9fa48("13019") ? true : (stryCov_9fa48("13019", "13020"), nconf.get(stryMutAct_9fa48("13021") ? "" : (stryCov_9fa48("13021"), 'redis')))) {
      if (stryMutAct_9fa48("13022")) {
        {}
      } else {
        stryCov_9fa48("13022");
        // if redis is specified, use it as session store over others
        sessionStoreDB = require('./redis');
      }
    }
    primaryDB.sessionStore = await sessionStoreDB.createSessionStore(sessionStoreConfig);
  }
};
module.exports = primaryDB;