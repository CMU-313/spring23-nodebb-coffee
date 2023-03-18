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
const async = require('async');
const passport = require('passport');
const passportLocal = require('passport-local').Strategy;
const BearerStrategy = require('passport-http-bearer').Strategy;
const winston = require('winston');
const meta = require('../meta');
const controllers = require('../controllers');
const helpers = require('../controllers/helpers');
const plugins = require('../plugins');
let loginStrategies = stryMutAct_9fa48("32631") ? ["Stryker was here"] : (stryCov_9fa48("32631"), []);
const Auth = module.exports;
Auth.initialize = function (app, middleware) {
  if (stryMutAct_9fa48("32632")) {
    {}
  } else {
    stryCov_9fa48("32632");
    app.use(passport.initialize());
    app.use(passport.session());
    app.use((req, res, next) => {
      if (stryMutAct_9fa48("32633")) {
        {}
      } else {
        stryCov_9fa48("32633");
        Auth.setAuthVars(req, res);
        next();
      }
    });
    Auth.app = app;
    Auth.middleware = middleware;

    // Apply wrapper around passport.authenticate to pass in keepSessionInfo option
    const _authenticate = passport.authenticate;
    passport.authenticate = (strategy, options, callback) => {
      if (stryMutAct_9fa48("32634")) {
        {}
      } else {
        stryCov_9fa48("32634");
        if (stryMutAct_9fa48("32637") ? !callback || typeof options === 'function' : stryMutAct_9fa48("32636") ? false : stryMutAct_9fa48("32635") ? true : (stryCov_9fa48("32635", "32636", "32637"), (stryMutAct_9fa48("32638") ? callback : (stryCov_9fa48("32638"), !callback)) && (stryMutAct_9fa48("32640") ? typeof options !== 'function' : stryMutAct_9fa48("32639") ? true : (stryCov_9fa48("32639", "32640"), typeof options === (stryMutAct_9fa48("32641") ? "" : (stryCov_9fa48("32641"), 'function')))))) {
          if (stryMutAct_9fa48("32642")) {
            {}
          } else {
            stryCov_9fa48("32642");
            return _authenticate.call(passport, strategy, options);
          }
        }
        if (stryMutAct_9fa48("32645") ? false : stryMutAct_9fa48("32644") ? true : stryMutAct_9fa48("32643") ? options.hasOwnProperty('keepSessionInfo') : (stryCov_9fa48("32643", "32644", "32645"), !options.hasOwnProperty(stryMutAct_9fa48("32646") ? "" : (stryCov_9fa48("32646"), 'keepSessionInfo')))) {
          if (stryMutAct_9fa48("32647")) {
            {}
          } else {
            stryCov_9fa48("32647");
            options.keepSessionInfo = stryMutAct_9fa48("32648") ? false : (stryCov_9fa48("32648"), true);
          }
        }
        return _authenticate.call(passport, strategy, options, callback);
      }
    };
  }
};
Auth.setAuthVars = function setAuthVars(req) {
  if (stryMutAct_9fa48("32649")) {
    {}
  } else {
    stryCov_9fa48("32649");
    const isSpider = req.isSpider();
    req.loggedIn = stryMutAct_9fa48("32652") ? !isSpider || !!req.user : stryMutAct_9fa48("32651") ? false : stryMutAct_9fa48("32650") ? true : (stryCov_9fa48("32650", "32651", "32652"), (stryMutAct_9fa48("32653") ? isSpider : (stryCov_9fa48("32653"), !isSpider)) && (stryMutAct_9fa48("32654") ? !req.user : (stryCov_9fa48("32654"), !(stryMutAct_9fa48("32655") ? req.user : (stryCov_9fa48("32655"), !req.user)))));
    if (stryMutAct_9fa48("32657") ? false : stryMutAct_9fa48("32656") ? true : (stryCov_9fa48("32656", "32657"), req.user)) {
      if (stryMutAct_9fa48("32658")) {
        {}
      } else {
        stryCov_9fa48("32658");
        req.uid = parseInt(req.user.uid, 10);
      }
    } else if (stryMutAct_9fa48("32660") ? false : stryMutAct_9fa48("32659") ? true : (stryCov_9fa48("32659", "32660"), isSpider)) {
      if (stryMutAct_9fa48("32661")) {
        {}
      } else {
        stryCov_9fa48("32661");
        req.uid = stryMutAct_9fa48("32662") ? +1 : (stryCov_9fa48("32662"), -1);
      }
    } else {
      if (stryMutAct_9fa48("32663")) {
        {}
      } else {
        stryCov_9fa48("32663");
        req.uid = 0;
      }
    }
  }
};
Auth.getLoginStrategies = function () {
  if (stryMutAct_9fa48("32664")) {
    {}
  } else {
    stryCov_9fa48("32664");
    return loginStrategies;
  }
};
Auth.verifyToken = async function (token, done) {
  if (stryMutAct_9fa48("32665")) {
    {}
  } else {
    stryCov_9fa48("32665");
    const {
      tokens = stryMutAct_9fa48("32666") ? ["Stryker was here"] : (stryCov_9fa48("32666"), [])
    } = await meta.settings.get(stryMutAct_9fa48("32667") ? "" : (stryCov_9fa48("32667"), 'core.api'));
    const tokenObj = tokens.find(stryMutAct_9fa48("32668") ? () => undefined : (stryCov_9fa48("32668"), t => stryMutAct_9fa48("32671") ? t.token !== token : stryMutAct_9fa48("32670") ? false : stryMutAct_9fa48("32669") ? true : (stryCov_9fa48("32669", "32670", "32671"), t.token === token)));
    const uid = tokenObj ? tokenObj.uid : undefined;
    if (stryMutAct_9fa48("32674") ? uid === undefined : stryMutAct_9fa48("32673") ? false : stryMutAct_9fa48("32672") ? true : (stryCov_9fa48("32672", "32673", "32674"), uid !== undefined)) {
      if (stryMutAct_9fa48("32675")) {
        {}
      } else {
        stryCov_9fa48("32675");
        if (stryMutAct_9fa48("32679") ? parseInt(uid, 10) <= 0 : stryMutAct_9fa48("32678") ? parseInt(uid, 10) >= 0 : stryMutAct_9fa48("32677") ? false : stryMutAct_9fa48("32676") ? true : (stryCov_9fa48("32676", "32677", "32678", "32679"), parseInt(uid, 10) > 0)) {
          if (stryMutAct_9fa48("32680")) {
            {}
          } else {
            stryCov_9fa48("32680");
            done(null, stryMutAct_9fa48("32681") ? {} : (stryCov_9fa48("32681"), {
              uid: uid
            }));
          }
        } else {
          if (stryMutAct_9fa48("32682")) {
            {}
          } else {
            stryCov_9fa48("32682");
            done(null, stryMutAct_9fa48("32683") ? {} : (stryCov_9fa48("32683"), {
              master: stryMutAct_9fa48("32684") ? false : (stryCov_9fa48("32684"), true)
            }));
          }
        }
      }
    } else {
      if (stryMutAct_9fa48("32685")) {
        {}
      } else {
        stryCov_9fa48("32685");
        done(stryMutAct_9fa48("32686") ? true : (stryCov_9fa48("32686"), false));
      }
    }
  }
};
Auth.reloadRoutes = async function (params) {
  if (stryMutAct_9fa48("32687")) {
    {}
  } else {
    stryCov_9fa48("32687");
    loginStrategies.length = 0;
    const {
      router
    } = params;

    // Local Logins
    if (stryMutAct_9fa48("32689") ? false : stryMutAct_9fa48("32688") ? true : (stryCov_9fa48("32688", "32689"), plugins.hooks.hasListeners(stryMutAct_9fa48("32690") ? "" : (stryCov_9fa48("32690"), 'action:auth.overrideLogin')))) {
      if (stryMutAct_9fa48("32691")) {
        {}
      } else {
        stryCov_9fa48("32691");
        winston.warn(stryMutAct_9fa48("32692") ? "" : (stryCov_9fa48("32692"), '[authentication] Login override detected, skipping local login strategy.'));
        plugins.hooks.fire(stryMutAct_9fa48("32693") ? "" : (stryCov_9fa48("32693"), 'action:auth.overrideLogin'));
      }
    } else {
      if (stryMutAct_9fa48("32694")) {
        {}
      } else {
        stryCov_9fa48("32694");
        passport.use(new passportLocal(stryMutAct_9fa48("32695") ? {} : (stryCov_9fa48("32695"), {
          passReqToCallback: stryMutAct_9fa48("32696") ? false : (stryCov_9fa48("32696"), true)
        }), controllers.authentication.localLogin));
      }
    }

    // HTTP bearer authentication
    passport.use(stryMutAct_9fa48("32697") ? "" : (stryCov_9fa48("32697"), 'core.api'), new BearerStrategy({}, Auth.verifyToken));

    // Additional logins via SSO plugins
    try {
      if (stryMutAct_9fa48("32698")) {
        {}
      } else {
        stryCov_9fa48("32698");
        loginStrategies = await plugins.hooks.fire(stryMutAct_9fa48("32699") ? "" : (stryCov_9fa48("32699"), 'filter:auth.init'), loginStrategies);
      }
    } catch (err) {
      if (stryMutAct_9fa48("32700")) {
        {}
      } else {
        stryCov_9fa48("32700");
        winston.error(stryMutAct_9fa48("32701") ? `` : (stryCov_9fa48("32701"), `[authentication] ${err.stack}`));
      }
    }
    loginStrategies = stryMutAct_9fa48("32704") ? loginStrategies && [] : stryMutAct_9fa48("32703") ? false : stryMutAct_9fa48("32702") ? true : (stryCov_9fa48("32702", "32703", "32704"), loginStrategies || (stryMutAct_9fa48("32705") ? ["Stryker was here"] : (stryCov_9fa48("32705"), [])));
    loginStrategies.forEach(strategy => {
      if (stryMutAct_9fa48("32706")) {
        {}
      } else {
        stryCov_9fa48("32706");
        if (stryMutAct_9fa48("32708") ? false : stryMutAct_9fa48("32707") ? true : (stryCov_9fa48("32707", "32708"), strategy.url)) {
          if (stryMutAct_9fa48("32709")) {
            {}
          } else {
            stryCov_9fa48("32709");
            router[stryMutAct_9fa48("32712") ? strategy.urlMethod && 'get' : stryMutAct_9fa48("32711") ? false : stryMutAct_9fa48("32710") ? true : (stryCov_9fa48("32710", "32711", "32712"), strategy.urlMethod || (stryMutAct_9fa48("32713") ? "" : (stryCov_9fa48("32713"), 'get')))](strategy.url, Auth.middleware.applyCSRF, async (req, res, next) => {
              if (stryMutAct_9fa48("32714")) {
                {}
              } else {
                stryCov_9fa48("32714");
                let opts = stryMutAct_9fa48("32715") ? {} : (stryCov_9fa48("32715"), {
                  scope: strategy.scope,
                  prompt: stryMutAct_9fa48("32718") ? strategy.prompt && undefined : stryMutAct_9fa48("32717") ? false : stryMutAct_9fa48("32716") ? true : (stryCov_9fa48("32716", "32717", "32718"), strategy.prompt || undefined)
                });
                if (stryMutAct_9fa48("32721") ? strategy.checkState === false : stryMutAct_9fa48("32720") ? false : stryMutAct_9fa48("32719") ? true : (stryCov_9fa48("32719", "32720", "32721"), strategy.checkState !== (stryMutAct_9fa48("32722") ? true : (stryCov_9fa48("32722"), false)))) {
                  if (stryMutAct_9fa48("32723")) {
                    {}
                  } else {
                    stryCov_9fa48("32723");
                    req.session.ssoState = stryMutAct_9fa48("32726") ? req.csrfToken || req.csrfToken() : stryMutAct_9fa48("32725") ? false : stryMutAct_9fa48("32724") ? true : (stryCov_9fa48("32724", "32725", "32726"), req.csrfToken && req.csrfToken());
                    opts.state = req.session.ssoState;
                  }
                }

                // Allow SSO plugins to override/append options (for use in passport prototype authorizationParams)
                ({
                  opts
                } = await plugins.hooks.fire(stryMutAct_9fa48("32727") ? "" : (stryCov_9fa48("32727"), 'filter:auth.options'), stryMutAct_9fa48("32728") ? {} : (stryCov_9fa48("32728"), {
                  req,
                  res,
                  opts
                })));
                passport.authenticate(strategy.name, opts)(req, res, next);
              }
            });
          }
        }
        router[stryMutAct_9fa48("32731") ? strategy.callbackMethod && 'get' : stryMutAct_9fa48("32730") ? false : stryMutAct_9fa48("32729") ? true : (stryCov_9fa48("32729", "32730", "32731"), strategy.callbackMethod || (stryMutAct_9fa48("32732") ? "" : (stryCov_9fa48("32732"), 'get')))](strategy.callbackURL, (req, res, next) => {
          if (stryMutAct_9fa48("32733")) {
            {}
          } else {
            stryCov_9fa48("32733");
            // Ensure the passed-back state value is identical to the saved ssoState (unless explicitly skipped)
            if (stryMutAct_9fa48("32736") ? strategy.checkState !== false : stryMutAct_9fa48("32735") ? false : stryMutAct_9fa48("32734") ? true : (stryCov_9fa48("32734", "32735", "32736"), strategy.checkState === (stryMutAct_9fa48("32737") ? true : (stryCov_9fa48("32737"), false)))) {
              if (stryMutAct_9fa48("32738")) {
                {}
              } else {
                stryCov_9fa48("32738");
                return next();
              }
            }
            next((stryMutAct_9fa48("32741") ? req.query.state === req.session.ssoState : stryMutAct_9fa48("32740") ? false : stryMutAct_9fa48("32739") ? true : (stryCov_9fa48("32739", "32740", "32741"), req.query.state !== req.session.ssoState)) ? new Error(stryMutAct_9fa48("32742") ? "" : (stryCov_9fa48("32742"), '[[error:csrf-invalid]]')) : null);
          }
        }, (req, res, next) => {
          if (stryMutAct_9fa48("32743")) {
            {}
          } else {
            stryCov_9fa48("32743");
            // Trigger registration interstitial checks
            req.session.registration = stryMutAct_9fa48("32746") ? req.session.registration && {} : stryMutAct_9fa48("32745") ? false : stryMutAct_9fa48("32744") ? true : (stryCov_9fa48("32744", "32745", "32746"), req.session.registration || {});
            // save returnTo for later usage in /register/complete
            // passport seems to remove `req.session.returnTo` after it redirects
            req.session.registration.returnTo = req.session.returnTo;
            passport.authenticate(strategy.name, (err, user) => {
              if (stryMutAct_9fa48("32747")) {
                {}
              } else {
                stryCov_9fa48("32747");
                if (stryMutAct_9fa48("32749") ? false : stryMutAct_9fa48("32748") ? true : (stryCov_9fa48("32748", "32749"), err)) {
                  if (stryMutAct_9fa48("32750")) {
                    {}
                  } else {
                    stryCov_9fa48("32750");
                    if (stryMutAct_9fa48("32753") ? req.session || req.session.registration : stryMutAct_9fa48("32752") ? false : stryMutAct_9fa48("32751") ? true : (stryCov_9fa48("32751", "32752", "32753"), req.session && req.session.registration)) {
                      if (stryMutAct_9fa48("32754")) {
                        {}
                      } else {
                        stryCov_9fa48("32754");
                        delete req.session.registration;
                      }
                    }
                    return next(err);
                  }
                }
                if (stryMutAct_9fa48("32757") ? false : stryMutAct_9fa48("32756") ? true : stryMutAct_9fa48("32755") ? user : (stryCov_9fa48("32755", "32756", "32757"), !user)) {
                  if (stryMutAct_9fa48("32758")) {
                    {}
                  } else {
                    stryCov_9fa48("32758");
                    if (stryMutAct_9fa48("32761") ? req.session || req.session.registration : stryMutAct_9fa48("32760") ? false : stryMutAct_9fa48("32759") ? true : (stryCov_9fa48("32759", "32760", "32761"), req.session && req.session.registration)) {
                      if (stryMutAct_9fa48("32762")) {
                        {}
                      } else {
                        stryCov_9fa48("32762");
                        delete req.session.registration;
                      }
                    }
                    return helpers.redirect(res, (stryMutAct_9fa48("32765") ? strategy.failureUrl === undefined : stryMutAct_9fa48("32764") ? false : stryMutAct_9fa48("32763") ? true : (stryCov_9fa48("32763", "32764", "32765"), strategy.failureUrl !== undefined)) ? strategy.failureUrl : stryMutAct_9fa48("32766") ? "" : (stryCov_9fa48("32766"), '/login'));
                  }
                }
                res.locals.user = user;
                res.locals.strategy = strategy;
                next();
              }
            })(req, res, next);
          }
        }, Auth.middleware.validateAuth, (req, res, next) => {
          if (stryMutAct_9fa48("32767")) {
            {}
          } else {
            stryCov_9fa48("32767");
            async.waterfall(stryMutAct_9fa48("32768") ? [] : (stryCov_9fa48("32768"), [async.apply(req.login.bind(req), res.locals.user, stryMutAct_9fa48("32769") ? {} : (stryCov_9fa48("32769"), {
              keepSessionInfo: stryMutAct_9fa48("32770") ? false : (stryCov_9fa48("32770"), true)
            })), async.apply(controllers.authentication.onSuccessfulLogin, req, req.uid)]), err => {
              if (stryMutAct_9fa48("32771")) {
                {}
              } else {
                stryCov_9fa48("32771");
                if (stryMutAct_9fa48("32773") ? false : stryMutAct_9fa48("32772") ? true : (stryCov_9fa48("32772", "32773"), err)) {
                  if (stryMutAct_9fa48("32774")) {
                    {}
                  } else {
                    stryCov_9fa48("32774");
                    return next(err);
                  }
                }
                helpers.redirect(res, (stryMutAct_9fa48("32777") ? strategy.successUrl === undefined : stryMutAct_9fa48("32776") ? false : stryMutAct_9fa48("32775") ? true : (stryCov_9fa48("32775", "32776", "32777"), strategy.successUrl !== undefined)) ? strategy.successUrl : stryMutAct_9fa48("32778") ? "" : (stryCov_9fa48("32778"), '/'));
              }
            });
          }
        });
      }
    });
    const multipart = require('connect-multiparty');
    const multipartMiddleware = multipart();
    const middlewares = stryMutAct_9fa48("32779") ? [] : (stryCov_9fa48("32779"), [multipartMiddleware, Auth.middleware.applyCSRF, Auth.middleware.applyBlacklist]);
    router.post(stryMutAct_9fa48("32780") ? "" : (stryCov_9fa48("32780"), '/register'), middlewares, controllers.authentication.register);
    router.post(stryMutAct_9fa48("32781") ? "" : (stryCov_9fa48("32781"), '/register/complete'), middlewares, controllers.authentication.registerComplete);
    router.post(stryMutAct_9fa48("32782") ? "" : (stryCov_9fa48("32782"), '/register/abort'), Auth.middleware.applyCSRF, controllers.authentication.registerAbort);
    router.post(stryMutAct_9fa48("32783") ? "" : (stryCov_9fa48("32783"), '/login'), Auth.middleware.applyCSRF, Auth.middleware.applyBlacklist, controllers.authentication.login);
    router.post(stryMutAct_9fa48("32784") ? "" : (stryCov_9fa48("32784"), '/logout'), Auth.middleware.applyCSRF, controllers.authentication.logout);
  }
};
passport.serializeUser((user, done) => {
  if (stryMutAct_9fa48("32785")) {
    {}
  } else {
    stryCov_9fa48("32785");
    done(null, user.uid);
  }
});
passport.deserializeUser((uid, done) => {
  if (stryMutAct_9fa48("32786")) {
    {}
  } else {
    stryCov_9fa48("32786");
    done(null, stryMutAct_9fa48("32787") ? {} : (stryCov_9fa48("32787"), {
      uid: uid
    }));
  }
});