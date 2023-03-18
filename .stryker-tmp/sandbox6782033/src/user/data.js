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
const _ = require('lodash');
const db = require('../database');
const meta = require('../meta');
const plugins = require('../plugins');
const utils = require('../utils');
const relative_path = nconf.get(stryMutAct_9fa48("45976") ? "" : (stryCov_9fa48("45976"), 'relative_path'));
const intFields = stryMutAct_9fa48("45977") ? [] : (stryCov_9fa48("45977"), [stryMutAct_9fa48("45978") ? "" : (stryCov_9fa48("45978"), 'uid'), stryMutAct_9fa48("45979") ? "" : (stryCov_9fa48("45979"), 'postcount'), stryMutAct_9fa48("45980") ? "" : (stryCov_9fa48("45980"), 'topiccount'), stryMutAct_9fa48("45981") ? "" : (stryCov_9fa48("45981"), 'reputation'), stryMutAct_9fa48("45982") ? "" : (stryCov_9fa48("45982"), 'profileviews'), stryMutAct_9fa48("45983") ? "" : (stryCov_9fa48("45983"), 'banned'), stryMutAct_9fa48("45984") ? "" : (stryCov_9fa48("45984"), 'banned:expire'), stryMutAct_9fa48("45985") ? "" : (stryCov_9fa48("45985"), 'email:confirmed'), stryMutAct_9fa48("45986") ? "" : (stryCov_9fa48("45986"), 'joindate'), stryMutAct_9fa48("45987") ? "" : (stryCov_9fa48("45987"), 'lastonline'), stryMutAct_9fa48("45988") ? "" : (stryCov_9fa48("45988"), 'lastqueuetime'), stryMutAct_9fa48("45989") ? "" : (stryCov_9fa48("45989"), 'lastposttime'), stryMutAct_9fa48("45990") ? "" : (stryCov_9fa48("45990"), 'followingCount'), stryMutAct_9fa48("45991") ? "" : (stryCov_9fa48("45991"), 'followerCount'), stryMutAct_9fa48("45992") ? "" : (stryCov_9fa48("45992"), 'blocksCount'), stryMutAct_9fa48("45993") ? "" : (stryCov_9fa48("45993"), 'passwordExpiry'), stryMutAct_9fa48("45994") ? "" : (stryCov_9fa48("45994"), 'mutedUntil')]);
module.exports = function (User) {
  if (stryMutAct_9fa48("45995")) {
    {}
  } else {
    stryCov_9fa48("45995");
    const fieldWhitelist = stryMutAct_9fa48("45996") ? [] : (stryCov_9fa48("45996"), [stryMutAct_9fa48("45997") ? "" : (stryCov_9fa48("45997"), 'uid'), stryMutAct_9fa48("45998") ? "" : (stryCov_9fa48("45998"), 'username'), stryMutAct_9fa48("45999") ? "" : (stryCov_9fa48("45999"), 'userslug'), stryMutAct_9fa48("46000") ? "" : (stryCov_9fa48("46000"), 'email'), stryMutAct_9fa48("46001") ? "" : (stryCov_9fa48("46001"), 'email:confirmed'), stryMutAct_9fa48("46002") ? "" : (stryCov_9fa48("46002"), 'joindate'), stryMutAct_9fa48("46003") ? "" : (stryCov_9fa48("46003"), 'accounttype'), stryMutAct_9fa48("46004") ? "" : (stryCov_9fa48("46004"), 'lastonline'), stryMutAct_9fa48("46005") ? "" : (stryCov_9fa48("46005"), 'picture'), stryMutAct_9fa48("46006") ? "" : (stryCov_9fa48("46006"), 'icon:bgColor'), stryMutAct_9fa48("46007") ? "" : (stryCov_9fa48("46007"), 'fullname'), stryMutAct_9fa48("46008") ? "" : (stryCov_9fa48("46008"), 'location'), stryMutAct_9fa48("46009") ? "" : (stryCov_9fa48("46009"), 'birthday'), stryMutAct_9fa48("46010") ? "" : (stryCov_9fa48("46010"), 'website'), stryMutAct_9fa48("46011") ? "" : (stryCov_9fa48("46011"), 'aboutme'), stryMutAct_9fa48("46012") ? "" : (stryCov_9fa48("46012"), 'signature'), stryMutAct_9fa48("46013") ? "" : (stryCov_9fa48("46013"), 'uploadedpicture'), stryMutAct_9fa48("46014") ? "" : (stryCov_9fa48("46014"), 'profileviews'), stryMutAct_9fa48("46015") ? "" : (stryCov_9fa48("46015"), 'reputation'), stryMutAct_9fa48("46016") ? "" : (stryCov_9fa48("46016"), 'postcount'), stryMutAct_9fa48("46017") ? "" : (stryCov_9fa48("46017"), 'topiccount'), stryMutAct_9fa48("46018") ? "" : (stryCov_9fa48("46018"), 'lastposttime'), stryMutAct_9fa48("46019") ? "" : (stryCov_9fa48("46019"), 'banned'), stryMutAct_9fa48("46020") ? "" : (stryCov_9fa48("46020"), 'banned:expire'), stryMutAct_9fa48("46021") ? "" : (stryCov_9fa48("46021"), 'status'), stryMutAct_9fa48("46022") ? "" : (stryCov_9fa48("46022"), 'flags'), stryMutAct_9fa48("46023") ? "" : (stryCov_9fa48("46023"), 'followerCount'), stryMutAct_9fa48("46024") ? "" : (stryCov_9fa48("46024"), 'followingCount'), stryMutAct_9fa48("46025") ? "" : (stryCov_9fa48("46025"), 'cover:url'), stryMutAct_9fa48("46026") ? "" : (stryCov_9fa48("46026"), 'cover:position'), stryMutAct_9fa48("46027") ? "" : (stryCov_9fa48("46027"), 'groupTitle'), stryMutAct_9fa48("46028") ? "" : (stryCov_9fa48("46028"), 'mutedUntil'), stryMutAct_9fa48("46029") ? "" : (stryCov_9fa48("46029"), 'mutedReason')]);
    User.guestData = stryMutAct_9fa48("46030") ? {} : (stryCov_9fa48("46030"), {
      uid: 0,
      username: stryMutAct_9fa48("46031") ? "" : (stryCov_9fa48("46031"), '[[global:guest]]'),
      displayname: stryMutAct_9fa48("46032") ? "" : (stryCov_9fa48("46032"), '[[global:guest]]'),
      userslug: stryMutAct_9fa48("46033") ? "Stryker was here!" : (stryCov_9fa48("46033"), ''),
      fullname: stryMutAct_9fa48("46034") ? "" : (stryCov_9fa48("46034"), '[[global:guest]]'),
      email: stryMutAct_9fa48("46035") ? "Stryker was here!" : (stryCov_9fa48("46035"), ''),
      'icon:text': stryMutAct_9fa48("46036") ? "" : (stryCov_9fa48("46036"), '?'),
      'icon:bgColor': stryMutAct_9fa48("46037") ? "" : (stryCov_9fa48("46037"), '#aaa'),
      groupTitle: stryMutAct_9fa48("46038") ? "Stryker was here!" : (stryCov_9fa48("46038"), ''),
      groupTitleArray: stryMutAct_9fa48("46039") ? ["Stryker was here"] : (stryCov_9fa48("46039"), []),
      status: stryMutAct_9fa48("46040") ? "" : (stryCov_9fa48("46040"), 'offline'),
      reputation: 0,
      'email:confirmed': 0
    });
    User.getUsersFields = async function (uids, fields) {
      if (stryMutAct_9fa48("46041")) {
        {}
      } else {
        stryCov_9fa48("46041");
        if (stryMutAct_9fa48("46044") ? !Array.isArray(uids) && !uids.length : stryMutAct_9fa48("46043") ? false : stryMutAct_9fa48("46042") ? true : (stryCov_9fa48("46042", "46043", "46044"), (stryMutAct_9fa48("46045") ? Array.isArray(uids) : (stryCov_9fa48("46045"), !Array.isArray(uids))) || (stryMutAct_9fa48("46046") ? uids.length : (stryCov_9fa48("46046"), !uids.length)))) {
          if (stryMutAct_9fa48("46047")) {
            {}
          } else {
            stryCov_9fa48("46047");
            return stryMutAct_9fa48("46048") ? ["Stryker was here"] : (stryCov_9fa48("46048"), []);
          }
        }
        uids = uids.map(stryMutAct_9fa48("46049") ? () => undefined : (stryCov_9fa48("46049"), uid => isNaN(uid) ? 0 : parseInt(uid, 10)));
        const fieldsToRemove = stryMutAct_9fa48("46050") ? ["Stryker was here"] : (stryCov_9fa48("46050"), []);
        fields = stryMutAct_9fa48("46051") ? fields : (stryCov_9fa48("46051"), fields.slice());
        ensureRequiredFields(fields, fieldsToRemove);
        const uniqueUids = stryMutAct_9fa48("46052") ? _.uniq(uids) : (stryCov_9fa48("46052"), _.uniq(uids).filter(stryMutAct_9fa48("46053") ? () => undefined : (stryCov_9fa48("46053"), uid => stryMutAct_9fa48("46057") ? uid <= 0 : stryMutAct_9fa48("46056") ? uid >= 0 : stryMutAct_9fa48("46055") ? false : stryMutAct_9fa48("46054") ? true : (stryCov_9fa48("46054", "46055", "46056", "46057"), uid > 0))));
        const results = await plugins.hooks.fire(stryMutAct_9fa48("46058") ? "" : (stryCov_9fa48("46058"), 'filter:user.whitelistFields'), stryMutAct_9fa48("46059") ? {} : (stryCov_9fa48("46059"), {
          uids: uids,
          whitelist: stryMutAct_9fa48("46060") ? fieldWhitelist : (stryCov_9fa48("46060"), fieldWhitelist.slice())
        }));
        if (stryMutAct_9fa48("46063") ? false : stryMutAct_9fa48("46062") ? true : stryMutAct_9fa48("46061") ? fields.length : (stryCov_9fa48("46061", "46062", "46063"), !fields.length)) {
          if (stryMutAct_9fa48("46064")) {
            {}
          } else {
            stryCov_9fa48("46064");
            fields = results.whitelist;
          }
        } else {
          if (stryMutAct_9fa48("46065")) {
            {}
          } else {
            stryCov_9fa48("46065");
            // Never allow password retrieval via this method
            fields = stryMutAct_9fa48("46066") ? fields : (stryCov_9fa48("46066"), fields.filter(stryMutAct_9fa48("46067") ? () => undefined : (stryCov_9fa48("46067"), value => stryMutAct_9fa48("46070") ? value === 'password' : stryMutAct_9fa48("46069") ? false : stryMutAct_9fa48("46068") ? true : (stryCov_9fa48("46068", "46069", "46070"), value !== (stryMutAct_9fa48("46071") ? "" : (stryCov_9fa48("46071"), 'password'))))));
          }
        }
        const users = await db.getObjectsFields(uniqueUids.map(stryMutAct_9fa48("46072") ? () => undefined : (stryCov_9fa48("46072"), uid => stryMutAct_9fa48("46073") ? `` : (stryCov_9fa48("46073"), `user:${uid}`))), fields);
        const result = await plugins.hooks.fire(stryMutAct_9fa48("46074") ? "" : (stryCov_9fa48("46074"), 'filter:user.getFields'), stryMutAct_9fa48("46075") ? {} : (stryCov_9fa48("46075"), {
          uids: uniqueUids,
          users: users,
          fields: fields
        }));
        result.users.forEach((user, index) => {
          if (stryMutAct_9fa48("46076")) {
            {}
          } else {
            stryCov_9fa48("46076");
            if (stryMutAct_9fa48("46079") ? uniqueUids[index] > 0 || !user.uid : stryMutAct_9fa48("46078") ? false : stryMutAct_9fa48("46077") ? true : (stryCov_9fa48("46077", "46078", "46079"), (stryMutAct_9fa48("46082") ? uniqueUids[index] <= 0 : stryMutAct_9fa48("46081") ? uniqueUids[index] >= 0 : stryMutAct_9fa48("46080") ? true : (stryCov_9fa48("46080", "46081", "46082"), uniqueUids[index] > 0)) && (stryMutAct_9fa48("46083") ? user.uid : (stryCov_9fa48("46083"), !user.uid)))) {
              if (stryMutAct_9fa48("46084")) {
                {}
              } else {
                stryCov_9fa48("46084");
                user.oldUid = uniqueUids[index];
              }
            }
          }
        });
        await modifyUserData(result.users, fields, fieldsToRemove);
        return uidsToUsers(uids, uniqueUids, result.users);
      }
    };
    function ensureRequiredFields(fields, fieldsToRemove) {
      if (stryMutAct_9fa48("46085")) {
        {}
      } else {
        stryCov_9fa48("46085");
        function addField(field) {
          if (stryMutAct_9fa48("46086")) {
            {}
          } else {
            stryCov_9fa48("46086");
            if (stryMutAct_9fa48("46089") ? false : stryMutAct_9fa48("46088") ? true : stryMutAct_9fa48("46087") ? fields.includes(field) : (stryCov_9fa48("46087", "46088", "46089"), !fields.includes(field))) {
              if (stryMutAct_9fa48("46090")) {
                {}
              } else {
                stryCov_9fa48("46090");
                fields.push(field);
                fieldsToRemove.push(field);
              }
            }
          }
        }
        if (stryMutAct_9fa48("46093") ? fields.length || !fields.includes('uid') : stryMutAct_9fa48("46092") ? false : stryMutAct_9fa48("46091") ? true : (stryCov_9fa48("46091", "46092", "46093"), fields.length && (stryMutAct_9fa48("46094") ? fields.includes('uid') : (stryCov_9fa48("46094"), !fields.includes(stryMutAct_9fa48("46095") ? "" : (stryCov_9fa48("46095"), 'uid')))))) {
          if (stryMutAct_9fa48("46096")) {
            {}
          } else {
            stryCov_9fa48("46096");
            fields.push(stryMutAct_9fa48("46097") ? "" : (stryCov_9fa48("46097"), 'uid'));
          }
        }
        if (stryMutAct_9fa48("46099") ? false : stryMutAct_9fa48("46098") ? true : (stryCov_9fa48("46098", "46099"), fields.includes(stryMutAct_9fa48("46100") ? "" : (stryCov_9fa48("46100"), 'picture')))) {
          if (stryMutAct_9fa48("46101")) {
            {}
          } else {
            stryCov_9fa48("46101");
            addField(stryMutAct_9fa48("46102") ? "" : (stryCov_9fa48("46102"), 'uploadedpicture'));
          }
        }
        if (stryMutAct_9fa48("46104") ? false : stryMutAct_9fa48("46103") ? true : (stryCov_9fa48("46103", "46104"), fields.includes(stryMutAct_9fa48("46105") ? "" : (stryCov_9fa48("46105"), 'status')))) {
          if (stryMutAct_9fa48("46106")) {
            {}
          } else {
            stryCov_9fa48("46106");
            addField(stryMutAct_9fa48("46107") ? "" : (stryCov_9fa48("46107"), 'lastonline'));
          }
        }
        if (stryMutAct_9fa48("46110") ? fields.includes('banned') || !fields.includes('banned:expire') : stryMutAct_9fa48("46109") ? false : stryMutAct_9fa48("46108") ? true : (stryCov_9fa48("46108", "46109", "46110"), fields.includes(stryMutAct_9fa48("46111") ? "" : (stryCov_9fa48("46111"), 'banned')) && (stryMutAct_9fa48("46112") ? fields.includes('banned:expire') : (stryCov_9fa48("46112"), !fields.includes(stryMutAct_9fa48("46113") ? "" : (stryCov_9fa48("46113"), 'banned:expire')))))) {
          if (stryMutAct_9fa48("46114")) {
            {}
          } else {
            stryCov_9fa48("46114");
            addField(stryMutAct_9fa48("46115") ? "" : (stryCov_9fa48("46115"), 'banned:expire'));
          }
        }
        if (stryMutAct_9fa48("46118") ? fields.includes('username') || !fields.includes('fullname') : stryMutAct_9fa48("46117") ? false : stryMutAct_9fa48("46116") ? true : (stryCov_9fa48("46116", "46117", "46118"), fields.includes(stryMutAct_9fa48("46119") ? "" : (stryCov_9fa48("46119"), 'username')) && (stryMutAct_9fa48("46120") ? fields.includes('fullname') : (stryCov_9fa48("46120"), !fields.includes(stryMutAct_9fa48("46121") ? "" : (stryCov_9fa48("46121"), 'fullname')))))) {
          if (stryMutAct_9fa48("46122")) {
            {}
          } else {
            stryCov_9fa48("46122");
            addField(stryMutAct_9fa48("46123") ? "" : (stryCov_9fa48("46123"), 'fullname'));
          }
        }
      }
    }
    function uidsToUsers(uids, uniqueUids, usersData) {
      if (stryMutAct_9fa48("46124")) {
        {}
      } else {
        stryCov_9fa48("46124");
        const uidToUser = _.zipObject(uniqueUids, usersData);
        const users = uids.map(uid => {
          if (stryMutAct_9fa48("46125")) {
            {}
          } else {
            stryCov_9fa48("46125");
            const user = stryMutAct_9fa48("46128") ? uidToUser[uid] && {
              ...User.guestData
            } : stryMutAct_9fa48("46127") ? false : stryMutAct_9fa48("46126") ? true : (stryCov_9fa48("46126", "46127", "46128"), uidToUser[uid] || (stryMutAct_9fa48("46129") ? {} : (stryCov_9fa48("46129"), {
              ...User.guestData
            })));
            if (stryMutAct_9fa48("46132") ? false : stryMutAct_9fa48("46131") ? true : stryMutAct_9fa48("46130") ? parseInt(user.uid, 10) : (stryCov_9fa48("46130", "46131", "46132"), !parseInt(user.uid, 10))) {
              if (stryMutAct_9fa48("46133")) {
                {}
              } else {
                stryCov_9fa48("46133");
                user.username = (stryMutAct_9fa48("46136") ? user.hasOwnProperty('oldUid') || parseInt(user.oldUid, 10) : stryMutAct_9fa48("46135") ? false : stryMutAct_9fa48("46134") ? true : (stryCov_9fa48("46134", "46135", "46136"), user.hasOwnProperty(stryMutAct_9fa48("46137") ? "" : (stryCov_9fa48("46137"), 'oldUid')) && parseInt(user.oldUid, 10))) ? stryMutAct_9fa48("46138") ? "" : (stryCov_9fa48("46138"), '[[global:former_user]]') : stryMutAct_9fa48("46139") ? "" : (stryCov_9fa48("46139"), '[[global:guest]]');
                user.displayname = user.username;
              }
            }
            return user;
          }
        });
        return users;
      }
    }
    User.getUserField = async function (uid, field) {
      if (stryMutAct_9fa48("46140")) {
        {}
      } else {
        stryCov_9fa48("46140");
        const user = await User.getUserFields(uid, stryMutAct_9fa48("46141") ? [] : (stryCov_9fa48("46141"), [field]));
        return user ? user[field] : null;
      }
    };
    User.getUserFields = async function (uid, fields) {
      if (stryMutAct_9fa48("46142")) {
        {}
      } else {
        stryCov_9fa48("46142");
        const users = await User.getUsersFields(stryMutAct_9fa48("46143") ? [] : (stryCov_9fa48("46143"), [uid]), fields);
        return users ? users[0] : null;
      }
    };
    User.getUserData = async function (uid) {
      if (stryMutAct_9fa48("46144")) {
        {}
      } else {
        stryCov_9fa48("46144");
        const users = await User.getUsersData(stryMutAct_9fa48("46145") ? [] : (stryCov_9fa48("46145"), [uid]));
        return users ? users[0] : null;
      }
    };
    User.getUsersData = async function (uids) {
      if (stryMutAct_9fa48("46146")) {
        {}
      } else {
        stryCov_9fa48("46146");
        return await User.getUsersFields(uids, stryMutAct_9fa48("46147") ? ["Stryker was here"] : (stryCov_9fa48("46147"), []));
      }
    };
    User.hidePrivateData = async function (users, callerUID) {
      if (stryMutAct_9fa48("46148")) {
        {}
      } else {
        stryCov_9fa48("46148");
        let single = stryMutAct_9fa48("46149") ? true : (stryCov_9fa48("46149"), false);
        if (stryMutAct_9fa48("46152") ? false : stryMutAct_9fa48("46151") ? true : stryMutAct_9fa48("46150") ? Array.isArray(users) : (stryCov_9fa48("46150", "46151", "46152"), !Array.isArray(users))) {
          if (stryMutAct_9fa48("46153")) {
            {}
          } else {
            stryCov_9fa48("46153");
            users = stryMutAct_9fa48("46154") ? [] : (stryCov_9fa48("46154"), [users]);
            single = stryMutAct_9fa48("46155") ? false : (stryCov_9fa48("46155"), true);
          }
        }
        const [userSettings, isAdmin, isGlobalModerator] = await Promise.all(stryMutAct_9fa48("46156") ? [] : (stryCov_9fa48("46156"), [User.getMultipleUserSettings(users.map(stryMutAct_9fa48("46157") ? () => undefined : (stryCov_9fa48("46157"), user => user.uid))), User.isAdministrator(callerUID), User.isGlobalModerator(callerUID)]));
        users = await Promise.all(users.map(async (userData, idx) => {
          if (stryMutAct_9fa48("46158")) {
            {}
          } else {
            stryCov_9fa48("46158");
            const _userData = stryMutAct_9fa48("46159") ? {} : (stryCov_9fa48("46159"), {
              ...userData
            });
            const isSelf = stryMutAct_9fa48("46162") ? parseInt(callerUID, 10) !== parseInt(_userData.uid, 10) : stryMutAct_9fa48("46161") ? false : stryMutAct_9fa48("46160") ? true : (stryCov_9fa48("46160", "46161", "46162"), parseInt(callerUID, 10) === parseInt(_userData.uid, 10));
            const privilegedOrSelf = stryMutAct_9fa48("46165") ? (isAdmin || isGlobalModerator) && isSelf : stryMutAct_9fa48("46164") ? false : stryMutAct_9fa48("46163") ? true : (stryCov_9fa48("46163", "46164", "46165"), (stryMutAct_9fa48("46167") ? isAdmin && isGlobalModerator : stryMutAct_9fa48("46166") ? false : (stryCov_9fa48("46166", "46167"), isAdmin || isGlobalModerator)) || isSelf);
            if (stryMutAct_9fa48("46170") ? !privilegedOrSelf || !userSettings[idx].showemail || meta.config.hideEmail : stryMutAct_9fa48("46169") ? false : stryMutAct_9fa48("46168") ? true : (stryCov_9fa48("46168", "46169", "46170"), (stryMutAct_9fa48("46171") ? privilegedOrSelf : (stryCov_9fa48("46171"), !privilegedOrSelf)) && (stryMutAct_9fa48("46173") ? !userSettings[idx].showemail && meta.config.hideEmail : stryMutAct_9fa48("46172") ? true : (stryCov_9fa48("46172", "46173"), (stryMutAct_9fa48("46174") ? userSettings[idx].showemail : (stryCov_9fa48("46174"), !userSettings[idx].showemail)) || meta.config.hideEmail)))) {
              if (stryMutAct_9fa48("46175")) {
                {}
              } else {
                stryCov_9fa48("46175");
                _userData.email = stryMutAct_9fa48("46176") ? "Stryker was here!" : (stryCov_9fa48("46176"), '');
              }
            }
            if (stryMutAct_9fa48("46179") ? !privilegedOrSelf || !userSettings[idx].showfullname || meta.config.hideFullname : stryMutAct_9fa48("46178") ? false : stryMutAct_9fa48("46177") ? true : (stryCov_9fa48("46177", "46178", "46179"), (stryMutAct_9fa48("46180") ? privilegedOrSelf : (stryCov_9fa48("46180"), !privilegedOrSelf)) && (stryMutAct_9fa48("46182") ? !userSettings[idx].showfullname && meta.config.hideFullname : stryMutAct_9fa48("46181") ? true : (stryCov_9fa48("46181", "46182"), (stryMutAct_9fa48("46183") ? userSettings[idx].showfullname : (stryCov_9fa48("46183"), !userSettings[idx].showfullname)) || meta.config.hideFullname)))) {
              if (stryMutAct_9fa48("46184")) {
                {}
              } else {
                stryCov_9fa48("46184");
                _userData.fullname = stryMutAct_9fa48("46185") ? "Stryker was here!" : (stryCov_9fa48("46185"), '');
              }
            }
            return _userData;
          }
        }));
        return single ? users.pop() : users;
      }
    };
    async function modifyUserData(users, requestedFields, fieldsToRemove) {
      if (stryMutAct_9fa48("46186")) {
        {}
      } else {
        stryCov_9fa48("46186");
        let uidToSettings = {};
        if (stryMutAct_9fa48("46188") ? false : stryMutAct_9fa48("46187") ? true : (stryCov_9fa48("46187", "46188"), meta.config.showFullnameAsDisplayName)) {
          if (stryMutAct_9fa48("46189")) {
            {}
          } else {
            stryCov_9fa48("46189");
            const uids = users.map(stryMutAct_9fa48("46190") ? () => undefined : (stryCov_9fa48("46190"), user => user.uid));
            uidToSettings = _.zipObject(uids, await db.getObjectsFields(uids.map(stryMutAct_9fa48("46191") ? () => undefined : (stryCov_9fa48("46191"), uid => stryMutAct_9fa48("46192") ? `` : (stryCov_9fa48("46192"), `user:${uid}:settings`))), stryMutAct_9fa48("46193") ? [] : (stryCov_9fa48("46193"), [stryMutAct_9fa48("46194") ? "" : (stryCov_9fa48("46194"), 'showfullname')])));
          }
        }
        await Promise.all(users.map(async user => {
          if (stryMutAct_9fa48("46195")) {
            {}
          } else {
            stryCov_9fa48("46195");
            if (stryMutAct_9fa48("46198") ? false : stryMutAct_9fa48("46197") ? true : stryMutAct_9fa48("46196") ? user : (stryCov_9fa48("46196", "46197", "46198"), !user)) {
              if (stryMutAct_9fa48("46199")) {
                {}
              } else {
                stryCov_9fa48("46199");
                return;
              }
            }
            db.parseIntFields(user, intFields, requestedFields);
            if (stryMutAct_9fa48("46201") ? false : stryMutAct_9fa48("46200") ? true : (stryCov_9fa48("46200", "46201"), user.hasOwnProperty(stryMutAct_9fa48("46202") ? "" : (stryCov_9fa48("46202"), 'username')))) {
              if (stryMutAct_9fa48("46203")) {
                {}
              } else {
                stryCov_9fa48("46203");
                parseDisplayName(user, uidToSettings);
                user.username = validator.escape(user.username ? user.username.toString() : stryMutAct_9fa48("46204") ? "Stryker was here!" : (stryCov_9fa48("46204"), ''));
              }
            }
            if (stryMutAct_9fa48("46206") ? false : stryMutAct_9fa48("46205") ? true : (stryCov_9fa48("46205", "46206"), user.hasOwnProperty(stryMutAct_9fa48("46207") ? "" : (stryCov_9fa48("46207"), 'email')))) {
              if (stryMutAct_9fa48("46208")) {
                {}
              } else {
                stryCov_9fa48("46208");
                user.email = validator.escape(user.email ? user.email.toString() : stryMutAct_9fa48("46209") ? "Stryker was here!" : (stryCov_9fa48("46209"), ''));
              }
            }
            if (stryMutAct_9fa48("46212") ? false : stryMutAct_9fa48("46211") ? true : stryMutAct_9fa48("46210") ? parseInt(user.uid, 10) : (stryCov_9fa48("46210", "46211", "46212"), !parseInt(user.uid, 10))) {
              if (stryMutAct_9fa48("46213")) {
                {}
              } else {
                stryCov_9fa48("46213");
                for (const [key, value] of Object.entries(User.guestData)) {
                  if (stryMutAct_9fa48("46214")) {
                    {}
                  } else {
                    stryCov_9fa48("46214");
                    user[key] = value;
                  }
                }
                user.picture = User.getDefaultAvatar();
              }
            }
            if (stryMutAct_9fa48("46216") ? false : stryMutAct_9fa48("46215") ? true : (stryCov_9fa48("46215", "46216"), user.hasOwnProperty(stryMutAct_9fa48("46217") ? "" : (stryCov_9fa48("46217"), 'groupTitle')))) {
              if (stryMutAct_9fa48("46218")) {
                {}
              } else {
                stryCov_9fa48("46218");
                parseGroupTitle(user);
              }
            }
            if (stryMutAct_9fa48("46221") ? user.picture || user.picture === user.uploadedpicture : stryMutAct_9fa48("46220") ? false : stryMutAct_9fa48("46219") ? true : (stryCov_9fa48("46219", "46220", "46221"), user.picture && (stryMutAct_9fa48("46223") ? user.picture !== user.uploadedpicture : stryMutAct_9fa48("46222") ? true : (stryCov_9fa48("46222", "46223"), user.picture === user.uploadedpicture)))) {
              if (stryMutAct_9fa48("46224")) {
                {}
              } else {
                stryCov_9fa48("46224");
                user.uploadedpicture = (stryMutAct_9fa48("46225") ? user.picture.endsWith('http') : (stryCov_9fa48("46225"), user.picture.startsWith(stryMutAct_9fa48("46226") ? "" : (stryCov_9fa48("46226"), 'http')))) ? user.picture : stryMutAct_9fa48("46227") ? relative_path - user.picture : (stryCov_9fa48("46227"), relative_path + user.picture);
                user.picture = user.uploadedpicture;
              }
            } else if (stryMutAct_9fa48("46229") ? false : stryMutAct_9fa48("46228") ? true : (stryCov_9fa48("46228", "46229"), user.uploadedpicture)) {
              if (stryMutAct_9fa48("46230")) {
                {}
              } else {
                stryCov_9fa48("46230");
                user.uploadedpicture = (stryMutAct_9fa48("46231") ? user.uploadedpicture.endsWith('http') : (stryCov_9fa48("46231"), user.uploadedpicture.startsWith(stryMutAct_9fa48("46232") ? "" : (stryCov_9fa48("46232"), 'http')))) ? user.uploadedpicture : stryMutAct_9fa48("46233") ? relative_path - user.uploadedpicture : (stryCov_9fa48("46233"), relative_path + user.uploadedpicture);
              }
            }
            if (stryMutAct_9fa48("46236") ? meta.config.defaultAvatar || !user.picture : stryMutAct_9fa48("46235") ? false : stryMutAct_9fa48("46234") ? true : (stryCov_9fa48("46234", "46235", "46236"), meta.config.defaultAvatar && (stryMutAct_9fa48("46237") ? user.picture : (stryCov_9fa48("46237"), !user.picture)))) {
              if (stryMutAct_9fa48("46238")) {
                {}
              } else {
                stryCov_9fa48("46238");
                user.picture = User.getDefaultAvatar();
              }
            }
            if (stryMutAct_9fa48("46241") ? user.hasOwnProperty('status') || user.hasOwnProperty('lastonline') : stryMutAct_9fa48("46240") ? false : stryMutAct_9fa48("46239") ? true : (stryCov_9fa48("46239", "46240", "46241"), user.hasOwnProperty(stryMutAct_9fa48("46242") ? "" : (stryCov_9fa48("46242"), 'status')) && user.hasOwnProperty(stryMutAct_9fa48("46243") ? "" : (stryCov_9fa48("46243"), 'lastonline')))) {
              if (stryMutAct_9fa48("46244")) {
                {}
              } else {
                stryCov_9fa48("46244");
                user.status = User.getStatus(user);
              }
            }
            for (let i = 0; stryMutAct_9fa48("46247") ? i >= fieldsToRemove.length : stryMutAct_9fa48("46246") ? i <= fieldsToRemove.length : stryMutAct_9fa48("46245") ? false : (stryCov_9fa48("46245", "46246", "46247"), i < fieldsToRemove.length); stryMutAct_9fa48("46248") ? i -= 1 : (stryCov_9fa48("46248"), i += 1)) {
              if (stryMutAct_9fa48("46249")) {
                {}
              } else {
                stryCov_9fa48("46249");
                user[fieldsToRemove[i]] = undefined;
              }
            }

            // User Icons
            if (stryMutAct_9fa48("46252") ? requestedFields.includes('picture') && user.username && parseInt(user.uid, 10) || !meta.config.defaultAvatar : stryMutAct_9fa48("46251") ? false : stryMutAct_9fa48("46250") ? true : (stryCov_9fa48("46250", "46251", "46252"), (stryMutAct_9fa48("46254") ? requestedFields.includes('picture') && user.username || parseInt(user.uid, 10) : stryMutAct_9fa48("46253") ? true : (stryCov_9fa48("46253", "46254"), (stryMutAct_9fa48("46256") ? requestedFields.includes('picture') || user.username : stryMutAct_9fa48("46255") ? true : (stryCov_9fa48("46255", "46256"), requestedFields.includes(stryMutAct_9fa48("46257") ? "" : (stryCov_9fa48("46257"), 'picture')) && user.username)) && parseInt(user.uid, 10))) && (stryMutAct_9fa48("46258") ? meta.config.defaultAvatar : (stryCov_9fa48("46258"), !meta.config.defaultAvatar)))) {
              if (stryMutAct_9fa48("46259")) {
                {}
              } else {
                stryCov_9fa48("46259");
                const iconBackgrounds = await User.getIconBackgrounds(user.uid);
                let bgColor = await User.getUserField(user.uid, stryMutAct_9fa48("46260") ? "" : (stryCov_9fa48("46260"), 'icon:bgColor'));
                if (stryMutAct_9fa48("46263") ? false : stryMutAct_9fa48("46262") ? true : stryMutAct_9fa48("46261") ? iconBackgrounds.includes(bgColor) : (stryCov_9fa48("46261", "46262", "46263"), !iconBackgrounds.includes(bgColor))) {
                  if (stryMutAct_9fa48("46264")) {
                    {}
                  } else {
                    stryCov_9fa48("46264");
                    bgColor = Array.prototype.reduce.call(user.username, stryMutAct_9fa48("46265") ? () => undefined : (stryCov_9fa48("46265"), (cur, next) => stryMutAct_9fa48("46266") ? cur - next.charCodeAt() : (stryCov_9fa48("46266"), cur + next.charCodeAt())), 0);
                    bgColor = iconBackgrounds[stryMutAct_9fa48("46267") ? bgColor * iconBackgrounds.length : (stryCov_9fa48("46267"), bgColor % iconBackgrounds.length)];
                  }
                }
                user[stryMutAct_9fa48("46268") ? "" : (stryCov_9fa48("46268"), 'icon:text')] = stryMutAct_9fa48("46269") ? (user.username[0] || '').toLowerCase() : (stryCov_9fa48("46269"), (stryMutAct_9fa48("46272") ? user.username[0] && '' : stryMutAct_9fa48("46271") ? false : stryMutAct_9fa48("46270") ? true : (stryCov_9fa48("46270", "46271", "46272"), user.username[0] || (stryMutAct_9fa48("46273") ? "Stryker was here!" : (stryCov_9fa48("46273"), '')))).toUpperCase());
                user[stryMutAct_9fa48("46274") ? "" : (stryCov_9fa48("46274"), 'icon:bgColor')] = bgColor;
              }
            }
            if (stryMutAct_9fa48("46276") ? false : stryMutAct_9fa48("46275") ? true : (stryCov_9fa48("46275", "46276"), user.hasOwnProperty(stryMutAct_9fa48("46277") ? "" : (stryCov_9fa48("46277"), 'joindate')))) {
              if (stryMutAct_9fa48("46278")) {
                {}
              } else {
                stryCov_9fa48("46278");
                user.joindateISO = utils.toISOString(user.joindate);
              }
            }
            if (stryMutAct_9fa48("46280") ? false : stryMutAct_9fa48("46279") ? true : (stryCov_9fa48("46279", "46280"), user.hasOwnProperty(stryMutAct_9fa48("46281") ? "" : (stryCov_9fa48("46281"), 'lastonline')))) {
              if (stryMutAct_9fa48("46282")) {
                {}
              } else {
                stryCov_9fa48("46282");
                user.lastonlineISO = stryMutAct_9fa48("46285") ? utils.toISOString(user.lastonline) && user.joindateISO : stryMutAct_9fa48("46284") ? false : stryMutAct_9fa48("46283") ? true : (stryCov_9fa48("46283", "46284", "46285"), utils.toISOString(user.lastonline) || user.joindateISO);
              }
            }
            if (stryMutAct_9fa48("46288") ? user.hasOwnProperty('banned') && user.hasOwnProperty('banned:expire') : stryMutAct_9fa48("46287") ? false : stryMutAct_9fa48("46286") ? true : (stryCov_9fa48("46286", "46287", "46288"), user.hasOwnProperty(stryMutAct_9fa48("46289") ? "" : (stryCov_9fa48("46289"), 'banned')) || user.hasOwnProperty(stryMutAct_9fa48("46290") ? "" : (stryCov_9fa48("46290"), 'banned:expire')))) {
              if (stryMutAct_9fa48("46291")) {
                {}
              } else {
                stryCov_9fa48("46291");
                const result = await User.bans.calcExpiredFromUserData(user);
                user.banned = result.banned;
                const unban = stryMutAct_9fa48("46294") ? result.banned || result.banExpired : stryMutAct_9fa48("46293") ? false : stryMutAct_9fa48("46292") ? true : (stryCov_9fa48("46292", "46293", "46294"), result.banned && result.banExpired);
                user.banned_until = unban ? 0 : user[stryMutAct_9fa48("46295") ? "" : (stryCov_9fa48("46295"), 'banned:expire')];
                user.banned_until_readable = (stryMutAct_9fa48("46298") ? user.banned_until || !unban : stryMutAct_9fa48("46297") ? false : stryMutAct_9fa48("46296") ? true : (stryCov_9fa48("46296", "46297", "46298"), user.banned_until && (stryMutAct_9fa48("46299") ? unban : (stryCov_9fa48("46299"), !unban)))) ? utils.toISOString(user.banned_until) : stryMutAct_9fa48("46300") ? "" : (stryCov_9fa48("46300"), 'Not Banned');
                if (stryMutAct_9fa48("46302") ? false : stryMutAct_9fa48("46301") ? true : (stryCov_9fa48("46301", "46302"), unban)) {
                  if (stryMutAct_9fa48("46303")) {
                    {}
                  } else {
                    stryCov_9fa48("46303");
                    await User.bans.unban(user.uid);
                    user.banned = stryMutAct_9fa48("46304") ? true : (stryCov_9fa48("46304"), false);
                  }
                }
              }
            }
            if (stryMutAct_9fa48("46306") ? false : stryMutAct_9fa48("46305") ? true : (stryCov_9fa48("46305", "46306"), user.hasOwnProperty(stryMutAct_9fa48("46307") ? "" : (stryCov_9fa48("46307"), 'mutedUntil')))) {
              if (stryMutAct_9fa48("46308")) {
                {}
              } else {
                stryCov_9fa48("46308");
                user.muted = stryMutAct_9fa48("46312") ? user.mutedUntil <= Date.now() : stryMutAct_9fa48("46311") ? user.mutedUntil >= Date.now() : stryMutAct_9fa48("46310") ? false : stryMutAct_9fa48("46309") ? true : (stryCov_9fa48("46309", "46310", "46311", "46312"), user.mutedUntil > Date.now());
              }
            }
          }
        }));
        return await plugins.hooks.fire(stryMutAct_9fa48("46313") ? "" : (stryCov_9fa48("46313"), 'filter:users.get'), users);
      }
    }
    function parseDisplayName(user, uidToSettings) {
      if (stryMutAct_9fa48("46314")) {
        {}
      } else {
        stryCov_9fa48("46314");
        let showfullname = stryMutAct_9fa48("46317") ? parseInt(meta.config.showfullname, 10) !== 1 : stryMutAct_9fa48("46316") ? false : stryMutAct_9fa48("46315") ? true : (stryCov_9fa48("46315", "46316", "46317"), parseInt(meta.config.showfullname, 10) === 1);
        if (stryMutAct_9fa48("46319") ? false : stryMutAct_9fa48("46318") ? true : (stryCov_9fa48("46318", "46319"), uidToSettings[user.uid])) {
          if (stryMutAct_9fa48("46320")) {
            {}
          } else {
            stryCov_9fa48("46320");
            if (stryMutAct_9fa48("46323") ? parseInt(uidToSettings[user.uid].showfullname, 10) !== 0 : stryMutAct_9fa48("46322") ? false : stryMutAct_9fa48("46321") ? true : (stryCov_9fa48("46321", "46322", "46323"), parseInt(uidToSettings[user.uid].showfullname, 10) === 0)) {
              if (stryMutAct_9fa48("46324")) {
                {}
              } else {
                stryCov_9fa48("46324");
                showfullname = stryMutAct_9fa48("46325") ? true : (stryCov_9fa48("46325"), false);
              }
            } else if (stryMutAct_9fa48("46328") ? parseInt(uidToSettings[user.uid].showfullname, 10) !== 1 : stryMutAct_9fa48("46327") ? false : stryMutAct_9fa48("46326") ? true : (stryCov_9fa48("46326", "46327", "46328"), parseInt(uidToSettings[user.uid].showfullname, 10) === 1)) {
              if (stryMutAct_9fa48("46329")) {
                {}
              } else {
                stryCov_9fa48("46329");
                showfullname = stryMutAct_9fa48("46330") ? false : (stryCov_9fa48("46330"), true);
              }
            }
          }
        }
        user.displayname = validator.escape(String((stryMutAct_9fa48("46333") ? meta.config.showFullnameAsDisplayName && showfullname || user.fullname : stryMutAct_9fa48("46332") ? false : stryMutAct_9fa48("46331") ? true : (stryCov_9fa48("46331", "46332", "46333"), (stryMutAct_9fa48("46335") ? meta.config.showFullnameAsDisplayName || showfullname : stryMutAct_9fa48("46334") ? true : (stryCov_9fa48("46334", "46335"), meta.config.showFullnameAsDisplayName && showfullname)) && user.fullname)) ? user.fullname : user.username));
      }
    }
    function parseGroupTitle(user) {
      if (stryMutAct_9fa48("46336")) {
        {}
      } else {
        stryCov_9fa48("46336");
        try {
          if (stryMutAct_9fa48("46337")) {
            {}
          } else {
            stryCov_9fa48("46337");
            user.groupTitleArray = JSON.parse(user.groupTitle);
          }
        } catch (err) {
          if (stryMutAct_9fa48("46338")) {
            {}
          } else {
            stryCov_9fa48("46338");
            if (stryMutAct_9fa48("46340") ? false : stryMutAct_9fa48("46339") ? true : (stryCov_9fa48("46339", "46340"), user.groupTitle)) {
              if (stryMutAct_9fa48("46341")) {
                {}
              } else {
                stryCov_9fa48("46341");
                user.groupTitleArray = stryMutAct_9fa48("46342") ? [] : (stryCov_9fa48("46342"), [user.groupTitle]);
              }
            } else {
              if (stryMutAct_9fa48("46343")) {
                {}
              } else {
                stryCov_9fa48("46343");
                user.groupTitle = stryMutAct_9fa48("46344") ? "Stryker was here!" : (stryCov_9fa48("46344"), '');
                user.groupTitleArray = stryMutAct_9fa48("46345") ? ["Stryker was here"] : (stryCov_9fa48("46345"), []);
              }
            }
          }
        }
        if (stryMutAct_9fa48("46348") ? false : stryMutAct_9fa48("46347") ? true : stryMutAct_9fa48("46346") ? Array.isArray(user.groupTitleArray) : (stryCov_9fa48("46346", "46347", "46348"), !Array.isArray(user.groupTitleArray))) {
          if (stryMutAct_9fa48("46349")) {
            {}
          } else {
            stryCov_9fa48("46349");
            if (stryMutAct_9fa48("46351") ? false : stryMutAct_9fa48("46350") ? true : (stryCov_9fa48("46350", "46351"), user.groupTitleArray)) {
              if (stryMutAct_9fa48("46352")) {
                {}
              } else {
                stryCov_9fa48("46352");
                user.groupTitleArray = stryMutAct_9fa48("46353") ? [] : (stryCov_9fa48("46353"), [user.groupTitleArray]);
              }
            } else {
              if (stryMutAct_9fa48("46354")) {
                {}
              } else {
                stryCov_9fa48("46354");
                user.groupTitleArray = stryMutAct_9fa48("46355") ? ["Stryker was here"] : (stryCov_9fa48("46355"), []);
              }
            }
          }
        }
        if (stryMutAct_9fa48("46358") ? !meta.config.allowMultipleBadges || user.groupTitleArray.length : stryMutAct_9fa48("46357") ? false : stryMutAct_9fa48("46356") ? true : (stryCov_9fa48("46356", "46357", "46358"), (stryMutAct_9fa48("46359") ? meta.config.allowMultipleBadges : (stryCov_9fa48("46359"), !meta.config.allowMultipleBadges)) && user.groupTitleArray.length)) {
          if (stryMutAct_9fa48("46360")) {
            {}
          } else {
            stryCov_9fa48("46360");
            user.groupTitleArray = stryMutAct_9fa48("46361") ? [] : (stryCov_9fa48("46361"), [user.groupTitleArray[0]]);
          }
        }
      }
    }
    User.getIconBackgrounds = async (uid = 0) => {
      if (stryMutAct_9fa48("46362")) {
        {}
      } else {
        stryCov_9fa48("46362");
        let iconBackgrounds = stryMutAct_9fa48("46363") ? [] : (stryCov_9fa48("46363"), [stryMutAct_9fa48("46364") ? "" : (stryCov_9fa48("46364"), '#f44336'), stryMutAct_9fa48("46365") ? "" : (stryCov_9fa48("46365"), '#e91e63'), stryMutAct_9fa48("46366") ? "" : (stryCov_9fa48("46366"), '#9c27b0'), stryMutAct_9fa48("46367") ? "" : (stryCov_9fa48("46367"), '#673ab7'), stryMutAct_9fa48("46368") ? "" : (stryCov_9fa48("46368"), '#3f51b5'), stryMutAct_9fa48("46369") ? "" : (stryCov_9fa48("46369"), '#2196f3'), stryMutAct_9fa48("46370") ? "" : (stryCov_9fa48("46370"), '#009688'), stryMutAct_9fa48("46371") ? "" : (stryCov_9fa48("46371"), '#1b5e20'), stryMutAct_9fa48("46372") ? "" : (stryCov_9fa48("46372"), '#33691e'), stryMutAct_9fa48("46373") ? "" : (stryCov_9fa48("46373"), '#827717'), stryMutAct_9fa48("46374") ? "" : (stryCov_9fa48("46374"), '#e65100'), stryMutAct_9fa48("46375") ? "" : (stryCov_9fa48("46375"), '#ff5722'), stryMutAct_9fa48("46376") ? "" : (stryCov_9fa48("46376"), '#795548'), stryMutAct_9fa48("46377") ? "" : (stryCov_9fa48("46377"), '#607d8b')]);
        ({
          iconBackgrounds
        } = await plugins.hooks.fire(stryMutAct_9fa48("46378") ? "" : (stryCov_9fa48("46378"), 'filter:user.iconBackgrounds'), stryMutAct_9fa48("46379") ? {} : (stryCov_9fa48("46379"), {
          uid,
          iconBackgrounds
        })));
        return iconBackgrounds;
      }
    };
    User.getDefaultAvatar = function () {
      if (stryMutAct_9fa48("46380")) {
        {}
      } else {
        stryCov_9fa48("46380");
        if (stryMutAct_9fa48("46383") ? false : stryMutAct_9fa48("46382") ? true : stryMutAct_9fa48("46381") ? meta.config.defaultAvatar : (stryCov_9fa48("46381", "46382", "46383"), !meta.config.defaultAvatar)) {
          if (stryMutAct_9fa48("46384")) {
            {}
          } else {
            stryCov_9fa48("46384");
            return stryMutAct_9fa48("46385") ? "Stryker was here!" : (stryCov_9fa48("46385"), '');
          }
        }
        return (stryMutAct_9fa48("46386") ? meta.config.defaultAvatar.endsWith('http') : (stryCov_9fa48("46386"), meta.config.defaultAvatar.startsWith(stryMutAct_9fa48("46387") ? "" : (stryCov_9fa48("46387"), 'http')))) ? meta.config.defaultAvatar : stryMutAct_9fa48("46388") ? relative_path - meta.config.defaultAvatar : (stryCov_9fa48("46388"), relative_path + meta.config.defaultAvatar);
      }
    };
    User.setUserField = async function (uid, field, value) {
      if (stryMutAct_9fa48("46389")) {
        {}
      } else {
        stryCov_9fa48("46389");
        await User.setUserFields(uid, stryMutAct_9fa48("46390") ? {} : (stryCov_9fa48("46390"), {
          [field]: value
        }));
      }
    };
    User.setUserFields = async function (uid, data) {
      if (stryMutAct_9fa48("46391")) {
        {}
      } else {
        stryCov_9fa48("46391");
        await db.setObject(stryMutAct_9fa48("46392") ? `` : (stryCov_9fa48("46392"), `user:${uid}`), data);
        for (const [field, value] of Object.entries(data)) {
          if (stryMutAct_9fa48("46393")) {
            {}
          } else {
            stryCov_9fa48("46393");
            plugins.hooks.fire(stryMutAct_9fa48("46394") ? "" : (stryCov_9fa48("46394"), 'action:user.set'), stryMutAct_9fa48("46395") ? {} : (stryCov_9fa48("46395"), {
              uid,
              field,
              value,
              type: stryMutAct_9fa48("46396") ? "" : (stryCov_9fa48("46396"), 'set')
            }));
          }
        }
      }
    };
    User.incrementUserFieldBy = async function (uid, field, value) {
      if (stryMutAct_9fa48("46397")) {
        {}
      } else {
        stryCov_9fa48("46397");
        return await incrDecrUserFieldBy(uid, field, value, stryMutAct_9fa48("46398") ? "" : (stryCov_9fa48("46398"), 'increment'));
      }
    };
    User.decrementUserFieldBy = async function (uid, field, value) {
      if (stryMutAct_9fa48("46399")) {
        {}
      } else {
        stryCov_9fa48("46399");
        return await incrDecrUserFieldBy(uid, field, stryMutAct_9fa48("46400") ? +value : (stryCov_9fa48("46400"), -value), stryMutAct_9fa48("46401") ? "" : (stryCov_9fa48("46401"), 'decrement'));
      }
    };
    async function incrDecrUserFieldBy(uid, field, value, type) {
      if (stryMutAct_9fa48("46402")) {
        {}
      } else {
        stryCov_9fa48("46402");
        const newValue = await db.incrObjectFieldBy(stryMutAct_9fa48("46403") ? `` : (stryCov_9fa48("46403"), `user:${uid}`), field, value);
        plugins.hooks.fire(stryMutAct_9fa48("46404") ? "" : (stryCov_9fa48("46404"), 'action:user.set'), stryMutAct_9fa48("46405") ? {} : (stryCov_9fa48("46405"), {
          uid: uid,
          field: field,
          value: newValue,
          type: type
        }));
        return newValue;
      }
    }
  }
};