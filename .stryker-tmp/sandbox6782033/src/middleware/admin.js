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
const jsesc = require('jsesc');
const nconf = require('nconf');
const semver = require('semver');
const user = require('../user');
const meta = require('../meta');
const plugins = require('../plugins');
const privileges = require('../privileges');
const utils = require('../utils');
const versions = require('../admin/versions');
const helpers = require('./helpers');
const controllers = stryMutAct_9fa48("25100") ? {} : (stryCov_9fa48("25100"), {
  api: require('../controllers/api'),
  helpers: require('../controllers/helpers')
});
const middleware = module.exports;
middleware.buildHeader = helpers.try(async (req, res, next) => {
  if (stryMutAct_9fa48("25101")) {
    {}
  } else {
    stryCov_9fa48("25101");
    res.locals.renderAdminHeader = stryMutAct_9fa48("25102") ? false : (stryCov_9fa48("25102"), true);
    if (stryMutAct_9fa48("25105") ? req.method !== 'GET' : stryMutAct_9fa48("25104") ? false : stryMutAct_9fa48("25103") ? true : (stryCov_9fa48("25103", "25104", "25105"), req.method === (stryMutAct_9fa48("25106") ? "" : (stryCov_9fa48("25106"), 'GET')))) {
      if (stryMutAct_9fa48("25107")) {
        {}
      } else {
        stryCov_9fa48("25107");
        await require('./index').applyCSRFasync(req, res);
      }
    }
    res.locals.config = await controllers.api.loadConfig(req);
    next();
  }
});
middleware.renderHeader = async (req, res, data) => {
  if (stryMutAct_9fa48("25108")) {
    {}
  } else {
    stryCov_9fa48("25108");
    const custom_header = stryMutAct_9fa48("25109") ? {} : (stryCov_9fa48("25109"), {
      plugins: stryMutAct_9fa48("25110") ? ["Stryker was here"] : (stryCov_9fa48("25110"), []),
      authentication: stryMutAct_9fa48("25111") ? ["Stryker was here"] : (stryCov_9fa48("25111"), [])
    });
    res.locals.config = stryMutAct_9fa48("25114") ? res.locals.config && {} : stryMutAct_9fa48("25113") ? false : stryMutAct_9fa48("25112") ? true : (stryCov_9fa48("25112", "25113", "25114"), res.locals.config || {});
    const results = await utils.promiseParallel(stryMutAct_9fa48("25115") ? {} : (stryCov_9fa48("25115"), {
      userData: user.getUserFields(req.uid, stryMutAct_9fa48("25116") ? [] : (stryCov_9fa48("25116"), [stryMutAct_9fa48("25117") ? "" : (stryCov_9fa48("25117"), 'username'), stryMutAct_9fa48("25118") ? "" : (stryCov_9fa48("25118"), 'userslug'), stryMutAct_9fa48("25119") ? "" : (stryCov_9fa48("25119"), 'email'), stryMutAct_9fa48("25120") ? "" : (stryCov_9fa48("25120"), 'picture'), stryMutAct_9fa48("25121") ? "" : (stryCov_9fa48("25121"), 'email:confirmed')])),
      scripts: getAdminScripts(),
      custom_header: plugins.hooks.fire(stryMutAct_9fa48("25122") ? "" : (stryCov_9fa48("25122"), 'filter:admin.header.build'), custom_header),
      configs: meta.configs.list(),
      latestVersion: getLatestVersion(),
      privileges: privileges.admin.get(req.uid),
      tags: meta.tags.parse(req, {}, stryMutAct_9fa48("25123") ? ["Stryker was here"] : (stryCov_9fa48("25123"), []), stryMutAct_9fa48("25124") ? ["Stryker was here"] : (stryCov_9fa48("25124"), []))
    }));
    const {
      userData
    } = results;
    userData.uid = req.uid;
    userData[stryMutAct_9fa48("25125") ? "" : (stryCov_9fa48("25125"), 'email:confirmed')] = stryMutAct_9fa48("25128") ? userData['email:confirmed'] !== 1 : stryMutAct_9fa48("25127") ? false : stryMutAct_9fa48("25126") ? true : (stryCov_9fa48("25126", "25127", "25128"), userData[stryMutAct_9fa48("25129") ? "" : (stryCov_9fa48("25129"), 'email:confirmed')] === 1);
    userData.privileges = results.privileges;
    let acpPath = stryMutAct_9fa48("25130") ? req.path.split('/') : (stryCov_9fa48("25130"), req.path.slice(1).split(stryMutAct_9fa48("25131") ? "" : (stryCov_9fa48("25131"), '/')));
    acpPath.forEach((path, i) => {
      if (stryMutAct_9fa48("25132")) {
        {}
      } else {
        stryCov_9fa48("25132");
        acpPath[i] = stryMutAct_9fa48("25133") ? path.charAt(0).toUpperCase() - path.slice(1) : (stryCov_9fa48("25133"), (stryMutAct_9fa48("25135") ? path.toUpperCase() : stryMutAct_9fa48("25134") ? path.charAt(0).toLowerCase() : (stryCov_9fa48("25134", "25135"), path.charAt(0).toUpperCase())) + (stryMutAct_9fa48("25136") ? path : (stryCov_9fa48("25136"), path.slice(1))));
      }
    });
    acpPath = acpPath.join(stryMutAct_9fa48("25137") ? "" : (stryCov_9fa48("25137"), ' > '));
    const version = nconf.get(stryMutAct_9fa48("25138") ? "" : (stryCov_9fa48("25138"), 'version'));
    res.locals.config.userLang = stryMutAct_9fa48("25141") ? res.locals.config.acpLang && res.locals.config.userLang : stryMutAct_9fa48("25140") ? false : stryMutAct_9fa48("25139") ? true : (stryCov_9fa48("25139", "25140", "25141"), res.locals.config.acpLang || res.locals.config.userLang);
    let templateValues = stryMutAct_9fa48("25142") ? {} : (stryCov_9fa48("25142"), {
      config: res.locals.config,
      configJSON: jsesc(JSON.stringify(res.locals.config), stryMutAct_9fa48("25143") ? {} : (stryCov_9fa48("25143"), {
        isScriptContext: stryMutAct_9fa48("25144") ? false : (stryCov_9fa48("25144"), true)
      })),
      relative_path: res.locals.config.relative_path,
      adminConfigJSON: encodeURIComponent(JSON.stringify(results.configs)),
      metaTags: results.tags.meta,
      linkTags: results.tags.link,
      user: userData,
      userJSON: jsesc(JSON.stringify(userData), stryMutAct_9fa48("25145") ? {} : (stryCov_9fa48("25145"), {
        isScriptContext: stryMutAct_9fa48("25146") ? false : (stryCov_9fa48("25146"), true)
      })),
      plugins: results.custom_header.plugins,
      authentication: results.custom_header.authentication,
      scripts: results.scripts,
      'cache-buster': stryMutAct_9fa48("25149") ? meta.config['cache-buster'] && '' : stryMutAct_9fa48("25148") ? false : stryMutAct_9fa48("25147") ? true : (stryCov_9fa48("25147", "25148", "25149"), meta.config[stryMutAct_9fa48("25150") ? "" : (stryCov_9fa48("25150"), 'cache-buster')] || (stryMutAct_9fa48("25151") ? "Stryker was here!" : (stryCov_9fa48("25151"), ''))),
      env: stryMutAct_9fa48("25152") ? !process.env.NODE_ENV : (stryCov_9fa48("25152"), !(stryMutAct_9fa48("25153") ? process.env.NODE_ENV : (stryCov_9fa48("25153"), !process.env.NODE_ENV))),
      title: stryMutAct_9fa48("25154") ? `` : (stryCov_9fa48("25154"), `${stryMutAct_9fa48("25157") ? acpPath && 'Dashboard' : stryMutAct_9fa48("25156") ? false : stryMutAct_9fa48("25155") ? true : (stryCov_9fa48("25155", "25156", "25157"), acpPath || (stryMutAct_9fa48("25158") ? "" : (stryCov_9fa48("25158"), 'Dashboard')))} | NodeBB Admin Control Panel`),
      bodyClass: data.bodyClass,
      version: version,
      latestVersion: results.latestVersion,
      upgradeAvailable: stryMutAct_9fa48("25161") ? results.latestVersion || semver.gt(results.latestVersion, version) : stryMutAct_9fa48("25160") ? false : stryMutAct_9fa48("25159") ? true : (stryCov_9fa48("25159", "25160", "25161"), results.latestVersion && semver.gt(results.latestVersion, version)),
      showManageMenu: stryMutAct_9fa48("25164") ? results.privileges.superadmin && ['categories', 'privileges', 'users', 'admins-mods', 'groups', 'tags', 'settings'].some(priv => results.privileges[`admin:${priv}`]) : stryMutAct_9fa48("25163") ? false : stryMutAct_9fa48("25162") ? true : (stryCov_9fa48("25162", "25163", "25164"), results.privileges.superadmin || (stryMutAct_9fa48("25165") ? ['categories', 'privileges', 'users', 'admins-mods', 'groups', 'tags', 'settings'].every(priv => results.privileges[`admin:${priv}`]) : (stryCov_9fa48("25165"), (stryMutAct_9fa48("25166") ? [] : (stryCov_9fa48("25166"), [stryMutAct_9fa48("25167") ? "" : (stryCov_9fa48("25167"), 'categories'), stryMutAct_9fa48("25168") ? "" : (stryCov_9fa48("25168"), 'privileges'), stryMutAct_9fa48("25169") ? "" : (stryCov_9fa48("25169"), 'users'), stryMutAct_9fa48("25170") ? "" : (stryCov_9fa48("25170"), 'admins-mods'), stryMutAct_9fa48("25171") ? "" : (stryCov_9fa48("25171"), 'groups'), stryMutAct_9fa48("25172") ? "" : (stryCov_9fa48("25172"), 'tags'), stryMutAct_9fa48("25173") ? "" : (stryCov_9fa48("25173"), 'settings')])).some(stryMutAct_9fa48("25174") ? () => undefined : (stryCov_9fa48("25174"), priv => results.privileges[stryMutAct_9fa48("25175") ? `` : (stryCov_9fa48("25175"), `admin:${priv}`)])))))
    });
    templateValues.template = stryMutAct_9fa48("25176") ? {} : (stryCov_9fa48("25176"), {
      name: res.locals.template
    });
    templateValues.template[res.locals.template] = stryMutAct_9fa48("25177") ? false : (stryCov_9fa48("25177"), true);
    ({
      templateData: templateValues
    } = await plugins.hooks.fire(stryMutAct_9fa48("25178") ? "" : (stryCov_9fa48("25178"), 'filter:middleware.renderAdminHeader'), stryMutAct_9fa48("25179") ? {} : (stryCov_9fa48("25179"), {
      req,
      res,
      templateData: templateValues,
      data
    })));
    return await req.app.renderAsync(stryMutAct_9fa48("25180") ? "" : (stryCov_9fa48("25180"), 'admin/header'), templateValues);
  }
};
async function getAdminScripts() {
  if (stryMutAct_9fa48("25181")) {
    {}
  } else {
    stryCov_9fa48("25181");
    const scripts = await plugins.hooks.fire(stryMutAct_9fa48("25182") ? "" : (stryCov_9fa48("25182"), 'filter:admin.scripts.get'), stryMutAct_9fa48("25183") ? ["Stryker was here"] : (stryCov_9fa48("25183"), []));
    return scripts.map(stryMutAct_9fa48("25184") ? () => undefined : (stryCov_9fa48("25184"), script => stryMutAct_9fa48("25185") ? {} : (stryCov_9fa48("25185"), {
      src: script
    })));
  }
}
async function getLatestVersion() {
  if (stryMutAct_9fa48("25186")) {
    {}
  } else {
    stryCov_9fa48("25186");
    try {
      if (stryMutAct_9fa48("25187")) {
        {}
      } else {
        stryCov_9fa48("25187");
        const result = await versions.getLatestVersion();
        return result;
      }
    } catch (err) {
      if (stryMutAct_9fa48("25188")) {
        {}
      } else {
        stryCov_9fa48("25188");
        winston.error(stryMutAct_9fa48("25189") ? `` : (stryCov_9fa48("25189"), `[acp] Failed to fetch latest version${err.stack}`));
      }
    }
    return null;
  }
}
middleware.renderFooter = async function (req, res, data) {
  if (stryMutAct_9fa48("25190")) {
    {}
  } else {
    stryCov_9fa48("25190");
    return await req.app.renderAsync(stryMutAct_9fa48("25191") ? "" : (stryCov_9fa48("25191"), 'admin/footer'), data);
  }
};
middleware.checkPrivileges = helpers.try(async (req, res, next) => {
  if (stryMutAct_9fa48("25192")) {
    {}
  } else {
    stryCov_9fa48("25192");
    // Kick out guests, obviously
    if (stryMutAct_9fa48("25196") ? req.uid > 0 : stryMutAct_9fa48("25195") ? req.uid < 0 : stryMutAct_9fa48("25194") ? false : stryMutAct_9fa48("25193") ? true : (stryCov_9fa48("25193", "25194", "25195", "25196"), req.uid <= 0)) {
      if (stryMutAct_9fa48("25197")) {
        {}
      } else {
        stryCov_9fa48("25197");
        return controllers.helpers.notAllowed(req, res);
      }
    }

    // Otherwise, check for privilege based on page (if not in mapping, deny access)
    const path = req.path.replace(stryMutAct_9fa48("25201") ? /^(\/api)?(\/v3)?\/admin\//g : stryMutAct_9fa48("25200") ? /^(\/api)?(\/v3)\/admin\/?/g : stryMutAct_9fa48("25199") ? /^(\/api)(\/v3)?\/admin\/?/g : stryMutAct_9fa48("25198") ? /(\/api)?(\/v3)?\/admin\/?/g : (stryCov_9fa48("25198", "25199", "25200", "25201"), /^(\/api)?(\/v3)?\/admin\/?/g), stryMutAct_9fa48("25202") ? "Stryker was here!" : (stryCov_9fa48("25202"), ''));
    if (stryMutAct_9fa48("25204") ? false : stryMutAct_9fa48("25203") ? true : (stryCov_9fa48("25203", "25204"), path)) {
      if (stryMutAct_9fa48("25205")) {
        {}
      } else {
        stryCov_9fa48("25205");
        const privilege = privileges.admin.resolve(path);
        if (stryMutAct_9fa48("25208") ? false : stryMutAct_9fa48("25207") ? true : stryMutAct_9fa48("25206") ? await privileges.admin.can(privilege, req.uid) : (stryCov_9fa48("25206", "25207", "25208"), !(await privileges.admin.can(privilege, req.uid)))) {
          if (stryMutAct_9fa48("25209")) {
            {}
          } else {
            stryCov_9fa48("25209");
            return controllers.helpers.notAllowed(req, res);
          }
        }
      }
    } else {
      if (stryMutAct_9fa48("25210")) {
        {}
      } else {
        stryCov_9fa48("25210");
        // If accessing /admin, check for any valid admin privs
        const privilegeSet = await privileges.admin.get(req.uid);
        if (stryMutAct_9fa48("25213") ? false : stryMutAct_9fa48("25212") ? true : stryMutAct_9fa48("25211") ? Object.values(privilegeSet).some(Boolean) : (stryCov_9fa48("25211", "25212", "25213"), !(stryMutAct_9fa48("25214") ? Object.values(privilegeSet).every(Boolean) : (stryCov_9fa48("25214"), Object.values(privilegeSet).some(Boolean))))) {
          if (stryMutAct_9fa48("25215")) {
            {}
          } else {
            stryCov_9fa48("25215");
            return controllers.helpers.notAllowed(req, res);
          }
        }
      }
    }

    // If user does not have password
    const hasPassword = await user.hasPassword(req.uid);
    if (stryMutAct_9fa48("25218") ? false : stryMutAct_9fa48("25217") ? true : stryMutAct_9fa48("25216") ? hasPassword : (stryCov_9fa48("25216", "25217", "25218"), !hasPassword)) {
      if (stryMutAct_9fa48("25219")) {
        {}
      } else {
        stryCov_9fa48("25219");
        return next();
      }
    }

    // Reject if they need to re-login (due to ACP timeout), otherwise extend logout timer
    const loginTime = req.session.meta ? req.session.meta.datetime : 0;
    const adminReloginDuration = stryMutAct_9fa48("25220") ? meta.config.adminReloginDuration / 60000 : (stryCov_9fa48("25220"), meta.config.adminReloginDuration * 60000);
    const disabled = stryMutAct_9fa48("25223") ? meta.config.adminReloginDuration !== 0 : stryMutAct_9fa48("25222") ? false : stryMutAct_9fa48("25221") ? true : (stryCov_9fa48("25221", "25222", "25223"), meta.config.adminReloginDuration === 0);
    if (stryMutAct_9fa48("25226") ? disabled && loginTime && parseInt(loginTime, 10) > Date.now() - adminReloginDuration : stryMutAct_9fa48("25225") ? false : stryMutAct_9fa48("25224") ? true : (stryCov_9fa48("25224", "25225", "25226"), disabled || (stryMutAct_9fa48("25228") ? loginTime || parseInt(loginTime, 10) > Date.now() - adminReloginDuration : stryMutAct_9fa48("25227") ? false : (stryCov_9fa48("25227", "25228"), loginTime && (stryMutAct_9fa48("25231") ? parseInt(loginTime, 10) <= Date.now() - adminReloginDuration : stryMutAct_9fa48("25230") ? parseInt(loginTime, 10) >= Date.now() - adminReloginDuration : stryMutAct_9fa48("25229") ? true : (stryCov_9fa48("25229", "25230", "25231"), parseInt(loginTime, 10) > (stryMutAct_9fa48("25232") ? Date.now() + adminReloginDuration : (stryCov_9fa48("25232"), Date.now() - adminReloginDuration)))))))) {
      if (stryMutAct_9fa48("25233")) {
        {}
      } else {
        stryCov_9fa48("25233");
        const timeLeft = stryMutAct_9fa48("25234") ? parseInt(loginTime, 10) + (Date.now() - adminReloginDuration) : (stryCov_9fa48("25234"), parseInt(loginTime, 10) - (stryMutAct_9fa48("25235") ? Date.now() + adminReloginDuration : (stryCov_9fa48("25235"), Date.now() - adminReloginDuration)));
        if (stryMutAct_9fa48("25238") ? req.session.meta || timeLeft < Math.min(60000, adminReloginDuration) : stryMutAct_9fa48("25237") ? false : stryMutAct_9fa48("25236") ? true : (stryCov_9fa48("25236", "25237", "25238"), req.session.meta && (stryMutAct_9fa48("25241") ? timeLeft >= Math.min(60000, adminReloginDuration) : stryMutAct_9fa48("25240") ? timeLeft <= Math.min(60000, adminReloginDuration) : stryMutAct_9fa48("25239") ? true : (stryCov_9fa48("25239", "25240", "25241"), timeLeft < Math.min(60000, adminReloginDuration))))) {
          if (stryMutAct_9fa48("25242")) {
            {}
          } else {
            stryCov_9fa48("25242");
            stryMutAct_9fa48("25243") ? req.session.meta.datetime -= Math.min(60000, adminReloginDuration) : (stryCov_9fa48("25243"), req.session.meta.datetime += Math.min(60000, adminReloginDuration));
          }
        }
        return next();
      }
    }
    let returnTo = req.path;
    if (stryMutAct_9fa48("25245") ? false : stryMutAct_9fa48("25244") ? true : (stryCov_9fa48("25244", "25245"), nconf.get(stryMutAct_9fa48("25246") ? "" : (stryCov_9fa48("25246"), 'relative_path')))) {
      if (stryMutAct_9fa48("25247")) {
        {}
      } else {
        stryCov_9fa48("25247");
        returnTo = req.path.replace(new RegExp(stryMutAct_9fa48("25248") ? `` : (stryCov_9fa48("25248"), `^${nconf.get(stryMutAct_9fa48("25249") ? "" : (stryCov_9fa48("25249"), 'relative_path'))}`)), stryMutAct_9fa48("25250") ? "Stryker was here!" : (stryCov_9fa48("25250"), ''));
      }
    }
    returnTo = returnTo.replace(stryMutAct_9fa48("25251") ? /\/api/ : (stryCov_9fa48("25251"), /^\/api/), stryMutAct_9fa48("25252") ? "Stryker was here!" : (stryCov_9fa48("25252"), ''));
    req.session.returnTo = returnTo;
    req.session.forceLogin = 1;
    await plugins.hooks.fire(stryMutAct_9fa48("25253") ? "" : (stryCov_9fa48("25253"), 'response:auth.relogin'), stryMutAct_9fa48("25254") ? {} : (stryCov_9fa48("25254"), {
      req,
      res
    }));
    if (stryMutAct_9fa48("25256") ? false : stryMutAct_9fa48("25255") ? true : (stryCov_9fa48("25255", "25256"), res.headersSent)) {
      if (stryMutAct_9fa48("25257")) {
        {}
      } else {
        stryCov_9fa48("25257");
        return;
      }
    }
    if (stryMutAct_9fa48("25259") ? false : stryMutAct_9fa48("25258") ? true : (stryCov_9fa48("25258", "25259"), res.locals.isAPI)) {
      if (stryMutAct_9fa48("25260")) {
        {}
      } else {
        stryCov_9fa48("25260");
        res.status(401).json({});
      }
    } else {
      if (stryMutAct_9fa48("25261")) {
        {}
      } else {
        stryCov_9fa48("25261");
        res.redirect(stryMutAct_9fa48("25262") ? `` : (stryCov_9fa48("25262"), `${nconf.get(stryMutAct_9fa48("25263") ? "" : (stryCov_9fa48("25263"), 'relative_path'))}/login?local=1`));
      }
    }
  }
});