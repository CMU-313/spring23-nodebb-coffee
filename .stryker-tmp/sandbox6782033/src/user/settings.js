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
const meta = require('../meta');
const db = require('../database');
const plugins = require('../plugins');
const notifications = require('../notifications');
const languages = require('../languages');
module.exports = function (User) {
  if (stryMutAct_9fa48("49283")) {
    {}
  } else {
    stryCov_9fa48("49283");
    User.getSettings = async function (uid) {
      if (stryMutAct_9fa48("49284")) {
        {}
      } else {
        stryCov_9fa48("49284");
        if (stryMutAct_9fa48("49288") ? parseInt(uid, 10) > 0 : stryMutAct_9fa48("49287") ? parseInt(uid, 10) < 0 : stryMutAct_9fa48("49286") ? false : stryMutAct_9fa48("49285") ? true : (stryCov_9fa48("49285", "49286", "49287", "49288"), parseInt(uid, 10) <= 0)) {
          if (stryMutAct_9fa48("49289")) {
            {}
          } else {
            stryCov_9fa48("49289");
            return await onSettingsLoaded(0, {});
          }
        }
        let settings = await db.getObject(stryMutAct_9fa48("49290") ? `` : (stryCov_9fa48("49290"), `user:${uid}:settings`));
        settings = stryMutAct_9fa48("49293") ? settings && {} : stryMutAct_9fa48("49292") ? false : stryMutAct_9fa48("49291") ? true : (stryCov_9fa48("49291", "49292", "49293"), settings || {});
        settings.uid = uid;
        return await onSettingsLoaded(uid, settings);
      }
    };
    User.getMultipleUserSettings = async function (uids) {
      if (stryMutAct_9fa48("49294")) {
        {}
      } else {
        stryCov_9fa48("49294");
        if (stryMutAct_9fa48("49297") ? !Array.isArray(uids) && !uids.length : stryMutAct_9fa48("49296") ? false : stryMutAct_9fa48("49295") ? true : (stryCov_9fa48("49295", "49296", "49297"), (stryMutAct_9fa48("49298") ? Array.isArray(uids) : (stryCov_9fa48("49298"), !Array.isArray(uids))) || (stryMutAct_9fa48("49299") ? uids.length : (stryCov_9fa48("49299"), !uids.length)))) {
          if (stryMutAct_9fa48("49300")) {
            {}
          } else {
            stryCov_9fa48("49300");
            return stryMutAct_9fa48("49301") ? ["Stryker was here"] : (stryCov_9fa48("49301"), []);
          }
        }
        const keys = uids.map(stryMutAct_9fa48("49302") ? () => undefined : (stryCov_9fa48("49302"), uid => stryMutAct_9fa48("49303") ? `` : (stryCov_9fa48("49303"), `user:${uid}:settings`)));
        let settings = await db.getObjects(keys);
        settings = settings.map((userSettings, index) => {
          if (stryMutAct_9fa48("49304")) {
            {}
          } else {
            stryCov_9fa48("49304");
            userSettings = stryMutAct_9fa48("49307") ? userSettings && {} : stryMutAct_9fa48("49306") ? false : stryMutAct_9fa48("49305") ? true : (stryCov_9fa48("49305", "49306", "49307"), userSettings || {});
            userSettings.uid = uids[index];
            return userSettings;
          }
        });
        return await Promise.all(settings.map(stryMutAct_9fa48("49308") ? () => undefined : (stryCov_9fa48("49308"), s => onSettingsLoaded(s.uid, s))));
      }
    };
    async function onSettingsLoaded(uid, settings) {
      if (stryMutAct_9fa48("49309")) {
        {}
      } else {
        stryCov_9fa48("49309");
        const data = await plugins.hooks.fire(stryMutAct_9fa48("49310") ? "" : (stryCov_9fa48("49310"), 'filter:user.getSettings'), stryMutAct_9fa48("49311") ? {} : (stryCov_9fa48("49311"), {
          uid: uid,
          settings: settings
        }));
        settings = data.settings;
        const defaultTopicsPerPage = meta.config.topicsPerPage;
        const defaultPostsPerPage = meta.config.postsPerPage;
        settings.showemail = stryMutAct_9fa48("49314") ? parseInt(getSetting(settings, 'showemail', 0), 10) !== 1 : stryMutAct_9fa48("49313") ? false : stryMutAct_9fa48("49312") ? true : (stryCov_9fa48("49312", "49313", "49314"), parseInt(getSetting(settings, stryMutAct_9fa48("49315") ? "" : (stryCov_9fa48("49315"), 'showemail'), 0), 10) === 1);
        settings.showfullname = stryMutAct_9fa48("49318") ? parseInt(getSetting(settings, 'showfullname', 0), 10) !== 1 : stryMutAct_9fa48("49317") ? false : stryMutAct_9fa48("49316") ? true : (stryCov_9fa48("49316", "49317", "49318"), parseInt(getSetting(settings, stryMutAct_9fa48("49319") ? "" : (stryCov_9fa48("49319"), 'showfullname'), 0), 10) === 1);
        settings.openOutgoingLinksInNewTab = stryMutAct_9fa48("49322") ? parseInt(getSetting(settings, 'openOutgoingLinksInNewTab', 0), 10) !== 1 : stryMutAct_9fa48("49321") ? false : stryMutAct_9fa48("49320") ? true : (stryCov_9fa48("49320", "49321", "49322"), parseInt(getSetting(settings, stryMutAct_9fa48("49323") ? "" : (stryCov_9fa48("49323"), 'openOutgoingLinksInNewTab'), 0), 10) === 1);
        settings.dailyDigestFreq = getSetting(settings, stryMutAct_9fa48("49324") ? "" : (stryCov_9fa48("49324"), 'dailyDigestFreq'), stryMutAct_9fa48("49325") ? "" : (stryCov_9fa48("49325"), 'off'));
        settings.usePagination = stryMutAct_9fa48("49328") ? parseInt(getSetting(settings, 'usePagination', 0), 10) !== 1 : stryMutAct_9fa48("49327") ? false : stryMutAct_9fa48("49326") ? true : (stryCov_9fa48("49326", "49327", "49328"), parseInt(getSetting(settings, stryMutAct_9fa48("49329") ? "" : (stryCov_9fa48("49329"), 'usePagination'), 0), 10) === 1);
        settings.topicsPerPage = Math.min(meta.config.maxTopicsPerPage, settings.topicsPerPage ? parseInt(settings.topicsPerPage, 10) : defaultTopicsPerPage, defaultTopicsPerPage);
        settings.postsPerPage = Math.min(meta.config.maxPostsPerPage, settings.postsPerPage ? parseInt(settings.postsPerPage, 10) : defaultPostsPerPage, defaultPostsPerPage);
        settings.userLang = stryMutAct_9fa48("49332") ? (settings.userLang || meta.config.defaultLang) && 'en-GB' : stryMutAct_9fa48("49331") ? false : stryMutAct_9fa48("49330") ? true : (stryCov_9fa48("49330", "49331", "49332"), (stryMutAct_9fa48("49334") ? settings.userLang && meta.config.defaultLang : stryMutAct_9fa48("49333") ? false : (stryCov_9fa48("49333", "49334"), settings.userLang || meta.config.defaultLang)) || (stryMutAct_9fa48("49335") ? "" : (stryCov_9fa48("49335"), 'en-GB')));
        settings.acpLang = stryMutAct_9fa48("49338") ? settings.acpLang && settings.userLang : stryMutAct_9fa48("49337") ? false : stryMutAct_9fa48("49336") ? true : (stryCov_9fa48("49336", "49337", "49338"), settings.acpLang || settings.userLang);
        settings.topicPostSort = getSetting(settings, stryMutAct_9fa48("49339") ? "" : (stryCov_9fa48("49339"), 'topicPostSort'), stryMutAct_9fa48("49340") ? "" : (stryCov_9fa48("49340"), 'oldest_to_newest'));
        settings.categoryTopicSort = getSetting(settings, stryMutAct_9fa48("49341") ? "" : (stryCov_9fa48("49341"), 'categoryTopicSort'), stryMutAct_9fa48("49342") ? "" : (stryCov_9fa48("49342"), 'newest_to_oldest'));
        settings.followTopicsOnCreate = stryMutAct_9fa48("49345") ? parseInt(getSetting(settings, 'followTopicsOnCreate', 1), 10) !== 1 : stryMutAct_9fa48("49344") ? false : stryMutAct_9fa48("49343") ? true : (stryCov_9fa48("49343", "49344", "49345"), parseInt(getSetting(settings, stryMutAct_9fa48("49346") ? "" : (stryCov_9fa48("49346"), 'followTopicsOnCreate'), 1), 10) === 1);
        settings.followTopicsOnReply = stryMutAct_9fa48("49349") ? parseInt(getSetting(settings, 'followTopicsOnReply', 0), 10) !== 1 : stryMutAct_9fa48("49348") ? false : stryMutAct_9fa48("49347") ? true : (stryCov_9fa48("49347", "49348", "49349"), parseInt(getSetting(settings, stryMutAct_9fa48("49350") ? "" : (stryCov_9fa48("49350"), 'followTopicsOnReply'), 0), 10) === 1);
        settings.upvoteNotifFreq = getSetting(settings, stryMutAct_9fa48("49351") ? "" : (stryCov_9fa48("49351"), 'upvoteNotifFreq'), stryMutAct_9fa48("49352") ? "" : (stryCov_9fa48("49352"), 'all'));
        settings.restrictChat = stryMutAct_9fa48("49355") ? parseInt(getSetting(settings, 'restrictChat', 0), 10) !== 1 : stryMutAct_9fa48("49354") ? false : stryMutAct_9fa48("49353") ? true : (stryCov_9fa48("49353", "49354", "49355"), parseInt(getSetting(settings, stryMutAct_9fa48("49356") ? "" : (stryCov_9fa48("49356"), 'restrictChat'), 0), 10) === 1);
        settings.topicSearchEnabled = stryMutAct_9fa48("49359") ? parseInt(getSetting(settings, 'topicSearchEnabled', 0), 10) !== 1 : stryMutAct_9fa48("49358") ? false : stryMutAct_9fa48("49357") ? true : (stryCov_9fa48("49357", "49358", "49359"), parseInt(getSetting(settings, stryMutAct_9fa48("49360") ? "" : (stryCov_9fa48("49360"), 'topicSearchEnabled'), 0), 10) === 1);
        settings.updateUrlWithPostIndex = stryMutAct_9fa48("49363") ? parseInt(getSetting(settings, 'updateUrlWithPostIndex', 1), 10) !== 1 : stryMutAct_9fa48("49362") ? false : stryMutAct_9fa48("49361") ? true : (stryCov_9fa48("49361", "49362", "49363"), parseInt(getSetting(settings, stryMutAct_9fa48("49364") ? "" : (stryCov_9fa48("49364"), 'updateUrlWithPostIndex'), 1), 10) === 1);
        settings.bootswatchSkin = validator.escape(String(stryMutAct_9fa48("49367") ? settings.bootswatchSkin && '' : stryMutAct_9fa48("49366") ? false : stryMutAct_9fa48("49365") ? true : (stryCov_9fa48("49365", "49366", "49367"), settings.bootswatchSkin || (stryMutAct_9fa48("49368") ? "Stryker was here!" : (stryCov_9fa48("49368"), '')))));
        settings.homePageRoute = validator.escape(String(stryMutAct_9fa48("49371") ? settings.homePageRoute && '' : stryMutAct_9fa48("49370") ? false : stryMutAct_9fa48("49369") ? true : (stryCov_9fa48("49369", "49370", "49371"), settings.homePageRoute || (stryMutAct_9fa48("49372") ? "Stryker was here!" : (stryCov_9fa48("49372"), ''))))).replace(/&#x2F;/g, stryMutAct_9fa48("49373") ? "" : (stryCov_9fa48("49373"), '/'));
        settings.scrollToMyPost = stryMutAct_9fa48("49376") ? parseInt(getSetting(settings, 'scrollToMyPost', 1), 10) !== 1 : stryMutAct_9fa48("49375") ? false : stryMutAct_9fa48("49374") ? true : (stryCov_9fa48("49374", "49375", "49376"), parseInt(getSetting(settings, stryMutAct_9fa48("49377") ? "" : (stryCov_9fa48("49377"), 'scrollToMyPost'), 1), 10) === 1);
        settings.categoryWatchState = getSetting(settings, stryMutAct_9fa48("49378") ? "" : (stryCov_9fa48("49378"), 'categoryWatchState'), stryMutAct_9fa48("49379") ? "" : (stryCov_9fa48("49379"), 'notwatching'));
        const notificationTypes = await notifications.getAllNotificationTypes();
        notificationTypes.forEach(notificationType => {
          if (stryMutAct_9fa48("49380")) {
            {}
          } else {
            stryCov_9fa48("49380");
            settings[notificationType] = getSetting(settings, notificationType, stryMutAct_9fa48("49381") ? "" : (stryCov_9fa48("49381"), 'notification'));
          }
        });
        return settings;
      }
    }
    function getSetting(settings, key, defaultValue) {
      if (stryMutAct_9fa48("49382")) {
        {}
      } else {
        stryCov_9fa48("49382");
        if (stryMutAct_9fa48("49385") ? settings[key] && settings[key] === 0 : stryMutAct_9fa48("49384") ? false : stryMutAct_9fa48("49383") ? true : (stryCov_9fa48("49383", "49384", "49385"), settings[key] || (stryMutAct_9fa48("49387") ? settings[key] !== 0 : stryMutAct_9fa48("49386") ? false : (stryCov_9fa48("49386", "49387"), settings[key] === 0)))) {
          if (stryMutAct_9fa48("49388")) {
            {}
          } else {
            stryCov_9fa48("49388");
            return settings[key];
          }
        } else if (stryMutAct_9fa48("49391") ? meta.config[key] && meta.config[key] === 0 : stryMutAct_9fa48("49390") ? false : stryMutAct_9fa48("49389") ? true : (stryCov_9fa48("49389", "49390", "49391"), meta.config[key] || (stryMutAct_9fa48("49393") ? meta.config[key] !== 0 : stryMutAct_9fa48("49392") ? false : (stryCov_9fa48("49392", "49393"), meta.config[key] === 0)))) {
          if (stryMutAct_9fa48("49394")) {
            {}
          } else {
            stryCov_9fa48("49394");
            return meta.config[key];
          }
        }
        return defaultValue;
      }
    }
    User.saveSettings = async function (uid, data) {
      if (stryMutAct_9fa48("49395")) {
        {}
      } else {
        stryCov_9fa48("49395");
        const maxPostsPerPage = stryMutAct_9fa48("49398") ? meta.config.maxPostsPerPage && 20 : stryMutAct_9fa48("49397") ? false : stryMutAct_9fa48("49396") ? true : (stryCov_9fa48("49396", "49397", "49398"), meta.config.maxPostsPerPage || 20);
        if (stryMutAct_9fa48("49401") ? (!data.postsPerPage || parseInt(data.postsPerPage, 10) <= 1) && parseInt(data.postsPerPage, 10) > maxPostsPerPage : stryMutAct_9fa48("49400") ? false : stryMutAct_9fa48("49399") ? true : (stryCov_9fa48("49399", "49400", "49401"), (stryMutAct_9fa48("49403") ? !data.postsPerPage && parseInt(data.postsPerPage, 10) <= 1 : stryMutAct_9fa48("49402") ? false : (stryCov_9fa48("49402", "49403"), (stryMutAct_9fa48("49404") ? data.postsPerPage : (stryCov_9fa48("49404"), !data.postsPerPage)) || (stryMutAct_9fa48("49407") ? parseInt(data.postsPerPage, 10) > 1 : stryMutAct_9fa48("49406") ? parseInt(data.postsPerPage, 10) < 1 : stryMutAct_9fa48("49405") ? false : (stryCov_9fa48("49405", "49406", "49407"), parseInt(data.postsPerPage, 10) <= 1)))) || (stryMutAct_9fa48("49410") ? parseInt(data.postsPerPage, 10) <= maxPostsPerPage : stryMutAct_9fa48("49409") ? parseInt(data.postsPerPage, 10) >= maxPostsPerPage : stryMutAct_9fa48("49408") ? false : (stryCov_9fa48("49408", "49409", "49410"), parseInt(data.postsPerPage, 10) > maxPostsPerPage)))) {
          if (stryMutAct_9fa48("49411")) {
            {}
          } else {
            stryCov_9fa48("49411");
            throw new Error(stryMutAct_9fa48("49412") ? `` : (stryCov_9fa48("49412"), `[[error:invalid-pagination-value, 2, ${maxPostsPerPage}]]`));
          }
        }
        const maxTopicsPerPage = stryMutAct_9fa48("49415") ? meta.config.maxTopicsPerPage && 20 : stryMutAct_9fa48("49414") ? false : stryMutAct_9fa48("49413") ? true : (stryCov_9fa48("49413", "49414", "49415"), meta.config.maxTopicsPerPage || 20);
        if (stryMutAct_9fa48("49418") ? (!data.topicsPerPage || parseInt(data.topicsPerPage, 10) <= 1) && parseInt(data.topicsPerPage, 10) > maxTopicsPerPage : stryMutAct_9fa48("49417") ? false : stryMutAct_9fa48("49416") ? true : (stryCov_9fa48("49416", "49417", "49418"), (stryMutAct_9fa48("49420") ? !data.topicsPerPage && parseInt(data.topicsPerPage, 10) <= 1 : stryMutAct_9fa48("49419") ? false : (stryCov_9fa48("49419", "49420"), (stryMutAct_9fa48("49421") ? data.topicsPerPage : (stryCov_9fa48("49421"), !data.topicsPerPage)) || (stryMutAct_9fa48("49424") ? parseInt(data.topicsPerPage, 10) > 1 : stryMutAct_9fa48("49423") ? parseInt(data.topicsPerPage, 10) < 1 : stryMutAct_9fa48("49422") ? false : (stryCov_9fa48("49422", "49423", "49424"), parseInt(data.topicsPerPage, 10) <= 1)))) || (stryMutAct_9fa48("49427") ? parseInt(data.topicsPerPage, 10) <= maxTopicsPerPage : stryMutAct_9fa48("49426") ? parseInt(data.topicsPerPage, 10) >= maxTopicsPerPage : stryMutAct_9fa48("49425") ? false : (stryCov_9fa48("49425", "49426", "49427"), parseInt(data.topicsPerPage, 10) > maxTopicsPerPage)))) {
          if (stryMutAct_9fa48("49428")) {
            {}
          } else {
            stryCov_9fa48("49428");
            throw new Error(stryMutAct_9fa48("49429") ? `` : (stryCov_9fa48("49429"), `[[error:invalid-pagination-value, 2, ${maxTopicsPerPage}]]`));
          }
        }
        const languageCodes = await languages.listCodes();
        if (stryMutAct_9fa48("49432") ? data.userLang || !languageCodes.includes(data.userLang) : stryMutAct_9fa48("49431") ? false : stryMutAct_9fa48("49430") ? true : (stryCov_9fa48("49430", "49431", "49432"), data.userLang && (stryMutAct_9fa48("49433") ? languageCodes.includes(data.userLang) : (stryCov_9fa48("49433"), !languageCodes.includes(data.userLang))))) {
          if (stryMutAct_9fa48("49434")) {
            {}
          } else {
            stryCov_9fa48("49434");
            throw new Error(stryMutAct_9fa48("49435") ? "" : (stryCov_9fa48("49435"), '[[error:invalid-language]]'));
          }
        }
        if (stryMutAct_9fa48("49438") ? data.acpLang || !languageCodes.includes(data.acpLang) : stryMutAct_9fa48("49437") ? false : stryMutAct_9fa48("49436") ? true : (stryCov_9fa48("49436", "49437", "49438"), data.acpLang && (stryMutAct_9fa48("49439") ? languageCodes.includes(data.acpLang) : (stryCov_9fa48("49439"), !languageCodes.includes(data.acpLang))))) {
          if (stryMutAct_9fa48("49440")) {
            {}
          } else {
            stryCov_9fa48("49440");
            throw new Error(stryMutAct_9fa48("49441") ? "" : (stryCov_9fa48("49441"), '[[error:invalid-language]]'));
          }
        }
        data.userLang = stryMutAct_9fa48("49444") ? data.userLang && meta.config.defaultLang : stryMutAct_9fa48("49443") ? false : stryMutAct_9fa48("49442") ? true : (stryCov_9fa48("49442", "49443", "49444"), data.userLang || meta.config.defaultLang);
        plugins.hooks.fire(stryMutAct_9fa48("49445") ? "" : (stryCov_9fa48("49445"), 'action:user.saveSettings'), stryMutAct_9fa48("49446") ? {} : (stryCov_9fa48("49446"), {
          uid: uid,
          settings: data
        }));
        const settings = stryMutAct_9fa48("49447") ? {} : (stryCov_9fa48("49447"), {
          showemail: data.showemail,
          showfullname: data.showfullname,
          openOutgoingLinksInNewTab: data.openOutgoingLinksInNewTab,
          dailyDigestFreq: stryMutAct_9fa48("49450") ? data.dailyDigestFreq && 'off' : stryMutAct_9fa48("49449") ? false : stryMutAct_9fa48("49448") ? true : (stryCov_9fa48("49448", "49449", "49450"), data.dailyDigestFreq || (stryMutAct_9fa48("49451") ? "" : (stryCov_9fa48("49451"), 'off'))),
          usePagination: data.usePagination,
          topicsPerPage: Math.min(data.topicsPerPage, stryMutAct_9fa48("49454") ? parseInt(maxTopicsPerPage, 10) && 20 : stryMutAct_9fa48("49453") ? false : stryMutAct_9fa48("49452") ? true : (stryCov_9fa48("49452", "49453", "49454"), parseInt(maxTopicsPerPage, 10) || 20)),
          postsPerPage: Math.min(data.postsPerPage, stryMutAct_9fa48("49457") ? parseInt(maxPostsPerPage, 10) && 20 : stryMutAct_9fa48("49456") ? false : stryMutAct_9fa48("49455") ? true : (stryCov_9fa48("49455", "49456", "49457"), parseInt(maxPostsPerPage, 10) || 20)),
          userLang: stryMutAct_9fa48("49460") ? data.userLang && meta.config.defaultLang : stryMutAct_9fa48("49459") ? false : stryMutAct_9fa48("49458") ? true : (stryCov_9fa48("49458", "49459", "49460"), data.userLang || meta.config.defaultLang),
          acpLang: stryMutAct_9fa48("49463") ? data.acpLang && meta.config.defaultLang : stryMutAct_9fa48("49462") ? false : stryMutAct_9fa48("49461") ? true : (stryCov_9fa48("49461", "49462", "49463"), data.acpLang || meta.config.defaultLang),
          followTopicsOnCreate: data.followTopicsOnCreate,
          followTopicsOnReply: data.followTopicsOnReply,
          restrictChat: data.restrictChat,
          topicSearchEnabled: data.topicSearchEnabled,
          updateUrlWithPostIndex: data.updateUrlWithPostIndex,
          homePageRoute: (stryMutAct_9fa48("49466") ? (data.homePageRoute === 'custom' ? data.homePageCustom : data.homePageRoute) && '' : stryMutAct_9fa48("49465") ? false : stryMutAct_9fa48("49464") ? true : (stryCov_9fa48("49464", "49465", "49466"), ((stryMutAct_9fa48("49469") ? data.homePageRoute !== 'custom' : stryMutAct_9fa48("49468") ? false : stryMutAct_9fa48("49467") ? true : (stryCov_9fa48("49467", "49468", "49469"), data.homePageRoute === (stryMutAct_9fa48("49470") ? "" : (stryCov_9fa48("49470"), 'custom')))) ? data.homePageCustom : data.homePageRoute) || (stryMutAct_9fa48("49471") ? "Stryker was here!" : (stryCov_9fa48("49471"), '')))).replace(stryMutAct_9fa48("49472") ? /\// : (stryCov_9fa48("49472"), /^\//), stryMutAct_9fa48("49473") ? "Stryker was here!" : (stryCov_9fa48("49473"), '')),
          scrollToMyPost: data.scrollToMyPost,
          upvoteNotifFreq: data.upvoteNotifFreq,
          bootswatchSkin: data.bootswatchSkin,
          categoryWatchState: data.categoryWatchState,
          categoryTopicSort: data.categoryTopicSort,
          topicPostSort: data.topicPostSort
        });
        const notificationTypes = await notifications.getAllNotificationTypes();
        notificationTypes.forEach(notificationType => {
          if (stryMutAct_9fa48("49474")) {
            {}
          } else {
            stryCov_9fa48("49474");
            if (stryMutAct_9fa48("49476") ? false : stryMutAct_9fa48("49475") ? true : (stryCov_9fa48("49475", "49476"), data[notificationType])) {
              if (stryMutAct_9fa48("49477")) {
                {}
              } else {
                stryCov_9fa48("49477");
                settings[notificationType] = data[notificationType];
              }
            }
          }
        });
        const result = await plugins.hooks.fire(stryMutAct_9fa48("49478") ? "" : (stryCov_9fa48("49478"), 'filter:user.saveSettings'), stryMutAct_9fa48("49479") ? {} : (stryCov_9fa48("49479"), {
          uid: uid,
          settings: settings,
          data: data
        }));
        await db.setObject(stryMutAct_9fa48("49480") ? `` : (stryCov_9fa48("49480"), `user:${uid}:settings`), result.settings);
        await User.updateDigestSetting(uid, data.dailyDigestFreq);
        return await User.getSettings(uid);
      }
    };
    User.updateDigestSetting = async function (uid, dailyDigestFreq) {
      if (stryMutAct_9fa48("49481")) {
        {}
      } else {
        stryCov_9fa48("49481");
        await db.sortedSetsRemove(stryMutAct_9fa48("49482") ? [] : (stryCov_9fa48("49482"), [stryMutAct_9fa48("49483") ? "" : (stryCov_9fa48("49483"), 'digest:day:uids'), stryMutAct_9fa48("49484") ? "" : (stryCov_9fa48("49484"), 'digest:week:uids'), stryMutAct_9fa48("49485") ? "" : (stryCov_9fa48("49485"), 'digest:month:uids')]), uid);
        if (stryMutAct_9fa48("49487") ? false : stryMutAct_9fa48("49486") ? true : (stryCov_9fa48("49486", "49487"), (stryMutAct_9fa48("49488") ? [] : (stryCov_9fa48("49488"), [stryMutAct_9fa48("49489") ? "" : (stryCov_9fa48("49489"), 'day'), stryMutAct_9fa48("49490") ? "" : (stryCov_9fa48("49490"), 'week'), stryMutAct_9fa48("49491") ? "" : (stryCov_9fa48("49491"), 'biweek'), stryMutAct_9fa48("49492") ? "" : (stryCov_9fa48("49492"), 'month')])).includes(dailyDigestFreq))) {
          if (stryMutAct_9fa48("49493")) {
            {}
          } else {
            stryCov_9fa48("49493");
            await db.sortedSetAdd(stryMutAct_9fa48("49494") ? `` : (stryCov_9fa48("49494"), `digest:${dailyDigestFreq}:uids`), Date.now(), uid);
          }
        }
      }
    };
    User.setSetting = async function (uid, key, value) {
      if (stryMutAct_9fa48("49495")) {
        {}
      } else {
        stryCov_9fa48("49495");
        if (stryMutAct_9fa48("49499") ? parseInt(uid, 10) > 0 : stryMutAct_9fa48("49498") ? parseInt(uid, 10) < 0 : stryMutAct_9fa48("49497") ? false : stryMutAct_9fa48("49496") ? true : (stryCov_9fa48("49496", "49497", "49498", "49499"), parseInt(uid, 10) <= 0)) {
          if (stryMutAct_9fa48("49500")) {
            {}
          } else {
            stryCov_9fa48("49500");
            return;
          }
        }
        await db.setObjectField(stryMutAct_9fa48("49501") ? `` : (stryCov_9fa48("49501"), `user:${uid}:settings`), key, value);
      }
    };
  }
};