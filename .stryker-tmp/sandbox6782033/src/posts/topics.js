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
const topics = require('../topics');
const user = require('../user');
const utils = require('../utils');
module.exports = function (Posts) {
  if (stryMutAct_9fa48("30006")) {
    {}
  } else {
    stryCov_9fa48("30006");
    Posts.getPostsFromSet = async function (set, start, stop, uid, reverse) {
      if (stryMutAct_9fa48("30007")) {
        {}
      } else {
        stryCov_9fa48("30007");
        const pids = await Posts.getPidsFromSet(set, start, stop, reverse);
        const posts = await Posts.getPostsByPids(pids, uid);
        return await (stryMutAct_9fa48("30008") ? user.blocks : (stryCov_9fa48("30008"), user.blocks.filter(uid, posts)));
      }
    };
    Posts.isMain = async function (pids) {
      if (stryMutAct_9fa48("30009")) {
        {}
      } else {
        stryCov_9fa48("30009");
        const isArray = Array.isArray(pids);
        pids = isArray ? pids : stryMutAct_9fa48("30010") ? [] : (stryCov_9fa48("30010"), [pids]);
        const postData = await Posts.getPostsFields(pids, stryMutAct_9fa48("30011") ? [] : (stryCov_9fa48("30011"), [stryMutAct_9fa48("30012") ? "" : (stryCov_9fa48("30012"), 'tid')]));
        const topicData = await topics.getTopicsFields(postData.map(stryMutAct_9fa48("30013") ? () => undefined : (stryCov_9fa48("30013"), t => t.tid)), stryMutAct_9fa48("30014") ? [] : (stryCov_9fa48("30014"), [stryMutAct_9fa48("30015") ? "" : (stryCov_9fa48("30015"), 'mainPid')]));
        const result = pids.map(stryMutAct_9fa48("30016") ? () => undefined : (stryCov_9fa48("30016"), (pid, i) => stryMutAct_9fa48("30019") ? parseInt(pid, 10) !== parseInt(topicData[i].mainPid, 10) : stryMutAct_9fa48("30018") ? false : stryMutAct_9fa48("30017") ? true : (stryCov_9fa48("30017", "30018", "30019"), parseInt(pid, 10) === parseInt(topicData[i].mainPid, 10))));
        return isArray ? result : result[0];
      }
    };
    Posts.getTopicFields = async function (pid, fields) {
      if (stryMutAct_9fa48("30020")) {
        {}
      } else {
        stryCov_9fa48("30020");
        const tid = await Posts.getPostField(pid, stryMutAct_9fa48("30021") ? "" : (stryCov_9fa48("30021"), 'tid'));
        return await topics.getTopicFields(tid, fields);
      }
    };
    Posts.generatePostPath = async function (pid, uid) {
      if (stryMutAct_9fa48("30022")) {
        {}
      } else {
        stryCov_9fa48("30022");
        const paths = await Posts.generatePostPaths(stryMutAct_9fa48("30023") ? [] : (stryCov_9fa48("30023"), [pid]), uid);
        return (stryMutAct_9fa48("30026") ? Array.isArray(paths) || paths.length : stryMutAct_9fa48("30025") ? false : stryMutAct_9fa48("30024") ? true : (stryCov_9fa48("30024", "30025", "30026"), Array.isArray(paths) && paths.length)) ? paths[0] : null;
      }
    };
    Posts.generatePostPaths = async function (pids, uid) {
      if (stryMutAct_9fa48("30027")) {
        {}
      } else {
        stryCov_9fa48("30027");
        const postData = await Posts.getPostsFields(pids, stryMutAct_9fa48("30028") ? [] : (stryCov_9fa48("30028"), [stryMutAct_9fa48("30029") ? "" : (stryCov_9fa48("30029"), 'pid'), stryMutAct_9fa48("30030") ? "" : (stryCov_9fa48("30030"), 'tid')]));
        const tids = postData.map(stryMutAct_9fa48("30031") ? () => undefined : (stryCov_9fa48("30031"), post => stryMutAct_9fa48("30034") ? post || post.tid : stryMutAct_9fa48("30033") ? false : stryMutAct_9fa48("30032") ? true : (stryCov_9fa48("30032", "30033", "30034"), post && post.tid)));
        const [indices, topicData] = await Promise.all(stryMutAct_9fa48("30035") ? [] : (stryCov_9fa48("30035"), [Posts.getPostIndices(postData, uid), topics.getTopicsFields(tids, stryMutAct_9fa48("30036") ? [] : (stryCov_9fa48("30036"), [stryMutAct_9fa48("30037") ? "" : (stryCov_9fa48("30037"), 'slug')]))]));
        const paths = pids.map((pid, index) => {
          if (stryMutAct_9fa48("30038")) {
            {}
          } else {
            stryCov_9fa48("30038");
            const slug = topicData[index] ? topicData[index].slug : null;
            const postIndex = utils.isNumber(indices[index]) ? stryMutAct_9fa48("30039") ? parseInt(indices[index], 10) - 1 : (stryCov_9fa48("30039"), parseInt(indices[index], 10) + 1) : null;
            if (stryMutAct_9fa48("30042") ? slug || postIndex : stryMutAct_9fa48("30041") ? false : stryMutAct_9fa48("30040") ? true : (stryCov_9fa48("30040", "30041", "30042"), slug && postIndex)) {
              if (stryMutAct_9fa48("30043")) {
                {}
              } else {
                stryCov_9fa48("30043");
                return stryMutAct_9fa48("30044") ? `` : (stryCov_9fa48("30044"), `/topic/${slug}/${postIndex}`);
              }
            }
            return null;
          }
        });
        return paths;
      }
    };
  }
};