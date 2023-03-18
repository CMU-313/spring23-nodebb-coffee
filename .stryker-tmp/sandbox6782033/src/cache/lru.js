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
  if (stryMutAct_9fa48("1908")) {
    {}
  } else {
    stryCov_9fa48("1908");
    const LRU = require('lru-cache');
    const pubsub = require('../pubsub');

    // lru-cache@7 deprecations
    const winston = require('winston');
    const chalk = require('chalk');

    // sometimes we kept passing in `length` with no corresponding `maxSize`.
    // This is now enforced in v7; drop superfluous property
    if (stryMutAct_9fa48("1911") ? opts.hasOwnProperty('length') || !opts.hasOwnProperty('maxSize') : stryMutAct_9fa48("1910") ? false : stryMutAct_9fa48("1909") ? true : (stryCov_9fa48("1909", "1910", "1911"), opts.hasOwnProperty(stryMutAct_9fa48("1912") ? "" : (stryCov_9fa48("1912"), 'length')) && (stryMutAct_9fa48("1913") ? opts.hasOwnProperty('maxSize') : (stryCov_9fa48("1913"), !opts.hasOwnProperty(stryMutAct_9fa48("1914") ? "" : (stryCov_9fa48("1914"), 'maxSize')))))) {
      if (stryMutAct_9fa48("1915")) {
        {}
      } else {
        stryCov_9fa48("1915");
        winston.warn(stryMutAct_9fa48("1916") ? `` : (stryCov_9fa48("1916"), `[cache/init(${opts.name})] ${chalk.white.bgRed.bold(stryMutAct_9fa48("1917") ? "" : (stryCov_9fa48("1917"), 'DEPRECATION'))} ${chalk.yellow(stryMutAct_9fa48("1918") ? "" : (stryCov_9fa48("1918"), 'length'))} was passed in without a corresponding ${chalk.yellow(stryMutAct_9fa48("1919") ? "" : (stryCov_9fa48("1919"), 'maxSize'))}. Both are now required as of lru-cache@7.0.0.`));
        delete opts.length;
      }
    }
    const deprecations = new Map(stryMutAct_9fa48("1920") ? [] : (stryCov_9fa48("1920"), [stryMutAct_9fa48("1921") ? [] : (stryCov_9fa48("1921"), [stryMutAct_9fa48("1922") ? "" : (stryCov_9fa48("1922"), 'stale'), stryMutAct_9fa48("1923") ? "" : (stryCov_9fa48("1923"), 'allowStale')]), stryMutAct_9fa48("1924") ? [] : (stryCov_9fa48("1924"), [stryMutAct_9fa48("1925") ? "" : (stryCov_9fa48("1925"), 'maxAge'), stryMutAct_9fa48("1926") ? "" : (stryCov_9fa48("1926"), 'ttl')]), stryMutAct_9fa48("1927") ? [] : (stryCov_9fa48("1927"), [stryMutAct_9fa48("1928") ? "" : (stryCov_9fa48("1928"), 'length'), stryMutAct_9fa48("1929") ? "" : (stryCov_9fa48("1929"), 'sizeCalculation')])]));
    deprecations.forEach((newProp, oldProp) => {
      if (stryMutAct_9fa48("1930")) {
        {}
      } else {
        stryCov_9fa48("1930");
        if (stryMutAct_9fa48("1933") ? opts.hasOwnProperty(oldProp) || !opts.hasOwnProperty(newProp) : stryMutAct_9fa48("1932") ? false : stryMutAct_9fa48("1931") ? true : (stryCov_9fa48("1931", "1932", "1933"), opts.hasOwnProperty(oldProp) && (stryMutAct_9fa48("1934") ? opts.hasOwnProperty(newProp) : (stryCov_9fa48("1934"), !opts.hasOwnProperty(newProp))))) {
          if (stryMutAct_9fa48("1935")) {
            {}
          } else {
            stryCov_9fa48("1935");
            winston.warn(stryMutAct_9fa48("1936") ? `` : (stryCov_9fa48("1936"), `[cache/init(${opts.name})] ${chalk.white.bgRed.bold(stryMutAct_9fa48("1937") ? "" : (stryCov_9fa48("1937"), 'DEPRECATION'))} The option ${chalk.yellow(oldProp)} has been deprecated as of lru-cache@7.0.0. Please change this to ${chalk.yellow(newProp)} instead.`));
            opts[newProp] = opts[oldProp];
            delete opts[oldProp];
          }
        }
      }
    });
    const lruCache = new LRU(opts);
    const cache = {};
    cache.name = opts.name;
    cache.hits = 0;
    cache.misses = 0;
    cache.enabled = opts.hasOwnProperty(stryMutAct_9fa48("1938") ? "" : (stryCov_9fa48("1938"), 'enabled')) ? opts.enabled : stryMutAct_9fa48("1939") ? false : (stryCov_9fa48("1939"), true);
    const cacheSet = lruCache.set;

    // expose properties while keeping backwards compatibility
    const propertyMap = new Map(stryMutAct_9fa48("1940") ? [] : (stryCov_9fa48("1940"), [stryMutAct_9fa48("1941") ? [] : (stryCov_9fa48("1941"), [stryMutAct_9fa48("1942") ? "" : (stryCov_9fa48("1942"), 'length'), stryMutAct_9fa48("1943") ? "" : (stryCov_9fa48("1943"), 'calculatedSize')]), stryMutAct_9fa48("1944") ? [] : (stryCov_9fa48("1944"), [stryMutAct_9fa48("1945") ? "" : (stryCov_9fa48("1945"), 'calculatedSize'), stryMutAct_9fa48("1946") ? "" : (stryCov_9fa48("1946"), 'calculatedSize')]), stryMutAct_9fa48("1947") ? [] : (stryCov_9fa48("1947"), [stryMutAct_9fa48("1948") ? "" : (stryCov_9fa48("1948"), 'max'), stryMutAct_9fa48("1949") ? "" : (stryCov_9fa48("1949"), 'max')]), stryMutAct_9fa48("1950") ? [] : (stryCov_9fa48("1950"), [stryMutAct_9fa48("1951") ? "" : (stryCov_9fa48("1951"), 'maxSize'), stryMutAct_9fa48("1952") ? "" : (stryCov_9fa48("1952"), 'maxSize')]), stryMutAct_9fa48("1953") ? [] : (stryCov_9fa48("1953"), [stryMutAct_9fa48("1954") ? "" : (stryCov_9fa48("1954"), 'itemCount'), stryMutAct_9fa48("1955") ? "" : (stryCov_9fa48("1955"), 'size')]), stryMutAct_9fa48("1956") ? [] : (stryCov_9fa48("1956"), [stryMutAct_9fa48("1957") ? "" : (stryCov_9fa48("1957"), 'size'), stryMutAct_9fa48("1958") ? "" : (stryCov_9fa48("1958"), 'size')]), stryMutAct_9fa48("1959") ? [] : (stryCov_9fa48("1959"), [stryMutAct_9fa48("1960") ? "" : (stryCov_9fa48("1960"), 'ttl'), stryMutAct_9fa48("1961") ? "" : (stryCov_9fa48("1961"), 'ttl')])]));
    propertyMap.forEach((lruProp, cacheProp) => {
      if (stryMutAct_9fa48("1962")) {
        {}
      } else {
        stryCov_9fa48("1962");
        Object.defineProperty(cache, cacheProp, stryMutAct_9fa48("1963") ? {} : (stryCov_9fa48("1963"), {
          get: function () {
            if (stryMutAct_9fa48("1964")) {
              {}
            } else {
              stryCov_9fa48("1964");
              return lruCache[lruProp];
            }
          },
          configurable: stryMutAct_9fa48("1965") ? false : (stryCov_9fa48("1965"), true),
          enumerable: stryMutAct_9fa48("1966") ? false : (stryCov_9fa48("1966"), true)
        }));
      }
    });
    cache.set = function (key, value, ttl) {
      if (stryMutAct_9fa48("1967")) {
        {}
      } else {
        stryCov_9fa48("1967");
        if (stryMutAct_9fa48("1970") ? false : stryMutAct_9fa48("1969") ? true : stryMutAct_9fa48("1968") ? cache.enabled : (stryCov_9fa48("1968", "1969", "1970"), !cache.enabled)) {
          if (stryMutAct_9fa48("1971")) {
            {}
          } else {
            stryCov_9fa48("1971");
            return;
          }
        }
        const opts = {};
        if (stryMutAct_9fa48("1973") ? false : stryMutAct_9fa48("1972") ? true : (stryCov_9fa48("1972", "1973"), ttl)) {
          if (stryMutAct_9fa48("1974")) {
            {}
          } else {
            stryCov_9fa48("1974");
            opts.ttl = ttl;
          }
        }
        cacheSet.apply(lruCache, stryMutAct_9fa48("1975") ? [] : (stryCov_9fa48("1975"), [key, value, opts]));
      }
    };
    cache.get = function (key) {
      if (stryMutAct_9fa48("1976")) {
        {}
      } else {
        stryCov_9fa48("1976");
        if (stryMutAct_9fa48("1979") ? false : stryMutAct_9fa48("1978") ? true : stryMutAct_9fa48("1977") ? cache.enabled : (stryCov_9fa48("1977", "1978", "1979"), !cache.enabled)) {
          if (stryMutAct_9fa48("1980")) {
            {}
          } else {
            stryCov_9fa48("1980");
            return undefined;
          }
        }
        const data = lruCache.get(key);
        if (stryMutAct_9fa48("1983") ? data !== undefined : stryMutAct_9fa48("1982") ? false : stryMutAct_9fa48("1981") ? true : (stryCov_9fa48("1981", "1982", "1983"), data === undefined)) {
          if (stryMutAct_9fa48("1984")) {
            {}
          } else {
            stryCov_9fa48("1984");
            stryMutAct_9fa48("1985") ? cache.misses -= 1 : (stryCov_9fa48("1985"), cache.misses += 1);
          }
        } else {
          if (stryMutAct_9fa48("1986")) {
            {}
          } else {
            stryCov_9fa48("1986");
            stryMutAct_9fa48("1987") ? cache.hits -= 1 : (stryCov_9fa48("1987"), cache.hits += 1);
          }
        }
        return data;
      }
    };
    cache.del = function (keys) {
      if (stryMutAct_9fa48("1988")) {
        {}
      } else {
        stryCov_9fa48("1988");
        if (stryMutAct_9fa48("1991") ? false : stryMutAct_9fa48("1990") ? true : stryMutAct_9fa48("1989") ? Array.isArray(keys) : (stryCov_9fa48("1989", "1990", "1991"), !Array.isArray(keys))) {
          if (stryMutAct_9fa48("1992")) {
            {}
          } else {
            stryCov_9fa48("1992");
            keys = stryMutAct_9fa48("1993") ? [] : (stryCov_9fa48("1993"), [keys]);
          }
        }
        pubsub.publish(stryMutAct_9fa48("1994") ? `` : (stryCov_9fa48("1994"), `${cache.name}:lruCache:del`), keys);
        keys.forEach(stryMutAct_9fa48("1995") ? () => undefined : (stryCov_9fa48("1995"), key => lruCache.delete(key)));
      }
    };
    cache.delete = cache.del;
    cache.reset = function () {
      if (stryMutAct_9fa48("1996")) {
        {}
      } else {
        stryCov_9fa48("1996");
        pubsub.publish(stryMutAct_9fa48("1997") ? `` : (stryCov_9fa48("1997"), `${cache.name}:lruCache:reset`));
        localReset();
      }
    };
    cache.clear = cache.reset;
    function localReset() {
      if (stryMutAct_9fa48("1998")) {
        {}
      } else {
        stryCov_9fa48("1998");
        lruCache.clear();
        cache.hits = 0;
        cache.misses = 0;
      }
    }
    pubsub.on(stryMutAct_9fa48("1999") ? `` : (stryCov_9fa48("1999"), `${cache.name}:lruCache:reset`), () => {
      if (stryMutAct_9fa48("2000")) {
        {}
      } else {
        stryCov_9fa48("2000");
        localReset();
      }
    });
    pubsub.on(stryMutAct_9fa48("2001") ? `` : (stryCov_9fa48("2001"), `${cache.name}:lruCache:del`), keys => {
      if (stryMutAct_9fa48("2002")) {
        {}
      } else {
        stryCov_9fa48("2002");
        if (stryMutAct_9fa48("2004") ? false : stryMutAct_9fa48("2003") ? true : (stryCov_9fa48("2003", "2004"), Array.isArray(keys))) {
          if (stryMutAct_9fa48("2005")) {
            {}
          } else {
            stryCov_9fa48("2005");
            keys.forEach(stryMutAct_9fa48("2006") ? () => undefined : (stryCov_9fa48("2006"), key => lruCache.delete(key)));
          }
        }
      }
    });
    cache.getUnCachedKeys = function (keys, cachedData) {
      if (stryMutAct_9fa48("2007")) {
        {}
      } else {
        stryCov_9fa48("2007");
        if (stryMutAct_9fa48("2010") ? false : stryMutAct_9fa48("2009") ? true : stryMutAct_9fa48("2008") ? cache.enabled : (stryCov_9fa48("2008", "2009", "2010"), !cache.enabled)) {
          if (stryMutAct_9fa48("2011")) {
            {}
          } else {
            stryCov_9fa48("2011");
            return keys;
          }
        }
        let data;
        let isCached;
        const unCachedKeys = stryMutAct_9fa48("2012") ? keys : (stryCov_9fa48("2012"), keys.filter(key => {
          if (stryMutAct_9fa48("2013")) {
            {}
          } else {
            stryCov_9fa48("2013");
            data = cache.get(key);
            isCached = stryMutAct_9fa48("2016") ? data === undefined : stryMutAct_9fa48("2015") ? false : stryMutAct_9fa48("2014") ? true : (stryCov_9fa48("2014", "2015", "2016"), data !== undefined);
            if (stryMutAct_9fa48("2018") ? false : stryMutAct_9fa48("2017") ? true : (stryCov_9fa48("2017", "2018"), isCached)) {
              if (stryMutAct_9fa48("2019")) {
                {}
              } else {
                stryCov_9fa48("2019");
                cachedData[key] = data;
              }
            }
            return stryMutAct_9fa48("2020") ? isCached : (stryCov_9fa48("2020"), !isCached);
          }
        }));
        const hits = stryMutAct_9fa48("2021") ? keys.length + unCachedKeys.length : (stryCov_9fa48("2021"), keys.length - unCachedKeys.length);
        const misses = stryMutAct_9fa48("2022") ? keys.length + hits : (stryCov_9fa48("2022"), keys.length - hits);
        stryMutAct_9fa48("2023") ? cache.hits -= hits : (stryCov_9fa48("2023"), cache.hits += hits);
        stryMutAct_9fa48("2024") ? cache.misses -= misses : (stryCov_9fa48("2024"), cache.misses += misses);
        return unCachedKeys;
      }
    };
    cache.dump = function () {
      if (stryMutAct_9fa48("2025")) {
        {}
      } else {
        stryCov_9fa48("2025");
        return lruCache.dump();
      }
    };
    cache.peek = function (key) {
      if (stryMutAct_9fa48("2026")) {
        {}
      } else {
        stryCov_9fa48("2026");
        return lruCache.peek(key);
      }
    };
    return cache;
  }
};