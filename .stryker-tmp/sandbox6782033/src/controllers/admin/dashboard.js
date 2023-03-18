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
const nconf = require('nconf');
const semver = require('semver');
const winston = require('winston');
const _ = require('lodash');
const validator = require('validator');
const versions = require('../../admin/versions');
const db = require('../../database');
const meta = require('../../meta');
const analytics = require('../../analytics');
const plugins = require('../../plugins');
const user = require('../../user');
const topics = require('../../topics');
const utils = require('../../utils');
const emailer = require('../../emailer');
const dashboardController = module.exports;
dashboardController.get = async function (req, res) {
  if (stryMutAct_9fa48("6755")) {
    {}
  } else {
    stryCov_9fa48("6755");
    const [stats, notices, latestVersion, lastrestart, isAdmin, popularSearches] = await Promise.all(stryMutAct_9fa48("6756") ? [] : (stryCov_9fa48("6756"), [getStats(), getNotices(), getLatestVersion(), getLastRestart(), user.isAdministrator(req.uid), getPopularSearches()]));
    const version = nconf.get(stryMutAct_9fa48("6757") ? "" : (stryCov_9fa48("6757"), 'version'));
    res.render(stryMutAct_9fa48("6758") ? "" : (stryCov_9fa48("6758"), 'admin/dashboard'), stryMutAct_9fa48("6759") ? {} : (stryCov_9fa48("6759"), {
      version: version,
      lookupFailed: stryMutAct_9fa48("6762") ? latestVersion !== null : stryMutAct_9fa48("6761") ? false : stryMutAct_9fa48("6760") ? true : (stryCov_9fa48("6760", "6761", "6762"), latestVersion === null),
      latestVersion: latestVersion,
      upgradeAvailable: stryMutAct_9fa48("6765") ? latestVersion || semver.gt(latestVersion, version) : stryMutAct_9fa48("6764") ? false : stryMutAct_9fa48("6763") ? true : (stryCov_9fa48("6763", "6764", "6765"), latestVersion && semver.gt(latestVersion, version)),
      currentPrerelease: versions.isPrerelease.test(version),
      notices: notices,
      stats: stats,
      canRestart: stryMutAct_9fa48("6766") ? !process.send : (stryCov_9fa48("6766"), !(stryMutAct_9fa48("6767") ? process.send : (stryCov_9fa48("6767"), !process.send))),
      lastrestart: lastrestart,
      showSystemControls: isAdmin,
      popularSearches: popularSearches
    }));
  }
};
async function getNotices() {
  if (stryMutAct_9fa48("6768")) {
    {}
  } else {
    stryCov_9fa48("6768");
    const notices = stryMutAct_9fa48("6769") ? [] : (stryCov_9fa48("6769"), [stryMutAct_9fa48("6770") ? {} : (stryCov_9fa48("6770"), {
      done: stryMutAct_9fa48("6771") ? meta.reloadRequired : (stryCov_9fa48("6771"), !meta.reloadRequired),
      doneText: stryMutAct_9fa48("6772") ? "" : (stryCov_9fa48("6772"), '[[admin/dashboard:restart-not-required]]'),
      notDoneText: stryMutAct_9fa48("6773") ? "" : (stryCov_9fa48("6773"), '[[admin/dashboard:restart-required]]')
    }), stryMutAct_9fa48("6774") ? {} : (stryCov_9fa48("6774"), {
      done: plugins.hooks.hasListeners(stryMutAct_9fa48("6775") ? "" : (stryCov_9fa48("6775"), 'filter:search.query')),
      doneText: stryMutAct_9fa48("6776") ? "" : (stryCov_9fa48("6776"), '[[admin/dashboard:search-plugin-installed]]'),
      notDoneText: stryMutAct_9fa48("6777") ? "" : (stryCov_9fa48("6777"), '[[admin/dashboard:search-plugin-not-installed]]'),
      tooltip: stryMutAct_9fa48("6778") ? "" : (stryCov_9fa48("6778"), '[[admin/dashboard:search-plugin-tooltip]]'),
      link: stryMutAct_9fa48("6779") ? "" : (stryCov_9fa48("6779"), '/admin/extend/plugins')
    })]);
    if (stryMutAct_9fa48("6781") ? false : stryMutAct_9fa48("6780") ? true : (stryCov_9fa48("6780", "6781"), emailer.fallbackNotFound)) {
      if (stryMutAct_9fa48("6782")) {
        {}
      } else {
        stryCov_9fa48("6782");
        notices.push(stryMutAct_9fa48("6783") ? {} : (stryCov_9fa48("6783"), {
          done: stryMutAct_9fa48("6784") ? true : (stryCov_9fa48("6784"), false),
          notDoneText: stryMutAct_9fa48("6785") ? "" : (stryCov_9fa48("6785"), '[[admin/dashboard:fallback-emailer-not-found]]')
        }));
      }
    }
    if (stryMutAct_9fa48("6788") ? global.env === 'production' : stryMutAct_9fa48("6787") ? false : stryMutAct_9fa48("6786") ? true : (stryCov_9fa48("6786", "6787", "6788"), global.env !== (stryMutAct_9fa48("6789") ? "" : (stryCov_9fa48("6789"), 'production')))) {
      if (stryMutAct_9fa48("6790")) {
        {}
      } else {
        stryCov_9fa48("6790");
        notices.push(stryMutAct_9fa48("6791") ? {} : (stryCov_9fa48("6791"), {
          done: stryMutAct_9fa48("6792") ? true : (stryCov_9fa48("6792"), false),
          notDoneText: stryMutAct_9fa48("6793") ? "" : (stryCov_9fa48("6793"), '[[admin/dashboard:running-in-development]]')
        }));
      }
    }
    return await plugins.hooks.fire(stryMutAct_9fa48("6794") ? "" : (stryCov_9fa48("6794"), 'filter:admin.notices'), notices);
  }
}
async function getLatestVersion() {
  if (stryMutAct_9fa48("6795")) {
    {}
  } else {
    stryCov_9fa48("6795");
    try {
      if (stryMutAct_9fa48("6796")) {
        {}
      } else {
        stryCov_9fa48("6796");
        return await versions.getLatestVersion();
      }
    } catch (err) {
      if (stryMutAct_9fa48("6797")) {
        {}
      } else {
        stryCov_9fa48("6797");
        winston.error(stryMutAct_9fa48("6798") ? `` : (stryCov_9fa48("6798"), `[acp] Failed to fetch latest version\n${err.stack}`));
      }
    }
    return null;
  }
}
dashboardController.getAnalytics = async (req, res, next) => {
  if (stryMutAct_9fa48("6799")) {
    {}
  } else {
    stryCov_9fa48("6799");
    // Basic validation
    const validUnits = stryMutAct_9fa48("6800") ? [] : (stryCov_9fa48("6800"), [stryMutAct_9fa48("6801") ? "" : (stryCov_9fa48("6801"), 'days'), stryMutAct_9fa48("6802") ? "" : (stryCov_9fa48("6802"), 'hours')]);
    const validSets = stryMutAct_9fa48("6803") ? [] : (stryCov_9fa48("6803"), [stryMutAct_9fa48("6804") ? "" : (stryCov_9fa48("6804"), 'uniquevisitors'), stryMutAct_9fa48("6805") ? "" : (stryCov_9fa48("6805"), 'pageviews'), stryMutAct_9fa48("6806") ? "" : (stryCov_9fa48("6806"), 'pageviews:registered'), stryMutAct_9fa48("6807") ? "" : (stryCov_9fa48("6807"), 'pageviews:bot'), stryMutAct_9fa48("6808") ? "" : (stryCov_9fa48("6808"), 'pageviews:guest')]);
    const until = req.query.until ? new Date(parseInt(req.query.until, 10)) : Date.now();
    const count = stryMutAct_9fa48("6811") ? req.query.count && (req.query.units === 'hours' ? 24 : 30) : stryMutAct_9fa48("6810") ? false : stryMutAct_9fa48("6809") ? true : (stryCov_9fa48("6809", "6810", "6811"), req.query.count || ((stryMutAct_9fa48("6814") ? req.query.units !== 'hours' : stryMutAct_9fa48("6813") ? false : stryMutAct_9fa48("6812") ? true : (stryCov_9fa48("6812", "6813", "6814"), req.query.units === (stryMutAct_9fa48("6815") ? "" : (stryCov_9fa48("6815"), 'hours')))) ? 24 : 30));
    if (stryMutAct_9fa48("6818") ? isNaN(until) && !validUnits.includes(req.query.units) : stryMutAct_9fa48("6817") ? false : stryMutAct_9fa48("6816") ? true : (stryCov_9fa48("6816", "6817", "6818"), isNaN(until) || (stryMutAct_9fa48("6819") ? validUnits.includes(req.query.units) : (stryCov_9fa48("6819"), !validUnits.includes(req.query.units))))) {
      if (stryMutAct_9fa48("6820")) {
        {}
      } else {
        stryCov_9fa48("6820");
        return next(new Error(stryMutAct_9fa48("6821") ? "" : (stryCov_9fa48("6821"), '[[error:invalid-data]]')));
      }
    }

    // Filter out invalid sets, if no sets, assume all sets
    let sets;
    if (stryMutAct_9fa48("6823") ? false : stryMutAct_9fa48("6822") ? true : (stryCov_9fa48("6822", "6823"), req.query.sets)) {
      if (stryMutAct_9fa48("6824")) {
        {}
      } else {
        stryCov_9fa48("6824");
        sets = Array.isArray(req.query.sets) ? req.query.sets : stryMutAct_9fa48("6825") ? [] : (stryCov_9fa48("6825"), [req.query.sets]);
        sets = stryMutAct_9fa48("6826") ? sets : (stryCov_9fa48("6826"), sets.filter(stryMutAct_9fa48("6827") ? () => undefined : (stryCov_9fa48("6827"), set => validSets.includes(set))));
      }
    } else {
      if (stryMutAct_9fa48("6828")) {
        {}
      } else {
        stryCov_9fa48("6828");
        sets = validSets;
      }
    }
    const method = (stryMutAct_9fa48("6831") ? req.query.units !== 'days' : stryMutAct_9fa48("6830") ? false : stryMutAct_9fa48("6829") ? true : (stryCov_9fa48("6829", "6830", "6831"), req.query.units === (stryMutAct_9fa48("6832") ? "" : (stryCov_9fa48("6832"), 'days')))) ? analytics.getDailyStatsForSet : analytics.getHourlyStatsForSet;
    let payload = await Promise.all(sets.map(stryMutAct_9fa48("6833") ? () => undefined : (stryCov_9fa48("6833"), set => method(stryMutAct_9fa48("6834") ? `` : (stryCov_9fa48("6834"), `analytics:${set}`), until, count))));
    payload = _.zipObject(sets, payload);
    res.json(stryMutAct_9fa48("6835") ? {} : (stryCov_9fa48("6835"), {
      query: stryMutAct_9fa48("6836") ? {} : (stryCov_9fa48("6836"), {
        set: req.query.set,
        units: req.query.units,
        until: until,
        count: count
      }),
      result: payload
    }));
  }
};
async function getStats() {
  if (stryMutAct_9fa48("6837")) {
    {}
  } else {
    stryCov_9fa48("6837");
    const cache = require('../../cache');
    const cachedStats = cache.get(stryMutAct_9fa48("6838") ? "" : (stryCov_9fa48("6838"), 'admin:stats'));
    if (stryMutAct_9fa48("6841") ? cachedStats === undefined : stryMutAct_9fa48("6840") ? false : stryMutAct_9fa48("6839") ? true : (stryCov_9fa48("6839", "6840", "6841"), cachedStats !== undefined)) {
      if (stryMutAct_9fa48("6842")) {
        {}
      } else {
        stryCov_9fa48("6842");
        return cachedStats;
      }
    }
    let results = await Promise.all(stryMutAct_9fa48("6843") ? [] : (stryCov_9fa48("6843"), [getStatsForSet(stryMutAct_9fa48("6844") ? "" : (stryCov_9fa48("6844"), 'ip:recent'), stryMutAct_9fa48("6845") ? "" : (stryCov_9fa48("6845"), 'uniqueIPCount')), getStatsFromAnalytics(stryMutAct_9fa48("6846") ? "" : (stryCov_9fa48("6846"), 'logins'), stryMutAct_9fa48("6847") ? "" : (stryCov_9fa48("6847"), 'loginCount')), getStatsForSet(stryMutAct_9fa48("6848") ? "" : (stryCov_9fa48("6848"), 'users:joindate'), stryMutAct_9fa48("6849") ? "" : (stryCov_9fa48("6849"), 'userCount')), getStatsForSet(stryMutAct_9fa48("6850") ? "" : (stryCov_9fa48("6850"), 'posts:pid'), stryMutAct_9fa48("6851") ? "" : (stryCov_9fa48("6851"), 'postCount')), getStatsForSet(stryMutAct_9fa48("6852") ? "" : (stryCov_9fa48("6852"), 'topics:tid'), stryMutAct_9fa48("6853") ? "" : (stryCov_9fa48("6853"), 'topicCount'))]));
    results[0].name = stryMutAct_9fa48("6854") ? "" : (stryCov_9fa48("6854"), '[[admin/dashboard:unique-visitors]]');
    results[1].name = stryMutAct_9fa48("6855") ? "" : (stryCov_9fa48("6855"), '[[admin/dashboard:logins]]');
    results[1].href = stryMutAct_9fa48("6856") ? `` : (stryCov_9fa48("6856"), `${nconf.get(stryMutAct_9fa48("6857") ? "" : (stryCov_9fa48("6857"), 'relative_path'))}/admin/dashboard/logins`);
    results[2].name = stryMutAct_9fa48("6858") ? "" : (stryCov_9fa48("6858"), '[[admin/dashboard:new-users]]');
    results[2].href = stryMutAct_9fa48("6859") ? `` : (stryCov_9fa48("6859"), `${nconf.get(stryMutAct_9fa48("6860") ? "" : (stryCov_9fa48("6860"), 'relative_path'))}/admin/dashboard/users`);
    results[3].name = stryMutAct_9fa48("6861") ? "" : (stryCov_9fa48("6861"), '[[admin/dashboard:posts]]');
    results[4].name = stryMutAct_9fa48("6862") ? "" : (stryCov_9fa48("6862"), '[[admin/dashboard:topics]]');
    results[4].href = stryMutAct_9fa48("6863") ? `` : (stryCov_9fa48("6863"), `${nconf.get(stryMutAct_9fa48("6864") ? "" : (stryCov_9fa48("6864"), 'relative_path'))}/admin/dashboard/topics`);
    ({
      results
    } = await plugins.hooks.fire(stryMutAct_9fa48("6865") ? "" : (stryCov_9fa48("6865"), 'filter:admin.getStats'), stryMutAct_9fa48("6866") ? {} : (stryCov_9fa48("6866"), {
      results,
      helpers: stryMutAct_9fa48("6867") ? {} : (stryCov_9fa48("6867"), {
        getStatsForSet,
        getStatsFromAnalytics
      })
    })));
    cache.set(stryMutAct_9fa48("6868") ? "" : (stryCov_9fa48("6868"), 'admin:stats'), results, 600000);
    return results;
  }
}
async function getStatsForSet(set, field) {
  if (stryMutAct_9fa48("6869")) {
    {}
  } else {
    stryCov_9fa48("6869");
    const terms = stryMutAct_9fa48("6870") ? {} : (stryCov_9fa48("6870"), {
      day: 86400000,
      week: 604800000,
      month: 2592000000
    });
    const now = Date.now();
    const results = await utils.promiseParallel(stryMutAct_9fa48("6871") ? {} : (stryCov_9fa48("6871"), {
      yesterday: db.sortedSetCount(set, stryMutAct_9fa48("6872") ? now + terms.day * 2 : (stryCov_9fa48("6872"), now - (stryMutAct_9fa48("6873") ? terms.day / 2 : (stryCov_9fa48("6873"), terms.day * 2))), stryMutAct_9fa48("6874") ? "" : (stryCov_9fa48("6874"), '+inf')),
      today: db.sortedSetCount(set, stryMutAct_9fa48("6875") ? now + terms.day : (stryCov_9fa48("6875"), now - terms.day), stryMutAct_9fa48("6876") ? "" : (stryCov_9fa48("6876"), '+inf')),
      lastweek: db.sortedSetCount(set, stryMutAct_9fa48("6877") ? now + terms.week * 2 : (stryCov_9fa48("6877"), now - (stryMutAct_9fa48("6878") ? terms.week / 2 : (stryCov_9fa48("6878"), terms.week * 2))), stryMutAct_9fa48("6879") ? "" : (stryCov_9fa48("6879"), '+inf')),
      thisweek: db.sortedSetCount(set, stryMutAct_9fa48("6880") ? now + terms.week : (stryCov_9fa48("6880"), now - terms.week), stryMutAct_9fa48("6881") ? "" : (stryCov_9fa48("6881"), '+inf')),
      lastmonth: db.sortedSetCount(set, stryMutAct_9fa48("6882") ? now + terms.month * 2 : (stryCov_9fa48("6882"), now - (stryMutAct_9fa48("6883") ? terms.month / 2 : (stryCov_9fa48("6883"), terms.month * 2))), stryMutAct_9fa48("6884") ? "" : (stryCov_9fa48("6884"), '+inf')),
      thismonth: db.sortedSetCount(set, stryMutAct_9fa48("6885") ? now + terms.month : (stryCov_9fa48("6885"), now - terms.month), stryMutAct_9fa48("6886") ? "" : (stryCov_9fa48("6886"), '+inf')),
      alltime: getGlobalField(field)
    }));
    return calculateDeltas(results);
  }
}
async function getStatsFromAnalytics(set, field) {
  if (stryMutAct_9fa48("6887")) {
    {}
  } else {
    stryCov_9fa48("6887");
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    const data = await analytics.getDailyStatsForSet(stryMutAct_9fa48("6888") ? `` : (stryCov_9fa48("6888"), `analytics:${set}`), today, 60);
    const sum = stryMutAct_9fa48("6889") ? () => undefined : (stryCov_9fa48("6889"), (() => {
      const sum = arr => arr.reduce(stryMutAct_9fa48("6890") ? () => undefined : (stryCov_9fa48("6890"), (memo, cur) => stryMutAct_9fa48("6891") ? memo - cur : (stryCov_9fa48("6891"), memo + cur)), 0);
      return sum;
    })());
    const results = stryMutAct_9fa48("6892") ? {} : (stryCov_9fa48("6892"), {
      yesterday: sum(stryMutAct_9fa48("6893") ? data : (stryCov_9fa48("6893"), data.slice(stryMutAct_9fa48("6894") ? +2 : (stryCov_9fa48("6894"), -2)))),
      today: stryMutAct_9fa48("6895") ? data[0] : (stryCov_9fa48("6895"), data.slice(stryMutAct_9fa48("6896") ? +1 : (stryCov_9fa48("6896"), -1))[0]),
      lastweek: sum(stryMutAct_9fa48("6897") ? data : (stryCov_9fa48("6897"), data.slice(stryMutAct_9fa48("6898") ? +14 : (stryCov_9fa48("6898"), -14)))),
      thisweek: sum(stryMutAct_9fa48("6899") ? data : (stryCov_9fa48("6899"), data.slice(stryMutAct_9fa48("6900") ? +7 : (stryCov_9fa48("6900"), -7)))),
      lastmonth: sum(stryMutAct_9fa48("6901") ? data : (stryCov_9fa48("6901"), data.slice(0))),
      // entire set
      thismonth: sum(stryMutAct_9fa48("6902") ? data : (stryCov_9fa48("6902"), data.slice(stryMutAct_9fa48("6903") ? +30 : (stryCov_9fa48("6903"), -30)))),
      alltime: await getGlobalField(field)
    });
    return calculateDeltas(results);
  }
}
function calculateDeltas(results) {
  if (stryMutAct_9fa48("6904")) {
    {}
  } else {
    stryCov_9fa48("6904");
    function textClass(num) {
      if (stryMutAct_9fa48("6905")) {
        {}
      } else {
        stryCov_9fa48("6905");
        if (stryMutAct_9fa48("6909") ? num <= 0 : stryMutAct_9fa48("6908") ? num >= 0 : stryMutAct_9fa48("6907") ? false : stryMutAct_9fa48("6906") ? true : (stryCov_9fa48("6906", "6907", "6908", "6909"), num > 0)) {
          if (stryMutAct_9fa48("6910")) {
            {}
          } else {
            stryCov_9fa48("6910");
            return stryMutAct_9fa48("6911") ? "" : (stryCov_9fa48("6911"), 'text-success');
          }
        } else if (stryMutAct_9fa48("6915") ? num >= 0 : stryMutAct_9fa48("6914") ? num <= 0 : stryMutAct_9fa48("6913") ? false : stryMutAct_9fa48("6912") ? true : (stryCov_9fa48("6912", "6913", "6914", "6915"), num < 0)) {
          if (stryMutAct_9fa48("6916")) {
            {}
          } else {
            stryCov_9fa48("6916");
            return stryMutAct_9fa48("6917") ? "" : (stryCov_9fa48("6917"), 'text-danger');
          }
        }
        return stryMutAct_9fa48("6918") ? "" : (stryCov_9fa48("6918"), 'text-warning');
      }
    }
    function increasePercent(last, now) {
      if (stryMutAct_9fa48("6919")) {
        {}
      } else {
        stryCov_9fa48("6919");
        const percent = last ? stryMutAct_9fa48("6920") ? (now - last) / last / 100 : (stryCov_9fa48("6920"), (stryMutAct_9fa48("6921") ? (now - last) * last : (stryCov_9fa48("6921"), (stryMutAct_9fa48("6922") ? now + last : (stryCov_9fa48("6922"), now - last)) / last)) * 100) : 0;
        return percent.toFixed(1);
      }
    }
    stryMutAct_9fa48("6923") ? results.yesterday += results.today : (stryCov_9fa48("6923"), results.yesterday -= results.today);
    results.dayIncrease = increasePercent(results.yesterday, results.today);
    results.dayTextClass = textClass(results.dayIncrease);
    stryMutAct_9fa48("6924") ? results.lastweek += results.thisweek : (stryCov_9fa48("6924"), results.lastweek -= results.thisweek);
    results.weekIncrease = increasePercent(results.lastweek, results.thisweek);
    results.weekTextClass = textClass(results.weekIncrease);
    stryMutAct_9fa48("6925") ? results.lastmonth += results.thismonth : (stryCov_9fa48("6925"), results.lastmonth -= results.thismonth);
    results.monthIncrease = increasePercent(results.lastmonth, results.thismonth);
    results.monthTextClass = textClass(results.monthIncrease);
    return results;
  }
}
async function getGlobalField(field) {
  if (stryMutAct_9fa48("6926")) {
    {}
  } else {
    stryCov_9fa48("6926");
    const count = await db.getObjectField(stryMutAct_9fa48("6927") ? "" : (stryCov_9fa48("6927"), 'global'), field);
    return stryMutAct_9fa48("6930") ? parseInt(count, 10) && 0 : stryMutAct_9fa48("6929") ? false : stryMutAct_9fa48("6928") ? true : (stryCov_9fa48("6928", "6929", "6930"), parseInt(count, 10) || 0);
  }
}
async function getLastRestart() {
  if (stryMutAct_9fa48("6931")) {
    {}
  } else {
    stryCov_9fa48("6931");
    const lastrestart = await db.getObject(stryMutAct_9fa48("6932") ? "" : (stryCov_9fa48("6932"), 'lastrestart'));
    if (stryMutAct_9fa48("6935") ? false : stryMutAct_9fa48("6934") ? true : stryMutAct_9fa48("6933") ? lastrestart : (stryCov_9fa48("6933", "6934", "6935"), !lastrestart)) {
      if (stryMutAct_9fa48("6936")) {
        {}
      } else {
        stryCov_9fa48("6936");
        return null;
      }
    }
    const userData = await user.getUserData(lastrestart.uid);
    lastrestart.user = userData;
    lastrestart.timestampISO = utils.toISOString(lastrestart.timestamp);
    return lastrestart;
  }
}
async function getPopularSearches() {
  if (stryMutAct_9fa48("6937")) {
    {}
  } else {
    stryCov_9fa48("6937");
    const searches = await db.getSortedSetRevRangeWithScores(stryMutAct_9fa48("6938") ? "" : (stryCov_9fa48("6938"), 'searches:all'), 0, 9);
    return searches.map(stryMutAct_9fa48("6939") ? () => undefined : (stryCov_9fa48("6939"), s => stryMutAct_9fa48("6940") ? {} : (stryCov_9fa48("6940"), {
      value: validator.escape(String(s.value)),
      score: s.score
    })));
  }
}
dashboardController.getLogins = async (req, res) => {
  if (stryMutAct_9fa48("6941")) {
    {}
  } else {
    stryCov_9fa48("6941");
    let stats = await getStats();
    stats = stryMutAct_9fa48("6942") ? stats.map(({
      ...stat
    }) => {
      delete stat.href;
      return stat;
    }) : (stryCov_9fa48("6942"), stats.filter(stryMutAct_9fa48("6943") ? () => undefined : (stryCov_9fa48("6943"), stat => stryMutAct_9fa48("6946") ? stat.name !== '[[admin/dashboard:logins]]' : stryMutAct_9fa48("6945") ? false : stryMutAct_9fa48("6944") ? true : (stryCov_9fa48("6944", "6945", "6946"), stat.name === (stryMutAct_9fa48("6947") ? "" : (stryCov_9fa48("6947"), '[[admin/dashboard:logins]]'))))).map(({
      ...stat
    }) => {
      if (stryMutAct_9fa48("6948")) {
        {}
      } else {
        stryCov_9fa48("6948");
        delete stat.href;
        return stat;
      }
    }));
    const summary = stryMutAct_9fa48("6949") ? {} : (stryCov_9fa48("6949"), {
      day: stats[0].today,
      week: stats[0].thisweek,
      month: stats[0].thismonth
    });

    // List recent sessions
    const start = stryMutAct_9fa48("6950") ? Date.now() + 1000 * 60 * 60 * 24 * meta.config.loginDays : (stryCov_9fa48("6950"), Date.now() - (stryMutAct_9fa48("6951") ? 1000 * 60 * 60 * 24 / meta.config.loginDays : (stryCov_9fa48("6951"), (stryMutAct_9fa48("6952") ? 1000 * 60 * 60 / 24 : (stryCov_9fa48("6952"), (stryMutAct_9fa48("6953") ? 1000 * 60 / 60 : (stryCov_9fa48("6953"), (stryMutAct_9fa48("6954") ? 1000 / 60 : (stryCov_9fa48("6954"), 1000 * 60)) * 60)) * 24)) * meta.config.loginDays)));
    const uids = await db.getSortedSetRangeByScore(stryMutAct_9fa48("6955") ? "" : (stryCov_9fa48("6955"), 'users:online'), 0, 500, start, Date.now());
    const usersData = await user.getUsersData(uids);
    let sessions = await Promise.all(uids.map(async uid => {
      if (stryMutAct_9fa48("6956")) {
        {}
      } else {
        stryCov_9fa48("6956");
        const sessions = await user.auth.getSessions(uid);
        sessions.forEach(session => {
          if (stryMutAct_9fa48("6957")) {
            {}
          } else {
            stryCov_9fa48("6957");
            session.user = usersData[uids.indexOf(uid)];
          }
        });
        return sessions;
      }
    }));
    sessions = stryMutAct_9fa48("6958") ? _.flatten(sessions) : (stryCov_9fa48("6958"), _.flatten(sessions).sort(stryMutAct_9fa48("6959") ? () => undefined : (stryCov_9fa48("6959"), (a, b) => stryMutAct_9fa48("6960") ? b.datetime + a.datetime : (stryCov_9fa48("6960"), b.datetime - a.datetime))));
    res.render(stryMutAct_9fa48("6961") ? "" : (stryCov_9fa48("6961"), 'admin/dashboard/logins'), stryMutAct_9fa48("6962") ? {} : (stryCov_9fa48("6962"), {
      set: stryMutAct_9fa48("6963") ? "" : (stryCov_9fa48("6963"), 'logins'),
      query: req.query,
      stats,
      summary,
      sessions,
      loginDays: meta.config.loginDays
    }));
  }
};
dashboardController.getUsers = async (req, res) => {
  if (stryMutAct_9fa48("6964")) {
    {}
  } else {
    stryCov_9fa48("6964");
    let stats = await getStats();
    stats = stryMutAct_9fa48("6965") ? stats.map(({
      ...stat
    }) => {
      delete stat.href;
      return stat;
    }) : (stryCov_9fa48("6965"), stats.filter(stryMutAct_9fa48("6966") ? () => undefined : (stryCov_9fa48("6966"), stat => stryMutAct_9fa48("6969") ? stat.name !== '[[admin/dashboard:new-users]]' : stryMutAct_9fa48("6968") ? false : stryMutAct_9fa48("6967") ? true : (stryCov_9fa48("6967", "6968", "6969"), stat.name === (stryMutAct_9fa48("6970") ? "" : (stryCov_9fa48("6970"), '[[admin/dashboard:new-users]]'))))).map(({
      ...stat
    }) => {
      if (stryMutAct_9fa48("6971")) {
        {}
      } else {
        stryCov_9fa48("6971");
        delete stat.href;
        return stat;
      }
    }));
    const summary = stryMutAct_9fa48("6972") ? {} : (stryCov_9fa48("6972"), {
      day: stats[0].today,
      week: stats[0].thisweek,
      month: stats[0].thismonth
    });

    // List of users registered within time frame
    const end = stryMutAct_9fa48("6975") ? parseInt(req.query.until, 10) && Date.now() : stryMutAct_9fa48("6974") ? false : stryMutAct_9fa48("6973") ? true : (stryCov_9fa48("6973", "6974", "6975"), parseInt(req.query.until, 10) || Date.now());
    const start = stryMutAct_9fa48("6976") ? end + 1000 * 60 * 60 * (req.query.units === 'days' ? 24 : 1) * (req.query.count || (req.query.units === 'days' ? 30 : 24)) : (stryCov_9fa48("6976"), end - (stryMutAct_9fa48("6977") ? 1000 * 60 * 60 * (req.query.units === 'days' ? 24 : 1) / (req.query.count || (req.query.units === 'days' ? 30 : 24)) : (stryCov_9fa48("6977"), (stryMutAct_9fa48("6978") ? 1000 * 60 * 60 / (req.query.units === 'days' ? 24 : 1) : (stryCov_9fa48("6978"), (stryMutAct_9fa48("6979") ? 1000 * 60 / 60 : (stryCov_9fa48("6979"), (stryMutAct_9fa48("6980") ? 1000 / 60 : (stryCov_9fa48("6980"), 1000 * 60)) * 60)) * ((stryMutAct_9fa48("6983") ? req.query.units !== 'days' : stryMutAct_9fa48("6982") ? false : stryMutAct_9fa48("6981") ? true : (stryCov_9fa48("6981", "6982", "6983"), req.query.units === (stryMutAct_9fa48("6984") ? "" : (stryCov_9fa48("6984"), 'days')))) ? 24 : 1))) * (stryMutAct_9fa48("6987") ? req.query.count && (req.query.units === 'days' ? 30 : 24) : stryMutAct_9fa48("6986") ? false : stryMutAct_9fa48("6985") ? true : (stryCov_9fa48("6985", "6986", "6987"), req.query.count || ((stryMutAct_9fa48("6990") ? req.query.units !== 'days' : stryMutAct_9fa48("6989") ? false : stryMutAct_9fa48("6988") ? true : (stryCov_9fa48("6988", "6989", "6990"), req.query.units === (stryMutAct_9fa48("6991") ? "" : (stryCov_9fa48("6991"), 'days')))) ? 30 : 24))))));
    const uids = await db.getSortedSetRangeByScore(stryMutAct_9fa48("6992") ? "" : (stryCov_9fa48("6992"), 'users:joindate'), 0, 500, start, end);
    const users = await user.getUsersData(uids);
    res.render(stryMutAct_9fa48("6993") ? "" : (stryCov_9fa48("6993"), 'admin/dashboard/users'), stryMutAct_9fa48("6994") ? {} : (stryCov_9fa48("6994"), {
      set: stryMutAct_9fa48("6995") ? "" : (stryCov_9fa48("6995"), 'registrations'),
      query: req.query,
      stats,
      summary,
      users
    }));
  }
};
dashboardController.getTopics = async (req, res) => {
  if (stryMutAct_9fa48("6996")) {
    {}
  } else {
    stryCov_9fa48("6996");
    let stats = await getStats();
    stats = stryMutAct_9fa48("6997") ? stats.map(({
      ...stat
    }) => {
      delete stat.href;
      return stat;
    }) : (stryCov_9fa48("6997"), stats.filter(stryMutAct_9fa48("6998") ? () => undefined : (stryCov_9fa48("6998"), stat => stryMutAct_9fa48("7001") ? stat.name !== '[[admin/dashboard:topics]]' : stryMutAct_9fa48("7000") ? false : stryMutAct_9fa48("6999") ? true : (stryCov_9fa48("6999", "7000", "7001"), stat.name === (stryMutAct_9fa48("7002") ? "" : (stryCov_9fa48("7002"), '[[admin/dashboard:topics]]'))))).map(({
      ...stat
    }) => {
      if (stryMutAct_9fa48("7003")) {
        {}
      } else {
        stryCov_9fa48("7003");
        delete stat.href;
        return stat;
      }
    }));
    const summary = stryMutAct_9fa48("7004") ? {} : (stryCov_9fa48("7004"), {
      day: stats[0].today,
      week: stats[0].thisweek,
      month: stats[0].thismonth
    });

    // List of topics created within time frame
    const end = stryMutAct_9fa48("7007") ? parseInt(req.query.until, 10) && Date.now() : stryMutAct_9fa48("7006") ? false : stryMutAct_9fa48("7005") ? true : (stryCov_9fa48("7005", "7006", "7007"), parseInt(req.query.until, 10) || Date.now());
    const start = stryMutAct_9fa48("7008") ? end + 1000 * 60 * 60 * (req.query.units === 'days' ? 24 : 1) * (req.query.count || (req.query.units === 'days' ? 30 : 24)) : (stryCov_9fa48("7008"), end - (stryMutAct_9fa48("7009") ? 1000 * 60 * 60 * (req.query.units === 'days' ? 24 : 1) / (req.query.count || (req.query.units === 'days' ? 30 : 24)) : (stryCov_9fa48("7009"), (stryMutAct_9fa48("7010") ? 1000 * 60 * 60 / (req.query.units === 'days' ? 24 : 1) : (stryCov_9fa48("7010"), (stryMutAct_9fa48("7011") ? 1000 * 60 / 60 : (stryCov_9fa48("7011"), (stryMutAct_9fa48("7012") ? 1000 / 60 : (stryCov_9fa48("7012"), 1000 * 60)) * 60)) * ((stryMutAct_9fa48("7015") ? req.query.units !== 'days' : stryMutAct_9fa48("7014") ? false : stryMutAct_9fa48("7013") ? true : (stryCov_9fa48("7013", "7014", "7015"), req.query.units === (stryMutAct_9fa48("7016") ? "" : (stryCov_9fa48("7016"), 'days')))) ? 24 : 1))) * (stryMutAct_9fa48("7019") ? req.query.count && (req.query.units === 'days' ? 30 : 24) : stryMutAct_9fa48("7018") ? false : stryMutAct_9fa48("7017") ? true : (stryCov_9fa48("7017", "7018", "7019"), req.query.count || ((stryMutAct_9fa48("7022") ? req.query.units !== 'days' : stryMutAct_9fa48("7021") ? false : stryMutAct_9fa48("7020") ? true : (stryCov_9fa48("7020", "7021", "7022"), req.query.units === (stryMutAct_9fa48("7023") ? "" : (stryCov_9fa48("7023"), 'days')))) ? 30 : 24))))));
    const tids = await db.getSortedSetRangeByScore(stryMutAct_9fa48("7024") ? "" : (stryCov_9fa48("7024"), 'topics:tid'), 0, 500, start, end);
    const topicData = await topics.getTopicsByTids(tids);
    res.render(stryMutAct_9fa48("7025") ? "" : (stryCov_9fa48("7025"), 'admin/dashboard/topics'), stryMutAct_9fa48("7026") ? {} : (stryCov_9fa48("7026"), {
      set: stryMutAct_9fa48("7027") ? "" : (stryCov_9fa48("7027"), 'topics'),
      query: req.query,
      stats,
      summary,
      topics: topicData
    }));
  }
};
dashboardController.getSearches = async (req, res) => {
  if (stryMutAct_9fa48("7028")) {
    {}
  } else {
    stryCov_9fa48("7028");
    const searches = await db.getSortedSetRevRangeWithScores(stryMutAct_9fa48("7029") ? "" : (stryCov_9fa48("7029"), 'searches:all'), 0, 99);
    res.render(stryMutAct_9fa48("7030") ? "" : (stryCov_9fa48("7030"), 'admin/dashboard/searches'), stryMutAct_9fa48("7031") ? {} : (stryCov_9fa48("7031"), {
      searches: searches.map(stryMutAct_9fa48("7032") ? () => undefined : (stryCov_9fa48("7032"), s => stryMutAct_9fa48("7033") ? {} : (stryCov_9fa48("7033"), {
        value: validator.escape(String(s.value)),
        score: s.score
      })))
    }));
  }
};