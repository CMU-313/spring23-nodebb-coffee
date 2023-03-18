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
const meta = require('../../meta');
const plugins = require('../../plugins');
const middleware = require('../../middleware');
const writeControllers = require('../../controllers/write');
const helpers = require('../../controllers/helpers');
const Write = module.exports;
Write.reload = async params => {
  if (stryMutAct_9fa48("33645")) {
    {}
  } else {
    stryCov_9fa48("33645");
    const {
      router
    } = params;
    let apiSettings = await meta.settings.get(stryMutAct_9fa48("33646") ? "" : (stryCov_9fa48("33646"), 'core.api'));
    plugins.hooks.register(stryMutAct_9fa48("33647") ? "" : (stryCov_9fa48("33647"), 'core'), stryMutAct_9fa48("33648") ? {} : (stryCov_9fa48("33648"), {
      hook: stryMutAct_9fa48("33649") ? "" : (stryCov_9fa48("33649"), 'action:settings.set'),
      method: async data => {
        if (stryMutAct_9fa48("33650")) {
          {}
        } else {
          stryCov_9fa48("33650");
          if (stryMutAct_9fa48("33653") ? data.plugin !== 'core.api' : stryMutAct_9fa48("33652") ? false : stryMutAct_9fa48("33651") ? true : (stryCov_9fa48("33651", "33652", "33653"), data.plugin === (stryMutAct_9fa48("33654") ? "" : (stryCov_9fa48("33654"), 'core.api')))) {
            if (stryMutAct_9fa48("33655")) {
              {}
            } else {
              stryCov_9fa48("33655");
              apiSettings = await meta.settings.get(stryMutAct_9fa48("33656") ? "" : (stryCov_9fa48("33656"), 'core.api'));
            }
          }
        }
      }
    }));
    router.use(stryMutAct_9fa48("33657") ? "" : (stryCov_9fa48("33657"), '/api/v3'), (req, res, next) => {
      if (stryMutAct_9fa48("33658")) {
        {}
      } else {
        stryCov_9fa48("33658");
        // Require https if configured so
        if (stryMutAct_9fa48("33661") ? apiSettings.requireHttps === 'on' || req.protocol !== 'https' : stryMutAct_9fa48("33660") ? false : stryMutAct_9fa48("33659") ? true : (stryCov_9fa48("33659", "33660", "33661"), (stryMutAct_9fa48("33663") ? apiSettings.requireHttps !== 'on' : stryMutAct_9fa48("33662") ? true : (stryCov_9fa48("33662", "33663"), apiSettings.requireHttps === (stryMutAct_9fa48("33664") ? "" : (stryCov_9fa48("33664"), 'on')))) && (stryMutAct_9fa48("33666") ? req.protocol === 'https' : stryMutAct_9fa48("33665") ? true : (stryCov_9fa48("33665", "33666"), req.protocol !== (stryMutAct_9fa48("33667") ? "" : (stryCov_9fa48("33667"), 'https')))))) {
          if (stryMutAct_9fa48("33668")) {
            {}
          } else {
            stryCov_9fa48("33668");
            res.set(stryMutAct_9fa48("33669") ? "" : (stryCov_9fa48("33669"), 'Upgrade'), stryMutAct_9fa48("33670") ? "" : (stryCov_9fa48("33670"), 'TLS/1.0, HTTP/1.1'));
            return helpers.formatApiResponse(426, res);
          }
        }
        res.locals.isAPI = stryMutAct_9fa48("33671") ? false : (stryCov_9fa48("33671"), true);
        next();
      }
    });
    router.use(stryMutAct_9fa48("33672") ? "" : (stryCov_9fa48("33672"), '/api/v3/users'), require('./users')());
    router.use(stryMutAct_9fa48("33673") ? "" : (stryCov_9fa48("33673"), '/api/v3/groups'), require('./groups')());
    router.use(stryMutAct_9fa48("33674") ? "" : (stryCov_9fa48("33674"), '/api/v3/categories'), require('./categories')());
    router.use(stryMutAct_9fa48("33675") ? "" : (stryCov_9fa48("33675"), '/api/v3/topics'), require('./topics')());
    router.use(stryMutAct_9fa48("33676") ? "" : (stryCov_9fa48("33676"), '/api/v3/posts'), require('./posts')());
    router.use(stryMutAct_9fa48("33677") ? "" : (stryCov_9fa48("33677"), '/api/v3/chats'), require('./chats')());
    router.use(stryMutAct_9fa48("33678") ? "" : (stryCov_9fa48("33678"), '/api/v3/flags'), require('./flags')());
    router.use(stryMutAct_9fa48("33679") ? "" : (stryCov_9fa48("33679"), '/api/v3/admin'), require('./admin')());
    router.use(stryMutAct_9fa48("33680") ? "" : (stryCov_9fa48("33680"), '/api/v3/files'), require('./files')());
    router.use(stryMutAct_9fa48("33681") ? "" : (stryCov_9fa48("33681"), '/api/v3/utilities'), require('./utilities')());
    router.get(stryMutAct_9fa48("33682") ? "" : (stryCov_9fa48("33682"), '/api/v3/ping'), writeControllers.utilities.ping.get);
    router.post(stryMutAct_9fa48("33683") ? "" : (stryCov_9fa48("33683"), '/api/v3/ping'), middleware.authenticateRequest, middleware.ensureLoggedIn, writeControllers.utilities.ping.post);

    /**
     * Plugins can add routes to the Write API by attaching a listener to the
     * below hook. The hooks added to the passed-in router will be mounted to
     * `/api/v3/plugins`.
     */
    const pluginRouter = require('express').Router();
    await plugins.hooks.fire(stryMutAct_9fa48("33684") ? "" : (stryCov_9fa48("33684"), 'static:api.routes'), stryMutAct_9fa48("33685") ? {} : (stryCov_9fa48("33685"), {
      router: pluginRouter,
      middleware,
      helpers
    }));
    winston.info(stryMutAct_9fa48("33686") ? `` : (stryCov_9fa48("33686"), `[api] Adding ${pluginRouter.stack.length} route(s) to \`api/v3/plugins\``));
    router.use(stryMutAct_9fa48("33687") ? "" : (stryCov_9fa48("33687"), '/api/v3/plugins'), pluginRouter);

    // 404 handling
    router.use(stryMutAct_9fa48("33688") ? "" : (stryCov_9fa48("33688"), '/api/v3'), (req, res) => {
      if (stryMutAct_9fa48("33689")) {
        {}
      } else {
        stryCov_9fa48("33689");
        helpers.formatApiResponse(404, res);
      }
    });
  }
};
Write.cleanup = req => {
  if (stryMutAct_9fa48("33690")) {
    {}
  } else {
    stryCov_9fa48("33690");
    if (stryMutAct_9fa48("33693") ? req || req.session : stryMutAct_9fa48("33692") ? false : stryMutAct_9fa48("33691") ? true : (stryCov_9fa48("33691", "33692", "33693"), req && req.session)) {
      if (stryMutAct_9fa48("33694")) {
        {}
      } else {
        stryCov_9fa48("33694");
        req.session.destroy();
      }
    }
  }
};