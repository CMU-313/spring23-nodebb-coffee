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
const topics = require('../topics');
const categories = require('../categories');
const user = require('../user');
const notifications = require('../notifications');
const plugins = require('../plugins');
const flags = require('../flags');
module.exports = function (Posts) {
  if (stryMutAct_9fa48("28669")) {
    {}
  } else {
    stryCov_9fa48("28669");
    Posts.delete = async function (pid, uid) {
      if (stryMutAct_9fa48("28670")) {
        {}
      } else {
        stryCov_9fa48("28670");
        return await deleteOrRestore(stryMutAct_9fa48("28671") ? "" : (stryCov_9fa48("28671"), 'delete'), pid, uid);
      }
    };
    Posts.restore = async function (pid, uid) {
      if (stryMutAct_9fa48("28672")) {
        {}
      } else {
        stryCov_9fa48("28672");
        return await deleteOrRestore(stryMutAct_9fa48("28673") ? "" : (stryCov_9fa48("28673"), 'restore'), pid, uid);
      }
    };
    async function deleteOrRestore(type, pid, uid) {
      if (stryMutAct_9fa48("28674")) {
        {}
      } else {
        stryCov_9fa48("28674");
        const isDeleting = stryMutAct_9fa48("28677") ? type !== 'delete' : stryMutAct_9fa48("28676") ? false : stryMutAct_9fa48("28675") ? true : (stryCov_9fa48("28675", "28676", "28677"), type === (stryMutAct_9fa48("28678") ? "" : (stryCov_9fa48("28678"), 'delete')));
        await plugins.hooks.fire(stryMutAct_9fa48("28679") ? `` : (stryCov_9fa48("28679"), `filter:post.${type}`), stryMutAct_9fa48("28680") ? {} : (stryCov_9fa48("28680"), {
          pid: pid,
          uid: uid
        }));
        await Posts.setPostFields(pid, stryMutAct_9fa48("28681") ? {} : (stryCov_9fa48("28681"), {
          deleted: isDeleting ? 1 : 0,
          deleterUid: isDeleting ? uid : 0
        }));
        const postData = await Posts.getPostFields(pid, stryMutAct_9fa48("28682") ? [] : (stryCov_9fa48("28682"), [stryMutAct_9fa48("28683") ? "" : (stryCov_9fa48("28683"), 'pid'), stryMutAct_9fa48("28684") ? "" : (stryCov_9fa48("28684"), 'tid'), stryMutAct_9fa48("28685") ? "" : (stryCov_9fa48("28685"), 'uid'), stryMutAct_9fa48("28686") ? "" : (stryCov_9fa48("28686"), 'content'), stryMutAct_9fa48("28687") ? "" : (stryCov_9fa48("28687"), 'timestamp')]));
        const topicData = await topics.getTopicFields(postData.tid, stryMutAct_9fa48("28688") ? [] : (stryCov_9fa48("28688"), [stryMutAct_9fa48("28689") ? "" : (stryCov_9fa48("28689"), 'tid'), stryMutAct_9fa48("28690") ? "" : (stryCov_9fa48("28690"), 'cid'), stryMutAct_9fa48("28691") ? "" : (stryCov_9fa48("28691"), 'pinned')]));
        postData.cid = topicData.cid;
        await Promise.all(stryMutAct_9fa48("28692") ? [] : (stryCov_9fa48("28692"), [topics.updateLastPostTimeFromLastPid(postData.tid), topics.updateTeaser(postData.tid), isDeleting ? db.sortedSetRemove(stryMutAct_9fa48("28693") ? `` : (stryCov_9fa48("28693"), `cid:${topicData.cid}:pids`), pid) : db.sortedSetAdd(stryMutAct_9fa48("28694") ? `` : (stryCov_9fa48("28694"), `cid:${topicData.cid}:pids`), postData.timestamp, pid)]));
        await categories.updateRecentTidForCid(postData.cid);
        plugins.hooks.fire(stryMutAct_9fa48("28695") ? `` : (stryCov_9fa48("28695"), `action:post.${type}`), stryMutAct_9fa48("28696") ? {} : (stryCov_9fa48("28696"), {
          post: _.clone(postData),
          uid: uid
        }));
        if (stryMutAct_9fa48("28699") ? type !== 'delete' : stryMutAct_9fa48("28698") ? false : stryMutAct_9fa48("28697") ? true : (stryCov_9fa48("28697", "28698", "28699"), type === (stryMutAct_9fa48("28700") ? "" : (stryCov_9fa48("28700"), 'delete')))) {
          if (stryMutAct_9fa48("28701")) {
            {}
          } else {
            stryCov_9fa48("28701");
            await flags.resolveFlag(stryMutAct_9fa48("28702") ? "" : (stryCov_9fa48("28702"), 'post'), pid, uid);
          }
        }
        return postData;
      }
    }
    Posts.purge = async function (pids, uid) {
      if (stryMutAct_9fa48("28703")) {
        {}
      } else {
        stryCov_9fa48("28703");
        pids = Array.isArray(pids) ? pids : stryMutAct_9fa48("28704") ? [] : (stryCov_9fa48("28704"), [pids]);
        let postData = await Posts.getPostsData(pids);
        pids = stryMutAct_9fa48("28705") ? pids : (stryCov_9fa48("28705"), pids.filter(stryMutAct_9fa48("28706") ? () => undefined : (stryCov_9fa48("28706"), (pid, index) => stryMutAct_9fa48("28707") ? !postData[index] : (stryCov_9fa48("28707"), !(stryMutAct_9fa48("28708") ? postData[index] : (stryCov_9fa48("28708"), !postData[index]))))));
        postData = stryMutAct_9fa48("28709") ? postData : (stryCov_9fa48("28709"), postData.filter(Boolean));
        if (stryMutAct_9fa48("28712") ? false : stryMutAct_9fa48("28711") ? true : stryMutAct_9fa48("28710") ? postData.length : (stryCov_9fa48("28710", "28711", "28712"), !postData.length)) {
          if (stryMutAct_9fa48("28713")) {
            {}
          } else {
            stryCov_9fa48("28713");
            return;
          }
        }
        const uniqTids = _.uniq(postData.map(stryMutAct_9fa48("28714") ? () => undefined : (stryCov_9fa48("28714"), p => p.tid)));
        const topicData = await topics.getTopicsFields(uniqTids, stryMutAct_9fa48("28715") ? [] : (stryCov_9fa48("28715"), [stryMutAct_9fa48("28716") ? "" : (stryCov_9fa48("28716"), 'tid'), stryMutAct_9fa48("28717") ? "" : (stryCov_9fa48("28717"), 'cid'), stryMutAct_9fa48("28718") ? "" : (stryCov_9fa48("28718"), 'pinned'), stryMutAct_9fa48("28719") ? "" : (stryCov_9fa48("28719"), 'postcount')]));
        const tidToTopic = _.zipObject(uniqTids, topicData);
        postData.forEach(p => {
          if (stryMutAct_9fa48("28720")) {
            {}
          } else {
            stryCov_9fa48("28720");
            p.topic = tidToTopic[p.tid];
            p.cid = stryMutAct_9fa48("28723") ? tidToTopic[p.tid] || tidToTopic[p.tid].cid : stryMutAct_9fa48("28722") ? false : stryMutAct_9fa48("28721") ? true : (stryCov_9fa48("28721", "28722", "28723"), tidToTopic[p.tid] && tidToTopic[p.tid].cid);
          }
        });

        // deprecated hook
        await Promise.all(postData.map(stryMutAct_9fa48("28724") ? () => undefined : (stryCov_9fa48("28724"), p => plugins.hooks.fire(stryMutAct_9fa48("28725") ? "" : (stryCov_9fa48("28725"), 'filter:post.purge'), stryMutAct_9fa48("28726") ? {} : (stryCov_9fa48("28726"), {
          post: p,
          pid: p.pid,
          uid: uid
        })))));

        // new hook
        await plugins.hooks.fire(stryMutAct_9fa48("28727") ? "" : (stryCov_9fa48("28727"), 'filter:posts.purge'), stryMutAct_9fa48("28728") ? {} : (stryCov_9fa48("28728"), {
          posts: postData,
          pids: postData.map(stryMutAct_9fa48("28729") ? () => undefined : (stryCov_9fa48("28729"), p => p.pid)),
          uid: uid
        }));
        await Promise.all(stryMutAct_9fa48("28730") ? [] : (stryCov_9fa48("28730"), [deleteFromTopicUserNotification(postData), deleteFromCategoryRecentPosts(postData), deleteFromUsersBookmarks(pids), deleteFromUsersVotes(pids), deleteFromReplies(postData), deleteFromGroups(pids), deleteDiffs(pids), deleteFromUploads(pids), db.sortedSetsRemove(stryMutAct_9fa48("28731") ? [] : (stryCov_9fa48("28731"), [stryMutAct_9fa48("28732") ? "" : (stryCov_9fa48("28732"), 'posts:pid'), stryMutAct_9fa48("28733") ? "" : (stryCov_9fa48("28733"), 'posts:votes'), stryMutAct_9fa48("28734") ? "" : (stryCov_9fa48("28734"), 'posts:flagged')]), pids)]));
        await resolveFlags(postData, uid);

        // deprecated hook
        Promise.all(postData.map(stryMutAct_9fa48("28735") ? () => undefined : (stryCov_9fa48("28735"), p => plugins.hooks.fire(stryMutAct_9fa48("28736") ? "" : (stryCov_9fa48("28736"), 'action:post.purge'), stryMutAct_9fa48("28737") ? {} : (stryCov_9fa48("28737"), {
          post: p,
          uid: uid
        })))));

        // new hook
        plugins.hooks.fire(stryMutAct_9fa48("28738") ? "" : (stryCov_9fa48("28738"), 'action:posts.purge'), stryMutAct_9fa48("28739") ? {} : (stryCov_9fa48("28739"), {
          posts: postData,
          uid: uid
        }));
        await db.deleteAll(postData.map(stryMutAct_9fa48("28740") ? () => undefined : (stryCov_9fa48("28740"), p => stryMutAct_9fa48("28741") ? `` : (stryCov_9fa48("28741"), `post:${p.pid}`))));
      }
    };
    async function deleteFromTopicUserNotification(postData) {
      if (stryMutAct_9fa48("28742")) {
        {}
      } else {
        stryCov_9fa48("28742");
        const bulkRemove = stryMutAct_9fa48("28743") ? ["Stryker was here"] : (stryCov_9fa48("28743"), []);
        postData.forEach(p => {
          if (stryMutAct_9fa48("28744")) {
            {}
          } else {
            stryCov_9fa48("28744");
            bulkRemove.push(stryMutAct_9fa48("28745") ? [] : (stryCov_9fa48("28745"), [stryMutAct_9fa48("28746") ? `` : (stryCov_9fa48("28746"), `tid:${p.tid}:posts`), p.pid]));
            bulkRemove.push(stryMutAct_9fa48("28747") ? [] : (stryCov_9fa48("28747"), [stryMutAct_9fa48("28748") ? `` : (stryCov_9fa48("28748"), `tid:${p.tid}:posts:votes`), p.pid]));
            bulkRemove.push(stryMutAct_9fa48("28749") ? [] : (stryCov_9fa48("28749"), [stryMutAct_9fa48("28750") ? `` : (stryCov_9fa48("28750"), `uid:${p.uid}:posts`), p.pid]));
            bulkRemove.push(stryMutAct_9fa48("28751") ? [] : (stryCov_9fa48("28751"), [stryMutAct_9fa48("28752") ? `` : (stryCov_9fa48("28752"), `cid:${p.cid}:uid:${p.uid}:pids`), p.pid]));
            bulkRemove.push(stryMutAct_9fa48("28753") ? [] : (stryCov_9fa48("28753"), [stryMutAct_9fa48("28754") ? `` : (stryCov_9fa48("28754"), `cid:${p.cid}:uid:${p.uid}:pids:votes`), p.pid]));
          }
        });
        await db.sortedSetRemoveBulk(bulkRemove);
        const incrObjectBulk = stryMutAct_9fa48("28755") ? [] : (stryCov_9fa48("28755"), [stryMutAct_9fa48("28756") ? [] : (stryCov_9fa48("28756"), [stryMutAct_9fa48("28757") ? "" : (stryCov_9fa48("28757"), 'global'), stryMutAct_9fa48("28758") ? {} : (stryCov_9fa48("28758"), {
          postCount: stryMutAct_9fa48("28759") ? +postData.length : (stryCov_9fa48("28759"), -postData.length)
        })])]);
        const postsByCategory = _.groupBy(postData, stryMutAct_9fa48("28760") ? () => undefined : (stryCov_9fa48("28760"), p => parseInt(p.cid, 10)));
        for (const [cid, posts] of Object.entries(postsByCategory)) {
          if (stryMutAct_9fa48("28761")) {
            {}
          } else {
            stryCov_9fa48("28761");
            incrObjectBulk.push(stryMutAct_9fa48("28762") ? [] : (stryCov_9fa48("28762"), [stryMutAct_9fa48("28763") ? `` : (stryCov_9fa48("28763"), `category:${cid}`), stryMutAct_9fa48("28764") ? {} : (stryCov_9fa48("28764"), {
              post_count: stryMutAct_9fa48("28765") ? +posts.length : (stryCov_9fa48("28765"), -posts.length)
            })]));
          }
        }
        const postsByTopic = _.groupBy(postData, stryMutAct_9fa48("28766") ? () => undefined : (stryCov_9fa48("28766"), p => parseInt(p.tid, 10)));
        const topicPostCountTasks = stryMutAct_9fa48("28767") ? ["Stryker was here"] : (stryCov_9fa48("28767"), []);
        const topicTasks = stryMutAct_9fa48("28768") ? ["Stryker was here"] : (stryCov_9fa48("28768"), []);
        const zsetIncrBulk = stryMutAct_9fa48("28769") ? ["Stryker was here"] : (stryCov_9fa48("28769"), []);
        for (const [tid, posts] of Object.entries(postsByTopic)) {
          if (stryMutAct_9fa48("28770")) {
            {}
          } else {
            stryCov_9fa48("28770");
            incrObjectBulk.push(stryMutAct_9fa48("28771") ? [] : (stryCov_9fa48("28771"), [stryMutAct_9fa48("28772") ? `` : (stryCov_9fa48("28772"), `topic:${tid}`), stryMutAct_9fa48("28773") ? {} : (stryCov_9fa48("28773"), {
              postcount: stryMutAct_9fa48("28774") ? +posts.length : (stryCov_9fa48("28774"), -posts.length)
            })]));
            if (stryMutAct_9fa48("28777") ? posts.length || posts[0] : stryMutAct_9fa48("28776") ? false : stryMutAct_9fa48("28775") ? true : (stryCov_9fa48("28775", "28776", "28777"), posts.length && posts[0])) {
              if (stryMutAct_9fa48("28778")) {
                {}
              } else {
                stryCov_9fa48("28778");
                const topicData = posts[0].topic;
                const newPostCount = stryMutAct_9fa48("28779") ? topicData.postcount + posts.length : (stryCov_9fa48("28779"), topicData.postcount - posts.length);
                topicPostCountTasks.push(stryMutAct_9fa48("28780") ? [] : (stryCov_9fa48("28780"), [stryMutAct_9fa48("28781") ? "" : (stryCov_9fa48("28781"), 'topics:posts'), newPostCount, tid]));
                if (stryMutAct_9fa48("28784") ? false : stryMutAct_9fa48("28783") ? true : stryMutAct_9fa48("28782") ? topicData.pinned : (stryCov_9fa48("28782", "28783", "28784"), !topicData.pinned)) {
                  if (stryMutAct_9fa48("28785")) {
                    {}
                  } else {
                    stryCov_9fa48("28785");
                    zsetIncrBulk.push(stryMutAct_9fa48("28786") ? [] : (stryCov_9fa48("28786"), [stryMutAct_9fa48("28787") ? `` : (stryCov_9fa48("28787"), `cid:${topicData.cid}:tids:posts`), stryMutAct_9fa48("28788") ? +posts.length : (stryCov_9fa48("28788"), -posts.length), tid]));
                  }
                }
              }
            }
            topicTasks.push(topics.updateTeaser(tid));
            topicTasks.push(topics.updateLastPostTimeFromLastPid(tid));
            const postsByUid = _.groupBy(posts, stryMutAct_9fa48("28789") ? () => undefined : (stryCov_9fa48("28789"), p => parseInt(p.uid, 10)));
            for (const [uid, uidPosts] of Object.entries(postsByUid)) {
              if (stryMutAct_9fa48("28790")) {
                {}
              } else {
                stryCov_9fa48("28790");
                zsetIncrBulk.push(stryMutAct_9fa48("28791") ? [] : (stryCov_9fa48("28791"), [stryMutAct_9fa48("28792") ? `` : (stryCov_9fa48("28792"), `tid:${tid}:posters`), stryMutAct_9fa48("28793") ? +uidPosts.length : (stryCov_9fa48("28793"), -uidPosts.length), uid]));
              }
            }
            topicTasks.push(db.sortedSetIncrByBulk(zsetIncrBulk));
          }
        }
        await Promise.all(stryMutAct_9fa48("28794") ? [] : (stryCov_9fa48("28794"), [db.incrObjectFieldByBulk(incrObjectBulk), db.sortedSetAddBulk(topicPostCountTasks), ...topicTasks, user.updatePostCount(_.uniq(postData.map(stryMutAct_9fa48("28795") ? () => undefined : (stryCov_9fa48("28795"), p => p.uid)))), notifications.rescind(...postData.map(stryMutAct_9fa48("28796") ? () => undefined : (stryCov_9fa48("28796"), p => stryMutAct_9fa48("28797") ? `` : (stryCov_9fa48("28797"), `new_post:tid:${p.tid}:pid:${p.pid}:uid:${p.uid}`))))]));
      }
    }
    async function deleteFromCategoryRecentPosts(postData) {
      if (stryMutAct_9fa48("28798")) {
        {}
      } else {
        stryCov_9fa48("28798");
        const uniqCids = _.uniq(postData.map(stryMutAct_9fa48("28799") ? () => undefined : (stryCov_9fa48("28799"), p => p.cid)));
        const sets = uniqCids.map(stryMutAct_9fa48("28800") ? () => undefined : (stryCov_9fa48("28800"), cid => stryMutAct_9fa48("28801") ? `` : (stryCov_9fa48("28801"), `cid:${cid}:pids`)));
        await db.sortedSetRemove(sets, postData.map(stryMutAct_9fa48("28802") ? () => undefined : (stryCov_9fa48("28802"), p => p.pid)));
        await Promise.all(uniqCids.map(categories.updateRecentTidForCid));
      }
    }
    async function deleteFromUsersBookmarks(pids) {
      if (stryMutAct_9fa48("28803")) {
        {}
      } else {
        stryCov_9fa48("28803");
        const arrayOfUids = await db.getSetsMembers(pids.map(stryMutAct_9fa48("28804") ? () => undefined : (stryCov_9fa48("28804"), pid => stryMutAct_9fa48("28805") ? `` : (stryCov_9fa48("28805"), `pid:${pid}:users_bookmarked`))));
        const bulkRemove = stryMutAct_9fa48("28806") ? ["Stryker was here"] : (stryCov_9fa48("28806"), []);
        pids.forEach((pid, index) => {
          if (stryMutAct_9fa48("28807")) {
            {}
          } else {
            stryCov_9fa48("28807");
            arrayOfUids[index].forEach(uid => {
              if (stryMutAct_9fa48("28808")) {
                {}
              } else {
                stryCov_9fa48("28808");
                bulkRemove.push(stryMutAct_9fa48("28809") ? [] : (stryCov_9fa48("28809"), [stryMutAct_9fa48("28810") ? `` : (stryCov_9fa48("28810"), `uid:${uid}:bookmarks`), pid]));
              }
            });
          }
        });
        await db.sortedSetRemoveBulk(bulkRemove);
        await db.deleteAll(pids.map(stryMutAct_9fa48("28811") ? () => undefined : (stryCov_9fa48("28811"), pid => stryMutAct_9fa48("28812") ? `` : (stryCov_9fa48("28812"), `pid:${pid}:users_bookmarked`))));
      }
    }
    async function deleteFromUsersVotes(pids) {
      if (stryMutAct_9fa48("28813")) {
        {}
      } else {
        stryCov_9fa48("28813");
        const [upvoters, downvoters] = await Promise.all(stryMutAct_9fa48("28814") ? [] : (stryCov_9fa48("28814"), [db.getSetsMembers(pids.map(stryMutAct_9fa48("28815") ? () => undefined : (stryCov_9fa48("28815"), pid => stryMutAct_9fa48("28816") ? `` : (stryCov_9fa48("28816"), `pid:${pid}:upvote`)))), db.getSetsMembers(pids.map(stryMutAct_9fa48("28817") ? () => undefined : (stryCov_9fa48("28817"), pid => stryMutAct_9fa48("28818") ? `` : (stryCov_9fa48("28818"), `pid:${pid}:downvote`))))]));
        const bulkRemove = stryMutAct_9fa48("28819") ? ["Stryker was here"] : (stryCov_9fa48("28819"), []);
        pids.forEach((pid, index) => {
          if (stryMutAct_9fa48("28820")) {
            {}
          } else {
            stryCov_9fa48("28820");
            upvoters[index].forEach(upvoterUid => {
              if (stryMutAct_9fa48("28821")) {
                {}
              } else {
                stryCov_9fa48("28821");
                bulkRemove.push(stryMutAct_9fa48("28822") ? [] : (stryCov_9fa48("28822"), [stryMutAct_9fa48("28823") ? `` : (stryCov_9fa48("28823"), `uid:${upvoterUid}:upvote`), pid]));
              }
            });
            downvoters[index].forEach(downvoterUid => {
              if (stryMutAct_9fa48("28824")) {
                {}
              } else {
                stryCov_9fa48("28824");
                bulkRemove.push(stryMutAct_9fa48("28825") ? [] : (stryCov_9fa48("28825"), [stryMutAct_9fa48("28826") ? `` : (stryCov_9fa48("28826"), `uid:${downvoterUid}:downvote`), pid]));
              }
            });
          }
        });
        await Promise.all(stryMutAct_9fa48("28827") ? [] : (stryCov_9fa48("28827"), [db.sortedSetRemoveBulk(bulkRemove), db.deleteAll(stryMutAct_9fa48("28828") ? [] : (stryCov_9fa48("28828"), [...pids.map(stryMutAct_9fa48("28829") ? () => undefined : (stryCov_9fa48("28829"), pid => stryMutAct_9fa48("28830") ? `` : (stryCov_9fa48("28830"), `pid:${pid}:upvote`))), ...pids.map(stryMutAct_9fa48("28831") ? () => undefined : (stryCov_9fa48("28831"), pid => stryMutAct_9fa48("28832") ? `` : (stryCov_9fa48("28832"), `pid:${pid}:downvote`)))]))]));
      }
    }
    async function deleteFromReplies(postData) {
      if (stryMutAct_9fa48("28833")) {
        {}
      } else {
        stryCov_9fa48("28833");
        const arrayOfReplyPids = await db.getSortedSetsMembers(postData.map(stryMutAct_9fa48("28834") ? () => undefined : (stryCov_9fa48("28834"), p => stryMutAct_9fa48("28835") ? `` : (stryCov_9fa48("28835"), `pid:${p.pid}:replies`))));
        const allReplyPids = _.flatten(arrayOfReplyPids);
        const promises = stryMutAct_9fa48("28836") ? [] : (stryCov_9fa48("28836"), [db.deleteObjectFields(allReplyPids.map(stryMutAct_9fa48("28837") ? () => undefined : (stryCov_9fa48("28837"), pid => stryMutAct_9fa48("28838") ? `` : (stryCov_9fa48("28838"), `post:${pid}`))), stryMutAct_9fa48("28839") ? [] : (stryCov_9fa48("28839"), [stryMutAct_9fa48("28840") ? "" : (stryCov_9fa48("28840"), 'toPid')])), db.deleteAll(postData.map(stryMutAct_9fa48("28841") ? () => undefined : (stryCov_9fa48("28841"), p => stryMutAct_9fa48("28842") ? `` : (stryCov_9fa48("28842"), `pid:${p.pid}:replies`))))]);
        const postsWithParents = stryMutAct_9fa48("28843") ? postData : (stryCov_9fa48("28843"), postData.filter(stryMutAct_9fa48("28844") ? () => undefined : (stryCov_9fa48("28844"), p => parseInt(p.toPid, 10))));
        const bulkRemove = postsWithParents.map(stryMutAct_9fa48("28845") ? () => undefined : (stryCov_9fa48("28845"), p => stryMutAct_9fa48("28846") ? [] : (stryCov_9fa48("28846"), [stryMutAct_9fa48("28847") ? `` : (stryCov_9fa48("28847"), `pid:${p.toPid}:replies`), p.pid])));
        promises.push(db.sortedSetRemoveBulk(bulkRemove));
        await Promise.all(promises);
        const parentPids = _.uniq(postsWithParents.map(stryMutAct_9fa48("28848") ? () => undefined : (stryCov_9fa48("28848"), p => p.toPid)));
        const counts = await db.sortedSetsCard(parentPids.map(stryMutAct_9fa48("28849") ? () => undefined : (stryCov_9fa48("28849"), pid => stryMutAct_9fa48("28850") ? `` : (stryCov_9fa48("28850"), `pid:${pid}:replies`))));
        await db.setObjectBulk(parentPids.map(stryMutAct_9fa48("28851") ? () => undefined : (stryCov_9fa48("28851"), (pid, index) => stryMutAct_9fa48("28852") ? [] : (stryCov_9fa48("28852"), [stryMutAct_9fa48("28853") ? `` : (stryCov_9fa48("28853"), `post:${pid}`), stryMutAct_9fa48("28854") ? {} : (stryCov_9fa48("28854"), {
          replies: counts[index]
        })]))));
      }
    }
    async function deleteFromGroups(pids) {
      if (stryMutAct_9fa48("28855")) {
        {}
      } else {
        stryCov_9fa48("28855");
        const groupNames = await db.getSortedSetMembers(stryMutAct_9fa48("28856") ? "" : (stryCov_9fa48("28856"), 'groups:visible:createtime'));
        const keys = groupNames.map(stryMutAct_9fa48("28857") ? () => undefined : (stryCov_9fa48("28857"), groupName => stryMutAct_9fa48("28858") ? `` : (stryCov_9fa48("28858"), `group:${groupName}:member:pids`)));
        await db.sortedSetRemove(keys, pids);
      }
    }
    async function deleteDiffs(pids) {
      if (stryMutAct_9fa48("28859")) {
        {}
      } else {
        stryCov_9fa48("28859");
        const timestamps = await Promise.all(pids.map(stryMutAct_9fa48("28860") ? () => undefined : (stryCov_9fa48("28860"), pid => Posts.diffs.list(pid))));
        await db.deleteAll(stryMutAct_9fa48("28861") ? [] : (stryCov_9fa48("28861"), [...pids.map(stryMutAct_9fa48("28862") ? () => undefined : (stryCov_9fa48("28862"), pid => stryMutAct_9fa48("28863") ? `` : (stryCov_9fa48("28863"), `post:${pid}:diffs`))), ..._.flattenDeep(pids.map(stryMutAct_9fa48("28864") ? () => undefined : (stryCov_9fa48("28864"), (pid, index) => timestamps[index].map(stryMutAct_9fa48("28865") ? () => undefined : (stryCov_9fa48("28865"), t => stryMutAct_9fa48("28866") ? `` : (stryCov_9fa48("28866"), `diff:${pid}.${t}`))))))]));
      }
    }
    async function deleteFromUploads(pids) {
      if (stryMutAct_9fa48("28867")) {
        {}
      } else {
        stryCov_9fa48("28867");
        await Promise.all(pids.map(Posts.uploads.dissociateAll));
      }
    }
    async function resolveFlags(postData, uid) {
      if (stryMutAct_9fa48("28868")) {
        {}
      } else {
        stryCov_9fa48("28868");
        const flaggedPosts = stryMutAct_9fa48("28869") ? postData : (stryCov_9fa48("28869"), postData.filter(stryMutAct_9fa48("28870") ? () => undefined : (stryCov_9fa48("28870"), p => parseInt(p.flagId, 10))));
        await Promise.all(flaggedPosts.map(stryMutAct_9fa48("28871") ? () => undefined : (stryCov_9fa48("28871"), p => flags.update(p.flagId, uid, stryMutAct_9fa48("28872") ? {} : (stryCov_9fa48("28872"), {
          state: stryMutAct_9fa48("28873") ? "" : (stryCov_9fa48("28873"), 'resolved')
        })))));
      }
    }
  }
};