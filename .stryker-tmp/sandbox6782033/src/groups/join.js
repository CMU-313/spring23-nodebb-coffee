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
const winston = require('winston');
const db = require('../database');
const user = require('../user');
const plugins = require('../plugins');
const cache = require('../cache');
module.exports = function (Groups) {
  if (stryMutAct_9fa48("20358")) {
    {}
  } else {
    stryCov_9fa48("20358");
    Groups.join = async function (groupNames, uid) {
      if (stryMutAct_9fa48("20359")) {
        {}
      } else {
        stryCov_9fa48("20359");
        if (stryMutAct_9fa48("20362") ? false : stryMutAct_9fa48("20361") ? true : stryMutAct_9fa48("20360") ? groupNames : (stryCov_9fa48("20360", "20361", "20362"), !groupNames)) {
          if (stryMutAct_9fa48("20363")) {
            {}
          } else {
            stryCov_9fa48("20363");
            throw new Error(stryMutAct_9fa48("20364") ? "" : (stryCov_9fa48("20364"), '[[error:invalid-data]]'));
          }
        }
        if (stryMutAct_9fa48("20367") ? Array.isArray(groupNames) || !groupNames.length : stryMutAct_9fa48("20366") ? false : stryMutAct_9fa48("20365") ? true : (stryCov_9fa48("20365", "20366", "20367"), Array.isArray(groupNames) && (stryMutAct_9fa48("20368") ? groupNames.length : (stryCov_9fa48("20368"), !groupNames.length)))) {
          if (stryMutAct_9fa48("20369")) {
            {}
          } else {
            stryCov_9fa48("20369");
            return;
          }
        }
        if (stryMutAct_9fa48("20372") ? false : stryMutAct_9fa48("20371") ? true : stryMutAct_9fa48("20370") ? Array.isArray(groupNames) : (stryCov_9fa48("20370", "20371", "20372"), !Array.isArray(groupNames))) {
          if (stryMutAct_9fa48("20373")) {
            {}
          } else {
            stryCov_9fa48("20373");
            groupNames = stryMutAct_9fa48("20374") ? [] : (stryCov_9fa48("20374"), [groupNames]);
          }
        }
        if (stryMutAct_9fa48("20377") ? false : stryMutAct_9fa48("20376") ? true : stryMutAct_9fa48("20375") ? uid : (stryCov_9fa48("20375", "20376", "20377"), !uid)) {
          if (stryMutAct_9fa48("20378")) {
            {}
          } else {
            stryCov_9fa48("20378");
            throw new Error(stryMutAct_9fa48("20379") ? "" : (stryCov_9fa48("20379"), '[[error:invalid-uid]]'));
          }
        }
        const [isMembers, exists, isAdmin] = await Promise.all(stryMutAct_9fa48("20380") ? [] : (stryCov_9fa48("20380"), [Groups.isMemberOfGroups(uid, groupNames), Groups.exists(groupNames), user.isAdministrator(uid)]));
        const groupsToCreate = stryMutAct_9fa48("20381") ? groupNames : (stryCov_9fa48("20381"), groupNames.filter(stryMutAct_9fa48("20382") ? () => undefined : (stryCov_9fa48("20382"), (groupName, index) => stryMutAct_9fa48("20385") ? groupName || !exists[index] : stryMutAct_9fa48("20384") ? false : stryMutAct_9fa48("20383") ? true : (stryCov_9fa48("20383", "20384", "20385"), groupName && (stryMutAct_9fa48("20386") ? exists[index] : (stryCov_9fa48("20386"), !exists[index]))))));
        const groupsToJoin = stryMutAct_9fa48("20387") ? groupNames : (stryCov_9fa48("20387"), groupNames.filter(stryMutAct_9fa48("20388") ? () => undefined : (stryCov_9fa48("20388"), (groupName, index) => stryMutAct_9fa48("20389") ? isMembers[index] : (stryCov_9fa48("20389"), !isMembers[index]))));
        if (stryMutAct_9fa48("20392") ? false : stryMutAct_9fa48("20391") ? true : stryMutAct_9fa48("20390") ? groupsToJoin.length : (stryCov_9fa48("20390", "20391", "20392"), !groupsToJoin.length)) {
          if (stryMutAct_9fa48("20393")) {
            {}
          } else {
            stryCov_9fa48("20393");
            return;
          }
        }
        await createNonExistingGroups(groupsToCreate);
        const promises = stryMutAct_9fa48("20394") ? [] : (stryCov_9fa48("20394"), [db.sortedSetsAdd(groupsToJoin.map(stryMutAct_9fa48("20395") ? () => undefined : (stryCov_9fa48("20395"), groupName => stryMutAct_9fa48("20396") ? `` : (stryCov_9fa48("20396"), `group:${groupName}:members`))), Date.now(), uid), db.incrObjectField(groupsToJoin.map(stryMutAct_9fa48("20397") ? () => undefined : (stryCov_9fa48("20397"), groupName => stryMutAct_9fa48("20398") ? `` : (stryCov_9fa48("20398"), `group:${groupName}`))), stryMutAct_9fa48("20399") ? "" : (stryCov_9fa48("20399"), 'memberCount'))]);
        if (stryMutAct_9fa48("20401") ? false : stryMutAct_9fa48("20400") ? true : (stryCov_9fa48("20400", "20401"), isAdmin)) {
          if (stryMutAct_9fa48("20402")) {
            {}
          } else {
            stryCov_9fa48("20402");
            promises.push(db.setsAdd(groupsToJoin.map(stryMutAct_9fa48("20403") ? () => undefined : (stryCov_9fa48("20403"), groupName => stryMutAct_9fa48("20404") ? `` : (stryCov_9fa48("20404"), `group:${groupName}:owners`))), uid));
          }
        }
        await Promise.all(promises);
        Groups.clearCache(uid, groupsToJoin);
        cache.del(groupsToJoin.map(stryMutAct_9fa48("20405") ? () => undefined : (stryCov_9fa48("20405"), name => stryMutAct_9fa48("20406") ? `` : (stryCov_9fa48("20406"), `group:${name}:members`))));
        const groupData = await Groups.getGroupsFields(groupsToJoin, stryMutAct_9fa48("20407") ? [] : (stryCov_9fa48("20407"), [stryMutAct_9fa48("20408") ? "" : (stryCov_9fa48("20408"), 'name'), stryMutAct_9fa48("20409") ? "" : (stryCov_9fa48("20409"), 'hidden'), stryMutAct_9fa48("20410") ? "" : (stryCov_9fa48("20410"), 'memberCount')]));
        const visibleGroups = stryMutAct_9fa48("20411") ? groupData : (stryCov_9fa48("20411"), groupData.filter(stryMutAct_9fa48("20412") ? () => undefined : (stryCov_9fa48("20412"), groupData => stryMutAct_9fa48("20415") ? groupData || !groupData.hidden : stryMutAct_9fa48("20414") ? false : stryMutAct_9fa48("20413") ? true : (stryCov_9fa48("20413", "20414", "20415"), groupData && (stryMutAct_9fa48("20416") ? groupData.hidden : (stryCov_9fa48("20416"), !groupData.hidden))))));
        if (stryMutAct_9fa48("20418") ? false : stryMutAct_9fa48("20417") ? true : (stryCov_9fa48("20417", "20418"), visibleGroups.length)) {
          if (stryMutAct_9fa48("20419")) {
            {}
          } else {
            stryCov_9fa48("20419");
            await db.sortedSetAdd(stryMutAct_9fa48("20420") ? "" : (stryCov_9fa48("20420"), 'groups:visible:memberCount'), visibleGroups.map(stryMutAct_9fa48("20421") ? () => undefined : (stryCov_9fa48("20421"), groupData => groupData.memberCount)), visibleGroups.map(stryMutAct_9fa48("20422") ? () => undefined : (stryCov_9fa48("20422"), groupData => groupData.name)));
          }
        }
        await setGroupTitleIfNotSet(groupsToJoin, uid);
        plugins.hooks.fire(stryMutAct_9fa48("20423") ? "" : (stryCov_9fa48("20423"), 'action:group.join'), stryMutAct_9fa48("20424") ? {} : (stryCov_9fa48("20424"), {
          groupNames: groupsToJoin,
          uid: uid
        }));
      }
    };
    async function createNonExistingGroups(groupsToCreate) {
      if (stryMutAct_9fa48("20425")) {
        {}
      } else {
        stryCov_9fa48("20425");
        if (stryMutAct_9fa48("20428") ? false : stryMutAct_9fa48("20427") ? true : stryMutAct_9fa48("20426") ? groupsToCreate.length : (stryCov_9fa48("20426", "20427", "20428"), !groupsToCreate.length)) {
          if (stryMutAct_9fa48("20429")) {
            {}
          } else {
            stryCov_9fa48("20429");
            return;
          }
        }
        for (const groupName of groupsToCreate) {
          if (stryMutAct_9fa48("20430")) {
            {}
          } else {
            stryCov_9fa48("20430");
            try {
              if (stryMutAct_9fa48("20431")) {
                {}
              } else {
                stryCov_9fa48("20431");
                // eslint-disable-next-line no-await-in-loop
                await Groups.create(stryMutAct_9fa48("20432") ? {} : (stryCov_9fa48("20432"), {
                  name: groupName,
                  hidden: 1
                }));
              }
            } catch (err) {
              if (stryMutAct_9fa48("20433")) {
                {}
              } else {
                stryCov_9fa48("20433");
                if (stryMutAct_9fa48("20436") ? err || err.message !== '[[error:group-already-exists]]' : stryMutAct_9fa48("20435") ? false : stryMutAct_9fa48("20434") ? true : (stryCov_9fa48("20434", "20435", "20436"), err && (stryMutAct_9fa48("20438") ? err.message === '[[error:group-already-exists]]' : stryMutAct_9fa48("20437") ? true : (stryCov_9fa48("20437", "20438"), err.message !== (stryMutAct_9fa48("20439") ? "" : (stryCov_9fa48("20439"), '[[error:group-already-exists]]')))))) {
                  if (stryMutAct_9fa48("20440")) {
                    {}
                  } else {
                    stryCov_9fa48("20440");
                    winston.error(stryMutAct_9fa48("20441") ? `` : (stryCov_9fa48("20441"), `[groups.join] Could not create new hidden group (${groupName})\n${err.stack}`));
                    throw err;
                  }
                }
              }
            }
          }
        }
      }
    }
    async function setGroupTitleIfNotSet(groupNames, uid) {
      if (stryMutAct_9fa48("20442")) {
        {}
      } else {
        stryCov_9fa48("20442");
        const ignore = stryMutAct_9fa48("20443") ? [] : (stryCov_9fa48("20443"), [stryMutAct_9fa48("20444") ? "" : (stryCov_9fa48("20444"), 'registered-users'), stryMutAct_9fa48("20445") ? "" : (stryCov_9fa48("20445"), 'verified-users'), stryMutAct_9fa48("20446") ? "" : (stryCov_9fa48("20446"), 'unverified-users'), Groups.BANNED_USERS]);
        groupNames = stryMutAct_9fa48("20447") ? groupNames : (stryCov_9fa48("20447"), groupNames.filter(stryMutAct_9fa48("20448") ? () => undefined : (stryCov_9fa48("20448"), groupName => stryMutAct_9fa48("20451") ? !ignore.includes(groupName) || !Groups.isPrivilegeGroup(groupName) : stryMutAct_9fa48("20450") ? false : stryMutAct_9fa48("20449") ? true : (stryCov_9fa48("20449", "20450", "20451"), (stryMutAct_9fa48("20452") ? ignore.includes(groupName) : (stryCov_9fa48("20452"), !ignore.includes(groupName))) && (stryMutAct_9fa48("20453") ? Groups.isPrivilegeGroup(groupName) : (stryCov_9fa48("20453"), !Groups.isPrivilegeGroup(groupName)))))));
        if (stryMutAct_9fa48("20456") ? false : stryMutAct_9fa48("20455") ? true : stryMutAct_9fa48("20454") ? groupNames.length : (stryCov_9fa48("20454", "20455", "20456"), !groupNames.length)) {
          if (stryMutAct_9fa48("20457")) {
            {}
          } else {
            stryCov_9fa48("20457");
            return;
          }
        }
        const currentTitle = await db.getObjectField(stryMutAct_9fa48("20458") ? `` : (stryCov_9fa48("20458"), `user:${uid}`), stryMutAct_9fa48("20459") ? "" : (stryCov_9fa48("20459"), 'groupTitle'));
        if (stryMutAct_9fa48("20462") ? currentTitle && currentTitle === '' : stryMutAct_9fa48("20461") ? false : stryMutAct_9fa48("20460") ? true : (stryCov_9fa48("20460", "20461", "20462"), currentTitle || (stryMutAct_9fa48("20464") ? currentTitle !== '' : stryMutAct_9fa48("20463") ? false : (stryCov_9fa48("20463", "20464"), currentTitle === (stryMutAct_9fa48("20465") ? "Stryker was here!" : (stryCov_9fa48("20465"), '')))))) {
          if (stryMutAct_9fa48("20466")) {
            {}
          } else {
            stryCov_9fa48("20466");
            return;
          }
        }
        await user.setUserField(uid, stryMutAct_9fa48("20467") ? "" : (stryCov_9fa48("20467"), 'groupTitle'), JSON.stringify(groupNames));
      }
    }
  }
};