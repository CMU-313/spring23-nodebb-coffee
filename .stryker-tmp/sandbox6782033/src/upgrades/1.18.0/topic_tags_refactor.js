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
module.exports = stryMutAct_9fa48("43832") ? {} : (stryCov_9fa48("43832"), {
  name: stryMutAct_9fa48("43833") ? "" : (stryCov_9fa48("43833"), 'Store tags in topic hash'),
  timestamp: Date.UTC(2021, 8, 9),
  method: async function () {
    if (stryMutAct_9fa48("43834")) {
      {}
    } else {
      stryCov_9fa48("43834");
      const {
        progress
      } = this;
      async function getTopicsTags(tids) {
        if (stryMutAct_9fa48("43835")) {
          {}
        } else {
          stryCov_9fa48("43835");
          return await db.getSetsMembers(tids.map(stryMutAct_9fa48("43836") ? () => undefined : (stryCov_9fa48("43836"), tid => stryMutAct_9fa48("43837") ? `` : (stryCov_9fa48("43837"), `topic:${tid}:tags`))));
        }
      }
      await batch.processSortedSet(stryMutAct_9fa48("43838") ? "" : (stryCov_9fa48("43838"), 'topics:tid'), async tids => {
        if (stryMutAct_9fa48("43839")) {
          {}
        } else {
          stryCov_9fa48("43839");
          const tags = await getTopicsTags(tids);
          const topicsWithTags = stryMutAct_9fa48("43840") ? tids.map((tid, i) => {
            const topic = {
              tid: tid
            };
            topic.tags = tags[i];
            return topic;
          }) : (stryCov_9fa48("43840"), tids.map((tid, i) => {
            if (stryMutAct_9fa48("43841")) {
              {}
            } else {
              stryCov_9fa48("43841");
              const topic = stryMutAct_9fa48("43842") ? {} : (stryCov_9fa48("43842"), {
                tid: tid
              });
              topic.tags = tags[i];
              return topic;
            }
          }).filter(stryMutAct_9fa48("43843") ? () => undefined : (stryCov_9fa48("43843"), t => stryMutAct_9fa48("43846") ? t || t.tags.length : stryMutAct_9fa48("43845") ? false : stryMutAct_9fa48("43844") ? true : (stryCov_9fa48("43844", "43845", "43846"), t && t.tags.length))));
          await db.setObjectBulk(topicsWithTags.map(stryMutAct_9fa48("43847") ? () => undefined : (stryCov_9fa48("43847"), t => stryMutAct_9fa48("43848") ? [] : (stryCov_9fa48("43848"), [stryMutAct_9fa48("43849") ? `` : (stryCov_9fa48("43849"), `topic:${t.tid}`), stryMutAct_9fa48("43850") ? {} : (stryCov_9fa48("43850"), {
            tags: t.tags.join(stryMutAct_9fa48("43851") ? "" : (stryCov_9fa48("43851"), ','))
          })]))));
          await db.deleteAll(tids.map(stryMutAct_9fa48("43852") ? () => undefined : (stryCov_9fa48("43852"), tid => stryMutAct_9fa48("43853") ? `` : (stryCov_9fa48("43853"), `topic:${tid}:tags`))));
          progress.incr(tids.length);
        }
      }, stryMutAct_9fa48("43854") ? {} : (stryCov_9fa48("43854"), {
        batch: 500,
        progress: progress
      }));
    }
  }
});