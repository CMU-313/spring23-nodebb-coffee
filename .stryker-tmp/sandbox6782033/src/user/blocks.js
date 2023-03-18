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
const plugins = require('../plugins');
const cacheCreate = require('../cache/lru');
module.exports = function (User) {
  if (stryMutAct_9fa48("45571")) {
    {}
  } else {
    stryCov_9fa48("45571");
    User.blocks = stryMutAct_9fa48("45572") ? {} : (stryCov_9fa48("45572"), {
      _cache: cacheCreate(stryMutAct_9fa48("45573") ? {} : (stryCov_9fa48("45573"), {
        name: stryMutAct_9fa48("45574") ? "" : (stryCov_9fa48("45574"), 'user:blocks'),
        max: 100,
        ttl: 0
      }))
    });
    User.blocks.is = async function (targetUid, uids) {
      if (stryMutAct_9fa48("45575")) {
        {}
      } else {
        stryCov_9fa48("45575");
        const isArray = Array.isArray(uids);
        uids = isArray ? uids : stryMutAct_9fa48("45576") ? [] : (stryCov_9fa48("45576"), [uids]);
        const blocks = await User.blocks.list(uids);
        const isBlocked = uids.map(stryMutAct_9fa48("45577") ? () => undefined : (stryCov_9fa48("45577"), (uid, index) => stryMutAct_9fa48("45580") ? blocks[index] || blocks[index].includes(parseInt(targetUid, 10)) : stryMutAct_9fa48("45579") ? false : stryMutAct_9fa48("45578") ? true : (stryCov_9fa48("45578", "45579", "45580"), blocks[index] && blocks[index].includes(parseInt(targetUid, 10)))));
        return isArray ? isBlocked : isBlocked[0];
      }
    };
    User.blocks.can = async function (callerUid, blockerUid, blockeeUid, type) {
      if (stryMutAct_9fa48("45581")) {
        {}
      } else {
        stryCov_9fa48("45581");
        // Guests can't block
        if (stryMutAct_9fa48("45584") ? blockerUid === 0 && blockeeUid === 0 : stryMutAct_9fa48("45583") ? false : stryMutAct_9fa48("45582") ? true : (stryCov_9fa48("45582", "45583", "45584"), (stryMutAct_9fa48("45586") ? blockerUid !== 0 : stryMutAct_9fa48("45585") ? false : (stryCov_9fa48("45585", "45586"), blockerUid === 0)) || (stryMutAct_9fa48("45588") ? blockeeUid !== 0 : stryMutAct_9fa48("45587") ? false : (stryCov_9fa48("45587", "45588"), blockeeUid === 0)))) {
          if (stryMutAct_9fa48("45589")) {
            {}
          } else {
            stryCov_9fa48("45589");
            throw new Error(stryMutAct_9fa48("45590") ? "" : (stryCov_9fa48("45590"), '[[error:cannot-block-guest]]'));
          }
        } else if (stryMutAct_9fa48("45593") ? blockerUid !== blockeeUid : stryMutAct_9fa48("45592") ? false : stryMutAct_9fa48("45591") ? true : (stryCov_9fa48("45591", "45592", "45593"), blockerUid === blockeeUid)) {
          if (stryMutAct_9fa48("45594")) {
            {}
          } else {
            stryCov_9fa48("45594");
            throw new Error(stryMutAct_9fa48("45595") ? "" : (stryCov_9fa48("45595"), '[[error:cannot-block-self]]'));
          }
        }

        // Administrators and global moderators cannot be blocked
        // Only admins/mods can block users as another user
        const [isCallerAdminOrMod, isBlockeeAdminOrMod] = await Promise.all(stryMutAct_9fa48("45596") ? [] : (stryCov_9fa48("45596"), [User.isAdminOrGlobalMod(callerUid), User.isAdminOrGlobalMod(blockeeUid)]));
        if (stryMutAct_9fa48("45599") ? isBlockeeAdminOrMod || type === 'block' : stryMutAct_9fa48("45598") ? false : stryMutAct_9fa48("45597") ? true : (stryCov_9fa48("45597", "45598", "45599"), isBlockeeAdminOrMod && (stryMutAct_9fa48("45601") ? type !== 'block' : stryMutAct_9fa48("45600") ? true : (stryCov_9fa48("45600", "45601"), type === (stryMutAct_9fa48("45602") ? "" : (stryCov_9fa48("45602"), 'block')))))) {
          if (stryMutAct_9fa48("45603")) {
            {}
          } else {
            stryCov_9fa48("45603");
            throw new Error(stryMutAct_9fa48("45604") ? "" : (stryCov_9fa48("45604"), '[[error:cannot-block-privileged]]'));
          }
        }
        if (stryMutAct_9fa48("45607") ? parseInt(callerUid, 10) !== parseInt(blockerUid, 10) || !isCallerAdminOrMod : stryMutAct_9fa48("45606") ? false : stryMutAct_9fa48("45605") ? true : (stryCov_9fa48("45605", "45606", "45607"), (stryMutAct_9fa48("45609") ? parseInt(callerUid, 10) === parseInt(blockerUid, 10) : stryMutAct_9fa48("45608") ? true : (stryCov_9fa48("45608", "45609"), parseInt(callerUid, 10) !== parseInt(blockerUid, 10))) && (stryMutAct_9fa48("45610") ? isCallerAdminOrMod : (stryCov_9fa48("45610"), !isCallerAdminOrMod)))) {
          if (stryMutAct_9fa48("45611")) {
            {}
          } else {
            stryCov_9fa48("45611");
            throw new Error(stryMutAct_9fa48("45612") ? "" : (stryCov_9fa48("45612"), '[[error:no-privileges]]'));
          }
        }
      }
    };
    User.blocks.list = async function (uids) {
      if (stryMutAct_9fa48("45613")) {
        {}
      } else {
        stryCov_9fa48("45613");
        const isArray = Array.isArray(uids);
        uids = (isArray ? uids : stryMutAct_9fa48("45614") ? [] : (stryCov_9fa48("45614"), [uids])).map(stryMutAct_9fa48("45615") ? () => undefined : (stryCov_9fa48("45615"), uid => parseInt(uid, 10)));
        const cachedData = {};
        const unCachedUids = User.blocks._cache.getUnCachedKeys(uids, cachedData);
        if (stryMutAct_9fa48("45617") ? false : stryMutAct_9fa48("45616") ? true : (stryCov_9fa48("45616", "45617"), unCachedUids.length)) {
          if (stryMutAct_9fa48("45618")) {
            {}
          } else {
            stryCov_9fa48("45618");
            const unCachedData = await db.getSortedSetsMembers(unCachedUids.map(stryMutAct_9fa48("45619") ? () => undefined : (stryCov_9fa48("45619"), uid => stryMutAct_9fa48("45620") ? `` : (stryCov_9fa48("45620"), `uid:${uid}:blocked_uids`))));
            unCachedUids.forEach((uid, index) => {
              if (stryMutAct_9fa48("45621")) {
                {}
              } else {
                stryCov_9fa48("45621");
                cachedData[uid] = (stryMutAct_9fa48("45624") ? unCachedData[index] && [] : stryMutAct_9fa48("45623") ? false : stryMutAct_9fa48("45622") ? true : (stryCov_9fa48("45622", "45623", "45624"), unCachedData[index] || (stryMutAct_9fa48("45625") ? ["Stryker was here"] : (stryCov_9fa48("45625"), [])))).map(stryMutAct_9fa48("45626") ? () => undefined : (stryCov_9fa48("45626"), uid => parseInt(uid, 10)));
                User.blocks._cache.set(uid, cachedData[uid]);
              }
            });
          }
        }
        const result = uids.map(stryMutAct_9fa48("45627") ? () => undefined : (stryCov_9fa48("45627"), uid => stryMutAct_9fa48("45630") ? cachedData[uid] && [] : stryMutAct_9fa48("45629") ? false : stryMutAct_9fa48("45628") ? true : (stryCov_9fa48("45628", "45629", "45630"), cachedData[uid] || (stryMutAct_9fa48("45631") ? ["Stryker was here"] : (stryCov_9fa48("45631"), [])))));
        return isArray ? stryMutAct_9fa48("45632") ? result : (stryCov_9fa48("45632"), result.slice()) : result[0];
      }
    };
    User.blocks.add = async function (targetUid, uid) {
      if (stryMutAct_9fa48("45633")) {
        {}
      } else {
        stryCov_9fa48("45633");
        await User.blocks.applyChecks(stryMutAct_9fa48("45634") ? "" : (stryCov_9fa48("45634"), 'block'), targetUid, uid);
        await db.sortedSetAdd(stryMutAct_9fa48("45635") ? `` : (stryCov_9fa48("45635"), `uid:${uid}:blocked_uids`), Date.now(), targetUid);
        await User.incrementUserFieldBy(uid, stryMutAct_9fa48("45636") ? "" : (stryCov_9fa48("45636"), 'blocksCount'), 1);
        User.blocks._cache.del(parseInt(uid, 10));
        plugins.hooks.fire(stryMutAct_9fa48("45637") ? "" : (stryCov_9fa48("45637"), 'action:user.blocks.add'), stryMutAct_9fa48("45638") ? {} : (stryCov_9fa48("45638"), {
          uid: uid,
          targetUid: targetUid
        }));
      }
    };
    User.blocks.remove = async function (targetUid, uid) {
      if (stryMutAct_9fa48("45639")) {
        {}
      } else {
        stryCov_9fa48("45639");
        await User.blocks.applyChecks(stryMutAct_9fa48("45640") ? "" : (stryCov_9fa48("45640"), 'unblock'), targetUid, uid);
        await db.sortedSetRemove(stryMutAct_9fa48("45641") ? `` : (stryCov_9fa48("45641"), `uid:${uid}:blocked_uids`), targetUid);
        await User.decrementUserFieldBy(uid, stryMutAct_9fa48("45642") ? "" : (stryCov_9fa48("45642"), 'blocksCount'), 1);
        User.blocks._cache.del(parseInt(uid, 10));
        plugins.hooks.fire(stryMutAct_9fa48("45643") ? "" : (stryCov_9fa48("45643"), 'action:user.blocks.remove'), stryMutAct_9fa48("45644") ? {} : (stryCov_9fa48("45644"), {
          uid: uid,
          targetUid: targetUid
        }));
      }
    };
    User.blocks.applyChecks = async function (type, targetUid, uid) {
      if (stryMutAct_9fa48("45645")) {
        {}
      } else {
        stryCov_9fa48("45645");
        await User.blocks.can(uid, uid, targetUid);
        const isBlock = stryMutAct_9fa48("45648") ? type !== 'block' : stryMutAct_9fa48("45647") ? false : stryMutAct_9fa48("45646") ? true : (stryCov_9fa48("45646", "45647", "45648"), type === (stryMutAct_9fa48("45649") ? "" : (stryCov_9fa48("45649"), 'block')));
        const is = await User.blocks.is(targetUid, uid);
        if (stryMutAct_9fa48("45652") ? is !== isBlock : stryMutAct_9fa48("45651") ? false : stryMutAct_9fa48("45650") ? true : (stryCov_9fa48("45650", "45651", "45652"), is === isBlock)) {
          if (stryMutAct_9fa48("45653")) {
            {}
          } else {
            stryCov_9fa48("45653");
            throw new Error(stryMutAct_9fa48("45654") ? `` : (stryCov_9fa48("45654"), `[[error:already-${isBlock ? stryMutAct_9fa48("45655") ? "" : (stryCov_9fa48("45655"), 'blocked') : stryMutAct_9fa48("45656") ? "" : (stryCov_9fa48("45656"), 'unblocked')}]]`));
          }
        }
      }
    };
    User.blocks.filterUids = async function (targetUid, uids) {
      if (stryMutAct_9fa48("45657")) {
        {}
      } else {
        stryCov_9fa48("45657");
        const isBlocked = await User.blocks.is(targetUid, uids);
        return stryMutAct_9fa48("45658") ? uids : (stryCov_9fa48("45658"), uids.filter(stryMutAct_9fa48("45659") ? () => undefined : (stryCov_9fa48("45659"), (uid, index) => stryMutAct_9fa48("45660") ? isBlocked[index] : (stryCov_9fa48("45660"), !isBlocked[index]))));
      }
    };
    User.blocks.filter = async function (uid, property, set) {
      if (stryMutAct_9fa48("45661")) {
        {}
      } else {
        stryCov_9fa48("45661");
        // Given whatever is passed in, iterates through it, and removes entries made by blocked uids
        // property is optional
        if (stryMutAct_9fa48("45664") ? Array.isArray(property) || typeof set === 'undefined' : stryMutAct_9fa48("45663") ? false : stryMutAct_9fa48("45662") ? true : (stryCov_9fa48("45662", "45663", "45664"), Array.isArray(property) && (stryMutAct_9fa48("45666") ? typeof set !== 'undefined' : stryMutAct_9fa48("45665") ? true : (stryCov_9fa48("45665", "45666"), typeof set === (stryMutAct_9fa48("45667") ? "" : (stryCov_9fa48("45667"), 'undefined')))))) {
          if (stryMutAct_9fa48("45668")) {
            {}
          } else {
            stryCov_9fa48("45668");
            set = property;
            property = stryMutAct_9fa48("45669") ? "" : (stryCov_9fa48("45669"), 'uid');
          }
        }
        if (stryMutAct_9fa48("45672") ? !Array.isArray(set) && !set.length : stryMutAct_9fa48("45671") ? false : stryMutAct_9fa48("45670") ? true : (stryCov_9fa48("45670", "45671", "45672"), (stryMutAct_9fa48("45673") ? Array.isArray(set) : (stryCov_9fa48("45673"), !Array.isArray(set))) || (stryMutAct_9fa48("45674") ? set.length : (stryCov_9fa48("45674"), !set.length)))) {
          if (stryMutAct_9fa48("45675")) {
            {}
          } else {
            stryCov_9fa48("45675");
            return set;
          }
        }
        const isPlain = stryMutAct_9fa48("45678") ? typeof set[0] === 'object' : stryMutAct_9fa48("45677") ? false : stryMutAct_9fa48("45676") ? true : (stryCov_9fa48("45676", "45677", "45678"), typeof set[0] !== (stryMutAct_9fa48("45679") ? "" : (stryCov_9fa48("45679"), 'object')));
        const blocked_uids = await User.blocks.list(uid);
        const blockedSet = new Set(blocked_uids);
        set = stryMutAct_9fa48("45680") ? set : (stryCov_9fa48("45680"), set.filter(stryMutAct_9fa48("45681") ? () => undefined : (stryCov_9fa48("45681"), item => stryMutAct_9fa48("45682") ? blockedSet.has(parseInt(isPlain ? item : item && item[property], 10)) : (stryCov_9fa48("45682"), !blockedSet.has(parseInt(isPlain ? item : stryMutAct_9fa48("45685") ? item || item[property] : stryMutAct_9fa48("45684") ? false : stryMutAct_9fa48("45683") ? true : (stryCov_9fa48("45683", "45684", "45685"), item && item[property]), 10))))));
        const data = await plugins.hooks.fire(stryMutAct_9fa48("45686") ? "" : (stryCov_9fa48("45686"), 'filter:user.blocks.filter'), stryMutAct_9fa48("45687") ? {} : (stryCov_9fa48("45687"), {
          set: set,
          property: property,
          uid: uid,
          blockedSet: blockedSet
        }));
        return data.set;
      }
    };
  }
};