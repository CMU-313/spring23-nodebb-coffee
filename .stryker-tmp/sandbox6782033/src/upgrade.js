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
const util = require('util');
const semver = require('semver');
const readline = require('readline');
const winston = require('winston');
const chalk = require('chalk');
const plugins = require('./plugins');
const db = require('./database');
const file = require('./file');
const {
  paths
} = require('./constants');
/*
 * Need to write an upgrade script for NodeBB? Cool.
 *
 * 1. Copy TEMPLATE to a unique file name of your choice. Try to be succinct.
 * 2. Open up that file and change the user-friendly name (can be longer/more descriptive than the file name)
 *    and timestamp (don't forget the timestamp!)
 * 3. Add your script under the "method" property
 */

const Upgrade = module.exports;
Upgrade.getAll = async function () {
  if (stryMutAct_9fa48("41781")) {
    {}
  } else {
    stryCov_9fa48("41781");
    let files = await file.walk(path.join(__dirname, stryMutAct_9fa48("41782") ? "" : (stryCov_9fa48("41782"), './upgrades')));

    // Sort the upgrade scripts based on version
    files = stryMutAct_9fa48("41784") ? files.sort((a, b) => {
      const versionA = path.dirname(a).split(path.sep).pop();
      const versionB = path.dirname(b).split(path.sep).pop();
      const semverCompare = semver.compare(versionA, versionB);
      if (semverCompare) {
        return semverCompare;
      }
      const timestampA = require(a).timestamp;
      const timestampB = require(b).timestamp;
      return timestampA - timestampB;
    }) : stryMutAct_9fa48("41783") ? files.filter(file => path.basename(file) !== 'TEMPLATE') : (stryCov_9fa48("41783", "41784"), files.filter(stryMutAct_9fa48("41785") ? () => undefined : (stryCov_9fa48("41785"), file => stryMutAct_9fa48("41788") ? path.basename(file) === 'TEMPLATE' : stryMutAct_9fa48("41787") ? false : stryMutAct_9fa48("41786") ? true : (stryCov_9fa48("41786", "41787", "41788"), path.basename(file) !== (stryMutAct_9fa48("41789") ? "" : (stryCov_9fa48("41789"), 'TEMPLATE'))))).sort((a, b) => {
      if (stryMutAct_9fa48("41790")) {
        {}
      } else {
        stryCov_9fa48("41790");
        const versionA = path.dirname(a).split(path.sep).pop();
        const versionB = path.dirname(b).split(path.sep).pop();
        const semverCompare = semver.compare(versionA, versionB);
        if (stryMutAct_9fa48("41792") ? false : stryMutAct_9fa48("41791") ? true : (stryCov_9fa48("41791", "41792"), semverCompare)) {
          if (stryMutAct_9fa48("41793")) {
            {}
          } else {
            stryCov_9fa48("41793");
            return semverCompare;
          }
        }
        const timestampA = require(a).timestamp;
        const timestampB = require(b).timestamp;
        return stryMutAct_9fa48("41794") ? timestampA + timestampB : (stryCov_9fa48("41794"), timestampA - timestampB);
      }
    }));
    await Upgrade.appendPluginScripts(files);

    // check duplicates and error
    const seen = {};
    const dupes = stryMutAct_9fa48("41795") ? ["Stryker was here"] : (stryCov_9fa48("41795"), []);
    files.forEach(file => {
      if (stryMutAct_9fa48("41796")) {
        {}
      } else {
        stryCov_9fa48("41796");
        if (stryMutAct_9fa48("41798") ? false : stryMutAct_9fa48("41797") ? true : (stryCov_9fa48("41797", "41798"), seen[file])) {
          if (stryMutAct_9fa48("41799")) {
            {}
          } else {
            stryCov_9fa48("41799");
            dupes.push(file);
          }
        } else {
          if (stryMutAct_9fa48("41800")) {
            {}
          } else {
            stryCov_9fa48("41800");
            seen[file] = stryMutAct_9fa48("41801") ? false : (stryCov_9fa48("41801"), true);
          }
        }
      }
    });
    if (stryMutAct_9fa48("41803") ? false : stryMutAct_9fa48("41802") ? true : (stryCov_9fa48("41802", "41803"), dupes.length)) {
      if (stryMutAct_9fa48("41804")) {
        {}
      } else {
        stryCov_9fa48("41804");
        winston.error(stryMutAct_9fa48("41805") ? `` : (stryCov_9fa48("41805"), `Found duplicate upgrade scripts\n${dupes}`));
        throw new Error(stryMutAct_9fa48("41806") ? "" : (stryCov_9fa48("41806"), '[[error:duplicate-upgrade-scripts]]'));
      }
    }
    return files;
  }
};
Upgrade.appendPluginScripts = async function (files) {
  if (stryMutAct_9fa48("41807")) {
    {}
  } else {
    stryCov_9fa48("41807");
    // Find all active plugins
    const activePlugins = await plugins.getActive();
    activePlugins.forEach(plugin => {
      if (stryMutAct_9fa48("41808")) {
        {}
      } else {
        stryCov_9fa48("41808");
        const configPath = path.join(paths.nodeModules, plugin, stryMutAct_9fa48("41809") ? "" : (stryCov_9fa48("41809"), 'plugin.json'));
        try {
          if (stryMutAct_9fa48("41810")) {
            {}
          } else {
            stryCov_9fa48("41810");
            const pluginConfig = require(configPath);
            if (stryMutAct_9fa48("41813") ? pluginConfig.hasOwnProperty('upgrades') || Array.isArray(pluginConfig.upgrades) : stryMutAct_9fa48("41812") ? false : stryMutAct_9fa48("41811") ? true : (stryCov_9fa48("41811", "41812", "41813"), pluginConfig.hasOwnProperty(stryMutAct_9fa48("41814") ? "" : (stryCov_9fa48("41814"), 'upgrades')) && Array.isArray(pluginConfig.upgrades))) {
              if (stryMutAct_9fa48("41815")) {
                {}
              } else {
                stryCov_9fa48("41815");
                pluginConfig.upgrades.forEach(script => {
                  if (stryMutAct_9fa48("41816")) {
                    {}
                  } else {
                    stryCov_9fa48("41816");
                    files.push(path.join(path.dirname(configPath), script));
                  }
                });
              }
            }
          }
        } catch (e) {
          if (stryMutAct_9fa48("41817")) {
            {}
          } else {
            stryCov_9fa48("41817");
            if (stryMutAct_9fa48("41820") ? e.code === 'MODULE_NOT_FOUND' : stryMutAct_9fa48("41819") ? false : stryMutAct_9fa48("41818") ? true : (stryCov_9fa48("41818", "41819", "41820"), e.code !== (stryMutAct_9fa48("41821") ? "" : (stryCov_9fa48("41821"), 'MODULE_NOT_FOUND')))) {
              if (stryMutAct_9fa48("41822")) {
                {}
              } else {
                stryCov_9fa48("41822");
                winston.error(e.stack);
              }
            }
          }
        }
      }
    });
    return files;
  }
};
Upgrade.check = async function () {
  if (stryMutAct_9fa48("41823")) {
    {}
  } else {
    stryCov_9fa48("41823");
    // Throw 'schema-out-of-date' if not all upgrade scripts have run
    const files = await Upgrade.getAll();
    const executed = await db.getSortedSetRange(stryMutAct_9fa48("41824") ? "" : (stryCov_9fa48("41824"), 'schemaLog'), 0, stryMutAct_9fa48("41825") ? +1 : (stryCov_9fa48("41825"), -1));
    const remainder = stryMutAct_9fa48("41826") ? files : (stryCov_9fa48("41826"), files.filter(stryMutAct_9fa48("41827") ? () => undefined : (stryCov_9fa48("41827"), name => stryMutAct_9fa48("41828") ? executed.includes(path.basename(name, '.js')) : (stryCov_9fa48("41828"), !executed.includes(path.basename(name, stryMutAct_9fa48("41829") ? "" : (stryCov_9fa48("41829"), '.js')))))));
    if (stryMutAct_9fa48("41833") ? remainder.length <= 0 : stryMutAct_9fa48("41832") ? remainder.length >= 0 : stryMutAct_9fa48("41831") ? false : stryMutAct_9fa48("41830") ? true : (stryCov_9fa48("41830", "41831", "41832", "41833"), remainder.length > 0)) {
      if (stryMutAct_9fa48("41834")) {
        {}
      } else {
        stryCov_9fa48("41834");
        throw new Error(stryMutAct_9fa48("41835") ? "" : (stryCov_9fa48("41835"), 'schema-out-of-date'));
      }
    }
  }
};
Upgrade.run = async function () {
  if (stryMutAct_9fa48("41836")) {
    {}
  } else {
    stryCov_9fa48("41836");
    console.log(stryMutAct_9fa48("41837") ? "" : (stryCov_9fa48("41837"), '\nParsing upgrade scripts... '));
    const [completed, available] = await Promise.all(stryMutAct_9fa48("41838") ? [] : (stryCov_9fa48("41838"), [db.getSortedSetRange(stryMutAct_9fa48("41839") ? "" : (stryCov_9fa48("41839"), 'schemaLog'), 0, stryMutAct_9fa48("41840") ? +1 : (stryCov_9fa48("41840"), -1)), Upgrade.getAll()]));
    let skipped = 0;
    const queue = stryMutAct_9fa48("41841") ? available : (stryCov_9fa48("41841"), available.filter(cur => {
      if (stryMutAct_9fa48("41842")) {
        {}
      } else {
        stryCov_9fa48("41842");
        const upgradeRan = completed.includes(path.basename(cur, stryMutAct_9fa48("41843") ? "" : (stryCov_9fa48("41843"), '.js')));
        if (stryMutAct_9fa48("41845") ? false : stryMutAct_9fa48("41844") ? true : (stryCov_9fa48("41844", "41845"), upgradeRan)) {
          if (stryMutAct_9fa48("41846")) {
            {}
          } else {
            stryCov_9fa48("41846");
            stryMutAct_9fa48("41847") ? skipped -= 1 : (stryCov_9fa48("41847"), skipped += 1);
          }
        }
        return stryMutAct_9fa48("41848") ? upgradeRan : (stryCov_9fa48("41848"), !upgradeRan);
      }
    }));
    await Upgrade.process(queue, skipped);
  }
};
Upgrade.runParticular = async function (names) {
  if (stryMutAct_9fa48("41849")) {
    {}
  } else {
    stryCov_9fa48("41849");
    console.log(stryMutAct_9fa48("41850") ? "" : (stryCov_9fa48("41850"), '\nParsing upgrade scripts... '));
    const files = await file.walk(path.join(__dirname, stryMutAct_9fa48("41851") ? "" : (stryCov_9fa48("41851"), './upgrades')));
    await Upgrade.appendPluginScripts(files);
    const upgrades = stryMutAct_9fa48("41852") ? files : (stryCov_9fa48("41852"), files.filter(stryMutAct_9fa48("41853") ? () => undefined : (stryCov_9fa48("41853"), file => names.includes(path.basename(file, stryMutAct_9fa48("41854") ? "" : (stryCov_9fa48("41854"), '.js'))))));
    await Upgrade.process(upgrades, 0);
  }
};
Upgrade.process = async function (files, skipCount) {
  if (stryMutAct_9fa48("41855")) {
    {}
  } else {
    stryCov_9fa48("41855");
    console.log(stryMutAct_9fa48("41856") ? `` : (stryCov_9fa48("41856"), `${chalk.green(stryMutAct_9fa48("41857") ? "" : (stryCov_9fa48("41857"), 'OK'))} | ${chalk.cyan(stryMutAct_9fa48("41858") ? `` : (stryCov_9fa48("41858"), `${files.length} script(s) found`))}${(stryMutAct_9fa48("41862") ? skipCount <= 0 : stryMutAct_9fa48("41861") ? skipCount >= 0 : stryMutAct_9fa48("41860") ? false : stryMutAct_9fa48("41859") ? true : (stryCov_9fa48("41859", "41860", "41861", "41862"), skipCount > 0)) ? chalk.cyan(stryMutAct_9fa48("41863") ? `` : (stryCov_9fa48("41863"), `, ${skipCount} skipped`)) : stryMutAct_9fa48("41864") ? "Stryker was here!" : (stryCov_9fa48("41864"), '')}`));
    const [schemaDate, schemaLogCount] = await Promise.all(stryMutAct_9fa48("41865") ? [] : (stryCov_9fa48("41865"), [db.get(stryMutAct_9fa48("41866") ? "" : (stryCov_9fa48("41866"), 'schemaDate')), db.sortedSetCard(stryMutAct_9fa48("41867") ? "" : (stryCov_9fa48("41867"), 'schemaLog'))]));
    for (const file of files) {
      if (stryMutAct_9fa48("41868")) {
        {}
      } else {
        stryCov_9fa48("41868");
        /* eslint-disable no-await-in-loop */
        const scriptExport = require(file);
        const date = new Date(scriptExport.timestamp);
        const version = path.dirname(file).split(stryMutAct_9fa48("41869") ? "" : (stryCov_9fa48("41869"), '/')).pop();
        const progress = stryMutAct_9fa48("41870") ? {} : (stryCov_9fa48("41870"), {
          current: 0,
          counter: 0,
          total: 0,
          incr: Upgrade.incrementProgress,
          script: scriptExport,
          date: date
        });
        process.stdout.write(stryMutAct_9fa48("41871") ? `` : (stryCov_9fa48("41871"), `${stryMutAct_9fa48("41872") ? chalk.white('  → ') + chalk.gray(`[${[date.getUTCFullYear(), date.getUTCMonth() + 1, date.getUTCDate()].join('/')}] `) - scriptExport.name : (stryCov_9fa48("41872"), (stryMutAct_9fa48("41873") ? chalk.white('  → ') - chalk.gray(`[${[date.getUTCFullYear(), date.getUTCMonth() + 1, date.getUTCDate()].join('/')}] `) : (stryCov_9fa48("41873"), chalk.white(stryMutAct_9fa48("41874") ? "" : (stryCov_9fa48("41874"), '  → ')) + chalk.gray(stryMutAct_9fa48("41875") ? `` : (stryCov_9fa48("41875"), `[${(stryMutAct_9fa48("41876") ? [] : (stryCov_9fa48("41876"), [date.getUTCFullYear(), stryMutAct_9fa48("41877") ? date.getUTCMonth() - 1 : (stryCov_9fa48("41877"), date.getUTCMonth() + 1), date.getUTCDate()])).join(stryMutAct_9fa48("41878") ? "" : (stryCov_9fa48("41878"), '/'))}] `)))) + scriptExport.name)}...`));

        // For backwards compatibility, cross-reference with schemaDate (if found). If a script's date is older, skip it
        if (stryMutAct_9fa48("41881") ? !schemaDate && !schemaLogCount && scriptExport.timestamp <= schemaDate && semver.lt(version, '1.5.0') : stryMutAct_9fa48("41880") ? false : stryMutAct_9fa48("41879") ? true : (stryCov_9fa48("41879", "41880", "41881"), (stryMutAct_9fa48("41883") ? !schemaDate || !schemaLogCount : stryMutAct_9fa48("41882") ? false : (stryCov_9fa48("41882", "41883"), (stryMutAct_9fa48("41884") ? schemaDate : (stryCov_9fa48("41884"), !schemaDate)) && (stryMutAct_9fa48("41885") ? schemaLogCount : (stryCov_9fa48("41885"), !schemaLogCount)))) || (stryMutAct_9fa48("41887") ? scriptExport.timestamp <= schemaDate || semver.lt(version, '1.5.0') : stryMutAct_9fa48("41886") ? false : (stryCov_9fa48("41886", "41887"), (stryMutAct_9fa48("41890") ? scriptExport.timestamp > schemaDate : stryMutAct_9fa48("41889") ? scriptExport.timestamp < schemaDate : stryMutAct_9fa48("41888") ? true : (stryCov_9fa48("41888", "41889", "41890"), scriptExport.timestamp <= schemaDate)) && semver.lt(version, stryMutAct_9fa48("41891") ? "" : (stryCov_9fa48("41891"), '1.5.0')))))) {
          if (stryMutAct_9fa48("41892")) {
            {}
          } else {
            stryCov_9fa48("41892");
            process.stdout.write(chalk.grey(stryMutAct_9fa48("41893") ? "" : (stryCov_9fa48("41893"), ' skipped\n')));
            await db.sortedSetAdd(stryMutAct_9fa48("41894") ? "" : (stryCov_9fa48("41894"), 'schemaLog'), Date.now(), path.basename(file, stryMutAct_9fa48("41895") ? "" : (stryCov_9fa48("41895"), '.js')));
            // eslint-disable-next-line no-continue
            continue;
          }
        }

        // Promisify method if necessary
        if (stryMutAct_9fa48("41898") ? scriptExport.method.constructor || scriptExport.method.constructor.name !== 'AsyncFunction' : stryMutAct_9fa48("41897") ? false : stryMutAct_9fa48("41896") ? true : (stryCov_9fa48("41896", "41897", "41898"), scriptExport.method.constructor && (stryMutAct_9fa48("41900") ? scriptExport.method.constructor.name === 'AsyncFunction' : stryMutAct_9fa48("41899") ? true : (stryCov_9fa48("41899", "41900"), scriptExport.method.constructor.name !== (stryMutAct_9fa48("41901") ? "" : (stryCov_9fa48("41901"), 'AsyncFunction')))))) {
          if (stryMutAct_9fa48("41902")) {
            {}
          } else {
            stryCov_9fa48("41902");
            scriptExport.method = util.promisify(scriptExport.method);
          }
        }

        // Do the upgrade...
        const upgradeStart = Date.now();
        try {
          if (stryMutAct_9fa48("41903")) {
            {}
          } else {
            stryCov_9fa48("41903");
            await scriptExport.method.bind(stryMutAct_9fa48("41904") ? {} : (stryCov_9fa48("41904"), {
              progress: progress
            }))();
          }
        } catch (err) {
          if (stryMutAct_9fa48("41905")) {
            {}
          } else {
            stryCov_9fa48("41905");
            console.error(stryMutAct_9fa48("41906") ? "" : (stryCov_9fa48("41906"), 'Error occurred'));
            throw err;
          }
        }
        const upgradeDuration = (stryMutAct_9fa48("41907") ? (Date.now() - upgradeStart) * 1000 : (stryCov_9fa48("41907"), (stryMutAct_9fa48("41908") ? Date.now() + upgradeStart : (stryCov_9fa48("41908"), Date.now() - upgradeStart)) / 1000)).toFixed(2);
        process.stdout.write(chalk.green(stryMutAct_9fa48("41909") ? `` : (stryCov_9fa48("41909"), ` OK (${upgradeDuration} seconds)\n`)));

        // Record success in schemaLog
        await db.sortedSetAdd(stryMutAct_9fa48("41910") ? "" : (stryCov_9fa48("41910"), 'schemaLog'), Date.now(), path.basename(file, stryMutAct_9fa48("41911") ? "" : (stryCov_9fa48("41911"), '.js')));
      }
    }
    console.log(chalk.green(stryMutAct_9fa48("41912") ? "" : (stryCov_9fa48("41912"), 'Schema update complete!\n')));
  }
};
Upgrade.incrementProgress = function (value) {
  if (stryMutAct_9fa48("41913")) {
    {}
  } else {
    stryCov_9fa48("41913");
    // Newline on first invocation
    if (stryMutAct_9fa48("41916") ? this.current !== 0 : stryMutAct_9fa48("41915") ? false : stryMutAct_9fa48("41914") ? true : (stryCov_9fa48("41914", "41915", "41916"), this.current === 0)) {
      if (stryMutAct_9fa48("41917")) {
        {}
      } else {
        stryCov_9fa48("41917");
        process.stdout.write(stryMutAct_9fa48("41918") ? "" : (stryCov_9fa48("41918"), '\n'));
      }
    }
    stryMutAct_9fa48("41919") ? this.current -= value || 1 : (stryCov_9fa48("41919"), this.current += stryMutAct_9fa48("41922") ? value && 1 : stryMutAct_9fa48("41921") ? false : stryMutAct_9fa48("41920") ? true : (stryCov_9fa48("41920", "41921", "41922"), value || 1));
    stryMutAct_9fa48("41923") ? this.counter -= value || 1 : (stryCov_9fa48("41923"), this.counter += stryMutAct_9fa48("41926") ? value && 1 : stryMutAct_9fa48("41925") ? false : stryMutAct_9fa48("41924") ? true : (stryCov_9fa48("41924", "41925", "41926"), value || 1));
    const step = this.total ? Math.floor(stryMutAct_9fa48("41927") ? this.total * 100 : (stryCov_9fa48("41927"), this.total / 100)) : 100;
    if (stryMutAct_9fa48("41930") ? this.counter > step && this.current >= this.total : stryMutAct_9fa48("41929") ? false : stryMutAct_9fa48("41928") ? true : (stryCov_9fa48("41928", "41929", "41930"), (stryMutAct_9fa48("41933") ? this.counter <= step : stryMutAct_9fa48("41932") ? this.counter >= step : stryMutAct_9fa48("41931") ? false : (stryCov_9fa48("41931", "41932", "41933"), this.counter > step)) || (stryMutAct_9fa48("41936") ? this.current < this.total : stryMutAct_9fa48("41935") ? this.current > this.total : stryMutAct_9fa48("41934") ? false : (stryCov_9fa48("41934", "41935", "41936"), this.current >= this.total)))) {
      if (stryMutAct_9fa48("41937")) {
        {}
      } else {
        stryCov_9fa48("41937");
        stryMutAct_9fa48("41938") ? this.counter += step : (stryCov_9fa48("41938"), this.counter -= step);
        let percentage = 0;
        let filled = 0;
        let unfilled = 15;
        if (stryMutAct_9fa48("41940") ? false : stryMutAct_9fa48("41939") ? true : (stryCov_9fa48("41939", "41940"), this.total)) {
          if (stryMutAct_9fa48("41941")) {
            {}
          } else {
            stryCov_9fa48("41941");
            percentage = stryMutAct_9fa48("41942") ? `` : (stryCov_9fa48("41942"), `${Math.floor(stryMutAct_9fa48("41943") ? this.current / this.total / 100 : (stryCov_9fa48("41943"), (stryMutAct_9fa48("41944") ? this.current * this.total : (stryCov_9fa48("41944"), this.current / this.total)) * 100))}%`);
            filled = Math.floor(stryMutAct_9fa48("41945") ? this.current / this.total / 15 : (stryCov_9fa48("41945"), (stryMutAct_9fa48("41946") ? this.current * this.total : (stryCov_9fa48("41946"), this.current / this.total)) * 15));
            unfilled = Math.max(0, stryMutAct_9fa48("41947") ? 15 + filled : (stryCov_9fa48("41947"), 15 - filled));
          }
        }
        readline.cursorTo(process.stdout, 0);
        process.stdout.write(stryMutAct_9fa48("41948") ? `` : (stryCov_9fa48("41948"), `    [${filled ? (stryMutAct_9fa48("41949") ? new Array() : (stryCov_9fa48("41949"), new Array(filled))).join(stryMutAct_9fa48("41950") ? "" : (stryCov_9fa48("41950"), '#')) : stryMutAct_9fa48("41951") ? "Stryker was here!" : (stryCov_9fa48("41951"), '')}${(stryMutAct_9fa48("41952") ? new Array() : (stryCov_9fa48("41952"), new Array(unfilled))).join(stryMutAct_9fa48("41953") ? "" : (stryCov_9fa48("41953"), ' '))}] (${this.current}/${stryMutAct_9fa48("41956") ? this.total && '??' : stryMutAct_9fa48("41955") ? false : stryMutAct_9fa48("41954") ? true : (stryCov_9fa48("41954", "41955", "41956"), this.total || (stryMutAct_9fa48("41957") ? "" : (stryCov_9fa48("41957"), '??')))}) ${percentage} `));
      }
    }
  }
};
require('./promisify')(Upgrade);