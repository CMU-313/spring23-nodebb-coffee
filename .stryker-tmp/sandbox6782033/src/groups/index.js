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
const plugins = require('../plugins');
const slugify = require('../slugify');
const Groups = module.exports;
require('./data')(Groups);
require('./create')(Groups);
require('./delete')(Groups);
require('./update')(Groups);
require('./invite')(Groups);
require('./membership')(Groups);
require('./ownership')(Groups);
require('./search')(Groups);
require('./cover')(Groups);
require('./posts')(Groups);
require('./user')(Groups);
require('./join')(Groups);
require('./leave')(Groups);
require('./cache')(Groups);
Groups.BANNED_USERS = stryMutAct_9fa48("20020") ? "" : (stryCov_9fa48("20020"), 'banned-users');
Groups.ephemeralGroups = stryMutAct_9fa48("20021") ? [] : (stryCov_9fa48("20021"), [stryMutAct_9fa48("20022") ? "" : (stryCov_9fa48("20022"), 'guests'), stryMutAct_9fa48("20023") ? "" : (stryCov_9fa48("20023"), 'spiders')]);
Groups.systemGroups = stryMutAct_9fa48("20024") ? [] : (stryCov_9fa48("20024"), [stryMutAct_9fa48("20025") ? "" : (stryCov_9fa48("20025"), 'registered-users'), stryMutAct_9fa48("20026") ? "" : (stryCov_9fa48("20026"), 'verified-users'), stryMutAct_9fa48("20027") ? "" : (stryCov_9fa48("20027"), 'unverified-users'), Groups.BANNED_USERS, stryMutAct_9fa48("20028") ? "" : (stryCov_9fa48("20028"), 'administrators'), stryMutAct_9fa48("20029") ? "" : (stryCov_9fa48("20029"), 'Global Moderators')]);
Groups.getEphemeralGroup = function (groupName) {
  if (stryMutAct_9fa48("20030")) {
    {}
  } else {
    stryCov_9fa48("20030");
    return stryMutAct_9fa48("20031") ? {} : (stryCov_9fa48("20031"), {
      name: groupName,
      slug: slugify(groupName),
      description: stryMutAct_9fa48("20032") ? "Stryker was here!" : (stryCov_9fa48("20032"), ''),
      hidden: 0,
      system: 1
    });
  }
};
Groups.removeEphemeralGroups = function (groups) {
  if (stryMutAct_9fa48("20033")) {
    {}
  } else {
    stryCov_9fa48("20033");
    for (let x = groups.length; stryMutAct_9fa48("20036") ? x < 0 : stryMutAct_9fa48("20035") ? x > 0 : stryMutAct_9fa48("20034") ? false : (stryCov_9fa48("20034", "20035", "20036"), x >= 0); stryMutAct_9fa48("20037") ? x += 1 : (stryCov_9fa48("20037"), x -= 1)) {
      if (stryMutAct_9fa48("20038")) {
        {}
      } else {
        stryCov_9fa48("20038");
        if (stryMutAct_9fa48("20040") ? false : stryMutAct_9fa48("20039") ? true : (stryCov_9fa48("20039", "20040"), Groups.ephemeralGroups.includes(groups[x]))) {
          if (stryMutAct_9fa48("20041")) {
            {}
          } else {
            stryCov_9fa48("20041");
            groups.splice(x, 1);
          }
        }
      }
    }
    return groups;
  }
};
const isPrivilegeGroupRegex = stryMutAct_9fa48("20048") ? /^cid:\d+:privileges:[\W\-:]+$/ : stryMutAct_9fa48("20047") ? /^cid:\d+:privileges:[^\w\-:]+$/ : stryMutAct_9fa48("20046") ? /^cid:\d+:privileges:[\w\-:]$/ : stryMutAct_9fa48("20045") ? /^cid:\D+:privileges:[\w\-:]+$/ : stryMutAct_9fa48("20044") ? /^cid:\d:privileges:[\w\-:]+$/ : stryMutAct_9fa48("20043") ? /^cid:\d+:privileges:[\w\-:]+/ : stryMutAct_9fa48("20042") ? /cid:\d+:privileges:[\w\-:]+$/ : (stryCov_9fa48("20042", "20043", "20044", "20045", "20046", "20047", "20048"), /^cid:\d+:privileges:[\w\-:]+$/);
Groups.isPrivilegeGroup = function (groupName) {
  if (stryMutAct_9fa48("20049")) {
    {}
  } else {
    stryCov_9fa48("20049");
    return isPrivilegeGroupRegex.test(groupName);
  }
};
Groups.getGroupsFromSet = async function (set, start, stop) {
  if (stryMutAct_9fa48("20050")) {
    {}
  } else {
    stryCov_9fa48("20050");
    let groupNames;
    if (stryMutAct_9fa48("20053") ? set !== 'groups:visible:name' : stryMutAct_9fa48("20052") ? false : stryMutAct_9fa48("20051") ? true : (stryCov_9fa48("20051", "20052", "20053"), set === (stryMutAct_9fa48("20054") ? "" : (stryCov_9fa48("20054"), 'groups:visible:name')))) {
      if (stryMutAct_9fa48("20055")) {
        {}
      } else {
        stryCov_9fa48("20055");
        groupNames = await db.getSortedSetRangeByLex(set, stryMutAct_9fa48("20056") ? "" : (stryCov_9fa48("20056"), '-'), stryMutAct_9fa48("20057") ? "" : (stryCov_9fa48("20057"), '+'), start, stryMutAct_9fa48("20058") ? stop - start - 1 : (stryCov_9fa48("20058"), (stryMutAct_9fa48("20059") ? stop + start : (stryCov_9fa48("20059"), stop - start)) + 1));
      }
    } else {
      if (stryMutAct_9fa48("20060")) {
        {}
      } else {
        stryCov_9fa48("20060");
        groupNames = await db.getSortedSetRevRange(set, start, stop);
      }
    }
    if (stryMutAct_9fa48("20063") ? set !== 'groups:visible:name' : stryMutAct_9fa48("20062") ? false : stryMutAct_9fa48("20061") ? true : (stryCov_9fa48("20061", "20062", "20063"), set === (stryMutAct_9fa48("20064") ? "" : (stryCov_9fa48("20064"), 'groups:visible:name')))) {
      if (stryMutAct_9fa48("20065")) {
        {}
      } else {
        stryCov_9fa48("20065");
        groupNames = groupNames.map(stryMutAct_9fa48("20066") ? () => undefined : (stryCov_9fa48("20066"), name => name.split(stryMutAct_9fa48("20067") ? "" : (stryCov_9fa48("20067"), ':'))[1]));
      }
    }
    return await Groups.getGroupsAndMembers(groupNames);
  }
};
Groups.getGroupsBySort = async function (sort, start, stop) {
  if (stryMutAct_9fa48("20068")) {
    {}
  } else {
    stryCov_9fa48("20068");
    let set = stryMutAct_9fa48("20069") ? "" : (stryCov_9fa48("20069"), 'groups:visible:name');
    if (stryMutAct_9fa48("20072") ? sort !== 'count' : stryMutAct_9fa48("20071") ? false : stryMutAct_9fa48("20070") ? true : (stryCov_9fa48("20070", "20071", "20072"), sort === (stryMutAct_9fa48("20073") ? "" : (stryCov_9fa48("20073"), 'count')))) {
      if (stryMutAct_9fa48("20074")) {
        {}
      } else {
        stryCov_9fa48("20074");
        set = stryMutAct_9fa48("20075") ? "" : (stryCov_9fa48("20075"), 'groups:visible:memberCount');
      }
    } else if (stryMutAct_9fa48("20078") ? sort !== 'date' : stryMutAct_9fa48("20077") ? false : stryMutAct_9fa48("20076") ? true : (stryCov_9fa48("20076", "20077", "20078"), sort === (stryMutAct_9fa48("20079") ? "" : (stryCov_9fa48("20079"), 'date')))) {
      if (stryMutAct_9fa48("20080")) {
        {}
      } else {
        stryCov_9fa48("20080");
        set = stryMutAct_9fa48("20081") ? "" : (stryCov_9fa48("20081"), 'groups:visible:createtime');
      }
    }
    return await Groups.getGroupsFromSet(set, start, stop);
  }
};
Groups.getNonPrivilegeGroups = async function (set, start, stop) {
  if (stryMutAct_9fa48("20082")) {
    {}
  } else {
    stryCov_9fa48("20082");
    let groupNames = await db.getSortedSetRevRange(set, start, stop);
    groupNames = stryMutAct_9fa48("20083") ? groupNames.concat(Groups.ephemeralGroups) : (stryCov_9fa48("20083"), groupNames.concat(Groups.ephemeralGroups).filter(stryMutAct_9fa48("20084") ? () => undefined : (stryCov_9fa48("20084"), groupName => stryMutAct_9fa48("20085") ? Groups.isPrivilegeGroup(groupName) : (stryCov_9fa48("20085"), !Groups.isPrivilegeGroup(groupName)))));
    const groupsData = await Groups.getGroupsData(groupNames);
    return stryMutAct_9fa48("20086") ? groupsData : (stryCov_9fa48("20086"), groupsData.filter(Boolean));
  }
};
Groups.getGroups = async function (set, start, stop) {
  if (stryMutAct_9fa48("20087")) {
    {}
  } else {
    stryCov_9fa48("20087");
    return await db.getSortedSetRevRange(set, start, stop);
  }
};
Groups.getGroupsAndMembers = async function (groupNames) {
  if (stryMutAct_9fa48("20088")) {
    {}
  } else {
    stryCov_9fa48("20088");
    const [groups, members] = await Promise.all(stryMutAct_9fa48("20089") ? [] : (stryCov_9fa48("20089"), [Groups.getGroupsData(groupNames), Groups.getMemberUsers(groupNames, 0, 9)]));
    groups.forEach((group, index) => {
      if (stryMutAct_9fa48("20090")) {
        {}
      } else {
        stryCov_9fa48("20090");
        if (stryMutAct_9fa48("20092") ? false : stryMutAct_9fa48("20091") ? true : (stryCov_9fa48("20091", "20092"), group)) {
          if (stryMutAct_9fa48("20093")) {
            {}
          } else {
            stryCov_9fa48("20093");
            group.members = stryMutAct_9fa48("20096") ? members[index] && [] : stryMutAct_9fa48("20095") ? false : stryMutAct_9fa48("20094") ? true : (stryCov_9fa48("20094", "20095", "20096"), members[index] || (stryMutAct_9fa48("20097") ? ["Stryker was here"] : (stryCov_9fa48("20097"), [])));
            group.truncated = stryMutAct_9fa48("20101") ? group.memberCount <= group.members.length : stryMutAct_9fa48("20100") ? group.memberCount >= group.members.length : stryMutAct_9fa48("20099") ? false : stryMutAct_9fa48("20098") ? true : (stryCov_9fa48("20098", "20099", "20100", "20101"), group.memberCount > group.members.length);
          }
        }
      }
    });
    return groups;
  }
};
Groups.get = async function (groupName, options) {
  if (stryMutAct_9fa48("20102")) {
    {}
  } else {
    stryCov_9fa48("20102");
    if (stryMutAct_9fa48("20105") ? false : stryMutAct_9fa48("20104") ? true : stryMutAct_9fa48("20103") ? groupName : (stryCov_9fa48("20103", "20104", "20105"), !groupName)) {
      if (stryMutAct_9fa48("20106")) {
        {}
      } else {
        stryCov_9fa48("20106");
        throw new Error(stryMutAct_9fa48("20107") ? "" : (stryCov_9fa48("20107"), '[[error:invalid-group]]'));
      }
    }
    let stop = stryMutAct_9fa48("20108") ? +1 : (stryCov_9fa48("20108"), -1);
    if (stryMutAct_9fa48("20110") ? false : stryMutAct_9fa48("20109") ? true : (stryCov_9fa48("20109", "20110"), options.truncateUserList)) {
      if (stryMutAct_9fa48("20111")) {
        {}
      } else {
        stryCov_9fa48("20111");
        stop = stryMutAct_9fa48("20112") ? (parseInt(options.userListCount, 10) || 4) + 1 : (stryCov_9fa48("20112"), (stryMutAct_9fa48("20115") ? parseInt(options.userListCount, 10) && 4 : stryMutAct_9fa48("20114") ? false : stryMutAct_9fa48("20113") ? true : (stryCov_9fa48("20113", "20114", "20115"), parseInt(options.userListCount, 10) || 4)) - 1);
      }
    }
    const [groupData, members, pending, invited, isMember, isPending, isInvited, isOwner] = await Promise.all(stryMutAct_9fa48("20116") ? [] : (stryCov_9fa48("20116"), [Groups.getGroupData(groupName), Groups.getOwnersAndMembers(groupName, options.uid, 0, stop), Groups.getUsersFromSet(stryMutAct_9fa48("20117") ? `` : (stryCov_9fa48("20117"), `group:${groupName}:pending`), stryMutAct_9fa48("20118") ? [] : (stryCov_9fa48("20118"), [stryMutAct_9fa48("20119") ? "" : (stryCov_9fa48("20119"), 'username'), stryMutAct_9fa48("20120") ? "" : (stryCov_9fa48("20120"), 'userslug'), stryMutAct_9fa48("20121") ? "" : (stryCov_9fa48("20121"), 'picture')])), Groups.getUsersFromSet(stryMutAct_9fa48("20122") ? `` : (stryCov_9fa48("20122"), `group:${groupName}:invited`), stryMutAct_9fa48("20123") ? [] : (stryCov_9fa48("20123"), [stryMutAct_9fa48("20124") ? "" : (stryCov_9fa48("20124"), 'username'), stryMutAct_9fa48("20125") ? "" : (stryCov_9fa48("20125"), 'userslug'), stryMutAct_9fa48("20126") ? "" : (stryCov_9fa48("20126"), 'picture')])), Groups.isMember(options.uid, groupName), Groups.isPending(options.uid, groupName), Groups.isInvited(options.uid, groupName), Groups.ownership.isOwner(options.uid, groupName)]));
    if (stryMutAct_9fa48("20129") ? false : stryMutAct_9fa48("20128") ? true : stryMutAct_9fa48("20127") ? groupData : (stryCov_9fa48("20127", "20128", "20129"), !groupData)) {
      if (stryMutAct_9fa48("20130")) {
        {}
      } else {
        stryCov_9fa48("20130");
        return null;
      }
    }
    const descriptionParsed = await plugins.hooks.fire(stryMutAct_9fa48("20131") ? "" : (stryCov_9fa48("20131"), 'filter:parse.raw'), String(stryMutAct_9fa48("20134") ? groupData.description && '' : stryMutAct_9fa48("20133") ? false : stryMutAct_9fa48("20132") ? true : (stryCov_9fa48("20132", "20133", "20134"), groupData.description || (stryMutAct_9fa48("20135") ? "Stryker was here!" : (stryCov_9fa48("20135"), '')))));
    groupData.descriptionParsed = descriptionParsed;
    groupData.members = members;
    groupData.membersNextStart = stryMutAct_9fa48("20136") ? stop - 1 : (stryCov_9fa48("20136"), stop + 1);
    groupData.pending = stryMutAct_9fa48("20137") ? pending : (stryCov_9fa48("20137"), pending.filter(Boolean));
    groupData.invited = stryMutAct_9fa48("20138") ? invited : (stryCov_9fa48("20138"), invited.filter(Boolean));
    groupData.isMember = isMember;
    groupData.isPending = isPending;
    groupData.isInvited = isInvited;
    groupData.isOwner = isOwner;
    const results = await plugins.hooks.fire(stryMutAct_9fa48("20139") ? "" : (stryCov_9fa48("20139"), 'filter:group.get'), stryMutAct_9fa48("20140") ? {} : (stryCov_9fa48("20140"), {
      group: groupData
    }));
    return results.group;
  }
};
Groups.getOwners = async function (groupName) {
  if (stryMutAct_9fa48("20141")) {
    {}
  } else {
    stryCov_9fa48("20141");
    return await db.getSetMembers(stryMutAct_9fa48("20142") ? `` : (stryCov_9fa48("20142"), `group:${groupName}:owners`));
  }
};
Groups.getOwnersAndMembers = async function (groupName, uid, start, stop) {
  if (stryMutAct_9fa48("20143")) {
    {}
  } else {
    stryCov_9fa48("20143");
    const ownerUids = await db.getSetMembers(stryMutAct_9fa48("20144") ? `` : (stryCov_9fa48("20144"), `group:${groupName}:owners`));
    const countToReturn = stryMutAct_9fa48("20145") ? stop - start - 1 : (stryCov_9fa48("20145"), (stryMutAct_9fa48("20146") ? stop + start : (stryCov_9fa48("20146"), stop - start)) + 1);
    const ownerUidsOnPage = stryMutAct_9fa48("20147") ? ownerUids : (stryCov_9fa48("20147"), ownerUids.slice(start, (stryMutAct_9fa48("20150") ? stop === -1 : stryMutAct_9fa48("20149") ? false : stryMutAct_9fa48("20148") ? true : (stryCov_9fa48("20148", "20149", "20150"), stop !== (stryMutAct_9fa48("20151") ? +1 : (stryCov_9fa48("20151"), -1)))) ? stryMutAct_9fa48("20152") ? stop - 1 : (stryCov_9fa48("20152"), stop + 1) : undefined));
    const owners = await user.getUsers(ownerUidsOnPage, uid);
    owners.forEach(user => {
      if (stryMutAct_9fa48("20153")) {
        {}
      } else {
        stryCov_9fa48("20153");
        if (stryMutAct_9fa48("20155") ? false : stryMutAct_9fa48("20154") ? true : (stryCov_9fa48("20154", "20155"), user)) {
          if (stryMutAct_9fa48("20156")) {
            {}
          } else {
            stryCov_9fa48("20156");
            user.isOwner = stryMutAct_9fa48("20157") ? false : (stryCov_9fa48("20157"), true);
          }
        }
      }
    });
    let done = stryMutAct_9fa48("20158") ? true : (stryCov_9fa48("20158"), false);
    let returnUsers = owners;
    let memberStart = stryMutAct_9fa48("20159") ? start + ownerUids.length : (stryCov_9fa48("20159"), start - ownerUids.length);
    let memberStop = stryMutAct_9fa48("20160") ? memberStart + countToReturn + 1 : (stryCov_9fa48("20160"), (stryMutAct_9fa48("20161") ? memberStart - countToReturn : (stryCov_9fa48("20161"), memberStart + countToReturn)) - 1);
    memberStart = Math.max(0, memberStart);
    memberStop = Math.max(0, memberStop);
    async function addMembers(start, stop) {
      if (stryMutAct_9fa48("20162")) {
        {}
      } else {
        stryCov_9fa48("20162");
        let batch = await user.getUsersFromSet(stryMutAct_9fa48("20163") ? `` : (stryCov_9fa48("20163"), `group:${groupName}:members`), uid, start, stop);
        if (stryMutAct_9fa48("20166") ? false : stryMutAct_9fa48("20165") ? true : stryMutAct_9fa48("20164") ? batch.length : (stryCov_9fa48("20164", "20165", "20166"), !batch.length)) {
          if (stryMutAct_9fa48("20167")) {
            {}
          } else {
            stryCov_9fa48("20167");
            done = stryMutAct_9fa48("20168") ? false : (stryCov_9fa48("20168"), true);
          }
        }
        batch = stryMutAct_9fa48("20169") ? batch : (stryCov_9fa48("20169"), batch.filter(stryMutAct_9fa48("20170") ? () => undefined : (stryCov_9fa48("20170"), user => stryMutAct_9fa48("20173") ? user && user.uid || !ownerUids.includes(user.uid.toString()) : stryMutAct_9fa48("20172") ? false : stryMutAct_9fa48("20171") ? true : (stryCov_9fa48("20171", "20172", "20173"), (stryMutAct_9fa48("20175") ? user || user.uid : stryMutAct_9fa48("20174") ? true : (stryCov_9fa48("20174", "20175"), user && user.uid)) && (stryMutAct_9fa48("20176") ? ownerUids.includes(user.uid.toString()) : (stryCov_9fa48("20176"), !ownerUids.includes(user.uid.toString())))))));
        returnUsers = returnUsers.concat(batch);
      }
    }
    if (stryMutAct_9fa48("20179") ? stop !== -1 : stryMutAct_9fa48("20178") ? false : stryMutAct_9fa48("20177") ? true : (stryCov_9fa48("20177", "20178", "20179"), stop === (stryMutAct_9fa48("20180") ? +1 : (stryCov_9fa48("20180"), -1)))) {
      if (stryMutAct_9fa48("20181")) {
        {}
      } else {
        stryCov_9fa48("20181");
        await addMembers(memberStart, stryMutAct_9fa48("20182") ? +1 : (stryCov_9fa48("20182"), -1));
      }
    } else {
      if (stryMutAct_9fa48("20183")) {
        {}
      } else {
        stryCov_9fa48("20183");
        while (stryMutAct_9fa48("20185") ? returnUsers.length < countToReturn || !done : stryMutAct_9fa48("20184") ? false : (stryCov_9fa48("20184", "20185"), (stryMutAct_9fa48("20188") ? returnUsers.length >= countToReturn : stryMutAct_9fa48("20187") ? returnUsers.length <= countToReturn : stryMutAct_9fa48("20186") ? true : (stryCov_9fa48("20186", "20187", "20188"), returnUsers.length < countToReturn)) && (stryMutAct_9fa48("20189") ? done : (stryCov_9fa48("20189"), !done)))) {
          if (stryMutAct_9fa48("20190")) {
            {}
          } else {
            stryCov_9fa48("20190");
            /* eslint-disable no-await-in-loop */
            await addMembers(memberStart, memberStop);
            memberStart = stryMutAct_9fa48("20191") ? memberStop - 1 : (stryCov_9fa48("20191"), memberStop + 1);
            memberStop = stryMutAct_9fa48("20192") ? memberStart + countToReturn + 1 : (stryCov_9fa48("20192"), (stryMutAct_9fa48("20193") ? memberStart - countToReturn : (stryCov_9fa48("20193"), memberStart + countToReturn)) - 1);
          }
        }
      }
    }
    returnUsers = (stryMutAct_9fa48("20197") ? countToReturn <= 0 : stryMutAct_9fa48("20196") ? countToReturn >= 0 : stryMutAct_9fa48("20195") ? false : stryMutAct_9fa48("20194") ? true : (stryCov_9fa48("20194", "20195", "20196", "20197"), countToReturn > 0)) ? stryMutAct_9fa48("20198") ? returnUsers : (stryCov_9fa48("20198"), returnUsers.slice(0, countToReturn)) : returnUsers;
    const result = await plugins.hooks.fire(stryMutAct_9fa48("20199") ? "" : (stryCov_9fa48("20199"), 'filter:group.getOwnersAndMembers'), stryMutAct_9fa48("20200") ? {} : (stryCov_9fa48("20200"), {
      users: returnUsers,
      uid: uid,
      start: start,
      stop: stop
    }));
    return result.users;
  }
};
Groups.getByGroupslug = async function (slug, options) {
  if (stryMutAct_9fa48("20201")) {
    {}
  } else {
    stryCov_9fa48("20201");
    options = stryMutAct_9fa48("20204") ? options && {} : stryMutAct_9fa48("20203") ? false : stryMutAct_9fa48("20202") ? true : (stryCov_9fa48("20202", "20203", "20204"), options || {});
    const groupName = await db.getObjectField(stryMutAct_9fa48("20205") ? "" : (stryCov_9fa48("20205"), 'groupslug:groupname'), slug);
    if (stryMutAct_9fa48("20208") ? false : stryMutAct_9fa48("20207") ? true : stryMutAct_9fa48("20206") ? groupName : (stryCov_9fa48("20206", "20207", "20208"), !groupName)) {
      if (stryMutAct_9fa48("20209")) {
        {}
      } else {
        stryCov_9fa48("20209");
        throw new Error(stryMutAct_9fa48("20210") ? "" : (stryCov_9fa48("20210"), '[[error:no-group]]'));
      }
    }
    return await Groups.get(groupName, options);
  }
};
Groups.getGroupNameByGroupSlug = async function (slug) {
  if (stryMutAct_9fa48("20211")) {
    {}
  } else {
    stryCov_9fa48("20211");
    return await db.getObjectField(stryMutAct_9fa48("20212") ? "" : (stryCov_9fa48("20212"), 'groupslug:groupname'), slug);
  }
};
Groups.isPrivate = async function (groupName) {
  if (stryMutAct_9fa48("20213")) {
    {}
  } else {
    stryCov_9fa48("20213");
    return await isFieldOn(groupName, stryMutAct_9fa48("20214") ? "" : (stryCov_9fa48("20214"), 'private'));
  }
};
Groups.isHidden = async function (groupName) {
  if (stryMutAct_9fa48("20215")) {
    {}
  } else {
    stryCov_9fa48("20215");
    return await isFieldOn(groupName, stryMutAct_9fa48("20216") ? "" : (stryCov_9fa48("20216"), 'hidden'));
  }
};
async function isFieldOn(groupName, field) {
  if (stryMutAct_9fa48("20217")) {
    {}
  } else {
    stryCov_9fa48("20217");
    const value = await db.getObjectField(stryMutAct_9fa48("20218") ? `` : (stryCov_9fa48("20218"), `group:${groupName}`), field);
    return stryMutAct_9fa48("20221") ? parseInt(value, 10) !== 1 : stryMutAct_9fa48("20220") ? false : stryMutAct_9fa48("20219") ? true : (stryCov_9fa48("20219", "20220", "20221"), parseInt(value, 10) === 1);
  }
}
Groups.exists = async function (name) {
  if (stryMutAct_9fa48("20222")) {
    {}
  } else {
    stryCov_9fa48("20222");
    if (stryMutAct_9fa48("20224") ? false : stryMutAct_9fa48("20223") ? true : (stryCov_9fa48("20223", "20224"), Array.isArray(name))) {
      if (stryMutAct_9fa48("20225")) {
        {}
      } else {
        stryCov_9fa48("20225");
        const slugs = name.map(stryMutAct_9fa48("20226") ? () => undefined : (stryCov_9fa48("20226"), groupName => slugify(groupName)));
        const isMembersOfRealGroups = await db.isSortedSetMembers(stryMutAct_9fa48("20227") ? "" : (stryCov_9fa48("20227"), 'groups:createtime'), name);
        const isMembersOfEphemeralGroups = slugs.map(stryMutAct_9fa48("20228") ? () => undefined : (stryCov_9fa48("20228"), slug => Groups.ephemeralGroups.includes(slug)));
        return name.map(stryMutAct_9fa48("20229") ? () => undefined : (stryCov_9fa48("20229"), (n, index) => stryMutAct_9fa48("20232") ? isMembersOfRealGroups[index] && isMembersOfEphemeralGroups[index] : stryMutAct_9fa48("20231") ? false : stryMutAct_9fa48("20230") ? true : (stryCov_9fa48("20230", "20231", "20232"), isMembersOfRealGroups[index] || isMembersOfEphemeralGroups[index])));
      }
    }
    const slug = slugify(name);
    const isMemberOfRealGroups = await db.isSortedSetMember(stryMutAct_9fa48("20233") ? "" : (stryCov_9fa48("20233"), 'groups:createtime'), name);
    const isMemberOfEphemeralGroups = Groups.ephemeralGroups.includes(slug);
    return stryMutAct_9fa48("20236") ? isMemberOfRealGroups && isMemberOfEphemeralGroups : stryMutAct_9fa48("20235") ? false : stryMutAct_9fa48("20234") ? true : (stryCov_9fa48("20234", "20235", "20236"), isMemberOfRealGroups || isMemberOfEphemeralGroups);
  }
};
Groups.existsBySlug = async function (slug) {
  if (stryMutAct_9fa48("20237")) {
    {}
  } else {
    stryCov_9fa48("20237");
    if (stryMutAct_9fa48("20239") ? false : stryMutAct_9fa48("20238") ? true : (stryCov_9fa48("20238", "20239"), Array.isArray(slug))) {
      if (stryMutAct_9fa48("20240")) {
        {}
      } else {
        stryCov_9fa48("20240");
        return await db.isObjectFields(stryMutAct_9fa48("20241") ? "" : (stryCov_9fa48("20241"), 'groupslug:groupname'), slug);
      }
    }
    return await db.isObjectField(stryMutAct_9fa48("20242") ? "" : (stryCov_9fa48("20242"), 'groupslug:groupname'), slug);
  }
};
require('../promisify')(Groups);