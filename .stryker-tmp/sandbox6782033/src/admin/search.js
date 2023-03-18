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
const sanitizeHTML = require('sanitize-html');
const nconf = require('nconf');
const winston = require('winston');
const file = require('../file');
const {
  Translator
} = require('../translator');
function filterDirectories(directories) {
  if (stryMutAct_9fa48("0")) {
    {}
  } else {
    stryCov_9fa48("0");
    return stryMutAct_9fa48("1") ? directories.map(
    // get the relative path
    // convert dir to use forward slashes
    dir => dir.replace(/^.*(admin.*?).tpl$/, '$1').split(path.sep).join('/')) : (stryCov_9fa48("1"), directories.map( // get the relative path
    // convert dir to use forward slashes
    stryMutAct_9fa48("2") ? () => undefined : (stryCov_9fa48("2"), dir => dir.replace(stryMutAct_9fa48("6") ? /^.*(admin.).tpl$/ : stryMutAct_9fa48("5") ? /^.(admin.*?).tpl$/ : stryMutAct_9fa48("4") ? /^.*(admin.*?).tpl/ : stryMutAct_9fa48("3") ? /.*(admin.*?).tpl$/ : (stryCov_9fa48("3", "4", "5", "6"), /^.*(admin.*?).tpl$/), stryMutAct_9fa48("7") ? "" : (stryCov_9fa48("7"), '$1')).split(path.sep).join(stryMutAct_9fa48("8") ? "" : (stryCov_9fa48("8"), '/')))).filter( // exclude .js files
    // exclude partials
    // only include subpaths
    // exclude category.tpl, group.tpl, category-analytics.tpl
    stryMutAct_9fa48("9") ? () => undefined : (stryCov_9fa48("9"), dir => stryMutAct_9fa48("12") ? !dir.endsWith('.js') && !dir.includes('/partials/') && /\/.*\//.test(dir) || !/manage\/(category|group|category-analytics)$/.test(dir) : stryMutAct_9fa48("11") ? false : stryMutAct_9fa48("10") ? true : (stryCov_9fa48("10", "11", "12"), (stryMutAct_9fa48("14") ? !dir.endsWith('.js') && !dir.includes('/partials/') || /\/.*\//.test(dir) : stryMutAct_9fa48("13") ? true : (stryCov_9fa48("13", "14"), (stryMutAct_9fa48("16") ? !dir.endsWith('.js') || !dir.includes('/partials/') : stryMutAct_9fa48("15") ? true : (stryCov_9fa48("15", "16"), (stryMutAct_9fa48("17") ? dir.endsWith('.js') : (stryCov_9fa48("17"), !(stryMutAct_9fa48("18") ? dir.startsWith('.js') : (stryCov_9fa48("18"), dir.endsWith(stryMutAct_9fa48("19") ? "" : (stryCov_9fa48("19"), '.js')))))) && (stryMutAct_9fa48("20") ? dir.includes('/partials/') : (stryCov_9fa48("20"), !dir.includes(stryMutAct_9fa48("21") ? "" : (stryCov_9fa48("21"), '/partials/')))))) && (stryMutAct_9fa48("22") ? /\/.\// : (stryCov_9fa48("22"), /\/.*\//)).test(dir))) && (stryMutAct_9fa48("23") ? /manage\/(category|group|category-analytics)$/.test(dir) : (stryCov_9fa48("23"), !(stryMutAct_9fa48("24") ? /manage\/(category|group|category-analytics)/ : (stryCov_9fa48("24"), /manage\/(category|group|category-analytics)$/)).test(dir)))))));
  }
}
async function getAdminNamespaces() {
  if (stryMutAct_9fa48("25")) {
    {}
  } else {
    stryCov_9fa48("25");
    const directories = await file.walk(path.resolve(nconf.get(stryMutAct_9fa48("26") ? "" : (stryCov_9fa48("26"), 'views_dir')), stryMutAct_9fa48("27") ? "" : (stryCov_9fa48("27"), 'admin')));
    return filterDirectories(directories);
  }
}
function sanitize(html) {
  if (stryMutAct_9fa48("28")) {
    {}
  } else {
    stryCov_9fa48("28");
    // reduce the template to just meaningful text
    // remove all tags and strip out scripts, etc completely
    return sanitizeHTML(html, stryMutAct_9fa48("29") ? {} : (stryCov_9fa48("29"), {
      allowedTags: stryMutAct_9fa48("30") ? ["Stryker was here"] : (stryCov_9fa48("30"), []),
      allowedAttributes: stryMutAct_9fa48("31") ? ["Stryker was here"] : (stryCov_9fa48("31"), [])
    }));
  }
}
function simplify(translations) {
  if (stryMutAct_9fa48("32")) {
    {}
  } else {
    stryCov_9fa48("32");
    return translations
    // remove all mustaches
    .replace(stryMutAct_9fa48("36") ? /(?:\{{1,2}[^}]*?\})/g : stryMutAct_9fa48("35") ? /(?:\{{1,2}[}]*?\}{1,2})/g : stryMutAct_9fa48("34") ? /(?:\{{1,2}[^}]\}{1,2})/g : stryMutAct_9fa48("33") ? /(?:\{[^}]*?\}{1,2})/g : (stryCov_9fa48("33", "34", "35", "36"), /(?:\{{1,2}[^}]*?\}{1,2})/g), stryMutAct_9fa48("37") ? "Stryker was here!" : (stryCov_9fa48("37"), ''))
    // collapse whitespace
    .replace(stryMutAct_9fa48("44") ? /(?:[ \t]*[\n\r]+[^ \t]*)+/g : stryMutAct_9fa48("43") ? /(?:[ \t]*[\n\r]+[ \t])+/g : stryMutAct_9fa48("42") ? /(?:[ \t]*[^\n\r]+[ \t]*)+/g : stryMutAct_9fa48("41") ? /(?:[ \t]*[\n\r][ \t]*)+/g : stryMutAct_9fa48("40") ? /(?:[^ \t]*[\n\r]+[ \t]*)+/g : stryMutAct_9fa48("39") ? /(?:[ \t][\n\r]+[ \t]*)+/g : stryMutAct_9fa48("38") ? /(?:[ \t]*[\n\r]+[ \t]*)/g : (stryCov_9fa48("38", "39", "40", "41", "42", "43", "44"), /(?:[ \t]*[\n\r]+[ \t]*)+/g), stryMutAct_9fa48("45") ? "" : (stryCov_9fa48("45"), '\n')).replace(stryMutAct_9fa48("47") ? /[^\t ]+/g : stryMutAct_9fa48("46") ? /[\t ]/g : (stryCov_9fa48("46", "47"), /[\t ]+/g), stryMutAct_9fa48("48") ? "" : (stryCov_9fa48("48"), ' '));
  }
}
function nsToTitle(namespace) {
  if (stryMutAct_9fa48("49")) {
    {}
  } else {
    stryCov_9fa48("49");
    return namespace.replace(stryMutAct_9fa48("50") ? "" : (stryCov_9fa48("50"), 'admin/'), stryMutAct_9fa48("51") ? "Stryker was here!" : (stryCov_9fa48("51"), '')).split(stryMutAct_9fa48("52") ? "" : (stryCov_9fa48("52"), '/')).map(stryMutAct_9fa48("53") ? () => undefined : (stryCov_9fa48("53"), str => stryMutAct_9fa48("54") ? str[0].toUpperCase() - str.slice(1) : (stryCov_9fa48("54"), (stryMutAct_9fa48("55") ? str[0].toLowerCase() : (stryCov_9fa48("55"), str[0].toUpperCase())) + (stryMutAct_9fa48("56") ? str : (stryCov_9fa48("56"), str.slice(1)))))).join(stryMutAct_9fa48("57") ? "" : (stryCov_9fa48("57"), ' > ')).replace(stryMutAct_9fa48("58") ? /[a-zA-Z> ]/g : (stryCov_9fa48("58"), /[^a-zA-Z> ]/g), stryMutAct_9fa48("59") ? "" : (stryCov_9fa48("59"), ' '));
  }
}
const fallbackCache = {};
async function initFallback(namespace) {
  if (stryMutAct_9fa48("60")) {
    {}
  } else {
    stryCov_9fa48("60");
    const template = await fs.promises.readFile(path.resolve(nconf.get(stryMutAct_9fa48("61") ? "" : (stryCov_9fa48("61"), 'views_dir')), stryMutAct_9fa48("62") ? `` : (stryCov_9fa48("62"), `${namespace}.tpl`)), stryMutAct_9fa48("63") ? "" : (stryCov_9fa48("63"), 'utf8'));
    const title = nsToTitle(namespace);
    let translations = sanitize(template);
    translations = Translator.removePatterns(translations);
    translations = simplify(translations);
    translations += stryMutAct_9fa48("64") ? `` : (stryCov_9fa48("64"), `\n${title}`);
    return stryMutAct_9fa48("65") ? {} : (stryCov_9fa48("65"), {
      namespace: namespace,
      translations: translations,
      title: title
    });
  }
}
async function fallback(namespace) {
  if (stryMutAct_9fa48("66")) {
    {}
  } else {
    stryCov_9fa48("66");
    if (stryMutAct_9fa48("68") ? false : stryMutAct_9fa48("67") ? true : (stryCov_9fa48("67", "68"), fallbackCache[namespace])) {
      if (stryMutAct_9fa48("69")) {
        {}
      } else {
        stryCov_9fa48("69");
        return fallbackCache[namespace];
      }
    }
    const params = await initFallback(namespace);
    fallbackCache[namespace] = params;
    return params;
  }
}
async function initDict(language) {
  if (stryMutAct_9fa48("70")) {
    {}
  } else {
    stryCov_9fa48("70");
    const namespaces = await getAdminNamespaces();
    return await Promise.all(namespaces.map(stryMutAct_9fa48("71") ? () => undefined : (stryCov_9fa48("71"), ns => buildNamespace(language, ns))));
  }
}
async function buildNamespace(language, namespace) {
  if (stryMutAct_9fa48("72")) {
    {}
  } else {
    stryCov_9fa48("72");
    const translator = Translator.create(language);
    try {
      if (stryMutAct_9fa48("73")) {
        {}
      } else {
        stryCov_9fa48("73");
        const translations = await translator.getTranslation(namespace);
        if (stryMutAct_9fa48("76") ? !translations && !Object.keys(translations).length : stryMutAct_9fa48("75") ? false : stryMutAct_9fa48("74") ? true : (stryCov_9fa48("74", "75", "76"), (stryMutAct_9fa48("77") ? translations : (stryCov_9fa48("77"), !translations)) || (stryMutAct_9fa48("78") ? Object.keys(translations).length : (stryCov_9fa48("78"), !Object.keys(translations).length)))) {
          if (stryMutAct_9fa48("79")) {
            {}
          } else {
            stryCov_9fa48("79");
            return await fallback(namespace);
          }
        }
        // join all translations into one string separated by newlines
        let str = Object.keys(translations).map(stryMutAct_9fa48("80") ? () => undefined : (stryCov_9fa48("80"), key => translations[key])).join(stryMutAct_9fa48("81") ? "" : (stryCov_9fa48("81"), '\n'));
        str = sanitize(str);
        let title = namespace;
        title = title.match(stryMutAct_9fa48("84") ? /admin\/(.+?)\/(.)$/ : stryMutAct_9fa48("83") ? /admin\/(.)\/(.+?)$/ : stryMutAct_9fa48("82") ? /admin\/(.+?)\/(.+?)/ : (stryCov_9fa48("82", "83", "84"), /admin\/(.+?)\/(.+?)$/));
        title = stryMutAct_9fa48("85") ? `` : (stryCov_9fa48("85"), `[[admin/menu:section-${(stryMutAct_9fa48("88") ? title[1] !== 'development' : stryMutAct_9fa48("87") ? false : stryMutAct_9fa48("86") ? true : (stryCov_9fa48("86", "87", "88"), title[1] === (stryMutAct_9fa48("89") ? "" : (stryCov_9fa48("89"), 'development')))) ? stryMutAct_9fa48("90") ? "" : (stryCov_9fa48("90"), 'advanced') : title[1]}]]${title[2] ? stryMutAct_9fa48("91") ? `` : (stryCov_9fa48("91"), ` > [[admin/menu:${title[1]}/${title[2]}]]`) : stryMutAct_9fa48("92") ? "Stryker was here!" : (stryCov_9fa48("92"), '')}`);
        title = await translator.translate(title);
        return stryMutAct_9fa48("93") ? {} : (stryCov_9fa48("93"), {
          namespace: namespace,
          translations: stryMutAct_9fa48("94") ? `` : (stryCov_9fa48("94"), `${str}\n${title}`),
          title: title
        });
      }
    } catch (err) {
      if (stryMutAct_9fa48("95")) {
        {}
      } else {
        stryCov_9fa48("95");
        winston.error(err.stack);
        return stryMutAct_9fa48("96") ? {} : (stryCov_9fa48("96"), {
          namespace: namespace,
          translations: stryMutAct_9fa48("97") ? "Stryker was here!" : (stryCov_9fa48("97"), '')
        });
      }
    }
  }
}
const cache = {};
async function getDictionary(language) {
  if (stryMutAct_9fa48("98")) {
    {}
  } else {
    stryCov_9fa48("98");
    if (stryMutAct_9fa48("100") ? false : stryMutAct_9fa48("99") ? true : (stryCov_9fa48("99", "100"), cache[language])) {
      if (stryMutAct_9fa48("101")) {
        {}
      } else {
        stryCov_9fa48("101");
        return cache[language];
      }
    }
    const params = await initDict(language);
    cache[language] = params;
    return params;
  }
}
module.exports.getDictionary = getDictionary;
module.exports.filterDirectories = filterDirectories;
module.exports.simplify = simplify;
module.exports.sanitize = sanitize;
require('../promisify')(module.exports);