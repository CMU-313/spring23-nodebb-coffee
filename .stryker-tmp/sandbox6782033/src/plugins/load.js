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
const semver = require('semver');
const async = require('async');
const winston = require('winston');
const nconf = require('nconf');
const _ = require('lodash');
const meta = require('../meta');
const {
  themeNamePattern
} = require('../constants');
module.exports = function (Plugins) {
  if (stryMutAct_9fa48("28178")) {
    {}
  } else {
    stryCov_9fa48("28178");
    async function registerPluginAssets(pluginData, fields) {
      if (stryMutAct_9fa48("28179")) {
        {}
      } else {
        stryCov_9fa48("28179");
        function add(dest, arr) {
          if (stryMutAct_9fa48("28180")) {
            {}
          } else {
            stryCov_9fa48("28180");
            dest.push(...(stryMutAct_9fa48("28183") ? arr && [] : stryMutAct_9fa48("28182") ? false : stryMutAct_9fa48("28181") ? true : (stryCov_9fa48("28181", "28182", "28183"), arr || (stryMutAct_9fa48("28184") ? ["Stryker was here"] : (stryCov_9fa48("28184"), [])))));
          }
        }
        const handlers = stryMutAct_9fa48("28185") ? {} : (stryCov_9fa48("28185"), {
          staticDirs: function (next) {
            if (stryMutAct_9fa48("28186")) {
              {}
            } else {
              stryCov_9fa48("28186");
              Plugins.data.getStaticDirectories(pluginData, next);
            }
          },
          cssFiles: function (next) {
            if (stryMutAct_9fa48("28187")) {
              {}
            } else {
              stryCov_9fa48("28187");
              Plugins.data.getFiles(pluginData, stryMutAct_9fa48("28188") ? "" : (stryCov_9fa48("28188"), 'css'), next);
            }
          },
          lessFiles: function (next) {
            if (stryMutAct_9fa48("28189")) {
              {}
            } else {
              stryCov_9fa48("28189");
              Plugins.data.getFiles(pluginData, stryMutAct_9fa48("28190") ? "" : (stryCov_9fa48("28190"), 'less'), next);
            }
          },
          acpLessFiles: function (next) {
            if (stryMutAct_9fa48("28191")) {
              {}
            } else {
              stryCov_9fa48("28191");
              Plugins.data.getFiles(pluginData, stryMutAct_9fa48("28192") ? "" : (stryCov_9fa48("28192"), 'acpLess'), next);
            }
          },
          clientScripts: function (next) {
            if (stryMutAct_9fa48("28193")) {
              {}
            } else {
              stryCov_9fa48("28193");
              Plugins.data.getScripts(pluginData, stryMutAct_9fa48("28194") ? "" : (stryCov_9fa48("28194"), 'client'), next);
            }
          },
          acpScripts: function (next) {
            if (stryMutAct_9fa48("28195")) {
              {}
            } else {
              stryCov_9fa48("28195");
              Plugins.data.getScripts(pluginData, stryMutAct_9fa48("28196") ? "" : (stryCov_9fa48("28196"), 'acp'), next);
            }
          },
          modules: function (next) {
            if (stryMutAct_9fa48("28197")) {
              {}
            } else {
              stryCov_9fa48("28197");
              Plugins.data.getModules(pluginData, next);
            }
          },
          languageData: function (next) {
            if (stryMutAct_9fa48("28198")) {
              {}
            } else {
              stryCov_9fa48("28198");
              Plugins.data.getLanguageData(pluginData, next);
            }
          }
        });
        let methods = {};
        if (stryMutAct_9fa48("28200") ? false : stryMutAct_9fa48("28199") ? true : (stryCov_9fa48("28199", "28200"), Array.isArray(fields))) {
          if (stryMutAct_9fa48("28201")) {
            {}
          } else {
            stryCov_9fa48("28201");
            fields.forEach(field => {
              if (stryMutAct_9fa48("28202")) {
                {}
              } else {
                stryCov_9fa48("28202");
                methods[field] = handlers[field];
              }
            });
          }
        } else {
          if (stryMutAct_9fa48("28203")) {
            {}
          } else {
            stryCov_9fa48("28203");
            methods = handlers;
          }
        }
        const results = await async.parallel(methods);
        Object.assign(Plugins.staticDirs, stryMutAct_9fa48("28206") ? results.staticDirs && {} : stryMutAct_9fa48("28205") ? false : stryMutAct_9fa48("28204") ? true : (stryCov_9fa48("28204", "28205", "28206"), results.staticDirs || {}));
        add(Plugins.cssFiles, results.cssFiles);
        add(Plugins.lessFiles, results.lessFiles);
        add(Plugins.acpLessFiles, results.acpLessFiles);
        add(Plugins.clientScripts, results.clientScripts);
        add(Plugins.acpScripts, results.acpScripts);
        Object.assign(meta.js.scripts.modules, stryMutAct_9fa48("28209") ? results.modules && {} : stryMutAct_9fa48("28208") ? false : stryMutAct_9fa48("28207") ? true : (stryCov_9fa48("28207", "28208", "28209"), results.modules || {}));
        if (stryMutAct_9fa48("28211") ? false : stryMutAct_9fa48("28210") ? true : (stryCov_9fa48("28210", "28211"), results.languageData)) {
          if (stryMutAct_9fa48("28212")) {
            {}
          } else {
            stryCov_9fa48("28212");
            Plugins.languageData.languages = _.union(Plugins.languageData.languages, results.languageData.languages);
            Plugins.languageData.namespaces = _.union(Plugins.languageData.namespaces, results.languageData.namespaces);
            pluginData.languageData = results.languageData;
          }
        }
        Plugins.pluginsData[pluginData.id] = pluginData;
      }
    }
    Plugins.prepareForBuild = async function (targets) {
      if (stryMutAct_9fa48("28213")) {
        {}
      } else {
        stryCov_9fa48("28213");
        const map = stryMutAct_9fa48("28214") ? {} : (stryCov_9fa48("28214"), {
          'plugin static dirs': stryMutAct_9fa48("28215") ? [] : (stryCov_9fa48("28215"), [stryMutAct_9fa48("28216") ? "" : (stryCov_9fa48("28216"), 'staticDirs')]),
          'requirejs modules': stryMutAct_9fa48("28217") ? [] : (stryCov_9fa48("28217"), [stryMutAct_9fa48("28218") ? "" : (stryCov_9fa48("28218"), 'modules')]),
          'client js bundle': stryMutAct_9fa48("28219") ? [] : (stryCov_9fa48("28219"), [stryMutAct_9fa48("28220") ? "" : (stryCov_9fa48("28220"), 'clientScripts')]),
          'admin js bundle': stryMutAct_9fa48("28221") ? [] : (stryCov_9fa48("28221"), [stryMutAct_9fa48("28222") ? "" : (stryCov_9fa48("28222"), 'acpScripts')]),
          'client side styles': stryMutAct_9fa48("28223") ? [] : (stryCov_9fa48("28223"), [stryMutAct_9fa48("28224") ? "" : (stryCov_9fa48("28224"), 'cssFiles'), stryMutAct_9fa48("28225") ? "" : (stryCov_9fa48("28225"), 'lessFiles')]),
          'admin control panel styles': stryMutAct_9fa48("28226") ? [] : (stryCov_9fa48("28226"), [stryMutAct_9fa48("28227") ? "" : (stryCov_9fa48("28227"), 'cssFiles'), stryMutAct_9fa48("28228") ? "" : (stryCov_9fa48("28228"), 'lessFiles'), stryMutAct_9fa48("28229") ? "" : (stryCov_9fa48("28229"), 'acpLessFiles')]),
          languages: stryMutAct_9fa48("28230") ? [] : (stryCov_9fa48("28230"), [stryMutAct_9fa48("28231") ? "" : (stryCov_9fa48("28231"), 'languageData')])
        });
        const fields = _.uniq(_.flatMap(targets, stryMutAct_9fa48("28232") ? () => undefined : (stryCov_9fa48("28232"), target => stryMutAct_9fa48("28235") ? map[target] && [] : stryMutAct_9fa48("28234") ? false : stryMutAct_9fa48("28233") ? true : (stryCov_9fa48("28233", "28234", "28235"), map[target] || (stryMutAct_9fa48("28236") ? ["Stryker was here"] : (stryCov_9fa48("28236"), []))))));

        // clear old data before build
        fields.forEach(field => {
          if (stryMutAct_9fa48("28237")) {
            {}
          } else {
            stryCov_9fa48("28237");
            switch (field) {
              case stryMutAct_9fa48("28238") ? "" : (stryCov_9fa48("28238"), 'clientScripts'):
              case stryMutAct_9fa48("28239") ? "" : (stryCov_9fa48("28239"), 'acpScripts'):
              case stryMutAct_9fa48("28240") ? "" : (stryCov_9fa48("28240"), 'cssFiles'):
              case stryMutAct_9fa48("28241") ? "" : (stryCov_9fa48("28241"), 'lessFiles'):
              case stryMutAct_9fa48("28243") ? "" : (stryCov_9fa48("28243"), 'acpLessFiles'):
                if (stryMutAct_9fa48("28242")) {} else {
                  stryCov_9fa48("28242");
                  Plugins[field].length = 0;
                  break;
                }
              case stryMutAct_9fa48("28245") ? "" : (stryCov_9fa48("28245"), 'languageData'):
                if (stryMutAct_9fa48("28244")) {} else {
                  stryCov_9fa48("28244");
                  Plugins.languageData.languages = stryMutAct_9fa48("28246") ? ["Stryker was here"] : (stryCov_9fa48("28246"), []);
                  Plugins.languageData.namespaces = stryMutAct_9fa48("28247") ? ["Stryker was here"] : (stryCov_9fa48("28247"), []);
                  break;
                }
              // do nothing for modules and staticDirs
            }
          }
        });
        winston.verbose(stryMutAct_9fa48("28248") ? `` : (stryCov_9fa48("28248"), `[plugins] loading the following fields from plugin data: ${fields.join(stryMutAct_9fa48("28249") ? "" : (stryCov_9fa48("28249"), ', '))}`));
        const plugins = await Plugins.data.getActive();
        await Promise.all(plugins.map(stryMutAct_9fa48("28250") ? () => undefined : (stryCov_9fa48("28250"), p => registerPluginAssets(p, fields))));
      }
    };
    Plugins.loadPlugin = async function (pluginPath) {
      if (stryMutAct_9fa48("28251")) {
        {}
      } else {
        stryCov_9fa48("28251");
        let pluginData;
        try {
          if (stryMutAct_9fa48("28252")) {
            {}
          } else {
            stryCov_9fa48("28252");
            pluginData = await Plugins.data.loadPluginInfo(pluginPath);
          }
        } catch (err) {
          if (stryMutAct_9fa48("28253")) {
            {}
          } else {
            stryCov_9fa48("28253");
            if (stryMutAct_9fa48("28256") ? err.message !== '[[error:parse-error]]' : stryMutAct_9fa48("28255") ? false : stryMutAct_9fa48("28254") ? true : (stryCov_9fa48("28254", "28255", "28256"), err.message === (stryMutAct_9fa48("28257") ? "" : (stryCov_9fa48("28257"), '[[error:parse-error]]')))) {
              if (stryMutAct_9fa48("28258")) {
                {}
              } else {
                stryCov_9fa48("28258");
                return;
              }
            }
            if (stryMutAct_9fa48("28261") ? false : stryMutAct_9fa48("28260") ? true : stryMutAct_9fa48("28259") ? themeNamePattern.test(pluginPath) : (stryCov_9fa48("28259", "28260", "28261"), !themeNamePattern.test(pluginPath))) {
              if (stryMutAct_9fa48("28262")) {
                {}
              } else {
                stryCov_9fa48("28262");
                throw err;
              }
            }
            return;
          }
        }
        checkVersion(pluginData);
        try {
          if (stryMutAct_9fa48("28263")) {
            {}
          } else {
            stryCov_9fa48("28263");
            registerHooks(pluginData);
            await registerPluginAssets(pluginData);
          }
        } catch (err) {
          if (stryMutAct_9fa48("28264")) {
            {}
          } else {
            stryCov_9fa48("28264");
            winston.error(err.stack);
            winston.verbose(stryMutAct_9fa48("28265") ? `` : (stryCov_9fa48("28265"), `[plugins] Could not load plugin : ${pluginData.id}`));
            return;
          }
        }
        if (stryMutAct_9fa48("28268") ? false : stryMutAct_9fa48("28267") ? true : stryMutAct_9fa48("28266") ? pluginData.private : (stryCov_9fa48("28266", "28267", "28268"), !pluginData.private)) {
          if (stryMutAct_9fa48("28269")) {
            {}
          } else {
            stryCov_9fa48("28269");
            Plugins.loadedPlugins.push(stryMutAct_9fa48("28270") ? {} : (stryCov_9fa48("28270"), {
              id: pluginData.id,
              version: pluginData.version
            }));
          }
        }
        winston.verbose(stryMutAct_9fa48("28271") ? `` : (stryCov_9fa48("28271"), `[plugins] Loaded plugin: ${pluginData.id}`));
      }
    };
    function checkVersion(pluginData) {
      if (stryMutAct_9fa48("28272")) {
        {}
      } else {
        stryCov_9fa48("28272");
        function add() {
          if (stryMutAct_9fa48("28273")) {
            {}
          } else {
            stryCov_9fa48("28273");
            if (stryMutAct_9fa48("28276") ? false : stryMutAct_9fa48("28275") ? true : stryMutAct_9fa48("28274") ? Plugins.versionWarning.includes(pluginData.id) : (stryCov_9fa48("28274", "28275", "28276"), !Plugins.versionWarning.includes(pluginData.id))) {
              if (stryMutAct_9fa48("28277")) {
                {}
              } else {
                stryCov_9fa48("28277");
                Plugins.versionWarning.push(pluginData.id);
              }
            }
          }
        }
        if (stryMutAct_9fa48("28280") ? pluginData.nbbpm && pluginData.nbbpm.compatibility || semver.validRange(pluginData.nbbpm.compatibility) : stryMutAct_9fa48("28279") ? false : stryMutAct_9fa48("28278") ? true : (stryCov_9fa48("28278", "28279", "28280"), (stryMutAct_9fa48("28282") ? pluginData.nbbpm || pluginData.nbbpm.compatibility : stryMutAct_9fa48("28281") ? true : (stryCov_9fa48("28281", "28282"), pluginData.nbbpm && pluginData.nbbpm.compatibility)) && semver.validRange(pluginData.nbbpm.compatibility))) {
          if (stryMutAct_9fa48("28283")) {
            {}
          } else {
            stryCov_9fa48("28283");
            if (stryMutAct_9fa48("28286") ? false : stryMutAct_9fa48("28285") ? true : stryMutAct_9fa48("28284") ? semver.satisfies(nconf.get('version'), pluginData.nbbpm.compatibility) : (stryCov_9fa48("28284", "28285", "28286"), !semver.satisfies(nconf.get(stryMutAct_9fa48("28287") ? "" : (stryCov_9fa48("28287"), 'version')), pluginData.nbbpm.compatibility))) {
              if (stryMutAct_9fa48("28288")) {
                {}
              } else {
                stryCov_9fa48("28288");
                add();
              }
            }
          }
        } else {
          if (stryMutAct_9fa48("28289")) {
            {}
          } else {
            stryCov_9fa48("28289");
            add();
          }
        }
      }
    }
    function registerHooks(pluginData) {
      if (stryMutAct_9fa48("28290")) {
        {}
      } else {
        stryCov_9fa48("28290");
        try {
          if (stryMutAct_9fa48("28291")) {
            {}
          } else {
            stryCov_9fa48("28291");
            if (stryMutAct_9fa48("28294") ? false : stryMutAct_9fa48("28293") ? true : stryMutAct_9fa48("28292") ? Plugins.libraries[pluginData.id] : (stryCov_9fa48("28292", "28293", "28294"), !Plugins.libraries[pluginData.id])) {
              if (stryMutAct_9fa48("28295")) {
                {}
              } else {
                stryCov_9fa48("28295");
                Plugins.requireLibrary(pluginData);
              }
            }
            if (stryMutAct_9fa48("28297") ? false : stryMutAct_9fa48("28296") ? true : (stryCov_9fa48("28296", "28297"), Array.isArray(pluginData.hooks))) {
              if (stryMutAct_9fa48("28298")) {
                {}
              } else {
                stryCov_9fa48("28298");
                pluginData.hooks.forEach(stryMutAct_9fa48("28299") ? () => undefined : (stryCov_9fa48("28299"), hook => Plugins.hooks.register(pluginData.id, hook)));
              }
            }
          }
        } catch (err) {
          if (stryMutAct_9fa48("28300")) {
            {}
          } else {
            stryCov_9fa48("28300");
            winston.warn(stryMutAct_9fa48("28301") ? `` : (stryCov_9fa48("28301"), `[plugins] Unable to load library for: ${pluginData.id}`));
            throw err;
          }
        }
      }
    }
  }
};