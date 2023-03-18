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
const cacheController = module.exports;
const utils = require('../../utils');
const plugins = require('../../plugins');
cacheController.get = async function (req, res) {
  if (stryMutAct_9fa48("6613")) {
    {}
  } else {
    stryCov_9fa48("6613");
    const postCache = require('../../posts/cache');
    const groupCache = require('../../groups').cache;
    const {
      objectCache
    } = require('../../database');
    const localCache = require('../../cache');
    function getInfo(cache) {
      if (stryMutAct_9fa48("6614")) {
        {}
      } else {
        stryCov_9fa48("6614");
        return stryMutAct_9fa48("6615") ? {} : (stryCov_9fa48("6615"), {
          length: cache.length,
          max: cache.max,
          maxSize: cache.maxSize,
          itemCount: cache.itemCount,
          percentFull: (stryMutAct_9fa48("6618") ? cache.name !== 'post' : stryMutAct_9fa48("6617") ? false : stryMutAct_9fa48("6616") ? true : (stryCov_9fa48("6616", "6617", "6618"), cache.name === (stryMutAct_9fa48("6619") ? "" : (stryCov_9fa48("6619"), 'post')))) ? (stryMutAct_9fa48("6620") ? cache.length / cache.maxSize / 100 : (stryCov_9fa48("6620"), (stryMutAct_9fa48("6621") ? cache.length * cache.maxSize : (stryCov_9fa48("6621"), cache.length / cache.maxSize)) * 100)).toFixed(2) : (stryMutAct_9fa48("6622") ? cache.itemCount / cache.max / 100 : (stryCov_9fa48("6622"), (stryMutAct_9fa48("6623") ? cache.itemCount * cache.max : (stryCov_9fa48("6623"), cache.itemCount / cache.max)) * 100)).toFixed(2),
          hits: utils.addCommas(String(cache.hits)),
          misses: utils.addCommas(String(cache.misses)),
          hitRatio: (stryMutAct_9fa48("6626") ? cache.hits / (cache.hits + cache.misses) && 0 : stryMutAct_9fa48("6625") ? false : stryMutAct_9fa48("6624") ? true : (stryCov_9fa48("6624", "6625", "6626"), (stryMutAct_9fa48("6627") ? cache.hits * (cache.hits + cache.misses) : (stryCov_9fa48("6627"), cache.hits / (stryMutAct_9fa48("6628") ? cache.hits - cache.misses : (stryCov_9fa48("6628"), cache.hits + cache.misses)))) || 0)).toFixed(4),
          enabled: cache.enabled,
          ttl: cache.ttl
        });
      }
    }
    let caches = stryMutAct_9fa48("6629") ? {} : (stryCov_9fa48("6629"), {
      post: postCache,
      group: groupCache,
      local: localCache
    });
    if (stryMutAct_9fa48("6631") ? false : stryMutAct_9fa48("6630") ? true : (stryCov_9fa48("6630", "6631"), objectCache)) {
      if (stryMutAct_9fa48("6632")) {
        {}
      } else {
        stryCov_9fa48("6632");
        caches.object = objectCache;
      }
    }
    caches = await plugins.hooks.fire(stryMutAct_9fa48("6633") ? "" : (stryCov_9fa48("6633"), 'filter:admin.cache.get'), caches);
    for (const [key, value] of Object.entries(caches)) {
      if (stryMutAct_9fa48("6634")) {
        {}
      } else {
        stryCov_9fa48("6634");
        caches[key] = getInfo(value);
      }
    }
    res.render(stryMutAct_9fa48("6635") ? "" : (stryCov_9fa48("6635"), 'admin/advanced/cache'), stryMutAct_9fa48("6636") ? {} : (stryCov_9fa48("6636"), {
      caches
    }));
  }
};
cacheController.dump = async function (req, res, next) {
  if (stryMutAct_9fa48("6637")) {
    {}
  } else {
    stryCov_9fa48("6637");
    let caches = stryMutAct_9fa48("6638") ? {} : (stryCov_9fa48("6638"), {
      post: require('../../posts/cache'),
      object: require('../../database').objectCache,
      group: require('../../groups').cache,
      local: require('../../cache')
    });
    caches = await plugins.hooks.fire(stryMutAct_9fa48("6639") ? "" : (stryCov_9fa48("6639"), 'filter:admin.cache.get'), caches);
    if (stryMutAct_9fa48("6642") ? false : stryMutAct_9fa48("6641") ? true : stryMutAct_9fa48("6640") ? caches[req.query.name] : (stryCov_9fa48("6640", "6641", "6642"), !caches[req.query.name])) {
      if (stryMutAct_9fa48("6643")) {
        {}
      } else {
        stryCov_9fa48("6643");
        return next();
      }
    }
    const data = JSON.stringify(caches[req.query.name].dump(), null, 4);
    res.setHeader(stryMutAct_9fa48("6644") ? "" : (stryCov_9fa48("6644"), 'Content-disposition'), stryMutAct_9fa48("6645") ? `` : (stryCov_9fa48("6645"), `attachment; filename= ${req.query.name}-cache.json`));
    res.setHeader(stryMutAct_9fa48("6646") ? "" : (stryCov_9fa48("6646"), 'Content-type'), stryMutAct_9fa48("6647") ? "" : (stryCov_9fa48("6647"), 'application/json'));
    res.write(data, err => {
      if (stryMutAct_9fa48("6648")) {
        {}
      } else {
        stryCov_9fa48("6648");
        if (stryMutAct_9fa48("6650") ? false : stryMutAct_9fa48("6649") ? true : (stryCov_9fa48("6649", "6650"), err)) {
          if (stryMutAct_9fa48("6651")) {
            {}
          } else {
            stryCov_9fa48("6651");
            return next(err);
          }
        }
        res.end();
      }
    });
  }
};