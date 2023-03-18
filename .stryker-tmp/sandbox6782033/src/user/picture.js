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
const mime = require('mime');
const path = require('path');
const nconf = require('nconf');
const db = require('../database');
const file = require('../file');
const image = require('../image');
const meta = require('../meta');
module.exports = function (User) {
  if (stryMutAct_9fa48("48253")) {
    {}
  } else {
    stryCov_9fa48("48253");
    User.getAllowedProfileImageExtensions = function () {
      if (stryMutAct_9fa48("48254")) {
        {}
      } else {
        stryCov_9fa48("48254");
        const exts = User.getAllowedImageTypes().map(stryMutAct_9fa48("48255") ? () => undefined : (stryCov_9fa48("48255"), type => mime.getExtension(type)));
        if (stryMutAct_9fa48("48257") ? false : stryMutAct_9fa48("48256") ? true : (stryCov_9fa48("48256", "48257"), exts.includes(stryMutAct_9fa48("48258") ? "" : (stryCov_9fa48("48258"), 'jpeg')))) {
          if (stryMutAct_9fa48("48259")) {
            {}
          } else {
            stryCov_9fa48("48259");
            exts.push(stryMutAct_9fa48("48260") ? "" : (stryCov_9fa48("48260"), 'jpg'));
          }
        }
        return exts;
      }
    };
    User.getAllowedImageTypes = function () {
      if (stryMutAct_9fa48("48261")) {
        {}
      } else {
        stryCov_9fa48("48261");
        return stryMutAct_9fa48("48262") ? [] : (stryCov_9fa48("48262"), [stryMutAct_9fa48("48263") ? "" : (stryCov_9fa48("48263"), 'image/png'), stryMutAct_9fa48("48264") ? "" : (stryCov_9fa48("48264"), 'image/jpeg'), stryMutAct_9fa48("48265") ? "" : (stryCov_9fa48("48265"), 'image/bmp'), stryMutAct_9fa48("48266") ? "" : (stryCov_9fa48("48266"), 'image/gif')]);
      }
    };
    User.updateCoverPosition = async function (uid, position) {
      if (stryMutAct_9fa48("48267")) {
        {}
      } else {
        stryCov_9fa48("48267");
        // Reject anything that isn't two percentages
        if (stryMutAct_9fa48("48270") ? false : stryMutAct_9fa48("48269") ? true : stryMutAct_9fa48("48268") ? /^[\d.]+%\s[\d.]+%$/.test(position) : (stryCov_9fa48("48268", "48269", "48270"), !(stryMutAct_9fa48("48279") ? /^[\d.]+%\s[\D.]+%$/ : stryMutAct_9fa48("48278") ? /^[\d.]+%\s[^\d.]+%$/ : stryMutAct_9fa48("48277") ? /^[\d.]+%\s[\d.]%$/ : stryMutAct_9fa48("48276") ? /^[\d.]+%\S[\d.]+%$/ : stryMutAct_9fa48("48275") ? /^[\D.]+%\s[\d.]+%$/ : stryMutAct_9fa48("48274") ? /^[^\d.]+%\s[\d.]+%$/ : stryMutAct_9fa48("48273") ? /^[\d.]%\s[\d.]+%$/ : stryMutAct_9fa48("48272") ? /^[\d.]+%\s[\d.]+%/ : stryMutAct_9fa48("48271") ? /[\d.]+%\s[\d.]+%$/ : (stryCov_9fa48("48271", "48272", "48273", "48274", "48275", "48276", "48277", "48278", "48279"), /^[\d.]+%\s[\d.]+%$/)).test(position))) {
          if (stryMutAct_9fa48("48280")) {
            {}
          } else {
            stryCov_9fa48("48280");
            winston.warn(stryMutAct_9fa48("48281") ? `` : (stryCov_9fa48("48281"), `[user/updateCoverPosition] Invalid position received: ${position}`));
            throw new Error(stryMutAct_9fa48("48282") ? "" : (stryCov_9fa48("48282"), '[[error:invalid-data]]'));
          }
        }
        await User.setUserField(uid, stryMutAct_9fa48("48283") ? "" : (stryCov_9fa48("48283"), 'cover:position'), position);
      }
    };
    User.updateCoverPicture = async function (data) {
      if (stryMutAct_9fa48("48284")) {
        {}
      } else {
        stryCov_9fa48("48284");
        const picture = stryMutAct_9fa48("48285") ? {} : (stryCov_9fa48("48285"), {
          name: stryMutAct_9fa48("48286") ? "" : (stryCov_9fa48("48286"), 'profileCover'),
          uid: data.uid
        });
        try {
          if (stryMutAct_9fa48("48287")) {
            {}
          } else {
            stryCov_9fa48("48287");
            if (stryMutAct_9fa48("48290") ? !data.imageData || data.position : stryMutAct_9fa48("48289") ? false : stryMutAct_9fa48("48288") ? true : (stryCov_9fa48("48288", "48289", "48290"), (stryMutAct_9fa48("48291") ? data.imageData : (stryCov_9fa48("48291"), !data.imageData)) && data.position)) {
              if (stryMutAct_9fa48("48292")) {
                {}
              } else {
                stryCov_9fa48("48292");
                return await User.updateCoverPosition(data.uid, data.position);
              }
            }
            validateUpload(data, meta.config.maximumCoverImageSize, stryMutAct_9fa48("48293") ? [] : (stryCov_9fa48("48293"), [stryMutAct_9fa48("48294") ? "" : (stryCov_9fa48("48294"), 'image/png'), stryMutAct_9fa48("48295") ? "" : (stryCov_9fa48("48295"), 'image/jpeg'), stryMutAct_9fa48("48296") ? "" : (stryCov_9fa48("48296"), 'image/bmp')]));
            picture.path = await image.writeImageDataToTempFile(data.imageData);
            const extension = file.typeToExtension(image.mimeFromBase64(data.imageData));
            const filename = stryMutAct_9fa48("48297") ? `` : (stryCov_9fa48("48297"), `${data.uid}-profilecover-${Date.now()}${extension}`);
            const uploadData = await image.uploadImage(filename, stryMutAct_9fa48("48298") ? "" : (stryCov_9fa48("48298"), 'profile'), picture);
            await deleteCurrentPicture(data.uid, stryMutAct_9fa48("48299") ? "" : (stryCov_9fa48("48299"), 'cover:url'));
            await User.setUserField(data.uid, stryMutAct_9fa48("48300") ? "" : (stryCov_9fa48("48300"), 'cover:url'), uploadData.url);
            if (stryMutAct_9fa48("48302") ? false : stryMutAct_9fa48("48301") ? true : (stryCov_9fa48("48301", "48302"), data.position)) {
              if (stryMutAct_9fa48("48303")) {
                {}
              } else {
                stryCov_9fa48("48303");
                await User.updateCoverPosition(data.uid, data.position);
              }
            }
            return stryMutAct_9fa48("48304") ? {} : (stryCov_9fa48("48304"), {
              url: uploadData.url
            });
          }
        } finally {
          if (stryMutAct_9fa48("48305")) {
            {}
          } else {
            stryCov_9fa48("48305");
            await file.delete(picture.path);
          }
        }
      }
    };

    // uploads a image file as profile picture
    User.uploadCroppedPictureFile = async function (data) {
      if (stryMutAct_9fa48("48306")) {
        {}
      } else {
        stryCov_9fa48("48306");
        const userPhoto = data.file;
        if (stryMutAct_9fa48("48309") ? false : stryMutAct_9fa48("48308") ? true : stryMutAct_9fa48("48307") ? meta.config.allowProfileImageUploads : (stryCov_9fa48("48307", "48308", "48309"), !meta.config.allowProfileImageUploads)) {
          if (stryMutAct_9fa48("48310")) {
            {}
          } else {
            stryCov_9fa48("48310");
            throw new Error(stryMutAct_9fa48("48311") ? "" : (stryCov_9fa48("48311"), '[[error:profile-image-uploads-disabled]]'));
          }
        }
        if (stryMutAct_9fa48("48315") ? userPhoto.size <= meta.config.maximumProfileImageSize * 1024 : stryMutAct_9fa48("48314") ? userPhoto.size >= meta.config.maximumProfileImageSize * 1024 : stryMutAct_9fa48("48313") ? false : stryMutAct_9fa48("48312") ? true : (stryCov_9fa48("48312", "48313", "48314", "48315"), userPhoto.size > (stryMutAct_9fa48("48316") ? meta.config.maximumProfileImageSize / 1024 : (stryCov_9fa48("48316"), meta.config.maximumProfileImageSize * 1024)))) {
          if (stryMutAct_9fa48("48317")) {
            {}
          } else {
            stryCov_9fa48("48317");
            throw new Error(stryMutAct_9fa48("48318") ? `` : (stryCov_9fa48("48318"), `[[error:file-too-big, ${meta.config.maximumProfileImageSize}]]`));
          }
        }
        if (stryMutAct_9fa48("48321") ? !userPhoto.type && !User.getAllowedImageTypes().includes(userPhoto.type) : stryMutAct_9fa48("48320") ? false : stryMutAct_9fa48("48319") ? true : (stryCov_9fa48("48319", "48320", "48321"), (stryMutAct_9fa48("48322") ? userPhoto.type : (stryCov_9fa48("48322"), !userPhoto.type)) || (stryMutAct_9fa48("48323") ? User.getAllowedImageTypes().includes(userPhoto.type) : (stryCov_9fa48("48323"), !User.getAllowedImageTypes().includes(userPhoto.type))))) {
          if (stryMutAct_9fa48("48324")) {
            {}
          } else {
            stryCov_9fa48("48324");
            throw new Error(stryMutAct_9fa48("48325") ? "" : (stryCov_9fa48("48325"), '[[error:invalid-image]]'));
          }
        }
        const extension = file.typeToExtension(userPhoto.type);
        if (stryMutAct_9fa48("48328") ? false : stryMutAct_9fa48("48327") ? true : stryMutAct_9fa48("48326") ? extension : (stryCov_9fa48("48326", "48327", "48328"), !extension)) {
          if (stryMutAct_9fa48("48329")) {
            {}
          } else {
            stryCov_9fa48("48329");
            throw new Error(stryMutAct_9fa48("48330") ? "" : (stryCov_9fa48("48330"), '[[error:invalid-image-extension]]'));
          }
        }
        const newPath = await convertToPNG(userPhoto.path);
        await image.resizeImage(stryMutAct_9fa48("48331") ? {} : (stryCov_9fa48("48331"), {
          path: newPath,
          width: meta.config.profileImageDimension,
          height: meta.config.profileImageDimension
        }));
        const filename = generateProfileImageFilename(data.uid, extension);
        const uploadedImage = await image.uploadImage(filename, stryMutAct_9fa48("48332") ? "" : (stryCov_9fa48("48332"), 'profile'), stryMutAct_9fa48("48333") ? {} : (stryCov_9fa48("48333"), {
          uid: data.uid,
          path: newPath,
          name: stryMutAct_9fa48("48334") ? "" : (stryCov_9fa48("48334"), 'profileAvatar')
        }));
        await deleteCurrentPicture(data.uid, stryMutAct_9fa48("48335") ? "" : (stryCov_9fa48("48335"), 'uploadedpicture'));
        await User.updateProfile(data.callerUid, stryMutAct_9fa48("48336") ? {} : (stryCov_9fa48("48336"), {
          uid: data.uid,
          uploadedpicture: uploadedImage.url,
          picture: uploadedImage.url
        }), stryMutAct_9fa48("48337") ? [] : (stryCov_9fa48("48337"), [stryMutAct_9fa48("48338") ? "" : (stryCov_9fa48("48338"), 'uploadedpicture'), stryMutAct_9fa48("48339") ? "" : (stryCov_9fa48("48339"), 'picture')]));
        return uploadedImage;
      }
    };

    // uploads image data in base64 as profile picture
    User.uploadCroppedPicture = async function (data) {
      if (stryMutAct_9fa48("48340")) {
        {}
      } else {
        stryCov_9fa48("48340");
        const picture = stryMutAct_9fa48("48341") ? {} : (stryCov_9fa48("48341"), {
          name: stryMutAct_9fa48("48342") ? "" : (stryCov_9fa48("48342"), 'profileAvatar'),
          uid: data.uid
        });
        try {
          if (stryMutAct_9fa48("48343")) {
            {}
          } else {
            stryCov_9fa48("48343");
            if (stryMutAct_9fa48("48346") ? false : stryMutAct_9fa48("48345") ? true : stryMutAct_9fa48("48344") ? meta.config.allowProfileImageUploads : (stryCov_9fa48("48344", "48345", "48346"), !meta.config.allowProfileImageUploads)) {
              if (stryMutAct_9fa48("48347")) {
                {}
              } else {
                stryCov_9fa48("48347");
                throw new Error(stryMutAct_9fa48("48348") ? "" : (stryCov_9fa48("48348"), '[[error:profile-image-uploads-disabled]]'));
              }
            }
            validateUpload(data, meta.config.maximumProfileImageSize, User.getAllowedImageTypes());
            const extension = file.typeToExtension(image.mimeFromBase64(data.imageData));
            if (stryMutAct_9fa48("48351") ? false : stryMutAct_9fa48("48350") ? true : stryMutAct_9fa48("48349") ? extension : (stryCov_9fa48("48349", "48350", "48351"), !extension)) {
              if (stryMutAct_9fa48("48352")) {
                {}
              } else {
                stryCov_9fa48("48352");
                throw new Error(stryMutAct_9fa48("48353") ? "" : (stryCov_9fa48("48353"), '[[error:invalid-image-extension]]'));
              }
            }
            picture.path = await image.writeImageDataToTempFile(data.imageData);
            picture.path = await convertToPNG(picture.path);
            await image.resizeImage(stryMutAct_9fa48("48354") ? {} : (stryCov_9fa48("48354"), {
              path: picture.path,
              width: meta.config.profileImageDimension,
              height: meta.config.profileImageDimension
            }));
            const filename = generateProfileImageFilename(data.uid, extension);
            const uploadedImage = await image.uploadImage(filename, stryMutAct_9fa48("48355") ? "" : (stryCov_9fa48("48355"), 'profile'), picture);
            await deleteCurrentPicture(data.uid, stryMutAct_9fa48("48356") ? "" : (stryCov_9fa48("48356"), 'uploadedpicture'));
            await User.updateProfile(data.callerUid, stryMutAct_9fa48("48357") ? {} : (stryCov_9fa48("48357"), {
              uid: data.uid,
              uploadedpicture: uploadedImage.url,
              picture: uploadedImage.url
            }), stryMutAct_9fa48("48358") ? [] : (stryCov_9fa48("48358"), [stryMutAct_9fa48("48359") ? "" : (stryCov_9fa48("48359"), 'uploadedpicture'), stryMutAct_9fa48("48360") ? "" : (stryCov_9fa48("48360"), 'picture')]));
            return uploadedImage;
          }
        } finally {
          if (stryMutAct_9fa48("48361")) {
            {}
          } else {
            stryCov_9fa48("48361");
            await file.delete(picture.path);
          }
        }
      }
    };
    async function deleteCurrentPicture(uid, field) {
      if (stryMutAct_9fa48("48362")) {
        {}
      } else {
        stryCov_9fa48("48362");
        if (stryMutAct_9fa48("48364") ? false : stryMutAct_9fa48("48363") ? true : (stryCov_9fa48("48363", "48364"), meta.config[stryMutAct_9fa48("48365") ? "" : (stryCov_9fa48("48365"), 'profile:keepAllUserImages')])) {
          if (stryMutAct_9fa48("48366")) {
            {}
          } else {
            stryCov_9fa48("48366");
            return;
          }
        }
        await deletePicture(uid, field);
      }
    }
    async function deletePicture(uid, field) {
      if (stryMutAct_9fa48("48367")) {
        {}
      } else {
        stryCov_9fa48("48367");
        const uploadPath = await getPicturePath(uid, field);
        if (stryMutAct_9fa48("48369") ? false : stryMutAct_9fa48("48368") ? true : (stryCov_9fa48("48368", "48369"), uploadPath)) {
          if (stryMutAct_9fa48("48370")) {
            {}
          } else {
            stryCov_9fa48("48370");
            await file.delete(uploadPath);
          }
        }
      }
    }
    function validateUpload(data, maxSize, allowedTypes) {
      if (stryMutAct_9fa48("48371")) {
        {}
      } else {
        stryCov_9fa48("48371");
        if (stryMutAct_9fa48("48374") ? false : stryMutAct_9fa48("48373") ? true : stryMutAct_9fa48("48372") ? data.imageData : (stryCov_9fa48("48372", "48373", "48374"), !data.imageData)) {
          if (stryMutAct_9fa48("48375")) {
            {}
          } else {
            stryCov_9fa48("48375");
            throw new Error(stryMutAct_9fa48("48376") ? "" : (stryCov_9fa48("48376"), '[[error:invalid-data]]'));
          }
        }
        const size = image.sizeFromBase64(data.imageData);
        if (stryMutAct_9fa48("48380") ? size <= maxSize * 1024 : stryMutAct_9fa48("48379") ? size >= maxSize * 1024 : stryMutAct_9fa48("48378") ? false : stryMutAct_9fa48("48377") ? true : (stryCov_9fa48("48377", "48378", "48379", "48380"), size > (stryMutAct_9fa48("48381") ? maxSize / 1024 : (stryCov_9fa48("48381"), maxSize * 1024)))) {
          if (stryMutAct_9fa48("48382")) {
            {}
          } else {
            stryCov_9fa48("48382");
            throw new Error(stryMutAct_9fa48("48383") ? `` : (stryCov_9fa48("48383"), `[[error:file-too-big, ${maxSize}]]`));
          }
        }
        const type = image.mimeFromBase64(data.imageData);
        if (stryMutAct_9fa48("48386") ? !type && !allowedTypes.includes(type) : stryMutAct_9fa48("48385") ? false : stryMutAct_9fa48("48384") ? true : (stryCov_9fa48("48384", "48385", "48386"), (stryMutAct_9fa48("48387") ? type : (stryCov_9fa48("48387"), !type)) || (stryMutAct_9fa48("48388") ? allowedTypes.includes(type) : (stryCov_9fa48("48388"), !allowedTypes.includes(type))))) {
          if (stryMutAct_9fa48("48389")) {
            {}
          } else {
            stryCov_9fa48("48389");
            throw new Error(stryMutAct_9fa48("48390") ? "" : (stryCov_9fa48("48390"), '[[error:invalid-image]]'));
          }
        }
      }
    }
    async function convertToPNG(path) {
      if (stryMutAct_9fa48("48391")) {
        {}
      } else {
        stryCov_9fa48("48391");
        const convertToPNG = stryMutAct_9fa48("48394") ? meta.config['profile:convertProfileImageToPNG'] !== 1 : stryMutAct_9fa48("48393") ? false : stryMutAct_9fa48("48392") ? true : (stryCov_9fa48("48392", "48393", "48394"), meta.config[stryMutAct_9fa48("48395") ? "" : (stryCov_9fa48("48395"), 'profile:convertProfileImageToPNG')] === 1);
        if (stryMutAct_9fa48("48398") ? false : stryMutAct_9fa48("48397") ? true : stryMutAct_9fa48("48396") ? convertToPNG : (stryCov_9fa48("48396", "48397", "48398"), !convertToPNG)) {
          if (stryMutAct_9fa48("48399")) {
            {}
          } else {
            stryCov_9fa48("48399");
            return path;
          }
        }
        const newPath = await image.normalise(path);
        await file.delete(path);
        return newPath;
      }
    }
    function generateProfileImageFilename(uid, extension) {
      if (stryMutAct_9fa48("48400")) {
        {}
      } else {
        stryCov_9fa48("48400");
        const convertToPNG = stryMutAct_9fa48("48403") ? meta.config['profile:convertProfileImageToPNG'] !== 1 : stryMutAct_9fa48("48402") ? false : stryMutAct_9fa48("48401") ? true : (stryCov_9fa48("48401", "48402", "48403"), meta.config[stryMutAct_9fa48("48404") ? "" : (stryCov_9fa48("48404"), 'profile:convertProfileImageToPNG')] === 1);
        return stryMutAct_9fa48("48405") ? `` : (stryCov_9fa48("48405"), `${uid}-profileavatar-${Date.now()}${convertToPNG ? stryMutAct_9fa48("48406") ? "" : (stryCov_9fa48("48406"), '.png') : extension}`);
      }
    }
    User.removeCoverPicture = async function (data) {
      if (stryMutAct_9fa48("48407")) {
        {}
      } else {
        stryCov_9fa48("48407");
        await deletePicture(data.uid, stryMutAct_9fa48("48408") ? "" : (stryCov_9fa48("48408"), 'cover:url'));
        await db.deleteObjectFields(stryMutAct_9fa48("48409") ? `` : (stryCov_9fa48("48409"), `user:${data.uid}`), stryMutAct_9fa48("48410") ? [] : (stryCov_9fa48("48410"), [stryMutAct_9fa48("48411") ? "" : (stryCov_9fa48("48411"), 'cover:url'), stryMutAct_9fa48("48412") ? "" : (stryCov_9fa48("48412"), 'cover:position')]));
      }
    };
    User.removeProfileImage = async function (uid) {
      if (stryMutAct_9fa48("48413")) {
        {}
      } else {
        stryCov_9fa48("48413");
        const userData = await User.getUserFields(uid, stryMutAct_9fa48("48414") ? [] : (stryCov_9fa48("48414"), [stryMutAct_9fa48("48415") ? "" : (stryCov_9fa48("48415"), 'uploadedpicture'), stryMutAct_9fa48("48416") ? "" : (stryCov_9fa48("48416"), 'picture')]));
        await deletePicture(uid, stryMutAct_9fa48("48417") ? "" : (stryCov_9fa48("48417"), 'uploadedpicture'));
        await User.setUserFields(uid, stryMutAct_9fa48("48418") ? {} : (stryCov_9fa48("48418"), {
          uploadedpicture: stryMutAct_9fa48("48419") ? "Stryker was here!" : (stryCov_9fa48("48419"), ''),
          // if current picture is uploaded picture, reset to user icon
          picture: (stryMutAct_9fa48("48422") ? userData.uploadedpicture !== userData.picture : stryMutAct_9fa48("48421") ? false : stryMutAct_9fa48("48420") ? true : (stryCov_9fa48("48420", "48421", "48422"), userData.uploadedpicture === userData.picture)) ? stryMutAct_9fa48("48423") ? "Stryker was here!" : (stryCov_9fa48("48423"), '') : userData.picture
        }));
        return userData;
      }
    };
    User.getLocalCoverPath = async function (uid) {
      if (stryMutAct_9fa48("48424")) {
        {}
      } else {
        stryCov_9fa48("48424");
        return getPicturePath(uid, stryMutAct_9fa48("48425") ? "" : (stryCov_9fa48("48425"), 'cover:url'));
      }
    };
    User.getLocalAvatarPath = async function (uid) {
      if (stryMutAct_9fa48("48426")) {
        {}
      } else {
        stryCov_9fa48("48426");
        return getPicturePath(uid, stryMutAct_9fa48("48427") ? "" : (stryCov_9fa48("48427"), 'uploadedpicture'));
      }
    };
    async function getPicturePath(uid, field) {
      if (stryMutAct_9fa48("48428")) {
        {}
      } else {
        stryCov_9fa48("48428");
        const value = await User.getUserField(uid, field);
        if (stryMutAct_9fa48("48431") ? !value && !value.startsWith(`${nconf.get('relative_path')}/assets/uploads/profile/`) : stryMutAct_9fa48("48430") ? false : stryMutAct_9fa48("48429") ? true : (stryCov_9fa48("48429", "48430", "48431"), (stryMutAct_9fa48("48432") ? value : (stryCov_9fa48("48432"), !value)) || (stryMutAct_9fa48("48433") ? value.startsWith(`${nconf.get('relative_path')}/assets/uploads/profile/`) : (stryCov_9fa48("48433"), !(stryMutAct_9fa48("48434") ? value.endsWith(`${nconf.get('relative_path')}/assets/uploads/profile/`) : (stryCov_9fa48("48434"), value.startsWith(stryMutAct_9fa48("48435") ? `` : (stryCov_9fa48("48435"), `${nconf.get(stryMutAct_9fa48("48436") ? "" : (stryCov_9fa48("48436"), 'relative_path'))}/assets/uploads/profile/`)))))))) {
          if (stryMutAct_9fa48("48437")) {
            {}
          } else {
            stryCov_9fa48("48437");
            return stryMutAct_9fa48("48438") ? true : (stryCov_9fa48("48438"), false);
          }
        }
        const filename = value.split(stryMutAct_9fa48("48439") ? "" : (stryCov_9fa48("48439"), '/')).pop();
        return path.join(nconf.get(stryMutAct_9fa48("48440") ? "" : (stryCov_9fa48("48440"), 'upload_path')), stryMutAct_9fa48("48441") ? "" : (stryCov_9fa48("48441"), 'profile'), filename);
      }
    }
  }
};