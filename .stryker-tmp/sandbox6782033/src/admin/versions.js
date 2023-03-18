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
const request = require('request');
const meta = require('../meta');
let versionCache = stryMutAct_9fa48("102") ? "Stryker was here!" : (stryCov_9fa48("102"), '');
let versionCacheLastModified = stryMutAct_9fa48("103") ? "Stryker was here!" : (stryCov_9fa48("103"), '');
const isPrerelease = stryMutAct_9fa48("113") ? /^v?\d+\.\d+\.\d+-.$/ : stryMutAct_9fa48("112") ? /^v?\d+\.\d+\.\D+-.+$/ : stryMutAct_9fa48("111") ? /^v?\d+\.\d+\.\d-.+$/ : stryMutAct_9fa48("110") ? /^v?\d+\.\D+\.\d+-.+$/ : stryMutAct_9fa48("109") ? /^v?\d+\.\d\.\d+-.+$/ : stryMutAct_9fa48("108") ? /^v?\D+\.\d+\.\d+-.+$/ : stryMutAct_9fa48("107") ? /^v?\d\.\d+\.\d+-.+$/ : stryMutAct_9fa48("106") ? /^v\d+\.\d+\.\d+-.+$/ : stryMutAct_9fa48("105") ? /^v?\d+\.\d+\.\d+-.+/ : stryMutAct_9fa48("104") ? /v?\d+\.\d+\.\d+-.+$/ : (stryCov_9fa48("104", "105", "106", "107", "108", "109", "110", "111", "112", "113"), /^v?\d+\.\d+\.\d+-.+$/);
function getLatestVersion(callback) {
  if (stryMutAct_9fa48("114")) {
    {}
  } else {
    stryCov_9fa48("114");
    const headers = stryMutAct_9fa48("115") ? {} : (stryCov_9fa48("115"), {
      Accept: stryMutAct_9fa48("116") ? "" : (stryCov_9fa48("116"), 'application/vnd.github.v3+json'),
      'User-Agent': encodeURIComponent(stryMutAct_9fa48("117") ? `` : (stryCov_9fa48("117"), `NodeBB Admin Control Panel/${meta.config.title}`))
    });
    if (stryMutAct_9fa48("119") ? false : stryMutAct_9fa48("118") ? true : (stryCov_9fa48("118", "119"), versionCacheLastModified)) {
      if (stryMutAct_9fa48("120")) {
        {}
      } else {
        stryCov_9fa48("120");
        headers[stryMutAct_9fa48("121") ? "" : (stryCov_9fa48("121"), 'If-Modified-Since')] = versionCacheLastModified;
      }
    }
    request(stryMutAct_9fa48("122") ? "" : (stryCov_9fa48("122"), 'https://api.github.com/repos/NodeBB/NodeBB/releases/latest'), stryMutAct_9fa48("123") ? {} : (stryCov_9fa48("123"), {
      json: stryMutAct_9fa48("124") ? false : (stryCov_9fa48("124"), true),
      headers: headers,
      timeout: 2000
    }), (err, res, latestRelease) => {
      if (stryMutAct_9fa48("125")) {
        {}
      } else {
        stryCov_9fa48("125");
        if (stryMutAct_9fa48("127") ? false : stryMutAct_9fa48("126") ? true : (stryCov_9fa48("126", "127"), err)) {
          if (stryMutAct_9fa48("128")) {
            {}
          } else {
            stryCov_9fa48("128");
            return callback(err);
          }
        }
        if (stryMutAct_9fa48("131") ? res.statusCode !== 304 : stryMutAct_9fa48("130") ? false : stryMutAct_9fa48("129") ? true : (stryCov_9fa48("129", "130", "131"), res.statusCode === 304)) {
          if (stryMutAct_9fa48("132")) {
            {}
          } else {
            stryCov_9fa48("132");
            return callback(null, versionCache);
          }
        }
        if (stryMutAct_9fa48("135") ? res.statusCode === 200 : stryMutAct_9fa48("134") ? false : stryMutAct_9fa48("133") ? true : (stryCov_9fa48("133", "134", "135"), res.statusCode !== 200)) {
          if (stryMutAct_9fa48("136")) {
            {}
          } else {
            stryCov_9fa48("136");
            return callback(new Error(res.statusMessage));
          }
        }
        if (stryMutAct_9fa48("139") ? !latestRelease && !latestRelease.tag_name : stryMutAct_9fa48("138") ? false : stryMutAct_9fa48("137") ? true : (stryCov_9fa48("137", "138", "139"), (stryMutAct_9fa48("140") ? latestRelease : (stryCov_9fa48("140"), !latestRelease)) || (stryMutAct_9fa48("141") ? latestRelease.tag_name : (stryCov_9fa48("141"), !latestRelease.tag_name)))) {
          if (stryMutAct_9fa48("142")) {
            {}
          } else {
            stryCov_9fa48("142");
            return callback(new Error(stryMutAct_9fa48("143") ? "" : (stryCov_9fa48("143"), '[[error:cant-get-latest-release]]')));
          }
        }
        const tagName = latestRelease.tag_name.replace(stryMutAct_9fa48("144") ? /v/ : (stryCov_9fa48("144"), /^v/), stryMutAct_9fa48("145") ? "Stryker was here!" : (stryCov_9fa48("145"), ''));
        versionCache = tagName;
        versionCacheLastModified = res.headers[stryMutAct_9fa48("146") ? "" : (stryCov_9fa48("146"), 'last-modified')];
        callback(null, versionCache);
      }
    });
  }
}
exports.getLatestVersion = getLatestVersion;
exports.isPrerelease = isPrerelease;
require('../promisify')(exports);