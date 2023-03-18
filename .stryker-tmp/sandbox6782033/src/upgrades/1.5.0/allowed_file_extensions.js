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
const db = require('../../database');
module.exports = stryMutAct_9fa48("44332") ? {} : (stryCov_9fa48("44332"), {
  name: stryMutAct_9fa48("44333") ? "" : (stryCov_9fa48("44333"), 'Set default allowed file extensions'),
  timestamp: Date.UTC(2017, 3, 14),
  method: function (callback) {
    if (stryMutAct_9fa48("44334")) {
      {}
    } else {
      stryCov_9fa48("44334");
      db.getObjectField(stryMutAct_9fa48("44335") ? "" : (stryCov_9fa48("44335"), 'config'), stryMutAct_9fa48("44336") ? "" : (stryCov_9fa48("44336"), 'allowedFileExtensions'), (err, value) => {
        if (stryMutAct_9fa48("44337")) {
          {}
        } else {
          stryCov_9fa48("44337");
          if (stryMutAct_9fa48("44340") ? err && value : stryMutAct_9fa48("44339") ? false : stryMutAct_9fa48("44338") ? true : (stryCov_9fa48("44338", "44339", "44340"), err || value)) {
            if (stryMutAct_9fa48("44341")) {
              {}
            } else {
              stryCov_9fa48("44341");
              return callback(err);
            }
          }
          db.setObjectField(stryMutAct_9fa48("44342") ? "" : (stryCov_9fa48("44342"), 'config'), stryMutAct_9fa48("44343") ? "" : (stryCov_9fa48("44343"), 'allowedFileExtensions'), stryMutAct_9fa48("44344") ? "" : (stryCov_9fa48("44344"), 'png,jpg,bmp'), callback);
        }
      });
    }
  }
});