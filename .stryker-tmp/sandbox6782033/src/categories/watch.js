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
const db = require('../database');
const user = require('../user');
module.exports = function (Categories) {
  if (stryMutAct_9fa48("3602")) {
    {}
  } else {
    stryCov_9fa48("3602");
    Categories.watchStates = stryMutAct_9fa48("3603") ? {} : (stryCov_9fa48("3603"), {
      ignoring: 1,
      notwatching: 2,
      watching: 3
    });
    Categories.isIgnored = async function (cids, uid) {
      if (stryMutAct_9fa48("3604")) {
        {}
      } else {
        stryCov_9fa48("3604");
        if (stryMutAct_9fa48("3607") ? false : stryMutAct_9fa48("3606") ? true : stryMutAct_9fa48("3605") ? parseInt(uid, 10) > 0 : (stryCov_9fa48("3605", "3606", "3607"), !(stryMutAct_9fa48("3611") ? parseInt(uid, 10) <= 0 : stryMutAct_9fa48("3610") ? parseInt(uid, 10) >= 0 : stryMutAct_9fa48("3609") ? false : stryMutAct_9fa48("3608") ? true : (stryCov_9fa48("3608", "3609", "3610", "3611"), parseInt(uid, 10) > 0)))) {
          if (stryMutAct_9fa48("3612")) {
            {}
          } else {
            stryCov_9fa48("3612");
            return cids.map(stryMutAct_9fa48("3613") ? () => undefined : (stryCov_9fa48("3613"), () => stryMutAct_9fa48("3614") ? true : (stryCov_9fa48("3614"), false)));
          }
        }
        const states = await Categories.getWatchState(cids, uid);
        return states.map(stryMutAct_9fa48("3615") ? () => undefined : (stryCov_9fa48("3615"), state => stryMutAct_9fa48("3618") ? state !== Categories.watchStates.ignoring : stryMutAct_9fa48("3617") ? false : stryMutAct_9fa48("3616") ? true : (stryCov_9fa48("3616", "3617", "3618"), state === Categories.watchStates.ignoring)));
      }
    };
    Categories.getWatchState = async function (cids, uid) {
      if (stryMutAct_9fa48("3619")) {
        {}
      } else {
        stryCov_9fa48("3619");
        if (stryMutAct_9fa48("3622") ? false : stryMutAct_9fa48("3621") ? true : stryMutAct_9fa48("3620") ? parseInt(uid, 10) > 0 : (stryCov_9fa48("3620", "3621", "3622"), !(stryMutAct_9fa48("3626") ? parseInt(uid, 10) <= 0 : stryMutAct_9fa48("3625") ? parseInt(uid, 10) >= 0 : stryMutAct_9fa48("3624") ? false : stryMutAct_9fa48("3623") ? true : (stryCov_9fa48("3623", "3624", "3625", "3626"), parseInt(uid, 10) > 0)))) {
          if (stryMutAct_9fa48("3627")) {
            {}
          } else {
            stryCov_9fa48("3627");
            return cids.map(stryMutAct_9fa48("3628") ? () => undefined : (stryCov_9fa48("3628"), () => Categories.watchStates.notwatching));
          }
        }
        if (stryMutAct_9fa48("3631") ? !Array.isArray(cids) && !cids.length : stryMutAct_9fa48("3630") ? false : stryMutAct_9fa48("3629") ? true : (stryCov_9fa48("3629", "3630", "3631"), (stryMutAct_9fa48("3632") ? Array.isArray(cids) : (stryCov_9fa48("3632"), !Array.isArray(cids))) || (stryMutAct_9fa48("3633") ? cids.length : (stryCov_9fa48("3633"), !cids.length)))) {
          if (stryMutAct_9fa48("3634")) {
            {}
          } else {
            stryCov_9fa48("3634");
            return stryMutAct_9fa48("3635") ? ["Stryker was here"] : (stryCov_9fa48("3635"), []);
          }
        }
        const keys = cids.map(stryMutAct_9fa48("3636") ? () => undefined : (stryCov_9fa48("3636"), cid => stryMutAct_9fa48("3637") ? `` : (stryCov_9fa48("3637"), `cid:${cid}:uid:watch:state`)));
        const [userSettings, states] = await Promise.all(stryMutAct_9fa48("3638") ? [] : (stryCov_9fa48("3638"), [user.getSettings(uid), db.sortedSetsScore(keys, uid)]));
        return states.map(stryMutAct_9fa48("3639") ? () => undefined : (stryCov_9fa48("3639"), state => stryMutAct_9fa48("3642") ? state && Categories.watchStates[userSettings.categoryWatchState] : stryMutAct_9fa48("3641") ? false : stryMutAct_9fa48("3640") ? true : (stryCov_9fa48("3640", "3641", "3642"), state || Categories.watchStates[userSettings.categoryWatchState])));
      }
    };
    Categories.getIgnorers = async function (cid, start, stop) {
      if (stryMutAct_9fa48("3643")) {
        {}
      } else {
        stryCov_9fa48("3643");
        const count = (stryMutAct_9fa48("3646") ? stop !== -1 : stryMutAct_9fa48("3645") ? false : stryMutAct_9fa48("3644") ? true : (stryCov_9fa48("3644", "3645", "3646"), stop === (stryMutAct_9fa48("3647") ? +1 : (stryCov_9fa48("3647"), -1)))) ? stryMutAct_9fa48("3648") ? +1 : (stryCov_9fa48("3648"), -1) : stryMutAct_9fa48("3649") ? stop - start - 1 : (stryCov_9fa48("3649"), (stryMutAct_9fa48("3650") ? stop + start : (stryCov_9fa48("3650"), stop - start)) + 1);
        return await db.getSortedSetRevRangeByScore(stryMutAct_9fa48("3651") ? `` : (stryCov_9fa48("3651"), `cid:${cid}:uid:watch:state`), start, count, Categories.watchStates.ignoring, Categories.watchStates.ignoring);
      }
    };
    Categories.filterIgnoringUids = async function (cid, uids) {
      if (stryMutAct_9fa48("3652")) {
        {}
      } else {
        stryCov_9fa48("3652");
        const states = await Categories.getUidsWatchStates(cid, uids);
        const readingUids = stryMutAct_9fa48("3653") ? uids : (stryCov_9fa48("3653"), uids.filter(stryMutAct_9fa48("3654") ? () => undefined : (stryCov_9fa48("3654"), (uid, index) => stryMutAct_9fa48("3657") ? uid || states[index] !== Categories.watchStates.ignoring : stryMutAct_9fa48("3656") ? false : stryMutAct_9fa48("3655") ? true : (stryCov_9fa48("3655", "3656", "3657"), uid && (stryMutAct_9fa48("3659") ? states[index] === Categories.watchStates.ignoring : stryMutAct_9fa48("3658") ? true : (stryCov_9fa48("3658", "3659"), states[index] !== Categories.watchStates.ignoring))))));
        return readingUids;
      }
    };
    Categories.getUidsWatchStates = async function (cid, uids) {
      if (stryMutAct_9fa48("3660")) {
        {}
      } else {
        stryCov_9fa48("3660");
        const [userSettings, states] = await Promise.all(stryMutAct_9fa48("3661") ? [] : (stryCov_9fa48("3661"), [user.getMultipleUserSettings(uids), db.sortedSetScores(stryMutAct_9fa48("3662") ? `` : (stryCov_9fa48("3662"), `cid:${cid}:uid:watch:state`), uids)]));
        return states.map(stryMutAct_9fa48("3663") ? () => undefined : (stryCov_9fa48("3663"), (state, index) => stryMutAct_9fa48("3666") ? state && Categories.watchStates[userSettings[index].categoryWatchState] : stryMutAct_9fa48("3665") ? false : stryMutAct_9fa48("3664") ? true : (stryCov_9fa48("3664", "3665", "3666"), state || Categories.watchStates[userSettings[index].categoryWatchState])));
      }
    };
  }
};