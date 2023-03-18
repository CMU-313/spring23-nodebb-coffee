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
const meta = require('../../meta');
const emailer = require('../../emailer');
const notifications = require('../../notifications');
const groups = require('../../groups');
const languages = require('../../languages');
const navigationAdmin = require('../../navigation/admin');
const social = require('../../social');
const helpers = require('../helpers');
const translator = require('../../translator');
const settingsController = module.exports;
settingsController.get = async function (req, res) {
  if (stryMutAct_9fa48("7457")) {
    {}
  } else {
    stryCov_9fa48("7457");
    const term = stryMutAct_9fa48("7460") ? req.params.term && 'general' : stryMutAct_9fa48("7459") ? false : stryMutAct_9fa48("7458") ? true : (stryCov_9fa48("7458", "7459", "7460"), req.params.term || (stryMutAct_9fa48("7461") ? "" : (stryCov_9fa48("7461"), 'general')));
    res.render(stryMutAct_9fa48("7462") ? `` : (stryCov_9fa48("7462"), `admin/settings/${term}`));
  }
};
settingsController.email = async (req, res) => {
  if (stryMutAct_9fa48("7463")) {
    {}
  } else {
    stryCov_9fa48("7463");
    const emails = await emailer.getTemplates(meta.config);
    res.render(stryMutAct_9fa48("7464") ? "" : (stryCov_9fa48("7464"), 'admin/settings/email'), stryMutAct_9fa48("7465") ? {} : (stryCov_9fa48("7465"), {
      emails: emails,
      sendable: stryMutAct_9fa48("7466") ? emails.map(tpl => tpl.path) : (stryCov_9fa48("7466"), emails.filter(stryMutAct_9fa48("7467") ? () => undefined : (stryCov_9fa48("7467"), e => stryMutAct_9fa48("7470") ? !e.path.includes('_plaintext') || !e.path.includes('partials') : stryMutAct_9fa48("7469") ? false : stryMutAct_9fa48("7468") ? true : (stryCov_9fa48("7468", "7469", "7470"), (stryMutAct_9fa48("7471") ? e.path.includes('_plaintext') : (stryCov_9fa48("7471"), !e.path.includes(stryMutAct_9fa48("7472") ? "" : (stryCov_9fa48("7472"), '_plaintext')))) && (stryMutAct_9fa48("7473") ? e.path.includes('partials') : (stryCov_9fa48("7473"), !e.path.includes(stryMutAct_9fa48("7474") ? "" : (stryCov_9fa48("7474"), 'partials'))))))).map(stryMutAct_9fa48("7475") ? () => undefined : (stryCov_9fa48("7475"), tpl => tpl.path))),
      services: emailer.listServices()
    }));
  }
};
settingsController.user = async (req, res) => {
  if (stryMutAct_9fa48("7476")) {
    {}
  } else {
    stryCov_9fa48("7476");
    const notificationTypes = await notifications.getAllNotificationTypes();
    const notificationSettings = notificationTypes.map(stryMutAct_9fa48("7477") ? () => undefined : (stryCov_9fa48("7477"), type => stryMutAct_9fa48("7478") ? {} : (stryCov_9fa48("7478"), {
      name: type,
      label: stryMutAct_9fa48("7479") ? `` : (stryCov_9fa48("7479"), `[[notifications:${type}]]`)
    })));
    res.render(stryMutAct_9fa48("7480") ? "" : (stryCov_9fa48("7480"), 'admin/settings/user'), stryMutAct_9fa48("7481") ? {} : (stryCov_9fa48("7481"), {
      notificationSettings: notificationSettings
    }));
  }
};
settingsController.post = async (req, res) => {
  if (stryMutAct_9fa48("7482")) {
    {}
  } else {
    stryCov_9fa48("7482");
    const groupData = await groups.getNonPrivilegeGroups(stryMutAct_9fa48("7483") ? "" : (stryCov_9fa48("7483"), 'groups:createtime'), 0, stryMutAct_9fa48("7484") ? +1 : (stryCov_9fa48("7484"), -1));
    res.render(stryMutAct_9fa48("7485") ? "" : (stryCov_9fa48("7485"), 'admin/settings/post'), stryMutAct_9fa48("7486") ? {} : (stryCov_9fa48("7486"), {
      groupsExemptFromPostQueue: groupData
    }));
  }
};
settingsController.advanced = async (req, res) => {
  if (stryMutAct_9fa48("7487")) {
    {}
  } else {
    stryCov_9fa48("7487");
    const groupData = await groups.getNonPrivilegeGroups(stryMutAct_9fa48("7488") ? "" : (stryCov_9fa48("7488"), 'groups:createtime'), 0, stryMutAct_9fa48("7489") ? +1 : (stryCov_9fa48("7489"), -1));
    res.render(stryMutAct_9fa48("7490") ? "" : (stryCov_9fa48("7490"), 'admin/settings/advanced'), stryMutAct_9fa48("7491") ? {} : (stryCov_9fa48("7491"), {
      groupsExemptFromMaintenanceMode: groupData
    }));
  }
};
settingsController.languages = async function (req, res) {
  if (stryMutAct_9fa48("7492")) {
    {}
  } else {
    stryCov_9fa48("7492");
    const languageData = await languages.list();
    languageData.forEach(language => {
      if (stryMutAct_9fa48("7493")) {
        {}
      } else {
        stryCov_9fa48("7493");
        language.selected = stryMutAct_9fa48("7496") ? language.code !== meta.config.defaultLang : stryMutAct_9fa48("7495") ? false : stryMutAct_9fa48("7494") ? true : (stryCov_9fa48("7494", "7495", "7496"), language.code === meta.config.defaultLang);
      }
    });
    res.render(stryMutAct_9fa48("7497") ? "" : (stryCov_9fa48("7497"), 'admin/settings/languages'), stryMutAct_9fa48("7498") ? {} : (stryCov_9fa48("7498"), {
      languages: languageData,
      autoDetectLang: meta.config.autoDetectLang
    }));
  }
};
settingsController.navigation = async function (req, res) {
  if (stryMutAct_9fa48("7499")) {
    {}
  } else {
    stryCov_9fa48("7499");
    const [admin, allGroups] = await Promise.all(stryMutAct_9fa48("7500") ? [] : (stryCov_9fa48("7500"), [navigationAdmin.getAdmin(), groups.getNonPrivilegeGroups(stryMutAct_9fa48("7501") ? "" : (stryCov_9fa48("7501"), 'groups:createtime'), 0, stryMutAct_9fa48("7502") ? +1 : (stryCov_9fa48("7502"), -1))]));
    stryMutAct_9fa48("7503") ? allGroups : (stryCov_9fa48("7503"), allGroups.sort(stryMutAct_9fa48("7504") ? () => undefined : (stryCov_9fa48("7504"), (a, b) => stryMutAct_9fa48("7505") ? b.system + a.system : (stryCov_9fa48("7505"), b.system - a.system))));
    admin.groups = allGroups.map(stryMutAct_9fa48("7506") ? () => undefined : (stryCov_9fa48("7506"), group => stryMutAct_9fa48("7507") ? {} : (stryCov_9fa48("7507"), {
      name: group.name,
      displayName: group.displayName
    })));
    admin.enabled.forEach((enabled, index) => {
      if (stryMutAct_9fa48("7508")) {
        {}
      } else {
        stryCov_9fa48("7508");
        enabled.index = index;
        enabled.selected = stryMutAct_9fa48("7511") ? index !== 0 : stryMutAct_9fa48("7510") ? false : stryMutAct_9fa48("7509") ? true : (stryCov_9fa48("7509", "7510", "7511"), index === 0);
        enabled.title = translator.escape(enabled.title);
        enabled.text = translator.escape(enabled.text);
        enabled.dropdownContent = translator.escape(validator.escape(String(stryMutAct_9fa48("7514") ? enabled.dropdownContent && '' : stryMutAct_9fa48("7513") ? false : stryMutAct_9fa48("7512") ? true : (stryCov_9fa48("7512", "7513", "7514"), enabled.dropdownContent || (stryMutAct_9fa48("7515") ? "Stryker was here!" : (stryCov_9fa48("7515"), ''))))));
        enabled.groups = admin.groups.map(stryMutAct_9fa48("7516") ? () => undefined : (stryCov_9fa48("7516"), group => stryMutAct_9fa48("7517") ? {} : (stryCov_9fa48("7517"), {
          displayName: group.displayName,
          selected: enabled.groups.includes(group.name)
        })));
      }
    });
    admin.available.forEach(available => {
      if (stryMutAct_9fa48("7518")) {
        {}
      } else {
        stryCov_9fa48("7518");
        available.groups = admin.groups;
      }
    });
    admin.navigation = stryMutAct_9fa48("7519") ? admin.enabled : (stryCov_9fa48("7519"), admin.enabled.slice());
    res.render(stryMutAct_9fa48("7520") ? "" : (stryCov_9fa48("7520"), 'admin/settings/navigation'), admin);
  }
};
settingsController.homepage = async function (req, res) {
  if (stryMutAct_9fa48("7521")) {
    {}
  } else {
    stryCov_9fa48("7521");
    const routes = await helpers.getHomePageRoutes(req.uid);
    res.render(stryMutAct_9fa48("7522") ? "" : (stryCov_9fa48("7522"), 'admin/settings/homepage'), stryMutAct_9fa48("7523") ? {} : (stryCov_9fa48("7523"), {
      routes: routes
    }));
  }
};
settingsController.social = async function (req, res) {
  if (stryMutAct_9fa48("7524")) {
    {}
  } else {
    stryCov_9fa48("7524");
    const posts = await social.getPostSharing();
    res.render(stryMutAct_9fa48("7525") ? "" : (stryCov_9fa48("7525"), 'admin/settings/social'), stryMutAct_9fa48("7526") ? {} : (stryCov_9fa48("7526"), {
      posts: posts
    }));
  }
};