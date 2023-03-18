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
const privileges = require('../../privileges');
const groups = require('../../groups');
const db = require('../../database');
module.exports = stryMutAct_9fa48("42847") ? {} : (stryCov_9fa48("42847"), {
  name: stryMutAct_9fa48("42848") ? "" : (stryCov_9fa48("42848"), 'Give mods explicit privileges'),
  timestamp: Date.UTC(2019, 4, 28),
  method: async function () {
    if (stryMutAct_9fa48("42849")) {
      {}
    } else {
      stryCov_9fa48("42849");
      const defaultPrivileges = stryMutAct_9fa48("42850") ? [] : (stryCov_9fa48("42850"), [stryMutAct_9fa48("42851") ? "" : (stryCov_9fa48("42851"), 'find'), stryMutAct_9fa48("42852") ? "" : (stryCov_9fa48("42852"), 'read'), stryMutAct_9fa48("42853") ? "" : (stryCov_9fa48("42853"), 'topics:read'), stryMutAct_9fa48("42854") ? "" : (stryCov_9fa48("42854"), 'topics:create'), stryMutAct_9fa48("42855") ? "" : (stryCov_9fa48("42855"), 'topics:reply'), stryMutAct_9fa48("42856") ? "" : (stryCov_9fa48("42856"), 'topics:tag'), stryMutAct_9fa48("42857") ? "" : (stryCov_9fa48("42857"), 'posts:edit'), stryMutAct_9fa48("42858") ? "" : (stryCov_9fa48("42858"), 'posts:history'), stryMutAct_9fa48("42859") ? "" : (stryCov_9fa48("42859"), 'posts:delete'), stryMutAct_9fa48("42860") ? "" : (stryCov_9fa48("42860"), 'posts:upvote'), stryMutAct_9fa48("42861") ? "" : (stryCov_9fa48("42861"), 'posts:downvote'), stryMutAct_9fa48("42862") ? "" : (stryCov_9fa48("42862"), 'topics:delete')]);
      const modPrivileges = defaultPrivileges.concat(stryMutAct_9fa48("42863") ? [] : (stryCov_9fa48("42863"), [stryMutAct_9fa48("42864") ? "" : (stryCov_9fa48("42864"), 'posts:view_deleted'), stryMutAct_9fa48("42865") ? "" : (stryCov_9fa48("42865"), 'purge')]));
      const globalModPrivs = stryMutAct_9fa48("42866") ? [] : (stryCov_9fa48("42866"), [stryMutAct_9fa48("42867") ? "" : (stryCov_9fa48("42867"), 'groups:chat'), stryMutAct_9fa48("42868") ? "" : (stryCov_9fa48("42868"), 'groups:upload:post:image'), stryMutAct_9fa48("42869") ? "" : (stryCov_9fa48("42869"), 'groups:upload:post:file'), stryMutAct_9fa48("42870") ? "" : (stryCov_9fa48("42870"), 'groups:signature'), stryMutAct_9fa48("42871") ? "" : (stryCov_9fa48("42871"), 'groups:ban'), stryMutAct_9fa48("42872") ? "" : (stryCov_9fa48("42872"), 'groups:search:content'), stryMutAct_9fa48("42873") ? "" : (stryCov_9fa48("42873"), 'groups:search:users'), stryMutAct_9fa48("42874") ? "" : (stryCov_9fa48("42874"), 'groups:search:tags'), stryMutAct_9fa48("42875") ? "" : (stryCov_9fa48("42875"), 'groups:view:users'), stryMutAct_9fa48("42876") ? "" : (stryCov_9fa48("42876"), 'groups:view:tags'), stryMutAct_9fa48("42877") ? "" : (stryCov_9fa48("42877"), 'groups:view:groups'), stryMutAct_9fa48("42878") ? "" : (stryCov_9fa48("42878"), 'groups:local:login')]);
      const cids = await db.getSortedSetRevRange(stryMutAct_9fa48("42879") ? "" : (stryCov_9fa48("42879"), 'categories:cid'), 0, stryMutAct_9fa48("42880") ? +1 : (stryCov_9fa48("42880"), -1));
      for (const cid of cids) {
        if (stryMutAct_9fa48("42881")) {
          {}
        } else {
          stryCov_9fa48("42881");
          await givePrivsToModerators(cid, stryMutAct_9fa48("42882") ? "Stryker was here!" : (stryCov_9fa48("42882"), ''));
          await givePrivsToModerators(cid, stryMutAct_9fa48("42883") ? "" : (stryCov_9fa48("42883"), 'groups:'));
          await privileges.categories.give(modPrivileges.map(stryMutAct_9fa48("42884") ? () => undefined : (stryCov_9fa48("42884"), p => stryMutAct_9fa48("42885") ? `` : (stryCov_9fa48("42885"), `groups:${p}`))), cid, stryMutAct_9fa48("42886") ? [] : (stryCov_9fa48("42886"), [stryMutAct_9fa48("42887") ? "" : (stryCov_9fa48("42887"), 'Global Moderators')]));
        }
      }
      await privileges.global.give(globalModPrivs, stryMutAct_9fa48("42888") ? "" : (stryCov_9fa48("42888"), 'Global Moderators'));
      async function givePrivsToModerators(cid, groupPrefix) {
        if (stryMutAct_9fa48("42889")) {
          {}
        } else {
          stryCov_9fa48("42889");
          const privGroups = modPrivileges.map(stryMutAct_9fa48("42890") ? () => undefined : (stryCov_9fa48("42890"), priv => stryMutAct_9fa48("42891") ? `` : (stryCov_9fa48("42891"), `cid:${cid}:privileges:${groupPrefix}${priv}`)));
          const members = await db.getSortedSetRevRange(stryMutAct_9fa48("42892") ? `` : (stryCov_9fa48("42892"), `group:cid:${cid}:privileges:${groupPrefix}moderate:members`), 0, stryMutAct_9fa48("42893") ? +1 : (stryCov_9fa48("42893"), -1));
          for (const member of members) {
            if (stryMutAct_9fa48("42894")) {
              {}
            } else {
              stryCov_9fa48("42894");
              await groups.join(privGroups, member);
            }
          }
        }
      }
    }
  }
});