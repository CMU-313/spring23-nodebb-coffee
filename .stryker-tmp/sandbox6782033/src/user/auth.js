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
const validator = require('validator');
const util = require('util');
const _ = require('lodash');
const db = require('../database');
const meta = require('../meta');
const events = require('../events');
const batch = require('../batch');
const utils = require('../utils');
module.exports = function (User) {
  if (stryMutAct_9fa48("45275")) {
    {}
  } else {
    stryCov_9fa48("45275");
    User.auth = {};
    User.auth.logAttempt = async function (uid, ip) {
      if (stryMutAct_9fa48("45276")) {
        {}
      } else {
        stryCov_9fa48("45276");
        if (stryMutAct_9fa48("45279") ? false : stryMutAct_9fa48("45278") ? true : stryMutAct_9fa48("45277") ? parseInt(uid, 10) > 0 : (stryCov_9fa48("45277", "45278", "45279"), !(stryMutAct_9fa48("45283") ? parseInt(uid, 10) <= 0 : stryMutAct_9fa48("45282") ? parseInt(uid, 10) >= 0 : stryMutAct_9fa48("45281") ? false : stryMutAct_9fa48("45280") ? true : (stryCov_9fa48("45280", "45281", "45282", "45283"), parseInt(uid, 10) > 0)))) {
          if (stryMutAct_9fa48("45284")) {
            {}
          } else {
            stryCov_9fa48("45284");
            return;
          }
        }
        const exists = await db.exists(stryMutAct_9fa48("45285") ? `` : (stryCov_9fa48("45285"), `lockout:${uid}`));
        if (stryMutAct_9fa48("45287") ? false : stryMutAct_9fa48("45286") ? true : (stryCov_9fa48("45286", "45287"), exists)) {
          if (stryMutAct_9fa48("45288")) {
            {}
          } else {
            stryCov_9fa48("45288");
            throw new Error(stryMutAct_9fa48("45289") ? "" : (stryCov_9fa48("45289"), '[[error:account-locked]]'));
          }
        }
        const attempts = await db.increment(stryMutAct_9fa48("45290") ? `` : (stryCov_9fa48("45290"), `loginAttempts:${uid}`));
        if (stryMutAct_9fa48("45294") ? attempts > meta.config.loginAttempts : stryMutAct_9fa48("45293") ? attempts < meta.config.loginAttempts : stryMutAct_9fa48("45292") ? false : stryMutAct_9fa48("45291") ? true : (stryCov_9fa48("45291", "45292", "45293", "45294"), attempts <= meta.config.loginAttempts)) {
          if (stryMutAct_9fa48("45295")) {
            {}
          } else {
            stryCov_9fa48("45295");
            return await db.pexpire(stryMutAct_9fa48("45296") ? `` : (stryCov_9fa48("45296"), `loginAttempts:${uid}`), stryMutAct_9fa48("45297") ? 1000 * 60 / 60 : (stryCov_9fa48("45297"), (stryMutAct_9fa48("45298") ? 1000 / 60 : (stryCov_9fa48("45298"), 1000 * 60)) * 60));
          }
        }
        // Lock out the account
        await db.set(stryMutAct_9fa48("45299") ? `` : (stryCov_9fa48("45299"), `lockout:${uid}`), stryMutAct_9fa48("45300") ? "Stryker was here!" : (stryCov_9fa48("45300"), ''));
        const duration = stryMutAct_9fa48("45301") ? 1000 * 60 / meta.config.lockoutDuration : (stryCov_9fa48("45301"), (stryMutAct_9fa48("45302") ? 1000 / 60 : (stryCov_9fa48("45302"), 1000 * 60)) * meta.config.lockoutDuration);
        await db.delete(stryMutAct_9fa48("45303") ? `` : (stryCov_9fa48("45303"), `loginAttempts:${uid}`));
        await db.pexpire(stryMutAct_9fa48("45304") ? `` : (stryCov_9fa48("45304"), `lockout:${uid}`), duration);
        await events.log(stryMutAct_9fa48("45305") ? {} : (stryCov_9fa48("45305"), {
          type: stryMutAct_9fa48("45306") ? "" : (stryCov_9fa48("45306"), 'account-locked'),
          uid: uid,
          ip: ip
        }));
        throw new Error(stryMutAct_9fa48("45307") ? "" : (stryCov_9fa48("45307"), '[[error:account-locked]]'));
      }
    };
    User.auth.getFeedToken = async function (uid) {
      if (stryMutAct_9fa48("45308")) {
        {}
      } else {
        stryCov_9fa48("45308");
        if (stryMutAct_9fa48("45311") ? false : stryMutAct_9fa48("45310") ? true : stryMutAct_9fa48("45309") ? parseInt(uid, 10) > 0 : (stryCov_9fa48("45309", "45310", "45311"), !(stryMutAct_9fa48("45315") ? parseInt(uid, 10) <= 0 : stryMutAct_9fa48("45314") ? parseInt(uid, 10) >= 0 : stryMutAct_9fa48("45313") ? false : stryMutAct_9fa48("45312") ? true : (stryCov_9fa48("45312", "45313", "45314", "45315"), parseInt(uid, 10) > 0)))) {
          if (stryMutAct_9fa48("45316")) {
            {}
          } else {
            stryCov_9fa48("45316");
            return;
          }
        }
        const _token = await db.getObjectField(stryMutAct_9fa48("45317") ? `` : (stryCov_9fa48("45317"), `user:${uid}`), stryMutAct_9fa48("45318") ? "" : (stryCov_9fa48("45318"), 'rss_token'));
        const token = stryMutAct_9fa48("45321") ? _token && utils.generateUUID() : stryMutAct_9fa48("45320") ? false : stryMutAct_9fa48("45319") ? true : (stryCov_9fa48("45319", "45320", "45321"), _token || utils.generateUUID());
        if (stryMutAct_9fa48("45324") ? false : stryMutAct_9fa48("45323") ? true : stryMutAct_9fa48("45322") ? _token : (stryCov_9fa48("45322", "45323", "45324"), !_token)) {
          if (stryMutAct_9fa48("45325")) {
            {}
          } else {
            stryCov_9fa48("45325");
            await User.setUserField(uid, stryMutAct_9fa48("45326") ? "" : (stryCov_9fa48("45326"), 'rss_token'), token);
          }
        }
        return token;
      }
    };
    User.auth.clearLoginAttempts = async function (uid) {
      if (stryMutAct_9fa48("45327")) {
        {}
      } else {
        stryCov_9fa48("45327");
        await db.delete(stryMutAct_9fa48("45328") ? `` : (stryCov_9fa48("45328"), `loginAttempts:${uid}`));
      }
    };
    User.auth.resetLockout = async function (uid) {
      if (stryMutAct_9fa48("45329")) {
        {}
      } else {
        stryCov_9fa48("45329");
        await db.deleteAll(stryMutAct_9fa48("45330") ? [] : (stryCov_9fa48("45330"), [stryMutAct_9fa48("45331") ? `` : (stryCov_9fa48("45331"), `loginAttempts:${uid}`), stryMutAct_9fa48("45332") ? `` : (stryCov_9fa48("45332"), `lockout:${uid}`)]));
      }
    };
    const getSessionFromStore = util.promisify(stryMutAct_9fa48("45333") ? () => undefined : (stryCov_9fa48("45333"), (sid, callback) => db.sessionStore.get(sid, stryMutAct_9fa48("45334") ? () => undefined : (stryCov_9fa48("45334"), (err, sessObj) => callback(err, stryMutAct_9fa48("45337") ? sessObj && null : stryMutAct_9fa48("45336") ? false : stryMutAct_9fa48("45335") ? true : (stryCov_9fa48("45335", "45336", "45337"), sessObj || null))))));
    const sessionStoreDestroy = util.promisify(stryMutAct_9fa48("45338") ? () => undefined : (stryCov_9fa48("45338"), (sid, callback) => db.sessionStore.destroy(sid, stryMutAct_9fa48("45339") ? () => undefined : (stryCov_9fa48("45339"), err => callback(err)))));
    User.auth.getSessions = async function (uid, curSessionId) {
      if (stryMutAct_9fa48("45340")) {
        {}
      } else {
        stryCov_9fa48("45340");
        await cleanExpiredSessions(uid);
        const sids = await db.getSortedSetRevRange(stryMutAct_9fa48("45341") ? `` : (stryCov_9fa48("45341"), `uid:${uid}:sessions`), 0, 19);
        let sessions = await Promise.all(sids.map(stryMutAct_9fa48("45342") ? () => undefined : (stryCov_9fa48("45342"), sid => getSessionFromStore(sid))));
        sessions = stryMutAct_9fa48("45343") ? sessions.map((sessObj, idx) => {
          if (sessObj && sessObj.meta) {
            sessObj.meta.current = curSessionId === sids[idx];
            sessObj.meta.datetimeISO = new Date(sessObj.meta.datetime).toISOString();
            sessObj.meta.ip = validator.escape(String(sessObj.meta.ip));
          }
          return sessObj && sessObj.meta;
        }) : (stryCov_9fa48("45343"), sessions.map((sessObj, idx) => {
          if (stryMutAct_9fa48("45344")) {
            {}
          } else {
            stryCov_9fa48("45344");
            if (stryMutAct_9fa48("45347") ? sessObj || sessObj.meta : stryMutAct_9fa48("45346") ? false : stryMutAct_9fa48("45345") ? true : (stryCov_9fa48("45345", "45346", "45347"), sessObj && sessObj.meta)) {
              if (stryMutAct_9fa48("45348")) {
                {}
              } else {
                stryCov_9fa48("45348");
                sessObj.meta.current = stryMutAct_9fa48("45351") ? curSessionId !== sids[idx] : stryMutAct_9fa48("45350") ? false : stryMutAct_9fa48("45349") ? true : (stryCov_9fa48("45349", "45350", "45351"), curSessionId === sids[idx]);
                sessObj.meta.datetimeISO = new Date(sessObj.meta.datetime).toISOString();
                sessObj.meta.ip = validator.escape(String(sessObj.meta.ip));
              }
            }
            return stryMutAct_9fa48("45354") ? sessObj || sessObj.meta : stryMutAct_9fa48("45353") ? false : stryMutAct_9fa48("45352") ? true : (stryCov_9fa48("45352", "45353", "45354"), sessObj && sessObj.meta);
          }
        }).filter(Boolean));
        return sessions;
      }
    };
    async function cleanExpiredSessions(uid) {
      if (stryMutAct_9fa48("45355")) {
        {}
      } else {
        stryCov_9fa48("45355");
        const uuidMapping = await db.getObject(stryMutAct_9fa48("45356") ? `` : (stryCov_9fa48("45356"), `uid:${uid}:sessionUUID:sessionId`));
        if (stryMutAct_9fa48("45359") ? false : stryMutAct_9fa48("45358") ? true : stryMutAct_9fa48("45357") ? uuidMapping : (stryCov_9fa48("45357", "45358", "45359"), !uuidMapping)) {
          if (stryMutAct_9fa48("45360")) {
            {}
          } else {
            stryCov_9fa48("45360");
            return;
          }
        }
        const expiredUUIDs = stryMutAct_9fa48("45361") ? ["Stryker was here"] : (stryCov_9fa48("45361"), []);
        const expiredSids = stryMutAct_9fa48("45362") ? ["Stryker was here"] : (stryCov_9fa48("45362"), []);
        await Promise.all(Object.keys(uuidMapping).map(async uuid => {
          if (stryMutAct_9fa48("45363")) {
            {}
          } else {
            stryCov_9fa48("45363");
            const sid = uuidMapping[uuid];
            const sessionObj = await getSessionFromStore(sid);
            const expired = stryMutAct_9fa48("45366") ? (!sessionObj || !sessionObj.hasOwnProperty('passport') || !sessionObj.passport.hasOwnProperty('user')) && parseInt(sessionObj.passport.user, 10) !== parseInt(uid, 10) : stryMutAct_9fa48("45365") ? false : stryMutAct_9fa48("45364") ? true : (stryCov_9fa48("45364", "45365", "45366"), (stryMutAct_9fa48("45368") ? (!sessionObj || !sessionObj.hasOwnProperty('passport')) && !sessionObj.passport.hasOwnProperty('user') : stryMutAct_9fa48("45367") ? false : (stryCov_9fa48("45367", "45368"), (stryMutAct_9fa48("45370") ? !sessionObj && !sessionObj.hasOwnProperty('passport') : stryMutAct_9fa48("45369") ? false : (stryCov_9fa48("45369", "45370"), (stryMutAct_9fa48("45371") ? sessionObj : (stryCov_9fa48("45371"), !sessionObj)) || (stryMutAct_9fa48("45372") ? sessionObj.hasOwnProperty('passport') : (stryCov_9fa48("45372"), !sessionObj.hasOwnProperty(stryMutAct_9fa48("45373") ? "" : (stryCov_9fa48("45373"), 'passport')))))) || (stryMutAct_9fa48("45374") ? sessionObj.passport.hasOwnProperty('user') : (stryCov_9fa48("45374"), !sessionObj.passport.hasOwnProperty(stryMutAct_9fa48("45375") ? "" : (stryCov_9fa48("45375"), 'user')))))) || (stryMutAct_9fa48("45377") ? parseInt(sessionObj.passport.user, 10) === parseInt(uid, 10) : stryMutAct_9fa48("45376") ? false : (stryCov_9fa48("45376", "45377"), parseInt(sessionObj.passport.user, 10) !== parseInt(uid, 10))));
            if (stryMutAct_9fa48("45379") ? false : stryMutAct_9fa48("45378") ? true : (stryCov_9fa48("45378", "45379"), expired)) {
              if (stryMutAct_9fa48("45380")) {
                {}
              } else {
                stryCov_9fa48("45380");
                expiredUUIDs.push(uuid);
                expiredSids.push(sid);
              }
            }
          }
        }));
        await db.deleteObjectFields(stryMutAct_9fa48("45381") ? `` : (stryCov_9fa48("45381"), `uid:${uid}:sessionUUID:sessionId`), expiredUUIDs);
        await db.sortedSetRemove(stryMutAct_9fa48("45382") ? `` : (stryCov_9fa48("45382"), `uid:${uid}:sessions`), expiredSids);
      }
    }
    User.auth.addSession = async function (uid, sessionId) {
      if (stryMutAct_9fa48("45383")) {
        {}
      } else {
        stryCov_9fa48("45383");
        if (stryMutAct_9fa48("45386") ? false : stryMutAct_9fa48("45385") ? true : stryMutAct_9fa48("45384") ? parseInt(uid, 10) > 0 : (stryCov_9fa48("45384", "45385", "45386"), !(stryMutAct_9fa48("45390") ? parseInt(uid, 10) <= 0 : stryMutAct_9fa48("45389") ? parseInt(uid, 10) >= 0 : stryMutAct_9fa48("45388") ? false : stryMutAct_9fa48("45387") ? true : (stryCov_9fa48("45387", "45388", "45389", "45390"), parseInt(uid, 10) > 0)))) {
          if (stryMutAct_9fa48("45391")) {
            {}
          } else {
            stryCov_9fa48("45391");
            return;
          }
        }
        await cleanExpiredSessions(uid);
        await db.sortedSetAdd(stryMutAct_9fa48("45392") ? `` : (stryCov_9fa48("45392"), `uid:${uid}:sessions`), Date.now(), sessionId);
        await revokeSessionsAboveThreshold(uid, meta.config.maxUserSessions);
      }
    };
    async function revokeSessionsAboveThreshold(uid, maxUserSessions) {
      if (stryMutAct_9fa48("45393")) {
        {}
      } else {
        stryCov_9fa48("45393");
        const activeSessions = await db.getSortedSetRange(stryMutAct_9fa48("45394") ? `` : (stryCov_9fa48("45394"), `uid:${uid}:sessions`), 0, stryMutAct_9fa48("45395") ? +1 : (stryCov_9fa48("45395"), -1));
        if (stryMutAct_9fa48("45399") ? activeSessions.length <= maxUserSessions : stryMutAct_9fa48("45398") ? activeSessions.length >= maxUserSessions : stryMutAct_9fa48("45397") ? false : stryMutAct_9fa48("45396") ? true : (stryCov_9fa48("45396", "45397", "45398", "45399"), activeSessions.length > maxUserSessions)) {
          if (stryMutAct_9fa48("45400")) {
            {}
          } else {
            stryCov_9fa48("45400");
            const sessionsToRevoke = stryMutAct_9fa48("45401") ? activeSessions : (stryCov_9fa48("45401"), activeSessions.slice(0, stryMutAct_9fa48("45402") ? activeSessions.length + maxUserSessions : (stryCov_9fa48("45402"), activeSessions.length - maxUserSessions)));
            await Promise.all(sessionsToRevoke.map(stryMutAct_9fa48("45403") ? () => undefined : (stryCov_9fa48("45403"), sessionId => User.auth.revokeSession(sessionId, uid))));
          }
        }
      }
    }
    User.auth.revokeSession = async function (sessionId, uid) {
      if (stryMutAct_9fa48("45404")) {
        {}
      } else {
        stryCov_9fa48("45404");
        winston.verbose(stryMutAct_9fa48("45405") ? `` : (stryCov_9fa48("45405"), `[user.auth] Revoking session ${sessionId} for user ${uid}`));
        const sessionObj = await getSessionFromStore(sessionId);
        if (stryMutAct_9fa48("45408") ? sessionObj && sessionObj.meta || sessionObj.meta.uuid : stryMutAct_9fa48("45407") ? false : stryMutAct_9fa48("45406") ? true : (stryCov_9fa48("45406", "45407", "45408"), (stryMutAct_9fa48("45410") ? sessionObj || sessionObj.meta : stryMutAct_9fa48("45409") ? true : (stryCov_9fa48("45409", "45410"), sessionObj && sessionObj.meta)) && sessionObj.meta.uuid)) {
          if (stryMutAct_9fa48("45411")) {
            {}
          } else {
            stryCov_9fa48("45411");
            await db.deleteObjectField(stryMutAct_9fa48("45412") ? `` : (stryCov_9fa48("45412"), `uid:${uid}:sessionUUID:sessionId`), sessionObj.meta.uuid);
          }
        }
        await Promise.all(stryMutAct_9fa48("45413") ? [] : (stryCov_9fa48("45413"), [db.sortedSetRemove(stryMutAct_9fa48("45414") ? `` : (stryCov_9fa48("45414"), `uid:${uid}:sessions`), sessionId), sessionStoreDestroy(sessionId)]));
      }
    };
    User.auth.revokeAllSessions = async function (uids, except) {
      if (stryMutAct_9fa48("45415")) {
        {}
      } else {
        stryCov_9fa48("45415");
        uids = Array.isArray(uids) ? uids : stryMutAct_9fa48("45416") ? [] : (stryCov_9fa48("45416"), [uids]);
        const sids = await db.getSortedSetsMembers(uids.map(stryMutAct_9fa48("45417") ? () => undefined : (stryCov_9fa48("45417"), uid => stryMutAct_9fa48("45418") ? `` : (stryCov_9fa48("45418"), `uid:${uid}:sessions`))));
        const promises = stryMutAct_9fa48("45419") ? ["Stryker was here"] : (stryCov_9fa48("45419"), []);
        uids.forEach((uid, index) => {
          if (stryMutAct_9fa48("45420")) {
            {}
          } else {
            stryCov_9fa48("45420");
            const ids = stryMutAct_9fa48("45421") ? sids[index] : (stryCov_9fa48("45421"), sids[index].filter(stryMutAct_9fa48("45422") ? () => undefined : (stryCov_9fa48("45422"), id => stryMutAct_9fa48("45425") ? id === except : stryMutAct_9fa48("45424") ? false : stryMutAct_9fa48("45423") ? true : (stryCov_9fa48("45423", "45424", "45425"), id !== except))));
            if (stryMutAct_9fa48("45427") ? false : stryMutAct_9fa48("45426") ? true : (stryCov_9fa48("45426", "45427"), ids.length)) {
              if (stryMutAct_9fa48("45428")) {
                {}
              } else {
                stryCov_9fa48("45428");
                promises.push(ids.map(stryMutAct_9fa48("45429") ? () => undefined : (stryCov_9fa48("45429"), s => User.auth.revokeSession(s, uid))));
              }
            }
          }
        });
        await Promise.all(promises);
      }
    };
    User.auth.deleteAllSessions = async function () {
      if (stryMutAct_9fa48("45430")) {
        {}
      } else {
        stryCov_9fa48("45430");
        await batch.processSortedSet(stryMutAct_9fa48("45431") ? "" : (stryCov_9fa48("45431"), 'users:joindate'), async uids => {
          if (stryMutAct_9fa48("45432")) {
            {}
          } else {
            stryCov_9fa48("45432");
            const sessionKeys = uids.map(stryMutAct_9fa48("45433") ? () => undefined : (stryCov_9fa48("45433"), uid => stryMutAct_9fa48("45434") ? `` : (stryCov_9fa48("45434"), `uid:${uid}:sessions`)));
            const sessionUUIDKeys = uids.map(stryMutAct_9fa48("45435") ? () => undefined : (stryCov_9fa48("45435"), uid => stryMutAct_9fa48("45436") ? `` : (stryCov_9fa48("45436"), `uid:${uid}:sessionUUID:sessionId`)));
            const sids = _.flatten(await db.getSortedSetRange(sessionKeys, 0, stryMutAct_9fa48("45437") ? +1 : (stryCov_9fa48("45437"), -1)));
            await Promise.all(stryMutAct_9fa48("45438") ? [] : (stryCov_9fa48("45438"), [db.deleteAll(sessionKeys.concat(sessionUUIDKeys)), ...sids.map(stryMutAct_9fa48("45439") ? () => undefined : (stryCov_9fa48("45439"), sid => sessionStoreDestroy(sid)))]));
          }
        }, stryMutAct_9fa48("45440") ? {} : (stryCov_9fa48("45440"), {
          batch: 1000
        }));
      }
    };
  }
};