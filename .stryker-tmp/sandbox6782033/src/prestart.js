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
const url = require('url');
const winston = require('winston');
const path = require('path');
const chalk = require('chalk');
const pkg = require('../package.json');
const {
  paths
} = require('./constants');
function setupWinston() {
  if (stryMutAct_9fa48("30808")) {
    {}
  } else {
    stryCov_9fa48("30808");
    if (stryMutAct_9fa48("30811") ? false : stryMutAct_9fa48("30810") ? true : stryMutAct_9fa48("30809") ? winston.format : (stryCov_9fa48("30809", "30810", "30811"), !winston.format)) {
      if (stryMutAct_9fa48("30812")) {
        {}
      } else {
        stryCov_9fa48("30812");
        return;
      }
    }
    const formats = stryMutAct_9fa48("30813") ? ["Stryker was here"] : (stryCov_9fa48("30813"), []);
    if (stryMutAct_9fa48("30816") ? nconf.get('log-colorize') === 'false' : stryMutAct_9fa48("30815") ? false : stryMutAct_9fa48("30814") ? true : (stryCov_9fa48("30814", "30815", "30816"), nconf.get(stryMutAct_9fa48("30817") ? "" : (stryCov_9fa48("30817"), 'log-colorize')) !== (stryMutAct_9fa48("30818") ? "" : (stryCov_9fa48("30818"), 'false')))) {
      if (stryMutAct_9fa48("30819")) {
        {}
      } else {
        stryCov_9fa48("30819");
        formats.push(winston.format.colorize());
      }
    }
    if (stryMutAct_9fa48("30821") ? false : stryMutAct_9fa48("30820") ? true : (stryCov_9fa48("30820", "30821"), nconf.get(stryMutAct_9fa48("30822") ? "" : (stryCov_9fa48("30822"), 'json-logging')))) {
      if (stryMutAct_9fa48("30823")) {
        {}
      } else {
        stryCov_9fa48("30823");
        formats.push(winston.format.timestamp());
        formats.push(winston.format.json());
      }
    } else {
      if (stryMutAct_9fa48("30824")) {
        {}
      } else {
        stryCov_9fa48("30824");
        const timestampFormat = winston.format(info => {
          if (stryMutAct_9fa48("30825")) {
            {}
          } else {
            stryCov_9fa48("30825");
            const dateString = stryMutAct_9fa48("30826") ? `` : (stryCov_9fa48("30826"), `${new Date().toISOString()} [${nconf.get(stryMutAct_9fa48("30827") ? "" : (stryCov_9fa48("30827"), 'port'))}/${global.process.pid}]`);
            info.level = stryMutAct_9fa48("30828") ? `` : (stryCov_9fa48("30828"), `${dateString} - ${info.level}`);
            return info;
          }
        });
        formats.push(timestampFormat());
        formats.push(winston.format.splat());
        formats.push(winston.format.simple());
      }
    }
    winston.configure(stryMutAct_9fa48("30829") ? {} : (stryCov_9fa48("30829"), {
      level: stryMutAct_9fa48("30832") ? nconf.get('log-level') && (process.env.NODE_ENV === 'production' ? 'info' : 'verbose') : stryMutAct_9fa48("30831") ? false : stryMutAct_9fa48("30830") ? true : (stryCov_9fa48("30830", "30831", "30832"), nconf.get(stryMutAct_9fa48("30833") ? "" : (stryCov_9fa48("30833"), 'log-level')) || ((stryMutAct_9fa48("30836") ? process.env.NODE_ENV !== 'production' : stryMutAct_9fa48("30835") ? false : stryMutAct_9fa48("30834") ? true : (stryCov_9fa48("30834", "30835", "30836"), process.env.NODE_ENV === (stryMutAct_9fa48("30837") ? "" : (stryCov_9fa48("30837"), 'production')))) ? stryMutAct_9fa48("30838") ? "" : (stryCov_9fa48("30838"), 'info') : stryMutAct_9fa48("30839") ? "" : (stryCov_9fa48("30839"), 'verbose'))),
      format: winston.format.combine.apply(null, formats),
      transports: stryMutAct_9fa48("30840") ? [] : (stryCov_9fa48("30840"), [new winston.transports.Console(stryMutAct_9fa48("30841") ? {} : (stryCov_9fa48("30841"), {
        handleExceptions: stryMutAct_9fa48("30842") ? false : (stryCov_9fa48("30842"), true)
      }))])
    }));
  }
}
function loadConfig(configFile) {
  if (stryMutAct_9fa48("30843")) {
    {}
  } else {
    stryCov_9fa48("30843");
    nconf.file(stryMutAct_9fa48("30844") ? {} : (stryCov_9fa48("30844"), {
      file: configFile
    }));
    nconf.defaults(stryMutAct_9fa48("30845") ? {} : (stryCov_9fa48("30845"), {
      base_dir: paths.baseDir,
      themes_path: paths.themes,
      upload_path: stryMutAct_9fa48("30846") ? "" : (stryCov_9fa48("30846"), 'public/uploads'),
      views_dir: path.join(paths.baseDir, stryMutAct_9fa48("30847") ? "" : (stryCov_9fa48("30847"), 'build/public/templates')),
      version: pkg.version,
      isCluster: stryMutAct_9fa48("30848") ? true : (stryCov_9fa48("30848"), false),
      isPrimary: stryMutAct_9fa48("30849") ? false : (stryCov_9fa48("30849"), true),
      jobsDisabled: stryMutAct_9fa48("30850") ? true : (stryCov_9fa48("30850"), false)
    }));

    // Explicitly cast as Bool, loader.js passes in isCluster as string 'true'/'false'
    const castAsBool = stryMutAct_9fa48("30851") ? [] : (stryCov_9fa48("30851"), [stryMutAct_9fa48("30852") ? "" : (stryCov_9fa48("30852"), 'isCluster'), stryMutAct_9fa48("30853") ? "" : (stryCov_9fa48("30853"), 'isPrimary'), stryMutAct_9fa48("30854") ? "" : (stryCov_9fa48("30854"), 'jobsDisabled')]);
    nconf.stores.env.readOnly = stryMutAct_9fa48("30855") ? true : (stryCov_9fa48("30855"), false);
    castAsBool.forEach(prop => {
      if (stryMutAct_9fa48("30856")) {
        {}
      } else {
        stryCov_9fa48("30856");
        const value = nconf.get(prop);
        if (stryMutAct_9fa48("30859") ? value === undefined : stryMutAct_9fa48("30858") ? false : stryMutAct_9fa48("30857") ? true : (stryCov_9fa48("30857", "30858", "30859"), value !== undefined)) {
          if (stryMutAct_9fa48("30860")) {
            {}
          } else {
            stryCov_9fa48("30860");
            nconf.set(prop, (stryMutAct_9fa48("30861") ? [] : (stryCov_9fa48("30861"), [stryMutAct_9fa48("30862") ? "" : (stryCov_9fa48("30862"), '1'), 1, stryMutAct_9fa48("30863") ? "" : (stryCov_9fa48("30863"), 'true'), stryMutAct_9fa48("30864") ? false : (stryCov_9fa48("30864"), true)])).includes(value));
          }
        }
      }
    });
    nconf.stores.env.readOnly = stryMutAct_9fa48("30865") ? false : (stryCov_9fa48("30865"), true);
    nconf.set(stryMutAct_9fa48("30866") ? "" : (stryCov_9fa48("30866"), 'runJobs'), stryMutAct_9fa48("30869") ? nconf.get('isPrimary') || !nconf.get('jobsDisabled') : stryMutAct_9fa48("30868") ? false : stryMutAct_9fa48("30867") ? true : (stryCov_9fa48("30867", "30868", "30869"), nconf.get(stryMutAct_9fa48("30870") ? "" : (stryCov_9fa48("30870"), 'isPrimary')) && (stryMutAct_9fa48("30871") ? nconf.get('jobsDisabled') : (stryCov_9fa48("30871"), !nconf.get(stryMutAct_9fa48("30872") ? "" : (stryCov_9fa48("30872"), 'jobsDisabled'))))));

    // Ensure themes_path is a full filepath
    nconf.set(stryMutAct_9fa48("30873") ? "" : (stryCov_9fa48("30873"), 'themes_path'), path.resolve(paths.baseDir, nconf.get(stryMutAct_9fa48("30874") ? "" : (stryCov_9fa48("30874"), 'themes_path'))));
    nconf.set(stryMutAct_9fa48("30875") ? "" : (stryCov_9fa48("30875"), 'core_templates_path'), path.join(paths.baseDir, stryMutAct_9fa48("30876") ? "" : (stryCov_9fa48("30876"), 'src/views')));
    nconf.set(stryMutAct_9fa48("30877") ? "" : (stryCov_9fa48("30877"), 'base_templates_path'), path.join(nconf.get(stryMutAct_9fa48("30878") ? "" : (stryCov_9fa48("30878"), 'themes_path')), stryMutAct_9fa48("30879") ? "" : (stryCov_9fa48("30879"), 'nodebb-theme-persona/templates')));
    nconf.set(stryMutAct_9fa48("30880") ? "" : (stryCov_9fa48("30880"), 'upload_path'), path.resolve(nconf.get(stryMutAct_9fa48("30881") ? "" : (stryCov_9fa48("30881"), 'base_dir')), nconf.get(stryMutAct_9fa48("30882") ? "" : (stryCov_9fa48("30882"), 'upload_path'))));
    nconf.set(stryMutAct_9fa48("30883") ? "" : (stryCov_9fa48("30883"), 'upload_url'), stryMutAct_9fa48("30884") ? "" : (stryCov_9fa48("30884"), '/assets/uploads'));

    // nconf defaults, if not set in config
    if (stryMutAct_9fa48("30887") ? false : stryMutAct_9fa48("30886") ? true : stryMutAct_9fa48("30885") ? nconf.get('sessionKey') : (stryCov_9fa48("30885", "30886", "30887"), !nconf.get(stryMutAct_9fa48("30888") ? "" : (stryCov_9fa48("30888"), 'sessionKey')))) {
      if (stryMutAct_9fa48("30889")) {
        {}
      } else {
        stryCov_9fa48("30889");
        nconf.set(stryMutAct_9fa48("30890") ? "" : (stryCov_9fa48("30890"), 'sessionKey'), stryMutAct_9fa48("30891") ? "" : (stryCov_9fa48("30891"), 'express.sid'));
      }
    }
    if (stryMutAct_9fa48("30893") ? false : stryMutAct_9fa48("30892") ? true : (stryCov_9fa48("30892", "30893"), nconf.get(stryMutAct_9fa48("30894") ? "" : (stryCov_9fa48("30894"), 'url')))) {
      if (stryMutAct_9fa48("30895")) {
        {}
      } else {
        stryCov_9fa48("30895");
        nconf.set(stryMutAct_9fa48("30896") ? "" : (stryCov_9fa48("30896"), 'url'), nconf.get(stryMutAct_9fa48("30897") ? "" : (stryCov_9fa48("30897"), 'url')).replace(stryMutAct_9fa48("30898") ? /\// : (stryCov_9fa48("30898"), /\/$/), stryMutAct_9fa48("30899") ? "Stryker was here!" : (stryCov_9fa48("30899"), '')));
        nconf.set(stryMutAct_9fa48("30900") ? "" : (stryCov_9fa48("30900"), 'url_parsed'), url.parse(nconf.get(stryMutAct_9fa48("30901") ? "" : (stryCov_9fa48("30901"), 'url'))));
        // Parse out the relative_url and other goodies from the configured URL
        const urlObject = url.parse(nconf.get(stryMutAct_9fa48("30902") ? "" : (stryCov_9fa48("30902"), 'url')));
        const relativePath = (stryMutAct_9fa48("30905") ? urlObject.pathname === '/' : stryMutAct_9fa48("30904") ? false : stryMutAct_9fa48("30903") ? true : (stryCov_9fa48("30903", "30904", "30905"), urlObject.pathname !== (stryMutAct_9fa48("30906") ? "" : (stryCov_9fa48("30906"), '/')))) ? urlObject.pathname.replace(stryMutAct_9fa48("30908") ? /\/$/ : stryMutAct_9fa48("30907") ? /\/+/ : (stryCov_9fa48("30907", "30908"), /\/+$/), stryMutAct_9fa48("30909") ? "Stryker was here!" : (stryCov_9fa48("30909"), '')) : stryMutAct_9fa48("30910") ? "Stryker was here!" : (stryCov_9fa48("30910"), '');
        nconf.set(stryMutAct_9fa48("30911") ? "" : (stryCov_9fa48("30911"), 'base_url'), stryMutAct_9fa48("30912") ? `` : (stryCov_9fa48("30912"), `${urlObject.protocol}//${urlObject.host}`));
        nconf.set(stryMutAct_9fa48("30913") ? "" : (stryCov_9fa48("30913"), 'secure'), stryMutAct_9fa48("30916") ? urlObject.protocol !== 'https:' : stryMutAct_9fa48("30915") ? false : stryMutAct_9fa48("30914") ? true : (stryCov_9fa48("30914", "30915", "30916"), urlObject.protocol === (stryMutAct_9fa48("30917") ? "" : (stryCov_9fa48("30917"), 'https:'))));
        nconf.set(stryMutAct_9fa48("30918") ? "" : (stryCov_9fa48("30918"), 'use_port'), stryMutAct_9fa48("30919") ? !urlObject.port : (stryCov_9fa48("30919"), !(stryMutAct_9fa48("30920") ? urlObject.port : (stryCov_9fa48("30920"), !urlObject.port))));
        nconf.set(stryMutAct_9fa48("30921") ? "" : (stryCov_9fa48("30921"), 'relative_path'), relativePath);
        if (stryMutAct_9fa48("30924") ? false : stryMutAct_9fa48("30923") ? true : stryMutAct_9fa48("30922") ? nconf.get('asset_base_url') : (stryCov_9fa48("30922", "30923", "30924"), !nconf.get(stryMutAct_9fa48("30925") ? "" : (stryCov_9fa48("30925"), 'asset_base_url')))) {
          if (stryMutAct_9fa48("30926")) {
            {}
          } else {
            stryCov_9fa48("30926");
            nconf.set(stryMutAct_9fa48("30927") ? "" : (stryCov_9fa48("30927"), 'asset_base_url'), stryMutAct_9fa48("30928") ? `` : (stryCov_9fa48("30928"), `${relativePath}/assets`));
          }
        }
        nconf.set(stryMutAct_9fa48("30929") ? "" : (stryCov_9fa48("30929"), 'port'), stryMutAct_9fa48("30932") ? (nconf.get('PORT') || nconf.get('port') || urlObject.port || (nconf.get('PORT_ENV_VAR') ? nconf.get(nconf.get('PORT_ENV_VAR')) : false)) && 4567 : stryMutAct_9fa48("30931") ? false : stryMutAct_9fa48("30930") ? true : (stryCov_9fa48("30930", "30931", "30932"), (stryMutAct_9fa48("30934") ? (nconf.get('PORT') || nconf.get('port') || urlObject.port) && (nconf.get('PORT_ENV_VAR') ? nconf.get(nconf.get('PORT_ENV_VAR')) : false) : stryMutAct_9fa48("30933") ? false : (stryCov_9fa48("30933", "30934"), (stryMutAct_9fa48("30936") ? (nconf.get('PORT') || nconf.get('port')) && urlObject.port : stryMutAct_9fa48("30935") ? false : (stryCov_9fa48("30935", "30936"), (stryMutAct_9fa48("30938") ? nconf.get('PORT') && nconf.get('port') : stryMutAct_9fa48("30937") ? false : (stryCov_9fa48("30937", "30938"), nconf.get(stryMutAct_9fa48("30939") ? "" : (stryCov_9fa48("30939"), 'PORT')) || nconf.get(stryMutAct_9fa48("30940") ? "" : (stryCov_9fa48("30940"), 'port')))) || urlObject.port)) || (nconf.get(stryMutAct_9fa48("30941") ? "" : (stryCov_9fa48("30941"), 'PORT_ENV_VAR')) ? nconf.get(nconf.get(stryMutAct_9fa48("30942") ? "" : (stryCov_9fa48("30942"), 'PORT_ENV_VAR'))) : stryMutAct_9fa48("30943") ? true : (stryCov_9fa48("30943"), false)))) || 4567));

        // cookies don't provide isolation by port: http://stackoverflow.com/a/16328399/122353
        const domain = stryMutAct_9fa48("30946") ? nconf.get('cookieDomain') && urlObject.hostname : stryMutAct_9fa48("30945") ? false : stryMutAct_9fa48("30944") ? true : (stryCov_9fa48("30944", "30945", "30946"), nconf.get(stryMutAct_9fa48("30947") ? "" : (stryCov_9fa48("30947"), 'cookieDomain')) || urlObject.hostname);
        const origins = stryMutAct_9fa48("30950") ? nconf.get('socket.io:origins') && `${urlObject.protocol}//${domain}:*` : stryMutAct_9fa48("30949") ? false : stryMutAct_9fa48("30948") ? true : (stryCov_9fa48("30948", "30949", "30950"), nconf.get(stryMutAct_9fa48("30951") ? "" : (stryCov_9fa48("30951"), 'socket.io:origins')) || (stryMutAct_9fa48("30952") ? `` : (stryCov_9fa48("30952"), `${urlObject.protocol}//${domain}:*`)));
        nconf.set(stryMutAct_9fa48("30953") ? "" : (stryCov_9fa48("30953"), 'socket.io:origins'), origins);
      }
    }
  }
}
function versionCheck() {
  if (stryMutAct_9fa48("30954")) {
    {}
  } else {
    stryCov_9fa48("30954");
    const version = stryMutAct_9fa48("30955") ? process.version : (stryCov_9fa48("30955"), process.version.slice(1));
    const range = pkg.engines.node;
    const semver = require('semver');
    const compatible = semver.satisfies(version, range);
    if (stryMutAct_9fa48("30958") ? false : stryMutAct_9fa48("30957") ? true : stryMutAct_9fa48("30956") ? compatible : (stryCov_9fa48("30956", "30957", "30958"), !compatible)) {
      if (stryMutAct_9fa48("30959")) {
        {}
      } else {
        stryCov_9fa48("30959");
        winston.warn(stryMutAct_9fa48("30960") ? "" : (stryCov_9fa48("30960"), 'Your version of Node.js is too outdated for NodeBB. Please update your version of Node.js.'));
        winston.warn(stryMutAct_9fa48("30961") ? `` : (stryCov_9fa48("30961"), `Recommended ${chalk.green(range)}, ${chalk.yellow(version)} provided\n`));
      }
    }
  }
}
exports.setupWinston = setupWinston;
exports.loadConfig = loadConfig;
exports.versionCheck = versionCheck;