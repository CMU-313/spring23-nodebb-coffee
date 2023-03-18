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
const nconf = require('nconf');
const fs = require('fs');
const util = require('util');
const path = require('path');
const rimraf = require('rimraf');
const rimrafAsync = util.promisify(rimraf);
const plugins = require('../plugins');
const db = require('../database');
const file = require('../file');
const minifier = require('./minifier');
const CSS = module.exports;
CSS.supportedSkins = stryMutAct_9fa48("23857") ? [] : (stryCov_9fa48("23857"), [stryMutAct_9fa48("23858") ? "" : (stryCov_9fa48("23858"), 'cerulean'), stryMutAct_9fa48("23859") ? "" : (stryCov_9fa48("23859"), 'cyborg'), stryMutAct_9fa48("23860") ? "" : (stryCov_9fa48("23860"), 'flatly'), stryMutAct_9fa48("23861") ? "" : (stryCov_9fa48("23861"), 'journal'), stryMutAct_9fa48("23862") ? "" : (stryCov_9fa48("23862"), 'lumen'), stryMutAct_9fa48("23863") ? "" : (stryCov_9fa48("23863"), 'paper'), stryMutAct_9fa48("23864") ? "" : (stryCov_9fa48("23864"), 'simplex'), stryMutAct_9fa48("23865") ? "" : (stryCov_9fa48("23865"), 'spacelab'), stryMutAct_9fa48("23866") ? "" : (stryCov_9fa48("23866"), 'united'), stryMutAct_9fa48("23867") ? "" : (stryCov_9fa48("23867"), 'cosmo'), stryMutAct_9fa48("23868") ? "" : (stryCov_9fa48("23868"), 'darkly'), stryMutAct_9fa48("23869") ? "" : (stryCov_9fa48("23869"), 'readable'), stryMutAct_9fa48("23870") ? "" : (stryCov_9fa48("23870"), 'sandstone'), stryMutAct_9fa48("23871") ? "" : (stryCov_9fa48("23871"), 'slate'), stryMutAct_9fa48("23872") ? "" : (stryCov_9fa48("23872"), 'superhero'), stryMutAct_9fa48("23873") ? "" : (stryCov_9fa48("23873"), 'yeti')]);
const buildImports = stryMutAct_9fa48("23874") ? {} : (stryCov_9fa48("23874"), {
  client: function (source) {
    if (stryMutAct_9fa48("23875")) {
      {}
    } else {
      stryCov_9fa48("23875");
      return stryMutAct_9fa48("23876") ? `` : (stryCov_9fa48("23876"), `@import "./theme";\n${source}\n${(stryMutAct_9fa48("23877") ? [] : (stryCov_9fa48("23877"), [stryMutAct_9fa48("23878") ? "" : (stryCov_9fa48("23878"), '@import "../public/vendor/fontawesome/less/regular.less";'), stryMutAct_9fa48("23879") ? "" : (stryCov_9fa48("23879"), '@import "../public/vendor/fontawesome/less/solid.less";'), stryMutAct_9fa48("23880") ? "" : (stryCov_9fa48("23880"), '@import "../public/vendor/fontawesome/less/brands.less";'), stryMutAct_9fa48("23881") ? "" : (stryCov_9fa48("23881"), '@import "../public/vendor/fontawesome/less/fontawesome.less";'), stryMutAct_9fa48("23882") ? "" : (stryCov_9fa48("23882"), '@import "../public/vendor/fontawesome/less/v4-shims.less";'), stryMutAct_9fa48("23883") ? "" : (stryCov_9fa48("23883"), '@import "../public/vendor/fontawesome/less/nodebb-shims.less";'), stryMutAct_9fa48("23884") ? "" : (stryCov_9fa48("23884"), '@import "../../public/less/jquery-ui.less";'), stryMutAct_9fa48("23885") ? "" : (stryCov_9fa48("23885"), '@import (inline) "../node_modules/@adactive/bootstrap-tagsinput/src/bootstrap-tagsinput.css";'), stryMutAct_9fa48("23886") ? "" : (stryCov_9fa48("23886"), '@import (inline) "../node_modules/cropperjs/dist/cropper.css";'), stryMutAct_9fa48("23887") ? "" : (stryCov_9fa48("23887"), '@import "../../public/less/flags.less";'), stryMutAct_9fa48("23888") ? "" : (stryCov_9fa48("23888"), '@import "../../public/less/generics.less";'), stryMutAct_9fa48("23889") ? "" : (stryCov_9fa48("23889"), '@import "../../public/less/mixins.less";'), stryMutAct_9fa48("23890") ? "" : (stryCov_9fa48("23890"), '@import "../../public/less/global.less";'), stryMutAct_9fa48("23891") ? "" : (stryCov_9fa48("23891"), '@import "../../public/less/modals.less";')])).map(stryMutAct_9fa48("23892") ? () => undefined : (stryCov_9fa48("23892"), str => str.replace(/\//g, path.sep))).join(stryMutAct_9fa48("23893") ? "" : (stryCov_9fa48("23893"), '\n'))}`);
    }
  },
  admin: function (source) {
    if (stryMutAct_9fa48("23894")) {
      {}
    } else {
      stryCov_9fa48("23894");
      return stryMutAct_9fa48("23895") ? `` : (stryCov_9fa48("23895"), `${source}\n${(stryMutAct_9fa48("23896") ? [] : (stryCov_9fa48("23896"), [stryMutAct_9fa48("23897") ? "" : (stryCov_9fa48("23897"), '@import "../public/vendor/fontawesome/less/regular.less";'), stryMutAct_9fa48("23898") ? "" : (stryCov_9fa48("23898"), '@import "../public/vendor/fontawesome/less/solid.less";'), stryMutAct_9fa48("23899") ? "" : (stryCov_9fa48("23899"), '@import "../public/vendor/fontawesome/less/brands.less";'), stryMutAct_9fa48("23900") ? "" : (stryCov_9fa48("23900"), '@import "../public/vendor/fontawesome/less/fontawesome.less";'), stryMutAct_9fa48("23901") ? "" : (stryCov_9fa48("23901"), '@import "../public/vendor/fontawesome/less/v4-shims.less";'), stryMutAct_9fa48("23902") ? "" : (stryCov_9fa48("23902"), '@import "../public/vendor/fontawesome/less/nodebb-shims.less";'), stryMutAct_9fa48("23903") ? "" : (stryCov_9fa48("23903"), '@import "../public/less/admin/admin";'), stryMutAct_9fa48("23904") ? "" : (stryCov_9fa48("23904"), '@import "../public/less/generics.less";'), stryMutAct_9fa48("23905") ? "" : (stryCov_9fa48("23905"), '@import "../../public/less/jquery-ui.less";'), stryMutAct_9fa48("23906") ? "" : (stryCov_9fa48("23906"), '@import (inline) "../node_modules/@adactive/bootstrap-tagsinput/src/bootstrap-tagsinput.css";'), stryMutAct_9fa48("23907") ? "" : (stryCov_9fa48("23907"), '@import (inline) "../public/vendor/mdl/material.css";')])).map(stryMutAct_9fa48("23908") ? () => undefined : (stryCov_9fa48("23908"), str => str.replace(/\//g, path.sep))).join(stryMutAct_9fa48("23909") ? "" : (stryCov_9fa48("23909"), '\n'))}`);
    }
  }
});
async function filterMissingFiles(filepaths) {
  if (stryMutAct_9fa48("23910")) {
    {}
  } else {
    stryCov_9fa48("23910");
    const exists = await Promise.all(filepaths.map(async filepath => {
      if (stryMutAct_9fa48("23911")) {
        {}
      } else {
        stryCov_9fa48("23911");
        const exists = await file.exists(path.join(__dirname, stryMutAct_9fa48("23912") ? "" : (stryCov_9fa48("23912"), '../../node_modules'), filepath));
        if (stryMutAct_9fa48("23915") ? false : stryMutAct_9fa48("23914") ? true : stryMutAct_9fa48("23913") ? exists : (stryCov_9fa48("23913", "23914", "23915"), !exists)) {
          if (stryMutAct_9fa48("23916")) {
            {}
          } else {
            stryCov_9fa48("23916");
            winston.warn(stryMutAct_9fa48("23917") ? `` : (stryCov_9fa48("23917"), `[meta/css] File not found! ${filepath}`));
          }
        }
        return exists;
      }
    }));
    return stryMutAct_9fa48("23918") ? filepaths : (stryCov_9fa48("23918"), filepaths.filter(stryMutAct_9fa48("23919") ? () => undefined : (stryCov_9fa48("23919"), (filePath, i) => exists[i])));
  }
}
async function getImports(files, prefix, extension) {
  if (stryMutAct_9fa48("23920")) {
    {}
  } else {
    stryCov_9fa48("23920");
    const pluginDirectories = stryMutAct_9fa48("23921") ? ["Stryker was here"] : (stryCov_9fa48("23921"), []);
    let source = stryMutAct_9fa48("23922") ? "Stryker was here!" : (stryCov_9fa48("23922"), '');
    files.forEach(styleFile => {
      if (stryMutAct_9fa48("23923")) {
        {}
      } else {
        stryCov_9fa48("23923");
        if (stryMutAct_9fa48("23926") ? styleFile.startsWith(extension) : stryMutAct_9fa48("23925") ? false : stryMutAct_9fa48("23924") ? true : (stryCov_9fa48("23924", "23925", "23926"), styleFile.endsWith(extension))) {
          if (stryMutAct_9fa48("23927")) {
            {}
          } else {
            stryCov_9fa48("23927");
            source += stryMutAct_9fa48("23928") ? `` : (stryCov_9fa48("23928"), `${stryMutAct_9fa48("23929") ? prefix + path.sep - styleFile : (stryCov_9fa48("23929"), (stryMutAct_9fa48("23930") ? prefix - path.sep : (stryCov_9fa48("23930"), prefix + path.sep)) + styleFile)}";`);
          }
        } else {
          if (stryMutAct_9fa48("23931")) {
            {}
          } else {
            stryCov_9fa48("23931");
            pluginDirectories.push(styleFile);
          }
        }
      }
    });
    await Promise.all(pluginDirectories.map(async directory => {
      if (stryMutAct_9fa48("23932")) {
        {}
      } else {
        stryCov_9fa48("23932");
        const styleFiles = await file.walk(directory);
        styleFiles.forEach(styleFile => {
          if (stryMutAct_9fa48("23933")) {
            {}
          } else {
            stryCov_9fa48("23933");
            source += stryMutAct_9fa48("23934") ? `` : (stryCov_9fa48("23934"), `${stryMutAct_9fa48("23935") ? prefix + path.sep - styleFile : (stryCov_9fa48("23935"), (stryMutAct_9fa48("23936") ? prefix - path.sep : (stryCov_9fa48("23936"), prefix + path.sep)) + styleFile)}";`);
          }
        });
      }
    }));
    return source;
  }
}
async function getBundleMetadata(target) {
  if (stryMutAct_9fa48("23937")) {
    {}
  } else {
    stryCov_9fa48("23937");
    const paths = stryMutAct_9fa48("23938") ? [] : (stryCov_9fa48("23938"), [path.join(__dirname, stryMutAct_9fa48("23939") ? "" : (stryCov_9fa48("23939"), '../../node_modules')), path.join(__dirname, stryMutAct_9fa48("23940") ? "" : (stryCov_9fa48("23940"), '../../public/less')), path.join(__dirname, stryMutAct_9fa48("23941") ? "" : (stryCov_9fa48("23941"), '../../public/vendor/fontawesome/less'))]);

    // Skin support
    let skin;
    if (stryMutAct_9fa48("23944") ? target.endsWith('client-') : stryMutAct_9fa48("23943") ? false : stryMutAct_9fa48("23942") ? true : (stryCov_9fa48("23942", "23943", "23944"), target.startsWith(stryMutAct_9fa48("23945") ? "" : (stryCov_9fa48("23945"), 'client-')))) {
      if (stryMutAct_9fa48("23946")) {
        {}
      } else {
        stryCov_9fa48("23946");
        skin = target.split(stryMutAct_9fa48("23947") ? "" : (stryCov_9fa48("23947"), '-'))[1];
        if (stryMutAct_9fa48("23949") ? false : stryMutAct_9fa48("23948") ? true : (stryCov_9fa48("23948", "23949"), CSS.supportedSkins.includes(skin))) {
          if (stryMutAct_9fa48("23950")) {
            {}
          } else {
            stryCov_9fa48("23950");
            target = stryMutAct_9fa48("23951") ? "" : (stryCov_9fa48("23951"), 'client');
          }
        }
      }
    }
    let skinImport = stryMutAct_9fa48("23952") ? ["Stryker was here"] : (stryCov_9fa48("23952"), []);
    if (stryMutAct_9fa48("23955") ? target !== 'client' : stryMutAct_9fa48("23954") ? false : stryMutAct_9fa48("23953") ? true : (stryCov_9fa48("23953", "23954", "23955"), target === (stryMutAct_9fa48("23956") ? "" : (stryCov_9fa48("23956"), 'client')))) {
      if (stryMutAct_9fa48("23957")) {
        {}
      } else {
        stryCov_9fa48("23957");
        const themeData = await db.getObjectFields(stryMutAct_9fa48("23958") ? "" : (stryCov_9fa48("23958"), 'config'), stryMutAct_9fa48("23959") ? [] : (stryCov_9fa48("23959"), [stryMutAct_9fa48("23960") ? "" : (stryCov_9fa48("23960"), 'theme:type'), stryMutAct_9fa48("23961") ? "" : (stryCov_9fa48("23961"), 'theme:id'), stryMutAct_9fa48("23962") ? "" : (stryCov_9fa48("23962"), 'bootswatchSkin')]));
        const themeId = stryMutAct_9fa48("23965") ? themeData['theme:id'] && 'nodebb-theme-persona' : stryMutAct_9fa48("23964") ? false : stryMutAct_9fa48("23963") ? true : (stryCov_9fa48("23963", "23964", "23965"), themeData[stryMutAct_9fa48("23966") ? "" : (stryCov_9fa48("23966"), 'theme:id')] || (stryMutAct_9fa48("23967") ? "" : (stryCov_9fa48("23967"), 'nodebb-theme-persona')));
        const baseThemePath = path.join(nconf.get(stryMutAct_9fa48("23968") ? "" : (stryCov_9fa48("23968"), 'themes_path')), (stryMutAct_9fa48("23971") ? themeData['theme:type'] || themeData['theme:type'] === 'local' : stryMutAct_9fa48("23970") ? false : stryMutAct_9fa48("23969") ? true : (stryCov_9fa48("23969", "23970", "23971"), themeData[stryMutAct_9fa48("23972") ? "" : (stryCov_9fa48("23972"), 'theme:type')] && (stryMutAct_9fa48("23974") ? themeData['theme:type'] !== 'local' : stryMutAct_9fa48("23973") ? true : (stryCov_9fa48("23973", "23974"), themeData[stryMutAct_9fa48("23975") ? "" : (stryCov_9fa48("23975"), 'theme:type')] === (stryMutAct_9fa48("23976") ? "" : (stryCov_9fa48("23976"), 'local')))))) ? themeId : stryMutAct_9fa48("23977") ? "" : (stryCov_9fa48("23977"), 'nodebb-theme-vanilla'));
        paths.unshift(baseThemePath);
        themeData.bootswatchSkin = stryMutAct_9fa48("23980") ? skin && themeData.bootswatchSkin : stryMutAct_9fa48("23979") ? false : stryMutAct_9fa48("23978") ? true : (stryCov_9fa48("23978", "23979", "23980"), skin || themeData.bootswatchSkin);
        if (stryMutAct_9fa48("23983") ? themeData || themeData.bootswatchSkin : stryMutAct_9fa48("23982") ? false : stryMutAct_9fa48("23981") ? true : (stryCov_9fa48("23981", "23982", "23983"), themeData && themeData.bootswatchSkin)) {
          if (stryMutAct_9fa48("23984")) {
            {}
          } else {
            stryCov_9fa48("23984");
            skinImport.push(stryMutAct_9fa48("23985") ? `` : (stryCov_9fa48("23985"), `\n@import "./@nodebb/bootswatch/${themeData.bootswatchSkin}/variables.less";`));
            skinImport.push(stryMutAct_9fa48("23986") ? `` : (stryCov_9fa48("23986"), `\n@import "./@nodebb/bootswatch/${themeData.bootswatchSkin}/bootswatch.less";`));
          }
        }
        skinImport = skinImport.join(stryMutAct_9fa48("23987") ? "Stryker was here!" : (stryCov_9fa48("23987"), ''));
      }
    }
    const [lessImports, cssImports, acpLessImports] = await Promise.all(stryMutAct_9fa48("23988") ? [] : (stryCov_9fa48("23988"), [filterGetImports(plugins.lessFiles, stryMutAct_9fa48("23989") ? "" : (stryCov_9fa48("23989"), '\n@import ".'), stryMutAct_9fa48("23990") ? "" : (stryCov_9fa48("23990"), '.less')), filterGetImports(plugins.cssFiles, stryMutAct_9fa48("23991") ? "" : (stryCov_9fa48("23991"), '\n@import (inline) ".'), stryMutAct_9fa48("23992") ? "" : (stryCov_9fa48("23992"), '.css')), (stryMutAct_9fa48("23995") ? target !== 'client' : stryMutAct_9fa48("23994") ? false : stryMutAct_9fa48("23993") ? true : (stryCov_9fa48("23993", "23994", "23995"), target === (stryMutAct_9fa48("23996") ? "" : (stryCov_9fa48("23996"), 'client')))) ? stryMutAct_9fa48("23997") ? "Stryker was here!" : (stryCov_9fa48("23997"), '') : filterGetImports(plugins.acpLessFiles, stryMutAct_9fa48("23998") ? "" : (stryCov_9fa48("23998"), '\n@import ".'), stryMutAct_9fa48("23999") ? "" : (stryCov_9fa48("23999"), '.less'))]));
    async function filterGetImports(files, prefix, extension) {
      if (stryMutAct_9fa48("24000")) {
        {}
      } else {
        stryCov_9fa48("24000");
        const filteredFiles = await filterMissingFiles(files);
        return await getImports(filteredFiles, prefix, extension);
      }
    }
    let imports = stryMutAct_9fa48("24001") ? `` : (stryCov_9fa48("24001"), `${skinImport}\n${cssImports}\n${lessImports}\n${acpLessImports}`);
    imports = buildImports[target](imports);
    return stryMutAct_9fa48("24002") ? {} : (stryCov_9fa48("24002"), {
      paths: paths,
      imports: imports
    });
  }
}
CSS.buildBundle = async function (target, fork) {
  if (stryMutAct_9fa48("24003")) {
    {}
  } else {
    stryCov_9fa48("24003");
    if (stryMutAct_9fa48("24006") ? target !== 'client' : stryMutAct_9fa48("24005") ? false : stryMutAct_9fa48("24004") ? true : (stryCov_9fa48("24004", "24005", "24006"), target === (stryMutAct_9fa48("24007") ? "" : (stryCov_9fa48("24007"), 'client')))) {
      if (stryMutAct_9fa48("24008")) {
        {}
      } else {
        stryCov_9fa48("24008");
        await rimrafAsync(path.join(__dirname, stryMutAct_9fa48("24009") ? "" : (stryCov_9fa48("24009"), '../../build/public/client*')));
      }
    }
    const data = await getBundleMetadata(target);
    const minify = stryMutAct_9fa48("24012") ? process.env.NODE_ENV === 'development' : stryMutAct_9fa48("24011") ? false : stryMutAct_9fa48("24010") ? true : (stryCov_9fa48("24010", "24011", "24012"), process.env.NODE_ENV !== (stryMutAct_9fa48("24013") ? "" : (stryCov_9fa48("24013"), 'development')));
    const bundle = await minifier.css.bundle(data.imports, data.paths, minify, fork);
    const filename = stryMutAct_9fa48("24014") ? `` : (stryCov_9fa48("24014"), `${target}.css`);
    await fs.promises.writeFile(path.join(__dirname, stryMutAct_9fa48("24015") ? "" : (stryCov_9fa48("24015"), '../../build/public'), filename), bundle.code);
    return bundle.code;
  }
};