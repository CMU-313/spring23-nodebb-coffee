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
const _ = require('lodash');
const validator = require('validator');
const db = require('../database');
const posts = require('../posts');
const topics = require('../topics');
const utils = require('../utils');
module.exports = function (User) {
  if (stryMutAct_9fa48("47268")) {
    {}
  } else {
    stryCov_9fa48("47268");
    User.getLatestBanInfo = async function (uid) {
      if (stryMutAct_9fa48("47269")) {
        {}
      } else {
        stryCov_9fa48("47269");
        // Simply retrieves the last record of the user's ban, even if they've been unbanned since then.
        const record = await db.getSortedSetRevRange(stryMutAct_9fa48("47270") ? `` : (stryCov_9fa48("47270"), `uid:${uid}:bans:timestamp`), 0, 0);
        if (stryMutAct_9fa48("47273") ? false : stryMutAct_9fa48("47272") ? true : stryMutAct_9fa48("47271") ? record.length : (stryCov_9fa48("47271", "47272", "47273"), !record.length)) {
          if (stryMutAct_9fa48("47274")) {
            {}
          } else {
            stryCov_9fa48("47274");
            throw new Error(stryMutAct_9fa48("47275") ? "" : (stryCov_9fa48("47275"), 'no-ban-info'));
          }
        }
        const banInfo = await db.getObject(record[0]);
        const expire = parseInt(banInfo.expire, 10);
        const expire_readable = utils.toISOString(expire);
        return stryMutAct_9fa48("47276") ? {} : (stryCov_9fa48("47276"), {
          uid: uid,
          timestamp: banInfo.timestamp,
          banned_until: expire,
          expiry: expire,
          /* backward compatible alias */
          banned_until_readable: expire_readable,
          expiry_readable: expire_readable,
          /* backward compatible alias */
          reason: validator.escape(String(stryMutAct_9fa48("47279") ? banInfo.reason && '' : stryMutAct_9fa48("47278") ? false : stryMutAct_9fa48("47277") ? true : (stryCov_9fa48("47277", "47278", "47279"), banInfo.reason || (stryMutAct_9fa48("47280") ? "Stryker was here!" : (stryCov_9fa48("47280"), '')))))
        });
      }
    };
    User.getModerationHistory = async function (uid) {
      if (stryMutAct_9fa48("47281")) {
        {}
      } else {
        stryCov_9fa48("47281");
        let [flags, bans, mutes] = await Promise.all(stryMutAct_9fa48("47282") ? [] : (stryCov_9fa48("47282"), [db.getSortedSetRevRangeWithScores(stryMutAct_9fa48("47283") ? `` : (stryCov_9fa48("47283"), `flags:byTargetUid:${uid}`), 0, 19), db.getSortedSetRevRange(stryMutAct_9fa48("47284") ? `` : (stryCov_9fa48("47284"), `uid:${uid}:bans:timestamp`), 0, 19), db.getSortedSetRevRange(stryMutAct_9fa48("47285") ? `` : (stryCov_9fa48("47285"), `uid:${uid}:mutes:timestamp`), 0, 19)]));

        // Get pids from flag objects
        const keys = flags.map(stryMutAct_9fa48("47286") ? () => undefined : (stryCov_9fa48("47286"), flagObj => stryMutAct_9fa48("47287") ? `` : (stryCov_9fa48("47287"), `flag:${flagObj.value}`)));
        const payload = await db.getObjectsFields(keys, stryMutAct_9fa48("47288") ? [] : (stryCov_9fa48("47288"), [stryMutAct_9fa48("47289") ? "" : (stryCov_9fa48("47289"), 'type'), stryMutAct_9fa48("47290") ? "" : (stryCov_9fa48("47290"), 'targetId')]));

        // Only pass on flag ids from posts
        flags = payload.reduce((memo, cur, idx) => {
          if (stryMutAct_9fa48("47291")) {
            {}
          } else {
            stryCov_9fa48("47291");
            if (stryMutAct_9fa48("47294") ? cur.type !== 'post' : stryMutAct_9fa48("47293") ? false : stryMutAct_9fa48("47292") ? true : (stryCov_9fa48("47292", "47293", "47294"), cur.type === (stryMutAct_9fa48("47295") ? "" : (stryCov_9fa48("47295"), 'post')))) {
              if (stryMutAct_9fa48("47296")) {
                {}
              } else {
                stryCov_9fa48("47296");
                memo.push(stryMutAct_9fa48("47297") ? {} : (stryCov_9fa48("47297"), {
                  value: parseInt(cur.targetId, 10),
                  score: flags[idx].score
                }));
              }
            }
            return memo;
          }
        }, stryMutAct_9fa48("47298") ? ["Stryker was here"] : (stryCov_9fa48("47298"), []));
        [flags, bans, mutes] = await Promise.all(stryMutAct_9fa48("47299") ? [] : (stryCov_9fa48("47299"), [getFlagMetadata(flags), formatBanMuteData(bans, stryMutAct_9fa48("47300") ? "" : (stryCov_9fa48("47300"), '[[user:info.banned-no-reason]]')), formatBanMuteData(mutes, stryMutAct_9fa48("47301") ? "" : (stryCov_9fa48("47301"), '[[user:info.muted-no-reason]]'))]));
        return stryMutAct_9fa48("47302") ? {} : (stryCov_9fa48("47302"), {
          flags: flags,
          bans: bans,
          mutes: mutes
        });
      }
    };
    User.getHistory = async function (set) {
      if (stryMutAct_9fa48("47303")) {
        {}
      } else {
        stryCov_9fa48("47303");
        const data = await db.getSortedSetRevRangeWithScores(set, 0, stryMutAct_9fa48("47304") ? +1 : (stryCov_9fa48("47304"), -1));
        return data.map(set => {
          if (stryMutAct_9fa48("47305")) {
            {}
          } else {
            stryCov_9fa48("47305");
            set.timestamp = set.score;
            set.timestampISO = utils.toISOString(set.score);
            set.value = validator.escape(String(set.value.split(stryMutAct_9fa48("47306") ? "" : (stryCov_9fa48("47306"), ':'))[0]));
            delete set.score;
            return set;
          }
        });
      }
    };
    async function getFlagMetadata(flags) {
      if (stryMutAct_9fa48("47307")) {
        {}
      } else {
        stryCov_9fa48("47307");
        const pids = flags.map(stryMutAct_9fa48("47308") ? () => undefined : (stryCov_9fa48("47308"), flagObj => parseInt(flagObj.value, 10)));
        const postData = await posts.getPostsFields(pids, stryMutAct_9fa48("47309") ? [] : (stryCov_9fa48("47309"), [stryMutAct_9fa48("47310") ? "" : (stryCov_9fa48("47310"), 'tid')]));
        const tids = postData.map(stryMutAct_9fa48("47311") ? () => undefined : (stryCov_9fa48("47311"), post => post.tid));
        const topicData = await topics.getTopicsFields(tids, stryMutAct_9fa48("47312") ? [] : (stryCov_9fa48("47312"), [stryMutAct_9fa48("47313") ? "" : (stryCov_9fa48("47313"), 'title')]));
        flags = flags.map((flagObj, idx) => {
          if (stryMutAct_9fa48("47314")) {
            {}
          } else {
            stryCov_9fa48("47314");
            flagObj.pid = flagObj.value;
            flagObj.timestamp = flagObj.score;
            flagObj.timestampISO = new Date(flagObj.score).toISOString();
            flagObj.timestampReadable = new Date(flagObj.score).toString();
            delete flagObj.value;
            delete flagObj.score;
            if (stryMutAct_9fa48("47317") ? false : stryMutAct_9fa48("47316") ? true : stryMutAct_9fa48("47315") ? tids[idx] : (stryCov_9fa48("47315", "47316", "47317"), !tids[idx])) {
              if (stryMutAct_9fa48("47318")) {
                {}
              } else {
                stryCov_9fa48("47318");
                flagObj.targetPurged = stryMutAct_9fa48("47319") ? false : (stryCov_9fa48("47319"), true);
              }
            }
            return _.extend(flagObj, topicData[idx]);
          }
        });
        return flags;
      }
    }
    async function formatBanMuteData(keys, noReasonLangKey) {
      if (stryMutAct_9fa48("47320")) {
        {}
      } else {
        stryCov_9fa48("47320");
        const data = await db.getObjects(keys);
        const uids = data.map(stryMutAct_9fa48("47321") ? () => undefined : (stryCov_9fa48("47321"), d => d.fromUid));
        const usersData = await User.getUsersFields(uids, stryMutAct_9fa48("47322") ? [] : (stryCov_9fa48("47322"), [stryMutAct_9fa48("47323") ? "" : (stryCov_9fa48("47323"), 'uid'), stryMutAct_9fa48("47324") ? "" : (stryCov_9fa48("47324"), 'username'), stryMutAct_9fa48("47325") ? "" : (stryCov_9fa48("47325"), 'userslug'), stryMutAct_9fa48("47326") ? "" : (stryCov_9fa48("47326"), 'picture')]));
        return data.map((banObj, index) => {
          if (stryMutAct_9fa48("47327")) {
            {}
          } else {
            stryCov_9fa48("47327");
            banObj.user = usersData[index];
            banObj.until = parseInt(banObj.expire, 10);
            banObj.untilReadable = new Date(banObj.until).toString();
            banObj.timestampReadable = new Date(parseInt(banObj.timestamp, 10)).toString();
            banObj.timestampISO = utils.toISOString(banObj.timestamp);
            banObj.reason = stryMutAct_9fa48("47330") ? validator.escape(String(banObj.reason || '')) && noReasonLangKey : stryMutAct_9fa48("47329") ? false : stryMutAct_9fa48("47328") ? true : (stryCov_9fa48("47328", "47329", "47330"), validator.escape(String(stryMutAct_9fa48("47333") ? banObj.reason && '' : stryMutAct_9fa48("47332") ? false : stryMutAct_9fa48("47331") ? true : (stryCov_9fa48("47331", "47332", "47333"), banObj.reason || (stryMutAct_9fa48("47334") ? "Stryker was here!" : (stryCov_9fa48("47334"), ''))))) || noReasonLangKey);
            return banObj;
          }
        });
      }
    }
    User.getModerationNotes = async function (uid, start, stop) {
      if (stryMutAct_9fa48("47335")) {
        {}
      } else {
        stryCov_9fa48("47335");
        const noteIds = await db.getSortedSetRevRange(stryMutAct_9fa48("47336") ? `` : (stryCov_9fa48("47336"), `uid:${uid}:moderation:notes`), start, stop);
        const keys = noteIds.map(stryMutAct_9fa48("47337") ? () => undefined : (stryCov_9fa48("47337"), id => stryMutAct_9fa48("47338") ? `` : (stryCov_9fa48("47338"), `uid:${uid}:moderation:note:${id}`)));
        const notes = await db.getObjects(keys);
        const uids = stryMutAct_9fa48("47339") ? ["Stryker was here"] : (stryCov_9fa48("47339"), []);
        const noteData = notes.map(note => {
          if (stryMutAct_9fa48("47340")) {
            {}
          } else {
            stryCov_9fa48("47340");
            if (stryMutAct_9fa48("47342") ? false : stryMutAct_9fa48("47341") ? true : (stryCov_9fa48("47341", "47342"), note)) {
              if (stryMutAct_9fa48("47343")) {
                {}
              } else {
                stryCov_9fa48("47343");
                uids.push(note.uid);
                note.timestampISO = utils.toISOString(note.timestamp);
                note.note = validator.escape(String(note.note));
              }
            }
            return note;
          }
        });
        const userData = await User.getUsersFields(uids, stryMutAct_9fa48("47344") ? [] : (stryCov_9fa48("47344"), [stryMutAct_9fa48("47345") ? "" : (stryCov_9fa48("47345"), 'uid'), stryMutAct_9fa48("47346") ? "" : (stryCov_9fa48("47346"), 'username'), stryMutAct_9fa48("47347") ? "" : (stryCov_9fa48("47347"), 'userslug'), stryMutAct_9fa48("47348") ? "" : (stryCov_9fa48("47348"), 'picture')]));
        noteData.forEach((note, index) => {
          if (stryMutAct_9fa48("47349")) {
            {}
          } else {
            stryCov_9fa48("47349");
            if (stryMutAct_9fa48("47351") ? false : stryMutAct_9fa48("47350") ? true : (stryCov_9fa48("47350", "47351"), note)) {
              if (stryMutAct_9fa48("47352")) {
                {}
              } else {
                stryCov_9fa48("47352");
                note.user = userData[index];
              }
            }
          }
        });
        return noteData;
      }
    };
    User.appendModerationNote = async ({
      uid,
      noteData
    }) => {
      if (stryMutAct_9fa48("47353")) {
        {}
      } else {
        stryCov_9fa48("47353");
        await db.sortedSetAdd(stryMutAct_9fa48("47354") ? `` : (stryCov_9fa48("47354"), `uid:${uid}:moderation:notes`), noteData.timestamp, noteData.timestamp);
        await db.setObject(stryMutAct_9fa48("47355") ? `` : (stryCov_9fa48("47355"), `uid:${uid}:moderation:note:${noteData.timestamp}`), noteData);
      }
    };
  }
};