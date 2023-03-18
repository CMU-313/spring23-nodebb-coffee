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
const plugins = require('../plugins');
const db = require('../database');
module.exports = function (User) {
  if (stryMutAct_9fa48("47011")) {
    {}
  } else {
    stryCov_9fa48("47011");
    User.follow = async function (uid, followuid) {
      if (stryMutAct_9fa48("47012")) {
        {}
      } else {
        stryCov_9fa48("47012");
        await toggleFollow(stryMutAct_9fa48("47013") ? "" : (stryCov_9fa48("47013"), 'follow'), uid, followuid);
      }
    };
    User.unfollow = async function (uid, unfollowuid) {
      if (stryMutAct_9fa48("47014")) {
        {}
      } else {
        stryCov_9fa48("47014");
        await toggleFollow(stryMutAct_9fa48("47015") ? "" : (stryCov_9fa48("47015"), 'unfollow'), uid, unfollowuid);
      }
    };
    async function toggleFollow(type, uid, theiruid) {
      if (stryMutAct_9fa48("47016")) {
        {}
      } else {
        stryCov_9fa48("47016");
        if (stryMutAct_9fa48("47019") ? parseInt(uid, 10) <= 0 && parseInt(theiruid, 10) <= 0 : stryMutAct_9fa48("47018") ? false : stryMutAct_9fa48("47017") ? true : (stryCov_9fa48("47017", "47018", "47019"), (stryMutAct_9fa48("47022") ? parseInt(uid, 10) > 0 : stryMutAct_9fa48("47021") ? parseInt(uid, 10) < 0 : stryMutAct_9fa48("47020") ? false : (stryCov_9fa48("47020", "47021", "47022"), parseInt(uid, 10) <= 0)) || (stryMutAct_9fa48("47025") ? parseInt(theiruid, 10) > 0 : stryMutAct_9fa48("47024") ? parseInt(theiruid, 10) < 0 : stryMutAct_9fa48("47023") ? false : (stryCov_9fa48("47023", "47024", "47025"), parseInt(theiruid, 10) <= 0)))) {
          if (stryMutAct_9fa48("47026")) {
            {}
          } else {
            stryCov_9fa48("47026");
            throw new Error(stryMutAct_9fa48("47027") ? "" : (stryCov_9fa48("47027"), '[[error:invalid-uid]]'));
          }
        }
        if (stryMutAct_9fa48("47030") ? parseInt(uid, 10) !== parseInt(theiruid, 10) : stryMutAct_9fa48("47029") ? false : stryMutAct_9fa48("47028") ? true : (stryCov_9fa48("47028", "47029", "47030"), parseInt(uid, 10) === parseInt(theiruid, 10))) {
          if (stryMutAct_9fa48("47031")) {
            {}
          } else {
            stryCov_9fa48("47031");
            throw new Error(stryMutAct_9fa48("47032") ? "" : (stryCov_9fa48("47032"), '[[error:you-cant-follow-yourself]]'));
          }
        }
        const exists = await User.exists(theiruid);
        if (stryMutAct_9fa48("47035") ? false : stryMutAct_9fa48("47034") ? true : stryMutAct_9fa48("47033") ? exists : (stryCov_9fa48("47033", "47034", "47035"), !exists)) {
          if (stryMutAct_9fa48("47036")) {
            {}
          } else {
            stryCov_9fa48("47036");
            throw new Error(stryMutAct_9fa48("47037") ? "" : (stryCov_9fa48("47037"), '[[error:no-user]]'));
          }
        }
        const isFollowing = await User.isFollowing(uid, theiruid);
        if (stryMutAct_9fa48("47040") ? type !== 'follow' : stryMutAct_9fa48("47039") ? false : stryMutAct_9fa48("47038") ? true : (stryCov_9fa48("47038", "47039", "47040"), type === (stryMutAct_9fa48("47041") ? "" : (stryCov_9fa48("47041"), 'follow')))) {
          if (stryMutAct_9fa48("47042")) {
            {}
          } else {
            stryCov_9fa48("47042");
            if (stryMutAct_9fa48("47044") ? false : stryMutAct_9fa48("47043") ? true : (stryCov_9fa48("47043", "47044"), isFollowing)) {
              if (stryMutAct_9fa48("47045")) {
                {}
              } else {
                stryCov_9fa48("47045");
                throw new Error(stryMutAct_9fa48("47046") ? "" : (stryCov_9fa48("47046"), '[[error:already-following]]'));
              }
            }
            const now = Date.now();
            await Promise.all(stryMutAct_9fa48("47047") ? [] : (stryCov_9fa48("47047"), [db.sortedSetAddBulk(stryMutAct_9fa48("47048") ? [] : (stryCov_9fa48("47048"), [stryMutAct_9fa48("47049") ? [] : (stryCov_9fa48("47049"), [stryMutAct_9fa48("47050") ? `` : (stryCov_9fa48("47050"), `following:${uid}`), now, theiruid]), stryMutAct_9fa48("47051") ? [] : (stryCov_9fa48("47051"), [stryMutAct_9fa48("47052") ? `` : (stryCov_9fa48("47052"), `followers:${theiruid}`), now, uid])]))]));
          }
        } else {
          if (stryMutAct_9fa48("47053")) {
            {}
          } else {
            stryCov_9fa48("47053");
            if (stryMutAct_9fa48("47056") ? false : stryMutAct_9fa48("47055") ? true : stryMutAct_9fa48("47054") ? isFollowing : (stryCov_9fa48("47054", "47055", "47056"), !isFollowing)) {
              if (stryMutAct_9fa48("47057")) {
                {}
              } else {
                stryCov_9fa48("47057");
                throw new Error(stryMutAct_9fa48("47058") ? "" : (stryCov_9fa48("47058"), '[[error:not-following]]'));
              }
            }
            await Promise.all(stryMutAct_9fa48("47059") ? [] : (stryCov_9fa48("47059"), [db.sortedSetRemoveBulk(stryMutAct_9fa48("47060") ? [] : (stryCov_9fa48("47060"), [stryMutAct_9fa48("47061") ? [] : (stryCov_9fa48("47061"), [stryMutAct_9fa48("47062") ? `` : (stryCov_9fa48("47062"), `following:${uid}`), theiruid]), stryMutAct_9fa48("47063") ? [] : (stryCov_9fa48("47063"), [stryMutAct_9fa48("47064") ? `` : (stryCov_9fa48("47064"), `followers:${theiruid}`), uid])]))]));
          }
        }
        const [followingCount, followerCount] = await Promise.all(stryMutAct_9fa48("47065") ? [] : (stryCov_9fa48("47065"), [db.sortedSetCard(stryMutAct_9fa48("47066") ? `` : (stryCov_9fa48("47066"), `following:${uid}`)), db.sortedSetCard(stryMutAct_9fa48("47067") ? `` : (stryCov_9fa48("47067"), `followers:${theiruid}`))]));
        await Promise.all(stryMutAct_9fa48("47068") ? [] : (stryCov_9fa48("47068"), [User.setUserField(uid, stryMutAct_9fa48("47069") ? "" : (stryCov_9fa48("47069"), 'followingCount'), followingCount), User.setUserField(theiruid, stryMutAct_9fa48("47070") ? "" : (stryCov_9fa48("47070"), 'followerCount'), followerCount)]));
      }
    }
    User.getFollowing = async function (uid, start, stop) {
      if (stryMutAct_9fa48("47071")) {
        {}
      } else {
        stryCov_9fa48("47071");
        return await getFollow(uid, stryMutAct_9fa48("47072") ? "" : (stryCov_9fa48("47072"), 'following'), start, stop);
      }
    };
    User.getFollowers = async function (uid, start, stop) {
      if (stryMutAct_9fa48("47073")) {
        {}
      } else {
        stryCov_9fa48("47073");
        return await getFollow(uid, stryMutAct_9fa48("47074") ? "" : (stryCov_9fa48("47074"), 'followers'), start, stop);
      }
    };
    async function getFollow(uid, type, start, stop) {
      if (stryMutAct_9fa48("47075")) {
        {}
      } else {
        stryCov_9fa48("47075");
        if (stryMutAct_9fa48("47079") ? parseInt(uid, 10) > 0 : stryMutAct_9fa48("47078") ? parseInt(uid, 10) < 0 : stryMutAct_9fa48("47077") ? false : stryMutAct_9fa48("47076") ? true : (stryCov_9fa48("47076", "47077", "47078", "47079"), parseInt(uid, 10) <= 0)) {
          if (stryMutAct_9fa48("47080")) {
            {}
          } else {
            stryCov_9fa48("47080");
            return stryMutAct_9fa48("47081") ? ["Stryker was here"] : (stryCov_9fa48("47081"), []);
          }
        }
        const uids = await db.getSortedSetRevRange(stryMutAct_9fa48("47082") ? `` : (stryCov_9fa48("47082"), `${type}:${uid}`), start, stop);
        const data = await plugins.hooks.fire(stryMutAct_9fa48("47083") ? `` : (stryCov_9fa48("47083"), `filter:user.${type}`), stryMutAct_9fa48("47084") ? {} : (stryCov_9fa48("47084"), {
          uids: uids,
          uid: uid,
          start: start,
          stop: stop
        }));
        return await User.getUsers(data.uids, uid);
      }
    }
    User.isFollowing = async function (uid, theirid) {
      if (stryMutAct_9fa48("47085")) {
        {}
      } else {
        stryCov_9fa48("47085");
        if (stryMutAct_9fa48("47088") ? parseInt(uid, 10) <= 0 && parseInt(theirid, 10) <= 0 : stryMutAct_9fa48("47087") ? false : stryMutAct_9fa48("47086") ? true : (stryCov_9fa48("47086", "47087", "47088"), (stryMutAct_9fa48("47091") ? parseInt(uid, 10) > 0 : stryMutAct_9fa48("47090") ? parseInt(uid, 10) < 0 : stryMutAct_9fa48("47089") ? false : (stryCov_9fa48("47089", "47090", "47091"), parseInt(uid, 10) <= 0)) || (stryMutAct_9fa48("47094") ? parseInt(theirid, 10) > 0 : stryMutAct_9fa48("47093") ? parseInt(theirid, 10) < 0 : stryMutAct_9fa48("47092") ? false : (stryCov_9fa48("47092", "47093", "47094"), parseInt(theirid, 10) <= 0)))) {
          if (stryMutAct_9fa48("47095")) {
            {}
          } else {
            stryCov_9fa48("47095");
            return stryMutAct_9fa48("47096") ? true : (stryCov_9fa48("47096"), false);
          }
        }
        return await db.isSortedSetMember(stryMutAct_9fa48("47097") ? `` : (stryCov_9fa48("47097"), `following:${uid}`), theirid);
      }
    };
  }
};