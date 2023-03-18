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
const slugify = require('../slugify');
const meta = require('../meta');
const helpers = module.exports;
helpers.try = function (middleware) {
  if (stryMutAct_9fa48("25772")) {
    {}
  } else {
    stryCov_9fa48("25772");
    if (stryMutAct_9fa48("25775") ? middleware && middleware.constructor || middleware.constructor.name === 'AsyncFunction' : stryMutAct_9fa48("25774") ? false : stryMutAct_9fa48("25773") ? true : (stryCov_9fa48("25773", "25774", "25775"), (stryMutAct_9fa48("25777") ? middleware || middleware.constructor : stryMutAct_9fa48("25776") ? true : (stryCov_9fa48("25776", "25777"), middleware && middleware.constructor)) && (stryMutAct_9fa48("25779") ? middleware.constructor.name !== 'AsyncFunction' : stryMutAct_9fa48("25778") ? true : (stryCov_9fa48("25778", "25779"), middleware.constructor.name === (stryMutAct_9fa48("25780") ? "" : (stryCov_9fa48("25780"), 'AsyncFunction')))))) {
      if (stryMutAct_9fa48("25781")) {
        {}
      } else {
        stryCov_9fa48("25781");
        return async function (req, res, next) {
          if (stryMutAct_9fa48("25782")) {
            {}
          } else {
            stryCov_9fa48("25782");
            try {
              if (stryMutAct_9fa48("25783")) {
                {}
              } else {
                stryCov_9fa48("25783");
                await middleware(req, res, next);
              }
            } catch (err) {
              if (stryMutAct_9fa48("25784")) {
                {}
              } else {
                stryCov_9fa48("25784");
                next(err);
              }
            }
          }
        };
      }
    }
    return function (req, res, next) {
      if (stryMutAct_9fa48("25785")) {
        {}
      } else {
        stryCov_9fa48("25785");
        try {
          if (stryMutAct_9fa48("25786")) {
            {}
          } else {
            stryCov_9fa48("25786");
            middleware(req, res, next);
          }
        } catch (err) {
          if (stryMutAct_9fa48("25787")) {
            {}
          } else {
            stryCov_9fa48("25787");
            next(err);
          }
        }
      }
    };
  }
};
helpers.buildBodyClass = function (req, res, templateData = {}) {
  if (stryMutAct_9fa48("25788")) {
    {}
  } else {
    stryCov_9fa48("25788");
    const clean = req.path.replace(stryMutAct_9fa48("25789") ? /\/api/ : (stryCov_9fa48("25789"), /^\/api/), stryMutAct_9fa48("25790") ? "Stryker was here!" : (stryCov_9fa48("25790"), '')).replace(stryMutAct_9fa48("25792") ? /^\/|\//g : stryMutAct_9fa48("25791") ? /\/|\/$/g : (stryCov_9fa48("25791", "25792"), /^\/|\/$/g), stryMutAct_9fa48("25793") ? "Stryker was here!" : (stryCov_9fa48("25793"), ''));
    const parts = stryMutAct_9fa48("25794") ? clean.split('/') : (stryCov_9fa48("25794"), clean.split(stryMutAct_9fa48("25795") ? "" : (stryCov_9fa48("25795"), '/')).slice(0, 3));
    parts.forEach((p, index) => {
      if (stryMutAct_9fa48("25796")) {
        {}
      } else {
        stryCov_9fa48("25796");
        try {
          if (stryMutAct_9fa48("25797")) {
            {}
          } else {
            stryCov_9fa48("25797");
            p = slugify(decodeURIComponent(p));
          }
        } catch (err) {
          if (stryMutAct_9fa48("25798")) {
            {}
          } else {
            stryCov_9fa48("25798");
            winston.error(stryMutAct_9fa48("25799") ? `` : (stryCov_9fa48("25799"), `Error decoding URI: ${p}`));
            winston.error(err.stack);
            p = stryMutAct_9fa48("25800") ? "Stryker was here!" : (stryCov_9fa48("25800"), '');
          }
        }
        p = validator.escape(String(p));
        parts[index] = index ? stryMutAct_9fa48("25801") ? `` : (stryCov_9fa48("25801"), `${parts[0]}-${p}`) : stryMutAct_9fa48("25802") ? `` : (stryCov_9fa48("25802"), `page-${stryMutAct_9fa48("25805") ? p && 'home' : stryMutAct_9fa48("25804") ? false : stryMutAct_9fa48("25803") ? true : (stryCov_9fa48("25803", "25804", "25805"), p || (stryMutAct_9fa48("25806") ? "" : (stryCov_9fa48("25806"), 'home')))}`);
      }
    });
    if (stryMutAct_9fa48("25809") ? templateData.template || templateData.template.topic : stryMutAct_9fa48("25808") ? false : stryMutAct_9fa48("25807") ? true : (stryCov_9fa48("25807", "25808", "25809"), templateData.template && templateData.template.topic)) {
      if (stryMutAct_9fa48("25810")) {
        {}
      } else {
        stryCov_9fa48("25810");
        parts.push(stryMutAct_9fa48("25811") ? `` : (stryCov_9fa48("25811"), `page-topic-category-${templateData.category.cid}`));
        parts.push(stryMutAct_9fa48("25812") ? `` : (stryCov_9fa48("25812"), `page-topic-category-${slugify(templateData.category.name)}`));
      }
    }
    if (stryMutAct_9fa48("25814") ? false : stryMutAct_9fa48("25813") ? true : (stryCov_9fa48("25813", "25814"), Array.isArray(templateData.breadcrumbs))) {
      if (stryMutAct_9fa48("25815")) {
        {}
      } else {
        stryCov_9fa48("25815");
        templateData.breadcrumbs.forEach(crumb => {
          if (stryMutAct_9fa48("25816")) {
            {}
          } else {
            stryCov_9fa48("25816");
            if (stryMutAct_9fa48("25819") ? crumb || crumb.hasOwnProperty('cid') : stryMutAct_9fa48("25818") ? false : stryMutAct_9fa48("25817") ? true : (stryCov_9fa48("25817", "25818", "25819"), crumb && crumb.hasOwnProperty(stryMutAct_9fa48("25820") ? "" : (stryCov_9fa48("25820"), 'cid')))) {
              if (stryMutAct_9fa48("25821")) {
                {}
              } else {
                stryCov_9fa48("25821");
                parts.push(stryMutAct_9fa48("25822") ? `` : (stryCov_9fa48("25822"), `parent-category-${crumb.cid}`));
              }
            }
          }
        });
      }
    }
    parts.push(stryMutAct_9fa48("25823") ? `` : (stryCov_9fa48("25823"), `page-status-${res.statusCode}`));
    parts.push(stryMutAct_9fa48("25824") ? `` : (stryCov_9fa48("25824"), `theme-${meta.config[stryMutAct_9fa48("25825") ? "" : (stryCov_9fa48("25825"), 'theme:id')].split(stryMutAct_9fa48("25826") ? "" : (stryCov_9fa48("25826"), '-'))[2]}`));
    if (stryMutAct_9fa48("25828") ? false : stryMutAct_9fa48("25827") ? true : (stryCov_9fa48("25827", "25828"), req.loggedIn)) {
      if (stryMutAct_9fa48("25829")) {
        {}
      } else {
        stryCov_9fa48("25829");
        parts.push(stryMutAct_9fa48("25830") ? "" : (stryCov_9fa48("25830"), 'user-loggedin'));
      }
    } else {
      if (stryMutAct_9fa48("25831")) {
        {}
      } else {
        stryCov_9fa48("25831");
        parts.push(stryMutAct_9fa48("25832") ? "" : (stryCov_9fa48("25832"), 'user-guest'));
      }
    }
    return parts.join(stryMutAct_9fa48("25833") ? "" : (stryCov_9fa48("25833"), ' '));
  }
};