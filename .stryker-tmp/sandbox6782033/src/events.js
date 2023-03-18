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
const _ = require('lodash');
const db = require('./database');
const batch = require('./batch');
const user = require('./user');
const utils = require('./utils');
const plugins = require('./plugins');
const events = module.exports;
events.types = stryMutAct_9fa48("18459") ? [] : (stryCov_9fa48("18459"), [stryMutAct_9fa48("18460") ? "" : (stryCov_9fa48("18460"), 'plugin-activate'), stryMutAct_9fa48("18461") ? "" : (stryCov_9fa48("18461"), 'plugin-deactivate'), stryMutAct_9fa48("18462") ? "" : (stryCov_9fa48("18462"), 'plugin-install'), stryMutAct_9fa48("18463") ? "" : (stryCov_9fa48("18463"), 'plugin-uninstall'), stryMutAct_9fa48("18464") ? "" : (stryCov_9fa48("18464"), 'restart'), stryMutAct_9fa48("18465") ? "" : (stryCov_9fa48("18465"), 'build'), stryMutAct_9fa48("18466") ? "" : (stryCov_9fa48("18466"), 'config-change'), stryMutAct_9fa48("18467") ? "" : (stryCov_9fa48("18467"), 'settings-change'), stryMutAct_9fa48("18468") ? "" : (stryCov_9fa48("18468"), 'category-purge'), stryMutAct_9fa48("18469") ? "" : (stryCov_9fa48("18469"), 'privilege-change'), stryMutAct_9fa48("18470") ? "" : (stryCov_9fa48("18470"), 'post-delete'), stryMutAct_9fa48("18471") ? "" : (stryCov_9fa48("18471"), 'post-restore'), stryMutAct_9fa48("18472") ? "" : (stryCov_9fa48("18472"), 'post-purge'), stryMutAct_9fa48("18473") ? "" : (stryCov_9fa48("18473"), 'post-edit'), stryMutAct_9fa48("18474") ? "" : (stryCov_9fa48("18474"), 'post-move'), stryMutAct_9fa48("18475") ? "" : (stryCov_9fa48("18475"), 'post-change-owner'), stryMutAct_9fa48("18476") ? "" : (stryCov_9fa48("18476"), 'post-queue-reply-accept'), stryMutAct_9fa48("18477") ? "" : (stryCov_9fa48("18477"), 'post-queue-topic-accept'), stryMutAct_9fa48("18478") ? "" : (stryCov_9fa48("18478"), 'post-queue-reply-reject'), stryMutAct_9fa48("18479") ? "" : (stryCov_9fa48("18479"), 'post-queue-topic-reject'), stryMutAct_9fa48("18480") ? "" : (stryCov_9fa48("18480"), 'topic-delete'), stryMutAct_9fa48("18481") ? "" : (stryCov_9fa48("18481"), 'topic-restore'), stryMutAct_9fa48("18482") ? "" : (stryCov_9fa48("18482"), 'topic-purge'), stryMutAct_9fa48("18483") ? "" : (stryCov_9fa48("18483"), 'topic-rename'), stryMutAct_9fa48("18484") ? "" : (stryCov_9fa48("18484"), 'topic-merge'), stryMutAct_9fa48("18485") ? "" : (stryCov_9fa48("18485"), 'topic-fork'), stryMutAct_9fa48("18486") ? "" : (stryCov_9fa48("18486"), 'topic-move'), stryMutAct_9fa48("18487") ? "" : (stryCov_9fa48("18487"), 'topic-move-all'), stryMutAct_9fa48("18488") ? "" : (stryCov_9fa48("18488"), 'password-reset'), stryMutAct_9fa48("18489") ? "" : (stryCov_9fa48("18489"), 'user-makeAdmin'), stryMutAct_9fa48("18490") ? "" : (stryCov_9fa48("18490"), 'user-removeAdmin'), stryMutAct_9fa48("18491") ? "" : (stryCov_9fa48("18491"), 'user-ban'), stryMutAct_9fa48("18492") ? "" : (stryCov_9fa48("18492"), 'user-unban'), stryMutAct_9fa48("18493") ? "" : (stryCov_9fa48("18493"), 'user-mute'), stryMutAct_9fa48("18494") ? "" : (stryCov_9fa48("18494"), 'user-unmute'), stryMutAct_9fa48("18495") ? "" : (stryCov_9fa48("18495"), 'user-delete'), stryMutAct_9fa48("18496") ? "" : (stryCov_9fa48("18496"), 'user-deleteAccount'), stryMutAct_9fa48("18497") ? "" : (stryCov_9fa48("18497"), 'user-deleteContent'), stryMutAct_9fa48("18498") ? "" : (stryCov_9fa48("18498"), 'password-change'), stryMutAct_9fa48("18499") ? "" : (stryCov_9fa48("18499"), 'email-confirmation-sent'), stryMutAct_9fa48("18500") ? "" : (stryCov_9fa48("18500"), 'email-change'), stryMutAct_9fa48("18501") ? "" : (stryCov_9fa48("18501"), 'username-change'), stryMutAct_9fa48("18502") ? "" : (stryCov_9fa48("18502"), 'ip-blacklist-save'), stryMutAct_9fa48("18503") ? "" : (stryCov_9fa48("18503"), 'ip-blacklist-addRule'), stryMutAct_9fa48("18504") ? "" : (stryCov_9fa48("18504"), 'registration-approved'), stryMutAct_9fa48("18505") ? "" : (stryCov_9fa48("18505"), 'registration-rejected'), stryMutAct_9fa48("18506") ? "" : (stryCov_9fa48("18506"), 'group-join'), stryMutAct_9fa48("18507") ? "" : (stryCov_9fa48("18507"), 'group-request-membership'), stryMutAct_9fa48("18508") ? "" : (stryCov_9fa48("18508"), 'group-add-member'), stryMutAct_9fa48("18509") ? "" : (stryCov_9fa48("18509"), 'group-leave'), stryMutAct_9fa48("18510") ? "" : (stryCov_9fa48("18510"), 'group-owner-grant'), stryMutAct_9fa48("18511") ? "" : (stryCov_9fa48("18511"), 'group-owner-rescind'), stryMutAct_9fa48("18512") ? "" : (stryCov_9fa48("18512"), 'group-accept-membership'), stryMutAct_9fa48("18513") ? "" : (stryCov_9fa48("18513"), 'group-reject-membership'), stryMutAct_9fa48("18514") ? "" : (stryCov_9fa48("18514"), 'group-invite'), stryMutAct_9fa48("18515") ? "" : (stryCov_9fa48("18515"), 'group-invite-accept'), stryMutAct_9fa48("18516") ? "" : (stryCov_9fa48("18516"), 'group-invite-reject'), stryMutAct_9fa48("18517") ? "" : (stryCov_9fa48("18517"), 'group-kick'), stryMutAct_9fa48("18518") ? "" : (stryCov_9fa48("18518"), 'theme-set'), stryMutAct_9fa48("18519") ? "" : (stryCov_9fa48("18519"), 'export:uploads'), stryMutAct_9fa48("18520") ? "" : (stryCov_9fa48("18520"), 'account-locked'), stryMutAct_9fa48("18521") ? "" : (stryCov_9fa48("18521"), 'getUsersCSV') // To add new types from plugins, just Array.push() to this array
]);

/**
 * Useful options in data: type, uid, ip, targetUid
 * Everything else gets stringified and shown as pretty JSON string
 */
events.log = async function (data) {
  if (stryMutAct_9fa48("18522")) {
    {}
  } else {
    stryCov_9fa48("18522");
    const eid = await db.incrObjectField(stryMutAct_9fa48("18523") ? "" : (stryCov_9fa48("18523"), 'global'), stryMutAct_9fa48("18524") ? "" : (stryCov_9fa48("18524"), 'nextEid'));
    data.timestamp = Date.now();
    data.eid = eid;
    await Promise.all(stryMutAct_9fa48("18525") ? [] : (stryCov_9fa48("18525"), [db.sortedSetsAdd(stryMutAct_9fa48("18526") ? [] : (stryCov_9fa48("18526"), [stryMutAct_9fa48("18527") ? "" : (stryCov_9fa48("18527"), 'events:time'), stryMutAct_9fa48("18528") ? `` : (stryCov_9fa48("18528"), `events:time:${data.type}`)]), data.timestamp, eid), db.setObject(stryMutAct_9fa48("18529") ? `` : (stryCov_9fa48("18529"), `event:${eid}`), data)]));
    plugins.hooks.fire(stryMutAct_9fa48("18530") ? "" : (stryCov_9fa48("18530"), 'action:events.log'), stryMutAct_9fa48("18531") ? {} : (stryCov_9fa48("18531"), {
      data: data
    }));
  }
};
events.getEvents = async function (filter, start, stop, from, to) {
  if (stryMutAct_9fa48("18532")) {
    {}
  } else {
    stryCov_9fa48("18532");
    // from/to optional
    if (stryMutAct_9fa48("18535") ? from !== undefined : stryMutAct_9fa48("18534") ? false : stryMutAct_9fa48("18533") ? true : (stryCov_9fa48("18533", "18534", "18535"), from === undefined)) {
      if (stryMutAct_9fa48("18536")) {
        {}
      } else {
        stryCov_9fa48("18536");
        from = 0;
      }
    }
    if (stryMutAct_9fa48("18539") ? to !== undefined : stryMutAct_9fa48("18538") ? false : stryMutAct_9fa48("18537") ? true : (stryCov_9fa48("18537", "18538", "18539"), to === undefined)) {
      if (stryMutAct_9fa48("18540")) {
        {}
      } else {
        stryCov_9fa48("18540");
        to = Date.now();
      }
    }
    const eids = await db.getSortedSetRevRangeByScore(stryMutAct_9fa48("18541") ? `` : (stryCov_9fa48("18541"), `events:time${filter ? stryMutAct_9fa48("18542") ? `` : (stryCov_9fa48("18542"), `:${filter}`) : stryMutAct_9fa48("18543") ? "Stryker was here!" : (stryCov_9fa48("18543"), '')}`), start, stryMutAct_9fa48("18544") ? stop - start - 1 : (stryCov_9fa48("18544"), (stryMutAct_9fa48("18545") ? stop + start : (stryCov_9fa48("18545"), stop - start)) + 1), to, from);
    let eventsData = await db.getObjects(eids.map(stryMutAct_9fa48("18546") ? () => undefined : (stryCov_9fa48("18546"), eid => stryMutAct_9fa48("18547") ? `` : (stryCov_9fa48("18547"), `event:${eid}`))));
    eventsData = stryMutAct_9fa48("18548") ? eventsData : (stryCov_9fa48("18548"), eventsData.filter(Boolean));
    await addUserData(eventsData, stryMutAct_9fa48("18549") ? "" : (stryCov_9fa48("18549"), 'uid'), stryMutAct_9fa48("18550") ? "" : (stryCov_9fa48("18550"), 'user'));
    await addUserData(eventsData, stryMutAct_9fa48("18551") ? "" : (stryCov_9fa48("18551"), 'targetUid'), stryMutAct_9fa48("18552") ? "" : (stryCov_9fa48("18552"), 'targetUser'));
    eventsData.forEach(event => {
      if (stryMutAct_9fa48("18553")) {
        {}
      } else {
        stryCov_9fa48("18553");
        Object.keys(event).forEach(key => {
          if (stryMutAct_9fa48("18554")) {
            {}
          } else {
            stryCov_9fa48("18554");
            if (stryMutAct_9fa48("18557") ? typeof event[key] !== 'string' : stryMutAct_9fa48("18556") ? false : stryMutAct_9fa48("18555") ? true : (stryCov_9fa48("18555", "18556", "18557"), typeof event[key] === (stryMutAct_9fa48("18558") ? "" : (stryCov_9fa48("18558"), 'string')))) {
              if (stryMutAct_9fa48("18559")) {
                {}
              } else {
                stryCov_9fa48("18559");
                event[key] = validator.escape(String(stryMutAct_9fa48("18562") ? event[key] && '' : stryMutAct_9fa48("18561") ? false : stryMutAct_9fa48("18560") ? true : (stryCov_9fa48("18560", "18561", "18562"), event[key] || (stryMutAct_9fa48("18563") ? "Stryker was here!" : (stryCov_9fa48("18563"), '')))));
              }
            }
          }
        });
        const e = utils.merge(event);
        e.eid = undefined;
        e.uid = undefined;
        e.type = undefined;
        e.ip = undefined;
        e.user = undefined;
        event.jsonString = JSON.stringify(e, null, 4);
        event.timestampISO = new Date(parseInt(event.timestamp, 10)).toUTCString();
      }
    });
    return eventsData;
  }
};
async function addUserData(eventsData, field, objectName) {
  if (stryMutAct_9fa48("18564")) {
    {}
  } else {
    stryCov_9fa48("18564");
    const uids = _.uniq(eventsData.map(stryMutAct_9fa48("18565") ? () => undefined : (stryCov_9fa48("18565"), event => stryMutAct_9fa48("18568") ? event || event[field] : stryMutAct_9fa48("18567") ? false : stryMutAct_9fa48("18566") ? true : (stryCov_9fa48("18566", "18567", "18568"), event && event[field]))));
    if (stryMutAct_9fa48("18571") ? false : stryMutAct_9fa48("18570") ? true : stryMutAct_9fa48("18569") ? uids.length : (stryCov_9fa48("18569", "18570", "18571"), !uids.length)) {
      if (stryMutAct_9fa48("18572")) {
        {}
      } else {
        stryCov_9fa48("18572");
        return eventsData;
      }
    }
    const [isAdmin, userData] = await Promise.all(stryMutAct_9fa48("18573") ? [] : (stryCov_9fa48("18573"), [user.isAdministrator(uids), user.getUsersFields(uids, stryMutAct_9fa48("18574") ? [] : (stryCov_9fa48("18574"), [stryMutAct_9fa48("18575") ? "" : (stryCov_9fa48("18575"), 'username'), stryMutAct_9fa48("18576") ? "" : (stryCov_9fa48("18576"), 'userslug'), stryMutAct_9fa48("18577") ? "" : (stryCov_9fa48("18577"), 'picture')]))]));
    const map = {};
    userData.forEach((user, index) => {
      if (stryMutAct_9fa48("18578")) {
        {}
      } else {
        stryCov_9fa48("18578");
        user.isAdmin = isAdmin[index];
        map[user.uid] = user;
      }
    });
    eventsData.forEach(event => {
      if (stryMutAct_9fa48("18579")) {
        {}
      } else {
        stryCov_9fa48("18579");
        if (stryMutAct_9fa48("18581") ? false : stryMutAct_9fa48("18580") ? true : (stryCov_9fa48("18580", "18581"), map[event[field]])) {
          if (stryMutAct_9fa48("18582")) {
            {}
          } else {
            stryCov_9fa48("18582");
            event[objectName] = map[event[field]];
          }
        }
      }
    });
    return eventsData;
  }
}
events.deleteEvents = async function (eids) {
  if (stryMutAct_9fa48("18583")) {
    {}
  } else {
    stryCov_9fa48("18583");
    const keys = eids.map(stryMutAct_9fa48("18584") ? () => undefined : (stryCov_9fa48("18584"), eid => stryMutAct_9fa48("18585") ? `` : (stryCov_9fa48("18585"), `event:${eid}`)));
    const eventData = await db.getObjectsFields(keys, stryMutAct_9fa48("18586") ? [] : (stryCov_9fa48("18586"), [stryMutAct_9fa48("18587") ? "" : (stryCov_9fa48("18587"), 'type')]));
    const sets = _.uniq((stryMutAct_9fa48("18588") ? [] : (stryCov_9fa48("18588"), [stryMutAct_9fa48("18589") ? "" : (stryCov_9fa48("18589"), 'events:time')])).concat(eventData.map(stryMutAct_9fa48("18590") ? () => undefined : (stryCov_9fa48("18590"), e => stryMutAct_9fa48("18591") ? `` : (stryCov_9fa48("18591"), `events:time:${e.type}`)))));
    await Promise.all(stryMutAct_9fa48("18592") ? [] : (stryCov_9fa48("18592"), [db.deleteAll(keys), db.sortedSetRemove(sets, eids)]));
  }
};
events.deleteAll = async function () {
  if (stryMutAct_9fa48("18593")) {
    {}
  } else {
    stryCov_9fa48("18593");
    await batch.processSortedSet(stryMutAct_9fa48("18594") ? "" : (stryCov_9fa48("18594"), 'events:time'), async eids => {
      if (stryMutAct_9fa48("18595")) {
        {}
      } else {
        stryCov_9fa48("18595");
        await events.deleteEvents(eids);
      }
    }, stryMutAct_9fa48("18596") ? {} : (stryCov_9fa48("18596"), {
      alwaysStartAt: 0,
      batch: 500
    }));
  }
};
require('./promisify')(events);