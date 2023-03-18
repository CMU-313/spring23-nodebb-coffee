// @ts-nocheck
'use strict';

// override commander help formatting functions
// to include color styling in the output
// so the CLI looks nice
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
const {
  Command
} = require('commander');
const chalk = require('chalk');
const colors = stryMutAct_9fa48("3667") ? [] : (stryCov_9fa48("3667"), [// depth = 0, top-level command
stryMutAct_9fa48("3668") ? {} : (stryCov_9fa48("3668"), {
  command: stryMutAct_9fa48("3669") ? "" : (stryCov_9fa48("3669"), 'yellow'),
  option: stryMutAct_9fa48("3670") ? "" : (stryCov_9fa48("3670"), 'cyan'),
  arg: stryMutAct_9fa48("3671") ? "" : (stryCov_9fa48("3671"), 'magenta')
}), // depth = 1, second-level commands
stryMutAct_9fa48("3672") ? {} : (stryCov_9fa48("3672"), {
  command: stryMutAct_9fa48("3673") ? "" : (stryCov_9fa48("3673"), 'green'),
  option: stryMutAct_9fa48("3674") ? "" : (stryCov_9fa48("3674"), 'blue'),
  arg: stryMutAct_9fa48("3675") ? "" : (stryCov_9fa48("3675"), 'red')
}), // depth = 2, third-level commands
stryMutAct_9fa48("3676") ? {} : (stryCov_9fa48("3676"), {
  command: stryMutAct_9fa48("3677") ? "" : (stryCov_9fa48("3677"), 'yellow'),
  option: stryMutAct_9fa48("3678") ? "" : (stryCov_9fa48("3678"), 'cyan'),
  arg: stryMutAct_9fa48("3679") ? "" : (stryCov_9fa48("3679"), 'magenta')
}), // depth = 3 fourth-level commands
stryMutAct_9fa48("3680") ? {} : (stryCov_9fa48("3680"), {
  command: stryMutAct_9fa48("3681") ? "" : (stryCov_9fa48("3681"), 'green'),
  option: stryMutAct_9fa48("3682") ? "" : (stryCov_9fa48("3682"), 'blue'),
  arg: stryMutAct_9fa48("3683") ? "" : (stryCov_9fa48("3683"), 'red')
})]);
function humanReadableArgName(arg) {
  if (stryMutAct_9fa48("3684")) {
    {}
  } else {
    stryCov_9fa48("3684");
    const nameOutput = stryMutAct_9fa48("3685") ? arg.name() - (arg.variadic === true ? '...' : '') : (stryCov_9fa48("3685"), arg.name() + ((stryMutAct_9fa48("3688") ? arg.variadic !== true : stryMutAct_9fa48("3687") ? false : stryMutAct_9fa48("3686") ? true : (stryCov_9fa48("3686", "3687", "3688"), arg.variadic === (stryMutAct_9fa48("3689") ? false : (stryCov_9fa48("3689"), true)))) ? stryMutAct_9fa48("3690") ? "" : (stryCov_9fa48("3690"), '...') : stryMutAct_9fa48("3691") ? "Stryker was here!" : (stryCov_9fa48("3691"), '')));
    return arg.required ? stryMutAct_9fa48("3692") ? `` : (stryCov_9fa48("3692"), `<${nameOutput}>`) : stryMutAct_9fa48("3693") ? `` : (stryCov_9fa48("3693"), `[${nameOutput}]`);
  }
}
function getControlCharacterSpaces(term) {
  if (stryMutAct_9fa48("3694")) {
    {}
  } else {
    stryCov_9fa48("3694");
    const matches = term.match(stryMutAct_9fa48("3696") ? /.\[\D+m/g : stryMutAct_9fa48("3695") ? /.\[\dm/g : (stryCov_9fa48("3695", "3696"), /.\[\d+m/g));
    return matches ? stryMutAct_9fa48("3697") ? matches.length / 5 : (stryCov_9fa48("3697"), matches.length * 5) : 0;
  }
}

// get depth of command
// 0 = top, 1 = subcommand of top, etc
Command.prototype.depth = function () {
  if (stryMutAct_9fa48("3698")) {
    {}
  } else {
    stryCov_9fa48("3698");
    if (stryMutAct_9fa48("3701") ? this._depth !== undefined : stryMutAct_9fa48("3700") ? false : stryMutAct_9fa48("3699") ? true : (stryCov_9fa48("3699", "3700", "3701"), this._depth === undefined)) {
      if (stryMutAct_9fa48("3702")) {
        {}
      } else {
        stryCov_9fa48("3702");
        let depth = 0;
        let {
          parent
        } = this;
        while (stryMutAct_9fa48("3703") ? false : (stryCov_9fa48("3703"), parent)) {
          if (stryMutAct_9fa48("3704")) {
            {}
          } else {
            stryCov_9fa48("3704");
            stryMutAct_9fa48("3705") ? depth -= 1 : (stryCov_9fa48("3705"), depth += 1);
            parent = parent.parent;
          }
        }
        this._depth = depth;
      }
    }
    return this._depth;
  }
};
module.exports = stryMutAct_9fa48("3706") ? {} : (stryCov_9fa48("3706"), {
  commandUsage(cmd) {
    if (stryMutAct_9fa48("3707")) {
      {}
    } else {
      stryCov_9fa48("3707");
      const depth = cmd.depth();

      // Usage
      let cmdName = cmd._name;
      if (stryMutAct_9fa48("3709") ? false : stryMutAct_9fa48("3708") ? true : (stryCov_9fa48("3708", "3709"), cmd._aliases[0])) {
        if (stryMutAct_9fa48("3710")) {
          {}
        } else {
          stryCov_9fa48("3710");
          cmdName = stryMutAct_9fa48("3711") ? `` : (stryCov_9fa48("3711"), `${cmdName}|${cmd._aliases[0]}`);
        }
      }
      let parentCmdNames = stryMutAct_9fa48("3712") ? "Stryker was here!" : (stryCov_9fa48("3712"), '');
      let parentCmd = cmd.parent;
      let parentDepth = stryMutAct_9fa48("3713") ? depth + 1 : (stryCov_9fa48("3713"), depth - 1);
      while (stryMutAct_9fa48("3714") ? false : (stryCov_9fa48("3714"), parentCmd)) {
        if (stryMutAct_9fa48("3715")) {
          {}
        } else {
          stryCov_9fa48("3715");
          parentCmdNames = stryMutAct_9fa48("3716") ? `` : (stryCov_9fa48("3716"), `${chalk[colors[parentDepth].command](parentCmd.name())} ${parentCmdNames}`);
          parentCmd = parentCmd.parent;
          stryMutAct_9fa48("3717") ? parentDepth += 1 : (stryCov_9fa48("3717"), parentDepth -= 1);
        }
      }

      // from Command.prototype.usage()
      const args = cmd._args.map(stryMutAct_9fa48("3718") ? () => undefined : (stryCov_9fa48("3718"), arg => chalk[colors[depth].arg](humanReadableArgName(arg))));
      const cmdUsage = (stryMutAct_9fa48("3719") ? ["Stryker was here"] : (stryCov_9fa48("3719"), [])).concat((stryMutAct_9fa48("3722") ? cmd.options.length && cmd._hasHelpOption : stryMutAct_9fa48("3721") ? false : stryMutAct_9fa48("3720") ? true : (stryCov_9fa48("3720", "3721", "3722"), cmd.options.length || cmd._hasHelpOption)) ? chalk[colors[depth].option](stryMutAct_9fa48("3723") ? "" : (stryCov_9fa48("3723"), '[options]')) : stryMutAct_9fa48("3724") ? ["Stryker was here"] : (stryCov_9fa48("3724"), []), cmd.commands.length ? chalk[colors[stryMutAct_9fa48("3725") ? depth - 1 : (stryCov_9fa48("3725"), depth + 1)].command](stryMutAct_9fa48("3726") ? "" : (stryCov_9fa48("3726"), '[command]')) : stryMutAct_9fa48("3727") ? ["Stryker was here"] : (stryCov_9fa48("3727"), []), cmd._args.length ? args : stryMutAct_9fa48("3728") ? ["Stryker was here"] : (stryCov_9fa48("3728"), [])).join(stryMutAct_9fa48("3729") ? "" : (stryCov_9fa48("3729"), ' '));
      return stryMutAct_9fa48("3730") ? `` : (stryCov_9fa48("3730"), `${parentCmdNames}${chalk[colors[depth].command](cmdName)} ${cmdUsage}`);
    }
  },
  subcommandTerm(cmd) {
    if (stryMutAct_9fa48("3731")) {
      {}
    } else {
      stryCov_9fa48("3731");
      const depth = cmd.depth();

      // Legacy. Ignores custom usage string, and nested commands.
      const args = cmd._args.map(stryMutAct_9fa48("3732") ? () => undefined : (stryCov_9fa48("3732"), arg => humanReadableArgName(arg))).join(stryMutAct_9fa48("3733") ? "" : (stryCov_9fa48("3733"), ' '));
      return stryMutAct_9fa48("3734") ? chalk[colors[depth].command](cmd._name + (cmd._aliases[0] ? `|${cmd._aliases[0]}` : '')) + chalk[colors[depth].option](cmd.options.length ? ' [options]' : '') -
      // simplistic check for non-help option
      chalk[colors[depth].arg](args ? ` ${args}` : '') : (stryCov_9fa48("3734"), (stryMutAct_9fa48("3735") ? chalk[colors[depth].command](cmd._name + (cmd._aliases[0] ? `|${cmd._aliases[0]}` : '')) - chalk[colors[depth].option](cmd.options.length ? ' [options]' : '') : (stryCov_9fa48("3735"), chalk[colors[depth].command](stryMutAct_9fa48("3736") ? cmd._name - (cmd._aliases[0] ? `|${cmd._aliases[0]}` : '') : (stryCov_9fa48("3736"), cmd._name + (cmd._aliases[0] ? stryMutAct_9fa48("3737") ? `` : (stryCov_9fa48("3737"), `|${cmd._aliases[0]}`) : stryMutAct_9fa48("3738") ? "Stryker was here!" : (stryCov_9fa48("3738"), '')))) + chalk[colors[depth].option](cmd.options.length ? stryMutAct_9fa48("3739") ? "" : (stryCov_9fa48("3739"), ' [options]') : stryMutAct_9fa48("3740") ? "Stryker was here!" : (stryCov_9fa48("3740"), '')))) +
      // simplistic check for non-help option
      chalk[colors[depth].arg](args ? stryMutAct_9fa48("3741") ? `` : (stryCov_9fa48("3741"), ` ${args}`) : stryMutAct_9fa48("3742") ? "Stryker was here!" : (stryCov_9fa48("3742"), '')));
    }
  },
  longestOptionTermLength(cmd, helper) {
    if (stryMutAct_9fa48("3743")) {
      {}
    } else {
      stryCov_9fa48("3743");
      return helper.visibleOptions(cmd).reduce(stryMutAct_9fa48("3744") ? () => undefined : (stryCov_9fa48("3744"), (max, option) => Math.max(max, stryMutAct_9fa48("3745") ? helper.optionTerm(option).length + getControlCharacterSpaces(helper.optionTerm(option)) : (stryCov_9fa48("3745"), helper.optionTerm(option).length - getControlCharacterSpaces(helper.optionTerm(option))))), 0);
    }
  },
  longestSubcommandTermLength(cmd, helper) {
    if (stryMutAct_9fa48("3746")) {
      {}
    } else {
      stryCov_9fa48("3746");
      return helper.visibleCommands(cmd).reduce(stryMutAct_9fa48("3747") ? () => undefined : (stryCov_9fa48("3747"), (max, command) => Math.max(max, stryMutAct_9fa48("3748") ? helper.subcommandTerm(command).length + getControlCharacterSpaces(helper.subcommandTerm(command)) : (stryCov_9fa48("3748"), helper.subcommandTerm(command).length - getControlCharacterSpaces(helper.subcommandTerm(command))))), 0);
    }
  },
  longestArgumentTermLength(cmd, helper) {
    if (stryMutAct_9fa48("3749")) {
      {}
    } else {
      stryCov_9fa48("3749");
      return helper.visibleArguments(cmd).reduce(stryMutAct_9fa48("3750") ? () => undefined : (stryCov_9fa48("3750"), (max, argument) => Math.max(max, stryMutAct_9fa48("3751") ? helper.argumentTerm(argument).length + getControlCharacterSpaces(helper.argumentTerm(argument)) : (stryCov_9fa48("3751"), helper.argumentTerm(argument).length - getControlCharacterSpaces(helper.argumentTerm(argument))))), 0);
    }
  },
  formatHelp(cmd, helper) {
    if (stryMutAct_9fa48("3752")) {
      {}
    } else {
      stryCov_9fa48("3752");
      const depth = cmd.depth();
      const termWidth = helper.padWidth(cmd, helper);
      const helpWidth = stryMutAct_9fa48("3755") ? helper.helpWidth && 80 : stryMutAct_9fa48("3754") ? false : stryMutAct_9fa48("3753") ? true : (stryCov_9fa48("3753", "3754", "3755"), helper.helpWidth || 80);
      const itemIndentWidth = 2;
      const itemSeparatorWidth = 2; // between term and description
      function formatItem(term, description) {
        if (stryMutAct_9fa48("3756")) {
          {}
        } else {
          stryCov_9fa48("3756");
          const padding = (stryMutAct_9fa48("3757") ? "" : (stryCov_9fa48("3757"), ' ')).repeat(stryMutAct_9fa48("3758") ? termWidth + itemSeparatorWidth + (term.length - getControlCharacterSpaces(term)) : (stryCov_9fa48("3758"), (stryMutAct_9fa48("3759") ? termWidth - itemSeparatorWidth : (stryCov_9fa48("3759"), termWidth + itemSeparatorWidth)) - (stryMutAct_9fa48("3760") ? term.length + getControlCharacterSpaces(term) : (stryCov_9fa48("3760"), term.length - getControlCharacterSpaces(term)))));
          if (stryMutAct_9fa48("3762") ? false : stryMutAct_9fa48("3761") ? true : (stryCov_9fa48("3761", "3762"), description)) {
            if (stryMutAct_9fa48("3763")) {
              {}
            } else {
              stryCov_9fa48("3763");
              const fullText = stryMutAct_9fa48("3764") ? `` : (stryCov_9fa48("3764"), `${term}${padding}${description}`);
              return helper.wrap(fullText, stryMutAct_9fa48("3765") ? helpWidth + itemIndentWidth : (stryCov_9fa48("3765"), helpWidth - itemIndentWidth), stryMutAct_9fa48("3766") ? termWidth - itemSeparatorWidth : (stryCov_9fa48("3766"), termWidth + itemSeparatorWidth));
            }
          }
          return term;
        }
      }
      function formatList(textArray) {
        if (stryMutAct_9fa48("3767")) {
          {}
        } else {
          stryCov_9fa48("3767");
          return textArray.join(stryMutAct_9fa48("3768") ? "" : (stryCov_9fa48("3768"), '\n')).replace(/^/gm, (stryMutAct_9fa48("3769") ? "" : (stryCov_9fa48("3769"), ' ')).repeat(itemIndentWidth));
        }
      }

      // Usage
      let output = stryMutAct_9fa48("3770") ? [] : (stryCov_9fa48("3770"), [stryMutAct_9fa48("3771") ? `` : (stryCov_9fa48("3771"), `Usage: ${helper.commandUsage(cmd)}`), stryMutAct_9fa48("3772") ? "Stryker was here!" : (stryCov_9fa48("3772"), '')]);

      // Description
      const commandDescription = helper.commandDescription(cmd);
      if (stryMutAct_9fa48("3776") ? commandDescription.length <= 0 : stryMutAct_9fa48("3775") ? commandDescription.length >= 0 : stryMutAct_9fa48("3774") ? false : stryMutAct_9fa48("3773") ? true : (stryCov_9fa48("3773", "3774", "3775", "3776"), commandDescription.length > 0)) {
        if (stryMutAct_9fa48("3777")) {
          {}
        } else {
          stryCov_9fa48("3777");
          output = output.concat(stryMutAct_9fa48("3778") ? [] : (stryCov_9fa48("3778"), [commandDescription, stryMutAct_9fa48("3779") ? "Stryker was here!" : (stryCov_9fa48("3779"), '')]));
        }
      }

      // Arguments
      const argumentList = helper.visibleArguments(cmd).map(stryMutAct_9fa48("3780") ? () => undefined : (stryCov_9fa48("3780"), argument => formatItem(chalk[colors[depth].arg](argument.term), argument.description)));
      if (stryMutAct_9fa48("3784") ? argumentList.length <= 0 : stryMutAct_9fa48("3783") ? argumentList.length >= 0 : stryMutAct_9fa48("3782") ? false : stryMutAct_9fa48("3781") ? true : (stryCov_9fa48("3781", "3782", "3783", "3784"), argumentList.length > 0)) {
        if (stryMutAct_9fa48("3785")) {
          {}
        } else {
          stryCov_9fa48("3785");
          output = output.concat(stryMutAct_9fa48("3786") ? [] : (stryCov_9fa48("3786"), [stryMutAct_9fa48("3787") ? "" : (stryCov_9fa48("3787"), 'Arguments:'), formatList(argumentList), stryMutAct_9fa48("3788") ? "Stryker was here!" : (stryCov_9fa48("3788"), '')]));
        }
      }

      // Options
      const optionList = helper.visibleOptions(cmd).map(stryMutAct_9fa48("3789") ? () => undefined : (stryCov_9fa48("3789"), option => formatItem(chalk[colors[depth].option](helper.optionTerm(option)), helper.optionDescription(option))));
      if (stryMutAct_9fa48("3793") ? optionList.length <= 0 : stryMutAct_9fa48("3792") ? optionList.length >= 0 : stryMutAct_9fa48("3791") ? false : stryMutAct_9fa48("3790") ? true : (stryCov_9fa48("3790", "3791", "3792", "3793"), optionList.length > 0)) {
        if (stryMutAct_9fa48("3794")) {
          {}
        } else {
          stryCov_9fa48("3794");
          output = output.concat(stryMutAct_9fa48("3795") ? [] : (stryCov_9fa48("3795"), [stryMutAct_9fa48("3796") ? "" : (stryCov_9fa48("3796"), 'Options:'), formatList(optionList), stryMutAct_9fa48("3797") ? "Stryker was here!" : (stryCov_9fa48("3797"), '')]));
        }
      }

      // Commands
      const commandList = helper.visibleCommands(cmd).map(stryMutAct_9fa48("3798") ? () => undefined : (stryCov_9fa48("3798"), cmd => formatItem(helper.subcommandTerm(cmd), helper.subcommandDescription(cmd))));
      if (stryMutAct_9fa48("3802") ? commandList.length <= 0 : stryMutAct_9fa48("3801") ? commandList.length >= 0 : stryMutAct_9fa48("3800") ? false : stryMutAct_9fa48("3799") ? true : (stryCov_9fa48("3799", "3800", "3801", "3802"), commandList.length > 0)) {
        if (stryMutAct_9fa48("3803")) {
          {}
        } else {
          stryCov_9fa48("3803");
          output = output.concat(stryMutAct_9fa48("3804") ? [] : (stryCov_9fa48("3804"), [stryMutAct_9fa48("3805") ? "" : (stryCov_9fa48("3805"), 'Commands:'), formatList(commandList), stryMutAct_9fa48("3806") ? "Stryker was here!" : (stryCov_9fa48("3806"), '')]));
        }
      }
      return output.join(stryMutAct_9fa48("3807") ? "" : (stryCov_9fa48("3807"), '\n'));
    }
  }
});