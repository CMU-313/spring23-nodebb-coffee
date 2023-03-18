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
const db = require('../../database');
const batch = require('../../batch');
const topics = require('../../topics');
module.exports = stryMutAct_9fa48("43655") ? {} : (stryCov_9fa48("43655"), {
  name: stryMutAct_9fa48("43656") ? "" : (stryCov_9fa48("43656"), 'Create category tags sorted sets'),
  timestamp: Date.UTC(2020, 10, 23),
  method: async function () {
    if (stryMutAct_9fa48("43657")) {
      {}
    } else {
      stryCov_9fa48("43657");
      const {
        progress
      } = this;
      async function getTopicsTags(tids) {
        if (stryMutAct_9fa48("43658")) {
          {}
        } else {
          stryCov_9fa48("43658");
          return await db.getSetsMembers(tids.map(stryMutAct_9fa48("43659") ? () => undefined : (stryCov_9fa48("43659"), tid => stryMutAct_9fa48("43660") ? `` : (stryCov_9fa48("43660"), `topic:${tid}:tags`))));
        }
      }
      await batch.processSortedSet(stryMutAct_9fa48("43661") ? "" : (stryCov_9fa48("43661"), 'topics:tid'), async tids => {
        if (stryMutAct_9fa48("43662")) {
          {}
        } else {
          stryCov_9fa48("43662");
          const [topicData, tags] = await Promise.all(stryMutAct_9fa48("43663") ? [] : (stryCov_9fa48("43663"), [topics.getTopicsFields(tids, stryMutAct_9fa48("43664") ? [] : (stryCov_9fa48("43664"), [stryMutAct_9fa48("43665") ? "" : (stryCov_9fa48("43665"), 'tid'), stryMutAct_9fa48("43666") ? "" : (stryCov_9fa48("43666"), 'cid'), stryMutAct_9fa48("43667") ? "" : (stryCov_9fa48("43667"), 'timestamp')])), getTopicsTags(tids)]));
          const topicsWithTags = stryMutAct_9fa48("43668") ? topicData.map((t, i) => {
            t.tags = tags[i];
            return t;
          }) : (stryCov_9fa48("43668"), topicData.map((t, i) => {
            if (stryMutAct_9fa48("43669")) {
              {}
            } else {
              stryCov_9fa48("43669");
              t.tags = tags[i];
              return t;
            }
          }).filter(stryMutAct_9fa48("43670") ? () => undefined : (stryCov_9fa48("43670"), t => stryMutAct_9fa48("43673") ? t || t.tags.length : stryMutAct_9fa48("43672") ? false : stryMutAct_9fa48("43671") ? true : (stryCov_9fa48("43671", "43672", "43673"), t && t.tags.length))));
          await async.eachSeries(topicsWithTags, async topicObj => {
            if (stryMutAct_9fa48("43674")) {
              {}
            } else {
              stryCov_9fa48("43674");
              const {
                cid,
                tags
              } = topicObj;
              await db.sortedSetsAdd(tags.map(stryMutAct_9fa48("43675") ? () => undefined : (stryCov_9fa48("43675"), tag => stryMutAct_9fa48("43676") ? `` : (stryCov_9fa48("43676"), `cid:${cid}:tag:${tag}:topics`))), topicObj.timestamp, topicObj.tid);
              const counts = await db.sortedSetsCard(tags.map(stryMutAct_9fa48("43677") ? () => undefined : (stryCov_9fa48("43677"), tag => stryMutAct_9fa48("43678") ? `` : (stryCov_9fa48("43678"), `cid:${cid}:tag:${tag}:topics`))));
              await db.sortedSetAdd(stryMutAct_9fa48("43679") ? `` : (stryCov_9fa48("43679"), `cid:${cid}:tags`), counts, tags);
            }
          });
          progress.incr(tids.length);
        }
      }, stryMutAct_9fa48("43680") ? {} : (stryCov_9fa48("43680"), {
        batch: 500,
        progress: progress
      }));
    }
  }
});