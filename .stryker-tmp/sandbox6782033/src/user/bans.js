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
const meta = require('../meta');
const emailer = require('../emailer');
const db = require('../database');
const groups = require('../groups');
const privileges = require('../privileges');
module.exports = function (User) {
  if (stryMutAct_9fa48("45441")) {
    {}
  } else {
    stryCov_9fa48("45441");
    User.bans = {};
    User.bans.ban = async function (uid, until, reason) {
      if (stryMutAct_9fa48("45442")) {
        {}
      } else {
        stryCov_9fa48("45442");
        // "until" (optional) is unix timestamp in milliseconds
        // "reason" (optional) is a string
        until = stryMutAct_9fa48("45445") ? until && 0 : stryMutAct_9fa48("45444") ? false : stryMutAct_9fa48("45443") ? true : (stryCov_9fa48("45443", "45444", "45445"), until || 0);
        reason = stryMutAct_9fa48("45448") ? reason && '' : stryMutAct_9fa48("45447") ? false : stryMutAct_9fa48("45446") ? true : (stryCov_9fa48("45446", "45447", "45448"), reason || (stryMutAct_9fa48("45449") ? "Stryker was here!" : (stryCov_9fa48("45449"), '')));
        const now = Date.now();
        until = parseInt(until, 10);
        if (stryMutAct_9fa48("45451") ? false : stryMutAct_9fa48("45450") ? true : (stryCov_9fa48("45450", "45451"), isNaN(until))) {
          if (stryMutAct_9fa48("45452")) {
            {}
          } else {
            stryCov_9fa48("45452");
            throw new Error(stryMutAct_9fa48("45453") ? "" : (stryCov_9fa48("45453"), '[[error:ban-expiry-missing]]'));
          }
        }
        const banKey = stryMutAct_9fa48("45454") ? `` : (stryCov_9fa48("45454"), `uid:${uid}:ban:${now}`);
        const banData = stryMutAct_9fa48("45455") ? {} : (stryCov_9fa48("45455"), {
          uid: uid,
          timestamp: now,
          expire: (stryMutAct_9fa48("45459") ? until <= now : stryMutAct_9fa48("45458") ? until >= now : stryMutAct_9fa48("45457") ? false : stryMutAct_9fa48("45456") ? true : (stryCov_9fa48("45456", "45457", "45458", "45459"), until > now)) ? until : 0
        });
        if (stryMutAct_9fa48("45461") ? false : stryMutAct_9fa48("45460") ? true : (stryCov_9fa48("45460", "45461"), reason)) {
          if (stryMutAct_9fa48("45462")) {
            {}
          } else {
            stryCov_9fa48("45462");
            banData.reason = reason;
          }
        }

        // Leaving all other system groups to have privileges constrained to the "banned-users" group
        const systemGroups = stryMutAct_9fa48("45463") ? groups.systemGroups : (stryCov_9fa48("45463"), groups.systemGroups.filter(stryMutAct_9fa48("45464") ? () => undefined : (stryCov_9fa48("45464"), group => stryMutAct_9fa48("45467") ? group === groups.BANNED_USERS : stryMutAct_9fa48("45466") ? false : stryMutAct_9fa48("45465") ? true : (stryCov_9fa48("45465", "45466", "45467"), group !== groups.BANNED_USERS))));
        await groups.leave(systemGroups, uid);
        await groups.join(groups.BANNED_USERS, uid);
        await db.sortedSetAdd(stryMutAct_9fa48("45468") ? "" : (stryCov_9fa48("45468"), 'users:banned'), now, uid);
        await db.sortedSetAdd(stryMutAct_9fa48("45469") ? `` : (stryCov_9fa48("45469"), `uid:${uid}:bans:timestamp`), now, banKey);
        await db.setObject(banKey, banData);
        await User.setUserField(uid, stryMutAct_9fa48("45470") ? "" : (stryCov_9fa48("45470"), 'banned:expire'), banData.expire);
        if (stryMutAct_9fa48("45474") ? until <= now : stryMutAct_9fa48("45473") ? until >= now : stryMutAct_9fa48("45472") ? false : stryMutAct_9fa48("45471") ? true : (stryCov_9fa48("45471", "45472", "45473", "45474"), until > now)) {
          if (stryMutAct_9fa48("45475")) {
            {}
          } else {
            stryCov_9fa48("45475");
            await db.sortedSetAdd(stryMutAct_9fa48("45476") ? "" : (stryCov_9fa48("45476"), 'users:banned:expire'), until, uid);
          }
        } else {
          if (stryMutAct_9fa48("45477")) {
            {}
          } else {
            stryCov_9fa48("45477");
            await db.sortedSetRemove(stryMutAct_9fa48("45478") ? "" : (stryCov_9fa48("45478"), 'users:banned:expire'), uid);
          }
        }

        // Email notification of ban
        const username = await User.getUserField(uid, stryMutAct_9fa48("45479") ? "" : (stryCov_9fa48("45479"), 'username'));
        const siteTitle = stryMutAct_9fa48("45482") ? meta.config.title && 'NodeBB' : stryMutAct_9fa48("45481") ? false : stryMutAct_9fa48("45480") ? true : (stryCov_9fa48("45480", "45481", "45482"), meta.config.title || (stryMutAct_9fa48("45483") ? "" : (stryCov_9fa48("45483"), 'NodeBB')));
        const data = stryMutAct_9fa48("45484") ? {} : (stryCov_9fa48("45484"), {
          subject: stryMutAct_9fa48("45485") ? `` : (stryCov_9fa48("45485"), `[[email:banned.subject, ${siteTitle}]]`),
          username: username,
          until: until ? new Date(until).toUTCString().replace(/,/g, stryMutAct_9fa48("45486") ? "" : (stryCov_9fa48("45486"), '\\,')) : stryMutAct_9fa48("45487") ? true : (stryCov_9fa48("45487"), false),
          reason: reason
        });
        await emailer.send(stryMutAct_9fa48("45488") ? "" : (stryCov_9fa48("45488"), 'banned'), uid, data).catch(stryMutAct_9fa48("45489") ? () => undefined : (stryCov_9fa48("45489"), err => winston.error(stryMutAct_9fa48("45490") ? `` : (stryCov_9fa48("45490"), `[emailer.send] ${err.stack}`))));
        return banData;
      }
    };
    User.bans.unban = async function (uids) {
      if (stryMutAct_9fa48("45491")) {
        {}
      } else {
        stryCov_9fa48("45491");
        uids = Array.isArray(uids) ? uids : stryMutAct_9fa48("45492") ? [] : (stryCov_9fa48("45492"), [uids]);
        const userData = await User.getUsersFields(uids, stryMutAct_9fa48("45493") ? [] : (stryCov_9fa48("45493"), [stryMutAct_9fa48("45494") ? "" : (stryCov_9fa48("45494"), 'email:confirmed')]));
        await db.setObject(uids.map(stryMutAct_9fa48("45495") ? () => undefined : (stryCov_9fa48("45495"), uid => stryMutAct_9fa48("45496") ? `` : (stryCov_9fa48("45496"), `user:${uid}`))), stryMutAct_9fa48("45497") ? {} : (stryCov_9fa48("45497"), {
          'banned:expire': 0
        }));

        /* eslint-disable no-await-in-loop */
        for (const user of userData) {
          if (stryMutAct_9fa48("45498")) {
            {}
          } else {
            stryCov_9fa48("45498");
            const systemGroupsToJoin = stryMutAct_9fa48("45499") ? [] : (stryCov_9fa48("45499"), [stryMutAct_9fa48("45500") ? "" : (stryCov_9fa48("45500"), 'registered-users'), (stryMutAct_9fa48("45503") ? parseInt(user['email:confirmed'], 10) !== 1 : stryMutAct_9fa48("45502") ? false : stryMutAct_9fa48("45501") ? true : (stryCov_9fa48("45501", "45502", "45503"), parseInt(user[stryMutAct_9fa48("45504") ? "" : (stryCov_9fa48("45504"), 'email:confirmed')], 10) === 1)) ? stryMutAct_9fa48("45505") ? "" : (stryCov_9fa48("45505"), 'verified-users') : stryMutAct_9fa48("45506") ? "" : (stryCov_9fa48("45506"), 'unverified-users')]);
            await groups.leave(groups.BANNED_USERS, user.uid);
            // An unbanned user would lost its previous "Global Moderator" status
            await groups.join(systemGroupsToJoin, user.uid);
          }
        }
        await db.sortedSetRemove(stryMutAct_9fa48("45507") ? [] : (stryCov_9fa48("45507"), [stryMutAct_9fa48("45508") ? "" : (stryCov_9fa48("45508"), 'users:banned'), stryMutAct_9fa48("45509") ? "" : (stryCov_9fa48("45509"), 'users:banned:expire')]), uids);
      }
    };
    User.bans.isBanned = async function (uids) {
      if (stryMutAct_9fa48("45510")) {
        {}
      } else {
        stryCov_9fa48("45510");
        const isArray = Array.isArray(uids);
        uids = isArray ? uids : stryMutAct_9fa48("45511") ? [] : (stryCov_9fa48("45511"), [uids]);
        const result = await User.bans.unbanIfExpired(uids);
        return isArray ? result.map(stryMutAct_9fa48("45512") ? () => undefined : (stryCov_9fa48("45512"), r => r.banned)) : result[0].banned;
      }
    };
    User.bans.canLoginIfBanned = async function (uid) {
      if (stryMutAct_9fa48("45513")) {
        {}
      } else {
        stryCov_9fa48("45513");
        let canLogin = stryMutAct_9fa48("45514") ? false : (stryCov_9fa48("45514"), true);
        const {
          banned
        } = (await User.bans.unbanIfExpired(stryMutAct_9fa48("45515") ? [] : (stryCov_9fa48("45515"), [uid])))[0];
        // Group privilege overshadows individual one
        if (stryMutAct_9fa48("45517") ? false : stryMutAct_9fa48("45516") ? true : (stryCov_9fa48("45516", "45517"), banned)) {
          if (stryMutAct_9fa48("45518")) {
            {}
          } else {
            stryCov_9fa48("45518");
            canLogin = await privileges.global.canGroup(stryMutAct_9fa48("45519") ? "" : (stryCov_9fa48("45519"), 'local:login'), groups.BANNED_USERS);
          }
        }
        if (stryMutAct_9fa48("45522") ? banned || !canLogin : stryMutAct_9fa48("45521") ? false : stryMutAct_9fa48("45520") ? true : (stryCov_9fa48("45520", "45521", "45522"), banned && (stryMutAct_9fa48("45523") ? canLogin : (stryCov_9fa48("45523"), !canLogin)))) {
          if (stryMutAct_9fa48("45524")) {
            {}
          } else {
            stryCov_9fa48("45524");
            // Checking a single privilege of user
            canLogin = await groups.isMember(uid, stryMutAct_9fa48("45525") ? "" : (stryCov_9fa48("45525"), 'cid:0:privileges:local:login'));
          }
        }
        return canLogin;
      }
    };
    User.bans.unbanIfExpired = async function (uids) {
      if (stryMutAct_9fa48("45526")) {
        {}
      } else {
        stryCov_9fa48("45526");
        // loading user data will unban if it has expired -barisu
        const userData = await User.getUsersFields(uids, stryMutAct_9fa48("45527") ? [] : (stryCov_9fa48("45527"), [stryMutAct_9fa48("45528") ? "" : (stryCov_9fa48("45528"), 'banned:expire')]));
        return User.bans.calcExpiredFromUserData(userData);
      }
    };
    User.bans.calcExpiredFromUserData = async function (userData) {
      if (stryMutAct_9fa48("45529")) {
        {}
      } else {
        stryCov_9fa48("45529");
        const isArray = Array.isArray(userData);
        userData = isArray ? userData : stryMutAct_9fa48("45530") ? [] : (stryCov_9fa48("45530"), [userData]);
        const banned = await groups.isMembers(userData.map(stryMutAct_9fa48("45531") ? () => undefined : (stryCov_9fa48("45531"), u => u.uid)), groups.BANNED_USERS);
        userData = userData.map(stryMutAct_9fa48("45532") ? () => undefined : (stryCov_9fa48("45532"), (userData, index) => stryMutAct_9fa48("45533") ? {} : (stryCov_9fa48("45533"), {
          banned: banned[index],
          'banned:expire': stryMutAct_9fa48("45536") ? userData || userData['banned:expire'] : stryMutAct_9fa48("45535") ? false : stryMutAct_9fa48("45534") ? true : (stryCov_9fa48("45534", "45535", "45536"), userData && userData[stryMutAct_9fa48("45537") ? "" : (stryCov_9fa48("45537"), 'banned:expire')]),
          banExpired: stryMutAct_9fa48("45540") ? userData && userData['banned:expire'] <= Date.now() || userData['banned:expire'] !== 0 : stryMutAct_9fa48("45539") ? false : stryMutAct_9fa48("45538") ? true : (stryCov_9fa48("45538", "45539", "45540"), (stryMutAct_9fa48("45542") ? userData || userData['banned:expire'] <= Date.now() : stryMutAct_9fa48("45541") ? true : (stryCov_9fa48("45541", "45542"), userData && (stryMutAct_9fa48("45545") ? userData['banned:expire'] > Date.now() : stryMutAct_9fa48("45544") ? userData['banned:expire'] < Date.now() : stryMutAct_9fa48("45543") ? true : (stryCov_9fa48("45543", "45544", "45545"), userData[stryMutAct_9fa48("45546") ? "" : (stryCov_9fa48("45546"), 'banned:expire')] <= Date.now())))) && (stryMutAct_9fa48("45548") ? userData['banned:expire'] === 0 : stryMutAct_9fa48("45547") ? true : (stryCov_9fa48("45547", "45548"), userData[stryMutAct_9fa48("45549") ? "" : (stryCov_9fa48("45549"), 'banned:expire')] !== 0)))
        })));
        return isArray ? userData : userData[0];
      }
    };
    User.bans.filterBanned = async function (uids) {
      if (stryMutAct_9fa48("45550")) {
        {}
      } else {
        stryCov_9fa48("45550");
        const isBanned = await User.bans.isBanned(uids);
        return stryMutAct_9fa48("45551") ? uids : (stryCov_9fa48("45551"), uids.filter(stryMutAct_9fa48("45552") ? () => undefined : (stryCov_9fa48("45552"), (uid, index) => stryMutAct_9fa48("45553") ? isBanned[index] : (stryCov_9fa48("45553"), !isBanned[index]))));
      }
    };
    User.bans.getReason = async function (uid) {
      if (stryMutAct_9fa48("45554")) {
        {}
      } else {
        stryCov_9fa48("45554");
        if (stryMutAct_9fa48("45558") ? parseInt(uid, 10) > 0 : stryMutAct_9fa48("45557") ? parseInt(uid, 10) < 0 : stryMutAct_9fa48("45556") ? false : stryMutAct_9fa48("45555") ? true : (stryCov_9fa48("45555", "45556", "45557", "45558"), parseInt(uid, 10) <= 0)) {
          if (stryMutAct_9fa48("45559")) {
            {}
          } else {
            stryCov_9fa48("45559");
            return stryMutAct_9fa48("45560") ? "Stryker was here!" : (stryCov_9fa48("45560"), '');
          }
        }
        const keys = await db.getSortedSetRevRange(stryMutAct_9fa48("45561") ? `` : (stryCov_9fa48("45561"), `uid:${uid}:bans:timestamp`), 0, 0);
        if (stryMutAct_9fa48("45564") ? false : stryMutAct_9fa48("45563") ? true : stryMutAct_9fa48("45562") ? keys.length : (stryCov_9fa48("45562", "45563", "45564"), !keys.length)) {
          if (stryMutAct_9fa48("45565")) {
            {}
          } else {
            stryCov_9fa48("45565");
            return stryMutAct_9fa48("45566") ? "Stryker was here!" : (stryCov_9fa48("45566"), '');
          }
        }
        const banObj = await db.getObject(keys[0]);
        return (stryMutAct_9fa48("45569") ? banObj || banObj.reason : stryMutAct_9fa48("45568") ? false : stryMutAct_9fa48("45567") ? true : (stryCov_9fa48("45567", "45568", "45569"), banObj && banObj.reason)) ? banObj.reason : stryMutAct_9fa48("45570") ? "Stryker was here!" : (stryCov_9fa48("45570"), '');
      }
    };
  }
};