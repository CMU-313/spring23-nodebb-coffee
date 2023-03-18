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
const os = require('os');
const nconf = require('nconf');
const pubsub = require('../pubsub');
const slugify = require('../slugify');
const Meta = module.exports;
Meta.reloadRequired = stryMutAct_9fa48("24140") ? true : (stryCov_9fa48("24140"), false);
Meta.configs = require('./configs');
Meta.themes = require('./themes');
Meta.js = require('./js');
Meta.css = require('./css');
Meta.settings = require('./settings');
Meta.logs = require('./logs');
Meta.errors = require('./errors');
Meta.tags = require('./tags');
Meta.dependencies = require('./dependencies');
Meta.templates = require('./templates');
Meta.blacklist = require('./blacklist');
Meta.languages = require('./languages');

/* Assorted */
Meta.userOrGroupExists = async function (slug) {
  if (stryMutAct_9fa48("24141")) {
    {}
  } else {
    stryCov_9fa48("24141");
    if (stryMutAct_9fa48("24144") ? false : stryMutAct_9fa48("24143") ? true : stryMutAct_9fa48("24142") ? slug : (stryCov_9fa48("24142", "24143", "24144"), !slug)) {
      if (stryMutAct_9fa48("24145")) {
        {}
      } else {
        stryCov_9fa48("24145");
        throw new Error(stryMutAct_9fa48("24146") ? "" : (stryCov_9fa48("24146"), '[[error:invalid-data]]'));
      }
    }
    const user = require('../user');
    const groups = require('../groups');
    slug = slugify(slug);
    const [userExists, groupExists] = await Promise.all(stryMutAct_9fa48("24147") ? [] : (stryCov_9fa48("24147"), [user.existsBySlug(slug), groups.existsBySlug(slug)]));
    return stryMutAct_9fa48("24150") ? userExists && groupExists : stryMutAct_9fa48("24149") ? false : stryMutAct_9fa48("24148") ? true : (stryCov_9fa48("24148", "24149", "24150"), userExists || groupExists);
  }
};
if (stryMutAct_9fa48("24152") ? false : stryMutAct_9fa48("24151") ? true : (stryCov_9fa48("24151", "24152"), nconf.get(stryMutAct_9fa48("24153") ? "" : (stryCov_9fa48("24153"), 'isPrimary')))) {
  if (stryMutAct_9fa48("24154")) {
    {}
  } else {
    stryCov_9fa48("24154");
    pubsub.on(stryMutAct_9fa48("24155") ? "" : (stryCov_9fa48("24155"), 'meta:restart'), data => {
      if (stryMutAct_9fa48("24156")) {
        {}
      } else {
        stryCov_9fa48("24156");
        if (stryMutAct_9fa48("24159") ? data.hostname === os.hostname() : stryMutAct_9fa48("24158") ? false : stryMutAct_9fa48("24157") ? true : (stryCov_9fa48("24157", "24158", "24159"), data.hostname !== os.hostname())) {
          if (stryMutAct_9fa48("24160")) {
            {}
          } else {
            stryCov_9fa48("24160");
            restart();
          }
        }
      }
    });
  }
}
Meta.restart = function () {
  if (stryMutAct_9fa48("24161")) {
    {}
  } else {
    stryCov_9fa48("24161");
    pubsub.publish(stryMutAct_9fa48("24162") ? "" : (stryCov_9fa48("24162"), 'meta:restart'), stryMutAct_9fa48("24163") ? {} : (stryCov_9fa48("24163"), {
      hostname: os.hostname()
    }));
    restart();
  }
};
function restart() {
  if (stryMutAct_9fa48("24164")) {
    {}
  } else {
    stryCov_9fa48("24164");
    if (stryMutAct_9fa48("24166") ? false : stryMutAct_9fa48("24165") ? true : (stryCov_9fa48("24165", "24166"), process.send)) {
      if (stryMutAct_9fa48("24167")) {
        {}
      } else {
        stryCov_9fa48("24167");
        process.send(stryMutAct_9fa48("24168") ? {} : (stryCov_9fa48("24168"), {
          action: stryMutAct_9fa48("24169") ? "" : (stryCov_9fa48("24169"), 'restart')
        }));
      }
    } else {
      if (stryMutAct_9fa48("24170")) {
        {}
      } else {
        stryCov_9fa48("24170");
        winston.error(stryMutAct_9fa48("24171") ? "" : (stryCov_9fa48("24171"), '[meta.restart] Could not restart, are you sure NodeBB was started with `./nodebb start`?'));
      }
    }
  }
}
Meta.getSessionTTLSeconds = function () {
  if (stryMutAct_9fa48("24172")) {
    {}
  } else {
    stryCov_9fa48("24172");
    const ttlDays = stryMutAct_9fa48("24173") ? 60 * 60 * 24 / Meta.config.loginDays : (stryCov_9fa48("24173"), (stryMutAct_9fa48("24174") ? 60 * 60 / 24 : (stryCov_9fa48("24174"), (stryMutAct_9fa48("24175") ? 60 / 60 : (stryCov_9fa48("24175"), 60 * 60)) * 24)) * Meta.config.loginDays);
    const ttlSeconds = Meta.config.loginSeconds;
    const ttl = stryMutAct_9fa48("24178") ? (ttlSeconds || ttlDays) && 1209600 : stryMutAct_9fa48("24177") ? false : stryMutAct_9fa48("24176") ? true : (stryCov_9fa48("24176", "24177", "24178"), (stryMutAct_9fa48("24180") ? ttlSeconds && ttlDays : stryMutAct_9fa48("24179") ? false : (stryCov_9fa48("24179", "24180"), ttlSeconds || ttlDays)) || 1209600); // Default to 14 days
    return ttl;
  }
};
require('../promisify')(Meta);