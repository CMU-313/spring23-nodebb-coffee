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
const plugins = require('../../plugins');
module.exports = function (SocketTopics) {
  if (stryMutAct_9fa48("37117")) {
    {}
  } else {
    stryCov_9fa48("37117");
    SocketTopics.loadTopicTools = async function (socket, data) {
      if (stryMutAct_9fa48("37118")) {
        {}
      } else {
        stryCov_9fa48("37118");
        if (stryMutAct_9fa48("37121") ? false : stryMutAct_9fa48("37120") ? true : stryMutAct_9fa48("37119") ? socket.uid : (stryCov_9fa48("37119", "37120", "37121"), !socket.uid)) {
          if (stryMutAct_9fa48("37122")) {
            {}
          } else {
            stryCov_9fa48("37122");
            throw new Error(stryMutAct_9fa48("37123") ? "" : (stryCov_9fa48("37123"), '[[error:no-privileges]]'));
          }
        }
        if (stryMutAct_9fa48("37126") ? false : stryMutAct_9fa48("37125") ? true : stryMutAct_9fa48("37124") ? data : (stryCov_9fa48("37124", "37125", "37126"), !data)) {
          if (stryMutAct_9fa48("37127")) {
            {}
          } else {
            stryCov_9fa48("37127");
            throw new Error(stryMutAct_9fa48("37128") ? "" : (stryCov_9fa48("37128"), '[[error:invalid-data]]'));
          }
        }
        const [topicData, userPrivileges] = await Promise.all(stryMutAct_9fa48("37129") ? [] : (stryCov_9fa48("37129"), [topics.getTopicData(data.tid), privileges.topics.get(data.tid, socket.uid)]));
        if (stryMutAct_9fa48("37132") ? false : stryMutAct_9fa48("37131") ? true : stryMutAct_9fa48("37130") ? topicData : (stryCov_9fa48("37130", "37131", "37132"), !topicData)) {
          if (stryMutAct_9fa48("37133")) {
            {}
          } else {
            stryCov_9fa48("37133");
            throw new Error(stryMutAct_9fa48("37134") ? "" : (stryCov_9fa48("37134"), '[[error:no-topic]]'));
          }
        }
        if (stryMutAct_9fa48("37137") ? false : stryMutAct_9fa48("37136") ? true : stryMutAct_9fa48("37135") ? userPrivileges['topics:read'] : (stryCov_9fa48("37135", "37136", "37137"), !userPrivileges[stryMutAct_9fa48("37138") ? "" : (stryCov_9fa48("37138"), 'topics:read')])) {
          if (stryMutAct_9fa48("37139")) {
            {}
          } else {
            stryCov_9fa48("37139");
            throw new Error(stryMutAct_9fa48("37140") ? "" : (stryCov_9fa48("37140"), '[[error:no-privileges]]'));
          }
        }
        topicData.privileges = userPrivileges;
        const result = await plugins.hooks.fire(stryMutAct_9fa48("37141") ? "" : (stryCov_9fa48("37141"), 'filter:topic.thread_tools'), stryMutAct_9fa48("37142") ? {} : (stryCov_9fa48("37142"), {
          topic: topicData,
          uid: socket.uid,
          tools: stryMutAct_9fa48("37143") ? ["Stryker was here"] : (stryCov_9fa48("37143"), [])
        }));
        result.topic.thread_tools = result.tools;
        return result.topic;
      }
    };
    SocketTopics.orderPinnedTopics = async function (socket, data) {
      if (stryMutAct_9fa48("37144")) {
        {}
      } else {
        stryCov_9fa48("37144");
        if (stryMutAct_9fa48("37147") ? !data && !data.tid : stryMutAct_9fa48("37146") ? false : stryMutAct_9fa48("37145") ? true : (stryCov_9fa48("37145", "37146", "37147"), (stryMutAct_9fa48("37148") ? data : (stryCov_9fa48("37148"), !data)) || (stryMutAct_9fa48("37149") ? data.tid : (stryCov_9fa48("37149"), !data.tid)))) {
          if (stryMutAct_9fa48("37150")) {
            {}
          } else {
            stryCov_9fa48("37150");
            throw new Error(stryMutAct_9fa48("37151") ? "" : (stryCov_9fa48("37151"), '[[error:invalid-data]]'));
          }
        }
        await topics.tools.orderPinnedTopics(socket.uid, data);
      }
    };
  }
};