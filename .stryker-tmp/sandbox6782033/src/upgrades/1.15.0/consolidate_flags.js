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
const batch = require('../../batch');
const posts = require('../../posts');
const user = require('../../user');
module.exports = stryMutAct_9fa48("43366") ? {} : (stryCov_9fa48("43366"), {
  name: stryMutAct_9fa48("43367") ? "" : (stryCov_9fa48("43367"), 'Consolidate multiple flags reports, going forward'),
  timestamp: Date.UTC(2020, 6, 16),
  method: async function () {
    if (stryMutAct_9fa48("43368")) {
      {}
    } else {
      stryCov_9fa48("43368");
      const {
        progress
      } = this;
      let flags = await db.getSortedSetRange(stryMutAct_9fa48("43369") ? "" : (stryCov_9fa48("43369"), 'flags:datetime'), 0, stryMutAct_9fa48("43370") ? +1 : (stryCov_9fa48("43370"), -1));
      flags = flags.map(stryMutAct_9fa48("43371") ? () => undefined : (stryCov_9fa48("43371"), flagId => stryMutAct_9fa48("43372") ? `` : (stryCov_9fa48("43372"), `flag:${flagId}`)));
      flags = await db.getObjectsFields(flags, stryMutAct_9fa48("43373") ? [] : (stryCov_9fa48("43373"), [stryMutAct_9fa48("43374") ? "" : (stryCov_9fa48("43374"), 'flagId'), stryMutAct_9fa48("43375") ? "" : (stryCov_9fa48("43375"), 'type'), stryMutAct_9fa48("43376") ? "" : (stryCov_9fa48("43376"), 'targetId'), stryMutAct_9fa48("43377") ? "" : (stryCov_9fa48("43377"), 'uid'), stryMutAct_9fa48("43378") ? "" : (stryCov_9fa48("43378"), 'description'), stryMutAct_9fa48("43379") ? "" : (stryCov_9fa48("43379"), 'datetime')]));
      progress.total = flags.length;
      await batch.processArray(flags, async subset => {
        if (stryMutAct_9fa48("43380")) {
          {}
        } else {
          stryCov_9fa48("43380");
          progress.incr(subset.length);
          await Promise.all(subset.map(async flagObj => {
            if (stryMutAct_9fa48("43381")) {
              {}
            } else {
              stryCov_9fa48("43381");
              const methods = stryMutAct_9fa48("43382") ? ["Stryker was here"] : (stryCov_9fa48("43382"), []);
              switch (flagObj.type) {
                case stryMutAct_9fa48("43384") ? "" : (stryCov_9fa48("43384"), 'post'):
                  if (stryMutAct_9fa48("43383")) {} else {
                    stryCov_9fa48("43383");
                    methods.push(posts.setPostField.bind(posts, flagObj.targetId, stryMutAct_9fa48("43385") ? "" : (stryCov_9fa48("43385"), 'flagId'), flagObj.flagId));
                    break;
                  }
                case stryMutAct_9fa48("43387") ? "" : (stryCov_9fa48("43387"), 'user'):
                  if (stryMutAct_9fa48("43386")) {} else {
                    stryCov_9fa48("43386");
                    methods.push(user.setUserField.bind(user, flagObj.targetId, stryMutAct_9fa48("43388") ? "" : (stryCov_9fa48("43388"), 'flagId'), flagObj.flagId));
                    break;
                  }
              }
              methods.push(db.sortedSetAdd.bind(db, stryMutAct_9fa48("43389") ? `` : (stryCov_9fa48("43389"), `flag:${flagObj.flagId}:reports`), flagObj.datetime, stryMutAct_9fa48("43390") ? String(flagObj.description) : (stryCov_9fa48("43390"), String(flagObj.description).slice(0, 250))), db.sortedSetAdd.bind(db, stryMutAct_9fa48("43391") ? `` : (stryCov_9fa48("43391"), `flag:${flagObj.flagId}:reporters`), flagObj.datetime, flagObj.uid));
              await Promise.all(methods.map(stryMutAct_9fa48("43392") ? () => undefined : (stryCov_9fa48("43392"), async method => method())));
            }
          }));
        }
      }, stryMutAct_9fa48("43393") ? {} : (stryCov_9fa48("43393"), {
        progress: progress,
        batch: 500
      }));
    }
  }
});