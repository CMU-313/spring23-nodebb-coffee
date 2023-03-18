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
const groups = require('../groups');
const user = require('../user');
const utils = require('../utils');
const events = require('../events');
const privileges = require('../privileges');
const SocketGroups = module.exports;
SocketGroups.before = async (socket, method, data) => {
  if (stryMutAct_9fa48("35542")) {
    {}
  } else {
    stryCov_9fa48("35542");
    if (stryMutAct_9fa48("35545") ? false : stryMutAct_9fa48("35544") ? true : stryMutAct_9fa48("35543") ? data : (stryCov_9fa48("35543", "35544", "35545"), !data)) {
      if (stryMutAct_9fa48("35546")) {
        {}
      } else {
        stryCov_9fa48("35546");
        throw new Error(stryMutAct_9fa48("35547") ? "" : (stryCov_9fa48("35547"), '[[error:invalid-data]]'));
      }
    }
  }
};
SocketGroups.addMember = async (socket, data) => {
  if (stryMutAct_9fa48("35548")) {
    {}
  } else {
    stryCov_9fa48("35548");
    await isOwner(socket, data);
    if (stryMutAct_9fa48("35551") ? data.groupName === 'administrators' && groups.isPrivilegeGroup(data.groupName) : stryMutAct_9fa48("35550") ? false : stryMutAct_9fa48("35549") ? true : (stryCov_9fa48("35549", "35550", "35551"), (stryMutAct_9fa48("35553") ? data.groupName !== 'administrators' : stryMutAct_9fa48("35552") ? false : (stryCov_9fa48("35552", "35553"), data.groupName === (stryMutAct_9fa48("35554") ? "" : (stryCov_9fa48("35554"), 'administrators')))) || groups.isPrivilegeGroup(data.groupName))) {
      if (stryMutAct_9fa48("35555")) {
        {}
      } else {
        stryCov_9fa48("35555");
        throw new Error(stryMutAct_9fa48("35556") ? "" : (stryCov_9fa48("35556"), '[[error:not-allowed]]'));
      }
    }
    if (stryMutAct_9fa48("35559") ? false : stryMutAct_9fa48("35558") ? true : stryMutAct_9fa48("35557") ? data.uid : (stryCov_9fa48("35557", "35558", "35559"), !data.uid)) {
      if (stryMutAct_9fa48("35560")) {
        {}
      } else {
        stryCov_9fa48("35560");
        throw new Error(stryMutAct_9fa48("35561") ? "" : (stryCov_9fa48("35561"), '[[error:invalid-data]]'));
      }
    }
    data.uid = (stryMutAct_9fa48("35562") ? Array.isArray(data.uid) : (stryCov_9fa48("35562"), !Array.isArray(data.uid))) ? stryMutAct_9fa48("35563") ? [] : (stryCov_9fa48("35563"), [data.uid]) : data.uid;
    if (stryMutAct_9fa48("35566") ? data.uid.length : stryMutAct_9fa48("35565") ? false : stryMutAct_9fa48("35564") ? true : (stryCov_9fa48("35564", "35565", "35566"), data.uid.filter(stryMutAct_9fa48("35567") ? () => undefined : (stryCov_9fa48("35567"), uid => stryMutAct_9fa48("35568") ? parseInt(uid, 10) > 0 : (stryCov_9fa48("35568"), !(stryMutAct_9fa48("35572") ? parseInt(uid, 10) <= 0 : stryMutAct_9fa48("35571") ? parseInt(uid, 10) >= 0 : stryMutAct_9fa48("35570") ? false : stryMutAct_9fa48("35569") ? true : (stryCov_9fa48("35569", "35570", "35571", "35572"), parseInt(uid, 10) > 0))))).length)) {
      if (stryMutAct_9fa48("35573")) {
        {}
      } else {
        stryCov_9fa48("35573");
        throw new Error(stryMutAct_9fa48("35574") ? "" : (stryCov_9fa48("35574"), '[[error:invalid-uid]]'));
      }
    }
    for (const uid of data.uid) {
      if (stryMutAct_9fa48("35575")) {
        {}
      } else {
        stryCov_9fa48("35575");
        // eslint-disable-next-line no-await-in-loop
        await groups.join(data.groupName, uid);
      }
    }
    logGroupEvent(socket, stryMutAct_9fa48("35576") ? "" : (stryCov_9fa48("35576"), 'group-add-member'), stryMutAct_9fa48("35577") ? {} : (stryCov_9fa48("35577"), {
      groupName: data.groupName,
      targetUid: String(data.uid)
    }));
  }
};
async function isOwner(socket, data) {
  if (stryMutAct_9fa48("35578")) {
    {}
  } else {
    stryCov_9fa48("35578");
    if (stryMutAct_9fa48("35581") ? typeof data.groupName === 'string' : stryMutAct_9fa48("35580") ? false : stryMutAct_9fa48("35579") ? true : (stryCov_9fa48("35579", "35580", "35581"), typeof data.groupName !== (stryMutAct_9fa48("35582") ? "" : (stryCov_9fa48("35582"), 'string')))) {
      if (stryMutAct_9fa48("35583")) {
        {}
      } else {
        stryCov_9fa48("35583");
        throw new Error(stryMutAct_9fa48("35584") ? "" : (stryCov_9fa48("35584"), '[[error:invalid-group-name]]'));
      }
    }
    const results = await utils.promiseParallel(stryMutAct_9fa48("35585") ? {} : (stryCov_9fa48("35585"), {
      hasAdminPrivilege: privileges.admin.can(stryMutAct_9fa48("35586") ? "" : (stryCov_9fa48("35586"), 'admin:groups'), socket.uid),
      isGlobalModerator: user.isGlobalModerator(socket.uid),
      isOwner: groups.ownership.isOwner(socket.uid, data.groupName),
      group: groups.getGroupData(data.groupName)
    }));
    const isOwner = stryMutAct_9fa48("35589") ? (results.isOwner || results.hasAdminPrivilege) && results.isGlobalModerator && !results.group.system : stryMutAct_9fa48("35588") ? false : stryMutAct_9fa48("35587") ? true : (stryCov_9fa48("35587", "35588", "35589"), (stryMutAct_9fa48("35591") ? results.isOwner && results.hasAdminPrivilege : stryMutAct_9fa48("35590") ? false : (stryCov_9fa48("35590", "35591"), results.isOwner || results.hasAdminPrivilege)) || (stryMutAct_9fa48("35593") ? results.isGlobalModerator || !results.group.system : stryMutAct_9fa48("35592") ? false : (stryCov_9fa48("35592", "35593"), results.isGlobalModerator && (stryMutAct_9fa48("35594") ? results.group.system : (stryCov_9fa48("35594"), !results.group.system)))));
    if (stryMutAct_9fa48("35597") ? false : stryMutAct_9fa48("35596") ? true : stryMutAct_9fa48("35595") ? isOwner : (stryCov_9fa48("35595", "35596", "35597"), !isOwner)) {
      if (stryMutAct_9fa48("35598")) {
        {}
      } else {
        stryCov_9fa48("35598");
        throw new Error(stryMutAct_9fa48("35599") ? "" : (stryCov_9fa48("35599"), '[[error:no-privileges]]'));
      }
    }
  }
}
async function isInvited(socket, data) {
  if (stryMutAct_9fa48("35600")) {
    {}
  } else {
    stryCov_9fa48("35600");
    if (stryMutAct_9fa48("35603") ? typeof data.groupName === 'string' : stryMutAct_9fa48("35602") ? false : stryMutAct_9fa48("35601") ? true : (stryCov_9fa48("35601", "35602", "35603"), typeof data.groupName !== (stryMutAct_9fa48("35604") ? "" : (stryCov_9fa48("35604"), 'string')))) {
      if (stryMutAct_9fa48("35605")) {
        {}
      } else {
        stryCov_9fa48("35605");
        throw new Error(stryMutAct_9fa48("35606") ? "" : (stryCov_9fa48("35606"), '[[error:invalid-group-name]]'));
      }
    }
    const invited = await groups.isInvited(socket.uid, data.groupName);
    if (stryMutAct_9fa48("35609") ? false : stryMutAct_9fa48("35608") ? true : stryMutAct_9fa48("35607") ? invited : (stryCov_9fa48("35607", "35608", "35609"), !invited)) {
      if (stryMutAct_9fa48("35610")) {
        {}
      } else {
        stryCov_9fa48("35610");
        throw new Error(stryMutAct_9fa48("35611") ? "" : (stryCov_9fa48("35611"), '[[error:not-invited]]'));
      }
    }
  }
}
SocketGroups.accept = async (socket, data) => {
  if (stryMutAct_9fa48("35612")) {
    {}
  } else {
    stryCov_9fa48("35612");
    await isOwner(socket, data);
    await groups.acceptMembership(data.groupName, data.toUid);
    logGroupEvent(socket, stryMutAct_9fa48("35613") ? "" : (stryCov_9fa48("35613"), 'group-accept-membership'), stryMutAct_9fa48("35614") ? {} : (stryCov_9fa48("35614"), {
      groupName: data.groupName,
      targetUid: data.toUid
    }));
  }
};
SocketGroups.reject = async (socket, data) => {
  if (stryMutAct_9fa48("35615")) {
    {}
  } else {
    stryCov_9fa48("35615");
    await isOwner(socket, data);
    await groups.rejectMembership(data.groupName, data.toUid);
    logGroupEvent(socket, stryMutAct_9fa48("35616") ? "" : (stryCov_9fa48("35616"), 'group-reject-membership'), stryMutAct_9fa48("35617") ? {} : (stryCov_9fa48("35617"), {
      groupName: data.groupName,
      targetUid: data.toUid
    }));
  }
};
SocketGroups.acceptAll = async (socket, data) => {
  if (stryMutAct_9fa48("35618")) {
    {}
  } else {
    stryCov_9fa48("35618");
    await isOwner(socket, data);
    await acceptRejectAll(SocketGroups.accept, socket, data);
  }
};
SocketGroups.rejectAll = async (socket, data) => {
  if (stryMutAct_9fa48("35619")) {
    {}
  } else {
    stryCov_9fa48("35619");
    await isOwner(socket, data);
    await acceptRejectAll(SocketGroups.reject, socket, data);
  }
};
async function acceptRejectAll(method, socket, data) {
  if (stryMutAct_9fa48("35620")) {
    {}
  } else {
    stryCov_9fa48("35620");
    if (stryMutAct_9fa48("35623") ? typeof data.groupName === 'string' : stryMutAct_9fa48("35622") ? false : stryMutAct_9fa48("35621") ? true : (stryCov_9fa48("35621", "35622", "35623"), typeof data.groupName !== (stryMutAct_9fa48("35624") ? "" : (stryCov_9fa48("35624"), 'string')))) {
      if (stryMutAct_9fa48("35625")) {
        {}
      } else {
        stryCov_9fa48("35625");
        throw new Error(stryMutAct_9fa48("35626") ? "" : (stryCov_9fa48("35626"), '[[error:invalid-group-name]]'));
      }
    }
    const uids = await groups.getPending(data.groupName);
    await Promise.all(uids.map(async uid => {
      if (stryMutAct_9fa48("35627")) {
        {}
      } else {
        stryCov_9fa48("35627");
        await method(socket, stryMutAct_9fa48("35628") ? {} : (stryCov_9fa48("35628"), {
          groupName: data.groupName,
          toUid: uid
        }));
      }
    }));
  }
}
SocketGroups.issueInvite = async (socket, data) => {
  if (stryMutAct_9fa48("35629")) {
    {}
  } else {
    stryCov_9fa48("35629");
    await isOwner(socket, data);
    await groups.invite(data.groupName, data.toUid);
    logGroupEvent(socket, stryMutAct_9fa48("35630") ? "" : (stryCov_9fa48("35630"), 'group-invite'), stryMutAct_9fa48("35631") ? {} : (stryCov_9fa48("35631"), {
      groupName: data.groupName,
      targetUid: data.toUid
    }));
  }
};
SocketGroups.issueMassInvite = async (socket, data) => {
  if (stryMutAct_9fa48("35632")) {
    {}
  } else {
    stryCov_9fa48("35632");
    await isOwner(socket, data);
    if (stryMutAct_9fa48("35635") ? (!data || !data.usernames) && !data.groupName : stryMutAct_9fa48("35634") ? false : stryMutAct_9fa48("35633") ? true : (stryCov_9fa48("35633", "35634", "35635"), (stryMutAct_9fa48("35637") ? !data && !data.usernames : stryMutAct_9fa48("35636") ? false : (stryCov_9fa48("35636", "35637"), (stryMutAct_9fa48("35638") ? data : (stryCov_9fa48("35638"), !data)) || (stryMutAct_9fa48("35639") ? data.usernames : (stryCov_9fa48("35639"), !data.usernames)))) || (stryMutAct_9fa48("35640") ? data.groupName : (stryCov_9fa48("35640"), !data.groupName)))) {
      if (stryMutAct_9fa48("35641")) {
        {}
      } else {
        stryCov_9fa48("35641");
        throw new Error(stryMutAct_9fa48("35642") ? "" : (stryCov_9fa48("35642"), '[[error:invalid-data]]'));
      }
    }
    let usernames = String(data.usernames).split(stryMutAct_9fa48("35643") ? "" : (stryCov_9fa48("35643"), ','));
    usernames = usernames.map(stryMutAct_9fa48("35644") ? () => undefined : (stryCov_9fa48("35644"), username => stryMutAct_9fa48("35647") ? username || username.trim() : stryMutAct_9fa48("35646") ? false : stryMutAct_9fa48("35645") ? true : (stryCov_9fa48("35645", "35646", "35647"), username && (stryMutAct_9fa48("35648") ? username : (stryCov_9fa48("35648"), username.trim())))));
    let uids = await user.getUidsByUsernames(usernames);
    uids = stryMutAct_9fa48("35649") ? uids : (stryCov_9fa48("35649"), uids.filter(stryMutAct_9fa48("35650") ? () => undefined : (stryCov_9fa48("35650"), uid => stryMutAct_9fa48("35653") ? !!uid || parseInt(uid, 10) : stryMutAct_9fa48("35652") ? false : stryMutAct_9fa48("35651") ? true : (stryCov_9fa48("35651", "35652", "35653"), (stryMutAct_9fa48("35654") ? !uid : (stryCov_9fa48("35654"), !(stryMutAct_9fa48("35655") ? uid : (stryCov_9fa48("35655"), !uid)))) && parseInt(uid, 10)))));
    await groups.invite(data.groupName, uids);
    for (const uid of uids) {
      if (stryMutAct_9fa48("35656")) {
        {}
      } else {
        stryCov_9fa48("35656");
        logGroupEvent(socket, stryMutAct_9fa48("35657") ? "" : (stryCov_9fa48("35657"), 'group-invite'), stryMutAct_9fa48("35658") ? {} : (stryCov_9fa48("35658"), {
          groupName: data.groupName,
          targetUid: uid
        }));
      }
    }
  }
};
SocketGroups.rescindInvite = async (socket, data) => {
  if (stryMutAct_9fa48("35659")) {
    {}
  } else {
    stryCov_9fa48("35659");
    await isOwner(socket, data);
    await groups.rejectMembership(data.groupName, data.toUid);
  }
};
SocketGroups.acceptInvite = async (socket, data) => {
  if (stryMutAct_9fa48("35660")) {
    {}
  } else {
    stryCov_9fa48("35660");
    await isInvited(socket, data);
    await groups.acceptMembership(data.groupName, socket.uid);
    logGroupEvent(socket, stryMutAct_9fa48("35661") ? "" : (stryCov_9fa48("35661"), 'group-invite-accept'), stryMutAct_9fa48("35662") ? {} : (stryCov_9fa48("35662"), {
      groupName: data.groupName
    }));
  }
};
SocketGroups.rejectInvite = async (socket, data) => {
  if (stryMutAct_9fa48("35663")) {
    {}
  } else {
    stryCov_9fa48("35663");
    await isInvited(socket, data);
    await groups.rejectMembership(data.groupName, socket.uid);
    logGroupEvent(socket, stryMutAct_9fa48("35664") ? "" : (stryCov_9fa48("35664"), 'group-invite-reject'), stryMutAct_9fa48("35665") ? {} : (stryCov_9fa48("35665"), {
      groupName: data.groupName
    }));
  }
};
SocketGroups.kick = async (socket, data) => {
  if (stryMutAct_9fa48("35666")) {
    {}
  } else {
    stryCov_9fa48("35666");
    await isOwner(socket, data);
    if (stryMutAct_9fa48("35669") ? socket.uid !== parseInt(data.uid, 10) : stryMutAct_9fa48("35668") ? false : stryMutAct_9fa48("35667") ? true : (stryCov_9fa48("35667", "35668", "35669"), socket.uid === parseInt(data.uid, 10))) {
      if (stryMutAct_9fa48("35670")) {
        {}
      } else {
        stryCov_9fa48("35670");
        throw new Error(stryMutAct_9fa48("35671") ? "" : (stryCov_9fa48("35671"), '[[error:cant-kick-self]]'));
      }
    }
    const isOwnerBit = await groups.ownership.isOwner(data.uid, data.groupName);
    await groups.kick(data.uid, data.groupName, isOwnerBit);
    logGroupEvent(socket, stryMutAct_9fa48("35672") ? "" : (stryCov_9fa48("35672"), 'group-kick'), stryMutAct_9fa48("35673") ? {} : (stryCov_9fa48("35673"), {
      groupName: data.groupName,
      targetUid: data.uid
    }));
  }
};
SocketGroups.search = async (socket, data) => {
  if (stryMutAct_9fa48("35674")) {
    {}
  } else {
    stryCov_9fa48("35674");
    data.options = stryMutAct_9fa48("35677") ? data.options && {} : stryMutAct_9fa48("35676") ? false : stryMutAct_9fa48("35675") ? true : (stryCov_9fa48("35675", "35676", "35677"), data.options || {});
    if (stryMutAct_9fa48("35680") ? false : stryMutAct_9fa48("35679") ? true : stryMutAct_9fa48("35678") ? data.query : (stryCov_9fa48("35678", "35679", "35680"), !data.query)) {
      if (stryMutAct_9fa48("35681")) {
        {}
      } else {
        stryCov_9fa48("35681");
        const groupsPerPage = 15;
        const groupData = await groups.getGroupsBySort(data.options.sort, 0, stryMutAct_9fa48("35682") ? groupsPerPage + 1 : (stryCov_9fa48("35682"), groupsPerPage - 1));
        return groupData;
      }
    }
    data.options.filterHidden = stryMutAct_9fa48("35685") ? data.options.filterHidden && !(await user.isAdministrator(socket.uid)) : stryMutAct_9fa48("35684") ? false : stryMutAct_9fa48("35683") ? true : (stryCov_9fa48("35683", "35684", "35685"), data.options.filterHidden || (stryMutAct_9fa48("35686") ? await user.isAdministrator(socket.uid) : (stryCov_9fa48("35686"), !(await user.isAdministrator(socket.uid)))));
    return await groups.search(data.query, data.options);
  }
};
SocketGroups.loadMore = async (socket, data) => {
  if (stryMutAct_9fa48("35687")) {
    {}
  } else {
    stryCov_9fa48("35687");
    if (stryMutAct_9fa48("35690") ? (!data.sort || !utils.isNumber(data.after)) && parseInt(data.after, 10) < 0 : stryMutAct_9fa48("35689") ? false : stryMutAct_9fa48("35688") ? true : (stryCov_9fa48("35688", "35689", "35690"), (stryMutAct_9fa48("35692") ? !data.sort && !utils.isNumber(data.after) : stryMutAct_9fa48("35691") ? false : (stryCov_9fa48("35691", "35692"), (stryMutAct_9fa48("35693") ? data.sort : (stryCov_9fa48("35693"), !data.sort)) || (stryMutAct_9fa48("35694") ? utils.isNumber(data.after) : (stryCov_9fa48("35694"), !utils.isNumber(data.after))))) || (stryMutAct_9fa48("35697") ? parseInt(data.after, 10) >= 0 : stryMutAct_9fa48("35696") ? parseInt(data.after, 10) <= 0 : stryMutAct_9fa48("35695") ? false : (stryCov_9fa48("35695", "35696", "35697"), parseInt(data.after, 10) < 0)))) {
      if (stryMutAct_9fa48("35698")) {
        {}
      } else {
        stryCov_9fa48("35698");
        throw new Error(stryMutAct_9fa48("35699") ? "" : (stryCov_9fa48("35699"), '[[error:invalid-data]]'));
      }
    }
    const groupsPerPage = 10;
    const start = parseInt(data.after, 10);
    const stop = stryMutAct_9fa48("35700") ? start + groupsPerPage + 1 : (stryCov_9fa48("35700"), (stryMutAct_9fa48("35701") ? start - groupsPerPage : (stryCov_9fa48("35701"), start + groupsPerPage)) - 1);
    const groupData = await groups.getGroupsBySort(data.sort, start, stop);
    return stryMutAct_9fa48("35702") ? {} : (stryCov_9fa48("35702"), {
      groups: groupData,
      nextStart: stryMutAct_9fa48("35703") ? stop - 1 : (stryCov_9fa48("35703"), stop + 1)
    });
  }
};
SocketGroups.searchMembers = async (socket, data) => {
  if (stryMutAct_9fa48("35704")) {
    {}
  } else {
    stryCov_9fa48("35704");
    if (stryMutAct_9fa48("35707") ? false : stryMutAct_9fa48("35706") ? true : stryMutAct_9fa48("35705") ? data.groupName : (stryCov_9fa48("35705", "35706", "35707"), !data.groupName)) {
      if (stryMutAct_9fa48("35708")) {
        {}
      } else {
        stryCov_9fa48("35708");
        throw new Error(stryMutAct_9fa48("35709") ? "" : (stryCov_9fa48("35709"), '[[error:invalid-data]]'));
      }
    }
    await canSearchMembers(socket.uid, data.groupName);
    if (stryMutAct_9fa48("35712") ? false : stryMutAct_9fa48("35711") ? true : stryMutAct_9fa48("35710") ? await privileges.global.can('search:users', socket.uid) : (stryCov_9fa48("35710", "35711", "35712"), !(await privileges.global.can(stryMutAct_9fa48("35713") ? "" : (stryCov_9fa48("35713"), 'search:users'), socket.uid)))) {
      if (stryMutAct_9fa48("35714")) {
        {}
      } else {
        stryCov_9fa48("35714");
        throw new Error(stryMutAct_9fa48("35715") ? "" : (stryCov_9fa48("35715"), '[[error:no-privileges]]'));
      }
    }
    return await groups.searchMembers(stryMutAct_9fa48("35716") ? {} : (stryCov_9fa48("35716"), {
      uid: socket.uid,
      query: data.query,
      groupName: data.groupName
    }));
  }
};
SocketGroups.loadMoreMembers = async (socket, data) => {
  if (stryMutAct_9fa48("35717")) {
    {}
  } else {
    stryCov_9fa48("35717");
    if (stryMutAct_9fa48("35720") ? (!data.groupName || !utils.isNumber(data.after)) && parseInt(data.after, 10) < 0 : stryMutAct_9fa48("35719") ? false : stryMutAct_9fa48("35718") ? true : (stryCov_9fa48("35718", "35719", "35720"), (stryMutAct_9fa48("35722") ? !data.groupName && !utils.isNumber(data.after) : stryMutAct_9fa48("35721") ? false : (stryCov_9fa48("35721", "35722"), (stryMutAct_9fa48("35723") ? data.groupName : (stryCov_9fa48("35723"), !data.groupName)) || (stryMutAct_9fa48("35724") ? utils.isNumber(data.after) : (stryCov_9fa48("35724"), !utils.isNumber(data.after))))) || (stryMutAct_9fa48("35727") ? parseInt(data.after, 10) >= 0 : stryMutAct_9fa48("35726") ? parseInt(data.after, 10) <= 0 : stryMutAct_9fa48("35725") ? false : (stryCov_9fa48("35725", "35726", "35727"), parseInt(data.after, 10) < 0)))) {
      if (stryMutAct_9fa48("35728")) {
        {}
      } else {
        stryCov_9fa48("35728");
        throw new Error(stryMutAct_9fa48("35729") ? "" : (stryCov_9fa48("35729"), '[[error:invalid-data]]'));
      }
    }
    await canSearchMembers(socket.uid, data.groupName);
    data.after = parseInt(data.after, 10);
    const users = await groups.getOwnersAndMembers(data.groupName, socket.uid, data.after, stryMutAct_9fa48("35730") ? data.after - 9 : (stryCov_9fa48("35730"), data.after + 9));
    return stryMutAct_9fa48("35731") ? {} : (stryCov_9fa48("35731"), {
      users: users,
      nextStart: stryMutAct_9fa48("35732") ? data.after - 10 : (stryCov_9fa48("35732"), data.after + 10)
    });
  }
};
async function canSearchMembers(uid, groupName) {
  if (stryMutAct_9fa48("35733")) {
    {}
  } else {
    stryCov_9fa48("35733");
    const [isHidden, isMember, hasAdminPrivilege, isGlobalMod, viewGroups] = await Promise.all(stryMutAct_9fa48("35734") ? [] : (stryCov_9fa48("35734"), [groups.isHidden(groupName), groups.isMember(uid, groupName), privileges.admin.can(stryMutAct_9fa48("35735") ? "" : (stryCov_9fa48("35735"), 'admin:groups'), uid), user.isGlobalModerator(uid), privileges.global.can(stryMutAct_9fa48("35736") ? "" : (stryCov_9fa48("35736"), 'view:groups'), uid)]));
    if (stryMutAct_9fa48("35739") ? !viewGroups && isHidden && !isMember && !hasAdminPrivilege && !isGlobalMod : stryMutAct_9fa48("35738") ? false : stryMutAct_9fa48("35737") ? true : (stryCov_9fa48("35737", "35738", "35739"), (stryMutAct_9fa48("35740") ? viewGroups : (stryCov_9fa48("35740"), !viewGroups)) || (stryMutAct_9fa48("35742") ? isHidden && !isMember && !hasAdminPrivilege || !isGlobalMod : stryMutAct_9fa48("35741") ? false : (stryCov_9fa48("35741", "35742"), (stryMutAct_9fa48("35744") ? isHidden && !isMember || !hasAdminPrivilege : stryMutAct_9fa48("35743") ? true : (stryCov_9fa48("35743", "35744"), (stryMutAct_9fa48("35746") ? isHidden || !isMember : stryMutAct_9fa48("35745") ? true : (stryCov_9fa48("35745", "35746"), isHidden && (stryMutAct_9fa48("35747") ? isMember : (stryCov_9fa48("35747"), !isMember)))) && (stryMutAct_9fa48("35748") ? hasAdminPrivilege : (stryCov_9fa48("35748"), !hasAdminPrivilege)))) && (stryMutAct_9fa48("35749") ? isGlobalMod : (stryCov_9fa48("35749"), !isGlobalMod)))))) {
      if (stryMutAct_9fa48("35750")) {
        {}
      } else {
        stryCov_9fa48("35750");
        throw new Error(stryMutAct_9fa48("35751") ? "" : (stryCov_9fa48("35751"), '[[error:no-privileges]]'));
      }
    }
  }
}
SocketGroups.cover = {};
SocketGroups.cover.update = async (socket, data) => {
  if (stryMutAct_9fa48("35752")) {
    {}
  } else {
    stryCov_9fa48("35752");
    if (stryMutAct_9fa48("35755") ? false : stryMutAct_9fa48("35754") ? true : stryMutAct_9fa48("35753") ? socket.uid : (stryCov_9fa48("35753", "35754", "35755"), !socket.uid)) {
      if (stryMutAct_9fa48("35756")) {
        {}
      } else {
        stryCov_9fa48("35756");
        throw new Error(stryMutAct_9fa48("35757") ? "" : (stryCov_9fa48("35757"), '[[error:no-privileges]]'));
      }
    }
    if (stryMutAct_9fa48("35760") ? data.file && !data.imageData && !data.position : stryMutAct_9fa48("35759") ? false : stryMutAct_9fa48("35758") ? true : (stryCov_9fa48("35758", "35759", "35760"), data.file || (stryMutAct_9fa48("35762") ? !data.imageData || !data.position : stryMutAct_9fa48("35761") ? false : (stryCov_9fa48("35761", "35762"), (stryMutAct_9fa48("35763") ? data.imageData : (stryCov_9fa48("35763"), !data.imageData)) && (stryMutAct_9fa48("35764") ? data.position : (stryCov_9fa48("35764"), !data.position)))))) {
      if (stryMutAct_9fa48("35765")) {
        {}
      } else {
        stryCov_9fa48("35765");
        throw new Error(stryMutAct_9fa48("35766") ? "" : (stryCov_9fa48("35766"), '[[error:invalid-data]]'));
      }
    }
    await canModifyGroup(socket.uid, data.groupName);
    return await groups.updateCover(socket.uid, stryMutAct_9fa48("35767") ? {} : (stryCov_9fa48("35767"), {
      groupName: data.groupName,
      imageData: data.imageData,
      position: data.position
    }));
  }
};
SocketGroups.cover.remove = async (socket, data) => {
  if (stryMutAct_9fa48("35768")) {
    {}
  } else {
    stryCov_9fa48("35768");
    if (stryMutAct_9fa48("35771") ? false : stryMutAct_9fa48("35770") ? true : stryMutAct_9fa48("35769") ? socket.uid : (stryCov_9fa48("35769", "35770", "35771"), !socket.uid)) {
      if (stryMutAct_9fa48("35772")) {
        {}
      } else {
        stryCov_9fa48("35772");
        throw new Error(stryMutAct_9fa48("35773") ? "" : (stryCov_9fa48("35773"), '[[error:no-privileges]]'));
      }
    }
    await canModifyGroup(socket.uid, data.groupName);
    await groups.removeCover(stryMutAct_9fa48("35774") ? {} : (stryCov_9fa48("35774"), {
      groupName: data.groupName
    }));
  }
};
async function canModifyGroup(uid, groupName) {
  if (stryMutAct_9fa48("35775")) {
    {}
  } else {
    stryCov_9fa48("35775");
    if (stryMutAct_9fa48("35778") ? typeof groupName === 'string' : stryMutAct_9fa48("35777") ? false : stryMutAct_9fa48("35776") ? true : (stryCov_9fa48("35776", "35777", "35778"), typeof groupName !== (stryMutAct_9fa48("35779") ? "" : (stryCov_9fa48("35779"), 'string')))) {
      if (stryMutAct_9fa48("35780")) {
        {}
      } else {
        stryCov_9fa48("35780");
        throw new Error(stryMutAct_9fa48("35781") ? "" : (stryCov_9fa48("35781"), '[[error:invalid-group-name]]'));
      }
    }
    const results = await utils.promiseParallel(stryMutAct_9fa48("35782") ? {} : (stryCov_9fa48("35782"), {
      isOwner: groups.ownership.isOwner(uid, groupName),
      system: groups.getGroupField(groupName, stryMutAct_9fa48("35783") ? "" : (stryCov_9fa48("35783"), 'system')),
      hasAdminPrivilege: privileges.admin.can(stryMutAct_9fa48("35784") ? "" : (stryCov_9fa48("35784"), 'admin:groups'), uid),
      isGlobalMod: user.isGlobalModerator(uid)
    }));
    if (stryMutAct_9fa48("35787") ? false : stryMutAct_9fa48("35786") ? true : stryMutAct_9fa48("35785") ? results.isOwner || results.hasAdminPrivilege || results.isGlobalMod && !results.system : (stryCov_9fa48("35785", "35786", "35787"), !(stryMutAct_9fa48("35790") ? (results.isOwner || results.hasAdminPrivilege) && results.isGlobalMod && !results.system : stryMutAct_9fa48("35789") ? false : stryMutAct_9fa48("35788") ? true : (stryCov_9fa48("35788", "35789", "35790"), (stryMutAct_9fa48("35792") ? results.isOwner && results.hasAdminPrivilege : stryMutAct_9fa48("35791") ? false : (stryCov_9fa48("35791", "35792"), results.isOwner || results.hasAdminPrivilege)) || (stryMutAct_9fa48("35794") ? results.isGlobalMod || !results.system : stryMutAct_9fa48("35793") ? false : (stryCov_9fa48("35793", "35794"), results.isGlobalMod && (stryMutAct_9fa48("35795") ? results.system : (stryCov_9fa48("35795"), !results.system)))))))) {
      if (stryMutAct_9fa48("35796")) {
        {}
      } else {
        stryCov_9fa48("35796");
        throw new Error(stryMutAct_9fa48("35797") ? "" : (stryCov_9fa48("35797"), '[[error:no-privileges]]'));
      }
    }
  }
}
function logGroupEvent(socket, event, additional) {
  if (stryMutAct_9fa48("35798")) {
    {}
  } else {
    stryCov_9fa48("35798");
    events.log(stryMutAct_9fa48("35799") ? {} : (stryCov_9fa48("35799"), {
      type: event,
      uid: socket.uid,
      ip: socket.ip,
      ...additional
    }));
  }
}
require('../promisify')(SocketGroups);