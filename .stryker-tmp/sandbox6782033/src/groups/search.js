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
const user = require('../user');
const db = require('../database');
module.exports = function (Groups) {
  if (stryMutAct_9fa48("20815")) {
    {}
  } else {
    stryCov_9fa48("20815");
    Groups.search = async function (query, options) {
      if (stryMutAct_9fa48("20816")) {
        {}
      } else {
        stryCov_9fa48("20816");
        if (stryMutAct_9fa48("20819") ? false : stryMutAct_9fa48("20818") ? true : stryMutAct_9fa48("20817") ? query : (stryCov_9fa48("20817", "20818", "20819"), !query)) {
          if (stryMutAct_9fa48("20820")) {
            {}
          } else {
            stryCov_9fa48("20820");
            return stryMutAct_9fa48("20821") ? ["Stryker was here"] : (stryCov_9fa48("20821"), []);
          }
        }
        query = stryMutAct_9fa48("20822") ? String(query).toUpperCase() : (stryCov_9fa48("20822"), String(query).toLowerCase());
        let groupNames = await db.getSortedSetRange(stryMutAct_9fa48("20823") ? "" : (stryCov_9fa48("20823"), 'groups:createtime'), 0, stryMutAct_9fa48("20824") ? +1 : (stryCov_9fa48("20824"), -1));
        if (stryMutAct_9fa48("20827") ? false : stryMutAct_9fa48("20826") ? true : stryMutAct_9fa48("20825") ? options.hideEphemeralGroups : (stryCov_9fa48("20825", "20826", "20827"), !options.hideEphemeralGroups)) {
          if (stryMutAct_9fa48("20828")) {
            {}
          } else {
            stryCov_9fa48("20828");
            groupNames = Groups.ephemeralGroups.concat(groupNames);
          }
        }
        groupNames = stryMutAct_9fa48("20829") ? groupNames : (stryCov_9fa48("20829"), groupNames.filter(stryMutAct_9fa48("20830") ? () => undefined : (stryCov_9fa48("20830"), name => stryMutAct_9fa48("20833") ? name.toLowerCase().includes(query) && name !== Groups.BANNED_USERS ||
        // hide banned-users in searches
        !Groups.isPrivilegeGroup(name) : stryMutAct_9fa48("20832") ? false : stryMutAct_9fa48("20831") ? true : (stryCov_9fa48("20831", "20832", "20833"), (stryMutAct_9fa48("20835") ? name.toLowerCase().includes(query) || name !== Groups.BANNED_USERS : stryMutAct_9fa48("20834") ? true : (stryCov_9fa48("20834", "20835"), (stryMutAct_9fa48("20836") ? name.toUpperCase().includes(query) : (stryCov_9fa48("20836"), name.toLowerCase().includes(query))) && (stryMutAct_9fa48("20838") ? name === Groups.BANNED_USERS : stryMutAct_9fa48("20837") ? true : (stryCov_9fa48("20837", "20838"), name !== Groups.BANNED_USERS)))) && ( // hide banned-users in searches
        stryMutAct_9fa48("20839") ? Groups.isPrivilegeGroup(name) : (stryCov_9fa48("20839"), !Groups.isPrivilegeGroup(name)))))));
        groupNames = stryMutAct_9fa48("20840") ? groupNames : (stryCov_9fa48("20840"), groupNames.slice(0, 100));
        let groupsData;
        if (stryMutAct_9fa48("20842") ? false : stryMutAct_9fa48("20841") ? true : (stryCov_9fa48("20841", "20842"), options.showMembers)) {
          if (stryMutAct_9fa48("20843")) {
            {}
          } else {
            stryCov_9fa48("20843");
            groupsData = await Groups.getGroupsAndMembers(groupNames);
          }
        } else {
          if (stryMutAct_9fa48("20844")) {
            {}
          } else {
            stryCov_9fa48("20844");
            groupsData = await Groups.getGroupsData(groupNames);
          }
        }
        groupsData = stryMutAct_9fa48("20845") ? groupsData : (stryCov_9fa48("20845"), groupsData.filter(Boolean));
        if (stryMutAct_9fa48("20847") ? false : stryMutAct_9fa48("20846") ? true : (stryCov_9fa48("20846", "20847"), options.filterHidden)) {
          if (stryMutAct_9fa48("20848")) {
            {}
          } else {
            stryCov_9fa48("20848");
            groupsData = stryMutAct_9fa48("20849") ? groupsData : (stryCov_9fa48("20849"), groupsData.filter(stryMutAct_9fa48("20850") ? () => undefined : (stryCov_9fa48("20850"), group => stryMutAct_9fa48("20851") ? group.hidden : (stryCov_9fa48("20851"), !group.hidden))));
          }
        }
        return stryMutAct_9fa48("20852") ? Groups : (stryCov_9fa48("20852"), Groups.sort(options.sort, groupsData));
      }
    };
    Groups.sort = function (strategy, groups) {
      if (stryMutAct_9fa48("20853")) {
        {}
      } else {
        stryCov_9fa48("20853");
        switch (strategy) {
          case stryMutAct_9fa48("20855") ? "" : (stryCov_9fa48("20855"), 'count'):
            if (stryMutAct_9fa48("20854")) {} else {
              stryCov_9fa48("20854");
              stryMutAct_9fa48("20857") ? groups.sort((a, b) => b.memberCount - a.memberCount) : stryMutAct_9fa48("20856") ? groups.sort((a, b) => a.slug > b.slug) : (stryCov_9fa48("20856", "20857"), groups.sort(stryMutAct_9fa48("20858") ? () => undefined : (stryCov_9fa48("20858"), (a, b) => stryMutAct_9fa48("20862") ? a.slug <= b.slug : stryMutAct_9fa48("20861") ? a.slug >= b.slug : stryMutAct_9fa48("20860") ? false : stryMutAct_9fa48("20859") ? true : (stryCov_9fa48("20859", "20860", "20861", "20862"), a.slug > b.slug))).sort(stryMutAct_9fa48("20863") ? () => undefined : (stryCov_9fa48("20863"), (a, b) => stryMutAct_9fa48("20864") ? b.memberCount + a.memberCount : (stryCov_9fa48("20864"), b.memberCount - a.memberCount))));
              break;
            }
          case stryMutAct_9fa48("20866") ? "" : (stryCov_9fa48("20866"), 'date'):
            if (stryMutAct_9fa48("20865")) {} else {
              stryCov_9fa48("20865");
              stryMutAct_9fa48("20867") ? groups : (stryCov_9fa48("20867"), groups.sort(stryMutAct_9fa48("20868") ? () => undefined : (stryCov_9fa48("20868"), (a, b) => stryMutAct_9fa48("20869") ? b.createtime + a.createtime : (stryCov_9fa48("20869"), b.createtime - a.createtime))));
              break;
            }
          case stryMutAct_9fa48("20870") ? "" : (stryCov_9fa48("20870"), 'alpha'): // intentional fall-through
          default:
            if (stryMutAct_9fa48("20871")) {} else {
              stryCov_9fa48("20871");
              stryMutAct_9fa48("20872") ? groups : (stryCov_9fa48("20872"), groups.sort(stryMutAct_9fa48("20873") ? () => undefined : (stryCov_9fa48("20873"), (a, b) => (stryMutAct_9fa48("20877") ? a.slug <= b.slug : stryMutAct_9fa48("20876") ? a.slug >= b.slug : stryMutAct_9fa48("20875") ? false : stryMutAct_9fa48("20874") ? true : (stryCov_9fa48("20874", "20875", "20876", "20877"), a.slug > b.slug)) ? 1 : stryMutAct_9fa48("20878") ? +1 : (stryCov_9fa48("20878"), -1))));
            }
        }
        return groups;
      }
    };
    Groups.searchMembers = async function (data) {
      if (stryMutAct_9fa48("20879")) {
        {}
      } else {
        stryCov_9fa48("20879");
        if (stryMutAct_9fa48("20882") ? false : stryMutAct_9fa48("20881") ? true : stryMutAct_9fa48("20880") ? data.query : (stryCov_9fa48("20880", "20881", "20882"), !data.query)) {
          if (stryMutAct_9fa48("20883")) {
            {}
          } else {
            stryCov_9fa48("20883");
            const users = await Groups.getOwnersAndMembers(data.groupName, data.uid, 0, 19);
            return stryMutAct_9fa48("20884") ? {} : (stryCov_9fa48("20884"), {
              users: users
            });
          }
        }
        const results = await user.search(stryMutAct_9fa48("20885") ? {} : (stryCov_9fa48("20885"), {
          ...data,
          paginate: stryMutAct_9fa48("20886") ? true : (stryCov_9fa48("20886"), false),
          hardCap: stryMutAct_9fa48("20887") ? +1 : (stryCov_9fa48("20887"), -1)
        }));
        const uids = results.users.map(stryMutAct_9fa48("20888") ? () => undefined : (stryCov_9fa48("20888"), user => stryMutAct_9fa48("20891") ? user || user.uid : stryMutAct_9fa48("20890") ? false : stryMutAct_9fa48("20889") ? true : (stryCov_9fa48("20889", "20890", "20891"), user && user.uid)));
        const isOwners = await Groups.ownership.isOwners(uids, data.groupName);
        results.users.forEach((user, index) => {
          if (stryMutAct_9fa48("20892")) {
            {}
          } else {
            stryCov_9fa48("20892");
            if (stryMutAct_9fa48("20894") ? false : stryMutAct_9fa48("20893") ? true : (stryCov_9fa48("20893", "20894"), user)) {
              if (stryMutAct_9fa48("20895")) {
                {}
              } else {
                stryCov_9fa48("20895");
                user.isOwner = isOwners[index];
              }
            }
          }
        });
        stryMutAct_9fa48("20896") ? results.users : (stryCov_9fa48("20896"), results.users.sort((a, b) => {
          if (stryMutAct_9fa48("20897")) {
            {}
          } else {
            stryCov_9fa48("20897");
            if (stryMutAct_9fa48("20900") ? a.isOwner || !b.isOwner : stryMutAct_9fa48("20899") ? false : stryMutAct_9fa48("20898") ? true : (stryCov_9fa48("20898", "20899", "20900"), a.isOwner && (stryMutAct_9fa48("20901") ? b.isOwner : (stryCov_9fa48("20901"), !b.isOwner)))) {
              if (stryMutAct_9fa48("20902")) {
                {}
              } else {
                stryCov_9fa48("20902");
                return stryMutAct_9fa48("20903") ? +1 : (stryCov_9fa48("20903"), -1);
              }
            } else if (stryMutAct_9fa48("20906") ? !a.isOwner || b.isOwner : stryMutAct_9fa48("20905") ? false : stryMutAct_9fa48("20904") ? true : (stryCov_9fa48("20904", "20905", "20906"), (stryMutAct_9fa48("20907") ? a.isOwner : (stryCov_9fa48("20907"), !a.isOwner)) && b.isOwner)) {
              if (stryMutAct_9fa48("20908")) {
                {}
              } else {
                stryCov_9fa48("20908");
                return 1;
              }
            }
            return 0;
          }
        }));
        return results;
      }
    };
  }
};