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
const util = require('util');
const winston = require('winston');
const sleep = util.promisify(setTimeout);
const user = require('../user');
const topics = require('../topics');
const messaging = require('../messaging');
const plugins = require('../plugins');
const meta = require('../meta');
const events = require('../events');
const emailer = require('../emailer');
const db = require('../database');
const userController = require('../controllers/user');
const privileges = require('../privileges');
const utils = require('../utils');
const sockets = require('.');
const SocketUser = module.exports;
require('./user/profile')(SocketUser);
require('./user/status')(SocketUser);
require('./user/picture')(SocketUser);
require('./user/registration')(SocketUser);
SocketUser.emailConfirm = async function (socket) {
  if (stryMutAct_9fa48("37552")) {
    {}
  } else {
    stryCov_9fa48("37552");
    sockets.warnDeprecated(socket, stryMutAct_9fa48("37553") ? "" : (stryCov_9fa48("37553"), 'HTTP 302 /me/edit/email'));
    if (stryMutAct_9fa48("37556") ? false : stryMutAct_9fa48("37555") ? true : stryMutAct_9fa48("37554") ? socket.uid : (stryCov_9fa48("37554", "37555", "37556"), !socket.uid)) {
      if (stryMutAct_9fa48("37557")) {
        {}
      } else {
        stryCov_9fa48("37557");
        throw new Error(stryMutAct_9fa48("37558") ? "" : (stryCov_9fa48("37558"), '[[error:no-privileges]]'));
      }
    }
    return await user.email.sendValidationEmail(socket.uid);
  }
};

// Password Reset
SocketUser.reset = {};
SocketUser.reset.send = async function (socket, email) {
  if (stryMutAct_9fa48("37559")) {
    {}
  } else {
    stryCov_9fa48("37559");
    if (stryMutAct_9fa48("37562") ? false : stryMutAct_9fa48("37561") ? true : stryMutAct_9fa48("37560") ? email : (stryCov_9fa48("37560", "37561", "37562"), !email)) {
      if (stryMutAct_9fa48("37563")) {
        {}
      } else {
        stryCov_9fa48("37563");
        throw new Error(stryMutAct_9fa48("37564") ? "" : (stryCov_9fa48("37564"), '[[error:invalid-data]]'));
      }
    }
    if (stryMutAct_9fa48("37566") ? false : stryMutAct_9fa48("37565") ? true : (stryCov_9fa48("37565", "37566"), meta.config[stryMutAct_9fa48("37567") ? "" : (stryCov_9fa48("37567"), 'password:disableEdit')])) {
      if (stryMutAct_9fa48("37568")) {
        {}
      } else {
        stryCov_9fa48("37568");
        throw new Error(stryMutAct_9fa48("37569") ? "" : (stryCov_9fa48("37569"), '[[error:no-privileges]]'));
      }
    }
    async function logEvent(text) {
      if (stryMutAct_9fa48("37570")) {
        {}
      } else {
        stryCov_9fa48("37570");
        await events.log(stryMutAct_9fa48("37571") ? {} : (stryCov_9fa48("37571"), {
          type: stryMutAct_9fa48("37572") ? "" : (stryCov_9fa48("37572"), 'password-reset'),
          text: text,
          ip: socket.ip,
          uid: socket.uid,
          email: email
        }));
      }
    }
    try {
      if (stryMutAct_9fa48("37573")) {
        {}
      } else {
        stryCov_9fa48("37573");
        await user.reset.send(email);
        await logEvent(stryMutAct_9fa48("37574") ? "" : (stryCov_9fa48("37574"), '[[success:success]]'));
        await sleep(stryMutAct_9fa48("37575") ? 2500 - (Math.random() * 500 - 250) : (stryCov_9fa48("37575"), 2500 + (stryMutAct_9fa48("37576") ? Math.random() * 500 + 250 : (stryCov_9fa48("37576"), (stryMutAct_9fa48("37577") ? Math.random() / 500 : (stryCov_9fa48("37577"), Math.random() * 500)) - 250))));
      }
    } catch (err) {
      if (stryMutAct_9fa48("37578")) {
        {}
      } else {
        stryCov_9fa48("37578");
        await logEvent(err.message);
        await sleep(stryMutAct_9fa48("37579") ? 2500 - (Math.random() * 500 - 250) : (stryCov_9fa48("37579"), 2500 + (stryMutAct_9fa48("37580") ? Math.random() * 500 + 250 : (stryCov_9fa48("37580"), (stryMutAct_9fa48("37581") ? Math.random() / 500 : (stryCov_9fa48("37581"), Math.random() * 500)) - 250))));
        const internalErrors = stryMutAct_9fa48("37582") ? [] : (stryCov_9fa48("37582"), [stryMutAct_9fa48("37583") ? "" : (stryCov_9fa48("37583"), '[[error:invalid-email]]'), stryMutAct_9fa48("37584") ? "" : (stryCov_9fa48("37584"), '[[error:reset-rate-limited]]')]);
        if (stryMutAct_9fa48("37587") ? false : stryMutAct_9fa48("37586") ? true : stryMutAct_9fa48("37585") ? internalErrors.includes(err.message) : (stryCov_9fa48("37585", "37586", "37587"), !internalErrors.includes(err.message))) {
          if (stryMutAct_9fa48("37588")) {
            {}
          } else {
            stryCov_9fa48("37588");
            throw err;
          }
        }
      }
    }
  }
};
SocketUser.reset.commit = async function (socket, data) {
  if (stryMutAct_9fa48("37589")) {
    {}
  } else {
    stryCov_9fa48("37589");
    if (stryMutAct_9fa48("37592") ? (!data || !data.code) && !data.password : stryMutAct_9fa48("37591") ? false : stryMutAct_9fa48("37590") ? true : (stryCov_9fa48("37590", "37591", "37592"), (stryMutAct_9fa48("37594") ? !data && !data.code : stryMutAct_9fa48("37593") ? false : (stryCov_9fa48("37593", "37594"), (stryMutAct_9fa48("37595") ? data : (stryCov_9fa48("37595"), !data)) || (stryMutAct_9fa48("37596") ? data.code : (stryCov_9fa48("37596"), !data.code)))) || (stryMutAct_9fa48("37597") ? data.password : (stryCov_9fa48("37597"), !data.password)))) {
      if (stryMutAct_9fa48("37598")) {
        {}
      } else {
        stryCov_9fa48("37598");
        throw new Error(stryMutAct_9fa48("37599") ? "" : (stryCov_9fa48("37599"), '[[error:invalid-data]]'));
      }
    }
    const [uid] = await Promise.all(stryMutAct_9fa48("37600") ? [] : (stryCov_9fa48("37600"), [db.getObjectField(stryMutAct_9fa48("37601") ? "" : (stryCov_9fa48("37601"), 'reset:uid'), data.code), user.reset.commit(data.code, data.password), plugins.hooks.fire(stryMutAct_9fa48("37602") ? "" : (stryCov_9fa48("37602"), 'action:password.reset'), stryMutAct_9fa48("37603") ? {} : (stryCov_9fa48("37603"), {
      uid: socket.uid
    }))]));
    await events.log(stryMutAct_9fa48("37604") ? {} : (stryCov_9fa48("37604"), {
      type: stryMutAct_9fa48("37605") ? "" : (stryCov_9fa48("37605"), 'password-reset'),
      uid: uid,
      ip: socket.ip
    }));
    const username = await user.getUserField(uid, stryMutAct_9fa48("37606") ? "" : (stryCov_9fa48("37606"), 'username'));
    const now = new Date();
    const parsedDate = stryMutAct_9fa48("37607") ? `` : (stryCov_9fa48("37607"), `${now.getFullYear()}/${stryMutAct_9fa48("37608") ? now.getMonth() - 1 : (stryCov_9fa48("37608"), now.getMonth() + 1)}/${now.getDate()}`);
    emailer.send(stryMutAct_9fa48("37609") ? "" : (stryCov_9fa48("37609"), 'reset_notify'), uid, stryMutAct_9fa48("37610") ? {} : (stryCov_9fa48("37610"), {
      username: username,
      date: parsedDate,
      subject: stryMutAct_9fa48("37611") ? "" : (stryCov_9fa48("37611"), '[[email:reset.notify.subject]]')
    })).catch(stryMutAct_9fa48("37612") ? () => undefined : (stryCov_9fa48("37612"), err => winston.error(stryMutAct_9fa48("37613") ? `` : (stryCov_9fa48("37613"), `[emailer.send] ${err.stack}`))));
  }
};
SocketUser.isFollowing = async function (socket, data) {
  if (stryMutAct_9fa48("37614")) {
    {}
  } else {
    stryCov_9fa48("37614");
    if (stryMutAct_9fa48("37617") ? !socket.uid && !data.uid : stryMutAct_9fa48("37616") ? false : stryMutAct_9fa48("37615") ? true : (stryCov_9fa48("37615", "37616", "37617"), (stryMutAct_9fa48("37618") ? socket.uid : (stryCov_9fa48("37618"), !socket.uid)) || (stryMutAct_9fa48("37619") ? data.uid : (stryCov_9fa48("37619"), !data.uid)))) {
      if (stryMutAct_9fa48("37620")) {
        {}
      } else {
        stryCov_9fa48("37620");
        return stryMutAct_9fa48("37621") ? true : (stryCov_9fa48("37621"), false);
      }
    }
    return await user.isFollowing(socket.uid, data.uid);
  }
};
SocketUser.getUnreadCount = async function (socket) {
  if (stryMutAct_9fa48("37622")) {
    {}
  } else {
    stryCov_9fa48("37622");
    if (stryMutAct_9fa48("37625") ? false : stryMutAct_9fa48("37624") ? true : stryMutAct_9fa48("37623") ? socket.uid : (stryCov_9fa48("37623", "37624", "37625"), !socket.uid)) {
      if (stryMutAct_9fa48("37626")) {
        {}
      } else {
        stryCov_9fa48("37626");
        return 0;
      }
    }
    return await topics.getTotalUnread(socket.uid, stryMutAct_9fa48("37627") ? "Stryker was here!" : (stryCov_9fa48("37627"), ''));
  }
};
SocketUser.getUnreadChatCount = async function (socket) {
  if (stryMutAct_9fa48("37628")) {
    {}
  } else {
    stryCov_9fa48("37628");
    if (stryMutAct_9fa48("37631") ? false : stryMutAct_9fa48("37630") ? true : stryMutAct_9fa48("37629") ? socket.uid : (stryCov_9fa48("37629", "37630", "37631"), !socket.uid)) {
      if (stryMutAct_9fa48("37632")) {
        {}
      } else {
        stryCov_9fa48("37632");
        return 0;
      }
    }
    return await messaging.getUnreadCount(socket.uid);
  }
};
SocketUser.getUnreadCounts = async function (socket) {
  if (stryMutAct_9fa48("37633")) {
    {}
  } else {
    stryCov_9fa48("37633");
    if (stryMutAct_9fa48("37636") ? false : stryMutAct_9fa48("37635") ? true : stryMutAct_9fa48("37634") ? socket.uid : (stryCov_9fa48("37634", "37635", "37636"), !socket.uid)) {
      if (stryMutAct_9fa48("37637")) {
        {}
      } else {
        stryCov_9fa48("37637");
        return {};
      }
    }
    const results = await utils.promiseParallel(stryMutAct_9fa48("37638") ? {} : (stryCov_9fa48("37638"), {
      unreadCounts: topics.getUnreadTids(stryMutAct_9fa48("37639") ? {} : (stryCov_9fa48("37639"), {
        uid: socket.uid,
        count: stryMutAct_9fa48("37640") ? false : (stryCov_9fa48("37640"), true)
      })),
      unreadChatCount: messaging.getUnreadCount(socket.uid),
      unreadNotificationCount: user.notifications.getUnreadCount(socket.uid)
    }));
    results.unreadTopicCount = results.unreadCounts[stryMutAct_9fa48("37641") ? "Stryker was here!" : (stryCov_9fa48("37641"), '')];
    results.unreadNewTopicCount = results.unreadCounts.new;
    results.unreadWatchedTopicCount = results.unreadCounts.watched;
    results.unreadUnrepliedTopicCount = results.unreadCounts.unreplied;
    return results;
  }
};
SocketUser.getUserByUID = async function (socket, uid) {
  if (stryMutAct_9fa48("37642")) {
    {}
  } else {
    stryCov_9fa48("37642");
    return await userController.getUserDataByField(socket.uid, stryMutAct_9fa48("37643") ? "" : (stryCov_9fa48("37643"), 'uid'), uid);
  }
};
SocketUser.getUserByUsername = async function (socket, username) {
  if (stryMutAct_9fa48("37644")) {
    {}
  } else {
    stryCov_9fa48("37644");
    return await userController.getUserDataByField(socket.uid, stryMutAct_9fa48("37645") ? "" : (stryCov_9fa48("37645"), 'username'), username);
  }
};
SocketUser.getUserByEmail = async function (socket, email) {
  if (stryMutAct_9fa48("37646")) {
    {}
  } else {
    stryCov_9fa48("37646");
    return await userController.getUserDataByField(socket.uid, stryMutAct_9fa48("37647") ? "" : (stryCov_9fa48("37647"), 'email'), email);
  }
};
SocketUser.setModerationNote = async function (socket, data) {
  if (stryMutAct_9fa48("37648")) {
    {}
  } else {
    stryCov_9fa48("37648");
    if (stryMutAct_9fa48("37651") ? (!socket.uid || !data || !data.uid) && !data.note : stryMutAct_9fa48("37650") ? false : stryMutAct_9fa48("37649") ? true : (stryCov_9fa48("37649", "37650", "37651"), (stryMutAct_9fa48("37653") ? (!socket.uid || !data) && !data.uid : stryMutAct_9fa48("37652") ? false : (stryCov_9fa48("37652", "37653"), (stryMutAct_9fa48("37655") ? !socket.uid && !data : stryMutAct_9fa48("37654") ? false : (stryCov_9fa48("37654", "37655"), (stryMutAct_9fa48("37656") ? socket.uid : (stryCov_9fa48("37656"), !socket.uid)) || (stryMutAct_9fa48("37657") ? data : (stryCov_9fa48("37657"), !data)))) || (stryMutAct_9fa48("37658") ? data.uid : (stryCov_9fa48("37658"), !data.uid)))) || (stryMutAct_9fa48("37659") ? data.note : (stryCov_9fa48("37659"), !data.note)))) {
      if (stryMutAct_9fa48("37660")) {
        {}
      } else {
        stryCov_9fa48("37660");
        throw new Error(stryMutAct_9fa48("37661") ? "" : (stryCov_9fa48("37661"), '[[error:invalid-data]]'));
      }
    }
    const noteData = stryMutAct_9fa48("37662") ? {} : (stryCov_9fa48("37662"), {
      uid: socket.uid,
      note: data.note,
      timestamp: Date.now()
    });
    let canEdit = await privileges.users.canEdit(socket.uid, data.uid);
    if (stryMutAct_9fa48("37665") ? false : stryMutAct_9fa48("37664") ? true : stryMutAct_9fa48("37663") ? canEdit : (stryCov_9fa48("37663", "37664", "37665"), !canEdit)) {
      if (stryMutAct_9fa48("37666")) {
        {}
      } else {
        stryCov_9fa48("37666");
        canEdit = await user.isModeratorOfAnyCategory(socket.uid);
      }
    }
    if (stryMutAct_9fa48("37669") ? false : stryMutAct_9fa48("37668") ? true : stryMutAct_9fa48("37667") ? canEdit : (stryCov_9fa48("37667", "37668", "37669"), !canEdit)) {
      if (stryMutAct_9fa48("37670")) {
        {}
      } else {
        stryCov_9fa48("37670");
        throw new Error(stryMutAct_9fa48("37671") ? "" : (stryCov_9fa48("37671"), '[[error:no-privileges]]'));
      }
    }
    await user.appendModerationNote(stryMutAct_9fa48("37672") ? {} : (stryCov_9fa48("37672"), {
      uid: data.uid,
      noteData
    }));
  }
};
SocketUser.deleteUpload = async function (socket, data) {
  if (stryMutAct_9fa48("37673")) {
    {}
  } else {
    stryCov_9fa48("37673");
    if (stryMutAct_9fa48("37676") ? (!data || !data.name) && !data.uid : stryMutAct_9fa48("37675") ? false : stryMutAct_9fa48("37674") ? true : (stryCov_9fa48("37674", "37675", "37676"), (stryMutAct_9fa48("37678") ? !data && !data.name : stryMutAct_9fa48("37677") ? false : (stryCov_9fa48("37677", "37678"), (stryMutAct_9fa48("37679") ? data : (stryCov_9fa48("37679"), !data)) || (stryMutAct_9fa48("37680") ? data.name : (stryCov_9fa48("37680"), !data.name)))) || (stryMutAct_9fa48("37681") ? data.uid : (stryCov_9fa48("37681"), !data.uid)))) {
      if (stryMutAct_9fa48("37682")) {
        {}
      } else {
        stryCov_9fa48("37682");
        throw new Error(stryMutAct_9fa48("37683") ? "" : (stryCov_9fa48("37683"), '[[error:invalid-data]]'));
      }
    }
    await user.deleteUpload(socket.uid, data.uid, data.name);
  }
};
SocketUser.gdpr = {};
SocketUser.gdpr.consent = async function (socket) {
  if (stryMutAct_9fa48("37684")) {
    {}
  } else {
    stryCov_9fa48("37684");
    await user.setUserField(socket.uid, stryMutAct_9fa48("37685") ? "" : (stryCov_9fa48("37685"), 'gdpr_consent'), 1);
  }
};
SocketUser.gdpr.check = async function (socket, data) {
  if (stryMutAct_9fa48("37686")) {
    {}
  } else {
    stryCov_9fa48("37686");
    const isAdmin = await user.isAdministrator(socket.uid);
    if (stryMutAct_9fa48("37689") ? false : stryMutAct_9fa48("37688") ? true : stryMutAct_9fa48("37687") ? isAdmin : (stryCov_9fa48("37687", "37688", "37689"), !isAdmin)) {
      if (stryMutAct_9fa48("37690")) {
        {}
      } else {
        stryCov_9fa48("37690");
        data.uid = socket.uid;
      }
    }
    return await db.getObjectField(stryMutAct_9fa48("37691") ? `` : (stryCov_9fa48("37691"), `user:${data.uid}`), stryMutAct_9fa48("37692") ? "" : (stryCov_9fa48("37692"), 'gdpr_consent'));
  }
};
require('../promisify')(SocketUser);