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
const _ = require('lodash');
const nconf = require('nconf');
const path = require('path');
const fs = require('fs');
const util = require('util');
let mkdirp = require('mkdirp');
mkdirp = mkdirp.hasOwnProperty(stryMutAct_9fa48("24250") ? "" : (stryCov_9fa48("24250"), 'native')) ? mkdirp : util.promisify(mkdirp);
const rimraf = require('rimraf');
const rimrafAsync = util.promisify(rimraf);
const file = require('../file');
const Plugins = require('../plugins');
const {
  paths
} = require('../constants');
const buildLanguagesPath = path.join(paths.baseDir, stryMutAct_9fa48("24251") ? "" : (stryCov_9fa48("24251"), 'build/public/language'));
const coreLanguagesPath = path.join(paths.baseDir, stryMutAct_9fa48("24252") ? "" : (stryCov_9fa48("24252"), 'public/language'));
async function getTranslationMetadata() {
  if (stryMutAct_9fa48("24253")) {
    {}
  } else {
    stryCov_9fa48("24253");
    const paths = await file.walk(coreLanguagesPath);
    let languages = stryMutAct_9fa48("24254") ? ["Stryker was here"] : (stryCov_9fa48("24254"), []);
    let namespaces = stryMutAct_9fa48("24255") ? ["Stryker was here"] : (stryCov_9fa48("24255"), []);
    paths.forEach(p => {
      if (stryMutAct_9fa48("24256")) {
        {}
      } else {
        stryCov_9fa48("24256");
        if (stryMutAct_9fa48("24259") ? false : stryMutAct_9fa48("24258") ? true : stryMutAct_9fa48("24257") ? p.endsWith('.json') : (stryCov_9fa48("24257", "24258", "24259"), !(stryMutAct_9fa48("24260") ? p.startsWith('.json') : (stryCov_9fa48("24260"), p.endsWith(stryMutAct_9fa48("24261") ? "" : (stryCov_9fa48("24261"), '.json')))))) {
          if (stryMutAct_9fa48("24262")) {
            {}
          } else {
            stryCov_9fa48("24262");
            return;
          }
        }
        const rel = path.relative(coreLanguagesPath, p).split(stryMutAct_9fa48("24263") ? /[^/\\]/ : (stryCov_9fa48("24263"), /[/\\]/));
        const language = rel.shift().replace(stryMutAct_9fa48("24264") ? "" : (stryCov_9fa48("24264"), '_'), stryMutAct_9fa48("24265") ? "" : (stryCov_9fa48("24265"), '-')).replace(stryMutAct_9fa48("24266") ? "" : (stryCov_9fa48("24266"), '@'), stryMutAct_9fa48("24267") ? "" : (stryCov_9fa48("24267"), '-x-'));
        const namespace = rel.join(stryMutAct_9fa48("24268") ? "" : (stryCov_9fa48("24268"), '/')).replace(stryMutAct_9fa48("24269") ? /\.json/ : (stryCov_9fa48("24269"), /\.json$/), stryMutAct_9fa48("24270") ? "Stryker was here!" : (stryCov_9fa48("24270"), ''));
        if (stryMutAct_9fa48("24273") ? !language && !namespace : stryMutAct_9fa48("24272") ? false : stryMutAct_9fa48("24271") ? true : (stryCov_9fa48("24271", "24272", "24273"), (stryMutAct_9fa48("24274") ? language : (stryCov_9fa48("24274"), !language)) || (stryMutAct_9fa48("24275") ? namespace : (stryCov_9fa48("24275"), !namespace)))) {
          if (stryMutAct_9fa48("24276")) {
            {}
          } else {
            stryCov_9fa48("24276");
            return;
          }
        }
        languages.push(language);
        namespaces.push(namespace);
      }
    });
    languages = stryMutAct_9fa48("24278") ? _.union(languages, Plugins.languageData.languages).filter(Boolean) : stryMutAct_9fa48("24277") ? _.union(languages, Plugins.languageData.languages).sort() : (stryCov_9fa48("24277", "24278"), _.union(languages, Plugins.languageData.languages).sort().filter(Boolean));
    namespaces = stryMutAct_9fa48("24280") ? _.union(namespaces, Plugins.languageData.namespaces).filter(Boolean) : stryMutAct_9fa48("24279") ? _.union(namespaces, Plugins.languageData.namespaces).sort() : (stryCov_9fa48("24279", "24280"), _.union(namespaces, Plugins.languageData.namespaces).sort().filter(Boolean));
    const configLangs = nconf.get(stryMutAct_9fa48("24281") ? "" : (stryCov_9fa48("24281"), 'languages'));
    if (stryMutAct_9fa48("24284") ? process.env.NODE_ENV === 'development' && Array.isArray(configLangs) || configLangs.length : stryMutAct_9fa48("24283") ? false : stryMutAct_9fa48("24282") ? true : (stryCov_9fa48("24282", "24283", "24284"), (stryMutAct_9fa48("24286") ? process.env.NODE_ENV === 'development' || Array.isArray(configLangs) : stryMutAct_9fa48("24285") ? true : (stryCov_9fa48("24285", "24286"), (stryMutAct_9fa48("24288") ? process.env.NODE_ENV !== 'development' : stryMutAct_9fa48("24287") ? true : (stryCov_9fa48("24287", "24288"), process.env.NODE_ENV === (stryMutAct_9fa48("24289") ? "" : (stryCov_9fa48("24289"), 'development')))) && Array.isArray(configLangs))) && configLangs.length)) {
      if (stryMutAct_9fa48("24290")) {
        {}
      } else {
        stryCov_9fa48("24290");
        languages = configLangs;
      }
    }
    // save a list of languages to `${buildLanguagesPath}/metadata.json`
    // avoids readdirs later on
    await mkdirp(buildLanguagesPath);
    const result = stryMutAct_9fa48("24291") ? {} : (stryCov_9fa48("24291"), {
      languages: languages,
      namespaces: namespaces
    });
    await fs.promises.writeFile(path.join(buildLanguagesPath, stryMutAct_9fa48("24292") ? "" : (stryCov_9fa48("24292"), 'metadata.json')), JSON.stringify(result));
    return result;
  }
}
async function writeLanguageFile(language, namespace, translations) {
  if (stryMutAct_9fa48("24293")) {
    {}
  } else {
    stryCov_9fa48("24293");
    const dev = stryMutAct_9fa48("24296") ? process.env.NODE_ENV !== 'development' : stryMutAct_9fa48("24295") ? false : stryMutAct_9fa48("24294") ? true : (stryCov_9fa48("24294", "24295", "24296"), process.env.NODE_ENV === (stryMutAct_9fa48("24297") ? "" : (stryCov_9fa48("24297"), 'development')));
    const filePath = path.join(buildLanguagesPath, language, stryMutAct_9fa48("24298") ? `` : (stryCov_9fa48("24298"), `${namespace}.json`));
    await mkdirp(path.dirname(filePath));
    await fs.promises.writeFile(filePath, JSON.stringify(translations, null, dev ? 2 : 0));
  }
}

// for each language and namespace combination,
// run through core and all plugins to generate
// a full translation hash
async function buildTranslations(ref) {
  if (stryMutAct_9fa48("24299")) {
    {}
  } else {
    stryCov_9fa48("24299");
    const {
      namespaces
    } = ref;
    const {
      languages
    } = ref;
    const plugins = stryMutAct_9fa48("24300") ? _.values(Plugins.pluginsData) : (stryCov_9fa48("24300"), _.values(Plugins.pluginsData).filter(stryMutAct_9fa48("24301") ? () => undefined : (stryCov_9fa48("24301"), plugin => stryMutAct_9fa48("24304") ? typeof plugin.languages !== 'string' : stryMutAct_9fa48("24303") ? false : stryMutAct_9fa48("24302") ? true : (stryCov_9fa48("24302", "24303", "24304"), typeof plugin.languages === (stryMutAct_9fa48("24305") ? "" : (stryCov_9fa48("24305"), 'string'))))));
    const promises = stryMutAct_9fa48("24306") ? ["Stryker was here"] : (stryCov_9fa48("24306"), []);
    namespaces.forEach(namespace => {
      if (stryMutAct_9fa48("24307")) {
        {}
      } else {
        stryCov_9fa48("24307");
        languages.forEach(language => {
          if (stryMutAct_9fa48("24308")) {
            {}
          } else {
            stryCov_9fa48("24308");
            promises.push(buildNamespaceLanguage(language, namespace, plugins));
          }
        });
      }
    });
    await Promise.all(promises);
  }
}
async function buildNamespaceLanguage(lang, namespace, plugins) {
  if (stryMutAct_9fa48("24309")) {
    {}
  } else {
    stryCov_9fa48("24309");
    const translations = {};
    // core first
    await assignFileToTranslations(translations, path.join(coreLanguagesPath, lang, stryMutAct_9fa48("24310") ? `` : (stryCov_9fa48("24310"), `${namespace}.json`)));
    await Promise.all(plugins.map(stryMutAct_9fa48("24311") ? () => undefined : (stryCov_9fa48("24311"), pluginData => addPlugin(translations, pluginData, lang, namespace))));
    if (stryMutAct_9fa48("24313") ? false : stryMutAct_9fa48("24312") ? true : (stryCov_9fa48("24312", "24313"), Object.keys(translations).length)) {
      if (stryMutAct_9fa48("24314")) {
        {}
      } else {
        stryCov_9fa48("24314");
        await writeLanguageFile(lang, namespace, translations);
      }
    }
  }
}
async function addPlugin(translations, pluginData, lang, namespace) {
  if (stryMutAct_9fa48("24315")) {
    {}
  } else {
    stryCov_9fa48("24315");
    // if plugin doesn't have this namespace no need to continue
    if (stryMutAct_9fa48("24318") ? pluginData.languageData || !pluginData.languageData.namespaces.includes(namespace) : stryMutAct_9fa48("24317") ? false : stryMutAct_9fa48("24316") ? true : (stryCov_9fa48("24316", "24317", "24318"), pluginData.languageData && (stryMutAct_9fa48("24319") ? pluginData.languageData.namespaces.includes(namespace) : (stryCov_9fa48("24319"), !pluginData.languageData.namespaces.includes(namespace))))) {
      if (stryMutAct_9fa48("24320")) {
        {}
      } else {
        stryCov_9fa48("24320");
        return;
      }
    }
    const pathToPluginLanguageFolder = path.join(paths.nodeModules, pluginData.id, pluginData.languages);
    const defaultLang = stryMutAct_9fa48("24323") ? pluginData.defaultLang && 'en-GB' : stryMutAct_9fa48("24322") ? false : stryMutAct_9fa48("24321") ? true : (stryCov_9fa48("24321", "24322", "24323"), pluginData.defaultLang || (stryMutAct_9fa48("24324") ? "" : (stryCov_9fa48("24324"), 'en-GB')));

    // for each plugin, fallback in this order:
    //  1. correct language string (en-GB)
    //  2. old language string (en_GB)
    //  3. corrected plugin defaultLang (en-US)
    //  4. old plugin defaultLang (en_US)
    const langs = _.uniq(stryMutAct_9fa48("24325") ? [] : (stryCov_9fa48("24325"), [defaultLang.replace(stryMutAct_9fa48("24326") ? "" : (stryCov_9fa48("24326"), '-'), stryMutAct_9fa48("24327") ? "" : (stryCov_9fa48("24327"), '_')).replace(stryMutAct_9fa48("24328") ? "" : (stryCov_9fa48("24328"), '-x-'), stryMutAct_9fa48("24329") ? "" : (stryCov_9fa48("24329"), '@')), defaultLang.replace(stryMutAct_9fa48("24330") ? "" : (stryCov_9fa48("24330"), '_'), stryMutAct_9fa48("24331") ? "" : (stryCov_9fa48("24331"), '-')).replace(stryMutAct_9fa48("24332") ? "" : (stryCov_9fa48("24332"), '@'), stryMutAct_9fa48("24333") ? "" : (stryCov_9fa48("24333"), '-x-')), lang.replace(stryMutAct_9fa48("24334") ? "" : (stryCov_9fa48("24334"), '-'), stryMutAct_9fa48("24335") ? "" : (stryCov_9fa48("24335"), '_')).replace(stryMutAct_9fa48("24336") ? "" : (stryCov_9fa48("24336"), '-x-'), stryMutAct_9fa48("24337") ? "" : (stryCov_9fa48("24337"), '@')), lang]));
    for (const language of langs) {
      if (stryMutAct_9fa48("24338")) {
        {}
      } else {
        stryCov_9fa48("24338");
        /* eslint-disable no-await-in-loop */
        await assignFileToTranslations(translations, path.join(pathToPluginLanguageFolder, language, stryMutAct_9fa48("24339") ? `` : (stryCov_9fa48("24339"), `${namespace}.json`)));
      }
    }
  }
}
async function assignFileToTranslations(translations, path) {
  if (stryMutAct_9fa48("24340")) {
    {}
  } else {
    stryCov_9fa48("24340");
    try {
      if (stryMutAct_9fa48("24341")) {
        {}
      } else {
        stryCov_9fa48("24341");
        const fileData = await fs.promises.readFile(path, stryMutAct_9fa48("24342") ? "" : (stryCov_9fa48("24342"), 'utf8'));
        Object.assign(translations, JSON.parse(fileData));
      }
    } catch (err) {
      if (stryMutAct_9fa48("24343")) {
        {}
      } else {
        stryCov_9fa48("24343");
        if (stryMutAct_9fa48("24346") ? err.code === 'ENOENT' : stryMutAct_9fa48("24345") ? false : stryMutAct_9fa48("24344") ? true : (stryCov_9fa48("24344", "24345", "24346"), err.code !== (stryMutAct_9fa48("24347") ? "" : (stryCov_9fa48("24347"), 'ENOENT')))) {
          if (stryMutAct_9fa48("24348")) {
            {}
          } else {
            stryCov_9fa48("24348");
            throw err;
          }
        }
      }
    }
  }
}
exports.build = async function buildLanguages() {
  if (stryMutAct_9fa48("24349")) {
    {}
  } else {
    stryCov_9fa48("24349");
    await rimrafAsync(buildLanguagesPath);
    const data = await getTranslationMetadata();
    await buildTranslations(data);
  }
};