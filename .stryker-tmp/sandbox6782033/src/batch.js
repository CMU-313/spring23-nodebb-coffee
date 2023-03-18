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
const util = require('util');
const db = require('./database');
const utils = require('./utils');
const DEFAULT_BATCH_SIZE = 100;
const sleep = util.promisify(setTimeout);
exports.processSortedSet = async function (setKey, process, options) {
  if (stryMutAct_9fa48("1810")) {
    {}
  } else {
    stryCov_9fa48("1810");
    options = stryMutAct_9fa48("1813") ? options && {} : stryMutAct_9fa48("1812") ? false : stryMutAct_9fa48("1811") ? true : (stryCov_9fa48("1811", "1812", "1813"), options || {});
    if (stryMutAct_9fa48("1816") ? typeof process === 'function' : stryMutAct_9fa48("1815") ? false : stryMutAct_9fa48("1814") ? true : (stryCov_9fa48("1814", "1815", "1816"), typeof process !== (stryMutAct_9fa48("1817") ? "" : (stryCov_9fa48("1817"), 'function')))) {
      if (stryMutAct_9fa48("1818")) {
        {}
      } else {
        stryCov_9fa48("1818");
        throw new Error(stryMutAct_9fa48("1819") ? "" : (stryCov_9fa48("1819"), '[[error:process-not-a-function]]'));
      }
    }

    // Progress bar handling (upgrade scripts)
    if (stryMutAct_9fa48("1821") ? false : stryMutAct_9fa48("1820") ? true : (stryCov_9fa48("1820", "1821"), options.progress)) {
      if (stryMutAct_9fa48("1822")) {
        {}
      } else {
        stryCov_9fa48("1822");
        options.progress.total = await db.sortedSetCard(setKey);
      }
    }
    options.batch = stryMutAct_9fa48("1825") ? options.batch && DEFAULT_BATCH_SIZE : stryMutAct_9fa48("1824") ? false : stryMutAct_9fa48("1823") ? true : (stryCov_9fa48("1823", "1824", "1825"), options.batch || DEFAULT_BATCH_SIZE);

    // use the fast path if possible
    if (stryMutAct_9fa48("1828") ? db.processSortedSet && typeof options.doneIf !== 'function' || !utils.isNumber(options.alwaysStartAt) : stryMutAct_9fa48("1827") ? false : stryMutAct_9fa48("1826") ? true : (stryCov_9fa48("1826", "1827", "1828"), (stryMutAct_9fa48("1830") ? db.processSortedSet || typeof options.doneIf !== 'function' : stryMutAct_9fa48("1829") ? true : (stryCov_9fa48("1829", "1830"), db.processSortedSet && (stryMutAct_9fa48("1832") ? typeof options.doneIf === 'function' : stryMutAct_9fa48("1831") ? true : (stryCov_9fa48("1831", "1832"), typeof options.doneIf !== (stryMutAct_9fa48("1833") ? "" : (stryCov_9fa48("1833"), 'function')))))) && (stryMutAct_9fa48("1834") ? utils.isNumber(options.alwaysStartAt) : (stryCov_9fa48("1834"), !utils.isNumber(options.alwaysStartAt))))) {
      if (stryMutAct_9fa48("1835")) {
        {}
      } else {
        stryCov_9fa48("1835");
        return await db.processSortedSet(setKey, process, options);
      }
    }

    // custom done condition
    options.doneIf = (stryMutAct_9fa48("1838") ? typeof options.doneIf !== 'function' : stryMutAct_9fa48("1837") ? false : stryMutAct_9fa48("1836") ? true : (stryCov_9fa48("1836", "1837", "1838"), typeof options.doneIf === (stryMutAct_9fa48("1839") ? "" : (stryCov_9fa48("1839"), 'function')))) ? options.doneIf : function () {};
    let start = 0;
    let stop = stryMutAct_9fa48("1840") ? options.batch + 1 : (stryCov_9fa48("1840"), options.batch - 1);
    if (stryMutAct_9fa48("1843") ? process && process.constructor || process.constructor.name !== 'AsyncFunction' : stryMutAct_9fa48("1842") ? false : stryMutAct_9fa48("1841") ? true : (stryCov_9fa48("1841", "1842", "1843"), (stryMutAct_9fa48("1845") ? process || process.constructor : stryMutAct_9fa48("1844") ? true : (stryCov_9fa48("1844", "1845"), process && process.constructor)) && (stryMutAct_9fa48("1847") ? process.constructor.name === 'AsyncFunction' : stryMutAct_9fa48("1846") ? true : (stryCov_9fa48("1846", "1847"), process.constructor.name !== (stryMutAct_9fa48("1848") ? "" : (stryCov_9fa48("1848"), 'AsyncFunction')))))) {
      if (stryMutAct_9fa48("1849")) {
        {}
      } else {
        stryCov_9fa48("1849");
        process = util.promisify(process);
      }
    }
    while (stryMutAct_9fa48("1851") ? false : stryMutAct_9fa48("1850") ? false : (stryCov_9fa48("1850", "1851"), true)) {
      if (stryMutAct_9fa48("1852")) {
        {}
      } else {
        stryCov_9fa48("1852");
        /* eslint-disable no-await-in-loop */
        const ids = await db[stryMutAct_9fa48("1853") ? `` : (stryCov_9fa48("1853"), `getSortedSetRange${options.withScores ? stryMutAct_9fa48("1854") ? "" : (stryCov_9fa48("1854"), 'WithScores') : stryMutAct_9fa48("1855") ? "Stryker was here!" : (stryCov_9fa48("1855"), '')}`)](setKey, start, stop);
        if (stryMutAct_9fa48("1858") ? !ids.length && options.doneIf(start, stop, ids) : stryMutAct_9fa48("1857") ? false : stryMutAct_9fa48("1856") ? true : (stryCov_9fa48("1856", "1857", "1858"), (stryMutAct_9fa48("1859") ? ids.length : (stryCov_9fa48("1859"), !ids.length)) || options.doneIf(start, stop, ids))) {
          if (stryMutAct_9fa48("1860")) {
            {}
          } else {
            stryCov_9fa48("1860");
            return;
          }
        }
        await process(ids);
        stryMutAct_9fa48("1861") ? start -= utils.isNumber(options.alwaysStartAt) ? options.alwaysStartAt : options.batch : (stryCov_9fa48("1861"), start += utils.isNumber(options.alwaysStartAt) ? options.alwaysStartAt : options.batch);
        stop = stryMutAct_9fa48("1862") ? start + options.batch + 1 : (stryCov_9fa48("1862"), (stryMutAct_9fa48("1863") ? start - options.batch : (stryCov_9fa48("1863"), start + options.batch)) - 1);
        if (stryMutAct_9fa48("1865") ? false : stryMutAct_9fa48("1864") ? true : (stryCov_9fa48("1864", "1865"), options.interval)) {
          if (stryMutAct_9fa48("1866")) {
            {}
          } else {
            stryCov_9fa48("1866");
            await sleep(options.interval);
          }
        }
      }
    }
  }
};
exports.processArray = async function (array, process, options) {
  if (stryMutAct_9fa48("1867")) {
    {}
  } else {
    stryCov_9fa48("1867");
    options = stryMutAct_9fa48("1870") ? options && {} : stryMutAct_9fa48("1869") ? false : stryMutAct_9fa48("1868") ? true : (stryCov_9fa48("1868", "1869", "1870"), options || {});
    if (stryMutAct_9fa48("1873") ? !Array.isArray(array) && !array.length : stryMutAct_9fa48("1872") ? false : stryMutAct_9fa48("1871") ? true : (stryCov_9fa48("1871", "1872", "1873"), (stryMutAct_9fa48("1874") ? Array.isArray(array) : (stryCov_9fa48("1874"), !Array.isArray(array))) || (stryMutAct_9fa48("1875") ? array.length : (stryCov_9fa48("1875"), !array.length)))) {
      if (stryMutAct_9fa48("1876")) {
        {}
      } else {
        stryCov_9fa48("1876");
        return;
      }
    }
    if (stryMutAct_9fa48("1879") ? typeof process === 'function' : stryMutAct_9fa48("1878") ? false : stryMutAct_9fa48("1877") ? true : (stryCov_9fa48("1877", "1878", "1879"), typeof process !== (stryMutAct_9fa48("1880") ? "" : (stryCov_9fa48("1880"), 'function')))) {
      if (stryMutAct_9fa48("1881")) {
        {}
      } else {
        stryCov_9fa48("1881");
        throw new Error(stryMutAct_9fa48("1882") ? "" : (stryCov_9fa48("1882"), '[[error:process-not-a-function]]'));
      }
    }
    const batch = stryMutAct_9fa48("1885") ? options.batch && DEFAULT_BATCH_SIZE : stryMutAct_9fa48("1884") ? false : stryMutAct_9fa48("1883") ? true : (stryCov_9fa48("1883", "1884", "1885"), options.batch || DEFAULT_BATCH_SIZE);
    let start = 0;
    if (stryMutAct_9fa48("1888") ? process && process.constructor || process.constructor.name !== 'AsyncFunction' : stryMutAct_9fa48("1887") ? false : stryMutAct_9fa48("1886") ? true : (stryCov_9fa48("1886", "1887", "1888"), (stryMutAct_9fa48("1890") ? process || process.constructor : stryMutAct_9fa48("1889") ? true : (stryCov_9fa48("1889", "1890"), process && process.constructor)) && (stryMutAct_9fa48("1892") ? process.constructor.name === 'AsyncFunction' : stryMutAct_9fa48("1891") ? true : (stryCov_9fa48("1891", "1892"), process.constructor.name !== (stryMutAct_9fa48("1893") ? "" : (stryCov_9fa48("1893"), 'AsyncFunction')))))) {
      if (stryMutAct_9fa48("1894")) {
        {}
      } else {
        stryCov_9fa48("1894");
        process = util.promisify(process);
      }
    }
    while (stryMutAct_9fa48("1896") ? false : stryMutAct_9fa48("1895") ? false : (stryCov_9fa48("1895", "1896"), true)) {
      if (stryMutAct_9fa48("1897")) {
        {}
      } else {
        stryCov_9fa48("1897");
        const currentBatch = stryMutAct_9fa48("1898") ? array : (stryCov_9fa48("1898"), array.slice(start, stryMutAct_9fa48("1899") ? start - batch : (stryCov_9fa48("1899"), start + batch)));
        if (stryMutAct_9fa48("1902") ? false : stryMutAct_9fa48("1901") ? true : stryMutAct_9fa48("1900") ? currentBatch.length : (stryCov_9fa48("1900", "1901", "1902"), !currentBatch.length)) {
          if (stryMutAct_9fa48("1903")) {
            {}
          } else {
            stryCov_9fa48("1903");
            return;
          }
        }
        await process(currentBatch);
        stryMutAct_9fa48("1904") ? start -= batch : (stryCov_9fa48("1904"), start += batch);
        if (stryMutAct_9fa48("1906") ? false : stryMutAct_9fa48("1905") ? true : (stryCov_9fa48("1905", "1906"), options.interval)) {
          if (stryMutAct_9fa48("1907")) {
            {}
          } else {
            stryCov_9fa48("1907");
            await sleep(options.interval);
          }
        }
      }
    }
  }
};
require('./promisify')(exports);