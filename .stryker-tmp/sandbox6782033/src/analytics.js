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
const cronJob = require('cron').CronJob;
const winston = require('winston');
const nconf = require('nconf');
const crypto = require('crypto');
const util = require('util');
const _ = require('lodash');
const sleep = util.promisify(setTimeout);
const db = require('./database');
const utils = require('./utils');
const plugins = require('./plugins');
const meta = require('./meta');
const pubsub = require('./pubsub');
const cacheCreate = require('./cache/lru');
const Analytics = module.exports;
const secret = nconf.get(stryMutAct_9fa48("147") ? "" : (stryCov_9fa48("147"), 'secret'));
let local = stryMutAct_9fa48("148") ? {} : (stryCov_9fa48("148"), {
  counters: {},
  pageViews: 0,
  pageViewsRegistered: 0,
  pageViewsGuest: 0,
  pageViewsBot: 0,
  uniqueIPCount: 0,
  uniquevisitors: 0
});
const empty = _.cloneDeep(local);
const total = _.cloneDeep(local);
let ipCache;
const runJobs = nconf.get(stryMutAct_9fa48("149") ? "" : (stryCov_9fa48("149"), 'runJobs'));
Analytics.init = async function () {
  if (stryMutAct_9fa48("150")) {
    {}
  } else {
    stryCov_9fa48("150");
    ipCache = cacheCreate(stryMutAct_9fa48("151") ? {} : (stryCov_9fa48("151"), {
      max: stryMutAct_9fa48("154") ? parseInt(meta.config['analytics:maxCache'], 10) && 500 : stryMutAct_9fa48("153") ? false : stryMutAct_9fa48("152") ? true : (stryCov_9fa48("152", "153", "154"), parseInt(meta.config[stryMutAct_9fa48("155") ? "" : (stryCov_9fa48("155"), 'analytics:maxCache')], 10) || 500),
      ttl: 0
    }));
    new cronJob(stryMutAct_9fa48("156") ? "" : (stryCov_9fa48("156"), '*/10 * * * * *'), async () => {
      if (stryMutAct_9fa48("157")) {
        {}
      } else {
        stryCov_9fa48("157");
        publishLocalAnalytics();
        if (stryMutAct_9fa48("159") ? false : stryMutAct_9fa48("158") ? true : (stryCov_9fa48("158", "159"), runJobs)) {
          if (stryMutAct_9fa48("160")) {
            {}
          } else {
            stryCov_9fa48("160");
            await sleep(2000);
            await Analytics.writeData();
          }
        }
      }
    }, null, stryMutAct_9fa48("161") ? false : (stryCov_9fa48("161"), true));
    if (stryMutAct_9fa48("163") ? false : stryMutAct_9fa48("162") ? true : (stryCov_9fa48("162", "163"), runJobs)) {
      if (stryMutAct_9fa48("164")) {
        {}
      } else {
        stryCov_9fa48("164");
        pubsub.on(stryMutAct_9fa48("165") ? "" : (stryCov_9fa48("165"), 'analytics:publish'), data => {
          if (stryMutAct_9fa48("166")) {
            {}
          } else {
            stryCov_9fa48("166");
            incrementProperties(total, data.local);
          }
        });
      }
    }
  }
};
function publishLocalAnalytics() {
  if (stryMutAct_9fa48("167")) {
    {}
  } else {
    stryCov_9fa48("167");
    pubsub.publish(stryMutAct_9fa48("168") ? "" : (stryCov_9fa48("168"), 'analytics:publish'), stryMutAct_9fa48("169") ? {} : (stryCov_9fa48("169"), {
      local: local
    }));
    local = _.cloneDeep(empty);
  }
}
function incrementProperties(obj1, obj2) {
  if (stryMutAct_9fa48("170")) {
    {}
  } else {
    stryCov_9fa48("170");
    for (const [key, value] of Object.entries(obj2)) {
      if (stryMutAct_9fa48("171")) {
        {}
      } else {
        stryCov_9fa48("171");
        if (stryMutAct_9fa48("174") ? typeof value !== 'object' : stryMutAct_9fa48("173") ? false : stryMutAct_9fa48("172") ? true : (stryCov_9fa48("172", "173", "174"), typeof value === (stryMutAct_9fa48("175") ? "" : (stryCov_9fa48("175"), 'object')))) {
          if (stryMutAct_9fa48("176")) {
            {}
          } else {
            stryCov_9fa48("176");
            incrementProperties(obj1[key], value);
          }
        } else if (stryMutAct_9fa48("178") ? false : stryMutAct_9fa48("177") ? true : (stryCov_9fa48("177", "178"), utils.isNumber(value))) {
          if (stryMutAct_9fa48("179")) {
            {}
          } else {
            stryCov_9fa48("179");
            obj1[key] = stryMutAct_9fa48("182") ? obj1[key] && 0 : stryMutAct_9fa48("181") ? false : stryMutAct_9fa48("180") ? true : (stryCov_9fa48("180", "181", "182"), obj1[key] || 0);
            stryMutAct_9fa48("183") ? obj1[key] -= obj2[key] : (stryCov_9fa48("183"), obj1[key] += obj2[key]);
          }
        }
      }
    }
  }
}
Analytics.increment = function (keys, callback) {
  if (stryMutAct_9fa48("184")) {
    {}
  } else {
    stryCov_9fa48("184");
    keys = Array.isArray(keys) ? keys : stryMutAct_9fa48("185") ? [] : (stryCov_9fa48("185"), [keys]);
    plugins.hooks.fire(stryMutAct_9fa48("186") ? "" : (stryCov_9fa48("186"), 'action:analytics.increment'), stryMutAct_9fa48("187") ? {} : (stryCov_9fa48("187"), {
      keys: keys
    }));
    keys.forEach(key => {
      if (stryMutAct_9fa48("188")) {
        {}
      } else {
        stryCov_9fa48("188");
        local.counters[key] = stryMutAct_9fa48("191") ? local.counters[key] && 0 : stryMutAct_9fa48("190") ? false : stryMutAct_9fa48("189") ? true : (stryCov_9fa48("189", "190", "191"), local.counters[key] || 0);
        stryMutAct_9fa48("192") ? local.counters[key] -= 1 : (stryCov_9fa48("192"), local.counters[key] += 1);
      }
    });
    if (stryMutAct_9fa48("195") ? typeof callback !== 'function' : stryMutAct_9fa48("194") ? false : stryMutAct_9fa48("193") ? true : (stryCov_9fa48("193", "194", "195"), typeof callback === (stryMutAct_9fa48("196") ? "" : (stryCov_9fa48("196"), 'function')))) {
      if (stryMutAct_9fa48("197")) {
        {}
      } else {
        stryCov_9fa48("197");
        callback();
      }
    }
  }
};
Analytics.getKeys = stryMutAct_9fa48("198") ? () => undefined : (stryCov_9fa48("198"), async () => db.getSortedSetRange(stryMutAct_9fa48("199") ? "" : (stryCov_9fa48("199"), 'analyticsKeys'), 0, stryMutAct_9fa48("200") ? +1 : (stryCov_9fa48("200"), -1)));
Analytics.pageView = async function (payload) {
  if (stryMutAct_9fa48("201")) {
    {}
  } else {
    stryCov_9fa48("201");
    stryMutAct_9fa48("202") ? local.pageViews -= 1 : (stryCov_9fa48("202"), local.pageViews += 1);
    if (stryMutAct_9fa48("206") ? payload.uid <= 0 : stryMutAct_9fa48("205") ? payload.uid >= 0 : stryMutAct_9fa48("204") ? false : stryMutAct_9fa48("203") ? true : (stryCov_9fa48("203", "204", "205", "206"), payload.uid > 0)) {
      if (stryMutAct_9fa48("207")) {
        {}
      } else {
        stryCov_9fa48("207");
        stryMutAct_9fa48("208") ? local.pageViewsRegistered -= 1 : (stryCov_9fa48("208"), local.pageViewsRegistered += 1);
      }
    } else if (stryMutAct_9fa48("212") ? payload.uid >= 0 : stryMutAct_9fa48("211") ? payload.uid <= 0 : stryMutAct_9fa48("210") ? false : stryMutAct_9fa48("209") ? true : (stryCov_9fa48("209", "210", "211", "212"), payload.uid < 0)) {
      if (stryMutAct_9fa48("213")) {
        {}
      } else {
        stryCov_9fa48("213");
        stryMutAct_9fa48("214") ? local.pageViewsBot -= 1 : (stryCov_9fa48("214"), local.pageViewsBot += 1);
      }
    } else {
      if (stryMutAct_9fa48("215")) {
        {}
      } else {
        stryCov_9fa48("215");
        stryMutAct_9fa48("216") ? local.pageViewsGuest -= 1 : (stryCov_9fa48("216"), local.pageViewsGuest += 1);
      }
    }
    if (stryMutAct_9fa48("218") ? false : stryMutAct_9fa48("217") ? true : (stryCov_9fa48("217", "218"), payload.ip)) {
      if (stryMutAct_9fa48("219")) {
        {}
      } else {
        stryCov_9fa48("219");
        // Retrieve hash or calculate if not present
        let hash = ipCache.get(stryMutAct_9fa48("220") ? payload.ip - secret : (stryCov_9fa48("220"), payload.ip + secret));
        if (stryMutAct_9fa48("223") ? false : stryMutAct_9fa48("222") ? true : stryMutAct_9fa48("221") ? hash : (stryCov_9fa48("221", "222", "223"), !hash)) {
          if (stryMutAct_9fa48("224")) {
            {}
          } else {
            stryCov_9fa48("224");
            hash = crypto.createHash(stryMutAct_9fa48("225") ? "" : (stryCov_9fa48("225"), 'sha1')).update(stryMutAct_9fa48("226") ? payload.ip - secret : (stryCov_9fa48("226"), payload.ip + secret)).digest(stryMutAct_9fa48("227") ? "" : (stryCov_9fa48("227"), 'hex'));
            ipCache.set(stryMutAct_9fa48("228") ? payload.ip - secret : (stryCov_9fa48("228"), payload.ip + secret), hash);
          }
        }
        const score = await db.sortedSetScore(stryMutAct_9fa48("229") ? "" : (stryCov_9fa48("229"), 'ip:recent'), hash);
        if (stryMutAct_9fa48("232") ? false : stryMutAct_9fa48("231") ? true : stryMutAct_9fa48("230") ? score : (stryCov_9fa48("230", "231", "232"), !score)) {
          if (stryMutAct_9fa48("233")) {
            {}
          } else {
            stryCov_9fa48("233");
            stryMutAct_9fa48("234") ? local.uniqueIPCount -= 1 : (stryCov_9fa48("234"), local.uniqueIPCount += 1);
          }
        }
        const today = new Date();
        today.setHours(today.getHours(), 0, 0, 0);
        if (stryMutAct_9fa48("237") ? !score && score < today.getTime() : stryMutAct_9fa48("236") ? false : stryMutAct_9fa48("235") ? true : (stryCov_9fa48("235", "236", "237"), (stryMutAct_9fa48("238") ? score : (stryCov_9fa48("238"), !score)) || (stryMutAct_9fa48("241") ? score >= today.getTime() : stryMutAct_9fa48("240") ? score <= today.getTime() : stryMutAct_9fa48("239") ? false : (stryCov_9fa48("239", "240", "241"), score < today.getTime())))) {
          if (stryMutAct_9fa48("242")) {
            {}
          } else {
            stryCov_9fa48("242");
            stryMutAct_9fa48("243") ? local.uniquevisitors -= 1 : (stryCov_9fa48("243"), local.uniquevisitors += 1);
            await db.sortedSetAdd(stryMutAct_9fa48("244") ? "" : (stryCov_9fa48("244"), 'ip:recent'), Date.now(), hash);
          }
        }
      }
    }
  }
};
Analytics.writeData = async function () {
  if (stryMutAct_9fa48("245")) {
    {}
  } else {
    stryCov_9fa48("245");
    const today = new Date();
    const month = new Date();
    const dbQueue = stryMutAct_9fa48("246") ? ["Stryker was here"] : (stryCov_9fa48("246"), []);
    const incrByBulk = stryMutAct_9fa48("247") ? ["Stryker was here"] : (stryCov_9fa48("247"), []);

    // Build list of metrics that were updated
    let metrics = stryMutAct_9fa48("248") ? [] : (stryCov_9fa48("248"), [stryMutAct_9fa48("249") ? "" : (stryCov_9fa48("249"), 'pageviews'), stryMutAct_9fa48("250") ? "" : (stryCov_9fa48("250"), 'pageviews:month')]);
    metrics.forEach(metric => {
      if (stryMutAct_9fa48("251")) {
        {}
      } else {
        stryCov_9fa48("251");
        const toAdd = (stryMutAct_9fa48("252") ? [] : (stryCov_9fa48("252"), [stryMutAct_9fa48("253") ? "" : (stryCov_9fa48("253"), 'registered'), stryMutAct_9fa48("254") ? "" : (stryCov_9fa48("254"), 'guest'), stryMutAct_9fa48("255") ? "" : (stryCov_9fa48("255"), 'bot')])).map(stryMutAct_9fa48("256") ? () => undefined : (stryCov_9fa48("256"), type => stryMutAct_9fa48("257") ? `` : (stryCov_9fa48("257"), `${metric}:${type}`)));
        metrics = stryMutAct_9fa48("258") ? [] : (stryCov_9fa48("258"), [...metrics, ...toAdd]);
      }
    });
    metrics.push(stryMutAct_9fa48("259") ? "" : (stryCov_9fa48("259"), 'uniquevisitors'));
    today.setHours(today.getHours(), 0, 0, 0);
    month.setMonth(month.getMonth(), 1);
    month.setHours(0, 0, 0, 0);
    if (stryMutAct_9fa48("263") ? total.pageViews <= 0 : stryMutAct_9fa48("262") ? total.pageViews >= 0 : stryMutAct_9fa48("261") ? false : stryMutAct_9fa48("260") ? true : (stryCov_9fa48("260", "261", "262", "263"), total.pageViews > 0)) {
      if (stryMutAct_9fa48("264")) {
        {}
      } else {
        stryCov_9fa48("264");
        incrByBulk.push(stryMutAct_9fa48("265") ? [] : (stryCov_9fa48("265"), [stryMutAct_9fa48("266") ? "" : (stryCov_9fa48("266"), 'analytics:pageviews'), total.pageViews, today.getTime()]));
        incrByBulk.push(stryMutAct_9fa48("267") ? [] : (stryCov_9fa48("267"), [stryMutAct_9fa48("268") ? "" : (stryCov_9fa48("268"), 'analytics:pageviews:month'), total.pageViews, month.getTime()]));
        total.pageViews = 0;
      }
    }
    if (stryMutAct_9fa48("272") ? total.pageViewsRegistered <= 0 : stryMutAct_9fa48("271") ? total.pageViewsRegistered >= 0 : stryMutAct_9fa48("270") ? false : stryMutAct_9fa48("269") ? true : (stryCov_9fa48("269", "270", "271", "272"), total.pageViewsRegistered > 0)) {
      if (stryMutAct_9fa48("273")) {
        {}
      } else {
        stryCov_9fa48("273");
        incrByBulk.push(stryMutAct_9fa48("274") ? [] : (stryCov_9fa48("274"), [stryMutAct_9fa48("275") ? "" : (stryCov_9fa48("275"), 'analytics:pageviews:registered'), total.pageViewsRegistered, today.getTime()]));
        incrByBulk.push(stryMutAct_9fa48("276") ? [] : (stryCov_9fa48("276"), [stryMutAct_9fa48("277") ? "" : (stryCov_9fa48("277"), 'analytics:pageviews:month:registered'), total.pageViewsRegistered, month.getTime()]));
        total.pageViewsRegistered = 0;
      }
    }
    if (stryMutAct_9fa48("281") ? total.pageViewsGuest <= 0 : stryMutAct_9fa48("280") ? total.pageViewsGuest >= 0 : stryMutAct_9fa48("279") ? false : stryMutAct_9fa48("278") ? true : (stryCov_9fa48("278", "279", "280", "281"), total.pageViewsGuest > 0)) {
      if (stryMutAct_9fa48("282")) {
        {}
      } else {
        stryCov_9fa48("282");
        incrByBulk.push(stryMutAct_9fa48("283") ? [] : (stryCov_9fa48("283"), [stryMutAct_9fa48("284") ? "" : (stryCov_9fa48("284"), 'analytics:pageviews:guest'), total.pageViewsGuest, today.getTime()]));
        incrByBulk.push(stryMutAct_9fa48("285") ? [] : (stryCov_9fa48("285"), [stryMutAct_9fa48("286") ? "" : (stryCov_9fa48("286"), 'analytics:pageviews:month:guest'), total.pageViewsGuest, month.getTime()]));
        total.pageViewsGuest = 0;
      }
    }
    if (stryMutAct_9fa48("290") ? total.pageViewsBot <= 0 : stryMutAct_9fa48("289") ? total.pageViewsBot >= 0 : stryMutAct_9fa48("288") ? false : stryMutAct_9fa48("287") ? true : (stryCov_9fa48("287", "288", "289", "290"), total.pageViewsBot > 0)) {
      if (stryMutAct_9fa48("291")) {
        {}
      } else {
        stryCov_9fa48("291");
        incrByBulk.push(stryMutAct_9fa48("292") ? [] : (stryCov_9fa48("292"), [stryMutAct_9fa48("293") ? "" : (stryCov_9fa48("293"), 'analytics:pageviews:bot'), total.pageViewsBot, today.getTime()]));
        incrByBulk.push(stryMutAct_9fa48("294") ? [] : (stryCov_9fa48("294"), [stryMutAct_9fa48("295") ? "" : (stryCov_9fa48("295"), 'analytics:pageviews:month:bot'), total.pageViewsBot, month.getTime()]));
        total.pageViewsBot = 0;
      }
    }
    if (stryMutAct_9fa48("299") ? total.uniquevisitors <= 0 : stryMutAct_9fa48("298") ? total.uniquevisitors >= 0 : stryMutAct_9fa48("297") ? false : stryMutAct_9fa48("296") ? true : (stryCov_9fa48("296", "297", "298", "299"), total.uniquevisitors > 0)) {
      if (stryMutAct_9fa48("300")) {
        {}
      } else {
        stryCov_9fa48("300");
        incrByBulk.push(stryMutAct_9fa48("301") ? [] : (stryCov_9fa48("301"), [stryMutAct_9fa48("302") ? "" : (stryCov_9fa48("302"), 'analytics:uniquevisitors'), total.uniquevisitors, today.getTime()]));
        total.uniquevisitors = 0;
      }
    }
    if (stryMutAct_9fa48("306") ? total.uniqueIPCount <= 0 : stryMutAct_9fa48("305") ? total.uniqueIPCount >= 0 : stryMutAct_9fa48("304") ? false : stryMutAct_9fa48("303") ? true : (stryCov_9fa48("303", "304", "305", "306"), total.uniqueIPCount > 0)) {
      if (stryMutAct_9fa48("307")) {
        {}
      } else {
        stryCov_9fa48("307");
        dbQueue.push(db.incrObjectFieldBy(stryMutAct_9fa48("308") ? "" : (stryCov_9fa48("308"), 'global'), stryMutAct_9fa48("309") ? "" : (stryCov_9fa48("309"), 'uniqueIPCount'), total.uniqueIPCount));
        total.uniqueIPCount = 0;
      }
    }
    for (const [key, value] of Object.entries(total.counters)) {
      if (stryMutAct_9fa48("310")) {
        {}
      } else {
        stryCov_9fa48("310");
        incrByBulk.push(stryMutAct_9fa48("311") ? [] : (stryCov_9fa48("311"), [stryMutAct_9fa48("312") ? `` : (stryCov_9fa48("312"), `analytics:${key}`), value, today.getTime()]));
        metrics.push(key);
        delete total.counters[key];
      }
    }
    if (stryMutAct_9fa48("314") ? false : stryMutAct_9fa48("313") ? true : (stryCov_9fa48("313", "314"), incrByBulk.length)) {
      if (stryMutAct_9fa48("315")) {
        {}
      } else {
        stryCov_9fa48("315");
        dbQueue.push(db.sortedSetIncrByBulk(incrByBulk));
      }
    }

    // Update list of tracked metrics
    dbQueue.push(db.sortedSetAdd(stryMutAct_9fa48("316") ? "" : (stryCov_9fa48("316"), 'analyticsKeys'), metrics.map(stryMutAct_9fa48("317") ? () => undefined : (stryCov_9fa48("317"), () => stryMutAct_9fa48("318") ? -Date.now() : (stryCov_9fa48("318"), +Date.now()))), metrics));
    try {
      if (stryMutAct_9fa48("319")) {
        {}
      } else {
        stryCov_9fa48("319");
        await Promise.all(dbQueue);
      }
    } catch (err) {
      if (stryMutAct_9fa48("320")) {
        {}
      } else {
        stryCov_9fa48("320");
        winston.error(stryMutAct_9fa48("321") ? `` : (stryCov_9fa48("321"), `[analytics] Encountered error while writing analytics to data store\n${err.stack}`));
      }
    }
  }
};
Analytics.getHourlyStatsForSet = async function (set, hour, numHours) {
  if (stryMutAct_9fa48("322")) {
    {}
  } else {
    stryCov_9fa48("322");
    // Guard against accidental ommission of `analytics:` prefix
    if (stryMutAct_9fa48("325") ? false : stryMutAct_9fa48("324") ? true : stryMutAct_9fa48("323") ? set.startsWith('analytics:') : (stryCov_9fa48("323", "324", "325"), !(stryMutAct_9fa48("326") ? set.endsWith('analytics:') : (stryCov_9fa48("326"), set.startsWith(stryMutAct_9fa48("327") ? "" : (stryCov_9fa48("327"), 'analytics:')))))) {
      if (stryMutAct_9fa48("328")) {
        {}
      } else {
        stryCov_9fa48("328");
        set = stryMutAct_9fa48("329") ? `` : (stryCov_9fa48("329"), `analytics:${set}`);
      }
    }
    const terms = {};
    const hoursArr = stryMutAct_9fa48("330") ? ["Stryker was here"] : (stryCov_9fa48("330"), []);
    hour = new Date(hour);
    hour.setHours(hour.getHours(), 0, 0, 0);
    for (let i = 0, ii = numHours; stryMutAct_9fa48("333") ? i >= ii : stryMutAct_9fa48("332") ? i <= ii : stryMutAct_9fa48("331") ? false : (stryCov_9fa48("331", "332", "333"), i < ii); stryMutAct_9fa48("334") ? i -= 1 : (stryCov_9fa48("334"), i += 1)) {
      if (stryMutAct_9fa48("335")) {
        {}
      } else {
        stryCov_9fa48("335");
        hoursArr.push(stryMutAct_9fa48("336") ? hour.getTime() + i * 3600 * 1000 : (stryCov_9fa48("336"), hour.getTime() - (stryMutAct_9fa48("337") ? i * 3600 / 1000 : (stryCov_9fa48("337"), (stryMutAct_9fa48("338") ? i / 3600 : (stryCov_9fa48("338"), i * 3600)) * 1000))));
      }
    }
    const counts = await db.sortedSetScores(set, hoursArr);
    hoursArr.forEach((term, index) => {
      if (stryMutAct_9fa48("339")) {
        {}
      } else {
        stryCov_9fa48("339");
        terms[term] = stryMutAct_9fa48("342") ? parseInt(counts[index], 10) && 0 : stryMutAct_9fa48("341") ? false : stryMutAct_9fa48("340") ? true : (stryCov_9fa48("340", "341", "342"), parseInt(counts[index], 10) || 0);
      }
    });
    const termsArr = stryMutAct_9fa48("343") ? ["Stryker was here"] : (stryCov_9fa48("343"), []);
    stryMutAct_9fa48("344") ? hoursArr : (stryCov_9fa48("344"), hoursArr.reverse());
    hoursArr.forEach(hour => {
      if (stryMutAct_9fa48("345")) {
        {}
      } else {
        stryCov_9fa48("345");
        termsArr.push(terms[hour]);
      }
    });
    return termsArr;
  }
};
Analytics.getDailyStatsForSet = async function (set, day, numDays) {
  if (stryMutAct_9fa48("346")) {
    {}
  } else {
    stryCov_9fa48("346");
    // Guard against accidental ommission of `analytics:` prefix
    if (stryMutAct_9fa48("349") ? false : stryMutAct_9fa48("348") ? true : stryMutAct_9fa48("347") ? set.startsWith('analytics:') : (stryCov_9fa48("347", "348", "349"), !(stryMutAct_9fa48("350") ? set.endsWith('analytics:') : (stryCov_9fa48("350"), set.startsWith(stryMutAct_9fa48("351") ? "" : (stryCov_9fa48("351"), 'analytics:')))))) {
      if (stryMutAct_9fa48("352")) {
        {}
      } else {
        stryCov_9fa48("352");
        set = stryMutAct_9fa48("353") ? `` : (stryCov_9fa48("353"), `analytics:${set}`);
      }
    }
    const daysArr = stryMutAct_9fa48("354") ? ["Stryker was here"] : (stryCov_9fa48("354"), []);
    day = new Date(day);
    // set the date to tomorrow, because getHourlyStatsForSet steps *backwards* 24 hours to sum up the values
    day.setDate(stryMutAct_9fa48("355") ? day.getDate() - 1 : (stryCov_9fa48("355"), day.getDate() + 1));
    day.setHours(0, 0, 0, 0);
    while (stryMutAct_9fa48("358") ? numDays <= 0 : stryMutAct_9fa48("357") ? numDays >= 0 : stryMutAct_9fa48("356") ? false : (stryCov_9fa48("356", "357", "358"), numDays > 0)) {
      if (stryMutAct_9fa48("359")) {
        {}
      } else {
        stryCov_9fa48("359");
        /* eslint-disable no-await-in-loop */
        const dayData = await Analytics.getHourlyStatsForSet(set, stryMutAct_9fa48("360") ? day.getTime() + 1000 * 60 * 60 * 24 * (numDays - 1) : (stryCov_9fa48("360"), day.getTime() - (stryMutAct_9fa48("361") ? 1000 * 60 * 60 * 24 / (numDays - 1) : (stryCov_9fa48("361"), (stryMutAct_9fa48("362") ? 1000 * 60 * 60 / 24 : (stryCov_9fa48("362"), (stryMutAct_9fa48("363") ? 1000 * 60 / 60 : (stryCov_9fa48("363"), (stryMutAct_9fa48("364") ? 1000 / 60 : (stryCov_9fa48("364"), 1000 * 60)) * 60)) * 24)) * (stryMutAct_9fa48("365") ? numDays + 1 : (stryCov_9fa48("365"), numDays - 1))))), 24);
        daysArr.push(dayData.reduce(stryMutAct_9fa48("366") ? () => undefined : (stryCov_9fa48("366"), (cur, next) => stryMutAct_9fa48("367") ? cur - next : (stryCov_9fa48("367"), cur + next))));
        stryMutAct_9fa48("368") ? numDays += 1 : (stryCov_9fa48("368"), numDays -= 1);
      }
    }
    return daysArr;
  }
};
Analytics.getUnwrittenPageviews = function () {
  if (stryMutAct_9fa48("369")) {
    {}
  } else {
    stryCov_9fa48("369");
    return local.pageViews;
  }
};
Analytics.getSummary = async function () {
  if (stryMutAct_9fa48("370")) {
    {}
  } else {
    stryCov_9fa48("370");
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    const [seven, thirty] = await Promise.all(stryMutAct_9fa48("371") ? [] : (stryCov_9fa48("371"), [Analytics.getDailyStatsForSet(stryMutAct_9fa48("372") ? "" : (stryCov_9fa48("372"), 'analytics:pageviews'), today, 7), Analytics.getDailyStatsForSet(stryMutAct_9fa48("373") ? "" : (stryCov_9fa48("373"), 'analytics:pageviews'), today, 30)]));
    return stryMutAct_9fa48("374") ? {} : (stryCov_9fa48("374"), {
      seven: seven.reduce(stryMutAct_9fa48("375") ? () => undefined : (stryCov_9fa48("375"), (sum, cur) => stryMutAct_9fa48("376") ? sum - cur : (stryCov_9fa48("376"), sum + cur)), 0),
      thirty: thirty.reduce(stryMutAct_9fa48("377") ? () => undefined : (stryCov_9fa48("377"), (sum, cur) => stryMutAct_9fa48("378") ? sum - cur : (stryCov_9fa48("378"), sum + cur)), 0)
    });
  }
};
Analytics.getCategoryAnalytics = async function (cid) {
  if (stryMutAct_9fa48("379")) {
    {}
  } else {
    stryCov_9fa48("379");
    return await utils.promiseParallel(stryMutAct_9fa48("380") ? {} : (stryCov_9fa48("380"), {
      'pageviews:hourly': Analytics.getHourlyStatsForSet(stryMutAct_9fa48("381") ? `` : (stryCov_9fa48("381"), `analytics:pageviews:byCid:${cid}`), Date.now(), 24),
      'pageviews:daily': Analytics.getDailyStatsForSet(stryMutAct_9fa48("382") ? `` : (stryCov_9fa48("382"), `analytics:pageviews:byCid:${cid}`), Date.now(), 30),
      'topics:daily': Analytics.getDailyStatsForSet(stryMutAct_9fa48("383") ? `` : (stryCov_9fa48("383"), `analytics:topics:byCid:${cid}`), Date.now(), 7),
      'posts:daily': Analytics.getDailyStatsForSet(stryMutAct_9fa48("384") ? `` : (stryCov_9fa48("384"), `analytics:posts:byCid:${cid}`), Date.now(), 7)
    }));
  }
};
Analytics.getErrorAnalytics = async function () {
  if (stryMutAct_9fa48("385")) {
    {}
  } else {
    stryCov_9fa48("385");
    return await utils.promiseParallel(stryMutAct_9fa48("386") ? {} : (stryCov_9fa48("386"), {
      'not-found': Analytics.getDailyStatsForSet(stryMutAct_9fa48("387") ? "" : (stryCov_9fa48("387"), 'analytics:errors:404'), Date.now(), 7),
      toobusy: Analytics.getDailyStatsForSet(stryMutAct_9fa48("388") ? "" : (stryCov_9fa48("388"), 'analytics:errors:503'), Date.now(), 7)
    }));
  }
};
Analytics.getBlacklistAnalytics = async function () {
  if (stryMutAct_9fa48("389")) {
    {}
  } else {
    stryCov_9fa48("389");
    return await utils.promiseParallel(stryMutAct_9fa48("390") ? {} : (stryCov_9fa48("390"), {
      daily: Analytics.getDailyStatsForSet(stryMutAct_9fa48("391") ? "" : (stryCov_9fa48("391"), 'analytics:blacklist'), Date.now(), 7),
      hourly: Analytics.getHourlyStatsForSet(stryMutAct_9fa48("392") ? "" : (stryCov_9fa48("392"), 'analytics:blacklist'), Date.now(), 24)
    }));
  }
};
require('./promisify')(Analytics);