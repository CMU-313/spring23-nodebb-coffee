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
const plugins = require('../plugins');
const slugify = require('../slugify');
const db = require('../database');
const batch = require('../batch');
module.exports = function (Groups) {
  if (stryMutAct_9fa48("19979")) {
    {}
  } else {
    stryCov_9fa48("19979");
    Groups.destroy = async function (groupNames) {
      if (stryMutAct_9fa48("19980")) {
        {}
      } else {
        stryCov_9fa48("19980");
        if (stryMutAct_9fa48("19983") ? false : stryMutAct_9fa48("19982") ? true : stryMutAct_9fa48("19981") ? Array.isArray(groupNames) : (stryCov_9fa48("19981", "19982", "19983"), !Array.isArray(groupNames))) {
          if (stryMutAct_9fa48("19984")) {
            {}
          } else {
            stryCov_9fa48("19984");
            groupNames = stryMutAct_9fa48("19985") ? [] : (stryCov_9fa48("19985"), [groupNames]);
          }
        }
        let groupsData = await Groups.getGroupsData(groupNames);
        groupsData = stryMutAct_9fa48("19986") ? groupsData : (stryCov_9fa48("19986"), groupsData.filter(Boolean));
        if (stryMutAct_9fa48("19989") ? false : stryMutAct_9fa48("19988") ? true : stryMutAct_9fa48("19987") ? groupsData.length : (stryCov_9fa48("19987", "19988", "19989"), !groupsData.length)) {
          if (stryMutAct_9fa48("19990")) {
            {}
          } else {
            stryCov_9fa48("19990");
            return;
          }
        }
        const keys = stryMutAct_9fa48("19991") ? ["Stryker was here"] : (stryCov_9fa48("19991"), []);
        groupNames.forEach(groupName => {
          if (stryMutAct_9fa48("19992")) {
            {}
          } else {
            stryCov_9fa48("19992");
            keys.push(stryMutAct_9fa48("19993") ? `` : (stryCov_9fa48("19993"), `group:${groupName}`), stryMutAct_9fa48("19994") ? `` : (stryCov_9fa48("19994"), `group:${groupName}:members`), stryMutAct_9fa48("19995") ? `` : (stryCov_9fa48("19995"), `group:${groupName}:pending`), stryMutAct_9fa48("19996") ? `` : (stryCov_9fa48("19996"), `group:${groupName}:invited`), stryMutAct_9fa48("19997") ? `` : (stryCov_9fa48("19997"), `group:${groupName}:owners`), stryMutAct_9fa48("19998") ? `` : (stryCov_9fa48("19998"), `group:${groupName}:member:pids`));
          }
        });
        const sets = groupNames.map(stryMutAct_9fa48("19999") ? () => undefined : (stryCov_9fa48("19999"), groupName => stryMutAct_9fa48("20000") ? `` : (stryCov_9fa48("20000"), `${stryMutAct_9fa48("20001") ? groupName.toUpperCase() : (stryCov_9fa48("20001"), groupName.toLowerCase())}:${groupName}`)));
        const fields = groupNames.map(stryMutAct_9fa48("20002") ? () => undefined : (stryCov_9fa48("20002"), groupName => slugify(groupName)));
        await Promise.all(stryMutAct_9fa48("20003") ? [] : (stryCov_9fa48("20003"), [db.deleteAll(keys), db.sortedSetRemove(stryMutAct_9fa48("20004") ? [] : (stryCov_9fa48("20004"), [stryMutAct_9fa48("20005") ? "" : (stryCov_9fa48("20005"), 'groups:createtime'), stryMutAct_9fa48("20006") ? "" : (stryCov_9fa48("20006"), 'groups:visible:createtime'), stryMutAct_9fa48("20007") ? "" : (stryCov_9fa48("20007"), 'groups:visible:memberCount')]), groupNames), db.sortedSetRemove(stryMutAct_9fa48("20008") ? "" : (stryCov_9fa48("20008"), 'groups:visible:name'), sets), db.deleteObjectFields(stryMutAct_9fa48("20009") ? "" : (stryCov_9fa48("20009"), 'groupslug:groupname'), fields), removeGroupsFromPrivilegeGroups(groupNames)]));
        Groups.cache.reset();
        plugins.hooks.fire(stryMutAct_9fa48("20010") ? "" : (stryCov_9fa48("20010"), 'action:groups.destroy'), stryMutAct_9fa48("20011") ? {} : (stryCov_9fa48("20011"), {
          groups: groupsData
        }));
      }
    };
    async function removeGroupsFromPrivilegeGroups(groupNames) {
      if (stryMutAct_9fa48("20012")) {
        {}
      } else {
        stryCov_9fa48("20012");
        await batch.processSortedSet(stryMutAct_9fa48("20013") ? "" : (stryCov_9fa48("20013"), 'groups:createtime'), async otherGroups => {
          if (stryMutAct_9fa48("20014")) {
            {}
          } else {
            stryCov_9fa48("20014");
            const privilegeGroups = stryMutAct_9fa48("20015") ? otherGroups : (stryCov_9fa48("20015"), otherGroups.filter(stryMutAct_9fa48("20016") ? () => undefined : (stryCov_9fa48("20016"), group => Groups.isPrivilegeGroup(group))));
            const keys = privilegeGroups.map(stryMutAct_9fa48("20017") ? () => undefined : (stryCov_9fa48("20017"), group => stryMutAct_9fa48("20018") ? `` : (stryCov_9fa48("20018"), `group:${group}:members`)));
            await db.sortedSetRemove(keys, groupNames);
          }
        }, stryMutAct_9fa48("20019") ? {} : (stryCov_9fa48("20019"), {
          batch: 500
        }));
      }
    }
  }
};