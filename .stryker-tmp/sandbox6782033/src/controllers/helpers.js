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
const validator = require('validator');
const querystring = require('querystring');
const _ = require('lodash');
const chalk = require('chalk');
const translator = require('../translator');
const user = require('../user');
const privileges = require('../privileges');
const categories = require('../categories');
const plugins = require('../plugins');
const meta = require('../meta');
const middlewareHelpers = require('../middleware/helpers');
const utils = require('../utils');
const helpers = module.exports;
const relative_path = nconf.get(stryMutAct_9fa48("9535") ? "" : (stryCov_9fa48("9535"), 'relative_path'));
const url = nconf.get(stryMutAct_9fa48("9536") ? "" : (stryCov_9fa48("9536"), 'url'));
helpers.noScriptErrors = async function (req, res, error, httpStatus) {
  if (stryMutAct_9fa48("9537")) {
    {}
  } else {
    stryCov_9fa48("9537");
    if (stryMutAct_9fa48("9540") ? req.body.noscript === 'true' : stryMutAct_9fa48("9539") ? false : stryMutAct_9fa48("9538") ? true : (stryCov_9fa48("9538", "9539", "9540"), req.body.noscript !== (stryMutAct_9fa48("9541") ? "" : (stryCov_9fa48("9541"), 'true')))) {
      if (stryMutAct_9fa48("9542")) {
        {}
      } else {
        stryCov_9fa48("9542");
        if (stryMutAct_9fa48("9545") ? typeof error !== 'string' : stryMutAct_9fa48("9544") ? false : stryMutAct_9fa48("9543") ? true : (stryCov_9fa48("9543", "9544", "9545"), typeof error === (stryMutAct_9fa48("9546") ? "" : (stryCov_9fa48("9546"), 'string')))) {
          if (stryMutAct_9fa48("9547")) {
            {}
          } else {
            stryCov_9fa48("9547");
            return res.status(httpStatus).send(error);
          }
        }
        return res.status(httpStatus).json(error);
      }
    }
    const middleware = require('../middleware');
    const httpStatusString = httpStatus.toString();
    await middleware.buildHeaderAsync(req, res);
    res.status(httpStatus).render(httpStatusString, stryMutAct_9fa48("9548") ? {} : (stryCov_9fa48("9548"), {
      path: req.path,
      loggedIn: req.loggedIn,
      error: error,
      returnLink: stryMutAct_9fa48("9549") ? false : (stryCov_9fa48("9549"), true),
      title: stryMutAct_9fa48("9550") ? `` : (stryCov_9fa48("9550"), `[[global:${httpStatusString}.title]]`)
    }));
  }
};
helpers.terms = stryMutAct_9fa48("9551") ? {} : (stryCov_9fa48("9551"), {
  daily: stryMutAct_9fa48("9552") ? "" : (stryCov_9fa48("9552"), 'day'),
  weekly: stryMutAct_9fa48("9553") ? "" : (stryCov_9fa48("9553"), 'week'),
  monthly: stryMutAct_9fa48("9554") ? "" : (stryCov_9fa48("9554"), 'month')
});
helpers.buildQueryString = function (query, key, value) {
  if (stryMutAct_9fa48("9555")) {
    {}
  } else {
    stryCov_9fa48("9555");
    const queryObj = stryMutAct_9fa48("9556") ? {} : (stryCov_9fa48("9556"), {
      ...query
    });
    if (stryMutAct_9fa48("9558") ? false : stryMutAct_9fa48("9557") ? true : (stryCov_9fa48("9557", "9558"), value)) {
      if (stryMutAct_9fa48("9559")) {
        {}
      } else {
        stryCov_9fa48("9559");
        queryObj[key] = value;
      }
    } else {
      if (stryMutAct_9fa48("9560")) {
        {}
      } else {
        stryCov_9fa48("9560");
        delete queryObj[key];
      }
    }
    delete queryObj._;
    return Object.keys(queryObj).length ? stryMutAct_9fa48("9561") ? `` : (stryCov_9fa48("9561"), `?${querystring.stringify(queryObj)}`) : stryMutAct_9fa48("9562") ? "Stryker was here!" : (stryCov_9fa48("9562"), '');
  }
};
helpers.addLinkTags = function (params) {
  if (stryMutAct_9fa48("9563")) {
    {}
  } else {
    stryCov_9fa48("9563");
    params.res.locals.linkTags = stryMutAct_9fa48("9566") ? params.res.locals.linkTags && [] : stryMutAct_9fa48("9565") ? false : stryMutAct_9fa48("9564") ? true : (stryCov_9fa48("9564", "9565", "9566"), params.res.locals.linkTags || (stryMutAct_9fa48("9567") ? ["Stryker was here"] : (stryCov_9fa48("9567"), [])));
    params.res.locals.linkTags.push(stryMutAct_9fa48("9568") ? {} : (stryCov_9fa48("9568"), {
      rel: stryMutAct_9fa48("9569") ? "" : (stryCov_9fa48("9569"), 'canonical'),
      href: stryMutAct_9fa48("9570") ? `` : (stryCov_9fa48("9570"), `${url}/${params.url}`)
    }));
    params.tags.forEach(rel => {
      if (stryMutAct_9fa48("9571")) {
        {}
      } else {
        stryCov_9fa48("9571");
        rel.href = stryMutAct_9fa48("9572") ? `` : (stryCov_9fa48("9572"), `${url}/${params.url}${rel.href}`);
        params.res.locals.linkTags.push(rel);
      }
    });
  }
};
helpers.buildFilters = function (url, filter, query) {
  if (stryMutAct_9fa48("9573")) {
    {}
  } else {
    stryCov_9fa48("9573");
    return stryMutAct_9fa48("9574") ? [] : (stryCov_9fa48("9574"), [stryMutAct_9fa48("9575") ? {} : (stryCov_9fa48("9575"), {
      name: stryMutAct_9fa48("9576") ? "" : (stryCov_9fa48("9576"), '[[unread:all-topics]]'),
      url: stryMutAct_9fa48("9577") ? url - helpers.buildQueryString(query, 'filter', '') : (stryCov_9fa48("9577"), url + helpers.buildQueryString(query, stryMutAct_9fa48("9578") ? "" : (stryCov_9fa48("9578"), 'filter'), stryMutAct_9fa48("9579") ? "Stryker was here!" : (stryCov_9fa48("9579"), ''))),
      selected: stryMutAct_9fa48("9582") ? filter !== '' : stryMutAct_9fa48("9581") ? false : stryMutAct_9fa48("9580") ? true : (stryCov_9fa48("9580", "9581", "9582"), filter === (stryMutAct_9fa48("9583") ? "Stryker was here!" : (stryCov_9fa48("9583"), ''))),
      filter: stryMutAct_9fa48("9584") ? "Stryker was here!" : (stryCov_9fa48("9584"), ''),
      icon: stryMutAct_9fa48("9585") ? "" : (stryCov_9fa48("9585"), 'fa-book')
    }), stryMutAct_9fa48("9586") ? {} : (stryCov_9fa48("9586"), {
      name: stryMutAct_9fa48("9587") ? "" : (stryCov_9fa48("9587"), '[[unread:new-topics]]'),
      url: stryMutAct_9fa48("9588") ? url - helpers.buildQueryString(query, 'filter', 'new') : (stryCov_9fa48("9588"), url + helpers.buildQueryString(query, stryMutAct_9fa48("9589") ? "" : (stryCov_9fa48("9589"), 'filter'), stryMutAct_9fa48("9590") ? "" : (stryCov_9fa48("9590"), 'new'))),
      selected: stryMutAct_9fa48("9593") ? filter !== 'new' : stryMutAct_9fa48("9592") ? false : stryMutAct_9fa48("9591") ? true : (stryCov_9fa48("9591", "9592", "9593"), filter === (stryMutAct_9fa48("9594") ? "" : (stryCov_9fa48("9594"), 'new'))),
      filter: stryMutAct_9fa48("9595") ? "" : (stryCov_9fa48("9595"), 'new'),
      icon: stryMutAct_9fa48("9596") ? "" : (stryCov_9fa48("9596"), 'fa-clock-o')
    }), stryMutAct_9fa48("9597") ? {} : (stryCov_9fa48("9597"), {
      name: stryMutAct_9fa48("9598") ? "" : (stryCov_9fa48("9598"), '[[unread:watched-topics]]'),
      url: stryMutAct_9fa48("9599") ? url - helpers.buildQueryString(query, 'filter', 'watched') : (stryCov_9fa48("9599"), url + helpers.buildQueryString(query, stryMutAct_9fa48("9600") ? "" : (stryCov_9fa48("9600"), 'filter'), stryMutAct_9fa48("9601") ? "" : (stryCov_9fa48("9601"), 'watched'))),
      selected: stryMutAct_9fa48("9604") ? filter !== 'watched' : stryMutAct_9fa48("9603") ? false : stryMutAct_9fa48("9602") ? true : (stryCov_9fa48("9602", "9603", "9604"), filter === (stryMutAct_9fa48("9605") ? "" : (stryCov_9fa48("9605"), 'watched'))),
      filter: stryMutAct_9fa48("9606") ? "" : (stryCov_9fa48("9606"), 'watched'),
      icon: stryMutAct_9fa48("9607") ? "" : (stryCov_9fa48("9607"), 'fa-bell-o')
    }), stryMutAct_9fa48("9608") ? {} : (stryCov_9fa48("9608"), {
      name: stryMutAct_9fa48("9609") ? "" : (stryCov_9fa48("9609"), '[[unread:unreplied-topics]]'),
      url: stryMutAct_9fa48("9610") ? url - helpers.buildQueryString(query, 'filter', 'unreplied') : (stryCov_9fa48("9610"), url + helpers.buildQueryString(query, stryMutAct_9fa48("9611") ? "" : (stryCov_9fa48("9611"), 'filter'), stryMutAct_9fa48("9612") ? "" : (stryCov_9fa48("9612"), 'unreplied'))),
      selected: stryMutAct_9fa48("9615") ? filter !== 'unreplied' : stryMutAct_9fa48("9614") ? false : stryMutAct_9fa48("9613") ? true : (stryCov_9fa48("9613", "9614", "9615"), filter === (stryMutAct_9fa48("9616") ? "" : (stryCov_9fa48("9616"), 'unreplied'))),
      filter: stryMutAct_9fa48("9617") ? "" : (stryCov_9fa48("9617"), 'unreplied'),
      icon: stryMutAct_9fa48("9618") ? "" : (stryCov_9fa48("9618"), 'fa-reply')
    })]);
  }
};
helpers.buildTerms = function (url, term, query) {
  if (stryMutAct_9fa48("9619")) {
    {}
  } else {
    stryCov_9fa48("9619");
    return stryMutAct_9fa48("9620") ? [] : (stryCov_9fa48("9620"), [stryMutAct_9fa48("9621") ? {} : (stryCov_9fa48("9621"), {
      name: stryMutAct_9fa48("9622") ? "" : (stryCov_9fa48("9622"), '[[recent:alltime]]'),
      url: stryMutAct_9fa48("9623") ? url - helpers.buildQueryString(query, 'term', '') : (stryCov_9fa48("9623"), url + helpers.buildQueryString(query, stryMutAct_9fa48("9624") ? "" : (stryCov_9fa48("9624"), 'term'), stryMutAct_9fa48("9625") ? "Stryker was here!" : (stryCov_9fa48("9625"), ''))),
      selected: stryMutAct_9fa48("9628") ? term !== 'alltime' : stryMutAct_9fa48("9627") ? false : stryMutAct_9fa48("9626") ? true : (stryCov_9fa48("9626", "9627", "9628"), term === (stryMutAct_9fa48("9629") ? "" : (stryCov_9fa48("9629"), 'alltime'))),
      term: stryMutAct_9fa48("9630") ? "" : (stryCov_9fa48("9630"), 'alltime')
    }), stryMutAct_9fa48("9631") ? {} : (stryCov_9fa48("9631"), {
      name: stryMutAct_9fa48("9632") ? "" : (stryCov_9fa48("9632"), '[[recent:day]]'),
      url: stryMutAct_9fa48("9633") ? url - helpers.buildQueryString(query, 'term', 'daily') : (stryCov_9fa48("9633"), url + helpers.buildQueryString(query, stryMutAct_9fa48("9634") ? "" : (stryCov_9fa48("9634"), 'term'), stryMutAct_9fa48("9635") ? "" : (stryCov_9fa48("9635"), 'daily'))),
      selected: stryMutAct_9fa48("9638") ? term !== 'day' : stryMutAct_9fa48("9637") ? false : stryMutAct_9fa48("9636") ? true : (stryCov_9fa48("9636", "9637", "9638"), term === (stryMutAct_9fa48("9639") ? "" : (stryCov_9fa48("9639"), 'day'))),
      term: stryMutAct_9fa48("9640") ? "" : (stryCov_9fa48("9640"), 'day')
    }), stryMutAct_9fa48("9641") ? {} : (stryCov_9fa48("9641"), {
      name: stryMutAct_9fa48("9642") ? "" : (stryCov_9fa48("9642"), '[[recent:week]]'),
      url: stryMutAct_9fa48("9643") ? url - helpers.buildQueryString(query, 'term', 'weekly') : (stryCov_9fa48("9643"), url + helpers.buildQueryString(query, stryMutAct_9fa48("9644") ? "" : (stryCov_9fa48("9644"), 'term'), stryMutAct_9fa48("9645") ? "" : (stryCov_9fa48("9645"), 'weekly'))),
      selected: stryMutAct_9fa48("9648") ? term !== 'week' : stryMutAct_9fa48("9647") ? false : stryMutAct_9fa48("9646") ? true : (stryCov_9fa48("9646", "9647", "9648"), term === (stryMutAct_9fa48("9649") ? "" : (stryCov_9fa48("9649"), 'week'))),
      term: stryMutAct_9fa48("9650") ? "" : (stryCov_9fa48("9650"), 'week')
    }), stryMutAct_9fa48("9651") ? {} : (stryCov_9fa48("9651"), {
      name: stryMutAct_9fa48("9652") ? "" : (stryCov_9fa48("9652"), '[[recent:month]]'),
      url: stryMutAct_9fa48("9653") ? url - helpers.buildQueryString(query, 'term', 'monthly') : (stryCov_9fa48("9653"), url + helpers.buildQueryString(query, stryMutAct_9fa48("9654") ? "" : (stryCov_9fa48("9654"), 'term'), stryMutAct_9fa48("9655") ? "" : (stryCov_9fa48("9655"), 'monthly'))),
      selected: stryMutAct_9fa48("9658") ? term !== 'month' : stryMutAct_9fa48("9657") ? false : stryMutAct_9fa48("9656") ? true : (stryCov_9fa48("9656", "9657", "9658"), term === (stryMutAct_9fa48("9659") ? "" : (stryCov_9fa48("9659"), 'month'))),
      term: stryMutAct_9fa48("9660") ? "" : (stryCov_9fa48("9660"), 'month')
    })]);
  }
};
helpers.notAllowed = async function (req, res, error) {
  if (stryMutAct_9fa48("9661")) {
    {}
  } else {
    stryCov_9fa48("9661");
    ({
      error
    } = await plugins.hooks.fire(stryMutAct_9fa48("9662") ? "" : (stryCov_9fa48("9662"), 'filter:helpers.notAllowed'), stryMutAct_9fa48("9663") ? {} : (stryCov_9fa48("9663"), {
      req,
      res,
      error
    })));
    await plugins.hooks.fire(stryMutAct_9fa48("9664") ? "" : (stryCov_9fa48("9664"), 'response:helpers.notAllowed'), stryMutAct_9fa48("9665") ? {} : (stryCov_9fa48("9665"), {
      req,
      res,
      error
    }));
    if (stryMutAct_9fa48("9667") ? false : stryMutAct_9fa48("9666") ? true : (stryCov_9fa48("9666", "9667"), res.headersSent)) {
      if (stryMutAct_9fa48("9668")) {
        {}
      } else {
        stryCov_9fa48("9668");
        return;
      }
    }
    if (stryMutAct_9fa48("9671") ? req.loggedIn && req.uid === -1 : stryMutAct_9fa48("9670") ? false : stryMutAct_9fa48("9669") ? true : (stryCov_9fa48("9669", "9670", "9671"), req.loggedIn || (stryMutAct_9fa48("9673") ? req.uid !== -1 : stryMutAct_9fa48("9672") ? false : (stryCov_9fa48("9672", "9673"), req.uid === (stryMutAct_9fa48("9674") ? +1 : (stryCov_9fa48("9674"), -1)))))) {
      if (stryMutAct_9fa48("9675")) {
        {}
      } else {
        stryCov_9fa48("9675");
        if (stryMutAct_9fa48("9677") ? false : stryMutAct_9fa48("9676") ? true : (stryCov_9fa48("9676", "9677"), res.locals.isAPI)) {
          if (stryMutAct_9fa48("9678")) {
            {}
          } else {
            stryCov_9fa48("9678");
            if (stryMutAct_9fa48("9681") ? req.originalUrl.endsWith(`${relative_path}/api/v3`) : stryMutAct_9fa48("9680") ? false : stryMutAct_9fa48("9679") ? true : (stryCov_9fa48("9679", "9680", "9681"), req.originalUrl.startsWith(stryMutAct_9fa48("9682") ? `` : (stryCov_9fa48("9682"), `${relative_path}/api/v3`)))) {
              if (stryMutAct_9fa48("9683")) {
                {}
              } else {
                stryCov_9fa48("9683");
                helpers.formatApiResponse(403, res, error);
              }
            } else {
              if (stryMutAct_9fa48("9684")) {
                {}
              } else {
                stryCov_9fa48("9684");
                res.status(403).json(stryMutAct_9fa48("9685") ? {} : (stryCov_9fa48("9685"), {
                  path: req.path.replace(stryMutAct_9fa48("9686") ? /\/api/ : (stryCov_9fa48("9686"), /^\/api/), stryMutAct_9fa48("9687") ? "Stryker was here!" : (stryCov_9fa48("9687"), '')),
                  loggedIn: req.loggedIn,
                  error: error,
                  title: stryMutAct_9fa48("9688") ? "" : (stryCov_9fa48("9688"), '[[global:403.title]]'),
                  bodyClass: middlewareHelpers.buildBodyClass(req, res)
                }));
              }
            }
          }
        } else {
          if (stryMutAct_9fa48("9689")) {
            {}
          } else {
            stryCov_9fa48("9689");
            const middleware = require('../middleware');
            await middleware.buildHeaderAsync(req, res);
            res.status(403).render(stryMutAct_9fa48("9690") ? "" : (stryCov_9fa48("9690"), '403'), stryMutAct_9fa48("9691") ? {} : (stryCov_9fa48("9691"), {
              path: req.path,
              loggedIn: req.loggedIn,
              error,
              title: stryMutAct_9fa48("9692") ? "" : (stryCov_9fa48("9692"), '[[global:403.title]]')
            }));
          }
        }
      }
    } else if (stryMutAct_9fa48("9694") ? false : stryMutAct_9fa48("9693") ? true : (stryCov_9fa48("9693", "9694"), res.locals.isAPI)) {
      if (stryMutAct_9fa48("9695")) {
        {}
      } else {
        stryCov_9fa48("9695");
        req.session.returnTo = req.url.replace(stryMutAct_9fa48("9696") ? /\/api/ : (stryCov_9fa48("9696"), /^\/api/), stryMutAct_9fa48("9697") ? "Stryker was here!" : (stryCov_9fa48("9697"), ''));
        helpers.formatApiResponse(401, res, error);
      }
    } else {
      if (stryMutAct_9fa48("9698")) {
        {}
      } else {
        stryCov_9fa48("9698");
        req.session.returnTo = req.url;
        res.redirect(stryMutAct_9fa48("9699") ? `` : (stryCov_9fa48("9699"), `${relative_path}/login${(stryMutAct_9fa48("9700") ? req.path.endsWith('/admin') : (stryCov_9fa48("9700"), req.path.startsWith(stryMutAct_9fa48("9701") ? "" : (stryCov_9fa48("9701"), '/admin')))) ? stryMutAct_9fa48("9702") ? "" : (stryCov_9fa48("9702"), '?local=1') : stryMutAct_9fa48("9703") ? "Stryker was here!" : (stryCov_9fa48("9703"), '')}`));
      }
    }
  }
};
helpers.redirect = function (res, url, permanent) {
  if (stryMutAct_9fa48("9704")) {
    {}
  } else {
    stryCov_9fa48("9704");
    // this is used by sso plugins to redirect to the auth route
    // { external: '/auth/sso' } or { external: 'https://domain/auth/sso' }
    if (stryMutAct_9fa48("9706") ? false : stryMutAct_9fa48("9705") ? true : (stryCov_9fa48("9705", "9706"), url.hasOwnProperty(stryMutAct_9fa48("9707") ? "" : (stryCov_9fa48("9707"), 'external')))) {
      if (stryMutAct_9fa48("9708")) {
        {}
      } else {
        stryCov_9fa48("9708");
        const redirectUrl = encodeURI(prependRelativePath(url.external));
        if (stryMutAct_9fa48("9710") ? false : stryMutAct_9fa48("9709") ? true : (stryCov_9fa48("9709", "9710"), res.locals.isAPI)) {
          if (stryMutAct_9fa48("9711")) {
            {}
          } else {
            stryCov_9fa48("9711");
            res.set(stryMutAct_9fa48("9712") ? "" : (stryCov_9fa48("9712"), 'X-Redirect'), redirectUrl).status(200).json(stryMutAct_9fa48("9713") ? {} : (stryCov_9fa48("9713"), {
              external: redirectUrl
            }));
          }
        } else {
          if (stryMutAct_9fa48("9714")) {
            {}
          } else {
            stryCov_9fa48("9714");
            res.redirect(permanent ? 308 : 307, redirectUrl);
          }
        }
        return;
      }
    }
    if (stryMutAct_9fa48("9716") ? false : stryMutAct_9fa48("9715") ? true : (stryCov_9fa48("9715", "9716"), res.locals.isAPI)) {
      if (stryMutAct_9fa48("9717")) {
        {}
      } else {
        stryCov_9fa48("9717");
        url = encodeURI(url);
        res.set(stryMutAct_9fa48("9718") ? "" : (stryCov_9fa48("9718"), 'X-Redirect'), url).status(200).json(url);
      }
    } else {
      if (stryMutAct_9fa48("9719")) {
        {}
      } else {
        stryCov_9fa48("9719");
        res.redirect(permanent ? 308 : 307, encodeURI(prependRelativePath(url)));
      }
    }
  }
};
function prependRelativePath(url) {
  if (stryMutAct_9fa48("9720")) {
    {}
  } else {
    stryCov_9fa48("9720");
    return (stryMutAct_9fa48("9723") ? url.startsWith('http://') && url.startsWith('https://') : stryMutAct_9fa48("9722") ? false : stryMutAct_9fa48("9721") ? true : (stryCov_9fa48("9721", "9722", "9723"), (stryMutAct_9fa48("9724") ? url.endsWith('http://') : (stryCov_9fa48("9724"), url.startsWith(stryMutAct_9fa48("9725") ? "" : (stryCov_9fa48("9725"), 'http://')))) || (stryMutAct_9fa48("9726") ? url.endsWith('https://') : (stryCov_9fa48("9726"), url.startsWith(stryMutAct_9fa48("9727") ? "" : (stryCov_9fa48("9727"), 'https://')))))) ? url : stryMutAct_9fa48("9728") ? relative_path - url : (stryCov_9fa48("9728"), relative_path + url);
  }
}
helpers.buildCategoryBreadcrumbs = async function (cid) {
  if (stryMutAct_9fa48("9729")) {
    {}
  } else {
    stryCov_9fa48("9729");
    const breadcrumbs = stryMutAct_9fa48("9730") ? ["Stryker was here"] : (stryCov_9fa48("9730"), []);
    while (stryMutAct_9fa48("9731") ? false : (stryCov_9fa48("9731"), parseInt(cid, 10))) {
      if (stryMutAct_9fa48("9732")) {
        {}
      } else {
        stryCov_9fa48("9732");
        /* eslint-disable no-await-in-loop */
        const data = await categories.getCategoryFields(cid, stryMutAct_9fa48("9733") ? [] : (stryCov_9fa48("9733"), [stryMutAct_9fa48("9734") ? "" : (stryCov_9fa48("9734"), 'name'), stryMutAct_9fa48("9735") ? "" : (stryCov_9fa48("9735"), 'slug'), stryMutAct_9fa48("9736") ? "" : (stryCov_9fa48("9736"), 'parentCid'), stryMutAct_9fa48("9737") ? "" : (stryCov_9fa48("9737"), 'disabled'), stryMutAct_9fa48("9738") ? "" : (stryCov_9fa48("9738"), 'isSection')]));
        if (stryMutAct_9fa48("9741") ? !data.disabled || !data.isSection : stryMutAct_9fa48("9740") ? false : stryMutAct_9fa48("9739") ? true : (stryCov_9fa48("9739", "9740", "9741"), (stryMutAct_9fa48("9742") ? data.disabled : (stryCov_9fa48("9742"), !data.disabled)) && (stryMutAct_9fa48("9743") ? data.isSection : (stryCov_9fa48("9743"), !data.isSection)))) {
          if (stryMutAct_9fa48("9744")) {
            {}
          } else {
            stryCov_9fa48("9744");
            breadcrumbs.unshift(stryMutAct_9fa48("9745") ? {} : (stryCov_9fa48("9745"), {
              text: String(data.name),
              url: stryMutAct_9fa48("9746") ? `` : (stryCov_9fa48("9746"), `${relative_path}/category/${data.slug}`),
              cid: cid
            }));
          }
        }
        cid = data.parentCid;
      }
    }
    if (stryMutAct_9fa48("9749") ? meta.config.homePageRoute || meta.config.homePageRoute !== 'categories' : stryMutAct_9fa48("9748") ? false : stryMutAct_9fa48("9747") ? true : (stryCov_9fa48("9747", "9748", "9749"), meta.config.homePageRoute && (stryMutAct_9fa48("9751") ? meta.config.homePageRoute === 'categories' : stryMutAct_9fa48("9750") ? true : (stryCov_9fa48("9750", "9751"), meta.config.homePageRoute !== (stryMutAct_9fa48("9752") ? "" : (stryCov_9fa48("9752"), 'categories')))))) {
      if (stryMutAct_9fa48("9753")) {
        {}
      } else {
        stryCov_9fa48("9753");
        breadcrumbs.unshift(stryMutAct_9fa48("9754") ? {} : (stryCov_9fa48("9754"), {
          text: stryMutAct_9fa48("9755") ? "" : (stryCov_9fa48("9755"), '[[global:header.categories]]'),
          url: stryMutAct_9fa48("9756") ? `` : (stryCov_9fa48("9756"), `${relative_path}/categories`)
        }));
      }
    }
    breadcrumbs.unshift(stryMutAct_9fa48("9757") ? {} : (stryCov_9fa48("9757"), {
      text: stryMutAct_9fa48("9758") ? "" : (stryCov_9fa48("9758"), '[[global:home]]'),
      url: stryMutAct_9fa48("9759") ? `` : (stryCov_9fa48("9759"), `${relative_path}/`)
    }));
    return breadcrumbs;
  }
};
helpers.buildBreadcrumbs = function (crumbs) {
  if (stryMutAct_9fa48("9760")) {
    {}
  } else {
    stryCov_9fa48("9760");
    const breadcrumbs = stryMutAct_9fa48("9761") ? [] : (stryCov_9fa48("9761"), [stryMutAct_9fa48("9762") ? {} : (stryCov_9fa48("9762"), {
      text: stryMutAct_9fa48("9763") ? "" : (stryCov_9fa48("9763"), '[[global:home]]'),
      url: stryMutAct_9fa48("9764") ? `` : (stryCov_9fa48("9764"), `${relative_path}/`)
    })]);
    crumbs.forEach(crumb => {
      if (stryMutAct_9fa48("9765")) {
        {}
      } else {
        stryCov_9fa48("9765");
        if (stryMutAct_9fa48("9767") ? false : stryMutAct_9fa48("9766") ? true : (stryCov_9fa48("9766", "9767"), crumb)) {
          if (stryMutAct_9fa48("9768")) {
            {}
          } else {
            stryCov_9fa48("9768");
            if (stryMutAct_9fa48("9770") ? false : stryMutAct_9fa48("9769") ? true : (stryCov_9fa48("9769", "9770"), crumb.url)) {
              if (stryMutAct_9fa48("9771")) {
                {}
              } else {
                stryCov_9fa48("9771");
                crumb.url = stryMutAct_9fa48("9772") ? `` : (stryCov_9fa48("9772"), `${utils.isRelativeUrl(crumb.url) ? relative_path : stryMutAct_9fa48("9773") ? "Stryker was here!" : (stryCov_9fa48("9773"), '')}${crumb.url}`);
              }
            }
            breadcrumbs.push(crumb);
          }
        }
      }
    });
    return breadcrumbs;
  }
};
helpers.buildTitle = function (pageTitle) {
  if (stryMutAct_9fa48("9774")) {
    {}
  } else {
    stryCov_9fa48("9774");
    const titleLayout = stryMutAct_9fa48("9777") ? meta.config.titleLayout && '{pageTitle} | {browserTitle}' : stryMutAct_9fa48("9776") ? false : stryMutAct_9fa48("9775") ? true : (stryCov_9fa48("9775", "9776", "9777"), meta.config.titleLayout || (stryMutAct_9fa48("9778") ? "" : (stryCov_9fa48("9778"), '{pageTitle} | {browserTitle}')));
    const browserTitle = validator.escape(String(stryMutAct_9fa48("9781") ? (meta.config.browserTitle || meta.config.title) && 'NodeBB' : stryMutAct_9fa48("9780") ? false : stryMutAct_9fa48("9779") ? true : (stryCov_9fa48("9779", "9780", "9781"), (stryMutAct_9fa48("9783") ? meta.config.browserTitle && meta.config.title : stryMutAct_9fa48("9782") ? false : (stryCov_9fa48("9782", "9783"), meta.config.browserTitle || meta.config.title)) || (stryMutAct_9fa48("9784") ? "" : (stryCov_9fa48("9784"), 'NodeBB')))));
    pageTitle = stryMutAct_9fa48("9787") ? pageTitle && '' : stryMutAct_9fa48("9786") ? false : stryMutAct_9fa48("9785") ? true : (stryCov_9fa48("9785", "9786", "9787"), pageTitle || (stryMutAct_9fa48("9788") ? "Stryker was here!" : (stryCov_9fa48("9788"), '')));
    const title = titleLayout.replace(stryMutAct_9fa48("9789") ? "" : (stryCov_9fa48("9789"), '{pageTitle}'), stryMutAct_9fa48("9790") ? () => undefined : (stryCov_9fa48("9790"), () => pageTitle)).replace(stryMutAct_9fa48("9791") ? "" : (stryCov_9fa48("9791"), '{browserTitle}'), stryMutAct_9fa48("9792") ? () => undefined : (stryCov_9fa48("9792"), () => browserTitle));
    return title;
  }
};
helpers.getCategories = async function (set, uid, privilege, selectedCid) {
  if (stryMutAct_9fa48("9793")) {
    {}
  } else {
    stryCov_9fa48("9793");
    const cids = await categories.getCidsByPrivilege(set, uid, privilege);
    return await getCategoryData(cids, uid, selectedCid, Object.values(categories.watchStates), privilege);
  }
};
helpers.getCategoriesByStates = async function (uid, selectedCid, states, privilege = stryMutAct_9fa48("9794") ? "" : (stryCov_9fa48("9794"), 'topics:read')) {
  if (stryMutAct_9fa48("9795")) {
    {}
  } else {
    stryCov_9fa48("9795");
    const cids = await categories.getAllCidsFromSet(stryMutAct_9fa48("9796") ? "" : (stryCov_9fa48("9796"), 'categories:cid'));
    return await getCategoryData(cids, uid, selectedCid, states, privilege);
  }
};
async function getCategoryData(cids, uid, selectedCid, states, privilege) {
  if (stryMutAct_9fa48("9797")) {
    {}
  } else {
    stryCov_9fa48("9797");
    const [visibleCategories, selectData] = await Promise.all(stryMutAct_9fa48("9798") ? [] : (stryCov_9fa48("9798"), [helpers.getVisibleCategories(stryMutAct_9fa48("9799") ? {} : (stryCov_9fa48("9799"), {
      cids,
      uid,
      states,
      privilege,
      showLinks: stryMutAct_9fa48("9800") ? true : (stryCov_9fa48("9800"), false)
    })), helpers.getSelectedCategory(selectedCid)]));
    const categoriesData = categories.buildForSelectCategories(visibleCategories, stryMutAct_9fa48("9801") ? [] : (stryCov_9fa48("9801"), [stryMutAct_9fa48("9802") ? "" : (stryCov_9fa48("9802"), 'disabledClass')]));
    categoriesData.forEach(category => {
      if (stryMutAct_9fa48("9803")) {
        {}
      } else {
        stryCov_9fa48("9803");
        category.selected = selectData.selectedCids.includes(category.cid);
      }
    });
    stryMutAct_9fa48("9804") ? selectData.selectedCids : (stryCov_9fa48("9804"), selectData.selectedCids.sort(stryMutAct_9fa48("9805") ? () => undefined : (stryCov_9fa48("9805"), (a, b) => stryMutAct_9fa48("9806") ? a + b : (stryCov_9fa48("9806"), a - b))));
    return stryMutAct_9fa48("9807") ? {} : (stryCov_9fa48("9807"), {
      categories: categoriesData,
      selectedCategory: selectData.selectedCategory,
      selectedCids: selectData.selectedCids
    });
  }
}
helpers.getVisibleCategories = async function (params) {
  if (stryMutAct_9fa48("9808")) {
    {}
  } else {
    stryCov_9fa48("9808");
    const {
      cids,
      uid,
      privilege
    } = params;
    const states = stryMutAct_9fa48("9811") ? params.states && [categories.watchStates.watching, categories.watchStates.notwatching] : stryMutAct_9fa48("9810") ? false : stryMutAct_9fa48("9809") ? true : (stryCov_9fa48("9809", "9810", "9811"), params.states || (stryMutAct_9fa48("9812") ? [] : (stryCov_9fa48("9812"), [categories.watchStates.watching, categories.watchStates.notwatching])));
    const showLinks = stryMutAct_9fa48("9813") ? !params.showLinks : (stryCov_9fa48("9813"), !(stryMutAct_9fa48("9814") ? params.showLinks : (stryCov_9fa48("9814"), !params.showLinks)));
    let [allowed, watchState, categoriesData, isAdmin, isModerator] = await Promise.all(stryMutAct_9fa48("9815") ? [] : (stryCov_9fa48("9815"), [privileges.categories.isUserAllowedTo(privilege, cids, uid), categories.getWatchState(cids, uid), categories.getCategoriesData(cids), user.isAdministrator(uid), user.isModerator(uid, cids)]));
    const filtered = await plugins.hooks.fire(stryMutAct_9fa48("9816") ? "" : (stryCov_9fa48("9816"), 'filter:helpers.getVisibleCategories'), stryMutAct_9fa48("9817") ? {} : (stryCov_9fa48("9817"), {
      uid: uid,
      allowed: allowed,
      watchState: watchState,
      categoriesData: categoriesData,
      isModerator: isModerator,
      isAdmin: isAdmin
    }));
    ({
      allowed,
      watchState,
      categoriesData,
      isModerator,
      isAdmin
    } = filtered);
    categories.getTree(categoriesData, params.parentCid);
    const cidToAllowed = _.zipObject(cids, allowed.map(stryMutAct_9fa48("9818") ? () => undefined : (stryCov_9fa48("9818"), (allowed, i) => stryMutAct_9fa48("9821") ? (isAdmin || isModerator[i]) && allowed : stryMutAct_9fa48("9820") ? false : stryMutAct_9fa48("9819") ? true : (stryCov_9fa48("9819", "9820", "9821"), (stryMutAct_9fa48("9823") ? isAdmin && isModerator[i] : stryMutAct_9fa48("9822") ? false : (stryCov_9fa48("9822", "9823"), isAdmin || isModerator[i])) || allowed))));
    const cidToCategory = _.zipObject(cids, categoriesData);
    const cidToWatchState = _.zipObject(cids, watchState);
    return stryMutAct_9fa48("9824") ? categoriesData : (stryCov_9fa48("9824"), categoriesData.filter(c => {
      if (stryMutAct_9fa48("9825")) {
        {}
      } else {
        stryCov_9fa48("9825");
        if (stryMutAct_9fa48("9828") ? false : stryMutAct_9fa48("9827") ? true : stryMutAct_9fa48("9826") ? c : (stryCov_9fa48("9826", "9827", "9828"), !c)) {
          if (stryMutAct_9fa48("9829")) {
            {}
          } else {
            stryCov_9fa48("9829");
            return stryMutAct_9fa48("9830") ? true : (stryCov_9fa48("9830"), false);
          }
        }
        const hasVisibleChildren = checkVisibleChildren(c, cidToAllowed, cidToWatchState, states);
        const isCategoryVisible = stryMutAct_9fa48("9833") ? cidToAllowed[c.cid] && (showLinks || !c.link) && !c.disabled || states.includes(cidToWatchState[c.cid]) : stryMutAct_9fa48("9832") ? false : stryMutAct_9fa48("9831") ? true : (stryCov_9fa48("9831", "9832", "9833"), (stryMutAct_9fa48("9835") ? cidToAllowed[c.cid] && (showLinks || !c.link) || !c.disabled : stryMutAct_9fa48("9834") ? true : (stryCov_9fa48("9834", "9835"), (stryMutAct_9fa48("9837") ? cidToAllowed[c.cid] || showLinks || !c.link : stryMutAct_9fa48("9836") ? true : (stryCov_9fa48("9836", "9837"), cidToAllowed[c.cid] && (stryMutAct_9fa48("9839") ? showLinks && !c.link : stryMutAct_9fa48("9838") ? true : (stryCov_9fa48("9838", "9839"), showLinks || (stryMutAct_9fa48("9840") ? c.link : (stryCov_9fa48("9840"), !c.link)))))) && (stryMutAct_9fa48("9841") ? c.disabled : (stryCov_9fa48("9841"), !c.disabled)))) && states.includes(cidToWatchState[c.cid]));
        const shouldBeRemoved = stryMutAct_9fa48("9844") ? !hasVisibleChildren || !isCategoryVisible : stryMutAct_9fa48("9843") ? false : stryMutAct_9fa48("9842") ? true : (stryCov_9fa48("9842", "9843", "9844"), (stryMutAct_9fa48("9845") ? hasVisibleChildren : (stryCov_9fa48("9845"), !hasVisibleChildren)) && (stryMutAct_9fa48("9846") ? isCategoryVisible : (stryCov_9fa48("9846"), !isCategoryVisible)));
        const shouldBeDisaplayedAsDisabled = stryMutAct_9fa48("9849") ? hasVisibleChildren || !isCategoryVisible : stryMutAct_9fa48("9848") ? false : stryMutAct_9fa48("9847") ? true : (stryCov_9fa48("9847", "9848", "9849"), hasVisibleChildren && (stryMutAct_9fa48("9850") ? isCategoryVisible : (stryCov_9fa48("9850"), !isCategoryVisible)));
        if (stryMutAct_9fa48("9852") ? false : stryMutAct_9fa48("9851") ? true : (stryCov_9fa48("9851", "9852"), shouldBeDisaplayedAsDisabled)) {
          if (stryMutAct_9fa48("9853")) {
            {}
          } else {
            stryCov_9fa48("9853");
            c.disabledClass = stryMutAct_9fa48("9854") ? false : (stryCov_9fa48("9854"), true);
          }
        }
        if (stryMutAct_9fa48("9857") ? shouldBeRemoved && c.parent && c.parent.cid || cidToCategory[c.parent.cid] : stryMutAct_9fa48("9856") ? false : stryMutAct_9fa48("9855") ? true : (stryCov_9fa48("9855", "9856", "9857"), (stryMutAct_9fa48("9859") ? shouldBeRemoved && c.parent || c.parent.cid : stryMutAct_9fa48("9858") ? true : (stryCov_9fa48("9858", "9859"), (stryMutAct_9fa48("9861") ? shouldBeRemoved || c.parent : stryMutAct_9fa48("9860") ? true : (stryCov_9fa48("9860", "9861"), shouldBeRemoved && c.parent)) && c.parent.cid)) && cidToCategory[c.parent.cid])) {
          if (stryMutAct_9fa48("9862")) {
            {}
          } else {
            stryCov_9fa48("9862");
            cidToCategory[c.parent.cid].children = stryMutAct_9fa48("9863") ? cidToCategory[c.parent.cid].children : (stryCov_9fa48("9863"), cidToCategory[c.parent.cid].children.filter(stryMutAct_9fa48("9864") ? () => undefined : (stryCov_9fa48("9864"), child => stryMutAct_9fa48("9867") ? child.cid === c.cid : stryMutAct_9fa48("9866") ? false : stryMutAct_9fa48("9865") ? true : (stryCov_9fa48("9865", "9866", "9867"), child.cid !== c.cid))));
          }
        }
        return stryMutAct_9fa48("9868") ? shouldBeRemoved : (stryCov_9fa48("9868"), !shouldBeRemoved);
      }
    }));
  }
};
helpers.getSelectedCategory = async function (cids) {
  if (stryMutAct_9fa48("9869")) {
    {}
  } else {
    stryCov_9fa48("9869");
    if (stryMutAct_9fa48("9872") ? cids || !Array.isArray(cids) : stryMutAct_9fa48("9871") ? false : stryMutAct_9fa48("9870") ? true : (stryCov_9fa48("9870", "9871", "9872"), cids && (stryMutAct_9fa48("9873") ? Array.isArray(cids) : (stryCov_9fa48("9873"), !Array.isArray(cids))))) {
      if (stryMutAct_9fa48("9874")) {
        {}
      } else {
        stryCov_9fa48("9874");
        cids = stryMutAct_9fa48("9875") ? [] : (stryCov_9fa48("9875"), [cids]);
      }
    }
    cids = stryMutAct_9fa48("9878") ? cids || cids.map(cid => parseInt(cid, 10)) : stryMutAct_9fa48("9877") ? false : stryMutAct_9fa48("9876") ? true : (stryCov_9fa48("9876", "9877", "9878"), cids && cids.map(stryMutAct_9fa48("9879") ? () => undefined : (stryCov_9fa48("9879"), cid => parseInt(cid, 10))));
    let selectedCategories = await categories.getCategoriesData(cids);
    const selectedCids = stryMutAct_9fa48("9880") ? selectedCategories.map(c => c && c.cid) : (stryCov_9fa48("9880"), selectedCategories.map(stryMutAct_9fa48("9881") ? () => undefined : (stryCov_9fa48("9881"), c => stryMutAct_9fa48("9884") ? c || c.cid : stryMutAct_9fa48("9883") ? false : stryMutAct_9fa48("9882") ? true : (stryCov_9fa48("9882", "9883", "9884"), c && c.cid))).filter(Boolean));
    if (stryMutAct_9fa48("9888") ? selectedCategories.length <= 1 : stryMutAct_9fa48("9887") ? selectedCategories.length >= 1 : stryMutAct_9fa48("9886") ? false : stryMutAct_9fa48("9885") ? true : (stryCov_9fa48("9885", "9886", "9887", "9888"), selectedCategories.length > 1)) {
      if (stryMutAct_9fa48("9889")) {
        {}
      } else {
        stryCov_9fa48("9889");
        selectedCategories = stryMutAct_9fa48("9890") ? {} : (stryCov_9fa48("9890"), {
          icon: stryMutAct_9fa48("9891") ? "" : (stryCov_9fa48("9891"), 'fa-plus'),
          name: stryMutAct_9fa48("9892") ? "" : (stryCov_9fa48("9892"), '[[unread:multiple-categories-selected]]'),
          bgColor: stryMutAct_9fa48("9893") ? "" : (stryCov_9fa48("9893"), '#ddd')
        });
      }
    } else if (stryMutAct_9fa48("9896") ? selectedCategories.length === 1 || selectedCategories[0] : stryMutAct_9fa48("9895") ? false : stryMutAct_9fa48("9894") ? true : (stryCov_9fa48("9894", "9895", "9896"), (stryMutAct_9fa48("9898") ? selectedCategories.length !== 1 : stryMutAct_9fa48("9897") ? true : (stryCov_9fa48("9897", "9898"), selectedCategories.length === 1)) && selectedCategories[0])) {
      if (stryMutAct_9fa48("9899")) {
        {}
      } else {
        stryCov_9fa48("9899");
        selectedCategories = selectedCategories[0];
      }
    } else {
      if (stryMutAct_9fa48("9900")) {
        {}
      } else {
        stryCov_9fa48("9900");
        selectedCategories = null;
      }
    }
    return stryMutAct_9fa48("9901") ? {} : (stryCov_9fa48("9901"), {
      selectedCids: selectedCids,
      selectedCategory: selectedCategories
    });
  }
};
helpers.trimChildren = function (category) {
  if (stryMutAct_9fa48("9902")) {
    {}
  } else {
    stryCov_9fa48("9902");
    if (stryMutAct_9fa48("9905") ? category || Array.isArray(category.children) : stryMutAct_9fa48("9904") ? false : stryMutAct_9fa48("9903") ? true : (stryCov_9fa48("9903", "9904", "9905"), category && Array.isArray(category.children))) {
      if (stryMutAct_9fa48("9906")) {
        {}
      } else {
        stryCov_9fa48("9906");
        category.children = stryMutAct_9fa48("9907") ? category.children : (stryCov_9fa48("9907"), category.children.slice(0, category.subCategoriesPerPage));
        category.children.forEach(child => {
          if (stryMutAct_9fa48("9908")) {
            {}
          } else {
            stryCov_9fa48("9908");
            if (stryMutAct_9fa48("9910") ? false : stryMutAct_9fa48("9909") ? true : (stryCov_9fa48("9909", "9910"), category.isSection)) {
              if (stryMutAct_9fa48("9911")) {
                {}
              } else {
                stryCov_9fa48("9911");
                helpers.trimChildren(child);
              }
            } else {
              if (stryMutAct_9fa48("9912")) {
                {}
              } else {
                stryCov_9fa48("9912");
                child.children = undefined;
              }
            }
          }
        });
      }
    }
  }
};
helpers.setCategoryTeaser = function (category) {
  if (stryMutAct_9fa48("9913")) {
    {}
  } else {
    stryCov_9fa48("9913");
    if (stryMutAct_9fa48("9916") ? Array.isArray(category.posts) && category.posts.length || category.posts[0] : stryMutAct_9fa48("9915") ? false : stryMutAct_9fa48("9914") ? true : (stryCov_9fa48("9914", "9915", "9916"), (stryMutAct_9fa48("9918") ? Array.isArray(category.posts) || category.posts.length : stryMutAct_9fa48("9917") ? true : (stryCov_9fa48("9917", "9918"), Array.isArray(category.posts) && category.posts.length)) && category.posts[0])) {
      if (stryMutAct_9fa48("9919")) {
        {}
      } else {
        stryCov_9fa48("9919");
        category.teaser = stryMutAct_9fa48("9920") ? {} : (stryCov_9fa48("9920"), {
          url: stryMutAct_9fa48("9921") ? `` : (stryCov_9fa48("9921"), `${nconf.get(stryMutAct_9fa48("9922") ? "" : (stryCov_9fa48("9922"), 'relative_path'))}/post/${category.posts[0].pid}`),
          timestampISO: category.posts[0].timestampISO,
          pid: category.posts[0].pid,
          topic: category.posts[0].topic
        });
      }
    }
  }
};
function checkVisibleChildren(c, cidToAllowed, cidToWatchState, states) {
  if (stryMutAct_9fa48("9923")) {
    {}
  } else {
    stryCov_9fa48("9923");
    if (stryMutAct_9fa48("9926") ? !c && !Array.isArray(c.children) : stryMutAct_9fa48("9925") ? false : stryMutAct_9fa48("9924") ? true : (stryCov_9fa48("9924", "9925", "9926"), (stryMutAct_9fa48("9927") ? c : (stryCov_9fa48("9927"), !c)) || (stryMutAct_9fa48("9928") ? Array.isArray(c.children) : (stryCov_9fa48("9928"), !Array.isArray(c.children))))) {
      if (stryMutAct_9fa48("9929")) {
        {}
      } else {
        stryCov_9fa48("9929");
        return stryMutAct_9fa48("9930") ? true : (stryCov_9fa48("9930"), false);
      }
    }
    return stryMutAct_9fa48("9931") ? c.children.every(c => !c.disabled && (cidToAllowed[c.cid] && states.includes(cidToWatchState[c.cid]) || checkVisibleChildren(c, cidToAllowed, cidToWatchState, states))) : (stryCov_9fa48("9931"), c.children.some(stryMutAct_9fa48("9932") ? () => undefined : (stryCov_9fa48("9932"), c => stryMutAct_9fa48("9935") ? !c.disabled || cidToAllowed[c.cid] && states.includes(cidToWatchState[c.cid]) || checkVisibleChildren(c, cidToAllowed, cidToWatchState, states) : stryMutAct_9fa48("9934") ? false : stryMutAct_9fa48("9933") ? true : (stryCov_9fa48("9933", "9934", "9935"), (stryMutAct_9fa48("9936") ? c.disabled : (stryCov_9fa48("9936"), !c.disabled)) && (stryMutAct_9fa48("9938") ? cidToAllowed[c.cid] && states.includes(cidToWatchState[c.cid]) && checkVisibleChildren(c, cidToAllowed, cidToWatchState, states) : stryMutAct_9fa48("9937") ? true : (stryCov_9fa48("9937", "9938"), (stryMutAct_9fa48("9940") ? cidToAllowed[c.cid] || states.includes(cidToWatchState[c.cid]) : stryMutAct_9fa48("9939") ? false : (stryCov_9fa48("9939", "9940"), cidToAllowed[c.cid] && states.includes(cidToWatchState[c.cid]))) || checkVisibleChildren(c, cidToAllowed, cidToWatchState, states)))))));
  }
}
helpers.getHomePageRoutes = async function (uid) {
  if (stryMutAct_9fa48("9941")) {
    {}
  } else {
    stryCov_9fa48("9941");
    const routes = stryMutAct_9fa48("9942") ? [] : (stryCov_9fa48("9942"), [stryMutAct_9fa48("9943") ? {} : (stryCov_9fa48("9943"), {
      route: stryMutAct_9fa48("9944") ? "" : (stryCov_9fa48("9944"), 'categories'),
      name: stryMutAct_9fa48("9945") ? "" : (stryCov_9fa48("9945"), 'Categories')
    }), stryMutAct_9fa48("9946") ? {} : (stryCov_9fa48("9946"), {
      route: stryMutAct_9fa48("9947") ? "" : (stryCov_9fa48("9947"), 'unread'),
      name: stryMutAct_9fa48("9948") ? "" : (stryCov_9fa48("9948"), 'Unread')
    }), stryMutAct_9fa48("9949") ? {} : (stryCov_9fa48("9949"), {
      route: stryMutAct_9fa48("9950") ? "" : (stryCov_9fa48("9950"), 'recent'),
      name: stryMutAct_9fa48("9951") ? "" : (stryCov_9fa48("9951"), 'Recent')
    }), stryMutAct_9fa48("9952") ? {} : (stryCov_9fa48("9952"), {
      route: stryMutAct_9fa48("9953") ? "" : (stryCov_9fa48("9953"), 'top'),
      name: stryMutAct_9fa48("9954") ? "" : (stryCov_9fa48("9954"), 'Top')
    }), stryMutAct_9fa48("9955") ? {} : (stryCov_9fa48("9955"), {
      route: stryMutAct_9fa48("9956") ? "" : (stryCov_9fa48("9956"), 'popular'),
      name: stryMutAct_9fa48("9957") ? "" : (stryCov_9fa48("9957"), 'Popular')
    }), stryMutAct_9fa48("9958") ? {} : (stryCov_9fa48("9958"), {
      route: stryMutAct_9fa48("9959") ? "" : (stryCov_9fa48("9959"), 'custom'),
      name: stryMutAct_9fa48("9960") ? "" : (stryCov_9fa48("9960"), 'Custom')
    })]);
    const data = await plugins.hooks.fire(stryMutAct_9fa48("9961") ? "" : (stryCov_9fa48("9961"), 'filter:homepage.get'), stryMutAct_9fa48("9962") ? {} : (stryCov_9fa48("9962"), {
      uid: uid,
      routes: routes
    }));
    return data.routes;
  }
};
helpers.formatApiResponse = async (statusCode, res, payload) => {
  if (stryMutAct_9fa48("9963")) {
    {}
  } else {
    stryCov_9fa48("9963");
    if (stryMutAct_9fa48("9966") ? res.req.method !== 'HEAD' : stryMutAct_9fa48("9965") ? false : stryMutAct_9fa48("9964") ? true : (stryCov_9fa48("9964", "9965", "9966"), res.req.method === (stryMutAct_9fa48("9967") ? "" : (stryCov_9fa48("9967"), 'HEAD')))) {
      if (stryMutAct_9fa48("9968")) {
        {}
      } else {
        stryCov_9fa48("9968");
        return res.sendStatus(statusCode);
      }
    }
    if (stryMutAct_9fa48("9971") ? String(statusCode).endsWith('2') : stryMutAct_9fa48("9970") ? false : stryMutAct_9fa48("9969") ? true : (stryCov_9fa48("9969", "9970", "9971"), String(statusCode).startsWith(stryMutAct_9fa48("9972") ? "" : (stryCov_9fa48("9972"), '2')))) {
      if (stryMutAct_9fa48("9973")) {
        {}
      } else {
        stryCov_9fa48("9973");
        if (stryMutAct_9fa48("9975") ? false : stryMutAct_9fa48("9974") ? true : (stryCov_9fa48("9974", "9975"), res.req.loggedIn)) {
          if (stryMutAct_9fa48("9976")) {
            {}
          } else {
            stryCov_9fa48("9976");
            res.set(stryMutAct_9fa48("9977") ? "" : (stryCov_9fa48("9977"), 'cache-control'), stryMutAct_9fa48("9978") ? "" : (stryCov_9fa48("9978"), 'private'));
          }
        }
        let code = stryMutAct_9fa48("9979") ? "" : (stryCov_9fa48("9979"), 'ok');
        let message = stryMutAct_9fa48("9980") ? "" : (stryCov_9fa48("9980"), 'OK');
        switch (statusCode) {
          case 202:
            if (stryMutAct_9fa48("9981")) {} else {
              stryCov_9fa48("9981");
              code = stryMutAct_9fa48("9982") ? "" : (stryCov_9fa48("9982"), 'accepted');
              message = stryMutAct_9fa48("9983") ? "" : (stryCov_9fa48("9983"), 'Accepted');
              break;
            }
          case 204:
            if (stryMutAct_9fa48("9984")) {} else {
              stryCov_9fa48("9984");
              code = stryMutAct_9fa48("9985") ? "" : (stryCov_9fa48("9985"), 'no-content');
              message = stryMutAct_9fa48("9986") ? "" : (stryCov_9fa48("9986"), 'No Content');
              break;
            }
        }
        res.status(statusCode).json(stryMutAct_9fa48("9987") ? {} : (stryCov_9fa48("9987"), {
          status: stryMutAct_9fa48("9988") ? {} : (stryCov_9fa48("9988"), {
            code,
            message
          }),
          response: stryMutAct_9fa48("9991") ? payload && {} : stryMutAct_9fa48("9990") ? false : stryMutAct_9fa48("9989") ? true : (stryCov_9fa48("9989", "9990", "9991"), payload || {})
        }));
      }
    } else if (stryMutAct_9fa48("9993") ? false : stryMutAct_9fa48("9992") ? true : (stryCov_9fa48("9992", "9993"), payload instanceof Error)) {
      if (stryMutAct_9fa48("9994")) {
        {}
      } else {
        stryCov_9fa48("9994");
        const {
          message
        } = payload;
        const response = {};

        // Update status code based on some common error codes
        switch (message) {
          case stryMutAct_9fa48("9996") ? "" : (stryCov_9fa48("9996"), '[[error:user-banned]]'):
            if (stryMutAct_9fa48("9995")) {} else {
              stryCov_9fa48("9995");
              Object.assign(response, await generateBannedResponse(res));
            }
          // intentional fall through
          case stryMutAct_9fa48("9998") ? "" : (stryCov_9fa48("9998"), '[[error:no-privileges]]'):
            if (stryMutAct_9fa48("9997")) {} else {
              stryCov_9fa48("9997");
              statusCode = 403;
              break;
            }
          case stryMutAct_9fa48("10000") ? "" : (stryCov_9fa48("10000"), '[[error:invalid-uid]]'):
            if (stryMutAct_9fa48("9999")) {} else {
              stryCov_9fa48("9999");
              statusCode = 401;
              break;
            }
        }
        if (stryMutAct_9fa48("10003") ? message.endsWith('[[error:required-parameters-missing, ') : stryMutAct_9fa48("10002") ? false : stryMutAct_9fa48("10001") ? true : (stryCov_9fa48("10001", "10002", "10003"), message.startsWith(stryMutAct_9fa48("10004") ? "" : (stryCov_9fa48("10004"), '[[error:required-parameters-missing, ')))) {
          if (stryMutAct_9fa48("10005")) {
            {}
          } else {
            stryCov_9fa48("10005");
            const params = stryMutAct_9fa48("10006") ? message.split(' ') : (stryCov_9fa48("10006"), message.slice((stryMutAct_9fa48("10007") ? "" : (stryCov_9fa48("10007"), '[[error:required-parameters-missing, ')).length, stryMutAct_9fa48("10008") ? +2 : (stryCov_9fa48("10008"), -2)).split(stryMutAct_9fa48("10009") ? "" : (stryCov_9fa48("10009"), ' ')));
            Object.assign(response, stryMutAct_9fa48("10010") ? {} : (stryCov_9fa48("10010"), {
              params
            }));
          }
        }
        const returnPayload = await helpers.generateError(statusCode, message, res);
        returnPayload.response = response;
        if (stryMutAct_9fa48("10013") ? global.env !== 'development' : stryMutAct_9fa48("10012") ? false : stryMutAct_9fa48("10011") ? true : (stryCov_9fa48("10011", "10012", "10013"), global.env === (stryMutAct_9fa48("10014") ? "" : (stryCov_9fa48("10014"), 'development')))) {
          if (stryMutAct_9fa48("10015")) {
            {}
          } else {
            stryCov_9fa48("10015");
            returnPayload.stack = payload.stack;
            process.stdout.write(stryMutAct_9fa48("10016") ? `` : (stryCov_9fa48("10016"), `[${chalk.yellow(stryMutAct_9fa48("10017") ? "" : (stryCov_9fa48("10017"), 'api'))}] Exception caught, error with stack trace follows:\n`));
            process.stdout.write(payload.stack);
          }
        }
        res.status(statusCode).json(returnPayload);
      }
    } else if (stryMutAct_9fa48("10020") ? false : stryMutAct_9fa48("10019") ? true : stryMutAct_9fa48("10018") ? payload : (stryCov_9fa48("10018", "10019", "10020"), !payload)) {
      if (stryMutAct_9fa48("10021")) {
        {}
      } else {
        stryCov_9fa48("10021");
        // Non-2xx statusCode, generate predefined error
        const returnPayload = await helpers.generateError(statusCode, null, res);
        res.status(statusCode).json(returnPayload);
      }
    }
  }
};
async function generateBannedResponse(res) {
  if (stryMutAct_9fa48("10022")) {
    {}
  } else {
    stryCov_9fa48("10022");
    const response = {};
    const [reason, expiry] = await Promise.all(stryMutAct_9fa48("10023") ? [] : (stryCov_9fa48("10023"), [user.bans.getReason(res.req.uid), user.getUserField(res.req.uid, stryMutAct_9fa48("10024") ? "" : (stryCov_9fa48("10024"), 'banned:expire'))]));
    response.reason = reason;
    if (stryMutAct_9fa48("10026") ? false : stryMutAct_9fa48("10025") ? true : (stryCov_9fa48("10025", "10026"), expiry)) {
      if (stryMutAct_9fa48("10027")) {
        {}
      } else {
        stryCov_9fa48("10027");
        Object.assign(response, stryMutAct_9fa48("10028") ? {} : (stryCov_9fa48("10028"), {
          expiry,
          expiryISO: new Date(expiry).toISOString(),
          expiryLocaleString: new Date(expiry).toLocaleString()
        }));
      }
    }
    return response;
  }
}
helpers.generateError = async (statusCode, message, res) => {
  if (stryMutAct_9fa48("10029")) {
    {}
  } else {
    stryCov_9fa48("10029");
    async function translateMessage(message) {
      if (stryMutAct_9fa48("10030")) {
        {}
      } else {
        stryCov_9fa48("10030");
        const {
          req
        } = res;
        const settings = req.query.lang ? null : await user.getSettings(req.uid);
        const language = String(stryMutAct_9fa48("10033") ? (req.query.lang || settings.userLang) && meta.config.defaultLang : stryMutAct_9fa48("10032") ? false : stryMutAct_9fa48("10031") ? true : (stryCov_9fa48("10031", "10032", "10033"), (stryMutAct_9fa48("10035") ? req.query.lang && settings.userLang : stryMutAct_9fa48("10034") ? false : (stryCov_9fa48("10034", "10035"), req.query.lang || settings.userLang)) || meta.config.defaultLang));
        return await translator.translate(message, language);
      }
    }
    if (stryMutAct_9fa48("10038") ? message || message.startsWith('[[') : stryMutAct_9fa48("10037") ? false : stryMutAct_9fa48("10036") ? true : (stryCov_9fa48("10036", "10037", "10038"), message && (stryMutAct_9fa48("10039") ? message.endsWith('[[') : (stryCov_9fa48("10039"), message.startsWith(stryMutAct_9fa48("10040") ? "" : (stryCov_9fa48("10040"), '[[')))))) {
      if (stryMutAct_9fa48("10041")) {
        {}
      } else {
        stryCov_9fa48("10041");
        message = await translateMessage(message);
      }
    }
    const payload = stryMutAct_9fa48("10042") ? {} : (stryCov_9fa48("10042"), {
      status: stryMutAct_9fa48("10043") ? {} : (stryCov_9fa48("10043"), {
        code: stryMutAct_9fa48("10044") ? "" : (stryCov_9fa48("10044"), 'internal-server-error'),
        message: stryMutAct_9fa48("10047") ? message && (await translateMessage(`[[error:api.${statusCode}]]`)) : stryMutAct_9fa48("10046") ? false : stryMutAct_9fa48("10045") ? true : (stryCov_9fa48("10045", "10046", "10047"), message || (await translateMessage(stryMutAct_9fa48("10048") ? `` : (stryCov_9fa48("10048"), `[[error:api.${statusCode}]]`))))
      }),
      response: {}
    });
    switch (statusCode) {
      case 400:
        if (stryMutAct_9fa48("10049")) {} else {
          stryCov_9fa48("10049");
          payload.status.code = stryMutAct_9fa48("10050") ? "" : (stryCov_9fa48("10050"), 'bad-request');
          break;
        }
      case 401:
        if (stryMutAct_9fa48("10051")) {} else {
          stryCov_9fa48("10051");
          payload.status.code = stryMutAct_9fa48("10052") ? "" : (stryCov_9fa48("10052"), 'not-authorised');
          break;
        }
      case 403:
        if (stryMutAct_9fa48("10053")) {} else {
          stryCov_9fa48("10053");
          payload.status.code = stryMutAct_9fa48("10054") ? "" : (stryCov_9fa48("10054"), 'forbidden');
          break;
        }
      case 404:
        if (stryMutAct_9fa48("10055")) {} else {
          stryCov_9fa48("10055");
          payload.status.code = stryMutAct_9fa48("10056") ? "" : (stryCov_9fa48("10056"), 'not-found');
          break;
        }
      case 426:
        if (stryMutAct_9fa48("10057")) {} else {
          stryCov_9fa48("10057");
          payload.status.code = stryMutAct_9fa48("10058") ? "" : (stryCov_9fa48("10058"), 'upgrade-required');
          break;
        }
      case 429:
        if (stryMutAct_9fa48("10059")) {} else {
          stryCov_9fa48("10059");
          payload.status.code = stryMutAct_9fa48("10060") ? "" : (stryCov_9fa48("10060"), 'too-many-requests');
          break;
        }
      case 500:
        if (stryMutAct_9fa48("10061")) {} else {
          stryCov_9fa48("10061");
          payload.status.code = stryMutAct_9fa48("10062") ? "" : (stryCov_9fa48("10062"), 'internal-server-error');
          break;
        }
      case 501:
        if (stryMutAct_9fa48("10063")) {} else {
          stryCov_9fa48("10063");
          payload.status.code = stryMutAct_9fa48("10064") ? "" : (stryCov_9fa48("10064"), 'not-implemented');
          break;
        }
      case 503:
        if (stryMutAct_9fa48("10065")) {} else {
          stryCov_9fa48("10065");
          payload.status.code = stryMutAct_9fa48("10066") ? "" : (stryCov_9fa48("10066"), 'service-unavailable');
          break;
        }
    }
    return payload;
  }
};
require('../promisify')(helpers);