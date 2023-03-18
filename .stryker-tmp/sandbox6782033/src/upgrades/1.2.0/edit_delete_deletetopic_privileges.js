/* eslint-disable no-await-in-loop */
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
const db = require('../../database');
module.exports = stryMutAct_9fa48("44073") ? {} : (stryCov_9fa48("44073"), {
  name: stryMutAct_9fa48("44074") ? "" : (stryCov_9fa48("44074"), 'Granting edit/delete/delete topic on existing categories'),
  timestamp: Date.UTC(2016, 7, 7),
  method: async function () {
    if (stryMutAct_9fa48("44075")) {
      {}
    } else {
      stryCov_9fa48("44075");
      const groupsAPI = require('../../groups');
      const privilegesAPI = require('../../privileges');
      const cids = await db.getSortedSetRange(stryMutAct_9fa48("44076") ? "" : (stryCov_9fa48("44076"), 'categories:cid'), 0, stryMutAct_9fa48("44077") ? +1 : (stryCov_9fa48("44077"), -1));
      for (const cid of cids) {
        if (stryMutAct_9fa48("44078")) {
          {}
        } else {
          stryCov_9fa48("44078");
          const data = await privilegesAPI.categories.list(cid);
          const {
            groups,
            users
          } = data;
          for (const group of groups) {
            if (stryMutAct_9fa48("44079")) {
              {}
            } else {
              stryCov_9fa48("44079");
              if (stryMutAct_9fa48("44081") ? false : stryMutAct_9fa48("44080") ? true : (stryCov_9fa48("44080", "44081"), group.privileges[stryMutAct_9fa48("44082") ? "" : (stryCov_9fa48("44082"), 'groups:topics:reply')])) {
                if (stryMutAct_9fa48("44083")) {
                  {}
                } else {
                  stryCov_9fa48("44083");
                  await Promise.all(stryMutAct_9fa48("44084") ? [] : (stryCov_9fa48("44084"), [groupsAPI.join(stryMutAct_9fa48("44085") ? `` : (stryCov_9fa48("44085"), `cid:${cid}:privileges:groups:posts:edit`), group.name), groupsAPI.join(stryMutAct_9fa48("44086") ? `` : (stryCov_9fa48("44086"), `cid:${cid}:privileges:groups:posts:delete`), group.name)]));
                  winston.verbose(stryMutAct_9fa48("44087") ? `` : (stryCov_9fa48("44087"), `cid:${cid}:privileges:groups:posts:edit, cid:${cid}:privileges:groups:posts:delete granted to gid: ${group.name}`));
                }
              }
              if (stryMutAct_9fa48("44089") ? false : stryMutAct_9fa48("44088") ? true : (stryCov_9fa48("44088", "44089"), group.privileges[stryMutAct_9fa48("44090") ? "" : (stryCov_9fa48("44090"), 'groups:topics:create')])) {
                if (stryMutAct_9fa48("44091")) {
                  {}
                } else {
                  stryCov_9fa48("44091");
                  await groupsAPI.join(stryMutAct_9fa48("44092") ? `` : (stryCov_9fa48("44092"), `cid:${cid}:privileges:groups:topics:delete`), group.name);
                  winston.verbose(stryMutAct_9fa48("44093") ? `` : (stryCov_9fa48("44093"), `cid:${cid}:privileges:groups:topics:delete granted to gid: ${group.name}`));
                }
              }
            }
          }
          for (const user of users) {
            if (stryMutAct_9fa48("44094")) {
              {}
            } else {
              stryCov_9fa48("44094");
              if (stryMutAct_9fa48("44096") ? false : stryMutAct_9fa48("44095") ? true : (stryCov_9fa48("44095", "44096"), user.privileges[stryMutAct_9fa48("44097") ? "" : (stryCov_9fa48("44097"), 'topics:reply')])) {
                if (stryMutAct_9fa48("44098")) {
                  {}
                } else {
                  stryCov_9fa48("44098");
                  await Promise.all(stryMutAct_9fa48("44099") ? [] : (stryCov_9fa48("44099"), [groupsAPI.join(stryMutAct_9fa48("44100") ? `` : (stryCov_9fa48("44100"), `cid:${cid}:privileges:posts:edit`), user.uid), groupsAPI.join(stryMutAct_9fa48("44101") ? `` : (stryCov_9fa48("44101"), `cid:${cid}:privileges:posts:delete`), user.uid)]));
                  winston.verbose(stryMutAct_9fa48("44102") ? `` : (stryCov_9fa48("44102"), `cid:${cid}:privileges:posts:edit, cid:${cid}:privileges:posts:delete granted to uid: ${user.uid}`));
                }
              }
              if (stryMutAct_9fa48("44104") ? false : stryMutAct_9fa48("44103") ? true : (stryCov_9fa48("44103", "44104"), user.privileges[stryMutAct_9fa48("44105") ? "" : (stryCov_9fa48("44105"), 'topics:create')])) {
                if (stryMutAct_9fa48("44106")) {
                  {}
                } else {
                  stryCov_9fa48("44106");
                  await groupsAPI.join(stryMutAct_9fa48("44107") ? `` : (stryCov_9fa48("44107"), `cid:${cid}:privileges:topics:delete`), user.uid);
                  winston.verbose(stryMutAct_9fa48("44108") ? `` : (stryCov_9fa48("44108"), `cid:${cid}:privileges:topics:delete granted to uid: ${user.uid}`));
                }
              }
            }
          }
          winston.verbose(stryMutAct_9fa48("44109") ? `` : (stryCov_9fa48("44109"), `-- cid ${cid} upgraded`));
        }
      }
    }
  }
});