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
const user = require('../../user');
module.exports = stryMutAct_9fa48("43079") ? {} : (stryCov_9fa48("43079"), {
  name: stryMutAct_9fa48("43080") ? "" : (stryCov_9fa48("43080"), 'Clean up old notifications and hash data'),
  timestamp: Date.UTC(2019, 9, 7),
  method: async function () {
    if (stryMutAct_9fa48("43081")) {
      {}
    } else {
      stryCov_9fa48("43081");
      const {
        progress
      } = this;
      const week = 604800000;
      const cutoffTime = stryMutAct_9fa48("43082") ? Date.now() + week : (stryCov_9fa48("43082"), Date.now() - week);
      await batch.processSortedSet(stryMutAct_9fa48("43083") ? "" : (stryCov_9fa48("43083"), 'users:joindate'), async uids => {
        if (stryMutAct_9fa48("43084")) {
          {}
        } else {
          stryCov_9fa48("43084");
          progress.incr(uids.length);
          await Promise.all(stryMutAct_9fa48("43085") ? [] : (stryCov_9fa48("43085"), [db.sortedSetsRemoveRangeByScore(uids.map(stryMutAct_9fa48("43086") ? () => undefined : (stryCov_9fa48("43086"), uid => stryMutAct_9fa48("43087") ? `` : (stryCov_9fa48("43087"), `uid:${uid}:notifications:unread`))), stryMutAct_9fa48("43088") ? "" : (stryCov_9fa48("43088"), '-inf'), cutoffTime), db.sortedSetsRemoveRangeByScore(uids.map(stryMutAct_9fa48("43089") ? () => undefined : (stryCov_9fa48("43089"), uid => stryMutAct_9fa48("43090") ? `` : (stryCov_9fa48("43090"), `uid:${uid}:notifications:read`))), stryMutAct_9fa48("43091") ? "" : (stryCov_9fa48("43091"), '-inf'), cutoffTime)]));
          const userData = await user.getUsersData(uids);
          await Promise.all(userData.map(async user => {
            if (stryMutAct_9fa48("43092")) {
              {}
            } else {
              stryCov_9fa48("43092");
              if (stryMutAct_9fa48("43095") ? false : stryMutAct_9fa48("43094") ? true : stryMutAct_9fa48("43093") ? user : (stryCov_9fa48("43093", "43094", "43095"), !user)) {
                if (stryMutAct_9fa48("43096")) {
                  {}
                } else {
                  stryCov_9fa48("43096");
                  return;
                }
              }
              const fields = stryMutAct_9fa48("43097") ? ["Stryker was here"] : (stryCov_9fa48("43097"), []);
              (stryMutAct_9fa48("43098") ? [] : (stryCov_9fa48("43098"), [stryMutAct_9fa48("43099") ? "" : (stryCov_9fa48("43099"), 'picture'), stryMutAct_9fa48("43100") ? "" : (stryCov_9fa48("43100"), 'fullname'), stryMutAct_9fa48("43101") ? "" : (stryCov_9fa48("43101"), 'location'), stryMutAct_9fa48("43102") ? "" : (stryCov_9fa48("43102"), 'birthday'), stryMutAct_9fa48("43103") ? "" : (stryCov_9fa48("43103"), 'website'), stryMutAct_9fa48("43104") ? "" : (stryCov_9fa48("43104"), 'signature'), stryMutAct_9fa48("43105") ? "" : (stryCov_9fa48("43105"), 'uploadedpicture')])).forEach(field => {
                if (stryMutAct_9fa48("43106")) {
                  {}
                } else {
                  stryCov_9fa48("43106");
                  if (stryMutAct_9fa48("43109") ? user[field] !== '' : stryMutAct_9fa48("43108") ? false : stryMutAct_9fa48("43107") ? true : (stryCov_9fa48("43107", "43108", "43109"), user[field] === (stryMutAct_9fa48("43110") ? "Stryker was here!" : (stryCov_9fa48("43110"), '')))) {
                    if (stryMutAct_9fa48("43111")) {
                      {}
                    } else {
                      stryCov_9fa48("43111");
                      fields.push(field);
                    }
                  }
                }
              });
              (stryMutAct_9fa48("43112") ? [] : (stryCov_9fa48("43112"), [stryMutAct_9fa48("43113") ? "" : (stryCov_9fa48("43113"), 'profileviews'), stryMutAct_9fa48("43114") ? "" : (stryCov_9fa48("43114"), 'reputation'), stryMutAct_9fa48("43115") ? "" : (stryCov_9fa48("43115"), 'postcount'), stryMutAct_9fa48("43116") ? "" : (stryCov_9fa48("43116"), 'topiccount'), stryMutAct_9fa48("43117") ? "" : (stryCov_9fa48("43117"), 'lastposttime'), stryMutAct_9fa48("43118") ? "" : (stryCov_9fa48("43118"), 'banned'), stryMutAct_9fa48("43119") ? "" : (stryCov_9fa48("43119"), 'followerCount'), stryMutAct_9fa48("43120") ? "" : (stryCov_9fa48("43120"), 'followingCount')])).forEach(field => {
                if (stryMutAct_9fa48("43121")) {
                  {}
                } else {
                  stryCov_9fa48("43121");
                  if (stryMutAct_9fa48("43124") ? user[field] !== 0 : stryMutAct_9fa48("43123") ? false : stryMutAct_9fa48("43122") ? true : (stryCov_9fa48("43122", "43123", "43124"), user[field] === 0)) {
                    if (stryMutAct_9fa48("43125")) {
                      {}
                    } else {
                      stryCov_9fa48("43125");
                      fields.push(field);
                    }
                  }
                }
              });
              if (stryMutAct_9fa48("43127") ? false : stryMutAct_9fa48("43126") ? true : (stryCov_9fa48("43126", "43127"), user[stryMutAct_9fa48("43128") ? "" : (stryCov_9fa48("43128"), 'icon:text')])) {
                if (stryMutAct_9fa48("43129")) {
                  {}
                } else {
                  stryCov_9fa48("43129");
                  fields.push(stryMutAct_9fa48("43130") ? "" : (stryCov_9fa48("43130"), 'icon:text'));
                }
              }
              if (stryMutAct_9fa48("43132") ? false : stryMutAct_9fa48("43131") ? true : (stryCov_9fa48("43131", "43132"), user[stryMutAct_9fa48("43133") ? "" : (stryCov_9fa48("43133"), 'icon:bgColor')])) {
                if (stryMutAct_9fa48("43134")) {
                  {}
                } else {
                  stryCov_9fa48("43134");
                  fields.push(stryMutAct_9fa48("43135") ? "" : (stryCov_9fa48("43135"), 'icon:bgColor'));
                }
              }
              if (stryMutAct_9fa48("43137") ? false : stryMutAct_9fa48("43136") ? true : (stryCov_9fa48("43136", "43137"), fields.length)) {
                if (stryMutAct_9fa48("43138")) {
                  {}
                } else {
                  stryCov_9fa48("43138");
                  await db.deleteObjectFields(stryMutAct_9fa48("43139") ? `` : (stryCov_9fa48("43139"), `user:${user.uid}`), fields);
                }
              }
            }
          }));
        }
      }, stryMutAct_9fa48("43140") ? {} : (stryCov_9fa48("43140"), {
        batch: 500,
        progress: progress
      }));
    }
  }
});