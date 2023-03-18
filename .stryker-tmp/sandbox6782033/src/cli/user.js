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
const {
  Command,
  Option
} = require('commander');
module.exports = () => {
  if (stryMutAct_9fa48("4789")) {
    {}
  } else {
    stryCov_9fa48("4789");
    const userCmd = new Command(stryMutAct_9fa48("4790") ? "" : (stryCov_9fa48("4790"), 'user')).description(stryMutAct_9fa48("4791") ? "" : (stryCov_9fa48("4791"), 'Manage users')).arguments(stryMutAct_9fa48("4792") ? "" : (stryCov_9fa48("4792"), '[command]'));
    userCmd.configureHelp(require('./colors'));
    const userCommands = UserCommands();
    userCmd.command(stryMutAct_9fa48("4793") ? "" : (stryCov_9fa48("4793"), 'info')).description(stryMutAct_9fa48("4794") ? "" : (stryCov_9fa48("4794"), 'Display user info by uid/username/userslug.')).option(stryMutAct_9fa48("4795") ? "" : (stryCov_9fa48("4795"), '-i, --uid <uid>'), stryMutAct_9fa48("4796") ? "" : (stryCov_9fa48("4796"), 'Retrieve user by uid')).option(stryMutAct_9fa48("4797") ? "" : (stryCov_9fa48("4797"), '-u, --username <username>'), stryMutAct_9fa48("4798") ? "" : (stryCov_9fa48("4798"), 'Retrieve user by username')).option(stryMutAct_9fa48("4799") ? "" : (stryCov_9fa48("4799"), '-s, --userslug <userslug>'), stryMutAct_9fa48("4800") ? "" : (stryCov_9fa48("4800"), 'Retrieve user by userslug')).action(stryMutAct_9fa48("4801") ? () => undefined : (stryCov_9fa48("4801"), (...args) => execute(userCommands.info, args)));
    userCmd.command(stryMutAct_9fa48("4802") ? "" : (stryCov_9fa48("4802"), 'create')).description(stryMutAct_9fa48("4803") ? "" : (stryCov_9fa48("4803"), 'Create a new user.')).arguments(stryMutAct_9fa48("4804") ? "" : (stryCov_9fa48("4804"), '<username>')).option(stryMutAct_9fa48("4805") ? "" : (stryCov_9fa48("4805"), '-p, --password <password>'), stryMutAct_9fa48("4806") ? "" : (stryCov_9fa48("4806"), 'Set a new password. (Auto-generates if omitted)')).option(stryMutAct_9fa48("4807") ? "" : (stryCov_9fa48("4807"), '-e, --email <email>'), stryMutAct_9fa48("4808") ? "" : (stryCov_9fa48("4808"), 'Associate with an email.')).action(stryMutAct_9fa48("4809") ? () => undefined : (stryCov_9fa48("4809"), (...args) => execute(userCommands.create, args)));
    userCmd.command(stryMutAct_9fa48("4810") ? "" : (stryCov_9fa48("4810"), 'reset')).description(stryMutAct_9fa48("4811") ? "" : (stryCov_9fa48("4811"), 'Reset a user\'s password or send a password reset email.')).arguments(stryMutAct_9fa48("4812") ? "" : (stryCov_9fa48("4812"), '<uid>')).option(stryMutAct_9fa48("4813") ? "" : (stryCov_9fa48("4813"), '-p, --password <password>'), stryMutAct_9fa48("4814") ? "" : (stryCov_9fa48("4814"), 'Set a new password. (Auto-generates if passed empty)'), stryMutAct_9fa48("4815") ? true : (stryCov_9fa48("4815"), false)).option(stryMutAct_9fa48("4816") ? "" : (stryCov_9fa48("4816"), '-s, --send-reset-email'), stryMutAct_9fa48("4817") ? "" : (stryCov_9fa48("4817"), 'Send a password reset email.'), stryMutAct_9fa48("4818") ? true : (stryCov_9fa48("4818"), false)).action(stryMutAct_9fa48("4819") ? () => undefined : (stryCov_9fa48("4819"), (...args) => execute(userCommands.reset, args)));
    userCmd.command(stryMutAct_9fa48("4820") ? "" : (stryCov_9fa48("4820"), 'delete')).description(stryMutAct_9fa48("4821") ? "" : (stryCov_9fa48("4821"), 'Delete user(s) and/or their content')).arguments(stryMutAct_9fa48("4822") ? "" : (stryCov_9fa48("4822"), '<uids...>')).addOption(new Option(stryMutAct_9fa48("4823") ? "" : (stryCov_9fa48("4823"), '-t, --type [operation]'), stryMutAct_9fa48("4824") ? "" : (stryCov_9fa48("4824"), 'Delete user content ([purge]), leave content ([account]), or delete content only ([content])')).choices(stryMutAct_9fa48("4825") ? [] : (stryCov_9fa48("4825"), [stryMutAct_9fa48("4826") ? "" : (stryCov_9fa48("4826"), 'purge'), stryMutAct_9fa48("4827") ? "" : (stryCov_9fa48("4827"), 'account'), stryMutAct_9fa48("4828") ? "" : (stryCov_9fa48("4828"), 'content')])).default(stryMutAct_9fa48("4829") ? "" : (stryCov_9fa48("4829"), 'purge'))).action(stryMutAct_9fa48("4830") ? () => undefined : (stryCov_9fa48("4830"), (...args) => execute(userCommands.deleteUser, args)));
    const make = userCmd.command(stryMutAct_9fa48("4831") ? "" : (stryCov_9fa48("4831"), 'make')).description(stryMutAct_9fa48("4832") ? "" : (stryCov_9fa48("4832"), 'Make user(s) admin, global mod, moderator or a regular user.')).arguments(stryMutAct_9fa48("4833") ? "" : (stryCov_9fa48("4833"), '[command]'));
    make.command(stryMutAct_9fa48("4834") ? "" : (stryCov_9fa48("4834"), 'admin')).description(stryMutAct_9fa48("4835") ? "" : (stryCov_9fa48("4835"), 'Make user(s) an admin')).arguments(stryMutAct_9fa48("4836") ? "" : (stryCov_9fa48("4836"), '<uids...>')).action(stryMutAct_9fa48("4837") ? () => undefined : (stryCov_9fa48("4837"), (...args) => execute(userCommands.makeAdmin, args)));
    make.command(stryMutAct_9fa48("4838") ? "" : (stryCov_9fa48("4838"), 'global-mod')).description(stryMutAct_9fa48("4839") ? "" : (stryCov_9fa48("4839"), 'Make user(s) a global moderator')).arguments(stryMutAct_9fa48("4840") ? "" : (stryCov_9fa48("4840"), '<uids...>')).action(stryMutAct_9fa48("4841") ? () => undefined : (stryCov_9fa48("4841"), (...args) => execute(userCommands.makeGlobalMod, args)));
    make.command(stryMutAct_9fa48("4842") ? "" : (stryCov_9fa48("4842"), 'mod')).description(stryMutAct_9fa48("4843") ? "" : (stryCov_9fa48("4843"), 'Make uid(s) of user(s) moderator of given category IDs (cids)')).arguments(stryMutAct_9fa48("4844") ? "" : (stryCov_9fa48("4844"), '<uids...>')).requiredOption(stryMutAct_9fa48("4845") ? "" : (stryCov_9fa48("4845"), '-c, --cid <cids...>'), stryMutAct_9fa48("4846") ? "" : (stryCov_9fa48("4846"), 'ID(s) of categories to make the user a moderator of')).action(stryMutAct_9fa48("4847") ? () => undefined : (stryCov_9fa48("4847"), (...args) => execute(userCommands.makeMod, args)));
    make.command(stryMutAct_9fa48("4848") ? "" : (stryCov_9fa48("4848"), 'regular')).description(stryMutAct_9fa48("4849") ? "" : (stryCov_9fa48("4849"), 'Make user(s) a non-privileged user')).arguments(stryMutAct_9fa48("4850") ? "" : (stryCov_9fa48("4850"), '<uids...>')).action(stryMutAct_9fa48("4851") ? () => undefined : (stryCov_9fa48("4851"), (...args) => execute(userCommands.makeRegular, args)));
    return userCmd;
  }
};
let db;
let user;
let groups;
let privileges;
let privHelpers;
let utils;
let winston;
async function init() {
  if (stryMutAct_9fa48("4852")) {
    {}
  } else {
    stryCov_9fa48("4852");
    db = require('../database');
    await db.init();
    user = require('../user');
    groups = require('../groups');
    privileges = require('../privileges');
    privHelpers = require('../privileges/helpers');
    utils = require('../utils');
    winston = require('winston');
  }
}
async function execute(cmd, args) {
  if (stryMutAct_9fa48("4853")) {
    {}
  } else {
    stryCov_9fa48("4853");
    await init();
    try {
      if (stryMutAct_9fa48("4854")) {
        {}
      } else {
        stryCov_9fa48("4854");
        await cmd(...args);
      }
    } catch (err) {
      if (stryMutAct_9fa48("4855")) {
        {}
      } else {
        stryCov_9fa48("4855");
        const userError = stryMutAct_9fa48("4858") ? err.name !== 'UserError' : stryMutAct_9fa48("4857") ? false : stryMutAct_9fa48("4856") ? true : (stryCov_9fa48("4856", "4857", "4858"), err.name === (stryMutAct_9fa48("4859") ? "" : (stryCov_9fa48("4859"), 'UserError')));
        winston.error(stryMutAct_9fa48("4860") ? `` : (stryCov_9fa48("4860"), `[userCmd/${cmd.name}] ${userError ? stryMutAct_9fa48("4861") ? `` : (stryCov_9fa48("4861"), `${err.message}`) : stryMutAct_9fa48("4862") ? "" : (stryCov_9fa48("4862"), 'Command failed.')}`), userError ? stryMutAct_9fa48("4863") ? "Stryker was here!" : (stryCov_9fa48("4863"), '') : err);
        process.exit(1);
      }
    }
    process.exit();
  }
}
function UserCmdHelpers() {
  if (stryMutAct_9fa48("4864")) {
    {}
  } else {
    stryCov_9fa48("4864");
    async function getAdminUidOrFail() {
      if (stryMutAct_9fa48("4865")) {
        {}
      } else {
        stryCov_9fa48("4865");
        const adminUid = await user.getFirstAdminUid();
        if (stryMutAct_9fa48("4868") ? false : stryMutAct_9fa48("4867") ? true : stryMutAct_9fa48("4866") ? adminUid : (stryCov_9fa48("4866", "4867", "4868"), !adminUid)) {
          if (stryMutAct_9fa48("4869")) {
            {}
          } else {
            stryCov_9fa48("4869");
            const err = new Error(stryMutAct_9fa48("4870") ? "" : (stryCov_9fa48("4870"), 'An admin account does not exists to execute the operation.'));
            err.name = stryMutAct_9fa48("4871") ? "" : (stryCov_9fa48("4871"), 'UserError');
            throw err;
          }
        }
        return adminUid;
      }
    }
    async function setupApp() {
      if (stryMutAct_9fa48("4872")) {
        {}
      } else {
        stryCov_9fa48("4872");
        const nconf = require('nconf');
        const Benchpress = require('benchpressjs');
        const meta = require('../meta');
        await meta.configs.init();
        const webserver = require('../webserver');
        const viewsDir = nconf.get(stryMutAct_9fa48("4873") ? "" : (stryCov_9fa48("4873"), 'views_dir'));
        webserver.app.engine(stryMutAct_9fa48("4874") ? "" : (stryCov_9fa48("4874"), 'tpl'), (filepath, data, next) => {
          if (stryMutAct_9fa48("4875")) {
            {}
          } else {
            stryCov_9fa48("4875");
            filepath = filepath.replace(stryMutAct_9fa48("4876") ? /\.tpl/ : (stryCov_9fa48("4876"), /\.tpl$/), stryMutAct_9fa48("4877") ? "" : (stryCov_9fa48("4877"), '.js'));
            Benchpress.__express(filepath, data, next);
          }
        });
        webserver.app.set(stryMutAct_9fa48("4878") ? "" : (stryCov_9fa48("4878"), 'view engine'), stryMutAct_9fa48("4879") ? "" : (stryCov_9fa48("4879"), 'tpl'));
        webserver.app.set(stryMutAct_9fa48("4880") ? "" : (stryCov_9fa48("4880"), 'views'), viewsDir);
        const emailer = require('../emailer');
        emailer.registerApp(webserver.app);
      }
    }
    const argParsers = stryMutAct_9fa48("4881") ? {} : (stryCov_9fa48("4881"), {
      intParse: (value, varName) => {
        if (stryMutAct_9fa48("4882")) {
          {}
        } else {
          stryCov_9fa48("4882");
          const parsedValue = parseInt(value, 10);
          if (stryMutAct_9fa48("4884") ? false : stryMutAct_9fa48("4883") ? true : (stryCov_9fa48("4883", "4884"), isNaN(parsedValue))) {
            if (stryMutAct_9fa48("4885")) {
              {}
            } else {
              stryCov_9fa48("4885");
              const err = new Error(stryMutAct_9fa48("4886") ? `` : (stryCov_9fa48("4886"), `"${varName}" expected to be a number.`));
              err.name = stryMutAct_9fa48("4887") ? "" : (stryCov_9fa48("4887"), 'UserError');
              throw err;
            }
          }
          return parsedValue;
        }
      },
      intArrayParse: stryMutAct_9fa48("4888") ? () => undefined : (stryCov_9fa48("4888"), (values, varName) => values.map(stryMutAct_9fa48("4889") ? () => undefined : (stryCov_9fa48("4889"), value => argParsers.intParse(value, varName))))
    });
    return stryMutAct_9fa48("4890") ? {} : (stryCov_9fa48("4890"), {
      argParsers,
      getAdminUidOrFail,
      setupApp
    });
  }
}
function UserCommands() {
  if (stryMutAct_9fa48("4891")) {
    {}
  } else {
    stryCov_9fa48("4891");
    const {
      argParsers,
      getAdminUidOrFail,
      setupApp
    } = UserCmdHelpers();
    async function info({
      uid,
      username,
      userslug
    }) {
      if (stryMutAct_9fa48("4892")) {
        {}
      } else {
        stryCov_9fa48("4892");
        if (stryMutAct_9fa48("4895") ? !uid && !username || !userslug : stryMutAct_9fa48("4894") ? false : stryMutAct_9fa48("4893") ? true : (stryCov_9fa48("4893", "4894", "4895"), (stryMutAct_9fa48("4897") ? !uid || !username : stryMutAct_9fa48("4896") ? true : (stryCov_9fa48("4896", "4897"), (stryMutAct_9fa48("4898") ? uid : (stryCov_9fa48("4898"), !uid)) && (stryMutAct_9fa48("4899") ? username : (stryCov_9fa48("4899"), !username)))) && (stryMutAct_9fa48("4900") ? userslug : (stryCov_9fa48("4900"), !userslug)))) {
          if (stryMutAct_9fa48("4901")) {
            {}
          } else {
            stryCov_9fa48("4901");
            return winston.error(stryMutAct_9fa48("4902") ? "" : (stryCov_9fa48("4902"), '[userCmd/info] At least one option has to be passed (--uid, --username or --userslug).'));
          }
        }
        if (stryMutAct_9fa48("4904") ? false : stryMutAct_9fa48("4903") ? true : (stryCov_9fa48("4903", "4904"), uid)) {
          if (stryMutAct_9fa48("4905")) {
            {}
          } else {
            stryCov_9fa48("4905");
            uid = argParsers.intParse(uid, stryMutAct_9fa48("4906") ? "" : (stryCov_9fa48("4906"), 'uid'));
          }
        } else if (stryMutAct_9fa48("4908") ? false : stryMutAct_9fa48("4907") ? true : (stryCov_9fa48("4907", "4908"), username)) {
          if (stryMutAct_9fa48("4909")) {
            {}
          } else {
            stryCov_9fa48("4909");
            uid = await user.getUidByUsername(username);
          }
        } else {
          if (stryMutAct_9fa48("4910")) {
            {}
          } else {
            stryCov_9fa48("4910");
            uid = await user.getUidByUserslug(userslug);
          }
        }
        const userData = await user.getUserData(uid);
        winston.info(stryMutAct_9fa48("4911") ? "" : (stryCov_9fa48("4911"), '[userCmd/info] User info retrieved:'));
        console.log(userData);
      }
    }
    async function create(username, {
      password,
      email
    }) {
      if (stryMutAct_9fa48("4912")) {
        {}
      } else {
        stryCov_9fa48("4912");
        let pwGenerated = stryMutAct_9fa48("4913") ? true : (stryCov_9fa48("4913"), false);
        if (stryMutAct_9fa48("4916") ? password !== undefined : stryMutAct_9fa48("4915") ? false : stryMutAct_9fa48("4914") ? true : (stryCov_9fa48("4914", "4915", "4916"), password === undefined)) {
          if (stryMutAct_9fa48("4917")) {
            {}
          } else {
            stryCov_9fa48("4917");
            password = stryMutAct_9fa48("4918") ? utils.generateUUID() : (stryCov_9fa48("4918"), utils.generateUUID().slice(0, 8));
            pwGenerated = stryMutAct_9fa48("4919") ? false : (stryCov_9fa48("4919"), true);
          }
        }
        const userExists = await user.getUidByUsername(username);
        if (stryMutAct_9fa48("4921") ? false : stryMutAct_9fa48("4920") ? true : (stryCov_9fa48("4920", "4921"), userExists)) {
          if (stryMutAct_9fa48("4922")) {
            {}
          } else {
            stryCov_9fa48("4922");
            return winston.error(stryMutAct_9fa48("4923") ? `` : (stryCov_9fa48("4923"), `[userCmd/create] A user with username '${username}' already exists`));
          }
        }
        const uid = await user.create(stryMutAct_9fa48("4924") ? {} : (stryCov_9fa48("4924"), {
          username,
          password,
          email
        }));
        winston.info(stryMutAct_9fa48("4925") ? `` : (stryCov_9fa48("4925"), `[userCmd/create] User '${username}'${password ? stryMutAct_9fa48("4926") ? "Stryker was here!" : (stryCov_9fa48("4926"), '') : stryMutAct_9fa48("4927") ? "" : (stryCov_9fa48("4927"), ' without a password')} has been created with uid: ${uid}.\
${pwGenerated ? stryMutAct_9fa48("4928") ? `` : (stryCov_9fa48("4928"), ` Generated password: ${password}`) : stryMutAct_9fa48("4929") ? "Stryker was here!" : (stryCov_9fa48("4929"), '')}`));
      }
    }
    async function reset(uid, {
      password,
      sendResetEmail
    }) {
      if (stryMutAct_9fa48("4930")) {
        {}
      } else {
        stryCov_9fa48("4930");
        uid = argParsers.intParse(uid, stryMutAct_9fa48("4931") ? "" : (stryCov_9fa48("4931"), 'uid'));
        if (stryMutAct_9fa48("4934") ? password === false || sendResetEmail === false : stryMutAct_9fa48("4933") ? false : stryMutAct_9fa48("4932") ? true : (stryCov_9fa48("4932", "4933", "4934"), (stryMutAct_9fa48("4936") ? password !== false : stryMutAct_9fa48("4935") ? true : (stryCov_9fa48("4935", "4936"), password === (stryMutAct_9fa48("4937") ? true : (stryCov_9fa48("4937"), false)))) && (stryMutAct_9fa48("4939") ? sendResetEmail !== false : stryMutAct_9fa48("4938") ? true : (stryCov_9fa48("4938", "4939"), sendResetEmail === (stryMutAct_9fa48("4940") ? true : (stryCov_9fa48("4940"), false)))))) {
          if (stryMutAct_9fa48("4941")) {
            {}
          } else {
            stryCov_9fa48("4941");
            return winston.error(stryMutAct_9fa48("4942") ? "" : (stryCov_9fa48("4942"), '[userCmd/reset] At least one option has to be passed (--password or --send-reset-email).'));
          }
        }
        const userExists = await user.exists(uid);
        if (stryMutAct_9fa48("4945") ? false : stryMutAct_9fa48("4944") ? true : stryMutAct_9fa48("4943") ? userExists : (stryCov_9fa48("4943", "4944", "4945"), !userExists)) {
          if (stryMutAct_9fa48("4946")) {
            {}
          } else {
            stryCov_9fa48("4946");
            return winston.error(stryMutAct_9fa48("4947") ? `` : (stryCov_9fa48("4947"), `[userCmd/reset] A user with given uid does not exists.`));
          }
        }
        let pwGenerated = stryMutAct_9fa48("4948") ? true : (stryCov_9fa48("4948"), false);
        if (stryMutAct_9fa48("4951") ? password !== '' : stryMutAct_9fa48("4950") ? false : stryMutAct_9fa48("4949") ? true : (stryCov_9fa48("4949", "4950", "4951"), password === (stryMutAct_9fa48("4952") ? "Stryker was here!" : (stryCov_9fa48("4952"), '')))) {
          if (stryMutAct_9fa48("4953")) {
            {}
          } else {
            stryCov_9fa48("4953");
            password = stryMutAct_9fa48("4954") ? utils.generateUUID() : (stryCov_9fa48("4954"), utils.generateUUID().slice(0, 8));
            pwGenerated = stryMutAct_9fa48("4955") ? false : (stryCov_9fa48("4955"), true);
          }
        }
        const adminUid = await getAdminUidOrFail();
        if (stryMutAct_9fa48("4957") ? false : stryMutAct_9fa48("4956") ? true : (stryCov_9fa48("4956", "4957"), password)) {
          if (stryMutAct_9fa48("4958")) {
            {}
          } else {
            stryCov_9fa48("4958");
            await user.setUserField(uid, stryMutAct_9fa48("4959") ? "" : (stryCov_9fa48("4959"), 'password'), stryMutAct_9fa48("4960") ? "Stryker was here!" : (stryCov_9fa48("4960"), ''));
            await user.changePassword(adminUid, stryMutAct_9fa48("4961") ? {} : (stryCov_9fa48("4961"), {
              newPassword: password,
              uid
            }));
            winston.info(stryMutAct_9fa48("4962") ? `` : (stryCov_9fa48("4962"), `[userCmd/reset] ${password ? stryMutAct_9fa48("4963") ? "" : (stryCov_9fa48("4963"), 'User password changed.') : stryMutAct_9fa48("4964") ? "Stryker was here!" : (stryCov_9fa48("4964"), '')}${pwGenerated ? stryMutAct_9fa48("4965") ? `` : (stryCov_9fa48("4965"), ` Generated password: ${password}`) : stryMutAct_9fa48("4966") ? "Stryker was here!" : (stryCov_9fa48("4966"), '')}`));
          }
        }
        if (stryMutAct_9fa48("4968") ? false : stryMutAct_9fa48("4967") ? true : (stryCov_9fa48("4967", "4968"), sendResetEmail)) {
          if (stryMutAct_9fa48("4969")) {
            {}
          } else {
            stryCov_9fa48("4969");
            const userEmail = await user.getUserField(uid, stryMutAct_9fa48("4970") ? "" : (stryCov_9fa48("4970"), 'email'));
            if (stryMutAct_9fa48("4973") ? false : stryMutAct_9fa48("4972") ? true : stryMutAct_9fa48("4971") ? userEmail : (stryCov_9fa48("4971", "4972", "4973"), !userEmail)) {
              if (stryMutAct_9fa48("4974")) {
                {}
              } else {
                stryCov_9fa48("4974");
                return winston.error(stryMutAct_9fa48("4975") ? "" : (stryCov_9fa48("4975"), 'User doesn\'t have an email address to send reset email.'));
              }
            }
            await setupApp();
            await user.reset.send(userEmail);
            winston.info(stryMutAct_9fa48("4976") ? "" : (stryCov_9fa48("4976"), '[userCmd/reset] Password reset email has been sent.'));
          }
        }
      }
    }
    async function deleteUser(uids, {
      type
    }) {
      if (stryMutAct_9fa48("4977")) {
        {}
      } else {
        stryCov_9fa48("4977");
        uids = argParsers.intArrayParse(uids, stryMutAct_9fa48("4978") ? "" : (stryCov_9fa48("4978"), 'uids'));
        const userExists = await user.exists(uids);
        if (stryMutAct_9fa48("4981") ? !userExists && userExists.some(r => r === false) : stryMutAct_9fa48("4980") ? false : stryMutAct_9fa48("4979") ? true : (stryCov_9fa48("4979", "4980", "4981"), (stryMutAct_9fa48("4982") ? userExists : (stryCov_9fa48("4982"), !userExists)) || (stryMutAct_9fa48("4983") ? userExists.every(r => r === false) : (stryCov_9fa48("4983"), userExists.some(stryMutAct_9fa48("4984") ? () => undefined : (stryCov_9fa48("4984"), r => stryMutAct_9fa48("4987") ? r !== false : stryMutAct_9fa48("4986") ? false : stryMutAct_9fa48("4985") ? true : (stryCov_9fa48("4985", "4986", "4987"), r === (stryMutAct_9fa48("4988") ? true : (stryCov_9fa48("4988"), false))))))))) {
          if (stryMutAct_9fa48("4989")) {
            {}
          } else {
            stryCov_9fa48("4989");
            return winston.error(stryMutAct_9fa48("4990") ? `` : (stryCov_9fa48("4990"), `[userCmd/reset] A user with given uid does not exists.`));
          }
        }
        await db.initSessionStore();
        const adminUid = await getAdminUidOrFail();
        switch (type) {
          case stryMutAct_9fa48("4992") ? "" : (stryCov_9fa48("4992"), 'purge'):
            if (stryMutAct_9fa48("4991")) {} else {
              stryCov_9fa48("4991");
              await Promise.all(uids.map(stryMutAct_9fa48("4993") ? () => undefined : (stryCov_9fa48("4993"), uid => user.delete(adminUid, uid))));
              winston.info(stryMutAct_9fa48("4994") ? `` : (stryCov_9fa48("4994"), `[userCmd/delete] User(s) with their content has been deleted.`));
              break;
            }
          case stryMutAct_9fa48("4996") ? "" : (stryCov_9fa48("4996"), 'account'):
            if (stryMutAct_9fa48("4995")) {} else {
              stryCov_9fa48("4995");
              await Promise.all(uids.map(stryMutAct_9fa48("4997") ? () => undefined : (stryCov_9fa48("4997"), uid => user.deleteAccount(uid))));
              winston.info(stryMutAct_9fa48("4998") ? `` : (stryCov_9fa48("4998"), `[userCmd/delete] User(s) has been deleted, their content left intact.`));
              break;
            }
          case stryMutAct_9fa48("5000") ? "" : (stryCov_9fa48("5000"), 'content'):
            if (stryMutAct_9fa48("4999")) {} else {
              stryCov_9fa48("4999");
              await Promise.all(uids.map(stryMutAct_9fa48("5001") ? () => undefined : (stryCov_9fa48("5001"), uid => user.deleteContent(adminUid, uid))));
              winston.info(stryMutAct_9fa48("5002") ? `` : (stryCov_9fa48("5002"), `[userCmd/delete] User(s)' content has been deleted.`));
              break;
            }
        }
      }
    }
    async function makeAdmin(uids) {
      if (stryMutAct_9fa48("5003")) {
        {}
      } else {
        stryCov_9fa48("5003");
        uids = argParsers.intArrayParse(uids, stryMutAct_9fa48("5004") ? "" : (stryCov_9fa48("5004"), 'uids'));
        await Promise.all(uids.map(stryMutAct_9fa48("5005") ? () => undefined : (stryCov_9fa48("5005"), uid => groups.join(stryMutAct_9fa48("5006") ? "" : (stryCov_9fa48("5006"), 'administrators'), uid))));
        winston.info(stryMutAct_9fa48("5007") ? "" : (stryCov_9fa48("5007"), '[userCmd/make/admin] User(s) added as administrators.'));
      }
    }
    async function makeGlobalMod(uids) {
      if (stryMutAct_9fa48("5008")) {
        {}
      } else {
        stryCov_9fa48("5008");
        uids = argParsers.intArrayParse(uids, stryMutAct_9fa48("5009") ? "" : (stryCov_9fa48("5009"), 'uids'));
        await Promise.all(uids.map(stryMutAct_9fa48("5010") ? () => undefined : (stryCov_9fa48("5010"), uid => groups.join(stryMutAct_9fa48("5011") ? "" : (stryCov_9fa48("5011"), 'Global Moderators'), uid))));
        winston.info(stryMutAct_9fa48("5012") ? "" : (stryCov_9fa48("5012"), '[userCmd/make/globalMod] User(s) added as global moderators.'));
      }
    }
    async function makeMod(uids, {
      cid: cids
    }) {
      if (stryMutAct_9fa48("5013")) {
        {}
      } else {
        stryCov_9fa48("5013");
        uids = argParsers.intArrayParse(uids, stryMutAct_9fa48("5014") ? "" : (stryCov_9fa48("5014"), 'uids'));
        cids = argParsers.intArrayParse(cids, stryMutAct_9fa48("5015") ? "" : (stryCov_9fa48("5015"), 'cids'));
        const categoryPrivList = await privileges.categories.getPrivilegeList();
        await privHelpers.giveOrRescind(groups.join, categoryPrivList, cids, uids);
        winston.info(stryMutAct_9fa48("5016") ? "" : (stryCov_9fa48("5016"), '[userCmd/make/mod] User(s) added as moderators to given categories.'));
      }
    }
    async function makeRegular(uids) {
      if (stryMutAct_9fa48("5017")) {
        {}
      } else {
        stryCov_9fa48("5017");
        uids = argParsers.intArrayParse(uids, stryMutAct_9fa48("5018") ? "" : (stryCov_9fa48("5018"), 'uids'));
        await Promise.all(uids.map(stryMutAct_9fa48("5019") ? () => undefined : (stryCov_9fa48("5019"), uid => groups.leave(stryMutAct_9fa48("5020") ? [] : (stryCov_9fa48("5020"), [stryMutAct_9fa48("5021") ? "" : (stryCov_9fa48("5021"), 'administrators'), stryMutAct_9fa48("5022") ? "" : (stryCov_9fa48("5022"), 'Global Moderators')]), uid))));
        const categoryPrivList = await privileges.categories.getPrivilegeList();
        const cids = await db.getSortedSetRevRange(stryMutAct_9fa48("5023") ? "" : (stryCov_9fa48("5023"), 'categories:cid'), 0, stryMutAct_9fa48("5024") ? +1 : (stryCov_9fa48("5024"), -1));
        await privHelpers.giveOrRescind(groups.leave, categoryPrivList, cids, uids);
        winston.info(stryMutAct_9fa48("5025") ? "" : (stryCov_9fa48("5025"), '[userCmd/make/regular] User(s) made regular/non-privileged.'));
      }
    }
    return stryMutAct_9fa48("5026") ? {} : (stryCov_9fa48("5026"), {
      info,
      create,
      reset,
      deleteUser,
      makeAdmin,
      makeGlobalMod,
      makeMod,
      makeRegular
    });
  }
}