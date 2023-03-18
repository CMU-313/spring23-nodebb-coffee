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
const posts = require('../posts');
const meta = require('../meta');
const plugins = require('../plugins');
const utils = require('../utils');
const backlinkRegex = new RegExp(stryMutAct_9fa48("39155") ? `` : (stryCov_9fa48("39155"), `(?:${nconf.get(stryMutAct_9fa48("39156") ? "" : (stryCov_9fa48("39156"), 'url')).replace(stryMutAct_9fa48("39157") ? "" : (stryCov_9fa48("39157"), '/'), stryMutAct_9fa48("39158") ? "" : (stryCov_9fa48("39158"), '\\/'))}|\b|\\s)\\/topic\\/(\\d+)(?:\\/\\w+)?`), stryMutAct_9fa48("39159") ? "" : (stryCov_9fa48("39159"), 'g'));
module.exports = function (Topics) {
  if (stryMutAct_9fa48("39160")) {
    {}
  } else {
    stryCov_9fa48("39160");
    Topics.onNewPostMade = async function (postData) {
      if (stryMutAct_9fa48("39161")) {
        {}
      } else {
        stryCov_9fa48("39161");
        await Topics.updateLastPostTime(postData.tid, postData.timestamp);
        await Topics.addPostToTopic(postData.tid, postData);
      }
    };
    Topics.getTopicPosts = async function (topicData, set, start, stop, uid, reverse) {
      if (stryMutAct_9fa48("39162")) {
        {}
      } else {
        stryCov_9fa48("39162");
        if (stryMutAct_9fa48("39165") ? false : stryMutAct_9fa48("39164") ? true : stryMutAct_9fa48("39163") ? topicData : (stryCov_9fa48("39163", "39164", "39165"), !topicData)) {
          if (stryMutAct_9fa48("39166")) {
            {}
          } else {
            stryCov_9fa48("39166");
            return stryMutAct_9fa48("39167") ? ["Stryker was here"] : (stryCov_9fa48("39167"), []);
          }
        }
        let repliesStart = start;
        let repliesStop = stop;
        if (stryMutAct_9fa48("39171") ? stop <= 0 : stryMutAct_9fa48("39170") ? stop >= 0 : stryMutAct_9fa48("39169") ? false : stryMutAct_9fa48("39168") ? true : (stryCov_9fa48("39168", "39169", "39170", "39171"), stop > 0)) {
          if (stryMutAct_9fa48("39172")) {
            {}
          } else {
            stryCov_9fa48("39172");
            stryMutAct_9fa48("39173") ? repliesStop += 1 : (stryCov_9fa48("39173"), repliesStop -= 1);
            if (stryMutAct_9fa48("39177") ? start <= 0 : stryMutAct_9fa48("39176") ? start >= 0 : stryMutAct_9fa48("39175") ? false : stryMutAct_9fa48("39174") ? true : (stryCov_9fa48("39174", "39175", "39176", "39177"), start > 0)) {
              if (stryMutAct_9fa48("39178")) {
                {}
              } else {
                stryCov_9fa48("39178");
                stryMutAct_9fa48("39179") ? repliesStart += 1 : (stryCov_9fa48("39179"), repliesStart -= 1);
              }
            }
          }
        }
        let pids = stryMutAct_9fa48("39180") ? ["Stryker was here"] : (stryCov_9fa48("39180"), []);
        if (stryMutAct_9fa48("39183") ? start !== 0 && stop !== 0 : stryMutAct_9fa48("39182") ? false : stryMutAct_9fa48("39181") ? true : (stryCov_9fa48("39181", "39182", "39183"), (stryMutAct_9fa48("39185") ? start === 0 : stryMutAct_9fa48("39184") ? false : (stryCov_9fa48("39184", "39185"), start !== 0)) || (stryMutAct_9fa48("39187") ? stop === 0 : stryMutAct_9fa48("39186") ? false : (stryCov_9fa48("39186", "39187"), stop !== 0)))) {
          if (stryMutAct_9fa48("39188")) {
            {}
          } else {
            stryCov_9fa48("39188");
            pids = await posts.getPidsFromSet(set, repliesStart, repliesStop, reverse);
          }
        }
        if (stryMutAct_9fa48("39191") ? !pids.length || !topicData.mainPid : stryMutAct_9fa48("39190") ? false : stryMutAct_9fa48("39189") ? true : (stryCov_9fa48("39189", "39190", "39191"), (stryMutAct_9fa48("39192") ? pids.length : (stryCov_9fa48("39192"), !pids.length)) && (stryMutAct_9fa48("39193") ? topicData.mainPid : (stryCov_9fa48("39193"), !topicData.mainPid)))) {
          if (stryMutAct_9fa48("39194")) {
            {}
          } else {
            stryCov_9fa48("39194");
            return stryMutAct_9fa48("39195") ? ["Stryker was here"] : (stryCov_9fa48("39195"), []);
          }
        }
        if (stryMutAct_9fa48("39198") ? topicData.mainPid || start === 0 : stryMutAct_9fa48("39197") ? false : stryMutAct_9fa48("39196") ? true : (stryCov_9fa48("39196", "39197", "39198"), topicData.mainPid && (stryMutAct_9fa48("39200") ? start !== 0 : stryMutAct_9fa48("39199") ? true : (stryCov_9fa48("39199", "39200"), start === 0)))) {
          if (stryMutAct_9fa48("39201")) {
            {}
          } else {
            stryCov_9fa48("39201");
            pids.unshift(topicData.mainPid);
          }
        }
        let postData = await posts.getPostsByPids(pids, uid);
        if (stryMutAct_9fa48("39204") ? false : stryMutAct_9fa48("39203") ? true : stryMutAct_9fa48("39202") ? postData.length : (stryCov_9fa48("39202", "39203", "39204"), !postData.length)) {
          if (stryMutAct_9fa48("39205")) {
            {}
          } else {
            stryCov_9fa48("39205");
            return stryMutAct_9fa48("39206") ? ["Stryker was here"] : (stryCov_9fa48("39206"), []);
          }
        }
        let replies = postData;
        if (stryMutAct_9fa48("39209") ? topicData.mainPid || start === 0 : stryMutAct_9fa48("39208") ? false : stryMutAct_9fa48("39207") ? true : (stryCov_9fa48("39207", "39208", "39209"), topicData.mainPid && (stryMutAct_9fa48("39211") ? start !== 0 : stryMutAct_9fa48("39210") ? true : (stryCov_9fa48("39210", "39211"), start === 0)))) {
          if (stryMutAct_9fa48("39212")) {
            {}
          } else {
            stryCov_9fa48("39212");
            postData[0].index = 0;
            replies = stryMutAct_9fa48("39213") ? postData : (stryCov_9fa48("39213"), postData.slice(1));
          }
        }
        Topics.calculatePostIndices(replies, repliesStart);
        await addEventStartEnd(postData, set, reverse, topicData);
        const allPosts = stryMutAct_9fa48("39214") ? postData : (stryCov_9fa48("39214"), postData.slice());
        postData = await (stryMutAct_9fa48("39215") ? user.blocks : (stryCov_9fa48("39215"), user.blocks.filter(uid, postData)));
        if (stryMutAct_9fa48("39218") ? allPosts.length === postData.length : stryMutAct_9fa48("39217") ? false : stryMutAct_9fa48("39216") ? true : (stryCov_9fa48("39216", "39217", "39218"), allPosts.length !== postData.length)) {
          if (stryMutAct_9fa48("39219")) {
            {}
          } else {
            stryCov_9fa48("39219");
            const includedPids = new Set(postData.map(stryMutAct_9fa48("39220") ? () => undefined : (stryCov_9fa48("39220"), p => p.pid)));
            stryMutAct_9fa48("39221") ? allPosts.forEach((p, index) => {
              if (!includedPids.has(p.pid) && allPosts[index + 1] && !reverse) {
                allPosts[index + 1].eventEnd = p.eventEnd;
              }
            }) : (stryCov_9fa48("39221"), allPosts.reverse().forEach((p, index) => {
              if (stryMutAct_9fa48("39222")) {
                {}
              } else {
                stryCov_9fa48("39222");
                if (stryMutAct_9fa48("39225") ? !includedPids.has(p.pid) && allPosts[index + 1] || !reverse : stryMutAct_9fa48("39224") ? false : stryMutAct_9fa48("39223") ? true : (stryCov_9fa48("39223", "39224", "39225"), (stryMutAct_9fa48("39227") ? !includedPids.has(p.pid) || allPosts[index + 1] : stryMutAct_9fa48("39226") ? true : (stryCov_9fa48("39226", "39227"), (stryMutAct_9fa48("39228") ? includedPids.has(p.pid) : (stryCov_9fa48("39228"), !includedPids.has(p.pid))) && allPosts[stryMutAct_9fa48("39229") ? index - 1 : (stryCov_9fa48("39229"), index + 1)])) && (stryMutAct_9fa48("39230") ? reverse : (stryCov_9fa48("39230"), !reverse)))) {
                  if (stryMutAct_9fa48("39231")) {
                    {}
                  } else {
                    stryCov_9fa48("39231");
                    allPosts[stryMutAct_9fa48("39232") ? index - 1 : (stryCov_9fa48("39232"), index + 1)].eventEnd = p.eventEnd;
                  }
                }
              }
            }));
          }
        }
        const result = await plugins.hooks.fire(stryMutAct_9fa48("39233") ? "" : (stryCov_9fa48("39233"), 'filter:topic.getPosts'), stryMutAct_9fa48("39234") ? {} : (stryCov_9fa48("39234"), {
          topic: topicData,
          uid: uid,
          posts: await Topics.addPostData(postData, uid)
        }));
        return result.posts;
      }
    };
    async function addEventStartEnd(postData, set, reverse, topicData) {
      if (stryMutAct_9fa48("39235")) {
        {}
      } else {
        stryCov_9fa48("39235");
        if (stryMutAct_9fa48("39238") ? false : stryMutAct_9fa48("39237") ? true : stryMutAct_9fa48("39236") ? postData.length : (stryCov_9fa48("39236", "39237", "39238"), !postData.length)) {
          if (stryMutAct_9fa48("39239")) {
            {}
          } else {
            stryCov_9fa48("39239");
            return;
          }
        }
        postData.forEach((p, index) => {
          if (stryMutAct_9fa48("39240")) {
            {}
          } else {
            stryCov_9fa48("39240");
            if (stryMutAct_9fa48("39243") ? p && p.index === 0 || reverse : stryMutAct_9fa48("39242") ? false : stryMutAct_9fa48("39241") ? true : (stryCov_9fa48("39241", "39242", "39243"), (stryMutAct_9fa48("39245") ? p || p.index === 0 : stryMutAct_9fa48("39244") ? true : (stryCov_9fa48("39244", "39245"), p && (stryMutAct_9fa48("39247") ? p.index !== 0 : stryMutAct_9fa48("39246") ? true : (stryCov_9fa48("39246", "39247"), p.index === 0)))) && reverse)) {
              if (stryMutAct_9fa48("39248")) {
                {}
              } else {
                stryCov_9fa48("39248");
                p.eventStart = topicData.lastposttime;
                p.eventEnd = Date.now();
              }
            } else if (stryMutAct_9fa48("39251") ? p || postData[index + 1] : stryMutAct_9fa48("39250") ? false : stryMutAct_9fa48("39249") ? true : (stryCov_9fa48("39249", "39250", "39251"), p && postData[stryMutAct_9fa48("39252") ? index - 1 : (stryCov_9fa48("39252"), index + 1)])) {
              if (stryMutAct_9fa48("39253")) {
                {}
              } else {
                stryCov_9fa48("39253");
                p.eventStart = reverse ? postData[stryMutAct_9fa48("39254") ? index - 1 : (stryCov_9fa48("39254"), index + 1)].timestamp : p.timestamp;
                p.eventEnd = reverse ? p.timestamp : postData[stryMutAct_9fa48("39255") ? index - 1 : (stryCov_9fa48("39255"), index + 1)].timestamp;
              }
            }
          }
        });
        const lastPost = postData[stryMutAct_9fa48("39256") ? postData.length + 1 : (stryCov_9fa48("39256"), postData.length - 1)];
        if (stryMutAct_9fa48("39258") ? false : stryMutAct_9fa48("39257") ? true : (stryCov_9fa48("39257", "39258"), lastPost)) {
          if (stryMutAct_9fa48("39259")) {
            {}
          } else {
            stryCov_9fa48("39259");
            lastPost.eventStart = reverse ? topicData.timestamp : lastPost.timestamp;
            lastPost.eventEnd = reverse ? lastPost.timestamp : Date.now();
            if (stryMutAct_9fa48("39261") ? false : stryMutAct_9fa48("39260") ? true : (stryCov_9fa48("39260", "39261"), lastPost.index)) {
              if (stryMutAct_9fa48("39262")) {
                {}
              } else {
                stryCov_9fa48("39262");
                const nextPost = await db[reverse ? stryMutAct_9fa48("39263") ? "" : (stryCov_9fa48("39263"), 'getSortedSetRevRangeWithScores') : stryMutAct_9fa48("39264") ? "" : (stryCov_9fa48("39264"), 'getSortedSetRangeWithScores')](set, lastPost.index, lastPost.index);
                if (stryMutAct_9fa48("39266") ? false : stryMutAct_9fa48("39265") ? true : (stryCov_9fa48("39265", "39266"), reverse)) {
                  if (stryMutAct_9fa48("39267")) {
                    {}
                  } else {
                    stryCov_9fa48("39267");
                    lastPost.eventStart = nextPost.length ? nextPost[0].score : lastPost.eventStart;
                  }
                } else {
                  if (stryMutAct_9fa48("39268")) {
                    {}
                  } else {
                    stryCov_9fa48("39268");
                    lastPost.eventEnd = nextPost.length ? nextPost[0].score : lastPost.eventEnd;
                  }
                }
              }
            }
          }
        }
      }
    }
    Topics.addPostData = async function (postData, uid) {
      if (stryMutAct_9fa48("39269")) {
        {}
      } else {
        stryCov_9fa48("39269");
        if (stryMutAct_9fa48("39272") ? !Array.isArray(postData) && !postData.length : stryMutAct_9fa48("39271") ? false : stryMutAct_9fa48("39270") ? true : (stryCov_9fa48("39270", "39271", "39272"), (stryMutAct_9fa48("39273") ? Array.isArray(postData) : (stryCov_9fa48("39273"), !Array.isArray(postData))) || (stryMutAct_9fa48("39274") ? postData.length : (stryCov_9fa48("39274"), !postData.length)))) {
          if (stryMutAct_9fa48("39275")) {
            {}
          } else {
            stryCov_9fa48("39275");
            return stryMutAct_9fa48("39276") ? ["Stryker was here"] : (stryCov_9fa48("39276"), []);
          }
        }
        const pids = postData.map(stryMutAct_9fa48("39277") ? () => undefined : (stryCov_9fa48("39277"), post => stryMutAct_9fa48("39280") ? post || post.pid : stryMutAct_9fa48("39279") ? false : stryMutAct_9fa48("39278") ? true : (stryCov_9fa48("39278", "39279", "39280"), post && post.pid)));
        async function getPostUserData(field, method) {
          if (stryMutAct_9fa48("39281")) {
            {}
          } else {
            stryCov_9fa48("39281");
            const uids = _.uniq(stryMutAct_9fa48("39282") ? postData.map(p => p[field]) : (stryCov_9fa48("39282"), postData.filter(stryMutAct_9fa48("39283") ? () => undefined : (stryCov_9fa48("39283"), p => stryMutAct_9fa48("39286") ? p || parseInt(p[field], 10) >= 0 : stryMutAct_9fa48("39285") ? false : stryMutAct_9fa48("39284") ? true : (stryCov_9fa48("39284", "39285", "39286"), p && (stryMutAct_9fa48("39289") ? parseInt(p[field], 10) < 0 : stryMutAct_9fa48("39288") ? parseInt(p[field], 10) > 0 : stryMutAct_9fa48("39287") ? true : (stryCov_9fa48("39287", "39288", "39289"), parseInt(p[field], 10) >= 0))))).map(stryMutAct_9fa48("39290") ? () => undefined : (stryCov_9fa48("39290"), p => p[field]))));
            const userData = await method(uids);
            return _.zipObject(uids, userData);
          }
        }
        const [bookmarks, voteData, userData, editors, replies] = await Promise.all(stryMutAct_9fa48("39291") ? [] : (stryCov_9fa48("39291"), [posts.hasBookmarked(pids, uid), posts.getVoteStatusByPostIDs(pids, uid), getPostUserData(stryMutAct_9fa48("39292") ? "" : (stryCov_9fa48("39292"), 'uid'), stryMutAct_9fa48("39293") ? () => undefined : (stryCov_9fa48("39293"), async uids => await posts.getUserInfoForPosts(uids, uid))), getPostUserData(stryMutAct_9fa48("39294") ? "" : (stryCov_9fa48("39294"), 'editor'), stryMutAct_9fa48("39295") ? () => undefined : (stryCov_9fa48("39295"), async uids => await user.getUsersFields(uids, stryMutAct_9fa48("39296") ? [] : (stryCov_9fa48("39296"), [stryMutAct_9fa48("39297") ? "" : (stryCov_9fa48("39297"), 'uid'), stryMutAct_9fa48("39298") ? "" : (stryCov_9fa48("39298"), 'username'), stryMutAct_9fa48("39299") ? "" : (stryCov_9fa48("39299"), 'userslug')])))), getPostReplies(pids, uid), Topics.addParentPosts(postData)]));
        postData.forEach((postObj, i) => {
          if (stryMutAct_9fa48("39300")) {
            {}
          } else {
            stryCov_9fa48("39300");
            if (stryMutAct_9fa48("39302") ? false : stryMutAct_9fa48("39301") ? true : (stryCov_9fa48("39301", "39302"), postObj)) {
              if (stryMutAct_9fa48("39303")) {
                {}
              } else {
                stryCov_9fa48("39303");
                postObj.user = postObj.uid ? userData[postObj.uid] : stryMutAct_9fa48("39304") ? {} : (stryCov_9fa48("39304"), {
                  ...userData[postObj.uid]
                });
                postObj.editor = postObj.editor ? editors[postObj.editor] : null;
                postObj.bookmarked = bookmarks[i];
                postObj.upvoted = voteData.upvotes[i];
                postObj.downvoted = voteData.downvotes[i];
                postObj.votes = stryMutAct_9fa48("39307") ? postObj.votes && 0 : stryMutAct_9fa48("39306") ? false : stryMutAct_9fa48("39305") ? true : (stryCov_9fa48("39305", "39306", "39307"), postObj.votes || 0);
                postObj.replies = replies[i];
                postObj.selfPost = stryMutAct_9fa48("39310") ? parseInt(uid, 10) > 0 || parseInt(uid, 10) === postObj.uid : stryMutAct_9fa48("39309") ? false : stryMutAct_9fa48("39308") ? true : (stryCov_9fa48("39308", "39309", "39310"), (stryMutAct_9fa48("39313") ? parseInt(uid, 10) <= 0 : stryMutAct_9fa48("39312") ? parseInt(uid, 10) >= 0 : stryMutAct_9fa48("39311") ? true : (stryCov_9fa48("39311", "39312", "39313"), parseInt(uid, 10) > 0)) && (stryMutAct_9fa48("39315") ? parseInt(uid, 10) !== postObj.uid : stryMutAct_9fa48("39314") ? true : (stryCov_9fa48("39314", "39315"), parseInt(uid, 10) === postObj.uid)));

                // Username override for guests, if enabled
                if (stryMutAct_9fa48("39318") ? meta.config.allowGuestHandles && postObj.uid === 0 || postObj.handle : stryMutAct_9fa48("39317") ? false : stryMutAct_9fa48("39316") ? true : (stryCov_9fa48("39316", "39317", "39318"), (stryMutAct_9fa48("39320") ? meta.config.allowGuestHandles || postObj.uid === 0 : stryMutAct_9fa48("39319") ? true : (stryCov_9fa48("39319", "39320"), meta.config.allowGuestHandles && (stryMutAct_9fa48("39322") ? postObj.uid !== 0 : stryMutAct_9fa48("39321") ? true : (stryCov_9fa48("39321", "39322"), postObj.uid === 0)))) && postObj.handle)) {
                  if (stryMutAct_9fa48("39323")) {
                    {}
                  } else {
                    stryCov_9fa48("39323");
                    postObj.user.username = validator.escape(String(postObj.handle));
                    postObj.user.displayname = postObj.user.username;
                  }
                }
              }
            }
          }
        });
        const result = await plugins.hooks.fire(stryMutAct_9fa48("39324") ? "" : (stryCov_9fa48("39324"), 'filter:topics.addPostData'), stryMutAct_9fa48("39325") ? {} : (stryCov_9fa48("39325"), {
          posts: postData,
          uid: uid
        }));
        return result.posts;
      }
    };
    Topics.modifyPostsByPrivilege = function (topicData, topicPrivileges) {
      if (stryMutAct_9fa48("39326")) {
        {}
      } else {
        stryCov_9fa48("39326");
        const loggedIn = stryMutAct_9fa48("39330") ? parseInt(topicPrivileges.uid, 10) <= 0 : stryMutAct_9fa48("39329") ? parseInt(topicPrivileges.uid, 10) >= 0 : stryMutAct_9fa48("39328") ? false : stryMutAct_9fa48("39327") ? true : (stryCov_9fa48("39327", "39328", "39329", "39330"), parseInt(topicPrivileges.uid, 10) > 0);
        topicData.posts.forEach(post => {
          if (stryMutAct_9fa48("39331")) {
            {}
          } else {
            stryCov_9fa48("39331");
            if (stryMutAct_9fa48("39333") ? false : stryMutAct_9fa48("39332") ? true : (stryCov_9fa48("39332", "39333"), post)) {
              if (stryMutAct_9fa48("39334")) {
                {}
              } else {
                stryCov_9fa48("39334");
                post.topicOwnerPost = stryMutAct_9fa48("39337") ? parseInt(topicData.uid, 10) !== parseInt(post.uid, 10) : stryMutAct_9fa48("39336") ? false : stryMutAct_9fa48("39335") ? true : (stryCov_9fa48("39335", "39336", "39337"), parseInt(topicData.uid, 10) === parseInt(post.uid, 10));
                post.display_edit_tools = stryMutAct_9fa48("39340") ? topicPrivileges.isAdminOrMod && post.selfPost && topicPrivileges['posts:edit'] : stryMutAct_9fa48("39339") ? false : stryMutAct_9fa48("39338") ? true : (stryCov_9fa48("39338", "39339", "39340"), topicPrivileges.isAdminOrMod || (stryMutAct_9fa48("39342") ? post.selfPost || topicPrivileges['posts:edit'] : stryMutAct_9fa48("39341") ? false : (stryCov_9fa48("39341", "39342"), post.selfPost && topicPrivileges[stryMutAct_9fa48("39343") ? "" : (stryCov_9fa48("39343"), 'posts:edit')])));
                post.display_delete_tools = stryMutAct_9fa48("39346") ? topicPrivileges.isAdminOrMod && post.selfPost && topicPrivileges['posts:delete'] : stryMutAct_9fa48("39345") ? false : stryMutAct_9fa48("39344") ? true : (stryCov_9fa48("39344", "39345", "39346"), topicPrivileges.isAdminOrMod || (stryMutAct_9fa48("39348") ? post.selfPost || topicPrivileges['posts:delete'] : stryMutAct_9fa48("39347") ? false : (stryCov_9fa48("39347", "39348"), post.selfPost && topicPrivileges[stryMutAct_9fa48("39349") ? "" : (stryCov_9fa48("39349"), 'posts:delete')])));
                post.display_moderator_tools = stryMutAct_9fa48("39352") ? post.display_edit_tools && post.display_delete_tools : stryMutAct_9fa48("39351") ? false : stryMutAct_9fa48("39350") ? true : (stryCov_9fa48("39350", "39351", "39352"), post.display_edit_tools || post.display_delete_tools);
                post.display_move_tools = stryMutAct_9fa48("39355") ? topicPrivileges.isAdminOrMod || post.index !== 0 : stryMutAct_9fa48("39354") ? false : stryMutAct_9fa48("39353") ? true : (stryCov_9fa48("39353", "39354", "39355"), topicPrivileges.isAdminOrMod && (stryMutAct_9fa48("39357") ? post.index === 0 : stryMutAct_9fa48("39356") ? true : (stryCov_9fa48("39356", "39357"), post.index !== 0)));
                post.display_post_menu = stryMutAct_9fa48("39360") ? (topicPrivileges.isAdminOrMod || post.selfPost && (!topicData.locked && !post.deleted || post.deleted && parseInt(post.deleterUid, 10) === parseInt(topicPrivileges.uid, 10))) && (loggedIn || topicData.postSharing.length) && !post.deleted : stryMutAct_9fa48("39359") ? false : stryMutAct_9fa48("39358") ? true : (stryCov_9fa48("39358", "39359", "39360"), (stryMutAct_9fa48("39362") ? topicPrivileges.isAdminOrMod && post.selfPost && (!topicData.locked && !post.deleted || post.deleted && parseInt(post.deleterUid, 10) === parseInt(topicPrivileges.uid, 10)) : stryMutAct_9fa48("39361") ? false : (stryCov_9fa48("39361", "39362"), topicPrivileges.isAdminOrMod || (stryMutAct_9fa48("39364") ? post.selfPost || !topicData.locked && !post.deleted || post.deleted && parseInt(post.deleterUid, 10) === parseInt(topicPrivileges.uid, 10) : stryMutAct_9fa48("39363") ? false : (stryCov_9fa48("39363", "39364"), post.selfPost && (stryMutAct_9fa48("39366") ? !topicData.locked && !post.deleted && post.deleted && parseInt(post.deleterUid, 10) === parseInt(topicPrivileges.uid, 10) : stryMutAct_9fa48("39365") ? true : (stryCov_9fa48("39365", "39366"), (stryMutAct_9fa48("39368") ? !topicData.locked || !post.deleted : stryMutAct_9fa48("39367") ? false : (stryCov_9fa48("39367", "39368"), (stryMutAct_9fa48("39369") ? topicData.locked : (stryCov_9fa48("39369"), !topicData.locked)) && (stryMutAct_9fa48("39370") ? post.deleted : (stryCov_9fa48("39370"), !post.deleted)))) || (stryMutAct_9fa48("39372") ? post.deleted || parseInt(post.deleterUid, 10) === parseInt(topicPrivileges.uid, 10) : stryMutAct_9fa48("39371") ? false : (stryCov_9fa48("39371", "39372"), post.deleted && (stryMutAct_9fa48("39374") ? parseInt(post.deleterUid, 10) !== parseInt(topicPrivileges.uid, 10) : stryMutAct_9fa48("39373") ? true : (stryCov_9fa48("39373", "39374"), parseInt(post.deleterUid, 10) === parseInt(topicPrivileges.uid, 10))))))))))) || (stryMutAct_9fa48("39376") ? loggedIn || topicData.postSharing.length || !post.deleted : stryMutAct_9fa48("39375") ? false : (stryCov_9fa48("39375", "39376"), (stryMutAct_9fa48("39378") ? loggedIn && topicData.postSharing.length : stryMutAct_9fa48("39377") ? true : (stryCov_9fa48("39377", "39378"), loggedIn || topicData.postSharing.length)) && (stryMutAct_9fa48("39379") ? post.deleted : (stryCov_9fa48("39379"), !post.deleted)))));
                post.ip = topicPrivileges.isAdminOrMod ? post.ip : undefined;
                posts.modifyPostByPrivilege(post, topicPrivileges);
              }
            }
          }
        });
      }
    };
    Topics.addParentPosts = async function (postData) {
      if (stryMutAct_9fa48("39380")) {
        {}
      } else {
        stryCov_9fa48("39380");
        let parentPids = stryMutAct_9fa48("39381") ? postData.map(postObj => postObj && postObj.hasOwnProperty('toPid') ? parseInt(postObj.toPid, 10) : null) : (stryCov_9fa48("39381"), postData.map(stryMutAct_9fa48("39382") ? () => undefined : (stryCov_9fa48("39382"), postObj => (stryMutAct_9fa48("39385") ? postObj || postObj.hasOwnProperty('toPid') : stryMutAct_9fa48("39384") ? false : stryMutAct_9fa48("39383") ? true : (stryCov_9fa48("39383", "39384", "39385"), postObj && postObj.hasOwnProperty(stryMutAct_9fa48("39386") ? "" : (stryCov_9fa48("39386"), 'toPid')))) ? parseInt(postObj.toPid, 10) : null)).filter(Boolean));
        if (stryMutAct_9fa48("39389") ? false : stryMutAct_9fa48("39388") ? true : stryMutAct_9fa48("39387") ? parentPids.length : (stryCov_9fa48("39387", "39388", "39389"), !parentPids.length)) {
          if (stryMutAct_9fa48("39390")) {
            {}
          } else {
            stryCov_9fa48("39390");
            return;
          }
        }
        parentPids = _.uniq(parentPids);
        const parentPosts = await posts.getPostsFields(parentPids, stryMutAct_9fa48("39391") ? [] : (stryCov_9fa48("39391"), [stryMutAct_9fa48("39392") ? "" : (stryCov_9fa48("39392"), 'uid')]));
        const parentUids = _.uniq(parentPosts.map(stryMutAct_9fa48("39393") ? () => undefined : (stryCov_9fa48("39393"), postObj => stryMutAct_9fa48("39396") ? postObj || postObj.uid : stryMutAct_9fa48("39395") ? false : stryMutAct_9fa48("39394") ? true : (stryCov_9fa48("39394", "39395", "39396"), postObj && postObj.uid))));
        const userData = await user.getUsersFields(parentUids, stryMutAct_9fa48("39397") ? [] : (stryCov_9fa48("39397"), [stryMutAct_9fa48("39398") ? "" : (stryCov_9fa48("39398"), 'username')]));
        const usersMap = {};
        userData.forEach(user => {
          if (stryMutAct_9fa48("39399")) {
            {}
          } else {
            stryCov_9fa48("39399");
            usersMap[user.uid] = user.username;
          }
        });
        const parents = {};
        parentPosts.forEach((post, i) => {
          if (stryMutAct_9fa48("39400")) {
            {}
          } else {
            stryCov_9fa48("39400");
            parents[parentPids[i]] = stryMutAct_9fa48("39401") ? {} : (stryCov_9fa48("39401"), {
              username: usersMap[post.uid]
            });
          }
        });
        postData.forEach(post => {
          if (stryMutAct_9fa48("39402")) {
            {}
          } else {
            stryCov_9fa48("39402");
            post.parent = parents[post.toPid];
          }
        });
      }
    };
    Topics.calculatePostIndices = function (posts, start) {
      if (stryMutAct_9fa48("39403")) {
        {}
      } else {
        stryCov_9fa48("39403");
        posts.forEach((post, index) => {
          if (stryMutAct_9fa48("39404")) {
            {}
          } else {
            stryCov_9fa48("39404");
            if (stryMutAct_9fa48("39406") ? false : stryMutAct_9fa48("39405") ? true : (stryCov_9fa48("39405", "39406"), post)) {
              if (stryMutAct_9fa48("39407")) {
                {}
              } else {
                stryCov_9fa48("39407");
                post.index = stryMutAct_9fa48("39408") ? start + index - 1 : (stryCov_9fa48("39408"), (stryMutAct_9fa48("39409") ? start - index : (stryCov_9fa48("39409"), start + index)) + 1);
              }
            }
          }
        });
      }
    };
    Topics.getLatestUndeletedPid = async function (tid) {
      if (stryMutAct_9fa48("39410")) {
        {}
      } else {
        stryCov_9fa48("39410");
        const pid = await Topics.getLatestUndeletedReply(tid);
        if (stryMutAct_9fa48("39412") ? false : stryMutAct_9fa48("39411") ? true : (stryCov_9fa48("39411", "39412"), pid)) {
          if (stryMutAct_9fa48("39413")) {
            {}
          } else {
            stryCov_9fa48("39413");
            return pid;
          }
        }
        const mainPid = await Topics.getTopicField(tid, stryMutAct_9fa48("39414") ? "" : (stryCov_9fa48("39414"), 'mainPid'));
        const mainPost = await posts.getPostFields(mainPid, stryMutAct_9fa48("39415") ? [] : (stryCov_9fa48("39415"), [stryMutAct_9fa48("39416") ? "" : (stryCov_9fa48("39416"), 'pid'), stryMutAct_9fa48("39417") ? "" : (stryCov_9fa48("39417"), 'deleted')]));
        return (stryMutAct_9fa48("39420") ? mainPost.pid || !mainPost.deleted : stryMutAct_9fa48("39419") ? false : stryMutAct_9fa48("39418") ? true : (stryCov_9fa48("39418", "39419", "39420"), mainPost.pid && (stryMutAct_9fa48("39421") ? mainPost.deleted : (stryCov_9fa48("39421"), !mainPost.deleted)))) ? mainPost.pid : null;
      }
    };
    Topics.getLatestUndeletedReply = async function (tid) {
      if (stryMutAct_9fa48("39422")) {
        {}
      } else {
        stryCov_9fa48("39422");
        let isDeleted = stryMutAct_9fa48("39423") ? true : (stryCov_9fa48("39423"), false);
        let index = 0;
        do {
          if (stryMutAct_9fa48("39425")) {
            {}
          } else {
            stryCov_9fa48("39425");
            /* eslint-disable no-await-in-loop */
            const pids = await db.getSortedSetRevRange(stryMutAct_9fa48("39426") ? `` : (stryCov_9fa48("39426"), `tid:${tid}:posts`), index, index);
            if (stryMutAct_9fa48("39429") ? false : stryMutAct_9fa48("39428") ? true : stryMutAct_9fa48("39427") ? pids.length : (stryCov_9fa48("39427", "39428", "39429"), !pids.length)) {
              if (stryMutAct_9fa48("39430")) {
                {}
              } else {
                stryCov_9fa48("39430");
                return null;
              }
            }
            isDeleted = await posts.getPostField(pids[0], stryMutAct_9fa48("39431") ? "" : (stryCov_9fa48("39431"), 'deleted'));
            if (stryMutAct_9fa48("39434") ? false : stryMutAct_9fa48("39433") ? true : stryMutAct_9fa48("39432") ? isDeleted : (stryCov_9fa48("39432", "39433", "39434"), !isDeleted)) {
              if (stryMutAct_9fa48("39435")) {
                {}
              } else {
                stryCov_9fa48("39435");
                return parseInt(pids[0], 10);
              }
            }
            stryMutAct_9fa48("39436") ? index -= 1 : (stryCov_9fa48("39436"), index += 1);
          }
        } while (stryMutAct_9fa48("39424") ? false : (stryCov_9fa48("39424"), isDeleted));
      }
    };
    Topics.addPostToTopic = async function (tid, postData) {
      if (stryMutAct_9fa48("39437")) {
        {}
      } else {
        stryCov_9fa48("39437");
        const mainPid = await Topics.getTopicField(tid, stryMutAct_9fa48("39438") ? "" : (stryCov_9fa48("39438"), 'mainPid'));
        if (stryMutAct_9fa48("39441") ? false : stryMutAct_9fa48("39440") ? true : stryMutAct_9fa48("39439") ? parseInt(mainPid, 10) : (stryCov_9fa48("39439", "39440", "39441"), !parseInt(mainPid, 10))) {
          if (stryMutAct_9fa48("39442")) {
            {}
          } else {
            stryCov_9fa48("39442");
            await Topics.setTopicField(tid, stryMutAct_9fa48("39443") ? "" : (stryCov_9fa48("39443"), 'mainPid'), postData.pid);
          }
        } else {
          if (stryMutAct_9fa48("39444")) {
            {}
          } else {
            stryCov_9fa48("39444");
            const upvotes = stryMutAct_9fa48("39447") ? parseInt(postData.upvotes, 10) && 0 : stryMutAct_9fa48("39446") ? false : stryMutAct_9fa48("39445") ? true : (stryCov_9fa48("39445", "39446", "39447"), parseInt(postData.upvotes, 10) || 0);
            const downvotes = stryMutAct_9fa48("39450") ? parseInt(postData.downvotes, 10) && 0 : stryMutAct_9fa48("39449") ? false : stryMutAct_9fa48("39448") ? true : (stryCov_9fa48("39448", "39449", "39450"), parseInt(postData.downvotes, 10) || 0);
            const votes = stryMutAct_9fa48("39451") ? upvotes + downvotes : (stryCov_9fa48("39451"), upvotes - downvotes);
            await db.sortedSetsAdd(stryMutAct_9fa48("39452") ? [] : (stryCov_9fa48("39452"), [stryMutAct_9fa48("39453") ? `` : (stryCov_9fa48("39453"), `tid:${tid}:posts`), stryMutAct_9fa48("39454") ? `` : (stryCov_9fa48("39454"), `tid:${tid}:posts:votes`)]), stryMutAct_9fa48("39455") ? [] : (stryCov_9fa48("39455"), [postData.timestamp, votes]), postData.pid);
          }
        }
        await Topics.increasePostCount(tid);
        await db.sortedSetIncrBy(stryMutAct_9fa48("39456") ? `` : (stryCov_9fa48("39456"), `tid:${tid}:posters`), 1, postData.uid);
        const posterCount = await db.sortedSetCard(stryMutAct_9fa48("39457") ? `` : (stryCov_9fa48("39457"), `tid:${tid}:posters`));
        await Topics.setTopicField(tid, stryMutAct_9fa48("39458") ? "" : (stryCov_9fa48("39458"), 'postercount'), posterCount);
        await Topics.updateTeaser(tid);
      }
    };
    Topics.removePostFromTopic = async function (tid, postData) {
      if (stryMutAct_9fa48("39459")) {
        {}
      } else {
        stryCov_9fa48("39459");
        await db.sortedSetsRemove(stryMutAct_9fa48("39460") ? [] : (stryCov_9fa48("39460"), [stryMutAct_9fa48("39461") ? `` : (stryCov_9fa48("39461"), `tid:${tid}:posts`), stryMutAct_9fa48("39462") ? `` : (stryCov_9fa48("39462"), `tid:${tid}:posts:votes`)]), postData.pid);
        await Topics.decreasePostCount(tid);
        await db.sortedSetIncrBy(stryMutAct_9fa48("39463") ? `` : (stryCov_9fa48("39463"), `tid:${tid}:posters`), stryMutAct_9fa48("39464") ? +1 : (stryCov_9fa48("39464"), -1), postData.uid);
        await db.sortedSetsRemoveRangeByScore(stryMutAct_9fa48("39465") ? [] : (stryCov_9fa48("39465"), [stryMutAct_9fa48("39466") ? `` : (stryCov_9fa48("39466"), `tid:${tid}:posters`)]), stryMutAct_9fa48("39467") ? "" : (stryCov_9fa48("39467"), '-inf'), 0);
        const posterCount = await db.sortedSetCard(stryMutAct_9fa48("39468") ? `` : (stryCov_9fa48("39468"), `tid:${tid}:posters`));
        await Topics.setTopicField(tid, stryMutAct_9fa48("39469") ? "" : (stryCov_9fa48("39469"), 'postercount'), posterCount);
        await Topics.updateTeaser(tid);
      }
    };
    Topics.getPids = async function (tid) {
      if (stryMutAct_9fa48("39470")) {
        {}
      } else {
        stryCov_9fa48("39470");
        let [mainPid, pids] = await Promise.all(stryMutAct_9fa48("39471") ? [] : (stryCov_9fa48("39471"), [Topics.getTopicField(tid, stryMutAct_9fa48("39472") ? "" : (stryCov_9fa48("39472"), 'mainPid')), db.getSortedSetRange(stryMutAct_9fa48("39473") ? `` : (stryCov_9fa48("39473"), `tid:${tid}:posts`), 0, stryMutAct_9fa48("39474") ? +1 : (stryCov_9fa48("39474"), -1))]));
        if (stryMutAct_9fa48("39476") ? false : stryMutAct_9fa48("39475") ? true : (stryCov_9fa48("39475", "39476"), parseInt(mainPid, 10))) {
          if (stryMutAct_9fa48("39477")) {
            {}
          } else {
            stryCov_9fa48("39477");
            pids = (stryMutAct_9fa48("39478") ? [] : (stryCov_9fa48("39478"), [mainPid])).concat(pids);
          }
        }
        return pids;
      }
    };
    Topics.increasePostCount = async function (tid) {
      if (stryMutAct_9fa48("39479")) {
        {}
      } else {
        stryCov_9fa48("39479");
        incrementFieldAndUpdateSortedSet(tid, stryMutAct_9fa48("39480") ? "" : (stryCov_9fa48("39480"), 'postcount'), 1, stryMutAct_9fa48("39481") ? "" : (stryCov_9fa48("39481"), 'topics:posts'));
      }
    };
    Topics.decreasePostCount = async function (tid) {
      if (stryMutAct_9fa48("39482")) {
        {}
      } else {
        stryCov_9fa48("39482");
        incrementFieldAndUpdateSortedSet(tid, stryMutAct_9fa48("39483") ? "" : (stryCov_9fa48("39483"), 'postcount'), stryMutAct_9fa48("39484") ? +1 : (stryCov_9fa48("39484"), -1), stryMutAct_9fa48("39485") ? "" : (stryCov_9fa48("39485"), 'topics:posts'));
      }
    };
    Topics.increaseViewCount = async function (tid) {
      if (stryMutAct_9fa48("39486")) {
        {}
      } else {
        stryCov_9fa48("39486");
        const cid = await Topics.getTopicField(tid, stryMutAct_9fa48("39487") ? "" : (stryCov_9fa48("39487"), 'cid'));
        incrementFieldAndUpdateSortedSet(tid, stryMutAct_9fa48("39488") ? "" : (stryCov_9fa48("39488"), 'viewcount'), 1, stryMutAct_9fa48("39489") ? [] : (stryCov_9fa48("39489"), [stryMutAct_9fa48("39490") ? "" : (stryCov_9fa48("39490"), 'topics:views'), stryMutAct_9fa48("39491") ? `` : (stryCov_9fa48("39491"), `cid:${cid}:tids:views`)]));
      }
    };
    async function incrementFieldAndUpdateSortedSet(tid, field, by, set) {
      if (stryMutAct_9fa48("39492")) {
        {}
      } else {
        stryCov_9fa48("39492");
        const value = await db.incrObjectFieldBy(stryMutAct_9fa48("39493") ? `` : (stryCov_9fa48("39493"), `topic:${tid}`), field, by);
        await db[Array.isArray(set) ? stryMutAct_9fa48("39494") ? "" : (stryCov_9fa48("39494"), 'sortedSetsAdd') : stryMutAct_9fa48("39495") ? "" : (stryCov_9fa48("39495"), 'sortedSetAdd')](set, value, tid);
      }
    }
    Topics.getTitleByPid = async function (pid) {
      if (stryMutAct_9fa48("39496")) {
        {}
      } else {
        stryCov_9fa48("39496");
        return await Topics.getTopicFieldByPid(stryMutAct_9fa48("39497") ? "" : (stryCov_9fa48("39497"), 'title'), pid);
      }
    };
    Topics.getTopicFieldByPid = async function (field, pid) {
      if (stryMutAct_9fa48("39498")) {
        {}
      } else {
        stryCov_9fa48("39498");
        const tid = await posts.getPostField(pid, stryMutAct_9fa48("39499") ? "" : (stryCov_9fa48("39499"), 'tid'));
        return await Topics.getTopicField(tid, field);
      }
    };
    Topics.getTopicDataByPid = async function (pid) {
      if (stryMutAct_9fa48("39500")) {
        {}
      } else {
        stryCov_9fa48("39500");
        const tid = await posts.getPostField(pid, stryMutAct_9fa48("39501") ? "" : (stryCov_9fa48("39501"), 'tid'));
        return await Topics.getTopicData(tid);
      }
    };
    Topics.getPostCount = async function (tid) {
      if (stryMutAct_9fa48("39502")) {
        {}
      } else {
        stryCov_9fa48("39502");
        return await db.getObjectField(stryMutAct_9fa48("39503") ? `` : (stryCov_9fa48("39503"), `topic:${tid}`), stryMutAct_9fa48("39504") ? "" : (stryCov_9fa48("39504"), 'postcount'));
      }
    };
    async function getPostReplies(pids, callerUid) {
      if (stryMutAct_9fa48("39505")) {
        {}
      } else {
        stryCov_9fa48("39505");
        const keys = pids.map(stryMutAct_9fa48("39506") ? () => undefined : (stryCov_9fa48("39506"), pid => stryMutAct_9fa48("39507") ? `` : (stryCov_9fa48("39507"), `pid:${pid}:replies`)));
        const arrayOfReplyPids = await db.getSortedSetsMembers(keys);
        const uniquePids = _.uniq(_.flatten(arrayOfReplyPids));
        let replyData = await posts.getPostsFields(uniquePids, stryMutAct_9fa48("39508") ? [] : (stryCov_9fa48("39508"), [stryMutAct_9fa48("39509") ? "" : (stryCov_9fa48("39509"), 'pid'), stryMutAct_9fa48("39510") ? "" : (stryCov_9fa48("39510"), 'uid'), stryMutAct_9fa48("39511") ? "" : (stryCov_9fa48("39511"), 'timestamp')]));
        const result = await plugins.hooks.fire(stryMutAct_9fa48("39512") ? "" : (stryCov_9fa48("39512"), 'filter:topics.getPostReplies'), stryMutAct_9fa48("39513") ? {} : (stryCov_9fa48("39513"), {
          uid: callerUid,
          replies: replyData
        }));
        replyData = await (stryMutAct_9fa48("39514") ? user.blocks : (stryCov_9fa48("39514"), user.blocks.filter(callerUid, result.replies)));
        const uids = replyData.map(stryMutAct_9fa48("39515") ? () => undefined : (stryCov_9fa48("39515"), replyData => stryMutAct_9fa48("39518") ? replyData || replyData.uid : stryMutAct_9fa48("39517") ? false : stryMutAct_9fa48("39516") ? true : (stryCov_9fa48("39516", "39517", "39518"), replyData && replyData.uid)));
        const uniqueUids = _.uniq(uids);
        const userData = await user.getUsersWithFields(uniqueUids, stryMutAct_9fa48("39519") ? [] : (stryCov_9fa48("39519"), [stryMutAct_9fa48("39520") ? "" : (stryCov_9fa48("39520"), 'uid'), stryMutAct_9fa48("39521") ? "" : (stryCov_9fa48("39521"), 'username'), stryMutAct_9fa48("39522") ? "" : (stryCov_9fa48("39522"), 'userslug'), stryMutAct_9fa48("39523") ? "" : (stryCov_9fa48("39523"), 'picture')]), callerUid);
        const uidMap = _.zipObject(uniqueUids, userData);
        const pidMap = _.zipObject(replyData.map(stryMutAct_9fa48("39524") ? () => undefined : (stryCov_9fa48("39524"), r => r.pid)), replyData);
        const returnData = arrayOfReplyPids.map(replyPids => {
          if (stryMutAct_9fa48("39525")) {
            {}
          } else {
            stryCov_9fa48("39525");
            replyPids = stryMutAct_9fa48("39526") ? replyPids : (stryCov_9fa48("39526"), replyPids.filter(stryMutAct_9fa48("39527") ? () => undefined : (stryCov_9fa48("39527"), pid => pidMap[pid])));
            const uidsUsed = {};
            const currentData = stryMutAct_9fa48("39528") ? {} : (stryCov_9fa48("39528"), {
              hasMore: stryMutAct_9fa48("39529") ? true : (stryCov_9fa48("39529"), false),
              users: stryMutAct_9fa48("39530") ? ["Stryker was here"] : (stryCov_9fa48("39530"), []),
              text: (stryMutAct_9fa48("39534") ? replyPids.length <= 1 : stryMutAct_9fa48("39533") ? replyPids.length >= 1 : stryMutAct_9fa48("39532") ? false : stryMutAct_9fa48("39531") ? true : (stryCov_9fa48("39531", "39532", "39533", "39534"), replyPids.length > 1)) ? stryMutAct_9fa48("39535") ? `` : (stryCov_9fa48("39535"), `[[topic:replies_to_this_post, ${replyPids.length}]]`) : stryMutAct_9fa48("39536") ? "" : (stryCov_9fa48("39536"), '[[topic:one_reply_to_this_post]]'),
              count: replyPids.length,
              timestampISO: replyPids.length ? utils.toISOString(pidMap[replyPids[0]].timestamp) : undefined
            });
            stryMutAct_9fa48("39537") ? replyPids : (stryCov_9fa48("39537"), replyPids.sort(stryMutAct_9fa48("39538") ? () => undefined : (stryCov_9fa48("39538"), (a, b) => stryMutAct_9fa48("39539") ? parseInt(a, 10) + parseInt(b, 10) : (stryCov_9fa48("39539"), parseInt(a, 10) - parseInt(b, 10)))));
            replyPids.forEach(replyPid => {
              if (stryMutAct_9fa48("39540")) {
                {}
              } else {
                stryCov_9fa48("39540");
                const replyData = pidMap[replyPid];
                if (stryMutAct_9fa48("39543") ? !uidsUsed[replyData.uid] || currentData.users.length < 6 : stryMutAct_9fa48("39542") ? false : stryMutAct_9fa48("39541") ? true : (stryCov_9fa48("39541", "39542", "39543"), (stryMutAct_9fa48("39544") ? uidsUsed[replyData.uid] : (stryCov_9fa48("39544"), !uidsUsed[replyData.uid])) && (stryMutAct_9fa48("39547") ? currentData.users.length >= 6 : stryMutAct_9fa48("39546") ? currentData.users.length <= 6 : stryMutAct_9fa48("39545") ? true : (stryCov_9fa48("39545", "39546", "39547"), currentData.users.length < 6)))) {
                  if (stryMutAct_9fa48("39548")) {
                    {}
                  } else {
                    stryCov_9fa48("39548");
                    currentData.users.push(uidMap[replyData.uid]);
                    uidsUsed[replyData.uid] = stryMutAct_9fa48("39549") ? false : (stryCov_9fa48("39549"), true);
                  }
                }
              }
            });
            if (stryMutAct_9fa48("39553") ? currentData.users.length <= 5 : stryMutAct_9fa48("39552") ? currentData.users.length >= 5 : stryMutAct_9fa48("39551") ? false : stryMutAct_9fa48("39550") ? true : (stryCov_9fa48("39550", "39551", "39552", "39553"), currentData.users.length > 5)) {
              if (stryMutAct_9fa48("39554")) {
                {}
              } else {
                stryCov_9fa48("39554");
                currentData.users.pop();
                currentData.hasMore = stryMutAct_9fa48("39555") ? false : (stryCov_9fa48("39555"), true);
              }
            }
            return currentData;
          }
        });
        return returnData;
      }
    }
    Topics.syncBacklinks = async postData => {
      if (stryMutAct_9fa48("39556")) {
        {}
      } else {
        stryCov_9fa48("39556");
        if (stryMutAct_9fa48("39559") ? false : stryMutAct_9fa48("39558") ? true : stryMutAct_9fa48("39557") ? postData : (stryCov_9fa48("39557", "39558", "39559"), !postData)) {
          if (stryMutAct_9fa48("39560")) {
            {}
          } else {
            stryCov_9fa48("39560");
            throw new Error(stryMutAct_9fa48("39561") ? "" : (stryCov_9fa48("39561"), '[[error:invalid-data]]'));
          }
        }

        // Scan post content for topic links
        const matches = stryMutAct_9fa48("39562") ? [] : (stryCov_9fa48("39562"), [...postData.content.matchAll(backlinkRegex)]);
        if (stryMutAct_9fa48("39565") ? false : stryMutAct_9fa48("39564") ? true : stryMutAct_9fa48("39563") ? matches : (stryCov_9fa48("39563", "39564", "39565"), !matches)) {
          if (stryMutAct_9fa48("39566")) {
            {}
          } else {
            stryCov_9fa48("39566");
            return 0;
          }
        }
        const {
          pid,
          uid,
          tid
        } = postData;
        let add = _.uniq(matches.map(stryMutAct_9fa48("39567") ? () => undefined : (stryCov_9fa48("39567"), match => match[1])).map(stryMutAct_9fa48("39568") ? () => undefined : (stryCov_9fa48("39568"), tid => parseInt(tid, 10))));
        const now = Date.now();
        const topicsExist = await Topics.exists(add);
        const current = (await db.getSortedSetMembers(stryMutAct_9fa48("39569") ? `` : (stryCov_9fa48("39569"), `pid:${pid}:backlinks`))).map(stryMutAct_9fa48("39570") ? () => undefined : (stryCov_9fa48("39570"), tid => parseInt(tid, 10)));
        const remove = stryMutAct_9fa48("39571") ? current : (stryCov_9fa48("39571"), current.filter(stryMutAct_9fa48("39572") ? () => undefined : (stryCov_9fa48("39572"), tid => stryMutAct_9fa48("39573") ? add.includes(tid) : (stryCov_9fa48("39573"), !add.includes(tid)))));
        add = stryMutAct_9fa48("39574") ? add : (stryCov_9fa48("39574"), add.filter(stryMutAct_9fa48("39575") ? () => undefined : (stryCov_9fa48("39575"), (_tid, idx) => stryMutAct_9fa48("39578") ? topicsExist[idx] && !current.includes(_tid) || tid !== _tid : stryMutAct_9fa48("39577") ? false : stryMutAct_9fa48("39576") ? true : (stryCov_9fa48("39576", "39577", "39578"), (stryMutAct_9fa48("39580") ? topicsExist[idx] || !current.includes(_tid) : stryMutAct_9fa48("39579") ? true : (stryCov_9fa48("39579", "39580"), topicsExist[idx] && (stryMutAct_9fa48("39581") ? current.includes(_tid) : (stryCov_9fa48("39581"), !current.includes(_tid))))) && (stryMutAct_9fa48("39583") ? tid === _tid : stryMutAct_9fa48("39582") ? true : (stryCov_9fa48("39582", "39583"), tid !== _tid))))));

        // Remove old backlinks
        await db.sortedSetRemove(stryMutAct_9fa48("39584") ? `` : (stryCov_9fa48("39584"), `pid:${pid}:backlinks`), remove);

        // Add new backlinks
        await db.sortedSetAdd(stryMutAct_9fa48("39585") ? `` : (stryCov_9fa48("39585"), `pid:${pid}:backlinks`), add.map(stryMutAct_9fa48("39586") ? () => undefined : (stryCov_9fa48("39586"), () => now)), add);
        await Promise.all(add.map(async tid => {
          if (stryMutAct_9fa48("39587")) {
            {}
          } else {
            stryCov_9fa48("39587");
            await Topics.events.log(tid, stryMutAct_9fa48("39588") ? {} : (stryCov_9fa48("39588"), {
              uid,
              type: stryMutAct_9fa48("39589") ? "" : (stryCov_9fa48("39589"), 'backlink'),
              href: stryMutAct_9fa48("39590") ? `` : (stryCov_9fa48("39590"), `/post/${pid}`)
            }));
          }
        }));
        return stryMutAct_9fa48("39591") ? add.length - (current - remove) : (stryCov_9fa48("39591"), add.length + (stryMutAct_9fa48("39592") ? current + remove : (stryCov_9fa48("39592"), current - remove)));
      }
    };
  }
};