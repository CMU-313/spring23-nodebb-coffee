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
const _ = require('lodash');
const meta = require('../meta');
const plugins = require('../plugins');
const db = require('../database');
const groups = require('../groups');
const utils = require('../utils');
module.exports = function (User) {
  if (stryMutAct_9fa48("49085")) {
    {}
  } else {
    stryCov_9fa48("49085");
    const filterFnMap = stryMutAct_9fa48("49086") ? {} : (stryCov_9fa48("49086"), {
      online: stryMutAct_9fa48("49087") ? () => undefined : (stryCov_9fa48("49087"), user => stryMutAct_9fa48("49090") ? user.status !== 'offline' || Date.now() - user.lastonline < 300000 : stryMutAct_9fa48("49089") ? false : stryMutAct_9fa48("49088") ? true : (stryCov_9fa48("49088", "49089", "49090"), (stryMutAct_9fa48("49092") ? user.status === 'offline' : stryMutAct_9fa48("49091") ? true : (stryCov_9fa48("49091", "49092"), user.status !== (stryMutAct_9fa48("49093") ? "" : (stryCov_9fa48("49093"), 'offline')))) && (stryMutAct_9fa48("49096") ? Date.now() - user.lastonline >= 300000 : stryMutAct_9fa48("49095") ? Date.now() - user.lastonline <= 300000 : stryMutAct_9fa48("49094") ? true : (stryCov_9fa48("49094", "49095", "49096"), (stryMutAct_9fa48("49097") ? Date.now() + user.lastonline : (stryCov_9fa48("49097"), Date.now() - user.lastonline)) < 300000)))),
      flagged: stryMutAct_9fa48("49098") ? () => undefined : (stryCov_9fa48("49098"), user => stryMutAct_9fa48("49102") ? parseInt(user.flags, 10) <= 0 : stryMutAct_9fa48("49101") ? parseInt(user.flags, 10) >= 0 : stryMutAct_9fa48("49100") ? false : stryMutAct_9fa48("49099") ? true : (stryCov_9fa48("49099", "49100", "49101", "49102"), parseInt(user.flags, 10) > 0)),
      verified: stryMutAct_9fa48("49103") ? () => undefined : (stryCov_9fa48("49103"), user => stryMutAct_9fa48("49104") ? !user['email:confirmed'] : (stryCov_9fa48("49104"), !(stryMutAct_9fa48("49105") ? user['email:confirmed'] : (stryCov_9fa48("49105"), !user[stryMutAct_9fa48("49106") ? "" : (stryCov_9fa48("49106"), 'email:confirmed')])))),
      unverified: stryMutAct_9fa48("49107") ? () => undefined : (stryCov_9fa48("49107"), user => stryMutAct_9fa48("49108") ? user['email:confirmed'] : (stryCov_9fa48("49108"), !user[stryMutAct_9fa48("49109") ? "" : (stryCov_9fa48("49109"), 'email:confirmed')]))
    });
    const filterFieldMap = stryMutAct_9fa48("49110") ? {} : (stryCov_9fa48("49110"), {
      online: stryMutAct_9fa48("49111") ? [] : (stryCov_9fa48("49111"), [stryMutAct_9fa48("49112") ? "" : (stryCov_9fa48("49112"), 'status'), stryMutAct_9fa48("49113") ? "" : (stryCov_9fa48("49113"), 'lastonline')]),
      flagged: stryMutAct_9fa48("49114") ? [] : (stryCov_9fa48("49114"), [stryMutAct_9fa48("49115") ? "" : (stryCov_9fa48("49115"), 'flags')]),
      verified: stryMutAct_9fa48("49116") ? [] : (stryCov_9fa48("49116"), [stryMutAct_9fa48("49117") ? "" : (stryCov_9fa48("49117"), 'email:confirmed')]),
      unverified: stryMutAct_9fa48("49118") ? [] : (stryCov_9fa48("49118"), [stryMutAct_9fa48("49119") ? "" : (stryCov_9fa48("49119"), 'email:confirmed')])
    });
    User.search = async function (data) {
      if (stryMutAct_9fa48("49120")) {
        {}
      } else {
        stryCov_9fa48("49120");
        const query = stryMutAct_9fa48("49123") ? data.query && '' : stryMutAct_9fa48("49122") ? false : stryMutAct_9fa48("49121") ? true : (stryCov_9fa48("49121", "49122", "49123"), data.query || (stryMutAct_9fa48("49124") ? "Stryker was here!" : (stryCov_9fa48("49124"), '')));
        const searchBy = stryMutAct_9fa48("49127") ? data.searchBy && 'username' : stryMutAct_9fa48("49126") ? false : stryMutAct_9fa48("49125") ? true : (stryCov_9fa48("49125", "49126", "49127"), data.searchBy || (stryMutAct_9fa48("49128") ? "" : (stryCov_9fa48("49128"), 'username')));
        const page = stryMutAct_9fa48("49131") ? data.page && 1 : stryMutAct_9fa48("49130") ? false : stryMutAct_9fa48("49129") ? true : (stryCov_9fa48("49129", "49130", "49131"), data.page || 1);
        const uid = stryMutAct_9fa48("49134") ? data.uid && 0 : stryMutAct_9fa48("49133") ? false : stryMutAct_9fa48("49132") ? true : (stryCov_9fa48("49132", "49133", "49134"), data.uid || 0);
        const paginate = data.hasOwnProperty(stryMutAct_9fa48("49135") ? "" : (stryCov_9fa48("49135"), 'paginate')) ? data.paginate : stryMutAct_9fa48("49136") ? false : (stryCov_9fa48("49136"), true);
        const startTime = process.hrtime();
        let uids = stryMutAct_9fa48("49137") ? ["Stryker was here"] : (stryCov_9fa48("49137"), []);
        if (stryMutAct_9fa48("49140") ? searchBy !== 'ip' : stryMutAct_9fa48("49139") ? false : stryMutAct_9fa48("49138") ? true : (stryCov_9fa48("49138", "49139", "49140"), searchBy === (stryMutAct_9fa48("49141") ? "" : (stryCov_9fa48("49141"), 'ip')))) {
          if (stryMutAct_9fa48("49142")) {
            {}
          } else {
            stryCov_9fa48("49142");
            uids = await searchByIP(query);
          }
        } else if (stryMutAct_9fa48("49145") ? searchBy !== 'uid' : stryMutAct_9fa48("49144") ? false : stryMutAct_9fa48("49143") ? true : (stryCov_9fa48("49143", "49144", "49145"), searchBy === (stryMutAct_9fa48("49146") ? "" : (stryCov_9fa48("49146"), 'uid')))) {
          if (stryMutAct_9fa48("49147")) {
            {}
          } else {
            stryCov_9fa48("49147");
            uids = stryMutAct_9fa48("49148") ? [] : (stryCov_9fa48("49148"), [query]);
          }
        } else {
          if (stryMutAct_9fa48("49149")) {
            {}
          } else {
            stryCov_9fa48("49149");
            const searchMethod = stryMutAct_9fa48("49152") ? data.findUids && findUids : stryMutAct_9fa48("49151") ? false : stryMutAct_9fa48("49150") ? true : (stryCov_9fa48("49150", "49151", "49152"), data.findUids || findUids);
            uids = await searchMethod(query, searchBy, data.hardCap);
          }
        }
        uids = await filterAndSortUids(uids, data);
        const result = await plugins.hooks.fire(stryMutAct_9fa48("49153") ? "" : (stryCov_9fa48("49153"), 'filter:users.search'), stryMutAct_9fa48("49154") ? {} : (stryCov_9fa48("49154"), {
          uids: uids,
          uid: uid
        }));
        uids = result.uids;
        const searchResult = stryMutAct_9fa48("49155") ? {} : (stryCov_9fa48("49155"), {
          matchCount: uids.length
        });
        if (stryMutAct_9fa48("49157") ? false : stryMutAct_9fa48("49156") ? true : (stryCov_9fa48("49156", "49157"), paginate)) {
          if (stryMutAct_9fa48("49158")) {
            {}
          } else {
            stryCov_9fa48("49158");
            const resultsPerPage = stryMutAct_9fa48("49161") ? data.resultsPerPage && meta.config.userSearchResultsPerPage : stryMutAct_9fa48("49160") ? false : stryMutAct_9fa48("49159") ? true : (stryCov_9fa48("49159", "49160", "49161"), data.resultsPerPage || meta.config.userSearchResultsPerPage);
            const start = stryMutAct_9fa48("49162") ? Math.max(0, page - 1) / resultsPerPage : (stryCov_9fa48("49162"), Math.max(0, stryMutAct_9fa48("49163") ? page + 1 : (stryCov_9fa48("49163"), page - 1)) * resultsPerPage);
            const stop = stryMutAct_9fa48("49164") ? start - resultsPerPage : (stryCov_9fa48("49164"), start + resultsPerPage);
            searchResult.pageCount = Math.ceil(stryMutAct_9fa48("49165") ? uids.length * resultsPerPage : (stryCov_9fa48("49165"), uids.length / resultsPerPage));
            uids = stryMutAct_9fa48("49166") ? uids : (stryCov_9fa48("49166"), uids.slice(start, stop));
          }
        }
        const userData = await User.getUsers(uids, uid);
        searchResult.timing = (stryMutAct_9fa48("49167") ? process.elapsedTimeSince(startTime) * 1000 : (stryCov_9fa48("49167"), process.elapsedTimeSince(startTime) / 1000)).toFixed(2);
        searchResult.users = stryMutAct_9fa48("49168") ? userData : (stryCov_9fa48("49168"), userData.filter(stryMutAct_9fa48("49169") ? () => undefined : (stryCov_9fa48("49169"), user => stryMutAct_9fa48("49172") ? user || user.uid > 0 : stryMutAct_9fa48("49171") ? false : stryMutAct_9fa48("49170") ? true : (stryCov_9fa48("49170", "49171", "49172"), user && (stryMutAct_9fa48("49175") ? user.uid <= 0 : stryMutAct_9fa48("49174") ? user.uid >= 0 : stryMutAct_9fa48("49173") ? true : (stryCov_9fa48("49173", "49174", "49175"), user.uid > 0))))));
        return searchResult;
      }
    };
    async function findUids(query, searchBy, hardCap) {
      if (stryMutAct_9fa48("49176")) {
        {}
      } else {
        stryCov_9fa48("49176");
        if (stryMutAct_9fa48("49179") ? false : stryMutAct_9fa48("49178") ? true : stryMutAct_9fa48("49177") ? query : (stryCov_9fa48("49177", "49178", "49179"), !query)) {
          if (stryMutAct_9fa48("49180")) {
            {}
          } else {
            stryCov_9fa48("49180");
            return stryMutAct_9fa48("49181") ? ["Stryker was here"] : (stryCov_9fa48("49181"), []);
          }
        }
        query = stryMutAct_9fa48("49182") ? String(query).toUpperCase() : (stryCov_9fa48("49182"), String(query).toLowerCase());
        const min = query;
        const max = stryMutAct_9fa48("49183") ? query.substr(0, query.length - 1) - String.fromCharCode(query.charCodeAt(query.length - 1) + 1) : (stryCov_9fa48("49183"), (stryMutAct_9fa48("49184") ? query : (stryCov_9fa48("49184"), query.substr(0, stryMutAct_9fa48("49185") ? query.length + 1 : (stryCov_9fa48("49185"), query.length - 1)))) + String.fromCharCode(stryMutAct_9fa48("49186") ? query.charCodeAt(query.length - 1) - 1 : (stryCov_9fa48("49186"), query.charCodeAt(stryMutAct_9fa48("49187") ? query.length + 1 : (stryCov_9fa48("49187"), query.length - 1)) + 1)));
        const resultsPerPage = meta.config.userSearchResultsPerPage;
        hardCap = stryMutAct_9fa48("49190") ? hardCap && resultsPerPage * 10 : stryMutAct_9fa48("49189") ? false : stryMutAct_9fa48("49188") ? true : (stryCov_9fa48("49188", "49189", "49190"), hardCap || (stryMutAct_9fa48("49191") ? resultsPerPage / 10 : (stryCov_9fa48("49191"), resultsPerPage * 10)));
        const data = await db.getSortedSetRangeByLex(stryMutAct_9fa48("49192") ? `` : (stryCov_9fa48("49192"), `${searchBy}:sorted`), min, max, 0, hardCap);
        const uids = data.map(stryMutAct_9fa48("49193") ? () => undefined : (stryCov_9fa48("49193"), data => data.split(stryMutAct_9fa48("49194") ? "" : (stryCov_9fa48("49194"), ':')).pop()));
        return uids;
      }
    }
    async function filterAndSortUids(uids, data) {
      if (stryMutAct_9fa48("49195")) {
        {}
      } else {
        stryCov_9fa48("49195");
        uids = stryMutAct_9fa48("49196") ? uids : (stryCov_9fa48("49196"), uids.filter(stryMutAct_9fa48("49197") ? () => undefined : (stryCov_9fa48("49197"), uid => parseInt(uid, 10))));
        let filters = stryMutAct_9fa48("49200") ? data.filters && [] : stryMutAct_9fa48("49199") ? false : stryMutAct_9fa48("49198") ? true : (stryCov_9fa48("49198", "49199", "49200"), data.filters || (stryMutAct_9fa48("49201") ? ["Stryker was here"] : (stryCov_9fa48("49201"), [])));
        filters = Array.isArray(filters) ? filters : stryMutAct_9fa48("49202") ? [] : (stryCov_9fa48("49202"), [data.filters]);
        const fields = stryMutAct_9fa48("49203") ? ["Stryker was here"] : (stryCov_9fa48("49203"), []);
        if (stryMutAct_9fa48("49205") ? false : stryMutAct_9fa48("49204") ? true : (stryCov_9fa48("49204", "49205"), data.sortBy)) {
          if (stryMutAct_9fa48("49206")) {
            {}
          } else {
            stryCov_9fa48("49206");
            fields.push(data.sortBy);
          }
        }
        filters.forEach(filter => {
          if (stryMutAct_9fa48("49207")) {
            {}
          } else {
            stryCov_9fa48("49207");
            if (stryMutAct_9fa48("49209") ? false : stryMutAct_9fa48("49208") ? true : (stryCov_9fa48("49208", "49209"), filterFieldMap[filter])) {
              if (stryMutAct_9fa48("49210")) {
                {}
              } else {
                stryCov_9fa48("49210");
                fields.push(...filterFieldMap[filter]);
              }
            }
          }
        });
        if (stryMutAct_9fa48("49212") ? false : stryMutAct_9fa48("49211") ? true : (stryCov_9fa48("49211", "49212"), data.groupName)) {
          if (stryMutAct_9fa48("49213")) {
            {}
          } else {
            stryCov_9fa48("49213");
            const isMembers = await groups.isMembers(uids, data.groupName);
            uids = stryMutAct_9fa48("49214") ? uids : (stryCov_9fa48("49214"), uids.filter(stryMutAct_9fa48("49215") ? () => undefined : (stryCov_9fa48("49215"), (uid, index) => isMembers[index])));
          }
        }
        if (stryMutAct_9fa48("49218") ? false : stryMutAct_9fa48("49217") ? true : stryMutAct_9fa48("49216") ? fields.length : (stryCov_9fa48("49216", "49217", "49218"), !fields.length)) {
          if (stryMutAct_9fa48("49219")) {
            {}
          } else {
            stryCov_9fa48("49219");
            return uids;
          }
        }
        if (stryMutAct_9fa48("49222") ? filters.includes('banned') && filters.includes('notbanned') : stryMutAct_9fa48("49221") ? false : stryMutAct_9fa48("49220") ? true : (stryCov_9fa48("49220", "49221", "49222"), filters.includes(stryMutAct_9fa48("49223") ? "" : (stryCov_9fa48("49223"), 'banned')) || filters.includes(stryMutAct_9fa48("49224") ? "" : (stryCov_9fa48("49224"), 'notbanned')))) {
          if (stryMutAct_9fa48("49225")) {
            {}
          } else {
            stryCov_9fa48("49225");
            const isMembersOfBanned = await groups.isMembers(uids, groups.BANNED_USERS);
            const checkBanned = filters.includes(stryMutAct_9fa48("49226") ? "" : (stryCov_9fa48("49226"), 'banned'));
            uids = stryMutAct_9fa48("49227") ? uids : (stryCov_9fa48("49227"), uids.filter(stryMutAct_9fa48("49228") ? () => undefined : (stryCov_9fa48("49228"), (uid, index) => checkBanned ? isMembersOfBanned[index] : stryMutAct_9fa48("49229") ? isMembersOfBanned[index] : (stryCov_9fa48("49229"), !isMembersOfBanned[index]))));
          }
        }
        fields.push(stryMutAct_9fa48("49230") ? "" : (stryCov_9fa48("49230"), 'uid'));
        let userData = await User.getUsersFields(uids, fields);
        filters.forEach(filter => {
          if (stryMutAct_9fa48("49231")) {
            {}
          } else {
            stryCov_9fa48("49231");
            if (stryMutAct_9fa48("49233") ? false : stryMutAct_9fa48("49232") ? true : (stryCov_9fa48("49232", "49233"), filterFnMap[filter])) {
              if (stryMutAct_9fa48("49234")) {
                {}
              } else {
                stryCov_9fa48("49234");
                userData = stryMutAct_9fa48("49235") ? userData : (stryCov_9fa48("49235"), userData.filter(filterFnMap[filter]));
              }
            }
          }
        });
        if (stryMutAct_9fa48("49237") ? false : stryMutAct_9fa48("49236") ? true : (stryCov_9fa48("49236", "49237"), data.sortBy)) {
          if (stryMutAct_9fa48("49238")) {
            {}
          } else {
            stryCov_9fa48("49238");
            sortUsers(userData, data.sortBy, data.sortDirection);
          }
        }
        return userData.map(stryMutAct_9fa48("49239") ? () => undefined : (stryCov_9fa48("49239"), user => user.uid));
      }
    }
    function sortUsers(userData, sortBy, sortDirection) {
      if (stryMutAct_9fa48("49240")) {
        {}
      } else {
        stryCov_9fa48("49240");
        if (stryMutAct_9fa48("49243") ? !userData && !userData.length : stryMutAct_9fa48("49242") ? false : stryMutAct_9fa48("49241") ? true : (stryCov_9fa48("49241", "49242", "49243"), (stryMutAct_9fa48("49244") ? userData : (stryCov_9fa48("49244"), !userData)) || (stryMutAct_9fa48("49245") ? userData.length : (stryCov_9fa48("49245"), !userData.length)))) {
          if (stryMutAct_9fa48("49246")) {
            {}
          } else {
            stryCov_9fa48("49246");
            return;
          }
        }
        sortDirection = stryMutAct_9fa48("49249") ? sortDirection && 'desc' : stryMutAct_9fa48("49248") ? false : stryMutAct_9fa48("49247") ? true : (stryCov_9fa48("49247", "49248", "49249"), sortDirection || (stryMutAct_9fa48("49250") ? "" : (stryCov_9fa48("49250"), 'desc')));
        const direction = (stryMutAct_9fa48("49253") ? sortDirection !== 'desc' : stryMutAct_9fa48("49252") ? false : stryMutAct_9fa48("49251") ? true : (stryCov_9fa48("49251", "49252", "49253"), sortDirection === (stryMutAct_9fa48("49254") ? "" : (stryCov_9fa48("49254"), 'desc')))) ? 1 : stryMutAct_9fa48("49255") ? +1 : (stryCov_9fa48("49255"), -1);
        const isNumeric = utils.isNumber(userData[0][sortBy]);
        if (stryMutAct_9fa48("49257") ? false : stryMutAct_9fa48("49256") ? true : (stryCov_9fa48("49256", "49257"), isNumeric)) {
          if (stryMutAct_9fa48("49258")) {
            {}
          } else {
            stryCov_9fa48("49258");
            stryMutAct_9fa48("49259") ? userData : (stryCov_9fa48("49259"), userData.sort(stryMutAct_9fa48("49260") ? () => undefined : (stryCov_9fa48("49260"), (u1, u2) => stryMutAct_9fa48("49261") ? direction / (u2[sortBy] - u1[sortBy]) : (stryCov_9fa48("49261"), direction * (stryMutAct_9fa48("49262") ? u2[sortBy] + u1[sortBy] : (stryCov_9fa48("49262"), u2[sortBy] - u1[sortBy]))))));
          }
        } else {
          if (stryMutAct_9fa48("49263")) {
            {}
          } else {
            stryCov_9fa48("49263");
            stryMutAct_9fa48("49264") ? userData : (stryCov_9fa48("49264"), userData.sort((u1, u2) => {
              if (stryMutAct_9fa48("49265")) {
                {}
              } else {
                stryCov_9fa48("49265");
                if (stryMutAct_9fa48("49269") ? u1[sortBy] >= u2[sortBy] : stryMutAct_9fa48("49268") ? u1[sortBy] <= u2[sortBy] : stryMutAct_9fa48("49267") ? false : stryMutAct_9fa48("49266") ? true : (stryCov_9fa48("49266", "49267", "49268", "49269"), u1[sortBy] < u2[sortBy])) {
                  if (stryMutAct_9fa48("49270")) {
                    {}
                  } else {
                    stryCov_9fa48("49270");
                    return stryMutAct_9fa48("49271") ? direction / -1 : (stryCov_9fa48("49271"), direction * (stryMutAct_9fa48("49272") ? +1 : (stryCov_9fa48("49272"), -1)));
                  }
                } else if (stryMutAct_9fa48("49276") ? u1[sortBy] <= u2[sortBy] : stryMutAct_9fa48("49275") ? u1[sortBy] >= u2[sortBy] : stryMutAct_9fa48("49274") ? false : stryMutAct_9fa48("49273") ? true : (stryCov_9fa48("49273", "49274", "49275", "49276"), u1[sortBy] > u2[sortBy])) {
                  if (stryMutAct_9fa48("49277")) {
                    {}
                  } else {
                    stryCov_9fa48("49277");
                    return stryMutAct_9fa48("49278") ? direction / 1 : (stryCov_9fa48("49278"), direction * 1);
                  }
                }
                return 0;
              }
            }));
          }
        }
      }
    }
    async function searchByIP(ip) {
      if (stryMutAct_9fa48("49279")) {
        {}
      } else {
        stryCov_9fa48("49279");
        const ipKeys = await db.scan(stryMutAct_9fa48("49280") ? {} : (stryCov_9fa48("49280"), {
          match: stryMutAct_9fa48("49281") ? `` : (stryCov_9fa48("49281"), `ip:${ip}*`)
        }));
        const uids = await db.getSortedSetRevRange(ipKeys, 0, stryMutAct_9fa48("49282") ? +1 : (stryCov_9fa48("49282"), -1));
        return _.uniq(uids);
      }
    }
  }
};