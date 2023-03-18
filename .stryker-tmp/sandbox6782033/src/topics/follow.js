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
const notifications = require('../notifications');
const privileges = require('../privileges');
const plugins = require('../plugins');
const utils = require('../utils');
module.exports = function (Topics) {
  if (stryMutAct_9fa48("38550")) {
    {}
  } else {
    stryCov_9fa48("38550");
    Topics.toggleFollow = async function (tid, uid) {
      if (stryMutAct_9fa48("38551")) {
        {}
      } else {
        stryCov_9fa48("38551");
        const exists = await Topics.exists(tid);
        if (stryMutAct_9fa48("38554") ? false : stryMutAct_9fa48("38553") ? true : stryMutAct_9fa48("38552") ? exists : (stryCov_9fa48("38552", "38553", "38554"), !exists)) {
          if (stryMutAct_9fa48("38555")) {
            {}
          } else {
            stryCov_9fa48("38555");
            throw new Error(stryMutAct_9fa48("38556") ? "" : (stryCov_9fa48("38556"), '[[error:no-topic]]'));
          }
        }
        const isFollowing = await Topics.isFollowing(stryMutAct_9fa48("38557") ? [] : (stryCov_9fa48("38557"), [tid]), uid);
        if (stryMutAct_9fa48("38559") ? false : stryMutAct_9fa48("38558") ? true : (stryCov_9fa48("38558", "38559"), isFollowing[0])) {
          if (stryMutAct_9fa48("38560")) {
            {}
          } else {
            stryCov_9fa48("38560");
            await Topics.unfollow(tid, uid);
          }
        } else {
          if (stryMutAct_9fa48("38561")) {
            {}
          } else {
            stryCov_9fa48("38561");
            await Topics.follow(tid, uid);
          }
        }
        return stryMutAct_9fa48("38562") ? isFollowing[0] : (stryCov_9fa48("38562"), !isFollowing[0]);
      }
    };
    Topics.follow = async function (tid, uid) {
      if (stryMutAct_9fa48("38563")) {
        {}
      } else {
        stryCov_9fa48("38563");
        await setWatching(follow, unignore, stryMutAct_9fa48("38564") ? "" : (stryCov_9fa48("38564"), 'action:topic.follow'), tid, uid);
      }
    };
    Topics.unfollow = async function (tid, uid) {
      if (stryMutAct_9fa48("38565")) {
        {}
      } else {
        stryCov_9fa48("38565");
        await setWatching(unfollow, unignore, stryMutAct_9fa48("38566") ? "" : (stryCov_9fa48("38566"), 'action:topic.unfollow'), tid, uid);
      }
    };
    Topics.ignore = async function (tid, uid) {
      if (stryMutAct_9fa48("38567")) {
        {}
      } else {
        stryCov_9fa48("38567");
        await setWatching(ignore, unfollow, stryMutAct_9fa48("38568") ? "" : (stryCov_9fa48("38568"), 'action:topic.ignore'), tid, uid);
      }
    };
    async function setWatching(method1, method2, hook, tid, uid) {
      if (stryMutAct_9fa48("38569")) {
        {}
      } else {
        stryCov_9fa48("38569");
        if (stryMutAct_9fa48("38572") ? false : stryMutAct_9fa48("38571") ? true : stryMutAct_9fa48("38570") ? parseInt(uid, 10) > 0 : (stryCov_9fa48("38570", "38571", "38572"), !(stryMutAct_9fa48("38576") ? parseInt(uid, 10) <= 0 : stryMutAct_9fa48("38575") ? parseInt(uid, 10) >= 0 : stryMutAct_9fa48("38574") ? false : stryMutAct_9fa48("38573") ? true : (stryCov_9fa48("38573", "38574", "38575", "38576"), parseInt(uid, 10) > 0)))) {
          if (stryMutAct_9fa48("38577")) {
            {}
          } else {
            stryCov_9fa48("38577");
            throw new Error(stryMutAct_9fa48("38578") ? "" : (stryCov_9fa48("38578"), '[[error:not-logged-in]]'));
          }
        }
        const exists = await Topics.exists(tid);
        if (stryMutAct_9fa48("38581") ? false : stryMutAct_9fa48("38580") ? true : stryMutAct_9fa48("38579") ? exists : (stryCov_9fa48("38579", "38580", "38581"), !exists)) {
          if (stryMutAct_9fa48("38582")) {
            {}
          } else {
            stryCov_9fa48("38582");
            throw new Error(stryMutAct_9fa48("38583") ? "" : (stryCov_9fa48("38583"), '[[error:no-topic]]'));
          }
        }
        await method1(tid, uid);
        await method2(tid, uid);
        plugins.hooks.fire(hook, stryMutAct_9fa48("38584") ? {} : (stryCov_9fa48("38584"), {
          uid: uid,
          tid: tid
        }));
      }
    }
    async function follow(tid, uid) {
      if (stryMutAct_9fa48("38585")) {
        {}
      } else {
        stryCov_9fa48("38585");
        await addToSets(stryMutAct_9fa48("38586") ? `` : (stryCov_9fa48("38586"), `tid:${tid}:followers`), stryMutAct_9fa48("38587") ? `` : (stryCov_9fa48("38587"), `uid:${uid}:followed_tids`), tid, uid);
      }
    }
    async function unfollow(tid, uid) {
      if (stryMutAct_9fa48("38588")) {
        {}
      } else {
        stryCov_9fa48("38588");
        await removeFromSets(stryMutAct_9fa48("38589") ? `` : (stryCov_9fa48("38589"), `tid:${tid}:followers`), stryMutAct_9fa48("38590") ? `` : (stryCov_9fa48("38590"), `uid:${uid}:followed_tids`), tid, uid);
      }
    }
    async function ignore(tid, uid) {
      if (stryMutAct_9fa48("38591")) {
        {}
      } else {
        stryCov_9fa48("38591");
        await addToSets(stryMutAct_9fa48("38592") ? `` : (stryCov_9fa48("38592"), `tid:${tid}:ignorers`), stryMutAct_9fa48("38593") ? `` : (stryCov_9fa48("38593"), `uid:${uid}:ignored_tids`), tid, uid);
      }
    }
    async function unignore(tid, uid) {
      if (stryMutAct_9fa48("38594")) {
        {}
      } else {
        stryCov_9fa48("38594");
        await removeFromSets(stryMutAct_9fa48("38595") ? `` : (stryCov_9fa48("38595"), `tid:${tid}:ignorers`), stryMutAct_9fa48("38596") ? `` : (stryCov_9fa48("38596"), `uid:${uid}:ignored_tids`), tid, uid);
      }
    }
    async function addToSets(set1, set2, tid, uid) {
      if (stryMutAct_9fa48("38597")) {
        {}
      } else {
        stryCov_9fa48("38597");
        await db.setAdd(set1, uid);
        await db.sortedSetAdd(set2, Date.now(), tid);
      }
    }
    async function removeFromSets(set1, set2, tid, uid) {
      if (stryMutAct_9fa48("38598")) {
        {}
      } else {
        stryCov_9fa48("38598");
        await db.setRemove(set1, uid);
        await db.sortedSetRemove(set2, tid);
      }
    }
    Topics.isFollowing = async function (tids, uid) {
      if (stryMutAct_9fa48("38599")) {
        {}
      } else {
        stryCov_9fa48("38599");
        return await isIgnoringOrFollowing(stryMutAct_9fa48("38600") ? "" : (stryCov_9fa48("38600"), 'followers'), tids, uid);
      }
    };
    Topics.isIgnoring = async function (tids, uid) {
      if (stryMutAct_9fa48("38601")) {
        {}
      } else {
        stryCov_9fa48("38601");
        return await isIgnoringOrFollowing(stryMutAct_9fa48("38602") ? "" : (stryCov_9fa48("38602"), 'ignorers'), tids, uid);
      }
    };
    Topics.getFollowData = async function (tids, uid) {
      if (stryMutAct_9fa48("38603")) {
        {}
      } else {
        stryCov_9fa48("38603");
        if (stryMutAct_9fa48("38606") ? false : stryMutAct_9fa48("38605") ? true : stryMutAct_9fa48("38604") ? Array.isArray(tids) : (stryCov_9fa48("38604", "38605", "38606"), !Array.isArray(tids))) {
          if (stryMutAct_9fa48("38607")) {
            {}
          } else {
            stryCov_9fa48("38607");
            return;
          }
        }
        if (stryMutAct_9fa48("38611") ? parseInt(uid, 10) > 0 : stryMutAct_9fa48("38610") ? parseInt(uid, 10) < 0 : stryMutAct_9fa48("38609") ? false : stryMutAct_9fa48("38608") ? true : (stryCov_9fa48("38608", "38609", "38610", "38611"), parseInt(uid, 10) <= 0)) {
          if (stryMutAct_9fa48("38612")) {
            {}
          } else {
            stryCov_9fa48("38612");
            return tids.map(stryMutAct_9fa48("38613") ? () => undefined : (stryCov_9fa48("38613"), () => stryMutAct_9fa48("38614") ? {} : (stryCov_9fa48("38614"), {
              following: stryMutAct_9fa48("38615") ? true : (stryCov_9fa48("38615"), false),
              ignoring: stryMutAct_9fa48("38616") ? true : (stryCov_9fa48("38616"), false)
            })));
          }
        }
        const keys = stryMutAct_9fa48("38617") ? ["Stryker was here"] : (stryCov_9fa48("38617"), []);
        tids.forEach(stryMutAct_9fa48("38618") ? () => undefined : (stryCov_9fa48("38618"), tid => keys.push(stryMutAct_9fa48("38619") ? `` : (stryCov_9fa48("38619"), `tid:${tid}:followers`), stryMutAct_9fa48("38620") ? `` : (stryCov_9fa48("38620"), `tid:${tid}:ignorers`))));
        const data = await db.isMemberOfSets(keys, uid);
        const followData = stryMutAct_9fa48("38621") ? ["Stryker was here"] : (stryCov_9fa48("38621"), []);
        for (let i = 0; stryMutAct_9fa48("38624") ? i >= data.length : stryMutAct_9fa48("38623") ? i <= data.length : stryMutAct_9fa48("38622") ? false : (stryCov_9fa48("38622", "38623", "38624"), i < data.length); stryMutAct_9fa48("38625") ? i -= 2 : (stryCov_9fa48("38625"), i += 2)) {
          if (stryMutAct_9fa48("38626")) {
            {}
          } else {
            stryCov_9fa48("38626");
            followData.push(stryMutAct_9fa48("38627") ? {} : (stryCov_9fa48("38627"), {
              following: data[i],
              ignoring: data[stryMutAct_9fa48("38628") ? i - 1 : (stryCov_9fa48("38628"), i + 1)]
            }));
          }
        }
        return followData;
      }
    };
    async function isIgnoringOrFollowing(set, tids, uid) {
      if (stryMutAct_9fa48("38629")) {
        {}
      } else {
        stryCov_9fa48("38629");
        if (stryMutAct_9fa48("38632") ? false : stryMutAct_9fa48("38631") ? true : stryMutAct_9fa48("38630") ? Array.isArray(tids) : (stryCov_9fa48("38630", "38631", "38632"), !Array.isArray(tids))) {
          if (stryMutAct_9fa48("38633")) {
            {}
          } else {
            stryCov_9fa48("38633");
            return;
          }
        }
        if (stryMutAct_9fa48("38637") ? parseInt(uid, 10) > 0 : stryMutAct_9fa48("38636") ? parseInt(uid, 10) < 0 : stryMutAct_9fa48("38635") ? false : stryMutAct_9fa48("38634") ? true : (stryCov_9fa48("38634", "38635", "38636", "38637"), parseInt(uid, 10) <= 0)) {
          if (stryMutAct_9fa48("38638")) {
            {}
          } else {
            stryCov_9fa48("38638");
            return tids.map(stryMutAct_9fa48("38639") ? () => undefined : (stryCov_9fa48("38639"), () => stryMutAct_9fa48("38640") ? true : (stryCov_9fa48("38640"), false)));
          }
        }
        const keys = tids.map(stryMutAct_9fa48("38641") ? () => undefined : (stryCov_9fa48("38641"), tid => stryMutAct_9fa48("38642") ? `` : (stryCov_9fa48("38642"), `tid:${tid}:${set}`)));
        return await db.isMemberOfSets(keys, uid);
      }
    }
    Topics.getFollowers = async function (tid) {
      if (stryMutAct_9fa48("38643")) {
        {}
      } else {
        stryCov_9fa48("38643");
        return await db.getSetMembers(stryMutAct_9fa48("38644") ? `` : (stryCov_9fa48("38644"), `tid:${tid}:followers`));
      }
    };
    Topics.getIgnorers = async function (tid) {
      if (stryMutAct_9fa48("38645")) {
        {}
      } else {
        stryCov_9fa48("38645");
        return await db.getSetMembers(stryMutAct_9fa48("38646") ? `` : (stryCov_9fa48("38646"), `tid:${tid}:ignorers`));
      }
    };
    Topics.filterIgnoringUids = async function (tid, uids) {
      if (stryMutAct_9fa48("38647")) {
        {}
      } else {
        stryCov_9fa48("38647");
        const isIgnoring = await db.isSetMembers(stryMutAct_9fa48("38648") ? `` : (stryCov_9fa48("38648"), `tid:${tid}:ignorers`), uids);
        const readingUids = stryMutAct_9fa48("38649") ? uids : (stryCov_9fa48("38649"), uids.filter(stryMutAct_9fa48("38650") ? () => undefined : (stryCov_9fa48("38650"), (uid, index) => stryMutAct_9fa48("38653") ? uid || !isIgnoring[index] : stryMutAct_9fa48("38652") ? false : stryMutAct_9fa48("38651") ? true : (stryCov_9fa48("38651", "38652", "38653"), uid && (stryMutAct_9fa48("38654") ? isIgnoring[index] : (stryCov_9fa48("38654"), !isIgnoring[index]))))));
        return readingUids;
      }
    };
    Topics.filterWatchedTids = async function (tids, uid) {
      if (stryMutAct_9fa48("38655")) {
        {}
      } else {
        stryCov_9fa48("38655");
        if (stryMutAct_9fa48("38659") ? parseInt(uid, 10) > 0 : stryMutAct_9fa48("38658") ? parseInt(uid, 10) < 0 : stryMutAct_9fa48("38657") ? false : stryMutAct_9fa48("38656") ? true : (stryCov_9fa48("38656", "38657", "38658", "38659"), parseInt(uid, 10) <= 0)) {
          if (stryMutAct_9fa48("38660")) {
            {}
          } else {
            stryCov_9fa48("38660");
            return stryMutAct_9fa48("38661") ? ["Stryker was here"] : (stryCov_9fa48("38661"), []);
          }
        }
        const scores = await db.sortedSetScores(stryMutAct_9fa48("38662") ? `` : (stryCov_9fa48("38662"), `uid:${uid}:followed_tids`), tids);
        return stryMutAct_9fa48("38663") ? tids : (stryCov_9fa48("38663"), tids.filter(stryMutAct_9fa48("38664") ? () => undefined : (stryCov_9fa48("38664"), (tid, index) => stryMutAct_9fa48("38667") ? tid || !!scores[index] : stryMutAct_9fa48("38666") ? false : stryMutAct_9fa48("38665") ? true : (stryCov_9fa48("38665", "38666", "38667"), tid && (stryMutAct_9fa48("38668") ? !scores[index] : (stryCov_9fa48("38668"), !(stryMutAct_9fa48("38669") ? scores[index] : (stryCov_9fa48("38669"), !scores[index]))))))));
      }
    };
    Topics.filterNotIgnoredTids = async function (tids, uid) {
      if (stryMutAct_9fa48("38670")) {
        {}
      } else {
        stryCov_9fa48("38670");
        if (stryMutAct_9fa48("38674") ? parseInt(uid, 10) > 0 : stryMutAct_9fa48("38673") ? parseInt(uid, 10) < 0 : stryMutAct_9fa48("38672") ? false : stryMutAct_9fa48("38671") ? true : (stryCov_9fa48("38671", "38672", "38673", "38674"), parseInt(uid, 10) <= 0)) {
          if (stryMutAct_9fa48("38675")) {
            {}
          } else {
            stryCov_9fa48("38675");
            return tids;
          }
        }
        const scores = await db.sortedSetScores(stryMutAct_9fa48("38676") ? `` : (stryCov_9fa48("38676"), `uid:${uid}:ignored_tids`), tids);
        return stryMutAct_9fa48("38677") ? tids : (stryCov_9fa48("38677"), tids.filter(stryMutAct_9fa48("38678") ? () => undefined : (stryCov_9fa48("38678"), (tid, index) => stryMutAct_9fa48("38681") ? tid || !scores[index] : stryMutAct_9fa48("38680") ? false : stryMutAct_9fa48("38679") ? true : (stryCov_9fa48("38679", "38680", "38681"), tid && (stryMutAct_9fa48("38682") ? scores[index] : (stryCov_9fa48("38682"), !scores[index]))))));
      }
    };
    Topics.notifyFollowers = async function (postData, exceptUid, notifData) {
      if (stryMutAct_9fa48("38683")) {
        {}
      } else {
        stryCov_9fa48("38683");
        notifData = stryMutAct_9fa48("38686") ? notifData && {} : stryMutAct_9fa48("38685") ? false : stryMutAct_9fa48("38684") ? true : (stryCov_9fa48("38684", "38685", "38686"), notifData || {});
        let followers = await Topics.getFollowers(postData.topic.tid);
        const index = followers.indexOf(String(exceptUid));
        if (stryMutAct_9fa48("38689") ? index === -1 : stryMutAct_9fa48("38688") ? false : stryMutAct_9fa48("38687") ? true : (stryCov_9fa48("38687", "38688", "38689"), index !== (stryMutAct_9fa48("38690") ? +1 : (stryCov_9fa48("38690"), -1)))) {
          if (stryMutAct_9fa48("38691")) {
            {}
          } else {
            stryCov_9fa48("38691");
            followers.splice(index, 1);
          }
        }
        followers = await privileges.topics.filterUids(stryMutAct_9fa48("38692") ? "" : (stryCov_9fa48("38692"), 'topics:read'), postData.topic.tid, followers);
        if (stryMutAct_9fa48("38695") ? false : stryMutAct_9fa48("38694") ? true : stryMutAct_9fa48("38693") ? followers.length : (stryCov_9fa48("38693", "38694", "38695"), !followers.length)) {
          if (stryMutAct_9fa48("38696")) {
            {}
          } else {
            stryCov_9fa48("38696");
            return;
          }
        }
        let {
          title
        } = postData.topic;
        if (stryMutAct_9fa48("38698") ? false : stryMutAct_9fa48("38697") ? true : (stryCov_9fa48("38697", "38698"), title)) {
          if (stryMutAct_9fa48("38699")) {
            {}
          } else {
            stryCov_9fa48("38699");
            title = utils.decodeHTMLEntities(title);
          }
        }
        const notification = await notifications.create(stryMutAct_9fa48("38700") ? {} : (stryCov_9fa48("38700"), {
          subject: title,
          bodyLong: postData.content,
          pid: postData.pid,
          path: stryMutAct_9fa48("38701") ? `` : (stryCov_9fa48("38701"), `/post/${postData.pid}`),
          tid: postData.topic.tid,
          from: exceptUid,
          topicTitle: title,
          ...notifData
        }));
        notifications.push(notification, followers);
      }
    };
  }
};