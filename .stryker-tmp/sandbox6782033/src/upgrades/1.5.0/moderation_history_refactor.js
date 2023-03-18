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
const async = require('async');
const db = require('../../database');
const batch = require('../../batch');
module.exports = stryMutAct_9fa48("44396") ? {} : (stryCov_9fa48("44396"), {
  name: stryMutAct_9fa48("44397") ? "" : (stryCov_9fa48("44397"), 'Update moderation notes to zset'),
  timestamp: Date.UTC(2017, 2, 22),
  method: function (callback) {
    if (stryMutAct_9fa48("44398")) {
      {}
    } else {
      stryCov_9fa48("44398");
      const {
        progress
      } = this;
      batch.processSortedSet(stryMutAct_9fa48("44399") ? "" : (stryCov_9fa48("44399"), 'users:joindate'), (ids, next) => {
        if (stryMutAct_9fa48("44400")) {
          {}
        } else {
          stryCov_9fa48("44400");
          async.each(ids, (uid, next) => {
            if (stryMutAct_9fa48("44401")) {
              {}
            } else {
              stryCov_9fa48("44401");
              db.getObjectField(stryMutAct_9fa48("44402") ? `` : (stryCov_9fa48("44402"), `user:${uid}`), stryMutAct_9fa48("44403") ? "" : (stryCov_9fa48("44403"), 'moderationNote'), (err, moderationNote) => {
                if (stryMutAct_9fa48("44404")) {
                  {}
                } else {
                  stryCov_9fa48("44404");
                  if (stryMutAct_9fa48("44407") ? err && !moderationNote : stryMutAct_9fa48("44406") ? false : stryMutAct_9fa48("44405") ? true : (stryCov_9fa48("44405", "44406", "44407"), err || (stryMutAct_9fa48("44408") ? moderationNote : (stryCov_9fa48("44408"), !moderationNote)))) {
                    if (stryMutAct_9fa48("44409")) {
                      {}
                    } else {
                      stryCov_9fa48("44409");
                      progress.incr();
                      return next(err);
                    }
                  }
                  const note = stryMutAct_9fa48("44410") ? {} : (stryCov_9fa48("44410"), {
                    uid: 1,
                    note: moderationNote,
                    timestamp: Date.now()
                  });
                  progress.incr();
                  db.sortedSetAdd(stryMutAct_9fa48("44411") ? `` : (stryCov_9fa48("44411"), `uid:${uid}:moderation:notes`), note.timestamp, JSON.stringify(note), next);
                }
              });
            }
          }, next);
        }
      }, stryMutAct_9fa48("44412") ? {} : (stryCov_9fa48("44412"), {
        progress: this.progress
      }), callback);
    }
  }
});