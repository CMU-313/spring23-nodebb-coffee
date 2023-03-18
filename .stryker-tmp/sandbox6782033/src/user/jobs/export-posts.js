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
const nconf = require('nconf');
nconf.argv().env(stryMutAct_9fa48("47700") ? {} : (stryCov_9fa48("47700"), {
  separator: stryMutAct_9fa48("47701") ? "" : (stryCov_9fa48("47701"), '__')
}));
const fs = require('fs');
const path = require('path');
const json2csvAsync = require('json2csv').parseAsync;
process.env.NODE_ENV = stryMutAct_9fa48("47704") ? process.env.NODE_ENV && 'production' : stryMutAct_9fa48("47703") ? false : stryMutAct_9fa48("47702") ? true : (stryCov_9fa48("47702", "47703", "47704"), process.env.NODE_ENV || (stryMutAct_9fa48("47705") ? "" : (stryCov_9fa48("47705"), 'production')));

// Alternate configuration file support
const configFile = path.resolve(__dirname, stryMutAct_9fa48("47706") ? "" : (stryCov_9fa48("47706"), '../../../'), stryMutAct_9fa48("47709") ? nconf.any(['config', 'CONFIG']) && 'config.json' : stryMutAct_9fa48("47708") ? false : stryMutAct_9fa48("47707") ? true : (stryCov_9fa48("47707", "47708", "47709"), nconf.any(stryMutAct_9fa48("47710") ? [] : (stryCov_9fa48("47710"), [stryMutAct_9fa48("47711") ? "" : (stryCov_9fa48("47711"), 'config'), stryMutAct_9fa48("47712") ? "" : (stryCov_9fa48("47712"), 'CONFIG')])) || (stryMutAct_9fa48("47713") ? "" : (stryCov_9fa48("47713"), 'config.json'))));
const prestart = require('../../prestart');
prestart.loadConfig(configFile);
prestart.setupWinston();
const db = require('../../database');
const batch = require('../../batch');
process.on(stryMutAct_9fa48("47714") ? "" : (stryCov_9fa48("47714"), 'message'), async msg => {
  if (stryMutAct_9fa48("47715")) {
    {}
  } else {
    stryCov_9fa48("47715");
    if (stryMutAct_9fa48("47718") ? msg || msg.uid : stryMutAct_9fa48("47717") ? false : stryMutAct_9fa48("47716") ? true : (stryCov_9fa48("47716", "47717", "47718"), msg && msg.uid)) {
      if (stryMutAct_9fa48("47719")) {
        {}
      } else {
        stryCov_9fa48("47719");
        await db.init();
        const targetUid = msg.uid;
        const filePath = path.join(__dirname, stryMutAct_9fa48("47720") ? "" : (stryCov_9fa48("47720"), '../../../build/export'), stryMutAct_9fa48("47721") ? `` : (stryCov_9fa48("47721"), `${targetUid}_posts.csv`));
        const posts = require('../../posts');
        let payload = stryMutAct_9fa48("47722") ? ["Stryker was here"] : (stryCov_9fa48("47722"), []);
        await batch.processSortedSet(stryMutAct_9fa48("47723") ? `` : (stryCov_9fa48("47723"), `uid:${targetUid}:posts`), async pids => {
          if (stryMutAct_9fa48("47724")) {
            {}
          } else {
            stryCov_9fa48("47724");
            let postData = await posts.getPostsData(pids);
            // Remove empty post references and convert newlines in content
            postData = stryMutAct_9fa48("47725") ? postData.map(post => {
              post.content = `"${String(post.content || '').replace(/\n/g, '\\n').replace(/"/g, '\\"')}"`;
              return post;
            }) : (stryCov_9fa48("47725"), postData.filter(Boolean).map(post => {
              if (stryMutAct_9fa48("47726")) {
                {}
              } else {
                stryCov_9fa48("47726");
                post.content = stryMutAct_9fa48("47727") ? `` : (stryCov_9fa48("47727"), `"${String(stryMutAct_9fa48("47730") ? post.content && '' : stryMutAct_9fa48("47729") ? false : stryMutAct_9fa48("47728") ? true : (stryCov_9fa48("47728", "47729", "47730"), post.content || (stryMutAct_9fa48("47731") ? "Stryker was here!" : (stryCov_9fa48("47731"), '')))).replace(/\n/g, stryMutAct_9fa48("47732") ? "" : (stryCov_9fa48("47732"), '\\n')).replace(/"/g, stryMutAct_9fa48("47733") ? "" : (stryCov_9fa48("47733"), '\\"'))}"`);
                return post;
              }
            }));
            payload = payload.concat(postData);
          }
        }, stryMutAct_9fa48("47734") ? {} : (stryCov_9fa48("47734"), {
          batch: 500,
          interval: 1000
        }));
        const fields = payload.length ? Object.keys(payload[0]) : stryMutAct_9fa48("47735") ? ["Stryker was here"] : (stryCov_9fa48("47735"), []);
        const opts = stryMutAct_9fa48("47736") ? {} : (stryCov_9fa48("47736"), {
          fields
        });
        const csv = await json2csvAsync(payload, opts);
        await fs.promises.writeFile(filePath, csv);
        await db.close();
        process.exit(0);
      }
    }
  }
});