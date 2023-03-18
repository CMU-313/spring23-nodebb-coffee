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
const db = require('../../database');
const user = require('../../user');
const posts = require('../../posts');
const topics = require('../../topics');
const categories = require('../../categories');
const privileges = require('../../privileges');
const pagination = require('../../pagination');
const helpers = require('../helpers');
const accountHelpers = require('./helpers');
const plugins = require('../../plugins');
const utils = require('../../utils');
const postsController = module.exports;
const templateToData = stryMutAct_9fa48("5877") ? {} : (stryCov_9fa48("5877"), {
  'account/bookmarks': stryMutAct_9fa48("5878") ? {} : (stryCov_9fa48("5878"), {
    type: stryMutAct_9fa48("5879") ? "" : (stryCov_9fa48("5879"), 'posts'),
    noItemsFoundKey: stryMutAct_9fa48("5880") ? "" : (stryCov_9fa48("5880"), '[[topic:bookmarks.has_no_bookmarks]]'),
    crumb: stryMutAct_9fa48("5881") ? "" : (stryCov_9fa48("5881"), '[[user:bookmarks]]'),
    getSets: function (callerUid, userData) {
      if (stryMutAct_9fa48("5882")) {
        {}
      } else {
        stryCov_9fa48("5882");
        return stryMutAct_9fa48("5883") ? `` : (stryCov_9fa48("5883"), `uid:${userData.uid}:bookmarks`);
      }
    }
  }),
  'account/posts': stryMutAct_9fa48("5884") ? {} : (stryCov_9fa48("5884"), {
    type: stryMutAct_9fa48("5885") ? "" : (stryCov_9fa48("5885"), 'posts'),
    noItemsFoundKey: stryMutAct_9fa48("5886") ? "" : (stryCov_9fa48("5886"), '[[user:has_no_posts]]'),
    crumb: stryMutAct_9fa48("5887") ? "" : (stryCov_9fa48("5887"), '[[global:posts]]'),
    getSets: async function (callerUid, userData) {
      if (stryMutAct_9fa48("5888")) {
        {}
      } else {
        stryCov_9fa48("5888");
        const cids = await categories.getCidsByPrivilege(stryMutAct_9fa48("5889") ? "" : (stryCov_9fa48("5889"), 'categories:cid'), callerUid, stryMutAct_9fa48("5890") ? "" : (stryCov_9fa48("5890"), 'topics:read'));
        return cids.map(stryMutAct_9fa48("5891") ? () => undefined : (stryCov_9fa48("5891"), c => stryMutAct_9fa48("5892") ? `` : (stryCov_9fa48("5892"), `cid:${c}:uid:${userData.uid}:pids`)));
      }
    }
  }),
  'account/upvoted': stryMutAct_9fa48("5893") ? {} : (stryCov_9fa48("5893"), {
    type: stryMutAct_9fa48("5894") ? "" : (stryCov_9fa48("5894"), 'posts'),
    noItemsFoundKey: stryMutAct_9fa48("5895") ? "" : (stryCov_9fa48("5895"), '[[user:has_no_upvoted_posts]]'),
    crumb: stryMutAct_9fa48("5896") ? "" : (stryCov_9fa48("5896"), '[[global:upvoted]]'),
    getSets: function (callerUid, userData) {
      if (stryMutAct_9fa48("5897")) {
        {}
      } else {
        stryCov_9fa48("5897");
        return stryMutAct_9fa48("5898") ? `` : (stryCov_9fa48("5898"), `uid:${userData.uid}:upvote`);
      }
    }
  }),
  'account/downvoted': stryMutAct_9fa48("5899") ? {} : (stryCov_9fa48("5899"), {
    type: stryMutAct_9fa48("5900") ? "" : (stryCov_9fa48("5900"), 'posts'),
    noItemsFoundKey: stryMutAct_9fa48("5901") ? "" : (stryCov_9fa48("5901"), '[[user:has_no_downvoted_posts]]'),
    crumb: stryMutAct_9fa48("5902") ? "" : (stryCov_9fa48("5902"), '[[global:downvoted]]'),
    getSets: function (callerUid, userData) {
      if (stryMutAct_9fa48("5903")) {
        {}
      } else {
        stryCov_9fa48("5903");
        return stryMutAct_9fa48("5904") ? `` : (stryCov_9fa48("5904"), `uid:${userData.uid}:downvote`);
      }
    }
  }),
  'account/best': stryMutAct_9fa48("5905") ? {} : (stryCov_9fa48("5905"), {
    type: stryMutAct_9fa48("5906") ? "" : (stryCov_9fa48("5906"), 'posts'),
    noItemsFoundKey: stryMutAct_9fa48("5907") ? "" : (stryCov_9fa48("5907"), '[[user:has_no_best_posts]]'),
    crumb: stryMutAct_9fa48("5908") ? "" : (stryCov_9fa48("5908"), '[[global:best]]'),
    getSets: async function (callerUid, userData) {
      if (stryMutAct_9fa48("5909")) {
        {}
      } else {
        stryCov_9fa48("5909");
        const cids = await categories.getCidsByPrivilege(stryMutAct_9fa48("5910") ? "" : (stryCov_9fa48("5910"), 'categories:cid'), callerUid, stryMutAct_9fa48("5911") ? "" : (stryCov_9fa48("5911"), 'topics:read'));
        return cids.map(stryMutAct_9fa48("5912") ? () => undefined : (stryCov_9fa48("5912"), c => stryMutAct_9fa48("5913") ? `` : (stryCov_9fa48("5913"), `cid:${c}:uid:${userData.uid}:pids:votes`)));
      }
    },
    getTopics: async (sets, req, start, stop) => {
      if (stryMutAct_9fa48("5914")) {
        {}
      } else {
        stryCov_9fa48("5914");
        let pids = await db.getSortedSetRevRangeByScore(sets, start, stryMutAct_9fa48("5915") ? stop - start - 1 : (stryCov_9fa48("5915"), (stryMutAct_9fa48("5916") ? stop + start : (stryCov_9fa48("5916"), stop - start)) + 1), stryMutAct_9fa48("5917") ? "" : (stryCov_9fa48("5917"), '+inf'), 1);
        pids = await (stryMutAct_9fa48("5918") ? privileges.posts : (stryCov_9fa48("5918"), privileges.posts.filter(stryMutAct_9fa48("5919") ? "" : (stryCov_9fa48("5919"), 'topics:read'), pids, req.uid)));
        const postObjs = await posts.getPostSummaryByPids(pids, req.uid, stryMutAct_9fa48("5920") ? {} : (stryCov_9fa48("5920"), {
          stripTags: stryMutAct_9fa48("5921") ? true : (stryCov_9fa48("5921"), false)
        }));
        return stryMutAct_9fa48("5922") ? {} : (stryCov_9fa48("5922"), {
          posts: postObjs,
          nextStart: stryMutAct_9fa48("5923") ? stop - 1 : (stryCov_9fa48("5923"), stop + 1)
        });
      }
    },
    getItemCount: async sets => {
      if (stryMutAct_9fa48("5924")) {
        {}
      } else {
        stryCov_9fa48("5924");
        const counts = await Promise.all(sets.map(stryMutAct_9fa48("5925") ? () => undefined : (stryCov_9fa48("5925"), set => db.sortedSetCount(set, 1, stryMutAct_9fa48("5926") ? "" : (stryCov_9fa48("5926"), '+inf')))));
        return counts.reduce(stryMutAct_9fa48("5927") ? () => undefined : (stryCov_9fa48("5927"), (acc, val) => stryMutAct_9fa48("5928") ? acc - val : (stryCov_9fa48("5928"), acc + val)), 0);
      }
    }
  }),
  'account/controversial': stryMutAct_9fa48("5929") ? {} : (stryCov_9fa48("5929"), {
    type: stryMutAct_9fa48("5930") ? "" : (stryCov_9fa48("5930"), 'posts'),
    noItemsFoundKey: stryMutAct_9fa48("5931") ? "" : (stryCov_9fa48("5931"), '[[user:has_no_controversial_posts]]'),
    crumb: stryMutAct_9fa48("5932") ? "" : (stryCov_9fa48("5932"), '[[global:controversial]]'),
    getSets: async function (callerUid, userData) {
      if (stryMutAct_9fa48("5933")) {
        {}
      } else {
        stryCov_9fa48("5933");
        const cids = await categories.getCidsByPrivilege(stryMutAct_9fa48("5934") ? "" : (stryCov_9fa48("5934"), 'categories:cid'), callerUid, stryMutAct_9fa48("5935") ? "" : (stryCov_9fa48("5935"), 'topics:read'));
        return cids.map(stryMutAct_9fa48("5936") ? () => undefined : (stryCov_9fa48("5936"), c => stryMutAct_9fa48("5937") ? `` : (stryCov_9fa48("5937"), `cid:${c}:uid:${userData.uid}:pids:votes`)));
      }
    },
    getTopics: async (sets, req, start, stop) => {
      if (stryMutAct_9fa48("5938")) {
        {}
      } else {
        stryCov_9fa48("5938");
        let pids = await db.getSortedSetRangeByScore(sets, start, stryMutAct_9fa48("5939") ? stop - start - 1 : (stryCov_9fa48("5939"), (stryMutAct_9fa48("5940") ? stop + start : (stryCov_9fa48("5940"), stop - start)) + 1), stryMutAct_9fa48("5941") ? "" : (stryCov_9fa48("5941"), '-inf'), stryMutAct_9fa48("5942") ? +1 : (stryCov_9fa48("5942"), -1));
        pids = await (stryMutAct_9fa48("5943") ? privileges.posts : (stryCov_9fa48("5943"), privileges.posts.filter(stryMutAct_9fa48("5944") ? "" : (stryCov_9fa48("5944"), 'topics:read'), pids, req.uid)));
        const postObjs = await posts.getPostSummaryByPids(pids, req.uid, stryMutAct_9fa48("5945") ? {} : (stryCov_9fa48("5945"), {
          stripTags: stryMutAct_9fa48("5946") ? true : (stryCov_9fa48("5946"), false)
        }));
        return stryMutAct_9fa48("5947") ? {} : (stryCov_9fa48("5947"), {
          posts: postObjs,
          nextStart: stryMutAct_9fa48("5948") ? stop - 1 : (stryCov_9fa48("5948"), stop + 1)
        });
      }
    },
    getItemCount: async sets => {
      if (stryMutAct_9fa48("5949")) {
        {}
      } else {
        stryCov_9fa48("5949");
        const counts = await Promise.all(sets.map(stryMutAct_9fa48("5950") ? () => undefined : (stryCov_9fa48("5950"), set => db.sortedSetCount(set, stryMutAct_9fa48("5951") ? "" : (stryCov_9fa48("5951"), '-inf'), stryMutAct_9fa48("5952") ? +1 : (stryCov_9fa48("5952"), -1)))));
        return counts.reduce(stryMutAct_9fa48("5953") ? () => undefined : (stryCov_9fa48("5953"), (acc, val) => stryMutAct_9fa48("5954") ? acc - val : (stryCov_9fa48("5954"), acc + val)), 0);
      }
    }
  }),
  'account/watched': stryMutAct_9fa48("5955") ? {} : (stryCov_9fa48("5955"), {
    type: stryMutAct_9fa48("5956") ? "" : (stryCov_9fa48("5956"), 'topics'),
    noItemsFoundKey: stryMutAct_9fa48("5957") ? "" : (stryCov_9fa48("5957"), '[[user:has_no_watched_topics]]'),
    crumb: stryMutAct_9fa48("5958") ? "" : (stryCov_9fa48("5958"), '[[user:watched]]'),
    getSets: function (callerUid, userData) {
      if (stryMutAct_9fa48("5959")) {
        {}
      } else {
        stryCov_9fa48("5959");
        return stryMutAct_9fa48("5960") ? `` : (stryCov_9fa48("5960"), `uid:${userData.uid}:followed_tids`);
      }
    },
    getTopics: async function (set, req, start, stop) {
      if (stryMutAct_9fa48("5961")) {
        {}
      } else {
        stryCov_9fa48("5961");
        const {
          sort
        } = req.query;
        const map = stryMutAct_9fa48("5962") ? {} : (stryCov_9fa48("5962"), {
          votes: stryMutAct_9fa48("5963") ? "" : (stryCov_9fa48("5963"), 'topics:votes'),
          posts: stryMutAct_9fa48("5964") ? "" : (stryCov_9fa48("5964"), 'topics:posts'),
          views: stryMutAct_9fa48("5965") ? "" : (stryCov_9fa48("5965"), 'topics:views'),
          lastpost: stryMutAct_9fa48("5966") ? "" : (stryCov_9fa48("5966"), 'topics:recent'),
          firstpost: stryMutAct_9fa48("5967") ? "" : (stryCov_9fa48("5967"), 'topics:tid')
        });
        if (stryMutAct_9fa48("5970") ? !sort && !map[sort] : stryMutAct_9fa48("5969") ? false : stryMutAct_9fa48("5968") ? true : (stryCov_9fa48("5968", "5969", "5970"), (stryMutAct_9fa48("5971") ? sort : (stryCov_9fa48("5971"), !sort)) || (stryMutAct_9fa48("5972") ? map[sort] : (stryCov_9fa48("5972"), !map[sort])))) {
          if (stryMutAct_9fa48("5973")) {
            {}
          } else {
            stryCov_9fa48("5973");
            return await topics.getTopicsFromSet(set, req.uid, start, stop);
          }
        }
        const sortSet = map[sort];
        let tids = await db.getSortedSetRevRange(set, 0, stryMutAct_9fa48("5974") ? +1 : (stryCov_9fa48("5974"), -1));
        const scores = await db.sortedSetScores(sortSet, tids);
        tids = stryMutAct_9fa48("5976") ? tids.map((tid, i) => ({
          tid: tid,
          score: scores[i]
        })).slice(start, stop + 1).map(t => t.tid) : stryMutAct_9fa48("5975") ? tids.map((tid, i) => ({
          tid: tid,
          score: scores[i]
        })).sort((a, b) => b.score - a.score).map(t => t.tid) : (stryCov_9fa48("5975", "5976"), tids.map(stryMutAct_9fa48("5977") ? () => undefined : (stryCov_9fa48("5977"), (tid, i) => stryMutAct_9fa48("5978") ? {} : (stryCov_9fa48("5978"), {
          tid: tid,
          score: scores[i]
        }))).sort(stryMutAct_9fa48("5979") ? () => undefined : (stryCov_9fa48("5979"), (a, b) => stryMutAct_9fa48("5980") ? b.score + a.score : (stryCov_9fa48("5980"), b.score - a.score))).slice(start, stryMutAct_9fa48("5981") ? stop - 1 : (stryCov_9fa48("5981"), stop + 1)).map(stryMutAct_9fa48("5982") ? () => undefined : (stryCov_9fa48("5982"), t => t.tid)));
        const topicsData = await topics.getTopics(tids, req.uid);
        topics.calculateTopicIndices(topicsData, start);
        return stryMutAct_9fa48("5983") ? {} : (stryCov_9fa48("5983"), {
          topics: topicsData,
          nextStart: stryMutAct_9fa48("5984") ? stop - 1 : (stryCov_9fa48("5984"), stop + 1)
        });
      }
    }
  }),
  'account/ignored': stryMutAct_9fa48("5985") ? {} : (stryCov_9fa48("5985"), {
    type: stryMutAct_9fa48("5986") ? "" : (stryCov_9fa48("5986"), 'topics'),
    noItemsFoundKey: stryMutAct_9fa48("5987") ? "" : (stryCov_9fa48("5987"), '[[user:has_no_ignored_topics]]'),
    crumb: stryMutAct_9fa48("5988") ? "" : (stryCov_9fa48("5988"), '[[user:ignored]]'),
    getSets: function (callerUid, userData) {
      if (stryMutAct_9fa48("5989")) {
        {}
      } else {
        stryCov_9fa48("5989");
        return stryMutAct_9fa48("5990") ? `` : (stryCov_9fa48("5990"), `uid:${userData.uid}:ignored_tids`);
      }
    }
  }),
  'account/topics': stryMutAct_9fa48("5991") ? {} : (stryCov_9fa48("5991"), {
    type: stryMutAct_9fa48("5992") ? "" : (stryCov_9fa48("5992"), 'topics'),
    noItemsFoundKey: stryMutAct_9fa48("5993") ? "" : (stryCov_9fa48("5993"), '[[user:has_no_topics]]'),
    crumb: stryMutAct_9fa48("5994") ? "" : (stryCov_9fa48("5994"), '[[global:topics]]'),
    getSets: async function (callerUid, userData) {
      if (stryMutAct_9fa48("5995")) {
        {}
      } else {
        stryCov_9fa48("5995");
        const cids = await categories.getCidsByPrivilege(stryMutAct_9fa48("5996") ? "" : (stryCov_9fa48("5996"), 'categories:cid'), callerUid, stryMutAct_9fa48("5997") ? "" : (stryCov_9fa48("5997"), 'topics:read'));
        return cids.map(stryMutAct_9fa48("5998") ? () => undefined : (stryCov_9fa48("5998"), c => stryMutAct_9fa48("5999") ? `` : (stryCov_9fa48("5999"), `cid:${c}:uid:${userData.uid}:tids`)));
      }
    }
  })
});
postsController.getBookmarks = async function (req, res, next) {
  if (stryMutAct_9fa48("6000")) {
    {}
  } else {
    stryCov_9fa48("6000");
    await getPostsFromUserSet(stryMutAct_9fa48("6001") ? "" : (stryCov_9fa48("6001"), 'account/bookmarks'), req, res, next);
  }
};
postsController.getPosts = async function (req, res, next) {
  if (stryMutAct_9fa48("6002")) {
    {}
  } else {
    stryCov_9fa48("6002");
    await getPostsFromUserSet(stryMutAct_9fa48("6003") ? "" : (stryCov_9fa48("6003"), 'account/posts'), req, res, next);
  }
};
postsController.getUpVotedPosts = async function (req, res, next) {
  if (stryMutAct_9fa48("6004")) {
    {}
  } else {
    stryCov_9fa48("6004");
    await getPostsFromUserSet(stryMutAct_9fa48("6005") ? "" : (stryCov_9fa48("6005"), 'account/upvoted'), req, res, next);
  }
};
postsController.getDownVotedPosts = async function (req, res, next) {
  if (stryMutAct_9fa48("6006")) {
    {}
  } else {
    stryCov_9fa48("6006");
    await getPostsFromUserSet(stryMutAct_9fa48("6007") ? "" : (stryCov_9fa48("6007"), 'account/downvoted'), req, res, next);
  }
};
postsController.getBestPosts = async function (req, res, next) {
  if (stryMutAct_9fa48("6008")) {
    {}
  } else {
    stryCov_9fa48("6008");
    await getPostsFromUserSet(stryMutAct_9fa48("6009") ? "" : (stryCov_9fa48("6009"), 'account/best'), req, res, next);
  }
};
postsController.getControversialPosts = async function (req, res, next) {
  if (stryMutAct_9fa48("6010")) {
    {}
  } else {
    stryCov_9fa48("6010");
    await getPostsFromUserSet(stryMutAct_9fa48("6011") ? "" : (stryCov_9fa48("6011"), 'account/controversial'), req, res, next);
  }
};
postsController.getWatchedTopics = async function (req, res, next) {
  if (stryMutAct_9fa48("6012")) {
    {}
  } else {
    stryCov_9fa48("6012");
    await getPostsFromUserSet(stryMutAct_9fa48("6013") ? "" : (stryCov_9fa48("6013"), 'account/watched'), req, res, next);
  }
};
postsController.getIgnoredTopics = async function (req, res, next) {
  if (stryMutAct_9fa48("6014")) {
    {}
  } else {
    stryCov_9fa48("6014");
    await getPostsFromUserSet(stryMutAct_9fa48("6015") ? "" : (stryCov_9fa48("6015"), 'account/ignored'), req, res, next);
  }
};
postsController.getTopics = async function (req, res, next) {
  if (stryMutAct_9fa48("6016")) {
    {}
  } else {
    stryCov_9fa48("6016");
    await getPostsFromUserSet(stryMutAct_9fa48("6017") ? "" : (stryCov_9fa48("6017"), 'account/topics'), req, res, next);
  }
};
async function getPostsFromUserSet(template, req, res, next) {
  if (stryMutAct_9fa48("6018")) {
    {}
  } else {
    stryCov_9fa48("6018");
    const data = templateToData[template];
    const page = Math.max(1, stryMutAct_9fa48("6021") ? parseInt(req.query.page, 10) && 1 : stryMutAct_9fa48("6020") ? false : stryMutAct_9fa48("6019") ? true : (stryCov_9fa48("6019", "6020", "6021"), parseInt(req.query.page, 10) || 1));
    const [userData, settings] = await Promise.all(stryMutAct_9fa48("6022") ? [] : (stryCov_9fa48("6022"), [accountHelpers.getUserDataByUserSlug(req.params.userslug, req.uid, req.query), user.getSettings(req.uid)]));
    if (stryMutAct_9fa48("6025") ? false : stryMutAct_9fa48("6024") ? true : stryMutAct_9fa48("6023") ? userData : (stryCov_9fa48("6023", "6024", "6025"), !userData)) {
      if (stryMutAct_9fa48("6026")) {
        {}
      } else {
        stryCov_9fa48("6026");
        return next();
      }
    }
    const itemsPerPage = (stryMutAct_9fa48("6029") ? data.type !== 'topics' : stryMutAct_9fa48("6028") ? false : stryMutAct_9fa48("6027") ? true : (stryCov_9fa48("6027", "6028", "6029"), data.type === (stryMutAct_9fa48("6030") ? "" : (stryCov_9fa48("6030"), 'topics')))) ? settings.topicsPerPage : settings.postsPerPage;
    const start = stryMutAct_9fa48("6031") ? (page - 1) / itemsPerPage : (stryCov_9fa48("6031"), (stryMutAct_9fa48("6032") ? page + 1 : (stryCov_9fa48("6032"), page - 1)) * itemsPerPage);
    const stop = stryMutAct_9fa48("6033") ? start + itemsPerPage + 1 : (stryCov_9fa48("6033"), (stryMutAct_9fa48("6034") ? start - itemsPerPage : (stryCov_9fa48("6034"), start + itemsPerPage)) - 1);
    const sets = await data.getSets(req.uid, userData);
    let result;
    if (stryMutAct_9fa48("6036") ? false : stryMutAct_9fa48("6035") ? true : (stryCov_9fa48("6035", "6036"), plugins.hooks.hasListeners(stryMutAct_9fa48("6037") ? "" : (stryCov_9fa48("6037"), 'filter:account.getPostsFromUserSet')))) {
      if (stryMutAct_9fa48("6038")) {
        {}
      } else {
        stryCov_9fa48("6038");
        result = await plugins.hooks.fire(stryMutAct_9fa48("6039") ? "" : (stryCov_9fa48("6039"), 'filter:account.getPostsFromUserSet'), stryMutAct_9fa48("6040") ? {} : (stryCov_9fa48("6040"), {
          req: req,
          template: template,
          userData: userData,
          settings: settings,
          data: data,
          start: start,
          stop: stop,
          itemCount: 0,
          itemData: stryMutAct_9fa48("6041") ? ["Stryker was here"] : (stryCov_9fa48("6041"), [])
        }));
      }
    } else {
      if (stryMutAct_9fa48("6042")) {
        {}
      } else {
        stryCov_9fa48("6042");
        result = await utils.promiseParallel(stryMutAct_9fa48("6043") ? {} : (stryCov_9fa48("6043"), {
          itemCount: getItemCount(sets, data, settings),
          itemData: getItemData(sets, data, req, start, stop)
        }));
      }
    }
    const {
      itemCount,
      itemData
    } = result;
    userData[data.type] = itemData[data.type];
    userData.nextStart = itemData.nextStart;
    const pageCount = Math.ceil(stryMutAct_9fa48("6044") ? itemCount * itemsPerPage : (stryCov_9fa48("6044"), itemCount / itemsPerPage));
    userData.pagination = pagination.create(page, pageCount, req.query);
    userData.noItemsFoundKey = data.noItemsFoundKey;
    userData.title = stryMutAct_9fa48("6045") ? `` : (stryCov_9fa48("6045"), `[[pages:${template}, ${userData.username}]]`);
    userData.breadcrumbs = helpers.buildBreadcrumbs(stryMutAct_9fa48("6046") ? [] : (stryCov_9fa48("6046"), [stryMutAct_9fa48("6047") ? {} : (stryCov_9fa48("6047"), {
      text: userData.username,
      url: stryMutAct_9fa48("6048") ? `` : (stryCov_9fa48("6048"), `/user/${userData.userslug}`)
    }), stryMutAct_9fa48("6049") ? {} : (stryCov_9fa48("6049"), {
      text: data.crumb
    })]));
    userData.showSort = stryMutAct_9fa48("6052") ? template !== 'account/watched' : stryMutAct_9fa48("6051") ? false : stryMutAct_9fa48("6050") ? true : (stryCov_9fa48("6050", "6051", "6052"), template === (stryMutAct_9fa48("6053") ? "" : (stryCov_9fa48("6053"), 'account/watched')));
    const baseUrl = stryMutAct_9fa48("6054") ? req.baseUrl - req.path.replace(/^\/api/, '') : (stryCov_9fa48("6054"), req.baseUrl + req.path.replace(stryMutAct_9fa48("6055") ? /\/api/ : (stryCov_9fa48("6055"), /^\/api/), stryMutAct_9fa48("6056") ? "Stryker was here!" : (stryCov_9fa48("6056"), '')));
    userData.sortOptions = stryMutAct_9fa48("6057") ? [] : (stryCov_9fa48("6057"), [stryMutAct_9fa48("6058") ? {} : (stryCov_9fa48("6058"), {
      url: stryMutAct_9fa48("6059") ? `` : (stryCov_9fa48("6059"), `${baseUrl}?sort=votes`),
      name: stryMutAct_9fa48("6060") ? "" : (stryCov_9fa48("6060"), '[[global:votes]]')
    }), stryMutAct_9fa48("6061") ? {} : (stryCov_9fa48("6061"), {
      url: stryMutAct_9fa48("6062") ? `` : (stryCov_9fa48("6062"), `${baseUrl}?sort=posts`),
      name: stryMutAct_9fa48("6063") ? "" : (stryCov_9fa48("6063"), '[[global:posts]]')
    }), stryMutAct_9fa48("6064") ? {} : (stryCov_9fa48("6064"), {
      url: stryMutAct_9fa48("6065") ? `` : (stryCov_9fa48("6065"), `${baseUrl}?sort=views`),
      name: stryMutAct_9fa48("6066") ? "" : (stryCov_9fa48("6066"), '[[global:views]]')
    }), stryMutAct_9fa48("6067") ? {} : (stryCov_9fa48("6067"), {
      url: stryMutAct_9fa48("6068") ? `` : (stryCov_9fa48("6068"), `${baseUrl}?sort=lastpost`),
      name: stryMutAct_9fa48("6069") ? "" : (stryCov_9fa48("6069"), '[[global:lastpost]]')
    }), stryMutAct_9fa48("6070") ? {} : (stryCov_9fa48("6070"), {
      url: stryMutAct_9fa48("6071") ? `` : (stryCov_9fa48("6071"), `${baseUrl}?sort=firstpost`),
      name: stryMutAct_9fa48("6072") ? "" : (stryCov_9fa48("6072"), '[[global:firstpost]]')
    })]);
    userData.sortOptions.forEach(option => {
      if (stryMutAct_9fa48("6073")) {
        {}
      } else {
        stryCov_9fa48("6073");
        option.selected = option.url.includes(stryMutAct_9fa48("6074") ? `` : (stryCov_9fa48("6074"), `sort=${req.query.sort}`));
      }
    });
    res.render(template, userData);
  }
}
async function getItemData(sets, data, req, start, stop) {
  if (stryMutAct_9fa48("6075")) {
    {}
  } else {
    stryCov_9fa48("6075");
    if (stryMutAct_9fa48("6077") ? false : stryMutAct_9fa48("6076") ? true : (stryCov_9fa48("6076", "6077"), data.getTopics)) {
      if (stryMutAct_9fa48("6078")) {
        {}
      } else {
        stryCov_9fa48("6078");
        return await data.getTopics(sets, req, start, stop);
      }
    }
    const method = (stryMutAct_9fa48("6081") ? data.type !== 'topics' : stryMutAct_9fa48("6080") ? false : stryMutAct_9fa48("6079") ? true : (stryCov_9fa48("6079", "6080", "6081"), data.type === (stryMutAct_9fa48("6082") ? "" : (stryCov_9fa48("6082"), 'topics')))) ? topics.getTopicsFromSet : posts.getPostSummariesFromSet;
    return await method(sets, req.uid, start, stop);
  }
}
async function getItemCount(sets, data, settings) {
  if (stryMutAct_9fa48("6083")) {
    {}
  } else {
    stryCov_9fa48("6083");
    if (stryMutAct_9fa48("6086") ? false : stryMutAct_9fa48("6085") ? true : stryMutAct_9fa48("6084") ? settings.usePagination : (stryCov_9fa48("6084", "6085", "6086"), !settings.usePagination)) {
      if (stryMutAct_9fa48("6087")) {
        {}
      } else {
        stryCov_9fa48("6087");
        return 0;
      }
    }
    if (stryMutAct_9fa48("6089") ? false : stryMutAct_9fa48("6088") ? true : (stryCov_9fa48("6088", "6089"), data.getItemCount)) {
      if (stryMutAct_9fa48("6090")) {
        {}
      } else {
        stryCov_9fa48("6090");
        return await data.getItemCount(sets);
      }
    }
    return await db.sortedSetsCardSum(sets);
  }
}