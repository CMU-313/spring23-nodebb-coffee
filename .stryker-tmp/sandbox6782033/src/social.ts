// @ts-nocheck
// This is one of the two example TypeScript files included with the NodeBB repository
// It is meant to serve as an example to assist you with your HW1 translation
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
import _ from 'lodash';
import plugins from './plugins';
import db from './database';
import { Network } from './types';
let postSharing: Network[] | null = null;
export async function getPostSharing(): Promise<Network[]> {
  if (stryMutAct_9fa48("34752")) {
    {}
  } else {
    stryCov_9fa48("34752");
    if (stryMutAct_9fa48("34754") ? false : stryMutAct_9fa48("34753") ? true : (stryCov_9fa48("34753", "34754"), postSharing)) {
      if (stryMutAct_9fa48("34755")) {
        {}
      } else {
        stryCov_9fa48("34755");
        return _.cloneDeep(postSharing);
      }
    }
    let networks: Network[] = stryMutAct_9fa48("34756") ? [] : (stryCov_9fa48("34756"), [stryMutAct_9fa48("34757") ? {} : (stryCov_9fa48("34757"), {
      id: stryMutAct_9fa48("34758") ? "" : (stryCov_9fa48("34758"), 'facebook'),
      name: stryMutAct_9fa48("34759") ? "" : (stryCov_9fa48("34759"), 'Facebook'),
      class: stryMutAct_9fa48("34760") ? "" : (stryCov_9fa48("34760"), 'fa-facebook'),
      activated: null
    }), stryMutAct_9fa48("34761") ? {} : (stryCov_9fa48("34761"), {
      id: stryMutAct_9fa48("34762") ? "" : (stryCov_9fa48("34762"), 'twitter'),
      name: stryMutAct_9fa48("34763") ? "" : (stryCov_9fa48("34763"), 'Twitter'),
      class: stryMutAct_9fa48("34764") ? "" : (stryCov_9fa48("34764"), 'fa-twitter'),
      activated: null
    })]);
    networks = (await plugins.hooks.fire('filter:social.posts', networks) as Network[]);

    // The next line calls a function in a module that has not been updated to TS yet
    // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access, @typescript-eslint/no-unsafe-call
    const activated: string[] = (await db.getSetMembers('social:posts.activated') as string[]);
    networks.forEach(network => {
      if (stryMutAct_9fa48("34765")) {
        {}
      } else {
        stryCov_9fa48("34765");
        network.activated = activated.includes(network.id);
      }
    });
    postSharing = networks;
    return _.cloneDeep(networks);
  }
}
export async function getActivePostSharing(): Promise<Network[]> {
  if (stryMutAct_9fa48("34766")) {
    {}
  } else {
    stryCov_9fa48("34766");
    const networks: Network[] = await getPostSharing();
    return stryMutAct_9fa48("34767") ? networks : (stryCov_9fa48("34767"), networks.filter(stryMutAct_9fa48("34768") ? () => undefined : (stryCov_9fa48("34768"), network => stryMutAct_9fa48("34771") ? network || network.activated : stryMutAct_9fa48("34770") ? false : stryMutAct_9fa48("34769") ? true : (stryCov_9fa48("34769", "34770", "34771"), network && network.activated))));
  }
}
export async function setActivePostSharingNetworks(networkIDs: string[]): Promise<void> {
  if (stryMutAct_9fa48("34772")) {
    {}
  } else {
    stryCov_9fa48("34772");
    postSharing = null;

    // The next line calls a function in a module that has not been updated to TS yet
    // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access, @typescript-eslint/no-unsafe-call
    await db.delete(stryMutAct_9fa48("34773") ? "" : (stryCov_9fa48("34773"), 'social:posts.activated'));
    if (stryMutAct_9fa48("34776") ? false : stryMutAct_9fa48("34775") ? true : stryMutAct_9fa48("34774") ? networkIDs.length : (stryCov_9fa48("34774", "34775", "34776"), !networkIDs.length)) {
      if (stryMutAct_9fa48("34777")) {
        {}
      } else {
        stryCov_9fa48("34777");
        return;
      }
    }

    // The next line calls a function in a module that has not been updated to TS yet
    // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access, @typescript-eslint/no-unsafe-call
    await db.setAdd(stryMutAct_9fa48("34778") ? "" : (stryCov_9fa48("34778"), 'social:posts.activated'), networkIDs);
  }
}