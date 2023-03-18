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
const fs = require('fs');
const meta = require('../../meta');
const posts = require('../../posts');
const file = require('../../file');
const image = require('../../image');
const plugins = require('../../plugins');
const pagination = require('../../pagination');
const allowedImageTypes = stryMutAct_9fa48("7542") ? [] : (stryCov_9fa48("7542"), [stryMutAct_9fa48("7543") ? "" : (stryCov_9fa48("7543"), 'image/png'), stryMutAct_9fa48("7544") ? "" : (stryCov_9fa48("7544"), 'image/jpeg'), stryMutAct_9fa48("7545") ? "" : (stryCov_9fa48("7545"), 'image/pjpeg'), stryMutAct_9fa48("7546") ? "" : (stryCov_9fa48("7546"), 'image/jpg'), stryMutAct_9fa48("7547") ? "" : (stryCov_9fa48("7547"), 'image/gif'), stryMutAct_9fa48("7548") ? "" : (stryCov_9fa48("7548"), 'image/svg+xml')]);
const uploadsController = module.exports;
uploadsController.get = async function (req, res, next) {
  if (stryMutAct_9fa48("7549")) {
    {}
  } else {
    stryCov_9fa48("7549");
    const currentFolder = path.join(nconf.get(stryMutAct_9fa48("7550") ? "" : (stryCov_9fa48("7550"), 'upload_path')), stryMutAct_9fa48("7553") ? req.query.dir && '' : stryMutAct_9fa48("7552") ? false : stryMutAct_9fa48("7551") ? true : (stryCov_9fa48("7551", "7552", "7553"), req.query.dir || (stryMutAct_9fa48("7554") ? "Stryker was here!" : (stryCov_9fa48("7554"), ''))));
    if (stryMutAct_9fa48("7557") ? false : stryMutAct_9fa48("7556") ? true : stryMutAct_9fa48("7555") ? currentFolder.startsWith(nconf.get('upload_path')) : (stryCov_9fa48("7555", "7556", "7557"), !(stryMutAct_9fa48("7558") ? currentFolder.endsWith(nconf.get('upload_path')) : (stryCov_9fa48("7558"), currentFolder.startsWith(nconf.get(stryMutAct_9fa48("7559") ? "" : (stryCov_9fa48("7559"), 'upload_path'))))))) {
      if (stryMutAct_9fa48("7560")) {
        {}
      } else {
        stryCov_9fa48("7560");
        return next(new Error(stryMutAct_9fa48("7561") ? "" : (stryCov_9fa48("7561"), '[[error:invalid-path]]')));
      }
    }
    const itemsPerPage = 20;
    const page = stryMutAct_9fa48("7564") ? parseInt(req.query.page, 10) && 1 : stryMutAct_9fa48("7563") ? false : stryMutAct_9fa48("7562") ? true : (stryCov_9fa48("7562", "7563", "7564"), parseInt(req.query.page, 10) || 1);
    try {
      if (stryMutAct_9fa48("7565")) {
        {}
      } else {
        stryCov_9fa48("7565");
        let files = await fs.promises.readdir(currentFolder);
        files = stryMutAct_9fa48("7566") ? files : (stryCov_9fa48("7566"), files.filter(stryMutAct_9fa48("7567") ? () => undefined : (stryCov_9fa48("7567"), filename => stryMutAct_9fa48("7570") ? filename === '.gitignore' : stryMutAct_9fa48("7569") ? false : stryMutAct_9fa48("7568") ? true : (stryCov_9fa48("7568", "7569", "7570"), filename !== (stryMutAct_9fa48("7571") ? "" : (stryCov_9fa48("7571"), '.gitignore'))))));
        const itemCount = files.length;
        const start = Math.max(0, stryMutAct_9fa48("7572") ? (page - 1) / itemsPerPage : (stryCov_9fa48("7572"), (stryMutAct_9fa48("7573") ? page + 1 : (stryCov_9fa48("7573"), page - 1)) * itemsPerPage));
        const stop = stryMutAct_9fa48("7574") ? start - itemsPerPage : (stryCov_9fa48("7574"), start + itemsPerPage);
        files = stryMutAct_9fa48("7575") ? files : (stryCov_9fa48("7575"), files.slice(start, stop));
        files = await filesToData(currentFolder, files);

        // Float directories to the top
        stryMutAct_9fa48("7576") ? files : (stryCov_9fa48("7576"), files.sort((a, b) => {
          if (stryMutAct_9fa48("7577")) {
            {}
          } else {
            stryCov_9fa48("7577");
            if (stryMutAct_9fa48("7580") ? a.isDirectory || !b.isDirectory : stryMutAct_9fa48("7579") ? false : stryMutAct_9fa48("7578") ? true : (stryCov_9fa48("7578", "7579", "7580"), a.isDirectory && (stryMutAct_9fa48("7581") ? b.isDirectory : (stryCov_9fa48("7581"), !b.isDirectory)))) {
              if (stryMutAct_9fa48("7582")) {
                {}
              } else {
                stryCov_9fa48("7582");
                return stryMutAct_9fa48("7583") ? +1 : (stryCov_9fa48("7583"), -1);
              }
            } else if (stryMutAct_9fa48("7586") ? !a.isDirectory || b.isDirectory : stryMutAct_9fa48("7585") ? false : stryMutAct_9fa48("7584") ? true : (stryCov_9fa48("7584", "7585", "7586"), (stryMutAct_9fa48("7587") ? a.isDirectory : (stryCov_9fa48("7587"), !a.isDirectory)) && b.isDirectory)) {
              if (stryMutAct_9fa48("7588")) {
                {}
              } else {
                stryCov_9fa48("7588");
                return 1;
              }
            } else if (stryMutAct_9fa48("7591") ? !a.isDirectory || !b.isDirectory : stryMutAct_9fa48("7590") ? false : stryMutAct_9fa48("7589") ? true : (stryCov_9fa48("7589", "7590", "7591"), (stryMutAct_9fa48("7592") ? a.isDirectory : (stryCov_9fa48("7592"), !a.isDirectory)) && (stryMutAct_9fa48("7593") ? b.isDirectory : (stryCov_9fa48("7593"), !b.isDirectory)))) {
              if (stryMutAct_9fa48("7594")) {
                {}
              } else {
                stryCov_9fa48("7594");
                return (stryMutAct_9fa48("7598") ? a.mtime >= b.mtime : stryMutAct_9fa48("7597") ? a.mtime <= b.mtime : stryMutAct_9fa48("7596") ? false : stryMutAct_9fa48("7595") ? true : (stryCov_9fa48("7595", "7596", "7597", "7598"), a.mtime < b.mtime)) ? stryMutAct_9fa48("7599") ? +1 : (stryCov_9fa48("7599"), -1) : 1;
              }
            }
            return 0;
          }
        }));

        // Add post usage info if in /files
        if (stryMutAct_9fa48("7601") ? false : stryMutAct_9fa48("7600") ? true : (stryCov_9fa48("7600", "7601"), (stryMutAct_9fa48("7602") ? [] : (stryCov_9fa48("7602"), [stryMutAct_9fa48("7603") ? "" : (stryCov_9fa48("7603"), 'files'), stryMutAct_9fa48("7604") ? "" : (stryCov_9fa48("7604"), '/files'), stryMutAct_9fa48("7605") ? "" : (stryCov_9fa48("7605"), '/files/')])).includes(req.query.dir))) {
          if (stryMutAct_9fa48("7606")) {
            {}
          } else {
            stryCov_9fa48("7606");
            const usage = await posts.uploads.getUsage(files);
            files.forEach((file, idx) => {
              if (stryMutAct_9fa48("7607")) {
                {}
              } else {
                stryCov_9fa48("7607");
                file.inPids = usage[idx].map(stryMutAct_9fa48("7608") ? () => undefined : (stryCov_9fa48("7608"), pid => parseInt(pid, 10)));
              }
            });
          }
        }
        res.render(stryMutAct_9fa48("7609") ? "" : (stryCov_9fa48("7609"), 'admin/manage/uploads'), stryMutAct_9fa48("7610") ? {} : (stryCov_9fa48("7610"), {
          currentFolder: currentFolder.replace(nconf.get(stryMutAct_9fa48("7611") ? "" : (stryCov_9fa48("7611"), 'upload_path')), stryMutAct_9fa48("7612") ? "Stryker was here!" : (stryCov_9fa48("7612"), '')),
          showPids: stryMutAct_9fa48("7615") ? files.length || files[0].hasOwnProperty('inPids') : stryMutAct_9fa48("7614") ? false : stryMutAct_9fa48("7613") ? true : (stryCov_9fa48("7613", "7614", "7615"), files.length && files[0].hasOwnProperty(stryMutAct_9fa48("7616") ? "" : (stryCov_9fa48("7616"), 'inPids'))),
          files: files,
          breadcrumbs: buildBreadcrumbs(currentFolder),
          pagination: pagination.create(page, Math.ceil(stryMutAct_9fa48("7617") ? itemCount * itemsPerPage : (stryCov_9fa48("7617"), itemCount / itemsPerPage)), req.query)
        }));
      }
    } catch (err) {
      if (stryMutAct_9fa48("7618")) {
        {}
      } else {
        stryCov_9fa48("7618");
        next(err);
      }
    }
  }
};
function buildBreadcrumbs(currentFolder) {
  if (stryMutAct_9fa48("7619")) {
    {}
  } else {
    stryCov_9fa48("7619");
    const crumbs = stryMutAct_9fa48("7620") ? ["Stryker was here"] : (stryCov_9fa48("7620"), []);
    const parts = currentFolder.replace(nconf.get(stryMutAct_9fa48("7621") ? "" : (stryCov_9fa48("7621"), 'upload_path')), stryMutAct_9fa48("7622") ? "Stryker was here!" : (stryCov_9fa48("7622"), '')).split(path.sep);
    let currentPath = stryMutAct_9fa48("7623") ? "Stryker was here!" : (stryCov_9fa48("7623"), '');
    parts.forEach(part => {
      if (stryMutAct_9fa48("7624")) {
        {}
      } else {
        stryCov_9fa48("7624");
        const dir = path.join(currentPath, part);
        crumbs.push(stryMutAct_9fa48("7625") ? {} : (stryCov_9fa48("7625"), {
          text: stryMutAct_9fa48("7628") ? part && 'Uploads' : stryMutAct_9fa48("7627") ? false : stryMutAct_9fa48("7626") ? true : (stryCov_9fa48("7626", "7627", "7628"), part || (stryMutAct_9fa48("7629") ? "" : (stryCov_9fa48("7629"), 'Uploads'))),
          url: part ? stryMutAct_9fa48("7630") ? `` : (stryCov_9fa48("7630"), `${nconf.get(stryMutAct_9fa48("7631") ? "" : (stryCov_9fa48("7631"), 'relative_path'))}/admin/manage/uploads?dir=${dir}`) : stryMutAct_9fa48("7632") ? `` : (stryCov_9fa48("7632"), `${nconf.get(stryMutAct_9fa48("7633") ? "" : (stryCov_9fa48("7633"), 'relative_path'))}/admin/manage/uploads`)
        }));
        currentPath = dir;
      }
    });
    return crumbs;
  }
}
async function filesToData(currentDir, files) {
  if (stryMutAct_9fa48("7634")) {
    {}
  } else {
    stryCov_9fa48("7634");
    return await Promise.all(files.map(stryMutAct_9fa48("7635") ? () => undefined : (stryCov_9fa48("7635"), file => getFileData(currentDir, file))));
  }
}
async function getFileData(currentDir, file) {
  if (stryMutAct_9fa48("7636")) {
    {}
  } else {
    stryCov_9fa48("7636");
    const pathToFile = path.join(currentDir, file);
    const stat = await fs.promises.stat(pathToFile);
    let filesInDir = stryMutAct_9fa48("7637") ? ["Stryker was here"] : (stryCov_9fa48("7637"), []);
    if (stryMutAct_9fa48("7639") ? false : stryMutAct_9fa48("7638") ? true : (stryCov_9fa48("7638", "7639"), stat.isDirectory())) {
      if (stryMutAct_9fa48("7640")) {
        {}
      } else {
        stryCov_9fa48("7640");
        filesInDir = await fs.promises.readdir(pathToFile);
      }
    }
    const url = stryMutAct_9fa48("7641") ? `` : (stryCov_9fa48("7641"), `${stryMutAct_9fa48("7642") ? nconf.get('upload_url') - currentDir.replace(nconf.get('upload_path'), '') : (stryCov_9fa48("7642"), nconf.get(stryMutAct_9fa48("7643") ? "" : (stryCov_9fa48("7643"), 'upload_url')) + currentDir.replace(nconf.get(stryMutAct_9fa48("7644") ? "" : (stryCov_9fa48("7644"), 'upload_path')), stryMutAct_9fa48("7645") ? "Stryker was here!" : (stryCov_9fa48("7645"), '')))}/${file}`);
    return stryMutAct_9fa48("7646") ? {} : (stryCov_9fa48("7646"), {
      name: file,
      path: pathToFile.replace(path.join(nconf.get(stryMutAct_9fa48("7647") ? "" : (stryCov_9fa48("7647"), 'upload_path')), stryMutAct_9fa48("7648") ? "" : (stryCov_9fa48("7648"), '/')), stryMutAct_9fa48("7649") ? "Stryker was here!" : (stryCov_9fa48("7649"), '')),
      url: url,
      fileCount: Math.max(0, stryMutAct_9fa48("7650") ? filesInDir.length + 1 : (stryCov_9fa48("7650"), filesInDir.length - 1)),
      // ignore .gitignore
      size: stat.size,
      sizeHumanReadable: stryMutAct_9fa48("7651") ? `` : (stryCov_9fa48("7651"), `${(stryMutAct_9fa48("7652") ? stat.size * 1024 : (stryCov_9fa48("7652"), stat.size / 1024)).toFixed(1)}KiB`),
      isDirectory: stat.isDirectory(),
      isFile: stat.isFile(),
      mtime: stat.mtimeMs
    });
  }
}
uploadsController.uploadCategoryPicture = async function (req, res, next) {
  if (stryMutAct_9fa48("7653")) {
    {}
  } else {
    stryCov_9fa48("7653");
    const uploadedFile = req.files.files[0];
    let params = null;
    try {
      if (stryMutAct_9fa48("7654")) {
        {}
      } else {
        stryCov_9fa48("7654");
        params = JSON.parse(req.body.params);
      }
    } catch (e) {
      if (stryMutAct_9fa48("7655")) {
        {}
      } else {
        stryCov_9fa48("7655");
        file.delete(uploadedFile.path);
        return next(new Error(stryMutAct_9fa48("7656") ? "" : (stryCov_9fa48("7656"), '[[error:invalid-json]]')));
      }
    }
    if (stryMutAct_9fa48("7658") ? false : stryMutAct_9fa48("7657") ? true : (stryCov_9fa48("7657", "7658"), validateUpload(res, uploadedFile, allowedImageTypes))) {
      if (stryMutAct_9fa48("7659")) {
        {}
      } else {
        stryCov_9fa48("7659");
        const filename = stryMutAct_9fa48("7660") ? `` : (stryCov_9fa48("7660"), `category-${params.cid}${path.extname(uploadedFile.name)}`);
        await uploadImage(filename, stryMutAct_9fa48("7661") ? "" : (stryCov_9fa48("7661"), 'category'), uploadedFile, req, res, next);
      }
    }
  }
};
uploadsController.uploadFavicon = async function (req, res, next) {
  if (stryMutAct_9fa48("7662")) {
    {}
  } else {
    stryCov_9fa48("7662");
    const uploadedFile = req.files.files[0];
    const allowedTypes = stryMutAct_9fa48("7663") ? [] : (stryCov_9fa48("7663"), [stryMutAct_9fa48("7664") ? "" : (stryCov_9fa48("7664"), 'image/x-icon'), stryMutAct_9fa48("7665") ? "" : (stryCov_9fa48("7665"), 'image/vnd.microsoft.icon')]);
    if (stryMutAct_9fa48("7667") ? false : stryMutAct_9fa48("7666") ? true : (stryCov_9fa48("7666", "7667"), validateUpload(res, uploadedFile, allowedTypes))) {
      if (stryMutAct_9fa48("7668")) {
        {}
      } else {
        stryCov_9fa48("7668");
        try {
          if (stryMutAct_9fa48("7669")) {
            {}
          } else {
            stryCov_9fa48("7669");
            const imageObj = await file.saveFileToLocal(stryMutAct_9fa48("7670") ? "" : (stryCov_9fa48("7670"), 'favicon.ico'), stryMutAct_9fa48("7671") ? "" : (stryCov_9fa48("7671"), 'system'), uploadedFile.path);
            res.json(stryMutAct_9fa48("7672") ? [] : (stryCov_9fa48("7672"), [stryMutAct_9fa48("7673") ? {} : (stryCov_9fa48("7673"), {
              name: uploadedFile.name,
              url: imageObj.url
            })]));
          }
        } catch (err) {
          if (stryMutAct_9fa48("7674")) {
            {}
          } else {
            stryCov_9fa48("7674");
            next(err);
          }
        } finally {
          if (stryMutAct_9fa48("7675")) {
            {}
          } else {
            stryCov_9fa48("7675");
            file.delete(uploadedFile.path);
          }
        }
      }
    }
  }
};
uploadsController.uploadTouchIcon = async function (req, res, next) {
  if (stryMutAct_9fa48("7676")) {
    {}
  } else {
    stryCov_9fa48("7676");
    const uploadedFile = req.files.files[0];
    const allowedTypes = stryMutAct_9fa48("7677") ? [] : (stryCov_9fa48("7677"), [stryMutAct_9fa48("7678") ? "" : (stryCov_9fa48("7678"), 'image/png')]);
    const sizes = stryMutAct_9fa48("7679") ? [] : (stryCov_9fa48("7679"), [36, 48, 72, 96, 144, 192, 512]);
    if (stryMutAct_9fa48("7681") ? false : stryMutAct_9fa48("7680") ? true : (stryCov_9fa48("7680", "7681"), validateUpload(res, uploadedFile, allowedTypes))) {
      if (stryMutAct_9fa48("7682")) {
        {}
      } else {
        stryCov_9fa48("7682");
        try {
          if (stryMutAct_9fa48("7683")) {
            {}
          } else {
            stryCov_9fa48("7683");
            const imageObj = await file.saveFileToLocal(stryMutAct_9fa48("7684") ? "" : (stryCov_9fa48("7684"), 'touchicon-orig.png'), stryMutAct_9fa48("7685") ? "" : (stryCov_9fa48("7685"), 'system'), uploadedFile.path);
            // Resize the image into squares for use as touch icons at various DPIs
            for (const size of sizes) {
              if (stryMutAct_9fa48("7686")) {
                {}
              } else {
                stryCov_9fa48("7686");
                /* eslint-disable no-await-in-loop */
                await image.resizeImage(stryMutAct_9fa48("7687") ? {} : (stryCov_9fa48("7687"), {
                  path: uploadedFile.path,
                  target: path.join(nconf.get(stryMutAct_9fa48("7688") ? "" : (stryCov_9fa48("7688"), 'upload_path')), stryMutAct_9fa48("7689") ? "" : (stryCov_9fa48("7689"), 'system'), stryMutAct_9fa48("7690") ? `` : (stryCov_9fa48("7690"), `touchicon-${size}.png`)),
                  width: size,
                  height: size
                }));
              }
            }
            res.json(stryMutAct_9fa48("7691") ? [] : (stryCov_9fa48("7691"), [stryMutAct_9fa48("7692") ? {} : (stryCov_9fa48("7692"), {
              name: uploadedFile.name,
              url: imageObj.url
            })]));
          }
        } catch (err) {
          if (stryMutAct_9fa48("7693")) {
            {}
          } else {
            stryCov_9fa48("7693");
            next(err);
          }
        } finally {
          if (stryMutAct_9fa48("7694")) {
            {}
          } else {
            stryCov_9fa48("7694");
            file.delete(uploadedFile.path);
          }
        }
      }
    }
  }
};
uploadsController.uploadMaskableIcon = async function (req, res, next) {
  if (stryMutAct_9fa48("7695")) {
    {}
  } else {
    stryCov_9fa48("7695");
    const uploadedFile = req.files.files[0];
    const allowedTypes = stryMutAct_9fa48("7696") ? [] : (stryCov_9fa48("7696"), [stryMutAct_9fa48("7697") ? "" : (stryCov_9fa48("7697"), 'image/png')]);
    if (stryMutAct_9fa48("7699") ? false : stryMutAct_9fa48("7698") ? true : (stryCov_9fa48("7698", "7699"), validateUpload(res, uploadedFile, allowedTypes))) {
      if (stryMutAct_9fa48("7700")) {
        {}
      } else {
        stryCov_9fa48("7700");
        try {
          if (stryMutAct_9fa48("7701")) {
            {}
          } else {
            stryCov_9fa48("7701");
            const imageObj = await file.saveFileToLocal(stryMutAct_9fa48("7702") ? "" : (stryCov_9fa48("7702"), 'maskableicon-orig.png'), stryMutAct_9fa48("7703") ? "" : (stryCov_9fa48("7703"), 'system'), uploadedFile.path);
            res.json(stryMutAct_9fa48("7704") ? [] : (stryCov_9fa48("7704"), [stryMutAct_9fa48("7705") ? {} : (stryCov_9fa48("7705"), {
              name: uploadedFile.name,
              url: imageObj.url
            })]));
          }
        } catch (err) {
          if (stryMutAct_9fa48("7706")) {
            {}
          } else {
            stryCov_9fa48("7706");
            next(err);
          }
        } finally {
          if (stryMutAct_9fa48("7707")) {
            {}
          } else {
            stryCov_9fa48("7707");
            file.delete(uploadedFile.path);
          }
        }
      }
    }
  }
};
uploadsController.uploadLogo = async function (req, res, next) {
  if (stryMutAct_9fa48("7708")) {
    {}
  } else {
    stryCov_9fa48("7708");
    await upload(stryMutAct_9fa48("7709") ? "" : (stryCov_9fa48("7709"), 'site-logo'), req, res, next);
  }
};
uploadsController.uploadFile = async function (req, res, next) {
  if (stryMutAct_9fa48("7710")) {
    {}
  } else {
    stryCov_9fa48("7710");
    const uploadedFile = req.files.files[0];
    let params;
    try {
      if (stryMutAct_9fa48("7711")) {
        {}
      } else {
        stryCov_9fa48("7711");
        params = JSON.parse(req.body.params);
      }
    } catch (e) {
      if (stryMutAct_9fa48("7712")) {
        {}
      } else {
        stryCov_9fa48("7712");
        file.delete(uploadedFile.path);
        return next(new Error(stryMutAct_9fa48("7713") ? "" : (stryCov_9fa48("7713"), '[[error:invalid-json]]')));
      }
    }
    try {
      if (stryMutAct_9fa48("7714")) {
        {}
      } else {
        stryCov_9fa48("7714");
        const data = await file.saveFileToLocal(uploadedFile.name, params.folder, uploadedFile.path);
        res.json(stryMutAct_9fa48("7715") ? [] : (stryCov_9fa48("7715"), [stryMutAct_9fa48("7716") ? {} : (stryCov_9fa48("7716"), {
          url: data.url
        })]));
      }
    } catch (err) {
      if (stryMutAct_9fa48("7717")) {
        {}
      } else {
        stryCov_9fa48("7717");
        next(err);
      }
    } finally {
      if (stryMutAct_9fa48("7718")) {
        {}
      } else {
        stryCov_9fa48("7718");
        file.delete(uploadedFile.path);
      }
    }
  }
};
uploadsController.uploadDefaultAvatar = async function (req, res, next) {
  if (stryMutAct_9fa48("7719")) {
    {}
  } else {
    stryCov_9fa48("7719");
    await upload(stryMutAct_9fa48("7720") ? "" : (stryCov_9fa48("7720"), 'avatar-default'), req, res, next);
  }
};
uploadsController.uploadOgImage = async function (req, res, next) {
  if (stryMutAct_9fa48("7721")) {
    {}
  } else {
    stryCov_9fa48("7721");
    await upload(stryMutAct_9fa48("7722") ? "" : (stryCov_9fa48("7722"), 'og:image'), req, res, next);
  }
};
async function upload(name, req, res, next) {
  if (stryMutAct_9fa48("7723")) {
    {}
  } else {
    stryCov_9fa48("7723");
    const uploadedFile = req.files.files[0];
    if (stryMutAct_9fa48("7725") ? false : stryMutAct_9fa48("7724") ? true : (stryCov_9fa48("7724", "7725"), validateUpload(res, uploadedFile, allowedImageTypes))) {
      if (stryMutAct_9fa48("7726")) {
        {}
      } else {
        stryCov_9fa48("7726");
        const filename = stryMutAct_9fa48("7727") ? name - path.extname(uploadedFile.name) : (stryCov_9fa48("7727"), name + path.extname(uploadedFile.name));
        await uploadImage(filename, stryMutAct_9fa48("7728") ? "" : (stryCov_9fa48("7728"), 'system'), uploadedFile, req, res, next);
      }
    }
  }
}
function validateUpload(res, uploadedFile, allowedTypes) {
  if (stryMutAct_9fa48("7729")) {
    {}
  } else {
    stryCov_9fa48("7729");
    if (stryMutAct_9fa48("7732") ? false : stryMutAct_9fa48("7731") ? true : stryMutAct_9fa48("7730") ? allowedTypes.includes(uploadedFile.type) : (stryCov_9fa48("7730", "7731", "7732"), !allowedTypes.includes(uploadedFile.type))) {
      if (stryMutAct_9fa48("7733")) {
        {}
      } else {
        stryCov_9fa48("7733");
        file.delete(uploadedFile.path);
        res.json(stryMutAct_9fa48("7734") ? {} : (stryCov_9fa48("7734"), {
          error: stryMutAct_9fa48("7735") ? `` : (stryCov_9fa48("7735"), `[[error:invalid-image-type, ${allowedTypes.join(stryMutAct_9fa48("7736") ? "" : (stryCov_9fa48("7736"), '&#44; '))}]]`)
        }));
        return stryMutAct_9fa48("7737") ? true : (stryCov_9fa48("7737"), false);
      }
    }
    return stryMutAct_9fa48("7738") ? false : (stryCov_9fa48("7738"), true);
  }
}
async function uploadImage(filename, folder, uploadedFile, req, res, next) {
  if (stryMutAct_9fa48("7739")) {
    {}
  } else {
    stryCov_9fa48("7739");
    let imageData;
    try {
      if (stryMutAct_9fa48("7740")) {
        {}
      } else {
        stryCov_9fa48("7740");
        if (stryMutAct_9fa48("7742") ? false : stryMutAct_9fa48("7741") ? true : (stryCov_9fa48("7741", "7742"), plugins.hooks.hasListeners(stryMutAct_9fa48("7743") ? "" : (stryCov_9fa48("7743"), 'filter:uploadImage')))) {
          if (stryMutAct_9fa48("7744")) {
            {}
          } else {
            stryCov_9fa48("7744");
            imageData = await plugins.hooks.fire(stryMutAct_9fa48("7745") ? "" : (stryCov_9fa48("7745"), 'filter:uploadImage'), stryMutAct_9fa48("7746") ? {} : (stryCov_9fa48("7746"), {
              image: uploadedFile,
              uid: req.uid,
              folder: folder
            }));
          }
        } else {
          if (stryMutAct_9fa48("7747")) {
            {}
          } else {
            stryCov_9fa48("7747");
            imageData = await file.saveFileToLocal(filename, folder, uploadedFile.path);
          }
        }
        if (stryMutAct_9fa48("7750") ? path.basename(filename, path.extname(filename)) === 'site-logo' || folder === 'system' : stryMutAct_9fa48("7749") ? false : stryMutAct_9fa48("7748") ? true : (stryCov_9fa48("7748", "7749", "7750"), (stryMutAct_9fa48("7752") ? path.basename(filename, path.extname(filename)) !== 'site-logo' : stryMutAct_9fa48("7751") ? true : (stryCov_9fa48("7751", "7752"), path.basename(filename, path.extname(filename)) === (stryMutAct_9fa48("7753") ? "" : (stryCov_9fa48("7753"), 'site-logo')))) && (stryMutAct_9fa48("7755") ? folder !== 'system' : stryMutAct_9fa48("7754") ? true : (stryCov_9fa48("7754", "7755"), folder === (stryMutAct_9fa48("7756") ? "" : (stryCov_9fa48("7756"), 'system')))))) {
          if (stryMutAct_9fa48("7757")) {
            {}
          } else {
            stryCov_9fa48("7757");
            const uploadPath = path.join(nconf.get(stryMutAct_9fa48("7758") ? "" : (stryCov_9fa48("7758"), 'upload_path')), folder, stryMutAct_9fa48("7759") ? "" : (stryCov_9fa48("7759"), 'site-logo-x50.png'));
            await image.resizeImage(stryMutAct_9fa48("7760") ? {} : (stryCov_9fa48("7760"), {
              path: uploadedFile.path,
              target: uploadPath,
              height: 50
            }));
            await meta.configs.set(stryMutAct_9fa48("7761") ? "" : (stryCov_9fa48("7761"), 'brand:emailLogo'), path.join(nconf.get(stryMutAct_9fa48("7762") ? "" : (stryCov_9fa48("7762"), 'upload_url')), stryMutAct_9fa48("7763") ? "" : (stryCov_9fa48("7763"), 'system/site-logo-x50.png')));
            const size = await image.size(uploadedFile.path);
            await meta.configs.setMultiple(stryMutAct_9fa48("7764") ? {} : (stryCov_9fa48("7764"), {
              'brand:logo:width': size.width,
              'brand:logo:height': size.height
            }));
          }
        } else if (stryMutAct_9fa48("7767") ? path.basename(filename, path.extname(filename)) === 'og:image' || folder === 'system' : stryMutAct_9fa48("7766") ? false : stryMutAct_9fa48("7765") ? true : (stryCov_9fa48("7765", "7766", "7767"), (stryMutAct_9fa48("7769") ? path.basename(filename, path.extname(filename)) !== 'og:image' : stryMutAct_9fa48("7768") ? true : (stryCov_9fa48("7768", "7769"), path.basename(filename, path.extname(filename)) === (stryMutAct_9fa48("7770") ? "" : (stryCov_9fa48("7770"), 'og:image')))) && (stryMutAct_9fa48("7772") ? folder !== 'system' : stryMutAct_9fa48("7771") ? true : (stryCov_9fa48("7771", "7772"), folder === (stryMutAct_9fa48("7773") ? "" : (stryCov_9fa48("7773"), 'system')))))) {
          if (stryMutAct_9fa48("7774")) {
            {}
          } else {
            stryCov_9fa48("7774");
            const size = await image.size(uploadedFile.path);
            await meta.configs.setMultiple(stryMutAct_9fa48("7775") ? {} : (stryCov_9fa48("7775"), {
              'og:image:width': size.width,
              'og:image:height': size.height
            }));
          }
        }
        res.json(stryMutAct_9fa48("7776") ? [] : (stryCov_9fa48("7776"), [stryMutAct_9fa48("7777") ? {} : (stryCov_9fa48("7777"), {
          name: uploadedFile.name,
          url: (stryMutAct_9fa48("7778") ? imageData.url.endsWith('http') : (stryCov_9fa48("7778"), imageData.url.startsWith(stryMutAct_9fa48("7779") ? "" : (stryCov_9fa48("7779"), 'http')))) ? imageData.url : stryMutAct_9fa48("7780") ? nconf.get('relative_path') - imageData.url : (stryCov_9fa48("7780"), nconf.get(stryMutAct_9fa48("7781") ? "" : (stryCov_9fa48("7781"), 'relative_path')) + imageData.url)
        })]));
      }
    } catch (err) {
      if (stryMutAct_9fa48("7782")) {
        {}
      } else {
        stryCov_9fa48("7782");
        next(err);
      }
    } finally {
      if (stryMutAct_9fa48("7783")) {
        {}
      } else {
        stryCov_9fa48("7783");
        file.delete(uploadedFile.path);
      }
    }
  }
}