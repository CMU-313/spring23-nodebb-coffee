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
const winston = require('winston');
const user = require('./index');
const groups = require('../groups');
const utils = require('../utils');
const batch = require('../batch');
const db = require('../database');
const meta = require('../meta');
const emailer = require('../emailer');
const Password = require('../password');
const UserReset = module.exports;
const twoHours = 7200000;
UserReset.validate = async function (code) {
  if (stryMutAct_9fa48("48944")) {
    {}
  } else {
    stryCov_9fa48("48944");
    const uid = await db.getObjectField(stryMutAct_9fa48("48945") ? "" : (stryCov_9fa48("48945"), 'reset:uid'), code);
    if (stryMutAct_9fa48("48948") ? false : stryMutAct_9fa48("48947") ? true : stryMutAct_9fa48("48946") ? uid : (stryCov_9fa48("48946", "48947", "48948"), !uid)) {
      if (stryMutAct_9fa48("48949")) {
        {}
      } else {
        stryCov_9fa48("48949");
        return stryMutAct_9fa48("48950") ? true : (stryCov_9fa48("48950"), false);
      }
    }
    const issueDate = await db.sortedSetScore(stryMutAct_9fa48("48951") ? "" : (stryCov_9fa48("48951"), 'reset:issueDate'), code);
    return stryMutAct_9fa48("48955") ? parseInt(issueDate, 10) <= Date.now() - twoHours : stryMutAct_9fa48("48954") ? parseInt(issueDate, 10) >= Date.now() - twoHours : stryMutAct_9fa48("48953") ? false : stryMutAct_9fa48("48952") ? true : (stryCov_9fa48("48952", "48953", "48954", "48955"), parseInt(issueDate, 10) > (stryMutAct_9fa48("48956") ? Date.now() + twoHours : (stryCov_9fa48("48956"), Date.now() - twoHours)));
  }
};
UserReset.generate = async function (uid) {
  if (stryMutAct_9fa48("48957")) {
    {}
  } else {
    stryCov_9fa48("48957");
    const code = utils.generateUUID();

    // Invalidate past tokens (must be done prior)
    await UserReset.cleanByUid(uid);
    await Promise.all(stryMutAct_9fa48("48958") ? [] : (stryCov_9fa48("48958"), [db.setObjectField(stryMutAct_9fa48("48959") ? "" : (stryCov_9fa48("48959"), 'reset:uid'), code, uid), db.sortedSetAdd(stryMutAct_9fa48("48960") ? "" : (stryCov_9fa48("48960"), 'reset:issueDate'), Date.now(), code)]));
    return code;
  }
};
async function canGenerate(uid) {
  if (stryMutAct_9fa48("48961")) {
    {}
  } else {
    stryCov_9fa48("48961");
    const score = await db.sortedSetScore(stryMutAct_9fa48("48962") ? "" : (stryCov_9fa48("48962"), 'reset:issueDate:uid'), uid);
    if (stryMutAct_9fa48("48966") ? score <= Date.now() - 1000 * 60 : stryMutAct_9fa48("48965") ? score >= Date.now() - 1000 * 60 : stryMutAct_9fa48("48964") ? false : stryMutAct_9fa48("48963") ? true : (stryCov_9fa48("48963", "48964", "48965", "48966"), score > (stryMutAct_9fa48("48967") ? Date.now() + 1000 * 60 : (stryCov_9fa48("48967"), Date.now() - (stryMutAct_9fa48("48968") ? 1000 / 60 : (stryCov_9fa48("48968"), 1000 * 60)))))) {
      if (stryMutAct_9fa48("48969")) {
        {}
      } else {
        stryCov_9fa48("48969");
        throw new Error(stryMutAct_9fa48("48970") ? "" : (stryCov_9fa48("48970"), '[[error:reset-rate-limited]]'));
      }
    }
  }
}
UserReset.send = async function (email) {
  if (stryMutAct_9fa48("48971")) {
    {}
  } else {
    stryCov_9fa48("48971");
    const uid = await user.getUidByEmail(email);
    if (stryMutAct_9fa48("48974") ? false : stryMutAct_9fa48("48973") ? true : stryMutAct_9fa48("48972") ? uid : (stryCov_9fa48("48972", "48973", "48974"), !uid)) {
      if (stryMutAct_9fa48("48975")) {
        {}
      } else {
        stryCov_9fa48("48975");
        throw new Error(stryMutAct_9fa48("48976") ? "" : (stryCov_9fa48("48976"), '[[error:invalid-email]]'));
      }
    }
    await canGenerate(uid);
    await db.sortedSetAdd(stryMutAct_9fa48("48977") ? "" : (stryCov_9fa48("48977"), 'reset:issueDate:uid'), Date.now(), uid);
    const code = await UserReset.generate(uid);
    await emailer.send(stryMutAct_9fa48("48978") ? "" : (stryCov_9fa48("48978"), 'reset'), uid, stryMutAct_9fa48("48979") ? {} : (stryCov_9fa48("48979"), {
      reset_link: stryMutAct_9fa48("48980") ? `` : (stryCov_9fa48("48980"), `${nconf.get(stryMutAct_9fa48("48981") ? "" : (stryCov_9fa48("48981"), 'url'))}/reset/${code}`),
      subject: stryMutAct_9fa48("48982") ? "" : (stryCov_9fa48("48982"), '[[email:password-reset-requested]]'),
      template: stryMutAct_9fa48("48983") ? "" : (stryCov_9fa48("48983"), 'reset'),
      uid: uid
    })).catch(stryMutAct_9fa48("48984") ? () => undefined : (stryCov_9fa48("48984"), err => winston.error(stryMutAct_9fa48("48985") ? `` : (stryCov_9fa48("48985"), `[emailer.send] ${err.stack}`))));
    return code;
  }
};
UserReset.commit = async function (code, password) {
  if (stryMutAct_9fa48("48986")) {
    {}
  } else {
    stryCov_9fa48("48986");
    user.isPasswordValid(password);
    const validated = await UserReset.validate(code);
    if (stryMutAct_9fa48("48989") ? false : stryMutAct_9fa48("48988") ? true : stryMutAct_9fa48("48987") ? validated : (stryCov_9fa48("48987", "48988", "48989"), !validated)) {
      if (stryMutAct_9fa48("48990")) {
        {}
      } else {
        stryCov_9fa48("48990");
        throw new Error(stryMutAct_9fa48("48991") ? "" : (stryCov_9fa48("48991"), '[[error:reset-code-not-valid]]'));
      }
    }
    const uid = await db.getObjectField(stryMutAct_9fa48("48992") ? "" : (stryCov_9fa48("48992"), 'reset:uid'), code);
    if (stryMutAct_9fa48("48995") ? false : stryMutAct_9fa48("48994") ? true : stryMutAct_9fa48("48993") ? uid : (stryCov_9fa48("48993", "48994", "48995"), !uid)) {
      if (stryMutAct_9fa48("48996")) {
        {}
      } else {
        stryCov_9fa48("48996");
        throw new Error(stryMutAct_9fa48("48997") ? "" : (stryCov_9fa48("48997"), '[[error:reset-code-not-valid]]'));
      }
    }
    const userData = await db.getObjectFields(stryMutAct_9fa48("48998") ? `` : (stryCov_9fa48("48998"), `user:${uid}`), stryMutAct_9fa48("48999") ? [] : (stryCov_9fa48("48999"), [stryMutAct_9fa48("49000") ? "" : (stryCov_9fa48("49000"), 'password'), stryMutAct_9fa48("49001") ? "" : (stryCov_9fa48("49001"), 'passwordExpiry'), stryMutAct_9fa48("49002") ? "" : (stryCov_9fa48("49002"), 'password:shaWrapped')]));
    const ok = await Password.compare(password, userData.password, stryMutAct_9fa48("49003") ? !parseInt(userData['password:shaWrapped'], 10) : (stryCov_9fa48("49003"), !(stryMutAct_9fa48("49004") ? parseInt(userData['password:shaWrapped'], 10) : (stryCov_9fa48("49004"), !parseInt(userData[stryMutAct_9fa48("49005") ? "" : (stryCov_9fa48("49005"), 'password:shaWrapped')], 10)))));
    if (stryMutAct_9fa48("49007") ? false : stryMutAct_9fa48("49006") ? true : (stryCov_9fa48("49006", "49007"), ok)) {
      if (stryMutAct_9fa48("49008")) {
        {}
      } else {
        stryCov_9fa48("49008");
        throw new Error(stryMutAct_9fa48("49009") ? "" : (stryCov_9fa48("49009"), '[[error:reset-same-password]]'));
      }
    }
    const hash = await user.hashPassword(password);
    const data = stryMutAct_9fa48("49010") ? {} : (stryCov_9fa48("49010"), {
      password: hash,
      'password:shaWrapped': 1
    });

    // don't verify email if password reset is due to expiry
    const isPasswordExpired = stryMutAct_9fa48("49013") ? userData.passwordExpiry || userData.passwordExpiry < Date.now() : stryMutAct_9fa48("49012") ? false : stryMutAct_9fa48("49011") ? true : (stryCov_9fa48("49011", "49012", "49013"), userData.passwordExpiry && (stryMutAct_9fa48("49016") ? userData.passwordExpiry >= Date.now() : stryMutAct_9fa48("49015") ? userData.passwordExpiry <= Date.now() : stryMutAct_9fa48("49014") ? true : (stryCov_9fa48("49014", "49015", "49016"), userData.passwordExpiry < Date.now())));
    if (stryMutAct_9fa48("49019") ? false : stryMutAct_9fa48("49018") ? true : stryMutAct_9fa48("49017") ? isPasswordExpired : (stryCov_9fa48("49017", "49018", "49019"), !isPasswordExpired)) {
      if (stryMutAct_9fa48("49020")) {
        {}
      } else {
        stryCov_9fa48("49020");
        data[stryMutAct_9fa48("49021") ? "" : (stryCov_9fa48("49021"), 'email:confirmed')] = 1;
        await groups.join(stryMutAct_9fa48("49022") ? "" : (stryCov_9fa48("49022"), 'verified-users'), uid);
        await groups.leave(stryMutAct_9fa48("49023") ? "" : (stryCov_9fa48("49023"), 'unverified-users'), uid);
      }
    }
    await Promise.all(stryMutAct_9fa48("49024") ? [] : (stryCov_9fa48("49024"), [user.setUserFields(uid, data), db.deleteObjectField(stryMutAct_9fa48("49025") ? "" : (stryCov_9fa48("49025"), 'reset:uid'), code), db.sortedSetRemoveBulk(stryMutAct_9fa48("49026") ? [] : (stryCov_9fa48("49026"), [stryMutAct_9fa48("49027") ? [] : (stryCov_9fa48("49027"), [stryMutAct_9fa48("49028") ? "" : (stryCov_9fa48("49028"), 'reset:issueDate'), code]), stryMutAct_9fa48("49029") ? [] : (stryCov_9fa48("49029"), [stryMutAct_9fa48("49030") ? "" : (stryCov_9fa48("49030"), 'reset:issueDate:uid'), uid])])), user.reset.updateExpiry(uid), user.auth.resetLockout(uid), user.auth.revokeAllSessions(uid), user.email.expireValidation(uid)]));
  }
};
UserReset.updateExpiry = async function (uid) {
  if (stryMutAct_9fa48("49031")) {
    {}
  } else {
    stryCov_9fa48("49031");
    const expireDays = meta.config.passwordExpiryDays;
    if (stryMutAct_9fa48("49035") ? expireDays <= 0 : stryMutAct_9fa48("49034") ? expireDays >= 0 : stryMutAct_9fa48("49033") ? false : stryMutAct_9fa48("49032") ? true : (stryCov_9fa48("49032", "49033", "49034", "49035"), expireDays > 0)) {
      if (stryMutAct_9fa48("49036")) {
        {}
      } else {
        stryCov_9fa48("49036");
        const oneDay = stryMutAct_9fa48("49037") ? 1000 * 60 * 60 / 24 : (stryCov_9fa48("49037"), (stryMutAct_9fa48("49038") ? 1000 * 60 / 60 : (stryCov_9fa48("49038"), (stryMutAct_9fa48("49039") ? 1000 / 60 : (stryCov_9fa48("49039"), 1000 * 60)) * 60)) * 24);
        const expiry = stryMutAct_9fa48("49040") ? Date.now() - oneDay * expireDays : (stryCov_9fa48("49040"), Date.now() + (stryMutAct_9fa48("49041") ? oneDay / expireDays : (stryCov_9fa48("49041"), oneDay * expireDays)));
        await user.setUserField(uid, stryMutAct_9fa48("49042") ? "" : (stryCov_9fa48("49042"), 'passwordExpiry'), expiry);
      }
    } else {
      if (stryMutAct_9fa48("49043")) {
        {}
      } else {
        stryCov_9fa48("49043");
        await db.deleteObjectField(stryMutAct_9fa48("49044") ? `` : (stryCov_9fa48("49044"), `user:${uid}`), stryMutAct_9fa48("49045") ? "" : (stryCov_9fa48("49045"), 'passwordExpiry'));
      }
    }
  }
};
UserReset.clean = async function () {
  if (stryMutAct_9fa48("49046")) {
    {}
  } else {
    stryCov_9fa48("49046");
    const [tokens, uids] = await Promise.all(stryMutAct_9fa48("49047") ? [] : (stryCov_9fa48("49047"), [db.getSortedSetRangeByScore(stryMutAct_9fa48("49048") ? "" : (stryCov_9fa48("49048"), 'reset:issueDate'), 0, stryMutAct_9fa48("49049") ? +1 : (stryCov_9fa48("49049"), -1), stryMutAct_9fa48("49050") ? "" : (stryCov_9fa48("49050"), '-inf'), stryMutAct_9fa48("49051") ? Date.now() + twoHours : (stryCov_9fa48("49051"), Date.now() - twoHours)), db.getSortedSetRangeByScore(stryMutAct_9fa48("49052") ? "" : (stryCov_9fa48("49052"), 'reset:issueDate:uid'), 0, stryMutAct_9fa48("49053") ? +1 : (stryCov_9fa48("49053"), -1), stryMutAct_9fa48("49054") ? "" : (stryCov_9fa48("49054"), '-inf'), stryMutAct_9fa48("49055") ? Date.now() + twoHours : (stryCov_9fa48("49055"), Date.now() - twoHours))]));
    if (stryMutAct_9fa48("49058") ? !tokens.length || !uids.length : stryMutAct_9fa48("49057") ? false : stryMutAct_9fa48("49056") ? true : (stryCov_9fa48("49056", "49057", "49058"), (stryMutAct_9fa48("49059") ? tokens.length : (stryCov_9fa48("49059"), !tokens.length)) && (stryMutAct_9fa48("49060") ? uids.length : (stryCov_9fa48("49060"), !uids.length)))) {
      if (stryMutAct_9fa48("49061")) {
        {}
      } else {
        stryCov_9fa48("49061");
        return;
      }
    }
    winston.verbose(stryMutAct_9fa48("49062") ? `` : (stryCov_9fa48("49062"), `[UserReset.clean] Removing ${tokens.length} reset tokens from database`));
    await cleanTokensAndUids(tokens, uids);
  }
};
UserReset.cleanByUid = async function (uid) {
  if (stryMutAct_9fa48("49063")) {
    {}
  } else {
    stryCov_9fa48("49063");
    const tokensToClean = stryMutAct_9fa48("49064") ? ["Stryker was here"] : (stryCov_9fa48("49064"), []);
    uid = parseInt(uid, 10);
    await batch.processSortedSet(stryMutAct_9fa48("49065") ? "" : (stryCov_9fa48("49065"), 'reset:issueDate'), async tokens => {
      if (stryMutAct_9fa48("49066")) {
        {}
      } else {
        stryCov_9fa48("49066");
        const results = await db.getObjectFields(stryMutAct_9fa48("49067") ? "" : (stryCov_9fa48("49067"), 'reset:uid'), tokens);
        for (const [code, result] of Object.entries(results)) {
          if (stryMutAct_9fa48("49068")) {
            {}
          } else {
            stryCov_9fa48("49068");
            if (stryMutAct_9fa48("49071") ? parseInt(result, 10) !== uid : stryMutAct_9fa48("49070") ? false : stryMutAct_9fa48("49069") ? true : (stryCov_9fa48("49069", "49070", "49071"), parseInt(result, 10) === uid)) {
              if (stryMutAct_9fa48("49072")) {
                {}
              } else {
                stryCov_9fa48("49072");
                tokensToClean.push(code);
              }
            }
          }
        }
      }
    }, stryMutAct_9fa48("49073") ? {} : (stryCov_9fa48("49073"), {
      batch: 500
    }));
    if (stryMutAct_9fa48("49076") ? false : stryMutAct_9fa48("49075") ? true : stryMutAct_9fa48("49074") ? tokensToClean.length : (stryCov_9fa48("49074", "49075", "49076"), !tokensToClean.length)) {
      if (stryMutAct_9fa48("49077")) {
        {}
      } else {
        stryCov_9fa48("49077");
        winston.verbose(stryMutAct_9fa48("49078") ? `` : (stryCov_9fa48("49078"), `[UserReset.cleanByUid] No tokens found for uid (${uid}).`));
        return;
      }
    }
    winston.verbose(stryMutAct_9fa48("49079") ? `` : (stryCov_9fa48("49079"), `[UserReset.cleanByUid] Found ${tokensToClean.length} token(s), removing...`));
    await cleanTokensAndUids(tokensToClean, uid);
  }
};
async function cleanTokensAndUids(tokens, uids) {
  if (stryMutAct_9fa48("49080")) {
    {}
  } else {
    stryCov_9fa48("49080");
    await Promise.all(stryMutAct_9fa48("49081") ? [] : (stryCov_9fa48("49081"), [db.deleteObjectFields(stryMutAct_9fa48("49082") ? "" : (stryCov_9fa48("49082"), 'reset:uid'), tokens), db.sortedSetRemove(stryMutAct_9fa48("49083") ? "" : (stryCov_9fa48("49083"), 'reset:issueDate'), tokens), db.sortedSetRemove(stryMutAct_9fa48("49084") ? "" : (stryCov_9fa48("49084"), 'reset:issueDate:uid'), uids)]));
  }
}