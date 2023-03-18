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
const meta = require('../meta');
const db = require('../database');
const pagination = require('../pagination');
const privileges = require('../privileges');
const helpers = require('./helpers');
const api = require('../api');
const utils = require('../utils');
const usersController = module.exports;
usersController.index = async function (req, res, next) {
  if (stryMutAct_9fa48("12034")) {
    {}
  } else {
    stryCov_9fa48("12034");
    const section = stryMutAct_9fa48("12037") ? req.query.section && 'joindate' : stryMutAct_9fa48("12036") ? false : stryMutAct_9fa48("12035") ? true : (stryCov_9fa48("12035", "12036", "12037"), req.query.section || (stryMutAct_9fa48("12038") ? "" : (stryCov_9fa48("12038"), 'joindate')));
    const sectionToController = stryMutAct_9fa48("12039") ? {} : (stryCov_9fa48("12039"), {
      joindate: usersController.getUsersSortedByJoinDate,
      online: usersController.getOnlineUsers,
      'sort-posts': usersController.getUsersSortedByPosts,
      'sort-reputation': usersController.getUsersSortedByReputation,
      banned: usersController.getBannedUsers,
      flagged: usersController.getFlaggedUsers
    });
    if (stryMutAct_9fa48("12041") ? false : stryMutAct_9fa48("12040") ? true : (stryCov_9fa48("12040", "12041"), req.query.query)) {
      if (stryMutAct_9fa48("12042")) {
        {}
      } else {
        stryCov_9fa48("12042");
        await usersController.search(req, res, next);
      }
    } else if (stryMutAct_9fa48("12044") ? false : stryMutAct_9fa48("12043") ? true : (stryCov_9fa48("12043", "12044"), sectionToController[section])) {
      if (stryMutAct_9fa48("12045")) {
        {}
      } else {
        stryCov_9fa48("12045");
        await sectionToController[section](req, res, next);
      }
    } else {
      if (stryMutAct_9fa48("12046")) {
        {}
      } else {
        stryCov_9fa48("12046");
        await usersController.getUsersSortedByJoinDate(req, res, next);
      }
    }
  }
};
usersController.search = async function (req, res) {
  if (stryMutAct_9fa48("12047")) {
    {}
  } else {
    stryCov_9fa48("12047");
    const searchData = await api.users.search(req, req.query);
    const section = stryMutAct_9fa48("12050") ? req.query.section && 'joindate' : stryMutAct_9fa48("12049") ? false : stryMutAct_9fa48("12048") ? true : (stryCov_9fa48("12048", "12049", "12050"), req.query.section || (stryMutAct_9fa48("12051") ? "" : (stryCov_9fa48("12051"), 'joindate')));
    searchData.pagination = pagination.create(req.query.page, searchData.pageCount, req.query);
    searchData[stryMutAct_9fa48("12052") ? `` : (stryCov_9fa48("12052"), `section_${section}`)] = stryMutAct_9fa48("12053") ? false : (stryCov_9fa48("12053"), true);
    searchData.displayUserSearch = stryMutAct_9fa48("12054") ? false : (stryCov_9fa48("12054"), true);
    await render(req, res, searchData);
  }
};
usersController.getOnlineUsers = async function (req, res) {
  if (stryMutAct_9fa48("12055")) {
    {}
  } else {
    stryCov_9fa48("12055");
    const [userData, guests] = await Promise.all(stryMutAct_9fa48("12056") ? [] : (stryCov_9fa48("12056"), [usersController.getUsers(stryMutAct_9fa48("12057") ? "" : (stryCov_9fa48("12057"), 'users:online'), req.uid, req.query), require('../socket.io/admin/rooms').getTotalGuestCount()]));
    let hiddenCount = 0;
    if (stryMutAct_9fa48("12060") ? false : stryMutAct_9fa48("12059") ? true : stryMutAct_9fa48("12058") ? userData.isAdminOrGlobalMod : (stryCov_9fa48("12058", "12059", "12060"), !userData.isAdminOrGlobalMod)) {
      if (stryMutAct_9fa48("12061")) {
        {}
      } else {
        stryCov_9fa48("12061");
        userData.users = stryMutAct_9fa48("12062") ? userData.users : (stryCov_9fa48("12062"), userData.users.filter(user => {
          if (stryMutAct_9fa48("12063")) {
            {}
          } else {
            stryCov_9fa48("12063");
            const showUser = stryMutAct_9fa48("12066") ? user || user.uid === req.uid || user.userStatus !== 'offline' : stryMutAct_9fa48("12065") ? false : stryMutAct_9fa48("12064") ? true : (stryCov_9fa48("12064", "12065", "12066"), user && (stryMutAct_9fa48("12068") ? user.uid === req.uid && user.userStatus !== 'offline' : stryMutAct_9fa48("12067") ? true : (stryCov_9fa48("12067", "12068"), (stryMutAct_9fa48("12070") ? user.uid !== req.uid : stryMutAct_9fa48("12069") ? false : (stryCov_9fa48("12069", "12070"), user.uid === req.uid)) || (stryMutAct_9fa48("12072") ? user.userStatus === 'offline' : stryMutAct_9fa48("12071") ? false : (stryCov_9fa48("12071", "12072"), user.userStatus !== (stryMutAct_9fa48("12073") ? "" : (stryCov_9fa48("12073"), 'offline')))))));
            if (stryMutAct_9fa48("12076") ? false : stryMutAct_9fa48("12075") ? true : stryMutAct_9fa48("12074") ? showUser : (stryCov_9fa48("12074", "12075", "12076"), !showUser)) {
              if (stryMutAct_9fa48("12077")) {
                {}
              } else {
                stryCov_9fa48("12077");
                stryMutAct_9fa48("12078") ? hiddenCount -= 1 : (stryCov_9fa48("12078"), hiddenCount += 1);
              }
            }
            return showUser;
          }
        }));
      }
    }
    userData.anonymousUserCount = stryMutAct_9fa48("12079") ? guests - hiddenCount : (stryCov_9fa48("12079"), guests + hiddenCount);
    userData.timeagoCutoff = stryMutAct_9fa48("12080") ? 1000 * 60 * 60 / 24 : (stryCov_9fa48("12080"), (stryMutAct_9fa48("12081") ? 1000 * 60 / 60 : (stryCov_9fa48("12081"), (stryMutAct_9fa48("12082") ? 1000 / 60 : (stryCov_9fa48("12082"), 1000 * 60)) * 60)) * 24);
    await render(req, res, userData);
  }
};
usersController.getUsersSortedByPosts = async function (req, res) {
  if (stryMutAct_9fa48("12083")) {
    {}
  } else {
    stryCov_9fa48("12083");
    await usersController.renderUsersPage(stryMutAct_9fa48("12084") ? "" : (stryCov_9fa48("12084"), 'users:postcount'), req, res);
  }
};
usersController.getUsersSortedByReputation = async function (req, res, next) {
  if (stryMutAct_9fa48("12085")) {
    {}
  } else {
    stryCov_9fa48("12085");
    if (stryMutAct_9fa48("12087") ? false : stryMutAct_9fa48("12086") ? true : (stryCov_9fa48("12086", "12087"), meta.config[stryMutAct_9fa48("12088") ? "" : (stryCov_9fa48("12088"), 'reputation:disabled')])) {
      if (stryMutAct_9fa48("12089")) {
        {}
      } else {
        stryCov_9fa48("12089");
        return next();
      }
    }
    await usersController.renderUsersPage(stryMutAct_9fa48("12090") ? "" : (stryCov_9fa48("12090"), 'users:reputation'), req, res);
  }
};
usersController.getUsersSortedByJoinDate = async function (req, res) {
  if (stryMutAct_9fa48("12091")) {
    {}
  } else {
    stryCov_9fa48("12091");
    await usersController.renderUsersPage(stryMutAct_9fa48("12092") ? "" : (stryCov_9fa48("12092"), 'users:joindate'), req, res);
  }
};
usersController.getBannedUsers = async function (req, res) {
  if (stryMutAct_9fa48("12093")) {
    {}
  } else {
    stryCov_9fa48("12093");
    await renderIfAdminOrGlobalMod(stryMutAct_9fa48("12094") ? "" : (stryCov_9fa48("12094"), 'users:banned'), req, res);
  }
};
usersController.getFlaggedUsers = async function (req, res) {
  if (stryMutAct_9fa48("12095")) {
    {}
  } else {
    stryCov_9fa48("12095");
    await renderIfAdminOrGlobalMod(stryMutAct_9fa48("12096") ? "" : (stryCov_9fa48("12096"), 'users:flags'), req, res);
  }
};
async function renderIfAdminOrGlobalMod(set, req, res) {
  if (stryMutAct_9fa48("12097")) {
    {}
  } else {
    stryCov_9fa48("12097");
    const isAdminOrGlobalMod = await user.isAdminOrGlobalMod(req.uid);
    if (stryMutAct_9fa48("12100") ? false : stryMutAct_9fa48("12099") ? true : stryMutAct_9fa48("12098") ? isAdminOrGlobalMod : (stryCov_9fa48("12098", "12099", "12100"), !isAdminOrGlobalMod)) {
      if (stryMutAct_9fa48("12101")) {
        {}
      } else {
        stryCov_9fa48("12101");
        return helpers.notAllowed(req, res);
      }
    }
    await usersController.renderUsersPage(set, req, res);
  }
}
usersController.renderUsersPage = async function (set, req, res) {
  if (stryMutAct_9fa48("12102")) {
    {}
  } else {
    stryCov_9fa48("12102");
    const userData = await usersController.getUsers(set, req.uid, req.query);
    await render(req, res, userData);
  }
};
usersController.getUsers = async function (set, uid, query) {
  if (stryMutAct_9fa48("12103")) {
    {}
  } else {
    stryCov_9fa48("12103");
    const setToData = stryMutAct_9fa48("12104") ? {} : (stryCov_9fa48("12104"), {
      'users:postcount': stryMutAct_9fa48("12105") ? {} : (stryCov_9fa48("12105"), {
        title: stryMutAct_9fa48("12106") ? "" : (stryCov_9fa48("12106"), '[[pages:users/sort-posts]]'),
        crumb: stryMutAct_9fa48("12107") ? "" : (stryCov_9fa48("12107"), '[[users:top_posters]]')
      }),
      'users:reputation': stryMutAct_9fa48("12108") ? {} : (stryCov_9fa48("12108"), {
        title: stryMutAct_9fa48("12109") ? "" : (stryCov_9fa48("12109"), '[[pages:users/sort-reputation]]'),
        crumb: stryMutAct_9fa48("12110") ? "" : (stryCov_9fa48("12110"), '[[users:most_reputation]]')
      }),
      'users:joindate': stryMutAct_9fa48("12111") ? {} : (stryCov_9fa48("12111"), {
        title: stryMutAct_9fa48("12112") ? "" : (stryCov_9fa48("12112"), '[[pages:users/latest]]'),
        crumb: stryMutAct_9fa48("12113") ? "" : (stryCov_9fa48("12113"), '[[global:users]]')
      }),
      'users:online': stryMutAct_9fa48("12114") ? {} : (stryCov_9fa48("12114"), {
        title: stryMutAct_9fa48("12115") ? "" : (stryCov_9fa48("12115"), '[[pages:users/online]]'),
        crumb: stryMutAct_9fa48("12116") ? "" : (stryCov_9fa48("12116"), '[[global:online]]')
      }),
      'users:banned': stryMutAct_9fa48("12117") ? {} : (stryCov_9fa48("12117"), {
        title: stryMutAct_9fa48("12118") ? "" : (stryCov_9fa48("12118"), '[[pages:users/banned]]'),
        crumb: stryMutAct_9fa48("12119") ? "" : (stryCov_9fa48("12119"), '[[user:banned]]')
      }),
      'users:flags': stryMutAct_9fa48("12120") ? {} : (stryCov_9fa48("12120"), {
        title: stryMutAct_9fa48("12121") ? "" : (stryCov_9fa48("12121"), '[[pages:users/most-flags]]'),
        crumb: stryMutAct_9fa48("12122") ? "" : (stryCov_9fa48("12122"), '[[users:most_flags]]')
      })
    });
    if (stryMutAct_9fa48("12125") ? false : stryMutAct_9fa48("12124") ? true : stryMutAct_9fa48("12123") ? setToData[set] : (stryCov_9fa48("12123", "12124", "12125"), !setToData[set])) {
      if (stryMutAct_9fa48("12126")) {
        {}
      } else {
        stryCov_9fa48("12126");
        setToData[set] = stryMutAct_9fa48("12127") ? {} : (stryCov_9fa48("12127"), {
          title: stryMutAct_9fa48("12128") ? "Stryker was here!" : (stryCov_9fa48("12128"), ''),
          crumb: stryMutAct_9fa48("12129") ? "Stryker was here!" : (stryCov_9fa48("12129"), '')
        });
      }
    }
    const breadcrumbs = stryMutAct_9fa48("12130") ? [] : (stryCov_9fa48("12130"), [stryMutAct_9fa48("12131") ? {} : (stryCov_9fa48("12131"), {
      text: setToData[set].crumb
    })]);
    if (stryMutAct_9fa48("12134") ? set === 'users:joindate' : stryMutAct_9fa48("12133") ? false : stryMutAct_9fa48("12132") ? true : (stryCov_9fa48("12132", "12133", "12134"), set !== (stryMutAct_9fa48("12135") ? "" : (stryCov_9fa48("12135"), 'users:joindate')))) {
      if (stryMutAct_9fa48("12136")) {
        {}
      } else {
        stryCov_9fa48("12136");
        breadcrumbs.unshift(stryMutAct_9fa48("12137") ? {} : (stryCov_9fa48("12137"), {
          text: stryMutAct_9fa48("12138") ? "" : (stryCov_9fa48("12138"), '[[global:users]]'),
          url: stryMutAct_9fa48("12139") ? "" : (stryCov_9fa48("12139"), '/users')
        }));
      }
    }
    const page = stryMutAct_9fa48("12142") ? parseInt(query.page, 10) && 1 : stryMutAct_9fa48("12141") ? false : stryMutAct_9fa48("12140") ? true : (stryCov_9fa48("12140", "12141", "12142"), parseInt(query.page, 10) || 1);
    const resultsPerPage = meta.config.userSearchResultsPerPage;
    const start = stryMutAct_9fa48("12143") ? Math.max(0, page - 1) / resultsPerPage : (stryCov_9fa48("12143"), Math.max(0, stryMutAct_9fa48("12144") ? page + 1 : (stryCov_9fa48("12144"), page - 1)) * resultsPerPage);
    const stop = stryMutAct_9fa48("12145") ? start + resultsPerPage + 1 : (stryCov_9fa48("12145"), (stryMutAct_9fa48("12146") ? start - resultsPerPage : (stryCov_9fa48("12146"), start + resultsPerPage)) - 1);
    const [isAdmin, isGlobalMod, canSearch, usersData] = await Promise.all(stryMutAct_9fa48("12147") ? [] : (stryCov_9fa48("12147"), [user.isAdministrator(uid), user.isGlobalModerator(uid), privileges.global.can(stryMutAct_9fa48("12148") ? "" : (stryCov_9fa48("12148"), 'search:users'), uid), usersController.getUsersAndCount(set, uid, start, stop)]));
    const pageCount = Math.ceil(stryMutAct_9fa48("12149") ? usersData.count * resultsPerPage : (stryCov_9fa48("12149"), usersData.count / resultsPerPage));
    return stryMutAct_9fa48("12158") ? {
      users: usersData.users,
      pagination: pagination.create(page, pageCount, query),
      userCount: usersData.count,
      title: stryMutAct_9fa48("12153") ? setToData[set].title && '[[pages:users/latest]]' : stryMutAct_9fa48("12152") ? false : stryMutAct_9fa48("12151") ? true : (stryCov_9fa48("12151", "12152", "12153"), setToData[set].title || (stryMutAct_9fa48("12154") ? "" : (stryCov_9fa48("12154"), '[[pages:users/latest]]'))),
      breadcrumbs: helpers.buildBreadcrumbs(breadcrumbs),
      isAdminOrGlobalMod: stryMutAct_9fa48("12157") ? isAdmin && isGlobalMod : stryMutAct_9fa48("12156") ? false : stryMutAct_9fa48("12155") ? true : (stryCov_9fa48("12155", "12156", "12157"), isAdmin || isGlobalMod),
      isAdmin: isAdmin,
      isGlobalMod: isGlobalMod,
      displayUserSearch: canSearch,
      [``]: true
    } : stryMutAct_9fa48("12150") ? {} : (stryCov_9fa48("12150", "12158"), {
      users: usersData.users,
      pagination: pagination.create(page, pageCount, query),
      userCount: usersData.count,
      title: stryMutAct_9fa48("12153") ? setToData[set].title && '[[pages:users/latest]]' : stryMutAct_9fa48("12152") ? false : stryMutAct_9fa48("12151") ? true : (stryCov_9fa48("12151", "12152", "12153"), setToData[set].title || (stryMutAct_9fa48("12154") ? "" : (stryCov_9fa48("12154"), '[[pages:users/latest]]'))),
      breadcrumbs: helpers.buildBreadcrumbs(breadcrumbs),
      isAdminOrGlobalMod: stryMutAct_9fa48("12157") ? isAdmin && isGlobalMod : stryMutAct_9fa48("12156") ? false : stryMutAct_9fa48("12155") ? true : (stryCov_9fa48("12155", "12156", "12157"), isAdmin || isGlobalMod),
      isAdmin: isAdmin,
      isGlobalMod: isGlobalMod,
      displayUserSearch: canSearch,
      [`section_${stryMutAct_9fa48("12161") ? query.section && 'joindate' : stryMutAct_9fa48("12160") ? false : stryMutAct_9fa48("12159") ? true : (stryCov_9fa48("12159", "12160", "12161"), query.section || (stryMutAct_9fa48("12162") ? "" : (stryCov_9fa48("12162"), 'joindate')))}`]: stryMutAct_9fa48("12163") ? false : (stryCov_9fa48("12163"), true)
    });
  }
};
usersController.getUsersAndCount = async function (set, uid, start, stop) {
  if (stryMutAct_9fa48("12164")) {
    {}
  } else {
    stryCov_9fa48("12164");
    async function getCount() {
      if (stryMutAct_9fa48("12165")) {
        {}
      } else {
        stryCov_9fa48("12165");
        if (stryMutAct_9fa48("12168") ? set !== 'users:online' : stryMutAct_9fa48("12167") ? false : stryMutAct_9fa48("12166") ? true : (stryCov_9fa48("12166", "12167", "12168"), set === (stryMutAct_9fa48("12169") ? "" : (stryCov_9fa48("12169"), 'users:online')))) {
          if (stryMutAct_9fa48("12170")) {
            {}
          } else {
            stryCov_9fa48("12170");
            return await db.sortedSetCount(stryMutAct_9fa48("12171") ? "" : (stryCov_9fa48("12171"), 'users:online'), stryMutAct_9fa48("12172") ? Date.now() + 86400000 : (stryCov_9fa48("12172"), Date.now() - 86400000), stryMutAct_9fa48("12173") ? "" : (stryCov_9fa48("12173"), '+inf'));
          }
        } else if (stryMutAct_9fa48("12176") ? set === 'users:banned' && set === 'users:flags' : stryMutAct_9fa48("12175") ? false : stryMutAct_9fa48("12174") ? true : (stryCov_9fa48("12174", "12175", "12176"), (stryMutAct_9fa48("12178") ? set !== 'users:banned' : stryMutAct_9fa48("12177") ? false : (stryCov_9fa48("12177", "12178"), set === (stryMutAct_9fa48("12179") ? "" : (stryCov_9fa48("12179"), 'users:banned')))) || (stryMutAct_9fa48("12181") ? set !== 'users:flags' : stryMutAct_9fa48("12180") ? false : (stryCov_9fa48("12180", "12181"), set === (stryMutAct_9fa48("12182") ? "" : (stryCov_9fa48("12182"), 'users:flags')))))) {
          if (stryMutAct_9fa48("12183")) {
            {}
          } else {
            stryCov_9fa48("12183");
            return await db.sortedSetCard(set);
          }
        }
        return await db.getObjectField(stryMutAct_9fa48("12184") ? "" : (stryCov_9fa48("12184"), 'global'), stryMutAct_9fa48("12185") ? "" : (stryCov_9fa48("12185"), 'userCount'));
      }
    }
    async function getUsers() {
      if (stryMutAct_9fa48("12186")) {
        {}
      } else {
        stryCov_9fa48("12186");
        if (stryMutAct_9fa48("12189") ? set !== 'users:online' : stryMutAct_9fa48("12188") ? false : stryMutAct_9fa48("12187") ? true : (stryCov_9fa48("12187", "12188", "12189"), set === (stryMutAct_9fa48("12190") ? "" : (stryCov_9fa48("12190"), 'users:online')))) {
          if (stryMutAct_9fa48("12191")) {
            {}
          } else {
            stryCov_9fa48("12191");
            const count = (stryMutAct_9fa48("12194") ? parseInt(stop, 10) !== -1 : stryMutAct_9fa48("12193") ? false : stryMutAct_9fa48("12192") ? true : (stryCov_9fa48("12192", "12193", "12194"), parseInt(stop, 10) === (stryMutAct_9fa48("12195") ? +1 : (stryCov_9fa48("12195"), -1)))) ? stop : stryMutAct_9fa48("12196") ? stop - start - 1 : (stryCov_9fa48("12196"), (stryMutAct_9fa48("12197") ? stop + start : (stryCov_9fa48("12197"), stop - start)) + 1);
            const data = await db.getSortedSetRevRangeByScoreWithScores(set, start, count, stryMutAct_9fa48("12198") ? "" : (stryCov_9fa48("12198"), '+inf'), stryMutAct_9fa48("12199") ? Date.now() + 86400000 : (stryCov_9fa48("12199"), Date.now() - 86400000));
            const uids = data.map(stryMutAct_9fa48("12200") ? () => undefined : (stryCov_9fa48("12200"), d => d.value));
            const scores = data.map(stryMutAct_9fa48("12201") ? () => undefined : (stryCov_9fa48("12201"), d => d.score));
            const [userStatus, userData] = await Promise.all(stryMutAct_9fa48("12202") ? [] : (stryCov_9fa48("12202"), [db.getObjectsFields(uids.map(stryMutAct_9fa48("12203") ? () => undefined : (stryCov_9fa48("12203"), uid => stryMutAct_9fa48("12204") ? `` : (stryCov_9fa48("12204"), `user:${uid}`))), stryMutAct_9fa48("12205") ? [] : (stryCov_9fa48("12205"), [stryMutAct_9fa48("12206") ? "" : (stryCov_9fa48("12206"), 'status')])), user.getUsers(uids, uid)]));
            userData.forEach((user, i) => {
              if (stryMutAct_9fa48("12207")) {
                {}
              } else {
                stryCov_9fa48("12207");
                if (stryMutAct_9fa48("12209") ? false : stryMutAct_9fa48("12208") ? true : (stryCov_9fa48("12208", "12209"), user)) {
                  if (stryMutAct_9fa48("12210")) {
                    {}
                  } else {
                    stryCov_9fa48("12210");
                    user.lastonline = scores[i];
                    user.lastonlineISO = utils.toISOString(user.lastonline);
                    user.userStatus = stryMutAct_9fa48("12213") ? userStatus[i].status && 'online' : stryMutAct_9fa48("12212") ? false : stryMutAct_9fa48("12211") ? true : (stryCov_9fa48("12211", "12212", "12213"), userStatus[i].status || (stryMutAct_9fa48("12214") ? "" : (stryCov_9fa48("12214"), 'online')));
                  }
                }
              }
            });
            return userData;
          }
        }
        return await user.getUsersFromSet(set, uid, start, stop);
      }
    }
    const [usersData, count] = await Promise.all(stryMutAct_9fa48("12215") ? [] : (stryCov_9fa48("12215"), [getUsers(), getCount()]));
    return stryMutAct_9fa48("12216") ? {} : (stryCov_9fa48("12216"), {
      users: stryMutAct_9fa48("12217") ? usersData : (stryCov_9fa48("12217"), usersData.filter(stryMutAct_9fa48("12218") ? () => undefined : (stryCov_9fa48("12218"), user => stryMutAct_9fa48("12221") ? user || parseInt(user.uid, 10) : stryMutAct_9fa48("12220") ? false : stryMutAct_9fa48("12219") ? true : (stryCov_9fa48("12219", "12220", "12221"), user && parseInt(user.uid, 10))))),
      count: count
    });
  }
};
async function render(req, res, data) {
  if (stryMutAct_9fa48("12222")) {
    {}
  } else {
    stryCov_9fa48("12222");
    const {
      registrationType
    } = meta.config;
    data.maximumInvites = meta.config.maximumInvites;
    data.inviteOnly = stryMutAct_9fa48("12225") ? registrationType === 'invite-only' && registrationType === 'admin-invite-only' : stryMutAct_9fa48("12224") ? false : stryMutAct_9fa48("12223") ? true : (stryCov_9fa48("12223", "12224", "12225"), (stryMutAct_9fa48("12227") ? registrationType !== 'invite-only' : stryMutAct_9fa48("12226") ? false : (stryCov_9fa48("12226", "12227"), registrationType === (stryMutAct_9fa48("12228") ? "" : (stryCov_9fa48("12228"), 'invite-only')))) || (stryMutAct_9fa48("12230") ? registrationType !== 'admin-invite-only' : stryMutAct_9fa48("12229") ? false : (stryCov_9fa48("12229", "12230"), registrationType === (stryMutAct_9fa48("12231") ? "" : (stryCov_9fa48("12231"), 'admin-invite-only')))));
    data.adminInviteOnly = stryMutAct_9fa48("12234") ? registrationType !== 'admin-invite-only' : stryMutAct_9fa48("12233") ? false : stryMutAct_9fa48("12232") ? true : (stryCov_9fa48("12232", "12233", "12234"), registrationType === (stryMutAct_9fa48("12235") ? "" : (stryCov_9fa48("12235"), 'admin-invite-only')));
    data.invites = await user.getInvitesNumber(req.uid);
    data.showInviteButton = stryMutAct_9fa48("12236") ? true : (stryCov_9fa48("12236"), false);
    if (stryMutAct_9fa48("12238") ? false : stryMutAct_9fa48("12237") ? true : (stryCov_9fa48("12237", "12238"), data.adminInviteOnly)) {
      if (stryMutAct_9fa48("12239")) {
        {}
      } else {
        stryCov_9fa48("12239");
        data.showInviteButton = await privileges.users.isAdministrator(req.uid);
      }
    } else if (stryMutAct_9fa48("12241") ? false : stryMutAct_9fa48("12240") ? true : (stryCov_9fa48("12240", "12241"), req.loggedIn)) {
      if (stryMutAct_9fa48("12242")) {
        {}
      } else {
        stryCov_9fa48("12242");
        const canInvite = await privileges.users.hasInvitePrivilege(req.uid);
        data.showInviteButton = stryMutAct_9fa48("12245") ? canInvite || !data.maximumInvites || data.invites < data.maximumInvites : stryMutAct_9fa48("12244") ? false : stryMutAct_9fa48("12243") ? true : (stryCov_9fa48("12243", "12244", "12245"), canInvite && (stryMutAct_9fa48("12247") ? !data.maximumInvites && data.invites < data.maximumInvites : stryMutAct_9fa48("12246") ? true : (stryCov_9fa48("12246", "12247"), (stryMutAct_9fa48("12248") ? data.maximumInvites : (stryCov_9fa48("12248"), !data.maximumInvites)) || (stryMutAct_9fa48("12251") ? data.invites >= data.maximumInvites : stryMutAct_9fa48("12250") ? data.invites <= data.maximumInvites : stryMutAct_9fa48("12249") ? false : (stryCov_9fa48("12249", "12250", "12251"), data.invites < data.maximumInvites)))));
      }
    }
    data[stryMutAct_9fa48("12252") ? "" : (stryCov_9fa48("12252"), 'reputation:disabled')] = meta.config[stryMutAct_9fa48("12253") ? "" : (stryCov_9fa48("12253"), 'reputation:disabled')];
    res.append(stryMutAct_9fa48("12254") ? "" : (stryCov_9fa48("12254"), 'X-Total-Count'), data.userCount);
    res.render(stryMutAct_9fa48("12255") ? "" : (stryCov_9fa48("12255"), 'users'), data);
  }
}