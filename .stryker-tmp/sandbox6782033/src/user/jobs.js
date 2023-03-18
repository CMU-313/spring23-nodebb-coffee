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
const cronJob = require('cron').CronJob;
const db = require('../database');
const meta = require('../meta');
const jobs = {};
module.exports = function (User) {
  if (stryMutAct_9fa48("47900")) {
    {}
  } else {
    stryCov_9fa48("47900");
    User.startJobs = function () {
      if (stryMutAct_9fa48("47901")) {
        {}
      } else {
        stryCov_9fa48("47901");
        winston.verbose(stryMutAct_9fa48("47902") ? "" : (stryCov_9fa48("47902"), '[user/jobs] (Re-)starting jobs...'));
        let {
          digestHour
        } = meta.config;

        // Fix digest hour if invalid
        if (stryMutAct_9fa48("47904") ? false : stryMutAct_9fa48("47903") ? true : (stryCov_9fa48("47903", "47904"), isNaN(digestHour))) {
          if (stryMutAct_9fa48("47905")) {
            {}
          } else {
            stryCov_9fa48("47905");
            digestHour = 17;
          }
        } else if (stryMutAct_9fa48("47908") ? digestHour > 23 && digestHour < 0 : stryMutAct_9fa48("47907") ? false : stryMutAct_9fa48("47906") ? true : (stryCov_9fa48("47906", "47907", "47908"), (stryMutAct_9fa48("47911") ? digestHour <= 23 : stryMutAct_9fa48("47910") ? digestHour >= 23 : stryMutAct_9fa48("47909") ? false : (stryCov_9fa48("47909", "47910", "47911"), digestHour > 23)) || (stryMutAct_9fa48("47914") ? digestHour >= 0 : stryMutAct_9fa48("47913") ? digestHour <= 0 : stryMutAct_9fa48("47912") ? false : (stryCov_9fa48("47912", "47913", "47914"), digestHour < 0)))) {
          if (stryMutAct_9fa48("47915")) {
            {}
          } else {
            stryCov_9fa48("47915");
            digestHour = 0;
          }
        }
        User.stopJobs();
        startDigestJob(stryMutAct_9fa48("47916") ? "" : (stryCov_9fa48("47916"), 'digest.daily'), stryMutAct_9fa48("47917") ? `` : (stryCov_9fa48("47917"), `0 ${digestHour} * * *`), stryMutAct_9fa48("47918") ? "" : (stryCov_9fa48("47918"), 'day'));
        startDigestJob(stryMutAct_9fa48("47919") ? "" : (stryCov_9fa48("47919"), 'digest.weekly'), stryMutAct_9fa48("47920") ? `` : (stryCov_9fa48("47920"), `0 ${digestHour} * * 0`), stryMutAct_9fa48("47921") ? "" : (stryCov_9fa48("47921"), 'week'));
        startDigestJob(stryMutAct_9fa48("47922") ? "" : (stryCov_9fa48("47922"), 'digest.monthly'), stryMutAct_9fa48("47923") ? `` : (stryCov_9fa48("47923"), `0 ${digestHour} 1 * *`), stryMutAct_9fa48("47924") ? "" : (stryCov_9fa48("47924"), 'month'));
        jobs[stryMutAct_9fa48("47925") ? "" : (stryCov_9fa48("47925"), 'reset.clean')] = new cronJob(stryMutAct_9fa48("47926") ? "" : (stryCov_9fa48("47926"), '0 0 * * *'), User.reset.clean, null, stryMutAct_9fa48("47927") ? false : (stryCov_9fa48("47927"), true));
        winston.verbose(stryMutAct_9fa48("47928") ? "" : (stryCov_9fa48("47928"), '[user/jobs] Starting job (reset.clean)'));
        winston.verbose(stryMutAct_9fa48("47929") ? `` : (stryCov_9fa48("47929"), `[user/jobs] jobs started`));
      }
    };
    function startDigestJob(name, cronString, term) {
      if (stryMutAct_9fa48("47930")) {
        {}
      } else {
        stryCov_9fa48("47930");
        jobs[name] = new cronJob(cronString, async () => {
          if (stryMutAct_9fa48("47931")) {
            {}
          } else {
            stryCov_9fa48("47931");
            winston.verbose(stryMutAct_9fa48("47932") ? `` : (stryCov_9fa48("47932"), `[user/jobs] Digest job (${name}) started.`));
            try {
              if (stryMutAct_9fa48("47933")) {
                {}
              } else {
                stryCov_9fa48("47933");
                if (stryMutAct_9fa48("47936") ? name !== 'digest.weekly' : stryMutAct_9fa48("47935") ? false : stryMutAct_9fa48("47934") ? true : (stryCov_9fa48("47934", "47935", "47936"), name === (stryMutAct_9fa48("47937") ? "" : (stryCov_9fa48("47937"), 'digest.weekly')))) {
                  if (stryMutAct_9fa48("47938")) {
                    {}
                  } else {
                    stryCov_9fa48("47938");
                    const counter = await db.increment(stryMutAct_9fa48("47939") ? "" : (stryCov_9fa48("47939"), 'biweeklydigestcounter'));
                    if (stryMutAct_9fa48("47942") ? false : stryMutAct_9fa48("47941") ? true : stryMutAct_9fa48("47940") ? counter * 2 : (stryCov_9fa48("47940", "47941", "47942"), counter % 2)) {
                      if (stryMutAct_9fa48("47943")) {
                        {}
                      } else {
                        stryCov_9fa48("47943");
                        await User.digest.execute(stryMutAct_9fa48("47944") ? {} : (stryCov_9fa48("47944"), {
                          interval: stryMutAct_9fa48("47945") ? "" : (stryCov_9fa48("47945"), 'biweek')
                        }));
                      }
                    }
                  }
                }
                await User.digest.execute(stryMutAct_9fa48("47946") ? {} : (stryCov_9fa48("47946"), {
                  interval: term
                }));
              }
            } catch (err) {
              if (stryMutAct_9fa48("47947")) {
                {}
              } else {
                stryCov_9fa48("47947");
                winston.error(err.stack);
              }
            }
          }
        }, null, stryMutAct_9fa48("47948") ? false : (stryCov_9fa48("47948"), true));
        winston.verbose(stryMutAct_9fa48("47949") ? `` : (stryCov_9fa48("47949"), `[user/jobs] Starting job (${name})`));
      }
    }
    User.stopJobs = function () {
      if (stryMutAct_9fa48("47950")) {
        {}
      } else {
        stryCov_9fa48("47950");
        let terminated = 0;
        // Terminate any active cron jobs
        for (const jobId of Object.keys(jobs)) {
          if (stryMutAct_9fa48("47951")) {
            {}
          } else {
            stryCov_9fa48("47951");
            winston.verbose(stryMutAct_9fa48("47952") ? `` : (stryCov_9fa48("47952"), `[user/jobs] Terminating job (${jobId})`));
            jobs[jobId].stop();
            delete jobs[jobId];
            stryMutAct_9fa48("47953") ? terminated -= 1 : (stryCov_9fa48("47953"), terminated += 1);
          }
        }
        if (stryMutAct_9fa48("47957") ? terminated <= 0 : stryMutAct_9fa48("47956") ? terminated >= 0 : stryMutAct_9fa48("47955") ? false : stryMutAct_9fa48("47954") ? true : (stryCov_9fa48("47954", "47955", "47956", "47957"), terminated > 0)) {
          if (stryMutAct_9fa48("47958")) {
            {}
          } else {
            stryCov_9fa48("47958");
            winston.verbose(stryMutAct_9fa48("47959") ? `` : (stryCov_9fa48("47959"), `[user/jobs] ${terminated} jobs terminated`));
          }
        }
      }
    };
  }
};