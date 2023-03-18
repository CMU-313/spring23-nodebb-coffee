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
const meta = require('../meta');
const plugins = require('../plugins');
const slugify = require('../slugify');
const db = require('../database');
module.exports = function (Groups) {
  if (stryMutAct_9fa48("19728")) {
    {}
  } else {
    stryCov_9fa48("19728");
    Groups.create = async function (data) {
      if (stryMutAct_9fa48("19729")) {
        {}
      } else {
        stryCov_9fa48("19729");
        const isSystem = isSystemGroup(data);
        const timestamp = stryMutAct_9fa48("19732") ? data.timestamp && Date.now() : stryMutAct_9fa48("19731") ? false : stryMutAct_9fa48("19730") ? true : (stryCov_9fa48("19730", "19731", "19732"), data.timestamp || Date.now());
        let disableJoinRequests = (stryMutAct_9fa48("19735") ? parseInt(data.disableJoinRequests, 10) !== 1 : stryMutAct_9fa48("19734") ? false : stryMutAct_9fa48("19733") ? true : (stryCov_9fa48("19733", "19734", "19735"), parseInt(data.disableJoinRequests, 10) === 1)) ? 1 : 0;
        if (stryMutAct_9fa48("19738") ? data.name !== 'administrators' : stryMutAct_9fa48("19737") ? false : stryMutAct_9fa48("19736") ? true : (stryCov_9fa48("19736", "19737", "19738"), data.name === (stryMutAct_9fa48("19739") ? "" : (stryCov_9fa48("19739"), 'administrators')))) {
          if (stryMutAct_9fa48("19740")) {
            {}
          } else {
            stryCov_9fa48("19740");
            disableJoinRequests = 1;
          }
        }
        const disableLeave = (stryMutAct_9fa48("19743") ? parseInt(data.disableLeave, 10) !== 1 : stryMutAct_9fa48("19742") ? false : stryMutAct_9fa48("19741") ? true : (stryCov_9fa48("19741", "19742", "19743"), parseInt(data.disableLeave, 10) === 1)) ? 1 : 0;
        const isHidden = stryMutAct_9fa48("19746") ? parseInt(data.hidden, 10) !== 1 : stryMutAct_9fa48("19745") ? false : stryMutAct_9fa48("19744") ? true : (stryCov_9fa48("19744", "19745", "19746"), parseInt(data.hidden, 10) === 1);
        Groups.validateGroupName(data.name);
        const exists = await meta.userOrGroupExists(data.name);
        if (stryMutAct_9fa48("19748") ? false : stryMutAct_9fa48("19747") ? true : (stryCov_9fa48("19747", "19748"), exists)) {
          if (stryMutAct_9fa48("19749")) {
            {}
          } else {
            stryCov_9fa48("19749");
            throw new Error(stryMutAct_9fa48("19750") ? "" : (stryCov_9fa48("19750"), '[[error:group-already-exists]]'));
          }
        }
        const memberCount = data.hasOwnProperty(stryMutAct_9fa48("19751") ? "" : (stryCov_9fa48("19751"), 'ownerUid')) ? 1 : 0;
        const isPrivate = (stryMutAct_9fa48("19754") ? data.hasOwnProperty('private') || data.private !== undefined : stryMutAct_9fa48("19753") ? false : stryMutAct_9fa48("19752") ? true : (stryCov_9fa48("19752", "19753", "19754"), data.hasOwnProperty(stryMutAct_9fa48("19755") ? "" : (stryCov_9fa48("19755"), 'private')) && (stryMutAct_9fa48("19757") ? data.private === undefined : stryMutAct_9fa48("19756") ? true : (stryCov_9fa48("19756", "19757"), data.private !== undefined)))) ? stryMutAct_9fa48("19760") ? parseInt(data.private, 10) !== 1 : stryMutAct_9fa48("19759") ? false : stryMutAct_9fa48("19758") ? true : (stryCov_9fa48("19758", "19759", "19760"), parseInt(data.private, 10) === 1) : stryMutAct_9fa48("19761") ? false : (stryCov_9fa48("19761"), true);
        let groupData = stryMutAct_9fa48("19762") ? {} : (stryCov_9fa48("19762"), {
          name: data.name,
          slug: slugify(data.name),
          createtime: timestamp,
          userTitle: stryMutAct_9fa48("19765") ? data.userTitle && data.name : stryMutAct_9fa48("19764") ? false : stryMutAct_9fa48("19763") ? true : (stryCov_9fa48("19763", "19764", "19765"), data.userTitle || data.name),
          userTitleEnabled: (stryMutAct_9fa48("19768") ? parseInt(data.userTitleEnabled, 10) !== 1 : stryMutAct_9fa48("19767") ? false : stryMutAct_9fa48("19766") ? true : (stryCov_9fa48("19766", "19767", "19768"), parseInt(data.userTitleEnabled, 10) === 1)) ? 1 : 0,
          description: stryMutAct_9fa48("19771") ? data.description && '' : stryMutAct_9fa48("19770") ? false : stryMutAct_9fa48("19769") ? true : (stryCov_9fa48("19769", "19770", "19771"), data.description || (stryMutAct_9fa48("19772") ? "Stryker was here!" : (stryCov_9fa48("19772"), ''))),
          memberCount: memberCount,
          hidden: isHidden ? 1 : 0,
          system: isSystem ? 1 : 0,
          private: isPrivate ? 1 : 0,
          disableJoinRequests: disableJoinRequests,
          disableLeave: disableLeave
        });
        await plugins.hooks.fire(stryMutAct_9fa48("19773") ? "" : (stryCov_9fa48("19773"), 'filter:group.create'), stryMutAct_9fa48("19774") ? {} : (stryCov_9fa48("19774"), {
          group: groupData,
          data: data
        }));
        await db.sortedSetAdd(stryMutAct_9fa48("19775") ? "" : (stryCov_9fa48("19775"), 'groups:createtime'), groupData.createtime, groupData.name);
        await db.setObject(stryMutAct_9fa48("19776") ? `` : (stryCov_9fa48("19776"), `group:${groupData.name}`), groupData);
        if (stryMutAct_9fa48("19778") ? false : stryMutAct_9fa48("19777") ? true : (stryCov_9fa48("19777", "19778"), data.hasOwnProperty(stryMutAct_9fa48("19779") ? "" : (stryCov_9fa48("19779"), 'ownerUid')))) {
          if (stryMutAct_9fa48("19780")) {
            {}
          } else {
            stryCov_9fa48("19780");
            await db.setAdd(stryMutAct_9fa48("19781") ? `` : (stryCov_9fa48("19781"), `group:${groupData.name}:owners`), data.ownerUid);
            await db.sortedSetAdd(stryMutAct_9fa48("19782") ? `` : (stryCov_9fa48("19782"), `group:${groupData.name}:members`), timestamp, data.ownerUid);
          }
        }
        if (stryMutAct_9fa48("19785") ? !isHidden || !isSystem : stryMutAct_9fa48("19784") ? false : stryMutAct_9fa48("19783") ? true : (stryCov_9fa48("19783", "19784", "19785"), (stryMutAct_9fa48("19786") ? isHidden : (stryCov_9fa48("19786"), !isHidden)) && (stryMutAct_9fa48("19787") ? isSystem : (stryCov_9fa48("19787"), !isSystem)))) {
          if (stryMutAct_9fa48("19788")) {
            {}
          } else {
            stryCov_9fa48("19788");
            await db.sortedSetAddBulk(stryMutAct_9fa48("19789") ? [] : (stryCov_9fa48("19789"), [stryMutAct_9fa48("19790") ? [] : (stryCov_9fa48("19790"), [stryMutAct_9fa48("19791") ? "" : (stryCov_9fa48("19791"), 'groups:visible:createtime'), timestamp, groupData.name]), stryMutAct_9fa48("19792") ? [] : (stryCov_9fa48("19792"), [stryMutAct_9fa48("19793") ? "" : (stryCov_9fa48("19793"), 'groups:visible:memberCount'), groupData.memberCount, groupData.name]), stryMutAct_9fa48("19794") ? [] : (stryCov_9fa48("19794"), [stryMutAct_9fa48("19795") ? "" : (stryCov_9fa48("19795"), 'groups:visible:name'), 0, stryMutAct_9fa48("19796") ? `` : (stryCov_9fa48("19796"), `${stryMutAct_9fa48("19797") ? groupData.name.toUpperCase() : (stryCov_9fa48("19797"), groupData.name.toLowerCase())}:${groupData.name}`)])]));
          }
        }
        await db.setObjectField(stryMutAct_9fa48("19798") ? "" : (stryCov_9fa48("19798"), 'groupslug:groupname'), groupData.slug, groupData.name);
        groupData = await Groups.getGroupData(groupData.name);
        plugins.hooks.fire(stryMutAct_9fa48("19799") ? "" : (stryCov_9fa48("19799"), 'action:group.create'), stryMutAct_9fa48("19800") ? {} : (stryCov_9fa48("19800"), {
          group: groupData
        }));
        return groupData;
      }
    };
    function isSystemGroup(data) {
      if (stryMutAct_9fa48("19801")) {
        {}
      } else {
        stryCov_9fa48("19801");
        return stryMutAct_9fa48("19804") ? (data.system === true || parseInt(data.system, 10) === 1 || Groups.systemGroups.includes(data.name)) && Groups.isPrivilegeGroup(data.name) : stryMutAct_9fa48("19803") ? false : stryMutAct_9fa48("19802") ? true : (stryCov_9fa48("19802", "19803", "19804"), (stryMutAct_9fa48("19806") ? (data.system === true || parseInt(data.system, 10) === 1) && Groups.systemGroups.includes(data.name) : stryMutAct_9fa48("19805") ? false : (stryCov_9fa48("19805", "19806"), (stryMutAct_9fa48("19808") ? data.system === true && parseInt(data.system, 10) === 1 : stryMutAct_9fa48("19807") ? false : (stryCov_9fa48("19807", "19808"), (stryMutAct_9fa48("19810") ? data.system !== true : stryMutAct_9fa48("19809") ? false : (stryCov_9fa48("19809", "19810"), data.system === (stryMutAct_9fa48("19811") ? false : (stryCov_9fa48("19811"), true)))) || (stryMutAct_9fa48("19813") ? parseInt(data.system, 10) !== 1 : stryMutAct_9fa48("19812") ? false : (stryCov_9fa48("19812", "19813"), parseInt(data.system, 10) === 1)))) || Groups.systemGroups.includes(data.name))) || Groups.isPrivilegeGroup(data.name));
      }
    }
    Groups.validateGroupName = function (name) {
      if (stryMutAct_9fa48("19814")) {
        {}
      } else {
        stryCov_9fa48("19814");
        if (stryMutAct_9fa48("19817") ? false : stryMutAct_9fa48("19816") ? true : stryMutAct_9fa48("19815") ? name : (stryCov_9fa48("19815", "19816", "19817"), !name)) {
          if (stryMutAct_9fa48("19818")) {
            {}
          } else {
            stryCov_9fa48("19818");
            throw new Error(stryMutAct_9fa48("19819") ? "" : (stryCov_9fa48("19819"), '[[error:group-name-too-short]]'));
          }
        }
        if (stryMutAct_9fa48("19822") ? typeof name === 'string' : stryMutAct_9fa48("19821") ? false : stryMutAct_9fa48("19820") ? true : (stryCov_9fa48("19820", "19821", "19822"), typeof name !== (stryMutAct_9fa48("19823") ? "" : (stryCov_9fa48("19823"), 'string')))) {
          if (stryMutAct_9fa48("19824")) {
            {}
          } else {
            stryCov_9fa48("19824");
            throw new Error(stryMutAct_9fa48("19825") ? "" : (stryCov_9fa48("19825"), '[[error:invalid-group-name]]'));
          }
        }
        if (stryMutAct_9fa48("19828") ? !Groups.isPrivilegeGroup(name) || name.length > meta.config.maximumGroupNameLength : stryMutAct_9fa48("19827") ? false : stryMutAct_9fa48("19826") ? true : (stryCov_9fa48("19826", "19827", "19828"), (stryMutAct_9fa48("19829") ? Groups.isPrivilegeGroup(name) : (stryCov_9fa48("19829"), !Groups.isPrivilegeGroup(name))) && (stryMutAct_9fa48("19832") ? name.length <= meta.config.maximumGroupNameLength : stryMutAct_9fa48("19831") ? name.length >= meta.config.maximumGroupNameLength : stryMutAct_9fa48("19830") ? true : (stryCov_9fa48("19830", "19831", "19832"), name.length > meta.config.maximumGroupNameLength)))) {
          if (stryMutAct_9fa48("19833")) {
            {}
          } else {
            stryCov_9fa48("19833");
            throw new Error(stryMutAct_9fa48("19834") ? "" : (stryCov_9fa48("19834"), '[[error:group-name-too-long]]'));
          }
        }
        if (stryMutAct_9fa48("19837") ? name === 'guests' && !Groups.isPrivilegeGroup(name) && name.includes(':') : stryMutAct_9fa48("19836") ? false : stryMutAct_9fa48("19835") ? true : (stryCov_9fa48("19835", "19836", "19837"), (stryMutAct_9fa48("19839") ? name !== 'guests' : stryMutAct_9fa48("19838") ? false : (stryCov_9fa48("19838", "19839"), name === (stryMutAct_9fa48("19840") ? "" : (stryCov_9fa48("19840"), 'guests')))) || (stryMutAct_9fa48("19842") ? !Groups.isPrivilegeGroup(name) || name.includes(':') : stryMutAct_9fa48("19841") ? false : (stryCov_9fa48("19841", "19842"), (stryMutAct_9fa48("19843") ? Groups.isPrivilegeGroup(name) : (stryCov_9fa48("19843"), !Groups.isPrivilegeGroup(name))) && name.includes(stryMutAct_9fa48("19844") ? "" : (stryCov_9fa48("19844"), ':')))))) {
          if (stryMutAct_9fa48("19845")) {
            {}
          } else {
            stryCov_9fa48("19845");
            throw new Error(stryMutAct_9fa48("19846") ? "" : (stryCov_9fa48("19846"), '[[error:invalid-group-name]]'));
          }
        }
        if (stryMutAct_9fa48("19849") ? name.includes('/') && !slugify(name) : stryMutAct_9fa48("19848") ? false : stryMutAct_9fa48("19847") ? true : (stryCov_9fa48("19847", "19848", "19849"), name.includes(stryMutAct_9fa48("19850") ? "" : (stryCov_9fa48("19850"), '/')) || (stryMutAct_9fa48("19851") ? slugify(name) : (stryCov_9fa48("19851"), !slugify(name))))) {
          if (stryMutAct_9fa48("19852")) {
            {}
          } else {
            stryCov_9fa48("19852");
            throw new Error(stryMutAct_9fa48("19853") ? "" : (stryCov_9fa48("19853"), '[[error:invalid-group-name]]'));
          }
        }
      }
    };
  }
};