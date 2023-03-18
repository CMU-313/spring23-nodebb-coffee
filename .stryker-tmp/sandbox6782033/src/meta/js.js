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
const fs = require('fs');
const util = require('util');
const mkdirp = require('mkdirp');
const rimraf = require('rimraf');
const rimrafAsync = util.promisify(rimraf);
const file = require('../file');
const plugins = require('../plugins');
const minifier = require('./minifier');
const JS = module.exports;
JS.scripts = stryMutAct_9fa48("24181") ? {} : (stryCov_9fa48("24181"), {
  base: stryMutAct_9fa48("24182") ? [] : (stryCov_9fa48("24182"), [stryMutAct_9fa48("24183") ? "" : (stryCov_9fa48("24183"), 'node_modules/@adactive/bootstrap-tagsinput/src/bootstrap-tagsinput.js'), stryMutAct_9fa48("24184") ? "" : (stryCov_9fa48("24184"), 'node_modules/jquery-serializeobject/jquery.serializeObject.js'), stryMutAct_9fa48("24185") ? "" : (stryCov_9fa48("24185"), 'node_modules/jquery-deserialize/src/jquery.deserialize.js'), stryMutAct_9fa48("24186") ? "" : (stryCov_9fa48("24186"), 'public/vendor/bootbox/wrapper.js')]),
  // plugins add entries into this object,
  // they get linked into /build/public/src/modules
  modules: stryMutAct_9fa48("24187") ? {} : (stryCov_9fa48("24187"), {
    '../admin/plugins/persona.js': stryMutAct_9fa48("24188") ? "" : (stryCov_9fa48("24188"), 'themes/nodebb-theme-persona/public/admin.js'),
    'persona/quickreply.js': stryMutAct_9fa48("24189") ? "" : (stryCov_9fa48("24189"), 'themes/nodebb-theme-persona/public/modules/quickreply.js'),
    '../client/account/theme.js': stryMutAct_9fa48("24190") ? "" : (stryCov_9fa48("24190"), 'themes/nodebb-theme-persona/public/settings.js')
  })
});
const basePath = path.resolve(__dirname, stryMutAct_9fa48("24191") ? "" : (stryCov_9fa48("24191"), '../..'));
async function linkModules() {
  if (stryMutAct_9fa48("24192")) {
    {}
  } else {
    stryCov_9fa48("24192");
    const {
      modules
    } = JS.scripts;
    await Promise.all(stryMutAct_9fa48("24193") ? [] : (stryCov_9fa48("24193"), [mkdirp(path.join(__dirname, stryMutAct_9fa48("24194") ? "" : (stryCov_9fa48("24194"), '../../build/public/src/admin/plugins'))), mkdirp(path.join(__dirname, stryMutAct_9fa48("24195") ? "" : (stryCov_9fa48("24195"), '../../build/public/src/client/plugins')))]));
    await Promise.all(Object.keys(modules).map(async relPath => {
      if (stryMutAct_9fa48("24196")) {
        {}
      } else {
        stryCov_9fa48("24196");
        const srcPath = path.join(__dirname, stryMutAct_9fa48("24197") ? "" : (stryCov_9fa48("24197"), '../../'), modules[relPath]);
        const destPath = path.join(__dirname, stryMutAct_9fa48("24198") ? "" : (stryCov_9fa48("24198"), '../../build/public/src/modules'), relPath);
        const [stats] = await Promise.all(stryMutAct_9fa48("24199") ? [] : (stryCov_9fa48("24199"), [fs.promises.stat(srcPath), mkdirp(path.dirname(destPath))]));
        if (stryMutAct_9fa48("24201") ? false : stryMutAct_9fa48("24200") ? true : (stryCov_9fa48("24200", "24201"), stats.isDirectory())) {
          if (stryMutAct_9fa48("24202")) {
            {}
          } else {
            stryCov_9fa48("24202");
            await file.linkDirs(srcPath, destPath, stryMutAct_9fa48("24203") ? false : (stryCov_9fa48("24203"), true));
          }
        } else {
          if (stryMutAct_9fa48("24204")) {
            {}
          } else {
            stryCov_9fa48("24204");
            await fs.promises.copyFile(srcPath, destPath);
          }
        }
      }
    }));
  }
}
const moduleDirs = stryMutAct_9fa48("24205") ? [] : (stryCov_9fa48("24205"), [stryMutAct_9fa48("24206") ? "" : (stryCov_9fa48("24206"), 'modules'), stryMutAct_9fa48("24207") ? "" : (stryCov_9fa48("24207"), 'admin'), stryMutAct_9fa48("24208") ? "" : (stryCov_9fa48("24208"), 'client')]);
async function clearModules() {
  if (stryMutAct_9fa48("24209")) {
    {}
  } else {
    stryCov_9fa48("24209");
    const builtPaths = moduleDirs.map(stryMutAct_9fa48("24210") ? () => undefined : (stryCov_9fa48("24210"), p => path.join(__dirname, stryMutAct_9fa48("24211") ? "" : (stryCov_9fa48("24211"), '../../build/public/src'), p)));
    await Promise.all(builtPaths.map(stryMutAct_9fa48("24212") ? () => undefined : (stryCov_9fa48("24212"), builtPath => rimrafAsync(builtPath))));
  }
}
JS.buildModules = async function () {
  if (stryMutAct_9fa48("24213")) {
    {}
  } else {
    stryCov_9fa48("24213");
    await clearModules();
    const fse = require('fs-extra');
    await fse.copy(path.join(__dirname, stryMutAct_9fa48("24214") ? `` : (stryCov_9fa48("24214"), `../../public/src`)), path.join(__dirname, stryMutAct_9fa48("24215") ? `` : (stryCov_9fa48("24215"), `../../build/public/src`)));
    await linkModules();
  }
};
JS.linkStatics = async function () {
  if (stryMutAct_9fa48("24216")) {
    {}
  } else {
    stryCov_9fa48("24216");
    await rimrafAsync(path.join(__dirname, stryMutAct_9fa48("24217") ? "" : (stryCov_9fa48("24217"), '../../build/public/plugins')));
    await Promise.all(Object.keys(plugins.staticDirs).map(async mappedPath => {
      if (stryMutAct_9fa48("24218")) {
        {}
      } else {
        stryCov_9fa48("24218");
        const sourceDir = plugins.staticDirs[mappedPath];
        const destDir = path.join(__dirname, stryMutAct_9fa48("24219") ? "" : (stryCov_9fa48("24219"), '../../build/public/plugins'), mappedPath);
        await mkdirp(path.dirname(destDir));
        await file.linkDirs(sourceDir, destDir, stryMutAct_9fa48("24220") ? false : (stryCov_9fa48("24220"), true));
      }
    }));
  }
};
async function getBundleScriptList(target) {
  if (stryMutAct_9fa48("24221")) {
    {}
  } else {
    stryCov_9fa48("24221");
    const pluginDirectories = stryMutAct_9fa48("24222") ? ["Stryker was here"] : (stryCov_9fa48("24222"), []);
    if (stryMutAct_9fa48("24225") ? target !== 'admin' : stryMutAct_9fa48("24224") ? false : stryMutAct_9fa48("24223") ? true : (stryCov_9fa48("24223", "24224", "24225"), target === (stryMutAct_9fa48("24226") ? "" : (stryCov_9fa48("24226"), 'admin')))) {
      if (stryMutAct_9fa48("24227")) {
        {}
      } else {
        stryCov_9fa48("24227");
        target = stryMutAct_9fa48("24228") ? "" : (stryCov_9fa48("24228"), 'acp');
      }
    }
    let pluginScripts = stryMutAct_9fa48("24229") ? plugins[`${target}Scripts`] : (stryCov_9fa48("24229"), plugins[stryMutAct_9fa48("24230") ? `` : (stryCov_9fa48("24230"), `${target}Scripts`)].filter(path => {
      if (stryMutAct_9fa48("24231")) {
        {}
      } else {
        stryCov_9fa48("24231");
        if (stryMutAct_9fa48("24234") ? path.startsWith('.js') : stryMutAct_9fa48("24233") ? false : stryMutAct_9fa48("24232") ? true : (stryCov_9fa48("24232", "24233", "24234"), path.endsWith(stryMutAct_9fa48("24235") ? "" : (stryCov_9fa48("24235"), '.js')))) {
          if (stryMutAct_9fa48("24236")) {
            {}
          } else {
            stryCov_9fa48("24236");
            return stryMutAct_9fa48("24237") ? false : (stryCov_9fa48("24237"), true);
          }
        }
        pluginDirectories.push(path);
        return stryMutAct_9fa48("24238") ? true : (stryCov_9fa48("24238"), false);
      }
    }));
    await Promise.all(pluginDirectories.map(async directory => {
      if (stryMutAct_9fa48("24239")) {
        {}
      } else {
        stryCov_9fa48("24239");
        const scripts = await file.walk(directory);
        pluginScripts = pluginScripts.concat(scripts);
      }
    }));
    pluginScripts = JS.scripts.base.concat(pluginScripts).map(script => {
      if (stryMutAct_9fa48("24240")) {
        {}
      } else {
        stryCov_9fa48("24240");
        const srcPath = path.resolve(basePath, script).replace(/\\/g, stryMutAct_9fa48("24241") ? "" : (stryCov_9fa48("24241"), '/'));
        return stryMutAct_9fa48("24242") ? {} : (stryCov_9fa48("24242"), {
          srcPath: srcPath,
          filename: path.relative(basePath, srcPath).replace(/\\/g, stryMutAct_9fa48("24243") ? "" : (stryCov_9fa48("24243"), '/'))
        });
      }
    });
    return pluginScripts;
  }
}
JS.buildBundle = async function (target, fork) {
  if (stryMutAct_9fa48("24244")) {
    {}
  } else {
    stryCov_9fa48("24244");
    const filename = stryMutAct_9fa48("24245") ? `` : (stryCov_9fa48("24245"), `scripts-${target}.js`);
    const files = await getBundleScriptList(target);
    const minify = stryMutAct_9fa48("24246") ? true : (stryCov_9fa48("24246"), false); // webpack will minify in prod
    const filePath = path.join(__dirname, stryMutAct_9fa48("24247") ? "" : (stryCov_9fa48("24247"), '../../build/public'), filename);
    await minifier.js.bundle(stryMutAct_9fa48("24248") ? {} : (stryCov_9fa48("24248"), {
      files: files,
      filename: filename,
      destPath: filePath
    }), minify, fork);
  }
};
JS.killMinifier = function () {
  if (stryMutAct_9fa48("24249")) {
    {}
  } else {
    stryCov_9fa48("24249");
    minifier.killAll();
  }
};