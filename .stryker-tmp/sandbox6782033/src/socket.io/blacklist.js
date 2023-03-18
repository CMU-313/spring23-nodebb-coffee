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
const user = require('../user');
const meta = require('../meta');
const events = require('../events');
const SocketBlacklist = module.exports;
SocketBlacklist.validate = async function (socket, data) {
  if (stryMutAct_9fa48("35329")) {
    {}
  } else {
    stryCov_9fa48("35329");
    return meta.blacklist.validate(data.rules);
  }
};
SocketBlacklist.save = async function (socket, rules) {
  if (stryMutAct_9fa48("35330")) {
    {}
  } else {
    stryCov_9fa48("35330");
    await blacklist(socket, stryMutAct_9fa48("35331") ? "" : (stryCov_9fa48("35331"), 'save'), rules);
  }
};
SocketBlacklist.addRule = async function (socket, rule) {
  if (stryMutAct_9fa48("35332")) {
    {}
  } else {
    stryCov_9fa48("35332");
    await blacklist(socket, stryMutAct_9fa48("35333") ? "" : (stryCov_9fa48("35333"), 'addRule'), rule);
  }
};
async function blacklist(socket, method, rule) {
  if (stryMutAct_9fa48("35334")) {
    {}
  } else {
    stryCov_9fa48("35334");
    const isAdminOrGlobalMod = await user.isAdminOrGlobalMod(socket.uid);
    if (stryMutAct_9fa48("35337") ? false : stryMutAct_9fa48("35336") ? true : stryMutAct_9fa48("35335") ? isAdminOrGlobalMod : (stryCov_9fa48("35335", "35336", "35337"), !isAdminOrGlobalMod)) {
      if (stryMutAct_9fa48("35338")) {
        {}
      } else {
        stryCov_9fa48("35338");
        throw new Error(stryMutAct_9fa48("35339") ? "" : (stryCov_9fa48("35339"), '[[error:no-privileges]]'));
      }
    }
    await meta.blacklist[method](rule);
    await events.log(stryMutAct_9fa48("35340") ? {} : (stryCov_9fa48("35340"), {
      type: stryMutAct_9fa48("35341") ? `` : (stryCov_9fa48("35341"), `ip-blacklist-${method}`),
      uid: socket.uid,
      ip: socket.ip,
      rule: rule
    }));
  }
}
require('../promisify')(SocketBlacklist);