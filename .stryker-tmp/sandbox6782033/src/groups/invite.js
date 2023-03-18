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
const db = require('../database');
const user = require('../user');
const slugify = require('../slugify');
const plugins = require('../plugins');
const notifications = require('../notifications');
module.exports = function (Groups) {
  if (stryMutAct_9fa48("20243")) {
    {}
  } else {
    stryCov_9fa48("20243");
    Groups.requestMembership = async function (groupName, uid) {
      if (stryMutAct_9fa48("20244")) {
        {}
      } else {
        stryCov_9fa48("20244");
        await inviteOrRequestMembership(groupName, uid, stryMutAct_9fa48("20245") ? "" : (stryCov_9fa48("20245"), 'request'));
        const {
          displayname
        } = await user.getUserFields(uid, stryMutAct_9fa48("20246") ? [] : (stryCov_9fa48("20246"), [stryMutAct_9fa48("20247") ? "" : (stryCov_9fa48("20247"), 'username')]));
        const [notification, owners] = await Promise.all(stryMutAct_9fa48("20248") ? [] : (stryCov_9fa48("20248"), [notifications.create(stryMutAct_9fa48("20249") ? {} : (stryCov_9fa48("20249"), {
          type: stryMutAct_9fa48("20250") ? "" : (stryCov_9fa48("20250"), 'group-request-membership'),
          bodyShort: stryMutAct_9fa48("20251") ? `` : (stryCov_9fa48("20251"), `[[groups:request.notification_title, ${displayname}]]`),
          bodyLong: stryMutAct_9fa48("20252") ? `` : (stryCov_9fa48("20252"), `[[groups:request.notification_text, ${displayname}, ${groupName}]]`),
          nid: stryMutAct_9fa48("20253") ? `` : (stryCov_9fa48("20253"), `group:${groupName}:uid:${uid}:request`),
          path: stryMutAct_9fa48("20254") ? `` : (stryCov_9fa48("20254"), `/groups/${slugify(groupName)}`),
          from: uid
        })), Groups.getOwners(groupName)]));
        await notifications.push(notification, owners);
      }
    };
    Groups.acceptMembership = async function (groupName, uid) {
      if (stryMutAct_9fa48("20255")) {
        {}
      } else {
        stryCov_9fa48("20255");
        await db.setsRemove(stryMutAct_9fa48("20256") ? [] : (stryCov_9fa48("20256"), [stryMutAct_9fa48("20257") ? `` : (stryCov_9fa48("20257"), `group:${groupName}:pending`), stryMutAct_9fa48("20258") ? `` : (stryCov_9fa48("20258"), `group:${groupName}:invited`)]), uid);
        await Groups.join(groupName, uid);
        const notification = await notifications.create(stryMutAct_9fa48("20259") ? {} : (stryCov_9fa48("20259"), {
          type: stryMutAct_9fa48("20260") ? "" : (stryCov_9fa48("20260"), 'group-invite'),
          bodyShort: stryMutAct_9fa48("20261") ? `` : (stryCov_9fa48("20261"), `[[groups:membership.accept.notification_title, ${groupName}]]`),
          nid: stryMutAct_9fa48("20262") ? `` : (stryCov_9fa48("20262"), `group:${groupName}:uid:${uid}:invite-accepted`),
          path: stryMutAct_9fa48("20263") ? `` : (stryCov_9fa48("20263"), `/groups/${slugify(groupName)}`)
        }));
        await notifications.push(notification, stryMutAct_9fa48("20264") ? [] : (stryCov_9fa48("20264"), [uid]));
      }
    };
    Groups.rejectMembership = async function (groupNames, uid) {
      if (stryMutAct_9fa48("20265")) {
        {}
      } else {
        stryCov_9fa48("20265");
        if (stryMutAct_9fa48("20268") ? false : stryMutAct_9fa48("20267") ? true : stryMutAct_9fa48("20266") ? Array.isArray(groupNames) : (stryCov_9fa48("20266", "20267", "20268"), !Array.isArray(groupNames))) {
          if (stryMutAct_9fa48("20269")) {
            {}
          } else {
            stryCov_9fa48("20269");
            groupNames = stryMutAct_9fa48("20270") ? [] : (stryCov_9fa48("20270"), [groupNames]);
          }
        }
        const sets = stryMutAct_9fa48("20271") ? ["Stryker was here"] : (stryCov_9fa48("20271"), []);
        groupNames.forEach(stryMutAct_9fa48("20272") ? () => undefined : (stryCov_9fa48("20272"), groupName => sets.push(stryMutAct_9fa48("20273") ? `` : (stryCov_9fa48("20273"), `group:${groupName}:pending`), stryMutAct_9fa48("20274") ? `` : (stryCov_9fa48("20274"), `group:${groupName}:invited`))));
        await db.setsRemove(sets, uid);
      }
    };
    Groups.invite = async function (groupName, uids) {
      if (stryMutAct_9fa48("20275")) {
        {}
      } else {
        stryCov_9fa48("20275");
        uids = Array.isArray(uids) ? uids : stryMutAct_9fa48("20276") ? [] : (stryCov_9fa48("20276"), [uids]);
        uids = await inviteOrRequestMembership(groupName, uids, stryMutAct_9fa48("20277") ? "" : (stryCov_9fa48("20277"), 'invite'));
        const notificationData = await Promise.all(uids.map(stryMutAct_9fa48("20278") ? () => undefined : (stryCov_9fa48("20278"), uid => notifications.create(stryMutAct_9fa48("20279") ? {} : (stryCov_9fa48("20279"), {
          type: stryMutAct_9fa48("20280") ? "" : (stryCov_9fa48("20280"), 'group-invite'),
          bodyShort: stryMutAct_9fa48("20281") ? `` : (stryCov_9fa48("20281"), `[[groups:invited.notification_title, ${groupName}]]`),
          bodyLong: stryMutAct_9fa48("20282") ? "Stryker was here!" : (stryCov_9fa48("20282"), ''),
          nid: stryMutAct_9fa48("20283") ? `` : (stryCov_9fa48("20283"), `group:${groupName}:uid:${uid}:invite`),
          path: stryMutAct_9fa48("20284") ? `` : (stryCov_9fa48("20284"), `/groups/${slugify(groupName)}`)
        })))));
        await Promise.all(uids.map(stryMutAct_9fa48("20285") ? () => undefined : (stryCov_9fa48("20285"), (uid, index) => notifications.push(notificationData[index], uid))));
      }
    };
    async function inviteOrRequestMembership(groupName, uids, type) {
      if (stryMutAct_9fa48("20286")) {
        {}
      } else {
        stryCov_9fa48("20286");
        uids = Array.isArray(uids) ? uids : stryMutAct_9fa48("20287") ? [] : (stryCov_9fa48("20287"), [uids]);
        uids = stryMutAct_9fa48("20288") ? uids : (stryCov_9fa48("20288"), uids.filter(stryMutAct_9fa48("20289") ? () => undefined : (stryCov_9fa48("20289"), uid => stryMutAct_9fa48("20293") ? parseInt(uid, 10) <= 0 : stryMutAct_9fa48("20292") ? parseInt(uid, 10) >= 0 : stryMutAct_9fa48("20291") ? false : stryMutAct_9fa48("20290") ? true : (stryCov_9fa48("20290", "20291", "20292", "20293"), parseInt(uid, 10) > 0))));
        const [exists, isMember, isPending, isInvited] = await Promise.all(stryMutAct_9fa48("20294") ? [] : (stryCov_9fa48("20294"), [Groups.exists(groupName), Groups.isMembers(uids, groupName), Groups.isPending(uids, groupName), Groups.isInvited(uids, groupName)]));
        if (stryMutAct_9fa48("20297") ? false : stryMutAct_9fa48("20296") ? true : stryMutAct_9fa48("20295") ? exists : (stryCov_9fa48("20295", "20296", "20297"), !exists)) {
          if (stryMutAct_9fa48("20298")) {
            {}
          } else {
            stryCov_9fa48("20298");
            throw new Error(stryMutAct_9fa48("20299") ? "" : (stryCov_9fa48("20299"), '[[error:no-group]]'));
          }
        }
        uids = stryMutAct_9fa48("20300") ? uids : (stryCov_9fa48("20300"), uids.filter(stryMutAct_9fa48("20301") ? () => undefined : (stryCov_9fa48("20301"), (uid, i) => stryMutAct_9fa48("20304") ? !isMember[i] || type === 'invite' && !isInvited[i] || type === 'request' && !isPending[i] : stryMutAct_9fa48("20303") ? false : stryMutAct_9fa48("20302") ? true : (stryCov_9fa48("20302", "20303", "20304"), (stryMutAct_9fa48("20305") ? isMember[i] : (stryCov_9fa48("20305"), !isMember[i])) && (stryMutAct_9fa48("20307") ? type === 'invite' && !isInvited[i] && type === 'request' && !isPending[i] : stryMutAct_9fa48("20306") ? true : (stryCov_9fa48("20306", "20307"), (stryMutAct_9fa48("20309") ? type === 'invite' || !isInvited[i] : stryMutAct_9fa48("20308") ? false : (stryCov_9fa48("20308", "20309"), (stryMutAct_9fa48("20311") ? type !== 'invite' : stryMutAct_9fa48("20310") ? true : (stryCov_9fa48("20310", "20311"), type === (stryMutAct_9fa48("20312") ? "" : (stryCov_9fa48("20312"), 'invite')))) && (stryMutAct_9fa48("20313") ? isInvited[i] : (stryCov_9fa48("20313"), !isInvited[i])))) || (stryMutAct_9fa48("20315") ? type === 'request' || !isPending[i] : stryMutAct_9fa48("20314") ? false : (stryCov_9fa48("20314", "20315"), (stryMutAct_9fa48("20317") ? type !== 'request' : stryMutAct_9fa48("20316") ? true : (stryCov_9fa48("20316", "20317"), type === (stryMutAct_9fa48("20318") ? "" : (stryCov_9fa48("20318"), 'request')))) && (stryMutAct_9fa48("20319") ? isPending[i] : (stryCov_9fa48("20319"), !isPending[i]))))))))));
        const set = (stryMutAct_9fa48("20322") ? type !== 'invite' : stryMutAct_9fa48("20321") ? false : stryMutAct_9fa48("20320") ? true : (stryCov_9fa48("20320", "20321", "20322"), type === (stryMutAct_9fa48("20323") ? "" : (stryCov_9fa48("20323"), 'invite')))) ? stryMutAct_9fa48("20324") ? `` : (stryCov_9fa48("20324"), `group:${groupName}:invited`) : stryMutAct_9fa48("20325") ? `` : (stryCov_9fa48("20325"), `group:${groupName}:pending`);
        await db.setAdd(set, uids);
        const hookName = (stryMutAct_9fa48("20328") ? type !== 'invite' : stryMutAct_9fa48("20327") ? false : stryMutAct_9fa48("20326") ? true : (stryCov_9fa48("20326", "20327", "20328"), type === (stryMutAct_9fa48("20329") ? "" : (stryCov_9fa48("20329"), 'invite')))) ? stryMutAct_9fa48("20330") ? "" : (stryCov_9fa48("20330"), 'inviteMember') : stryMutAct_9fa48("20331") ? "" : (stryCov_9fa48("20331"), 'requestMembership');
        plugins.hooks.fire(stryMutAct_9fa48("20332") ? `` : (stryCov_9fa48("20332"), `action:group.${hookName}`), stryMutAct_9fa48("20333") ? {} : (stryCov_9fa48("20333"), {
          groupName: groupName,
          uids: uids
        }));
        return uids;
      }
    }
    Groups.isInvited = async function (uids, groupName) {
      if (stryMutAct_9fa48("20334")) {
        {}
      } else {
        stryCov_9fa48("20334");
        return await checkInvitePending(uids, stryMutAct_9fa48("20335") ? `` : (stryCov_9fa48("20335"), `group:${groupName}:invited`));
      }
    };
    Groups.isPending = async function (uids, groupName) {
      if (stryMutAct_9fa48("20336")) {
        {}
      } else {
        stryCov_9fa48("20336");
        return await checkInvitePending(uids, stryMutAct_9fa48("20337") ? `` : (stryCov_9fa48("20337"), `group:${groupName}:pending`));
      }
    };
    async function checkInvitePending(uids, set) {
      if (stryMutAct_9fa48("20338")) {
        {}
      } else {
        stryCov_9fa48("20338");
        const isArray = Array.isArray(uids);
        uids = isArray ? uids : stryMutAct_9fa48("20339") ? [] : (stryCov_9fa48("20339"), [uids]);
        const checkUids = stryMutAct_9fa48("20340") ? uids : (stryCov_9fa48("20340"), uids.filter(stryMutAct_9fa48("20341") ? () => undefined : (stryCov_9fa48("20341"), uid => stryMutAct_9fa48("20345") ? parseInt(uid, 10) <= 0 : stryMutAct_9fa48("20344") ? parseInt(uid, 10) >= 0 : stryMutAct_9fa48("20343") ? false : stryMutAct_9fa48("20342") ? true : (stryCov_9fa48("20342", "20343", "20344", "20345"), parseInt(uid, 10) > 0))));
        const isMembers = await db.isSetMembers(set, checkUids);
        const map = _.zipObject(checkUids, isMembers);
        return isArray ? uids.map(stryMutAct_9fa48("20346") ? () => undefined : (stryCov_9fa48("20346"), uid => stryMutAct_9fa48("20347") ? !map[uid] : (stryCov_9fa48("20347"), !(stryMutAct_9fa48("20348") ? map[uid] : (stryCov_9fa48("20348"), !map[uid]))))) : stryMutAct_9fa48("20349") ? !map[uids[0]] : (stryCov_9fa48("20349"), !(stryMutAct_9fa48("20350") ? map[uids[0]] : (stryCov_9fa48("20350"), !map[uids[0]])));
      }
    }
    Groups.getPending = async function (groupName) {
      if (stryMutAct_9fa48("20351")) {
        {}
      } else {
        stryCov_9fa48("20351");
        if (stryMutAct_9fa48("20354") ? false : stryMutAct_9fa48("20353") ? true : stryMutAct_9fa48("20352") ? groupName : (stryCov_9fa48("20352", "20353", "20354"), !groupName)) {
          if (stryMutAct_9fa48("20355")) {
            {}
          } else {
            stryCov_9fa48("20355");
            return stryMutAct_9fa48("20356") ? ["Stryker was here"] : (stryCov_9fa48("20356"), []);
          }
        }
        return await db.getSetMembers(stryMutAct_9fa48("20357") ? `` : (stryCov_9fa48("20357"), `group:${groupName}:pending`));
      }
    };
  }
};