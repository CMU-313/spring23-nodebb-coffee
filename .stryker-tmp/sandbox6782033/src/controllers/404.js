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
const winston = require('winston');
const validator = require('validator');
const meta = require('../meta');
const plugins = require('../plugins');
const middleware = require('../middleware');
const helpers = require('../middleware/helpers');
exports.handle404 = function handle404(req, res) {
  if (stryMutAct_9fa48("5055")) {
    {}
  } else {
    stryCov_9fa48("5055");
    const relativePath = nconf.get(stryMutAct_9fa48("5056") ? "" : (stryCov_9fa48("5056"), 'relative_path'));
    const isClientScript = new RegExp(stryMutAct_9fa48("5057") ? `` : (stryCov_9fa48("5057"), `^${relativePath}\\/assets\\/src\\/.+\\.js(\\?v=\\w+)?$`));
    if (stryMutAct_9fa48("5059") ? false : stryMutAct_9fa48("5058") ? true : (stryCov_9fa48("5058", "5059"), plugins.hooks.hasListeners(stryMutAct_9fa48("5060") ? "" : (stryCov_9fa48("5060"), 'action:meta.override404')))) {
      if (stryMutAct_9fa48("5061")) {
        {}
      } else {
        stryCov_9fa48("5061");
        return plugins.hooks.fire(stryMutAct_9fa48("5062") ? "" : (stryCov_9fa48("5062"), 'action:meta.override404'), stryMutAct_9fa48("5063") ? {} : (stryCov_9fa48("5063"), {
          req: req,
          res: res,
          error: {}
        }));
      }
    }
    if (stryMutAct_9fa48("5065") ? false : stryMutAct_9fa48("5064") ? true : (stryCov_9fa48("5064", "5065"), isClientScript.test(req.url))) {
      if (stryMutAct_9fa48("5066")) {
        {}
      } else {
        stryCov_9fa48("5066");
        res.type(stryMutAct_9fa48("5067") ? "" : (stryCov_9fa48("5067"), 'text/javascript')).status(404).send(stryMutAct_9fa48("5068") ? "" : (stryCov_9fa48("5068"), 'Not Found'));
      }
    } else if (stryMutAct_9fa48("5071") ? !res.locals.isAPI || req.path.startsWith(`${relativePath}/assets/uploads`) || req.get('accept') && !req.get('accept').includes('text/html') || req.path === '/favicon.ico' : stryMutAct_9fa48("5070") ? false : stryMutAct_9fa48("5069") ? true : (stryCov_9fa48("5069", "5070", "5071"), (stryMutAct_9fa48("5072") ? res.locals.isAPI : (stryCov_9fa48("5072"), !res.locals.isAPI)) && (stryMutAct_9fa48("5074") ? (req.path.startsWith(`${relativePath}/assets/uploads`) || req.get('accept') && !req.get('accept').includes('text/html')) && req.path === '/favicon.ico' : stryMutAct_9fa48("5073") ? true : (stryCov_9fa48("5073", "5074"), (stryMutAct_9fa48("5076") ? req.path.startsWith(`${relativePath}/assets/uploads`) && req.get('accept') && !req.get('accept').includes('text/html') : stryMutAct_9fa48("5075") ? false : (stryCov_9fa48("5075", "5076"), (stryMutAct_9fa48("5077") ? req.path.endsWith(`${relativePath}/assets/uploads`) : (stryCov_9fa48("5077"), req.path.startsWith(stryMutAct_9fa48("5078") ? `` : (stryCov_9fa48("5078"), `${relativePath}/assets/uploads`)))) || (stryMutAct_9fa48("5080") ? req.get('accept') || !req.get('accept').includes('text/html') : stryMutAct_9fa48("5079") ? false : (stryCov_9fa48("5079", "5080"), req.get(stryMutAct_9fa48("5081") ? "" : (stryCov_9fa48("5081"), 'accept')) && (stryMutAct_9fa48("5082") ? req.get('accept').includes('text/html') : (stryCov_9fa48("5082"), !req.get(stryMutAct_9fa48("5083") ? "" : (stryCov_9fa48("5083"), 'accept')).includes(stryMutAct_9fa48("5084") ? "" : (stryCov_9fa48("5084"), 'text/html')))))))) || (stryMutAct_9fa48("5086") ? req.path !== '/favicon.ico' : stryMutAct_9fa48("5085") ? false : (stryCov_9fa48("5085", "5086"), req.path === (stryMutAct_9fa48("5087") ? "" : (stryCov_9fa48("5087"), '/favicon.ico')))))))) {
      if (stryMutAct_9fa48("5088")) {
        {}
      } else {
        stryCov_9fa48("5088");
        meta.errors.log404(stryMutAct_9fa48("5091") ? req.path && '' : stryMutAct_9fa48("5090") ? false : stryMutAct_9fa48("5089") ? true : (stryCov_9fa48("5089", "5090", "5091"), req.path || (stryMutAct_9fa48("5092") ? "Stryker was here!" : (stryCov_9fa48("5092"), ''))));
        res.sendStatus(404);
      }
    } else if (stryMutAct_9fa48("5094") ? false : stryMutAct_9fa48("5093") ? true : (stryCov_9fa48("5093", "5094"), req.accepts(stryMutAct_9fa48("5095") ? "" : (stryCov_9fa48("5095"), 'html')))) {
      if (stryMutAct_9fa48("5096")) {
        {}
      } else {
        stryCov_9fa48("5096");
        if (stryMutAct_9fa48("5099") ? process.env.NODE_ENV !== 'development' : stryMutAct_9fa48("5098") ? false : stryMutAct_9fa48("5097") ? true : (stryCov_9fa48("5097", "5098", "5099"), process.env.NODE_ENV === (stryMutAct_9fa48("5100") ? "" : (stryCov_9fa48("5100"), 'development')))) {
          if (stryMutAct_9fa48("5101")) {
            {}
          } else {
            stryCov_9fa48("5101");
            winston.warn(stryMutAct_9fa48("5102") ? `` : (stryCov_9fa48("5102"), `Route requested but not found: ${req.url}`));
          }
        }
        meta.errors.log404(stryMutAct_9fa48("5105") ? req.path.replace(/^\/api/, '') && '' : stryMutAct_9fa48("5104") ? false : stryMutAct_9fa48("5103") ? true : (stryCov_9fa48("5103", "5104", "5105"), req.path.replace(stryMutAct_9fa48("5106") ? /\/api/ : (stryCov_9fa48("5106"), /^\/api/), stryMutAct_9fa48("5107") ? "Stryker was here!" : (stryCov_9fa48("5107"), '')) || (stryMutAct_9fa48("5108") ? "Stryker was here!" : (stryCov_9fa48("5108"), ''))));
        exports.send404(req, res);
      }
    } else {
      if (stryMutAct_9fa48("5109")) {
        {}
      } else {
        stryCov_9fa48("5109");
        res.status(404).type(stryMutAct_9fa48("5110") ? "" : (stryCov_9fa48("5110"), 'txt')).send(stryMutAct_9fa48("5111") ? "" : (stryCov_9fa48("5111"), 'Not found'));
      }
    }
  }
};
exports.send404 = async function (req, res) {
  if (stryMutAct_9fa48("5112")) {
    {}
  } else {
    stryCov_9fa48("5112");
    res.status(404);
    const path = String(stryMutAct_9fa48("5115") ? req.path && '' : stryMutAct_9fa48("5114") ? false : stryMutAct_9fa48("5113") ? true : (stryCov_9fa48("5113", "5114", "5115"), req.path || (stryMutAct_9fa48("5116") ? "Stryker was here!" : (stryCov_9fa48("5116"), ''))));
    if (stryMutAct_9fa48("5118") ? false : stryMutAct_9fa48("5117") ? true : (stryCov_9fa48("5117", "5118"), res.locals.isAPI)) {
      if (stryMutAct_9fa48("5119")) {
        {}
      } else {
        stryCov_9fa48("5119");
        return res.json(stryMutAct_9fa48("5120") ? {} : (stryCov_9fa48("5120"), {
          path: validator.escape(path.replace(stryMutAct_9fa48("5121") ? /\/api/ : (stryCov_9fa48("5121"), /^\/api/), stryMutAct_9fa48("5122") ? "Stryker was here!" : (stryCov_9fa48("5122"), ''))),
          title: stryMutAct_9fa48("5123") ? "" : (stryCov_9fa48("5123"), '[[global:404.title]]'),
          bodyClass: helpers.buildBodyClass(req, res)
        }));
      }
    }
    await middleware.buildHeaderAsync(req, res);
    await res.render(stryMutAct_9fa48("5124") ? "" : (stryCov_9fa48("5124"), '404'), stryMutAct_9fa48("5125") ? {} : (stryCov_9fa48("5125"), {
      path: validator.escape(path),
      title: stryMutAct_9fa48("5126") ? "" : (stryCov_9fa48("5126"), '[[global:404.title]]'),
      bodyClass: helpers.buildBodyClass(req, res)
    }));
  }
};