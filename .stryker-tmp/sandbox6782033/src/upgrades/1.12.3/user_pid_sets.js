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
const batch = require('../../batch');
const posts = require('../../posts');
const topics = require('../../topics');
module.exports = stryMutAct_9fa48("42916") ? {} : (stryCov_9fa48("42916"), {
  name: stryMutAct_9fa48("42917") ? "" : (stryCov_9fa48("42917"), 'Create zsets for user posts per category'),
  timestamp: Date.UTC(2019, 5, 23),
  method: async function () {
    if (stryMutAct_9fa48("42918")) {
      {}
    } else {
      stryCov_9fa48("42918");
      const {
        progress
      } = this;
      await batch.processSortedSet(stryMutAct_9fa48("42919") ? "" : (stryCov_9fa48("42919"), 'posts:pid'), async pids => {
        if (stryMutAct_9fa48("42920")) {
          {}
        } else {
          stryCov_9fa48("42920");
          progress.incr(pids.length);
          const postData = await posts.getPostsFields(pids, stryMutAct_9fa48("42921") ? [] : (stryCov_9fa48("42921"), [stryMutAct_9fa48("42922") ? "" : (stryCov_9fa48("42922"), 'pid'), stryMutAct_9fa48("42923") ? "" : (stryCov_9fa48("42923"), 'uid'), stryMutAct_9fa48("42924") ? "" : (stryCov_9fa48("42924"), 'tid'), stryMutAct_9fa48("42925") ? "" : (stryCov_9fa48("42925"), 'upvotes'), stryMutAct_9fa48("42926") ? "" : (stryCov_9fa48("42926"), 'downvotes'), stryMutAct_9fa48("42927") ? "" : (stryCov_9fa48("42927"), 'timestamp')]));
          const tids = postData.map(stryMutAct_9fa48("42928") ? () => undefined : (stryCov_9fa48("42928"), p => p.tid));
          const topicData = await topics.getTopicsFields(tids, stryMutAct_9fa48("42929") ? [] : (stryCov_9fa48("42929"), [stryMutAct_9fa48("42930") ? "" : (stryCov_9fa48("42930"), 'cid')]));
          const bulk = stryMutAct_9fa48("42931") ? ["Stryker was here"] : (stryCov_9fa48("42931"), []);
          postData.forEach((p, index) => {
            if (stryMutAct_9fa48("42932")) {
              {}
            } else {
              stryCov_9fa48("42932");
              if (stryMutAct_9fa48("42935") ? p && p.uid && p.pid && p.tid || p.timestamp : stryMutAct_9fa48("42934") ? false : stryMutAct_9fa48("42933") ? true : (stryCov_9fa48("42933", "42934", "42935"), (stryMutAct_9fa48("42937") ? p && p.uid && p.pid || p.tid : stryMutAct_9fa48("42936") ? true : (stryCov_9fa48("42936", "42937"), (stryMutAct_9fa48("42939") ? p && p.uid || p.pid : stryMutAct_9fa48("42938") ? true : (stryCov_9fa48("42938", "42939"), (stryMutAct_9fa48("42941") ? p || p.uid : stryMutAct_9fa48("42940") ? true : (stryCov_9fa48("42940", "42941"), p && p.uid)) && p.pid)) && p.tid)) && p.timestamp)) {
                if (stryMutAct_9fa48("42942")) {
                  {}
                } else {
                  stryCov_9fa48("42942");
                  bulk.push(stryMutAct_9fa48("42943") ? [] : (stryCov_9fa48("42943"), [stryMutAct_9fa48("42944") ? `` : (stryCov_9fa48("42944"), `cid:${topicData[index].cid}:uid:${p.uid}:pids`), p.timestamp, p.pid]));
                  if (stryMutAct_9fa48("42948") ? p.votes <= 0 : stryMutAct_9fa48("42947") ? p.votes >= 0 : stryMutAct_9fa48("42946") ? false : stryMutAct_9fa48("42945") ? true : (stryCov_9fa48("42945", "42946", "42947", "42948"), p.votes > 0)) {
                    if (stryMutAct_9fa48("42949")) {
                      {}
                    } else {
                      stryCov_9fa48("42949");
                      bulk.push(stryMutAct_9fa48("42950") ? [] : (stryCov_9fa48("42950"), [stryMutAct_9fa48("42951") ? `` : (stryCov_9fa48("42951"), `cid:${topicData[index].cid}:uid:${p.uid}:pids:votes`), p.votes, p.pid]));
                    }
                  }
                }
              }
            }
          });
          await db.sortedSetAddBulk(bulk);
        }
      }, stryMutAct_9fa48("42952") ? {} : (stryCov_9fa48("42952"), {
        progress: progress
      }));
    }
  }
});