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
const meta = require('../../meta');
const userDigest = require('../../user/digest');
const userEmail = require('../../user/email');
const notifications = require('../../notifications');
const emailer = require('../../emailer');
const utils = require('../../utils');
const Email = module.exports;
Email.test = async function (socket, data) {
  if (stryMutAct_9fa48("34946")) {
    {}
  } else {
    stryCov_9fa48("34946");
    const payload = stryMutAct_9fa48("34947") ? {} : (stryCov_9fa48("34947"), {
      ...(stryMutAct_9fa48("34950") ? data.payload && {} : stryMutAct_9fa48("34949") ? false : stryMutAct_9fa48("34948") ? true : (stryCov_9fa48("34948", "34949", "34950"), data.payload || {})),
      subject: stryMutAct_9fa48("34951") ? "" : (stryCov_9fa48("34951"), '[[email:test-email.subject]]')
    });
    switch (data.template) {
      case stryMutAct_9fa48("34953") ? "" : (stryCov_9fa48("34953"), 'digest'):
        if (stryMutAct_9fa48("34952")) {} else {
          stryCov_9fa48("34952");
          await userDigest.execute(stryMutAct_9fa48("34954") ? {} : (stryCov_9fa48("34954"), {
            interval: stryMutAct_9fa48("34955") ? "" : (stryCov_9fa48("34955"), 'month'),
            subscribers: stryMutAct_9fa48("34956") ? [] : (stryCov_9fa48("34956"), [socket.uid])
          }));
          break;
        }
      case stryMutAct_9fa48("34958") ? "" : (stryCov_9fa48("34958"), 'banned'):
        if (stryMutAct_9fa48("34957")) {} else {
          stryCov_9fa48("34957");
          Object.assign(payload, stryMutAct_9fa48("34959") ? {} : (stryCov_9fa48("34959"), {
            username: stryMutAct_9fa48("34960") ? "" : (stryCov_9fa48("34960"), 'test-user'),
            until: utils.toISOString(Date.now()),
            reason: stryMutAct_9fa48("34961") ? "" : (stryCov_9fa48("34961"), 'Test Reason')
          }));
          await emailer.send(data.template, socket.uid, payload);
          break;
        }
      case stryMutAct_9fa48("34962") ? "" : (stryCov_9fa48("34962"), 'verify-email'):
      case stryMutAct_9fa48("34964") ? "" : (stryCov_9fa48("34964"), 'welcome'):
        if (stryMutAct_9fa48("34963")) {} else {
          stryCov_9fa48("34963");
          await userEmail.sendValidationEmail(socket.uid, stryMutAct_9fa48("34965") ? {} : (stryCov_9fa48("34965"), {
            force: 1,
            template: data.template,
            subject: (stryMutAct_9fa48("34968") ? data.template !== 'welcome' : stryMutAct_9fa48("34967") ? false : stryMutAct_9fa48("34966") ? true : (stryCov_9fa48("34966", "34967", "34968"), data.template === (stryMutAct_9fa48("34969") ? "" : (stryCov_9fa48("34969"), 'welcome')))) ? stryMutAct_9fa48("34970") ? `` : (stryCov_9fa48("34970"), `[[email:welcome-to, ${stryMutAct_9fa48("34973") ? (meta.config.title || meta.config.browserTitle) && 'NodeBB' : stryMutAct_9fa48("34972") ? false : stryMutAct_9fa48("34971") ? true : (stryCov_9fa48("34971", "34972", "34973"), (stryMutAct_9fa48("34975") ? meta.config.title && meta.config.browserTitle : stryMutAct_9fa48("34974") ? false : (stryCov_9fa48("34974", "34975"), meta.config.title || meta.config.browserTitle)) || (stryMutAct_9fa48("34976") ? "" : (stryCov_9fa48("34976"), 'NodeBB')))}]]`) : undefined
          }));
          break;
        }
      case stryMutAct_9fa48("34978") ? "" : (stryCov_9fa48("34978"), 'notification'):
        if (stryMutAct_9fa48("34977")) {} else {
          stryCov_9fa48("34977");
          {
            if (stryMutAct_9fa48("34979")) {
              {}
            } else {
              stryCov_9fa48("34979");
              const notification = await notifications.create(stryMutAct_9fa48("34980") ? {} : (stryCov_9fa48("34980"), {
                type: stryMutAct_9fa48("34981") ? "" : (stryCov_9fa48("34981"), 'test'),
                bodyShort: stryMutAct_9fa48("34982") ? "" : (stryCov_9fa48("34982"), '[[email:notif.test.short]]'),
                bodyLong: stryMutAct_9fa48("34983") ? "" : (stryCov_9fa48("34983"), '[[email:notif.test.long]]'),
                nid: stryMutAct_9fa48("34984") ? `` : (stryCov_9fa48("34984"), `uid:${socket.uid}:test`),
                path: stryMutAct_9fa48("34985") ? "" : (stryCov_9fa48("34985"), '/'),
                from: socket.uid
              }));
              await emailer.send(stryMutAct_9fa48("34986") ? "" : (stryCov_9fa48("34986"), 'notification'), socket.uid, stryMutAct_9fa48("34987") ? {} : (stryCov_9fa48("34987"), {
                path: notification.path,
                subject: utils.stripHTMLTags(stryMutAct_9fa48("34990") ? notification.subject && '[[notifications:new_notification]]' : stryMutAct_9fa48("34989") ? false : stryMutAct_9fa48("34988") ? true : (stryCov_9fa48("34988", "34989", "34990"), notification.subject || (stryMutAct_9fa48("34991") ? "" : (stryCov_9fa48("34991"), '[[notifications:new_notification]]')))),
                intro: utils.stripHTMLTags(notification.bodyShort),
                body: stryMutAct_9fa48("34994") ? notification.bodyLong && '' : stryMutAct_9fa48("34993") ? false : stryMutAct_9fa48("34992") ? true : (stryCov_9fa48("34992", "34993", "34994"), notification.bodyLong || (stryMutAct_9fa48("34995") ? "Stryker was here!" : (stryCov_9fa48("34995"), ''))),
                notification,
                showUnsubscribe: stryMutAct_9fa48("34996") ? false : (stryCov_9fa48("34996"), true)
              }));
              break;
            }
          }
        }
      default:
        if (stryMutAct_9fa48("34997")) {} else {
          stryCov_9fa48("34997");
          await emailer.send(data.template, socket.uid, payload);
          break;
        }
    }
  }
};