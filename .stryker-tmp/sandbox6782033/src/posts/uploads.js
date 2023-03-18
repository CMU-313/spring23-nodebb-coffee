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
const nconf = require('nconf');
const fs = require('fs').promises;
const crypto = require('crypto');
const path = require('path');
const winston = require('winston');
const mime = require('mime');
const validator = require('validator');
const cronJob = require('cron').CronJob;
const chalk = require('chalk');
const db = require('../database');
const image = require('../image');
const user = require('../user');
const topics = require('../topics');
const file = require('../file');
const meta = require('../meta');
module.exports = function (Posts) {
  if (stryMutAct_9fa48("30045")) {
    {}
  } else {
    stryCov_9fa48("30045");
    Posts.uploads = {};
    const md5 = stryMutAct_9fa48("30046") ? () => undefined : (stryCov_9fa48("30046"), (() => {
      const md5 = filename => crypto.createHash(stryMutAct_9fa48("30047") ? "" : (stryCov_9fa48("30047"), 'md5')).update(filename).digest(stryMutAct_9fa48("30048") ? "" : (stryCov_9fa48("30048"), 'hex'));
      return md5;
    })());
    const pathPrefix = path.join(nconf.get(stryMutAct_9fa48("30049") ? "" : (stryCov_9fa48("30049"), 'upload_path')));
    const searchRegex = stryMutAct_9fa48("30056") ? /\/assets\/uploads\/(files\/[^\s")]+\.?[\W]*)/g : stryMutAct_9fa48("30055") ? /\/assets\/uploads\/(files\/[^\s")]+\.?[^\w]*)/g : stryMutAct_9fa48("30054") ? /\/assets\/uploads\/(files\/[^\s")]+\.?[\w])/g : stryMutAct_9fa48("30053") ? /\/assets\/uploads\/(files\/[^\s")]+\.[\w]*)/g : stryMutAct_9fa48("30052") ? /\/assets\/uploads\/(files\/[^\S")]+\.?[\w]*)/g : stryMutAct_9fa48("30051") ? /\/assets\/uploads\/(files\/[\s")]+\.?[\w]*)/g : stryMutAct_9fa48("30050") ? /\/assets\/uploads\/(files\/[^\s")]\.?[\w]*)/g : (stryCov_9fa48("30050", "30051", "30052", "30053", "30054", "30055", "30056"), /\/assets\/uploads\/(files\/[^\s")]+\.?[\w]*)/g);
    const _getFullPath = stryMutAct_9fa48("30057") ? () => undefined : (stryCov_9fa48("30057"), (() => {
      const _getFullPath = relativePath => path.join(pathPrefix, relativePath);
      return _getFullPath;
    })());
    const _filterValidPaths = stryMutAct_9fa48("30058") ? () => undefined : (stryCov_9fa48("30058"), (() => {
      const _filterValidPaths = async filePaths => stryMutAct_9fa48("30059") ? await Promise.all(filePaths.map(async filePath => {
        const fullPath = _getFullPath(filePath);
        return fullPath.startsWith(pathPrefix) && (await file.exists(fullPath)) ? filePath : false;
      })) : (stryCov_9fa48("30059"), (await Promise.all(filePaths.map(async filePath => {
        if (stryMutAct_9fa48("30060")) {
          {}
        } else {
          stryCov_9fa48("30060");
          const fullPath = _getFullPath(filePath);
          return (stryMutAct_9fa48("30063") ? fullPath.startsWith(pathPrefix) || (await file.exists(fullPath)) : stryMutAct_9fa48("30062") ? false : stryMutAct_9fa48("30061") ? true : (stryCov_9fa48("30061", "30062", "30063"), (stryMutAct_9fa48("30064") ? fullPath.endsWith(pathPrefix) : (stryCov_9fa48("30064"), fullPath.startsWith(pathPrefix))) && (await file.exists(fullPath)))) ? filePath : stryMutAct_9fa48("30065") ? true : (stryCov_9fa48("30065"), false);
        }
      }))).filter(Boolean));
      return _filterValidPaths;
    })());
    const runJobs = nconf.get(stryMutAct_9fa48("30066") ? "" : (stryCov_9fa48("30066"), 'runJobs'));
    if (stryMutAct_9fa48("30068") ? false : stryMutAct_9fa48("30067") ? true : (stryCov_9fa48("30067", "30068"), runJobs)) {
      if (stryMutAct_9fa48("30069")) {
        {}
      } else {
        stryCov_9fa48("30069");
        new cronJob(stryMutAct_9fa48("30070") ? "" : (stryCov_9fa48("30070"), '0 2 * * 0'), async () => {
          if (stryMutAct_9fa48("30071")) {
            {}
          } else {
            stryCov_9fa48("30071");
            const orphans = await Posts.uploads.cleanOrphans();
            if (stryMutAct_9fa48("30073") ? false : stryMutAct_9fa48("30072") ? true : (stryCov_9fa48("30072", "30073"), orphans.length)) {
              if (stryMutAct_9fa48("30074")) {
                {}
              } else {
                stryCov_9fa48("30074");
                winston.info(stryMutAct_9fa48("30075") ? `` : (stryCov_9fa48("30075"), `[posts/uploads] Deleting ${orphans.length} orphaned uploads...`));
                orphans.forEach(relPath => {
                  if (stryMutAct_9fa48("30076")) {
                    {}
                  } else {
                    stryCov_9fa48("30076");
                    process.stdout.write(stryMutAct_9fa48("30077") ? `` : (stryCov_9fa48("30077"), `${chalk.red(stryMutAct_9fa48("30078") ? "" : (stryCov_9fa48("30078"), '  - '))} ${relPath}`));
                  }
                });
              }
            }
          }
        }, null, stryMutAct_9fa48("30079") ? false : (stryCov_9fa48("30079"), true));
      }
    }
    Posts.uploads.sync = async function (pid) {
      if (stryMutAct_9fa48("30080")) {
        {}
      } else {
        stryCov_9fa48("30080");
        // Scans a post's content and updates sorted set of uploads

        const [content, currentUploads, isMainPost] = await Promise.all(stryMutAct_9fa48("30081") ? [] : (stryCov_9fa48("30081"), [Posts.getPostField(pid, stryMutAct_9fa48("30082") ? "" : (stryCov_9fa48("30082"), 'content')), Posts.uploads.list(pid), Posts.isMain(pid)]));

        // Extract upload file paths from post content
        let match = searchRegex.exec(content);
        const uploads = stryMutAct_9fa48("30083") ? ["Stryker was here"] : (stryCov_9fa48("30083"), []);
        while (stryMutAct_9fa48("30084") ? false : (stryCov_9fa48("30084"), match)) {
          if (stryMutAct_9fa48("30085")) {
            {}
          } else {
            stryCov_9fa48("30085");
            uploads.push(match[1].replace(stryMutAct_9fa48("30086") ? "" : (stryCov_9fa48("30086"), '-resized'), stryMutAct_9fa48("30087") ? "Stryker was here!" : (stryCov_9fa48("30087"), '')));
            match = searchRegex.exec(content);
          }
        }

        // Main posts can contain topic thumbs, which are also tracked by pid
        if (stryMutAct_9fa48("30089") ? false : stryMutAct_9fa48("30088") ? true : (stryCov_9fa48("30088", "30089"), isMainPost)) {
          if (stryMutAct_9fa48("30090")) {
            {}
          } else {
            stryCov_9fa48("30090");
            const tid = await Posts.getPostField(pid, stryMutAct_9fa48("30091") ? "" : (stryCov_9fa48("30091"), 'tid'));
            let thumbs = await topics.thumbs.get(tid);
            const replacePath = path.posix.join(stryMutAct_9fa48("30092") ? `` : (stryCov_9fa48("30092"), `${nconf.get(stryMutAct_9fa48("30093") ? "" : (stryCov_9fa48("30093"), 'relative_path'))}${nconf.get(stryMutAct_9fa48("30094") ? "" : (stryCov_9fa48("30094"), 'upload_url'))}/`));
            thumbs = stryMutAct_9fa48("30095") ? thumbs.map(thumb => thumb.url.replace(replacePath, '')) : (stryCov_9fa48("30095"), thumbs.map(stryMutAct_9fa48("30096") ? () => undefined : (stryCov_9fa48("30096"), thumb => thumb.url.replace(replacePath, stryMutAct_9fa48("30097") ? "Stryker was here!" : (stryCov_9fa48("30097"), '')))).filter(stryMutAct_9fa48("30098") ? () => undefined : (stryCov_9fa48("30098"), path => stryMutAct_9fa48("30099") ? validator.isURL(path, {
              require_protocol: true
            }) : (stryCov_9fa48("30099"), !validator.isURL(path, stryMutAct_9fa48("30100") ? {} : (stryCov_9fa48("30100"), {
              require_protocol: stryMutAct_9fa48("30101") ? false : (stryCov_9fa48("30101"), true)
            }))))));
            uploads.push(...thumbs);
          }
        }

        // Create add/remove sets
        const add = stryMutAct_9fa48("30102") ? uploads : (stryCov_9fa48("30102"), uploads.filter(stryMutAct_9fa48("30103") ? () => undefined : (stryCov_9fa48("30103"), path => stryMutAct_9fa48("30104") ? currentUploads.includes(path) : (stryCov_9fa48("30104"), !currentUploads.includes(path)))));
        const remove = stryMutAct_9fa48("30105") ? currentUploads : (stryCov_9fa48("30105"), currentUploads.filter(stryMutAct_9fa48("30106") ? () => undefined : (stryCov_9fa48("30106"), path => stryMutAct_9fa48("30107") ? uploads.includes(path) : (stryCov_9fa48("30107"), !uploads.includes(path)))));
        await Promise.all(stryMutAct_9fa48("30108") ? [] : (stryCov_9fa48("30108"), [Posts.uploads.associate(pid, add), Posts.uploads.dissociate(pid, remove)]));
      }
    };
    Posts.uploads.list = async function (pid) {
      if (stryMutAct_9fa48("30109")) {
        {}
      } else {
        stryCov_9fa48("30109");
        return await db.getSortedSetMembers(stryMutAct_9fa48("30110") ? `` : (stryCov_9fa48("30110"), `post:${pid}:uploads`));
      }
    };
    Posts.uploads.listWithSizes = async function (pid) {
      if (stryMutAct_9fa48("30111")) {
        {}
      } else {
        stryCov_9fa48("30111");
        const paths = await Posts.uploads.list(pid);
        const sizes = stryMutAct_9fa48("30114") ? (await db.getObjects(paths.map(path => `upload:${md5(path)}`))) && [] : stryMutAct_9fa48("30113") ? false : stryMutAct_9fa48("30112") ? true : (stryCov_9fa48("30112", "30113", "30114"), (await db.getObjects(paths.map(stryMutAct_9fa48("30115") ? () => undefined : (stryCov_9fa48("30115"), path => stryMutAct_9fa48("30116") ? `` : (stryCov_9fa48("30116"), `upload:${md5(path)}`))))) || (stryMutAct_9fa48("30117") ? ["Stryker was here"] : (stryCov_9fa48("30117"), [])));
        return sizes.map(stryMutAct_9fa48("30118") ? () => undefined : (stryCov_9fa48("30118"), (sizeObj, idx) => stryMutAct_9fa48("30119") ? {} : (stryCov_9fa48("30119"), {
          ...sizeObj,
          name: paths[idx]
        })));
      }
    };
    Posts.uploads.getOrphans = async () => {
      if (stryMutAct_9fa48("30120")) {
        {}
      } else {
        stryCov_9fa48("30120");
        let files = await fs.readdir(_getFullPath(stryMutAct_9fa48("30121") ? "" : (stryCov_9fa48("30121"), '/files')));
        files = stryMutAct_9fa48("30122") ? files : (stryCov_9fa48("30122"), files.filter(stryMutAct_9fa48("30123") ? () => undefined : (stryCov_9fa48("30123"), filename => stryMutAct_9fa48("30126") ? filename === '.gitignore' : stryMutAct_9fa48("30125") ? false : stryMutAct_9fa48("30124") ? true : (stryCov_9fa48("30124", "30125", "30126"), filename !== (stryMutAct_9fa48("30127") ? "" : (stryCov_9fa48("30127"), '.gitignore'))))));

        // Exclude non-timestamped files (e.g. group covers; see gh#10783/gh#10705)
        const tsPrefix = stryMutAct_9fa48("30130") ? /^\D{13}-/ : stryMutAct_9fa48("30129") ? /^\d-/ : stryMutAct_9fa48("30128") ? /\d{13}-/ : (stryCov_9fa48("30128", "30129", "30130"), /^\d{13}-/);
        files = stryMutAct_9fa48("30131") ? files : (stryCov_9fa48("30131"), files.filter(stryMutAct_9fa48("30132") ? () => undefined : (stryCov_9fa48("30132"), filename => tsPrefix.test(filename))));
        files = await Promise.all(files.map(stryMutAct_9fa48("30133") ? () => undefined : (stryCov_9fa48("30133"), async filename => (await Posts.uploads.isOrphan(stryMutAct_9fa48("30134") ? `` : (stryCov_9fa48("30134"), `files/${filename}`))) ? stryMutAct_9fa48("30135") ? `` : (stryCov_9fa48("30135"), `files/${filename}`) : null)));
        files = stryMutAct_9fa48("30136") ? files : (stryCov_9fa48("30136"), files.filter(Boolean));
        return files;
      }
    };
    Posts.uploads.cleanOrphans = async () => {
      if (stryMutAct_9fa48("30137")) {
        {}
      } else {
        stryCov_9fa48("30137");
        const now = Date.now();
        const expiration = stryMutAct_9fa48("30138") ? now + 1000 * 60 * 60 * 24 * meta.config.orphanExpiryDays : (stryCov_9fa48("30138"), now - (stryMutAct_9fa48("30139") ? 1000 * 60 * 60 * 24 / meta.config.orphanExpiryDays : (stryCov_9fa48("30139"), (stryMutAct_9fa48("30140") ? 1000 * 60 * 60 / 24 : (stryCov_9fa48("30140"), (stryMutAct_9fa48("30141") ? 1000 * 60 / 60 : (stryCov_9fa48("30141"), (stryMutAct_9fa48("30142") ? 1000 / 60 : (stryCov_9fa48("30142"), 1000 * 60)) * 60)) * 24)) * meta.config.orphanExpiryDays)));
        const days = meta.config.orphanExpiryDays;
        if (stryMutAct_9fa48("30145") ? false : stryMutAct_9fa48("30144") ? true : stryMutAct_9fa48("30143") ? days : (stryCov_9fa48("30143", "30144", "30145"), !days)) {
          if (stryMutAct_9fa48("30146")) {
            {}
          } else {
            stryCov_9fa48("30146");
            return stryMutAct_9fa48("30147") ? ["Stryker was here"] : (stryCov_9fa48("30147"), []);
          }
        }
        let orphans = await Posts.uploads.getOrphans();
        orphans = await Promise.all(orphans.map(async relPath => {
          if (stryMutAct_9fa48("30148")) {
            {}
          } else {
            stryCov_9fa48("30148");
            const {
              mtimeMs
            } = await fs.stat(_getFullPath(relPath));
            return (stryMutAct_9fa48("30152") ? mtimeMs >= expiration : stryMutAct_9fa48("30151") ? mtimeMs <= expiration : stryMutAct_9fa48("30150") ? false : stryMutAct_9fa48("30149") ? true : (stryCov_9fa48("30149", "30150", "30151", "30152"), mtimeMs < expiration)) ? relPath : null;
          }
        }));
        orphans = stryMutAct_9fa48("30153") ? orphans : (stryCov_9fa48("30153"), orphans.filter(Boolean));

        // Note: no await. Deletion not guaranteed by method end.
        orphans.forEach(relPath => {
          if (stryMutAct_9fa48("30154")) {
            {}
          } else {
            stryCov_9fa48("30154");
            file.delete(_getFullPath(relPath));
          }
        });
        return orphans;
      }
    };
    Posts.uploads.isOrphan = async function (filePath) {
      if (stryMutAct_9fa48("30155")) {
        {}
      } else {
        stryCov_9fa48("30155");
        const length = await db.sortedSetCard(stryMutAct_9fa48("30156") ? `` : (stryCov_9fa48("30156"), `upload:${md5(filePath)}:pids`));
        return stryMutAct_9fa48("30159") ? length !== 0 : stryMutAct_9fa48("30158") ? false : stryMutAct_9fa48("30157") ? true : (stryCov_9fa48("30157", "30158", "30159"), length === 0);
      }
    };
    Posts.uploads.getUsage = async function (filePaths) {
      if (stryMutAct_9fa48("30160")) {
        {}
      } else {
        stryCov_9fa48("30160");
        // Given an array of file names, determines which pids they are used in
        if (stryMutAct_9fa48("30163") ? false : stryMutAct_9fa48("30162") ? true : stryMutAct_9fa48("30161") ? Array.isArray(filePaths) : (stryCov_9fa48("30161", "30162", "30163"), !Array.isArray(filePaths))) {
          if (stryMutAct_9fa48("30164")) {
            {}
          } else {
            stryCov_9fa48("30164");
            filePaths = stryMutAct_9fa48("30165") ? [] : (stryCov_9fa48("30165"), [filePaths]);
          }
        }
        const keys = filePaths.map(stryMutAct_9fa48("30166") ? () => undefined : (stryCov_9fa48("30166"), fileObj => stryMutAct_9fa48("30167") ? `` : (stryCov_9fa48("30167"), `upload:${md5(fileObj.path.replace(stryMutAct_9fa48("30168") ? "" : (stryCov_9fa48("30168"), '-resized'), stryMutAct_9fa48("30169") ? "Stryker was here!" : (stryCov_9fa48("30169"), '')))}:pids`)));
        return await Promise.all(keys.map(stryMutAct_9fa48("30170") ? () => undefined : (stryCov_9fa48("30170"), k => db.getSortedSetRange(k, 0, stryMutAct_9fa48("30171") ? +1 : (stryCov_9fa48("30171"), -1)))));
      }
    };
    Posts.uploads.associate = async function (pid, filePaths) {
      if (stryMutAct_9fa48("30172")) {
        {}
      } else {
        stryCov_9fa48("30172");
        // Adds an upload to a post's sorted set of uploads
        filePaths = (stryMutAct_9fa48("30173") ? Array.isArray(filePaths) : (stryCov_9fa48("30173"), !Array.isArray(filePaths))) ? stryMutAct_9fa48("30174") ? [] : (stryCov_9fa48("30174"), [filePaths]) : filePaths;
        if (stryMutAct_9fa48("30177") ? false : stryMutAct_9fa48("30176") ? true : stryMutAct_9fa48("30175") ? filePaths.length : (stryCov_9fa48("30175", "30176", "30177"), !filePaths.length)) {
          if (stryMutAct_9fa48("30178")) {
            {}
          } else {
            stryCov_9fa48("30178");
            return;
          }
        }

        // Only process files that exist and are within uploads directory
        filePaths = await _filterValidPaths(filePaths);
        const now = Date.now();
        const scores = filePaths.map(stryMutAct_9fa48("30179") ? () => undefined : (stryCov_9fa48("30179"), () => now));
        const bulkAdd = filePaths.map(stryMutAct_9fa48("30180") ? () => undefined : (stryCov_9fa48("30180"), path => stryMutAct_9fa48("30181") ? [] : (stryCov_9fa48("30181"), [stryMutAct_9fa48("30182") ? `` : (stryCov_9fa48("30182"), `upload:${md5(path)}:pids`), now, pid])));
        await Promise.all(stryMutAct_9fa48("30183") ? [] : (stryCov_9fa48("30183"), [db.sortedSetAdd(stryMutAct_9fa48("30184") ? `` : (stryCov_9fa48("30184"), `post:${pid}:uploads`), scores, filePaths), db.sortedSetAddBulk(bulkAdd), Posts.uploads.saveSize(filePaths)]));
      }
    };
    Posts.uploads.dissociate = async function (pid, filePaths) {
      if (stryMutAct_9fa48("30185")) {
        {}
      } else {
        stryCov_9fa48("30185");
        // Removes an upload from a post's sorted set of uploads
        filePaths = (stryMutAct_9fa48("30186") ? Array.isArray(filePaths) : (stryCov_9fa48("30186"), !Array.isArray(filePaths))) ? stryMutAct_9fa48("30187") ? [] : (stryCov_9fa48("30187"), [filePaths]) : filePaths;
        if (stryMutAct_9fa48("30190") ? false : stryMutAct_9fa48("30189") ? true : stryMutAct_9fa48("30188") ? filePaths.length : (stryCov_9fa48("30188", "30189", "30190"), !filePaths.length)) {
          if (stryMutAct_9fa48("30191")) {
            {}
          } else {
            stryCov_9fa48("30191");
            return;
          }
        }
        const bulkRemove = filePaths.map(stryMutAct_9fa48("30192") ? () => undefined : (stryCov_9fa48("30192"), path => stryMutAct_9fa48("30193") ? [] : (stryCov_9fa48("30193"), [stryMutAct_9fa48("30194") ? `` : (stryCov_9fa48("30194"), `upload:${md5(path)}:pids`), pid])));
        const promises = stryMutAct_9fa48("30195") ? [] : (stryCov_9fa48("30195"), [db.sortedSetRemove(stryMutAct_9fa48("30196") ? `` : (stryCov_9fa48("30196"), `post:${pid}:uploads`), filePaths), db.sortedSetRemoveBulk(bulkRemove)]);
        await Promise.all(promises);
        if (stryMutAct_9fa48("30199") ? false : stryMutAct_9fa48("30198") ? true : stryMutAct_9fa48("30197") ? meta.config.preserveOrphanedUploads : (stryCov_9fa48("30197", "30198", "30199"), !meta.config.preserveOrphanedUploads)) {
          if (stryMutAct_9fa48("30200")) {
            {}
          } else {
            stryCov_9fa48("30200");
            const deletePaths = stryMutAct_9fa48("30201") ? await Promise.all(filePaths.map(async filePath => (await Posts.uploads.isOrphan(filePath)) ? filePath : false)) : (stryCov_9fa48("30201"), (await Promise.all(filePaths.map(stryMutAct_9fa48("30202") ? () => undefined : (stryCov_9fa48("30202"), async filePath => (await Posts.uploads.isOrphan(filePath)) ? filePath : stryMutAct_9fa48("30203") ? true : (stryCov_9fa48("30203"), false))))).filter(Boolean));
            const uploaderUids = (await db.getObjectsFields(deletePaths.map(stryMutAct_9fa48("30204") ? () => undefined : (stryCov_9fa48("30204"), path => stryMutAct_9fa48("30205") ? `` : (stryCov_9fa48("30205"), `upload:${md5(path)}`)), stryMutAct_9fa48("30206") ? [] : (stryCov_9fa48("30206"), [stryMutAct_9fa48("30207") ? "" : (stryCov_9fa48("30207"), 'uid')])))).map(stryMutAct_9fa48("30208") ? () => undefined : (stryCov_9fa48("30208"), o => o ? stryMutAct_9fa48("30211") ? o.uid && null : stryMutAct_9fa48("30210") ? false : stryMutAct_9fa48("30209") ? true : (stryCov_9fa48("30209", "30210", "30211"), o.uid || null) : null));
            await Promise.all(stryMutAct_9fa48("30212") ? uploaderUids.map((uid, idx) => uid && isFinite(uid) ? user.deleteUpload(uid, uid, deletePaths[idx]) : null) : (stryCov_9fa48("30212"), uploaderUids.map(stryMutAct_9fa48("30213") ? () => undefined : (stryCov_9fa48("30213"), (uid, idx) => (stryMutAct_9fa48("30216") ? uid || isFinite(uid) : stryMutAct_9fa48("30215") ? false : stryMutAct_9fa48("30214") ? true : (stryCov_9fa48("30214", "30215", "30216"), uid && isFinite(uid))) ? user.deleteUpload(uid, uid, deletePaths[idx]) : null)).filter(Boolean)));
            await Posts.uploads.deleteFromDisk(deletePaths);
          }
        }
      }
    };
    Posts.uploads.dissociateAll = async pid => {
      if (stryMutAct_9fa48("30217")) {
        {}
      } else {
        stryCov_9fa48("30217");
        const current = await Posts.uploads.list(pid);
        await Posts.uploads.dissociate(pid, current);
      }
    };
    Posts.uploads.deleteFromDisk = async filePaths => {
      if (stryMutAct_9fa48("30218")) {
        {}
      } else {
        stryCov_9fa48("30218");
        if (stryMutAct_9fa48("30221") ? typeof filePaths !== 'string' : stryMutAct_9fa48("30220") ? false : stryMutAct_9fa48("30219") ? true : (stryCov_9fa48("30219", "30220", "30221"), typeof filePaths === (stryMutAct_9fa48("30222") ? "" : (stryCov_9fa48("30222"), 'string')))) {
          if (stryMutAct_9fa48("30223")) {
            {}
          } else {
            stryCov_9fa48("30223");
            filePaths = stryMutAct_9fa48("30224") ? [] : (stryCov_9fa48("30224"), [filePaths]);
          }
        } else if (stryMutAct_9fa48("30227") ? false : stryMutAct_9fa48("30226") ? true : stryMutAct_9fa48("30225") ? Array.isArray(filePaths) : (stryCov_9fa48("30225", "30226", "30227"), !Array.isArray(filePaths))) {
          if (stryMutAct_9fa48("30228")) {
            {}
          } else {
            stryCov_9fa48("30228");
            throw new Error(stryMutAct_9fa48("30229") ? `` : (stryCov_9fa48("30229"), `[[error:wrong-parameter-type, filePaths, ${typeof filePaths}, array]]`));
          }
        }
        filePaths = (await _filterValidPaths(filePaths)).map(_getFullPath);
        await Promise.all(filePaths.map(file.delete));
      }
    };
    Posts.uploads.saveSize = async filePaths => {
      if (stryMutAct_9fa48("30230")) {
        {}
      } else {
        stryCov_9fa48("30230");
        filePaths = stryMutAct_9fa48("30231") ? filePaths : (stryCov_9fa48("30231"), filePaths.filter(fileName => {
          if (stryMutAct_9fa48("30232")) {
            {}
          } else {
            stryCov_9fa48("30232");
            const type = mime.getType(fileName);
            return stryMutAct_9fa48("30235") ? type || type.match(/image./) : stryMutAct_9fa48("30234") ? false : stryMutAct_9fa48("30233") ? true : (stryCov_9fa48("30233", "30234", "30235"), type && type.match(/image./));
          }
        }));
        await Promise.all(filePaths.map(async fileName => {
          if (stryMutAct_9fa48("30236")) {
            {}
          } else {
            stryCov_9fa48("30236");
            try {
              if (stryMutAct_9fa48("30237")) {
                {}
              } else {
                stryCov_9fa48("30237");
                const size = await image.size(_getFullPath(fileName));
                await db.setObject(stryMutAct_9fa48("30238") ? `` : (stryCov_9fa48("30238"), `upload:${md5(fileName)}`), stryMutAct_9fa48("30239") ? {} : (stryCov_9fa48("30239"), {
                  width: size.width,
                  height: size.height
                }));
              }
            } catch (err) {
              if (stryMutAct_9fa48("30240")) {
                {}
              } else {
                stryCov_9fa48("30240");
                winston.error(stryMutAct_9fa48("30241") ? `` : (stryCov_9fa48("30241"), `[posts/uploads] Error while saving post upload sizes (${fileName}): ${err.message}`));
              }
            }
          }
        }));
      }
    };
  }
};