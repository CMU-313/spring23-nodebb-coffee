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
const sitemap = require('../sitemap');
const meta = require('../meta');
const sitemapController = module.exports;
sitemapController.render = async function (req, res, next) {
  if (stryMutAct_9fa48("11156")) {
    {}
  } else {
    stryCov_9fa48("11156");
    if (stryMutAct_9fa48("11158") ? false : stryMutAct_9fa48("11157") ? true : (stryCov_9fa48("11157", "11158"), meta.config[stryMutAct_9fa48("11159") ? "" : (stryCov_9fa48("11159"), 'feeds:disableSitemap')])) {
      if (stryMutAct_9fa48("11160")) {
        {}
      } else {
        stryCov_9fa48("11160");
        return setImmediate(next);
      }
    }
    const tplData = await sitemap.render();
    const xml = await req.app.renderAsync(stryMutAct_9fa48("11161") ? "" : (stryCov_9fa48("11161"), 'sitemap'), tplData);
    res.header(stryMutAct_9fa48("11162") ? "" : (stryCov_9fa48("11162"), 'Content-Type'), stryMutAct_9fa48("11163") ? "" : (stryCov_9fa48("11163"), 'application/xml'));
    res.send(xml);
  }
};
sitemapController.getPages = function (req, res, next) {
  if (stryMutAct_9fa48("11164")) {
    {}
  } else {
    stryCov_9fa48("11164");
    sendSitemap(sitemap.getPages, res, next);
  }
};
sitemapController.getCategories = function (req, res, next) {
  if (stryMutAct_9fa48("11165")) {
    {}
  } else {
    stryCov_9fa48("11165");
    sendSitemap(sitemap.getCategories, res, next);
  }
};
sitemapController.getTopicPage = function (req, res, next) {
  if (stryMutAct_9fa48("11166")) {
    {}
  } else {
    stryCov_9fa48("11166");
    sendSitemap(stryMutAct_9fa48("11167") ? () => undefined : (stryCov_9fa48("11167"), async () => await sitemap.getTopicPage(parseInt(req.params[0], 10))), res, next);
  }
};
async function sendSitemap(method, res, callback) {
  if (stryMutAct_9fa48("11168")) {
    {}
  } else {
    stryCov_9fa48("11168");
    if (stryMutAct_9fa48("11170") ? false : stryMutAct_9fa48("11169") ? true : (stryCov_9fa48("11169", "11170"), meta.config[stryMutAct_9fa48("11171") ? "" : (stryCov_9fa48("11171"), 'feeds:disableSitemap')])) {
      if (stryMutAct_9fa48("11172")) {
        {}
      } else {
        stryCov_9fa48("11172");
        return setImmediate(callback);
      }
    }
    const xml = await method();
    if (stryMutAct_9fa48("11175") ? false : stryMutAct_9fa48("11174") ? true : stryMutAct_9fa48("11173") ? xml : (stryCov_9fa48("11173", "11174", "11175"), !xml)) {
      if (stryMutAct_9fa48("11176")) {
        {}
      } else {
        stryCov_9fa48("11176");
        return callback();
      }
    }
    res.header(stryMutAct_9fa48("11177") ? "" : (stryCov_9fa48("11177"), 'Content-Type'), stryMutAct_9fa48("11178") ? "" : (stryCov_9fa48("11178"), 'application/xml'));
    res.send(xml);
  }
}