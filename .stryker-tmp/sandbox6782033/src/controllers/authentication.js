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
const passport = require('passport');
const nconf = require('nconf');
const validator = require('validator');
const _ = require('lodash');
const util = require('util');
const db = require('../database');
const meta = require('../meta');
const analytics = require('../analytics');
const user = require('../user');
const plugins = require('../plugins');
const utils = require('../utils');
const slugify = require('../slugify');
const helpers = require('./helpers');
const privileges = require('../privileges');
const sockets = require('../socket.io');
const authenticationController = module.exports;
async function registerAndLoginUser(req, res, userData) {
  if (stryMutAct_9fa48("8330")) {
    {}
  } else {
    stryCov_9fa48("8330");
    if (stryMutAct_9fa48("8333") ? false : stryMutAct_9fa48("8332") ? true : stryMutAct_9fa48("8331") ? userData.hasOwnProperty('email') : (stryCov_9fa48("8331", "8332", "8333"), !userData.hasOwnProperty(stryMutAct_9fa48("8334") ? "" : (stryCov_9fa48("8334"), 'email')))) {
      if (stryMutAct_9fa48("8335")) {
        {}
      } else {
        stryCov_9fa48("8335");
        userData.updateEmail = stryMutAct_9fa48("8336") ? false : (stryCov_9fa48("8336"), true);
      }
    }
    const data = await plugins.hooks.fire(stryMutAct_9fa48("8337") ? "" : (stryCov_9fa48("8337"), 'filter:register.interstitial'), stryMutAct_9fa48("8338") ? {} : (stryCov_9fa48("8338"), {
      req,
      userData,
      interstitials: stryMutAct_9fa48("8339") ? ["Stryker was here"] : (stryCov_9fa48("8339"), [])
    }));

    // If interstitials are found, save registration attempt into session and abort
    const deferRegistration = data.interstitials.length;
    if (stryMutAct_9fa48("8341") ? false : stryMutAct_9fa48("8340") ? true : (stryCov_9fa48("8340", "8341"), deferRegistration)) {
      if (stryMutAct_9fa48("8342")) {
        {}
      } else {
        stryCov_9fa48("8342");
        userData.register = stryMutAct_9fa48("8343") ? false : (stryCov_9fa48("8343"), true);
        req.session.registration = userData;
        if (stryMutAct_9fa48("8346") ? req.body.noscript !== 'true' : stryMutAct_9fa48("8345") ? false : stryMutAct_9fa48("8344") ? true : (stryCov_9fa48("8344", "8345", "8346"), req.body.noscript === (stryMutAct_9fa48("8347") ? "" : (stryCov_9fa48("8347"), 'true')))) {
          if (stryMutAct_9fa48("8348")) {
            {}
          } else {
            stryCov_9fa48("8348");
            res.redirect(stryMutAct_9fa48("8349") ? `` : (stryCov_9fa48("8349"), `${nconf.get(stryMutAct_9fa48("8350") ? "" : (stryCov_9fa48("8350"), 'relative_path'))}/register/complete`));
            return;
          }
        }
        res.json(stryMutAct_9fa48("8351") ? {} : (stryCov_9fa48("8351"), {
          next: stryMutAct_9fa48("8352") ? `` : (stryCov_9fa48("8352"), `${nconf.get(stryMutAct_9fa48("8353") ? "" : (stryCov_9fa48("8353"), 'relative_path'))}/register/complete`)
        }));
        return;
      }
    }
    const queue = await user.shouldQueueUser(req.ip);
    const result = await plugins.hooks.fire(stryMutAct_9fa48("8354") ? "" : (stryCov_9fa48("8354"), 'filter:register.shouldQueue'), stryMutAct_9fa48("8355") ? {} : (stryCov_9fa48("8355"), {
      req: req,
      res: res,
      userData: userData,
      queue: queue
    }));
    if (stryMutAct_9fa48("8357") ? false : stryMutAct_9fa48("8356") ? true : (stryCov_9fa48("8356", "8357"), result.queue)) {
      if (stryMutAct_9fa48("8358")) {
        {}
      } else {
        stryCov_9fa48("8358");
        return await addToApprovalQueue(req, userData);
      }
    }
    const uid = await user.create(userData);
    if (stryMutAct_9fa48("8360") ? false : stryMutAct_9fa48("8359") ? true : (stryCov_9fa48("8359", "8360"), res.locals.processLogin)) {
      if (stryMutAct_9fa48("8361")) {
        {}
      } else {
        stryCov_9fa48("8361");
        await authenticationController.doLogin(req, uid);
      }
    }

    // Distinguish registrations through invites from direct ones
    if (stryMutAct_9fa48("8363") ? false : stryMutAct_9fa48("8362") ? true : (stryCov_9fa48("8362", "8363"), userData.token)) {
      if (stryMutAct_9fa48("8364")) {
        {}
      } else {
        stryCov_9fa48("8364");
        // Token has to be verified at this point
        await Promise.all(stryMutAct_9fa48("8365") ? [] : (stryCov_9fa48("8365"), [user.confirmIfInviteEmailIsUsed(userData.token, userData.email, uid), user.joinGroupsFromInvitation(uid, userData.token)]));
      }
    }
    await user.deleteInvitationKey(userData.email, userData.token);
    const next = stryMutAct_9fa48("8368") ? req.session.returnTo && `${nconf.get('relative_path')}/` : stryMutAct_9fa48("8367") ? false : stryMutAct_9fa48("8366") ? true : (stryCov_9fa48("8366", "8367", "8368"), req.session.returnTo || (stryMutAct_9fa48("8369") ? `` : (stryCov_9fa48("8369"), `${nconf.get(stryMutAct_9fa48("8370") ? "" : (stryCov_9fa48("8370"), 'relative_path'))}/`)));
    const complete = await plugins.hooks.fire(stryMutAct_9fa48("8371") ? "" : (stryCov_9fa48("8371"), 'filter:register.complete'), stryMutAct_9fa48("8372") ? {} : (stryCov_9fa48("8372"), {
      uid: uid,
      next: next
    }));
    req.session.returnTo = complete.next;
    return complete;
  }
}
authenticationController.register = async function (req, res) {
  if (stryMutAct_9fa48("8373")) {
    {}
  } else {
    stryCov_9fa48("8373");
    const registrationType = stryMutAct_9fa48("8376") ? meta.config.registrationType && 'normal' : stryMutAct_9fa48("8375") ? false : stryMutAct_9fa48("8374") ? true : (stryCov_9fa48("8374", "8375", "8376"), meta.config.registrationType || (stryMutAct_9fa48("8377") ? "" : (stryCov_9fa48("8377"), 'normal')));
    if (stryMutAct_9fa48("8380") ? registrationType !== 'disabled' : stryMutAct_9fa48("8379") ? false : stryMutAct_9fa48("8378") ? true : (stryCov_9fa48("8378", "8379", "8380"), registrationType === (stryMutAct_9fa48("8381") ? "" : (stryCov_9fa48("8381"), 'disabled')))) {
      if (stryMutAct_9fa48("8382")) {
        {}
      } else {
        stryCov_9fa48("8382");
        return res.sendStatus(403);
      }
    }
    const userData = req.body;
    try {
      if (stryMutAct_9fa48("8383")) {
        {}
      } else {
        stryCov_9fa48("8383");
        if (stryMutAct_9fa48("8386") ? (userData.token || registrationType === 'invite-only') && registrationType === 'admin-invite-only' : stryMutAct_9fa48("8385") ? false : stryMutAct_9fa48("8384") ? true : (stryCov_9fa48("8384", "8385", "8386"), (stryMutAct_9fa48("8388") ? userData.token && registrationType === 'invite-only' : stryMutAct_9fa48("8387") ? false : (stryCov_9fa48("8387", "8388"), userData.token || (stryMutAct_9fa48("8390") ? registrationType !== 'invite-only' : stryMutAct_9fa48("8389") ? false : (stryCov_9fa48("8389", "8390"), registrationType === (stryMutAct_9fa48("8391") ? "" : (stryCov_9fa48("8391"), 'invite-only')))))) || (stryMutAct_9fa48("8393") ? registrationType !== 'admin-invite-only' : stryMutAct_9fa48("8392") ? false : (stryCov_9fa48("8392", "8393"), registrationType === (stryMutAct_9fa48("8394") ? "" : (stryCov_9fa48("8394"), 'admin-invite-only')))))) {
          if (stryMutAct_9fa48("8395")) {
            {}
          } else {
            stryCov_9fa48("8395");
            await user.verifyInvitation(userData);
          }
        }
        if (stryMutAct_9fa48("8398") ? (!userData.username || userData.username.length < meta.config.minimumUsernameLength) && slugify(userData.username).length < meta.config.minimumUsernameLength : stryMutAct_9fa48("8397") ? false : stryMutAct_9fa48("8396") ? true : (stryCov_9fa48("8396", "8397", "8398"), (stryMutAct_9fa48("8400") ? !userData.username && userData.username.length < meta.config.minimumUsernameLength : stryMutAct_9fa48("8399") ? false : (stryCov_9fa48("8399", "8400"), (stryMutAct_9fa48("8401") ? userData.username : (stryCov_9fa48("8401"), !userData.username)) || (stryMutAct_9fa48("8404") ? userData.username.length >= meta.config.minimumUsernameLength : stryMutAct_9fa48("8403") ? userData.username.length <= meta.config.minimumUsernameLength : stryMutAct_9fa48("8402") ? false : (stryCov_9fa48("8402", "8403", "8404"), userData.username.length < meta.config.minimumUsernameLength)))) || (stryMutAct_9fa48("8407") ? slugify(userData.username).length >= meta.config.minimumUsernameLength : stryMutAct_9fa48("8406") ? slugify(userData.username).length <= meta.config.minimumUsernameLength : stryMutAct_9fa48("8405") ? false : (stryCov_9fa48("8405", "8406", "8407"), slugify(userData.username).length < meta.config.minimumUsernameLength)))) {
          if (stryMutAct_9fa48("8408")) {
            {}
          } else {
            stryCov_9fa48("8408");
            throw new Error(stryMutAct_9fa48("8409") ? "" : (stryCov_9fa48("8409"), '[[error:username-too-short]]'));
          }
        }
        if (stryMutAct_9fa48("8413") ? userData.username.length <= meta.config.maximumUsernameLength : stryMutAct_9fa48("8412") ? userData.username.length >= meta.config.maximumUsernameLength : stryMutAct_9fa48("8411") ? false : stryMutAct_9fa48("8410") ? true : (stryCov_9fa48("8410", "8411", "8412", "8413"), userData.username.length > meta.config.maximumUsernameLength)) {
          if (stryMutAct_9fa48("8414")) {
            {}
          } else {
            stryCov_9fa48("8414");
            throw new Error(stryMutAct_9fa48("8415") ? "" : (stryCov_9fa48("8415"), '[[error:username-too-long]]'));
          }
        }
        if (stryMutAct_9fa48("8418") ? userData.password === userData['password-confirm'] : stryMutAct_9fa48("8417") ? false : stryMutAct_9fa48("8416") ? true : (stryCov_9fa48("8416", "8417", "8418"), userData.password !== userData[stryMutAct_9fa48("8419") ? "" : (stryCov_9fa48("8419"), 'password-confirm')])) {
          if (stryMutAct_9fa48("8420")) {
            {}
          } else {
            stryCov_9fa48("8420");
            throw new Error(stryMutAct_9fa48("8421") ? "" : (stryCov_9fa48("8421"), '[[user:change_password_error_match]]'));
          }
        }
        if (stryMutAct_9fa48("8425") ? userData.password.length <= 512 : stryMutAct_9fa48("8424") ? userData.password.length >= 512 : stryMutAct_9fa48("8423") ? false : stryMutAct_9fa48("8422") ? true : (stryCov_9fa48("8422", "8423", "8424", "8425"), userData.password.length > 512)) {
          if (stryMutAct_9fa48("8426")) {
            {}
          } else {
            stryCov_9fa48("8426");
            throw new Error(stryMutAct_9fa48("8427") ? "" : (stryCov_9fa48("8427"), '[[error:password-too-long]]'));
          }
        }
        if (stryMutAct_9fa48("8430") ? !userData['account-type'] && userData['account-type'] !== 'student' && userData['account-type'] !== 'instructor' : stryMutAct_9fa48("8429") ? false : stryMutAct_9fa48("8428") ? true : (stryCov_9fa48("8428", "8429", "8430"), (stryMutAct_9fa48("8431") ? userData['account-type'] : (stryCov_9fa48("8431"), !userData[stryMutAct_9fa48("8432") ? "" : (stryCov_9fa48("8432"), 'account-type')])) || (stryMutAct_9fa48("8434") ? userData['account-type'] !== 'student' || userData['account-type'] !== 'instructor' : stryMutAct_9fa48("8433") ? false : (stryCov_9fa48("8433", "8434"), (stryMutAct_9fa48("8436") ? userData['account-type'] === 'student' : stryMutAct_9fa48("8435") ? true : (stryCov_9fa48("8435", "8436"), userData[stryMutAct_9fa48("8437") ? "" : (stryCov_9fa48("8437"), 'account-type')] !== (stryMutAct_9fa48("8438") ? "" : (stryCov_9fa48("8438"), 'student')))) && (stryMutAct_9fa48("8440") ? userData['account-type'] === 'instructor' : stryMutAct_9fa48("8439") ? true : (stryCov_9fa48("8439", "8440"), userData[stryMutAct_9fa48("8441") ? "" : (stryCov_9fa48("8441"), 'account-type')] !== (stryMutAct_9fa48("8442") ? "" : (stryCov_9fa48("8442"), 'instructor')))))))) {
          if (stryMutAct_9fa48("8443")) {
            {}
          } else {
            stryCov_9fa48("8443");
            throw new Error(stryMutAct_9fa48("8444") ? "" : (stryCov_9fa48("8444"), 'Invalid account type'));
          }
        }
        user.isPasswordValid(userData.password);
        res.locals.processLogin = stryMutAct_9fa48("8445") ? false : (stryCov_9fa48("8445"), true); // set it to false in plugin if you wish to just register only
        await plugins.hooks.fire(stryMutAct_9fa48("8446") ? "" : (stryCov_9fa48("8446"), 'filter:register.check'), stryMutAct_9fa48("8447") ? {} : (stryCov_9fa48("8447"), {
          req: req,
          res: res,
          userData: userData
        }));
        const data = await registerAndLoginUser(req, res, userData);
        if (stryMutAct_9fa48("8449") ? false : stryMutAct_9fa48("8448") ? true : (stryCov_9fa48("8448", "8449"), data)) {
          if (stryMutAct_9fa48("8450")) {
            {}
          } else {
            stryCov_9fa48("8450");
            if (stryMutAct_9fa48("8453") ? data.uid || req.body.userLang : stryMutAct_9fa48("8452") ? false : stryMutAct_9fa48("8451") ? true : (stryCov_9fa48("8451", "8452", "8453"), data.uid && req.body.userLang)) {
              if (stryMutAct_9fa48("8454")) {
                {}
              } else {
                stryCov_9fa48("8454");
                await user.setSetting(data.uid, stryMutAct_9fa48("8455") ? "" : (stryCov_9fa48("8455"), 'userLang'), req.body.userLang);
              }
            }
            res.json(data);
          }
        }
      }
    } catch (err) {
      if (stryMutAct_9fa48("8456")) {
        {}
      } else {
        stryCov_9fa48("8456");
        helpers.noScriptErrors(req, res, err.message, 400);
      }
    }
  }
};
async function addToApprovalQueue(req, userData) {
  if (stryMutAct_9fa48("8457")) {
    {}
  } else {
    stryCov_9fa48("8457");
    userData.ip = req.ip;
    await user.addToApprovalQueue(userData);
    let message = stryMutAct_9fa48("8458") ? "" : (stryCov_9fa48("8458"), '[[register:registration-added-to-queue]]');
    if (stryMutAct_9fa48("8460") ? false : stryMutAct_9fa48("8459") ? true : (stryCov_9fa48("8459", "8460"), meta.config.showAverageApprovalTime)) {
      if (stryMutAct_9fa48("8461")) {
        {}
      } else {
        stryCov_9fa48("8461");
        const average_time = await db.getObjectField(stryMutAct_9fa48("8462") ? "" : (stryCov_9fa48("8462"), 'registration:queue:approval:times'), stryMutAct_9fa48("8463") ? "" : (stryCov_9fa48("8463"), 'average'));
        if (stryMutAct_9fa48("8467") ? average_time <= 0 : stryMutAct_9fa48("8466") ? average_time >= 0 : stryMutAct_9fa48("8465") ? false : stryMutAct_9fa48("8464") ? true : (stryCov_9fa48("8464", "8465", "8466", "8467"), average_time > 0)) {
          if (stryMutAct_9fa48("8468")) {
            {}
          } else {
            stryCov_9fa48("8468");
            message += stryMutAct_9fa48("8469") ? `` : (stryCov_9fa48("8469"), ` [[register:registration-queue-average-time, ${Math.floor(stryMutAct_9fa48("8470") ? average_time * 60 : (stryCov_9fa48("8470"), average_time / 60))}, ${Math.floor(stryMutAct_9fa48("8471") ? average_time * 60 : (stryCov_9fa48("8471"), average_time % 60))}]]`);
          }
        }
      }
    }
    if (stryMutAct_9fa48("8475") ? meta.config.autoApproveTime <= 0 : stryMutAct_9fa48("8474") ? meta.config.autoApproveTime >= 0 : stryMutAct_9fa48("8473") ? false : stryMutAct_9fa48("8472") ? true : (stryCov_9fa48("8472", "8473", "8474", "8475"), meta.config.autoApproveTime > 0)) {
      if (stryMutAct_9fa48("8476")) {
        {}
      } else {
        stryCov_9fa48("8476");
        message += stryMutAct_9fa48("8477") ? `` : (stryCov_9fa48("8477"), ` [[register:registration-queue-auto-approve-time, ${meta.config.autoApproveTime}]]`);
      }
    }
    return stryMutAct_9fa48("8478") ? {} : (stryCov_9fa48("8478"), {
      message: message
    });
  }
}
authenticationController.registerComplete = async function (req, res) {
  if (stryMutAct_9fa48("8479")) {
    {}
  } else {
    stryCov_9fa48("8479");
    try {
      if (stryMutAct_9fa48("8480")) {
        {}
      } else {
        stryCov_9fa48("8480");
        // For the interstitials that respond, execute the callback with the form body
        const data = await plugins.hooks.fire(stryMutAct_9fa48("8481") ? "" : (stryCov_9fa48("8481"), 'filter:register.interstitial'), stryMutAct_9fa48("8482") ? {} : (stryCov_9fa48("8482"), {
          req,
          userData: req.session.registration,
          interstitials: stryMutAct_9fa48("8483") ? ["Stryker was here"] : (stryCov_9fa48("8483"), [])
        }));
        const callbacks = data.interstitials.reduce((memo, cur) => {
          if (stryMutAct_9fa48("8484")) {
            {}
          } else {
            stryCov_9fa48("8484");
            if (stryMutAct_9fa48("8487") ? cur.hasOwnProperty('callback') || typeof cur.callback === 'function' : stryMutAct_9fa48("8486") ? false : stryMutAct_9fa48("8485") ? true : (stryCov_9fa48("8485", "8486", "8487"), cur.hasOwnProperty(stryMutAct_9fa48("8488") ? "" : (stryCov_9fa48("8488"), 'callback')) && (stryMutAct_9fa48("8490") ? typeof cur.callback !== 'function' : stryMutAct_9fa48("8489") ? true : (stryCov_9fa48("8489", "8490"), typeof cur.callback === (stryMutAct_9fa48("8491") ? "" : (stryCov_9fa48("8491"), 'function')))))) {
              if (stryMutAct_9fa48("8492")) {
                {}
              } else {
                stryCov_9fa48("8492");
                req.body.files = req.files;
                if (stryMutAct_9fa48("8495") ? cur.callback.constructor && cur.callback.constructor.name === 'AsyncFunction' && cur.callback.length === 2 // non-async function w/o callback
                : stryMutAct_9fa48("8494") ? false : stryMutAct_9fa48("8493") ? true : (stryCov_9fa48("8493", "8494", "8495"), (stryMutAct_9fa48("8497") ? cur.callback.constructor || cur.callback.constructor.name === 'AsyncFunction' : stryMutAct_9fa48("8496") ? false : (stryCov_9fa48("8496", "8497"), cur.callback.constructor && (stryMutAct_9fa48("8499") ? cur.callback.constructor.name !== 'AsyncFunction' : stryMutAct_9fa48("8498") ? true : (stryCov_9fa48("8498", "8499"), cur.callback.constructor.name === (stryMutAct_9fa48("8500") ? "" : (stryCov_9fa48("8500"), 'AsyncFunction')))))) || (stryMutAct_9fa48("8502") ? cur.callback.length !== 2 : stryMutAct_9fa48("8501") ? false : (stryCov_9fa48("8501", "8502"), cur.callback.length === 2))) // non-async function w/o callback
                ) {
                  if (stryMutAct_9fa48("8503")) {
                    {}
                  } else {
                    stryCov_9fa48("8503");
                    memo.push(cur.callback);
                  }
                } else {
                  if (stryMutAct_9fa48("8504")) {
                    {}
                  } else {
                    stryCov_9fa48("8504");
                    memo.push(util.promisify(cur.callback));
                  }
                }
              }
            }
            return memo;
          }
        }, stryMutAct_9fa48("8505") ? ["Stryker was here"] : (stryCov_9fa48("8505"), []));
        const done = function (data) {
          if (stryMutAct_9fa48("8506")) {
            {}
          } else {
            stryCov_9fa48("8506");
            delete req.session.registration;
            const relative_path = nconf.get(stryMutAct_9fa48("8507") ? "" : (stryCov_9fa48("8507"), 'relative_path'));
            if (stryMutAct_9fa48("8510") ? data || data.message : stryMutAct_9fa48("8509") ? false : stryMutAct_9fa48("8508") ? true : (stryCov_9fa48("8508", "8509", "8510"), data && data.message)) {
              if (stryMutAct_9fa48("8511")) {
                {}
              } else {
                stryCov_9fa48("8511");
                return res.redirect(stryMutAct_9fa48("8512") ? `` : (stryCov_9fa48("8512"), `${relative_path}/?register=${encodeURIComponent(data.message)}`));
              }
            }
            if (stryMutAct_9fa48("8514") ? false : stryMutAct_9fa48("8513") ? true : (stryCov_9fa48("8513", "8514"), req.session.returnTo)) {
              if (stryMutAct_9fa48("8515")) {
                {}
              } else {
                stryCov_9fa48("8515");
                res.redirect(stryMutAct_9fa48("8516") ? relative_path - req.session.returnTo.replace(new RegExp(`^${relative_path}`), '') : (stryCov_9fa48("8516"), relative_path + req.session.returnTo.replace(new RegExp(stryMutAct_9fa48("8517") ? `` : (stryCov_9fa48("8517"), `^${relative_path}`)), stryMutAct_9fa48("8518") ? "Stryker was here!" : (stryCov_9fa48("8518"), ''))));
              }
            } else {
              if (stryMutAct_9fa48("8519")) {
                {}
              } else {
                stryCov_9fa48("8519");
                res.redirect(stryMutAct_9fa48("8520") ? `` : (stryCov_9fa48("8520"), `${relative_path}/`));
              }
            }
          }
        };
        const results = await Promise.allSettled(callbacks.map(async cb => {
          if (stryMutAct_9fa48("8521")) {
            {}
          } else {
            stryCov_9fa48("8521");
            await cb(req.session.registration, req.body);
          }
        }));
        const errors = stryMutAct_9fa48("8522") ? results.map(result => result.status === 'rejected' && result.reason && result.reason.message) : (stryCov_9fa48("8522"), results.map(stryMutAct_9fa48("8523") ? () => undefined : (stryCov_9fa48("8523"), result => stryMutAct_9fa48("8526") ? result.status === 'rejected' && result.reason || result.reason.message : stryMutAct_9fa48("8525") ? false : stryMutAct_9fa48("8524") ? true : (stryCov_9fa48("8524", "8525", "8526"), (stryMutAct_9fa48("8528") ? result.status === 'rejected' || result.reason : stryMutAct_9fa48("8527") ? true : (stryCov_9fa48("8527", "8528"), (stryMutAct_9fa48("8530") ? result.status !== 'rejected' : stryMutAct_9fa48("8529") ? true : (stryCov_9fa48("8529", "8530"), result.status === (stryMutAct_9fa48("8531") ? "" : (stryCov_9fa48("8531"), 'rejected')))) && result.reason)) && result.reason.message))).filter(Boolean));
        if (stryMutAct_9fa48("8533") ? false : stryMutAct_9fa48("8532") ? true : (stryCov_9fa48("8532", "8533"), errors.length)) {
          if (stryMutAct_9fa48("8534")) {
            {}
          } else {
            stryCov_9fa48("8534");
            req.flash(stryMutAct_9fa48("8535") ? "" : (stryCov_9fa48("8535"), 'errors'), errors);
            return req.session.save(() => {
              if (stryMutAct_9fa48("8536")) {
                {}
              } else {
                stryCov_9fa48("8536");
                res.redirect(stryMutAct_9fa48("8537") ? `` : (stryCov_9fa48("8537"), `${nconf.get(stryMutAct_9fa48("8538") ? "" : (stryCov_9fa48("8538"), 'relative_path'))}/register/complete`));
              }
            });
          }
        }
        if (stryMutAct_9fa48("8541") ? req.session.registration.register !== true : stryMutAct_9fa48("8540") ? false : stryMutAct_9fa48("8539") ? true : (stryCov_9fa48("8539", "8540", "8541"), req.session.registration.register === (stryMutAct_9fa48("8542") ? false : (stryCov_9fa48("8542"), true)))) {
          if (stryMutAct_9fa48("8543")) {
            {}
          } else {
            stryCov_9fa48("8543");
            res.locals.processLogin = stryMutAct_9fa48("8544") ? false : (stryCov_9fa48("8544"), true);
            req.body.noscript = stryMutAct_9fa48("8545") ? "" : (stryCov_9fa48("8545"), 'true'); // trigger full page load on error

            const data = await registerAndLoginUser(req, res, req.session.registration);
            if (stryMutAct_9fa48("8548") ? false : stryMutAct_9fa48("8547") ? true : stryMutAct_9fa48("8546") ? data : (stryCov_9fa48("8546", "8547", "8548"), !data)) {
              if (stryMutAct_9fa48("8549")) {
                {}
              } else {
                stryCov_9fa48("8549");
                return winston.warn(stryMutAct_9fa48("8550") ? "" : (stryCov_9fa48("8550"), '[register] Interstitial callbacks processed with no errors, but one or more interstitials remain. This is likely an issue with one of the interstitials not properly handling a null case or invalid value.'));
              }
            }
            done(data);
          }
        } else {
          if (stryMutAct_9fa48("8551")) {
            {}
          } else {
            stryCov_9fa48("8551");
            // Update user hash, clear registration data in session
            const payload = req.session.registration;
            const {
              uid
            } = payload;
            delete payload.uid;
            delete payload.returnTo;
            Object.keys(payload).forEach(prop => {
              if (stryMutAct_9fa48("8552")) {
                {}
              } else {
                stryCov_9fa48("8552");
                if (stryMutAct_9fa48("8555") ? typeof payload[prop] !== 'boolean' : stryMutAct_9fa48("8554") ? false : stryMutAct_9fa48("8553") ? true : (stryCov_9fa48("8553", "8554", "8555"), typeof payload[prop] === (stryMutAct_9fa48("8556") ? "" : (stryCov_9fa48("8556"), 'boolean')))) {
                  if (stryMutAct_9fa48("8557")) {
                    {}
                  } else {
                    stryCov_9fa48("8557");
                    payload[prop] = payload[prop] ? 1 : 0;
                  }
                }
              }
            });
            await user.setUserFields(uid, payload);
            done();
          }
        }
      }
    } catch (err) {
      if (stryMutAct_9fa48("8558")) {
        {}
      } else {
        stryCov_9fa48("8558");
        delete req.session.registration;
        res.redirect(stryMutAct_9fa48("8559") ? `` : (stryCov_9fa48("8559"), `${nconf.get(stryMutAct_9fa48("8560") ? "" : (stryCov_9fa48("8560"), 'relative_path'))}/?register=${encodeURIComponent(err.message)}`));
      }
    }
  }
};
authenticationController.registerAbort = function (req, res) {
  if (stryMutAct_9fa48("8561")) {
    {}
  } else {
    stryCov_9fa48("8561");
    if (stryMutAct_9fa48("8563") ? false : stryMutAct_9fa48("8562") ? true : (stryCov_9fa48("8562", "8563"), req.uid)) {
      if (stryMutAct_9fa48("8564")) {
        {}
      } else {
        stryCov_9fa48("8564");
        // Clear interstitial data and continue on...
        delete req.session.registration;
        res.redirect(stryMutAct_9fa48("8565") ? nconf.get('relative_path') - (req.session.returnTo || '/') : (stryCov_9fa48("8565"), nconf.get(stryMutAct_9fa48("8566") ? "" : (stryCov_9fa48("8566"), 'relative_path')) + (stryMutAct_9fa48("8569") ? req.session.returnTo && '/' : stryMutAct_9fa48("8568") ? false : stryMutAct_9fa48("8567") ? true : (stryCov_9fa48("8567", "8568", "8569"), req.session.returnTo || (stryMutAct_9fa48("8570") ? "" : (stryCov_9fa48("8570"), '/'))))));
      }
    } else {
      if (stryMutAct_9fa48("8571")) {
        {}
      } else {
        stryCov_9fa48("8571");
        // End the session and redirect to home
        req.session.destroy(() => {
          if (stryMutAct_9fa48("8572")) {
            {}
          } else {
            stryCov_9fa48("8572");
            res.clearCookie(nconf.get(stryMutAct_9fa48("8573") ? "" : (stryCov_9fa48("8573"), 'sessionKey')), meta.configs.cookie.get());
            res.redirect(stryMutAct_9fa48("8574") ? `` : (stryCov_9fa48("8574"), `${nconf.get(stryMutAct_9fa48("8575") ? "" : (stryCov_9fa48("8575"), 'relative_path'))}/`));
          }
        });
      }
    }
  }
};
authenticationController.login = async (req, res, next) => {
  if (stryMutAct_9fa48("8576")) {
    {}
  } else {
    stryCov_9fa48("8576");
    let {
      strategy
    } = await plugins.hooks.fire(stryMutAct_9fa48("8577") ? "" : (stryCov_9fa48("8577"), 'filter:login.override'), stryMutAct_9fa48("8578") ? {} : (stryCov_9fa48("8578"), {
      req,
      strategy: stryMutAct_9fa48("8579") ? "" : (stryCov_9fa48("8579"), 'local')
    }));
    if (stryMutAct_9fa48("8582") ? false : stryMutAct_9fa48("8581") ? true : stryMutAct_9fa48("8580") ? passport._strategy(strategy) : (stryCov_9fa48("8580", "8581", "8582"), !passport._strategy(strategy))) {
      if (stryMutAct_9fa48("8583")) {
        {}
      } else {
        stryCov_9fa48("8583");
        winston.error(stryMutAct_9fa48("8584") ? `` : (stryCov_9fa48("8584"), `[auth/override] Requested login strategy "${strategy}" not found, reverting back to local login strategy.`));
        strategy = stryMutAct_9fa48("8585") ? "" : (stryCov_9fa48("8585"), 'local');
      }
    }
    if (stryMutAct_9fa48("8587") ? false : stryMutAct_9fa48("8586") ? true : (stryCov_9fa48("8586", "8587"), plugins.hooks.hasListeners(stryMutAct_9fa48("8588") ? "" : (stryCov_9fa48("8588"), 'action:auth.overrideLogin')))) {
      if (stryMutAct_9fa48("8589")) {
        {}
      } else {
        stryCov_9fa48("8589");
        return continueLogin(strategy, req, res, next);
      }
    }
    const loginWith = stryMutAct_9fa48("8592") ? meta.config.allowLoginWith && 'username-email' : stryMutAct_9fa48("8591") ? false : stryMutAct_9fa48("8590") ? true : (stryCov_9fa48("8590", "8591", "8592"), meta.config.allowLoginWith || (stryMutAct_9fa48("8593") ? "" : (stryCov_9fa48("8593"), 'username-email')));
    req.body.username = stryMutAct_9fa48("8594") ? String(req.body.username) : (stryCov_9fa48("8594"), String(req.body.username).trim());
    const errorHandler = stryMutAct_9fa48("8597") ? res.locals.noScriptErrors && helpers.noScriptErrors : stryMutAct_9fa48("8596") ? false : stryMutAct_9fa48("8595") ? true : (stryCov_9fa48("8595", "8596", "8597"), res.locals.noScriptErrors || helpers.noScriptErrors);
    try {
      if (stryMutAct_9fa48("8598")) {
        {}
      } else {
        stryCov_9fa48("8598");
        await plugins.hooks.fire(stryMutAct_9fa48("8599") ? "" : (stryCov_9fa48("8599"), 'filter:login.check'), stryMutAct_9fa48("8600") ? {} : (stryCov_9fa48("8600"), {
          req: req,
          res: res,
          userData: req.body
        }));
      }
    } catch (err) {
      if (stryMutAct_9fa48("8601")) {
        {}
      } else {
        stryCov_9fa48("8601");
        return errorHandler(req, res, err.message, 403);
      }
    }
    try {
      if (stryMutAct_9fa48("8602")) {
        {}
      } else {
        stryCov_9fa48("8602");
        const isEmailLogin = stryMutAct_9fa48("8605") ? loginWith.includes('email') && req.body.username || utils.isEmailValid(req.body.username) : stryMutAct_9fa48("8604") ? false : stryMutAct_9fa48("8603") ? true : (stryCov_9fa48("8603", "8604", "8605"), (stryMutAct_9fa48("8607") ? loginWith.includes('email') || req.body.username : stryMutAct_9fa48("8606") ? true : (stryCov_9fa48("8606", "8607"), loginWith.includes(stryMutAct_9fa48("8608") ? "" : (stryCov_9fa48("8608"), 'email')) && req.body.username)) && utils.isEmailValid(req.body.username));
        const isUsernameLogin = stryMutAct_9fa48("8611") ? loginWith.includes('username') || !validator.isEmail(req.body.username) : stryMutAct_9fa48("8610") ? false : stryMutAct_9fa48("8609") ? true : (stryCov_9fa48("8609", "8610", "8611"), loginWith.includes(stryMutAct_9fa48("8612") ? "" : (stryCov_9fa48("8612"), 'username')) && (stryMutAct_9fa48("8613") ? validator.isEmail(req.body.username) : (stryCov_9fa48("8613"), !validator.isEmail(req.body.username))));
        if (stryMutAct_9fa48("8615") ? false : stryMutAct_9fa48("8614") ? true : (stryCov_9fa48("8614", "8615"), isEmailLogin)) {
          if (stryMutAct_9fa48("8616")) {
            {}
          } else {
            stryCov_9fa48("8616");
            const username = await user.getUsernameByEmail(req.body.username);
            if (stryMutAct_9fa48("8619") ? username === '[[global:guest]]' : stryMutAct_9fa48("8618") ? false : stryMutAct_9fa48("8617") ? true : (stryCov_9fa48("8617", "8618", "8619"), username !== (stryMutAct_9fa48("8620") ? "" : (stryCov_9fa48("8620"), '[[global:guest]]')))) {
              if (stryMutAct_9fa48("8621")) {
                {}
              } else {
                stryCov_9fa48("8621");
                req.body.username = username;
              }
            }
          }
        }
        if (stryMutAct_9fa48("8624") ? isEmailLogin && isUsernameLogin : stryMutAct_9fa48("8623") ? false : stryMutAct_9fa48("8622") ? true : (stryCov_9fa48("8622", "8623", "8624"), isEmailLogin || isUsernameLogin)) {
          if (stryMutAct_9fa48("8625")) {
            {}
          } else {
            stryCov_9fa48("8625");
            continueLogin(strategy, req, res, next);
          }
        } else {
          if (stryMutAct_9fa48("8626")) {
            {}
          } else {
            stryCov_9fa48("8626");
            errorHandler(req, res, stryMutAct_9fa48("8627") ? `` : (stryCov_9fa48("8627"), `[[error:wrong-login-type-${loginWith}]]`), 400);
          }
        }
      }
    } catch (err) {
      if (stryMutAct_9fa48("8628")) {
        {}
      } else {
        stryCov_9fa48("8628");
        return errorHandler(req, res, err.message, 500);
      }
    }
  }
};
function continueLogin(strategy, req, res, next) {
  if (stryMutAct_9fa48("8629")) {
    {}
  } else {
    stryCov_9fa48("8629");
    passport.authenticate(strategy, async (err, userData, info) => {
      if (stryMutAct_9fa48("8630")) {
        {}
      } else {
        stryCov_9fa48("8630");
        if (stryMutAct_9fa48("8632") ? false : stryMutAct_9fa48("8631") ? true : (stryCov_9fa48("8631", "8632"), err)) {
          if (stryMutAct_9fa48("8633")) {
            {}
          } else {
            stryCov_9fa48("8633");
            plugins.hooks.fire(stryMutAct_9fa48("8634") ? "" : (stryCov_9fa48("8634"), 'action:login.continue'), stryMutAct_9fa48("8635") ? {} : (stryCov_9fa48("8635"), {
              req,
              strategy,
              userData,
              error: err
            }));
            return helpers.noScriptErrors(req, res, stryMutAct_9fa48("8638") ? err.data && err.message : stryMutAct_9fa48("8637") ? false : stryMutAct_9fa48("8636") ? true : (stryCov_9fa48("8636", "8637", "8638"), err.data || err.message), 403);
          }
        }
        if (stryMutAct_9fa48("8641") ? false : stryMutAct_9fa48("8640") ? true : stryMutAct_9fa48("8639") ? userData : (stryCov_9fa48("8639", "8640", "8641"), !userData)) {
          if (stryMutAct_9fa48("8642")) {
            {}
          } else {
            stryCov_9fa48("8642");
            if (stryMutAct_9fa48("8644") ? false : stryMutAct_9fa48("8643") ? true : (stryCov_9fa48("8643", "8644"), info instanceof Error)) {
              if (stryMutAct_9fa48("8645")) {
                {}
              } else {
                stryCov_9fa48("8645");
                info = info.message;
              }
            } else if (stryMutAct_9fa48("8648") ? typeof info !== 'object' : stryMutAct_9fa48("8647") ? false : stryMutAct_9fa48("8646") ? true : (stryCov_9fa48("8646", "8647", "8648"), typeof info === (stryMutAct_9fa48("8649") ? "" : (stryCov_9fa48("8649"), 'object')))) {
              if (stryMutAct_9fa48("8650")) {
                {}
              } else {
                stryCov_9fa48("8650");
                info = stryMutAct_9fa48("8651") ? "" : (stryCov_9fa48("8651"), '[[error:invalid-username-or-password]]');
              }
            }
            plugins.hooks.fire(stryMutAct_9fa48("8652") ? "" : (stryCov_9fa48("8652"), 'action:login.continue'), stryMutAct_9fa48("8653") ? {} : (stryCov_9fa48("8653"), {
              req,
              strategy,
              userData,
              error: new Error(info)
            }));
            return helpers.noScriptErrors(req, res, info, 403);
          }
        }

        // Alter user cookie depending on passed-in option
        if (stryMutAct_9fa48("8656") ? req.body.remember !== 'on' : stryMutAct_9fa48("8655") ? false : stryMutAct_9fa48("8654") ? true : (stryCov_9fa48("8654", "8655", "8656"), req.body.remember === (stryMutAct_9fa48("8657") ? "" : (stryCov_9fa48("8657"), 'on')))) {
          if (stryMutAct_9fa48("8658")) {
            {}
          } else {
            stryCov_9fa48("8658");
            const duration = stryMutAct_9fa48("8659") ? meta.getSessionTTLSeconds() / 1000 : (stryCov_9fa48("8659"), meta.getSessionTTLSeconds() * 1000);
            req.session.cookie.maxAge = duration;
            req.session.cookie.expires = new Date(stryMutAct_9fa48("8660") ? Date.now() - duration : (stryCov_9fa48("8660"), Date.now() + duration));
          }
        } else {
          if (stryMutAct_9fa48("8661")) {
            {}
          } else {
            stryCov_9fa48("8661");
            req.session.cookie.maxAge = stryMutAct_9fa48("8662") ? true : (stryCov_9fa48("8662"), false);
            req.session.cookie.expires = stryMutAct_9fa48("8663") ? true : (stryCov_9fa48("8663"), false);
          }
        }
        plugins.hooks.fire(stryMutAct_9fa48("8664") ? "" : (stryCov_9fa48("8664"), 'action:login.continue'), stryMutAct_9fa48("8665") ? {} : (stryCov_9fa48("8665"), {
          req,
          strategy,
          userData,
          error: null
        }));
        if (stryMutAct_9fa48("8668") ? userData.passwordExpiry || userData.passwordExpiry < Date.now() : stryMutAct_9fa48("8667") ? false : stryMutAct_9fa48("8666") ? true : (stryCov_9fa48("8666", "8667", "8668"), userData.passwordExpiry && (stryMutAct_9fa48("8671") ? userData.passwordExpiry >= Date.now() : stryMutAct_9fa48("8670") ? userData.passwordExpiry <= Date.now() : stryMutAct_9fa48("8669") ? true : (stryCov_9fa48("8669", "8670", "8671"), userData.passwordExpiry < Date.now())))) {
          if (stryMutAct_9fa48("8672")) {
            {}
          } else {
            stryCov_9fa48("8672");
            winston.verbose(stryMutAct_9fa48("8673") ? `` : (stryCov_9fa48("8673"), `[auth] Triggering password reset for uid ${userData.uid} due to password policy`));
            req.session.passwordExpired = stryMutAct_9fa48("8674") ? false : (stryCov_9fa48("8674"), true);
            const code = await user.reset.generate(userData.uid);
            (stryMutAct_9fa48("8677") ? res.locals.redirectAfterLogin && redirectAfterLogin : stryMutAct_9fa48("8676") ? false : stryMutAct_9fa48("8675") ? true : (stryCov_9fa48("8675", "8676", "8677"), res.locals.redirectAfterLogin || redirectAfterLogin))(req, res, stryMutAct_9fa48("8678") ? `` : (stryCov_9fa48("8678"), `${nconf.get(stryMutAct_9fa48("8679") ? "" : (stryCov_9fa48("8679"), 'relative_path'))}/reset/${code}`));
          }
        } else {
          if (stryMutAct_9fa48("8680")) {
            {}
          } else {
            stryCov_9fa48("8680");
            delete req.query.lang;
            await authenticationController.doLogin(req, userData.uid);
            let destination;
            if (stryMutAct_9fa48("8682") ? false : stryMutAct_9fa48("8681") ? true : (stryCov_9fa48("8681", "8682"), req.session.returnTo)) {
              if (stryMutAct_9fa48("8683")) {
                {}
              } else {
                stryCov_9fa48("8683");
                destination = (stryMutAct_9fa48("8684") ? req.session.returnTo.endsWith('http') : (stryCov_9fa48("8684"), req.session.returnTo.startsWith(stryMutAct_9fa48("8685") ? "" : (stryCov_9fa48("8685"), 'http')))) ? req.session.returnTo : stryMutAct_9fa48("8686") ? nconf.get('relative_path') - req.session.returnTo : (stryCov_9fa48("8686"), nconf.get(stryMutAct_9fa48("8687") ? "" : (stryCov_9fa48("8687"), 'relative_path')) + req.session.returnTo);
                delete req.session.returnTo;
              }
            } else {
              if (stryMutAct_9fa48("8688")) {
                {}
              } else {
                stryCov_9fa48("8688");
                destination = stryMutAct_9fa48("8689") ? `` : (stryCov_9fa48("8689"), `${nconf.get(stryMutAct_9fa48("8690") ? "" : (stryCov_9fa48("8690"), 'relative_path'))}/`);
              }
            }
            (stryMutAct_9fa48("8693") ? res.locals.redirectAfterLogin && redirectAfterLogin : stryMutAct_9fa48("8692") ? false : stryMutAct_9fa48("8691") ? true : (stryCov_9fa48("8691", "8692", "8693"), res.locals.redirectAfterLogin || redirectAfterLogin))(req, res, destination);
          }
        }
      }
    })(req, res, next);
  }
}
function redirectAfterLogin(req, res, destination) {
  if (stryMutAct_9fa48("8694")) {
    {}
  } else {
    stryCov_9fa48("8694");
    if (stryMutAct_9fa48("8697") ? req.body.noscript !== 'true' : stryMutAct_9fa48("8696") ? false : stryMutAct_9fa48("8695") ? true : (stryCov_9fa48("8695", "8696", "8697"), req.body.noscript === (stryMutAct_9fa48("8698") ? "" : (stryCov_9fa48("8698"), 'true')))) {
      if (stryMutAct_9fa48("8699")) {
        {}
      } else {
        stryCov_9fa48("8699");
        res.redirect(stryMutAct_9fa48("8700") ? `` : (stryCov_9fa48("8700"), `${destination}?loggedin`));
      }
    } else {
      if (stryMutAct_9fa48("8701")) {
        {}
      } else {
        stryCov_9fa48("8701");
        res.status(200).send(stryMutAct_9fa48("8702") ? {} : (stryCov_9fa48("8702"), {
          next: destination
        }));
      }
    }
  }
}
authenticationController.doLogin = async function (req, uid) {
  if (stryMutAct_9fa48("8703")) {
    {}
  } else {
    stryCov_9fa48("8703");
    if (stryMutAct_9fa48("8706") ? false : stryMutAct_9fa48("8705") ? true : stryMutAct_9fa48("8704") ? uid : (stryCov_9fa48("8704", "8705", "8706"), !uid)) {
      if (stryMutAct_9fa48("8707")) {
        {}
      } else {
        stryCov_9fa48("8707");
        return;
      }
    }
    const loginAsync = util.promisify(req.login).bind(req);
    await loginAsync(stryMutAct_9fa48("8708") ? {} : (stryCov_9fa48("8708"), {
      uid: uid
    }), stryMutAct_9fa48("8709") ? {} : (stryCov_9fa48("8709"), {
      keepSessionInfo: stryMutAct_9fa48("8712") ? req.res.locals === false : stryMutAct_9fa48("8711") ? false : stryMutAct_9fa48("8710") ? true : (stryCov_9fa48("8710", "8711", "8712"), req.res.locals !== (stryMutAct_9fa48("8713") ? true : (stryCov_9fa48("8713"), false)))
    }));
    await authenticationController.onSuccessfulLogin(req, uid);
  }
};
authenticationController.onSuccessfulLogin = async function (req, uid) {
  if (stryMutAct_9fa48("8714")) {
    {}
  } else {
    stryCov_9fa48("8714");
    /*
     * Older code required that this method be called from within the SSO plugin.
     * That behaviour is no longer required, onSuccessfulLogin is now automatically
     * called in NodeBB core. However, if already called, return prematurely
     */
    if (stryMutAct_9fa48("8717") ? req.loggedIn || !req.session.forceLogin : stryMutAct_9fa48("8716") ? false : stryMutAct_9fa48("8715") ? true : (stryCov_9fa48("8715", "8716", "8717"), req.loggedIn && (stryMutAct_9fa48("8718") ? req.session.forceLogin : (stryCov_9fa48("8718"), !req.session.forceLogin)))) {
      if (stryMutAct_9fa48("8719")) {
        {}
      } else {
        stryCov_9fa48("8719");
        return stryMutAct_9fa48("8720") ? false : (stryCov_9fa48("8720"), true);
      }
    }
    try {
      if (stryMutAct_9fa48("8721")) {
        {}
      } else {
        stryCov_9fa48("8721");
        const uuid = utils.generateUUID();
        req.uid = uid;
        req.loggedIn = stryMutAct_9fa48("8722") ? false : (stryCov_9fa48("8722"), true);
        await meta.blacklist.test(req.ip);
        await user.logIP(uid, req.ip);
        await user.bans.unbanIfExpired(stryMutAct_9fa48("8723") ? [] : (stryCov_9fa48("8723"), [uid]));
        await user.reset.cleanByUid(uid);
        req.session.meta = {};
        delete req.session.forceLogin;
        // Associate IP used during login with user account
        req.session.meta.ip = req.ip;

        // Associate metadata retrieved via user-agent
        req.session.meta = _.extend(req.session.meta, stryMutAct_9fa48("8724") ? {} : (stryCov_9fa48("8724"), {
          uuid: uuid,
          datetime: Date.now(),
          platform: req.useragent.platform,
          browser: req.useragent.browser,
          version: req.useragent.version
        }));
        await Promise.all(stryMutAct_9fa48("8725") ? [] : (stryCov_9fa48("8725"), [new Promise(resolve => {
          if (stryMutAct_9fa48("8726")) {
            {}
          } else {
            stryCov_9fa48("8726");
            req.session.save(resolve);
          }
        }), user.auth.addSession(uid, req.sessionID), user.updateLastOnlineTime(uid), user.updateOnlineUsers(uid), analytics.increment(stryMutAct_9fa48("8727") ? "" : (stryCov_9fa48("8727"), 'logins')), db.incrObjectFieldBy(stryMutAct_9fa48("8728") ? "" : (stryCov_9fa48("8728"), 'global'), stryMutAct_9fa48("8729") ? "" : (stryCov_9fa48("8729"), 'loginCount'), 1)]));
        if (stryMutAct_9fa48("8733") ? uid <= 0 : stryMutAct_9fa48("8732") ? uid >= 0 : stryMutAct_9fa48("8731") ? false : stryMutAct_9fa48("8730") ? true : (stryCov_9fa48("8730", "8731", "8732", "8733"), uid > 0)) {
          if (stryMutAct_9fa48("8734")) {
            {}
          } else {
            stryCov_9fa48("8734");
            await db.setObjectField(stryMutAct_9fa48("8735") ? `` : (stryCov_9fa48("8735"), `uid:${uid}:sessionUUID:sessionId`), uuid, req.sessionID);
          }
        }

        // Force session check for all connected socket.io clients with the same session id
        sockets.in(stryMutAct_9fa48("8736") ? `` : (stryCov_9fa48("8736"), `sess_${req.sessionID}`)).emit(stryMutAct_9fa48("8737") ? "" : (stryCov_9fa48("8737"), 'checkSession'), uid);
        plugins.hooks.fire(stryMutAct_9fa48("8738") ? "" : (stryCov_9fa48("8738"), 'action:user.loggedIn'), stryMutAct_9fa48("8739") ? {} : (stryCov_9fa48("8739"), {
          uid: uid,
          req: req
        }));
      }
    } catch (err) {
      if (stryMutAct_9fa48("8740")) {
        {}
      } else {
        stryCov_9fa48("8740");
        req.session.destroy();
        throw err;
      }
    }
  }
};
authenticationController.localLogin = async function (req, username, password, next) {
  if (stryMutAct_9fa48("8741")) {
    {}
  } else {
    stryCov_9fa48("8741");
    if (stryMutAct_9fa48("8744") ? false : stryMutAct_9fa48("8743") ? true : stryMutAct_9fa48("8742") ? username : (stryCov_9fa48("8742", "8743", "8744"), !username)) {
      if (stryMutAct_9fa48("8745")) {
        {}
      } else {
        stryCov_9fa48("8745");
        return next(new Error(stryMutAct_9fa48("8746") ? "" : (stryCov_9fa48("8746"), '[[error:invalid-username]]')));
      }
    }
    if (stryMutAct_9fa48("8749") ? !password && !utils.isPasswordValid(password) : stryMutAct_9fa48("8748") ? false : stryMutAct_9fa48("8747") ? true : (stryCov_9fa48("8747", "8748", "8749"), (stryMutAct_9fa48("8750") ? password : (stryCov_9fa48("8750"), !password)) || (stryMutAct_9fa48("8751") ? utils.isPasswordValid(password) : (stryCov_9fa48("8751"), !utils.isPasswordValid(password))))) {
      if (stryMutAct_9fa48("8752")) {
        {}
      } else {
        stryCov_9fa48("8752");
        return next(new Error(stryMutAct_9fa48("8753") ? "" : (stryCov_9fa48("8753"), '[[error:invalid-password]]')));
      }
    }
    if (stryMutAct_9fa48("8757") ? password.length <= 512 : stryMutAct_9fa48("8756") ? password.length >= 512 : stryMutAct_9fa48("8755") ? false : stryMutAct_9fa48("8754") ? true : (stryCov_9fa48("8754", "8755", "8756", "8757"), password.length > 512)) {
      if (stryMutAct_9fa48("8758")) {
        {}
      } else {
        stryCov_9fa48("8758");
        return next(new Error(stryMutAct_9fa48("8759") ? "" : (stryCov_9fa48("8759"), '[[error:password-too-long]]')));
      }
    }
    const userslug = slugify(username);
    const uid = await user.getUidByUserslug(userslug);
    try {
      if (stryMutAct_9fa48("8760")) {
        {}
      } else {
        stryCov_9fa48("8760");
        const [userData, isAdminOrGlobalMod, canLoginIfBanned] = await Promise.all(stryMutAct_9fa48("8761") ? [] : (stryCov_9fa48("8761"), [user.getUserFields(uid, stryMutAct_9fa48("8762") ? [] : (stryCov_9fa48("8762"), [stryMutAct_9fa48("8763") ? "" : (stryCov_9fa48("8763"), 'uid'), stryMutAct_9fa48("8764") ? "" : (stryCov_9fa48("8764"), 'passwordExpiry')])), user.isAdminOrGlobalMod(uid), user.bans.canLoginIfBanned(uid)]));
        userData.isAdminOrGlobalMod = isAdminOrGlobalMod;
        if (stryMutAct_9fa48("8767") ? false : stryMutAct_9fa48("8766") ? true : stryMutAct_9fa48("8765") ? canLoginIfBanned : (stryCov_9fa48("8765", "8766", "8767"), !canLoginIfBanned)) {
          if (stryMutAct_9fa48("8768")) {
            {}
          } else {
            stryCov_9fa48("8768");
            return next(await getBanError(uid));
          }
        }

        // Doing this after the ban check, because user's privileges might change after a ban expires
        const hasLoginPrivilege = await privileges.global.can(stryMutAct_9fa48("8769") ? "" : (stryCov_9fa48("8769"), 'local:login'), uid);
        if (stryMutAct_9fa48("8772") ? parseInt(uid, 10) || !hasLoginPrivilege : stryMutAct_9fa48("8771") ? false : stryMutAct_9fa48("8770") ? true : (stryCov_9fa48("8770", "8771", "8772"), parseInt(uid, 10) && (stryMutAct_9fa48("8773") ? hasLoginPrivilege : (stryCov_9fa48("8773"), !hasLoginPrivilege)))) {
          if (stryMutAct_9fa48("8774")) {
            {}
          } else {
            stryCov_9fa48("8774");
            return next(new Error(stryMutAct_9fa48("8775") ? "" : (stryCov_9fa48("8775"), '[[error:local-login-disabled]]')));
          }
        }
        const passwordMatch = await user.isPasswordCorrect(uid, password, req.ip);
        if (stryMutAct_9fa48("8778") ? false : stryMutAct_9fa48("8777") ? true : stryMutAct_9fa48("8776") ? passwordMatch : (stryCov_9fa48("8776", "8777", "8778"), !passwordMatch)) {
          if (stryMutAct_9fa48("8779")) {
            {}
          } else {
            stryCov_9fa48("8779");
            return next(new Error(stryMutAct_9fa48("8780") ? "" : (stryCov_9fa48("8780"), '[[error:invalid-login-credentials]]')));
          }
        }
        next(null, userData, stryMutAct_9fa48("8781") ? "" : (stryCov_9fa48("8781"), '[[success:authentication-successful]]'));
      }
    } catch (err) {
      if (stryMutAct_9fa48("8782")) {
        {}
      } else {
        stryCov_9fa48("8782");
        next(err);
      }
    }
  }
};
const destroyAsync = util.promisify(stryMutAct_9fa48("8783") ? () => undefined : (stryCov_9fa48("8783"), (req, callback) => req.session.destroy(callback)));
const logoutAsync = util.promisify(stryMutAct_9fa48("8784") ? () => undefined : (stryCov_9fa48("8784"), (req, callback) => req.logout(callback)));
authenticationController.logout = async function (req, res, next) {
  if (stryMutAct_9fa48("8785")) {
    {}
  } else {
    stryCov_9fa48("8785");
    if (stryMutAct_9fa48("8788") ? !req.loggedIn && !req.sessionID : stryMutAct_9fa48("8787") ? false : stryMutAct_9fa48("8786") ? true : (stryCov_9fa48("8786", "8787", "8788"), (stryMutAct_9fa48("8789") ? req.loggedIn : (stryCov_9fa48("8789"), !req.loggedIn)) || (stryMutAct_9fa48("8790") ? req.sessionID : (stryCov_9fa48("8790"), !req.sessionID)))) {
      if (stryMutAct_9fa48("8791")) {
        {}
      } else {
        stryCov_9fa48("8791");
        res.clearCookie(nconf.get(stryMutAct_9fa48("8792") ? "" : (stryCov_9fa48("8792"), 'sessionKey')), meta.configs.cookie.get());
        return res.status(200).send(stryMutAct_9fa48("8793") ? "" : (stryCov_9fa48("8793"), 'not-logged-in'));
      }
    }
    const {
      uid
    } = req;
    const {
      sessionID
    } = req;
    try {
      if (stryMutAct_9fa48("8794")) {
        {}
      } else {
        stryCov_9fa48("8794");
        await user.auth.revokeSession(sessionID, uid);
        await logoutAsync(req);
        await destroyAsync(req);
        res.clearCookie(nconf.get(stryMutAct_9fa48("8795") ? "" : (stryCov_9fa48("8795"), 'sessionKey')), meta.configs.cookie.get());
        await user.setUserField(uid, stryMutAct_9fa48("8796") ? "" : (stryCov_9fa48("8796"), 'lastonline'), stryMutAct_9fa48("8797") ? Date.now() + meta.config.onlineCutoff * 60000 : (stryCov_9fa48("8797"), Date.now() - (stryMutAct_9fa48("8798") ? meta.config.onlineCutoff / 60000 : (stryCov_9fa48("8798"), meta.config.onlineCutoff * 60000))));
        await db.sortedSetAdd(stryMutAct_9fa48("8799") ? "" : (stryCov_9fa48("8799"), 'users:online'), stryMutAct_9fa48("8800") ? Date.now() + meta.config.onlineCutoff * 60000 : (stryCov_9fa48("8800"), Date.now() - (stryMutAct_9fa48("8801") ? meta.config.onlineCutoff / 60000 : (stryCov_9fa48("8801"), meta.config.onlineCutoff * 60000))), uid);
        await plugins.hooks.fire(stryMutAct_9fa48("8802") ? "" : (stryCov_9fa48("8802"), 'static:user.loggedOut'), stryMutAct_9fa48("8803") ? {} : (stryCov_9fa48("8803"), {
          req: req,
          res: res,
          uid: uid,
          sessionID: sessionID
        }));

        // Force session check for all connected socket.io clients with the same session id
        sockets.in(stryMutAct_9fa48("8804") ? `` : (stryCov_9fa48("8804"), `sess_${sessionID}`)).emit(stryMutAct_9fa48("8805") ? "" : (stryCov_9fa48("8805"), 'checkSession'), 0);
        const payload = stryMutAct_9fa48("8806") ? {} : (stryCov_9fa48("8806"), {
          next: stryMutAct_9fa48("8807") ? `` : (stryCov_9fa48("8807"), `${nconf.get(stryMutAct_9fa48("8808") ? "" : (stryCov_9fa48("8808"), 'relative_path'))}/`)
        });
        plugins.hooks.fire(stryMutAct_9fa48("8809") ? "" : (stryCov_9fa48("8809"), 'filter:user.logout'), payload);
        if (stryMutAct_9fa48("8812") ? req.body.noscript !== 'true' : stryMutAct_9fa48("8811") ? false : stryMutAct_9fa48("8810") ? true : (stryCov_9fa48("8810", "8811", "8812"), req.body.noscript === (stryMutAct_9fa48("8813") ? "" : (stryCov_9fa48("8813"), 'true')))) {
          if (stryMutAct_9fa48("8814")) {
            {}
          } else {
            stryCov_9fa48("8814");
            return res.redirect(payload.next);
          }
        }
        res.status(200).send(payload);
      }
    } catch (err) {
      if (stryMutAct_9fa48("8815")) {
        {}
      } else {
        stryCov_9fa48("8815");
        next(err);
      }
    }
  }
};
async function getBanError(uid) {
  if (stryMutAct_9fa48("8816")) {
    {}
  } else {
    stryCov_9fa48("8816");
    try {
      if (stryMutAct_9fa48("8817")) {
        {}
      } else {
        stryCov_9fa48("8817");
        const banInfo = await user.getLatestBanInfo(uid);
        if (stryMutAct_9fa48("8820") ? false : stryMutAct_9fa48("8819") ? true : stryMutAct_9fa48("8818") ? banInfo.reason : (stryCov_9fa48("8818", "8819", "8820"), !banInfo.reason)) {
          if (stryMutAct_9fa48("8821")) {
            {}
          } else {
            stryCov_9fa48("8821");
            banInfo.reason = stryMutAct_9fa48("8822") ? "" : (stryCov_9fa48("8822"), '[[user:info.banned-no-reason]]');
          }
        }
        const err = new Error(banInfo.reason);
        err.data = banInfo;
        return err;
      }
    } catch (err) {
      if (stryMutAct_9fa48("8823")) {
        {}
      } else {
        stryCov_9fa48("8823");
        if (stryMutAct_9fa48("8826") ? err.message !== 'no-ban-info' : stryMutAct_9fa48("8825") ? false : stryMutAct_9fa48("8824") ? true : (stryCov_9fa48("8824", "8825", "8826"), err.message === (stryMutAct_9fa48("8827") ? "" : (stryCov_9fa48("8827"), 'no-ban-info')))) {
          if (stryMutAct_9fa48("8828")) {
            {}
          } else {
            stryCov_9fa48("8828");
            return new Error(stryMutAct_9fa48("8829") ? "" : (stryCov_9fa48("8829"), '[[error:user-banned]]'));
          }
        }
        throw err;
      }
    }
  }
}
require('../promisify')(authenticationController, stryMutAct_9fa48("8830") ? [] : (stryCov_9fa48("8830"), [stryMutAct_9fa48("8831") ? "" : (stryCov_9fa48("8831"), 'register'), stryMutAct_9fa48("8832") ? "" : (stryCov_9fa48("8832"), 'registerComplete'), stryMutAct_9fa48("8833") ? "" : (stryCov_9fa48("8833"), 'registerAbort'), stryMutAct_9fa48("8834") ? "" : (stryCov_9fa48("8834"), 'login'), stryMutAct_9fa48("8835") ? "" : (stryCov_9fa48("8835"), 'localLogin'), stryMutAct_9fa48("8836") ? "" : (stryCov_9fa48("8836"), 'logout')]));