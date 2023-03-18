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
const os = require('os');
const winston = require('winston');
const _ = require('lodash');
const meta = require('../meta');
const languages = require('../languages');
const helpers = require('./helpers');
const plugins = require('../plugins');
module.exports = function (middleware) {
  if (stryMutAct_9fa48("25642")) {
    {}
  } else {
    stryCov_9fa48("25642");
    middleware.addHeaders = helpers.try((req, res, next) => {
      if (stryMutAct_9fa48("25643")) {
        {}
      } else {
        stryCov_9fa48("25643");
        const headers = stryMutAct_9fa48("25644") ? {} : (stryCov_9fa48("25644"), {
          'X-Powered-By': encodeURI(stryMutAct_9fa48("25647") ? meta.config['powered-by'] && 'NodeBB' : stryMutAct_9fa48("25646") ? false : stryMutAct_9fa48("25645") ? true : (stryCov_9fa48("25645", "25646", "25647"), meta.config[stryMutAct_9fa48("25648") ? "" : (stryCov_9fa48("25648"), 'powered-by')] || (stryMutAct_9fa48("25649") ? "" : (stryCov_9fa48("25649"), 'NodeBB')))),
          'Access-Control-Allow-Methods': encodeURI(stryMutAct_9fa48("25652") ? meta.config['access-control-allow-methods'] && '' : stryMutAct_9fa48("25651") ? false : stryMutAct_9fa48("25650") ? true : (stryCov_9fa48("25650", "25651", "25652"), meta.config[stryMutAct_9fa48("25653") ? "" : (stryCov_9fa48("25653"), 'access-control-allow-methods')] || (stryMutAct_9fa48("25654") ? "Stryker was here!" : (stryCov_9fa48("25654"), '')))),
          'Access-Control-Allow-Headers': encodeURI(stryMutAct_9fa48("25657") ? meta.config['access-control-allow-headers'] && '' : stryMutAct_9fa48("25656") ? false : stryMutAct_9fa48("25655") ? true : (stryCov_9fa48("25655", "25656", "25657"), meta.config[stryMutAct_9fa48("25658") ? "" : (stryCov_9fa48("25658"), 'access-control-allow-headers')] || (stryMutAct_9fa48("25659") ? "Stryker was here!" : (stryCov_9fa48("25659"), ''))))
        });
        if (stryMutAct_9fa48("25661") ? false : stryMutAct_9fa48("25660") ? true : (stryCov_9fa48("25660", "25661"), meta.config[stryMutAct_9fa48("25662") ? "" : (stryCov_9fa48("25662"), 'csp-frame-ancestors')])) {
          if (stryMutAct_9fa48("25663")) {
            {}
          } else {
            stryCov_9fa48("25663");
            headers[stryMutAct_9fa48("25664") ? "" : (stryCov_9fa48("25664"), 'Content-Security-Policy')] = stryMutAct_9fa48("25665") ? `` : (stryCov_9fa48("25665"), `frame-ancestors ${meta.config[stryMutAct_9fa48("25666") ? "" : (stryCov_9fa48("25666"), 'csp-frame-ancestors')]}`);
            if (stryMutAct_9fa48("25669") ? meta.config['csp-frame-ancestors'] !== '\'none\'' : stryMutAct_9fa48("25668") ? false : stryMutAct_9fa48("25667") ? true : (stryCov_9fa48("25667", "25668", "25669"), meta.config[stryMutAct_9fa48("25670") ? "" : (stryCov_9fa48("25670"), 'csp-frame-ancestors')] === (stryMutAct_9fa48("25671") ? "" : (stryCov_9fa48("25671"), '\'none\'')))) {
              if (stryMutAct_9fa48("25672")) {
                {}
              } else {
                stryCov_9fa48("25672");
                headers[stryMutAct_9fa48("25673") ? "" : (stryCov_9fa48("25673"), 'X-Frame-Options')] = stryMutAct_9fa48("25674") ? "" : (stryCov_9fa48("25674"), 'DENY');
              }
            }
          }
        } else {
          if (stryMutAct_9fa48("25675")) {
            {}
          } else {
            stryCov_9fa48("25675");
            headers[stryMutAct_9fa48("25676") ? "" : (stryCov_9fa48("25676"), 'Content-Security-Policy')] = stryMutAct_9fa48("25677") ? "" : (stryCov_9fa48("25677"), 'frame-ancestors \'self\'');
            headers[stryMutAct_9fa48("25678") ? "" : (stryCov_9fa48("25678"), 'X-Frame-Options')] = stryMutAct_9fa48("25679") ? "" : (stryCov_9fa48("25679"), 'SAMEORIGIN');
          }
        }
        if (stryMutAct_9fa48("25681") ? false : stryMutAct_9fa48("25680") ? true : (stryCov_9fa48("25680", "25681"), meta.config[stryMutAct_9fa48("25682") ? "" : (stryCov_9fa48("25682"), 'access-control-allow-origin')])) {
          if (stryMutAct_9fa48("25683")) {
            {}
          } else {
            stryCov_9fa48("25683");
            let origins = meta.config[stryMutAct_9fa48("25684") ? "" : (stryCov_9fa48("25684"), 'access-control-allow-origin')].split(stryMutAct_9fa48("25685") ? "" : (stryCov_9fa48("25685"), ','));
            origins = origins.map(stryMutAct_9fa48("25686") ? () => undefined : (stryCov_9fa48("25686"), origin => stryMutAct_9fa48("25689") ? origin || origin.trim() : stryMutAct_9fa48("25688") ? false : stryMutAct_9fa48("25687") ? true : (stryCov_9fa48("25687", "25688", "25689"), origin && (stryMutAct_9fa48("25690") ? origin : (stryCov_9fa48("25690"), origin.trim())))));
            if (stryMutAct_9fa48("25692") ? false : stryMutAct_9fa48("25691") ? true : (stryCov_9fa48("25691", "25692"), origins.includes(req.get(stryMutAct_9fa48("25693") ? "" : (stryCov_9fa48("25693"), 'origin'))))) {
              if (stryMutAct_9fa48("25694")) {
                {}
              } else {
                stryCov_9fa48("25694");
                headers[stryMutAct_9fa48("25695") ? "" : (stryCov_9fa48("25695"), 'Access-Control-Allow-Origin')] = encodeURI(req.get(stryMutAct_9fa48("25696") ? "" : (stryCov_9fa48("25696"), 'origin')));
                headers.Vary = headers.Vary ? stryMutAct_9fa48("25697") ? `` : (stryCov_9fa48("25697"), `${headers.Vary}, Origin`) : stryMutAct_9fa48("25698") ? "" : (stryCov_9fa48("25698"), 'Origin');
              }
            }
          }
        }
        if (stryMutAct_9fa48("25700") ? false : stryMutAct_9fa48("25699") ? true : (stryCov_9fa48("25699", "25700"), meta.config[stryMutAct_9fa48("25701") ? "" : (stryCov_9fa48("25701"), 'access-control-allow-origin-regex')])) {
          if (stryMutAct_9fa48("25702")) {
            {}
          } else {
            stryCov_9fa48("25702");
            let originsRegex = meta.config[stryMutAct_9fa48("25703") ? "" : (stryCov_9fa48("25703"), 'access-control-allow-origin-regex')].split(stryMutAct_9fa48("25704") ? "" : (stryCov_9fa48("25704"), ','));
            originsRegex = originsRegex.map(origin => {
              if (stryMutAct_9fa48("25705")) {
                {}
              } else {
                stryCov_9fa48("25705");
                try {
                  if (stryMutAct_9fa48("25706")) {
                    {}
                  } else {
                    stryCov_9fa48("25706");
                    origin = new RegExp(stryMutAct_9fa48("25707") ? origin : (stryCov_9fa48("25707"), origin.trim()));
                  }
                } catch (err) {
                  if (stryMutAct_9fa48("25708")) {
                    {}
                  } else {
                    stryCov_9fa48("25708");
                    winston.error(stryMutAct_9fa48("25709") ? `` : (stryCov_9fa48("25709"), `[middleware.addHeaders] Invalid RegExp For access-control-allow-origin ${origin}`));
                    origin = null;
                  }
                }
                return origin;
              }
            });
            originsRegex.forEach(regex => {
              if (stryMutAct_9fa48("25710")) {
                {}
              } else {
                stryCov_9fa48("25710");
                if (stryMutAct_9fa48("25713") ? regex || regex.test(req.get('origin')) : stryMutAct_9fa48("25712") ? false : stryMutAct_9fa48("25711") ? true : (stryCov_9fa48("25711", "25712", "25713"), regex && regex.test(req.get(stryMutAct_9fa48("25714") ? "" : (stryCov_9fa48("25714"), 'origin'))))) {
                  if (stryMutAct_9fa48("25715")) {
                    {}
                  } else {
                    stryCov_9fa48("25715");
                    headers[stryMutAct_9fa48("25716") ? "" : (stryCov_9fa48("25716"), 'Access-Control-Allow-Origin')] = encodeURI(req.get(stryMutAct_9fa48("25717") ? "" : (stryCov_9fa48("25717"), 'origin')));
                    headers.Vary = headers.Vary ? stryMutAct_9fa48("25718") ? `` : (stryCov_9fa48("25718"), `${headers.Vary}, Origin`) : stryMutAct_9fa48("25719") ? "" : (stryCov_9fa48("25719"), 'Origin');
                  }
                }
              }
            });
          }
        }
        if (stryMutAct_9fa48("25721") ? false : stryMutAct_9fa48("25720") ? true : (stryCov_9fa48("25720", "25721"), meta.config[stryMutAct_9fa48("25722") ? "" : (stryCov_9fa48("25722"), 'permissions-policy')])) {
          if (stryMutAct_9fa48("25723")) {
            {}
          } else {
            stryCov_9fa48("25723");
            headers[stryMutAct_9fa48("25724") ? "" : (stryCov_9fa48("25724"), 'Permissions-Policy')] = meta.config[stryMutAct_9fa48("25725") ? "" : (stryCov_9fa48("25725"), 'permissions-policy')];
          }
        }
        if (stryMutAct_9fa48("25727") ? false : stryMutAct_9fa48("25726") ? true : (stryCov_9fa48("25726", "25727"), meta.config[stryMutAct_9fa48("25728") ? "" : (stryCov_9fa48("25728"), 'access-control-allow-credentials')])) {
          if (stryMutAct_9fa48("25729")) {
            {}
          } else {
            stryCov_9fa48("25729");
            headers[stryMutAct_9fa48("25730") ? "" : (stryCov_9fa48("25730"), 'Access-Control-Allow-Credentials')] = meta.config[stryMutAct_9fa48("25731") ? "" : (stryCov_9fa48("25731"), 'access-control-allow-credentials')];
          }
        }
        if (stryMutAct_9fa48("25734") ? process.env.NODE_ENV !== 'development' : stryMutAct_9fa48("25733") ? false : stryMutAct_9fa48("25732") ? true : (stryCov_9fa48("25732", "25733", "25734"), process.env.NODE_ENV === (stryMutAct_9fa48("25735") ? "" : (stryCov_9fa48("25735"), 'development')))) {
          if (stryMutAct_9fa48("25736")) {
            {}
          } else {
            stryCov_9fa48("25736");
            headers[stryMutAct_9fa48("25737") ? "" : (stryCov_9fa48("25737"), 'X-Upstream-Hostname')] = os.hostname();
          }
        }
        for (const [key, value] of Object.entries(headers)) {
          if (stryMutAct_9fa48("25738")) {
            {}
          } else {
            stryCov_9fa48("25738");
            if (stryMutAct_9fa48("25740") ? false : stryMutAct_9fa48("25739") ? true : (stryCov_9fa48("25739", "25740"), value)) {
              if (stryMutAct_9fa48("25741")) {
                {}
              } else {
                stryCov_9fa48("25741");
                res.setHeader(key, value);
              }
            }
          }
        }
        next();
      }
    });
    middleware.autoLocale = helpers.try(async (req, res, next) => {
      if (stryMutAct_9fa48("25742")) {
        {}
      } else {
        stryCov_9fa48("25742");
        await plugins.hooks.fire(stryMutAct_9fa48("25743") ? "" : (stryCov_9fa48("25743"), 'filter:middleware.autoLocale'), stryMutAct_9fa48("25744") ? {} : (stryCov_9fa48("25744"), {
          req: req,
          res: res
        }));
        if (stryMutAct_9fa48("25746") ? false : stryMutAct_9fa48("25745") ? true : (stryCov_9fa48("25745", "25746"), req.query.lang)) {
          if (stryMutAct_9fa48("25747")) {
            {}
          } else {
            stryCov_9fa48("25747");
            const langs = await listCodes();
            if (stryMutAct_9fa48("25750") ? false : stryMutAct_9fa48("25749") ? true : stryMutAct_9fa48("25748") ? langs.includes(req.query.lang) : (stryCov_9fa48("25748", "25749", "25750"), !langs.includes(req.query.lang))) {
              if (stryMutAct_9fa48("25751")) {
                {}
              } else {
                stryCov_9fa48("25751");
                req.query.lang = meta.config.defaultLang;
              }
            }
            return next();
          }
        }
        if (stryMutAct_9fa48("25754") ? meta.config.autoDetectLang || req.uid === 0 : stryMutAct_9fa48("25753") ? false : stryMutAct_9fa48("25752") ? true : (stryCov_9fa48("25752", "25753", "25754"), meta.config.autoDetectLang && (stryMutAct_9fa48("25756") ? req.uid !== 0 : stryMutAct_9fa48("25755") ? true : (stryCov_9fa48("25755", "25756"), req.uid === 0)))) {
          if (stryMutAct_9fa48("25757")) {
            {}
          } else {
            stryCov_9fa48("25757");
            const langs = await listCodes();
            const lang = req.acceptsLanguages(langs);
            if (stryMutAct_9fa48("25760") ? false : stryMutAct_9fa48("25759") ? true : stryMutAct_9fa48("25758") ? lang : (stryCov_9fa48("25758", "25759", "25760"), !lang)) {
              if (stryMutAct_9fa48("25761")) {
                {}
              } else {
                stryCov_9fa48("25761");
                return next();
              }
            }
            req.query.lang = lang;
          }
        }
        next();
      }
    });
    async function listCodes() {
      if (stryMutAct_9fa48("25762")) {
        {}
      } else {
        stryCov_9fa48("25762");
        const defaultLang = stryMutAct_9fa48("25765") ? meta.config.defaultLang && 'en-GB' : stryMutAct_9fa48("25764") ? false : stryMutAct_9fa48("25763") ? true : (stryCov_9fa48("25763", "25764", "25765"), meta.config.defaultLang || (stryMutAct_9fa48("25766") ? "" : (stryCov_9fa48("25766"), 'en-GB')));
        try {
          if (stryMutAct_9fa48("25767")) {
            {}
          } else {
            stryCov_9fa48("25767");
            const codes = await languages.listCodes();
            return _.uniq(stryMutAct_9fa48("25768") ? [] : (stryCov_9fa48("25768"), [defaultLang, ...codes]));
          }
        } catch (err) {
          if (stryMutAct_9fa48("25769")) {
            {}
          } else {
            stryCov_9fa48("25769");
            winston.error(stryMutAct_9fa48("25770") ? `` : (stryCov_9fa48("25770"), `[middleware/autoLocale] Could not retrieve languages codes list! ${err.stack}`));
            return stryMutAct_9fa48("25771") ? [] : (stryCov_9fa48("25771"), [defaultLang]);
          }
        }
      }
    }
  }
};