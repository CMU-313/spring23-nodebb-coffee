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
const os = require('os');
const nconf = require('nconf');
const topics = require('../../topics');
const pubsub = require('../../pubsub');
const utils = require('../../utils');
const stats = {};
const totals = {};
const SocketRooms = module.exports;
SocketRooms.stats = stats;
SocketRooms.totals = totals;
pubsub.on(stryMutAct_9fa48("35032") ? "" : (stryCov_9fa48("35032"), 'sync:stats:start'), () => {
  if (stryMutAct_9fa48("35033")) {
    {}
  } else {
    stryCov_9fa48("35033");
    const stats = SocketRooms.getLocalStats();
    pubsub.publish(stryMutAct_9fa48("35034") ? "" : (stryCov_9fa48("35034"), 'sync:stats:end'), stryMutAct_9fa48("35035") ? {} : (stryCov_9fa48("35035"), {
      stats: stats,
      id: stryMutAct_9fa48("35036") ? `` : (stryCov_9fa48("35036"), `${os.hostname()}:${nconf.get(stryMutAct_9fa48("35037") ? "" : (stryCov_9fa48("35037"), 'port'))}`)
    }));
  }
});
pubsub.on(stryMutAct_9fa48("35038") ? "" : (stryCov_9fa48("35038"), 'sync:stats:end'), data => {
  if (stryMutAct_9fa48("35039")) {
    {}
  } else {
    stryCov_9fa48("35039");
    stats[data.id] = data.stats;
  }
});
pubsub.on(stryMutAct_9fa48("35040") ? "" : (stryCov_9fa48("35040"), 'sync:stats:guests'), eventId => {
  if (stryMutAct_9fa48("35041")) {
    {}
  } else {
    stryCov_9fa48("35041");
    const Sockets = require('../index');
    const guestCount = Sockets.getCountInRoom(stryMutAct_9fa48("35042") ? "" : (stryCov_9fa48("35042"), 'online_guests'));
    pubsub.publish(eventId, guestCount);
  }
});
SocketRooms.getTotalGuestCount = function (callback) {
  if (stryMutAct_9fa48("35043")) {
    {}
  } else {
    stryCov_9fa48("35043");
    let count = 0;
    const eventId = stryMutAct_9fa48("35044") ? `` : (stryCov_9fa48("35044"), `sync:stats:guests:end:${utils.generateUUID()}`);
    pubsub.on(eventId, guestCount => {
      if (stryMutAct_9fa48("35045")) {
        {}
      } else {
        stryCov_9fa48("35045");
        stryMutAct_9fa48("35046") ? count -= guestCount : (stryCov_9fa48("35046"), count += guestCount);
      }
    });
    pubsub.publish(stryMutAct_9fa48("35047") ? "" : (stryCov_9fa48("35047"), 'sync:stats:guests'), eventId);
    setTimeout(() => {
      if (stryMutAct_9fa48("35048")) {
        {}
      } else {
        stryCov_9fa48("35048");
        pubsub.removeAllListeners(eventId);
        callback(null, count);
      }
    }, 100);
  }
};
SocketRooms.getAll = async function () {
  if (stryMutAct_9fa48("35049")) {
    {}
  } else {
    stryCov_9fa48("35049");
    pubsub.publish(stryMutAct_9fa48("35050") ? "" : (stryCov_9fa48("35050"), 'sync:stats:start'));
    totals.onlineGuestCount = 0;
    totals.onlineRegisteredCount = 0;
    totals.socketCount = 0;
    totals.topics = {};
    totals.users = stryMutAct_9fa48("35051") ? {} : (stryCov_9fa48("35051"), {
      categories: 0,
      recent: 0,
      unread: 0,
      topics: 0,
      category: 0
    });
    for (const instance of Object.values(stats)) {
      if (stryMutAct_9fa48("35052")) {
        {}
      } else {
        stryCov_9fa48("35052");
        stryMutAct_9fa48("35053") ? totals.onlineGuestCount -= instance.onlineGuestCount : (stryCov_9fa48("35053"), totals.onlineGuestCount += instance.onlineGuestCount);
        stryMutAct_9fa48("35054") ? totals.onlineRegisteredCount -= instance.onlineRegisteredCount : (stryCov_9fa48("35054"), totals.onlineRegisteredCount += instance.onlineRegisteredCount);
        stryMutAct_9fa48("35055") ? totals.socketCount -= instance.socketCount : (stryCov_9fa48("35055"), totals.socketCount += instance.socketCount);
        stryMutAct_9fa48("35056") ? totals.users.categories -= instance.users.categories : (stryCov_9fa48("35056"), totals.users.categories += instance.users.categories);
        stryMutAct_9fa48("35057") ? totals.users.recent -= instance.users.recent : (stryCov_9fa48("35057"), totals.users.recent += instance.users.recent);
        stryMutAct_9fa48("35058") ? totals.users.unread -= instance.users.unread : (stryCov_9fa48("35058"), totals.users.unread += instance.users.unread);
        stryMutAct_9fa48("35059") ? totals.users.topics -= instance.users.topics : (stryCov_9fa48("35059"), totals.users.topics += instance.users.topics);
        stryMutAct_9fa48("35060") ? totals.users.category -= instance.users.category : (stryCov_9fa48("35060"), totals.users.category += instance.users.category);
        instance.topics.forEach(topic => {
          if (stryMutAct_9fa48("35061")) {
            {}
          } else {
            stryCov_9fa48("35061");
            totals.topics[topic.tid] = stryMutAct_9fa48("35064") ? totals.topics[topic.tid] && {
              count: 0,
              tid: topic.tid
            } : stryMutAct_9fa48("35063") ? false : stryMutAct_9fa48("35062") ? true : (stryCov_9fa48("35062", "35063", "35064"), totals.topics[topic.tid] || (stryMutAct_9fa48("35065") ? {} : (stryCov_9fa48("35065"), {
              count: 0,
              tid: topic.tid
            })));
            stryMutAct_9fa48("35066") ? totals.topics[topic.tid].count -= topic.count : (stryCov_9fa48("35066"), totals.topics[topic.tid].count += topic.count);
          }
        });
      }
    }
    let topTenTopics = stryMutAct_9fa48("35067") ? ["Stryker was here"] : (stryCov_9fa48("35067"), []);
    Object.keys(totals.topics).forEach(tid => {
      if (stryMutAct_9fa48("35068")) {
        {}
      } else {
        stryCov_9fa48("35068");
        topTenTopics.push(stryMutAct_9fa48("35069") ? {} : (stryCov_9fa48("35069"), {
          tid: tid,
          count: stryMutAct_9fa48("35072") ? totals.topics[tid].count && 0 : stryMutAct_9fa48("35071") ? false : stryMutAct_9fa48("35070") ? true : (stryCov_9fa48("35070", "35071", "35072"), totals.topics[tid].count || 0)
        }));
      }
    });
    topTenTopics = stryMutAct_9fa48("35074") ? topTenTopics.slice(0, 10) : stryMutAct_9fa48("35073") ? topTenTopics.sort((a, b) => b.count - a.count) : (stryCov_9fa48("35073", "35074"), topTenTopics.sort(stryMutAct_9fa48("35075") ? () => undefined : (stryCov_9fa48("35075"), (a, b) => stryMutAct_9fa48("35076") ? b.count + a.count : (stryCov_9fa48("35076"), b.count - a.count))).slice(0, 10));
    const topTenTids = topTenTopics.map(stryMutAct_9fa48("35077") ? () => undefined : (stryCov_9fa48("35077"), topic => topic.tid));
    const titles = await topics.getTopicsFields(topTenTids, stryMutAct_9fa48("35078") ? [] : (stryCov_9fa48("35078"), [stryMutAct_9fa48("35079") ? "" : (stryCov_9fa48("35079"), 'title')]));
    totals.topTenTopics = topTenTopics.map((topic, index) => {
      if (stryMutAct_9fa48("35080")) {
        {}
      } else {
        stryCov_9fa48("35080");
        topic.title = titles[index].title;
        return topic;
      }
    });
    return totals;
  }
};
SocketRooms.getOnlineUserCount = function (io) {
  if (stryMutAct_9fa48("35081")) {
    {}
  } else {
    stryCov_9fa48("35081");
    let count = 0;
    if (stryMutAct_9fa48("35083") ? false : stryMutAct_9fa48("35082") ? true : (stryCov_9fa48("35082", "35083"), io)) {
      if (stryMutAct_9fa48("35084")) {
        {}
      } else {
        stryCov_9fa48("35084");
        for (const [key] of io.sockets.adapter.rooms) {
          if (stryMutAct_9fa48("35085")) {
            {}
          } else {
            stryCov_9fa48("35085");
            if (stryMutAct_9fa48("35088") ? key.endsWith('uid_') : stryMutAct_9fa48("35087") ? false : stryMutAct_9fa48("35086") ? true : (stryCov_9fa48("35086", "35087", "35088"), key.startsWith(stryMutAct_9fa48("35089") ? "" : (stryCov_9fa48("35089"), 'uid_')))) {
              if (stryMutAct_9fa48("35090")) {
                {}
              } else {
                stryCov_9fa48("35090");
                stryMutAct_9fa48("35091") ? count -= 1 : (stryCov_9fa48("35091"), count += 1);
              }
            }
          }
        }
      }
    }
    return count;
  }
};
SocketRooms.getLocalStats = function () {
  if (stryMutAct_9fa48("35092")) {
    {}
  } else {
    stryCov_9fa48("35092");
    const Sockets = require('../index');
    const io = Sockets.server;
    const socketData = stryMutAct_9fa48("35093") ? {} : (stryCov_9fa48("35093"), {
      onlineGuestCount: 0,
      onlineRegisteredCount: 0,
      socketCount: 0,
      users: stryMutAct_9fa48("35094") ? {} : (stryCov_9fa48("35094"), {
        categories: 0,
        recent: 0,
        unread: 0,
        topics: 0,
        category: 0
      }),
      topics: {}
    });
    if (stryMutAct_9fa48("35097") ? io || io.sockets : stryMutAct_9fa48("35096") ? false : stryMutAct_9fa48("35095") ? true : (stryCov_9fa48("35095", "35096", "35097"), io && io.sockets)) {
      if (stryMutAct_9fa48("35098")) {
        {}
      } else {
        stryCov_9fa48("35098");
        socketData.onlineGuestCount = Sockets.getCountInRoom(stryMutAct_9fa48("35099") ? "" : (stryCov_9fa48("35099"), 'online_guests'));
        socketData.onlineRegisteredCount = SocketRooms.getOnlineUserCount(io);
        socketData.socketCount = io.sockets.sockets.size;
        socketData.users.categories = Sockets.getCountInRoom(stryMutAct_9fa48("35100") ? "" : (stryCov_9fa48("35100"), 'categories'));
        socketData.users.recent = Sockets.getCountInRoom(stryMutAct_9fa48("35101") ? "" : (stryCov_9fa48("35101"), 'recent_topics'));
        socketData.users.unread = Sockets.getCountInRoom(stryMutAct_9fa48("35102") ? "" : (stryCov_9fa48("35102"), 'unread_topics'));
        let topTenTopics = stryMutAct_9fa48("35103") ? ["Stryker was here"] : (stryCov_9fa48("35103"), []);
        let tid;
        for (const [room, clients] of io.sockets.adapter.rooms) {
          if (stryMutAct_9fa48("35104")) {
            {}
          } else {
            stryCov_9fa48("35104");
            tid = room.match(stryMutAct_9fa48("35107") ? /^topic_(\D+)/ : stryMutAct_9fa48("35106") ? /^topic_(\d)/ : stryMutAct_9fa48("35105") ? /topic_(\d+)/ : (stryCov_9fa48("35105", "35106", "35107"), /^topic_(\d+)/));
            if (stryMutAct_9fa48("35109") ? false : stryMutAct_9fa48("35108") ? true : (stryCov_9fa48("35108", "35109"), tid)) {
              if (stryMutAct_9fa48("35110")) {
                {}
              } else {
                stryCov_9fa48("35110");
                stryMutAct_9fa48("35111") ? socketData.users.topics -= clients.size : (stryCov_9fa48("35111"), socketData.users.topics += clients.size);
                topTenTopics.push(stryMutAct_9fa48("35112") ? {} : (stryCov_9fa48("35112"), {
                  tid: tid[1],
                  count: clients.size
                }));
              }
            } else if (stryMutAct_9fa48("35114") ? false : stryMutAct_9fa48("35113") ? true : (stryCov_9fa48("35113", "35114"), room.match(stryMutAct_9fa48("35115") ? /category/ : (stryCov_9fa48("35115"), /^category/)))) {
              if (stryMutAct_9fa48("35116")) {
                {}
              } else {
                stryCov_9fa48("35116");
                stryMutAct_9fa48("35117") ? socketData.users.category -= clients.size : (stryCov_9fa48("35117"), socketData.users.category += clients.size);
              }
            }
          }
        }
        topTenTopics = stryMutAct_9fa48("35119") ? topTenTopics.slice(0, 10) : stryMutAct_9fa48("35118") ? topTenTopics.sort((a, b) => b.count - a.count) : (stryCov_9fa48("35118", "35119"), topTenTopics.sort(stryMutAct_9fa48("35120") ? () => undefined : (stryCov_9fa48("35120"), (a, b) => stryMutAct_9fa48("35121") ? b.count + a.count : (stryCov_9fa48("35121"), b.count - a.count))).slice(0, 10));
        socketData.topics = topTenTopics;
      }
    }
    return socketData;
  }
};
require('../../promisify')(SocketRooms);