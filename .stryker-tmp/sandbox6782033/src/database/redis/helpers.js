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
const helpers = module.exports;
helpers.noop = function () {};
helpers.execBatch = async function (batch) {
  if (stryMutAct_9fa48("17277")) {
    {}
  } else {
    stryCov_9fa48("17277");
    const results = await batch.exec();
    return results.map(([err, res]) => {
      if (stryMutAct_9fa48("17278")) {
        {}
      } else {
        stryCov_9fa48("17278");
        if (stryMutAct_9fa48("17280") ? false : stryMutAct_9fa48("17279") ? true : (stryCov_9fa48("17279", "17280"), err)) {
          if (stryMutAct_9fa48("17281")) {
            {}
          } else {
            stryCov_9fa48("17281");
            throw err;
          }
        }
        return res;
      }
    });
  }
};
helpers.resultsToBool = function (results) {
  if (stryMutAct_9fa48("17282")) {
    {}
  } else {
    stryCov_9fa48("17282");
    for (let i = 0; stryMutAct_9fa48("17285") ? i >= results.length : stryMutAct_9fa48("17284") ? i <= results.length : stryMutAct_9fa48("17283") ? false : (stryCov_9fa48("17283", "17284", "17285"), i < results.length); stryMutAct_9fa48("17286") ? i -= 1 : (stryCov_9fa48("17286"), i += 1)) {
      if (stryMutAct_9fa48("17287")) {
        {}
      } else {
        stryCov_9fa48("17287");
        results[i] = stryMutAct_9fa48("17290") ? results[i] !== 1 : stryMutAct_9fa48("17289") ? false : stryMutAct_9fa48("17288") ? true : (stryCov_9fa48("17288", "17289", "17290"), results[i] === 1);
      }
    }
    return results;
  }
};
helpers.zsetToObjectArray = function (data) {
  if (stryMutAct_9fa48("17291")) {
    {}
  } else {
    stryCov_9fa48("17291");
    const objects = stryMutAct_9fa48("17292") ? new Array() : (stryCov_9fa48("17292"), new Array(stryMutAct_9fa48("17293") ? data.length * 2 : (stryCov_9fa48("17293"), data.length / 2)));
    for (let i = 0, k = 0; stryMutAct_9fa48("17296") ? i >= objects.length : stryMutAct_9fa48("17295") ? i <= objects.length : stryMutAct_9fa48("17294") ? false : (stryCov_9fa48("17294", "17295", "17296"), i < objects.length); stryMutAct_9fa48("17297") ? i -= 1 : (stryCov_9fa48("17297"), i += 1), stryMutAct_9fa48("17298") ? k -= 2 : (stryCov_9fa48("17298"), k += 2)) {
      if (stryMutAct_9fa48("17299")) {
        {}
      } else {
        stryCov_9fa48("17299");
        objects[i] = stryMutAct_9fa48("17300") ? {} : (stryCov_9fa48("17300"), {
          value: data[k],
          score: parseFloat(data[stryMutAct_9fa48("17301") ? k - 1 : (stryCov_9fa48("17301"), k + 1)])
        });
      }
    }
    return objects;
  }
};