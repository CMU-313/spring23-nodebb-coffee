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
connection.getConnectionString = function (mongo) {
  if (stryMutAct_9fa48("13023")) {
    {}
  } else {
    stryCov_9fa48("13023");
    mongo = stryMutAct_9fa48("13026") ? mongo && nconf.get('mongo') : stryMutAct_9fa48("13025") ? false : stryMutAct_9fa48("13024") ? true : (stryCov_9fa48("13024", "13025", "13026"), mongo || nconf.get(stryMutAct_9fa48("13027") ? "" : (stryCov_9fa48("13027"), 'mongo')));
    let usernamePassword = stryMutAct_9fa48("13028") ? "Stryker was here!" : (stryCov_9fa48("13028"), '');
    const uri = stryMutAct_9fa48("13031") ? mongo.uri && '' : stryMutAct_9fa48("13030") ? false : stryMutAct_9fa48("13029") ? true : (stryCov_9fa48("13029", "13030", "13031"), mongo.uri || (stryMutAct_9fa48("13032") ? "Stryker was here!" : (stryCov_9fa48("13032"), '')));
    if (stryMutAct_9fa48("13035") ? mongo.username || mongo.password : stryMutAct_9fa48("13034") ? false : stryMutAct_9fa48("13033") ? true : (stryCov_9fa48("13033", "13034", "13035"), mongo.username && mongo.password)) {
      if (stryMutAct_9fa48("13036")) {
        {}
      } else {
        stryCov_9fa48("13036");
        usernamePassword = stryMutAct_9fa48("13037") ? `` : (stryCov_9fa48("13037"), `${mongo.username}:${encodeURIComponent(mongo.password)}@`);
      }
    } else if (stryMutAct_9fa48("13040") ? !uri.includes('@') && !uri.slice(uri.indexOf('://') + 3, uri.indexOf('@')) : stryMutAct_9fa48("13039") ? false : stryMutAct_9fa48("13038") ? true : (stryCov_9fa48("13038", "13039", "13040"), (stryMutAct_9fa48("13041") ? uri.includes('@') : (stryCov_9fa48("13041"), !uri.includes(stryMutAct_9fa48("13042") ? "" : (stryCov_9fa48("13042"), '@')))) || (stryMutAct_9fa48("13043") ? uri.slice(uri.indexOf('://') + 3, uri.indexOf('@')) : (stryCov_9fa48("13043"), !(stryMutAct_9fa48("13044") ? uri : (stryCov_9fa48("13044"), uri.slice(stryMutAct_9fa48("13045") ? uri.indexOf('://') - 3 : (stryCov_9fa48("13045"), uri.indexOf(stryMutAct_9fa48("13046") ? "" : (stryCov_9fa48("13046"), '://')) + 3), uri.indexOf(stryMutAct_9fa48("13047") ? "" : (stryCov_9fa48("13047"), '@'))))))))) {
      if (stryMutAct_9fa48("13048")) {
        {}
      } else {
        stryCov_9fa48("13048");
        winston.warn(stryMutAct_9fa48("13049") ? "" : (stryCov_9fa48("13049"), 'You have no mongo username/password setup!'));
      }
    }

    // Sensible defaults for Mongo, if not set
    if (stryMutAct_9fa48("13052") ? false : stryMutAct_9fa48("13051") ? true : stryMutAct_9fa48("13050") ? mongo.host : (stryCov_9fa48("13050", "13051", "13052"), !mongo.host)) {
      if (stryMutAct_9fa48("13053")) {
        {}
      } else {
        stryCov_9fa48("13053");
        mongo.host = stryMutAct_9fa48("13054") ? "" : (stryCov_9fa48("13054"), '127.0.0.1');
      }
    }
    if (stryMutAct_9fa48("13057") ? false : stryMutAct_9fa48("13056") ? true : stryMutAct_9fa48("13055") ? mongo.port : (stryCov_9fa48("13055", "13056", "13057"), !mongo.port)) {
      if (stryMutAct_9fa48("13058")) {
        {}
      } else {
        stryCov_9fa48("13058");
        mongo.port = 27017;
      }
    }
    const dbName = mongo.database;
    if (stryMutAct_9fa48("13061") ? dbName === undefined && dbName === '' : stryMutAct_9fa48("13060") ? false : stryMutAct_9fa48("13059") ? true : (stryCov_9fa48("13059", "13060", "13061"), (stryMutAct_9fa48("13063") ? dbName !== undefined : stryMutAct_9fa48("13062") ? false : (stryCov_9fa48("13062", "13063"), dbName === undefined)) || (stryMutAct_9fa48("13065") ? dbName !== '' : stryMutAct_9fa48("13064") ? false : (stryCov_9fa48("13064", "13065"), dbName === (stryMutAct_9fa48("13066") ? "Stryker was here!" : (stryCov_9fa48("13066"), '')))))) {
      if (stryMutAct_9fa48("13067")) {
        {}
      } else {
        stryCov_9fa48("13067");
        winston.warn(stryMutAct_9fa48("13068") ? "" : (stryCov_9fa48("13068"), 'You have no database name, using "nodebb"'));
        mongo.database = stryMutAct_9fa48("13069") ? "" : (stryCov_9fa48("13069"), 'nodebb');
      }
    }
    const hosts = mongo.host.split(stryMutAct_9fa48("13070") ? "" : (stryCov_9fa48("13070"), ','));
    const ports = mongo.port.toString().split(stryMutAct_9fa48("13071") ? "" : (stryCov_9fa48("13071"), ','));
    const servers = stryMutAct_9fa48("13072") ? ["Stryker was here"] : (stryCov_9fa48("13072"), []);
    for (let i = 0; stryMutAct_9fa48("13075") ? i >= hosts.length : stryMutAct_9fa48("13074") ? i <= hosts.length : stryMutAct_9fa48("13073") ? false : (stryCov_9fa48("13073", "13074", "13075"), i < hosts.length); stryMutAct_9fa48("13076") ? i -= 1 : (stryCov_9fa48("13076"), i += 1)) {
      if (stryMutAct_9fa48("13077")) {
        {}
      } else {
        stryCov_9fa48("13077");
        servers.push(stryMutAct_9fa48("13078") ? `` : (stryCov_9fa48("13078"), `${hosts[i]}:${ports[i]}`));
      }
    }
    return stryMutAct_9fa48("13081") ? uri && `mongodb://${usernamePassword}${servers.join()}/${mongo.database}` : stryMutAct_9fa48("13080") ? false : stryMutAct_9fa48("13079") ? true : (stryCov_9fa48("13079", "13080", "13081"), uri || (stryMutAct_9fa48("13082") ? `` : (stryCov_9fa48("13082"), `mongodb://${usernamePassword}${servers.join()}/${mongo.database}`)));
  }
};
connection.getConnectionOptions = function (mongo) {
  if (stryMutAct_9fa48("13083")) {
    {}
  } else {
    stryCov_9fa48("13083");
    mongo = stryMutAct_9fa48("13086") ? mongo && nconf.get('mongo') : stryMutAct_9fa48("13085") ? false : stryMutAct_9fa48("13084") ? true : (stryCov_9fa48("13084", "13085", "13086"), mongo || nconf.get(stryMutAct_9fa48("13087") ? "" : (stryCov_9fa48("13087"), 'mongo')));
    const connOptions = stryMutAct_9fa48("13088") ? {} : (stryCov_9fa48("13088"), {
      maxPoolSize: 10,
      minPoolSize: 3,
      connectTimeoutMS: 90000
    });
    return _.merge(connOptions, stryMutAct_9fa48("13091") ? mongo.options && {} : stryMutAct_9fa48("13090") ? false : stryMutAct_9fa48("13089") ? true : (stryCov_9fa48("13089", "13090", "13091"), mongo.options || {}));
  }
};
connection.connect = async function (options) {
  if (stryMutAct_9fa48("13092")) {
    {}
  } else {
    stryCov_9fa48("13092");
    const mongoClient = require('mongodb').MongoClient;
    const connString = connection.getConnectionString(options);
    const connOptions = connection.getConnectionOptions(options);
    return await mongoClient.connect(connString, connOptions);
  }
};