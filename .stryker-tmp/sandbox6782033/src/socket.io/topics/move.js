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
const user = require('../../user');
const topics = require('../../topics');
const categories = require('../../categories');
const privileges = require('../../privileges');
const socketHelpers = require('../helpers');
const events = require('../../events');
module.exports = function (SocketTopics) {
  if (stryMutAct_9fa48("36963")) {
    {}
  } else {
    stryCov_9fa48("36963");
    SocketTopics.move = async function (socket, data) {
      if (stryMutAct_9fa48("36964")) {
        {}
      } else {
        stryCov_9fa48("36964");
        if (stryMutAct_9fa48("36967") ? (!data || !Array.isArray(data.tids)) && !data.cid : stryMutAct_9fa48("36966") ? false : stryMutAct_9fa48("36965") ? true : (stryCov_9fa48("36965", "36966", "36967"), (stryMutAct_9fa48("36969") ? !data && !Array.isArray(data.tids) : stryMutAct_9fa48("36968") ? false : (stryCov_9fa48("36968", "36969"), (stryMutAct_9fa48("36970") ? data : (stryCov_9fa48("36970"), !data)) || (stryMutAct_9fa48("36971") ? Array.isArray(data.tids) : (stryCov_9fa48("36971"), !Array.isArray(data.tids))))) || (stryMutAct_9fa48("36972") ? data.cid : (stryCov_9fa48("36972"), !data.cid)))) {
          if (stryMutAct_9fa48("36973")) {
            {}
          } else {
            stryCov_9fa48("36973");
            throw new Error(stryMutAct_9fa48("36974") ? "" : (stryCov_9fa48("36974"), '[[error:invalid-data]]'));
          }
        }
        const canMove = await privileges.categories.isAdminOrMod(data.cid, socket.uid);
        if (stryMutAct_9fa48("36977") ? false : stryMutAct_9fa48("36976") ? true : stryMutAct_9fa48("36975") ? canMove : (stryCov_9fa48("36975", "36976", "36977"), !canMove)) {
          if (stryMutAct_9fa48("36978")) {
            {}
          } else {
            stryCov_9fa48("36978");
            throw new Error(stryMutAct_9fa48("36979") ? "" : (stryCov_9fa48("36979"), '[[error:no-privileges]]'));
          }
        }
        const uids = await user.getUidsFromSet(stryMutAct_9fa48("36980") ? "" : (stryCov_9fa48("36980"), 'users:online'), 0, stryMutAct_9fa48("36981") ? +1 : (stryCov_9fa48("36981"), -1));
        await async.eachLimit(data.tids, 10, async tid => {
          if (stryMutAct_9fa48("36982")) {
            {}
          } else {
            stryCov_9fa48("36982");
            const canMove = await privileges.topics.isAdminOrMod(tid, socket.uid);
            if (stryMutAct_9fa48("36985") ? false : stryMutAct_9fa48("36984") ? true : stryMutAct_9fa48("36983") ? canMove : (stryCov_9fa48("36983", "36984", "36985"), !canMove)) {
              if (stryMutAct_9fa48("36986")) {
                {}
              } else {
                stryCov_9fa48("36986");
                throw new Error(stryMutAct_9fa48("36987") ? "" : (stryCov_9fa48("36987"), '[[error:no-privileges]]'));
              }
            }
            const topicData = await topics.getTopicFields(tid, stryMutAct_9fa48("36988") ? [] : (stryCov_9fa48("36988"), [stryMutAct_9fa48("36989") ? "" : (stryCov_9fa48("36989"), 'tid'), stryMutAct_9fa48("36990") ? "" : (stryCov_9fa48("36990"), 'cid'), stryMutAct_9fa48("36991") ? "" : (stryCov_9fa48("36991"), 'slug'), stryMutAct_9fa48("36992") ? "" : (stryCov_9fa48("36992"), 'deleted')]));
            data.uid = socket.uid;
            await topics.tools.move(tid, data);
            const notifyUids = await privileges.categories.filterUids(stryMutAct_9fa48("36993") ? "" : (stryCov_9fa48("36993"), 'topics:read'), topicData.cid, uids);
            socketHelpers.emitToUids(stryMutAct_9fa48("36994") ? "" : (stryCov_9fa48("36994"), 'event:topic_moved'), topicData, notifyUids);
            if (stryMutAct_9fa48("36997") ? false : stryMutAct_9fa48("36996") ? true : stryMutAct_9fa48("36995") ? topicData.deleted : (stryCov_9fa48("36995", "36996", "36997"), !topicData.deleted)) {
              if (stryMutAct_9fa48("36998")) {
                {}
              } else {
                stryCov_9fa48("36998");
                socketHelpers.sendNotificationToTopicOwner(tid, socket.uid, stryMutAct_9fa48("36999") ? "" : (stryCov_9fa48("36999"), 'move'), stryMutAct_9fa48("37000") ? "" : (stryCov_9fa48("37000"), 'notifications:moved_your_topic'));
              }
            }
            await events.log(stryMutAct_9fa48("37001") ? {} : (stryCov_9fa48("37001"), {
              type: stryMutAct_9fa48("37002") ? `` : (stryCov_9fa48("37002"), `topic-move`),
              uid: socket.uid,
              ip: socket.ip,
              tid: tid,
              fromCid: topicData.cid,
              toCid: data.cid
            }));
          }
        });
      }
    };
    SocketTopics.moveAll = async function (socket, data) {
      if (stryMutAct_9fa48("37003")) {
        {}
      } else {
        stryCov_9fa48("37003");
        if (stryMutAct_9fa48("37006") ? (!data || !data.cid) && !data.currentCid : stryMutAct_9fa48("37005") ? false : stryMutAct_9fa48("37004") ? true : (stryCov_9fa48("37004", "37005", "37006"), (stryMutAct_9fa48("37008") ? !data && !data.cid : stryMutAct_9fa48("37007") ? false : (stryCov_9fa48("37007", "37008"), (stryMutAct_9fa48("37009") ? data : (stryCov_9fa48("37009"), !data)) || (stryMutAct_9fa48("37010") ? data.cid : (stryCov_9fa48("37010"), !data.cid)))) || (stryMutAct_9fa48("37011") ? data.currentCid : (stryCov_9fa48("37011"), !data.currentCid)))) {
          if (stryMutAct_9fa48("37012")) {
            {}
          } else {
            stryCov_9fa48("37012");
            throw new Error(stryMutAct_9fa48("37013") ? "" : (stryCov_9fa48("37013"), '[[error:invalid-data]]'));
          }
        }
        const canMove = await privileges.categories.canMoveAllTopics(data.currentCid, data.cid, socket.uid);
        if (stryMutAct_9fa48("37016") ? false : stryMutAct_9fa48("37015") ? true : stryMutAct_9fa48("37014") ? canMove : (stryCov_9fa48("37014", "37015", "37016"), !canMove)) {
          if (stryMutAct_9fa48("37017")) {
            {}
          } else {
            stryCov_9fa48("37017");
            throw new Error(stryMutAct_9fa48("37018") ? "" : (stryCov_9fa48("37018"), '[[error:no-privileges]]'));
          }
        }
        const tids = await categories.getAllTopicIds(data.currentCid, 0, stryMutAct_9fa48("37019") ? +1 : (stryCov_9fa48("37019"), -1));
        data.uid = socket.uid;
        await async.eachLimit(tids, 50, async tid => {
          if (stryMutAct_9fa48("37020")) {
            {}
          } else {
            stryCov_9fa48("37020");
            await topics.tools.move(tid, data);
          }
        });
        await events.log(stryMutAct_9fa48("37021") ? {} : (stryCov_9fa48("37021"), {
          type: stryMutAct_9fa48("37022") ? `` : (stryCov_9fa48("37022"), `topic-move-all`),
          uid: socket.uid,
          ip: socket.ip,
          fromCid: data.currentCid,
          toCid: data.cid
        }));
      }
    };
  }
};