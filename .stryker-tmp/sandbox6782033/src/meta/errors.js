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
const winston = require('winston');
const validator = require('validator');
const cronJob = require('cron').CronJob;
const db = require('../database');
const analytics = require('../analytics');
const Errors = module.exports;
let counters = {};
new cronJob(stryMutAct_9fa48("24105") ? "" : (stryCov_9fa48("24105"), '0 * * * * *'), () => {
  if (stryMutAct_9fa48("24106")) {
    {}
  } else {
    stryCov_9fa48("24106");
    Errors.writeData();
  }
}, null, stryMutAct_9fa48("24107") ? false : (stryCov_9fa48("24107"), true));
Errors.writeData = async function () {
  if (stryMutAct_9fa48("24108")) {
    {}
  } else {
    stryCov_9fa48("24108");
    try {
      if (stryMutAct_9fa48("24109")) {
        {}
      } else {
        stryCov_9fa48("24109");
        const _counters = stryMutAct_9fa48("24110") ? {} : (stryCov_9fa48("24110"), {
          ...counters
        });
        counters = {};
        const keys = Object.keys(_counters);
        if (stryMutAct_9fa48("24113") ? false : stryMutAct_9fa48("24112") ? true : stryMutAct_9fa48("24111") ? keys.length : (stryCov_9fa48("24111", "24112", "24113"), !keys.length)) {
          if (stryMutAct_9fa48("24114")) {
            {}
          } else {
            stryCov_9fa48("24114");
            return;
          }
        }
        for (const key of keys) {
          if (stryMutAct_9fa48("24115")) {
            {}
          } else {
            stryCov_9fa48("24115");
            /* eslint-disable no-await-in-loop */
            await db.sortedSetIncrBy(stryMutAct_9fa48("24116") ? "" : (stryCov_9fa48("24116"), 'errors:404'), _counters[key], key);
          }
        }
      }
    } catch (err) {
      if (stryMutAct_9fa48("24117")) {
        {}
      } else {
        stryCov_9fa48("24117");
        winston.error(err.stack);
      }
    }
  }
};
Errors.log404 = function (route) {
  if (stryMutAct_9fa48("24118")) {
    {}
  } else {
    stryCov_9fa48("24118");
    if (stryMutAct_9fa48("24121") ? false : stryMutAct_9fa48("24120") ? true : stryMutAct_9fa48("24119") ? route : (stryCov_9fa48("24119", "24120", "24121"), !route)) {
      if (stryMutAct_9fa48("24122")) {
        {}
      } else {
        stryCov_9fa48("24122");
        return;
      }
    }
    route = stryMutAct_9fa48("24123") ? route.replace(/\/$/, '') : (stryCov_9fa48("24123"), route.slice(0, 512).replace(stryMutAct_9fa48("24124") ? /\// : (stryCov_9fa48("24124"), /\/$/), stryMutAct_9fa48("24125") ? "Stryker was here!" : (stryCov_9fa48("24125"), ''))); // remove trailing slashes
    analytics.increment(stryMutAct_9fa48("24126") ? "" : (stryCov_9fa48("24126"), 'errors:404'));
    counters[route] = stryMutAct_9fa48("24129") ? counters[route] && 0 : stryMutAct_9fa48("24128") ? false : stryMutAct_9fa48("24127") ? true : (stryCov_9fa48("24127", "24128", "24129"), counters[route] || 0);
    stryMutAct_9fa48("24130") ? counters[route] -= 1 : (stryCov_9fa48("24130"), counters[route] += 1);
  }
};
Errors.get = async function (escape) {
  if (stryMutAct_9fa48("24131")) {
    {}
  } else {
    stryCov_9fa48("24131");
    const data = await db.getSortedSetRevRangeWithScores(stryMutAct_9fa48("24132") ? "" : (stryCov_9fa48("24132"), 'errors:404'), 0, 199);
    data.forEach(nfObject => {
      if (stryMutAct_9fa48("24133")) {
        {}
      } else {
        stryCov_9fa48("24133");
        nfObject.value = escape ? validator.escape(String(stryMutAct_9fa48("24136") ? nfObject.value && '' : stryMutAct_9fa48("24135") ? false : stryMutAct_9fa48("24134") ? true : (stryCov_9fa48("24134", "24135", "24136"), nfObject.value || (stryMutAct_9fa48("24137") ? "Stryker was here!" : (stryCov_9fa48("24137"), ''))))) : nfObject.value;
      }
    });
    return data;
  }
};
Errors.clear = async function () {
  if (stryMutAct_9fa48("24138")) {
    {}
  } else {
    stryCov_9fa48("24138");
    await db.delete(stryMutAct_9fa48("24139") ? "" : (stryCov_9fa48("24139"), 'errors:404'));
  }
};