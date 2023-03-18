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
const utils = require('../utils');
const plugins = require('../plugins');
const db = require('../database');
const meta = require('../meta');
const emailer = require('../emailer');
const groups = require('../groups');
const events = require('../events');
const UserEmail = module.exports;
UserEmail.exists = async function (email) {
  if (stryMutAct_9fa48("46814")) {
    {}
  } else {
    stryCov_9fa48("46814");
    const uid = await user.getUidByEmail(stryMutAct_9fa48("46815") ? email.toUpperCase() : (stryCov_9fa48("46815"), email.toLowerCase()));
    return stryMutAct_9fa48("46816") ? !uid : (stryCov_9fa48("46816"), !(stryMutAct_9fa48("46817") ? uid : (stryCov_9fa48("46817"), !uid)));
  }
};
UserEmail.available = async function (email) {
  if (stryMutAct_9fa48("46818")) {
    {}
  } else {
    stryCov_9fa48("46818");
    const exists = await db.isSortedSetMember(stryMutAct_9fa48("46819") ? "" : (stryCov_9fa48("46819"), 'email:uid'), stryMutAct_9fa48("46820") ? email.toUpperCase() : (stryCov_9fa48("46820"), email.toLowerCase()));
    return stryMutAct_9fa48("46821") ? exists : (stryCov_9fa48("46821"), !exists);
  }
};
UserEmail.remove = async function (uid, sessionId) {
  if (stryMutAct_9fa48("46822")) {
    {}
  } else {
    stryCov_9fa48("46822");
    const email = await user.getUserField(uid, stryMutAct_9fa48("46823") ? "" : (stryCov_9fa48("46823"), 'email'));
    if (stryMutAct_9fa48("46826") ? false : stryMutAct_9fa48("46825") ? true : stryMutAct_9fa48("46824") ? email : (stryCov_9fa48("46824", "46825", "46826"), !email)) {
      if (stryMutAct_9fa48("46827")) {
        {}
      } else {
        stryCov_9fa48("46827");
        return;
      }
    }
    await Promise.all(stryMutAct_9fa48("46828") ? [] : (stryCov_9fa48("46828"), [user.setUserFields(uid, stryMutAct_9fa48("46829") ? {} : (stryCov_9fa48("46829"), {
      email: stryMutAct_9fa48("46830") ? "Stryker was here!" : (stryCov_9fa48("46830"), ''),
      'email:confirmed': 0
    })), db.sortedSetRemove(stryMutAct_9fa48("46831") ? "" : (stryCov_9fa48("46831"), 'email:uid'), stryMutAct_9fa48("46832") ? email.toUpperCase() : (stryCov_9fa48("46832"), email.toLowerCase())), db.sortedSetRemove(stryMutAct_9fa48("46833") ? "" : (stryCov_9fa48("46833"), 'email:sorted'), stryMutAct_9fa48("46834") ? `` : (stryCov_9fa48("46834"), `${stryMutAct_9fa48("46835") ? email.toUpperCase() : (stryCov_9fa48("46835"), email.toLowerCase())}:${uid}`)), user.email.expireValidation(uid), user.auth.revokeAllSessions(uid, sessionId), events.log(stryMutAct_9fa48("46836") ? {} : (stryCov_9fa48("46836"), {
      type: stryMutAct_9fa48("46837") ? "" : (stryCov_9fa48("46837"), 'email-change'),
      email,
      newEmail: stryMutAct_9fa48("46838") ? "Stryker was here!" : (stryCov_9fa48("46838"), '')
    }))]));
  }
};
UserEmail.isValidationPending = async (uid, email) => {
  if (stryMutAct_9fa48("46839")) {
    {}
  } else {
    stryCov_9fa48("46839");
    const code = await db.get(stryMutAct_9fa48("46840") ? `` : (stryCov_9fa48("46840"), `confirm:byUid:${uid}`));
    if (stryMutAct_9fa48("46842") ? false : stryMutAct_9fa48("46841") ? true : (stryCov_9fa48("46841", "46842"), email)) {
      if (stryMutAct_9fa48("46843")) {
        {}
      } else {
        stryCov_9fa48("46843");
        const confirmObj = await db.getObject(stryMutAct_9fa48("46844") ? `` : (stryCov_9fa48("46844"), `confirm:${code}`));
        return stryMutAct_9fa48("46845") ? !(confirmObj && email === confirmObj.email) : (stryCov_9fa48("46845"), !(stryMutAct_9fa48("46846") ? confirmObj && email === confirmObj.email : (stryCov_9fa48("46846"), !(stryMutAct_9fa48("46849") ? confirmObj || email === confirmObj.email : stryMutAct_9fa48("46848") ? false : stryMutAct_9fa48("46847") ? true : (stryCov_9fa48("46847", "46848", "46849"), confirmObj && (stryMutAct_9fa48("46851") ? email !== confirmObj.email : stryMutAct_9fa48("46850") ? true : (stryCov_9fa48("46850", "46851"), email === confirmObj.email)))))));
      }
    }
    return stryMutAct_9fa48("46852") ? !code : (stryCov_9fa48("46852"), !(stryMutAct_9fa48("46853") ? code : (stryCov_9fa48("46853"), !code)));
  }
};
UserEmail.getValidationExpiry = async uid => {
  if (stryMutAct_9fa48("46854")) {
    {}
  } else {
    stryCov_9fa48("46854");
    const pending = await UserEmail.isValidationPending(uid);
    return pending ? db.pttl(stryMutAct_9fa48("46855") ? `` : (stryCov_9fa48("46855"), `confirm:byUid:${uid}`)) : null;
  }
};
UserEmail.expireValidation = async uid => {
  if (stryMutAct_9fa48("46856")) {
    {}
  } else {
    stryCov_9fa48("46856");
    const code = await db.get(stryMutAct_9fa48("46857") ? `` : (stryCov_9fa48("46857"), `confirm:byUid:${uid}`));
    await db.deleteAll(stryMutAct_9fa48("46858") ? [] : (stryCov_9fa48("46858"), [stryMutAct_9fa48("46859") ? `` : (stryCov_9fa48("46859"), `confirm:byUid:${uid}`), stryMutAct_9fa48("46860") ? `` : (stryCov_9fa48("46860"), `confirm:${code}`)]));
  }
};
UserEmail.canSendValidation = async (uid, email) => {
  if (stryMutAct_9fa48("46861")) {
    {}
  } else {
    stryCov_9fa48("46861");
    const pending = UserEmail.isValidationPending(uid, email);
    if (stryMutAct_9fa48("46864") ? false : stryMutAct_9fa48("46863") ? true : stryMutAct_9fa48("46862") ? pending : (stryCov_9fa48("46862", "46863", "46864"), !pending)) {
      if (stryMutAct_9fa48("46865")) {
        {}
      } else {
        stryCov_9fa48("46865");
        return stryMutAct_9fa48("46866") ? false : (stryCov_9fa48("46866"), true);
      }
    }
    const ttl = await UserEmail.getValidationExpiry(uid);
    const max = stryMutAct_9fa48("46867") ? meta.config.emailConfirmExpiry * 60 * 60 / 1000 : (stryCov_9fa48("46867"), (stryMutAct_9fa48("46868") ? meta.config.emailConfirmExpiry * 60 / 60 : (stryCov_9fa48("46868"), (stryMutAct_9fa48("46869") ? meta.config.emailConfirmExpiry / 60 : (stryCov_9fa48("46869"), meta.config.emailConfirmExpiry * 60)) * 60)) * 1000);
    const interval = stryMutAct_9fa48("46870") ? meta.config.emailConfirmInterval * 60 / 1000 : (stryCov_9fa48("46870"), (stryMutAct_9fa48("46871") ? meta.config.emailConfirmInterval / 60 : (stryCov_9fa48("46871"), meta.config.emailConfirmInterval * 60)) * 1000);
    return stryMutAct_9fa48("46875") ? ttl + interval >= max : stryMutAct_9fa48("46874") ? ttl + interval <= max : stryMutAct_9fa48("46873") ? false : stryMutAct_9fa48("46872") ? true : (stryCov_9fa48("46872", "46873", "46874", "46875"), (stryMutAct_9fa48("46876") ? ttl - interval : (stryCov_9fa48("46876"), ttl + interval)) < max);
  }
};
UserEmail.sendValidationEmail = async function (uid, options) {
  if (stryMutAct_9fa48("46877")) {
    {}
  } else {
    stryCov_9fa48("46877");
    /*
     * Options:
     * - email, overrides email retrieval
     * - force, sends email even if it is too soon to send another
     * - template, changes the template used for email sending
     */

    if (stryMutAct_9fa48("46880") ? meta.config.sendValidationEmail === 1 : stryMutAct_9fa48("46879") ? false : stryMutAct_9fa48("46878") ? true : (stryCov_9fa48("46878", "46879", "46880"), meta.config.sendValidationEmail !== 1)) {
      if (stryMutAct_9fa48("46881")) {
        {}
      } else {
        stryCov_9fa48("46881");
        winston.verbose(stryMutAct_9fa48("46882") ? `` : (stryCov_9fa48("46882"), `[user/email] Validation email for uid ${uid} not sent due to config settings`));
        return;
      }
    }
    options = stryMutAct_9fa48("46885") ? options && {} : stryMutAct_9fa48("46884") ? false : stryMutAct_9fa48("46883") ? true : (stryCov_9fa48("46883", "46884", "46885"), options || {});

    // Fallback behaviour (email passed in as second argument)
    if (stryMutAct_9fa48("46888") ? typeof options !== 'string' : stryMutAct_9fa48("46887") ? false : stryMutAct_9fa48("46886") ? true : (stryCov_9fa48("46886", "46887", "46888"), typeof options === (stryMutAct_9fa48("46889") ? "" : (stryCov_9fa48("46889"), 'string')))) {
      if (stryMutAct_9fa48("46890")) {
        {}
      } else {
        stryCov_9fa48("46890");
        options = stryMutAct_9fa48("46891") ? {} : (stryCov_9fa48("46891"), {
          email: options
        });
      }
    }
    const confirm_code = utils.generateUUID();
    const confirm_link = stryMutAct_9fa48("46892") ? `` : (stryCov_9fa48("46892"), `${nconf.get(stryMutAct_9fa48("46893") ? "" : (stryCov_9fa48("46893"), 'url'))}/confirm/${confirm_code}`);
    const {
      emailConfirmInterval,
      emailConfirmExpiry
    } = meta.config;

    // If no email passed in (default), retrieve email from uid
    if (stryMutAct_9fa48("46896") ? !options.email && !options.email.length : stryMutAct_9fa48("46895") ? false : stryMutAct_9fa48("46894") ? true : (stryCov_9fa48("46894", "46895", "46896"), (stryMutAct_9fa48("46897") ? options.email : (stryCov_9fa48("46897"), !options.email)) || (stryMutAct_9fa48("46898") ? options.email.length : (stryCov_9fa48("46898"), !options.email.length)))) {
      if (stryMutAct_9fa48("46899")) {
        {}
      } else {
        stryCov_9fa48("46899");
        options.email = await user.getUserField(uid, stryMutAct_9fa48("46900") ? "" : (stryCov_9fa48("46900"), 'email'));
      }
    }
    if (stryMutAct_9fa48("46903") ? false : stryMutAct_9fa48("46902") ? true : stryMutAct_9fa48("46901") ? options.email : (stryCov_9fa48("46901", "46902", "46903"), !options.email)) {
      if (stryMutAct_9fa48("46904")) {
        {}
      } else {
        stryCov_9fa48("46904");
        return;
      }
    }
    if (stryMutAct_9fa48("46907") ? !options.force || !(await UserEmail.canSendValidation(uid, options.email)) : stryMutAct_9fa48("46906") ? false : stryMutAct_9fa48("46905") ? true : (stryCov_9fa48("46905", "46906", "46907"), (stryMutAct_9fa48("46908") ? options.force : (stryCov_9fa48("46908"), !options.force)) && (stryMutAct_9fa48("46909") ? await UserEmail.canSendValidation(uid, options.email) : (stryCov_9fa48("46909"), !(await UserEmail.canSendValidation(uid, options.email)))))) {
      if (stryMutAct_9fa48("46910")) {
        {}
      } else {
        stryCov_9fa48("46910");
        throw new Error(stryMutAct_9fa48("46911") ? `` : (stryCov_9fa48("46911"), `[[error:confirm-email-already-sent, ${emailConfirmInterval}]]`));
      }
    }
    const username = await user.getUserField(uid, stryMutAct_9fa48("46912") ? "" : (stryCov_9fa48("46912"), 'username'));
    const data = await plugins.hooks.fire(stryMutAct_9fa48("46913") ? "" : (stryCov_9fa48("46913"), 'filter:user.verify'), stryMutAct_9fa48("46914") ? {} : (stryCov_9fa48("46914"), {
      uid,
      username,
      confirm_link,
      confirm_code: await plugins.hooks.fire(stryMutAct_9fa48("46915") ? "" : (stryCov_9fa48("46915"), 'filter:user.verify.code'), confirm_code),
      email: options.email,
      subject: stryMutAct_9fa48("46918") ? options.subject && '[[email:email.verify-your-email.subject]]' : stryMutAct_9fa48("46917") ? false : stryMutAct_9fa48("46916") ? true : (stryCov_9fa48("46916", "46917", "46918"), options.subject || (stryMutAct_9fa48("46919") ? "" : (stryCov_9fa48("46919"), '[[email:email.verify-your-email.subject]]'))),
      template: stryMutAct_9fa48("46922") ? options.template && 'verify-email' : stryMutAct_9fa48("46921") ? false : stryMutAct_9fa48("46920") ? true : (stryCov_9fa48("46920", "46921", "46922"), options.template || (stryMutAct_9fa48("46923") ? "" : (stryCov_9fa48("46923"), 'verify-email')))
    }));
    await UserEmail.expireValidation(uid);
    await db.set(stryMutAct_9fa48("46924") ? `` : (stryCov_9fa48("46924"), `confirm:byUid:${uid}`), confirm_code);
    await db.pexpire(stryMutAct_9fa48("46925") ? `` : (stryCov_9fa48("46925"), `confirm:byUid:${uid}`), stryMutAct_9fa48("46926") ? emailConfirmExpiry * 24 * 60 * 60 / 1000 : (stryCov_9fa48("46926"), (stryMutAct_9fa48("46927") ? emailConfirmExpiry * 24 * 60 / 60 : (stryCov_9fa48("46927"), (stryMutAct_9fa48("46928") ? emailConfirmExpiry * 24 / 60 : (stryCov_9fa48("46928"), (stryMutAct_9fa48("46929") ? emailConfirmExpiry / 24 : (stryCov_9fa48("46929"), emailConfirmExpiry * 24)) * 60)) * 60)) * 1000));
    await db.setObject(stryMutAct_9fa48("46930") ? `` : (stryCov_9fa48("46930"), `confirm:${confirm_code}`), stryMutAct_9fa48("46931") ? {} : (stryCov_9fa48("46931"), {
      email: stryMutAct_9fa48("46932") ? options.email.toUpperCase() : (stryCov_9fa48("46932"), options.email.toLowerCase()),
      uid: uid
    }));
    await db.pexpire(stryMutAct_9fa48("46933") ? `` : (stryCov_9fa48("46933"), `confirm:${confirm_code}`), stryMutAct_9fa48("46934") ? emailConfirmExpiry * 24 * 60 * 60 / 1000 : (stryCov_9fa48("46934"), (stryMutAct_9fa48("46935") ? emailConfirmExpiry * 24 * 60 / 60 : (stryCov_9fa48("46935"), (stryMutAct_9fa48("46936") ? emailConfirmExpiry * 24 / 60 : (stryCov_9fa48("46936"), (stryMutAct_9fa48("46937") ? emailConfirmExpiry / 24 : (stryCov_9fa48("46937"), emailConfirmExpiry * 24)) * 60)) * 60)) * 1000));
    winston.verbose(stryMutAct_9fa48("46938") ? `` : (stryCov_9fa48("46938"), `[user/email] Validation email for uid ${uid} sent to ${options.email}`));
    events.log(stryMutAct_9fa48("46939") ? {} : (stryCov_9fa48("46939"), {
      type: stryMutAct_9fa48("46940") ? "" : (stryCov_9fa48("46940"), 'email-confirmation-sent'),
      uid,
      confirm_code,
      ...options
    }));
    if (stryMutAct_9fa48("46942") ? false : stryMutAct_9fa48("46941") ? true : (stryCov_9fa48("46941", "46942"), plugins.hooks.hasListeners(stryMutAct_9fa48("46943") ? "" : (stryCov_9fa48("46943"), 'action:user.verify')))) {
      if (stryMutAct_9fa48("46944")) {
        {}
      } else {
        stryCov_9fa48("46944");
        plugins.hooks.fire(stryMutAct_9fa48("46945") ? "" : (stryCov_9fa48("46945"), 'action:user.verify'), stryMutAct_9fa48("46946") ? {} : (stryCov_9fa48("46946"), {
          uid: uid,
          data: data
        }));
      }
    } else {
      if (stryMutAct_9fa48("46947")) {
        {}
      } else {
        stryCov_9fa48("46947");
        await emailer.send(data.template, uid, data);
      }
    }
    return confirm_code;
  }
};

// confirm email by code sent by confirmation email
UserEmail.confirmByCode = async function (code, sessionId) {
  if (stryMutAct_9fa48("46948")) {
    {}
  } else {
    stryCov_9fa48("46948");
    const confirmObj = await db.getObject(stryMutAct_9fa48("46949") ? `` : (stryCov_9fa48("46949"), `confirm:${code}`));
    if (stryMutAct_9fa48("46952") ? (!confirmObj || !confirmObj.uid) && !confirmObj.email : stryMutAct_9fa48("46951") ? false : stryMutAct_9fa48("46950") ? true : (stryCov_9fa48("46950", "46951", "46952"), (stryMutAct_9fa48("46954") ? !confirmObj && !confirmObj.uid : stryMutAct_9fa48("46953") ? false : (stryCov_9fa48("46953", "46954"), (stryMutAct_9fa48("46955") ? confirmObj : (stryCov_9fa48("46955"), !confirmObj)) || (stryMutAct_9fa48("46956") ? confirmObj.uid : (stryCov_9fa48("46956"), !confirmObj.uid)))) || (stryMutAct_9fa48("46957") ? confirmObj.email : (stryCov_9fa48("46957"), !confirmObj.email)))) {
      if (stryMutAct_9fa48("46958")) {
        {}
      } else {
        stryCov_9fa48("46958");
        throw new Error(stryMutAct_9fa48("46959") ? "" : (stryCov_9fa48("46959"), '[[error:invalid-data]]'));
      }
    }

    // If another uid has the same email, remove it
    const oldUid = await db.sortedSetScore(stryMutAct_9fa48("46960") ? "" : (stryCov_9fa48("46960"), 'email:uid'), stryMutAct_9fa48("46961") ? confirmObj.email.toUpperCase() : (stryCov_9fa48("46961"), confirmObj.email.toLowerCase()));
    if (stryMutAct_9fa48("46963") ? false : stryMutAct_9fa48("46962") ? true : (stryCov_9fa48("46962", "46963"), oldUid)) {
      if (stryMutAct_9fa48("46964")) {
        {}
      } else {
        stryCov_9fa48("46964");
        await UserEmail.remove(oldUid, sessionId);
      }
    }
    const oldEmail = await user.getUserField(confirmObj.uid, stryMutAct_9fa48("46965") ? "" : (stryCov_9fa48("46965"), 'email'));
    if (stryMutAct_9fa48("46968") ? oldEmail || confirmObj.email !== oldEmail : stryMutAct_9fa48("46967") ? false : stryMutAct_9fa48("46966") ? true : (stryCov_9fa48("46966", "46967", "46968"), oldEmail && (stryMutAct_9fa48("46970") ? confirmObj.email === oldEmail : stryMutAct_9fa48("46969") ? true : (stryCov_9fa48("46969", "46970"), confirmObj.email !== oldEmail)))) {
      if (stryMutAct_9fa48("46971")) {
        {}
      } else {
        stryCov_9fa48("46971");
        await UserEmail.remove(confirmObj.uid, sessionId);
      }
    } else {
      if (stryMutAct_9fa48("46972")) {
        {}
      } else {
        stryCov_9fa48("46972");
        await user.auth.revokeAllSessions(confirmObj.uid, sessionId);
      }
    }
    await user.setUserField(confirmObj.uid, stryMutAct_9fa48("46973") ? "" : (stryCov_9fa48("46973"), 'email'), confirmObj.email);
    await Promise.all(stryMutAct_9fa48("46974") ? [] : (stryCov_9fa48("46974"), [UserEmail.confirmByUid(confirmObj.uid), db.delete(stryMutAct_9fa48("46975") ? `` : (stryCov_9fa48("46975"), `confirm:${code}`)), events.log(stryMutAct_9fa48("46976") ? {} : (stryCov_9fa48("46976"), {
      type: stryMutAct_9fa48("46977") ? "" : (stryCov_9fa48("46977"), 'email-change'),
      oldEmail,
      newEmail: confirmObj.email
    }))]));
  }
};

// confirm uid's email via ACP
UserEmail.confirmByUid = async function (uid) {
  if (stryMutAct_9fa48("46978")) {
    {}
  } else {
    stryCov_9fa48("46978");
    if (stryMutAct_9fa48("46981") ? false : stryMutAct_9fa48("46980") ? true : stryMutAct_9fa48("46979") ? parseInt(uid, 10) > 0 : (stryCov_9fa48("46979", "46980", "46981"), !(stryMutAct_9fa48("46985") ? parseInt(uid, 10) <= 0 : stryMutAct_9fa48("46984") ? parseInt(uid, 10) >= 0 : stryMutAct_9fa48("46983") ? false : stryMutAct_9fa48("46982") ? true : (stryCov_9fa48("46982", "46983", "46984", "46985"), parseInt(uid, 10) > 0)))) {
      if (stryMutAct_9fa48("46986")) {
        {}
      } else {
        stryCov_9fa48("46986");
        throw new Error(stryMutAct_9fa48("46987") ? "" : (stryCov_9fa48("46987"), '[[error:invalid-uid]]'));
      }
    }
    const currentEmail = await user.getUserField(uid, stryMutAct_9fa48("46988") ? "" : (stryCov_9fa48("46988"), 'email'));
    if (stryMutAct_9fa48("46991") ? false : stryMutAct_9fa48("46990") ? true : stryMutAct_9fa48("46989") ? currentEmail : (stryCov_9fa48("46989", "46990", "46991"), !currentEmail)) {
      if (stryMutAct_9fa48("46992")) {
        {}
      } else {
        stryCov_9fa48("46992");
        throw new Error(stryMutAct_9fa48("46993") ? "" : (stryCov_9fa48("46993"), '[[error:invalid-email]]'));
      }
    }
    await Promise.all(stryMutAct_9fa48("46994") ? [] : (stryCov_9fa48("46994"), [db.sortedSetAddBulk(stryMutAct_9fa48("46995") ? [] : (stryCov_9fa48("46995"), [stryMutAct_9fa48("46996") ? [] : (stryCov_9fa48("46996"), [stryMutAct_9fa48("46997") ? "" : (stryCov_9fa48("46997"), 'email:uid'), uid, stryMutAct_9fa48("46998") ? currentEmail.toUpperCase() : (stryCov_9fa48("46998"), currentEmail.toLowerCase())]), stryMutAct_9fa48("46999") ? [] : (stryCov_9fa48("46999"), [stryMutAct_9fa48("47000") ? "" : (stryCov_9fa48("47000"), 'email:sorted'), 0, stryMutAct_9fa48("47001") ? `` : (stryCov_9fa48("47001"), `${stryMutAct_9fa48("47002") ? currentEmail.toUpperCase() : (stryCov_9fa48("47002"), currentEmail.toLowerCase())}:${uid}`)]), stryMutAct_9fa48("47003") ? [] : (stryCov_9fa48("47003"), [stryMutAct_9fa48("47004") ? `` : (stryCov_9fa48("47004"), `user:${uid}:emails`), Date.now(), stryMutAct_9fa48("47005") ? `` : (stryCov_9fa48("47005"), `${currentEmail}:${Date.now()}`)])])), user.setUserField(uid, stryMutAct_9fa48("47006") ? "" : (stryCov_9fa48("47006"), 'email:confirmed'), 1), groups.join(stryMutAct_9fa48("47007") ? "" : (stryCov_9fa48("47007"), 'verified-users'), uid), groups.leave(stryMutAct_9fa48("47008") ? "" : (stryCov_9fa48("47008"), 'unverified-users'), uid), user.email.expireValidation(uid), user.reset.cleanByUid(uid)]));
    await plugins.hooks.fire(stryMutAct_9fa48("47009") ? "" : (stryCov_9fa48("47009"), 'action:user.email.confirmed'), stryMutAct_9fa48("47010") ? {} : (stryCov_9fa48("47010"), {
      uid: uid,
      email: currentEmail
    }));
  }
};