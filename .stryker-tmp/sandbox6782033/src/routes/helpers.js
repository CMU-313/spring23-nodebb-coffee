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
const helpers = module.exports;
const winston = require('winston');
const middleware = require('../middleware');
const controllerHelpers = require('../controllers/helpers');

// router, name, middleware(deprecated), middlewares(optional), controller
helpers.setupPageRoute = function (...args) {
  if (stryMutAct_9fa48("33176")) {
    {}
  } else {
    stryCov_9fa48("33176");
    const [router, name] = args;
    let middlewares = (stryMutAct_9fa48("33180") ? args.length <= 3 : stryMutAct_9fa48("33179") ? args.length >= 3 : stryMutAct_9fa48("33178") ? false : stryMutAct_9fa48("33177") ? true : (stryCov_9fa48("33177", "33178", "33179", "33180"), args.length > 3)) ? args[stryMutAct_9fa48("33181") ? args.length + 2 : (stryCov_9fa48("33181"), args.length - 2)] : stryMutAct_9fa48("33182") ? ["Stryker was here"] : (stryCov_9fa48("33182"), []);
    const controller = args[stryMutAct_9fa48("33183") ? args.length + 1 : (stryCov_9fa48("33183"), args.length - 1)];
    if (stryMutAct_9fa48("33186") ? args.length !== 5 : stryMutAct_9fa48("33185") ? false : stryMutAct_9fa48("33184") ? true : (stryCov_9fa48("33184", "33185", "33186"), args.length === 5)) {
      if (stryMutAct_9fa48("33187")) {
        {}
      } else {
        stryCov_9fa48("33187");
        winston.warn(stryMutAct_9fa48("33188") ? `` : (stryCov_9fa48("33188"), `[helpers.setupPageRoute(${name})] passing \`middleware\` as the third param is deprecated, it can now be safely removed`));
      }
    }
    middlewares = stryMutAct_9fa48("33189") ? [] : (stryCov_9fa48("33189"), [middleware.authenticateRequest, middleware.maintenanceMode, middleware.registrationComplete, middleware.pluginHooks, ...middlewares, middleware.pageView]);
    router.get(name, middleware.busyCheck, middlewares, middleware.buildHeader, helpers.tryRoute(controller));
    router.get(stryMutAct_9fa48("33190") ? `` : (stryCov_9fa48("33190"), `/api${name}`), middlewares, helpers.tryRoute(controller));
  }
};

// router, name, middleware(deprecated), middlewares(optional), controller
helpers.setupAdminPageRoute = function (...args) {
  if (stryMutAct_9fa48("33191")) {
    {}
  } else {
    stryCov_9fa48("33191");
    const [router, name] = args;
    const middlewares = (stryMutAct_9fa48("33195") ? args.length <= 3 : stryMutAct_9fa48("33194") ? args.length >= 3 : stryMutAct_9fa48("33193") ? false : stryMutAct_9fa48("33192") ? true : (stryCov_9fa48("33192", "33193", "33194", "33195"), args.length > 3)) ? args[stryMutAct_9fa48("33196") ? args.length + 2 : (stryCov_9fa48("33196"), args.length - 2)] : stryMutAct_9fa48("33197") ? ["Stryker was here"] : (stryCov_9fa48("33197"), []);
    const controller = args[stryMutAct_9fa48("33198") ? args.length + 1 : (stryCov_9fa48("33198"), args.length - 1)];
    if (stryMutAct_9fa48("33201") ? args.length !== 5 : stryMutAct_9fa48("33200") ? false : stryMutAct_9fa48("33199") ? true : (stryCov_9fa48("33199", "33200", "33201"), args.length === 5)) {
      if (stryMutAct_9fa48("33202")) {
        {}
      } else {
        stryCov_9fa48("33202");
        winston.warn(stryMutAct_9fa48("33203") ? `` : (stryCov_9fa48("33203"), `[helpers.setupAdminPageRoute(${name})] passing \`middleware\` as the third param is deprecated, it can now be safely removed`));
      }
    }
    router.get(name, middleware.admin.buildHeader, middlewares, helpers.tryRoute(controller));
    router.get(stryMutAct_9fa48("33204") ? `` : (stryCov_9fa48("33204"), `/api${name}`), middlewares, helpers.tryRoute(controller));
  }
};

// router, verb, name, middlewares(optional), controller
helpers.setupApiRoute = function (...args) {
  if (stryMutAct_9fa48("33205")) {
    {}
  } else {
    stryCov_9fa48("33205");
    const [router, verb, name] = args;
    let middlewares = (stryMutAct_9fa48("33209") ? args.length <= 4 : stryMutAct_9fa48("33208") ? args.length >= 4 : stryMutAct_9fa48("33207") ? false : stryMutAct_9fa48("33206") ? true : (stryCov_9fa48("33206", "33207", "33208", "33209"), args.length > 4)) ? args[stryMutAct_9fa48("33210") ? args.length + 2 : (stryCov_9fa48("33210"), args.length - 2)] : stryMutAct_9fa48("33211") ? ["Stryker was here"] : (stryCov_9fa48("33211"), []);
    const controller = args[stryMutAct_9fa48("33212") ? args.length + 1 : (stryCov_9fa48("33212"), args.length - 1)];
    middlewares = stryMutAct_9fa48("33213") ? [] : (stryCov_9fa48("33213"), [middleware.authenticateRequest, middleware.maintenanceMode, middleware.registrationComplete, middleware.pluginHooks, ...middlewares]);
    router[verb](name, middlewares, helpers.tryRoute(controller, (err, res) => {
      if (stryMutAct_9fa48("33214")) {
        {}
      } else {
        stryCov_9fa48("33214");
        controllerHelpers.formatApiResponse(400, res, err);
      }
    }));
  }
};
helpers.tryRoute = function (controller, handler) {
  if (stryMutAct_9fa48("33215")) {
    {}
  } else {
    stryCov_9fa48("33215");
    // `handler` is optional
    if (stryMutAct_9fa48("33218") ? controller && controller.constructor || controller.constructor.name === 'AsyncFunction' : stryMutAct_9fa48("33217") ? false : stryMutAct_9fa48("33216") ? true : (stryCov_9fa48("33216", "33217", "33218"), (stryMutAct_9fa48("33220") ? controller || controller.constructor : stryMutAct_9fa48("33219") ? true : (stryCov_9fa48("33219", "33220"), controller && controller.constructor)) && (stryMutAct_9fa48("33222") ? controller.constructor.name !== 'AsyncFunction' : stryMutAct_9fa48("33221") ? true : (stryCov_9fa48("33221", "33222"), controller.constructor.name === (stryMutAct_9fa48("33223") ? "" : (stryCov_9fa48("33223"), 'AsyncFunction')))))) {
      if (stryMutAct_9fa48("33224")) {
        {}
      } else {
        stryCov_9fa48("33224");
        return async function (req, res, next) {
          if (stryMutAct_9fa48("33225")) {
            {}
          } else {
            stryCov_9fa48("33225");
            try {
              if (stryMutAct_9fa48("33226")) {
                {}
              } else {
                stryCov_9fa48("33226");
                await controller(req, res, next);
              }
            } catch (err) {
              if (stryMutAct_9fa48("33227")) {
                {}
              } else {
                stryCov_9fa48("33227");
                if (stryMutAct_9fa48("33229") ? false : stryMutAct_9fa48("33228") ? true : (stryCov_9fa48("33228", "33229"), handler)) {
                  if (stryMutAct_9fa48("33230")) {
                    {}
                  } else {
                    stryCov_9fa48("33230");
                    return handler(err, res);
                  }
                }
                next(err);
              }
            }
          }
        };
      }
    }
    return controller;
  }
};