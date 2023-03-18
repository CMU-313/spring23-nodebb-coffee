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
const async = require('async');
const validator = require('validator');
const _ = require('lodash');
const db = require('../database');
const user = require('../user');
const topics = require('../topics');
const groups = require('../groups');
const meta = require('../meta');
const plugins = require('../plugins');
const privileges = require('../privileges');
module.exports = function (Posts) {
  if (stryMutAct_9fa48("30242")) {
    {}
  } else {
    stryCov_9fa48("30242");
    Posts.getUserInfoForPosts = async function (uids, uid) {
      if (stryMutAct_9fa48("30243")) {
        {}
      } else {
        stryCov_9fa48("30243");
        const [userData, userSettings, signatureUids] = await Promise.all(stryMutAct_9fa48("30244") ? [] : (stryCov_9fa48("30244"), [getUserData(uids, uid), user.getMultipleUserSettings(uids), privileges.global.filterUids(stryMutAct_9fa48("30245") ? "" : (stryCov_9fa48("30245"), 'signature'), uids)]));
        const uidsSignatureSet = new Set(signatureUids.map(stryMutAct_9fa48("30246") ? () => undefined : (stryCov_9fa48("30246"), uid => parseInt(uid, 10))));
        const groupsMap = await getGroupsMap(userData);
        userData.forEach((userData, index) => {
          if (stryMutAct_9fa48("30247")) {
            {}
          } else {
            stryCov_9fa48("30247");
            userData.signature = validator.escape(String(stryMutAct_9fa48("30250") ? userData.signature && '' : stryMutAct_9fa48("30249") ? false : stryMutAct_9fa48("30248") ? true : (stryCov_9fa48("30248", "30249", "30250"), userData.signature || (stryMutAct_9fa48("30251") ? "Stryker was here!" : (stryCov_9fa48("30251"), '')))));
            userData.fullname = userSettings[index].showfullname ? validator.escape(String(stryMutAct_9fa48("30254") ? userData.fullname && '' : stryMutAct_9fa48("30253") ? false : stryMutAct_9fa48("30252") ? true : (stryCov_9fa48("30252", "30253", "30254"), userData.fullname || (stryMutAct_9fa48("30255") ? "Stryker was here!" : (stryCov_9fa48("30255"), ''))))) : undefined;
            userData.selectedGroups = stryMutAct_9fa48("30256") ? ["Stryker was here"] : (stryCov_9fa48("30256"), []);
            if (stryMutAct_9fa48("30258") ? false : stryMutAct_9fa48("30257") ? true : (stryCov_9fa48("30257", "30258"), meta.config.hideFullname)) {
              if (stryMutAct_9fa48("30259")) {
                {}
              } else {
                stryCov_9fa48("30259");
                userData.fullname = undefined;
              }
            }
          }
        });
        const result = await Promise.all(userData.map(async userData => {
          if (stryMutAct_9fa48("30260")) {
            {}
          } else {
            stryCov_9fa48("30260");
            const [isMemberOfGroups, signature, customProfileInfo] = await Promise.all(stryMutAct_9fa48("30261") ? [] : (stryCov_9fa48("30261"), [checkGroupMembership(userData.uid, userData.groupTitleArray), parseSignature(userData, uid, uidsSignatureSet), plugins.hooks.fire(stryMutAct_9fa48("30262") ? "" : (stryCov_9fa48("30262"), 'filter:posts.custom_profile_info'), stryMutAct_9fa48("30263") ? {} : (stryCov_9fa48("30263"), {
              profile: stryMutAct_9fa48("30264") ? ["Stryker was here"] : (stryCov_9fa48("30264"), []),
              uid: userData.uid
            }))]));
            if (stryMutAct_9fa48("30267") ? isMemberOfGroups || userData.groupTitleArray : stryMutAct_9fa48("30266") ? false : stryMutAct_9fa48("30265") ? true : (stryCov_9fa48("30265", "30266", "30267"), isMemberOfGroups && userData.groupTitleArray)) {
              if (stryMutAct_9fa48("30268")) {
                {}
              } else {
                stryCov_9fa48("30268");
                userData.groupTitleArray.forEach((userGroup, index) => {
                  if (stryMutAct_9fa48("30269")) {
                    {}
                  } else {
                    stryCov_9fa48("30269");
                    if (stryMutAct_9fa48("30272") ? isMemberOfGroups[index] || groupsMap[userGroup] : stryMutAct_9fa48("30271") ? false : stryMutAct_9fa48("30270") ? true : (stryCov_9fa48("30270", "30271", "30272"), isMemberOfGroups[index] && groupsMap[userGroup])) {
                      if (stryMutAct_9fa48("30273")) {
                        {}
                      } else {
                        stryCov_9fa48("30273");
                        userData.selectedGroups.push(groupsMap[userGroup]);
                      }
                    }
                  }
                });
              }
            }
            userData.signature = signature;
            userData.custom_profile_info = customProfileInfo.profile;
            return await plugins.hooks.fire(stryMutAct_9fa48("30274") ? "" : (stryCov_9fa48("30274"), 'filter:posts.modifyUserInfo'), userData);
          }
        }));
        const hookResult = await plugins.hooks.fire(stryMutAct_9fa48("30275") ? "" : (stryCov_9fa48("30275"), 'filter:posts.getUserInfoForPosts'), stryMutAct_9fa48("30276") ? {} : (stryCov_9fa48("30276"), {
          users: result
        }));
        return hookResult.users;
      }
    };
    Posts.overrideGuestHandle = function (postData, handle) {
      if (stryMutAct_9fa48("30277")) {
        {}
      } else {
        stryCov_9fa48("30277");
        if (stryMutAct_9fa48("30280") ? meta.config.allowGuestHandles && postData && postData.user && parseInt(postData.uid, 10) === 0 || handle : stryMutAct_9fa48("30279") ? false : stryMutAct_9fa48("30278") ? true : (stryCov_9fa48("30278", "30279", "30280"), (stryMutAct_9fa48("30282") ? meta.config.allowGuestHandles && postData && postData.user || parseInt(postData.uid, 10) === 0 : stryMutAct_9fa48("30281") ? true : (stryCov_9fa48("30281", "30282"), (stryMutAct_9fa48("30284") ? meta.config.allowGuestHandles && postData || postData.user : stryMutAct_9fa48("30283") ? true : (stryCov_9fa48("30283", "30284"), (stryMutAct_9fa48("30286") ? meta.config.allowGuestHandles || postData : stryMutAct_9fa48("30285") ? true : (stryCov_9fa48("30285", "30286"), meta.config.allowGuestHandles && postData)) && postData.user)) && (stryMutAct_9fa48("30288") ? parseInt(postData.uid, 10) !== 0 : stryMutAct_9fa48("30287") ? true : (stryCov_9fa48("30287", "30288"), parseInt(postData.uid, 10) === 0)))) && handle)) {
          if (stryMutAct_9fa48("30289")) {
            {}
          } else {
            stryCov_9fa48("30289");
            postData.user.username = validator.escape(String(handle));
            if (stryMutAct_9fa48("30291") ? false : stryMutAct_9fa48("30290") ? true : (stryCov_9fa48("30290", "30291"), postData.user.hasOwnProperty(stryMutAct_9fa48("30292") ? "" : (stryCov_9fa48("30292"), 'fullname')))) {
              if (stryMutAct_9fa48("30293")) {
                {}
              } else {
                stryCov_9fa48("30293");
                postData.user.fullname = postData.user.username;
              }
            }
            postData.user.displayname = postData.user.username;
          }
        }
      }
    };
    async function checkGroupMembership(uid, groupTitleArray) {
      if (stryMutAct_9fa48("30294")) {
        {}
      } else {
        stryCov_9fa48("30294");
        if (stryMutAct_9fa48("30297") ? !Array.isArray(groupTitleArray) && !groupTitleArray.length : stryMutAct_9fa48("30296") ? false : stryMutAct_9fa48("30295") ? true : (stryCov_9fa48("30295", "30296", "30297"), (stryMutAct_9fa48("30298") ? Array.isArray(groupTitleArray) : (stryCov_9fa48("30298"), !Array.isArray(groupTitleArray))) || (stryMutAct_9fa48("30299") ? groupTitleArray.length : (stryCov_9fa48("30299"), !groupTitleArray.length)))) {
          if (stryMutAct_9fa48("30300")) {
            {}
          } else {
            stryCov_9fa48("30300");
            return null;
          }
        }
        return await groups.isMemberOfGroups(uid, groupTitleArray);
      }
    }
    async function parseSignature(userData, uid, signatureUids) {
      if (stryMutAct_9fa48("30301")) {
        {}
      } else {
        stryCov_9fa48("30301");
        if (stryMutAct_9fa48("30304") ? (!userData.signature || !signatureUids.has(userData.uid)) && meta.config.disableSignatures : stryMutAct_9fa48("30303") ? false : stryMutAct_9fa48("30302") ? true : (stryCov_9fa48("30302", "30303", "30304"), (stryMutAct_9fa48("30306") ? !userData.signature && !signatureUids.has(userData.uid) : stryMutAct_9fa48("30305") ? false : (stryCov_9fa48("30305", "30306"), (stryMutAct_9fa48("30307") ? userData.signature : (stryCov_9fa48("30307"), !userData.signature)) || (stryMutAct_9fa48("30308") ? signatureUids.has(userData.uid) : (stryCov_9fa48("30308"), !signatureUids.has(userData.uid))))) || meta.config.disableSignatures)) {
          if (stryMutAct_9fa48("30309")) {
            {}
          } else {
            stryCov_9fa48("30309");
            return stryMutAct_9fa48("30310") ? "Stryker was here!" : (stryCov_9fa48("30310"), '');
          }
        }
        const result = await Posts.parseSignature(userData, uid);
        return result.userData.signature;
      }
    }
    async function getGroupsMap(userData) {
      if (stryMutAct_9fa48("30311")) {
        {}
      } else {
        stryCov_9fa48("30311");
        const groupTitles = _.uniq(_.flatten(userData.map(stryMutAct_9fa48("30312") ? () => undefined : (stryCov_9fa48("30312"), u => stryMutAct_9fa48("30315") ? u || u.groupTitleArray : stryMutAct_9fa48("30314") ? false : stryMutAct_9fa48("30313") ? true : (stryCov_9fa48("30313", "30314", "30315"), u && u.groupTitleArray)))));
        const groupsMap = {};
        const groupsData = await groups.getGroupsData(groupTitles);
        groupsData.forEach(group => {
          if (stryMutAct_9fa48("30316")) {
            {}
          } else {
            stryCov_9fa48("30316");
            if (stryMutAct_9fa48("30319") ? group && group.userTitleEnabled || !group.hidden : stryMutAct_9fa48("30318") ? false : stryMutAct_9fa48("30317") ? true : (stryCov_9fa48("30317", "30318", "30319"), (stryMutAct_9fa48("30321") ? group || group.userTitleEnabled : stryMutAct_9fa48("30320") ? true : (stryCov_9fa48("30320", "30321"), group && group.userTitleEnabled)) && (stryMutAct_9fa48("30322") ? group.hidden : (stryCov_9fa48("30322"), !group.hidden)))) {
              if (stryMutAct_9fa48("30323")) {
                {}
              } else {
                stryCov_9fa48("30323");
                groupsMap[group.name] = stryMutAct_9fa48("30324") ? {} : (stryCov_9fa48("30324"), {
                  name: group.name,
                  slug: group.slug,
                  labelColor: group.labelColor,
                  textColor: group.textColor,
                  icon: group.icon,
                  userTitle: group.userTitle
                });
              }
            }
          }
        });
        return groupsMap;
      }
    }
    async function getUserData(uids, uid) {
      if (stryMutAct_9fa48("30325")) {
        {}
      } else {
        stryCov_9fa48("30325");
        const fields = stryMutAct_9fa48("30326") ? [] : (stryCov_9fa48("30326"), [stryMutAct_9fa48("30327") ? "" : (stryCov_9fa48("30327"), 'uid'), stryMutAct_9fa48("30328") ? "" : (stryCov_9fa48("30328"), 'username'), stryMutAct_9fa48("30329") ? "" : (stryCov_9fa48("30329"), 'fullname'), stryMutAct_9fa48("30330") ? "" : (stryCov_9fa48("30330"), 'userslug'), stryMutAct_9fa48("30331") ? "" : (stryCov_9fa48("30331"), 'reputation'), stryMutAct_9fa48("30332") ? "" : (stryCov_9fa48("30332"), 'postcount'), stryMutAct_9fa48("30333") ? "" : (stryCov_9fa48("30333"), 'topiccount'), stryMutAct_9fa48("30334") ? "" : (stryCov_9fa48("30334"), 'picture'), stryMutAct_9fa48("30335") ? "" : (stryCov_9fa48("30335"), 'signature'), stryMutAct_9fa48("30336") ? "" : (stryCov_9fa48("30336"), 'banned'), stryMutAct_9fa48("30337") ? "" : (stryCov_9fa48("30337"), 'banned:expire'), stryMutAct_9fa48("30338") ? "" : (stryCov_9fa48("30338"), 'status'), stryMutAct_9fa48("30339") ? "" : (stryCov_9fa48("30339"), 'lastonline'), stryMutAct_9fa48("30340") ? "" : (stryCov_9fa48("30340"), 'groupTitle'), stryMutAct_9fa48("30341") ? "" : (stryCov_9fa48("30341"), 'mutedUntil')]);
        const result = await plugins.hooks.fire(stryMutAct_9fa48("30342") ? "" : (stryCov_9fa48("30342"), 'filter:posts.addUserFields'), stryMutAct_9fa48("30343") ? {} : (stryCov_9fa48("30343"), {
          fields: fields,
          uid: uid,
          uids: uids
        }));
        return await user.getUsersFields(result.uids, _.uniq(result.fields));
      }
    }
    Posts.isOwner = async function (pids, uid) {
      if (stryMutAct_9fa48("30344")) {
        {}
      } else {
        stryCov_9fa48("30344");
        uid = parseInt(uid, 10);
        const isArray = Array.isArray(pids);
        pids = isArray ? pids : stryMutAct_9fa48("30345") ? [] : (stryCov_9fa48("30345"), [pids]);
        if (stryMutAct_9fa48("30349") ? uid > 0 : stryMutAct_9fa48("30348") ? uid < 0 : stryMutAct_9fa48("30347") ? false : stryMutAct_9fa48("30346") ? true : (stryCov_9fa48("30346", "30347", "30348", "30349"), uid <= 0)) {
          if (stryMutAct_9fa48("30350")) {
            {}
          } else {
            stryCov_9fa48("30350");
            return isArray ? pids.map(stryMutAct_9fa48("30351") ? () => undefined : (stryCov_9fa48("30351"), () => stryMutAct_9fa48("30352") ? true : (stryCov_9fa48("30352"), false))) : stryMutAct_9fa48("30353") ? true : (stryCov_9fa48("30353"), false);
          }
        }
        const postData = await Posts.getPostsFields(pids, stryMutAct_9fa48("30354") ? [] : (stryCov_9fa48("30354"), [stryMutAct_9fa48("30355") ? "" : (stryCov_9fa48("30355"), 'uid')]));
        const result = postData.map(stryMutAct_9fa48("30356") ? () => undefined : (stryCov_9fa48("30356"), post => stryMutAct_9fa48("30359") ? post || post.uid === uid : stryMutAct_9fa48("30358") ? false : stryMutAct_9fa48("30357") ? true : (stryCov_9fa48("30357", "30358", "30359"), post && (stryMutAct_9fa48("30361") ? post.uid !== uid : stryMutAct_9fa48("30360") ? true : (stryCov_9fa48("30360", "30361"), post.uid === uid)))));
        return isArray ? result : result[0];
      }
    };
    Posts.isModerator = async function (pids, uid) {
      if (stryMutAct_9fa48("30362")) {
        {}
      } else {
        stryCov_9fa48("30362");
        if (stryMutAct_9fa48("30366") ? parseInt(uid, 10) > 0 : stryMutAct_9fa48("30365") ? parseInt(uid, 10) < 0 : stryMutAct_9fa48("30364") ? false : stryMutAct_9fa48("30363") ? true : (stryCov_9fa48("30363", "30364", "30365", "30366"), parseInt(uid, 10) <= 0)) {
          if (stryMutAct_9fa48("30367")) {
            {}
          } else {
            stryCov_9fa48("30367");
            return pids.map(stryMutAct_9fa48("30368") ? () => undefined : (stryCov_9fa48("30368"), () => stryMutAct_9fa48("30369") ? true : (stryCov_9fa48("30369"), false)));
          }
        }
        const cids = await Posts.getCidsByPids(pids);
        return await user.isModerator(uid, cids);
      }
    };
    Posts.changeOwner = async function (pids, toUid) {
      if (stryMutAct_9fa48("30370")) {
        {}
      } else {
        stryCov_9fa48("30370");
        const exists = await user.exists(toUid);
        if (stryMutAct_9fa48("30373") ? false : stryMutAct_9fa48("30372") ? true : stryMutAct_9fa48("30371") ? exists : (stryCov_9fa48("30371", "30372", "30373"), !exists)) {
          if (stryMutAct_9fa48("30374")) {
            {}
          } else {
            stryCov_9fa48("30374");
            throw new Error(stryMutAct_9fa48("30375") ? "" : (stryCov_9fa48("30375"), '[[error:no-user]]'));
          }
        }
        let postData = await Posts.getPostsFields(pids, stryMutAct_9fa48("30376") ? [] : (stryCov_9fa48("30376"), [stryMutAct_9fa48("30377") ? "" : (stryCov_9fa48("30377"), 'pid'), stryMutAct_9fa48("30378") ? "" : (stryCov_9fa48("30378"), 'tid'), stryMutAct_9fa48("30379") ? "" : (stryCov_9fa48("30379"), 'uid'), stryMutAct_9fa48("30380") ? "" : (stryCov_9fa48("30380"), 'content'), stryMutAct_9fa48("30381") ? "" : (stryCov_9fa48("30381"), 'deleted'), stryMutAct_9fa48("30382") ? "" : (stryCov_9fa48("30382"), 'timestamp'), stryMutAct_9fa48("30383") ? "" : (stryCov_9fa48("30383"), 'upvotes'), stryMutAct_9fa48("30384") ? "" : (stryCov_9fa48("30384"), 'downvotes')]));
        postData = stryMutAct_9fa48("30385") ? postData : (stryCov_9fa48("30385"), postData.filter(stryMutAct_9fa48("30386") ? () => undefined : (stryCov_9fa48("30386"), p => stryMutAct_9fa48("30389") ? p.pid || p.uid !== parseInt(toUid, 10) : stryMutAct_9fa48("30388") ? false : stryMutAct_9fa48("30387") ? true : (stryCov_9fa48("30387", "30388", "30389"), p.pid && (stryMutAct_9fa48("30391") ? p.uid === parseInt(toUid, 10) : stryMutAct_9fa48("30390") ? true : (stryCov_9fa48("30390", "30391"), p.uid !== parseInt(toUid, 10)))))));
        pids = postData.map(stryMutAct_9fa48("30392") ? () => undefined : (stryCov_9fa48("30392"), p => p.pid));
        const cids = await Posts.getCidsByPids(pids);
        const bulkRemove = stryMutAct_9fa48("30393") ? ["Stryker was here"] : (stryCov_9fa48("30393"), []);
        const bulkAdd = stryMutAct_9fa48("30394") ? ["Stryker was here"] : (stryCov_9fa48("30394"), []);
        let repChange = 0;
        const postsByUser = {};
        postData.forEach((post, i) => {
          if (stryMutAct_9fa48("30395")) {
            {}
          } else {
            stryCov_9fa48("30395");
            post.cid = cids[i];
            stryMutAct_9fa48("30396") ? repChange -= post.votes : (stryCov_9fa48("30396"), repChange += post.votes);
            bulkRemove.push(stryMutAct_9fa48("30397") ? [] : (stryCov_9fa48("30397"), [stryMutAct_9fa48("30398") ? `` : (stryCov_9fa48("30398"), `uid:${post.uid}:posts`), post.pid]));
            bulkRemove.push(stryMutAct_9fa48("30399") ? [] : (stryCov_9fa48("30399"), [stryMutAct_9fa48("30400") ? `` : (stryCov_9fa48("30400"), `cid:${post.cid}:uid:${post.uid}:pids`), post.pid]));
            bulkRemove.push(stryMutAct_9fa48("30401") ? [] : (stryCov_9fa48("30401"), [stryMutAct_9fa48("30402") ? `` : (stryCov_9fa48("30402"), `cid:${post.cid}:uid:${post.uid}:pids:votes`), post.pid]));
            bulkAdd.push(stryMutAct_9fa48("30403") ? [] : (stryCov_9fa48("30403"), [stryMutAct_9fa48("30404") ? `` : (stryCov_9fa48("30404"), `uid:${toUid}:posts`), post.timestamp, post.pid]));
            bulkAdd.push(stryMutAct_9fa48("30405") ? [] : (stryCov_9fa48("30405"), [stryMutAct_9fa48("30406") ? `` : (stryCov_9fa48("30406"), `cid:${post.cid}:uid:${toUid}:pids`), post.timestamp, post.pid]));
            if (stryMutAct_9fa48("30409") ? post.votes > 0 && post.votes < 0 : stryMutAct_9fa48("30408") ? false : stryMutAct_9fa48("30407") ? true : (stryCov_9fa48("30407", "30408", "30409"), (stryMutAct_9fa48("30412") ? post.votes <= 0 : stryMutAct_9fa48("30411") ? post.votes >= 0 : stryMutAct_9fa48("30410") ? false : (stryCov_9fa48("30410", "30411", "30412"), post.votes > 0)) || (stryMutAct_9fa48("30415") ? post.votes >= 0 : stryMutAct_9fa48("30414") ? post.votes <= 0 : stryMutAct_9fa48("30413") ? false : (stryCov_9fa48("30413", "30414", "30415"), post.votes < 0)))) {
              if (stryMutAct_9fa48("30416")) {
                {}
              } else {
                stryCov_9fa48("30416");
                bulkAdd.push(stryMutAct_9fa48("30417") ? [] : (stryCov_9fa48("30417"), [stryMutAct_9fa48("30418") ? `` : (stryCov_9fa48("30418"), `cid:${post.cid}:uid:${toUid}:pids:votes`), post.votes, post.pid]));
              }
            }
            postsByUser[post.uid] = stryMutAct_9fa48("30421") ? postsByUser[post.uid] && [] : stryMutAct_9fa48("30420") ? false : stryMutAct_9fa48("30419") ? true : (stryCov_9fa48("30419", "30420", "30421"), postsByUser[post.uid] || (stryMutAct_9fa48("30422") ? ["Stryker was here"] : (stryCov_9fa48("30422"), [])));
            postsByUser[post.uid].push(post);
          }
        });
        await Promise.all(stryMutAct_9fa48("30423") ? [] : (stryCov_9fa48("30423"), [db.setObjectField(pids.map(stryMutAct_9fa48("30424") ? () => undefined : (stryCov_9fa48("30424"), pid => stryMutAct_9fa48("30425") ? `` : (stryCov_9fa48("30425"), `post:${pid}`))), stryMutAct_9fa48("30426") ? "" : (stryCov_9fa48("30426"), 'uid'), toUid), db.sortedSetRemoveBulk(bulkRemove), db.sortedSetAddBulk(bulkAdd), user.incrementUserReputationBy(toUid, repChange), handleMainPidOwnerChange(postData, toUid), updateTopicPosters(postData, toUid)]));
        await Promise.all(stryMutAct_9fa48("30427") ? [] : (stryCov_9fa48("30427"), [user.updatePostCount(toUid), reduceCounters(postsByUser)]));
        plugins.hooks.fire(stryMutAct_9fa48("30428") ? "" : (stryCov_9fa48("30428"), 'action:post.changeOwner'), stryMutAct_9fa48("30429") ? {} : (stryCov_9fa48("30429"), {
          posts: _.cloneDeep(postData),
          toUid: toUid
        }));
        return postData;
      }
    };
    async function reduceCounters(postsByUser) {
      if (stryMutAct_9fa48("30430")) {
        {}
      } else {
        stryCov_9fa48("30430");
        await async.eachOfSeries(postsByUser, async (posts, uid) => {
          if (stryMutAct_9fa48("30431")) {
            {}
          } else {
            stryCov_9fa48("30431");
            const repChange = posts.reduce(stryMutAct_9fa48("30432") ? () => undefined : (stryCov_9fa48("30432"), (acc, val) => stryMutAct_9fa48("30433") ? acc - val.votes : (stryCov_9fa48("30433"), acc + val.votes)), 0);
            await Promise.all(stryMutAct_9fa48("30434") ? [] : (stryCov_9fa48("30434"), [user.updatePostCount(uid), user.incrementUserReputationBy(uid, stryMutAct_9fa48("30435") ? +repChange : (stryCov_9fa48("30435"), -repChange))]));
          }
        });
      }
    }
    async function updateTopicPosters(postData, toUid) {
      if (stryMutAct_9fa48("30436")) {
        {}
      } else {
        stryCov_9fa48("30436");
        const postsByTopic = _.groupBy(postData, stryMutAct_9fa48("30437") ? () => undefined : (stryCov_9fa48("30437"), p => parseInt(p.tid, 10)));
        await async.eachOf(postsByTopic, async (posts, tid) => {
          if (stryMutAct_9fa48("30438")) {
            {}
          } else {
            stryCov_9fa48("30438");
            const postsByUser = _.groupBy(posts, stryMutAct_9fa48("30439") ? () => undefined : (stryCov_9fa48("30439"), p => parseInt(p.uid, 10)));
            await db.sortedSetIncrBy(stryMutAct_9fa48("30440") ? `` : (stryCov_9fa48("30440"), `tid:${tid}:posters`), posts.length, toUid);
            await async.eachOf(postsByUser, async (posts, uid) => {
              if (stryMutAct_9fa48("30441")) {
                {}
              } else {
                stryCov_9fa48("30441");
                await db.sortedSetIncrBy(stryMutAct_9fa48("30442") ? `` : (stryCov_9fa48("30442"), `tid:${tid}:posters`), stryMutAct_9fa48("30443") ? +posts.length : (stryCov_9fa48("30443"), -posts.length), uid);
              }
            });
          }
        });
      }
    }
    async function handleMainPidOwnerChange(postData, toUid) {
      if (stryMutAct_9fa48("30444")) {
        {}
      } else {
        stryCov_9fa48("30444");
        const tids = _.uniq(postData.map(stryMutAct_9fa48("30445") ? () => undefined : (stryCov_9fa48("30445"), p => p.tid)));
        const topicData = await topics.getTopicsFields(tids, stryMutAct_9fa48("30446") ? [] : (stryCov_9fa48("30446"), [stryMutAct_9fa48("30447") ? "" : (stryCov_9fa48("30447"), 'tid'), stryMutAct_9fa48("30448") ? "" : (stryCov_9fa48("30448"), 'cid'), stryMutAct_9fa48("30449") ? "" : (stryCov_9fa48("30449"), 'deleted'), stryMutAct_9fa48("30450") ? "" : (stryCov_9fa48("30450"), 'title'), stryMutAct_9fa48("30451") ? "" : (stryCov_9fa48("30451"), 'uid'), stryMutAct_9fa48("30452") ? "" : (stryCov_9fa48("30452"), 'mainPid'), stryMutAct_9fa48("30453") ? "" : (stryCov_9fa48("30453"), 'timestamp')]));
        const tidToTopic = _.zipObject(tids, topicData);
        const mainPosts = stryMutAct_9fa48("30454") ? postData : (stryCov_9fa48("30454"), postData.filter(stryMutAct_9fa48("30455") ? () => undefined : (stryCov_9fa48("30455"), p => stryMutAct_9fa48("30458") ? p.pid !== tidToTopic[p.tid].mainPid : stryMutAct_9fa48("30457") ? false : stryMutAct_9fa48("30456") ? true : (stryCov_9fa48("30456", "30457", "30458"), p.pid === tidToTopic[p.tid].mainPid))));
        if (stryMutAct_9fa48("30461") ? false : stryMutAct_9fa48("30460") ? true : stryMutAct_9fa48("30459") ? mainPosts.length : (stryCov_9fa48("30459", "30460", "30461"), !mainPosts.length)) {
          if (stryMutAct_9fa48("30462")) {
            {}
          } else {
            stryCov_9fa48("30462");
            return;
          }
        }
        const bulkAdd = stryMutAct_9fa48("30463") ? ["Stryker was here"] : (stryCov_9fa48("30463"), []);
        const bulkRemove = stryMutAct_9fa48("30464") ? ["Stryker was here"] : (stryCov_9fa48("30464"), []);
        const postsByUser = {};
        mainPosts.forEach(post => {
          if (stryMutAct_9fa48("30465")) {
            {}
          } else {
            stryCov_9fa48("30465");
            bulkRemove.push(stryMutAct_9fa48("30466") ? [] : (stryCov_9fa48("30466"), [stryMutAct_9fa48("30467") ? `` : (stryCov_9fa48("30467"), `cid:${post.cid}:uid:${post.uid}:tids`), post.tid]));
            bulkRemove.push(stryMutAct_9fa48("30468") ? [] : (stryCov_9fa48("30468"), [stryMutAct_9fa48("30469") ? `` : (stryCov_9fa48("30469"), `uid:${post.uid}:topics`), post.tid]));
            bulkAdd.push(stryMutAct_9fa48("30470") ? [] : (stryCov_9fa48("30470"), [stryMutAct_9fa48("30471") ? `` : (stryCov_9fa48("30471"), `cid:${post.cid}:uid:${toUid}:tids`), tidToTopic[post.tid].timestamp, post.tid]));
            bulkAdd.push(stryMutAct_9fa48("30472") ? [] : (stryCov_9fa48("30472"), [stryMutAct_9fa48("30473") ? `` : (stryCov_9fa48("30473"), `uid:${toUid}:topics`), tidToTopic[post.tid].timestamp, post.tid]));
            postsByUser[post.uid] = stryMutAct_9fa48("30476") ? postsByUser[post.uid] && [] : stryMutAct_9fa48("30475") ? false : stryMutAct_9fa48("30474") ? true : (stryCov_9fa48("30474", "30475", "30476"), postsByUser[post.uid] || (stryMutAct_9fa48("30477") ? ["Stryker was here"] : (stryCov_9fa48("30477"), [])));
            postsByUser[post.uid].push(post);
          }
        });
        await Promise.all(stryMutAct_9fa48("30478") ? [] : (stryCov_9fa48("30478"), [db.setObjectField(mainPosts.map(stryMutAct_9fa48("30479") ? () => undefined : (stryCov_9fa48("30479"), p => stryMutAct_9fa48("30480") ? `` : (stryCov_9fa48("30480"), `topic:${p.tid}`))), stryMutAct_9fa48("30481") ? "" : (stryCov_9fa48("30481"), 'uid'), toUid), db.sortedSetRemoveBulk(bulkRemove), db.sortedSetAddBulk(bulkAdd), user.incrementUserFieldBy(toUid, stryMutAct_9fa48("30482") ? "" : (stryCov_9fa48("30482"), 'topiccount'), mainPosts.length), reduceTopicCounts(postsByUser)]));
        const changedTopics = mainPosts.map(stryMutAct_9fa48("30483") ? () => undefined : (stryCov_9fa48("30483"), p => tidToTopic[p.tid]));
        plugins.hooks.fire(stryMutAct_9fa48("30484") ? "" : (stryCov_9fa48("30484"), 'action:topic.changeOwner'), stryMutAct_9fa48("30485") ? {} : (stryCov_9fa48("30485"), {
          topics: _.cloneDeep(changedTopics),
          toUid: toUid
        }));
      }
    }
    async function reduceTopicCounts(postsByUser) {
      if (stryMutAct_9fa48("30486")) {
        {}
      } else {
        stryCov_9fa48("30486");
        await async.eachSeries(Object.keys(postsByUser), async uid => {
          if (stryMutAct_9fa48("30487")) {
            {}
          } else {
            stryCov_9fa48("30487");
            const posts = postsByUser[uid];
            const exists = await user.exists(uid);
            if (stryMutAct_9fa48("30489") ? false : stryMutAct_9fa48("30488") ? true : (stryCov_9fa48("30488", "30489"), exists)) {
              if (stryMutAct_9fa48("30490")) {
                {}
              } else {
                stryCov_9fa48("30490");
                await user.incrementUserFieldBy(uid, stryMutAct_9fa48("30491") ? "" : (stryCov_9fa48("30491"), 'topiccount'), stryMutAct_9fa48("30492") ? +posts.length : (stryCov_9fa48("30492"), -posts.length));
              }
            }
          }
        });
      }
    }
  }
};