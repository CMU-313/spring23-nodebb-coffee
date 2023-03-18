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
const posts = require('../posts');
const categories = require('../categories');
const plugins = require('../plugins');
const batch = require('../batch');
module.exports = function (Topics) {
  if (stryMutAct_9fa48("38262")) {
    {}
  } else {
    stryCov_9fa48("38262");
    Topics.delete = async function (tid, uid) {
      if (stryMutAct_9fa48("38263")) {
        {}
      } else {
        stryCov_9fa48("38263");
        await removeTopicPidsFromCid(tid);
        await Topics.setTopicFields(tid, stryMutAct_9fa48("38264") ? {} : (stryCov_9fa48("38264"), {
          deleted: 1,
          deleterUid: uid,
          deletedTimestamp: Date.now()
        }));
      }
    };
    async function removeTopicPidsFromCid(tid) {
      if (stryMutAct_9fa48("38265")) {
        {}
      } else {
        stryCov_9fa48("38265");
        const [cid, pids] = await Promise.all(stryMutAct_9fa48("38266") ? [] : (stryCov_9fa48("38266"), [Topics.getTopicField(tid, stryMutAct_9fa48("38267") ? "" : (stryCov_9fa48("38267"), 'cid')), Topics.getPids(tid)]));
        await db.sortedSetRemove(stryMutAct_9fa48("38268") ? `` : (stryCov_9fa48("38268"), `cid:${cid}:pids`), pids);
        await categories.updateRecentTidForCid(cid);
      }
    }
    async function addTopicPidsToCid(tid) {
      if (stryMutAct_9fa48("38269")) {
        {}
      } else {
        stryCov_9fa48("38269");
        const [cid, pids] = await Promise.all(stryMutAct_9fa48("38270") ? [] : (stryCov_9fa48("38270"), [Topics.getTopicField(tid, stryMutAct_9fa48("38271") ? "" : (stryCov_9fa48("38271"), 'cid')), Topics.getPids(tid)]));
        let postData = await posts.getPostsFields(pids, stryMutAct_9fa48("38272") ? [] : (stryCov_9fa48("38272"), [stryMutAct_9fa48("38273") ? "" : (stryCov_9fa48("38273"), 'pid'), stryMutAct_9fa48("38274") ? "" : (stryCov_9fa48("38274"), 'timestamp'), stryMutAct_9fa48("38275") ? "" : (stryCov_9fa48("38275"), 'deleted')]));
        postData = stryMutAct_9fa48("38276") ? postData : (stryCov_9fa48("38276"), postData.filter(stryMutAct_9fa48("38277") ? () => undefined : (stryCov_9fa48("38277"), post => stryMutAct_9fa48("38280") ? post || !post.deleted : stryMutAct_9fa48("38279") ? false : stryMutAct_9fa48("38278") ? true : (stryCov_9fa48("38278", "38279", "38280"), post && (stryMutAct_9fa48("38281") ? post.deleted : (stryCov_9fa48("38281"), !post.deleted))))));
        const pidsToAdd = postData.map(stryMutAct_9fa48("38282") ? () => undefined : (stryCov_9fa48("38282"), post => post.pid));
        const scores = postData.map(stryMutAct_9fa48("38283") ? () => undefined : (stryCov_9fa48("38283"), post => post.timestamp));
        await db.sortedSetAdd(stryMutAct_9fa48("38284") ? `` : (stryCov_9fa48("38284"), `cid:${cid}:pids`), scores, pidsToAdd);
        await categories.updateRecentTidForCid(cid);
      }
    }
    Topics.restore = async function (tid) {
      if (stryMutAct_9fa48("38285")) {
        {}
      } else {
        stryCov_9fa48("38285");
        await Promise.all(stryMutAct_9fa48("38286") ? [] : (stryCov_9fa48("38286"), [Topics.deleteTopicFields(tid, stryMutAct_9fa48("38287") ? [] : (stryCov_9fa48("38287"), [stryMutAct_9fa48("38288") ? "" : (stryCov_9fa48("38288"), 'deleterUid'), stryMutAct_9fa48("38289") ? "" : (stryCov_9fa48("38289"), 'deletedTimestamp')])), addTopicPidsToCid(tid)]));
        await Topics.setTopicField(tid, stryMutAct_9fa48("38290") ? "" : (stryCov_9fa48("38290"), 'deleted'), 0);
      }
    };
    Topics.purgePostsAndTopic = async function (tid, uid) {
      if (stryMutAct_9fa48("38291")) {
        {}
      } else {
        stryCov_9fa48("38291");
        const mainPid = await Topics.getTopicField(tid, stryMutAct_9fa48("38292") ? "" : (stryCov_9fa48("38292"), 'mainPid'));
        await batch.processSortedSet(stryMutAct_9fa48("38293") ? `` : (stryCov_9fa48("38293"), `tid:${tid}:posts`), async pids => {
          if (stryMutAct_9fa48("38294")) {
            {}
          } else {
            stryCov_9fa48("38294");
            await posts.purge(pids, uid);
          }
        }, stryMutAct_9fa48("38295") ? {} : (stryCov_9fa48("38295"), {
          alwaysStartAt: 0,
          batch: 500
        }));
        await posts.purge(mainPid, uid);
        await Topics.purge(tid, uid);
      }
    };
    Topics.purge = async function (tid, uid) {
      if (stryMutAct_9fa48("38296")) {
        {}
      } else {
        stryCov_9fa48("38296");
        const [deletedTopic, tags] = await Promise.all(stryMutAct_9fa48("38297") ? [] : (stryCov_9fa48("38297"), [Topics.getTopicData(tid), Topics.getTopicTags(tid)]));
        if (stryMutAct_9fa48("38300") ? false : stryMutAct_9fa48("38299") ? true : stryMutAct_9fa48("38298") ? deletedTopic : (stryCov_9fa48("38298", "38299", "38300"), !deletedTopic)) {
          if (stryMutAct_9fa48("38301")) {
            {}
          } else {
            stryCov_9fa48("38301");
            return;
          }
        }
        deletedTopic.tags = tags;
        await deleteFromFollowersIgnorers(tid);
        await Promise.all(stryMutAct_9fa48("38302") ? [] : (stryCov_9fa48("38302"), [db.deleteAll(stryMutAct_9fa48("38303") ? [] : (stryCov_9fa48("38303"), [stryMutAct_9fa48("38304") ? `` : (stryCov_9fa48("38304"), `tid:${tid}:followers`), stryMutAct_9fa48("38305") ? `` : (stryCov_9fa48("38305"), `tid:${tid}:ignorers`), stryMutAct_9fa48("38306") ? `` : (stryCov_9fa48("38306"), `tid:${tid}:posts`), stryMutAct_9fa48("38307") ? `` : (stryCov_9fa48("38307"), `tid:${tid}:posts:votes`), stryMutAct_9fa48("38308") ? `` : (stryCov_9fa48("38308"), `tid:${tid}:bookmarks`), stryMutAct_9fa48("38309") ? `` : (stryCov_9fa48("38309"), `tid:${tid}:posters`)])), db.sortedSetsRemove(stryMutAct_9fa48("38310") ? [] : (stryCov_9fa48("38310"), [stryMutAct_9fa48("38311") ? "" : (stryCov_9fa48("38311"), 'topics:tid'), stryMutAct_9fa48("38312") ? "" : (stryCov_9fa48("38312"), 'topics:recent'), stryMutAct_9fa48("38313") ? "" : (stryCov_9fa48("38313"), 'topics:posts'), stryMutAct_9fa48("38314") ? "" : (stryCov_9fa48("38314"), 'topics:views'), stryMutAct_9fa48("38315") ? "" : (stryCov_9fa48("38315"), 'topics:votes'), stryMutAct_9fa48("38316") ? "" : (stryCov_9fa48("38316"), 'topics:scheduled')]), tid), deleteTopicFromCategoryAndUser(tid), Topics.deleteTopicTags(tid), Topics.events.purge(tid), Topics.thumbs.deleteAll(tid), reduceCounters(tid)]));
        plugins.hooks.fire(stryMutAct_9fa48("38317") ? "" : (stryCov_9fa48("38317"), 'action:topic.purge'), stryMutAct_9fa48("38318") ? {} : (stryCov_9fa48("38318"), {
          topic: deletedTopic,
          uid: uid
        }));
        await db.delete(stryMutAct_9fa48("38319") ? `` : (stryCov_9fa48("38319"), `topic:${tid}`));
      }
    };
    async function deleteFromFollowersIgnorers(tid) {
      if (stryMutAct_9fa48("38320")) {
        {}
      } else {
        stryCov_9fa48("38320");
        const [followers, ignorers] = await Promise.all(stryMutAct_9fa48("38321") ? [] : (stryCov_9fa48("38321"), [db.getSetMembers(stryMutAct_9fa48("38322") ? `` : (stryCov_9fa48("38322"), `tid:${tid}:followers`)), db.getSetMembers(stryMutAct_9fa48("38323") ? `` : (stryCov_9fa48("38323"), `tid:${tid}:ignorers`))]));
        const followerKeys = followers.map(stryMutAct_9fa48("38324") ? () => undefined : (stryCov_9fa48("38324"), uid => stryMutAct_9fa48("38325") ? `` : (stryCov_9fa48("38325"), `uid:${uid}:followed_tids`)));
        const ignorerKeys = ignorers.map(stryMutAct_9fa48("38326") ? () => undefined : (stryCov_9fa48("38326"), uid => stryMutAct_9fa48("38327") ? `` : (stryCov_9fa48("38327"), `uid:${uid}ignored_tids`)));
        await db.sortedSetsRemove(followerKeys.concat(ignorerKeys), tid);
      }
    }
    async function deleteTopicFromCategoryAndUser(tid) {
      if (stryMutAct_9fa48("38328")) {
        {}
      } else {
        stryCov_9fa48("38328");
        const topicData = await Topics.getTopicFields(tid, stryMutAct_9fa48("38329") ? [] : (stryCov_9fa48("38329"), [stryMutAct_9fa48("38330") ? "" : (stryCov_9fa48("38330"), 'cid'), stryMutAct_9fa48("38331") ? "" : (stryCov_9fa48("38331"), 'uid')]));
        await Promise.all(stryMutAct_9fa48("38332") ? [] : (stryCov_9fa48("38332"), [db.sortedSetsRemove(stryMutAct_9fa48("38333") ? [] : (stryCov_9fa48("38333"), [stryMutAct_9fa48("38334") ? `` : (stryCov_9fa48("38334"), `cid:${topicData.cid}:tids`), stryMutAct_9fa48("38335") ? `` : (stryCov_9fa48("38335"), `cid:${topicData.cid}:tids:pinned`), stryMutAct_9fa48("38336") ? `` : (stryCov_9fa48("38336"), `cid:${topicData.cid}:tids:posts`), stryMutAct_9fa48("38337") ? `` : (stryCov_9fa48("38337"), `cid:${topicData.cid}:tids:lastposttime`), stryMutAct_9fa48("38338") ? `` : (stryCov_9fa48("38338"), `cid:${topicData.cid}:tids:votes`), stryMutAct_9fa48("38339") ? `` : (stryCov_9fa48("38339"), `cid:${topicData.cid}:tids:views`), stryMutAct_9fa48("38340") ? `` : (stryCov_9fa48("38340"), `cid:${topicData.cid}:recent_tids`), stryMutAct_9fa48("38341") ? `` : (stryCov_9fa48("38341"), `cid:${topicData.cid}:uid:${topicData.uid}:tids`), stryMutAct_9fa48("38342") ? `` : (stryCov_9fa48("38342"), `uid:${topicData.uid}:topics`)]), tid), user.decrementUserFieldBy(topicData.uid, stryMutAct_9fa48("38343") ? "" : (stryCov_9fa48("38343"), 'topiccount'), 1)]));
        await categories.updateRecentTidForCid(topicData.cid);
      }
    }
    async function reduceCounters(tid) {
      if (stryMutAct_9fa48("38344")) {
        {}
      } else {
        stryCov_9fa48("38344");
        const incr = stryMutAct_9fa48("38345") ? +1 : (stryCov_9fa48("38345"), -1);
        await db.incrObjectFieldBy(stryMutAct_9fa48("38346") ? "" : (stryCov_9fa48("38346"), 'global'), stryMutAct_9fa48("38347") ? "" : (stryCov_9fa48("38347"), 'topicCount'), incr);
        const topicData = await Topics.getTopicFields(tid, stryMutAct_9fa48("38348") ? [] : (stryCov_9fa48("38348"), [stryMutAct_9fa48("38349") ? "" : (stryCov_9fa48("38349"), 'cid'), stryMutAct_9fa48("38350") ? "" : (stryCov_9fa48("38350"), 'postcount')]));
        const postCountChange = stryMutAct_9fa48("38351") ? incr / topicData.postcount : (stryCov_9fa48("38351"), incr * topicData.postcount);
        await Promise.all(stryMutAct_9fa48("38352") ? [] : (stryCov_9fa48("38352"), [db.incrObjectFieldBy(stryMutAct_9fa48("38353") ? "" : (stryCov_9fa48("38353"), 'global'), stryMutAct_9fa48("38354") ? "" : (stryCov_9fa48("38354"), 'postCount'), postCountChange), db.incrObjectFieldBy(stryMutAct_9fa48("38355") ? `` : (stryCov_9fa48("38355"), `category:${topicData.cid}`), stryMutAct_9fa48("38356") ? "" : (stryCov_9fa48("38356"), 'post_count'), postCountChange), db.incrObjectFieldBy(stryMutAct_9fa48("38357") ? `` : (stryCov_9fa48("38357"), `category:${topicData.cid}`), stryMutAct_9fa48("38358") ? "" : (stryCov_9fa48("38358"), 'topic_count'), incr)]));
      }
    }
  }
};