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
module.exports = stryMutAct_9fa48("44672") ? {} : (stryCov_9fa48("44672"), {
  name: stryMutAct_9fa48("44673") ? "" : (stryCov_9fa48("44673"), 'Change the schema of simple keys so they don\'t use value field (mongodb only)'),
  timestamp: Date.UTC(2017, 11, 18),
  method: async function () {
    if (stryMutAct_9fa48("44674")) {
      {}
    } else {
      stryCov_9fa48("44674");
      let configJSON;
      try {
        if (stryMutAct_9fa48("44675")) {
          {}
        } else {
          stryCov_9fa48("44675");
          configJSON = stryMutAct_9fa48("44678") ? require('../../../config.json') && {
            [process.env.database]: true,
            database: process.env.database
          } : stryMutAct_9fa48("44677") ? false : stryMutAct_9fa48("44676") ? true : (stryCov_9fa48("44676", "44677", "44678"), require('../../../config.json') || (stryMutAct_9fa48("44679") ? {} : (stryCov_9fa48("44679"), {
            [process.env.database]: stryMutAct_9fa48("44680") ? false : (stryCov_9fa48("44680"), true),
            database: process.env.database
          })));
        }
      } catch (err) {
        if (stryMutAct_9fa48("44681")) {
          {}
        } else {
          stryCov_9fa48("44681");
          configJSON = stryMutAct_9fa48("44682") ? {} : (stryCov_9fa48("44682"), {
            [process.env.database]: stryMutAct_9fa48("44683") ? false : (stryCov_9fa48("44683"), true),
            database: process.env.database
          });
        }
      }
      const isMongo = stryMutAct_9fa48("44686") ? configJSON.hasOwnProperty('mongo') || configJSON.database === 'mongo' : stryMutAct_9fa48("44685") ? false : stryMutAct_9fa48("44684") ? true : (stryCov_9fa48("44684", "44685", "44686"), configJSON.hasOwnProperty(stryMutAct_9fa48("44687") ? "" : (stryCov_9fa48("44687"), 'mongo')) && (stryMutAct_9fa48("44689") ? configJSON.database !== 'mongo' : stryMutAct_9fa48("44688") ? true : (stryCov_9fa48("44688", "44689"), configJSON.database === (stryMutAct_9fa48("44690") ? "" : (stryCov_9fa48("44690"), 'mongo')))));
      const {
        progress
      } = this;
      if (stryMutAct_9fa48("44693") ? false : stryMutAct_9fa48("44692") ? true : stryMutAct_9fa48("44691") ? isMongo : (stryCov_9fa48("44691", "44692", "44693"), !isMongo)) {
        if (stryMutAct_9fa48("44694")) {
          {}
        } else {
          stryCov_9fa48("44694");
          return;
        }
      }
      const {
        client
      } = db;
      const query = stryMutAct_9fa48("44695") ? {} : (stryCov_9fa48("44695"), {
        _key: stryMutAct_9fa48("44696") ? {} : (stryCov_9fa48("44696"), {
          $exists: stryMutAct_9fa48("44697") ? false : (stryCov_9fa48("44697"), true)
        }),
        value: stryMutAct_9fa48("44698") ? {} : (stryCov_9fa48("44698"), {
          $exists: stryMutAct_9fa48("44699") ? false : (stryCov_9fa48("44699"), true)
        }),
        score: stryMutAct_9fa48("44700") ? {} : (stryCov_9fa48("44700"), {
          $exists: stryMutAct_9fa48("44701") ? true : (stryCov_9fa48("44701"), false)
        })
      });
      progress.total = await client.collection(stryMutAct_9fa48("44702") ? "" : (stryCov_9fa48("44702"), 'objects')).countDocuments(query);
      const cursor = await client.collection(stryMutAct_9fa48("44703") ? "" : (stryCov_9fa48("44703"), 'objects')).find(query).batchSize(1000);
      let done = stryMutAct_9fa48("44704") ? true : (stryCov_9fa48("44704"), false);
      while (stryMutAct_9fa48("44706") ? false : stryMutAct_9fa48("44705") ? done : (stryCov_9fa48("44705", "44706"), !done)) {
        if (stryMutAct_9fa48("44707")) {
          {}
        } else {
          stryCov_9fa48("44707");
          const item = await cursor.next();
          progress.incr();
          if (stryMutAct_9fa48("44710") ? item !== null : stryMutAct_9fa48("44709") ? false : stryMutAct_9fa48("44708") ? true : (stryCov_9fa48("44708", "44709", "44710"), item === null)) {
            if (stryMutAct_9fa48("44711")) {
              {}
            } else {
              stryCov_9fa48("44711");
              done = stryMutAct_9fa48("44712") ? false : (stryCov_9fa48("44712"), true);
            }
          } else {
            if (stryMutAct_9fa48("44713")) {
              {}
            } else {
              stryCov_9fa48("44713");
              delete item.expireAt;
              if (stryMutAct_9fa48("44716") ? Object.keys(item).length === 3 && item.hasOwnProperty('_key') || item.hasOwnProperty('value') : stryMutAct_9fa48("44715") ? false : stryMutAct_9fa48("44714") ? true : (stryCov_9fa48("44714", "44715", "44716"), (stryMutAct_9fa48("44718") ? Object.keys(item).length === 3 || item.hasOwnProperty('_key') : stryMutAct_9fa48("44717") ? true : (stryCov_9fa48("44717", "44718"), (stryMutAct_9fa48("44720") ? Object.keys(item).length !== 3 : stryMutAct_9fa48("44719") ? true : (stryCov_9fa48("44719", "44720"), Object.keys(item).length === 3)) && item.hasOwnProperty(stryMutAct_9fa48("44721") ? "" : (stryCov_9fa48("44721"), '_key')))) && item.hasOwnProperty(stryMutAct_9fa48("44722") ? "" : (stryCov_9fa48("44722"), 'value')))) {
                if (stryMutAct_9fa48("44723")) {
                  {}
                } else {
                  stryCov_9fa48("44723");
                  await client.collection(stryMutAct_9fa48("44724") ? "" : (stryCov_9fa48("44724"), 'objects')).updateOne(stryMutAct_9fa48("44725") ? {} : (stryCov_9fa48("44725"), {
                    _key: item._key
                  }), stryMutAct_9fa48("44726") ? {} : (stryCov_9fa48("44726"), {
                    $rename: stryMutAct_9fa48("44727") ? {} : (stryCov_9fa48("44727"), {
                      value: stryMutAct_9fa48("44728") ? "" : (stryCov_9fa48("44728"), 'data')
                    })
                  }));
                }
              }
            }
          }
        }
      }
    }
  }
});