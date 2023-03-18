// @ts-nocheck
// This is one of the two example files included with the NodeBB repository
// It is the original (untranslated) JavaScript file of social.ts
// This file is meant to serve as an example to assist you with your
// HW1 translation. It is *not* meant to be run.
// You do not have to keep your original JavaScript file for this assignment

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
const _ = require('lodash');
const plugins = require('./plugins');
const db = require('./database');
const social = module.exports;
social.postSharing = null;
social.getPostSharing = async function () {
  if (stryMutAct_9fa48("34779")) {
    {}
  } else {
    stryCov_9fa48("34779");
    if (stryMutAct_9fa48("34781") ? false : stryMutAct_9fa48("34780") ? true : (stryCov_9fa48("34780", "34781"), social.postSharing)) {
      if (stryMutAct_9fa48("34782")) {
        {}
      } else {
        stryCov_9fa48("34782");
        return _.cloneDeep(social.postSharing);
      }
    }
    let networks = stryMutAct_9fa48("34783") ? [] : (stryCov_9fa48("34783"), [stryMutAct_9fa48("34784") ? {} : (stryCov_9fa48("34784"), {
      id: stryMutAct_9fa48("34785") ? "" : (stryCov_9fa48("34785"), 'facebook'),
      name: stryMutAct_9fa48("34786") ? "" : (stryCov_9fa48("34786"), 'Facebook'),
      class: stryMutAct_9fa48("34787") ? "" : (stryCov_9fa48("34787"), 'fa-facebook')
    }), stryMutAct_9fa48("34788") ? {} : (stryCov_9fa48("34788"), {
      id: stryMutAct_9fa48("34789") ? "" : (stryCov_9fa48("34789"), 'twitter'),
      name: stryMutAct_9fa48("34790") ? "" : (stryCov_9fa48("34790"), 'Twitter'),
      class: stryMutAct_9fa48("34791") ? "" : (stryCov_9fa48("34791"), 'fa-twitter')
    })]);
    networks = await plugins.hooks.fire(stryMutAct_9fa48("34792") ? "" : (stryCov_9fa48("34792"), 'filter:social.posts'), networks);
    const activated = await db.getSetMembers(stryMutAct_9fa48("34793") ? "" : (stryCov_9fa48("34793"), 'social:posts.activated'));
    networks.forEach(network => {
      if (stryMutAct_9fa48("34794")) {
        {}
      } else {
        stryCov_9fa48("34794");
        network.activated = activated.includes(network.id);
      }
    });
    social.postSharing = networks;
    return _.cloneDeep(networks);
  }
};
social.getActivePostSharing = async function () {
  if (stryMutAct_9fa48("34795")) {
    {}
  } else {
    stryCov_9fa48("34795");
    const networks = await social.getPostSharing();
    return stryMutAct_9fa48("34796") ? networks : (stryCov_9fa48("34796"), networks.filter(stryMutAct_9fa48("34797") ? () => undefined : (stryCov_9fa48("34797"), network => stryMutAct_9fa48("34800") ? network || network.activated : stryMutAct_9fa48("34799") ? false : stryMutAct_9fa48("34798") ? true : (stryCov_9fa48("34798", "34799", "34800"), network && network.activated))));
  }
};
social.setActivePostSharingNetworks = async function (networkIDs) {
  if (stryMutAct_9fa48("34801")) {
    {}
  } else {
    stryCov_9fa48("34801");
    social.postSharing = null;
    await db.delete(stryMutAct_9fa48("34802") ? "" : (stryCov_9fa48("34802"), 'social:posts.activated'));
    if (stryMutAct_9fa48("34805") ? false : stryMutAct_9fa48("34804") ? true : stryMutAct_9fa48("34803") ? networkIDs.length : (stryCov_9fa48("34803", "34804", "34805"), !networkIDs.length)) {
      if (stryMutAct_9fa48("34806")) {
        {}
      } else {
        stryCov_9fa48("34806");
        return;
      }
    }
    await db.setAdd(stryMutAct_9fa48("34807") ? "" : (stryCov_9fa48("34807"), 'social:posts.activated'), networkIDs);
  }
};
require('./promisify')(social);