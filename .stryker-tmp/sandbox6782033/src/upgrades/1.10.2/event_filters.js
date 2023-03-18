/* eslint-disable no-await-in-loop */
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
const batch = require('../../batch');
module.exports = stryMutAct_9fa48("42425") ? {} : (stryCov_9fa48("42425"), {
  name: stryMutAct_9fa48("42426") ? "" : (stryCov_9fa48("42426"), 'add filters to events'),
  timestamp: Date.UTC(2018, 9, 4),
  method: async function () {
    if (stryMutAct_9fa48("42427")) {
      {}
    } else {
      stryCov_9fa48("42427");
      const {
        progress
      } = this;
      await batch.processSortedSet(stryMutAct_9fa48("42428") ? "" : (stryCov_9fa48("42428"), 'events:time'), async eids => {
        if (stryMutAct_9fa48("42429")) {
          {}
        } else {
          stryCov_9fa48("42429");
          for (const eid of eids) {
            if (stryMutAct_9fa48("42430")) {
              {}
            } else {
              stryCov_9fa48("42430");
              progress.incr();
              const eventData = await db.getObject(stryMutAct_9fa48("42431") ? `` : (stryCov_9fa48("42431"), `event:${eid}`));
              if (stryMutAct_9fa48("42434") ? false : stryMutAct_9fa48("42433") ? true : stryMutAct_9fa48("42432") ? eventData : (stryCov_9fa48("42432", "42433", "42434"), !eventData)) {
                if (stryMutAct_9fa48("42435")) {
                  {}
                } else {
                  stryCov_9fa48("42435");
                  await db.sortedSetRemove(stryMutAct_9fa48("42436") ? "" : (stryCov_9fa48("42436"), 'events:time'), eid);
                  return;
                }
              }
              // privilege events we're missing type field
              if (stryMutAct_9fa48("42439") ? !eventData.type || eventData.privilege : stryMutAct_9fa48("42438") ? false : stryMutAct_9fa48("42437") ? true : (stryCov_9fa48("42437", "42438", "42439"), (stryMutAct_9fa48("42440") ? eventData.type : (stryCov_9fa48("42440"), !eventData.type)) && eventData.privilege)) {
                if (stryMutAct_9fa48("42441")) {
                  {}
                } else {
                  stryCov_9fa48("42441");
                  eventData.type = stryMutAct_9fa48("42442") ? "" : (stryCov_9fa48("42442"), 'privilege-change');
                  await db.setObjectField(stryMutAct_9fa48("42443") ? `` : (stryCov_9fa48("42443"), `event:${eid}`), stryMutAct_9fa48("42444") ? "" : (stryCov_9fa48("42444"), 'type'), stryMutAct_9fa48("42445") ? "" : (stryCov_9fa48("42445"), 'privilege-change'));
                  await db.sortedSetAdd(stryMutAct_9fa48("42446") ? `` : (stryCov_9fa48("42446"), `events:time:${eventData.type}`), eventData.timestamp, eid);
                  return;
                }
              }
              await db.sortedSetAdd(stryMutAct_9fa48("42447") ? `` : (stryCov_9fa48("42447"), `events:time:${stryMutAct_9fa48("42450") ? eventData.type && '' : stryMutAct_9fa48("42449") ? false : stryMutAct_9fa48("42448") ? true : (stryCov_9fa48("42448", "42449", "42450"), eventData.type || (stryMutAct_9fa48("42451") ? "Stryker was here!" : (stryCov_9fa48("42451"), '')))}`), eventData.timestamp, eid);
            }
          }
        }
      }, stryMutAct_9fa48("42452") ? {} : (stryCov_9fa48("42452"), {
        progress: this.progress
      }));
    }
  }
});