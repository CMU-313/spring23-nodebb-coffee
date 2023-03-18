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
const meta = require('../../meta');
const plugins = require('../../plugins');
const logger = require('../../logger');
const events = require('../../events');
const index = require('../index');
const Config = module.exports;
Config.set = async function (socket, data) {
  if (stryMutAct_9fa48("34896")) {
    {}
  } else {
    stryCov_9fa48("34896");
    if (stryMutAct_9fa48("34899") ? false : stryMutAct_9fa48("34898") ? true : stryMutAct_9fa48("34897") ? data : (stryCov_9fa48("34897", "34898", "34899"), !data)) {
      if (stryMutAct_9fa48("34900")) {
        {}
      } else {
        stryCov_9fa48("34900");
        throw new Error(stryMutAct_9fa48("34901") ? "" : (stryCov_9fa48("34901"), '[[error:invalid-data]]'));
      }
    }
    const _data = {};
    _data[data.key] = data.value;
    await Config.setMultiple(socket, _data);
  }
};
Config.setMultiple = async function (socket, data) {
  if (stryMutAct_9fa48("34902")) {
    {}
  } else {
    stryCov_9fa48("34902");
    if (stryMutAct_9fa48("34905") ? false : stryMutAct_9fa48("34904") ? true : stryMutAct_9fa48("34903") ? data : (stryCov_9fa48("34903", "34904", "34905"), !data)) {
      if (stryMutAct_9fa48("34906")) {
        {}
      } else {
        stryCov_9fa48("34906");
        throw new Error(stryMutAct_9fa48("34907") ? "" : (stryCov_9fa48("34907"), '[[error:invalid-data]]'));
      }
    }
    const changes = {};
    const newData = meta.configs.serialize(data);
    const oldData = meta.configs.serialize(meta.config);
    Object.keys(newData).forEach(key => {
      if (stryMutAct_9fa48("34908")) {
        {}
      } else {
        stryCov_9fa48("34908");
        if (stryMutAct_9fa48("34911") ? newData[key] === oldData[key] : stryMutAct_9fa48("34910") ? false : stryMutAct_9fa48("34909") ? true : (stryCov_9fa48("34909", "34910", "34911"), newData[key] !== oldData[key])) {
          if (stryMutAct_9fa48("34912")) {
            {}
          } else {
            stryCov_9fa48("34912");
            changes[key] = newData[key];
            changes[stryMutAct_9fa48("34913") ? `` : (stryCov_9fa48("34913"), `${key}_old`)] = meta.config[key];
          }
        }
      }
    });
    await meta.configs.setMultiple(data);
    for (const [key, value] of Object.entries(data)) {
      if (stryMutAct_9fa48("34914")) {
        {}
      } else {
        stryCov_9fa48("34914");
        const setting = stryMutAct_9fa48("34915") ? {} : (stryCov_9fa48("34915"), {
          key,
          value
        });
        plugins.hooks.fire(stryMutAct_9fa48("34916") ? "" : (stryCov_9fa48("34916"), 'action:config.set'), setting);
        logger.monitorConfig(stryMutAct_9fa48("34917") ? {} : (stryCov_9fa48("34917"), {
          io: index.server
        }), setting);
      }
    }
    if (stryMutAct_9fa48("34919") ? false : stryMutAct_9fa48("34918") ? true : (stryCov_9fa48("34918", "34919"), Object.keys(changes).length)) {
      if (stryMutAct_9fa48("34920")) {
        {}
      } else {
        stryCov_9fa48("34920");
        changes.type = stryMutAct_9fa48("34921") ? "" : (stryCov_9fa48("34921"), 'config-change');
        changes.uid = socket.uid;
        changes.ip = socket.ip;
        await events.log(changes);
      }
    }
  }
};
Config.remove = async function (socket, key) {
  if (stryMutAct_9fa48("34922")) {
    {}
  } else {
    stryCov_9fa48("34922");
    await meta.configs.remove(key);
  }
};