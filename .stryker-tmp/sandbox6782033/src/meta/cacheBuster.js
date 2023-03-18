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
const mkdirp = require('mkdirp');
const winston = require('winston');
const filePath = path.join(__dirname, stryMutAct_9fa48("23546") ? "" : (stryCov_9fa48("23546"), '../../build/cache-buster'));
let cached;

// cache buster is an 11-character, lowercase, alphanumeric string
function generate() {
  if (stryMutAct_9fa48("23547")) {
    {}
  } else {
    stryCov_9fa48("23547");
    return stryMutAct_9fa48("23548") ? (Math.random() * 1e18).toString(32) : (stryCov_9fa48("23548"), (stryMutAct_9fa48("23549") ? Math.random() / 1e18 : (stryCov_9fa48("23549"), Math.random() * 1e18)).toString(32).slice(0, 11));
  }
}
exports.write = async function write() {
  if (stryMutAct_9fa48("23550")) {
    {}
  } else {
    stryCov_9fa48("23550");
    await mkdirp(path.dirname(filePath));
    await fs.promises.writeFile(filePath, generate());
  }
};
exports.read = async function read() {
  if (stryMutAct_9fa48("23551")) {
    {}
  } else {
    stryCov_9fa48("23551");
    if (stryMutAct_9fa48("23553") ? false : stryMutAct_9fa48("23552") ? true : (stryCov_9fa48("23552", "23553"), cached)) {
      if (stryMutAct_9fa48("23554")) {
        {}
      } else {
        stryCov_9fa48("23554");
        return cached;
      }
    }
    try {
      if (stryMutAct_9fa48("23555")) {
        {}
      } else {
        stryCov_9fa48("23555");
        const buster = await fs.promises.readFile(filePath, stryMutAct_9fa48("23556") ? "" : (stryCov_9fa48("23556"), 'utf8'));
        if (stryMutAct_9fa48("23559") ? !buster && buster.length !== 11 : stryMutAct_9fa48("23558") ? false : stryMutAct_9fa48("23557") ? true : (stryCov_9fa48("23557", "23558", "23559"), (stryMutAct_9fa48("23560") ? buster : (stryCov_9fa48("23560"), !buster)) || (stryMutAct_9fa48("23562") ? buster.length === 11 : stryMutAct_9fa48("23561") ? false : (stryCov_9fa48("23561", "23562"), buster.length !== 11)))) {
          if (stryMutAct_9fa48("23563")) {
            {}
          } else {
            stryCov_9fa48("23563");
            winston.warn(stryMutAct_9fa48("23564") ? `` : (stryCov_9fa48("23564"), `[cache-buster] cache buster string invalid: expected /[a-z0-9]{11}/, got \`${buster}\``));
            return generate();
          }
        }
        cached = buster;
        return cached;
      }
    } catch (err) {
      if (stryMutAct_9fa48("23565")) {
        {}
      } else {
        stryCov_9fa48("23565");
        winston.warn(stryMutAct_9fa48("23566") ? "" : (stryCov_9fa48("23566"), '[cache-buster] could not read cache buster'), err);
        return generate();
      }
    }
  }
};
require('../promisify')(exports);