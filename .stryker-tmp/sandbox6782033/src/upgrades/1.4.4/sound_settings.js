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
module.exports = stryMutAct_9fa48("44244") ? {} : (stryCov_9fa48("44244"), {
  name: stryMutAct_9fa48("44245") ? "" : (stryCov_9fa48("44245"), 'Update global and user sound settings'),
  timestamp: Date.UTC(2017, 1, 25),
  method: function (callback) {
    if (stryMutAct_9fa48("44246")) {
      {}
    } else {
      stryCov_9fa48("44246");
      const meta = require('../../meta');
      const batch = require('../../batch');
      const map = stryMutAct_9fa48("44247") ? {} : (stryCov_9fa48("44247"), {
        'notification.mp3': stryMutAct_9fa48("44248") ? "" : (stryCov_9fa48("44248"), 'Default | Deedle-dum'),
        'waterdrop-high.mp3': stryMutAct_9fa48("44249") ? "" : (stryCov_9fa48("44249"), 'Default | Water drop (high)'),
        'waterdrop-low.mp3': stryMutAct_9fa48("44250") ? "" : (stryCov_9fa48("44250"), 'Default | Water drop (low)')
      });
      async.parallel(stryMutAct_9fa48("44251") ? [] : (stryCov_9fa48("44251"), [function (cb) {
        if (stryMutAct_9fa48("44252")) {
          {}
        } else {
          stryCov_9fa48("44252");
          const keys = stryMutAct_9fa48("44253") ? [] : (stryCov_9fa48("44253"), [stryMutAct_9fa48("44254") ? "" : (stryCov_9fa48("44254"), 'chat-incoming'), stryMutAct_9fa48("44255") ? "" : (stryCov_9fa48("44255"), 'chat-outgoing'), stryMutAct_9fa48("44256") ? "" : (stryCov_9fa48("44256"), 'notification')]);
          db.getObject(stryMutAct_9fa48("44257") ? "" : (stryCov_9fa48("44257"), 'settings:sounds'), (err, settings) => {
            if (stryMutAct_9fa48("44258")) {
              {}
            } else {
              stryCov_9fa48("44258");
              if (stryMutAct_9fa48("44261") ? err && !settings : stryMutAct_9fa48("44260") ? false : stryMutAct_9fa48("44259") ? true : (stryCov_9fa48("44259", "44260", "44261"), err || (stryMutAct_9fa48("44262") ? settings : (stryCov_9fa48("44262"), !settings)))) {
                if (stryMutAct_9fa48("44263")) {
                  {}
                } else {
                  stryCov_9fa48("44263");
                  return cb(err);
                }
              }
              keys.forEach(key => {
                if (stryMutAct_9fa48("44264")) {
                  {}
                } else {
                  stryCov_9fa48("44264");
                  if (stryMutAct_9fa48("44267") ? settings[key] || !settings[key].includes(' | ') : stryMutAct_9fa48("44266") ? false : stryMutAct_9fa48("44265") ? true : (stryCov_9fa48("44265", "44266", "44267"), settings[key] && (stryMutAct_9fa48("44268") ? settings[key].includes(' | ') : (stryCov_9fa48("44268"), !settings[key].includes(stryMutAct_9fa48("44269") ? "" : (stryCov_9fa48("44269"), ' | ')))))) {
                    if (stryMutAct_9fa48("44270")) {
                      {}
                    } else {
                      stryCov_9fa48("44270");
                      settings[key] = stryMutAct_9fa48("44273") ? map[settings[key]] && '' : stryMutAct_9fa48("44272") ? false : stryMutAct_9fa48("44271") ? true : (stryCov_9fa48("44271", "44272", "44273"), map[settings[key]] || (stryMutAct_9fa48("44274") ? "Stryker was here!" : (stryCov_9fa48("44274"), '')));
                    }
                  }
                }
              });
              meta.configs.setMultiple(settings, cb);
            }
          });
        }
      }, function (cb) {
        if (stryMutAct_9fa48("44275")) {
          {}
        } else {
          stryCov_9fa48("44275");
          const keys = stryMutAct_9fa48("44276") ? [] : (stryCov_9fa48("44276"), [stryMutAct_9fa48("44277") ? "" : (stryCov_9fa48("44277"), 'notificationSound'), stryMutAct_9fa48("44278") ? "" : (stryCov_9fa48("44278"), 'incomingChatSound'), stryMutAct_9fa48("44279") ? "" : (stryCov_9fa48("44279"), 'outgoingChatSound')]);
          batch.processSortedSet(stryMutAct_9fa48("44280") ? "" : (stryCov_9fa48("44280"), 'users:joindate'), (ids, next) => {
            if (stryMutAct_9fa48("44281")) {
              {}
            } else {
              stryCov_9fa48("44281");
              async.each(ids, (uid, next) => {
                if (stryMutAct_9fa48("44282")) {
                  {}
                } else {
                  stryCov_9fa48("44282");
                  db.getObject(stryMutAct_9fa48("44283") ? `` : (stryCov_9fa48("44283"), `user:${uid}:settings`), (err, settings) => {
                    if (stryMutAct_9fa48("44284")) {
                      {}
                    } else {
                      stryCov_9fa48("44284");
                      if (stryMutAct_9fa48("44287") ? err && !settings : stryMutAct_9fa48("44286") ? false : stryMutAct_9fa48("44285") ? true : (stryCov_9fa48("44285", "44286", "44287"), err || (stryMutAct_9fa48("44288") ? settings : (stryCov_9fa48("44288"), !settings)))) {
                        if (stryMutAct_9fa48("44289")) {
                          {}
                        } else {
                          stryCov_9fa48("44289");
                          return next(err);
                        }
                      }
                      const newSettings = {};
                      keys.forEach(key => {
                        if (stryMutAct_9fa48("44290")) {
                          {}
                        } else {
                          stryCov_9fa48("44290");
                          if (stryMutAct_9fa48("44293") ? settings[key] || !settings[key].includes(' | ') : stryMutAct_9fa48("44292") ? false : stryMutAct_9fa48("44291") ? true : (stryCov_9fa48("44291", "44292", "44293"), settings[key] && (stryMutAct_9fa48("44294") ? settings[key].includes(' | ') : (stryCov_9fa48("44294"), !settings[key].includes(stryMutAct_9fa48("44295") ? "" : (stryCov_9fa48("44295"), ' | ')))))) {
                            if (stryMutAct_9fa48("44296")) {
                              {}
                            } else {
                              stryCov_9fa48("44296");
                              newSettings[key] = stryMutAct_9fa48("44299") ? map[settings[key]] && '' : stryMutAct_9fa48("44298") ? false : stryMutAct_9fa48("44297") ? true : (stryCov_9fa48("44297", "44298", "44299"), map[settings[key]] || (stryMutAct_9fa48("44300") ? "Stryker was here!" : (stryCov_9fa48("44300"), '')));
                            }
                          }
                        }
                      });
                      if (stryMutAct_9fa48("44302") ? false : stryMutAct_9fa48("44301") ? true : (stryCov_9fa48("44301", "44302"), Object.keys(newSettings).length)) {
                        if (stryMutAct_9fa48("44303")) {
                          {}
                        } else {
                          stryCov_9fa48("44303");
                          db.setObject(stryMutAct_9fa48("44304") ? `` : (stryCov_9fa48("44304"), `user:${uid}:settings`), newSettings, next);
                        }
                      } else {
                        if (stryMutAct_9fa48("44305")) {
                          {}
                        } else {
                          stryCov_9fa48("44305");
                          setImmediate(next);
                        }
                      }
                    }
                  });
                }
              }, next);
            }
          }, cb);
        }
      }]), callback);
    }
  }
});