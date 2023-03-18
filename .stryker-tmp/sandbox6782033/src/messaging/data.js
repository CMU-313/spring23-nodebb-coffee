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
const utils = require('../utils');
const plugins = require('../plugins');
const intFields = stryMutAct_9fa48("22263") ? [] : (stryCov_9fa48("22263"), [stryMutAct_9fa48("22264") ? "" : (stryCov_9fa48("22264"), 'timestamp'), stryMutAct_9fa48("22265") ? "" : (stryCov_9fa48("22265"), 'edited'), stryMutAct_9fa48("22266") ? "" : (stryCov_9fa48("22266"), 'fromuid'), stryMutAct_9fa48("22267") ? "" : (stryCov_9fa48("22267"), 'roomId'), stryMutAct_9fa48("22268") ? "" : (stryCov_9fa48("22268"), 'deleted'), stryMutAct_9fa48("22269") ? "" : (stryCov_9fa48("22269"), 'system')]);
module.exports = function (Messaging) {
  if (stryMutAct_9fa48("22270")) {
    {}
  } else {
    stryCov_9fa48("22270");
    Messaging.newMessageCutoff = stryMutAct_9fa48("22271") ? 1000 * 60 / 3 : (stryCov_9fa48("22271"), (stryMutAct_9fa48("22272") ? 1000 / 60 : (stryCov_9fa48("22272"), 1000 * 60)) * 3);
    Messaging.getMessagesFields = async (mids, fields) => {
      if (stryMutAct_9fa48("22273")) {
        {}
      } else {
        stryCov_9fa48("22273");
        if (stryMutAct_9fa48("22276") ? !Array.isArray(mids) && !mids.length : stryMutAct_9fa48("22275") ? false : stryMutAct_9fa48("22274") ? true : (stryCov_9fa48("22274", "22275", "22276"), (stryMutAct_9fa48("22277") ? Array.isArray(mids) : (stryCov_9fa48("22277"), !Array.isArray(mids))) || (stryMutAct_9fa48("22278") ? mids.length : (stryCov_9fa48("22278"), !mids.length)))) {
          if (stryMutAct_9fa48("22279")) {
            {}
          } else {
            stryCov_9fa48("22279");
            return stryMutAct_9fa48("22280") ? ["Stryker was here"] : (stryCov_9fa48("22280"), []);
          }
        }
        const keys = mids.map(stryMutAct_9fa48("22281") ? () => undefined : (stryCov_9fa48("22281"), mid => stryMutAct_9fa48("22282") ? `` : (stryCov_9fa48("22282"), `message:${mid}`)));
        const messages = await db.getObjects(keys, fields);
        return await Promise.all(messages.map(stryMutAct_9fa48("22283") ? () => undefined : (stryCov_9fa48("22283"), async (message, idx) => modifyMessage(message, fields, parseInt(mids[idx], 10)))));
      }
    };
    Messaging.getMessageField = async (mid, field) => {
      if (stryMutAct_9fa48("22284")) {
        {}
      } else {
        stryCov_9fa48("22284");
        const fields = await Messaging.getMessageFields(mid, stryMutAct_9fa48("22285") ? [] : (stryCov_9fa48("22285"), [field]));
        return fields ? fields[field] : null;
      }
    };
    Messaging.getMessageFields = async (mid, fields) => {
      if (stryMutAct_9fa48("22286")) {
        {}
      } else {
        stryCov_9fa48("22286");
        const messages = await Messaging.getMessagesFields(stryMutAct_9fa48("22287") ? [] : (stryCov_9fa48("22287"), [mid]), fields);
        return messages ? messages[0] : null;
      }
    };
    Messaging.setMessageField = async (mid, field, content) => {
      if (stryMutAct_9fa48("22288")) {
        {}
      } else {
        stryCov_9fa48("22288");
        await db.setObjectField(stryMutAct_9fa48("22289") ? `` : (stryCov_9fa48("22289"), `message:${mid}`), field, content);
      }
    };
    Messaging.setMessageFields = async (mid, data) => {
      if (stryMutAct_9fa48("22290")) {
        {}
      } else {
        stryCov_9fa48("22290");
        await db.setObject(stryMutAct_9fa48("22291") ? `` : (stryCov_9fa48("22291"), `message:${mid}`), data);
      }
    };
    Messaging.getMessagesData = async (mids, uid, roomId, isNew) => {
      if (stryMutAct_9fa48("22292")) {
        {}
      } else {
        stryCov_9fa48("22292");
        let messages = await Messaging.getMessagesFields(mids, stryMutAct_9fa48("22293") ? ["Stryker was here"] : (stryCov_9fa48("22293"), []));
        messages = await (stryMutAct_9fa48("22294") ? user.blocks : (stryCov_9fa48("22294"), user.blocks.filter(uid, stryMutAct_9fa48("22295") ? "" : (stryCov_9fa48("22295"), 'fromuid'), messages)));
        messages = stryMutAct_9fa48("22296") ? messages.map((msg, idx) => {
          if (msg) {
            msg.messageId = parseInt(mids[idx], 10);
            msg.ip = undefined;
          }
          return msg;
        }) : (stryCov_9fa48("22296"), messages.map((msg, idx) => {
          if (stryMutAct_9fa48("22297")) {
            {}
          } else {
            stryCov_9fa48("22297");
            if (stryMutAct_9fa48("22299") ? false : stryMutAct_9fa48("22298") ? true : (stryCov_9fa48("22298", "22299"), msg)) {
              if (stryMutAct_9fa48("22300")) {
                {}
              } else {
                stryCov_9fa48("22300");
                msg.messageId = parseInt(mids[idx], 10);
                msg.ip = undefined;
              }
            }
            return msg;
          }
        }).filter(Boolean));
        const users = await user.getUsersFields(messages.map(stryMutAct_9fa48("22301") ? () => undefined : (stryCov_9fa48("22301"), msg => stryMutAct_9fa48("22304") ? msg || msg.fromuid : stryMutAct_9fa48("22303") ? false : stryMutAct_9fa48("22302") ? true : (stryCov_9fa48("22302", "22303", "22304"), msg && msg.fromuid))), stryMutAct_9fa48("22305") ? [] : (stryCov_9fa48("22305"), [stryMutAct_9fa48("22306") ? "" : (stryCov_9fa48("22306"), 'uid'), stryMutAct_9fa48("22307") ? "" : (stryCov_9fa48("22307"), 'username'), stryMutAct_9fa48("22308") ? "" : (stryCov_9fa48("22308"), 'userslug'), stryMutAct_9fa48("22309") ? "" : (stryCov_9fa48("22309"), 'picture'), stryMutAct_9fa48("22310") ? "" : (stryCov_9fa48("22310"), 'status'), stryMutAct_9fa48("22311") ? "" : (stryCov_9fa48("22311"), 'banned')]));
        messages.forEach((message, index) => {
          if (stryMutAct_9fa48("22312")) {
            {}
          } else {
            stryCov_9fa48("22312");
            message.fromUser = users[index];
            message.fromUser.banned = stryMutAct_9fa48("22313") ? !message.fromUser.banned : (stryCov_9fa48("22313"), !(stryMutAct_9fa48("22314") ? message.fromUser.banned : (stryCov_9fa48("22314"), !message.fromUser.banned)));
            message.fromUser.deleted = stryMutAct_9fa48("22317") ? message.fromuid !== message.fromUser.uid || message.fromUser.uid === 0 : stryMutAct_9fa48("22316") ? false : stryMutAct_9fa48("22315") ? true : (stryCov_9fa48("22315", "22316", "22317"), (stryMutAct_9fa48("22319") ? message.fromuid === message.fromUser.uid : stryMutAct_9fa48("22318") ? true : (stryCov_9fa48("22318", "22319"), message.fromuid !== message.fromUser.uid)) && (stryMutAct_9fa48("22321") ? message.fromUser.uid !== 0 : stryMutAct_9fa48("22320") ? true : (stryCov_9fa48("22320", "22321"), message.fromUser.uid === 0)));
            const self = stryMutAct_9fa48("22324") ? message.fromuid !== parseInt(uid, 10) : stryMutAct_9fa48("22323") ? false : stryMutAct_9fa48("22322") ? true : (stryCov_9fa48("22322", "22323", "22324"), message.fromuid === parseInt(uid, 10));
            message.self = self ? 1 : 0;
            message.newSet = stryMutAct_9fa48("22325") ? true : (stryCov_9fa48("22325"), false);
            message.roomId = String(stryMutAct_9fa48("22328") ? message.roomId && roomId : stryMutAct_9fa48("22327") ? false : stryMutAct_9fa48("22326") ? true : (stryCov_9fa48("22326", "22327", "22328"), message.roomId || roomId));
            message.deleted = stryMutAct_9fa48("22329") ? !message.deleted : (stryCov_9fa48("22329"), !(stryMutAct_9fa48("22330") ? message.deleted : (stryCov_9fa48("22330"), !message.deleted)));
            message.system = stryMutAct_9fa48("22331") ? !message.system : (stryCov_9fa48("22331"), !(stryMutAct_9fa48("22332") ? message.system : (stryCov_9fa48("22332"), !message.system)));
          }
        });
        messages = await Promise.all(messages.map(async message => {
          if (stryMutAct_9fa48("22333")) {
            {}
          } else {
            stryCov_9fa48("22333");
            if (stryMutAct_9fa48("22335") ? false : stryMutAct_9fa48("22334") ? true : (stryCov_9fa48("22334", "22335"), message.system)) {
              if (stryMutAct_9fa48("22336")) {
                {}
              } else {
                stryCov_9fa48("22336");
                message.content = validator.escape(String(message.content));
                message.cleanedContent = utils.stripHTMLTags(utils.decodeHTMLEntities(message.content));
                return message;
              }
            }
            const result = await Messaging.parse(message.content, message.fromuid, uid, roomId, isNew);
            message.content = result;
            message.cleanedContent = utils.stripHTMLTags(utils.decodeHTMLEntities(result));
            return message;
          }
        }));
        if (stryMutAct_9fa48("22340") ? messages.length <= 1 : stryMutAct_9fa48("22339") ? messages.length >= 1 : stryMutAct_9fa48("22338") ? false : stryMutAct_9fa48("22337") ? true : (stryCov_9fa48("22337", "22338", "22339", "22340"), messages.length > 1)) {
          if (stryMutAct_9fa48("22341")) {
            {}
          } else {
            stryCov_9fa48("22341");
            // Add a spacer in between messages with time gaps between them
            messages = messages.map((message, index) => {
              if (stryMutAct_9fa48("22342")) {
                {}
              } else {
                stryCov_9fa48("22342");
                // Compare timestamps with the previous message, and check if a spacer needs to be added
                if (stryMutAct_9fa48("22345") ? index > 0 || message.timestamp > messages[index - 1].timestamp + Messaging.newMessageCutoff : stryMutAct_9fa48("22344") ? false : stryMutAct_9fa48("22343") ? true : (stryCov_9fa48("22343", "22344", "22345"), (stryMutAct_9fa48("22348") ? index <= 0 : stryMutAct_9fa48("22347") ? index >= 0 : stryMutAct_9fa48("22346") ? true : (stryCov_9fa48("22346", "22347", "22348"), index > 0)) && (stryMutAct_9fa48("22351") ? message.timestamp <= messages[index - 1].timestamp + Messaging.newMessageCutoff : stryMutAct_9fa48("22350") ? message.timestamp >= messages[index - 1].timestamp + Messaging.newMessageCutoff : stryMutAct_9fa48("22349") ? true : (stryCov_9fa48("22349", "22350", "22351"), message.timestamp > (stryMutAct_9fa48("22352") ? messages[index - 1].timestamp - Messaging.newMessageCutoff : (stryCov_9fa48("22352"), messages[stryMutAct_9fa48("22353") ? index + 1 : (stryCov_9fa48("22353"), index - 1)].timestamp + Messaging.newMessageCutoff)))))) {
                  if (stryMutAct_9fa48("22354")) {
                    {}
                  } else {
                    stryCov_9fa48("22354");
                    // If it's been 5 minutes, this is a new set of messages
                    message.newSet = stryMutAct_9fa48("22355") ? false : (stryCov_9fa48("22355"), true);
                  }
                } else if (stryMutAct_9fa48("22358") ? index > 0 || message.fromuid !== messages[index - 1].fromuid : stryMutAct_9fa48("22357") ? false : stryMutAct_9fa48("22356") ? true : (stryCov_9fa48("22356", "22357", "22358"), (stryMutAct_9fa48("22361") ? index <= 0 : stryMutAct_9fa48("22360") ? index >= 0 : stryMutAct_9fa48("22359") ? true : (stryCov_9fa48("22359", "22360", "22361"), index > 0)) && (stryMutAct_9fa48("22363") ? message.fromuid === messages[index - 1].fromuid : stryMutAct_9fa48("22362") ? true : (stryCov_9fa48("22362", "22363"), message.fromuid !== messages[stryMutAct_9fa48("22364") ? index + 1 : (stryCov_9fa48("22364"), index - 1)].fromuid)))) {
                  if (stryMutAct_9fa48("22365")) {
                    {}
                  } else {
                    stryCov_9fa48("22365");
                    // If the previous message was from the other person, this is also a new set
                    message.newSet = stryMutAct_9fa48("22366") ? false : (stryCov_9fa48("22366"), true);
                  }
                } else if (stryMutAct_9fa48("22369") ? index !== 0 : stryMutAct_9fa48("22368") ? false : stryMutAct_9fa48("22367") ? true : (stryCov_9fa48("22367", "22368", "22369"), index === 0)) {
                  if (stryMutAct_9fa48("22370")) {
                    {}
                  } else {
                    stryCov_9fa48("22370");
                    message.newSet = stryMutAct_9fa48("22371") ? false : (stryCov_9fa48("22371"), true);
                  }
                }
                return message;
              }
            });
          }
        } else if (stryMutAct_9fa48("22374") ? messages.length !== 1 : stryMutAct_9fa48("22373") ? false : stryMutAct_9fa48("22372") ? true : (stryCov_9fa48("22372", "22373", "22374"), messages.length === 1)) {
          if (stryMutAct_9fa48("22375")) {
            {}
          } else {
            stryCov_9fa48("22375");
            // For single messages, we don't know the context, so look up the previous message and compare
            const key = stryMutAct_9fa48("22376") ? `` : (stryCov_9fa48("22376"), `uid:${uid}:chat:room:${roomId}:mids`);
            const index = await db.sortedSetRank(key, messages[0].messageId);
            if (stryMutAct_9fa48("22380") ? index <= 0 : stryMutAct_9fa48("22379") ? index >= 0 : stryMutAct_9fa48("22378") ? false : stryMutAct_9fa48("22377") ? true : (stryCov_9fa48("22377", "22378", "22379", "22380"), index > 0)) {
              if (stryMutAct_9fa48("22381")) {
                {}
              } else {
                stryCov_9fa48("22381");
                const mid = await db.getSortedSetRange(key, stryMutAct_9fa48("22382") ? index + 1 : (stryCov_9fa48("22382"), index - 1), stryMutAct_9fa48("22383") ? index + 1 : (stryCov_9fa48("22383"), index - 1));
                const fields = await Messaging.getMessageFields(mid, stryMutAct_9fa48("22384") ? [] : (stryCov_9fa48("22384"), [stryMutAct_9fa48("22385") ? "" : (stryCov_9fa48("22385"), 'fromuid'), stryMutAct_9fa48("22386") ? "" : (stryCov_9fa48("22386"), 'timestamp')]));
                if (stryMutAct_9fa48("22389") ? messages[0].timestamp > fields.timestamp + Messaging.newMessageCutoff && messages[0].fromuid !== fields.fromuid : stryMutAct_9fa48("22388") ? false : stryMutAct_9fa48("22387") ? true : (stryCov_9fa48("22387", "22388", "22389"), (stryMutAct_9fa48("22392") ? messages[0].timestamp <= fields.timestamp + Messaging.newMessageCutoff : stryMutAct_9fa48("22391") ? messages[0].timestamp >= fields.timestamp + Messaging.newMessageCutoff : stryMutAct_9fa48("22390") ? false : (stryCov_9fa48("22390", "22391", "22392"), messages[0].timestamp > (stryMutAct_9fa48("22393") ? fields.timestamp - Messaging.newMessageCutoff : (stryCov_9fa48("22393"), fields.timestamp + Messaging.newMessageCutoff)))) || (stryMutAct_9fa48("22395") ? messages[0].fromuid === fields.fromuid : stryMutAct_9fa48("22394") ? false : (stryCov_9fa48("22394", "22395"), messages[0].fromuid !== fields.fromuid)))) {
                  if (stryMutAct_9fa48("22396")) {
                    {}
                  } else {
                    stryCov_9fa48("22396");
                    // If it's been 5 minutes, this is a new set of messages
                    messages[0].newSet = stryMutAct_9fa48("22397") ? false : (stryCov_9fa48("22397"), true);
                  }
                }
              }
            } else {
              if (stryMutAct_9fa48("22398")) {
                {}
              } else {
                stryCov_9fa48("22398");
                messages[0].newSet = stryMutAct_9fa48("22399") ? false : (stryCov_9fa48("22399"), true);
              }
            }
          }
        } else {
          if (stryMutAct_9fa48("22400")) {
            {}
          } else {
            stryCov_9fa48("22400");
            messages = stryMutAct_9fa48("22401") ? ["Stryker was here"] : (stryCov_9fa48("22401"), []);
          }
        }
        const data = await plugins.hooks.fire(stryMutAct_9fa48("22402") ? "" : (stryCov_9fa48("22402"), 'filter:messaging.getMessages'), stryMutAct_9fa48("22403") ? {} : (stryCov_9fa48("22403"), {
          messages: messages,
          uid: uid,
          roomId: roomId,
          isNew: isNew,
          mids: mids
        }));
        return stryMutAct_9fa48("22406") ? data || data.messages : stryMutAct_9fa48("22405") ? false : stryMutAct_9fa48("22404") ? true : (stryCov_9fa48("22404", "22405", "22406"), data && data.messages);
      }
    };
  }
};
async function modifyMessage(message, fields, mid) {
  if (stryMutAct_9fa48("22407")) {
    {}
  } else {
    stryCov_9fa48("22407");
    if (stryMutAct_9fa48("22409") ? false : stryMutAct_9fa48("22408") ? true : (stryCov_9fa48("22408", "22409"), message)) {
      if (stryMutAct_9fa48("22410")) {
        {}
      } else {
        stryCov_9fa48("22410");
        db.parseIntFields(message, intFields, fields);
        if (stryMutAct_9fa48("22412") ? false : stryMutAct_9fa48("22411") ? true : (stryCov_9fa48("22411", "22412"), message.hasOwnProperty(stryMutAct_9fa48("22413") ? "" : (stryCov_9fa48("22413"), 'timestamp')))) {
          if (stryMutAct_9fa48("22414")) {
            {}
          } else {
            stryCov_9fa48("22414");
            message.timestampISO = utils.toISOString(message.timestamp);
          }
        }
        if (stryMutAct_9fa48("22416") ? false : stryMutAct_9fa48("22415") ? true : (stryCov_9fa48("22415", "22416"), message.hasOwnProperty(stryMutAct_9fa48("22417") ? "" : (stryCov_9fa48("22417"), 'edited')))) {
          if (stryMutAct_9fa48("22418")) {
            {}
          } else {
            stryCov_9fa48("22418");
            message.editedISO = utils.toISOString(message.edited);
          }
        }
      }
    }
    const payload = await plugins.hooks.fire(stryMutAct_9fa48("22419") ? "" : (stryCov_9fa48("22419"), 'filter:messaging.getFields'), stryMutAct_9fa48("22420") ? {} : (stryCov_9fa48("22420"), {
      mid: mid,
      message: message,
      fields: fields
    }));
    return payload.message;
  }
}