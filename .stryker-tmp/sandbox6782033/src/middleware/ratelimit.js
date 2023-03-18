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
const winston = require('winston');
const ratelimit = module.exports;
const allowedCalls = 100;
const timeframe = 10000;
ratelimit.isFlooding = function (socket) {
  if (stryMutAct_9fa48("26063")) {
    {}
  } else {
    stryCov_9fa48("26063");
    socket.callsPerSecond = stryMutAct_9fa48("26066") ? socket.callsPerSecond && 0 : stryMutAct_9fa48("26065") ? false : stryMutAct_9fa48("26064") ? true : (stryCov_9fa48("26064", "26065", "26066"), socket.callsPerSecond || 0);
    socket.elapsedTime = stryMutAct_9fa48("26069") ? socket.elapsedTime && 0 : stryMutAct_9fa48("26068") ? false : stryMutAct_9fa48("26067") ? true : (stryCov_9fa48("26067", "26068", "26069"), socket.elapsedTime || 0);
    socket.lastCallTime = stryMutAct_9fa48("26072") ? socket.lastCallTime && Date.now() : stryMutAct_9fa48("26071") ? false : stryMutAct_9fa48("26070") ? true : (stryCov_9fa48("26070", "26071", "26072"), socket.lastCallTime || Date.now());
    stryMutAct_9fa48("26073") ? socket.callsPerSecond -= 1 : (stryCov_9fa48("26073"), socket.callsPerSecond += 1);
    const now = Date.now();
    stryMutAct_9fa48("26074") ? socket.elapsedTime -= now - socket.lastCallTime : (stryCov_9fa48("26074"), socket.elapsedTime += stryMutAct_9fa48("26075") ? now + socket.lastCallTime : (stryCov_9fa48("26075"), now - socket.lastCallTime));
    if (stryMutAct_9fa48("26078") ? socket.callsPerSecond > allowedCalls || socket.elapsedTime < timeframe : stryMutAct_9fa48("26077") ? false : stryMutAct_9fa48("26076") ? true : (stryCov_9fa48("26076", "26077", "26078"), (stryMutAct_9fa48("26081") ? socket.callsPerSecond <= allowedCalls : stryMutAct_9fa48("26080") ? socket.callsPerSecond >= allowedCalls : stryMutAct_9fa48("26079") ? true : (stryCov_9fa48("26079", "26080", "26081"), socket.callsPerSecond > allowedCalls)) && (stryMutAct_9fa48("26084") ? socket.elapsedTime >= timeframe : stryMutAct_9fa48("26083") ? socket.elapsedTime <= timeframe : stryMutAct_9fa48("26082") ? true : (stryCov_9fa48("26082", "26083", "26084"), socket.elapsedTime < timeframe)))) {
      if (stryMutAct_9fa48("26085")) {
        {}
      } else {
        stryCov_9fa48("26085");
        winston.warn(stryMutAct_9fa48("26086") ? `` : (stryCov_9fa48("26086"), `Flooding detected! Calls : ${socket.callsPerSecond}, Duration : ${socket.elapsedTime}`));
        return stryMutAct_9fa48("26087") ? false : (stryCov_9fa48("26087"), true);
      }
    }
    if (stryMutAct_9fa48("26091") ? socket.elapsedTime < timeframe : stryMutAct_9fa48("26090") ? socket.elapsedTime > timeframe : stryMutAct_9fa48("26089") ? false : stryMutAct_9fa48("26088") ? true : (stryCov_9fa48("26088", "26089", "26090", "26091"), socket.elapsedTime >= timeframe)) {
      if (stryMutAct_9fa48("26092")) {
        {}
      } else {
        stryCov_9fa48("26092");
        socket.elapsedTime = 0;
        socket.callsPerSecond = 0;
      }
    }
    socket.lastCallTime = now;
    return stryMutAct_9fa48("26093") ? true : (stryCov_9fa48("26093"), false);
  }
};