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
const validator = require('validator');
const nconf = require('nconf');
const db = require('../database');
const plugins = require('../plugins');
const utils = require('../utils');
const translator = require('../translator');
const intFields = stryMutAct_9fa48("19854") ? [] : (stryCov_9fa48("19854"), [stryMutAct_9fa48("19855") ? "" : (stryCov_9fa48("19855"), 'createtime'), stryMutAct_9fa48("19856") ? "" : (stryCov_9fa48("19856"), 'memberCount'), stryMutAct_9fa48("19857") ? "" : (stryCov_9fa48("19857"), 'hidden'), stryMutAct_9fa48("19858") ? "" : (stryCov_9fa48("19858"), 'system'), stryMutAct_9fa48("19859") ? "" : (stryCov_9fa48("19859"), 'private'), stryMutAct_9fa48("19860") ? "" : (stryCov_9fa48("19860"), 'userTitleEnabled'), stryMutAct_9fa48("19861") ? "" : (stryCov_9fa48("19861"), 'disableJoinRequests'), stryMutAct_9fa48("19862") ? "" : (stryCov_9fa48("19862"), 'disableLeave')]);
module.exports = function (Groups) {
  if (stryMutAct_9fa48("19863")) {
    {}
  } else {
    stryCov_9fa48("19863");
    Groups.getGroupsFields = async function (groupNames, fields) {
      if (stryMutAct_9fa48("19864")) {
        {}
      } else {
        stryCov_9fa48("19864");
        if (stryMutAct_9fa48("19867") ? !Array.isArray(groupNames) && !groupNames.length : stryMutAct_9fa48("19866") ? false : stryMutAct_9fa48("19865") ? true : (stryCov_9fa48("19865", "19866", "19867"), (stryMutAct_9fa48("19868") ? Array.isArray(groupNames) : (stryCov_9fa48("19868"), !Array.isArray(groupNames))) || (stryMutAct_9fa48("19869") ? groupNames.length : (stryCov_9fa48("19869"), !groupNames.length)))) {
          if (stryMutAct_9fa48("19870")) {
            {}
          } else {
            stryCov_9fa48("19870");
            return stryMutAct_9fa48("19871") ? ["Stryker was here"] : (stryCov_9fa48("19871"), []);
          }
        }
        const ephemeralIdx = groupNames.reduce((memo, cur, idx) => {
          if (stryMutAct_9fa48("19872")) {
            {}
          } else {
            stryCov_9fa48("19872");
            if (stryMutAct_9fa48("19874") ? false : stryMutAct_9fa48("19873") ? true : (stryCov_9fa48("19873", "19874"), Groups.ephemeralGroups.includes(cur))) {
              if (stryMutAct_9fa48("19875")) {
                {}
              } else {
                stryCov_9fa48("19875");
                memo.push(idx);
              }
            }
            return memo;
          }
        }, stryMutAct_9fa48("19876") ? ["Stryker was here"] : (stryCov_9fa48("19876"), []));
        const keys = groupNames.map(stryMutAct_9fa48("19877") ? () => undefined : (stryCov_9fa48("19877"), groupName => stryMutAct_9fa48("19878") ? `` : (stryCov_9fa48("19878"), `group:${groupName}`)));
        const groupData = await db.getObjects(keys, fields);
        if (stryMutAct_9fa48("19880") ? false : stryMutAct_9fa48("19879") ? true : (stryCov_9fa48("19879", "19880"), ephemeralIdx.length)) {
          if (stryMutAct_9fa48("19881")) {
            {}
          } else {
            stryCov_9fa48("19881");
            ephemeralIdx.forEach(idx => {
              if (stryMutAct_9fa48("19882")) {
                {}
              } else {
                stryCov_9fa48("19882");
                groupData[idx] = Groups.getEphemeralGroup(groupNames[idx]);
              }
            });
          }
        }
        groupData.forEach(stryMutAct_9fa48("19883") ? () => undefined : (stryCov_9fa48("19883"), group => modifyGroup(group, fields)));
        const results = await plugins.hooks.fire(stryMutAct_9fa48("19884") ? "" : (stryCov_9fa48("19884"), 'filter:groups.get'), stryMutAct_9fa48("19885") ? {} : (stryCov_9fa48("19885"), {
          groups: groupData
        }));
        return results.groups;
      }
    };
    Groups.getGroupsData = async function (groupNames) {
      if (stryMutAct_9fa48("19886")) {
        {}
      } else {
        stryCov_9fa48("19886");
        return await Groups.getGroupsFields(groupNames, stryMutAct_9fa48("19887") ? ["Stryker was here"] : (stryCov_9fa48("19887"), []));
      }
    };
    Groups.getGroupData = async function (groupName) {
      if (stryMutAct_9fa48("19888")) {
        {}
      } else {
        stryCov_9fa48("19888");
        const groupsData = await Groups.getGroupsData(stryMutAct_9fa48("19889") ? [] : (stryCov_9fa48("19889"), [groupName]));
        return (stryMutAct_9fa48("19892") ? Array.isArray(groupsData) || groupsData[0] : stryMutAct_9fa48("19891") ? false : stryMutAct_9fa48("19890") ? true : (stryCov_9fa48("19890", "19891", "19892"), Array.isArray(groupsData) && groupsData[0])) ? groupsData[0] : null;
      }
    };
    Groups.getGroupField = async function (groupName, field) {
      if (stryMutAct_9fa48("19893")) {
        {}
      } else {
        stryCov_9fa48("19893");
        const groupData = await Groups.getGroupFields(groupName, stryMutAct_9fa48("19894") ? [] : (stryCov_9fa48("19894"), [field]));
        return groupData ? groupData[field] : null;
      }
    };
    Groups.getGroupFields = async function (groupName, fields) {
      if (stryMutAct_9fa48("19895")) {
        {}
      } else {
        stryCov_9fa48("19895");
        const groups = await Groups.getGroupsFields(stryMutAct_9fa48("19896") ? [] : (stryCov_9fa48("19896"), [groupName]), fields);
        return groups ? groups[0] : null;
      }
    };
    Groups.setGroupField = async function (groupName, field, value) {
      if (stryMutAct_9fa48("19897")) {
        {}
      } else {
        stryCov_9fa48("19897");
        await db.setObjectField(stryMutAct_9fa48("19898") ? `` : (stryCov_9fa48("19898"), `group:${groupName}`), field, value);
        plugins.hooks.fire(stryMutAct_9fa48("19899") ? "" : (stryCov_9fa48("19899"), 'action:group.set'), stryMutAct_9fa48("19900") ? {} : (stryCov_9fa48("19900"), {
          field: field,
          value: value,
          type: stryMutAct_9fa48("19901") ? "" : (stryCov_9fa48("19901"), 'set')
        }));
      }
    };
  }
};
function modifyGroup(group, fields) {
  if (stryMutAct_9fa48("19902")) {
    {}
  } else {
    stryCov_9fa48("19902");
    if (stryMutAct_9fa48("19904") ? false : stryMutAct_9fa48("19903") ? true : (stryCov_9fa48("19903", "19904"), group)) {
      if (stryMutAct_9fa48("19905")) {
        {}
      } else {
        stryCov_9fa48("19905");
        db.parseIntFields(group, intFields, fields);
        escapeGroupData(group);
        group.userTitleEnabled = (stryMutAct_9fa48("19906") ? [] : (stryCov_9fa48("19906"), [null, undefined])).includes(group.userTitleEnabled) ? 1 : group.userTitleEnabled;
        group.labelColor = validator.escape(String(stryMutAct_9fa48("19909") ? group.labelColor && '#000000' : stryMutAct_9fa48("19908") ? false : stryMutAct_9fa48("19907") ? true : (stryCov_9fa48("19907", "19908", "19909"), group.labelColor || (stryMutAct_9fa48("19910") ? "" : (stryCov_9fa48("19910"), '#000000')))));
        group.textColor = validator.escape(String(stryMutAct_9fa48("19913") ? group.textColor && '#ffffff' : stryMutAct_9fa48("19912") ? false : stryMutAct_9fa48("19911") ? true : (stryCov_9fa48("19911", "19912", "19913"), group.textColor || (stryMutAct_9fa48("19914") ? "" : (stryCov_9fa48("19914"), '#ffffff')))));
        group.icon = validator.escape(String(stryMutAct_9fa48("19917") ? group.icon && '' : stryMutAct_9fa48("19916") ? false : stryMutAct_9fa48("19915") ? true : (stryCov_9fa48("19915", "19916", "19917"), group.icon || (stryMutAct_9fa48("19918") ? "Stryker was here!" : (stryCov_9fa48("19918"), '')))));
        group.createtimeISO = utils.toISOString(group.createtime);
        group.private = (stryMutAct_9fa48("19919") ? [] : (stryCov_9fa48("19919"), [null, undefined])).includes(group.private) ? 1 : group.private;
        group.memberPostCids = stryMutAct_9fa48("19922") ? group.memberPostCids && '' : stryMutAct_9fa48("19921") ? false : stryMutAct_9fa48("19920") ? true : (stryCov_9fa48("19920", "19921", "19922"), group.memberPostCids || (stryMutAct_9fa48("19923") ? "Stryker was here!" : (stryCov_9fa48("19923"), '')));
        group.memberPostCidsArray = stryMutAct_9fa48("19924") ? group.memberPostCids.split(',').map(cid => parseInt(cid, 10)) : (stryCov_9fa48("19924"), group.memberPostCids.split(stryMutAct_9fa48("19925") ? "" : (stryCov_9fa48("19925"), ',')).map(stryMutAct_9fa48("19926") ? () => undefined : (stryCov_9fa48("19926"), cid => parseInt(cid, 10))).filter(Boolean));
        group[stryMutAct_9fa48("19927") ? "" : (stryCov_9fa48("19927"), 'cover:thumb:url')] = stryMutAct_9fa48("19930") ? group['cover:thumb:url'] && group['cover:url'] : stryMutAct_9fa48("19929") ? false : stryMutAct_9fa48("19928") ? true : (stryCov_9fa48("19928", "19929", "19930"), group[stryMutAct_9fa48("19931") ? "" : (stryCov_9fa48("19931"), 'cover:thumb:url')] || group[stryMutAct_9fa48("19932") ? "" : (stryCov_9fa48("19932"), 'cover:url')]);
        if (stryMutAct_9fa48("19934") ? false : stryMutAct_9fa48("19933") ? true : (stryCov_9fa48("19933", "19934"), group[stryMutAct_9fa48("19935") ? "" : (stryCov_9fa48("19935"), 'cover:url')])) {
          if (stryMutAct_9fa48("19936")) {
            {}
          } else {
            stryCov_9fa48("19936");
            group[stryMutAct_9fa48("19937") ? "" : (stryCov_9fa48("19937"), 'cover:url')] = (stryMutAct_9fa48("19938") ? group['cover:url'].endsWith('http') : (stryCov_9fa48("19938"), group[stryMutAct_9fa48("19939") ? "" : (stryCov_9fa48("19939"), 'cover:url')].startsWith(stryMutAct_9fa48("19940") ? "" : (stryCov_9fa48("19940"), 'http')))) ? group[stryMutAct_9fa48("19941") ? "" : (stryCov_9fa48("19941"), 'cover:url')] : stryMutAct_9fa48("19942") ? nconf.get('relative_path') - group['cover:url'] : (stryCov_9fa48("19942"), nconf.get(stryMutAct_9fa48("19943") ? "" : (stryCov_9fa48("19943"), 'relative_path')) + group[stryMutAct_9fa48("19944") ? "" : (stryCov_9fa48("19944"), 'cover:url')]);
          }
        } else {
          if (stryMutAct_9fa48("19945")) {
            {}
          } else {
            stryCov_9fa48("19945");
            group[stryMutAct_9fa48("19946") ? "" : (stryCov_9fa48("19946"), 'cover:url')] = require('../coverPhoto').getDefaultGroupCover(group.name);
          }
        }
        if (stryMutAct_9fa48("19948") ? false : stryMutAct_9fa48("19947") ? true : (stryCov_9fa48("19947", "19948"), group[stryMutAct_9fa48("19949") ? "" : (stryCov_9fa48("19949"), 'cover:thumb:url')])) {
          if (stryMutAct_9fa48("19950")) {
            {}
          } else {
            stryCov_9fa48("19950");
            group[stryMutAct_9fa48("19951") ? "" : (stryCov_9fa48("19951"), 'cover:thumb:url')] = (stryMutAct_9fa48("19952") ? group['cover:thumb:url'].endsWith('http') : (stryCov_9fa48("19952"), group[stryMutAct_9fa48("19953") ? "" : (stryCov_9fa48("19953"), 'cover:thumb:url')].startsWith(stryMutAct_9fa48("19954") ? "" : (stryCov_9fa48("19954"), 'http')))) ? group[stryMutAct_9fa48("19955") ? "" : (stryCov_9fa48("19955"), 'cover:thumb:url')] : stryMutAct_9fa48("19956") ? nconf.get('relative_path') - group['cover:thumb:url'] : (stryCov_9fa48("19956"), nconf.get(stryMutAct_9fa48("19957") ? "" : (stryCov_9fa48("19957"), 'relative_path')) + group[stryMutAct_9fa48("19958") ? "" : (stryCov_9fa48("19958"), 'cover:thumb:url')]);
          }
        } else {
          if (stryMutAct_9fa48("19959")) {
            {}
          } else {
            stryCov_9fa48("19959");
            group[stryMutAct_9fa48("19960") ? "" : (stryCov_9fa48("19960"), 'cover:thumb:url')] = require('../coverPhoto').getDefaultGroupCover(group.name);
          }
        }
        group[stryMutAct_9fa48("19961") ? "" : (stryCov_9fa48("19961"), 'cover:position')] = validator.escape(String(stryMutAct_9fa48("19964") ? group['cover:position'] && '50% 50%' : stryMutAct_9fa48("19963") ? false : stryMutAct_9fa48("19962") ? true : (stryCov_9fa48("19962", "19963", "19964"), group[stryMutAct_9fa48("19965") ? "" : (stryCov_9fa48("19965"), 'cover:position')] || (stryMutAct_9fa48("19966") ? "" : (stryCov_9fa48("19966"), '50% 50%')))));
      }
    }
  }
}
function escapeGroupData(group) {
  if (stryMutAct_9fa48("19967")) {
    {}
  } else {
    stryCov_9fa48("19967");
    if (stryMutAct_9fa48("19969") ? false : stryMutAct_9fa48("19968") ? true : (stryCov_9fa48("19968", "19969"), group)) {
      if (stryMutAct_9fa48("19970")) {
        {}
      } else {
        stryCov_9fa48("19970");
        group.nameEncoded = encodeURIComponent(group.name);
        group.displayName = validator.escape(String(group.name));
        group.description = validator.escape(String(stryMutAct_9fa48("19973") ? group.description && '' : stryMutAct_9fa48("19972") ? false : stryMutAct_9fa48("19971") ? true : (stryCov_9fa48("19971", "19972", "19973"), group.description || (stryMutAct_9fa48("19974") ? "Stryker was here!" : (stryCov_9fa48("19974"), '')))));
        group.userTitle = validator.escape(String(stryMutAct_9fa48("19977") ? group.userTitle && '' : stryMutAct_9fa48("19976") ? false : stryMutAct_9fa48("19975") ? true : (stryCov_9fa48("19975", "19976", "19977"), group.userTitle || (stryMutAct_9fa48("19978") ? "Stryker was here!" : (stryCov_9fa48("19978"), '')))));
        group.userTitleEscaped = translator.escape(group.userTitle);
      }
    }
  }
}