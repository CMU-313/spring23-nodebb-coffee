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
const _ = require('lodash');
const validator = require('validator');
const winston = require('winston');
const utils = require('../utils');
const slugify = require('../slugify');
const meta = require('../meta');
const db = require('../database');
const groups = require('../groups');
const plugins = require('../plugins');
module.exports = function (User) {
  if (stryMutAct_9fa48("48577")) {
    {}
  } else {
    stryCov_9fa48("48577");
    User.updateProfile = async function (uid, data, extraFields) {
      if (stryMutAct_9fa48("48578")) {
        {}
      } else {
        stryCov_9fa48("48578");
        let fields = stryMutAct_9fa48("48579") ? [] : (stryCov_9fa48("48579"), [stryMutAct_9fa48("48580") ? "" : (stryCov_9fa48("48580"), 'username'), stryMutAct_9fa48("48581") ? "" : (stryCov_9fa48("48581"), 'email'), stryMutAct_9fa48("48582") ? "" : (stryCov_9fa48("48582"), 'fullname'), stryMutAct_9fa48("48583") ? "" : (stryCov_9fa48("48583"), 'website'), stryMutAct_9fa48("48584") ? "" : (stryCov_9fa48("48584"), 'location'), stryMutAct_9fa48("48585") ? "" : (stryCov_9fa48("48585"), 'groupTitle'), stryMutAct_9fa48("48586") ? "" : (stryCov_9fa48("48586"), 'birthday'), stryMutAct_9fa48("48587") ? "" : (stryCov_9fa48("48587"), 'signature'), stryMutAct_9fa48("48588") ? "" : (stryCov_9fa48("48588"), 'aboutme')]);
        if (stryMutAct_9fa48("48590") ? false : stryMutAct_9fa48("48589") ? true : (stryCov_9fa48("48589", "48590"), Array.isArray(extraFields))) {
          if (stryMutAct_9fa48("48591")) {
            {}
          } else {
            stryCov_9fa48("48591");
            fields = _.uniq(fields.concat(extraFields));
          }
        }
        if (stryMutAct_9fa48("48594") ? false : stryMutAct_9fa48("48593") ? true : stryMutAct_9fa48("48592") ? data.uid : (stryCov_9fa48("48592", "48593", "48594"), !data.uid)) {
          if (stryMutAct_9fa48("48595")) {
            {}
          } else {
            stryCov_9fa48("48595");
            throw new Error(stryMutAct_9fa48("48596") ? "" : (stryCov_9fa48("48596"), '[[error:invalid-update-uid]]'));
          }
        }
        const updateUid = data.uid;
        const result = await plugins.hooks.fire(stryMutAct_9fa48("48597") ? "" : (stryCov_9fa48("48597"), 'filter:user.updateProfile'), stryMutAct_9fa48("48598") ? {} : (stryCov_9fa48("48598"), {
          uid: uid,
          data: data,
          fields: fields
        }));
        fields = result.fields;
        data = result.data;
        await validateData(uid, data);
        const oldData = await User.getUserFields(updateUid, fields);
        const updateData = {};
        await Promise.all(fields.map(async field => {
          if (stryMutAct_9fa48("48599")) {
            {}
          } else {
            stryCov_9fa48("48599");
            if (stryMutAct_9fa48("48602") ? false : stryMutAct_9fa48("48601") ? true : stryMutAct_9fa48("48600") ? data[field] !== undefined && typeof data[field] === 'string' : (stryCov_9fa48("48600", "48601", "48602"), !(stryMutAct_9fa48("48605") ? data[field] !== undefined || typeof data[field] === 'string' : stryMutAct_9fa48("48604") ? false : stryMutAct_9fa48("48603") ? true : (stryCov_9fa48("48603", "48604", "48605"), (stryMutAct_9fa48("48607") ? data[field] === undefined : stryMutAct_9fa48("48606") ? true : (stryCov_9fa48("48606", "48607"), data[field] !== undefined)) && (stryMutAct_9fa48("48609") ? typeof data[field] !== 'string' : stryMutAct_9fa48("48608") ? true : (stryCov_9fa48("48608", "48609"), typeof data[field] === (stryMutAct_9fa48("48610") ? "" : (stryCov_9fa48("48610"), 'string')))))))) {
              if (stryMutAct_9fa48("48611")) {
                {}
              } else {
                stryCov_9fa48("48611");
                return;
              }
            }
            data[field] = stryMutAct_9fa48("48612") ? data[field] : (stryCov_9fa48("48612"), data[field].trim());
            if (stryMutAct_9fa48("48615") ? field !== 'email' : stryMutAct_9fa48("48614") ? false : stryMutAct_9fa48("48613") ? true : (stryCov_9fa48("48613", "48614", "48615"), field === (stryMutAct_9fa48("48616") ? "" : (stryCov_9fa48("48616"), 'email')))) {
              if (stryMutAct_9fa48("48617")) {
                {}
              } else {
                stryCov_9fa48("48617");
                return await updateEmail(updateUid, data.email);
              }
            } else if (stryMutAct_9fa48("48620") ? field !== 'username' : stryMutAct_9fa48("48619") ? false : stryMutAct_9fa48("48618") ? true : (stryCov_9fa48("48618", "48619", "48620"), field === (stryMutAct_9fa48("48621") ? "" : (stryCov_9fa48("48621"), 'username')))) {
              if (stryMutAct_9fa48("48622")) {
                {}
              } else {
                stryCov_9fa48("48622");
                return await updateUsername(updateUid, data.username);
              }
            } else if (stryMutAct_9fa48("48625") ? field !== 'fullname' : stryMutAct_9fa48("48624") ? false : stryMutAct_9fa48("48623") ? true : (stryCov_9fa48("48623", "48624", "48625"), field === (stryMutAct_9fa48("48626") ? "" : (stryCov_9fa48("48626"), 'fullname')))) {
              if (stryMutAct_9fa48("48627")) {
                {}
              } else {
                stryCov_9fa48("48627");
                return await updateFullname(updateUid, data.fullname);
              }
            }
            updateData[field] = data[field];
          }
        }));
        if (stryMutAct_9fa48("48629") ? false : stryMutAct_9fa48("48628") ? true : (stryCov_9fa48("48628", "48629"), Object.keys(updateData).length)) {
          if (stryMutAct_9fa48("48630")) {
            {}
          } else {
            stryCov_9fa48("48630");
            await User.setUserFields(updateUid, updateData);
          }
        }
        plugins.hooks.fire(stryMutAct_9fa48("48631") ? "" : (stryCov_9fa48("48631"), 'action:user.updateProfile'), stryMutAct_9fa48("48632") ? {} : (stryCov_9fa48("48632"), {
          uid: uid,
          data: data,
          fields: fields,
          oldData: oldData
        }));
        return await User.getUserFields(updateUid, stryMutAct_9fa48("48633") ? [] : (stryCov_9fa48("48633"), [stryMutAct_9fa48("48634") ? "" : (stryCov_9fa48("48634"), 'email'), stryMutAct_9fa48("48635") ? "" : (stryCov_9fa48("48635"), 'username'), stryMutAct_9fa48("48636") ? "" : (stryCov_9fa48("48636"), 'userslug'), stryMutAct_9fa48("48637") ? "" : (stryCov_9fa48("48637"), 'picture'), stryMutAct_9fa48("48638") ? "" : (stryCov_9fa48("48638"), 'icon:text'), stryMutAct_9fa48("48639") ? "" : (stryCov_9fa48("48639"), 'icon:bgColor')]));
      }
    };
    async function validateData(callerUid, data) {
      if (stryMutAct_9fa48("48640")) {
        {}
      } else {
        stryCov_9fa48("48640");
        await isEmailValid(data);
        await isUsernameAvailable(data, data.uid);
        await isWebsiteValid(callerUid, data);
        await isAboutMeValid(callerUid, data);
        await isSignatureValid(callerUid, data);
        isFullnameValid(data);
        isLocationValid(data);
        isBirthdayValid(data);
        isGroupTitleValid(data);
      }
    }
    async function isEmailValid(data) {
      if (stryMutAct_9fa48("48641")) {
        {}
      } else {
        stryCov_9fa48("48641");
        if (stryMutAct_9fa48("48644") ? false : stryMutAct_9fa48("48643") ? true : stryMutAct_9fa48("48642") ? data.email : (stryCov_9fa48("48642", "48643", "48644"), !data.email)) {
          if (stryMutAct_9fa48("48645")) {
            {}
          } else {
            stryCov_9fa48("48645");
            return;
          }
        }
        data.email = stryMutAct_9fa48("48646") ? data.email : (stryCov_9fa48("48646"), data.email.trim());
        if (stryMutAct_9fa48("48649") ? false : stryMutAct_9fa48("48648") ? true : stryMutAct_9fa48("48647") ? utils.isEmailValid(data.email) : (stryCov_9fa48("48647", "48648", "48649"), !utils.isEmailValid(data.email))) {
          if (stryMutAct_9fa48("48650")) {
            {}
          } else {
            stryCov_9fa48("48650");
            throw new Error(stryMutAct_9fa48("48651") ? "" : (stryCov_9fa48("48651"), '[[error:invalid-email]]'));
          }
        }
      }
    }
    async function isUsernameAvailable(data, uid) {
      if (stryMutAct_9fa48("48652")) {
        {}
      } else {
        stryCov_9fa48("48652");
        if (stryMutAct_9fa48("48655") ? false : stryMutAct_9fa48("48654") ? true : stryMutAct_9fa48("48653") ? data.username : (stryCov_9fa48("48653", "48654", "48655"), !data.username)) {
          if (stryMutAct_9fa48("48656")) {
            {}
          } else {
            stryCov_9fa48("48656");
            return;
          }
        }
        data.username = stryMutAct_9fa48("48657") ? data.username : (stryCov_9fa48("48657"), data.username.trim());
        let userData;
        if (stryMutAct_9fa48("48659") ? false : stryMutAct_9fa48("48658") ? true : (stryCov_9fa48("48658", "48659"), uid)) {
          if (stryMutAct_9fa48("48660")) {
            {}
          } else {
            stryCov_9fa48("48660");
            userData = await User.getUserFields(uid, stryMutAct_9fa48("48661") ? [] : (stryCov_9fa48("48661"), [stryMutAct_9fa48("48662") ? "" : (stryCov_9fa48("48662"), 'username'), stryMutAct_9fa48("48663") ? "" : (stryCov_9fa48("48663"), 'userslug')]));
            if (stryMutAct_9fa48("48666") ? userData.username !== data.username : stryMutAct_9fa48("48665") ? false : stryMutAct_9fa48("48664") ? true : (stryCov_9fa48("48664", "48665", "48666"), userData.username === data.username)) {
              if (stryMutAct_9fa48("48667")) {
                {}
              } else {
                stryCov_9fa48("48667");
                return;
              }
            }
          }
        }
        if (stryMutAct_9fa48("48671") ? data.username.length >= meta.config.minimumUsernameLength : stryMutAct_9fa48("48670") ? data.username.length <= meta.config.minimumUsernameLength : stryMutAct_9fa48("48669") ? false : stryMutAct_9fa48("48668") ? true : (stryCov_9fa48("48668", "48669", "48670", "48671"), data.username.length < meta.config.minimumUsernameLength)) {
          if (stryMutAct_9fa48("48672")) {
            {}
          } else {
            stryCov_9fa48("48672");
            throw new Error(stryMutAct_9fa48("48673") ? "" : (stryCov_9fa48("48673"), '[[error:username-too-short]]'));
          }
        }
        if (stryMutAct_9fa48("48677") ? data.username.length <= meta.config.maximumUsernameLength : stryMutAct_9fa48("48676") ? data.username.length >= meta.config.maximumUsernameLength : stryMutAct_9fa48("48675") ? false : stryMutAct_9fa48("48674") ? true : (stryCov_9fa48("48674", "48675", "48676", "48677"), data.username.length > meta.config.maximumUsernameLength)) {
          if (stryMutAct_9fa48("48678")) {
            {}
          } else {
            stryCov_9fa48("48678");
            throw new Error(stryMutAct_9fa48("48679") ? "" : (stryCov_9fa48("48679"), '[[error:username-too-long]]'));
          }
        }
        const userslug = slugify(data.username);
        if (stryMutAct_9fa48("48682") ? !utils.isUserNameValid(data.username) && !userslug : stryMutAct_9fa48("48681") ? false : stryMutAct_9fa48("48680") ? true : (stryCov_9fa48("48680", "48681", "48682"), (stryMutAct_9fa48("48683") ? utils.isUserNameValid(data.username) : (stryCov_9fa48("48683"), !utils.isUserNameValid(data.username))) || (stryMutAct_9fa48("48684") ? userslug : (stryCov_9fa48("48684"), !userslug)))) {
          if (stryMutAct_9fa48("48685")) {
            {}
          } else {
            stryCov_9fa48("48685");
            throw new Error(stryMutAct_9fa48("48686") ? "" : (stryCov_9fa48("48686"), '[[error:invalid-username]]'));
          }
        }
        if (stryMutAct_9fa48("48689") ? uid || userslug === userData.userslug : stryMutAct_9fa48("48688") ? false : stryMutAct_9fa48("48687") ? true : (stryCov_9fa48("48687", "48688", "48689"), uid && (stryMutAct_9fa48("48691") ? userslug !== userData.userslug : stryMutAct_9fa48("48690") ? true : (stryCov_9fa48("48690", "48691"), userslug === userData.userslug)))) {
          if (stryMutAct_9fa48("48692")) {
            {}
          } else {
            stryCov_9fa48("48692");
            return;
          }
        }
        const exists = await User.existsBySlug(userslug);
        if (stryMutAct_9fa48("48694") ? false : stryMutAct_9fa48("48693") ? true : (stryCov_9fa48("48693", "48694"), exists)) {
          if (stryMutAct_9fa48("48695")) {
            {}
          } else {
            stryCov_9fa48("48695");
            throw new Error(stryMutAct_9fa48("48696") ? "" : (stryCov_9fa48("48696"), '[[error:username-taken]]'));
          }
        }
        const {
          error
        } = await plugins.hooks.fire(stryMutAct_9fa48("48697") ? "" : (stryCov_9fa48("48697"), 'filter:username.check'), stryMutAct_9fa48("48698") ? {} : (stryCov_9fa48("48698"), {
          username: data.username,
          error: undefined
        }));
        if (stryMutAct_9fa48("48700") ? false : stryMutAct_9fa48("48699") ? true : (stryCov_9fa48("48699", "48700"), error)) {
          if (stryMutAct_9fa48("48701")) {
            {}
          } else {
            stryCov_9fa48("48701");
            throw error;
          }
        }
      }
    }
    User.checkUsername = stryMutAct_9fa48("48702") ? () => undefined : (stryCov_9fa48("48702"), async username => isUsernameAvailable(stryMutAct_9fa48("48703") ? {} : (stryCov_9fa48("48703"), {
      username
    })));
    async function isWebsiteValid(callerUid, data) {
      if (stryMutAct_9fa48("48704")) {
        {}
      } else {
        stryCov_9fa48("48704");
        if (stryMutAct_9fa48("48707") ? false : stryMutAct_9fa48("48706") ? true : stryMutAct_9fa48("48705") ? data.website : (stryCov_9fa48("48705", "48706", "48707"), !data.website)) {
          if (stryMutAct_9fa48("48708")) {
            {}
          } else {
            stryCov_9fa48("48708");
            return;
          }
        }
        if (stryMutAct_9fa48("48712") ? data.website.length <= 255 : stryMutAct_9fa48("48711") ? data.website.length >= 255 : stryMutAct_9fa48("48710") ? false : stryMutAct_9fa48("48709") ? true : (stryCov_9fa48("48709", "48710", "48711", "48712"), data.website.length > 255)) {
          if (stryMutAct_9fa48("48713")) {
            {}
          } else {
            stryCov_9fa48("48713");
            throw new Error(stryMutAct_9fa48("48714") ? "" : (stryCov_9fa48("48714"), '[[error:invalid-website]]'));
          }
        }
        await User.checkMinReputation(callerUid, data.uid, stryMutAct_9fa48("48715") ? "" : (stryCov_9fa48("48715"), 'min:rep:website'));
      }
    }
    async function isAboutMeValid(callerUid, data) {
      if (stryMutAct_9fa48("48716")) {
        {}
      } else {
        stryCov_9fa48("48716");
        if (stryMutAct_9fa48("48719") ? false : stryMutAct_9fa48("48718") ? true : stryMutAct_9fa48("48717") ? data.aboutme : (stryCov_9fa48("48717", "48718", "48719"), !data.aboutme)) {
          if (stryMutAct_9fa48("48720")) {
            {}
          } else {
            stryCov_9fa48("48720");
            return;
          }
        }
        if (stryMutAct_9fa48("48723") ? data.aboutme !== undefined || data.aboutme.length > meta.config.maximumAboutMeLength : stryMutAct_9fa48("48722") ? false : stryMutAct_9fa48("48721") ? true : (stryCov_9fa48("48721", "48722", "48723"), (stryMutAct_9fa48("48725") ? data.aboutme === undefined : stryMutAct_9fa48("48724") ? true : (stryCov_9fa48("48724", "48725"), data.aboutme !== undefined)) && (stryMutAct_9fa48("48728") ? data.aboutme.length <= meta.config.maximumAboutMeLength : stryMutAct_9fa48("48727") ? data.aboutme.length >= meta.config.maximumAboutMeLength : stryMutAct_9fa48("48726") ? true : (stryCov_9fa48("48726", "48727", "48728"), data.aboutme.length > meta.config.maximumAboutMeLength)))) {
          if (stryMutAct_9fa48("48729")) {
            {}
          } else {
            stryCov_9fa48("48729");
            throw new Error(stryMutAct_9fa48("48730") ? `` : (stryCov_9fa48("48730"), `[[error:about-me-too-long, ${meta.config.maximumAboutMeLength}]]`));
          }
        }
        await User.checkMinReputation(callerUid, data.uid, stryMutAct_9fa48("48731") ? "" : (stryCov_9fa48("48731"), 'min:rep:aboutme'));
      }
    }
    async function isSignatureValid(callerUid, data) {
      if (stryMutAct_9fa48("48732")) {
        {}
      } else {
        stryCov_9fa48("48732");
        if (stryMutAct_9fa48("48735") ? false : stryMutAct_9fa48("48734") ? true : stryMutAct_9fa48("48733") ? data.signature : (stryCov_9fa48("48733", "48734", "48735"), !data.signature)) {
          if (stryMutAct_9fa48("48736")) {
            {}
          } else {
            stryCov_9fa48("48736");
            return;
          }
        }
        const signature = data.signature.replace(/\r\n/g, stryMutAct_9fa48("48737") ? "" : (stryCov_9fa48("48737"), '\n'));
        if (stryMutAct_9fa48("48741") ? signature.length <= meta.config.maximumSignatureLength : stryMutAct_9fa48("48740") ? signature.length >= meta.config.maximumSignatureLength : stryMutAct_9fa48("48739") ? false : stryMutAct_9fa48("48738") ? true : (stryCov_9fa48("48738", "48739", "48740", "48741"), signature.length > meta.config.maximumSignatureLength)) {
          if (stryMutAct_9fa48("48742")) {
            {}
          } else {
            stryCov_9fa48("48742");
            throw new Error(stryMutAct_9fa48("48743") ? `` : (stryCov_9fa48("48743"), `[[error:signature-too-long, ${meta.config.maximumSignatureLength}]]`));
          }
        }
        await User.checkMinReputation(callerUid, data.uid, stryMutAct_9fa48("48744") ? "" : (stryCov_9fa48("48744"), 'min:rep:signature'));
      }
    }
    function isFullnameValid(data) {
      if (stryMutAct_9fa48("48745")) {
        {}
      } else {
        stryCov_9fa48("48745");
        if (stryMutAct_9fa48("48748") ? data.fullname || validator.isURL(data.fullname) || data.fullname.length > 255 : stryMutAct_9fa48("48747") ? false : stryMutAct_9fa48("48746") ? true : (stryCov_9fa48("48746", "48747", "48748"), data.fullname && (stryMutAct_9fa48("48750") ? validator.isURL(data.fullname) && data.fullname.length > 255 : stryMutAct_9fa48("48749") ? true : (stryCov_9fa48("48749", "48750"), validator.isURL(data.fullname) || (stryMutAct_9fa48("48753") ? data.fullname.length <= 255 : stryMutAct_9fa48("48752") ? data.fullname.length >= 255 : stryMutAct_9fa48("48751") ? false : (stryCov_9fa48("48751", "48752", "48753"), data.fullname.length > 255)))))) {
          if (stryMutAct_9fa48("48754")) {
            {}
          } else {
            stryCov_9fa48("48754");
            throw new Error(stryMutAct_9fa48("48755") ? "" : (stryCov_9fa48("48755"), '[[error:invalid-fullname]]'));
          }
        }
      }
    }
    function isLocationValid(data) {
      if (stryMutAct_9fa48("48756")) {
        {}
      } else {
        stryCov_9fa48("48756");
        if (stryMutAct_9fa48("48759") ? data.location || validator.isURL(data.location) || data.location.length > 255 : stryMutAct_9fa48("48758") ? false : stryMutAct_9fa48("48757") ? true : (stryCov_9fa48("48757", "48758", "48759"), data.location && (stryMutAct_9fa48("48761") ? validator.isURL(data.location) && data.location.length > 255 : stryMutAct_9fa48("48760") ? true : (stryCov_9fa48("48760", "48761"), validator.isURL(data.location) || (stryMutAct_9fa48("48764") ? data.location.length <= 255 : stryMutAct_9fa48("48763") ? data.location.length >= 255 : stryMutAct_9fa48("48762") ? false : (stryCov_9fa48("48762", "48763", "48764"), data.location.length > 255)))))) {
          if (stryMutAct_9fa48("48765")) {
            {}
          } else {
            stryCov_9fa48("48765");
            throw new Error(stryMutAct_9fa48("48766") ? "" : (stryCov_9fa48("48766"), '[[error:invalid-location]]'));
          }
        }
      }
    }
    function isBirthdayValid(data) {
      if (stryMutAct_9fa48("48767")) {
        {}
      } else {
        stryCov_9fa48("48767");
        if (stryMutAct_9fa48("48770") ? false : stryMutAct_9fa48("48769") ? true : stryMutAct_9fa48("48768") ? data.birthday : (stryCov_9fa48("48768", "48769", "48770"), !data.birthday)) {
          if (stryMutAct_9fa48("48771")) {
            {}
          } else {
            stryCov_9fa48("48771");
            return;
          }
        }
        const result = new Date(data.birthday);
        if (stryMutAct_9fa48("48774") ? result || result.toString() === 'Invalid Date' : stryMutAct_9fa48("48773") ? false : stryMutAct_9fa48("48772") ? true : (stryCov_9fa48("48772", "48773", "48774"), result && (stryMutAct_9fa48("48776") ? result.toString() !== 'Invalid Date' : stryMutAct_9fa48("48775") ? true : (stryCov_9fa48("48775", "48776"), result.toString() === (stryMutAct_9fa48("48777") ? "" : (stryCov_9fa48("48777"), 'Invalid Date')))))) {
          if (stryMutAct_9fa48("48778")) {
            {}
          } else {
            stryCov_9fa48("48778");
            throw new Error(stryMutAct_9fa48("48779") ? "" : (stryCov_9fa48("48779"), '[[error:invalid-birthday]]'));
          }
        }
      }
    }
    function isGroupTitleValid(data) {
      if (stryMutAct_9fa48("48780")) {
        {}
      } else {
        stryCov_9fa48("48780");
        function checkTitle(title) {
          if (stryMutAct_9fa48("48781")) {
            {}
          } else {
            stryCov_9fa48("48781");
            if (stryMutAct_9fa48("48784") ? title === 'registered-users' && groups.isPrivilegeGroup(title) : stryMutAct_9fa48("48783") ? false : stryMutAct_9fa48("48782") ? true : (stryCov_9fa48("48782", "48783", "48784"), (stryMutAct_9fa48("48786") ? title !== 'registered-users' : stryMutAct_9fa48("48785") ? false : (stryCov_9fa48("48785", "48786"), title === (stryMutAct_9fa48("48787") ? "" : (stryCov_9fa48("48787"), 'registered-users')))) || groups.isPrivilegeGroup(title))) {
              if (stryMutAct_9fa48("48788")) {
                {}
              } else {
                stryCov_9fa48("48788");
                throw new Error(stryMutAct_9fa48("48789") ? "" : (stryCov_9fa48("48789"), '[[error:invalid-group-title]]'));
              }
            }
          }
        }
        if (stryMutAct_9fa48("48792") ? false : stryMutAct_9fa48("48791") ? true : stryMutAct_9fa48("48790") ? data.groupTitle : (stryCov_9fa48("48790", "48791", "48792"), !data.groupTitle)) {
          if (stryMutAct_9fa48("48793")) {
            {}
          } else {
            stryCov_9fa48("48793");
            return;
          }
        }
        let groupTitles = stryMutAct_9fa48("48794") ? ["Stryker was here"] : (stryCov_9fa48("48794"), []);
        if (stryMutAct_9fa48("48796") ? false : stryMutAct_9fa48("48795") ? true : (stryCov_9fa48("48795", "48796"), validator.isJSON(data.groupTitle))) {
          if (stryMutAct_9fa48("48797")) {
            {}
          } else {
            stryCov_9fa48("48797");
            groupTitles = JSON.parse(data.groupTitle);
            if (stryMutAct_9fa48("48800") ? false : stryMutAct_9fa48("48799") ? true : stryMutAct_9fa48("48798") ? Array.isArray(groupTitles) : (stryCov_9fa48("48798", "48799", "48800"), !Array.isArray(groupTitles))) {
              if (stryMutAct_9fa48("48801")) {
                {}
              } else {
                stryCov_9fa48("48801");
                throw new Error(stryMutAct_9fa48("48802") ? "" : (stryCov_9fa48("48802"), '[[error:invalid-group-title]]'));
              }
            }
            groupTitles.forEach(stryMutAct_9fa48("48803") ? () => undefined : (stryCov_9fa48("48803"), title => checkTitle(title)));
          }
        } else {
          if (stryMutAct_9fa48("48804")) {
            {}
          } else {
            stryCov_9fa48("48804");
            groupTitles = stryMutAct_9fa48("48805") ? [] : (stryCov_9fa48("48805"), [data.groupTitle]);
            checkTitle(data.groupTitle);
          }
        }
        if (stryMutAct_9fa48("48808") ? !meta.config.allowMultipleBadges || groupTitles.length > 1 : stryMutAct_9fa48("48807") ? false : stryMutAct_9fa48("48806") ? true : (stryCov_9fa48("48806", "48807", "48808"), (stryMutAct_9fa48("48809") ? meta.config.allowMultipleBadges : (stryCov_9fa48("48809"), !meta.config.allowMultipleBadges)) && (stryMutAct_9fa48("48812") ? groupTitles.length <= 1 : stryMutAct_9fa48("48811") ? groupTitles.length >= 1 : stryMutAct_9fa48("48810") ? true : (stryCov_9fa48("48810", "48811", "48812"), groupTitles.length > 1)))) {
          if (stryMutAct_9fa48("48813")) {
            {}
          } else {
            stryCov_9fa48("48813");
            data.groupTitle = JSON.stringify(groupTitles[0]);
          }
        }
      }
    }
    User.checkMinReputation = async function (callerUid, uid, setting) {
      if (stryMutAct_9fa48("48814")) {
        {}
      } else {
        stryCov_9fa48("48814");
        const isSelf = stryMutAct_9fa48("48817") ? parseInt(callerUid, 10) !== parseInt(uid, 10) : stryMutAct_9fa48("48816") ? false : stryMutAct_9fa48("48815") ? true : (stryCov_9fa48("48815", "48816", "48817"), parseInt(callerUid, 10) === parseInt(uid, 10));
        if (stryMutAct_9fa48("48820") ? !isSelf && meta.config['reputation:disabled'] : stryMutAct_9fa48("48819") ? false : stryMutAct_9fa48("48818") ? true : (stryCov_9fa48("48818", "48819", "48820"), (stryMutAct_9fa48("48821") ? isSelf : (stryCov_9fa48("48821"), !isSelf)) || meta.config[stryMutAct_9fa48("48822") ? "" : (stryCov_9fa48("48822"), 'reputation:disabled')])) {
          if (stryMutAct_9fa48("48823")) {
            {}
          } else {
            stryCov_9fa48("48823");
            return;
          }
        }
        const reputation = await User.getUserField(uid, stryMutAct_9fa48("48824") ? "" : (stryCov_9fa48("48824"), 'reputation'));
        if (stryMutAct_9fa48("48828") ? reputation >= meta.config[setting] : stryMutAct_9fa48("48827") ? reputation <= meta.config[setting] : stryMutAct_9fa48("48826") ? false : stryMutAct_9fa48("48825") ? true : (stryCov_9fa48("48825", "48826", "48827", "48828"), reputation < meta.config[setting])) {
          if (stryMutAct_9fa48("48829")) {
            {}
          } else {
            stryCov_9fa48("48829");
            throw new Error(stryMutAct_9fa48("48830") ? `` : (stryCov_9fa48("48830"), `[[error:not-enough-reputation-${setting.replace(/:/g, stryMutAct_9fa48("48831") ? "" : (stryCov_9fa48("48831"), '-'))}, ${meta.config[setting]}]]`));
          }
        }
      }
    };
    async function updateEmail(uid, newEmail) {
      if (stryMutAct_9fa48("48832")) {
        {}
      } else {
        stryCov_9fa48("48832");
        let oldEmail = await User.getUserField(uid, stryMutAct_9fa48("48833") ? "" : (stryCov_9fa48("48833"), 'email'));
        oldEmail = stryMutAct_9fa48("48836") ? oldEmail && '' : stryMutAct_9fa48("48835") ? false : stryMutAct_9fa48("48834") ? true : (stryCov_9fa48("48834", "48835", "48836"), oldEmail || (stryMutAct_9fa48("48837") ? "Stryker was here!" : (stryCov_9fa48("48837"), '')));
        if (stryMutAct_9fa48("48840") ? oldEmail !== newEmail : stryMutAct_9fa48("48839") ? false : stryMutAct_9fa48("48838") ? true : (stryCov_9fa48("48838", "48839", "48840"), oldEmail === newEmail)) {
          if (stryMutAct_9fa48("48841")) {
            {}
          } else {
            stryCov_9fa48("48841");
            return;
          }
        }

        // 👉 Looking for email change logic? src/user/email.js (UserEmail.confirmByUid)
        if (stryMutAct_9fa48("48843") ? false : stryMutAct_9fa48("48842") ? true : (stryCov_9fa48("48842", "48843"), newEmail)) {
          if (stryMutAct_9fa48("48844")) {
            {}
          } else {
            stryCov_9fa48("48844");
            await User.email.sendValidationEmail(uid, stryMutAct_9fa48("48845") ? {} : (stryCov_9fa48("48845"), {
              email: newEmail,
              force: 1
            })).catch(stryMutAct_9fa48("48846") ? () => undefined : (stryCov_9fa48("48846"), err => winston.error(stryMutAct_9fa48("48847") ? `` : (stryCov_9fa48("48847"), `[user.create] Validation email failed to send\n[emailer.send] ${err.stack}`))));
          }
        }
      }
    }
    async function updateUsername(uid, newUsername) {
      if (stryMutAct_9fa48("48848")) {
        {}
      } else {
        stryCov_9fa48("48848");
        if (stryMutAct_9fa48("48851") ? false : stryMutAct_9fa48("48850") ? true : stryMutAct_9fa48("48849") ? newUsername : (stryCov_9fa48("48849", "48850", "48851"), !newUsername)) {
          if (stryMutAct_9fa48("48852")) {
            {}
          } else {
            stryCov_9fa48("48852");
            return;
          }
        }
        const userData = await User.getUserFields(uid, stryMutAct_9fa48("48853") ? [] : (stryCov_9fa48("48853"), [stryMutAct_9fa48("48854") ? "" : (stryCov_9fa48("48854"), 'username'), stryMutAct_9fa48("48855") ? "" : (stryCov_9fa48("48855"), 'userslug')]));
        if (stryMutAct_9fa48("48858") ? userData.username !== newUsername : stryMutAct_9fa48("48857") ? false : stryMutAct_9fa48("48856") ? true : (stryCov_9fa48("48856", "48857", "48858"), userData.username === newUsername)) {
          if (stryMutAct_9fa48("48859")) {
            {}
          } else {
            stryCov_9fa48("48859");
            return;
          }
        }
        const newUserslug = slugify(newUsername);
        const now = Date.now();
        await Promise.all(stryMutAct_9fa48("48860") ? [] : (stryCov_9fa48("48860"), [updateUidMapping(stryMutAct_9fa48("48861") ? "" : (stryCov_9fa48("48861"), 'username'), uid, newUsername, userData.username), updateUidMapping(stryMutAct_9fa48("48862") ? "" : (stryCov_9fa48("48862"), 'userslug'), uid, newUserslug, userData.userslug), db.sortedSetAdd(stryMutAct_9fa48("48863") ? `` : (stryCov_9fa48("48863"), `user:${uid}:usernames`), now, stryMutAct_9fa48("48864") ? `` : (stryCov_9fa48("48864"), `${newUsername}:${now}`))]));
        await db.sortedSetRemove(stryMutAct_9fa48("48865") ? "" : (stryCov_9fa48("48865"), 'username:sorted'), stryMutAct_9fa48("48866") ? `` : (stryCov_9fa48("48866"), `${stryMutAct_9fa48("48867") ? userData.username.toUpperCase() : (stryCov_9fa48("48867"), userData.username.toLowerCase())}:${uid}`));
        await db.sortedSetAdd(stryMutAct_9fa48("48868") ? "" : (stryCov_9fa48("48868"), 'username:sorted'), 0, stryMutAct_9fa48("48869") ? `` : (stryCov_9fa48("48869"), `${stryMutAct_9fa48("48870") ? newUsername.toUpperCase() : (stryCov_9fa48("48870"), newUsername.toLowerCase())}:${uid}`));
      }
    }
    async function updateUidMapping(field, uid, value, oldValue) {
      if (stryMutAct_9fa48("48871")) {
        {}
      } else {
        stryCov_9fa48("48871");
        if (stryMutAct_9fa48("48874") ? value !== oldValue : stryMutAct_9fa48("48873") ? false : stryMutAct_9fa48("48872") ? true : (stryCov_9fa48("48872", "48873", "48874"), value === oldValue)) {
          if (stryMutAct_9fa48("48875")) {
            {}
          } else {
            stryCov_9fa48("48875");
            return;
          }
        }
        await db.sortedSetRemove(stryMutAct_9fa48("48876") ? `` : (stryCov_9fa48("48876"), `${field}:uid`), oldValue);
        await User.setUserField(uid, field, value);
        if (stryMutAct_9fa48("48878") ? false : stryMutAct_9fa48("48877") ? true : (stryCov_9fa48("48877", "48878"), value)) {
          if (stryMutAct_9fa48("48879")) {
            {}
          } else {
            stryCov_9fa48("48879");
            await db.sortedSetAdd(stryMutAct_9fa48("48880") ? `` : (stryCov_9fa48("48880"), `${field}:uid`), uid, value);
          }
        }
      }
    }
    async function updateFullname(uid, newFullname) {
      if (stryMutAct_9fa48("48881")) {
        {}
      } else {
        stryCov_9fa48("48881");
        const fullname = await User.getUserField(uid, stryMutAct_9fa48("48882") ? "" : (stryCov_9fa48("48882"), 'fullname'));
        await updateUidMapping(stryMutAct_9fa48("48883") ? "" : (stryCov_9fa48("48883"), 'fullname'), uid, newFullname, fullname);
        if (stryMutAct_9fa48("48886") ? newFullname === fullname : stryMutAct_9fa48("48885") ? false : stryMutAct_9fa48("48884") ? true : (stryCov_9fa48("48884", "48885", "48886"), newFullname !== fullname)) {
          if (stryMutAct_9fa48("48887")) {
            {}
          } else {
            stryCov_9fa48("48887");
            if (stryMutAct_9fa48("48889") ? false : stryMutAct_9fa48("48888") ? true : (stryCov_9fa48("48888", "48889"), fullname)) {
              if (stryMutAct_9fa48("48890")) {
                {}
              } else {
                stryCov_9fa48("48890");
                await db.sortedSetRemove(stryMutAct_9fa48("48891") ? "" : (stryCov_9fa48("48891"), 'fullname:sorted'), stryMutAct_9fa48("48892") ? `` : (stryCov_9fa48("48892"), `${stryMutAct_9fa48("48893") ? fullname.toUpperCase() : (stryCov_9fa48("48893"), fullname.toLowerCase())}:${uid}`));
              }
            }
            if (stryMutAct_9fa48("48895") ? false : stryMutAct_9fa48("48894") ? true : (stryCov_9fa48("48894", "48895"), newFullname)) {
              if (stryMutAct_9fa48("48896")) {
                {}
              } else {
                stryCov_9fa48("48896");
                await db.sortedSetAdd(stryMutAct_9fa48("48897") ? "" : (stryCov_9fa48("48897"), 'fullname:sorted'), 0, stryMutAct_9fa48("48898") ? `` : (stryCov_9fa48("48898"), `${stryMutAct_9fa48("48899") ? newFullname.toUpperCase() : (stryCov_9fa48("48899"), newFullname.toLowerCase())}:${uid}`));
              }
            }
          }
        }
      }
    }
    User.changePassword = async function (uid, data) {
      if (stryMutAct_9fa48("48900")) {
        {}
      } else {
        stryCov_9fa48("48900");
        if (stryMutAct_9fa48("48903") ? (uid <= 0 || !data) && !data.uid : stryMutAct_9fa48("48902") ? false : stryMutAct_9fa48("48901") ? true : (stryCov_9fa48("48901", "48902", "48903"), (stryMutAct_9fa48("48905") ? uid <= 0 && !data : stryMutAct_9fa48("48904") ? false : (stryCov_9fa48("48904", "48905"), (stryMutAct_9fa48("48908") ? uid > 0 : stryMutAct_9fa48("48907") ? uid < 0 : stryMutAct_9fa48("48906") ? false : (stryCov_9fa48("48906", "48907", "48908"), uid <= 0)) || (stryMutAct_9fa48("48909") ? data : (stryCov_9fa48("48909"), !data)))) || (stryMutAct_9fa48("48910") ? data.uid : (stryCov_9fa48("48910"), !data.uid)))) {
          if (stryMutAct_9fa48("48911")) {
            {}
          } else {
            stryCov_9fa48("48911");
            throw new Error(stryMutAct_9fa48("48912") ? "" : (stryCov_9fa48("48912"), '[[error:invalid-uid]]'));
          }
        }
        User.isPasswordValid(data.newPassword);
        const [isAdmin, hasPassword] = await Promise.all(stryMutAct_9fa48("48913") ? [] : (stryCov_9fa48("48913"), [User.isAdministrator(uid), User.hasPassword(uid)]));
        if (stryMutAct_9fa48("48916") ? meta.config['password:disableEdit'] || !isAdmin : stryMutAct_9fa48("48915") ? false : stryMutAct_9fa48("48914") ? true : (stryCov_9fa48("48914", "48915", "48916"), meta.config[stryMutAct_9fa48("48917") ? "" : (stryCov_9fa48("48917"), 'password:disableEdit')] && (stryMutAct_9fa48("48918") ? isAdmin : (stryCov_9fa48("48918"), !isAdmin)))) {
          if (stryMutAct_9fa48("48919")) {
            {}
          } else {
            stryCov_9fa48("48919");
            throw new Error(stryMutAct_9fa48("48920") ? "" : (stryCov_9fa48("48920"), '[[error:no-privileges]]'));
          }
        }
        const isSelf = stryMutAct_9fa48("48923") ? parseInt(uid, 10) !== parseInt(data.uid, 10) : stryMutAct_9fa48("48922") ? false : stryMutAct_9fa48("48921") ? true : (stryCov_9fa48("48921", "48922", "48923"), parseInt(uid, 10) === parseInt(data.uid, 10));
        if (stryMutAct_9fa48("48926") ? !isAdmin || !isSelf : stryMutAct_9fa48("48925") ? false : stryMutAct_9fa48("48924") ? true : (stryCov_9fa48("48924", "48925", "48926"), (stryMutAct_9fa48("48927") ? isAdmin : (stryCov_9fa48("48927"), !isAdmin)) && (stryMutAct_9fa48("48928") ? isSelf : (stryCov_9fa48("48928"), !isSelf)))) {
          if (stryMutAct_9fa48("48929")) {
            {}
          } else {
            stryCov_9fa48("48929");
            throw new Error(stryMutAct_9fa48("48930") ? "" : (stryCov_9fa48("48930"), '[[user:change_password_error_privileges]]'));
          }
        }
        if (stryMutAct_9fa48("48933") ? isSelf || hasPassword : stryMutAct_9fa48("48932") ? false : stryMutAct_9fa48("48931") ? true : (stryCov_9fa48("48931", "48932", "48933"), isSelf && hasPassword)) {
          if (stryMutAct_9fa48("48934")) {
            {}
          } else {
            stryCov_9fa48("48934");
            const correct = await User.isPasswordCorrect(data.uid, data.currentPassword, data.ip);
            if (stryMutAct_9fa48("48937") ? false : stryMutAct_9fa48("48936") ? true : stryMutAct_9fa48("48935") ? correct : (stryCov_9fa48("48935", "48936", "48937"), !correct)) {
              if (stryMutAct_9fa48("48938")) {
                {}
              } else {
                stryCov_9fa48("48938");
                throw new Error(stryMutAct_9fa48("48939") ? "" : (stryCov_9fa48("48939"), '[[user:change_password_error_wrong_current]]'));
              }
            }
          }
        }
        const hashedPassword = await User.hashPassword(data.newPassword);
        await Promise.all(stryMutAct_9fa48("48940") ? [] : (stryCov_9fa48("48940"), [User.setUserFields(data.uid, stryMutAct_9fa48("48941") ? {} : (stryCov_9fa48("48941"), {
          password: hashedPassword,
          'password:shaWrapped': 1,
          rss_token: utils.generateUUID()
        })), User.reset.cleanByUid(data.uid), User.reset.updateExpiry(data.uid), User.auth.revokeAllSessions(data.uid), User.email.expireValidation(data.uid)]));
        plugins.hooks.fire(stryMutAct_9fa48("48942") ? "" : (stryCov_9fa48("48942"), 'action:password.change'), stryMutAct_9fa48("48943") ? {} : (stryCov_9fa48("48943"), {
          uid: uid,
          targetUid: data.uid
        }));
      }
    };
  }
};