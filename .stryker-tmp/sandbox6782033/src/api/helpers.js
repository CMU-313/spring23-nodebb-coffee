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
const url = require('url');
const user = require('../user');
const topics = require('../topics');
const posts = require('../posts');
const privileges = require('../privileges');
const plugins = require('../plugins');
const socketHelpers = require('../socket.io/helpers');
const websockets = require('../socket.io');
const events = require('../events');
exports.setDefaultPostData = function (reqOrSocket, data) {
  if (stryMutAct_9fa48("809")) {
    {}
  } else {
    stryCov_9fa48("809");
    data.uid = reqOrSocket.uid;
    data.req = exports.buildReqObject(reqOrSocket, stryMutAct_9fa48("810") ? {} : (stryCov_9fa48("810"), {
      ...data
    }));
    data.timestamp = Date.now();
    data.fromQueue = stryMutAct_9fa48("811") ? true : (stryCov_9fa48("811"), false);
  }
};

// creates a slimmed down version of the request object
exports.buildReqObject = (req, payload) => {
  if (stryMutAct_9fa48("812")) {
    {}
  } else {
    stryCov_9fa48("812");
    req = stryMutAct_9fa48("815") ? req && {} : stryMutAct_9fa48("814") ? false : stryMutAct_9fa48("813") ? true : (stryCov_9fa48("813", "814", "815"), req || {});
    const headers = stryMutAct_9fa48("818") ? (req.headers || req.request && req.request.headers) && {} : stryMutAct_9fa48("817") ? false : stryMutAct_9fa48("816") ? true : (stryCov_9fa48("816", "817", "818"), (stryMutAct_9fa48("820") ? req.headers && req.request && req.request.headers : stryMutAct_9fa48("819") ? false : (stryCov_9fa48("819", "820"), req.headers || (stryMutAct_9fa48("822") ? req.request || req.request.headers : stryMutAct_9fa48("821") ? false : (stryCov_9fa48("821", "822"), req.request && req.request.headers)))) || {});
    const encrypted = req.connection ? stryMutAct_9fa48("823") ? !req.connection.encrypted : (stryCov_9fa48("823"), !(stryMutAct_9fa48("824") ? req.connection.encrypted : (stryCov_9fa48("824"), !req.connection.encrypted))) : stryMutAct_9fa48("825") ? true : (stryCov_9fa48("825"), false);
    let {
      host
    } = headers;
    const referer = stryMutAct_9fa48("828") ? headers.referer && '' : stryMutAct_9fa48("827") ? false : stryMutAct_9fa48("826") ? true : (stryCov_9fa48("826", "827", "828"), headers.referer || (stryMutAct_9fa48("829") ? "Stryker was here!" : (stryCov_9fa48("829"), '')));
    if (stryMutAct_9fa48("832") ? false : stryMutAct_9fa48("831") ? true : stryMutAct_9fa48("830") ? host : (stryCov_9fa48("830", "831", "832"), !host)) {
      if (stryMutAct_9fa48("833")) {
        {}
      } else {
        stryCov_9fa48("833");
        host = stryMutAct_9fa48("836") ? url.parse(referer).host && '' : stryMutAct_9fa48("835") ? false : stryMutAct_9fa48("834") ? true : (stryCov_9fa48("834", "835", "836"), url.parse(referer).host || (stryMutAct_9fa48("837") ? "Stryker was here!" : (stryCov_9fa48("837"), '')));
      }
    }
    return stryMutAct_9fa48("838") ? {} : (stryCov_9fa48("838"), {
      uid: req.uid,
      params: req.params,
      method: req.method,
      body: stryMutAct_9fa48("841") ? payload && req.body : stryMutAct_9fa48("840") ? false : stryMutAct_9fa48("839") ? true : (stryCov_9fa48("839", "840", "841"), payload || req.body),
      session: req.session,
      ip: req.ip,
      host: host,
      protocol: encrypted ? stryMutAct_9fa48("842") ? "" : (stryCov_9fa48("842"), 'https') : stryMutAct_9fa48("843") ? "" : (stryCov_9fa48("843"), 'http'),
      secure: encrypted,
      url: referer,
      path: stryMutAct_9fa48("844") ? referer : (stryCov_9fa48("844"), referer.slice(stryMutAct_9fa48("845") ? referer.indexOf(host) - host.length : (stryCov_9fa48("845"), referer.indexOf(host) + host.length))),
      headers: headers
    });
  }
};
exports.doTopicAction = async function (action, event, caller, {
  tids
}) {
  if (stryMutAct_9fa48("846")) {
    {}
  } else {
    stryCov_9fa48("846");
    if (stryMutAct_9fa48("849") ? false : stryMutAct_9fa48("848") ? true : stryMutAct_9fa48("847") ? Array.isArray(tids) : (stryCov_9fa48("847", "848", "849"), !Array.isArray(tids))) {
      if (stryMutAct_9fa48("850")) {
        {}
      } else {
        stryCov_9fa48("850");
        throw new Error(stryMutAct_9fa48("851") ? "" : (stryCov_9fa48("851"), '[[error:invalid-tid]]'));
      }
    }
    const exists = await topics.exists(tids);
    if (stryMutAct_9fa48("854") ? false : stryMutAct_9fa48("853") ? true : stryMutAct_9fa48("852") ? exists.every(Boolean) : (stryCov_9fa48("852", "853", "854"), !(stryMutAct_9fa48("855") ? exists.some(Boolean) : (stryCov_9fa48("855"), exists.every(Boolean))))) {
      if (stryMutAct_9fa48("856")) {
        {}
      } else {
        stryCov_9fa48("856");
        throw new Error(stryMutAct_9fa48("857") ? "" : (stryCov_9fa48("857"), '[[error:no-topic]]'));
      }
    }
    if (stryMutAct_9fa48("860") ? typeof topics.tools[action] === 'function' : stryMutAct_9fa48("859") ? false : stryMutAct_9fa48("858") ? true : (stryCov_9fa48("858", "859", "860"), typeof topics.tools[action] !== (stryMutAct_9fa48("861") ? "" : (stryCov_9fa48("861"), 'function')))) {
      if (stryMutAct_9fa48("862")) {
        {}
      } else {
        stryCov_9fa48("862");
        return;
      }
    }
    const uids = await user.getUidsFromSet(stryMutAct_9fa48("863") ? "" : (stryCov_9fa48("863"), 'users:online'), 0, stryMutAct_9fa48("864") ? +1 : (stryCov_9fa48("864"), -1));
    await Promise.all(tids.map(async tid => {
      if (stryMutAct_9fa48("865")) {
        {}
      } else {
        stryCov_9fa48("865");
        const title = await topics.getTopicField(tid, stryMutAct_9fa48("866") ? "" : (stryCov_9fa48("866"), 'title'));
        const data = await topics.tools[action](tid, caller.uid);
        const notifyUids = await privileges.categories.filterUids(stryMutAct_9fa48("867") ? "" : (stryCov_9fa48("867"), 'topics:read'), data.cid, uids);
        socketHelpers.emitToUids(event, data, notifyUids);
        await logTopicAction(action, caller, tid, title);
      }
    }));
  }
};
async function logTopicAction(action, req, tid, title) {
  if (stryMutAct_9fa48("868")) {
    {}
  } else {
    stryCov_9fa48("868");
    // Only log certain actions to system event log
    const actionsToLog = stryMutAct_9fa48("869") ? [] : (stryCov_9fa48("869"), [stryMutAct_9fa48("870") ? "" : (stryCov_9fa48("870"), 'delete'), stryMutAct_9fa48("871") ? "" : (stryCov_9fa48("871"), 'restore'), stryMutAct_9fa48("872") ? "" : (stryCov_9fa48("872"), 'purge')]);
    if (stryMutAct_9fa48("875") ? false : stryMutAct_9fa48("874") ? true : stryMutAct_9fa48("873") ? actionsToLog.includes(action) : (stryCov_9fa48("873", "874", "875"), !actionsToLog.includes(action))) {
      if (stryMutAct_9fa48("876")) {
        {}
      } else {
        stryCov_9fa48("876");
        return;
      }
    }
    await events.log(stryMutAct_9fa48("877") ? {} : (stryCov_9fa48("877"), {
      type: stryMutAct_9fa48("878") ? `` : (stryCov_9fa48("878"), `topic-${action}`),
      uid: req.uid,
      ip: req.ip,
      tid: tid,
      title: String(title)
    }));
  }
}
exports.postCommand = async function (caller, command, eventName, notification, data) {
  if (stryMutAct_9fa48("879")) {
    {}
  } else {
    stryCov_9fa48("879");
    if (stryMutAct_9fa48("882") ? false : stryMutAct_9fa48("881") ? true : stryMutAct_9fa48("880") ? caller.uid : (stryCov_9fa48("880", "881", "882"), !caller.uid)) {
      if (stryMutAct_9fa48("883")) {
        {}
      } else {
        stryCov_9fa48("883");
        throw new Error(stryMutAct_9fa48("884") ? "" : (stryCov_9fa48("884"), '[[error:not-logged-in]]'));
      }
    }
    if (stryMutAct_9fa48("887") ? !data && !data.pid : stryMutAct_9fa48("886") ? false : stryMutAct_9fa48("885") ? true : (stryCov_9fa48("885", "886", "887"), (stryMutAct_9fa48("888") ? data : (stryCov_9fa48("888"), !data)) || (stryMutAct_9fa48("889") ? data.pid : (stryCov_9fa48("889"), !data.pid)))) {
      if (stryMutAct_9fa48("890")) {
        {}
      } else {
        stryCov_9fa48("890");
        throw new Error(stryMutAct_9fa48("891") ? "" : (stryCov_9fa48("891"), '[[error:invalid-data]]'));
      }
    }
    if (stryMutAct_9fa48("894") ? false : stryMutAct_9fa48("893") ? true : stryMutAct_9fa48("892") ? data.room_id : (stryCov_9fa48("892", "893", "894"), !data.room_id)) {
      if (stryMutAct_9fa48("895")) {
        {}
      } else {
        stryCov_9fa48("895");
        throw new Error(stryMutAct_9fa48("896") ? `` : (stryCov_9fa48("896"), `[[error:invalid-room-id, ${data.room_id} ]]`));
      }
    }
    const [exists, deleted] = await Promise.all(stryMutAct_9fa48("897") ? [] : (stryCov_9fa48("897"), [posts.exists(data.pid), posts.getPostField(data.pid, stryMutAct_9fa48("898") ? "" : (stryCov_9fa48("898"), 'deleted'))]));
    if (stryMutAct_9fa48("901") ? false : stryMutAct_9fa48("900") ? true : stryMutAct_9fa48("899") ? exists : (stryCov_9fa48("899", "900", "901"), !exists)) {
      if (stryMutAct_9fa48("902")) {
        {}
      } else {
        stryCov_9fa48("902");
        throw new Error(stryMutAct_9fa48("903") ? "" : (stryCov_9fa48("903"), '[[error:invalid-pid]]'));
      }
    }
    if (stryMutAct_9fa48("905") ? false : stryMutAct_9fa48("904") ? true : (stryCov_9fa48("904", "905"), deleted)) {
      if (stryMutAct_9fa48("906")) {
        {}
      } else {
        stryCov_9fa48("906");
        throw new Error(stryMutAct_9fa48("907") ? "" : (stryCov_9fa48("907"), '[[error:post-deleted]]'));
      }
    }

    /*
    hooks:
        filter:post.upvote
        filter:post.downvote
        filter:post.unvote
        filter:post.bookmark
        filter:post.unbookmark
     */
    const filteredData = await plugins.hooks.fire(stryMutAct_9fa48("908") ? `` : (stryCov_9fa48("908"), `filter:post.${command}`), stryMutAct_9fa48("909") ? {} : (stryCov_9fa48("909"), {
      data: data,
      uid: caller.uid
    }));
    return await executeCommand(caller, command, eventName, notification, filteredData.data);
  }
};
async function executeCommand(caller, command, eventName, notification, data) {
  if (stryMutAct_9fa48("910")) {
    {}
  } else {
    stryCov_9fa48("910");
    const result = await posts[command](data.pid, caller.uid);
    if (stryMutAct_9fa48("913") ? result || eventName : stryMutAct_9fa48("912") ? false : stryMutAct_9fa48("911") ? true : (stryCov_9fa48("911", "912", "913"), result && eventName)) {
      if (stryMutAct_9fa48("914")) {
        {}
      } else {
        stryCov_9fa48("914");
        websockets.in(stryMutAct_9fa48("915") ? `` : (stryCov_9fa48("915"), `uid_${caller.uid}`)).emit(stryMutAct_9fa48("916") ? `` : (stryCov_9fa48("916"), `posts.${command}`), result);
        websockets.in(data.room_id).emit(stryMutAct_9fa48("917") ? `` : (stryCov_9fa48("917"), `event:${eventName}`), result);
      }
    }
    if (stryMutAct_9fa48("920") ? result || command === 'upvote' : stryMutAct_9fa48("919") ? false : stryMutAct_9fa48("918") ? true : (stryCov_9fa48("918", "919", "920"), result && (stryMutAct_9fa48("922") ? command !== 'upvote' : stryMutAct_9fa48("921") ? true : (stryCov_9fa48("921", "922"), command === (stryMutAct_9fa48("923") ? "" : (stryCov_9fa48("923"), 'upvote')))))) {
      if (stryMutAct_9fa48("924")) {
        {}
      } else {
        stryCov_9fa48("924");
        socketHelpers.upvote(result, notification);
      }
    } else if (stryMutAct_9fa48("927") ? result || notification : stryMutAct_9fa48("926") ? false : stryMutAct_9fa48("925") ? true : (stryCov_9fa48("925", "926", "927"), result && notification)) {
      if (stryMutAct_9fa48("928")) {
        {}
      } else {
        stryCov_9fa48("928");
        socketHelpers.sendNotificationToPostOwner(data.pid, caller.uid, command, notification);
      }
    } else if (stryMutAct_9fa48("931") ? result || command === 'unvote' : stryMutAct_9fa48("930") ? false : stryMutAct_9fa48("929") ? true : (stryCov_9fa48("929", "930", "931"), result && (stryMutAct_9fa48("933") ? command !== 'unvote' : stryMutAct_9fa48("932") ? true : (stryCov_9fa48("932", "933"), command === (stryMutAct_9fa48("934") ? "" : (stryCov_9fa48("934"), 'unvote')))))) {
      if (stryMutAct_9fa48("935")) {
        {}
      } else {
        stryCov_9fa48("935");
        socketHelpers.rescindUpvoteNotification(data.pid, caller.uid);
      }
    }
    return result;
  }
}