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
const nconf = require('nconf');
nconf.argv().env(stryMutAct_9fa48("47737") ? {} : (stryCov_9fa48("47737"), {
  separator: stryMutAct_9fa48("47738") ? "" : (stryCov_9fa48("47738"), '__')
}));
const fs = require('fs');
const path = require('path');
const _ = require('lodash');
process.env.NODE_ENV = stryMutAct_9fa48("47741") ? process.env.NODE_ENV && 'production' : stryMutAct_9fa48("47740") ? false : stryMutAct_9fa48("47739") ? true : (stryCov_9fa48("47739", "47740", "47741"), process.env.NODE_ENV || (stryMutAct_9fa48("47742") ? "" : (stryCov_9fa48("47742"), 'production')));

// Alternate configuration file support
const configFile = path.resolve(__dirname, stryMutAct_9fa48("47743") ? "" : (stryCov_9fa48("47743"), '../../../'), stryMutAct_9fa48("47746") ? nconf.any(['config', 'CONFIG']) && 'config.json' : stryMutAct_9fa48("47745") ? false : stryMutAct_9fa48("47744") ? true : (stryCov_9fa48("47744", "47745", "47746"), nconf.any(stryMutAct_9fa48("47747") ? [] : (stryCov_9fa48("47747"), [stryMutAct_9fa48("47748") ? "" : (stryCov_9fa48("47748"), 'config'), stryMutAct_9fa48("47749") ? "" : (stryCov_9fa48("47749"), 'CONFIG')])) || (stryMutAct_9fa48("47750") ? "" : (stryCov_9fa48("47750"), 'config.json'))));
const prestart = require('../../prestart');
prestart.loadConfig(configFile);
prestart.setupWinston();
const db = require('../../database');
const batch = require('../../batch');
process.on(stryMutAct_9fa48("47751") ? "" : (stryCov_9fa48("47751"), 'message'), async msg => {
  if (stryMutAct_9fa48("47752")) {
    {}
  } else {
    stryCov_9fa48("47752");
    if (stryMutAct_9fa48("47755") ? msg || msg.uid : stryMutAct_9fa48("47754") ? false : stryMutAct_9fa48("47753") ? true : (stryCov_9fa48("47753", "47754", "47755"), msg && msg.uid)) {
      if (stryMutAct_9fa48("47756")) {
        {}
      } else {
        stryCov_9fa48("47756");
        await db.init();
        await db.initSessionStore();
        const targetUid = msg.uid;
        const profileFile = stryMutAct_9fa48("47757") ? `` : (stryCov_9fa48("47757"), `${targetUid}_profile.json`);
        const profilePath = path.join(__dirname, stryMutAct_9fa48("47758") ? "" : (stryCov_9fa48("47758"), '../../../build/export'), profileFile);
        const user = require('../index');
        const [userData, userSettings, ips, sessions, usernames, emails, bookmarks, watchedTopics, upvoted, downvoted, following] = await Promise.all(stryMutAct_9fa48("47759") ? [] : (stryCov_9fa48("47759"), [db.getObject(stryMutAct_9fa48("47760") ? `` : (stryCov_9fa48("47760"), `user:${targetUid}`)), db.getObject(stryMutAct_9fa48("47761") ? `` : (stryCov_9fa48("47761"), `user:${targetUid}:settings`)), user.getIPs(targetUid, 9), user.auth.getSessions(targetUid), user.getHistory(stryMutAct_9fa48("47762") ? `` : (stryCov_9fa48("47762"), `user:${targetUid}:usernames`)), user.getHistory(stryMutAct_9fa48("47763") ? `` : (stryCov_9fa48("47763"), `user:${targetUid}:emails`)), getSetData(stryMutAct_9fa48("47764") ? `` : (stryCov_9fa48("47764"), `uid:${targetUid}:bookmarks`), stryMutAct_9fa48("47765") ? "" : (stryCov_9fa48("47765"), 'post:'), targetUid), getSetData(stryMutAct_9fa48("47766") ? `` : (stryCov_9fa48("47766"), `uid:${targetUid}:followed_tids`), stryMutAct_9fa48("47767") ? "" : (stryCov_9fa48("47767"), 'topic:'), targetUid), getSetData(stryMutAct_9fa48("47768") ? `` : (stryCov_9fa48("47768"), `uid:${targetUid}:upvote`), stryMutAct_9fa48("47769") ? "" : (stryCov_9fa48("47769"), 'post:'), targetUid), getSetData(stryMutAct_9fa48("47770") ? `` : (stryCov_9fa48("47770"), `uid:${targetUid}:downvote`), stryMutAct_9fa48("47771") ? "" : (stryCov_9fa48("47771"), 'post:'), targetUid), getSetData(stryMutAct_9fa48("47772") ? `` : (stryCov_9fa48("47772"), `following:${targetUid}`), stryMutAct_9fa48("47773") ? "" : (stryCov_9fa48("47773"), 'user:'), targetUid)]));
        delete userData.password;
        let chatData = stryMutAct_9fa48("47774") ? ["Stryker was here"] : (stryCov_9fa48("47774"), []);
        await batch.processSortedSet(stryMutAct_9fa48("47775") ? `` : (stryCov_9fa48("47775"), `uid:${targetUid}:chat:rooms`), async roomIds => {
          if (stryMutAct_9fa48("47776")) {
            {}
          } else {
            stryCov_9fa48("47776");
            const result = await Promise.all(roomIds.map(stryMutAct_9fa48("47777") ? () => undefined : (stryCov_9fa48("47777"), roomId => getRoomMessages(targetUid, roomId))));
            chatData = chatData.concat(_.flatten(result));
          }
        }, stryMutAct_9fa48("47778") ? {} : (stryCov_9fa48("47778"), {
          batch: 100,
          interval: 1000
        }));
        await fs.promises.writeFile(profilePath, JSON.stringify(stryMutAct_9fa48("47779") ? {} : (stryCov_9fa48("47779"), {
          user: userData,
          settings: userSettings,
          ips: ips,
          sessions: sessions,
          usernames: usernames,
          emails: emails,
          messages: chatData,
          bookmarks: bookmarks,
          watchedTopics: watchedTopics,
          upvoted: upvoted,
          downvoted: downvoted,
          following: following
        }), null, 4));
        await db.close();
        process.exit(0);
      }
    }
  }
});
async function getRoomMessages(uid, roomId) {
  if (stryMutAct_9fa48("47780")) {
    {}
  } else {
    stryCov_9fa48("47780");
    const batch = require('../../batch');
    let data = stryMutAct_9fa48("47781") ? ["Stryker was here"] : (stryCov_9fa48("47781"), []);
    await batch.processSortedSet(stryMutAct_9fa48("47782") ? `` : (stryCov_9fa48("47782"), `uid:${uid}:chat:room:${roomId}:mids`), async mids => {
      if (stryMutAct_9fa48("47783")) {
        {}
      } else {
        stryCov_9fa48("47783");
        const messageData = await db.getObjects(mids.map(stryMutAct_9fa48("47784") ? () => undefined : (stryCov_9fa48("47784"), mid => stryMutAct_9fa48("47785") ? `` : (stryCov_9fa48("47785"), `message:${mid}`))));
        data = data.concat(stryMutAct_9fa48("47786") ? messageData.map(m => ({
          content: m.content,
          timestamp: m.timestamp
        })) : (stryCov_9fa48("47786"), messageData.filter(stryMutAct_9fa48("47787") ? () => undefined : (stryCov_9fa48("47787"), m => stryMutAct_9fa48("47790") ? m && m.fromuid === uid || !m.system : stryMutAct_9fa48("47789") ? false : stryMutAct_9fa48("47788") ? true : (stryCov_9fa48("47788", "47789", "47790"), (stryMutAct_9fa48("47792") ? m || m.fromuid === uid : stryMutAct_9fa48("47791") ? true : (stryCov_9fa48("47791", "47792"), m && (stryMutAct_9fa48("47794") ? m.fromuid !== uid : stryMutAct_9fa48("47793") ? true : (stryCov_9fa48("47793", "47794"), m.fromuid === uid)))) && (stryMutAct_9fa48("47795") ? m.system : (stryCov_9fa48("47795"), !m.system))))).map(stryMutAct_9fa48("47796") ? () => undefined : (stryCov_9fa48("47796"), m => stryMutAct_9fa48("47797") ? {} : (stryCov_9fa48("47797"), {
          content: m.content,
          timestamp: m.timestamp
        })))));
      }
    }, stryMutAct_9fa48("47798") ? {} : (stryCov_9fa48("47798"), {
      batch: 500,
      interval: 1000
    }));
    return data;
  }
}
async function getSetData(set, keyPrefix, uid) {
  if (stryMutAct_9fa48("47799")) {
    {}
  } else {
    stryCov_9fa48("47799");
    const privileges = require('../../privileges');
    const batch = require('../../batch');
    let data = stryMutAct_9fa48("47800") ? ["Stryker was here"] : (stryCov_9fa48("47800"), []);
    await batch.processSortedSet(set, async ids => {
      if (stryMutAct_9fa48("47801")) {
        {}
      } else {
        stryCov_9fa48("47801");
        if (stryMutAct_9fa48("47804") ? keyPrefix !== 'post:' : stryMutAct_9fa48("47803") ? false : stryMutAct_9fa48("47802") ? true : (stryCov_9fa48("47802", "47803", "47804"), keyPrefix === (stryMutAct_9fa48("47805") ? "" : (stryCov_9fa48("47805"), 'post:')))) {
          if (stryMutAct_9fa48("47806")) {
            {}
          } else {
            stryCov_9fa48("47806");
            ids = await (stryMutAct_9fa48("47807") ? privileges.posts : (stryCov_9fa48("47807"), privileges.posts.filter(stryMutAct_9fa48("47808") ? "" : (stryCov_9fa48("47808"), 'topics:read'), ids, uid)));
          }
        } else if (stryMutAct_9fa48("47811") ? keyPrefix !== 'topic:' : stryMutAct_9fa48("47810") ? false : stryMutAct_9fa48("47809") ? true : (stryCov_9fa48("47809", "47810", "47811"), keyPrefix === (stryMutAct_9fa48("47812") ? "" : (stryCov_9fa48("47812"), 'topic:')))) {
          if (stryMutAct_9fa48("47813")) {
            {}
          } else {
            stryCov_9fa48("47813");
            ids = await privileges.topics.filterTids(stryMutAct_9fa48("47814") ? "" : (stryCov_9fa48("47814"), 'topics:read'), ids, uid);
          }
        }
        let objData = await db.getObjects(ids.map(stryMutAct_9fa48("47815") ? () => undefined : (stryCov_9fa48("47815"), id => stryMutAct_9fa48("47816") ? keyPrefix - id : (stryCov_9fa48("47816"), keyPrefix + id))));
        if (stryMutAct_9fa48("47819") ? keyPrefix !== 'post:' : stryMutAct_9fa48("47818") ? false : stryMutAct_9fa48("47817") ? true : (stryCov_9fa48("47817", "47818", "47819"), keyPrefix === (stryMutAct_9fa48("47820") ? "" : (stryCov_9fa48("47820"), 'post:')))) {
          if (stryMutAct_9fa48("47821")) {
            {}
          } else {
            stryCov_9fa48("47821");
            objData = objData.map(stryMutAct_9fa48("47822") ? () => undefined : (stryCov_9fa48("47822"), o => _.pick(o, stryMutAct_9fa48("47823") ? [] : (stryCov_9fa48("47823"), [stryMutAct_9fa48("47824") ? "" : (stryCov_9fa48("47824"), 'pid'), stryMutAct_9fa48("47825") ? "" : (stryCov_9fa48("47825"), 'content'), stryMutAct_9fa48("47826") ? "" : (stryCov_9fa48("47826"), 'timestamp')]))));
          }
        } else if (stryMutAct_9fa48("47829") ? keyPrefix !== 'topic:' : stryMutAct_9fa48("47828") ? false : stryMutAct_9fa48("47827") ? true : (stryCov_9fa48("47827", "47828", "47829"), keyPrefix === (stryMutAct_9fa48("47830") ? "" : (stryCov_9fa48("47830"), 'topic:')))) {
          if (stryMutAct_9fa48("47831")) {
            {}
          } else {
            stryCov_9fa48("47831");
            objData = objData.map(stryMutAct_9fa48("47832") ? () => undefined : (stryCov_9fa48("47832"), o => _.pick(o, stryMutAct_9fa48("47833") ? [] : (stryCov_9fa48("47833"), [stryMutAct_9fa48("47834") ? "" : (stryCov_9fa48("47834"), 'tid'), stryMutAct_9fa48("47835") ? "" : (stryCov_9fa48("47835"), 'title'), stryMutAct_9fa48("47836") ? "" : (stryCov_9fa48("47836"), 'timestamp')]))));
          }
        } else if (stryMutAct_9fa48("47839") ? keyPrefix !== 'user:' : stryMutAct_9fa48("47838") ? false : stryMutAct_9fa48("47837") ? true : (stryCov_9fa48("47837", "47838", "47839"), keyPrefix === (stryMutAct_9fa48("47840") ? "" : (stryCov_9fa48("47840"), 'user:')))) {
          if (stryMutAct_9fa48("47841")) {
            {}
          } else {
            stryCov_9fa48("47841");
            objData = objData.map(stryMutAct_9fa48("47842") ? () => undefined : (stryCov_9fa48("47842"), o => _.pick(o, stryMutAct_9fa48("47843") ? [] : (stryCov_9fa48("47843"), [stryMutAct_9fa48("47844") ? "" : (stryCov_9fa48("47844"), 'uid'), stryMutAct_9fa48("47845") ? "" : (stryCov_9fa48("47845"), 'username')]))));
          }
        }
        data = data.concat(objData);
      }
    }, stryMutAct_9fa48("47846") ? {} : (stryCov_9fa48("47846"), {
      batch: 500,
      interval: 1000
    }));
    return data;
  }
}