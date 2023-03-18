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
const cronJob = require('cron').CronJob;
const db = require('../database');
const meta = require('../meta');
const emailer = require('../emailer');
const notifications = require('../notifications');
const groups = require('../groups');
const utils = require('../utils');
const slugify = require('../slugify');
const plugins = require('../plugins');
module.exports = function (User) {
  if (stryMutAct_9fa48("45139")) {
    {}
  } else {
    stryCov_9fa48("45139");
    new cronJob(stryMutAct_9fa48("45140") ? "" : (stryCov_9fa48("45140"), '0 * * * *'), () => {
      if (stryMutAct_9fa48("45141")) {
        {}
      } else {
        stryCov_9fa48("45141");
        User.autoApprove();
      }
    }, null, stryMutAct_9fa48("45142") ? false : (stryCov_9fa48("45142"), true));
    User.addToApprovalQueue = async function (userData) {
      if (stryMutAct_9fa48("45143")) {
        {}
      } else {
        stryCov_9fa48("45143");
        userData.username = stryMutAct_9fa48("45144") ? userData.username : (stryCov_9fa48("45144"), userData.username.trim());
        userData.userslug = slugify(userData.username);
        await canQueue(userData);
        const hashedPassword = await User.hashPassword(userData.password);
        const data = stryMutAct_9fa48("45145") ? {} : (stryCov_9fa48("45145"), {
          username: userData.username,
          email: userData.email,
          ip: userData.ip,
          hashedPassword: hashedPassword
        });
        const results = await plugins.hooks.fire(stryMutAct_9fa48("45146") ? "" : (stryCov_9fa48("45146"), 'filter:user.addToApprovalQueue'), stryMutAct_9fa48("45147") ? {} : (stryCov_9fa48("45147"), {
          data: data,
          userData: userData
        }));
        await db.setObject(stryMutAct_9fa48("45148") ? `` : (stryCov_9fa48("45148"), `registration:queue:name:${userData.username}`), results.data);
        await db.sortedSetAdd(stryMutAct_9fa48("45149") ? "" : (stryCov_9fa48("45149"), 'registration:queue'), Date.now(), userData.username);
        await sendNotificationToAdmins(userData.username);
      }
    };
    async function canQueue(userData) {
      if (stryMutAct_9fa48("45150")) {
        {}
      } else {
        stryCov_9fa48("45150");
        await User.isDataValid(userData);
        const usernames = await db.getSortedSetRange(stryMutAct_9fa48("45151") ? "" : (stryCov_9fa48("45151"), 'registration:queue'), 0, stryMutAct_9fa48("45152") ? +1 : (stryCov_9fa48("45152"), -1));
        if (stryMutAct_9fa48("45154") ? false : stryMutAct_9fa48("45153") ? true : (stryCov_9fa48("45153", "45154"), usernames.includes(userData.username))) {
          if (stryMutAct_9fa48("45155")) {
            {}
          } else {
            stryCov_9fa48("45155");
            throw new Error(stryMutAct_9fa48("45156") ? "" : (stryCov_9fa48("45156"), '[[error:username-taken]]'));
          }
        }
        const keys = stryMutAct_9fa48("45157") ? usernames.map(username => `registration:queue:name:${username}`) : (stryCov_9fa48("45157"), usernames.filter(Boolean).map(stryMutAct_9fa48("45158") ? () => undefined : (stryCov_9fa48("45158"), username => stryMutAct_9fa48("45159") ? `` : (stryCov_9fa48("45159"), `registration:queue:name:${username}`))));
        const data = await db.getObjectsFields(keys, stryMutAct_9fa48("45160") ? [] : (stryCov_9fa48("45160"), [stryMutAct_9fa48("45161") ? "" : (stryCov_9fa48("45161"), 'email')]));
        const emails = stryMutAct_9fa48("45162") ? data.map(data => data && data.email) : (stryCov_9fa48("45162"), data.map(stryMutAct_9fa48("45163") ? () => undefined : (stryCov_9fa48("45163"), data => stryMutAct_9fa48("45166") ? data || data.email : stryMutAct_9fa48("45165") ? false : stryMutAct_9fa48("45164") ? true : (stryCov_9fa48("45164", "45165", "45166"), data && data.email))).filter(Boolean));
        if (stryMutAct_9fa48("45169") ? userData.email || emails.includes(userData.email) : stryMutAct_9fa48("45168") ? false : stryMutAct_9fa48("45167") ? true : (stryCov_9fa48("45167", "45168", "45169"), userData.email && emails.includes(userData.email))) {
          if (stryMutAct_9fa48("45170")) {
            {}
          } else {
            stryCov_9fa48("45170");
            throw new Error(stryMutAct_9fa48("45171") ? "" : (stryCov_9fa48("45171"), '[[error:email-taken]]'));
          }
        }
      }
    }
    async function sendNotificationToAdmins(username) {
      if (stryMutAct_9fa48("45172")) {
        {}
      } else {
        stryCov_9fa48("45172");
        const notifObj = await notifications.create(stryMutAct_9fa48("45173") ? {} : (stryCov_9fa48("45173"), {
          type: stryMutAct_9fa48("45174") ? "" : (stryCov_9fa48("45174"), 'new-register'),
          bodyShort: stryMutAct_9fa48("45175") ? `` : (stryCov_9fa48("45175"), `[[notifications:new_register, ${username}]]`),
          nid: stryMutAct_9fa48("45176") ? `` : (stryCov_9fa48("45176"), `new_register:${username}`),
          path: stryMutAct_9fa48("45177") ? "" : (stryCov_9fa48("45177"), '/admin/manage/registration'),
          mergeId: stryMutAct_9fa48("45178") ? "" : (stryCov_9fa48("45178"), 'new_register')
        }));
        await notifications.pushGroup(notifObj, stryMutAct_9fa48("45179") ? "" : (stryCov_9fa48("45179"), 'administrators'));
      }
    }
    User.acceptRegistration = async function (username) {
      if (stryMutAct_9fa48("45180")) {
        {}
      } else {
        stryCov_9fa48("45180");
        const userData = await db.getObject(stryMutAct_9fa48("45181") ? `` : (stryCov_9fa48("45181"), `registration:queue:name:${username}`));
        if (stryMutAct_9fa48("45184") ? false : stryMutAct_9fa48("45183") ? true : stryMutAct_9fa48("45182") ? userData : (stryCov_9fa48("45182", "45183", "45184"), !userData)) {
          if (stryMutAct_9fa48("45185")) {
            {}
          } else {
            stryCov_9fa48("45185");
            throw new Error(stryMutAct_9fa48("45186") ? "" : (stryCov_9fa48("45186"), '[[error:invalid-data]]'));
          }
        }
        const creation_time = await db.sortedSetScore(stryMutAct_9fa48("45187") ? "" : (stryCov_9fa48("45187"), 'registration:queue'), username);
        const uid = await User.create(userData);
        await User.setUserFields(uid, stryMutAct_9fa48("45188") ? {} : (stryCov_9fa48("45188"), {
          password: userData.hashedPassword,
          'password:shaWrapped': 1
        }));
        await removeFromQueue(username);
        await markNotificationRead(username);
        await plugins.hooks.fire(stryMutAct_9fa48("45189") ? "" : (stryCov_9fa48("45189"), 'filter:register.complete'), stryMutAct_9fa48("45190") ? {} : (stryCov_9fa48("45190"), {
          uid: uid
        }));
        await emailer.send(stryMutAct_9fa48("45191") ? "" : (stryCov_9fa48("45191"), 'registration_accepted'), uid, stryMutAct_9fa48("45192") ? {} : (stryCov_9fa48("45192"), {
          username: username,
          subject: stryMutAct_9fa48("45193") ? `` : (stryCov_9fa48("45193"), `[[email:welcome-to, ${stryMutAct_9fa48("45196") ? (meta.config.title || meta.config.browserTitle) && 'NodeBB' : stryMutAct_9fa48("45195") ? false : stryMutAct_9fa48("45194") ? true : (stryCov_9fa48("45194", "45195", "45196"), (stryMutAct_9fa48("45198") ? meta.config.title && meta.config.browserTitle : stryMutAct_9fa48("45197") ? false : (stryCov_9fa48("45197", "45198"), meta.config.title || meta.config.browserTitle)) || (stryMutAct_9fa48("45199") ? "" : (stryCov_9fa48("45199"), 'NodeBB')))}]]`),
          template: stryMutAct_9fa48("45200") ? "" : (stryCov_9fa48("45200"), 'registration_accepted'),
          uid: uid
        })).catch(stryMutAct_9fa48("45201") ? () => undefined : (stryCov_9fa48("45201"), err => winston.error(stryMutAct_9fa48("45202") ? `` : (stryCov_9fa48("45202"), `[emailer.send] ${err.stack}`))));
        const total = await db.incrObjectFieldBy(stryMutAct_9fa48("45203") ? "" : (stryCov_9fa48("45203"), 'registration:queue:approval:times'), stryMutAct_9fa48("45204") ? "" : (stryCov_9fa48("45204"), 'totalTime'), Math.floor(stryMutAct_9fa48("45205") ? (Date.now() - creation_time) * 60000 : (stryCov_9fa48("45205"), (stryMutAct_9fa48("45206") ? Date.now() + creation_time : (stryCov_9fa48("45206"), Date.now() - creation_time)) / 60000)));
        const counter = await db.incrObjectField(stryMutAct_9fa48("45207") ? "" : (stryCov_9fa48("45207"), 'registration:queue:approval:times'), stryMutAct_9fa48("45208") ? "" : (stryCov_9fa48("45208"), 'counter'));
        await db.setObjectField(stryMutAct_9fa48("45209") ? "" : (stryCov_9fa48("45209"), 'registration:queue:approval:times'), stryMutAct_9fa48("45210") ? "" : (stryCov_9fa48("45210"), 'average'), stryMutAct_9fa48("45211") ? total * counter : (stryCov_9fa48("45211"), total / counter));
        return uid;
      }
    };
    async function markNotificationRead(username) {
      if (stryMutAct_9fa48("45212")) {
        {}
      } else {
        stryCov_9fa48("45212");
        const nid = stryMutAct_9fa48("45213") ? `` : (stryCov_9fa48("45213"), `new_register:${username}`);
        const uids = await groups.getMembers(stryMutAct_9fa48("45214") ? "" : (stryCov_9fa48("45214"), 'administrators'), 0, stryMutAct_9fa48("45215") ? +1 : (stryCov_9fa48("45215"), -1));
        const promises = uids.map(stryMutAct_9fa48("45216") ? () => undefined : (stryCov_9fa48("45216"), uid => notifications.markRead(nid, uid)));
        await Promise.all(promises);
      }
    }
    User.rejectRegistration = async function (username) {
      if (stryMutAct_9fa48("45217")) {
        {}
      } else {
        stryCov_9fa48("45217");
        await removeFromQueue(username);
        await markNotificationRead(username);
      }
    };
    async function removeFromQueue(username) {
      if (stryMutAct_9fa48("45218")) {
        {}
      } else {
        stryCov_9fa48("45218");
        await Promise.all(stryMutAct_9fa48("45219") ? [] : (stryCov_9fa48("45219"), [db.sortedSetRemove(stryMutAct_9fa48("45220") ? "" : (stryCov_9fa48("45220"), 'registration:queue'), username), db.delete(stryMutAct_9fa48("45221") ? `` : (stryCov_9fa48("45221"), `registration:queue:name:${username}`))]));
      }
    }
    User.shouldQueueUser = async function (ip) {
      if (stryMutAct_9fa48("45222")) {
        {}
      } else {
        stryCov_9fa48("45222");
        const {
          registrationApprovalType
        } = meta.config;
        if (stryMutAct_9fa48("45225") ? registrationApprovalType !== 'admin-approval' : stryMutAct_9fa48("45224") ? false : stryMutAct_9fa48("45223") ? true : (stryCov_9fa48("45223", "45224", "45225"), registrationApprovalType === (stryMutAct_9fa48("45226") ? "" : (stryCov_9fa48("45226"), 'admin-approval')))) {
          if (stryMutAct_9fa48("45227")) {
            {}
          } else {
            stryCov_9fa48("45227");
            return stryMutAct_9fa48("45228") ? false : (stryCov_9fa48("45228"), true);
          }
        } else if (stryMutAct_9fa48("45231") ? registrationApprovalType !== 'admin-approval-ip' : stryMutAct_9fa48("45230") ? false : stryMutAct_9fa48("45229") ? true : (stryCov_9fa48("45229", "45230", "45231"), registrationApprovalType === (stryMutAct_9fa48("45232") ? "" : (stryCov_9fa48("45232"), 'admin-approval-ip')))) {
          if (stryMutAct_9fa48("45233")) {
            {}
          } else {
            stryCov_9fa48("45233");
            const count = await db.sortedSetCard(stryMutAct_9fa48("45234") ? `` : (stryCov_9fa48("45234"), `ip:${ip}:uid`));
            return stryMutAct_9fa48("45235") ? !count : (stryCov_9fa48("45235"), !(stryMutAct_9fa48("45236") ? count : (stryCov_9fa48("45236"), !count)));
          }
        }
        return stryMutAct_9fa48("45237") ? true : (stryCov_9fa48("45237"), false);
      }
    };
    User.getRegistrationQueue = async function (start, stop) {
      if (stryMutAct_9fa48("45238")) {
        {}
      } else {
        stryCov_9fa48("45238");
        const data = await db.getSortedSetRevRangeWithScores(stryMutAct_9fa48("45239") ? "" : (stryCov_9fa48("45239"), 'registration:queue'), start, stop);
        const keys = stryMutAct_9fa48("45240") ? data.map(user => `registration:queue:name:${user.value}`) : (stryCov_9fa48("45240"), data.filter(Boolean).map(stryMutAct_9fa48("45241") ? () => undefined : (stryCov_9fa48("45241"), user => stryMutAct_9fa48("45242") ? `` : (stryCov_9fa48("45242"), `registration:queue:name:${user.value}`))));
        let users = await db.getObjects(keys);
        users = stryMutAct_9fa48("45243") ? users.map((user, index) => {
          user.timestampISO = utils.toISOString(data[index].score);
          user.email = validator.escape(String(user.email));
          user.usernameEscaped = validator.escape(String(user.username));
          delete user.hashedPassword;
          return user;
        }) : (stryCov_9fa48("45243"), users.filter(Boolean).map((user, index) => {
          if (stryMutAct_9fa48("45244")) {
            {}
          } else {
            stryCov_9fa48("45244");
            user.timestampISO = utils.toISOString(data[index].score);
            user.email = validator.escape(String(user.email));
            user.usernameEscaped = validator.escape(String(user.username));
            delete user.hashedPassword;
            return user;
          }
        }));
        await Promise.all(users.map(async user => {
          if (stryMutAct_9fa48("45245")) {
            {}
          } else {
            stryCov_9fa48("45245");
            // temporary: see http://www.stopforumspam.com/forum/viewtopic.php?id=6392
            // need to keep this for getIPMatchedUsers
            user.ip = user.ip.replace(stryMutAct_9fa48("45246") ? "" : (stryCov_9fa48("45246"), '::ffff:'), stryMutAct_9fa48("45247") ? "Stryker was here!" : (stryCov_9fa48("45247"), ''));
            await getIPMatchedUsers(user);
            user.customActions = (stryMutAct_9fa48("45248") ? ["Stryker was here"] : (stryCov_9fa48("45248"), [])).concat(user.customActions);
            /*
                // then spam prevention plugins, using the "filter:user.getRegistrationQueue" hook can be like:
                user.customActions.push({
                    title: '[[spam-be-gone:report-user]]',
                    id: 'report-spam-user-' + user.username,
                    class: 'btn-warning report-spam-user',
                    icon: 'fa-flag'
                });
             */
          }
        }));

        const results = await plugins.hooks.fire(stryMutAct_9fa48("45249") ? "" : (stryCov_9fa48("45249"), 'filter:user.getRegistrationQueue'), stryMutAct_9fa48("45250") ? {} : (stryCov_9fa48("45250"), {
          users: users
        }));
        return results.users;
      }
    };
    async function getIPMatchedUsers(user) {
      if (stryMutAct_9fa48("45251")) {
        {}
      } else {
        stryCov_9fa48("45251");
        const uids = await User.getUidsFromSet(stryMutAct_9fa48("45252") ? `` : (stryCov_9fa48("45252"), `ip:${user.ip}:uid`), 0, stryMutAct_9fa48("45253") ? +1 : (stryCov_9fa48("45253"), -1));
        user.ipMatch = await User.getUsersFields(uids, stryMutAct_9fa48("45254") ? [] : (stryCov_9fa48("45254"), [stryMutAct_9fa48("45255") ? "" : (stryCov_9fa48("45255"), 'uid'), stryMutAct_9fa48("45256") ? "" : (stryCov_9fa48("45256"), 'username'), stryMutAct_9fa48("45257") ? "" : (stryCov_9fa48("45257"), 'picture')]));
      }
    }
    User.autoApprove = async function () {
      if (stryMutAct_9fa48("45258")) {
        {}
      } else {
        stryCov_9fa48("45258");
        if (stryMutAct_9fa48("45262") ? meta.config.autoApproveTime > 0 : stryMutAct_9fa48("45261") ? meta.config.autoApproveTime < 0 : stryMutAct_9fa48("45260") ? false : stryMutAct_9fa48("45259") ? true : (stryCov_9fa48("45259", "45260", "45261", "45262"), meta.config.autoApproveTime <= 0)) {
          if (stryMutAct_9fa48("45263")) {
            {}
          } else {
            stryCov_9fa48("45263");
            return;
          }
        }
        const users = await db.getSortedSetRevRangeWithScores(stryMutAct_9fa48("45264") ? "" : (stryCov_9fa48("45264"), 'registration:queue'), 0, stryMutAct_9fa48("45265") ? +1 : (stryCov_9fa48("45265"), -1));
        const now = Date.now();
        for (const user of stryMutAct_9fa48("45266") ? users : (stryCov_9fa48("45266"), users.filter(stryMutAct_9fa48("45267") ? () => undefined : (stryCov_9fa48("45267"), user => stryMutAct_9fa48("45271") ? now - user.score < meta.config.autoApproveTime * 3600000 : stryMutAct_9fa48("45270") ? now - user.score > meta.config.autoApproveTime * 3600000 : stryMutAct_9fa48("45269") ? false : stryMutAct_9fa48("45268") ? true : (stryCov_9fa48("45268", "45269", "45270", "45271"), (stryMutAct_9fa48("45272") ? now + user.score : (stryCov_9fa48("45272"), now - user.score)) >= (stryMutAct_9fa48("45273") ? meta.config.autoApproveTime / 3600000 : (stryCov_9fa48("45273"), meta.config.autoApproveTime * 3600000))))))) {
          if (stryMutAct_9fa48("45274")) {
            {}
          } else {
            stryCov_9fa48("45274");
            // eslint-disable-next-line no-await-in-loop
            await User.acceptRegistration(user.value);
          }
        }
      }
    };
  }
};