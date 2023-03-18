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
const meta = require('../../meta');
const topics = require('../../topics');
const batch = require('../../batch');
module.exports = stryMutAct_9fa48("43681") ? {} : (stryCov_9fa48("43681"), {
  name: stryMutAct_9fa48("43682") ? "" : (stryCov_9fa48("43682"), 'Migrate existing topic thumbnails to new format'),
  timestamp: Date.UTC(2020, 11, 11),
  method: async function () {
    if (stryMutAct_9fa48("43683")) {
      {}
    } else {
      stryCov_9fa48("43683");
      const {
        progress
      } = this;
      const current = await meta.configs.get(stryMutAct_9fa48("43684") ? "" : (stryCov_9fa48("43684"), 'topicThumbSize'));
      if (stryMutAct_9fa48("43687") ? parseInt(current, 10) !== 120 : stryMutAct_9fa48("43686") ? false : stryMutAct_9fa48("43685") ? true : (stryCov_9fa48("43685", "43686", "43687"), parseInt(current, 10) === 120)) {
        if (stryMutAct_9fa48("43688")) {
          {}
        } else {
          stryCov_9fa48("43688");
          await meta.configs.set(stryMutAct_9fa48("43689") ? "" : (stryCov_9fa48("43689"), 'topicThumbSize'), 512);
        }
      }
      await batch.processSortedSet(stryMutAct_9fa48("43690") ? "" : (stryCov_9fa48("43690"), 'topics:tid'), async tids => {
        if (stryMutAct_9fa48("43691")) {
          {}
        } else {
          stryCov_9fa48("43691");
          const keys = tids.map(stryMutAct_9fa48("43692") ? () => undefined : (stryCov_9fa48("43692"), tid => stryMutAct_9fa48("43693") ? `` : (stryCov_9fa48("43693"), `topic:${tid}`)));
          const topicThumbs = (await db.getObjectsFields(keys, stryMutAct_9fa48("43694") ? [] : (stryCov_9fa48("43694"), [stryMutAct_9fa48("43695") ? "" : (stryCov_9fa48("43695"), 'thumb')]))).map(stryMutAct_9fa48("43696") ? () => undefined : (stryCov_9fa48("43696"), obj => obj.thumb ? obj.thumb.replace(nconf.get(stryMutAct_9fa48("43697") ? "" : (stryCov_9fa48("43697"), 'upload_url')), stryMutAct_9fa48("43698") ? "Stryker was here!" : (stryCov_9fa48("43698"), '')) : null));
          await Promise.all(tids.map(async (tid, idx) => {
            if (stryMutAct_9fa48("43699")) {
              {}
            } else {
              stryCov_9fa48("43699");
              const path = topicThumbs[idx];
              if (stryMutAct_9fa48("43701") ? false : stryMutAct_9fa48("43700") ? true : (stryCov_9fa48("43700", "43701"), path)) {
                if (stryMutAct_9fa48("43702")) {
                  {}
                } else {
                  stryCov_9fa48("43702");
                  if (stryMutAct_9fa48("43705") ? path.length < 255 || !path.startsWith('data:') : stryMutAct_9fa48("43704") ? false : stryMutAct_9fa48("43703") ? true : (stryCov_9fa48("43703", "43704", "43705"), (stryMutAct_9fa48("43708") ? path.length >= 255 : stryMutAct_9fa48("43707") ? path.length <= 255 : stryMutAct_9fa48("43706") ? true : (stryCov_9fa48("43706", "43707", "43708"), path.length < 255)) && (stryMutAct_9fa48("43709") ? path.startsWith('data:') : (stryCov_9fa48("43709"), !(stryMutAct_9fa48("43710") ? path.endsWith('data:') : (stryCov_9fa48("43710"), path.startsWith(stryMutAct_9fa48("43711") ? "" : (stryCov_9fa48("43711"), 'data:')))))))) {
                    if (stryMutAct_9fa48("43712")) {
                      {}
                    } else {
                      stryCov_9fa48("43712");
                      await topics.thumbs.associate(stryMutAct_9fa48("43713") ? {} : (stryCov_9fa48("43713"), {
                        id: tid,
                        path
                      }));
                    }
                  }
                  await db.deleteObjectField(keys[idx], stryMutAct_9fa48("43714") ? "" : (stryCov_9fa48("43714"), 'thumb'));
                }
              }
              progress.incr();
            }
          }));
        }
      }, stryMutAct_9fa48("43715") ? {} : (stryCov_9fa48("43715"), {
        batch: 500,
        progress: progress
      }));
    }
  }
});