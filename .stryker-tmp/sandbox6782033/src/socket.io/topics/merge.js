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
const topics = require('../../topics');
const privileges = require('../../privileges');
const events = require('../../events');
module.exports = function (SocketTopics) {
  if (stryMutAct_9fa48("36938")) {
    {}
  } else {
    stryCov_9fa48("36938");
    SocketTopics.merge = async function (socket, data) {
      if (stryMutAct_9fa48("36939")) {
        {}
      } else {
        stryCov_9fa48("36939");
        if (stryMutAct_9fa48("36942") ? !data && !Array.isArray(data.tids) : stryMutAct_9fa48("36941") ? false : stryMutAct_9fa48("36940") ? true : (stryCov_9fa48("36940", "36941", "36942"), (stryMutAct_9fa48("36943") ? data : (stryCov_9fa48("36943"), !data)) || (stryMutAct_9fa48("36944") ? Array.isArray(data.tids) : (stryCov_9fa48("36944"), !Array.isArray(data.tids))))) {
          if (stryMutAct_9fa48("36945")) {
            {}
          } else {
            stryCov_9fa48("36945");
            throw new Error(stryMutAct_9fa48("36946") ? "" : (stryCov_9fa48("36946"), '[[error:invalid-data]]'));
          }
        }
        const allowed = await Promise.all(data.tids.map(stryMutAct_9fa48("36947") ? () => undefined : (stryCov_9fa48("36947"), tid => privileges.topics.isAdminOrMod(tid, socket.uid))));
        if (stryMutAct_9fa48("36949") ? false : stryMutAct_9fa48("36948") ? true : (stryCov_9fa48("36948", "36949"), allowed.includes(stryMutAct_9fa48("36950") ? true : (stryCov_9fa48("36950"), false)))) {
          if (stryMutAct_9fa48("36951")) {
            {}
          } else {
            stryCov_9fa48("36951");
            throw new Error(stryMutAct_9fa48("36952") ? "" : (stryCov_9fa48("36952"), '[[error:no-privileges]]'));
          }
        }
        if (stryMutAct_9fa48("36955") ? data.options && data.options.mainTid || !data.tids.includes(data.options.mainTid) : stryMutAct_9fa48("36954") ? false : stryMutAct_9fa48("36953") ? true : (stryCov_9fa48("36953", "36954", "36955"), (stryMutAct_9fa48("36957") ? data.options || data.options.mainTid : stryMutAct_9fa48("36956") ? true : (stryCov_9fa48("36956", "36957"), data.options && data.options.mainTid)) && (stryMutAct_9fa48("36958") ? data.tids.includes(data.options.mainTid) : (stryCov_9fa48("36958"), !data.tids.includes(data.options.mainTid))))) {
          if (stryMutAct_9fa48("36959")) {
            {}
          } else {
            stryCov_9fa48("36959");
            throw new Error(stryMutAct_9fa48("36960") ? "" : (stryCov_9fa48("36960"), '[[error:invalid-data]]'));
          }
        }
        const mergeIntoTid = await topics.merge(data.tids, socket.uid, data.options);
        await events.log(stryMutAct_9fa48("36961") ? {} : (stryCov_9fa48("36961"), {
          type: stryMutAct_9fa48("36962") ? `` : (stryCov_9fa48("36962"), `topic-merge`),
          uid: socket.uid,
          ip: socket.ip,
          mergeIntoTid: mergeIntoTid,
          tids: String(data.tids)
        }));
        return mergeIntoTid;
      }
    };
  }
};