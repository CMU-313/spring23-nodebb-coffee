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
const user = require('../../user');
const helpers = require('../helpers');
const plugins = require('../../plugins');
const pagination = require('../../pagination');
const notificationsController = module.exports;
notificationsController.get = async function (req, res, next) {
  if (stryMutAct_9fa48("5807")) {
    {}
  } else {
    stryCov_9fa48("5807");
    const regularFilters = stryMutAct_9fa48("5808") ? [] : (stryCov_9fa48("5808"), [stryMutAct_9fa48("5809") ? {} : (stryCov_9fa48("5809"), {
      name: stryMutAct_9fa48("5810") ? "" : (stryCov_9fa48("5810"), '[[notifications:all]]'),
      filter: stryMutAct_9fa48("5811") ? "Stryker was here!" : (stryCov_9fa48("5811"), '')
    }), stryMutAct_9fa48("5812") ? {} : (stryCov_9fa48("5812"), {
      name: stryMutAct_9fa48("5813") ? "" : (stryCov_9fa48("5813"), '[[global:topics]]'),
      filter: stryMutAct_9fa48("5814") ? "" : (stryCov_9fa48("5814"), 'new-topic')
    }), stryMutAct_9fa48("5815") ? {} : (stryCov_9fa48("5815"), {
      name: stryMutAct_9fa48("5816") ? "" : (stryCov_9fa48("5816"), '[[notifications:replies]]'),
      filter: stryMutAct_9fa48("5817") ? "" : (stryCov_9fa48("5817"), 'new-reply')
    }), stryMutAct_9fa48("5818") ? {} : (stryCov_9fa48("5818"), {
      name: stryMutAct_9fa48("5819") ? "" : (stryCov_9fa48("5819"), '[[notifications:chat]]'),
      filter: stryMutAct_9fa48("5820") ? "" : (stryCov_9fa48("5820"), 'new-chat')
    }), stryMutAct_9fa48("5821") ? {} : (stryCov_9fa48("5821"), {
      name: stryMutAct_9fa48("5822") ? "" : (stryCov_9fa48("5822"), '[[notifications:group-chat]]'),
      filter: stryMutAct_9fa48("5823") ? "" : (stryCov_9fa48("5823"), 'new-group-chat')
    }), stryMutAct_9fa48("5824") ? {} : (stryCov_9fa48("5824"), {
      name: stryMutAct_9fa48("5825") ? "" : (stryCov_9fa48("5825"), '[[notifications:follows]]'),
      filter: stryMutAct_9fa48("5826") ? "" : (stryCov_9fa48("5826"), 'follow')
    }), stryMutAct_9fa48("5827") ? {} : (stryCov_9fa48("5827"), {
      name: stryMutAct_9fa48("5828") ? "" : (stryCov_9fa48("5828"), '[[notifications:upvote]]'),
      filter: stryMutAct_9fa48("5829") ? "" : (stryCov_9fa48("5829"), 'upvote')
    })]);
    const moderatorFilters = stryMutAct_9fa48("5830") ? [] : (stryCov_9fa48("5830"), [stryMutAct_9fa48("5831") ? {} : (stryCov_9fa48("5831"), {
      name: stryMutAct_9fa48("5832") ? "" : (stryCov_9fa48("5832"), '[[notifications:new-flags]]'),
      filter: stryMutAct_9fa48("5833") ? "" : (stryCov_9fa48("5833"), 'new-post-flag')
    }), stryMutAct_9fa48("5834") ? {} : (stryCov_9fa48("5834"), {
      name: stryMutAct_9fa48("5835") ? "" : (stryCov_9fa48("5835"), '[[notifications:my-flags]]'),
      filter: stryMutAct_9fa48("5836") ? "" : (stryCov_9fa48("5836"), 'my-flags')
    }), stryMutAct_9fa48("5837") ? {} : (stryCov_9fa48("5837"), {
      name: stryMutAct_9fa48("5838") ? "" : (stryCov_9fa48("5838"), '[[notifications:bans]]'),
      filter: stryMutAct_9fa48("5839") ? "" : (stryCov_9fa48("5839"), 'ban')
    })]);
    const filter = stryMutAct_9fa48("5842") ? req.query.filter && '' : stryMutAct_9fa48("5841") ? false : stryMutAct_9fa48("5840") ? true : (stryCov_9fa48("5840", "5841", "5842"), req.query.filter || (stryMutAct_9fa48("5843") ? "Stryker was here!" : (stryCov_9fa48("5843"), '')));
    const page = Math.max(1, stryMutAct_9fa48("5846") ? req.query.page && 1 : stryMutAct_9fa48("5845") ? false : stryMutAct_9fa48("5844") ? true : (stryCov_9fa48("5844", "5845", "5846"), req.query.page || 1));
    const itemsPerPage = 20;
    const start = stryMutAct_9fa48("5847") ? (page - 1) / itemsPerPage : (stryCov_9fa48("5847"), (stryMutAct_9fa48("5848") ? page + 1 : (stryCov_9fa48("5848"), page - 1)) * itemsPerPage);
    const stop = stryMutAct_9fa48("5849") ? start + itemsPerPage + 1 : (stryCov_9fa48("5849"), (stryMutAct_9fa48("5850") ? start - itemsPerPage : (stryCov_9fa48("5850"), start + itemsPerPage)) - 1);
    const [filters, isPrivileged] = await Promise.all(stryMutAct_9fa48("5851") ? [] : (stryCov_9fa48("5851"), [plugins.hooks.fire(stryMutAct_9fa48("5852") ? "" : (stryCov_9fa48("5852"), 'filter:notifications.addFilters'), stryMutAct_9fa48("5853") ? {} : (stryCov_9fa48("5853"), {
      regularFilters: regularFilters,
      moderatorFilters: moderatorFilters,
      uid: req.uid
    })), user.isPrivileged(req.uid)]));
    let allFilters = filters.regularFilters;
    if (stryMutAct_9fa48("5855") ? false : stryMutAct_9fa48("5854") ? true : (stryCov_9fa48("5854", "5855"), isPrivileged)) {
      if (stryMutAct_9fa48("5856")) {
        {}
      } else {
        stryCov_9fa48("5856");
        allFilters = allFilters.concat(stryMutAct_9fa48("5857") ? [] : (stryCov_9fa48("5857"), [stryMutAct_9fa48("5858") ? {} : (stryCov_9fa48("5858"), {
          separator: stryMutAct_9fa48("5859") ? false : (stryCov_9fa48("5859"), true)
        })])).concat(filters.moderatorFilters);
      }
    }
    const selectedFilter = allFilters.find(filterData => {
      if (stryMutAct_9fa48("5860")) {
        {}
      } else {
        stryCov_9fa48("5860");
        filterData.selected = stryMutAct_9fa48("5863") ? filterData.filter !== filter : stryMutAct_9fa48("5862") ? false : stryMutAct_9fa48("5861") ? true : (stryCov_9fa48("5861", "5862", "5863"), filterData.filter === filter);
        return filterData.selected;
      }
    });
    if (stryMutAct_9fa48("5866") ? false : stryMutAct_9fa48("5865") ? true : stryMutAct_9fa48("5864") ? selectedFilter : (stryCov_9fa48("5864", "5865", "5866"), !selectedFilter)) {
      if (stryMutAct_9fa48("5867")) {
        {}
      } else {
        stryCov_9fa48("5867");
        return next();
      }
    }
    const nids = await user.notifications.getAll(req.uid, selectedFilter.filter);
    let notifications = await user.notifications.getNotifications(nids, req.uid);
    const pageCount = Math.max(1, Math.ceil(stryMutAct_9fa48("5868") ? notifications.length * itemsPerPage : (stryCov_9fa48("5868"), notifications.length / itemsPerPage)));
    notifications = stryMutAct_9fa48("5869") ? notifications : (stryCov_9fa48("5869"), notifications.slice(start, stryMutAct_9fa48("5870") ? stop - 1 : (stryCov_9fa48("5870"), stop + 1)));
    res.render(stryMutAct_9fa48("5871") ? "" : (stryCov_9fa48("5871"), 'notifications'), stryMutAct_9fa48("5872") ? {} : (stryCov_9fa48("5872"), {
      notifications: notifications,
      pagination: pagination.create(page, pageCount, req.query),
      filters: allFilters,
      regularFilters: regularFilters,
      moderatorFilters: moderatorFilters,
      selectedFilter: selectedFilter,
      title: stryMutAct_9fa48("5873") ? "" : (stryCov_9fa48("5873"), '[[pages:notifications]]'),
      breadcrumbs: helpers.buildBreadcrumbs(stryMutAct_9fa48("5874") ? [] : (stryCov_9fa48("5874"), [stryMutAct_9fa48("5875") ? {} : (stryCov_9fa48("5875"), {
        text: stryMutAct_9fa48("5876") ? "" : (stryCov_9fa48("5876"), '[[pages:notifications]]')
      })]))
    }));
  }
};