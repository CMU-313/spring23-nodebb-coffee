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
const start = module.exports;
start.start = async function () {
  if (stryMutAct_9fa48("37693")) {
    {}
  } else {
    stryCov_9fa48("37693");
    printStartupInfo();
    addProcessHandlers();
    try {
      if (stryMutAct_9fa48("37694")) {
        {}
      } else {
        stryCov_9fa48("37694");
        const db = require('./database');
        await db.init();
        await db.checkCompatibility();
        const meta = require('./meta');
        await meta.configs.init();
        if (stryMutAct_9fa48("37696") ? false : stryMutAct_9fa48("37695") ? true : (stryCov_9fa48("37695", "37696"), nconf.get(stryMutAct_9fa48("37697") ? "" : (stryCov_9fa48("37697"), 'runJobs')))) {
          if (stryMutAct_9fa48("37698")) {
            {}
          } else {
            stryCov_9fa48("37698");
            await runUpgrades();
          }
        }
        if (stryMutAct_9fa48("37701") ? nconf.get('dep-check') === undefined && nconf.get('dep-check') !== false : stryMutAct_9fa48("37700") ? false : stryMutAct_9fa48("37699") ? true : (stryCov_9fa48("37699", "37700", "37701"), (stryMutAct_9fa48("37703") ? nconf.get('dep-check') !== undefined : stryMutAct_9fa48("37702") ? false : (stryCov_9fa48("37702", "37703"), nconf.get(stryMutAct_9fa48("37704") ? "" : (stryCov_9fa48("37704"), 'dep-check')) === undefined)) || (stryMutAct_9fa48("37706") ? nconf.get('dep-check') === false : stryMutAct_9fa48("37705") ? false : (stryCov_9fa48("37705", "37706"), nconf.get(stryMutAct_9fa48("37707") ? "" : (stryCov_9fa48("37707"), 'dep-check')) !== (stryMutAct_9fa48("37708") ? true : (stryCov_9fa48("37708"), false)))))) {
          if (stryMutAct_9fa48("37709")) {
            {}
          } else {
            stryCov_9fa48("37709");
            await meta.dependencies.check();
          }
        } else {
          if (stryMutAct_9fa48("37710")) {
            {}
          } else {
            stryCov_9fa48("37710");
            winston.warn(stryMutAct_9fa48("37711") ? "" : (stryCov_9fa48("37711"), '[init] Dependency checking skipped!'));
          }
        }
        await db.initSessionStore();
        const webserver = require('./webserver');
        const sockets = require('./socket.io');
        await sockets.init(webserver.server);
        if (stryMutAct_9fa48("37713") ? false : stryMutAct_9fa48("37712") ? true : (stryCov_9fa48("37712", "37713"), nconf.get(stryMutAct_9fa48("37714") ? "" : (stryCov_9fa48("37714"), 'runJobs')))) {
          if (stryMutAct_9fa48("37715")) {
            {}
          } else {
            stryCov_9fa48("37715");
            require('./notifications').startJobs();
            require('./user').startJobs();
            require('./plugins').startJobs();
            require('./topics').scheduled.startJobs();
            await db.delete(stryMutAct_9fa48("37716") ? "" : (stryCov_9fa48("37716"), 'locks'));
          }
        }
        await webserver.listen();
        if (stryMutAct_9fa48("37718") ? false : stryMutAct_9fa48("37717") ? true : (stryCov_9fa48("37717", "37718"), process.send)) {
          if (stryMutAct_9fa48("37719")) {
            {}
          } else {
            stryCov_9fa48("37719");
            process.send(stryMutAct_9fa48("37720") ? {} : (stryCov_9fa48("37720"), {
              action: stryMutAct_9fa48("37721") ? "" : (stryCov_9fa48("37721"), 'listening')
            }));
          }
        }
      }
    } catch (err) {
      if (stryMutAct_9fa48("37722")) {
        {}
      } else {
        stryCov_9fa48("37722");
        switch (err.message) {
          case stryMutAct_9fa48("37724") ? "" : (stryCov_9fa48("37724"), 'dependencies-out-of-date'):
            if (stryMutAct_9fa48("37723")) {} else {
              stryCov_9fa48("37723");
              winston.error(stryMutAct_9fa48("37725") ? "" : (stryCov_9fa48("37725"), 'One or more of NodeBB\'s dependent packages are out-of-date. Please run the following command to update them:'));
              winston.error(stryMutAct_9fa48("37726") ? "" : (stryCov_9fa48("37726"), '    ./nodebb upgrade'));
              break;
            }
          case stryMutAct_9fa48("37728") ? "" : (stryCov_9fa48("37728"), 'dependencies-missing'):
            if (stryMutAct_9fa48("37727")) {} else {
              stryCov_9fa48("37727");
              winston.error(stryMutAct_9fa48("37729") ? "" : (stryCov_9fa48("37729"), 'One or more of NodeBB\'s dependent packages are missing. Please run the following command to update them:'));
              winston.error(stryMutAct_9fa48("37730") ? "" : (stryCov_9fa48("37730"), '    ./nodebb upgrade'));
              break;
            }
          default:
            if (stryMutAct_9fa48("37731")) {} else {
              stryCov_9fa48("37731");
              winston.error(err.stack);
              break;
            }
        }

        // Either way, bad stuff happened. Abort start.
        process.exit();
      }
    }
  }
};
async function runUpgrades() {
  if (stryMutAct_9fa48("37732")) {
    {}
  } else {
    stryCov_9fa48("37732");
    const upgrade = require('./upgrade');
    try {
      if (stryMutAct_9fa48("37733")) {
        {}
      } else {
        stryCov_9fa48("37733");
        await upgrade.check();
      }
    } catch (err) {
      if (stryMutAct_9fa48("37734")) {
        {}
      } else {
        stryCov_9fa48("37734");
        if (stryMutAct_9fa48("37737") ? err || err.message === 'schema-out-of-date' : stryMutAct_9fa48("37736") ? false : stryMutAct_9fa48("37735") ? true : (stryCov_9fa48("37735", "37736", "37737"), err && (stryMutAct_9fa48("37739") ? err.message !== 'schema-out-of-date' : stryMutAct_9fa48("37738") ? true : (stryCov_9fa48("37738", "37739"), err.message === (stryMutAct_9fa48("37740") ? "" : (stryCov_9fa48("37740"), 'schema-out-of-date')))))) {
          if (stryMutAct_9fa48("37741")) {
            {}
          } else {
            stryCov_9fa48("37741");
            await upgrade.run();
          }
        } else {
          if (stryMutAct_9fa48("37742")) {
            {}
          } else {
            stryCov_9fa48("37742");
            throw err;
          }
        }
      }
    }
  }
}
function printStartupInfo() {
  if (stryMutAct_9fa48("37743")) {
    {}
  } else {
    stryCov_9fa48("37743");
    if (stryMutAct_9fa48("37745") ? false : stryMutAct_9fa48("37744") ? true : (stryCov_9fa48("37744", "37745"), nconf.get(stryMutAct_9fa48("37746") ? "" : (stryCov_9fa48("37746"), 'isPrimary')))) {
      if (stryMutAct_9fa48("37747")) {
        {}
      } else {
        stryCov_9fa48("37747");
        winston.info(stryMutAct_9fa48("37748") ? "" : (stryCov_9fa48("37748"), 'Initializing NodeBB v%s %s'), nconf.get(stryMutAct_9fa48("37749") ? "" : (stryCov_9fa48("37749"), 'version')), nconf.get(stryMutAct_9fa48("37750") ? "" : (stryCov_9fa48("37750"), 'url')));
        const host = nconf.get(stryMutAct_9fa48("37751") ? `` : (stryCov_9fa48("37751"), `${nconf.get(stryMutAct_9fa48("37752") ? "" : (stryCov_9fa48("37752"), 'database'))}:host`));
        const storeLocation = host ? stryMutAct_9fa48("37753") ? `` : (stryCov_9fa48("37753"), `at ${host}${(stryMutAct_9fa48("37754") ? host.includes('/') : (stryCov_9fa48("37754"), !host.includes(stryMutAct_9fa48("37755") ? "" : (stryCov_9fa48("37755"), '/')))) ? stryMutAct_9fa48("37756") ? `` : (stryCov_9fa48("37756"), `:${nconf.get(stryMutAct_9fa48("37757") ? `` : (stryCov_9fa48("37757"), `${nconf.get(stryMutAct_9fa48("37758") ? "" : (stryCov_9fa48("37758"), 'database'))}:port`))}`) : stryMutAct_9fa48("37759") ? "Stryker was here!" : (stryCov_9fa48("37759"), '')}`) : stryMutAct_9fa48("37760") ? "Stryker was here!" : (stryCov_9fa48("37760"), '');
        winston.verbose(stryMutAct_9fa48("37761") ? "" : (stryCov_9fa48("37761"), '* using %s store %s'), nconf.get(stryMutAct_9fa48("37762") ? "" : (stryCov_9fa48("37762"), 'database')), storeLocation);
        winston.verbose(stryMutAct_9fa48("37763") ? "" : (stryCov_9fa48("37763"), '* using themes stored in: %s'), nconf.get(stryMutAct_9fa48("37764") ? "" : (stryCov_9fa48("37764"), 'themes_path')));
      }
    }
  }
}
function addProcessHandlers() {
  if (stryMutAct_9fa48("37765")) {
    {}
  } else {
    stryCov_9fa48("37765");
    process.on(stryMutAct_9fa48("37766") ? "" : (stryCov_9fa48("37766"), 'SIGTERM'), shutdown);
    process.on(stryMutAct_9fa48("37767") ? "" : (stryCov_9fa48("37767"), 'SIGINT'), shutdown);
    process.on(stryMutAct_9fa48("37768") ? "" : (stryCov_9fa48("37768"), 'SIGHUP'), restart);
    process.on(stryMutAct_9fa48("37769") ? "" : (stryCov_9fa48("37769"), 'uncaughtException'), err => {
      if (stryMutAct_9fa48("37770")) {
        {}
      } else {
        stryCov_9fa48("37770");
        winston.error(err.stack);
        require('./meta').js.killMinifier();
        shutdown(1);
      }
    });
    process.on(stryMutAct_9fa48("37771") ? "" : (stryCov_9fa48("37771"), 'message'), msg => {
      if (stryMutAct_9fa48("37772")) {
        {}
      } else {
        stryCov_9fa48("37772");
        if (stryMutAct_9fa48("37775") ? msg || msg.compiling === 'tpl' : stryMutAct_9fa48("37774") ? false : stryMutAct_9fa48("37773") ? true : (stryCov_9fa48("37773", "37774", "37775"), msg && (stryMutAct_9fa48("37777") ? msg.compiling !== 'tpl' : stryMutAct_9fa48("37776") ? true : (stryCov_9fa48("37776", "37777"), msg.compiling === (stryMutAct_9fa48("37778") ? "" : (stryCov_9fa48("37778"), 'tpl')))))) {
          if (stryMutAct_9fa48("37779")) {
            {}
          } else {
            stryCov_9fa48("37779");
            const benchpressjs = require('benchpressjs');
            benchpressjs.flush();
          }
        } else if (stryMutAct_9fa48("37782") ? msg || msg.compiling === 'lang' : stryMutAct_9fa48("37781") ? false : stryMutAct_9fa48("37780") ? true : (stryCov_9fa48("37780", "37781", "37782"), msg && (stryMutAct_9fa48("37784") ? msg.compiling !== 'lang' : stryMutAct_9fa48("37783") ? true : (stryCov_9fa48("37783", "37784"), msg.compiling === (stryMutAct_9fa48("37785") ? "" : (stryCov_9fa48("37785"), 'lang')))))) {
          if (stryMutAct_9fa48("37786")) {
            {}
          } else {
            stryCov_9fa48("37786");
            const translator = require('./translator');
            translator.flush();
          }
        }
      }
    });
  }
}
function restart() {
  if (stryMutAct_9fa48("37787")) {
    {}
  } else {
    stryCov_9fa48("37787");
    if (stryMutAct_9fa48("37789") ? false : stryMutAct_9fa48("37788") ? true : (stryCov_9fa48("37788", "37789"), process.send)) {
      if (stryMutAct_9fa48("37790")) {
        {}
      } else {
        stryCov_9fa48("37790");
        winston.info(stryMutAct_9fa48("37791") ? "" : (stryCov_9fa48("37791"), '[app] Restarting...'));
        process.send(stryMutAct_9fa48("37792") ? {} : (stryCov_9fa48("37792"), {
          action: stryMutAct_9fa48("37793") ? "" : (stryCov_9fa48("37793"), 'restart')
        }));
      }
    } else {
      if (stryMutAct_9fa48("37794")) {
        {}
      } else {
        stryCov_9fa48("37794");
        winston.error(stryMutAct_9fa48("37795") ? "" : (stryCov_9fa48("37795"), '[app] Could not restart server. Shutting down.'));
        shutdown(1);
      }
    }
  }
}
async function shutdown(code) {
  if (stryMutAct_9fa48("37796")) {
    {}
  } else {
    stryCov_9fa48("37796");
    winston.info(stryMutAct_9fa48("37797") ? "" : (stryCov_9fa48("37797"), '[app] Shutdown (SIGTERM/SIGINT) Initialised.'));
    try {
      if (stryMutAct_9fa48("37798")) {
        {}
      } else {
        stryCov_9fa48("37798");
        await require('./webserver').destroy();
        winston.info(stryMutAct_9fa48("37799") ? "" : (stryCov_9fa48("37799"), '[app] Web server closed to connections.'));
        await require('./analytics').writeData();
        winston.info(stryMutAct_9fa48("37800") ? "" : (stryCov_9fa48("37800"), '[app] Live analytics saved.'));
        await require('./database').close();
        winston.info(stryMutAct_9fa48("37801") ? "" : (stryCov_9fa48("37801"), '[app] Database connection closed.'));
        winston.info(stryMutAct_9fa48("37802") ? "" : (stryCov_9fa48("37802"), '[app] Shutdown complete.'));
        process.exit(stryMutAct_9fa48("37805") ? code && 0 : stryMutAct_9fa48("37804") ? false : stryMutAct_9fa48("37803") ? true : (stryCov_9fa48("37803", "37804", "37805"), code || 0));
      }
    } catch (err) {
      if (stryMutAct_9fa48("37806")) {
        {}
      } else {
        stryCov_9fa48("37806");
        winston.error(err.stack);
        return process.exit(stryMutAct_9fa48("37809") ? code && 0 : stryMutAct_9fa48("37808") ? false : stryMutAct_9fa48("37807") ? true : (stryCov_9fa48("37807", "37808", "37809"), code || 0));
      }
    }
  }
}