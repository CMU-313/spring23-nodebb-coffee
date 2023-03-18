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
const db = require('../../database');
const user = require('../../user');
const groups = require('../../groups');
const plugins = require('../../plugins');
const meta = require('../../meta');
const utils = require('../../utils');
const privileges = require('../../privileges');
const translator = require('../../translator');
const messaging = require('../../messaging');
const categories = require('../../categories');
const helpers = module.exports;
helpers.getUserDataByUserSlug = async function (userslug, callerUID, query = {}) {
  if (stryMutAct_9fa48("5517")) {
    {}
  } else {
    stryCov_9fa48("5517");
    const uid = await user.getUidByUserslug(userslug);
    if (stryMutAct_9fa48("5520") ? false : stryMutAct_9fa48("5519") ? true : stryMutAct_9fa48("5518") ? uid : (stryCov_9fa48("5518", "5519", "5520"), !uid)) {
      if (stryMutAct_9fa48("5521")) {
        {}
      } else {
        stryCov_9fa48("5521");
        return null;
      }
    }
    const results = await getAllData(uid, callerUID);
    if (stryMutAct_9fa48("5524") ? false : stryMutAct_9fa48("5523") ? true : stryMutAct_9fa48("5522") ? results.userData : (stryCov_9fa48("5522", "5523", "5524"), !results.userData)) {
      if (stryMutAct_9fa48("5525")) {
        {}
      } else {
        stryCov_9fa48("5525");
        throw new Error(stryMutAct_9fa48("5526") ? "" : (stryCov_9fa48("5526"), '[[error:invalid-uid]]'));
      }
    }
    await parseAboutMe(results.userData);
    let {
      userData
    } = results;
    const {
      userSettings
    } = results;
    const {
      isAdmin
    } = results;
    const {
      isGlobalModerator
    } = results;
    const {
      isModerator
    } = results;
    const {
      canViewInfo
    } = results;
    const isSelf = stryMutAct_9fa48("5529") ? parseInt(callerUID, 10) !== parseInt(userData.uid, 10) : stryMutAct_9fa48("5528") ? false : stryMutAct_9fa48("5527") ? true : (stryCov_9fa48("5527", "5528", "5529"), parseInt(callerUID, 10) === parseInt(userData.uid, 10));
    userData.age = Math.max(0, userData.birthday ? Math.floor(stryMutAct_9fa48("5530") ? (new Date().getTime() - new Date(userData.birthday).getTime()) * 31536000000 : (stryCov_9fa48("5530"), (stryMutAct_9fa48("5531") ? new Date().getTime() + new Date(userData.birthday).getTime() : (stryCov_9fa48("5531"), new Date().getTime() - new Date(userData.birthday).getTime())) / 31536000000)) : 0);
    userData = await user.hidePrivateData(userData, callerUID);
    userData.emailClass = userSettings.showemail ? stryMutAct_9fa48("5532") ? "" : (stryCov_9fa48("5532"), 'hide') : stryMutAct_9fa48("5533") ? "Stryker was here!" : (stryCov_9fa48("5533"), '');

    // If email unconfirmed, hide from result set
    if (stryMutAct_9fa48("5536") ? false : stryMutAct_9fa48("5535") ? true : stryMutAct_9fa48("5534") ? userData['email:confirmed'] : (stryCov_9fa48("5534", "5535", "5536"), !userData[stryMutAct_9fa48("5537") ? "" : (stryCov_9fa48("5537"), 'email:confirmed')])) {
      if (stryMutAct_9fa48("5538")) {
        {}
      } else {
        stryCov_9fa48("5538");
        userData.email = stryMutAct_9fa48("5539") ? "Stryker was here!" : (stryCov_9fa48("5539"), '');
      }
    }
    if (stryMutAct_9fa48("5542") ? (isAdmin || isSelf) && canViewInfo && !results.isTargetAdmin : stryMutAct_9fa48("5541") ? false : stryMutAct_9fa48("5540") ? true : (stryCov_9fa48("5540", "5541", "5542"), (stryMutAct_9fa48("5544") ? isAdmin && isSelf : stryMutAct_9fa48("5543") ? false : (stryCov_9fa48("5543", "5544"), isAdmin || isSelf)) || (stryMutAct_9fa48("5546") ? canViewInfo || !results.isTargetAdmin : stryMutAct_9fa48("5545") ? false : (stryCov_9fa48("5545", "5546"), canViewInfo && (stryMutAct_9fa48("5547") ? results.isTargetAdmin : (stryCov_9fa48("5547"), !results.isTargetAdmin)))))) {
      if (stryMutAct_9fa48("5548")) {
        {}
      } else {
        stryCov_9fa48("5548");
        userData.ips = results.ips;
      }
    }
    if (stryMutAct_9fa48("5551") ? !isAdmin && !isGlobalModerator || !isModerator : stryMutAct_9fa48("5550") ? false : stryMutAct_9fa48("5549") ? true : (stryCov_9fa48("5549", "5550", "5551"), (stryMutAct_9fa48("5553") ? !isAdmin || !isGlobalModerator : stryMutAct_9fa48("5552") ? true : (stryCov_9fa48("5552", "5553"), (stryMutAct_9fa48("5554") ? isAdmin : (stryCov_9fa48("5554"), !isAdmin)) && (stryMutAct_9fa48("5555") ? isGlobalModerator : (stryCov_9fa48("5555"), !isGlobalModerator)))) && (stryMutAct_9fa48("5556") ? isModerator : (stryCov_9fa48("5556"), !isModerator)))) {
      if (stryMutAct_9fa48("5557")) {
        {}
      } else {
        stryCov_9fa48("5557");
        userData.moderationNote = undefined;
      }
    }
    userData.isBlocked = results.isBlocked;
    userData.yourid = callerUID;
    userData.theirid = userData.uid;
    userData.isTargetAdmin = results.isTargetAdmin;
    userData.isAdmin = isAdmin;
    userData.isGlobalModerator = isGlobalModerator;
    userData.isModerator = isModerator;
    userData.isAdminOrGlobalModerator = stryMutAct_9fa48("5560") ? isAdmin && isGlobalModerator : stryMutAct_9fa48("5559") ? false : stryMutAct_9fa48("5558") ? true : (stryCov_9fa48("5558", "5559", "5560"), isAdmin || isGlobalModerator);
    userData.isAdminOrGlobalModeratorOrModerator = stryMutAct_9fa48("5563") ? (isAdmin || isGlobalModerator) && isModerator : stryMutAct_9fa48("5562") ? false : stryMutAct_9fa48("5561") ? true : (stryCov_9fa48("5561", "5562", "5563"), (stryMutAct_9fa48("5565") ? isAdmin && isGlobalModerator : stryMutAct_9fa48("5564") ? false : (stryCov_9fa48("5564", "5565"), isAdmin || isGlobalModerator)) || isModerator);
    userData.isSelfOrAdminOrGlobalModerator = stryMutAct_9fa48("5568") ? (isSelf || isAdmin) && isGlobalModerator : stryMutAct_9fa48("5567") ? false : stryMutAct_9fa48("5566") ? true : (stryCov_9fa48("5566", "5567", "5568"), (stryMutAct_9fa48("5570") ? isSelf && isAdmin : stryMutAct_9fa48("5569") ? false : (stryCov_9fa48("5569", "5570"), isSelf || isAdmin)) || isGlobalModerator);
    userData.canEdit = results.canEdit;
    userData.canBan = results.canBanUser;
    userData.canMute = results.canMuteUser;
    userData.canFlag = (await privileges.users.canFlag(callerUID, userData.uid)).flag;
    userData.canChangePassword = stryMutAct_9fa48("5573") ? isAdmin && isSelf && !meta.config['password:disableEdit'] : stryMutAct_9fa48("5572") ? false : stryMutAct_9fa48("5571") ? true : (stryCov_9fa48("5571", "5572", "5573"), isAdmin || (stryMutAct_9fa48("5575") ? isSelf || !meta.config['password:disableEdit'] : stryMutAct_9fa48("5574") ? false : (stryCov_9fa48("5574", "5575"), isSelf && (stryMutAct_9fa48("5576") ? meta.config['password:disableEdit'] : (stryCov_9fa48("5576"), !meta.config[stryMutAct_9fa48("5577") ? "" : (stryCov_9fa48("5577"), 'password:disableEdit')])))));
    userData.isSelf = isSelf;
    userData.isFollowing = results.isFollowing;
    userData.hasPrivateChat = results.hasPrivateChat;
    userData.showHidden = results.canEdit; // remove in v1.19.0
    userData.groups = (stryMutAct_9fa48("5580") ? Array.isArray(results.groups) || results.groups.length : stryMutAct_9fa48("5579") ? false : stryMutAct_9fa48("5578") ? true : (stryCov_9fa48("5578", "5579", "5580"), Array.isArray(results.groups) && results.groups.length)) ? results.groups[0] : stryMutAct_9fa48("5581") ? ["Stryker was here"] : (stryCov_9fa48("5581"), []);
    userData.disableSignatures = stryMutAct_9fa48("5584") ? meta.config.disableSignatures !== 1 : stryMutAct_9fa48("5583") ? false : stryMutAct_9fa48("5582") ? true : (stryCov_9fa48("5582", "5583", "5584"), meta.config.disableSignatures === 1);
    userData[stryMutAct_9fa48("5585") ? "" : (stryCov_9fa48("5585"), 'reputation:disabled')] = stryMutAct_9fa48("5588") ? meta.config['reputation:disabled'] !== 1 : stryMutAct_9fa48("5587") ? false : stryMutAct_9fa48("5586") ? true : (stryCov_9fa48("5586", "5587", "5588"), meta.config[stryMutAct_9fa48("5589") ? "" : (stryCov_9fa48("5589"), 'reputation:disabled')] === 1);
    userData[stryMutAct_9fa48("5590") ? "" : (stryCov_9fa48("5590"), 'downvote:disabled')] = stryMutAct_9fa48("5593") ? meta.config['downvote:disabled'] !== 1 : stryMutAct_9fa48("5592") ? false : stryMutAct_9fa48("5591") ? true : (stryCov_9fa48("5591", "5592", "5593"), meta.config[stryMutAct_9fa48("5594") ? "" : (stryCov_9fa48("5594"), 'downvote:disabled')] === 1);
    userData[stryMutAct_9fa48("5595") ? "" : (stryCov_9fa48("5595"), 'email:confirmed')] = stryMutAct_9fa48("5596") ? !userData['email:confirmed'] : (stryCov_9fa48("5596"), !(stryMutAct_9fa48("5597") ? userData['email:confirmed'] : (stryCov_9fa48("5597"), !userData[stryMutAct_9fa48("5598") ? "" : (stryCov_9fa48("5598"), 'email:confirmed')])));
    userData.profile_links = filterLinks(results.profile_menu.links, stryMutAct_9fa48("5599") ? {} : (stryCov_9fa48("5599"), {
      self: isSelf,
      other: stryMutAct_9fa48("5600") ? isSelf : (stryCov_9fa48("5600"), !isSelf),
      moderator: isModerator,
      globalMod: isGlobalModerator,
      admin: isAdmin,
      canViewInfo: canViewInfo
    }));
    userData.sso = results.sso.associations;
    userData.banned = Boolean(userData.banned);
    userData.muted = stryMutAct_9fa48("5604") ? parseInt(userData.mutedUntil, 10) <= Date.now() : stryMutAct_9fa48("5603") ? parseInt(userData.mutedUntil, 10) >= Date.now() : stryMutAct_9fa48("5602") ? false : stryMutAct_9fa48("5601") ? true : (stryCov_9fa48("5601", "5602", "5603", "5604"), parseInt(userData.mutedUntil, 10) > Date.now());
    userData.website = escape(userData.website);
    userData.websiteLink = (stryMutAct_9fa48("5605") ? userData.website.startsWith('http') : (stryCov_9fa48("5605"), !(stryMutAct_9fa48("5606") ? userData.website.endsWith('http') : (stryCov_9fa48("5606"), userData.website.startsWith(stryMutAct_9fa48("5607") ? "" : (stryCov_9fa48("5607"), 'http')))))) ? stryMutAct_9fa48("5608") ? `` : (stryCov_9fa48("5608"), `http://${userData.website}`) : userData.website;
    userData.websiteName = userData.website.replace(validator.escape(stryMutAct_9fa48("5609") ? "" : (stryCov_9fa48("5609"), 'http://')), stryMutAct_9fa48("5610") ? "Stryker was here!" : (stryCov_9fa48("5610"), '')).replace(validator.escape(stryMutAct_9fa48("5611") ? "" : (stryCov_9fa48("5611"), 'https://')), stryMutAct_9fa48("5612") ? "Stryker was here!" : (stryCov_9fa48("5612"), ''));
    userData.fullname = escape(userData.fullname);
    userData.location = escape(userData.location);
    userData.signature = escape(userData.signature);
    userData.birthday = validator.escape(String(stryMutAct_9fa48("5615") ? userData.birthday && '' : stryMutAct_9fa48("5614") ? false : stryMutAct_9fa48("5613") ? true : (stryCov_9fa48("5613", "5614", "5615"), userData.birthday || (stryMutAct_9fa48("5616") ? "Stryker was here!" : (stryCov_9fa48("5616"), '')))));
    userData.moderationNote = validator.escape(String(stryMutAct_9fa48("5619") ? userData.moderationNote && '' : stryMutAct_9fa48("5618") ? false : stryMutAct_9fa48("5617") ? true : (stryCov_9fa48("5617", "5618", "5619"), userData.moderationNote || (stryMutAct_9fa48("5620") ? "Stryker was here!" : (stryCov_9fa48("5620"), '')))));
    if (stryMutAct_9fa48("5622") ? false : stryMutAct_9fa48("5621") ? true : (stryCov_9fa48("5621", "5622"), userData[stryMutAct_9fa48("5623") ? "" : (stryCov_9fa48("5623"), 'cover:url')])) {
      if (stryMutAct_9fa48("5624")) {
        {}
      } else {
        stryCov_9fa48("5624");
        userData[stryMutAct_9fa48("5625") ? "" : (stryCov_9fa48("5625"), 'cover:url')] = (stryMutAct_9fa48("5626") ? userData['cover:url'].endsWith('http') : (stryCov_9fa48("5626"), userData[stryMutAct_9fa48("5627") ? "" : (stryCov_9fa48("5627"), 'cover:url')].startsWith(stryMutAct_9fa48("5628") ? "" : (stryCov_9fa48("5628"), 'http')))) ? userData[stryMutAct_9fa48("5629") ? "" : (stryCov_9fa48("5629"), 'cover:url')] : stryMutAct_9fa48("5630") ? nconf.get('relative_path') - userData['cover:url'] : (stryCov_9fa48("5630"), nconf.get(stryMutAct_9fa48("5631") ? "" : (stryCov_9fa48("5631"), 'relative_path')) + userData[stryMutAct_9fa48("5632") ? "" : (stryCov_9fa48("5632"), 'cover:url')]);
      }
    } else {
      if (stryMutAct_9fa48("5633")) {
        {}
      } else {
        stryCov_9fa48("5633");
        userData[stryMutAct_9fa48("5634") ? "" : (stryCov_9fa48("5634"), 'cover:url')] = require('../../coverPhoto').getDefaultProfileCover(userData.uid);
      }
    }
    userData[stryMutAct_9fa48("5635") ? "" : (stryCov_9fa48("5635"), 'cover:position')] = validator.escape(String(stryMutAct_9fa48("5638") ? userData['cover:position'] && '50% 50%' : stryMutAct_9fa48("5637") ? false : stryMutAct_9fa48("5636") ? true : (stryCov_9fa48("5636", "5637", "5638"), userData[stryMutAct_9fa48("5639") ? "" : (stryCov_9fa48("5639"), 'cover:position')] || (stryMutAct_9fa48("5640") ? "" : (stryCov_9fa48("5640"), '50% 50%')))));
    userData[stryMutAct_9fa48("5641") ? "" : (stryCov_9fa48("5641"), 'username:disableEdit')] = stryMutAct_9fa48("5644") ? !userData.isAdmin || meta.config['username:disableEdit'] : stryMutAct_9fa48("5643") ? false : stryMutAct_9fa48("5642") ? true : (stryCov_9fa48("5642", "5643", "5644"), (stryMutAct_9fa48("5645") ? userData.isAdmin : (stryCov_9fa48("5645"), !userData.isAdmin)) && meta.config[stryMutAct_9fa48("5646") ? "" : (stryCov_9fa48("5646"), 'username:disableEdit')]);
    userData[stryMutAct_9fa48("5647") ? "" : (stryCov_9fa48("5647"), 'email:disableEdit')] = stryMutAct_9fa48("5650") ? !userData.isAdmin || meta.config['email:disableEdit'] : stryMutAct_9fa48("5649") ? false : stryMutAct_9fa48("5648") ? true : (stryCov_9fa48("5648", "5649", "5650"), (stryMutAct_9fa48("5651") ? userData.isAdmin : (stryCov_9fa48("5651"), !userData.isAdmin)) && meta.config[stryMutAct_9fa48("5652") ? "" : (stryCov_9fa48("5652"), 'email:disableEdit')]);
    await getCounts(userData, callerUID);
    const hookData = await plugins.hooks.fire(stryMutAct_9fa48("5653") ? "" : (stryCov_9fa48("5653"), 'filter:helpers.getUserDataByUserSlug'), stryMutAct_9fa48("5654") ? {} : (stryCov_9fa48("5654"), {
      userData: userData,
      callerUID: callerUID,
      query: query
    }));
    return hookData.userData;
  }
};
function escape(value) {
  if (stryMutAct_9fa48("5655")) {
    {}
  } else {
    stryCov_9fa48("5655");
    return translator.escape(validator.escape(String(stryMutAct_9fa48("5658") ? value && '' : stryMutAct_9fa48("5657") ? false : stryMutAct_9fa48("5656") ? true : (stryCov_9fa48("5656", "5657", "5658"), value || (stryMutAct_9fa48("5659") ? "Stryker was here!" : (stryCov_9fa48("5659"), ''))))));
  }
}
async function getAllData(uid, callerUID) {
  if (stryMutAct_9fa48("5660")) {
    {}
  } else {
    stryCov_9fa48("5660");
    return await utils.promiseParallel(stryMutAct_9fa48("5661") ? {} : (stryCov_9fa48("5661"), {
      userData: user.getUserData(uid),
      isTargetAdmin: user.isAdministrator(uid),
      userSettings: user.getSettings(uid),
      isAdmin: user.isAdministrator(callerUID),
      isGlobalModerator: user.isGlobalModerator(callerUID),
      isModerator: user.isModeratorOfAnyCategory(callerUID),
      isFollowing: user.isFollowing(callerUID, uid),
      ips: user.getIPs(uid, 4),
      profile_menu: getProfileMenu(uid, callerUID),
      groups: groups.getUserGroups(stryMutAct_9fa48("5662") ? [] : (stryCov_9fa48("5662"), [uid])),
      sso: plugins.hooks.fire(stryMutAct_9fa48("5663") ? "" : (stryCov_9fa48("5663"), 'filter:auth.list'), stryMutAct_9fa48("5664") ? {} : (stryCov_9fa48("5664"), {
        uid: uid,
        associations: stryMutAct_9fa48("5665") ? ["Stryker was here"] : (stryCov_9fa48("5665"), [])
      })),
      canEdit: privileges.users.canEdit(callerUID, uid),
      canBanUser: privileges.users.canBanUser(callerUID, uid),
      canMuteUser: privileges.users.canMuteUser(callerUID, uid),
      isBlocked: user.blocks.is(uid, callerUID),
      canViewInfo: privileges.global.can(stryMutAct_9fa48("5666") ? "" : (stryCov_9fa48("5666"), 'view:users:info'), callerUID),
      hasPrivateChat: messaging.hasPrivateChat(callerUID, uid)
    }));
  }
}
async function getCounts(userData, callerUID) {
  if (stryMutAct_9fa48("5667")) {
    {}
  } else {
    stryCov_9fa48("5667");
    const {
      uid
    } = userData;
    const cids = await categories.getCidsByPrivilege(stryMutAct_9fa48("5668") ? "" : (stryCov_9fa48("5668"), 'categories:cid'), callerUID, stryMutAct_9fa48("5669") ? "" : (stryCov_9fa48("5669"), 'topics:read'));
    const promises = stryMutAct_9fa48("5670") ? {} : (stryCov_9fa48("5670"), {
      posts: db.sortedSetsCardSum(cids.map(stryMutAct_9fa48("5671") ? () => undefined : (stryCov_9fa48("5671"), c => stryMutAct_9fa48("5672") ? `` : (stryCov_9fa48("5672"), `cid:${c}:uid:${uid}:pids`)))),
      best: Promise.all(cids.map(stryMutAct_9fa48("5673") ? () => undefined : (stryCov_9fa48("5673"), async c => db.sortedSetCount(stryMutAct_9fa48("5674") ? `` : (stryCov_9fa48("5674"), `cid:${c}:uid:${uid}:pids:votes`), 1, stryMutAct_9fa48("5675") ? "" : (stryCov_9fa48("5675"), '+inf'))))),
      controversial: Promise.all(cids.map(stryMutAct_9fa48("5676") ? () => undefined : (stryCov_9fa48("5676"), async c => db.sortedSetCount(stryMutAct_9fa48("5677") ? `` : (stryCov_9fa48("5677"), `cid:${c}:uid:${uid}:pids:votes`), stryMutAct_9fa48("5678") ? "" : (stryCov_9fa48("5678"), '-inf'), stryMutAct_9fa48("5679") ? +1 : (stryCov_9fa48("5679"), -1))))),
      topics: db.sortedSetsCardSum(cids.map(stryMutAct_9fa48("5680") ? () => undefined : (stryCov_9fa48("5680"), c => stryMutAct_9fa48("5681") ? `` : (stryCov_9fa48("5681"), `cid:${c}:uid:${uid}:tids`))))
    });
    if (stryMutAct_9fa48("5684") ? userData.isAdmin && userData.isSelf : stryMutAct_9fa48("5683") ? false : stryMutAct_9fa48("5682") ? true : (stryCov_9fa48("5682", "5683", "5684"), userData.isAdmin || userData.isSelf)) {
      if (stryMutAct_9fa48("5685")) {
        {}
      } else {
        stryCov_9fa48("5685");
        promises.ignored = db.sortedSetCard(stryMutAct_9fa48("5686") ? `` : (stryCov_9fa48("5686"), `uid:${uid}:ignored_tids`));
        promises.watched = db.sortedSetCard(stryMutAct_9fa48("5687") ? `` : (stryCov_9fa48("5687"), `uid:${uid}:followed_tids`));
        promises.upvoted = db.sortedSetCard(stryMutAct_9fa48("5688") ? `` : (stryCov_9fa48("5688"), `uid:${uid}:upvote`));
        promises.downvoted = db.sortedSetCard(stryMutAct_9fa48("5689") ? `` : (stryCov_9fa48("5689"), `uid:${uid}:downvote`));
        promises.bookmarks = db.sortedSetCard(stryMutAct_9fa48("5690") ? `` : (stryCov_9fa48("5690"), `uid:${uid}:bookmarks`));
        promises.uploaded = db.sortedSetCard(stryMutAct_9fa48("5691") ? `` : (stryCov_9fa48("5691"), `uid:${uid}:uploads`));
        promises.categoriesWatched = user.getWatchedCategories(uid);
        promises.blocks = user.getUserField(userData.uid, stryMutAct_9fa48("5692") ? "" : (stryCov_9fa48("5692"), 'blocksCount'));
      }
    }
    const counts = await utils.promiseParallel(promises);
    counts.best = counts.best.reduce(stryMutAct_9fa48("5693") ? () => undefined : (stryCov_9fa48("5693"), (sum, count) => stryMutAct_9fa48("5694") ? sum - count : (stryCov_9fa48("5694"), sum + count)), 0);
    counts.controversial = counts.controversial.reduce(stryMutAct_9fa48("5695") ? () => undefined : (stryCov_9fa48("5695"), (sum, count) => stryMutAct_9fa48("5696") ? sum - count : (stryCov_9fa48("5696"), sum + count)), 0);
    counts.categoriesWatched = stryMutAct_9fa48("5699") ? counts.categoriesWatched || counts.categoriesWatched.length : stryMutAct_9fa48("5698") ? false : stryMutAct_9fa48("5697") ? true : (stryCov_9fa48("5697", "5698", "5699"), counts.categoriesWatched && counts.categoriesWatched.length);
    counts.groups = userData.groups.length;
    counts.following = userData.followingCount;
    counts.followers = userData.followerCount;
    userData.blocksCount = stryMutAct_9fa48("5702") ? counts.blocks && 0 : stryMutAct_9fa48("5701") ? false : stryMutAct_9fa48("5700") ? true : (stryCov_9fa48("5700", "5701", "5702"), counts.blocks || 0); // for backwards compatibility, remove in 1.16.0
    userData.counts = counts;
  }
}
async function getProfileMenu(uid, callerUID) {
  if (stryMutAct_9fa48("5703")) {
    {}
  } else {
    stryCov_9fa48("5703");
    const links = stryMutAct_9fa48("5704") ? [] : (stryCov_9fa48("5704"), [stryMutAct_9fa48("5705") ? {} : (stryCov_9fa48("5705"), {
      id: stryMutAct_9fa48("5706") ? "" : (stryCov_9fa48("5706"), 'info'),
      route: stryMutAct_9fa48("5707") ? "" : (stryCov_9fa48("5707"), 'info'),
      name: stryMutAct_9fa48("5708") ? "" : (stryCov_9fa48("5708"), '[[user:account_info]]'),
      icon: stryMutAct_9fa48("5709") ? "" : (stryCov_9fa48("5709"), 'fa-info'),
      visibility: stryMutAct_9fa48("5710") ? {} : (stryCov_9fa48("5710"), {
        self: stryMutAct_9fa48("5711") ? true : (stryCov_9fa48("5711"), false),
        other: stryMutAct_9fa48("5712") ? true : (stryCov_9fa48("5712"), false),
        moderator: stryMutAct_9fa48("5713") ? true : (stryCov_9fa48("5713"), false),
        globalMod: stryMutAct_9fa48("5714") ? true : (stryCov_9fa48("5714"), false),
        admin: stryMutAct_9fa48("5715") ? false : (stryCov_9fa48("5715"), true),
        canViewInfo: stryMutAct_9fa48("5716") ? false : (stryCov_9fa48("5716"), true)
      })
    }), stryMutAct_9fa48("5717") ? {} : (stryCov_9fa48("5717"), {
      id: stryMutAct_9fa48("5718") ? "" : (stryCov_9fa48("5718"), 'sessions'),
      route: stryMutAct_9fa48("5719") ? "" : (stryCov_9fa48("5719"), 'sessions'),
      name: stryMutAct_9fa48("5720") ? "" : (stryCov_9fa48("5720"), '[[pages:account/sessions]]'),
      icon: stryMutAct_9fa48("5721") ? "" : (stryCov_9fa48("5721"), 'fa-group'),
      visibility: stryMutAct_9fa48("5722") ? {} : (stryCov_9fa48("5722"), {
        self: stryMutAct_9fa48("5723") ? false : (stryCov_9fa48("5723"), true),
        other: stryMutAct_9fa48("5724") ? true : (stryCov_9fa48("5724"), false),
        moderator: stryMutAct_9fa48("5725") ? true : (stryCov_9fa48("5725"), false),
        globalMod: stryMutAct_9fa48("5726") ? true : (stryCov_9fa48("5726"), false),
        admin: stryMutAct_9fa48("5727") ? true : (stryCov_9fa48("5727"), false),
        canViewInfo: stryMutAct_9fa48("5728") ? true : (stryCov_9fa48("5728"), false)
      })
    })]);
    if (stryMutAct_9fa48("5730") ? false : stryMutAct_9fa48("5729") ? true : (stryCov_9fa48("5729", "5730"), meta.config.gdpr_enabled)) {
      if (stryMutAct_9fa48("5731")) {
        {}
      } else {
        stryCov_9fa48("5731");
        links.push(stryMutAct_9fa48("5732") ? {} : (stryCov_9fa48("5732"), {
          id: stryMutAct_9fa48("5733") ? "" : (stryCov_9fa48("5733"), 'consent'),
          route: stryMutAct_9fa48("5734") ? "" : (stryCov_9fa48("5734"), 'consent'),
          name: stryMutAct_9fa48("5735") ? "" : (stryCov_9fa48("5735"), '[[user:consent.title]]'),
          icon: stryMutAct_9fa48("5736") ? "" : (stryCov_9fa48("5736"), 'fa-thumbs-o-up'),
          visibility: stryMutAct_9fa48("5737") ? {} : (stryCov_9fa48("5737"), {
            self: stryMutAct_9fa48("5738") ? false : (stryCov_9fa48("5738"), true),
            other: stryMutAct_9fa48("5739") ? true : (stryCov_9fa48("5739"), false),
            moderator: stryMutAct_9fa48("5740") ? true : (stryCov_9fa48("5740"), false),
            globalMod: stryMutAct_9fa48("5741") ? true : (stryCov_9fa48("5741"), false),
            admin: stryMutAct_9fa48("5742") ? true : (stryCov_9fa48("5742"), false),
            canViewInfo: stryMutAct_9fa48("5743") ? true : (stryCov_9fa48("5743"), false)
          })
        }));
      }
    }
    return await plugins.hooks.fire(stryMutAct_9fa48("5744") ? "" : (stryCov_9fa48("5744"), 'filter:user.profileMenu'), stryMutAct_9fa48("5745") ? {} : (stryCov_9fa48("5745"), {
      uid: uid,
      callerUID: callerUID,
      links: links
    }));
  }
}
async function parseAboutMe(userData) {
  if (stryMutAct_9fa48("5746")) {
    {}
  } else {
    stryCov_9fa48("5746");
    if (stryMutAct_9fa48("5749") ? false : stryMutAct_9fa48("5748") ? true : stryMutAct_9fa48("5747") ? userData.aboutme : (stryCov_9fa48("5747", "5748", "5749"), !userData.aboutme)) {
      if (stryMutAct_9fa48("5750")) {
        {}
      } else {
        stryCov_9fa48("5750");
        userData.aboutme = stryMutAct_9fa48("5751") ? "Stryker was here!" : (stryCov_9fa48("5751"), '');
        userData.aboutmeParsed = stryMutAct_9fa48("5752") ? "Stryker was here!" : (stryCov_9fa48("5752"), '');
        return;
      }
    }
    userData.aboutme = validator.escape(String(stryMutAct_9fa48("5755") ? userData.aboutme && '' : stryMutAct_9fa48("5754") ? false : stryMutAct_9fa48("5753") ? true : (stryCov_9fa48("5753", "5754", "5755"), userData.aboutme || (stryMutAct_9fa48("5756") ? "Stryker was here!" : (stryCov_9fa48("5756"), '')))));
    const parsed = await plugins.hooks.fire(stryMutAct_9fa48("5757") ? "" : (stryCov_9fa48("5757"), 'filter:parse.aboutme'), userData.aboutme);
    userData.aboutme = translator.escape(userData.aboutme);
    userData.aboutmeParsed = translator.escape(parsed);
  }
}
function filterLinks(links, states) {
  if (stryMutAct_9fa48("5758")) {
    {}
  } else {
    stryCov_9fa48("5758");
    return stryMutAct_9fa48("5759") ? links : (stryCov_9fa48("5759"), links.filter((link, index) => {
      if (stryMutAct_9fa48("5760")) {
        {}
      } else {
        stryCov_9fa48("5760");
        // Default visibility
        link.visibility = stryMutAct_9fa48("5761") ? {} : (stryCov_9fa48("5761"), {
          self: stryMutAct_9fa48("5762") ? false : (stryCov_9fa48("5762"), true),
          other: stryMutAct_9fa48("5763") ? false : (stryCov_9fa48("5763"), true),
          moderator: stryMutAct_9fa48("5764") ? false : (stryCov_9fa48("5764"), true),
          globalMod: stryMutAct_9fa48("5765") ? false : (stryCov_9fa48("5765"), true),
          admin: stryMutAct_9fa48("5766") ? false : (stryCov_9fa48("5766"), true),
          canViewInfo: stryMutAct_9fa48("5767") ? false : (stryCov_9fa48("5767"), true),
          ...link.visibility
        });
        const permit = stryMutAct_9fa48("5768") ? Object.keys(states).every(state => states[state] && link.visibility[state]) : (stryCov_9fa48("5768"), Object.keys(states).some(stryMutAct_9fa48("5769") ? () => undefined : (stryCov_9fa48("5769"), state => stryMutAct_9fa48("5772") ? states[state] || link.visibility[state] : stryMutAct_9fa48("5771") ? false : stryMutAct_9fa48("5770") ? true : (stryCov_9fa48("5770", "5771", "5772"), states[state] && link.visibility[state]))));
        links[index].public = permit;
        return permit;
      }
    }));
  }
}
require('../../promisify')(helpers);