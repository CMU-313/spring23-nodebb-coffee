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
const _ = require('lodash');
const db = require('../database');
const user = require('../user');
const cache = require('../cache');
module.exports = function (Groups) {
  if (stryMutAct_9fa48("20575")) {
    {}
  } else {
    stryCov_9fa48("20575");
    Groups.getMembers = async function (groupName, start, stop) {
      if (stryMutAct_9fa48("20576")) {
        {}
      } else {
        stryCov_9fa48("20576");
        return await db.getSortedSetRevRange(stryMutAct_9fa48("20577") ? `` : (stryCov_9fa48("20577"), `group:${groupName}:members`), start, stop);
      }
    };
    Groups.getMemberUsers = async function (groupNames, start, stop) {
      if (stryMutAct_9fa48("20578")) {
        {}
      } else {
        stryCov_9fa48("20578");
        async function get(groupName) {
          if (stryMutAct_9fa48("20579")) {
            {}
          } else {
            stryCov_9fa48("20579");
            const uids = await Groups.getMembers(groupName, start, stop);
            return await user.getUsersFields(uids, stryMutAct_9fa48("20580") ? [] : (stryCov_9fa48("20580"), [stryMutAct_9fa48("20581") ? "" : (stryCov_9fa48("20581"), 'uid'), stryMutAct_9fa48("20582") ? "" : (stryCov_9fa48("20582"), 'username'), stryMutAct_9fa48("20583") ? "" : (stryCov_9fa48("20583"), 'picture'), stryMutAct_9fa48("20584") ? "" : (stryCov_9fa48("20584"), 'userslug')]));
          }
        }
        return await Promise.all(groupNames.map(stryMutAct_9fa48("20585") ? () => undefined : (stryCov_9fa48("20585"), name => get(name))));
      }
    };
    Groups.getMembersOfGroups = async function (groupNames) {
      if (stryMutAct_9fa48("20586")) {
        {}
      } else {
        stryCov_9fa48("20586");
        return await db.getSortedSetsMembers(groupNames.map(stryMutAct_9fa48("20587") ? () => undefined : (stryCov_9fa48("20587"), name => stryMutAct_9fa48("20588") ? `` : (stryCov_9fa48("20588"), `group:${name}:members`))));
      }
    };
    Groups.isMember = async function (uid, groupName) {
      if (stryMutAct_9fa48("20589")) {
        {}
      } else {
        stryCov_9fa48("20589");
        if (stryMutAct_9fa48("20592") ? (!uid || parseInt(uid, 10) <= 0) && !groupName : stryMutAct_9fa48("20591") ? false : stryMutAct_9fa48("20590") ? true : (stryCov_9fa48("20590", "20591", "20592"), (stryMutAct_9fa48("20594") ? !uid && parseInt(uid, 10) <= 0 : stryMutAct_9fa48("20593") ? false : (stryCov_9fa48("20593", "20594"), (stryMutAct_9fa48("20595") ? uid : (stryCov_9fa48("20595"), !uid)) || (stryMutAct_9fa48("20598") ? parseInt(uid, 10) > 0 : stryMutAct_9fa48("20597") ? parseInt(uid, 10) < 0 : stryMutAct_9fa48("20596") ? false : (stryCov_9fa48("20596", "20597", "20598"), parseInt(uid, 10) <= 0)))) || (stryMutAct_9fa48("20599") ? groupName : (stryCov_9fa48("20599"), !groupName)))) {
          if (stryMutAct_9fa48("20600")) {
            {}
          } else {
            stryCov_9fa48("20600");
            return stryMutAct_9fa48("20601") ? true : (stryCov_9fa48("20601"), false);
          }
        }
        const cacheKey = stryMutAct_9fa48("20602") ? `` : (stryCov_9fa48("20602"), `${uid}:${groupName}`);
        let isMember = Groups.cache.get(cacheKey);
        if (stryMutAct_9fa48("20605") ? isMember === undefined : stryMutAct_9fa48("20604") ? false : stryMutAct_9fa48("20603") ? true : (stryCov_9fa48("20603", "20604", "20605"), isMember !== undefined)) {
          if (stryMutAct_9fa48("20606")) {
            {}
          } else {
            stryCov_9fa48("20606");
            return isMember;
          }
        }
        isMember = await db.isSortedSetMember(stryMutAct_9fa48("20607") ? `` : (stryCov_9fa48("20607"), `group:${groupName}:members`), uid);
        Groups.cache.set(cacheKey, isMember);
        return isMember;
      }
    };
    Groups.isMembers = async function (uids, groupName) {
      if (stryMutAct_9fa48("20608")) {
        {}
      } else {
        stryCov_9fa48("20608");
        if (stryMutAct_9fa48("20611") ? !groupName && !uids.length : stryMutAct_9fa48("20610") ? false : stryMutAct_9fa48("20609") ? true : (stryCov_9fa48("20609", "20610", "20611"), (stryMutAct_9fa48("20612") ? groupName : (stryCov_9fa48("20612"), !groupName)) || (stryMutAct_9fa48("20613") ? uids.length : (stryCov_9fa48("20613"), !uids.length)))) {
          if (stryMutAct_9fa48("20614")) {
            {}
          } else {
            stryCov_9fa48("20614");
            return uids.map(stryMutAct_9fa48("20615") ? () => undefined : (stryCov_9fa48("20615"), () => stryMutAct_9fa48("20616") ? true : (stryCov_9fa48("20616"), false)));
          }
        }
        if (stryMutAct_9fa48("20619") ? groupName !== 'guests' : stryMutAct_9fa48("20618") ? false : stryMutAct_9fa48("20617") ? true : (stryCov_9fa48("20617", "20618", "20619"), groupName === (stryMutAct_9fa48("20620") ? "" : (stryCov_9fa48("20620"), 'guests')))) {
          if (stryMutAct_9fa48("20621")) {
            {}
          } else {
            stryCov_9fa48("20621");
            return uids.map(stryMutAct_9fa48("20622") ? () => undefined : (stryCov_9fa48("20622"), uid => stryMutAct_9fa48("20625") ? parseInt(uid, 10) !== 0 : stryMutAct_9fa48("20624") ? false : stryMutAct_9fa48("20623") ? true : (stryCov_9fa48("20623", "20624", "20625"), parseInt(uid, 10) === 0)));
          }
        }
        const cachedData = {};
        const nonCachedUids = stryMutAct_9fa48("20626") ? uids : (stryCov_9fa48("20626"), uids.filter(stryMutAct_9fa48("20627") ? () => undefined : (stryCov_9fa48("20627"), uid => filterNonCached(cachedData, uid, groupName))));
        if (stryMutAct_9fa48("20630") ? false : stryMutAct_9fa48("20629") ? true : stryMutAct_9fa48("20628") ? nonCachedUids.length : (stryCov_9fa48("20628", "20629", "20630"), !nonCachedUids.length)) {
          if (stryMutAct_9fa48("20631")) {
            {}
          } else {
            stryCov_9fa48("20631");
            return uids.map(stryMutAct_9fa48("20632") ? () => undefined : (stryCov_9fa48("20632"), uid => cachedData[stryMutAct_9fa48("20633") ? `` : (stryCov_9fa48("20633"), `${uid}:${groupName}`)]));
          }
        }
        const isMembers = await db.isSortedSetMembers(stryMutAct_9fa48("20634") ? `` : (stryCov_9fa48("20634"), `group:${groupName}:members`), nonCachedUids);
        nonCachedUids.forEach((uid, index) => {
          if (stryMutAct_9fa48("20635")) {
            {}
          } else {
            stryCov_9fa48("20635");
            cachedData[stryMutAct_9fa48("20636") ? `` : (stryCov_9fa48("20636"), `${uid}:${groupName}`)] = isMembers[index];
            Groups.cache.set(stryMutAct_9fa48("20637") ? `` : (stryCov_9fa48("20637"), `${uid}:${groupName}`), isMembers[index]);
          }
        });
        return uids.map(stryMutAct_9fa48("20638") ? () => undefined : (stryCov_9fa48("20638"), uid => cachedData[stryMutAct_9fa48("20639") ? `` : (stryCov_9fa48("20639"), `${uid}:${groupName}`)]));
      }
    };
    Groups.isMemberOfGroups = async function (uid, groups) {
      if (stryMutAct_9fa48("20640")) {
        {}
      } else {
        stryCov_9fa48("20640");
        if (stryMutAct_9fa48("20643") ? (!uid || parseInt(uid, 10) <= 0) && !groups.length : stryMutAct_9fa48("20642") ? false : stryMutAct_9fa48("20641") ? true : (stryCov_9fa48("20641", "20642", "20643"), (stryMutAct_9fa48("20645") ? !uid && parseInt(uid, 10) <= 0 : stryMutAct_9fa48("20644") ? false : (stryCov_9fa48("20644", "20645"), (stryMutAct_9fa48("20646") ? uid : (stryCov_9fa48("20646"), !uid)) || (stryMutAct_9fa48("20649") ? parseInt(uid, 10) > 0 : stryMutAct_9fa48("20648") ? parseInt(uid, 10) < 0 : stryMutAct_9fa48("20647") ? false : (stryCov_9fa48("20647", "20648", "20649"), parseInt(uid, 10) <= 0)))) || (stryMutAct_9fa48("20650") ? groups.length : (stryCov_9fa48("20650"), !groups.length)))) {
          if (stryMutAct_9fa48("20651")) {
            {}
          } else {
            stryCov_9fa48("20651");
            return groups.map(stryMutAct_9fa48("20652") ? () => undefined : (stryCov_9fa48("20652"), groupName => stryMutAct_9fa48("20655") ? groupName !== 'guests' : stryMutAct_9fa48("20654") ? false : stryMutAct_9fa48("20653") ? true : (stryCov_9fa48("20653", "20654", "20655"), groupName === (stryMutAct_9fa48("20656") ? "" : (stryCov_9fa48("20656"), 'guests')))));
          }
        }
        const cachedData = {};
        const nonCachedGroups = stryMutAct_9fa48("20657") ? groups : (stryCov_9fa48("20657"), groups.filter(stryMutAct_9fa48("20658") ? () => undefined : (stryCov_9fa48("20658"), groupName => filterNonCached(cachedData, uid, groupName))));
        if (stryMutAct_9fa48("20661") ? false : stryMutAct_9fa48("20660") ? true : stryMutAct_9fa48("20659") ? nonCachedGroups.length : (stryCov_9fa48("20659", "20660", "20661"), !nonCachedGroups.length)) {
          if (stryMutAct_9fa48("20662")) {
            {}
          } else {
            stryCov_9fa48("20662");
            return groups.map(stryMutAct_9fa48("20663") ? () => undefined : (stryCov_9fa48("20663"), groupName => cachedData[stryMutAct_9fa48("20664") ? `` : (stryCov_9fa48("20664"), `${uid}:${groupName}`)]));
          }
        }
        const nonCachedGroupsMemberSets = nonCachedGroups.map(stryMutAct_9fa48("20665") ? () => undefined : (stryCov_9fa48("20665"), groupName => stryMutAct_9fa48("20666") ? `` : (stryCov_9fa48("20666"), `group:${groupName}:members`)));
        const isMembers = await db.isMemberOfSortedSets(nonCachedGroupsMemberSets, uid);
        nonCachedGroups.forEach((groupName, index) => {
          if (stryMutAct_9fa48("20667")) {
            {}
          } else {
            stryCov_9fa48("20667");
            cachedData[stryMutAct_9fa48("20668") ? `` : (stryCov_9fa48("20668"), `${uid}:${groupName}`)] = isMembers[index];
            Groups.cache.set(stryMutAct_9fa48("20669") ? `` : (stryCov_9fa48("20669"), `${uid}:${groupName}`), isMembers[index]);
          }
        });
        return groups.map(stryMutAct_9fa48("20670") ? () => undefined : (stryCov_9fa48("20670"), groupName => cachedData[stryMutAct_9fa48("20671") ? `` : (stryCov_9fa48("20671"), `${uid}:${groupName}`)]));
      }
    };
    function filterNonCached(cachedData, uid, groupName) {
      if (stryMutAct_9fa48("20672")) {
        {}
      } else {
        stryCov_9fa48("20672");
        const isMember = Groups.cache.get(stryMutAct_9fa48("20673") ? `` : (stryCov_9fa48("20673"), `${uid}:${groupName}`));
        const isInCache = stryMutAct_9fa48("20676") ? isMember === undefined : stryMutAct_9fa48("20675") ? false : stryMutAct_9fa48("20674") ? true : (stryCov_9fa48("20674", "20675", "20676"), isMember !== undefined);
        if (stryMutAct_9fa48("20678") ? false : stryMutAct_9fa48("20677") ? true : (stryCov_9fa48("20677", "20678"), isInCache)) {
          if (stryMutAct_9fa48("20679")) {
            {}
          } else {
            stryCov_9fa48("20679");
            cachedData[stryMutAct_9fa48("20680") ? `` : (stryCov_9fa48("20680"), `${uid}:${groupName}`)] = isMember;
          }
        }
        return stryMutAct_9fa48("20681") ? isInCache : (stryCov_9fa48("20681"), !isInCache);
      }
    }
    Groups.isMemberOfAny = async function (uid, groups) {
      if (stryMutAct_9fa48("20682")) {
        {}
      } else {
        stryCov_9fa48("20682");
        if (stryMutAct_9fa48("20685") ? false : stryMutAct_9fa48("20684") ? true : stryMutAct_9fa48("20683") ? groups.length : (stryCov_9fa48("20683", "20684", "20685"), !groups.length)) {
          if (stryMutAct_9fa48("20686")) {
            {}
          } else {
            stryCov_9fa48("20686");
            return stryMutAct_9fa48("20687") ? true : (stryCov_9fa48("20687"), false);
          }
        }
        const isMembers = await Groups.isMemberOfGroups(uid, groups);
        return isMembers.includes(stryMutAct_9fa48("20688") ? false : (stryCov_9fa48("20688"), true));
      }
    };
    Groups.getMemberCount = async function (groupName) {
      if (stryMutAct_9fa48("20689")) {
        {}
      } else {
        stryCov_9fa48("20689");
        const count = await db.getObjectField(stryMutAct_9fa48("20690") ? `` : (stryCov_9fa48("20690"), `group:${groupName}`), stryMutAct_9fa48("20691") ? "" : (stryCov_9fa48("20691"), 'memberCount'));
        return parseInt(count, 10);
      }
    };
    Groups.isMemberOfGroupList = async function (uid, groupListKey) {
      if (stryMutAct_9fa48("20692")) {
        {}
      } else {
        stryCov_9fa48("20692");
        let groupNames = await getGroupNames(groupListKey);
        groupNames = Groups.removeEphemeralGroups(groupNames);
        if (stryMutAct_9fa48("20695") ? false : stryMutAct_9fa48("20694") ? true : stryMutAct_9fa48("20693") ? groupNames.length : (stryCov_9fa48("20693", "20694", "20695"), !groupNames.length)) {
          if (stryMutAct_9fa48("20696")) {
            {}
          } else {
            stryCov_9fa48("20696");
            return stryMutAct_9fa48("20697") ? true : (stryCov_9fa48("20697"), false);
          }
        }
        const isMembers = await Groups.isMemberOfGroups(uid, groupNames);
        return isMembers.includes(stryMutAct_9fa48("20698") ? false : (stryCov_9fa48("20698"), true));
      }
    };
    Groups.isMemberOfGroupsList = async function (uid, groupListKeys) {
      if (stryMutAct_9fa48("20699")) {
        {}
      } else {
        stryCov_9fa48("20699");
        const members = await getGroupNames(groupListKeys);
        let uniqueGroups = _.uniq(_.flatten(members));
        uniqueGroups = Groups.removeEphemeralGroups(uniqueGroups);
        const isMembers = await Groups.isMemberOfGroups(uid, uniqueGroups);
        const isGroupMember = _.zipObject(uniqueGroups, isMembers);
        return members.map(stryMutAct_9fa48("20700") ? () => undefined : (stryCov_9fa48("20700"), groupNames => stryMutAct_9fa48("20701") ? !groupNames.find(name => isGroupMember[name]) : (stryCov_9fa48("20701"), !(stryMutAct_9fa48("20702") ? groupNames.find(name => isGroupMember[name]) : (stryCov_9fa48("20702"), !groupNames.find(stryMutAct_9fa48("20703") ? () => undefined : (stryCov_9fa48("20703"), name => isGroupMember[name])))))));
      }
    };
    Groups.isMembersOfGroupList = async function (uids, groupListKey) {
      if (stryMutAct_9fa48("20704")) {
        {}
      } else {
        stryCov_9fa48("20704");
        const results = uids.map(stryMutAct_9fa48("20705") ? () => undefined : (stryCov_9fa48("20705"), () => stryMutAct_9fa48("20706") ? true : (stryCov_9fa48("20706"), false)));
        let groupNames = await getGroupNames(groupListKey);
        groupNames = Groups.removeEphemeralGroups(groupNames);
        if (stryMutAct_9fa48("20709") ? false : stryMutAct_9fa48("20708") ? true : stryMutAct_9fa48("20707") ? groupNames.length : (stryCov_9fa48("20707", "20708", "20709"), !groupNames.length)) {
          if (stryMutAct_9fa48("20710")) {
            {}
          } else {
            stryCov_9fa48("20710");
            return results;
          }
        }
        const isGroupMembers = await Promise.all(groupNames.map(stryMutAct_9fa48("20711") ? () => undefined : (stryCov_9fa48("20711"), name => Groups.isMembers(uids, name))));
        isGroupMembers.forEach(isMembers => {
          if (stryMutAct_9fa48("20712")) {
            {}
          } else {
            stryCov_9fa48("20712");
            results.forEach((isMember, index) => {
              if (stryMutAct_9fa48("20713")) {
                {}
              } else {
                stryCov_9fa48("20713");
                if (stryMutAct_9fa48("20716") ? !isMember || isMembers[index] : stryMutAct_9fa48("20715") ? false : stryMutAct_9fa48("20714") ? true : (stryCov_9fa48("20714", "20715", "20716"), (stryMutAct_9fa48("20717") ? isMember : (stryCov_9fa48("20717"), !isMember)) && isMembers[index])) {
                  if (stryMutAct_9fa48("20718")) {
                    {}
                  } else {
                    stryCov_9fa48("20718");
                    results[index] = stryMutAct_9fa48("20719") ? false : (stryCov_9fa48("20719"), true);
                  }
                }
              }
            });
          }
        });
        return results;
      }
    };
    async function getGroupNames(keys) {
      if (stryMutAct_9fa48("20720")) {
        {}
      } else {
        stryCov_9fa48("20720");
        const isArray = Array.isArray(keys);
        keys = isArray ? keys : stryMutAct_9fa48("20721") ? [] : (stryCov_9fa48("20721"), [keys]);
        const cachedData = {};
        const nonCachedKeys = stryMutAct_9fa48("20722") ? keys : (stryCov_9fa48("20722"), keys.filter(groupName => {
          if (stryMutAct_9fa48("20723")) {
            {}
          } else {
            stryCov_9fa48("20723");
            const groupMembers = cache.get(stryMutAct_9fa48("20724") ? `` : (stryCov_9fa48("20724"), `group:${groupName}:members`));
            const isInCache = stryMutAct_9fa48("20727") ? groupMembers === undefined : stryMutAct_9fa48("20726") ? false : stryMutAct_9fa48("20725") ? true : (stryCov_9fa48("20725", "20726", "20727"), groupMembers !== undefined);
            if (stryMutAct_9fa48("20729") ? false : stryMutAct_9fa48("20728") ? true : (stryCov_9fa48("20728", "20729"), isInCache)) {
              if (stryMutAct_9fa48("20730")) {
                {}
              } else {
                stryCov_9fa48("20730");
                cachedData[groupName] = groupMembers;
              }
            }
            return stryMutAct_9fa48("20731") ? isInCache : (stryCov_9fa48("20731"), !isInCache);
          }
        }));
        if (stryMutAct_9fa48("20734") ? false : stryMutAct_9fa48("20733") ? true : stryMutAct_9fa48("20732") ? nonCachedKeys.length : (stryCov_9fa48("20732", "20733", "20734"), !nonCachedKeys.length)) {
          if (stryMutAct_9fa48("20735")) {
            {}
          } else {
            stryCov_9fa48("20735");
            return isArray ? keys.map(stryMutAct_9fa48("20736") ? () => undefined : (stryCov_9fa48("20736"), groupName => cachedData[groupName])) : cachedData[keys[0]];
          }
        }
        const groupMembers = await db.getSortedSetsMembers(nonCachedKeys.map(stryMutAct_9fa48("20737") ? () => undefined : (stryCov_9fa48("20737"), name => stryMutAct_9fa48("20738") ? `` : (stryCov_9fa48("20738"), `group:${name}:members`))));
        nonCachedKeys.forEach((groupName, index) => {
          if (stryMutAct_9fa48("20739")) {
            {}
          } else {
            stryCov_9fa48("20739");
            cachedData[groupName] = groupMembers[index];
            cache.set(stryMutAct_9fa48("20740") ? `` : (stryCov_9fa48("20740"), `group:${groupName}:members`), groupMembers[index]);
          }
        });
        return isArray ? keys.map(stryMutAct_9fa48("20741") ? () => undefined : (stryCov_9fa48("20741"), groupName => cachedData[groupName])) : cachedData[keys[0]];
      }
    }
  }
};