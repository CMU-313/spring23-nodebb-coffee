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
const posts = require('../posts');
const categories = require('../categories');
const privileges = require('../privileges');
const plugins = require('../plugins');
const meta = require('../meta');
module.exports = function (Topics) {
  if (stryMutAct_9fa48("38702")) {
    {}
  } else {
    stryCov_9fa48("38702");
    Topics.createTopicFromPosts = async function (uid, title, pids, fromTid) {
      if (stryMutAct_9fa48("38703")) {
        {}
      } else {
        stryCov_9fa48("38703");
        if (stryMutAct_9fa48("38705") ? false : stryMutAct_9fa48("38704") ? true : (stryCov_9fa48("38704", "38705"), title)) {
          if (stryMutAct_9fa48("38706")) {
            {}
          } else {
            stryCov_9fa48("38706");
            title = stryMutAct_9fa48("38707") ? title : (stryCov_9fa48("38707"), title.trim());
          }
        }
        if (stryMutAct_9fa48("38711") ? title.length >= meta.config.minimumTitleLength : stryMutAct_9fa48("38710") ? title.length <= meta.config.minimumTitleLength : stryMutAct_9fa48("38709") ? false : stryMutAct_9fa48("38708") ? true : (stryCov_9fa48("38708", "38709", "38710", "38711"), title.length < meta.config.minimumTitleLength)) {
          if (stryMutAct_9fa48("38712")) {
            {}
          } else {
            stryCov_9fa48("38712");
            throw new Error(stryMutAct_9fa48("38713") ? `` : (stryCov_9fa48("38713"), `[[error:title-too-short, ${meta.config.minimumTitleLength}]]`));
          }
        } else if (stryMutAct_9fa48("38717") ? title.length <= meta.config.maximumTitleLength : stryMutAct_9fa48("38716") ? title.length >= meta.config.maximumTitleLength : stryMutAct_9fa48("38715") ? false : stryMutAct_9fa48("38714") ? true : (stryCov_9fa48("38714", "38715", "38716", "38717"), title.length > meta.config.maximumTitleLength)) {
          if (stryMutAct_9fa48("38718")) {
            {}
          } else {
            stryCov_9fa48("38718");
            throw new Error(stryMutAct_9fa48("38719") ? `` : (stryCov_9fa48("38719"), `[[error:title-too-long, ${meta.config.maximumTitleLength}]]`));
          }
        }
        if (stryMutAct_9fa48("38722") ? !pids && !pids.length : stryMutAct_9fa48("38721") ? false : stryMutAct_9fa48("38720") ? true : (stryCov_9fa48("38720", "38721", "38722"), (stryMutAct_9fa48("38723") ? pids : (stryCov_9fa48("38723"), !pids)) || (stryMutAct_9fa48("38724") ? pids.length : (stryCov_9fa48("38724"), !pids.length)))) {
          if (stryMutAct_9fa48("38725")) {
            {}
          } else {
            stryCov_9fa48("38725");
            throw new Error(stryMutAct_9fa48("38726") ? "" : (stryCov_9fa48("38726"), '[[error:invalid-pid]]'));
          }
        }
        stryMutAct_9fa48("38727") ? pids : (stryCov_9fa48("38727"), pids.sort(stryMutAct_9fa48("38728") ? () => undefined : (stryCov_9fa48("38728"), (a, b) => stryMutAct_9fa48("38729") ? a + b : (stryCov_9fa48("38729"), a - b))));
        const mainPid = pids[0];
        const cid = await posts.getCidByPid(mainPid);
        const [postData, isAdminOrMod] = await Promise.all(stryMutAct_9fa48("38730") ? [] : (stryCov_9fa48("38730"), [posts.getPostData(mainPid), privileges.categories.isAdminOrMod(cid, uid)]));
        if (stryMutAct_9fa48("38733") ? false : stryMutAct_9fa48("38732") ? true : stryMutAct_9fa48("38731") ? isAdminOrMod : (stryCov_9fa48("38731", "38732", "38733"), !isAdminOrMod)) {
          if (stryMutAct_9fa48("38734")) {
            {}
          } else {
            stryCov_9fa48("38734");
            throw new Error(stryMutAct_9fa48("38735") ? "" : (stryCov_9fa48("38735"), '[[error:no-privileges]]'));
          }
        }
        const scheduled = stryMutAct_9fa48("38739") ? postData.timestamp <= Date.now() : stryMutAct_9fa48("38738") ? postData.timestamp >= Date.now() : stryMutAct_9fa48("38737") ? false : stryMutAct_9fa48("38736") ? true : (stryCov_9fa48("38736", "38737", "38738", "38739"), postData.timestamp > Date.now());
        const params = stryMutAct_9fa48("38740") ? {} : (stryCov_9fa48("38740"), {
          uid: postData.uid,
          title: title,
          cid: cid,
          timestamp: stryMutAct_9fa48("38743") ? scheduled || postData.timestamp : stryMutAct_9fa48("38742") ? false : stryMutAct_9fa48("38741") ? true : (stryCov_9fa48("38741", "38742", "38743"), scheduled && postData.timestamp)
        });
        const result = await plugins.hooks.fire(stryMutAct_9fa48("38744") ? "" : (stryCov_9fa48("38744"), 'filter:topic.fork'), stryMutAct_9fa48("38745") ? {} : (stryCov_9fa48("38745"), {
          params: params,
          tid: postData.tid
        }));
        const tid = await Topics.create(result.params);
        await Topics.updateTopicBookmarks(fromTid, pids);
        for (const pid of pids) {
          if (stryMutAct_9fa48("38746")) {
            {}
          } else {
            stryCov_9fa48("38746");
            /* eslint-disable no-await-in-loop */
            const canEdit = await privileges.posts.canEdit(pid, uid);
            if (stryMutAct_9fa48("38749") ? false : stryMutAct_9fa48("38748") ? true : stryMutAct_9fa48("38747") ? canEdit.flag : (stryCov_9fa48("38747", "38748", "38749"), !canEdit.flag)) {
              if (stryMutAct_9fa48("38750")) {
                {}
              } else {
                stryCov_9fa48("38750");
                throw new Error(canEdit.message);
              }
            }
            await Topics.movePostToTopic(uid, pid, tid, scheduled);
          }
        }
        await Topics.updateLastPostTime(tid, scheduled ? stryMutAct_9fa48("38751") ? postData.timestamp - 1 : (stryCov_9fa48("38751"), postData.timestamp + 1) : Date.now());
        await Promise.all(stryMutAct_9fa48("38752") ? [] : (stryCov_9fa48("38752"), [Topics.setTopicFields(tid, stryMutAct_9fa48("38753") ? {} : (stryCov_9fa48("38753"), {
          upvotes: postData.upvotes,
          downvotes: postData.downvotes
        })), db.sortedSetsAdd(stryMutAct_9fa48("38754") ? [] : (stryCov_9fa48("38754"), [stryMutAct_9fa48("38755") ? "" : (stryCov_9fa48("38755"), 'topics:votes'), stryMutAct_9fa48("38756") ? `` : (stryCov_9fa48("38756"), `cid:${cid}:tids:votes`)]), postData.votes, tid), Topics.events.log(fromTid, stryMutAct_9fa48("38757") ? {} : (stryCov_9fa48("38757"), {
          type: stryMutAct_9fa48("38758") ? "" : (stryCov_9fa48("38758"), 'fork'),
          uid,
          href: stryMutAct_9fa48("38759") ? `` : (stryCov_9fa48("38759"), `/topic/${tid}`),
          timestamp: postData.timestamp
        }))]));
        plugins.hooks.fire(stryMutAct_9fa48("38760") ? "" : (stryCov_9fa48("38760"), 'action:topic.fork'), stryMutAct_9fa48("38761") ? {} : (stryCov_9fa48("38761"), {
          tid: tid,
          fromTid: fromTid,
          uid: uid
        }));
        return await Topics.getTopicData(tid);
      }
    };
    Topics.movePostToTopic = async function (callerUid, pid, tid, forceScheduled = stryMutAct_9fa48("38762") ? true : (stryCov_9fa48("38762"), false)) {
      if (stryMutAct_9fa48("38763")) {
        {}
      } else {
        stryCov_9fa48("38763");
        tid = parseInt(tid, 10);
        const topicData = await Topics.getTopicFields(tid, stryMutAct_9fa48("38764") ? [] : (stryCov_9fa48("38764"), [stryMutAct_9fa48("38765") ? "" : (stryCov_9fa48("38765"), 'tid'), stryMutAct_9fa48("38766") ? "" : (stryCov_9fa48("38766"), 'scheduled')]));
        if (stryMutAct_9fa48("38769") ? false : stryMutAct_9fa48("38768") ? true : stryMutAct_9fa48("38767") ? topicData.tid : (stryCov_9fa48("38767", "38768", "38769"), !topicData.tid)) {
          if (stryMutAct_9fa48("38770")) {
            {}
          } else {
            stryCov_9fa48("38770");
            throw new Error(stryMutAct_9fa48("38771") ? "" : (stryCov_9fa48("38771"), '[[error:no-topic]]'));
          }
        }
        if (stryMutAct_9fa48("38774") ? !forceScheduled || topicData.scheduled : stryMutAct_9fa48("38773") ? false : stryMutAct_9fa48("38772") ? true : (stryCov_9fa48("38772", "38773", "38774"), (stryMutAct_9fa48("38775") ? forceScheduled : (stryCov_9fa48("38775"), !forceScheduled)) && topicData.scheduled)) {
          if (stryMutAct_9fa48("38776")) {
            {}
          } else {
            stryCov_9fa48("38776");
            throw new Error(stryMutAct_9fa48("38777") ? "" : (stryCov_9fa48("38777"), '[[error:cant-move-posts-to-scheduled]]'));
          }
        }
        const postData = await posts.getPostFields(pid, stryMutAct_9fa48("38778") ? [] : (stryCov_9fa48("38778"), [stryMutAct_9fa48("38779") ? "" : (stryCov_9fa48("38779"), 'tid'), stryMutAct_9fa48("38780") ? "" : (stryCov_9fa48("38780"), 'uid'), stryMutAct_9fa48("38781") ? "" : (stryCov_9fa48("38781"), 'timestamp'), stryMutAct_9fa48("38782") ? "" : (stryCov_9fa48("38782"), 'upvotes'), stryMutAct_9fa48("38783") ? "" : (stryCov_9fa48("38783"), 'downvotes')]));
        if (stryMutAct_9fa48("38786") ? !postData && !postData.tid : stryMutAct_9fa48("38785") ? false : stryMutAct_9fa48("38784") ? true : (stryCov_9fa48("38784", "38785", "38786"), (stryMutAct_9fa48("38787") ? postData : (stryCov_9fa48("38787"), !postData)) || (stryMutAct_9fa48("38788") ? postData.tid : (stryCov_9fa48("38788"), !postData.tid)))) {
          if (stryMutAct_9fa48("38789")) {
            {}
          } else {
            stryCov_9fa48("38789");
            throw new Error(stryMutAct_9fa48("38790") ? "" : (stryCov_9fa48("38790"), '[[error:no-post]]'));
          }
        }
        const isSourceTopicScheduled = await Topics.getTopicField(postData.tid, stryMutAct_9fa48("38791") ? "" : (stryCov_9fa48("38791"), 'scheduled'));
        if (stryMutAct_9fa48("38794") ? !forceScheduled || isSourceTopicScheduled : stryMutAct_9fa48("38793") ? false : stryMutAct_9fa48("38792") ? true : (stryCov_9fa48("38792", "38793", "38794"), (stryMutAct_9fa48("38795") ? forceScheduled : (stryCov_9fa48("38795"), !forceScheduled)) && isSourceTopicScheduled)) {
          if (stryMutAct_9fa48("38796")) {
            {}
          } else {
            stryCov_9fa48("38796");
            throw new Error(stryMutAct_9fa48("38797") ? "" : (stryCov_9fa48("38797"), '[[error:cant-move-from-scheduled-to-existing]]'));
          }
        }
        if (stryMutAct_9fa48("38800") ? postData.tid !== tid : stryMutAct_9fa48("38799") ? false : stryMutAct_9fa48("38798") ? true : (stryCov_9fa48("38798", "38799", "38800"), postData.tid === tid)) {
          if (stryMutAct_9fa48("38801")) {
            {}
          } else {
            stryCov_9fa48("38801");
            throw new Error(stryMutAct_9fa48("38802") ? "" : (stryCov_9fa48("38802"), '[[error:cant-move-to-same-topic]]'));
          }
        }
        postData.pid = pid;
        await Topics.removePostFromTopic(postData.tid, postData);
        await Promise.all(stryMutAct_9fa48("38803") ? [] : (stryCov_9fa48("38803"), [updateCategory(postData, tid), posts.setPostField(pid, stryMutAct_9fa48("38804") ? "" : (stryCov_9fa48("38804"), 'tid'), tid), Topics.addPostToTopic(tid, postData)]));
        await Promise.all(stryMutAct_9fa48("38805") ? [] : (stryCov_9fa48("38805"), [Topics.updateLastPostTimeFromLastPid(tid), Topics.updateLastPostTimeFromLastPid(postData.tid)]));
        plugins.hooks.fire(stryMutAct_9fa48("38806") ? "" : (stryCov_9fa48("38806"), 'action:post.move'), stryMutAct_9fa48("38807") ? {} : (stryCov_9fa48("38807"), {
          uid: callerUid,
          post: postData,
          tid: tid
        }));
      }
    };
    async function updateCategory(postData, toTid) {
      if (stryMutAct_9fa48("38808")) {
        {}
      } else {
        stryCov_9fa48("38808");
        const topicData = await Topics.getTopicsFields(stryMutAct_9fa48("38809") ? [] : (stryCov_9fa48("38809"), [postData.tid, toTid]), stryMutAct_9fa48("38810") ? [] : (stryCov_9fa48("38810"), [stryMutAct_9fa48("38811") ? "" : (stryCov_9fa48("38811"), 'cid'), stryMutAct_9fa48("38812") ? "" : (stryCov_9fa48("38812"), 'pinned')]));
        if (stryMutAct_9fa48("38815") ? !topicData[0].cid && !topicData[1].cid : stryMutAct_9fa48("38814") ? false : stryMutAct_9fa48("38813") ? true : (stryCov_9fa48("38813", "38814", "38815"), (stryMutAct_9fa48("38816") ? topicData[0].cid : (stryCov_9fa48("38816"), !topicData[0].cid)) || (stryMutAct_9fa48("38817") ? topicData[1].cid : (stryCov_9fa48("38817"), !topicData[1].cid)))) {
          if (stryMutAct_9fa48("38818")) {
            {}
          } else {
            stryCov_9fa48("38818");
            return;
          }
        }
        if (stryMutAct_9fa48("38821") ? false : stryMutAct_9fa48("38820") ? true : stryMutAct_9fa48("38819") ? topicData[0].pinned : (stryCov_9fa48("38819", "38820", "38821"), !topicData[0].pinned)) {
          if (stryMutAct_9fa48("38822")) {
            {}
          } else {
            stryCov_9fa48("38822");
            await db.sortedSetIncrBy(stryMutAct_9fa48("38823") ? `` : (stryCov_9fa48("38823"), `cid:${topicData[0].cid}:tids:posts`), stryMutAct_9fa48("38824") ? +1 : (stryCov_9fa48("38824"), -1), postData.tid);
          }
        }
        if (stryMutAct_9fa48("38827") ? false : stryMutAct_9fa48("38826") ? true : stryMutAct_9fa48("38825") ? topicData[1].pinned : (stryCov_9fa48("38825", "38826", "38827"), !topicData[1].pinned)) {
          if (stryMutAct_9fa48("38828")) {
            {}
          } else {
            stryCov_9fa48("38828");
            await db.sortedSetIncrBy(stryMutAct_9fa48("38829") ? `` : (stryCov_9fa48("38829"), `cid:${topicData[1].cid}:tids:posts`), 1, toTid);
          }
        }
        if (stryMutAct_9fa48("38832") ? topicData[0].cid !== topicData[1].cid : stryMutAct_9fa48("38831") ? false : stryMutAct_9fa48("38830") ? true : (stryCov_9fa48("38830", "38831", "38832"), topicData[0].cid === topicData[1].cid)) {
          if (stryMutAct_9fa48("38833")) {
            {}
          } else {
            stryCov_9fa48("38833");
            await categories.updateRecentTidForCid(topicData[0].cid);
            return;
          }
        }
        const removeFrom = stryMutAct_9fa48("38834") ? [] : (stryCov_9fa48("38834"), [stryMutAct_9fa48("38835") ? `` : (stryCov_9fa48("38835"), `cid:${topicData[0].cid}:pids`), stryMutAct_9fa48("38836") ? `` : (stryCov_9fa48("38836"), `cid:${topicData[0].cid}:uid:${postData.uid}:pids`), stryMutAct_9fa48("38837") ? `` : (stryCov_9fa48("38837"), `cid:${topicData[0].cid}:uid:${postData.uid}:pids:votes`)]);
        const tasks = stryMutAct_9fa48("38838") ? [] : (stryCov_9fa48("38838"), [db.incrObjectFieldBy(stryMutAct_9fa48("38839") ? `` : (stryCov_9fa48("38839"), `category:${topicData[0].cid}`), stryMutAct_9fa48("38840") ? "" : (stryCov_9fa48("38840"), 'post_count'), stryMutAct_9fa48("38841") ? +1 : (stryCov_9fa48("38841"), -1)), db.incrObjectFieldBy(stryMutAct_9fa48("38842") ? `` : (stryCov_9fa48("38842"), `category:${topicData[1].cid}`), stryMutAct_9fa48("38843") ? "" : (stryCov_9fa48("38843"), 'post_count'), 1), db.sortedSetRemove(removeFrom, postData.pid), db.sortedSetAdd(stryMutAct_9fa48("38844") ? `` : (stryCov_9fa48("38844"), `cid:${topicData[1].cid}:pids`), postData.timestamp, postData.pid), db.sortedSetAdd(stryMutAct_9fa48("38845") ? `` : (stryCov_9fa48("38845"), `cid:${topicData[1].cid}:uid:${postData.uid}:pids`), postData.timestamp, postData.pid)]);
        if (stryMutAct_9fa48("38848") ? postData.votes > 0 && postData.votes < 0 : stryMutAct_9fa48("38847") ? false : stryMutAct_9fa48("38846") ? true : (stryCov_9fa48("38846", "38847", "38848"), (stryMutAct_9fa48("38851") ? postData.votes <= 0 : stryMutAct_9fa48("38850") ? postData.votes >= 0 : stryMutAct_9fa48("38849") ? false : (stryCov_9fa48("38849", "38850", "38851"), postData.votes > 0)) || (stryMutAct_9fa48("38854") ? postData.votes >= 0 : stryMutAct_9fa48("38853") ? postData.votes <= 0 : stryMutAct_9fa48("38852") ? false : (stryCov_9fa48("38852", "38853", "38854"), postData.votes < 0)))) {
          if (stryMutAct_9fa48("38855")) {
            {}
          } else {
            stryCov_9fa48("38855");
            tasks.push(db.sortedSetAdd(stryMutAct_9fa48("38856") ? `` : (stryCov_9fa48("38856"), `cid:${topicData[1].cid}:uid:${postData.uid}:pids:votes`), postData.votes, postData.pid));
          }
        }
        await Promise.all(tasks);
        await Promise.all(stryMutAct_9fa48("38857") ? [] : (stryCov_9fa48("38857"), [categories.updateRecentTidForCid(topicData[0].cid), categories.updateRecentTidForCid(topicData[1].cid)]));
      }
    }
  }
};