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
const validator = require('validator');
const diff = require('diff');
const db = require('../database');
const meta = require('../meta');
const plugins = require('../plugins');
const translator = require('../translator');
const topics = require('../topics');
module.exports = function (Posts) {
  if (stryMutAct_9fa48("28874")) {
    {}
  } else {
    stryCov_9fa48("28874");
    const Diffs = {};
    Posts.diffs = Diffs;
    Diffs.exists = async function (pid) {
      if (stryMutAct_9fa48("28875")) {
        {}
      } else {
        stryCov_9fa48("28875");
        if (stryMutAct_9fa48("28878") ? meta.config.enablePostHistory === 1 : stryMutAct_9fa48("28877") ? false : stryMutAct_9fa48("28876") ? true : (stryCov_9fa48("28876", "28877", "28878"), meta.config.enablePostHistory !== 1)) {
          if (stryMutAct_9fa48("28879")) {
            {}
          } else {
            stryCov_9fa48("28879");
            return stryMutAct_9fa48("28880") ? true : (stryCov_9fa48("28880"), false);
          }
        }
        const numDiffs = await db.listLength(stryMutAct_9fa48("28881") ? `` : (stryCov_9fa48("28881"), `post:${pid}:diffs`));
        return stryMutAct_9fa48("28882") ? !numDiffs : (stryCov_9fa48("28882"), !(stryMutAct_9fa48("28883") ? numDiffs : (stryCov_9fa48("28883"), !numDiffs)));
      }
    };
    Diffs.get = async function (pid, since) {
      if (stryMutAct_9fa48("28884")) {
        {}
      } else {
        stryCov_9fa48("28884");
        const timestamps = await Diffs.list(pid);
        if (stryMutAct_9fa48("28887") ? false : stryMutAct_9fa48("28886") ? true : stryMutAct_9fa48("28885") ? since : (stryCov_9fa48("28885", "28886", "28887"), !since)) {
          if (stryMutAct_9fa48("28888")) {
            {}
          } else {
            stryCov_9fa48("28888");
            since = 0;
          }
        }

        // Pass those made after `since`, and create keys
        const keys = stryMutAct_9fa48("28889") ? timestamps.map(t => `diff:${pid}.${t}`) : (stryCov_9fa48("28889"), timestamps.filter(stryMutAct_9fa48("28890") ? () => undefined : (stryCov_9fa48("28890"), t => stryMutAct_9fa48("28894") ? (parseInt(t, 10) || 0) <= since : stryMutAct_9fa48("28893") ? (parseInt(t, 10) || 0) >= since : stryMutAct_9fa48("28892") ? false : stryMutAct_9fa48("28891") ? true : (stryCov_9fa48("28891", "28892", "28893", "28894"), (stryMutAct_9fa48("28897") ? parseInt(t, 10) && 0 : stryMutAct_9fa48("28896") ? false : stryMutAct_9fa48("28895") ? true : (stryCov_9fa48("28895", "28896", "28897"), parseInt(t, 10) || 0)) > since))).map(stryMutAct_9fa48("28898") ? () => undefined : (stryCov_9fa48("28898"), t => stryMutAct_9fa48("28899") ? `` : (stryCov_9fa48("28899"), `diff:${pid}.${t}`))));
        return await db.getObjects(keys);
      }
    };
    Diffs.list = async function (pid) {
      if (stryMutAct_9fa48("28900")) {
        {}
      } else {
        stryCov_9fa48("28900");
        return await db.getListRange(stryMutAct_9fa48("28901") ? `` : (stryCov_9fa48("28901"), `post:${pid}:diffs`), 0, stryMutAct_9fa48("28902") ? +1 : (stryCov_9fa48("28902"), -1));
      }
    };
    Diffs.save = async function (data) {
      if (stryMutAct_9fa48("28903")) {
        {}
      } else {
        stryCov_9fa48("28903");
        const {
          pid,
          uid,
          oldContent,
          newContent,
          edited,
          topic
        } = data;
        const editTimestamp = stryMutAct_9fa48("28906") ? edited && Date.now() : stryMutAct_9fa48("28905") ? false : stryMutAct_9fa48("28904") ? true : (stryCov_9fa48("28904", "28905", "28906"), edited || Date.now());
        const diffData = stryMutAct_9fa48("28907") ? {} : (stryCov_9fa48("28907"), {
          uid: uid,
          pid: pid
        });
        if (stryMutAct_9fa48("28910") ? oldContent === newContent : stryMutAct_9fa48("28909") ? false : stryMutAct_9fa48("28908") ? true : (stryCov_9fa48("28908", "28909", "28910"), oldContent !== newContent)) {
          if (stryMutAct_9fa48("28911")) {
            {}
          } else {
            stryCov_9fa48("28911");
            diffData.patch = diff.createPatch(stryMutAct_9fa48("28912") ? "Stryker was here!" : (stryCov_9fa48("28912"), ''), newContent, oldContent);
          }
        }
        if (stryMutAct_9fa48("28914") ? false : stryMutAct_9fa48("28913") ? true : (stryCov_9fa48("28913", "28914"), topic.renamed)) {
          if (stryMutAct_9fa48("28915")) {
            {}
          } else {
            stryCov_9fa48("28915");
            diffData.title = topic.oldTitle;
          }
        }
        if (stryMutAct_9fa48("28918") ? topic.tagsupdated || Array.isArray(topic.oldTags) : stryMutAct_9fa48("28917") ? false : stryMutAct_9fa48("28916") ? true : (stryCov_9fa48("28916", "28917", "28918"), topic.tagsupdated && Array.isArray(topic.oldTags))) {
          if (stryMutAct_9fa48("28919")) {
            {}
          } else {
            stryCov_9fa48("28919");
            diffData.tags = stryMutAct_9fa48("28920") ? topic.oldTags.map(tag => tag && tag.value).join(',') : (stryCov_9fa48("28920"), topic.oldTags.map(stryMutAct_9fa48("28921") ? () => undefined : (stryCov_9fa48("28921"), tag => stryMutAct_9fa48("28924") ? tag || tag.value : stryMutAct_9fa48("28923") ? false : stryMutAct_9fa48("28922") ? true : (stryCov_9fa48("28922", "28923", "28924"), tag && tag.value))).filter(Boolean).join(stryMutAct_9fa48("28925") ? "" : (stryCov_9fa48("28925"), ',')));
          }
        }
        await Promise.all(stryMutAct_9fa48("28926") ? [] : (stryCov_9fa48("28926"), [db.listPrepend(stryMutAct_9fa48("28927") ? `` : (stryCov_9fa48("28927"), `post:${pid}:diffs`), editTimestamp), db.setObject(stryMutAct_9fa48("28928") ? `` : (stryCov_9fa48("28928"), `diff:${pid}.${editTimestamp}`), diffData)]));
      }
    };
    Diffs.load = async function (pid, since, uid) {
      if (stryMutAct_9fa48("28929")) {
        {}
      } else {
        stryCov_9fa48("28929");
        since = getValidatedTimestamp(since);
        const post = await postDiffLoad(pid, since, uid);
        post.content = String(stryMutAct_9fa48("28932") ? post.content && '' : stryMutAct_9fa48("28931") ? false : stryMutAct_9fa48("28930") ? true : (stryCov_9fa48("28930", "28931", "28932"), post.content || (stryMutAct_9fa48("28933") ? "Stryker was here!" : (stryCov_9fa48("28933"), ''))));
        const result = await plugins.hooks.fire(stryMutAct_9fa48("28934") ? "" : (stryCov_9fa48("28934"), 'filter:parse.post'), stryMutAct_9fa48("28935") ? {} : (stryCov_9fa48("28935"), {
          postData: post
        }));
        result.postData.content = translator.escape(result.postData.content);
        return result.postData;
      }
    };
    Diffs.restore = async function (pid, since, uid, req) {
      if (stryMutAct_9fa48("28936")) {
        {}
      } else {
        stryCov_9fa48("28936");
        since = getValidatedTimestamp(since);
        const post = await postDiffLoad(pid, since, uid);
        return await Posts.edit(stryMutAct_9fa48("28937") ? {} : (stryCov_9fa48("28937"), {
          uid: uid,
          pid: pid,
          content: post.content,
          req: req,
          timestamp: since,
          title: post.topic.title,
          tags: post.topic.tags.map(stryMutAct_9fa48("28938") ? () => undefined : (stryCov_9fa48("28938"), tag => tag.value))
        }));
      }
    };
    Diffs.delete = async function (pid, timestamp, uid) {
      if (stryMutAct_9fa48("28939")) {
        {}
      } else {
        stryCov_9fa48("28939");
        getValidatedTimestamp(timestamp);
        const [post, diffs, timestamps] = await Promise.all(stryMutAct_9fa48("28940") ? [] : (stryCov_9fa48("28940"), [Posts.getPostSummaryByPids(stryMutAct_9fa48("28941") ? [] : (stryCov_9fa48("28941"), [pid]), uid, stryMutAct_9fa48("28942") ? {} : (stryCov_9fa48("28942"), {
          parse: stryMutAct_9fa48("28943") ? true : (stryCov_9fa48("28943"), false)
        })), Diffs.get(pid), Diffs.list(pid)]));
        const timestampIndex = timestamps.indexOf(timestamp);
        const lastTimestampIndex = stryMutAct_9fa48("28944") ? timestamps.length + 1 : (stryCov_9fa48("28944"), timestamps.length - 1);
        if (stryMutAct_9fa48("28947") ? timestamp !== String(post[0].timestamp) : stryMutAct_9fa48("28946") ? false : stryMutAct_9fa48("28945") ? true : (stryCov_9fa48("28945", "28946", "28947"), timestamp === String(post[0].timestamp))) {
          if (stryMutAct_9fa48("28948")) {
            {}
          } else {
            stryCov_9fa48("28948");
            // Deleting oldest diff, so history rewrite is not needed
            return Promise.all(stryMutAct_9fa48("28949") ? [] : (stryCov_9fa48("28949"), [db.delete(stryMutAct_9fa48("28950") ? `` : (stryCov_9fa48("28950"), `diff:${pid}.${timestamps[lastTimestampIndex]}`)), db.listRemoveAll(stryMutAct_9fa48("28951") ? `` : (stryCov_9fa48("28951"), `post:${pid}:diffs`), timestamps[lastTimestampIndex])]));
          }
        }
        if (stryMutAct_9fa48("28954") ? timestampIndex === 0 && timestampIndex === -1 : stryMutAct_9fa48("28953") ? false : stryMutAct_9fa48("28952") ? true : (stryCov_9fa48("28952", "28953", "28954"), (stryMutAct_9fa48("28956") ? timestampIndex !== 0 : stryMutAct_9fa48("28955") ? false : (stryCov_9fa48("28955", "28956"), timestampIndex === 0)) || (stryMutAct_9fa48("28958") ? timestampIndex !== -1 : stryMutAct_9fa48("28957") ? false : (stryCov_9fa48("28957", "28958"), timestampIndex === (stryMutAct_9fa48("28959") ? +1 : (stryCov_9fa48("28959"), -1)))))) {
          if (stryMutAct_9fa48("28960")) {
            {}
          } else {
            stryCov_9fa48("28960");
            throw new Error(stryMutAct_9fa48("28961") ? "" : (stryCov_9fa48("28961"), '[[error:invalid-data]]'));
          }
        }
        const postContent = validator.unescape(post[0].content);
        const versionContents = {};
        for (let i = 0, content = postContent; stryMutAct_9fa48("28964") ? i >= timestamps.length : stryMutAct_9fa48("28963") ? i <= timestamps.length : stryMutAct_9fa48("28962") ? false : (stryCov_9fa48("28962", "28963", "28964"), i < timestamps.length); stryMutAct_9fa48("28965") ? --i : (stryCov_9fa48("28965"), ++i)) {
          if (stryMutAct_9fa48("28966")) {
            {}
          } else {
            stryCov_9fa48("28966");
            versionContents[timestamps[i]] = applyPatch(content, diffs[i]);
            content = versionContents[timestamps[i]];
          }
        }

        /* eslint-disable no-await-in-loop */
        for (let i = lastTimestampIndex; stryMutAct_9fa48("28969") ? i < timestampIndex : stryMutAct_9fa48("28968") ? i > timestampIndex : stryMutAct_9fa48("28967") ? false : (stryCov_9fa48("28967", "28968", "28969"), i >= timestampIndex); stryMutAct_9fa48("28970") ? ++i : (stryCov_9fa48("28970"), --i)) {
          if (stryMutAct_9fa48("28971")) {
            {}
          } else {
            stryCov_9fa48("28971");
            // Recreate older diffs with skipping the deleted diff
            const newContentIndex = (stryMutAct_9fa48("28974") ? i !== timestampIndex : stryMutAct_9fa48("28973") ? false : stryMutAct_9fa48("28972") ? true : (stryCov_9fa48("28972", "28973", "28974"), i === timestampIndex)) ? stryMutAct_9fa48("28975") ? i + 2 : (stryCov_9fa48("28975"), i - 2) : stryMutAct_9fa48("28976") ? i + 1 : (stryCov_9fa48("28976"), i - 1);
            const timestampToUpdate = stryMutAct_9fa48("28977") ? newContentIndex - 1 : (stryCov_9fa48("28977"), newContentIndex + 1);
            const newContent = (stryMutAct_9fa48("28981") ? newContentIndex >= 0 : stryMutAct_9fa48("28980") ? newContentIndex <= 0 : stryMutAct_9fa48("28979") ? false : stryMutAct_9fa48("28978") ? true : (stryCov_9fa48("28978", "28979", "28980", "28981"), newContentIndex < 0)) ? postContent : versionContents[timestamps[newContentIndex]];
            const patch = diff.createPatch(stryMutAct_9fa48("28982") ? "Stryker was here!" : (stryCov_9fa48("28982"), ''), newContent, versionContents[timestamps[i]]);
            await db.setObject(stryMutAct_9fa48("28983") ? `` : (stryCov_9fa48("28983"), `diff:${pid}.${timestamps[timestampToUpdate]}`), stryMutAct_9fa48("28984") ? {} : (stryCov_9fa48("28984"), {
              patch
            }));
          }
        }
        return Promise.all(stryMutAct_9fa48("28985") ? [] : (stryCov_9fa48("28985"), [db.delete(stryMutAct_9fa48("28986") ? `` : (stryCov_9fa48("28986"), `diff:${pid}.${timestamp}`)), db.listRemoveAll(stryMutAct_9fa48("28987") ? `` : (stryCov_9fa48("28987"), `post:${pid}:diffs`), timestamp)]));
      }
    };
    async function postDiffLoad(pid, since, uid) {
      if (stryMutAct_9fa48("28988")) {
        {}
      } else {
        stryCov_9fa48("28988");
        // Retrieves all diffs made since `since` and replays them to reconstruct what the post looked like at `since`
        const [post, diffs] = await Promise.all(stryMutAct_9fa48("28989") ? [] : (stryCov_9fa48("28989"), [Posts.getPostSummaryByPids(stryMutAct_9fa48("28990") ? [] : (stryCov_9fa48("28990"), [pid]), uid, stryMutAct_9fa48("28991") ? {} : (stryCov_9fa48("28991"), {
          parse: stryMutAct_9fa48("28992") ? true : (stryCov_9fa48("28992"), false)
        })), Posts.diffs.get(pid, since)]));

        // Replace content with re-constructed content from that point in time
        post[0].content = diffs.reduce(applyPatch, validator.unescape(post[0].content));
        const titleDiffs = stryMutAct_9fa48("28993") ? diffs : (stryCov_9fa48("28993"), diffs.filter(stryMutAct_9fa48("28994") ? () => undefined : (stryCov_9fa48("28994"), d => stryMutAct_9fa48("28997") ? d.hasOwnProperty('title') || d.title : stryMutAct_9fa48("28996") ? false : stryMutAct_9fa48("28995") ? true : (stryCov_9fa48("28995", "28996", "28997"), d.hasOwnProperty(stryMutAct_9fa48("28998") ? "" : (stryCov_9fa48("28998"), 'title')) && d.title))));
        if (stryMutAct_9fa48("29001") ? titleDiffs.length || post[0].topic : stryMutAct_9fa48("29000") ? false : stryMutAct_9fa48("28999") ? true : (stryCov_9fa48("28999", "29000", "29001"), titleDiffs.length && post[0].topic)) {
          if (stryMutAct_9fa48("29002")) {
            {}
          } else {
            stryCov_9fa48("29002");
            post[0].topic.title = validator.unescape(String(titleDiffs[stryMutAct_9fa48("29003") ? titleDiffs.length + 1 : (stryCov_9fa48("29003"), titleDiffs.length - 1)].title));
          }
        }
        const tagDiffs = stryMutAct_9fa48("29004") ? diffs : (stryCov_9fa48("29004"), diffs.filter(stryMutAct_9fa48("29005") ? () => undefined : (stryCov_9fa48("29005"), d => stryMutAct_9fa48("29008") ? d.hasOwnProperty('tags') || d.tags : stryMutAct_9fa48("29007") ? false : stryMutAct_9fa48("29006") ? true : (stryCov_9fa48("29006", "29007", "29008"), d.hasOwnProperty(stryMutAct_9fa48("29009") ? "" : (stryCov_9fa48("29009"), 'tags')) && d.tags))));
        if (stryMutAct_9fa48("29012") ? tagDiffs.length || post[0].topic : stryMutAct_9fa48("29011") ? false : stryMutAct_9fa48("29010") ? true : (stryCov_9fa48("29010", "29011", "29012"), tagDiffs.length && post[0].topic)) {
          if (stryMutAct_9fa48("29013")) {
            {}
          } else {
            stryCov_9fa48("29013");
            const tags = tagDiffs[stryMutAct_9fa48("29014") ? tagDiffs.length + 1 : (stryCov_9fa48("29014"), tagDiffs.length - 1)].tags.split(stryMutAct_9fa48("29015") ? "" : (stryCov_9fa48("29015"), ',')).map(stryMutAct_9fa48("29016") ? () => undefined : (stryCov_9fa48("29016"), tag => stryMutAct_9fa48("29017") ? {} : (stryCov_9fa48("29017"), {
              value: tag
            })));
            post[0].topic.tags = await topics.getTagData(tags);
          }
        }
        return post[0];
      }
    }
    function getValidatedTimestamp(timestamp) {
      if (stryMutAct_9fa48("29018")) {
        {}
      } else {
        stryCov_9fa48("29018");
        timestamp = parseInt(timestamp, 10);
        if (stryMutAct_9fa48("29020") ? false : stryMutAct_9fa48("29019") ? true : (stryCov_9fa48("29019", "29020"), isNaN(timestamp))) {
          if (stryMutAct_9fa48("29021")) {
            {}
          } else {
            stryCov_9fa48("29021");
            throw new Error(stryMutAct_9fa48("29022") ? "" : (stryCov_9fa48("29022"), '[[error:invalid-data]]'));
          }
        }
        return timestamp;
      }
    }
    function applyPatch(content, aDiff) {
      if (stryMutAct_9fa48("29023")) {
        {}
      } else {
        stryCov_9fa48("29023");
        if (stryMutAct_9fa48("29026") ? aDiff || aDiff.patch : stryMutAct_9fa48("29025") ? false : stryMutAct_9fa48("29024") ? true : (stryCov_9fa48("29024", "29025", "29026"), aDiff && aDiff.patch)) {
          if (stryMutAct_9fa48("29027")) {
            {}
          } else {
            stryCov_9fa48("29027");
            const result = diff.applyPatch(content, aDiff.patch, stryMutAct_9fa48("29028") ? {} : (stryCov_9fa48("29028"), {
              fuzzFactor: 1
            }));
            return (stryMutAct_9fa48("29031") ? typeof result !== 'string' : stryMutAct_9fa48("29030") ? false : stryMutAct_9fa48("29029") ? true : (stryCov_9fa48("29029", "29030", "29031"), typeof result === (stryMutAct_9fa48("29032") ? "" : (stryCov_9fa48("29032"), 'string')))) ? result : content;
          }
        }
        return content;
      }
    }
  }
};