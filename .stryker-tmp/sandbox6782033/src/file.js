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
const fs = require('fs');
const nconf = require('nconf');
const path = require('path');
const winston = require('winston');
const mkdirp = require('mkdirp');
const mime = require('mime');
const graceful = require('graceful-fs');
const slugify = require('./slugify');
graceful.gracefulify(fs);
const file = module.exports;
file.saveFileToLocal = async function (filename, folder, tempPath) {
  if (stryMutAct_9fa48("18597")) {
    {}
  } else {
    stryCov_9fa48("18597");
    /*
     * remarkable doesn't allow spaces in hyperlinks, once that's fixed, remove this.
     */
    filename = filename.split(stryMutAct_9fa48("18598") ? "" : (stryCov_9fa48("18598"), '.')).map(stryMutAct_9fa48("18599") ? () => undefined : (stryCov_9fa48("18599"), name => slugify(name))).join(stryMutAct_9fa48("18600") ? "" : (stryCov_9fa48("18600"), '.'));
    const uploadPath = path.join(nconf.get(stryMutAct_9fa48("18601") ? "" : (stryCov_9fa48("18601"), 'upload_path')), folder, filename);
    if (stryMutAct_9fa48("18604") ? false : stryMutAct_9fa48("18603") ? true : stryMutAct_9fa48("18602") ? uploadPath.startsWith(nconf.get('upload_path')) : (stryCov_9fa48("18602", "18603", "18604"), !(stryMutAct_9fa48("18605") ? uploadPath.endsWith(nconf.get('upload_path')) : (stryCov_9fa48("18605"), uploadPath.startsWith(nconf.get(stryMutAct_9fa48("18606") ? "" : (stryCov_9fa48("18606"), 'upload_path'))))))) {
      if (stryMutAct_9fa48("18607")) {
        {}
      } else {
        stryCov_9fa48("18607");
        throw new Error(stryMutAct_9fa48("18608") ? "" : (stryCov_9fa48("18608"), '[[error:invalid-path]]'));
      }
    }
    winston.verbose(stryMutAct_9fa48("18609") ? `` : (stryCov_9fa48("18609"), `Saving file ${filename} to : ${uploadPath}`));
    await mkdirp(path.dirname(uploadPath));
    await fs.promises.copyFile(tempPath, uploadPath);
    return stryMutAct_9fa48("18610") ? {} : (stryCov_9fa48("18610"), {
      url: stryMutAct_9fa48("18611") ? `` : (stryCov_9fa48("18611"), `/assets/uploads/${folder ? stryMutAct_9fa48("18612") ? `` : (stryCov_9fa48("18612"), `${folder}/`) : stryMutAct_9fa48("18613") ? "Stryker was here!" : (stryCov_9fa48("18613"), '')}${filename}`),
      path: uploadPath
    });
  }
};
file.base64ToLocal = async function (imageData, uploadPath) {
  if (stryMutAct_9fa48("18614")) {
    {}
  } else {
    stryCov_9fa48("18614");
    const buffer = Buffer.from(stryMutAct_9fa48("18615") ? imageData : (stryCov_9fa48("18615"), imageData.slice(stryMutAct_9fa48("18616") ? imageData.indexOf('base64') - 7 : (stryCov_9fa48("18616"), imageData.indexOf(stryMutAct_9fa48("18617") ? "" : (stryCov_9fa48("18617"), 'base64')) + 7))), stryMutAct_9fa48("18618") ? "" : (stryCov_9fa48("18618"), 'base64'));
    uploadPath = path.join(nconf.get(stryMutAct_9fa48("18619") ? "" : (stryCov_9fa48("18619"), 'upload_path')), uploadPath);
    await fs.promises.writeFile(uploadPath, buffer, stryMutAct_9fa48("18620") ? {} : (stryCov_9fa48("18620"), {
      encoding: stryMutAct_9fa48("18621") ? "" : (stryCov_9fa48("18621"), 'base64')
    }));
    return uploadPath;
  }
};

// https://stackoverflow.com/a/31205878/583363
file.appendToFileName = function (filename, string) {
  if (stryMutAct_9fa48("18622")) {
    {}
  } else {
    stryCov_9fa48("18622");
    const dotIndex = filename.lastIndexOf(stryMutAct_9fa48("18623") ? "" : (stryCov_9fa48("18623"), '.'));
    if (stryMutAct_9fa48("18626") ? dotIndex !== -1 : stryMutAct_9fa48("18625") ? false : stryMutAct_9fa48("18624") ? true : (stryCov_9fa48("18624", "18625", "18626"), dotIndex === (stryMutAct_9fa48("18627") ? +1 : (stryCov_9fa48("18627"), -1)))) {
      if (stryMutAct_9fa48("18628")) {
        {}
      } else {
        stryCov_9fa48("18628");
        return stryMutAct_9fa48("18629") ? filename - string : (stryCov_9fa48("18629"), filename + string);
      }
    }
    return stryMutAct_9fa48("18630") ? filename.substring(0, dotIndex) + string - filename.substring(dotIndex) : (stryCov_9fa48("18630"), (stryMutAct_9fa48("18631") ? filename.substring(0, dotIndex) - string : (stryCov_9fa48("18631"), (stryMutAct_9fa48("18632") ? filename : (stryCov_9fa48("18632"), filename.substring(0, dotIndex))) + string)) + (stryMutAct_9fa48("18633") ? filename : (stryCov_9fa48("18633"), filename.substring(dotIndex))));
  }
};
file.allowedExtensions = function () {
  if (stryMutAct_9fa48("18634")) {
    {}
  } else {
    stryCov_9fa48("18634");
    const meta = require('./meta');
    let allowedExtensions = stryMutAct_9fa48("18635") ? meta.config.allowedFileExtensions || '' : (stryCov_9fa48("18635"), (stryMutAct_9fa48("18638") ? meta.config.allowedFileExtensions && '' : stryMutAct_9fa48("18637") ? false : stryMutAct_9fa48("18636") ? true : (stryCov_9fa48("18636", "18637", "18638"), meta.config.allowedFileExtensions || (stryMutAct_9fa48("18639") ? "Stryker was here!" : (stryCov_9fa48("18639"), '')))).trim());
    if (stryMutAct_9fa48("18642") ? false : stryMutAct_9fa48("18641") ? true : stryMutAct_9fa48("18640") ? allowedExtensions : (stryCov_9fa48("18640", "18641", "18642"), !allowedExtensions)) {
      if (stryMutAct_9fa48("18643")) {
        {}
      } else {
        stryCov_9fa48("18643");
        return stryMutAct_9fa48("18644") ? ["Stryker was here"] : (stryCov_9fa48("18644"), []);
      }
    }
    allowedExtensions = allowedExtensions.split(stryMutAct_9fa48("18645") ? "" : (stryCov_9fa48("18645"), ','));
    allowedExtensions = stryMutAct_9fa48("18646") ? allowedExtensions.map(extension => {
      extension = extension.trim();
      if (!extension.startsWith('.')) {
        extension = `.${extension}`;
      }
      return extension.toLowerCase();
    }) : (stryCov_9fa48("18646"), allowedExtensions.filter(Boolean).map(extension => {
      if (stryMutAct_9fa48("18647")) {
        {}
      } else {
        stryCov_9fa48("18647");
        extension = stryMutAct_9fa48("18648") ? extension : (stryCov_9fa48("18648"), extension.trim());
        if (stryMutAct_9fa48("18651") ? false : stryMutAct_9fa48("18650") ? true : stryMutAct_9fa48("18649") ? extension.startsWith('.') : (stryCov_9fa48("18649", "18650", "18651"), !(stryMutAct_9fa48("18652") ? extension.endsWith('.') : (stryCov_9fa48("18652"), extension.startsWith(stryMutAct_9fa48("18653") ? "" : (stryCov_9fa48("18653"), '.')))))) {
          if (stryMutAct_9fa48("18654")) {
            {}
          } else {
            stryCov_9fa48("18654");
            extension = stryMutAct_9fa48("18655") ? `` : (stryCov_9fa48("18655"), `.${extension}`);
          }
        }
        return stryMutAct_9fa48("18656") ? extension.toUpperCase() : (stryCov_9fa48("18656"), extension.toLowerCase());
      }
    }));
    if (stryMutAct_9fa48("18659") ? allowedExtensions.includes('.jpg') || !allowedExtensions.includes('.jpeg') : stryMutAct_9fa48("18658") ? false : stryMutAct_9fa48("18657") ? true : (stryCov_9fa48("18657", "18658", "18659"), allowedExtensions.includes(stryMutAct_9fa48("18660") ? "" : (stryCov_9fa48("18660"), '.jpg')) && (stryMutAct_9fa48("18661") ? allowedExtensions.includes('.jpeg') : (stryCov_9fa48("18661"), !allowedExtensions.includes(stryMutAct_9fa48("18662") ? "" : (stryCov_9fa48("18662"), '.jpeg')))))) {
      if (stryMutAct_9fa48("18663")) {
        {}
      } else {
        stryCov_9fa48("18663");
        allowedExtensions.push(stryMutAct_9fa48("18664") ? "" : (stryCov_9fa48("18664"), '.jpeg'));
      }
    }
    return allowedExtensions;
  }
};
file.exists = async function (path) {
  if (stryMutAct_9fa48("18665")) {
    {}
  } else {
    stryCov_9fa48("18665");
    try {
      if (stryMutAct_9fa48("18666")) {
        {}
      } else {
        stryCov_9fa48("18666");
        await fs.promises.stat(path);
      }
    } catch (err) {
      if (stryMutAct_9fa48("18667")) {
        {}
      } else {
        stryCov_9fa48("18667");
        if (stryMutAct_9fa48("18670") ? err.code !== 'ENOENT' : stryMutAct_9fa48("18669") ? false : stryMutAct_9fa48("18668") ? true : (stryCov_9fa48("18668", "18669", "18670"), err.code === (stryMutAct_9fa48("18671") ? "" : (stryCov_9fa48("18671"), 'ENOENT')))) {
          if (stryMutAct_9fa48("18672")) {
            {}
          } else {
            stryCov_9fa48("18672");
            return stryMutAct_9fa48("18673") ? true : (stryCov_9fa48("18673"), false);
          }
        }
        throw err;
      }
    }
    return stryMutAct_9fa48("18674") ? false : (stryCov_9fa48("18674"), true);
  }
};
file.existsSync = function (path) {
  if (stryMutAct_9fa48("18675")) {
    {}
  } else {
    stryCov_9fa48("18675");
    try {
      if (stryMutAct_9fa48("18676")) {
        {}
      } else {
        stryCov_9fa48("18676");
        fs.statSync(path);
      }
    } catch (err) {
      if (stryMutAct_9fa48("18677")) {
        {}
      } else {
        stryCov_9fa48("18677");
        if (stryMutAct_9fa48("18680") ? err.code !== 'ENOENT' : stryMutAct_9fa48("18679") ? false : stryMutAct_9fa48("18678") ? true : (stryCov_9fa48("18678", "18679", "18680"), err.code === (stryMutAct_9fa48("18681") ? "" : (stryCov_9fa48("18681"), 'ENOENT')))) {
          if (stryMutAct_9fa48("18682")) {
            {}
          } else {
            stryCov_9fa48("18682");
            return stryMutAct_9fa48("18683") ? true : (stryCov_9fa48("18683"), false);
          }
        }
        throw err;
      }
    }
    return stryMutAct_9fa48("18684") ? false : (stryCov_9fa48("18684"), true);
  }
};
file.delete = async function (path) {
  if (stryMutAct_9fa48("18685")) {
    {}
  } else {
    stryCov_9fa48("18685");
    if (stryMutAct_9fa48("18688") ? false : stryMutAct_9fa48("18687") ? true : stryMutAct_9fa48("18686") ? path : (stryCov_9fa48("18686", "18687", "18688"), !path)) {
      if (stryMutAct_9fa48("18689")) {
        {}
      } else {
        stryCov_9fa48("18689");
        return;
      }
    }
    try {
      if (stryMutAct_9fa48("18690")) {
        {}
      } else {
        stryCov_9fa48("18690");
        await fs.promises.unlink(path);
      }
    } catch (err) {
      if (stryMutAct_9fa48("18691")) {
        {}
      } else {
        stryCov_9fa48("18691");
        if (stryMutAct_9fa48("18694") ? err.code !== 'ENOENT' : stryMutAct_9fa48("18693") ? false : stryMutAct_9fa48("18692") ? true : (stryCov_9fa48("18692", "18693", "18694"), err.code === (stryMutAct_9fa48("18695") ? "" : (stryCov_9fa48("18695"), 'ENOENT')))) {
          if (stryMutAct_9fa48("18696")) {
            {}
          } else {
            stryCov_9fa48("18696");
            winston.verbose(stryMutAct_9fa48("18697") ? `` : (stryCov_9fa48("18697"), `[file] Attempted to delete non-existent file: ${path}`));
            return;
          }
        }
        winston.warn(err);
      }
    }
  }
};
file.link = async function link(filePath, destPath, relative) {
  if (stryMutAct_9fa48("18698")) {
    {}
  } else {
    stryCov_9fa48("18698");
    if (stryMutAct_9fa48("18701") ? relative || process.platform !== 'win32' : stryMutAct_9fa48("18700") ? false : stryMutAct_9fa48("18699") ? true : (stryCov_9fa48("18699", "18700", "18701"), relative && (stryMutAct_9fa48("18703") ? process.platform === 'win32' : stryMutAct_9fa48("18702") ? true : (stryCov_9fa48("18702", "18703"), process.platform !== (stryMutAct_9fa48("18704") ? "" : (stryCov_9fa48("18704"), 'win32')))))) {
      if (stryMutAct_9fa48("18705")) {
        {}
      } else {
        stryCov_9fa48("18705");
        filePath = path.relative(path.dirname(destPath), filePath);
      }
    }
    if (stryMutAct_9fa48("18708") ? process.platform !== 'win32' : stryMutAct_9fa48("18707") ? false : stryMutAct_9fa48("18706") ? true : (stryCov_9fa48("18706", "18707", "18708"), process.platform === (stryMutAct_9fa48("18709") ? "" : (stryCov_9fa48("18709"), 'win32')))) {
      if (stryMutAct_9fa48("18710")) {
        {}
      } else {
        stryCov_9fa48("18710");
        await fs.promises.link(filePath, destPath);
      }
    } else {
      if (stryMutAct_9fa48("18711")) {
        {}
      } else {
        stryCov_9fa48("18711");
        await fs.promises.symlink(filePath, destPath, stryMutAct_9fa48("18712") ? "" : (stryCov_9fa48("18712"), 'file'));
      }
    }
  }
};
file.linkDirs = async function linkDirs(sourceDir, destDir, relative) {
  if (stryMutAct_9fa48("18713")) {
    {}
  } else {
    stryCov_9fa48("18713");
    if (stryMutAct_9fa48("18716") ? relative || process.platform !== 'win32' : stryMutAct_9fa48("18715") ? false : stryMutAct_9fa48("18714") ? true : (stryCov_9fa48("18714", "18715", "18716"), relative && (stryMutAct_9fa48("18718") ? process.platform === 'win32' : stryMutAct_9fa48("18717") ? true : (stryCov_9fa48("18717", "18718"), process.platform !== (stryMutAct_9fa48("18719") ? "" : (stryCov_9fa48("18719"), 'win32')))))) {
      if (stryMutAct_9fa48("18720")) {
        {}
      } else {
        stryCov_9fa48("18720");
        sourceDir = path.relative(path.dirname(destDir), sourceDir);
      }
    }
    const type = (stryMutAct_9fa48("18723") ? process.platform !== 'win32' : stryMutAct_9fa48("18722") ? false : stryMutAct_9fa48("18721") ? true : (stryCov_9fa48("18721", "18722", "18723"), process.platform === (stryMutAct_9fa48("18724") ? "" : (stryCov_9fa48("18724"), 'win32')))) ? stryMutAct_9fa48("18725") ? "" : (stryCov_9fa48("18725"), 'junction') : stryMutAct_9fa48("18726") ? "" : (stryCov_9fa48("18726"), 'dir');
    await fs.promises.symlink(sourceDir, destDir, type);
  }
};
file.typeToExtension = function (type) {
  if (stryMutAct_9fa48("18727")) {
    {}
  } else {
    stryCov_9fa48("18727");
    let extension = stryMutAct_9fa48("18728") ? "Stryker was here!" : (stryCov_9fa48("18728"), '');
    if (stryMutAct_9fa48("18730") ? false : stryMutAct_9fa48("18729") ? true : (stryCov_9fa48("18729", "18730"), type)) {
      if (stryMutAct_9fa48("18731")) {
        {}
      } else {
        stryCov_9fa48("18731");
        extension = stryMutAct_9fa48("18732") ? `` : (stryCov_9fa48("18732"), `.${mime.getExtension(type)}`);
      }
    }
    return extension;
  }
};

// Adapted from http://stackoverflow.com/questions/5827612/node-js-fs-readdir-recursive-directory-search
file.walk = async function (dir) {
  if (stryMutAct_9fa48("18733")) {
    {}
  } else {
    stryCov_9fa48("18733");
    const subdirs = await fs.promises.readdir(dir);
    const files = await Promise.all(subdirs.map(async subdir => {
      if (stryMutAct_9fa48("18734")) {
        {}
      } else {
        stryCov_9fa48("18734");
        const res = path.resolve(dir, subdir);
        return (await fs.promises.stat(res)).isDirectory() ? file.walk(res) : res;
      }
    }));
    return files.reduce(stryMutAct_9fa48("18735") ? () => undefined : (stryCov_9fa48("18735"), (a, f) => a.concat(f)), stryMutAct_9fa48("18736") ? ["Stryker was here"] : (stryCov_9fa48("18736"), []));
  }
};
require('./promisify')(file);