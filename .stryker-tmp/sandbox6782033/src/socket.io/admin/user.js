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
const async = require('async');
const winston = require('winston');
const db = require('../../database');
const groups = require('../../groups');
const user = require('../../user');
const events = require('../../events');
const translator = require('../../translator');
const sockets = require('..');
const User = module.exports;
User.makeAdmins = async function (socket, uids) {
  if (stryMutAct_9fa48("35157")) {
    {}
  } else {
    stryCov_9fa48("35157");
    if (stryMutAct_9fa48("35160") ? false : stryMutAct_9fa48("35159") ? true : stryMutAct_9fa48("35158") ? Array.isArray(uids) : (stryCov_9fa48("35158", "35159", "35160"), !Array.isArray(uids))) {
      if (stryMutAct_9fa48("35161")) {
        {}
      } else {
        stryCov_9fa48("35161");
        throw new Error(stryMutAct_9fa48("35162") ? "" : (stryCov_9fa48("35162"), '[[error:invalid-data]]'));
      }
    }
    const isMembersOfBanned = await groups.isMembers(uids, groups.BANNED_USERS);
    if (stryMutAct_9fa48("35164") ? false : stryMutAct_9fa48("35163") ? true : (stryCov_9fa48("35163", "35164"), isMembersOfBanned.includes(stryMutAct_9fa48("35165") ? false : (stryCov_9fa48("35165"), true)))) {
      if (stryMutAct_9fa48("35166")) {
        {}
      } else {
        stryCov_9fa48("35166");
        throw new Error(stryMutAct_9fa48("35167") ? "" : (stryCov_9fa48("35167"), '[[error:cant-make-banned-users-admin]]'));
      }
    }
    for (const uid of uids) {
      if (stryMutAct_9fa48("35168")) {
        {}
      } else {
        stryCov_9fa48("35168");
        /* eslint-disable no-await-in-loop */
        await groups.join(stryMutAct_9fa48("35169") ? "" : (stryCov_9fa48("35169"), 'administrators'), uid);
        await events.log(stryMutAct_9fa48("35170") ? {} : (stryCov_9fa48("35170"), {
          type: stryMutAct_9fa48("35171") ? "" : (stryCov_9fa48("35171"), 'user-makeAdmin'),
          uid: socket.uid,
          targetUid: uid,
          ip: socket.ip
        }));
      }
    }
  }
};
User.removeAdmins = async function (socket, uids) {
  if (stryMutAct_9fa48("35172")) {
    {}
  } else {
    stryCov_9fa48("35172");
    if (stryMutAct_9fa48("35175") ? false : stryMutAct_9fa48("35174") ? true : stryMutAct_9fa48("35173") ? Array.isArray(uids) : (stryCov_9fa48("35173", "35174", "35175"), !Array.isArray(uids))) {
      if (stryMutAct_9fa48("35176")) {
        {}
      } else {
        stryCov_9fa48("35176");
        throw new Error(stryMutAct_9fa48("35177") ? "" : (stryCov_9fa48("35177"), '[[error:invalid-data]]'));
      }
    }
    for (const uid of uids) {
      if (stryMutAct_9fa48("35178")) {
        {}
      } else {
        stryCov_9fa48("35178");
        /* eslint-disable no-await-in-loop */
        const count = await groups.getMemberCount(stryMutAct_9fa48("35179") ? "" : (stryCov_9fa48("35179"), 'administrators'));
        if (stryMutAct_9fa48("35182") ? count !== 1 : stryMutAct_9fa48("35181") ? false : stryMutAct_9fa48("35180") ? true : (stryCov_9fa48("35180", "35181", "35182"), count === 1)) {
          if (stryMutAct_9fa48("35183")) {
            {}
          } else {
            stryCov_9fa48("35183");
            throw new Error(stryMutAct_9fa48("35184") ? "" : (stryCov_9fa48("35184"), '[[error:cant-remove-last-admin]]'));
          }
        }
        await groups.leave(stryMutAct_9fa48("35185") ? "" : (stryCov_9fa48("35185"), 'administrators'), uid);
        await events.log(stryMutAct_9fa48("35186") ? {} : (stryCov_9fa48("35186"), {
          type: stryMutAct_9fa48("35187") ? "" : (stryCov_9fa48("35187"), 'user-removeAdmin'),
          uid: socket.uid,
          targetUid: uid,
          ip: socket.ip
        }));
      }
    }
  }
};
User.resetLockouts = async function (socket, uids) {
  if (stryMutAct_9fa48("35188")) {
    {}
  } else {
    stryCov_9fa48("35188");
    if (stryMutAct_9fa48("35191") ? false : stryMutAct_9fa48("35190") ? true : stryMutAct_9fa48("35189") ? Array.isArray(uids) : (stryCov_9fa48("35189", "35190", "35191"), !Array.isArray(uids))) {
      if (stryMutAct_9fa48("35192")) {
        {}
      } else {
        stryCov_9fa48("35192");
        throw new Error(stryMutAct_9fa48("35193") ? "" : (stryCov_9fa48("35193"), '[[error:invalid-data]]'));
      }
    }
    await Promise.all(uids.map(stryMutAct_9fa48("35194") ? () => undefined : (stryCov_9fa48("35194"), uid => user.auth.resetLockout(uid))));
  }
};
User.validateEmail = async function (socket, uids) {
  if (stryMutAct_9fa48("35195")) {
    {}
  } else {
    stryCov_9fa48("35195");
    if (stryMutAct_9fa48("35198") ? false : stryMutAct_9fa48("35197") ? true : stryMutAct_9fa48("35196") ? Array.isArray(uids) : (stryCov_9fa48("35196", "35197", "35198"), !Array.isArray(uids))) {
      if (stryMutAct_9fa48("35199")) {
        {}
      } else {
        stryCov_9fa48("35199");
        throw new Error(stryMutAct_9fa48("35200") ? "" : (stryCov_9fa48("35200"), '[[error:invalid-data]]'));
      }
    }
    for (const uid of uids) {
      if (stryMutAct_9fa48("35201")) {
        {}
      } else {
        stryCov_9fa48("35201");
        await user.email.confirmByUid(uid);
      }
    }
  }
};
User.sendValidationEmail = async function (socket, uids) {
  if (stryMutAct_9fa48("35202")) {
    {}
  } else {
    stryCov_9fa48("35202");
    if (stryMutAct_9fa48("35205") ? false : stryMutAct_9fa48("35204") ? true : stryMutAct_9fa48("35203") ? Array.isArray(uids) : (stryCov_9fa48("35203", "35204", "35205"), !Array.isArray(uids))) {
      if (stryMutAct_9fa48("35206")) {
        {}
      } else {
        stryCov_9fa48("35206");
        throw new Error(stryMutAct_9fa48("35207") ? "" : (stryCov_9fa48("35207"), '[[error:invalid-data]]'));
      }
    }
    const failed = stryMutAct_9fa48("35208") ? ["Stryker was here"] : (stryCov_9fa48("35208"), []);
    let errorLogged = stryMutAct_9fa48("35209") ? true : (stryCov_9fa48("35209"), false);
    await async.eachLimit(uids, 50, async uid => {
      if (stryMutAct_9fa48("35210")) {
        {}
      } else {
        stryCov_9fa48("35210");
        await user.email.sendValidationEmail(uid, stryMutAct_9fa48("35211") ? {} : (stryCov_9fa48("35211"), {
          force: stryMutAct_9fa48("35212") ? false : (stryCov_9fa48("35212"), true)
        })).catch(err => {
          if (stryMutAct_9fa48("35213")) {
            {}
          } else {
            stryCov_9fa48("35213");
            if (stryMutAct_9fa48("35216") ? false : stryMutAct_9fa48("35215") ? true : stryMutAct_9fa48("35214") ? errorLogged : (stryCov_9fa48("35214", "35215", "35216"), !errorLogged)) {
              if (stryMutAct_9fa48("35217")) {
                {}
              } else {
                stryCov_9fa48("35217");
                winston.error(stryMutAct_9fa48("35218") ? `` : (stryCov_9fa48("35218"), `[user.create] Validation email failed to send\n[emailer.send] ${err.stack}`));
                errorLogged = stryMutAct_9fa48("35219") ? false : (stryCov_9fa48("35219"), true);
              }
            }
            failed.push(uid);
          }
        });
      }
    });
    if (stryMutAct_9fa48("35221") ? false : stryMutAct_9fa48("35220") ? true : (stryCov_9fa48("35220", "35221"), failed.length)) {
      if (stryMutAct_9fa48("35222")) {
        {}
      } else {
        stryCov_9fa48("35222");
        throw Error(stryMutAct_9fa48("35223") ? `` : (stryCov_9fa48("35223"), `Email sending failed for the following uids, check server logs for more info: ${failed.join(stryMutAct_9fa48("35224") ? "" : (stryCov_9fa48("35224"), ','))}`));
      }
    }
  }
};
User.sendPasswordResetEmail = async function (socket, uids) {
  if (stryMutAct_9fa48("35225")) {
    {}
  } else {
    stryCov_9fa48("35225");
    if (stryMutAct_9fa48("35228") ? false : stryMutAct_9fa48("35227") ? true : stryMutAct_9fa48("35226") ? Array.isArray(uids) : (stryCov_9fa48("35226", "35227", "35228"), !Array.isArray(uids))) {
      if (stryMutAct_9fa48("35229")) {
        {}
      } else {
        stryCov_9fa48("35229");
        throw new Error(stryMutAct_9fa48("35230") ? "" : (stryCov_9fa48("35230"), '[[error:invalid-data]]'));
      }
    }
    uids = stryMutAct_9fa48("35231") ? uids : (stryCov_9fa48("35231"), uids.filter(stryMutAct_9fa48("35232") ? () => undefined : (stryCov_9fa48("35232"), uid => parseInt(uid, 10))));
    await Promise.all(uids.map(async uid => {
      if (stryMutAct_9fa48("35233")) {
        {}
      } else {
        stryCov_9fa48("35233");
        const userData = await user.getUserFields(uid, stryMutAct_9fa48("35234") ? [] : (stryCov_9fa48("35234"), [stryMutAct_9fa48("35235") ? "" : (stryCov_9fa48("35235"), 'email'), stryMutAct_9fa48("35236") ? "" : (stryCov_9fa48("35236"), 'username')]));
        if (stryMutAct_9fa48("35239") ? false : stryMutAct_9fa48("35238") ? true : stryMutAct_9fa48("35237") ? userData.email : (stryCov_9fa48("35237", "35238", "35239"), !userData.email)) {
          if (stryMutAct_9fa48("35240")) {
            {}
          } else {
            stryCov_9fa48("35240");
            throw new Error(stryMutAct_9fa48("35241") ? `` : (stryCov_9fa48("35241"), `[[error:user-doesnt-have-email, ${userData.username}]]`));
          }
        }
        await user.reset.send(userData.email);
      }
    }));
  }
};
User.forcePasswordReset = async function (socket, uids) {
  if (stryMutAct_9fa48("35242")) {
    {}
  } else {
    stryCov_9fa48("35242");
    if (stryMutAct_9fa48("35245") ? false : stryMutAct_9fa48("35244") ? true : stryMutAct_9fa48("35243") ? Array.isArray(uids) : (stryCov_9fa48("35243", "35244", "35245"), !Array.isArray(uids))) {
      if (stryMutAct_9fa48("35246")) {
        {}
      } else {
        stryCov_9fa48("35246");
        throw new Error(stryMutAct_9fa48("35247") ? "" : (stryCov_9fa48("35247"), '[[error:invalid-data]]'));
      }
    }
    uids = stryMutAct_9fa48("35248") ? uids : (stryCov_9fa48("35248"), uids.filter(stryMutAct_9fa48("35249") ? () => undefined : (stryCov_9fa48("35249"), uid => parseInt(uid, 10))));
    await db.setObjectField(uids.map(stryMutAct_9fa48("35250") ? () => undefined : (stryCov_9fa48("35250"), uid => stryMutAct_9fa48("35251") ? `` : (stryCov_9fa48("35251"), `user:${uid}`))), stryMutAct_9fa48("35252") ? "" : (stryCov_9fa48("35252"), 'passwordExpiry'), Date.now());
    await user.auth.revokeAllSessions(uids);
    uids.forEach(stryMutAct_9fa48("35253") ? () => undefined : (stryCov_9fa48("35253"), uid => sockets.in(stryMutAct_9fa48("35254") ? `` : (stryCov_9fa48("35254"), `uid_${uid}`)).emit(stryMutAct_9fa48("35255") ? "" : (stryCov_9fa48("35255"), 'event:logout'))));
  }
};
User.restartJobs = async function () {
  if (stryMutAct_9fa48("35256")) {
    {}
  } else {
    stryCov_9fa48("35256");
    user.startJobs();
  }
};
User.loadGroups = async function (socket, uids) {
  if (stryMutAct_9fa48("35257")) {
    {}
  } else {
    stryCov_9fa48("35257");
    const [userData, groupData] = await Promise.all(stryMutAct_9fa48("35258") ? [] : (stryCov_9fa48("35258"), [user.getUsersData(uids), groups.getUserGroupsFromSet(stryMutAct_9fa48("35259") ? "" : (stryCov_9fa48("35259"), 'groups:createtime'), uids)]));
    userData.forEach((data, index) => {
      if (stryMutAct_9fa48("35260")) {
        {}
      } else {
        stryCov_9fa48("35260");
        data.groups = stryMutAct_9fa48("35261") ? groupData[index] : (stryCov_9fa48("35261"), groupData[index].filter(stryMutAct_9fa48("35262") ? () => undefined : (stryCov_9fa48("35262"), group => stryMutAct_9fa48("35263") ? groups.isPrivilegeGroup(group.name) : (stryCov_9fa48("35263"), !groups.isPrivilegeGroup(group.name)))));
        data.groups.forEach(group => {
          if (stryMutAct_9fa48("35264")) {
            {}
          } else {
            stryCov_9fa48("35264");
            group.nameEscaped = translator.escape(group.displayName);
          }
        });
      }
    });
    return stryMutAct_9fa48("35265") ? {} : (stryCov_9fa48("35265"), {
      users: userData
    });
  }
};
User.exportUsersCSV = async function (socket) {
  if (stryMutAct_9fa48("35266")) {
    {}
  } else {
    stryCov_9fa48("35266");
    await events.log(stryMutAct_9fa48("35267") ? {} : (stryCov_9fa48("35267"), {
      type: stryMutAct_9fa48("35268") ? "" : (stryCov_9fa48("35268"), 'exportUsersCSV'),
      uid: socket.uid,
      ip: socket.ip
    }));
    setTimeout(async () => {
      if (stryMutAct_9fa48("35269")) {
        {}
      } else {
        stryCov_9fa48("35269");
        try {
          if (stryMutAct_9fa48("35270")) {
            {}
          } else {
            stryCov_9fa48("35270");
            await user.exportUsersCSV();
            if (stryMutAct_9fa48("35272") ? false : stryMutAct_9fa48("35271") ? true : (stryCov_9fa48("35271", "35272"), socket.emit)) {
              if (stryMutAct_9fa48("35273")) {
                {}
              } else {
                stryCov_9fa48("35273");
                socket.emit(stryMutAct_9fa48("35274") ? "" : (stryCov_9fa48("35274"), 'event:export-users-csv'));
              }
            }
            const notifications = require('../../notifications');
            const n = await notifications.create(stryMutAct_9fa48("35275") ? {} : (stryCov_9fa48("35275"), {
              bodyShort: stryMutAct_9fa48("35276") ? "" : (stryCov_9fa48("35276"), '[[notifications:users-csv-exported]]'),
              path: stryMutAct_9fa48("35277") ? "" : (stryCov_9fa48("35277"), '/api/admin/users/csv'),
              nid: stryMutAct_9fa48("35278") ? "" : (stryCov_9fa48("35278"), 'users:csv:export'),
              from: socket.uid
            }));
            await notifications.push(n, stryMutAct_9fa48("35279") ? [] : (stryCov_9fa48("35279"), [socket.uid]));
          }
        } catch (err) {
          if (stryMutAct_9fa48("35280")) {
            {}
          } else {
            stryCov_9fa48("35280");
            winston.error(err.stack);
          }
        }
      }
    }, 0);
  }
};