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
const batch = require('../../batch');
const user = require('../../user');
const groups = require('../../groups');
const meta = require('../../meta');
const privileges = require('../../privileges');
const now = Date.now();
module.exports = stryMutAct_9fa48("43527") ? {} : (stryCov_9fa48("43527"), {
  name: stryMutAct_9fa48("43528") ? "" : (stryCov_9fa48("43528"), 'Create verified/unverified user groups'),
  timestamp: Date.UTC(2020, 9, 13),
  method: async function () {
    if (stryMutAct_9fa48("43529")) {
      {}
    } else {
      stryCov_9fa48("43529");
      const {
        progress
      } = this;
      const maxGroupLength = meta.config.maximumGroupNameLength;
      meta.config.maximumGroupNameLength = 30;
      const timestamp = await db.getObjectField(stryMutAct_9fa48("43530") ? "" : (stryCov_9fa48("43530"), 'group:administrators'), stryMutAct_9fa48("43531") ? "" : (stryCov_9fa48("43531"), 'timestamp'));
      const verifiedExists = await groups.exists(stryMutAct_9fa48("43532") ? "" : (stryCov_9fa48("43532"), 'verified-users'));
      if (stryMutAct_9fa48("43535") ? false : stryMutAct_9fa48("43534") ? true : stryMutAct_9fa48("43533") ? verifiedExists : (stryCov_9fa48("43533", "43534", "43535"), !verifiedExists)) {
        if (stryMutAct_9fa48("43536")) {
          {}
        } else {
          stryCov_9fa48("43536");
          await groups.create(stryMutAct_9fa48("43537") ? {} : (stryCov_9fa48("43537"), {
            name: stryMutAct_9fa48("43538") ? "" : (stryCov_9fa48("43538"), 'verified-users'),
            hidden: 1,
            private: 1,
            system: 1,
            disableLeave: 1,
            disableJoinRequests: 1,
            timestamp: stryMutAct_9fa48("43539") ? timestamp - 1 : (stryCov_9fa48("43539"), timestamp + 1)
          }));
        }
      }
      const unverifiedExists = await groups.exists(stryMutAct_9fa48("43540") ? "" : (stryCov_9fa48("43540"), 'unverified-users'));
      if (stryMutAct_9fa48("43543") ? false : stryMutAct_9fa48("43542") ? true : stryMutAct_9fa48("43541") ? unverifiedExists : (stryCov_9fa48("43541", "43542", "43543"), !unverifiedExists)) {
        if (stryMutAct_9fa48("43544")) {
          {}
        } else {
          stryCov_9fa48("43544");
          await groups.create(stryMutAct_9fa48("43545") ? {} : (stryCov_9fa48("43545"), {
            name: stryMutAct_9fa48("43546") ? "" : (stryCov_9fa48("43546"), 'unverified-users'),
            hidden: 1,
            private: 1,
            system: 1,
            disableLeave: 1,
            disableJoinRequests: 1,
            timestamp: stryMutAct_9fa48("43547") ? timestamp - 1 : (stryCov_9fa48("43547"), timestamp + 1)
          }));
        }
      }
      // restore setting
      meta.config.maximumGroupNameLength = maxGroupLength;
      await batch.processSortedSet(stryMutAct_9fa48("43548") ? "" : (stryCov_9fa48("43548"), 'users:joindate'), async uids => {
        if (stryMutAct_9fa48("43549")) {
          {}
        } else {
          stryCov_9fa48("43549");
          progress.incr(uids.length);
          const userData = await user.getUsersFields(uids, stryMutAct_9fa48("43550") ? [] : (stryCov_9fa48("43550"), [stryMutAct_9fa48("43551") ? "" : (stryCov_9fa48("43551"), 'uid'), stryMutAct_9fa48("43552") ? "" : (stryCov_9fa48("43552"), 'email:confirmed')]));
          const verified = stryMutAct_9fa48("43553") ? userData : (stryCov_9fa48("43553"), userData.filter(stryMutAct_9fa48("43554") ? () => undefined : (stryCov_9fa48("43554"), u => stryMutAct_9fa48("43557") ? parseInt(u['email:confirmed'], 10) !== 1 : stryMutAct_9fa48("43556") ? false : stryMutAct_9fa48("43555") ? true : (stryCov_9fa48("43555", "43556", "43557"), parseInt(u[stryMutAct_9fa48("43558") ? "" : (stryCov_9fa48("43558"), 'email:confirmed')], 10) === 1))));
          const unverified = stryMutAct_9fa48("43559") ? userData : (stryCov_9fa48("43559"), userData.filter(stryMutAct_9fa48("43560") ? () => undefined : (stryCov_9fa48("43560"), u => stryMutAct_9fa48("43563") ? parseInt(u['email:confirmed'], 10) === 1 : stryMutAct_9fa48("43562") ? false : stryMutAct_9fa48("43561") ? true : (stryCov_9fa48("43561", "43562", "43563"), parseInt(u[stryMutAct_9fa48("43564") ? "" : (stryCov_9fa48("43564"), 'email:confirmed')], 10) !== 1))));
          await db.sortedSetAdd(stryMutAct_9fa48("43565") ? "" : (stryCov_9fa48("43565"), 'group:verified-users:members'), verified.map(stryMutAct_9fa48("43566") ? () => undefined : (stryCov_9fa48("43566"), () => now)), verified.map(stryMutAct_9fa48("43567") ? () => undefined : (stryCov_9fa48("43567"), u => u.uid)));
          await db.sortedSetAdd(stryMutAct_9fa48("43568") ? "" : (stryCov_9fa48("43568"), 'group:unverified-users:members'), unverified.map(stryMutAct_9fa48("43569") ? () => undefined : (stryCov_9fa48("43569"), () => now)), unverified.map(stryMutAct_9fa48("43570") ? () => undefined : (stryCov_9fa48("43570"), u => u.uid)));
        }
      }, stryMutAct_9fa48("43571") ? {} : (stryCov_9fa48("43571"), {
        batch: 500,
        progress: this.progress
      }));
      await db.delete(stryMutAct_9fa48("43572") ? "" : (stryCov_9fa48("43572"), 'users:notvalidated'));
      await updatePrivilges();
      const verifiedCount = await db.sortedSetCard(stryMutAct_9fa48("43573") ? "" : (stryCov_9fa48("43573"), 'group:verified-users:members'));
      const unverifiedCount = await db.sortedSetCard(stryMutAct_9fa48("43574") ? "" : (stryCov_9fa48("43574"), 'group:unverified-users:members'));
      await db.setObjectField(stryMutAct_9fa48("43575") ? "" : (stryCov_9fa48("43575"), 'group:verified-users'), stryMutAct_9fa48("43576") ? "" : (stryCov_9fa48("43576"), 'memberCount'), verifiedCount);
      await db.setObjectField(stryMutAct_9fa48("43577") ? "" : (stryCov_9fa48("43577"), 'group:unverified-users'), stryMutAct_9fa48("43578") ? "" : (stryCov_9fa48("43578"), 'memberCount'), unverifiedCount);
    }
  }
});
async function updatePrivilges() {
  if (stryMutAct_9fa48("43579")) {
    {}
  } else {
    stryCov_9fa48("43579");
    // if email confirmation is required
    //   give chat, posting privs to "verified-users" group
    //   remove chat, posting privs from "registered-users" group

    // This config property has been removed from v1.18.0+, but is still present in old datasets
    if (stryMutAct_9fa48("43581") ? false : stryMutAct_9fa48("43580") ? true : (stryCov_9fa48("43580", "43581"), meta.config.requireEmailConfirmation)) {
      if (stryMutAct_9fa48("43582")) {
        {}
      } else {
        stryCov_9fa48("43582");
        const cids = await db.getSortedSetRevRange(stryMutAct_9fa48("43583") ? "" : (stryCov_9fa48("43583"), 'categories:cid'), 0, stryMutAct_9fa48("43584") ? +1 : (stryCov_9fa48("43584"), -1));
        const canChat = await privileges.global.canGroup(stryMutAct_9fa48("43585") ? "" : (stryCov_9fa48("43585"), 'chat'), stryMutAct_9fa48("43586") ? "" : (stryCov_9fa48("43586"), 'registered-users'));
        if (stryMutAct_9fa48("43588") ? false : stryMutAct_9fa48("43587") ? true : (stryCov_9fa48("43587", "43588"), canChat)) {
          if (stryMutAct_9fa48("43589")) {
            {}
          } else {
            stryCov_9fa48("43589");
            await privileges.global.give(stryMutAct_9fa48("43590") ? [] : (stryCov_9fa48("43590"), [stryMutAct_9fa48("43591") ? "" : (stryCov_9fa48("43591"), 'groups:chat')]), stryMutAct_9fa48("43592") ? "" : (stryCov_9fa48("43592"), 'verified-users'));
            await privileges.global.rescind(stryMutAct_9fa48("43593") ? [] : (stryCov_9fa48("43593"), [stryMutAct_9fa48("43594") ? "" : (stryCov_9fa48("43594"), 'groups:chat')]), stryMutAct_9fa48("43595") ? "" : (stryCov_9fa48("43595"), 'registered-users'));
          }
        }
        for (const cid of cids) {
          if (stryMutAct_9fa48("43596")) {
            {}
          } else {
            stryCov_9fa48("43596");
            /* eslint-disable no-await-in-loop */
            const data = await privileges.categories.list(cid);
            const registeredUsersPrivs = data.groups.find(stryMutAct_9fa48("43597") ? () => undefined : (stryCov_9fa48("43597"), d => stryMutAct_9fa48("43600") ? d.name !== 'registered-users' : stryMutAct_9fa48("43599") ? false : stryMutAct_9fa48("43598") ? true : (stryCov_9fa48("43598", "43599", "43600"), d.name === (stryMutAct_9fa48("43601") ? "" : (stryCov_9fa48("43601"), 'registered-users'))))).privileges;
            if (stryMutAct_9fa48("43603") ? false : stryMutAct_9fa48("43602") ? true : (stryCov_9fa48("43602", "43603"), registeredUsersPrivs[stryMutAct_9fa48("43604") ? "" : (stryCov_9fa48("43604"), 'groups:topics:create')])) {
              if (stryMutAct_9fa48("43605")) {
                {}
              } else {
                stryCov_9fa48("43605");
                await privileges.categories.give(stryMutAct_9fa48("43606") ? [] : (stryCov_9fa48("43606"), [stryMutAct_9fa48("43607") ? "" : (stryCov_9fa48("43607"), 'groups:topics:create')]), cid, stryMutAct_9fa48("43608") ? "" : (stryCov_9fa48("43608"), 'verified-users'));
                await privileges.categories.rescind(stryMutAct_9fa48("43609") ? [] : (stryCov_9fa48("43609"), [stryMutAct_9fa48("43610") ? "" : (stryCov_9fa48("43610"), 'groups:topics:create')]), cid, stryMutAct_9fa48("43611") ? "" : (stryCov_9fa48("43611"), 'registered-users'));
              }
            }
            if (stryMutAct_9fa48("43613") ? false : stryMutAct_9fa48("43612") ? true : (stryCov_9fa48("43612", "43613"), registeredUsersPrivs[stryMutAct_9fa48("43614") ? "" : (stryCov_9fa48("43614"), 'groups:topics:reply')])) {
              if (stryMutAct_9fa48("43615")) {
                {}
              } else {
                stryCov_9fa48("43615");
                await privileges.categories.give(stryMutAct_9fa48("43616") ? [] : (stryCov_9fa48("43616"), [stryMutAct_9fa48("43617") ? "" : (stryCov_9fa48("43617"), 'groups:topics:reply')]), cid, stryMutAct_9fa48("43618") ? "" : (stryCov_9fa48("43618"), 'verified-users'));
                await privileges.categories.rescind(stryMutAct_9fa48("43619") ? [] : (stryCov_9fa48("43619"), [stryMutAct_9fa48("43620") ? "" : (stryCov_9fa48("43620"), 'groups:topics:reply')]), cid, stryMutAct_9fa48("43621") ? "" : (stryCov_9fa48("43621"), 'registered-users'));
              }
            }
          }
        }
      }
    }
  }
}