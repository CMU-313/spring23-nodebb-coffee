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
const db = require('../database');
module.exports = function (Categories) {
  if (stryMutAct_9fa48("3422")) {
    {}
  } else {
    stryCov_9fa48("3422");
    Categories.markAsRead = async function (cids, uid) {
      if (stryMutAct_9fa48("3423")) {
        {}
      } else {
        stryCov_9fa48("3423");
        if (stryMutAct_9fa48("3426") ? (!Array.isArray(cids) || !cids.length) && parseInt(uid, 10) <= 0 : stryMutAct_9fa48("3425") ? false : stryMutAct_9fa48("3424") ? true : (stryCov_9fa48("3424", "3425", "3426"), (stryMutAct_9fa48("3428") ? !Array.isArray(cids) && !cids.length : stryMutAct_9fa48("3427") ? false : (stryCov_9fa48("3427", "3428"), (stryMutAct_9fa48("3429") ? Array.isArray(cids) : (stryCov_9fa48("3429"), !Array.isArray(cids))) || (stryMutAct_9fa48("3430") ? cids.length : (stryCov_9fa48("3430"), !cids.length)))) || (stryMutAct_9fa48("3433") ? parseInt(uid, 10) > 0 : stryMutAct_9fa48("3432") ? parseInt(uid, 10) < 0 : stryMutAct_9fa48("3431") ? false : (stryCov_9fa48("3431", "3432", "3433"), parseInt(uid, 10) <= 0)))) {
          if (stryMutAct_9fa48("3434")) {
            {}
          } else {
            stryCov_9fa48("3434");
            return;
          }
        }
        let keys = cids.map(stryMutAct_9fa48("3435") ? () => undefined : (stryCov_9fa48("3435"), cid => stryMutAct_9fa48("3436") ? `` : (stryCov_9fa48("3436"), `cid:${cid}:read_by_uid`)));
        const hasRead = await db.isMemberOfSets(keys, uid);
        keys = stryMutAct_9fa48("3437") ? keys : (stryCov_9fa48("3437"), keys.filter(stryMutAct_9fa48("3438") ? () => undefined : (stryCov_9fa48("3438"), (key, index) => stryMutAct_9fa48("3439") ? hasRead[index] : (stryCov_9fa48("3439"), !hasRead[index]))));
        await db.setsAdd(keys, uid);
      }
    };
    Categories.markAsUnreadForAll = async function (cid) {
      if (stryMutAct_9fa48("3440")) {
        {}
      } else {
        stryCov_9fa48("3440");
        if (stryMutAct_9fa48("3443") ? false : stryMutAct_9fa48("3442") ? true : stryMutAct_9fa48("3441") ? parseInt(cid, 10) : (stryCov_9fa48("3441", "3442", "3443"), !parseInt(cid, 10))) {
          if (stryMutAct_9fa48("3444")) {
            {}
          } else {
            stryCov_9fa48("3444");
            return;
          }
        }
        await db.delete(stryMutAct_9fa48("3445") ? `` : (stryCov_9fa48("3445"), `cid:${cid}:read_by_uid`));
      }
    };
    Categories.hasReadCategories = async function (cids, uid) {
      if (stryMutAct_9fa48("3446")) {
        {}
      } else {
        stryCov_9fa48("3446");
        if (stryMutAct_9fa48("3450") ? parseInt(uid, 10) > 0 : stryMutAct_9fa48("3449") ? parseInt(uid, 10) < 0 : stryMutAct_9fa48("3448") ? false : stryMutAct_9fa48("3447") ? true : (stryCov_9fa48("3447", "3448", "3449", "3450"), parseInt(uid, 10) <= 0)) {
          if (stryMutAct_9fa48("3451")) {
            {}
          } else {
            stryCov_9fa48("3451");
            return cids.map(stryMutAct_9fa48("3452") ? () => undefined : (stryCov_9fa48("3452"), () => stryMutAct_9fa48("3453") ? true : (stryCov_9fa48("3453"), false)));
          }
        }
        const sets = cids.map(stryMutAct_9fa48("3454") ? () => undefined : (stryCov_9fa48("3454"), cid => stryMutAct_9fa48("3455") ? `` : (stryCov_9fa48("3455"), `cid:${cid}:read_by_uid`)));
        return await db.isMemberOfSets(sets, uid);
      }
    };
    Categories.hasReadCategory = async function (cid, uid) {
      if (stryMutAct_9fa48("3456")) {
        {}
      } else {
        stryCov_9fa48("3456");
        if (stryMutAct_9fa48("3460") ? parseInt(uid, 10) > 0 : stryMutAct_9fa48("3459") ? parseInt(uid, 10) < 0 : stryMutAct_9fa48("3458") ? false : stryMutAct_9fa48("3457") ? true : (stryCov_9fa48("3457", "3458", "3459", "3460"), parseInt(uid, 10) <= 0)) {
          if (stryMutAct_9fa48("3461")) {
            {}
          } else {
            stryCov_9fa48("3461");
            return stryMutAct_9fa48("3462") ? true : (stryCov_9fa48("3462"), false);
          }
        }
        return await db.isSetMember(stryMutAct_9fa48("3463") ? `` : (stryCov_9fa48("3463"), `cid:${cid}:read_by_uid`), uid);
      }
    };
  }
};