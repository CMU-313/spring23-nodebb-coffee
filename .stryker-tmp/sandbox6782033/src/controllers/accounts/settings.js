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
const _ = require('lodash');
const jwt = require('jsonwebtoken');
const util = require('util');
const user = require('../../user');
const languages = require('../../languages');
const meta = require('../../meta');
const plugins = require('../../plugins');
const notifications = require('../../notifications');
const db = require('../../database');
const helpers = require('../helpers');
const accountHelpers = require('./helpers');
const settingsController = module.exports;
settingsController.get = async function (req, res, next) {
  if (stryMutAct_9fa48("6261")) {
    {}
  } else {
    stryCov_9fa48("6261");
    const userData = await accountHelpers.getUserDataByUserSlug(req.params.userslug, req.uid, req.query);
    if (stryMutAct_9fa48("6264") ? false : stryMutAct_9fa48("6263") ? true : stryMutAct_9fa48("6262") ? userData : (stryCov_9fa48("6262", "6263", "6264"), !userData)) {
      if (stryMutAct_9fa48("6265")) {
        {}
      } else {
        stryCov_9fa48("6265");
        return next();
      }
    }
    const [settings, languagesData] = await Promise.all(stryMutAct_9fa48("6266") ? [] : (stryCov_9fa48("6266"), [user.getSettings(userData.uid), languages.list()]));
    userData.settings = settings;
    userData.languages = languagesData;
    if (stryMutAct_9fa48("6269") ? userData.isAdmin || userData.isSelf : stryMutAct_9fa48("6268") ? false : stryMutAct_9fa48("6267") ? true : (stryCov_9fa48("6267", "6268", "6269"), userData.isAdmin && userData.isSelf)) {
      if (stryMutAct_9fa48("6270")) {
        {}
      } else {
        stryCov_9fa48("6270");
        userData.acpLanguages = _.cloneDeep(languagesData);
      }
    }
    const data = await plugins.hooks.fire(stryMutAct_9fa48("6271") ? "" : (stryCov_9fa48("6271"), 'filter:user.customSettings'), stryMutAct_9fa48("6272") ? {} : (stryCov_9fa48("6272"), {
      settings: settings,
      customSettings: stryMutAct_9fa48("6273") ? ["Stryker was here"] : (stryCov_9fa48("6273"), []),
      uid: req.uid
    }));
    const [notificationSettings, routes] = await Promise.all(stryMutAct_9fa48("6274") ? [] : (stryCov_9fa48("6274"), [getNotificationSettings(userData), getHomePageRoutes(userData)]));
    userData.customSettings = data.customSettings;
    userData.homePageRoutes = routes;
    userData.notificationSettings = notificationSettings;
    userData.disableEmailSubscriptions = meta.config.disableEmailSubscriptions;
    userData.dailyDigestFreqOptions = stryMutAct_9fa48("6275") ? [] : (stryCov_9fa48("6275"), [stryMutAct_9fa48("6276") ? {} : (stryCov_9fa48("6276"), {
      value: stryMutAct_9fa48("6277") ? "" : (stryCov_9fa48("6277"), 'off'),
      name: stryMutAct_9fa48("6278") ? "" : (stryCov_9fa48("6278"), '[[user:digest_off]]'),
      selected: stryMutAct_9fa48("6281") ? userData.settings.dailyDigestFreq !== 'off' : stryMutAct_9fa48("6280") ? false : stryMutAct_9fa48("6279") ? true : (stryCov_9fa48("6279", "6280", "6281"), userData.settings.dailyDigestFreq === (stryMutAct_9fa48("6282") ? "" : (stryCov_9fa48("6282"), 'off')))
    }), stryMutAct_9fa48("6283") ? {} : (stryCov_9fa48("6283"), {
      value: stryMutAct_9fa48("6284") ? "" : (stryCov_9fa48("6284"), 'day'),
      name: stryMutAct_9fa48("6285") ? "" : (stryCov_9fa48("6285"), '[[user:digest_daily]]'),
      selected: stryMutAct_9fa48("6288") ? userData.settings.dailyDigestFreq !== 'day' : stryMutAct_9fa48("6287") ? false : stryMutAct_9fa48("6286") ? true : (stryCov_9fa48("6286", "6287", "6288"), userData.settings.dailyDigestFreq === (stryMutAct_9fa48("6289") ? "" : (stryCov_9fa48("6289"), 'day')))
    }), stryMutAct_9fa48("6290") ? {} : (stryCov_9fa48("6290"), {
      value: stryMutAct_9fa48("6291") ? "" : (stryCov_9fa48("6291"), 'week'),
      name: stryMutAct_9fa48("6292") ? "" : (stryCov_9fa48("6292"), '[[user:digest_weekly]]'),
      selected: stryMutAct_9fa48("6295") ? userData.settings.dailyDigestFreq !== 'week' : stryMutAct_9fa48("6294") ? false : stryMutAct_9fa48("6293") ? true : (stryCov_9fa48("6293", "6294", "6295"), userData.settings.dailyDigestFreq === (stryMutAct_9fa48("6296") ? "" : (stryCov_9fa48("6296"), 'week')))
    }), stryMutAct_9fa48("6297") ? {} : (stryCov_9fa48("6297"), {
      value: stryMutAct_9fa48("6298") ? "" : (stryCov_9fa48("6298"), 'biweek'),
      name: stryMutAct_9fa48("6299") ? "" : (stryCov_9fa48("6299"), '[[user:digest_biweekly]]'),
      selected: stryMutAct_9fa48("6302") ? userData.settings.dailyDigestFreq !== 'biweek' : stryMutAct_9fa48("6301") ? false : stryMutAct_9fa48("6300") ? true : (stryCov_9fa48("6300", "6301", "6302"), userData.settings.dailyDigestFreq === (stryMutAct_9fa48("6303") ? "" : (stryCov_9fa48("6303"), 'biweek')))
    }), stryMutAct_9fa48("6304") ? {} : (stryCov_9fa48("6304"), {
      value: stryMutAct_9fa48("6305") ? "" : (stryCov_9fa48("6305"), 'month'),
      name: stryMutAct_9fa48("6306") ? "" : (stryCov_9fa48("6306"), '[[user:digest_monthly]]'),
      selected: stryMutAct_9fa48("6309") ? userData.settings.dailyDigestFreq !== 'month' : stryMutAct_9fa48("6308") ? false : stryMutAct_9fa48("6307") ? true : (stryCov_9fa48("6307", "6308", "6309"), userData.settings.dailyDigestFreq === (stryMutAct_9fa48("6310") ? "" : (stryCov_9fa48("6310"), 'month')))
    })]);
    userData.bootswatchSkinOptions = stryMutAct_9fa48("6311") ? [] : (stryCov_9fa48("6311"), [stryMutAct_9fa48("6312") ? {} : (stryCov_9fa48("6312"), {
      name: stryMutAct_9fa48("6313") ? "" : (stryCov_9fa48("6313"), 'Default'),
      value: stryMutAct_9fa48("6314") ? "Stryker was here!" : (stryCov_9fa48("6314"), '')
    }), stryMutAct_9fa48("6315") ? {} : (stryCov_9fa48("6315"), {
      name: stryMutAct_9fa48("6316") ? "" : (stryCov_9fa48("6316"), 'Cerulean'),
      value: stryMutAct_9fa48("6317") ? "" : (stryCov_9fa48("6317"), 'cerulean')
    }), stryMutAct_9fa48("6318") ? {} : (stryCov_9fa48("6318"), {
      name: stryMutAct_9fa48("6319") ? "" : (stryCov_9fa48("6319"), 'Cosmo'),
      value: stryMutAct_9fa48("6320") ? "" : (stryCov_9fa48("6320"), 'cosmo')
    }), stryMutAct_9fa48("6321") ? {} : (stryCov_9fa48("6321"), {
      name: stryMutAct_9fa48("6322") ? "" : (stryCov_9fa48("6322"), 'Cyborg'),
      value: stryMutAct_9fa48("6323") ? "" : (stryCov_9fa48("6323"), 'cyborg')
    }), stryMutAct_9fa48("6324") ? {} : (stryCov_9fa48("6324"), {
      name: stryMutAct_9fa48("6325") ? "" : (stryCov_9fa48("6325"), 'Darkly'),
      value: stryMutAct_9fa48("6326") ? "" : (stryCov_9fa48("6326"), 'darkly')
    }), stryMutAct_9fa48("6327") ? {} : (stryCov_9fa48("6327"), {
      name: stryMutAct_9fa48("6328") ? "" : (stryCov_9fa48("6328"), 'Flatly'),
      value: stryMutAct_9fa48("6329") ? "" : (stryCov_9fa48("6329"), 'flatly')
    }), stryMutAct_9fa48("6330") ? {} : (stryCov_9fa48("6330"), {
      name: stryMutAct_9fa48("6331") ? "" : (stryCov_9fa48("6331"), 'Journal'),
      value: stryMutAct_9fa48("6332") ? "" : (stryCov_9fa48("6332"), 'journal')
    }), stryMutAct_9fa48("6333") ? {} : (stryCov_9fa48("6333"), {
      name: stryMutAct_9fa48("6334") ? "" : (stryCov_9fa48("6334"), 'Lumen'),
      value: stryMutAct_9fa48("6335") ? "" : (stryCov_9fa48("6335"), 'lumen')
    }), stryMutAct_9fa48("6336") ? {} : (stryCov_9fa48("6336"), {
      name: stryMutAct_9fa48("6337") ? "" : (stryCov_9fa48("6337"), 'Paper'),
      value: stryMutAct_9fa48("6338") ? "" : (stryCov_9fa48("6338"), 'paper')
    }), stryMutAct_9fa48("6339") ? {} : (stryCov_9fa48("6339"), {
      name: stryMutAct_9fa48("6340") ? "" : (stryCov_9fa48("6340"), 'Readable'),
      value: stryMutAct_9fa48("6341") ? "" : (stryCov_9fa48("6341"), 'readable')
    }), stryMutAct_9fa48("6342") ? {} : (stryCov_9fa48("6342"), {
      name: stryMutAct_9fa48("6343") ? "" : (stryCov_9fa48("6343"), 'Sandstone'),
      value: stryMutAct_9fa48("6344") ? "" : (stryCov_9fa48("6344"), 'sandstone')
    }), stryMutAct_9fa48("6345") ? {} : (stryCov_9fa48("6345"), {
      name: stryMutAct_9fa48("6346") ? "" : (stryCov_9fa48("6346"), 'Simplex'),
      value: stryMutAct_9fa48("6347") ? "" : (stryCov_9fa48("6347"), 'simplex')
    }), stryMutAct_9fa48("6348") ? {} : (stryCov_9fa48("6348"), {
      name: stryMutAct_9fa48("6349") ? "" : (stryCov_9fa48("6349"), 'Slate'),
      value: stryMutAct_9fa48("6350") ? "" : (stryCov_9fa48("6350"), 'slate')
    }), stryMutAct_9fa48("6351") ? {} : (stryCov_9fa48("6351"), {
      name: stryMutAct_9fa48("6352") ? "" : (stryCov_9fa48("6352"), 'Spacelab'),
      value: stryMutAct_9fa48("6353") ? "" : (stryCov_9fa48("6353"), 'spacelab')
    }), stryMutAct_9fa48("6354") ? {} : (stryCov_9fa48("6354"), {
      name: stryMutAct_9fa48("6355") ? "" : (stryCov_9fa48("6355"), 'Superhero'),
      value: stryMutAct_9fa48("6356") ? "" : (stryCov_9fa48("6356"), 'superhero')
    }), stryMutAct_9fa48("6357") ? {} : (stryCov_9fa48("6357"), {
      name: stryMutAct_9fa48("6358") ? "" : (stryCov_9fa48("6358"), 'United'),
      value: stryMutAct_9fa48("6359") ? "" : (stryCov_9fa48("6359"), 'united')
    }), stryMutAct_9fa48("6360") ? {} : (stryCov_9fa48("6360"), {
      name: stryMutAct_9fa48("6361") ? "" : (stryCov_9fa48("6361"), 'Yeti'),
      value: stryMutAct_9fa48("6362") ? "" : (stryCov_9fa48("6362"), 'yeti')
    })]);
    userData.bootswatchSkinOptions.forEach(skin => {
      if (stryMutAct_9fa48("6363")) {
        {}
      } else {
        stryCov_9fa48("6363");
        skin.selected = stryMutAct_9fa48("6366") ? skin.value !== userData.settings.bootswatchSkin : stryMutAct_9fa48("6365") ? false : stryMutAct_9fa48("6364") ? true : (stryCov_9fa48("6364", "6365", "6366"), skin.value === userData.settings.bootswatchSkin);
      }
    });
    userData.languages.forEach(language => {
      if (stryMutAct_9fa48("6367")) {
        {}
      } else {
        stryCov_9fa48("6367");
        language.selected = stryMutAct_9fa48("6370") ? language.code !== userData.settings.userLang : stryMutAct_9fa48("6369") ? false : stryMutAct_9fa48("6368") ? true : (stryCov_9fa48("6368", "6369", "6370"), language.code === userData.settings.userLang);
      }
    });
    if (stryMutAct_9fa48("6373") ? userData.isAdmin || userData.isSelf : stryMutAct_9fa48("6372") ? false : stryMutAct_9fa48("6371") ? true : (stryCov_9fa48("6371", "6372", "6373"), userData.isAdmin && userData.isSelf)) {
      if (stryMutAct_9fa48("6374")) {
        {}
      } else {
        stryCov_9fa48("6374");
        userData.acpLanguages.forEach(language => {
          if (stryMutAct_9fa48("6375")) {
            {}
          } else {
            stryCov_9fa48("6375");
            language.selected = stryMutAct_9fa48("6378") ? language.code !== userData.settings.acpLang : stryMutAct_9fa48("6377") ? false : stryMutAct_9fa48("6376") ? true : (stryCov_9fa48("6376", "6377", "6378"), language.code === userData.settings.acpLang);
          }
        });
      }
    }
    const notifFreqOptions = stryMutAct_9fa48("6379") ? [] : (stryCov_9fa48("6379"), [stryMutAct_9fa48("6380") ? "" : (stryCov_9fa48("6380"), 'all'), stryMutAct_9fa48("6381") ? "" : (stryCov_9fa48("6381"), 'first'), stryMutAct_9fa48("6382") ? "" : (stryCov_9fa48("6382"), 'everyTen'), stryMutAct_9fa48("6383") ? "" : (stryCov_9fa48("6383"), 'threshold'), stryMutAct_9fa48("6384") ? "" : (stryCov_9fa48("6384"), 'logarithmic'), stryMutAct_9fa48("6385") ? "" : (stryCov_9fa48("6385"), 'disabled')]);
    userData.upvoteNotifFreq = notifFreqOptions.map(stryMutAct_9fa48("6386") ? () => undefined : (stryCov_9fa48("6386"), name => stryMutAct_9fa48("6387") ? {} : (stryCov_9fa48("6387"), {
      name: name,
      selected: stryMutAct_9fa48("6390") ? name !== userData.settings.upvoteNotifFreq : stryMutAct_9fa48("6389") ? false : stryMutAct_9fa48("6388") ? true : (stryCov_9fa48("6388", "6389", "6390"), name === userData.settings.upvoteNotifFreq)
    })));
    userData.categoryWatchState = stryMutAct_9fa48("6391") ? {} : (stryCov_9fa48("6391"), {
      [userData.settings.categoryWatchState]: stryMutAct_9fa48("6392") ? false : (stryCov_9fa48("6392"), true)
    });
    userData.disableCustomUserSkins = stryMutAct_9fa48("6395") ? meta.config.disableCustomUserSkins && 0 : stryMutAct_9fa48("6394") ? false : stryMutAct_9fa48("6393") ? true : (stryCov_9fa48("6393", "6394", "6395"), meta.config.disableCustomUserSkins || 0);
    userData.allowUserHomePage = (stryMutAct_9fa48("6398") ? meta.config.allowUserHomePage !== 1 : stryMutAct_9fa48("6397") ? false : stryMutAct_9fa48("6396") ? true : (stryCov_9fa48("6396", "6397", "6398"), meta.config.allowUserHomePage === 1)) ? 1 : 0;
    userData.hideFullname = stryMutAct_9fa48("6401") ? meta.config.hideFullname && 0 : stryMutAct_9fa48("6400") ? false : stryMutAct_9fa48("6399") ? true : (stryCov_9fa48("6399", "6400", "6401"), meta.config.hideFullname || 0);
    userData.hideEmail = stryMutAct_9fa48("6404") ? meta.config.hideEmail && 0 : stryMutAct_9fa48("6403") ? false : stryMutAct_9fa48("6402") ? true : (stryCov_9fa48("6402", "6403", "6404"), meta.config.hideEmail || 0);
    userData.inTopicSearchAvailable = plugins.hooks.hasListeners(stryMutAct_9fa48("6405") ? "" : (stryCov_9fa48("6405"), 'filter:topic.search'));
    userData.maxTopicsPerPage = meta.config.maxTopicsPerPage;
    userData.maxPostsPerPage = meta.config.maxPostsPerPage;
    userData.title = stryMutAct_9fa48("6406") ? "" : (stryCov_9fa48("6406"), '[[pages:account/settings]]');
    userData.breadcrumbs = helpers.buildBreadcrumbs(stryMutAct_9fa48("6407") ? [] : (stryCov_9fa48("6407"), [stryMutAct_9fa48("6408") ? {} : (stryCov_9fa48("6408"), {
      text: userData.username,
      url: stryMutAct_9fa48("6409") ? `` : (stryCov_9fa48("6409"), `/user/${userData.userslug}`)
    }), stryMutAct_9fa48("6410") ? {} : (stryCov_9fa48("6410"), {
      text: stryMutAct_9fa48("6411") ? "" : (stryCov_9fa48("6411"), '[[user:settings]]')
    })]));
    res.render(stryMutAct_9fa48("6412") ? "" : (stryCov_9fa48("6412"), 'account/settings'), userData);
  }
};
const unsubscribable = stryMutAct_9fa48("6413") ? [] : (stryCov_9fa48("6413"), [stryMutAct_9fa48("6414") ? "" : (stryCov_9fa48("6414"), 'digest'), stryMutAct_9fa48("6415") ? "" : (stryCov_9fa48("6415"), 'notification')]);
const jwtVerifyAsync = util.promisify((token, callback) => {
  if (stryMutAct_9fa48("6416")) {
    {}
  } else {
    stryCov_9fa48("6416");
    jwt.verify(token, nconf.get(stryMutAct_9fa48("6417") ? "" : (stryCov_9fa48("6417"), 'secret')), stryMutAct_9fa48("6418") ? () => undefined : (stryCov_9fa48("6418"), (err, payload) => callback(err, payload)));
  }
});
const doUnsubscribe = async payload => {
  if (stryMutAct_9fa48("6419")) {
    {}
  } else {
    stryCov_9fa48("6419");
    if (stryMutAct_9fa48("6422") ? payload.template !== 'digest' : stryMutAct_9fa48("6421") ? false : stryMutAct_9fa48("6420") ? true : (stryCov_9fa48("6420", "6421", "6422"), payload.template === (stryMutAct_9fa48("6423") ? "" : (stryCov_9fa48("6423"), 'digest')))) {
      if (stryMutAct_9fa48("6424")) {
        {}
      } else {
        stryCov_9fa48("6424");
        await Promise.all(stryMutAct_9fa48("6425") ? [] : (stryCov_9fa48("6425"), [user.setSetting(payload.uid, stryMutAct_9fa48("6426") ? "" : (stryCov_9fa48("6426"), 'dailyDigestFreq'), stryMutAct_9fa48("6427") ? "" : (stryCov_9fa48("6427"), 'off')), user.updateDigestSetting(payload.uid, stryMutAct_9fa48("6428") ? "" : (stryCov_9fa48("6428"), 'off'))]));
      }
    } else if (stryMutAct_9fa48("6431") ? payload.template !== 'notification' : stryMutAct_9fa48("6430") ? false : stryMutAct_9fa48("6429") ? true : (stryCov_9fa48("6429", "6430", "6431"), payload.template === (stryMutAct_9fa48("6432") ? "" : (stryCov_9fa48("6432"), 'notification')))) {
      if (stryMutAct_9fa48("6433")) {
        {}
      } else {
        stryCov_9fa48("6433");
        const current = await db.getObjectField(stryMutAct_9fa48("6434") ? `` : (stryCov_9fa48("6434"), `user:${payload.uid}:settings`), stryMutAct_9fa48("6435") ? `` : (stryCov_9fa48("6435"), `notificationType_${payload.type}`));
        await user.setSetting(payload.uid, stryMutAct_9fa48("6436") ? `` : (stryCov_9fa48("6436"), `notificationType_${payload.type}`), (stryMutAct_9fa48("6439") ? current !== 'notificationemail' : stryMutAct_9fa48("6438") ? false : stryMutAct_9fa48("6437") ? true : (stryCov_9fa48("6437", "6438", "6439"), current === (stryMutAct_9fa48("6440") ? "" : (stryCov_9fa48("6440"), 'notificationemail')))) ? stryMutAct_9fa48("6441") ? "" : (stryCov_9fa48("6441"), 'notification') : stryMutAct_9fa48("6442") ? "" : (stryCov_9fa48("6442"), 'none'));
      }
    }
    return stryMutAct_9fa48("6443") ? false : (stryCov_9fa48("6443"), true);
  }
};
settingsController.unsubscribe = async (req, res) => {
  if (stryMutAct_9fa48("6444")) {
    {}
  } else {
    stryCov_9fa48("6444");
    try {
      if (stryMutAct_9fa48("6445")) {
        {}
      } else {
        stryCov_9fa48("6445");
        const payload = await jwtVerifyAsync(req.params.token);
        if (stryMutAct_9fa48("6448") ? !payload && !unsubscribable.includes(payload.template) : stryMutAct_9fa48("6447") ? false : stryMutAct_9fa48("6446") ? true : (stryCov_9fa48("6446", "6447", "6448"), (stryMutAct_9fa48("6449") ? payload : (stryCov_9fa48("6449"), !payload)) || (stryMutAct_9fa48("6450") ? unsubscribable.includes(payload.template) : (stryCov_9fa48("6450"), !unsubscribable.includes(payload.template))))) {
          if (stryMutAct_9fa48("6451")) {
            {}
          } else {
            stryCov_9fa48("6451");
            return;
          }
        }
        await doUnsubscribe(payload);
        res.render(stryMutAct_9fa48("6452") ? "" : (stryCov_9fa48("6452"), 'unsubscribe'), stryMutAct_9fa48("6453") ? {} : (stryCov_9fa48("6453"), {
          payload
        }));
      }
    } catch (err) {
      if (stryMutAct_9fa48("6454")) {
        {}
      } else {
        stryCov_9fa48("6454");
        res.render(stryMutAct_9fa48("6455") ? "" : (stryCov_9fa48("6455"), 'unsubscribe'), stryMutAct_9fa48("6456") ? {} : (stryCov_9fa48("6456"), {
          error: err.message
        }));
      }
    }
  }
};
settingsController.unsubscribePost = async function (req, res) {
  if (stryMutAct_9fa48("6457")) {
    {}
  } else {
    stryCov_9fa48("6457");
    let payload;
    try {
      if (stryMutAct_9fa48("6458")) {
        {}
      } else {
        stryCov_9fa48("6458");
        payload = await jwtVerifyAsync(req.params.token);
        if (stryMutAct_9fa48("6461") ? !payload && !unsubscribable.includes(payload.template) : stryMutAct_9fa48("6460") ? false : stryMutAct_9fa48("6459") ? true : (stryCov_9fa48("6459", "6460", "6461"), (stryMutAct_9fa48("6462") ? payload : (stryCov_9fa48("6462"), !payload)) || (stryMutAct_9fa48("6463") ? unsubscribable.includes(payload.template) : (stryCov_9fa48("6463"), !unsubscribable.includes(payload.template))))) {
          if (stryMutAct_9fa48("6464")) {
            {}
          } else {
            stryCov_9fa48("6464");
            return res.sendStatus(404);
          }
        }
      }
    } catch (err) {
      if (stryMutAct_9fa48("6465")) {
        {}
      } else {
        stryCov_9fa48("6465");
        return res.sendStatus(403);
      }
    }
    try {
      if (stryMutAct_9fa48("6466")) {
        {}
      } else {
        stryCov_9fa48("6466");
        await doUnsubscribe(payload);
        res.sendStatus(200);
      }
    } catch (err) {
      if (stryMutAct_9fa48("6467")) {
        {}
      } else {
        stryCov_9fa48("6467");
        winston.error(stryMutAct_9fa48("6468") ? `` : (stryCov_9fa48("6468"), `[settings/unsubscribe] One-click unsubscribe failed with error: ${err.message}`));
        res.sendStatus(500);
      }
    }
  }
};
async function getNotificationSettings(userData) {
  if (stryMutAct_9fa48("6469")) {
    {}
  } else {
    stryCov_9fa48("6469");
    const privilegedTypes = stryMutAct_9fa48("6470") ? ["Stryker was here"] : (stryCov_9fa48("6470"), []);
    const privileges = await user.getPrivileges(userData.uid);
    if (stryMutAct_9fa48("6472") ? false : stryMutAct_9fa48("6471") ? true : (stryCov_9fa48("6471", "6472"), privileges.isAdmin)) {
      if (stryMutAct_9fa48("6473")) {
        {}
      } else {
        stryCov_9fa48("6473");
        privilegedTypes.push(stryMutAct_9fa48("6474") ? "" : (stryCov_9fa48("6474"), 'notificationType_new-register'));
      }
    }
    if (stryMutAct_9fa48("6477") ? (privileges.isAdmin || privileges.isGlobalMod) && privileges.isModeratorOfAnyCategory : stryMutAct_9fa48("6476") ? false : stryMutAct_9fa48("6475") ? true : (stryCov_9fa48("6475", "6476", "6477"), (stryMutAct_9fa48("6479") ? privileges.isAdmin && privileges.isGlobalMod : stryMutAct_9fa48("6478") ? false : (stryCov_9fa48("6478", "6479"), privileges.isAdmin || privileges.isGlobalMod)) || privileges.isModeratorOfAnyCategory)) {
      if (stryMutAct_9fa48("6480")) {
        {}
      } else {
        stryCov_9fa48("6480");
        privilegedTypes.push(stryMutAct_9fa48("6481") ? "" : (stryCov_9fa48("6481"), 'notificationType_post-queue'), stryMutAct_9fa48("6482") ? "" : (stryCov_9fa48("6482"), 'notificationType_new-post-flag'));
      }
    }
    if (stryMutAct_9fa48("6485") ? privileges.isAdmin && privileges.isGlobalMod : stryMutAct_9fa48("6484") ? false : stryMutAct_9fa48("6483") ? true : (stryCov_9fa48("6483", "6484", "6485"), privileges.isAdmin || privileges.isGlobalMod)) {
      if (stryMutAct_9fa48("6486")) {
        {}
      } else {
        stryCov_9fa48("6486");
        privilegedTypes.push(stryMutAct_9fa48("6487") ? "" : (stryCov_9fa48("6487"), 'notificationType_new-user-flag'));
      }
    }
    const results = await plugins.hooks.fire(stryMutAct_9fa48("6488") ? "" : (stryCov_9fa48("6488"), 'filter:user.notificationTypes'), stryMutAct_9fa48("6489") ? {} : (stryCov_9fa48("6489"), {
      types: stryMutAct_9fa48("6490") ? notifications.baseTypes : (stryCov_9fa48("6490"), notifications.baseTypes.slice()),
      privilegedTypes: privilegedTypes
    }));
    function modifyType(type) {
      if (stryMutAct_9fa48("6491")) {
        {}
      } else {
        stryCov_9fa48("6491");
        const setting = userData.settings[type];
        return stryMutAct_9fa48("6492") ? {} : (stryCov_9fa48("6492"), {
          name: type,
          label: stryMutAct_9fa48("6493") ? `` : (stryCov_9fa48("6493"), `[[notifications:${type}]]`),
          none: stryMutAct_9fa48("6496") ? setting !== 'none' : stryMutAct_9fa48("6495") ? false : stryMutAct_9fa48("6494") ? true : (stryCov_9fa48("6494", "6495", "6496"), setting === (stryMutAct_9fa48("6497") ? "" : (stryCov_9fa48("6497"), 'none'))),
          notification: stryMutAct_9fa48("6500") ? setting !== 'notification' : stryMutAct_9fa48("6499") ? false : stryMutAct_9fa48("6498") ? true : (stryCov_9fa48("6498", "6499", "6500"), setting === (stryMutAct_9fa48("6501") ? "" : (stryCov_9fa48("6501"), 'notification'))),
          email: stryMutAct_9fa48("6504") ? setting !== 'email' : stryMutAct_9fa48("6503") ? false : stryMutAct_9fa48("6502") ? true : (stryCov_9fa48("6502", "6503", "6504"), setting === (stryMutAct_9fa48("6505") ? "" : (stryCov_9fa48("6505"), 'email'))),
          notificationemail: stryMutAct_9fa48("6508") ? setting !== 'notificationemail' : stryMutAct_9fa48("6507") ? false : stryMutAct_9fa48("6506") ? true : (stryCov_9fa48("6506", "6507", "6508"), setting === (stryMutAct_9fa48("6509") ? "" : (stryCov_9fa48("6509"), 'notificationemail')))
        });
      }
    }
    if (stryMutAct_9fa48("6511") ? false : stryMutAct_9fa48("6510") ? true : (stryCov_9fa48("6510", "6511"), meta.config.disableChat)) {
      if (stryMutAct_9fa48("6512")) {
        {}
      } else {
        stryCov_9fa48("6512");
        results.types = stryMutAct_9fa48("6513") ? results.types : (stryCov_9fa48("6513"), results.types.filter(stryMutAct_9fa48("6514") ? () => undefined : (stryCov_9fa48("6514"), type => stryMutAct_9fa48("6517") ? type === 'notificationType_new-chat' : stryMutAct_9fa48("6516") ? false : stryMutAct_9fa48("6515") ? true : (stryCov_9fa48("6515", "6516", "6517"), type !== (stryMutAct_9fa48("6518") ? "" : (stryCov_9fa48("6518"), 'notificationType_new-chat'))))));
      }
    }
    return results.types.map(modifyType).concat(results.privilegedTypes.map(modifyType));
  }
}
async function getHomePageRoutes(userData) {
  if (stryMutAct_9fa48("6519")) {
    {}
  } else {
    stryCov_9fa48("6519");
    let routes = await helpers.getHomePageRoutes(userData.uid);

    // Set selected for each route
    let customIdx;
    let hasSelected = stryMutAct_9fa48("6520") ? true : (stryCov_9fa48("6520"), false);
    routes = routes.map((route, idx) => {
      if (stryMutAct_9fa48("6521")) {
        {}
      } else {
        stryCov_9fa48("6521");
        if (stryMutAct_9fa48("6524") ? route.route !== userData.settings.homePageRoute : stryMutAct_9fa48("6523") ? false : stryMutAct_9fa48("6522") ? true : (stryCov_9fa48("6522", "6523", "6524"), route.route === userData.settings.homePageRoute)) {
          if (stryMutAct_9fa48("6525")) {
            {}
          } else {
            stryCov_9fa48("6525");
            route.selected = stryMutAct_9fa48("6526") ? false : (stryCov_9fa48("6526"), true);
            hasSelected = stryMutAct_9fa48("6527") ? false : (stryCov_9fa48("6527"), true);
          }
        } else {
          if (stryMutAct_9fa48("6528")) {
            {}
          } else {
            stryCov_9fa48("6528");
            route.selected = stryMutAct_9fa48("6529") ? true : (stryCov_9fa48("6529"), false);
          }
        }
        if (stryMutAct_9fa48("6532") ? route.route !== 'custom' : stryMutAct_9fa48("6531") ? false : stryMutAct_9fa48("6530") ? true : (stryCov_9fa48("6530", "6531", "6532"), route.route === (stryMutAct_9fa48("6533") ? "" : (stryCov_9fa48("6533"), 'custom')))) {
          if (stryMutAct_9fa48("6534")) {
            {}
          } else {
            stryCov_9fa48("6534");
            customIdx = idx;
          }
        }
        return route;
      }
    });
    if (stryMutAct_9fa48("6537") ? !hasSelected && customIdx || userData.settings.homePageRoute !== 'none' : stryMutAct_9fa48("6536") ? false : stryMutAct_9fa48("6535") ? true : (stryCov_9fa48("6535", "6536", "6537"), (stryMutAct_9fa48("6539") ? !hasSelected || customIdx : stryMutAct_9fa48("6538") ? true : (stryCov_9fa48("6538", "6539"), (stryMutAct_9fa48("6540") ? hasSelected : (stryCov_9fa48("6540"), !hasSelected)) && customIdx)) && (stryMutAct_9fa48("6542") ? userData.settings.homePageRoute === 'none' : stryMutAct_9fa48("6541") ? true : (stryCov_9fa48("6541", "6542"), userData.settings.homePageRoute !== (stryMutAct_9fa48("6543") ? "" : (stryCov_9fa48("6543"), 'none')))))) {
      if (stryMutAct_9fa48("6544")) {
        {}
      } else {
        stryCov_9fa48("6544");
        routes[customIdx].selected = stryMutAct_9fa48("6545") ? false : (stryCov_9fa48("6545"), true);
      }
    }
    return routes;
  }
}