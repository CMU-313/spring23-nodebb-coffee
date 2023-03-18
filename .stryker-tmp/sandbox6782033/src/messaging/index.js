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
const validator = require('validator');
const db = require('../database');
const user = require('../user');
const privileges = require('../privileges');
const plugins = require('../plugins');
const meta = require('../meta');
const utils = require('../utils');
const Messaging = module.exports;
require('./data')(Messaging);
require('./create')(Messaging);
require('./delete')(Messaging);
require('./edit')(Messaging);
require('./rooms')(Messaging);
require('./unread')(Messaging);
require('./notifications')(Messaging);
Messaging.messageExists = stryMutAct_9fa48("22552") ? () => undefined : (stryCov_9fa48("22552"), async mid => db.exists(stryMutAct_9fa48("22553") ? `` : (stryCov_9fa48("22553"), `message:${mid}`)));
Messaging.getMessages = async params => {
  if (stryMutAct_9fa48("22554")) {
    {}
  } else {
    stryCov_9fa48("22554");
    const isNew = stryMutAct_9fa48("22557") ? params.isNew && false : stryMutAct_9fa48("22556") ? false : stryMutAct_9fa48("22555") ? true : (stryCov_9fa48("22555", "22556", "22557"), params.isNew || (stryMutAct_9fa48("22558") ? true : (stryCov_9fa48("22558"), false)));
    const start = params.hasOwnProperty(stryMutAct_9fa48("22559") ? "" : (stryCov_9fa48("22559"), 'start')) ? params.start : 0;
    const stop = stryMutAct_9fa48("22560") ? parseInt(start, 10) - ((params.count || 50) - 1) : (stryCov_9fa48("22560"), parseInt(start, 10) + (stryMutAct_9fa48("22561") ? (params.count || 50) + 1 : (stryCov_9fa48("22561"), (stryMutAct_9fa48("22564") ? params.count && 50 : stryMutAct_9fa48("22563") ? false : stryMutAct_9fa48("22562") ? true : (stryCov_9fa48("22562", "22563", "22564"), params.count || 50)) - 1)));
    const indices = {};
    const ok = await canGet(stryMutAct_9fa48("22565") ? "" : (stryCov_9fa48("22565"), 'filter:messaging.canGetMessages'), params.callerUid, params.uid);
    if (stryMutAct_9fa48("22568") ? false : stryMutAct_9fa48("22567") ? true : stryMutAct_9fa48("22566") ? ok : (stryCov_9fa48("22566", "22567", "22568"), !ok)) {
      if (stryMutAct_9fa48("22569")) {
        {}
      } else {
        stryCov_9fa48("22569");
        return;
      }
    }
    const mids = await db.getSortedSetRevRange(stryMutAct_9fa48("22570") ? `` : (stryCov_9fa48("22570"), `uid:${params.uid}:chat:room:${params.roomId}:mids`), start, stop);
    if (stryMutAct_9fa48("22573") ? false : stryMutAct_9fa48("22572") ? true : stryMutAct_9fa48("22571") ? mids.length : (stryCov_9fa48("22571", "22572", "22573"), !mids.length)) {
      if (stryMutAct_9fa48("22574")) {
        {}
      } else {
        stryCov_9fa48("22574");
        return stryMutAct_9fa48("22575") ? ["Stryker was here"] : (stryCov_9fa48("22575"), []);
      }
    }
    mids.forEach((mid, index) => {
      if (stryMutAct_9fa48("22576")) {
        {}
      } else {
        stryCov_9fa48("22576");
        indices[mid] = stryMutAct_9fa48("22577") ? start - index : (stryCov_9fa48("22577"), start + index);
      }
    });
    stryMutAct_9fa48("22578") ? mids : (stryCov_9fa48("22578"), mids.reverse());
    const messageData = await Messaging.getMessagesData(mids, params.uid, params.roomId, isNew);
    messageData.forEach(messageData => {
      if (stryMutAct_9fa48("22579")) {
        {}
      } else {
        stryCov_9fa48("22579");
        messageData.index = indices[messageData.messageId.toString()];
        messageData.isOwner = stryMutAct_9fa48("22582") ? messageData.fromuid !== parseInt(params.uid, 10) : stryMutAct_9fa48("22581") ? false : stryMutAct_9fa48("22580") ? true : (stryCov_9fa48("22580", "22581", "22582"), messageData.fromuid === parseInt(params.uid, 10));
        if (stryMutAct_9fa48("22585") ? messageData.deleted || !messageData.isOwner : stryMutAct_9fa48("22584") ? false : stryMutAct_9fa48("22583") ? true : (stryCov_9fa48("22583", "22584", "22585"), messageData.deleted && (stryMutAct_9fa48("22586") ? messageData.isOwner : (stryCov_9fa48("22586"), !messageData.isOwner)))) {
          if (stryMutAct_9fa48("22587")) {
            {}
          } else {
            stryCov_9fa48("22587");
            messageData.content = stryMutAct_9fa48("22588") ? "" : (stryCov_9fa48("22588"), '[[modules:chat.message-deleted]]');
            messageData.cleanedContent = messageData.content;
          }
        }
      }
    });
    return messageData;
  }
};
async function canGet(hook, callerUid, uid) {
  if (stryMutAct_9fa48("22589")) {
    {}
  } else {
    stryCov_9fa48("22589");
    const data = await plugins.hooks.fire(hook, stryMutAct_9fa48("22590") ? {} : (stryCov_9fa48("22590"), {
      callerUid: callerUid,
      uid: uid,
      canGet: stryMutAct_9fa48("22593") ? parseInt(callerUid, 10) !== parseInt(uid, 10) : stryMutAct_9fa48("22592") ? false : stryMutAct_9fa48("22591") ? true : (stryCov_9fa48("22591", "22592", "22593"), parseInt(callerUid, 10) === parseInt(uid, 10))
    }));
    return data ? data.canGet : stryMutAct_9fa48("22594") ? true : (stryCov_9fa48("22594"), false);
  }
}
Messaging.parse = async (message, fromuid, uid, roomId, isNew) => {
  if (stryMutAct_9fa48("22595")) {
    {}
  } else {
    stryCov_9fa48("22595");
    const parsed = await plugins.hooks.fire(stryMutAct_9fa48("22596") ? "" : (stryCov_9fa48("22596"), 'filter:parse.raw'), String(stryMutAct_9fa48("22599") ? message && '' : stryMutAct_9fa48("22598") ? false : stryMutAct_9fa48("22597") ? true : (stryCov_9fa48("22597", "22598", "22599"), message || (stryMutAct_9fa48("22600") ? "Stryker was here!" : (stryCov_9fa48("22600"), '')))));
    let messageData = stryMutAct_9fa48("22601") ? {} : (stryCov_9fa48("22601"), {
      message: message,
      parsed: parsed,
      fromuid: fromuid,
      uid: uid,
      roomId: roomId,
      isNew: isNew,
      parsedMessage: parsed
    });
    messageData = await plugins.hooks.fire(stryMutAct_9fa48("22602") ? "" : (stryCov_9fa48("22602"), 'filter:messaging.parse'), messageData);
    return messageData ? messageData.parsedMessage : stryMutAct_9fa48("22603") ? "Stryker was here!" : (stryCov_9fa48("22603"), '');
  }
};
Messaging.isNewSet = async (uid, roomId, timestamp) => {
  if (stryMutAct_9fa48("22604")) {
    {}
  } else {
    stryCov_9fa48("22604");
    const setKey = stryMutAct_9fa48("22605") ? `` : (stryCov_9fa48("22605"), `uid:${uid}:chat:room:${roomId}:mids`);
    const messages = await db.getSortedSetRevRangeWithScores(setKey, 0, 0);
    if (stryMutAct_9fa48("22608") ? messages || messages.length : stryMutAct_9fa48("22607") ? false : stryMutAct_9fa48("22606") ? true : (stryCov_9fa48("22606", "22607", "22608"), messages && messages.length)) {
      if (stryMutAct_9fa48("22609")) {
        {}
      } else {
        stryCov_9fa48("22609");
        return stryMutAct_9fa48("22613") ? parseInt(timestamp, 10) <= parseInt(messages[0].score, 10) + Messaging.newMessageCutoff : stryMutAct_9fa48("22612") ? parseInt(timestamp, 10) >= parseInt(messages[0].score, 10) + Messaging.newMessageCutoff : stryMutAct_9fa48("22611") ? false : stryMutAct_9fa48("22610") ? true : (stryCov_9fa48("22610", "22611", "22612", "22613"), parseInt(timestamp, 10) > (stryMutAct_9fa48("22614") ? parseInt(messages[0].score, 10) - Messaging.newMessageCutoff : (stryCov_9fa48("22614"), parseInt(messages[0].score, 10) + Messaging.newMessageCutoff)));
      }
    }
    return stryMutAct_9fa48("22615") ? false : (stryCov_9fa48("22615"), true);
  }
};
Messaging.getRecentChats = async (callerUid, uid, start, stop) => {
  if (stryMutAct_9fa48("22616")) {
    {}
  } else {
    stryCov_9fa48("22616");
    const ok = await canGet(stryMutAct_9fa48("22617") ? "" : (stryCov_9fa48("22617"), 'filter:messaging.canGetRecentChats'), callerUid, uid);
    if (stryMutAct_9fa48("22620") ? false : stryMutAct_9fa48("22619") ? true : stryMutAct_9fa48("22618") ? ok : (stryCov_9fa48("22618", "22619", "22620"), !ok)) {
      if (stryMutAct_9fa48("22621")) {
        {}
      } else {
        stryCov_9fa48("22621");
        return null;
      }
    }
    const roomIds = await db.getSortedSetRevRange(stryMutAct_9fa48("22622") ? `` : (stryCov_9fa48("22622"), `uid:${uid}:chat:rooms`), start, stop);
    const results = await utils.promiseParallel(stryMutAct_9fa48("22623") ? {} : (stryCov_9fa48("22623"), {
      roomData: Messaging.getRoomsData(roomIds),
      unread: db.isSortedSetMembers(stryMutAct_9fa48("22624") ? `` : (stryCov_9fa48("22624"), `uid:${uid}:chat:rooms:unread`), roomIds),
      users: Promise.all(roomIds.map(async roomId => {
        if (stryMutAct_9fa48("22625")) {
          {}
        } else {
          stryCov_9fa48("22625");
          let uids = await db.getSortedSetRevRange(stryMutAct_9fa48("22626") ? `` : (stryCov_9fa48("22626"), `chat:room:${roomId}:uids`), 0, 9);
          uids = stryMutAct_9fa48("22627") ? uids : (stryCov_9fa48("22627"), uids.filter(stryMutAct_9fa48("22628") ? () => undefined : (stryCov_9fa48("22628"), _uid => stryMutAct_9fa48("22631") ? _uid || parseInt(_uid, 10) !== parseInt(uid, 10) : stryMutAct_9fa48("22630") ? false : stryMutAct_9fa48("22629") ? true : (stryCov_9fa48("22629", "22630", "22631"), _uid && (stryMutAct_9fa48("22633") ? parseInt(_uid, 10) === parseInt(uid, 10) : stryMutAct_9fa48("22632") ? true : (stryCov_9fa48("22632", "22633"), parseInt(_uid, 10) !== parseInt(uid, 10)))))));
          return await user.getUsersFields(uids, stryMutAct_9fa48("22634") ? [] : (stryCov_9fa48("22634"), [stryMutAct_9fa48("22635") ? "" : (stryCov_9fa48("22635"), 'uid'), stryMutAct_9fa48("22636") ? "" : (stryCov_9fa48("22636"), 'username'), stryMutAct_9fa48("22637") ? "" : (stryCov_9fa48("22637"), 'userslug'), stryMutAct_9fa48("22638") ? "" : (stryCov_9fa48("22638"), 'picture'), stryMutAct_9fa48("22639") ? "" : (stryCov_9fa48("22639"), 'status'), stryMutAct_9fa48("22640") ? "" : (stryCov_9fa48("22640"), 'lastonline')]));
        }
      })),
      teasers: Promise.all(roomIds.map(stryMutAct_9fa48("22641") ? () => undefined : (stryCov_9fa48("22641"), async roomId => Messaging.getTeaser(uid, roomId))))
    }));
    results.roomData.forEach((room, index) => {
      if (stryMutAct_9fa48("22642")) {
        {}
      } else {
        stryCov_9fa48("22642");
        if (stryMutAct_9fa48("22644") ? false : stryMutAct_9fa48("22643") ? true : (stryCov_9fa48("22643", "22644"), room)) {
          if (stryMutAct_9fa48("22645")) {
            {}
          } else {
            stryCov_9fa48("22645");
            room.users = results.users[index];
            room.groupChat = room.hasOwnProperty(stryMutAct_9fa48("22646") ? "" : (stryCov_9fa48("22646"), 'groupChat')) ? room.groupChat : stryMutAct_9fa48("22650") ? room.users.length <= 2 : stryMutAct_9fa48("22649") ? room.users.length >= 2 : stryMutAct_9fa48("22648") ? false : stryMutAct_9fa48("22647") ? true : (stryCov_9fa48("22647", "22648", "22649", "22650"), room.users.length > 2);
            room.unread = results.unread[index];
            room.teaser = results.teasers[index];
            room.users.forEach(userData => {
              if (stryMutAct_9fa48("22651")) {
                {}
              } else {
                stryCov_9fa48("22651");
                if (stryMutAct_9fa48("22654") ? userData || parseInt(userData.uid, 10) : stryMutAct_9fa48("22653") ? false : stryMutAct_9fa48("22652") ? true : (stryCov_9fa48("22652", "22653", "22654"), userData && parseInt(userData.uid, 10))) {
                  if (stryMutAct_9fa48("22655")) {
                    {}
                  } else {
                    stryCov_9fa48("22655");
                    userData.status = user.getStatus(userData);
                  }
                }
              }
            });
            room.users = stryMutAct_9fa48("22656") ? room.users : (stryCov_9fa48("22656"), room.users.filter(stryMutAct_9fa48("22657") ? () => undefined : (stryCov_9fa48("22657"), user => stryMutAct_9fa48("22660") ? user || parseInt(user.uid, 10) : stryMutAct_9fa48("22659") ? false : stryMutAct_9fa48("22658") ? true : (stryCov_9fa48("22658", "22659", "22660"), user && parseInt(user.uid, 10)))));
            room.lastUser = room.users[0];
            room.usernames = Messaging.generateUsernames(room.users, uid);
          }
        }
      }
    });
    results.roomData = stryMutAct_9fa48("22661") ? results.roomData : (stryCov_9fa48("22661"), results.roomData.filter(Boolean));
    const ref = stryMutAct_9fa48("22662") ? {} : (stryCov_9fa48("22662"), {
      rooms: results.roomData,
      nextStart: stryMutAct_9fa48("22663") ? stop - 1 : (stryCov_9fa48("22663"), stop + 1)
    });
    return await plugins.hooks.fire(stryMutAct_9fa48("22664") ? "" : (stryCov_9fa48("22664"), 'filter:messaging.getRecentChats'), stryMutAct_9fa48("22665") ? {} : (stryCov_9fa48("22665"), {
      rooms: ref.rooms,
      nextStart: ref.nextStart,
      uid: uid,
      callerUid: callerUid
    }));
  }
};
Messaging.generateUsernames = stryMutAct_9fa48("22666") ? () => undefined : (stryCov_9fa48("22666"), (users, excludeUid) => stryMutAct_9fa48("22667") ? users.map(user => user.username).join(', ') : (stryCov_9fa48("22667"), users.filter(stryMutAct_9fa48("22668") ? () => undefined : (stryCov_9fa48("22668"), user => stryMutAct_9fa48("22671") ? user || parseInt(user.uid, 10) !== excludeUid : stryMutAct_9fa48("22670") ? false : stryMutAct_9fa48("22669") ? true : (stryCov_9fa48("22669", "22670", "22671"), user && (stryMutAct_9fa48("22673") ? parseInt(user.uid, 10) === excludeUid : stryMutAct_9fa48("22672") ? true : (stryCov_9fa48("22672", "22673"), parseInt(user.uid, 10) !== excludeUid))))).map(stryMutAct_9fa48("22674") ? () => undefined : (stryCov_9fa48("22674"), user => user.username)).join(stryMutAct_9fa48("22675") ? "" : (stryCov_9fa48("22675"), ', '))));
Messaging.getTeaser = async (uid, roomId) => {
  if (stryMutAct_9fa48("22676")) {
    {}
  } else {
    stryCov_9fa48("22676");
    const mid = await Messaging.getLatestUndeletedMessage(uid, roomId);
    if (stryMutAct_9fa48("22679") ? false : stryMutAct_9fa48("22678") ? true : stryMutAct_9fa48("22677") ? mid : (stryCov_9fa48("22677", "22678", "22679"), !mid)) {
      if (stryMutAct_9fa48("22680")) {
        {}
      } else {
        stryCov_9fa48("22680");
        return null;
      }
    }
    const teaser = await Messaging.getMessageFields(mid, stryMutAct_9fa48("22681") ? [] : (stryCov_9fa48("22681"), [stryMutAct_9fa48("22682") ? "" : (stryCov_9fa48("22682"), 'fromuid'), stryMutAct_9fa48("22683") ? "" : (stryCov_9fa48("22683"), 'content'), stryMutAct_9fa48("22684") ? "" : (stryCov_9fa48("22684"), 'timestamp')]));
    if (stryMutAct_9fa48("22687") ? false : stryMutAct_9fa48("22686") ? true : stryMutAct_9fa48("22685") ? teaser.fromuid : (stryCov_9fa48("22685", "22686", "22687"), !teaser.fromuid)) {
      if (stryMutAct_9fa48("22688")) {
        {}
      } else {
        stryCov_9fa48("22688");
        return null;
      }
    }
    const blocked = await user.blocks.is(teaser.fromuid, uid);
    if (stryMutAct_9fa48("22690") ? false : stryMutAct_9fa48("22689") ? true : (stryCov_9fa48("22689", "22690"), blocked)) {
      if (stryMutAct_9fa48("22691")) {
        {}
      } else {
        stryCov_9fa48("22691");
        return null;
      }
    }
    teaser.user = await user.getUserFields(teaser.fromuid, stryMutAct_9fa48("22692") ? [] : (stryCov_9fa48("22692"), [stryMutAct_9fa48("22693") ? "" : (stryCov_9fa48("22693"), 'uid'), stryMutAct_9fa48("22694") ? "" : (stryCov_9fa48("22694"), 'username'), stryMutAct_9fa48("22695") ? "" : (stryCov_9fa48("22695"), 'userslug'), stryMutAct_9fa48("22696") ? "" : (stryCov_9fa48("22696"), 'picture'), stryMutAct_9fa48("22697") ? "" : (stryCov_9fa48("22697"), 'status'), stryMutAct_9fa48("22698") ? "" : (stryCov_9fa48("22698"), 'lastonline')]));
    if (stryMutAct_9fa48("22700") ? false : stryMutAct_9fa48("22699") ? true : (stryCov_9fa48("22699", "22700"), teaser.content)) {
      if (stryMutAct_9fa48("22701")) {
        {}
      } else {
        stryCov_9fa48("22701");
        teaser.content = utils.stripHTMLTags(utils.decodeHTMLEntities(teaser.content));
        teaser.content = validator.escape(String(teaser.content));
      }
    }
    const payload = await plugins.hooks.fire(stryMutAct_9fa48("22702") ? "" : (stryCov_9fa48("22702"), 'filter:messaging.getTeaser'), stryMutAct_9fa48("22703") ? {} : (stryCov_9fa48("22703"), {
      teaser: teaser
    }));
    return payload.teaser;
  }
};
Messaging.getLatestUndeletedMessage = async (uid, roomId) => {
  if (stryMutAct_9fa48("22704")) {
    {}
  } else {
    stryCov_9fa48("22704");
    let done = stryMutAct_9fa48("22705") ? true : (stryCov_9fa48("22705"), false);
    let latestMid = null;
    let index = 0;
    let mids;
    while (stryMutAct_9fa48("22707") ? false : stryMutAct_9fa48("22706") ? done : (stryCov_9fa48("22706", "22707"), !done)) {
      if (stryMutAct_9fa48("22708")) {
        {}
      } else {
        stryCov_9fa48("22708");
        /* eslint-disable no-await-in-loop */
        mids = await db.getSortedSetRevRange(stryMutAct_9fa48("22709") ? `` : (stryCov_9fa48("22709"), `uid:${uid}:chat:room:${roomId}:mids`), index, index);
        if (stryMutAct_9fa48("22711") ? false : stryMutAct_9fa48("22710") ? true : (stryCov_9fa48("22710", "22711"), mids.length)) {
          if (stryMutAct_9fa48("22712")) {
            {}
          } else {
            stryCov_9fa48("22712");
            const states = await Messaging.getMessageFields(mids[0], stryMutAct_9fa48("22713") ? [] : (stryCov_9fa48("22713"), [stryMutAct_9fa48("22714") ? "" : (stryCov_9fa48("22714"), 'deleted'), stryMutAct_9fa48("22715") ? "" : (stryCov_9fa48("22715"), 'system')]));
            done = stryMutAct_9fa48("22718") ? !states.deleted || !states.system : stryMutAct_9fa48("22717") ? false : stryMutAct_9fa48("22716") ? true : (stryCov_9fa48("22716", "22717", "22718"), (stryMutAct_9fa48("22719") ? states.deleted : (stryCov_9fa48("22719"), !states.deleted)) && (stryMutAct_9fa48("22720") ? states.system : (stryCov_9fa48("22720"), !states.system)));
            if (stryMutAct_9fa48("22722") ? false : stryMutAct_9fa48("22721") ? true : (stryCov_9fa48("22721", "22722"), done)) {
              if (stryMutAct_9fa48("22723")) {
                {}
              } else {
                stryCov_9fa48("22723");
                latestMid = mids[0];
              }
            }
            stryMutAct_9fa48("22724") ? index -= 1 : (stryCov_9fa48("22724"), index += 1);
          }
        } else {
          if (stryMutAct_9fa48("22725")) {
            {}
          } else {
            stryCov_9fa48("22725");
            done = stryMutAct_9fa48("22726") ? false : (stryCov_9fa48("22726"), true);
          }
        }
      }
    }
    return latestMid;
  }
};
Messaging.canMessageUser = async (uid, toUid) => {
  if (stryMutAct_9fa48("22727")) {
    {}
  } else {
    stryCov_9fa48("22727");
    if (stryMutAct_9fa48("22730") ? meta.config.disableChat && uid <= 0 : stryMutAct_9fa48("22729") ? false : stryMutAct_9fa48("22728") ? true : (stryCov_9fa48("22728", "22729", "22730"), meta.config.disableChat || (stryMutAct_9fa48("22733") ? uid > 0 : stryMutAct_9fa48("22732") ? uid < 0 : stryMutAct_9fa48("22731") ? false : (stryCov_9fa48("22731", "22732", "22733"), uid <= 0)))) {
      if (stryMutAct_9fa48("22734")) {
        {}
      } else {
        stryCov_9fa48("22734");
        throw new Error(stryMutAct_9fa48("22735") ? "" : (stryCov_9fa48("22735"), '[[error:chat-disabled]]'));
      }
    }
    if (stryMutAct_9fa48("22738") ? parseInt(uid, 10) !== parseInt(toUid, 10) : stryMutAct_9fa48("22737") ? false : stryMutAct_9fa48("22736") ? true : (stryCov_9fa48("22736", "22737", "22738"), parseInt(uid, 10) === parseInt(toUid, 10))) {
      if (stryMutAct_9fa48("22739")) {
        {}
      } else {
        stryCov_9fa48("22739");
        throw new Error(stryMutAct_9fa48("22740") ? "" : (stryCov_9fa48("22740"), '[[error:cant-chat-with-yourself]]'));
      }
    }
    const [exists, canChat] = await Promise.all(stryMutAct_9fa48("22741") ? [] : (stryCov_9fa48("22741"), [user.exists(toUid), privileges.global.can(stryMutAct_9fa48("22742") ? "" : (stryCov_9fa48("22742"), 'chat'), uid), checkReputation(uid)]));
    if (stryMutAct_9fa48("22745") ? false : stryMutAct_9fa48("22744") ? true : stryMutAct_9fa48("22743") ? exists : (stryCov_9fa48("22743", "22744", "22745"), !exists)) {
      if (stryMutAct_9fa48("22746")) {
        {}
      } else {
        stryCov_9fa48("22746");
        throw new Error(stryMutAct_9fa48("22747") ? "" : (stryCov_9fa48("22747"), '[[error:no-user]]'));
      }
    }
    if (stryMutAct_9fa48("22750") ? false : stryMutAct_9fa48("22749") ? true : stryMutAct_9fa48("22748") ? canChat : (stryCov_9fa48("22748", "22749", "22750"), !canChat)) {
      if (stryMutAct_9fa48("22751")) {
        {}
      } else {
        stryCov_9fa48("22751");
        throw new Error(stryMutAct_9fa48("22752") ? "" : (stryCov_9fa48("22752"), '[[error:no-privileges]]'));
      }
    }
    const [settings, isAdmin, isModerator, isFollowing, isBlocked] = await Promise.all(stryMutAct_9fa48("22753") ? [] : (stryCov_9fa48("22753"), [user.getSettings(toUid), user.isAdministrator(uid), user.isModeratorOfAnyCategory(uid), user.isFollowing(toUid, uid), user.blocks.is(uid, toUid)]));
    if (stryMutAct_9fa48("22756") ? isBlocked && settings.restrictChat && !isAdmin && !isModerator && !isFollowing : stryMutAct_9fa48("22755") ? false : stryMutAct_9fa48("22754") ? true : (stryCov_9fa48("22754", "22755", "22756"), isBlocked || (stryMutAct_9fa48("22758") ? settings.restrictChat && !isAdmin && !isModerator || !isFollowing : stryMutAct_9fa48("22757") ? false : (stryCov_9fa48("22757", "22758"), (stryMutAct_9fa48("22760") ? settings.restrictChat && !isAdmin || !isModerator : stryMutAct_9fa48("22759") ? true : (stryCov_9fa48("22759", "22760"), (stryMutAct_9fa48("22762") ? settings.restrictChat || !isAdmin : stryMutAct_9fa48("22761") ? true : (stryCov_9fa48("22761", "22762"), settings.restrictChat && (stryMutAct_9fa48("22763") ? isAdmin : (stryCov_9fa48("22763"), !isAdmin)))) && (stryMutAct_9fa48("22764") ? isModerator : (stryCov_9fa48("22764"), !isModerator)))) && (stryMutAct_9fa48("22765") ? isFollowing : (stryCov_9fa48("22765"), !isFollowing)))))) {
      if (stryMutAct_9fa48("22766")) {
        {}
      } else {
        stryCov_9fa48("22766");
        throw new Error(stryMutAct_9fa48("22767") ? "" : (stryCov_9fa48("22767"), '[[error:chat-restricted]]'));
      }
    }
    await plugins.hooks.fire(stryMutAct_9fa48("22768") ? "" : (stryCov_9fa48("22768"), 'static:messaging.canMessageUser'), stryMutAct_9fa48("22769") ? {} : (stryCov_9fa48("22769"), {
      uid: uid,
      toUid: toUid
    }));
  }
};
Messaging.canMessageRoom = async (uid, roomId) => {
  if (stryMutAct_9fa48("22770")) {
    {}
  } else {
    stryCov_9fa48("22770");
    if (stryMutAct_9fa48("22773") ? meta.config.disableChat && uid <= 0 : stryMutAct_9fa48("22772") ? false : stryMutAct_9fa48("22771") ? true : (stryCov_9fa48("22771", "22772", "22773"), meta.config.disableChat || (stryMutAct_9fa48("22776") ? uid > 0 : stryMutAct_9fa48("22775") ? uid < 0 : stryMutAct_9fa48("22774") ? false : (stryCov_9fa48("22774", "22775", "22776"), uid <= 0)))) {
      if (stryMutAct_9fa48("22777")) {
        {}
      } else {
        stryCov_9fa48("22777");
        throw new Error(stryMutAct_9fa48("22778") ? "" : (stryCov_9fa48("22778"), '[[error:chat-disabled]]'));
      }
    }
    const [inRoom, canChat] = await Promise.all(stryMutAct_9fa48("22779") ? [] : (stryCov_9fa48("22779"), [Messaging.isUserInRoom(uid, roomId), privileges.global.can(stryMutAct_9fa48("22780") ? "" : (stryCov_9fa48("22780"), 'chat'), uid), checkReputation(uid)]));
    if (stryMutAct_9fa48("22783") ? false : stryMutAct_9fa48("22782") ? true : stryMutAct_9fa48("22781") ? inRoom : (stryCov_9fa48("22781", "22782", "22783"), !inRoom)) {
      if (stryMutAct_9fa48("22784")) {
        {}
      } else {
        stryCov_9fa48("22784");
        throw new Error(stryMutAct_9fa48("22785") ? "" : (stryCov_9fa48("22785"), '[[error:not-in-room]]'));
      }
    }
    if (stryMutAct_9fa48("22788") ? false : stryMutAct_9fa48("22787") ? true : stryMutAct_9fa48("22786") ? canChat : (stryCov_9fa48("22786", "22787", "22788"), !canChat)) {
      if (stryMutAct_9fa48("22789")) {
        {}
      } else {
        stryCov_9fa48("22789");
        throw new Error(stryMutAct_9fa48("22790") ? "" : (stryCov_9fa48("22790"), '[[error:no-privileges]]'));
      }
    }
    await plugins.hooks.fire(stryMutAct_9fa48("22791") ? "" : (stryCov_9fa48("22791"), 'static:messaging.canMessageRoom'), stryMutAct_9fa48("22792") ? {} : (stryCov_9fa48("22792"), {
      uid: uid,
      roomId: roomId
    }));
  }
};
async function checkReputation(uid) {
  if (stryMutAct_9fa48("22793")) {
    {}
  } else {
    stryCov_9fa48("22793");
    if (stryMutAct_9fa48("22797") ? meta.config['min:rep:chat'] <= 0 : stryMutAct_9fa48("22796") ? meta.config['min:rep:chat'] >= 0 : stryMutAct_9fa48("22795") ? false : stryMutAct_9fa48("22794") ? true : (stryCov_9fa48("22794", "22795", "22796", "22797"), meta.config[stryMutAct_9fa48("22798") ? "" : (stryCov_9fa48("22798"), 'min:rep:chat')] > 0)) {
      if (stryMutAct_9fa48("22799")) {
        {}
      } else {
        stryCov_9fa48("22799");
        const reputation = await user.getUserField(uid, stryMutAct_9fa48("22800") ? "" : (stryCov_9fa48("22800"), 'reputation'));
        if (stryMutAct_9fa48("22804") ? meta.config['min:rep:chat'] <= reputation : stryMutAct_9fa48("22803") ? meta.config['min:rep:chat'] >= reputation : stryMutAct_9fa48("22802") ? false : stryMutAct_9fa48("22801") ? true : (stryCov_9fa48("22801", "22802", "22803", "22804"), meta.config[stryMutAct_9fa48("22805") ? "" : (stryCov_9fa48("22805"), 'min:rep:chat')] > reputation)) {
          if (stryMutAct_9fa48("22806")) {
            {}
          } else {
            stryCov_9fa48("22806");
            throw new Error(stryMutAct_9fa48("22807") ? `` : (stryCov_9fa48("22807"), `[[error:not-enough-reputation-to-chat, ${meta.config[stryMutAct_9fa48("22808") ? "" : (stryCov_9fa48("22808"), 'min:rep:chat')]}]]`));
          }
        }
      }
    }
  }
}
Messaging.hasPrivateChat = async (uid, withUid) => {
  if (stryMutAct_9fa48("22809")) {
    {}
  } else {
    stryCov_9fa48("22809");
    if (stryMutAct_9fa48("22812") ? parseInt(uid, 10) !== parseInt(withUid, 10) : stryMutAct_9fa48("22811") ? false : stryMutAct_9fa48("22810") ? true : (stryCov_9fa48("22810", "22811", "22812"), parseInt(uid, 10) === parseInt(withUid, 10))) {
      if (stryMutAct_9fa48("22813")) {
        {}
      } else {
        stryCov_9fa48("22813");
        return 0;
      }
    }
    const results = await utils.promiseParallel(stryMutAct_9fa48("22814") ? {} : (stryCov_9fa48("22814"), {
      myRooms: db.getSortedSetRevRange(stryMutAct_9fa48("22815") ? `` : (stryCov_9fa48("22815"), `uid:${uid}:chat:rooms`), 0, stryMutAct_9fa48("22816") ? +1 : (stryCov_9fa48("22816"), -1)),
      theirRooms: db.getSortedSetRevRange(stryMutAct_9fa48("22817") ? `` : (stryCov_9fa48("22817"), `uid:${withUid}:chat:rooms`), 0, stryMutAct_9fa48("22818") ? +1 : (stryCov_9fa48("22818"), -1))
    }));
    const roomIds = stryMutAct_9fa48("22819") ? results.myRooms : (stryCov_9fa48("22819"), results.myRooms.filter(stryMutAct_9fa48("22820") ? () => undefined : (stryCov_9fa48("22820"), roomId => stryMutAct_9fa48("22823") ? roomId || results.theirRooms.includes(roomId) : stryMutAct_9fa48("22822") ? false : stryMutAct_9fa48("22821") ? true : (stryCov_9fa48("22821", "22822", "22823"), roomId && results.theirRooms.includes(roomId)))));
    if (stryMutAct_9fa48("22826") ? false : stryMutAct_9fa48("22825") ? true : stryMutAct_9fa48("22824") ? roomIds.length : (stryCov_9fa48("22824", "22825", "22826"), !roomIds.length)) {
      if (stryMutAct_9fa48("22827")) {
        {}
      } else {
        stryCov_9fa48("22827");
        return 0;
      }
    }
    let index = 0;
    let roomId = 0;
    while (stryMutAct_9fa48("22829") ? index < roomIds.length || !roomId : stryMutAct_9fa48("22828") ? false : (stryCov_9fa48("22828", "22829"), (stryMutAct_9fa48("22832") ? index >= roomIds.length : stryMutAct_9fa48("22831") ? index <= roomIds.length : stryMutAct_9fa48("22830") ? true : (stryCov_9fa48("22830", "22831", "22832"), index < roomIds.length)) && (stryMutAct_9fa48("22833") ? roomId : (stryCov_9fa48("22833"), !roomId)))) {
      if (stryMutAct_9fa48("22834")) {
        {}
      } else {
        stryCov_9fa48("22834");
        /* eslint-disable no-await-in-loop */
        const count = await Messaging.getUserCountInRoom(roomIds[index]);
        if (stryMutAct_9fa48("22837") ? count !== 2 : stryMutAct_9fa48("22836") ? false : stryMutAct_9fa48("22835") ? true : (stryCov_9fa48("22835", "22836", "22837"), count === 2)) {
          if (stryMutAct_9fa48("22838")) {
            {}
          } else {
            stryCov_9fa48("22838");
            roomId = roomIds[index];
          }
        } else {
          if (stryMutAct_9fa48("22839")) {
            {}
          } else {
            stryCov_9fa48("22839");
            stryMutAct_9fa48("22840") ? index -= 1 : (stryCov_9fa48("22840"), index += 1);
          }
        }
      }
    }
    return roomId;
  }
};
Messaging.canViewMessage = async (mids, roomId, uid) => {
  if (stryMutAct_9fa48("22841")) {
    {}
  } else {
    stryCov_9fa48("22841");
    let single = stryMutAct_9fa48("22842") ? true : (stryCov_9fa48("22842"), false);
    if (stryMutAct_9fa48("22845") ? !Array.isArray(mids) || isFinite(mids) : stryMutAct_9fa48("22844") ? false : stryMutAct_9fa48("22843") ? true : (stryCov_9fa48("22843", "22844", "22845"), (stryMutAct_9fa48("22846") ? Array.isArray(mids) : (stryCov_9fa48("22846"), !Array.isArray(mids))) && isFinite(mids))) {
      if (stryMutAct_9fa48("22847")) {
        {}
      } else {
        stryCov_9fa48("22847");
        mids = stryMutAct_9fa48("22848") ? [] : (stryCov_9fa48("22848"), [mids]);
        single = stryMutAct_9fa48("22849") ? false : (stryCov_9fa48("22849"), true);
      }
    }
    const canView = await db.isSortedSetMembers(stryMutAct_9fa48("22850") ? `` : (stryCov_9fa48("22850"), `uid:${uid}:chat:room:${roomId}:mids`), mids);
    return single ? canView.pop() : canView;
  }
};
require('../promisify')(Messaging);