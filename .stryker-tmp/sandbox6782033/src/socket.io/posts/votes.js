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
const user = require('../../user');
const posts = require('../../posts');
const privileges = require('../../privileges');
const meta = require('../../meta');
module.exports = function (SocketPosts) {
  if (stryMutAct_9fa48("36644")) {
    {}
  } else {
    stryCov_9fa48("36644");
    SocketPosts.getVoters = async function (socket, data) {
      if (stryMutAct_9fa48("36645")) {
        {}
      } else {
        stryCov_9fa48("36645");
        if (stryMutAct_9fa48("36648") ? (!data || !data.pid) && !data.cid : stryMutAct_9fa48("36647") ? false : stryMutAct_9fa48("36646") ? true : (stryCov_9fa48("36646", "36647", "36648"), (stryMutAct_9fa48("36650") ? !data && !data.pid : stryMutAct_9fa48("36649") ? false : (stryCov_9fa48("36649", "36650"), (stryMutAct_9fa48("36651") ? data : (stryCov_9fa48("36651"), !data)) || (stryMutAct_9fa48("36652") ? data.pid : (stryCov_9fa48("36652"), !data.pid)))) || (stryMutAct_9fa48("36653") ? data.cid : (stryCov_9fa48("36653"), !data.cid)))) {
          if (stryMutAct_9fa48("36654")) {
            {}
          } else {
            stryCov_9fa48("36654");
            throw new Error(stryMutAct_9fa48("36655") ? "" : (stryCov_9fa48("36655"), '[[error:invalid-data]]'));
          }
        }
        const showDownvotes = stryMutAct_9fa48("36656") ? meta.config['downvote:disabled'] : (stryCov_9fa48("36656"), !meta.config[stryMutAct_9fa48("36657") ? "" : (stryCov_9fa48("36657"), 'downvote:disabled')]);
        const canSeeVotes = stryMutAct_9fa48("36660") ? meta.config.votesArePublic && (await privileges.categories.isAdminOrMod(data.cid, socket.uid)) : stryMutAct_9fa48("36659") ? false : stryMutAct_9fa48("36658") ? true : (stryCov_9fa48("36658", "36659", "36660"), meta.config.votesArePublic || (await privileges.categories.isAdminOrMod(data.cid, socket.uid)));
        if (stryMutAct_9fa48("36663") ? false : stryMutAct_9fa48("36662") ? true : stryMutAct_9fa48("36661") ? canSeeVotes : (stryCov_9fa48("36661", "36662", "36663"), !canSeeVotes)) {
          if (stryMutAct_9fa48("36664")) {
            {}
          } else {
            stryCov_9fa48("36664");
            throw new Error(stryMutAct_9fa48("36665") ? "" : (stryCov_9fa48("36665"), '[[error:no-privileges]]'));
          }
        }
        const [upvoteUids, downvoteUids] = await Promise.all(stryMutAct_9fa48("36666") ? [] : (stryCov_9fa48("36666"), [db.getSetMembers(stryMutAct_9fa48("36667") ? `` : (stryCov_9fa48("36667"), `pid:${data.pid}:upvote`)), showDownvotes ? db.getSetMembers(stryMutAct_9fa48("36668") ? `` : (stryCov_9fa48("36668"), `pid:${data.pid}:downvote`)) : stryMutAct_9fa48("36669") ? ["Stryker was here"] : (stryCov_9fa48("36669"), [])]));
        const [upvoters, downvoters] = await Promise.all(stryMutAct_9fa48("36670") ? [] : (stryCov_9fa48("36670"), [user.getUsersFields(upvoteUids, stryMutAct_9fa48("36671") ? [] : (stryCov_9fa48("36671"), [stryMutAct_9fa48("36672") ? "" : (stryCov_9fa48("36672"), 'username'), stryMutAct_9fa48("36673") ? "" : (stryCov_9fa48("36673"), 'userslug'), stryMutAct_9fa48("36674") ? "" : (stryCov_9fa48("36674"), 'picture')])), user.getUsersFields(downvoteUids, stryMutAct_9fa48("36675") ? [] : (stryCov_9fa48("36675"), [stryMutAct_9fa48("36676") ? "" : (stryCov_9fa48("36676"), 'username'), stryMutAct_9fa48("36677") ? "" : (stryCov_9fa48("36677"), 'userslug'), stryMutAct_9fa48("36678") ? "" : (stryCov_9fa48("36678"), 'picture')]))]));
        return stryMutAct_9fa48("36679") ? {} : (stryCov_9fa48("36679"), {
          upvoteCount: upvoters.length,
          downvoteCount: downvoters.length,
          showDownvotes: showDownvotes,
          upvoters: upvoters,
          downvoters: downvoters
        });
      }
    };
    SocketPosts.getUpvoters = async function (socket, pids) {
      if (stryMutAct_9fa48("36680")) {
        {}
      } else {
        stryCov_9fa48("36680");
        if (stryMutAct_9fa48("36683") ? false : stryMutAct_9fa48("36682") ? true : stryMutAct_9fa48("36681") ? Array.isArray(pids) : (stryCov_9fa48("36681", "36682", "36683"), !Array.isArray(pids))) {
          if (stryMutAct_9fa48("36684")) {
            {}
          } else {
            stryCov_9fa48("36684");
            throw new Error(stryMutAct_9fa48("36685") ? "" : (stryCov_9fa48("36685"), '[[error:invalid-data]]'));
          }
        }
        const data = await posts.getUpvotedUidsByPids(pids);
        if (stryMutAct_9fa48("36688") ? false : stryMutAct_9fa48("36687") ? true : stryMutAct_9fa48("36686") ? data.length : (stryCov_9fa48("36686", "36687", "36688"), !data.length)) {
          if (stryMutAct_9fa48("36689")) {
            {}
          } else {
            stryCov_9fa48("36689");
            return stryMutAct_9fa48("36690") ? ["Stryker was here"] : (stryCov_9fa48("36690"), []);
          }
        }
        const result = await Promise.all(data.map(async uids => {
          if (stryMutAct_9fa48("36691")) {
            {}
          } else {
            stryCov_9fa48("36691");
            let otherCount = 0;
            if (stryMutAct_9fa48("36695") ? uids.length <= 6 : stryMutAct_9fa48("36694") ? uids.length >= 6 : stryMutAct_9fa48("36693") ? false : stryMutAct_9fa48("36692") ? true : (stryCov_9fa48("36692", "36693", "36694", "36695"), uids.length > 6)) {
              if (stryMutAct_9fa48("36696")) {
                {}
              } else {
                stryCov_9fa48("36696");
                otherCount = stryMutAct_9fa48("36697") ? uids.length + 5 : (stryCov_9fa48("36697"), uids.length - 5);
                uids = stryMutAct_9fa48("36698") ? uids : (stryCov_9fa48("36698"), uids.slice(0, 5));
              }
            }
            const usernames = await user.getUsernamesByUids(uids);
            return stryMutAct_9fa48("36699") ? {} : (stryCov_9fa48("36699"), {
              otherCount: otherCount,
              usernames: usernames
            });
          }
        }));
        return result;
      }
    };
  }
};