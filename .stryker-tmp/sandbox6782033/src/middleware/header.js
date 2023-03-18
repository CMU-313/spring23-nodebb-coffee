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
const jsesc = require('jsesc');
const _ = require('lodash');
const validator = require('validator');
const util = require('util');
const user = require('../user');
const topics = require('../topics');
const messaging = require('../messaging');
const flags = require('../flags');
const meta = require('../meta');
const plugins = require('../plugins');
const navigation = require('../navigation');
const translator = require('../translator');
const privileges = require('../privileges');
const languages = require('../languages');
const utils = require('../utils');
const helpers = require('./helpers');
const controllers = stryMutAct_9fa48("25378") ? {} : (stryCov_9fa48("25378"), {
  api: require('../controllers/api'),
  helpers: require('../controllers/helpers')
});
const middleware = module.exports;
const relative_path = nconf.get(stryMutAct_9fa48("25379") ? "" : (stryCov_9fa48("25379"), 'relative_path'));
middleware.buildHeader = helpers.try(async (req, res, next) => {
  if (stryMutAct_9fa48("25380")) {
    {}
  } else {
    stryCov_9fa48("25380");
    res.locals.renderHeader = stryMutAct_9fa48("25381") ? false : (stryCov_9fa48("25381"), true);
    res.locals.isAPI = stryMutAct_9fa48("25382") ? true : (stryCov_9fa48("25382"), false);
    if (stryMutAct_9fa48("25385") ? req.method !== 'GET' : stryMutAct_9fa48("25384") ? false : stryMutAct_9fa48("25383") ? true : (stryCov_9fa48("25383", "25384", "25385"), req.method === (stryMutAct_9fa48("25386") ? "" : (stryCov_9fa48("25386"), 'GET')))) {
      if (stryMutAct_9fa48("25387")) {
        {}
      } else {
        stryCov_9fa48("25387");
        await require('./index').applyCSRFasync(req, res);
      }
    }
    const [config, canLoginIfBanned] = await Promise.all(stryMutAct_9fa48("25388") ? [] : (stryCov_9fa48("25388"), [controllers.api.loadConfig(req), user.bans.canLoginIfBanned(req.uid), plugins.hooks.fire(stryMutAct_9fa48("25389") ? "" : (stryCov_9fa48("25389"), 'filter:middleware.buildHeader'), stryMutAct_9fa48("25390") ? {} : (stryCov_9fa48("25390"), {
      req: req,
      locals: res.locals
    }))]));
    if (stryMutAct_9fa48("25393") ? !canLoginIfBanned || req.loggedIn : stryMutAct_9fa48("25392") ? false : stryMutAct_9fa48("25391") ? true : (stryCov_9fa48("25391", "25392", "25393"), (stryMutAct_9fa48("25394") ? canLoginIfBanned : (stryCov_9fa48("25394"), !canLoginIfBanned)) && req.loggedIn)) {
      if (stryMutAct_9fa48("25395")) {
        {}
      } else {
        stryCov_9fa48("25395");
        req.logout(() => {
          if (stryMutAct_9fa48("25396")) {
            {}
          } else {
            stryCov_9fa48("25396");
            res.redirect(stryMutAct_9fa48("25397") ? "" : (stryCov_9fa48("25397"), '/'));
          }
        });
        return;
      }
    }
    res.locals.config = config;
    next();
  }
});
middleware.buildHeaderAsync = util.promisify(middleware.buildHeader);
middleware.renderHeader = async function renderHeader(req, res, data) {
  if (stryMutAct_9fa48("25398")) {
    {}
  } else {
    stryCov_9fa48("25398");
    const registrationType = stryMutAct_9fa48("25401") ? meta.config.registrationType && 'normal' : stryMutAct_9fa48("25400") ? false : stryMutAct_9fa48("25399") ? true : (stryCov_9fa48("25399", "25400", "25401"), meta.config.registrationType || (stryMutAct_9fa48("25402") ? "" : (stryCov_9fa48("25402"), 'normal')));
    res.locals.config = stryMutAct_9fa48("25405") ? res.locals.config && {} : stryMutAct_9fa48("25404") ? false : stryMutAct_9fa48("25403") ? true : (stryCov_9fa48("25403", "25404", "25405"), res.locals.config || {});
    const templateValues = stryMutAct_9fa48("25406") ? {} : (stryCov_9fa48("25406"), {
      title: stryMutAct_9fa48("25409") ? meta.config.title && '' : stryMutAct_9fa48("25408") ? false : stryMutAct_9fa48("25407") ? true : (stryCov_9fa48("25407", "25408", "25409"), meta.config.title || (stryMutAct_9fa48("25410") ? "Stryker was here!" : (stryCov_9fa48("25410"), ''))),
      'title:url': stryMutAct_9fa48("25413") ? meta.config['title:url'] && '' : stryMutAct_9fa48("25412") ? false : stryMutAct_9fa48("25411") ? true : (stryCov_9fa48("25411", "25412", "25413"), meta.config[stryMutAct_9fa48("25414") ? "" : (stryCov_9fa48("25414"), 'title:url')] || (stryMutAct_9fa48("25415") ? "Stryker was here!" : (stryCov_9fa48("25415"), ''))),
      description: stryMutAct_9fa48("25418") ? meta.config.description && '' : stryMutAct_9fa48("25417") ? false : stryMutAct_9fa48("25416") ? true : (stryCov_9fa48("25416", "25417", "25418"), meta.config.description || (stryMutAct_9fa48("25419") ? "Stryker was here!" : (stryCov_9fa48("25419"), ''))),
      'cache-buster': stryMutAct_9fa48("25422") ? meta.config['cache-buster'] && '' : stryMutAct_9fa48("25421") ? false : stryMutAct_9fa48("25420") ? true : (stryCov_9fa48("25420", "25421", "25422"), meta.config[stryMutAct_9fa48("25423") ? "" : (stryCov_9fa48("25423"), 'cache-buster')] || (stryMutAct_9fa48("25424") ? "Stryker was here!" : (stryCov_9fa48("25424"), ''))),
      'brand:logo': stryMutAct_9fa48("25427") ? meta.config['brand:logo'] && '' : stryMutAct_9fa48("25426") ? false : stryMutAct_9fa48("25425") ? true : (stryCov_9fa48("25425", "25426", "25427"), meta.config[stryMutAct_9fa48("25428") ? "" : (stryCov_9fa48("25428"), 'brand:logo')] || (stryMutAct_9fa48("25429") ? "Stryker was here!" : (stryCov_9fa48("25429"), ''))),
      'brand:logo:url': stryMutAct_9fa48("25432") ? meta.config['brand:logo:url'] && '' : stryMutAct_9fa48("25431") ? false : stryMutAct_9fa48("25430") ? true : (stryCov_9fa48("25430", "25431", "25432"), meta.config[stryMutAct_9fa48("25433") ? "" : (stryCov_9fa48("25433"), 'brand:logo:url')] || (stryMutAct_9fa48("25434") ? "Stryker was here!" : (stryCov_9fa48("25434"), ''))),
      'brand:logo:alt': stryMutAct_9fa48("25437") ? meta.config['brand:logo:alt'] && '' : stryMutAct_9fa48("25436") ? false : stryMutAct_9fa48("25435") ? true : (stryCov_9fa48("25435", "25436", "25437"), meta.config[stryMutAct_9fa48("25438") ? "" : (stryCov_9fa48("25438"), 'brand:logo:alt')] || (stryMutAct_9fa48("25439") ? "Stryker was here!" : (stryCov_9fa48("25439"), ''))),
      'brand:logo:display': meta.config[stryMutAct_9fa48("25440") ? "" : (stryCov_9fa48("25440"), 'brand:logo')] ? stryMutAct_9fa48("25441") ? "Stryker was here!" : (stryCov_9fa48("25441"), '') : stryMutAct_9fa48("25442") ? "" : (stryCov_9fa48("25442"), 'hide'),
      allowRegistration: stryMutAct_9fa48("25445") ? registrationType !== 'normal' : stryMutAct_9fa48("25444") ? false : stryMutAct_9fa48("25443") ? true : (stryCov_9fa48("25443", "25444", "25445"), registrationType === (stryMutAct_9fa48("25446") ? "" : (stryCov_9fa48("25446"), 'normal'))),
      searchEnabled: plugins.hooks.hasListeners(stryMutAct_9fa48("25447") ? "" : (stryCov_9fa48("25447"), 'filter:search.query')),
      postQueueEnabled: stryMutAct_9fa48("25448") ? !meta.config.postQueue : (stryCov_9fa48("25448"), !(stryMutAct_9fa48("25449") ? meta.config.postQueue : (stryCov_9fa48("25449"), !meta.config.postQueue))),
      config: res.locals.config,
      relative_path,
      bodyClass: data.bodyClass
    });
    templateValues.configJSON = jsesc(JSON.stringify(res.locals.config), stryMutAct_9fa48("25450") ? {} : (stryCov_9fa48("25450"), {
      isScriptContext: stryMutAct_9fa48("25451") ? false : (stryCov_9fa48("25451"), true)
    }));
    const results = await utils.promiseParallel(stryMutAct_9fa48("25452") ? {} : (stryCov_9fa48("25452"), {
      isAdmin: user.isAdministrator(req.uid),
      isGlobalMod: user.isGlobalModerator(req.uid),
      isModerator: user.isModeratorOfAnyCategory(req.uid),
      privileges: privileges.global.get(req.uid),
      user: user.getUserData(req.uid),
      isEmailConfirmSent: (stryMutAct_9fa48("25456") ? req.uid > 0 : stryMutAct_9fa48("25455") ? req.uid < 0 : stryMutAct_9fa48("25454") ? false : stryMutAct_9fa48("25453") ? true : (stryCov_9fa48("25453", "25454", "25455", "25456"), req.uid <= 0)) ? stryMutAct_9fa48("25457") ? true : (stryCov_9fa48("25457"), false) : await user.email.isValidationPending(req.uid),
      languageDirection: translator.translate(stryMutAct_9fa48("25458") ? "" : (stryCov_9fa48("25458"), '[[language:dir]]'), res.locals.config.userLang),
      timeagoCode: languages.userTimeagoCode(res.locals.config.userLang),
      browserTitle: translator.translate(controllers.helpers.buildTitle(translator.unescape(data.title))),
      navigation: navigation.get(req.uid)
    }));
    const unreadData = stryMutAct_9fa48("25459") ? {} : (stryCov_9fa48("25459"), {
      '': {},
      new: {},
      watched: {},
      unreplied: {}
    });
    results.user.unreadData = unreadData;
    results.user.isAdmin = results.isAdmin;
    results.user.isGlobalMod = results.isGlobalMod;
    results.user.isMod = stryMutAct_9fa48("25460") ? !results.isModerator : (stryCov_9fa48("25460"), !(stryMutAct_9fa48("25461") ? results.isModerator : (stryCov_9fa48("25461"), !results.isModerator)));
    results.user.privileges = results.privileges;
    results.user.timeagoCode = results.timeagoCode;
    results.user[results.user.status] = stryMutAct_9fa48("25462") ? false : (stryCov_9fa48("25462"), true);
    results.user.email = String(results.user.email);
    results.user[stryMutAct_9fa48("25463") ? "" : (stryCov_9fa48("25463"), 'email:confirmed')] = stryMutAct_9fa48("25466") ? results.user['email:confirmed'] !== 1 : stryMutAct_9fa48("25465") ? false : stryMutAct_9fa48("25464") ? true : (stryCov_9fa48("25464", "25465", "25466"), results.user[stryMutAct_9fa48("25467") ? "" : (stryCov_9fa48("25467"), 'email:confirmed')] === 1);
    results.user.isEmailConfirmSent = stryMutAct_9fa48("25468") ? !results.isEmailConfirmSent : (stryCov_9fa48("25468"), !(stryMutAct_9fa48("25469") ? results.isEmailConfirmSent : (stryCov_9fa48("25469"), !results.isEmailConfirmSent)));
    templateValues.bootswatchSkin = stryMutAct_9fa48("25472") ? ((parseInt(meta.config.disableCustomUserSkins, 10) !== 1 ? res.locals.config.bootswatchSkin : '') || meta.config.bootswatchSkin) && '' : stryMutAct_9fa48("25471") ? false : stryMutAct_9fa48("25470") ? true : (stryCov_9fa48("25470", "25471", "25472"), (stryMutAct_9fa48("25474") ? (parseInt(meta.config.disableCustomUserSkins, 10) !== 1 ? res.locals.config.bootswatchSkin : '') && meta.config.bootswatchSkin : stryMutAct_9fa48("25473") ? false : (stryCov_9fa48("25473", "25474"), ((stryMutAct_9fa48("25477") ? parseInt(meta.config.disableCustomUserSkins, 10) === 1 : stryMutAct_9fa48("25476") ? false : stryMutAct_9fa48("25475") ? true : (stryCov_9fa48("25475", "25476", "25477"), parseInt(meta.config.disableCustomUserSkins, 10) !== 1)) ? res.locals.config.bootswatchSkin : stryMutAct_9fa48("25478") ? "Stryker was here!" : (stryCov_9fa48("25478"), '')) || meta.config.bootswatchSkin)) || (stryMutAct_9fa48("25479") ? "Stryker was here!" : (stryCov_9fa48("25479"), '')));
    templateValues.browserTitle = results.browserTitle;
    ({
      navigation: templateValues.navigation,
      unreadCount: templateValues.unreadCount
    } = await appendUnreadCounts(stryMutAct_9fa48("25480") ? {} : (stryCov_9fa48("25480"), {
      uid: req.uid,
      query: req.query,
      navigation: results.navigation,
      unreadData
    })));
    templateValues.isAdmin = results.user.isAdmin;
    templateValues.isGlobalMod = results.user.isGlobalMod;
    templateValues.showModMenu = stryMutAct_9fa48("25483") ? (results.user.isAdmin || results.user.isGlobalMod) && results.user.isMod : stryMutAct_9fa48("25482") ? false : stryMutAct_9fa48("25481") ? true : (stryCov_9fa48("25481", "25482", "25483"), (stryMutAct_9fa48("25485") ? results.user.isAdmin && results.user.isGlobalMod : stryMutAct_9fa48("25484") ? false : (stryCov_9fa48("25484", "25485"), results.user.isAdmin || results.user.isGlobalMod)) || results.user.isMod);
    templateValues.canChat = stryMutAct_9fa48("25488") ? results.privileges.chat || meta.config.disableChat !== 1 : stryMutAct_9fa48("25487") ? false : stryMutAct_9fa48("25486") ? true : (stryCov_9fa48("25486", "25487", "25488"), results.privileges.chat && (stryMutAct_9fa48("25490") ? meta.config.disableChat === 1 : stryMutAct_9fa48("25489") ? true : (stryCov_9fa48("25489", "25490"), meta.config.disableChat !== 1)));
    templateValues.user = results.user;
    templateValues.userJSON = jsesc(JSON.stringify(results.user), stryMutAct_9fa48("25491") ? {} : (stryCov_9fa48("25491"), {
      isScriptContext: stryMutAct_9fa48("25492") ? false : (stryCov_9fa48("25492"), true)
    }));
    templateValues.useCustomCSS = stryMutAct_9fa48("25495") ? meta.config.useCustomCSS || meta.config.customCSS : stryMutAct_9fa48("25494") ? false : stryMutAct_9fa48("25493") ? true : (stryCov_9fa48("25493", "25494", "25495"), meta.config.useCustomCSS && meta.config.customCSS);
    templateValues.customCSS = templateValues.useCustomCSS ? stryMutAct_9fa48("25498") ? meta.config.renderedCustomCSS && '' : stryMutAct_9fa48("25497") ? false : stryMutAct_9fa48("25496") ? true : (stryCov_9fa48("25496", "25497", "25498"), meta.config.renderedCustomCSS || (stryMutAct_9fa48("25499") ? "Stryker was here!" : (stryCov_9fa48("25499"), ''))) : stryMutAct_9fa48("25500") ? "Stryker was here!" : (stryCov_9fa48("25500"), '');
    templateValues.useCustomHTML = meta.config.useCustomHTML;
    templateValues.customHTML = templateValues.useCustomHTML ? meta.config.customHTML : stryMutAct_9fa48("25501") ? "Stryker was here!" : (stryCov_9fa48("25501"), '');
    templateValues.maintenanceHeader = stryMutAct_9fa48("25504") ? meta.config.maintenanceMode || !results.isAdmin : stryMutAct_9fa48("25503") ? false : stryMutAct_9fa48("25502") ? true : (stryCov_9fa48("25502", "25503", "25504"), meta.config.maintenanceMode && (stryMutAct_9fa48("25505") ? results.isAdmin : (stryCov_9fa48("25505"), !results.isAdmin)));
    templateValues.defaultLang = stryMutAct_9fa48("25508") ? meta.config.defaultLang && 'en-GB' : stryMutAct_9fa48("25507") ? false : stryMutAct_9fa48("25506") ? true : (stryCov_9fa48("25506", "25507", "25508"), meta.config.defaultLang || (stryMutAct_9fa48("25509") ? "" : (stryCov_9fa48("25509"), 'en-GB')));
    templateValues.userLang = res.locals.config.userLang;
    templateValues.languageDirection = results.languageDirection;
    if (stryMutAct_9fa48("25511") ? false : stryMutAct_9fa48("25510") ? true : (stryCov_9fa48("25510", "25511"), req.query.noScriptMessage)) {
      if (stryMutAct_9fa48("25512")) {
        {}
      } else {
        stryCov_9fa48("25512");
        templateValues.noScriptMessage = validator.escape(String(req.query.noScriptMessage));
      }
    }
    templateValues.template = stryMutAct_9fa48("25513") ? {} : (stryCov_9fa48("25513"), {
      name: res.locals.template
    });
    templateValues.template[res.locals.template] = stryMutAct_9fa48("25514") ? false : (stryCov_9fa48("25514"), true);
    if (stryMutAct_9fa48("25516") ? false : stryMutAct_9fa48("25515") ? true : (stryCov_9fa48("25515", "25516"), data.hasOwnProperty(stryMutAct_9fa48("25517") ? "" : (stryCov_9fa48("25517"), '_header')))) {
      if (stryMutAct_9fa48("25518")) {
        {}
      } else {
        stryCov_9fa48("25518");
        templateValues.metaTags = data._header.tags.meta;
        templateValues.linkTags = data._header.tags.link;
      }
    }
    if (stryMutAct_9fa48("25521") ? req.route || req.route.path === '/' : stryMutAct_9fa48("25520") ? false : stryMutAct_9fa48("25519") ? true : (stryCov_9fa48("25519", "25520", "25521"), req.route && (stryMutAct_9fa48("25523") ? req.route.path !== '/' : stryMutAct_9fa48("25522") ? true : (stryCov_9fa48("25522", "25523"), req.route.path === (stryMutAct_9fa48("25524") ? "" : (stryCov_9fa48("25524"), '/')))))) {
      if (stryMutAct_9fa48("25525")) {
        {}
      } else {
        stryCov_9fa48("25525");
        modifyTitle(templateValues);
      }
    }
    const hookReturn = await plugins.hooks.fire(stryMutAct_9fa48("25526") ? "" : (stryCov_9fa48("25526"), 'filter:middleware.renderHeader'), stryMutAct_9fa48("25527") ? {} : (stryCov_9fa48("25527"), {
      req: req,
      res: res,
      templateValues: templateValues,
      data: data
    }));
    return await req.app.renderAsync(stryMutAct_9fa48("25528") ? "" : (stryCov_9fa48("25528"), 'header'), hookReturn.templateValues);
  }
};
async function appendUnreadCounts({
  uid,
  navigation,
  unreadData,
  query
}) {
  if (stryMutAct_9fa48("25529")) {
    {}
  } else {
    stryCov_9fa48("25529");
    const originalRoutes = navigation.map(stryMutAct_9fa48("25530") ? () => undefined : (stryCov_9fa48("25530"), nav => nav.originalRoute));
    const calls = stryMutAct_9fa48("25531") ? {} : (stryCov_9fa48("25531"), {
      unreadData: topics.getUnreadData(stryMutAct_9fa48("25532") ? {} : (stryCov_9fa48("25532"), {
        uid: uid,
        query: query
      })),
      unreadChatCount: messaging.getUnreadCount(uid),
      unreadNotificationCount: user.notifications.getUnreadCount(uid),
      unreadFlagCount: async function () {
        if (stryMutAct_9fa48("25533")) {
          {}
        } else {
          stryCov_9fa48("25533");
          if (stryMutAct_9fa48("25536") ? originalRoutes.includes('/flags') || (await user.isPrivileged(uid)) : stryMutAct_9fa48("25535") ? false : stryMutAct_9fa48("25534") ? true : (stryCov_9fa48("25534", "25535", "25536"), originalRoutes.includes(stryMutAct_9fa48("25537") ? "" : (stryCov_9fa48("25537"), '/flags')) && (await user.isPrivileged(uid)))) {
            if (stryMutAct_9fa48("25538")) {
              {}
            } else {
              stryCov_9fa48("25538");
              return flags.getCount(stryMutAct_9fa48("25539") ? {} : (stryCov_9fa48("25539"), {
                uid,
                query,
                filters: stryMutAct_9fa48("25540") ? {} : (stryCov_9fa48("25540"), {
                  quick: stryMutAct_9fa48("25541") ? "" : (stryCov_9fa48("25541"), 'unresolved'),
                  cid: (await user.isAdminOrGlobalMod(uid)) ? stryMutAct_9fa48("25542") ? ["Stryker was here"] : (stryCov_9fa48("25542"), []) : await user.getModeratedCids(uid)
                })
              }));
            }
          }
          return 0;
        }
      }()
    });
    const results = await utils.promiseParallel(calls);
    const unreadCounts = results.unreadData.counts;
    const unreadCount = stryMutAct_9fa48("25543") ? {} : (stryCov_9fa48("25543"), {
      topic: stryMutAct_9fa48("25546") ? unreadCounts[''] && 0 : stryMutAct_9fa48("25545") ? false : stryMutAct_9fa48("25544") ? true : (stryCov_9fa48("25544", "25545", "25546"), unreadCounts[stryMutAct_9fa48("25547") ? "Stryker was here!" : (stryCov_9fa48("25547"), '')] || 0),
      newTopic: stryMutAct_9fa48("25550") ? unreadCounts.new && 0 : stryMutAct_9fa48("25549") ? false : stryMutAct_9fa48("25548") ? true : (stryCov_9fa48("25548", "25549", "25550"), unreadCounts.new || 0),
      watchedTopic: stryMutAct_9fa48("25553") ? unreadCounts.watched && 0 : stryMutAct_9fa48("25552") ? false : stryMutAct_9fa48("25551") ? true : (stryCov_9fa48("25551", "25552", "25553"), unreadCounts.watched || 0),
      unrepliedTopic: stryMutAct_9fa48("25556") ? unreadCounts.unreplied && 0 : stryMutAct_9fa48("25555") ? false : stryMutAct_9fa48("25554") ? true : (stryCov_9fa48("25554", "25555", "25556"), unreadCounts.unreplied || 0),
      mobileUnread: 0,
      unreadUrl: stryMutAct_9fa48("25557") ? "" : (stryCov_9fa48("25557"), '/unread'),
      chat: stryMutAct_9fa48("25560") ? results.unreadChatCount && 0 : stryMutAct_9fa48("25559") ? false : stryMutAct_9fa48("25558") ? true : (stryCov_9fa48("25558", "25559", "25560"), results.unreadChatCount || 0),
      notification: stryMutAct_9fa48("25563") ? results.unreadNotificationCount && 0 : stryMutAct_9fa48("25562") ? false : stryMutAct_9fa48("25561") ? true : (stryCov_9fa48("25561", "25562", "25563"), results.unreadNotificationCount || 0),
      flags: stryMutAct_9fa48("25566") ? results.unreadFlagCount && 0 : stryMutAct_9fa48("25565") ? false : stryMutAct_9fa48("25564") ? true : (stryCov_9fa48("25564", "25565", "25566"), results.unreadFlagCount || 0)
    });
    Object.keys(unreadCount).forEach(key => {
      if (stryMutAct_9fa48("25567")) {
        {}
      } else {
        stryCov_9fa48("25567");
        if (stryMutAct_9fa48("25571") ? unreadCount[key] <= 99 : stryMutAct_9fa48("25570") ? unreadCount[key] >= 99 : stryMutAct_9fa48("25569") ? false : stryMutAct_9fa48("25568") ? true : (stryCov_9fa48("25568", "25569", "25570", "25571"), unreadCount[key] > 99)) {
          if (stryMutAct_9fa48("25572")) {
            {}
          } else {
            stryCov_9fa48("25572");
            unreadCount[key] = stryMutAct_9fa48("25573") ? "" : (stryCov_9fa48("25573"), '99+');
          }
        }
      }
    });
    const {
      tidsByFilter
    } = results.unreadData;
    navigation = navigation.map(item => {
      if (stryMutAct_9fa48("25574")) {
        {}
      } else {
        stryCov_9fa48("25574");
        function modifyNavItem(item, route, filter, content) {
          if (stryMutAct_9fa48("25575")) {
            {}
          } else {
            stryCov_9fa48("25575");
            if (stryMutAct_9fa48("25578") ? item || item.originalRoute === route : stryMutAct_9fa48("25577") ? false : stryMutAct_9fa48("25576") ? true : (stryCov_9fa48("25576", "25577", "25578"), item && (stryMutAct_9fa48("25580") ? item.originalRoute !== route : stryMutAct_9fa48("25579") ? true : (stryCov_9fa48("25579", "25580"), item.originalRoute === route)))) {
              if (stryMutAct_9fa48("25581")) {
                {}
              } else {
                stryCov_9fa48("25581");
                unreadData[filter] = _.zipObject(tidsByFilter[filter], tidsByFilter[filter].map(stryMutAct_9fa48("25582") ? () => undefined : (stryCov_9fa48("25582"), () => stryMutAct_9fa48("25583") ? false : (stryCov_9fa48("25583"), true))));
                item.content = content;
                unreadCount.mobileUnread = content;
                unreadCount.unreadUrl = route;
                if (stryMutAct_9fa48("25587") ? unreadCounts[filter] <= 0 : stryMutAct_9fa48("25586") ? unreadCounts[filter] >= 0 : stryMutAct_9fa48("25585") ? false : stryMutAct_9fa48("25584") ? true : (stryCov_9fa48("25584", "25585", "25586", "25587"), unreadCounts[filter] > 0)) {
                  if (stryMutAct_9fa48("25588")) {
                    {}
                  } else {
                    stryCov_9fa48("25588");
                    item.iconClass += stryMutAct_9fa48("25589") ? "" : (stryCov_9fa48("25589"), ' unread-count');
                  }
                }
              }
            }
          }
        }
        modifyNavItem(item, stryMutAct_9fa48("25590") ? "" : (stryCov_9fa48("25590"), '/unread'), stryMutAct_9fa48("25591") ? "Stryker was here!" : (stryCov_9fa48("25591"), ''), unreadCount.topic);
        modifyNavItem(item, stryMutAct_9fa48("25592") ? "" : (stryCov_9fa48("25592"), '/unread?filter=new'), stryMutAct_9fa48("25593") ? "" : (stryCov_9fa48("25593"), 'new'), unreadCount.newTopic);
        modifyNavItem(item, stryMutAct_9fa48("25594") ? "" : (stryCov_9fa48("25594"), '/unread?filter=watched'), stryMutAct_9fa48("25595") ? "" : (stryCov_9fa48("25595"), 'watched'), unreadCount.watchedTopic);
        modifyNavItem(item, stryMutAct_9fa48("25596") ? "" : (stryCov_9fa48("25596"), '/unread?filter=unreplied'), stryMutAct_9fa48("25597") ? "" : (stryCov_9fa48("25597"), 'unreplied'), unreadCount.unrepliedTopic);
        (stryMutAct_9fa48("25598") ? [] : (stryCov_9fa48("25598"), [stryMutAct_9fa48("25599") ? "" : (stryCov_9fa48("25599"), 'flags')])).forEach(prop => {
          if (stryMutAct_9fa48("25600")) {
            {}
          } else {
            stryCov_9fa48("25600");
            if (stryMutAct_9fa48("25603") ? item && item.originalRoute === `/${prop}` || unreadCount[prop] > 0 : stryMutAct_9fa48("25602") ? false : stryMutAct_9fa48("25601") ? true : (stryCov_9fa48("25601", "25602", "25603"), (stryMutAct_9fa48("25605") ? item || item.originalRoute === `/${prop}` : stryMutAct_9fa48("25604") ? true : (stryCov_9fa48("25604", "25605"), item && (stryMutAct_9fa48("25607") ? item.originalRoute !== `/${prop}` : stryMutAct_9fa48("25606") ? true : (stryCov_9fa48("25606", "25607"), item.originalRoute === (stryMutAct_9fa48("25608") ? `` : (stryCov_9fa48("25608"), `/${prop}`)))))) && (stryMutAct_9fa48("25611") ? unreadCount[prop] <= 0 : stryMutAct_9fa48("25610") ? unreadCount[prop] >= 0 : stryMutAct_9fa48("25609") ? true : (stryCov_9fa48("25609", "25610", "25611"), unreadCount[prop] > 0)))) {
              if (stryMutAct_9fa48("25612")) {
                {}
              } else {
                stryCov_9fa48("25612");
                item.iconClass += stryMutAct_9fa48("25613") ? "" : (stryCov_9fa48("25613"), ' unread-count');
                item.content = unreadCount.flags;
              }
            }
          }
        });
        return item;
      }
    });
    return stryMutAct_9fa48("25614") ? {} : (stryCov_9fa48("25614"), {
      navigation,
      unreadCount
    });
  }
}
middleware.renderFooter = async function renderFooter(req, res, templateValues) {
  if (stryMutAct_9fa48("25615")) {
    {}
  } else {
    stryCov_9fa48("25615");
    const data = await plugins.hooks.fire(stryMutAct_9fa48("25616") ? "" : (stryCov_9fa48("25616"), 'filter:middleware.renderFooter'), stryMutAct_9fa48("25617") ? {} : (stryCov_9fa48("25617"), {
      req: req,
      res: res,
      templateValues: templateValues
    }));
    const scripts = await plugins.hooks.fire(stryMutAct_9fa48("25618") ? "" : (stryCov_9fa48("25618"), 'filter:scripts.get'), stryMutAct_9fa48("25619") ? ["Stryker was here"] : (stryCov_9fa48("25619"), []));
    data.templateValues.scripts = scripts.map(stryMutAct_9fa48("25620") ? () => undefined : (stryCov_9fa48("25620"), script => stryMutAct_9fa48("25621") ? {} : (stryCov_9fa48("25621"), {
      src: script
    })));
    data.templateValues.useCustomJS = meta.config.useCustomJS;
    data.templateValues.customJS = data.templateValues.useCustomJS ? meta.config.customJS : stryMutAct_9fa48("25622") ? "Stryker was here!" : (stryCov_9fa48("25622"), '');
    data.templateValues.isSpider = stryMutAct_9fa48("25625") ? req.uid !== -1 : stryMutAct_9fa48("25624") ? false : stryMutAct_9fa48("25623") ? true : (stryCov_9fa48("25623", "25624", "25625"), req.uid === (stryMutAct_9fa48("25626") ? +1 : (stryCov_9fa48("25626"), -1)));
    return await req.app.renderAsync(stryMutAct_9fa48("25627") ? "" : (stryCov_9fa48("25627"), 'footer'), data.templateValues);
  }
};
function modifyTitle(obj) {
  if (stryMutAct_9fa48("25628")) {
    {}
  } else {
    stryCov_9fa48("25628");
    const title = controllers.helpers.buildTitle(stryMutAct_9fa48("25631") ? meta.config.homePageTitle && '[[pages:home]]' : stryMutAct_9fa48("25630") ? false : stryMutAct_9fa48("25629") ? true : (stryCov_9fa48("25629", "25630", "25631"), meta.config.homePageTitle || (stryMutAct_9fa48("25632") ? "" : (stryCov_9fa48("25632"), '[[pages:home]]'))));
    obj.browserTitle = title;
    if (stryMutAct_9fa48("25634") ? false : stryMutAct_9fa48("25633") ? true : (stryCov_9fa48("25633", "25634"), obj.metaTags)) {
      if (stryMutAct_9fa48("25635")) {
        {}
      } else {
        stryCov_9fa48("25635");
        obj.metaTags.forEach((tag, i) => {
          if (stryMutAct_9fa48("25636")) {
            {}
          } else {
            stryCov_9fa48("25636");
            if (stryMutAct_9fa48("25639") ? tag.property !== 'og:title' : stryMutAct_9fa48("25638") ? false : stryMutAct_9fa48("25637") ? true : (stryCov_9fa48("25637", "25638", "25639"), tag.property === (stryMutAct_9fa48("25640") ? "" : (stryCov_9fa48("25640"), 'og:title')))) {
              if (stryMutAct_9fa48("25641")) {
                {}
              } else {
                stryCov_9fa48("25641");
                obj.metaTags[i].content = title;
              }
            }
          }
        });
      }
    }
    return title;
  }
}