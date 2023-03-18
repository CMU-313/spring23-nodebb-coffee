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
const utils = require('../utils');
const user = require('../user');
const privileges = require('../privileges');
const plugins = require('../plugins');
const Posts = module.exports;
require('./data')(Posts);
require('./create')(Posts);
require('./delete')(Posts);
require('./edit')(Posts);
require('./parse')(Posts);
require('./user')(Posts);
require('./topics')(Posts);
require('./category')(Posts);
require('./summary')(Posts);
require('./recent')(Posts);
require('./tools')(Posts);
require('./votes')(Posts);
require('./bookmarks')(Posts);
require('./queue')(Posts);
require('./diffs')(Posts);
require('./uploads')(Posts);
Posts.exists = async function (pids) {
  if (stryMutAct_9fa48("29190")) {
    {}
  } else {
    stryCov_9fa48("29190");
    return await db.exists(Array.isArray(pids) ? pids.map(stryMutAct_9fa48("29191") ? () => undefined : (stryCov_9fa48("29191"), pid => stryMutAct_9fa48("29192") ? `` : (stryCov_9fa48("29192"), `post:${pid}`))) : stryMutAct_9fa48("29193") ? `` : (stryCov_9fa48("29193"), `post:${pids}`));
  }
};
Posts.getPidsFromSet = async function (set, start, stop, reverse) {
  if (stryMutAct_9fa48("29194")) {
    {}
  } else {
    stryCov_9fa48("29194");
    if (stryMutAct_9fa48("29197") ? isNaN(start) && isNaN(stop) : stryMutAct_9fa48("29196") ? false : stryMutAct_9fa48("29195") ? true : (stryCov_9fa48("29195", "29196", "29197"), isNaN(start) || isNaN(stop))) {
      if (stryMutAct_9fa48("29198")) {
        {}
      } else {
        stryCov_9fa48("29198");
        return stryMutAct_9fa48("29199") ? ["Stryker was here"] : (stryCov_9fa48("29199"), []);
      }
    }
    return await db[reverse ? stryMutAct_9fa48("29200") ? "" : (stryCov_9fa48("29200"), 'getSortedSetRevRange') : stryMutAct_9fa48("29201") ? "" : (stryCov_9fa48("29201"), 'getSortedSetRange')](set, start, stop);
  }
};
Posts.getPostsByPids = async function (pids, uid) {
  if (stryMutAct_9fa48("29202")) {
    {}
  } else {
    stryCov_9fa48("29202");
    if (stryMutAct_9fa48("29205") ? !Array.isArray(pids) && !pids.length : stryMutAct_9fa48("29204") ? false : stryMutAct_9fa48("29203") ? true : (stryCov_9fa48("29203", "29204", "29205"), (stryMutAct_9fa48("29206") ? Array.isArray(pids) : (stryCov_9fa48("29206"), !Array.isArray(pids))) || (stryMutAct_9fa48("29207") ? pids.length : (stryCov_9fa48("29207"), !pids.length)))) {
      if (stryMutAct_9fa48("29208")) {
        {}
      } else {
        stryCov_9fa48("29208");
        return stryMutAct_9fa48("29209") ? ["Stryker was here"] : (stryCov_9fa48("29209"), []);
      }
    }
    let posts = await Posts.getPostsData(pids);
    posts = await Promise.all(posts.map(Posts.parsePost));
    const data = await plugins.hooks.fire(stryMutAct_9fa48("29210") ? "" : (stryCov_9fa48("29210"), 'filter:post.getPosts'), stryMutAct_9fa48("29211") ? {} : (stryCov_9fa48("29211"), {
      posts: posts,
      uid: uid
    }));
    if (stryMutAct_9fa48("29214") ? !data && !Array.isArray(data.posts) : stryMutAct_9fa48("29213") ? false : stryMutAct_9fa48("29212") ? true : (stryCov_9fa48("29212", "29213", "29214"), (stryMutAct_9fa48("29215") ? data : (stryCov_9fa48("29215"), !data)) || (stryMutAct_9fa48("29216") ? Array.isArray(data.posts) : (stryCov_9fa48("29216"), !Array.isArray(data.posts))))) {
      if (stryMutAct_9fa48("29217")) {
        {}
      } else {
        stryCov_9fa48("29217");
        return stryMutAct_9fa48("29218") ? ["Stryker was here"] : (stryCov_9fa48("29218"), []);
      }
    }
    return stryMutAct_9fa48("29219") ? data.posts : (stryCov_9fa48("29219"), data.posts.filter(Boolean));
  }
};
Posts.getPostSummariesFromSet = async function (set, uid, start, stop) {
  if (stryMutAct_9fa48("29220")) {
    {}
  } else {
    stryCov_9fa48("29220");
    let pids = await db.getSortedSetRevRange(set, start, stop);
    pids = await (stryMutAct_9fa48("29221") ? privileges.posts : (stryCov_9fa48("29221"), privileges.posts.filter(stryMutAct_9fa48("29222") ? "" : (stryCov_9fa48("29222"), 'topics:read'), pids, uid)));
    const posts = await Posts.getPostSummaryByPids(pids, uid, stryMutAct_9fa48("29223") ? {} : (stryCov_9fa48("29223"), {
      stripTags: stryMutAct_9fa48("29224") ? true : (stryCov_9fa48("29224"), false)
    }));
    return stryMutAct_9fa48("29225") ? {} : (stryCov_9fa48("29225"), {
      posts: posts,
      nextStart: stryMutAct_9fa48("29226") ? stop - 1 : (stryCov_9fa48("29226"), stop + 1)
    });
  }
};
Posts.getPidIndex = async function (pid, tid, topicPostSort) {
  if (stryMutAct_9fa48("29227")) {
    {}
  } else {
    stryCov_9fa48("29227");
    const set = (stryMutAct_9fa48("29230") ? topicPostSort !== 'most_votes' : stryMutAct_9fa48("29229") ? false : stryMutAct_9fa48("29228") ? true : (stryCov_9fa48("29228", "29229", "29230"), topicPostSort === (stryMutAct_9fa48("29231") ? "" : (stryCov_9fa48("29231"), 'most_votes')))) ? stryMutAct_9fa48("29232") ? `` : (stryCov_9fa48("29232"), `tid:${tid}:posts:votes`) : stryMutAct_9fa48("29233") ? `` : (stryCov_9fa48("29233"), `tid:${tid}:posts`);
    const reverse = stryMutAct_9fa48("29236") ? topicPostSort === 'newest_to_oldest' && topicPostSort === 'most_votes' : stryMutAct_9fa48("29235") ? false : stryMutAct_9fa48("29234") ? true : (stryCov_9fa48("29234", "29235", "29236"), (stryMutAct_9fa48("29238") ? topicPostSort !== 'newest_to_oldest' : stryMutAct_9fa48("29237") ? false : (stryCov_9fa48("29237", "29238"), topicPostSort === (stryMutAct_9fa48("29239") ? "" : (stryCov_9fa48("29239"), 'newest_to_oldest')))) || (stryMutAct_9fa48("29241") ? topicPostSort !== 'most_votes' : stryMutAct_9fa48("29240") ? false : (stryCov_9fa48("29240", "29241"), topicPostSort === (stryMutAct_9fa48("29242") ? "" : (stryCov_9fa48("29242"), 'most_votes')))));
    const index = await db[reverse ? stryMutAct_9fa48("29243") ? "" : (stryCov_9fa48("29243"), 'sortedSetRevRank') : stryMutAct_9fa48("29244") ? "" : (stryCov_9fa48("29244"), 'sortedSetRank')](set, pid);
    if (stryMutAct_9fa48("29247") ? false : stryMutAct_9fa48("29246") ? true : stryMutAct_9fa48("29245") ? utils.isNumber(index) : (stryCov_9fa48("29245", "29246", "29247"), !utils.isNumber(index))) {
      if (stryMutAct_9fa48("29248")) {
        {}
      } else {
        stryCov_9fa48("29248");
        return 0;
      }
    }
    return utils.isNumber(index) ? stryMutAct_9fa48("29249") ? parseInt(index, 10) - 1 : (stryCov_9fa48("29249"), parseInt(index, 10) + 1) : 0;
  }
};
Posts.getPostIndices = async function (posts, uid) {
  if (stryMutAct_9fa48("29250")) {
    {}
  } else {
    stryCov_9fa48("29250");
    if (stryMutAct_9fa48("29253") ? !Array.isArray(posts) && !posts.length : stryMutAct_9fa48("29252") ? false : stryMutAct_9fa48("29251") ? true : (stryCov_9fa48("29251", "29252", "29253"), (stryMutAct_9fa48("29254") ? Array.isArray(posts) : (stryCov_9fa48("29254"), !Array.isArray(posts))) || (stryMutAct_9fa48("29255") ? posts.length : (stryCov_9fa48("29255"), !posts.length)))) {
      if (stryMutAct_9fa48("29256")) {
        {}
      } else {
        stryCov_9fa48("29256");
        return stryMutAct_9fa48("29257") ? ["Stryker was here"] : (stryCov_9fa48("29257"), []);
      }
    }
    const settings = await user.getSettings(uid);
    const byVotes = stryMutAct_9fa48("29260") ? settings.topicPostSort !== 'most_votes' : stryMutAct_9fa48("29259") ? false : stryMutAct_9fa48("29258") ? true : (stryCov_9fa48("29258", "29259", "29260"), settings.topicPostSort === (stryMutAct_9fa48("29261") ? "" : (stryCov_9fa48("29261"), 'most_votes')));
    let sets = posts.map(stryMutAct_9fa48("29262") ? () => undefined : (stryCov_9fa48("29262"), p => byVotes ? stryMutAct_9fa48("29263") ? `` : (stryCov_9fa48("29263"), `tid:${p.tid}:posts:votes`) : stryMutAct_9fa48("29264") ? `` : (stryCov_9fa48("29264"), `tid:${p.tid}:posts`)));
    const reverse = stryMutAct_9fa48("29267") ? settings.topicPostSort === 'newest_to_oldest' && settings.topicPostSort === 'most_votes' : stryMutAct_9fa48("29266") ? false : stryMutAct_9fa48("29265") ? true : (stryCov_9fa48("29265", "29266", "29267"), (stryMutAct_9fa48("29269") ? settings.topicPostSort !== 'newest_to_oldest' : stryMutAct_9fa48("29268") ? false : (stryCov_9fa48("29268", "29269"), settings.topicPostSort === (stryMutAct_9fa48("29270") ? "" : (stryCov_9fa48("29270"), 'newest_to_oldest')))) || (stryMutAct_9fa48("29272") ? settings.topicPostSort !== 'most_votes' : stryMutAct_9fa48("29271") ? false : (stryCov_9fa48("29271", "29272"), settings.topicPostSort === (stryMutAct_9fa48("29273") ? "" : (stryCov_9fa48("29273"), 'most_votes')))));
    const uniqueSets = _.uniq(sets);
    let method = reverse ? stryMutAct_9fa48("29274") ? "" : (stryCov_9fa48("29274"), 'sortedSetsRevRanks') : stryMutAct_9fa48("29275") ? "" : (stryCov_9fa48("29275"), 'sortedSetsRanks');
    if (stryMutAct_9fa48("29278") ? uniqueSets.length !== 1 : stryMutAct_9fa48("29277") ? false : stryMutAct_9fa48("29276") ? true : (stryCov_9fa48("29276", "29277", "29278"), uniqueSets.length === 1)) {
      if (stryMutAct_9fa48("29279")) {
        {}
      } else {
        stryCov_9fa48("29279");
        method = reverse ? stryMutAct_9fa48("29280") ? "" : (stryCov_9fa48("29280"), 'sortedSetRevRanks') : stryMutAct_9fa48("29281") ? "" : (stryCov_9fa48("29281"), 'sortedSetRanks');
        sets = uniqueSets[0];
      }
    }
    const pids = posts.map(stryMutAct_9fa48("29282") ? () => undefined : (stryCov_9fa48("29282"), post => post.pid));
    const indices = await db[method](sets, pids);
    return indices.map(stryMutAct_9fa48("29283") ? () => undefined : (stryCov_9fa48("29283"), index => utils.isNumber(index) ? stryMutAct_9fa48("29284") ? parseInt(index, 10) - 1 : (stryCov_9fa48("29284"), parseInt(index, 10) + 1) : 0));
  }
};
Posts.modifyPostByPrivilege = function (post, privileges) {
  if (stryMutAct_9fa48("29285")) {
    {}
  } else {
    stryCov_9fa48("29285");
    if (stryMutAct_9fa48("29288") ? post && post.deleted || !(post.selfPost || privileges['posts:view_deleted']) : stryMutAct_9fa48("29287") ? false : stryMutAct_9fa48("29286") ? true : (stryCov_9fa48("29286", "29287", "29288"), (stryMutAct_9fa48("29290") ? post || post.deleted : stryMutAct_9fa48("29289") ? true : (stryCov_9fa48("29289", "29290"), post && post.deleted)) && (stryMutAct_9fa48("29291") ? post.selfPost || privileges['posts:view_deleted'] : (stryCov_9fa48("29291"), !(stryMutAct_9fa48("29294") ? post.selfPost && privileges['posts:view_deleted'] : stryMutAct_9fa48("29293") ? false : stryMutAct_9fa48("29292") ? true : (stryCov_9fa48("29292", "29293", "29294"), post.selfPost || privileges[stryMutAct_9fa48("29295") ? "" : (stryCov_9fa48("29295"), 'posts:view_deleted')])))))) {
      if (stryMutAct_9fa48("29296")) {
        {}
      } else {
        stryCov_9fa48("29296");
        post.content = stryMutAct_9fa48("29297") ? "" : (stryCov_9fa48("29297"), '[[topic:post_is_deleted]]');
        if (stryMutAct_9fa48("29299") ? false : stryMutAct_9fa48("29298") ? true : (stryCov_9fa48("29298", "29299"), post.user)) {
          if (stryMutAct_9fa48("29300")) {
            {}
          } else {
            stryCov_9fa48("29300");
            post.user.signature = stryMutAct_9fa48("29301") ? "Stryker was here!" : (stryCov_9fa48("29301"), '');
          }
        }
      }
    }
  }
};
require('../promisify')(Posts);