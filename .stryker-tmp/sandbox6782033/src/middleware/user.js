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
const passport = require('passport');
const nconf = require('nconf');
const path = require('path');
const util = require('util');
const user = require('../user');
const privileges = require('../privileges');
const plugins = require('../plugins');
const helpers = require('./helpers');
const auth = require('../routes/authentication');
const writeRouter = require('../routes/write');
const controllers = stryMutAct_9fa48("26234") ? {} : (stryCov_9fa48("26234"), {
  helpers: require('../controllers/helpers'),
  authentication: require('../controllers/authentication')
});
const passportAuthenticateAsync = function (req, res) {
  if (stryMutAct_9fa48("26235")) {
    {}
  } else {
    stryCov_9fa48("26235");
    return new Promise((resolve, reject) => {
      if (stryMutAct_9fa48("26236")) {
        {}
      } else {
        stryCov_9fa48("26236");
        passport.authenticate(stryMutAct_9fa48("26237") ? "" : (stryCov_9fa48("26237"), 'core.api'), (err, user) => {
          if (stryMutAct_9fa48("26238")) {
            {}
          } else {
            stryCov_9fa48("26238");
            if (stryMutAct_9fa48("26240") ? false : stryMutAct_9fa48("26239") ? true : (stryCov_9fa48("26239", "26240"), err)) {
              if (stryMutAct_9fa48("26241")) {
                {}
              } else {
                stryCov_9fa48("26241");
                reject(err);
              }
            } else {
              if (stryMutAct_9fa48("26242")) {
                {}
              } else {
                stryCov_9fa48("26242");
                resolve(user);
                res.on(stryMutAct_9fa48("26243") ? "" : (stryCov_9fa48("26243"), 'finish'), writeRouter.cleanup.bind(null, req));
              }
            }
          }
        })(req, res);
      }
    });
  }
};
module.exports = function (middleware) {
  if (stryMutAct_9fa48("26244")) {
    {}
  } else {
    stryCov_9fa48("26244");
    async function authenticate(req, res) {
      if (stryMutAct_9fa48("26245")) {
        {}
      } else {
        stryCov_9fa48("26245");
        async function finishLogin(req, user) {
          if (stryMutAct_9fa48("26246")) {
            {}
          } else {
            stryCov_9fa48("26246");
            const loginAsync = util.promisify(req.login).bind(req);
            await loginAsync(user, stryMutAct_9fa48("26247") ? {} : (stryCov_9fa48("26247"), {
              keepSessionInfo: stryMutAct_9fa48("26248") ? false : (stryCov_9fa48("26248"), true)
            }));
            await controllers.authentication.onSuccessfulLogin(req, user.uid);
            req.uid = user.uid;
            req.loggedIn = stryMutAct_9fa48("26252") ? req.uid <= 0 : stryMutAct_9fa48("26251") ? req.uid >= 0 : stryMutAct_9fa48("26250") ? false : stryMutAct_9fa48("26249") ? true : (stryCov_9fa48("26249", "26250", "26251", "26252"), req.uid > 0);
            return stryMutAct_9fa48("26253") ? false : (stryCov_9fa48("26253"), true);
          }
        }
        if (stryMutAct_9fa48("26256") ? res.locals.isAPI || req.loggedIn || !req.headers.hasOwnProperty('authorization') : stryMutAct_9fa48("26255") ? false : stryMutAct_9fa48("26254") ? true : (stryCov_9fa48("26254", "26255", "26256"), res.locals.isAPI && (stryMutAct_9fa48("26258") ? req.loggedIn && !req.headers.hasOwnProperty('authorization') : stryMutAct_9fa48("26257") ? true : (stryCov_9fa48("26257", "26258"), req.loggedIn || (stryMutAct_9fa48("26259") ? req.headers.hasOwnProperty('authorization') : (stryCov_9fa48("26259"), !req.headers.hasOwnProperty(stryMutAct_9fa48("26260") ? "" : (stryCov_9fa48("26260"), 'authorization')))))))) {
          if (stryMutAct_9fa48("26261")) {
            {}
          } else {
            stryCov_9fa48("26261");
            // If authenticated via cookie (express-session), protect routes with CSRF checking
            await middleware.applyCSRFasync(req, res);
          }
        }
        if (stryMutAct_9fa48("26263") ? false : stryMutAct_9fa48("26262") ? true : (stryCov_9fa48("26262", "26263"), req.loggedIn)) {
          if (stryMutAct_9fa48("26264")) {
            {}
          } else {
            stryCov_9fa48("26264");
            return stryMutAct_9fa48("26265") ? false : (stryCov_9fa48("26265"), true);
          }
        } else if (stryMutAct_9fa48("26267") ? false : stryMutAct_9fa48("26266") ? true : (stryCov_9fa48("26266", "26267"), req.headers.hasOwnProperty(stryMutAct_9fa48("26268") ? "" : (stryCov_9fa48("26268"), 'authorization')))) {
          if (stryMutAct_9fa48("26269")) {
            {}
          } else {
            stryCov_9fa48("26269");
            const user = await passportAuthenticateAsync(req, res);
            if (stryMutAct_9fa48("26272") ? false : stryMutAct_9fa48("26271") ? true : stryMutAct_9fa48("26270") ? user : (stryCov_9fa48("26270", "26271", "26272"), !user)) {
              if (stryMutAct_9fa48("26273")) {
                {}
              } else {
                stryCov_9fa48("26273");
                return stryMutAct_9fa48("26274") ? false : (stryCov_9fa48("26274"), true);
              }
            }
            if (stryMutAct_9fa48("26276") ? false : stryMutAct_9fa48("26275") ? true : (stryCov_9fa48("26275", "26276"), user.hasOwnProperty(stryMutAct_9fa48("26277") ? "" : (stryCov_9fa48("26277"), 'uid')))) {
              if (stryMutAct_9fa48("26278")) {
                {}
              } else {
                stryCov_9fa48("26278");
                return await finishLogin(req, user);
              }
            } else if (stryMutAct_9fa48("26281") ? user.hasOwnProperty('master') || user.master === true : stryMutAct_9fa48("26280") ? false : stryMutAct_9fa48("26279") ? true : (stryCov_9fa48("26279", "26280", "26281"), user.hasOwnProperty(stryMutAct_9fa48("26282") ? "" : (stryCov_9fa48("26282"), 'master')) && (stryMutAct_9fa48("26284") ? user.master !== true : stryMutAct_9fa48("26283") ? true : (stryCov_9fa48("26283", "26284"), user.master === (stryMutAct_9fa48("26285") ? false : (stryCov_9fa48("26285"), true)))))) {
              if (stryMutAct_9fa48("26286")) {
                {}
              } else {
                stryCov_9fa48("26286");
                // If the token received was a master token, a _uid must also be present for all calls
                if (stryMutAct_9fa48("26289") ? req.body.hasOwnProperty('_uid') && req.query.hasOwnProperty('_uid') : stryMutAct_9fa48("26288") ? false : stryMutAct_9fa48("26287") ? true : (stryCov_9fa48("26287", "26288", "26289"), req.body.hasOwnProperty(stryMutAct_9fa48("26290") ? "" : (stryCov_9fa48("26290"), '_uid')) || req.query.hasOwnProperty(stryMutAct_9fa48("26291") ? "" : (stryCov_9fa48("26291"), '_uid')))) {
                  if (stryMutAct_9fa48("26292")) {
                    {}
                  } else {
                    stryCov_9fa48("26292");
                    user.uid = stryMutAct_9fa48("26295") ? req.body._uid && req.query._uid : stryMutAct_9fa48("26294") ? false : stryMutAct_9fa48("26293") ? true : (stryCov_9fa48("26293", "26294", "26295"), req.body._uid || req.query._uid);
                    delete user.master;
                    return await finishLogin(req, user);
                  }
                }
                throw new Error(stryMutAct_9fa48("26296") ? "" : (stryCov_9fa48("26296"), '[[error:api.master-token-no-uid]]'));
              }
            } else {
              if (stryMutAct_9fa48("26297")) {
                {}
              } else {
                stryCov_9fa48("26297");
                winston.warn(stryMutAct_9fa48("26298") ? "" : (stryCov_9fa48("26298"), '[api/authenticate] Unable to find user after verifying token'));
                return stryMutAct_9fa48("26299") ? false : (stryCov_9fa48("26299"), true);
              }
            }
          }
        }
        await plugins.hooks.fire(stryMutAct_9fa48("26300") ? "" : (stryCov_9fa48("26300"), 'response:middleware.authenticate'), stryMutAct_9fa48("26301") ? {} : (stryCov_9fa48("26301"), {
          req: req,
          res: res,
          next: function () {} // no-op for backwards compatibility
        }));

        if (stryMutAct_9fa48("26304") ? false : stryMutAct_9fa48("26303") ? true : stryMutAct_9fa48("26302") ? res.headersSent : (stryCov_9fa48("26302", "26303", "26304"), !res.headersSent)) {
          if (stryMutAct_9fa48("26305")) {
            {}
          } else {
            stryCov_9fa48("26305");
            auth.setAuthVars(req);
          }
        }
        return stryMutAct_9fa48("26306") ? res.headersSent : (stryCov_9fa48("26306"), !res.headersSent);
      }
    }
    middleware.authenticateRequest = helpers.try(async (req, res, next) => {
      if (stryMutAct_9fa48("26307")) {
        {}
      } else {
        stryCov_9fa48("26307");
        const {
          skip
        } = await plugins.hooks.fire(stryMutAct_9fa48("26308") ? "" : (stryCov_9fa48("26308"), 'filter:middleware.authenticate'), stryMutAct_9fa48("26309") ? {} : (stryCov_9fa48("26309"), {
          skip: stryMutAct_9fa48("26310") ? {} : (stryCov_9fa48("26310"), {
            // get: [],
            post: stryMutAct_9fa48("26311") ? [] : (stryCov_9fa48("26311"), [stryMutAct_9fa48("26312") ? "" : (stryCov_9fa48("26312"), '/api/v3/utilities/login')])
            // etc...
          })
        }));

        const mountedPath = path.join(req.baseUrl, req.path).replace(nconf.get(stryMutAct_9fa48("26313") ? "" : (stryCov_9fa48("26313"), 'relative_path')), stryMutAct_9fa48("26314") ? "Stryker was here!" : (stryCov_9fa48("26314"), ''));
        const method = stryMutAct_9fa48("26315") ? req.method.toUpperCase() : (stryCov_9fa48("26315"), req.method.toLowerCase());
        if (stryMutAct_9fa48("26318") ? skip[method] || skip[method].includes(mountedPath) : stryMutAct_9fa48("26317") ? false : stryMutAct_9fa48("26316") ? true : (stryCov_9fa48("26316", "26317", "26318"), skip[method] && skip[method].includes(mountedPath))) {
          if (stryMutAct_9fa48("26319")) {
            {}
          } else {
            stryCov_9fa48("26319");
            return next();
          }
        }
        if (stryMutAct_9fa48("26322") ? false : stryMutAct_9fa48("26321") ? true : stryMutAct_9fa48("26320") ? await authenticate(req, res) : (stryCov_9fa48("26320", "26321", "26322"), !(await authenticate(req, res)))) {
          if (stryMutAct_9fa48("26323")) {
            {}
          } else {
            stryCov_9fa48("26323");
            return;
          }
        }
        next();
      }
    });
    middleware.ensureSelfOrGlobalPrivilege = helpers.try(async (req, res, next) => {
      if (stryMutAct_9fa48("26324")) {
        {}
      } else {
        stryCov_9fa48("26324");
        await ensureSelfOrMethod(user.isAdminOrGlobalMod, req, res, next);
      }
    });
    middleware.ensureSelfOrPrivileged = helpers.try(async (req, res, next) => {
      if (stryMutAct_9fa48("26325")) {
        {}
      } else {
        stryCov_9fa48("26325");
        await ensureSelfOrMethod(user.isPrivileged, req, res, next);
      }
    });
    async function ensureSelfOrMethod(method, req, res, next) {
      if (stryMutAct_9fa48("26326")) {
        {}
      } else {
        stryCov_9fa48("26326");
        /*
            The "self" part of this middleware hinges on you having used
            middleware.exposeUid prior to invoking this middleware.
        */
        if (stryMutAct_9fa48("26329") ? false : stryMutAct_9fa48("26328") ? true : stryMutAct_9fa48("26327") ? req.loggedIn : (stryCov_9fa48("26327", "26328", "26329"), !req.loggedIn)) {
          if (stryMutAct_9fa48("26330")) {
            {}
          } else {
            stryCov_9fa48("26330");
            return controllers.helpers.notAllowed(req, res);
          }
        }
        if (stryMutAct_9fa48("26333") ? req.uid !== parseInt(res.locals.uid, 10) : stryMutAct_9fa48("26332") ? false : stryMutAct_9fa48("26331") ? true : (stryCov_9fa48("26331", "26332", "26333"), req.uid === parseInt(res.locals.uid, 10))) {
          if (stryMutAct_9fa48("26334")) {
            {}
          } else {
            stryCov_9fa48("26334");
            return next();
          }
        }
        const allowed = await method(req.uid);
        if (stryMutAct_9fa48("26337") ? false : stryMutAct_9fa48("26336") ? true : stryMutAct_9fa48("26335") ? allowed : (stryCov_9fa48("26335", "26336", "26337"), !allowed)) {
          if (stryMutAct_9fa48("26338")) {
            {}
          } else {
            stryCov_9fa48("26338");
            return controllers.helpers.notAllowed(req, res);
          }
        }
        return next();
      }
    }
    middleware.canViewUsers = helpers.try(async (req, res, next) => {
      if (stryMutAct_9fa48("26339")) {
        {}
      } else {
        stryCov_9fa48("26339");
        if (stryMutAct_9fa48("26342") ? parseInt(res.locals.uid, 10) !== req.uid : stryMutAct_9fa48("26341") ? false : stryMutAct_9fa48("26340") ? true : (stryCov_9fa48("26340", "26341", "26342"), parseInt(res.locals.uid, 10) === req.uid)) {
          if (stryMutAct_9fa48("26343")) {
            {}
          } else {
            stryCov_9fa48("26343");
            return next();
          }
        }
        const canView = await privileges.global.can(stryMutAct_9fa48("26344") ? "" : (stryCov_9fa48("26344"), 'view:users'), req.uid);
        if (stryMutAct_9fa48("26346") ? false : stryMutAct_9fa48("26345") ? true : (stryCov_9fa48("26345", "26346"), canView)) {
          if (stryMutAct_9fa48("26347")) {
            {}
          } else {
            stryCov_9fa48("26347");
            return next();
          }
        }
        controllers.helpers.notAllowed(req, res);
      }
    });
    middleware.canViewGroups = helpers.try(async (req, res, next) => {
      if (stryMutAct_9fa48("26348")) {
        {}
      } else {
        stryCov_9fa48("26348");
        const canView = await privileges.global.can(stryMutAct_9fa48("26349") ? "" : (stryCov_9fa48("26349"), 'view:groups'), req.uid);
        if (stryMutAct_9fa48("26351") ? false : stryMutAct_9fa48("26350") ? true : (stryCov_9fa48("26350", "26351"), canView)) {
          if (stryMutAct_9fa48("26352")) {
            {}
          } else {
            stryCov_9fa48("26352");
            return next();
          }
        }
        controllers.helpers.notAllowed(req, res);
      }
    });
    middleware.canChat = helpers.try(async (req, res, next) => {
      if (stryMutAct_9fa48("26353")) {
        {}
      } else {
        stryCov_9fa48("26353");
        const canChat = await privileges.global.can(stryMutAct_9fa48("26354") ? "" : (stryCov_9fa48("26354"), 'chat'), req.uid);
        if (stryMutAct_9fa48("26356") ? false : stryMutAct_9fa48("26355") ? true : (stryCov_9fa48("26355", "26356"), canChat)) {
          if (stryMutAct_9fa48("26357")) {
            {}
          } else {
            stryCov_9fa48("26357");
            return next();
          }
        }
        controllers.helpers.notAllowed(req, res);
      }
    });
    middleware.checkAccountPermissions = helpers.try(async (req, res, next) => {
      if (stryMutAct_9fa48("26358")) {
        {}
      } else {
        stryCov_9fa48("26358");
        // This middleware ensures that only the requested user and admins can pass

        // This check if left behind for legacy purposes. Older plugins may call this middleware without ensureLoggedIn
        if (stryMutAct_9fa48("26361") ? false : stryMutAct_9fa48("26360") ? true : stryMutAct_9fa48("26359") ? req.loggedIn : (stryCov_9fa48("26359", "26360", "26361"), !req.loggedIn)) {
          if (stryMutAct_9fa48("26362")) {
            {}
          } else {
            stryCov_9fa48("26362");
            return controllers.helpers.notAllowed(req, res);
          }
        }
        if (stryMutAct_9fa48("26365") ? false : stryMutAct_9fa48("26364") ? true : stryMutAct_9fa48("26363") ? ['uid', 'userslug'].some(param => req.params.hasOwnProperty(param)) : (stryCov_9fa48("26363", "26364", "26365"), !(stryMutAct_9fa48("26366") ? ['uid', 'userslug'].every(param => req.params.hasOwnProperty(param)) : (stryCov_9fa48("26366"), (stryMutAct_9fa48("26367") ? [] : (stryCov_9fa48("26367"), [stryMutAct_9fa48("26368") ? "" : (stryCov_9fa48("26368"), 'uid'), stryMutAct_9fa48("26369") ? "" : (stryCov_9fa48("26369"), 'userslug')])).some(stryMutAct_9fa48("26370") ? () => undefined : (stryCov_9fa48("26370"), param => req.params.hasOwnProperty(param))))))) {
          if (stryMutAct_9fa48("26371")) {
            {}
          } else {
            stryCov_9fa48("26371");
            return controllers.helpers.notAllowed(req, res);
          }
        }
        const uid = stryMutAct_9fa48("26374") ? req.params.uid && (await user.getUidByUserslug(req.params.userslug)) : stryMutAct_9fa48("26373") ? false : stryMutAct_9fa48("26372") ? true : (stryCov_9fa48("26372", "26373", "26374"), req.params.uid || (await user.getUidByUserslug(req.params.userslug)));
        let allowed = await privileges.users.canEdit(req.uid, uid);
        if (stryMutAct_9fa48("26376") ? false : stryMutAct_9fa48("26375") ? true : (stryCov_9fa48("26375", "26376"), allowed)) {
          if (stryMutAct_9fa48("26377")) {
            {}
          } else {
            stryCov_9fa48("26377");
            return next();
          }
        }
        if (stryMutAct_9fa48("26379") ? false : stryMutAct_9fa48("26378") ? true : (stryCov_9fa48("26378", "26379"), (stryMutAct_9fa48("26381") ? /user\/.\/info$/ : stryMutAct_9fa48("26380") ? /user\/.+\/info/ : (stryCov_9fa48("26380", "26381"), /user\/.+\/info$/)).test(req.path))) {
          if (stryMutAct_9fa48("26382")) {
            {}
          } else {
            stryCov_9fa48("26382");
            allowed = await privileges.global.can(stryMutAct_9fa48("26383") ? "" : (stryCov_9fa48("26383"), 'view:users:info'), req.uid);
          }
        }
        if (stryMutAct_9fa48("26385") ? false : stryMutAct_9fa48("26384") ? true : (stryCov_9fa48("26384", "26385"), allowed)) {
          if (stryMutAct_9fa48("26386")) {
            {}
          } else {
            stryCov_9fa48("26386");
            return next();
          }
        }
        controllers.helpers.notAllowed(req, res);
      }
    });
    middleware.redirectToAccountIfLoggedIn = helpers.try(async (req, res, next) => {
      if (stryMutAct_9fa48("26387")) {
        {}
      } else {
        stryCov_9fa48("26387");
        if (stryMutAct_9fa48("26390") ? req.session.forceLogin && req.uid <= 0 : stryMutAct_9fa48("26389") ? false : stryMutAct_9fa48("26388") ? true : (stryCov_9fa48("26388", "26389", "26390"), req.session.forceLogin || (stryMutAct_9fa48("26393") ? req.uid > 0 : stryMutAct_9fa48("26392") ? req.uid < 0 : stryMutAct_9fa48("26391") ? false : (stryCov_9fa48("26391", "26392", "26393"), req.uid <= 0)))) {
          if (stryMutAct_9fa48("26394")) {
            {}
          } else {
            stryCov_9fa48("26394");
            return next();
          }
        }
        const userslug = await user.getUserField(req.uid, stryMutAct_9fa48("26395") ? "" : (stryCov_9fa48("26395"), 'userslug'));
        controllers.helpers.redirect(res, stryMutAct_9fa48("26396") ? `` : (stryCov_9fa48("26396"), `/user/${userslug}`));
      }
    });
    middleware.redirectUidToUserslug = helpers.try(async (req, res, next) => {
      if (stryMutAct_9fa48("26397")) {
        {}
      } else {
        stryCov_9fa48("26397");
        const uid = parseInt(req.params.uid, 10);
        if (stryMutAct_9fa48("26401") ? uid > 0 : stryMutAct_9fa48("26400") ? uid < 0 : stryMutAct_9fa48("26399") ? false : stryMutAct_9fa48("26398") ? true : (stryCov_9fa48("26398", "26399", "26400", "26401"), uid <= 0)) {
          if (stryMutAct_9fa48("26402")) {
            {}
          } else {
            stryCov_9fa48("26402");
            return next();
          }
        }
        const userslug = await user.getUserField(uid, stryMutAct_9fa48("26403") ? "" : (stryCov_9fa48("26403"), 'userslug'));
        if (stryMutAct_9fa48("26406") ? false : stryMutAct_9fa48("26405") ? true : stryMutAct_9fa48("26404") ? userslug : (stryCov_9fa48("26404", "26405", "26406"), !userslug)) {
          if (stryMutAct_9fa48("26407")) {
            {}
          } else {
            stryCov_9fa48("26407");
            return next();
          }
        }
        const path = req.url.replace(stryMutAct_9fa48("26408") ? /\/api/ : (stryCov_9fa48("26408"), /^\/api/), stryMutAct_9fa48("26409") ? "Stryker was here!" : (stryCov_9fa48("26409"), '')).replace(stryMutAct_9fa48("26410") ? `` : (stryCov_9fa48("26410"), `/uid/${uid}`), stryMutAct_9fa48("26411") ? () => undefined : (stryCov_9fa48("26411"), () => stryMutAct_9fa48("26412") ? `` : (stryCov_9fa48("26412"), `/user/${userslug}`)));
        controllers.helpers.redirect(res, path);
      }
    });
    middleware.redirectMeToUserslug = helpers.try(async (req, res) => {
      if (stryMutAct_9fa48("26413")) {
        {}
      } else {
        stryCov_9fa48("26413");
        const userslug = await user.getUserField(req.uid, stryMutAct_9fa48("26414") ? "" : (stryCov_9fa48("26414"), 'userslug'));
        if (stryMutAct_9fa48("26417") ? false : stryMutAct_9fa48("26416") ? true : stryMutAct_9fa48("26415") ? userslug : (stryCov_9fa48("26415", "26416", "26417"), !userslug)) {
          if (stryMutAct_9fa48("26418")) {
            {}
          } else {
            stryCov_9fa48("26418");
            return controllers.helpers.notAllowed(req, res);
          }
        }
        const path = req.url.replace(stryMutAct_9fa48("26420") ? /^(\/api)\/me/ : stryMutAct_9fa48("26419") ? /(\/api)?\/me/ : (stryCov_9fa48("26419", "26420"), /^(\/api)?\/me/), stryMutAct_9fa48("26421") ? () => undefined : (stryCov_9fa48("26421"), () => stryMutAct_9fa48("26422") ? `` : (stryCov_9fa48("26422"), `/user/${userslug}`)));
        controllers.helpers.redirect(res, path);
      }
    });
    middleware.requireUser = function (req, res, next) {
      if (stryMutAct_9fa48("26423")) {
        {}
      } else {
        stryCov_9fa48("26423");
        if (stryMutAct_9fa48("26425") ? false : stryMutAct_9fa48("26424") ? true : (stryCov_9fa48("26424", "26425"), req.loggedIn)) {
          if (stryMutAct_9fa48("26426")) {
            {}
          } else {
            stryCov_9fa48("26426");
            return next();
          }
        }
        res.status(403).render(stryMutAct_9fa48("26427") ? "" : (stryCov_9fa48("26427"), '403'), stryMutAct_9fa48("26428") ? {} : (stryCov_9fa48("26428"), {
          title: stryMutAct_9fa48("26429") ? "" : (stryCov_9fa48("26429"), '[[global:403.title]]')
        }));
      }
    };
    middleware.registrationComplete = async function registrationComplete(req, res, next) {
      if (stryMutAct_9fa48("26430")) {
        {}
      } else {
        stryCov_9fa48("26430");
        // If the user's session contains registration data, redirect the user to complete registration
        if (stryMutAct_9fa48("26433") ? false : stryMutAct_9fa48("26432") ? true : stryMutAct_9fa48("26431") ? req.session.hasOwnProperty('registration') : (stryCov_9fa48("26431", "26432", "26433"), !req.session.hasOwnProperty(stryMutAct_9fa48("26434") ? "" : (stryCov_9fa48("26434"), 'registration')))) {
          if (stryMutAct_9fa48("26435")) {
            {}
          } else {
            stryCov_9fa48("26435");
            return setImmediate(next);
          }
        }
        const path = (stryMutAct_9fa48("26436") ? req.path.endsWith('/api/') : (stryCov_9fa48("26436"), req.path.startsWith(stryMutAct_9fa48("26437") ? "" : (stryCov_9fa48("26437"), '/api/')))) ? req.path.replace(stryMutAct_9fa48("26438") ? "" : (stryCov_9fa48("26438"), '/api'), stryMutAct_9fa48("26439") ? "Stryker was here!" : (stryCov_9fa48("26439"), '')) : req.path;
        const {
          allowed
        } = await plugins.hooks.fire(stryMutAct_9fa48("26440") ? "" : (stryCov_9fa48("26440"), 'filter:middleware.registrationComplete'), stryMutAct_9fa48("26441") ? {} : (stryCov_9fa48("26441"), {
          allowed: stryMutAct_9fa48("26442") ? [] : (stryCov_9fa48("26442"), [stryMutAct_9fa48("26443") ? "" : (stryCov_9fa48("26443"), '/register/complete')])
        }));
        if (stryMutAct_9fa48("26446") ? false : stryMutAct_9fa48("26445") ? true : stryMutAct_9fa48("26444") ? allowed.includes(path) : (stryCov_9fa48("26444", "26445", "26446"), !allowed.includes(path))) {
          if (stryMutAct_9fa48("26447")) {
            {}
          } else {
            stryCov_9fa48("26447");
            // Append user data if present
            req.session.registration.uid = stryMutAct_9fa48("26450") ? req.session.registration.uid && req.uid : stryMutAct_9fa48("26449") ? false : stryMutAct_9fa48("26448") ? true : (stryCov_9fa48("26448", "26449", "26450"), req.session.registration.uid || req.uid);
            controllers.helpers.redirect(res, stryMutAct_9fa48("26451") ? "" : (stryCov_9fa48("26451"), '/register/complete'));
          }
        } else {
          if (stryMutAct_9fa48("26452")) {
            {}
          } else {
            stryCov_9fa48("26452");
            setImmediate(next);
          }
        }
      }
    };
  }
};