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
const db = require('../../database');
const user = require('../../user');
const helpers = require('../helpers');
const accountHelpers = require('./helpers');
const pagination = require('../../pagination');
const infoController = module.exports;
infoController.get = async function (req, res, next) {
  if (stryMutAct_9fa48("5773")) {
    {}
  } else {
    stryCov_9fa48("5773");
    const userData = await accountHelpers.getUserDataByUserSlug(req.params.userslug, req.uid, req.query);
    if (stryMutAct_9fa48("5776") ? false : stryMutAct_9fa48("5775") ? true : stryMutAct_9fa48("5774") ? userData : (stryCov_9fa48("5774", "5775", "5776"), !userData)) {
      if (stryMutAct_9fa48("5777")) {
        {}
      } else {
        stryCov_9fa48("5777");
        return next();
      }
    }
    const page = Math.max(1, stryMutAct_9fa48("5780") ? req.query.page && 1 : stryMutAct_9fa48("5779") ? false : stryMutAct_9fa48("5778") ? true : (stryCov_9fa48("5778", "5779", "5780"), req.query.page || 1));
    const itemsPerPage = 10;
    const start = stryMutAct_9fa48("5781") ? (page - 1) / itemsPerPage : (stryCov_9fa48("5781"), (stryMutAct_9fa48("5782") ? page + 1 : (stryCov_9fa48("5782"), page - 1)) * itemsPerPage);
    const stop = stryMutAct_9fa48("5783") ? start + itemsPerPage + 1 : (stryCov_9fa48("5783"), (stryMutAct_9fa48("5784") ? start - itemsPerPage : (stryCov_9fa48("5784"), start + itemsPerPage)) - 1);
    const [history, sessions, usernames, emails, notes] = await Promise.all(stryMutAct_9fa48("5785") ? [] : (stryCov_9fa48("5785"), [user.getModerationHistory(userData.uid), user.auth.getSessions(userData.uid, req.sessionID), user.getHistory(stryMutAct_9fa48("5786") ? `` : (stryCov_9fa48("5786"), `user:${userData.uid}:usernames`)), user.getHistory(stryMutAct_9fa48("5787") ? `` : (stryCov_9fa48("5787"), `user:${userData.uid}:emails`)), getNotes(userData, start, stop)]));
    userData.history = history;
    userData.sessions = sessions;
    userData.usernames = usernames;
    userData.emails = emails;
    if (stryMutAct_9fa48("5789") ? false : stryMutAct_9fa48("5788") ? true : (stryCov_9fa48("5788", "5789"), userData.isAdminOrGlobalModeratorOrModerator)) {
      if (stryMutAct_9fa48("5790")) {
        {}
      } else {
        stryCov_9fa48("5790");
        userData.moderationNotes = notes.notes;
        const pageCount = Math.ceil(stryMutAct_9fa48("5791") ? notes.count * itemsPerPage : (stryCov_9fa48("5791"), notes.count / itemsPerPage));
        userData.pagination = pagination.create(page, pageCount, req.query);
      }
    }
    userData.title = stryMutAct_9fa48("5792") ? "" : (stryCov_9fa48("5792"), '[[pages:account/info]]');
    userData.breadcrumbs = helpers.buildBreadcrumbs(stryMutAct_9fa48("5793") ? [] : (stryCov_9fa48("5793"), [stryMutAct_9fa48("5794") ? {} : (stryCov_9fa48("5794"), {
      text: userData.username,
      url: stryMutAct_9fa48("5795") ? `` : (stryCov_9fa48("5795"), `/user/${userData.userslug}`)
    }), stryMutAct_9fa48("5796") ? {} : (stryCov_9fa48("5796"), {
      text: stryMutAct_9fa48("5797") ? "" : (stryCov_9fa48("5797"), '[[user:account_info]]')
    })]));
    res.render(stryMutAct_9fa48("5798") ? "" : (stryCov_9fa48("5798"), 'account/info'), userData);
  }
};
async function getNotes(userData, start, stop) {
  if (stryMutAct_9fa48("5799")) {
    {}
  } else {
    stryCov_9fa48("5799");
    if (stryMutAct_9fa48("5802") ? false : stryMutAct_9fa48("5801") ? true : stryMutAct_9fa48("5800") ? userData.isAdminOrGlobalModeratorOrModerator : (stryCov_9fa48("5800", "5801", "5802"), !userData.isAdminOrGlobalModeratorOrModerator)) {
      if (stryMutAct_9fa48("5803")) {
        {}
      } else {
        stryCov_9fa48("5803");
        return;
      }
    }
    const [notes, count] = await Promise.all(stryMutAct_9fa48("5804") ? [] : (stryCov_9fa48("5804"), [user.getModerationNotes(userData.uid, start, stop), db.sortedSetCard(stryMutAct_9fa48("5805") ? `` : (stryCov_9fa48("5805"), `uid:${userData.uid}:moderation:notes`))]));
    return stryMutAct_9fa48("5806") ? {} : (stryCov_9fa48("5806"), {
      notes: notes,
      count: count
    });
  }
}