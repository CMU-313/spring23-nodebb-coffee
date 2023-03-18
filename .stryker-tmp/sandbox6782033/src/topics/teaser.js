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
const meta = require('../meta');
const user = require('../user');
const posts = require('../posts');
const plugins = require('../plugins');
const utils = require('../utils');
module.exports = function (Topics) {
  if (stryMutAct_9fa48("40621")) {
    {}
  } else {
    stryCov_9fa48("40621");
    Topics.getTeasers = async function (topics, options) {
      if (stryMutAct_9fa48("40622")) {
        {}
      } else {
        stryCov_9fa48("40622");
        if (stryMutAct_9fa48("40625") ? !Array.isArray(topics) && !topics.length : stryMutAct_9fa48("40624") ? false : stryMutAct_9fa48("40623") ? true : (stryCov_9fa48("40623", "40624", "40625"), (stryMutAct_9fa48("40626") ? Array.isArray(topics) : (stryCov_9fa48("40626"), !Array.isArray(topics))) || (stryMutAct_9fa48("40627") ? topics.length : (stryCov_9fa48("40627"), !topics.length)))) {
          if (stryMutAct_9fa48("40628")) {
            {}
          } else {
            stryCov_9fa48("40628");
            return stryMutAct_9fa48("40629") ? ["Stryker was here"] : (stryCov_9fa48("40629"), []);
          }
        }
        let uid = options;
        let {
          teaserPost
        } = meta.config;
        if (stryMutAct_9fa48("40632") ? typeof options !== 'object' : stryMutAct_9fa48("40631") ? false : stryMutAct_9fa48("40630") ? true : (stryCov_9fa48("40630", "40631", "40632"), typeof options === (stryMutAct_9fa48("40633") ? "" : (stryCov_9fa48("40633"), 'object')))) {
          if (stryMutAct_9fa48("40634")) {
            {}
          } else {
            stryCov_9fa48("40634");
            uid = options.uid;
            teaserPost = stryMutAct_9fa48("40637") ? options.teaserPost && meta.config.teaserPost : stryMutAct_9fa48("40636") ? false : stryMutAct_9fa48("40635") ? true : (stryCov_9fa48("40635", "40636", "40637"), options.teaserPost || meta.config.teaserPost);
          }
        }
        const counts = stryMutAct_9fa48("40638") ? ["Stryker was here"] : (stryCov_9fa48("40638"), []);
        const teaserPids = stryMutAct_9fa48("40639") ? ["Stryker was here"] : (stryCov_9fa48("40639"), []);
        const tidToPost = {};
        topics.forEach(topic => {
          if (stryMutAct_9fa48("40640")) {
            {}
          } else {
            stryCov_9fa48("40640");
            counts.push(stryMutAct_9fa48("40643") ? topic || topic.postcount : stryMutAct_9fa48("40642") ? false : stryMutAct_9fa48("40641") ? true : (stryCov_9fa48("40641", "40642", "40643"), topic && topic.postcount));
            if (stryMutAct_9fa48("40645") ? false : stryMutAct_9fa48("40644") ? true : (stryCov_9fa48("40644", "40645"), topic)) {
              if (stryMutAct_9fa48("40646")) {
                {}
              } else {
                stryCov_9fa48("40646");
                if (stryMutAct_9fa48("40649") ? topic.teaserPid !== 'null' : stryMutAct_9fa48("40648") ? false : stryMutAct_9fa48("40647") ? true : (stryCov_9fa48("40647", "40648", "40649"), topic.teaserPid === (stryMutAct_9fa48("40650") ? "" : (stryCov_9fa48("40650"), 'null')))) {
                  if (stryMutAct_9fa48("40651")) {
                    {}
                  } else {
                    stryCov_9fa48("40651");
                    delete topic.teaserPid;
                  }
                }
                if (stryMutAct_9fa48("40654") ? teaserPost !== 'first' : stryMutAct_9fa48("40653") ? false : stryMutAct_9fa48("40652") ? true : (stryCov_9fa48("40652", "40653", "40654"), teaserPost === (stryMutAct_9fa48("40655") ? "" : (stryCov_9fa48("40655"), 'first')))) {
                  if (stryMutAct_9fa48("40656")) {
                    {}
                  } else {
                    stryCov_9fa48("40656");
                    teaserPids.push(topic.mainPid);
                  }
                } else if (stryMutAct_9fa48("40659") ? teaserPost !== 'last-post' : stryMutAct_9fa48("40658") ? false : stryMutAct_9fa48("40657") ? true : (stryCov_9fa48("40657", "40658", "40659"), teaserPost === (stryMutAct_9fa48("40660") ? "" : (stryCov_9fa48("40660"), 'last-post')))) {
                  if (stryMutAct_9fa48("40661")) {
                    {}
                  } else {
                    stryCov_9fa48("40661");
                    teaserPids.push(stryMutAct_9fa48("40664") ? topic.teaserPid && topic.mainPid : stryMutAct_9fa48("40663") ? false : stryMutAct_9fa48("40662") ? true : (stryCov_9fa48("40662", "40663", "40664"), topic.teaserPid || topic.mainPid));
                  }
                } else {
                  if (stryMutAct_9fa48("40665")) {
                    {}
                  } else {
                    stryCov_9fa48("40665");
                    // last-reply and everything else uses teaserPid like `last` that was used before
                    teaserPids.push(topic.teaserPid);
                  }
                }
              }
            }
          }
        });
        const [allPostData, callerSettings] = await Promise.all(stryMutAct_9fa48("40666") ? [] : (stryCov_9fa48("40666"), [posts.getPostsFields(teaserPids, stryMutAct_9fa48("40667") ? [] : (stryCov_9fa48("40667"), [stryMutAct_9fa48("40668") ? "" : (stryCov_9fa48("40668"), 'pid'), stryMutAct_9fa48("40669") ? "" : (stryCov_9fa48("40669"), 'uid'), stryMutAct_9fa48("40670") ? "" : (stryCov_9fa48("40670"), 'timestamp'), stryMutAct_9fa48("40671") ? "" : (stryCov_9fa48("40671"), 'tid'), stryMutAct_9fa48("40672") ? "" : (stryCov_9fa48("40672"), 'content')])), user.getSettings(uid)]));
        let postData = stryMutAct_9fa48("40673") ? allPostData : (stryCov_9fa48("40673"), allPostData.filter(stryMutAct_9fa48("40674") ? () => undefined : (stryCov_9fa48("40674"), post => stryMutAct_9fa48("40677") ? post || post.pid : stryMutAct_9fa48("40676") ? false : stryMutAct_9fa48("40675") ? true : (stryCov_9fa48("40675", "40676", "40677"), post && post.pid))));
        postData = await handleBlocks(uid, postData);
        postData = stryMutAct_9fa48("40678") ? postData : (stryCov_9fa48("40678"), postData.filter(Boolean));
        const uids = _.uniq(postData.map(stryMutAct_9fa48("40679") ? () => undefined : (stryCov_9fa48("40679"), post => post.uid)));
        const sortNewToOld = stryMutAct_9fa48("40682") ? callerSettings.topicPostSort !== 'newest_to_oldest' : stryMutAct_9fa48("40681") ? false : stryMutAct_9fa48("40680") ? true : (stryCov_9fa48("40680", "40681", "40682"), callerSettings.topicPostSort === (stryMutAct_9fa48("40683") ? "" : (stryCov_9fa48("40683"), 'newest_to_oldest')));
        const usersData = await user.getUsersFields(uids, stryMutAct_9fa48("40684") ? [] : (stryCov_9fa48("40684"), [stryMutAct_9fa48("40685") ? "" : (stryCov_9fa48("40685"), 'uid'), stryMutAct_9fa48("40686") ? "" : (stryCov_9fa48("40686"), 'username'), stryMutAct_9fa48("40687") ? "" : (stryCov_9fa48("40687"), 'userslug'), stryMutAct_9fa48("40688") ? "" : (stryCov_9fa48("40688"), 'picture')]));
        const users = {};
        usersData.forEach(user => {
          if (stryMutAct_9fa48("40689")) {
            {}
          } else {
            stryCov_9fa48("40689");
            users[user.uid] = user;
          }
        });
        postData.forEach(post => {
          if (stryMutAct_9fa48("40690")) {
            {}
          } else {
            stryCov_9fa48("40690");
            // If the post author isn't represented in the retrieved users' data,
            // then it means they were deleted, assume guest.
            if (stryMutAct_9fa48("40693") ? false : stryMutAct_9fa48("40692") ? true : stryMutAct_9fa48("40691") ? users.hasOwnProperty(post.uid) : (stryCov_9fa48("40691", "40692", "40693"), !users.hasOwnProperty(post.uid))) {
              if (stryMutAct_9fa48("40694")) {
                {}
              } else {
                stryCov_9fa48("40694");
                post.uid = 0;
              }
            }
            post.user = users[post.uid];
            post.timestampISO = utils.toISOString(post.timestamp);
            tidToPost[post.tid] = post;
          }
        });
        await Promise.all(postData.map(stryMutAct_9fa48("40695") ? () => undefined : (stryCov_9fa48("40695"), p => posts.parsePost(p))));
        const {
          tags
        } = await plugins.hooks.fire(stryMutAct_9fa48("40696") ? "" : (stryCov_9fa48("40696"), 'filter:teasers.configureStripTags'), stryMutAct_9fa48("40697") ? {} : (stryCov_9fa48("40697"), {
          tags: stryMutAct_9fa48("40698") ? utils.stripTags : (stryCov_9fa48("40698"), utils.stripTags.slice(0))
        }));
        const teasers = topics.map((topic, index) => {
          if (stryMutAct_9fa48("40699")) {
            {}
          } else {
            stryCov_9fa48("40699");
            if (stryMutAct_9fa48("40702") ? false : stryMutAct_9fa48("40701") ? true : stryMutAct_9fa48("40700") ? topic : (stryCov_9fa48("40700", "40701", "40702"), !topic)) {
              if (stryMutAct_9fa48("40703")) {
                {}
              } else {
                stryCov_9fa48("40703");
                return null;
              }
            }
            const topicPost = tidToPost[topic.tid];
            if (stryMutAct_9fa48("40705") ? false : stryMutAct_9fa48("40704") ? true : (stryCov_9fa48("40704", "40705"), topicPost)) {
              if (stryMutAct_9fa48("40706")) {
                {}
              } else {
                stryCov_9fa48("40706");
                topicPost.index = calcTeaserIndex(teaserPost, counts[index], sortNewToOld);
                if (stryMutAct_9fa48("40708") ? false : stryMutAct_9fa48("40707") ? true : (stryCov_9fa48("40707", "40708"), topicPost.content)) {
                  if (stryMutAct_9fa48("40709")) {
                    {}
                  } else {
                    stryCov_9fa48("40709");
                    topicPost.content = utils.stripHTMLTags(replaceImgWithAltText(topicPost.content), tags);
                  }
                }
              }
            }
            return topicPost;
          }
        });
        const result = await plugins.hooks.fire(stryMutAct_9fa48("40710") ? "" : (stryCov_9fa48("40710"), 'filter:teasers.get'), stryMutAct_9fa48("40711") ? {} : (stryCov_9fa48("40711"), {
          teasers: teasers,
          uid: uid
        }));
        return result.teasers;
      }
    };
    function calcTeaserIndex(teaserPost, postCountInTopic, sortNewToOld) {
      if (stryMutAct_9fa48("40712")) {
        {}
      } else {
        stryCov_9fa48("40712");
        if (stryMutAct_9fa48("40715") ? teaserPost !== 'first' : stryMutAct_9fa48("40714") ? false : stryMutAct_9fa48("40713") ? true : (stryCov_9fa48("40713", "40714", "40715"), teaserPost === (stryMutAct_9fa48("40716") ? "" : (stryCov_9fa48("40716"), 'first')))) {
          if (stryMutAct_9fa48("40717")) {
            {}
          } else {
            stryCov_9fa48("40717");
            return 1;
          }
        }
        if (stryMutAct_9fa48("40719") ? false : stryMutAct_9fa48("40718") ? true : (stryCov_9fa48("40718", "40719"), sortNewToOld)) {
          if (stryMutAct_9fa48("40720")) {
            {}
          } else {
            stryCov_9fa48("40720");
            return Math.min(2, postCountInTopic);
          }
        }
        return postCountInTopic;
      }
    }
    function replaceImgWithAltText(str) {
      if (stryMutAct_9fa48("40721")) {
        {}
      } else {
        stryCov_9fa48("40721");
        return String(str).replace(stryMutAct_9fa48("40725") ? /<img .*?alt="(.*?)"[>]*>/gi : stryMutAct_9fa48("40724") ? /<img .*?alt="(.*?)"[^>]>/gi : stryMutAct_9fa48("40723") ? /<img .*?alt="(.)"[^>]*>/gi : stryMutAct_9fa48("40722") ? /<img .alt="(.*?)"[^>]*>/gi : (stryCov_9fa48("40722", "40723", "40724", "40725"), /<img .*?alt="(.*?)"[^>]*>/gi), stryMutAct_9fa48("40726") ? "" : (stryCov_9fa48("40726"), '$1'));
      }
    }
    async function handleBlocks(uid, teasers) {
      if (stryMutAct_9fa48("40727")) {
        {}
      } else {
        stryCov_9fa48("40727");
        const blockedUids = await user.blocks.list(uid);
        if (stryMutAct_9fa48("40730") ? false : stryMutAct_9fa48("40729") ? true : stryMutAct_9fa48("40728") ? blockedUids.length : (stryCov_9fa48("40728", "40729", "40730"), !blockedUids.length)) {
          if (stryMutAct_9fa48("40731")) {
            {}
          } else {
            stryCov_9fa48("40731");
            return teasers;
          }
        }
        return await Promise.all(teasers.map(async postData => {
          if (stryMutAct_9fa48("40732")) {
            {}
          } else {
            stryCov_9fa48("40732");
            if (stryMutAct_9fa48("40734") ? false : stryMutAct_9fa48("40733") ? true : (stryCov_9fa48("40733", "40734"), blockedUids.includes(parseInt(postData.uid, 10)))) {
              if (stryMutAct_9fa48("40735")) {
                {}
              } else {
                stryCov_9fa48("40735");
                return await getPreviousNonBlockedPost(postData, blockedUids);
              }
            }
            return postData;
          }
        }));
      }
    }
    async function getPreviousNonBlockedPost(postData, blockedUids) {
      if (stryMutAct_9fa48("40736")) {
        {}
      } else {
        stryCov_9fa48("40736");
        let isBlocked = stryMutAct_9fa48("40737") ? true : (stryCov_9fa48("40737"), false);
        let prevPost = postData;
        const postsPerIteration = 5;
        let start = 0;
        let stop = stryMutAct_9fa48("40738") ? start + postsPerIteration + 1 : (stryCov_9fa48("40738"), (stryMutAct_9fa48("40739") ? start - postsPerIteration : (stryCov_9fa48("40739"), start + postsPerIteration)) - 1);
        let checkedAllReplies = stryMutAct_9fa48("40740") ? true : (stryCov_9fa48("40740"), false);
        function checkBlocked(post) {
          if (stryMutAct_9fa48("40741")) {
            {}
          } else {
            stryCov_9fa48("40741");
            const isPostBlocked = blockedUids.includes(parseInt(post.uid, 10));
            prevPost = (stryMutAct_9fa48("40742") ? isPostBlocked : (stryCov_9fa48("40742"), !isPostBlocked)) ? post : prevPost;
            return isPostBlocked;
          }
        }
        do {
          if (stryMutAct_9fa48("40750")) {
            {}
          } else {
            stryCov_9fa48("40750");
            /* eslint-disable no-await-in-loop */
            let pids = await db.getSortedSetRevRange(stryMutAct_9fa48("40751") ? `` : (stryCov_9fa48("40751"), `tid:${postData.tid}:posts`), start, stop);
            if (stryMutAct_9fa48("40754") ? false : stryMutAct_9fa48("40753") ? true : stryMutAct_9fa48("40752") ? pids.length : (stryCov_9fa48("40752", "40753", "40754"), !pids.length)) {
              if (stryMutAct_9fa48("40755")) {
                {}
              } else {
                stryCov_9fa48("40755");
                checkedAllReplies = stryMutAct_9fa48("40756") ? false : (stryCov_9fa48("40756"), true);
                const mainPid = await Topics.getTopicField(postData.tid, stryMutAct_9fa48("40757") ? "" : (stryCov_9fa48("40757"), 'mainPid'));
                pids = stryMutAct_9fa48("40758") ? [] : (stryCov_9fa48("40758"), [mainPid]);
              }
            }
            const prevPosts = await posts.getPostsFields(pids, stryMutAct_9fa48("40759") ? [] : (stryCov_9fa48("40759"), [stryMutAct_9fa48("40760") ? "" : (stryCov_9fa48("40760"), 'pid'), stryMutAct_9fa48("40761") ? "" : (stryCov_9fa48("40761"), 'uid'), stryMutAct_9fa48("40762") ? "" : (stryCov_9fa48("40762"), 'timestamp'), stryMutAct_9fa48("40763") ? "" : (stryCov_9fa48("40763"), 'tid'), stryMutAct_9fa48("40764") ? "" : (stryCov_9fa48("40764"), 'content')]));
            isBlocked = stryMutAct_9fa48("40765") ? prevPosts.some(checkBlocked) : (stryCov_9fa48("40765"), prevPosts.every(checkBlocked));
            stryMutAct_9fa48("40766") ? start -= postsPerIteration : (stryCov_9fa48("40766"), start += postsPerIteration);
            stop = stryMutAct_9fa48("40767") ? start + postsPerIteration + 1 : (stryCov_9fa48("40767"), (stryMutAct_9fa48("40768") ? start - postsPerIteration : (stryCov_9fa48("40768"), start + postsPerIteration)) - 1);
          }
        } while (stryMutAct_9fa48("40744") ? isBlocked && prevPost && prevPost.pid || !checkedAllReplies : stryMutAct_9fa48("40743") ? false : (stryCov_9fa48("40743", "40744"), (stryMutAct_9fa48("40746") ? isBlocked && prevPost || prevPost.pid : stryMutAct_9fa48("40745") ? true : (stryCov_9fa48("40745", "40746"), (stryMutAct_9fa48("40748") ? isBlocked || prevPost : stryMutAct_9fa48("40747") ? true : (stryCov_9fa48("40747", "40748"), isBlocked && prevPost)) && prevPost.pid)) && (stryMutAct_9fa48("40749") ? checkedAllReplies : (stryCov_9fa48("40749"), !checkedAllReplies))));
        return prevPost;
      }
    }
    Topics.getTeasersByTids = async function (tids, uid) {
      if (stryMutAct_9fa48("40769")) {
        {}
      } else {
        stryCov_9fa48("40769");
        if (stryMutAct_9fa48("40772") ? !Array.isArray(tids) && !tids.length : stryMutAct_9fa48("40771") ? false : stryMutAct_9fa48("40770") ? true : (stryCov_9fa48("40770", "40771", "40772"), (stryMutAct_9fa48("40773") ? Array.isArray(tids) : (stryCov_9fa48("40773"), !Array.isArray(tids))) || (stryMutAct_9fa48("40774") ? tids.length : (stryCov_9fa48("40774"), !tids.length)))) {
          if (stryMutAct_9fa48("40775")) {
            {}
          } else {
            stryCov_9fa48("40775");
            return stryMutAct_9fa48("40776") ? ["Stryker was here"] : (stryCov_9fa48("40776"), []);
          }
        }
        const topics = await Topics.getTopicsFields(tids, stryMutAct_9fa48("40777") ? [] : (stryCov_9fa48("40777"), [stryMutAct_9fa48("40778") ? "" : (stryCov_9fa48("40778"), 'tid'), stryMutAct_9fa48("40779") ? "" : (stryCov_9fa48("40779"), 'postcount'), stryMutAct_9fa48("40780") ? "" : (stryCov_9fa48("40780"), 'teaserPid'), stryMutAct_9fa48("40781") ? "" : (stryCov_9fa48("40781"), 'mainPid')]));
        return await Topics.getTeasers(topics, uid);
      }
    };
    Topics.getTeaser = async function (tid, uid) {
      if (stryMutAct_9fa48("40782")) {
        {}
      } else {
        stryCov_9fa48("40782");
        const teasers = await Topics.getTeasersByTids(stryMutAct_9fa48("40783") ? [] : (stryCov_9fa48("40783"), [tid]), uid);
        return (stryMutAct_9fa48("40786") ? Array.isArray(teasers) || teasers.length : stryMutAct_9fa48("40785") ? false : stryMutAct_9fa48("40784") ? true : (stryCov_9fa48("40784", "40785", "40786"), Array.isArray(teasers) && teasers.length)) ? teasers[0] : null;
      }
    };
    Topics.updateTeaser = async function (tid) {
      if (stryMutAct_9fa48("40787")) {
        {}
      } else {
        stryCov_9fa48("40787");
        let pid = await Topics.getLatestUndeletedReply(tid);
        pid = stryMutAct_9fa48("40790") ? pid && null : stryMutAct_9fa48("40789") ? false : stryMutAct_9fa48("40788") ? true : (stryCov_9fa48("40788", "40789", "40790"), pid || null);
        if (stryMutAct_9fa48("40792") ? false : stryMutAct_9fa48("40791") ? true : (stryCov_9fa48("40791", "40792"), pid)) {
          if (stryMutAct_9fa48("40793")) {
            {}
          } else {
            stryCov_9fa48("40793");
            await Topics.setTopicField(tid, stryMutAct_9fa48("40794") ? "" : (stryCov_9fa48("40794"), 'teaserPid'), pid);
          }
        } else {
          if (stryMutAct_9fa48("40795")) {
            {}
          } else {
            stryCov_9fa48("40795");
            await Topics.deleteTopicField(tid, stryMutAct_9fa48("40796") ? "" : (stryCov_9fa48("40796"), 'teaserPid'));
          }
        }
      }
    };
  }
};