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
const url = require('url');
const plugins = require('../plugins');
const meta = require('../meta');
const user = require('../user');
function adminHomePageRoute() {
  if (stryMutAct_9fa48("10067")) {
    {}
  } else {
    stryCov_9fa48("10067");
    return (stryMutAct_9fa48("10070") ? (meta.config.homePageRoute === 'custom' ? meta.config.homePageCustom : meta.config.homePageRoute) && 'categories' : stryMutAct_9fa48("10069") ? false : stryMutAct_9fa48("10068") ? true : (stryCov_9fa48("10068", "10069", "10070"), ((stryMutAct_9fa48("10073") ? meta.config.homePageRoute !== 'custom' : stryMutAct_9fa48("10072") ? false : stryMutAct_9fa48("10071") ? true : (stryCov_9fa48("10071", "10072", "10073"), meta.config.homePageRoute === (stryMutAct_9fa48("10074") ? "" : (stryCov_9fa48("10074"), 'custom')))) ? meta.config.homePageCustom : meta.config.homePageRoute) || (stryMutAct_9fa48("10075") ? "" : (stryCov_9fa48("10075"), 'categories')))).replace(stryMutAct_9fa48("10076") ? /\// : (stryCov_9fa48("10076"), /^\//), stryMutAct_9fa48("10077") ? "Stryker was here!" : (stryCov_9fa48("10077"), ''));
  }
}
async function getUserHomeRoute(uid) {
  if (stryMutAct_9fa48("10078")) {
    {}
  } else {
    stryCov_9fa48("10078");
    const settings = await user.getSettings(uid);
    let route = adminHomePageRoute();
    if (stryMutAct_9fa48("10081") ? settings.homePageRoute !== 'undefined' || settings.homePageRoute !== 'none' : stryMutAct_9fa48("10080") ? false : stryMutAct_9fa48("10079") ? true : (stryCov_9fa48("10079", "10080", "10081"), (stryMutAct_9fa48("10083") ? settings.homePageRoute === 'undefined' : stryMutAct_9fa48("10082") ? true : (stryCov_9fa48("10082", "10083"), settings.homePageRoute !== (stryMutAct_9fa48("10084") ? "" : (stryCov_9fa48("10084"), 'undefined')))) && (stryMutAct_9fa48("10086") ? settings.homePageRoute === 'none' : stryMutAct_9fa48("10085") ? true : (stryCov_9fa48("10085", "10086"), settings.homePageRoute !== (stryMutAct_9fa48("10087") ? "" : (stryCov_9fa48("10087"), 'none')))))) {
      if (stryMutAct_9fa48("10088")) {
        {}
      } else {
        stryCov_9fa48("10088");
        route = (stryMutAct_9fa48("10091") ? settings.homePageRoute && route : stryMutAct_9fa48("10090") ? false : stryMutAct_9fa48("10089") ? true : (stryCov_9fa48("10089", "10090", "10091"), settings.homePageRoute || route)).replace(stryMutAct_9fa48("10093") ? /^\// : stryMutAct_9fa48("10092") ? /\/+/ : (stryCov_9fa48("10092", "10093"), /^\/+/), stryMutAct_9fa48("10094") ? "Stryker was here!" : (stryCov_9fa48("10094"), ''));
      }
    }
    return route;
  }
}
async function rewrite(req, res, next) {
  if (stryMutAct_9fa48("10095")) {
    {}
  } else {
    stryCov_9fa48("10095");
    if (stryMutAct_9fa48("10098") ? req.path !== '/' && req.path !== '/api/' || req.path !== '/api' : stryMutAct_9fa48("10097") ? false : stryMutAct_9fa48("10096") ? true : (stryCov_9fa48("10096", "10097", "10098"), (stryMutAct_9fa48("10100") ? req.path !== '/' || req.path !== '/api/' : stryMutAct_9fa48("10099") ? true : (stryCov_9fa48("10099", "10100"), (stryMutAct_9fa48("10102") ? req.path === '/' : stryMutAct_9fa48("10101") ? true : (stryCov_9fa48("10101", "10102"), req.path !== (stryMutAct_9fa48("10103") ? "" : (stryCov_9fa48("10103"), '/')))) && (stryMutAct_9fa48("10105") ? req.path === '/api/' : stryMutAct_9fa48("10104") ? true : (stryCov_9fa48("10104", "10105"), req.path !== (stryMutAct_9fa48("10106") ? "" : (stryCov_9fa48("10106"), '/api/')))))) && (stryMutAct_9fa48("10108") ? req.path === '/api' : stryMutAct_9fa48("10107") ? true : (stryCov_9fa48("10107", "10108"), req.path !== (stryMutAct_9fa48("10109") ? "" : (stryCov_9fa48("10109"), '/api')))))) {
      if (stryMutAct_9fa48("10110")) {
        {}
      } else {
        stryCov_9fa48("10110");
        return next();
      }
    }
    let route = adminHomePageRoute();
    if (stryMutAct_9fa48("10112") ? false : stryMutAct_9fa48("10111") ? true : (stryCov_9fa48("10111", "10112"), meta.config.allowUserHomePage)) {
      if (stryMutAct_9fa48("10113")) {
        {}
      } else {
        stryCov_9fa48("10113");
        route = await getUserHomeRoute(req.uid, next);
      }
    }
    let parsedUrl;
    try {
      if (stryMutAct_9fa48("10114")) {
        {}
      } else {
        stryCov_9fa48("10114");
        parsedUrl = url.parse(route, stryMutAct_9fa48("10115") ? false : (stryCov_9fa48("10115"), true));
      }
    } catch (err) {
      if (stryMutAct_9fa48("10116")) {
        {}
      } else {
        stryCov_9fa48("10116");
        return next(err);
      }
    }
    const {
      pathname
    } = parsedUrl;
    const hook = stryMutAct_9fa48("10117") ? `` : (stryCov_9fa48("10117"), `action:homepage.get:${pathname}`);
    if (stryMutAct_9fa48("10120") ? false : stryMutAct_9fa48("10119") ? true : stryMutAct_9fa48("10118") ? plugins.hooks.hasListeners(hook) : (stryCov_9fa48("10118", "10119", "10120"), !plugins.hooks.hasListeners(hook))) {
      if (stryMutAct_9fa48("10121")) {
        {}
      } else {
        stryCov_9fa48("10121");
        req.url = stryMutAct_9fa48("10122") ? req.path + (!req.path.endsWith('/') ? '/' : '') - pathname : (stryCov_9fa48("10122"), (stryMutAct_9fa48("10123") ? req.path - (!req.path.endsWith('/') ? '/' : '') : (stryCov_9fa48("10123"), req.path + ((stryMutAct_9fa48("10124") ? req.path.endsWith('/') : (stryCov_9fa48("10124"), !(stryMutAct_9fa48("10125") ? req.path.startsWith('/') : (stryCov_9fa48("10125"), req.path.endsWith(stryMutAct_9fa48("10126") ? "" : (stryCov_9fa48("10126"), '/')))))) ? stryMutAct_9fa48("10127") ? "" : (stryCov_9fa48("10127"), '/') : stryMutAct_9fa48("10128") ? "Stryker was here!" : (stryCov_9fa48("10128"), '')))) + pathname);
      }
    } else {
      if (stryMutAct_9fa48("10129")) {
        {}
      } else {
        stryCov_9fa48("10129");
        res.locals.homePageRoute = pathname;
      }
    }
    req.query = Object.assign(parsedUrl.query, req.query);
    next();
  }
}
exports.rewrite = rewrite;
function pluginHook(req, res, next) {
  if (stryMutAct_9fa48("10130")) {
    {}
  } else {
    stryCov_9fa48("10130");
    const hook = stryMutAct_9fa48("10131") ? `` : (stryCov_9fa48("10131"), `action:homepage.get:${res.locals.homePageRoute}`);
    plugins.hooks.fire(hook, stryMutAct_9fa48("10132") ? {} : (stryCov_9fa48("10132"), {
      req: req,
      res: res,
      next: next
    }));
  }
}
exports.pluginHook = pluginHook;