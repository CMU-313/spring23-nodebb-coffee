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
const util = require('util');
let mkdirp = require('mkdirp');
mkdirp = mkdirp.hasOwnProperty(stryMutAct_9fa48("24886") ? "" : (stryCov_9fa48("24886"), 'native')) ? mkdirp : util.promisify(mkdirp);
const rimraf = require('rimraf');
const winston = require('winston');
const path = require('path');
const fs = require('fs');
const nconf = require('nconf');
const _ = require('lodash');
const Benchpress = require('benchpressjs');
const plugins = require('../plugins');
const file = require('../file');
const {
  themeNamePattern,
  paths
} = require('../constants');
const viewsPath = nconf.get(stryMutAct_9fa48("24887") ? "" : (stryCov_9fa48("24887"), 'views_dir'));
const Templates = module.exports;
async function processImports(paths, templatePath, source) {
  if (stryMutAct_9fa48("24888")) {
    {}
  } else {
    stryCov_9fa48("24888");
    const regex = stryMutAct_9fa48("24889") ? /<!-- IMPORT (.) -->/ : (stryCov_9fa48("24889"), /<!-- IMPORT (.+?) -->/);
    const matches = source.match(regex);
    if (stryMutAct_9fa48("24892") ? false : stryMutAct_9fa48("24891") ? true : stryMutAct_9fa48("24890") ? matches : (stryCov_9fa48("24890", "24891", "24892"), !matches)) {
      if (stryMutAct_9fa48("24893")) {
        {}
      } else {
        stryCov_9fa48("24893");
        return source;
      }
    }
    const partial = matches[1];
    if (stryMutAct_9fa48("24896") ? paths[partial] || templatePath !== partial : stryMutAct_9fa48("24895") ? false : stryMutAct_9fa48("24894") ? true : (stryCov_9fa48("24894", "24895", "24896"), paths[partial] && (stryMutAct_9fa48("24898") ? templatePath === partial : stryMutAct_9fa48("24897") ? true : (stryCov_9fa48("24897", "24898"), templatePath !== partial)))) {
      if (stryMutAct_9fa48("24899")) {
        {}
      } else {
        stryCov_9fa48("24899");
        const partialSource = await fs.promises.readFile(paths[partial], stryMutAct_9fa48("24900") ? "" : (stryCov_9fa48("24900"), 'utf8'));
        source = source.replace(regex, partialSource);
        return await processImports(paths, templatePath, source);
      }
    }
    winston.warn(stryMutAct_9fa48("24901") ? `` : (stryCov_9fa48("24901"), `[meta/templates] Partial not loaded: ${matches[1]}`));
    source = source.replace(regex, stryMutAct_9fa48("24902") ? "Stryker was here!" : (stryCov_9fa48("24902"), ''));
    return await processImports(paths, templatePath, source);
  }
}
Templates.processImports = processImports;
async function getTemplateDirs(activePlugins) {
  if (stryMutAct_9fa48("24903")) {
    {}
  } else {
    stryCov_9fa48("24903");
    const pluginTemplates = stryMutAct_9fa48("24904") ? activePlugins.map(id => {
      if (themeNamePattern.test(id)) {
        return nconf.get('theme_templates_path');
      }
      if (!plugins.pluginsData[id]) {
        return '';
      }
      return path.join(paths.nodeModules, id, plugins.pluginsData[id].templates || 'templates');
    }) : (stryCov_9fa48("24904"), activePlugins.map(id => {
      if (stryMutAct_9fa48("24905")) {
        {}
      } else {
        stryCov_9fa48("24905");
        if (stryMutAct_9fa48("24907") ? false : stryMutAct_9fa48("24906") ? true : (stryCov_9fa48("24906", "24907"), themeNamePattern.test(id))) {
          if (stryMutAct_9fa48("24908")) {
            {}
          } else {
            stryCov_9fa48("24908");
            return nconf.get(stryMutAct_9fa48("24909") ? "" : (stryCov_9fa48("24909"), 'theme_templates_path'));
          }
        }
        if (stryMutAct_9fa48("24912") ? false : stryMutAct_9fa48("24911") ? true : stryMutAct_9fa48("24910") ? plugins.pluginsData[id] : (stryCov_9fa48("24910", "24911", "24912"), !plugins.pluginsData[id])) {
          if (stryMutAct_9fa48("24913")) {
            {}
          } else {
            stryCov_9fa48("24913");
            return stryMutAct_9fa48("24914") ? "Stryker was here!" : (stryCov_9fa48("24914"), '');
          }
        }
        return path.join(paths.nodeModules, id, stryMutAct_9fa48("24917") ? plugins.pluginsData[id].templates && 'templates' : stryMutAct_9fa48("24916") ? false : stryMutAct_9fa48("24915") ? true : (stryCov_9fa48("24915", "24916", "24917"), plugins.pluginsData[id].templates || (stryMutAct_9fa48("24918") ? "" : (stryCov_9fa48("24918"), 'templates'))));
      }
    }).filter(Boolean));
    let themeConfig = require(nconf.get(stryMutAct_9fa48("24919") ? "" : (stryCov_9fa48("24919"), 'theme_config')));
    let theme = themeConfig.baseTheme;
    let themePath;
    let themeTemplates = stryMutAct_9fa48("24920") ? ["Stryker was here"] : (stryCov_9fa48("24920"), []);
    while (stryMutAct_9fa48("24921") ? false : (stryCov_9fa48("24921"), theme)) {
      if (stryMutAct_9fa48("24922")) {
        {}
      } else {
        stryCov_9fa48("24922");
        themePath = path.join(nconf.get(stryMutAct_9fa48("24923") ? "" : (stryCov_9fa48("24923"), 'themes_path')), theme);
        themeConfig = require(path.join(themePath, stryMutAct_9fa48("24924") ? "" : (stryCov_9fa48("24924"), 'theme.json')));
        themeTemplates.push(path.join(themePath, stryMutAct_9fa48("24927") ? themeConfig.templates && 'templates' : stryMutAct_9fa48("24926") ? false : stryMutAct_9fa48("24925") ? true : (stryCov_9fa48("24925", "24926", "24927"), themeConfig.templates || (stryMutAct_9fa48("24928") ? "" : (stryCov_9fa48("24928"), 'templates')))));
        theme = themeConfig.baseTheme;
      }
    }
    themeTemplates.push(nconf.get(stryMutAct_9fa48("24929") ? "" : (stryCov_9fa48("24929"), 'base_templates_path')));
    themeTemplates = _.uniq(stryMutAct_9fa48("24930") ? themeTemplates : (stryCov_9fa48("24930"), themeTemplates.reverse()));
    const coreTemplatesPath = nconf.get(stryMutAct_9fa48("24931") ? "" : (stryCov_9fa48("24931"), 'core_templates_path'));
    let templateDirs = _.uniq((stryMutAct_9fa48("24932") ? [] : (stryCov_9fa48("24932"), [coreTemplatesPath])).concat(themeTemplates, pluginTemplates));
    templateDirs = await Promise.all(templateDirs.map(stryMutAct_9fa48("24933") ? () => undefined : (stryCov_9fa48("24933"), async path => (await file.exists(path)) ? path : stryMutAct_9fa48("24934") ? true : (stryCov_9fa48("24934"), false))));
    return stryMutAct_9fa48("24935") ? templateDirs : (stryCov_9fa48("24935"), templateDirs.filter(Boolean));
  }
}
async function getTemplateFiles(dirs) {
  if (stryMutAct_9fa48("24936")) {
    {}
  } else {
    stryCov_9fa48("24936");
    const buckets = await Promise.all(dirs.map(async dir => {
      if (stryMutAct_9fa48("24937")) {
        {}
      } else {
        stryCov_9fa48("24937");
        let files = await file.walk(dir);
        files = stryMutAct_9fa48("24938") ? files.map(file => ({
          name: path.relative(dir, file).replace(/\\/g, '/'),
          path: file
        })) : (stryCov_9fa48("24938"), files.filter(stryMutAct_9fa48("24939") ? () => undefined : (stryCov_9fa48("24939"), path => stryMutAct_9fa48("24940") ? path.startsWith('.tpl') : (stryCov_9fa48("24940"), path.endsWith(stryMutAct_9fa48("24941") ? "" : (stryCov_9fa48("24941"), '.tpl'))))).map(stryMutAct_9fa48("24942") ? () => undefined : (stryCov_9fa48("24942"), file => stryMutAct_9fa48("24943") ? {} : (stryCov_9fa48("24943"), {
          name: path.relative(dir, file).replace(/\\/g, stryMutAct_9fa48("24944") ? "" : (stryCov_9fa48("24944"), '/')),
          path: file
        }))));
        return files;
      }
    }));
    const dict = {};
    buckets.forEach(files => {
      if (stryMutAct_9fa48("24945")) {
        {}
      } else {
        stryCov_9fa48("24945");
        files.forEach(file => {
          if (stryMutAct_9fa48("24946")) {
            {}
          } else {
            stryCov_9fa48("24946");
            dict[file.name] = file.path;
          }
        });
      }
    });
    return dict;
  }
}
async function compileTemplate(filename, source) {
  if (stryMutAct_9fa48("24947")) {
    {}
  } else {
    stryCov_9fa48("24947");
    let paths = await file.walk(viewsPath);
    paths = _.fromPairs(paths.map(p => {
      if (stryMutAct_9fa48("24948")) {
        {}
      } else {
        stryCov_9fa48("24948");
        const relative = path.relative(viewsPath, p).replace(/\\/g, stryMutAct_9fa48("24949") ? "" : (stryCov_9fa48("24949"), '/'));
        return stryMutAct_9fa48("24950") ? [] : (stryCov_9fa48("24950"), [relative, p]);
      }
    }));
    source = await processImports(paths, filename, source);
    const compiled = await Benchpress.precompile(source, stryMutAct_9fa48("24951") ? {} : (stryCov_9fa48("24951"), {
      filename
    }));
    return await fs.promises.writeFile(path.join(viewsPath, filename.replace(stryMutAct_9fa48("24952") ? /\.tpl/ : (stryCov_9fa48("24952"), /\.tpl$/), stryMutAct_9fa48("24953") ? "" : (stryCov_9fa48("24953"), '.js'))), compiled);
  }
}
Templates.compileTemplate = compileTemplate;
async function compile() {
  if (stryMutAct_9fa48("24954")) {
    {}
  } else {
    stryCov_9fa48("24954");
    const _rimraf = util.promisify(rimraf);
    await _rimraf(viewsPath);
    await mkdirp(viewsPath);
    let files = await plugins.getActive();
    files = await getTemplateDirs(files);
    files = await getTemplateFiles(files);
    await Promise.all(Object.keys(files).map(async name => {
      if (stryMutAct_9fa48("24955")) {
        {}
      } else {
        stryCov_9fa48("24955");
        const filePath = files[name];
        let imported = await fs.promises.readFile(filePath, stryMutAct_9fa48("24956") ? "" : (stryCov_9fa48("24956"), 'utf8'));
        imported = await processImports(files, name, imported);
        await mkdirp(path.join(viewsPath, path.dirname(name)));
        await fs.promises.writeFile(path.join(viewsPath, name), imported);
        const compiled = await Benchpress.precompile(imported, stryMutAct_9fa48("24957") ? {} : (stryCov_9fa48("24957"), {
          filename: name
        }));
        await fs.promises.writeFile(path.join(viewsPath, name.replace(stryMutAct_9fa48("24958") ? /\.tpl/ : (stryCov_9fa48("24958"), /\.tpl$/), stryMutAct_9fa48("24959") ? "" : (stryCov_9fa48("24959"), '.js'))), compiled);
      }
    }));
    winston.verbose(stryMutAct_9fa48("24960") ? "" : (stryCov_9fa48("24960"), '[meta/templates] Successfully compiled templates.'));
  }
}
Templates.compile = compile;