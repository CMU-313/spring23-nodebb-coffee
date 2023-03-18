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
const Redis = require('ioredis');
const winston = require('winston');
const connection = module.exports;
connection.connect = async function (options) {
  if (stryMutAct_9fa48("17030")) {
    {}
  } else {
    stryCov_9fa48("17030");
    return new Promise((resolve, reject) => {
      if (stryMutAct_9fa48("17031")) {
        {}
      } else {
        stryCov_9fa48("17031");
        options = stryMutAct_9fa48("17034") ? options && nconf.get('redis') : stryMutAct_9fa48("17033") ? false : stryMutAct_9fa48("17032") ? true : (stryCov_9fa48("17032", "17033", "17034"), options || nconf.get(stryMutAct_9fa48("17035") ? "" : (stryCov_9fa48("17035"), 'redis')));
        const redis_socket_or_host = options.host;
        let cxn;
        if (stryMutAct_9fa48("17037") ? false : stryMutAct_9fa48("17036") ? true : (stryCov_9fa48("17036", "17037"), options.cluster)) {
          if (stryMutAct_9fa48("17038")) {
            {}
          } else {
            stryCov_9fa48("17038");
            cxn = new Redis.Cluster(options.cluster, options.options);
          }
        } else if (stryMutAct_9fa48("17040") ? false : stryMutAct_9fa48("17039") ? true : (stryCov_9fa48("17039", "17040"), options.sentinels)) {
          if (stryMutAct_9fa48("17041")) {
            {}
          } else {
            stryCov_9fa48("17041");
            cxn = new Redis(stryMutAct_9fa48("17042") ? {} : (stryCov_9fa48("17042"), {
              sentinels: options.sentinels,
              ...options.options
            }));
          }
        } else if (stryMutAct_9fa48("17045") ? redis_socket_or_host || String(redis_socket_or_host).indexOf('/') >= 0 : stryMutAct_9fa48("17044") ? false : stryMutAct_9fa48("17043") ? true : (stryCov_9fa48("17043", "17044", "17045"), redis_socket_or_host && (stryMutAct_9fa48("17048") ? String(redis_socket_or_host).indexOf('/') < 0 : stryMutAct_9fa48("17047") ? String(redis_socket_or_host).indexOf('/') > 0 : stryMutAct_9fa48("17046") ? true : (stryCov_9fa48("17046", "17047", "17048"), String(redis_socket_or_host).indexOf(stryMutAct_9fa48("17049") ? "" : (stryCov_9fa48("17049"), '/')) >= 0)))) {
          if (stryMutAct_9fa48("17050")) {
            {}
          } else {
            stryCov_9fa48("17050");
            // If redis.host contains a path name character, use the unix dom sock connection. ie, /tmp/redis.sock
            cxn = new Redis(stryMutAct_9fa48("17051") ? {} : (stryCov_9fa48("17051"), {
              ...options.options,
              path: redis_socket_or_host,
              password: options.password,
              db: options.database
            }));
          }
        } else {
          if (stryMutAct_9fa48("17052")) {
            {}
          } else {
            stryCov_9fa48("17052");
            // Else, connect over tcp/ip
            cxn = new Redis(stryMutAct_9fa48("17053") ? {} : (stryCov_9fa48("17053"), {
              ...options.options,
              host: redis_socket_or_host,
              port: options.port,
              password: options.password,
              db: options.database
            }));
          }
        }
        const dbIdx = parseInt(options.database, 10);
        if (stryMutAct_9fa48("17056") ? false : stryMutAct_9fa48("17055") ? true : stryMutAct_9fa48("17054") ? dbIdx >= 0 : (stryCov_9fa48("17054", "17055", "17056"), !(stryMutAct_9fa48("17060") ? dbIdx < 0 : stryMutAct_9fa48("17059") ? dbIdx > 0 : stryMutAct_9fa48("17058") ? false : stryMutAct_9fa48("17057") ? true : (stryCov_9fa48("17057", "17058", "17059", "17060"), dbIdx >= 0)))) {
          if (stryMutAct_9fa48("17061")) {
            {}
          } else {
            stryCov_9fa48("17061");
            throw new Error(stryMutAct_9fa48("17062") ? "" : (stryCov_9fa48("17062"), '[[error:no-database-selected]]'));
          }
        }
        cxn.on(stryMutAct_9fa48("17063") ? "" : (stryCov_9fa48("17063"), 'error'), err => {
          if (stryMutAct_9fa48("17064")) {
            {}
          } else {
            stryCov_9fa48("17064");
            winston.error(err.stack);
            reject(err);
          }
        });
        cxn.on(stryMutAct_9fa48("17065") ? "" : (stryCov_9fa48("17065"), 'ready'), () => {
          if (stryMutAct_9fa48("17066")) {
            {}
          } else {
            stryCov_9fa48("17066");
            // back-compat with node_redis
            cxn.batch = cxn.pipeline;
            resolve(cxn);
          }
        });
        if (stryMutAct_9fa48("17068") ? false : stryMutAct_9fa48("17067") ? true : (stryCov_9fa48("17067", "17068"), options.password)) {
          if (stryMutAct_9fa48("17069")) {
            {}
          } else {
            stryCov_9fa48("17069");
            cxn.auth(options.password);
          }
        }
      }
    });
  }
};
require('../../promisify')(connection);