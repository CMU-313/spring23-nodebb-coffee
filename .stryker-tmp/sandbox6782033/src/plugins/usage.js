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
const request = require('request');
const winston = require('winston');
const crypto = require('crypto');
const cronJob = require('cron').CronJob;
const pkg = require('../../package.json');
const meta = require('../meta');
module.exports = function (Plugins) {
  if (stryMutAct_9fa48("28302")) {
    {}
  } else {
    stryCov_9fa48("28302");
    Plugins.startJobs = function () {
      if (stryMutAct_9fa48("28303")) {
        {}
      } else {
        stryCov_9fa48("28303");
        new cronJob(stryMutAct_9fa48("28304") ? "" : (stryCov_9fa48("28304"), '0 0 0 * * *'), () => {
          if (stryMutAct_9fa48("28305")) {
            {}
          } else {
            stryCov_9fa48("28305");
            Plugins.submitUsageData();
          }
        }, null, stryMutAct_9fa48("28306") ? false : (stryCov_9fa48("28306"), true));
      }
    };
    Plugins.submitUsageData = function (callback) {
      if (stryMutAct_9fa48("28307")) {
        {}
      } else {
        stryCov_9fa48("28307");
        callback = stryMutAct_9fa48("28310") ? callback && function () {} : stryMutAct_9fa48("28309") ? false : stryMutAct_9fa48("28308") ? true : (stryCov_9fa48("28308", "28309", "28310"), callback || function () {});
        if (stryMutAct_9fa48("28313") ? (!meta.config.submitPluginUsage || !Plugins.loadedPlugins.length) && global.env !== 'production' : stryMutAct_9fa48("28312") ? false : stryMutAct_9fa48("28311") ? true : (stryCov_9fa48("28311", "28312", "28313"), (stryMutAct_9fa48("28315") ? !meta.config.submitPluginUsage && !Plugins.loadedPlugins.length : stryMutAct_9fa48("28314") ? false : (stryCov_9fa48("28314", "28315"), (stryMutAct_9fa48("28316") ? meta.config.submitPluginUsage : (stryCov_9fa48("28316"), !meta.config.submitPluginUsage)) || (stryMutAct_9fa48("28317") ? Plugins.loadedPlugins.length : (stryCov_9fa48("28317"), !Plugins.loadedPlugins.length)))) || (stryMutAct_9fa48("28319") ? global.env === 'production' : stryMutAct_9fa48("28318") ? false : (stryCov_9fa48("28318", "28319"), global.env !== (stryMutAct_9fa48("28320") ? "" : (stryCov_9fa48("28320"), 'production')))))) {
          if (stryMutAct_9fa48("28321")) {
            {}
          } else {
            stryCov_9fa48("28321");
            return callback();
          }
        }
        const hash = crypto.createHash(stryMutAct_9fa48("28322") ? "" : (stryCov_9fa48("28322"), 'sha256'));
        hash.update(nconf.get(stryMutAct_9fa48("28323") ? "" : (stryCov_9fa48("28323"), 'url')));
        request.post(stryMutAct_9fa48("28324") ? `` : (stryCov_9fa48("28324"), `${stryMutAct_9fa48("28327") ? nconf.get('registry') && 'https://packages.nodebb.org' : stryMutAct_9fa48("28326") ? false : stryMutAct_9fa48("28325") ? true : (stryCov_9fa48("28325", "28326", "28327"), nconf.get(stryMutAct_9fa48("28328") ? "" : (stryCov_9fa48("28328"), 'registry')) || (stryMutAct_9fa48("28329") ? "" : (stryCov_9fa48("28329"), 'https://packages.nodebb.org')))}/api/v1/plugin/usage`), stryMutAct_9fa48("28330") ? {} : (stryCov_9fa48("28330"), {
          form: stryMutAct_9fa48("28331") ? {} : (stryCov_9fa48("28331"), {
            id: hash.digest(stryMutAct_9fa48("28332") ? "" : (stryCov_9fa48("28332"), 'hex')),
            version: pkg.version,
            plugins: Plugins.loadedPlugins
          }),
          timeout: 5000
        }), (err, res, body) => {
          if (stryMutAct_9fa48("28333")) {
            {}
          } else {
            stryCov_9fa48("28333");
            if (stryMutAct_9fa48("28335") ? false : stryMutAct_9fa48("28334") ? true : (stryCov_9fa48("28334", "28335"), err)) {
              if (stryMutAct_9fa48("28336")) {
                {}
              } else {
                stryCov_9fa48("28336");
                winston.error(err.stack);
                return callback(err);
              }
            }
            if (stryMutAct_9fa48("28339") ? res.statusCode === 200 : stryMutAct_9fa48("28338") ? false : stryMutAct_9fa48("28337") ? true : (stryCov_9fa48("28337", "28338", "28339"), res.statusCode !== 200)) {
              if (stryMutAct_9fa48("28340")) {
                {}
              } else {
                stryCov_9fa48("28340");
                winston.error(stryMutAct_9fa48("28341") ? `` : (stryCov_9fa48("28341"), `[plugins.submitUsageData] received ${res.statusCode} ${body}`));
                callback(new Error(stryMutAct_9fa48("28342") ? `` : (stryCov_9fa48("28342"), `[[error:nbbpm-${res.statusCode}]]`)));
              }
            } else {
              if (stryMutAct_9fa48("28343")) {
                {}
              } else {
                stryCov_9fa48("28343");
                callback();
              }
            }
          }
        });
      }
    };
  }
};