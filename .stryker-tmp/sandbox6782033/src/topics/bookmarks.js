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
const async = require('async');
const db = require('../database');
const user = require('../user');
module.exports = function (Topics) {
  if (stryMutAct_9fa48("37810")) {
    {}
  } else {
    stryCov_9fa48("37810");
    Topics.getUserBookmark = async function (tid, uid) {
      if (stryMutAct_9fa48("37811")) {
        {}
      } else {
        stryCov_9fa48("37811");
        if (stryMutAct_9fa48("37815") ? parseInt(uid, 10) > 0 : stryMutAct_9fa48("37814") ? parseInt(uid, 10) < 0 : stryMutAct_9fa48("37813") ? false : stryMutAct_9fa48("37812") ? true : (stryCov_9fa48("37812", "37813", "37814", "37815"), parseInt(uid, 10) <= 0)) {
          if (stryMutAct_9fa48("37816")) {
            {}
          } else {
            stryCov_9fa48("37816");
            return null;
          }
        }
        return await db.sortedSetScore(stryMutAct_9fa48("37817") ? `` : (stryCov_9fa48("37817"), `tid:${tid}:bookmarks`), uid);
      }
    };
    Topics.getUserBookmarks = async function (tids, uid) {
      if (stryMutAct_9fa48("37818")) {
        {}
      } else {
        stryCov_9fa48("37818");
        if (stryMutAct_9fa48("37822") ? parseInt(uid, 10) > 0 : stryMutAct_9fa48("37821") ? parseInt(uid, 10) < 0 : stryMutAct_9fa48("37820") ? false : stryMutAct_9fa48("37819") ? true : (stryCov_9fa48("37819", "37820", "37821", "37822"), parseInt(uid, 10) <= 0)) {
          if (stryMutAct_9fa48("37823")) {
            {}
          } else {
            stryCov_9fa48("37823");
            return tids.map(stryMutAct_9fa48("37824") ? () => undefined : (stryCov_9fa48("37824"), () => null));
          }
        }
        return await db.sortedSetsScore(tids.map(stryMutAct_9fa48("37825") ? () => undefined : (stryCov_9fa48("37825"), tid => stryMutAct_9fa48("37826") ? `` : (stryCov_9fa48("37826"), `tid:${tid}:bookmarks`))), uid);
      }
    };
    Topics.setUserBookmark = async function (tid, uid, index) {
      if (stryMutAct_9fa48("37827")) {
        {}
      } else {
        stryCov_9fa48("37827");
        await db.sortedSetAdd(stryMutAct_9fa48("37828") ? `` : (stryCov_9fa48("37828"), `tid:${tid}:bookmarks`), index, uid);
      }
    };
    Topics.getTopicBookmarks = async function (tid) {
      if (stryMutAct_9fa48("37829")) {
        {}
      } else {
        stryCov_9fa48("37829");
        return await db.getSortedSetRangeWithScores(stryMutAct_9fa48("37830") ? `` : (stryCov_9fa48("37830"), `tid:${tid}:bookmarks`), 0, stryMutAct_9fa48("37831") ? +1 : (stryCov_9fa48("37831"), -1));
      }
    };
    Topics.updateTopicBookmarks = async function (tid, pids) {
      if (stryMutAct_9fa48("37832")) {
        {}
      } else {
        stryCov_9fa48("37832");
        const maxIndex = await Topics.getPostCount(tid);
        const indices = await db.sortedSetRanks(stryMutAct_9fa48("37833") ? `` : (stryCov_9fa48("37833"), `tid:${tid}:posts`), pids);
        const postIndices = indices.map(stryMutAct_9fa48("37834") ? () => undefined : (stryCov_9fa48("37834"), i => (stryMutAct_9fa48("37837") ? i !== null : stryMutAct_9fa48("37836") ? false : stryMutAct_9fa48("37835") ? true : (stryCov_9fa48("37835", "37836", "37837"), i === null)) ? 0 : stryMutAct_9fa48("37838") ? i - 1 : (stryCov_9fa48("37838"), i + 1)));
        const minIndex = Math.min(...postIndices);
        const bookmarks = await Topics.getTopicBookmarks(tid);
        const uidData = stryMutAct_9fa48("37839") ? bookmarks.map(b => ({
          uid: b.value,
          bookmark: parseInt(b.score, 10)
        })) : (stryCov_9fa48("37839"), bookmarks.map(stryMutAct_9fa48("37840") ? () => undefined : (stryCov_9fa48("37840"), b => stryMutAct_9fa48("37841") ? {} : (stryCov_9fa48("37841"), {
          uid: b.value,
          bookmark: parseInt(b.score, 10)
        }))).filter(stryMutAct_9fa48("37842") ? () => undefined : (stryCov_9fa48("37842"), data => stryMutAct_9fa48("37846") ? data.bookmark < minIndex : stryMutAct_9fa48("37845") ? data.bookmark > minIndex : stryMutAct_9fa48("37844") ? false : stryMutAct_9fa48("37843") ? true : (stryCov_9fa48("37843", "37844", "37845", "37846"), data.bookmark >= minIndex))));
        await async.eachLimit(uidData, 50, async data => {
          if (stryMutAct_9fa48("37847")) {
            {}
          } else {
            stryCov_9fa48("37847");
            let bookmark = Math.min(data.bookmark, maxIndex);
            postIndices.forEach(i => {
              if (stryMutAct_9fa48("37848")) {
                {}
              } else {
                stryCov_9fa48("37848");
                if (stryMutAct_9fa48("37852") ? i >= data.bookmark : stryMutAct_9fa48("37851") ? i <= data.bookmark : stryMutAct_9fa48("37850") ? false : stryMutAct_9fa48("37849") ? true : (stryCov_9fa48("37849", "37850", "37851", "37852"), i < data.bookmark)) {
                  if (stryMutAct_9fa48("37853")) {
                    {}
                  } else {
                    stryCov_9fa48("37853");
                    stryMutAct_9fa48("37854") ? bookmark += 1 : (stryCov_9fa48("37854"), bookmark -= 1);
                  }
                }
              }
            });

            // make sure the bookmark is valid if we removed the last post
            bookmark = Math.min(bookmark, stryMutAct_9fa48("37855") ? maxIndex + pids.length : (stryCov_9fa48("37855"), maxIndex - pids.length));
            if (stryMutAct_9fa48("37858") ? bookmark !== data.bookmark : stryMutAct_9fa48("37857") ? false : stryMutAct_9fa48("37856") ? true : (stryCov_9fa48("37856", "37857", "37858"), bookmark === data.bookmark)) {
              if (stryMutAct_9fa48("37859")) {
                {}
              } else {
                stryCov_9fa48("37859");
                return;
              }
            }
            const settings = await user.getSettings(data.uid);
            if (stryMutAct_9fa48("37862") ? settings.topicPostSort !== 'most_votes' : stryMutAct_9fa48("37861") ? false : stryMutAct_9fa48("37860") ? true : (stryCov_9fa48("37860", "37861", "37862"), settings.topicPostSort === (stryMutAct_9fa48("37863") ? "" : (stryCov_9fa48("37863"), 'most_votes')))) {
              if (stryMutAct_9fa48("37864")) {
                {}
              } else {
                stryCov_9fa48("37864");
                return;
              }
            }
            await Topics.setUserBookmark(tid, data.uid, bookmark);
          }
        });
      }
    };
  }
};