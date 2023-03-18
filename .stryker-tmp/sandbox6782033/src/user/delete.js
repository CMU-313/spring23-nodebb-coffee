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
const _ = require('lodash');
const path = require('path');
const nconf = require('nconf');
const util = require('util');
const rimrafAsync = util.promisify(require('rimraf'));
const db = require('../database');
const posts = require('../posts');
const flags = require('../flags');
const topics = require('../topics');
const groups = require('../groups');
const messaging = require('../messaging');
const plugins = require('../plugins');
const batch = require('../batch');
module.exports = function (User) {
  if (stryMutAct_9fa48("46406")) {
    {}
  } else {
    stryCov_9fa48("46406");
    const deletesInProgress = {};
    User.delete = async (callerUid, uid) => {
      if (stryMutAct_9fa48("46407")) {
        {}
      } else {
        stryCov_9fa48("46407");
        await User.deleteContent(callerUid, uid);
        return await User.deleteAccount(uid);
      }
    };
    User.deleteContent = async function (callerUid, uid) {
      if (stryMutAct_9fa48("46408")) {
        {}
      } else {
        stryCov_9fa48("46408");
        if (stryMutAct_9fa48("46412") ? parseInt(uid, 10) > 0 : stryMutAct_9fa48("46411") ? parseInt(uid, 10) < 0 : stryMutAct_9fa48("46410") ? false : stryMutAct_9fa48("46409") ? true : (stryCov_9fa48("46409", "46410", "46411", "46412"), parseInt(uid, 10) <= 0)) {
          if (stryMutAct_9fa48("46413")) {
            {}
          } else {
            stryCov_9fa48("46413");
            throw new Error(stryMutAct_9fa48("46414") ? "" : (stryCov_9fa48("46414"), '[[error:invalid-uid]]'));
          }
        }
        if (stryMutAct_9fa48("46416") ? false : stryMutAct_9fa48("46415") ? true : (stryCov_9fa48("46415", "46416"), deletesInProgress[uid])) {
          if (stryMutAct_9fa48("46417")) {
            {}
          } else {
            stryCov_9fa48("46417");
            throw new Error(stryMutAct_9fa48("46418") ? "" : (stryCov_9fa48("46418"), '[[error:already-deleting]]'));
          }
        }
        deletesInProgress[uid] = stryMutAct_9fa48("46419") ? "" : (stryCov_9fa48("46419"), 'user.delete');
        await deletePosts(callerUid, uid);
        await deleteTopics(callerUid, uid);
        await deleteUploads(callerUid, uid);
        await deleteQueued(uid);
        delete deletesInProgress[uid];
      }
    };
    async function deletePosts(callerUid, uid) {
      if (stryMutAct_9fa48("46420")) {
        {}
      } else {
        stryCov_9fa48("46420");
        await batch.processSortedSet(stryMutAct_9fa48("46421") ? `` : (stryCov_9fa48("46421"), `uid:${uid}:posts`), async pids => {
          if (stryMutAct_9fa48("46422")) {
            {}
          } else {
            stryCov_9fa48("46422");
            await posts.purge(pids, callerUid);
          }
        }, stryMutAct_9fa48("46423") ? {} : (stryCov_9fa48("46423"), {
          alwaysStartAt: 0,
          batch: 500
        }));
      }
    }
    async function deleteTopics(callerUid, uid) {
      if (stryMutAct_9fa48("46424")) {
        {}
      } else {
        stryCov_9fa48("46424");
        await batch.processSortedSet(stryMutAct_9fa48("46425") ? `` : (stryCov_9fa48("46425"), `uid:${uid}:topics`), async ids => {
          if (stryMutAct_9fa48("46426")) {
            {}
          } else {
            stryCov_9fa48("46426");
            await async.eachSeries(ids, async tid => {
              if (stryMutAct_9fa48("46427")) {
                {}
              } else {
                stryCov_9fa48("46427");
                await topics.purge(tid, callerUid);
              }
            });
          }
        }, stryMutAct_9fa48("46428") ? {} : (stryCov_9fa48("46428"), {
          alwaysStartAt: 0
        }));
      }
    }
    async function deleteUploads(callerUid, uid) {
      if (stryMutAct_9fa48("46429")) {
        {}
      } else {
        stryCov_9fa48("46429");
        const uploads = await db.getSortedSetMembers(stryMutAct_9fa48("46430") ? `` : (stryCov_9fa48("46430"), `uid:${uid}:uploads`));
        await User.deleteUpload(callerUid, uid, uploads);
      }
    }
    async function deleteQueued(uid) {
      if (stryMutAct_9fa48("46431")) {
        {}
      } else {
        stryCov_9fa48("46431");
        let deleteIds = stryMutAct_9fa48("46432") ? ["Stryker was here"] : (stryCov_9fa48("46432"), []);
        await batch.processSortedSet(stryMutAct_9fa48("46433") ? "" : (stryCov_9fa48("46433"), 'post:queue'), async ids => {
          if (stryMutAct_9fa48("46434")) {
            {}
          } else {
            stryCov_9fa48("46434");
            const data = await db.getObjects(ids.map(stryMutAct_9fa48("46435") ? () => undefined : (stryCov_9fa48("46435"), id => stryMutAct_9fa48("46436") ? `` : (stryCov_9fa48("46436"), `post:queue:${id}`))));
            const userQueuedIds = stryMutAct_9fa48("46437") ? data.map(d => d.id) : (stryCov_9fa48("46437"), data.filter(stryMutAct_9fa48("46438") ? () => undefined : (stryCov_9fa48("46438"), d => stryMutAct_9fa48("46441") ? parseInt(d.uid, 10) !== parseInt(uid, 10) : stryMutAct_9fa48("46440") ? false : stryMutAct_9fa48("46439") ? true : (stryCov_9fa48("46439", "46440", "46441"), parseInt(d.uid, 10) === parseInt(uid, 10)))).map(stryMutAct_9fa48("46442") ? () => undefined : (stryCov_9fa48("46442"), d => d.id)));
            deleteIds = deleteIds.concat(userQueuedIds);
          }
        }, stryMutAct_9fa48("46443") ? {} : (stryCov_9fa48("46443"), {
          batch: 500
        }));
        await async.eachSeries(deleteIds, posts.removeFromQueue);
      }
    }
    async function removeFromSortedSets(uid) {
      if (stryMutAct_9fa48("46444")) {
        {}
      } else {
        stryCov_9fa48("46444");
        await db.sortedSetsRemove(stryMutAct_9fa48("46445") ? [] : (stryCov_9fa48("46445"), [stryMutAct_9fa48("46446") ? "" : (stryCov_9fa48("46446"), 'users:joindate'), stryMutAct_9fa48("46447") ? "" : (stryCov_9fa48("46447"), 'users:postcount'), stryMutAct_9fa48("46448") ? "" : (stryCov_9fa48("46448"), 'users:reputation'), stryMutAct_9fa48("46449") ? "" : (stryCov_9fa48("46449"), 'users:banned'), stryMutAct_9fa48("46450") ? "" : (stryCov_9fa48("46450"), 'users:banned:expire'), stryMutAct_9fa48("46451") ? "" : (stryCov_9fa48("46451"), 'users:flags'), stryMutAct_9fa48("46452") ? "" : (stryCov_9fa48("46452"), 'users:online'), stryMutAct_9fa48("46453") ? "" : (stryCov_9fa48("46453"), 'digest:day:uids'), stryMutAct_9fa48("46454") ? "" : (stryCov_9fa48("46454"), 'digest:week:uids'), stryMutAct_9fa48("46455") ? "" : (stryCov_9fa48("46455"), 'digest:biweek:uids'), stryMutAct_9fa48("46456") ? "" : (stryCov_9fa48("46456"), 'digest:month:uids')]), uid);
      }
    }
    User.deleteAccount = async function (uid) {
      if (stryMutAct_9fa48("46457")) {
        {}
      } else {
        stryCov_9fa48("46457");
        if (stryMutAct_9fa48("46460") ? deletesInProgress[uid] !== 'user.deleteAccount' : stryMutAct_9fa48("46459") ? false : stryMutAct_9fa48("46458") ? true : (stryCov_9fa48("46458", "46459", "46460"), deletesInProgress[uid] === (stryMutAct_9fa48("46461") ? "" : (stryCov_9fa48("46461"), 'user.deleteAccount')))) {
          if (stryMutAct_9fa48("46462")) {
            {}
          } else {
            stryCov_9fa48("46462");
            throw new Error(stryMutAct_9fa48("46463") ? "" : (stryCov_9fa48("46463"), '[[error:already-deleting]]'));
          }
        }
        deletesInProgress[uid] = stryMutAct_9fa48("46464") ? "" : (stryCov_9fa48("46464"), 'user.deleteAccount');
        await removeFromSortedSets(uid);
        const userData = await db.getObject(stryMutAct_9fa48("46465") ? `` : (stryCov_9fa48("46465"), `user:${uid}`));
        if (stryMutAct_9fa48("46468") ? !userData && !userData.username : stryMutAct_9fa48("46467") ? false : stryMutAct_9fa48("46466") ? true : (stryCov_9fa48("46466", "46467", "46468"), (stryMutAct_9fa48("46469") ? userData : (stryCov_9fa48("46469"), !userData)) || (stryMutAct_9fa48("46470") ? userData.username : (stryCov_9fa48("46470"), !userData.username)))) {
          if (stryMutAct_9fa48("46471")) {
            {}
          } else {
            stryCov_9fa48("46471");
            delete deletesInProgress[uid];
            throw new Error(stryMutAct_9fa48("46472") ? "" : (stryCov_9fa48("46472"), '[[error:no-user]]'));
          }
        }
        await plugins.hooks.fire(stryMutAct_9fa48("46473") ? "" : (stryCov_9fa48("46473"), 'static:user.delete'), stryMutAct_9fa48("46474") ? {} : (stryCov_9fa48("46474"), {
          uid: uid,
          userData: userData
        }));
        await deleteVotes(uid);
        await deleteChats(uid);
        await User.auth.revokeAllSessions(uid);
        const keys = stryMutAct_9fa48("46475") ? [] : (stryCov_9fa48("46475"), [stryMutAct_9fa48("46476") ? `` : (stryCov_9fa48("46476"), `uid:${uid}:notifications:read`), stryMutAct_9fa48("46477") ? `` : (stryCov_9fa48("46477"), `uid:${uid}:notifications:unread`), stryMutAct_9fa48("46478") ? `` : (stryCov_9fa48("46478"), `uid:${uid}:bookmarks`), stryMutAct_9fa48("46479") ? `` : (stryCov_9fa48("46479"), `uid:${uid}:tids_read`), stryMutAct_9fa48("46480") ? `` : (stryCov_9fa48("46480"), `uid:${uid}:tids_unread`), stryMutAct_9fa48("46481") ? `` : (stryCov_9fa48("46481"), `uid:${uid}:followed_tids`), stryMutAct_9fa48("46482") ? `` : (stryCov_9fa48("46482"), `uid:${uid}:ignored_tids`), stryMutAct_9fa48("46483") ? `` : (stryCov_9fa48("46483"), `uid:${uid}:blocked_uids`), stryMutAct_9fa48("46484") ? `` : (stryCov_9fa48("46484"), `user:${uid}:settings`), stryMutAct_9fa48("46485") ? `` : (stryCov_9fa48("46485"), `user:${uid}:usernames`), stryMutAct_9fa48("46486") ? `` : (stryCov_9fa48("46486"), `user:${uid}:emails`), stryMutAct_9fa48("46487") ? `` : (stryCov_9fa48("46487"), `uid:${uid}:topics`), stryMutAct_9fa48("46488") ? `` : (stryCov_9fa48("46488"), `uid:${uid}:posts`), stryMutAct_9fa48("46489") ? `` : (stryCov_9fa48("46489"), `uid:${uid}:chats`), stryMutAct_9fa48("46490") ? `` : (stryCov_9fa48("46490"), `uid:${uid}:chats:unread`), stryMutAct_9fa48("46491") ? `` : (stryCov_9fa48("46491"), `uid:${uid}:chat:rooms`), stryMutAct_9fa48("46492") ? `` : (stryCov_9fa48("46492"), `uid:${uid}:chat:rooms:unread`), stryMutAct_9fa48("46493") ? `` : (stryCov_9fa48("46493"), `uid:${uid}:upvote`), stryMutAct_9fa48("46494") ? `` : (stryCov_9fa48("46494"), `uid:${uid}:downvote`), stryMutAct_9fa48("46495") ? `` : (stryCov_9fa48("46495"), `uid:${uid}:flag:pids`), stryMutAct_9fa48("46496") ? `` : (stryCov_9fa48("46496"), `uid:${uid}:sessions`), stryMutAct_9fa48("46497") ? `` : (stryCov_9fa48("46497"), `uid:${uid}:sessionUUID:sessionId`), stryMutAct_9fa48("46498") ? `` : (stryCov_9fa48("46498"), `invitation:uid:${uid}`)]);
        const bulkRemove = stryMutAct_9fa48("46499") ? [] : (stryCov_9fa48("46499"), [stryMutAct_9fa48("46500") ? [] : (stryCov_9fa48("46500"), [stryMutAct_9fa48("46501") ? "" : (stryCov_9fa48("46501"), 'username:uid'), userData.username]), stryMutAct_9fa48("46502") ? [] : (stryCov_9fa48("46502"), [stryMutAct_9fa48("46503") ? "" : (stryCov_9fa48("46503"), 'username:sorted'), stryMutAct_9fa48("46504") ? `` : (stryCov_9fa48("46504"), `${stryMutAct_9fa48("46505") ? userData.username.toUpperCase() : (stryCov_9fa48("46505"), userData.username.toLowerCase())}:${uid}`)]), stryMutAct_9fa48("46506") ? [] : (stryCov_9fa48("46506"), [stryMutAct_9fa48("46507") ? "" : (stryCov_9fa48("46507"), 'userslug:uid'), userData.userslug]), stryMutAct_9fa48("46508") ? [] : (stryCov_9fa48("46508"), [stryMutAct_9fa48("46509") ? "" : (stryCov_9fa48("46509"), 'fullname:uid'), userData.fullname])]);
        if (stryMutAct_9fa48("46511") ? false : stryMutAct_9fa48("46510") ? true : (stryCov_9fa48("46510", "46511"), userData.email)) {
          if (stryMutAct_9fa48("46512")) {
            {}
          } else {
            stryCov_9fa48("46512");
            bulkRemove.push(stryMutAct_9fa48("46513") ? [] : (stryCov_9fa48("46513"), [stryMutAct_9fa48("46514") ? "" : (stryCov_9fa48("46514"), 'email:uid'), stryMutAct_9fa48("46515") ? userData.email.toUpperCase() : (stryCov_9fa48("46515"), userData.email.toLowerCase())]));
            bulkRemove.push(stryMutAct_9fa48("46516") ? [] : (stryCov_9fa48("46516"), [stryMutAct_9fa48("46517") ? "" : (stryCov_9fa48("46517"), 'email:sorted'), stryMutAct_9fa48("46518") ? `` : (stryCov_9fa48("46518"), `${stryMutAct_9fa48("46519") ? userData.email.toUpperCase() : (stryCov_9fa48("46519"), userData.email.toLowerCase())}:${uid}`)]));
          }
        }
        if (stryMutAct_9fa48("46521") ? false : stryMutAct_9fa48("46520") ? true : (stryCov_9fa48("46520", "46521"), userData.fullname)) {
          if (stryMutAct_9fa48("46522")) {
            {}
          } else {
            stryCov_9fa48("46522");
            bulkRemove.push(stryMutAct_9fa48("46523") ? [] : (stryCov_9fa48("46523"), [stryMutAct_9fa48("46524") ? "" : (stryCov_9fa48("46524"), 'fullname:sorted'), stryMutAct_9fa48("46525") ? `` : (stryCov_9fa48("46525"), `${stryMutAct_9fa48("46526") ? userData.fullname.toUpperCase() : (stryCov_9fa48("46526"), userData.fullname.toLowerCase())}:${uid}`)]));
          }
        }
        await Promise.all(stryMutAct_9fa48("46527") ? [] : (stryCov_9fa48("46527"), [db.sortedSetRemoveBulk(bulkRemove), db.decrObjectField(stryMutAct_9fa48("46528") ? "" : (stryCov_9fa48("46528"), 'global'), stryMutAct_9fa48("46529") ? "" : (stryCov_9fa48("46529"), 'userCount')), db.deleteAll(keys), db.setRemove(stryMutAct_9fa48("46530") ? "" : (stryCov_9fa48("46530"), 'invitation:uids'), uid), deleteUserIps(uid), deleteUserFromFollowers(uid), deleteImages(uid), groups.leaveAllGroups(uid), flags.resolveFlag(stryMutAct_9fa48("46531") ? "" : (stryCov_9fa48("46531"), 'user'), uid, uid), User.reset.cleanByUid(uid)]));
        await db.deleteAll(stryMutAct_9fa48("46532") ? [] : (stryCov_9fa48("46532"), [stryMutAct_9fa48("46533") ? `` : (stryCov_9fa48("46533"), `followers:${uid}`), stryMutAct_9fa48("46534") ? `` : (stryCov_9fa48("46534"), `following:${uid}`), stryMutAct_9fa48("46535") ? `` : (stryCov_9fa48("46535"), `user:${uid}`)]));
        delete deletesInProgress[uid];
        return userData;
      }
    };
    async function deleteVotes(uid) {
      if (stryMutAct_9fa48("46536")) {
        {}
      } else {
        stryCov_9fa48("46536");
        const [upvotedPids, downvotedPids] = await Promise.all(stryMutAct_9fa48("46537") ? [] : (stryCov_9fa48("46537"), [db.getSortedSetRange(stryMutAct_9fa48("46538") ? `` : (stryCov_9fa48("46538"), `uid:${uid}:upvote`), 0, stryMutAct_9fa48("46539") ? +1 : (stryCov_9fa48("46539"), -1)), db.getSortedSetRange(stryMutAct_9fa48("46540") ? `` : (stryCov_9fa48("46540"), `uid:${uid}:downvote`), 0, stryMutAct_9fa48("46541") ? +1 : (stryCov_9fa48("46541"), -1))]));
        const pids = _.uniq(stryMutAct_9fa48("46542") ? upvotedPids.concat(downvotedPids) : (stryCov_9fa48("46542"), upvotedPids.concat(downvotedPids).filter(Boolean)));
        await async.eachSeries(pids, async pid => {
          if (stryMutAct_9fa48("46543")) {
            {}
          } else {
            stryCov_9fa48("46543");
            await posts.unvote(pid, uid);
          }
        });
      }
    }
    async function deleteChats(uid) {
      if (stryMutAct_9fa48("46544")) {
        {}
      } else {
        stryCov_9fa48("46544");
        const roomIds = await db.getSortedSetRange(stryMutAct_9fa48("46545") ? `` : (stryCov_9fa48("46545"), `uid:${uid}:chat:rooms`), 0, stryMutAct_9fa48("46546") ? +1 : (stryCov_9fa48("46546"), -1));
        const userKeys = roomIds.map(stryMutAct_9fa48("46547") ? () => undefined : (stryCov_9fa48("46547"), roomId => stryMutAct_9fa48("46548") ? `` : (stryCov_9fa48("46548"), `uid:${uid}:chat:room:${roomId}:mids`)));
        await Promise.all(stryMutAct_9fa48("46549") ? [] : (stryCov_9fa48("46549"), [messaging.leaveRooms(uid, roomIds), db.deleteAll(userKeys)]));
      }
    }
    async function deleteUserIps(uid) {
      if (stryMutAct_9fa48("46550")) {
        {}
      } else {
        stryCov_9fa48("46550");
        const ips = await db.getSortedSetRange(stryMutAct_9fa48("46551") ? `` : (stryCov_9fa48("46551"), `uid:${uid}:ip`), 0, stryMutAct_9fa48("46552") ? +1 : (stryCov_9fa48("46552"), -1));
        await db.sortedSetsRemove(ips.map(stryMutAct_9fa48("46553") ? () => undefined : (stryCov_9fa48("46553"), ip => stryMutAct_9fa48("46554") ? `` : (stryCov_9fa48("46554"), `ip:${ip}:uid`))), uid);
        await db.delete(stryMutAct_9fa48("46555") ? `` : (stryCov_9fa48("46555"), `uid:${uid}:ip`));
      }
    }
    async function deleteUserFromFollowers(uid) {
      if (stryMutAct_9fa48("46556")) {
        {}
      } else {
        stryCov_9fa48("46556");
        const [followers, following] = await Promise.all(stryMutAct_9fa48("46557") ? [] : (stryCov_9fa48("46557"), [db.getSortedSetRange(stryMutAct_9fa48("46558") ? `` : (stryCov_9fa48("46558"), `followers:${uid}`), 0, stryMutAct_9fa48("46559") ? +1 : (stryCov_9fa48("46559"), -1)), db.getSortedSetRange(stryMutAct_9fa48("46560") ? `` : (stryCov_9fa48("46560"), `following:${uid}`), 0, stryMutAct_9fa48("46561") ? +1 : (stryCov_9fa48("46561"), -1))]));
        async function updateCount(uids, name, fieldName) {
          if (stryMutAct_9fa48("46562")) {
            {}
          } else {
            stryCov_9fa48("46562");
            await async.each(uids, async uid => {
              if (stryMutAct_9fa48("46563")) {
                {}
              } else {
                stryCov_9fa48("46563");
                let count = await db.sortedSetCard(stryMutAct_9fa48("46564") ? name - uid : (stryCov_9fa48("46564"), name + uid));
                count = stryMutAct_9fa48("46567") ? parseInt(count, 10) && 0 : stryMutAct_9fa48("46566") ? false : stryMutAct_9fa48("46565") ? true : (stryCov_9fa48("46565", "46566", "46567"), parseInt(count, 10) || 0);
                await db.setObjectField(stryMutAct_9fa48("46568") ? `` : (stryCov_9fa48("46568"), `user:${uid}`), fieldName, count);
              }
            });
          }
        }
        const followingSets = followers.map(stryMutAct_9fa48("46569") ? () => undefined : (stryCov_9fa48("46569"), uid => stryMutAct_9fa48("46570") ? `` : (stryCov_9fa48("46570"), `following:${uid}`)));
        const followerSets = following.map(stryMutAct_9fa48("46571") ? () => undefined : (stryCov_9fa48("46571"), uid => stryMutAct_9fa48("46572") ? `` : (stryCov_9fa48("46572"), `followers:${uid}`)));
        await Promise.all(stryMutAct_9fa48("46573") ? [] : (stryCov_9fa48("46573"), [db.sortedSetsRemove(followerSets.concat(followingSets), uid), updateCount(following, stryMutAct_9fa48("46574") ? "" : (stryCov_9fa48("46574"), 'followers:'), stryMutAct_9fa48("46575") ? "" : (stryCov_9fa48("46575"), 'followerCount')), updateCount(followers, stryMutAct_9fa48("46576") ? "" : (stryCov_9fa48("46576"), 'following:'), stryMutAct_9fa48("46577") ? "" : (stryCov_9fa48("46577"), 'followingCount'))]));
      }
    }
    async function deleteImages(uid) {
      if (stryMutAct_9fa48("46578")) {
        {}
      } else {
        stryCov_9fa48("46578");
        const folder = path.join(nconf.get(stryMutAct_9fa48("46579") ? "" : (stryCov_9fa48("46579"), 'upload_path')), stryMutAct_9fa48("46580") ? "" : (stryCov_9fa48("46580"), 'profile'));
        await Promise.all(stryMutAct_9fa48("46581") ? [] : (stryCov_9fa48("46581"), [rimrafAsync(path.join(folder, stryMutAct_9fa48("46582") ? `` : (stryCov_9fa48("46582"), `${uid}-profilecover*`))), rimrafAsync(path.join(folder, stryMutAct_9fa48("46583") ? `` : (stryCov_9fa48("46583"), `${uid}-profileavatar*`)))]));
      }
    }
  }
};