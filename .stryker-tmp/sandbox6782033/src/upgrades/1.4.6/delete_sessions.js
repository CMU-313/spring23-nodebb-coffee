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
const db = require('../../database');
const batch = require('../../batch');
module.exports = stryMutAct_9fa48("44306") ? {} : (stryCov_9fa48("44306"), {
  name: stryMutAct_9fa48("44307") ? "" : (stryCov_9fa48("44307"), 'Delete accidentally long-lived sessions'),
  timestamp: Date.UTC(2017, 3, 16),
  method: async function () {
    if (stryMutAct_9fa48("44308")) {
      {}
    } else {
      stryCov_9fa48("44308");
      let configJSON;
      try {
        if (stryMutAct_9fa48("44309")) {
          {}
        } else {
          stryCov_9fa48("44309");
          configJSON = stryMutAct_9fa48("44312") ? require('../../../config.json') && {
            [process.env.database]: true
          } : stryMutAct_9fa48("44311") ? false : stryMutAct_9fa48("44310") ? true : (stryCov_9fa48("44310", "44311", "44312"), require('../../../config.json') || (stryMutAct_9fa48("44313") ? {} : (stryCov_9fa48("44313"), {
            [process.env.database]: stryMutAct_9fa48("44314") ? false : (stryCov_9fa48("44314"), true)
          })));
        }
      } catch (err) {
        if (stryMutAct_9fa48("44315")) {
          {}
        } else {
          stryCov_9fa48("44315");
          configJSON = stryMutAct_9fa48("44316") ? {} : (stryCov_9fa48("44316"), {
            [process.env.database]: stryMutAct_9fa48("44317") ? false : (stryCov_9fa48("44317"), true)
          });
        }
      }
      const isRedisSessionStore = configJSON.hasOwnProperty(stryMutAct_9fa48("44318") ? "" : (stryCov_9fa48("44318"), 'redis'));
      const {
        progress
      } = this;
      if (stryMutAct_9fa48("44320") ? false : stryMutAct_9fa48("44319") ? true : (stryCov_9fa48("44319", "44320"), isRedisSessionStore)) {
        if (stryMutAct_9fa48("44321")) {
          {}
        } else {
          stryCov_9fa48("44321");
          const connection = require('../../database/redis/connection');
          const client = await connection.connect(nconf.get(stryMutAct_9fa48("44322") ? "" : (stryCov_9fa48("44322"), 'redis')));
          const sessionKeys = await client.keys(stryMutAct_9fa48("44323") ? "" : (stryCov_9fa48("44323"), 'sess:*'));
          progress.total = sessionKeys.length;
          await batch.processArray(sessionKeys, async keys => {
            if (stryMutAct_9fa48("44324")) {
              {}
            } else {
              stryCov_9fa48("44324");
              const multi = client.multi();
              keys.forEach(key => {
                if (stryMutAct_9fa48("44325")) {
                  {}
                } else {
                  stryCov_9fa48("44325");
                  progress.incr();
                  multi.del(key);
                }
              });
              await multi.exec();
            }
          }, stryMutAct_9fa48("44326") ? {} : (stryCov_9fa48("44326"), {
            batch: 1000
          }));
        }
      } else if (stryMutAct_9fa48("44329") ? db.client || db.client.collection : stryMutAct_9fa48("44328") ? false : stryMutAct_9fa48("44327") ? true : (stryCov_9fa48("44327", "44328", "44329"), db.client && db.client.collection)) {
        if (stryMutAct_9fa48("44330")) {
          {}
        } else {
          stryCov_9fa48("44330");
          await db.client.collection(stryMutAct_9fa48("44331") ? "" : (stryCov_9fa48("44331"), 'sessions')).deleteMany({}, {});
        }
      }
    }
  }
});