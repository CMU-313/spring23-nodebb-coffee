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
const nconf = require('nconf');
const db = require('../database');
const Password = require('../password');
module.exports = function (User) {
  if (stryMutAct_9fa48("48216")) {
    {}
  } else {
    stryCov_9fa48("48216");
    User.hashPassword = async function (password) {
      if (stryMutAct_9fa48("48217")) {
        {}
      } else {
        stryCov_9fa48("48217");
        if (stryMutAct_9fa48("48220") ? false : stryMutAct_9fa48("48219") ? true : stryMutAct_9fa48("48218") ? password : (stryCov_9fa48("48218", "48219", "48220"), !password)) {
          if (stryMutAct_9fa48("48221")) {
            {}
          } else {
            stryCov_9fa48("48221");
            return password;
          }
        }
        return await Password.hash(stryMutAct_9fa48("48224") ? nconf.get('bcrypt_rounds') && 12 : stryMutAct_9fa48("48223") ? false : stryMutAct_9fa48("48222") ? true : (stryCov_9fa48("48222", "48223", "48224"), nconf.get(stryMutAct_9fa48("48225") ? "" : (stryCov_9fa48("48225"), 'bcrypt_rounds')) || 12), password);
      }
    };
    User.isPasswordCorrect = async function (uid, password, ip) {
      if (stryMutAct_9fa48("48226")) {
        {}
      } else {
        stryCov_9fa48("48226");
        password = stryMutAct_9fa48("48229") ? password && '' : stryMutAct_9fa48("48228") ? false : stryMutAct_9fa48("48227") ? true : (stryCov_9fa48("48227", "48228", "48229"), password || (stryMutAct_9fa48("48230") ? "Stryker was here!" : (stryCov_9fa48("48230"), '')));
        let {
          password: hashedPassword,
          'password:shaWrapped': shaWrapped
        } = await db.getObjectFields(stryMutAct_9fa48("48231") ? `` : (stryCov_9fa48("48231"), `user:${uid}`), stryMutAct_9fa48("48232") ? [] : (stryCov_9fa48("48232"), [stryMutAct_9fa48("48233") ? "" : (stryCov_9fa48("48233"), 'password'), stryMutAct_9fa48("48234") ? "" : (stryCov_9fa48("48234"), 'password:shaWrapped')]));
        if (stryMutAct_9fa48("48237") ? false : stryMutAct_9fa48("48236") ? true : stryMutAct_9fa48("48235") ? hashedPassword : (stryCov_9fa48("48235", "48236", "48237"), !hashedPassword)) {
          if (stryMutAct_9fa48("48238")) {
            {}
          } else {
            stryCov_9fa48("48238");
            // Non-existant user, submit fake hash for comparison
            hashedPassword = stryMutAct_9fa48("48239") ? "Stryker was here!" : (stryCov_9fa48("48239"), '');
          }
        }
        try {
          if (stryMutAct_9fa48("48240")) {
            {}
          } else {
            stryCov_9fa48("48240");
            User.isPasswordValid(password, 0);
          }
        } catch (e) {
          if (stryMutAct_9fa48("48241")) {
            {}
          } else {
            stryCov_9fa48("48241");
            return stryMutAct_9fa48("48242") ? true : (stryCov_9fa48("48242"), false);
          }
        }
        await User.auth.logAttempt(uid, ip);
        const ok = await Password.compare(password, hashedPassword, stryMutAct_9fa48("48243") ? !parseInt(shaWrapped, 10) : (stryCov_9fa48("48243"), !(stryMutAct_9fa48("48244") ? parseInt(shaWrapped, 10) : (stryCov_9fa48("48244"), !parseInt(shaWrapped, 10)))));
        if (stryMutAct_9fa48("48246") ? false : stryMutAct_9fa48("48245") ? true : (stryCov_9fa48("48245", "48246"), ok)) {
          if (stryMutAct_9fa48("48247")) {
            {}
          } else {
            stryCov_9fa48("48247");
            await User.auth.clearLoginAttempts(uid);
          }
        }
        return ok;
      }
    };
    User.hasPassword = async function (uid) {
      if (stryMutAct_9fa48("48248")) {
        {}
      } else {
        stryCov_9fa48("48248");
        const hashedPassword = await db.getObjectField(stryMutAct_9fa48("48249") ? `` : (stryCov_9fa48("48249"), `user:${uid}`), stryMutAct_9fa48("48250") ? "" : (stryCov_9fa48("48250"), 'password'));
        return stryMutAct_9fa48("48251") ? !hashedPassword : (stryCov_9fa48("48251"), !(stryMutAct_9fa48("48252") ? hashedPassword : (stryCov_9fa48("48252"), !hashedPassword)));
      }
    };
  }
};