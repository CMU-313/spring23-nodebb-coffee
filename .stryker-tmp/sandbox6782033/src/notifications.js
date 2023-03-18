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
const cron = require('cron').CronJob;
const nconf = require('nconf');
const _ = require('lodash');
const db = require('./database');
const User = require('./user');
const posts = require('./posts');
const groups = require('./groups');
const meta = require('./meta');
const batch = require('./batch');
const plugins = require('./plugins');
const utils = require('./utils');
const emailer = require('./emailer');
const Notifications = module.exports;
Notifications.baseTypes = stryMutAct_9fa48("26566") ? [] : (stryCov_9fa48("26566"), [stryMutAct_9fa48("26567") ? "" : (stryCov_9fa48("26567"), 'notificationType_upvote'), stryMutAct_9fa48("26568") ? "" : (stryCov_9fa48("26568"), 'notificationType_new-topic'), stryMutAct_9fa48("26569") ? "" : (stryCov_9fa48("26569"), 'notificationType_new-reply'), stryMutAct_9fa48("26570") ? "" : (stryCov_9fa48("26570"), 'notificationType_post-edit'), stryMutAct_9fa48("26571") ? "" : (stryCov_9fa48("26571"), 'notificationType_follow'), stryMutAct_9fa48("26572") ? "" : (stryCov_9fa48("26572"), 'notificationType_new-chat'), stryMutAct_9fa48("26573") ? "" : (stryCov_9fa48("26573"), 'notificationType_new-group-chat'), stryMutAct_9fa48("26574") ? "" : (stryCov_9fa48("26574"), 'notificationType_group-invite'), stryMutAct_9fa48("26575") ? "" : (stryCov_9fa48("26575"), 'notificationType_group-leave'), stryMutAct_9fa48("26576") ? "" : (stryCov_9fa48("26576"), 'notificationType_group-request-membership')]);
Notifications.privilegedTypes = stryMutAct_9fa48("26577") ? [] : (stryCov_9fa48("26577"), [stryMutAct_9fa48("26578") ? "" : (stryCov_9fa48("26578"), 'notificationType_new-register'), stryMutAct_9fa48("26579") ? "" : (stryCov_9fa48("26579"), 'notificationType_post-queue'), stryMutAct_9fa48("26580") ? "" : (stryCov_9fa48("26580"), 'notificationType_new-post-flag'), stryMutAct_9fa48("26581") ? "" : (stryCov_9fa48("26581"), 'notificationType_new-user-flag')]);
const notificationPruneCutoff = 2592000000; // one month

Notifications.getAllNotificationTypes = async function () {
  if (stryMutAct_9fa48("26582")) {
    {}
  } else {
    stryCov_9fa48("26582");
    const results = await plugins.hooks.fire(stryMutAct_9fa48("26583") ? "" : (stryCov_9fa48("26583"), 'filter:user.notificationTypes'), stryMutAct_9fa48("26584") ? {} : (stryCov_9fa48("26584"), {
      types: stryMutAct_9fa48("26585") ? Notifications.baseTypes : (stryCov_9fa48("26585"), Notifications.baseTypes.slice()),
      privilegedTypes: stryMutAct_9fa48("26586") ? Notifications.privilegedTypes : (stryCov_9fa48("26586"), Notifications.privilegedTypes.slice())
    }));
    return results.types.concat(results.privilegedTypes);
  }
};
Notifications.startJobs = function () {
  if (stryMutAct_9fa48("26587")) {
    {}
  } else {
    stryCov_9fa48("26587");
    winston.verbose(stryMutAct_9fa48("26588") ? "" : (stryCov_9fa48("26588"), '[notifications.init] Registering jobs.'));
    new cron(stryMutAct_9fa48("26589") ? "" : (stryCov_9fa48("26589"), '*/30 * * * *'), Notifications.prune, null, stryMutAct_9fa48("26590") ? false : (stryCov_9fa48("26590"), true));
  }
};
Notifications.get = async function (nid) {
  if (stryMutAct_9fa48("26591")) {
    {}
  } else {
    stryCov_9fa48("26591");
    const notifications = await Notifications.getMultiple(stryMutAct_9fa48("26592") ? [] : (stryCov_9fa48("26592"), [nid]));
    return (stryMutAct_9fa48("26595") ? Array.isArray(notifications) || notifications.length : stryMutAct_9fa48("26594") ? false : stryMutAct_9fa48("26593") ? true : (stryCov_9fa48("26593", "26594", "26595"), Array.isArray(notifications) && notifications.length)) ? notifications[0] : null;
  }
};
Notifications.getMultiple = async function (nids) {
  if (stryMutAct_9fa48("26596")) {
    {}
  } else {
    stryCov_9fa48("26596");
    if (stryMutAct_9fa48("26599") ? !Array.isArray(nids) && !nids.length : stryMutAct_9fa48("26598") ? false : stryMutAct_9fa48("26597") ? true : (stryCov_9fa48("26597", "26598", "26599"), (stryMutAct_9fa48("26600") ? Array.isArray(nids) : (stryCov_9fa48("26600"), !Array.isArray(nids))) || (stryMutAct_9fa48("26601") ? nids.length : (stryCov_9fa48("26601"), !nids.length)))) {
      if (stryMutAct_9fa48("26602")) {
        {}
      } else {
        stryCov_9fa48("26602");
        return stryMutAct_9fa48("26603") ? ["Stryker was here"] : (stryCov_9fa48("26603"), []);
      }
    }
    const keys = nids.map(stryMutAct_9fa48("26604") ? () => undefined : (stryCov_9fa48("26604"), nid => stryMutAct_9fa48("26605") ? `` : (stryCov_9fa48("26605"), `notifications:${nid}`)));
    const notifications = await db.getObjects(keys);
    const userKeys = notifications.map(stryMutAct_9fa48("26606") ? () => undefined : (stryCov_9fa48("26606"), n => stryMutAct_9fa48("26609") ? n || n.from : stryMutAct_9fa48("26608") ? false : stryMutAct_9fa48("26607") ? true : (stryCov_9fa48("26607", "26608", "26609"), n && n.from)));
    const usersData = await User.getUsersFields(userKeys, stryMutAct_9fa48("26610") ? [] : (stryCov_9fa48("26610"), [stryMutAct_9fa48("26611") ? "" : (stryCov_9fa48("26611"), 'username'), stryMutAct_9fa48("26612") ? "" : (stryCov_9fa48("26612"), 'userslug'), stryMutAct_9fa48("26613") ? "" : (stryCov_9fa48("26613"), 'picture')]));
    notifications.forEach((notification, index) => {
      if (stryMutAct_9fa48("26614")) {
        {}
      } else {
        stryCov_9fa48("26614");
        if (stryMutAct_9fa48("26616") ? false : stryMutAct_9fa48("26615") ? true : (stryCov_9fa48("26615", "26616"), notification)) {
          if (stryMutAct_9fa48("26617")) {
            {}
          } else {
            stryCov_9fa48("26617");
            if (stryMutAct_9fa48("26620") ? notification.path || !notification.path.startsWith('http') : stryMutAct_9fa48("26619") ? false : stryMutAct_9fa48("26618") ? true : (stryCov_9fa48("26618", "26619", "26620"), notification.path && (stryMutAct_9fa48("26621") ? notification.path.startsWith('http') : (stryCov_9fa48("26621"), !(stryMutAct_9fa48("26622") ? notification.path.endsWith('http') : (stryCov_9fa48("26622"), notification.path.startsWith(stryMutAct_9fa48("26623") ? "" : (stryCov_9fa48("26623"), 'http')))))))) {
              if (stryMutAct_9fa48("26624")) {
                {}
              } else {
                stryCov_9fa48("26624");
                notification.path = stryMutAct_9fa48("26625") ? nconf.get('relative_path') - notification.path : (stryCov_9fa48("26625"), nconf.get(stryMutAct_9fa48("26626") ? "" : (stryCov_9fa48("26626"), 'relative_path')) + notification.path);
              }
            }
            notification.datetimeISO = utils.toISOString(notification.datetime);
            if (stryMutAct_9fa48("26628") ? false : stryMutAct_9fa48("26627") ? true : (stryCov_9fa48("26627", "26628"), notification.bodyLong)) {
              if (stryMutAct_9fa48("26629")) {
                {}
              } else {
                stryCov_9fa48("26629");
                notification.bodyLong = utils.stripHTMLTags(notification.bodyLong, stryMutAct_9fa48("26630") ? [] : (stryCov_9fa48("26630"), [stryMutAct_9fa48("26631") ? "" : (stryCov_9fa48("26631"), 'img'), stryMutAct_9fa48("26632") ? "" : (stryCov_9fa48("26632"), 'p'), stryMutAct_9fa48("26633") ? "" : (stryCov_9fa48("26633"), 'a')]));
              }
            }
            notification.user = usersData[index];
            if (stryMutAct_9fa48("26635") ? false : stryMutAct_9fa48("26634") ? true : (stryCov_9fa48("26634", "26635"), notification.user)) {
              if (stryMutAct_9fa48("26636")) {
                {}
              } else {
                stryCov_9fa48("26636");
                notification.image = stryMutAct_9fa48("26639") ? notification.user.picture && null : stryMutAct_9fa48("26638") ? false : stryMutAct_9fa48("26637") ? true : (stryCov_9fa48("26637", "26638", "26639"), notification.user.picture || null);
                if (stryMutAct_9fa48("26642") ? notification.user.username !== '[[global:guest]]' : stryMutAct_9fa48("26641") ? false : stryMutAct_9fa48("26640") ? true : (stryCov_9fa48("26640", "26641", "26642"), notification.user.username === (stryMutAct_9fa48("26643") ? "" : (stryCov_9fa48("26643"), '[[global:guest]]')))) {
                  if (stryMutAct_9fa48("26644")) {
                    {}
                  } else {
                    stryCov_9fa48("26644");
                    notification.bodyShort = notification.bodyShort.replace(stryMutAct_9fa48("26656") ? /([\s\S]*?),[\s\S]*?,([\s\s]*?)/ : stryMutAct_9fa48("26655") ? /([\s\S]*?),[\s\S]*?,([\S\S]*?)/ : stryMutAct_9fa48("26654") ? /([\s\S]*?),[\s\S]*?,([^\s\S]*?)/ : stryMutAct_9fa48("26653") ? /([\s\S]*?),[\s\S]*?,([\s\S])/ : stryMutAct_9fa48("26652") ? /([\s\S]*?),[\s\s]*?,([\s\S]*?)/ : stryMutAct_9fa48("26651") ? /([\s\S]*?),[\S\S]*?,([\s\S]*?)/ : stryMutAct_9fa48("26650") ? /([\s\S]*?),[^\s\S]*?,([\s\S]*?)/ : stryMutAct_9fa48("26649") ? /([\s\S]*?),[\s\S],([\s\S]*?)/ : stryMutAct_9fa48("26648") ? /([\s\s]*?),[\s\S]*?,([\s\S]*?)/ : stryMutAct_9fa48("26647") ? /([\S\S]*?),[\s\S]*?,([\s\S]*?)/ : stryMutAct_9fa48("26646") ? /([^\s\S]*?),[\s\S]*?,([\s\S]*?)/ : stryMutAct_9fa48("26645") ? /([\s\S]),[\s\S]*?,([\s\S]*?)/ : (stryCov_9fa48("26645", "26646", "26647", "26648", "26649", "26650", "26651", "26652", "26653", "26654", "26655", "26656"), /([\s\S]*?),[\s\S]*?,([\s\S]*?)/), stryMutAct_9fa48("26657") ? "" : (stryCov_9fa48("26657"), '$1, [[global:guest]], $2'));
                  }
                }
              }
            } else if (stryMutAct_9fa48("26660") ? notification.image === 'brand:logo' && !notification.image : stryMutAct_9fa48("26659") ? false : stryMutAct_9fa48("26658") ? true : (stryCov_9fa48("26658", "26659", "26660"), (stryMutAct_9fa48("26662") ? notification.image !== 'brand:logo' : stryMutAct_9fa48("26661") ? false : (stryCov_9fa48("26661", "26662"), notification.image === (stryMutAct_9fa48("26663") ? "" : (stryCov_9fa48("26663"), 'brand:logo')))) || (stryMutAct_9fa48("26664") ? notification.image : (stryCov_9fa48("26664"), !notification.image)))) {
              if (stryMutAct_9fa48("26665")) {
                {}
              } else {
                stryCov_9fa48("26665");
                notification.image = stryMutAct_9fa48("26668") ? meta.config['brand:logo'] && `${nconf.get('relative_path')}/logo.png` : stryMutAct_9fa48("26667") ? false : stryMutAct_9fa48("26666") ? true : (stryCov_9fa48("26666", "26667", "26668"), meta.config[stryMutAct_9fa48("26669") ? "" : (stryCov_9fa48("26669"), 'brand:logo')] || (stryMutAct_9fa48("26670") ? `` : (stryCov_9fa48("26670"), `${nconf.get(stryMutAct_9fa48("26671") ? "" : (stryCov_9fa48("26671"), 'relative_path'))}/logo.png`)));
              }
            }
          }
        }
      }
    });
    return notifications;
  }
};
Notifications.filterExists = async function (nids) {
  if (stryMutAct_9fa48("26672")) {
    {}
  } else {
    stryCov_9fa48("26672");
    const exists = await db.isSortedSetMembers(stryMutAct_9fa48("26673") ? "" : (stryCov_9fa48("26673"), 'notifications'), nids);
    return stryMutAct_9fa48("26674") ? nids : (stryCov_9fa48("26674"), nids.filter(stryMutAct_9fa48("26675") ? () => undefined : (stryCov_9fa48("26675"), (nid, idx) => exists[idx])));
  }
};
Notifications.findRelated = async function (mergeIds, set) {
  if (stryMutAct_9fa48("26676")) {
    {}
  } else {
    stryCov_9fa48("26676");
    mergeIds = stryMutAct_9fa48("26677") ? mergeIds : (stryCov_9fa48("26677"), mergeIds.filter(Boolean));
    if (stryMutAct_9fa48("26680") ? false : stryMutAct_9fa48("26679") ? true : stryMutAct_9fa48("26678") ? mergeIds.length : (stryCov_9fa48("26678", "26679", "26680"), !mergeIds.length)) {
      if (stryMutAct_9fa48("26681")) {
        {}
      } else {
        stryCov_9fa48("26681");
        return stryMutAct_9fa48("26682") ? ["Stryker was here"] : (stryCov_9fa48("26682"), []);
      }
    }
    // A related notification is one in a zset that has the same mergeId
    const nids = await db.getSortedSetRevRange(set, 0, stryMutAct_9fa48("26683") ? +1 : (stryCov_9fa48("26683"), -1));
    const keys = nids.map(stryMutAct_9fa48("26684") ? () => undefined : (stryCov_9fa48("26684"), nid => stryMutAct_9fa48("26685") ? `` : (stryCov_9fa48("26685"), `notifications:${nid}`)));
    const notificationData = await db.getObjectsFields(keys, stryMutAct_9fa48("26686") ? [] : (stryCov_9fa48("26686"), [stryMutAct_9fa48("26687") ? "" : (stryCov_9fa48("26687"), 'mergeId')]));
    const notificationMergeIds = notificationData.map(stryMutAct_9fa48("26688") ? () => undefined : (stryCov_9fa48("26688"), notifObj => String(notifObj.mergeId)));
    const mergeSet = new Set(mergeIds.map(stryMutAct_9fa48("26689") ? () => undefined : (stryCov_9fa48("26689"), id => String(id))));
    return stryMutAct_9fa48("26690") ? nids : (stryCov_9fa48("26690"), nids.filter(stryMutAct_9fa48("26691") ? () => undefined : (stryCov_9fa48("26691"), (nid, idx) => mergeSet.has(notificationMergeIds[idx]))));
  }
};
Notifications.create = async function (data) {
  if (stryMutAct_9fa48("26692")) {
    {}
  } else {
    stryCov_9fa48("26692");
    if (stryMutAct_9fa48("26695") ? false : stryMutAct_9fa48("26694") ? true : stryMutAct_9fa48("26693") ? data.nid : (stryCov_9fa48("26693", "26694", "26695"), !data.nid)) {
      if (stryMutAct_9fa48("26696")) {
        {}
      } else {
        stryCov_9fa48("26696");
        throw new Error(stryMutAct_9fa48("26697") ? "" : (stryCov_9fa48("26697"), '[[error:no-notification-id]]'));
      }
    }
    data.importance = stryMutAct_9fa48("26700") ? data.importance && 5 : stryMutAct_9fa48("26699") ? false : stryMutAct_9fa48("26698") ? true : (stryCov_9fa48("26698", "26699", "26700"), data.importance || 5);
    const oldNotif = await db.getObject(stryMutAct_9fa48("26701") ? `` : (stryCov_9fa48("26701"), `notifications:${data.nid}`));
    if (stryMutAct_9fa48("26704") ? oldNotif && parseInt(oldNotif.pid, 10) === parseInt(data.pid, 10) || parseInt(oldNotif.importance, 10) > parseInt(data.importance, 10) : stryMutAct_9fa48("26703") ? false : stryMutAct_9fa48("26702") ? true : (stryCov_9fa48("26702", "26703", "26704"), (stryMutAct_9fa48("26706") ? oldNotif || parseInt(oldNotif.pid, 10) === parseInt(data.pid, 10) : stryMutAct_9fa48("26705") ? true : (stryCov_9fa48("26705", "26706"), oldNotif && (stryMutAct_9fa48("26708") ? parseInt(oldNotif.pid, 10) !== parseInt(data.pid, 10) : stryMutAct_9fa48("26707") ? true : (stryCov_9fa48("26707", "26708"), parseInt(oldNotif.pid, 10) === parseInt(data.pid, 10))))) && (stryMutAct_9fa48("26711") ? parseInt(oldNotif.importance, 10) <= parseInt(data.importance, 10) : stryMutAct_9fa48("26710") ? parseInt(oldNotif.importance, 10) >= parseInt(data.importance, 10) : stryMutAct_9fa48("26709") ? true : (stryCov_9fa48("26709", "26710", "26711"), parseInt(oldNotif.importance, 10) > parseInt(data.importance, 10))))) {
      if (stryMutAct_9fa48("26712")) {
        {}
      } else {
        stryCov_9fa48("26712");
        return null;
      }
    }
    const now = Date.now();
    data.datetime = now;
    const result = await plugins.hooks.fire(stryMutAct_9fa48("26713") ? "" : (stryCov_9fa48("26713"), 'filter:notifications.create'), stryMutAct_9fa48("26714") ? {} : (stryCov_9fa48("26714"), {
      data: data
    }));
    if (stryMutAct_9fa48("26717") ? false : stryMutAct_9fa48("26716") ? true : stryMutAct_9fa48("26715") ? result.data : (stryCov_9fa48("26715", "26716", "26717"), !result.data)) {
      if (stryMutAct_9fa48("26718")) {
        {}
      } else {
        stryCov_9fa48("26718");
        return null;
      }
    }
    await Promise.all(stryMutAct_9fa48("26719") ? [] : (stryCov_9fa48("26719"), [db.sortedSetAdd(stryMutAct_9fa48("26720") ? "" : (stryCov_9fa48("26720"), 'notifications'), now, data.nid), db.setObject(stryMutAct_9fa48("26721") ? `` : (stryCov_9fa48("26721"), `notifications:${data.nid}`), data)]));
    return data;
  }
};
Notifications.push = async function (notification, uids) {
  if (stryMutAct_9fa48("26722")) {
    {}
  } else {
    stryCov_9fa48("26722");
    if (stryMutAct_9fa48("26725") ? !notification && !notification.nid : stryMutAct_9fa48("26724") ? false : stryMutAct_9fa48("26723") ? true : (stryCov_9fa48("26723", "26724", "26725"), (stryMutAct_9fa48("26726") ? notification : (stryCov_9fa48("26726"), !notification)) || (stryMutAct_9fa48("26727") ? notification.nid : (stryCov_9fa48("26727"), !notification.nid)))) {
      if (stryMutAct_9fa48("26728")) {
        {}
      } else {
        stryCov_9fa48("26728");
        return;
      }
    }
    uids = Array.isArray(uids) ? _.uniq(uids) : stryMutAct_9fa48("26729") ? [] : (stryCov_9fa48("26729"), [uids]);
    if (stryMutAct_9fa48("26732") ? false : stryMutAct_9fa48("26731") ? true : stryMutAct_9fa48("26730") ? uids.length : (stryCov_9fa48("26730", "26731", "26732"), !uids.length)) {
      if (stryMutAct_9fa48("26733")) {
        {}
      } else {
        stryCov_9fa48("26733");
        return;
      }
    }
    setTimeout(() => {
      if (stryMutAct_9fa48("26734")) {
        {}
      } else {
        stryCov_9fa48("26734");
        batch.processArray(uids, async uids => {
          if (stryMutAct_9fa48("26735")) {
            {}
          } else {
            stryCov_9fa48("26735");
            await pushToUids(uids, notification);
          }
        }, stryMutAct_9fa48("26736") ? {} : (stryCov_9fa48("26736"), {
          interval: 1000,
          batch: 500
        }), err => {
          if (stryMutAct_9fa48("26737")) {
            {}
          } else {
            stryCov_9fa48("26737");
            if (stryMutAct_9fa48("26739") ? false : stryMutAct_9fa48("26738") ? true : (stryCov_9fa48("26738", "26739"), err)) {
              if (stryMutAct_9fa48("26740")) {
                {}
              } else {
                stryCov_9fa48("26740");
                winston.error(err.stack);
              }
            }
          }
        });
      }
    }, 1000);
  }
};
async function pushToUids(uids, notification) {
  if (stryMutAct_9fa48("26741")) {
    {}
  } else {
    stryCov_9fa48("26741");
    async function sendNotification(uids) {
      if (stryMutAct_9fa48("26742")) {
        {}
      } else {
        stryCov_9fa48("26742");
        if (stryMutAct_9fa48("26745") ? false : stryMutAct_9fa48("26744") ? true : stryMutAct_9fa48("26743") ? uids.length : (stryCov_9fa48("26743", "26744", "26745"), !uids.length)) {
          if (stryMutAct_9fa48("26746")) {
            {}
          } else {
            stryCov_9fa48("26746");
            return;
          }
        }
        const cutoff = stryMutAct_9fa48("26747") ? Date.now() + notificationPruneCutoff : (stryCov_9fa48("26747"), Date.now() - notificationPruneCutoff);
        const unreadKeys = uids.map(stryMutAct_9fa48("26748") ? () => undefined : (stryCov_9fa48("26748"), uid => stryMutAct_9fa48("26749") ? `` : (stryCov_9fa48("26749"), `uid:${uid}:notifications:unread`)));
        const readKeys = uids.map(stryMutAct_9fa48("26750") ? () => undefined : (stryCov_9fa48("26750"), uid => stryMutAct_9fa48("26751") ? `` : (stryCov_9fa48("26751"), `uid:${uid}:notifications:read`)));
        await Promise.all(stryMutAct_9fa48("26752") ? [] : (stryCov_9fa48("26752"), [db.sortedSetsAdd(unreadKeys, notification.datetime, notification.nid), db.sortedSetsRemove(readKeys, notification.nid)]));
        await db.sortedSetsRemoveRangeByScore(unreadKeys.concat(readKeys), stryMutAct_9fa48("26753") ? "" : (stryCov_9fa48("26753"), '-inf'), cutoff);
        const websockets = require('./socket.io');
        if (stryMutAct_9fa48("26755") ? false : stryMutAct_9fa48("26754") ? true : (stryCov_9fa48("26754", "26755"), websockets.server)) {
          if (stryMutAct_9fa48("26756")) {
            {}
          } else {
            stryCov_9fa48("26756");
            uids.forEach(uid => {
              if (stryMutAct_9fa48("26757")) {
                {}
              } else {
                stryCov_9fa48("26757");
                websockets.in(stryMutAct_9fa48("26758") ? `` : (stryCov_9fa48("26758"), `uid_${uid}`)).emit(stryMutAct_9fa48("26759") ? "" : (stryCov_9fa48("26759"), 'event:new_notification'), notification);
              }
            });
          }
        }
      }
    }
    async function sendEmail(uids) {
      if (stryMutAct_9fa48("26760")) {
        {}
      } else {
        stryCov_9fa48("26760");
        // Update CTA messaging (as not all notification types need custom text)
        if (stryMutAct_9fa48("26762") ? false : stryMutAct_9fa48("26761") ? true : (stryCov_9fa48("26761", "26762"), (stryMutAct_9fa48("26763") ? [] : (stryCov_9fa48("26763"), [stryMutAct_9fa48("26764") ? "" : (stryCov_9fa48("26764"), 'new-reply'), stryMutAct_9fa48("26765") ? "" : (stryCov_9fa48("26765"), 'new-chat')])).includes(notification.type))) {
          if (stryMutAct_9fa48("26766")) {
            {}
          } else {
            stryCov_9fa48("26766");
            notification[stryMutAct_9fa48("26767") ? "" : (stryCov_9fa48("26767"), 'cta-type')] = notification.type;
          }
        }
        let body = stryMutAct_9fa48("26770") ? notification.bodyLong && '' : stryMutAct_9fa48("26769") ? false : stryMutAct_9fa48("26768") ? true : (stryCov_9fa48("26768", "26769", "26770"), notification.bodyLong || (stryMutAct_9fa48("26771") ? "Stryker was here!" : (stryCov_9fa48("26771"), '')));
        if (stryMutAct_9fa48("26773") ? false : stryMutAct_9fa48("26772") ? true : (stryCov_9fa48("26772", "26773"), meta.config.removeEmailNotificationImages)) {
          if (stryMutAct_9fa48("26774")) {
            {}
          } else {
            stryCov_9fa48("26774");
            body = body.replace(stryMutAct_9fa48("26776") ? /<img[>]*>/ : stryMutAct_9fa48("26775") ? /<img[^>]>/ : (stryCov_9fa48("26775", "26776"), /<img[^>]*>/), stryMutAct_9fa48("26777") ? "Stryker was here!" : (stryCov_9fa48("26777"), ''));
          }
        }
        body = posts.relativeToAbsolute(body, posts.urlRegex);
        body = posts.relativeToAbsolute(body, posts.imgRegex);
        let errorLogged = stryMutAct_9fa48("26778") ? true : (stryCov_9fa48("26778"), false);
        await async.eachLimit(uids, 3, async uid => {
          if (stryMutAct_9fa48("26779")) {
            {}
          } else {
            stryCov_9fa48("26779");
            await emailer.send(stryMutAct_9fa48("26780") ? "" : (stryCov_9fa48("26780"), 'notification'), uid, stryMutAct_9fa48("26781") ? {} : (stryCov_9fa48("26781"), {
              path: notification.path,
              notification_url: (stryMutAct_9fa48("26782") ? notification.path.endsWith('http') : (stryCov_9fa48("26782"), notification.path.startsWith(stryMutAct_9fa48("26783") ? "" : (stryCov_9fa48("26783"), 'http')))) ? notification.path : stryMutAct_9fa48("26784") ? nconf.get('url') - notification.path : (stryCov_9fa48("26784"), nconf.get(stryMutAct_9fa48("26785") ? "" : (stryCov_9fa48("26785"), 'url')) + notification.path),
              subject: utils.stripHTMLTags(stryMutAct_9fa48("26788") ? notification.subject && '[[notifications:new_notification]]' : stryMutAct_9fa48("26787") ? false : stryMutAct_9fa48("26786") ? true : (stryCov_9fa48("26786", "26787", "26788"), notification.subject || (stryMutAct_9fa48("26789") ? "" : (stryCov_9fa48("26789"), '[[notifications:new_notification]]')))),
              intro: utils.stripHTMLTags(notification.bodyShort),
              body: body,
              notification: notification,
              showUnsubscribe: stryMutAct_9fa48("26790") ? false : (stryCov_9fa48("26790"), true)
            })).catch(err => {
              if (stryMutAct_9fa48("26791")) {
                {}
              } else {
                stryCov_9fa48("26791");
                if (stryMutAct_9fa48("26794") ? false : stryMutAct_9fa48("26793") ? true : stryMutAct_9fa48("26792") ? errorLogged : (stryCov_9fa48("26792", "26793", "26794"), !errorLogged)) {
                  if (stryMutAct_9fa48("26795")) {
                    {}
                  } else {
                    stryCov_9fa48("26795");
                    winston.error(stryMutAct_9fa48("26796") ? `` : (stryCov_9fa48("26796"), `[emailer.send] ${err.stack}`));
                    errorLogged = stryMutAct_9fa48("26797") ? false : (stryCov_9fa48("26797"), true);
                  }
                }
              }
            });
          }
        });
      }
    }
    async function getUidsBySettings(uids) {
      if (stryMutAct_9fa48("26798")) {
        {}
      } else {
        stryCov_9fa48("26798");
        const uidsToNotify = stryMutAct_9fa48("26799") ? ["Stryker was here"] : (stryCov_9fa48("26799"), []);
        const uidsToEmail = stryMutAct_9fa48("26800") ? ["Stryker was here"] : (stryCov_9fa48("26800"), []);
        const usersSettings = await User.getMultipleUserSettings(uids);
        usersSettings.forEach(userSettings => {
          if (stryMutAct_9fa48("26801")) {
            {}
          } else {
            stryCov_9fa48("26801");
            const setting = stryMutAct_9fa48("26804") ? userSettings[`notificationType_${notification.type}`] && 'notification' : stryMutAct_9fa48("26803") ? false : stryMutAct_9fa48("26802") ? true : (stryCov_9fa48("26802", "26803", "26804"), userSettings[stryMutAct_9fa48("26805") ? `` : (stryCov_9fa48("26805"), `notificationType_${notification.type}`)] || (stryMutAct_9fa48("26806") ? "" : (stryCov_9fa48("26806"), 'notification')));
            if (stryMutAct_9fa48("26809") ? setting === 'notification' && setting === 'notificationemail' : stryMutAct_9fa48("26808") ? false : stryMutAct_9fa48("26807") ? true : (stryCov_9fa48("26807", "26808", "26809"), (stryMutAct_9fa48("26811") ? setting !== 'notification' : stryMutAct_9fa48("26810") ? false : (stryCov_9fa48("26810", "26811"), setting === (stryMutAct_9fa48("26812") ? "" : (stryCov_9fa48("26812"), 'notification')))) || (stryMutAct_9fa48("26814") ? setting !== 'notificationemail' : stryMutAct_9fa48("26813") ? false : (stryCov_9fa48("26813", "26814"), setting === (stryMutAct_9fa48("26815") ? "" : (stryCov_9fa48("26815"), 'notificationemail')))))) {
              if (stryMutAct_9fa48("26816")) {
                {}
              } else {
                stryCov_9fa48("26816");
                uidsToNotify.push(userSettings.uid);
              }
            }
            if (stryMutAct_9fa48("26819") ? setting === 'email' && setting === 'notificationemail' : stryMutAct_9fa48("26818") ? false : stryMutAct_9fa48("26817") ? true : (stryCov_9fa48("26817", "26818", "26819"), (stryMutAct_9fa48("26821") ? setting !== 'email' : stryMutAct_9fa48("26820") ? false : (stryCov_9fa48("26820", "26821"), setting === (stryMutAct_9fa48("26822") ? "" : (stryCov_9fa48("26822"), 'email')))) || (stryMutAct_9fa48("26824") ? setting !== 'notificationemail' : stryMutAct_9fa48("26823") ? false : (stryCov_9fa48("26823", "26824"), setting === (stryMutAct_9fa48("26825") ? "" : (stryCov_9fa48("26825"), 'notificationemail')))))) {
              if (stryMutAct_9fa48("26826")) {
                {}
              } else {
                stryCov_9fa48("26826");
                uidsToEmail.push(userSettings.uid);
              }
            }
          }
        });
        return stryMutAct_9fa48("26827") ? {} : (stryCov_9fa48("26827"), {
          uidsToNotify: uidsToNotify,
          uidsToEmail: uidsToEmail
        });
      }
    }

    // Remove uid from recipients list if they have blocked the user triggering the notification
    uids = await User.blocks.filterUids(notification.from, uids);
    const data = await plugins.hooks.fire(stryMutAct_9fa48("26828") ? "" : (stryCov_9fa48("26828"), 'filter:notification.push'), stryMutAct_9fa48("26829") ? {} : (stryCov_9fa48("26829"), {
      notification: notification,
      uids: uids
    }));
    if (stryMutAct_9fa48("26832") ? (!data || !data.notification || !data.uids) && !data.uids.length : stryMutAct_9fa48("26831") ? false : stryMutAct_9fa48("26830") ? true : (stryCov_9fa48("26830", "26831", "26832"), (stryMutAct_9fa48("26834") ? (!data || !data.notification) && !data.uids : stryMutAct_9fa48("26833") ? false : (stryCov_9fa48("26833", "26834"), (stryMutAct_9fa48("26836") ? !data && !data.notification : stryMutAct_9fa48("26835") ? false : (stryCov_9fa48("26835", "26836"), (stryMutAct_9fa48("26837") ? data : (stryCov_9fa48("26837"), !data)) || (stryMutAct_9fa48("26838") ? data.notification : (stryCov_9fa48("26838"), !data.notification)))) || (stryMutAct_9fa48("26839") ? data.uids : (stryCov_9fa48("26839"), !data.uids)))) || (stryMutAct_9fa48("26840") ? data.uids.length : (stryCov_9fa48("26840"), !data.uids.length)))) {
      if (stryMutAct_9fa48("26841")) {
        {}
      } else {
        stryCov_9fa48("26841");
        return;
      }
    }
    notification = data.notification;
    let results = stryMutAct_9fa48("26842") ? {} : (stryCov_9fa48("26842"), {
      uidsToNotify: data.uids,
      uidsToEmail: stryMutAct_9fa48("26843") ? ["Stryker was here"] : (stryCov_9fa48("26843"), [])
    });
    if (stryMutAct_9fa48("26845") ? false : stryMutAct_9fa48("26844") ? true : (stryCov_9fa48("26844", "26845"), notification.type)) {
      if (stryMutAct_9fa48("26846")) {
        {}
      } else {
        stryCov_9fa48("26846");
        results = await getUidsBySettings(data.uids);
      }
    }
    await Promise.all(stryMutAct_9fa48("26847") ? [] : (stryCov_9fa48("26847"), [sendNotification(results.uidsToNotify), sendEmail(results.uidsToEmail)]));
    plugins.hooks.fire(stryMutAct_9fa48("26848") ? "" : (stryCov_9fa48("26848"), 'action:notification.pushed'), stryMutAct_9fa48("26849") ? {} : (stryCov_9fa48("26849"), {
      notification: notification,
      uids: results.uidsToNotify,
      uidsNotified: results.uidsToNotify,
      uidsEmailed: results.uidsToEmail
    }));
  }
}
Notifications.pushGroup = async function (notification, groupName) {
  if (stryMutAct_9fa48("26850")) {
    {}
  } else {
    stryCov_9fa48("26850");
    if (stryMutAct_9fa48("26853") ? false : stryMutAct_9fa48("26852") ? true : stryMutAct_9fa48("26851") ? notification : (stryCov_9fa48("26851", "26852", "26853"), !notification)) {
      if (stryMutAct_9fa48("26854")) {
        {}
      } else {
        stryCov_9fa48("26854");
        return;
      }
    }
    const members = await groups.getMembers(groupName, 0, stryMutAct_9fa48("26855") ? +1 : (stryCov_9fa48("26855"), -1));
    await Notifications.push(notification, members);
  }
};
Notifications.pushGroups = async function (notification, groupNames) {
  if (stryMutAct_9fa48("26856")) {
    {}
  } else {
    stryCov_9fa48("26856");
    if (stryMutAct_9fa48("26859") ? false : stryMutAct_9fa48("26858") ? true : stryMutAct_9fa48("26857") ? notification : (stryCov_9fa48("26857", "26858", "26859"), !notification)) {
      if (stryMutAct_9fa48("26860")) {
        {}
      } else {
        stryCov_9fa48("26860");
        return;
      }
    }
    let groupMembers = await groups.getMembersOfGroups(groupNames);
    groupMembers = _.uniq(_.flatten(groupMembers));
    await Notifications.push(notification, groupMembers);
  }
};
Notifications.rescind = async function (nids) {
  if (stryMutAct_9fa48("26861")) {
    {}
  } else {
    stryCov_9fa48("26861");
    nids = Array.isArray(nids) ? nids : stryMutAct_9fa48("26862") ? [] : (stryCov_9fa48("26862"), [nids]);
    await Promise.all(stryMutAct_9fa48("26863") ? [] : (stryCov_9fa48("26863"), [db.sortedSetRemove(stryMutAct_9fa48("26864") ? "" : (stryCov_9fa48("26864"), 'notifications'), nids), db.deleteAll(nids.map(stryMutAct_9fa48("26865") ? () => undefined : (stryCov_9fa48("26865"), nid => stryMutAct_9fa48("26866") ? `` : (stryCov_9fa48("26866"), `notifications:${nid}`))))]));
  }
};
Notifications.markRead = async function (nid, uid) {
  if (stryMutAct_9fa48("26867")) {
    {}
  } else {
    stryCov_9fa48("26867");
    if (stryMutAct_9fa48("26870") ? parseInt(uid, 10) <= 0 && !nid : stryMutAct_9fa48("26869") ? false : stryMutAct_9fa48("26868") ? true : (stryCov_9fa48("26868", "26869", "26870"), (stryMutAct_9fa48("26873") ? parseInt(uid, 10) > 0 : stryMutAct_9fa48("26872") ? parseInt(uid, 10) < 0 : stryMutAct_9fa48("26871") ? false : (stryCov_9fa48("26871", "26872", "26873"), parseInt(uid, 10) <= 0)) || (stryMutAct_9fa48("26874") ? nid : (stryCov_9fa48("26874"), !nid)))) {
      if (stryMutAct_9fa48("26875")) {
        {}
      } else {
        stryCov_9fa48("26875");
        return;
      }
    }
    await Notifications.markReadMultiple(stryMutAct_9fa48("26876") ? [] : (stryCov_9fa48("26876"), [nid]), uid);
  }
};
Notifications.markUnread = async function (nid, uid) {
  if (stryMutAct_9fa48("26877")) {
    {}
  } else {
    stryCov_9fa48("26877");
    if (stryMutAct_9fa48("26880") ? !(parseInt(uid, 10) > 0) && !nid : stryMutAct_9fa48("26879") ? false : stryMutAct_9fa48("26878") ? true : (stryCov_9fa48("26878", "26879", "26880"), (stryMutAct_9fa48("26881") ? parseInt(uid, 10) > 0 : (stryCov_9fa48("26881"), !(stryMutAct_9fa48("26885") ? parseInt(uid, 10) <= 0 : stryMutAct_9fa48("26884") ? parseInt(uid, 10) >= 0 : stryMutAct_9fa48("26883") ? false : stryMutAct_9fa48("26882") ? true : (stryCov_9fa48("26882", "26883", "26884", "26885"), parseInt(uid, 10) > 0)))) || (stryMutAct_9fa48("26886") ? nid : (stryCov_9fa48("26886"), !nid)))) {
      if (stryMutAct_9fa48("26887")) {
        {}
      } else {
        stryCov_9fa48("26887");
        return;
      }
    }
    const notification = await db.getObject(stryMutAct_9fa48("26888") ? `` : (stryCov_9fa48("26888"), `notifications:${nid}`));
    if (stryMutAct_9fa48("26891") ? false : stryMutAct_9fa48("26890") ? true : stryMutAct_9fa48("26889") ? notification : (stryCov_9fa48("26889", "26890", "26891"), !notification)) {
      if (stryMutAct_9fa48("26892")) {
        {}
      } else {
        stryCov_9fa48("26892");
        throw new Error(stryMutAct_9fa48("26893") ? "" : (stryCov_9fa48("26893"), '[[error:no-notification]]'));
      }
    }
    notification.datetime = stryMutAct_9fa48("26896") ? notification.datetime && Date.now() : stryMutAct_9fa48("26895") ? false : stryMutAct_9fa48("26894") ? true : (stryCov_9fa48("26894", "26895", "26896"), notification.datetime || Date.now());
    await Promise.all(stryMutAct_9fa48("26897") ? [] : (stryCov_9fa48("26897"), [db.sortedSetRemove(stryMutAct_9fa48("26898") ? `` : (stryCov_9fa48("26898"), `uid:${uid}:notifications:read`), nid), db.sortedSetAdd(stryMutAct_9fa48("26899") ? `` : (stryCov_9fa48("26899"), `uid:${uid}:notifications:unread`), notification.datetime, nid)]));
  }
};
Notifications.markReadMultiple = async function (nids, uid) {
  if (stryMutAct_9fa48("26900")) {
    {}
  } else {
    stryCov_9fa48("26900");
    nids = stryMutAct_9fa48("26901") ? nids : (stryCov_9fa48("26901"), nids.filter(Boolean));
    if (stryMutAct_9fa48("26904") ? (!Array.isArray(nids) || !nids.length) && !(parseInt(uid, 10) > 0) : stryMutAct_9fa48("26903") ? false : stryMutAct_9fa48("26902") ? true : (stryCov_9fa48("26902", "26903", "26904"), (stryMutAct_9fa48("26906") ? !Array.isArray(nids) && !nids.length : stryMutAct_9fa48("26905") ? false : (stryCov_9fa48("26905", "26906"), (stryMutAct_9fa48("26907") ? Array.isArray(nids) : (stryCov_9fa48("26907"), !Array.isArray(nids))) || (stryMutAct_9fa48("26908") ? nids.length : (stryCov_9fa48("26908"), !nids.length)))) || (stryMutAct_9fa48("26909") ? parseInt(uid, 10) > 0 : (stryCov_9fa48("26909"), !(stryMutAct_9fa48("26913") ? parseInt(uid, 10) <= 0 : stryMutAct_9fa48("26912") ? parseInt(uid, 10) >= 0 : stryMutAct_9fa48("26911") ? false : stryMutAct_9fa48("26910") ? true : (stryCov_9fa48("26910", "26911", "26912", "26913"), parseInt(uid, 10) > 0)))))) {
      if (stryMutAct_9fa48("26914")) {
        {}
      } else {
        stryCov_9fa48("26914");
        return;
      }
    }
    let notificationKeys = nids.map(stryMutAct_9fa48("26915") ? () => undefined : (stryCov_9fa48("26915"), nid => stryMutAct_9fa48("26916") ? `` : (stryCov_9fa48("26916"), `notifications:${nid}`)));
    let mergeIds = await db.getObjectsFields(notificationKeys, stryMutAct_9fa48("26917") ? [] : (stryCov_9fa48("26917"), [stryMutAct_9fa48("26918") ? "" : (stryCov_9fa48("26918"), 'mergeId')]));
    // Isolate mergeIds and find related notifications
    mergeIds = _.uniq(mergeIds.map(stryMutAct_9fa48("26919") ? () => undefined : (stryCov_9fa48("26919"), set => set.mergeId)));
    const relatedNids = await Notifications.findRelated(mergeIds, stryMutAct_9fa48("26920") ? `` : (stryCov_9fa48("26920"), `uid:${uid}:notifications:unread`));
    notificationKeys = _.union(nids, relatedNids).map(stryMutAct_9fa48("26921") ? () => undefined : (stryCov_9fa48("26921"), nid => stryMutAct_9fa48("26922") ? `` : (stryCov_9fa48("26922"), `notifications:${nid}`)));
    let notificationData = await db.getObjectsFields(notificationKeys, stryMutAct_9fa48("26923") ? [] : (stryCov_9fa48("26923"), [stryMutAct_9fa48("26924") ? "" : (stryCov_9fa48("26924"), 'nid'), stryMutAct_9fa48("26925") ? "" : (stryCov_9fa48("26925"), 'datetime')]));
    notificationData = stryMutAct_9fa48("26926") ? notificationData : (stryCov_9fa48("26926"), notificationData.filter(stryMutAct_9fa48("26927") ? () => undefined : (stryCov_9fa48("26927"), n => stryMutAct_9fa48("26930") ? n || n.nid : stryMutAct_9fa48("26929") ? false : stryMutAct_9fa48("26928") ? true : (stryCov_9fa48("26928", "26929", "26930"), n && n.nid))));
    nids = notificationData.map(stryMutAct_9fa48("26931") ? () => undefined : (stryCov_9fa48("26931"), n => n.nid));
    const datetimes = notificationData.map(stryMutAct_9fa48("26932") ? () => undefined : (stryCov_9fa48("26932"), n => stryMutAct_9fa48("26935") ? n && n.datetime && Date.now() : stryMutAct_9fa48("26934") ? false : stryMutAct_9fa48("26933") ? true : (stryCov_9fa48("26933", "26934", "26935"), (stryMutAct_9fa48("26937") ? n || n.datetime : stryMutAct_9fa48("26936") ? false : (stryCov_9fa48("26936", "26937"), n && n.datetime)) || Date.now())));
    await Promise.all(stryMutAct_9fa48("26938") ? [] : (stryCov_9fa48("26938"), [db.sortedSetRemove(stryMutAct_9fa48("26939") ? `` : (stryCov_9fa48("26939"), `uid:${uid}:notifications:unread`), nids), db.sortedSetAdd(stryMutAct_9fa48("26940") ? `` : (stryCov_9fa48("26940"), `uid:${uid}:notifications:read`), datetimes, nids)]));
  }
};
Notifications.markAllRead = async function (uid) {
  if (stryMutAct_9fa48("26941")) {
    {}
  } else {
    stryCov_9fa48("26941");
    const nids = await db.getSortedSetRevRange(stryMutAct_9fa48("26942") ? `` : (stryCov_9fa48("26942"), `uid:${uid}:notifications:unread`), 0, 99);
    await Notifications.markReadMultiple(nids, uid);
  }
};
Notifications.prune = async function () {
  if (stryMutAct_9fa48("26943")) {
    {}
  } else {
    stryCov_9fa48("26943");
    const cutoffTime = stryMutAct_9fa48("26944") ? Date.now() + notificationPruneCutoff : (stryCov_9fa48("26944"), Date.now() - notificationPruneCutoff);
    const nids = await db.getSortedSetRangeByScore(stryMutAct_9fa48("26945") ? "" : (stryCov_9fa48("26945"), 'notifications'), 0, 500, stryMutAct_9fa48("26946") ? "" : (stryCov_9fa48("26946"), '-inf'), cutoffTime);
    if (stryMutAct_9fa48("26949") ? false : stryMutAct_9fa48("26948") ? true : stryMutAct_9fa48("26947") ? nids.length : (stryCov_9fa48("26947", "26948", "26949"), !nids.length)) {
      if (stryMutAct_9fa48("26950")) {
        {}
      } else {
        stryCov_9fa48("26950");
        return;
      }
    }
    try {
      if (stryMutAct_9fa48("26951")) {
        {}
      } else {
        stryCov_9fa48("26951");
        await Promise.all(stryMutAct_9fa48("26952") ? [] : (stryCov_9fa48("26952"), [db.sortedSetRemove(stryMutAct_9fa48("26953") ? "" : (stryCov_9fa48("26953"), 'notifications'), nids), db.deleteAll(nids.map(stryMutAct_9fa48("26954") ? () => undefined : (stryCov_9fa48("26954"), nid => stryMutAct_9fa48("26955") ? `` : (stryCov_9fa48("26955"), `notifications:${nid}`))))]));
        await batch.processSortedSet(stryMutAct_9fa48("26956") ? "" : (stryCov_9fa48("26956"), 'users:joindate'), async uids => {
          if (stryMutAct_9fa48("26957")) {
            {}
          } else {
            stryCov_9fa48("26957");
            const unread = uids.map(stryMutAct_9fa48("26958") ? () => undefined : (stryCov_9fa48("26958"), uid => stryMutAct_9fa48("26959") ? `` : (stryCov_9fa48("26959"), `uid:${uid}:notifications:unread`)));
            const read = uids.map(stryMutAct_9fa48("26960") ? () => undefined : (stryCov_9fa48("26960"), uid => stryMutAct_9fa48("26961") ? `` : (stryCov_9fa48("26961"), `uid:${uid}:notifications:read`)));
            await db.sortedSetsRemoveRangeByScore(unread.concat(read), stryMutAct_9fa48("26962") ? "" : (stryCov_9fa48("26962"), '-inf'), cutoffTime);
          }
        }, stryMutAct_9fa48("26963") ? {} : (stryCov_9fa48("26963"), {
          batch: 500,
          interval: 100
        }));
      }
    } catch (err) {
      if (stryMutAct_9fa48("26964")) {
        {}
      } else {
        stryCov_9fa48("26964");
        if (stryMutAct_9fa48("26966") ? false : stryMutAct_9fa48("26965") ? true : (stryCov_9fa48("26965", "26966"), err)) {
          if (stryMutAct_9fa48("26967")) {
            {}
          } else {
            stryCov_9fa48("26967");
            winston.error(stryMutAct_9fa48("26968") ? `` : (stryCov_9fa48("26968"), `Encountered error pruning notifications\n${err.stack}`));
          }
        }
      }
    }
  }
};
Notifications.merge = async function (notifications) {
  if (stryMutAct_9fa48("26969")) {
    {}
  } else {
    stryCov_9fa48("26969");
    // When passed a set of notification objects, merge any that can be merged
    const mergeIds = stryMutAct_9fa48("26970") ? [] : (stryCov_9fa48("26970"), [stryMutAct_9fa48("26971") ? "" : (stryCov_9fa48("26971"), 'notifications:upvoted_your_post_in'), stryMutAct_9fa48("26972") ? "" : (stryCov_9fa48("26972"), 'notifications:user_started_following_you'), stryMutAct_9fa48("26973") ? "" : (stryCov_9fa48("26973"), 'notifications:user_posted_to'), stryMutAct_9fa48("26974") ? "" : (stryCov_9fa48("26974"), 'notifications:user_flagged_post_in'), stryMutAct_9fa48("26975") ? "" : (stryCov_9fa48("26975"), 'notifications:user_flagged_user'), stryMutAct_9fa48("26976") ? "" : (stryCov_9fa48("26976"), 'new_register'), stryMutAct_9fa48("26977") ? "" : (stryCov_9fa48("26977"), 'post-queue')]);
    notifications = mergeIds.reduce((notifications, mergeId) => {
      if (stryMutAct_9fa48("26978")) {
        {}
      } else {
        stryCov_9fa48("26978");
        const isolated = stryMutAct_9fa48("26979") ? notifications : (stryCov_9fa48("26979"), notifications.filter(stryMutAct_9fa48("26980") ? () => undefined : (stryCov_9fa48("26980"), n => stryMutAct_9fa48("26983") ? n && n.hasOwnProperty('mergeId') || n.mergeId.split('|')[0] === mergeId : stryMutAct_9fa48("26982") ? false : stryMutAct_9fa48("26981") ? true : (stryCov_9fa48("26981", "26982", "26983"), (stryMutAct_9fa48("26985") ? n || n.hasOwnProperty('mergeId') : stryMutAct_9fa48("26984") ? true : (stryCov_9fa48("26984", "26985"), n && n.hasOwnProperty(stryMutAct_9fa48("26986") ? "" : (stryCov_9fa48("26986"), 'mergeId')))) && (stryMutAct_9fa48("26988") ? n.mergeId.split('|')[0] !== mergeId : stryMutAct_9fa48("26987") ? true : (stryCov_9fa48("26987", "26988"), n.mergeId.split(stryMutAct_9fa48("26989") ? "" : (stryCov_9fa48("26989"), '|'))[0] === mergeId))))));
        if (stryMutAct_9fa48("26993") ? isolated.length > 1 : stryMutAct_9fa48("26992") ? isolated.length < 1 : stryMutAct_9fa48("26991") ? false : stryMutAct_9fa48("26990") ? true : (stryCov_9fa48("26990", "26991", "26992", "26993"), isolated.length <= 1)) {
          if (stryMutAct_9fa48("26994")) {
            {}
          } else {
            stryCov_9fa48("26994");
            return notifications; // Nothing to merge
          }
        }

        // Each isolated mergeId may have multiple differentiators, so process each separately
        const differentiators = isolated.reduce((cur, next) => {
          if (stryMutAct_9fa48("26995")) {
            {}
          } else {
            stryCov_9fa48("26995");
            const differentiator = stryMutAct_9fa48("26998") ? next.mergeId.split('|')[1] && 0 : stryMutAct_9fa48("26997") ? false : stryMutAct_9fa48("26996") ? true : (stryCov_9fa48("26996", "26997", "26998"), next.mergeId.split(stryMutAct_9fa48("26999") ? "" : (stryCov_9fa48("26999"), '|'))[1] || 0);
            if (stryMutAct_9fa48("27002") ? false : stryMutAct_9fa48("27001") ? true : stryMutAct_9fa48("27000") ? cur.includes(differentiator) : (stryCov_9fa48("27000", "27001", "27002"), !cur.includes(differentiator))) {
              if (stryMutAct_9fa48("27003")) {
                {}
              } else {
                stryCov_9fa48("27003");
                cur.push(differentiator);
              }
            }
            return cur;
          }
        }, stryMutAct_9fa48("27004") ? ["Stryker was here"] : (stryCov_9fa48("27004"), []));
        differentiators.forEach(differentiator => {
          if (stryMutAct_9fa48("27005")) {
            {}
          } else {
            stryCov_9fa48("27005");
            let set;
            if (stryMutAct_9fa48("27008") ? differentiator === 0 || differentiators.length === 1 : stryMutAct_9fa48("27007") ? false : stryMutAct_9fa48("27006") ? true : (stryCov_9fa48("27006", "27007", "27008"), (stryMutAct_9fa48("27010") ? differentiator !== 0 : stryMutAct_9fa48("27009") ? true : (stryCov_9fa48("27009", "27010"), differentiator === 0)) && (stryMutAct_9fa48("27012") ? differentiators.length !== 1 : stryMutAct_9fa48("27011") ? true : (stryCov_9fa48("27011", "27012"), differentiators.length === 1)))) {
              if (stryMutAct_9fa48("27013")) {
                {}
              } else {
                stryCov_9fa48("27013");
                set = isolated;
              }
            } else {
              if (stryMutAct_9fa48("27014")) {
                {}
              } else {
                stryCov_9fa48("27014");
                set = stryMutAct_9fa48("27015") ? isolated : (stryCov_9fa48("27015"), isolated.filter(stryMutAct_9fa48("27016") ? () => undefined : (stryCov_9fa48("27016"), n => stryMutAct_9fa48("27019") ? n.mergeId !== `${mergeId}|${differentiator}` : stryMutAct_9fa48("27018") ? false : stryMutAct_9fa48("27017") ? true : (stryCov_9fa48("27017", "27018", "27019"), n.mergeId === (stryMutAct_9fa48("27020") ? `` : (stryCov_9fa48("27020"), `${mergeId}|${differentiator}`))))));
              }
            }
            const modifyIndex = notifications.indexOf(set[0]);
            if (stryMutAct_9fa48("27023") ? modifyIndex === -1 && set.length === 1 : stryMutAct_9fa48("27022") ? false : stryMutAct_9fa48("27021") ? true : (stryCov_9fa48("27021", "27022", "27023"), (stryMutAct_9fa48("27025") ? modifyIndex !== -1 : stryMutAct_9fa48("27024") ? false : (stryCov_9fa48("27024", "27025"), modifyIndex === (stryMutAct_9fa48("27026") ? +1 : (stryCov_9fa48("27026"), -1)))) || (stryMutAct_9fa48("27028") ? set.length !== 1 : stryMutAct_9fa48("27027") ? false : (stryCov_9fa48("27027", "27028"), set.length === 1)))) {
              if (stryMutAct_9fa48("27029")) {
                {}
              } else {
                stryCov_9fa48("27029");
                return notifications;
              }
            }
            switch (mergeId) {
              case stryMutAct_9fa48("27030") ? "" : (stryCov_9fa48("27030"), 'notifications:upvoted_your_post_in'):
              case stryMutAct_9fa48("27031") ? "" : (stryCov_9fa48("27031"), 'notifications:user_started_following_you'):
              case stryMutAct_9fa48("27032") ? "" : (stryCov_9fa48("27032"), 'notifications:user_posted_to'):
              case stryMutAct_9fa48("27033") ? "" : (stryCov_9fa48("27033"), 'notifications:user_flagged_post_in'):
              case stryMutAct_9fa48("27035") ? "" : (stryCov_9fa48("27035"), 'notifications:user_flagged_user'):
                if (stryMutAct_9fa48("27034")) {} else {
                  stryCov_9fa48("27034");
                  {
                    if (stryMutAct_9fa48("27036")) {
                      {}
                    } else {
                      stryCov_9fa48("27036");
                      const usernames = _.uniq(set.map(stryMutAct_9fa48("27037") ? () => undefined : (stryCov_9fa48("27037"), notifObj => stryMutAct_9fa48("27040") ? notifObj && notifObj.user || notifObj.user.username : stryMutAct_9fa48("27039") ? false : stryMutAct_9fa48("27038") ? true : (stryCov_9fa48("27038", "27039", "27040"), (stryMutAct_9fa48("27042") ? notifObj || notifObj.user : stryMutAct_9fa48("27041") ? true : (stryCov_9fa48("27041", "27042"), notifObj && notifObj.user)) && notifObj.user.username))));
                      const numUsers = usernames.length;
                      const title = utils.decodeHTMLEntities(stryMutAct_9fa48("27045") ? notifications[modifyIndex].topicTitle && '' : stryMutAct_9fa48("27044") ? false : stryMutAct_9fa48("27043") ? true : (stryCov_9fa48("27043", "27044", "27045"), notifications[modifyIndex].topicTitle || (stryMutAct_9fa48("27046") ? "Stryker was here!" : (stryCov_9fa48("27046"), ''))));
                      let titleEscaped = title.replace(/%/g, stryMutAct_9fa48("27047") ? "" : (stryCov_9fa48("27047"), '&#37;')).replace(/,/g, stryMutAct_9fa48("27048") ? "" : (stryCov_9fa48("27048"), '&#44;'));
                      titleEscaped = titleEscaped ? stryMutAct_9fa48("27049") ? `` : (stryCov_9fa48("27049"), `, ${titleEscaped}`) : stryMutAct_9fa48("27050") ? "Stryker was here!" : (stryCov_9fa48("27050"), '');
                      if (stryMutAct_9fa48("27053") ? numUsers !== 2 : stryMutAct_9fa48("27052") ? false : stryMutAct_9fa48("27051") ? true : (stryCov_9fa48("27051", "27052", "27053"), numUsers === 2)) {
                        if (stryMutAct_9fa48("27054")) {
                          {}
                        } else {
                          stryCov_9fa48("27054");
                          notifications[modifyIndex].bodyShort = stryMutAct_9fa48("27055") ? `` : (stryCov_9fa48("27055"), `[[${mergeId}_dual, ${usernames.join(stryMutAct_9fa48("27056") ? "" : (stryCov_9fa48("27056"), ', '))}${titleEscaped}]]`);
                        }
                      } else if (stryMutAct_9fa48("27060") ? numUsers <= 2 : stryMutAct_9fa48("27059") ? numUsers >= 2 : stryMutAct_9fa48("27058") ? false : stryMutAct_9fa48("27057") ? true : (stryCov_9fa48("27057", "27058", "27059", "27060"), numUsers > 2)) {
                        if (stryMutAct_9fa48("27061")) {
                          {}
                        } else {
                          stryCov_9fa48("27061");
                          notifications[modifyIndex].bodyShort = stryMutAct_9fa48("27062") ? `` : (stryCov_9fa48("27062"), `[[${mergeId}_multiple, ${usernames[0]}, ${stryMutAct_9fa48("27063") ? numUsers + 1 : (stryCov_9fa48("27063"), numUsers - 1)}${titleEscaped}]]`);
                        }
                      }
                      notifications[modifyIndex].path = set[stryMutAct_9fa48("27064") ? set.length + 1 : (stryCov_9fa48("27064"), set.length - 1)].path;
                    }
                  }
                  break;
                }
              case stryMutAct_9fa48("27066") ? "" : (stryCov_9fa48("27066"), 'new_register'):
                if (stryMutAct_9fa48("27065")) {} else {
                  stryCov_9fa48("27065");
                  notifications[modifyIndex].bodyShort = stryMutAct_9fa48("27067") ? `` : (stryCov_9fa48("27067"), `[[notifications:${mergeId}_multiple, ${set.length}]]`);
                  break;
                }
            }

            // Filter out duplicates
            notifications = stryMutAct_9fa48("27068") ? notifications : (stryCov_9fa48("27068"), notifications.filter((notifObj, idx) => {
              if (stryMutAct_9fa48("27069")) {
                {}
              } else {
                stryCov_9fa48("27069");
                if (stryMutAct_9fa48("27072") ? !notifObj && !notifObj.mergeId : stryMutAct_9fa48("27071") ? false : stryMutAct_9fa48("27070") ? true : (stryCov_9fa48("27070", "27071", "27072"), (stryMutAct_9fa48("27073") ? notifObj : (stryCov_9fa48("27073"), !notifObj)) || (stryMutAct_9fa48("27074") ? notifObj.mergeId : (stryCov_9fa48("27074"), !notifObj.mergeId)))) {
                  if (stryMutAct_9fa48("27075")) {
                    {}
                  } else {
                    stryCov_9fa48("27075");
                    return stryMutAct_9fa48("27076") ? false : (stryCov_9fa48("27076"), true);
                  }
                }
                return stryMutAct_9fa48("27077") ? notifObj.mergeId === mergeId + (differentiator ? `|${differentiator}` : '') && idx !== modifyIndex : (stryCov_9fa48("27077"), !(stryMutAct_9fa48("27080") ? notifObj.mergeId === mergeId + (differentiator ? `|${differentiator}` : '') || idx !== modifyIndex : stryMutAct_9fa48("27079") ? false : stryMutAct_9fa48("27078") ? true : (stryCov_9fa48("27078", "27079", "27080"), (stryMutAct_9fa48("27082") ? notifObj.mergeId !== mergeId + (differentiator ? `|${differentiator}` : '') : stryMutAct_9fa48("27081") ? true : (stryCov_9fa48("27081", "27082"), notifObj.mergeId === (stryMutAct_9fa48("27083") ? mergeId - (differentiator ? `|${differentiator}` : '') : (stryCov_9fa48("27083"), mergeId + (differentiator ? stryMutAct_9fa48("27084") ? `` : (stryCov_9fa48("27084"), `|${differentiator}`) : stryMutAct_9fa48("27085") ? "Stryker was here!" : (stryCov_9fa48("27085"), '')))))) && (stryMutAct_9fa48("27087") ? idx === modifyIndex : stryMutAct_9fa48("27086") ? true : (stryCov_9fa48("27086", "27087"), idx !== modifyIndex)))));
              }
            }));
          }
        });
        return notifications;
      }
    }, notifications);
    const data = await plugins.hooks.fire(stryMutAct_9fa48("27088") ? "" : (stryCov_9fa48("27088"), 'filter:notifications.merge'), stryMutAct_9fa48("27089") ? {} : (stryCov_9fa48("27089"), {
      notifications: notifications
    }));
    return stryMutAct_9fa48("27092") ? data || data.notifications : stryMutAct_9fa48("27091") ? false : stryMutAct_9fa48("27090") ? true : (stryCov_9fa48("27090", "27091", "27092"), data && data.notifications);
  }
};
require('./promisify')(Notifications);