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
const utils = require('../../utils');
helpers.noop = function () {};
helpers.toMap = function (data) {
  if (stryMutAct_9fa48("13370")) {
    {}
  } else {
    stryCov_9fa48("13370");
    const map = {};
    for (let i = 0; stryMutAct_9fa48("13373") ? i >= data.length : stryMutAct_9fa48("13372") ? i <= data.length : stryMutAct_9fa48("13371") ? false : (stryCov_9fa48("13371", "13372", "13373"), i < data.length); stryMutAct_9fa48("13374") ? i -= 1 : (stryCov_9fa48("13374"), i += 1)) {
      if (stryMutAct_9fa48("13375")) {
        {}
      } else {
        stryCov_9fa48("13375");
        map[data[i]._key] = data[i];
        delete data[i]._key;
      }
    }
    return map;
  }
};
helpers.fieldToString = function (field) {
  if (stryMutAct_9fa48("13376")) {
    {}
  } else {
    stryCov_9fa48("13376");
    if (stryMutAct_9fa48("13379") ? field === null && field === undefined : stryMutAct_9fa48("13378") ? false : stryMutAct_9fa48("13377") ? true : (stryCov_9fa48("13377", "13378", "13379"), (stryMutAct_9fa48("13381") ? field !== null : stryMutAct_9fa48("13380") ? false : (stryCov_9fa48("13380", "13381"), field === null)) || (stryMutAct_9fa48("13383") ? field !== undefined : stryMutAct_9fa48("13382") ? false : (stryCov_9fa48("13382", "13383"), field === undefined)))) {
      if (stryMutAct_9fa48("13384")) {
        {}
      } else {
        stryCov_9fa48("13384");
        return field;
      }
    }
    if (stryMutAct_9fa48("13387") ? typeof field === 'string' : stryMutAct_9fa48("13386") ? false : stryMutAct_9fa48("13385") ? true : (stryCov_9fa48("13385", "13386", "13387"), typeof field !== (stryMutAct_9fa48("13388") ? "" : (stryCov_9fa48("13388"), 'string')))) {
      if (stryMutAct_9fa48("13389")) {
        {}
      } else {
        stryCov_9fa48("13389");
        field = field.toString();
      }
    }
    // if there is a '.' in the field name it inserts subdocument in mongo, replace '.'s with \uff0E
    return field.replace(/\./g, stryMutAct_9fa48("13390") ? "" : (stryCov_9fa48("13390"), '\uff0E'));
  }
};
helpers.serializeData = function (data) {
  if (stryMutAct_9fa48("13391")) {
    {}
  } else {
    stryCov_9fa48("13391");
    const serialized = {};
    for (const [field, value] of Object.entries(data)) {
      if (stryMutAct_9fa48("13392")) {
        {}
      } else {
        stryCov_9fa48("13392");
        if (stryMutAct_9fa48("13395") ? field === '' : stryMutAct_9fa48("13394") ? false : stryMutAct_9fa48("13393") ? true : (stryCov_9fa48("13393", "13394", "13395"), field !== (stryMutAct_9fa48("13396") ? "Stryker was here!" : (stryCov_9fa48("13396"), '')))) {
          if (stryMutAct_9fa48("13397")) {
            {}
          } else {
            stryCov_9fa48("13397");
            serialized[helpers.fieldToString(field)] = value;
          }
        }
      }
    }
    return serialized;
  }
};
helpers.deserializeData = function (data) {
  if (stryMutAct_9fa48("13398")) {
    {}
  } else {
    stryCov_9fa48("13398");
    const deserialized = {};
    for (const [field, value] of Object.entries(data)) {
      if (stryMutAct_9fa48("13399")) {
        {}
      } else {
        stryCov_9fa48("13399");
        deserialized[field.replace(/\uff0E/g, stryMutAct_9fa48("13400") ? "" : (stryCov_9fa48("13400"), '.'))] = value;
      }
    }
    return deserialized;
  }
};
helpers.valueToString = function (value) {
  if (stryMutAct_9fa48("13401")) {
    {}
  } else {
    stryCov_9fa48("13401");
    return String(value);
  }
};
helpers.buildMatchQuery = function (match) {
  if (stryMutAct_9fa48("13402")) {
    {}
  } else {
    stryCov_9fa48("13402");
    let _match = match;
    if (stryMutAct_9fa48("13405") ? match.endsWith('*') : stryMutAct_9fa48("13404") ? false : stryMutAct_9fa48("13403") ? true : (stryCov_9fa48("13403", "13404", "13405"), match.startsWith(stryMutAct_9fa48("13406") ? "" : (stryCov_9fa48("13406"), '*')))) {
      if (stryMutAct_9fa48("13407")) {
        {}
      } else {
        stryCov_9fa48("13407");
        _match = stryMutAct_9fa48("13408") ? _match : (stryCov_9fa48("13408"), _match.substring(1));
      }
    }
    if (stryMutAct_9fa48("13411") ? match.startsWith('*') : stryMutAct_9fa48("13410") ? false : stryMutAct_9fa48("13409") ? true : (stryCov_9fa48("13409", "13410", "13411"), match.endsWith(stryMutAct_9fa48("13412") ? "" : (stryCov_9fa48("13412"), '*')))) {
      if (stryMutAct_9fa48("13413")) {
        {}
      } else {
        stryCov_9fa48("13413");
        _match = stryMutAct_9fa48("13414") ? _match : (stryCov_9fa48("13414"), _match.substring(0, stryMutAct_9fa48("13415") ? _match.length + 1 : (stryCov_9fa48("13415"), _match.length - 1)));
      }
    }
    _match = utils.escapeRegexChars(_match);
    if (stryMutAct_9fa48("13418") ? false : stryMutAct_9fa48("13417") ? true : stryMutAct_9fa48("13416") ? match.startsWith('*') : (stryCov_9fa48("13416", "13417", "13418"), !(stryMutAct_9fa48("13419") ? match.endsWith('*') : (stryCov_9fa48("13419"), match.startsWith(stryMutAct_9fa48("13420") ? "" : (stryCov_9fa48("13420"), '*')))))) {
      if (stryMutAct_9fa48("13421")) {
        {}
      } else {
        stryCov_9fa48("13421");
        _match = stryMutAct_9fa48("13422") ? `` : (stryCov_9fa48("13422"), `^${_match}`);
      }
    }
    if (stryMutAct_9fa48("13425") ? false : stryMutAct_9fa48("13424") ? true : stryMutAct_9fa48("13423") ? match.endsWith('*') : (stryCov_9fa48("13423", "13424", "13425"), !(stryMutAct_9fa48("13426") ? match.startsWith('*') : (stryCov_9fa48("13426"), match.endsWith(stryMutAct_9fa48("13427") ? "" : (stryCov_9fa48("13427"), '*')))))) {
      if (stryMutAct_9fa48("13428")) {
        {}
      } else {
        stryCov_9fa48("13428");
        _match += stryMutAct_9fa48("13429") ? "" : (stryCov_9fa48("13429"), '$');
      }
    }
    return _match;
  }
};