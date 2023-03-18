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
const posts = require('../posts');
const flags = require('../flags');
const analytics = require('../analytics');
const plugins = require('../plugins');
const pagination = require('../pagination');
const privileges = require('../privileges');
const utils = require('../utils');
const helpers = require('./helpers');
const modsController = module.exports;
modsController.flags = {};
modsController.flags.list = async function (req, res) {
  if (stryMutAct_9fa48("10507")) {
    {}
  } else {
    stryCov_9fa48("10507");
    const validFilters = stryMutAct_9fa48("10508") ? [] : (stryCov_9fa48("10508"), [stryMutAct_9fa48("10509") ? "" : (stryCov_9fa48("10509"), 'assignee'), stryMutAct_9fa48("10510") ? "" : (stryCov_9fa48("10510"), 'state'), stryMutAct_9fa48("10511") ? "" : (stryCov_9fa48("10511"), 'reporterId'), stryMutAct_9fa48("10512") ? "" : (stryCov_9fa48("10512"), 'type'), stryMutAct_9fa48("10513") ? "" : (stryCov_9fa48("10513"), 'targetUid'), stryMutAct_9fa48("10514") ? "" : (stryCov_9fa48("10514"), 'cid'), stryMutAct_9fa48("10515") ? "" : (stryCov_9fa48("10515"), 'quick'), stryMutAct_9fa48("10516") ? "" : (stryCov_9fa48("10516"), 'page'), stryMutAct_9fa48("10517") ? "" : (stryCov_9fa48("10517"), 'perPage')]);
    const validSorts = stryMutAct_9fa48("10518") ? [] : (stryCov_9fa48("10518"), [stryMutAct_9fa48("10519") ? "" : (stryCov_9fa48("10519"), 'newest'), stryMutAct_9fa48("10520") ? "" : (stryCov_9fa48("10520"), 'oldest'), stryMutAct_9fa48("10521") ? "" : (stryCov_9fa48("10521"), 'reports'), stryMutAct_9fa48("10522") ? "" : (stryCov_9fa48("10522"), 'upvotes'), stryMutAct_9fa48("10523") ? "" : (stryCov_9fa48("10523"), 'downvotes'), stryMutAct_9fa48("10524") ? "" : (stryCov_9fa48("10524"), 'replies')]);
    const results = await Promise.all(stryMutAct_9fa48("10525") ? [] : (stryCov_9fa48("10525"), [user.isAdminOrGlobalMod(req.uid), user.getModeratedCids(req.uid), plugins.hooks.fire(stryMutAct_9fa48("10526") ? "" : (stryCov_9fa48("10526"), 'filter:flags.validateFilters'), stryMutAct_9fa48("10527") ? {} : (stryCov_9fa48("10527"), {
      filters: validFilters
    })), plugins.hooks.fire(stryMutAct_9fa48("10528") ? "" : (stryCov_9fa48("10528"), 'filter:flags.validateSort'), stryMutAct_9fa48("10529") ? {} : (stryCov_9fa48("10529"), {
      sorts: validSorts
    }))]));
    const [isAdminOrGlobalMod, moderatedCids,, {
      sorts
    }] = results;
    let [,, {
      filters
    }] = results;
    if (stryMutAct_9fa48("10532") ? false : stryMutAct_9fa48("10531") ? true : stryMutAct_9fa48("10530") ? isAdminOrGlobalMod || !!moderatedCids.length : (stryCov_9fa48("10530", "10531", "10532"), !(stryMutAct_9fa48("10535") ? isAdminOrGlobalMod && !!moderatedCids.length : stryMutAct_9fa48("10534") ? false : stryMutAct_9fa48("10533") ? true : (stryCov_9fa48("10533", "10534", "10535"), isAdminOrGlobalMod || (stryMutAct_9fa48("10536") ? !moderatedCids.length : (stryCov_9fa48("10536"), !(stryMutAct_9fa48("10537") ? moderatedCids.length : (stryCov_9fa48("10537"), !moderatedCids.length)))))))) {
      if (stryMutAct_9fa48("10538")) {
        {}
      } else {
        stryCov_9fa48("10538");
        return helpers.notAllowed(req, res);
      }
    }
    if (stryMutAct_9fa48("10541") ? !isAdminOrGlobalMod || moderatedCids.length : stryMutAct_9fa48("10540") ? false : stryMutAct_9fa48("10539") ? true : (stryCov_9fa48("10539", "10540", "10541"), (stryMutAct_9fa48("10542") ? isAdminOrGlobalMod : (stryCov_9fa48("10542"), !isAdminOrGlobalMod)) && moderatedCids.length)) {
      if (stryMutAct_9fa48("10543")) {
        {}
      } else {
        stryCov_9fa48("10543");
        res.locals.cids = moderatedCids.map(stryMutAct_9fa48("10544") ? () => undefined : (stryCov_9fa48("10544"), cid => String(cid)));
      }
    }

    // Parse query string params for filters, eliminate non-valid filters
    filters = filters.reduce((memo, cur) => {
      if (stryMutAct_9fa48("10545")) {
        {}
      } else {
        stryCov_9fa48("10545");
        if (stryMutAct_9fa48("10547") ? false : stryMutAct_9fa48("10546") ? true : (stryCov_9fa48("10546", "10547"), req.query.hasOwnProperty(cur))) {
          if (stryMutAct_9fa48("10548")) {
            {}
          } else {
            stryCov_9fa48("10548");
            if (stryMutAct_9fa48("10551") ? typeof req.query[cur] === 'string' || req.query[cur].trim() !== '' : stryMutAct_9fa48("10550") ? false : stryMutAct_9fa48("10549") ? true : (stryCov_9fa48("10549", "10550", "10551"), (stryMutAct_9fa48("10553") ? typeof req.query[cur] !== 'string' : stryMutAct_9fa48("10552") ? true : (stryCov_9fa48("10552", "10553"), typeof req.query[cur] === (stryMutAct_9fa48("10554") ? "" : (stryCov_9fa48("10554"), 'string')))) && (stryMutAct_9fa48("10556") ? req.query[cur].trim() === '' : stryMutAct_9fa48("10555") ? true : (stryCov_9fa48("10555", "10556"), (stryMutAct_9fa48("10557") ? req.query[cur] : (stryCov_9fa48("10557"), req.query[cur].trim())) !== (stryMutAct_9fa48("10558") ? "Stryker was here!" : (stryCov_9fa48("10558"), '')))))) {
              if (stryMutAct_9fa48("10559")) {
                {}
              } else {
                stryCov_9fa48("10559");
                memo[cur] = stryMutAct_9fa48("10560") ? req.query[cur] : (stryCov_9fa48("10560"), req.query[cur].trim());
              }
            } else if (stryMutAct_9fa48("10563") ? Array.isArray(req.query[cur]) || req.query[cur].length : stryMutAct_9fa48("10562") ? false : stryMutAct_9fa48("10561") ? true : (stryCov_9fa48("10561", "10562", "10563"), Array.isArray(req.query[cur]) && req.query[cur].length)) {
              if (stryMutAct_9fa48("10564")) {
                {}
              } else {
                stryCov_9fa48("10564");
                memo[cur] = req.query[cur];
              }
            }
          }
        }
        return memo;
      }
    }, {});
    let hasFilter = stryMutAct_9fa48("10565") ? !Object.keys(filters).length : (stryCov_9fa48("10565"), !(stryMutAct_9fa48("10566") ? Object.keys(filters).length : (stryCov_9fa48("10566"), !Object.keys(filters).length)));
    if (stryMutAct_9fa48("10568") ? false : stryMutAct_9fa48("10567") ? true : (stryCov_9fa48("10567", "10568"), res.locals.cids)) {
      if (stryMutAct_9fa48("10569")) {
        {}
      } else {
        stryCov_9fa48("10569");
        if (stryMutAct_9fa48("10572") ? false : stryMutAct_9fa48("10571") ? true : stryMutAct_9fa48("10570") ? filters.cid : (stryCov_9fa48("10570", "10571", "10572"), !filters.cid)) {
          if (stryMutAct_9fa48("10573")) {
            {}
          } else {
            stryCov_9fa48("10573");
            // If mod and no cid filter, add filter for their modded categories
            filters.cid = res.locals.cids;
          }
        } else if (stryMutAct_9fa48("10575") ? false : stryMutAct_9fa48("10574") ? true : (stryCov_9fa48("10574", "10575"), Array.isArray(filters.cid))) {
          if (stryMutAct_9fa48("10576")) {
            {}
          } else {
            stryCov_9fa48("10576");
            // Remove cids they do not moderate
            filters.cid = stryMutAct_9fa48("10577") ? filters.cid : (stryCov_9fa48("10577"), filters.cid.filter(stryMutAct_9fa48("10578") ? () => undefined : (stryCov_9fa48("10578"), cid => res.locals.cids.includes(String(cid)))));
          }
        } else if (stryMutAct_9fa48("10581") ? false : stryMutAct_9fa48("10580") ? true : stryMutAct_9fa48("10579") ? res.locals.cids.includes(String(filters.cid)) : (stryCov_9fa48("10579", "10580", "10581"), !res.locals.cids.includes(String(filters.cid)))) {
          if (stryMutAct_9fa48("10582")) {
            {}
          } else {
            stryCov_9fa48("10582");
            filters.cid = res.locals.cids;
            hasFilter = stryMutAct_9fa48("10583") ? true : (stryCov_9fa48("10583"), false);
          }
        }
      }
    }

    // Pagination doesn't count as a filter
    if (stryMutAct_9fa48("10586") ? Object.keys(filters).length === 1 && filters.hasOwnProperty('page') && Object.keys(filters).length === 2 && filters.hasOwnProperty('page') && filters.hasOwnProperty('perPage') : stryMutAct_9fa48("10585") ? false : stryMutAct_9fa48("10584") ? true : (stryCov_9fa48("10584", "10585", "10586"), (stryMutAct_9fa48("10588") ? Object.keys(filters).length === 1 || filters.hasOwnProperty('page') : stryMutAct_9fa48("10587") ? false : (stryCov_9fa48("10587", "10588"), (stryMutAct_9fa48("10590") ? Object.keys(filters).length !== 1 : stryMutAct_9fa48("10589") ? true : (stryCov_9fa48("10589", "10590"), Object.keys(filters).length === 1)) && filters.hasOwnProperty(stryMutAct_9fa48("10591") ? "" : (stryCov_9fa48("10591"), 'page')))) || (stryMutAct_9fa48("10593") ? Object.keys(filters).length === 2 && filters.hasOwnProperty('page') || filters.hasOwnProperty('perPage') : stryMutAct_9fa48("10592") ? false : (stryCov_9fa48("10592", "10593"), (stryMutAct_9fa48("10595") ? Object.keys(filters).length === 2 || filters.hasOwnProperty('page') : stryMutAct_9fa48("10594") ? true : (stryCov_9fa48("10594", "10595"), (stryMutAct_9fa48("10597") ? Object.keys(filters).length !== 2 : stryMutAct_9fa48("10596") ? true : (stryCov_9fa48("10596", "10597"), Object.keys(filters).length === 2)) && filters.hasOwnProperty(stryMutAct_9fa48("10598") ? "" : (stryCov_9fa48("10598"), 'page')))) && filters.hasOwnProperty(stryMutAct_9fa48("10599") ? "" : (stryCov_9fa48("10599"), 'perPage')))))) {
      if (stryMutAct_9fa48("10600")) {
        {}
      } else {
        stryCov_9fa48("10600");
        hasFilter = stryMutAct_9fa48("10601") ? true : (stryCov_9fa48("10601"), false);
      }
    }

    // Parse sort from query string
    let sort;
    if (stryMutAct_9fa48("10603") ? false : stryMutAct_9fa48("10602") ? true : (stryCov_9fa48("10602", "10603"), req.query.sort)) {
      if (stryMutAct_9fa48("10604")) {
        {}
      } else {
        stryCov_9fa48("10604");
        sort = sorts.includes(req.query.sort) ? req.query.sort : null;
      }
    }
    if (stryMutAct_9fa48("10607") ? sort !== 'newest' : stryMutAct_9fa48("10606") ? false : stryMutAct_9fa48("10605") ? true : (stryCov_9fa48("10605", "10606", "10607"), sort === (stryMutAct_9fa48("10608") ? "" : (stryCov_9fa48("10608"), 'newest')))) {
      if (stryMutAct_9fa48("10609")) {
        {}
      } else {
        stryCov_9fa48("10609");
        sort = undefined;
      }
    }
    hasFilter = stryMutAct_9fa48("10612") ? hasFilter && !!sort : stryMutAct_9fa48("10611") ? false : stryMutAct_9fa48("10610") ? true : (stryCov_9fa48("10610", "10611", "10612"), hasFilter || (stryMutAct_9fa48("10613") ? !sort : (stryCov_9fa48("10613"), !(stryMutAct_9fa48("10614") ? sort : (stryCov_9fa48("10614"), !sort)))));
    const [flagsData, analyticsData, selectData] = await Promise.all(stryMutAct_9fa48("10615") ? [] : (stryCov_9fa48("10615"), [flags.list(stryMutAct_9fa48("10616") ? {} : (stryCov_9fa48("10616"), {
      filters: filters,
      sort: sort,
      uid: req.uid,
      query: req.query
    })), analytics.getDailyStatsForSet(stryMutAct_9fa48("10617") ? "" : (stryCov_9fa48("10617"), 'analytics:flags'), Date.now(), 30), helpers.getSelectedCategory(filters.cid)]));
    res.render(stryMutAct_9fa48("10618") ? "" : (stryCov_9fa48("10618"), 'flags/list'), stryMutAct_9fa48("10619") ? {} : (stryCov_9fa48("10619"), {
      flags: flagsData.flags,
      analytics: analyticsData,
      selectedCategory: selectData.selectedCategory,
      hasFilter: hasFilter,
      filters: filters,
      expanded: stryMutAct_9fa48("10620") ? !(filters.assignee || filters.reporterId || filters.targetUid) : (stryCov_9fa48("10620"), !(stryMutAct_9fa48("10621") ? filters.assignee || filters.reporterId || filters.targetUid : (stryCov_9fa48("10621"), !(stryMutAct_9fa48("10624") ? (filters.assignee || filters.reporterId) && filters.targetUid : stryMutAct_9fa48("10623") ? false : stryMutAct_9fa48("10622") ? true : (stryCov_9fa48("10622", "10623", "10624"), (stryMutAct_9fa48("10626") ? filters.assignee && filters.reporterId : stryMutAct_9fa48("10625") ? false : (stryCov_9fa48("10625", "10626"), filters.assignee || filters.reporterId)) || filters.targetUid))))),
      sort: stryMutAct_9fa48("10629") ? sort && 'newest' : stryMutAct_9fa48("10628") ? false : stryMutAct_9fa48("10627") ? true : (stryCov_9fa48("10627", "10628", "10629"), sort || (stryMutAct_9fa48("10630") ? "" : (stryCov_9fa48("10630"), 'newest'))),
      title: stryMutAct_9fa48("10631") ? "" : (stryCov_9fa48("10631"), '[[pages:flags]]'),
      pagination: pagination.create(flagsData.page, flagsData.pageCount, req.query),
      breadcrumbs: helpers.buildBreadcrumbs(stryMutAct_9fa48("10632") ? [] : (stryCov_9fa48("10632"), [stryMutAct_9fa48("10633") ? {} : (stryCov_9fa48("10633"), {
        text: stryMutAct_9fa48("10634") ? "" : (stryCov_9fa48("10634"), '[[pages:flags]]')
      })]))
    }));
  }
};
modsController.flags.detail = async function (req, res, next) {
  if (stryMutAct_9fa48("10635")) {
    {}
  } else {
    stryCov_9fa48("10635");
    const results = await utils.promiseParallel(stryMutAct_9fa48("10636") ? {} : (stryCov_9fa48("10636"), {
      isAdminOrGlobalMod: user.isAdminOrGlobalMod(req.uid),
      moderatedCids: user.getModeratedCids(req.uid),
      flagData: flags.get(req.params.flagId),
      assignees: user.getAdminsandGlobalModsandModerators(),
      privileges: Promise.all((stryMutAct_9fa48("10637") ? [] : (stryCov_9fa48("10637"), [stryMutAct_9fa48("10638") ? "" : (stryCov_9fa48("10638"), 'global'), stryMutAct_9fa48("10639") ? "" : (stryCov_9fa48("10639"), 'admin')])).map(stryMutAct_9fa48("10640") ? () => undefined : (stryCov_9fa48("10640"), async type => privileges[type].get(req.uid))))
    }));
    results.privileges = stryMutAct_9fa48("10641") ? {} : (stryCov_9fa48("10641"), {
      ...results.privileges[0],
      ...results.privileges[1]
    });
    if (stryMutAct_9fa48("10644") ? !results.flagData && !(results.isAdminOrGlobalMod || !!results.moderatedCids.length) : stryMutAct_9fa48("10643") ? false : stryMutAct_9fa48("10642") ? true : (stryCov_9fa48("10642", "10643", "10644"), (stryMutAct_9fa48("10645") ? results.flagData : (stryCov_9fa48("10645"), !results.flagData)) || (stryMutAct_9fa48("10646") ? results.isAdminOrGlobalMod || !!results.moderatedCids.length : (stryCov_9fa48("10646"), !(stryMutAct_9fa48("10649") ? results.isAdminOrGlobalMod && !!results.moderatedCids.length : stryMutAct_9fa48("10648") ? false : stryMutAct_9fa48("10647") ? true : (stryCov_9fa48("10647", "10648", "10649"), results.isAdminOrGlobalMod || (stryMutAct_9fa48("10650") ? !results.moderatedCids.length : (stryCov_9fa48("10650"), !(stryMutAct_9fa48("10651") ? results.moderatedCids.length : (stryCov_9fa48("10651"), !results.moderatedCids.length)))))))))) {
      if (stryMutAct_9fa48("10652")) {
        {}
      } else {
        stryCov_9fa48("10652");
        return next(); // 404
      }
    }

    results.flagData.history = results.isAdminOrGlobalMod ? await flags.getHistory(req.params.flagId) : null;
    if (stryMutAct_9fa48("10655") ? results.flagData.type !== 'user' : stryMutAct_9fa48("10654") ? false : stryMutAct_9fa48("10653") ? true : (stryCov_9fa48("10653", "10654", "10655"), results.flagData.type === (stryMutAct_9fa48("10656") ? "" : (stryCov_9fa48("10656"), 'user')))) {
      if (stryMutAct_9fa48("10657")) {
        {}
      } else {
        stryCov_9fa48("10657");
        results.flagData.type_path = stryMutAct_9fa48("10658") ? "" : (stryCov_9fa48("10658"), 'uid');
      }
    } else if (stryMutAct_9fa48("10661") ? results.flagData.type !== 'post' : stryMutAct_9fa48("10660") ? false : stryMutAct_9fa48("10659") ? true : (stryCov_9fa48("10659", "10660", "10661"), results.flagData.type === (stryMutAct_9fa48("10662") ? "" : (stryCov_9fa48("10662"), 'post')))) {
      if (stryMutAct_9fa48("10663")) {
        {}
      } else {
        stryCov_9fa48("10663");
        results.flagData.type_path = stryMutAct_9fa48("10664") ? "" : (stryCov_9fa48("10664"), 'post');
      }
    }
    res.render(stryMutAct_9fa48("10665") ? "" : (stryCov_9fa48("10665"), 'flags/detail'), Object.assign(results.flagData, stryMutAct_9fa48("10666") ? {} : (stryCov_9fa48("10666"), {
      assignees: results.assignees,
      type_bool: (stryMutAct_9fa48("10667") ? [] : (stryCov_9fa48("10667"), [stryMutAct_9fa48("10668") ? "" : (stryCov_9fa48("10668"), 'post'), stryMutAct_9fa48("10669") ? "" : (stryCov_9fa48("10669"), 'user'), stryMutAct_9fa48("10670") ? "" : (stryCov_9fa48("10670"), 'empty')])).reduce((memo, cur) => {
        if (stryMutAct_9fa48("10671")) {
          {}
        } else {
          stryCov_9fa48("10671");
          if (stryMutAct_9fa48("10674") ? cur === 'empty' : stryMutAct_9fa48("10673") ? false : stryMutAct_9fa48("10672") ? true : (stryCov_9fa48("10672", "10673", "10674"), cur !== (stryMutAct_9fa48("10675") ? "" : (stryCov_9fa48("10675"), 'empty')))) {
            if (stryMutAct_9fa48("10676")) {
              {}
            } else {
              stryCov_9fa48("10676");
              memo[cur] = stryMutAct_9fa48("10679") ? results.flagData.type === cur || !results.flagData.target || !!Object.keys(results.flagData.target).length : stryMutAct_9fa48("10678") ? false : stryMutAct_9fa48("10677") ? true : (stryCov_9fa48("10677", "10678", "10679"), (stryMutAct_9fa48("10681") ? results.flagData.type !== cur : stryMutAct_9fa48("10680") ? true : (stryCov_9fa48("10680", "10681"), results.flagData.type === cur)) && (stryMutAct_9fa48("10683") ? !results.flagData.target && !!Object.keys(results.flagData.target).length : stryMutAct_9fa48("10682") ? true : (stryCov_9fa48("10682", "10683"), (stryMutAct_9fa48("10684") ? results.flagData.target : (stryCov_9fa48("10684"), !results.flagData.target)) || (stryMutAct_9fa48("10685") ? !Object.keys(results.flagData.target).length : (stryCov_9fa48("10685"), !(stryMutAct_9fa48("10686") ? Object.keys(results.flagData.target).length : (stryCov_9fa48("10686"), !Object.keys(results.flagData.target).length)))))));
            }
          } else {
            if (stryMutAct_9fa48("10687")) {
              {}
            } else {
              stryCov_9fa48("10687");
              memo[cur] = stryMutAct_9fa48("10688") ? Object.keys(results.flagData.target).length : (stryCov_9fa48("10688"), !Object.keys(results.flagData.target).length);
            }
          }
          return memo;
        }
      }, {}),
      states: Object.fromEntries(flags._states),
      title: stryMutAct_9fa48("10689") ? `` : (stryCov_9fa48("10689"), `[[pages:flag-details, ${req.params.flagId}]]`),
      privileges: results.privileges,
      breadcrumbs: helpers.buildBreadcrumbs(stryMutAct_9fa48("10690") ? [] : (stryCov_9fa48("10690"), [stryMutAct_9fa48("10691") ? {} : (stryCov_9fa48("10691"), {
        text: stryMutAct_9fa48("10692") ? "" : (stryCov_9fa48("10692"), '[[pages:flags]]'),
        url: stryMutAct_9fa48("10693") ? "" : (stryCov_9fa48("10693"), '/flags')
      }), stryMutAct_9fa48("10694") ? {} : (stryCov_9fa48("10694"), {
        text: stryMutAct_9fa48("10695") ? `` : (stryCov_9fa48("10695"), `[[pages:flag-details, ${req.params.flagId}]]`)
      })]))
    })));
  }
};
modsController.postQueue = async function (req, res, next) {
  if (stryMutAct_9fa48("10696")) {
    {}
  } else {
    stryCov_9fa48("10696");
    if (stryMutAct_9fa48("10699") ? false : stryMutAct_9fa48("10698") ? true : stryMutAct_9fa48("10697") ? req.loggedIn : (stryCov_9fa48("10697", "10698", "10699"), !req.loggedIn)) {
      if (stryMutAct_9fa48("10700")) {
        {}
      } else {
        stryCov_9fa48("10700");
        return next();
      }
    }
    const {
      id
    } = req.params;
    const {
      cid
    } = req.query;
    const page = stryMutAct_9fa48("10703") ? parseInt(req.query.page, 10) && 1 : stryMutAct_9fa48("10702") ? false : stryMutAct_9fa48("10701") ? true : (stryCov_9fa48("10701", "10702", "10703"), parseInt(req.query.page, 10) || 1);
    const postsPerPage = 20;
    let postData = await posts.getQueuedPosts(stryMutAct_9fa48("10704") ? {} : (stryCov_9fa48("10704"), {
      id: id
    }));
    const [isAdmin, isGlobalMod, moderatedCids, categoriesData] = await Promise.all(stryMutAct_9fa48("10705") ? [] : (stryCov_9fa48("10705"), [user.isAdministrator(req.uid), user.isGlobalModerator(req.uid), user.getModeratedCids(req.uid), helpers.getSelectedCategory(cid)]));
    postData = stryMutAct_9fa48("10706") ? postData : (stryCov_9fa48("10706"), postData.filter(stryMutAct_9fa48("10707") ? () => undefined : (stryCov_9fa48("10707"), p => stryMutAct_9fa48("10710") ? p && (!categoriesData.selectedCids.length || categoriesData.selectedCids.includes(p.category.cid)) || isAdmin || isGlobalMod || moderatedCids.includes(Number(p.category.cid)) || req.uid === p.user.uid : stryMutAct_9fa48("10709") ? false : stryMutAct_9fa48("10708") ? true : (stryCov_9fa48("10708", "10709", "10710"), (stryMutAct_9fa48("10712") ? p || !categoriesData.selectedCids.length || categoriesData.selectedCids.includes(p.category.cid) : stryMutAct_9fa48("10711") ? true : (stryCov_9fa48("10711", "10712"), p && (stryMutAct_9fa48("10714") ? !categoriesData.selectedCids.length && categoriesData.selectedCids.includes(p.category.cid) : stryMutAct_9fa48("10713") ? true : (stryCov_9fa48("10713", "10714"), (stryMutAct_9fa48("10715") ? categoriesData.selectedCids.length : (stryCov_9fa48("10715"), !categoriesData.selectedCids.length)) || categoriesData.selectedCids.includes(p.category.cid))))) && (stryMutAct_9fa48("10717") ? (isAdmin || isGlobalMod || moderatedCids.includes(Number(p.category.cid))) && req.uid === p.user.uid : stryMutAct_9fa48("10716") ? true : (stryCov_9fa48("10716", "10717"), (stryMutAct_9fa48("10719") ? (isAdmin || isGlobalMod) && moderatedCids.includes(Number(p.category.cid)) : stryMutAct_9fa48("10718") ? false : (stryCov_9fa48("10718", "10719"), (stryMutAct_9fa48("10721") ? isAdmin && isGlobalMod : stryMutAct_9fa48("10720") ? false : (stryCov_9fa48("10720", "10721"), isAdmin || isGlobalMod)) || moderatedCids.includes(Number(p.category.cid)))) || (stryMutAct_9fa48("10723") ? req.uid !== p.user.uid : stryMutAct_9fa48("10722") ? false : (stryCov_9fa48("10722", "10723"), req.uid === p.user.uid))))))));
    ({
      posts: postData
    } = await plugins.hooks.fire(stryMutAct_9fa48("10724") ? "" : (stryCov_9fa48("10724"), 'filter:post-queue.get'), stryMutAct_9fa48("10725") ? {} : (stryCov_9fa48("10725"), {
      posts: postData,
      req: req
    })));
    const pageCount = Math.max(1, Math.ceil(stryMutAct_9fa48("10726") ? postData.length * postsPerPage : (stryCov_9fa48("10726"), postData.length / postsPerPage)));
    const start = stryMutAct_9fa48("10727") ? (page - 1) / postsPerPage : (stryCov_9fa48("10727"), (stryMutAct_9fa48("10728") ? page + 1 : (stryCov_9fa48("10728"), page - 1)) * postsPerPage);
    const stop = stryMutAct_9fa48("10729") ? start + postsPerPage + 1 : (stryCov_9fa48("10729"), (stryMutAct_9fa48("10730") ? start - postsPerPage : (stryCov_9fa48("10730"), start + postsPerPage)) - 1);
    postData = stryMutAct_9fa48("10731") ? postData : (stryCov_9fa48("10731"), postData.slice(start, stryMutAct_9fa48("10732") ? stop - 1 : (stryCov_9fa48("10732"), stop + 1)));
    const crumbs = stryMutAct_9fa48("10733") ? [] : (stryCov_9fa48("10733"), [stryMutAct_9fa48("10734") ? {} : (stryCov_9fa48("10734"), {
      text: stryMutAct_9fa48("10735") ? "" : (stryCov_9fa48("10735"), '[[pages:post-queue]]'),
      url: id ? stryMutAct_9fa48("10736") ? "" : (stryCov_9fa48("10736"), '/post-queue') : undefined
    })]);
    if (stryMutAct_9fa48("10739") ? id || postData.length : stryMutAct_9fa48("10738") ? false : stryMutAct_9fa48("10737") ? true : (stryCov_9fa48("10737", "10738", "10739"), id && postData.length)) {
      if (stryMutAct_9fa48("10740")) {
        {}
      } else {
        stryCov_9fa48("10740");
        const text = postData[0].data.tid ? stryMutAct_9fa48("10741") ? "" : (stryCov_9fa48("10741"), '[[post-queue:reply]]') : stryMutAct_9fa48("10742") ? "" : (stryCov_9fa48("10742"), '[[post-queue:topic]]');
        crumbs.push(stryMutAct_9fa48("10743") ? {} : (stryCov_9fa48("10743"), {
          text: text
        }));
      }
    }
    res.render(stryMutAct_9fa48("10744") ? "" : (stryCov_9fa48("10744"), 'post-queue'), stryMutAct_9fa48("10745") ? {} : (stryCov_9fa48("10745"), {
      title: stryMutAct_9fa48("10746") ? "" : (stryCov_9fa48("10746"), '[[pages:post-queue]]'),
      posts: postData,
      isAdmin: isAdmin,
      canAccept: stryMutAct_9fa48("10749") ? (isAdmin || isGlobalMod) && !!moderatedCids.length : stryMutAct_9fa48("10748") ? false : stryMutAct_9fa48("10747") ? true : (stryCov_9fa48("10747", "10748", "10749"), (stryMutAct_9fa48("10751") ? isAdmin && isGlobalMod : stryMutAct_9fa48("10750") ? false : (stryCov_9fa48("10750", "10751"), isAdmin || isGlobalMod)) || (stryMutAct_9fa48("10752") ? !moderatedCids.length : (stryCov_9fa48("10752"), !(stryMutAct_9fa48("10753") ? moderatedCids.length : (stryCov_9fa48("10753"), !moderatedCids.length))))),
      ...categoriesData,
      allCategoriesUrl: stryMutAct_9fa48("10754") ? `` : (stryCov_9fa48("10754"), `post-queue${helpers.buildQueryString(req.query, stryMutAct_9fa48("10755") ? "" : (stryCov_9fa48("10755"), 'cid'), stryMutAct_9fa48("10756") ? "Stryker was here!" : (stryCov_9fa48("10756"), ''))}`),
      pagination: pagination.create(page, pageCount),
      breadcrumbs: helpers.buildBreadcrumbs(crumbs),
      singlePost: stryMutAct_9fa48("10757") ? !id : (stryCov_9fa48("10757"), !(stryMutAct_9fa48("10758") ? id : (stryCov_9fa48("10758"), !id)))
    }));
  }
};