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
const os = require('os');
const fs = require('fs');
const path = require('path');
const crypto = require('crypto');
const winston = require('winston');
const file = require('./file');
const plugins = require('./plugins');
const meta = require('./meta');
const image = module.exports;
function requireSharp() {
  if (stryMutAct_9fa48("21288")) {
    {}
  } else {
    stryCov_9fa48("21288");
    const sharp = require('sharp');
    if (stryMutAct_9fa48("21291") ? os.platform() !== 'win32' : stryMutAct_9fa48("21290") ? false : stryMutAct_9fa48("21289") ? true : (stryCov_9fa48("21289", "21290", "21291"), os.platform() === (stryMutAct_9fa48("21292") ? "" : (stryCov_9fa48("21292"), 'win32')))) {
      if (stryMutAct_9fa48("21293")) {
        {}
      } else {
        stryCov_9fa48("21293");
        // https://github.com/lovell/sharp/issues/1259
        sharp.cache(stryMutAct_9fa48("21294") ? true : (stryCov_9fa48("21294"), false));
      }
    }
    return sharp;
  }
}
image.isFileTypeAllowed = async function (path) {
  if (stryMutAct_9fa48("21295")) {
    {}
  } else {
    stryCov_9fa48("21295");
    const plugins = require('./plugins');
    if (stryMutAct_9fa48("21297") ? false : stryMutAct_9fa48("21296") ? true : (stryCov_9fa48("21296", "21297"), plugins.hooks.hasListeners(stryMutAct_9fa48("21298") ? "" : (stryCov_9fa48("21298"), 'filter:image.isFileTypeAllowed')))) {
      if (stryMutAct_9fa48("21299")) {
        {}
      } else {
        stryCov_9fa48("21299");
        return await plugins.hooks.fire(stryMutAct_9fa48("21300") ? "" : (stryCov_9fa48("21300"), 'filter:image.isFileTypeAllowed'), path);
      }
    }
    const sharp = require('sharp');
    await sharp(path, stryMutAct_9fa48("21301") ? {} : (stryCov_9fa48("21301"), {
      failOnError: stryMutAct_9fa48("21302") ? false : (stryCov_9fa48("21302"), true)
    })).metadata();
  }
};
image.resizeImage = async function (data) {
  if (stryMutAct_9fa48("21303")) {
    {}
  } else {
    stryCov_9fa48("21303");
    if (stryMutAct_9fa48("21305") ? false : stryMutAct_9fa48("21304") ? true : (stryCov_9fa48("21304", "21305"), plugins.hooks.hasListeners(stryMutAct_9fa48("21306") ? "" : (stryCov_9fa48("21306"), 'filter:image.resize')))) {
      if (stryMutAct_9fa48("21307")) {
        {}
      } else {
        stryCov_9fa48("21307");
        await plugins.hooks.fire(stryMutAct_9fa48("21308") ? "" : (stryCov_9fa48("21308"), 'filter:image.resize'), stryMutAct_9fa48("21309") ? {} : (stryCov_9fa48("21309"), {
          path: data.path,
          target: data.target,
          width: data.width,
          height: data.height,
          quality: data.quality
        }));
      }
    } else {
      if (stryMutAct_9fa48("21310")) {
        {}
      } else {
        stryCov_9fa48("21310");
        const sharp = requireSharp();
        const buffer = await fs.promises.readFile(data.path);
        const sharpImage = sharp(buffer, stryMutAct_9fa48("21311") ? {} : (stryCov_9fa48("21311"), {
          failOnError: stryMutAct_9fa48("21312") ? false : (stryCov_9fa48("21312"), true),
          animated: stryMutAct_9fa48("21313") ? data.path.startsWith('gif') : (stryCov_9fa48("21313"), data.path.endsWith(stryMutAct_9fa48("21314") ? "" : (stryCov_9fa48("21314"), 'gif')))
        }));
        const metadata = await sharpImage.metadata();
        sharpImage.rotate(); // auto-orients based on exif data
        sharpImage.resize(data.hasOwnProperty(stryMutAct_9fa48("21315") ? "" : (stryCov_9fa48("21315"), 'width')) ? data.width : null, data.hasOwnProperty(stryMutAct_9fa48("21316") ? "" : (stryCov_9fa48("21316"), 'height')) ? data.height : null);
        if (stryMutAct_9fa48("21318") ? false : stryMutAct_9fa48("21317") ? true : (stryCov_9fa48("21317", "21318"), data.quality)) {
          if (stryMutAct_9fa48("21319")) {
            {}
          } else {
            stryCov_9fa48("21319");
            switch (metadata.format) {
              case stryMutAct_9fa48("21321") ? "" : (stryCov_9fa48("21321"), 'jpeg'):
                if (stryMutAct_9fa48("21320")) {} else {
                  stryCov_9fa48("21320");
                  {
                    if (stryMutAct_9fa48("21322")) {
                      {}
                    } else {
                      stryCov_9fa48("21322");
                      sharpImage.jpeg(stryMutAct_9fa48("21323") ? {} : (stryCov_9fa48("21323"), {
                        quality: data.quality,
                        mozjpeg: stryMutAct_9fa48("21324") ? false : (stryCov_9fa48("21324"), true)
                      }));
                      break;
                    }
                  }
                }
              case stryMutAct_9fa48("21326") ? "" : (stryCov_9fa48("21326"), 'png'):
                if (stryMutAct_9fa48("21325")) {} else {
                  stryCov_9fa48("21325");
                  {
                    if (stryMutAct_9fa48("21327")) {
                      {}
                    } else {
                      stryCov_9fa48("21327");
                      sharpImage.png(stryMutAct_9fa48("21328") ? {} : (stryCov_9fa48("21328"), {
                        quality: data.quality,
                        compressionLevel: 9
                      }));
                      break;
                    }
                  }
                }
            }
          }
        }
        await sharpImage.toFile(stryMutAct_9fa48("21331") ? data.target && data.path : stryMutAct_9fa48("21330") ? false : stryMutAct_9fa48("21329") ? true : (stryCov_9fa48("21329", "21330", "21331"), data.target || data.path));
      }
    }
  }
};
image.normalise = async function (path) {
  if (stryMutAct_9fa48("21332")) {
    {}
  } else {
    stryCov_9fa48("21332");
    if (stryMutAct_9fa48("21334") ? false : stryMutAct_9fa48("21333") ? true : (stryCov_9fa48("21333", "21334"), plugins.hooks.hasListeners(stryMutAct_9fa48("21335") ? "" : (stryCov_9fa48("21335"), 'filter:image.normalise')))) {
      if (stryMutAct_9fa48("21336")) {
        {}
      } else {
        stryCov_9fa48("21336");
        await plugins.hooks.fire(stryMutAct_9fa48("21337") ? "" : (stryCov_9fa48("21337"), 'filter:image.normalise'), stryMutAct_9fa48("21338") ? {} : (stryCov_9fa48("21338"), {
          path: path
        }));
      }
    } else {
      if (stryMutAct_9fa48("21339")) {
        {}
      } else {
        stryCov_9fa48("21339");
        const sharp = requireSharp();
        await sharp(path, stryMutAct_9fa48("21340") ? {} : (stryCov_9fa48("21340"), {
          failOnError: stryMutAct_9fa48("21341") ? false : (stryCov_9fa48("21341"), true)
        })).png().toFile(stryMutAct_9fa48("21342") ? `` : (stryCov_9fa48("21342"), `${path}.png`));
      }
    }
    return stryMutAct_9fa48("21343") ? `` : (stryCov_9fa48("21343"), `${path}.png`);
  }
};
image.size = async function (path) {
  if (stryMutAct_9fa48("21344")) {
    {}
  } else {
    stryCov_9fa48("21344");
    let imageData;
    if (stryMutAct_9fa48("21346") ? false : stryMutAct_9fa48("21345") ? true : (stryCov_9fa48("21345", "21346"), plugins.hooks.hasListeners(stryMutAct_9fa48("21347") ? "" : (stryCov_9fa48("21347"), 'filter:image.size')))) {
      if (stryMutAct_9fa48("21348")) {
        {}
      } else {
        stryCov_9fa48("21348");
        imageData = await plugins.hooks.fire(stryMutAct_9fa48("21349") ? "" : (stryCov_9fa48("21349"), 'filter:image.size'), stryMutAct_9fa48("21350") ? {} : (stryCov_9fa48("21350"), {
          path: path
        }));
      }
    } else {
      if (stryMutAct_9fa48("21351")) {
        {}
      } else {
        stryCov_9fa48("21351");
        const sharp = requireSharp();
        imageData = await sharp(path, stryMutAct_9fa48("21352") ? {} : (stryCov_9fa48("21352"), {
          failOnError: stryMutAct_9fa48("21353") ? false : (stryCov_9fa48("21353"), true)
        })).metadata();
      }
    }
    return imageData ? stryMutAct_9fa48("21354") ? {} : (stryCov_9fa48("21354"), {
      width: imageData.width,
      height: imageData.height
    }) : undefined;
  }
};
image.stripEXIF = async function (path) {
  if (stryMutAct_9fa48("21355")) {
    {}
  } else {
    stryCov_9fa48("21355");
    if (stryMutAct_9fa48("21358") ? (!meta.config.stripEXIFData || path.endsWith('.gif')) && path.endsWith('.svg') : stryMutAct_9fa48("21357") ? false : stryMutAct_9fa48("21356") ? true : (stryCov_9fa48("21356", "21357", "21358"), (stryMutAct_9fa48("21360") ? !meta.config.stripEXIFData && path.endsWith('.gif') : stryMutAct_9fa48("21359") ? false : (stryCov_9fa48("21359", "21360"), (stryMutAct_9fa48("21361") ? meta.config.stripEXIFData : (stryCov_9fa48("21361"), !meta.config.stripEXIFData)) || (stryMutAct_9fa48("21362") ? path.startsWith('.gif') : (stryCov_9fa48("21362"), path.endsWith(stryMutAct_9fa48("21363") ? "" : (stryCov_9fa48("21363"), '.gif')))))) || (stryMutAct_9fa48("21364") ? path.startsWith('.svg') : (stryCov_9fa48("21364"), path.endsWith(stryMutAct_9fa48("21365") ? "" : (stryCov_9fa48("21365"), '.svg')))))) {
      if (stryMutAct_9fa48("21366")) {
        {}
      } else {
        stryCov_9fa48("21366");
        return;
      }
    }
    try {
      if (stryMutAct_9fa48("21367")) {
        {}
      } else {
        stryCov_9fa48("21367");
        if (stryMutAct_9fa48("21369") ? false : stryMutAct_9fa48("21368") ? true : (stryCov_9fa48("21368", "21369"), plugins.hooks.hasListeners(stryMutAct_9fa48("21370") ? "" : (stryCov_9fa48("21370"), 'filter:image.stripEXIF')))) {
          if (stryMutAct_9fa48("21371")) {
            {}
          } else {
            stryCov_9fa48("21371");
            await plugins.hooks.fire(stryMutAct_9fa48("21372") ? "" : (stryCov_9fa48("21372"), 'filter:image.stripEXIF'), stryMutAct_9fa48("21373") ? {} : (stryCov_9fa48("21373"), {
              path: path
            }));
            return;
          }
        }
        const buffer = await fs.promises.readFile(path);
        const sharp = requireSharp();
        await sharp(buffer, stryMutAct_9fa48("21374") ? {} : (stryCov_9fa48("21374"), {
          failOnError: stryMutAct_9fa48("21375") ? false : (stryCov_9fa48("21375"), true)
        })).rotate().toFile(path);
      }
    } catch (err) {
      if (stryMutAct_9fa48("21376")) {
        {}
      } else {
        stryCov_9fa48("21376");
        winston.error(err.stack);
      }
    }
  }
};
image.checkDimensions = async function (path) {
  if (stryMutAct_9fa48("21377")) {
    {}
  } else {
    stryCov_9fa48("21377");
    const meta = require('./meta');
    const result = await image.size(path);
    if (stryMutAct_9fa48("21380") ? result.width > meta.config.rejectImageWidth && result.height > meta.config.rejectImageHeight : stryMutAct_9fa48("21379") ? false : stryMutAct_9fa48("21378") ? true : (stryCov_9fa48("21378", "21379", "21380"), (stryMutAct_9fa48("21383") ? result.width <= meta.config.rejectImageWidth : stryMutAct_9fa48("21382") ? result.width >= meta.config.rejectImageWidth : stryMutAct_9fa48("21381") ? false : (stryCov_9fa48("21381", "21382", "21383"), result.width > meta.config.rejectImageWidth)) || (stryMutAct_9fa48("21386") ? result.height <= meta.config.rejectImageHeight : stryMutAct_9fa48("21385") ? result.height >= meta.config.rejectImageHeight : stryMutAct_9fa48("21384") ? false : (stryCov_9fa48("21384", "21385", "21386"), result.height > meta.config.rejectImageHeight)))) {
      if (stryMutAct_9fa48("21387")) {
        {}
      } else {
        stryCov_9fa48("21387");
        throw new Error(stryMutAct_9fa48("21388") ? "" : (stryCov_9fa48("21388"), '[[error:invalid-image-dimensions]]'));
      }
    }
    return result;
  }
};
image.convertImageToBase64 = async function (path) {
  if (stryMutAct_9fa48("21389")) {
    {}
  } else {
    stryCov_9fa48("21389");
    return await fs.promises.readFile(path, stryMutAct_9fa48("21390") ? "" : (stryCov_9fa48("21390"), 'base64'));
  }
};
image.mimeFromBase64 = function (imageData) {
  if (stryMutAct_9fa48("21391")) {
    {}
  } else {
    stryCov_9fa48("21391");
    return stryMutAct_9fa48("21392") ? imageData : (stryCov_9fa48("21392"), imageData.slice(5, stryMutAct_9fa48("21393") ? imageData.indexOf('base64') + 1 : (stryCov_9fa48("21393"), imageData.indexOf(stryMutAct_9fa48("21394") ? "" : (stryCov_9fa48("21394"), 'base64')) - 1)));
  }
};
image.extensionFromBase64 = function (imageData) {
  if (stryMutAct_9fa48("21395")) {
    {}
  } else {
    stryCov_9fa48("21395");
    return file.typeToExtension(image.mimeFromBase64(imageData));
  }
};
image.writeImageDataToTempFile = async function (imageData) {
  if (stryMutAct_9fa48("21396")) {
    {}
  } else {
    stryCov_9fa48("21396");
    const filename = crypto.createHash(stryMutAct_9fa48("21397") ? "" : (stryCov_9fa48("21397"), 'md5')).update(imageData).digest(stryMutAct_9fa48("21398") ? "" : (stryCov_9fa48("21398"), 'hex'));
    const type = image.mimeFromBase64(imageData);
    const extension = file.typeToExtension(type);
    const filepath = path.join(os.tmpdir(), stryMutAct_9fa48("21399") ? filename - extension : (stryCov_9fa48("21399"), filename + extension));
    const buffer = Buffer.from(stryMutAct_9fa48("21400") ? imageData : (stryCov_9fa48("21400"), imageData.slice(stryMutAct_9fa48("21401") ? imageData.indexOf('base64') - 7 : (stryCov_9fa48("21401"), imageData.indexOf(stryMutAct_9fa48("21402") ? "" : (stryCov_9fa48("21402"), 'base64')) + 7))), stryMutAct_9fa48("21403") ? "" : (stryCov_9fa48("21403"), 'base64'));
    await fs.promises.writeFile(filepath, buffer, stryMutAct_9fa48("21404") ? {} : (stryCov_9fa48("21404"), {
      encoding: stryMutAct_9fa48("21405") ? "" : (stryCov_9fa48("21405"), 'base64')
    }));
    return filepath;
  }
};
image.sizeFromBase64 = function (imageData) {
  if (stryMutAct_9fa48("21406")) {
    {}
  } else {
    stryCov_9fa48("21406");
    return Buffer.from(stryMutAct_9fa48("21407") ? imageData : (stryCov_9fa48("21407"), imageData.slice(stryMutAct_9fa48("21408") ? imageData.indexOf('base64') - 7 : (stryCov_9fa48("21408"), imageData.indexOf(stryMutAct_9fa48("21409") ? "" : (stryCov_9fa48("21409"), 'base64')) + 7))), stryMutAct_9fa48("21410") ? "" : (stryCov_9fa48("21410"), 'base64')).length;
  }
};
image.uploadImage = async function (filename, folder, imageData) {
  if (stryMutAct_9fa48("21411")) {
    {}
  } else {
    stryCov_9fa48("21411");
    if (stryMutAct_9fa48("21413") ? false : stryMutAct_9fa48("21412") ? true : (stryCov_9fa48("21412", "21413"), plugins.hooks.hasListeners(stryMutAct_9fa48("21414") ? "" : (stryCov_9fa48("21414"), 'filter:uploadImage')))) {
      if (stryMutAct_9fa48("21415")) {
        {}
      } else {
        stryCov_9fa48("21415");
        return await plugins.hooks.fire(stryMutAct_9fa48("21416") ? "" : (stryCov_9fa48("21416"), 'filter:uploadImage'), stryMutAct_9fa48("21417") ? {} : (stryCov_9fa48("21417"), {
          image: imageData,
          uid: imageData.uid,
          folder: folder
        }));
      }
    }
    await image.isFileTypeAllowed(imageData.path);
    const upload = await file.saveFileToLocal(filename, folder, imageData.path);
    return stryMutAct_9fa48("21418") ? {} : (stryCov_9fa48("21418"), {
      url: upload.url,
      path: upload.path,
      name: imageData.name
    });
  }
};
require('./promisify')(image);