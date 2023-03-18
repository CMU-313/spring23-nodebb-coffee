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
const os = require('os');
const winston = require('winston');
const nconf = require('nconf');
const _ = require('lodash');
const path = require('path');
const mkdirp = require('mkdirp');
const chalk = require('chalk');
const {
  exec
} = require('child_process');
const util = require('util');
const cacheBuster = require('./cacheBuster');
const {
  aliases
} = require('./aliases');
let meta;
const targetHandlers = stryMutAct_9fa48("23352") ? {} : (stryCov_9fa48("23352"), {
  'plugin static dirs': async function () {
    if (stryMutAct_9fa48("23353")) {
      {}
    } else {
      stryCov_9fa48("23353");
      await meta.js.linkStatics();
    }
  },
  'requirejs modules': async function (parallel) {
    if (stryMutAct_9fa48("23354")) {
      {}
    } else {
      stryCov_9fa48("23354");
      await meta.js.buildModules(parallel);
    }
  },
  'client js bundle': async function (parallel) {
    if (stryMutAct_9fa48("23355")) {
      {}
    } else {
      stryCov_9fa48("23355");
      await meta.js.buildBundle(stryMutAct_9fa48("23356") ? "" : (stryCov_9fa48("23356"), 'client'), parallel);
    }
  },
  'admin js bundle': async function (parallel) {
    if (stryMutAct_9fa48("23357")) {
      {}
    } else {
      stryCov_9fa48("23357");
      await meta.js.buildBundle(stryMutAct_9fa48("23358") ? "" : (stryCov_9fa48("23358"), 'admin'), parallel);
    }
  },
  javascript: stryMutAct_9fa48("23359") ? [] : (stryCov_9fa48("23359"), [stryMutAct_9fa48("23360") ? "" : (stryCov_9fa48("23360"), 'plugin static dirs'), stryMutAct_9fa48("23361") ? "" : (stryCov_9fa48("23361"), 'requirejs modules'), stryMutAct_9fa48("23362") ? "" : (stryCov_9fa48("23362"), 'client js bundle'), stryMutAct_9fa48("23363") ? "" : (stryCov_9fa48("23363"), 'admin js bundle')]),
  'client side styles': async function (parallel) {
    if (stryMutAct_9fa48("23364")) {
      {}
    } else {
      stryCov_9fa48("23364");
      await meta.css.buildBundle(stryMutAct_9fa48("23365") ? "" : (stryCov_9fa48("23365"), 'client'), parallel);
    }
  },
  'admin control panel styles': async function (parallel) {
    if (stryMutAct_9fa48("23366")) {
      {}
    } else {
      stryCov_9fa48("23366");
      await meta.css.buildBundle(stryMutAct_9fa48("23367") ? "" : (stryCov_9fa48("23367"), 'admin'), parallel);
    }
  },
  styles: stryMutAct_9fa48("23368") ? [] : (stryCov_9fa48("23368"), [stryMutAct_9fa48("23369") ? "" : (stryCov_9fa48("23369"), 'client side styles'), stryMutAct_9fa48("23370") ? "" : (stryCov_9fa48("23370"), 'admin control panel styles')]),
  templates: async function () {
    if (stryMutAct_9fa48("23371")) {
      {}
    } else {
      stryCov_9fa48("23371");
      await meta.templates.compile();
    }
  },
  languages: async function () {
    if (stryMutAct_9fa48("23372")) {
      {}
    } else {
      stryCov_9fa48("23372");
      await meta.languages.build();
    }
  }
});
const aliasMap = Object.keys(aliases).reduce((prev, key) => {
  if (stryMutAct_9fa48("23373")) {
    {}
  } else {
    stryCov_9fa48("23373");
    const arr = aliases[key];
    arr.forEach(alias => {
      if (stryMutAct_9fa48("23374")) {
        {}
      } else {
        stryCov_9fa48("23374");
        prev[alias] = key;
      }
    });
    prev[key] = key;
    return prev;
  }
}, {});
async function beforeBuild(targets) {
  if (stryMutAct_9fa48("23375")) {
    {}
  } else {
    stryCov_9fa48("23375");
    const db = require('../database');
    process.stdout.write(stryMutAct_9fa48("23376") ? `` : (stryCov_9fa48("23376"), `${chalk.green(stryMutAct_9fa48("23377") ? "" : (stryCov_9fa48("23377"), '  started'))}\n`));
    try {
      if (stryMutAct_9fa48("23378")) {
        {}
      } else {
        stryCov_9fa48("23378");
        await db.init();
        meta = require('./index');
        await meta.themes.setupPaths();
        const plugins = require('../plugins');
        await plugins.prepareForBuild(targets);
        await mkdirp(path.join(__dirname, stryMutAct_9fa48("23379") ? "" : (stryCov_9fa48("23379"), '../../build/public')));
      }
    } catch (err) {
      if (stryMutAct_9fa48("23380")) {
        {}
      } else {
        stryCov_9fa48("23380");
        winston.error(stryMutAct_9fa48("23381") ? `` : (stryCov_9fa48("23381"), `[build] Encountered error preparing for build\n${err.stack}`));
        throw err;
      }
    }
  }
}
const allTargets = stryMutAct_9fa48("23382") ? Object.keys(targetHandlers) : (stryCov_9fa48("23382"), Object.keys(targetHandlers).filter(stryMutAct_9fa48("23383") ? () => undefined : (stryCov_9fa48("23383"), name => stryMutAct_9fa48("23386") ? typeof targetHandlers[name] !== 'function' : stryMutAct_9fa48("23385") ? false : stryMutAct_9fa48("23384") ? true : (stryCov_9fa48("23384", "23385", "23386"), typeof targetHandlers[name] === (stryMutAct_9fa48("23387") ? "" : (stryCov_9fa48("23387"), 'function'))))));
async function buildTargets(targets, parallel, options) {
  if (stryMutAct_9fa48("23388")) {
    {}
  } else {
    stryCov_9fa48("23388");
    const length = Math.max(...targets.map(stryMutAct_9fa48("23389") ? () => undefined : (stryCov_9fa48("23389"), name => name.length)));
    const jsTargets = stryMutAct_9fa48("23390") ? targets : (stryCov_9fa48("23390"), targets.filter(stryMutAct_9fa48("23391") ? () => undefined : (stryCov_9fa48("23391"), target => targetHandlers.javascript.includes(target))));
    const otherTargets = stryMutAct_9fa48("23392") ? targets : (stryCov_9fa48("23392"), targets.filter(stryMutAct_9fa48("23393") ? () => undefined : (stryCov_9fa48("23393"), target => stryMutAct_9fa48("23394") ? targetHandlers.javascript.includes(target) : (stryCov_9fa48("23394"), !targetHandlers.javascript.includes(target)))));

    // Compile TypeScript into JavaScript
    winston.info(stryMutAct_9fa48("23395") ? `` : (stryCov_9fa48("23395"), `[build] Building TypeScript files`));
    const execAsync = util.promisify(exec);
    await execAsync(stryMutAct_9fa48("23396") ? "" : (stryCov_9fa48("23396"), 'npx tsc'));
    winston.info(stryMutAct_9fa48("23397") ? `` : (stryCov_9fa48("23397"), `[build] TypeScript building complete`));
    async function buildJSTargets() {
      if (stryMutAct_9fa48("23398")) {
        {}
      } else {
        stryCov_9fa48("23398");
        await Promise.all(jsTargets.map(stryMutAct_9fa48("23399") ? () => undefined : (stryCov_9fa48("23399"), target => step(target, parallel, stryMutAct_9fa48("23400") ? `` : (stryCov_9fa48("23400"), `${_.padStart(target, length)} `)))));
        // run webpack after jstargets are done, no need to wait for css/templates etc.
        if (stryMutAct_9fa48("23403") ? options.webpack && options.watch : stryMutAct_9fa48("23402") ? false : stryMutAct_9fa48("23401") ? true : (stryCov_9fa48("23401", "23402", "23403"), options.webpack || options.watch)) {
          if (stryMutAct_9fa48("23404")) {
            {}
          } else {
            stryCov_9fa48("23404");
            await exports.webpack(options);
          }
        }
      }
    }
    if (stryMutAct_9fa48("23406") ? false : stryMutAct_9fa48("23405") ? true : (stryCov_9fa48("23405", "23406"), parallel)) {
      if (stryMutAct_9fa48("23407")) {
        {}
      } else {
        stryCov_9fa48("23407");
        await Promise.all(stryMutAct_9fa48("23408") ? [] : (stryCov_9fa48("23408"), [buildJSTargets(), ...otherTargets.map(stryMutAct_9fa48("23409") ? () => undefined : (stryCov_9fa48("23409"), target => step(target, parallel, stryMutAct_9fa48("23410") ? `` : (stryCov_9fa48("23410"), `${_.padStart(target, length)} `))))]));
      }
    } else {
      if (stryMutAct_9fa48("23411")) {
        {}
      } else {
        stryCov_9fa48("23411");
        for (const target of targets) {
          if (stryMutAct_9fa48("23412")) {
            {}
          } else {
            stryCov_9fa48("23412");
            // eslint-disable-next-line no-await-in-loop
            await step(target, parallel, stryMutAct_9fa48("23413") ? `` : (stryCov_9fa48("23413"), `${_.padStart(target, length)} `));
          }
        }
        if (stryMutAct_9fa48("23416") ? options.webpack && options.watch : stryMutAct_9fa48("23415") ? false : stryMutAct_9fa48("23414") ? true : (stryCov_9fa48("23414", "23415", "23416"), options.webpack || options.watch)) {
          if (stryMutAct_9fa48("23417")) {
            {}
          } else {
            stryCov_9fa48("23417");
            await exports.webpack(options);
          }
        }
      }
    }
  }
}
async function step(target, parallel, targetStr) {
  if (stryMutAct_9fa48("23418")) {
    {}
  } else {
    stryCov_9fa48("23418");
    const startTime = Date.now();
    winston.info(stryMutAct_9fa48("23419") ? `` : (stryCov_9fa48("23419"), `[build] ${targetStr} build started`));
    try {
      if (stryMutAct_9fa48("23420")) {
        {}
      } else {
        stryCov_9fa48("23420");
        await targetHandlers[target](parallel);
        const time = stryMutAct_9fa48("23421") ? (Date.now() - startTime) * 1000 : (stryCov_9fa48("23421"), (stryMutAct_9fa48("23422") ? Date.now() + startTime : (stryCov_9fa48("23422"), Date.now() - startTime)) / 1000);
        winston.info(stryMutAct_9fa48("23423") ? `` : (stryCov_9fa48("23423"), `[build] ${targetStr} build completed in ${time}sec`));
      }
    } catch (err) {
      if (stryMutAct_9fa48("23424")) {
        {}
      } else {
        stryCov_9fa48("23424");
        winston.error(stryMutAct_9fa48("23425") ? `` : (stryCov_9fa48("23425"), `[build] ${targetStr} build failed`));
        throw err;
      }
    }
  }
}
exports.build = async function (targets, options) {
  if (stryMutAct_9fa48("23426")) {
    {}
  } else {
    stryCov_9fa48("23426");
    if (stryMutAct_9fa48("23429") ? false : stryMutAct_9fa48("23428") ? true : stryMutAct_9fa48("23427") ? options : (stryCov_9fa48("23427", "23428", "23429"), !options)) {
      if (stryMutAct_9fa48("23430")) {
        {}
      } else {
        stryCov_9fa48("23430");
        options = {};
      }
    }
    if (stryMutAct_9fa48("23433") ? targets !== true : stryMutAct_9fa48("23432") ? false : stryMutAct_9fa48("23431") ? true : (stryCov_9fa48("23431", "23432", "23433"), targets === (stryMutAct_9fa48("23434") ? false : (stryCov_9fa48("23434"), true)))) {
      if (stryMutAct_9fa48("23435")) {
        {}
      } else {
        stryCov_9fa48("23435");
        targets = allTargets;
      }
    } else if (stryMutAct_9fa48("23438") ? false : stryMutAct_9fa48("23437") ? true : stryMutAct_9fa48("23436") ? Array.isArray(targets) : (stryCov_9fa48("23436", "23437", "23438"), !Array.isArray(targets))) {
      if (stryMutAct_9fa48("23439")) {
        {}
      } else {
        stryCov_9fa48("23439");
        targets = targets.split(stryMutAct_9fa48("23440") ? "" : (stryCov_9fa48("23440"), ','));
      }
    }
    let series = stryMutAct_9fa48("23443") ? nconf.get('series') && options.series : stryMutAct_9fa48("23442") ? false : stryMutAct_9fa48("23441") ? true : (stryCov_9fa48("23441", "23442", "23443"), nconf.get(stryMutAct_9fa48("23444") ? "" : (stryCov_9fa48("23444"), 'series')) || options.series);
    if (stryMutAct_9fa48("23447") ? series !== undefined : stryMutAct_9fa48("23446") ? false : stryMutAct_9fa48("23445") ? true : (stryCov_9fa48("23445", "23446", "23447"), series === undefined)) {
      if (stryMutAct_9fa48("23448")) {
        {}
      } else {
        stryCov_9fa48("23448");
        // Detect # of CPUs and select strategy as appropriate
        winston.verbose(stryMutAct_9fa48("23449") ? "" : (stryCov_9fa48("23449"), '[build] Querying CPU core count for build strategy'));
        const cpus = os.cpus();
        series = stryMutAct_9fa48("23453") ? cpus.length >= 4 : stryMutAct_9fa48("23452") ? cpus.length <= 4 : stryMutAct_9fa48("23451") ? false : stryMutAct_9fa48("23450") ? true : (stryCov_9fa48("23450", "23451", "23452", "23453"), cpus.length < 4);
        winston.verbose(stryMutAct_9fa48("23454") ? `` : (stryCov_9fa48("23454"), `[build] System returned ${cpus.length} cores, opting for ${series ? stryMutAct_9fa48("23455") ? "" : (stryCov_9fa48("23455"), 'series') : stryMutAct_9fa48("23456") ? "" : (stryCov_9fa48("23456"), 'parallel')} build strategy`));
      }
    }
    targets = stryMutAct_9fa48("23457") ? targets
    // get full target name
    .map(target => {
      target = target.toLowerCase().replace(/-/g, '');
      if (!aliasMap[target]) {
        winston.warn(`[build] Unknown target: ${target}`);
        if (target.includes(',')) {
          winston.warn('[build] Are you specifying multiple targets? Separate them with spaces:');
          winston.warn('[build]   e.g. `./nodebb build adminjs tpl`');
        }
        return false;
      }
      return aliasMap[target];
    })
    // filter nonexistent targets
    : (stryCov_9fa48("23457"), targets
    // get full target name
    .map(target => {
      if (stryMutAct_9fa48("23458")) {
        {}
      } else {
        stryCov_9fa48("23458");
        target = stryMutAct_9fa48("23459") ? target.toUpperCase().replace(/-/g, '') : (stryCov_9fa48("23459"), target.toLowerCase().replace(/-/g, stryMutAct_9fa48("23460") ? "Stryker was here!" : (stryCov_9fa48("23460"), '')));
        if (stryMutAct_9fa48("23463") ? false : stryMutAct_9fa48("23462") ? true : stryMutAct_9fa48("23461") ? aliasMap[target] : (stryCov_9fa48("23461", "23462", "23463"), !aliasMap[target])) {
          if (stryMutAct_9fa48("23464")) {
            {}
          } else {
            stryCov_9fa48("23464");
            winston.warn(stryMutAct_9fa48("23465") ? `` : (stryCov_9fa48("23465"), `[build] Unknown target: ${target}`));
            if (stryMutAct_9fa48("23467") ? false : stryMutAct_9fa48("23466") ? true : (stryCov_9fa48("23466", "23467"), target.includes(stryMutAct_9fa48("23468") ? "" : (stryCov_9fa48("23468"), ',')))) {
              if (stryMutAct_9fa48("23469")) {
                {}
              } else {
                stryCov_9fa48("23469");
                winston.warn(stryMutAct_9fa48("23470") ? "" : (stryCov_9fa48("23470"), '[build] Are you specifying multiple targets? Separate them with spaces:'));
                winston.warn(stryMutAct_9fa48("23471") ? "" : (stryCov_9fa48("23471"), '[build]   e.g. `./nodebb build adminjs tpl`'));
              }
            }
            return stryMutAct_9fa48("23472") ? true : (stryCov_9fa48("23472"), false);
          }
        }
        return aliasMap[target];
      }
    })
    // filter nonexistent targets
    .filter(Boolean));

    // map multitargets to their sets
    targets = _.uniq(_.flatMap(targets, stryMutAct_9fa48("23473") ? () => undefined : (stryCov_9fa48("23473"), target => Array.isArray(targetHandlers[target]) ? targetHandlers[target] : target)));
    winston.verbose(stryMutAct_9fa48("23474") ? `` : (stryCov_9fa48("23474"), `[build] building the following targets: ${targets.join(stryMutAct_9fa48("23475") ? "" : (stryCov_9fa48("23475"), ', '))}`));
    if (stryMutAct_9fa48("23478") ? false : stryMutAct_9fa48("23477") ? true : stryMutAct_9fa48("23476") ? targets : (stryCov_9fa48("23476", "23477", "23478"), !targets)) {
      if (stryMutAct_9fa48("23479")) {
        {}
      } else {
        stryCov_9fa48("23479");
        winston.info(stryMutAct_9fa48("23480") ? "" : (stryCov_9fa48("23480"), '[build] No valid targets supplied. Aborting.'));
        return;
      }
    }
    try {
      if (stryMutAct_9fa48("23481")) {
        {}
      } else {
        stryCov_9fa48("23481");
        await beforeBuild(targets);
        const threads = parseInt(nconf.get(stryMutAct_9fa48("23482") ? "" : (stryCov_9fa48("23482"), 'threads')), 10);
        if (stryMutAct_9fa48("23484") ? false : stryMutAct_9fa48("23483") ? true : (stryCov_9fa48("23483", "23484"), threads)) {
          if (stryMutAct_9fa48("23485")) {
            {}
          } else {
            stryCov_9fa48("23485");
            require('./minifier').maxThreads = stryMutAct_9fa48("23486") ? threads + 1 : (stryCov_9fa48("23486"), threads - 1);
          }
        }
        if (stryMutAct_9fa48("23489") ? false : stryMutAct_9fa48("23488") ? true : stryMutAct_9fa48("23487") ? series : (stryCov_9fa48("23487", "23488", "23489"), !series)) {
          if (stryMutAct_9fa48("23490")) {
            {}
          } else {
            stryCov_9fa48("23490");
            winston.info(stryMutAct_9fa48("23491") ? "" : (stryCov_9fa48("23491"), '[build] Building in parallel mode'));
          }
        } else {
          if (stryMutAct_9fa48("23492")) {
            {}
          } else {
            stryCov_9fa48("23492");
            winston.info(stryMutAct_9fa48("23493") ? "" : (stryCov_9fa48("23493"), '[build] Building in series mode'));
          }
        }
        const startTime = Date.now();
        await buildTargets(targets, stryMutAct_9fa48("23494") ? series : (stryCov_9fa48("23494"), !series), options);
        const totalTime = stryMutAct_9fa48("23495") ? (Date.now() - startTime) * 1000 : (stryCov_9fa48("23495"), (stryMutAct_9fa48("23496") ? Date.now() + startTime : (stryCov_9fa48("23496"), Date.now() - startTime)) / 1000);
        await cacheBuster.write();
        winston.info(stryMutAct_9fa48("23497") ? `` : (stryCov_9fa48("23497"), `[build] Asset compilation successful. Completed in ${totalTime}sec.`));
      }
    } catch (err) {
      if (stryMutAct_9fa48("23498")) {
        {}
      } else {
        stryCov_9fa48("23498");
        winston.error(stryMutAct_9fa48("23499") ? `` : (stryCov_9fa48("23499"), `[build] Encountered error during build step\n${err.stack ? err.stack : err}`));
        throw err;
      }
    }
  }
};
function getWebpackConfig() {
  if (stryMutAct_9fa48("23500")) {
    {}
  } else {
    stryCov_9fa48("23500");
    return require((stryMutAct_9fa48("23503") ? process.env.NODE_ENV === 'development' : stryMutAct_9fa48("23502") ? false : stryMutAct_9fa48("23501") ? true : (stryCov_9fa48("23501", "23502", "23503"), process.env.NODE_ENV !== (stryMutAct_9fa48("23504") ? "" : (stryCov_9fa48("23504"), 'development')))) ? stryMutAct_9fa48("23505") ? "" : (stryCov_9fa48("23505"), '../../webpack.prod') : stryMutAct_9fa48("23506") ? "" : (stryCov_9fa48("23506"), '../../webpack.dev'));
  }
}
exports.webpack = async function (options) {
  if (stryMutAct_9fa48("23507")) {
    {}
  } else {
    stryCov_9fa48("23507");
    winston.info(stryMutAct_9fa48("23508") ? `` : (stryCov_9fa48("23508"), `[build] ${options.watch ? stryMutAct_9fa48("23509") ? "" : (stryCov_9fa48("23509"), 'Watching') : stryMutAct_9fa48("23510") ? "" : (stryCov_9fa48("23510"), 'Bundling')} with Webpack.`));
    const webpack = require('webpack');
    const fs = require('fs');
    const util = require('util');
    const plugins = require('../plugins/data');
    const activePlugins = (await plugins.getActive()).map(stryMutAct_9fa48("23511") ? () => undefined : (stryCov_9fa48("23511"), p => p.id));
    if (stryMutAct_9fa48("23514") ? false : stryMutAct_9fa48("23513") ? true : stryMutAct_9fa48("23512") ? activePlugins.includes('nodebb-plugin-composer-default') : (stryCov_9fa48("23512", "23513", "23514"), !activePlugins.includes(stryMutAct_9fa48("23515") ? "" : (stryCov_9fa48("23515"), 'nodebb-plugin-composer-default')))) {
      if (stryMutAct_9fa48("23516")) {
        {}
      } else {
        stryCov_9fa48("23516");
        activePlugins.push(stryMutAct_9fa48("23517") ? "" : (stryCov_9fa48("23517"), 'nodebb-plugin-composer-default'));
      }
    }
    await fs.promises.writeFile(path.resolve(__dirname, stryMutAct_9fa48("23518") ? "" : (stryCov_9fa48("23518"), '../../build/active_plugins.json')), JSON.stringify(activePlugins));
    const webpackCfg = getWebpackConfig();
    const compiler = webpack(webpackCfg);
    const webpackRun = util.promisify(compiler.run).bind(compiler);
    const webpackWatch = util.promisify(compiler.watch).bind(compiler);
    try {
      if (stryMutAct_9fa48("23519")) {
        {}
      } else {
        stryCov_9fa48("23519");
        let stats;
        if (stryMutAct_9fa48("23521") ? false : stryMutAct_9fa48("23520") ? true : (stryCov_9fa48("23520", "23521"), options.watch)) {
          if (stryMutAct_9fa48("23522")) {
            {}
          } else {
            stryCov_9fa48("23522");
            stats = await webpackWatch(webpackCfg.watchOptions);
            compiler.hooks.assetEmitted.tap(stryMutAct_9fa48("23523") ? "" : (stryCov_9fa48("23523"), 'nbbWatchPlugin'), file => {
              if (stryMutAct_9fa48("23524")) {
                {}
              } else {
                stryCov_9fa48("23524");
                console.log(stryMutAct_9fa48("23525") ? `` : (stryCov_9fa48("23525"), `webpack:assetEmitted > ${webpackCfg.output.publicPath}${file}`));
              }
            });
          }
        } else {
          if (stryMutAct_9fa48("23526")) {
            {}
          } else {
            stryCov_9fa48("23526");
            stats = await webpackRun();
          }
        }
        if (stryMutAct_9fa48("23529") ? stats.hasErrors() && stats.hasWarnings() : stryMutAct_9fa48("23528") ? false : stryMutAct_9fa48("23527") ? true : (stryCov_9fa48("23527", "23528", "23529"), stats.hasErrors() || stats.hasWarnings())) {
          if (stryMutAct_9fa48("23530")) {
            {}
          } else {
            stryCov_9fa48("23530");
            console.log(stats.toString(stryMutAct_9fa48("23531") ? "" : (stryCov_9fa48("23531"), 'minimal')));
          }
        } else {
          if (stryMutAct_9fa48("23532")) {
            {}
          } else {
            stryCov_9fa48("23532");
            const statsJson = stats.toJson();
            winston.info(stryMutAct_9fa48("23533") ? `` : (stryCov_9fa48("23533"), `[build] ${options.watch ? stryMutAct_9fa48("23534") ? "" : (stryCov_9fa48("23534"), 'Watching') : stryMutAct_9fa48("23535") ? "" : (stryCov_9fa48("23535"), 'Bundling')} took ${statsJson.time} ms`));
          }
        }
      }
    } catch (err) {
      if (stryMutAct_9fa48("23536")) {
        {}
      } else {
        stryCov_9fa48("23536");
        console.error(stryMutAct_9fa48("23539") ? err.stack && err : stryMutAct_9fa48("23538") ? false : stryMutAct_9fa48("23537") ? true : (stryCov_9fa48("23537", "23538", "23539"), err.stack || err));
        if (stryMutAct_9fa48("23541") ? false : stryMutAct_9fa48("23540") ? true : (stryCov_9fa48("23540", "23541"), err.details)) {
          if (stryMutAct_9fa48("23542")) {
            {}
          } else {
            stryCov_9fa48("23542");
            console.error(err.details);
          }
        }
      }
    }
  }
};
exports.buildAll = async function () {
  if (stryMutAct_9fa48("23543")) {
    {}
  } else {
    stryCov_9fa48("23543");
    await exports.build(allTargets, stryMutAct_9fa48("23544") ? {} : (stryCov_9fa48("23544"), {
      webpack: stryMutAct_9fa48("23545") ? false : (stryCov_9fa48("23545"), true)
    }));
  }
};
require('../promisify')(exports);