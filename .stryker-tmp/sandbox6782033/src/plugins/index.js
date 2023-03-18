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
const path = require('path');
const winston = require('winston');
const semver = require('semver');
const nconf = require('nconf');
const chalk = require('chalk');
const request = require('request-promise-native');
const user = require('../user');
const posts = require('../posts');
const meta = require('../meta');
const {
  pluginNamePattern,
  themeNamePattern,
  paths
} = require('../constants');
let app;
let middleware;
const Plugins = module.exports;
require('./install')(Plugins);
require('./load')(Plugins);
require('./usage')(Plugins);
Plugins.data = require('./data');
Plugins.hooks = require('./hooks');
Plugins.getPluginPaths = Plugins.data.getPluginPaths;
Plugins.loadPluginInfo = Plugins.data.loadPluginInfo;
Plugins.pluginsData = {};
Plugins.libraries = {};
Plugins.loadedHooks = {};
Plugins.staticDirs = {};
Plugins.cssFiles = stryMutAct_9fa48("27798") ? ["Stryker was here"] : (stryCov_9fa48("27798"), []);
Plugins.lessFiles = stryMutAct_9fa48("27799") ? ["Stryker was here"] : (stryCov_9fa48("27799"), []);
Plugins.acpLessFiles = stryMutAct_9fa48("27800") ? ["Stryker was here"] : (stryCov_9fa48("27800"), []);
Plugins.clientScripts = stryMutAct_9fa48("27801") ? ["Stryker was here"] : (stryCov_9fa48("27801"), []);
Plugins.acpScripts = stryMutAct_9fa48("27802") ? ["Stryker was here"] : (stryCov_9fa48("27802"), []);
Plugins.libraryPaths = stryMutAct_9fa48("27803") ? ["Stryker was here"] : (stryCov_9fa48("27803"), []);
Plugins.versionWarning = stryMutAct_9fa48("27804") ? ["Stryker was here"] : (stryCov_9fa48("27804"), []);
Plugins.languageData = {};
Plugins.loadedPlugins = stryMutAct_9fa48("27805") ? ["Stryker was here"] : (stryCov_9fa48("27805"), []);
Plugins.initialized = stryMutAct_9fa48("27806") ? true : (stryCov_9fa48("27806"), false);
Plugins.requireLibrary = function (pluginData) {
  if (stryMutAct_9fa48("27807")) {
    {}
  } else {
    stryCov_9fa48("27807");
    let libraryPath;
    // attempt to load a plugin directly with `require("nodebb-plugin-*")`
    // Plugins should define their entry point in the standard `main` property of `package.json`
    try {
      if (stryMutAct_9fa48("27808")) {
        {}
      } else {
        stryCov_9fa48("27808");
        libraryPath = pluginData.path;
        Plugins.libraries[pluginData.id] = require(libraryPath);
      }
    } catch (e) {
      if (stryMutAct_9fa48("27809")) {
        {}
      } else {
        stryCov_9fa48("27809");
        // DEPRECATED: @1.15.0, remove in version >=1.17
        // for backwards compatibility
        // if that fails, fall back to `pluginData.library`
        if (stryMutAct_9fa48("27811") ? false : stryMutAct_9fa48("27810") ? true : (stryCov_9fa48("27810", "27811"), pluginData.library)) {
          if (stryMutAct_9fa48("27812")) {
            {}
          } else {
            stryCov_9fa48("27812");
            winston.warn(stryMutAct_9fa48("27813") ? `` : (stryCov_9fa48("27813"), `   [plugins/${pluginData.id}] The plugin.json field "library" is deprecated. Please use the package.json field "main" instead.`));
            winston.verbose(stryMutAct_9fa48("27814") ? `` : (stryCov_9fa48("27814"), `[plugins/${pluginData.id}] See https://github.com/NodeBB/NodeBB/issues/8686`));
            libraryPath = path.join(pluginData.path, pluginData.library);
            Plugins.libraries[pluginData.id] = require(libraryPath);
          }
        } else {
          if (stryMutAct_9fa48("27815")) {
            {}
          } else {
            stryCov_9fa48("27815");
            throw e;
          }
        }
      }
    }
    Plugins.libraryPaths.push(libraryPath);
  }
};
Plugins.init = async function (nbbApp, nbbMiddleware) {
  if (stryMutAct_9fa48("27816")) {
    {}
  } else {
    stryCov_9fa48("27816");
    if (stryMutAct_9fa48("27818") ? false : stryMutAct_9fa48("27817") ? true : (stryCov_9fa48("27817", "27818"), Plugins.initialized)) {
      if (stryMutAct_9fa48("27819")) {
        {}
      } else {
        stryCov_9fa48("27819");
        return;
      }
    }
    if (stryMutAct_9fa48("27821") ? false : stryMutAct_9fa48("27820") ? true : (stryCov_9fa48("27820", "27821"), nbbApp)) {
      if (stryMutAct_9fa48("27822")) {
        {}
      } else {
        stryCov_9fa48("27822");
        app = nbbApp;
        middleware = nbbMiddleware;
      }
    }
    if (stryMutAct_9fa48("27825") ? global.env !== 'development' : stryMutAct_9fa48("27824") ? false : stryMutAct_9fa48("27823") ? true : (stryCov_9fa48("27823", "27824", "27825"), global.env === (stryMutAct_9fa48("27826") ? "" : (stryCov_9fa48("27826"), 'development')))) {
      if (stryMutAct_9fa48("27827")) {
        {}
      } else {
        stryCov_9fa48("27827");
        winston.verbose(stryMutAct_9fa48("27828") ? "" : (stryCov_9fa48("27828"), '[plugins] Initializing plugins system'));
      }
    }
    await Plugins.reload();
    if (stryMutAct_9fa48("27831") ? global.env !== 'development' : stryMutAct_9fa48("27830") ? false : stryMutAct_9fa48("27829") ? true : (stryCov_9fa48("27829", "27830", "27831"), global.env === (stryMutAct_9fa48("27832") ? "" : (stryCov_9fa48("27832"), 'development')))) {
      if (stryMutAct_9fa48("27833")) {
        {}
      } else {
        stryCov_9fa48("27833");
        winston.info(stryMutAct_9fa48("27834") ? "" : (stryCov_9fa48("27834"), '[plugins] Plugins OK'));
      }
    }
    Plugins.initialized = stryMutAct_9fa48("27835") ? false : (stryCov_9fa48("27835"), true);
  }
};
Plugins.reload = async function () {
  if (stryMutAct_9fa48("27836")) {
    {}
  } else {
    stryCov_9fa48("27836");
    // Resetting all local plugin data
    Plugins.libraries = {};
    Plugins.loadedHooks = {};
    Plugins.staticDirs = {};
    Plugins.versionWarning = stryMutAct_9fa48("27837") ? ["Stryker was here"] : (stryCov_9fa48("27837"), []);
    Plugins.cssFiles.length = 0;
    Plugins.lessFiles.length = 0;
    Plugins.acpLessFiles.length = 0;
    Plugins.clientScripts.length = 0;
    Plugins.acpScripts.length = 0;
    Plugins.libraryPaths.length = 0;
    Plugins.loadedPlugins.length = 0;
    await user.addInterstitials();
    const paths = await Plugins.getPluginPaths();
    for (const path of paths) {
      if (stryMutAct_9fa48("27838")) {
        {}
      } else {
        stryCov_9fa48("27838");
        /* eslint-disable no-await-in-loop */
        await Plugins.loadPlugin(path);
      }
    }

    // If some plugins are incompatible, throw the warning here
    if (stryMutAct_9fa48("27841") ? Plugins.versionWarning.length || nconf.get('isPrimary') : stryMutAct_9fa48("27840") ? false : stryMutAct_9fa48("27839") ? true : (stryCov_9fa48("27839", "27840", "27841"), Plugins.versionWarning.length && nconf.get(stryMutAct_9fa48("27842") ? "" : (stryCov_9fa48("27842"), 'isPrimary')))) {
      if (stryMutAct_9fa48("27843")) {
        {}
      } else {
        stryCov_9fa48("27843");
        console.log(stryMutAct_9fa48("27844") ? "Stryker was here!" : (stryCov_9fa48("27844"), ''));
        winston.warn(stryMutAct_9fa48("27845") ? "" : (stryCov_9fa48("27845"), '[plugins/load] The following plugins may not be compatible with your version of NodeBB. This may cause unintended behaviour or crashing. In the event of an unresponsive NodeBB caused by this plugin, run `./nodebb reset -p PLUGINNAME` to disable it.'));
        for (let x = 0, numPlugins = Plugins.versionWarning.length; stryMutAct_9fa48("27848") ? x >= numPlugins : stryMutAct_9fa48("27847") ? x <= numPlugins : stryMutAct_9fa48("27846") ? false : (stryCov_9fa48("27846", "27847", "27848"), x < numPlugins); stryMutAct_9fa48("27849") ? x -= 1 : (stryCov_9fa48("27849"), x += 1)) {
          if (stryMutAct_9fa48("27850")) {
            {}
          } else {
            stryCov_9fa48("27850");
            console.log(stryMutAct_9fa48("27851") ? `` : (stryCov_9fa48("27851"), `${stryMutAct_9fa48("27852") ? chalk.yellow('  * ') - Plugins.versionWarning[x] : (stryCov_9fa48("27852"), chalk.yellow(stryMutAct_9fa48("27853") ? "" : (stryCov_9fa48("27853"), '  * ')) + Plugins.versionWarning[x])}`));
          }
        }
        console.log(stryMutAct_9fa48("27854") ? "Stryker was here!" : (stryCov_9fa48("27854"), ''));
      }
    }

    // Core hooks
    posts.registerHooks();
    meta.configs.registerHooks();

    // Deprecation notices
    Plugins.hooks._deprecated.forEach((deprecation, hook) => {
      if (stryMutAct_9fa48("27855")) {
        {}
      } else {
        stryCov_9fa48("27855");
        if (stryMutAct_9fa48("27858") ? !deprecation.affected && !deprecation.affected.size : stryMutAct_9fa48("27857") ? false : stryMutAct_9fa48("27856") ? true : (stryCov_9fa48("27856", "27857", "27858"), (stryMutAct_9fa48("27859") ? deprecation.affected : (stryCov_9fa48("27859"), !deprecation.affected)) || (stryMutAct_9fa48("27860") ? deprecation.affected.size : (stryCov_9fa48("27860"), !deprecation.affected.size)))) {
          if (stryMutAct_9fa48("27861")) {
            {}
          } else {
            stryCov_9fa48("27861");
            return;
          }
        }
        const replacement = deprecation.hasOwnProperty(stryMutAct_9fa48("27862") ? "" : (stryCov_9fa48("27862"), 'new')) ? stryMutAct_9fa48("27863") ? `` : (stryCov_9fa48("27863"), `Please use ${chalk.yellow(deprecation.new)} instead.`) : stryMutAct_9fa48("27864") ? "" : (stryCov_9fa48("27864"), 'There is no alternative.');
        winston.warn(stryMutAct_9fa48("27865") ? `` : (stryCov_9fa48("27865"), `[plugins/load] ${chalk.white.bgRed.bold(stryMutAct_9fa48("27866") ? "" : (stryCov_9fa48("27866"), 'DEPRECATION'))} The hook ${chalk.yellow(hook)} has been deprecated as of ${deprecation.since}, and slated for removal in ${deprecation.until}. ${replacement} The following plugins are still listening for this hook:`));
        deprecation.affected.forEach(stryMutAct_9fa48("27867") ? () => undefined : (stryCov_9fa48("27867"), id => console.log(stryMutAct_9fa48("27868") ? `` : (stryCov_9fa48("27868"), `  ${chalk.yellow(stryMutAct_9fa48("27869") ? "" : (stryCov_9fa48("27869"), '*'))} ${id}`))));
      }
    });

    // Lower priority runs earlier
    Object.keys(Plugins.loadedHooks).forEach(hook => {
      if (stryMutAct_9fa48("27870")) {
        {}
      } else {
        stryCov_9fa48("27870");
        stryMutAct_9fa48("27871") ? Plugins.loadedHooks[hook] : (stryCov_9fa48("27871"), Plugins.loadedHooks[hook].sort(stryMutAct_9fa48("27872") ? () => undefined : (stryCov_9fa48("27872"), (a, b) => stryMutAct_9fa48("27873") ? a.priority + b.priority : (stryCov_9fa48("27873"), a.priority - b.priority))));
      }
    });

    // Post-reload actions
    await posts.configureSanitize();
  }
};
Plugins.reloadRoutes = async function (params) {
  if (stryMutAct_9fa48("27874")) {
    {}
  } else {
    stryCov_9fa48("27874");
    const controllers = require('../controllers');
    await Plugins.hooks.fire(stryMutAct_9fa48("27875") ? "" : (stryCov_9fa48("27875"), 'static:app.load'), stryMutAct_9fa48("27876") ? {} : (stryCov_9fa48("27876"), {
      app: app,
      router: params.router,
      middleware: middleware,
      controllers: controllers
    }));
    winston.verbose(stryMutAct_9fa48("27877") ? "" : (stryCov_9fa48("27877"), '[plugins] All plugins reloaded and rerouted'));
  }
};
Plugins.get = async function (id) {
  if (stryMutAct_9fa48("27878")) {
    {}
  } else {
    stryCov_9fa48("27878");
    const url = stryMutAct_9fa48("27879") ? `` : (stryCov_9fa48("27879"), `${stryMutAct_9fa48("27882") ? nconf.get('registry') && 'https://packages.nodebb.org' : stryMutAct_9fa48("27881") ? false : stryMutAct_9fa48("27880") ? true : (stryCov_9fa48("27880", "27881", "27882"), nconf.get(stryMutAct_9fa48("27883") ? "" : (stryCov_9fa48("27883"), 'registry')) || (stryMutAct_9fa48("27884") ? "" : (stryCov_9fa48("27884"), 'https://packages.nodebb.org')))}/api/v1/plugins/${id}`);
    const body = await request(url, stryMutAct_9fa48("27885") ? {} : (stryCov_9fa48("27885"), {
      json: stryMutAct_9fa48("27886") ? false : (stryCov_9fa48("27886"), true)
    }));
    let normalised = await Plugins.normalise(stryMutAct_9fa48("27887") ? [] : (stryCov_9fa48("27887"), [body ? body.payload : {}]));
    normalised = stryMutAct_9fa48("27888") ? normalised : (stryCov_9fa48("27888"), normalised.filter(stryMutAct_9fa48("27889") ? () => undefined : (stryCov_9fa48("27889"), plugin => stryMutAct_9fa48("27892") ? plugin.id !== id : stryMutAct_9fa48("27891") ? false : stryMutAct_9fa48("27890") ? true : (stryCov_9fa48("27890", "27891", "27892"), plugin.id === id))));
    return normalised.length ? normalised[0] : undefined;
  }
};
Plugins.list = async function (matching) {
  if (stryMutAct_9fa48("27893")) {
    {}
  } else {
    stryCov_9fa48("27893");
    if (stryMutAct_9fa48("27896") ? matching !== undefined : stryMutAct_9fa48("27895") ? false : stryMutAct_9fa48("27894") ? true : (stryCov_9fa48("27894", "27895", "27896"), matching === undefined)) {
      if (stryMutAct_9fa48("27897")) {
        {}
      } else {
        stryCov_9fa48("27897");
        matching = stryMutAct_9fa48("27898") ? false : (stryCov_9fa48("27898"), true);
      }
    }
    const {
      version
    } = require(paths.currentPackage);
    const url = stryMutAct_9fa48("27899") ? `` : (stryCov_9fa48("27899"), `${stryMutAct_9fa48("27902") ? nconf.get('registry') && 'https://packages.nodebb.org' : stryMutAct_9fa48("27901") ? false : stryMutAct_9fa48("27900") ? true : (stryCov_9fa48("27900", "27901", "27902"), nconf.get(stryMutAct_9fa48("27903") ? "" : (stryCov_9fa48("27903"), 'registry')) || (stryMutAct_9fa48("27904") ? "" : (stryCov_9fa48("27904"), 'https://packages.nodebb.org')))}/api/v1/plugins${(stryMutAct_9fa48("27907") ? matching === false : stryMutAct_9fa48("27906") ? false : stryMutAct_9fa48("27905") ? true : (stryCov_9fa48("27905", "27906", "27907"), matching !== (stryMutAct_9fa48("27908") ? true : (stryCov_9fa48("27908"), false)))) ? stryMutAct_9fa48("27909") ? `` : (stryCov_9fa48("27909"), `?version=${version}`) : stryMutAct_9fa48("27910") ? "Stryker was here!" : (stryCov_9fa48("27910"), '')}`);
    try {
      if (stryMutAct_9fa48("27911")) {
        {}
      } else {
        stryCov_9fa48("27911");
        const body = await request(url, stryMutAct_9fa48("27912") ? {} : (stryCov_9fa48("27912"), {
          json: stryMutAct_9fa48("27913") ? false : (stryCov_9fa48("27913"), true)
        }));
        return await Plugins.normalise(body);
      }
    } catch (err) {
      if (stryMutAct_9fa48("27914")) {
        {}
      } else {
        stryCov_9fa48("27914");
        winston.error(stryMutAct_9fa48("27915") ? `` : (stryCov_9fa48("27915"), `Error loading ${url}`), err);
        return await Plugins.normalise(stryMutAct_9fa48("27916") ? ["Stryker was here"] : (stryCov_9fa48("27916"), []));
      }
    }
  }
};
Plugins.listTrending = async () => {
  if (stryMutAct_9fa48("27917")) {
    {}
  } else {
    stryCov_9fa48("27917");
    const url = stryMutAct_9fa48("27918") ? `` : (stryCov_9fa48("27918"), `${stryMutAct_9fa48("27921") ? nconf.get('registry') && 'https://packages.nodebb.org' : stryMutAct_9fa48("27920") ? false : stryMutAct_9fa48("27919") ? true : (stryCov_9fa48("27919", "27920", "27921"), nconf.get(stryMutAct_9fa48("27922") ? "" : (stryCov_9fa48("27922"), 'registry')) || (stryMutAct_9fa48("27923") ? "" : (stryCov_9fa48("27923"), 'https://packages.nodebb.org')))}/api/v1/analytics/top/week`);
    return await request(url, stryMutAct_9fa48("27924") ? {} : (stryCov_9fa48("27924"), {
      json: stryMutAct_9fa48("27925") ? false : (stryCov_9fa48("27925"), true)
    }));
  }
};
Plugins.normalise = async function (apiReturn) {
  if (stryMutAct_9fa48("27926")) {
    {}
  } else {
    stryCov_9fa48("27926");
    const pluginMap = {};
    const {
      dependencies
    } = require(paths.currentPackage);
    apiReturn = Array.isArray(apiReturn) ? apiReturn : stryMutAct_9fa48("27927") ? ["Stryker was here"] : (stryCov_9fa48("27927"), []);
    apiReturn.forEach(packageData => {
      if (stryMutAct_9fa48("27928")) {
        {}
      } else {
        stryCov_9fa48("27928");
        packageData.id = packageData.name;
        packageData.installed = stryMutAct_9fa48("27929") ? true : (stryCov_9fa48("27929"), false);
        packageData.active = stryMutAct_9fa48("27930") ? true : (stryCov_9fa48("27930"), false);
        packageData.url = stryMutAct_9fa48("27933") ? packageData.url && (packageData.repository ? packageData.repository.url : '') : stryMutAct_9fa48("27932") ? false : stryMutAct_9fa48("27931") ? true : (stryCov_9fa48("27931", "27932", "27933"), packageData.url || (packageData.repository ? packageData.repository.url : stryMutAct_9fa48("27934") ? "Stryker was here!" : (stryCov_9fa48("27934"), '')));
        pluginMap[packageData.name] = packageData;
      }
    });
    let installedPlugins = await Plugins.showInstalled();
    installedPlugins = stryMutAct_9fa48("27935") ? installedPlugins : (stryCov_9fa48("27935"), installedPlugins.filter(stryMutAct_9fa48("27936") ? () => undefined : (stryCov_9fa48("27936"), plugin => stryMutAct_9fa48("27939") ? plugin || !plugin.system : stryMutAct_9fa48("27938") ? false : stryMutAct_9fa48("27937") ? true : (stryCov_9fa48("27937", "27938", "27939"), plugin && (stryMutAct_9fa48("27940") ? plugin.system : (stryCov_9fa48("27940"), !plugin.system))))));
    installedPlugins.forEach(plugin => {
      if (stryMutAct_9fa48("27941")) {
        {}
      } else {
        stryCov_9fa48("27941");
        // If it errored out because a package.json or plugin.json couldn't be read, no need to do this stuff
        if (stryMutAct_9fa48("27943") ? false : stryMutAct_9fa48("27942") ? true : (stryCov_9fa48("27942", "27943"), plugin.error)) {
          if (stryMutAct_9fa48("27944")) {
            {}
          } else {
            stryCov_9fa48("27944");
            pluginMap[plugin.id] = stryMutAct_9fa48("27947") ? pluginMap[plugin.id] && {} : stryMutAct_9fa48("27946") ? false : stryMutAct_9fa48("27945") ? true : (stryCov_9fa48("27945", "27946", "27947"), pluginMap[plugin.id] || {});
            pluginMap[plugin.id].installed = stryMutAct_9fa48("27948") ? false : (stryCov_9fa48("27948"), true);
            pluginMap[plugin.id].error = stryMutAct_9fa48("27949") ? false : (stryCov_9fa48("27949"), true);
            return;
          }
        }
        pluginMap[plugin.id] = stryMutAct_9fa48("27952") ? pluginMap[plugin.id] && {} : stryMutAct_9fa48("27951") ? false : stryMutAct_9fa48("27950") ? true : (stryCov_9fa48("27950", "27951", "27952"), pluginMap[plugin.id] || {});
        pluginMap[plugin.id].id = stryMutAct_9fa48("27955") ? pluginMap[plugin.id].id && plugin.id : stryMutAct_9fa48("27954") ? false : stryMutAct_9fa48("27953") ? true : (stryCov_9fa48("27953", "27954", "27955"), pluginMap[plugin.id].id || plugin.id);
        pluginMap[plugin.id].name = stryMutAct_9fa48("27958") ? plugin.name && pluginMap[plugin.id].name : stryMutAct_9fa48("27957") ? false : stryMutAct_9fa48("27956") ? true : (stryCov_9fa48("27956", "27957", "27958"), plugin.name || pluginMap[plugin.id].name);
        pluginMap[plugin.id].description = plugin.description;
        pluginMap[plugin.id].url = stryMutAct_9fa48("27961") ? pluginMap[plugin.id].url && plugin.url : stryMutAct_9fa48("27960") ? false : stryMutAct_9fa48("27959") ? true : (stryCov_9fa48("27959", "27960", "27961"), pluginMap[plugin.id].url || plugin.url);
        pluginMap[plugin.id].installed = stryMutAct_9fa48("27962") ? false : (stryCov_9fa48("27962"), true);
        pluginMap[plugin.id].isTheme = themeNamePattern.test(plugin.id);
        pluginMap[plugin.id].error = stryMutAct_9fa48("27965") ? plugin.error && false : stryMutAct_9fa48("27964") ? false : stryMutAct_9fa48("27963") ? true : (stryCov_9fa48("27963", "27964", "27965"), plugin.error || (stryMutAct_9fa48("27966") ? true : (stryCov_9fa48("27966"), false)));
        pluginMap[plugin.id].active = plugin.active;
        pluginMap[plugin.id].version = plugin.version;
        pluginMap[plugin.id].settingsRoute = plugin.settingsRoute;
        pluginMap[plugin.id].license = plugin.license;

        // If package.json defines a version to use, stick to that
        if (stryMutAct_9fa48("27969") ? dependencies.hasOwnProperty(plugin.id) || semver.valid(dependencies[plugin.id]) : stryMutAct_9fa48("27968") ? false : stryMutAct_9fa48("27967") ? true : (stryCov_9fa48("27967", "27968", "27969"), dependencies.hasOwnProperty(plugin.id) && semver.valid(dependencies[plugin.id]))) {
          if (stryMutAct_9fa48("27970")) {
            {}
          } else {
            stryCov_9fa48("27970");
            pluginMap[plugin.id].latest = dependencies[plugin.id];
          }
        } else {
          if (stryMutAct_9fa48("27971")) {
            {}
          } else {
            stryCov_9fa48("27971");
            pluginMap[plugin.id].latest = stryMutAct_9fa48("27974") ? pluginMap[plugin.id].latest && plugin.version : stryMutAct_9fa48("27973") ? false : stryMutAct_9fa48("27972") ? true : (stryCov_9fa48("27972", "27973", "27974"), pluginMap[plugin.id].latest || plugin.version);
          }
        }
        pluginMap[plugin.id].outdated = semver.gt(pluginMap[plugin.id].latest, pluginMap[plugin.id].version);
      }
    });
    const pluginArray = Object.values(pluginMap);
    stryMutAct_9fa48("27975") ? pluginArray : (stryCov_9fa48("27975"), pluginArray.sort((a, b) => {
      if (stryMutAct_9fa48("27976")) {
        {}
      } else {
        stryCov_9fa48("27976");
        if (stryMutAct_9fa48("27980") ? a.name <= b.name : stryMutAct_9fa48("27979") ? a.name >= b.name : stryMutAct_9fa48("27978") ? false : stryMutAct_9fa48("27977") ? true : (stryCov_9fa48("27977", "27978", "27979", "27980"), a.name > b.name)) {
          if (stryMutAct_9fa48("27981")) {
            {}
          } else {
            stryCov_9fa48("27981");
            return 1;
          }
        } else if (stryMutAct_9fa48("27985") ? a.name >= b.name : stryMutAct_9fa48("27984") ? a.name <= b.name : stryMutAct_9fa48("27983") ? false : stryMutAct_9fa48("27982") ? true : (stryCov_9fa48("27982", "27983", "27984", "27985"), a.name < b.name)) {
          if (stryMutAct_9fa48("27986")) {
            {}
          } else {
            stryCov_9fa48("27986");
            return stryMutAct_9fa48("27987") ? +1 : (stryCov_9fa48("27987"), -1);
          }
        }
        return 0;
      }
    }));
    return pluginArray;
  }
};
Plugins.nodeModulesPath = paths.nodeModules;
Plugins.showInstalled = async function () {
  if (stryMutAct_9fa48("27988")) {
    {}
  } else {
    stryCov_9fa48("27988");
    const dirs = await fs.promises.readdir(Plugins.nodeModulesPath);
    let pluginPaths = await findNodeBBModules(dirs);
    pluginPaths = pluginPaths.map(stryMutAct_9fa48("27989") ? () => undefined : (stryCov_9fa48("27989"), dir => path.join(Plugins.nodeModulesPath, dir)));
    async function load(file) {
      if (stryMutAct_9fa48("27990")) {
        {}
      } else {
        stryCov_9fa48("27990");
        try {
          if (stryMutAct_9fa48("27991")) {
            {}
          } else {
            stryCov_9fa48("27991");
            const pluginData = await Plugins.loadPluginInfo(file);
            const isActive = await Plugins.isActive(pluginData.name);
            delete pluginData.hooks;
            delete pluginData.library;
            pluginData.active = isActive;
            pluginData.installed = stryMutAct_9fa48("27992") ? false : (stryCov_9fa48("27992"), true);
            pluginData.error = stryMutAct_9fa48("27993") ? true : (stryCov_9fa48("27993"), false);
            return pluginData;
          }
        } catch (err) {
          if (stryMutAct_9fa48("27994")) {
            {}
          } else {
            stryCov_9fa48("27994");
            winston.error(err.stack);
          }
        }
      }
    }
    const plugins = await Promise.all(pluginPaths.map(stryMutAct_9fa48("27995") ? () => undefined : (stryCov_9fa48("27995"), file => load(file))));
    return stryMutAct_9fa48("27996") ? plugins : (stryCov_9fa48("27996"), plugins.filter(Boolean));
  }
};
async function findNodeBBModules(dirs) {
  if (stryMutAct_9fa48("27997")) {
    {}
  } else {
    stryCov_9fa48("27997");
    const pluginPaths = stryMutAct_9fa48("27998") ? ["Stryker was here"] : (stryCov_9fa48("27998"), []);
    await Promise.all(dirs.map(async dirname => {
      if (stryMutAct_9fa48("27999")) {
        {}
      } else {
        stryCov_9fa48("27999");
        const dirPath = path.join(Plugins.nodeModulesPath, dirname);
        const isDir = await isDirectory(dirPath);
        if (stryMutAct_9fa48("28002") ? false : stryMutAct_9fa48("28001") ? true : stryMutAct_9fa48("28000") ? isDir : (stryCov_9fa48("28000", "28001", "28002"), !isDir)) {
          if (stryMutAct_9fa48("28003")) {
            {}
          } else {
            stryCov_9fa48("28003");
            return;
          }
        }
        if (stryMutAct_9fa48("28005") ? false : stryMutAct_9fa48("28004") ? true : (stryCov_9fa48("28004", "28005"), pluginNamePattern.test(dirname))) {
          if (stryMutAct_9fa48("28006")) {
            {}
          } else {
            stryCov_9fa48("28006");
            pluginPaths.push(dirname);
            return;
          }
        }
        if (stryMutAct_9fa48("28009") ? dirname[0] !== '@' : stryMutAct_9fa48("28008") ? false : stryMutAct_9fa48("28007") ? true : (stryCov_9fa48("28007", "28008", "28009"), dirname[0] === (stryMutAct_9fa48("28010") ? "" : (stryCov_9fa48("28010"), '@')))) {
          if (stryMutAct_9fa48("28011")) {
            {}
          } else {
            stryCov_9fa48("28011");
            const subdirs = await fs.promises.readdir(dirPath);
            await Promise.all(subdirs.map(async subdir => {
              if (stryMutAct_9fa48("28012")) {
                {}
              } else {
                stryCov_9fa48("28012");
                if (stryMutAct_9fa48("28015") ? false : stryMutAct_9fa48("28014") ? true : stryMutAct_9fa48("28013") ? pluginNamePattern.test(subdir) : (stryCov_9fa48("28013", "28014", "28015"), !pluginNamePattern.test(subdir))) {
                  if (stryMutAct_9fa48("28016")) {
                    {}
                  } else {
                    stryCov_9fa48("28016");
                    return;
                  }
                }
                const subdirPath = path.join(dirPath, subdir);
                const isDir = await isDirectory(subdirPath);
                if (stryMutAct_9fa48("28018") ? false : stryMutAct_9fa48("28017") ? true : (stryCov_9fa48("28017", "28018"), isDir)) {
                  if (stryMutAct_9fa48("28019")) {
                    {}
                  } else {
                    stryCov_9fa48("28019");
                    pluginPaths.push(stryMutAct_9fa48("28020") ? `` : (stryCov_9fa48("28020"), `${dirname}/${subdir}`));
                  }
                }
              }
            }));
          }
        }
      }
    }));
    return pluginPaths;
  }
}
async function isDirectory(dirPath) {
  if (stryMutAct_9fa48("28021")) {
    {}
  } else {
    stryCov_9fa48("28021");
    try {
      if (stryMutAct_9fa48("28022")) {
        {}
      } else {
        stryCov_9fa48("28022");
        const stats = await fs.promises.stat(dirPath);
        return stats.isDirectory();
      }
    } catch (err) {
      if (stryMutAct_9fa48("28023")) {
        {}
      } else {
        stryCov_9fa48("28023");
        if (stryMutAct_9fa48("28026") ? err.code === 'ENOENT' : stryMutAct_9fa48("28025") ? false : stryMutAct_9fa48("28024") ? true : (stryCov_9fa48("28024", "28025", "28026"), err.code !== (stryMutAct_9fa48("28027") ? "" : (stryCov_9fa48("28027"), 'ENOENT')))) {
          if (stryMutAct_9fa48("28028")) {
            {}
          } else {
            stryCov_9fa48("28028");
            throw err;
          }
        }
        return stryMutAct_9fa48("28029") ? true : (stryCov_9fa48("28029"), false);
      }
    }
  }
}
require('../promisify')(Plugins);