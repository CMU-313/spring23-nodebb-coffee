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
const db = require('../database');
const meta = require('../meta');
const user = require('../user');
const posts = require('../posts');
const categories = require('../categories');
const plugins = require('../plugins');
const translator = require('../translator');
const privileges = require('../privileges');
const Events = module.exports;

/**
 * Note: Plugins!
 *
 * You are able to define additional topic event types here.
 * Register to hook `filter:topicEvents.init` and append your custom type to the `types` object.
 * You can then log a custom topic event by calling `topics.events.log(tid, { type, uid });`
 * `uid` is optional; if you pass in a valid uid in the payload,
 * the user avatar/username will be rendered as part of the event text
 *
 */
Events._types = stryMutAct_9fa48("38359") ? {} : (stryCov_9fa48("38359"), {
  pin: stryMutAct_9fa48("38360") ? {} : (stryCov_9fa48("38360"), {
    icon: stryMutAct_9fa48("38361") ? "" : (stryCov_9fa48("38361"), 'fa-thumb-tack'),
    text: stryMutAct_9fa48("38362") ? "" : (stryCov_9fa48("38362"), '[[topic:pinned-by]]')
  }),
  unpin: stryMutAct_9fa48("38363") ? {} : (stryCov_9fa48("38363"), {
    icon: stryMutAct_9fa48("38364") ? "" : (stryCov_9fa48("38364"), 'fa-thumb-tack'),
    text: stryMutAct_9fa48("38365") ? "" : (stryCov_9fa48("38365"), '[[topic:unpinned-by]]')
  }),
  lock: stryMutAct_9fa48("38366") ? {} : (stryCov_9fa48("38366"), {
    icon: stryMutAct_9fa48("38367") ? "" : (stryCov_9fa48("38367"), 'fa-lock'),
    text: stryMutAct_9fa48("38368") ? "" : (stryCov_9fa48("38368"), '[[topic:locked-by]]')
  }),
  unlock: stryMutAct_9fa48("38369") ? {} : (stryCov_9fa48("38369"), {
    icon: stryMutAct_9fa48("38370") ? "" : (stryCov_9fa48("38370"), 'fa-unlock'),
    text: stryMutAct_9fa48("38371") ? "" : (stryCov_9fa48("38371"), '[[topic:unlocked-by]]')
  }),
  delete: stryMutAct_9fa48("38372") ? {} : (stryCov_9fa48("38372"), {
    icon: stryMutAct_9fa48("38373") ? "" : (stryCov_9fa48("38373"), 'fa-trash'),
    text: stryMutAct_9fa48("38374") ? "" : (stryCov_9fa48("38374"), '[[topic:deleted-by]]')
  }),
  restore: stryMutAct_9fa48("38375") ? {} : (stryCov_9fa48("38375"), {
    icon: stryMutAct_9fa48("38376") ? "" : (stryCov_9fa48("38376"), 'fa-trash-o'),
    text: stryMutAct_9fa48("38377") ? "" : (stryCov_9fa48("38377"), '[[topic:restored-by]]')
  }),
  move: stryMutAct_9fa48("38378") ? {} : (stryCov_9fa48("38378"), {
    icon: stryMutAct_9fa48("38379") ? "" : (stryCov_9fa48("38379"), 'fa-arrow-circle-right')
    // text: '[[topic:moved-from-by]]',
  }),

  'post-queue': stryMutAct_9fa48("38380") ? {} : (stryCov_9fa48("38380"), {
    icon: stryMutAct_9fa48("38381") ? "" : (stryCov_9fa48("38381"), 'fa-history'),
    text: stryMutAct_9fa48("38382") ? "" : (stryCov_9fa48("38382"), '[[topic:queued-by]]'),
    href: stryMutAct_9fa48("38383") ? "" : (stryCov_9fa48("38383"), '/post-queue')
  }),
  backlink: stryMutAct_9fa48("38384") ? {} : (stryCov_9fa48("38384"), {
    icon: stryMutAct_9fa48("38385") ? "" : (stryCov_9fa48("38385"), 'fa-link'),
    text: stryMutAct_9fa48("38386") ? "" : (stryCov_9fa48("38386"), '[[topic:backlink]]')
  }),
  fork: stryMutAct_9fa48("38387") ? {} : (stryCov_9fa48("38387"), {
    icon: stryMutAct_9fa48("38388") ? "" : (stryCov_9fa48("38388"), 'fa-code-fork'),
    text: stryMutAct_9fa48("38389") ? "" : (stryCov_9fa48("38389"), '[[topic:forked-by]]')
  })
});
Events.init = async () => {
  if (stryMutAct_9fa48("38390")) {
    {}
  } else {
    stryCov_9fa48("38390");
    // Allow plugins to define additional topic event types
    const {
      types
    } = await plugins.hooks.fire(stryMutAct_9fa48("38391") ? "" : (stryCov_9fa48("38391"), 'filter:topicEvents.init'), stryMutAct_9fa48("38392") ? {} : (stryCov_9fa48("38392"), {
      types: Events._types
    }));
    Events._types = types;
  }
};
Events.get = async (tid, uid, reverse = stryMutAct_9fa48("38393") ? true : (stryCov_9fa48("38393"), false)) => {
  if (stryMutAct_9fa48("38394")) {
    {}
  } else {
    stryCov_9fa48("38394");
    const topics = require('.');
    if (stryMutAct_9fa48("38397") ? false : stryMutAct_9fa48("38396") ? true : stryMutAct_9fa48("38395") ? await topics.exists(tid) : (stryCov_9fa48("38395", "38396", "38397"), !(await topics.exists(tid)))) {
      if (stryMutAct_9fa48("38398")) {
        {}
      } else {
        stryCov_9fa48("38398");
        throw new Error(stryMutAct_9fa48("38399") ? "" : (stryCov_9fa48("38399"), '[[error:no-topic]]'));
      }
    }
    let eventIds = await db.getSortedSetRangeWithScores(stryMutAct_9fa48("38400") ? `` : (stryCov_9fa48("38400"), `topic:${tid}:events`), 0, stryMutAct_9fa48("38401") ? +1 : (stryCov_9fa48("38401"), -1));
    const keys = eventIds.map(stryMutAct_9fa48("38402") ? () => undefined : (stryCov_9fa48("38402"), obj => stryMutAct_9fa48("38403") ? `` : (stryCov_9fa48("38403"), `topicEvent:${obj.value}`)));
    const timestamps = eventIds.map(stryMutAct_9fa48("38404") ? () => undefined : (stryCov_9fa48("38404"), obj => obj.score));
    eventIds = eventIds.map(stryMutAct_9fa48("38405") ? () => undefined : (stryCov_9fa48("38405"), obj => obj.value));
    let events = await db.getObjects(keys);
    events = await modifyEvent(stryMutAct_9fa48("38406") ? {} : (stryCov_9fa48("38406"), {
      tid,
      uid,
      eventIds,
      timestamps,
      events
    }));
    if (stryMutAct_9fa48("38408") ? false : stryMutAct_9fa48("38407") ? true : (stryCov_9fa48("38407", "38408"), reverse)) {
      if (stryMutAct_9fa48("38409")) {
        {}
      } else {
        stryCov_9fa48("38409");
        stryMutAct_9fa48("38410") ? events : (stryCov_9fa48("38410"), events.reverse());
      }
    }
    return events;
  }
};
async function getUserInfo(uids) {
  if (stryMutAct_9fa48("38411")) {
    {}
  } else {
    stryCov_9fa48("38411");
    uids = stryMutAct_9fa48("38412") ? uids : (stryCov_9fa48("38412"), uids.filter(stryMutAct_9fa48("38413") ? () => undefined : (stryCov_9fa48("38413"), (uid, idx) => stryMutAct_9fa48("38416") ? !isNaN(parseInt(uid, 10)) || uids.indexOf(uid) === idx : stryMutAct_9fa48("38415") ? false : stryMutAct_9fa48("38414") ? true : (stryCov_9fa48("38414", "38415", "38416"), (stryMutAct_9fa48("38417") ? isNaN(parseInt(uid, 10)) : (stryCov_9fa48("38417"), !isNaN(parseInt(uid, 10)))) && (stryMutAct_9fa48("38419") ? uids.indexOf(uid) !== idx : stryMutAct_9fa48("38418") ? true : (stryCov_9fa48("38418", "38419"), uids.indexOf(uid) === idx))))));
    const userData = await user.getUsersFields(uids, stryMutAct_9fa48("38420") ? [] : (stryCov_9fa48("38420"), [stryMutAct_9fa48("38421") ? "" : (stryCov_9fa48("38421"), 'picture'), stryMutAct_9fa48("38422") ? "" : (stryCov_9fa48("38422"), 'username'), stryMutAct_9fa48("38423") ? "" : (stryCov_9fa48("38423"), 'userslug')]));
    const userMap = userData.reduce(stryMutAct_9fa48("38424") ? () => undefined : (stryCov_9fa48("38424"), (memo, cur) => memo.set(cur.uid, cur)), new Map());
    userMap.set(stryMutAct_9fa48("38425") ? "" : (stryCov_9fa48("38425"), 'system'), stryMutAct_9fa48("38426") ? {} : (stryCov_9fa48("38426"), {
      system: stryMutAct_9fa48("38427") ? false : (stryCov_9fa48("38427"), true)
    }));
    return userMap;
  }
}
async function getCategoryInfo(cids) {
  if (stryMutAct_9fa48("38428")) {
    {}
  } else {
    stryCov_9fa48("38428");
    const uniqCids = _.uniq(cids);
    const catData = await categories.getCategoriesFields(uniqCids, stryMutAct_9fa48("38429") ? [] : (stryCov_9fa48("38429"), [stryMutAct_9fa48("38430") ? "" : (stryCov_9fa48("38430"), 'name'), stryMutAct_9fa48("38431") ? "" : (stryCov_9fa48("38431"), 'slug'), stryMutAct_9fa48("38432") ? "" : (stryCov_9fa48("38432"), 'icon'), stryMutAct_9fa48("38433") ? "" : (stryCov_9fa48("38433"), 'color'), stryMutAct_9fa48("38434") ? "" : (stryCov_9fa48("38434"), 'bgColor')]));
    return _.zipObject(uniqCids, catData);
  }
}
async function modifyEvent({
  tid,
  uid,
  eventIds,
  timestamps,
  events
}) {
  if (stryMutAct_9fa48("38435")) {
    {}
  } else {
    stryCov_9fa48("38435");
    // Add posts from post queue
    const isPrivileged = await user.isPrivileged(uid);
    if (stryMutAct_9fa48("38437") ? false : stryMutAct_9fa48("38436") ? true : (stryCov_9fa48("38436", "38437"), isPrivileged)) {
      if (stryMutAct_9fa48("38438")) {
        {}
      } else {
        stryCov_9fa48("38438");
        const queuedPosts = await posts.getQueuedPosts(stryMutAct_9fa48("38439") ? {} : (stryCov_9fa48("38439"), {
          tid
        }), stryMutAct_9fa48("38440") ? {} : (stryCov_9fa48("38440"), {
          metadata: stryMutAct_9fa48("38441") ? true : (stryCov_9fa48("38441"), false)
        }));
        events.push(...queuedPosts.map(stryMutAct_9fa48("38442") ? () => undefined : (stryCov_9fa48("38442"), item => stryMutAct_9fa48("38443") ? {} : (stryCov_9fa48("38443"), {
          type: stryMutAct_9fa48("38444") ? "" : (stryCov_9fa48("38444"), 'post-queue'),
          timestamp: stryMutAct_9fa48("38447") ? item.data.timestamp && Date.now() : stryMutAct_9fa48("38446") ? false : stryMutAct_9fa48("38445") ? true : (stryCov_9fa48("38445", "38446", "38447"), item.data.timestamp || Date.now()),
          uid: item.data.uid
        }))));
        queuedPosts.forEach(item => {
          if (stryMutAct_9fa48("38448")) {
            {}
          } else {
            stryCov_9fa48("38448");
            timestamps.push(stryMutAct_9fa48("38451") ? item.data.timestamp && Date.now() : stryMutAct_9fa48("38450") ? false : stryMutAct_9fa48("38449") ? true : (stryCov_9fa48("38449", "38450", "38451"), item.data.timestamp || Date.now()));
          }
        });
      }
    }
    const [users, fromCategories] = await Promise.all(stryMutAct_9fa48("38452") ? [] : (stryCov_9fa48("38452"), [getUserInfo(stryMutAct_9fa48("38453") ? events.map(event => event.uid) : (stryCov_9fa48("38453"), events.map(stryMutAct_9fa48("38454") ? () => undefined : (stryCov_9fa48("38454"), event => event.uid)).filter(Boolean))), getCategoryInfo(stryMutAct_9fa48("38455") ? events.map(event => event.fromCid) : (stryCov_9fa48("38455"), events.map(stryMutAct_9fa48("38456") ? () => undefined : (stryCov_9fa48("38456"), event => event.fromCid)).filter(Boolean)))]));

    // Remove backlink events if backlinks are disabled
    if (stryMutAct_9fa48("38459") ? meta.config.topicBacklinks === 1 : stryMutAct_9fa48("38458") ? false : stryMutAct_9fa48("38457") ? true : (stryCov_9fa48("38457", "38458", "38459"), meta.config.topicBacklinks !== 1)) {
      if (stryMutAct_9fa48("38460")) {
        {}
      } else {
        stryCov_9fa48("38460");
        events = stryMutAct_9fa48("38461") ? events : (stryCov_9fa48("38461"), events.filter(stryMutAct_9fa48("38462") ? () => undefined : (stryCov_9fa48("38462"), event => stryMutAct_9fa48("38465") ? event.type === 'backlink' : stryMutAct_9fa48("38464") ? false : stryMutAct_9fa48("38463") ? true : (stryCov_9fa48("38463", "38464", "38465"), event.type !== (stryMutAct_9fa48("38466") ? "" : (stryCov_9fa48("38466"), 'backlink'))))));
      }
    } else {
      if (stryMutAct_9fa48("38467")) {
        {}
      } else {
        stryCov_9fa48("38467");
        // remove backlinks that we dont have read permission
        const backlinkPids = stryMutAct_9fa48("38468") ? events.map(e => e.href.split('/').pop()) : (stryCov_9fa48("38468"), events.filter(stryMutAct_9fa48("38469") ? () => undefined : (stryCov_9fa48("38469"), e => stryMutAct_9fa48("38472") ? e.type !== 'backlink' : stryMutAct_9fa48("38471") ? false : stryMutAct_9fa48("38470") ? true : (stryCov_9fa48("38470", "38471", "38472"), e.type === (stryMutAct_9fa48("38473") ? "" : (stryCov_9fa48("38473"), 'backlink'))))).map(stryMutAct_9fa48("38474") ? () => undefined : (stryCov_9fa48("38474"), e => e.href.split(stryMutAct_9fa48("38475") ? "" : (stryCov_9fa48("38475"), '/')).pop())));
        const pids = await (stryMutAct_9fa48("38476") ? privileges.posts : (stryCov_9fa48("38476"), privileges.posts.filter(stryMutAct_9fa48("38477") ? "" : (stryCov_9fa48("38477"), 'topics:read'), backlinkPids, uid)));
        events = stryMutAct_9fa48("38478") ? events : (stryCov_9fa48("38478"), events.filter(stryMutAct_9fa48("38479") ? () => undefined : (stryCov_9fa48("38479"), e => stryMutAct_9fa48("38482") ? e.type !== 'backlink' && pids.includes(e.href.split('/').pop()) : stryMutAct_9fa48("38481") ? false : stryMutAct_9fa48("38480") ? true : (stryCov_9fa48("38480", "38481", "38482"), (stryMutAct_9fa48("38484") ? e.type === 'backlink' : stryMutAct_9fa48("38483") ? false : (stryCov_9fa48("38483", "38484"), e.type !== (stryMutAct_9fa48("38485") ? "" : (stryCov_9fa48("38485"), 'backlink')))) || pids.includes(e.href.split(stryMutAct_9fa48("38486") ? "" : (stryCov_9fa48("38486"), '/')).pop())))));
      }
    }

    // Remove events whose types no longer exist (e.g. plugin uninstalled)
    events = stryMutAct_9fa48("38487") ? events : (stryCov_9fa48("38487"), events.filter(stryMutAct_9fa48("38488") ? () => undefined : (stryCov_9fa48("38488"), event => Events._types.hasOwnProperty(event.type))));

    // Add user & metadata
    events.forEach((event, idx) => {
      if (stryMutAct_9fa48("38489")) {
        {}
      } else {
        stryCov_9fa48("38489");
        event.id = parseInt(eventIds[idx], 10);
        event.timestamp = timestamps[idx];
        event.timestampISO = new Date(timestamps[idx]).toISOString();
        if (stryMutAct_9fa48("38491") ? false : stryMutAct_9fa48("38490") ? true : (stryCov_9fa48("38490", "38491"), event.hasOwnProperty(stryMutAct_9fa48("38492") ? "" : (stryCov_9fa48("38492"), 'uid')))) {
          if (stryMutAct_9fa48("38493")) {
            {}
          } else {
            stryCov_9fa48("38493");
            event.user = users.get((stryMutAct_9fa48("38496") ? event.uid !== 'system' : stryMutAct_9fa48("38495") ? false : stryMutAct_9fa48("38494") ? true : (stryCov_9fa48("38494", "38495", "38496"), event.uid === (stryMutAct_9fa48("38497") ? "" : (stryCov_9fa48("38497"), 'system')))) ? stryMutAct_9fa48("38498") ? "" : (stryCov_9fa48("38498"), 'system') : parseInt(event.uid, 10));
          }
        }
        if (stryMutAct_9fa48("38500") ? false : stryMutAct_9fa48("38499") ? true : (stryCov_9fa48("38499", "38500"), event.hasOwnProperty(stryMutAct_9fa48("38501") ? "" : (stryCov_9fa48("38501"), 'fromCid')))) {
          if (stryMutAct_9fa48("38502")) {
            {}
          } else {
            stryCov_9fa48("38502");
            event.fromCategory = fromCategories[event.fromCid];
            event.text = translator.compile(stryMutAct_9fa48("38503") ? "" : (stryCov_9fa48("38503"), 'topic:moved-from-by'), event.fromCategory.name);
          }
        }
        Object.assign(event, Events._types[event.type]);
      }
    });

    // Sort events
    stryMutAct_9fa48("38504") ? events : (stryCov_9fa48("38504"), events.sort(stryMutAct_9fa48("38505") ? () => undefined : (stryCov_9fa48("38505"), (a, b) => stryMutAct_9fa48("38506") ? a.timestamp + b.timestamp : (stryCov_9fa48("38506"), a.timestamp - b.timestamp))));
    return events;
  }
}
Events.log = async (tid, payload) => {
  if (stryMutAct_9fa48("38507")) {
    {}
  } else {
    stryCov_9fa48("38507");
    const topics = require('.');
    const {
      type
    } = payload;
    const timestamp = stryMutAct_9fa48("38510") ? payload.timestamp && Date.now() : stryMutAct_9fa48("38509") ? false : stryMutAct_9fa48("38508") ? true : (stryCov_9fa48("38508", "38509", "38510"), payload.timestamp || Date.now());
    if (stryMutAct_9fa48("38513") ? false : stryMutAct_9fa48("38512") ? true : stryMutAct_9fa48("38511") ? Events._types.hasOwnProperty(type) : (stryCov_9fa48("38511", "38512", "38513"), !Events._types.hasOwnProperty(type))) {
      if (stryMutAct_9fa48("38514")) {
        {}
      } else {
        stryCov_9fa48("38514");
        throw new Error(stryMutAct_9fa48("38515") ? `` : (stryCov_9fa48("38515"), `[[error:topic-event-unrecognized, ${type}]]`));
      }
    } else if (stryMutAct_9fa48("38518") ? false : stryMutAct_9fa48("38517") ? true : stryMutAct_9fa48("38516") ? await topics.exists(tid) : (stryCov_9fa48("38516", "38517", "38518"), !(await topics.exists(tid)))) {
      if (stryMutAct_9fa48("38519")) {
        {}
      } else {
        stryCov_9fa48("38519");
        throw new Error(stryMutAct_9fa48("38520") ? "" : (stryCov_9fa48("38520"), '[[error:no-topic]]'));
      }
    }
    const eventId = await db.incrObjectField(stryMutAct_9fa48("38521") ? "" : (stryCov_9fa48("38521"), 'global'), stryMutAct_9fa48("38522") ? "" : (stryCov_9fa48("38522"), 'nextTopicEventId'));
    await Promise.all(stryMutAct_9fa48("38523") ? [] : (stryCov_9fa48("38523"), [db.setObject(stryMutAct_9fa48("38524") ? `` : (stryCov_9fa48("38524"), `topicEvent:${eventId}`), payload), db.sortedSetAdd(stryMutAct_9fa48("38525") ? `` : (stryCov_9fa48("38525"), `topic:${tid}:events`), timestamp, eventId)]));
    let events = await modifyEvent(stryMutAct_9fa48("38526") ? {} : (stryCov_9fa48("38526"), {
      eventIds: stryMutAct_9fa48("38527") ? [] : (stryCov_9fa48("38527"), [eventId]),
      timestamps: stryMutAct_9fa48("38528") ? [] : (stryCov_9fa48("38528"), [timestamp]),
      events: stryMutAct_9fa48("38529") ? [] : (stryCov_9fa48("38529"), [payload])
    }));
    ({
      events
    } = await plugins.hooks.fire(stryMutAct_9fa48("38530") ? "" : (stryCov_9fa48("38530"), 'filter:topic.events.log'), stryMutAct_9fa48("38531") ? {} : (stryCov_9fa48("38531"), {
      events
    })));
    return events;
  }
};
Events.purge = async (tid, eventIds = stryMutAct_9fa48("38532") ? ["Stryker was here"] : (stryCov_9fa48("38532"), [])) => {
  if (stryMutAct_9fa48("38533")) {
    {}
  } else {
    stryCov_9fa48("38533");
    if (stryMutAct_9fa48("38535") ? false : stryMutAct_9fa48("38534") ? true : (stryCov_9fa48("38534", "38535"), eventIds.length)) {
      if (stryMutAct_9fa48("38536")) {
        {}
      } else {
        stryCov_9fa48("38536");
        const isTopicEvent = await db.isSortedSetMembers(stryMutAct_9fa48("38537") ? `` : (stryCov_9fa48("38537"), `topic:${tid}:events`), eventIds);
        eventIds = stryMutAct_9fa48("38538") ? eventIds : (stryCov_9fa48("38538"), eventIds.filter(stryMutAct_9fa48("38539") ? () => undefined : (stryCov_9fa48("38539"), (id, index) => isTopicEvent[index])));
        await Promise.all(stryMutAct_9fa48("38540") ? [] : (stryCov_9fa48("38540"), [db.sortedSetRemove(stryMutAct_9fa48("38541") ? `` : (stryCov_9fa48("38541"), `topic:${tid}:events`), eventIds), db.deleteAll(eventIds.map(stryMutAct_9fa48("38542") ? () => undefined : (stryCov_9fa48("38542"), id => stryMutAct_9fa48("38543") ? `` : (stryCov_9fa48("38543"), `topicEvent:${id}`))))]));
      }
    } else {
      if (stryMutAct_9fa48("38544")) {
        {}
      } else {
        stryCov_9fa48("38544");
        const keys = stryMutAct_9fa48("38545") ? [] : (stryCov_9fa48("38545"), [stryMutAct_9fa48("38546") ? `` : (stryCov_9fa48("38546"), `topic:${tid}:events`)]);
        const eventIds = await db.getSortedSetRange(keys[0], 0, stryMutAct_9fa48("38547") ? +1 : (stryCov_9fa48("38547"), -1));
        keys.push(...eventIds.map(stryMutAct_9fa48("38548") ? () => undefined : (stryCov_9fa48("38548"), id => stryMutAct_9fa48("38549") ? `` : (stryCov_9fa48("38549"), `topicEvent:${id}`))));
        await db.deleteAll(keys);
      }
    }
  }
};