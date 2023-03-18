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
const cproc = require('child_process');
const {
  paths,
  pluginNamePattern
} = require('../constants');
const pkgInstall = module.exports;
function sortDependencies(dependencies) {
  if (stryMutAct_9fa48("4201")) {
    {}
  } else {
    stryCov_9fa48("4201");
    return stryMutAct_9fa48("4202") ? Object.entries(dependencies).reduce((memo, pkg) => {
      memo[pkg[0]] = pkg[1];
      return memo;
    }, {}) : (stryCov_9fa48("4202"), Object.entries(dependencies).sort(stryMutAct_9fa48("4203") ? () => undefined : (stryCov_9fa48("4203"), (a, b) => (stryMutAct_9fa48("4207") ? a >= b : stryMutAct_9fa48("4206") ? a <= b : stryMutAct_9fa48("4205") ? false : stryMutAct_9fa48("4204") ? true : (stryCov_9fa48("4204", "4205", "4206", "4207"), a < b)) ? stryMutAct_9fa48("4208") ? +1 : (stryCov_9fa48("4208"), -1) : 1)).reduce((memo, pkg) => {
      if (stryMutAct_9fa48("4209")) {
        {}
      } else {
        stryCov_9fa48("4209");
        memo[pkg[0]] = pkg[1];
        return memo;
      }
    }, {}));
  }
}
pkgInstall.updatePackageFile = () => {
  if (stryMutAct_9fa48("4210")) {
    {}
  } else {
    stryCov_9fa48("4210");
    let oldPackageContents;
    try {
      if (stryMutAct_9fa48("4211")) {
        {}
      } else {
        stryCov_9fa48("4211");
        oldPackageContents = JSON.parse(fs.readFileSync(paths.currentPackage, stryMutAct_9fa48("4212") ? "" : (stryCov_9fa48("4212"), 'utf8')));
      }
    } catch (e) {
      if (stryMutAct_9fa48("4213")) {
        {}
      } else {
        stryCov_9fa48("4213");
        if (stryMutAct_9fa48("4216") ? e.code === 'ENOENT' : stryMutAct_9fa48("4215") ? false : stryMutAct_9fa48("4214") ? true : (stryCov_9fa48("4214", "4215", "4216"), e.code !== (stryMutAct_9fa48("4217") ? "" : (stryCov_9fa48("4217"), 'ENOENT')))) {
          if (stryMutAct_9fa48("4218")) {
            {}
          } else {
            stryCov_9fa48("4218");
            throw e;
          }
        } else {
          if (stryMutAct_9fa48("4219")) {
            {}
          } else {
            stryCov_9fa48("4219");
            // No local package.json, copy from install/package.json
            fs.copyFileSync(paths.installPackage, paths.currentPackage);
            return;
          }
        }
      }
    }
    const _ = require('lodash');
    const defaultPackageContents = JSON.parse(fs.readFileSync(paths.installPackage, stryMutAct_9fa48("4220") ? "" : (stryCov_9fa48("4220"), 'utf8')));
    let dependencies = {};
    Object.entries(stryMutAct_9fa48("4223") ? oldPackageContents.dependencies && {} : stryMutAct_9fa48("4222") ? false : stryMutAct_9fa48("4221") ? true : (stryCov_9fa48("4221", "4222", "4223"), oldPackageContents.dependencies || {})).forEach(([dep, version]) => {
      if (stryMutAct_9fa48("4224")) {
        {}
      } else {
        stryCov_9fa48("4224");
        if (stryMutAct_9fa48("4226") ? false : stryMutAct_9fa48("4225") ? true : (stryCov_9fa48("4225", "4226"), pluginNamePattern.test(dep))) {
          if (stryMutAct_9fa48("4227")) {
            {}
          } else {
            stryCov_9fa48("4227");
            dependencies[dep] = version;
          }
        }
      }
    });
    const {
      devDependencies
    } = defaultPackageContents;

    // Sort dependencies alphabetically
    dependencies = sortDependencies(stryMutAct_9fa48("4228") ? {} : (stryCov_9fa48("4228"), {
      ...dependencies,
      ...defaultPackageContents.dependencies
    }));
    const packageContents = stryMutAct_9fa48("4229") ? {} : (stryCov_9fa48("4229"), {
      ..._.merge(oldPackageContents, defaultPackageContents),
      dependencies,
      devDependencies
    });
    fs.writeFileSync(paths.currentPackage, JSON.stringify(packageContents, null, 4));
  }
};
pkgInstall.supportedPackageManager = stryMutAct_9fa48("4230") ? [] : (stryCov_9fa48("4230"), [stryMutAct_9fa48("4231") ? "" : (stryCov_9fa48("4231"), 'npm'), stryMutAct_9fa48("4232") ? "" : (stryCov_9fa48("4232"), 'cnpm'), stryMutAct_9fa48("4233") ? "" : (stryCov_9fa48("4233"), 'pnpm'), stryMutAct_9fa48("4234") ? "" : (stryCov_9fa48("4234"), 'yarn')]);
pkgInstall.getPackageManager = () => {
  if (stryMutAct_9fa48("4235")) {
    {}
  } else {
    stryCov_9fa48("4235");
    try {
      if (stryMutAct_9fa48("4236")) {
        {}
      } else {
        stryCov_9fa48("4236");
        const packageContents = require(paths.currentPackage);
        // This regex technically allows invalid values:
        // cnpm isn't supported by corepack and it doesn't enforce a version string being present
        const pmRegex = new RegExp(stryMutAct_9fa48("4237") ? `` : (stryCov_9fa48("4237"), `^(?<packageManager>${pkgInstall.supportedPackageManager.join(stryMutAct_9fa48("4238") ? "" : (stryCov_9fa48("4238"), '|'))})@?[\\d\\w\\.\\-]*$`));
        const packageManager = packageContents.packageManager ? packageContents.packageManager.match(pmRegex) : stryMutAct_9fa48("4239") ? true : (stryCov_9fa48("4239"), false);
        if (stryMutAct_9fa48("4241") ? false : stryMutAct_9fa48("4240") ? true : (stryCov_9fa48("4240", "4241"), packageManager)) {
          if (stryMutAct_9fa48("4242")) {
            {}
          } else {
            stryCov_9fa48("4242");
            return packageManager.groups.packageManager;
          }
        }
        fs.accessSync(path.join(paths.nodeModules, stryMutAct_9fa48("4243") ? "" : (stryCov_9fa48("4243"), 'nconf/package.json')), fs.constants.R_OK);
        const nconf = require('nconf');
        if (stryMutAct_9fa48("4246") ? false : stryMutAct_9fa48("4245") ? true : stryMutAct_9fa48("4244") ? Object.keys(nconf.stores).length : (stryCov_9fa48("4244", "4245", "4246"), !Object.keys(nconf.stores).length)) {
          if (stryMutAct_9fa48("4247")) {
            {}
          } else {
            stryCov_9fa48("4247");
            // Quick & dirty nconf setup for when you cannot rely on nconf having been required already
            const configFile = path.resolve(__dirname, stryMutAct_9fa48("4248") ? "" : (stryCov_9fa48("4248"), '../../'), stryMutAct_9fa48("4251") ? nconf.any(['config', 'CONFIG']) && 'config.json' : stryMutAct_9fa48("4250") ? false : stryMutAct_9fa48("4249") ? true : (stryCov_9fa48("4249", "4250", "4251"), nconf.any(stryMutAct_9fa48("4252") ? [] : (stryCov_9fa48("4252"), [stryMutAct_9fa48("4253") ? "" : (stryCov_9fa48("4253"), 'config'), stryMutAct_9fa48("4254") ? "" : (stryCov_9fa48("4254"), 'CONFIG')])) || (stryMutAct_9fa48("4255") ? "" : (stryCov_9fa48("4255"), 'config.json'))));
            nconf.env().file(stryMutAct_9fa48("4256") ? {} : (stryCov_9fa48("4256"), {
              // not sure why adding .argv() causes the process to terminate
              file: configFile
            }));
          }
        }
        if (stryMutAct_9fa48("4259") ? nconf.get('package_manager') || !pkgInstall.supportedPackageManager.includes(nconf.get('package_manager')) : stryMutAct_9fa48("4258") ? false : stryMutAct_9fa48("4257") ? true : (stryCov_9fa48("4257", "4258", "4259"), nconf.get(stryMutAct_9fa48("4260") ? "" : (stryCov_9fa48("4260"), 'package_manager')) && (stryMutAct_9fa48("4261") ? pkgInstall.supportedPackageManager.includes(nconf.get('package_manager')) : (stryCov_9fa48("4261"), !pkgInstall.supportedPackageManager.includes(nconf.get(stryMutAct_9fa48("4262") ? "" : (stryCov_9fa48("4262"), 'package_manager'))))))) {
          if (stryMutAct_9fa48("4263")) {
            {}
          } else {
            stryCov_9fa48("4263");
            nconf.clear(stryMutAct_9fa48("4264") ? "" : (stryCov_9fa48("4264"), 'package_manager'));
          }
        }
        if (stryMutAct_9fa48("4267") ? false : stryMutAct_9fa48("4266") ? true : stryMutAct_9fa48("4265") ? nconf.get('package_manager') : (stryCov_9fa48("4265", "4266", "4267"), !nconf.get(stryMutAct_9fa48("4268") ? "" : (stryCov_9fa48("4268"), 'package_manager')))) {
          if (stryMutAct_9fa48("4269")) {
            {}
          } else {
            stryCov_9fa48("4269");
            nconf.set(stryMutAct_9fa48("4270") ? "" : (stryCov_9fa48("4270"), 'package_manager'), getPackageManagerByLockfile());
          }
        }
        return stryMutAct_9fa48("4273") ? nconf.get('package_manager') && 'npm' : stryMutAct_9fa48("4272") ? false : stryMutAct_9fa48("4271") ? true : (stryCov_9fa48("4271", "4272", "4273"), nconf.get(stryMutAct_9fa48("4274") ? "" : (stryCov_9fa48("4274"), 'package_manager')) || (stryMutAct_9fa48("4275") ? "" : (stryCov_9fa48("4275"), 'npm')));
      }
    } catch (e) {
      if (stryMutAct_9fa48("4276")) {
        {}
      } else {
        stryCov_9fa48("4276");
        // nconf not installed or other unexpected error/exception
        return stryMutAct_9fa48("4279") ? getPackageManagerByLockfile() && 'npm' : stryMutAct_9fa48("4278") ? false : stryMutAct_9fa48("4277") ? true : (stryCov_9fa48("4277", "4278", "4279"), getPackageManagerByLockfile() || (stryMutAct_9fa48("4280") ? "" : (stryCov_9fa48("4280"), 'npm')));
      }
    }
  }
};
function getPackageManagerByLockfile() {
  if (stryMutAct_9fa48("4281")) {
    {}
  } else {
    stryCov_9fa48("4281");
    for (const [packageManager, lockfile] of Object.entries(stryMutAct_9fa48("4282") ? {} : (stryCov_9fa48("4282"), {
      npm: stryMutAct_9fa48("4283") ? "" : (stryCov_9fa48("4283"), 'package-lock.json'),
      yarn: stryMutAct_9fa48("4284") ? "" : (stryCov_9fa48("4284"), 'yarn.lock'),
      pnpm: stryMutAct_9fa48("4285") ? "" : (stryCov_9fa48("4285"), 'pnpm-lock.yaml')
    }))) {
      if (stryMutAct_9fa48("4286")) {
        {}
      } else {
        stryCov_9fa48("4286");
        try {
          if (stryMutAct_9fa48("4287")) {
            {}
          } else {
            stryCov_9fa48("4287");
            fs.accessSync(path.resolve(__dirname, stryMutAct_9fa48("4288") ? `` : (stryCov_9fa48("4288"), `../../${lockfile}`)), fs.constants.R_OK);
            return packageManager;
          }
        } catch (e) {}
      }
    }
  }
}
pkgInstall.installAll = () => {
  if (stryMutAct_9fa48("4289")) {
    {}
  } else {
    stryCov_9fa48("4289");
    const prod = stryMutAct_9fa48("4292") ? process.env.NODE_ENV === 'development' : stryMutAct_9fa48("4291") ? false : stryMutAct_9fa48("4290") ? true : (stryCov_9fa48("4290", "4291", "4292"), process.env.NODE_ENV !== (stryMutAct_9fa48("4293") ? "" : (stryCov_9fa48("4293"), 'development')));
    let command = stryMutAct_9fa48("4294") ? "" : (stryCov_9fa48("4294"), 'npm install');
    const supportedPackageManagerList = exports.supportedPackageManager; // load config from src/cli/package-install.js
    const packageManager = pkgInstall.getPackageManager();
    if (stryMutAct_9fa48("4298") ? supportedPackageManagerList.indexOf(packageManager) < 0 : stryMutAct_9fa48("4297") ? supportedPackageManagerList.indexOf(packageManager) > 0 : stryMutAct_9fa48("4296") ? false : stryMutAct_9fa48("4295") ? true : (stryCov_9fa48("4295", "4296", "4297", "4298"), supportedPackageManagerList.indexOf(packageManager) >= 0)) {
      if (stryMutAct_9fa48("4299")) {
        {}
      } else {
        stryCov_9fa48("4299");
        switch (packageManager) {
          case stryMutAct_9fa48("4301") ? "" : (stryCov_9fa48("4301"), 'yarn'):
            if (stryMutAct_9fa48("4300")) {} else {
              stryCov_9fa48("4300");
              command = stryMutAct_9fa48("4302") ? `` : (stryCov_9fa48("4302"), `yarn${prod ? stryMutAct_9fa48("4303") ? "" : (stryCov_9fa48("4303"), ' --production') : stryMutAct_9fa48("4304") ? "Stryker was here!" : (stryCov_9fa48("4304"), '')}`);
              break;
            }
          case stryMutAct_9fa48("4306") ? "" : (stryCov_9fa48("4306"), 'pnpm'):
            if (stryMutAct_9fa48("4305")) {} else {
              stryCov_9fa48("4305");
              command = stryMutAct_9fa48("4307") ? "" : (stryCov_9fa48("4307"), 'pnpm install'); // pnpm checks NODE_ENV
              break;
            }
          case stryMutAct_9fa48("4309") ? "" : (stryCov_9fa48("4309"), 'cnpm'):
            if (stryMutAct_9fa48("4308")) {} else {
              stryCov_9fa48("4308");
              command = stryMutAct_9fa48("4310") ? `` : (stryCov_9fa48("4310"), `cnpm install ${prod ? stryMutAct_9fa48("4311") ? "" : (stryCov_9fa48("4311"), ' --production') : stryMutAct_9fa48("4312") ? "Stryker was here!" : (stryCov_9fa48("4312"), '')}`);
              break;
            }
          default:
            if (stryMutAct_9fa48("4313")) {} else {
              stryCov_9fa48("4313");
              stryMutAct_9fa48("4314") ? command -= prod ? ' --omit=dev' : '' : (stryCov_9fa48("4314"), command += prod ? stryMutAct_9fa48("4315") ? "" : (stryCov_9fa48("4315"), ' --omit=dev') : stryMutAct_9fa48("4316") ? "Stryker was here!" : (stryCov_9fa48("4316"), ''));
              break;
            }
        }
      }
    }
    try {
      if (stryMutAct_9fa48("4317")) {
        {}
      } else {
        stryCov_9fa48("4317");
        cproc.execSync(command, stryMutAct_9fa48("4318") ? {} : (stryCov_9fa48("4318"), {
          cwd: path.join(__dirname, stryMutAct_9fa48("4319") ? "" : (stryCov_9fa48("4319"), '../../')),
          stdio: stryMutAct_9fa48("4320") ? [] : (stryCov_9fa48("4320"), [0, 1, 2])
        }));
      }
    } catch (e) {
      if (stryMutAct_9fa48("4321")) {
        {}
      } else {
        stryCov_9fa48("4321");
        console.log(stryMutAct_9fa48("4322") ? "" : (stryCov_9fa48("4322"), 'Error installing dependencies!'));
        console.log(stryMutAct_9fa48("4323") ? `` : (stryCov_9fa48("4323"), `message: ${e.message}`));
        console.log(stryMutAct_9fa48("4324") ? `` : (stryCov_9fa48("4324"), `stdout: ${e.stdout}`));
        console.log(stryMutAct_9fa48("4325") ? `` : (stryCov_9fa48("4325"), `stderr: ${e.stderr}`));
        throw e;
      }
    }
  }
};
pkgInstall.preserveExtraneousPlugins = () => {
  if (stryMutAct_9fa48("4326")) {
    {}
  } else {
    stryCov_9fa48("4326");
    // Skip if `node_modules/` is not found or inaccessible
    try {
      if (stryMutAct_9fa48("4327")) {
        {}
      } else {
        stryCov_9fa48("4327");
        fs.accessSync(paths.nodeModules, fs.constants.R_OK);
      }
    } catch (e) {
      if (stryMutAct_9fa48("4328")) {
        {}
      } else {
        stryCov_9fa48("4328");
        return;
      }
    }
    const packages = stryMutAct_9fa48("4329") ? fs.readdirSync(paths.nodeModules) : (stryCov_9fa48("4329"), fs.readdirSync(paths.nodeModules).filter(stryMutAct_9fa48("4330") ? () => undefined : (stryCov_9fa48("4330"), pkgName => pluginNamePattern.test(pkgName))));
    const packageContents = JSON.parse(fs.readFileSync(paths.currentPackage, stryMutAct_9fa48("4331") ? "" : (stryCov_9fa48("4331"), 'utf8')));
    const extraneous = stryMutAct_9fa48("4332") ? packages
    // only extraneous plugins (ones not in package.json) which are not links

    // reduce to a map of package names to package versions
    .reduce((map, pkgName) => {
      const pkgConfig = JSON.parse(fs.readFileSync(path.join(paths.nodeModules, pkgName, 'package.json'), 'utf8'));
      map[pkgName] = pkgConfig.version;
      return map;
    }, {}) : (stryCov_9fa48("4332"), packages
    // only extraneous plugins (ones not in package.json) which are not links
    .filter(pkgName => {
      if (stryMutAct_9fa48("4333")) {
        {}
      } else {
        stryCov_9fa48("4333");
        const extraneous = stryMutAct_9fa48("4334") ? packageContents.dependencies.hasOwnProperty(pkgName) : (stryCov_9fa48("4334"), !packageContents.dependencies.hasOwnProperty(pkgName));
        const isLink = fs.lstatSync(path.join(paths.nodeModules, pkgName)).isSymbolicLink();
        return stryMutAct_9fa48("4337") ? extraneous || !isLink : stryMutAct_9fa48("4336") ? false : stryMutAct_9fa48("4335") ? true : (stryCov_9fa48("4335", "4336", "4337"), extraneous && (stryMutAct_9fa48("4338") ? isLink : (stryCov_9fa48("4338"), !isLink)));
      }
    })
    // reduce to a map of package names to package versions
    .reduce((map, pkgName) => {
      if (stryMutAct_9fa48("4339")) {
        {}
      } else {
        stryCov_9fa48("4339");
        const pkgConfig = JSON.parse(fs.readFileSync(path.join(paths.nodeModules, pkgName, stryMutAct_9fa48("4340") ? "" : (stryCov_9fa48("4340"), 'package.json')), stryMutAct_9fa48("4341") ? "" : (stryCov_9fa48("4341"), 'utf8')));
        map[pkgName] = pkgConfig.version;
        return map;
      }
    }, {}));

    // Add those packages to package.json
    packageContents.dependencies = sortDependencies(stryMutAct_9fa48("4342") ? {} : (stryCov_9fa48("4342"), {
      ...packageContents.dependencies,
      ...extraneous
    }));
    fs.writeFileSync(paths.currentPackage, JSON.stringify(packageContents, null, 4));
  }
};