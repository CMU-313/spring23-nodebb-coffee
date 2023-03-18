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
const winston = require('winston');
const db = require('../database');
const user = require('../user');
const groups = require('../groups');
const meta = require('../meta');
const flags = require('../flags');
const privileges = require('../privileges');
const notifications = require('../notifications');
const plugins = require('../plugins');
const events = require('../events');
const translator = require('../translator');
const sockets = require('../socket.io');
const usersAPI = module.exports;
usersAPI.create = async function (caller, data) {
  if (stryMutAct_9fa48("1372")) {
    {}
  } else {
    stryCov_9fa48("1372");
    if (stryMutAct_9fa48("1375") ? false : stryMutAct_9fa48("1374") ? true : stryMutAct_9fa48("1373") ? data : (stryCov_9fa48("1373", "1374", "1375"), !data)) {
      if (stryMutAct_9fa48("1376")) {
        {}
      } else {
        stryCov_9fa48("1376");
        throw new Error(stryMutAct_9fa48("1377") ? "" : (stryCov_9fa48("1377"), '[[error:invalid-data]]'));
      }
    }
    const uid = await user.create(data);
    return await user.getUserData(uid);
  }
};
usersAPI.update = async function (caller, data) {
  if (stryMutAct_9fa48("1378")) {
    {}
  } else {
    stryCov_9fa48("1378");
    if (stryMutAct_9fa48("1381") ? false : stryMutAct_9fa48("1380") ? true : stryMutAct_9fa48("1379") ? caller.uid : (stryCov_9fa48("1379", "1380", "1381"), !caller.uid)) {
      if (stryMutAct_9fa48("1382")) {
        {}
      } else {
        stryCov_9fa48("1382");
        throw new Error(stryMutAct_9fa48("1383") ? "" : (stryCov_9fa48("1383"), '[[error:invalid-uid]]'));
      }
    }
    if (stryMutAct_9fa48("1386") ? !data && !data.uid : stryMutAct_9fa48("1385") ? false : stryMutAct_9fa48("1384") ? true : (stryCov_9fa48("1384", "1385", "1386"), (stryMutAct_9fa48("1387") ? data : (stryCov_9fa48("1387"), !data)) || (stryMutAct_9fa48("1388") ? data.uid : (stryCov_9fa48("1388"), !data.uid)))) {
      if (stryMutAct_9fa48("1389")) {
        {}
      } else {
        stryCov_9fa48("1389");
        throw new Error(stryMutAct_9fa48("1390") ? "" : (stryCov_9fa48("1390"), '[[error:invalid-data]]'));
      }
    }
    const oldUserData = await user.getUserFields(data.uid, stryMutAct_9fa48("1391") ? [] : (stryCov_9fa48("1391"), [stryMutAct_9fa48("1392") ? "" : (stryCov_9fa48("1392"), 'email'), stryMutAct_9fa48("1393") ? "" : (stryCov_9fa48("1393"), 'username')]));
    if (stryMutAct_9fa48("1396") ? !oldUserData && !oldUserData.username : stryMutAct_9fa48("1395") ? false : stryMutAct_9fa48("1394") ? true : (stryCov_9fa48("1394", "1395", "1396"), (stryMutAct_9fa48("1397") ? oldUserData : (stryCov_9fa48("1397"), !oldUserData)) || (stryMutAct_9fa48("1398") ? oldUserData.username : (stryCov_9fa48("1398"), !oldUserData.username)))) {
      if (stryMutAct_9fa48("1399")) {
        {}
      } else {
        stryCov_9fa48("1399");
        throw new Error(stryMutAct_9fa48("1400") ? "" : (stryCov_9fa48("1400"), '[[error:invalid-data]]'));
      }
    }
    const [isAdminOrGlobalMod, canEdit] = await Promise.all(stryMutAct_9fa48("1401") ? [] : (stryCov_9fa48("1401"), [user.isAdminOrGlobalMod(caller.uid), privileges.users.canEdit(caller.uid, data.uid)]));

    // Changing own email/username requires password confirmation
    if (stryMutAct_9fa48("1404") ? data.hasOwnProperty('email') && data.hasOwnProperty('username') : stryMutAct_9fa48("1403") ? false : stryMutAct_9fa48("1402") ? true : (stryCov_9fa48("1402", "1403", "1404"), data.hasOwnProperty(stryMutAct_9fa48("1405") ? "" : (stryCov_9fa48("1405"), 'email')) || data.hasOwnProperty(stryMutAct_9fa48("1406") ? "" : (stryCov_9fa48("1406"), 'username')))) {
      if (stryMutAct_9fa48("1407")) {
        {}
      } else {
        stryCov_9fa48("1407");
        await isPrivilegedOrSelfAndPasswordMatch(caller, data);
      }
    }
    if (stryMutAct_9fa48("1410") ? false : stryMutAct_9fa48("1409") ? true : stryMutAct_9fa48("1408") ? canEdit : (stryCov_9fa48("1408", "1409", "1410"), !canEdit)) {
      if (stryMutAct_9fa48("1411")) {
        {}
      } else {
        stryCov_9fa48("1411");
        throw new Error(stryMutAct_9fa48("1412") ? "" : (stryCov_9fa48("1412"), '[[error:no-privileges]]'));
      }
    }
    if (stryMutAct_9fa48("1415") ? !isAdminOrGlobalMod || meta.config['username:disableEdit'] : stryMutAct_9fa48("1414") ? false : stryMutAct_9fa48("1413") ? true : (stryCov_9fa48("1413", "1414", "1415"), (stryMutAct_9fa48("1416") ? isAdminOrGlobalMod : (stryCov_9fa48("1416"), !isAdminOrGlobalMod)) && meta.config[stryMutAct_9fa48("1417") ? "" : (stryCov_9fa48("1417"), 'username:disableEdit')])) {
      if (stryMutAct_9fa48("1418")) {
        {}
      } else {
        stryCov_9fa48("1418");
        data.username = oldUserData.username;
      }
    }
    if (stryMutAct_9fa48("1421") ? !isAdminOrGlobalMod || meta.config['email:disableEdit'] : stryMutAct_9fa48("1420") ? false : stryMutAct_9fa48("1419") ? true : (stryCov_9fa48("1419", "1420", "1421"), (stryMutAct_9fa48("1422") ? isAdminOrGlobalMod : (stryCov_9fa48("1422"), !isAdminOrGlobalMod)) && meta.config[stryMutAct_9fa48("1423") ? "" : (stryCov_9fa48("1423"), 'email:disableEdit')])) {
      if (stryMutAct_9fa48("1424")) {
        {}
      } else {
        stryCov_9fa48("1424");
        data.email = oldUserData.email;
      }
    }
    await user.updateProfile(caller.uid, data);
    const userData = await user.getUserData(data.uid);
    if (stryMutAct_9fa48("1427") ? userData.username === oldUserData.username : stryMutAct_9fa48("1426") ? false : stryMutAct_9fa48("1425") ? true : (stryCov_9fa48("1425", "1426", "1427"), userData.username !== oldUserData.username)) {
      if (stryMutAct_9fa48("1428")) {
        {}
      } else {
        stryCov_9fa48("1428");
        await events.log(stryMutAct_9fa48("1429") ? {} : (stryCov_9fa48("1429"), {
          type: stryMutAct_9fa48("1430") ? "" : (stryCov_9fa48("1430"), 'username-change'),
          uid: caller.uid,
          targetUid: data.uid,
          ip: caller.ip,
          oldUsername: oldUserData.username,
          newUsername: userData.username
        }));
      }
    }
    return userData;
  }
};
usersAPI.delete = async function (caller, {
  uid,
  password
}) {
  if (stryMutAct_9fa48("1431")) {
    {}
  } else {
    stryCov_9fa48("1431");
    await processDeletion(stryMutAct_9fa48("1432") ? {} : (stryCov_9fa48("1432"), {
      uid: uid,
      method: stryMutAct_9fa48("1433") ? "" : (stryCov_9fa48("1433"), 'delete'),
      password,
      caller
    }));
  }
};
usersAPI.deleteContent = async function (caller, {
  uid,
  password
}) {
  if (stryMutAct_9fa48("1434")) {
    {}
  } else {
    stryCov_9fa48("1434");
    await processDeletion(stryMutAct_9fa48("1435") ? {} : (stryCov_9fa48("1435"), {
      uid,
      method: stryMutAct_9fa48("1436") ? "" : (stryCov_9fa48("1436"), 'deleteContent'),
      password,
      caller
    }));
  }
};
usersAPI.deleteAccount = async function (caller, {
  uid,
  password
}) {
  if (stryMutAct_9fa48("1437")) {
    {}
  } else {
    stryCov_9fa48("1437");
    await processDeletion(stryMutAct_9fa48("1438") ? {} : (stryCov_9fa48("1438"), {
      uid,
      method: stryMutAct_9fa48("1439") ? "" : (stryCov_9fa48("1439"), 'deleteAccount'),
      password,
      caller
    }));
  }
};
usersAPI.deleteMany = async function (caller, data) {
  if (stryMutAct_9fa48("1440")) {
    {}
  } else {
    stryCov_9fa48("1440");
    if (stryMutAct_9fa48("1442") ? false : stryMutAct_9fa48("1441") ? true : (stryCov_9fa48("1441", "1442"), await canDeleteUids(data.uids))) {
      if (stryMutAct_9fa48("1443")) {
        {}
      } else {
        stryCov_9fa48("1443");
        await Promise.all(data.uids.map(stryMutAct_9fa48("1444") ? () => undefined : (stryCov_9fa48("1444"), uid => processDeletion(stryMutAct_9fa48("1445") ? {} : (stryCov_9fa48("1445"), {
          uid,
          method: stryMutAct_9fa48("1446") ? "" : (stryCov_9fa48("1446"), 'delete'),
          caller
        })))));
      }
    }
  }
};
usersAPI.updateSettings = async function (caller, data) {
  if (stryMutAct_9fa48("1447")) {
    {}
  } else {
    stryCov_9fa48("1447");
    if (stryMutAct_9fa48("1450") ? (!caller.uid || !data) && !data.settings : stryMutAct_9fa48("1449") ? false : stryMutAct_9fa48("1448") ? true : (stryCov_9fa48("1448", "1449", "1450"), (stryMutAct_9fa48("1452") ? !caller.uid && !data : stryMutAct_9fa48("1451") ? false : (stryCov_9fa48("1451", "1452"), (stryMutAct_9fa48("1453") ? caller.uid : (stryCov_9fa48("1453"), !caller.uid)) || (stryMutAct_9fa48("1454") ? data : (stryCov_9fa48("1454"), !data)))) || (stryMutAct_9fa48("1455") ? data.settings : (stryCov_9fa48("1455"), !data.settings)))) {
      if (stryMutAct_9fa48("1456")) {
        {}
      } else {
        stryCov_9fa48("1456");
        throw new Error(stryMutAct_9fa48("1457") ? "" : (stryCov_9fa48("1457"), '[[error:invalid-data]]'));
      }
    }
    const canEdit = await privileges.users.canEdit(caller.uid, data.uid);
    if (stryMutAct_9fa48("1460") ? false : stryMutAct_9fa48("1459") ? true : stryMutAct_9fa48("1458") ? canEdit : (stryCov_9fa48("1458", "1459", "1460"), !canEdit)) {
      if (stryMutAct_9fa48("1461")) {
        {}
      } else {
        stryCov_9fa48("1461");
        throw new Error(stryMutAct_9fa48("1462") ? "" : (stryCov_9fa48("1462"), '[[error:no-privileges]]'));
      }
    }
    let defaults = await user.getSettings(0);
    defaults = stryMutAct_9fa48("1463") ? {} : (stryCov_9fa48("1463"), {
      postsPerPage: defaults.postsPerPage,
      topicsPerPage: defaults.topicsPerPage,
      userLang: defaults.userLang,
      acpLang: defaults.acpLang
    });
    // load raw settings without parsing values to booleans
    const current = await db.getObject(stryMutAct_9fa48("1464") ? `` : (stryCov_9fa48("1464"), `user:${data.uid}:settings`));
    const payload = stryMutAct_9fa48("1465") ? {} : (stryCov_9fa48("1465"), {
      ...defaults,
      ...current,
      ...data.settings
    });
    delete payload.uid;
    return await user.saveSettings(data.uid, payload);
  }
};
usersAPI.changePassword = async function (caller, data) {
  if (stryMutAct_9fa48("1466")) {
    {}
  } else {
    stryCov_9fa48("1466");
    await user.changePassword(caller.uid, Object.assign(data, stryMutAct_9fa48("1467") ? {} : (stryCov_9fa48("1467"), {
      ip: caller.ip
    })));
    await events.log(stryMutAct_9fa48("1468") ? {} : (stryCov_9fa48("1468"), {
      type: stryMutAct_9fa48("1469") ? "" : (stryCov_9fa48("1469"), 'password-change'),
      uid: caller.uid,
      targetUid: data.uid,
      ip: caller.ip
    }));
  }
};
usersAPI.follow = async function (caller, data) {
  if (stryMutAct_9fa48("1470")) {
    {}
  } else {
    stryCov_9fa48("1470");
    await user.follow(caller.uid, data.uid);
    plugins.hooks.fire(stryMutAct_9fa48("1471") ? "" : (stryCov_9fa48("1471"), 'action:user.follow'), stryMutAct_9fa48("1472") ? {} : (stryCov_9fa48("1472"), {
      fromUid: caller.uid,
      toUid: data.uid
    }));
    const userData = await user.getUserFields(caller.uid, stryMutAct_9fa48("1473") ? [] : (stryCov_9fa48("1473"), [stryMutAct_9fa48("1474") ? "" : (stryCov_9fa48("1474"), 'username'), stryMutAct_9fa48("1475") ? "" : (stryCov_9fa48("1475"), 'userslug')]));
    const {
      displayname
    } = userData;
    const notifObj = await notifications.create(stryMutAct_9fa48("1476") ? {} : (stryCov_9fa48("1476"), {
      type: stryMutAct_9fa48("1477") ? "" : (stryCov_9fa48("1477"), 'follow'),
      bodyShort: stryMutAct_9fa48("1478") ? `` : (stryCov_9fa48("1478"), `[[notifications:user_started_following_you, ${displayname}]]`),
      nid: stryMutAct_9fa48("1479") ? `` : (stryCov_9fa48("1479"), `follow:${data.uid}:uid:${caller.uid}`),
      from: caller.uid,
      path: stryMutAct_9fa48("1480") ? `` : (stryCov_9fa48("1480"), `/uid/${data.uid}/followers`),
      mergeId: stryMutAct_9fa48("1481") ? "" : (stryCov_9fa48("1481"), 'notifications:user_started_following_you')
    }));
    if (stryMutAct_9fa48("1484") ? false : stryMutAct_9fa48("1483") ? true : stryMutAct_9fa48("1482") ? notifObj : (stryCov_9fa48("1482", "1483", "1484"), !notifObj)) {
      if (stryMutAct_9fa48("1485")) {
        {}
      } else {
        stryCov_9fa48("1485");
        return;
      }
    }
    notifObj.user = userData;
    await notifications.push(notifObj, stryMutAct_9fa48("1486") ? [] : (stryCov_9fa48("1486"), [data.uid]));
  }
};
usersAPI.unfollow = async function (caller, data) {
  if (stryMutAct_9fa48("1487")) {
    {}
  } else {
    stryCov_9fa48("1487");
    await user.unfollow(caller.uid, data.uid);
    plugins.hooks.fire(stryMutAct_9fa48("1488") ? "" : (stryCov_9fa48("1488"), 'action:user.unfollow'), stryMutAct_9fa48("1489") ? {} : (stryCov_9fa48("1489"), {
      fromUid: caller.uid,
      toUid: data.uid
    }));
  }
};
usersAPI.ban = async function (caller, data) {
  if (stryMutAct_9fa48("1490")) {
    {}
  } else {
    stryCov_9fa48("1490");
    if (stryMutAct_9fa48("1493") ? false : stryMutAct_9fa48("1492") ? true : stryMutAct_9fa48("1491") ? await privileges.users.hasBanPrivilege(caller.uid) : (stryCov_9fa48("1491", "1492", "1493"), !(await privileges.users.hasBanPrivilege(caller.uid)))) {
      if (stryMutAct_9fa48("1494")) {
        {}
      } else {
        stryCov_9fa48("1494");
        throw new Error(stryMutAct_9fa48("1495") ? "" : (stryCov_9fa48("1495"), '[[error:no-privileges]]'));
      }
    } else if (stryMutAct_9fa48("1497") ? false : stryMutAct_9fa48("1496") ? true : (stryCov_9fa48("1496", "1497"), await user.isAdministrator(data.uid))) {
      if (stryMutAct_9fa48("1498")) {
        {}
      } else {
        stryCov_9fa48("1498");
        throw new Error(stryMutAct_9fa48("1499") ? "" : (stryCov_9fa48("1499"), '[[error:cant-ban-other-admins]]'));
      }
    }
    const banData = await user.bans.ban(data.uid, data.until, data.reason);
    await db.setObjectField(stryMutAct_9fa48("1500") ? `` : (stryCov_9fa48("1500"), `uid:${data.uid}:ban:${banData.timestamp}`), stryMutAct_9fa48("1501") ? "" : (stryCov_9fa48("1501"), 'fromUid'), caller.uid);
    if (stryMutAct_9fa48("1504") ? false : stryMutAct_9fa48("1503") ? true : stryMutAct_9fa48("1502") ? data.reason : (stryCov_9fa48("1502", "1503", "1504"), !data.reason)) {
      if (stryMutAct_9fa48("1505")) {
        {}
      } else {
        stryCov_9fa48("1505");
        data.reason = await translator.translate(stryMutAct_9fa48("1506") ? "" : (stryCov_9fa48("1506"), '[[user:info.banned-no-reason]]'));
      }
    }
    sockets.in(stryMutAct_9fa48("1507") ? `` : (stryCov_9fa48("1507"), `uid_${data.uid}`)).emit(stryMutAct_9fa48("1508") ? "" : (stryCov_9fa48("1508"), 'event:banned'), stryMutAct_9fa48("1509") ? {} : (stryCov_9fa48("1509"), {
      until: data.until,
      reason: validator.escape(String(stryMutAct_9fa48("1512") ? data.reason && '' : stryMutAct_9fa48("1511") ? false : stryMutAct_9fa48("1510") ? true : (stryCov_9fa48("1510", "1511", "1512"), data.reason || (stryMutAct_9fa48("1513") ? "Stryker was here!" : (stryCov_9fa48("1513"), '')))))
    }));
    await flags.resolveFlag(stryMutAct_9fa48("1514") ? "" : (stryCov_9fa48("1514"), 'user'), data.uid, caller.uid);
    await flags.resolveUserPostFlags(data.uid, caller.uid);
    await events.log(stryMutAct_9fa48("1515") ? {} : (stryCov_9fa48("1515"), {
      type: stryMutAct_9fa48("1516") ? "" : (stryCov_9fa48("1516"), 'user-ban'),
      uid: caller.uid,
      targetUid: data.uid,
      ip: caller.ip,
      reason: stryMutAct_9fa48("1519") ? data.reason && undefined : stryMutAct_9fa48("1518") ? false : stryMutAct_9fa48("1517") ? true : (stryCov_9fa48("1517", "1518", "1519"), data.reason || undefined)
    }));
    plugins.hooks.fire(stryMutAct_9fa48("1520") ? "" : (stryCov_9fa48("1520"), 'action:user.banned'), stryMutAct_9fa48("1521") ? {} : (stryCov_9fa48("1521"), {
      callerUid: caller.uid,
      ip: caller.ip,
      uid: data.uid,
      until: (stryMutAct_9fa48("1525") ? data.until <= 0 : stryMutAct_9fa48("1524") ? data.until >= 0 : stryMutAct_9fa48("1523") ? false : stryMutAct_9fa48("1522") ? true : (stryCov_9fa48("1522", "1523", "1524", "1525"), data.until > 0)) ? data.until : undefined,
      reason: stryMutAct_9fa48("1528") ? data.reason && undefined : stryMutAct_9fa48("1527") ? false : stryMutAct_9fa48("1526") ? true : (stryCov_9fa48("1526", "1527", "1528"), data.reason || undefined)
    }));
    const canLoginIfBanned = await user.bans.canLoginIfBanned(data.uid);
    if (stryMutAct_9fa48("1531") ? false : stryMutAct_9fa48("1530") ? true : stryMutAct_9fa48("1529") ? canLoginIfBanned : (stryCov_9fa48("1529", "1530", "1531"), !canLoginIfBanned)) {
      if (stryMutAct_9fa48("1532")) {
        {}
      } else {
        stryCov_9fa48("1532");
        await user.auth.revokeAllSessions(data.uid);
      }
    }
  }
};
usersAPI.unban = async function (caller, data) {
  if (stryMutAct_9fa48("1533")) {
    {}
  } else {
    stryCov_9fa48("1533");
    if (stryMutAct_9fa48("1536") ? false : stryMutAct_9fa48("1535") ? true : stryMutAct_9fa48("1534") ? await privileges.users.hasBanPrivilege(caller.uid) : (stryCov_9fa48("1534", "1535", "1536"), !(await privileges.users.hasBanPrivilege(caller.uid)))) {
      if (stryMutAct_9fa48("1537")) {
        {}
      } else {
        stryCov_9fa48("1537");
        throw new Error(stryMutAct_9fa48("1538") ? "" : (stryCov_9fa48("1538"), '[[error:no-privileges]]'));
      }
    }
    await user.bans.unban(data.uid);
    sockets.in(stryMutAct_9fa48("1539") ? `` : (stryCov_9fa48("1539"), `uid_${data.uid}`)).emit(stryMutAct_9fa48("1540") ? "" : (stryCov_9fa48("1540"), 'event:unbanned'));
    await events.log(stryMutAct_9fa48("1541") ? {} : (stryCov_9fa48("1541"), {
      type: stryMutAct_9fa48("1542") ? "" : (stryCov_9fa48("1542"), 'user-unban'),
      uid: caller.uid,
      targetUid: data.uid,
      ip: caller.ip
    }));
    plugins.hooks.fire(stryMutAct_9fa48("1543") ? "" : (stryCov_9fa48("1543"), 'action:user.unbanned'), stryMutAct_9fa48("1544") ? {} : (stryCov_9fa48("1544"), {
      callerUid: caller.uid,
      ip: caller.ip,
      uid: data.uid
    }));
  }
};
usersAPI.mute = async function (caller, data) {
  if (stryMutAct_9fa48("1545")) {
    {}
  } else {
    stryCov_9fa48("1545");
    if (stryMutAct_9fa48("1548") ? false : stryMutAct_9fa48("1547") ? true : stryMutAct_9fa48("1546") ? await privileges.users.hasMutePrivilege(caller.uid) : (stryCov_9fa48("1546", "1547", "1548"), !(await privileges.users.hasMutePrivilege(caller.uid)))) {
      if (stryMutAct_9fa48("1549")) {
        {}
      } else {
        stryCov_9fa48("1549");
        throw new Error(stryMutAct_9fa48("1550") ? "" : (stryCov_9fa48("1550"), '[[error:no-privileges]]'));
      }
    } else if (stryMutAct_9fa48("1552") ? false : stryMutAct_9fa48("1551") ? true : (stryCov_9fa48("1551", "1552"), await user.isAdministrator(data.uid))) {
      if (stryMutAct_9fa48("1553")) {
        {}
      } else {
        stryCov_9fa48("1553");
        throw new Error(stryMutAct_9fa48("1554") ? "" : (stryCov_9fa48("1554"), '[[error:cant-mute-other-admins]]'));
      }
    }
    const reason = stryMutAct_9fa48("1557") ? data.reason && '[[user:info.muted-no-reason]]' : stryMutAct_9fa48("1556") ? false : stryMutAct_9fa48("1555") ? true : (stryCov_9fa48("1555", "1556", "1557"), data.reason || (stryMutAct_9fa48("1558") ? "" : (stryCov_9fa48("1558"), '[[user:info.muted-no-reason]]')));
    await db.setObject(stryMutAct_9fa48("1559") ? `` : (stryCov_9fa48("1559"), `user:${data.uid}`), stryMutAct_9fa48("1560") ? {} : (stryCov_9fa48("1560"), {
      mutedUntil: data.until,
      mutedReason: reason
    }));
    const now = Date.now();
    const muteKey = stryMutAct_9fa48("1561") ? `` : (stryCov_9fa48("1561"), `uid:${data.uid}:mute:${now}`);
    const muteData = stryMutAct_9fa48("1562") ? {} : (stryCov_9fa48("1562"), {
      fromUid: caller.uid,
      uid: data.uid,
      timestamp: now,
      expire: data.until
    });
    if (stryMutAct_9fa48("1564") ? false : stryMutAct_9fa48("1563") ? true : (stryCov_9fa48("1563", "1564"), data.reason)) {
      if (stryMutAct_9fa48("1565")) {
        {}
      } else {
        stryCov_9fa48("1565");
        muteData.reason = reason;
      }
    }
    await db.sortedSetAdd(stryMutAct_9fa48("1566") ? `` : (stryCov_9fa48("1566"), `uid:${data.uid}:mutes:timestamp`), now, muteKey);
    await db.setObject(muteKey, muteData);
    await events.log(stryMutAct_9fa48("1567") ? {} : (stryCov_9fa48("1567"), {
      type: stryMutAct_9fa48("1568") ? "" : (stryCov_9fa48("1568"), 'user-mute'),
      uid: caller.uid,
      targetUid: data.uid,
      ip: caller.ip,
      reason: stryMutAct_9fa48("1571") ? data.reason && undefined : stryMutAct_9fa48("1570") ? false : stryMutAct_9fa48("1569") ? true : (stryCov_9fa48("1569", "1570", "1571"), data.reason || undefined)
    }));
    plugins.hooks.fire(stryMutAct_9fa48("1572") ? "" : (stryCov_9fa48("1572"), 'action:user.muted'), stryMutAct_9fa48("1573") ? {} : (stryCov_9fa48("1573"), {
      callerUid: caller.uid,
      ip: caller.ip,
      uid: data.uid,
      until: (stryMutAct_9fa48("1577") ? data.until <= 0 : stryMutAct_9fa48("1576") ? data.until >= 0 : stryMutAct_9fa48("1575") ? false : stryMutAct_9fa48("1574") ? true : (stryCov_9fa48("1574", "1575", "1576", "1577"), data.until > 0)) ? data.until : undefined,
      reason: stryMutAct_9fa48("1580") ? data.reason && undefined : stryMutAct_9fa48("1579") ? false : stryMutAct_9fa48("1578") ? true : (stryCov_9fa48("1578", "1579", "1580"), data.reason || undefined)
    }));
  }
};
usersAPI.unmute = async function (caller, data) {
  if (stryMutAct_9fa48("1581")) {
    {}
  } else {
    stryCov_9fa48("1581");
    if (stryMutAct_9fa48("1584") ? false : stryMutAct_9fa48("1583") ? true : stryMutAct_9fa48("1582") ? await privileges.users.hasMutePrivilege(caller.uid) : (stryCov_9fa48("1582", "1583", "1584"), !(await privileges.users.hasMutePrivilege(caller.uid)))) {
      if (stryMutAct_9fa48("1585")) {
        {}
      } else {
        stryCov_9fa48("1585");
        throw new Error(stryMutAct_9fa48("1586") ? "" : (stryCov_9fa48("1586"), '[[error:no-privileges]]'));
      }
    }
    await db.deleteObjectFields(stryMutAct_9fa48("1587") ? `` : (stryCov_9fa48("1587"), `user:${data.uid}`), stryMutAct_9fa48("1588") ? [] : (stryCov_9fa48("1588"), [stryMutAct_9fa48("1589") ? "" : (stryCov_9fa48("1589"), 'mutedUntil'), stryMutAct_9fa48("1590") ? "" : (stryCov_9fa48("1590"), 'mutedReason')]));
    await events.log(stryMutAct_9fa48("1591") ? {} : (stryCov_9fa48("1591"), {
      type: stryMutAct_9fa48("1592") ? "" : (stryCov_9fa48("1592"), 'user-unmute'),
      uid: caller.uid,
      targetUid: data.uid,
      ip: caller.ip
    }));
    plugins.hooks.fire(stryMutAct_9fa48("1593") ? "" : (stryCov_9fa48("1593"), 'action:user.unmuted'), stryMutAct_9fa48("1594") ? {} : (stryCov_9fa48("1594"), {
      callerUid: caller.uid,
      ip: caller.ip,
      uid: data.uid
    }));
  }
};
async function isPrivilegedOrSelfAndPasswordMatch(caller, data) {
  if (stryMutAct_9fa48("1595")) {
    {}
  } else {
    stryCov_9fa48("1595");
    const {
      uid
    } = caller;
    const isSelf = stryMutAct_9fa48("1598") ? parseInt(uid, 10) !== parseInt(data.uid, 10) : stryMutAct_9fa48("1597") ? false : stryMutAct_9fa48("1596") ? true : (stryCov_9fa48("1596", "1597", "1598"), parseInt(uid, 10) === parseInt(data.uid, 10));
    const canEdit = await privileges.users.canEdit(uid, data.uid);
    if (stryMutAct_9fa48("1601") ? false : stryMutAct_9fa48("1600") ? true : stryMutAct_9fa48("1599") ? canEdit : (stryCov_9fa48("1599", "1600", "1601"), !canEdit)) {
      if (stryMutAct_9fa48("1602")) {
        {}
      } else {
        stryCov_9fa48("1602");
        throw new Error(stryMutAct_9fa48("1603") ? "" : (stryCov_9fa48("1603"), '[[error:no-privileges]]'));
      }
    }
    const [hasPassword, passwordMatch] = await Promise.all(stryMutAct_9fa48("1604") ? [] : (stryCov_9fa48("1604"), [user.hasPassword(data.uid), data.password ? user.isPasswordCorrect(data.uid, data.password, caller.ip) : stryMutAct_9fa48("1605") ? true : (stryCov_9fa48("1605"), false)]));
    if (stryMutAct_9fa48("1608") ? isSelf && hasPassword || !passwordMatch : stryMutAct_9fa48("1607") ? false : stryMutAct_9fa48("1606") ? true : (stryCov_9fa48("1606", "1607", "1608"), (stryMutAct_9fa48("1610") ? isSelf || hasPassword : stryMutAct_9fa48("1609") ? true : (stryCov_9fa48("1609", "1610"), isSelf && hasPassword)) && (stryMutAct_9fa48("1611") ? passwordMatch : (stryCov_9fa48("1611"), !passwordMatch)))) {
      if (stryMutAct_9fa48("1612")) {
        {}
      } else {
        stryCov_9fa48("1612");
        throw new Error(stryMutAct_9fa48("1613") ? "" : (stryCov_9fa48("1613"), '[[error:invalid-password]]'));
      }
    }
  }
}
async function processDeletion({
  uid,
  method,
  password,
  caller
}) {
  if (stryMutAct_9fa48("1614")) {
    {}
  } else {
    stryCov_9fa48("1614");
    const isTargetAdmin = await user.isAdministrator(uid);
    const isSelf = stryMutAct_9fa48("1617") ? parseInt(uid, 10) !== parseInt(caller.uid, 10) : stryMutAct_9fa48("1616") ? false : stryMutAct_9fa48("1615") ? true : (stryCov_9fa48("1615", "1616", "1617"), parseInt(uid, 10) === parseInt(caller.uid, 10));
    const isAdmin = await user.isAdministrator(caller.uid);
    if (stryMutAct_9fa48("1620") ? isSelf || meta.config.allowAccountDelete !== 1 : stryMutAct_9fa48("1619") ? false : stryMutAct_9fa48("1618") ? true : (stryCov_9fa48("1618", "1619", "1620"), isSelf && (stryMutAct_9fa48("1622") ? meta.config.allowAccountDelete === 1 : stryMutAct_9fa48("1621") ? true : (stryCov_9fa48("1621", "1622"), meta.config.allowAccountDelete !== 1)))) {
      if (stryMutAct_9fa48("1623")) {
        {}
      } else {
        stryCov_9fa48("1623");
        throw new Error(stryMutAct_9fa48("1624") ? "" : (stryCov_9fa48("1624"), '[[error:account-deletion-disabled]]'));
      }
    } else if (stryMutAct_9fa48("1627") ? !isSelf || !isAdmin : stryMutAct_9fa48("1626") ? false : stryMutAct_9fa48("1625") ? true : (stryCov_9fa48("1625", "1626", "1627"), (stryMutAct_9fa48("1628") ? isSelf : (stryCov_9fa48("1628"), !isSelf)) && (stryMutAct_9fa48("1629") ? isAdmin : (stryCov_9fa48("1629"), !isAdmin)))) {
      if (stryMutAct_9fa48("1630")) {
        {}
      } else {
        stryCov_9fa48("1630");
        throw new Error(stryMutAct_9fa48("1631") ? "" : (stryCov_9fa48("1631"), '[[error:no-privileges]]'));
      }
    } else if (stryMutAct_9fa48("1633") ? false : stryMutAct_9fa48("1632") ? true : (stryCov_9fa48("1632", "1633"), isTargetAdmin)) {
      if (stryMutAct_9fa48("1634")) {
        {}
      } else {
        stryCov_9fa48("1634");
        throw new Error(stryMutAct_9fa48("1635") ? "" : (stryCov_9fa48("1635"), '[[error:cant-delete-admin]'));
      }
    }

    // Privilege checks -- only deleteAccount is available for non-admins
    const hasAdminPrivilege = await privileges.admin.can(stryMutAct_9fa48("1636") ? "" : (stryCov_9fa48("1636"), 'admin:users'), caller.uid);
    if (stryMutAct_9fa48("1639") ? !hasAdminPrivilege || ['delete', 'deleteContent'].includes(method) : stryMutAct_9fa48("1638") ? false : stryMutAct_9fa48("1637") ? true : (stryCov_9fa48("1637", "1638", "1639"), (stryMutAct_9fa48("1640") ? hasAdminPrivilege : (stryCov_9fa48("1640"), !hasAdminPrivilege)) && (stryMutAct_9fa48("1641") ? [] : (stryCov_9fa48("1641"), [stryMutAct_9fa48("1642") ? "" : (stryCov_9fa48("1642"), 'delete'), stryMutAct_9fa48("1643") ? "" : (stryCov_9fa48("1643"), 'deleteContent')])).includes(method))) {
      if (stryMutAct_9fa48("1644")) {
        {}
      } else {
        stryCov_9fa48("1644");
        throw new Error(stryMutAct_9fa48("1645") ? "" : (stryCov_9fa48("1645"), '[[error:no-privileges]]'));
      }
    }

    // Self-deletions require a password
    const hasPassword = await user.hasPassword(uid);
    if (stryMutAct_9fa48("1648") ? isSelf || hasPassword : stryMutAct_9fa48("1647") ? false : stryMutAct_9fa48("1646") ? true : (stryCov_9fa48("1646", "1647", "1648"), isSelf && hasPassword)) {
      if (stryMutAct_9fa48("1649")) {
        {}
      } else {
        stryCov_9fa48("1649");
        const ok = await user.isPasswordCorrect(uid, password, caller.ip);
        if (stryMutAct_9fa48("1652") ? false : stryMutAct_9fa48("1651") ? true : stryMutAct_9fa48("1650") ? ok : (stryCov_9fa48("1650", "1651", "1652"), !ok)) {
          if (stryMutAct_9fa48("1653")) {
            {}
          } else {
            stryCov_9fa48("1653");
            throw new Error(stryMutAct_9fa48("1654") ? "" : (stryCov_9fa48("1654"), '[[error:invalid-password]]'));
          }
        }
      }
    }
    await flags.resolveFlag(stryMutAct_9fa48("1655") ? "" : (stryCov_9fa48("1655"), 'user'), uid, caller.uid);
    let userData;
    if (stryMutAct_9fa48("1658") ? method !== 'deleteAccount' : stryMutAct_9fa48("1657") ? false : stryMutAct_9fa48("1656") ? true : (stryCov_9fa48("1656", "1657", "1658"), method === (stryMutAct_9fa48("1659") ? "" : (stryCov_9fa48("1659"), 'deleteAccount')))) {
      if (stryMutAct_9fa48("1660")) {
        {}
      } else {
        stryCov_9fa48("1660");
        userData = await user[method](uid);
      }
    } else {
      if (stryMutAct_9fa48("1661")) {
        {}
      } else {
        stryCov_9fa48("1661");
        userData = await user[method](caller.uid, uid);
      }
    }
    userData = stryMutAct_9fa48("1664") ? userData && {} : stryMutAct_9fa48("1663") ? false : stryMutAct_9fa48("1662") ? true : (stryCov_9fa48("1662", "1663", "1664"), userData || {});
    sockets.server.sockets.emit(stryMutAct_9fa48("1665") ? "" : (stryCov_9fa48("1665"), 'event:user_status_change'), stryMutAct_9fa48("1666") ? {} : (stryCov_9fa48("1666"), {
      uid: caller.uid,
      status: stryMutAct_9fa48("1667") ? "" : (stryCov_9fa48("1667"), 'offline')
    }));
    plugins.hooks.fire(stryMutAct_9fa48("1668") ? "" : (stryCov_9fa48("1668"), 'action:user.delete'), stryMutAct_9fa48("1669") ? {} : (stryCov_9fa48("1669"), {
      callerUid: caller.uid,
      uid: uid,
      ip: caller.ip,
      user: userData
    }));
    await events.log(stryMutAct_9fa48("1670") ? {} : (stryCov_9fa48("1670"), {
      type: stryMutAct_9fa48("1671") ? `` : (stryCov_9fa48("1671"), `user-${method}`),
      uid: caller.uid,
      targetUid: uid,
      ip: caller.ip,
      username: userData.username,
      email: userData.email
    }));
  }
}
async function canDeleteUids(uids) {
  if (stryMutAct_9fa48("1672")) {
    {}
  } else {
    stryCov_9fa48("1672");
    if (stryMutAct_9fa48("1675") ? false : stryMutAct_9fa48("1674") ? true : stryMutAct_9fa48("1673") ? Array.isArray(uids) : (stryCov_9fa48("1673", "1674", "1675"), !Array.isArray(uids))) {
      if (stryMutAct_9fa48("1676")) {
        {}
      } else {
        stryCov_9fa48("1676");
        throw new Error(stryMutAct_9fa48("1677") ? "" : (stryCov_9fa48("1677"), '[[error:invalid-data]]'));
      }
    }
    const isMembers = await groups.isMembers(uids, stryMutAct_9fa48("1678") ? "" : (stryCov_9fa48("1678"), 'administrators'));
    if (stryMutAct_9fa48("1680") ? false : stryMutAct_9fa48("1679") ? true : (stryCov_9fa48("1679", "1680"), isMembers.includes(stryMutAct_9fa48("1681") ? false : (stryCov_9fa48("1681"), true)))) {
      if (stryMutAct_9fa48("1682")) {
        {}
      } else {
        stryCov_9fa48("1682");
        throw new Error(stryMutAct_9fa48("1683") ? "" : (stryCov_9fa48("1683"), '[[error:cant-delete-other-admins]]'));
      }
    }
    return stryMutAct_9fa48("1684") ? false : (stryCov_9fa48("1684"), true);
  }
}
usersAPI.search = async function (caller, data) {
  if (stryMutAct_9fa48("1685")) {
    {}
  } else {
    stryCov_9fa48("1685");
    if (stryMutAct_9fa48("1688") ? false : stryMutAct_9fa48("1687") ? true : stryMutAct_9fa48("1686") ? data : (stryCov_9fa48("1686", "1687", "1688"), !data)) {
      if (stryMutAct_9fa48("1689")) {
        {}
      } else {
        stryCov_9fa48("1689");
        throw new Error(stryMutAct_9fa48("1690") ? "" : (stryCov_9fa48("1690"), '[[error:invalid-data]]'));
      }
    }
    const [allowed, isPrivileged] = await Promise.all(stryMutAct_9fa48("1691") ? [] : (stryCov_9fa48("1691"), [privileges.global.can(stryMutAct_9fa48("1692") ? "" : (stryCov_9fa48("1692"), 'search:users'), caller.uid), user.isPrivileged(caller.uid)]));
    let filters = stryMutAct_9fa48("1695") ? data.filters && [] : stryMutAct_9fa48("1694") ? false : stryMutAct_9fa48("1693") ? true : (stryCov_9fa48("1693", "1694", "1695"), data.filters || (stryMutAct_9fa48("1696") ? ["Stryker was here"] : (stryCov_9fa48("1696"), [])));
    filters = Array.isArray(filters) ? filters : stryMutAct_9fa48("1697") ? [] : (stryCov_9fa48("1697"), [filters]);
    if (stryMutAct_9fa48("1700") ? !allowed && (data.searchBy === 'ip' || data.searchBy === 'email' || filters.includes('banned') || filters.includes('flagged')) && !isPrivileged : stryMutAct_9fa48("1699") ? false : stryMutAct_9fa48("1698") ? true : (stryCov_9fa48("1698", "1699", "1700"), (stryMutAct_9fa48("1701") ? allowed : (stryCov_9fa48("1701"), !allowed)) || (stryMutAct_9fa48("1703") ? data.searchBy === 'ip' || data.searchBy === 'email' || filters.includes('banned') || filters.includes('flagged') || !isPrivileged : stryMutAct_9fa48("1702") ? false : (stryCov_9fa48("1702", "1703"), (stryMutAct_9fa48("1705") ? (data.searchBy === 'ip' || data.searchBy === 'email' || filters.includes('banned')) && filters.includes('flagged') : stryMutAct_9fa48("1704") ? true : (stryCov_9fa48("1704", "1705"), (stryMutAct_9fa48("1707") ? (data.searchBy === 'ip' || data.searchBy === 'email') && filters.includes('banned') : stryMutAct_9fa48("1706") ? false : (stryCov_9fa48("1706", "1707"), (stryMutAct_9fa48("1709") ? data.searchBy === 'ip' && data.searchBy === 'email' : stryMutAct_9fa48("1708") ? false : (stryCov_9fa48("1708", "1709"), (stryMutAct_9fa48("1711") ? data.searchBy !== 'ip' : stryMutAct_9fa48("1710") ? false : (stryCov_9fa48("1710", "1711"), data.searchBy === (stryMutAct_9fa48("1712") ? "" : (stryCov_9fa48("1712"), 'ip')))) || (stryMutAct_9fa48("1714") ? data.searchBy !== 'email' : stryMutAct_9fa48("1713") ? false : (stryCov_9fa48("1713", "1714"), data.searchBy === (stryMutAct_9fa48("1715") ? "" : (stryCov_9fa48("1715"), 'email')))))) || filters.includes(stryMutAct_9fa48("1716") ? "" : (stryCov_9fa48("1716"), 'banned')))) || filters.includes(stryMutAct_9fa48("1717") ? "" : (stryCov_9fa48("1717"), 'flagged')))) && (stryMutAct_9fa48("1718") ? isPrivileged : (stryCov_9fa48("1718"), !isPrivileged)))))) {
      if (stryMutAct_9fa48("1719")) {
        {}
      } else {
        stryCov_9fa48("1719");
        throw new Error(stryMutAct_9fa48("1720") ? "" : (stryCov_9fa48("1720"), '[[error:no-privileges]]'));
      }
    }
    return await user.search(stryMutAct_9fa48("1721") ? {} : (stryCov_9fa48("1721"), {
      query: data.query,
      searchBy: stryMutAct_9fa48("1724") ? data.searchBy && 'username' : stryMutAct_9fa48("1723") ? false : stryMutAct_9fa48("1722") ? true : (stryCov_9fa48("1722", "1723", "1724"), data.searchBy || (stryMutAct_9fa48("1725") ? "" : (stryCov_9fa48("1725"), 'username'))),
      page: stryMutAct_9fa48("1728") ? data.page && 1 : stryMutAct_9fa48("1727") ? false : stryMutAct_9fa48("1726") ? true : (stryCov_9fa48("1726", "1727", "1728"), data.page || 1),
      sortBy: stryMutAct_9fa48("1731") ? data.sortBy && 'lastonline' : stryMutAct_9fa48("1730") ? false : stryMutAct_9fa48("1729") ? true : (stryCov_9fa48("1729", "1730", "1731"), data.sortBy || (stryMutAct_9fa48("1732") ? "" : (stryCov_9fa48("1732"), 'lastonline'))),
      filters: filters
    }));
  }
};
usersAPI.changePicture = async (caller, data) => {
  if (stryMutAct_9fa48("1733")) {
    {}
  } else {
    stryCov_9fa48("1733");
    if (stryMutAct_9fa48("1736") ? false : stryMutAct_9fa48("1735") ? true : stryMutAct_9fa48("1734") ? data : (stryCov_9fa48("1734", "1735", "1736"), !data)) {
      if (stryMutAct_9fa48("1737")) {
        {}
      } else {
        stryCov_9fa48("1737");
        throw new Error(stryMutAct_9fa48("1738") ? "" : (stryCov_9fa48("1738"), '[[error:invalid-data]]'));
      }
    }
    const {
      type,
      url
    } = data;
    let picture = stryMutAct_9fa48("1739") ? "Stryker was here!" : (stryCov_9fa48("1739"), '');
    await user.checkMinReputation(caller.uid, data.uid, stryMutAct_9fa48("1740") ? "" : (stryCov_9fa48("1740"), 'min:rep:profile-picture'));
    const canEdit = await privileges.users.canEdit(caller.uid, data.uid);
    if (stryMutAct_9fa48("1743") ? false : stryMutAct_9fa48("1742") ? true : stryMutAct_9fa48("1741") ? canEdit : (stryCov_9fa48("1741", "1742", "1743"), !canEdit)) {
      if (stryMutAct_9fa48("1744")) {
        {}
      } else {
        stryCov_9fa48("1744");
        throw new Error(stryMutAct_9fa48("1745") ? "" : (stryCov_9fa48("1745"), '[[error:no-privileges]]'));
      }
    }
    if (stryMutAct_9fa48("1748") ? type !== 'default' : stryMutAct_9fa48("1747") ? false : stryMutAct_9fa48("1746") ? true : (stryCov_9fa48("1746", "1747", "1748"), type === (stryMutAct_9fa48("1749") ? "" : (stryCov_9fa48("1749"), 'default')))) {
      if (stryMutAct_9fa48("1750")) {
        {}
      } else {
        stryCov_9fa48("1750");
        picture = stryMutAct_9fa48("1751") ? "Stryker was here!" : (stryCov_9fa48("1751"), '');
      }
    } else if (stryMutAct_9fa48("1754") ? type !== 'uploaded' : stryMutAct_9fa48("1753") ? false : stryMutAct_9fa48("1752") ? true : (stryCov_9fa48("1752", "1753", "1754"), type === (stryMutAct_9fa48("1755") ? "" : (stryCov_9fa48("1755"), 'uploaded')))) {
      if (stryMutAct_9fa48("1756")) {
        {}
      } else {
        stryCov_9fa48("1756");
        picture = await user.getUserField(data.uid, stryMutAct_9fa48("1757") ? "" : (stryCov_9fa48("1757"), 'uploadedpicture'));
      }
    } else if (stryMutAct_9fa48("1760") ? type === 'external' || url : stryMutAct_9fa48("1759") ? false : stryMutAct_9fa48("1758") ? true : (stryCov_9fa48("1758", "1759", "1760"), (stryMutAct_9fa48("1762") ? type !== 'external' : stryMutAct_9fa48("1761") ? true : (stryCov_9fa48("1761", "1762"), type === (stryMutAct_9fa48("1763") ? "" : (stryCov_9fa48("1763"), 'external')))) && url)) {
      if (stryMutAct_9fa48("1764")) {
        {}
      } else {
        stryCov_9fa48("1764");
        picture = validator.escape(url);
      }
    } else {
      if (stryMutAct_9fa48("1765")) {
        {}
      } else {
        stryCov_9fa48("1765");
        const returnData = await plugins.hooks.fire(stryMutAct_9fa48("1766") ? "" : (stryCov_9fa48("1766"), 'filter:user.getPicture'), stryMutAct_9fa48("1767") ? {} : (stryCov_9fa48("1767"), {
          uid: caller.uid,
          type: type,
          picture: undefined
        }));
        picture = stryMutAct_9fa48("1770") ? returnData || returnData.picture : stryMutAct_9fa48("1769") ? false : stryMutAct_9fa48("1768") ? true : (stryCov_9fa48("1768", "1769", "1770"), returnData && returnData.picture);
      }
    }
    const validBackgrounds = await user.getIconBackgrounds(caller.uid);
    if (stryMutAct_9fa48("1773") ? false : stryMutAct_9fa48("1772") ? true : stryMutAct_9fa48("1771") ? validBackgrounds.includes(data.bgColor) : (stryCov_9fa48("1771", "1772", "1773"), !validBackgrounds.includes(data.bgColor))) {
      if (stryMutAct_9fa48("1774")) {
        {}
      } else {
        stryCov_9fa48("1774");
        data.bgColor = validBackgrounds[0];
      }
    }
    await user.updateProfile(caller.uid, stryMutAct_9fa48("1775") ? {} : (stryCov_9fa48("1775"), {
      uid: data.uid,
      picture: picture,
      'icon:bgColor': data.bgColor
    }), stryMutAct_9fa48("1776") ? [] : (stryCov_9fa48("1776"), [stryMutAct_9fa48("1777") ? "" : (stryCov_9fa48("1777"), 'picture'), stryMutAct_9fa48("1778") ? "" : (stryCov_9fa48("1778"), 'icon:bgColor')]));
  }
};
usersAPI.generateExport = async (caller, {
  uid,
  type
}) => {
  if (stryMutAct_9fa48("1779")) {
    {}
  } else {
    stryCov_9fa48("1779");
    const count = await db.incrObjectField(stryMutAct_9fa48("1780") ? "" : (stryCov_9fa48("1780"), 'locks'), stryMutAct_9fa48("1781") ? `` : (stryCov_9fa48("1781"), `export:${uid}${type}`));
    if (stryMutAct_9fa48("1785") ? count <= 1 : stryMutAct_9fa48("1784") ? count >= 1 : stryMutAct_9fa48("1783") ? false : stryMutAct_9fa48("1782") ? true : (stryCov_9fa48("1782", "1783", "1784", "1785"), count > 1)) {
      if (stryMutAct_9fa48("1786")) {
        {}
      } else {
        stryCov_9fa48("1786");
        throw new Error(stryMutAct_9fa48("1787") ? "" : (stryCov_9fa48("1787"), '[[error:already-exporting]]'));
      }
    }
    const child = require('child_process').fork(stryMutAct_9fa48("1788") ? `` : (stryCov_9fa48("1788"), `./src/user/jobs/export-${type}.js`), stryMutAct_9fa48("1789") ? ["Stryker was here"] : (stryCov_9fa48("1789"), []), stryMutAct_9fa48("1790") ? {} : (stryCov_9fa48("1790"), {
      env: process.env
    }));
    child.send(stryMutAct_9fa48("1791") ? {} : (stryCov_9fa48("1791"), {
      uid
    }));
    child.on(stryMutAct_9fa48("1792") ? "" : (stryCov_9fa48("1792"), 'error'), async err => {
      if (stryMutAct_9fa48("1793")) {
        {}
      } else {
        stryCov_9fa48("1793");
        winston.error(err.stack);
        await db.deleteObjectField(stryMutAct_9fa48("1794") ? "" : (stryCov_9fa48("1794"), 'locks'), stryMutAct_9fa48("1795") ? `` : (stryCov_9fa48("1795"), `export:${uid}${type}`));
      }
    });
    child.on(stryMutAct_9fa48("1796") ? "" : (stryCov_9fa48("1796"), 'exit'), async () => {
      if (stryMutAct_9fa48("1797")) {
        {}
      } else {
        stryCov_9fa48("1797");
        await db.deleteObjectField(stryMutAct_9fa48("1798") ? "" : (stryCov_9fa48("1798"), 'locks'), stryMutAct_9fa48("1799") ? `` : (stryCov_9fa48("1799"), `export:${uid}${type}`));
        const userData = await user.getUserFields(uid, stryMutAct_9fa48("1800") ? [] : (stryCov_9fa48("1800"), [stryMutAct_9fa48("1801") ? "" : (stryCov_9fa48("1801"), 'username'), stryMutAct_9fa48("1802") ? "" : (stryCov_9fa48("1802"), 'userslug')]));
        const {
          displayname
        } = userData;
        const n = await notifications.create(stryMutAct_9fa48("1803") ? {} : (stryCov_9fa48("1803"), {
          bodyShort: stryMutAct_9fa48("1804") ? `` : (stryCov_9fa48("1804"), `[[notifications:${type}-exported, ${displayname}]]`),
          path: stryMutAct_9fa48("1805") ? `` : (stryCov_9fa48("1805"), `/api/user/${userData.userslug}/export/${type}`),
          nid: stryMutAct_9fa48("1806") ? `` : (stryCov_9fa48("1806"), `${type}:export:${uid}`),
          from: uid
        }));
        await notifications.push(n, stryMutAct_9fa48("1807") ? [] : (stryCov_9fa48("1807"), [caller.uid]));
        await events.log(stryMutAct_9fa48("1808") ? {} : (stryCov_9fa48("1808"), {
          type: stryMutAct_9fa48("1809") ? `` : (stryCov_9fa48("1809"), `export:${type}`),
          uid: caller.uid,
          targetUid: uid,
          ip: caller.ip
        }));
      }
    });
  }
};