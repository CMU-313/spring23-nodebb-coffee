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
const privileges = require('../privileges');
const plugins = require('../plugins');
const db = require('../database');
module.exports = function (Categories) {
  if (stryMutAct_9fa48("3116")) {
    {}
  } else {
    stryCov_9fa48("3116");
    Categories.search = async function (data) {
      if (stryMutAct_9fa48("3117")) {
        {}
      } else {
        stryCov_9fa48("3117");
        const query = stryMutAct_9fa48("3120") ? data.query && '' : stryMutAct_9fa48("3119") ? false : stryMutAct_9fa48("3118") ? true : (stryCov_9fa48("3118", "3119", "3120"), data.query || (stryMutAct_9fa48("3121") ? "Stryker was here!" : (stryCov_9fa48("3121"), '')));
        const page = stryMutAct_9fa48("3124") ? data.page && 1 : stryMutAct_9fa48("3123") ? false : stryMutAct_9fa48("3122") ? true : (stryCov_9fa48("3122", "3123", "3124"), data.page || 1);
        const uid = stryMutAct_9fa48("3127") ? data.uid && 0 : stryMutAct_9fa48("3126") ? false : stryMutAct_9fa48("3125") ? true : (stryCov_9fa48("3125", "3126", "3127"), data.uid || 0);
        const paginate = data.hasOwnProperty(stryMutAct_9fa48("3128") ? "" : (stryCov_9fa48("3128"), 'paginate')) ? data.paginate : stryMutAct_9fa48("3129") ? false : (stryCov_9fa48("3129"), true);
        const startTime = process.hrtime();
        let cids = await findCids(query, data.hardCap);
        const result = await plugins.hooks.fire(stryMutAct_9fa48("3130") ? "" : (stryCov_9fa48("3130"), 'filter:categories.search'), stryMutAct_9fa48("3131") ? {} : (stryCov_9fa48("3131"), {
          data: data,
          cids: cids,
          uid: uid
        }));
        cids = await privileges.categories.filterCids(stryMutAct_9fa48("3132") ? "" : (stryCov_9fa48("3132"), 'find'), result.cids, uid);
        const searchResult = stryMutAct_9fa48("3133") ? {} : (stryCov_9fa48("3133"), {
          matchCount: cids.length
        });
        if (stryMutAct_9fa48("3135") ? false : stryMutAct_9fa48("3134") ? true : (stryCov_9fa48("3134", "3135"), paginate)) {
          if (stryMutAct_9fa48("3136")) {
            {}
          } else {
            stryCov_9fa48("3136");
            const resultsPerPage = stryMutAct_9fa48("3139") ? data.resultsPerPage && 50 : stryMutAct_9fa48("3138") ? false : stryMutAct_9fa48("3137") ? true : (stryCov_9fa48("3137", "3138", "3139"), data.resultsPerPage || 50);
            const start = stryMutAct_9fa48("3140") ? Math.max(0, page - 1) / resultsPerPage : (stryCov_9fa48("3140"), Math.max(0, stryMutAct_9fa48("3141") ? page + 1 : (stryCov_9fa48("3141"), page - 1)) * resultsPerPage);
            const stop = stryMutAct_9fa48("3142") ? start - resultsPerPage : (stryCov_9fa48("3142"), start + resultsPerPage);
            searchResult.pageCount = Math.ceil(stryMutAct_9fa48("3143") ? cids.length * resultsPerPage : (stryCov_9fa48("3143"), cids.length / resultsPerPage));
            cids = stryMutAct_9fa48("3144") ? cids : (stryCov_9fa48("3144"), cids.slice(start, stop));
          }
        }
        const childrenCids = await getChildrenCids(cids, uid);
        const uniqCids = _.uniq(cids.concat(childrenCids));
        const categoryData = await Categories.getCategories(uniqCids, uid);
        Categories.getTree(categoryData, 0);
        await Categories.getRecentTopicReplies(categoryData, uid, data.qs);
        categoryData.forEach(category => {
          if (stryMutAct_9fa48("3145")) {
            {}
          } else {
            stryCov_9fa48("3145");
            if (stryMutAct_9fa48("3148") ? category || Array.isArray(category.children) : stryMutAct_9fa48("3147") ? false : stryMutAct_9fa48("3146") ? true : (stryCov_9fa48("3146", "3147", "3148"), category && Array.isArray(category.children))) {
              if (stryMutAct_9fa48("3149")) {
                {}
              } else {
                stryCov_9fa48("3149");
                category.children = stryMutAct_9fa48("3150") ? category.children : (stryCov_9fa48("3150"), category.children.slice(0, category.subCategoriesPerPage));
                category.children.forEach(child => {
                  if (stryMutAct_9fa48("3151")) {
                    {}
                  } else {
                    stryCov_9fa48("3151");
                    child.children = undefined;
                  }
                });
              }
            }
          }
        });
        stryMutAct_9fa48("3152") ? categoryData : (stryCov_9fa48("3152"), categoryData.sort((c1, c2) => {
          if (stryMutAct_9fa48("3153")) {
            {}
          } else {
            stryCov_9fa48("3153");
            if (stryMutAct_9fa48("3156") ? c1.parentCid === c2.parentCid : stryMutAct_9fa48("3155") ? false : stryMutAct_9fa48("3154") ? true : (stryCov_9fa48("3154", "3155", "3156"), c1.parentCid !== c2.parentCid)) {
              if (stryMutAct_9fa48("3157")) {
                {}
              } else {
                stryCov_9fa48("3157");
                return stryMutAct_9fa48("3158") ? c1.parentCid + c2.parentCid : (stryCov_9fa48("3158"), c1.parentCid - c2.parentCid);
              }
            }
            return stryMutAct_9fa48("3159") ? c1.order + c2.order : (stryCov_9fa48("3159"), c1.order - c2.order);
          }
        }));
        searchResult.timing = (stryMutAct_9fa48("3160") ? process.elapsedTimeSince(startTime) * 1000 : (stryCov_9fa48("3160"), process.elapsedTimeSince(startTime) / 1000)).toFixed(2);
        searchResult.categories = stryMutAct_9fa48("3161") ? categoryData : (stryCov_9fa48("3161"), categoryData.filter(stryMutAct_9fa48("3162") ? () => undefined : (stryCov_9fa48("3162"), c => cids.includes(c.cid))));
        return searchResult;
      }
    };
    async function findCids(query, hardCap) {
      if (stryMutAct_9fa48("3163")) {
        {}
      } else {
        stryCov_9fa48("3163");
        if (stryMutAct_9fa48("3166") ? !query && String(query).length < 2 : stryMutAct_9fa48("3165") ? false : stryMutAct_9fa48("3164") ? true : (stryCov_9fa48("3164", "3165", "3166"), (stryMutAct_9fa48("3167") ? query : (stryCov_9fa48("3167"), !query)) || (stryMutAct_9fa48("3170") ? String(query).length >= 2 : stryMutAct_9fa48("3169") ? String(query).length <= 2 : stryMutAct_9fa48("3168") ? false : (stryCov_9fa48("3168", "3169", "3170"), String(query).length < 2)))) {
          if (stryMutAct_9fa48("3171")) {
            {}
          } else {
            stryCov_9fa48("3171");
            return stryMutAct_9fa48("3172") ? ["Stryker was here"] : (stryCov_9fa48("3172"), []);
          }
        }
        const data = await db.getSortedSetScan(stryMutAct_9fa48("3173") ? {} : (stryCov_9fa48("3173"), {
          key: stryMutAct_9fa48("3174") ? "" : (stryCov_9fa48("3174"), 'categories:name'),
          match: stryMutAct_9fa48("3175") ? `` : (stryCov_9fa48("3175"), `*${stryMutAct_9fa48("3176") ? String(query).toUpperCase() : (stryCov_9fa48("3176"), String(query).toLowerCase())}*`),
          limit: stryMutAct_9fa48("3179") ? hardCap && 500 : stryMutAct_9fa48("3178") ? false : stryMutAct_9fa48("3177") ? true : (stryCov_9fa48("3177", "3178", "3179"), hardCap || 500)
        }));
        return data.map(stryMutAct_9fa48("3180") ? () => undefined : (stryCov_9fa48("3180"), data => parseInt(data.split(stryMutAct_9fa48("3181") ? "" : (stryCov_9fa48("3181"), ':')).pop(), 10)));
      }
    }
    async function getChildrenCids(cids, uid) {
      if (stryMutAct_9fa48("3182")) {
        {}
      } else {
        stryCov_9fa48("3182");
        const childrenCids = await Promise.all(cids.map(stryMutAct_9fa48("3183") ? () => undefined : (stryCov_9fa48("3183"), cid => Categories.getChildrenCids(cid))));
        return await privileges.categories.filterCids(stryMutAct_9fa48("3184") ? "" : (stryCov_9fa48("3184"), 'find'), _.flatten(childrenCids), uid);
      }
    }
  }
};