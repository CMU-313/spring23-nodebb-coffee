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
const db = require('../database');
const posts = require('../posts');
const privileges = require('../privileges');
const plugins = require('../plugins');
const meta = require('../meta');
const topics = require('../topics');
const user = require('../user');
const notifications = require('../notifications');
const utils = require('../utils');
const events = require('../events');
const SocketPosts = module.exports;
require('./posts/votes')(SocketPosts);
require('./posts/tools')(SocketPosts);
SocketPosts.getRawPost = async function (socket, pid) {
  if (stryMutAct_9fa48("36700")) {
    {}
  } else {
    stryCov_9fa48("36700");
    const canRead = await privileges.posts.can(stryMutAct_9fa48("36701") ? "" : (stryCov_9fa48("36701"), 'topics:read'), pid, socket.uid);
    if (stryMutAct_9fa48("36704") ? false : stryMutAct_9fa48("36703") ? true : stryMutAct_9fa48("36702") ? canRead : (stryCov_9fa48("36702", "36703", "36704"), !canRead)) {
      if (stryMutAct_9fa48("36705")) {
        {}
      } else {
        stryCov_9fa48("36705");
        throw new Error(stryMutAct_9fa48("36706") ? "" : (stryCov_9fa48("36706"), '[[error:no-privileges]]'));
      }
    }
    const postData = await posts.getPostFields(pid, stryMutAct_9fa48("36707") ? [] : (stryCov_9fa48("36707"), [stryMutAct_9fa48("36708") ? "" : (stryCov_9fa48("36708"), 'content'), stryMutAct_9fa48("36709") ? "" : (stryCov_9fa48("36709"), 'deleted')]));
    if (stryMutAct_9fa48("36711") ? false : stryMutAct_9fa48("36710") ? true : (stryCov_9fa48("36710", "36711"), postData.deleted)) {
      if (stryMutAct_9fa48("36712")) {
        {}
      } else {
        stryCov_9fa48("36712");
        throw new Error(stryMutAct_9fa48("36713") ? "" : (stryCov_9fa48("36713"), '[[error:no-post]]'));
      }
    }
    postData.pid = pid;
    const result = await plugins.hooks.fire(stryMutAct_9fa48("36714") ? "" : (stryCov_9fa48("36714"), 'filter:post.getRawPost'), stryMutAct_9fa48("36715") ? {} : (stryCov_9fa48("36715"), {
      uid: socket.uid,
      postData: postData
    }));
    return result.postData.content;
  }
};
SocketPosts.getPostSummaryByIndex = async function (socket, data) {
  if (stryMutAct_9fa48("36716")) {
    {}
  } else {
    stryCov_9fa48("36716");
    if (stryMutAct_9fa48("36720") ? data.index >= 0 : stryMutAct_9fa48("36719") ? data.index <= 0 : stryMutAct_9fa48("36718") ? false : stryMutAct_9fa48("36717") ? true : (stryCov_9fa48("36717", "36718", "36719", "36720"), data.index < 0)) {
      if (stryMutAct_9fa48("36721")) {
        {}
      } else {
        stryCov_9fa48("36721");
        data.index = 0;
      }
    }
    let pid;
    if (stryMutAct_9fa48("36724") ? data.index !== 0 : stryMutAct_9fa48("36723") ? false : stryMutAct_9fa48("36722") ? true : (stryCov_9fa48("36722", "36723", "36724"), data.index === 0)) {
      if (stryMutAct_9fa48("36725")) {
        {}
      } else {
        stryCov_9fa48("36725");
        pid = await topics.getTopicField(data.tid, stryMutAct_9fa48("36726") ? "" : (stryCov_9fa48("36726"), 'mainPid'));
      }
    } else {
      if (stryMutAct_9fa48("36727")) {
        {}
      } else {
        stryCov_9fa48("36727");
        pid = await db.getSortedSetRange(stryMutAct_9fa48("36728") ? `` : (stryCov_9fa48("36728"), `tid:${data.tid}:posts`), stryMutAct_9fa48("36729") ? data.index + 1 : (stryCov_9fa48("36729"), data.index - 1), stryMutAct_9fa48("36730") ? data.index + 1 : (stryCov_9fa48("36730"), data.index - 1));
      }
    }
    pid = Array.isArray(pid) ? pid[0] : pid;
    if (stryMutAct_9fa48("36733") ? false : stryMutAct_9fa48("36732") ? true : stryMutAct_9fa48("36731") ? pid : (stryCov_9fa48("36731", "36732", "36733"), !pid)) {
      if (stryMutAct_9fa48("36734")) {
        {}
      } else {
        stryCov_9fa48("36734");
        return 0;
      }
    }
    const topicPrivileges = await privileges.topics.get(data.tid, socket.uid);
    if (stryMutAct_9fa48("36737") ? false : stryMutAct_9fa48("36736") ? true : stryMutAct_9fa48("36735") ? topicPrivileges['topics:read'] : (stryCov_9fa48("36735", "36736", "36737"), !topicPrivileges[stryMutAct_9fa48("36738") ? "" : (stryCov_9fa48("36738"), 'topics:read')])) {
      if (stryMutAct_9fa48("36739")) {
        {}
      } else {
        stryCov_9fa48("36739");
        throw new Error(stryMutAct_9fa48("36740") ? "" : (stryCov_9fa48("36740"), '[[error:no-privileges]]'));
      }
    }
    const postsData = await posts.getPostSummaryByPids(stryMutAct_9fa48("36741") ? [] : (stryCov_9fa48("36741"), [pid]), socket.uid, stryMutAct_9fa48("36742") ? {} : (stryCov_9fa48("36742"), {
      stripTags: stryMutAct_9fa48("36743") ? true : (stryCov_9fa48("36743"), false)
    }));
    posts.modifyPostByPrivilege(postsData[0], topicPrivileges);
    return postsData[0];
  }
};
SocketPosts.getPostSummaryByPid = async function (socket, data) {
  if (stryMutAct_9fa48("36744")) {
    {}
  } else {
    stryCov_9fa48("36744");
    if (stryMutAct_9fa48("36747") ? !data && !data.pid : stryMutAct_9fa48("36746") ? false : stryMutAct_9fa48("36745") ? true : (stryCov_9fa48("36745", "36746", "36747"), (stryMutAct_9fa48("36748") ? data : (stryCov_9fa48("36748"), !data)) || (stryMutAct_9fa48("36749") ? data.pid : (stryCov_9fa48("36749"), !data.pid)))) {
      if (stryMutAct_9fa48("36750")) {
        {}
      } else {
        stryCov_9fa48("36750");
        throw new Error(stryMutAct_9fa48("36751") ? "" : (stryCov_9fa48("36751"), '[[error:invalid-data]]'));
      }
    }
    const {
      pid
    } = data;
    const tid = await posts.getPostField(pid, stryMutAct_9fa48("36752") ? "" : (stryCov_9fa48("36752"), 'tid'));
    const topicPrivileges = await privileges.topics.get(tid, socket.uid);
    if (stryMutAct_9fa48("36755") ? false : stryMutAct_9fa48("36754") ? true : stryMutAct_9fa48("36753") ? topicPrivileges['topics:read'] : (stryCov_9fa48("36753", "36754", "36755"), !topicPrivileges[stryMutAct_9fa48("36756") ? "" : (stryCov_9fa48("36756"), 'topics:read')])) {
      if (stryMutAct_9fa48("36757")) {
        {}
      } else {
        stryCov_9fa48("36757");
        throw new Error(stryMutAct_9fa48("36758") ? "" : (stryCov_9fa48("36758"), '[[error:no-privileges]]'));
      }
    }
    const postsData = await posts.getPostSummaryByPids(stryMutAct_9fa48("36759") ? [] : (stryCov_9fa48("36759"), [pid]), socket.uid, stryMutAct_9fa48("36760") ? {} : (stryCov_9fa48("36760"), {
      stripTags: stryMutAct_9fa48("36761") ? true : (stryCov_9fa48("36761"), false)
    }));
    posts.modifyPostByPrivilege(postsData[0], topicPrivileges);
    return postsData[0];
  }
};
SocketPosts.getCategory = async function (socket, pid) {
  if (stryMutAct_9fa48("36762")) {
    {}
  } else {
    stryCov_9fa48("36762");
    return await posts.getCidByPid(pid);
  }
};
SocketPosts.getPidIndex = async function (socket, data) {
  if (stryMutAct_9fa48("36763")) {
    {}
  } else {
    stryCov_9fa48("36763");
    if (stryMutAct_9fa48("36766") ? false : stryMutAct_9fa48("36765") ? true : stryMutAct_9fa48("36764") ? data : (stryCov_9fa48("36764", "36765", "36766"), !data)) {
      if (stryMutAct_9fa48("36767")) {
        {}
      } else {
        stryCov_9fa48("36767");
        throw new Error(stryMutAct_9fa48("36768") ? "" : (stryCov_9fa48("36768"), '[[error:invalid-data]]'));
      }
    }
    return await posts.getPidIndex(data.pid, data.tid, data.topicPostSort);
  }
};
SocketPosts.getReplies = async function (socket, pid) {
  if (stryMutAct_9fa48("36769")) {
    {}
  } else {
    stryCov_9fa48("36769");
    if (stryMutAct_9fa48("36772") ? false : stryMutAct_9fa48("36771") ? true : stryMutAct_9fa48("36770") ? utils.isNumber(pid) : (stryCov_9fa48("36770", "36771", "36772"), !utils.isNumber(pid))) {
      if (stryMutAct_9fa48("36773")) {
        {}
      } else {
        stryCov_9fa48("36773");
        throw new Error(stryMutAct_9fa48("36774") ? "" : (stryCov_9fa48("36774"), '[[error:invalid-data]]'));
      }
    }
    const {
      topicPostSort
    } = await user.getSettings(socket.uid);
    const pids = await posts.getPidsFromSet(stryMutAct_9fa48("36775") ? `` : (stryCov_9fa48("36775"), `pid:${pid}:replies`), 0, stryMutAct_9fa48("36776") ? +1 : (stryCov_9fa48("36776"), -1), stryMutAct_9fa48("36779") ? topicPostSort !== 'newest_to_oldest' : stryMutAct_9fa48("36778") ? false : stryMutAct_9fa48("36777") ? true : (stryCov_9fa48("36777", "36778", "36779"), topicPostSort === (stryMutAct_9fa48("36780") ? "" : (stryCov_9fa48("36780"), 'newest_to_oldest'))));
    let [postData, postPrivileges] = await Promise.all(stryMutAct_9fa48("36781") ? [] : (stryCov_9fa48("36781"), [posts.getPostsByPids(pids, socket.uid), privileges.posts.get(pids, socket.uid)]));
    postData = await topics.addPostData(postData, socket.uid);
    postData.forEach(stryMutAct_9fa48("36782") ? () => undefined : (stryCov_9fa48("36782"), (postData, index) => posts.modifyPostByPrivilege(postData, postPrivileges[index])));
    postData = stryMutAct_9fa48("36783") ? postData : (stryCov_9fa48("36783"), postData.filter(stryMutAct_9fa48("36784") ? () => undefined : (stryCov_9fa48("36784"), (postData, index) => stryMutAct_9fa48("36787") ? postData || postPrivileges[index].read : stryMutAct_9fa48("36786") ? false : stryMutAct_9fa48("36785") ? true : (stryCov_9fa48("36785", "36786", "36787"), postData && postPrivileges[index].read))));
    postData = await (stryMutAct_9fa48("36788") ? user.blocks : (stryCov_9fa48("36788"), user.blocks.filter(socket.uid, postData)));
    return postData;
  }
};
SocketPosts.accept = async function (socket, data) {
  if (stryMutAct_9fa48("36789")) {
    {}
  } else {
    stryCov_9fa48("36789");
    await canEditQueue(socket, data, stryMutAct_9fa48("36790") ? "" : (stryCov_9fa48("36790"), 'accept'));
    const result = await posts.submitFromQueue(data.id);
    if (stryMutAct_9fa48("36793") ? result || socket.uid !== parseInt(result.uid, 10) : stryMutAct_9fa48("36792") ? false : stryMutAct_9fa48("36791") ? true : (stryCov_9fa48("36791", "36792", "36793"), result && (stryMutAct_9fa48("36795") ? socket.uid === parseInt(result.uid, 10) : stryMutAct_9fa48("36794") ? true : (stryCov_9fa48("36794", "36795"), socket.uid !== parseInt(result.uid, 10))))) {
      if (stryMutAct_9fa48("36796")) {
        {}
      } else {
        stryCov_9fa48("36796");
        await sendQueueNotification(stryMutAct_9fa48("36797") ? "" : (stryCov_9fa48("36797"), 'post-queue-accepted'), result.uid, stryMutAct_9fa48("36798") ? `` : (stryCov_9fa48("36798"), `/post/${result.pid}`));
      }
    }
    await logQueueEvent(socket, result, stryMutAct_9fa48("36799") ? "" : (stryCov_9fa48("36799"), 'accept'));
  }
};
SocketPosts.reject = async function (socket, data) {
  if (stryMutAct_9fa48("36800")) {
    {}
  } else {
    stryCov_9fa48("36800");
    await canEditQueue(socket, data, stryMutAct_9fa48("36801") ? "" : (stryCov_9fa48("36801"), 'reject'));
    const result = await posts.removeFromQueue(data.id);
    if (stryMutAct_9fa48("36804") ? result || socket.uid !== parseInt(result.uid, 10) : stryMutAct_9fa48("36803") ? false : stryMutAct_9fa48("36802") ? true : (stryCov_9fa48("36802", "36803", "36804"), result && (stryMutAct_9fa48("36806") ? socket.uid === parseInt(result.uid, 10) : stryMutAct_9fa48("36805") ? true : (stryCov_9fa48("36805", "36806"), socket.uid !== parseInt(result.uid, 10))))) {
      if (stryMutAct_9fa48("36807")) {
        {}
      } else {
        stryCov_9fa48("36807");
        await sendQueueNotification(stryMutAct_9fa48("36808") ? "" : (stryCov_9fa48("36808"), 'post-queue-rejected'), result.uid, stryMutAct_9fa48("36809") ? "" : (stryCov_9fa48("36809"), '/'));
      }
    }
    await logQueueEvent(socket, result, stryMutAct_9fa48("36810") ? "" : (stryCov_9fa48("36810"), 'reject'));
  }
};
async function logQueueEvent(socket, result, type) {
  if (stryMutAct_9fa48("36811")) {
    {}
  } else {
    stryCov_9fa48("36811");
    const eventData = stryMutAct_9fa48("36812") ? {} : (stryCov_9fa48("36812"), {
      type: stryMutAct_9fa48("36813") ? `` : (stryCov_9fa48("36813"), `post-queue-${result.type}-${type}`),
      uid: socket.uid,
      ip: socket.ip,
      content: result.data.content,
      targetUid: result.uid
    });
    if (stryMutAct_9fa48("36816") ? result.type !== 'topic' : stryMutAct_9fa48("36815") ? false : stryMutAct_9fa48("36814") ? true : (stryCov_9fa48("36814", "36815", "36816"), result.type === (stryMutAct_9fa48("36817") ? "" : (stryCov_9fa48("36817"), 'topic')))) {
      if (stryMutAct_9fa48("36818")) {
        {}
      } else {
        stryCov_9fa48("36818");
        eventData.cid = result.data.cid;
        eventData.title = result.data.title;
      }
    } else {
      if (stryMutAct_9fa48("36819")) {
        {}
      } else {
        stryCov_9fa48("36819");
        eventData.tid = result.data.tid;
      }
    }
    if (stryMutAct_9fa48("36821") ? false : stryMutAct_9fa48("36820") ? true : (stryCov_9fa48("36820", "36821"), result.pid)) {
      if (stryMutAct_9fa48("36822")) {
        {}
      } else {
        stryCov_9fa48("36822");
        eventData.pid = result.pid;
      }
    }
    await events.log(eventData);
  }
}
SocketPosts.notify = async function (socket, data) {
  if (stryMutAct_9fa48("36823")) {
    {}
  } else {
    stryCov_9fa48("36823");
    await canEditQueue(socket, data, stryMutAct_9fa48("36824") ? "" : (stryCov_9fa48("36824"), 'notify'));
    const result = await posts.getFromQueue(data.id);
    if (stryMutAct_9fa48("36826") ? false : stryMutAct_9fa48("36825") ? true : (stryCov_9fa48("36825", "36826"), result)) {
      if (stryMutAct_9fa48("36827")) {
        {}
      } else {
        stryCov_9fa48("36827");
        await sendQueueNotification(stryMutAct_9fa48("36828") ? "" : (stryCov_9fa48("36828"), 'post-queue-notify'), result.uid, stryMutAct_9fa48("36829") ? `` : (stryCov_9fa48("36829"), `/post-queue/${data.id}`), validator.escape(String(data.message)));
      }
    }
  }
};
async function canEditQueue(socket, data, action) {
  if (stryMutAct_9fa48("36830")) {
    {}
  } else {
    stryCov_9fa48("36830");
    const canEditQueue = await posts.canEditQueue(socket.uid, data, action);
    if (stryMutAct_9fa48("36833") ? false : stryMutAct_9fa48("36832") ? true : stryMutAct_9fa48("36831") ? canEditQueue : (stryCov_9fa48("36831", "36832", "36833"), !canEditQueue)) {
      if (stryMutAct_9fa48("36834")) {
        {}
      } else {
        stryCov_9fa48("36834");
        throw new Error(stryMutAct_9fa48("36835") ? "" : (stryCov_9fa48("36835"), '[[error:no-privileges]]'));
      }
    }
  }
}
async function sendQueueNotification(type, targetUid, path, notificationText) {
  if (stryMutAct_9fa48("36836")) {
    {}
  } else {
    stryCov_9fa48("36836");
    const notifData = stryMutAct_9fa48("36837") ? {} : (stryCov_9fa48("36837"), {
      type: type,
      nid: stryMutAct_9fa48("36838") ? `` : (stryCov_9fa48("36838"), `${type}-${targetUid}-${path}`),
      bodyShort: notificationText ? stryMutAct_9fa48("36839") ? `` : (stryCov_9fa48("36839"), `[[notifications:${type}, ${notificationText}]]`) : stryMutAct_9fa48("36840") ? `` : (stryCov_9fa48("36840"), `[[notifications:${type}]]`),
      path: path
    });
    if (stryMutAct_9fa48("36844") ? parseInt(meta.config.postQueueNotificationUid, 10) <= 0 : stryMutAct_9fa48("36843") ? parseInt(meta.config.postQueueNotificationUid, 10) >= 0 : stryMutAct_9fa48("36842") ? false : stryMutAct_9fa48("36841") ? true : (stryCov_9fa48("36841", "36842", "36843", "36844"), parseInt(meta.config.postQueueNotificationUid, 10) > 0)) {
      if (stryMutAct_9fa48("36845")) {
        {}
      } else {
        stryCov_9fa48("36845");
        notifData.from = meta.config.postQueueNotificationUid;
      }
    }
    const notifObj = await notifications.create(notifData);
    await notifications.push(notifObj, stryMutAct_9fa48("36846") ? [] : (stryCov_9fa48("36846"), [targetUid]));
  }
}
SocketPosts.editQueuedContent = async function (socket, data) {
  if (stryMutAct_9fa48("36847")) {
    {}
  } else {
    stryCov_9fa48("36847");
    if (stryMutAct_9fa48("36850") ? (!data || !data.id) && !data.content && !data.title && !data.cid : stryMutAct_9fa48("36849") ? false : stryMutAct_9fa48("36848") ? true : (stryCov_9fa48("36848", "36849", "36850"), (stryMutAct_9fa48("36852") ? !data && !data.id : stryMutAct_9fa48("36851") ? false : (stryCov_9fa48("36851", "36852"), (stryMutAct_9fa48("36853") ? data : (stryCov_9fa48("36853"), !data)) || (stryMutAct_9fa48("36854") ? data.id : (stryCov_9fa48("36854"), !data.id)))) || (stryMutAct_9fa48("36856") ? !data.content && !data.title || !data.cid : stryMutAct_9fa48("36855") ? false : (stryCov_9fa48("36855", "36856"), (stryMutAct_9fa48("36858") ? !data.content || !data.title : stryMutAct_9fa48("36857") ? true : (stryCov_9fa48("36857", "36858"), (stryMutAct_9fa48("36859") ? data.content : (stryCov_9fa48("36859"), !data.content)) && (stryMutAct_9fa48("36860") ? data.title : (stryCov_9fa48("36860"), !data.title)))) && (stryMutAct_9fa48("36861") ? data.cid : (stryCov_9fa48("36861"), !data.cid)))))) {
      if (stryMutAct_9fa48("36862")) {
        {}
      } else {
        stryCov_9fa48("36862");
        throw new Error(stryMutAct_9fa48("36863") ? "" : (stryCov_9fa48("36863"), '[[error:invalid-data]]'));
      }
    }
    await posts.editQueuedContent(socket.uid, data);
    if (stryMutAct_9fa48("36865") ? false : stryMutAct_9fa48("36864") ? true : (stryCov_9fa48("36864", "36865"), data.content)) {
      if (stryMutAct_9fa48("36866")) {
        {}
      } else {
        stryCov_9fa48("36866");
        return await plugins.hooks.fire(stryMutAct_9fa48("36867") ? "" : (stryCov_9fa48("36867"), 'filter:parse.post'), stryMutAct_9fa48("36868") ? {} : (stryCov_9fa48("36868"), {
          postData: data
        }));
      }
    }
    return stryMutAct_9fa48("36869") ? {} : (stryCov_9fa48("36869"), {
      postData: data
    });
  }
};
require('../promisify')(SocketPosts);