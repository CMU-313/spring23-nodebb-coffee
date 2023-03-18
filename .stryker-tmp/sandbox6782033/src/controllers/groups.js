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
const meta = require('../meta');
const groups = require('../groups');
const user = require('../user');
const helpers = require('./helpers');
const pagination = require('../pagination');
const privileges = require('../privileges');
const groupsController = module.exports;
groupsController.list = async function (req, res) {
  if (stryMutAct_9fa48("9430")) {
    {}
  } else {
    stryCov_9fa48("9430");
    const sort = stryMutAct_9fa48("9433") ? req.query.sort && 'alpha' : stryMutAct_9fa48("9432") ? false : stryMutAct_9fa48("9431") ? true : (stryCov_9fa48("9431", "9432", "9433"), req.query.sort || (stryMutAct_9fa48("9434") ? "" : (stryCov_9fa48("9434"), 'alpha')));
    const [groupData, allowGroupCreation] = await Promise.all(stryMutAct_9fa48("9435") ? [] : (stryCov_9fa48("9435"), [groups.getGroupsBySort(sort, 0, 14), privileges.global.can(stryMutAct_9fa48("9436") ? "" : (stryCov_9fa48("9436"), 'group:create'), req.uid)]));
    res.render(stryMutAct_9fa48("9437") ? "" : (stryCov_9fa48("9437"), 'groups/list'), stryMutAct_9fa48("9438") ? {} : (stryCov_9fa48("9438"), {
      groups: groupData,
      allowGroupCreation: allowGroupCreation,
      nextStart: 15,
      title: stryMutAct_9fa48("9439") ? "" : (stryCov_9fa48("9439"), '[[pages:groups]]'),
      breadcrumbs: helpers.buildBreadcrumbs(stryMutAct_9fa48("9440") ? [] : (stryCov_9fa48("9440"), [stryMutAct_9fa48("9441") ? {} : (stryCov_9fa48("9441"), {
        text: stryMutAct_9fa48("9442") ? "" : (stryCov_9fa48("9442"), '[[pages:groups]]')
      })]))
    }));
  }
};
groupsController.details = async function (req, res, next) {
  if (stryMutAct_9fa48("9443")) {
    {}
  } else {
    stryCov_9fa48("9443");
    const lowercaseSlug = stryMutAct_9fa48("9444") ? req.params.slug.toUpperCase() : (stryCov_9fa48("9444"), req.params.slug.toLowerCase());
    if (stryMutAct_9fa48("9447") ? req.params.slug === lowercaseSlug : stryMutAct_9fa48("9446") ? false : stryMutAct_9fa48("9445") ? true : (stryCov_9fa48("9445", "9446", "9447"), req.params.slug !== lowercaseSlug)) {
      if (stryMutAct_9fa48("9448")) {
        {}
      } else {
        stryCov_9fa48("9448");
        if (stryMutAct_9fa48("9450") ? false : stryMutAct_9fa48("9449") ? true : (stryCov_9fa48("9449", "9450"), res.locals.isAPI)) {
          if (stryMutAct_9fa48("9451")) {
            {}
          } else {
            stryCov_9fa48("9451");
            req.params.slug = lowercaseSlug;
          }
        } else {
          if (stryMutAct_9fa48("9452")) {
            {}
          } else {
            stryCov_9fa48("9452");
            return res.redirect(stryMutAct_9fa48("9453") ? `` : (stryCov_9fa48("9453"), `${nconf.get(stryMutAct_9fa48("9454") ? "" : (stryCov_9fa48("9454"), 'relative_path'))}/groups/${lowercaseSlug}`));
          }
        }
      }
    }
    const groupName = await groups.getGroupNameByGroupSlug(req.params.slug);
    if (stryMutAct_9fa48("9457") ? false : stryMutAct_9fa48("9456") ? true : stryMutAct_9fa48("9455") ? groupName : (stryCov_9fa48("9455", "9456", "9457"), !groupName)) {
      if (stryMutAct_9fa48("9458")) {
        {}
      } else {
        stryCov_9fa48("9458");
        return next();
      }
    }
    const [exists, isHidden, isAdmin, isGlobalMod] = await Promise.all(stryMutAct_9fa48("9459") ? [] : (stryCov_9fa48("9459"), [groups.exists(groupName), groups.isHidden(groupName), user.isAdministrator(req.uid), user.isGlobalModerator(req.uid)]));
    if (stryMutAct_9fa48("9462") ? false : stryMutAct_9fa48("9461") ? true : stryMutAct_9fa48("9460") ? exists : (stryCov_9fa48("9460", "9461", "9462"), !exists)) {
      if (stryMutAct_9fa48("9463")) {
        {}
      } else {
        stryCov_9fa48("9463");
        return next();
      }
    }
    if (stryMutAct_9fa48("9466") ? isHidden && !isAdmin || !isGlobalMod : stryMutAct_9fa48("9465") ? false : stryMutAct_9fa48("9464") ? true : (stryCov_9fa48("9464", "9465", "9466"), (stryMutAct_9fa48("9468") ? isHidden || !isAdmin : stryMutAct_9fa48("9467") ? true : (stryCov_9fa48("9467", "9468"), isHidden && (stryMutAct_9fa48("9469") ? isAdmin : (stryCov_9fa48("9469"), !isAdmin)))) && (stryMutAct_9fa48("9470") ? isGlobalMod : (stryCov_9fa48("9470"), !isGlobalMod)))) {
      if (stryMutAct_9fa48("9471")) {
        {}
      } else {
        stryCov_9fa48("9471");
        const [isMember, isInvited] = await Promise.all(stryMutAct_9fa48("9472") ? [] : (stryCov_9fa48("9472"), [groups.isMember(req.uid, groupName), groups.isInvited(req.uid, groupName)]));
        if (stryMutAct_9fa48("9475") ? !isMember || !isInvited : stryMutAct_9fa48("9474") ? false : stryMutAct_9fa48("9473") ? true : (stryCov_9fa48("9473", "9474", "9475"), (stryMutAct_9fa48("9476") ? isMember : (stryCov_9fa48("9476"), !isMember)) && (stryMutAct_9fa48("9477") ? isInvited : (stryCov_9fa48("9477"), !isInvited)))) {
          if (stryMutAct_9fa48("9478")) {
            {}
          } else {
            stryCov_9fa48("9478");
            return next();
          }
        }
      }
    }
    const [groupData, posts] = await Promise.all(stryMutAct_9fa48("9479") ? [] : (stryCov_9fa48("9479"), [groups.get(groupName, stryMutAct_9fa48("9480") ? {} : (stryCov_9fa48("9480"), {
      uid: req.uid,
      truncateUserList: stryMutAct_9fa48("9481") ? false : (stryCov_9fa48("9481"), true),
      userListCount: 20
    })), groups.getLatestMemberPosts(groupName, 10, req.uid)]));
    if (stryMutAct_9fa48("9484") ? false : stryMutAct_9fa48("9483") ? true : stryMutAct_9fa48("9482") ? groupData : (stryCov_9fa48("9482", "9483", "9484"), !groupData)) {
      if (stryMutAct_9fa48("9485")) {
        {}
      } else {
        stryCov_9fa48("9485");
        return next();
      }
    }
    groupData.isOwner = stryMutAct_9fa48("9488") ? (groupData.isOwner || isAdmin) && isGlobalMod && !groupData.system : stryMutAct_9fa48("9487") ? false : stryMutAct_9fa48("9486") ? true : (stryCov_9fa48("9486", "9487", "9488"), (stryMutAct_9fa48("9490") ? groupData.isOwner && isAdmin : stryMutAct_9fa48("9489") ? false : (stryCov_9fa48("9489", "9490"), groupData.isOwner || isAdmin)) || (stryMutAct_9fa48("9492") ? isGlobalMod || !groupData.system : stryMutAct_9fa48("9491") ? false : (stryCov_9fa48("9491", "9492"), isGlobalMod && (stryMutAct_9fa48("9493") ? groupData.system : (stryCov_9fa48("9493"), !groupData.system)))));
    res.render(stryMutAct_9fa48("9494") ? "" : (stryCov_9fa48("9494"), 'groups/details'), stryMutAct_9fa48("9495") ? {} : (stryCov_9fa48("9495"), {
      title: stryMutAct_9fa48("9496") ? `` : (stryCov_9fa48("9496"), `[[pages:group, ${groupData.displayName}]]`),
      group: groupData,
      posts: posts,
      isAdmin: isAdmin,
      isGlobalMod: isGlobalMod,
      allowPrivateGroups: meta.config.allowPrivateGroups,
      breadcrumbs: helpers.buildBreadcrumbs(stryMutAct_9fa48("9497") ? [] : (stryCov_9fa48("9497"), [stryMutAct_9fa48("9498") ? {} : (stryCov_9fa48("9498"), {
        text: stryMutAct_9fa48("9499") ? "" : (stryCov_9fa48("9499"), '[[pages:groups]]'),
        url: stryMutAct_9fa48("9500") ? "" : (stryCov_9fa48("9500"), '/groups')
      }), stryMutAct_9fa48("9501") ? {} : (stryCov_9fa48("9501"), {
        text: groupData.displayName
      })]))
    }));
  }
};
groupsController.members = async function (req, res, next) {
  if (stryMutAct_9fa48("9502")) {
    {}
  } else {
    stryCov_9fa48("9502");
    const page = stryMutAct_9fa48("9505") ? parseInt(req.query.page, 10) && 1 : stryMutAct_9fa48("9504") ? false : stryMutAct_9fa48("9503") ? true : (stryCov_9fa48("9503", "9504", "9505"), parseInt(req.query.page, 10) || 1);
    const usersPerPage = 50;
    const start = Math.max(0, stryMutAct_9fa48("9506") ? (page - 1) / usersPerPage : (stryCov_9fa48("9506"), (stryMutAct_9fa48("9507") ? page + 1 : (stryCov_9fa48("9507"), page - 1)) * usersPerPage));
    const stop = stryMutAct_9fa48("9508") ? start + usersPerPage + 1 : (stryCov_9fa48("9508"), (stryMutAct_9fa48("9509") ? start - usersPerPage : (stryCov_9fa48("9509"), start + usersPerPage)) - 1);
    const groupName = await groups.getGroupNameByGroupSlug(req.params.slug);
    if (stryMutAct_9fa48("9512") ? false : stryMutAct_9fa48("9511") ? true : stryMutAct_9fa48("9510") ? groupName : (stryCov_9fa48("9510", "9511", "9512"), !groupName)) {
      if (stryMutAct_9fa48("9513")) {
        {}
      } else {
        stryCov_9fa48("9513");
        return next();
      }
    }
    const [groupData, isAdminOrGlobalMod, isMember, isHidden] = await Promise.all(stryMutAct_9fa48("9514") ? [] : (stryCov_9fa48("9514"), [groups.getGroupData(groupName), user.isAdminOrGlobalMod(req.uid), groups.isMember(req.uid, groupName), groups.isHidden(groupName)]));
    if (stryMutAct_9fa48("9517") ? isHidden && !isMember || !isAdminOrGlobalMod : stryMutAct_9fa48("9516") ? false : stryMutAct_9fa48("9515") ? true : (stryCov_9fa48("9515", "9516", "9517"), (stryMutAct_9fa48("9519") ? isHidden || !isMember : stryMutAct_9fa48("9518") ? true : (stryCov_9fa48("9518", "9519"), isHidden && (stryMutAct_9fa48("9520") ? isMember : (stryCov_9fa48("9520"), !isMember)))) && (stryMutAct_9fa48("9521") ? isAdminOrGlobalMod : (stryCov_9fa48("9521"), !isAdminOrGlobalMod)))) {
      if (stryMutAct_9fa48("9522")) {
        {}
      } else {
        stryCov_9fa48("9522");
        return next();
      }
    }
    const users = await user.getUsersFromSet(stryMutAct_9fa48("9523") ? `` : (stryCov_9fa48("9523"), `group:${groupName}:members`), req.uid, start, stop);
    const breadcrumbs = helpers.buildBreadcrumbs(stryMutAct_9fa48("9524") ? [] : (stryCov_9fa48("9524"), [stryMutAct_9fa48("9525") ? {} : (stryCov_9fa48("9525"), {
      text: stryMutAct_9fa48("9526") ? "" : (stryCov_9fa48("9526"), '[[pages:groups]]'),
      url: stryMutAct_9fa48("9527") ? "" : (stryCov_9fa48("9527"), '/groups')
    }), stryMutAct_9fa48("9528") ? {} : (stryCov_9fa48("9528"), {
      text: validator.escape(String(groupName)),
      url: stryMutAct_9fa48("9529") ? `` : (stryCov_9fa48("9529"), `/groups/${req.params.slug}`)
    }), stryMutAct_9fa48("9530") ? {} : (stryCov_9fa48("9530"), {
      text: stryMutAct_9fa48("9531") ? "" : (stryCov_9fa48("9531"), '[[groups:details.members]]')
    })]));
    const pageCount = Math.max(1, Math.ceil(stryMutAct_9fa48("9532") ? groupData.memberCount * usersPerPage : (stryCov_9fa48("9532"), groupData.memberCount / usersPerPage)));
    res.render(stryMutAct_9fa48("9533") ? "" : (stryCov_9fa48("9533"), 'groups/members'), stryMutAct_9fa48("9534") ? {} : (stryCov_9fa48("9534"), {
      users: users,
      pagination: pagination.create(page, pageCount, req.query),
      breadcrumbs: breadcrumbs
    }));
  }
};