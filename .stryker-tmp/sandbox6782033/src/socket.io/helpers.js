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
const websockets = require('./index');
const user = require('../user');
const posts = require('../posts');
const topics = require('../topics');
const categories = require('../categories');
const privileges = require('../privileges');
const notifications = require('../notifications');
const plugins = require('../plugins');
const utils = require('../utils');
const batch = require('../batch');
const SocketHelpers = module.exports;
SocketHelpers.notifyNew = async function (uid, type, result) {
  if (stryMutAct_9fa48("35800")) {
    {}
  } else {
    stryCov_9fa48("35800");
    let uids = await user.getUidsFromSet(stryMutAct_9fa48("35801") ? "" : (stryCov_9fa48("35801"), 'users:online'), 0, stryMutAct_9fa48("35802") ? +1 : (stryCov_9fa48("35802"), -1));
    uids = stryMutAct_9fa48("35803") ? uids : (stryCov_9fa48("35803"), uids.filter(stryMutAct_9fa48("35804") ? () => undefined : (stryCov_9fa48("35804"), toUid => stryMutAct_9fa48("35807") ? parseInt(toUid, 10) === uid : stryMutAct_9fa48("35806") ? false : stryMutAct_9fa48("35805") ? true : (stryCov_9fa48("35805", "35806", "35807"), parseInt(toUid, 10) !== uid))));
    await batch.processArray(uids, async uids => {
      if (stryMutAct_9fa48("35808")) {
        {}
      } else {
        stryCov_9fa48("35808");
        await notifyUids(uid, uids, type, result);
      }
    }, stryMutAct_9fa48("35809") ? {} : (stryCov_9fa48("35809"), {
      interval: 1000
    }));
  }
};
async function notifyUids(uid, uids, type, result) {
  if (stryMutAct_9fa48("35810")) {
    {}
  } else {
    stryCov_9fa48("35810");
    const post = result.posts[0];
    const {
      tid
    } = post.topic;
    const {
      cid
    } = post.topic;
    uids = await privileges.topics.filterUids(stryMutAct_9fa48("35811") ? "" : (stryCov_9fa48("35811"), 'topics:read'), tid, uids);
    const watchStateUids = uids;
    const watchStates = await getWatchStates(watchStateUids, tid, cid);
    const categoryWatchStates = _.zipObject(watchStateUids, watchStates.categoryWatchStates);
    const topicFollowState = _.zipObject(watchStateUids, watchStates.topicFollowed);
    uids = filterTidCidIgnorers(watchStateUids, watchStates);
    uids = await user.blocks.filterUids(uid, uids);
    uids = await user.blocks.filterUids(post.topic.uid, uids);
    const data = await plugins.hooks.fire(stryMutAct_9fa48("35812") ? "" : (stryCov_9fa48("35812"), 'filter:sockets.sendNewPostToUids'), stryMutAct_9fa48("35813") ? {} : (stryCov_9fa48("35813"), {
      uidsTo: uids,
      uidFrom: uid,
      type: type,
      post: post
    }));
    post.ip = undefined;
    data.uidsTo.forEach(toUid => {
      if (stryMutAct_9fa48("35814")) {
        {}
      } else {
        stryCov_9fa48("35814");
        post.categoryWatchState = categoryWatchStates[toUid];
        post.topic.isFollowing = topicFollowState[toUid];
        websockets.in(stryMutAct_9fa48("35815") ? `` : (stryCov_9fa48("35815"), `uid_${toUid}`)).emit(stryMutAct_9fa48("35816") ? "" : (stryCov_9fa48("35816"), 'event:new_post'), result);
        if (stryMutAct_9fa48("35819") ? result.topic || type === 'newTopic' : stryMutAct_9fa48("35818") ? false : stryMutAct_9fa48("35817") ? true : (stryCov_9fa48("35817", "35818", "35819"), result.topic && (stryMutAct_9fa48("35821") ? type !== 'newTopic' : stryMutAct_9fa48("35820") ? true : (stryCov_9fa48("35820", "35821"), type === (stryMutAct_9fa48("35822") ? "" : (stryCov_9fa48("35822"), 'newTopic')))))) {
          if (stryMutAct_9fa48("35823")) {
            {}
          } else {
            stryCov_9fa48("35823");
            websockets.in(stryMutAct_9fa48("35824") ? `` : (stryCov_9fa48("35824"), `uid_${toUid}`)).emit(stryMutAct_9fa48("35825") ? "" : (stryCov_9fa48("35825"), 'event:new_topic'), result.topic);
          }
        }
      }
    });
  }
}
async function getWatchStates(uids, tid, cid) {
  if (stryMutAct_9fa48("35826")) {
    {}
  } else {
    stryCov_9fa48("35826");
    return await utils.promiseParallel(stryMutAct_9fa48("35827") ? {} : (stryCov_9fa48("35827"), {
      topicFollowed: db.isSetMembers(stryMutAct_9fa48("35828") ? `` : (stryCov_9fa48("35828"), `tid:${tid}:followers`), uids),
      topicIgnored: db.isSetMembers(stryMutAct_9fa48("35829") ? `` : (stryCov_9fa48("35829"), `tid:${tid}:ignorers`), uids),
      categoryWatchStates: categories.getUidsWatchStates(cid, uids)
    }));
  }
}
function filterTidCidIgnorers(uids, watchStates) {
  if (stryMutAct_9fa48("35830")) {
    {}
  } else {
    stryCov_9fa48("35830");
    return stryMutAct_9fa48("35831") ? uids : (stryCov_9fa48("35831"), uids.filter(stryMutAct_9fa48("35832") ? () => undefined : (stryCov_9fa48("35832"), (uid, index) => stryMutAct_9fa48("35835") ? watchStates.topicFollowed[index] && !watchStates.topicIgnored[index] && watchStates.categoryWatchStates[index] !== categories.watchStates.ignoring : stryMutAct_9fa48("35834") ? false : stryMutAct_9fa48("35833") ? true : (stryCov_9fa48("35833", "35834", "35835"), watchStates.topicFollowed[index] || (stryMutAct_9fa48("35837") ? !watchStates.topicIgnored[index] || watchStates.categoryWatchStates[index] !== categories.watchStates.ignoring : stryMutAct_9fa48("35836") ? false : (stryCov_9fa48("35836", "35837"), (stryMutAct_9fa48("35838") ? watchStates.topicIgnored[index] : (stryCov_9fa48("35838"), !watchStates.topicIgnored[index])) && (stryMutAct_9fa48("35840") ? watchStates.categoryWatchStates[index] === categories.watchStates.ignoring : stryMutAct_9fa48("35839") ? true : (stryCov_9fa48("35839", "35840"), watchStates.categoryWatchStates[index] !== categories.watchStates.ignoring))))))));
  }
}
SocketHelpers.sendNotificationToPostOwner = async function (pid, fromuid, command, notification) {
  if (stryMutAct_9fa48("35841")) {
    {}
  } else {
    stryCov_9fa48("35841");
    if (stryMutAct_9fa48("35844") ? (!pid || !fromuid) && !notification : stryMutAct_9fa48("35843") ? false : stryMutAct_9fa48("35842") ? true : (stryCov_9fa48("35842", "35843", "35844"), (stryMutAct_9fa48("35846") ? !pid && !fromuid : stryMutAct_9fa48("35845") ? false : (stryCov_9fa48("35845", "35846"), (stryMutAct_9fa48("35847") ? pid : (stryCov_9fa48("35847"), !pid)) || (stryMutAct_9fa48("35848") ? fromuid : (stryCov_9fa48("35848"), !fromuid)))) || (stryMutAct_9fa48("35849") ? notification : (stryCov_9fa48("35849"), !notification)))) {
      if (stryMutAct_9fa48("35850")) {
        {}
      } else {
        stryCov_9fa48("35850");
        return;
      }
    }
    fromuid = parseInt(fromuid, 10);
    const postData = await posts.getPostFields(pid, stryMutAct_9fa48("35851") ? [] : (stryCov_9fa48("35851"), [stryMutAct_9fa48("35852") ? "" : (stryCov_9fa48("35852"), 'tid'), stryMutAct_9fa48("35853") ? "" : (stryCov_9fa48("35853"), 'uid'), stryMutAct_9fa48("35854") ? "" : (stryCov_9fa48("35854"), 'content')]));
    const [canRead, isIgnoring] = await Promise.all(stryMutAct_9fa48("35855") ? [] : (stryCov_9fa48("35855"), [privileges.posts.can(stryMutAct_9fa48("35856") ? "" : (stryCov_9fa48("35856"), 'topics:read'), pid, postData.uid), topics.isIgnoring(stryMutAct_9fa48("35857") ? [] : (stryCov_9fa48("35857"), [postData.tid]), postData.uid)]));
    if (stryMutAct_9fa48("35860") ? (!canRead || isIgnoring[0] || !postData.uid) && fromuid === postData.uid : stryMutAct_9fa48("35859") ? false : stryMutAct_9fa48("35858") ? true : (stryCov_9fa48("35858", "35859", "35860"), (stryMutAct_9fa48("35862") ? (!canRead || isIgnoring[0]) && !postData.uid : stryMutAct_9fa48("35861") ? false : (stryCov_9fa48("35861", "35862"), (stryMutAct_9fa48("35864") ? !canRead && isIgnoring[0] : stryMutAct_9fa48("35863") ? false : (stryCov_9fa48("35863", "35864"), (stryMutAct_9fa48("35865") ? canRead : (stryCov_9fa48("35865"), !canRead)) || isIgnoring[0])) || (stryMutAct_9fa48("35866") ? postData.uid : (stryCov_9fa48("35866"), !postData.uid)))) || (stryMutAct_9fa48("35868") ? fromuid !== postData.uid : stryMutAct_9fa48("35867") ? false : (stryCov_9fa48("35867", "35868"), fromuid === postData.uid)))) {
      if (stryMutAct_9fa48("35869")) {
        {}
      } else {
        stryCov_9fa48("35869");
        return;
      }
    }
    const [userData, topicTitle, postObj] = await Promise.all(stryMutAct_9fa48("35870") ? [] : (stryCov_9fa48("35870"), [user.getUserFields(fromuid, stryMutAct_9fa48("35871") ? [] : (stryCov_9fa48("35871"), [stryMutAct_9fa48("35872") ? "" : (stryCov_9fa48("35872"), 'username')])), topics.getTopicField(postData.tid, stryMutAct_9fa48("35873") ? "" : (stryCov_9fa48("35873"), 'title')), posts.parsePost(postData)]));
    const {
      displayname
    } = userData;
    const title = utils.decodeHTMLEntities(topicTitle);
    const titleEscaped = title.replace(/%/g, stryMutAct_9fa48("35874") ? "" : (stryCov_9fa48("35874"), '&#37;')).replace(/,/g, stryMutAct_9fa48("35875") ? "" : (stryCov_9fa48("35875"), '&#44;'));
    const notifObj = await notifications.create(stryMutAct_9fa48("35876") ? {} : (stryCov_9fa48("35876"), {
      type: command,
      bodyShort: stryMutAct_9fa48("35877") ? `` : (stryCov_9fa48("35877"), `[[${notification}, ${displayname}, ${titleEscaped}]]`),
      bodyLong: postObj.content,
      pid: pid,
      tid: postData.tid,
      path: stryMutAct_9fa48("35878") ? `` : (stryCov_9fa48("35878"), `/post/${pid}`),
      nid: stryMutAct_9fa48("35879") ? `` : (stryCov_9fa48("35879"), `${command}:post:${pid}:uid:${fromuid}`),
      from: fromuid,
      mergeId: stryMutAct_9fa48("35880") ? `` : (stryCov_9fa48("35880"), `${notification}|${pid}`),
      topicTitle: topicTitle
    }));
    notifications.push(notifObj, stryMutAct_9fa48("35881") ? [] : (stryCov_9fa48("35881"), [postData.uid]));
  }
};
SocketHelpers.sendNotificationToTopicOwner = async function (tid, fromuid, command, notification) {
  if (stryMutAct_9fa48("35882")) {
    {}
  } else {
    stryCov_9fa48("35882");
    if (stryMutAct_9fa48("35885") ? (!tid || !fromuid) && !notification : stryMutAct_9fa48("35884") ? false : stryMutAct_9fa48("35883") ? true : (stryCov_9fa48("35883", "35884", "35885"), (stryMutAct_9fa48("35887") ? !tid && !fromuid : stryMutAct_9fa48("35886") ? false : (stryCov_9fa48("35886", "35887"), (stryMutAct_9fa48("35888") ? tid : (stryCov_9fa48("35888"), !tid)) || (stryMutAct_9fa48("35889") ? fromuid : (stryCov_9fa48("35889"), !fromuid)))) || (stryMutAct_9fa48("35890") ? notification : (stryCov_9fa48("35890"), !notification)))) {
      if (stryMutAct_9fa48("35891")) {
        {}
      } else {
        stryCov_9fa48("35891");
        return;
      }
    }
    fromuid = parseInt(fromuid, 10);
    const [userData, topicData] = await Promise.all(stryMutAct_9fa48("35892") ? [] : (stryCov_9fa48("35892"), [user.getUserFields(fromuid, stryMutAct_9fa48("35893") ? [] : (stryCov_9fa48("35893"), [stryMutAct_9fa48("35894") ? "" : (stryCov_9fa48("35894"), 'username')])), topics.getTopicFields(tid, stryMutAct_9fa48("35895") ? [] : (stryCov_9fa48("35895"), [stryMutAct_9fa48("35896") ? "" : (stryCov_9fa48("35896"), 'uid'), stryMutAct_9fa48("35897") ? "" : (stryCov_9fa48("35897"), 'slug'), stryMutAct_9fa48("35898") ? "" : (stryCov_9fa48("35898"), 'title')]))]));
    if (stryMutAct_9fa48("35901") ? fromuid !== topicData.uid : stryMutAct_9fa48("35900") ? false : stryMutAct_9fa48("35899") ? true : (stryCov_9fa48("35899", "35900", "35901"), fromuid === topicData.uid)) {
      if (stryMutAct_9fa48("35902")) {
        {}
      } else {
        stryCov_9fa48("35902");
        return;
      }
    }
    const {
      displayname
    } = userData;
    const ownerUid = topicData.uid;
    const title = utils.decodeHTMLEntities(topicData.title);
    const titleEscaped = title.replace(/%/g, stryMutAct_9fa48("35903") ? "" : (stryCov_9fa48("35903"), '&#37;')).replace(/,/g, stryMutAct_9fa48("35904") ? "" : (stryCov_9fa48("35904"), '&#44;'));
    const notifObj = await notifications.create(stryMutAct_9fa48("35905") ? {} : (stryCov_9fa48("35905"), {
      bodyShort: stryMutAct_9fa48("35906") ? `` : (stryCov_9fa48("35906"), `[[${notification}, ${displayname}, ${titleEscaped}]]`),
      path: stryMutAct_9fa48("35907") ? `` : (stryCov_9fa48("35907"), `/topic/${topicData.slug}`),
      nid: stryMutAct_9fa48("35908") ? `` : (stryCov_9fa48("35908"), `${command}:tid:${tid}:uid:${fromuid}`),
      from: fromuid
    }));
    if (stryMutAct_9fa48("35910") ? false : stryMutAct_9fa48("35909") ? true : (stryCov_9fa48("35909", "35910"), ownerUid)) {
      if (stryMutAct_9fa48("35911")) {
        {}
      } else {
        stryCov_9fa48("35911");
        notifications.push(notifObj, stryMutAct_9fa48("35912") ? [] : (stryCov_9fa48("35912"), [ownerUid]));
      }
    }
  }
};
SocketHelpers.upvote = async function (data, notification) {
  if (stryMutAct_9fa48("35913")) {
    {}
  } else {
    stryCov_9fa48("35913");
    if (stryMutAct_9fa48("35916") ? (!data || !data.post || !data.post.uid || !data.post.votes || !data.post.pid) && !data.fromuid : stryMutAct_9fa48("35915") ? false : stryMutAct_9fa48("35914") ? true : (stryCov_9fa48("35914", "35915", "35916"), (stryMutAct_9fa48("35918") ? (!data || !data.post || !data.post.uid || !data.post.votes) && !data.post.pid : stryMutAct_9fa48("35917") ? false : (stryCov_9fa48("35917", "35918"), (stryMutAct_9fa48("35920") ? (!data || !data.post || !data.post.uid) && !data.post.votes : stryMutAct_9fa48("35919") ? false : (stryCov_9fa48("35919", "35920"), (stryMutAct_9fa48("35922") ? (!data || !data.post) && !data.post.uid : stryMutAct_9fa48("35921") ? false : (stryCov_9fa48("35921", "35922"), (stryMutAct_9fa48("35924") ? !data && !data.post : stryMutAct_9fa48("35923") ? false : (stryCov_9fa48("35923", "35924"), (stryMutAct_9fa48("35925") ? data : (stryCov_9fa48("35925"), !data)) || (stryMutAct_9fa48("35926") ? data.post : (stryCov_9fa48("35926"), !data.post)))) || (stryMutAct_9fa48("35927") ? data.post.uid : (stryCov_9fa48("35927"), !data.post.uid)))) || (stryMutAct_9fa48("35928") ? data.post.votes : (stryCov_9fa48("35928"), !data.post.votes)))) || (stryMutAct_9fa48("35929") ? data.post.pid : (stryCov_9fa48("35929"), !data.post.pid)))) || (stryMutAct_9fa48("35930") ? data.fromuid : (stryCov_9fa48("35930"), !data.fromuid)))) {
      if (stryMutAct_9fa48("35931")) {
        {}
      } else {
        stryCov_9fa48("35931");
        return;
      }
    }
    const {
      votes
    } = data.post;
    const touid = data.post.uid;
    const {
      fromuid
    } = data;
    const {
      pid
    } = data.post;
    const shouldNotify = stryMutAct_9fa48("35932") ? {} : (stryCov_9fa48("35932"), {
      all: function () {
        if (stryMutAct_9fa48("35933")) {
          {}
        } else {
          stryCov_9fa48("35933");
          return stryMutAct_9fa48("35937") ? votes <= 0 : stryMutAct_9fa48("35936") ? votes >= 0 : stryMutAct_9fa48("35935") ? false : stryMutAct_9fa48("35934") ? true : (stryCov_9fa48("35934", "35935", "35936", "35937"), votes > 0);
        }
      },
      first: function () {
        if (stryMutAct_9fa48("35938")) {
          {}
        } else {
          stryCov_9fa48("35938");
          return stryMutAct_9fa48("35941") ? votes !== 1 : stryMutAct_9fa48("35940") ? false : stryMutAct_9fa48("35939") ? true : (stryCov_9fa48("35939", "35940", "35941"), votes === 1);
        }
      },
      everyTen: function () {
        if (stryMutAct_9fa48("35942")) {
          {}
        } else {
          stryCov_9fa48("35942");
          return stryMutAct_9fa48("35945") ? votes > 0 || votes % 10 === 0 : stryMutAct_9fa48("35944") ? false : stryMutAct_9fa48("35943") ? true : (stryCov_9fa48("35943", "35944", "35945"), (stryMutAct_9fa48("35948") ? votes <= 0 : stryMutAct_9fa48("35947") ? votes >= 0 : stryMutAct_9fa48("35946") ? true : (stryCov_9fa48("35946", "35947", "35948"), votes > 0)) && (stryMutAct_9fa48("35950") ? votes % 10 !== 0 : stryMutAct_9fa48("35949") ? true : (stryCov_9fa48("35949", "35950"), (stryMutAct_9fa48("35951") ? votes * 10 : (stryCov_9fa48("35951"), votes % 10)) === 0)));
        }
      },
      threshold: function () {
        if (stryMutAct_9fa48("35952")) {
          {}
        } else {
          stryCov_9fa48("35952");
          return stryMutAct_9fa48("35955") ? [1, 5, 10, 25].includes(votes) && votes >= 50 && votes % 50 === 0 : stryMutAct_9fa48("35954") ? false : stryMutAct_9fa48("35953") ? true : (stryCov_9fa48("35953", "35954", "35955"), (stryMutAct_9fa48("35956") ? [] : (stryCov_9fa48("35956"), [1, 5, 10, 25])).includes(votes) || (stryMutAct_9fa48("35958") ? votes >= 50 || votes % 50 === 0 : stryMutAct_9fa48("35957") ? false : (stryCov_9fa48("35957", "35958"), (stryMutAct_9fa48("35961") ? votes < 50 : stryMutAct_9fa48("35960") ? votes > 50 : stryMutAct_9fa48("35959") ? true : (stryCov_9fa48("35959", "35960", "35961"), votes >= 50)) && (stryMutAct_9fa48("35963") ? votes % 50 !== 0 : stryMutAct_9fa48("35962") ? true : (stryCov_9fa48("35962", "35963"), (stryMutAct_9fa48("35964") ? votes * 50 : (stryCov_9fa48("35964"), votes % 50)) === 0)))));
        }
      },
      logarithmic: function () {
        if (stryMutAct_9fa48("35965")) {
          {}
        } else {
          stryCov_9fa48("35965");
          return stryMutAct_9fa48("35968") ? votes > 1 || Math.log10(votes) % 1 === 0 : stryMutAct_9fa48("35967") ? false : stryMutAct_9fa48("35966") ? true : (stryCov_9fa48("35966", "35967", "35968"), (stryMutAct_9fa48("35971") ? votes <= 1 : stryMutAct_9fa48("35970") ? votes >= 1 : stryMutAct_9fa48("35969") ? true : (stryCov_9fa48("35969", "35970", "35971"), votes > 1)) && (stryMutAct_9fa48("35973") ? Math.log10(votes) % 1 !== 0 : stryMutAct_9fa48("35972") ? true : (stryCov_9fa48("35972", "35973"), (stryMutAct_9fa48("35974") ? Math.log10(votes) * 1 : (stryCov_9fa48("35974"), Math.log10(votes) % 1)) === 0)));
        }
      },
      disabled: function () {
        if (stryMutAct_9fa48("35975")) {
          {}
        } else {
          stryCov_9fa48("35975");
          return stryMutAct_9fa48("35976") ? true : (stryCov_9fa48("35976"), false);
        }
      }
    });
    const settings = await user.getSettings(touid);
    const should = stryMutAct_9fa48("35979") ? shouldNotify[settings.upvoteNotifFreq] && shouldNotify.all : stryMutAct_9fa48("35978") ? false : stryMutAct_9fa48("35977") ? true : (stryCov_9fa48("35977", "35978", "35979"), shouldNotify[settings.upvoteNotifFreq] || shouldNotify.all);
    if (stryMutAct_9fa48("35981") ? false : stryMutAct_9fa48("35980") ? true : (stryCov_9fa48("35980", "35981"), should())) {
      if (stryMutAct_9fa48("35982")) {
        {}
      } else {
        stryCov_9fa48("35982");
        SocketHelpers.sendNotificationToPostOwner(pid, fromuid, stryMutAct_9fa48("35983") ? "" : (stryCov_9fa48("35983"), 'upvote'), notification);
      }
    }
  }
};
SocketHelpers.rescindUpvoteNotification = async function (pid, fromuid) {
  if (stryMutAct_9fa48("35984")) {
    {}
  } else {
    stryCov_9fa48("35984");
    await notifications.rescind(stryMutAct_9fa48("35985") ? `` : (stryCov_9fa48("35985"), `upvote:post:${pid}:uid:${fromuid}`));
    const uid = await posts.getPostField(pid, stryMutAct_9fa48("35986") ? "" : (stryCov_9fa48("35986"), 'uid'));
    const count = await user.notifications.getUnreadCount(uid);
    websockets.in(stryMutAct_9fa48("35987") ? `` : (stryCov_9fa48("35987"), `uid_${uid}`)).emit(stryMutAct_9fa48("35988") ? "" : (stryCov_9fa48("35988"), 'event:notifications.updateCount'), count);
  }
};
SocketHelpers.emitToUids = async function (event, data, uids) {
  if (stryMutAct_9fa48("35989")) {
    {}
  } else {
    stryCov_9fa48("35989");
    uids.forEach(stryMutAct_9fa48("35990") ? () => undefined : (stryCov_9fa48("35990"), toUid => websockets.in(stryMutAct_9fa48("35991") ? `` : (stryCov_9fa48("35991"), `uid_${toUid}`)).emit(event, data)));
  }
};
require('../promisify')(SocketHelpers);