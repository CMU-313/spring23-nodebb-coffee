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
const validator = require('validator');
const nconf = require('nconf');
const meta = require('../meta');
const user = require('../user');
const categories = require('../categories');
const plugins = require('../plugins');
const translator = require('../translator');
const languages = require('../languages');
const apiController = module.exports;
const relative_path = nconf.get(stryMutAct_9fa48("8122") ? "" : (stryCov_9fa48("8122"), 'relative_path'));
const upload_url = nconf.get(stryMutAct_9fa48("8123") ? "" : (stryCov_9fa48("8123"), 'upload_url'));
const asset_base_url = nconf.get(stryMutAct_9fa48("8124") ? "" : (stryCov_9fa48("8124"), 'asset_base_url'));
const socketioTransports = stryMutAct_9fa48("8127") ? nconf.get('socket.io:transports') && ['polling', 'websocket'] : stryMutAct_9fa48("8126") ? false : stryMutAct_9fa48("8125") ? true : (stryCov_9fa48("8125", "8126", "8127"), nconf.get(stryMutAct_9fa48("8128") ? "" : (stryCov_9fa48("8128"), 'socket.io:transports')) || (stryMutAct_9fa48("8129") ? [] : (stryCov_9fa48("8129"), [stryMutAct_9fa48("8130") ? "" : (stryCov_9fa48("8130"), 'polling'), stryMutAct_9fa48("8131") ? "" : (stryCov_9fa48("8131"), 'websocket')])));
const socketioOrigins = nconf.get(stryMutAct_9fa48("8132") ? "" : (stryCov_9fa48("8132"), 'socket.io:origins'));
const websocketAddress = stryMutAct_9fa48("8135") ? nconf.get('socket.io:address') && '' : stryMutAct_9fa48("8134") ? false : stryMutAct_9fa48("8133") ? true : (stryCov_9fa48("8133", "8134", "8135"), nconf.get(stryMutAct_9fa48("8136") ? "" : (stryCov_9fa48("8136"), 'socket.io:address')) || (stryMutAct_9fa48("8137") ? "Stryker was here!" : (stryCov_9fa48("8137"), '')));
apiController.loadConfig = async function (req) {
  if (stryMutAct_9fa48("8138")) {
    {}
  } else {
    stryCov_9fa48("8138");
    const config = stryMutAct_9fa48("8139") ? {} : (stryCov_9fa48("8139"), {
      relative_path,
      upload_url,
      asset_base_url,
      assetBaseUrl: asset_base_url,
      // deprecate in 1.20.x
      siteTitle: validator.escape(String(stryMutAct_9fa48("8142") ? (meta.config.title || meta.config.browserTitle) && 'NodeBB' : stryMutAct_9fa48("8141") ? false : stryMutAct_9fa48("8140") ? true : (stryCov_9fa48("8140", "8141", "8142"), (stryMutAct_9fa48("8144") ? meta.config.title && meta.config.browserTitle : stryMutAct_9fa48("8143") ? false : (stryCov_9fa48("8143", "8144"), meta.config.title || meta.config.browserTitle)) || (stryMutAct_9fa48("8145") ? "" : (stryCov_9fa48("8145"), 'NodeBB'))))),
      browserTitle: validator.escape(String(stryMutAct_9fa48("8148") ? (meta.config.browserTitle || meta.config.title) && 'NodeBB' : stryMutAct_9fa48("8147") ? false : stryMutAct_9fa48("8146") ? true : (stryCov_9fa48("8146", "8147", "8148"), (stryMutAct_9fa48("8150") ? meta.config.browserTitle && meta.config.title : stryMutAct_9fa48("8149") ? false : (stryCov_9fa48("8149", "8150"), meta.config.browserTitle || meta.config.title)) || (stryMutAct_9fa48("8151") ? "" : (stryCov_9fa48("8151"), 'NodeBB'))))),
      titleLayout: (stryMutAct_9fa48("8154") ? meta.config.titleLayout && '{pageTitle} | {browserTitle}' : stryMutAct_9fa48("8153") ? false : stryMutAct_9fa48("8152") ? true : (stryCov_9fa48("8152", "8153", "8154"), meta.config.titleLayout || (stryMutAct_9fa48("8155") ? "" : (stryCov_9fa48("8155"), '{pageTitle} | {browserTitle}')))).replace(/{/g, stryMutAct_9fa48("8156") ? "" : (stryCov_9fa48("8156"), '&#123;')).replace(/}/g, stryMutAct_9fa48("8157") ? "" : (stryCov_9fa48("8157"), '&#125;')),
      showSiteTitle: stryMutAct_9fa48("8160") ? meta.config.showSiteTitle !== 1 : stryMutAct_9fa48("8159") ? false : stryMutAct_9fa48("8158") ? true : (stryCov_9fa48("8158", "8159", "8160"), meta.config.showSiteTitle === 1),
      maintenanceMode: stryMutAct_9fa48("8163") ? meta.config.maintenanceMode !== 1 : stryMutAct_9fa48("8162") ? false : stryMutAct_9fa48("8161") ? true : (stryCov_9fa48("8161", "8162", "8163"), meta.config.maintenanceMode === 1),
      minimumTitleLength: meta.config.minimumTitleLength,
      maximumTitleLength: meta.config.maximumTitleLength,
      minimumPostLength: meta.config.minimumPostLength,
      maximumPostLength: meta.config.maximumPostLength,
      minimumTagsPerTopic: stryMutAct_9fa48("8166") ? meta.config.minimumTagsPerTopic && 0 : stryMutAct_9fa48("8165") ? false : stryMutAct_9fa48("8164") ? true : (stryCov_9fa48("8164", "8165", "8166"), meta.config.minimumTagsPerTopic || 0),
      maximumTagsPerTopic: stryMutAct_9fa48("8169") ? meta.config.maximumTagsPerTopic && 5 : stryMutAct_9fa48("8168") ? false : stryMutAct_9fa48("8167") ? true : (stryCov_9fa48("8167", "8168", "8169"), meta.config.maximumTagsPerTopic || 5),
      minimumTagLength: stryMutAct_9fa48("8172") ? meta.config.minimumTagLength && 3 : stryMutAct_9fa48("8171") ? false : stryMutAct_9fa48("8170") ? true : (stryCov_9fa48("8170", "8171", "8172"), meta.config.minimumTagLength || 3),
      maximumTagLength: stryMutAct_9fa48("8175") ? meta.config.maximumTagLength && 15 : stryMutAct_9fa48("8174") ? false : stryMutAct_9fa48("8173") ? true : (stryCov_9fa48("8173", "8174", "8175"), meta.config.maximumTagLength || 15),
      undoTimeout: stryMutAct_9fa48("8178") ? meta.config.undoTimeout && 0 : stryMutAct_9fa48("8177") ? false : stryMutAct_9fa48("8176") ? true : (stryCov_9fa48("8176", "8177", "8178"), meta.config.undoTimeout || 0),
      useOutgoingLinksPage: stryMutAct_9fa48("8181") ? meta.config.useOutgoingLinksPage !== 1 : stryMutAct_9fa48("8180") ? false : stryMutAct_9fa48("8179") ? true : (stryCov_9fa48("8179", "8180", "8181"), meta.config.useOutgoingLinksPage === 1),
      outgoingLinksWhitelist: (stryMutAct_9fa48("8184") ? meta.config.useOutgoingLinksPage !== 1 : stryMutAct_9fa48("8183") ? false : stryMutAct_9fa48("8182") ? true : (stryCov_9fa48("8182", "8183", "8184"), meta.config.useOutgoingLinksPage === 1)) ? meta.config[stryMutAct_9fa48("8185") ? "" : (stryCov_9fa48("8185"), 'outgoingLinks:whitelist')] : undefined,
      allowGuestHandles: stryMutAct_9fa48("8188") ? meta.config.allowGuestHandles !== 1 : stryMutAct_9fa48("8187") ? false : stryMutAct_9fa48("8186") ? true : (stryCov_9fa48("8186", "8187", "8188"), meta.config.allowGuestHandles === 1),
      allowTopicsThumbnail: stryMutAct_9fa48("8191") ? meta.config.allowTopicsThumbnail !== 1 : stryMutAct_9fa48("8190") ? false : stryMutAct_9fa48("8189") ? true : (stryCov_9fa48("8189", "8190", "8191"), meta.config.allowTopicsThumbnail === 1),
      usePagination: stryMutAct_9fa48("8194") ? meta.config.usePagination !== 1 : stryMutAct_9fa48("8193") ? false : stryMutAct_9fa48("8192") ? true : (stryCov_9fa48("8192", "8193", "8194"), meta.config.usePagination === 1),
      disableChat: stryMutAct_9fa48("8197") ? meta.config.disableChat !== 1 : stryMutAct_9fa48("8196") ? false : stryMutAct_9fa48("8195") ? true : (stryCov_9fa48("8195", "8196", "8197"), meta.config.disableChat === 1),
      disableChatMessageEditing: stryMutAct_9fa48("8200") ? meta.config.disableChatMessageEditing !== 1 : stryMutAct_9fa48("8199") ? false : stryMutAct_9fa48("8198") ? true : (stryCov_9fa48("8198", "8199", "8200"), meta.config.disableChatMessageEditing === 1),
      maximumChatMessageLength: stryMutAct_9fa48("8203") ? meta.config.maximumChatMessageLength && 1000 : stryMutAct_9fa48("8202") ? false : stryMutAct_9fa48("8201") ? true : (stryCov_9fa48("8201", "8202", "8203"), meta.config.maximumChatMessageLength || 1000),
      socketioTransports,
      socketioOrigins,
      websocketAddress,
      maxReconnectionAttempts: meta.config.maxReconnectionAttempts,
      reconnectionDelay: meta.config.reconnectionDelay,
      topicsPerPage: stryMutAct_9fa48("8206") ? meta.config.topicsPerPage && 20 : stryMutAct_9fa48("8205") ? false : stryMutAct_9fa48("8204") ? true : (stryCov_9fa48("8204", "8205", "8206"), meta.config.topicsPerPage || 20),
      postsPerPage: stryMutAct_9fa48("8209") ? meta.config.postsPerPage && 20 : stryMutAct_9fa48("8208") ? false : stryMutAct_9fa48("8207") ? true : (stryCov_9fa48("8207", "8208", "8209"), meta.config.postsPerPage || 20),
      maximumFileSize: meta.config.maximumFileSize,
      'theme:id': meta.config[stryMutAct_9fa48("8210") ? "" : (stryCov_9fa48("8210"), 'theme:id')],
      'theme:src': meta.config[stryMutAct_9fa48("8211") ? "" : (stryCov_9fa48("8211"), 'theme:src')],
      defaultLang: stryMutAct_9fa48("8214") ? meta.config.defaultLang && 'en-GB' : stryMutAct_9fa48("8213") ? false : stryMutAct_9fa48("8212") ? true : (stryCov_9fa48("8212", "8213", "8214"), meta.config.defaultLang || (stryMutAct_9fa48("8215") ? "" : (stryCov_9fa48("8215"), 'en-GB'))),
      userLang: req.query.lang ? validator.escape(String(req.query.lang)) : stryMutAct_9fa48("8218") ? meta.config.defaultLang && 'en-GB' : stryMutAct_9fa48("8217") ? false : stryMutAct_9fa48("8216") ? true : (stryCov_9fa48("8216", "8217", "8218"), meta.config.defaultLang || (stryMutAct_9fa48("8219") ? "" : (stryCov_9fa48("8219"), 'en-GB'))),
      loggedIn: stryMutAct_9fa48("8220") ? !req.user : (stryCov_9fa48("8220"), !(stryMutAct_9fa48("8221") ? req.user : (stryCov_9fa48("8221"), !req.user))),
      uid: req.uid,
      'cache-buster': stryMutAct_9fa48("8224") ? meta.config['cache-buster'] && '' : stryMutAct_9fa48("8223") ? false : stryMutAct_9fa48("8222") ? true : (stryCov_9fa48("8222", "8223", "8224"), meta.config[stryMutAct_9fa48("8225") ? "" : (stryCov_9fa48("8225"), 'cache-buster')] || (stryMutAct_9fa48("8226") ? "Stryker was here!" : (stryCov_9fa48("8226"), ''))),
      topicPostSort: stryMutAct_9fa48("8229") ? meta.config.topicPostSort && 'oldest_to_newest' : stryMutAct_9fa48("8228") ? false : stryMutAct_9fa48("8227") ? true : (stryCov_9fa48("8227", "8228", "8229"), meta.config.topicPostSort || (stryMutAct_9fa48("8230") ? "" : (stryCov_9fa48("8230"), 'oldest_to_newest'))),
      categoryTopicSort: stryMutAct_9fa48("8233") ? meta.config.categoryTopicSort && 'newest_to_oldest' : stryMutAct_9fa48("8232") ? false : stryMutAct_9fa48("8231") ? true : (stryCov_9fa48("8231", "8232", "8233"), meta.config.categoryTopicSort || (stryMutAct_9fa48("8234") ? "" : (stryCov_9fa48("8234"), 'newest_to_oldest'))),
      csrf_token: stryMutAct_9fa48("8237") ? req.uid >= 0 && req.csrfToken || req.csrfToken() : stryMutAct_9fa48("8236") ? false : stryMutAct_9fa48("8235") ? true : (stryCov_9fa48("8235", "8236", "8237"), (stryMutAct_9fa48("8239") ? req.uid >= 0 || req.csrfToken : stryMutAct_9fa48("8238") ? true : (stryCov_9fa48("8238", "8239"), (stryMutAct_9fa48("8242") ? req.uid < 0 : stryMutAct_9fa48("8241") ? req.uid > 0 : stryMutAct_9fa48("8240") ? true : (stryCov_9fa48("8240", "8241", "8242"), req.uid >= 0)) && req.csrfToken)) && req.csrfToken()),
      searchEnabled: plugins.hooks.hasListeners(stryMutAct_9fa48("8243") ? "" : (stryCov_9fa48("8243"), 'filter:search.query')),
      searchDefaultInQuick: stryMutAct_9fa48("8246") ? meta.config.searchDefaultInQuick && 'titles' : stryMutAct_9fa48("8245") ? false : stryMutAct_9fa48("8244") ? true : (stryCov_9fa48("8244", "8245", "8246"), meta.config.searchDefaultInQuick || (stryMutAct_9fa48("8247") ? "" : (stryCov_9fa48("8247"), 'titles'))),
      bootswatchSkin: stryMutAct_9fa48("8250") ? meta.config.bootswatchSkin && '' : stryMutAct_9fa48("8249") ? false : stryMutAct_9fa48("8248") ? true : (stryCov_9fa48("8248", "8249", "8250"), meta.config.bootswatchSkin || (stryMutAct_9fa48("8251") ? "Stryker was here!" : (stryCov_9fa48("8251"), ''))),
      enablePostHistory: stryMutAct_9fa48("8254") ? meta.config.enablePostHistory !== 1 : stryMutAct_9fa48("8253") ? false : stryMutAct_9fa48("8252") ? true : (stryCov_9fa48("8252", "8253", "8254"), meta.config.enablePostHistory === 1),
      timeagoCutoff: (stryMutAct_9fa48("8257") ? meta.config.timeagoCutoff === '' : stryMutAct_9fa48("8256") ? false : stryMutAct_9fa48("8255") ? true : (stryCov_9fa48("8255", "8256", "8257"), meta.config.timeagoCutoff !== (stryMutAct_9fa48("8258") ? "Stryker was here!" : (stryCov_9fa48("8258"), '')))) ? Math.max(0, parseInt(meta.config.timeagoCutoff, 10)) : meta.config.timeagoCutoff,
      timeagoCodes: languages.timeagoCodes,
      cookies: stryMutAct_9fa48("8259") ? {} : (stryCov_9fa48("8259"), {
        enabled: stryMutAct_9fa48("8262") ? meta.config.cookieConsentEnabled !== 1 : stryMutAct_9fa48("8261") ? false : stryMutAct_9fa48("8260") ? true : (stryCov_9fa48("8260", "8261", "8262"), meta.config.cookieConsentEnabled === 1),
        message: translator.escape(validator.escape(stryMutAct_9fa48("8265") ? meta.config.cookieConsentMessage && '[[global:cookies.message]]' : stryMutAct_9fa48("8264") ? false : stryMutAct_9fa48("8263") ? true : (stryCov_9fa48("8263", "8264", "8265"), meta.config.cookieConsentMessage || (stryMutAct_9fa48("8266") ? "" : (stryCov_9fa48("8266"), '[[global:cookies.message]]'))))).replace(/\\/g, stryMutAct_9fa48("8267") ? "" : (stryCov_9fa48("8267"), '\\\\')),
        dismiss: translator.escape(validator.escape(stryMutAct_9fa48("8270") ? meta.config.cookieConsentDismiss && '[[global:cookies.accept]]' : stryMutAct_9fa48("8269") ? false : stryMutAct_9fa48("8268") ? true : (stryCov_9fa48("8268", "8269", "8270"), meta.config.cookieConsentDismiss || (stryMutAct_9fa48("8271") ? "" : (stryCov_9fa48("8271"), '[[global:cookies.accept]]'))))).replace(/\\/g, stryMutAct_9fa48("8272") ? "" : (stryCov_9fa48("8272"), '\\\\')),
        link: translator.escape(validator.escape(stryMutAct_9fa48("8275") ? meta.config.cookieConsentLink && '[[global:cookies.learn_more]]' : stryMutAct_9fa48("8274") ? false : stryMutAct_9fa48("8273") ? true : (stryCov_9fa48("8273", "8274", "8275"), meta.config.cookieConsentLink || (stryMutAct_9fa48("8276") ? "" : (stryCov_9fa48("8276"), '[[global:cookies.learn_more]]'))))).replace(/\\/g, stryMutAct_9fa48("8277") ? "" : (stryCov_9fa48("8277"), '\\\\')),
        link_url: translator.escape(validator.escape(stryMutAct_9fa48("8280") ? meta.config.cookieConsentLinkUrl && 'https://www.cookiesandyou.com' : stryMutAct_9fa48("8279") ? false : stryMutAct_9fa48("8278") ? true : (stryCov_9fa48("8278", "8279", "8280"), meta.config.cookieConsentLinkUrl || (stryMutAct_9fa48("8281") ? "" : (stryCov_9fa48("8281"), 'https://www.cookiesandyou.com'))))).replace(/\\/g, stryMutAct_9fa48("8282") ? "" : (stryCov_9fa48("8282"), '\\\\'))
      }),
      thumbs: stryMutAct_9fa48("8283") ? {} : (stryCov_9fa48("8283"), {
        size: meta.config.topicThumbSize
      }),
      iconBackgrounds: await user.getIconBackgrounds(req.uid),
      emailPrompt: meta.config.emailPrompt,
      useragent: req.useragent
    });
    let settings = config;
    let isAdminOrGlobalMod;
    if (stryMutAct_9fa48("8285") ? false : stryMutAct_9fa48("8284") ? true : (stryCov_9fa48("8284", "8285"), req.loggedIn)) {
      if (stryMutAct_9fa48("8286")) {
        {}
      } else {
        stryCov_9fa48("8286");
        [settings, isAdminOrGlobalMod] = await Promise.all(stryMutAct_9fa48("8287") ? [] : (stryCov_9fa48("8287"), [user.getSettings(req.uid), user.isAdminOrGlobalMod(req.uid)]));
      }
    }

    // Handle old skin configs
    const oldSkins = stryMutAct_9fa48("8288") ? [] : (stryCov_9fa48("8288"), [stryMutAct_9fa48("8289") ? "" : (stryCov_9fa48("8289"), 'noskin'), stryMutAct_9fa48("8290") ? "" : (stryCov_9fa48("8290"), 'default')]);
    settings.bootswatchSkin = oldSkins.includes(settings.bootswatchSkin) ? stryMutAct_9fa48("8291") ? "Stryker was here!" : (stryCov_9fa48("8291"), '') : settings.bootswatchSkin;
    config.usePagination = settings.usePagination;
    config.topicsPerPage = settings.topicsPerPage;
    config.postsPerPage = settings.postsPerPage;
    config.userLang = validator.escape(String(stryMutAct_9fa48("8294") ? ((req.query.lang ? req.query.lang : null) || settings.userLang) && config.defaultLang : stryMutAct_9fa48("8293") ? false : stryMutAct_9fa48("8292") ? true : (stryCov_9fa48("8292", "8293", "8294"), (stryMutAct_9fa48("8296") ? (req.query.lang ? req.query.lang : null) && settings.userLang : stryMutAct_9fa48("8295") ? false : (stryCov_9fa48("8295", "8296"), (req.query.lang ? req.query.lang : null) || settings.userLang)) || config.defaultLang)));
    config.acpLang = validator.escape(String(stryMutAct_9fa48("8299") ? (req.query.lang ? req.query.lang : null) && settings.acpLang : stryMutAct_9fa48("8298") ? false : stryMutAct_9fa48("8297") ? true : (stryCov_9fa48("8297", "8298", "8299"), (req.query.lang ? req.query.lang : null) || settings.acpLang)));
    config.openOutgoingLinksInNewTab = settings.openOutgoingLinksInNewTab;
    config.topicPostSort = stryMutAct_9fa48("8302") ? settings.topicPostSort && config.topicPostSort : stryMutAct_9fa48("8301") ? false : stryMutAct_9fa48("8300") ? true : (stryCov_9fa48("8300", "8301", "8302"), settings.topicPostSort || config.topicPostSort);
    config.categoryTopicSort = stryMutAct_9fa48("8305") ? settings.categoryTopicSort && config.categoryTopicSort : stryMutAct_9fa48("8304") ? false : stryMutAct_9fa48("8303") ? true : (stryCov_9fa48("8303", "8304", "8305"), settings.categoryTopicSort || config.categoryTopicSort);
    config.topicSearchEnabled = stryMutAct_9fa48("8308") ? settings.topicSearchEnabled && false : stryMutAct_9fa48("8307") ? false : stryMutAct_9fa48("8306") ? true : (stryCov_9fa48("8306", "8307", "8308"), settings.topicSearchEnabled || (stryMutAct_9fa48("8309") ? true : (stryCov_9fa48("8309"), false)));
    config.bootswatchSkin = (stryMutAct_9fa48("8312") ? meta.config.disableCustomUserSkins !== 1 && settings.bootswatchSkin || settings.bootswatchSkin !== '' : stryMutAct_9fa48("8311") ? false : stryMutAct_9fa48("8310") ? true : (stryCov_9fa48("8310", "8311", "8312"), (stryMutAct_9fa48("8314") ? meta.config.disableCustomUserSkins !== 1 || settings.bootswatchSkin : stryMutAct_9fa48("8313") ? true : (stryCov_9fa48("8313", "8314"), (stryMutAct_9fa48("8316") ? meta.config.disableCustomUserSkins === 1 : stryMutAct_9fa48("8315") ? true : (stryCov_9fa48("8315", "8316"), meta.config.disableCustomUserSkins !== 1)) && settings.bootswatchSkin)) && (stryMutAct_9fa48("8318") ? settings.bootswatchSkin === '' : stryMutAct_9fa48("8317") ? true : (stryCov_9fa48("8317", "8318"), settings.bootswatchSkin !== (stryMutAct_9fa48("8319") ? "Stryker was here!" : (stryCov_9fa48("8319"), '')))))) ? settings.bootswatchSkin : stryMutAct_9fa48("8320") ? "Stryker was here!" : (stryCov_9fa48("8320"), '');

    // Overrides based on privilege
    config.disableChatMessageEditing = isAdminOrGlobalMod ? stryMutAct_9fa48("8321") ? true : (stryCov_9fa48("8321"), false) : config.disableChatMessageEditing;
    return await plugins.hooks.fire(stryMutAct_9fa48("8322") ? "" : (stryCov_9fa48("8322"), 'filter:config.get'), config);
  }
};
apiController.getConfig = async function (req, res) {
  if (stryMutAct_9fa48("8323")) {
    {}
  } else {
    stryCov_9fa48("8323");
    const config = await apiController.loadConfig(req);
    res.json(config);
  }
};
apiController.getModerators = async function (req, res) {
  if (stryMutAct_9fa48("8324")) {
    {}
  } else {
    stryCov_9fa48("8324");
    const moderators = await categories.getModerators(req.params.cid);
    res.json(stryMutAct_9fa48("8325") ? {} : (stryCov_9fa48("8325"), {
      moderators: moderators
    }));
  }
};
require('../promisify')(apiController, stryMutAct_9fa48("8326") ? [] : (stryCov_9fa48("8326"), [stryMutAct_9fa48("8327") ? "" : (stryCov_9fa48("8327"), 'getConfig'), stryMutAct_9fa48("8328") ? "" : (stryCov_9fa48("8328"), 'getObject'), stryMutAct_9fa48("8329") ? "" : (stryCov_9fa48("8329"), 'getModerators')]));