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
const db = require('../database');
const posts = require('../posts');
const topics = require('../topics');
const user = require('../user');
const meta = require('../meta');
const privileges = require('../privileges');
const cache = require('../cache');
const events = require('../events');
const SocketTopics = module.exports;
require('./topics/unread')(SocketTopics);
require('./topics/move')(SocketTopics);
require('./topics/tools')(SocketTopics);
require('./topics/infinitescroll')(SocketTopics);
require('./topics/tags')(SocketTopics);
require('./topics/merge')(SocketTopics);
SocketTopics.postcount = async function (socket, tid) {
  if (stryMutAct_9fa48("37225")) {
    {}
  } else {
    stryCov_9fa48("37225");
    const canRead = await privileges.topics.can(stryMutAct_9fa48("37226") ? "" : (stryCov_9fa48("37226"), 'topics:read'), tid, socket.uid);
    if (stryMutAct_9fa48("37229") ? false : stryMutAct_9fa48("37228") ? true : stryMutAct_9fa48("37227") ? canRead : (stryCov_9fa48("37227", "37228", "37229"), !canRead)) {
      if (stryMutAct_9fa48("37230")) {
        {}
      } else {
        stryCov_9fa48("37230");
        throw new Error(stryMutAct_9fa48("37231") ? "" : (stryCov_9fa48("37231"), '[[no-privileges]]'));
      }
    }
    return await topics.getTopicField(tid, stryMutAct_9fa48("37232") ? "" : (stryCov_9fa48("37232"), 'postcount'));
  }
};
SocketTopics.bookmark = async function (socket, data) {
  if (stryMutAct_9fa48("37233")) {
    {}
  } else {
    stryCov_9fa48("37233");
    if (stryMutAct_9fa48("37236") ? !socket.uid && !data : stryMutAct_9fa48("37235") ? false : stryMutAct_9fa48("37234") ? true : (stryCov_9fa48("37234", "37235", "37236"), (stryMutAct_9fa48("37237") ? socket.uid : (stryCov_9fa48("37237"), !socket.uid)) || (stryMutAct_9fa48("37238") ? data : (stryCov_9fa48("37238"), !data)))) {
      if (stryMutAct_9fa48("37239")) {
        {}
      } else {
        stryCov_9fa48("37239");
        throw new Error(stryMutAct_9fa48("37240") ? "" : (stryCov_9fa48("37240"), '[[error:invalid-data]]'));
      }
    }
    const postcount = await topics.getTopicField(data.tid, stryMutAct_9fa48("37241") ? "" : (stryCov_9fa48("37241"), 'postcount'));
    if (stryMutAct_9fa48("37244") ? data.index > meta.config.bookmarkThreshold || postcount > meta.config.bookmarkThreshold : stryMutAct_9fa48("37243") ? false : stryMutAct_9fa48("37242") ? true : (stryCov_9fa48("37242", "37243", "37244"), (stryMutAct_9fa48("37247") ? data.index <= meta.config.bookmarkThreshold : stryMutAct_9fa48("37246") ? data.index >= meta.config.bookmarkThreshold : stryMutAct_9fa48("37245") ? true : (stryCov_9fa48("37245", "37246", "37247"), data.index > meta.config.bookmarkThreshold)) && (stryMutAct_9fa48("37250") ? postcount <= meta.config.bookmarkThreshold : stryMutAct_9fa48("37249") ? postcount >= meta.config.bookmarkThreshold : stryMutAct_9fa48("37248") ? true : (stryCov_9fa48("37248", "37249", "37250"), postcount > meta.config.bookmarkThreshold)))) {
      if (stryMutAct_9fa48("37251")) {
        {}
      } else {
        stryCov_9fa48("37251");
        await topics.setUserBookmark(data.tid, socket.uid, data.index);
      }
    }
  }
};
SocketTopics.createTopicFromPosts = async function (socket, data) {
  if (stryMutAct_9fa48("37252")) {
    {}
  } else {
    stryCov_9fa48("37252");
    if (stryMutAct_9fa48("37255") ? false : stryMutAct_9fa48("37254") ? true : stryMutAct_9fa48("37253") ? socket.uid : (stryCov_9fa48("37253", "37254", "37255"), !socket.uid)) {
      if (stryMutAct_9fa48("37256")) {
        {}
      } else {
        stryCov_9fa48("37256");
        throw new Error(stryMutAct_9fa48("37257") ? "" : (stryCov_9fa48("37257"), '[[error:not-logged-in]]'));
      }
    }
    if (stryMutAct_9fa48("37260") ? (!data || !data.title || !data.pids) && !Array.isArray(data.pids) : stryMutAct_9fa48("37259") ? false : stryMutAct_9fa48("37258") ? true : (stryCov_9fa48("37258", "37259", "37260"), (stryMutAct_9fa48("37262") ? (!data || !data.title) && !data.pids : stryMutAct_9fa48("37261") ? false : (stryCov_9fa48("37261", "37262"), (stryMutAct_9fa48("37264") ? !data && !data.title : stryMutAct_9fa48("37263") ? false : (stryCov_9fa48("37263", "37264"), (stryMutAct_9fa48("37265") ? data : (stryCov_9fa48("37265"), !data)) || (stryMutAct_9fa48("37266") ? data.title : (stryCov_9fa48("37266"), !data.title)))) || (stryMutAct_9fa48("37267") ? data.pids : (stryCov_9fa48("37267"), !data.pids)))) || (stryMutAct_9fa48("37268") ? Array.isArray(data.pids) : (stryCov_9fa48("37268"), !Array.isArray(data.pids))))) {
      if (stryMutAct_9fa48("37269")) {
        {}
      } else {
        stryCov_9fa48("37269");
        throw new Error(stryMutAct_9fa48("37270") ? "" : (stryCov_9fa48("37270"), '[[error:invalid-data]]'));
      }
    }
    const result = await topics.createTopicFromPosts(socket.uid, data.title, data.pids, data.fromTid);
    await events.log(stryMutAct_9fa48("37271") ? {} : (stryCov_9fa48("37271"), {
      type: stryMutAct_9fa48("37272") ? `` : (stryCov_9fa48("37272"), `topic-fork`),
      uid: socket.uid,
      ip: socket.ip,
      pids: String(data.pids),
      fromTid: data.fromTid,
      toTid: result.tid
    }));
    return result;
  }
};
SocketTopics.isFollowed = async function (socket, tid) {
  if (stryMutAct_9fa48("37273")) {
    {}
  } else {
    stryCov_9fa48("37273");
    const isFollowing = await topics.isFollowing(stryMutAct_9fa48("37274") ? [] : (stryCov_9fa48("37274"), [tid]), socket.uid);
    return isFollowing[0];
  }
};
SocketTopics.isModerator = async function (socket, tid) {
  if (stryMutAct_9fa48("37275")) {
    {}
  } else {
    stryCov_9fa48("37275");
    const cid = await topics.getTopicField(tid, stryMutAct_9fa48("37276") ? "" : (stryCov_9fa48("37276"), 'cid'));
    return await user.isModerator(socket.uid, cid);
  }
};
SocketTopics.getMyNextPostIndex = async function (socket, data) {
  if (stryMutAct_9fa48("37277")) {
    {}
  } else {
    stryCov_9fa48("37277");
    if (stryMutAct_9fa48("37280") ? (!data || !data.tid || !data.index) && !data.sort : stryMutAct_9fa48("37279") ? false : stryMutAct_9fa48("37278") ? true : (stryCov_9fa48("37278", "37279", "37280"), (stryMutAct_9fa48("37282") ? (!data || !data.tid) && !data.index : stryMutAct_9fa48("37281") ? false : (stryCov_9fa48("37281", "37282"), (stryMutAct_9fa48("37284") ? !data && !data.tid : stryMutAct_9fa48("37283") ? false : (stryCov_9fa48("37283", "37284"), (stryMutAct_9fa48("37285") ? data : (stryCov_9fa48("37285"), !data)) || (stryMutAct_9fa48("37286") ? data.tid : (stryCov_9fa48("37286"), !data.tid)))) || (stryMutAct_9fa48("37287") ? data.index : (stryCov_9fa48("37287"), !data.index)))) || (stryMutAct_9fa48("37288") ? data.sort : (stryCov_9fa48("37288"), !data.sort)))) {
      if (stryMutAct_9fa48("37289")) {
        {}
      } else {
        stryCov_9fa48("37289");
        throw new Error(stryMutAct_9fa48("37290") ? "" : (stryCov_9fa48("37290"), '[[error:invalid-data]]'));
      }
    }
    async function getTopicPids(index) {
      if (stryMutAct_9fa48("37291")) {
        {}
      } else {
        stryCov_9fa48("37291");
        const topicSet = (stryMutAct_9fa48("37294") ? data.sort !== 'most_votes' : stryMutAct_9fa48("37293") ? false : stryMutAct_9fa48("37292") ? true : (stryCov_9fa48("37292", "37293", "37294"), data.sort === (stryMutAct_9fa48("37295") ? "" : (stryCov_9fa48("37295"), 'most_votes')))) ? stryMutAct_9fa48("37296") ? `` : (stryCov_9fa48("37296"), `tid:${data.tid}:posts:votes`) : stryMutAct_9fa48("37297") ? `` : (stryCov_9fa48("37297"), `tid:${data.tid}:posts`);
        const reverse = stryMutAct_9fa48("37300") ? data.sort === 'newest_to_oldest' && data.sort === 'most_votes' : stryMutAct_9fa48("37299") ? false : stryMutAct_9fa48("37298") ? true : (stryCov_9fa48("37298", "37299", "37300"), (stryMutAct_9fa48("37302") ? data.sort !== 'newest_to_oldest' : stryMutAct_9fa48("37301") ? false : (stryCov_9fa48("37301", "37302"), data.sort === (stryMutAct_9fa48("37303") ? "" : (stryCov_9fa48("37303"), 'newest_to_oldest')))) || (stryMutAct_9fa48("37305") ? data.sort !== 'most_votes' : stryMutAct_9fa48("37304") ? false : (stryCov_9fa48("37304", "37305"), data.sort === (stryMutAct_9fa48("37306") ? "" : (stryCov_9fa48("37306"), 'most_votes')))));
        const cacheKey = stryMutAct_9fa48("37307") ? `` : (stryCov_9fa48("37307"), `np:s:${topicSet}:r:${String(reverse)}:tid:${data.tid}:pids`);
        const topicPids = cache.get(cacheKey);
        if (stryMutAct_9fa48("37309") ? false : stryMutAct_9fa48("37308") ? true : (stryCov_9fa48("37308", "37309"), topicPids)) {
          if (stryMutAct_9fa48("37310")) {
            {}
          } else {
            stryCov_9fa48("37310");
            return stryMutAct_9fa48("37311") ? topicPids : (stryCov_9fa48("37311"), topicPids.slice(stryMutAct_9fa48("37312") ? index + 1 : (stryCov_9fa48("37312"), index - 1)));
          }
        }
        const pids = await db[reverse ? stryMutAct_9fa48("37313") ? "" : (stryCov_9fa48("37313"), 'getSortedSetRevRange') : stryMutAct_9fa48("37314") ? "" : (stryCov_9fa48("37314"), 'getSortedSetRange')](topicSet, 0, stryMutAct_9fa48("37315") ? +1 : (stryCov_9fa48("37315"), -1));
        cache.set(cacheKey, pids, 30000);
        return stryMutAct_9fa48("37316") ? pids : (stryCov_9fa48("37316"), pids.slice(stryMutAct_9fa48("37317") ? index + 1 : (stryCov_9fa48("37317"), index - 1)));
      }
    }
    async function getUserPids() {
      if (stryMutAct_9fa48("37318")) {
        {}
      } else {
        stryCov_9fa48("37318");
        const cid = await topics.getTopicField(data.tid, stryMutAct_9fa48("37319") ? "" : (stryCov_9fa48("37319"), 'cid'));
        const cacheKey = stryMutAct_9fa48("37320") ? `` : (stryCov_9fa48("37320"), `np:cid:${cid}:uid:${socket.uid}:pids`);
        const userPids = cache.get(cacheKey);
        if (stryMutAct_9fa48("37322") ? false : stryMutAct_9fa48("37321") ? true : (stryCov_9fa48("37321", "37322"), userPids)) {
          if (stryMutAct_9fa48("37323")) {
            {}
          } else {
            stryCov_9fa48("37323");
            return userPids;
          }
        }
        const pids = await db.getSortedSetRange(stryMutAct_9fa48("37324") ? `` : (stryCov_9fa48("37324"), `cid:${cid}:uid:${socket.uid}:pids`), 0, stryMutAct_9fa48("37325") ? +1 : (stryCov_9fa48("37325"), -1));
        cache.set(cacheKey, pids, 30000);
        return pids;
      }
    }
    const postCountInTopic = await db.sortedSetScore(stryMutAct_9fa48("37326") ? `` : (stryCov_9fa48("37326"), `tid:${data.tid}:posters`), socket.uid);
    if (stryMutAct_9fa48("37330") ? postCountInTopic > 0 : stryMutAct_9fa48("37329") ? postCountInTopic < 0 : stryMutAct_9fa48("37328") ? false : stryMutAct_9fa48("37327") ? true : (stryCov_9fa48("37327", "37328", "37329", "37330"), postCountInTopic <= 0)) {
      if (stryMutAct_9fa48("37331")) {
        {}
      } else {
        stryCov_9fa48("37331");
        return 0;
      }
    }
    const [topicPids, userPidsInCategory] = await Promise.all(stryMutAct_9fa48("37332") ? [] : (stryCov_9fa48("37332"), [getTopicPids(data.index), getUserPids()]));
    const userPidsInTopic = _.intersection(topicPids, userPidsInCategory);
    if (stryMutAct_9fa48("37335") ? false : stryMutAct_9fa48("37334") ? true : stryMutAct_9fa48("37333") ? userPidsInTopic.length : (stryCov_9fa48("37333", "37334", "37335"), !userPidsInTopic.length)) {
      if (stryMutAct_9fa48("37336")) {
        {}
      } else {
        stryCov_9fa48("37336");
        if (stryMutAct_9fa48("37340") ? postCountInTopic <= 0 : stryMutAct_9fa48("37339") ? postCountInTopic >= 0 : stryMutAct_9fa48("37338") ? false : stryMutAct_9fa48("37337") ? true : (stryCov_9fa48("37337", "37338", "37339", "37340"), postCountInTopic > 0)) {
          if (stryMutAct_9fa48("37341")) {
            {}
          } else {
            stryCov_9fa48("37341");
            // wrap around to beginning
            const wrapIndex = await SocketTopics.getMyNextPostIndex(socket, stryMutAct_9fa48("37342") ? {} : (stryCov_9fa48("37342"), {
              ...data,
              index: 1
            }));
            return wrapIndex;
          }
        }
        return 0;
      }
    }
    return await posts.getPidIndex(userPidsInTopic[0], data.tid, data.sort);
  }
};
SocketTopics.getPostCountInTopic = async function (socket, tid) {
  if (stryMutAct_9fa48("37343")) {
    {}
  } else {
    stryCov_9fa48("37343");
    if (stryMutAct_9fa48("37346") ? !socket.uid && !tid : stryMutAct_9fa48("37345") ? false : stryMutAct_9fa48("37344") ? true : (stryCov_9fa48("37344", "37345", "37346"), (stryMutAct_9fa48("37347") ? socket.uid : (stryCov_9fa48("37347"), !socket.uid)) || (stryMutAct_9fa48("37348") ? tid : (stryCov_9fa48("37348"), !tid)))) {
      if (stryMutAct_9fa48("37349")) {
        {}
      } else {
        stryCov_9fa48("37349");
        return 0;
      }
    }
    return await db.sortedSetScore(stryMutAct_9fa48("37350") ? `` : (stryCov_9fa48("37350"), `tid:${tid}:posters`), socket.uid);
  }
};
require('../promisify')(SocketTopics);