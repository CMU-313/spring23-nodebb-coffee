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
const meta = require('../meta');
const user = require('../user');
const events = require('../events');
const db = require('../database');
const privileges = require('../privileges');
const websockets = require('./index');
const index = require('./index');
const getAdminSearchDict = require('../admin/search').getDictionary;
const SocketAdmin = module.exports;
SocketAdmin.user = require('./admin/user');
SocketAdmin.categories = require('./admin/categories');
SocketAdmin.settings = require('./admin/settings');
SocketAdmin.tags = require('./admin/tags');
SocketAdmin.rewards = require('./admin/rewards');
SocketAdmin.navigation = require('./admin/navigation');
SocketAdmin.rooms = require('./admin/rooms');
SocketAdmin.social = require('./admin/social');
SocketAdmin.themes = require('./admin/themes');
SocketAdmin.plugins = require('./admin/plugins');
SocketAdmin.widgets = require('./admin/widgets');
SocketAdmin.config = require('./admin/config');
SocketAdmin.settings = require('./admin/settings');
SocketAdmin.email = require('./admin/email');
SocketAdmin.analytics = require('./admin/analytics');
SocketAdmin.logs = require('./admin/logs');
SocketAdmin.errors = require('./admin/errors');
SocketAdmin.digest = require('./admin/digest');
SocketAdmin.cache = require('./admin/cache');
SocketAdmin.before = async function (socket, method) {
  if (stryMutAct_9fa48("35287")) {
    {}
  } else {
    stryCov_9fa48("35287");
    const isAdmin = await user.isAdministrator(socket.uid);
    if (stryMutAct_9fa48("35289") ? false : stryMutAct_9fa48("35288") ? true : (stryCov_9fa48("35288", "35289"), isAdmin)) {
      if (stryMutAct_9fa48("35290")) {
        {}
      } else {
        stryCov_9fa48("35290");
        return;
      }
    }

    // Check admin privileges mapping (if not in mapping, deny access)
    const privilegeSet = privileges.admin.socketMap.hasOwnProperty(method) ? privileges.admin.socketMap[method].split(stryMutAct_9fa48("35291") ? "" : (stryCov_9fa48("35291"), ';')) : stryMutAct_9fa48("35292") ? ["Stryker was here"] : (stryCov_9fa48("35292"), []);
    const hasPrivilege = stryMutAct_9fa48("35293") ? (await Promise.all(privilegeSet.map(async privilege => privileges.admin.can(privilege, socket.uid)))).every(Boolean) : (stryCov_9fa48("35293"), (await Promise.all(privilegeSet.map(stryMutAct_9fa48("35294") ? () => undefined : (stryCov_9fa48("35294"), async privilege => privileges.admin.can(privilege, socket.uid))))).some(Boolean));
    if (stryMutAct_9fa48("35297") ? privilegeSet.length || hasPrivilege : stryMutAct_9fa48("35296") ? false : stryMutAct_9fa48("35295") ? true : (stryCov_9fa48("35295", "35296", "35297"), privilegeSet.length && hasPrivilege)) {
      if (stryMutAct_9fa48("35298")) {
        {}
      } else {
        stryCov_9fa48("35298");
        return;
      }
    }
    winston.warn(stryMutAct_9fa48("35299") ? `` : (stryCov_9fa48("35299"), `[socket.io] Call to admin method ( ${method} ) blocked (accessed by uid ${socket.uid})`));
    throw new Error(stryMutAct_9fa48("35300") ? "" : (stryCov_9fa48("35300"), '[[error:no-privileges]]'));
  }
};
SocketAdmin.restart = async function (socket) {
  if (stryMutAct_9fa48("35301")) {
    {}
  } else {
    stryCov_9fa48("35301");
    await logRestart(socket);
    meta.restart();
  }
};
async function logRestart(socket) {
  if (stryMutAct_9fa48("35302")) {
    {}
  } else {
    stryCov_9fa48("35302");
    await events.log(stryMutAct_9fa48("35303") ? {} : (stryCov_9fa48("35303"), {
      type: stryMutAct_9fa48("35304") ? "" : (stryCov_9fa48("35304"), 'restart'),
      uid: socket.uid,
      ip: socket.ip
    }));
    await db.setObject(stryMutAct_9fa48("35305") ? "" : (stryCov_9fa48("35305"), 'lastrestart'), stryMutAct_9fa48("35306") ? {} : (stryCov_9fa48("35306"), {
      uid: socket.uid,
      ip: socket.ip,
      timestamp: Date.now()
    }));
  }
}
SocketAdmin.reload = async function (socket) {
  if (stryMutAct_9fa48("35307")) {
    {}
  } else {
    stryCov_9fa48("35307");
    await require('../meta/build').buildAll();
    await events.log(stryMutAct_9fa48("35308") ? {} : (stryCov_9fa48("35308"), {
      type: stryMutAct_9fa48("35309") ? "" : (stryCov_9fa48("35309"), 'build'),
      uid: socket.uid,
      ip: socket.ip
    }));
    await logRestart(socket);
    meta.restart();
  }
};
SocketAdmin.fireEvent = function (socket, data, callback) {
  if (stryMutAct_9fa48("35310")) {
    {}
  } else {
    stryCov_9fa48("35310");
    index.server.emit(data.name, stryMutAct_9fa48("35313") ? data.payload && {} : stryMutAct_9fa48("35312") ? false : stryMutAct_9fa48("35311") ? true : (stryCov_9fa48("35311", "35312", "35313"), data.payload || {}));
    callback();
  }
};
SocketAdmin.deleteEvents = function (socket, eids, callback) {
  if (stryMutAct_9fa48("35314")) {
    {}
  } else {
    stryCov_9fa48("35314");
    events.deleteEvents(eids, callback);
  }
};
SocketAdmin.deleteAllEvents = function (socket, data, callback) {
  if (stryMutAct_9fa48("35315")) {
    {}
  } else {
    stryCov_9fa48("35315");
    events.deleteAll(callback);
  }
};
SocketAdmin.getSearchDict = async function (socket) {
  if (stryMutAct_9fa48("35316")) {
    {}
  } else {
    stryCov_9fa48("35316");
    const settings = await user.getSettings(socket.uid);
    const lang = stryMutAct_9fa48("35319") ? (settings.userLang || meta.config.defaultLang) && 'en-GB' : stryMutAct_9fa48("35318") ? false : stryMutAct_9fa48("35317") ? true : (stryCov_9fa48("35317", "35318", "35319"), (stryMutAct_9fa48("35321") ? settings.userLang && meta.config.defaultLang : stryMutAct_9fa48("35320") ? false : (stryCov_9fa48("35320", "35321"), settings.userLang || meta.config.defaultLang)) || (stryMutAct_9fa48("35322") ? "" : (stryCov_9fa48("35322"), 'en-GB')));
    return await getAdminSearchDict(lang);
  }
};
SocketAdmin.deleteAllSessions = function (socket, data, callback) {
  if (stryMutAct_9fa48("35323")) {
    {}
  } else {
    stryCov_9fa48("35323");
    user.auth.deleteAllSessions(callback);
  }
};
SocketAdmin.reloadAllSessions = function (socket, data, callback) {
  if (stryMutAct_9fa48("35324")) {
    {}
  } else {
    stryCov_9fa48("35324");
    websockets.in(stryMutAct_9fa48("35325") ? `` : (stryCov_9fa48("35325"), `uid_${socket.uid}`)).emit(stryMutAct_9fa48("35326") ? "" : (stryCov_9fa48("35326"), 'event:livereload'));
    callback();
  }
};
SocketAdmin.getServerTime = function (socket, data, callback) {
  if (stryMutAct_9fa48("35327")) {
    {}
  } else {
    stryCov_9fa48("35327");
    const now = new Date();
    callback(null, stryMutAct_9fa48("35328") ? {} : (stryCov_9fa48("35328"), {
      timestamp: now.getTime(),
      offset: now.getTimezoneOffset()
    }));
  }
};
require('../promisify')(SocketAdmin);