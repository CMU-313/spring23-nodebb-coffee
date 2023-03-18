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
const meta = require('../meta');
const db = require('../database');
const flags = require('../flags');
const user = require('../user');
const topics = require('../topics');
const plugins = require('../plugins');
const privileges = require('../privileges');
const translator = require('../translator');
module.exports = function (Posts) {
  if (stryMutAct_9fa48("30493")) {
    {}
  } else {
    stryCov_9fa48("30493");
    const votesInProgress = {};
    Posts.upvote = async function (pid, uid) {
      if (stryMutAct_9fa48("30494")) {
        {}
      } else {
        stryCov_9fa48("30494");
        if (stryMutAct_9fa48("30496") ? false : stryMutAct_9fa48("30495") ? true : (stryCov_9fa48("30495", "30496"), meta.config[stryMutAct_9fa48("30497") ? "" : (stryCov_9fa48("30497"), 'reputation:disabled')])) {
          if (stryMutAct_9fa48("30498")) {
            {}
          } else {
            stryCov_9fa48("30498");
            throw new Error(stryMutAct_9fa48("30499") ? "" : (stryCov_9fa48("30499"), '[[error:reputation-system-disabled]]'));
          }
        }
        const canUpvote = await privileges.posts.can(stryMutAct_9fa48("30500") ? "" : (stryCov_9fa48("30500"), 'posts:upvote'), pid, uid);
        if (stryMutAct_9fa48("30503") ? false : stryMutAct_9fa48("30502") ? true : stryMutAct_9fa48("30501") ? canUpvote : (stryCov_9fa48("30501", "30502", "30503"), !canUpvote)) {
          if (stryMutAct_9fa48("30504")) {
            {}
          } else {
            stryCov_9fa48("30504");
            throw new Error(stryMutAct_9fa48("30505") ? "" : (stryCov_9fa48("30505"), '[[error:no-privileges]]'));
          }
        }
        if (stryMutAct_9fa48("30507") ? false : stryMutAct_9fa48("30506") ? true : (stryCov_9fa48("30506", "30507"), voteInProgress(pid, uid))) {
          if (stryMutAct_9fa48("30508")) {
            {}
          } else {
            stryCov_9fa48("30508");
            throw new Error(stryMutAct_9fa48("30509") ? "" : (stryCov_9fa48("30509"), '[[error:already-voting-for-this-post]]'));
          }
        }
        putVoteInProgress(pid, uid);
        try {
          if (stryMutAct_9fa48("30510")) {
            {}
          } else {
            stryCov_9fa48("30510");
            return await toggleVote(stryMutAct_9fa48("30511") ? "" : (stryCov_9fa48("30511"), 'upvote'), pid, uid);
          }
        } finally {
          if (stryMutAct_9fa48("30512")) {
            {}
          } else {
            stryCov_9fa48("30512");
            clearVoteProgress(pid, uid);
          }
        }
      }
    };
    Posts.downvote = async function (pid, uid) {
      if (stryMutAct_9fa48("30513")) {
        {}
      } else {
        stryCov_9fa48("30513");
        if (stryMutAct_9fa48("30515") ? false : stryMutAct_9fa48("30514") ? true : (stryCov_9fa48("30514", "30515"), meta.config[stryMutAct_9fa48("30516") ? "" : (stryCov_9fa48("30516"), 'reputation:disabled')])) {
          if (stryMutAct_9fa48("30517")) {
            {}
          } else {
            stryCov_9fa48("30517");
            throw new Error(stryMutAct_9fa48("30518") ? "" : (stryCov_9fa48("30518"), '[[error:reputation-system-disabled]]'));
          }
        }
        if (stryMutAct_9fa48("30520") ? false : stryMutAct_9fa48("30519") ? true : (stryCov_9fa48("30519", "30520"), meta.config[stryMutAct_9fa48("30521") ? "" : (stryCov_9fa48("30521"), 'downvote:disabled')])) {
          if (stryMutAct_9fa48("30522")) {
            {}
          } else {
            stryCov_9fa48("30522");
            throw new Error(stryMutAct_9fa48("30523") ? "" : (stryCov_9fa48("30523"), '[[error:downvoting-disabled]]'));
          }
        }
        const canDownvote = await privileges.posts.can(stryMutAct_9fa48("30524") ? "" : (stryCov_9fa48("30524"), 'posts:downvote'), pid, uid);
        if (stryMutAct_9fa48("30527") ? false : stryMutAct_9fa48("30526") ? true : stryMutAct_9fa48("30525") ? canDownvote : (stryCov_9fa48("30525", "30526", "30527"), !canDownvote)) {
          if (stryMutAct_9fa48("30528")) {
            {}
          } else {
            stryCov_9fa48("30528");
            throw new Error(stryMutAct_9fa48("30529") ? "" : (stryCov_9fa48("30529"), '[[error:no-privileges]]'));
          }
        }
        if (stryMutAct_9fa48("30531") ? false : stryMutAct_9fa48("30530") ? true : (stryCov_9fa48("30530", "30531"), voteInProgress(pid, uid))) {
          if (stryMutAct_9fa48("30532")) {
            {}
          } else {
            stryCov_9fa48("30532");
            throw new Error(stryMutAct_9fa48("30533") ? "" : (stryCov_9fa48("30533"), '[[error:already-voting-for-this-post]]'));
          }
        }
        putVoteInProgress(pid, uid);
        try {
          if (stryMutAct_9fa48("30534")) {
            {}
          } else {
            stryCov_9fa48("30534");
            return await toggleVote(stryMutAct_9fa48("30535") ? "" : (stryCov_9fa48("30535"), 'downvote'), pid, uid);
          }
        } finally {
          if (stryMutAct_9fa48("30536")) {
            {}
          } else {
            stryCov_9fa48("30536");
            clearVoteProgress(pid, uid);
          }
        }
      }
    };
    Posts.unvote = async function (pid, uid) {
      if (stryMutAct_9fa48("30537")) {
        {}
      } else {
        stryCov_9fa48("30537");
        if (stryMutAct_9fa48("30539") ? false : stryMutAct_9fa48("30538") ? true : (stryCov_9fa48("30538", "30539"), voteInProgress(pid, uid))) {
          if (stryMutAct_9fa48("30540")) {
            {}
          } else {
            stryCov_9fa48("30540");
            throw new Error(stryMutAct_9fa48("30541") ? "" : (stryCov_9fa48("30541"), '[[error:already-voting-for-this-post]]'));
          }
        }
        putVoteInProgress(pid, uid);
        try {
          if (stryMutAct_9fa48("30542")) {
            {}
          } else {
            stryCov_9fa48("30542");
            const voteStatus = await Posts.hasVoted(pid, uid);
            return await unvote(pid, uid, stryMutAct_9fa48("30543") ? "" : (stryCov_9fa48("30543"), 'unvote'), voteStatus);
          }
        } finally {
          if (stryMutAct_9fa48("30544")) {
            {}
          } else {
            stryCov_9fa48("30544");
            clearVoteProgress(pid, uid);
          }
        }
      }
    };
    Posts.hasVoted = async function (pid, uid) {
      if (stryMutAct_9fa48("30545")) {
        {}
      } else {
        stryCov_9fa48("30545");
        if (stryMutAct_9fa48("30549") ? parseInt(uid, 10) > 0 : stryMutAct_9fa48("30548") ? parseInt(uid, 10) < 0 : stryMutAct_9fa48("30547") ? false : stryMutAct_9fa48("30546") ? true : (stryCov_9fa48("30546", "30547", "30548", "30549"), parseInt(uid, 10) <= 0)) {
          if (stryMutAct_9fa48("30550")) {
            {}
          } else {
            stryCov_9fa48("30550");
            return stryMutAct_9fa48("30551") ? {} : (stryCov_9fa48("30551"), {
              upvoted: stryMutAct_9fa48("30552") ? true : (stryCov_9fa48("30552"), false),
              downvoted: stryMutAct_9fa48("30553") ? true : (stryCov_9fa48("30553"), false)
            });
          }
        }
        const hasVoted = await db.isMemberOfSets(stryMutAct_9fa48("30554") ? [] : (stryCov_9fa48("30554"), [stryMutAct_9fa48("30555") ? `` : (stryCov_9fa48("30555"), `pid:${pid}:upvote`), stryMutAct_9fa48("30556") ? `` : (stryCov_9fa48("30556"), `pid:${pid}:downvote`)]), uid);
        return stryMutAct_9fa48("30557") ? {} : (stryCov_9fa48("30557"), {
          upvoted: hasVoted[0],
          downvoted: hasVoted[1]
        });
      }
    };
    Posts.getVoteStatusByPostIDs = async function (pids, uid) {
      if (stryMutAct_9fa48("30558")) {
        {}
      } else {
        stryCov_9fa48("30558");
        if (stryMutAct_9fa48("30562") ? parseInt(uid, 10) > 0 : stryMutAct_9fa48("30561") ? parseInt(uid, 10) < 0 : stryMutAct_9fa48("30560") ? false : stryMutAct_9fa48("30559") ? true : (stryCov_9fa48("30559", "30560", "30561", "30562"), parseInt(uid, 10) <= 0)) {
          if (stryMutAct_9fa48("30563")) {
            {}
          } else {
            stryCov_9fa48("30563");
            const data = pids.map(stryMutAct_9fa48("30564") ? () => undefined : (stryCov_9fa48("30564"), () => stryMutAct_9fa48("30565") ? true : (stryCov_9fa48("30565"), false)));
            return stryMutAct_9fa48("30566") ? {} : (stryCov_9fa48("30566"), {
              upvotes: data,
              downvotes: data
            });
          }
        }
        const upvoteSets = pids.map(stryMutAct_9fa48("30567") ? () => undefined : (stryCov_9fa48("30567"), pid => stryMutAct_9fa48("30568") ? `` : (stryCov_9fa48("30568"), `pid:${pid}:upvote`)));
        const downvoteSets = pids.map(stryMutAct_9fa48("30569") ? () => undefined : (stryCov_9fa48("30569"), pid => stryMutAct_9fa48("30570") ? `` : (stryCov_9fa48("30570"), `pid:${pid}:downvote`)));
        const data = await db.isMemberOfSets(upvoteSets.concat(downvoteSets), uid);
        return stryMutAct_9fa48("30571") ? {} : (stryCov_9fa48("30571"), {
          upvotes: stryMutAct_9fa48("30572") ? data : (stryCov_9fa48("30572"), data.slice(0, pids.length)),
          downvotes: stryMutAct_9fa48("30573") ? data : (stryCov_9fa48("30573"), data.slice(pids.length, stryMutAct_9fa48("30574") ? pids.length / 2 : (stryCov_9fa48("30574"), pids.length * 2)))
        });
      }
    };
    Posts.getUpvotedUidsByPids = async function (pids) {
      if (stryMutAct_9fa48("30575")) {
        {}
      } else {
        stryCov_9fa48("30575");
        return await db.getSetsMembers(pids.map(stryMutAct_9fa48("30576") ? () => undefined : (stryCov_9fa48("30576"), pid => stryMutAct_9fa48("30577") ? `` : (stryCov_9fa48("30577"), `pid:${pid}:upvote`))));
      }
    };
    function voteInProgress(pid, uid) {
      if (stryMutAct_9fa48("30578")) {
        {}
      } else {
        stryCov_9fa48("30578");
        return stryMutAct_9fa48("30581") ? Array.isArray(votesInProgress[uid]) || votesInProgress[uid].includes(parseInt(pid, 10)) : stryMutAct_9fa48("30580") ? false : stryMutAct_9fa48("30579") ? true : (stryCov_9fa48("30579", "30580", "30581"), Array.isArray(votesInProgress[uid]) && votesInProgress[uid].includes(parseInt(pid, 10)));
      }
    }
    function putVoteInProgress(pid, uid) {
      if (stryMutAct_9fa48("30582")) {
        {}
      } else {
        stryCov_9fa48("30582");
        votesInProgress[uid] = stryMutAct_9fa48("30585") ? votesInProgress[uid] && [] : stryMutAct_9fa48("30584") ? false : stryMutAct_9fa48("30583") ? true : (stryCov_9fa48("30583", "30584", "30585"), votesInProgress[uid] || (stryMutAct_9fa48("30586") ? ["Stryker was here"] : (stryCov_9fa48("30586"), [])));
        votesInProgress[uid].push(parseInt(pid, 10));
      }
    }
    function clearVoteProgress(pid, uid) {
      if (stryMutAct_9fa48("30587")) {
        {}
      } else {
        stryCov_9fa48("30587");
        if (stryMutAct_9fa48("30589") ? false : stryMutAct_9fa48("30588") ? true : (stryCov_9fa48("30588", "30589"), Array.isArray(votesInProgress[uid]))) {
          if (stryMutAct_9fa48("30590")) {
            {}
          } else {
            stryCov_9fa48("30590");
            const index = votesInProgress[uid].indexOf(parseInt(pid, 10));
            if (stryMutAct_9fa48("30593") ? index === -1 : stryMutAct_9fa48("30592") ? false : stryMutAct_9fa48("30591") ? true : (stryCov_9fa48("30591", "30592", "30593"), index !== (stryMutAct_9fa48("30594") ? +1 : (stryCov_9fa48("30594"), -1)))) {
              if (stryMutAct_9fa48("30595")) {
                {}
              } else {
                stryCov_9fa48("30595");
                votesInProgress[uid].splice(index, 1);
              }
            }
          }
        }
      }
    }
    async function toggleVote(type, pid, uid) {
      if (stryMutAct_9fa48("30596")) {
        {}
      } else {
        stryCov_9fa48("30596");
        const voteStatus = await Posts.hasVoted(pid, uid);
        await unvote(pid, uid, type, voteStatus);
        return await vote(type, stryMutAct_9fa48("30597") ? true : (stryCov_9fa48("30597"), false), pid, uid, voteStatus);
      }
    }
    async function unvote(pid, uid, type, voteStatus) {
      if (stryMutAct_9fa48("30598")) {
        {}
      } else {
        stryCov_9fa48("30598");
        const owner = await Posts.getPostField(pid, stryMutAct_9fa48("30599") ? "" : (stryCov_9fa48("30599"), 'uid'));
        if (stryMutAct_9fa48("30602") ? parseInt(uid, 10) !== parseInt(owner, 10) : stryMutAct_9fa48("30601") ? false : stryMutAct_9fa48("30600") ? true : (stryCov_9fa48("30600", "30601", "30602"), parseInt(uid, 10) === parseInt(owner, 10))) {
          if (stryMutAct_9fa48("30603")) {
            {}
          } else {
            stryCov_9fa48("30603");
            throw new Error(stryMutAct_9fa48("30604") ? "" : (stryCov_9fa48("30604"), '[[error:self-vote]]'));
          }
        }
        if (stryMutAct_9fa48("30607") ? type === 'downvote' && type === 'upvote' : stryMutAct_9fa48("30606") ? false : stryMutAct_9fa48("30605") ? true : (stryCov_9fa48("30605", "30606", "30607"), (stryMutAct_9fa48("30609") ? type !== 'downvote' : stryMutAct_9fa48("30608") ? false : (stryCov_9fa48("30608", "30609"), type === (stryMutAct_9fa48("30610") ? "" : (stryCov_9fa48("30610"), 'downvote')))) || (stryMutAct_9fa48("30612") ? type !== 'upvote' : stryMutAct_9fa48("30611") ? false : (stryCov_9fa48("30611", "30612"), type === (stryMutAct_9fa48("30613") ? "" : (stryCov_9fa48("30613"), 'upvote')))))) {
          if (stryMutAct_9fa48("30614")) {
            {}
          } else {
            stryCov_9fa48("30614");
            await checkVoteLimitation(pid, uid, type);
          }
        }
        if (stryMutAct_9fa48("30617") ? !voteStatus && !voteStatus.upvoted && !voteStatus.downvoted : stryMutAct_9fa48("30616") ? false : stryMutAct_9fa48("30615") ? true : (stryCov_9fa48("30615", "30616", "30617"), (stryMutAct_9fa48("30618") ? voteStatus : (stryCov_9fa48("30618"), !voteStatus)) || (stryMutAct_9fa48("30620") ? !voteStatus.upvoted || !voteStatus.downvoted : stryMutAct_9fa48("30619") ? false : (stryCov_9fa48("30619", "30620"), (stryMutAct_9fa48("30621") ? voteStatus.upvoted : (stryCov_9fa48("30621"), !voteStatus.upvoted)) && (stryMutAct_9fa48("30622") ? voteStatus.downvoted : (stryCov_9fa48("30622"), !voteStatus.downvoted)))))) {
          if (stryMutAct_9fa48("30623")) {
            {}
          } else {
            stryCov_9fa48("30623");
            return;
          }
        }
        return await vote(voteStatus.upvoted ? stryMutAct_9fa48("30624") ? "" : (stryCov_9fa48("30624"), 'downvote') : stryMutAct_9fa48("30625") ? "" : (stryCov_9fa48("30625"), 'upvote'), stryMutAct_9fa48("30626") ? false : (stryCov_9fa48("30626"), true), pid, uid, voteStatus);
      }
    }
    async function checkVoteLimitation(pid, uid, type) {
      if (stryMutAct_9fa48("30627")) {
        {}
      } else {
        stryCov_9fa48("30627");
        // type = 'upvote' or 'downvote'
        const oneDay = 86400000;
        const [reputation, targetUid, votedPidsToday] = await Promise.all(stryMutAct_9fa48("30628") ? [] : (stryCov_9fa48("30628"), [user.getUserField(uid, stryMutAct_9fa48("30629") ? "" : (stryCov_9fa48("30629"), 'reputation')), Posts.getPostField(pid, stryMutAct_9fa48("30630") ? "" : (stryCov_9fa48("30630"), 'uid')), db.getSortedSetRevRangeByScore(stryMutAct_9fa48("30631") ? `` : (stryCov_9fa48("30631"), `uid:${uid}:${type}`), 0, stryMutAct_9fa48("30632") ? +1 : (stryCov_9fa48("30632"), -1), stryMutAct_9fa48("30633") ? "" : (stryCov_9fa48("30633"), '+inf'), stryMutAct_9fa48("30634") ? Date.now() + oneDay : (stryCov_9fa48("30634"), Date.now() - oneDay))]));
        if (stryMutAct_9fa48("30638") ? reputation >= meta.config[`min:rep:${type}`] : stryMutAct_9fa48("30637") ? reputation <= meta.config[`min:rep:${type}`] : stryMutAct_9fa48("30636") ? false : stryMutAct_9fa48("30635") ? true : (stryCov_9fa48("30635", "30636", "30637", "30638"), reputation < meta.config[stryMutAct_9fa48("30639") ? `` : (stryCov_9fa48("30639"), `min:rep:${type}`)])) {
          if (stryMutAct_9fa48("30640")) {
            {}
          } else {
            stryCov_9fa48("30640");
            throw new Error(stryMutAct_9fa48("30641") ? `` : (stryCov_9fa48("30641"), `[[error:not-enough-reputation-to-${type}, ${meta.config[stryMutAct_9fa48("30642") ? `` : (stryCov_9fa48("30642"), `min:rep:${type}`)]}]]`));
          }
        }
        const votesToday = meta.config[stryMutAct_9fa48("30643") ? `` : (stryCov_9fa48("30643"), `${type}sPerDay`)];
        if (stryMutAct_9fa48("30646") ? votesToday || votedPidsToday.length >= votesToday : stryMutAct_9fa48("30645") ? false : stryMutAct_9fa48("30644") ? true : (stryCov_9fa48("30644", "30645", "30646"), votesToday && (stryMutAct_9fa48("30649") ? votedPidsToday.length < votesToday : stryMutAct_9fa48("30648") ? votedPidsToday.length > votesToday : stryMutAct_9fa48("30647") ? true : (stryCov_9fa48("30647", "30648", "30649"), votedPidsToday.length >= votesToday)))) {
          if (stryMutAct_9fa48("30650")) {
            {}
          } else {
            stryCov_9fa48("30650");
            throw new Error(stryMutAct_9fa48("30651") ? `` : (stryCov_9fa48("30651"), `[[error:too-many-${type}s-today, ${votesToday}]]`));
          }
        }
        const voterPerUserToday = meta.config[stryMutAct_9fa48("30652") ? `` : (stryCov_9fa48("30652"), `${type}sPerUserPerDay`)];
        if (stryMutAct_9fa48("30654") ? false : stryMutAct_9fa48("30653") ? true : (stryCov_9fa48("30653", "30654"), voterPerUserToday)) {
          if (stryMutAct_9fa48("30655")) {
            {}
          } else {
            stryCov_9fa48("30655");
            const postData = await Posts.getPostsFields(votedPidsToday, stryMutAct_9fa48("30656") ? [] : (stryCov_9fa48("30656"), [stryMutAct_9fa48("30657") ? "" : (stryCov_9fa48("30657"), 'uid')]));
            const targetUpVotes = stryMutAct_9fa48("30658") ? postData.length : (stryCov_9fa48("30658"), postData.filter(stryMutAct_9fa48("30659") ? () => undefined : (stryCov_9fa48("30659"), p => stryMutAct_9fa48("30662") ? p.uid !== targetUid : stryMutAct_9fa48("30661") ? false : stryMutAct_9fa48("30660") ? true : (stryCov_9fa48("30660", "30661", "30662"), p.uid === targetUid))).length);
            if (stryMutAct_9fa48("30666") ? targetUpVotes < voterPerUserToday : stryMutAct_9fa48("30665") ? targetUpVotes > voterPerUserToday : stryMutAct_9fa48("30664") ? false : stryMutAct_9fa48("30663") ? true : (stryCov_9fa48("30663", "30664", "30665", "30666"), targetUpVotes >= voterPerUserToday)) {
              if (stryMutAct_9fa48("30667")) {
                {}
              } else {
                stryCov_9fa48("30667");
                throw new Error(stryMutAct_9fa48("30668") ? `` : (stryCov_9fa48("30668"), `[[error:too-many-${type}s-today-user, ${voterPerUserToday}]]`));
              }
            }
          }
        }
      }
    }
    async function vote(type, unvote, pid, uid, voteStatus) {
      if (stryMutAct_9fa48("30669")) {
        {}
      } else {
        stryCov_9fa48("30669");
        uid = parseInt(uid, 10);
        if (stryMutAct_9fa48("30673") ? uid > 0 : stryMutAct_9fa48("30672") ? uid < 0 : stryMutAct_9fa48("30671") ? false : stryMutAct_9fa48("30670") ? true : (stryCov_9fa48("30670", "30671", "30672", "30673"), uid <= 0)) {
          if (stryMutAct_9fa48("30674")) {
            {}
          } else {
            stryCov_9fa48("30674");
            throw new Error(stryMutAct_9fa48("30675") ? "" : (stryCov_9fa48("30675"), '[[error:not-logged-in]]'));
          }
        }
        const now = Date.now();
        if (stryMutAct_9fa48("30678") ? type === 'upvote' || !unvote : stryMutAct_9fa48("30677") ? false : stryMutAct_9fa48("30676") ? true : (stryCov_9fa48("30676", "30677", "30678"), (stryMutAct_9fa48("30680") ? type !== 'upvote' : stryMutAct_9fa48("30679") ? true : (stryCov_9fa48("30679", "30680"), type === (stryMutAct_9fa48("30681") ? "" : (stryCov_9fa48("30681"), 'upvote')))) && (stryMutAct_9fa48("30682") ? unvote : (stryCov_9fa48("30682"), !unvote)))) {
          if (stryMutAct_9fa48("30683")) {
            {}
          } else {
            stryCov_9fa48("30683");
            await db.sortedSetAdd(stryMutAct_9fa48("30684") ? `` : (stryCov_9fa48("30684"), `uid:${uid}:upvote`), now, pid);
          }
        } else {
          if (stryMutAct_9fa48("30685")) {
            {}
          } else {
            stryCov_9fa48("30685");
            await db.sortedSetRemove(stryMutAct_9fa48("30686") ? `` : (stryCov_9fa48("30686"), `uid:${uid}:upvote`), pid);
          }
        }
        if (stryMutAct_9fa48("30689") ? type === 'upvote' && unvote : stryMutAct_9fa48("30688") ? false : stryMutAct_9fa48("30687") ? true : (stryCov_9fa48("30687", "30688", "30689"), (stryMutAct_9fa48("30691") ? type !== 'upvote' : stryMutAct_9fa48("30690") ? false : (stryCov_9fa48("30690", "30691"), type === (stryMutAct_9fa48("30692") ? "" : (stryCov_9fa48("30692"), 'upvote')))) || unvote)) {
          if (stryMutAct_9fa48("30693")) {
            {}
          } else {
            stryCov_9fa48("30693");
            await db.sortedSetRemove(stryMutAct_9fa48("30694") ? `` : (stryCov_9fa48("30694"), `uid:${uid}:downvote`), pid);
          }
        } else {
          if (stryMutAct_9fa48("30695")) {
            {}
          } else {
            stryCov_9fa48("30695");
            await db.sortedSetAdd(stryMutAct_9fa48("30696") ? `` : (stryCov_9fa48("30696"), `uid:${uid}:downvote`), now, pid);
          }
        }
        const postData = await Posts.getPostFields(pid, stryMutAct_9fa48("30697") ? [] : (stryCov_9fa48("30697"), [stryMutAct_9fa48("30698") ? "" : (stryCov_9fa48("30698"), 'pid'), stryMutAct_9fa48("30699") ? "" : (stryCov_9fa48("30699"), 'uid'), stryMutAct_9fa48("30700") ? "" : (stryCov_9fa48("30700"), 'tid')]));
        const newReputation = await user.incrementUserReputationBy(postData.uid, (stryMutAct_9fa48("30703") ? type !== 'upvote' : stryMutAct_9fa48("30702") ? false : stryMutAct_9fa48("30701") ? true : (stryCov_9fa48("30701", "30702", "30703"), type === (stryMutAct_9fa48("30704") ? "" : (stryCov_9fa48("30704"), 'upvote')))) ? 1 : stryMutAct_9fa48("30705") ? +1 : (stryCov_9fa48("30705"), -1));
        await adjustPostVotes(postData, uid, type, unvote);
        await fireVoteHook(postData, uid, type, unvote, voteStatus);
        return stryMutAct_9fa48("30706") ? {} : (stryCov_9fa48("30706"), {
          user: stryMutAct_9fa48("30707") ? {} : (stryCov_9fa48("30707"), {
            reputation: newReputation
          }),
          fromuid: uid,
          post: postData,
          upvote: stryMutAct_9fa48("30710") ? type === 'upvote' || !unvote : stryMutAct_9fa48("30709") ? false : stryMutAct_9fa48("30708") ? true : (stryCov_9fa48("30708", "30709", "30710"), (stryMutAct_9fa48("30712") ? type !== 'upvote' : stryMutAct_9fa48("30711") ? true : (stryCov_9fa48("30711", "30712"), type === (stryMutAct_9fa48("30713") ? "" : (stryCov_9fa48("30713"), 'upvote')))) && (stryMutAct_9fa48("30714") ? unvote : (stryCov_9fa48("30714"), !unvote))),
          downvote: stryMutAct_9fa48("30717") ? type === 'downvote' || !unvote : stryMutAct_9fa48("30716") ? false : stryMutAct_9fa48("30715") ? true : (stryCov_9fa48("30715", "30716", "30717"), (stryMutAct_9fa48("30719") ? type !== 'downvote' : stryMutAct_9fa48("30718") ? true : (stryCov_9fa48("30718", "30719"), type === (stryMutAct_9fa48("30720") ? "" : (stryCov_9fa48("30720"), 'downvote')))) && (stryMutAct_9fa48("30721") ? unvote : (stryCov_9fa48("30721"), !unvote)))
        });
      }
    }
    async function fireVoteHook(postData, uid, type, unvote, voteStatus) {
      if (stryMutAct_9fa48("30722")) {
        {}
      } else {
        stryCov_9fa48("30722");
        let hook = type;
        let current = voteStatus.upvoted ? stryMutAct_9fa48("30723") ? "" : (stryCov_9fa48("30723"), 'upvote') : stryMutAct_9fa48("30724") ? "" : (stryCov_9fa48("30724"), 'downvote');
        if (stryMutAct_9fa48("30726") ? false : stryMutAct_9fa48("30725") ? true : (stryCov_9fa48("30725", "30726"), unvote)) {
          if (stryMutAct_9fa48("30727")) {
            {}
          } else {
            stryCov_9fa48("30727");
            // e.g. unvoting, removing a upvote or downvote
            hook = stryMutAct_9fa48("30728") ? "" : (stryCov_9fa48("30728"), 'unvote');
          }
        } else {
          if (stryMutAct_9fa48("30729")) {
            {}
          } else {
            stryCov_9fa48("30729");
            // e.g. User *has not* voted, clicks upvote or downvote
            current = stryMutAct_9fa48("30730") ? "" : (stryCov_9fa48("30730"), 'unvote');
          }
        }
        // action:post.upvote
        // action:post.downvote
        // action:post.unvote
        plugins.hooks.fire(stryMutAct_9fa48("30731") ? `` : (stryCov_9fa48("30731"), `action:post.${hook}`), stryMutAct_9fa48("30732") ? {} : (stryCov_9fa48("30732"), {
          pid: postData.pid,
          uid: uid,
          owner: postData.uid,
          current: current
        }));
      }
    }
    async function adjustPostVotes(postData, uid, type, unvote) {
      if (stryMutAct_9fa48("30733")) {
        {}
      } else {
        stryCov_9fa48("30733");
        const notType = (stryMutAct_9fa48("30736") ? type !== 'upvote' : stryMutAct_9fa48("30735") ? false : stryMutAct_9fa48("30734") ? true : (stryCov_9fa48("30734", "30735", "30736"), type === (stryMutAct_9fa48("30737") ? "" : (stryCov_9fa48("30737"), 'upvote')))) ? stryMutAct_9fa48("30738") ? "" : (stryCov_9fa48("30738"), 'downvote') : stryMutAct_9fa48("30739") ? "" : (stryCov_9fa48("30739"), 'upvote');
        if (stryMutAct_9fa48("30741") ? false : stryMutAct_9fa48("30740") ? true : (stryCov_9fa48("30740", "30741"), unvote)) {
          if (stryMutAct_9fa48("30742")) {
            {}
          } else {
            stryCov_9fa48("30742");
            await db.setRemove(stryMutAct_9fa48("30743") ? `` : (stryCov_9fa48("30743"), `pid:${postData.pid}:${type}`), uid);
          }
        } else {
          if (stryMutAct_9fa48("30744")) {
            {}
          } else {
            stryCov_9fa48("30744");
            await db.setAdd(stryMutAct_9fa48("30745") ? `` : (stryCov_9fa48("30745"), `pid:${postData.pid}:${type}`), uid);
          }
        }
        await db.setRemove(stryMutAct_9fa48("30746") ? `` : (stryCov_9fa48("30746"), `pid:${postData.pid}:${notType}`), uid);
        const [upvotes, downvotes] = await Promise.all(stryMutAct_9fa48("30747") ? [] : (stryCov_9fa48("30747"), [db.setCount(stryMutAct_9fa48("30748") ? `` : (stryCov_9fa48("30748"), `pid:${postData.pid}:upvote`)), db.setCount(stryMutAct_9fa48("30749") ? `` : (stryCov_9fa48("30749"), `pid:${postData.pid}:downvote`))]));
        postData.upvotes = upvotes;
        postData.downvotes = downvotes;
        postData.votes = stryMutAct_9fa48("30750") ? postData.upvotes + postData.downvotes : (stryCov_9fa48("30750"), postData.upvotes - postData.downvotes);
        await Posts.updatePostVoteCount(postData);
      }
    }
    Posts.updatePostVoteCount = async function (postData) {
      if (stryMutAct_9fa48("30751")) {
        {}
      } else {
        stryCov_9fa48("30751");
        if (stryMutAct_9fa48("30754") ? (!postData || !postData.pid) && !postData.tid : stryMutAct_9fa48("30753") ? false : stryMutAct_9fa48("30752") ? true : (stryCov_9fa48("30752", "30753", "30754"), (stryMutAct_9fa48("30756") ? !postData && !postData.pid : stryMutAct_9fa48("30755") ? false : (stryCov_9fa48("30755", "30756"), (stryMutAct_9fa48("30757") ? postData : (stryCov_9fa48("30757"), !postData)) || (stryMutAct_9fa48("30758") ? postData.pid : (stryCov_9fa48("30758"), !postData.pid)))) || (stryMutAct_9fa48("30759") ? postData.tid : (stryCov_9fa48("30759"), !postData.tid)))) {
          if (stryMutAct_9fa48("30760")) {
            {}
          } else {
            stryCov_9fa48("30760");
            return;
          }
        }
        const threshold = meta.config[stryMutAct_9fa48("30761") ? "" : (stryCov_9fa48("30761"), 'flags:autoFlagOnDownvoteThreshold')];
        if (stryMutAct_9fa48("30764") ? threshold || postData.votes <= -threshold : stryMutAct_9fa48("30763") ? false : stryMutAct_9fa48("30762") ? true : (stryCov_9fa48("30762", "30763", "30764"), threshold && (stryMutAct_9fa48("30767") ? postData.votes > -threshold : stryMutAct_9fa48("30766") ? postData.votes < -threshold : stryMutAct_9fa48("30765") ? true : (stryCov_9fa48("30765", "30766", "30767"), postData.votes <= (stryMutAct_9fa48("30768") ? +threshold : (stryCov_9fa48("30768"), -threshold)))))) {
          if (stryMutAct_9fa48("30769")) {
            {}
          } else {
            stryCov_9fa48("30769");
            const adminUid = await user.getFirstAdminUid();
            const reportMsg = await translator.translate(stryMutAct_9fa48("30770") ? `` : (stryCov_9fa48("30770"), `[[flags:auto-flagged, ${stryMutAct_9fa48("30771") ? +postData.votes : (stryCov_9fa48("30771"), -postData.votes)}]]`));
            const flagObj = await flags.create(stryMutAct_9fa48("30772") ? "" : (stryCov_9fa48("30772"), 'post'), postData.pid, adminUid, reportMsg, null, stryMutAct_9fa48("30773") ? false : (stryCov_9fa48("30773"), true));
            await flags.notify(flagObj, adminUid, stryMutAct_9fa48("30774") ? false : (stryCov_9fa48("30774"), true));
          }
        }
        await Promise.all(stryMutAct_9fa48("30775") ? [] : (stryCov_9fa48("30775"), [updateTopicVoteCount(postData), db.sortedSetAdd(stryMutAct_9fa48("30776") ? "" : (stryCov_9fa48("30776"), 'posts:votes'), postData.votes, postData.pid), Posts.setPostFields(postData.pid, stryMutAct_9fa48("30777") ? {} : (stryCov_9fa48("30777"), {
          upvotes: postData.upvotes,
          downvotes: postData.downvotes
        }))]));
        plugins.hooks.fire(stryMutAct_9fa48("30778") ? "" : (stryCov_9fa48("30778"), 'action:post.updatePostVoteCount'), stryMutAct_9fa48("30779") ? {} : (stryCov_9fa48("30779"), {
          post: postData
        }));
      }
    };
    async function updateTopicVoteCount(postData) {
      if (stryMutAct_9fa48("30780")) {
        {}
      } else {
        stryCov_9fa48("30780");
        const topicData = await topics.getTopicFields(postData.tid, stryMutAct_9fa48("30781") ? [] : (stryCov_9fa48("30781"), [stryMutAct_9fa48("30782") ? "" : (stryCov_9fa48("30782"), 'mainPid'), stryMutAct_9fa48("30783") ? "" : (stryCov_9fa48("30783"), 'cid'), stryMutAct_9fa48("30784") ? "" : (stryCov_9fa48("30784"), 'pinned')]));
        if (stryMutAct_9fa48("30786") ? false : stryMutAct_9fa48("30785") ? true : (stryCov_9fa48("30785", "30786"), postData.uid)) {
          if (stryMutAct_9fa48("30787")) {
            {}
          } else {
            stryCov_9fa48("30787");
            if (stryMutAct_9fa48("30790") ? postData.votes === 0 : stryMutAct_9fa48("30789") ? false : stryMutAct_9fa48("30788") ? true : (stryCov_9fa48("30788", "30789", "30790"), postData.votes !== 0)) {
              if (stryMutAct_9fa48("30791")) {
                {}
              } else {
                stryCov_9fa48("30791");
                await db.sortedSetAdd(stryMutAct_9fa48("30792") ? `` : (stryCov_9fa48("30792"), `cid:${topicData.cid}:uid:${postData.uid}:pids:votes`), postData.votes, postData.pid);
              }
            } else {
              if (stryMutAct_9fa48("30793")) {
                {}
              } else {
                stryCov_9fa48("30793");
                await db.sortedSetRemove(stryMutAct_9fa48("30794") ? `` : (stryCov_9fa48("30794"), `cid:${topicData.cid}:uid:${postData.uid}:pids:votes`), postData.pid);
              }
            }
          }
        }
        if (stryMutAct_9fa48("30797") ? parseInt(topicData.mainPid, 10) === parseInt(postData.pid, 10) : stryMutAct_9fa48("30796") ? false : stryMutAct_9fa48("30795") ? true : (stryCov_9fa48("30795", "30796", "30797"), parseInt(topicData.mainPid, 10) !== parseInt(postData.pid, 10))) {
          if (stryMutAct_9fa48("30798")) {
            {}
          } else {
            stryCov_9fa48("30798");
            return await db.sortedSetAdd(stryMutAct_9fa48("30799") ? `` : (stryCov_9fa48("30799"), `tid:${postData.tid}:posts:votes`), postData.votes, postData.pid);
          }
        }
        const promises = stryMutAct_9fa48("30800") ? [] : (stryCov_9fa48("30800"), [topics.setTopicFields(postData.tid, stryMutAct_9fa48("30801") ? {} : (stryCov_9fa48("30801"), {
          upvotes: postData.upvotes,
          downvotes: postData.downvotes
        })), db.sortedSetAdd(stryMutAct_9fa48("30802") ? "" : (stryCov_9fa48("30802"), 'topics:votes'), postData.votes, postData.tid)]);
        if (stryMutAct_9fa48("30805") ? false : stryMutAct_9fa48("30804") ? true : stryMutAct_9fa48("30803") ? topicData.pinned : (stryCov_9fa48("30803", "30804", "30805"), !topicData.pinned)) {
          if (stryMutAct_9fa48("30806")) {
            {}
          } else {
            stryCov_9fa48("30806");
            promises.push(db.sortedSetAdd(stryMutAct_9fa48("30807") ? `` : (stryCov_9fa48("30807"), `cid:${topicData.cid}:tids:votes`), postData.votes, postData.tid));
          }
        }
        await Promise.all(promises);
      }
    }
  }
};