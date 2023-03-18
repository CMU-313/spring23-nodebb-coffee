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
const async = require('async');
const _ = require('lodash');
const db = require('../database');
const plugins = require('../plugins');
const privileges = require('../privileges');
const utils = require('../utils');
const slugify = require('../slugify');
const cache = require('../cache');
module.exports = function (Categories) {
  if (stryMutAct_9fa48("2126")) {
    {}
  } else {
    stryCov_9fa48("2126");
    Categories.create = async function (data) {
      if (stryMutAct_9fa48("2127")) {
        {}
      } else {
        stryCov_9fa48("2127");
        const parentCid = data.parentCid ? data.parentCid : 0;
        const [cid, firstChild] = await Promise.all(stryMutAct_9fa48("2128") ? [] : (stryCov_9fa48("2128"), [db.incrObjectField(stryMutAct_9fa48("2129") ? "" : (stryCov_9fa48("2129"), 'global'), stryMutAct_9fa48("2130") ? "" : (stryCov_9fa48("2130"), 'nextCid')), db.getSortedSetRangeWithScores(stryMutAct_9fa48("2131") ? `` : (stryCov_9fa48("2131"), `cid:${parentCid}:children`), 0, 0)]));
        data.name = String(stryMutAct_9fa48("2134") ? data.name && `Category ${cid}` : stryMutAct_9fa48("2133") ? false : stryMutAct_9fa48("2132") ? true : (stryCov_9fa48("2132", "2133", "2134"), data.name || (stryMutAct_9fa48("2135") ? `` : (stryCov_9fa48("2135"), `Category ${cid}`))));
        const slug = stryMutAct_9fa48("2136") ? `` : (stryCov_9fa48("2136"), `${cid}/${slugify(data.name)}`);
        const smallestOrder = firstChild.length ? stryMutAct_9fa48("2137") ? firstChild[0].score + 1 : (stryCov_9fa48("2137"), firstChild[0].score - 1) : 1;
        const order = stryMutAct_9fa48("2140") ? data.order && smallestOrder : stryMutAct_9fa48("2139") ? false : stryMutAct_9fa48("2138") ? true : (stryCov_9fa48("2138", "2139", "2140"), data.order || smallestOrder); // If no order provided, place it at the top
        const colours = Categories.assignColours();
        let category = stryMutAct_9fa48("2141") ? {} : (stryCov_9fa48("2141"), {
          cid: cid,
          name: data.name,
          description: data.description ? data.description : stryMutAct_9fa48("2142") ? "Stryker was here!" : (stryCov_9fa48("2142"), ''),
          descriptionParsed: data.descriptionParsed ? data.descriptionParsed : stryMutAct_9fa48("2143") ? "Stryker was here!" : (stryCov_9fa48("2143"), ''),
          icon: data.icon ? data.icon : stryMutAct_9fa48("2144") ? "Stryker was here!" : (stryCov_9fa48("2144"), ''),
          bgColor: stryMutAct_9fa48("2147") ? data.bgColor && colours[0] : stryMutAct_9fa48("2146") ? false : stryMutAct_9fa48("2145") ? true : (stryCov_9fa48("2145", "2146", "2147"), data.bgColor || colours[0]),
          color: stryMutAct_9fa48("2150") ? data.color && colours[1] : stryMutAct_9fa48("2149") ? false : stryMutAct_9fa48("2148") ? true : (stryCov_9fa48("2148", "2149", "2150"), data.color || colours[1]),
          slug: slug,
          parentCid: parentCid,
          topic_count: 0,
          post_count: 0,
          disabled: data.disabled ? 1 : 0,
          order: order,
          link: stryMutAct_9fa48("2153") ? data.link && '' : stryMutAct_9fa48("2152") ? false : stryMutAct_9fa48("2151") ? true : (stryCov_9fa48("2151", "2152", "2153"), data.link || (stryMutAct_9fa48("2154") ? "Stryker was here!" : (stryCov_9fa48("2154"), ''))),
          numRecentReplies: 1,
          class: data.class ? data.class : stryMutAct_9fa48("2155") ? "" : (stryCov_9fa48("2155"), 'col-md-3 col-xs-6'),
          imageClass: stryMutAct_9fa48("2156") ? "" : (stryCov_9fa48("2156"), 'cover'),
          isSection: 0,
          subCategoriesPerPage: 10
        });
        if (stryMutAct_9fa48("2158") ? false : stryMutAct_9fa48("2157") ? true : (stryCov_9fa48("2157", "2158"), data.backgroundImage)) {
          if (stryMutAct_9fa48("2159")) {
            {}
          } else {
            stryCov_9fa48("2159");
            category.backgroundImage = data.backgroundImage;
          }
        }
        const defaultPrivileges = stryMutAct_9fa48("2160") ? [] : (stryCov_9fa48("2160"), [stryMutAct_9fa48("2161") ? "" : (stryCov_9fa48("2161"), 'groups:find'), stryMutAct_9fa48("2162") ? "" : (stryCov_9fa48("2162"), 'groups:read'), stryMutAct_9fa48("2163") ? "" : (stryCov_9fa48("2163"), 'groups:topics:read'), stryMutAct_9fa48("2164") ? "" : (stryCov_9fa48("2164"), 'groups:topics:create'), stryMutAct_9fa48("2165") ? "" : (stryCov_9fa48("2165"), 'groups:topics:reply'), stryMutAct_9fa48("2166") ? "" : (stryCov_9fa48("2166"), 'groups:topics:tag'), stryMutAct_9fa48("2167") ? "" : (stryCov_9fa48("2167"), 'groups:posts:edit'), stryMutAct_9fa48("2168") ? "" : (stryCov_9fa48("2168"), 'groups:posts:history'), stryMutAct_9fa48("2169") ? "" : (stryCov_9fa48("2169"), 'groups:posts:delete'), stryMutAct_9fa48("2170") ? "" : (stryCov_9fa48("2170"), 'groups:posts:upvote'), stryMutAct_9fa48("2171") ? "" : (stryCov_9fa48("2171"), 'groups:posts:downvote'), stryMutAct_9fa48("2172") ? "" : (stryCov_9fa48("2172"), 'groups:topics:delete')]);
        const modPrivileges = defaultPrivileges.concat(stryMutAct_9fa48("2173") ? [] : (stryCov_9fa48("2173"), [stryMutAct_9fa48("2174") ? "" : (stryCov_9fa48("2174"), 'groups:topics:schedule'), stryMutAct_9fa48("2175") ? "" : (stryCov_9fa48("2175"), 'groups:posts:view_deleted'), stryMutAct_9fa48("2176") ? "" : (stryCov_9fa48("2176"), 'groups:purge')]));
        const guestPrivileges = stryMutAct_9fa48("2177") ? [] : (stryCov_9fa48("2177"), [stryMutAct_9fa48("2178") ? "" : (stryCov_9fa48("2178"), 'groups:find'), stryMutAct_9fa48("2179") ? "" : (stryCov_9fa48("2179"), 'groups:read'), stryMutAct_9fa48("2180") ? "" : (stryCov_9fa48("2180"), 'groups:topics:read')]);
        const result = await plugins.hooks.fire(stryMutAct_9fa48("2181") ? "" : (stryCov_9fa48("2181"), 'filter:category.create'), stryMutAct_9fa48("2182") ? {} : (stryCov_9fa48("2182"), {
          category: category,
          data: data,
          defaultPrivileges: defaultPrivileges,
          modPrivileges: modPrivileges,
          guestPrivileges: guestPrivileges
        }));
        category = result.category;
        await db.setObject(stryMutAct_9fa48("2183") ? `` : (stryCov_9fa48("2183"), `category:${category.cid}`), category);
        if (stryMutAct_9fa48("2186") ? false : stryMutAct_9fa48("2185") ? true : stryMutAct_9fa48("2184") ? category.descriptionParsed : (stryCov_9fa48("2184", "2185", "2186"), !category.descriptionParsed)) {
          if (stryMutAct_9fa48("2187")) {
            {}
          } else {
            stryCov_9fa48("2187");
            await Categories.parseDescription(category.cid, category.description);
          }
        }
        await db.sortedSetAddBulk(stryMutAct_9fa48("2188") ? [] : (stryCov_9fa48("2188"), [stryMutAct_9fa48("2189") ? [] : (stryCov_9fa48("2189"), [stryMutAct_9fa48("2190") ? "" : (stryCov_9fa48("2190"), 'categories:cid'), category.order, category.cid]), stryMutAct_9fa48("2191") ? [] : (stryCov_9fa48("2191"), [stryMutAct_9fa48("2192") ? `` : (stryCov_9fa48("2192"), `cid:${parentCid}:children`), category.order, category.cid]), stryMutAct_9fa48("2193") ? [] : (stryCov_9fa48("2193"), [stryMutAct_9fa48("2194") ? "" : (stryCov_9fa48("2194"), 'categories:name'), 0, stryMutAct_9fa48("2195") ? `` : (stryCov_9fa48("2195"), `${stryMutAct_9fa48("2197") ? data.name.toLowerCase() : stryMutAct_9fa48("2196") ? data.name.slice(0, 200).toUpperCase() : (stryCov_9fa48("2196", "2197"), data.name.slice(0, 200).toLowerCase())}:${category.cid}`)])]));
        await privileges.categories.give(result.defaultPrivileges, category.cid, stryMutAct_9fa48("2198") ? "" : (stryCov_9fa48("2198"), 'registered-users'));
        await privileges.categories.give(result.modPrivileges, category.cid, stryMutAct_9fa48("2199") ? [] : (stryCov_9fa48("2199"), [stryMutAct_9fa48("2200") ? "" : (stryCov_9fa48("2200"), 'administrators'), stryMutAct_9fa48("2201") ? "" : (stryCov_9fa48("2201"), 'Global Moderators')]));
        await privileges.categories.give(result.guestPrivileges, category.cid, stryMutAct_9fa48("2202") ? [] : (stryCov_9fa48("2202"), [stryMutAct_9fa48("2203") ? "" : (stryCov_9fa48("2203"), 'guests'), stryMutAct_9fa48("2204") ? "" : (stryCov_9fa48("2204"), 'spiders')]));
        cache.del(stryMutAct_9fa48("2205") ? [] : (stryCov_9fa48("2205"), [stryMutAct_9fa48("2206") ? "" : (stryCov_9fa48("2206"), 'categories:cid'), stryMutAct_9fa48("2207") ? `` : (stryCov_9fa48("2207"), `cid:${parentCid}:children`), stryMutAct_9fa48("2208") ? `` : (stryCov_9fa48("2208"), `cid:${parentCid}:children:all`)]));
        if (stryMutAct_9fa48("2211") ? data.cloneFromCid || parseInt(data.cloneFromCid, 10) : stryMutAct_9fa48("2210") ? false : stryMutAct_9fa48("2209") ? true : (stryCov_9fa48("2209", "2210", "2211"), data.cloneFromCid && parseInt(data.cloneFromCid, 10))) {
          if (stryMutAct_9fa48("2212")) {
            {}
          } else {
            stryCov_9fa48("2212");
            category = await Categories.copySettingsFrom(data.cloneFromCid, category.cid, stryMutAct_9fa48("2213") ? data.parentCid : (stryCov_9fa48("2213"), !data.parentCid));
          }
        }
        if (stryMutAct_9fa48("2215") ? false : stryMutAct_9fa48("2214") ? true : (stryCov_9fa48("2214", "2215"), data.cloneChildren)) {
          if (stryMutAct_9fa48("2216")) {
            {}
          } else {
            stryCov_9fa48("2216");
            await duplicateCategoriesChildren(category.cid, data.cloneFromCid, data.uid);
          }
        }
        plugins.hooks.fire(stryMutAct_9fa48("2217") ? "" : (stryCov_9fa48("2217"), 'action:category.create'), stryMutAct_9fa48("2218") ? {} : (stryCov_9fa48("2218"), {
          category: category
        }));
        return category;
      }
    };
    async function duplicateCategoriesChildren(parentCid, cid, uid) {
      if (stryMutAct_9fa48("2219")) {
        {}
      } else {
        stryCov_9fa48("2219");
        let children = await Categories.getChildren(stryMutAct_9fa48("2220") ? [] : (stryCov_9fa48("2220"), [cid]), uid);
        if (stryMutAct_9fa48("2223") ? false : stryMutAct_9fa48("2222") ? true : stryMutAct_9fa48("2221") ? children.length : (stryCov_9fa48("2221", "2222", "2223"), !children.length)) {
          if (stryMutAct_9fa48("2224")) {
            {}
          } else {
            stryCov_9fa48("2224");
            return;
          }
        }
        children = children[0];
        children.forEach(child => {
          if (stryMutAct_9fa48("2225")) {
            {}
          } else {
            stryCov_9fa48("2225");
            child.parentCid = parentCid;
            child.cloneFromCid = child.cid;
            child.cloneChildren = stryMutAct_9fa48("2226") ? false : (stryCov_9fa48("2226"), true);
            child.name = utils.decodeHTMLEntities(child.name);
            child.description = utils.decodeHTMLEntities(child.description);
            child.uid = uid;
          }
        });
        await async.each(children, Categories.create);
      }
    }
    Categories.assignColours = function () {
      if (stryMutAct_9fa48("2227")) {
        {}
      } else {
        stryCov_9fa48("2227");
        const backgrounds = stryMutAct_9fa48("2228") ? [] : (stryCov_9fa48("2228"), [stryMutAct_9fa48("2229") ? "" : (stryCov_9fa48("2229"), '#AB4642'), stryMutAct_9fa48("2230") ? "" : (stryCov_9fa48("2230"), '#DC9656'), stryMutAct_9fa48("2231") ? "" : (stryCov_9fa48("2231"), '#F7CA88'), stryMutAct_9fa48("2232") ? "" : (stryCov_9fa48("2232"), '#A1B56C'), stryMutAct_9fa48("2233") ? "" : (stryCov_9fa48("2233"), '#86C1B9'), stryMutAct_9fa48("2234") ? "" : (stryCov_9fa48("2234"), '#7CAFC2'), stryMutAct_9fa48("2235") ? "" : (stryCov_9fa48("2235"), '#BA8BAF'), stryMutAct_9fa48("2236") ? "" : (stryCov_9fa48("2236"), '#A16946')]);
        const text = stryMutAct_9fa48("2237") ? [] : (stryCov_9fa48("2237"), [stryMutAct_9fa48("2238") ? "" : (stryCov_9fa48("2238"), '#ffffff'), stryMutAct_9fa48("2239") ? "" : (stryCov_9fa48("2239"), '#ffffff'), stryMutAct_9fa48("2240") ? "" : (stryCov_9fa48("2240"), '#333333'), stryMutAct_9fa48("2241") ? "" : (stryCov_9fa48("2241"), '#ffffff'), stryMutAct_9fa48("2242") ? "" : (stryCov_9fa48("2242"), '#333333'), stryMutAct_9fa48("2243") ? "" : (stryCov_9fa48("2243"), '#ffffff'), stryMutAct_9fa48("2244") ? "" : (stryCov_9fa48("2244"), '#ffffff'), stryMutAct_9fa48("2245") ? "" : (stryCov_9fa48("2245"), '#ffffff')]);
        const index = Math.floor(stryMutAct_9fa48("2246") ? Math.random() / backgrounds.length : (stryCov_9fa48("2246"), Math.random() * backgrounds.length));
        return stryMutAct_9fa48("2247") ? [] : (stryCov_9fa48("2247"), [backgrounds[index], text[index]]);
      }
    };
    Categories.copySettingsFrom = async function (fromCid, toCid, copyParent) {
      if (stryMutAct_9fa48("2248")) {
        {}
      } else {
        stryCov_9fa48("2248");
        const [source, destination] = await Promise.all(stryMutAct_9fa48("2249") ? [] : (stryCov_9fa48("2249"), [db.getObject(stryMutAct_9fa48("2250") ? `` : (stryCov_9fa48("2250"), `category:${fromCid}`)), db.getObject(stryMutAct_9fa48("2251") ? `` : (stryCov_9fa48("2251"), `category:${toCid}`))]));
        if (stryMutAct_9fa48("2254") ? false : stryMutAct_9fa48("2253") ? true : stryMutAct_9fa48("2252") ? source : (stryCov_9fa48("2252", "2253", "2254"), !source)) {
          if (stryMutAct_9fa48("2255")) {
            {}
          } else {
            stryCov_9fa48("2255");
            throw new Error(stryMutAct_9fa48("2256") ? "" : (stryCov_9fa48("2256"), '[[error:invalid-cid]]'));
          }
        }
        const oldParent = stryMutAct_9fa48("2259") ? parseInt(destination.parentCid, 10) && 0 : stryMutAct_9fa48("2258") ? false : stryMutAct_9fa48("2257") ? true : (stryCov_9fa48("2257", "2258", "2259"), parseInt(destination.parentCid, 10) || 0);
        const newParent = stryMutAct_9fa48("2262") ? parseInt(source.parentCid, 10) && 0 : stryMutAct_9fa48("2261") ? false : stryMutAct_9fa48("2260") ? true : (stryCov_9fa48("2260", "2261", "2262"), parseInt(source.parentCid, 10) || 0);
        if (stryMutAct_9fa48("2265") ? copyParent || newParent !== parseInt(toCid, 10) : stryMutAct_9fa48("2264") ? false : stryMutAct_9fa48("2263") ? true : (stryCov_9fa48("2263", "2264", "2265"), copyParent && (stryMutAct_9fa48("2267") ? newParent === parseInt(toCid, 10) : stryMutAct_9fa48("2266") ? true : (stryCov_9fa48("2266", "2267"), newParent !== parseInt(toCid, 10))))) {
          if (stryMutAct_9fa48("2268")) {
            {}
          } else {
            stryCov_9fa48("2268");
            await db.sortedSetRemove(stryMutAct_9fa48("2269") ? `` : (stryCov_9fa48("2269"), `cid:${oldParent}:children`), toCid);
            await db.sortedSetAdd(stryMutAct_9fa48("2270") ? `` : (stryCov_9fa48("2270"), `cid:${newParent}:children`), source.order, toCid);
            cache.del(stryMutAct_9fa48("2271") ? [] : (stryCov_9fa48("2271"), [stryMutAct_9fa48("2272") ? `` : (stryCov_9fa48("2272"), `cid:${oldParent}:children`), stryMutAct_9fa48("2273") ? `` : (stryCov_9fa48("2273"), `cid:${oldParent}:children:all`), stryMutAct_9fa48("2274") ? `` : (stryCov_9fa48("2274"), `cid:${newParent}:children`), stryMutAct_9fa48("2275") ? `` : (stryCov_9fa48("2275"), `cid:${newParent}:children:all`)]));
          }
        }
        destination.description = source.description;
        destination.descriptionParsed = source.descriptionParsed;
        destination.icon = source.icon;
        destination.bgColor = source.bgColor;
        destination.color = source.color;
        destination.link = source.link;
        destination.numRecentReplies = source.numRecentReplies;
        destination.class = source.class;
        destination.image = source.image;
        destination.imageClass = source.imageClass;
        destination.minTags = source.minTags;
        destination.maxTags = source.maxTags;
        if (stryMutAct_9fa48("2277") ? false : stryMutAct_9fa48("2276") ? true : (stryCov_9fa48("2276", "2277"), copyParent)) {
          if (stryMutAct_9fa48("2278")) {
            {}
          } else {
            stryCov_9fa48("2278");
            destination.parentCid = stryMutAct_9fa48("2281") ? source.parentCid && 0 : stryMutAct_9fa48("2280") ? false : stryMutAct_9fa48("2279") ? true : (stryCov_9fa48("2279", "2280", "2281"), source.parentCid || 0);
          }
        }
        await plugins.hooks.fire(stryMutAct_9fa48("2282") ? "" : (stryCov_9fa48("2282"), 'filter:categories.copySettingsFrom'), stryMutAct_9fa48("2283") ? {} : (stryCov_9fa48("2283"), {
          source: source,
          destination: destination,
          copyParent: copyParent
        }));
        await db.setObject(stryMutAct_9fa48("2284") ? `` : (stryCov_9fa48("2284"), `category:${toCid}`), destination);
        await copyTagWhitelist(fromCid, toCid);
        await Categories.copyPrivilegesFrom(fromCid, toCid);
        return destination;
      }
    };
    async function copyTagWhitelist(fromCid, toCid) {
      if (stryMutAct_9fa48("2285")) {
        {}
      } else {
        stryCov_9fa48("2285");
        const data = await db.getSortedSetRangeWithScores(stryMutAct_9fa48("2286") ? `` : (stryCov_9fa48("2286"), `cid:${fromCid}:tag:whitelist`), 0, stryMutAct_9fa48("2287") ? +1 : (stryCov_9fa48("2287"), -1));
        await db.delete(stryMutAct_9fa48("2288") ? `` : (stryCov_9fa48("2288"), `cid:${toCid}:tag:whitelist`));
        await db.sortedSetAdd(stryMutAct_9fa48("2289") ? `` : (stryCov_9fa48("2289"), `cid:${toCid}:tag:whitelist`), data.map(stryMutAct_9fa48("2290") ? () => undefined : (stryCov_9fa48("2290"), item => item.score)), data.map(stryMutAct_9fa48("2291") ? () => undefined : (stryCov_9fa48("2291"), item => item.value)));
        cache.del(stryMutAct_9fa48("2292") ? `` : (stryCov_9fa48("2292"), `cid:${toCid}:tag:whitelist`));
      }
    }
    Categories.copyPrivilegesFrom = async function (fromCid, toCid, group, filter = stryMutAct_9fa48("2293") ? ["Stryker was here"] : (stryCov_9fa48("2293"), [])) {
      if (stryMutAct_9fa48("2294")) {
        {}
      } else {
        stryCov_9fa48("2294");
        group = stryMutAct_9fa48("2297") ? group && '' : stryMutAct_9fa48("2296") ? false : stryMutAct_9fa48("2295") ? true : (stryCov_9fa48("2295", "2296", "2297"), group || (stryMutAct_9fa48("2298") ? "Stryker was here!" : (stryCov_9fa48("2298"), '')));
        let privsToCopy;
        if (stryMutAct_9fa48("2300") ? false : stryMutAct_9fa48("2299") ? true : (stryCov_9fa48("2299", "2300"), group)) {
          if (stryMutAct_9fa48("2301")) {
            {}
          } else {
            stryCov_9fa48("2301");
            const groupPrivilegeList = await privileges.categories.getGroupPrivilegeList();
            privsToCopy = stryMutAct_9fa48("2302") ? groupPrivilegeList : (stryCov_9fa48("2302"), groupPrivilegeList.slice(...filter));
          }
        } else {
          if (stryMutAct_9fa48("2303")) {
            {}
          } else {
            stryCov_9fa48("2303");
            const privs = await privileges.categories.getPrivilegeList();
            const halfIdx = stryMutAct_9fa48("2304") ? privs.length * 2 : (stryCov_9fa48("2304"), privs.length / 2);
            privsToCopy = stryMutAct_9fa48("2306") ? privs.slice(...filter).concat(privs.slice(halfIdx).slice(...filter)) : stryMutAct_9fa48("2305") ? privs.slice(0, halfIdx).concat(privs.slice(halfIdx).slice(...filter)) : (stryCov_9fa48("2305", "2306"), privs.slice(0, halfIdx).slice(...filter).concat(stryMutAct_9fa48("2308") ? privs.slice(...filter) : stryMutAct_9fa48("2307") ? privs.slice(halfIdx) : (stryCov_9fa48("2307", "2308"), privs.slice(halfIdx).slice(...filter))));
          }
        }
        const data = await plugins.hooks.fire(stryMutAct_9fa48("2309") ? "" : (stryCov_9fa48("2309"), 'filter:categories.copyPrivilegesFrom'), stryMutAct_9fa48("2310") ? {} : (stryCov_9fa48("2310"), {
          privileges: privsToCopy,
          fromCid: fromCid,
          toCid: toCid,
          group: group
        }));
        if (stryMutAct_9fa48("2312") ? false : stryMutAct_9fa48("2311") ? true : (stryCov_9fa48("2311", "2312"), group)) {
          if (stryMutAct_9fa48("2313")) {
            {}
          } else {
            stryCov_9fa48("2313");
            await copyPrivilegesByGroup(data.privileges, data.fromCid, data.toCid, group);
          }
        } else {
          if (stryMutAct_9fa48("2314")) {
            {}
          } else {
            stryCov_9fa48("2314");
            await copyPrivileges(data.privileges, data.fromCid, data.toCid);
          }
        }
      }
    };
    async function copyPrivileges(privileges, fromCid, toCid) {
      if (stryMutAct_9fa48("2315")) {
        {}
      } else {
        stryCov_9fa48("2315");
        const toGroups = privileges.map(stryMutAct_9fa48("2316") ? () => undefined : (stryCov_9fa48("2316"), privilege => stryMutAct_9fa48("2317") ? `` : (stryCov_9fa48("2317"), `group:cid:${toCid}:privileges:${privilege}:members`)));
        const fromGroups = privileges.map(stryMutAct_9fa48("2318") ? () => undefined : (stryCov_9fa48("2318"), privilege => stryMutAct_9fa48("2319") ? `` : (stryCov_9fa48("2319"), `group:cid:${fromCid}:privileges:${privilege}:members`)));
        const currentMembers = await db.getSortedSetsMembers(toGroups.concat(fromGroups));
        const copyGroups = _.uniq(_.flatten(currentMembers));
        await async.each(copyGroups, async group => {
          if (stryMutAct_9fa48("2320")) {
            {}
          } else {
            stryCov_9fa48("2320");
            await copyPrivilegesByGroup(privileges, fromCid, toCid, group);
          }
        });
      }
    }
    async function copyPrivilegesByGroup(privilegeList, fromCid, toCid, group) {
      if (stryMutAct_9fa48("2321")) {
        {}
      } else {
        stryCov_9fa48("2321");
        const fromGroups = privilegeList.map(stryMutAct_9fa48("2322") ? () => undefined : (stryCov_9fa48("2322"), privilege => stryMutAct_9fa48("2323") ? `` : (stryCov_9fa48("2323"), `group:cid:${fromCid}:privileges:${privilege}:members`)));
        const toGroups = privilegeList.map(stryMutAct_9fa48("2324") ? () => undefined : (stryCov_9fa48("2324"), privilege => stryMutAct_9fa48("2325") ? `` : (stryCov_9fa48("2325"), `group:cid:${toCid}:privileges:${privilege}:members`)));
        const [fromChecks, toChecks] = await Promise.all(stryMutAct_9fa48("2326") ? [] : (stryCov_9fa48("2326"), [db.isMemberOfSortedSets(fromGroups, group), db.isMemberOfSortedSets(toGroups, group)]));
        const givePrivs = stryMutAct_9fa48("2327") ? privilegeList : (stryCov_9fa48("2327"), privilegeList.filter(stryMutAct_9fa48("2328") ? () => undefined : (stryCov_9fa48("2328"), (priv, index) => stryMutAct_9fa48("2331") ? fromChecks[index] || !toChecks[index] : stryMutAct_9fa48("2330") ? false : stryMutAct_9fa48("2329") ? true : (stryCov_9fa48("2329", "2330", "2331"), fromChecks[index] && (stryMutAct_9fa48("2332") ? toChecks[index] : (stryCov_9fa48("2332"), !toChecks[index]))))));
        const rescindPrivs = stryMutAct_9fa48("2333") ? privilegeList : (stryCov_9fa48("2333"), privilegeList.filter(stryMutAct_9fa48("2334") ? () => undefined : (stryCov_9fa48("2334"), (priv, index) => stryMutAct_9fa48("2337") ? !fromChecks[index] || toChecks[index] : stryMutAct_9fa48("2336") ? false : stryMutAct_9fa48("2335") ? true : (stryCov_9fa48("2335", "2336", "2337"), (stryMutAct_9fa48("2338") ? fromChecks[index] : (stryCov_9fa48("2338"), !fromChecks[index])) && toChecks[index]))));
        await privileges.categories.give(givePrivs, toCid, group);
        await privileges.categories.rescind(rescindPrivs, toCid, group);
      }
    }
  }
};