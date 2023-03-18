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
const meta = require('../meta');
const user = require('../user');
const plugins = require('../plugins');
const privileges = require('../privileges');
const helpers = require('./helpers');
const Controllers = module.exports;
Controllers.ping = require('./ping');
Controllers.home = require('./home');
Controllers.topics = require('./topics');
Controllers.posts = require('./posts');
Controllers.career = require('./career');
Controllers.categories = require('./categories');
Controllers.category = require('./category');
Controllers.unread = require('./unread');
Controllers.recent = require('./recent');
Controllers.popular = require('./popular');
Controllers.top = require('./top');
Controllers.tags = require('./tags');
Controllers.search = require('./search');
Controllers.user = require('./user');
Controllers.users = require('./users');
Controllers.groups = require('./groups');
Controllers.accounts = require('./accounts');
Controllers.authentication = require('./authentication');
Controllers.api = require('./api');
Controllers.admin = require('./admin');
Controllers.globalMods = require('./globalmods');
Controllers.mods = require('./mods');
Controllers.sitemap = require('./sitemap');
Controllers.osd = require('./osd');
Controllers[stryMutAct_9fa48("10133") ? "" : (stryCov_9fa48("10133"), '404')] = require('./404');
Controllers.errors = require('./errors');
Controllers.composer = require('./composer');
Controllers.write = require('./write');
Controllers.reset = async function (req, res) {
  if (stryMutAct_9fa48("10134")) {
    {}
  } else {
    stryCov_9fa48("10134");
    if (stryMutAct_9fa48("10136") ? false : stryMutAct_9fa48("10135") ? true : (stryCov_9fa48("10135", "10136"), meta.config[stryMutAct_9fa48("10137") ? "" : (stryCov_9fa48("10137"), 'password:disableEdit')])) {
      if (stryMutAct_9fa48("10138")) {
        {}
      } else {
        stryCov_9fa48("10138");
        return helpers.notAllowed(req, res);
      }
    }
    res.locals.metaTags = stryMutAct_9fa48("10139") ? {} : (stryCov_9fa48("10139"), {
      ...res.locals.metaTags,
      name: stryMutAct_9fa48("10140") ? "" : (stryCov_9fa48("10140"), 'robots'),
      content: stryMutAct_9fa48("10141") ? "" : (stryCov_9fa48("10141"), 'noindex')
    });
    const renderReset = function (code, valid) {
      if (stryMutAct_9fa48("10142")) {
        {}
      } else {
        stryCov_9fa48("10142");
        res.render(stryMutAct_9fa48("10143") ? "" : (stryCov_9fa48("10143"), 'reset_code'), stryMutAct_9fa48("10144") ? {} : (stryCov_9fa48("10144"), {
          valid: valid,
          displayExpiryNotice: req.session.passwordExpired,
          code: code,
          minimumPasswordLength: meta.config.minimumPasswordLength,
          minimumPasswordStrength: meta.config.minimumPasswordStrength,
          breadcrumbs: helpers.buildBreadcrumbs(stryMutAct_9fa48("10145") ? [] : (stryCov_9fa48("10145"), [stryMutAct_9fa48("10146") ? {} : (stryCov_9fa48("10146"), {
            text: stryMutAct_9fa48("10147") ? "" : (stryCov_9fa48("10147"), '[[reset_password:reset_password]]'),
            url: stryMutAct_9fa48("10148") ? "" : (stryCov_9fa48("10148"), '/reset')
          }), stryMutAct_9fa48("10149") ? {} : (stryCov_9fa48("10149"), {
            text: stryMutAct_9fa48("10150") ? "" : (stryCov_9fa48("10150"), '[[reset_password:update_password]]')
          })])),
          title: stryMutAct_9fa48("10151") ? "" : (stryCov_9fa48("10151"), '[[pages:reset]]')
        }));
        delete req.session.passwordExpired;
      }
    };
    if (stryMutAct_9fa48("10153") ? false : stryMutAct_9fa48("10152") ? true : (stryCov_9fa48("10152", "10153"), req.params.code)) {
      if (stryMutAct_9fa48("10154")) {
        {}
      } else {
        stryCov_9fa48("10154");
        req.session.reset_code = req.params.code;
      }
    }
    if (stryMutAct_9fa48("10156") ? false : stryMutAct_9fa48("10155") ? true : (stryCov_9fa48("10155", "10156"), req.session.reset_code)) {
      if (stryMutAct_9fa48("10157")) {
        {}
      } else {
        stryCov_9fa48("10157");
        // Validate and save to local variable before removing from session
        const valid = await user.reset.validate(req.session.reset_code);
        renderReset(req.session.reset_code, valid);
        delete req.session.reset_code;
      }
    } else {
      if (stryMutAct_9fa48("10158")) {
        {}
      } else {
        stryCov_9fa48("10158");
        res.render(stryMutAct_9fa48("10159") ? "" : (stryCov_9fa48("10159"), 'reset'), stryMutAct_9fa48("10160") ? {} : (stryCov_9fa48("10160"), {
          code: null,
          breadcrumbs: helpers.buildBreadcrumbs(stryMutAct_9fa48("10161") ? [] : (stryCov_9fa48("10161"), [stryMutAct_9fa48("10162") ? {} : (stryCov_9fa48("10162"), {
            text: stryMutAct_9fa48("10163") ? "" : (stryCov_9fa48("10163"), '[[reset_password:reset_password]]')
          })])),
          title: stryMutAct_9fa48("10164") ? "" : (stryCov_9fa48("10164"), '[[pages:reset]]')
        }));
      }
    }
  }
};
Controllers.login = async function (req, res) {
  if (stryMutAct_9fa48("10165")) {
    {}
  } else {
    stryCov_9fa48("10165");
    const data = stryMutAct_9fa48("10166") ? {} : (stryCov_9fa48("10166"), {
      loginFormEntry: stryMutAct_9fa48("10167") ? ["Stryker was here"] : (stryCov_9fa48("10167"), [])
    });
    const loginStrategies = require('../routes/authentication').getLoginStrategies();
    const registrationType = stryMutAct_9fa48("10170") ? meta.config.registrationType && 'normal' : stryMutAct_9fa48("10169") ? false : stryMutAct_9fa48("10168") ? true : (stryCov_9fa48("10168", "10169", "10170"), meta.config.registrationType || (stryMutAct_9fa48("10171") ? "" : (stryCov_9fa48("10171"), 'normal')));
    const allowLoginWith = stryMutAct_9fa48("10174") ? meta.config.allowLoginWith && 'username-email' : stryMutAct_9fa48("10173") ? false : stryMutAct_9fa48("10172") ? true : (stryCov_9fa48("10172", "10173", "10174"), meta.config.allowLoginWith || (stryMutAct_9fa48("10175") ? "" : (stryCov_9fa48("10175"), 'username-email')));
    let errorText;
    if (stryMutAct_9fa48("10178") ? req.query.error !== 'csrf-invalid' : stryMutAct_9fa48("10177") ? false : stryMutAct_9fa48("10176") ? true : (stryCov_9fa48("10176", "10177", "10178"), req.query.error === (stryMutAct_9fa48("10179") ? "" : (stryCov_9fa48("10179"), 'csrf-invalid')))) {
      if (stryMutAct_9fa48("10180")) {
        {}
      } else {
        stryCov_9fa48("10180");
        errorText = stryMutAct_9fa48("10181") ? "" : (stryCov_9fa48("10181"), '[[error:csrf-invalid]]');
      }
    } else if (stryMutAct_9fa48("10183") ? false : stryMutAct_9fa48("10182") ? true : (stryCov_9fa48("10182", "10183"), req.query.error)) {
      if (stryMutAct_9fa48("10184")) {
        {}
      } else {
        stryCov_9fa48("10184");
        errorText = validator.escape(String(req.query.error));
      }
    }
    if (stryMutAct_9fa48("10186") ? false : stryMutAct_9fa48("10185") ? true : (stryCov_9fa48("10185", "10186"), req.headers[stryMutAct_9fa48("10187") ? "" : (stryCov_9fa48("10187"), 'x-return-to')])) {
      if (stryMutAct_9fa48("10188")) {
        {}
      } else {
        stryCov_9fa48("10188");
        req.session.returnTo = req.headers[stryMutAct_9fa48("10189") ? "" : (stryCov_9fa48("10189"), 'x-return-to')];
      }
    }

    // Occasionally, x-return-to is passed a full url.
    req.session.returnTo = stryMutAct_9fa48("10192") ? req.session.returnTo || req.session.returnTo.replace(nconf.get('base_url'), '').replace(nconf.get('relative_path'), '') : stryMutAct_9fa48("10191") ? false : stryMutAct_9fa48("10190") ? true : (stryCov_9fa48("10190", "10191", "10192"), req.session.returnTo && req.session.returnTo.replace(nconf.get(stryMutAct_9fa48("10193") ? "" : (stryCov_9fa48("10193"), 'base_url')), stryMutAct_9fa48("10194") ? "Stryker was here!" : (stryCov_9fa48("10194"), '')).replace(nconf.get(stryMutAct_9fa48("10195") ? "" : (stryCov_9fa48("10195"), 'relative_path')), stryMutAct_9fa48("10196") ? "Stryker was here!" : (stryCov_9fa48("10196"), '')));
    data.alternate_logins = stryMutAct_9fa48("10200") ? loginStrategies.length <= 0 : stryMutAct_9fa48("10199") ? loginStrategies.length >= 0 : stryMutAct_9fa48("10198") ? false : stryMutAct_9fa48("10197") ? true : (stryCov_9fa48("10197", "10198", "10199", "10200"), loginStrategies.length > 0);
    data.authentication = loginStrategies;
    data.allowRegistration = stryMutAct_9fa48("10203") ? registrationType !== 'normal' : stryMutAct_9fa48("10202") ? false : stryMutAct_9fa48("10201") ? true : (stryCov_9fa48("10201", "10202", "10203"), registrationType === (stryMutAct_9fa48("10204") ? "" : (stryCov_9fa48("10204"), 'normal')));
    data.allowLoginWith = stryMutAct_9fa48("10205") ? `` : (stryCov_9fa48("10205"), `[[login:${allowLoginWith}]]`);
    data.breadcrumbs = helpers.buildBreadcrumbs(stryMutAct_9fa48("10206") ? [] : (stryCov_9fa48("10206"), [stryMutAct_9fa48("10207") ? {} : (stryCov_9fa48("10207"), {
      text: stryMutAct_9fa48("10208") ? "" : (stryCov_9fa48("10208"), '[[global:login]]')
    })]));
    data.error = stryMutAct_9fa48("10211") ? req.flash('error')[0] && errorText : stryMutAct_9fa48("10210") ? false : stryMutAct_9fa48("10209") ? true : (stryCov_9fa48("10209", "10210", "10211"), req.flash(stryMutAct_9fa48("10212") ? "" : (stryCov_9fa48("10212"), 'error'))[0] || errorText);
    data.title = stryMutAct_9fa48("10213") ? "" : (stryCov_9fa48("10213"), '[[pages:login]]');
    data.allowPasswordReset = stryMutAct_9fa48("10214") ? meta.config['password:disableEdit'] : (stryCov_9fa48("10214"), !meta.config[stryMutAct_9fa48("10215") ? "" : (stryCov_9fa48("10215"), 'password:disableEdit')]);
    const hasLoginPrivilege = await privileges.global.canGroup(stryMutAct_9fa48("10216") ? "" : (stryCov_9fa48("10216"), 'local:login'), stryMutAct_9fa48("10217") ? "" : (stryCov_9fa48("10217"), 'registered-users'));
    data.allowLocalLogin = stryMutAct_9fa48("10220") ? hasLoginPrivilege && parseInt(req.query.local, 10) === 1 : stryMutAct_9fa48("10219") ? false : stryMutAct_9fa48("10218") ? true : (stryCov_9fa48("10218", "10219", "10220"), hasLoginPrivilege || (stryMutAct_9fa48("10222") ? parseInt(req.query.local, 10) !== 1 : stryMutAct_9fa48("10221") ? false : (stryCov_9fa48("10221", "10222"), parseInt(req.query.local, 10) === 1)));
    if (stryMutAct_9fa48("10225") ? !data.allowLocalLogin && !data.allowRegistration && data.alternate_logins || data.authentication.length === 1 : stryMutAct_9fa48("10224") ? false : stryMutAct_9fa48("10223") ? true : (stryCov_9fa48("10223", "10224", "10225"), (stryMutAct_9fa48("10227") ? !data.allowLocalLogin && !data.allowRegistration || data.alternate_logins : stryMutAct_9fa48("10226") ? true : (stryCov_9fa48("10226", "10227"), (stryMutAct_9fa48("10229") ? !data.allowLocalLogin || !data.allowRegistration : stryMutAct_9fa48("10228") ? true : (stryCov_9fa48("10228", "10229"), (stryMutAct_9fa48("10230") ? data.allowLocalLogin : (stryCov_9fa48("10230"), !data.allowLocalLogin)) && (stryMutAct_9fa48("10231") ? data.allowRegistration : (stryCov_9fa48("10231"), !data.allowRegistration)))) && data.alternate_logins)) && (stryMutAct_9fa48("10233") ? data.authentication.length !== 1 : stryMutAct_9fa48("10232") ? true : (stryCov_9fa48("10232", "10233"), data.authentication.length === 1)))) {
      if (stryMutAct_9fa48("10234")) {
        {}
      } else {
        stryCov_9fa48("10234");
        return helpers.redirect(res, stryMutAct_9fa48("10235") ? {} : (stryCov_9fa48("10235"), {
          external: data.authentication[0].url
        }));
      }
    }

    // Re-auth challenge, pre-fill username
    if (stryMutAct_9fa48("10237") ? false : stryMutAct_9fa48("10236") ? true : (stryCov_9fa48("10236", "10237"), req.loggedIn)) {
      if (stryMutAct_9fa48("10238")) {
        {}
      } else {
        stryCov_9fa48("10238");
        const userData = await user.getUserFields(req.uid, stryMutAct_9fa48("10239") ? [] : (stryCov_9fa48("10239"), [stryMutAct_9fa48("10240") ? "" : (stryCov_9fa48("10240"), 'username')]));
        data.username = userData.username;
        data.alternate_logins = stryMutAct_9fa48("10241") ? true : (stryCov_9fa48("10241"), false);
      }
    }
    res.render(stryMutAct_9fa48("10242") ? "" : (stryCov_9fa48("10242"), 'login'), data);
  }
};
Controllers.register = async function (req, res, next) {
  if (stryMutAct_9fa48("10243")) {
    {}
  } else {
    stryCov_9fa48("10243");
    const registrationType = stryMutAct_9fa48("10246") ? meta.config.registrationType && 'normal' : stryMutAct_9fa48("10245") ? false : stryMutAct_9fa48("10244") ? true : (stryCov_9fa48("10244", "10245", "10246"), meta.config.registrationType || (stryMutAct_9fa48("10247") ? "" : (stryCov_9fa48("10247"), 'normal')));
    if (stryMutAct_9fa48("10250") ? registrationType !== 'disabled' : stryMutAct_9fa48("10249") ? false : stryMutAct_9fa48("10248") ? true : (stryCov_9fa48("10248", "10249", "10250"), registrationType === (stryMutAct_9fa48("10251") ? "" : (stryCov_9fa48("10251"), 'disabled')))) {
      if (stryMutAct_9fa48("10252")) {
        {}
      } else {
        stryCov_9fa48("10252");
        return setImmediate(next);
      }
    }
    let errorText;
    const returnTo = (stryMutAct_9fa48("10255") ? req.headers['x-return-to'] && '' : stryMutAct_9fa48("10254") ? false : stryMutAct_9fa48("10253") ? true : (stryCov_9fa48("10253", "10254", "10255"), req.headers[stryMutAct_9fa48("10256") ? "" : (stryCov_9fa48("10256"), 'x-return-to')] || (stryMutAct_9fa48("10257") ? "Stryker was here!" : (stryCov_9fa48("10257"), '')))).replace(stryMutAct_9fa48("10258") ? nconf.get('base_url') - nconf.get('relative_path') : (stryCov_9fa48("10258"), nconf.get(stryMutAct_9fa48("10259") ? "" : (stryCov_9fa48("10259"), 'base_url')) + nconf.get(stryMutAct_9fa48("10260") ? "" : (stryCov_9fa48("10260"), 'relative_path'))), stryMutAct_9fa48("10261") ? "Stryker was here!" : (stryCov_9fa48("10261"), ''));
    if (stryMutAct_9fa48("10264") ? req.query.error !== 'csrf-invalid' : stryMutAct_9fa48("10263") ? false : stryMutAct_9fa48("10262") ? true : (stryCov_9fa48("10262", "10263", "10264"), req.query.error === (stryMutAct_9fa48("10265") ? "" : (stryCov_9fa48("10265"), 'csrf-invalid')))) {
      if (stryMutAct_9fa48("10266")) {
        {}
      } else {
        stryCov_9fa48("10266");
        errorText = stryMutAct_9fa48("10267") ? "" : (stryCov_9fa48("10267"), '[[error:csrf-invalid]]');
      }
    }
    try {
      if (stryMutAct_9fa48("10268")) {
        {}
      } else {
        stryCov_9fa48("10268");
        if (stryMutAct_9fa48("10271") ? registrationType === 'invite-only' && registrationType === 'admin-invite-only' : stryMutAct_9fa48("10270") ? false : stryMutAct_9fa48("10269") ? true : (stryCov_9fa48("10269", "10270", "10271"), (stryMutAct_9fa48("10273") ? registrationType !== 'invite-only' : stryMutAct_9fa48("10272") ? false : (stryCov_9fa48("10272", "10273"), registrationType === (stryMutAct_9fa48("10274") ? "" : (stryCov_9fa48("10274"), 'invite-only')))) || (stryMutAct_9fa48("10276") ? registrationType !== 'admin-invite-only' : stryMutAct_9fa48("10275") ? false : (stryCov_9fa48("10275", "10276"), registrationType === (stryMutAct_9fa48("10277") ? "" : (stryCov_9fa48("10277"), 'admin-invite-only')))))) {
          if (stryMutAct_9fa48("10278")) {
            {}
          } else {
            stryCov_9fa48("10278");
            try {
              if (stryMutAct_9fa48("10279")) {
                {}
              } else {
                stryCov_9fa48("10279");
                await user.verifyInvitation(req.query);
              }
            } catch (e) {
              if (stryMutAct_9fa48("10280")) {
                {}
              } else {
                stryCov_9fa48("10280");
                return res.render(stryMutAct_9fa48("10281") ? "" : (stryCov_9fa48("10281"), '400'), stryMutAct_9fa48("10282") ? {} : (stryCov_9fa48("10282"), {
                  error: e.message
                }));
              }
            }
          }
        }
        if (stryMutAct_9fa48("10284") ? false : stryMutAct_9fa48("10283") ? true : (stryCov_9fa48("10283", "10284"), returnTo)) {
          if (stryMutAct_9fa48("10285")) {
            {}
          } else {
            stryCov_9fa48("10285");
            req.session.returnTo = returnTo;
          }
        }
        const loginStrategies = require('../routes/authentication').getLoginStrategies();
        res.render(stryMutAct_9fa48("10286") ? "" : (stryCov_9fa48("10286"), 'register'), stryMutAct_9fa48("10287") ? {} : (stryCov_9fa48("10287"), {
          'register_window:spansize': loginStrategies.length ? stryMutAct_9fa48("10288") ? "" : (stryCov_9fa48("10288"), 'col-md-6') : stryMutAct_9fa48("10289") ? "" : (stryCov_9fa48("10289"), 'col-md-12'),
          alternate_logins: stryMutAct_9fa48("10290") ? !loginStrategies.length : (stryCov_9fa48("10290"), !(stryMutAct_9fa48("10291") ? loginStrategies.length : (stryCov_9fa48("10291"), !loginStrategies.length))),
          authentication: loginStrategies,
          minimumUsernameLength: meta.config.minimumUsernameLength,
          maximumUsernameLength: meta.config.maximumUsernameLength,
          minimumPasswordLength: meta.config.minimumPasswordLength,
          minimumPasswordStrength: meta.config.minimumPasswordStrength,
          breadcrumbs: helpers.buildBreadcrumbs(stryMutAct_9fa48("10292") ? [] : (stryCov_9fa48("10292"), [stryMutAct_9fa48("10293") ? {} : (stryCov_9fa48("10293"), {
            text: stryMutAct_9fa48("10294") ? "" : (stryCov_9fa48("10294"), '[[register:register]]')
          })])),
          regFormEntry: stryMutAct_9fa48("10295") ? [] : (stryCov_9fa48("10295"), [stryMutAct_9fa48("10296") ? {} : (stryCov_9fa48("10296"), {
            label: stryMutAct_9fa48("10297") ? "" : (stryCov_9fa48("10297"), 'Account Type'),
            styleName: stryMutAct_9fa48("10298") ? "" : (stryCov_9fa48("10298"), 'account-type'),
            html: stryMutAct_9fa48("10299") ? `` : (stryCov_9fa48("10299"), `
                        <select class="form-control" name="account-type" aria-label="Account Type">
                            <option value="student" selected>Student</option>
                            <option value="instructor">Instructor</option>
                        </select>
                    `)
          })]),
          error: stryMutAct_9fa48("10302") ? req.flash('error')[0] && errorText : stryMutAct_9fa48("10301") ? false : stryMutAct_9fa48("10300") ? true : (stryCov_9fa48("10300", "10301", "10302"), req.flash(stryMutAct_9fa48("10303") ? "" : (stryCov_9fa48("10303"), 'error'))[0] || errorText),
          title: stryMutAct_9fa48("10304") ? "" : (stryCov_9fa48("10304"), '[[pages:register]]')
        }));
      }
    } catch (err) {
      if (stryMutAct_9fa48("10305")) {
        {}
      } else {
        stryCov_9fa48("10305");
        next(err);
      }
    }
  }
};
Controllers.registerInterstitial = async function (req, res, next) {
  if (stryMutAct_9fa48("10306")) {
    {}
  } else {
    stryCov_9fa48("10306");
    if (stryMutAct_9fa48("10309") ? false : stryMutAct_9fa48("10308") ? true : stryMutAct_9fa48("10307") ? req.session.hasOwnProperty('registration') : (stryCov_9fa48("10307", "10308", "10309"), !req.session.hasOwnProperty(stryMutAct_9fa48("10310") ? "" : (stryCov_9fa48("10310"), 'registration')))) {
      if (stryMutAct_9fa48("10311")) {
        {}
      } else {
        stryCov_9fa48("10311");
        return res.redirect(stryMutAct_9fa48("10312") ? `` : (stryCov_9fa48("10312"), `${nconf.get(stryMutAct_9fa48("10313") ? "" : (stryCov_9fa48("10313"), 'relative_path'))}/register`));
      }
    }
    try {
      if (stryMutAct_9fa48("10314")) {
        {}
      } else {
        stryCov_9fa48("10314");
        const data = await plugins.hooks.fire(stryMutAct_9fa48("10315") ? "" : (stryCov_9fa48("10315"), 'filter:register.interstitial'), stryMutAct_9fa48("10316") ? {} : (stryCov_9fa48("10316"), {
          req,
          userData: req.session.registration,
          interstitials: stryMutAct_9fa48("10317") ? ["Stryker was here"] : (stryCov_9fa48("10317"), [])
        }));
        if (stryMutAct_9fa48("10320") ? false : stryMutAct_9fa48("10319") ? true : stryMutAct_9fa48("10318") ? data.interstitials.length : (stryCov_9fa48("10318", "10319", "10320"), !data.interstitials.length)) {
          if (stryMutAct_9fa48("10321")) {
            {}
          } else {
            stryCov_9fa48("10321");
            // No interstitials, redirect to home
            const returnTo = stryMutAct_9fa48("10324") ? req.session.returnTo && req.session.registration.returnTo : stryMutAct_9fa48("10323") ? false : stryMutAct_9fa48("10322") ? true : (stryCov_9fa48("10322", "10323", "10324"), req.session.returnTo || req.session.registration.returnTo);
            delete req.session.registration;
            return helpers.redirect(res, stryMutAct_9fa48("10327") ? returnTo && '/' : stryMutAct_9fa48("10326") ? false : stryMutAct_9fa48("10325") ? true : (stryCov_9fa48("10325", "10326", "10327"), returnTo || (stryMutAct_9fa48("10328") ? "" : (stryCov_9fa48("10328"), '/'))));
          }
        }
        const errors = req.flash(stryMutAct_9fa48("10329") ? "" : (stryCov_9fa48("10329"), 'errors'));
        const renders = data.interstitials.map(stryMutAct_9fa48("10330") ? () => undefined : (stryCov_9fa48("10330"), interstitial => req.app.renderAsync(interstitial.template, stryMutAct_9fa48("10331") ? {} : (stryCov_9fa48("10331"), {
          ...(stryMutAct_9fa48("10334") ? interstitial.data && {} : stryMutAct_9fa48("10333") ? false : stryMutAct_9fa48("10332") ? true : (stryCov_9fa48("10332", "10333", "10334"), interstitial.data || {})),
          errors
        }))));
        const sections = await Promise.all(renders);
        res.render(stryMutAct_9fa48("10335") ? "" : (stryCov_9fa48("10335"), 'registerComplete'), stryMutAct_9fa48("10336") ? {} : (stryCov_9fa48("10336"), {
          title: stryMutAct_9fa48("10337") ? "" : (stryCov_9fa48("10337"), '[[pages:registration-complete]]'),
          register: data.userData.register,
          sections,
          errors
        }));
      }
    } catch (err) {
      if (stryMutAct_9fa48("10338")) {
        {}
      } else {
        stryCov_9fa48("10338");
        next(err);
      }
    }
  }
};
Controllers.confirmEmail = async (req, res, next) => {
  if (stryMutAct_9fa48("10339")) {
    {}
  } else {
    stryCov_9fa48("10339");
    try {
      if (stryMutAct_9fa48("10340")) {
        {}
      } else {
        stryCov_9fa48("10340");
        await user.email.confirmByCode(req.params.code, req.session.id);
      }
    } catch (e) {
      if (stryMutAct_9fa48("10341")) {
        {}
      } else {
        stryCov_9fa48("10341");
        if (stryMutAct_9fa48("10344") ? e.message !== '[[error:invalid-data]]' : stryMutAct_9fa48("10343") ? false : stryMutAct_9fa48("10342") ? true : (stryCov_9fa48("10342", "10343", "10344"), e.message === (stryMutAct_9fa48("10345") ? "" : (stryCov_9fa48("10345"), '[[error:invalid-data]]')))) {
          if (stryMutAct_9fa48("10346")) {
            {}
          } else {
            stryCov_9fa48("10346");
            return next();
          }
        }
        throw e;
      }
    }
    res.render(stryMutAct_9fa48("10347") ? "" : (stryCov_9fa48("10347"), 'confirm'), stryMutAct_9fa48("10348") ? {} : (stryCov_9fa48("10348"), {
      title: stryMutAct_9fa48("10349") ? "" : (stryCov_9fa48("10349"), '[[pages:confirm]]')
    }));
  }
};
Controllers.robots = function (req, res) {
  if (stryMutAct_9fa48("10350")) {
    {}
  } else {
    stryCov_9fa48("10350");
    res.set(stryMutAct_9fa48("10351") ? "" : (stryCov_9fa48("10351"), 'Content-Type'), stryMutAct_9fa48("10352") ? "" : (stryCov_9fa48("10352"), 'text/plain'));
    if (stryMutAct_9fa48("10354") ? false : stryMutAct_9fa48("10353") ? true : (stryCov_9fa48("10353", "10354"), meta.config[stryMutAct_9fa48("10355") ? "" : (stryCov_9fa48("10355"), 'robots:txt')])) {
      if (stryMutAct_9fa48("10356")) {
        {}
      } else {
        stryCov_9fa48("10356");
        res.send(meta.config[stryMutAct_9fa48("10357") ? "" : (stryCov_9fa48("10357"), 'robots:txt')]);
      }
    } else {
      if (stryMutAct_9fa48("10358")) {
        {}
      } else {
        stryCov_9fa48("10358");
        res.send((stryMutAct_9fa48("10359") ? `` : (stryCov_9fa48("10359"), `${(stryMutAct_9fa48("10360") ? "" : (stryCov_9fa48("10360"), 'User-agent: *\n')) + (stryMutAct_9fa48("10361") ? "" : (stryCov_9fa48("10361"), 'Disallow: '))}${nconf.get(stryMutAct_9fa48("10362") ? "" : (stryCov_9fa48("10362"), 'relative_path'))}/admin/\n`)) + (stryMutAct_9fa48("10363") ? `` : (stryCov_9fa48("10363"), `Disallow: ${nconf.get(stryMutAct_9fa48("10364") ? "" : (stryCov_9fa48("10364"), 'relative_path'))}/reset/\n`)) + (stryMutAct_9fa48("10365") ? `` : (stryCov_9fa48("10365"), `Disallow: ${nconf.get(stryMutAct_9fa48("10366") ? "" : (stryCov_9fa48("10366"), 'relative_path'))}/compose\n`)) + (stryMutAct_9fa48("10367") ? `` : (stryCov_9fa48("10367"), `Sitemap: ${nconf.get(stryMutAct_9fa48("10368") ? "" : (stryCov_9fa48("10368"), 'url'))}/sitemap.xml`)));
      }
    }
  }
};
Controllers.manifest = async function (req, res) {
  if (stryMutAct_9fa48("10369")) {
    {}
  } else {
    stryCov_9fa48("10369");
    const manifest = stryMutAct_9fa48("10370") ? {} : (stryCov_9fa48("10370"), {
      name: stryMutAct_9fa48("10373") ? meta.config.title && 'NodeBB' : stryMutAct_9fa48("10372") ? false : stryMutAct_9fa48("10371") ? true : (stryCov_9fa48("10371", "10372", "10373"), meta.config.title || (stryMutAct_9fa48("10374") ? "" : (stryCov_9fa48("10374"), 'NodeBB'))),
      short_name: stryMutAct_9fa48("10377") ? (meta.config['title:short'] || meta.config.title) && 'NodeBB' : stryMutAct_9fa48("10376") ? false : stryMutAct_9fa48("10375") ? true : (stryCov_9fa48("10375", "10376", "10377"), (stryMutAct_9fa48("10379") ? meta.config['title:short'] && meta.config.title : stryMutAct_9fa48("10378") ? false : (stryCov_9fa48("10378", "10379"), meta.config[stryMutAct_9fa48("10380") ? "" : (stryCov_9fa48("10380"), 'title:short')] || meta.config.title)) || (stryMutAct_9fa48("10381") ? "" : (stryCov_9fa48("10381"), 'NodeBB'))),
      start_url: nconf.get(stryMutAct_9fa48("10382") ? "" : (stryCov_9fa48("10382"), 'url')),
      display: stryMutAct_9fa48("10383") ? "" : (stryCov_9fa48("10383"), 'standalone'),
      orientation: stryMutAct_9fa48("10384") ? "" : (stryCov_9fa48("10384"), 'portrait'),
      theme_color: stryMutAct_9fa48("10387") ? meta.config.themeColor && '#ffffff' : stryMutAct_9fa48("10386") ? false : stryMutAct_9fa48("10385") ? true : (stryCov_9fa48("10385", "10386", "10387"), meta.config.themeColor || (stryMutAct_9fa48("10388") ? "" : (stryCov_9fa48("10388"), '#ffffff'))),
      background_color: stryMutAct_9fa48("10391") ? meta.config.backgroundColor && '#ffffff' : stryMutAct_9fa48("10390") ? false : stryMutAct_9fa48("10389") ? true : (stryCov_9fa48("10389", "10390", "10391"), meta.config.backgroundColor || (stryMutAct_9fa48("10392") ? "" : (stryCov_9fa48("10392"), '#ffffff'))),
      icons: stryMutAct_9fa48("10393") ? ["Stryker was here"] : (stryCov_9fa48("10393"), [])
    });
    if (stryMutAct_9fa48("10395") ? false : stryMutAct_9fa48("10394") ? true : (stryCov_9fa48("10394", "10395"), meta.config[stryMutAct_9fa48("10396") ? "" : (stryCov_9fa48("10396"), 'brand:touchIcon')])) {
      if (stryMutAct_9fa48("10397")) {
        {}
      } else {
        stryCov_9fa48("10397");
        manifest.icons.push(stryMutAct_9fa48("10398") ? {} : (stryCov_9fa48("10398"), {
          src: stryMutAct_9fa48("10399") ? `` : (stryCov_9fa48("10399"), `${nconf.get(stryMutAct_9fa48("10400") ? "" : (stryCov_9fa48("10400"), 'relative_path'))}/assets/uploads/system/touchicon-36.png`),
          sizes: stryMutAct_9fa48("10401") ? "" : (stryCov_9fa48("10401"), '36x36'),
          type: stryMutAct_9fa48("10402") ? "" : (stryCov_9fa48("10402"), 'image/png'),
          density: 0.75
        }), stryMutAct_9fa48("10403") ? {} : (stryCov_9fa48("10403"), {
          src: stryMutAct_9fa48("10404") ? `` : (stryCov_9fa48("10404"), `${nconf.get(stryMutAct_9fa48("10405") ? "" : (stryCov_9fa48("10405"), 'relative_path'))}/assets/uploads/system/touchicon-48.png`),
          sizes: stryMutAct_9fa48("10406") ? "" : (stryCov_9fa48("10406"), '48x48'),
          type: stryMutAct_9fa48("10407") ? "" : (stryCov_9fa48("10407"), 'image/png'),
          density: 1.0
        }), stryMutAct_9fa48("10408") ? {} : (stryCov_9fa48("10408"), {
          src: stryMutAct_9fa48("10409") ? `` : (stryCov_9fa48("10409"), `${nconf.get(stryMutAct_9fa48("10410") ? "" : (stryCov_9fa48("10410"), 'relative_path'))}/assets/uploads/system/touchicon-72.png`),
          sizes: stryMutAct_9fa48("10411") ? "" : (stryCov_9fa48("10411"), '72x72'),
          type: stryMutAct_9fa48("10412") ? "" : (stryCov_9fa48("10412"), 'image/png'),
          density: 1.5
        }), stryMutAct_9fa48("10413") ? {} : (stryCov_9fa48("10413"), {
          src: stryMutAct_9fa48("10414") ? `` : (stryCov_9fa48("10414"), `${nconf.get(stryMutAct_9fa48("10415") ? "" : (stryCov_9fa48("10415"), 'relative_path'))}/assets/uploads/system/touchicon-96.png`),
          sizes: stryMutAct_9fa48("10416") ? "" : (stryCov_9fa48("10416"), '96x96'),
          type: stryMutAct_9fa48("10417") ? "" : (stryCov_9fa48("10417"), 'image/png'),
          density: 2.0
        }), stryMutAct_9fa48("10418") ? {} : (stryCov_9fa48("10418"), {
          src: stryMutAct_9fa48("10419") ? `` : (stryCov_9fa48("10419"), `${nconf.get(stryMutAct_9fa48("10420") ? "" : (stryCov_9fa48("10420"), 'relative_path'))}/assets/uploads/system/touchicon-144.png`),
          sizes: stryMutAct_9fa48("10421") ? "" : (stryCov_9fa48("10421"), '144x144'),
          type: stryMutAct_9fa48("10422") ? "" : (stryCov_9fa48("10422"), 'image/png'),
          density: 3.0
        }), stryMutAct_9fa48("10423") ? {} : (stryCov_9fa48("10423"), {
          src: stryMutAct_9fa48("10424") ? `` : (stryCov_9fa48("10424"), `${nconf.get(stryMutAct_9fa48("10425") ? "" : (stryCov_9fa48("10425"), 'relative_path'))}/assets/uploads/system/touchicon-192.png`),
          sizes: stryMutAct_9fa48("10426") ? "" : (stryCov_9fa48("10426"), '192x192'),
          type: stryMutAct_9fa48("10427") ? "" : (stryCov_9fa48("10427"), 'image/png'),
          density: 4.0
        }), stryMutAct_9fa48("10428") ? {} : (stryCov_9fa48("10428"), {
          src: stryMutAct_9fa48("10429") ? `` : (stryCov_9fa48("10429"), `${nconf.get(stryMutAct_9fa48("10430") ? "" : (stryCov_9fa48("10430"), 'relative_path'))}/assets/uploads/system/touchicon-512.png`),
          sizes: stryMutAct_9fa48("10431") ? "" : (stryCov_9fa48("10431"), '512x512'),
          type: stryMutAct_9fa48("10432") ? "" : (stryCov_9fa48("10432"), 'image/png'),
          density: 10.0
        }));
      }
    }
    if (stryMutAct_9fa48("10434") ? false : stryMutAct_9fa48("10433") ? true : (stryCov_9fa48("10433", "10434"), meta.config[stryMutAct_9fa48("10435") ? "" : (stryCov_9fa48("10435"), 'brand:maskableIcon')])) {
      if (stryMutAct_9fa48("10436")) {
        {}
      } else {
        stryCov_9fa48("10436");
        manifest.icons.push(stryMutAct_9fa48("10437") ? {} : (stryCov_9fa48("10437"), {
          src: stryMutAct_9fa48("10438") ? `` : (stryCov_9fa48("10438"), `${nconf.get(stryMutAct_9fa48("10439") ? "" : (stryCov_9fa48("10439"), 'relative_path'))}/assets/uploads/system/maskableicon-orig.png`),
          type: stryMutAct_9fa48("10440") ? "" : (stryCov_9fa48("10440"), 'image/png'),
          purpose: stryMutAct_9fa48("10441") ? "" : (stryCov_9fa48("10441"), 'maskable')
        }));
      }
    } else if (stryMutAct_9fa48("10443") ? false : stryMutAct_9fa48("10442") ? true : (stryCov_9fa48("10442", "10443"), meta.config[stryMutAct_9fa48("10444") ? "" : (stryCov_9fa48("10444"), 'brand:touchIcon')])) {
      if (stryMutAct_9fa48("10445")) {
        {}
      } else {
        stryCov_9fa48("10445");
        manifest.icons.push(stryMutAct_9fa48("10446") ? {} : (stryCov_9fa48("10446"), {
          src: stryMutAct_9fa48("10447") ? `` : (stryCov_9fa48("10447"), `${nconf.get(stryMutAct_9fa48("10448") ? "" : (stryCov_9fa48("10448"), 'relative_path'))}/assets/uploads/system/touchicon-orig.png`),
          type: stryMutAct_9fa48("10449") ? "" : (stryCov_9fa48("10449"), 'image/png'),
          purpose: stryMutAct_9fa48("10450") ? "" : (stryCov_9fa48("10450"), 'maskable')
        }));
      }
    }
    const data = await plugins.hooks.fire(stryMutAct_9fa48("10451") ? "" : (stryCov_9fa48("10451"), 'filter:manifest.build'), stryMutAct_9fa48("10452") ? {} : (stryCov_9fa48("10452"), {
      req: req,
      res: res,
      manifest: manifest
    }));
    res.status(200).json(data.manifest);
  }
};
Controllers.outgoing = function (req, res, next) {
  if (stryMutAct_9fa48("10453")) {
    {}
  } else {
    stryCov_9fa48("10453");
    const url = stryMutAct_9fa48("10456") ? req.query.url && '' : stryMutAct_9fa48("10455") ? false : stryMutAct_9fa48("10454") ? true : (stryCov_9fa48("10454", "10455", "10456"), req.query.url || (stryMutAct_9fa48("10457") ? "Stryker was here!" : (stryCov_9fa48("10457"), '')));
    const allowedProtocols = stryMutAct_9fa48("10458") ? [] : (stryCov_9fa48("10458"), [stryMutAct_9fa48("10459") ? "" : (stryCov_9fa48("10459"), 'http'), stryMutAct_9fa48("10460") ? "" : (stryCov_9fa48("10460"), 'https'), stryMutAct_9fa48("10461") ? "" : (stryCov_9fa48("10461"), 'ftp'), stryMutAct_9fa48("10462") ? "" : (stryCov_9fa48("10462"), 'ftps'), stryMutAct_9fa48("10463") ? "" : (stryCov_9fa48("10463"), 'mailto'), stryMutAct_9fa48("10464") ? "" : (stryCov_9fa48("10464"), 'news'), stryMutAct_9fa48("10465") ? "" : (stryCov_9fa48("10465"), 'irc'), stryMutAct_9fa48("10466") ? "" : (stryCov_9fa48("10466"), 'gopher'), stryMutAct_9fa48("10467") ? "" : (stryCov_9fa48("10467"), 'nntp'), stryMutAct_9fa48("10468") ? "" : (stryCov_9fa48("10468"), 'feed'), stryMutAct_9fa48("10469") ? "" : (stryCov_9fa48("10469"), 'telnet'), stryMutAct_9fa48("10470") ? "" : (stryCov_9fa48("10470"), 'mms'), stryMutAct_9fa48("10471") ? "" : (stryCov_9fa48("10471"), 'rtsp'), stryMutAct_9fa48("10472") ? "" : (stryCov_9fa48("10472"), 'svn'), stryMutAct_9fa48("10473") ? "" : (stryCov_9fa48("10473"), 'tel'), stryMutAct_9fa48("10474") ? "" : (stryCov_9fa48("10474"), 'fax'), stryMutAct_9fa48("10475") ? "" : (stryCov_9fa48("10475"), 'xmpp'), stryMutAct_9fa48("10476") ? "" : (stryCov_9fa48("10476"), 'webcal')]);
    const parsed = require('url').parse(url);
    if (stryMutAct_9fa48("10479") ? (!url || !parsed.protocol) && !allowedProtocols.includes(parsed.protocol.slice(0, -1)) : stryMutAct_9fa48("10478") ? false : stryMutAct_9fa48("10477") ? true : (stryCov_9fa48("10477", "10478", "10479"), (stryMutAct_9fa48("10481") ? !url && !parsed.protocol : stryMutAct_9fa48("10480") ? false : (stryCov_9fa48("10480", "10481"), (stryMutAct_9fa48("10482") ? url : (stryCov_9fa48("10482"), !url)) || (stryMutAct_9fa48("10483") ? parsed.protocol : (stryCov_9fa48("10483"), !parsed.protocol)))) || (stryMutAct_9fa48("10484") ? allowedProtocols.includes(parsed.protocol.slice(0, -1)) : (stryCov_9fa48("10484"), !allowedProtocols.includes(stryMutAct_9fa48("10485") ? parsed.protocol : (stryCov_9fa48("10485"), parsed.protocol.slice(0, stryMutAct_9fa48("10486") ? +1 : (stryCov_9fa48("10486"), -1)))))))) {
      if (stryMutAct_9fa48("10487")) {
        {}
      } else {
        stryCov_9fa48("10487");
        return next();
      }
    }
    res.render(stryMutAct_9fa48("10488") ? "" : (stryCov_9fa48("10488"), 'outgoing'), stryMutAct_9fa48("10489") ? {} : (stryCov_9fa48("10489"), {
      outgoing: validator.escape(String(url)),
      title: meta.config.title,
      breadcrumbs: helpers.buildBreadcrumbs(stryMutAct_9fa48("10490") ? [] : (stryCov_9fa48("10490"), [stryMutAct_9fa48("10491") ? {} : (stryCov_9fa48("10491"), {
        text: stryMutAct_9fa48("10492") ? "" : (stryCov_9fa48("10492"), '[[notifications:outgoing_link]]')
      })]))
    }));
  }
};
Controllers.termsOfUse = async function (req, res, next) {
  if (stryMutAct_9fa48("10493")) {
    {}
  } else {
    stryCov_9fa48("10493");
    if (stryMutAct_9fa48("10496") ? false : stryMutAct_9fa48("10495") ? true : stryMutAct_9fa48("10494") ? meta.config.termsOfUse : (stryCov_9fa48("10494", "10495", "10496"), !meta.config.termsOfUse)) {
      if (stryMutAct_9fa48("10497")) {
        {}
      } else {
        stryCov_9fa48("10497");
        return next();
      }
    }
    const termsOfUse = await plugins.hooks.fire(stryMutAct_9fa48("10498") ? "" : (stryCov_9fa48("10498"), 'filter:parse.post'), stryMutAct_9fa48("10499") ? {} : (stryCov_9fa48("10499"), {
      postData: stryMutAct_9fa48("10500") ? {} : (stryCov_9fa48("10500"), {
        content: stryMutAct_9fa48("10503") ? meta.config.termsOfUse && '' : stryMutAct_9fa48("10502") ? false : stryMutAct_9fa48("10501") ? true : (stryCov_9fa48("10501", "10502", "10503"), meta.config.termsOfUse || (stryMutAct_9fa48("10504") ? "Stryker was here!" : (stryCov_9fa48("10504"), '')))
      })
    }));
    res.render(stryMutAct_9fa48("10505") ? "" : (stryCov_9fa48("10505"), 'tos'), stryMutAct_9fa48("10506") ? {} : (stryCov_9fa48("10506"), {
      termsOfUse: termsOfUse.postData.content
    }));
  }
};