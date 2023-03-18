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
const user = require('../user');
const topics = require('../topics');
const posts = require('../posts');
const meta = require('../meta');
const privileges = require('../privileges');
const apiHelpers = require('./helpers');
const {
  doTopicAction
} = apiHelpers;
const websockets = require('../socket.io');
const socketHelpers = require('../socket.io/helpers');
const topicsAPI = module.exports;
topicsAPI.get = async function (caller, data) {
  if (stryMutAct_9fa48("1248")) {
    {}
  } else {
    stryCov_9fa48("1248");
    const [userPrivileges, topic] = await Promise.all(stryMutAct_9fa48("1249") ? [] : (stryCov_9fa48("1249"), [privileges.topics.get(data.tid, caller.uid), topics.getTopicData(data.tid)]));
    if (stryMutAct_9fa48("1252") ? (!topic || !userPrivileges.read || !userPrivileges['topics:read']) && !privileges.topics.canViewDeletedScheduled(topic, userPrivileges) : stryMutAct_9fa48("1251") ? false : stryMutAct_9fa48("1250") ? true : (stryCov_9fa48("1250", "1251", "1252"), (stryMutAct_9fa48("1254") ? (!topic || !userPrivileges.read) && !userPrivileges['topics:read'] : stryMutAct_9fa48("1253") ? false : (stryCov_9fa48("1253", "1254"), (stryMutAct_9fa48("1256") ? !topic && !userPrivileges.read : stryMutAct_9fa48("1255") ? false : (stryCov_9fa48("1255", "1256"), (stryMutAct_9fa48("1257") ? topic : (stryCov_9fa48("1257"), !topic)) || (stryMutAct_9fa48("1258") ? userPrivileges.read : (stryCov_9fa48("1258"), !userPrivileges.read)))) || (stryMutAct_9fa48("1259") ? userPrivileges['topics:read'] : (stryCov_9fa48("1259"), !userPrivileges[stryMutAct_9fa48("1260") ? "" : (stryCov_9fa48("1260"), 'topics:read')])))) || (stryMutAct_9fa48("1261") ? privileges.topics.canViewDeletedScheduled(topic, userPrivileges) : (stryCov_9fa48("1261"), !privileges.topics.canViewDeletedScheduled(topic, userPrivileges))))) {
      if (stryMutAct_9fa48("1262")) {
        {}
      } else {
        stryCov_9fa48("1262");
        return null;
      }
    }
    return topic;
  }
};
topicsAPI.create = async function (caller, data) {
  if (stryMutAct_9fa48("1263")) {
    {}
  } else {
    stryCov_9fa48("1263");
    if (stryMutAct_9fa48("1266") ? false : stryMutAct_9fa48("1265") ? true : stryMutAct_9fa48("1264") ? data : (stryCov_9fa48("1264", "1265", "1266"), !data)) {
      if (stryMutAct_9fa48("1267")) {
        {}
      } else {
        stryCov_9fa48("1267");
        throw new Error(stryMutAct_9fa48("1268") ? "" : (stryCov_9fa48("1268"), '[[error:invalid-data]]'));
      }
    }
    const payload = stryMutAct_9fa48("1269") ? {} : (stryCov_9fa48("1269"), {
      ...data
    });
    payload.tags = stryMutAct_9fa48("1272") ? payload.tags && [] : stryMutAct_9fa48("1271") ? false : stryMutAct_9fa48("1270") ? true : (stryCov_9fa48("1270", "1271", "1272"), payload.tags || (stryMutAct_9fa48("1273") ? ["Stryker was here"] : (stryCov_9fa48("1273"), [])));
    apiHelpers.setDefaultPostData(caller, payload);
    const isScheduling = stryMutAct_9fa48("1277") ? parseInt(data.timestamp, 10) <= payload.timestamp : stryMutAct_9fa48("1276") ? parseInt(data.timestamp, 10) >= payload.timestamp : stryMutAct_9fa48("1275") ? false : stryMutAct_9fa48("1274") ? true : (stryCov_9fa48("1274", "1275", "1276", "1277"), parseInt(data.timestamp, 10) > payload.timestamp);
    if (stryMutAct_9fa48("1279") ? false : stryMutAct_9fa48("1278") ? true : (stryCov_9fa48("1278", "1279"), isScheduling)) {
      if (stryMutAct_9fa48("1280")) {
        {}
      } else {
        stryCov_9fa48("1280");
        if (stryMutAct_9fa48("1282") ? false : stryMutAct_9fa48("1281") ? true : (stryCov_9fa48("1281", "1282"), await privileges.categories.can(stryMutAct_9fa48("1283") ? "" : (stryCov_9fa48("1283"), 'topics:schedule'), data.cid, caller.uid))) {
          if (stryMutAct_9fa48("1284")) {
            {}
          } else {
            stryCov_9fa48("1284");
            payload.timestamp = parseInt(data.timestamp, 10);
          }
        } else {
          if (stryMutAct_9fa48("1285")) {
            {}
          } else {
            stryCov_9fa48("1285");
            throw new Error(stryMutAct_9fa48("1286") ? "" : (stryCov_9fa48("1286"), '[[error:no-privileges]]'));
          }
        }
      }
    }
    await meta.blacklist.test(caller.ip);
    const shouldQueue = await posts.shouldQueue(caller.uid, payload);
    if (stryMutAct_9fa48("1288") ? false : stryMutAct_9fa48("1287") ? true : (stryCov_9fa48("1287", "1288"), shouldQueue)) {
      if (stryMutAct_9fa48("1289")) {
        {}
      } else {
        stryCov_9fa48("1289");
        return await posts.addToQueue(payload);
      }
    }
    const result = await topics.post(payload);
    await topics.thumbs.migrate(data.uuid, result.topicData.tid);
    socketHelpers.emitToUids(stryMutAct_9fa48("1290") ? "" : (stryCov_9fa48("1290"), 'event:new_post'), stryMutAct_9fa48("1291") ? {} : (stryCov_9fa48("1291"), {
      posts: stryMutAct_9fa48("1292") ? [] : (stryCov_9fa48("1292"), [result.postData])
    }), stryMutAct_9fa48("1293") ? [] : (stryCov_9fa48("1293"), [caller.uid]));
    socketHelpers.emitToUids(stryMutAct_9fa48("1294") ? "" : (stryCov_9fa48("1294"), 'event:new_topic'), result.topicData, stryMutAct_9fa48("1295") ? [] : (stryCov_9fa48("1295"), [caller.uid]));
    socketHelpers.notifyNew(caller.uid, stryMutAct_9fa48("1296") ? "" : (stryCov_9fa48("1296"), 'newTopic'), stryMutAct_9fa48("1297") ? {} : (stryCov_9fa48("1297"), {
      posts: stryMutAct_9fa48("1298") ? [] : (stryCov_9fa48("1298"), [result.postData]),
      topic: result.topicData
    }));
    return result.topicData;
  }
};
topicsAPI.reply = async function (caller, data) {
  if (stryMutAct_9fa48("1299")) {
    {}
  } else {
    stryCov_9fa48("1299");
    if (stryMutAct_9fa48("1302") ? (!data || !data.tid) && meta.config.minimumPostLength !== 0 && !data.content : stryMutAct_9fa48("1301") ? false : stryMutAct_9fa48("1300") ? true : (stryCov_9fa48("1300", "1301", "1302"), (stryMutAct_9fa48("1304") ? !data && !data.tid : stryMutAct_9fa48("1303") ? false : (stryCov_9fa48("1303", "1304"), (stryMutAct_9fa48("1305") ? data : (stryCov_9fa48("1305"), !data)) || (stryMutAct_9fa48("1306") ? data.tid : (stryCov_9fa48("1306"), !data.tid)))) || (stryMutAct_9fa48("1308") ? meta.config.minimumPostLength !== 0 || !data.content : stryMutAct_9fa48("1307") ? false : (stryCov_9fa48("1307", "1308"), (stryMutAct_9fa48("1310") ? meta.config.minimumPostLength === 0 : stryMutAct_9fa48("1309") ? true : (stryCov_9fa48("1309", "1310"), meta.config.minimumPostLength !== 0)) && (stryMutAct_9fa48("1311") ? data.content : (stryCov_9fa48("1311"), !data.content)))))) {
      if (stryMutAct_9fa48("1312")) {
        {}
      } else {
        stryCov_9fa48("1312");
        throw new Error(stryMutAct_9fa48("1313") ? "" : (stryCov_9fa48("1313"), '[[error:invalid-data]]'));
      }
    }
    const payload = stryMutAct_9fa48("1314") ? {} : (stryCov_9fa48("1314"), {
      ...data
    });
    apiHelpers.setDefaultPostData(caller, payload);
    await meta.blacklist.test(caller.ip);
    const shouldQueue = await posts.shouldQueue(caller.uid, payload);
    if (stryMutAct_9fa48("1316") ? false : stryMutAct_9fa48("1315") ? true : (stryCov_9fa48("1315", "1316"), shouldQueue)) {
      if (stryMutAct_9fa48("1317")) {
        {}
      } else {
        stryCov_9fa48("1317");
        return await posts.addToQueue(payload);
      }
    }
    const postData = await topics.reply(payload); // postData seems to be a subset of postObj, refactor?
    const postObj = await posts.getPostSummaryByPids(stryMutAct_9fa48("1318") ? [] : (stryCov_9fa48("1318"), [postData.pid]), caller.uid, {});
    const result = stryMutAct_9fa48("1319") ? {} : (stryCov_9fa48("1319"), {
      posts: stryMutAct_9fa48("1320") ? [] : (stryCov_9fa48("1320"), [postData]),
      'reputation:disabled': stryMutAct_9fa48("1323") ? meta.config['reputation:disabled'] !== 1 : stryMutAct_9fa48("1322") ? false : stryMutAct_9fa48("1321") ? true : (stryCov_9fa48("1321", "1322", "1323"), meta.config[stryMutAct_9fa48("1324") ? "" : (stryCov_9fa48("1324"), 'reputation:disabled')] === 1),
      'downvote:disabled': stryMutAct_9fa48("1327") ? meta.config['downvote:disabled'] !== 1 : stryMutAct_9fa48("1326") ? false : stryMutAct_9fa48("1325") ? true : (stryCov_9fa48("1325", "1326", "1327"), meta.config[stryMutAct_9fa48("1328") ? "" : (stryCov_9fa48("1328"), 'downvote:disabled')] === 1)
    });
    user.updateOnlineUsers(caller.uid);
    if (stryMutAct_9fa48("1330") ? false : stryMutAct_9fa48("1329") ? true : (stryCov_9fa48("1329", "1330"), caller.uid)) {
      if (stryMutAct_9fa48("1331")) {
        {}
      } else {
        stryCov_9fa48("1331");
        socketHelpers.emitToUids(stryMutAct_9fa48("1332") ? "" : (stryCov_9fa48("1332"), 'event:new_post'), result, stryMutAct_9fa48("1333") ? [] : (stryCov_9fa48("1333"), [caller.uid]));
      }
    } else if (stryMutAct_9fa48("1336") ? caller.uid !== 0 : stryMutAct_9fa48("1335") ? false : stryMutAct_9fa48("1334") ? true : (stryCov_9fa48("1334", "1335", "1336"), caller.uid === 0)) {
      if (stryMutAct_9fa48("1337")) {
        {}
      } else {
        stryCov_9fa48("1337");
        websockets.in(stryMutAct_9fa48("1338") ? "" : (stryCov_9fa48("1338"), 'online_guests')).emit(stryMutAct_9fa48("1339") ? "" : (stryCov_9fa48("1339"), 'event:new_post'), result);
      }
    }
    socketHelpers.notifyNew(caller.uid, stryMutAct_9fa48("1340") ? "" : (stryCov_9fa48("1340"), 'newPost'), result);
    return postObj[0];
  }
};
topicsAPI.delete = async function (caller, data) {
  if (stryMutAct_9fa48("1341")) {
    {}
  } else {
    stryCov_9fa48("1341");
    await doTopicAction(stryMutAct_9fa48("1342") ? "" : (stryCov_9fa48("1342"), 'delete'), stryMutAct_9fa48("1343") ? "" : (stryCov_9fa48("1343"), 'event:topic_deleted'), caller, stryMutAct_9fa48("1344") ? {} : (stryCov_9fa48("1344"), {
      tids: data.tids
    }));
  }
};
topicsAPI.restore = async function (caller, data) {
  if (stryMutAct_9fa48("1345")) {
    {}
  } else {
    stryCov_9fa48("1345");
    await doTopicAction(stryMutAct_9fa48("1346") ? "" : (stryCov_9fa48("1346"), 'restore'), stryMutAct_9fa48("1347") ? "" : (stryCov_9fa48("1347"), 'event:topic_restored'), caller, stryMutAct_9fa48("1348") ? {} : (stryCov_9fa48("1348"), {
      tids: data.tids
    }));
  }
};
topicsAPI.purge = async function (caller, data) {
  if (stryMutAct_9fa48("1349")) {
    {}
  } else {
    stryCov_9fa48("1349");
    await doTopicAction(stryMutAct_9fa48("1350") ? "" : (stryCov_9fa48("1350"), 'purge'), stryMutAct_9fa48("1351") ? "" : (stryCov_9fa48("1351"), 'event:topic_purged'), caller, stryMutAct_9fa48("1352") ? {} : (stryCov_9fa48("1352"), {
      tids: data.tids
    }));
  }
};
topicsAPI.pin = async function (caller, data) {
  if (stryMutAct_9fa48("1353")) {
    {}
  } else {
    stryCov_9fa48("1353");
    await doTopicAction(stryMutAct_9fa48("1354") ? "" : (stryCov_9fa48("1354"), 'pin'), stryMutAct_9fa48("1355") ? "" : (stryCov_9fa48("1355"), 'event:topic_pinned'), caller, stryMutAct_9fa48("1356") ? {} : (stryCov_9fa48("1356"), {
      tids: data.tids
    }));
  }
};
topicsAPI.unpin = async function (caller, data) {
  if (stryMutAct_9fa48("1357")) {
    {}
  } else {
    stryCov_9fa48("1357");
    await doTopicAction(stryMutAct_9fa48("1358") ? "" : (stryCov_9fa48("1358"), 'unpin'), stryMutAct_9fa48("1359") ? "" : (stryCov_9fa48("1359"), 'event:topic_unpinned'), caller, stryMutAct_9fa48("1360") ? {} : (stryCov_9fa48("1360"), {
      tids: data.tids
    }));
  }
};
topicsAPI.lock = async function (caller, data) {
  if (stryMutAct_9fa48("1361")) {
    {}
  } else {
    stryCov_9fa48("1361");
    await doTopicAction(stryMutAct_9fa48("1362") ? "" : (stryCov_9fa48("1362"), 'lock'), stryMutAct_9fa48("1363") ? "" : (stryCov_9fa48("1363"), 'event:topic_locked'), caller, stryMutAct_9fa48("1364") ? {} : (stryCov_9fa48("1364"), {
      tids: data.tids
    }));
  }
};
topicsAPI.unlock = async function (caller, data) {
  if (stryMutAct_9fa48("1365")) {
    {}
  } else {
    stryCov_9fa48("1365");
    await doTopicAction(stryMutAct_9fa48("1366") ? "" : (stryCov_9fa48("1366"), 'unlock'), stryMutAct_9fa48("1367") ? "" : (stryCov_9fa48("1367"), 'event:topic_unlocked'), caller, stryMutAct_9fa48("1368") ? {} : (stryCov_9fa48("1368"), {
      tids: data.tids
    }));
  }
};
topicsAPI.follow = async function (caller, data) {
  if (stryMutAct_9fa48("1369")) {
    {}
  } else {
    stryCov_9fa48("1369");
    await topics.follow(data.tid, caller.uid);
  }
};
topicsAPI.ignore = async function (caller, data) {
  if (stryMutAct_9fa48("1370")) {
    {}
  } else {
    stryCov_9fa48("1370");
    await topics.ignore(data.tid, caller.uid);
  }
};
topicsAPI.unfollow = async function (caller, data) {
  if (stryMutAct_9fa48("1371")) {
    {}
  } else {
    stryCov_9fa48("1371");
    await topics.unfollow(data.tid, caller.uid);
  }
};