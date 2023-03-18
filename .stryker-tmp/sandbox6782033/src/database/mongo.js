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
const nconf = require('nconf');
const semver = require('semver');
const prompt = require('prompt');
const utils = require('../utils');
let client;
const connection = require('./mongo/connection');
const mongoModule = module.exports;
function isUriNotSpecified() {
  if (stryMutAct_9fa48("15040")) {
    {}
  } else {
    stryCov_9fa48("15040");
    return stryMutAct_9fa48("15041") ? prompt.history('mongo:uri').value : (stryCov_9fa48("15041"), !prompt.history(stryMutAct_9fa48("15042") ? "" : (stryCov_9fa48("15042"), 'mongo:uri')).value);
  }
}
mongoModule.questions = stryMutAct_9fa48("15043") ? [] : (stryCov_9fa48("15043"), [stryMutAct_9fa48("15044") ? {} : (stryCov_9fa48("15044"), {
  name: stryMutAct_9fa48("15045") ? "" : (stryCov_9fa48("15045"), 'mongo:uri'),
  description: stryMutAct_9fa48("15046") ? "" : (stryCov_9fa48("15046"), 'MongoDB connection URI: (leave blank if you wish to specify host, port, username/password and database individually)\nFormat: mongodb://[username:password@]host1[:port1][,host2[:port2],...[,hostN[:portN]]][/[database][?options]]'),
  default: stryMutAct_9fa48("15049") ? nconf.get('mongo:uri') && '' : stryMutAct_9fa48("15048") ? false : stryMutAct_9fa48("15047") ? true : (stryCov_9fa48("15047", "15048", "15049"), nconf.get(stryMutAct_9fa48("15050") ? "" : (stryCov_9fa48("15050"), 'mongo:uri')) || (stryMutAct_9fa48("15051") ? "Stryker was here!" : (stryCov_9fa48("15051"), ''))),
  hideOnWebInstall: stryMutAct_9fa48("15052") ? false : (stryCov_9fa48("15052"), true)
}), stryMutAct_9fa48("15053") ? {} : (stryCov_9fa48("15053"), {
  name: stryMutAct_9fa48("15054") ? "" : (stryCov_9fa48("15054"), 'mongo:host'),
  description: stryMutAct_9fa48("15055") ? "" : (stryCov_9fa48("15055"), 'Host IP or address of your MongoDB instance'),
  default: stryMutAct_9fa48("15058") ? nconf.get('mongo:host') && '127.0.0.1' : stryMutAct_9fa48("15057") ? false : stryMutAct_9fa48("15056") ? true : (stryCov_9fa48("15056", "15057", "15058"), nconf.get(stryMutAct_9fa48("15059") ? "" : (stryCov_9fa48("15059"), 'mongo:host')) || (stryMutAct_9fa48("15060") ? "" : (stryCov_9fa48("15060"), '127.0.0.1'))),
  ask: isUriNotSpecified
}), stryMutAct_9fa48("15061") ? {} : (stryCov_9fa48("15061"), {
  name: stryMutAct_9fa48("15062") ? "" : (stryCov_9fa48("15062"), 'mongo:port'),
  description: stryMutAct_9fa48("15063") ? "" : (stryCov_9fa48("15063"), 'Host port of your MongoDB instance'),
  default: stryMutAct_9fa48("15066") ? nconf.get('mongo:port') && 27017 : stryMutAct_9fa48("15065") ? false : stryMutAct_9fa48("15064") ? true : (stryCov_9fa48("15064", "15065", "15066"), nconf.get(stryMutAct_9fa48("15067") ? "" : (stryCov_9fa48("15067"), 'mongo:port')) || 27017),
  ask: isUriNotSpecified
}), stryMutAct_9fa48("15068") ? {} : (stryCov_9fa48("15068"), {
  name: stryMutAct_9fa48("15069") ? "" : (stryCov_9fa48("15069"), 'mongo:username'),
  description: stryMutAct_9fa48("15070") ? "" : (stryCov_9fa48("15070"), 'MongoDB username'),
  default: stryMutAct_9fa48("15073") ? nconf.get('mongo:username') && '' : stryMutAct_9fa48("15072") ? false : stryMutAct_9fa48("15071") ? true : (stryCov_9fa48("15071", "15072", "15073"), nconf.get(stryMutAct_9fa48("15074") ? "" : (stryCov_9fa48("15074"), 'mongo:username')) || (stryMutAct_9fa48("15075") ? "Stryker was here!" : (stryCov_9fa48("15075"), ''))),
  ask: isUriNotSpecified
}), stryMutAct_9fa48("15076") ? {} : (stryCov_9fa48("15076"), {
  name: stryMutAct_9fa48("15077") ? "" : (stryCov_9fa48("15077"), 'mongo:password'),
  description: stryMutAct_9fa48("15078") ? "" : (stryCov_9fa48("15078"), 'Password of your MongoDB database'),
  default: stryMutAct_9fa48("15081") ? nconf.get('mongo:password') && '' : stryMutAct_9fa48("15080") ? false : stryMutAct_9fa48("15079") ? true : (stryCov_9fa48("15079", "15080", "15081"), nconf.get(stryMutAct_9fa48("15082") ? "" : (stryCov_9fa48("15082"), 'mongo:password')) || (stryMutAct_9fa48("15083") ? "Stryker was here!" : (stryCov_9fa48("15083"), ''))),
  hidden: stryMutAct_9fa48("15084") ? false : (stryCov_9fa48("15084"), true),
  ask: isUriNotSpecified,
  before: function (value) {
    if (stryMutAct_9fa48("15085")) {
      {}
    } else {
      stryCov_9fa48("15085");
      value = stryMutAct_9fa48("15088") ? (value || nconf.get('mongo:password')) && '' : stryMutAct_9fa48("15087") ? false : stryMutAct_9fa48("15086") ? true : (stryCov_9fa48("15086", "15087", "15088"), (stryMutAct_9fa48("15090") ? value && nconf.get('mongo:password') : stryMutAct_9fa48("15089") ? false : (stryCov_9fa48("15089", "15090"), value || nconf.get(stryMutAct_9fa48("15091") ? "" : (stryCov_9fa48("15091"), 'mongo:password')))) || (stryMutAct_9fa48("15092") ? "Stryker was here!" : (stryCov_9fa48("15092"), '')));
      return value;
    }
  }
}), stryMutAct_9fa48("15093") ? {} : (stryCov_9fa48("15093"), {
  name: stryMutAct_9fa48("15094") ? "" : (stryCov_9fa48("15094"), 'mongo:database'),
  description: stryMutAct_9fa48("15095") ? "" : (stryCov_9fa48("15095"), 'MongoDB database name'),
  default: stryMutAct_9fa48("15098") ? nconf.get('mongo:database') && 'nodebb' : stryMutAct_9fa48("15097") ? false : stryMutAct_9fa48("15096") ? true : (stryCov_9fa48("15096", "15097", "15098"), nconf.get(stryMutAct_9fa48("15099") ? "" : (stryCov_9fa48("15099"), 'mongo:database')) || (stryMutAct_9fa48("15100") ? "" : (stryCov_9fa48("15100"), 'nodebb'))),
  ask: isUriNotSpecified
})]);
mongoModule.init = async function () {
  if (stryMutAct_9fa48("15101")) {
    {}
  } else {
    stryCov_9fa48("15101");
    client = await connection.connect(nconf.get(stryMutAct_9fa48("15102") ? "" : (stryCov_9fa48("15102"), 'mongo')));
    mongoModule.client = client.db();
  }
};
mongoModule.createSessionStore = async function (options) {
  if (stryMutAct_9fa48("15103")) {
    {}
  } else {
    stryCov_9fa48("15103");
    const MongoStore = require('connect-mongo');
    const meta = require('../meta');
    const store = MongoStore.create(stryMutAct_9fa48("15104") ? {} : (stryCov_9fa48("15104"), {
      clientPromise: connection.connect(options),
      ttl: meta.getSessionTTLSeconds()
    }));
    return store;
  }
};
mongoModule.createIndices = async function () {
  if (stryMutAct_9fa48("15105")) {
    {}
  } else {
    stryCov_9fa48("15105");
    if (stryMutAct_9fa48("15108") ? false : stryMutAct_9fa48("15107") ? true : stryMutAct_9fa48("15106") ? mongoModule.client : (stryCov_9fa48("15106", "15107", "15108"), !mongoModule.client)) {
      if (stryMutAct_9fa48("15109")) {
        {}
      } else {
        stryCov_9fa48("15109");
        winston.warn(stryMutAct_9fa48("15110") ? "" : (stryCov_9fa48("15110"), '[database/createIndices] database not initialized'));
        return;
      }
    }
    winston.info(stryMutAct_9fa48("15111") ? "" : (stryCov_9fa48("15111"), '[database] Checking database indices.'));
    const collection = mongoModule.client.collection(stryMutAct_9fa48("15112") ? "" : (stryCov_9fa48("15112"), 'objects'));
    await collection.createIndex(stryMutAct_9fa48("15113") ? {} : (stryCov_9fa48("15113"), {
      _key: 1,
      score: stryMutAct_9fa48("15114") ? +1 : (stryCov_9fa48("15114"), -1)
    }), stryMutAct_9fa48("15115") ? {} : (stryCov_9fa48("15115"), {
      background: stryMutAct_9fa48("15116") ? false : (stryCov_9fa48("15116"), true)
    }));
    await collection.createIndex(stryMutAct_9fa48("15117") ? {} : (stryCov_9fa48("15117"), {
      _key: 1,
      value: stryMutAct_9fa48("15118") ? +1 : (stryCov_9fa48("15118"), -1)
    }), stryMutAct_9fa48("15119") ? {} : (stryCov_9fa48("15119"), {
      background: stryMutAct_9fa48("15120") ? false : (stryCov_9fa48("15120"), true),
      unique: stryMutAct_9fa48("15121") ? false : (stryCov_9fa48("15121"), true),
      sparse: stryMutAct_9fa48("15122") ? false : (stryCov_9fa48("15122"), true)
    }));
    await collection.createIndex(stryMutAct_9fa48("15123") ? {} : (stryCov_9fa48("15123"), {
      expireAt: 1
    }), stryMutAct_9fa48("15124") ? {} : (stryCov_9fa48("15124"), {
      expireAfterSeconds: 0,
      background: stryMutAct_9fa48("15125") ? false : (stryCov_9fa48("15125"), true)
    }));
    winston.info(stryMutAct_9fa48("15126") ? "" : (stryCov_9fa48("15126"), '[database] Checking database indices done!'));
  }
};
mongoModule.checkCompatibility = function (callback) {
  if (stryMutAct_9fa48("15127")) {
    {}
  } else {
    stryCov_9fa48("15127");
    const mongoPkg = require('mongodb/package.json');
    mongoModule.checkCompatibilityVersion(mongoPkg.version, callback);
  }
};
mongoModule.checkCompatibilityVersion = function (version, callback) {
  if (stryMutAct_9fa48("15128")) {
    {}
  } else {
    stryCov_9fa48("15128");
    if (stryMutAct_9fa48("15130") ? false : stryMutAct_9fa48("15129") ? true : (stryCov_9fa48("15129", "15130"), semver.lt(version, stryMutAct_9fa48("15131") ? "" : (stryCov_9fa48("15131"), '2.0.0')))) {
      if (stryMutAct_9fa48("15132")) {
        {}
      } else {
        stryCov_9fa48("15132");
        return callback(new Error(stryMutAct_9fa48("15133") ? "" : (stryCov_9fa48("15133"), 'The `mongodb` package is out-of-date, please run `./nodebb setup` again.')));
      }
    }
    callback();
  }
};
mongoModule.info = async function (db) {
  if (stryMutAct_9fa48("15134")) {
    {}
  } else {
    stryCov_9fa48("15134");
    if (stryMutAct_9fa48("15137") ? false : stryMutAct_9fa48("15136") ? true : stryMutAct_9fa48("15135") ? db : (stryCov_9fa48("15135", "15136", "15137"), !db)) {
      if (stryMutAct_9fa48("15138")) {
        {}
      } else {
        stryCov_9fa48("15138");
        const client = await connection.connect(nconf.get(stryMutAct_9fa48("15139") ? "" : (stryCov_9fa48("15139"), 'mongo')));
        db = client.db();
      }
    }
    mongoModule.client = stryMutAct_9fa48("15142") ? mongoModule.client && db : stryMutAct_9fa48("15141") ? false : stryMutAct_9fa48("15140") ? true : (stryCov_9fa48("15140", "15141", "15142"), mongoModule.client || db);
    let serverStatusError = stryMutAct_9fa48("15143") ? "Stryker was here!" : (stryCov_9fa48("15143"), '');
    async function getServerStatus() {
      if (stryMutAct_9fa48("15144")) {
        {}
      } else {
        stryCov_9fa48("15144");
        try {
          if (stryMutAct_9fa48("15145")) {
            {}
          } else {
            stryCov_9fa48("15145");
            return await db.command(stryMutAct_9fa48("15146") ? {} : (stryCov_9fa48("15146"), {
              serverStatus: 1
            }));
          }
        } catch (err) {
          if (stryMutAct_9fa48("15147")) {
            {}
          } else {
            stryCov_9fa48("15147");
            serverStatusError = err.message;
            // Override mongo error with more human-readable error
            if (stryMutAct_9fa48("15150") ? err.name === 'MongoError' || err.codeName === 'Unauthorized' : stryMutAct_9fa48("15149") ? false : stryMutAct_9fa48("15148") ? true : (stryCov_9fa48("15148", "15149", "15150"), (stryMutAct_9fa48("15152") ? err.name !== 'MongoError' : stryMutAct_9fa48("15151") ? true : (stryCov_9fa48("15151", "15152"), err.name === (stryMutAct_9fa48("15153") ? "" : (stryCov_9fa48("15153"), 'MongoError')))) && (stryMutAct_9fa48("15155") ? err.codeName !== 'Unauthorized' : stryMutAct_9fa48("15154") ? true : (stryCov_9fa48("15154", "15155"), err.codeName === (stryMutAct_9fa48("15156") ? "" : (stryCov_9fa48("15156"), 'Unauthorized')))))) {
              if (stryMutAct_9fa48("15157")) {
                {}
              } else {
                stryCov_9fa48("15157");
                serverStatusError = stryMutAct_9fa48("15158") ? "" : (stryCov_9fa48("15158"), '[[admin/advanced/database:mongo.unauthorized]]');
              }
            }
            winston.error(err.stack);
          }
        }
      }
    }
    let [serverStatus, stats, listCollections] = await Promise.all(stryMutAct_9fa48("15159") ? [] : (stryCov_9fa48("15159"), [getServerStatus(), db.command(stryMutAct_9fa48("15160") ? {} : (stryCov_9fa48("15160"), {
      dbStats: 1
    })), getCollectionStats(db)]));
    stats = stryMutAct_9fa48("15163") ? stats && {} : stryMutAct_9fa48("15162") ? false : stryMutAct_9fa48("15161") ? true : (stryCov_9fa48("15161", "15162", "15163"), stats || {});
    serverStatus = stryMutAct_9fa48("15166") ? serverStatus && {} : stryMutAct_9fa48("15165") ? false : stryMutAct_9fa48("15164") ? true : (stryCov_9fa48("15164", "15165", "15166"), serverStatus || {});
    stats.serverStatusError = serverStatusError;
    const scale = stryMutAct_9fa48("15167") ? 1024 * 1024 / 1024 : (stryCov_9fa48("15167"), (stryMutAct_9fa48("15168") ? 1024 / 1024 : (stryCov_9fa48("15168"), 1024 * 1024)) * 1024);
    listCollections = listCollections.map(stryMutAct_9fa48("15169") ? () => undefined : (stryCov_9fa48("15169"), collectionInfo => stryMutAct_9fa48("15170") ? {} : (stryCov_9fa48("15170"), {
      name: collectionInfo.ns,
      count: collectionInfo.count,
      size: collectionInfo.size,
      avgObjSize: collectionInfo.avgObjSize,
      storageSize: collectionInfo.storageSize,
      totalIndexSize: collectionInfo.totalIndexSize,
      indexSizes: collectionInfo.indexSizes
    })));
    stats.mem = stryMutAct_9fa48("15173") ? serverStatus.mem && {
      resident: 0,
      virtual: 0,
      mapped: 0
    } : stryMutAct_9fa48("15172") ? false : stryMutAct_9fa48("15171") ? true : (stryCov_9fa48("15171", "15172", "15173"), serverStatus.mem || (stryMutAct_9fa48("15174") ? {} : (stryCov_9fa48("15174"), {
      resident: 0,
      virtual: 0,
      mapped: 0
    })));
    stats.mem.resident = (stryMutAct_9fa48("15175") ? stats.mem.resident * 1024 : (stryCov_9fa48("15175"), stats.mem.resident / 1024)).toFixed(3);
    stats.mem.virtual = (stryMutAct_9fa48("15176") ? stats.mem.virtual * 1024 : (stryCov_9fa48("15176"), stats.mem.virtual / 1024)).toFixed(3);
    stats.mem.mapped = (stryMutAct_9fa48("15177") ? stats.mem.mapped * 1024 : (stryCov_9fa48("15177"), stats.mem.mapped / 1024)).toFixed(3);
    stats.collectionData = listCollections;
    stats.network = stryMutAct_9fa48("15180") ? serverStatus.network && {
      bytesIn: 0,
      bytesOut: 0,
      numRequests: 0
    } : stryMutAct_9fa48("15179") ? false : stryMutAct_9fa48("15178") ? true : (stryCov_9fa48("15178", "15179", "15180"), serverStatus.network || (stryMutAct_9fa48("15181") ? {} : (stryCov_9fa48("15181"), {
      bytesIn: 0,
      bytesOut: 0,
      numRequests: 0
    })));
    stats.network.bytesIn = (stryMutAct_9fa48("15182") ? stats.network.bytesIn * scale : (stryCov_9fa48("15182"), stats.network.bytesIn / scale)).toFixed(3);
    stats.network.bytesOut = (stryMutAct_9fa48("15183") ? stats.network.bytesOut * scale : (stryCov_9fa48("15183"), stats.network.bytesOut / scale)).toFixed(3);
    stats.network.numRequests = utils.addCommas(stats.network.numRequests);
    stats.raw = JSON.stringify(stats, null, 4);
    stats.avgObjSize = stats.avgObjSize.toFixed(2);
    stats.dataSize = (stryMutAct_9fa48("15184") ? stats.dataSize * scale : (stryCov_9fa48("15184"), stats.dataSize / scale)).toFixed(3);
    stats.storageSize = (stryMutAct_9fa48("15185") ? stats.storageSize * scale : (stryCov_9fa48("15185"), stats.storageSize / scale)).toFixed(3);
    stats.fileSize = stats.fileSize ? (stryMutAct_9fa48("15186") ? stats.fileSize * scale : (stryCov_9fa48("15186"), stats.fileSize / scale)).toFixed(3) : 0;
    stats.indexSize = (stryMutAct_9fa48("15187") ? stats.indexSize * scale : (stryCov_9fa48("15187"), stats.indexSize / scale)).toFixed(3);
    stats.storageEngine = serverStatus.storageEngine ? serverStatus.storageEngine.name : stryMutAct_9fa48("15188") ? "" : (stryCov_9fa48("15188"), 'mmapv1');
    stats.host = serverStatus.host;
    stats.version = serverStatus.version;
    stats.uptime = serverStatus.uptime;
    stats.mongo = stryMutAct_9fa48("15189") ? false : (stryCov_9fa48("15189"), true);
    return stats;
  }
};
async function getCollectionStats(db) {
  if (stryMutAct_9fa48("15190")) {
    {}
  } else {
    stryCov_9fa48("15190");
    const items = await db.listCollections().toArray();
    return await Promise.all(items.map(stryMutAct_9fa48("15191") ? () => undefined : (stryCov_9fa48("15191"), collection => db.collection(collection.name).stats())));
  }
}
mongoModule.close = function (callback) {
  if (stryMutAct_9fa48("15192")) {
    {}
  } else {
    stryCov_9fa48("15192");
    callback = stryMutAct_9fa48("15195") ? callback && function () {} : stryMutAct_9fa48("15194") ? false : stryMutAct_9fa48("15193") ? true : (stryCov_9fa48("15193", "15194", "15195"), callback || function () {});
    client.close(stryMutAct_9fa48("15196") ? () => undefined : (stryCov_9fa48("15196"), err => callback(err)));
  }
};
require('./mongo/main')(mongoModule);
require('./mongo/hash')(mongoModule);
require('./mongo/sets')(mongoModule);
require('./mongo/sorted')(mongoModule);
require('./mongo/list')(mongoModule);
require('./mongo/transaction')(mongoModule);
require('../promisify')(mongoModule, stryMutAct_9fa48("15197") ? [] : (stryCov_9fa48("15197"), [stryMutAct_9fa48("15198") ? "" : (stryCov_9fa48("15198"), 'client'), stryMutAct_9fa48("15199") ? "" : (stryCov_9fa48("15199"), 'sessionStore')]));