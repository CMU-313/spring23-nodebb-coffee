/* eslint-disable import/order */
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
const fs = require('fs');
const path = require('path');
require('../../require-main');
const packageInstall = require('./package-install');
const {
  paths
} = require('../constants');
try {
  if (stryMutAct_9fa48("3808")) {
    {}
  } else {
    stryCov_9fa48("3808");
    fs.accessSync(paths.currentPackage, fs.constants.R_OK); // throw on missing package.json
    try {
      if (stryMutAct_9fa48("3809")) {
        {}
      } else {
        stryCov_9fa48("3809");
        // handle missing node_modules/ directory
        fs.accessSync(paths.nodeModules, fs.constants.R_OK);
      }
    } catch (e) {
      if (stryMutAct_9fa48("3810")) {
        {}
      } else {
        stryCov_9fa48("3810");
        if (stryMutAct_9fa48("3813") ? e.code !== 'ENOENT' : stryMutAct_9fa48("3812") ? false : stryMutAct_9fa48("3811") ? true : (stryCov_9fa48("3811", "3812", "3813"), e.code === (stryMutAct_9fa48("3814") ? "" : (stryCov_9fa48("3814"), 'ENOENT')))) {
          if (stryMutAct_9fa48("3815")) {
            {}
          } else {
            stryCov_9fa48("3815");
            // run package installation just to sync up node_modules/ with existing package.json
            packageInstall.installAll();
          }
        } else {
          if (stryMutAct_9fa48("3816")) {
            {}
          } else {
            stryCov_9fa48("3816");
            throw e;
          }
        }
      }
    }
    fs.accessSync(path.join(paths.nodeModules, stryMutAct_9fa48("3817") ? "" : (stryCov_9fa48("3817"), 'semver/package.json')), fs.constants.R_OK);
    const semver = require('semver');
    const defaultPackage = require('../../install/package.json');
    const checkVersion = function (packageName) {
      if (stryMutAct_9fa48("3818")) {
        {}
      } else {
        stryCov_9fa48("3818");
        const {
          version
        } = JSON.parse(fs.readFileSync(path.join(paths.nodeModules, packageName, stryMutAct_9fa48("3819") ? "" : (stryCov_9fa48("3819"), 'package.json')), stryMutAct_9fa48("3820") ? "" : (stryCov_9fa48("3820"), 'utf8')));
        if (stryMutAct_9fa48("3823") ? false : stryMutAct_9fa48("3822") ? true : stryMutAct_9fa48("3821") ? semver.satisfies(version, defaultPackage.dependencies[packageName]) : (stryCov_9fa48("3821", "3822", "3823"), !semver.satisfies(version, defaultPackage.dependencies[packageName]))) {
          if (stryMutAct_9fa48("3824")) {
            {}
          } else {
            stryCov_9fa48("3824");
            const e = new TypeError(stryMutAct_9fa48("3825") ? `` : (stryCov_9fa48("3825"), `Incorrect dependency version: ${packageName}`));
            e.code = stryMutAct_9fa48("3826") ? "" : (stryCov_9fa48("3826"), 'DEP_WRONG_VERSION');
            throw e;
          }
        }
      }
    };
    checkVersion(stryMutAct_9fa48("3827") ? "" : (stryCov_9fa48("3827"), 'nconf'));
    checkVersion(stryMutAct_9fa48("3828") ? "" : (stryCov_9fa48("3828"), 'async'));
    checkVersion(stryMutAct_9fa48("3829") ? "" : (stryCov_9fa48("3829"), 'commander'));
    checkVersion(stryMutAct_9fa48("3830") ? "" : (stryCov_9fa48("3830"), 'chalk'));
    checkVersion(stryMutAct_9fa48("3831") ? "" : (stryCov_9fa48("3831"), 'lodash'));
    checkVersion(stryMutAct_9fa48("3832") ? "" : (stryCov_9fa48("3832"), 'lru-cache'));
  }
} catch (e) {
  if (stryMutAct_9fa48("3833")) {
    {}
  } else {
    stryCov_9fa48("3833");
    if (stryMutAct_9fa48("3835") ? false : stryMutAct_9fa48("3834") ? true : (stryCov_9fa48("3834", "3835"), (stryMutAct_9fa48("3836") ? [] : (stryCov_9fa48("3836"), [stryMutAct_9fa48("3837") ? "" : (stryCov_9fa48("3837"), 'ENOENT'), stryMutAct_9fa48("3838") ? "" : (stryCov_9fa48("3838"), 'DEP_WRONG_VERSION'), stryMutAct_9fa48("3839") ? "" : (stryCov_9fa48("3839"), 'MODULE_NOT_FOUND')])).includes(e.code))) {
      if (stryMutAct_9fa48("3840")) {
        {}
      } else {
        stryCov_9fa48("3840");
        console.warn(stryMutAct_9fa48("3841") ? "" : (stryCov_9fa48("3841"), 'Dependencies outdated or not yet installed.'));
        console.log(stryMutAct_9fa48("3842") ? "" : (stryCov_9fa48("3842"), 'Installing them now...\n'));
        packageInstall.updatePackageFile();
        packageInstall.preserveExtraneousPlugins();
        packageInstall.installAll();
        const chalk = require('chalk');
        console.log(stryMutAct_9fa48("3843") ? `` : (stryCov_9fa48("3843"), `${chalk.green(stryMutAct_9fa48("3844") ? "" : (stryCov_9fa48("3844"), 'OK'))}\n`));
      }
    } else {
      if (stryMutAct_9fa48("3845")) {
        {}
      } else {
        stryCov_9fa48("3845");
        throw e;
      }
    }
  }
}
const chalk = require('chalk');
const nconf = require('nconf');
const {
  program
} = require('commander');
const yargs = require('yargs');
const pkg = require('../../install/package.json');
const file = require('../file');
const prestart = require('../prestart');
program.configureHelp(require('./colors'));
program.name(stryMutAct_9fa48("3846") ? "" : (stryCov_9fa48("3846"), './nodebb')).description(stryMutAct_9fa48("3847") ? "" : (stryCov_9fa48("3847"), 'Welcome to NodeBB')).version(pkg.version).option(stryMutAct_9fa48("3848") ? "" : (stryCov_9fa48("3848"), '--json-logging'), stryMutAct_9fa48("3849") ? "" : (stryCov_9fa48("3849"), 'Output to logs in JSON format'), stryMutAct_9fa48("3850") ? true : (stryCov_9fa48("3850"), false)).option(stryMutAct_9fa48("3851") ? "" : (stryCov_9fa48("3851"), '--log-level <level>'), stryMutAct_9fa48("3852") ? "" : (stryCov_9fa48("3852"), 'Default logging level to use'), stryMutAct_9fa48("3853") ? "" : (stryCov_9fa48("3853"), 'info')).option(stryMutAct_9fa48("3854") ? "" : (stryCov_9fa48("3854"), '--config <value>'), stryMutAct_9fa48("3855") ? "" : (stryCov_9fa48("3855"), 'Specify a config file'), stryMutAct_9fa48("3856") ? "" : (stryCov_9fa48("3856"), 'config.json')).option(stryMutAct_9fa48("3857") ? "" : (stryCov_9fa48("3857"), '-d, --dev'), stryMutAct_9fa48("3858") ? "" : (stryCov_9fa48("3858"), 'Development mode, including verbose logging'), stryMutAct_9fa48("3859") ? true : (stryCov_9fa48("3859"), false)).option(stryMutAct_9fa48("3860") ? "" : (stryCov_9fa48("3860"), '-l, --log'), stryMutAct_9fa48("3861") ? "" : (stryCov_9fa48("3861"), 'Log subprocess output to console'), stryMutAct_9fa48("3862") ? true : (stryCov_9fa48("3862"), false));

// provide a yargs object ourselves
// otherwise yargs will consume `--help` or `help`
// and `nconf` will exit with useless usage info
const opts = yargs(stryMutAct_9fa48("3863") ? process.argv : (stryCov_9fa48("3863"), process.argv.slice(2))).help(stryMutAct_9fa48("3864") ? true : (stryCov_9fa48("3864"), false)).exitProcess(stryMutAct_9fa48("3865") ? true : (stryCov_9fa48("3865"), false));
nconf.argv(opts).env(stryMutAct_9fa48("3866") ? {} : (stryCov_9fa48("3866"), {
  separator: stryMutAct_9fa48("3867") ? "" : (stryCov_9fa48("3867"), '__')
}));
prestart.setupWinston();

// Alternate configuration file support
const configFile = path.resolve(paths.baseDir, stryMutAct_9fa48("3870") ? nconf.get('config') && 'config.json' : stryMutAct_9fa48("3869") ? false : stryMutAct_9fa48("3868") ? true : (stryCov_9fa48("3868", "3869", "3870"), nconf.get(stryMutAct_9fa48("3871") ? "" : (stryCov_9fa48("3871"), 'config')) || (stryMutAct_9fa48("3872") ? "" : (stryCov_9fa48("3872"), 'config.json'))));
const configExists = stryMutAct_9fa48("3875") ? file.existsSync(configFile) && nconf.get('url') && nconf.get('secret') && nconf.get('database') : stryMutAct_9fa48("3874") ? false : stryMutAct_9fa48("3873") ? true : (stryCov_9fa48("3873", "3874", "3875"), file.existsSync(configFile) || (stryMutAct_9fa48("3877") ? nconf.get('url') && nconf.get('secret') || nconf.get('database') : stryMutAct_9fa48("3876") ? false : (stryCov_9fa48("3876", "3877"), (stryMutAct_9fa48("3879") ? nconf.get('url') || nconf.get('secret') : stryMutAct_9fa48("3878") ? true : (stryCov_9fa48("3878", "3879"), nconf.get(stryMutAct_9fa48("3880") ? "" : (stryCov_9fa48("3880"), 'url')) && nconf.get(stryMutAct_9fa48("3881") ? "" : (stryCov_9fa48("3881"), 'secret')))) && nconf.get(stryMutAct_9fa48("3882") ? "" : (stryCov_9fa48("3882"), 'database')))));
prestart.loadConfig(configFile);
prestart.versionCheck();
if (stryMutAct_9fa48("3885") ? !configExists || process.argv[2] !== 'setup' : stryMutAct_9fa48("3884") ? false : stryMutAct_9fa48("3883") ? true : (stryCov_9fa48("3883", "3884", "3885"), (stryMutAct_9fa48("3886") ? configExists : (stryCov_9fa48("3886"), !configExists)) && (stryMutAct_9fa48("3888") ? process.argv[2] === 'setup' : stryMutAct_9fa48("3887") ? true : (stryCov_9fa48("3887", "3888"), process.argv[2] !== (stryMutAct_9fa48("3889") ? "" : (stryCov_9fa48("3889"), 'setup')))))) {
  if (stryMutAct_9fa48("3890")) {
    {}
  } else {
    stryCov_9fa48("3890");
    require('./setup').webInstall();
    //return;
  }
}

process.env.CONFIG = configFile;

// running commands
program.command(stryMutAct_9fa48("3891") ? "" : (stryCov_9fa48("3891"), 'start')).description(stryMutAct_9fa48("3892") ? "" : (stryCov_9fa48("3892"), 'Start the NodeBB server')).action(() => {
  if (stryMutAct_9fa48("3893")) {
    {}
  } else {
    stryCov_9fa48("3893");
    require('./running').start(program.opts());
  }
});
program.command(stryMutAct_9fa48("3894") ? "" : (stryCov_9fa48("3894"), 'slog'), null, stryMutAct_9fa48("3895") ? {} : (stryCov_9fa48("3895"), {
  noHelp: stryMutAct_9fa48("3896") ? false : (stryCov_9fa48("3896"), true)
})).description(stryMutAct_9fa48("3897") ? "" : (stryCov_9fa48("3897"), 'Start the NodeBB server and view the live output log')).action(() => {
  if (stryMutAct_9fa48("3898")) {
    {}
  } else {
    stryCov_9fa48("3898");
    require('./running').start(stryMutAct_9fa48("3899") ? {} : (stryCov_9fa48("3899"), {
      ...program.opts(),
      log: stryMutAct_9fa48("3900") ? false : (stryCov_9fa48("3900"), true)
    }));
  }
});
program.command(stryMutAct_9fa48("3901") ? "" : (stryCov_9fa48("3901"), 'dev'), null, stryMutAct_9fa48("3902") ? {} : (stryCov_9fa48("3902"), {
  noHelp: stryMutAct_9fa48("3903") ? false : (stryCov_9fa48("3903"), true)
})).description(stryMutAct_9fa48("3904") ? "" : (stryCov_9fa48("3904"), 'Start NodeBB in verbose development mode')).action(() => {
  if (stryMutAct_9fa48("3905")) {
    {}
  } else {
    stryCov_9fa48("3905");
    process.env.NODE_ENV = stryMutAct_9fa48("3906") ? "" : (stryCov_9fa48("3906"), 'development');
    global.env = stryMutAct_9fa48("3907") ? "" : (stryCov_9fa48("3907"), 'development');
    require('./running').start(stryMutAct_9fa48("3908") ? {} : (stryCov_9fa48("3908"), {
      ...program.opts(),
      dev: stryMutAct_9fa48("3909") ? false : (stryCov_9fa48("3909"), true)
    }));
  }
});
program.command(stryMutAct_9fa48("3910") ? "" : (stryCov_9fa48("3910"), 'stop')).description(stryMutAct_9fa48("3911") ? "" : (stryCov_9fa48("3911"), 'Stop the NodeBB server')).action(() => {
  if (stryMutAct_9fa48("3912")) {
    {}
  } else {
    stryCov_9fa48("3912");
    require('./running').stop(program.opts());
  }
});
program.command(stryMutAct_9fa48("3913") ? "" : (stryCov_9fa48("3913"), 'restart')).description(stryMutAct_9fa48("3914") ? "" : (stryCov_9fa48("3914"), 'Restart the NodeBB server')).action(() => {
  if (stryMutAct_9fa48("3915")) {
    {}
  } else {
    stryCov_9fa48("3915");
    require('./running').restart(program.opts());
  }
});
program.command(stryMutAct_9fa48("3916") ? "" : (stryCov_9fa48("3916"), 'status')).description(stryMutAct_9fa48("3917") ? "" : (stryCov_9fa48("3917"), 'Check the running status of the NodeBB server')).action(() => {
  if (stryMutAct_9fa48("3918")) {
    {}
  } else {
    stryCov_9fa48("3918");
    require('./running').status(program.opts());
  }
});
program.command(stryMutAct_9fa48("3919") ? "" : (stryCov_9fa48("3919"), 'log')).description(stryMutAct_9fa48("3920") ? "" : (stryCov_9fa48("3920"), 'Open the output log (useful for debugging)')).action(() => {
  if (stryMutAct_9fa48("3921")) {
    {}
  } else {
    stryCov_9fa48("3921");
    require('./running').log(program.opts());
  }
});

// management commands
program.command(stryMutAct_9fa48("3922") ? "" : (stryCov_9fa48("3922"), 'setup [config]')).description(stryMutAct_9fa48("3923") ? "" : (stryCov_9fa48("3923"), 'Run the NodeBB setup script, or setup with an initial config')).option(stryMutAct_9fa48("3924") ? "" : (stryCov_9fa48("3924"), '--skip-build'), stryMutAct_9fa48("3925") ? "" : (stryCov_9fa48("3925"), 'Run setup without building assets')).action(initConfig => {
  if (stryMutAct_9fa48("3926")) {
    {}
  } else {
    stryCov_9fa48("3926");
    if (stryMutAct_9fa48("3928") ? false : stryMutAct_9fa48("3927") ? true : (stryCov_9fa48("3927", "3928"), initConfig)) {
      if (stryMutAct_9fa48("3929")) {
        {}
      } else {
        stryCov_9fa48("3929");
        try {
          if (stryMutAct_9fa48("3930")) {
            {}
          } else {
            stryCov_9fa48("3930");
            initConfig = JSON.parse(initConfig);
          }
        } catch (e) {
          if (stryMutAct_9fa48("3931")) {
            {}
          } else {
            stryCov_9fa48("3931");
            console.warn(chalk.red(stryMutAct_9fa48("3932") ? "" : (stryCov_9fa48("3932"), 'Invalid JSON passed as initial config value.')));
            console.log(stryMutAct_9fa48("3933") ? "" : (stryCov_9fa48("3933"), 'If you meant to pass in an initial config value, please try again.\n'));
            throw e;
          }
        }
      }
    }
    require('./setup').setup(initConfig);
  }
});
program.command(stryMutAct_9fa48("3934") ? "" : (stryCov_9fa48("3934"), 'install [plugin]')).description(stryMutAct_9fa48("3935") ? "" : (stryCov_9fa48("3935"), 'Launch the NodeBB web installer for configuration setup or install a plugin')).option(stryMutAct_9fa48("3936") ? "" : (stryCov_9fa48("3936"), '-f, --force'), stryMutAct_9fa48("3937") ? "" : (stryCov_9fa48("3937"), 'Force plugin installation even if it may be incompatible with currently installed NodeBB version')).action((plugin, options) => {
  if (stryMutAct_9fa48("3938")) {
    {}
  } else {
    stryCov_9fa48("3938");
    if (stryMutAct_9fa48("3940") ? false : stryMutAct_9fa48("3939") ? true : (stryCov_9fa48("3939", "3940"), plugin)) {
      if (stryMutAct_9fa48("3941")) {
        {}
      } else {
        stryCov_9fa48("3941");
        require('./manage').install(plugin, options);
      }
    } else {
      if (stryMutAct_9fa48("3942")) {
        {}
      } else {
        stryCov_9fa48("3942");
        require('./setup').webInstall();
      }
    }
  }
});
program.command(stryMutAct_9fa48("3943") ? "" : (stryCov_9fa48("3943"), 'build [targets...]')).description(stryMutAct_9fa48("3944") ? `` : (stryCov_9fa48("3944"), `Compile static assets ${chalk.red(stryMutAct_9fa48("3945") ? "" : (stryCov_9fa48("3945"), '(JS, CSS, templates, languages)'))}`)).option(stryMutAct_9fa48("3946") ? "" : (stryCov_9fa48("3946"), '-s, --series'), stryMutAct_9fa48("3947") ? "" : (stryCov_9fa48("3947"), 'Run builds in series without extra processes')).option(stryMutAct_9fa48("3948") ? "" : (stryCov_9fa48("3948"), '-w, --webpack'), stryMutAct_9fa48("3949") ? "" : (stryCov_9fa48("3949"), 'Bundle assets with webpack'), stryMutAct_9fa48("3950") ? false : (stryCov_9fa48("3950"), true)).action((targets, options) => {
  if (stryMutAct_9fa48("3951")) {
    {}
  } else {
    stryCov_9fa48("3951");
    if (stryMutAct_9fa48("3953") ? false : stryMutAct_9fa48("3952") ? true : (stryCov_9fa48("3952", "3953"), program.opts().dev)) {
      if (stryMutAct_9fa48("3954")) {
        {}
      } else {
        stryCov_9fa48("3954");
        process.env.NODE_ENV = stryMutAct_9fa48("3955") ? "" : (stryCov_9fa48("3955"), 'development');
        global.env = stryMutAct_9fa48("3956") ? "" : (stryCov_9fa48("3956"), 'development');
      }
    }
    require('./manage').build(targets.length ? targets : stryMutAct_9fa48("3957") ? false : (stryCov_9fa48("3957"), true), options);
  }
}).on(stryMutAct_9fa48("3958") ? "" : (stryCov_9fa48("3958"), '--help'), () => {
  if (stryMutAct_9fa48("3959")) {
    {}
  } else {
    stryCov_9fa48("3959");
    require('../meta/aliases').buildTargets();
  }
});
program.command(stryMutAct_9fa48("3960") ? "" : (stryCov_9fa48("3960"), 'activate [plugin]')).description(stryMutAct_9fa48("3961") ? "" : (stryCov_9fa48("3961"), 'Activate a plugin for the next startup of NodeBB (nodebb-plugin- prefix is optional)')).action(plugin => {
  if (stryMutAct_9fa48("3962")) {
    {}
  } else {
    stryCov_9fa48("3962");
    require('./manage').activate(plugin);
  }
});
program.command(stryMutAct_9fa48("3963") ? "" : (stryCov_9fa48("3963"), 'plugins')).action(() => {
  if (stryMutAct_9fa48("3964")) {
    {}
  } else {
    stryCov_9fa48("3964");
    require('./manage').listPlugins();
  }
}).description(stryMutAct_9fa48("3965") ? "" : (stryCov_9fa48("3965"), 'List all installed plugins'));
program.command(stryMutAct_9fa48("3966") ? "" : (stryCov_9fa48("3966"), 'events [count]')).description(stryMutAct_9fa48("3967") ? "" : (stryCov_9fa48("3967"), 'Outputs the most recent administrative events recorded by NodeBB')).action(count => {
  if (stryMutAct_9fa48("3968")) {
    {}
  } else {
    stryCov_9fa48("3968");
    require('./manage').listEvents(count);
  }
});
program.command(stryMutAct_9fa48("3969") ? "" : (stryCov_9fa48("3969"), 'info')).description(stryMutAct_9fa48("3970") ? "" : (stryCov_9fa48("3970"), 'Outputs various system info')).action(() => {
  if (stryMutAct_9fa48("3971")) {
    {}
  } else {
    stryCov_9fa48("3971");
    require('./manage').info();
  }
});

// reset
const resetCommand = program.command(stryMutAct_9fa48("3972") ? "" : (stryCov_9fa48("3972"), 'reset'));
resetCommand.description(stryMutAct_9fa48("3973") ? "" : (stryCov_9fa48("3973"), 'Reset plugins, themes, settings, etc')).option(stryMutAct_9fa48("3974") ? "" : (stryCov_9fa48("3974"), '-t, --theme [theme]'), stryMutAct_9fa48("3975") ? "" : (stryCov_9fa48("3975"), 'Reset to [theme] or to the default theme')).option(stryMutAct_9fa48("3976") ? "" : (stryCov_9fa48("3976"), '-p, --plugin [plugin]'), stryMutAct_9fa48("3977") ? "" : (stryCov_9fa48("3977"), 'Disable [plugin] or all plugins')).option(stryMutAct_9fa48("3978") ? "" : (stryCov_9fa48("3978"), '-w, --widgets'), stryMutAct_9fa48("3979") ? "" : (stryCov_9fa48("3979"), 'Disable all widgets')).option(stryMutAct_9fa48("3980") ? "" : (stryCov_9fa48("3980"), '-s, --settings'), stryMutAct_9fa48("3981") ? "" : (stryCov_9fa48("3981"), 'Reset settings to their default values')).option(stryMutAct_9fa48("3982") ? "" : (stryCov_9fa48("3982"), '-a, --all'), stryMutAct_9fa48("3983") ? "" : (stryCov_9fa48("3983"), 'All of the above')).action(options => {
  if (stryMutAct_9fa48("3984")) {
    {}
  } else {
    stryCov_9fa48("3984");
    const valid = stryMutAct_9fa48("3985") ? ['theme', 'plugin', 'widgets', 'settings', 'all'].every(x => options[x]) : (stryCov_9fa48("3985"), (stryMutAct_9fa48("3986") ? [] : (stryCov_9fa48("3986"), [stryMutAct_9fa48("3987") ? "" : (stryCov_9fa48("3987"), 'theme'), stryMutAct_9fa48("3988") ? "" : (stryCov_9fa48("3988"), 'plugin'), stryMutAct_9fa48("3989") ? "" : (stryCov_9fa48("3989"), 'widgets'), stryMutAct_9fa48("3990") ? "" : (stryCov_9fa48("3990"), 'settings'), stryMutAct_9fa48("3991") ? "" : (stryCov_9fa48("3991"), 'all')])).some(stryMutAct_9fa48("3992") ? () => undefined : (stryCov_9fa48("3992"), x => options[x])));
    if (stryMutAct_9fa48("3995") ? false : stryMutAct_9fa48("3994") ? true : stryMutAct_9fa48("3993") ? valid : (stryCov_9fa48("3993", "3994", "3995"), !valid)) {
      if (stryMutAct_9fa48("3996")) {
        {}
      } else {
        stryCov_9fa48("3996");
        console.warn(stryMutAct_9fa48("3997") ? `` : (stryCov_9fa48("3997"), `\n${chalk.red(stryMutAct_9fa48("3998") ? "" : (stryCov_9fa48("3998"), 'No valid options passed in, so nothing was reset.'))}`));
        resetCommand.help();
      }
    }
    require('./reset').reset(options, err => {
      if (stryMutAct_9fa48("3999")) {
        {}
      } else {
        stryCov_9fa48("3999");
        if (stryMutAct_9fa48("4001") ? false : stryMutAct_9fa48("4000") ? true : (stryCov_9fa48("4000", "4001"), err)) {
          if (stryMutAct_9fa48("4002")) {
            {}
          } else {
            stryCov_9fa48("4002");
            return process.exit(1);
          }
        }
        process.exit(0);
      }
    });
  }
});

// user
program.addCommand(require('./user')());

// upgrades
program.command(stryMutAct_9fa48("4003") ? "" : (stryCov_9fa48("4003"), 'upgrade [scripts...]')).description(stryMutAct_9fa48("4004") ? "" : (stryCov_9fa48("4004"), 'Run NodeBB upgrade scripts and ensure packages are up-to-date, or run a particular upgrade script')).option(stryMutAct_9fa48("4005") ? "" : (stryCov_9fa48("4005"), '-m, --package'), stryMutAct_9fa48("4006") ? "" : (stryCov_9fa48("4006"), 'Update package.json from defaults'), stryMutAct_9fa48("4007") ? true : (stryCov_9fa48("4007"), false)).option(stryMutAct_9fa48("4008") ? "" : (stryCov_9fa48("4008"), '-i, --install'), stryMutAct_9fa48("4009") ? "" : (stryCov_9fa48("4009"), 'Bringing base dependencies up to date'), stryMutAct_9fa48("4010") ? true : (stryCov_9fa48("4010"), false)).option(stryMutAct_9fa48("4011") ? "" : (stryCov_9fa48("4011"), '-p, --plugins'), stryMutAct_9fa48("4012") ? "" : (stryCov_9fa48("4012"), 'Check installed plugins for updates'), stryMutAct_9fa48("4013") ? true : (stryCov_9fa48("4013"), false)).option(stryMutAct_9fa48("4014") ? "" : (stryCov_9fa48("4014"), '-s, --schema'), stryMutAct_9fa48("4015") ? "" : (stryCov_9fa48("4015"), 'Update NodeBB data store schema'), stryMutAct_9fa48("4016") ? true : (stryCov_9fa48("4016"), false)).option(stryMutAct_9fa48("4017") ? "" : (stryCov_9fa48("4017"), '-b, --build'), stryMutAct_9fa48("4018") ? "" : (stryCov_9fa48("4018"), 'Rebuild assets'), stryMutAct_9fa48("4019") ? true : (stryCov_9fa48("4019"), false)).on(stryMutAct_9fa48("4020") ? "" : (stryCov_9fa48("4020"), '--help'), () => {
  if (stryMutAct_9fa48("4021")) {
    {}
  } else {
    stryCov_9fa48("4021");
    console.log(stryMutAct_9fa48("4022") ? `` : (stryCov_9fa48("4022"), `\n${(stryMutAct_9fa48("4023") ? [] : (stryCov_9fa48("4023"), [stryMutAct_9fa48("4024") ? "" : (stryCov_9fa48("4024"), 'When running particular upgrade scripts, options are ignored.'), stryMutAct_9fa48("4025") ? "" : (stryCov_9fa48("4025"), 'By default all options are enabled. Passing any options disables that default.'), stryMutAct_9fa48("4026") ? "" : (stryCov_9fa48("4026"), '\nExamples:'), stryMutAct_9fa48("4027") ? `` : (stryCov_9fa48("4027"), `  Only package and dependency updates: ${chalk.yellow(stryMutAct_9fa48("4028") ? "" : (stryCov_9fa48("4028"), './nodebb upgrade -mi'))}`), stryMutAct_9fa48("4029") ? `` : (stryCov_9fa48("4029"), `  Only database update: ${chalk.yellow(stryMutAct_9fa48("4030") ? "" : (stryCov_9fa48("4030"), './nodebb upgrade -s'))}`)])).join(stryMutAct_9fa48("4031") ? "" : (stryCov_9fa48("4031"), '\n'))}`));
  }
}).action((scripts, options) => {
  if (stryMutAct_9fa48("4032")) {
    {}
  } else {
    stryCov_9fa48("4032");
    if (stryMutAct_9fa48("4034") ? false : stryMutAct_9fa48("4033") ? true : (stryCov_9fa48("4033", "4034"), program.opts().dev)) {
      if (stryMutAct_9fa48("4035")) {
        {}
      } else {
        stryCov_9fa48("4035");
        process.env.NODE_ENV = stryMutAct_9fa48("4036") ? "" : (stryCov_9fa48("4036"), 'development');
        global.env = stryMutAct_9fa48("4037") ? "" : (stryCov_9fa48("4037"), 'development');
      }
    }
    require('./upgrade').upgrade(scripts.length ? scripts : stryMutAct_9fa48("4038") ? false : (stryCov_9fa48("4038"), true), options);
  }
});
program.command(stryMutAct_9fa48("4039") ? "" : (stryCov_9fa48("4039"), 'upgrade-plugins'), null, stryMutAct_9fa48("4040") ? {} : (stryCov_9fa48("4040"), {
  noHelp: stryMutAct_9fa48("4041") ? false : (stryCov_9fa48("4041"), true)
})).alias(stryMutAct_9fa48("4042") ? "" : (stryCov_9fa48("4042"), 'upgradePlugins')).description(stryMutAct_9fa48("4043") ? "" : (stryCov_9fa48("4043"), 'Upgrade plugins')).action(() => {
  if (stryMutAct_9fa48("4044")) {
    {}
  } else {
    stryCov_9fa48("4044");
    require('./upgrade-plugins').upgradePlugins(err => {
      if (stryMutAct_9fa48("4045")) {
        {}
      } else {
        stryCov_9fa48("4045");
        if (stryMutAct_9fa48("4047") ? false : stryMutAct_9fa48("4046") ? true : (stryCov_9fa48("4046", "4047"), err)) {
          if (stryMutAct_9fa48("4048")) {
            {}
          } else {
            stryCov_9fa48("4048");
            throw err;
          }
        }
        console.log(chalk.green(stryMutAct_9fa48("4049") ? "" : (stryCov_9fa48("4049"), 'OK')));
        process.exit();
      }
    });
  }
});
program.command(stryMutAct_9fa48("4050") ? "" : (stryCov_9fa48("4050"), 'help [command]')).description(stryMutAct_9fa48("4051") ? "" : (stryCov_9fa48("4051"), 'Display help for [command]')).action(name => {
  if (stryMutAct_9fa48("4052")) {
    {}
  } else {
    stryCov_9fa48("4052");
    if (stryMutAct_9fa48("4055") ? false : stryMutAct_9fa48("4054") ? true : stryMutAct_9fa48("4053") ? name : (stryCov_9fa48("4053", "4054", "4055"), !name)) {
      if (stryMutAct_9fa48("4056")) {
        {}
      } else {
        stryCov_9fa48("4056");
        return program.help();
      }
    }
    const command = program.commands.find(stryMutAct_9fa48("4057") ? () => undefined : (stryCov_9fa48("4057"), command => stryMutAct_9fa48("4060") ? command._name !== name : stryMutAct_9fa48("4059") ? false : stryMutAct_9fa48("4058") ? true : (stryCov_9fa48("4058", "4059", "4060"), command._name === name)));
    if (stryMutAct_9fa48("4062") ? false : stryMutAct_9fa48("4061") ? true : (stryCov_9fa48("4061", "4062"), command)) {
      if (stryMutAct_9fa48("4063")) {
        {}
      } else {
        stryCov_9fa48("4063");
        command.help();
      }
    } else {
      if (stryMutAct_9fa48("4064")) {
        {}
      } else {
        stryCov_9fa48("4064");
        console.log(stryMutAct_9fa48("4065") ? `` : (stryCov_9fa48("4065"), `error: unknown command '${command}'.`));
        program.help();
      }
    }
  }
});
if (stryMutAct_9fa48("4068") ? process.argv.length !== 2 : stryMutAct_9fa48("4067") ? false : stryMutAct_9fa48("4066") ? true : (stryCov_9fa48("4066", "4067", "4068"), process.argv.length === 2)) {
  if (stryMutAct_9fa48("4069")) {
    {}
  } else {
    stryCov_9fa48("4069");
    program.help();
  }
}
program.executables = stryMutAct_9fa48("4070") ? true : (stryCov_9fa48("4070"), false);
program.parse();