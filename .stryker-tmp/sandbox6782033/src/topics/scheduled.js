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
const _ = require('lodash');
const winston = require('winston');
const {
  CronJob
} = require('cron');
const db = require('../database');
const posts = require('../posts');
const socketHelpers = require('../socket.io/helpers');
const topics = require('./index');
const user = require('../user');
const Scheduled = module.exports;
Scheduled.startJobs = function () {
  if (stryMutAct_9fa48("39651")) {
    {}
  } else {
    stryCov_9fa48("39651");
    winston.verbose(stryMutAct_9fa48("39652") ? "" : (stryCov_9fa48("39652"), '[scheduled topics] Starting jobs.'));
    new CronJob(stryMutAct_9fa48("39653") ? "" : (stryCov_9fa48("39653"), '*/1 * * * *'), Scheduled.handleExpired, null, stryMutAct_9fa48("39654") ? false : (stryCov_9fa48("39654"), true));
  }
};
Scheduled.handleExpired = async function () {
  if (stryMutAct_9fa48("39655")) {
    {}
  } else {
    stryCov_9fa48("39655");
    const now = Date.now();
    const tids = await db.getSortedSetRangeByScore(stryMutAct_9fa48("39656") ? "" : (stryCov_9fa48("39656"), 'topics:scheduled'), 0, stryMutAct_9fa48("39657") ? +1 : (stryCov_9fa48("39657"), -1), stryMutAct_9fa48("39658") ? "" : (stryCov_9fa48("39658"), '-inf'), now);
    if (stryMutAct_9fa48("39661") ? false : stryMutAct_9fa48("39660") ? true : stryMutAct_9fa48("39659") ? tids.length : (stryCov_9fa48("39659", "39660", "39661"), !tids.length)) {
      if (stryMutAct_9fa48("39662")) {
        {}
      } else {
        stryCov_9fa48("39662");
        return;
      }
    }
    let topicsData = await topics.getTopicsData(tids);
    // Filter deleted
    topicsData = stryMutAct_9fa48("39663") ? topicsData : (stryCov_9fa48("39663"), topicsData.filter(stryMutAct_9fa48("39664") ? () => undefined : (stryCov_9fa48("39664"), topicData => Boolean(topicData))));
    const uids = stryMutAct_9fa48("39665") ? _.uniq(topicsData.map(topicData => topicData.uid)) : (stryCov_9fa48("39665"), _.uniq(topicsData.map(stryMutAct_9fa48("39666") ? () => undefined : (stryCov_9fa48("39666"), topicData => topicData.uid))).filter(stryMutAct_9fa48("39667") ? () => undefined : (stryCov_9fa48("39667"), uid => uid))); // Filter guests topics

    // Restore first to be not filtered for being deleted
    // Restoring handles "updateRecentTid"
    await Promise.all((stryMutAct_9fa48("39668") ? ["Stryker was here"] : (stryCov_9fa48("39668"), [])).concat(topicsData.map(stryMutAct_9fa48("39669") ? () => undefined : (stryCov_9fa48("39669"), topicData => topics.restore(topicData.tid))), topicsData.map(stryMutAct_9fa48("39670") ? () => undefined : (stryCov_9fa48("39670"), topicData => topics.updateLastPostTimeFromLastPid(topicData.tid)))));
    await Promise.all((stryMutAct_9fa48("39671") ? ["Stryker was here"] : (stryCov_9fa48("39671"), [])).concat(sendNotifications(uids, topicsData), updateUserLastposttimes(uids, topicsData), ...topicsData.map(stryMutAct_9fa48("39672") ? () => undefined : (stryCov_9fa48("39672"), topicData => unpin(topicData.tid, topicData))), db.sortedSetsRemoveRangeByScore(stryMutAct_9fa48("39673") ? [] : (stryCov_9fa48("39673"), [stryMutAct_9fa48("39674") ? `` : (stryCov_9fa48("39674"), `topics:scheduled`)]), stryMutAct_9fa48("39675") ? "" : (stryCov_9fa48("39675"), '-inf'), now)));
  }
};

// topics/tools.js#pin/unpin would block non-admins/mods, thus the local versions
Scheduled.pin = async function (tid, topicData) {
  if (stryMutAct_9fa48("39676")) {
    {}
  } else {
    stryCov_9fa48("39676");
    return Promise.all(stryMutAct_9fa48("39677") ? [] : (stryCov_9fa48("39677"), [topics.setTopicField(tid, stryMutAct_9fa48("39678") ? "" : (stryCov_9fa48("39678"), 'pinned'), 1), db.sortedSetAdd(stryMutAct_9fa48("39679") ? `` : (stryCov_9fa48("39679"), `cid:${topicData.cid}:tids:pinned`), Date.now(), tid), db.sortedSetsRemove(stryMutAct_9fa48("39680") ? [] : (stryCov_9fa48("39680"), [stryMutAct_9fa48("39681") ? `` : (stryCov_9fa48("39681"), `cid:${topicData.cid}:tids`), stryMutAct_9fa48("39682") ? `` : (stryCov_9fa48("39682"), `cid:${topicData.cid}:tids:posts`), stryMutAct_9fa48("39683") ? `` : (stryCov_9fa48("39683"), `cid:${topicData.cid}:tids:votes`), stryMutAct_9fa48("39684") ? `` : (stryCov_9fa48("39684"), `cid:${topicData.cid}:tids:views`)]), tid)]));
  }
};
Scheduled.reschedule = async function ({
  cid,
  tid,
  timestamp,
  uid
}) {
  if (stryMutAct_9fa48("39685")) {
    {}
  } else {
    stryCov_9fa48("39685");
    await Promise.all(stryMutAct_9fa48("39686") ? [] : (stryCov_9fa48("39686"), [db.sortedSetsAdd(stryMutAct_9fa48("39687") ? [] : (stryCov_9fa48("39687"), [stryMutAct_9fa48("39688") ? "" : (stryCov_9fa48("39688"), 'topics:scheduled'), stryMutAct_9fa48("39689") ? `` : (stryCov_9fa48("39689"), `uid:${uid}:topics`), stryMutAct_9fa48("39690") ? "" : (stryCov_9fa48("39690"), 'topics:tid'), stryMutAct_9fa48("39691") ? `` : (stryCov_9fa48("39691"), `cid:${cid}:uid:${uid}:tids`)]), timestamp, tid), shiftPostTimes(tid, timestamp)]));
    return topics.updateLastPostTimeFromLastPid(tid);
  }
};
function unpin(tid, topicData) {
  if (stryMutAct_9fa48("39692")) {
    {}
  } else {
    stryCov_9fa48("39692");
    return stryMutAct_9fa48("39693") ? [] : (stryCov_9fa48("39693"), [topics.setTopicField(tid, stryMutAct_9fa48("39694") ? "" : (stryCov_9fa48("39694"), 'pinned'), 0), topics.deleteTopicField(tid, stryMutAct_9fa48("39695") ? "" : (stryCov_9fa48("39695"), 'pinExpiry')), db.sortedSetRemove(stryMutAct_9fa48("39696") ? `` : (stryCov_9fa48("39696"), `cid:${topicData.cid}:tids:pinned`), tid), db.sortedSetAddBulk(stryMutAct_9fa48("39697") ? [] : (stryCov_9fa48("39697"), [stryMutAct_9fa48("39698") ? [] : (stryCov_9fa48("39698"), [stryMutAct_9fa48("39699") ? `` : (stryCov_9fa48("39699"), `cid:${topicData.cid}:tids`), topicData.lastposttime, tid]), stryMutAct_9fa48("39700") ? [] : (stryCov_9fa48("39700"), [stryMutAct_9fa48("39701") ? `` : (stryCov_9fa48("39701"), `cid:${topicData.cid}:tids:posts`), topicData.postcount, tid]), stryMutAct_9fa48("39702") ? [] : (stryCov_9fa48("39702"), [stryMutAct_9fa48("39703") ? `` : (stryCov_9fa48("39703"), `cid:${topicData.cid}:tids:votes`), stryMutAct_9fa48("39706") ? parseInt(topicData.votes, 10) && 0 : stryMutAct_9fa48("39705") ? false : stryMutAct_9fa48("39704") ? true : (stryCov_9fa48("39704", "39705", "39706"), parseInt(topicData.votes, 10) || 0), tid]), stryMutAct_9fa48("39707") ? [] : (stryCov_9fa48("39707"), [stryMutAct_9fa48("39708") ? `` : (stryCov_9fa48("39708"), `cid:${topicData.cid}:tids:views`), topicData.viewcount, tid])]))]);
  }
}
async function sendNotifications(uids, topicsData) {
  if (stryMutAct_9fa48("39709")) {
    {}
  } else {
    stryCov_9fa48("39709");
    const usernames = await Promise.all(uids.map(stryMutAct_9fa48("39710") ? () => undefined : (stryCov_9fa48("39710"), uid => user.getUserField(uid, stryMutAct_9fa48("39711") ? "" : (stryCov_9fa48("39711"), 'username')))));
    const uidToUsername = Object.fromEntries(uids.map(stryMutAct_9fa48("39712") ? () => undefined : (stryCov_9fa48("39712"), (uid, idx) => stryMutAct_9fa48("39713") ? [] : (stryCov_9fa48("39713"), [uid, usernames[idx]]))));
    const postsData = await posts.getPostsData(topicsData.map(stryMutAct_9fa48("39714") ? () => undefined : (stryCov_9fa48("39714"), ({
      mainPid
    }) => mainPid)));
    postsData.forEach((postData, idx) => {
      if (stryMutAct_9fa48("39715")) {
        {}
      } else {
        stryCov_9fa48("39715");
        postData.user = {};
        postData.user.username = uidToUsername[postData.uid];
        postData.topic = topicsData[idx];
      }
    });
    return Promise.all(topicsData.map(stryMutAct_9fa48("39716") ? () => undefined : (stryCov_9fa48("39716"), (t, idx) => user.notifications.sendTopicNotificationToFollowers(t.uid, t, postsData[idx]))).concat(topicsData.map(stryMutAct_9fa48("39717") ? () => undefined : (stryCov_9fa48("39717"), (t, idx) => socketHelpers.notifyNew(t.uid, stryMutAct_9fa48("39718") ? "" : (stryCov_9fa48("39718"), 'newTopic'), stryMutAct_9fa48("39719") ? {} : (stryCov_9fa48("39719"), {
      posts: stryMutAct_9fa48("39720") ? [] : (stryCov_9fa48("39720"), [postsData[idx]]),
      topic: t
    }))))));
  }
}
async function updateUserLastposttimes(uids, topicsData) {
  if (stryMutAct_9fa48("39721")) {
    {}
  } else {
    stryCov_9fa48("39721");
    const lastposttimes = (await user.getUsersFields(uids, stryMutAct_9fa48("39722") ? [] : (stryCov_9fa48("39722"), [stryMutAct_9fa48("39723") ? "" : (stryCov_9fa48("39723"), 'lastposttime')]))).map(stryMutAct_9fa48("39724") ? () => undefined : (stryCov_9fa48("39724"), u => u.lastposttime));
    let tstampByUid = {};
    topicsData.forEach(tD => {
      if (stryMutAct_9fa48("39725")) {
        {}
      } else {
        stryCov_9fa48("39725");
        tstampByUid[tD.uid] = tstampByUid[tD.uid] ? tstampByUid[tD.uid].concat(tD.lastposttime) : stryMutAct_9fa48("39726") ? [] : (stryCov_9fa48("39726"), [tD.lastposttime]);
      }
    });
    tstampByUid = Object.fromEntries(Object.entries(tstampByUid).map(stryMutAct_9fa48("39727") ? () => undefined : (stryCov_9fa48("39727"), uidTimestamp => stryMutAct_9fa48("39728") ? [] : (stryCov_9fa48("39728"), [uidTimestamp[0], Math.max(...uidTimestamp[1])]))));
    const uidsToUpdate = stryMutAct_9fa48("39729") ? uids : (stryCov_9fa48("39729"), uids.filter(stryMutAct_9fa48("39730") ? () => undefined : (stryCov_9fa48("39730"), (uid, idx) => stryMutAct_9fa48("39734") ? tstampByUid[uid] <= lastposttimes[idx] : stryMutAct_9fa48("39733") ? tstampByUid[uid] >= lastposttimes[idx] : stryMutAct_9fa48("39732") ? false : stryMutAct_9fa48("39731") ? true : (stryCov_9fa48("39731", "39732", "39733", "39734"), tstampByUid[uid] > lastposttimes[idx]))));
    return Promise.all(uidsToUpdate.map(stryMutAct_9fa48("39735") ? () => undefined : (stryCov_9fa48("39735"), uid => user.setUserField(uid, stryMutAct_9fa48("39736") ? "" : (stryCov_9fa48("39736"), 'lastposttime'), tstampByUid[uid]))));
  }
}
async function shiftPostTimes(tid, timestamp) {
  if (stryMutAct_9fa48("39737")) {
    {}
  } else {
    stryCov_9fa48("39737");
    const pids = await posts.getPidsFromSet(stryMutAct_9fa48("39738") ? `` : (stryCov_9fa48("39738"), `tid:${tid}:posts`), 0, stryMutAct_9fa48("39739") ? +1 : (stryCov_9fa48("39739"), -1), stryMutAct_9fa48("39740") ? true : (stryCov_9fa48("39740"), false));
    // Leaving other related score values intact, since they reflect post order correctly,
    // and it seems that's good enough
    return db.setObjectBulk(pids.map(stryMutAct_9fa48("39741") ? () => undefined : (stryCov_9fa48("39741"), (pid, idx) => stryMutAct_9fa48("39742") ? [] : (stryCov_9fa48("39742"), [stryMutAct_9fa48("39743") ? `` : (stryCov_9fa48("39743"), `post:${pid}`), stryMutAct_9fa48("39744") ? {} : (stryCov_9fa48("39744"), {
      timestamp: stryMutAct_9fa48("39745") ? timestamp + idx - 1 : (stryCov_9fa48("39745"), (stryMutAct_9fa48("39746") ? timestamp - idx : (stryCov_9fa48("39746"), timestamp + idx)) + 1)
    })]))));
  }
}