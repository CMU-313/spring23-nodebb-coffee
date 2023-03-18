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
const user = require('../../user');
const meta = require('../../meta');
const helpers = require('../helpers');
const groups = require('../../groups');
const accountHelpers = require('./helpers');
const privileges = require('../../privileges');
const file = require('../../file');
const editController = module.exports;
editController.get = async function (req, res, next) {
  if (stryMutAct_9fa48("5274")) {
    {}
  } else {
    stryCov_9fa48("5274");
    const [userData, canUseSignature] = await Promise.all(stryMutAct_9fa48("5275") ? [] : (stryCov_9fa48("5275"), [accountHelpers.getUserDataByUserSlug(req.params.userslug, req.uid, req.query), privileges.global.can(stryMutAct_9fa48("5276") ? "" : (stryCov_9fa48("5276"), 'signature'), req.uid)]));
    if (stryMutAct_9fa48("5279") ? false : stryMutAct_9fa48("5278") ? true : stryMutAct_9fa48("5277") ? userData : (stryCov_9fa48("5277", "5278", "5279"), !userData)) {
      if (stryMutAct_9fa48("5280")) {
        {}
      } else {
        stryCov_9fa48("5280");
        return next();
      }
    }
    userData.maximumSignatureLength = meta.config.maximumSignatureLength;
    userData.maximumAboutMeLength = meta.config.maximumAboutMeLength;
    userData.maximumProfileImageSize = meta.config.maximumProfileImageSize;
    userData.allowProfilePicture = stryMutAct_9fa48("5283") ? (!userData.isSelf || !!meta.config['reputation:disabled']) && userData.reputation >= meta.config['min:rep:profile-picture'] : stryMutAct_9fa48("5282") ? false : stryMutAct_9fa48("5281") ? true : (stryCov_9fa48("5281", "5282", "5283"), (stryMutAct_9fa48("5285") ? !userData.isSelf && !!meta.config['reputation:disabled'] : stryMutAct_9fa48("5284") ? false : (stryCov_9fa48("5284", "5285"), (stryMutAct_9fa48("5286") ? userData.isSelf : (stryCov_9fa48("5286"), !userData.isSelf)) || (stryMutAct_9fa48("5287") ? !meta.config['reputation:disabled'] : (stryCov_9fa48("5287"), !(stryMutAct_9fa48("5288") ? meta.config['reputation:disabled'] : (stryCov_9fa48("5288"), !meta.config[stryMutAct_9fa48("5289") ? "" : (stryCov_9fa48("5289"), 'reputation:disabled')])))))) || (stryMutAct_9fa48("5292") ? userData.reputation < meta.config['min:rep:profile-picture'] : stryMutAct_9fa48("5291") ? userData.reputation > meta.config['min:rep:profile-picture'] : stryMutAct_9fa48("5290") ? false : (stryCov_9fa48("5290", "5291", "5292"), userData.reputation >= meta.config[stryMutAct_9fa48("5293") ? "" : (stryCov_9fa48("5293"), 'min:rep:profile-picture')])));
    userData.allowCoverPicture = stryMutAct_9fa48("5296") ? (!userData.isSelf || !!meta.config['reputation:disabled']) && userData.reputation >= meta.config['min:rep:cover-picture'] : stryMutAct_9fa48("5295") ? false : stryMutAct_9fa48("5294") ? true : (stryCov_9fa48("5294", "5295", "5296"), (stryMutAct_9fa48("5298") ? !userData.isSelf && !!meta.config['reputation:disabled'] : stryMutAct_9fa48("5297") ? false : (stryCov_9fa48("5297", "5298"), (stryMutAct_9fa48("5299") ? userData.isSelf : (stryCov_9fa48("5299"), !userData.isSelf)) || (stryMutAct_9fa48("5300") ? !meta.config['reputation:disabled'] : (stryCov_9fa48("5300"), !(stryMutAct_9fa48("5301") ? meta.config['reputation:disabled'] : (stryCov_9fa48("5301"), !meta.config[stryMutAct_9fa48("5302") ? "" : (stryCov_9fa48("5302"), 'reputation:disabled')])))))) || (stryMutAct_9fa48("5305") ? userData.reputation < meta.config['min:rep:cover-picture'] : stryMutAct_9fa48("5304") ? userData.reputation > meta.config['min:rep:cover-picture'] : stryMutAct_9fa48("5303") ? false : (stryCov_9fa48("5303", "5304", "5305"), userData.reputation >= meta.config[stryMutAct_9fa48("5306") ? "" : (stryCov_9fa48("5306"), 'min:rep:cover-picture')])));
    userData.allowProfileImageUploads = meta.config.allowProfileImageUploads;
    userData.allowedProfileImageExtensions = user.getAllowedProfileImageExtensions().map(stryMutAct_9fa48("5307") ? () => undefined : (stryCov_9fa48("5307"), ext => stryMutAct_9fa48("5308") ? `` : (stryCov_9fa48("5308"), `.${ext}`))).join(stryMutAct_9fa48("5309") ? "" : (stryCov_9fa48("5309"), ', '));
    userData.allowMultipleBadges = stryMutAct_9fa48("5312") ? meta.config.allowMultipleBadges !== 1 : stryMutAct_9fa48("5311") ? false : stryMutAct_9fa48("5310") ? true : (stryCov_9fa48("5310", "5311", "5312"), meta.config.allowMultipleBadges === 1);
    userData.allowAccountDelete = stryMutAct_9fa48("5315") ? meta.config.allowAccountDelete !== 1 : stryMutAct_9fa48("5314") ? false : stryMutAct_9fa48("5313") ? true : (stryCov_9fa48("5313", "5314", "5315"), meta.config.allowAccountDelete === 1);
    userData.allowWebsite = stryMutAct_9fa48("5318") ? (!userData.isSelf || !!meta.config['reputation:disabled']) && userData.reputation >= meta.config['min:rep:website'] : stryMutAct_9fa48("5317") ? false : stryMutAct_9fa48("5316") ? true : (stryCov_9fa48("5316", "5317", "5318"), (stryMutAct_9fa48("5320") ? !userData.isSelf && !!meta.config['reputation:disabled'] : stryMutAct_9fa48("5319") ? false : (stryCov_9fa48("5319", "5320"), (stryMutAct_9fa48("5321") ? userData.isSelf : (stryCov_9fa48("5321"), !userData.isSelf)) || (stryMutAct_9fa48("5322") ? !meta.config['reputation:disabled'] : (stryCov_9fa48("5322"), !(stryMutAct_9fa48("5323") ? meta.config['reputation:disabled'] : (stryCov_9fa48("5323"), !meta.config[stryMutAct_9fa48("5324") ? "" : (stryCov_9fa48("5324"), 'reputation:disabled')])))))) || (stryMutAct_9fa48("5327") ? userData.reputation < meta.config['min:rep:website'] : stryMutAct_9fa48("5326") ? userData.reputation > meta.config['min:rep:website'] : stryMutAct_9fa48("5325") ? false : (stryCov_9fa48("5325", "5326", "5327"), userData.reputation >= meta.config[stryMutAct_9fa48("5328") ? "" : (stryCov_9fa48("5328"), 'min:rep:website')])));
    userData.allowAboutMe = stryMutAct_9fa48("5331") ? (!userData.isSelf || !!meta.config['reputation:disabled']) && userData.reputation >= meta.config['min:rep:aboutme'] : stryMutAct_9fa48("5330") ? false : stryMutAct_9fa48("5329") ? true : (stryCov_9fa48("5329", "5330", "5331"), (stryMutAct_9fa48("5333") ? !userData.isSelf && !!meta.config['reputation:disabled'] : stryMutAct_9fa48("5332") ? false : (stryCov_9fa48("5332", "5333"), (stryMutAct_9fa48("5334") ? userData.isSelf : (stryCov_9fa48("5334"), !userData.isSelf)) || (stryMutAct_9fa48("5335") ? !meta.config['reputation:disabled'] : (stryCov_9fa48("5335"), !(stryMutAct_9fa48("5336") ? meta.config['reputation:disabled'] : (stryCov_9fa48("5336"), !meta.config[stryMutAct_9fa48("5337") ? "" : (stryCov_9fa48("5337"), 'reputation:disabled')])))))) || (stryMutAct_9fa48("5340") ? userData.reputation < meta.config['min:rep:aboutme'] : stryMutAct_9fa48("5339") ? userData.reputation > meta.config['min:rep:aboutme'] : stryMutAct_9fa48("5338") ? false : (stryCov_9fa48("5338", "5339", "5340"), userData.reputation >= meta.config[stryMutAct_9fa48("5341") ? "" : (stryCov_9fa48("5341"), 'min:rep:aboutme')])));
    userData.allowSignature = stryMutAct_9fa48("5344") ? canUseSignature || !userData.isSelf || !!meta.config['reputation:disabled'] || userData.reputation >= meta.config['min:rep:signature'] : stryMutAct_9fa48("5343") ? false : stryMutAct_9fa48("5342") ? true : (stryCov_9fa48("5342", "5343", "5344"), canUseSignature && (stryMutAct_9fa48("5346") ? (!userData.isSelf || !!meta.config['reputation:disabled']) && userData.reputation >= meta.config['min:rep:signature'] : stryMutAct_9fa48("5345") ? true : (stryCov_9fa48("5345", "5346"), (stryMutAct_9fa48("5348") ? !userData.isSelf && !!meta.config['reputation:disabled'] : stryMutAct_9fa48("5347") ? false : (stryCov_9fa48("5347", "5348"), (stryMutAct_9fa48("5349") ? userData.isSelf : (stryCov_9fa48("5349"), !userData.isSelf)) || (stryMutAct_9fa48("5350") ? !meta.config['reputation:disabled'] : (stryCov_9fa48("5350"), !(stryMutAct_9fa48("5351") ? meta.config['reputation:disabled'] : (stryCov_9fa48("5351"), !meta.config[stryMutAct_9fa48("5352") ? "" : (stryCov_9fa48("5352"), 'reputation:disabled')])))))) || (stryMutAct_9fa48("5355") ? userData.reputation < meta.config['min:rep:signature'] : stryMutAct_9fa48("5354") ? userData.reputation > meta.config['min:rep:signature'] : stryMutAct_9fa48("5353") ? false : (stryCov_9fa48("5353", "5354", "5355"), userData.reputation >= meta.config[stryMutAct_9fa48("5356") ? "" : (stryCov_9fa48("5356"), 'min:rep:signature')])))));
    userData.profileImageDimension = meta.config.profileImageDimension;
    userData.defaultAvatar = user.getDefaultAvatar();
    userData.groups = stryMutAct_9fa48("5357") ? userData.groups : (stryCov_9fa48("5357"), userData.groups.filter(stryMutAct_9fa48("5358") ? () => undefined : (stryCov_9fa48("5358"), g => stryMutAct_9fa48("5361") ? g && g.userTitleEnabled && !groups.isPrivilegeGroup(g.name) || g.name !== 'registered-users' : stryMutAct_9fa48("5360") ? false : stryMutAct_9fa48("5359") ? true : (stryCov_9fa48("5359", "5360", "5361"), (stryMutAct_9fa48("5363") ? g && g.userTitleEnabled || !groups.isPrivilegeGroup(g.name) : stryMutAct_9fa48("5362") ? true : (stryCov_9fa48("5362", "5363"), (stryMutAct_9fa48("5365") ? g || g.userTitleEnabled : stryMutAct_9fa48("5364") ? true : (stryCov_9fa48("5364", "5365"), g && g.userTitleEnabled)) && (stryMutAct_9fa48("5366") ? groups.isPrivilegeGroup(g.name) : (stryCov_9fa48("5366"), !groups.isPrivilegeGroup(g.name))))) && (stryMutAct_9fa48("5368") ? g.name === 'registered-users' : stryMutAct_9fa48("5367") ? true : (stryCov_9fa48("5367", "5368"), g.name !== (stryMutAct_9fa48("5369") ? "" : (stryCov_9fa48("5369"), 'registered-users'))))))));
    if (stryMutAct_9fa48("5372") ? false : stryMutAct_9fa48("5371") ? true : stryMutAct_9fa48("5370") ? userData.allowMultipleBadges : (stryCov_9fa48("5370", "5371", "5372"), !userData.allowMultipleBadges)) {
      if (stryMutAct_9fa48("5373")) {
        {}
      } else {
        stryCov_9fa48("5373");
        userData.groupTitle = userData.groupTitleArray[0];
      }
    }
    stryMutAct_9fa48("5374") ? userData.groups : (stryCov_9fa48("5374"), userData.groups.sort((a, b) => {
      if (stryMutAct_9fa48("5375")) {
        {}
      } else {
        stryCov_9fa48("5375");
        const i1 = userData.groupTitleArray.indexOf(a.name);
        const i2 = userData.groupTitleArray.indexOf(b.name);
        if (stryMutAct_9fa48("5378") ? i1 !== -1 : stryMutAct_9fa48("5377") ? false : stryMutAct_9fa48("5376") ? true : (stryCov_9fa48("5376", "5377", "5378"), i1 === (stryMutAct_9fa48("5379") ? +1 : (stryCov_9fa48("5379"), -1)))) {
          if (stryMutAct_9fa48("5380")) {
            {}
          } else {
            stryCov_9fa48("5380");
            return 1;
          }
        } else if (stryMutAct_9fa48("5383") ? i2 !== -1 : stryMutAct_9fa48("5382") ? false : stryMutAct_9fa48("5381") ? true : (stryCov_9fa48("5381", "5382", "5383"), i2 === (stryMutAct_9fa48("5384") ? +1 : (stryCov_9fa48("5384"), -1)))) {
          if (stryMutAct_9fa48("5385")) {
            {}
          } else {
            stryCov_9fa48("5385");
            return stryMutAct_9fa48("5386") ? +1 : (stryCov_9fa48("5386"), -1);
          }
        }
        return stryMutAct_9fa48("5387") ? i1 + i2 : (stryCov_9fa48("5387"), i1 - i2);
      }
    }));
    userData.groups.forEach(group => {
      if (stryMutAct_9fa48("5388")) {
        {}
      } else {
        stryCov_9fa48("5388");
        group.userTitle = stryMutAct_9fa48("5391") ? group.userTitle && group.displayName : stryMutAct_9fa48("5390") ? false : stryMutAct_9fa48("5389") ? true : (stryCov_9fa48("5389", "5390", "5391"), group.userTitle || group.displayName);
        group.selected = userData.groupTitleArray.includes(group.name);
      }
    });
    userData.groupSelectSize = Math.min(10, Math.max(5, stryMutAct_9fa48("5392") ? userData.groups.length - 1 : (stryCov_9fa48("5392"), userData.groups.length + 1)));
    userData.title = stryMutAct_9fa48("5393") ? `` : (stryCov_9fa48("5393"), `[[pages:account/edit, ${userData.username}]]`);
    userData.breadcrumbs = helpers.buildBreadcrumbs(stryMutAct_9fa48("5394") ? [] : (stryCov_9fa48("5394"), [stryMutAct_9fa48("5395") ? {} : (stryCov_9fa48("5395"), {
      text: userData.username,
      url: stryMutAct_9fa48("5396") ? `` : (stryCov_9fa48("5396"), `/user/${userData.userslug}`)
    }), stryMutAct_9fa48("5397") ? {} : (stryCov_9fa48("5397"), {
      text: stryMutAct_9fa48("5398") ? "" : (stryCov_9fa48("5398"), '[[user:edit]]')
    })]));
    userData.editButtons = stryMutAct_9fa48("5399") ? ["Stryker was here"] : (stryCov_9fa48("5399"), []);
    res.render(stryMutAct_9fa48("5400") ? "" : (stryCov_9fa48("5400"), 'account/edit'), userData);
  }
};
editController.password = async function (req, res, next) {
  if (stryMutAct_9fa48("5401")) {
    {}
  } else {
    stryCov_9fa48("5401");
    await renderRoute(stryMutAct_9fa48("5402") ? "" : (stryCov_9fa48("5402"), 'password'), req, res, next);
  }
};
editController.username = async function (req, res, next) {
  if (stryMutAct_9fa48("5403")) {
    {}
  } else {
    stryCov_9fa48("5403");
    await renderRoute(stryMutAct_9fa48("5404") ? "" : (stryCov_9fa48("5404"), 'username'), req, res, next);
  }
};
editController.email = async function (req, res, next) {
  if (stryMutAct_9fa48("5405")) {
    {}
  } else {
    stryCov_9fa48("5405");
    const targetUid = await user.getUidByUserslug(req.params.userslug);
    if (stryMutAct_9fa48("5408") ? false : stryMutAct_9fa48("5407") ? true : stryMutAct_9fa48("5406") ? targetUid : (stryCov_9fa48("5406", "5407", "5408"), !targetUid)) {
      if (stryMutAct_9fa48("5409")) {
        {}
      } else {
        stryCov_9fa48("5409");
        return next();
      }
    }
    const [isAdminOrGlobalMod, canEdit] = await Promise.all(stryMutAct_9fa48("5410") ? [] : (stryCov_9fa48("5410"), [user.isAdminOrGlobalMod(req.uid), privileges.users.canEdit(req.uid, targetUid)]));
    if (stryMutAct_9fa48("5413") ? !isAdminOrGlobalMod || !canEdit : stryMutAct_9fa48("5412") ? false : stryMutAct_9fa48("5411") ? true : (stryCov_9fa48("5411", "5412", "5413"), (stryMutAct_9fa48("5414") ? isAdminOrGlobalMod : (stryCov_9fa48("5414"), !isAdminOrGlobalMod)) && (stryMutAct_9fa48("5415") ? canEdit : (stryCov_9fa48("5415"), !canEdit)))) {
      if (stryMutAct_9fa48("5416")) {
        {}
      } else {
        stryCov_9fa48("5416");
        return next();
      }
    }
    req.session.returnTo = stryMutAct_9fa48("5417") ? `` : (stryCov_9fa48("5417"), `/uid/${targetUid}`);
    req.session.registration = stryMutAct_9fa48("5420") ? req.session.registration && {} : stryMutAct_9fa48("5419") ? false : stryMutAct_9fa48("5418") ? true : (stryCov_9fa48("5418", "5419", "5420"), req.session.registration || {});
    req.session.registration.updateEmail = stryMutAct_9fa48("5421") ? false : (stryCov_9fa48("5421"), true);
    req.session.registration.uid = targetUid;
    helpers.redirect(res, stryMutAct_9fa48("5422") ? "" : (stryCov_9fa48("5422"), '/register/complete'));
  }
};
async function renderRoute(name, req, res, next) {
  if (stryMutAct_9fa48("5423")) {
    {}
  } else {
    stryCov_9fa48("5423");
    const userData = await getUserData(req, next);
    if (stryMutAct_9fa48("5426") ? false : stryMutAct_9fa48("5425") ? true : stryMutAct_9fa48("5424") ? userData : (stryCov_9fa48("5424", "5425", "5426"), !userData)) {
      if (stryMutAct_9fa48("5427")) {
        {}
      } else {
        stryCov_9fa48("5427");
        return next();
      }
    }
    if (stryMutAct_9fa48("5430") ? meta.config[`${name}:disableEdit`] || !userData.isAdmin : stryMutAct_9fa48("5429") ? false : stryMutAct_9fa48("5428") ? true : (stryCov_9fa48("5428", "5429", "5430"), meta.config[stryMutAct_9fa48("5431") ? `` : (stryCov_9fa48("5431"), `${name}:disableEdit`)] && (stryMutAct_9fa48("5432") ? userData.isAdmin : (stryCov_9fa48("5432"), !userData.isAdmin)))) {
      if (stryMutAct_9fa48("5433")) {
        {}
      } else {
        stryCov_9fa48("5433");
        return helpers.notAllowed(req, res);
      }
    }
    if (stryMutAct_9fa48("5436") ? name !== 'password' : stryMutAct_9fa48("5435") ? false : stryMutAct_9fa48("5434") ? true : (stryCov_9fa48("5434", "5435", "5436"), name === (stryMutAct_9fa48("5437") ? "" : (stryCov_9fa48("5437"), 'password')))) {
      if (stryMutAct_9fa48("5438")) {
        {}
      } else {
        stryCov_9fa48("5438");
        userData.minimumPasswordLength = meta.config.minimumPasswordLength;
        userData.minimumPasswordStrength = meta.config.minimumPasswordStrength;
      }
    }
    userData.title = stryMutAct_9fa48("5439") ? `` : (stryCov_9fa48("5439"), `[[pages:account/edit/${name}, ${userData.username}]]`);
    userData.breadcrumbs = helpers.buildBreadcrumbs(stryMutAct_9fa48("5440") ? [] : (stryCov_9fa48("5440"), [stryMutAct_9fa48("5441") ? {} : (stryCov_9fa48("5441"), {
      text: userData.username,
      url: stryMutAct_9fa48("5442") ? `` : (stryCov_9fa48("5442"), `/user/${userData.userslug}`)
    }), stryMutAct_9fa48("5443") ? {} : (stryCov_9fa48("5443"), {
      text: stryMutAct_9fa48("5444") ? "" : (stryCov_9fa48("5444"), '[[user:edit]]'),
      url: stryMutAct_9fa48("5445") ? `` : (stryCov_9fa48("5445"), `/user/${userData.userslug}/edit`)
    }), stryMutAct_9fa48("5446") ? {} : (stryCov_9fa48("5446"), {
      text: stryMutAct_9fa48("5447") ? `` : (stryCov_9fa48("5447"), `[[user:${name}]]`)
    })]));
    res.render(stryMutAct_9fa48("5448") ? `` : (stryCov_9fa48("5448"), `account/edit/${name}`), userData);
  }
}
async function getUserData(req) {
  if (stryMutAct_9fa48("5449")) {
    {}
  } else {
    stryCov_9fa48("5449");
    const userData = await accountHelpers.getUserDataByUserSlug(req.params.userslug, req.uid, req.query);
    if (stryMutAct_9fa48("5452") ? false : stryMutAct_9fa48("5451") ? true : stryMutAct_9fa48("5450") ? userData : (stryCov_9fa48("5450", "5451", "5452"), !userData)) {
      if (stryMutAct_9fa48("5453")) {
        {}
      } else {
        stryCov_9fa48("5453");
        return null;
      }
    }
    userData.hasPassword = await user.hasPassword(userData.uid);
    return userData;
  }
}
editController.uploadPicture = async function (req, res, next) {
  if (stryMutAct_9fa48("5454")) {
    {}
  } else {
    stryCov_9fa48("5454");
    const userPhoto = req.files.files[0];
    try {
      if (stryMutAct_9fa48("5455")) {
        {}
      } else {
        stryCov_9fa48("5455");
        const updateUid = await user.getUidByUserslug(req.params.userslug);
        const isAllowed = await privileges.users.canEdit(req.uid, updateUid);
        if (stryMutAct_9fa48("5458") ? false : stryMutAct_9fa48("5457") ? true : stryMutAct_9fa48("5456") ? isAllowed : (stryCov_9fa48("5456", "5457", "5458"), !isAllowed)) {
          if (stryMutAct_9fa48("5459")) {
            {}
          } else {
            stryCov_9fa48("5459");
            return helpers.notAllowed(req, res);
          }
        }
        await user.checkMinReputation(req.uid, updateUid, stryMutAct_9fa48("5460") ? "" : (stryCov_9fa48("5460"), 'min:rep:profile-picture'));
        const image = await user.uploadCroppedPictureFile(stryMutAct_9fa48("5461") ? {} : (stryCov_9fa48("5461"), {
          callerUid: req.uid,
          uid: updateUid,
          file: userPhoto
        }));
        res.json(stryMutAct_9fa48("5462") ? [] : (stryCov_9fa48("5462"), [stryMutAct_9fa48("5463") ? {} : (stryCov_9fa48("5463"), {
          name: userPhoto.name,
          url: image.url
        })]));
      }
    } catch (err) {
      if (stryMutAct_9fa48("5464")) {
        {}
      } else {
        stryCov_9fa48("5464");
        next(err);
      }
    } finally {
      if (stryMutAct_9fa48("5465")) {
        {}
      } else {
        stryCov_9fa48("5465");
        await file.delete(userPhoto.path);
      }
    }
  }
};