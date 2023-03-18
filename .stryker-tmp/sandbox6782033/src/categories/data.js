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
const validator = require('validator');
const db = require('../database');
const meta = require('../meta');
const plugins = require('../plugins');
const utils = require('../utils');
const intFields = stryMutAct_9fa48("2339") ? [] : (stryCov_9fa48("2339"), [stryMutAct_9fa48("2340") ? "" : (stryCov_9fa48("2340"), 'cid'), stryMutAct_9fa48("2341") ? "" : (stryCov_9fa48("2341"), 'parentCid'), stryMutAct_9fa48("2342") ? "" : (stryCov_9fa48("2342"), 'disabled'), stryMutAct_9fa48("2343") ? "" : (stryCov_9fa48("2343"), 'isSection'), stryMutAct_9fa48("2344") ? "" : (stryCov_9fa48("2344"), 'order'), stryMutAct_9fa48("2345") ? "" : (stryCov_9fa48("2345"), 'topic_count'), stryMutAct_9fa48("2346") ? "" : (stryCov_9fa48("2346"), 'post_count'), stryMutAct_9fa48("2347") ? "" : (stryCov_9fa48("2347"), 'numRecentReplies'), stryMutAct_9fa48("2348") ? "" : (stryCov_9fa48("2348"), 'minTags'), stryMutAct_9fa48("2349") ? "" : (stryCov_9fa48("2349"), 'maxTags'), stryMutAct_9fa48("2350") ? "" : (stryCov_9fa48("2350"), 'postQueue'), stryMutAct_9fa48("2351") ? "" : (stryCov_9fa48("2351"), 'subCategoriesPerPage')]);
module.exports = function (Categories) {
  if (stryMutAct_9fa48("2352")) {
    {}
  } else {
    stryCov_9fa48("2352");
    Categories.getCategoriesFields = async function (cids, fields) {
      if (stryMutAct_9fa48("2353")) {
        {}
      } else {
        stryCov_9fa48("2353");
        if (stryMutAct_9fa48("2356") ? !Array.isArray(cids) && !cids.length : stryMutAct_9fa48("2355") ? false : stryMutAct_9fa48("2354") ? true : (stryCov_9fa48("2354", "2355", "2356"), (stryMutAct_9fa48("2357") ? Array.isArray(cids) : (stryCov_9fa48("2357"), !Array.isArray(cids))) || (stryMutAct_9fa48("2358") ? cids.length : (stryCov_9fa48("2358"), !cids.length)))) {
          if (stryMutAct_9fa48("2359")) {
            {}
          } else {
            stryCov_9fa48("2359");
            return stryMutAct_9fa48("2360") ? ["Stryker was here"] : (stryCov_9fa48("2360"), []);
          }
        }
        const keys = cids.map(stryMutAct_9fa48("2361") ? () => undefined : (stryCov_9fa48("2361"), cid => stryMutAct_9fa48("2362") ? `` : (stryCov_9fa48("2362"), `category:${cid}`)));
        const categories = await db.getObjects(keys, fields);
        const result = await plugins.hooks.fire(stryMutAct_9fa48("2363") ? "" : (stryCov_9fa48("2363"), 'filter:category.getFields'), stryMutAct_9fa48("2364") ? {} : (stryCov_9fa48("2364"), {
          cids: cids,
          categories: categories,
          fields: fields,
          keys: keys
        }));
        result.categories.forEach(stryMutAct_9fa48("2365") ? () => undefined : (stryCov_9fa48("2365"), category => modifyCategory(category, fields)));
        return result.categories;
      }
    };
    Categories.getCategoryData = async function (cid) {
      if (stryMutAct_9fa48("2366")) {
        {}
      } else {
        stryCov_9fa48("2366");
        const categories = await Categories.getCategoriesFields(stryMutAct_9fa48("2367") ? [] : (stryCov_9fa48("2367"), [cid]), stryMutAct_9fa48("2368") ? ["Stryker was here"] : (stryCov_9fa48("2368"), []));
        return (stryMutAct_9fa48("2371") ? categories || categories.length : stryMutAct_9fa48("2370") ? false : stryMutAct_9fa48("2369") ? true : (stryCov_9fa48("2369", "2370", "2371"), categories && categories.length)) ? categories[0] : null;
      }
    };
    Categories.getCategoriesData = async function (cids) {
      if (stryMutAct_9fa48("2372")) {
        {}
      } else {
        stryCov_9fa48("2372");
        return await Categories.getCategoriesFields(cids, stryMutAct_9fa48("2373") ? ["Stryker was here"] : (stryCov_9fa48("2373"), []));
      }
    };
    Categories.getCategoryField = async function (cid, field) {
      if (stryMutAct_9fa48("2374")) {
        {}
      } else {
        stryCov_9fa48("2374");
        const category = await Categories.getCategoryFields(cid, stryMutAct_9fa48("2375") ? [] : (stryCov_9fa48("2375"), [field]));
        return category ? category[field] : null;
      }
    };
    Categories.getCategoryFields = async function (cid, fields) {
      if (stryMutAct_9fa48("2376")) {
        {}
      } else {
        stryCov_9fa48("2376");
        const categories = await Categories.getCategoriesFields(stryMutAct_9fa48("2377") ? [] : (stryCov_9fa48("2377"), [cid]), fields);
        return categories ? categories[0] : null;
      }
    };
    Categories.getAllCategoryFields = async function (fields) {
      if (stryMutAct_9fa48("2378")) {
        {}
      } else {
        stryCov_9fa48("2378");
        const cids = await Categories.getAllCidsFromSet(stryMutAct_9fa48("2379") ? "" : (stryCov_9fa48("2379"), 'categories:cid'));
        return await Categories.getCategoriesFields(cids, fields);
      }
    };
    Categories.setCategoryField = async function (cid, field, value) {
      if (stryMutAct_9fa48("2380")) {
        {}
      } else {
        stryCov_9fa48("2380");
        await db.setObjectField(stryMutAct_9fa48("2381") ? `` : (stryCov_9fa48("2381"), `category:${cid}`), field, value);
      }
    };
    Categories.incrementCategoryFieldBy = async function (cid, field, value) {
      if (stryMutAct_9fa48("2382")) {
        {}
      } else {
        stryCov_9fa48("2382");
        await db.incrObjectFieldBy(stryMutAct_9fa48("2383") ? `` : (stryCov_9fa48("2383"), `category:${cid}`), field, value);
      }
    };
  }
};
function defaultIntField(category, fields, fieldName, defaultField) {
  if (stryMutAct_9fa48("2384")) {
    {}
  } else {
    stryCov_9fa48("2384");
    if (stryMutAct_9fa48("2387") ? !fields.length && fields.includes(fieldName) : stryMutAct_9fa48("2386") ? false : stryMutAct_9fa48("2385") ? true : (stryCov_9fa48("2385", "2386", "2387"), (stryMutAct_9fa48("2388") ? fields.length : (stryCov_9fa48("2388"), !fields.length)) || fields.includes(fieldName))) {
      if (stryMutAct_9fa48("2389")) {
        {}
      } else {
        stryCov_9fa48("2389");
        const useDefault = stryMutAct_9fa48("2392") ? (!category.hasOwnProperty(fieldName) || category[fieldName] === null || category[fieldName] === '') && !utils.isNumber(category[fieldName]) : stryMutAct_9fa48("2391") ? false : stryMutAct_9fa48("2390") ? true : (stryCov_9fa48("2390", "2391", "2392"), (stryMutAct_9fa48("2394") ? (!category.hasOwnProperty(fieldName) || category[fieldName] === null) && category[fieldName] === '' : stryMutAct_9fa48("2393") ? false : (stryCov_9fa48("2393", "2394"), (stryMutAct_9fa48("2396") ? !category.hasOwnProperty(fieldName) && category[fieldName] === null : stryMutAct_9fa48("2395") ? false : (stryCov_9fa48("2395", "2396"), (stryMutAct_9fa48("2397") ? category.hasOwnProperty(fieldName) : (stryCov_9fa48("2397"), !category.hasOwnProperty(fieldName))) || (stryMutAct_9fa48("2399") ? category[fieldName] !== null : stryMutAct_9fa48("2398") ? false : (stryCov_9fa48("2398", "2399"), category[fieldName] === null)))) || (stryMutAct_9fa48("2401") ? category[fieldName] !== '' : stryMutAct_9fa48("2400") ? false : (stryCov_9fa48("2400", "2401"), category[fieldName] === (stryMutAct_9fa48("2402") ? "Stryker was here!" : (stryCov_9fa48("2402"), '')))))) || (stryMutAct_9fa48("2403") ? utils.isNumber(category[fieldName]) : (stryCov_9fa48("2403"), !utils.isNumber(category[fieldName]))));
        category[fieldName] = useDefault ? meta.config[defaultField] : category[fieldName];
      }
    }
  }
}
function modifyCategory(category, fields) {
  if (stryMutAct_9fa48("2404")) {
    {}
  } else {
    stryCov_9fa48("2404");
    if (stryMutAct_9fa48("2407") ? false : stryMutAct_9fa48("2406") ? true : stryMutAct_9fa48("2405") ? category : (stryCov_9fa48("2405", "2406", "2407"), !category)) {
      if (stryMutAct_9fa48("2408")) {
        {}
      } else {
        stryCov_9fa48("2408");
        return;
      }
    }
    defaultIntField(category, fields, stryMutAct_9fa48("2409") ? "" : (stryCov_9fa48("2409"), 'minTags'), stryMutAct_9fa48("2410") ? "" : (stryCov_9fa48("2410"), 'minimumTagsPerTopic'));
    defaultIntField(category, fields, stryMutAct_9fa48("2411") ? "" : (stryCov_9fa48("2411"), 'maxTags'), stryMutAct_9fa48("2412") ? "" : (stryCov_9fa48("2412"), 'maximumTagsPerTopic'));
    defaultIntField(category, fields, stryMutAct_9fa48("2413") ? "" : (stryCov_9fa48("2413"), 'postQueue'), stryMutAct_9fa48("2414") ? "" : (stryCov_9fa48("2414"), 'postQueue'));
    db.parseIntFields(category, intFields, fields);
    const escapeFields = stryMutAct_9fa48("2415") ? [] : (stryCov_9fa48("2415"), [stryMutAct_9fa48("2416") ? "" : (stryCov_9fa48("2416"), 'name'), stryMutAct_9fa48("2417") ? "" : (stryCov_9fa48("2417"), 'color'), stryMutAct_9fa48("2418") ? "" : (stryCov_9fa48("2418"), 'bgColor'), stryMutAct_9fa48("2419") ? "" : (stryCov_9fa48("2419"), 'backgroundImage'), stryMutAct_9fa48("2420") ? "" : (stryCov_9fa48("2420"), 'imageClass'), stryMutAct_9fa48("2421") ? "" : (stryCov_9fa48("2421"), 'class'), stryMutAct_9fa48("2422") ? "" : (stryCov_9fa48("2422"), 'link')]);
    escapeFields.forEach(field => {
      if (stryMutAct_9fa48("2423")) {
        {}
      } else {
        stryCov_9fa48("2423");
        if (stryMutAct_9fa48("2425") ? false : stryMutAct_9fa48("2424") ? true : (stryCov_9fa48("2424", "2425"), category.hasOwnProperty(field))) {
          if (stryMutAct_9fa48("2426")) {
            {}
          } else {
            stryCov_9fa48("2426");
            category[field] = validator.escape(String(stryMutAct_9fa48("2429") ? category[field] && '' : stryMutAct_9fa48("2428") ? false : stryMutAct_9fa48("2427") ? true : (stryCov_9fa48("2427", "2428", "2429"), category[field] || (stryMutAct_9fa48("2430") ? "Stryker was here!" : (stryCov_9fa48("2430"), '')))));
          }
        }
      }
    });
    if (stryMutAct_9fa48("2432") ? false : stryMutAct_9fa48("2431") ? true : (stryCov_9fa48("2431", "2432"), category.hasOwnProperty(stryMutAct_9fa48("2433") ? "" : (stryCov_9fa48("2433"), 'icon')))) {
      if (stryMutAct_9fa48("2434")) {
        {}
      } else {
        stryCov_9fa48("2434");
        category.icon = stryMutAct_9fa48("2437") ? category.icon && 'hidden' : stryMutAct_9fa48("2436") ? false : stryMutAct_9fa48("2435") ? true : (stryCov_9fa48("2435", "2436", "2437"), category.icon || (stryMutAct_9fa48("2438") ? "" : (stryCov_9fa48("2438"), 'hidden')));
      }
    }
    if (stryMutAct_9fa48("2440") ? false : stryMutAct_9fa48("2439") ? true : (stryCov_9fa48("2439", "2440"), category.hasOwnProperty(stryMutAct_9fa48("2441") ? "" : (stryCov_9fa48("2441"), 'post_count')))) {
      if (stryMutAct_9fa48("2442")) {
        {}
      } else {
        stryCov_9fa48("2442");
        category.totalPostCount = category.post_count;
      }
    }
    if (stryMutAct_9fa48("2444") ? false : stryMutAct_9fa48("2443") ? true : (stryCov_9fa48("2443", "2444"), category.hasOwnProperty(stryMutAct_9fa48("2445") ? "" : (stryCov_9fa48("2445"), 'topic_count')))) {
      if (stryMutAct_9fa48("2446")) {
        {}
      } else {
        stryCov_9fa48("2446");
        category.totalTopicCount = category.topic_count;
      }
    }
    if (stryMutAct_9fa48("2448") ? false : stryMutAct_9fa48("2447") ? true : (stryCov_9fa48("2447", "2448"), category.description)) {
      if (stryMutAct_9fa48("2449")) {
        {}
      } else {
        stryCov_9fa48("2449");
        category.description = validator.escape(String(category.description));
        category.descriptionParsed = stryMutAct_9fa48("2452") ? category.descriptionParsed && category.description : stryMutAct_9fa48("2451") ? false : stryMutAct_9fa48("2450") ? true : (stryCov_9fa48("2450", "2451", "2452"), category.descriptionParsed || category.description);
      }
    }
  }
}