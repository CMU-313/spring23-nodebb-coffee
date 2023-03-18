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
const meta = require('../../meta');
const utils = require('../../utils');
const social = require('../../social');
module.exports = function (SocketTopics) {
  if (stryMutAct_9fa48("36870")) {
    {}
  } else {
    stryCov_9fa48("36870");
    SocketTopics.loadMore = async function (socket, data) {
      if (stryMutAct_9fa48("36871")) {
        {}
      } else {
        stryCov_9fa48("36871");
        if (stryMutAct_9fa48("36874") ? (!data || !data.tid || !utils.isNumber(data.after)) && parseInt(data.after, 10) < 0 : stryMutAct_9fa48("36873") ? false : stryMutAct_9fa48("36872") ? true : (stryCov_9fa48("36872", "36873", "36874"), (stryMutAct_9fa48("36876") ? (!data || !data.tid) && !utils.isNumber(data.after) : stryMutAct_9fa48("36875") ? false : (stryCov_9fa48("36875", "36876"), (stryMutAct_9fa48("36878") ? !data && !data.tid : stryMutAct_9fa48("36877") ? false : (stryCov_9fa48("36877", "36878"), (stryMutAct_9fa48("36879") ? data : (stryCov_9fa48("36879"), !data)) || (stryMutAct_9fa48("36880") ? data.tid : (stryCov_9fa48("36880"), !data.tid)))) || (stryMutAct_9fa48("36881") ? utils.isNumber(data.after) : (stryCov_9fa48("36881"), !utils.isNumber(data.after))))) || (stryMutAct_9fa48("36884") ? parseInt(data.after, 10) >= 0 : stryMutAct_9fa48("36883") ? parseInt(data.after, 10) <= 0 : stryMutAct_9fa48("36882") ? false : (stryCov_9fa48("36882", "36883", "36884"), parseInt(data.after, 10) < 0)))) {
          if (stryMutAct_9fa48("36885")) {
            {}
          } else {
            stryCov_9fa48("36885");
            throw new Error(stryMutAct_9fa48("36886") ? "" : (stryCov_9fa48("36886"), '[[error:invalid-data]]'));
          }
        }
        const [userPrivileges, topicData] = await Promise.all(stryMutAct_9fa48("36887") ? [] : (stryCov_9fa48("36887"), [privileges.topics.get(data.tid, socket.uid), topics.getTopicData(data.tid)]));
        if (stryMutAct_9fa48("36890") ? !userPrivileges['topics:read'] && !privileges.topics.canViewDeletedScheduled(topicData, userPrivileges) : stryMutAct_9fa48("36889") ? false : stryMutAct_9fa48("36888") ? true : (stryCov_9fa48("36888", "36889", "36890"), (stryMutAct_9fa48("36891") ? userPrivileges['topics:read'] : (stryCov_9fa48("36891"), !userPrivileges[stryMutAct_9fa48("36892") ? "" : (stryCov_9fa48("36892"), 'topics:read')])) || (stryMutAct_9fa48("36893") ? privileges.topics.canViewDeletedScheduled(topicData, userPrivileges) : (stryCov_9fa48("36893"), !privileges.topics.canViewDeletedScheduled(topicData, userPrivileges))))) {
          if (stryMutAct_9fa48("36894")) {
            {}
          } else {
            stryCov_9fa48("36894");
            throw new Error(stryMutAct_9fa48("36895") ? "" : (stryCov_9fa48("36895"), '[[error:no-privileges]]'));
          }
        }
        const set = (stryMutAct_9fa48("36898") ? data.topicPostSort !== 'most_votes' : stryMutAct_9fa48("36897") ? false : stryMutAct_9fa48("36896") ? true : (stryCov_9fa48("36896", "36897", "36898"), data.topicPostSort === (stryMutAct_9fa48("36899") ? "" : (stryCov_9fa48("36899"), 'most_votes')))) ? stryMutAct_9fa48("36900") ? `` : (stryCov_9fa48("36900"), `tid:${data.tid}:posts:votes`) : stryMutAct_9fa48("36901") ? `` : (stryCov_9fa48("36901"), `tid:${data.tid}:posts`);
        const reverse = stryMutAct_9fa48("36904") ? data.topicPostSort === 'newest_to_oldest' && data.topicPostSort === 'most_votes' : stryMutAct_9fa48("36903") ? false : stryMutAct_9fa48("36902") ? true : (stryCov_9fa48("36902", "36903", "36904"), (stryMutAct_9fa48("36906") ? data.topicPostSort !== 'newest_to_oldest' : stryMutAct_9fa48("36905") ? false : (stryCov_9fa48("36905", "36906"), data.topicPostSort === (stryMutAct_9fa48("36907") ? "" : (stryCov_9fa48("36907"), 'newest_to_oldest')))) || (stryMutAct_9fa48("36909") ? data.topicPostSort !== 'most_votes' : stryMutAct_9fa48("36908") ? false : (stryCov_9fa48("36908", "36909"), data.topicPostSort === (stryMutAct_9fa48("36910") ? "" : (stryCov_9fa48("36910"), 'most_votes')))));
        let start = Math.max(0, parseInt(data.after, 10));
        const infScrollPostsPerPage = Math.max(0, Math.min(stryMutAct_9fa48("36913") ? meta.config.postsPerPage && 20 : stryMutAct_9fa48("36912") ? false : stryMutAct_9fa48("36911") ? true : (stryCov_9fa48("36911", "36912", "36913"), meta.config.postsPerPage || 20), stryMutAct_9fa48("36916") ? (parseInt(data.count, 10) || meta.config.postsPerPage) && 20 : stryMutAct_9fa48("36915") ? false : stryMutAct_9fa48("36914") ? true : (stryCov_9fa48("36914", "36915", "36916"), (stryMutAct_9fa48("36918") ? parseInt(data.count, 10) && meta.config.postsPerPage : stryMutAct_9fa48("36917") ? false : (stryCov_9fa48("36917", "36918"), parseInt(data.count, 10) || meta.config.postsPerPage)) || 20)));
        if (stryMutAct_9fa48("36921") ? data.direction !== -1 : stryMutAct_9fa48("36920") ? false : stryMutAct_9fa48("36919") ? true : (stryCov_9fa48("36919", "36920", "36921"), data.direction === (stryMutAct_9fa48("36922") ? +1 : (stryCov_9fa48("36922"), -1)))) {
          if (stryMutAct_9fa48("36923")) {
            {}
          } else {
            stryCov_9fa48("36923");
            stryMutAct_9fa48("36924") ? start += infScrollPostsPerPage : (stryCov_9fa48("36924"), start -= infScrollPostsPerPage);
          }
        }
        let stop = stryMutAct_9fa48("36925") ? start + infScrollPostsPerPage + 1 : (stryCov_9fa48("36925"), (stryMutAct_9fa48("36926") ? start - infScrollPostsPerPage : (stryCov_9fa48("36926"), start + infScrollPostsPerPage)) - 1);
        start = Math.max(0, start);
        stop = Math.max(0, stop);
        const [posts, postSharing] = await Promise.all(stryMutAct_9fa48("36927") ? [] : (stryCov_9fa48("36927"), [topics.getTopicPosts(topicData, set, start, stop, socket.uid, reverse), social.getActivePostSharing()]));
        topicData.posts = posts;
        topicData.privileges = userPrivileges;
        topicData.postSharing = postSharing;
        topicData[stryMutAct_9fa48("36928") ? "" : (stryCov_9fa48("36928"), 'reputation:disabled')] = stryMutAct_9fa48("36931") ? meta.config['reputation:disabled'] !== 1 : stryMutAct_9fa48("36930") ? false : stryMutAct_9fa48("36929") ? true : (stryCov_9fa48("36929", "36930", "36931"), meta.config[stryMutAct_9fa48("36932") ? "" : (stryCov_9fa48("36932"), 'reputation:disabled')] === 1);
        topicData[stryMutAct_9fa48("36933") ? "" : (stryCov_9fa48("36933"), 'downvote:disabled')] = stryMutAct_9fa48("36936") ? meta.config['downvote:disabled'] !== 1 : stryMutAct_9fa48("36935") ? false : stryMutAct_9fa48("36934") ? true : (stryCov_9fa48("36934", "36935", "36936"), meta.config[stryMutAct_9fa48("36937") ? "" : (stryCov_9fa48("36937"), 'downvote:disabled')] === 1);
        topics.modifyPostsByPrivilege(topicData, userPrivileges);
        return topicData;
      }
    };
  }
};