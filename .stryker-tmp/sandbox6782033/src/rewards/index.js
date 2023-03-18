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
const util = require('util');
const db = require('../database');
const plugins = require('../plugins');
const rewards = module.exports;
rewards.checkConditionAndRewardUser = async function (params) {
  if (stryMutAct_9fa48("32471")) {
    {}
  } else {
    stryCov_9fa48("32471");
    const {
      uid,
      condition,
      method
    } = params;
    const isActive = await isConditionActive(condition);
    if (stryMutAct_9fa48("32474") ? false : stryMutAct_9fa48("32473") ? true : stryMutAct_9fa48("32472") ? isActive : (stryCov_9fa48("32472", "32473", "32474"), !isActive)) {
      if (stryMutAct_9fa48("32475")) {
        {}
      } else {
        stryCov_9fa48("32475");
        return;
      }
    }
    const ids = await getIDsByCondition(condition);
    let rewardData = await getRewardDataByIDs(ids);
    rewardData = await filterCompletedRewards(uid, rewardData);
    rewardData = stryMutAct_9fa48("32476") ? rewardData : (stryCov_9fa48("32476"), rewardData.filter(Boolean));
    if (stryMutAct_9fa48("32479") ? !rewardData && !rewardData.length : stryMutAct_9fa48("32478") ? false : stryMutAct_9fa48("32477") ? true : (stryCov_9fa48("32477", "32478", "32479"), (stryMutAct_9fa48("32480") ? rewardData : (stryCov_9fa48("32480"), !rewardData)) || (stryMutAct_9fa48("32481") ? rewardData.length : (stryCov_9fa48("32481"), !rewardData.length)))) {
      if (stryMutAct_9fa48("32482")) {
        {}
      } else {
        stryCov_9fa48("32482");
        return;
      }
    }
    const eligible = await Promise.all(rewardData.map(stryMutAct_9fa48("32483") ? () => undefined : (stryCov_9fa48("32483"), reward => checkCondition(reward, method))));
    const eligibleRewards = stryMutAct_9fa48("32484") ? rewardData : (stryCov_9fa48("32484"), rewardData.filter(stryMutAct_9fa48("32485") ? () => undefined : (stryCov_9fa48("32485"), (reward, index) => eligible[index])));
    await giveRewards(uid, eligibleRewards);
  }
};
async function isConditionActive(condition) {
  if (stryMutAct_9fa48("32486")) {
    {}
  } else {
    stryCov_9fa48("32486");
    return await db.isSetMember(stryMutAct_9fa48("32487") ? "" : (stryCov_9fa48("32487"), 'conditions:active'), condition);
  }
}
async function getIDsByCondition(condition) {
  if (stryMutAct_9fa48("32488")) {
    {}
  } else {
    stryCov_9fa48("32488");
    return await db.getSetMembers(stryMutAct_9fa48("32489") ? `` : (stryCov_9fa48("32489"), `condition:${condition}:rewards`));
  }
}
async function filterCompletedRewards(uid, rewards) {
  if (stryMutAct_9fa48("32490")) {
    {}
  } else {
    stryCov_9fa48("32490");
    const data = await db.getSortedSetRangeByScoreWithScores(stryMutAct_9fa48("32491") ? `` : (stryCov_9fa48("32491"), `uid:${uid}:rewards`), 0, stryMutAct_9fa48("32492") ? +1 : (stryCov_9fa48("32492"), -1), 1, stryMutAct_9fa48("32493") ? "" : (stryCov_9fa48("32493"), '+inf'));
    const userRewards = {};
    data.forEach(obj => {
      if (stryMutAct_9fa48("32494")) {
        {}
      } else {
        stryCov_9fa48("32494");
        userRewards[obj.value] = parseInt(obj.score, 10);
      }
    });
    return stryMutAct_9fa48("32495") ? rewards : (stryCov_9fa48("32495"), rewards.filter(reward => {
      if (stryMutAct_9fa48("32496")) {
        {}
      } else {
        stryCov_9fa48("32496");
        if (stryMutAct_9fa48("32499") ? false : stryMutAct_9fa48("32498") ? true : stryMutAct_9fa48("32497") ? reward : (stryCov_9fa48("32497", "32498", "32499"), !reward)) {
          if (stryMutAct_9fa48("32500")) {
            {}
          } else {
            stryCov_9fa48("32500");
            return stryMutAct_9fa48("32501") ? true : (stryCov_9fa48("32501"), false);
          }
        }
        const claimable = parseInt(reward.claimable, 10);
        return stryMutAct_9fa48("32504") ? claimable === 0 && (!userRewards[reward.id] || userRewards[reward.id] < reward.claimable) : stryMutAct_9fa48("32503") ? false : stryMutAct_9fa48("32502") ? true : (stryCov_9fa48("32502", "32503", "32504"), (stryMutAct_9fa48("32506") ? claimable !== 0 : stryMutAct_9fa48("32505") ? false : (stryCov_9fa48("32505", "32506"), claimable === 0)) || (stryMutAct_9fa48("32508") ? !userRewards[reward.id] && userRewards[reward.id] < reward.claimable : stryMutAct_9fa48("32507") ? false : (stryCov_9fa48("32507", "32508"), (stryMutAct_9fa48("32509") ? userRewards[reward.id] : (stryCov_9fa48("32509"), !userRewards[reward.id])) || (stryMutAct_9fa48("32512") ? userRewards[reward.id] >= reward.claimable : stryMutAct_9fa48("32511") ? userRewards[reward.id] <= reward.claimable : stryMutAct_9fa48("32510") ? false : (stryCov_9fa48("32510", "32511", "32512"), userRewards[reward.id] < reward.claimable)))));
      }
    }));
  }
}
async function getRewardDataByIDs(ids) {
  if (stryMutAct_9fa48("32513")) {
    {}
  } else {
    stryCov_9fa48("32513");
    return await db.getObjects(ids.map(stryMutAct_9fa48("32514") ? () => undefined : (stryCov_9fa48("32514"), id => stryMutAct_9fa48("32515") ? `` : (stryCov_9fa48("32515"), `rewards:id:${id}`))));
  }
}
async function getRewardsByRewardData(rewards) {
  if (stryMutAct_9fa48("32516")) {
    {}
  } else {
    stryCov_9fa48("32516");
    return await db.getObjects(rewards.map(stryMutAct_9fa48("32517") ? () => undefined : (stryCov_9fa48("32517"), reward => stryMutAct_9fa48("32518") ? `` : (stryCov_9fa48("32518"), `rewards:id:${reward.id}:rewards`))));
  }
}
async function checkCondition(reward, method) {
  if (stryMutAct_9fa48("32519")) {
    {}
  } else {
    stryCov_9fa48("32519");
    if (stryMutAct_9fa48("32522") ? method.constructor || method.constructor.name !== 'AsyncFunction' : stryMutAct_9fa48("32521") ? false : stryMutAct_9fa48("32520") ? true : (stryCov_9fa48("32520", "32521", "32522"), method.constructor && (stryMutAct_9fa48("32524") ? method.constructor.name === 'AsyncFunction' : stryMutAct_9fa48("32523") ? true : (stryCov_9fa48("32523", "32524"), method.constructor.name !== (stryMutAct_9fa48("32525") ? "" : (stryCov_9fa48("32525"), 'AsyncFunction')))))) {
      if (stryMutAct_9fa48("32526")) {
        {}
      } else {
        stryCov_9fa48("32526");
        method = util.promisify(method);
      }
    }
    const value = await method();
    const bool = await plugins.hooks.fire(stryMutAct_9fa48("32527") ? `` : (stryCov_9fa48("32527"), `filter:rewards.checkConditional:${reward.conditional}`), stryMutAct_9fa48("32528") ? {} : (stryCov_9fa48("32528"), {
      left: value,
      right: reward.value
    }));
    return bool;
  }
}
async function giveRewards(uid, rewards) {
  if (stryMutAct_9fa48("32529")) {
    {}
  } else {
    stryCov_9fa48("32529");
    const rewardData = await getRewardsByRewardData(rewards);
    for (let i = 0; stryMutAct_9fa48("32532") ? i >= rewards.length : stryMutAct_9fa48("32531") ? i <= rewards.length : stryMutAct_9fa48("32530") ? false : (stryCov_9fa48("32530", "32531", "32532"), i < rewards.length); stryMutAct_9fa48("32533") ? i-- : (stryCov_9fa48("32533"), i++)) {
      if (stryMutAct_9fa48("32534")) {
        {}
      } else {
        stryCov_9fa48("32534");
        /* eslint-disable no-await-in-loop */
        await plugins.hooks.fire(stryMutAct_9fa48("32535") ? `` : (stryCov_9fa48("32535"), `action:rewards.award:${rewards[i].rid}`), stryMutAct_9fa48("32536") ? {} : (stryCov_9fa48("32536"), {
          uid: uid,
          reward: rewardData[i]
        }));
        await db.sortedSetIncrBy(stryMutAct_9fa48("32537") ? `` : (stryCov_9fa48("32537"), `uid:${uid}:rewards`), 1, rewards[i].id);
      }
    }
  }
}
require('../promisify')(rewards);