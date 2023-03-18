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
const _ = require('lodash');
const fs = require('fs');
const file = require('../file');
const Meta = require('./index');
const events = require('../events');
const utils = require('../utils');
const {
  themeNamePattern
} = require('../constants');
const Themes = module.exports;
Themes.get = async () => {
  if (stryMutAct_9fa48("24961")) {
    {}
  } else {
    stryCov_9fa48("24961");
    const themePath = nconf.get(stryMutAct_9fa48("24962") ? "" : (stryCov_9fa48("24962"), 'themes_path'));
    if (stryMutAct_9fa48("24965") ? typeof themePath === 'string' : stryMutAct_9fa48("24964") ? false : stryMutAct_9fa48("24963") ? true : (stryCov_9fa48("24963", "24964", "24965"), typeof themePath !== (stryMutAct_9fa48("24966") ? "" : (stryCov_9fa48("24966"), 'string')))) {
      if (stryMutAct_9fa48("24967")) {
        {}
      } else {
        stryCov_9fa48("24967");
        return stryMutAct_9fa48("24968") ? ["Stryker was here"] : (stryCov_9fa48("24968"), []);
      }
    }
    let themes = await getThemes(themePath);
    themes = stryMutAct_9fa48("24969") ? _.flatten(themes) : (stryCov_9fa48("24969"), _.flatten(themes).filter(Boolean));
    themes = await Promise.all(themes.map(async theme => {
      if (stryMutAct_9fa48("24970")) {
        {}
      } else {
        stryCov_9fa48("24970");
        const config = path.join(themePath, theme, stryMutAct_9fa48("24971") ? "" : (stryCov_9fa48("24971"), 'theme.json'));
        const pack = path.join(themePath, theme, stryMutAct_9fa48("24972") ? "" : (stryCov_9fa48("24972"), 'package.json'));
        try {
          if (stryMutAct_9fa48("24973")) {
            {}
          } else {
            stryCov_9fa48("24973");
            const [configFile, packageFile] = await Promise.all(stryMutAct_9fa48("24974") ? [] : (stryCov_9fa48("24974"), [fs.promises.readFile(config, stryMutAct_9fa48("24975") ? "" : (stryCov_9fa48("24975"), 'utf8')), fs.promises.readFile(pack, stryMutAct_9fa48("24976") ? "" : (stryCov_9fa48("24976"), 'utf8'))]));
            const configObj = JSON.parse(configFile);
            const packageObj = JSON.parse(packageFile);
            configObj.id = packageObj.name;

            // Minor adjustments for API output
            configObj.type = stryMutAct_9fa48("24977") ? "" : (stryCov_9fa48("24977"), 'local');
            if (stryMutAct_9fa48("24979") ? false : stryMutAct_9fa48("24978") ? true : (stryCov_9fa48("24978", "24979"), configObj.screenshot)) {
              if (stryMutAct_9fa48("24980")) {
                {}
              } else {
                stryCov_9fa48("24980");
                configObj.screenshot_url = stryMutAct_9fa48("24981") ? `` : (stryCov_9fa48("24981"), `${nconf.get(stryMutAct_9fa48("24982") ? "" : (stryCov_9fa48("24982"), 'relative_path'))}/css/previews/${encodeURIComponent(configObj.id)}`);
              }
            } else {
              if (stryMutAct_9fa48("24983")) {
                {}
              } else {
                stryCov_9fa48("24983");
                configObj.screenshot_url = stryMutAct_9fa48("24984") ? `` : (stryCov_9fa48("24984"), `${nconf.get(stryMutAct_9fa48("24985") ? "" : (stryCov_9fa48("24985"), 'relative_path'))}/assets/images/themes/default.png`);
              }
            }
            return configObj;
          }
        } catch (err) {
          if (stryMutAct_9fa48("24986")) {
            {}
          } else {
            stryCov_9fa48("24986");
            if (stryMutAct_9fa48("24989") ? err.code !== 'ENOENT' : stryMutAct_9fa48("24988") ? false : stryMutAct_9fa48("24987") ? true : (stryCov_9fa48("24987", "24988", "24989"), err.code === (stryMutAct_9fa48("24990") ? "" : (stryCov_9fa48("24990"), 'ENOENT')))) {
              if (stryMutAct_9fa48("24991")) {
                {}
              } else {
                stryCov_9fa48("24991");
                return stryMutAct_9fa48("24992") ? true : (stryCov_9fa48("24992"), false);
              }
            }
            winston.error(stryMutAct_9fa48("24993") ? `` : (stryCov_9fa48("24993"), `[themes] Unable to parse theme.json ${theme}`));
            return stryMutAct_9fa48("24994") ? true : (stryCov_9fa48("24994"), false);
          }
        }
      }
    }));
    return stryMutAct_9fa48("24995") ? themes : (stryCov_9fa48("24995"), themes.filter(Boolean));
  }
};
async function getThemes(themePath) {
  if (stryMutAct_9fa48("24996")) {
    {}
  } else {
    stryCov_9fa48("24996");
    let dirs = await fs.promises.readdir(themePath);
    dirs = stryMutAct_9fa48("24997") ? dirs : (stryCov_9fa48("24997"), dirs.filter(stryMutAct_9fa48("24998") ? () => undefined : (stryCov_9fa48("24998"), dir => stryMutAct_9fa48("25001") ? themeNamePattern.test(dir) && dir.startsWith('@') : stryMutAct_9fa48("25000") ? false : stryMutAct_9fa48("24999") ? true : (stryCov_9fa48("24999", "25000", "25001"), themeNamePattern.test(dir) || (stryMutAct_9fa48("25002") ? dir.endsWith('@') : (stryCov_9fa48("25002"), dir.startsWith(stryMutAct_9fa48("25003") ? "" : (stryCov_9fa48("25003"), '@'))))))));
    return await Promise.all(dirs.map(async dir => {
      if (stryMutAct_9fa48("25004")) {
        {}
      } else {
        stryCov_9fa48("25004");
        try {
          if (stryMutAct_9fa48("25005")) {
            {}
          } else {
            stryCov_9fa48("25005");
            const dirpath = path.join(themePath, dir);
            const stat = await fs.promises.stat(dirpath);
            if (stryMutAct_9fa48("25008") ? false : stryMutAct_9fa48("25007") ? true : stryMutAct_9fa48("25006") ? stat.isDirectory() : (stryCov_9fa48("25006", "25007", "25008"), !stat.isDirectory())) {
              if (stryMutAct_9fa48("25009")) {
                {}
              } else {
                stryCov_9fa48("25009");
                return stryMutAct_9fa48("25010") ? true : (stryCov_9fa48("25010"), false);
              }
            }
            if (stryMutAct_9fa48("25013") ? false : stryMutAct_9fa48("25012") ? true : stryMutAct_9fa48("25011") ? dir.startsWith('@') : (stryCov_9fa48("25011", "25012", "25013"), !(stryMutAct_9fa48("25014") ? dir.endsWith('@') : (stryCov_9fa48("25014"), dir.startsWith(stryMutAct_9fa48("25015") ? "" : (stryCov_9fa48("25015"), '@')))))) {
              if (stryMutAct_9fa48("25016")) {
                {}
              } else {
                stryCov_9fa48("25016");
                return dir;
              }
            }
            const themes = await getThemes(path.join(themePath, dir));
            return themes.map(stryMutAct_9fa48("25017") ? () => undefined : (stryCov_9fa48("25017"), theme => path.join(dir, theme)));
          }
        } catch (err) {
          if (stryMutAct_9fa48("25018")) {
            {}
          } else {
            stryCov_9fa48("25018");
            if (stryMutAct_9fa48("25021") ? err.code !== 'ENOENT' : stryMutAct_9fa48("25020") ? false : stryMutAct_9fa48("25019") ? true : (stryCov_9fa48("25019", "25020", "25021"), err.code === (stryMutAct_9fa48("25022") ? "" : (stryCov_9fa48("25022"), 'ENOENT')))) {
              if (stryMutAct_9fa48("25023")) {
                {}
              } else {
                stryCov_9fa48("25023");
                return stryMutAct_9fa48("25024") ? true : (stryCov_9fa48("25024"), false);
              }
            }
            throw err;
          }
        }
      }
    }));
  }
}
Themes.set = async data => {
  if (stryMutAct_9fa48("25025")) {
    {}
  } else {
    stryCov_9fa48("25025");
    switch (data.type) {
      case stryMutAct_9fa48("25027") ? "" : (stryCov_9fa48("25027"), 'local'):
        if (stryMutAct_9fa48("25026")) {} else {
          stryCov_9fa48("25026");
          {
            if (stryMutAct_9fa48("25028")) {
              {}
            } else {
              stryCov_9fa48("25028");
              const current = await Meta.configs.get(stryMutAct_9fa48("25029") ? "" : (stryCov_9fa48("25029"), 'theme:id'));
              if (stryMutAct_9fa48("25032") ? current === data.id : stryMutAct_9fa48("25031") ? false : stryMutAct_9fa48("25030") ? true : (stryCov_9fa48("25030", "25031", "25032"), current !== data.id)) {
                if (stryMutAct_9fa48("25033")) {
                  {}
                } else {
                  stryCov_9fa48("25033");
                  const pathToThemeJson = path.join(nconf.get(stryMutAct_9fa48("25034") ? "" : (stryCov_9fa48("25034"), 'themes_path')), data.id, stryMutAct_9fa48("25035") ? "" : (stryCov_9fa48("25035"), 'theme.json'));
                  if (stryMutAct_9fa48("25038") ? false : stryMutAct_9fa48("25037") ? true : stryMutAct_9fa48("25036") ? pathToThemeJson.startsWith(nconf.get('themes_path')) : (stryCov_9fa48("25036", "25037", "25038"), !(stryMutAct_9fa48("25039") ? pathToThemeJson.endsWith(nconf.get('themes_path')) : (stryCov_9fa48("25039"), pathToThemeJson.startsWith(nconf.get(stryMutAct_9fa48("25040") ? "" : (stryCov_9fa48("25040"), 'themes_path'))))))) {
                    if (stryMutAct_9fa48("25041")) {
                      {}
                    } else {
                      stryCov_9fa48("25041");
                      throw new Error(stryMutAct_9fa48("25042") ? "" : (stryCov_9fa48("25042"), '[[error:invalid-theme-id]]'));
                    }
                  }
                  let config = await fs.promises.readFile(pathToThemeJson, stryMutAct_9fa48("25043") ? "" : (stryCov_9fa48("25043"), 'utf8'));
                  config = JSON.parse(config);

                  // Re-set the themes path (for when NodeBB is reloaded)
                  Themes.setPath(config);
                  await Meta.configs.setMultiple(stryMutAct_9fa48("25044") ? {} : (stryCov_9fa48("25044"), {
                    'theme:type': data.type,
                    'theme:id': data.id,
                    'theme:staticDir': config.staticDir ? config.staticDir : stryMutAct_9fa48("25045") ? "Stryker was here!" : (stryCov_9fa48("25045"), ''),
                    'theme:templates': config.templates ? config.templates : stryMutAct_9fa48("25046") ? "Stryker was here!" : (stryCov_9fa48("25046"), ''),
                    'theme:src': stryMutAct_9fa48("25047") ? "Stryker was here!" : (stryCov_9fa48("25047"), ''),
                    bootswatchSkin: stryMutAct_9fa48("25048") ? "Stryker was here!" : (stryCov_9fa48("25048"), '')
                  }));
                  await events.log(stryMutAct_9fa48("25049") ? {} : (stryCov_9fa48("25049"), {
                    type: stryMutAct_9fa48("25050") ? "" : (stryCov_9fa48("25050"), 'theme-set'),
                    uid: stryMutAct_9fa48("25053") ? parseInt(data.uid, 10) && 0 : stryMutAct_9fa48("25052") ? false : stryMutAct_9fa48("25051") ? true : (stryCov_9fa48("25051", "25052", "25053"), parseInt(data.uid, 10) || 0),
                    ip: stryMutAct_9fa48("25056") ? data.ip && '127.0.0.1' : stryMutAct_9fa48("25055") ? false : stryMutAct_9fa48("25054") ? true : (stryCov_9fa48("25054", "25055", "25056"), data.ip || (stryMutAct_9fa48("25057") ? "" : (stryCov_9fa48("25057"), '127.0.0.1'))),
                    text: data.id
                  }));
                  Meta.reloadRequired = stryMutAct_9fa48("25058") ? false : (stryCov_9fa48("25058"), true);
                }
              }
              break;
            }
          }
        }
      case stryMutAct_9fa48("25060") ? "" : (stryCov_9fa48("25060"), 'bootswatch'):
        if (stryMutAct_9fa48("25059")) {} else {
          stryCov_9fa48("25059");
          await Meta.configs.setMultiple(stryMutAct_9fa48("25061") ? {} : (stryCov_9fa48("25061"), {
            'theme:src': data.src,
            bootswatchSkin: stryMutAct_9fa48("25062") ? data.id.toUpperCase() : (stryCov_9fa48("25062"), data.id.toLowerCase())
          }));
          break;
        }
    }
  }
};
Themes.setupPaths = async () => {
  if (stryMutAct_9fa48("25063")) {
    {}
  } else {
    stryCov_9fa48("25063");
    const data = await utils.promiseParallel(stryMutAct_9fa48("25064") ? {} : (stryCov_9fa48("25064"), {
      themesData: Themes.get(),
      currentThemeId: Meta.configs.get(stryMutAct_9fa48("25065") ? "" : (stryCov_9fa48("25065"), 'theme:id'))
    }));
    const themeId = stryMutAct_9fa48("25068") ? data.currentThemeId && 'nodebb-theme-persona' : stryMutAct_9fa48("25067") ? false : stryMutAct_9fa48("25066") ? true : (stryCov_9fa48("25066", "25067", "25068"), data.currentThemeId || (stryMutAct_9fa48("25069") ? "" : (stryCov_9fa48("25069"), 'nodebb-theme-persona')));
    if (stryMutAct_9fa48("25072") ? process.env.NODE_ENV !== 'development' : stryMutAct_9fa48("25071") ? false : stryMutAct_9fa48("25070") ? true : (stryCov_9fa48("25070", "25071", "25072"), process.env.NODE_ENV === (stryMutAct_9fa48("25073") ? "" : (stryCov_9fa48("25073"), 'development')))) {
      if (stryMutAct_9fa48("25074")) {
        {}
      } else {
        stryCov_9fa48("25074");
        winston.info(stryMutAct_9fa48("25075") ? `` : (stryCov_9fa48("25075"), `[themes] Using theme ${themeId}`));
      }
    }
    const themeObj = data.themesData.find(stryMutAct_9fa48("25076") ? () => undefined : (stryCov_9fa48("25076"), themeObj => stryMutAct_9fa48("25079") ? themeObj.id !== themeId : stryMutAct_9fa48("25078") ? false : stryMutAct_9fa48("25077") ? true : (stryCov_9fa48("25077", "25078", "25079"), themeObj.id === themeId)));
    if (stryMutAct_9fa48("25082") ? false : stryMutAct_9fa48("25081") ? true : stryMutAct_9fa48("25080") ? themeObj : (stryCov_9fa48("25080", "25081", "25082"), !themeObj)) {
      if (stryMutAct_9fa48("25083")) {
        {}
      } else {
        stryCov_9fa48("25083");
        throw new Error(stryMutAct_9fa48("25084") ? "" : (stryCov_9fa48("25084"), '[[error:theme-not-found]]'));
      }
    }
    Themes.setPath(themeObj);
  }
};
Themes.setPath = function (themeObj) {
  if (stryMutAct_9fa48("25085")) {
    {}
  } else {
    stryCov_9fa48("25085");
    // Theme's templates path
    let themePath = nconf.get(stryMutAct_9fa48("25086") ? "" : (stryCov_9fa48("25086"), 'base_templates_path'));
    const fallback = path.join(nconf.get(stryMutAct_9fa48("25087") ? "" : (stryCov_9fa48("25087"), 'themes_path')), themeObj.id, stryMutAct_9fa48("25088") ? "" : (stryCov_9fa48("25088"), 'templates'));
    if (stryMutAct_9fa48("25090") ? false : stryMutAct_9fa48("25089") ? true : (stryCov_9fa48("25089", "25090"), themeObj.templates)) {
      if (stryMutAct_9fa48("25091")) {
        {}
      } else {
        stryCov_9fa48("25091");
        themePath = path.join(nconf.get(stryMutAct_9fa48("25092") ? "" : (stryCov_9fa48("25092"), 'themes_path')), themeObj.id, themeObj.templates);
      }
    } else if (stryMutAct_9fa48("25094") ? false : stryMutAct_9fa48("25093") ? true : (stryCov_9fa48("25093", "25094"), file.existsSync(fallback))) {
      if (stryMutAct_9fa48("25095")) {
        {}
      } else {
        stryCov_9fa48("25095");
        themePath = fallback;
      }
    }
    nconf.set(stryMutAct_9fa48("25096") ? "" : (stryCov_9fa48("25096"), 'theme_templates_path'), themePath);
    nconf.set(stryMutAct_9fa48("25097") ? "" : (stryCov_9fa48("25097"), 'theme_config'), path.join(nconf.get(stryMutAct_9fa48("25098") ? "" : (stryCov_9fa48("25098"), 'themes_path')), themeObj.id, stryMutAct_9fa48("25099") ? "" : (stryCov_9fa48("25099"), 'theme.json')));
  }
};