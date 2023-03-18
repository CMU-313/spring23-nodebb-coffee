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
const winston = require('winston');
const _ = require('lodash');
const db = require('../database');
const meta = require('../meta');
const notifications = require('../notifications');
const privileges = require('../privileges');
const plugins = require('../plugins');
const utils = require('../utils');
const UserNotifications = module.exports;
UserNotifications.get = async function (uid) {
  if (stryMutAct_9fa48("47960")) {
    {}
  } else {
    stryCov_9fa48("47960");
    if (stryMutAct_9fa48("47964") ? parseInt(uid, 10) > 0 : stryMutAct_9fa48("47963") ? parseInt(uid, 10) < 0 : stryMutAct_9fa48("47962") ? false : stryMutAct_9fa48("47961") ? true : (stryCov_9fa48("47961", "47962", "47963", "47964"), parseInt(uid, 10) <= 0)) {
      if (stryMutAct_9fa48("47965")) {
        {}
      } else {
        stryCov_9fa48("47965");
        return stryMutAct_9fa48("47966") ? {} : (stryCov_9fa48("47966"), {
          read: stryMutAct_9fa48("47967") ? ["Stryker was here"] : (stryCov_9fa48("47967"), []),
          unread: stryMutAct_9fa48("47968") ? ["Stryker was here"] : (stryCov_9fa48("47968"), [])
        });
      }
    }
    let unread = await getNotificationsFromSet(stryMutAct_9fa48("47969") ? `` : (stryCov_9fa48("47969"), `uid:${uid}:notifications:unread`), uid, 0, 49);
    unread = stryMutAct_9fa48("47970") ? unread : (stryCov_9fa48("47970"), unread.filter(Boolean));
    let read = stryMutAct_9fa48("47971") ? ["Stryker was here"] : (stryCov_9fa48("47971"), []);
    if (stryMutAct_9fa48("47975") ? unread.length >= 50 : stryMutAct_9fa48("47974") ? unread.length <= 50 : stryMutAct_9fa48("47973") ? false : stryMutAct_9fa48("47972") ? true : (stryCov_9fa48("47972", "47973", "47974", "47975"), unread.length < 50)) {
      if (stryMutAct_9fa48("47976")) {
        {}
      } else {
        stryCov_9fa48("47976");
        read = await getNotificationsFromSet(stryMutAct_9fa48("47977") ? `` : (stryCov_9fa48("47977"), `uid:${uid}:notifications:read`), uid, 0, stryMutAct_9fa48("47978") ? 49 + unread.length : (stryCov_9fa48("47978"), 49 - unread.length));
      }
    }
    return await plugins.hooks.fire(stryMutAct_9fa48("47979") ? "" : (stryCov_9fa48("47979"), 'filter:user.notifications.get'), stryMutAct_9fa48("47980") ? {} : (stryCov_9fa48("47980"), {
      uid,
      read: stryMutAct_9fa48("47981") ? read : (stryCov_9fa48("47981"), read.filter(Boolean)),
      unread: unread
    }));
  }
};
async function filterNotifications(nids, filter) {
  if (stryMutAct_9fa48("47982")) {
    {}
  } else {
    stryCov_9fa48("47982");
    if (stryMutAct_9fa48("47985") ? false : stryMutAct_9fa48("47984") ? true : stryMutAct_9fa48("47983") ? filter : (stryCov_9fa48("47983", "47984", "47985"), !filter)) {
      if (stryMutAct_9fa48("47986")) {
        {}
      } else {
        stryCov_9fa48("47986");
        return nids;
      }
    }
    const keys = nids.map(stryMutAct_9fa48("47987") ? () => undefined : (stryCov_9fa48("47987"), nid => stryMutAct_9fa48("47988") ? `` : (stryCov_9fa48("47988"), `notifications:${nid}`)));
    const notifications = await db.getObjectsFields(keys, stryMutAct_9fa48("47989") ? [] : (stryCov_9fa48("47989"), [stryMutAct_9fa48("47990") ? "" : (stryCov_9fa48("47990"), 'nid'), stryMutAct_9fa48("47991") ? "" : (stryCov_9fa48("47991"), 'type')]));
    return stryMutAct_9fa48("47992") ? notifications.map(n => n.nid) : (stryCov_9fa48("47992"), notifications.filter(stryMutAct_9fa48("47993") ? () => undefined : (stryCov_9fa48("47993"), n => stryMutAct_9fa48("47996") ? n && n.nid || n.type === filter : stryMutAct_9fa48("47995") ? false : stryMutAct_9fa48("47994") ? true : (stryCov_9fa48("47994", "47995", "47996"), (stryMutAct_9fa48("47998") ? n || n.nid : stryMutAct_9fa48("47997") ? true : (stryCov_9fa48("47997", "47998"), n && n.nid)) && (stryMutAct_9fa48("48000") ? n.type !== filter : stryMutAct_9fa48("47999") ? true : (stryCov_9fa48("47999", "48000"), n.type === filter))))).map(stryMutAct_9fa48("48001") ? () => undefined : (stryCov_9fa48("48001"), n => n.nid)));
  }
}
UserNotifications.getAll = async function (uid, filter) {
  if (stryMutAct_9fa48("48002")) {
    {}
  } else {
    stryCov_9fa48("48002");
    let nids = await db.getSortedSetRevRange(stryMutAct_9fa48("48003") ? [] : (stryCov_9fa48("48003"), [stryMutAct_9fa48("48004") ? `` : (stryCov_9fa48("48004"), `uid:${uid}:notifications:unread`), stryMutAct_9fa48("48005") ? `` : (stryCov_9fa48("48005"), `uid:${uid}:notifications:read`)]), 0, stryMutAct_9fa48("48006") ? +1 : (stryCov_9fa48("48006"), -1));
    nids = _.uniq(nids);
    const exists = await db.isSortedSetMembers(stryMutAct_9fa48("48007") ? "" : (stryCov_9fa48("48007"), 'notifications'), nids);
    const deleteNids = stryMutAct_9fa48("48008") ? ["Stryker was here"] : (stryCov_9fa48("48008"), []);
    nids = stryMutAct_9fa48("48009") ? nids : (stryCov_9fa48("48009"), nids.filter((nid, index) => {
      if (stryMutAct_9fa48("48010")) {
        {}
      } else {
        stryCov_9fa48("48010");
        if (stryMutAct_9fa48("48013") ? !nid && !exists[index] : stryMutAct_9fa48("48012") ? false : stryMutAct_9fa48("48011") ? true : (stryCov_9fa48("48011", "48012", "48013"), (stryMutAct_9fa48("48014") ? nid : (stryCov_9fa48("48014"), !nid)) || (stryMutAct_9fa48("48015") ? exists[index] : (stryCov_9fa48("48015"), !exists[index])))) {
          if (stryMutAct_9fa48("48016")) {
            {}
          } else {
            stryCov_9fa48("48016");
            deleteNids.push(nid);
          }
        }
        return stryMutAct_9fa48("48019") ? nid || exists[index] : stryMutAct_9fa48("48018") ? false : stryMutAct_9fa48("48017") ? true : (stryCov_9fa48("48017", "48018", "48019"), nid && exists[index]);
      }
    }));
    await deleteUserNids(deleteNids, uid);
    return await filterNotifications(nids, filter);
  }
};
async function deleteUserNids(nids, uid) {
  if (stryMutAct_9fa48("48020")) {
    {}
  } else {
    stryCov_9fa48("48020");
    await db.sortedSetRemove(stryMutAct_9fa48("48021") ? [] : (stryCov_9fa48("48021"), [stryMutAct_9fa48("48022") ? `` : (stryCov_9fa48("48022"), `uid:${uid}:notifications:read`), stryMutAct_9fa48("48023") ? `` : (stryCov_9fa48("48023"), `uid:${uid}:notifications:unread`)]), nids);
  }
}
async function getNotificationsFromSet(set, uid, start, stop) {
  if (stryMutAct_9fa48("48024")) {
    {}
  } else {
    stryCov_9fa48("48024");
    const nids = await db.getSortedSetRevRange(set, start, stop);
    return await UserNotifications.getNotifications(nids, uid);
  }
}
UserNotifications.getNotifications = async function (nids, uid) {
  if (stryMutAct_9fa48("48025")) {
    {}
  } else {
    stryCov_9fa48("48025");
    if (stryMutAct_9fa48("48028") ? !Array.isArray(nids) && !nids.length : stryMutAct_9fa48("48027") ? false : stryMutAct_9fa48("48026") ? true : (stryCov_9fa48("48026", "48027", "48028"), (stryMutAct_9fa48("48029") ? Array.isArray(nids) : (stryCov_9fa48("48029"), !Array.isArray(nids))) || (stryMutAct_9fa48("48030") ? nids.length : (stryCov_9fa48("48030"), !nids.length)))) {
      if (stryMutAct_9fa48("48031")) {
        {}
      } else {
        stryCov_9fa48("48031");
        return stryMutAct_9fa48("48032") ? ["Stryker was here"] : (stryCov_9fa48("48032"), []);
      }
    }
    const [notifObjs, hasRead] = await Promise.all(stryMutAct_9fa48("48033") ? [] : (stryCov_9fa48("48033"), [notifications.getMultiple(nids), db.isSortedSetMembers(stryMutAct_9fa48("48034") ? `` : (stryCov_9fa48("48034"), `uid:${uid}:notifications:read`), nids)]));
    const deletedNids = stryMutAct_9fa48("48035") ? ["Stryker was here"] : (stryCov_9fa48("48035"), []);
    let notificationData = stryMutAct_9fa48("48036") ? notifObjs : (stryCov_9fa48("48036"), notifObjs.filter((notification, index) => {
      if (stryMutAct_9fa48("48037")) {
        {}
      } else {
        stryCov_9fa48("48037");
        if (stryMutAct_9fa48("48040") ? !notification && !notification.nid : stryMutAct_9fa48("48039") ? false : stryMutAct_9fa48("48038") ? true : (stryCov_9fa48("48038", "48039", "48040"), (stryMutAct_9fa48("48041") ? notification : (stryCov_9fa48("48041"), !notification)) || (stryMutAct_9fa48("48042") ? notification.nid : (stryCov_9fa48("48042"), !notification.nid)))) {
          if (stryMutAct_9fa48("48043")) {
            {}
          } else {
            stryCov_9fa48("48043");
            deletedNids.push(nids[index]);
          }
        }
        if (stryMutAct_9fa48("48045") ? false : stryMutAct_9fa48("48044") ? true : (stryCov_9fa48("48044", "48045"), notification)) {
          if (stryMutAct_9fa48("48046")) {
            {}
          } else {
            stryCov_9fa48("48046");
            notification.read = hasRead[index];
            notification.readClass = (stryMutAct_9fa48("48047") ? notification.read : (stryCov_9fa48("48047"), !notification.read)) ? stryMutAct_9fa48("48048") ? "" : (stryCov_9fa48("48048"), 'unread') : stryMutAct_9fa48("48049") ? "Stryker was here!" : (stryCov_9fa48("48049"), '');
          }
        }
        return notification;
      }
    }));
    await deleteUserNids(deletedNids, uid);
    notificationData = await notifications.merge(notificationData);
    const result = await plugins.hooks.fire(stryMutAct_9fa48("48050") ? "" : (stryCov_9fa48("48050"), 'filter:user.notifications.getNotifications'), stryMutAct_9fa48("48051") ? {} : (stryCov_9fa48("48051"), {
      uid: uid,
      notifications: notificationData
    }));
    return stryMutAct_9fa48("48054") ? result || result.notifications : stryMutAct_9fa48("48053") ? false : stryMutAct_9fa48("48052") ? true : (stryCov_9fa48("48052", "48053", "48054"), result && result.notifications);
  }
};
UserNotifications.getUnreadInterval = async function (uid, interval) {
  if (stryMutAct_9fa48("48055")) {
    {}
  } else {
    stryCov_9fa48("48055");
    const dayInMs = stryMutAct_9fa48("48056") ? 1000 * 60 * 60 / 24 : (stryCov_9fa48("48056"), (stryMutAct_9fa48("48057") ? 1000 * 60 / 60 : (stryCov_9fa48("48057"), (stryMutAct_9fa48("48058") ? 1000 / 60 : (stryCov_9fa48("48058"), 1000 * 60)) * 60)) * 24);
    const times = stryMutAct_9fa48("48059") ? {} : (stryCov_9fa48("48059"), {
      day: dayInMs,
      week: stryMutAct_9fa48("48060") ? 7 / dayInMs : (stryCov_9fa48("48060"), 7 * dayInMs),
      month: stryMutAct_9fa48("48061") ? 30 / dayInMs : (stryCov_9fa48("48061"), 30 * dayInMs)
    });
    if (stryMutAct_9fa48("48064") ? false : stryMutAct_9fa48("48063") ? true : stryMutAct_9fa48("48062") ? times[interval] : (stryCov_9fa48("48062", "48063", "48064"), !times[interval])) {
      if (stryMutAct_9fa48("48065")) {
        {}
      } else {
        stryCov_9fa48("48065");
        return stryMutAct_9fa48("48066") ? ["Stryker was here"] : (stryCov_9fa48("48066"), []);
      }
    }
    const min = stryMutAct_9fa48("48067") ? Date.now() + times[interval] : (stryCov_9fa48("48067"), Date.now() - times[interval]);
    const nids = await db.getSortedSetRevRangeByScore(stryMutAct_9fa48("48068") ? `` : (stryCov_9fa48("48068"), `uid:${uid}:notifications:unread`), 0, 20, stryMutAct_9fa48("48069") ? "" : (stryCov_9fa48("48069"), '+inf'), min);
    return await UserNotifications.getNotifications(nids, uid);
  }
};
UserNotifications.getDailyUnread = async function (uid) {
  if (stryMutAct_9fa48("48070")) {
    {}
  } else {
    stryCov_9fa48("48070");
    return await UserNotifications.getUnreadInterval(uid, stryMutAct_9fa48("48071") ? "" : (stryCov_9fa48("48071"), 'day'));
  }
};
UserNotifications.getUnreadCount = async function (uid) {
  if (stryMutAct_9fa48("48072")) {
    {}
  } else {
    stryCov_9fa48("48072");
    if (stryMutAct_9fa48("48076") ? parseInt(uid, 10) > 0 : stryMutAct_9fa48("48075") ? parseInt(uid, 10) < 0 : stryMutAct_9fa48("48074") ? false : stryMutAct_9fa48("48073") ? true : (stryCov_9fa48("48073", "48074", "48075", "48076"), parseInt(uid, 10) <= 0)) {
      if (stryMutAct_9fa48("48077")) {
        {}
      } else {
        stryCov_9fa48("48077");
        return 0;
      }
    }
    let nids = await db.getSortedSetRevRange(stryMutAct_9fa48("48078") ? `` : (stryCov_9fa48("48078"), `uid:${uid}:notifications:unread`), 0, 99);
    nids = await notifications.filterExists(nids);
    const keys = nids.map(stryMutAct_9fa48("48079") ? () => undefined : (stryCov_9fa48("48079"), nid => stryMutAct_9fa48("48080") ? `` : (stryCov_9fa48("48080"), `notifications:${nid}`)));
    const notifData = await db.getObjectsFields(keys, stryMutAct_9fa48("48081") ? [] : (stryCov_9fa48("48081"), [stryMutAct_9fa48("48082") ? "" : (stryCov_9fa48("48082"), 'mergeId')]));
    const mergeIds = notifData.map(stryMutAct_9fa48("48083") ? () => undefined : (stryCov_9fa48("48083"), n => n.mergeId));

    // Collapse any notifications with identical mergeIds
    let count = mergeIds.reduce((count, mergeId, idx, arr) => {
      if (stryMutAct_9fa48("48084")) {
        {}
      } else {
        stryCov_9fa48("48084");
        // A missing (null) mergeId means that notification is counted separately.
        if (stryMutAct_9fa48("48087") ? mergeId === null && idx === arr.indexOf(mergeId) : stryMutAct_9fa48("48086") ? false : stryMutAct_9fa48("48085") ? true : (stryCov_9fa48("48085", "48086", "48087"), (stryMutAct_9fa48("48089") ? mergeId !== null : stryMutAct_9fa48("48088") ? false : (stryCov_9fa48("48088", "48089"), mergeId === null)) || (stryMutAct_9fa48("48091") ? idx !== arr.indexOf(mergeId) : stryMutAct_9fa48("48090") ? false : (stryCov_9fa48("48090", "48091"), idx === arr.indexOf(mergeId))))) {
          if (stryMutAct_9fa48("48092")) {
            {}
          } else {
            stryCov_9fa48("48092");
            stryMutAct_9fa48("48093") ? count -= 1 : (stryCov_9fa48("48093"), count += 1);
          }
        }
        return count;
      }
    }, 0);
    ({
      count
    } = await plugins.hooks.fire(stryMutAct_9fa48("48094") ? "" : (stryCov_9fa48("48094"), 'filter:user.notifications.getCount'), stryMutAct_9fa48("48095") ? {} : (stryCov_9fa48("48095"), {
      uid,
      count
    })));
    return count;
  }
};
UserNotifications.getUnreadByField = async function (uid, field, values) {
  if (stryMutAct_9fa48("48096")) {
    {}
  } else {
    stryCov_9fa48("48096");
    const nids = await db.getSortedSetRevRange(stryMutAct_9fa48("48097") ? `` : (stryCov_9fa48("48097"), `uid:${uid}:notifications:unread`), 0, 99);
    if (stryMutAct_9fa48("48100") ? false : stryMutAct_9fa48("48099") ? true : stryMutAct_9fa48("48098") ? nids.length : (stryCov_9fa48("48098", "48099", "48100"), !nids.length)) {
      if (stryMutAct_9fa48("48101")) {
        {}
      } else {
        stryCov_9fa48("48101");
        return stryMutAct_9fa48("48102") ? ["Stryker was here"] : (stryCov_9fa48("48102"), []);
      }
    }
    const keys = nids.map(stryMutAct_9fa48("48103") ? () => undefined : (stryCov_9fa48("48103"), nid => stryMutAct_9fa48("48104") ? `` : (stryCov_9fa48("48104"), `notifications:${nid}`)));
    const notifData = await db.getObjectsFields(keys, stryMutAct_9fa48("48105") ? [] : (stryCov_9fa48("48105"), [stryMutAct_9fa48("48106") ? "" : (stryCov_9fa48("48106"), 'nid'), field]));
    const valuesSet = new Set(values.map(stryMutAct_9fa48("48107") ? () => undefined : (stryCov_9fa48("48107"), value => String(value))));
    return stryMutAct_9fa48("48108") ? notifData.map(n => n.nid) : (stryCov_9fa48("48108"), notifData.filter(stryMutAct_9fa48("48109") ? () => undefined : (stryCov_9fa48("48109"), n => stryMutAct_9fa48("48112") ? n && n[field] || valuesSet.has(String(n[field])) : stryMutAct_9fa48("48111") ? false : stryMutAct_9fa48("48110") ? true : (stryCov_9fa48("48110", "48111", "48112"), (stryMutAct_9fa48("48114") ? n || n[field] : stryMutAct_9fa48("48113") ? true : (stryCov_9fa48("48113", "48114"), n && n[field])) && valuesSet.has(String(n[field]))))).map(stryMutAct_9fa48("48115") ? () => undefined : (stryCov_9fa48("48115"), n => n.nid)));
  }
};
UserNotifications.deleteAll = async function (uid) {
  if (stryMutAct_9fa48("48116")) {
    {}
  } else {
    stryCov_9fa48("48116");
    if (stryMutAct_9fa48("48120") ? parseInt(uid, 10) > 0 : stryMutAct_9fa48("48119") ? parseInt(uid, 10) < 0 : stryMutAct_9fa48("48118") ? false : stryMutAct_9fa48("48117") ? true : (stryCov_9fa48("48117", "48118", "48119", "48120"), parseInt(uid, 10) <= 0)) {
      if (stryMutAct_9fa48("48121")) {
        {}
      } else {
        stryCov_9fa48("48121");
        return;
      }
    }
    await db.deleteAll(stryMutAct_9fa48("48122") ? [] : (stryCov_9fa48("48122"), [stryMutAct_9fa48("48123") ? `` : (stryCov_9fa48("48123"), `uid:${uid}:notifications:unread`), stryMutAct_9fa48("48124") ? `` : (stryCov_9fa48("48124"), `uid:${uid}:notifications:read`)]));
  }
};
UserNotifications.sendTopicNotificationToFollowers = async function (uid, topicData, postData) {
  if (stryMutAct_9fa48("48125")) {
    {}
  } else {
    stryCov_9fa48("48125");
    try {
      if (stryMutAct_9fa48("48126")) {
        {}
      } else {
        stryCov_9fa48("48126");
        let followers = await db.getSortedSetRange(stryMutAct_9fa48("48127") ? `` : (stryCov_9fa48("48127"), `followers:${uid}`), 0, stryMutAct_9fa48("48128") ? +1 : (stryCov_9fa48("48128"), -1));
        followers = await privileges.categories.filterUids(stryMutAct_9fa48("48129") ? "" : (stryCov_9fa48("48129"), 'read'), topicData.cid, followers);
        if (stryMutAct_9fa48("48132") ? false : stryMutAct_9fa48("48131") ? true : stryMutAct_9fa48("48130") ? followers.length : (stryCov_9fa48("48130", "48131", "48132"), !followers.length)) {
          if (stryMutAct_9fa48("48133")) {
            {}
          } else {
            stryCov_9fa48("48133");
            return;
          }
        }
        let {
          title
        } = topicData;
        if (stryMutAct_9fa48("48135") ? false : stryMutAct_9fa48("48134") ? true : (stryCov_9fa48("48134", "48135"), title)) {
          if (stryMutAct_9fa48("48136")) {
            {}
          } else {
            stryCov_9fa48("48136");
            title = utils.decodeHTMLEntities(title);
            title = title.replace(/,/g, stryMutAct_9fa48("48137") ? "" : (stryCov_9fa48("48137"), '\\,'));
          }
        }
        const notifObj = await notifications.create(stryMutAct_9fa48("48138") ? {} : (stryCov_9fa48("48138"), {
          type: stryMutAct_9fa48("48139") ? "" : (stryCov_9fa48("48139"), 'new-topic'),
          bodyShort: stryMutAct_9fa48("48140") ? `` : (stryCov_9fa48("48140"), `[[notifications:user_posted_topic, ${postData.user.displayname}, ${title}]]`),
          bodyLong: postData.content,
          pid: postData.pid,
          path: stryMutAct_9fa48("48141") ? `` : (stryCov_9fa48("48141"), `/post/${postData.pid}`),
          nid: stryMutAct_9fa48("48142") ? `` : (stryCov_9fa48("48142"), `tid:${postData.tid}:uid:${uid}`),
          tid: postData.tid,
          from: uid
        }));
        await notifications.push(notifObj, followers);
      }
    } catch (err) {
      if (stryMutAct_9fa48("48143")) {
        {}
      } else {
        stryCov_9fa48("48143");
        winston.error(err.stack);
      }
    }
  }
};
UserNotifications.sendWelcomeNotification = async function (uid) {
  if (stryMutAct_9fa48("48144")) {
    {}
  } else {
    stryCov_9fa48("48144");
    if (stryMutAct_9fa48("48147") ? false : stryMutAct_9fa48("48146") ? true : stryMutAct_9fa48("48145") ? meta.config.welcomeNotification : (stryCov_9fa48("48145", "48146", "48147"), !meta.config.welcomeNotification)) {
      if (stryMutAct_9fa48("48148")) {
        {}
      } else {
        stryCov_9fa48("48148");
        return;
      }
    }
    const path = meta.config.welcomeLink ? meta.config.welcomeLink : stryMutAct_9fa48("48149") ? "" : (stryCov_9fa48("48149"), '#');
    const notifObj = await notifications.create(stryMutAct_9fa48("48150") ? {} : (stryCov_9fa48("48150"), {
      bodyShort: meta.config.welcomeNotification,
      path: path,
      nid: stryMutAct_9fa48("48151") ? `` : (stryCov_9fa48("48151"), `welcome_${uid}`),
      from: meta.config.welcomeUid ? meta.config.welcomeUid : null
    }));
    await notifications.push(notifObj, stryMutAct_9fa48("48152") ? [] : (stryCov_9fa48("48152"), [uid]));
  }
};
UserNotifications.sendNameChangeNotification = async function (uid, username) {
  if (stryMutAct_9fa48("48153")) {
    {}
  } else {
    stryCov_9fa48("48153");
    const notifObj = await notifications.create(stryMutAct_9fa48("48154") ? {} : (stryCov_9fa48("48154"), {
      bodyShort: stryMutAct_9fa48("48155") ? `` : (stryCov_9fa48("48155"), `[[user:username_taken_workaround, ${username}]]`),
      image: stryMutAct_9fa48("48156") ? "" : (stryCov_9fa48("48156"), 'brand:logo'),
      nid: stryMutAct_9fa48("48157") ? `` : (stryCov_9fa48("48157"), `username_taken:${uid}`),
      datetime: Date.now()
    }));
    await notifications.push(notifObj, uid);
  }
};
UserNotifications.pushCount = async function (uid) {
  if (stryMutAct_9fa48("48158")) {
    {}
  } else {
    stryCov_9fa48("48158");
    const websockets = require('../socket.io');
    const count = await UserNotifications.getUnreadCount(uid);
    websockets.in(stryMutAct_9fa48("48159") ? `` : (stryCov_9fa48("48159"), `uid_${uid}`)).emit(stryMutAct_9fa48("48160") ? "" : (stryCov_9fa48("48160"), 'event:notifications.updateCount'), count);
  }
};