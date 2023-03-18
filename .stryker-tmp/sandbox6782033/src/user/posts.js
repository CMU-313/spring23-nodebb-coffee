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
const meta = require('../meta');
const privileges = require('../privileges');
module.exports = function (User) {
  if (stryMutAct_9fa48("48442")) {
    {}
  } else {
    stryCov_9fa48("48442");
    User.isReadyToPost = async function (uid, cid) {
      if (stryMutAct_9fa48("48443")) {
        {}
      } else {
        stryCov_9fa48("48443");
        await isReady(uid, cid, stryMutAct_9fa48("48444") ? "" : (stryCov_9fa48("48444"), 'lastposttime'));
      }
    };
    User.isReadyToQueue = async function (uid, cid) {
      if (stryMutAct_9fa48("48445")) {
        {}
      } else {
        stryCov_9fa48("48445");
        await isReady(uid, cid, stryMutAct_9fa48("48446") ? "" : (stryCov_9fa48("48446"), 'lastqueuetime'));
      }
    };
    async function isReady(uid, cid, field) {
      if (stryMutAct_9fa48("48447")) {
        {}
      } else {
        stryCov_9fa48("48447");
        if (stryMutAct_9fa48("48450") ? parseInt(uid, 10) !== 0 : stryMutAct_9fa48("48449") ? false : stryMutAct_9fa48("48448") ? true : (stryCov_9fa48("48448", "48449", "48450"), parseInt(uid, 10) === 0)) {
          if (stryMutAct_9fa48("48451")) {
            {}
          } else {
            stryCov_9fa48("48451");
            return;
          }
        }
        const [userData, isAdminOrMod] = await Promise.all(stryMutAct_9fa48("48452") ? [] : (stryCov_9fa48("48452"), [User.getUserFields(uid, (stryMutAct_9fa48("48453") ? [] : (stryCov_9fa48("48453"), [stryMutAct_9fa48("48454") ? "" : (stryCov_9fa48("48454"), 'uid'), stryMutAct_9fa48("48455") ? "" : (stryCov_9fa48("48455"), 'mutedUntil'), stryMutAct_9fa48("48456") ? "" : (stryCov_9fa48("48456"), 'joindate'), stryMutAct_9fa48("48457") ? "" : (stryCov_9fa48("48457"), 'email'), stryMutAct_9fa48("48458") ? "" : (stryCov_9fa48("48458"), 'reputation')])).concat(stryMutAct_9fa48("48459") ? [] : (stryCov_9fa48("48459"), [field]))), privileges.categories.isAdminOrMod(cid, uid)]));
        if (stryMutAct_9fa48("48462") ? false : stryMutAct_9fa48("48461") ? true : stryMutAct_9fa48("48460") ? userData.uid : (stryCov_9fa48("48460", "48461", "48462"), !userData.uid)) {
          if (stryMutAct_9fa48("48463")) {
            {}
          } else {
            stryCov_9fa48("48463");
            throw new Error(stryMutAct_9fa48("48464") ? "" : (stryCov_9fa48("48464"), '[[error:no-user]]'));
          }
        }
        if (stryMutAct_9fa48("48466") ? false : stryMutAct_9fa48("48465") ? true : (stryCov_9fa48("48465", "48466"), isAdminOrMod)) {
          if (stryMutAct_9fa48("48467")) {
            {}
          } else {
            stryCov_9fa48("48467");
            return;
          }
        }
        const now = Date.now();
        if (stryMutAct_9fa48("48471") ? userData.mutedUntil <= now : stryMutAct_9fa48("48470") ? userData.mutedUntil >= now : stryMutAct_9fa48("48469") ? false : stryMutAct_9fa48("48468") ? true : (stryCov_9fa48("48468", "48469", "48470", "48471"), userData.mutedUntil > now)) {
          if (stryMutAct_9fa48("48472")) {
            {}
          } else {
            stryCov_9fa48("48472");
            let muteLeft = stryMutAct_9fa48("48473") ? (userData.mutedUntil - now) * (1000 * 60) : (stryCov_9fa48("48473"), (stryMutAct_9fa48("48474") ? userData.mutedUntil + now : (stryCov_9fa48("48474"), userData.mutedUntil - now)) / (stryMutAct_9fa48("48475") ? 1000 / 60 : (stryCov_9fa48("48475"), 1000 * 60)));
            if (stryMutAct_9fa48("48479") ? muteLeft <= 60 : stryMutAct_9fa48("48478") ? muteLeft >= 60 : stryMutAct_9fa48("48477") ? false : stryMutAct_9fa48("48476") ? true : (stryCov_9fa48("48476", "48477", "48478", "48479"), muteLeft > 60)) {
              if (stryMutAct_9fa48("48480")) {
                {}
              } else {
                stryCov_9fa48("48480");
                muteLeft = (stryMutAct_9fa48("48481") ? muteLeft * 60 : (stryCov_9fa48("48481"), muteLeft / 60)).toFixed(0);
                throw new Error(stryMutAct_9fa48("48482") ? `` : (stryCov_9fa48("48482"), `[[error:user-muted-for-hours, ${muteLeft}]]`));
              }
            } else {
              if (stryMutAct_9fa48("48483")) {
                {}
              } else {
                stryCov_9fa48("48483");
                throw new Error(stryMutAct_9fa48("48484") ? `` : (stryCov_9fa48("48484"), `[[error:user-muted-for-minutes, ${muteLeft.toFixed(0)}]]`));
              }
            }
          }
        }
        if (stryMutAct_9fa48("48488") ? now - userData.joindate >= meta.config.initialPostDelay * 1000 : stryMutAct_9fa48("48487") ? now - userData.joindate <= meta.config.initialPostDelay * 1000 : stryMutAct_9fa48("48486") ? false : stryMutAct_9fa48("48485") ? true : (stryCov_9fa48("48485", "48486", "48487", "48488"), (stryMutAct_9fa48("48489") ? now + userData.joindate : (stryCov_9fa48("48489"), now - userData.joindate)) < (stryMutAct_9fa48("48490") ? meta.config.initialPostDelay / 1000 : (stryCov_9fa48("48490"), meta.config.initialPostDelay * 1000)))) {
          if (stryMutAct_9fa48("48491")) {
            {}
          } else {
            stryCov_9fa48("48491");
            throw new Error(stryMutAct_9fa48("48492") ? `` : (stryCov_9fa48("48492"), `[[error:user-too-new, ${meta.config.initialPostDelay}]]`));
          }
        }
        const lasttime = stryMutAct_9fa48("48495") ? userData[field] && 0 : stryMutAct_9fa48("48494") ? false : stryMutAct_9fa48("48493") ? true : (stryCov_9fa48("48493", "48494", "48495"), userData[field] || 0);
        if (stryMutAct_9fa48("48498") ? meta.config.newbiePostDelay > 0 && meta.config.newbiePostDelayThreshold > userData.reputation || now - lasttime < meta.config.newbiePostDelay * 1000 : stryMutAct_9fa48("48497") ? false : stryMutAct_9fa48("48496") ? true : (stryCov_9fa48("48496", "48497", "48498"), (stryMutAct_9fa48("48500") ? meta.config.newbiePostDelay > 0 || meta.config.newbiePostDelayThreshold > userData.reputation : stryMutAct_9fa48("48499") ? true : (stryCov_9fa48("48499", "48500"), (stryMutAct_9fa48("48503") ? meta.config.newbiePostDelay <= 0 : stryMutAct_9fa48("48502") ? meta.config.newbiePostDelay >= 0 : stryMutAct_9fa48("48501") ? true : (stryCov_9fa48("48501", "48502", "48503"), meta.config.newbiePostDelay > 0)) && (stryMutAct_9fa48("48506") ? meta.config.newbiePostDelayThreshold <= userData.reputation : stryMutAct_9fa48("48505") ? meta.config.newbiePostDelayThreshold >= userData.reputation : stryMutAct_9fa48("48504") ? true : (stryCov_9fa48("48504", "48505", "48506"), meta.config.newbiePostDelayThreshold > userData.reputation)))) && (stryMutAct_9fa48("48509") ? now - lasttime >= meta.config.newbiePostDelay * 1000 : stryMutAct_9fa48("48508") ? now - lasttime <= meta.config.newbiePostDelay * 1000 : stryMutAct_9fa48("48507") ? true : (stryCov_9fa48("48507", "48508", "48509"), (stryMutAct_9fa48("48510") ? now + lasttime : (stryCov_9fa48("48510"), now - lasttime)) < (stryMutAct_9fa48("48511") ? meta.config.newbiePostDelay / 1000 : (stryCov_9fa48("48511"), meta.config.newbiePostDelay * 1000)))))) {
          if (stryMutAct_9fa48("48512")) {
            {}
          } else {
            stryCov_9fa48("48512");
            throw new Error(stryMutAct_9fa48("48513") ? `` : (stryCov_9fa48("48513"), `[[error:too-many-posts-newbie, ${meta.config.newbiePostDelay}, ${meta.config.newbiePostDelayThreshold}]]`));
          }
        } else if (stryMutAct_9fa48("48517") ? now - lasttime >= meta.config.postDelay * 1000 : stryMutAct_9fa48("48516") ? now - lasttime <= meta.config.postDelay * 1000 : stryMutAct_9fa48("48515") ? false : stryMutAct_9fa48("48514") ? true : (stryCov_9fa48("48514", "48515", "48516", "48517"), (stryMutAct_9fa48("48518") ? now + lasttime : (stryCov_9fa48("48518"), now - lasttime)) < (stryMutAct_9fa48("48519") ? meta.config.postDelay / 1000 : (stryCov_9fa48("48519"), meta.config.postDelay * 1000)))) {
          if (stryMutAct_9fa48("48520")) {
            {}
          } else {
            stryCov_9fa48("48520");
            throw new Error(stryMutAct_9fa48("48521") ? `` : (stryCov_9fa48("48521"), `[[error:too-many-posts, ${meta.config.postDelay}]]`));
          }
        }
      }
    }
    User.onNewPostMade = async function (postData) {
      if (stryMutAct_9fa48("48522")) {
        {}
      } else {
        stryCov_9fa48("48522");
        // For scheduled posts, use "action" time. It'll be updated in related cron job when post is published
        const lastposttime = (stryMutAct_9fa48("48526") ? postData.timestamp <= Date.now() : stryMutAct_9fa48("48525") ? postData.timestamp >= Date.now() : stryMutAct_9fa48("48524") ? false : stryMutAct_9fa48("48523") ? true : (stryCov_9fa48("48523", "48524", "48525", "48526"), postData.timestamp > Date.now())) ? Date.now() : postData.timestamp;
        await Promise.all(stryMutAct_9fa48("48527") ? [] : (stryCov_9fa48("48527"), [User.addPostIdToUser(postData), User.setUserField(postData.uid, stryMutAct_9fa48("48528") ? "" : (stryCov_9fa48("48528"), 'lastposttime'), lastposttime), User.updateLastOnlineTime(postData.uid)]));
      }
    };
    User.addPostIdToUser = async function (postData) {
      if (stryMutAct_9fa48("48529")) {
        {}
      } else {
        stryCov_9fa48("48529");
        await db.sortedSetsAdd(stryMutAct_9fa48("48530") ? [] : (stryCov_9fa48("48530"), [stryMutAct_9fa48("48531") ? `` : (stryCov_9fa48("48531"), `uid:${postData.uid}:posts`), stryMutAct_9fa48("48532") ? `` : (stryCov_9fa48("48532"), `cid:${postData.cid}:uid:${postData.uid}:pids`)]), postData.timestamp, postData.pid);
        await User.updatePostCount(postData.uid);
      }
    };
    User.updatePostCount = async uids => {
      if (stryMutAct_9fa48("48533")) {
        {}
      } else {
        stryCov_9fa48("48533");
        uids = Array.isArray(uids) ? uids : stryMutAct_9fa48("48534") ? [] : (stryCov_9fa48("48534"), [uids]);
        const exists = await User.exists(uids);
        uids = stryMutAct_9fa48("48535") ? uids : (stryCov_9fa48("48535"), uids.filter(stryMutAct_9fa48("48536") ? () => undefined : (stryCov_9fa48("48536"), (uid, index) => exists[index])));
        if (stryMutAct_9fa48("48538") ? false : stryMutAct_9fa48("48537") ? true : (stryCov_9fa48("48537", "48538"), uids.length)) {
          if (stryMutAct_9fa48("48539")) {
            {}
          } else {
            stryCov_9fa48("48539");
            const counts = await db.sortedSetsCard(uids.map(stryMutAct_9fa48("48540") ? () => undefined : (stryCov_9fa48("48540"), uid => stryMutAct_9fa48("48541") ? `` : (stryCov_9fa48("48541"), `uid:${uid}:posts`))));
            await Promise.all(stryMutAct_9fa48("48542") ? [] : (stryCov_9fa48("48542"), [db.setObjectBulk(uids.map(stryMutAct_9fa48("48543") ? () => undefined : (stryCov_9fa48("48543"), (uid, index) => stryMutAct_9fa48("48544") ? [] : (stryCov_9fa48("48544"), [stryMutAct_9fa48("48545") ? `` : (stryCov_9fa48("48545"), `user:${uid}`), stryMutAct_9fa48("48546") ? {} : (stryCov_9fa48("48546"), {
              postcount: counts[index]
            })])))), db.sortedSetAdd(stryMutAct_9fa48("48547") ? "" : (stryCov_9fa48("48547"), 'users:postcount'), counts, uids)]));
          }
        }
      }
    };
    User.incrementUserPostCountBy = async function (uid, value) {
      if (stryMutAct_9fa48("48548")) {
        {}
      } else {
        stryCov_9fa48("48548");
        return await incrementUserFieldAndSetBy(uid, stryMutAct_9fa48("48549") ? "" : (stryCov_9fa48("48549"), 'postcount'), stryMutAct_9fa48("48550") ? "" : (stryCov_9fa48("48550"), 'users:postcount'), value);
      }
    };
    User.incrementUserReputationBy = async function (uid, value) {
      if (stryMutAct_9fa48("48551")) {
        {}
      } else {
        stryCov_9fa48("48551");
        return await incrementUserFieldAndSetBy(uid, stryMutAct_9fa48("48552") ? "" : (stryCov_9fa48("48552"), 'reputation'), stryMutAct_9fa48("48553") ? "" : (stryCov_9fa48("48553"), 'users:reputation'), value);
      }
    };
    User.incrementUserFlagsBy = async function (uid, value) {
      if (stryMutAct_9fa48("48554")) {
        {}
      } else {
        stryCov_9fa48("48554");
        return await incrementUserFieldAndSetBy(uid, stryMutAct_9fa48("48555") ? "" : (stryCov_9fa48("48555"), 'flags'), stryMutAct_9fa48("48556") ? "" : (stryCov_9fa48("48556"), 'users:flags'), value);
      }
    };
    async function incrementUserFieldAndSetBy(uid, field, set, value) {
      if (stryMutAct_9fa48("48557")) {
        {}
      } else {
        stryCov_9fa48("48557");
        value = parseInt(value, 10);
        if (stryMutAct_9fa48("48560") ? (!value || !field) && !(parseInt(uid, 10) > 0) : stryMutAct_9fa48("48559") ? false : stryMutAct_9fa48("48558") ? true : (stryCov_9fa48("48558", "48559", "48560"), (stryMutAct_9fa48("48562") ? !value && !field : stryMutAct_9fa48("48561") ? false : (stryCov_9fa48("48561", "48562"), (stryMutAct_9fa48("48563") ? value : (stryCov_9fa48("48563"), !value)) || (stryMutAct_9fa48("48564") ? field : (stryCov_9fa48("48564"), !field)))) || (stryMutAct_9fa48("48565") ? parseInt(uid, 10) > 0 : (stryCov_9fa48("48565"), !(stryMutAct_9fa48("48569") ? parseInt(uid, 10) <= 0 : stryMutAct_9fa48("48568") ? parseInt(uid, 10) >= 0 : stryMutAct_9fa48("48567") ? false : stryMutAct_9fa48("48566") ? true : (stryCov_9fa48("48566", "48567", "48568", "48569"), parseInt(uid, 10) > 0)))))) {
          if (stryMutAct_9fa48("48570")) {
            {}
          } else {
            stryCov_9fa48("48570");
            return;
          }
        }
        const exists = await User.exists(uid);
        if (stryMutAct_9fa48("48573") ? false : stryMutAct_9fa48("48572") ? true : stryMutAct_9fa48("48571") ? exists : (stryCov_9fa48("48571", "48572", "48573"), !exists)) {
          if (stryMutAct_9fa48("48574")) {
            {}
          } else {
            stryCov_9fa48("48574");
            return;
          }
        }
        const newValue = await User.incrementUserFieldBy(uid, field, value);
        await db.sortedSetAdd(set, newValue, uid);
        return newValue;
      }
    }
    User.getPostIds = async function (uid, start, stop) {
      if (stryMutAct_9fa48("48575")) {
        {}
      } else {
        stryCov_9fa48("48575");
        return await db.getSortedSetRevRange(stryMutAct_9fa48("48576") ? `` : (stryCov_9fa48("48576"), `uid:${uid}:posts`), start, stop);
      }
    };
  }
};