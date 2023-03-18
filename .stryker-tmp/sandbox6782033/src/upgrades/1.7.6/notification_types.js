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
const db = require('../../database');
module.exports = stryMutAct_9fa48("44918") ? {} : (stryCov_9fa48("44918"), {
  name: stryMutAct_9fa48("44919") ? "" : (stryCov_9fa48("44919"), 'Add default settings for notification delivery types'),
  timestamp: Date.UTC(2018, 1, 14),
  method: async function () {
    if (stryMutAct_9fa48("44920")) {
      {}
    } else {
      stryCov_9fa48("44920");
      const config = await db.getObject(stryMutAct_9fa48("44921") ? "" : (stryCov_9fa48("44921"), 'config'));
      const postNotifications = (stryMutAct_9fa48("44924") ? parseInt(config.sendPostNotifications, 10) !== 1 : stryMutAct_9fa48("44923") ? false : stryMutAct_9fa48("44922") ? true : (stryCov_9fa48("44922", "44923", "44924"), parseInt(config.sendPostNotifications, 10) === 1)) ? stryMutAct_9fa48("44925") ? "" : (stryCov_9fa48("44925"), 'notification') : stryMutAct_9fa48("44926") ? "" : (stryCov_9fa48("44926"), 'none');
      const chatNotifications = (stryMutAct_9fa48("44929") ? parseInt(config.sendChatNotifications, 10) !== 1 : stryMutAct_9fa48("44928") ? false : stryMutAct_9fa48("44927") ? true : (stryCov_9fa48("44927", "44928", "44929"), parseInt(config.sendChatNotifications, 10) === 1)) ? stryMutAct_9fa48("44930") ? "" : (stryCov_9fa48("44930"), 'notification') : stryMutAct_9fa48("44931") ? "" : (stryCov_9fa48("44931"), 'none');
      await db.setObject(stryMutAct_9fa48("44932") ? "" : (stryCov_9fa48("44932"), 'config'), stryMutAct_9fa48("44933") ? {} : (stryCov_9fa48("44933"), {
        notificationType_upvote: stryMutAct_9fa48("44936") ? config.notificationType_upvote && 'notification' : stryMutAct_9fa48("44935") ? false : stryMutAct_9fa48("44934") ? true : (stryCov_9fa48("44934", "44935", "44936"), config.notificationType_upvote || (stryMutAct_9fa48("44937") ? "" : (stryCov_9fa48("44937"), 'notification'))),
        'notificationType_new-topic': stryMutAct_9fa48("44940") ? config['notificationType_new-topic'] && 'notification' : stryMutAct_9fa48("44939") ? false : stryMutAct_9fa48("44938") ? true : (stryCov_9fa48("44938", "44939", "44940"), config[stryMutAct_9fa48("44941") ? "" : (stryCov_9fa48("44941"), 'notificationType_new-topic')] || (stryMutAct_9fa48("44942") ? "" : (stryCov_9fa48("44942"), 'notification'))),
        'notificationType_new-reply': stryMutAct_9fa48("44945") ? config['notificationType_new-reply'] && postNotifications : stryMutAct_9fa48("44944") ? false : stryMutAct_9fa48("44943") ? true : (stryCov_9fa48("44943", "44944", "44945"), config[stryMutAct_9fa48("44946") ? "" : (stryCov_9fa48("44946"), 'notificationType_new-reply')] || postNotifications),
        notificationType_follow: stryMutAct_9fa48("44949") ? config.notificationType_follow && 'notification' : stryMutAct_9fa48("44948") ? false : stryMutAct_9fa48("44947") ? true : (stryCov_9fa48("44947", "44948", "44949"), config.notificationType_follow || (stryMutAct_9fa48("44950") ? "" : (stryCov_9fa48("44950"), 'notification'))),
        'notificationType_new-chat': stryMutAct_9fa48("44953") ? config['notificationType_new-chat'] && chatNotifications : stryMutAct_9fa48("44952") ? false : stryMutAct_9fa48("44951") ? true : (stryCov_9fa48("44951", "44952", "44953"), config[stryMutAct_9fa48("44954") ? "" : (stryCov_9fa48("44954"), 'notificationType_new-chat')] || chatNotifications),
        'notificationType_group-invite': stryMutAct_9fa48("44957") ? config['notificationType_group-invite'] && 'notification' : stryMutAct_9fa48("44956") ? false : stryMutAct_9fa48("44955") ? true : (stryCov_9fa48("44955", "44956", "44957"), config[stryMutAct_9fa48("44958") ? "" : (stryCov_9fa48("44958"), 'notificationType_group-invite')] || (stryMutAct_9fa48("44959") ? "" : (stryCov_9fa48("44959"), 'notification')))
      }));
    }
  }
});