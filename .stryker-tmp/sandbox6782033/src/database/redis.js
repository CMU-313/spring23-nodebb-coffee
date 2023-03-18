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
const semver = require('semver');
const session = require('express-session');
const connection = require('./redis/connection');
const redisModule = module.exports;
redisModule.questions = stryMutAct_9fa48("18010") ? [] : (stryCov_9fa48("18010"), [stryMutAct_9fa48("18011") ? {} : (stryCov_9fa48("18011"), {
  name: stryMutAct_9fa48("18012") ? "" : (stryCov_9fa48("18012"), 'redis:host'),
  description: stryMutAct_9fa48("18013") ? "" : (stryCov_9fa48("18013"), 'Host IP or address of your Redis instance'),
  default: stryMutAct_9fa48("18016") ? nconf.get('redis:host') && '127.0.0.1' : stryMutAct_9fa48("18015") ? false : stryMutAct_9fa48("18014") ? true : (stryCov_9fa48("18014", "18015", "18016"), nconf.get(stryMutAct_9fa48("18017") ? "" : (stryCov_9fa48("18017"), 'redis:host')) || (stryMutAct_9fa48("18018") ? "" : (stryCov_9fa48("18018"), '127.0.0.1')))
}), stryMutAct_9fa48("18019") ? {} : (stryCov_9fa48("18019"), {
  name: stryMutAct_9fa48("18020") ? "" : (stryCov_9fa48("18020"), 'redis:port'),
  description: stryMutAct_9fa48("18021") ? "" : (stryCov_9fa48("18021"), 'Host port of your Redis instance'),
  default: stryMutAct_9fa48("18024") ? nconf.get('redis:port') && 6379 : stryMutAct_9fa48("18023") ? false : stryMutAct_9fa48("18022") ? true : (stryCov_9fa48("18022", "18023", "18024"), nconf.get(stryMutAct_9fa48("18025") ? "" : (stryCov_9fa48("18025"), 'redis:port')) || 6379)
}), stryMutAct_9fa48("18026") ? {} : (stryCov_9fa48("18026"), {
  name: stryMutAct_9fa48("18027") ? "" : (stryCov_9fa48("18027"), 'redis:password'),
  description: stryMutAct_9fa48("18028") ? "" : (stryCov_9fa48("18028"), 'Password of your Redis database'),
  hidden: stryMutAct_9fa48("18029") ? false : (stryCov_9fa48("18029"), true),
  default: stryMutAct_9fa48("18032") ? nconf.get('redis:password') && '' : stryMutAct_9fa48("18031") ? false : stryMutAct_9fa48("18030") ? true : (stryCov_9fa48("18030", "18031", "18032"), nconf.get(stryMutAct_9fa48("18033") ? "" : (stryCov_9fa48("18033"), 'redis:password')) || (stryMutAct_9fa48("18034") ? "Stryker was here!" : (stryCov_9fa48("18034"), ''))),
  before: function (value) {
    if (stryMutAct_9fa48("18035")) {
      {}
    } else {
      stryCov_9fa48("18035");
      value = stryMutAct_9fa48("18038") ? (value || nconf.get('redis:password')) && '' : stryMutAct_9fa48("18037") ? false : stryMutAct_9fa48("18036") ? true : (stryCov_9fa48("18036", "18037", "18038"), (stryMutAct_9fa48("18040") ? value && nconf.get('redis:password') : stryMutAct_9fa48("18039") ? false : (stryCov_9fa48("18039", "18040"), value || nconf.get(stryMutAct_9fa48("18041") ? "" : (stryCov_9fa48("18041"), 'redis:password')))) || (stryMutAct_9fa48("18042") ? "Stryker was here!" : (stryCov_9fa48("18042"), '')));
      return value;
    }
  }
}), stryMutAct_9fa48("18043") ? {} : (stryCov_9fa48("18043"), {
  name: stryMutAct_9fa48("18044") ? "" : (stryCov_9fa48("18044"), 'redis:database'),
  description: stryMutAct_9fa48("18045") ? "" : (stryCov_9fa48("18045"), 'Which database to use (0..n)'),
  default: stryMutAct_9fa48("18048") ? nconf.get('redis:database') && 0 : stryMutAct_9fa48("18047") ? false : stryMutAct_9fa48("18046") ? true : (stryCov_9fa48("18046", "18047", "18048"), nconf.get(stryMutAct_9fa48("18049") ? "" : (stryCov_9fa48("18049"), 'redis:database')) || 0)
})]);
redisModule.init = async function () {
  if (stryMutAct_9fa48("18050")) {
    {}
  } else {
    stryCov_9fa48("18050");
    redisModule.client = await connection.connect(nconf.get(stryMutAct_9fa48("18051") ? "" : (stryCov_9fa48("18051"), 'redis')));
  }
};
redisModule.createSessionStore = async function (options) {
  if (stryMutAct_9fa48("18052")) {
    {}
  } else {
    stryCov_9fa48("18052");
    const meta = require('../meta');
    const sessionStore = require('connect-redis')(session);
    const client = await connection.connect(options);
    const store = new sessionStore(stryMutAct_9fa48("18053") ? {} : (stryCov_9fa48("18053"), {
      client: client,
      ttl: meta.getSessionTTLSeconds()
    }));
    return store;
  }
};
redisModule.checkCompatibility = async function () {
  if (stryMutAct_9fa48("18054")) {
    {}
  } else {
    stryCov_9fa48("18054");
    const info = await redisModule.info(redisModule.client);
    await redisModule.checkCompatibilityVersion(info.redis_version);
  }
};
redisModule.checkCompatibilityVersion = function (version, callback) {
  if (stryMutAct_9fa48("18055")) {
    {}
  } else {
    stryCov_9fa48("18055");
    if (stryMutAct_9fa48("18057") ? false : stryMutAct_9fa48("18056") ? true : (stryCov_9fa48("18056", "18057"), semver.lt(version, stryMutAct_9fa48("18058") ? "" : (stryCov_9fa48("18058"), '2.8.9')))) {
      if (stryMutAct_9fa48("18059")) {
        {}
      } else {
        stryCov_9fa48("18059");
        callback(new Error(stryMutAct_9fa48("18060") ? "" : (stryCov_9fa48("18060"), 'Your Redis version is not new enough to support NodeBB, please upgrade Redis to v2.8.9 or higher.')));
      }
    }
    callback();
  }
};
redisModule.close = async function () {
  if (stryMutAct_9fa48("18061")) {
    {}
  } else {
    stryCov_9fa48("18061");
    await redisModule.client.quit();
  }
};
redisModule.info = async function (cxn) {
  if (stryMutAct_9fa48("18062")) {
    {}
  } else {
    stryCov_9fa48("18062");
    if (stryMutAct_9fa48("18065") ? false : stryMutAct_9fa48("18064") ? true : stryMutAct_9fa48("18063") ? cxn : (stryCov_9fa48("18063", "18064", "18065"), !cxn)) {
      if (stryMutAct_9fa48("18066")) {
        {}
      } else {
        stryCov_9fa48("18066");
        cxn = await connection.connect(nconf.get(stryMutAct_9fa48("18067") ? "" : (stryCov_9fa48("18067"), 'redis')));
      }
    }
    redisModule.client = stryMutAct_9fa48("18070") ? redisModule.client && cxn : stryMutAct_9fa48("18069") ? false : stryMutAct_9fa48("18068") ? true : (stryCov_9fa48("18068", "18069", "18070"), redisModule.client || cxn);
    const data = await cxn.info();
    const lines = stryMutAct_9fa48("18071") ? data.toString().split('\r\n') : (stryCov_9fa48("18071"), data.toString().split(stryMutAct_9fa48("18072") ? "" : (stryCov_9fa48("18072"), '\r\n')).sort());
    const redisData = {};
    lines.forEach(line => {
      if (stryMutAct_9fa48("18073")) {
        {}
      } else {
        stryCov_9fa48("18073");
        const parts = line.split(stryMutAct_9fa48("18074") ? "" : (stryCov_9fa48("18074"), ':'));
        if (stryMutAct_9fa48("18076") ? false : stryMutAct_9fa48("18075") ? true : (stryCov_9fa48("18075", "18076"), parts[1])) {
          if (stryMutAct_9fa48("18077")) {
            {}
          } else {
            stryCov_9fa48("18077");
            redisData[parts[0]] = parts[1];
          }
        }
      }
    });
    const keyInfo = redisData[stryMutAct_9fa48("18078") ? `` : (stryCov_9fa48("18078"), `db${nconf.get(stryMutAct_9fa48("18079") ? "" : (stryCov_9fa48("18079"), 'redis:database'))}`)];
    if (stryMutAct_9fa48("18081") ? false : stryMutAct_9fa48("18080") ? true : (stryCov_9fa48("18080", "18081"), keyInfo)) {
      if (stryMutAct_9fa48("18082")) {
        {}
      } else {
        stryCov_9fa48("18082");
        const split = keyInfo.split(stryMutAct_9fa48("18083") ? "" : (stryCov_9fa48("18083"), ','));
        redisData.keys = (stryMutAct_9fa48("18086") ? split[0] && '' : stryMutAct_9fa48("18085") ? false : stryMutAct_9fa48("18084") ? true : (stryCov_9fa48("18084", "18085", "18086"), split[0] || (stryMutAct_9fa48("18087") ? "Stryker was here!" : (stryCov_9fa48("18087"), '')))).replace(stryMutAct_9fa48("18088") ? "" : (stryCov_9fa48("18088"), 'keys='), stryMutAct_9fa48("18089") ? "Stryker was here!" : (stryCov_9fa48("18089"), ''));
        redisData.expires = (stryMutAct_9fa48("18092") ? split[1] && '' : stryMutAct_9fa48("18091") ? false : stryMutAct_9fa48("18090") ? true : (stryCov_9fa48("18090", "18091", "18092"), split[1] || (stryMutAct_9fa48("18093") ? "Stryker was here!" : (stryCov_9fa48("18093"), '')))).replace(stryMutAct_9fa48("18094") ? "" : (stryCov_9fa48("18094"), 'expires='), stryMutAct_9fa48("18095") ? "Stryker was here!" : (stryCov_9fa48("18095"), ''));
        redisData.avg_ttl = (stryMutAct_9fa48("18098") ? split[2] && '' : stryMutAct_9fa48("18097") ? false : stryMutAct_9fa48("18096") ? true : (stryCov_9fa48("18096", "18097", "18098"), split[2] || (stryMutAct_9fa48("18099") ? "Stryker was here!" : (stryCov_9fa48("18099"), '')))).replace(stryMutAct_9fa48("18100") ? "" : (stryCov_9fa48("18100"), 'avg_ttl='), stryMutAct_9fa48("18101") ? "Stryker was here!" : (stryCov_9fa48("18101"), ''));
      }
    }
    redisData.instantaneous_input = (stryMutAct_9fa48("18102") ? redisData.instantaneous_input_kbps * 1024 : (stryCov_9fa48("18102"), redisData.instantaneous_input_kbps / 1024)).toFixed(3);
    redisData.instantaneous_output = (stryMutAct_9fa48("18103") ? redisData.instantaneous_output_kbps * 1024 : (stryCov_9fa48("18103"), redisData.instantaneous_output_kbps / 1024)).toFixed(3);
    redisData.total_net_input = (stryMutAct_9fa48("18104") ? redisData.total_net_input_bytes * (1024 * 1024 * 1024) : (stryCov_9fa48("18104"), redisData.total_net_input_bytes / (stryMutAct_9fa48("18105") ? 1024 * 1024 / 1024 : (stryCov_9fa48("18105"), (stryMutAct_9fa48("18106") ? 1024 / 1024 : (stryCov_9fa48("18106"), 1024 * 1024)) * 1024)))).toFixed(3);
    redisData.total_net_output = (stryMutAct_9fa48("18107") ? redisData.total_net_output_bytes * (1024 * 1024 * 1024) : (stryCov_9fa48("18107"), redisData.total_net_output_bytes / (stryMutAct_9fa48("18108") ? 1024 * 1024 / 1024 : (stryCov_9fa48("18108"), (stryMutAct_9fa48("18109") ? 1024 / 1024 : (stryCov_9fa48("18109"), 1024 * 1024)) * 1024)))).toFixed(3);
    redisData.used_memory_human = (stryMutAct_9fa48("18110") ? redisData.used_memory * (1024 * 1024 * 1024) : (stryCov_9fa48("18110"), redisData.used_memory / (stryMutAct_9fa48("18111") ? 1024 * 1024 / 1024 : (stryCov_9fa48("18111"), (stryMutAct_9fa48("18112") ? 1024 / 1024 : (stryCov_9fa48("18112"), 1024 * 1024)) * 1024)))).toFixed(3);
    redisData.raw = JSON.stringify(redisData, null, 4);
    redisData.redis = stryMutAct_9fa48("18113") ? false : (stryCov_9fa48("18113"), true);
    return redisData;
  }
};
redisModule.socketAdapter = async function () {
  if (stryMutAct_9fa48("18114")) {
    {}
  } else {
    stryCov_9fa48("18114");
    const redisAdapter = require('@socket.io/redis-adapter');
    const pub = await connection.connect(nconf.get(stryMutAct_9fa48("18115") ? "" : (stryCov_9fa48("18115"), 'redis')));
    const sub = await connection.connect(nconf.get(stryMutAct_9fa48("18116") ? "" : (stryCov_9fa48("18116"), 'redis')));
    return redisAdapter(pub, sub, stryMutAct_9fa48("18117") ? {} : (stryCov_9fa48("18117"), {
      key: stryMutAct_9fa48("18118") ? `` : (stryCov_9fa48("18118"), `db:${nconf.get(stryMutAct_9fa48("18119") ? "" : (stryCov_9fa48("18119"), 'redis:database'))}:adapter_key`)
    }));
  }
};
require('./redis/main')(redisModule);
require('./redis/hash')(redisModule);
require('./redis/sets')(redisModule);
require('./redis/sorted')(redisModule);
require('./redis/list')(redisModule);
require('./redis/transaction')(redisModule);
require('../promisify')(redisModule, stryMutAct_9fa48("18120") ? [] : (stryCov_9fa48("18120"), [stryMutAct_9fa48("18121") ? "" : (stryCov_9fa48("18121"), 'client'), stryMutAct_9fa48("18122") ? "" : (stryCov_9fa48("18122"), 'sessionStore')]));