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
const winston = require('winston');
const crypto = require('crypto');
const db = require('../database');
const posts = require('../posts');
const file = require('../file');
const batch = require('../batch');
const md5 = stryMutAct_9fa48("49509") ? () => undefined : (stryCov_9fa48("49509"), (() => {
  const md5 = filename => crypto.createHash(stryMutAct_9fa48("49510") ? "" : (stryCov_9fa48("49510"), 'md5')).update(filename).digest(stryMutAct_9fa48("49511") ? "" : (stryCov_9fa48("49511"), 'hex'));
  return md5;
})());
const _getFullPath = stryMutAct_9fa48("49512") ? () => undefined : (stryCov_9fa48("49512"), (() => {
  const _getFullPath = relativePath => path.resolve(nconf.get(stryMutAct_9fa48("49513") ? "" : (stryCov_9fa48("49513"), 'upload_path')), relativePath);
  return _getFullPath;
})());
const _validatePath = async relativePaths => {
  if (stryMutAct_9fa48("49514")) {
    {}
  } else {
    stryCov_9fa48("49514");
    if (stryMutAct_9fa48("49517") ? typeof relativePaths !== 'string' : stryMutAct_9fa48("49516") ? false : stryMutAct_9fa48("49515") ? true : (stryCov_9fa48("49515", "49516", "49517"), typeof relativePaths === (stryMutAct_9fa48("49518") ? "" : (stryCov_9fa48("49518"), 'string')))) {
      if (stryMutAct_9fa48("49519")) {
        {}
      } else {
        stryCov_9fa48("49519");
        relativePaths = stryMutAct_9fa48("49520") ? [] : (stryCov_9fa48("49520"), [relativePaths]);
      }
    } else if (stryMutAct_9fa48("49523") ? false : stryMutAct_9fa48("49522") ? true : stryMutAct_9fa48("49521") ? Array.isArray(relativePaths) : (stryCov_9fa48("49521", "49522", "49523"), !Array.isArray(relativePaths))) {
      if (stryMutAct_9fa48("49524")) {
        {}
      } else {
        stryCov_9fa48("49524");
        throw new Error(stryMutAct_9fa48("49525") ? `` : (stryCov_9fa48("49525"), `[[error:wrong-parameter-type, relativePaths, ${typeof relativePaths}, array]]`));
      }
    }
    const fullPaths = relativePaths.map(stryMutAct_9fa48("49526") ? () => undefined : (stryCov_9fa48("49526"), path => _getFullPath(path)));
    const exists = await Promise.all(fullPaths.map(stryMutAct_9fa48("49527") ? () => undefined : (stryCov_9fa48("49527"), async fullPath => file.exists(fullPath))));
    if (stryMutAct_9fa48("49530") ? !fullPaths.every(fullPath => fullPath.startsWith(nconf.get('upload_path'))) && !exists.every(Boolean) : stryMutAct_9fa48("49529") ? false : stryMutAct_9fa48("49528") ? true : (stryCov_9fa48("49528", "49529", "49530"), (stryMutAct_9fa48("49531") ? fullPaths.every(fullPath => fullPath.startsWith(nconf.get('upload_path'))) : (stryCov_9fa48("49531"), !(stryMutAct_9fa48("49532") ? fullPaths.some(fullPath => fullPath.startsWith(nconf.get('upload_path'))) : (stryCov_9fa48("49532"), fullPaths.every(stryMutAct_9fa48("49533") ? () => undefined : (stryCov_9fa48("49533"), fullPath => stryMutAct_9fa48("49534") ? fullPath.endsWith(nconf.get('upload_path')) : (stryCov_9fa48("49534"), fullPath.startsWith(nconf.get(stryMutAct_9fa48("49535") ? "" : (stryCov_9fa48("49535"), 'upload_path')))))))))) || (stryMutAct_9fa48("49536") ? exists.every(Boolean) : (stryCov_9fa48("49536"), !(stryMutAct_9fa48("49537") ? exists.some(Boolean) : (stryCov_9fa48("49537"), exists.every(Boolean))))))) {
      if (stryMutAct_9fa48("49538")) {
        {}
      } else {
        stryCov_9fa48("49538");
        throw new Error(stryMutAct_9fa48("49539") ? "" : (stryCov_9fa48("49539"), '[[error:invalid-path]]'));
      }
    }
  }
};
module.exports = function (User) {
  if (stryMutAct_9fa48("49540")) {
    {}
  } else {
    stryCov_9fa48("49540");
    User.associateUpload = async (uid, relativePath) => {
      if (stryMutAct_9fa48("49541")) {
        {}
      } else {
        stryCov_9fa48("49541");
        await _validatePath(relativePath);
        await Promise.all(stryMutAct_9fa48("49542") ? [] : (stryCov_9fa48("49542"), [db.sortedSetAdd(stryMutAct_9fa48("49543") ? `` : (stryCov_9fa48("49543"), `uid:${uid}:uploads`), Date.now(), relativePath), db.setObjectField(stryMutAct_9fa48("49544") ? `` : (stryCov_9fa48("49544"), `upload:${md5(relativePath)}`), stryMutAct_9fa48("49545") ? "" : (stryCov_9fa48("49545"), 'uid'), uid)]));
      }
    };
    User.deleteUpload = async function (callerUid, uid, uploadNames) {
      if (stryMutAct_9fa48("49546")) {
        {}
      } else {
        stryCov_9fa48("49546");
        if (stryMutAct_9fa48("49549") ? typeof uploadNames !== 'string' : stryMutAct_9fa48("49548") ? false : stryMutAct_9fa48("49547") ? true : (stryCov_9fa48("49547", "49548", "49549"), typeof uploadNames === (stryMutAct_9fa48("49550") ? "" : (stryCov_9fa48("49550"), 'string')))) {
          if (stryMutAct_9fa48("49551")) {
            {}
          } else {
            stryCov_9fa48("49551");
            uploadNames = stryMutAct_9fa48("49552") ? [] : (stryCov_9fa48("49552"), [uploadNames]);
          }
        } else if (stryMutAct_9fa48("49555") ? false : stryMutAct_9fa48("49554") ? true : stryMutAct_9fa48("49553") ? Array.isArray(uploadNames) : (stryCov_9fa48("49553", "49554", "49555"), !Array.isArray(uploadNames))) {
          if (stryMutAct_9fa48("49556")) {
            {}
          } else {
            stryCov_9fa48("49556");
            throw new Error(stryMutAct_9fa48("49557") ? `` : (stryCov_9fa48("49557"), `[[error:wrong-parameter-type, uploadNames, ${typeof uploadNames}, array]]`));
          }
        }
        await _validatePath(uploadNames);
        const [isUsersUpload, isAdminOrGlobalMod] = await Promise.all(stryMutAct_9fa48("49558") ? [] : (stryCov_9fa48("49558"), [db.isSortedSetMembers(stryMutAct_9fa48("49559") ? `` : (stryCov_9fa48("49559"), `uid:${callerUid}:uploads`), uploadNames), User.isAdminOrGlobalMod(callerUid)]));
        if (stryMutAct_9fa48("49562") ? !isAdminOrGlobalMod || !isUsersUpload.every(Boolean) : stryMutAct_9fa48("49561") ? false : stryMutAct_9fa48("49560") ? true : (stryCov_9fa48("49560", "49561", "49562"), (stryMutAct_9fa48("49563") ? isAdminOrGlobalMod : (stryCov_9fa48("49563"), !isAdminOrGlobalMod)) && (stryMutAct_9fa48("49564") ? isUsersUpload.every(Boolean) : (stryCov_9fa48("49564"), !(stryMutAct_9fa48("49565") ? isUsersUpload.some(Boolean) : (stryCov_9fa48("49565"), isUsersUpload.every(Boolean))))))) {
          if (stryMutAct_9fa48("49566")) {
            {}
          } else {
            stryCov_9fa48("49566");
            throw new Error(stryMutAct_9fa48("49567") ? "" : (stryCov_9fa48("49567"), '[[error:no-privileges]]'));
          }
        }
        await batch.processArray(uploadNames, async uploadNames => {
          if (stryMutAct_9fa48("49568")) {
            {}
          } else {
            stryCov_9fa48("49568");
            const fullPaths = uploadNames.map(stryMutAct_9fa48("49569") ? () => undefined : (stryCov_9fa48("49569"), path => _getFullPath(path)));
            await Promise.all(fullPaths.map(async (fullPath, idx) => {
              if (stryMutAct_9fa48("49570")) {
                {}
              } else {
                stryCov_9fa48("49570");
                winston.verbose(stryMutAct_9fa48("49571") ? `` : (stryCov_9fa48("49571"), `[user/deleteUpload] Deleting ${uploadNames[idx]}`));
                await Promise.all(stryMutAct_9fa48("49572") ? [] : (stryCov_9fa48("49572"), [file.delete(fullPath), file.delete(file.appendToFileName(fullPath, stryMutAct_9fa48("49573") ? "" : (stryCov_9fa48("49573"), '-resized')))]));
                await Promise.all(stryMutAct_9fa48("49574") ? [] : (stryCov_9fa48("49574"), [db.sortedSetRemove(stryMutAct_9fa48("49575") ? `` : (stryCov_9fa48("49575"), `uid:${uid}:uploads`), uploadNames[idx]), db.delete(stryMutAct_9fa48("49576") ? `` : (stryCov_9fa48("49576"), `upload:${md5(uploadNames[idx])}`))]));
              }
            }));

            // Dissociate the upload from pids, if any
            const pids = await db.getSortedSetsMembers(uploadNames.map(stryMutAct_9fa48("49577") ? () => undefined : (stryCov_9fa48("49577"), relativePath => stryMutAct_9fa48("49578") ? `` : (stryCov_9fa48("49578"), `upload:${md5(relativePath)}:pids`))));
            await Promise.all(pids.map(stryMutAct_9fa48("49579") ? () => undefined : (stryCov_9fa48("49579"), async (pids, idx) => Promise.all(pids.map(stryMutAct_9fa48("49580") ? () => undefined : (stryCov_9fa48("49580"), async pid => posts.uploads.dissociate(pid, uploadNames[idx])))))));
          }
        }, stryMutAct_9fa48("49581") ? {} : (stryCov_9fa48("49581"), {
          batch: 50
        }));
      }
    };
    User.collateUploads = async function (uid, archive) {
      if (stryMutAct_9fa48("49582")) {
        {}
      } else {
        stryCov_9fa48("49582");
        await batch.processSortedSet(stryMutAct_9fa48("49583") ? `` : (stryCov_9fa48("49583"), `uid:${uid}:uploads`), (files, next) => {
          if (stryMutAct_9fa48("49584")) {
            {}
          } else {
            stryCov_9fa48("49584");
            files.forEach(file => {
              if (stryMutAct_9fa48("49585")) {
                {}
              } else {
                stryCov_9fa48("49585");
                archive.file(_getFullPath(file), stryMutAct_9fa48("49586") ? {} : (stryCov_9fa48("49586"), {
                  name: path.basename(file)
                }));
              }
            });
            setImmediate(next);
          }
        }, stryMutAct_9fa48("49587") ? {} : (stryCov_9fa48("49587"), {
          batch: 100
        }));
      }
    };
  }
};