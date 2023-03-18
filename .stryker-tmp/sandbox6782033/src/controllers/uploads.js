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
const path = require('path');
const nconf = require('nconf');
const validator = require('validator');
const user = require('../user');
const meta = require('../meta');
const file = require('../file');
const plugins = require('../plugins');
const image = require('../image');
const privileges = require('../privileges');
const helpers = require('./helpers');
const uploadsController = module.exports;
uploadsController.upload = async function (req, res, filesIterator) {
  if (stryMutAct_9fa48("11770")) {
    {}
  } else {
    stryCov_9fa48("11770");
    let files;
    try {
      if (stryMutAct_9fa48("11771")) {
        {}
      } else {
        stryCov_9fa48("11771");
        files = req.files.files;
      }
    } catch (e) {
      if (stryMutAct_9fa48("11772")) {
        {}
      } else {
        stryCov_9fa48("11772");
        return helpers.formatApiResponse(400, res);
      }
    }

    // These checks added because of odd behaviour by request: https://github.com/request/request/issues/2445
    if (stryMutAct_9fa48("11775") ? false : stryMutAct_9fa48("11774") ? true : stryMutAct_9fa48("11773") ? Array.isArray(files) : (stryCov_9fa48("11773", "11774", "11775"), !Array.isArray(files))) {
      if (stryMutAct_9fa48("11776")) {
        {}
      } else {
        stryCov_9fa48("11776");
        return helpers.formatApiResponse(500, res, new Error(stryMutAct_9fa48("11777") ? "" : (stryCov_9fa48("11777"), '[[error:invalid-file]]')));
      }
    }
    if (stryMutAct_9fa48("11779") ? false : stryMutAct_9fa48("11778") ? true : (stryCov_9fa48("11778", "11779"), Array.isArray(files[0]))) {
      if (stryMutAct_9fa48("11780")) {
        {}
      } else {
        stryCov_9fa48("11780");
        files = files[0];
      }
    }
    try {
      if (stryMutAct_9fa48("11781")) {
        {}
      } else {
        stryCov_9fa48("11781");
        const images = stryMutAct_9fa48("11782") ? ["Stryker was here"] : (stryCov_9fa48("11782"), []);
        for (const fileObj of files) {
          if (stryMutAct_9fa48("11783")) {
            {}
          } else {
            stryCov_9fa48("11783");
            /* eslint-disable no-await-in-loop */
            images.push(await filesIterator(fileObj));
          }
        }
        helpers.formatApiResponse(200, res, stryMutAct_9fa48("11784") ? {} : (stryCov_9fa48("11784"), {
          images
        }));
        return images;
      }
    } catch (err) {
      if (stryMutAct_9fa48("11785")) {
        {}
      } else {
        stryCov_9fa48("11785");
        return helpers.formatApiResponse(500, res, err);
      }
    } finally {
      if (stryMutAct_9fa48("11786")) {
        {}
      } else {
        stryCov_9fa48("11786");
        deleteTempFiles(files);
      }
    }
  }
};
uploadsController.uploadPost = async function (req, res) {
  if (stryMutAct_9fa48("11787")) {
    {}
  } else {
    stryCov_9fa48("11787");
    await uploadsController.upload(req, res, async uploadedFile => {
      if (stryMutAct_9fa48("11788")) {
        {}
      } else {
        stryCov_9fa48("11788");
        const isImage = uploadedFile.type.match(/image./);
        if (stryMutAct_9fa48("11790") ? false : stryMutAct_9fa48("11789") ? true : (stryCov_9fa48("11789", "11790"), isImage)) {
          if (stryMutAct_9fa48("11791")) {
            {}
          } else {
            stryCov_9fa48("11791");
            return await uploadAsImage(req, uploadedFile);
          }
        }
        return await uploadAsFile(req, uploadedFile);
      }
    });
  }
};
async function uploadAsImage(req, uploadedFile) {
  if (stryMutAct_9fa48("11792")) {
    {}
  } else {
    stryCov_9fa48("11792");
    const canUpload = await privileges.global.can(stryMutAct_9fa48("11793") ? "" : (stryCov_9fa48("11793"), 'upload:post:image'), req.uid);
    if (stryMutAct_9fa48("11796") ? false : stryMutAct_9fa48("11795") ? true : stryMutAct_9fa48("11794") ? canUpload : (stryCov_9fa48("11794", "11795", "11796"), !canUpload)) {
      if (stryMutAct_9fa48("11797")) {
        {}
      } else {
        stryCov_9fa48("11797");
        throw new Error(stryMutAct_9fa48("11798") ? "" : (stryCov_9fa48("11798"), '[[error:no-privileges]]'));
      }
    }
    await image.checkDimensions(uploadedFile.path);
    await image.stripEXIF(uploadedFile.path);
    if (stryMutAct_9fa48("11800") ? false : stryMutAct_9fa48("11799") ? true : (stryCov_9fa48("11799", "11800"), plugins.hooks.hasListeners(stryMutAct_9fa48("11801") ? "" : (stryCov_9fa48("11801"), 'filter:uploadImage')))) {
      if (stryMutAct_9fa48("11802")) {
        {}
      } else {
        stryCov_9fa48("11802");
        return await plugins.hooks.fire(stryMutAct_9fa48("11803") ? "" : (stryCov_9fa48("11803"), 'filter:uploadImage'), stryMutAct_9fa48("11804") ? {} : (stryCov_9fa48("11804"), {
          image: uploadedFile,
          uid: req.uid,
          folder: stryMutAct_9fa48("11805") ? "" : (stryCov_9fa48("11805"), 'files')
        }));
      }
    }
    await image.isFileTypeAllowed(uploadedFile.path);
    let fileObj = await uploadsController.uploadFile(req.uid, uploadedFile);
    // sharp can't save svgs skip resize for them
    const isSVG = stryMutAct_9fa48("11808") ? uploadedFile.type !== 'image/svg+xml' : stryMutAct_9fa48("11807") ? false : stryMutAct_9fa48("11806") ? true : (stryCov_9fa48("11806", "11807", "11808"), uploadedFile.type === (stryMutAct_9fa48("11809") ? "" : (stryCov_9fa48("11809"), 'image/svg+xml')));
    if (stryMutAct_9fa48("11812") ? (isSVG || meta.config.resizeImageWidth === 0) && meta.config.resizeImageWidthThreshold === 0 : stryMutAct_9fa48("11811") ? false : stryMutAct_9fa48("11810") ? true : (stryCov_9fa48("11810", "11811", "11812"), (stryMutAct_9fa48("11814") ? isSVG && meta.config.resizeImageWidth === 0 : stryMutAct_9fa48("11813") ? false : (stryCov_9fa48("11813", "11814"), isSVG || (stryMutAct_9fa48("11816") ? meta.config.resizeImageWidth !== 0 : stryMutAct_9fa48("11815") ? false : (stryCov_9fa48("11815", "11816"), meta.config.resizeImageWidth === 0)))) || (stryMutAct_9fa48("11818") ? meta.config.resizeImageWidthThreshold !== 0 : stryMutAct_9fa48("11817") ? false : (stryCov_9fa48("11817", "11818"), meta.config.resizeImageWidthThreshold === 0)))) {
      if (stryMutAct_9fa48("11819")) {
        {}
      } else {
        stryCov_9fa48("11819");
        return fileObj;
      }
    }
    fileObj = await resizeImage(fileObj);
    return stryMutAct_9fa48("11820") ? {} : (stryCov_9fa48("11820"), {
      url: fileObj.url
    });
  }
}
async function uploadAsFile(req, uploadedFile) {
  if (stryMutAct_9fa48("11821")) {
    {}
  } else {
    stryCov_9fa48("11821");
    const canUpload = await privileges.global.can(stryMutAct_9fa48("11822") ? "" : (stryCov_9fa48("11822"), 'upload:post:file'), req.uid);
    if (stryMutAct_9fa48("11825") ? false : stryMutAct_9fa48("11824") ? true : stryMutAct_9fa48("11823") ? canUpload : (stryCov_9fa48("11823", "11824", "11825"), !canUpload)) {
      if (stryMutAct_9fa48("11826")) {
        {}
      } else {
        stryCov_9fa48("11826");
        throw new Error(stryMutAct_9fa48("11827") ? "" : (stryCov_9fa48("11827"), '[[error:no-privileges]]'));
      }
    }
    const fileObj = await uploadsController.uploadFile(req.uid, uploadedFile);
    return stryMutAct_9fa48("11828") ? {} : (stryCov_9fa48("11828"), {
      url: fileObj.url,
      name: fileObj.name
    });
  }
}
async function resizeImage(fileObj) {
  if (stryMutAct_9fa48("11829")) {
    {}
  } else {
    stryCov_9fa48("11829");
    const imageData = await image.size(fileObj.path);
    if (stryMutAct_9fa48("11832") ? imageData.width < meta.config.resizeImageWidthThreshold && meta.config.resizeImageWidth > meta.config.resizeImageWidthThreshold : stryMutAct_9fa48("11831") ? false : stryMutAct_9fa48("11830") ? true : (stryCov_9fa48("11830", "11831", "11832"), (stryMutAct_9fa48("11835") ? imageData.width >= meta.config.resizeImageWidthThreshold : stryMutAct_9fa48("11834") ? imageData.width <= meta.config.resizeImageWidthThreshold : stryMutAct_9fa48("11833") ? false : (stryCov_9fa48("11833", "11834", "11835"), imageData.width < meta.config.resizeImageWidthThreshold)) || (stryMutAct_9fa48("11838") ? meta.config.resizeImageWidth <= meta.config.resizeImageWidthThreshold : stryMutAct_9fa48("11837") ? meta.config.resizeImageWidth >= meta.config.resizeImageWidthThreshold : stryMutAct_9fa48("11836") ? false : (stryCov_9fa48("11836", "11837", "11838"), meta.config.resizeImageWidth > meta.config.resizeImageWidthThreshold)))) {
      if (stryMutAct_9fa48("11839")) {
        {}
      } else {
        stryCov_9fa48("11839");
        return fileObj;
      }
    }
    await image.resizeImage(stryMutAct_9fa48("11840") ? {} : (stryCov_9fa48("11840"), {
      path: fileObj.path,
      target: file.appendToFileName(fileObj.path, stryMutAct_9fa48("11841") ? "" : (stryCov_9fa48("11841"), '-resized')),
      width: meta.config.resizeImageWidth,
      quality: meta.config.resizeImageQuality
    }));
    // Return the resized version to the composer/postData
    fileObj.url = file.appendToFileName(fileObj.url, stryMutAct_9fa48("11842") ? "" : (stryCov_9fa48("11842"), '-resized'));
    return fileObj;
  }
}
uploadsController.uploadThumb = async function (req, res) {
  if (stryMutAct_9fa48("11843")) {
    {}
  } else {
    stryCov_9fa48("11843");
    if (stryMutAct_9fa48("11846") ? false : stryMutAct_9fa48("11845") ? true : stryMutAct_9fa48("11844") ? meta.config.allowTopicsThumbnail : (stryCov_9fa48("11844", "11845", "11846"), !meta.config.allowTopicsThumbnail)) {
      if (stryMutAct_9fa48("11847")) {
        {}
      } else {
        stryCov_9fa48("11847");
        deleteTempFiles(req.files.files);
        return helpers.formatApiResponse(503, res, new Error(stryMutAct_9fa48("11848") ? "" : (stryCov_9fa48("11848"), '[[error:topic-thumbnails-are-disabled]]')));
      }
    }
    return await uploadsController.upload(req, res, async uploadedFile => {
      if (stryMutAct_9fa48("11849")) {
        {}
      } else {
        stryCov_9fa48("11849");
        if (stryMutAct_9fa48("11852") ? false : stryMutAct_9fa48("11851") ? true : stryMutAct_9fa48("11850") ? uploadedFile.type.match(/image./) : (stryCov_9fa48("11850", "11851", "11852"), !uploadedFile.type.match(/image./))) {
          if (stryMutAct_9fa48("11853")) {
            {}
          } else {
            stryCov_9fa48("11853");
            throw new Error(stryMutAct_9fa48("11854") ? "" : (stryCov_9fa48("11854"), '[[error:invalid-file]]'));
          }
        }
        await image.isFileTypeAllowed(uploadedFile.path);
        const dimensions = await image.checkDimensions(uploadedFile.path);
        if (stryMutAct_9fa48("11858") ? dimensions.width <= parseInt(meta.config.topicThumbSize, 10) : stryMutAct_9fa48("11857") ? dimensions.width >= parseInt(meta.config.topicThumbSize, 10) : stryMutAct_9fa48("11856") ? false : stryMutAct_9fa48("11855") ? true : (stryCov_9fa48("11855", "11856", "11857", "11858"), dimensions.width > parseInt(meta.config.topicThumbSize, 10))) {
          if (stryMutAct_9fa48("11859")) {
            {}
          } else {
            stryCov_9fa48("11859");
            await image.resizeImage(stryMutAct_9fa48("11860") ? {} : (stryCov_9fa48("11860"), {
              path: uploadedFile.path,
              width: meta.config.topicThumbSize
            }));
          }
        }
        if (stryMutAct_9fa48("11862") ? false : stryMutAct_9fa48("11861") ? true : (stryCov_9fa48("11861", "11862"), plugins.hooks.hasListeners(stryMutAct_9fa48("11863") ? "" : (stryCov_9fa48("11863"), 'filter:uploadImage')))) {
          if (stryMutAct_9fa48("11864")) {
            {}
          } else {
            stryCov_9fa48("11864");
            return await plugins.hooks.fire(stryMutAct_9fa48("11865") ? "" : (stryCov_9fa48("11865"), 'filter:uploadImage'), stryMutAct_9fa48("11866") ? {} : (stryCov_9fa48("11866"), {
              image: uploadedFile,
              uid: req.uid,
              folder: stryMutAct_9fa48("11867") ? "" : (stryCov_9fa48("11867"), 'files')
            }));
          }
        }
        return await uploadsController.uploadFile(req.uid, uploadedFile);
      }
    });
  }
};
uploadsController.uploadFile = async function (uid, uploadedFile) {
  if (stryMutAct_9fa48("11868")) {
    {}
  } else {
    stryCov_9fa48("11868");
    if (stryMutAct_9fa48("11870") ? false : stryMutAct_9fa48("11869") ? true : (stryCov_9fa48("11869", "11870"), plugins.hooks.hasListeners(stryMutAct_9fa48("11871") ? "" : (stryCov_9fa48("11871"), 'filter:uploadFile')))) {
      if (stryMutAct_9fa48("11872")) {
        {}
      } else {
        stryCov_9fa48("11872");
        return await plugins.hooks.fire(stryMutAct_9fa48("11873") ? "" : (stryCov_9fa48("11873"), 'filter:uploadFile'), stryMutAct_9fa48("11874") ? {} : (stryCov_9fa48("11874"), {
          file: uploadedFile,
          uid: uid,
          folder: stryMutAct_9fa48("11875") ? "" : (stryCov_9fa48("11875"), 'files')
        }));
      }
    }
    if (stryMutAct_9fa48("11878") ? false : stryMutAct_9fa48("11877") ? true : stryMutAct_9fa48("11876") ? uploadedFile : (stryCov_9fa48("11876", "11877", "11878"), !uploadedFile)) {
      if (stryMutAct_9fa48("11879")) {
        {}
      } else {
        stryCov_9fa48("11879");
        throw new Error(stryMutAct_9fa48("11880") ? "" : (stryCov_9fa48("11880"), '[[error:invalid-file]]'));
      }
    }
    if (stryMutAct_9fa48("11884") ? uploadedFile.size <= meta.config.maximumFileSize * 1024 : stryMutAct_9fa48("11883") ? uploadedFile.size >= meta.config.maximumFileSize * 1024 : stryMutAct_9fa48("11882") ? false : stryMutAct_9fa48("11881") ? true : (stryCov_9fa48("11881", "11882", "11883", "11884"), uploadedFile.size > (stryMutAct_9fa48("11885") ? meta.config.maximumFileSize / 1024 : (stryCov_9fa48("11885"), meta.config.maximumFileSize * 1024)))) {
      if (stryMutAct_9fa48("11886")) {
        {}
      } else {
        stryCov_9fa48("11886");
        throw new Error(stryMutAct_9fa48("11887") ? `` : (stryCov_9fa48("11887"), `[[error:file-too-big, ${meta.config.maximumFileSize}]]`));
      }
    }
    const allowed = file.allowedExtensions();
    const extension = stryMutAct_9fa48("11888") ? path.extname(uploadedFile.name).toUpperCase() : (stryCov_9fa48("11888"), path.extname(uploadedFile.name).toLowerCase());
    if (stryMutAct_9fa48("11891") ? allowed.length > 0 || !extension || extension === '.' || !allowed.includes(extension) : stryMutAct_9fa48("11890") ? false : stryMutAct_9fa48("11889") ? true : (stryCov_9fa48("11889", "11890", "11891"), (stryMutAct_9fa48("11894") ? allowed.length <= 0 : stryMutAct_9fa48("11893") ? allowed.length >= 0 : stryMutAct_9fa48("11892") ? true : (stryCov_9fa48("11892", "11893", "11894"), allowed.length > 0)) && (stryMutAct_9fa48("11896") ? (!extension || extension === '.') && !allowed.includes(extension) : stryMutAct_9fa48("11895") ? true : (stryCov_9fa48("11895", "11896"), (stryMutAct_9fa48("11898") ? !extension && extension === '.' : stryMutAct_9fa48("11897") ? false : (stryCov_9fa48("11897", "11898"), (stryMutAct_9fa48("11899") ? extension : (stryCov_9fa48("11899"), !extension)) || (stryMutAct_9fa48("11901") ? extension !== '.' : stryMutAct_9fa48("11900") ? false : (stryCov_9fa48("11900", "11901"), extension === (stryMutAct_9fa48("11902") ? "" : (stryCov_9fa48("11902"), '.')))))) || (stryMutAct_9fa48("11903") ? allowed.includes(extension) : (stryCov_9fa48("11903"), !allowed.includes(extension))))))) {
      if (stryMutAct_9fa48("11904")) {
        {}
      } else {
        stryCov_9fa48("11904");
        throw new Error(stryMutAct_9fa48("11905") ? `` : (stryCov_9fa48("11905"), `[[error:invalid-file-type, ${allowed.join(stryMutAct_9fa48("11906") ? "" : (stryCov_9fa48("11906"), '&#44; '))}]]`));
      }
    }
    return await saveFileToLocal(uid, stryMutAct_9fa48("11907") ? "" : (stryCov_9fa48("11907"), 'files'), uploadedFile);
  }
};
async function saveFileToLocal(uid, folder, uploadedFile) {
  if (stryMutAct_9fa48("11908")) {
    {}
  } else {
    stryCov_9fa48("11908");
    const name = stryMutAct_9fa48("11911") ? uploadedFile.name && 'upload' : stryMutAct_9fa48("11910") ? false : stryMutAct_9fa48("11909") ? true : (stryCov_9fa48("11909", "11910", "11911"), uploadedFile.name || (stryMutAct_9fa48("11912") ? "" : (stryCov_9fa48("11912"), 'upload')));
    const extension = stryMutAct_9fa48("11915") ? path.extname(name) && '' : stryMutAct_9fa48("11914") ? false : stryMutAct_9fa48("11913") ? true : (stryCov_9fa48("11913", "11914", "11915"), path.extname(name) || (stryMutAct_9fa48("11916") ? "Stryker was here!" : (stryCov_9fa48("11916"), '')));
    const filename = stryMutAct_9fa48("11917") ? `` : (stryCov_9fa48("11917"), `${Date.now()}-${stryMutAct_9fa48("11918") ? validator.escape(name.slice(0, -extension.length)) : (stryCov_9fa48("11918"), validator.escape(stryMutAct_9fa48("11919") ? name : (stryCov_9fa48("11919"), name.slice(0, stryMutAct_9fa48("11920") ? +extension.length : (stryCov_9fa48("11920"), -extension.length)))).slice(0, 255))}${extension}`);
    const upload = await file.saveFileToLocal(filename, folder, uploadedFile.path);
    const storedFile = stryMutAct_9fa48("11921") ? {} : (stryCov_9fa48("11921"), {
      url: stryMutAct_9fa48("11922") ? nconf.get('relative_path') - upload.url : (stryCov_9fa48("11922"), nconf.get(stryMutAct_9fa48("11923") ? "" : (stryCov_9fa48("11923"), 'relative_path')) + upload.url),
      path: upload.path,
      name: uploadedFile.name
    });
    await user.associateUpload(uid, upload.url.replace(stryMutAct_9fa48("11924") ? `` : (stryCov_9fa48("11924"), `${nconf.get(stryMutAct_9fa48("11925") ? "" : (stryCov_9fa48("11925"), 'upload_url'))}/`), stryMutAct_9fa48("11926") ? "Stryker was here!" : (stryCov_9fa48("11926"), '')));
    const data = await plugins.hooks.fire(stryMutAct_9fa48("11927") ? "" : (stryCov_9fa48("11927"), 'filter:uploadStored'), stryMutAct_9fa48("11928") ? {} : (stryCov_9fa48("11928"), {
      uid: uid,
      uploadedFile: uploadedFile,
      storedFile: storedFile
    }));
    return data.storedFile;
  }
}
function deleteTempFiles(files) {
  if (stryMutAct_9fa48("11929")) {
    {}
  } else {
    stryCov_9fa48("11929");
    files.forEach(stryMutAct_9fa48("11930") ? () => undefined : (stryCov_9fa48("11930"), fileObj => file.delete(fileObj.path)));
  }
}
require('../promisify')(uploadsController, stryMutAct_9fa48("11931") ? [] : (stryCov_9fa48("11931"), [stryMutAct_9fa48("11932") ? "" : (stryCov_9fa48("11932"), 'upload'), stryMutAct_9fa48("11933") ? "" : (stryCov_9fa48("11933"), 'uploadPost'), stryMutAct_9fa48("11934") ? "" : (stryCov_9fa48("11934"), 'uploadThumb')]));