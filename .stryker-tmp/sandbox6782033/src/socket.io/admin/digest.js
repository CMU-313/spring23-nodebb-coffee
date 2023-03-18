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
const Digest = module.exports;
Digest.resend = async (socket, data) => {
  if (stryMutAct_9fa48("34923")) {
    {}
  } else {
    stryCov_9fa48("34923");
    const {
      uid
    } = data;
    const interval = (stryMutAct_9fa48("34924") ? data.action.endsWith('resend-') : (stryCov_9fa48("34924"), data.action.startsWith(stryMutAct_9fa48("34925") ? "" : (stryCov_9fa48("34925"), 'resend-')))) ? stryMutAct_9fa48("34926") ? data.action : (stryCov_9fa48("34926"), data.action.slice(7)) : await userDigest.getUsersInterval(uid);
    if (stryMutAct_9fa48("34929") ? !interval || meta.config.dailyDigestFreq === 'off' : stryMutAct_9fa48("34928") ? false : stryMutAct_9fa48("34927") ? true : (stryCov_9fa48("34927", "34928", "34929"), (stryMutAct_9fa48("34930") ? interval : (stryCov_9fa48("34930"), !interval)) && (stryMutAct_9fa48("34932") ? meta.config.dailyDigestFreq !== 'off' : stryMutAct_9fa48("34931") ? true : (stryCov_9fa48("34931", "34932"), meta.config.dailyDigestFreq === (stryMutAct_9fa48("34933") ? "" : (stryCov_9fa48("34933"), 'off')))))) {
      if (stryMutAct_9fa48("34934")) {
        {}
      } else {
        stryCov_9fa48("34934");
        throw new Error(stryMutAct_9fa48("34935") ? "" : (stryCov_9fa48("34935"), '[[error:digest-not-enabled]]'));
      }
    }
    if (stryMutAct_9fa48("34937") ? false : stryMutAct_9fa48("34936") ? true : (stryCov_9fa48("34936", "34937"), uid)) {
      if (stryMutAct_9fa48("34938")) {
        {}
      } else {
        stryCov_9fa48("34938");
        await userDigest.execute(stryMutAct_9fa48("34939") ? {} : (stryCov_9fa48("34939"), {
          interval: stryMutAct_9fa48("34942") ? interval && meta.config.dailyDigestFreq : stryMutAct_9fa48("34941") ? false : stryMutAct_9fa48("34940") ? true : (stryCov_9fa48("34940", "34941", "34942"), interval || meta.config.dailyDigestFreq),
          subscribers: stryMutAct_9fa48("34943") ? [] : (stryCov_9fa48("34943"), [uid])
        }));
      }
    } else {
      if (stryMutAct_9fa48("34944")) {
        {}
      } else {
        stryCov_9fa48("34944");
        await userDigest.execute(stryMutAct_9fa48("34945") ? {} : (stryCov_9fa48("34945"), {
          interval: interval
        }));
      }
    }
  }
};