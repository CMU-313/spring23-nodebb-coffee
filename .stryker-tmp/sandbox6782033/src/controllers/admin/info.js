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
const os = require('os');
const winston = require('winston');
const nconf = require('nconf');
const {
  exec
} = require('child_process');
const pubsub = require('../../pubsub');
const rooms = require('../../socket.io/admin/rooms');
const infoController = module.exports;
let info = {};
let previousUsage = process.cpuUsage();
let usageStartDate = Date.now();
infoController.get = function (req, res) {
  if (stryMutAct_9fa48("7232")) {
    {}
  } else {
    stryCov_9fa48("7232");
    info = {};
    pubsub.publish(stryMutAct_9fa48("7233") ? "" : (stryCov_9fa48("7233"), 'sync:node:info:start'));
    const timeoutMS = 1000;
    setTimeout(() => {
      if (stryMutAct_9fa48("7234")) {
        {}
      } else {
        stryCov_9fa48("7234");
        const data = stryMutAct_9fa48("7235") ? ["Stryker was here"] : (stryCov_9fa48("7235"), []);
        Object.keys(info).forEach(stryMutAct_9fa48("7236") ? () => undefined : (stryCov_9fa48("7236"), key => data.push(info[key])));
        stryMutAct_9fa48("7237") ? data : (stryCov_9fa48("7237"), data.sort((a, b) => {
          if (stryMutAct_9fa48("7238")) {
            {}
          } else {
            stryCov_9fa48("7238");
            if (stryMutAct_9fa48("7242") ? a.id >= b.id : stryMutAct_9fa48("7241") ? a.id <= b.id : stryMutAct_9fa48("7240") ? false : stryMutAct_9fa48("7239") ? true : (stryCov_9fa48("7239", "7240", "7241", "7242"), a.id < b.id)) {
              if (stryMutAct_9fa48("7243")) {
                {}
              } else {
                stryCov_9fa48("7243");
                return stryMutAct_9fa48("7244") ? +1 : (stryCov_9fa48("7244"), -1);
              }
            }
            if (stryMutAct_9fa48("7248") ? a.id <= b.id : stryMutAct_9fa48("7247") ? a.id >= b.id : stryMutAct_9fa48("7246") ? false : stryMutAct_9fa48("7245") ? true : (stryCov_9fa48("7245", "7246", "7247", "7248"), a.id > b.id)) {
              if (stryMutAct_9fa48("7249")) {
                {}
              } else {
                stryCov_9fa48("7249");
                return 1;
              }
            }
            return 0;
          }
        }));
        let port = nconf.get(stryMutAct_9fa48("7250") ? "" : (stryCov_9fa48("7250"), 'port'));
        if (stryMutAct_9fa48("7253") ? !Array.isArray(port) || !isNaN(parseInt(port, 10)) : stryMutAct_9fa48("7252") ? false : stryMutAct_9fa48("7251") ? true : (stryCov_9fa48("7251", "7252", "7253"), (stryMutAct_9fa48("7254") ? Array.isArray(port) : (stryCov_9fa48("7254"), !Array.isArray(port))) && (stryMutAct_9fa48("7255") ? isNaN(parseInt(port, 10)) : (stryCov_9fa48("7255"), !isNaN(parseInt(port, 10)))))) {
          if (stryMutAct_9fa48("7256")) {
            {}
          } else {
            stryCov_9fa48("7256");
            port = stryMutAct_9fa48("7257") ? [] : (stryCov_9fa48("7257"), [port]);
          }
        }
        res.render(stryMutAct_9fa48("7258") ? "" : (stryCov_9fa48("7258"), 'admin/development/info'), stryMutAct_9fa48("7259") ? {} : (stryCov_9fa48("7259"), {
          info: data,
          infoJSON: JSON.stringify(data, null, 4),
          host: os.hostname(),
          port: port,
          nodeCount: data.length,
          timeout: timeoutMS,
          ip: req.ip
        }));
      }
    }, timeoutMS);
  }
};
pubsub.on(stryMutAct_9fa48("7260") ? "" : (stryCov_9fa48("7260"), 'sync:node:info:start'), async () => {
  if (stryMutAct_9fa48("7261")) {
    {}
  } else {
    stryCov_9fa48("7261");
    try {
      if (stryMutAct_9fa48("7262")) {
        {}
      } else {
        stryCov_9fa48("7262");
        const data = await getNodeInfo();
        data.id = stryMutAct_9fa48("7263") ? `` : (stryCov_9fa48("7263"), `${os.hostname()}:${nconf.get(stryMutAct_9fa48("7264") ? "" : (stryCov_9fa48("7264"), 'port'))}`);
        pubsub.publish(stryMutAct_9fa48("7265") ? "" : (stryCov_9fa48("7265"), 'sync:node:info:end'), stryMutAct_9fa48("7266") ? {} : (stryCov_9fa48("7266"), {
          data: data,
          id: data.id
        }));
      }
    } catch (err) {
      if (stryMutAct_9fa48("7267")) {
        {}
      } else {
        stryCov_9fa48("7267");
        winston.error(err.stack);
      }
    }
  }
});
pubsub.on(stryMutAct_9fa48("7268") ? "" : (stryCov_9fa48("7268"), 'sync:node:info:end'), data => {
  if (stryMutAct_9fa48("7269")) {
    {}
  } else {
    stryCov_9fa48("7269");
    info[data.id] = data.data;
  }
});
async function getNodeInfo() {
  if (stryMutAct_9fa48("7270")) {
    {}
  } else {
    stryCov_9fa48("7270");
    const data = stryMutAct_9fa48("7271") ? {} : (stryCov_9fa48("7271"), {
      process: stryMutAct_9fa48("7272") ? {} : (stryCov_9fa48("7272"), {
        port: nconf.get(stryMutAct_9fa48("7273") ? "" : (stryCov_9fa48("7273"), 'port')),
        pid: process.pid,
        title: process.title,
        version: process.version,
        memoryUsage: process.memoryUsage(),
        uptime: process.uptime(),
        cpuUsage: getCpuUsage()
      }),
      os: stryMutAct_9fa48("7274") ? {} : (stryCov_9fa48("7274"), {
        hostname: os.hostname(),
        type: os.type(),
        platform: os.platform(),
        arch: os.arch(),
        release: os.release(),
        load: os.loadavg().map(stryMutAct_9fa48("7275") ? () => undefined : (stryCov_9fa48("7275"), load => load.toFixed(2))).join(stryMutAct_9fa48("7276") ? "" : (stryCov_9fa48("7276"), ', ')),
        freemem: os.freemem(),
        totalmem: os.totalmem()
      }),
      nodebb: stryMutAct_9fa48("7277") ? {} : (stryCov_9fa48("7277"), {
        isCluster: nconf.get(stryMutAct_9fa48("7278") ? "" : (stryCov_9fa48("7278"), 'isCluster')),
        isPrimary: nconf.get(stryMutAct_9fa48("7279") ? "" : (stryCov_9fa48("7279"), 'isPrimary')),
        runJobs: nconf.get(stryMutAct_9fa48("7280") ? "" : (stryCov_9fa48("7280"), 'runJobs')),
        jobsDisabled: nconf.get(stryMutAct_9fa48("7281") ? "" : (stryCov_9fa48("7281"), 'jobsDisabled'))
      })
    });
    data.process.memoryUsage.humanReadable = (stryMutAct_9fa48("7282") ? data.process.memoryUsage.rss * (1024 * 1024 * 1024) : (stryCov_9fa48("7282"), data.process.memoryUsage.rss / (stryMutAct_9fa48("7283") ? 1024 * 1024 / 1024 : (stryCov_9fa48("7283"), (stryMutAct_9fa48("7284") ? 1024 / 1024 : (stryCov_9fa48("7284"), 1024 * 1024)) * 1024)))).toFixed(3);
    data.process.uptimeHumanReadable = humanReadableUptime(data.process.uptime);
    data.os.freemem = (stryMutAct_9fa48("7285") ? data.os.freemem * (1024 * 1024 * 1024) : (stryCov_9fa48("7285"), data.os.freemem / (stryMutAct_9fa48("7286") ? 1024 * 1024 / 1024 : (stryCov_9fa48("7286"), (stryMutAct_9fa48("7287") ? 1024 / 1024 : (stryCov_9fa48("7287"), 1024 * 1024)) * 1024)))).toFixed(2);
    data.os.totalmem = (stryMutAct_9fa48("7288") ? data.os.totalmem * (1024 * 1024 * 1024) : (stryCov_9fa48("7288"), data.os.totalmem / (stryMutAct_9fa48("7289") ? 1024 * 1024 / 1024 : (stryCov_9fa48("7289"), (stryMutAct_9fa48("7290") ? 1024 / 1024 : (stryCov_9fa48("7290"), 1024 * 1024)) * 1024)))).toFixed(2);
    data.os.usedmem = (stryMutAct_9fa48("7291") ? data.os.totalmem + data.os.freemem : (stryCov_9fa48("7291"), data.os.totalmem - data.os.freemem)).toFixed(2);
    const [stats, gitInfo] = await Promise.all(stryMutAct_9fa48("7292") ? [] : (stryCov_9fa48("7292"), [rooms.getLocalStats(), getGitInfo()]));
    data.git = gitInfo;
    data.stats = stats;
    return data;
  }
}
function getCpuUsage() {
  if (stryMutAct_9fa48("7293")) {
    {}
  } else {
    stryCov_9fa48("7293");
    const newUsage = process.cpuUsage();
    const diff = stryMutAct_9fa48("7294") ? newUsage.user + newUsage.system + (previousUsage.user + previousUsage.system) : (stryCov_9fa48("7294"), (stryMutAct_9fa48("7295") ? newUsage.user - newUsage.system : (stryCov_9fa48("7295"), newUsage.user + newUsage.system)) - (stryMutAct_9fa48("7296") ? previousUsage.user - previousUsage.system : (stryCov_9fa48("7296"), previousUsage.user + previousUsage.system)));
    const now = Date.now();
    const result = stryMutAct_9fa48("7297") ? diff / ((now - usageStartDate) * 1000) / 100 : (stryCov_9fa48("7297"), (stryMutAct_9fa48("7298") ? diff * ((now - usageStartDate) * 1000) : (stryCov_9fa48("7298"), diff / (stryMutAct_9fa48("7299") ? (now - usageStartDate) / 1000 : (stryCov_9fa48("7299"), (stryMutAct_9fa48("7300") ? now + usageStartDate : (stryCov_9fa48("7300"), now - usageStartDate)) * 1000)))) * 100);
    previousUsage = newUsage;
    usageStartDate = now;
    return result.toFixed(2);
  }
}
function humanReadableUptime(seconds) {
  if (stryMutAct_9fa48("7301")) {
    {}
  } else {
    stryCov_9fa48("7301");
    if (stryMutAct_9fa48("7305") ? seconds >= 60 : stryMutAct_9fa48("7304") ? seconds <= 60 : stryMutAct_9fa48("7303") ? false : stryMutAct_9fa48("7302") ? true : (stryCov_9fa48("7302", "7303", "7304", "7305"), seconds < 60)) {
      if (stryMutAct_9fa48("7306")) {
        {}
      } else {
        stryCov_9fa48("7306");
        return stryMutAct_9fa48("7307") ? `` : (stryCov_9fa48("7307"), `${Math.floor(seconds)}s`);
      }
    } else if (stryMutAct_9fa48("7311") ? seconds >= 3600 : stryMutAct_9fa48("7310") ? seconds <= 3600 : stryMutAct_9fa48("7309") ? false : stryMutAct_9fa48("7308") ? true : (stryCov_9fa48("7308", "7309", "7310", "7311"), seconds < 3600)) {
      if (stryMutAct_9fa48("7312")) {
        {}
      } else {
        stryCov_9fa48("7312");
        return stryMutAct_9fa48("7313") ? `` : (stryCov_9fa48("7313"), `${Math.floor(stryMutAct_9fa48("7314") ? seconds * 60 : (stryCov_9fa48("7314"), seconds / 60))}m`);
      }
    } else if (stryMutAct_9fa48("7318") ? seconds >= 3600 * 24 : stryMutAct_9fa48("7317") ? seconds <= 3600 * 24 : stryMutAct_9fa48("7316") ? false : stryMutAct_9fa48("7315") ? true : (stryCov_9fa48("7315", "7316", "7317", "7318"), seconds < (stryMutAct_9fa48("7319") ? 3600 / 24 : (stryCov_9fa48("7319"), 3600 * 24)))) {
      if (stryMutAct_9fa48("7320")) {
        {}
      } else {
        stryCov_9fa48("7320");
        return stryMutAct_9fa48("7321") ? `` : (stryCov_9fa48("7321"), `${Math.floor(stryMutAct_9fa48("7322") ? seconds * (60 * 60) : (stryCov_9fa48("7322"), seconds / (stryMutAct_9fa48("7323") ? 60 / 60 : (stryCov_9fa48("7323"), 60 * 60))))}h`);
      }
    }
    return stryMutAct_9fa48("7324") ? `` : (stryCov_9fa48("7324"), `${Math.floor(stryMutAct_9fa48("7325") ? seconds * (60 * 60 * 24) : (stryCov_9fa48("7325"), seconds / (stryMutAct_9fa48("7326") ? 60 * 60 / 24 : (stryCov_9fa48("7326"), (stryMutAct_9fa48("7327") ? 60 / 60 : (stryCov_9fa48("7327"), 60 * 60)) * 24))))}d`);
  }
}
async function getGitInfo() {
  if (stryMutAct_9fa48("7328")) {
    {}
  } else {
    stryCov_9fa48("7328");
    function get(cmd, callback) {
      if (stryMutAct_9fa48("7329")) {
        {}
      } else {
        stryCov_9fa48("7329");
        exec(cmd, (err, stdout) => {
          if (stryMutAct_9fa48("7330")) {
            {}
          } else {
            stryCov_9fa48("7330");
            if (stryMutAct_9fa48("7332") ? false : stryMutAct_9fa48("7331") ? true : (stryCov_9fa48("7331", "7332"), err)) {
              if (stryMutAct_9fa48("7333")) {
                {}
              } else {
                stryCov_9fa48("7333");
                winston.error(err.stack);
              }
            }
            callback(null, stdout ? stdout.replace(stryMutAct_9fa48("7334") ? /\n/ : (stryCov_9fa48("7334"), /\n$/), stryMutAct_9fa48("7335") ? "Stryker was here!" : (stryCov_9fa48("7335"), '')) : stryMutAct_9fa48("7336") ? "" : (stryCov_9fa48("7336"), 'no-git-info'));
          }
        });
      }
    }
    const getAsync = require('util').promisify(get);
    const [hash, branch] = await Promise.all(stryMutAct_9fa48("7337") ? [] : (stryCov_9fa48("7337"), [getAsync(stryMutAct_9fa48("7338") ? "" : (stryCov_9fa48("7338"), 'git rev-parse HEAD')), getAsync(stryMutAct_9fa48("7339") ? "" : (stryCov_9fa48("7339"), 'git rev-parse --abbrev-ref HEAD'))]));
    return stryMutAct_9fa48("7340") ? {} : (stryCov_9fa48("7340"), {
      hash: hash,
      hashShort: stryMutAct_9fa48("7341") ? hash : (stryCov_9fa48("7341"), hash.slice(0, 6)),
      branch: branch
    });
  }
}