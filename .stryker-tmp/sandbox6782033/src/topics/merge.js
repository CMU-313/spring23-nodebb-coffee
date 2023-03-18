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
const plugins = require('../plugins');
const posts = require('../posts');
module.exports = function (Topics) {
  if (stryMutAct_9fa48("39105")) {
    {}
  } else {
    stryCov_9fa48("39105");
    Topics.merge = async function (tids, uid, options) {
      if (stryMutAct_9fa48("39106")) {
        {}
      } else {
        stryCov_9fa48("39106");
        options = stryMutAct_9fa48("39109") ? options && {} : stryMutAct_9fa48("39108") ? false : stryMutAct_9fa48("39107") ? true : (stryCov_9fa48("39107", "39108", "39109"), options || {});
        const topicsData = await Topics.getTopicsFields(tids, stryMutAct_9fa48("39110") ? [] : (stryCov_9fa48("39110"), [stryMutAct_9fa48("39111") ? "" : (stryCov_9fa48("39111"), 'scheduled')]));
        if (stryMutAct_9fa48("39114") ? topicsData.every(t => t.scheduled) : stryMutAct_9fa48("39113") ? false : stryMutAct_9fa48("39112") ? true : (stryCov_9fa48("39112", "39113", "39114"), topicsData.some(stryMutAct_9fa48("39115") ? () => undefined : (stryCov_9fa48("39115"), t => t.scheduled)))) {
          if (stryMutAct_9fa48("39116")) {
            {}
          } else {
            stryCov_9fa48("39116");
            throw new Error(stryMutAct_9fa48("39117") ? "" : (stryCov_9fa48("39117"), '[[error:cant-merge-scheduled]]'));
          }
        }
        const oldestTid = findOldestTopic(tids);
        let mergeIntoTid = oldestTid;
        if (stryMutAct_9fa48("39119") ? false : stryMutAct_9fa48("39118") ? true : (stryCov_9fa48("39118", "39119"), options.mainTid)) {
          if (stryMutAct_9fa48("39120")) {
            {}
          } else {
            stryCov_9fa48("39120");
            mergeIntoTid = options.mainTid;
          }
        } else if (stryMutAct_9fa48("39122") ? false : stryMutAct_9fa48("39121") ? true : (stryCov_9fa48("39121", "39122"), options.newTopicTitle)) {
          if (stryMutAct_9fa48("39123")) {
            {}
          } else {
            stryCov_9fa48("39123");
            mergeIntoTid = await createNewTopic(options.newTopicTitle, oldestTid);
          }
        }
        const otherTids = stryMutAct_9fa48("39125") ? tids.filter(tid => tid && parseInt(tid, 10) !== parseInt(mergeIntoTid, 10)) : stryMutAct_9fa48("39124") ? tids.sort((a, b) => a - b) : (stryCov_9fa48("39124", "39125"), tids.sort(stryMutAct_9fa48("39126") ? () => undefined : (stryCov_9fa48("39126"), (a, b) => stryMutAct_9fa48("39127") ? a + b : (stryCov_9fa48("39127"), a - b))).filter(stryMutAct_9fa48("39128") ? () => undefined : (stryCov_9fa48("39128"), tid => stryMutAct_9fa48("39131") ? tid || parseInt(tid, 10) !== parseInt(mergeIntoTid, 10) : stryMutAct_9fa48("39130") ? false : stryMutAct_9fa48("39129") ? true : (stryCov_9fa48("39129", "39130", "39131"), tid && (stryMutAct_9fa48("39133") ? parseInt(tid, 10) === parseInt(mergeIntoTid, 10) : stryMutAct_9fa48("39132") ? true : (stryCov_9fa48("39132", "39133"), parseInt(tid, 10) !== parseInt(mergeIntoTid, 10)))))));
        for (const tid of otherTids) {
          if (stryMutAct_9fa48("39134")) {
            {}
          } else {
            stryCov_9fa48("39134");
            /* eslint-disable no-await-in-loop */
            const pids = await Topics.getPids(tid);
            for (const pid of pids) {
              if (stryMutAct_9fa48("39135")) {
                {}
              } else {
                stryCov_9fa48("39135");
                await Topics.movePostToTopic(uid, pid, mergeIntoTid);
              }
            }
            await Topics.setTopicField(tid, stryMutAct_9fa48("39136") ? "" : (stryCov_9fa48("39136"), 'mainPid'), 0);
            await Topics.delete(tid, uid);
            await Topics.setTopicFields(tid, stryMutAct_9fa48("39137") ? {} : (stryCov_9fa48("39137"), {
              mergeIntoTid: mergeIntoTid,
              mergerUid: uid,
              mergedTimestamp: Date.now()
            }));
          }
        }
        await Promise.all(stryMutAct_9fa48("39138") ? [] : (stryCov_9fa48("39138"), [posts.updateQueuedPostsTopic(mergeIntoTid, otherTids), updateViewCount(mergeIntoTid, tids)]));
        plugins.hooks.fire(stryMutAct_9fa48("39139") ? "" : (stryCov_9fa48("39139"), 'action:topic.merge'), stryMutAct_9fa48("39140") ? {} : (stryCov_9fa48("39140"), {
          uid: uid,
          tids: tids,
          mergeIntoTid: mergeIntoTid,
          otherTids: otherTids
        }));
        return mergeIntoTid;
      }
    };
    async function createNewTopic(title, oldestTid) {
      if (stryMutAct_9fa48("39141")) {
        {}
      } else {
        stryCov_9fa48("39141");
        const topicData = await Topics.getTopicFields(oldestTid, stryMutAct_9fa48("39142") ? [] : (stryCov_9fa48("39142"), [stryMutAct_9fa48("39143") ? "" : (stryCov_9fa48("39143"), 'uid'), stryMutAct_9fa48("39144") ? "" : (stryCov_9fa48("39144"), 'cid')]));
        const params = stryMutAct_9fa48("39145") ? {} : (stryCov_9fa48("39145"), {
          uid: topicData.uid,
          cid: topicData.cid,
          title: title
        });
        const result = await plugins.hooks.fire(stryMutAct_9fa48("39146") ? "" : (stryCov_9fa48("39146"), 'filter:topic.mergeCreateNewTopic'), stryMutAct_9fa48("39147") ? {} : (stryCov_9fa48("39147"), {
          oldestTid: oldestTid,
          params: params
        }));
        const tid = await Topics.create(result.params);
        return tid;
      }
    }
    async function updateViewCount(mergeIntoTid, tids) {
      if (stryMutAct_9fa48("39148")) {
        {}
      } else {
        stryCov_9fa48("39148");
        const topicData = await Topics.getTopicsFields(tids, stryMutAct_9fa48("39149") ? [] : (stryCov_9fa48("39149"), [stryMutAct_9fa48("39150") ? "" : (stryCov_9fa48("39150"), 'viewcount')]));
        const totalViewCount = topicData.reduce(stryMutAct_9fa48("39151") ? () => undefined : (stryCov_9fa48("39151"), (count, topic) => stryMutAct_9fa48("39152") ? count - parseInt(topic.viewcount, 10) : (stryCov_9fa48("39152"), count + parseInt(topic.viewcount, 10))), 0);
        await Topics.setTopicField(mergeIntoTid, stryMutAct_9fa48("39153") ? "" : (stryCov_9fa48("39153"), 'viewcount'), totalViewCount);
      }
    }
    function findOldestTopic(tids) {
      if (stryMutAct_9fa48("39154")) {
        {}
      } else {
        stryCov_9fa48("39154");
        return Math.min.apply(null, tids);
      }
    }
  }
};