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
const winston = require('winston');
const db = require('../../database');
module.exports = stryMutAct_9fa48("44193") ? {} : (stryCov_9fa48("44193"), {
  name: stryMutAct_9fa48("44194") ? "" : (stryCov_9fa48("44194"), 'Sorted set for pinned topics'),
  timestamp: Date.UTC(2016, 10, 25),
  method: function (callback) {
    if (stryMutAct_9fa48("44195")) {
      {}
    } else {
      stryCov_9fa48("44195");
      const topics = require('../../topics');
      const batch = require('../../batch');
      batch.processSortedSet(stryMutAct_9fa48("44196") ? "" : (stryCov_9fa48("44196"), 'topics:tid'), (ids, next) => {
        if (stryMutAct_9fa48("44197")) {
          {}
        } else {
          stryCov_9fa48("44197");
          topics.getTopicsFields(ids, stryMutAct_9fa48("44198") ? [] : (stryCov_9fa48("44198"), [stryMutAct_9fa48("44199") ? "" : (stryCov_9fa48("44199"), 'tid'), stryMutAct_9fa48("44200") ? "" : (stryCov_9fa48("44200"), 'cid'), stryMutAct_9fa48("44201") ? "" : (stryCov_9fa48("44201"), 'pinned'), stryMutAct_9fa48("44202") ? "" : (stryCov_9fa48("44202"), 'lastposttime')]), (err, data) => {
            if (stryMutAct_9fa48("44203")) {
              {}
            } else {
              stryCov_9fa48("44203");
              if (stryMutAct_9fa48("44205") ? false : stryMutAct_9fa48("44204") ? true : (stryCov_9fa48("44204", "44205"), err)) {
                if (stryMutAct_9fa48("44206")) {
                  {}
                } else {
                  stryCov_9fa48("44206");
                  return next(err);
                }
              }
              data = stryMutAct_9fa48("44207") ? data : (stryCov_9fa48("44207"), data.filter(stryMutAct_9fa48("44208") ? () => undefined : (stryCov_9fa48("44208"), topicData => stryMutAct_9fa48("44211") ? parseInt(topicData.pinned, 10) !== 1 : stryMutAct_9fa48("44210") ? false : stryMutAct_9fa48("44209") ? true : (stryCov_9fa48("44209", "44210", "44211"), parseInt(topicData.pinned, 10) === 1))));
              async.eachSeries(data, (topicData, next) => {
                if (stryMutAct_9fa48("44212")) {
                  {}
                } else {
                  stryCov_9fa48("44212");
                  winston.verbose(stryMutAct_9fa48("44213") ? `` : (stryCov_9fa48("44213"), `processing tid: ${topicData.tid}`));
                  async.parallel(stryMutAct_9fa48("44214") ? [] : (stryCov_9fa48("44214"), [async.apply(db.sortedSetAdd, stryMutAct_9fa48("44215") ? `` : (stryCov_9fa48("44215"), `cid:${topicData.cid}:tids:pinned`), Date.now(), topicData.tid), async.apply(db.sortedSetRemove, stryMutAct_9fa48("44216") ? `` : (stryCov_9fa48("44216"), `cid:${topicData.cid}:tids`), topicData.tid), async.apply(db.sortedSetRemove, stryMutAct_9fa48("44217") ? `` : (stryCov_9fa48("44217"), `cid:${topicData.cid}:tids:posts`), topicData.tid)]), next);
                }
              }, next);
            }
          });
        }
      }, callback);
    }
  }
});