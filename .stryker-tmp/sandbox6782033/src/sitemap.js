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
const {
  SitemapStream,
  streamToPromise
} = require('sitemap');
const nconf = require('nconf');
const db = require('./database');
const categories = require('./categories');
const topics = require('./topics');
const privileges = require('./privileges');
const meta = require('./meta');
const plugins = require('./plugins');
const utils = require('./utils');
const sitemap = module.exports;
sitemap.maps = stryMutAct_9fa48("34513") ? {} : (stryCov_9fa48("34513"), {
  topics: stryMutAct_9fa48("34514") ? ["Stryker was here"] : (stryCov_9fa48("34514"), [])
});
sitemap.render = async function () {
  if (stryMutAct_9fa48("34515")) {
    {}
  } else {
    stryCov_9fa48("34515");
    const topicsPerPage = meta.config.sitemapTopics;
    const returnData = stryMutAct_9fa48("34516") ? {} : (stryCov_9fa48("34516"), {
      url: nconf.get(stryMutAct_9fa48("34517") ? "" : (stryCov_9fa48("34517"), 'url')),
      topics: stryMutAct_9fa48("34518") ? ["Stryker was here"] : (stryCov_9fa48("34518"), [])
    });
    const [topicCount, categories, pages] = await Promise.all(stryMutAct_9fa48("34519") ? [] : (stryCov_9fa48("34519"), [db.getObjectField(stryMutAct_9fa48("34520") ? "" : (stryCov_9fa48("34520"), 'global'), stryMutAct_9fa48("34521") ? "" : (stryCov_9fa48("34521"), 'topicCount')), getSitemapCategories(), getSitemapPages()]));
    returnData.categories = stryMutAct_9fa48("34525") ? categories.length <= 0 : stryMutAct_9fa48("34524") ? categories.length >= 0 : stryMutAct_9fa48("34523") ? false : stryMutAct_9fa48("34522") ? true : (stryCov_9fa48("34522", "34523", "34524", "34525"), categories.length > 0);
    returnData.pages = stryMutAct_9fa48("34529") ? pages.length <= 0 : stryMutAct_9fa48("34528") ? pages.length >= 0 : stryMutAct_9fa48("34527") ? false : stryMutAct_9fa48("34526") ? true : (stryCov_9fa48("34526", "34527", "34528", "34529"), pages.length > 0);
    const numPages = Math.ceil(Math.max(0, stryMutAct_9fa48("34530") ? topicCount * topicsPerPage : (stryCov_9fa48("34530"), topicCount / topicsPerPage)));
    for (let x = 1; stryMutAct_9fa48("34533") ? x > numPages : stryMutAct_9fa48("34532") ? x < numPages : stryMutAct_9fa48("34531") ? false : (stryCov_9fa48("34531", "34532", "34533"), x <= numPages); stryMutAct_9fa48("34534") ? x -= 1 : (stryCov_9fa48("34534"), x += 1)) {
      if (stryMutAct_9fa48("34535")) {
        {}
      } else {
        stryCov_9fa48("34535");
        returnData.topics.push(x);
      }
    }
    return returnData;
  }
};
async function getSitemapPages() {
  if (stryMutAct_9fa48("34536")) {
    {}
  } else {
    stryCov_9fa48("34536");
    const urls = stryMutAct_9fa48("34537") ? [] : (stryCov_9fa48("34537"), [stryMutAct_9fa48("34538") ? {} : (stryCov_9fa48("34538"), {
      url: stryMutAct_9fa48("34539") ? "Stryker was here!" : (stryCov_9fa48("34539"), ''),
      changefreq: stryMutAct_9fa48("34540") ? "" : (stryCov_9fa48("34540"), 'weekly'),
      priority: 0.6
    }), stryMutAct_9fa48("34541") ? {} : (stryCov_9fa48("34541"), {
      url: stryMutAct_9fa48("34542") ? `` : (stryCov_9fa48("34542"), `${nconf.get(stryMutAct_9fa48("34543") ? "" : (stryCov_9fa48("34543"), 'relative_path'))}/recent`),
      changefreq: stryMutAct_9fa48("34544") ? "" : (stryCov_9fa48("34544"), 'daily'),
      priority: 0.4
    }), stryMutAct_9fa48("34545") ? {} : (stryCov_9fa48("34545"), {
      url: stryMutAct_9fa48("34546") ? `` : (stryCov_9fa48("34546"), `${nconf.get(stryMutAct_9fa48("34547") ? "" : (stryCov_9fa48("34547"), 'relative_path'))}/users`),
      changefreq: stryMutAct_9fa48("34548") ? "" : (stryCov_9fa48("34548"), 'daily'),
      priority: 0.4
    }), stryMutAct_9fa48("34549") ? {} : (stryCov_9fa48("34549"), {
      url: stryMutAct_9fa48("34550") ? `` : (stryCov_9fa48("34550"), `${nconf.get(stryMutAct_9fa48("34551") ? "" : (stryCov_9fa48("34551"), 'relative_path'))}/groups`),
      changefreq: stryMutAct_9fa48("34552") ? "" : (stryCov_9fa48("34552"), 'daily'),
      priority: 0.4
    })]);
    const data = await plugins.hooks.fire(stryMutAct_9fa48("34553") ? "" : (stryCov_9fa48("34553"), 'filter:sitemap.getPages'), stryMutAct_9fa48("34554") ? {} : (stryCov_9fa48("34554"), {
      urls: urls
    }));
    return data.urls;
  }
}
sitemap.getPages = async function () {
  if (stryMutAct_9fa48("34555")) {
    {}
  } else {
    stryCov_9fa48("34555");
    if (stryMutAct_9fa48("34558") ? sitemap.maps.pages || Date.now() < sitemap.maps.pagesCacheExpireTimestamp : stryMutAct_9fa48("34557") ? false : stryMutAct_9fa48("34556") ? true : (stryCov_9fa48("34556", "34557", "34558"), sitemap.maps.pages && (stryMutAct_9fa48("34561") ? Date.now() >= sitemap.maps.pagesCacheExpireTimestamp : stryMutAct_9fa48("34560") ? Date.now() <= sitemap.maps.pagesCacheExpireTimestamp : stryMutAct_9fa48("34559") ? true : (stryCov_9fa48("34559", "34560", "34561"), Date.now() < sitemap.maps.pagesCacheExpireTimestamp)))) {
      if (stryMutAct_9fa48("34562")) {
        {}
      } else {
        stryCov_9fa48("34562");
        return sitemap.maps.pages;
      }
    }
    const urls = await getSitemapPages();
    if (stryMutAct_9fa48("34565") ? false : stryMutAct_9fa48("34564") ? true : stryMutAct_9fa48("34563") ? urls.length : (stryCov_9fa48("34563", "34564", "34565"), !urls.length)) {
      if (stryMutAct_9fa48("34566")) {
        {}
      } else {
        stryCov_9fa48("34566");
        sitemap.maps.pages = stryMutAct_9fa48("34567") ? "Stryker was here!" : (stryCov_9fa48("34567"), '');
        sitemap.maps.pagesCacheExpireTimestamp = stryMutAct_9fa48("34568") ? Date.now() - 1000 * 60 * 60 * 24 : (stryCov_9fa48("34568"), Date.now() + (stryMutAct_9fa48("34569") ? 1000 * 60 * 60 / 24 : (stryCov_9fa48("34569"), (stryMutAct_9fa48("34570") ? 1000 * 60 / 60 : (stryCov_9fa48("34570"), (stryMutAct_9fa48("34571") ? 1000 / 60 : (stryCov_9fa48("34571"), 1000 * 60)) * 60)) * 24)));
        return sitemap.maps.pages;
      }
    }
    sitemap.maps.pages = await urlsToSitemap(urls);
    sitemap.maps.pagesCacheExpireTimestamp = stryMutAct_9fa48("34572") ? Date.now() - 1000 * 60 * 60 * 24 : (stryCov_9fa48("34572"), Date.now() + (stryMutAct_9fa48("34573") ? 1000 * 60 * 60 / 24 : (stryCov_9fa48("34573"), (stryMutAct_9fa48("34574") ? 1000 * 60 / 60 : (stryCov_9fa48("34574"), (stryMutAct_9fa48("34575") ? 1000 / 60 : (stryCov_9fa48("34575"), 1000 * 60)) * 60)) * 24)));
    return sitemap.maps.pages;
  }
};
async function getSitemapCategories() {
  if (stryMutAct_9fa48("34576")) {
    {}
  } else {
    stryCov_9fa48("34576");
    const cids = await categories.getCidsByPrivilege(stryMutAct_9fa48("34577") ? "" : (stryCov_9fa48("34577"), 'categories:cid'), 0, stryMutAct_9fa48("34578") ? "" : (stryCov_9fa48("34578"), 'find'));
    return await categories.getCategoriesFields(cids, stryMutAct_9fa48("34579") ? [] : (stryCov_9fa48("34579"), [stryMutAct_9fa48("34580") ? "" : (stryCov_9fa48("34580"), 'slug')]));
  }
}
sitemap.getCategories = async function () {
  if (stryMutAct_9fa48("34581")) {
    {}
  } else {
    stryCov_9fa48("34581");
    if (stryMutAct_9fa48("34584") ? sitemap.maps.categories || Date.now() < sitemap.maps.categoriesCacheExpireTimestamp : stryMutAct_9fa48("34583") ? false : stryMutAct_9fa48("34582") ? true : (stryCov_9fa48("34582", "34583", "34584"), sitemap.maps.categories && (stryMutAct_9fa48("34587") ? Date.now() >= sitemap.maps.categoriesCacheExpireTimestamp : stryMutAct_9fa48("34586") ? Date.now() <= sitemap.maps.categoriesCacheExpireTimestamp : stryMutAct_9fa48("34585") ? true : (stryCov_9fa48("34585", "34586", "34587"), Date.now() < sitemap.maps.categoriesCacheExpireTimestamp)))) {
      if (stryMutAct_9fa48("34588")) {
        {}
      } else {
        stryCov_9fa48("34588");
        return sitemap.maps.categories;
      }
    }
    const categoryUrls = stryMutAct_9fa48("34589") ? ["Stryker was here"] : (stryCov_9fa48("34589"), []);
    const categoriesData = await getSitemapCategories();
    categoriesData.forEach(category => {
      if (stryMutAct_9fa48("34590")) {
        {}
      } else {
        stryCov_9fa48("34590");
        if (stryMutAct_9fa48("34592") ? false : stryMutAct_9fa48("34591") ? true : (stryCov_9fa48("34591", "34592"), category)) {
          if (stryMutAct_9fa48("34593")) {
            {}
          } else {
            stryCov_9fa48("34593");
            categoryUrls.push(stryMutAct_9fa48("34594") ? {} : (stryCov_9fa48("34594"), {
              url: stryMutAct_9fa48("34595") ? `` : (stryCov_9fa48("34595"), `${nconf.get(stryMutAct_9fa48("34596") ? "" : (stryCov_9fa48("34596"), 'relative_path'))}/category/${category.slug}`),
              changefreq: stryMutAct_9fa48("34597") ? "" : (stryCov_9fa48("34597"), 'weekly'),
              priority: 0.4
            }));
          }
        }
      }
    });
    if (stryMutAct_9fa48("34600") ? false : stryMutAct_9fa48("34599") ? true : stryMutAct_9fa48("34598") ? categoryUrls.length : (stryCov_9fa48("34598", "34599", "34600"), !categoryUrls.length)) {
      if (stryMutAct_9fa48("34601")) {
        {}
      } else {
        stryCov_9fa48("34601");
        sitemap.maps.categories = stryMutAct_9fa48("34602") ? "Stryker was here!" : (stryCov_9fa48("34602"), '');
        sitemap.maps.categoriesCacheExpireTimestamp = stryMutAct_9fa48("34603") ? Date.now() - 1000 * 60 * 60 * 24 : (stryCov_9fa48("34603"), Date.now() + (stryMutAct_9fa48("34604") ? 1000 * 60 * 60 / 24 : (stryCov_9fa48("34604"), (stryMutAct_9fa48("34605") ? 1000 * 60 / 60 : (stryCov_9fa48("34605"), (stryMutAct_9fa48("34606") ? 1000 / 60 : (stryCov_9fa48("34606"), 1000 * 60)) * 60)) * 24)));
        return sitemap.maps.categories;
      }
    }
    sitemap.maps.categories = await urlsToSitemap(categoryUrls);
    sitemap.maps.categoriesCacheExpireTimestamp = stryMutAct_9fa48("34607") ? Date.now() - 1000 * 60 * 60 * 24 : (stryCov_9fa48("34607"), Date.now() + (stryMutAct_9fa48("34608") ? 1000 * 60 * 60 / 24 : (stryCov_9fa48("34608"), (stryMutAct_9fa48("34609") ? 1000 * 60 / 60 : (stryCov_9fa48("34609"), (stryMutAct_9fa48("34610") ? 1000 / 60 : (stryCov_9fa48("34610"), 1000 * 60)) * 60)) * 24)));
    return sitemap.maps.categories;
  }
};
sitemap.getTopicPage = async function (page) {
  if (stryMutAct_9fa48("34611")) {
    {}
  } else {
    stryCov_9fa48("34611");
    if (stryMutAct_9fa48("34615") ? parseInt(page, 10) > 0 : stryMutAct_9fa48("34614") ? parseInt(page, 10) < 0 : stryMutAct_9fa48("34613") ? false : stryMutAct_9fa48("34612") ? true : (stryCov_9fa48("34612", "34613", "34614", "34615"), parseInt(page, 10) <= 0)) {
      if (stryMutAct_9fa48("34616")) {
        {}
      } else {
        stryCov_9fa48("34616");
        return;
      }
    }
    const numTopics = meta.config.sitemapTopics;
    const start = stryMutAct_9fa48("34617") ? (parseInt(page, 10) - 1) / numTopics : (stryCov_9fa48("34617"), (stryMutAct_9fa48("34618") ? parseInt(page, 10) + 1 : (stryCov_9fa48("34618"), parseInt(page, 10) - 1)) * numTopics);
    const stop = stryMutAct_9fa48("34619") ? start + numTopics + 1 : (stryCov_9fa48("34619"), (stryMutAct_9fa48("34620") ? start - numTopics : (stryCov_9fa48("34620"), start + numTopics)) - 1);
    if (stryMutAct_9fa48("34623") ? sitemap.maps.topics[page - 1] || Date.now() < sitemap.maps.topics[page - 1].cacheExpireTimestamp : stryMutAct_9fa48("34622") ? false : stryMutAct_9fa48("34621") ? true : (stryCov_9fa48("34621", "34622", "34623"), sitemap.maps.topics[stryMutAct_9fa48("34624") ? page + 1 : (stryCov_9fa48("34624"), page - 1)] && (stryMutAct_9fa48("34627") ? Date.now() >= sitemap.maps.topics[page - 1].cacheExpireTimestamp : stryMutAct_9fa48("34626") ? Date.now() <= sitemap.maps.topics[page - 1].cacheExpireTimestamp : stryMutAct_9fa48("34625") ? true : (stryCov_9fa48("34625", "34626", "34627"), Date.now() < sitemap.maps.topics[stryMutAct_9fa48("34628") ? page + 1 : (stryCov_9fa48("34628"), page - 1)].cacheExpireTimestamp)))) {
      if (stryMutAct_9fa48("34629")) {
        {}
      } else {
        stryCov_9fa48("34629");
        return sitemap.maps.topics[stryMutAct_9fa48("34630") ? page + 1 : (stryCov_9fa48("34630"), page - 1)].sm;
      }
    }
    const topicUrls = stryMutAct_9fa48("34631") ? ["Stryker was here"] : (stryCov_9fa48("34631"), []);
    let tids = await db.getSortedSetRange(stryMutAct_9fa48("34632") ? "" : (stryCov_9fa48("34632"), 'topics:tid'), start, stop);
    tids = await privileges.topics.filterTids(stryMutAct_9fa48("34633") ? "" : (stryCov_9fa48("34633"), 'topics:read'), tids, 0);
    const topicData = await topics.getTopicsFields(tids, stryMutAct_9fa48("34634") ? [] : (stryCov_9fa48("34634"), [stryMutAct_9fa48("34635") ? "" : (stryCov_9fa48("34635"), 'tid'), stryMutAct_9fa48("34636") ? "" : (stryCov_9fa48("34636"), 'title'), stryMutAct_9fa48("34637") ? "" : (stryCov_9fa48("34637"), 'slug'), stryMutAct_9fa48("34638") ? "" : (stryCov_9fa48("34638"), 'lastposttime')]));
    if (stryMutAct_9fa48("34641") ? false : stryMutAct_9fa48("34640") ? true : stryMutAct_9fa48("34639") ? topicData.length : (stryCov_9fa48("34639", "34640", "34641"), !topicData.length)) {
      if (stryMutAct_9fa48("34642")) {
        {}
      } else {
        stryCov_9fa48("34642");
        sitemap.maps.topics[stryMutAct_9fa48("34643") ? page + 1 : (stryCov_9fa48("34643"), page - 1)] = stryMutAct_9fa48("34644") ? {} : (stryCov_9fa48("34644"), {
          sm: stryMutAct_9fa48("34645") ? "Stryker was here!" : (stryCov_9fa48("34645"), ''),
          cacheExpireTimestamp: stryMutAct_9fa48("34646") ? Date.now() - 1000 * 60 * 60 * 24 : (stryCov_9fa48("34646"), Date.now() + (stryMutAct_9fa48("34647") ? 1000 * 60 * 60 / 24 : (stryCov_9fa48("34647"), (stryMutAct_9fa48("34648") ? 1000 * 60 / 60 : (stryCov_9fa48("34648"), (stryMutAct_9fa48("34649") ? 1000 / 60 : (stryCov_9fa48("34649"), 1000 * 60)) * 60)) * 24)))
        });
        return sitemap.maps.topics[stryMutAct_9fa48("34650") ? page + 1 : (stryCov_9fa48("34650"), page - 1)].sm;
      }
    }
    topicData.forEach(topic => {
      if (stryMutAct_9fa48("34651")) {
        {}
      } else {
        stryCov_9fa48("34651");
        if (stryMutAct_9fa48("34653") ? false : stryMutAct_9fa48("34652") ? true : (stryCov_9fa48("34652", "34653"), topic)) {
          if (stryMutAct_9fa48("34654")) {
            {}
          } else {
            stryCov_9fa48("34654");
            topicUrls.push(stryMutAct_9fa48("34655") ? {} : (stryCov_9fa48("34655"), {
              url: stryMutAct_9fa48("34656") ? `` : (stryCov_9fa48("34656"), `${nconf.get(stryMutAct_9fa48("34657") ? "" : (stryCov_9fa48("34657"), 'relative_path'))}/topic/${topic.slug}`),
              lastmodISO: utils.toISOString(topic.lastposttime),
              changefreq: stryMutAct_9fa48("34658") ? "" : (stryCov_9fa48("34658"), 'daily'),
              priority: 0.6
            }));
          }
        }
      }
    });
    sitemap.maps.topics[stryMutAct_9fa48("34659") ? page + 1 : (stryCov_9fa48("34659"), page - 1)] = stryMutAct_9fa48("34660") ? {} : (stryCov_9fa48("34660"), {
      sm: await urlsToSitemap(topicUrls),
      cacheExpireTimestamp: stryMutAct_9fa48("34661") ? Date.now() - 1000 * 60 * 60 * 24 : (stryCov_9fa48("34661"), Date.now() + (stryMutAct_9fa48("34662") ? 1000 * 60 * 60 / 24 : (stryCov_9fa48("34662"), (stryMutAct_9fa48("34663") ? 1000 * 60 / 60 : (stryCov_9fa48("34663"), (stryMutAct_9fa48("34664") ? 1000 / 60 : (stryCov_9fa48("34664"), 1000 * 60)) * 60)) * 24)))
    });
    return sitemap.maps.topics[stryMutAct_9fa48("34665") ? page + 1 : (stryCov_9fa48("34665"), page - 1)].sm;
  }
};
async function urlsToSitemap(urls) {
  if (stryMutAct_9fa48("34666")) {
    {}
  } else {
    stryCov_9fa48("34666");
    if (stryMutAct_9fa48("34669") ? false : stryMutAct_9fa48("34668") ? true : stryMutAct_9fa48("34667") ? urls.length : (stryCov_9fa48("34667", "34668", "34669"), !urls.length)) {
      if (stryMutAct_9fa48("34670")) {
        {}
      } else {
        stryCov_9fa48("34670");
        return stryMutAct_9fa48("34671") ? "Stryker was here!" : (stryCov_9fa48("34671"), '');
      }
    }
    const smStream = new SitemapStream(stryMutAct_9fa48("34672") ? {} : (stryCov_9fa48("34672"), {
      hostname: nconf.get(stryMutAct_9fa48("34673") ? "" : (stryCov_9fa48("34673"), 'url'))
    }));
    urls.forEach(stryMutAct_9fa48("34674") ? () => undefined : (stryCov_9fa48("34674"), url => smStream.write(url)));
    smStream.end();
    return (await streamToPromise(smStream)).toString();
  }
}
sitemap.clearCache = function () {
  if (stryMutAct_9fa48("34675")) {
    {}
  } else {
    stryCov_9fa48("34675");
    if (stryMutAct_9fa48("34677") ? false : stryMutAct_9fa48("34676") ? true : (stryCov_9fa48("34676", "34677"), sitemap.maps.pages)) {
      if (stryMutAct_9fa48("34678")) {
        {}
      } else {
        stryCov_9fa48("34678");
        sitemap.maps.pagesCacheExpireTimestamp = 0;
      }
    }
    if (stryMutAct_9fa48("34680") ? false : stryMutAct_9fa48("34679") ? true : (stryCov_9fa48("34679", "34680"), sitemap.maps.categories)) {
      if (stryMutAct_9fa48("34681")) {
        {}
      } else {
        stryCov_9fa48("34681");
        sitemap.maps.categoriesCacheExpireTimestamp = 0;
      }
    }
    sitemap.maps.topics.forEach(topicMap => {
      if (stryMutAct_9fa48("34682")) {
        {}
      } else {
        stryCov_9fa48("34682");
        topicMap.cacheExpireTimestamp = 0;
      }
    });
  }
};
require('./promisify')(sitemap);