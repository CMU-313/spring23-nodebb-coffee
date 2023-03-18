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
module.exports = function (opts) {
  if (stryMutAct_9fa48("2027")) {
    {}
  } else {
    stryCov_9fa48("2027");
    const TTLCache = require('@isaacs/ttlcache');
    const pubsub = require('../pubsub');
    const ttlCache = new TTLCache(opts);
    const cache = {};
    cache.name = opts.name;
    cache.hits = 0;
    cache.misses = 0;
    cache.enabled = opts.hasOwnProperty(stryMutAct_9fa48("2028") ? "" : (stryCov_9fa48("2028"), 'enabled')) ? opts.enabled : stryMutAct_9fa48("2029") ? false : (stryCov_9fa48("2029"), true);
    const cacheSet = ttlCache.set;

    // expose properties
    const propertyMap = new Map(stryMutAct_9fa48("2030") ? [] : (stryCov_9fa48("2030"), [stryMutAct_9fa48("2031") ? [] : (stryCov_9fa48("2031"), [stryMutAct_9fa48("2032") ? "" : (stryCov_9fa48("2032"), 'max'), stryMutAct_9fa48("2033") ? "" : (stryCov_9fa48("2033"), 'max')]), stryMutAct_9fa48("2034") ? [] : (stryCov_9fa48("2034"), [stryMutAct_9fa48("2035") ? "" : (stryCov_9fa48("2035"), 'itemCount'), stryMutAct_9fa48("2036") ? "" : (stryCov_9fa48("2036"), 'size')]), stryMutAct_9fa48("2037") ? [] : (stryCov_9fa48("2037"), [stryMutAct_9fa48("2038") ? "" : (stryCov_9fa48("2038"), 'size'), stryMutAct_9fa48("2039") ? "" : (stryCov_9fa48("2039"), 'size')]), stryMutAct_9fa48("2040") ? [] : (stryCov_9fa48("2040"), [stryMutAct_9fa48("2041") ? "" : (stryCov_9fa48("2041"), 'ttl'), stryMutAct_9fa48("2042") ? "" : (stryCov_9fa48("2042"), 'ttl')])]));
    propertyMap.forEach((ttlProp, cacheProp) => {
      if (stryMutAct_9fa48("2043")) {
        {}
      } else {
        stryCov_9fa48("2043");
        Object.defineProperty(cache, cacheProp, stryMutAct_9fa48("2044") ? {} : (stryCov_9fa48("2044"), {
          get: function () {
            if (stryMutAct_9fa48("2045")) {
              {}
            } else {
              stryCov_9fa48("2045");
              return ttlCache[ttlProp];
            }
          },
          configurable: stryMutAct_9fa48("2046") ? false : (stryCov_9fa48("2046"), true),
          enumerable: stryMutAct_9fa48("2047") ? false : (stryCov_9fa48("2047"), true)
        }));
      }
    });
    cache.set = function (key, value, ttl) {
      if (stryMutAct_9fa48("2048")) {
        {}
      } else {
        stryCov_9fa48("2048");
        if (stryMutAct_9fa48("2051") ? false : stryMutAct_9fa48("2050") ? true : stryMutAct_9fa48("2049") ? cache.enabled : (stryCov_9fa48("2049", "2050", "2051"), !cache.enabled)) {
          if (stryMutAct_9fa48("2052")) {
            {}
          } else {
            stryCov_9fa48("2052");
            return;
          }
        }
        const opts = {};
        if (stryMutAct_9fa48("2054") ? false : stryMutAct_9fa48("2053") ? true : (stryCov_9fa48("2053", "2054"), ttl)) {
          if (stryMutAct_9fa48("2055")) {
            {}
          } else {
            stryCov_9fa48("2055");
            opts.ttl = ttl;
          }
        }
        cacheSet.apply(ttlCache, stryMutAct_9fa48("2056") ? [] : (stryCov_9fa48("2056"), [key, value, opts]));
      }
    };
    cache.get = function (key) {
      if (stryMutAct_9fa48("2057")) {
        {}
      } else {
        stryCov_9fa48("2057");
        if (stryMutAct_9fa48("2060") ? false : stryMutAct_9fa48("2059") ? true : stryMutAct_9fa48("2058") ? cache.enabled : (stryCov_9fa48("2058", "2059", "2060"), !cache.enabled)) {
          if (stryMutAct_9fa48("2061")) {
            {}
          } else {
            stryCov_9fa48("2061");
            return undefined;
          }
        }
        const data = ttlCache.get(key);
        if (stryMutAct_9fa48("2064") ? data !== undefined : stryMutAct_9fa48("2063") ? false : stryMutAct_9fa48("2062") ? true : (stryCov_9fa48("2062", "2063", "2064"), data === undefined)) {
          if (stryMutAct_9fa48("2065")) {
            {}
          } else {
            stryCov_9fa48("2065");
            stryMutAct_9fa48("2066") ? cache.misses -= 1 : (stryCov_9fa48("2066"), cache.misses += 1);
          }
        } else {
          if (stryMutAct_9fa48("2067")) {
            {}
          } else {
            stryCov_9fa48("2067");
            stryMutAct_9fa48("2068") ? cache.hits -= 1 : (stryCov_9fa48("2068"), cache.hits += 1);
          }
        }
        return data;
      }
    };
    cache.del = function (keys) {
      if (stryMutAct_9fa48("2069")) {
        {}
      } else {
        stryCov_9fa48("2069");
        if (stryMutAct_9fa48("2072") ? false : stryMutAct_9fa48("2071") ? true : stryMutAct_9fa48("2070") ? Array.isArray(keys) : (stryCov_9fa48("2070", "2071", "2072"), !Array.isArray(keys))) {
          if (stryMutAct_9fa48("2073")) {
            {}
          } else {
            stryCov_9fa48("2073");
            keys = stryMutAct_9fa48("2074") ? [] : (stryCov_9fa48("2074"), [keys]);
          }
        }
        pubsub.publish(stryMutAct_9fa48("2075") ? `` : (stryCov_9fa48("2075"), `${cache.name}:ttlCache:del`), keys);
        keys.forEach(stryMutAct_9fa48("2076") ? () => undefined : (stryCov_9fa48("2076"), key => ttlCache.delete(key)));
      }
    };
    cache.delete = cache.del;
    cache.reset = function () {
      if (stryMutAct_9fa48("2077")) {
        {}
      } else {
        stryCov_9fa48("2077");
        pubsub.publish(stryMutAct_9fa48("2078") ? `` : (stryCov_9fa48("2078"), `${cache.name}:ttlCache:reset`));
        localReset();
      }
    };
    cache.clear = cache.reset;
    function localReset() {
      if (stryMutAct_9fa48("2079")) {
        {}
      } else {
        stryCov_9fa48("2079");
        ttlCache.clear();
        cache.hits = 0;
        cache.misses = 0;
      }
    }
    pubsub.on(stryMutAct_9fa48("2080") ? `` : (stryCov_9fa48("2080"), `${cache.name}:ttlCache:reset`), () => {
      if (stryMutAct_9fa48("2081")) {
        {}
      } else {
        stryCov_9fa48("2081");
        localReset();
      }
    });
    pubsub.on(stryMutAct_9fa48("2082") ? `` : (stryCov_9fa48("2082"), `${cache.name}:ttlCache:del`), keys => {
      if (stryMutAct_9fa48("2083")) {
        {}
      } else {
        stryCov_9fa48("2083");
        if (stryMutAct_9fa48("2085") ? false : stryMutAct_9fa48("2084") ? true : (stryCov_9fa48("2084", "2085"), Array.isArray(keys))) {
          if (stryMutAct_9fa48("2086")) {
            {}
          } else {
            stryCov_9fa48("2086");
            keys.forEach(stryMutAct_9fa48("2087") ? () => undefined : (stryCov_9fa48("2087"), key => ttlCache.delete(key)));
          }
        }
      }
    });
    cache.getUnCachedKeys = function (keys, cachedData) {
      if (stryMutAct_9fa48("2088")) {
        {}
      } else {
        stryCov_9fa48("2088");
        if (stryMutAct_9fa48("2091") ? false : stryMutAct_9fa48("2090") ? true : stryMutAct_9fa48("2089") ? cache.enabled : (stryCov_9fa48("2089", "2090", "2091"), !cache.enabled)) {
          if (stryMutAct_9fa48("2092")) {
            {}
          } else {
            stryCov_9fa48("2092");
            return keys;
          }
        }
        let data;
        let isCached;
        const unCachedKeys = stryMutAct_9fa48("2093") ? keys : (stryCov_9fa48("2093"), keys.filter(key => {
          if (stryMutAct_9fa48("2094")) {
            {}
          } else {
            stryCov_9fa48("2094");
            data = cache.get(key);
            isCached = stryMutAct_9fa48("2097") ? data === undefined : stryMutAct_9fa48("2096") ? false : stryMutAct_9fa48("2095") ? true : (stryCov_9fa48("2095", "2096", "2097"), data !== undefined);
            if (stryMutAct_9fa48("2099") ? false : stryMutAct_9fa48("2098") ? true : (stryCov_9fa48("2098", "2099"), isCached)) {
              if (stryMutAct_9fa48("2100")) {
                {}
              } else {
                stryCov_9fa48("2100");
                cachedData[key] = data;
              }
            }
            return stryMutAct_9fa48("2101") ? isCached : (stryCov_9fa48("2101"), !isCached);
          }
        }));
        const hits = stryMutAct_9fa48("2102") ? keys.length + unCachedKeys.length : (stryCov_9fa48("2102"), keys.length - unCachedKeys.length);
        const misses = stryMutAct_9fa48("2103") ? keys.length + hits : (stryCov_9fa48("2103"), keys.length - hits);
        stryMutAct_9fa48("2104") ? cache.hits -= hits : (stryCov_9fa48("2104"), cache.hits += hits);
        stryMutAct_9fa48("2105") ? cache.misses -= misses : (stryCov_9fa48("2105"), cache.misses += misses);
        return unCachedKeys;
      }
    };
    cache.dump = function () {
      if (stryMutAct_9fa48("2106")) {
        {}
      } else {
        stryCov_9fa48("2106");
        return Array.from(ttlCache.entries());
      }
    };
    cache.peek = function (key) {
      if (stryMutAct_9fa48("2107")) {
        {}
      } else {
        stryCov_9fa48("2107");
        return ttlCache.get(key, stryMutAct_9fa48("2108") ? {} : (stryCov_9fa48("2108"), {
          updateAgeOnGet: stryMutAct_9fa48("2109") ? true : (stryCov_9fa48("2109"), false)
        }));
      }
    };
    return cache;
  }
};