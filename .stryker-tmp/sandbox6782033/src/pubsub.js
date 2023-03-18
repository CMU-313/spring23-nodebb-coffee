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
const EventEmitter = require('events');
const nconf = require('nconf');
let real;
let noCluster;
let singleHost;
function get() {
  if (stryMutAct_9fa48("32364")) {
    {}
  } else {
    stryCov_9fa48("32364");
    if (stryMutAct_9fa48("32366") ? false : stryMutAct_9fa48("32365") ? true : (stryCov_9fa48("32365", "32366"), real)) {
      if (stryMutAct_9fa48("32367")) {
        {}
      } else {
        stryCov_9fa48("32367");
        return real;
      }
    }
    let pubsub;
    if (stryMutAct_9fa48("32370") ? false : stryMutAct_9fa48("32369") ? true : stryMutAct_9fa48("32368") ? nconf.get('isCluster') : (stryCov_9fa48("32368", "32369", "32370"), !nconf.get(stryMutAct_9fa48("32371") ? "" : (stryCov_9fa48("32371"), 'isCluster')))) {
      if (stryMutAct_9fa48("32372")) {
        {}
      } else {
        stryCov_9fa48("32372");
        if (stryMutAct_9fa48("32374") ? false : stryMutAct_9fa48("32373") ? true : (stryCov_9fa48("32373", "32374"), noCluster)) {
          if (stryMutAct_9fa48("32375")) {
            {}
          } else {
            stryCov_9fa48("32375");
            real = noCluster;
            return real;
          }
        }
        noCluster = new EventEmitter();
        noCluster.publish = noCluster.emit.bind(noCluster);
        pubsub = noCluster;
      }
    } else if (stryMutAct_9fa48("32377") ? false : stryMutAct_9fa48("32376") ? true : (stryCov_9fa48("32376", "32377"), nconf.get(stryMutAct_9fa48("32378") ? "" : (stryCov_9fa48("32378"), 'singleHostCluster')))) {
      if (stryMutAct_9fa48("32379")) {
        {}
      } else {
        stryCov_9fa48("32379");
        if (stryMutAct_9fa48("32381") ? false : stryMutAct_9fa48("32380") ? true : (stryCov_9fa48("32380", "32381"), singleHost)) {
          if (stryMutAct_9fa48("32382")) {
            {}
          } else {
            stryCov_9fa48("32382");
            real = singleHost;
            return real;
          }
        }
        singleHost = new EventEmitter();
        if (stryMutAct_9fa48("32385") ? false : stryMutAct_9fa48("32384") ? true : stryMutAct_9fa48("32383") ? process.send : (stryCov_9fa48("32383", "32384", "32385"), !process.send)) {
          if (stryMutAct_9fa48("32386")) {
            {}
          } else {
            stryCov_9fa48("32386");
            singleHost.publish = singleHost.emit.bind(singleHost);
          }
        } else {
          if (stryMutAct_9fa48("32387")) {
            {}
          } else {
            stryCov_9fa48("32387");
            singleHost.publish = function (event, data) {
              if (stryMutAct_9fa48("32388")) {
                {}
              } else {
                stryCov_9fa48("32388");
                process.send(stryMutAct_9fa48("32389") ? {} : (stryCov_9fa48("32389"), {
                  action: stryMutAct_9fa48("32390") ? "" : (stryCov_9fa48("32390"), 'pubsub'),
                  event: event,
                  data: data
                }));
              }
            };
            process.on(stryMutAct_9fa48("32391") ? "" : (stryCov_9fa48("32391"), 'message'), message => {
              if (stryMutAct_9fa48("32392")) {
                {}
              } else {
                stryCov_9fa48("32392");
                if (stryMutAct_9fa48("32395") ? message && typeof message === 'object' || message.action === 'pubsub' : stryMutAct_9fa48("32394") ? false : stryMutAct_9fa48("32393") ? true : (stryCov_9fa48("32393", "32394", "32395"), (stryMutAct_9fa48("32397") ? message || typeof message === 'object' : stryMutAct_9fa48("32396") ? true : (stryCov_9fa48("32396", "32397"), message && (stryMutAct_9fa48("32399") ? typeof message !== 'object' : stryMutAct_9fa48("32398") ? true : (stryCov_9fa48("32398", "32399"), typeof message === (stryMutAct_9fa48("32400") ? "" : (stryCov_9fa48("32400"), 'object')))))) && (stryMutAct_9fa48("32402") ? message.action !== 'pubsub' : stryMutAct_9fa48("32401") ? true : (stryCov_9fa48("32401", "32402"), message.action === (stryMutAct_9fa48("32403") ? "" : (stryCov_9fa48("32403"), 'pubsub')))))) {
                  if (stryMutAct_9fa48("32404")) {
                    {}
                  } else {
                    stryCov_9fa48("32404");
                    singleHost.emit(message.event, message.data);
                  }
                }
              }
            });
          }
        }
        pubsub = singleHost;
      }
    } else if (stryMutAct_9fa48("32406") ? false : stryMutAct_9fa48("32405") ? true : (stryCov_9fa48("32405", "32406"), nconf.get(stryMutAct_9fa48("32407") ? "" : (stryCov_9fa48("32407"), 'redis')))) {
      if (stryMutAct_9fa48("32408")) {
        {}
      } else {
        stryCov_9fa48("32408");
        pubsub = require('./database/redis/pubsub');
      }
    } else {
      if (stryMutAct_9fa48("32409")) {
        {}
      } else {
        stryCov_9fa48("32409");
        throw new Error(stryMutAct_9fa48("32410") ? "" : (stryCov_9fa48("32410"), '[[error:redis-required-for-pubsub]]'));
      }
    }
    real = pubsub;
    return pubsub;
  }
}
module.exports = stryMutAct_9fa48("32411") ? {} : (stryCov_9fa48("32411"), {
  publish: function (event, data) {
    if (stryMutAct_9fa48("32412")) {
      {}
    } else {
      stryCov_9fa48("32412");
      get().publish(event, data);
    }
  },
  on: function (event, callback) {
    if (stryMutAct_9fa48("32413")) {
      {}
    } else {
      stryCov_9fa48("32413");
      get().on(event, callback);
    }
  },
  removeAllListeners: function (event) {
    if (stryMutAct_9fa48("32414")) {
      {}
    } else {
      stryCov_9fa48("32414");
      get().removeAllListeners(event);
    }
  },
  reset: function () {
    if (stryMutAct_9fa48("32415")) {
      {}
    } else {
      stryCov_9fa48("32415");
      real = null;
    }
  }
});