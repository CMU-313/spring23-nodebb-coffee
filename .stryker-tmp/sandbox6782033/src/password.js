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
const path = require('path');
const crypto = require('crypto');
const util = require('util');
const bcrypt = require('bcryptjs');
const fork = require('./meta/debugFork');
function forkChild(message, callback) {
  if (stryMutAct_9fa48("27227")) {
    {}
  } else {
    stryCov_9fa48("27227");
    const child = fork(path.join(__dirname, stryMutAct_9fa48("27228") ? "" : (stryCov_9fa48("27228"), 'password')));
    child.on(stryMutAct_9fa48("27229") ? "" : (stryCov_9fa48("27229"), 'message'), msg => {
      if (stryMutAct_9fa48("27230")) {
        {}
      } else {
        stryCov_9fa48("27230");
        callback(msg.err ? new Error(msg.err) : null, msg.result);
      }
    });
    child.on(stryMutAct_9fa48("27231") ? "" : (stryCov_9fa48("27231"), 'error'), err => {
      if (stryMutAct_9fa48("27232")) {
        {}
      } else {
        stryCov_9fa48("27232");
        console.error(err.stack);
        callback(err);
      }
    });
    child.send(message);
  }
}
const forkChildAsync = util.promisify(forkChild);
exports.hash = async function (rounds, password) {
  if (stryMutAct_9fa48("27233")) {
    {}
  } else {
    stryCov_9fa48("27233");
    password = crypto.createHash(stryMutAct_9fa48("27234") ? "" : (stryCov_9fa48("27234"), 'sha512')).update(password).digest(stryMutAct_9fa48("27235") ? "" : (stryCov_9fa48("27235"), 'hex'));
    return await forkChildAsync(stryMutAct_9fa48("27236") ? {} : (stryCov_9fa48("27236"), {
      type: stryMutAct_9fa48("27237") ? "" : (stryCov_9fa48("27237"), 'hash'),
      rounds: rounds,
      password: password
    }));
  }
};
exports.compare = async function (password, hash, shaWrapped) {
  if (stryMutAct_9fa48("27238")) {
    {}
  } else {
    stryCov_9fa48("27238");
    const fakeHash = await getFakeHash();
    if (stryMutAct_9fa48("27240") ? false : stryMutAct_9fa48("27239") ? true : (stryCov_9fa48("27239", "27240"), shaWrapped)) {
      if (stryMutAct_9fa48("27241")) {
        {}
      } else {
        stryCov_9fa48("27241");
        password = crypto.createHash(stryMutAct_9fa48("27242") ? "" : (stryCov_9fa48("27242"), 'sha512')).update(password).digest(stryMutAct_9fa48("27243") ? "" : (stryCov_9fa48("27243"), 'hex'));
      }
    }
    return await forkChildAsync(stryMutAct_9fa48("27244") ? {} : (stryCov_9fa48("27244"), {
      type: stryMutAct_9fa48("27245") ? "" : (stryCov_9fa48("27245"), 'compare'),
      password: password,
      hash: stryMutAct_9fa48("27248") ? hash && fakeHash : stryMutAct_9fa48("27247") ? false : stryMutAct_9fa48("27246") ? true : (stryCov_9fa48("27246", "27247", "27248"), hash || fakeHash)
    }));
  }
};
let fakeHashCache;
async function getFakeHash() {
  if (stryMutAct_9fa48("27249")) {
    {}
  } else {
    stryCov_9fa48("27249");
    if (stryMutAct_9fa48("27251") ? false : stryMutAct_9fa48("27250") ? true : (stryCov_9fa48("27250", "27251"), fakeHashCache)) {
      if (stryMutAct_9fa48("27252")) {
        {}
      } else {
        stryCov_9fa48("27252");
        return fakeHashCache;
      }
    }
    fakeHashCache = await exports.hash(12, Math.random().toString());
    return fakeHashCache;
  }
}

// child process
process.on(stryMutAct_9fa48("27253") ? "" : (stryCov_9fa48("27253"), 'message'), msg => {
  if (stryMutAct_9fa48("27254")) {
    {}
  } else {
    stryCov_9fa48("27254");
    if (stryMutAct_9fa48("27257") ? msg.type !== 'hash' : stryMutAct_9fa48("27256") ? false : stryMutAct_9fa48("27255") ? true : (stryCov_9fa48("27255", "27256", "27257"), msg.type === (stryMutAct_9fa48("27258") ? "" : (stryCov_9fa48("27258"), 'hash')))) {
      if (stryMutAct_9fa48("27259")) {
        {}
      } else {
        stryCov_9fa48("27259");
        tryMethod(hashPassword, msg);
      }
    } else if (stryMutAct_9fa48("27262") ? msg.type !== 'compare' : stryMutAct_9fa48("27261") ? false : stryMutAct_9fa48("27260") ? true : (stryCov_9fa48("27260", "27261", "27262"), msg.type === (stryMutAct_9fa48("27263") ? "" : (stryCov_9fa48("27263"), 'compare')))) {
      if (stryMutAct_9fa48("27264")) {
        {}
      } else {
        stryCov_9fa48("27264");
        tryMethod(compare, msg);
      }
    }
  }
});
async function tryMethod(method, msg) {
  if (stryMutAct_9fa48("27265")) {
    {}
  } else {
    stryCov_9fa48("27265");
    try {
      if (stryMutAct_9fa48("27266")) {
        {}
      } else {
        stryCov_9fa48("27266");
        const result = await method(msg);
        process.send(stryMutAct_9fa48("27267") ? {} : (stryCov_9fa48("27267"), {
          result: result
        }));
      }
    } catch (err) {
      if (stryMutAct_9fa48("27268")) {
        {}
      } else {
        stryCov_9fa48("27268");
        process.send(stryMutAct_9fa48("27269") ? {} : (stryCov_9fa48("27269"), {
          err: err.message
        }));
      }
    } finally {
      if (stryMutAct_9fa48("27270")) {
        {}
      } else {
        stryCov_9fa48("27270");
        process.disconnect();
      }
    }
  }
}
async function hashPassword(msg) {
  if (stryMutAct_9fa48("27271")) {
    {}
  } else {
    stryCov_9fa48("27271");
    const salt = await bcrypt.genSalt(parseInt(msg.rounds, 10));
    const hash = await bcrypt.hash(msg.password, salt);
    return hash;
  }
}
async function compare(msg) {
  if (stryMutAct_9fa48("27272")) {
    {}
  } else {
    stryCov_9fa48("27272");
    return await bcrypt.compare(String(stryMutAct_9fa48("27275") ? msg.password && '' : stryMutAct_9fa48("27274") ? false : stryMutAct_9fa48("27273") ? true : (stryCov_9fa48("27273", "27274", "27275"), msg.password || (stryMutAct_9fa48("27276") ? "Stryker was here!" : (stryCov_9fa48("27276"), '')))), String(stryMutAct_9fa48("27279") ? msg.hash && '' : stryMutAct_9fa48("27278") ? false : stryMutAct_9fa48("27277") ? true : (stryCov_9fa48("27277", "27278", "27279"), msg.hash || (stryMutAct_9fa48("27280") ? "Stryker was here!" : (stryCov_9fa48("27280"), '')))));
  }
}
require('./promisify')(exports);