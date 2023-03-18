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
const plugins = require('../plugins');
const db = require('../database');
const utils = require('../utils');
const rewards = module.exports;
rewards.save = async function (data) {
  if (stryMutAct_9fa48("32416")) {
    {}
  } else {
    stryCov_9fa48("32416");
    async function save(data) {
      if (stryMutAct_9fa48("32417")) {
        {}
      } else {
        stryCov_9fa48("32417");
        if (stryMutAct_9fa48("32420") ? false : stryMutAct_9fa48("32419") ? true : stryMutAct_9fa48("32418") ? Object.keys(data.rewards).length : (stryCov_9fa48("32418", "32419", "32420"), !Object.keys(data.rewards).length)) {
          if (stryMutAct_9fa48("32421")) {
            {}
          } else {
            stryCov_9fa48("32421");
            return;
          }
        }
        const rewardsData = data.rewards;
        delete data.rewards;
        if (stryMutAct_9fa48("32424") ? false : stryMutAct_9fa48("32423") ? true : stryMutAct_9fa48("32422") ? parseInt(data.id, 10) : (stryCov_9fa48("32422", "32423", "32424"), !parseInt(data.id, 10))) {
          if (stryMutAct_9fa48("32425")) {
            {}
          } else {
            stryCov_9fa48("32425");
            data.id = await db.incrObjectField(stryMutAct_9fa48("32426") ? "" : (stryCov_9fa48("32426"), 'global'), stryMutAct_9fa48("32427") ? "" : (stryCov_9fa48("32427"), 'rewards:id'));
          }
        }
        await rewards.delete(data);
        await db.setAdd(stryMutAct_9fa48("32428") ? "" : (stryCov_9fa48("32428"), 'rewards:list'), data.id);
        await db.setObject(stryMutAct_9fa48("32429") ? `` : (stryCov_9fa48("32429"), `rewards:id:${data.id}`), data);
        await db.setObject(stryMutAct_9fa48("32430") ? `` : (stryCov_9fa48("32430"), `rewards:id:${data.id}:rewards`), rewardsData);
      }
    }
    await Promise.all(data.map(stryMutAct_9fa48("32431") ? () => undefined : (stryCov_9fa48("32431"), data => save(data))));
    await saveConditions(data);
    return data;
  }
};
rewards.delete = async function (data) {
  if (stryMutAct_9fa48("32432")) {
    {}
  } else {
    stryCov_9fa48("32432");
    await Promise.all(stryMutAct_9fa48("32433") ? [] : (stryCov_9fa48("32433"), [db.setRemove(stryMutAct_9fa48("32434") ? "" : (stryCov_9fa48("32434"), 'rewards:list'), data.id), db.delete(stryMutAct_9fa48("32435") ? `` : (stryCov_9fa48("32435"), `rewards:id:${data.id}`)), db.delete(stryMutAct_9fa48("32436") ? `` : (stryCov_9fa48("32436"), `rewards:id:${data.id}:rewards`))]));
  }
};
rewards.get = async function () {
  if (stryMutAct_9fa48("32437")) {
    {}
  } else {
    stryCov_9fa48("32437");
    return await utils.promiseParallel(stryMutAct_9fa48("32438") ? {} : (stryCov_9fa48("32438"), {
      active: getActiveRewards(),
      conditions: plugins.hooks.fire(stryMutAct_9fa48("32439") ? "" : (stryCov_9fa48("32439"), 'filter:rewards.conditions'), stryMutAct_9fa48("32440") ? ["Stryker was here"] : (stryCov_9fa48("32440"), [])),
      conditionals: plugins.hooks.fire(stryMutAct_9fa48("32441") ? "" : (stryCov_9fa48("32441"), 'filter:rewards.conditionals'), stryMutAct_9fa48("32442") ? ["Stryker was here"] : (stryCov_9fa48("32442"), [])),
      rewards: plugins.hooks.fire(stryMutAct_9fa48("32443") ? "" : (stryCov_9fa48("32443"), 'filter:rewards.rewards'), stryMutAct_9fa48("32444") ? ["Stryker was here"] : (stryCov_9fa48("32444"), []))
    }));
  }
};
async function saveConditions(data) {
  if (stryMutAct_9fa48("32445")) {
    {}
  } else {
    stryCov_9fa48("32445");
    const rewardsPerCondition = {};
    await db.delete(stryMutAct_9fa48("32446") ? "" : (stryCov_9fa48("32446"), 'conditions:active'));
    const conditions = stryMutAct_9fa48("32447") ? ["Stryker was here"] : (stryCov_9fa48("32447"), []);
    data.forEach(reward => {
      if (stryMutAct_9fa48("32448")) {
        {}
      } else {
        stryCov_9fa48("32448");
        conditions.push(reward.condition);
        rewardsPerCondition[reward.condition] = stryMutAct_9fa48("32451") ? rewardsPerCondition[reward.condition] && [] : stryMutAct_9fa48("32450") ? false : stryMutAct_9fa48("32449") ? true : (stryCov_9fa48("32449", "32450", "32451"), rewardsPerCondition[reward.condition] || (stryMutAct_9fa48("32452") ? ["Stryker was here"] : (stryCov_9fa48("32452"), [])));
        rewardsPerCondition[reward.condition].push(reward.id);
      }
    });
    await db.setAdd(stryMutAct_9fa48("32453") ? "" : (stryCov_9fa48("32453"), 'conditions:active'), conditions);
    await Promise.all(Object.keys(rewardsPerCondition).map(stryMutAct_9fa48("32454") ? () => undefined : (stryCov_9fa48("32454"), c => db.setAdd(stryMutAct_9fa48("32455") ? `` : (stryCov_9fa48("32455"), `condition:${c}:rewards`), rewardsPerCondition[c]))));
  }
}
async function getActiveRewards() {
  if (stryMutAct_9fa48("32456")) {
    {}
  } else {
    stryCov_9fa48("32456");
    async function load(id) {
      if (stryMutAct_9fa48("32457")) {
        {}
      } else {
        stryCov_9fa48("32457");
        const [main, rewards] = await Promise.all(stryMutAct_9fa48("32458") ? [] : (stryCov_9fa48("32458"), [db.getObject(stryMutAct_9fa48("32459") ? `` : (stryCov_9fa48("32459"), `rewards:id:${id}`)), db.getObject(stryMutAct_9fa48("32460") ? `` : (stryCov_9fa48("32460"), `rewards:id:${id}:rewards`))]));
        if (stryMutAct_9fa48("32462") ? false : stryMutAct_9fa48("32461") ? true : (stryCov_9fa48("32461", "32462"), main)) {
          if (stryMutAct_9fa48("32463")) {
            {}
          } else {
            stryCov_9fa48("32463");
            main.disabled = stryMutAct_9fa48("32466") ? main.disabled !== 'true' : stryMutAct_9fa48("32465") ? false : stryMutAct_9fa48("32464") ? true : (stryCov_9fa48("32464", "32465", "32466"), main.disabled === (stryMutAct_9fa48("32467") ? "" : (stryCov_9fa48("32467"), 'true')));
            main.rewards = rewards;
          }
        }
        return main;
      }
    }
    const rewardsList = await db.getSetMembers(stryMutAct_9fa48("32468") ? "" : (stryCov_9fa48("32468"), 'rewards:list'));
    const rewardData = await Promise.all(rewardsList.map(stryMutAct_9fa48("32469") ? () => undefined : (stryCov_9fa48("32469"), id => load(id))));
    return stryMutAct_9fa48("32470") ? rewardData : (stryCov_9fa48("32470"), rewardData.filter(Boolean));
  }
}
require('../promisify')(rewards);