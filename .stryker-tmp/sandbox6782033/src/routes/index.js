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
const path = require('path');
const express = require('express');
const chalk = require('chalk');
const meta = require('../meta');
const controllers = require('../controllers');
const controllerHelpers = require('../controllers/helpers');
const plugins = require('../plugins');
const authRoutes = require('./authentication');
const writeRoutes = require('./write');
const helpers = require('./helpers');
const {
  setupPageRoute
} = helpers;
const _mounts = stryMutAct_9fa48("33231") ? {} : (stryCov_9fa48("33231"), {
  user: require('./user'),
  meta: require('./meta'),
  api: require('./api'),
  admin: require('./admin'),
  feed: require('./feeds')
});
_mounts.main = (app, middleware, controllers) => {
  if (stryMutAct_9fa48("33232")) {
    {}
  } else {
    stryCov_9fa48("33232");
    const loginRegisterMiddleware = stryMutAct_9fa48("33233") ? [] : (stryCov_9fa48("33233"), [middleware.redirectToAccountIfLoggedIn]);
    setupPageRoute(app, stryMutAct_9fa48("33234") ? "" : (stryCov_9fa48("33234"), '/login'), loginRegisterMiddleware, controllers.login);
    setupPageRoute(app, stryMutAct_9fa48("33235") ? "" : (stryCov_9fa48("33235"), '/register'), loginRegisterMiddleware, controllers.register);
    setupPageRoute(app, stryMutAct_9fa48("33236") ? "" : (stryCov_9fa48("33236"), '/register/complete'), stryMutAct_9fa48("33237") ? ["Stryker was here"] : (stryCov_9fa48("33237"), []), controllers.registerInterstitial);
    setupPageRoute(app, stryMutAct_9fa48("33238") ? "" : (stryCov_9fa48("33238"), '/compose'), stryMutAct_9fa48("33239") ? ["Stryker was here"] : (stryCov_9fa48("33239"), []), controllers.composer.get);
    setupPageRoute(app, stryMutAct_9fa48("33240") ? "" : (stryCov_9fa48("33240"), '/confirm/:code'), stryMutAct_9fa48("33241") ? ["Stryker was here"] : (stryCov_9fa48("33241"), []), controllers.confirmEmail);
    setupPageRoute(app, stryMutAct_9fa48("33242") ? "" : (stryCov_9fa48("33242"), '/outgoing'), stryMutAct_9fa48("33243") ? ["Stryker was here"] : (stryCov_9fa48("33243"), []), controllers.outgoing);
    setupPageRoute(app, stryMutAct_9fa48("33244") ? "" : (stryCov_9fa48("33244"), '/search'), stryMutAct_9fa48("33245") ? ["Stryker was here"] : (stryCov_9fa48("33245"), []), controllers.search.search);
    setupPageRoute(app, stryMutAct_9fa48("33246") ? "" : (stryCov_9fa48("33246"), '/reset/:code?'), stryMutAct_9fa48("33247") ? [] : (stryCov_9fa48("33247"), [middleware.delayLoading]), controllers.reset);
    setupPageRoute(app, stryMutAct_9fa48("33248") ? "" : (stryCov_9fa48("33248"), '/tos'), stryMutAct_9fa48("33249") ? ["Stryker was here"] : (stryCov_9fa48("33249"), []), controllers.termsOfUse);
    setupPageRoute(app, stryMutAct_9fa48("33250") ? "" : (stryCov_9fa48("33250"), '/email/unsubscribe/:token'), stryMutAct_9fa48("33251") ? ["Stryker was here"] : (stryCov_9fa48("33251"), []), controllers.accounts.settings.unsubscribe);
    app.post(stryMutAct_9fa48("33252") ? "" : (stryCov_9fa48("33252"), '/email/unsubscribe/:token'), controllers.accounts.settings.unsubscribePost);
    app.post(stryMutAct_9fa48("33253") ? "" : (stryCov_9fa48("33253"), '/compose'), middleware.applyCSRF, controllers.composer.post);
  }
};
_mounts.mod = (app, middleware, controllers) => {
  if (stryMutAct_9fa48("33254")) {
    {}
  } else {
    stryCov_9fa48("33254");
    setupPageRoute(app, stryMutAct_9fa48("33255") ? "" : (stryCov_9fa48("33255"), '/flags'), stryMutAct_9fa48("33256") ? ["Stryker was here"] : (stryCov_9fa48("33256"), []), controllers.mods.flags.list);
    setupPageRoute(app, stryMutAct_9fa48("33257") ? "" : (stryCov_9fa48("33257"), '/flags/:flagId'), stryMutAct_9fa48("33258") ? ["Stryker was here"] : (stryCov_9fa48("33258"), []), controllers.mods.flags.detail);
    setupPageRoute(app, stryMutAct_9fa48("33259") ? "" : (stryCov_9fa48("33259"), '/post-queue/:id?'), stryMutAct_9fa48("33260") ? ["Stryker was here"] : (stryCov_9fa48("33260"), []), controllers.mods.postQueue);
  }
};
_mounts.globalMod = (app, middleware, controllers) => {
  if (stryMutAct_9fa48("33261")) {
    {}
  } else {
    stryCov_9fa48("33261");
    setupPageRoute(app, stryMutAct_9fa48("33262") ? "" : (stryCov_9fa48("33262"), '/ip-blacklist'), stryMutAct_9fa48("33263") ? ["Stryker was here"] : (stryCov_9fa48("33263"), []), controllers.globalMods.ipBlacklist);
    setupPageRoute(app, stryMutAct_9fa48("33264") ? "" : (stryCov_9fa48("33264"), '/registration-queue'), stryMutAct_9fa48("33265") ? ["Stryker was here"] : (stryCov_9fa48("33265"), []), controllers.globalMods.registrationQueue);
  }
};
_mounts.topic = (app, name, middleware, controllers) => {
  if (stryMutAct_9fa48("33266")) {
    {}
  } else {
    stryCov_9fa48("33266");
    setupPageRoute(app, stryMutAct_9fa48("33267") ? `` : (stryCov_9fa48("33267"), `/${name}/:topic_id/:slug/:post_index?`), stryMutAct_9fa48("33268") ? ["Stryker was here"] : (stryCov_9fa48("33268"), []), controllers.topics.get);
    setupPageRoute(app, stryMutAct_9fa48("33269") ? `` : (stryCov_9fa48("33269"), `/${name}/:topic_id/:slug?`), stryMutAct_9fa48("33270") ? ["Stryker was here"] : (stryCov_9fa48("33270"), []), controllers.topics.get);
  }
};
_mounts.post = (app, name, middleware, controllers) => {
  if (stryMutAct_9fa48("33271")) {
    {}
  } else {
    stryCov_9fa48("33271");
    const middlewares = stryMutAct_9fa48("33272") ? [] : (stryCov_9fa48("33272"), [middleware.maintenanceMode, middleware.authenticateRequest, middleware.registrationComplete, middleware.pluginHooks]);
    app.get(stryMutAct_9fa48("33273") ? `` : (stryCov_9fa48("33273"), `/${name}/:pid`), middleware.busyCheck, middlewares, controllers.posts.redirectToPost);
    app.get(stryMutAct_9fa48("33274") ? `` : (stryCov_9fa48("33274"), `/api/${name}/:pid`), middlewares, controllers.posts.redirectToPost);
  }
};
_mounts.tags = (app, name, middleware, controllers) => {
  if (stryMutAct_9fa48("33275")) {
    {}
  } else {
    stryCov_9fa48("33275");
    setupPageRoute(app, stryMutAct_9fa48("33276") ? `` : (stryCov_9fa48("33276"), `/${name}/:tag`), stryMutAct_9fa48("33277") ? [] : (stryCov_9fa48("33277"), [middleware.privateTagListing]), controllers.tags.getTag);
    setupPageRoute(app, stryMutAct_9fa48("33278") ? `` : (stryCov_9fa48("33278"), `/${name}`), stryMutAct_9fa48("33279") ? [] : (stryCov_9fa48("33279"), [middleware.privateTagListing]), controllers.tags.getTags);
  }
};
_mounts.category = (app, name, middleware, controllers) => {
  if (stryMutAct_9fa48("33280")) {
    {}
  } else {
    stryCov_9fa48("33280");
    setupPageRoute(app, stryMutAct_9fa48("33281") ? "" : (stryCov_9fa48("33281"), '/categories'), stryMutAct_9fa48("33282") ? ["Stryker was here"] : (stryCov_9fa48("33282"), []), controllers.categories.list);
    setupPageRoute(app, stryMutAct_9fa48("33283") ? "" : (stryCov_9fa48("33283"), '/popular'), stryMutAct_9fa48("33284") ? ["Stryker was here"] : (stryCov_9fa48("33284"), []), controllers.popular.get);
    setupPageRoute(app, stryMutAct_9fa48("33285") ? "" : (stryCov_9fa48("33285"), '/recent'), stryMutAct_9fa48("33286") ? ["Stryker was here"] : (stryCov_9fa48("33286"), []), controllers.recent.get);
    setupPageRoute(app, stryMutAct_9fa48("33287") ? "" : (stryCov_9fa48("33287"), '/top'), stryMutAct_9fa48("33288") ? ["Stryker was here"] : (stryCov_9fa48("33288"), []), controllers.top.get);
    setupPageRoute(app, stryMutAct_9fa48("33289") ? "" : (stryCov_9fa48("33289"), '/unread'), stryMutAct_9fa48("33290") ? [] : (stryCov_9fa48("33290"), [middleware.ensureLoggedIn]), controllers.unread.get);
    setupPageRoute(app, stryMutAct_9fa48("33291") ? `` : (stryCov_9fa48("33291"), `/${name}/:category_id/:slug/:topic_index`), stryMutAct_9fa48("33292") ? ["Stryker was here"] : (stryCov_9fa48("33292"), []), controllers.category.get);
    setupPageRoute(app, stryMutAct_9fa48("33293") ? `` : (stryCov_9fa48("33293"), `/${name}/:category_id/:slug?`), stryMutAct_9fa48("33294") ? ["Stryker was here"] : (stryCov_9fa48("33294"), []), controllers.category.get);
  }
};
_mounts.career = (app, name, middleware, controllers) => {
  if (stryMutAct_9fa48("33295")) {
    {}
  } else {
    stryCov_9fa48("33295");
    const middlewares = stryMutAct_9fa48("33296") ? [] : (stryCov_9fa48("33296"), [middleware.ensureLoggedIn]);
    setupPageRoute(app, stryMutAct_9fa48("33297") ? `` : (stryCov_9fa48("33297"), `/${name}`), middlewares, controllers.career.get);
  }
};
_mounts.users = (app, name, middleware, controllers) => {
  if (stryMutAct_9fa48("33298")) {
    {}
  } else {
    stryCov_9fa48("33298");
    const middlewares = stryMutAct_9fa48("33299") ? [] : (stryCov_9fa48("33299"), [middleware.canViewUsers]);
    setupPageRoute(app, stryMutAct_9fa48("33300") ? `` : (stryCov_9fa48("33300"), `/${name}`), middlewares, controllers.users.index);
  }
};
_mounts.groups = (app, name, middleware, controllers) => {
  if (stryMutAct_9fa48("33301")) {
    {}
  } else {
    stryCov_9fa48("33301");
    const middlewares = stryMutAct_9fa48("33302") ? [] : (stryCov_9fa48("33302"), [middleware.canViewGroups]);
    setupPageRoute(app, stryMutAct_9fa48("33303") ? `` : (stryCov_9fa48("33303"), `/${name}`), middlewares, controllers.groups.list);
    setupPageRoute(app, stryMutAct_9fa48("33304") ? `` : (stryCov_9fa48("33304"), `/${name}/:slug`), middlewares, controllers.groups.details);
    setupPageRoute(app, stryMutAct_9fa48("33305") ? `` : (stryCov_9fa48("33305"), `/${name}/:slug/members`), middlewares, controllers.groups.members);
  }
};
module.exports = async function (app, middleware) {
  if (stryMutAct_9fa48("33306")) {
    {}
  } else {
    stryCov_9fa48("33306");
    const router = express.Router();
    router.render = function (...args) {
      if (stryMutAct_9fa48("33307")) {
        {}
      } else {
        stryCov_9fa48("33307");
        app.render(...args);
      }
    };

    // Allow plugins/themes to mount some routes elsewhere
    const remountable = stryMutAct_9fa48("33308") ? [] : (stryCov_9fa48("33308"), [stryMutAct_9fa48("33309") ? "" : (stryCov_9fa48("33309"), 'admin'), stryMutAct_9fa48("33310") ? "" : (stryCov_9fa48("33310"), 'category'), stryMutAct_9fa48("33311") ? "" : (stryCov_9fa48("33311"), 'topic'), stryMutAct_9fa48("33312") ? "" : (stryCov_9fa48("33312"), 'post'), stryMutAct_9fa48("33313") ? "" : (stryCov_9fa48("33313"), 'users'), stryMutAct_9fa48("33314") ? "" : (stryCov_9fa48("33314"), 'user'), stryMutAct_9fa48("33315") ? "" : (stryCov_9fa48("33315"), 'groups'), stryMutAct_9fa48("33316") ? "" : (stryCov_9fa48("33316"), 'tags'), stryMutAct_9fa48("33317") ? "" : (stryCov_9fa48("33317"), 'career')]);
    const {
      mounts
    } = await plugins.hooks.fire(stryMutAct_9fa48("33318") ? "" : (stryCov_9fa48("33318"), 'filter:router.add'), stryMutAct_9fa48("33319") ? {} : (stryCov_9fa48("33319"), {
      mounts: remountable.reduce((memo, mount) => {
        if (stryMutAct_9fa48("33320")) {
          {}
        } else {
          stryCov_9fa48("33320");
          memo[mount] = mount;
          return memo;
        }
      }, {})
    }));
    // Guard against plugins sending back missing/extra mounts
    Object.keys(mounts).forEach(mount => {
      if (stryMutAct_9fa48("33321")) {
        {}
      } else {
        stryCov_9fa48("33321");
        if (stryMutAct_9fa48("33324") ? false : stryMutAct_9fa48("33323") ? true : stryMutAct_9fa48("33322") ? remountable.includes(mount) : (stryCov_9fa48("33322", "33323", "33324"), !remountable.includes(mount))) {
          if (stryMutAct_9fa48("33325")) {
            {}
          } else {
            stryCov_9fa48("33325");
            delete mounts[mount];
          }
        } else if (stryMutAct_9fa48("33328") ? typeof mount === 'string' : stryMutAct_9fa48("33327") ? false : stryMutAct_9fa48("33326") ? true : (stryCov_9fa48("33326", "33327", "33328"), typeof mount !== (stryMutAct_9fa48("33329") ? "" : (stryCov_9fa48("33329"), 'string')))) {
          if (stryMutAct_9fa48("33330")) {
            {}
          } else {
            stryCov_9fa48("33330");
            mounts[mount] = mount;
          }
        }
      }
    });
    remountable.forEach(mount => {
      if (stryMutAct_9fa48("33331")) {
        {}
      } else {
        stryCov_9fa48("33331");
        if (stryMutAct_9fa48("33334") ? false : stryMutAct_9fa48("33333") ? true : stryMutAct_9fa48("33332") ? mounts.hasOwnProperty(mount) : (stryCov_9fa48("33332", "33333", "33334"), !mounts.hasOwnProperty(mount))) {
          if (stryMutAct_9fa48("33335")) {
            {}
          } else {
            stryCov_9fa48("33335");
            mounts[mount] = mount;
          }
        }
      }
    });
    router.all(stryMutAct_9fa48("33336") ? "" : (stryCov_9fa48("33336"), '(/+api|/+api/*?)'), middleware.prepareAPI);
    router.all(stryMutAct_9fa48("33337") ? `` : (stryCov_9fa48("33337"), `(/+api/admin|/+api/admin/*?${(stryMutAct_9fa48("33340") ? mounts.admin === 'admin' : stryMutAct_9fa48("33339") ? false : stryMutAct_9fa48("33338") ? true : (stryCov_9fa48("33338", "33339", "33340"), mounts.admin !== (stryMutAct_9fa48("33341") ? "" : (stryCov_9fa48("33341"), 'admin')))) ? stryMutAct_9fa48("33342") ? `` : (stryCov_9fa48("33342"), `|/+api/${mounts.admin}|/+api/${mounts.admin}/*?`) : stryMutAct_9fa48("33343") ? "Stryker was here!" : (stryCov_9fa48("33343"), '')})`), middleware.authenticateRequest, middleware.ensureLoggedIn, middleware.admin.checkPrivileges);
    router.all(stryMutAct_9fa48("33344") ? `` : (stryCov_9fa48("33344"), `(/+admin|/+admin/*?${(stryMutAct_9fa48("33347") ? mounts.admin === 'admin' : stryMutAct_9fa48("33346") ? false : stryMutAct_9fa48("33345") ? true : (stryCov_9fa48("33345", "33346", "33347"), mounts.admin !== (stryMutAct_9fa48("33348") ? "" : (stryCov_9fa48("33348"), 'admin')))) ? stryMutAct_9fa48("33349") ? `` : (stryCov_9fa48("33349"), `|/+${mounts.admin}|/+${mounts.admin}/*?`) : stryMutAct_9fa48("33350") ? "Stryker was here!" : (stryCov_9fa48("33350"), '')})`), middleware.ensureLoggedIn, middleware.applyCSRF, middleware.admin.checkPrivileges);
    app.use(middleware.stripLeadingSlashes);

    // handle custom homepage routes
    router.use(stryMutAct_9fa48("33351") ? "" : (stryCov_9fa48("33351"), '/'), controllers.home.rewrite);

    // homepage handled by `action:homepage.get:[route]`
    setupPageRoute(router, stryMutAct_9fa48("33352") ? "" : (stryCov_9fa48("33352"), '/'), stryMutAct_9fa48("33353") ? ["Stryker was here"] : (stryCov_9fa48("33353"), []), controllers.home.pluginHook);
    await plugins.reloadRoutes(stryMutAct_9fa48("33354") ? {} : (stryCov_9fa48("33354"), {
      router: router
    }));
    await authRoutes.reloadRoutes(stryMutAct_9fa48("33355") ? {} : (stryCov_9fa48("33355"), {
      router: router
    }));
    await writeRoutes.reload(stryMutAct_9fa48("33356") ? {} : (stryCov_9fa48("33356"), {
      router: router
    }));
    addCoreRoutes(app, router, middleware, mounts);
    winston.info(stryMutAct_9fa48("33357") ? "" : (stryCov_9fa48("33357"), '[router] Routes added'));
  }
};
function addCoreRoutes(app, router, middleware, mounts) {
  if (stryMutAct_9fa48("33358")) {
    {}
  } else {
    stryCov_9fa48("33358");
    _mounts.meta(router, middleware, controllers);
    _mounts.api(router, middleware, controllers);
    _mounts.feed(router, middleware, controllers);
    _mounts.main(router, middleware, controllers);
    _mounts.mod(router, middleware, controllers);
    _mounts.globalMod(router, middleware, controllers);
    addRemountableRoutes(app, router, middleware, mounts);
    const relativePath = nconf.get(stryMutAct_9fa48("33359") ? "" : (stryCov_9fa48("33359"), 'relative_path'));
    app.use(stryMutAct_9fa48("33362") ? relativePath && '/' : stryMutAct_9fa48("33361") ? false : stryMutAct_9fa48("33360") ? true : (stryCov_9fa48("33360", "33361", "33362"), relativePath || (stryMutAct_9fa48("33363") ? "" : (stryCov_9fa48("33363"), '/'))), router);
    if (stryMutAct_9fa48("33366") ? process.env.NODE_ENV !== 'development' : stryMutAct_9fa48("33365") ? false : stryMutAct_9fa48("33364") ? true : (stryCov_9fa48("33364", "33365", "33366"), process.env.NODE_ENV === (stryMutAct_9fa48("33367") ? "" : (stryCov_9fa48("33367"), 'development')))) {
      if (stryMutAct_9fa48("33368")) {
        {}
      } else {
        stryCov_9fa48("33368");
        require('./debug')(app, middleware, controllers);
      }
    }
    app.use(middleware.privateUploads);
    const statics = stryMutAct_9fa48("33369") ? [] : (stryCov_9fa48("33369"), [stryMutAct_9fa48("33370") ? {} : (stryCov_9fa48("33370"), {
      route: stryMutAct_9fa48("33371") ? "" : (stryCov_9fa48("33371"), '/assets'),
      path: path.join(__dirname, stryMutAct_9fa48("33372") ? "" : (stryCov_9fa48("33372"), '../../build/public'))
    }), stryMutAct_9fa48("33373") ? {} : (stryCov_9fa48("33373"), {
      route: stryMutAct_9fa48("33374") ? "" : (stryCov_9fa48("33374"), '/assets'),
      path: path.join(__dirname, stryMutAct_9fa48("33375") ? "" : (stryCov_9fa48("33375"), '../../public'))
    })]);
    const staticOptions = stryMutAct_9fa48("33376") ? {} : (stryCov_9fa48("33376"), {
      maxAge: app.enabled(stryMutAct_9fa48("33377") ? "" : (stryCov_9fa48("33377"), 'cache')) ? 5184000000 : 0
    });
    if (stryMutAct_9fa48("33380") ? path.resolve(__dirname, '../../public/uploads') === nconf.get('upload_path') : stryMutAct_9fa48("33379") ? false : stryMutAct_9fa48("33378") ? true : (stryCov_9fa48("33378", "33379", "33380"), path.resolve(__dirname, stryMutAct_9fa48("33381") ? "" : (stryCov_9fa48("33381"), '../../public/uploads')) !== nconf.get(stryMutAct_9fa48("33382") ? "" : (stryCov_9fa48("33382"), 'upload_path')))) {
      if (stryMutAct_9fa48("33383")) {
        {}
      } else {
        stryCov_9fa48("33383");
        statics.unshift(stryMutAct_9fa48("33384") ? {} : (stryCov_9fa48("33384"), {
          route: stryMutAct_9fa48("33385") ? "" : (stryCov_9fa48("33385"), '/assets/uploads'),
          path: nconf.get(stryMutAct_9fa48("33386") ? "" : (stryCov_9fa48("33386"), 'upload_path'))
        }));
      }
    }
    statics.forEach(obj => {
      if (stryMutAct_9fa48("33387")) {
        {}
      } else {
        stryCov_9fa48("33387");
        app.use(stryMutAct_9fa48("33388") ? relativePath - obj.route : (stryCov_9fa48("33388"), relativePath + obj.route), middleware.addUploadHeaders, express.static(obj.path, staticOptions));
      }
    });
    app.use(stryMutAct_9fa48("33389") ? `` : (stryCov_9fa48("33389"), `${relativePath}/uploads`), (req, res) => {
      if (stryMutAct_9fa48("33390")) {
        {}
      } else {
        stryCov_9fa48("33390");
        res.redirect(stryMutAct_9fa48("33391") ? `` : (stryCov_9fa48("33391"), `${relativePath}/assets/uploads${req.path}?${meta.config[stryMutAct_9fa48("33392") ? "" : (stryCov_9fa48("33392"), 'cache-buster')]}`));
      }
    });
    app.use(stryMutAct_9fa48("33393") ? `` : (stryCov_9fa48("33393"), `${relativePath}/plugins`), (req, res) => {
      if (stryMutAct_9fa48("33394")) {
        {}
      } else {
        stryCov_9fa48("33394");
        winston.warn(stryMutAct_9fa48("33395") ? `` : (stryCov_9fa48("33395"), `${chalk.bold.red(stryMutAct_9fa48("33396") ? "" : (stryCov_9fa48("33396"), '[deprecation]'))} The \`/plugins\` shorthand prefix is deprecated, prefix with \`/assets/plugins\` instead (path: ${req.path})`));
        res.redirect(stryMutAct_9fa48("33397") ? `` : (stryCov_9fa48("33397"), `${relativePath}/assets/plugins${req.path}${stryMutAct_9fa48("33400") ? req._parsedUrl.search && '' : stryMutAct_9fa48("33399") ? false : stryMutAct_9fa48("33398") ? true : (stryCov_9fa48("33398", "33399", "33400"), req._parsedUrl.search || (stryMutAct_9fa48("33401") ? "Stryker was here!" : (stryCov_9fa48("33401"), '')))}`));
      }
    });

    // Skins
    meta.css.supportedSkins.forEach(skin => {
      if (stryMutAct_9fa48("33402")) {
        {}
      } else {
        stryCov_9fa48("33402");
        app.use(stryMutAct_9fa48("33403") ? `` : (stryCov_9fa48("33403"), `${relativePath}/assets/client-${skin}.css`), middleware.buildSkinAsset);
      }
    });
    app.use(controllers[stryMutAct_9fa48("33404") ? "" : (stryCov_9fa48("33404"), '404')].handle404);
    app.use(controllers.errors.handleURIErrors);
    app.use(controllers.errors.handleErrors);
  }
}
function addRemountableRoutes(app, router, middleware, mounts) {
  if (stryMutAct_9fa48("33405")) {
    {}
  } else {
    stryCov_9fa48("33405");
    Object.keys(mounts).map(async mount => {
      if (stryMutAct_9fa48("33406")) {
        {}
      } else {
        stryCov_9fa48("33406");
        const original = mount;
        mount = mounts[original];
        if (stryMutAct_9fa48("33409") ? false : stryMutAct_9fa48("33408") ? true : stryMutAct_9fa48("33407") ? mount : (stryCov_9fa48("33407", "33408", "33409"), !mount)) {
          if (stryMutAct_9fa48("33410")) {
            {}
          } else {
            stryCov_9fa48("33410");
            // do not mount at all
            winston.warn(stryMutAct_9fa48("33411") ? `` : (stryCov_9fa48("33411"), `[router] Not mounting /${original}`));
            return;
          }
        }
        if (stryMutAct_9fa48("33414") ? mount === original : stryMutAct_9fa48("33413") ? false : stryMutAct_9fa48("33412") ? true : (stryCov_9fa48("33412", "33413", "33414"), mount !== original)) {
          if (stryMutAct_9fa48("33415")) {
            {}
          } else {
            stryCov_9fa48("33415");
            // Set up redirect for fallback handling (some js/tpls may still refer to the traditional mount point)
            winston.info(stryMutAct_9fa48("33416") ? `` : (stryCov_9fa48("33416"), `[router] /${original} prefix re-mounted to /${mount}. Requests to /${original}/* will now redirect to /${mount}`));
            router.use(new RegExp(stryMutAct_9fa48("33417") ? `` : (stryCov_9fa48("33417"), `/(api/)?${original}`)), (req, res) => {
              if (stryMutAct_9fa48("33418")) {
                {}
              } else {
                stryCov_9fa48("33418");
                controllerHelpers.redirect(res, stryMutAct_9fa48("33419") ? `` : (stryCov_9fa48("33419"), `${nconf.get(stryMutAct_9fa48("33420") ? "" : (stryCov_9fa48("33420"), 'relative_path'))}/${mount}${req.path}`));
              }
            });
          }
        }
        _mounts[original](router, mount, middleware, controllers);
      }
    });
  }
}