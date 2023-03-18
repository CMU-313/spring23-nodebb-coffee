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
const _ = require('lodash');
const nconf = require('nconf');
const db = require('../database');
const file = require('../file');
const {
  paths
} = require('../constants');
const Data = module.exports;
const basePath = path.join(__dirname, stryMutAct_9fa48("27281") ? "" : (stryCov_9fa48("27281"), '../../'));

// to get this functionality use `plugins.getActive()` from `src/plugins/install.js` instead
// this method duplicates that one, because requiring that file here would have side effects
async function getActiveIds() {
  if (stryMutAct_9fa48("27282")) {
    {}
  } else {
    stryCov_9fa48("27282");
    if (stryMutAct_9fa48("27284") ? false : stryMutAct_9fa48("27283") ? true : (stryCov_9fa48("27283", "27284"), nconf.get(stryMutAct_9fa48("27285") ? "" : (stryCov_9fa48("27285"), 'plugins:active')))) {
      if (stryMutAct_9fa48("27286")) {
        {}
      } else {
        stryCov_9fa48("27286");
        return nconf.get(stryMutAct_9fa48("27287") ? "" : (stryCov_9fa48("27287"), 'plugins:active'));
      }
    }
    return await db.getSortedSetRange(stryMutAct_9fa48("27288") ? "" : (stryCov_9fa48("27288"), 'plugins:active'), 0, stryMutAct_9fa48("27289") ? +1 : (stryCov_9fa48("27289"), -1));
  }
}
Data.getPluginPaths = async function () {
  if (stryMutAct_9fa48("27290")) {
    {}
  } else {
    stryCov_9fa48("27290");
    const plugins = await getActiveIds();
    const pluginPaths = stryMutAct_9fa48("27291") ? plugins.map(plugin => path.join(paths.nodeModules, plugin)) : (stryCov_9fa48("27291"), plugins.filter(stryMutAct_9fa48("27292") ? () => undefined : (stryCov_9fa48("27292"), plugin => stryMutAct_9fa48("27295") ? plugin || typeof plugin === 'string' : stryMutAct_9fa48("27294") ? false : stryMutAct_9fa48("27293") ? true : (stryCov_9fa48("27293", "27294", "27295"), plugin && (stryMutAct_9fa48("27297") ? typeof plugin !== 'string' : stryMutAct_9fa48("27296") ? true : (stryCov_9fa48("27296", "27297"), typeof plugin === (stryMutAct_9fa48("27298") ? "" : (stryCov_9fa48("27298"), 'string'))))))).map(stryMutAct_9fa48("27299") ? () => undefined : (stryCov_9fa48("27299"), plugin => path.join(paths.nodeModules, plugin))));
    const exists = await Promise.all(pluginPaths.map(file.exists));
    exists.forEach((exists, i) => {
      if (stryMutAct_9fa48("27300")) {
        {}
      } else {
        stryCov_9fa48("27300");
        if (stryMutAct_9fa48("27303") ? false : stryMutAct_9fa48("27302") ? true : stryMutAct_9fa48("27301") ? exists : (stryCov_9fa48("27301", "27302", "27303"), !exists)) {
          if (stryMutAct_9fa48("27304")) {
            {}
          } else {
            stryCov_9fa48("27304");
            winston.warn(stryMutAct_9fa48("27305") ? `` : (stryCov_9fa48("27305"), `[plugins] "${plugins[i]}" is active but not installed.`));
          }
        }
      }
    });
    return stryMutAct_9fa48("27306") ? pluginPaths : (stryCov_9fa48("27306"), pluginPaths.filter(stryMutAct_9fa48("27307") ? () => undefined : (stryCov_9fa48("27307"), (p, i) => exists[i])));
  }
};
Data.loadPluginInfo = async function (pluginPath) {
  if (stryMutAct_9fa48("27308")) {
    {}
  } else {
    stryCov_9fa48("27308");
    const [packageJson, pluginJson] = await Promise.all(stryMutAct_9fa48("27309") ? [] : (stryCov_9fa48("27309"), [fs.promises.readFile(path.join(pluginPath, stryMutAct_9fa48("27310") ? "" : (stryCov_9fa48("27310"), 'package.json')), stryMutAct_9fa48("27311") ? "" : (stryCov_9fa48("27311"), 'utf8')), fs.promises.readFile(path.join(pluginPath, stryMutAct_9fa48("27312") ? "" : (stryCov_9fa48("27312"), 'plugin.json')), stryMutAct_9fa48("27313") ? "" : (stryCov_9fa48("27313"), 'utf8'))]));
    let pluginData;
    let packageData;
    try {
      if (stryMutAct_9fa48("27314")) {
        {}
      } else {
        stryCov_9fa48("27314");
        pluginData = JSON.parse(pluginJson);
        packageData = JSON.parse(packageJson);
        pluginData.license = parseLicense(packageData);
        pluginData.id = packageData.name;
        pluginData.name = packageData.name;
        pluginData.description = packageData.description;
        pluginData.version = packageData.version;
        pluginData.repository = packageData.repository;
        pluginData.nbbpm = packageData.nbbpm;
        pluginData.path = pluginPath;
      }
    } catch (err) {
      if (stryMutAct_9fa48("27315")) {
        {}
      } else {
        stryCov_9fa48("27315");
        const pluginDir = path.basename(pluginPath);
        winston.error(stryMutAct_9fa48("27316") ? `` : (stryCov_9fa48("27316"), `[plugins/${pluginDir}] Error in plugin.json or package.json!${err.stack}`));
        throw new Error(stryMutAct_9fa48("27317") ? "" : (stryCov_9fa48("27317"), '[[error:parse-error]]'));
      }
    }
    return pluginData;
  }
};
function parseLicense(packageData) {
  if (stryMutAct_9fa48("27318")) {
    {}
  } else {
    stryCov_9fa48("27318");
    try {
      if (stryMutAct_9fa48("27319")) {
        {}
      } else {
        stryCov_9fa48("27319");
        const licenseData = require(stryMutAct_9fa48("27320") ? `` : (stryCov_9fa48("27320"), `spdx-license-list/licenses/${packageData.license}`));
        return stryMutAct_9fa48("27321") ? {} : (stryCov_9fa48("27321"), {
          name: licenseData.name,
          text: licenseData.licenseText
        });
      }
    } catch (e) {
      if (stryMutAct_9fa48("27322")) {
        {}
      } else {
        stryCov_9fa48("27322");
        // No license matched
        return null;
      }
    }
  }
}
Data.getActive = async function () {
  if (stryMutAct_9fa48("27323")) {
    {}
  } else {
    stryCov_9fa48("27323");
    const pluginPaths = await Data.getPluginPaths();
    return await Promise.all(pluginPaths.map(stryMutAct_9fa48("27324") ? () => undefined : (stryCov_9fa48("27324"), p => Data.loadPluginInfo(p))));
  }
};
Data.getStaticDirectories = async function (pluginData) {
  if (stryMutAct_9fa48("27325")) {
    {}
  } else {
    stryCov_9fa48("27325");
    const validMappedPath = stryMutAct_9fa48("27330") ? /^[\W\-_]+$/ : stryMutAct_9fa48("27329") ? /^[^\w\-_]+$/ : stryMutAct_9fa48("27328") ? /^[\w\-_]$/ : stryMutAct_9fa48("27327") ? /^[\w\-_]+/ : stryMutAct_9fa48("27326") ? /[\w\-_]+$/ : (stryCov_9fa48("27326", "27327", "27328", "27329", "27330"), /^[\w\-_]+$/);
    if (stryMutAct_9fa48("27333") ? false : stryMutAct_9fa48("27332") ? true : stryMutAct_9fa48("27331") ? pluginData.staticDirs : (stryCov_9fa48("27331", "27332", "27333"), !pluginData.staticDirs)) {
      if (stryMutAct_9fa48("27334")) {
        {}
      } else {
        stryCov_9fa48("27334");
        return;
      }
    }
    const dirs = Object.keys(pluginData.staticDirs);
    if (stryMutAct_9fa48("27337") ? false : stryMutAct_9fa48("27336") ? true : stryMutAct_9fa48("27335") ? dirs.length : (stryCov_9fa48("27335", "27336", "27337"), !dirs.length)) {
      if (stryMutAct_9fa48("27338")) {
        {}
      } else {
        stryCov_9fa48("27338");
        return;
      }
    }
    const staticDirs = {};
    async function processDir(route) {
      if (stryMutAct_9fa48("27339")) {
        {}
      } else {
        stryCov_9fa48("27339");
        if (stryMutAct_9fa48("27342") ? false : stryMutAct_9fa48("27341") ? true : stryMutAct_9fa48("27340") ? validMappedPath.test(route) : (stryCov_9fa48("27340", "27341", "27342"), !validMappedPath.test(route))) {
          if (stryMutAct_9fa48("27343")) {
            {}
          } else {
            stryCov_9fa48("27343");
            winston.warn(stryMutAct_9fa48("27344") ? `` : (stryCov_9fa48("27344"), `[plugins/${pluginData.id}] Invalid mapped path specified: ${route}. Path must adhere to: ${validMappedPath.toString()}`));
            return;
          }
        }
        const dirPath = await resolveModulePath(pluginData.path, pluginData.staticDirs[route]);
        if (stryMutAct_9fa48("27347") ? false : stryMutAct_9fa48("27346") ? true : stryMutAct_9fa48("27345") ? dirPath : (stryCov_9fa48("27345", "27346", "27347"), !dirPath)) {
          if (stryMutAct_9fa48("27348")) {
            {}
          } else {
            stryCov_9fa48("27348");
            winston.warn(stryMutAct_9fa48("27349") ? `` : (stryCov_9fa48("27349"), `[plugins/${pluginData.id}] Invalid mapped path specified: ${route} => ${pluginData.staticDirs[route]}`));
            return;
          }
        }
        try {
          if (stryMutAct_9fa48("27350")) {
            {}
          } else {
            stryCov_9fa48("27350");
            const stats = await fs.promises.stat(dirPath);
            if (stryMutAct_9fa48("27353") ? false : stryMutAct_9fa48("27352") ? true : stryMutAct_9fa48("27351") ? stats.isDirectory() : (stryCov_9fa48("27351", "27352", "27353"), !stats.isDirectory())) {
              if (stryMutAct_9fa48("27354")) {
                {}
              } else {
                stryCov_9fa48("27354");
                winston.warn(stryMutAct_9fa48("27355") ? `` : (stryCov_9fa48("27355"), `[plugins/${pluginData.id}] Mapped path '${route} => ${dirPath}' is not a directory.`));
                return;
              }
            }
            staticDirs[stryMutAct_9fa48("27356") ? `` : (stryCov_9fa48("27356"), `${pluginData.id}/${route}`)] = dirPath;
          }
        } catch (err) {
          if (stryMutAct_9fa48("27357")) {
            {}
          } else {
            stryCov_9fa48("27357");
            if (stryMutAct_9fa48("27360") ? err.code !== 'ENOENT' : stryMutAct_9fa48("27359") ? false : stryMutAct_9fa48("27358") ? true : (stryCov_9fa48("27358", "27359", "27360"), err.code === (stryMutAct_9fa48("27361") ? "" : (stryCov_9fa48("27361"), 'ENOENT')))) {
              if (stryMutAct_9fa48("27362")) {
                {}
              } else {
                stryCov_9fa48("27362");
                winston.warn(stryMutAct_9fa48("27363") ? `` : (stryCov_9fa48("27363"), `[plugins/${pluginData.id}] Mapped path '${route} => ${dirPath}' not found.`));
                return;
              }
            }
            throw err;
          }
        }
      }
    }
    await Promise.all(dirs.map(stryMutAct_9fa48("27364") ? () => undefined : (stryCov_9fa48("27364"), route => processDir(route))));
    winston.verbose(stryMutAct_9fa48("27365") ? `` : (stryCov_9fa48("27365"), `[plugins] found ${Object.keys(staticDirs).length} static directories for ${pluginData.id}`));
    return staticDirs;
  }
};
Data.getFiles = async function (pluginData, type) {
  if (stryMutAct_9fa48("27366")) {
    {}
  } else {
    stryCov_9fa48("27366");
    if (stryMutAct_9fa48("27369") ? !Array.isArray(pluginData[type]) && !pluginData[type].length : stryMutAct_9fa48("27368") ? false : stryMutAct_9fa48("27367") ? true : (stryCov_9fa48("27367", "27368", "27369"), (stryMutAct_9fa48("27370") ? Array.isArray(pluginData[type]) : (stryCov_9fa48("27370"), !Array.isArray(pluginData[type]))) || (stryMutAct_9fa48("27371") ? pluginData[type].length : (stryCov_9fa48("27371"), !pluginData[type].length)))) {
      if (stryMutAct_9fa48("27372")) {
        {}
      } else {
        stryCov_9fa48("27372");
        return;
      }
    }
    winston.verbose(stryMutAct_9fa48("27373") ? `` : (stryCov_9fa48("27373"), `[plugins] Found ${pluginData[type].length} ${type} file(s) for plugin ${pluginData.id}`));
    return pluginData[type].map(stryMutAct_9fa48("27374") ? () => undefined : (stryCov_9fa48("27374"), file => path.join(pluginData.id, file)));
  }
};

/**
 * With npm@3, dependencies can become flattened, and appear at the root level.
 * This method resolves these differences if it can.
 */
async function resolveModulePath(basePath, modulePath) {
  if (stryMutAct_9fa48("27375")) {
    {}
  } else {
    stryCov_9fa48("27375");
    const isNodeModule = /node_modules/;
    const currentPath = path.join(basePath, modulePath);
    const exists = await file.exists(currentPath);
    if (stryMutAct_9fa48("27377") ? false : stryMutAct_9fa48("27376") ? true : (stryCov_9fa48("27376", "27377"), exists)) {
      if (stryMutAct_9fa48("27378")) {
        {}
      } else {
        stryCov_9fa48("27378");
        return currentPath;
      }
    }
    if (stryMutAct_9fa48("27381") ? false : stryMutAct_9fa48("27380") ? true : stryMutAct_9fa48("27379") ? isNodeModule.test(modulePath) : (stryCov_9fa48("27379", "27380", "27381"), !isNodeModule.test(modulePath))) {
      if (stryMutAct_9fa48("27382")) {
        {}
      } else {
        stryCov_9fa48("27382");
        winston.warn(stryMutAct_9fa48("27383") ? `` : (stryCov_9fa48("27383"), `[plugins] File not found: ${currentPath} (Ignoring)`));
        return;
      }
    }
    const dirPath = path.dirname(basePath);
    if (stryMutAct_9fa48("27386") ? dirPath !== basePath : stryMutAct_9fa48("27385") ? false : stryMutAct_9fa48("27384") ? true : (stryCov_9fa48("27384", "27385", "27386"), dirPath === basePath)) {
      if (stryMutAct_9fa48("27387")) {
        {}
      } else {
        stryCov_9fa48("27387");
        winston.warn(stryMutAct_9fa48("27388") ? `` : (stryCov_9fa48("27388"), `[plugins] File not found: ${currentPath} (Ignoring)`));
        return;
      }
    }
    return await resolveModulePath(dirPath, modulePath);
  }
}
Data.getScripts = async function getScripts(pluginData, target) {
  if (stryMutAct_9fa48("27389")) {
    {}
  } else {
    stryCov_9fa48("27389");
    target = (stryMutAct_9fa48("27392") ? target !== 'client' : stryMutAct_9fa48("27391") ? false : stryMutAct_9fa48("27390") ? true : (stryCov_9fa48("27390", "27391", "27392"), target === (stryMutAct_9fa48("27393") ? "" : (stryCov_9fa48("27393"), 'client')))) ? stryMutAct_9fa48("27394") ? "" : (stryCov_9fa48("27394"), 'scripts') : stryMutAct_9fa48("27395") ? "" : (stryCov_9fa48("27395"), 'acpScripts');
    const input = pluginData[target];
    if (stryMutAct_9fa48("27398") ? !Array.isArray(input) && !input.length : stryMutAct_9fa48("27397") ? false : stryMutAct_9fa48("27396") ? true : (stryCov_9fa48("27396", "27397", "27398"), (stryMutAct_9fa48("27399") ? Array.isArray(input) : (stryCov_9fa48("27399"), !Array.isArray(input))) || (stryMutAct_9fa48("27400") ? input.length : (stryCov_9fa48("27400"), !input.length)))) {
      if (stryMutAct_9fa48("27401")) {
        {}
      } else {
        stryCov_9fa48("27401");
        return;
      }
    }
    const scripts = stryMutAct_9fa48("27402") ? ["Stryker was here"] : (stryCov_9fa48("27402"), []);
    for (const filePath of input) {
      if (stryMutAct_9fa48("27403")) {
        {}
      } else {
        stryCov_9fa48("27403");
        /* eslint-disable no-await-in-loop */
        const modulePath = await resolveModulePath(pluginData.path, filePath);
        if (stryMutAct_9fa48("27405") ? false : stryMutAct_9fa48("27404") ? true : (stryCov_9fa48("27404", "27405"), modulePath)) {
          if (stryMutAct_9fa48("27406")) {
            {}
          } else {
            stryCov_9fa48("27406");
            scripts.push(modulePath);
          }
        }
      }
    }
    if (stryMutAct_9fa48("27408") ? false : stryMutAct_9fa48("27407") ? true : (stryCov_9fa48("27407", "27408"), scripts.length)) {
      if (stryMutAct_9fa48("27409")) {
        {}
      } else {
        stryCov_9fa48("27409");
        winston.verbose(stryMutAct_9fa48("27410") ? `` : (stryCov_9fa48("27410"), `[plugins] Found ${scripts.length} js file(s) for plugin ${pluginData.id}`));
      }
    }
    return scripts;
  }
};
Data.getModules = async function getModules(pluginData) {
  if (stryMutAct_9fa48("27411")) {
    {}
  } else {
    stryCov_9fa48("27411");
    if (stryMutAct_9fa48("27414") ? !pluginData.modules && !pluginData.hasOwnProperty('modules') : stryMutAct_9fa48("27413") ? false : stryMutAct_9fa48("27412") ? true : (stryCov_9fa48("27412", "27413", "27414"), (stryMutAct_9fa48("27415") ? pluginData.modules : (stryCov_9fa48("27415"), !pluginData.modules)) || (stryMutAct_9fa48("27416") ? pluginData.hasOwnProperty('modules') : (stryCov_9fa48("27416"), !pluginData.hasOwnProperty(stryMutAct_9fa48("27417") ? "" : (stryCov_9fa48("27417"), 'modules')))))) {
      if (stryMutAct_9fa48("27418")) {
        {}
      } else {
        stryCov_9fa48("27418");
        return;
      }
    }
    let pluginModules = pluginData.modules;
    if (stryMutAct_9fa48("27420") ? false : stryMutAct_9fa48("27419") ? true : (stryCov_9fa48("27419", "27420"), Array.isArray(pluginModules))) {
      if (stryMutAct_9fa48("27421")) {
        {}
      } else {
        stryCov_9fa48("27421");
        const strip = stryMutAct_9fa48("27424") ? parseInt(pluginData.modulesStrip, 10) && 0 : stryMutAct_9fa48("27423") ? false : stryMutAct_9fa48("27422") ? true : (stryCov_9fa48("27422", "27423", "27424"), parseInt(pluginData.modulesStrip, 10) || 0);
        pluginModules = pluginModules.reduce((prev, modulePath) => {
          if (stryMutAct_9fa48("27425")) {
            {}
          } else {
            stryCov_9fa48("27425");
            let key;
            if (stryMutAct_9fa48("27427") ? false : stryMutAct_9fa48("27426") ? true : (stryCov_9fa48("27426", "27427"), strip)) {
              if (stryMutAct_9fa48("27428")) {
                {}
              } else {
                stryCov_9fa48("27428");
                key = modulePath.replace(new RegExp(stryMutAct_9fa48("27429") ? `` : (stryCov_9fa48("27429"), `.?(/[^/]+){${strip}}/`)), stryMutAct_9fa48("27430") ? "Stryker was here!" : (stryCov_9fa48("27430"), ''));
              }
            } else {
              if (stryMutAct_9fa48("27431")) {
                {}
              } else {
                stryCov_9fa48("27431");
                key = path.basename(modulePath);
              }
            }
            prev[key] = modulePath;
            return prev;
          }
        }, {});
      }
    }
    const modules = {};
    async function processModule(key) {
      if (stryMutAct_9fa48("27432")) {
        {}
      } else {
        stryCov_9fa48("27432");
        const modulePath = await resolveModulePath(pluginData.path, pluginModules[key]);
        if (stryMutAct_9fa48("27434") ? false : stryMutAct_9fa48("27433") ? true : (stryCov_9fa48("27433", "27434"), modulePath)) {
          if (stryMutAct_9fa48("27435")) {
            {}
          } else {
            stryCov_9fa48("27435");
            modules[key] = path.relative(basePath, modulePath);
          }
        }
      }
    }
    await Promise.all(Object.keys(pluginModules).map(stryMutAct_9fa48("27436") ? () => undefined : (stryCov_9fa48("27436"), key => processModule(key))));
    const len = Object.keys(modules).length;
    winston.verbose(stryMutAct_9fa48("27437") ? `` : (stryCov_9fa48("27437"), `[plugins] Found ${len} AMD-style module(s) for plugin ${pluginData.id}`));
    return modules;
  }
};
Data.getLanguageData = async function getLanguageData(pluginData) {
  if (stryMutAct_9fa48("27438")) {
    {}
  } else {
    stryCov_9fa48("27438");
    if (stryMutAct_9fa48("27441") ? typeof pluginData.languages === 'string' : stryMutAct_9fa48("27440") ? false : stryMutAct_9fa48("27439") ? true : (stryCov_9fa48("27439", "27440", "27441"), typeof pluginData.languages !== (stryMutAct_9fa48("27442") ? "" : (stryCov_9fa48("27442"), 'string')))) {
      if (stryMutAct_9fa48("27443")) {
        {}
      } else {
        stryCov_9fa48("27443");
        return;
      }
    }
    const pathToFolder = path.join(paths.nodeModules, pluginData.id, pluginData.languages);
    const filepaths = await file.walk(pathToFolder);
    const namespaces = stryMutAct_9fa48("27444") ? ["Stryker was here"] : (stryCov_9fa48("27444"), []);
    const languages = stryMutAct_9fa48("27445") ? ["Stryker was here"] : (stryCov_9fa48("27445"), []);
    filepaths.forEach(p => {
      if (stryMutAct_9fa48("27446")) {
        {}
      } else {
        stryCov_9fa48("27446");
        const rel = path.relative(pathToFolder, p).split(stryMutAct_9fa48("27447") ? /[^/\\]/ : (stryCov_9fa48("27447"), /[/\\]/));
        const language = rel.shift().replace(stryMutAct_9fa48("27448") ? "" : (stryCov_9fa48("27448"), '_'), stryMutAct_9fa48("27449") ? "" : (stryCov_9fa48("27449"), '-')).replace(stryMutAct_9fa48("27450") ? "" : (stryCov_9fa48("27450"), '@'), stryMutAct_9fa48("27451") ? "" : (stryCov_9fa48("27451"), '-x-'));
        const namespace = rel.join(stryMutAct_9fa48("27452") ? "" : (stryCov_9fa48("27452"), '/')).replace(stryMutAct_9fa48("27453") ? /\.json/ : (stryCov_9fa48("27453"), /\.json$/), stryMutAct_9fa48("27454") ? "Stryker was here!" : (stryCov_9fa48("27454"), ''));
        if (stryMutAct_9fa48("27457") ? !language && !namespace : stryMutAct_9fa48("27456") ? false : stryMutAct_9fa48("27455") ? true : (stryCov_9fa48("27455", "27456", "27457"), (stryMutAct_9fa48("27458") ? language : (stryCov_9fa48("27458"), !language)) || (stryMutAct_9fa48("27459") ? namespace : (stryCov_9fa48("27459"), !namespace)))) {
          if (stryMutAct_9fa48("27460")) {
            {}
          } else {
            stryCov_9fa48("27460");
            return;
          }
        }
        languages.push(language);
        namespaces.push(namespace);
      }
    });
    return stryMutAct_9fa48("27461") ? {} : (stryCov_9fa48("27461"), {
      languages: _.uniq(languages),
      namespaces: _.uniq(namespaces)
    });
  }
};