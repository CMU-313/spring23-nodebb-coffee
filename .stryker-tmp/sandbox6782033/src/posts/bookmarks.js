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
const plugins = require('../plugins');
module.exports = function (Posts) {
  if (stryMutAct_9fa48("28344")) {
    {}
  } else {
    stryCov_9fa48("28344");
    Posts.bookmark = async function (pid, uid) {
      if (stryMutAct_9fa48("28345")) {
        {}
      } else {
        stryCov_9fa48("28345");
        return await toggleBookmark(stryMutAct_9fa48("28346") ? "" : (stryCov_9fa48("28346"), 'bookmark'), pid, uid);
      }
    };
    Posts.unbookmark = async function (pid, uid) {
      if (stryMutAct_9fa48("28347")) {
        {}
      } else {
        stryCov_9fa48("28347");
        return await toggleBookmark(stryMutAct_9fa48("28348") ? "" : (stryCov_9fa48("28348"), 'unbookmark'), pid, uid);
      }
    };
    async function toggleBookmark(type, pid, uid) {
      if (stryMutAct_9fa48("28349")) {
        {}
      } else {
        stryCov_9fa48("28349");
        if (stryMutAct_9fa48("28353") ? parseInt(uid, 10) > 0 : stryMutAct_9fa48("28352") ? parseInt(uid, 10) < 0 : stryMutAct_9fa48("28351") ? false : stryMutAct_9fa48("28350") ? true : (stryCov_9fa48("28350", "28351", "28352", "28353"), parseInt(uid, 10) <= 0)) {
          if (stryMutAct_9fa48("28354")) {
            {}
          } else {
            stryCov_9fa48("28354");
            throw new Error(stryMutAct_9fa48("28355") ? "" : (stryCov_9fa48("28355"), '[[error:not-logged-in]]'));
          }
        }
        const isBookmarking = stryMutAct_9fa48("28358") ? type !== 'bookmark' : stryMutAct_9fa48("28357") ? false : stryMutAct_9fa48("28356") ? true : (stryCov_9fa48("28356", "28357", "28358"), type === (stryMutAct_9fa48("28359") ? "" : (stryCov_9fa48("28359"), 'bookmark')));
        const [postData, hasBookmarked] = await Promise.all(stryMutAct_9fa48("28360") ? [] : (stryCov_9fa48("28360"), [Posts.getPostFields(pid, stryMutAct_9fa48("28361") ? [] : (stryCov_9fa48("28361"), [stryMutAct_9fa48("28362") ? "" : (stryCov_9fa48("28362"), 'pid'), stryMutAct_9fa48("28363") ? "" : (stryCov_9fa48("28363"), 'uid')])), Posts.hasBookmarked(pid, uid)]));
        if (stryMutAct_9fa48("28366") ? isBookmarking || hasBookmarked : stryMutAct_9fa48("28365") ? false : stryMutAct_9fa48("28364") ? true : (stryCov_9fa48("28364", "28365", "28366"), isBookmarking && hasBookmarked)) {
          if (stryMutAct_9fa48("28367")) {
            {}
          } else {
            stryCov_9fa48("28367");
            throw new Error(stryMutAct_9fa48("28368") ? "" : (stryCov_9fa48("28368"), '[[error:already-bookmarked]]'));
          }
        }
        if (stryMutAct_9fa48("28371") ? !isBookmarking || !hasBookmarked : stryMutAct_9fa48("28370") ? false : stryMutAct_9fa48("28369") ? true : (stryCov_9fa48("28369", "28370", "28371"), (stryMutAct_9fa48("28372") ? isBookmarking : (stryCov_9fa48("28372"), !isBookmarking)) && (stryMutAct_9fa48("28373") ? hasBookmarked : (stryCov_9fa48("28373"), !hasBookmarked)))) {
          if (stryMutAct_9fa48("28374")) {
            {}
          } else {
            stryCov_9fa48("28374");
            throw new Error(stryMutAct_9fa48("28375") ? "" : (stryCov_9fa48("28375"), '[[error:already-unbookmarked]]'));
          }
        }
        if (stryMutAct_9fa48("28377") ? false : stryMutAct_9fa48("28376") ? true : (stryCov_9fa48("28376", "28377"), isBookmarking)) {
          if (stryMutAct_9fa48("28378")) {
            {}
          } else {
            stryCov_9fa48("28378");
            await db.sortedSetAdd(stryMutAct_9fa48("28379") ? `` : (stryCov_9fa48("28379"), `uid:${uid}:bookmarks`), Date.now(), pid);
          }
        } else {
          if (stryMutAct_9fa48("28380")) {
            {}
          } else {
            stryCov_9fa48("28380");
            await db.sortedSetRemove(stryMutAct_9fa48("28381") ? `` : (stryCov_9fa48("28381"), `uid:${uid}:bookmarks`), pid);
          }
        }
        await db[isBookmarking ? stryMutAct_9fa48("28382") ? "" : (stryCov_9fa48("28382"), 'setAdd') : stryMutAct_9fa48("28383") ? "" : (stryCov_9fa48("28383"), 'setRemove')](stryMutAct_9fa48("28384") ? `` : (stryCov_9fa48("28384"), `pid:${pid}:users_bookmarked`), uid);
        postData.bookmarks = await db.setCount(stryMutAct_9fa48("28385") ? `` : (stryCov_9fa48("28385"), `pid:${pid}:users_bookmarked`));
        await Posts.setPostField(pid, stryMutAct_9fa48("28386") ? "" : (stryCov_9fa48("28386"), 'bookmarks'), postData.bookmarks);
        plugins.hooks.fire(stryMutAct_9fa48("28387") ? `` : (stryCov_9fa48("28387"), `action:post.${type}`), stryMutAct_9fa48("28388") ? {} : (stryCov_9fa48("28388"), {
          pid: pid,
          uid: uid,
          owner: postData.uid,
          current: hasBookmarked ? stryMutAct_9fa48("28389") ? "" : (stryCov_9fa48("28389"), 'bookmarked') : stryMutAct_9fa48("28390") ? "" : (stryCov_9fa48("28390"), 'unbookmarked')
        }));
        return stryMutAct_9fa48("28391") ? {} : (stryCov_9fa48("28391"), {
          post: postData,
          isBookmarked: isBookmarking
        });
      }
    }
    Posts.hasBookmarked = async function (pid, uid) {
      if (stryMutAct_9fa48("28392")) {
        {}
      } else {
        stryCov_9fa48("28392");
        if (stryMutAct_9fa48("28396") ? parseInt(uid, 10) > 0 : stryMutAct_9fa48("28395") ? parseInt(uid, 10) < 0 : stryMutAct_9fa48("28394") ? false : stryMutAct_9fa48("28393") ? true : (stryCov_9fa48("28393", "28394", "28395", "28396"), parseInt(uid, 10) <= 0)) {
          if (stryMutAct_9fa48("28397")) {
            {}
          } else {
            stryCov_9fa48("28397");
            return Array.isArray(pid) ? pid.map(stryMutAct_9fa48("28398") ? () => undefined : (stryCov_9fa48("28398"), () => stryMutAct_9fa48("28399") ? true : (stryCov_9fa48("28399"), false))) : stryMutAct_9fa48("28400") ? true : (stryCov_9fa48("28400"), false);
          }
        }
        if (stryMutAct_9fa48("28402") ? false : stryMutAct_9fa48("28401") ? true : (stryCov_9fa48("28401", "28402"), Array.isArray(pid))) {
          if (stryMutAct_9fa48("28403")) {
            {}
          } else {
            stryCov_9fa48("28403");
            const sets = pid.map(stryMutAct_9fa48("28404") ? () => undefined : (stryCov_9fa48("28404"), pid => stryMutAct_9fa48("28405") ? `` : (stryCov_9fa48("28405"), `pid:${pid}:users_bookmarked`)));
            return await db.isMemberOfSets(sets, uid);
          }
        }
        return await db.isSetMember(stryMutAct_9fa48("28406") ? `` : (stryCov_9fa48("28406"), `pid:${pid}:users_bookmarked`), uid);
      }
    };
  }
};