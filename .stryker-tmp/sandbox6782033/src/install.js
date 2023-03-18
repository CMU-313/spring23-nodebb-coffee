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
const fs = require('fs');
const url = require('url');
const path = require('path');
const prompt = require('prompt');
const winston = require('winston');
const nconf = require('nconf');
const _ = require('lodash');
const utils = require('./utils');
const install = module.exports;
const questions = {};
questions.main = stryMutAct_9fa48("21419") ? [] : (stryCov_9fa48("21419"), [stryMutAct_9fa48("21420") ? {} : (stryCov_9fa48("21420"), {
  name: stryMutAct_9fa48("21421") ? "" : (stryCov_9fa48("21421"), 'url'),
  description: stryMutAct_9fa48("21422") ? "" : (stryCov_9fa48("21422"), 'URL used to access this NodeBB'),
  default: stryMutAct_9fa48("21425") ? nconf.get('url') && 'http://127.0.0.1:4567' : stryMutAct_9fa48("21424") ? false : stryMutAct_9fa48("21423") ? true : (stryCov_9fa48("21423", "21424", "21425"), nconf.get(stryMutAct_9fa48("21426") ? "" : (stryCov_9fa48("21426"), 'url')) || (stryMutAct_9fa48("21427") ? "" : (stryCov_9fa48("21427"), 'http://127.0.0.1:4567'))),
  pattern: stryMutAct_9fa48("21429") ? /^http(?:s):\/\// : stryMutAct_9fa48("21428") ? /http(?:s)?:\/\// : (stryCov_9fa48("21428", "21429"), /^http(?:s)?:\/\//),
  message: stryMutAct_9fa48("21430") ? "" : (stryCov_9fa48("21430"), 'Base URL must begin with \'http://\' or \'https://\'')
}), stryMutAct_9fa48("21431") ? {} : (stryCov_9fa48("21431"), {
  name: stryMutAct_9fa48("21432") ? "" : (stryCov_9fa48("21432"), 'secret'),
  description: stryMutAct_9fa48("21433") ? "" : (stryCov_9fa48("21433"), 'Please enter a NodeBB secret'),
  default: stryMutAct_9fa48("21436") ? nconf.get('secret') && utils.generateUUID() : stryMutAct_9fa48("21435") ? false : stryMutAct_9fa48("21434") ? true : (stryCov_9fa48("21434", "21435", "21436"), nconf.get(stryMutAct_9fa48("21437") ? "" : (stryCov_9fa48("21437"), 'secret')) || utils.generateUUID())
}), stryMutAct_9fa48("21438") ? {} : (stryCov_9fa48("21438"), {
  name: stryMutAct_9fa48("21439") ? "" : (stryCov_9fa48("21439"), 'submitPluginUsage'),
  description: stryMutAct_9fa48("21440") ? "" : (stryCov_9fa48("21440"), 'Would you like to submit anonymous plugin usage to nbbpm?'),
  default: stryMutAct_9fa48("21441") ? "" : (stryCov_9fa48("21441"), 'yes')
}), stryMutAct_9fa48("21442") ? {} : (stryCov_9fa48("21442"), {
  name: stryMutAct_9fa48("21443") ? "" : (stryCov_9fa48("21443"), 'database'),
  description: stryMutAct_9fa48("21444") ? "" : (stryCov_9fa48("21444"), 'Which database to use'),
  default: stryMutAct_9fa48("21447") ? nconf.get('database') && 'mongo' : stryMutAct_9fa48("21446") ? false : stryMutAct_9fa48("21445") ? true : (stryCov_9fa48("21445", "21446", "21447"), nconf.get(stryMutAct_9fa48("21448") ? "" : (stryCov_9fa48("21448"), 'database')) || (stryMutAct_9fa48("21449") ? "" : (stryCov_9fa48("21449"), 'mongo')))
})]);
questions.optional = stryMutAct_9fa48("21450") ? [] : (stryCov_9fa48("21450"), [stryMutAct_9fa48("21451") ? {} : (stryCov_9fa48("21451"), {
  name: stryMutAct_9fa48("21452") ? "" : (stryCov_9fa48("21452"), 'port'),
  default: stryMutAct_9fa48("21455") ? nconf.get('port') && 4567 : stryMutAct_9fa48("21454") ? false : stryMutAct_9fa48("21453") ? true : (stryCov_9fa48("21453", "21454", "21455"), nconf.get(stryMutAct_9fa48("21456") ? "" : (stryCov_9fa48("21456"), 'port')) || 4567)
})]);
function checkSetupFlagEnv() {
  if (stryMutAct_9fa48("21457")) {
    {}
  } else {
    stryCov_9fa48("21457");
    let setupVal = install.values;
    const envConfMap = stryMutAct_9fa48("21458") ? {} : (stryCov_9fa48("21458"), {
      NODEBB_URL: stryMutAct_9fa48("21459") ? "" : (stryCov_9fa48("21459"), 'url'),
      NODEBB_PORT: stryMutAct_9fa48("21460") ? "" : (stryCov_9fa48("21460"), 'port'),
      NODEBB_ADMIN_USERNAME: stryMutAct_9fa48("21461") ? "" : (stryCov_9fa48("21461"), 'admin:username'),
      NODEBB_ADMIN_PASSWORD: stryMutAct_9fa48("21462") ? "" : (stryCov_9fa48("21462"), 'admin:password'),
      NODEBB_ADMIN_EMAIL: stryMutAct_9fa48("21463") ? "" : (stryCov_9fa48("21463"), 'admin:email'),
      NODEBB_DB: stryMutAct_9fa48("21464") ? "" : (stryCov_9fa48("21464"), 'database'),
      NODEBB_DB_HOST: stryMutAct_9fa48("21465") ? "" : (stryCov_9fa48("21465"), 'host'),
      NODEBB_DB_PORT: stryMutAct_9fa48("21466") ? "" : (stryCov_9fa48("21466"), 'port'),
      NODEBB_DB_USER: stryMutAct_9fa48("21467") ? "" : (stryCov_9fa48("21467"), 'username'),
      NODEBB_DB_PASSWORD: stryMutAct_9fa48("21468") ? "" : (stryCov_9fa48("21468"), 'password'),
      NODEBB_DB_NAME: stryMutAct_9fa48("21469") ? "" : (stryCov_9fa48("21469"), 'database'),
      NODEBB_DB_SSL: stryMutAct_9fa48("21470") ? "" : (stryCov_9fa48("21470"), 'ssl')
    });

    // Set setup values from env vars (if set)
    const envKeys = Object.keys(process.env);
    if (stryMutAct_9fa48("21473") ? Object.keys(envConfMap).every(key => envKeys.includes(key)) : stryMutAct_9fa48("21472") ? false : stryMutAct_9fa48("21471") ? true : (stryCov_9fa48("21471", "21472", "21473"), Object.keys(envConfMap).some(stryMutAct_9fa48("21474") ? () => undefined : (stryCov_9fa48("21474"), key => envKeys.includes(key))))) {
      if (stryMutAct_9fa48("21475")) {
        {}
      } else {
        stryCov_9fa48("21475");
        winston.info(stryMutAct_9fa48("21476") ? "" : (stryCov_9fa48("21476"), '[install/checkSetupFlagEnv] checking env vars for setup info...'));
        setupVal = stryMutAct_9fa48("21479") ? setupVal && {} : stryMutAct_9fa48("21478") ? false : stryMutAct_9fa48("21477") ? true : (stryCov_9fa48("21477", "21478", "21479"), setupVal || {});
        Object.entries(process.env).forEach(([evName, evValue]) => {
          if (stryMutAct_9fa48("21480")) {
            {}
          } else {
            stryCov_9fa48("21480");
            // get setup values from env
            if (stryMutAct_9fa48("21483") ? evName.endsWith('NODEBB_DB_') : stryMutAct_9fa48("21482") ? false : stryMutAct_9fa48("21481") ? true : (stryCov_9fa48("21481", "21482", "21483"), evName.startsWith(stryMutAct_9fa48("21484") ? "" : (stryCov_9fa48("21484"), 'NODEBB_DB_')))) {
              if (stryMutAct_9fa48("21485")) {
                {}
              } else {
                stryCov_9fa48("21485");
                setupVal[stryMutAct_9fa48("21486") ? `` : (stryCov_9fa48("21486"), `${process.env.NODEBB_DB}:${envConfMap[evName]}`)] = evValue;
              }
            } else if (stryMutAct_9fa48("21489") ? evName.endsWith('NODEBB_') : stryMutAct_9fa48("21488") ? false : stryMutAct_9fa48("21487") ? true : (stryCov_9fa48("21487", "21488", "21489"), evName.startsWith(stryMutAct_9fa48("21490") ? "" : (stryCov_9fa48("21490"), 'NODEBB_')))) {
              if (stryMutAct_9fa48("21491")) {
                {}
              } else {
                stryCov_9fa48("21491");
                setupVal[envConfMap[evName]] = evValue;
              }
            }
          }
        });
        setupVal[stryMutAct_9fa48("21492") ? "" : (stryCov_9fa48("21492"), 'admin:password:confirm')] = setupVal[stryMutAct_9fa48("21493") ? "" : (stryCov_9fa48("21493"), 'admin:password')];
      }
    }

    // try to get setup values from json, if successful this overwrites all values set by env
    // TODO: better behaviour would be to support overrides per value, i.e. in order of priority (generic pattern):
    //       flag, env, config file, default
    try {
      if (stryMutAct_9fa48("21494")) {
        {}
      } else {
        stryCov_9fa48("21494");
        if (stryMutAct_9fa48("21496") ? false : stryMutAct_9fa48("21495") ? true : (stryCov_9fa48("21495", "21496"), nconf.get(stryMutAct_9fa48("21497") ? "" : (stryCov_9fa48("21497"), 'setup')))) {
          if (stryMutAct_9fa48("21498")) {
            {}
          } else {
            stryCov_9fa48("21498");
            const setupJSON = JSON.parse(nconf.get(stryMutAct_9fa48("21499") ? "" : (stryCov_9fa48("21499"), 'setup')));
            setupVal = stryMutAct_9fa48("21500") ? {} : (stryCov_9fa48("21500"), {
              ...setupVal,
              ...setupJSON
            });
          }
        }
      }
    } catch (err) {
      if (stryMutAct_9fa48("21501")) {
        {}
      } else {
        stryCov_9fa48("21501");
        winston.error(stryMutAct_9fa48("21502") ? "" : (stryCov_9fa48("21502"), '[install/checkSetupFlagEnv] invalid json in nconf.get(\'setup\'), ignoring setup values from json'));
      }
    }
    if (stryMutAct_9fa48("21505") ? setupVal || typeof setupVal === 'object' : stryMutAct_9fa48("21504") ? false : stryMutAct_9fa48("21503") ? true : (stryCov_9fa48("21503", "21504", "21505"), setupVal && (stryMutAct_9fa48("21507") ? typeof setupVal !== 'object' : stryMutAct_9fa48("21506") ? true : (stryCov_9fa48("21506", "21507"), typeof setupVal === (stryMutAct_9fa48("21508") ? "" : (stryCov_9fa48("21508"), 'object')))))) {
      if (stryMutAct_9fa48("21509")) {
        {}
      } else {
        stryCov_9fa48("21509");
        if (stryMutAct_9fa48("21512") ? setupVal['admin:username'] && setupVal['admin:password'] && setupVal['admin:password:confirm'] || setupVal['admin:email'] : stryMutAct_9fa48("21511") ? false : stryMutAct_9fa48("21510") ? true : (stryCov_9fa48("21510", "21511", "21512"), (stryMutAct_9fa48("21514") ? setupVal['admin:username'] && setupVal['admin:password'] || setupVal['admin:password:confirm'] : stryMutAct_9fa48("21513") ? true : (stryCov_9fa48("21513", "21514"), (stryMutAct_9fa48("21516") ? setupVal['admin:username'] || setupVal['admin:password'] : stryMutAct_9fa48("21515") ? true : (stryCov_9fa48("21515", "21516"), setupVal[stryMutAct_9fa48("21517") ? "" : (stryCov_9fa48("21517"), 'admin:username')] && setupVal[stryMutAct_9fa48("21518") ? "" : (stryCov_9fa48("21518"), 'admin:password')])) && setupVal[stryMutAct_9fa48("21519") ? "" : (stryCov_9fa48("21519"), 'admin:password:confirm')])) && setupVal[stryMutAct_9fa48("21520") ? "" : (stryCov_9fa48("21520"), 'admin:email')])) {
          if (stryMutAct_9fa48("21521")) {
            {}
          } else {
            stryCov_9fa48("21521");
            install.values = setupVal;
          }
        } else {
          if (stryMutAct_9fa48("21522")) {
            {}
          } else {
            stryCov_9fa48("21522");
            winston.error(stryMutAct_9fa48("21523") ? "" : (stryCov_9fa48("21523"), '[install/checkSetupFlagEnv] required values are missing for automated setup:'));
            if (stryMutAct_9fa48("21526") ? false : stryMutAct_9fa48("21525") ? true : stryMutAct_9fa48("21524") ? setupVal['admin:username'] : (stryCov_9fa48("21524", "21525", "21526"), !setupVal[stryMutAct_9fa48("21527") ? "" : (stryCov_9fa48("21527"), 'admin:username')])) {
              if (stryMutAct_9fa48("21528")) {
                {}
              } else {
                stryCov_9fa48("21528");
                winston.error(stryMutAct_9fa48("21529") ? "" : (stryCov_9fa48("21529"), '  admin:username'));
              }
            }
            if (stryMutAct_9fa48("21532") ? false : stryMutAct_9fa48("21531") ? true : stryMutAct_9fa48("21530") ? setupVal['admin:password'] : (stryCov_9fa48("21530", "21531", "21532"), !setupVal[stryMutAct_9fa48("21533") ? "" : (stryCov_9fa48("21533"), 'admin:password')])) {
              if (stryMutAct_9fa48("21534")) {
                {}
              } else {
                stryCov_9fa48("21534");
                winston.error(stryMutAct_9fa48("21535") ? "" : (stryCov_9fa48("21535"), '  admin:password'));
              }
            }
            if (stryMutAct_9fa48("21538") ? false : stryMutAct_9fa48("21537") ? true : stryMutAct_9fa48("21536") ? setupVal['admin:password:confirm'] : (stryCov_9fa48("21536", "21537", "21538"), !setupVal[stryMutAct_9fa48("21539") ? "" : (stryCov_9fa48("21539"), 'admin:password:confirm')])) {
              if (stryMutAct_9fa48("21540")) {
                {}
              } else {
                stryCov_9fa48("21540");
                winston.error(stryMutAct_9fa48("21541") ? "" : (stryCov_9fa48("21541"), '  admin:password:confirm'));
              }
            }
            if (stryMutAct_9fa48("21544") ? false : stryMutAct_9fa48("21543") ? true : stryMutAct_9fa48("21542") ? setupVal['admin:email'] : (stryCov_9fa48("21542", "21543", "21544"), !setupVal[stryMutAct_9fa48("21545") ? "" : (stryCov_9fa48("21545"), 'admin:email')])) {
              if (stryMutAct_9fa48("21546")) {
                {}
              } else {
                stryCov_9fa48("21546");
                winston.error(stryMutAct_9fa48("21547") ? "" : (stryCov_9fa48("21547"), '  admin:email'));
              }
            }
            process.exit();
          }
        }
      }
    } else if (stryMutAct_9fa48("21549") ? false : stryMutAct_9fa48("21548") ? true : (stryCov_9fa48("21548", "21549"), nconf.get(stryMutAct_9fa48("21550") ? "" : (stryCov_9fa48("21550"), 'database')))) {
      if (stryMutAct_9fa48("21551")) {
        {}
      } else {
        stryCov_9fa48("21551");
        install.values = stryMutAct_9fa48("21554") ? install.values && {} : stryMutAct_9fa48("21553") ? false : stryMutAct_9fa48("21552") ? true : (stryCov_9fa48("21552", "21553", "21554"), install.values || {});
        install.values.database = nconf.get(stryMutAct_9fa48("21555") ? "" : (stryCov_9fa48("21555"), 'database'));
      }
    }
  }
}
function checkCIFlag() {
  if (stryMutAct_9fa48("21556")) {
    {}
  } else {
    stryCov_9fa48("21556");
    let ciVals;
    try {
      if (stryMutAct_9fa48("21557")) {
        {}
      } else {
        stryCov_9fa48("21557");
        ciVals = JSON.parse(nconf.get(stryMutAct_9fa48("21558") ? "" : (stryCov_9fa48("21558"), 'ci')));
      }
    } catch (e) {
      if (stryMutAct_9fa48("21559")) {
        {}
      } else {
        stryCov_9fa48("21559");
        ciVals = undefined;
      }
    }
    if (stryMutAct_9fa48("21562") ? ciVals || ciVals instanceof Object : stryMutAct_9fa48("21561") ? false : stryMutAct_9fa48("21560") ? true : (stryCov_9fa48("21560", "21561", "21562"), ciVals && ciVals instanceof Object)) {
      if (stryMutAct_9fa48("21563")) {
        {}
      } else {
        stryCov_9fa48("21563");
        if (stryMutAct_9fa48("21566") ? ciVals.hasOwnProperty('host') && ciVals.hasOwnProperty('port') || ciVals.hasOwnProperty('database') : stryMutAct_9fa48("21565") ? false : stryMutAct_9fa48("21564") ? true : (stryCov_9fa48("21564", "21565", "21566"), (stryMutAct_9fa48("21568") ? ciVals.hasOwnProperty('host') || ciVals.hasOwnProperty('port') : stryMutAct_9fa48("21567") ? true : (stryCov_9fa48("21567", "21568"), ciVals.hasOwnProperty(stryMutAct_9fa48("21569") ? "" : (stryCov_9fa48("21569"), 'host')) && ciVals.hasOwnProperty(stryMutAct_9fa48("21570") ? "" : (stryCov_9fa48("21570"), 'port')))) && ciVals.hasOwnProperty(stryMutAct_9fa48("21571") ? "" : (stryCov_9fa48("21571"), 'database')))) {
          if (stryMutAct_9fa48("21572")) {
            {}
          } else {
            stryCov_9fa48("21572");
            install.ciVals = ciVals;
          }
        } else {
          if (stryMutAct_9fa48("21573")) {
            {}
          } else {
            stryCov_9fa48("21573");
            winston.error(stryMutAct_9fa48("21574") ? "" : (stryCov_9fa48("21574"), '[install/checkCIFlag] required values are missing for automated CI integration:'));
            if (stryMutAct_9fa48("21577") ? false : stryMutAct_9fa48("21576") ? true : stryMutAct_9fa48("21575") ? ciVals.hasOwnProperty('host') : (stryCov_9fa48("21575", "21576", "21577"), !ciVals.hasOwnProperty(stryMutAct_9fa48("21578") ? "" : (stryCov_9fa48("21578"), 'host')))) {
              if (stryMutAct_9fa48("21579")) {
                {}
              } else {
                stryCov_9fa48("21579");
                winston.error(stryMutAct_9fa48("21580") ? "" : (stryCov_9fa48("21580"), '  host'));
              }
            }
            if (stryMutAct_9fa48("21583") ? false : stryMutAct_9fa48("21582") ? true : stryMutAct_9fa48("21581") ? ciVals.hasOwnProperty('port') : (stryCov_9fa48("21581", "21582", "21583"), !ciVals.hasOwnProperty(stryMutAct_9fa48("21584") ? "" : (stryCov_9fa48("21584"), 'port')))) {
              if (stryMutAct_9fa48("21585")) {
                {}
              } else {
                stryCov_9fa48("21585");
                winston.error(stryMutAct_9fa48("21586") ? "" : (stryCov_9fa48("21586"), '  port'));
              }
            }
            if (stryMutAct_9fa48("21589") ? false : stryMutAct_9fa48("21588") ? true : stryMutAct_9fa48("21587") ? ciVals.hasOwnProperty('database') : (stryCov_9fa48("21587", "21588", "21589"), !ciVals.hasOwnProperty(stryMutAct_9fa48("21590") ? "" : (stryCov_9fa48("21590"), 'database')))) {
              if (stryMutAct_9fa48("21591")) {
                {}
              } else {
                stryCov_9fa48("21591");
                winston.error(stryMutAct_9fa48("21592") ? "" : (stryCov_9fa48("21592"), '  database'));
              }
            }
            process.exit();
          }
        }
      }
    }
  }
}
async function setupConfig() {
  if (stryMutAct_9fa48("21593")) {
    {}
  } else {
    stryCov_9fa48("21593");
    const configureDatabases = require('../install/databases');

    // prompt prepends "prompt: " to questions, let's clear that.
    prompt.start();
    prompt.message = stryMutAct_9fa48("21594") ? "Stryker was here!" : (stryCov_9fa48("21594"), '');
    prompt.delimiter = stryMutAct_9fa48("21595") ? "Stryker was here!" : (stryCov_9fa48("21595"), '');
    prompt.colors = stryMutAct_9fa48("21596") ? true : (stryCov_9fa48("21596"), false);
    let config = {};
    if (stryMutAct_9fa48("21598") ? false : stryMutAct_9fa48("21597") ? true : (stryCov_9fa48("21597", "21598"), install.values)) {
      if (stryMutAct_9fa48("21599")) {
        {}
      } else {
        stryCov_9fa48("21599");
        // Use provided values, fall back to defaults
        const redisQuestions = require('./database/redis').questions;
        const mongoQuestions = require('./database/mongo').questions;
        const postgresQuestions = require('./database/postgres').questions;
        const allQuestions = stryMutAct_9fa48("21600") ? [] : (stryCov_9fa48("21600"), [...questions.main, ...questions.optional, ...redisQuestions, ...mongoQuestions, ...postgresQuestions]);
        allQuestions.forEach(question => {
          if (stryMutAct_9fa48("21601")) {
            {}
          } else {
            stryCov_9fa48("21601");
            if (stryMutAct_9fa48("21603") ? false : stryMutAct_9fa48("21602") ? true : (stryCov_9fa48("21602", "21603"), install.values.hasOwnProperty(question.name))) {
              if (stryMutAct_9fa48("21604")) {
                {}
              } else {
                stryCov_9fa48("21604");
                config[question.name] = install.values[question.name];
              }
            } else if (stryMutAct_9fa48("21606") ? false : stryMutAct_9fa48("21605") ? true : (stryCov_9fa48("21605", "21606"), question.hasOwnProperty(stryMutAct_9fa48("21607") ? "" : (stryCov_9fa48("21607"), 'default')))) {
              if (stryMutAct_9fa48("21608")) {
                {}
              } else {
                stryCov_9fa48("21608");
                config[question.name] = question.default;
              }
            } else {
              if (stryMutAct_9fa48("21609")) {
                {}
              } else {
                stryCov_9fa48("21609");
                config[question.name] = undefined;
              }
            }
          }
        });
      }
    } else {
      if (stryMutAct_9fa48("21610")) {
        {}
      } else {
        stryCov_9fa48("21610");
        config = await prompt.get(questions.main);
      }
    }
    await configureDatabases(config);
    await completeConfigSetup(config);
  }
}
async function completeConfigSetup(config) {
  if (stryMutAct_9fa48("21611")) {
    {}
  } else {
    stryCov_9fa48("21611");
    // Add CI object
    if (stryMutAct_9fa48("21613") ? false : stryMutAct_9fa48("21612") ? true : (stryCov_9fa48("21612", "21613"), install.ciVals)) {
      if (stryMutAct_9fa48("21614")) {
        {}
      } else {
        stryCov_9fa48("21614");
        config.test_database = stryMutAct_9fa48("21615") ? {} : (stryCov_9fa48("21615"), {
          ...install.ciVals
        });
      }
    }

    // Add package_manager object if set
    if (stryMutAct_9fa48("21617") ? false : stryMutAct_9fa48("21616") ? true : (stryCov_9fa48("21616", "21617"), nconf.get(stryMutAct_9fa48("21618") ? "" : (stryCov_9fa48("21618"), 'package_manager')))) {
      if (stryMutAct_9fa48("21619")) {
        {}
      } else {
        stryCov_9fa48("21619");
        config.package_manager = nconf.get(stryMutAct_9fa48("21620") ? "" : (stryCov_9fa48("21620"), 'package_manager'));
      }
    }
    nconf.overrides(config);
    const db = require('./database');
    await db.init();
    if (stryMutAct_9fa48("21622") ? false : stryMutAct_9fa48("21621") ? true : (stryCov_9fa48("21621", "21622"), db.hasOwnProperty(stryMutAct_9fa48("21623") ? "" : (stryCov_9fa48("21623"), 'createIndices')))) {
      if (stryMutAct_9fa48("21624")) {
        {}
      } else {
        stryCov_9fa48("21624");
        await db.createIndices();
      }
    }

    // Sanity-check/fix url/port
    if (stryMutAct_9fa48("21627") ? false : stryMutAct_9fa48("21626") ? true : stryMutAct_9fa48("21625") ? /^http(?:s)?:\/\//.test(config.url) : (stryCov_9fa48("21625", "21626", "21627"), !(stryMutAct_9fa48("21629") ? /^http(?:s):\/\// : stryMutAct_9fa48("21628") ? /http(?:s)?:\/\// : (stryCov_9fa48("21628", "21629"), /^http(?:s)?:\/\//)).test(config.url))) {
      if (stryMutAct_9fa48("21630")) {
        {}
      } else {
        stryCov_9fa48("21630");
        config.url = stryMutAct_9fa48("21631") ? `` : (stryCov_9fa48("21631"), `http://${config.url}`);
      }
    }

    // If port is explicitly passed via install vars, use it. Otherwise, glean from url if set.
    const urlObj = url.parse(config.url);
    if (stryMutAct_9fa48("21634") ? urlObj.port || !install.values || !install.values.hasOwnProperty('port') : stryMutAct_9fa48("21633") ? false : stryMutAct_9fa48("21632") ? true : (stryCov_9fa48("21632", "21633", "21634"), urlObj.port && (stryMutAct_9fa48("21636") ? !install.values && !install.values.hasOwnProperty('port') : stryMutAct_9fa48("21635") ? true : (stryCov_9fa48("21635", "21636"), (stryMutAct_9fa48("21637") ? install.values : (stryCov_9fa48("21637"), !install.values)) || (stryMutAct_9fa48("21638") ? install.values.hasOwnProperty('port') : (stryCov_9fa48("21638"), !install.values.hasOwnProperty(stryMutAct_9fa48("21639") ? "" : (stryCov_9fa48("21639"), 'port')))))))) {
      if (stryMutAct_9fa48("21640")) {
        {}
      } else {
        stryCov_9fa48("21640");
        config.port = urlObj.port;
      }
    }

    // Remove trailing slash from non-subfolder installs
    if (stryMutAct_9fa48("21643") ? urlObj.path !== '/' : stryMutAct_9fa48("21642") ? false : stryMutAct_9fa48("21641") ? true : (stryCov_9fa48("21641", "21642", "21643"), urlObj.path === (stryMutAct_9fa48("21644") ? "" : (stryCov_9fa48("21644"), '/')))) {
      if (stryMutAct_9fa48("21645")) {
        {}
      } else {
        stryCov_9fa48("21645");
        urlObj.path = stryMutAct_9fa48("21646") ? "Stryker was here!" : (stryCov_9fa48("21646"), '');
        urlObj.pathname = stryMutAct_9fa48("21647") ? "Stryker was here!" : (stryCov_9fa48("21647"), '');
      }
    }
    config.url = url.format(urlObj);

    // ref: https://github.com/indexzero/nconf/issues/300
    delete config.type;
    const meta = require('./meta');
    await meta.configs.set(stryMutAct_9fa48("21648") ? "" : (stryCov_9fa48("21648"), 'submitPluginUsage'), (stryMutAct_9fa48("21651") ? config.submitPluginUsage !== 'yes' : stryMutAct_9fa48("21650") ? false : stryMutAct_9fa48("21649") ? true : (stryCov_9fa48("21649", "21650", "21651"), config.submitPluginUsage === (stryMutAct_9fa48("21652") ? "" : (stryCov_9fa48("21652"), 'yes')))) ? 1 : 0);
    delete config.submitPluginUsage;
    await install.save(config);
  }
}
async function setupDefaultConfigs() {
  if (stryMutAct_9fa48("21653")) {
    {}
  } else {
    stryCov_9fa48("21653");
    console.log(stryMutAct_9fa48("21654") ? "" : (stryCov_9fa48("21654"), 'Populating database with default configs, if not already set...'));
    const meta = require('./meta');
    const defaults = require(path.join(__dirname, stryMutAct_9fa48("21655") ? "" : (stryCov_9fa48("21655"), '../'), stryMutAct_9fa48("21656") ? "" : (stryCov_9fa48("21656"), 'install/data/defaults.json')));
    await meta.configs.setOnEmpty(defaults);
    await meta.configs.init();
  }
}
async function enableDefaultTheme() {
  if (stryMutAct_9fa48("21657")) {
    {}
  } else {
    stryCov_9fa48("21657");
    const meta = require('./meta');
    const id = await meta.configs.get(stryMutAct_9fa48("21658") ? "" : (stryCov_9fa48("21658"), 'theme:id'));
    if (stryMutAct_9fa48("21660") ? false : stryMutAct_9fa48("21659") ? true : (stryCov_9fa48("21659", "21660"), id)) {
      if (stryMutAct_9fa48("21661")) {
        {}
      } else {
        stryCov_9fa48("21661");
        console.log(stryMutAct_9fa48("21662") ? "" : (stryCov_9fa48("21662"), 'Previous theme detected, skipping enabling default theme'));
        return;
      }
    }
    const defaultTheme = stryMutAct_9fa48("21665") ? nconf.get('defaultTheme') && 'nodebb-theme-persona' : stryMutAct_9fa48("21664") ? false : stryMutAct_9fa48("21663") ? true : (stryCov_9fa48("21663", "21664", "21665"), nconf.get(stryMutAct_9fa48("21666") ? "" : (stryCov_9fa48("21666"), 'defaultTheme')) || (stryMutAct_9fa48("21667") ? "" : (stryCov_9fa48("21667"), 'nodebb-theme-persona')));
    console.log(stryMutAct_9fa48("21668") ? `` : (stryCov_9fa48("21668"), `Enabling default theme: ${defaultTheme}`));
    await meta.themes.set(stryMutAct_9fa48("21669") ? {} : (stryCov_9fa48("21669"), {
      type: stryMutAct_9fa48("21670") ? "" : (stryCov_9fa48("21670"), 'local'),
      id: defaultTheme
    }));
  }
}
async function createDefaultUserGroups() {
  if (stryMutAct_9fa48("21671")) {
    {}
  } else {
    stryCov_9fa48("21671");
    const groups = require('./groups');
    async function createGroup(name) {
      if (stryMutAct_9fa48("21672")) {
        {}
      } else {
        stryCov_9fa48("21672");
        await groups.create(stryMutAct_9fa48("21673") ? {} : (stryCov_9fa48("21673"), {
          name: name,
          hidden: 1,
          private: 1,
          system: 1,
          disableLeave: 1,
          disableJoinRequests: 1
        }));
      }
    }
    const [verifiedExists, unverifiedExists, bannedExists] = await groups.exists(stryMutAct_9fa48("21674") ? [] : (stryCov_9fa48("21674"), [stryMutAct_9fa48("21675") ? "" : (stryCov_9fa48("21675"), 'verified-users'), stryMutAct_9fa48("21676") ? "" : (stryCov_9fa48("21676"), 'unverified-users'), stryMutAct_9fa48("21677") ? "" : (stryCov_9fa48("21677"), 'banned-users')]));
    if (stryMutAct_9fa48("21680") ? false : stryMutAct_9fa48("21679") ? true : stryMutAct_9fa48("21678") ? verifiedExists : (stryCov_9fa48("21678", "21679", "21680"), !verifiedExists)) {
      if (stryMutAct_9fa48("21681")) {
        {}
      } else {
        stryCov_9fa48("21681");
        await createGroup(stryMutAct_9fa48("21682") ? "" : (stryCov_9fa48("21682"), 'verified-users'));
      }
    }
    if (stryMutAct_9fa48("21685") ? false : stryMutAct_9fa48("21684") ? true : stryMutAct_9fa48("21683") ? unverifiedExists : (stryCov_9fa48("21683", "21684", "21685"), !unverifiedExists)) {
      if (stryMutAct_9fa48("21686")) {
        {}
      } else {
        stryCov_9fa48("21686");
        await createGroup(stryMutAct_9fa48("21687") ? "" : (stryCov_9fa48("21687"), 'unverified-users'));
      }
    }
    if (stryMutAct_9fa48("21690") ? false : stryMutAct_9fa48("21689") ? true : stryMutAct_9fa48("21688") ? bannedExists : (stryCov_9fa48("21688", "21689", "21690"), !bannedExists)) {
      if (stryMutAct_9fa48("21691")) {
        {}
      } else {
        stryCov_9fa48("21691");
        await createGroup(stryMutAct_9fa48("21692") ? "" : (stryCov_9fa48("21692"), 'banned-users'));
      }
    }
  }
}
async function createAdministrator() {
  if (stryMutAct_9fa48("21693")) {
    {}
  } else {
    stryCov_9fa48("21693");
    const Groups = require('./groups');
    const memberCount = await Groups.getMemberCount(stryMutAct_9fa48("21694") ? "" : (stryCov_9fa48("21694"), 'administrators'));
    if (stryMutAct_9fa48("21698") ? memberCount <= 0 : stryMutAct_9fa48("21697") ? memberCount >= 0 : stryMutAct_9fa48("21696") ? false : stryMutAct_9fa48("21695") ? true : (stryCov_9fa48("21695", "21696", "21697", "21698"), memberCount > 0)) {
      if (stryMutAct_9fa48("21699")) {
        {}
      } else {
        stryCov_9fa48("21699");
        console.log(stryMutAct_9fa48("21700") ? "" : (stryCov_9fa48("21700"), 'Administrator found, skipping Admin setup'));
        return;
      }
    }
    return await createAdmin();
  }
}
async function createAdmin() {
  if (stryMutAct_9fa48("21701")) {
    {}
  } else {
    stryCov_9fa48("21701");
    const User = require('./user');
    const Groups = require('./groups');
    let password;
    winston.warn(stryMutAct_9fa48("21702") ? "" : (stryCov_9fa48("21702"), 'No administrators have been detected, running initial user setup\n'));
    let questions = stryMutAct_9fa48("21703") ? [] : (stryCov_9fa48("21703"), [stryMutAct_9fa48("21704") ? {} : (stryCov_9fa48("21704"), {
      name: stryMutAct_9fa48("21705") ? "" : (stryCov_9fa48("21705"), 'username'),
      description: stryMutAct_9fa48("21706") ? "" : (stryCov_9fa48("21706"), 'Administrator username'),
      required: stryMutAct_9fa48("21707") ? false : (stryCov_9fa48("21707"), true),
      type: stryMutAct_9fa48("21708") ? "" : (stryCov_9fa48("21708"), 'string')
    }), stryMutAct_9fa48("21709") ? {} : (stryCov_9fa48("21709"), {
      name: stryMutAct_9fa48("21710") ? "" : (stryCov_9fa48("21710"), 'email'),
      description: stryMutAct_9fa48("21711") ? "" : (stryCov_9fa48("21711"), 'Administrator email address'),
      pattern: stryMutAct_9fa48("21713") ? /.+@./ : stryMutAct_9fa48("21712") ? /.@.+/ : (stryCov_9fa48("21712", "21713"), /.+@.+/),
      required: stryMutAct_9fa48("21714") ? false : (stryCov_9fa48("21714"), true)
    })]);
    const passwordQuestions = stryMutAct_9fa48("21715") ? [] : (stryCov_9fa48("21715"), [stryMutAct_9fa48("21716") ? {} : (stryCov_9fa48("21716"), {
      name: stryMutAct_9fa48("21717") ? "" : (stryCov_9fa48("21717"), 'password'),
      description: stryMutAct_9fa48("21718") ? "" : (stryCov_9fa48("21718"), 'Password'),
      required: stryMutAct_9fa48("21719") ? false : (stryCov_9fa48("21719"), true),
      hidden: stryMutAct_9fa48("21720") ? false : (stryCov_9fa48("21720"), true),
      type: stryMutAct_9fa48("21721") ? "" : (stryCov_9fa48("21721"), 'string')
    }), stryMutAct_9fa48("21722") ? {} : (stryCov_9fa48("21722"), {
      name: stryMutAct_9fa48("21723") ? "" : (stryCov_9fa48("21723"), 'password:confirm'),
      description: stryMutAct_9fa48("21724") ? "" : (stryCov_9fa48("21724"), 'Confirm Password'),
      required: stryMutAct_9fa48("21725") ? false : (stryCov_9fa48("21725"), true),
      hidden: stryMutAct_9fa48("21726") ? false : (stryCov_9fa48("21726"), true),
      type: stryMutAct_9fa48("21727") ? "" : (stryCov_9fa48("21727"), 'string')
    })]);
    async function success(results) {
      if (stryMutAct_9fa48("21728")) {
        {}
      } else {
        stryCov_9fa48("21728");
        if (stryMutAct_9fa48("21731") ? false : stryMutAct_9fa48("21730") ? true : stryMutAct_9fa48("21729") ? results : (stryCov_9fa48("21729", "21730", "21731"), !results)) {
          if (stryMutAct_9fa48("21732")) {
            {}
          } else {
            stryCov_9fa48("21732");
            throw new Error(stryMutAct_9fa48("21733") ? "" : (stryCov_9fa48("21733"), 'aborted'));
          }
        }
        if (stryMutAct_9fa48("21736") ? results['password:confirm'] === results.password : stryMutAct_9fa48("21735") ? false : stryMutAct_9fa48("21734") ? true : (stryCov_9fa48("21734", "21735", "21736"), results[stryMutAct_9fa48("21737") ? "" : (stryCov_9fa48("21737"), 'password:confirm')] !== results.password)) {
          if (stryMutAct_9fa48("21738")) {
            {}
          } else {
            stryCov_9fa48("21738");
            winston.warn(stryMutAct_9fa48("21739") ? "" : (stryCov_9fa48("21739"), 'Passwords did not match, please try again'));
            return await retryPassword(results);
          }
        }
        try {
          if (stryMutAct_9fa48("21740")) {
            {}
          } else {
            stryCov_9fa48("21740");
            User.isPasswordValid(results.password);
          }
        } catch (err) {
          if (stryMutAct_9fa48("21741")) {
            {}
          } else {
            stryCov_9fa48("21741");
            const [namespace, key] = stryMutAct_9fa48("21742") ? err.message.split(':', 2) : (stryCov_9fa48("21742"), err.message.slice(2, stryMutAct_9fa48("21743") ? +2 : (stryCov_9fa48("21743"), -2)).split(stryMutAct_9fa48("21744") ? "" : (stryCov_9fa48("21744"), ':'), 2));
            if (stryMutAct_9fa48("21747") ? namespace && key && err.message.startsWith('[[') || err.message.endsWith(']]') : stryMutAct_9fa48("21746") ? false : stryMutAct_9fa48("21745") ? true : (stryCov_9fa48("21745", "21746", "21747"), (stryMutAct_9fa48("21749") ? namespace && key || err.message.startsWith('[[') : stryMutAct_9fa48("21748") ? true : (stryCov_9fa48("21748", "21749"), (stryMutAct_9fa48("21751") ? namespace || key : stryMutAct_9fa48("21750") ? true : (stryCov_9fa48("21750", "21751"), namespace && key)) && (stryMutAct_9fa48("21752") ? err.message.endsWith('[[') : (stryCov_9fa48("21752"), err.message.startsWith(stryMutAct_9fa48("21753") ? "" : (stryCov_9fa48("21753"), '[[')))))) && (stryMutAct_9fa48("21754") ? err.message.startsWith(']]') : (stryCov_9fa48("21754"), err.message.endsWith(stryMutAct_9fa48("21755") ? "" : (stryCov_9fa48("21755"), ']]')))))) {
              if (stryMutAct_9fa48("21756")) {
                {}
              } else {
                stryCov_9fa48("21756");
                const lang = require(path.join(__dirname, stryMutAct_9fa48("21757") ? `` : (stryCov_9fa48("21757"), `../public/language/en-GB/${namespace}`)));
                if (stryMutAct_9fa48("21760") ? lang || lang[key] : stryMutAct_9fa48("21759") ? false : stryMutAct_9fa48("21758") ? true : (stryCov_9fa48("21758", "21759", "21760"), lang && lang[key])) {
                  if (stryMutAct_9fa48("21761")) {
                    {}
                  } else {
                    stryCov_9fa48("21761");
                    err.message = lang[key];
                  }
                }
              }
            }
            winston.warn(stryMutAct_9fa48("21762") ? `` : (stryCov_9fa48("21762"), `Password error, please try again. ${err.message}`));
            return await retryPassword(results);
          }
        }
        const adminUid = await User.create(stryMutAct_9fa48("21763") ? {} : (stryCov_9fa48("21763"), {
          username: results.username,
          password: results.password,
          email: results.email
        }));
        await Groups.join(stryMutAct_9fa48("21764") ? "" : (stryCov_9fa48("21764"), 'administrators'), adminUid);
        await Groups.show(stryMutAct_9fa48("21765") ? "" : (stryCov_9fa48("21765"), 'administrators'));
        await Groups.ownership.grant(adminUid, stryMutAct_9fa48("21766") ? "" : (stryCov_9fa48("21766"), 'administrators'));
        return password ? results : undefined;
      }
    }
    async function retryPassword(originalResults) {
      if (stryMutAct_9fa48("21767")) {
        {}
      } else {
        stryCov_9fa48("21767");
        // Ask only the password questions
        const results = await prompt.get(passwordQuestions);

        // Update the original data with newly collected password
        originalResults.password = results.password;
        originalResults[stryMutAct_9fa48("21768") ? "" : (stryCov_9fa48("21768"), 'password:confirm')] = results[stryMutAct_9fa48("21769") ? "" : (stryCov_9fa48("21769"), 'password:confirm')];

        // Send back to success to handle
        return await success(originalResults);
      }
    }

    // Add the password questions
    questions = questions.concat(passwordQuestions);
    if (stryMutAct_9fa48("21772") ? false : stryMutAct_9fa48("21771") ? true : stryMutAct_9fa48("21770") ? install.values : (stryCov_9fa48("21770", "21771", "21772"), !install.values)) {
      if (stryMutAct_9fa48("21773")) {
        {}
      } else {
        stryCov_9fa48("21773");
        const results = await prompt.get(questions);
        return await success(results);
      }
    }
    // If automated setup did not provide a user password, generate one,
    // it will be shown to the user upon setup completion
    if (stryMutAct_9fa48("21776") ? !install.values.hasOwnProperty('admin:password') || !nconf.get('admin:password') : stryMutAct_9fa48("21775") ? false : stryMutAct_9fa48("21774") ? true : (stryCov_9fa48("21774", "21775", "21776"), (stryMutAct_9fa48("21777") ? install.values.hasOwnProperty('admin:password') : (stryCov_9fa48("21777"), !install.values.hasOwnProperty(stryMutAct_9fa48("21778") ? "" : (stryCov_9fa48("21778"), 'admin:password')))) && (stryMutAct_9fa48("21779") ? nconf.get('admin:password') : (stryCov_9fa48("21779"), !nconf.get(stryMutAct_9fa48("21780") ? "" : (stryCov_9fa48("21780"), 'admin:password')))))) {
      if (stryMutAct_9fa48("21781")) {
        {}
      } else {
        stryCov_9fa48("21781");
        console.log(stryMutAct_9fa48("21782") ? "" : (stryCov_9fa48("21782"), 'Password was not provided during automated setup, generating one...'));
        password = stryMutAct_9fa48("21783") ? utils.generateUUID() : (stryCov_9fa48("21783"), utils.generateUUID().slice(0, 8));
      }
    }
    const results = stryMutAct_9fa48("21784") ? {} : (stryCov_9fa48("21784"), {
      username: stryMutAct_9fa48("21787") ? (install.values['admin:username'] || nconf.get('admin:username')) && 'admin' : stryMutAct_9fa48("21786") ? false : stryMutAct_9fa48("21785") ? true : (stryCov_9fa48("21785", "21786", "21787"), (stryMutAct_9fa48("21789") ? install.values['admin:username'] && nconf.get('admin:username') : stryMutAct_9fa48("21788") ? false : (stryCov_9fa48("21788", "21789"), install.values[stryMutAct_9fa48("21790") ? "" : (stryCov_9fa48("21790"), 'admin:username')] || nconf.get(stryMutAct_9fa48("21791") ? "" : (stryCov_9fa48("21791"), 'admin:username')))) || (stryMutAct_9fa48("21792") ? "" : (stryCov_9fa48("21792"), 'admin'))),
      email: stryMutAct_9fa48("21795") ? (install.values['admin:email'] || nconf.get('admin:email')) && '' : stryMutAct_9fa48("21794") ? false : stryMutAct_9fa48("21793") ? true : (stryCov_9fa48("21793", "21794", "21795"), (stryMutAct_9fa48("21797") ? install.values['admin:email'] && nconf.get('admin:email') : stryMutAct_9fa48("21796") ? false : (stryCov_9fa48("21796", "21797"), install.values[stryMutAct_9fa48("21798") ? "" : (stryCov_9fa48("21798"), 'admin:email')] || nconf.get(stryMutAct_9fa48("21799") ? "" : (stryCov_9fa48("21799"), 'admin:email')))) || (stryMutAct_9fa48("21800") ? "Stryker was here!" : (stryCov_9fa48("21800"), ''))),
      password: stryMutAct_9fa48("21803") ? (install.values['admin:password'] || nconf.get('admin:password')) && password : stryMutAct_9fa48("21802") ? false : stryMutAct_9fa48("21801") ? true : (stryCov_9fa48("21801", "21802", "21803"), (stryMutAct_9fa48("21805") ? install.values['admin:password'] && nconf.get('admin:password') : stryMutAct_9fa48("21804") ? false : (stryCov_9fa48("21804", "21805"), install.values[stryMutAct_9fa48("21806") ? "" : (stryCov_9fa48("21806"), 'admin:password')] || nconf.get(stryMutAct_9fa48("21807") ? "" : (stryCov_9fa48("21807"), 'admin:password')))) || password),
      'password:confirm': stryMutAct_9fa48("21810") ? (install.values['admin:password:confirm'] || nconf.get('admin:password')) && password : stryMutAct_9fa48("21809") ? false : stryMutAct_9fa48("21808") ? true : (stryCov_9fa48("21808", "21809", "21810"), (stryMutAct_9fa48("21812") ? install.values['admin:password:confirm'] && nconf.get('admin:password') : stryMutAct_9fa48("21811") ? false : (stryCov_9fa48("21811", "21812"), install.values[stryMutAct_9fa48("21813") ? "" : (stryCov_9fa48("21813"), 'admin:password:confirm')] || nconf.get(stryMutAct_9fa48("21814") ? "" : (stryCov_9fa48("21814"), 'admin:password')))) || password)
    });
    return await success(results);
  }
}
async function createGlobalModeratorsGroup() {
  if (stryMutAct_9fa48("21815")) {
    {}
  } else {
    stryCov_9fa48("21815");
    const groups = require('./groups');
    const exists = await groups.exists(stryMutAct_9fa48("21816") ? "" : (stryCov_9fa48("21816"), 'Global Moderators'));
    if (stryMutAct_9fa48("21818") ? false : stryMutAct_9fa48("21817") ? true : (stryCov_9fa48("21817", "21818"), exists)) {
      if (stryMutAct_9fa48("21819")) {
        {}
      } else {
        stryCov_9fa48("21819");
        winston.info(stryMutAct_9fa48("21820") ? "" : (stryCov_9fa48("21820"), 'Global Moderators group found, skipping creation!'));
      }
    } else {
      if (stryMutAct_9fa48("21821")) {
        {}
      } else {
        stryCov_9fa48("21821");
        await groups.create(stryMutAct_9fa48("21822") ? {} : (stryCov_9fa48("21822"), {
          name: stryMutAct_9fa48("21823") ? "" : (stryCov_9fa48("21823"), 'Global Moderators'),
          userTitle: stryMutAct_9fa48("21824") ? "" : (stryCov_9fa48("21824"), 'Global Moderator'),
          description: stryMutAct_9fa48("21825") ? "" : (stryCov_9fa48("21825"), 'Forum wide moderators'),
          hidden: 0,
          private: 1,
          disableJoinRequests: 1
        }));
      }
    }
    await groups.show(stryMutAct_9fa48("21826") ? "" : (stryCov_9fa48("21826"), 'Global Moderators'));
  }
}
async function giveGlobalPrivileges() {
  if (stryMutAct_9fa48("21827")) {
    {}
  } else {
    stryCov_9fa48("21827");
    const privileges = require('./privileges');
    const defaultPrivileges = stryMutAct_9fa48("21828") ? [] : (stryCov_9fa48("21828"), [stryMutAct_9fa48("21829") ? "" : (stryCov_9fa48("21829"), 'groups:chat'), stryMutAct_9fa48("21830") ? "" : (stryCov_9fa48("21830"), 'groups:upload:post:image'), stryMutAct_9fa48("21831") ? "" : (stryCov_9fa48("21831"), 'groups:signature'), stryMutAct_9fa48("21832") ? "" : (stryCov_9fa48("21832"), 'groups:search:content'), stryMutAct_9fa48("21833") ? "" : (stryCov_9fa48("21833"), 'groups:search:users'), stryMutAct_9fa48("21834") ? "" : (stryCov_9fa48("21834"), 'groups:search:tags'), stryMutAct_9fa48("21835") ? "" : (stryCov_9fa48("21835"), 'groups:view:users'), stryMutAct_9fa48("21836") ? "" : (stryCov_9fa48("21836"), 'groups:view:tags'), stryMutAct_9fa48("21837") ? "" : (stryCov_9fa48("21837"), 'groups:view:groups'), stryMutAct_9fa48("21838") ? "" : (stryCov_9fa48("21838"), 'groups:local:login')]);
    await privileges.global.give(defaultPrivileges, stryMutAct_9fa48("21839") ? "" : (stryCov_9fa48("21839"), 'registered-users'));
    await privileges.global.give(defaultPrivileges.concat(stryMutAct_9fa48("21840") ? [] : (stryCov_9fa48("21840"), [stryMutAct_9fa48("21841") ? "" : (stryCov_9fa48("21841"), 'groups:ban'), stryMutAct_9fa48("21842") ? "" : (stryCov_9fa48("21842"), 'groups:upload:post:file'), stryMutAct_9fa48("21843") ? "" : (stryCov_9fa48("21843"), 'groups:view:users:info')])), stryMutAct_9fa48("21844") ? "" : (stryCov_9fa48("21844"), 'Global Moderators'));
    await privileges.global.give(stryMutAct_9fa48("21845") ? [] : (stryCov_9fa48("21845"), [stryMutAct_9fa48("21846") ? "" : (stryCov_9fa48("21846"), 'groups:view:users'), stryMutAct_9fa48("21847") ? "" : (stryCov_9fa48("21847"), 'groups:view:tags'), stryMutAct_9fa48("21848") ? "" : (stryCov_9fa48("21848"), 'groups:view:groups')]), stryMutAct_9fa48("21849") ? "" : (stryCov_9fa48("21849"), 'guests'));
    await privileges.global.give(stryMutAct_9fa48("21850") ? [] : (stryCov_9fa48("21850"), [stryMutAct_9fa48("21851") ? "" : (stryCov_9fa48("21851"), 'groups:view:users'), stryMutAct_9fa48("21852") ? "" : (stryCov_9fa48("21852"), 'groups:view:tags'), stryMutAct_9fa48("21853") ? "" : (stryCov_9fa48("21853"), 'groups:view:groups')]), stryMutAct_9fa48("21854") ? "" : (stryCov_9fa48("21854"), 'spiders'));
  }
}
async function createCategories() {
  if (stryMutAct_9fa48("21855")) {
    {}
  } else {
    stryCov_9fa48("21855");
    const Categories = require('./categories');
    const db = require('./database');
    const cids = await db.getSortedSetRange(stryMutAct_9fa48("21856") ? "" : (stryCov_9fa48("21856"), 'categories:cid'), 0, stryMutAct_9fa48("21857") ? +1 : (stryCov_9fa48("21857"), -1));
    if (stryMutAct_9fa48("21860") ? Array.isArray(cids) || cids.length : stryMutAct_9fa48("21859") ? false : stryMutAct_9fa48("21858") ? true : (stryCov_9fa48("21858", "21859", "21860"), Array.isArray(cids) && cids.length)) {
      if (stryMutAct_9fa48("21861")) {
        {}
      } else {
        stryCov_9fa48("21861");
        console.log(stryMutAct_9fa48("21862") ? `` : (stryCov_9fa48("21862"), `Categories OK. Found ${cids.length} categories.`));
        return;
      }
    }
    console.log(stryMutAct_9fa48("21863") ? "" : (stryCov_9fa48("21863"), 'No categories found, populating instance with default categories'));
    const default_categories = JSON.parse(await fs.promises.readFile(path.join(__dirname, stryMutAct_9fa48("21864") ? "" : (stryCov_9fa48("21864"), '../'), stryMutAct_9fa48("21865") ? "" : (stryCov_9fa48("21865"), 'install/data/categories.json')), stryMutAct_9fa48("21866") ? "" : (stryCov_9fa48("21866"), 'utf8')));
    for (const categoryData of default_categories) {
      if (stryMutAct_9fa48("21867")) {
        {}
      } else {
        stryCov_9fa48("21867");
        // eslint-disable-next-line no-await-in-loop
        await Categories.create(categoryData);
      }
    }
  }
}
async function createMenuItems() {
  if (stryMutAct_9fa48("21868")) {
    {}
  } else {
    stryCov_9fa48("21868");
    const db = require('./database');
    const exists = await db.exists(stryMutAct_9fa48("21869") ? "" : (stryCov_9fa48("21869"), 'navigation:enabled'));
    if (stryMutAct_9fa48("21871") ? false : stryMutAct_9fa48("21870") ? true : (stryCov_9fa48("21870", "21871"), exists)) {
      if (stryMutAct_9fa48("21872")) {
        {}
      } else {
        stryCov_9fa48("21872");
        return;
      }
    }
    const navigation = require('./navigation/admin');
    const data = require('../install/data/navigation.json');
    await navigation.save(data);
  }
}
async function createWelcomePost() {
  if (stryMutAct_9fa48("21873")) {
    {}
  } else {
    stryCov_9fa48("21873");
    const db = require('./database');
    const Topics = require('./topics');
    const [content, numTopics] = await Promise.all(stryMutAct_9fa48("21874") ? [] : (stryCov_9fa48("21874"), [fs.promises.readFile(path.join(__dirname, stryMutAct_9fa48("21875") ? "" : (stryCov_9fa48("21875"), '../'), stryMutAct_9fa48("21876") ? "" : (stryCov_9fa48("21876"), 'install/data/welcome.md')), stryMutAct_9fa48("21877") ? "" : (stryCov_9fa48("21877"), 'utf8')), db.getObjectField(stryMutAct_9fa48("21878") ? "" : (stryCov_9fa48("21878"), 'global'), stryMutAct_9fa48("21879") ? "" : (stryCov_9fa48("21879"), 'topicCount'))]));
    if (stryMutAct_9fa48("21882") ? false : stryMutAct_9fa48("21881") ? true : stryMutAct_9fa48("21880") ? parseInt(numTopics, 10) : (stryCov_9fa48("21880", "21881", "21882"), !parseInt(numTopics, 10))) {
      if (stryMutAct_9fa48("21883")) {
        {}
      } else {
        stryCov_9fa48("21883");
        console.log(stryMutAct_9fa48("21884") ? "" : (stryCov_9fa48("21884"), 'Creating welcome post!'));
        await Topics.post(stryMutAct_9fa48("21885") ? {} : (stryCov_9fa48("21885"), {
          uid: 1,
          cid: 2,
          title: stryMutAct_9fa48("21886") ? "" : (stryCov_9fa48("21886"), 'Welcome to your NodeBB!'),
          content: content
        }));
      }
    }
  }
}
async function enableDefaultPlugins() {
  if (stryMutAct_9fa48("21887")) {
    {}
  } else {
    stryCov_9fa48("21887");
    console.log(stryMutAct_9fa48("21888") ? "" : (stryCov_9fa48("21888"), 'Enabling default plugins'));
    let defaultEnabled = stryMutAct_9fa48("21889") ? [] : (stryCov_9fa48("21889"), [stryMutAct_9fa48("21890") ? "" : (stryCov_9fa48("21890"), 'nodebb-plugin-composer-default'), stryMutAct_9fa48("21891") ? "" : (stryCov_9fa48("21891"), 'nodebb-plugin-markdown'), stryMutAct_9fa48("21892") ? "" : (stryCov_9fa48("21892"), 'nodebb-plugin-mentions'), stryMutAct_9fa48("21893") ? "" : (stryCov_9fa48("21893"), 'nodebb-widget-essentials'), stryMutAct_9fa48("21894") ? "" : (stryCov_9fa48("21894"), 'nodebb-rewards-essentials'), stryMutAct_9fa48("21895") ? "" : (stryCov_9fa48("21895"), 'nodebb-plugin-emoji'), stryMutAct_9fa48("21896") ? "" : (stryCov_9fa48("21896"), 'nodebb-plugin-emoji-android')]);
    let customDefaults = stryMutAct_9fa48("21899") ? nconf.get('defaultplugins') && nconf.get('defaultPlugins') : stryMutAct_9fa48("21898") ? false : stryMutAct_9fa48("21897") ? true : (stryCov_9fa48("21897", "21898", "21899"), nconf.get(stryMutAct_9fa48("21900") ? "" : (stryCov_9fa48("21900"), 'defaultplugins')) || nconf.get(stryMutAct_9fa48("21901") ? "" : (stryCov_9fa48("21901"), 'defaultPlugins')));
    winston.info(stryMutAct_9fa48("21902") ? `` : (stryCov_9fa48("21902"), `[install/defaultPlugins] customDefaults ${String(customDefaults)}`));
    if (stryMutAct_9fa48("21905") ? customDefaults || customDefaults.length : stryMutAct_9fa48("21904") ? false : stryMutAct_9fa48("21903") ? true : (stryCov_9fa48("21903", "21904", "21905"), customDefaults && customDefaults.length)) {
      if (stryMutAct_9fa48("21906")) {
        {}
      } else {
        stryCov_9fa48("21906");
        try {
          if (stryMutAct_9fa48("21907")) {
            {}
          } else {
            stryCov_9fa48("21907");
            customDefaults = Array.isArray(customDefaults) ? customDefaults : JSON.parse(customDefaults);
            defaultEnabled = defaultEnabled.concat(customDefaults);
          }
        } catch (e) {
          if (stryMutAct_9fa48("21908")) {
            {}
          } else {
            stryCov_9fa48("21908");
            // Invalid value received
            winston.info(stryMutAct_9fa48("21909") ? "" : (stryCov_9fa48("21909"), '[install/enableDefaultPlugins] Invalid defaultPlugins value received. Ignoring.'));
          }
        }
      }
    }
    defaultEnabled = _.uniq(defaultEnabled);
    winston.info(stryMutAct_9fa48("21910") ? "" : (stryCov_9fa48("21910"), '[install/enableDefaultPlugins] activating default plugins'), defaultEnabled);
    const db = require('./database');
    const order = defaultEnabled.map(stryMutAct_9fa48("21911") ? () => undefined : (stryCov_9fa48("21911"), (plugin, index) => index));
    await db.sortedSetAdd(stryMutAct_9fa48("21912") ? "" : (stryCov_9fa48("21912"), 'plugins:active'), order, defaultEnabled);
  }
}
async function setCopyrightWidget() {
  if (stryMutAct_9fa48("21913")) {
    {}
  } else {
    stryCov_9fa48("21913");
    const db = require('./database');
    const [footerJSON, footer] = await Promise.all(stryMutAct_9fa48("21914") ? [] : (stryCov_9fa48("21914"), [fs.promises.readFile(path.join(__dirname, stryMutAct_9fa48("21915") ? "" : (stryCov_9fa48("21915"), '../'), stryMutAct_9fa48("21916") ? "" : (stryCov_9fa48("21916"), 'install/data/footer.json')), stryMutAct_9fa48("21917") ? "" : (stryCov_9fa48("21917"), 'utf8')), db.getObjectField(stryMutAct_9fa48("21918") ? "" : (stryCov_9fa48("21918"), 'widgets:global'), stryMutAct_9fa48("21919") ? "" : (stryCov_9fa48("21919"), 'footer'))]));
    if (stryMutAct_9fa48("21922") ? !footer || footerJSON : stryMutAct_9fa48("21921") ? false : stryMutAct_9fa48("21920") ? true : (stryCov_9fa48("21920", "21921", "21922"), (stryMutAct_9fa48("21923") ? footer : (stryCov_9fa48("21923"), !footer)) && footerJSON)) {
      if (stryMutAct_9fa48("21924")) {
        {}
      } else {
        stryCov_9fa48("21924");
        await db.setObjectField(stryMutAct_9fa48("21925") ? "" : (stryCov_9fa48("21925"), 'widgets:global'), stryMutAct_9fa48("21926") ? "" : (stryCov_9fa48("21926"), 'footer'), footerJSON);
      }
    }
  }
}
async function copyFavicon() {
  if (stryMutAct_9fa48("21927")) {
    {}
  } else {
    stryCov_9fa48("21927");
    const file = require('./file');
    const pathToIco = path.join(nconf.get(stryMutAct_9fa48("21928") ? "" : (stryCov_9fa48("21928"), 'upload_path')), stryMutAct_9fa48("21929") ? "" : (stryCov_9fa48("21929"), 'system'), stryMutAct_9fa48("21930") ? "" : (stryCov_9fa48("21930"), 'favicon.ico'));
    const defaultIco = path.join(nconf.get(stryMutAct_9fa48("21931") ? "" : (stryCov_9fa48("21931"), 'base_dir')), stryMutAct_9fa48("21932") ? "" : (stryCov_9fa48("21932"), 'public'), stryMutAct_9fa48("21933") ? "" : (stryCov_9fa48("21933"), 'favicon.ico'));
    const targetExists = await file.exists(pathToIco);
    const defaultExists = await file.exists(defaultIco);
    if (stryMutAct_9fa48("21936") ? defaultExists || !targetExists : stryMutAct_9fa48("21935") ? false : stryMutAct_9fa48("21934") ? true : (stryCov_9fa48("21934", "21935", "21936"), defaultExists && (stryMutAct_9fa48("21937") ? targetExists : (stryCov_9fa48("21937"), !targetExists)))) {
      if (stryMutAct_9fa48("21938")) {
        {}
      } else {
        stryCov_9fa48("21938");
        try {
          if (stryMutAct_9fa48("21939")) {
            {}
          } else {
            stryCov_9fa48("21939");
            await fs.promises.copyFile(defaultIco, pathToIco);
          }
        } catch (err) {
          if (stryMutAct_9fa48("21940")) {
            {}
          } else {
            stryCov_9fa48("21940");
            winston.error(stryMutAct_9fa48("21941") ? `` : (stryCov_9fa48("21941"), `Cannot copy favicon.ico\n${err.stack}`));
          }
        }
      }
    }
  }
}
async function checkUpgrade() {
  if (stryMutAct_9fa48("21942")) {
    {}
  } else {
    stryCov_9fa48("21942");
    const upgrade = require('./upgrade');
    try {
      if (stryMutAct_9fa48("21943")) {
        {}
      } else {
        stryCov_9fa48("21943");
        await upgrade.check();
      }
    } catch (err) {
      if (stryMutAct_9fa48("21944")) {
        {}
      } else {
        stryCov_9fa48("21944");
        if (stryMutAct_9fa48("21947") ? err.message !== 'schema-out-of-date' : stryMutAct_9fa48("21946") ? false : stryMutAct_9fa48("21945") ? true : (stryCov_9fa48("21945", "21946", "21947"), err.message === (stryMutAct_9fa48("21948") ? "" : (stryCov_9fa48("21948"), 'schema-out-of-date')))) {
          if (stryMutAct_9fa48("21949")) {
            {}
          } else {
            stryCov_9fa48("21949");
            await upgrade.run();
            return;
          }
        }
        throw err;
      }
    }
  }
}
install.setup = async function () {
  if (stryMutAct_9fa48("21950")) {
    {}
  } else {
    stryCov_9fa48("21950");
    try {
      if (stryMutAct_9fa48("21951")) {
        {}
      } else {
        stryCov_9fa48("21951");
        checkSetupFlagEnv();
        checkCIFlag();
        await setupConfig();
        await setupDefaultConfigs();
        await enableDefaultTheme();
        await createCategories();
        await createDefaultUserGroups();
        const adminInfo = await createAdministrator();
        await createGlobalModeratorsGroup();
        await giveGlobalPrivileges();
        await createMenuItems();
        await createWelcomePost();
        await enableDefaultPlugins();
        await setCopyrightWidget();
        await copyFavicon();
        await checkUpgrade();
        const data = stryMutAct_9fa48("21952") ? {} : (stryCov_9fa48("21952"), {
          ...adminInfo
        });
        return data;
      }
    } catch (err) {
      if (stryMutAct_9fa48("21953")) {
        {}
      } else {
        stryCov_9fa48("21953");
        if (stryMutAct_9fa48("21955") ? false : stryMutAct_9fa48("21954") ? true : (stryCov_9fa48("21954", "21955"), err)) {
          if (stryMutAct_9fa48("21956")) {
            {}
          } else {
            stryCov_9fa48("21956");
            winston.warn(stryMutAct_9fa48("21957") ? `` : (stryCov_9fa48("21957"), `NodeBB Setup Aborted.\n ${err.stack}`));
            process.exit(1);
          }
        }
      }
    }
  }
};
install.save = async function (server_conf) {
  if (stryMutAct_9fa48("21958")) {
    {}
  } else {
    stryCov_9fa48("21958");
    let serverConfigPath = path.join(__dirname, stryMutAct_9fa48("21959") ? "" : (stryCov_9fa48("21959"), '../config.json'));
    if (stryMutAct_9fa48("21961") ? false : stryMutAct_9fa48("21960") ? true : (stryCov_9fa48("21960", "21961"), nconf.get(stryMutAct_9fa48("21962") ? "" : (stryCov_9fa48("21962"), 'config')))) {
      if (stryMutAct_9fa48("21963")) {
        {}
      } else {
        stryCov_9fa48("21963");
        serverConfigPath = path.resolve(__dirname, stryMutAct_9fa48("21964") ? "" : (stryCov_9fa48("21964"), '../'), nconf.get(stryMutAct_9fa48("21965") ? "" : (stryCov_9fa48("21965"), 'config')));
      }
    }
    let currentConfig = {};
    try {
      if (stryMutAct_9fa48("21966")) {
        {}
      } else {
        stryCov_9fa48("21966");
        currentConfig = require(serverConfigPath);
      }
    } catch (err) {
      if (stryMutAct_9fa48("21967")) {
        {}
      } else {
        stryCov_9fa48("21967");
        if (stryMutAct_9fa48("21970") ? err.code === 'MODULE_NOT_FOUND' : stryMutAct_9fa48("21969") ? false : stryMutAct_9fa48("21968") ? true : (stryCov_9fa48("21968", "21969", "21970"), err.code !== (stryMutAct_9fa48("21971") ? "" : (stryCov_9fa48("21971"), 'MODULE_NOT_FOUND')))) {
          if (stryMutAct_9fa48("21972")) {
            {}
          } else {
            stryCov_9fa48("21972");
            throw err;
          }
        }
      }
    }
    await fs.promises.writeFile(serverConfigPath, JSON.stringify(stryMutAct_9fa48("21973") ? {} : (stryCov_9fa48("21973"), {
      ...currentConfig,
      ...server_conf
    }), null, 4));
    console.log(stryMutAct_9fa48("21974") ? "" : (stryCov_9fa48("21974"), 'Configuration Saved OK'));
    nconf.file(stryMutAct_9fa48("21975") ? {} : (stryCov_9fa48("21975"), {
      file: serverConfigPath
    }));
  }
};