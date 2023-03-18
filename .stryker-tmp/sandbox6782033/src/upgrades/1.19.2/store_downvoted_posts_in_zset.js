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
module.exports = stryMutAct_9fa48("43944") ? {} : (stryCov_9fa48("43944"), {
  name: stryMutAct_9fa48("43945") ? "" : (stryCov_9fa48("43945"), 'Store downvoted posts in user votes sorted set'),
  timestamp: Date.UTC(2022, 1, 4),
  method: async function () {
    if (stryMutAct_9fa48("43946")) {
      {}
    } else {
      stryCov_9fa48("43946");
      const batch = require('../../batch');
      const posts = require('../../posts');
      const {
        progress
      } = this;
      await batch.processSortedSet(stryMutAct_9fa48("43947") ? "" : (stryCov_9fa48("43947"), 'posts:pid'), async pids => {
        if (stryMutAct_9fa48("43948")) {
          {}
        } else {
          stryCov_9fa48("43948");
          const postData = await posts.getPostsFields(pids, stryMutAct_9fa48("43949") ? [] : (stryCov_9fa48("43949"), [stryMutAct_9fa48("43950") ? "" : (stryCov_9fa48("43950"), 'pid'), stryMutAct_9fa48("43951") ? "" : (stryCov_9fa48("43951"), 'uid'), stryMutAct_9fa48("43952") ? "" : (stryCov_9fa48("43952"), 'upvotes'), stryMutAct_9fa48("43953") ? "" : (stryCov_9fa48("43953"), 'downvotes')]));
          const cids = await posts.getCidsByPids(pids);
          const bulkAdd = stryMutAct_9fa48("43954") ? ["Stryker was here"] : (stryCov_9fa48("43954"), []);
          postData.forEach((post, index) => {
            if (stryMutAct_9fa48("43955")) {
              {}
            } else {
              stryCov_9fa48("43955");
              if (stryMutAct_9fa48("43958") ? post.votes > 0 && post.votes < 0 : stryMutAct_9fa48("43957") ? false : stryMutAct_9fa48("43956") ? true : (stryCov_9fa48("43956", "43957", "43958"), (stryMutAct_9fa48("43961") ? post.votes <= 0 : stryMutAct_9fa48("43960") ? post.votes >= 0 : stryMutAct_9fa48("43959") ? false : (stryCov_9fa48("43959", "43960", "43961"), post.votes > 0)) || (stryMutAct_9fa48("43964") ? post.votes >= 0 : stryMutAct_9fa48("43963") ? post.votes <= 0 : stryMutAct_9fa48("43962") ? false : (stryCov_9fa48("43962", "43963", "43964"), post.votes < 0)))) {
                if (stryMutAct_9fa48("43965")) {
                  {}
                } else {
                  stryCov_9fa48("43965");
                  const cid = cids[index];
                  bulkAdd.push(stryMutAct_9fa48("43966") ? [] : (stryCov_9fa48("43966"), [stryMutAct_9fa48("43967") ? `` : (stryCov_9fa48("43967"), `cid:${cid}:uid:${post.uid}:pids:votes`), post.votes, post.pid]));
                }
              }
            }
          });
          await db.sortedSetAddBulk(bulkAdd);
          progress.incr(postData.length);
        }
      }, stryMutAct_9fa48("43968") ? {} : (stryCov_9fa48("43968"), {
        progress,
        batch: 500
      }));
    }
  }
});