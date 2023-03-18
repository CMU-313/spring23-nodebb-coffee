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
const categories = require('../categories');
const events = require('../events');
const user = require('../user');
const groups = require('../groups');
const privileges = require('../privileges');
const categoriesAPI = module.exports;
categoriesAPI.get = async function (caller, data) {
  if (stryMutAct_9fa48("393")) {
    {}
  } else {
    stryCov_9fa48("393");
    const [userPrivileges, category] = await Promise.all(stryMutAct_9fa48("394") ? [] : (stryCov_9fa48("394"), [privileges.categories.get(data.cid, caller.uid), categories.getCategoryData(data.cid)]));
    if (stryMutAct_9fa48("397") ? !category && !userPrivileges.read : stryMutAct_9fa48("396") ? false : stryMutAct_9fa48("395") ? true : (stryCov_9fa48("395", "396", "397"), (stryMutAct_9fa48("398") ? category : (stryCov_9fa48("398"), !category)) || (stryMutAct_9fa48("399") ? userPrivileges.read : (stryCov_9fa48("399"), !userPrivileges.read)))) {
      if (stryMutAct_9fa48("400")) {
        {}
      } else {
        stryCov_9fa48("400");
        return null;
      }
    }
    return category;
  }
};
categoriesAPI.create = async function (caller, data) {
  if (stryMutAct_9fa48("401")) {
    {}
  } else {
    stryCov_9fa48("401");
    const response = await categories.create(data);
    const categoryObjs = await categories.getCategories(stryMutAct_9fa48("402") ? [] : (stryCov_9fa48("402"), [response.cid]), caller.uid);
    return categoryObjs[0];
  }
};
categoriesAPI.update = async function (caller, data) {
  if (stryMutAct_9fa48("403")) {
    {}
  } else {
    stryCov_9fa48("403");
    if (stryMutAct_9fa48("406") ? false : stryMutAct_9fa48("405") ? true : stryMutAct_9fa48("404") ? data : (stryCov_9fa48("404", "405", "406"), !data)) {
      if (stryMutAct_9fa48("407")) {
        {}
      } else {
        stryCov_9fa48("407");
        throw new Error(stryMutAct_9fa48("408") ? "" : (stryCov_9fa48("408"), '[[error:invalid-data]]'));
      }
    }
    await categories.update(data);
  }
};
categoriesAPI.delete = async function (caller, data) {
  if (stryMutAct_9fa48("409")) {
    {}
  } else {
    stryCov_9fa48("409");
    const name = await categories.getCategoryField(data.cid, stryMutAct_9fa48("410") ? "" : (stryCov_9fa48("410"), 'name'));
    await categories.purge(data.cid, caller.uid);
    await events.log(stryMutAct_9fa48("411") ? {} : (stryCov_9fa48("411"), {
      type: stryMutAct_9fa48("412") ? "" : (stryCov_9fa48("412"), 'category-purge'),
      uid: caller.uid,
      ip: caller.ip,
      cid: data.cid,
      name: name
    }));
  }
};
categoriesAPI.getPrivileges = async (caller, cid) => {
  if (stryMutAct_9fa48("413")) {
    {}
  } else {
    stryCov_9fa48("413");
    let responsePayload;
    if (stryMutAct_9fa48("416") ? cid !== 'admin' : stryMutAct_9fa48("415") ? false : stryMutAct_9fa48("414") ? true : (stryCov_9fa48("414", "415", "416"), cid === (stryMutAct_9fa48("417") ? "" : (stryCov_9fa48("417"), 'admin')))) {
      if (stryMutAct_9fa48("418")) {
        {}
      } else {
        stryCov_9fa48("418");
        responsePayload = await privileges.admin.list(caller.uid);
      }
    } else if (stryMutAct_9fa48("421") ? false : stryMutAct_9fa48("420") ? true : stryMutAct_9fa48("419") ? parseInt(cid, 10) : (stryCov_9fa48("419", "420", "421"), !parseInt(cid, 10))) {
      if (stryMutAct_9fa48("422")) {
        {}
      } else {
        stryCov_9fa48("422");
        responsePayload = await privileges.global.list();
      }
    } else {
      if (stryMutAct_9fa48("423")) {
        {}
      } else {
        stryCov_9fa48("423");
        responsePayload = await privileges.categories.list(cid);
      }
    }
    return responsePayload;
  }
};
categoriesAPI.setPrivilege = async (caller, data) => {
  if (stryMutAct_9fa48("424")) {
    {}
  } else {
    stryCov_9fa48("424");
    const [userExists, groupExists] = await Promise.all(stryMutAct_9fa48("425") ? [] : (stryCov_9fa48("425"), [user.exists(data.member), groups.exists(data.member)]));
    if (stryMutAct_9fa48("428") ? !userExists || !groupExists : stryMutAct_9fa48("427") ? false : stryMutAct_9fa48("426") ? true : (stryCov_9fa48("426", "427", "428"), (stryMutAct_9fa48("429") ? userExists : (stryCov_9fa48("429"), !userExists)) && (stryMutAct_9fa48("430") ? groupExists : (stryCov_9fa48("430"), !groupExists)))) {
      if (stryMutAct_9fa48("431")) {
        {}
      } else {
        stryCov_9fa48("431");
        throw new Error(stryMutAct_9fa48("432") ? "" : (stryCov_9fa48("432"), '[[error:no-user-or-group]]'));
      }
    }
    const privs = Array.isArray(data.privilege) ? data.privilege : stryMutAct_9fa48("433") ? [] : (stryCov_9fa48("433"), [data.privilege]);
    const type = data.set ? stryMutAct_9fa48("434") ? "" : (stryCov_9fa48("434"), 'give') : stryMutAct_9fa48("435") ? "" : (stryCov_9fa48("435"), 'rescind');
    if (stryMutAct_9fa48("438") ? false : stryMutAct_9fa48("437") ? true : stryMutAct_9fa48("436") ? privs.length : (stryCov_9fa48("436", "437", "438"), !privs.length)) {
      if (stryMutAct_9fa48("439")) {
        {}
      } else {
        stryCov_9fa48("439");
        throw new Error(stryMutAct_9fa48("440") ? "" : (stryCov_9fa48("440"), '[[error:invalid-data]]'));
      }
    }
    if (stryMutAct_9fa48("443") ? parseInt(data.cid, 10) !== 0 : stryMutAct_9fa48("442") ? false : stryMutAct_9fa48("441") ? true : (stryCov_9fa48("441", "442", "443"), parseInt(data.cid, 10) === 0)) {
      if (stryMutAct_9fa48("444")) {
        {}
      } else {
        stryCov_9fa48("444");
        const adminPrivList = await privileges.admin.getPrivilegeList();
        const adminPrivs = stryMutAct_9fa48("445") ? privs : (stryCov_9fa48("445"), privs.filter(stryMutAct_9fa48("446") ? () => undefined : (stryCov_9fa48("446"), priv => adminPrivList.includes(priv))));
        if (stryMutAct_9fa48("448") ? false : stryMutAct_9fa48("447") ? true : (stryCov_9fa48("447", "448"), adminPrivs.length)) {
          if (stryMutAct_9fa48("449")) {
            {}
          } else {
            stryCov_9fa48("449");
            await privileges.admin[type](adminPrivs, data.member);
          }
        }
        const globalPrivList = await privileges.global.getPrivilegeList();
        const globalPrivs = stryMutAct_9fa48("450") ? privs : (stryCov_9fa48("450"), privs.filter(stryMutAct_9fa48("451") ? () => undefined : (stryCov_9fa48("451"), priv => globalPrivList.includes(priv))));
        if (stryMutAct_9fa48("453") ? false : stryMutAct_9fa48("452") ? true : (stryCov_9fa48("452", "453"), globalPrivs.length)) {
          if (stryMutAct_9fa48("454")) {
            {}
          } else {
            stryCov_9fa48("454");
            await privileges.global[type](globalPrivs, data.member);
          }
        }
      }
    } else {
      if (stryMutAct_9fa48("455")) {
        {}
      } else {
        stryCov_9fa48("455");
        const categoryPrivList = await privileges.categories.getPrivilegeList();
        const categoryPrivs = stryMutAct_9fa48("456") ? privs : (stryCov_9fa48("456"), privs.filter(stryMutAct_9fa48("457") ? () => undefined : (stryCov_9fa48("457"), priv => categoryPrivList.includes(priv))));
        await privileges.categories[type](categoryPrivs, data.cid, data.member);
      }
    }
    await events.log(stryMutAct_9fa48("458") ? {} : (stryCov_9fa48("458"), {
      uid: caller.uid,
      type: stryMutAct_9fa48("459") ? "" : (stryCov_9fa48("459"), 'privilege-change'),
      ip: caller.ip,
      privilege: data.privilege.toString(),
      cid: data.cid,
      action: data.set ? stryMutAct_9fa48("460") ? "" : (stryCov_9fa48("460"), 'grant') : stryMutAct_9fa48("461") ? "" : (stryCov_9fa48("461"), 'rescind'),
      target: data.member
    }));
  }
};