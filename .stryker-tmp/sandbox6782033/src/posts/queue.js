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
const validator = require('validator');
const nconf = require('nconf');
const db = require('../database');
const user = require('../user');
const meta = require('../meta');
const groups = require('../groups');
const topics = require('../topics');
const categories = require('../categories');
const notifications = require('../notifications');
const privileges = require('../privileges');
const plugins = require('../plugins');
const utils = require('../utils');
const cache = require('../cache');
const socketHelpers = require('../socket.io/helpers');
module.exports = function (Posts) {
  if (stryMutAct_9fa48("29476")) {
    {}
  } else {
    stryCov_9fa48("29476");
    Posts.getQueuedPosts = async (filter = {}, options = {}) => {
      if (stryMutAct_9fa48("29477")) {
        {}
      } else {
        stryCov_9fa48("29477");
        options = stryMutAct_9fa48("29478") ? {} : (stryCov_9fa48("29478"), {
          metadata: stryMutAct_9fa48("29479") ? false : (stryCov_9fa48("29479"), true),
          ...options
        }); // defaults
        let postData = _.cloneDeep(cache.get(stryMutAct_9fa48("29480") ? "" : (stryCov_9fa48("29480"), 'post-queue')));
        if (stryMutAct_9fa48("29483") ? false : stryMutAct_9fa48("29482") ? true : stryMutAct_9fa48("29481") ? postData : (stryCov_9fa48("29481", "29482", "29483"), !postData)) {
          if (stryMutAct_9fa48("29484")) {
            {}
          } else {
            stryCov_9fa48("29484");
            const ids = await db.getSortedSetRange(stryMutAct_9fa48("29485") ? "" : (stryCov_9fa48("29485"), 'post:queue'), 0, stryMutAct_9fa48("29486") ? +1 : (stryCov_9fa48("29486"), -1));
            const keys = ids.map(stryMutAct_9fa48("29487") ? () => undefined : (stryCov_9fa48("29487"), id => stryMutAct_9fa48("29488") ? `` : (stryCov_9fa48("29488"), `post:queue:${id}`)));
            postData = await db.getObjects(keys);
            postData.forEach(data => {
              if (stryMutAct_9fa48("29489")) {
                {}
              } else {
                stryCov_9fa48("29489");
                if (stryMutAct_9fa48("29491") ? false : stryMutAct_9fa48("29490") ? true : (stryCov_9fa48("29490", "29491"), data)) {
                  if (stryMutAct_9fa48("29492")) {
                    {}
                  } else {
                    stryCov_9fa48("29492");
                    data.data = JSON.parse(data.data);
                    data.data.timestampISO = utils.toISOString(data.data.timestamp);
                  }
                }
              }
            });
            const uids = postData.map(stryMutAct_9fa48("29493") ? () => undefined : (stryCov_9fa48("29493"), data => stryMutAct_9fa48("29496") ? data || data.uid : stryMutAct_9fa48("29495") ? false : stryMutAct_9fa48("29494") ? true : (stryCov_9fa48("29494", "29495", "29496"), data && data.uid)));
            const userData = await user.getUsersFields(uids, stryMutAct_9fa48("29497") ? [] : (stryCov_9fa48("29497"), [stryMutAct_9fa48("29498") ? "" : (stryCov_9fa48("29498"), 'username'), stryMutAct_9fa48("29499") ? "" : (stryCov_9fa48("29499"), 'userslug'), stryMutAct_9fa48("29500") ? "" : (stryCov_9fa48("29500"), 'picture')]));
            postData.forEach((postData, index) => {
              if (stryMutAct_9fa48("29501")) {
                {}
              } else {
                stryCov_9fa48("29501");
                if (stryMutAct_9fa48("29503") ? false : stryMutAct_9fa48("29502") ? true : (stryCov_9fa48("29502", "29503"), postData)) {
                  if (stryMutAct_9fa48("29504")) {
                    {}
                  } else {
                    stryCov_9fa48("29504");
                    postData.user = userData[index];
                    postData.data.rawContent = validator.escape(String(postData.data.content));
                    postData.data.title = validator.escape(String(stryMutAct_9fa48("29507") ? postData.data.title && '' : stryMutAct_9fa48("29506") ? false : stryMutAct_9fa48("29505") ? true : (stryCov_9fa48("29505", "29506", "29507"), postData.data.title || (stryMutAct_9fa48("29508") ? "Stryker was here!" : (stryCov_9fa48("29508"), '')))));
                  }
                }
              }
            });
            cache.set(stryMutAct_9fa48("29509") ? "" : (stryCov_9fa48("29509"), 'post-queue'), _.cloneDeep(postData));
          }
        }
        if (stryMutAct_9fa48("29511") ? false : stryMutAct_9fa48("29510") ? true : (stryCov_9fa48("29510", "29511"), filter.id)) {
          if (stryMutAct_9fa48("29512")) {
            {}
          } else {
            stryCov_9fa48("29512");
            postData = stryMutAct_9fa48("29513") ? postData : (stryCov_9fa48("29513"), postData.filter(stryMutAct_9fa48("29514") ? () => undefined : (stryCov_9fa48("29514"), p => stryMutAct_9fa48("29517") ? p.id !== filter.id : stryMutAct_9fa48("29516") ? false : stryMutAct_9fa48("29515") ? true : (stryCov_9fa48("29515", "29516", "29517"), p.id === filter.id))));
          }
        }
        if (stryMutAct_9fa48("29519") ? false : stryMutAct_9fa48("29518") ? true : (stryCov_9fa48("29518", "29519"), options.metadata)) {
          if (stryMutAct_9fa48("29520")) {
            {}
          } else {
            stryCov_9fa48("29520");
            await Promise.all(postData.map(stryMutAct_9fa48("29521") ? () => undefined : (stryCov_9fa48("29521"), p => addMetaData(p))));
          }
        }

        // Filter by tid if present
        if (stryMutAct_9fa48("29523") ? false : stryMutAct_9fa48("29522") ? true : (stryCov_9fa48("29522", "29523"), utils.isNumber(filter.tid))) {
          if (stryMutAct_9fa48("29524")) {
            {}
          } else {
            stryCov_9fa48("29524");
            const tid = parseInt(filter.tid, 10);
            postData = stryMutAct_9fa48("29525") ? postData : (stryCov_9fa48("29525"), postData.filter(stryMutAct_9fa48("29526") ? () => undefined : (stryCov_9fa48("29526"), item => stryMutAct_9fa48("29529") ? item.data.tid || parseInt(item.data.tid, 10) === tid : stryMutAct_9fa48("29528") ? false : stryMutAct_9fa48("29527") ? true : (stryCov_9fa48("29527", "29528", "29529"), item.data.tid && (stryMutAct_9fa48("29531") ? parseInt(item.data.tid, 10) !== tid : stryMutAct_9fa48("29530") ? true : (stryCov_9fa48("29530", "29531"), parseInt(item.data.tid, 10) === tid))))));
          }
        } else if (stryMutAct_9fa48("29533") ? false : stryMutAct_9fa48("29532") ? true : (stryCov_9fa48("29532", "29533"), Array.isArray(filter.tid))) {
          if (stryMutAct_9fa48("29534")) {
            {}
          } else {
            stryCov_9fa48("29534");
            const tids = filter.tid.map(stryMutAct_9fa48("29535") ? () => undefined : (stryCov_9fa48("29535"), tid => parseInt(tid, 10)));
            postData = stryMutAct_9fa48("29536") ? postData : (stryCov_9fa48("29536"), postData.filter(stryMutAct_9fa48("29537") ? () => undefined : (stryCov_9fa48("29537"), item => stryMutAct_9fa48("29540") ? item.data.tid || tids.includes(parseInt(item.data.tid, 10)) : stryMutAct_9fa48("29539") ? false : stryMutAct_9fa48("29538") ? true : (stryCov_9fa48("29538", "29539", "29540"), item.data.tid && tids.includes(parseInt(item.data.tid, 10))))));
          }
        }
        return postData;
      }
    };
    async function addMetaData(postData) {
      if (stryMutAct_9fa48("29541")) {
        {}
      } else {
        stryCov_9fa48("29541");
        if (stryMutAct_9fa48("29544") ? false : stryMutAct_9fa48("29543") ? true : stryMutAct_9fa48("29542") ? postData : (stryCov_9fa48("29542", "29543", "29544"), !postData)) {
          if (stryMutAct_9fa48("29545")) {
            {}
          } else {
            stryCov_9fa48("29545");
            return;
          }
        }
        postData.topic = stryMutAct_9fa48("29546") ? {} : (stryCov_9fa48("29546"), {
          cid: 0
        });
        if (stryMutAct_9fa48("29548") ? false : stryMutAct_9fa48("29547") ? true : (stryCov_9fa48("29547", "29548"), postData.data.cid)) {
          if (stryMutAct_9fa48("29549")) {
            {}
          } else {
            stryCov_9fa48("29549");
            postData.topic = stryMutAct_9fa48("29550") ? {} : (stryCov_9fa48("29550"), {
              cid: parseInt(postData.data.cid, 10)
            });
          }
        } else if (stryMutAct_9fa48("29552") ? false : stryMutAct_9fa48("29551") ? true : (stryCov_9fa48("29551", "29552"), postData.data.tid)) {
          if (stryMutAct_9fa48("29553")) {
            {}
          } else {
            stryCov_9fa48("29553");
            postData.topic = await topics.getTopicFields(postData.data.tid, stryMutAct_9fa48("29554") ? [] : (stryCov_9fa48("29554"), [stryMutAct_9fa48("29555") ? "" : (stryCov_9fa48("29555"), 'title'), stryMutAct_9fa48("29556") ? "" : (stryCov_9fa48("29556"), 'cid')]));
          }
        }
        postData.category = await categories.getCategoryData(postData.topic.cid);
        const result = await plugins.hooks.fire(stryMutAct_9fa48("29557") ? "" : (stryCov_9fa48("29557"), 'filter:parse.post'), stryMutAct_9fa48("29558") ? {} : (stryCov_9fa48("29558"), {
          postData: postData.data
        }));
        postData.data.content = result.postData.content;
      }
    }
    Posts.shouldQueue = async function (uid, data) {
      if (stryMutAct_9fa48("29559")) {
        {}
      } else {
        stryCov_9fa48("29559");
        const [userData, isMemberOfExempt, categoryQueueEnabled] = await Promise.all(stryMutAct_9fa48("29560") ? [] : (stryCov_9fa48("29560"), [user.getUserFields(uid, stryMutAct_9fa48("29561") ? [] : (stryCov_9fa48("29561"), [stryMutAct_9fa48("29562") ? "" : (stryCov_9fa48("29562"), 'uid'), stryMutAct_9fa48("29563") ? "" : (stryCov_9fa48("29563"), 'reputation'), stryMutAct_9fa48("29564") ? "" : (stryCov_9fa48("29564"), 'postcount')])), groups.isMemberOfAny(uid, meta.config.groupsExemptFromPostQueue), isCategoryQueueEnabled(data)]));
        const shouldQueue = stryMutAct_9fa48("29567") ? meta.config.postQueue && categoryQueueEnabled && !isMemberOfExempt || !userData.uid || userData.reputation < meta.config.postQueueReputationThreshold || userData.postcount <= 0 : stryMutAct_9fa48("29566") ? false : stryMutAct_9fa48("29565") ? true : (stryCov_9fa48("29565", "29566", "29567"), (stryMutAct_9fa48("29569") ? meta.config.postQueue && categoryQueueEnabled || !isMemberOfExempt : stryMutAct_9fa48("29568") ? true : (stryCov_9fa48("29568", "29569"), (stryMutAct_9fa48("29571") ? meta.config.postQueue || categoryQueueEnabled : stryMutAct_9fa48("29570") ? true : (stryCov_9fa48("29570", "29571"), meta.config.postQueue && categoryQueueEnabled)) && (stryMutAct_9fa48("29572") ? isMemberOfExempt : (stryCov_9fa48("29572"), !isMemberOfExempt)))) && (stryMutAct_9fa48("29574") ? (!userData.uid || userData.reputation < meta.config.postQueueReputationThreshold) && userData.postcount <= 0 : stryMutAct_9fa48("29573") ? true : (stryCov_9fa48("29573", "29574"), (stryMutAct_9fa48("29576") ? !userData.uid && userData.reputation < meta.config.postQueueReputationThreshold : stryMutAct_9fa48("29575") ? false : (stryCov_9fa48("29575", "29576"), (stryMutAct_9fa48("29577") ? userData.uid : (stryCov_9fa48("29577"), !userData.uid)) || (stryMutAct_9fa48("29580") ? userData.reputation >= meta.config.postQueueReputationThreshold : stryMutAct_9fa48("29579") ? userData.reputation <= meta.config.postQueueReputationThreshold : stryMutAct_9fa48("29578") ? false : (stryCov_9fa48("29578", "29579", "29580"), userData.reputation < meta.config.postQueueReputationThreshold)))) || (stryMutAct_9fa48("29583") ? userData.postcount > 0 : stryMutAct_9fa48("29582") ? userData.postcount < 0 : stryMutAct_9fa48("29581") ? false : (stryCov_9fa48("29581", "29582", "29583"), userData.postcount <= 0)))));
        const result = await plugins.hooks.fire(stryMutAct_9fa48("29584") ? "" : (stryCov_9fa48("29584"), 'filter:post.shouldQueue'), stryMutAct_9fa48("29585") ? {} : (stryCov_9fa48("29585"), {
          shouldQueue: stryMutAct_9fa48("29586") ? !shouldQueue : (stryCov_9fa48("29586"), !(stryMutAct_9fa48("29587") ? shouldQueue : (stryCov_9fa48("29587"), !shouldQueue))),
          uid: uid,
          data: data
        }));
        return result.shouldQueue;
      }
    };
    async function isCategoryQueueEnabled(data) {
      if (stryMutAct_9fa48("29588")) {
        {}
      } else {
        stryCov_9fa48("29588");
        const type = getType(data);
        const cid = await getCid(type, data);
        if (stryMutAct_9fa48("29591") ? false : stryMutAct_9fa48("29590") ? true : stryMutAct_9fa48("29589") ? cid : (stryCov_9fa48("29589", "29590", "29591"), !cid)) {
          if (stryMutAct_9fa48("29592")) {
            {}
          } else {
            stryCov_9fa48("29592");
            throw new Error(stryMutAct_9fa48("29593") ? "" : (stryCov_9fa48("29593"), '[[error:invalid-cid]]'));
          }
        }
        return await categories.getCategoryField(cid, stryMutAct_9fa48("29594") ? "" : (stryCov_9fa48("29594"), 'postQueue'));
      }
    }
    function getType(data) {
      if (stryMutAct_9fa48("29595")) {
        {}
      } else {
        stryCov_9fa48("29595");
        if (stryMutAct_9fa48("29597") ? false : stryMutAct_9fa48("29596") ? true : (stryCov_9fa48("29596", "29597"), data.hasOwnProperty(stryMutAct_9fa48("29598") ? "" : (stryCov_9fa48("29598"), 'tid')))) {
          if (stryMutAct_9fa48("29599")) {
            {}
          } else {
            stryCov_9fa48("29599");
            return stryMutAct_9fa48("29600") ? "" : (stryCov_9fa48("29600"), 'reply');
          }
        } else if (stryMutAct_9fa48("29602") ? false : stryMutAct_9fa48("29601") ? true : (stryCov_9fa48("29601", "29602"), data.hasOwnProperty(stryMutAct_9fa48("29603") ? "" : (stryCov_9fa48("29603"), 'cid')))) {
          if (stryMutAct_9fa48("29604")) {
            {}
          } else {
            stryCov_9fa48("29604");
            return stryMutAct_9fa48("29605") ? "" : (stryCov_9fa48("29605"), 'topic');
          }
        }
        throw new Error(stryMutAct_9fa48("29606") ? "" : (stryCov_9fa48("29606"), '[[error:invalid-type]]'));
      }
    }
    async function removeQueueNotification(id) {
      if (stryMutAct_9fa48("29607")) {
        {}
      } else {
        stryCov_9fa48("29607");
        await notifications.rescind(stryMutAct_9fa48("29608") ? `` : (stryCov_9fa48("29608"), `post-queue-${id}`));
        const data = await getParsedObject(id);
        if (stryMutAct_9fa48("29611") ? false : stryMutAct_9fa48("29610") ? true : stryMutAct_9fa48("29609") ? data : (stryCov_9fa48("29609", "29610", "29611"), !data)) {
          if (stryMutAct_9fa48("29612")) {
            {}
          } else {
            stryCov_9fa48("29612");
            return;
          }
        }
        const cid = await getCid(data.type, data);
        const uids = await getNotificationUids(cid);
        uids.forEach(stryMutAct_9fa48("29613") ? () => undefined : (stryCov_9fa48("29613"), uid => user.notifications.pushCount(uid)));
      }
    }
    async function getNotificationUids(cid) {
      if (stryMutAct_9fa48("29614")) {
        {}
      } else {
        stryCov_9fa48("29614");
        const results = await Promise.all(stryMutAct_9fa48("29615") ? [] : (stryCov_9fa48("29615"), [groups.getMembersOfGroups(stryMutAct_9fa48("29616") ? [] : (stryCov_9fa48("29616"), [stryMutAct_9fa48("29617") ? "" : (stryCov_9fa48("29617"), 'administrators'), stryMutAct_9fa48("29618") ? "" : (stryCov_9fa48("29618"), 'Global Moderators')])), categories.getModeratorUids(stryMutAct_9fa48("29619") ? [] : (stryCov_9fa48("29619"), [cid]))]));
        return _.uniq(_.flattenDeep(results));
      }
    }
    Posts.addToQueue = async function (data) {
      if (stryMutAct_9fa48("29620")) {
        {}
      } else {
        stryCov_9fa48("29620");
        const type = getType(data);
        const now = Date.now();
        const id = stryMutAct_9fa48("29621") ? `` : (stryCov_9fa48("29621"), `${type}-${now}`);
        await canPost(type, data);
        let payload = stryMutAct_9fa48("29622") ? {} : (stryCov_9fa48("29622"), {
          id: id,
          uid: data.uid,
          type: type,
          data: data
        });
        payload = await plugins.hooks.fire(stryMutAct_9fa48("29623") ? "" : (stryCov_9fa48("29623"), 'filter:post-queue.save'), payload);
        payload.data = JSON.stringify(data);
        await db.sortedSetAdd(stryMutAct_9fa48("29624") ? "" : (stryCov_9fa48("29624"), 'post:queue'), now, id);
        await db.setObject(stryMutAct_9fa48("29625") ? `` : (stryCov_9fa48("29625"), `post:queue:${id}`), payload);
        await user.setUserField(data.uid, stryMutAct_9fa48("29626") ? "" : (stryCov_9fa48("29626"), 'lastqueuetime'), now);
        cache.del(stryMutAct_9fa48("29627") ? "" : (stryCov_9fa48("29627"), 'post-queue'));
        const cid = await getCid(type, data);
        const uids = await getNotificationUids(cid);
        const bodyLong = await parseBodyLong(cid, type, data);
        const notifObj = await notifications.create(stryMutAct_9fa48("29628") ? {} : (stryCov_9fa48("29628"), {
          type: stryMutAct_9fa48("29629") ? "" : (stryCov_9fa48("29629"), 'post-queue'),
          nid: stryMutAct_9fa48("29630") ? `` : (stryCov_9fa48("29630"), `post-queue-${id}`),
          mergeId: stryMutAct_9fa48("29631") ? "" : (stryCov_9fa48("29631"), 'post-queue'),
          bodyShort: stryMutAct_9fa48("29632") ? "" : (stryCov_9fa48("29632"), '[[notifications:post_awaiting_review]]'),
          bodyLong: bodyLong,
          path: stryMutAct_9fa48("29633") ? `` : (stryCov_9fa48("29633"), `/post-queue/${id}`)
        }));
        await notifications.push(notifObj, uids);
        return stryMutAct_9fa48("29634") ? {} : (stryCov_9fa48("29634"), {
          id: id,
          type: type,
          queued: stryMutAct_9fa48("29635") ? false : (stryCov_9fa48("29635"), true),
          message: stryMutAct_9fa48("29636") ? "" : (stryCov_9fa48("29636"), '[[success:post-queued]]')
        });
      }
    };
    async function parseBodyLong(cid, type, data) {
      if (stryMutAct_9fa48("29637")) {
        {}
      } else {
        stryCov_9fa48("29637");
        const url = nconf.get(stryMutAct_9fa48("29638") ? "" : (stryCov_9fa48("29638"), 'url'));
        const [content, category, userData] = await Promise.all(stryMutAct_9fa48("29639") ? [] : (stryCov_9fa48("29639"), [plugins.hooks.fire(stryMutAct_9fa48("29640") ? "" : (stryCov_9fa48("29640"), 'filter:parse.raw'), data.content), categories.getCategoryFields(cid, stryMutAct_9fa48("29641") ? [] : (stryCov_9fa48("29641"), [stryMutAct_9fa48("29642") ? "" : (stryCov_9fa48("29642"), 'name'), stryMutAct_9fa48("29643") ? "" : (stryCov_9fa48("29643"), 'slug')])), user.getUserFields(data.uid, stryMutAct_9fa48("29644") ? [] : (stryCov_9fa48("29644"), [stryMutAct_9fa48("29645") ? "" : (stryCov_9fa48("29645"), 'uid'), stryMutAct_9fa48("29646") ? "" : (stryCov_9fa48("29646"), 'username')]))]));
        category.url = stryMutAct_9fa48("29647") ? `` : (stryCov_9fa48("29647"), `${url}/category/${category.slug}`);
        if (stryMutAct_9fa48("29651") ? userData.uid <= 0 : stryMutAct_9fa48("29650") ? userData.uid >= 0 : stryMutAct_9fa48("29649") ? false : stryMutAct_9fa48("29648") ? true : (stryCov_9fa48("29648", "29649", "29650", "29651"), userData.uid > 0)) {
          if (stryMutAct_9fa48("29652")) {
            {}
          } else {
            stryCov_9fa48("29652");
            userData.url = stryMutAct_9fa48("29653") ? `` : (stryCov_9fa48("29653"), `${url}/uid/${userData.uid}`);
          }
        }
        const topic = stryMutAct_9fa48("29654") ? {} : (stryCov_9fa48("29654"), {
          cid: cid,
          title: data.title,
          tid: data.tid
        });
        if (stryMutAct_9fa48("29657") ? type !== 'reply' : stryMutAct_9fa48("29656") ? false : stryMutAct_9fa48("29655") ? true : (stryCov_9fa48("29655", "29656", "29657"), type === (stryMutAct_9fa48("29658") ? "" : (stryCov_9fa48("29658"), 'reply')))) {
          if (stryMutAct_9fa48("29659")) {
            {}
          } else {
            stryCov_9fa48("29659");
            topic.title = await topics.getTopicField(data.tid, stryMutAct_9fa48("29660") ? "" : (stryCov_9fa48("29660"), 'title'));
            topic.url = stryMutAct_9fa48("29661") ? `` : (stryCov_9fa48("29661"), `${url}/topic/${data.tid}`);
          }
        }
        const {
          app
        } = require('../webserver');
        return await app.renderAsync(stryMutAct_9fa48("29662") ? "" : (stryCov_9fa48("29662"), 'emails/partials/post-queue-body'), stryMutAct_9fa48("29663") ? {} : (stryCov_9fa48("29663"), {
          content: content,
          category: category,
          user: userData,
          topic: topic
        }));
      }
    }
    async function getCid(type, data) {
      if (stryMutAct_9fa48("29664")) {
        {}
      } else {
        stryCov_9fa48("29664");
        if (stryMutAct_9fa48("29667") ? type !== 'topic' : stryMutAct_9fa48("29666") ? false : stryMutAct_9fa48("29665") ? true : (stryCov_9fa48("29665", "29666", "29667"), type === (stryMutAct_9fa48("29668") ? "" : (stryCov_9fa48("29668"), 'topic')))) {
          if (stryMutAct_9fa48("29669")) {
            {}
          } else {
            stryCov_9fa48("29669");
            return data.cid;
          }
        } else if (stryMutAct_9fa48("29672") ? type !== 'reply' : stryMutAct_9fa48("29671") ? false : stryMutAct_9fa48("29670") ? true : (stryCov_9fa48("29670", "29671", "29672"), type === (stryMutAct_9fa48("29673") ? "" : (stryCov_9fa48("29673"), 'reply')))) {
          if (stryMutAct_9fa48("29674")) {
            {}
          } else {
            stryCov_9fa48("29674");
            return await topics.getTopicField(data.tid, stryMutAct_9fa48("29675") ? "" : (stryCov_9fa48("29675"), 'cid'));
          }
        }
        return null;
      }
    }
    async function canPost(type, data) {
      if (stryMutAct_9fa48("29676")) {
        {}
      } else {
        stryCov_9fa48("29676");
        const cid = await getCid(type, data);
        const typeToPrivilege = stryMutAct_9fa48("29677") ? {} : (stryCov_9fa48("29677"), {
          topic: stryMutAct_9fa48("29678") ? "" : (stryCov_9fa48("29678"), 'topics:create'),
          reply: stryMutAct_9fa48("29679") ? "" : (stryCov_9fa48("29679"), 'topics:reply')
        });
        topics.checkContent(data.content);
        if (stryMutAct_9fa48("29682") ? type !== 'topic' : stryMutAct_9fa48("29681") ? false : stryMutAct_9fa48("29680") ? true : (stryCov_9fa48("29680", "29681", "29682"), type === (stryMutAct_9fa48("29683") ? "" : (stryCov_9fa48("29683"), 'topic')))) {
          if (stryMutAct_9fa48("29684")) {
            {}
          } else {
            stryCov_9fa48("29684");
            topics.checkTitle(data.title);
            if (stryMutAct_9fa48("29686") ? false : stryMutAct_9fa48("29685") ? true : (stryCov_9fa48("29685", "29686"), data.tags)) {
              if (stryMutAct_9fa48("29687")) {
                {}
              } else {
                stryCov_9fa48("29687");
                await topics.validateTags(data.tags, cid, data.uid);
              }
            }
          }
        }
        const [canPost] = await Promise.all(stryMutAct_9fa48("29688") ? [] : (stryCov_9fa48("29688"), [privileges.categories.can(typeToPrivilege[type], cid, data.uid), user.isReadyToQueue(data.uid, cid)]));
        if (stryMutAct_9fa48("29691") ? false : stryMutAct_9fa48("29690") ? true : stryMutAct_9fa48("29689") ? canPost : (stryCov_9fa48("29689", "29690", "29691"), !canPost)) {
          if (stryMutAct_9fa48("29692")) {
            {}
          } else {
            stryCov_9fa48("29692");
            throw new Error(stryMutAct_9fa48("29693") ? "" : (stryCov_9fa48("29693"), '[[error:no-privileges]]'));
          }
        }
      }
    }
    Posts.removeFromQueue = async function (id) {
      if (stryMutAct_9fa48("29694")) {
        {}
      } else {
        stryCov_9fa48("29694");
        const data = await getParsedObject(id);
        if (stryMutAct_9fa48("29697") ? false : stryMutAct_9fa48("29696") ? true : stryMutAct_9fa48("29695") ? data : (stryCov_9fa48("29695", "29696", "29697"), !data)) {
          if (stryMutAct_9fa48("29698")) {
            {}
          } else {
            stryCov_9fa48("29698");
            return null;
          }
        }
        const result = await plugins.hooks.fire(stryMutAct_9fa48("29699") ? "" : (stryCov_9fa48("29699"), 'filter:post-queue:removeFromQueue'), stryMutAct_9fa48("29700") ? {} : (stryCov_9fa48("29700"), {
          data: data
        }));
        await removeFromQueue(id);
        plugins.hooks.fire(stryMutAct_9fa48("29701") ? "" : (stryCov_9fa48("29701"), 'action:post-queue:removeFromQueue'), stryMutAct_9fa48("29702") ? {} : (stryCov_9fa48("29702"), {
          data: result.data
        }));
        return result.data;
      }
    };
    async function removeFromQueue(id) {
      if (stryMutAct_9fa48("29703")) {
        {}
      } else {
        stryCov_9fa48("29703");
        await removeQueueNotification(id);
        await db.sortedSetRemove(stryMutAct_9fa48("29704") ? "" : (stryCov_9fa48("29704"), 'post:queue'), id);
        await db.delete(stryMutAct_9fa48("29705") ? `` : (stryCov_9fa48("29705"), `post:queue:${id}`));
        cache.del(stryMutAct_9fa48("29706") ? "" : (stryCov_9fa48("29706"), 'post-queue'));
      }
    }
    Posts.submitFromQueue = async function (id) {
      if (stryMutAct_9fa48("29707")) {
        {}
      } else {
        stryCov_9fa48("29707");
        let data = await getParsedObject(id);
        if (stryMutAct_9fa48("29710") ? false : stryMutAct_9fa48("29709") ? true : stryMutAct_9fa48("29708") ? data : (stryCov_9fa48("29708", "29709", "29710"), !data)) {
          if (stryMutAct_9fa48("29711")) {
            {}
          } else {
            stryCov_9fa48("29711");
            return null;
          }
        }
        const result = await plugins.hooks.fire(stryMutAct_9fa48("29712") ? "" : (stryCov_9fa48("29712"), 'filter:post-queue:submitFromQueue'), stryMutAct_9fa48("29713") ? {} : (stryCov_9fa48("29713"), {
          data: data
        }));
        data = result.data;
        if (stryMutAct_9fa48("29716") ? data.type !== 'topic' : stryMutAct_9fa48("29715") ? false : stryMutAct_9fa48("29714") ? true : (stryCov_9fa48("29714", "29715", "29716"), data.type === (stryMutAct_9fa48("29717") ? "" : (stryCov_9fa48("29717"), 'topic')))) {
          if (stryMutAct_9fa48("29718")) {
            {}
          } else {
            stryCov_9fa48("29718");
            const result = await createTopic(data.data);
            data.pid = result.postData.pid;
          }
        } else if (stryMutAct_9fa48("29721") ? data.type !== 'reply' : stryMutAct_9fa48("29720") ? false : stryMutAct_9fa48("29719") ? true : (stryCov_9fa48("29719", "29720", "29721"), data.type === (stryMutAct_9fa48("29722") ? "" : (stryCov_9fa48("29722"), 'reply')))) {
          if (stryMutAct_9fa48("29723")) {
            {}
          } else {
            stryCov_9fa48("29723");
            const result = await createReply(data.data);
            data.pid = result.pid;
          }
        }
        await removeFromQueue(id);
        plugins.hooks.fire(stryMutAct_9fa48("29724") ? "" : (stryCov_9fa48("29724"), 'action:post-queue:submitFromQueue'), stryMutAct_9fa48("29725") ? {} : (stryCov_9fa48("29725"), {
          data: data
        }));
        return data;
      }
    };
    Posts.getFromQueue = async function (id) {
      if (stryMutAct_9fa48("29726")) {
        {}
      } else {
        stryCov_9fa48("29726");
        return await getParsedObject(id);
      }
    };
    async function getParsedObject(id) {
      if (stryMutAct_9fa48("29727")) {
        {}
      } else {
        stryCov_9fa48("29727");
        const data = await db.getObject(stryMutAct_9fa48("29728") ? `` : (stryCov_9fa48("29728"), `post:queue:${id}`));
        if (stryMutAct_9fa48("29731") ? false : stryMutAct_9fa48("29730") ? true : stryMutAct_9fa48("29729") ? data : (stryCov_9fa48("29729", "29730", "29731"), !data)) {
          if (stryMutAct_9fa48("29732")) {
            {}
          } else {
            stryCov_9fa48("29732");
            return null;
          }
        }
        data.data = JSON.parse(data.data);
        data.data.fromQueue = stryMutAct_9fa48("29733") ? false : (stryCov_9fa48("29733"), true);
        return data;
      }
    }
    async function createTopic(data) {
      if (stryMutAct_9fa48("29734")) {
        {}
      } else {
        stryCov_9fa48("29734");
        const result = await topics.post(data);
        socketHelpers.notifyNew(data.uid, stryMutAct_9fa48("29735") ? "" : (stryCov_9fa48("29735"), 'newTopic'), stryMutAct_9fa48("29736") ? {} : (stryCov_9fa48("29736"), {
          posts: stryMutAct_9fa48("29737") ? [] : (stryCov_9fa48("29737"), [result.postData]),
          topic: result.topicData
        }));
        return result;
      }
    }
    async function createReply(data) {
      if (stryMutAct_9fa48("29738")) {
        {}
      } else {
        stryCov_9fa48("29738");
        const postData = await topics.reply(data);
        const result = stryMutAct_9fa48("29739") ? {} : (stryCov_9fa48("29739"), {
          posts: stryMutAct_9fa48("29740") ? [] : (stryCov_9fa48("29740"), [postData]),
          'reputation:disabled': stryMutAct_9fa48("29741") ? !meta.config['reputation:disabled'] : (stryCov_9fa48("29741"), !(stryMutAct_9fa48("29742") ? meta.config['reputation:disabled'] : (stryCov_9fa48("29742"), !meta.config[stryMutAct_9fa48("29743") ? "" : (stryCov_9fa48("29743"), 'reputation:disabled')]))),
          'downvote:disabled': stryMutAct_9fa48("29744") ? !meta.config['downvote:disabled'] : (stryCov_9fa48("29744"), !(stryMutAct_9fa48("29745") ? meta.config['downvote:disabled'] : (stryCov_9fa48("29745"), !meta.config[stryMutAct_9fa48("29746") ? "" : (stryCov_9fa48("29746"), 'downvote:disabled')])))
        });
        socketHelpers.notifyNew(data.uid, stryMutAct_9fa48("29747") ? "" : (stryCov_9fa48("29747"), 'newPost'), result);
        return postData;
      }
    }
    Posts.editQueuedContent = async function (uid, editData) {
      if (stryMutAct_9fa48("29748")) {
        {}
      } else {
        stryCov_9fa48("29748");
        const canEditQueue = await Posts.canEditQueue(uid, editData, stryMutAct_9fa48("29749") ? "" : (stryCov_9fa48("29749"), 'edit'));
        if (stryMutAct_9fa48("29752") ? false : stryMutAct_9fa48("29751") ? true : stryMutAct_9fa48("29750") ? canEditQueue : (stryCov_9fa48("29750", "29751", "29752"), !canEditQueue)) {
          if (stryMutAct_9fa48("29753")) {
            {}
          } else {
            stryCov_9fa48("29753");
            throw new Error(stryMutAct_9fa48("29754") ? "" : (stryCov_9fa48("29754"), '[[error:no-privileges]]'));
          }
        }
        const data = await getParsedObject(editData.id);
        if (stryMutAct_9fa48("29757") ? false : stryMutAct_9fa48("29756") ? true : stryMutAct_9fa48("29755") ? data : (stryCov_9fa48("29755", "29756", "29757"), !data)) {
          if (stryMutAct_9fa48("29758")) {
            {}
          } else {
            stryCov_9fa48("29758");
            return;
          }
        }
        if (stryMutAct_9fa48("29761") ? editData.content === undefined : stryMutAct_9fa48("29760") ? false : stryMutAct_9fa48("29759") ? true : (stryCov_9fa48("29759", "29760", "29761"), editData.content !== undefined)) {
          if (stryMutAct_9fa48("29762")) {
            {}
          } else {
            stryCov_9fa48("29762");
            data.data.content = editData.content;
          }
        }
        if (stryMutAct_9fa48("29765") ? editData.title === undefined : stryMutAct_9fa48("29764") ? false : stryMutAct_9fa48("29763") ? true : (stryCov_9fa48("29763", "29764", "29765"), editData.title !== undefined)) {
          if (stryMutAct_9fa48("29766")) {
            {}
          } else {
            stryCov_9fa48("29766");
            data.data.title = editData.title;
          }
        }
        if (stryMutAct_9fa48("29769") ? editData.cid === undefined : stryMutAct_9fa48("29768") ? false : stryMutAct_9fa48("29767") ? true : (stryCov_9fa48("29767", "29768", "29769"), editData.cid !== undefined)) {
          if (stryMutAct_9fa48("29770")) {
            {}
          } else {
            stryCov_9fa48("29770");
            data.data.cid = editData.cid;
          }
        }
        await db.setObjectField(stryMutAct_9fa48("29771") ? `` : (stryCov_9fa48("29771"), `post:queue:${editData.id}`), stryMutAct_9fa48("29772") ? "" : (stryCov_9fa48("29772"), 'data'), JSON.stringify(data.data));
        cache.del(stryMutAct_9fa48("29773") ? "" : (stryCov_9fa48("29773"), 'post-queue'));
      }
    };
    Posts.canEditQueue = async function (uid, editData, action) {
      if (stryMutAct_9fa48("29774")) {
        {}
      } else {
        stryCov_9fa48("29774");
        const [isAdminOrGlobalMod, data] = await Promise.all(stryMutAct_9fa48("29775") ? [] : (stryCov_9fa48("29775"), [user.isAdminOrGlobalMod(uid), getParsedObject(editData.id)]));
        if (stryMutAct_9fa48("29778") ? false : stryMutAct_9fa48("29777") ? true : stryMutAct_9fa48("29776") ? data : (stryCov_9fa48("29776", "29777", "29778"), !data)) {
          if (stryMutAct_9fa48("29779")) {
            {}
          } else {
            stryCov_9fa48("29779");
            return stryMutAct_9fa48("29780") ? true : (stryCov_9fa48("29780"), false);
          }
        }
        const selfPost = stryMutAct_9fa48("29783") ? parseInt(uid, 10) !== parseInt(data.uid, 10) : stryMutAct_9fa48("29782") ? false : stryMutAct_9fa48("29781") ? true : (stryCov_9fa48("29781", "29782", "29783"), parseInt(uid, 10) === parseInt(data.uid, 10));
        if (stryMutAct_9fa48("29786") ? isAdminOrGlobalMod && (action === 'reject' || action === 'edit') && selfPost : stryMutAct_9fa48("29785") ? false : stryMutAct_9fa48("29784") ? true : (stryCov_9fa48("29784", "29785", "29786"), isAdminOrGlobalMod || (stryMutAct_9fa48("29788") ? action === 'reject' || action === 'edit' || selfPost : stryMutAct_9fa48("29787") ? false : (stryCov_9fa48("29787", "29788"), (stryMutAct_9fa48("29790") ? action === 'reject' && action === 'edit' : stryMutAct_9fa48("29789") ? true : (stryCov_9fa48("29789", "29790"), (stryMutAct_9fa48("29792") ? action !== 'reject' : stryMutAct_9fa48("29791") ? false : (stryCov_9fa48("29791", "29792"), action === (stryMutAct_9fa48("29793") ? "" : (stryCov_9fa48("29793"), 'reject')))) || (stryMutAct_9fa48("29795") ? action !== 'edit' : stryMutAct_9fa48("29794") ? false : (stryCov_9fa48("29794", "29795"), action === (stryMutAct_9fa48("29796") ? "" : (stryCov_9fa48("29796"), 'edit')))))) && selfPost)))) {
          if (stryMutAct_9fa48("29797")) {
            {}
          } else {
            stryCov_9fa48("29797");
            return stryMutAct_9fa48("29798") ? false : (stryCov_9fa48("29798"), true);
          }
        }
        let cid;
        if (stryMutAct_9fa48("29801") ? data.type !== 'topic' : stryMutAct_9fa48("29800") ? false : stryMutAct_9fa48("29799") ? true : (stryCov_9fa48("29799", "29800", "29801"), data.type === (stryMutAct_9fa48("29802") ? "" : (stryCov_9fa48("29802"), 'topic')))) {
          if (stryMutAct_9fa48("29803")) {
            {}
          } else {
            stryCov_9fa48("29803");
            cid = data.data.cid;
          }
        } else if (stryMutAct_9fa48("29806") ? data.type !== 'reply' : stryMutAct_9fa48("29805") ? false : stryMutAct_9fa48("29804") ? true : (stryCov_9fa48("29804", "29805", "29806"), data.type === (stryMutAct_9fa48("29807") ? "" : (stryCov_9fa48("29807"), 'reply')))) {
          if (stryMutAct_9fa48("29808")) {
            {}
          } else {
            stryCov_9fa48("29808");
            cid = await topics.getTopicField(data.data.tid, stryMutAct_9fa48("29809") ? "" : (stryCov_9fa48("29809"), 'cid'));
          }
        }
        const isModerator = await user.isModerator(uid, cid);
        let isModeratorOfTargetCid = stryMutAct_9fa48("29810") ? false : (stryCov_9fa48("29810"), true);
        if (stryMutAct_9fa48("29812") ? false : stryMutAct_9fa48("29811") ? true : (stryCov_9fa48("29811", "29812"), editData.cid)) {
          if (stryMutAct_9fa48("29813")) {
            {}
          } else {
            stryCov_9fa48("29813");
            isModeratorOfTargetCid = await user.isModerator(uid, editData.cid);
          }
        }
        return stryMutAct_9fa48("29816") ? isModerator || isModeratorOfTargetCid : stryMutAct_9fa48("29815") ? false : stryMutAct_9fa48("29814") ? true : (stryCov_9fa48("29814", "29815", "29816"), isModerator && isModeratorOfTargetCid);
      }
    };
    Posts.updateQueuedPostsTopic = async function (newTid, tids) {
      if (stryMutAct_9fa48("29817")) {
        {}
      } else {
        stryCov_9fa48("29817");
        const postData = await Posts.getQueuedPosts(stryMutAct_9fa48("29818") ? {} : (stryCov_9fa48("29818"), {
          tid: tids
        }), stryMutAct_9fa48("29819") ? {} : (stryCov_9fa48("29819"), {
          metadata: stryMutAct_9fa48("29820") ? true : (stryCov_9fa48("29820"), false)
        }));
        if (stryMutAct_9fa48("29822") ? false : stryMutAct_9fa48("29821") ? true : (stryCov_9fa48("29821", "29822"), postData.length)) {
          if (stryMutAct_9fa48("29823")) {
            {}
          } else {
            stryCov_9fa48("29823");
            postData.forEach(post => {
              if (stryMutAct_9fa48("29824")) {
                {}
              } else {
                stryCov_9fa48("29824");
                post.data.tid = newTid;
              }
            });
            await db.setObjectBulk(postData.map(stryMutAct_9fa48("29825") ? () => undefined : (stryCov_9fa48("29825"), p => stryMutAct_9fa48("29826") ? [] : (stryCov_9fa48("29826"), [stryMutAct_9fa48("29827") ? `` : (stryCov_9fa48("29827"), `post:queue:${p.id}`), stryMutAct_9fa48("29828") ? {} : (stryCov_9fa48("29828"), {
              data: JSON.stringify(p.data)
            })]))));
            cache.del(stryMutAct_9fa48("29829") ? "" : (stryCov_9fa48("29829"), 'post-queue'));
          }
        }
      }
    };
  }
};