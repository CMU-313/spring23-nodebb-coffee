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
const winston = require('winston');
const nconf = require('nconf');
const db = require('../database');
const batch = require('../batch');
const meta = require('../meta');
const user = require('./index');
const topics = require('../topics');
const plugins = require('../plugins');
const emailer = require('../emailer');
const utils = require('../utils');
const Digest = module.exports;
const baseUrl = nconf.get(stryMutAct_9fa48("46584") ? "" : (stryCov_9fa48("46584"), 'base_url'));
Digest.execute = async function (payload) {
  if (stryMutAct_9fa48("46585")) {
    {}
  } else {
    stryCov_9fa48("46585");
    const digestsDisabled = stryMutAct_9fa48("46588") ? meta.config.disableEmailSubscriptions !== 1 : stryMutAct_9fa48("46587") ? false : stryMutAct_9fa48("46586") ? true : (stryCov_9fa48("46586", "46587", "46588"), meta.config.disableEmailSubscriptions === 1);
    if (stryMutAct_9fa48("46590") ? false : stryMutAct_9fa48("46589") ? true : (stryCov_9fa48("46589", "46590"), digestsDisabled)) {
      if (stryMutAct_9fa48("46591")) {
        {}
      } else {
        stryCov_9fa48("46591");
        winston.info(stryMutAct_9fa48("46592") ? `` : (stryCov_9fa48("46592"), `[user/jobs] Did not send digests (${payload.interval}) because subscription system is disabled.`));
        return;
      }
    }
    let {
      subscribers
    } = payload;
    if (stryMutAct_9fa48("46595") ? false : stryMutAct_9fa48("46594") ? true : stryMutAct_9fa48("46593") ? subscribers : (stryCov_9fa48("46593", "46594", "46595"), !subscribers)) {
      if (stryMutAct_9fa48("46596")) {
        {}
      } else {
        stryCov_9fa48("46596");
        subscribers = await Digest.getSubscribers(payload.interval);
      }
    }
    if (stryMutAct_9fa48("46599") ? false : stryMutAct_9fa48("46598") ? true : stryMutAct_9fa48("46597") ? subscribers.length : (stryCov_9fa48("46597", "46598", "46599"), !subscribers.length)) {
      if (stryMutAct_9fa48("46600")) {
        {}
      } else {
        stryCov_9fa48("46600");
        return;
      }
    }
    try {
      if (stryMutAct_9fa48("46601")) {
        {}
      } else {
        stryCov_9fa48("46601");
        winston.info(stryMutAct_9fa48("46602") ? `` : (stryCov_9fa48("46602"), `[user/jobs] Digest (${payload.interval}) scheduling completed (${subscribers.length} subscribers). Sending emails; this may take some time...`));
        await Digest.send(stryMutAct_9fa48("46603") ? {} : (stryCov_9fa48("46603"), {
          interval: payload.interval,
          subscribers: subscribers
        }));
        winston.info(stryMutAct_9fa48("46604") ? `` : (stryCov_9fa48("46604"), `[user/jobs] Digest (${payload.interval}) complete.`));
      }
    } catch (err) {
      if (stryMutAct_9fa48("46605")) {
        {}
      } else {
        stryCov_9fa48("46605");
        winston.error(stryMutAct_9fa48("46606") ? `` : (stryCov_9fa48("46606"), `[user/jobs] Could not send digests (${payload.interval})\n${err.stack}`));
        throw err;
      }
    }
  }
};
Digest.getUsersInterval = async uids => {
  if (stryMutAct_9fa48("46607")) {
    {}
  } else {
    stryCov_9fa48("46607");
    // Checks whether user specifies digest setting, or false for system default setting
    let single = stryMutAct_9fa48("46608") ? true : (stryCov_9fa48("46608"), false);
    if (stryMutAct_9fa48("46611") ? !Array.isArray(uids) || !isNaN(parseInt(uids, 10)) : stryMutAct_9fa48("46610") ? false : stryMutAct_9fa48("46609") ? true : (stryCov_9fa48("46609", "46610", "46611"), (stryMutAct_9fa48("46612") ? Array.isArray(uids) : (stryCov_9fa48("46612"), !Array.isArray(uids))) && (stryMutAct_9fa48("46613") ? isNaN(parseInt(uids, 10)) : (stryCov_9fa48("46613"), !isNaN(parseInt(uids, 10)))))) {
      if (stryMutAct_9fa48("46614")) {
        {}
      } else {
        stryCov_9fa48("46614");
        uids = stryMutAct_9fa48("46615") ? [] : (stryCov_9fa48("46615"), [uids]);
        single = stryMutAct_9fa48("46616") ? false : (stryCov_9fa48("46616"), true);
      }
    }
    const settings = await db.getObjects(uids.map(stryMutAct_9fa48("46617") ? () => undefined : (stryCov_9fa48("46617"), uid => stryMutAct_9fa48("46618") ? `` : (stryCov_9fa48("46618"), `user:${uid}:settings`))));
    const interval = uids.map(stryMutAct_9fa48("46619") ? () => undefined : (stryCov_9fa48("46619"), (uid, index) => stryMutAct_9fa48("46622") ? settings[index] && settings[index].dailyDigestFreq && false : stryMutAct_9fa48("46621") ? false : stryMutAct_9fa48("46620") ? true : (stryCov_9fa48("46620", "46621", "46622"), (stryMutAct_9fa48("46624") ? settings[index] || settings[index].dailyDigestFreq : stryMutAct_9fa48("46623") ? false : (stryCov_9fa48("46623", "46624"), settings[index] && settings[index].dailyDigestFreq)) || (stryMutAct_9fa48("46625") ? true : (stryCov_9fa48("46625"), false)))));
    return single ? interval[0] : interval;
  }
};
Digest.getSubscribers = async function (interval) {
  if (stryMutAct_9fa48("46626")) {
    {}
  } else {
    stryCov_9fa48("46626");
    let subscribers = stryMutAct_9fa48("46627") ? ["Stryker was here"] : (stryCov_9fa48("46627"), []);
    await batch.processSortedSet(stryMutAct_9fa48("46628") ? "" : (stryCov_9fa48("46628"), 'users:joindate'), async uids => {
      if (stryMutAct_9fa48("46629")) {
        {}
      } else {
        stryCov_9fa48("46629");
        const settings = await user.getMultipleUserSettings(uids);
        let subUids = stryMutAct_9fa48("46630") ? ["Stryker was here"] : (stryCov_9fa48("46630"), []);
        settings.forEach(hash => {
          if (stryMutAct_9fa48("46631")) {
            {}
          } else {
            stryCov_9fa48("46631");
            if (stryMutAct_9fa48("46634") ? hash.dailyDigestFreq !== interval : stryMutAct_9fa48("46633") ? false : stryMutAct_9fa48("46632") ? true : (stryCov_9fa48("46632", "46633", "46634"), hash.dailyDigestFreq === interval)) {
              if (stryMutAct_9fa48("46635")) {
                {}
              } else {
                stryCov_9fa48("46635");
                subUids.push(hash.uid);
              }
            }
          }
        });
        subUids = await user.bans.filterBanned(subUids);
        subscribers = subscribers.concat(subUids);
      }
    }, stryMutAct_9fa48("46636") ? {} : (stryCov_9fa48("46636"), {
      interval: 1000,
      batch: 500
    }));
    const results = await plugins.hooks.fire(stryMutAct_9fa48("46637") ? "" : (stryCov_9fa48("46637"), 'filter:digest.subscribers'), stryMutAct_9fa48("46638") ? {} : (stryCov_9fa48("46638"), {
      interval: interval,
      subscribers: subscribers
    }));
    return results.subscribers;
  }
};
Digest.send = async function (data) {
  if (stryMutAct_9fa48("46639")) {
    {}
  } else {
    stryCov_9fa48("46639");
    let emailsSent = 0;
    if (stryMutAct_9fa48("46642") ? (!data || !data.subscribers) && !data.subscribers.length : stryMutAct_9fa48("46641") ? false : stryMutAct_9fa48("46640") ? true : (stryCov_9fa48("46640", "46641", "46642"), (stryMutAct_9fa48("46644") ? !data && !data.subscribers : stryMutAct_9fa48("46643") ? false : (stryCov_9fa48("46643", "46644"), (stryMutAct_9fa48("46645") ? data : (stryCov_9fa48("46645"), !data)) || (stryMutAct_9fa48("46646") ? data.subscribers : (stryCov_9fa48("46646"), !data.subscribers)))) || (stryMutAct_9fa48("46647") ? data.subscribers.length : (stryCov_9fa48("46647"), !data.subscribers.length)))) {
      if (stryMutAct_9fa48("46648")) {
        {}
      } else {
        stryCov_9fa48("46648");
        return emailsSent;
      }
    }
    let errorLogged = stryMutAct_9fa48("46649") ? true : (stryCov_9fa48("46649"), false);
    await batch.processArray(data.subscribers, async uids => {
      if (stryMutAct_9fa48("46650")) {
        {}
      } else {
        stryCov_9fa48("46650");
        let userData = await user.getUsersFields(uids, stryMutAct_9fa48("46651") ? [] : (stryCov_9fa48("46651"), [stryMutAct_9fa48("46652") ? "" : (stryCov_9fa48("46652"), 'uid'), stryMutAct_9fa48("46653") ? "" : (stryCov_9fa48("46653"), 'email'), stryMutAct_9fa48("46654") ? "" : (stryCov_9fa48("46654"), 'email:confirmed'), stryMutAct_9fa48("46655") ? "" : (stryCov_9fa48("46655"), 'username'), stryMutAct_9fa48("46656") ? "" : (stryCov_9fa48("46656"), 'userslug'), stryMutAct_9fa48("46657") ? "" : (stryCov_9fa48("46657"), 'lastonline')]));
        userData = stryMutAct_9fa48("46658") ? userData : (stryCov_9fa48("46658"), userData.filter(stryMutAct_9fa48("46659") ? () => undefined : (stryCov_9fa48("46659"), u => stryMutAct_9fa48("46662") ? u && u.email || meta.config.includeUnverifiedEmails || u['email:confirmed'] : stryMutAct_9fa48("46661") ? false : stryMutAct_9fa48("46660") ? true : (stryCov_9fa48("46660", "46661", "46662"), (stryMutAct_9fa48("46664") ? u || u.email : stryMutAct_9fa48("46663") ? true : (stryCov_9fa48("46663", "46664"), u && u.email)) && (stryMutAct_9fa48("46666") ? meta.config.includeUnverifiedEmails && u['email:confirmed'] : stryMutAct_9fa48("46665") ? true : (stryCov_9fa48("46665", "46666"), meta.config.includeUnverifiedEmails || u[stryMutAct_9fa48("46667") ? "" : (stryCov_9fa48("46667"), 'email:confirmed')]))))));
        if (stryMutAct_9fa48("46670") ? false : stryMutAct_9fa48("46669") ? true : stryMutAct_9fa48("46668") ? userData.length : (stryCov_9fa48("46668", "46669", "46670"), !userData.length)) {
          if (stryMutAct_9fa48("46671")) {
            {}
          } else {
            stryCov_9fa48("46671");
            return;
          }
        }
        await Promise.all(userData.map(async userObj => {
          if (stryMutAct_9fa48("46672")) {
            {}
          } else {
            stryCov_9fa48("46672");
            const [notifications, topics] = await Promise.all(stryMutAct_9fa48("46673") ? [] : (stryCov_9fa48("46673"), [user.notifications.getUnreadInterval(userObj.uid, data.interval), getTermTopics(data.interval, userObj.uid)]));
            const unreadNotifs = stryMutAct_9fa48("46674") ? notifications : (stryCov_9fa48("46674"), notifications.filter(Boolean));
            // If there are no notifications and no new topics, don't bother sending a digest
            if (stryMutAct_9fa48("46677") ? !unreadNotifs.length && !topics.top.length && !topics.popular.length || !topics.recent.length : stryMutAct_9fa48("46676") ? false : stryMutAct_9fa48("46675") ? true : (stryCov_9fa48("46675", "46676", "46677"), (stryMutAct_9fa48("46679") ? !unreadNotifs.length && !topics.top.length || !topics.popular.length : stryMutAct_9fa48("46678") ? true : (stryCov_9fa48("46678", "46679"), (stryMutAct_9fa48("46681") ? !unreadNotifs.length || !topics.top.length : stryMutAct_9fa48("46680") ? true : (stryCov_9fa48("46680", "46681"), (stryMutAct_9fa48("46682") ? unreadNotifs.length : (stryCov_9fa48("46682"), !unreadNotifs.length)) && (stryMutAct_9fa48("46683") ? topics.top.length : (stryCov_9fa48("46683"), !topics.top.length)))) && (stryMutAct_9fa48("46684") ? topics.popular.length : (stryCov_9fa48("46684"), !topics.popular.length)))) && (stryMutAct_9fa48("46685") ? topics.recent.length : (stryCov_9fa48("46685"), !topics.recent.length)))) {
              if (stryMutAct_9fa48("46686")) {
                {}
              } else {
                stryCov_9fa48("46686");
                return;
              }
            }
            unreadNotifs.forEach(n => {
              if (stryMutAct_9fa48("46687")) {
                {}
              } else {
                stryCov_9fa48("46687");
                if (stryMutAct_9fa48("46690") ? n.image || !n.image.startsWith('http') : stryMutAct_9fa48("46689") ? false : stryMutAct_9fa48("46688") ? true : (stryCov_9fa48("46688", "46689", "46690"), n.image && (stryMutAct_9fa48("46691") ? n.image.startsWith('http') : (stryCov_9fa48("46691"), !(stryMutAct_9fa48("46692") ? n.image.endsWith('http') : (stryCov_9fa48("46692"), n.image.startsWith(stryMutAct_9fa48("46693") ? "" : (stryCov_9fa48("46693"), 'http')))))))) {
                  if (stryMutAct_9fa48("46694")) {
                    {}
                  } else {
                    stryCov_9fa48("46694");
                    n.image = stryMutAct_9fa48("46695") ? baseUrl - n.image : (stryCov_9fa48("46695"), baseUrl + n.image);
                  }
                }
                if (stryMutAct_9fa48("46697") ? false : stryMutAct_9fa48("46696") ? true : (stryCov_9fa48("46696", "46697"), n.path)) {
                  if (stryMutAct_9fa48("46698")) {
                    {}
                  } else {
                    stryCov_9fa48("46698");
                    n.notification_url = (stryMutAct_9fa48("46699") ? n.path.endsWith('http') : (stryCov_9fa48("46699"), n.path.startsWith(stryMutAct_9fa48("46700") ? "" : (stryCov_9fa48("46700"), 'http')))) ? n.path : stryMutAct_9fa48("46701") ? baseUrl - n.path : (stryCov_9fa48("46701"), baseUrl + n.path);
                  }
                }
              }
            });
            stryMutAct_9fa48("46702") ? emailsSent -= 1 : (stryCov_9fa48("46702"), emailsSent += 1);
            const now = new Date();
            await emailer.send(stryMutAct_9fa48("46703") ? "" : (stryCov_9fa48("46703"), 'digest'), userObj.uid, stryMutAct_9fa48("46704") ? {} : (stryCov_9fa48("46704"), {
              subject: stryMutAct_9fa48("46705") ? `` : (stryCov_9fa48("46705"), `[[email:digest.subject, ${now.getFullYear()}/${stryMutAct_9fa48("46706") ? now.getMonth() - 1 : (stryCov_9fa48("46706"), now.getMonth() + 1)}/${now.getDate()}]]`),
              username: userObj.username,
              userslug: userObj.userslug,
              notifications: unreadNotifs,
              recent: topics.recent,
              topTopics: topics.top,
              popularTopics: topics.popular,
              interval: data.interval,
              showUnsubscribe: stryMutAct_9fa48("46707") ? false : (stryCov_9fa48("46707"), true)
            })).catch(err => {
              if (stryMutAct_9fa48("46708")) {
                {}
              } else {
                stryCov_9fa48("46708");
                if (stryMutAct_9fa48("46711") ? false : stryMutAct_9fa48("46710") ? true : stryMutAct_9fa48("46709") ? errorLogged : (stryCov_9fa48("46709", "46710", "46711"), !errorLogged)) {
                  if (stryMutAct_9fa48("46712")) {
                    {}
                  } else {
                    stryCov_9fa48("46712");
                    winston.error(stryMutAct_9fa48("46713") ? `` : (stryCov_9fa48("46713"), `[user/jobs] Could not send digest email\n[emailer.send] ${err.stack}`));
                    errorLogged = stryMutAct_9fa48("46714") ? false : (stryCov_9fa48("46714"), true);
                  }
                }
              }
            });
          }
        }));
        if (stryMutAct_9fa48("46717") ? data.interval === 'alltime' : stryMutAct_9fa48("46716") ? false : stryMutAct_9fa48("46715") ? true : (stryCov_9fa48("46715", "46716", "46717"), data.interval !== (stryMutAct_9fa48("46718") ? "" : (stryCov_9fa48("46718"), 'alltime')))) {
          if (stryMutAct_9fa48("46719")) {
            {}
          } else {
            stryCov_9fa48("46719");
            const now = Date.now();
            await db.sortedSetAdd(stryMutAct_9fa48("46720") ? "" : (stryCov_9fa48("46720"), 'digest:delivery'), userData.map(stryMutAct_9fa48("46721") ? () => undefined : (stryCov_9fa48("46721"), () => now)), userData.map(stryMutAct_9fa48("46722") ? () => undefined : (stryCov_9fa48("46722"), u => u.uid)));
          }
        }
      }
    }, stryMutAct_9fa48("46723") ? {} : (stryCov_9fa48("46723"), {
      interval: 1000,
      batch: 100
    }));
    winston.info(stryMutAct_9fa48("46724") ? `` : (stryCov_9fa48("46724"), `[user/jobs] Digest (${data.interval}) sending completed. ${emailsSent} emails sent.`));
  }
};
Digest.getDeliveryTimes = async (start, stop) => {
  if (stryMutAct_9fa48("46725")) {
    {}
  } else {
    stryCov_9fa48("46725");
    const count = await db.sortedSetCard(stryMutAct_9fa48("46726") ? "" : (stryCov_9fa48("46726"), 'users:joindate'));
    const uids = await user.getUidsFromSet(stryMutAct_9fa48("46727") ? "" : (stryCov_9fa48("46727"), 'users:joindate'), start, stop);
    if (stryMutAct_9fa48("46730") ? false : stryMutAct_9fa48("46729") ? true : stryMutAct_9fa48("46728") ? uids.length : (stryCov_9fa48("46728", "46729", "46730"), !uids.length)) {
      if (stryMutAct_9fa48("46731")) {
        {}
      } else {
        stryCov_9fa48("46731");
        return stryMutAct_9fa48("46732") ? ["Stryker was here"] : (stryCov_9fa48("46732"), []);
      }
    }
    const [scores, settings] = await Promise.all(stryMutAct_9fa48("46733") ? [] : (stryCov_9fa48("46733"), [
    // Grab the last time a digest was successfully delivered to these uids
    db.sortedSetScores(stryMutAct_9fa48("46734") ? "" : (stryCov_9fa48("46734"), 'digest:delivery'), uids),
    // Get users' digest settings
    Digest.getUsersInterval(uids)]));

    // Populate user data
    let userData = await user.getUsersFields(uids, stryMutAct_9fa48("46735") ? [] : (stryCov_9fa48("46735"), [stryMutAct_9fa48("46736") ? "" : (stryCov_9fa48("46736"), 'username'), stryMutAct_9fa48("46737") ? "" : (stryCov_9fa48("46737"), 'picture')]));
    userData = userData.map((user, idx) => {
      if (stryMutAct_9fa48("46738")) {
        {}
      } else {
        stryCov_9fa48("46738");
        user.lastDelivery = scores[idx] ? new Date(scores[idx]).toISOString() : stryMutAct_9fa48("46739") ? "" : (stryCov_9fa48("46739"), '[[admin/manage/digest:null]]');
        user.setting = settings[idx];
        return user;
      }
    });
    return stryMutAct_9fa48("46740") ? {} : (stryCov_9fa48("46740"), {
      users: userData,
      count: count
    });
  }
};
async function getTermTopics(term, uid) {
  if (stryMutAct_9fa48("46741")) {
    {}
  } else {
    stryCov_9fa48("46741");
    const data = await topics.getSortedTopics(stryMutAct_9fa48("46742") ? {} : (stryCov_9fa48("46742"), {
      uid: uid,
      start: 0,
      stop: 199,
      term: term,
      sort: stryMutAct_9fa48("46743") ? "" : (stryCov_9fa48("46743"), 'votes'),
      teaserPost: stryMutAct_9fa48("46744") ? "" : (stryCov_9fa48("46744"), 'first')
    }));
    data.topics = stryMutAct_9fa48("46745") ? data.topics : (stryCov_9fa48("46745"), data.topics.filter(stryMutAct_9fa48("46746") ? () => undefined : (stryCov_9fa48("46746"), topic => stryMutAct_9fa48("46749") ? topic || !topic.deleted : stryMutAct_9fa48("46748") ? false : stryMutAct_9fa48("46747") ? true : (stryCov_9fa48("46747", "46748", "46749"), topic && (stryMutAct_9fa48("46750") ? topic.deleted : (stryCov_9fa48("46750"), !topic.deleted))))));
    const top = stryMutAct_9fa48("46752") ? data.topics.slice(0, 10) : stryMutAct_9fa48("46751") ? data.topics.filter(t => t.votes > 0) : (stryCov_9fa48("46751", "46752"), data.topics.filter(stryMutAct_9fa48("46753") ? () => undefined : (stryCov_9fa48("46753"), t => stryMutAct_9fa48("46757") ? t.votes <= 0 : stryMutAct_9fa48("46756") ? t.votes >= 0 : stryMutAct_9fa48("46755") ? false : stryMutAct_9fa48("46754") ? true : (stryCov_9fa48("46754", "46755", "46756", "46757"), t.votes > 0))).slice(0, 10));
    const topTids = top.map(stryMutAct_9fa48("46758") ? () => undefined : (stryCov_9fa48("46758"), t => t.tid));
    const popular = stryMutAct_9fa48("46761") ? data.topics.sort((a, b) => b.postcount - a.postcount).slice(0, 10) : stryMutAct_9fa48("46760") ? data.topics.filter(t => t.postcount > 1 && !topTids.includes(t.tid)).slice(0, 10) : stryMutAct_9fa48("46759") ? data.topics.filter(t => t.postcount > 1 && !topTids.includes(t.tid)).sort((a, b) => b.postcount - a.postcount) : (stryCov_9fa48("46759", "46760", "46761"), data.topics.filter(stryMutAct_9fa48("46762") ? () => undefined : (stryCov_9fa48("46762"), t => stryMutAct_9fa48("46765") ? t.postcount > 1 || !topTids.includes(t.tid) : stryMutAct_9fa48("46764") ? false : stryMutAct_9fa48("46763") ? true : (stryCov_9fa48("46763", "46764", "46765"), (stryMutAct_9fa48("46768") ? t.postcount <= 1 : stryMutAct_9fa48("46767") ? t.postcount >= 1 : stryMutAct_9fa48("46766") ? true : (stryCov_9fa48("46766", "46767", "46768"), t.postcount > 1)) && (stryMutAct_9fa48("46769") ? topTids.includes(t.tid) : (stryCov_9fa48("46769"), !topTids.includes(t.tid)))))).sort(stryMutAct_9fa48("46770") ? () => undefined : (stryCov_9fa48("46770"), (a, b) => stryMutAct_9fa48("46771") ? b.postcount + a.postcount : (stryCov_9fa48("46771"), b.postcount - a.postcount))).slice(0, 10));
    const popularTids = popular.map(stryMutAct_9fa48("46772") ? () => undefined : (stryCov_9fa48("46772"), t => t.tid));
    const recent = stryMutAct_9fa48("46775") ? data.topics.sort((a, b) => b.lastposttime - a.lastposttime).slice(0, 10) : stryMutAct_9fa48("46774") ? data.topics.filter(t => !topTids.includes(t.tid) && !popularTids.includes(t.tid)).slice(0, 10) : stryMutAct_9fa48("46773") ? data.topics.filter(t => !topTids.includes(t.tid) && !popularTids.includes(t.tid)).sort((a, b) => b.lastposttime - a.lastposttime) : (stryCov_9fa48("46773", "46774", "46775"), data.topics.filter(stryMutAct_9fa48("46776") ? () => undefined : (stryCov_9fa48("46776"), t => stryMutAct_9fa48("46779") ? !topTids.includes(t.tid) || !popularTids.includes(t.tid) : stryMutAct_9fa48("46778") ? false : stryMutAct_9fa48("46777") ? true : (stryCov_9fa48("46777", "46778", "46779"), (stryMutAct_9fa48("46780") ? topTids.includes(t.tid) : (stryCov_9fa48("46780"), !topTids.includes(t.tid))) && (stryMutAct_9fa48("46781") ? popularTids.includes(t.tid) : (stryCov_9fa48("46781"), !popularTids.includes(t.tid)))))).sort(stryMutAct_9fa48("46782") ? () => undefined : (stryCov_9fa48("46782"), (a, b) => stryMutAct_9fa48("46783") ? b.lastposttime + a.lastposttime : (stryCov_9fa48("46783"), b.lastposttime - a.lastposttime))).slice(0, 10));
    (stryMutAct_9fa48("46784") ? [] : (stryCov_9fa48("46784"), [...top, ...popular, ...recent])).forEach(topicObj => {
      if (stryMutAct_9fa48("46785")) {
        {}
      } else {
        stryCov_9fa48("46785");
        if (stryMutAct_9fa48("46787") ? false : stryMutAct_9fa48("46786") ? true : (stryCov_9fa48("46786", "46787"), topicObj)) {
          if (stryMutAct_9fa48("46788")) {
            {}
          } else {
            stryCov_9fa48("46788");
            if (stryMutAct_9fa48("46791") ? topicObj.teaser && topicObj.teaser.content || topicObj.teaser.content.length > 255 : stryMutAct_9fa48("46790") ? false : stryMutAct_9fa48("46789") ? true : (stryCov_9fa48("46789", "46790", "46791"), (stryMutAct_9fa48("46793") ? topicObj.teaser || topicObj.teaser.content : stryMutAct_9fa48("46792") ? true : (stryCov_9fa48("46792", "46793"), topicObj.teaser && topicObj.teaser.content)) && (stryMutAct_9fa48("46796") ? topicObj.teaser.content.length <= 255 : stryMutAct_9fa48("46795") ? topicObj.teaser.content.length >= 255 : stryMutAct_9fa48("46794") ? true : (stryCov_9fa48("46794", "46795", "46796"), topicObj.teaser.content.length > 255)))) {
              if (stryMutAct_9fa48("46797")) {
                {}
              } else {
                stryCov_9fa48("46797");
                topicObj.teaser.content = stryMutAct_9fa48("46798") ? `` : (stryCov_9fa48("46798"), `${stryMutAct_9fa48("46799") ? topicObj.teaser.content : (stryCov_9fa48("46799"), topicObj.teaser.content.slice(0, 255))}...`);
              }
            }
            // Fix relative paths in topic data
            const user = (stryMutAct_9fa48("46802") ? topicObj.hasOwnProperty('teaser') && topicObj.teaser || topicObj.teaser.user : stryMutAct_9fa48("46801") ? false : stryMutAct_9fa48("46800") ? true : (stryCov_9fa48("46800", "46801", "46802"), (stryMutAct_9fa48("46804") ? topicObj.hasOwnProperty('teaser') || topicObj.teaser : stryMutAct_9fa48("46803") ? true : (stryCov_9fa48("46803", "46804"), topicObj.hasOwnProperty(stryMutAct_9fa48("46805") ? "" : (stryCov_9fa48("46805"), 'teaser')) && topicObj.teaser)) && topicObj.teaser.user)) ? topicObj.teaser.user : topicObj.user;
            if (stryMutAct_9fa48("46808") ? user && user.picture || utils.isRelativeUrl(user.picture) : stryMutAct_9fa48("46807") ? false : stryMutAct_9fa48("46806") ? true : (stryCov_9fa48("46806", "46807", "46808"), (stryMutAct_9fa48("46810") ? user || user.picture : stryMutAct_9fa48("46809") ? true : (stryCov_9fa48("46809", "46810"), user && user.picture)) && utils.isRelativeUrl(user.picture))) {
              if (stryMutAct_9fa48("46811")) {
                {}
              } else {
                stryCov_9fa48("46811");
                user.picture = stryMutAct_9fa48("46812") ? baseUrl - user.picture : (stryCov_9fa48("46812"), baseUrl + user.picture);
              }
            }
          }
        }
      }
    });
    return stryMutAct_9fa48("46813") ? {} : (stryCov_9fa48("46813"), {
      top,
      popular,
      recent
    });
  }
}