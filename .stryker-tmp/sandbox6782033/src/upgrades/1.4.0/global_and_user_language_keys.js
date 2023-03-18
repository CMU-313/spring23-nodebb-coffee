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
module.exports = stryMutAct_9fa48("44159") ? {} : (stryCov_9fa48("44159"), {
  name: stryMutAct_9fa48("44160") ? "" : (stryCov_9fa48("44160"), 'Update global and user language keys'),
  timestamp: Date.UTC(2016, 10, 22),
  method: async function () {
    if (stryMutAct_9fa48("44161")) {
      {}
    } else {
      stryCov_9fa48("44161");
      const {
        progress
      } = this;
      const user = require('../../user');
      const meta = require('../../meta');
      const batch = require('../../batch');
      const defaultLang = await meta.configs.get(stryMutAct_9fa48("44162") ? "" : (stryCov_9fa48("44162"), 'defaultLang'));
      if (stryMutAct_9fa48("44164") ? false : stryMutAct_9fa48("44163") ? true : (stryCov_9fa48("44163", "44164"), defaultLang)) {
        if (stryMutAct_9fa48("44165")) {
          {}
        } else {
          stryCov_9fa48("44165");
          const newLanguage = defaultLang.replace(stryMutAct_9fa48("44166") ? "" : (stryCov_9fa48("44166"), '_'), stryMutAct_9fa48("44167") ? "" : (stryCov_9fa48("44167"), '-')).replace(stryMutAct_9fa48("44168") ? "" : (stryCov_9fa48("44168"), '@'), stryMutAct_9fa48("44169") ? "" : (stryCov_9fa48("44169"), '-x-'));
          if (stryMutAct_9fa48("44172") ? newLanguage === defaultLang : stryMutAct_9fa48("44171") ? false : stryMutAct_9fa48("44170") ? true : (stryCov_9fa48("44170", "44171", "44172"), newLanguage !== defaultLang)) {
            if (stryMutAct_9fa48("44173")) {
              {}
            } else {
              stryCov_9fa48("44173");
              await meta.configs.set(stryMutAct_9fa48("44174") ? "" : (stryCov_9fa48("44174"), 'defaultLang'), newLanguage);
            }
          }
        }
      }
      await batch.processSortedSet(stryMutAct_9fa48("44175") ? "" : (stryCov_9fa48("44175"), 'users:joindate'), async ids => {
        if (stryMutAct_9fa48("44176")) {
          {}
        } else {
          stryCov_9fa48("44176");
          await Promise.all(ids.map(async uid => {
            if (stryMutAct_9fa48("44177")) {
              {}
            } else {
              stryCov_9fa48("44177");
              progress.incr();
              const language = await db.getObjectField(stryMutAct_9fa48("44178") ? `` : (stryCov_9fa48("44178"), `user:${uid}:settings`), stryMutAct_9fa48("44179") ? "" : (stryCov_9fa48("44179"), 'userLang'));
              if (stryMutAct_9fa48("44181") ? false : stryMutAct_9fa48("44180") ? true : (stryCov_9fa48("44180", "44181"), language)) {
                if (stryMutAct_9fa48("44182")) {
                  {}
                } else {
                  stryCov_9fa48("44182");
                  const newLanguage = language.replace(stryMutAct_9fa48("44183") ? "" : (stryCov_9fa48("44183"), '_'), stryMutAct_9fa48("44184") ? "" : (stryCov_9fa48("44184"), '-')).replace(stryMutAct_9fa48("44185") ? "" : (stryCov_9fa48("44185"), '@'), stryMutAct_9fa48("44186") ? "" : (stryCov_9fa48("44186"), '-x-'));
                  if (stryMutAct_9fa48("44189") ? newLanguage === language : stryMutAct_9fa48("44188") ? false : stryMutAct_9fa48("44187") ? true : (stryCov_9fa48("44187", "44188", "44189"), newLanguage !== language)) {
                    if (stryMutAct_9fa48("44190")) {
                      {}
                    } else {
                      stryCov_9fa48("44190");
                      await user.setSetting(uid, stryMutAct_9fa48("44191") ? "" : (stryCov_9fa48("44191"), 'userLang'), newLanguage);
                    }
                  }
                }
              }
            }
          }));
        }
      }, stryMutAct_9fa48("44192") ? {} : (stryCov_9fa48("44192"), {
        progress: progress
      }));
    }
  }
});