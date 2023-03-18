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
const batch = require('../../batch');
const db = require('../../database');
module.exports = stryMutAct_9fa48("44640") ? {} : (stryCov_9fa48("44640"), {
  name: stryMutAct_9fa48("44641") ? "" : (stryCov_9fa48("44641"), 'Convert old notification digest settings'),
  timestamp: Date.UTC(2017, 10, 15),
  method: async function () {
    if (stryMutAct_9fa48("44642")) {
      {}
    } else {
      stryCov_9fa48("44642");
      const {
        progress
      } = this;
      await batch.processSortedSet(stryMutAct_9fa48("44643") ? "" : (stryCov_9fa48("44643"), 'users:joindate'), async uids => {
        if (stryMutAct_9fa48("44644")) {
          {}
        } else {
          stryCov_9fa48("44644");
          await Promise.all(uids.map(async uid => {
            if (stryMutAct_9fa48("44645")) {
              {}
            } else {
              stryCov_9fa48("44645");
              progress.incr();
              const userSettings = await db.getObjectFields(stryMutAct_9fa48("44646") ? `` : (stryCov_9fa48("44646"), `user:${uid}:settings`), stryMutAct_9fa48("44647") ? [] : (stryCov_9fa48("44647"), [stryMutAct_9fa48("44648") ? "" : (stryCov_9fa48("44648"), 'sendChatNotifications'), stryMutAct_9fa48("44649") ? "" : (stryCov_9fa48("44649"), 'sendPostNotifications')]));
              if (stryMutAct_9fa48("44651") ? false : stryMutAct_9fa48("44650") ? true : (stryCov_9fa48("44650", "44651"), userSettings)) {
                if (stryMutAct_9fa48("44652")) {
                  {}
                } else {
                  stryCov_9fa48("44652");
                  if (stryMutAct_9fa48("44655") ? parseInt(userSettings.sendChatNotifications, 10) !== 1 : stryMutAct_9fa48("44654") ? false : stryMutAct_9fa48("44653") ? true : (stryCov_9fa48("44653", "44654", "44655"), parseInt(userSettings.sendChatNotifications, 10) === 1)) {
                    if (stryMutAct_9fa48("44656")) {
                      {}
                    } else {
                      stryCov_9fa48("44656");
                      await db.setObjectField(stryMutAct_9fa48("44657") ? `` : (stryCov_9fa48("44657"), `user:${uid}:settings`), stryMutAct_9fa48("44658") ? "" : (stryCov_9fa48("44658"), 'notificationType_new-chat'), stryMutAct_9fa48("44659") ? "" : (stryCov_9fa48("44659"), 'notificationemail'));
                    }
                  }
                  if (stryMutAct_9fa48("44662") ? parseInt(userSettings.sendPostNotifications, 10) !== 1 : stryMutAct_9fa48("44661") ? false : stryMutAct_9fa48("44660") ? true : (stryCov_9fa48("44660", "44661", "44662"), parseInt(userSettings.sendPostNotifications, 10) === 1)) {
                    if (stryMutAct_9fa48("44663")) {
                      {}
                    } else {
                      stryCov_9fa48("44663");
                      await db.setObjectField(stryMutAct_9fa48("44664") ? `` : (stryCov_9fa48("44664"), `user:${uid}:settings`), stryMutAct_9fa48("44665") ? "" : (stryCov_9fa48("44665"), 'notificationType_new-reply'), stryMutAct_9fa48("44666") ? "" : (stryCov_9fa48("44666"), 'notificationemail'));
                    }
                  }
                }
              }
              await db.deleteObjectFields(stryMutAct_9fa48("44667") ? `` : (stryCov_9fa48("44667"), `user:${uid}:settings`), stryMutAct_9fa48("44668") ? [] : (stryCov_9fa48("44668"), [stryMutAct_9fa48("44669") ? "" : (stryCov_9fa48("44669"), 'sendChatNotifications'), stryMutAct_9fa48("44670") ? "" : (stryCov_9fa48("44670"), 'sendPostNotifications')]));
            }
          }));
        }
      }, stryMutAct_9fa48("44671") ? {} : (stryCov_9fa48("44671"), {
        progress: progress,
        batch: 500
      }));
    }
  }
});