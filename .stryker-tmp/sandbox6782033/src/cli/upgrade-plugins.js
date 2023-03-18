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
const prompt = require('prompt');
const request = require('request-promise-native');
const cproc = require('child_process');
const semver = require('semver');
const fs = require('fs');
const path = require('path');
const chalk = require('chalk');
const {
  paths,
  pluginNamePattern
} = require('../constants');
const pkgInstall = require('./package-install');
const packageManager = pkgInstall.getPackageManager();
let packageManagerExecutable = packageManager;
const packageManagerInstallArgs = (stryMutAct_9fa48("4604") ? packageManager !== 'yarn' : stryMutAct_9fa48("4603") ? false : stryMutAct_9fa48("4602") ? true : (stryCov_9fa48("4602", "4603", "4604"), packageManager === (stryMutAct_9fa48("4605") ? "" : (stryCov_9fa48("4605"), 'yarn')))) ? stryMutAct_9fa48("4606") ? [] : (stryCov_9fa48("4606"), [stryMutAct_9fa48("4607") ? "" : (stryCov_9fa48("4607"), 'add')]) : stryMutAct_9fa48("4608") ? [] : (stryCov_9fa48("4608"), [stryMutAct_9fa48("4609") ? "" : (stryCov_9fa48("4609"), 'install'), stryMutAct_9fa48("4610") ? "" : (stryCov_9fa48("4610"), '--save')]);
if (stryMutAct_9fa48("4613") ? process.platform !== 'win32' : stryMutAct_9fa48("4612") ? false : stryMutAct_9fa48("4611") ? true : (stryCov_9fa48("4611", "4612", "4613"), process.platform === (stryMutAct_9fa48("4614") ? "" : (stryCov_9fa48("4614"), 'win32')))) {
  if (stryMutAct_9fa48("4615")) {
    {}
  } else {
    stryCov_9fa48("4615");
    packageManagerExecutable += stryMutAct_9fa48("4616") ? "" : (stryCov_9fa48("4616"), '.cmd');
  }
}
async function getModuleVersions(modules) {
  if (stryMutAct_9fa48("4617")) {
    {}
  } else {
    stryCov_9fa48("4617");
    const versionHash = {};
    const batch = require('../batch');
    await batch.processArray(modules, async moduleNames => {
      if (stryMutAct_9fa48("4618")) {
        {}
      } else {
        stryCov_9fa48("4618");
        await Promise.all(moduleNames.map(async module => {
          if (stryMutAct_9fa48("4619")) {
            {}
          } else {
            stryCov_9fa48("4619");
            let pkg = await fs.promises.readFile(path.join(paths.nodeModules, module, stryMutAct_9fa48("4620") ? "" : (stryCov_9fa48("4620"), 'package.json')), stryMutAct_9fa48("4621") ? {} : (stryCov_9fa48("4621"), {
              encoding: stryMutAct_9fa48("4622") ? "" : (stryCov_9fa48("4622"), 'utf-8')
            }));
            pkg = JSON.parse(pkg);
            versionHash[module] = pkg.version;
          }
        }));
      }
    }, stryMutAct_9fa48("4623") ? {} : (stryCov_9fa48("4623"), {
      batch: 50
    }));
    return versionHash;
  }
}
async function getInstalledPlugins() {
  if (stryMutAct_9fa48("4624")) {
    {}
  } else {
    stryCov_9fa48("4624");
    let [deps, bundled] = await Promise.all(stryMutAct_9fa48("4625") ? [] : (stryCov_9fa48("4625"), [fs.promises.readFile(paths.currentPackage, stryMutAct_9fa48("4626") ? {} : (stryCov_9fa48("4626"), {
      encoding: stryMutAct_9fa48("4627") ? "" : (stryCov_9fa48("4627"), 'utf-8')
    })), fs.promises.readFile(paths.installPackage, stryMutAct_9fa48("4628") ? {} : (stryCov_9fa48("4628"), {
      encoding: stryMutAct_9fa48("4629") ? "" : (stryCov_9fa48("4629"), 'utf-8')
    }))]));
    deps = stryMutAct_9fa48("4630") ? Object.keys(JSON.parse(deps).dependencies) : (stryCov_9fa48("4630"), Object.keys(JSON.parse(deps).dependencies).filter(stryMutAct_9fa48("4631") ? () => undefined : (stryCov_9fa48("4631"), pkgName => pluginNamePattern.test(pkgName))));
    bundled = stryMutAct_9fa48("4632") ? Object.keys(JSON.parse(bundled).dependencies) : (stryCov_9fa48("4632"), Object.keys(JSON.parse(bundled).dependencies).filter(stryMutAct_9fa48("4633") ? () => undefined : (stryCov_9fa48("4633"), pkgName => pluginNamePattern.test(pkgName))));

    // Whittle down deps to send back only extraneously installed plugins/themes/etc
    const checklist = stryMutAct_9fa48("4634") ? deps : (stryCov_9fa48("4634"), deps.filter(pkgName => {
      if (stryMutAct_9fa48("4635")) {
        {}
      } else {
        stryCov_9fa48("4635");
        if (stryMutAct_9fa48("4637") ? false : stryMutAct_9fa48("4636") ? true : (stryCov_9fa48("4636", "4637"), bundled.includes(pkgName))) {
          if (stryMutAct_9fa48("4638")) {
            {}
          } else {
            stryCov_9fa48("4638");
            return stryMutAct_9fa48("4639") ? true : (stryCov_9fa48("4639"), false);
          }
        }

        // Ignore git repositories
        try {
          if (stryMutAct_9fa48("4640")) {
            {}
          } else {
            stryCov_9fa48("4640");
            fs.accessSync(path.join(paths.nodeModules, pkgName, stryMutAct_9fa48("4641") ? "" : (stryCov_9fa48("4641"), '.git')));
            return stryMutAct_9fa48("4642") ? true : (stryCov_9fa48("4642"), false);
          }
        } catch (e) {
          if (stryMutAct_9fa48("4643")) {
            {}
          } else {
            stryCov_9fa48("4643");
            return stryMutAct_9fa48("4644") ? false : (stryCov_9fa48("4644"), true);
          }
        }
      }
    }));
    return await getModuleVersions(checklist);
  }
}
async function getCurrentVersion() {
  if (stryMutAct_9fa48("4645")) {
    {}
  } else {
    stryCov_9fa48("4645");
    let pkg = await fs.promises.readFile(paths.installPackage, stryMutAct_9fa48("4646") ? {} : (stryCov_9fa48("4646"), {
      encoding: stryMutAct_9fa48("4647") ? "" : (stryCov_9fa48("4647"), 'utf-8')
    }));
    pkg = JSON.parse(pkg);
    return pkg.version;
  }
}
async function getSuggestedModules(nbbVersion, toCheck) {
  if (stryMutAct_9fa48("4648")) {
    {}
  } else {
    stryCov_9fa48("4648");
    let body = await request(stryMutAct_9fa48("4649") ? {} : (stryCov_9fa48("4649"), {
      method: stryMutAct_9fa48("4650") ? "" : (stryCov_9fa48("4650"), 'GET'),
      url: stryMutAct_9fa48("4651") ? `` : (stryCov_9fa48("4651"), `https://packages.nodebb.org/api/v1/suggest?version=${nbbVersion}&package[]=${toCheck.join(stryMutAct_9fa48("4652") ? "" : (stryCov_9fa48("4652"), '&package[]='))}`),
      json: stryMutAct_9fa48("4653") ? false : (stryCov_9fa48("4653"), true)
    }));
    if (stryMutAct_9fa48("4656") ? !Array.isArray(body) || toCheck.length === 1 : stryMutAct_9fa48("4655") ? false : stryMutAct_9fa48("4654") ? true : (stryCov_9fa48("4654", "4655", "4656"), (stryMutAct_9fa48("4657") ? Array.isArray(body) : (stryCov_9fa48("4657"), !Array.isArray(body))) && (stryMutAct_9fa48("4659") ? toCheck.length !== 1 : stryMutAct_9fa48("4658") ? true : (stryCov_9fa48("4658", "4659"), toCheck.length === 1)))) {
      if (stryMutAct_9fa48("4660")) {
        {}
      } else {
        stryCov_9fa48("4660");
        body = stryMutAct_9fa48("4661") ? [] : (stryCov_9fa48("4661"), [body]);
      }
    }
    return body;
  }
}
async function checkPlugins() {
  if (stryMutAct_9fa48("4662")) {
    {}
  } else {
    stryCov_9fa48("4662");
    process.stdout.write(stryMutAct_9fa48("4663") ? "" : (stryCov_9fa48("4663"), 'Checking installed plugins and themes for updates... '));
    const [plugins, nbbVersion] = await Promise.all(stryMutAct_9fa48("4664") ? [] : (stryCov_9fa48("4664"), [getInstalledPlugins(), getCurrentVersion()]));
    const toCheck = Object.keys(plugins);
    if (stryMutAct_9fa48("4667") ? false : stryMutAct_9fa48("4666") ? true : stryMutAct_9fa48("4665") ? toCheck.length : (stryCov_9fa48("4665", "4666", "4667"), !toCheck.length)) {
      if (stryMutAct_9fa48("4668")) {
        {}
      } else {
        stryCov_9fa48("4668");
        process.stdout.write(chalk.green(stryMutAct_9fa48("4669") ? "" : (stryCov_9fa48("4669"), '  OK')));
        return stryMutAct_9fa48("4670") ? ["Stryker was here"] : (stryCov_9fa48("4670"), []); // no extraneous plugins installed
      }
    }

    const suggestedModules = await getSuggestedModules(nbbVersion, toCheck);
    process.stdout.write(chalk.green(stryMutAct_9fa48("4671") ? "" : (stryCov_9fa48("4671"), '  OK')));
    let current;
    let suggested;
    const upgradable = stryMutAct_9fa48("4672") ? suggestedModules.map(suggestObj => {
      current = plugins[suggestObj.package];
      suggested = suggestObj.version;
      if (suggestObj.code === 'match-found' && semver.gt(suggested, current)) {
        return {
          name: suggestObj.package,
          current: current,
          suggested: suggested
        };
      }
      return null;
    }) : (stryCov_9fa48("4672"), suggestedModules.map(suggestObj => {
      if (stryMutAct_9fa48("4673")) {
        {}
      } else {
        stryCov_9fa48("4673");
        current = plugins[suggestObj.package];
        suggested = suggestObj.version;
        if (stryMutAct_9fa48("4676") ? suggestObj.code === 'match-found' || semver.gt(suggested, current) : stryMutAct_9fa48("4675") ? false : stryMutAct_9fa48("4674") ? true : (stryCov_9fa48("4674", "4675", "4676"), (stryMutAct_9fa48("4678") ? suggestObj.code !== 'match-found' : stryMutAct_9fa48("4677") ? true : (stryCov_9fa48("4677", "4678"), suggestObj.code === (stryMutAct_9fa48("4679") ? "" : (stryCov_9fa48("4679"), 'match-found')))) && semver.gt(suggested, current))) {
          if (stryMutAct_9fa48("4680")) {
            {}
          } else {
            stryCov_9fa48("4680");
            return stryMutAct_9fa48("4681") ? {} : (stryCov_9fa48("4681"), {
              name: suggestObj.package,
              current: current,
              suggested: suggested
            });
          }
        }
        return null;
      }
    }).filter(Boolean));
    return upgradable;
  }
}
async function upgradePlugins() {
  if (stryMutAct_9fa48("4682")) {
    {}
  } else {
    stryCov_9fa48("4682");
    try {
      if (stryMutAct_9fa48("4683")) {
        {}
      } else {
        stryCov_9fa48("4683");
        const found = await checkPlugins();
        if (stryMutAct_9fa48("4686") ? found || found.length : stryMutAct_9fa48("4685") ? false : stryMutAct_9fa48("4684") ? true : (stryCov_9fa48("4684", "4685", "4686"), found && found.length)) {
          if (stryMutAct_9fa48("4687")) {
            {}
          } else {
            stryCov_9fa48("4687");
            process.stdout.write(stryMutAct_9fa48("4688") ? `` : (stryCov_9fa48("4688"), `\n\nA total of ${chalk.bold(String(found.length))} package(s) can be upgraded:\n\n`));
            found.forEach(suggestObj => {
              if (stryMutAct_9fa48("4689")) {
                {}
              } else {
                stryCov_9fa48("4689");
                process.stdout.write(stryMutAct_9fa48("4690") ? `` : (stryCov_9fa48("4690"), `${stryMutAct_9fa48("4691") ? chalk.yellow('  * ') - suggestObj.name : (stryCov_9fa48("4691"), chalk.yellow(stryMutAct_9fa48("4692") ? "" : (stryCov_9fa48("4692"), '  * ')) + suggestObj.name)} (${chalk.yellow(suggestObj.current)} -> ${chalk.green(suggestObj.suggested)})\n`));
              }
            });
          }
        } else {
          if (stryMutAct_9fa48("4693")) {
            {}
          } else {
            stryCov_9fa48("4693");
            console.log(chalk.green(stryMutAct_9fa48("4694") ? "" : (stryCov_9fa48("4694"), '\nAll packages up-to-date!')));
            return;
          }
        }
        prompt.message = stryMutAct_9fa48("4695") ? "Stryker was here!" : (stryCov_9fa48("4695"), '');
        prompt.delimiter = stryMutAct_9fa48("4696") ? "Stryker was here!" : (stryCov_9fa48("4696"), '');
        prompt.start();
        const result = await prompt.get(stryMutAct_9fa48("4697") ? {} : (stryCov_9fa48("4697"), {
          name: stryMutAct_9fa48("4698") ? "" : (stryCov_9fa48("4698"), 'upgrade'),
          description: stryMutAct_9fa48("4699") ? "" : (stryCov_9fa48("4699"), '\nProceed with upgrade (y|n)?'),
          type: stryMutAct_9fa48("4700") ? "" : (stryCov_9fa48("4700"), 'string')
        }));
        if (stryMutAct_9fa48("4702") ? false : stryMutAct_9fa48("4701") ? true : (stryCov_9fa48("4701", "4702"), (stryMutAct_9fa48("4703") ? [] : (stryCov_9fa48("4703"), [stryMutAct_9fa48("4704") ? "" : (stryCov_9fa48("4704"), 'y'), stryMutAct_9fa48("4705") ? "" : (stryCov_9fa48("4705"), 'Y'), stryMutAct_9fa48("4706") ? "" : (stryCov_9fa48("4706"), 'yes'), stryMutAct_9fa48("4707") ? "" : (stryCov_9fa48("4707"), 'YES')])).includes(result.upgrade))) {
          if (stryMutAct_9fa48("4708")) {
            {}
          } else {
            stryCov_9fa48("4708");
            console.log(stryMutAct_9fa48("4709") ? "" : (stryCov_9fa48("4709"), '\nUpgrading packages...'));
            const args = packageManagerInstallArgs.concat(found.map(stryMutAct_9fa48("4710") ? () => undefined : (stryCov_9fa48("4710"), suggestObj => stryMutAct_9fa48("4711") ? `` : (stryCov_9fa48("4711"), `${suggestObj.name}@${suggestObj.suggested}`))));
            cproc.execFileSync(packageManagerExecutable, args, stryMutAct_9fa48("4712") ? {} : (stryCov_9fa48("4712"), {
              stdio: stryMutAct_9fa48("4713") ? "" : (stryCov_9fa48("4713"), 'ignore')
            }));
          }
        } else {
          if (stryMutAct_9fa48("4714")) {
            {}
          } else {
            stryCov_9fa48("4714");
            console.log(stryMutAct_9fa48("4715") ? `` : (stryCov_9fa48("4715"), `${chalk.yellow(stryMutAct_9fa48("4716") ? "" : (stryCov_9fa48("4716"), 'Package upgrades skipped'))}. Check for upgrades at any time by running "${chalk.green(stryMutAct_9fa48("4717") ? "" : (stryCov_9fa48("4717"), './nodebb upgrade -p'))}".`));
          }
        }
      }
    } catch (err) {
      if (stryMutAct_9fa48("4718")) {
        {}
      } else {
        stryCov_9fa48("4718");
        console.log(stryMutAct_9fa48("4719") ? `` : (stryCov_9fa48("4719"), `${chalk.yellow(stryMutAct_9fa48("4720") ? "" : (stryCov_9fa48("4720"), 'Warning'))}: An unexpected error occured when attempting to verify plugin upgradability`));
        throw err;
      }
    }
  }
}
exports.upgradePlugins = upgradePlugins;