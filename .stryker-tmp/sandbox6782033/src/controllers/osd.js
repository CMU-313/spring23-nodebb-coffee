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
const xml = require('xml');
const nconf = require('nconf');
const plugins = require('../plugins');
const meta = require('../meta');
module.exports.handle = function (req, res, next) {
  if (stryMutAct_9fa48("10759")) {
    {}
  } else {
    stryCov_9fa48("10759");
    if (stryMutAct_9fa48("10761") ? false : stryMutAct_9fa48("10760") ? true : (stryCov_9fa48("10760", "10761"), plugins.hooks.hasListeners(stryMutAct_9fa48("10762") ? "" : (stryCov_9fa48("10762"), 'filter:search.query')))) {
      if (stryMutAct_9fa48("10763")) {
        {}
      } else {
        stryCov_9fa48("10763");
        res.type(stryMutAct_9fa48("10764") ? "" : (stryCov_9fa48("10764"), 'application/opensearchdescription+xml')).send(generateXML());
      }
    } else {
      if (stryMutAct_9fa48("10765")) {
        {}
      } else {
        stryCov_9fa48("10765");
        next();
      }
    }
  }
};
function generateXML() {
  if (stryMutAct_9fa48("10766")) {
    {}
  } else {
    stryCov_9fa48("10766");
    return xml(stryMutAct_9fa48("10767") ? [] : (stryCov_9fa48("10767"), [stryMutAct_9fa48("10768") ? {} : (stryCov_9fa48("10768"), {
      OpenSearchDescription: stryMutAct_9fa48("10769") ? [] : (stryCov_9fa48("10769"), [stryMutAct_9fa48("10770") ? {} : (stryCov_9fa48("10770"), {
        _attr: stryMutAct_9fa48("10771") ? {} : (stryCov_9fa48("10771"), {
          xmlns: stryMutAct_9fa48("10772") ? "" : (stryCov_9fa48("10772"), 'http://a9.com/-/spec/opensearch/1.1/'),
          'xmlns:moz': stryMutAct_9fa48("10773") ? "" : (stryCov_9fa48("10773"), 'http://www.mozilla.org/2006/browser/search/')
        })
      }), stryMutAct_9fa48("10774") ? {} : (stryCov_9fa48("10774"), {
        ShortName: trimToLength(String(stryMutAct_9fa48("10777") ? (meta.config.title || meta.config.browserTitle) && 'NodeBB' : stryMutAct_9fa48("10776") ? false : stryMutAct_9fa48("10775") ? true : (stryCov_9fa48("10775", "10776", "10777"), (stryMutAct_9fa48("10779") ? meta.config.title && meta.config.browserTitle : stryMutAct_9fa48("10778") ? false : (stryCov_9fa48("10778", "10779"), meta.config.title || meta.config.browserTitle)) || (stryMutAct_9fa48("10780") ? "" : (stryCov_9fa48("10780"), 'NodeBB')))), 16)
      }), stryMutAct_9fa48("10781") ? {} : (stryCov_9fa48("10781"), {
        Description: trimToLength(String(stryMutAct_9fa48("10784") ? meta.config.description && '' : stryMutAct_9fa48("10783") ? false : stryMutAct_9fa48("10782") ? true : (stryCov_9fa48("10782", "10783", "10784"), meta.config.description || (stryMutAct_9fa48("10785") ? "Stryker was here!" : (stryCov_9fa48("10785"), '')))), 1024)
      }), stryMutAct_9fa48("10786") ? {} : (stryCov_9fa48("10786"), {
        InputEncoding: stryMutAct_9fa48("10787") ? "" : (stryCov_9fa48("10787"), 'UTF-8')
      }), stryMutAct_9fa48("10788") ? {} : (stryCov_9fa48("10788"), {
        Image: stryMutAct_9fa48("10789") ? [] : (stryCov_9fa48("10789"), [stryMutAct_9fa48("10790") ? {} : (stryCov_9fa48("10790"), {
          _attr: stryMutAct_9fa48("10791") ? {} : (stryCov_9fa48("10791"), {
            width: stryMutAct_9fa48("10792") ? "" : (stryCov_9fa48("10792"), '16'),
            height: stryMutAct_9fa48("10793") ? "" : (stryCov_9fa48("10793"), '16'),
            type: stryMutAct_9fa48("10794") ? "" : (stryCov_9fa48("10794"), 'image/x-icon')
          })
        }), stryMutAct_9fa48("10795") ? `` : (stryCov_9fa48("10795"), `${nconf.get(stryMutAct_9fa48("10796") ? "" : (stryCov_9fa48("10796"), 'url'))}/favicon.ico`)])
      }), stryMutAct_9fa48("10797") ? {} : (stryCov_9fa48("10797"), {
        Url: stryMutAct_9fa48("10798") ? {} : (stryCov_9fa48("10798"), {
          _attr: stryMutAct_9fa48("10799") ? {} : (stryCov_9fa48("10799"), {
            type: stryMutAct_9fa48("10800") ? "" : (stryCov_9fa48("10800"), 'text/html'),
            method: stryMutAct_9fa48("10801") ? "" : (stryCov_9fa48("10801"), 'get'),
            template: stryMutAct_9fa48("10802") ? `` : (stryCov_9fa48("10802"), `${nconf.get(stryMutAct_9fa48("10803") ? "" : (stryCov_9fa48("10803"), 'url'))}/search?term={searchTerms}&in=titlesposts`)
          })
        })
      }), stryMutAct_9fa48("10804") ? {} : (stryCov_9fa48("10804"), {
        'moz:SearchForm': stryMutAct_9fa48("10805") ? `` : (stryCov_9fa48("10805"), `${nconf.get(stryMutAct_9fa48("10806") ? "" : (stryCov_9fa48("10806"), 'url'))}/search`)
      })])
    })]), stryMutAct_9fa48("10807") ? {} : (stryCov_9fa48("10807"), {
      declaration: stryMutAct_9fa48("10808") ? false : (stryCov_9fa48("10808"), true),
      indent: stryMutAct_9fa48("10809") ? "" : (stryCov_9fa48("10809"), '\t')
    }));
  }
}
function trimToLength(string, length) {
  if (stryMutAct_9fa48("10810")) {
    {}
  } else {
    stryCov_9fa48("10810");
    return stryMutAct_9fa48("10813") ? string.substring(0, length).trim() : stryMutAct_9fa48("10812") ? string.trim().trim() : stryMutAct_9fa48("10811") ? string.trim().substring(0, length) : (stryCov_9fa48("10811", "10812", "10813"), string.trim().substring(0, length).trim());
  }
}