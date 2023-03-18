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
const validator = require('validator');
const db = require('../../database');
const user = require('../../user');
const groups = require('../../groups');
const meta = require('../../meta');
const pagination = require('../../pagination');
const events = require('../../events');
const slugify = require('../../slugify');
const groupsController = module.exports;
groupsController.list = async function (req, res) {
  if (stryMutAct_9fa48("7131")) {
    {}
  } else {
    stryCov_9fa48("7131");
    const page = stryMutAct_9fa48("7134") ? parseInt(req.query.page, 10) && 1 : stryMutAct_9fa48("7133") ? false : stryMutAct_9fa48("7132") ? true : (stryCov_9fa48("7132", "7133", "7134"), parseInt(req.query.page, 10) || 1);
    const groupsPerPage = 20;
    let groupNames = await getGroupNames();
    const pageCount = Math.ceil(stryMutAct_9fa48("7135") ? groupNames.length * groupsPerPage : (stryCov_9fa48("7135"), groupNames.length / groupsPerPage));
    const start = stryMutAct_9fa48("7136") ? (page - 1) / groupsPerPage : (stryCov_9fa48("7136"), (stryMutAct_9fa48("7137") ? page + 1 : (stryCov_9fa48("7137"), page - 1)) * groupsPerPage);
    const stop = stryMutAct_9fa48("7138") ? start + groupsPerPage + 1 : (stryCov_9fa48("7138"), (stryMutAct_9fa48("7139") ? start - groupsPerPage : (stryCov_9fa48("7139"), start + groupsPerPage)) - 1);
    groupNames = stryMutAct_9fa48("7140") ? groupNames : (stryCov_9fa48("7140"), groupNames.slice(start, stryMutAct_9fa48("7141") ? stop - 1 : (stryCov_9fa48("7141"), stop + 1)));
    const groupData = await groups.getGroupsData(groupNames);
    res.render(stryMutAct_9fa48("7142") ? "" : (stryCov_9fa48("7142"), 'admin/manage/groups'), stryMutAct_9fa48("7143") ? {} : (stryCov_9fa48("7143"), {
      groups: groupData,
      pagination: pagination.create(page, pageCount),
      yourid: req.uid
    }));
  }
};
groupsController.get = async function (req, res, next) {
  if (stryMutAct_9fa48("7144")) {
    {}
  } else {
    stryCov_9fa48("7144");
    const slug = slugify(req.params.name);
    const groupName = await groups.getGroupNameByGroupSlug(slug);
    const [groupNames, group] = await Promise.all(stryMutAct_9fa48("7145") ? [] : (stryCov_9fa48("7145"), [getGroupNames(), groups.get(groupName, stryMutAct_9fa48("7146") ? {} : (stryCov_9fa48("7146"), {
      uid: req.uid,
      truncateUserList: stryMutAct_9fa48("7147") ? false : (stryCov_9fa48("7147"), true),
      userListCount: 20
    }))]));
    if (stryMutAct_9fa48("7150") ? !group && groupName === groups.BANNED_USERS : stryMutAct_9fa48("7149") ? false : stryMutAct_9fa48("7148") ? true : (stryCov_9fa48("7148", "7149", "7150"), (stryMutAct_9fa48("7151") ? group : (stryCov_9fa48("7151"), !group)) || (stryMutAct_9fa48("7153") ? groupName !== groups.BANNED_USERS : stryMutAct_9fa48("7152") ? false : (stryCov_9fa48("7152", "7153"), groupName === groups.BANNED_USERS)))) {
      if (stryMutAct_9fa48("7154")) {
        {}
      } else {
        stryCov_9fa48("7154");
        return next();
      }
    }
    group.isOwner = stryMutAct_9fa48("7155") ? false : (stryCov_9fa48("7155"), true);
    const groupNameData = groupNames.map(stryMutAct_9fa48("7156") ? () => undefined : (stryCov_9fa48("7156"), name => stryMutAct_9fa48("7157") ? {} : (stryCov_9fa48("7157"), {
      encodedName: encodeURIComponent(name),
      displayName: validator.escape(String(name)),
      selected: stryMutAct_9fa48("7160") ? name !== groupName : stryMutAct_9fa48("7159") ? false : stryMutAct_9fa48("7158") ? true : (stryCov_9fa48("7158", "7159", "7160"), name === groupName)
    })));
    res.render(stryMutAct_9fa48("7161") ? "" : (stryCov_9fa48("7161"), 'admin/manage/group'), stryMutAct_9fa48("7162") ? {} : (stryCov_9fa48("7162"), {
      group: group,
      groupNames: groupNameData,
      allowPrivateGroups: meta.config.allowPrivateGroups,
      maximumGroupNameLength: meta.config.maximumGroupNameLength,
      maximumGroupTitleLength: meta.config.maximumGroupTitleLength
    }));
  }
};
async function getGroupNames() {
  if (stryMutAct_9fa48("7163")) {
    {}
  } else {
    stryCov_9fa48("7163");
    const groupNames = await db.getSortedSetRange(stryMutAct_9fa48("7164") ? "" : (stryCov_9fa48("7164"), 'groups:createtime'), 0, stryMutAct_9fa48("7165") ? +1 : (stryCov_9fa48("7165"), -1));
    return stryMutAct_9fa48("7166") ? groupNames : (stryCov_9fa48("7166"), groupNames.filter(stryMutAct_9fa48("7167") ? () => undefined : (stryCov_9fa48("7167"), name => stryMutAct_9fa48("7170") ? name !== 'registered-users' && name !== 'verified-users' && name !== 'unverified-users' && name !== groups.BANNED_USERS || !groups.isPrivilegeGroup(name) : stryMutAct_9fa48("7169") ? false : stryMutAct_9fa48("7168") ? true : (stryCov_9fa48("7168", "7169", "7170"), (stryMutAct_9fa48("7172") ? name !== 'registered-users' && name !== 'verified-users' && name !== 'unverified-users' || name !== groups.BANNED_USERS : stryMutAct_9fa48("7171") ? true : (stryCov_9fa48("7171", "7172"), (stryMutAct_9fa48("7174") ? name !== 'registered-users' && name !== 'verified-users' || name !== 'unverified-users' : stryMutAct_9fa48("7173") ? true : (stryCov_9fa48("7173", "7174"), (stryMutAct_9fa48("7176") ? name !== 'registered-users' || name !== 'verified-users' : stryMutAct_9fa48("7175") ? true : (stryCov_9fa48("7175", "7176"), (stryMutAct_9fa48("7178") ? name === 'registered-users' : stryMutAct_9fa48("7177") ? true : (stryCov_9fa48("7177", "7178"), name !== (stryMutAct_9fa48("7179") ? "" : (stryCov_9fa48("7179"), 'registered-users')))) && (stryMutAct_9fa48("7181") ? name === 'verified-users' : stryMutAct_9fa48("7180") ? true : (stryCov_9fa48("7180", "7181"), name !== (stryMutAct_9fa48("7182") ? "" : (stryCov_9fa48("7182"), 'verified-users')))))) && (stryMutAct_9fa48("7184") ? name === 'unverified-users' : stryMutAct_9fa48("7183") ? true : (stryCov_9fa48("7183", "7184"), name !== (stryMutAct_9fa48("7185") ? "" : (stryCov_9fa48("7185"), 'unverified-users')))))) && (stryMutAct_9fa48("7187") ? name === groups.BANNED_USERS : stryMutAct_9fa48("7186") ? true : (stryCov_9fa48("7186", "7187"), name !== groups.BANNED_USERS)))) && (stryMutAct_9fa48("7188") ? groups.isPrivilegeGroup(name) : (stryCov_9fa48("7188"), !groups.isPrivilegeGroup(name)))))));
  }
}
groupsController.getCSV = async function (req, res) {
  if (stryMutAct_9fa48("7189")) {
    {}
  } else {
    stryCov_9fa48("7189");
    const {
      referer
    } = req.headers;
    if (stryMutAct_9fa48("7192") ? !referer && !referer.replace(nconf.get('url'), '').startsWith('/admin/manage/groups') : stryMutAct_9fa48("7191") ? false : stryMutAct_9fa48("7190") ? true : (stryCov_9fa48("7190", "7191", "7192"), (stryMutAct_9fa48("7193") ? referer : (stryCov_9fa48("7193"), !referer)) || (stryMutAct_9fa48("7194") ? referer.replace(nconf.get('url'), '').startsWith('/admin/manage/groups') : (stryCov_9fa48("7194"), !(stryMutAct_9fa48("7195") ? referer.replace(nconf.get('url'), '').endsWith('/admin/manage/groups') : (stryCov_9fa48("7195"), referer.replace(nconf.get(stryMutAct_9fa48("7196") ? "" : (stryCov_9fa48("7196"), 'url')), stryMutAct_9fa48("7197") ? "Stryker was here!" : (stryCov_9fa48("7197"), '')).startsWith(stryMutAct_9fa48("7198") ? "" : (stryCov_9fa48("7198"), '/admin/manage/groups')))))))) {
      if (stryMutAct_9fa48("7199")) {
        {}
      } else {
        stryCov_9fa48("7199");
        return res.status(403).send(stryMutAct_9fa48("7200") ? "" : (stryCov_9fa48("7200"), '[[error:invalid-origin]]'));
      }
    }
    await events.log(stryMutAct_9fa48("7201") ? {} : (stryCov_9fa48("7201"), {
      type: stryMutAct_9fa48("7202") ? "" : (stryCov_9fa48("7202"), 'getGroupCSV'),
      uid: req.uid,
      ip: req.ip,
      group: req.params.groupname
    }));
    const groupName = req.params.groupname;
    const members = (await groups.getMembersOfGroups(stryMutAct_9fa48("7203") ? [] : (stryCov_9fa48("7203"), [groupName])))[0];
    const fields = stryMutAct_9fa48("7204") ? [] : (stryCov_9fa48("7204"), [stryMutAct_9fa48("7205") ? "" : (stryCov_9fa48("7205"), 'email'), stryMutAct_9fa48("7206") ? "" : (stryCov_9fa48("7206"), 'username'), stryMutAct_9fa48("7207") ? "" : (stryCov_9fa48("7207"), 'uid')]);
    const userData = await user.getUsersFields(members, fields);
    let csvContent = stryMutAct_9fa48("7208") ? `` : (stryCov_9fa48("7208"), `${fields.join(stryMutAct_9fa48("7209") ? "" : (stryCov_9fa48("7209"), ','))}\n`);
    stryMutAct_9fa48("7210") ? csvContent -= userData.reduce((memo, user) => {
      memo += `${user.email},${user.username},${user.uid}\n`;
      return memo;
    }, '') : (stryCov_9fa48("7210"), csvContent += userData.reduce((memo, user) => {
      if (stryMutAct_9fa48("7211")) {
        {}
      } else {
        stryCov_9fa48("7211");
        memo += stryMutAct_9fa48("7212") ? `` : (stryCov_9fa48("7212"), `${user.email},${user.username},${user.uid}\n`);
        return memo;
      }
    }, stryMutAct_9fa48("7213") ? "Stryker was here!" : (stryCov_9fa48("7213"), '')));
    res.attachment(stryMutAct_9fa48("7214") ? `` : (stryCov_9fa48("7214"), `${validator.escape(groupName)}_members.csv`));
    res.setHeader(stryMutAct_9fa48("7215") ? "" : (stryCov_9fa48("7215"), 'Content-Type'), stryMutAct_9fa48("7216") ? "" : (stryCov_9fa48("7216"), 'text/csv'));
    res.end(csvContent);
  }
};