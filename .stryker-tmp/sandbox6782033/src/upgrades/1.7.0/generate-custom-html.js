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
const meta = require('../../meta');
module.exports = stryMutAct_9fa48("44603") ? {} : (stryCov_9fa48("44603"), {
  name: stryMutAct_9fa48("44604") ? "" : (stryCov_9fa48("44604"), 'Generate customHTML block from old customJS setting'),
  timestamp: Date.UTC(2017, 9, 12),
  method: function (callback) {
    if (stryMutAct_9fa48("44605")) {
      {}
    } else {
      stryCov_9fa48("44605");
      db.getObjectField(stryMutAct_9fa48("44606") ? "" : (stryCov_9fa48("44606"), 'config'), stryMutAct_9fa48("44607") ? "" : (stryCov_9fa48("44607"), 'customJS'), (err, newHTML) => {
        if (stryMutAct_9fa48("44608")) {
          {}
        } else {
          stryCov_9fa48("44608");
          if (stryMutAct_9fa48("44610") ? false : stryMutAct_9fa48("44609") ? true : (stryCov_9fa48("44609", "44610"), err)) {
            if (stryMutAct_9fa48("44611")) {
              {}
            } else {
              stryCov_9fa48("44611");
              return callback(err);
            }
          }
          let newJS = stryMutAct_9fa48("44612") ? ["Stryker was here"] : (stryCov_9fa48("44612"), []);

          // Forgive me for parsing HTML with regex...
          const scriptMatch = stryMutAct_9fa48("44621") ? /^<script\s?(?!async|deferred)?>([\s\s]+?)<\/script>/m : stryMutAct_9fa48("44620") ? /^<script\s?(?!async|deferred)?>([\S\S]+?)<\/script>/m : stryMutAct_9fa48("44619") ? /^<script\s?(?!async|deferred)?>([^\s\S]+?)<\/script>/m : stryMutAct_9fa48("44618") ? /^<script\s?(?!async|deferred)?>([\s\S])<\/script>/m : stryMutAct_9fa48("44617") ? /^<script\s?(?=async|deferred)?>([\s\S]+?)<\/script>/m : stryMutAct_9fa48("44616") ? /^<script\s?(?!async|deferred)>([\s\S]+?)<\/script>/m : stryMutAct_9fa48("44615") ? /^<script\S?(?!async|deferred)?>([\s\S]+?)<\/script>/m : stryMutAct_9fa48("44614") ? /^<script\s(?!async|deferred)?>([\s\S]+?)<\/script>/m : stryMutAct_9fa48("44613") ? /<script\s?(?!async|deferred)?>([\s\S]+?)<\/script>/m : (stryCov_9fa48("44613", "44614", "44615", "44616", "44617", "44618", "44619", "44620", "44621"), /^<script\s?(?!async|deferred)?>([\s\S]+?)<\/script>/m);
          let match = scriptMatch.exec(newHTML);
          while (stryMutAct_9fa48("44622") ? false : (stryCov_9fa48("44622"), match)) {
            if (stryMutAct_9fa48("44623")) {
              {}
            } else {
              stryCov_9fa48("44623");
              if (stryMutAct_9fa48("44625") ? false : stryMutAct_9fa48("44624") ? true : (stryCov_9fa48("44624", "44625"), match[1])) {
                if (stryMutAct_9fa48("44626")) {
                  {}
                } else {
                  stryCov_9fa48("44626");
                  // Append to newJS array
                  newJS.push(stryMutAct_9fa48("44627") ? match[1] : (stryCov_9fa48("44627"), match[1].trim()));

                  // Remove the match from the existing value
                  newHTML = stryMutAct_9fa48("44628") ? (match.index > 0 ? newHTML.slice(0, match.index) : '') + newHTML.slice(match.index + match[0].length) : (stryCov_9fa48("44628"), (stryMutAct_9fa48("44629") ? (match.index > 0 ? newHTML.slice(0, match.index) : '') - newHTML.slice(match.index + match[0].length) : (stryCov_9fa48("44629"), ((stryMutAct_9fa48("44633") ? match.index <= 0 : stryMutAct_9fa48("44632") ? match.index >= 0 : stryMutAct_9fa48("44631") ? false : stryMutAct_9fa48("44630") ? true : (stryCov_9fa48("44630", "44631", "44632", "44633"), match.index > 0)) ? stryMutAct_9fa48("44634") ? newHTML : (stryCov_9fa48("44634"), newHTML.slice(0, match.index)) : stryMutAct_9fa48("44635") ? "Stryker was here!" : (stryCov_9fa48("44635"), '')) + (stryMutAct_9fa48("44636") ? newHTML : (stryCov_9fa48("44636"), newHTML.slice(stryMutAct_9fa48("44637") ? match.index - match[0].length : (stryCov_9fa48("44637"), match.index + match[0].length)))))).trim());
                }
              }
              match = scriptMatch.exec(newHTML);
            }
          }

          // Combine newJS array
          newJS = newJS.join(stryMutAct_9fa48("44638") ? "" : (stryCov_9fa48("44638"), '\n\n'));

          // Write both values to config
          meta.configs.setMultiple(stryMutAct_9fa48("44639") ? {} : (stryCov_9fa48("44639"), {
            customHTML: newHTML,
            customJS: newJS
          }), callback);
        }
      });
    }
  }
});