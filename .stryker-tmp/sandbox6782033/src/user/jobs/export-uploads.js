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
nconf.argv().env(stryMutAct_9fa48("47847") ? {} : (stryCov_9fa48("47847"), {
  separator: stryMutAct_9fa48("47848") ? "" : (stryCov_9fa48("47848"), '__')
}));
const fs = require('fs');
const path = require('path');
const archiver = require('archiver');
const winston = require('winston');
process.env.NODE_ENV = stryMutAct_9fa48("47851") ? process.env.NODE_ENV && 'production' : stryMutAct_9fa48("47850") ? false : stryMutAct_9fa48("47849") ? true : (stryCov_9fa48("47849", "47850", "47851"), process.env.NODE_ENV || (stryMutAct_9fa48("47852") ? "" : (stryCov_9fa48("47852"), 'production')));

// Alternate configuration file support
const configFile = path.resolve(__dirname, stryMutAct_9fa48("47853") ? "" : (stryCov_9fa48("47853"), '../../../'), stryMutAct_9fa48("47856") ? nconf.any(['config', 'CONFIG']) && 'config.json' : stryMutAct_9fa48("47855") ? false : stryMutAct_9fa48("47854") ? true : (stryCov_9fa48("47854", "47855", "47856"), nconf.any(stryMutAct_9fa48("47857") ? [] : (stryCov_9fa48("47857"), [stryMutAct_9fa48("47858") ? "" : (stryCov_9fa48("47858"), 'config'), stryMutAct_9fa48("47859") ? "" : (stryCov_9fa48("47859"), 'CONFIG')])) || (stryMutAct_9fa48("47860") ? "" : (stryCov_9fa48("47860"), 'config.json'))));
const prestart = require('../../prestart');
prestart.loadConfig(configFile);
prestart.setupWinston();
const db = require('../../database');
process.on(stryMutAct_9fa48("47861") ? "" : (stryCov_9fa48("47861"), 'message'), async msg => {
  if (stryMutAct_9fa48("47862")) {
    {}
  } else {
    stryCov_9fa48("47862");
    if (stryMutAct_9fa48("47865") ? msg || msg.uid : stryMutAct_9fa48("47864") ? false : stryMutAct_9fa48("47863") ? true : (stryCov_9fa48("47863", "47864", "47865"), msg && msg.uid)) {
      if (stryMutAct_9fa48("47866")) {
        {}
      } else {
        stryCov_9fa48("47866");
        await db.init();
        const targetUid = msg.uid;
        const archivePath = path.join(__dirname, stryMutAct_9fa48("47867") ? "" : (stryCov_9fa48("47867"), '../../../build/export'), stryMutAct_9fa48("47868") ? `` : (stryCov_9fa48("47868"), `${targetUid}_uploads.zip`));
        const rootDirectory = path.join(__dirname, stryMutAct_9fa48("47869") ? "" : (stryCov_9fa48("47869"), '../../../public/uploads/'));
        const user = require('../index');
        const archive = archiver(stryMutAct_9fa48("47870") ? "" : (stryCov_9fa48("47870"), 'zip'), stryMutAct_9fa48("47871") ? {} : (stryCov_9fa48("47871"), {
          zlib: stryMutAct_9fa48("47872") ? {} : (stryCov_9fa48("47872"), {
            level: 9
          }) // Sets the compression level.
        }));

        archive.on(stryMutAct_9fa48("47873") ? "" : (stryCov_9fa48("47873"), 'warning'), err => {
          if (stryMutAct_9fa48("47874")) {
            {}
          } else {
            stryCov_9fa48("47874");
            switch (err.code) {
              case stryMutAct_9fa48("47876") ? "" : (stryCov_9fa48("47876"), 'ENOENT'):
                if (stryMutAct_9fa48("47875")) {} else {
                  stryCov_9fa48("47875");
                  winston.warn(stryMutAct_9fa48("47877") ? `` : (stryCov_9fa48("47877"), `[user/export/uploads] File not found: ${err.path}`));
                  break;
                }
              default:
                if (stryMutAct_9fa48("47878")) {} else {
                  stryCov_9fa48("47878");
                  winston.warn(stryMutAct_9fa48("47879") ? `` : (stryCov_9fa48("47879"), `[user/export/uploads] Unexpected warning: ${err.message}`));
                  break;
                }
            }
          }
        });
        archive.on(stryMutAct_9fa48("47880") ? "" : (stryCov_9fa48("47880"), 'error'), err => {
          if (stryMutAct_9fa48("47881")) {
            {}
          } else {
            stryCov_9fa48("47881");
            const trimPath = function (path) {
              if (stryMutAct_9fa48("47882")) {
                {}
              } else {
                stryCov_9fa48("47882");
                return path.replace(rootDirectory, stryMutAct_9fa48("47883") ? "Stryker was here!" : (stryCov_9fa48("47883"), ''));
              }
            };
            switch (err.code) {
              case stryMutAct_9fa48("47885") ? "" : (stryCov_9fa48("47885"), 'EACCES'):
                if (stryMutAct_9fa48("47884")) {} else {
                  stryCov_9fa48("47884");
                  winston.error(stryMutAct_9fa48("47886") ? `` : (stryCov_9fa48("47886"), `[user/export/uploads] File inaccessible: ${trimPath(err.path)}`));
                  break;
                }
              default:
                if (stryMutAct_9fa48("47887")) {} else {
                  stryCov_9fa48("47887");
                  winston.error(stryMutAct_9fa48("47888") ? `` : (stryCov_9fa48("47888"), `[user/export/uploads] Unable to construct archive: ${err.message}`));
                  break;
                }
            }
          }
        });
        const output = fs.createWriteStream(archivePath);
        output.on(stryMutAct_9fa48("47889") ? "" : (stryCov_9fa48("47889"), 'close'), async () => {
          if (stryMutAct_9fa48("47890")) {
            {}
          } else {
            stryCov_9fa48("47890");
            await db.close();
            process.exit(0);
          }
        });
        archive.pipe(output);
        winston.verbose(stryMutAct_9fa48("47891") ? `` : (stryCov_9fa48("47891"), `[user/export/uploads] Collating uploads for uid ${targetUid}`));
        await user.collateUploads(targetUid, archive);
        const uploadedPicture = await user.getUserField(targetUid, stryMutAct_9fa48("47892") ? "" : (stryCov_9fa48("47892"), 'uploadedpicture'));
        if (stryMutAct_9fa48("47894") ? false : stryMutAct_9fa48("47893") ? true : (stryCov_9fa48("47893", "47894"), uploadedPicture)) {
          if (stryMutAct_9fa48("47895")) {
            {}
          } else {
            stryCov_9fa48("47895");
            const filePath = uploadedPicture.replace(nconf.get(stryMutAct_9fa48("47896") ? "" : (stryCov_9fa48("47896"), 'upload_url')), stryMutAct_9fa48("47897") ? "Stryker was here!" : (stryCov_9fa48("47897"), ''));
            archive.file(path.join(nconf.get(stryMutAct_9fa48("47898") ? "" : (stryCov_9fa48("47898"), 'upload_path')), filePath), stryMutAct_9fa48("47899") ? {} : (stryCov_9fa48("47899"), {
              name: path.basename(filePath)
            }));
          }
        }
        archive.finalize();
      }
    }
  }
});