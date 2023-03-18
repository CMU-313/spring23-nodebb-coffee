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
const childProcess = require('child_process');
const chalk = require('chalk');
const fork = require('../meta/debugFork');
const {
  paths
} = require('../constants');
const cwd = paths.baseDir;
function getRunningPid(callback) {
  if (stryMutAct_9fa48("4446")) {
    {}
  } else {
    stryCov_9fa48("4446");
    fs.readFile(paths.pidfile, stryMutAct_9fa48("4447") ? {} : (stryCov_9fa48("4447"), {
      encoding: stryMutAct_9fa48("4448") ? "" : (stryCov_9fa48("4448"), 'utf-8')
    }), (err, pid) => {
      if (stryMutAct_9fa48("4449")) {
        {}
      } else {
        stryCov_9fa48("4449");
        if (stryMutAct_9fa48("4451") ? false : stryMutAct_9fa48("4450") ? true : (stryCov_9fa48("4450", "4451"), err)) {
          if (stryMutAct_9fa48("4452")) {
            {}
          } else {
            stryCov_9fa48("4452");
            return callback(err);
          }
        }
        pid = parseInt(pid, 10);
        try {
          if (stryMutAct_9fa48("4453")) {
            {}
          } else {
            stryCov_9fa48("4453");
            process.kill(pid, 0);
            callback(null, pid);
          }
        } catch (e) {
          if (stryMutAct_9fa48("4454")) {
            {}
          } else {
            stryCov_9fa48("4454");
            callback(e);
          }
        }
      }
    });
  }
}
function start(options) {
  if (stryMutAct_9fa48("4455")) {
    {}
  } else {
    stryCov_9fa48("4455");
    if (stryMutAct_9fa48("4457") ? false : stryMutAct_9fa48("4456") ? true : (stryCov_9fa48("4456", "4457"), options.dev)) {
      if (stryMutAct_9fa48("4458")) {
        {}
      } else {
        stryCov_9fa48("4458");
        process.env.NODE_ENV = stryMutAct_9fa48("4459") ? "" : (stryCov_9fa48("4459"), 'development');
        fork(paths.loader, stryMutAct_9fa48("4460") ? [] : (stryCov_9fa48("4460"), [stryMutAct_9fa48("4461") ? "" : (stryCov_9fa48("4461"), '--no-daemon'), stryMutAct_9fa48("4462") ? "" : (stryCov_9fa48("4462"), '--no-silent')]), stryMutAct_9fa48("4463") ? {} : (stryCov_9fa48("4463"), {
          env: process.env,
          stdio: stryMutAct_9fa48("4464") ? "" : (stryCov_9fa48("4464"), 'inherit'),
          cwd
        }));
        return;
      }
    }
    if (stryMutAct_9fa48("4466") ? false : stryMutAct_9fa48("4465") ? true : (stryCov_9fa48("4465", "4466"), options.log)) {
      if (stryMutAct_9fa48("4467")) {
        {}
      } else {
        stryCov_9fa48("4467");
        console.log(stryMutAct_9fa48("4468") ? `` : (stryCov_9fa48("4468"), `\n${(stryMutAct_9fa48("4469") ? [] : (stryCov_9fa48("4469"), [chalk.bold(stryMutAct_9fa48("4470") ? "" : (stryCov_9fa48("4470"), 'Starting NodeBB with logging output')), stryMutAct_9fa48("4471") ? chalk.red('Hit ') + chalk.bold('Ctrl-C ') - chalk.red('to exit') : (stryCov_9fa48("4471"), (stryMutAct_9fa48("4472") ? chalk.red('Hit ') - chalk.bold('Ctrl-C ') : (stryCov_9fa48("4472"), chalk.red(stryMutAct_9fa48("4473") ? "" : (stryCov_9fa48("4473"), 'Hit ')) + chalk.bold(stryMutAct_9fa48("4474") ? "" : (stryCov_9fa48("4474"), 'Ctrl-C ')))) + chalk.red(stryMutAct_9fa48("4475") ? "" : (stryCov_9fa48("4475"), 'to exit'))), stryMutAct_9fa48("4476") ? "" : (stryCov_9fa48("4476"), 'The NodeBB process will continue to run in the background'), stryMutAct_9fa48("4477") ? `` : (stryCov_9fa48("4477"), `Use "${chalk.yellow(stryMutAct_9fa48("4478") ? "" : (stryCov_9fa48("4478"), './nodebb stop'))}" to stop the NodeBB server`)])).join(stryMutAct_9fa48("4479") ? "" : (stryCov_9fa48("4479"), '\n'))}`));
      }
    } else if (stryMutAct_9fa48("4482") ? false : stryMutAct_9fa48("4481") ? true : stryMutAct_9fa48("4480") ? options.silent : (stryCov_9fa48("4480", "4481", "4482"), !options.silent)) {
      if (stryMutAct_9fa48("4483")) {
        {}
      } else {
        stryCov_9fa48("4483");
        console.log(stryMutAct_9fa48("4484") ? `` : (stryCov_9fa48("4484"), `\n${(stryMutAct_9fa48("4485") ? [] : (stryCov_9fa48("4485"), [chalk.bold(stryMutAct_9fa48("4486") ? "" : (stryCov_9fa48("4486"), 'Starting NodeBB')), stryMutAct_9fa48("4487") ? `` : (stryCov_9fa48("4487"), `  "${chalk.yellow(stryMutAct_9fa48("4488") ? "" : (stryCov_9fa48("4488"), './nodebb stop'))}" to stop the NodeBB server`), stryMutAct_9fa48("4489") ? `` : (stryCov_9fa48("4489"), `  "${chalk.yellow(stryMutAct_9fa48("4490") ? "" : (stryCov_9fa48("4490"), './nodebb log'))}" to view server output`), stryMutAct_9fa48("4491") ? `` : (stryCov_9fa48("4491"), `  "${chalk.yellow(stryMutAct_9fa48("4492") ? "" : (stryCov_9fa48("4492"), './nodebb help'))}" for more commands\n`)])).join(stryMutAct_9fa48("4493") ? "" : (stryCov_9fa48("4493"), '\n'))}`));
      }
    }

    // Spawn a new NodeBB process
    const child = fork(paths.loader, stryMutAct_9fa48("4494") ? process.argv : (stryCov_9fa48("4494"), process.argv.slice(3)), stryMutAct_9fa48("4495") ? {} : (stryCov_9fa48("4495"), {
      env: process.env,
      cwd
    }));
    if (stryMutAct_9fa48("4497") ? false : stryMutAct_9fa48("4496") ? true : (stryCov_9fa48("4496", "4497"), options.log)) {
      if (stryMutAct_9fa48("4498")) {
        {}
      } else {
        stryCov_9fa48("4498");
        childProcess.spawn(stryMutAct_9fa48("4499") ? "" : (stryCov_9fa48("4499"), 'tail'), stryMutAct_9fa48("4500") ? [] : (stryCov_9fa48("4500"), [stryMutAct_9fa48("4501") ? "" : (stryCov_9fa48("4501"), '-F'), stryMutAct_9fa48("4502") ? "" : (stryCov_9fa48("4502"), './logs/output.log')]), stryMutAct_9fa48("4503") ? {} : (stryCov_9fa48("4503"), {
          stdio: stryMutAct_9fa48("4504") ? "" : (stryCov_9fa48("4504"), 'inherit'),
          cwd
        }));
      }
    }
    return child;
  }
}
function stop() {
  if (stryMutAct_9fa48("4505")) {
    {}
  } else {
    stryCov_9fa48("4505");
    getRunningPid((err, pid) => {
      if (stryMutAct_9fa48("4506")) {
        {}
      } else {
        stryCov_9fa48("4506");
        if (stryMutAct_9fa48("4509") ? false : stryMutAct_9fa48("4508") ? true : stryMutAct_9fa48("4507") ? err : (stryCov_9fa48("4507", "4508", "4509"), !err)) {
          if (stryMutAct_9fa48("4510")) {
            {}
          } else {
            stryCov_9fa48("4510");
            process.kill(pid, stryMutAct_9fa48("4511") ? "" : (stryCov_9fa48("4511"), 'SIGTERM'));
            console.log(stryMutAct_9fa48("4512") ? "" : (stryCov_9fa48("4512"), 'Stopping NodeBB. Goodbye!'));
          }
        } else {
          if (stryMutAct_9fa48("4513")) {
            {}
          } else {
            stryCov_9fa48("4513");
            console.log(stryMutAct_9fa48("4514") ? "" : (stryCov_9fa48("4514"), 'NodeBB is already stopped.'));
          }
        }
      }
    });
  }
}
function restart(options) {
  if (stryMutAct_9fa48("4515")) {
    {}
  } else {
    stryCov_9fa48("4515");
    getRunningPid((err, pid) => {
      if (stryMutAct_9fa48("4516")) {
        {}
      } else {
        stryCov_9fa48("4516");
        if (stryMutAct_9fa48("4519") ? false : stryMutAct_9fa48("4518") ? true : stryMutAct_9fa48("4517") ? err : (stryCov_9fa48("4517", "4518", "4519"), !err)) {
          if (stryMutAct_9fa48("4520")) {
            {}
          } else {
            stryCov_9fa48("4520");
            console.log(chalk.bold(stryMutAct_9fa48("4521") ? "" : (stryCov_9fa48("4521"), '\nRestarting NodeBB')));
            process.kill(pid, stryMutAct_9fa48("4522") ? "" : (stryCov_9fa48("4522"), 'SIGTERM'));
            options.silent = stryMutAct_9fa48("4523") ? false : (stryCov_9fa48("4523"), true);
            start(options);
          }
        } else {
          if (stryMutAct_9fa48("4524")) {
            {}
          } else {
            stryCov_9fa48("4524");
            console.warn(stryMutAct_9fa48("4525") ? "" : (stryCov_9fa48("4525"), 'NodeBB could not be restarted, as a running instance could not be found.'));
          }
        }
      }
    });
  }
}
function status() {
  if (stryMutAct_9fa48("4526")) {
    {}
  } else {
    stryCov_9fa48("4526");
    getRunningPid((err, pid) => {
      if (stryMutAct_9fa48("4527")) {
        {}
      } else {
        stryCov_9fa48("4527");
        if (stryMutAct_9fa48("4530") ? false : stryMutAct_9fa48("4529") ? true : stryMutAct_9fa48("4528") ? err : (stryCov_9fa48("4528", "4529", "4530"), !err)) {
          if (stryMutAct_9fa48("4531")) {
            {}
          } else {
            stryCov_9fa48("4531");
            console.log(stryMutAct_9fa48("4532") ? `` : (stryCov_9fa48("4532"), `\n${(stryMutAct_9fa48("4533") ? [] : (stryCov_9fa48("4533"), [stryMutAct_9fa48("4534") ? chalk.bold('NodeBB Running ') - chalk.cyan(`(pid ${pid.toString()})`) : (stryCov_9fa48("4534"), chalk.bold(stryMutAct_9fa48("4535") ? "" : (stryCov_9fa48("4535"), 'NodeBB Running ')) + chalk.cyan(stryMutAct_9fa48("4536") ? `` : (stryCov_9fa48("4536"), `(pid ${pid.toString()})`))), stryMutAct_9fa48("4537") ? `` : (stryCov_9fa48("4537"), `\t"${chalk.yellow(stryMutAct_9fa48("4538") ? "" : (stryCov_9fa48("4538"), './nodebb stop'))}" to stop the NodeBB server`), stryMutAct_9fa48("4539") ? `` : (stryCov_9fa48("4539"), `\t"${chalk.yellow(stryMutAct_9fa48("4540") ? "" : (stryCov_9fa48("4540"), './nodebb log'))}" to view server output`), stryMutAct_9fa48("4541") ? `` : (stryCov_9fa48("4541"), `\t"${chalk.yellow(stryMutAct_9fa48("4542") ? "" : (stryCov_9fa48("4542"), './nodebb restart'))}" to restart NodeBB\n`)])).join(stryMutAct_9fa48("4543") ? "" : (stryCov_9fa48("4543"), '\n'))}`));
          }
        } else {
          if (stryMutAct_9fa48("4544")) {
            {}
          } else {
            stryCov_9fa48("4544");
            console.log(chalk.bold(stryMutAct_9fa48("4545") ? "" : (stryCov_9fa48("4545"), '\nNodeBB is not running')));
            console.log(stryMutAct_9fa48("4546") ? `` : (stryCov_9fa48("4546"), `\t"${chalk.yellow(stryMutAct_9fa48("4547") ? "" : (stryCov_9fa48("4547"), './nodebb start'))}" to launch the NodeBB server\n`));
          }
        }
      }
    });
  }
}
function log() {
  if (stryMutAct_9fa48("4548")) {
    {}
  } else {
    stryCov_9fa48("4548");
    console.log(stryMutAct_9fa48("4549") ? `` : (stryCov_9fa48("4549"), `${stryMutAct_9fa48("4550") ? chalk.red('\nHit ') + chalk.bold('Ctrl-C ') - chalk.red('to exit\n') : (stryCov_9fa48("4550"), (stryMutAct_9fa48("4551") ? chalk.red('\nHit ') - chalk.bold('Ctrl-C ') : (stryCov_9fa48("4551"), chalk.red(stryMutAct_9fa48("4552") ? "" : (stryCov_9fa48("4552"), '\nHit ')) + chalk.bold(stryMutAct_9fa48("4553") ? "" : (stryCov_9fa48("4553"), 'Ctrl-C ')))) + chalk.red(stryMutAct_9fa48("4554") ? "" : (stryCov_9fa48("4554"), 'to exit\n')))}\n`));
    childProcess.spawn(stryMutAct_9fa48("4555") ? "" : (stryCov_9fa48("4555"), 'tail'), stryMutAct_9fa48("4556") ? [] : (stryCov_9fa48("4556"), [stryMutAct_9fa48("4557") ? "" : (stryCov_9fa48("4557"), '-F'), stryMutAct_9fa48("4558") ? "" : (stryCov_9fa48("4558"), './logs/output.log')]), stryMutAct_9fa48("4559") ? {} : (stryCov_9fa48("4559"), {
      stdio: stryMutAct_9fa48("4560") ? "" : (stryCov_9fa48("4560"), 'inherit'),
      cwd
    }));
  }
}
exports.start = start;
exports.stop = stop;
exports.restart = restart;
exports.status = status;
exports.log = log;