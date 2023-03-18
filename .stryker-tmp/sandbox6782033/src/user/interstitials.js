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
const winston = require('winston');
const util = require('util');
const user = require('.');
const db = require('../database');
const meta = require('../meta');
const privileges = require('../privileges');
const plugins = require('../plugins');
const utils = require('../utils');
const sleep = util.promisify(setTimeout);
const Interstitials = module.exports;
Interstitials.email = async data => {
  if (stryMutAct_9fa48("47356")) {
    {}
  } else {
    stryCov_9fa48("47356");
    if (stryMutAct_9fa48("47359") ? false : stryMutAct_9fa48("47358") ? true : stryMutAct_9fa48("47357") ? data.userData : (stryCov_9fa48("47357", "47358", "47359"), !data.userData)) {
      if (stryMutAct_9fa48("47360")) {
        {}
      } else {
        stryCov_9fa48("47360");
        throw new Error(stryMutAct_9fa48("47361") ? "" : (stryCov_9fa48("47361"), '[[error:invalid-data]]'));
      }
    }
    if (stryMutAct_9fa48("47364") ? false : stryMutAct_9fa48("47363") ? true : stryMutAct_9fa48("47362") ? data.userData.updateEmail : (stryCov_9fa48("47362", "47363", "47364"), !data.userData.updateEmail)) {
      if (stryMutAct_9fa48("47365")) {
        {}
      } else {
        stryCov_9fa48("47365");
        return data;
      }
    }
    const [isAdminOrGlobalMod, hasPassword] = await Promise.all(stryMutAct_9fa48("47366") ? [] : (stryCov_9fa48("47366"), [user.isAdminOrGlobalMod(data.req.uid), user.hasPassword(data.userData.uid)]));
    let email;
    if (stryMutAct_9fa48("47368") ? false : stryMutAct_9fa48("47367") ? true : (stryCov_9fa48("47367", "47368"), data.userData.uid)) {
      if (stryMutAct_9fa48("47369")) {
        {}
      } else {
        stryCov_9fa48("47369");
        email = await user.getUserField(data.userData.uid, stryMutAct_9fa48("47370") ? "" : (stryCov_9fa48("47370"), 'email'));
      }
    }
    data.interstitials.push(stryMutAct_9fa48("47371") ? {} : (stryCov_9fa48("47371"), {
      template: stryMutAct_9fa48("47372") ? "" : (stryCov_9fa48("47372"), 'partials/email_update'),
      data: stryMutAct_9fa48("47373") ? {} : (stryCov_9fa48("47373"), {
        email,
        requireEmailAddress: meta.config.requireEmailAddress,
        issuePasswordChallenge: stryMutAct_9fa48("47376") ? !!data.userData.uid || hasPassword : stryMutAct_9fa48("47375") ? false : stryMutAct_9fa48("47374") ? true : (stryCov_9fa48("47374", "47375", "47376"), (stryMutAct_9fa48("47377") ? !data.userData.uid : (stryCov_9fa48("47377"), !(stryMutAct_9fa48("47378") ? data.userData.uid : (stryCov_9fa48("47378"), !data.userData.uid)))) && hasPassword)
      }),
      callback: async (userData, formData) => {
        if (stryMutAct_9fa48("47379")) {
          {}
        } else {
          stryCov_9fa48("47379");
          // Validate and send email confirmation
          if (stryMutAct_9fa48("47381") ? false : stryMutAct_9fa48("47380") ? true : (stryCov_9fa48("47380", "47381"), userData.uid)) {
            if (stryMutAct_9fa48("47382")) {
              {}
            } else {
              stryCov_9fa48("47382");
              const [isPasswordCorrect, canEdit, {
                email: current,
                'email:confirmed': confirmed
              }, {
                allowed,
                error
              }] = await Promise.all(stryMutAct_9fa48("47383") ? [] : (stryCov_9fa48("47383"), [user.isPasswordCorrect(userData.uid, formData.password, data.req.ip), privileges.users.canEdit(data.req.uid, userData.uid), user.getUserFields(userData.uid, stryMutAct_9fa48("47384") ? [] : (stryCov_9fa48("47384"), [stryMutAct_9fa48("47385") ? "" : (stryCov_9fa48("47385"), 'email'), stryMutAct_9fa48("47386") ? "" : (stryCov_9fa48("47386"), 'email:confirmed')])), plugins.hooks.fire(stryMutAct_9fa48("47387") ? "" : (stryCov_9fa48("47387"), 'filter:user.saveEmail'), stryMutAct_9fa48("47388") ? {} : (stryCov_9fa48("47388"), {
                uid: userData.uid,
                email: formData.email,
                registration: stryMutAct_9fa48("47389") ? true : (stryCov_9fa48("47389"), false),
                allowed: stryMutAct_9fa48("47390") ? false : (stryCov_9fa48("47390"), true),
                // change this value to disallow
                error: stryMutAct_9fa48("47391") ? "" : (stryCov_9fa48("47391"), '[[error:invalid-email]]')
              }))]));
              if (stryMutAct_9fa48("47394") ? !isAdminOrGlobalMod || !isPasswordCorrect : stryMutAct_9fa48("47393") ? false : stryMutAct_9fa48("47392") ? true : (stryCov_9fa48("47392", "47393", "47394"), (stryMutAct_9fa48("47395") ? isAdminOrGlobalMod : (stryCov_9fa48("47395"), !isAdminOrGlobalMod)) && (stryMutAct_9fa48("47396") ? isPasswordCorrect : (stryCov_9fa48("47396"), !isPasswordCorrect)))) {
                if (stryMutAct_9fa48("47397")) {
                  {}
                } else {
                  stryCov_9fa48("47397");
                  await sleep(2000);
                }
              }
              if (stryMutAct_9fa48("47400") ? formData.email || formData.email.length : stryMutAct_9fa48("47399") ? false : stryMutAct_9fa48("47398") ? true : (stryCov_9fa48("47398", "47399", "47400"), formData.email && formData.email.length)) {
                if (stryMutAct_9fa48("47401")) {
                  {}
                } else {
                  stryCov_9fa48("47401");
                  if (stryMutAct_9fa48("47404") ? !allowed && !utils.isEmailValid(formData.email) : stryMutAct_9fa48("47403") ? false : stryMutAct_9fa48("47402") ? true : (stryCov_9fa48("47402", "47403", "47404"), (stryMutAct_9fa48("47405") ? allowed : (stryCov_9fa48("47405"), !allowed)) || (stryMutAct_9fa48("47406") ? utils.isEmailValid(formData.email) : (stryCov_9fa48("47406"), !utils.isEmailValid(formData.email))))) {
                    if (stryMutAct_9fa48("47407")) {
                      {}
                    } else {
                      stryCov_9fa48("47407");
                      throw new Error(error);
                    }
                  }

                  // Handle errors when setting to same email (unconfirmed accts only)
                  if (stryMutAct_9fa48("47410") ? formData.email !== current : stryMutAct_9fa48("47409") ? false : stryMutAct_9fa48("47408") ? true : (stryCov_9fa48("47408", "47409", "47410"), formData.email === current)) {
                    if (stryMutAct_9fa48("47411")) {
                      {}
                    } else {
                      stryCov_9fa48("47411");
                      if (stryMutAct_9fa48("47413") ? false : stryMutAct_9fa48("47412") ? true : (stryCov_9fa48("47412", "47413"), confirmed)) {
                        if (stryMutAct_9fa48("47414")) {
                          {}
                        } else {
                          stryCov_9fa48("47414");
                          throw new Error(stryMutAct_9fa48("47415") ? "" : (stryCov_9fa48("47415"), '[[error:email-nochange]]'));
                        }
                      } else if (stryMutAct_9fa48("47417") ? false : stryMutAct_9fa48("47416") ? true : (stryCov_9fa48("47416", "47417"), await user.email.canSendValidation(userData.uid, current))) {
                        if (stryMutAct_9fa48("47418")) {
                          {}
                        } else {
                          stryCov_9fa48("47418");
                          throw new Error(stryMutAct_9fa48("47419") ? `` : (stryCov_9fa48("47419"), `[[error:confirm-email-already-sent, ${meta.config.emailConfirmInterval}]]`));
                        }
                      }
                    }
                  }

                  // Admins editing will auto-confirm, unless editing their own email
                  if (stryMutAct_9fa48("47422") ? isAdminOrGlobalMod || userData.uid !== data.req.uid : stryMutAct_9fa48("47421") ? false : stryMutAct_9fa48("47420") ? true : (stryCov_9fa48("47420", "47421", "47422"), isAdminOrGlobalMod && (stryMutAct_9fa48("47424") ? userData.uid === data.req.uid : stryMutAct_9fa48("47423") ? true : (stryCov_9fa48("47423", "47424"), userData.uid !== data.req.uid)))) {
                    if (stryMutAct_9fa48("47425")) {
                      {}
                    } else {
                      stryCov_9fa48("47425");
                      await user.setUserField(userData.uid, stryMutAct_9fa48("47426") ? "" : (stryCov_9fa48("47426"), 'email'), formData.email);
                      await user.email.confirmByUid(userData.uid);
                    }
                  } else if (stryMutAct_9fa48("47428") ? false : stryMutAct_9fa48("47427") ? true : (stryCov_9fa48("47427", "47428"), canEdit)) {
                    if (stryMutAct_9fa48("47429")) {
                      {}
                    } else {
                      stryCov_9fa48("47429");
                      if (stryMutAct_9fa48("47432") ? hasPassword || !isPasswordCorrect : stryMutAct_9fa48("47431") ? false : stryMutAct_9fa48("47430") ? true : (stryCov_9fa48("47430", "47431", "47432"), hasPassword && (stryMutAct_9fa48("47433") ? isPasswordCorrect : (stryCov_9fa48("47433"), !isPasswordCorrect)))) {
                        if (stryMutAct_9fa48("47434")) {
                          {}
                        } else {
                          stryCov_9fa48("47434");
                          throw new Error(stryMutAct_9fa48("47435") ? "" : (stryCov_9fa48("47435"), '[[error:invalid-password]]'));
                        }
                      }
                      await user.email.sendValidationEmail(userData.uid, stryMutAct_9fa48("47436") ? {} : (stryCov_9fa48("47436"), {
                        email: formData.email,
                        force: stryMutAct_9fa48("47437") ? false : (stryCov_9fa48("47437"), true)
                      })).catch(err => {
                        if (stryMutAct_9fa48("47438")) {
                          {}
                        } else {
                          stryCov_9fa48("47438");
                          winston.error(stryMutAct_9fa48("47439") ? `` : (stryCov_9fa48("47439"), `[user.interstitials.email] Validation email failed to send\n[emailer.send] ${err.stack}`));
                        }
                      });
                      data.req.session.emailChanged = 1;
                    }
                  } else {
                    if (stryMutAct_9fa48("47440")) {
                      {}
                    } else {
                      stryCov_9fa48("47440");
                      // User attempting to edit another user's email -- not allowed
                      throw new Error(stryMutAct_9fa48("47441") ? "" : (stryCov_9fa48("47441"), '[[error:no-privileges]]'));
                    }
                  }
                }
              } else {
                if (stryMutAct_9fa48("47442")) {
                  {}
                } else {
                  stryCov_9fa48("47442");
                  if (stryMutAct_9fa48("47444") ? false : stryMutAct_9fa48("47443") ? true : (stryCov_9fa48("47443", "47444"), meta.config.requireEmailAddress)) {
                    if (stryMutAct_9fa48("47445")) {
                      {}
                    } else {
                      stryCov_9fa48("47445");
                      throw new Error(stryMutAct_9fa48("47446") ? "" : (stryCov_9fa48("47446"), '[[error:invalid-email]]'));
                    }
                  }
                  if (stryMutAct_9fa48("47449") ? current.length || !hasPassword || hasPassword && isPasswordCorrect || isAdminOrGlobalMod : stryMutAct_9fa48("47448") ? false : stryMutAct_9fa48("47447") ? true : (stryCov_9fa48("47447", "47448", "47449"), current.length && (stryMutAct_9fa48("47451") ? (!hasPassword || hasPassword && isPasswordCorrect) && isAdminOrGlobalMod : stryMutAct_9fa48("47450") ? true : (stryCov_9fa48("47450", "47451"), (stryMutAct_9fa48("47453") ? !hasPassword && hasPassword && isPasswordCorrect : stryMutAct_9fa48("47452") ? false : (stryCov_9fa48("47452", "47453"), (stryMutAct_9fa48("47454") ? hasPassword : (stryCov_9fa48("47454"), !hasPassword)) || (stryMutAct_9fa48("47456") ? hasPassword || isPasswordCorrect : stryMutAct_9fa48("47455") ? false : (stryCov_9fa48("47455", "47456"), hasPassword && isPasswordCorrect)))) || isAdminOrGlobalMod)))) {
                    if (stryMutAct_9fa48("47457")) {
                      {}
                    } else {
                      stryCov_9fa48("47457");
                      // User explicitly clearing their email
                      await user.email.remove(userData.uid, data.req.session.id);
                    }
                  }
                }
              }
            }
          } else {
            if (stryMutAct_9fa48("47458")) {
              {}
            } else {
              stryCov_9fa48("47458");
              const {
                allowed,
                error
              } = await plugins.hooks.fire(stryMutAct_9fa48("47459") ? "" : (stryCov_9fa48("47459"), 'filter:user.saveEmail'), stryMutAct_9fa48("47460") ? {} : (stryCov_9fa48("47460"), {
                uid: null,
                email: formData.email,
                registration: stryMutAct_9fa48("47461") ? false : (stryCov_9fa48("47461"), true),
                allowed: stryMutAct_9fa48("47462") ? false : (stryCov_9fa48("47462"), true),
                // change this value to disallow
                error: stryMutAct_9fa48("47463") ? "" : (stryCov_9fa48("47463"), '[[error:invalid-email]]')
              }));
              if (stryMutAct_9fa48("47466") ? !allowed && meta.config.requireEmailAddress && !(formData.email && formData.email.length) : stryMutAct_9fa48("47465") ? false : stryMutAct_9fa48("47464") ? true : (stryCov_9fa48("47464", "47465", "47466"), (stryMutAct_9fa48("47467") ? allowed : (stryCov_9fa48("47467"), !allowed)) || (stryMutAct_9fa48("47469") ? meta.config.requireEmailAddress || !(formData.email && formData.email.length) : stryMutAct_9fa48("47468") ? false : (stryCov_9fa48("47468", "47469"), meta.config.requireEmailAddress && (stryMutAct_9fa48("47470") ? formData.email && formData.email.length : (stryCov_9fa48("47470"), !(stryMutAct_9fa48("47473") ? formData.email || formData.email.length : stryMutAct_9fa48("47472") ? false : stryMutAct_9fa48("47471") ? true : (stryCov_9fa48("47471", "47472", "47473"), formData.email && formData.email.length)))))))) {
                if (stryMutAct_9fa48("47474")) {
                  {}
                } else {
                  stryCov_9fa48("47474");
                  throw new Error(error);
                }
              }

              // New registrants have the confirm email sent from user.create()
              userData.email = formData.email;
            }
          }
          delete userData.updateEmail;
        }
      }
    }));
    return data;
  }
};
Interstitials.gdpr = async function (data) {
  if (stryMutAct_9fa48("47475")) {
    {}
  } else {
    stryCov_9fa48("47475");
    if (stryMutAct_9fa48("47478") ? !meta.config.gdpr_enabled && data.userData && data.userData.gdpr_consent : stryMutAct_9fa48("47477") ? false : stryMutAct_9fa48("47476") ? true : (stryCov_9fa48("47476", "47477", "47478"), (stryMutAct_9fa48("47479") ? meta.config.gdpr_enabled : (stryCov_9fa48("47479"), !meta.config.gdpr_enabled)) || (stryMutAct_9fa48("47481") ? data.userData || data.userData.gdpr_consent : stryMutAct_9fa48("47480") ? false : (stryCov_9fa48("47480", "47481"), data.userData && data.userData.gdpr_consent)))) {
      if (stryMutAct_9fa48("47482")) {
        {}
      } else {
        stryCov_9fa48("47482");
        return data;
      }
    }
    if (stryMutAct_9fa48("47485") ? false : stryMutAct_9fa48("47484") ? true : stryMutAct_9fa48("47483") ? data.userData : (stryCov_9fa48("47483", "47484", "47485"), !data.userData)) {
      if (stryMutAct_9fa48("47486")) {
        {}
      } else {
        stryCov_9fa48("47486");
        throw new Error(stryMutAct_9fa48("47487") ? "" : (stryCov_9fa48("47487"), '[[error:invalid-data]]'));
      }
    }
    if (stryMutAct_9fa48("47489") ? false : stryMutAct_9fa48("47488") ? true : (stryCov_9fa48("47488", "47489"), data.userData.uid)) {
      if (stryMutAct_9fa48("47490")) {
        {}
      } else {
        stryCov_9fa48("47490");
        const consented = await db.getObjectField(stryMutAct_9fa48("47491") ? `` : (stryCov_9fa48("47491"), `user:${data.userData.uid}`), stryMutAct_9fa48("47492") ? "" : (stryCov_9fa48("47492"), 'gdpr_consent'));
        if (stryMutAct_9fa48("47494") ? false : stryMutAct_9fa48("47493") ? true : (stryCov_9fa48("47493", "47494"), parseInt(consented, 10))) {
          if (stryMutAct_9fa48("47495")) {
            {}
          } else {
            stryCov_9fa48("47495");
            return data;
          }
        }
      }
    }
    data.interstitials.push(stryMutAct_9fa48("47496") ? {} : (stryCov_9fa48("47496"), {
      template: stryMutAct_9fa48("47497") ? "" : (stryCov_9fa48("47497"), 'partials/gdpr_consent'),
      data: stryMutAct_9fa48("47498") ? {} : (stryCov_9fa48("47498"), {
        digestFrequency: meta.config.dailyDigestFreq,
        digestEnabled: stryMutAct_9fa48("47501") ? meta.config.dailyDigestFreq === 'off' : stryMutAct_9fa48("47500") ? false : stryMutAct_9fa48("47499") ? true : (stryCov_9fa48("47499", "47500", "47501"), meta.config.dailyDigestFreq !== (stryMutAct_9fa48("47502") ? "" : (stryCov_9fa48("47502"), 'off')))
      }),
      callback: function (userData, formData, next) {
        if (stryMutAct_9fa48("47503")) {
          {}
        } else {
          stryCov_9fa48("47503");
          if (stryMutAct_9fa48("47506") ? formData.gdpr_agree_data === 'on' || formData.gdpr_agree_email === 'on' : stryMutAct_9fa48("47505") ? false : stryMutAct_9fa48("47504") ? true : (stryCov_9fa48("47504", "47505", "47506"), (stryMutAct_9fa48("47508") ? formData.gdpr_agree_data !== 'on' : stryMutAct_9fa48("47507") ? true : (stryCov_9fa48("47507", "47508"), formData.gdpr_agree_data === (stryMutAct_9fa48("47509") ? "" : (stryCov_9fa48("47509"), 'on')))) && (stryMutAct_9fa48("47511") ? formData.gdpr_agree_email !== 'on' : stryMutAct_9fa48("47510") ? true : (stryCov_9fa48("47510", "47511"), formData.gdpr_agree_email === (stryMutAct_9fa48("47512") ? "" : (stryCov_9fa48("47512"), 'on')))))) {
            if (stryMutAct_9fa48("47513")) {
              {}
            } else {
              stryCov_9fa48("47513");
              userData.gdpr_consent = stryMutAct_9fa48("47514") ? false : (stryCov_9fa48("47514"), true);
            }
          }
          next(userData.gdpr_consent ? null : new Error(stryMutAct_9fa48("47515") ? "" : (stryCov_9fa48("47515"), '[[register:gdpr_consent_denied]]')));
        }
      }
    }));
    return data;
  }
};
Interstitials.tou = async function (data) {
  if (stryMutAct_9fa48("47516")) {
    {}
  } else {
    stryCov_9fa48("47516");
    if (stryMutAct_9fa48("47519") ? false : stryMutAct_9fa48("47518") ? true : stryMutAct_9fa48("47517") ? data.userData : (stryCov_9fa48("47517", "47518", "47519"), !data.userData)) {
      if (stryMutAct_9fa48("47520")) {
        {}
      } else {
        stryCov_9fa48("47520");
        throw new Error(stryMutAct_9fa48("47521") ? "" : (stryCov_9fa48("47521"), '[[error:invalid-data]]'));
      }
    }
    if (stryMutAct_9fa48("47524") ? !meta.config.termsOfUse && data.userData.acceptTos : stryMutAct_9fa48("47523") ? false : stryMutAct_9fa48("47522") ? true : (stryCov_9fa48("47522", "47523", "47524"), (stryMutAct_9fa48("47525") ? meta.config.termsOfUse : (stryCov_9fa48("47525"), !meta.config.termsOfUse)) || data.userData.acceptTos)) {
      if (stryMutAct_9fa48("47526")) {
        {}
      } else {
        stryCov_9fa48("47526");
        // no ToS or ToS accepted, nothing to do
        return data;
      }
    }
    if (stryMutAct_9fa48("47528") ? false : stryMutAct_9fa48("47527") ? true : (stryCov_9fa48("47527", "47528"), data.userData.uid)) {
      if (stryMutAct_9fa48("47529")) {
        {}
      } else {
        stryCov_9fa48("47529");
        const accepted = await db.getObjectField(stryMutAct_9fa48("47530") ? `` : (stryCov_9fa48("47530"), `user:${data.userData.uid}`), stryMutAct_9fa48("47531") ? "" : (stryCov_9fa48("47531"), 'acceptTos'));
        if (stryMutAct_9fa48("47533") ? false : stryMutAct_9fa48("47532") ? true : (stryCov_9fa48("47532", "47533"), parseInt(accepted, 10))) {
          if (stryMutAct_9fa48("47534")) {
            {}
          } else {
            stryCov_9fa48("47534");
            return data;
          }
        }
      }
    }
    const termsOfUse = await plugins.hooks.fire(stryMutAct_9fa48("47535") ? "" : (stryCov_9fa48("47535"), 'filter:parse.post'), stryMutAct_9fa48("47536") ? {} : (stryCov_9fa48("47536"), {
      postData: stryMutAct_9fa48("47537") ? {} : (stryCov_9fa48("47537"), {
        content: stryMutAct_9fa48("47540") ? meta.config.termsOfUse && '' : stryMutAct_9fa48("47539") ? false : stryMutAct_9fa48("47538") ? true : (stryCov_9fa48("47538", "47539", "47540"), meta.config.termsOfUse || (stryMutAct_9fa48("47541") ? "Stryker was here!" : (stryCov_9fa48("47541"), '')))
      })
    }));
    data.interstitials.push(stryMutAct_9fa48("47542") ? {} : (stryCov_9fa48("47542"), {
      template: stryMutAct_9fa48("47543") ? "" : (stryCov_9fa48("47543"), 'partials/acceptTos'),
      data: stryMutAct_9fa48("47544") ? {} : (stryCov_9fa48("47544"), {
        termsOfUse: termsOfUse.postData.content
      }),
      callback: function (userData, formData, next) {
        if (stryMutAct_9fa48("47545")) {
          {}
        } else {
          stryCov_9fa48("47545");
          if (stryMutAct_9fa48("47548") ? formData['agree-terms'] !== 'on' : stryMutAct_9fa48("47547") ? false : stryMutAct_9fa48("47546") ? true : (stryCov_9fa48("47546", "47547", "47548"), formData[stryMutAct_9fa48("47549") ? "" : (stryCov_9fa48("47549"), 'agree-terms')] === (stryMutAct_9fa48("47550") ? "" : (stryCov_9fa48("47550"), 'on')))) {
            if (stryMutAct_9fa48("47551")) {
              {}
            } else {
              stryCov_9fa48("47551");
              userData.acceptTos = stryMutAct_9fa48("47552") ? false : (stryCov_9fa48("47552"), true);
            }
          }
          next(userData.acceptTos ? null : new Error(stryMutAct_9fa48("47553") ? "" : (stryCov_9fa48("47553"), '[[register:terms_of_use_error]]')));
        }
      }
    }));
    return data;
  }
};