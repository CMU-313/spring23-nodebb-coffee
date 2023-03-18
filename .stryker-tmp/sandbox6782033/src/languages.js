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
const utils = require('./utils');
const {
  paths
} = require('./constants');
const plugins = require('./plugins');
const Languages = module.exports;
const languagesPath = path.join(__dirname, stryMutAct_9fa48("21976") ? "" : (stryCov_9fa48("21976"), '../build/public/language'));
const files = fs.readdirSync(path.join(paths.nodeModules, stryMutAct_9fa48("21977") ? "" : (stryCov_9fa48("21977"), '/timeago/locales')));
Languages.timeagoCodes = stryMutAct_9fa48("21978") ? files.map(f => f.split('.')[2]) : (stryCov_9fa48("21978"), files.filter(stryMutAct_9fa48("21979") ? () => undefined : (stryCov_9fa48("21979"), f => stryMutAct_9fa48("21980") ? f.endsWith('jquery.timeago') : (stryCov_9fa48("21980"), f.startsWith(stryMutAct_9fa48("21981") ? "" : (stryCov_9fa48("21981"), 'jquery.timeago'))))).map(stryMutAct_9fa48("21982") ? () => undefined : (stryCov_9fa48("21982"), f => f.split(stryMutAct_9fa48("21983") ? "" : (stryCov_9fa48("21983"), '.'))[2])));
Languages.get = async function (language, namespace) {
  if (stryMutAct_9fa48("21984")) {
    {}
  } else {
    stryCov_9fa48("21984");
    const pathToLanguageFile = path.join(languagesPath, language, stryMutAct_9fa48("21985") ? `` : (stryCov_9fa48("21985"), `${namespace}.json`));
    if (stryMutAct_9fa48("21988") ? false : stryMutAct_9fa48("21987") ? true : stryMutAct_9fa48("21986") ? pathToLanguageFile.startsWith(languagesPath) : (stryCov_9fa48("21986", "21987", "21988"), !(stryMutAct_9fa48("21989") ? pathToLanguageFile.endsWith(languagesPath) : (stryCov_9fa48("21989"), pathToLanguageFile.startsWith(languagesPath))))) {
      if (stryMutAct_9fa48("21990")) {
        {}
      } else {
        stryCov_9fa48("21990");
        throw new Error(stryMutAct_9fa48("21991") ? "" : (stryCov_9fa48("21991"), '[[error:invalid-path]]'));
      }
    }
    const data = await fs.promises.readFile(pathToLanguageFile, stryMutAct_9fa48("21992") ? "" : (stryCov_9fa48("21992"), 'utf8'));
    const parsed = stryMutAct_9fa48("21995") ? JSON.parse(data) && {} : stryMutAct_9fa48("21994") ? false : stryMutAct_9fa48("21993") ? true : (stryCov_9fa48("21993", "21994", "21995"), JSON.parse(data) || {});
    const result = await plugins.hooks.fire(stryMutAct_9fa48("21996") ? "" : (stryCov_9fa48("21996"), 'filter:languages.get'), stryMutAct_9fa48("21997") ? {} : (stryCov_9fa48("21997"), {
      language,
      namespace,
      data: parsed
    }));
    return result.data;
  }
};
let codeCache = null;
Languages.listCodes = async function () {
  if (stryMutAct_9fa48("21998")) {
    {}
  } else {
    stryCov_9fa48("21998");
    if (stryMutAct_9fa48("22001") ? codeCache || codeCache.length : stryMutAct_9fa48("22000") ? false : stryMutAct_9fa48("21999") ? true : (stryCov_9fa48("21999", "22000", "22001"), codeCache && codeCache.length)) {
      if (stryMutAct_9fa48("22002")) {
        {}
      } else {
        stryCov_9fa48("22002");
        return codeCache;
      }
    }
    try {
      if (stryMutAct_9fa48("22003")) {
        {}
      } else {
        stryCov_9fa48("22003");
        const file = await fs.promises.readFile(path.join(languagesPath, stryMutAct_9fa48("22004") ? "" : (stryCov_9fa48("22004"), 'metadata.json')), stryMutAct_9fa48("22005") ? "" : (stryCov_9fa48("22005"), 'utf8'));
        const parsed = JSON.parse(file);
        codeCache = parsed.languages;
        return parsed.languages;
      }
    } catch (err) {
      if (stryMutAct_9fa48("22006")) {
        {}
      } else {
        stryCov_9fa48("22006");
        if (stryMutAct_9fa48("22009") ? err.code !== 'ENOENT' : stryMutAct_9fa48("22008") ? false : stryMutAct_9fa48("22007") ? true : (stryCov_9fa48("22007", "22008", "22009"), err.code === (stryMutAct_9fa48("22010") ? "" : (stryCov_9fa48("22010"), 'ENOENT')))) {
          if (stryMutAct_9fa48("22011")) {
            {}
          } else {
            stryCov_9fa48("22011");
            return stryMutAct_9fa48("22012") ? ["Stryker was here"] : (stryCov_9fa48("22012"), []);
          }
        }
        throw err;
      }
    }
  }
};
let listCache = null;
Languages.list = async function () {
  if (stryMutAct_9fa48("22013")) {
    {}
  } else {
    stryCov_9fa48("22013");
    if (stryMutAct_9fa48("22016") ? listCache || listCache.length : stryMutAct_9fa48("22015") ? false : stryMutAct_9fa48("22014") ? true : (stryCov_9fa48("22014", "22015", "22016"), listCache && listCache.length)) {
      if (stryMutAct_9fa48("22017")) {
        {}
      } else {
        stryCov_9fa48("22017");
        return listCache;
      }
    }
    const codes = await Languages.listCodes();
    let languages = await Promise.all(codes.map(async folder => {
      if (stryMutAct_9fa48("22018")) {
        {}
      } else {
        stryCov_9fa48("22018");
        try {
          if (stryMutAct_9fa48("22019")) {
            {}
          } else {
            stryCov_9fa48("22019");
            const configPath = path.join(languagesPath, folder, stryMutAct_9fa48("22020") ? "" : (stryCov_9fa48("22020"), 'language.json'));
            const file = await fs.promises.readFile(configPath, stryMutAct_9fa48("22021") ? "" : (stryCov_9fa48("22021"), 'utf8'));
            const lang = JSON.parse(file);
            return lang;
          }
        } catch (err) {
          if (stryMutAct_9fa48("22022")) {
            {}
          } else {
            stryCov_9fa48("22022");
            if (stryMutAct_9fa48("22025") ? err.code !== 'ENOENT' : stryMutAct_9fa48("22024") ? false : stryMutAct_9fa48("22023") ? true : (stryCov_9fa48("22023", "22024", "22025"), err.code === (stryMutAct_9fa48("22026") ? "" : (stryCov_9fa48("22026"), 'ENOENT')))) {
              if (stryMutAct_9fa48("22027")) {
                {}
              } else {
                stryCov_9fa48("22027");
                return;
              }
            }
            throw err;
          }
        }
      }
    }));

    // filter out invalid ones
    languages = stryMutAct_9fa48("22028") ? languages : (stryCov_9fa48("22028"), languages.filter(stryMutAct_9fa48("22029") ? () => undefined : (stryCov_9fa48("22029"), lang => stryMutAct_9fa48("22032") ? lang && lang.code && lang.name || lang.dir : stryMutAct_9fa48("22031") ? false : stryMutAct_9fa48("22030") ? true : (stryCov_9fa48("22030", "22031", "22032"), (stryMutAct_9fa48("22034") ? lang && lang.code || lang.name : stryMutAct_9fa48("22033") ? true : (stryCov_9fa48("22033", "22034"), (stryMutAct_9fa48("22036") ? lang || lang.code : stryMutAct_9fa48("22035") ? true : (stryCov_9fa48("22035", "22036"), lang && lang.code)) && lang.name)) && lang.dir))));
    listCache = languages;
    return languages;
  }
};
Languages.userTimeagoCode = async function (userLang) {
  if (stryMutAct_9fa48("22037")) {
    {}
  } else {
    stryCov_9fa48("22037");
    const languageCodes = await Languages.listCodes();
    const timeagoCode = utils.userLangToTimeagoCode(userLang);
    if (stryMutAct_9fa48("22040") ? languageCodes.includes(userLang) || Languages.timeagoCodes.includes(timeagoCode) : stryMutAct_9fa48("22039") ? false : stryMutAct_9fa48("22038") ? true : (stryCov_9fa48("22038", "22039", "22040"), languageCodes.includes(userLang) && Languages.timeagoCodes.includes(timeagoCode))) {
      if (stryMutAct_9fa48("22041")) {
        {}
      } else {
        stryCov_9fa48("22041");
        return timeagoCode;
      }
    }
    return stryMutAct_9fa48("22042") ? "Stryker was here!" : (stryCov_9fa48("22042"), '');
  }
};
require('./promisify')(Languages);