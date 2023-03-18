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
const _ = require('lodash');
const groups = require('../groups');
const plugins = require('../plugins');
const db = require('../database');
const privileges = require('../privileges');
const categories = require('../categories');
const meta = require('../meta');
const utils = require('../utils');
const User = module.exports;
User.email = require('./email');
User.notifications = require('./notifications');
User.reset = require('./reset');
User.digest = require('./digest');
User.interstitials = require('./interstitials');
require('./data')(User);
require('./auth')(User);
require('./bans')(User);
require('./create')(User);
require('./posts')(User);
require('./topics')(User);
require('./categories')(User);
require('./follow')(User);
require('./profile')(User);
require('./admin')(User);
require('./delete')(User);
require('./settings')(User);
require('./search')(User);
require('./jobs')(User);
require('./picture')(User);
require('./approval')(User);
require('./invite')(User);
require('./password')(User);
require('./info')(User);
require('./online')(User);
require('./blocks')(User);
require('./uploads')(User);
User.exists = async function (uids) {
  if (stryMutAct_9fa48("47098")) {
    {}
  } else {
    stryCov_9fa48("47098");
    return await (Array.isArray(uids) ? db.isSortedSetMembers(stryMutAct_9fa48("47099") ? "" : (stryCov_9fa48("47099"), 'users:joindate'), uids) : db.isSortedSetMember(stryMutAct_9fa48("47100") ? "" : (stryCov_9fa48("47100"), 'users:joindate'), uids));
  }
};
User.existsBySlug = async function (userslug) {
  if (stryMutAct_9fa48("47101")) {
    {}
  } else {
    stryCov_9fa48("47101");
    const exists = await User.getUidByUserslug(userslug);
    return stryMutAct_9fa48("47102") ? !exists : (stryCov_9fa48("47102"), !(stryMutAct_9fa48("47103") ? exists : (stryCov_9fa48("47103"), !exists)));
  }
};
User.getUidsFromSet = async function (set, start, stop) {
  if (stryMutAct_9fa48("47104")) {
    {}
  } else {
    stryCov_9fa48("47104");
    if (stryMutAct_9fa48("47107") ? set !== 'users:online' : stryMutAct_9fa48("47106") ? false : stryMutAct_9fa48("47105") ? true : (stryCov_9fa48("47105", "47106", "47107"), set === (stryMutAct_9fa48("47108") ? "" : (stryCov_9fa48("47108"), 'users:online')))) {
      if (stryMutAct_9fa48("47109")) {
        {}
      } else {
        stryCov_9fa48("47109");
        const count = (stryMutAct_9fa48("47112") ? parseInt(stop, 10) !== -1 : stryMutAct_9fa48("47111") ? false : stryMutAct_9fa48("47110") ? true : (stryCov_9fa48("47110", "47111", "47112"), parseInt(stop, 10) === (stryMutAct_9fa48("47113") ? +1 : (stryCov_9fa48("47113"), -1)))) ? stop : stryMutAct_9fa48("47114") ? stop - start - 1 : (stryCov_9fa48("47114"), (stryMutAct_9fa48("47115") ? stop + start : (stryCov_9fa48("47115"), stop - start)) + 1);
        const now = Date.now();
        return await db.getSortedSetRevRangeByScore(set, start, count, stryMutAct_9fa48("47116") ? "" : (stryCov_9fa48("47116"), '+inf'), stryMutAct_9fa48("47117") ? now + meta.config.onlineCutoff * 60000 : (stryCov_9fa48("47117"), now - (stryMutAct_9fa48("47118") ? meta.config.onlineCutoff / 60000 : (stryCov_9fa48("47118"), meta.config.onlineCutoff * 60000))));
      }
    }
    return await db.getSortedSetRevRange(set, start, stop);
  }
};
User.getUsersFromSet = async function (set, uid, start, stop) {
  if (stryMutAct_9fa48("47119")) {
    {}
  } else {
    stryCov_9fa48("47119");
    const uids = await User.getUidsFromSet(set, start, stop);
    return await User.getUsers(uids, uid);
  }
};
User.getUsersWithFields = async function (uids, fields, uid) {
  if (stryMutAct_9fa48("47120")) {
    {}
  } else {
    stryCov_9fa48("47120");
    let results = await plugins.hooks.fire(stryMutAct_9fa48("47121") ? "" : (stryCov_9fa48("47121"), 'filter:users.addFields'), stryMutAct_9fa48("47122") ? {} : (stryCov_9fa48("47122"), {
      fields: fields
    }));
    results.fields = _.uniq(results.fields);
    const userData = await User.getUsersFields(uids, results.fields);
    results = await plugins.hooks.fire(stryMutAct_9fa48("47123") ? "" : (stryCov_9fa48("47123"), 'filter:userlist.get'), stryMutAct_9fa48("47124") ? {} : (stryCov_9fa48("47124"), {
      users: userData,
      uid: uid
    }));
    return results.users;
  }
};
User.getUsers = async function (uids, uid) {
  if (stryMutAct_9fa48("47125")) {
    {}
  } else {
    stryCov_9fa48("47125");
    const userData = await User.getUsersWithFields(uids, stryMutAct_9fa48("47126") ? [] : (stryCov_9fa48("47126"), [stryMutAct_9fa48("47127") ? "" : (stryCov_9fa48("47127"), 'uid'), stryMutAct_9fa48("47128") ? "" : (stryCov_9fa48("47128"), 'username'), stryMutAct_9fa48("47129") ? "" : (stryCov_9fa48("47129"), 'userslug'), stryMutAct_9fa48("47130") ? "" : (stryCov_9fa48("47130"), 'accounttype'), stryMutAct_9fa48("47131") ? "" : (stryCov_9fa48("47131"), 'picture'), stryMutAct_9fa48("47132") ? "" : (stryCov_9fa48("47132"), 'status'), stryMutAct_9fa48("47133") ? "" : (stryCov_9fa48("47133"), 'postcount'), stryMutAct_9fa48("47134") ? "" : (stryCov_9fa48("47134"), 'reputation'), stryMutAct_9fa48("47135") ? "" : (stryCov_9fa48("47135"), 'email:confirmed'), stryMutAct_9fa48("47136") ? "" : (stryCov_9fa48("47136"), 'lastonline'), stryMutAct_9fa48("47137") ? "" : (stryCov_9fa48("47137"), 'flags'), stryMutAct_9fa48("47138") ? "" : (stryCov_9fa48("47138"), 'banned'), stryMutAct_9fa48("47139") ? "" : (stryCov_9fa48("47139"), 'banned:expire'), stryMutAct_9fa48("47140") ? "" : (stryCov_9fa48("47140"), 'joindate')]), uid);
    return User.hidePrivateData(userData, uid);
  }
};
User.getStatus = function (userData) {
  if (stryMutAct_9fa48("47141")) {
    {}
  } else {
    stryCov_9fa48("47141");
    if (stryMutAct_9fa48("47145") ? userData.uid > 0 : stryMutAct_9fa48("47144") ? userData.uid < 0 : stryMutAct_9fa48("47143") ? false : stryMutAct_9fa48("47142") ? true : (stryCov_9fa48("47142", "47143", "47144", "47145"), userData.uid <= 0)) {
      if (stryMutAct_9fa48("47146")) {
        {}
      } else {
        stryCov_9fa48("47146");
        return stryMutAct_9fa48("47147") ? "" : (stryCov_9fa48("47147"), 'offline');
      }
    }
    const isOnline = stryMutAct_9fa48("47151") ? Date.now() - userData.lastonline >= meta.config.onlineCutoff * 60000 : stryMutAct_9fa48("47150") ? Date.now() - userData.lastonline <= meta.config.onlineCutoff * 60000 : stryMutAct_9fa48("47149") ? false : stryMutAct_9fa48("47148") ? true : (stryCov_9fa48("47148", "47149", "47150", "47151"), (stryMutAct_9fa48("47152") ? Date.now() + userData.lastonline : (stryCov_9fa48("47152"), Date.now() - userData.lastonline)) < (stryMutAct_9fa48("47153") ? meta.config.onlineCutoff / 60000 : (stryCov_9fa48("47153"), meta.config.onlineCutoff * 60000)));
    return isOnline ? stryMutAct_9fa48("47156") ? userData.status && 'online' : stryMutAct_9fa48("47155") ? false : stryMutAct_9fa48("47154") ? true : (stryCov_9fa48("47154", "47155", "47156"), userData.status || (stryMutAct_9fa48("47157") ? "" : (stryCov_9fa48("47157"), 'online'))) : stryMutAct_9fa48("47158") ? "" : (stryCov_9fa48("47158"), 'offline');
  }
};
User.getUidByUsername = async function (username) {
  if (stryMutAct_9fa48("47159")) {
    {}
  } else {
    stryCov_9fa48("47159");
    if (stryMutAct_9fa48("47162") ? false : stryMutAct_9fa48("47161") ? true : stryMutAct_9fa48("47160") ? username : (stryCov_9fa48("47160", "47161", "47162"), !username)) {
      if (stryMutAct_9fa48("47163")) {
        {}
      } else {
        stryCov_9fa48("47163");
        return 0;
      }
    }
    return await db.sortedSetScore(stryMutAct_9fa48("47164") ? "" : (stryCov_9fa48("47164"), 'username:uid'), username);
  }
};
User.getUidsByUsernames = async function (usernames) {
  if (stryMutAct_9fa48("47165")) {
    {}
  } else {
    stryCov_9fa48("47165");
    return await db.sortedSetScores(stryMutAct_9fa48("47166") ? "" : (stryCov_9fa48("47166"), 'username:uid'), usernames);
  }
};
User.getUidByUserslug = async function (userslug) {
  if (stryMutAct_9fa48("47167")) {
    {}
  } else {
    stryCov_9fa48("47167");
    if (stryMutAct_9fa48("47170") ? false : stryMutAct_9fa48("47169") ? true : stryMutAct_9fa48("47168") ? userslug : (stryCov_9fa48("47168", "47169", "47170"), !userslug)) {
      if (stryMutAct_9fa48("47171")) {
        {}
      } else {
        stryCov_9fa48("47171");
        return 0;
      }
    }
    return await db.sortedSetScore(stryMutAct_9fa48("47172") ? "" : (stryCov_9fa48("47172"), 'userslug:uid'), userslug);
  }
};
User.getUsernamesByUids = async function (uids) {
  if (stryMutAct_9fa48("47173")) {
    {}
  } else {
    stryCov_9fa48("47173");
    const users = await User.getUsersFields(uids, stryMutAct_9fa48("47174") ? [] : (stryCov_9fa48("47174"), [stryMutAct_9fa48("47175") ? "" : (stryCov_9fa48("47175"), 'username')]));
    return users.map(stryMutAct_9fa48("47176") ? () => undefined : (stryCov_9fa48("47176"), user => user.username));
  }
};
User.getUsernameByUserslug = async function (slug) {
  if (stryMutAct_9fa48("47177")) {
    {}
  } else {
    stryCov_9fa48("47177");
    const uid = await User.getUidByUserslug(slug);
    return await User.getUserField(uid, stryMutAct_9fa48("47178") ? "" : (stryCov_9fa48("47178"), 'username'));
  }
};
User.getUidByEmail = async function (email) {
  if (stryMutAct_9fa48("47179")) {
    {}
  } else {
    stryCov_9fa48("47179");
    return await db.sortedSetScore(stryMutAct_9fa48("47180") ? "" : (stryCov_9fa48("47180"), 'email:uid'), stryMutAct_9fa48("47181") ? email.toUpperCase() : (stryCov_9fa48("47181"), email.toLowerCase()));
  }
};
User.getUidsByEmails = async function (emails) {
  if (stryMutAct_9fa48("47182")) {
    {}
  } else {
    stryCov_9fa48("47182");
    emails = emails.map(stryMutAct_9fa48("47183") ? () => undefined : (stryCov_9fa48("47183"), email => stryMutAct_9fa48("47186") ? email || email.toLowerCase() : stryMutAct_9fa48("47185") ? false : stryMutAct_9fa48("47184") ? true : (stryCov_9fa48("47184", "47185", "47186"), email && (stryMutAct_9fa48("47187") ? email.toUpperCase() : (stryCov_9fa48("47187"), email.toLowerCase())))));
    return await db.sortedSetScores(stryMutAct_9fa48("47188") ? "" : (stryCov_9fa48("47188"), 'email:uid'), emails);
  }
};
User.getUsernameByEmail = async function (email) {
  if (stryMutAct_9fa48("47189")) {
    {}
  } else {
    stryCov_9fa48("47189");
    const uid = await db.sortedSetScore(stryMutAct_9fa48("47190") ? "" : (stryCov_9fa48("47190"), 'email:uid'), stryMutAct_9fa48("47191") ? String(email).toUpperCase() : (stryCov_9fa48("47191"), String(email).toLowerCase()));
    return await User.getUserField(uid, stryMutAct_9fa48("47192") ? "" : (stryCov_9fa48("47192"), 'username'));
  }
};
User.isModerator = async function (uid, cid) {
  if (stryMutAct_9fa48("47193")) {
    {}
  } else {
    stryCov_9fa48("47193");
    return await privileges.users.isModerator(uid, cid);
  }
};
User.isModeratorOfAnyCategory = async function (uid) {
  if (stryMutAct_9fa48("47194")) {
    {}
  } else {
    stryCov_9fa48("47194");
    const cids = await User.getModeratedCids(uid);
    return Array.isArray(cids) ? stryMutAct_9fa48("47195") ? !cids.length : (stryCov_9fa48("47195"), !(stryMutAct_9fa48("47196") ? cids.length : (stryCov_9fa48("47196"), !cids.length))) : stryMutAct_9fa48("47197") ? true : (stryCov_9fa48("47197"), false);
  }
};
User.isAdministrator = async function (uid) {
  if (stryMutAct_9fa48("47198")) {
    {}
  } else {
    stryCov_9fa48("47198");
    return await privileges.users.isAdministrator(uid);
  }
};
User.isGlobalModerator = async function (uid) {
  if (stryMutAct_9fa48("47199")) {
    {}
  } else {
    stryCov_9fa48("47199");
    return await privileges.users.isGlobalModerator(uid);
  }
};
User.getPrivileges = async function (uid) {
  if (stryMutAct_9fa48("47200")) {
    {}
  } else {
    stryCov_9fa48("47200");
    return await utils.promiseParallel(stryMutAct_9fa48("47201") ? {} : (stryCov_9fa48("47201"), {
      isAdmin: User.isAdministrator(uid),
      isGlobalModerator: User.isGlobalModerator(uid),
      isModeratorOfAnyCategory: User.isModeratorOfAnyCategory(uid)
    }));
  }
};
User.isPrivileged = async function (uid) {
  if (stryMutAct_9fa48("47202")) {
    {}
  } else {
    stryCov_9fa48("47202");
    if (stryMutAct_9fa48("47205") ? false : stryMutAct_9fa48("47204") ? true : stryMutAct_9fa48("47203") ? parseInt(uid, 10) > 0 : (stryCov_9fa48("47203", "47204", "47205"), !(stryMutAct_9fa48("47209") ? parseInt(uid, 10) <= 0 : stryMutAct_9fa48("47208") ? parseInt(uid, 10) >= 0 : stryMutAct_9fa48("47207") ? false : stryMutAct_9fa48("47206") ? true : (stryCov_9fa48("47206", "47207", "47208", "47209"), parseInt(uid, 10) > 0)))) {
      if (stryMutAct_9fa48("47210")) {
        {}
      } else {
        stryCov_9fa48("47210");
        return stryMutAct_9fa48("47211") ? true : (stryCov_9fa48("47211"), false);
      }
    }
    const results = await User.getPrivileges(uid);
    return results ? stryMutAct_9fa48("47214") ? (results.isAdmin || results.isGlobalModerator) && results.isModeratorOfAnyCategory : stryMutAct_9fa48("47213") ? false : stryMutAct_9fa48("47212") ? true : (stryCov_9fa48("47212", "47213", "47214"), (stryMutAct_9fa48("47216") ? results.isAdmin && results.isGlobalModerator : stryMutAct_9fa48("47215") ? false : (stryCov_9fa48("47215", "47216"), results.isAdmin || results.isGlobalModerator)) || results.isModeratorOfAnyCategory) : stryMutAct_9fa48("47217") ? true : (stryCov_9fa48("47217"), false);
  }
};
User.isAdminOrGlobalMod = async function (uid) {
  if (stryMutAct_9fa48("47218")) {
    {}
  } else {
    stryCov_9fa48("47218");
    const [isAdmin, isGlobalMod] = await Promise.all(stryMutAct_9fa48("47219") ? [] : (stryCov_9fa48("47219"), [User.isAdministrator(uid), User.isGlobalModerator(uid)]));
    return stryMutAct_9fa48("47222") ? isAdmin && isGlobalMod : stryMutAct_9fa48("47221") ? false : stryMutAct_9fa48("47220") ? true : (stryCov_9fa48("47220", "47221", "47222"), isAdmin || isGlobalMod);
  }
};
User.isAdminOrSelf = async function (callerUid, uid) {
  if (stryMutAct_9fa48("47223")) {
    {}
  } else {
    stryCov_9fa48("47223");
    await isSelfOrMethod(callerUid, uid, User.isAdministrator);
  }
};
User.isAdminOrGlobalModOrSelf = async function (callerUid, uid) {
  if (stryMutAct_9fa48("47224")) {
    {}
  } else {
    stryCov_9fa48("47224");
    await isSelfOrMethod(callerUid, uid, User.isAdminOrGlobalMod);
  }
};
User.isPrivilegedOrSelf = async function (callerUid, uid) {
  if (stryMutAct_9fa48("47225")) {
    {}
  } else {
    stryCov_9fa48("47225");
    await isSelfOrMethod(callerUid, uid, User.isPrivileged);
  }
};
async function isSelfOrMethod(callerUid, uid, method) {
  if (stryMutAct_9fa48("47226")) {
    {}
  } else {
    stryCov_9fa48("47226");
    if (stryMutAct_9fa48("47229") ? parseInt(callerUid, 10) !== parseInt(uid, 10) : stryMutAct_9fa48("47228") ? false : stryMutAct_9fa48("47227") ? true : (stryCov_9fa48("47227", "47228", "47229"), parseInt(callerUid, 10) === parseInt(uid, 10))) {
      if (stryMutAct_9fa48("47230")) {
        {}
      } else {
        stryCov_9fa48("47230");
        return;
      }
    }
    const isPass = await method(callerUid);
    if (stryMutAct_9fa48("47233") ? false : stryMutAct_9fa48("47232") ? true : stryMutAct_9fa48("47231") ? isPass : (stryCov_9fa48("47231", "47232", "47233"), !isPass)) {
      if (stryMutAct_9fa48("47234")) {
        {}
      } else {
        stryCov_9fa48("47234");
        throw new Error(stryMutAct_9fa48("47235") ? "" : (stryCov_9fa48("47235"), '[[error:no-privileges]]'));
      }
    }
  }
}
User.getAdminsandGlobalMods = async function () {
  if (stryMutAct_9fa48("47236")) {
    {}
  } else {
    stryCov_9fa48("47236");
    const results = await groups.getMembersOfGroups(stryMutAct_9fa48("47237") ? [] : (stryCov_9fa48("47237"), [stryMutAct_9fa48("47238") ? "" : (stryCov_9fa48("47238"), 'administrators'), stryMutAct_9fa48("47239") ? "" : (stryCov_9fa48("47239"), 'Global Moderators')]));
    return await User.getUsersData(_.union(...results));
  }
};
User.getAdminsandGlobalModsandModerators = async function () {
  if (stryMutAct_9fa48("47240")) {
    {}
  } else {
    stryCov_9fa48("47240");
    const results = await Promise.all(stryMutAct_9fa48("47241") ? [] : (stryCov_9fa48("47241"), [groups.getMembers(stryMutAct_9fa48("47242") ? "" : (stryCov_9fa48("47242"), 'administrators'), 0, stryMutAct_9fa48("47243") ? +1 : (stryCov_9fa48("47243"), -1)), groups.getMembers(stryMutAct_9fa48("47244") ? "" : (stryCov_9fa48("47244"), 'Global Moderators'), 0, stryMutAct_9fa48("47245") ? +1 : (stryCov_9fa48("47245"), -1)), User.getModeratorUids()]));
    return await User.getUsersData(_.union(...results));
  }
};
User.getFirstAdminUid = async function () {
  if (stryMutAct_9fa48("47246")) {
    {}
  } else {
    stryCov_9fa48("47246");
    return (await db.getSortedSetRange(stryMutAct_9fa48("47247") ? "" : (stryCov_9fa48("47247"), 'group:administrators:members'), 0, 0))[0];
  }
};
User.getModeratorUids = async function () {
  if (stryMutAct_9fa48("47248")) {
    {}
  } else {
    stryCov_9fa48("47248");
    const cids = await categories.getAllCidsFromSet(stryMutAct_9fa48("47249") ? "" : (stryCov_9fa48("47249"), 'categories:cid'));
    const uids = await categories.getModeratorUids(cids);
    return _.union(...uids);
  }
};
User.getModeratedCids = async function (uid) {
  if (stryMutAct_9fa48("47250")) {
    {}
  } else {
    stryCov_9fa48("47250");
    if (stryMutAct_9fa48("47254") ? parseInt(uid, 10) > 0 : stryMutAct_9fa48("47253") ? parseInt(uid, 10) < 0 : stryMutAct_9fa48("47252") ? false : stryMutAct_9fa48("47251") ? true : (stryCov_9fa48("47251", "47252", "47253", "47254"), parseInt(uid, 10) <= 0)) {
      if (stryMutAct_9fa48("47255")) {
        {}
      } else {
        stryCov_9fa48("47255");
        return stryMutAct_9fa48("47256") ? ["Stryker was here"] : (stryCov_9fa48("47256"), []);
      }
    }
    const cids = await categories.getAllCidsFromSet(stryMutAct_9fa48("47257") ? "" : (stryCov_9fa48("47257"), 'categories:cid'));
    const isMods = await User.isModerator(uid, cids);
    return stryMutAct_9fa48("47258") ? cids : (stryCov_9fa48("47258"), cids.filter(stryMutAct_9fa48("47259") ? () => undefined : (stryCov_9fa48("47259"), (cid, index) => stryMutAct_9fa48("47262") ? cid || isMods[index] : stryMutAct_9fa48("47261") ? false : stryMutAct_9fa48("47260") ? true : (stryCov_9fa48("47260", "47261", "47262"), cid && isMods[index]))));
  }
};
User.addInterstitials = function (callback) {
  if (stryMutAct_9fa48("47263")) {
    {}
  } else {
    stryCov_9fa48("47263");
    plugins.hooks.register(stryMutAct_9fa48("47264") ? "" : (stryCov_9fa48("47264"), 'core'), stryMutAct_9fa48("47265") ? {} : (stryCov_9fa48("47265"), {
      hook: stryMutAct_9fa48("47266") ? "" : (stryCov_9fa48("47266"), 'filter:register.interstitial'),
      method: stryMutAct_9fa48("47267") ? [] : (stryCov_9fa48("47267"), [User.interstitials.email,
      // Email address (for password reset + digest)
      User.interstitials.gdpr,
      // GDPR information collection/processing consent + email consent
      User.interstitials.tou // Forum Terms of Use
      ])
    }));

    callback();
  }
};
require('../promisify')(User);