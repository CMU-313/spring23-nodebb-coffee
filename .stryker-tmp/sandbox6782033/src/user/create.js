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
const zxcvbn = require('zxcvbn');
const winston = require('winston');
const db = require('../database');
const utils = require('../utils');
const slugify = require('../slugify');
const plugins = require('../plugins');
const groups = require('../groups');
const meta = require('../meta');
const analytics = require('../analytics');
module.exports = function (User) {
  if (stryMutAct_9fa48("45762")) {
    {}
  } else {
    stryCov_9fa48("45762");
    User.create = async function (data) {
      if (stryMutAct_9fa48("45763")) {
        {}
      } else {
        stryCov_9fa48("45763");
        data.username = stryMutAct_9fa48("45764") ? data.username : (stryCov_9fa48("45764"), data.username.trim());
        data.userslug = slugify(data.username);
        if (stryMutAct_9fa48("45767") ? data.email === undefined : stryMutAct_9fa48("45766") ? false : stryMutAct_9fa48("45765") ? true : (stryCov_9fa48("45765", "45766", "45767"), data.email !== undefined)) {
          if (stryMutAct_9fa48("45768")) {
            {}
          } else {
            stryCov_9fa48("45768");
            data.email = stryMutAct_9fa48("45769") ? String(data.email) : (stryCov_9fa48("45769"), String(data.email).trim());
          }
        }
        if (stryMutAct_9fa48("45772") ? data['account-type'] === undefined : stryMutAct_9fa48("45771") ? false : stryMutAct_9fa48("45770") ? true : (stryCov_9fa48("45770", "45771", "45772"), data[stryMutAct_9fa48("45773") ? "" : (stryCov_9fa48("45773"), 'account-type')] !== undefined)) {
          if (stryMutAct_9fa48("45774")) {
            {}
          } else {
            stryCov_9fa48("45774");
            data.accounttype = stryMutAct_9fa48("45775") ? data['account-type'] : (stryCov_9fa48("45775"), data[stryMutAct_9fa48("45776") ? "" : (stryCov_9fa48("45776"), 'account-type')].trim());
          }
        }
        await User.isDataValid(data);
        await lock(data.username, stryMutAct_9fa48("45777") ? "" : (stryCov_9fa48("45777"), '[[error:username-taken]]'));
        if (stryMutAct_9fa48("45780") ? data.email || data.email !== data.username : stryMutAct_9fa48("45779") ? false : stryMutAct_9fa48("45778") ? true : (stryCov_9fa48("45778", "45779", "45780"), data.email && (stryMutAct_9fa48("45782") ? data.email === data.username : stryMutAct_9fa48("45781") ? true : (stryCov_9fa48("45781", "45782"), data.email !== data.username)))) {
          if (stryMutAct_9fa48("45783")) {
            {}
          } else {
            stryCov_9fa48("45783");
            await lock(data.email, stryMutAct_9fa48("45784") ? "" : (stryCov_9fa48("45784"), '[[error:email-taken]]'));
          }
        }
        try {
          if (stryMutAct_9fa48("45785")) {
            {}
          } else {
            stryCov_9fa48("45785");
            return await create(data);
          }
        } finally {
          if (stryMutAct_9fa48("45786")) {
            {}
          } else {
            stryCov_9fa48("45786");
            await db.deleteObjectFields(stryMutAct_9fa48("45787") ? "" : (stryCov_9fa48("45787"), 'locks'), stryMutAct_9fa48("45788") ? [] : (stryCov_9fa48("45788"), [data.username, data.email]));
          }
        }
      }
    };
    async function lock(value, error) {
      if (stryMutAct_9fa48("45789")) {
        {}
      } else {
        stryCov_9fa48("45789");
        const count = await db.incrObjectField(stryMutAct_9fa48("45790") ? "" : (stryCov_9fa48("45790"), 'locks'), value);
        if (stryMutAct_9fa48("45794") ? count <= 1 : stryMutAct_9fa48("45793") ? count >= 1 : stryMutAct_9fa48("45792") ? false : stryMutAct_9fa48("45791") ? true : (stryCov_9fa48("45791", "45792", "45793", "45794"), count > 1)) {
          if (stryMutAct_9fa48("45795")) {
            {}
          } else {
            stryCov_9fa48("45795");
            throw new Error(error);
          }
        }
      }
    }
    async function create(data) {
      if (stryMutAct_9fa48("45796")) {
        {}
      } else {
        stryCov_9fa48("45796");
        const timestamp = stryMutAct_9fa48("45799") ? data.timestamp && Date.now() : stryMutAct_9fa48("45798") ? false : stryMutAct_9fa48("45797") ? true : (stryCov_9fa48("45797", "45798", "45799"), data.timestamp || Date.now());
        let userData = stryMutAct_9fa48("45800") ? {} : (stryCov_9fa48("45800"), {
          username: data.username,
          userslug: data.userslug,
          accounttype: stryMutAct_9fa48("45803") ? data.accounttype && 'student' : stryMutAct_9fa48("45802") ? false : stryMutAct_9fa48("45801") ? true : (stryCov_9fa48("45801", "45802", "45803"), data.accounttype || (stryMutAct_9fa48("45804") ? "" : (stryCov_9fa48("45804"), 'student'))),
          email: stryMutAct_9fa48("45807") ? data.email && '' : stryMutAct_9fa48("45806") ? false : stryMutAct_9fa48("45805") ? true : (stryCov_9fa48("45805", "45806", "45807"), data.email || (stryMutAct_9fa48("45808") ? "Stryker was here!" : (stryCov_9fa48("45808"), ''))),
          joindate: timestamp,
          lastonline: timestamp,
          status: stryMutAct_9fa48("45809") ? "" : (stryCov_9fa48("45809"), 'online')
        });
        (stryMutAct_9fa48("45810") ? [] : (stryCov_9fa48("45810"), [stryMutAct_9fa48("45811") ? "" : (stryCov_9fa48("45811"), 'picture'), stryMutAct_9fa48("45812") ? "" : (stryCov_9fa48("45812"), 'fullname'), stryMutAct_9fa48("45813") ? "" : (stryCov_9fa48("45813"), 'location'), stryMutAct_9fa48("45814") ? "" : (stryCov_9fa48("45814"), 'birthday')])).forEach(field => {
          if (stryMutAct_9fa48("45815")) {
            {}
          } else {
            stryCov_9fa48("45815");
            if (stryMutAct_9fa48("45817") ? false : stryMutAct_9fa48("45816") ? true : (stryCov_9fa48("45816", "45817"), data[field])) {
              if (stryMutAct_9fa48("45818")) {
                {}
              } else {
                stryCov_9fa48("45818");
                userData[field] = data[field];
              }
            }
          }
        });
        if (stryMutAct_9fa48("45821") ? data.gdpr_consent !== true : stryMutAct_9fa48("45820") ? false : stryMutAct_9fa48("45819") ? true : (stryCov_9fa48("45819", "45820", "45821"), data.gdpr_consent === (stryMutAct_9fa48("45822") ? false : (stryCov_9fa48("45822"), true)))) {
          if (stryMutAct_9fa48("45823")) {
            {}
          } else {
            stryCov_9fa48("45823");
            userData.gdpr_consent = 1;
          }
        }
        if (stryMutAct_9fa48("45826") ? data.acceptTos !== true : stryMutAct_9fa48("45825") ? false : stryMutAct_9fa48("45824") ? true : (stryCov_9fa48("45824", "45825", "45826"), data.acceptTos === (stryMutAct_9fa48("45827") ? false : (stryCov_9fa48("45827"), true)))) {
          if (stryMutAct_9fa48("45828")) {
            {}
          } else {
            stryCov_9fa48("45828");
            userData.acceptTos = 1;
          }
        }
        const renamedUsername = await User.uniqueUsername(userData);
        const userNameChanged = stryMutAct_9fa48("45829") ? !renamedUsername : (stryCov_9fa48("45829"), !(stryMutAct_9fa48("45830") ? renamedUsername : (stryCov_9fa48("45830"), !renamedUsername)));
        if (stryMutAct_9fa48("45832") ? false : stryMutAct_9fa48("45831") ? true : (stryCov_9fa48("45831", "45832"), userNameChanged)) {
          if (stryMutAct_9fa48("45833")) {
            {}
          } else {
            stryCov_9fa48("45833");
            userData.username = renamedUsername;
            userData.userslug = slugify(renamedUsername);
          }
        }
        const results = await plugins.hooks.fire(stryMutAct_9fa48("45834") ? "" : (stryCov_9fa48("45834"), 'filter:user.create'), stryMutAct_9fa48("45835") ? {} : (stryCov_9fa48("45835"), {
          user: userData,
          data: data
        }));
        userData = results.user;
        const uid = await db.incrObjectField(stryMutAct_9fa48("45836") ? "" : (stryCov_9fa48("45836"), 'global'), stryMutAct_9fa48("45837") ? "" : (stryCov_9fa48("45837"), 'nextUid'));
        const isFirstUser = stryMutAct_9fa48("45840") ? uid !== 1 : stryMutAct_9fa48("45839") ? false : stryMutAct_9fa48("45838") ? true : (stryCov_9fa48("45838", "45839", "45840"), uid === 1);
        userData.uid = uid;
        await db.setObject(stryMutAct_9fa48("45841") ? `` : (stryCov_9fa48("45841"), `user:${uid}`), userData);
        const bulkAdd = stryMutAct_9fa48("45842") ? [] : (stryCov_9fa48("45842"), [stryMutAct_9fa48("45843") ? [] : (stryCov_9fa48("45843"), [stryMutAct_9fa48("45844") ? "" : (stryCov_9fa48("45844"), 'username:uid'), userData.uid, userData.username]), stryMutAct_9fa48("45845") ? [] : (stryCov_9fa48("45845"), [stryMutAct_9fa48("45846") ? `` : (stryCov_9fa48("45846"), `user:${userData.uid}:usernames`), timestamp, stryMutAct_9fa48("45847") ? `` : (stryCov_9fa48("45847"), `${userData.username}:${timestamp}`)]), stryMutAct_9fa48("45848") ? [] : (stryCov_9fa48("45848"), [stryMutAct_9fa48("45849") ? "" : (stryCov_9fa48("45849"), 'username:sorted'), 0, stryMutAct_9fa48("45850") ? `` : (stryCov_9fa48("45850"), `${stryMutAct_9fa48("45851") ? userData.username.toUpperCase() : (stryCov_9fa48("45851"), userData.username.toLowerCase())}:${userData.uid}`)]), stryMutAct_9fa48("45852") ? [] : (stryCov_9fa48("45852"), [stryMutAct_9fa48("45853") ? "" : (stryCov_9fa48("45853"), 'userslug:uid'), userData.uid, userData.userslug]), stryMutAct_9fa48("45854") ? [] : (stryCov_9fa48("45854"), [stryMutAct_9fa48("45855") ? "" : (stryCov_9fa48("45855"), 'users:joindate'), timestamp, userData.uid]), stryMutAct_9fa48("45856") ? [] : (stryCov_9fa48("45856"), [stryMutAct_9fa48("45857") ? "" : (stryCov_9fa48("45857"), 'users:online'), timestamp, userData.uid]), stryMutAct_9fa48("45858") ? [] : (stryCov_9fa48("45858"), [stryMutAct_9fa48("45859") ? "" : (stryCov_9fa48("45859"), 'users:postcount'), 0, userData.uid]), stryMutAct_9fa48("45860") ? [] : (stryCov_9fa48("45860"), [stryMutAct_9fa48("45861") ? "" : (stryCov_9fa48("45861"), 'users:reputation'), 0, userData.uid])]);
        if (stryMutAct_9fa48("45863") ? false : stryMutAct_9fa48("45862") ? true : (stryCov_9fa48("45862", "45863"), userData.fullname)) {
          if (stryMutAct_9fa48("45864")) {
            {}
          } else {
            stryCov_9fa48("45864");
            bulkAdd.push(stryMutAct_9fa48("45865") ? [] : (stryCov_9fa48("45865"), [stryMutAct_9fa48("45866") ? "" : (stryCov_9fa48("45866"), 'fullname:sorted'), 0, stryMutAct_9fa48("45867") ? `` : (stryCov_9fa48("45867"), `${stryMutAct_9fa48("45868") ? userData.fullname.toUpperCase() : (stryCov_9fa48("45868"), userData.fullname.toLowerCase())}:${userData.uid}`)]));
          }
        }
        await Promise.all(stryMutAct_9fa48("45869") ? [] : (stryCov_9fa48("45869"), [db.incrObjectField(stryMutAct_9fa48("45870") ? "" : (stryCov_9fa48("45870"), 'global'), stryMutAct_9fa48("45871") ? "" : (stryCov_9fa48("45871"), 'userCount')), analytics.increment(stryMutAct_9fa48("45872") ? "" : (stryCov_9fa48("45872"), 'registrations')), db.sortedSetAddBulk(bulkAdd), groups.join(stryMutAct_9fa48("45873") ? [] : (stryCov_9fa48("45873"), [stryMutAct_9fa48("45874") ? "" : (stryCov_9fa48("45874"), 'registered-users'), stryMutAct_9fa48("45875") ? "" : (stryCov_9fa48("45875"), 'unverified-users')]), userData.uid), User.notifications.sendWelcomeNotification(userData.uid), storePassword(userData.uid, data.password), User.updateDigestSetting(userData.uid, meta.config.dailyDigestFreq)]));
        if (stryMutAct_9fa48("45878") ? userData.email || isFirstUser : stryMutAct_9fa48("45877") ? false : stryMutAct_9fa48("45876") ? true : (stryCov_9fa48("45876", "45877", "45878"), userData.email && isFirstUser)) {
          if (stryMutAct_9fa48("45879")) {
            {}
          } else {
            stryCov_9fa48("45879");
            await User.email.confirmByUid(userData.uid);
          }
        }
        if (stryMutAct_9fa48("45882") ? userData.email || userData.uid > 1 : stryMutAct_9fa48("45881") ? false : stryMutAct_9fa48("45880") ? true : (stryCov_9fa48("45880", "45881", "45882"), userData.email && (stryMutAct_9fa48("45885") ? userData.uid <= 1 : stryMutAct_9fa48("45884") ? userData.uid >= 1 : stryMutAct_9fa48("45883") ? true : (stryCov_9fa48("45883", "45884", "45885"), userData.uid > 1)))) {
          if (stryMutAct_9fa48("45886")) {
            {}
          } else {
            stryCov_9fa48("45886");
            await User.email.sendValidationEmail(userData.uid, stryMutAct_9fa48("45887") ? {} : (stryCov_9fa48("45887"), {
              email: userData.email,
              template: stryMutAct_9fa48("45888") ? "" : (stryCov_9fa48("45888"), 'welcome'),
              subject: stryMutAct_9fa48("45889") ? `` : (stryCov_9fa48("45889"), `[[email:welcome-to, ${stryMutAct_9fa48("45892") ? (meta.config.title || meta.config.browserTitle) && 'NodeBB' : stryMutAct_9fa48("45891") ? false : stryMutAct_9fa48("45890") ? true : (stryCov_9fa48("45890", "45891", "45892"), (stryMutAct_9fa48("45894") ? meta.config.title && meta.config.browserTitle : stryMutAct_9fa48("45893") ? false : (stryCov_9fa48("45893", "45894"), meta.config.title || meta.config.browserTitle)) || (stryMutAct_9fa48("45895") ? "" : (stryCov_9fa48("45895"), 'NodeBB')))}]]`)
            })).catch(stryMutAct_9fa48("45896") ? () => undefined : (stryCov_9fa48("45896"), err => winston.error(stryMutAct_9fa48("45897") ? `` : (stryCov_9fa48("45897"), `[user.create] Validation email failed to send\n[emailer.send] ${err.stack}`))));
          }
        }
        if (stryMutAct_9fa48("45899") ? false : stryMutAct_9fa48("45898") ? true : (stryCov_9fa48("45898", "45899"), userNameChanged)) {
          if (stryMutAct_9fa48("45900")) {
            {}
          } else {
            stryCov_9fa48("45900");
            await User.notifications.sendNameChangeNotification(userData.uid, userData.username);
          }
        }
        plugins.hooks.fire(stryMutAct_9fa48("45901") ? "" : (stryCov_9fa48("45901"), 'action:user.create'), stryMutAct_9fa48("45902") ? {} : (stryCov_9fa48("45902"), {
          user: userData,
          data: data
        }));
        return userData.uid;
      }
    }
    async function storePassword(uid, password) {
      if (stryMutAct_9fa48("45903")) {
        {}
      } else {
        stryCov_9fa48("45903");
        if (stryMutAct_9fa48("45906") ? false : stryMutAct_9fa48("45905") ? true : stryMutAct_9fa48("45904") ? password : (stryCov_9fa48("45904", "45905", "45906"), !password)) {
          if (stryMutAct_9fa48("45907")) {
            {}
          } else {
            stryCov_9fa48("45907");
            return;
          }
        }
        const hash = await User.hashPassword(password);
        await Promise.all(stryMutAct_9fa48("45908") ? [] : (stryCov_9fa48("45908"), [User.setUserFields(uid, stryMutAct_9fa48("45909") ? {} : (stryCov_9fa48("45909"), {
          password: hash,
          'password:shaWrapped': 1
        })), User.reset.updateExpiry(uid)]));
      }
    }
    User.isDataValid = async function (userData) {
      if (stryMutAct_9fa48("45910")) {
        {}
      } else {
        stryCov_9fa48("45910");
        if (stryMutAct_9fa48("45913") ? userData.email || !utils.isEmailValid(userData.email) : stryMutAct_9fa48("45912") ? false : stryMutAct_9fa48("45911") ? true : (stryCov_9fa48("45911", "45912", "45913"), userData.email && (stryMutAct_9fa48("45914") ? utils.isEmailValid(userData.email) : (stryCov_9fa48("45914"), !utils.isEmailValid(userData.email))))) {
          if (stryMutAct_9fa48("45915")) {
            {}
          } else {
            stryCov_9fa48("45915");
            throw new Error(stryMutAct_9fa48("45916") ? "" : (stryCov_9fa48("45916"), '[[error:invalid-email]]'));
          }
        }
        if (stryMutAct_9fa48("45919") ? !utils.isUserNameValid(userData.username) && !userData.userslug : stryMutAct_9fa48("45918") ? false : stryMutAct_9fa48("45917") ? true : (stryCov_9fa48("45917", "45918", "45919"), (stryMutAct_9fa48("45920") ? utils.isUserNameValid(userData.username) : (stryCov_9fa48("45920"), !utils.isUserNameValid(userData.username))) || (stryMutAct_9fa48("45921") ? userData.userslug : (stryCov_9fa48("45921"), !userData.userslug)))) {
          if (stryMutAct_9fa48("45922")) {
            {}
          } else {
            stryCov_9fa48("45922");
            throw new Error(stryMutAct_9fa48("45923") ? `` : (stryCov_9fa48("45923"), `[[error:invalid-username, ${userData.username}]]`));
          }
        }
        if (stryMutAct_9fa48("45925") ? false : stryMutAct_9fa48("45924") ? true : (stryCov_9fa48("45924", "45925"), userData.password)) {
          if (stryMutAct_9fa48("45926")) {
            {}
          } else {
            stryCov_9fa48("45926");
            User.isPasswordValid(userData.password);
          }
        }
        if (stryMutAct_9fa48("45928") ? false : stryMutAct_9fa48("45927") ? true : (stryCov_9fa48("45927", "45928"), userData.email)) {
          if (stryMutAct_9fa48("45929")) {
            {}
          } else {
            stryCov_9fa48("45929");
            const available = await User.email.available(userData.email);
            if (stryMutAct_9fa48("45932") ? false : stryMutAct_9fa48("45931") ? true : stryMutAct_9fa48("45930") ? available : (stryCov_9fa48("45930", "45931", "45932"), !available)) {
              if (stryMutAct_9fa48("45933")) {
                {}
              } else {
                stryCov_9fa48("45933");
                throw new Error(stryMutAct_9fa48("45934") ? "" : (stryCov_9fa48("45934"), '[[error:email-taken]]'));
              }
            }
          }
        }
      }
    };
    User.isPasswordValid = function (password, minStrength) {
      if (stryMutAct_9fa48("45935")) {
        {}
      } else {
        stryCov_9fa48("45935");
        minStrength = (stryMutAct_9fa48("45938") ? minStrength && minStrength === 0 : stryMutAct_9fa48("45937") ? false : stryMutAct_9fa48("45936") ? true : (stryCov_9fa48("45936", "45937", "45938"), minStrength || (stryMutAct_9fa48("45940") ? minStrength !== 0 : stryMutAct_9fa48("45939") ? false : (stryCov_9fa48("45939", "45940"), minStrength === 0)))) ? minStrength : meta.config.minimumPasswordStrength;

        // Sanity checks: Checks if defined and is string
        if (stryMutAct_9fa48("45943") ? !password && !utils.isPasswordValid(password) : stryMutAct_9fa48("45942") ? false : stryMutAct_9fa48("45941") ? true : (stryCov_9fa48("45941", "45942", "45943"), (stryMutAct_9fa48("45944") ? password : (stryCov_9fa48("45944"), !password)) || (stryMutAct_9fa48("45945") ? utils.isPasswordValid(password) : (stryCov_9fa48("45945"), !utils.isPasswordValid(password))))) {
          if (stryMutAct_9fa48("45946")) {
            {}
          } else {
            stryCov_9fa48("45946");
            throw new Error(stryMutAct_9fa48("45947") ? "" : (stryCov_9fa48("45947"), '[[error:invalid-password]]'));
          }
        }
        if (stryMutAct_9fa48("45951") ? password.length >= meta.config.minimumPasswordLength : stryMutAct_9fa48("45950") ? password.length <= meta.config.minimumPasswordLength : stryMutAct_9fa48("45949") ? false : stryMutAct_9fa48("45948") ? true : (stryCov_9fa48("45948", "45949", "45950", "45951"), password.length < meta.config.minimumPasswordLength)) {
          if (stryMutAct_9fa48("45952")) {
            {}
          } else {
            stryCov_9fa48("45952");
            throw new Error(stryMutAct_9fa48("45953") ? "" : (stryCov_9fa48("45953"), '[[reset_password:password_too_short]]'));
          }
        }
        if (stryMutAct_9fa48("45957") ? password.length <= 512 : stryMutAct_9fa48("45956") ? password.length >= 512 : stryMutAct_9fa48("45955") ? false : stryMutAct_9fa48("45954") ? true : (stryCov_9fa48("45954", "45955", "45956", "45957"), password.length > 512)) {
          if (stryMutAct_9fa48("45958")) {
            {}
          } else {
            stryCov_9fa48("45958");
            throw new Error(stryMutAct_9fa48("45959") ? "" : (stryCov_9fa48("45959"), '[[error:password-too-long]]'));
          }
        }
        const strength = zxcvbn(password);
        if (stryMutAct_9fa48("45963") ? strength.score >= minStrength : stryMutAct_9fa48("45962") ? strength.score <= minStrength : stryMutAct_9fa48("45961") ? false : stryMutAct_9fa48("45960") ? true : (stryCov_9fa48("45960", "45961", "45962", "45963"), strength.score < minStrength)) {
          if (stryMutAct_9fa48("45964")) {
            {}
          } else {
            stryCov_9fa48("45964");
            throw new Error(stryMutAct_9fa48("45965") ? "" : (stryCov_9fa48("45965"), '[[user:weak_password]]'));
          }
        }
      }
    };
    User.uniqueUsername = async function (userData) {
      if (stryMutAct_9fa48("45966")) {
        {}
      } else {
        stryCov_9fa48("45966");
        let numTries = 0;
        let {
          username
        } = userData;
        while (stryMutAct_9fa48("45968") ? false : stryMutAct_9fa48("45967") ? false : (stryCov_9fa48("45967", "45968"), true)) {
          if (stryMutAct_9fa48("45969")) {
            {}
          } else {
            stryCov_9fa48("45969");
            /* eslint-disable no-await-in-loop */
            const exists = await meta.userOrGroupExists(username);
            if (stryMutAct_9fa48("45972") ? false : stryMutAct_9fa48("45971") ? true : stryMutAct_9fa48("45970") ? exists : (stryCov_9fa48("45970", "45971", "45972"), !exists)) {
              if (stryMutAct_9fa48("45973")) {
                {}
              } else {
                stryCov_9fa48("45973");
                return numTries ? username : null;
              }
            }
            username = stryMutAct_9fa48("45974") ? `` : (stryCov_9fa48("45974"), `${userData.username} ${numTries.toString(32)}`);
            stryMutAct_9fa48("45975") ? numTries -= 1 : (stryCov_9fa48("45975"), numTries += 1);
          }
        }
      }
    };
  }
};