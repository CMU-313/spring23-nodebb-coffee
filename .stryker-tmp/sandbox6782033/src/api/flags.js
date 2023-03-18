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
const user = require('../user');
const flags = require('../flags');
const flagsApi = module.exports;
flagsApi.create = async (caller, data) => {
  if (stryMutAct_9fa48("543")) {
    {}
  } else {
    stryCov_9fa48("543");
    const required = stryMutAct_9fa48("544") ? [] : (stryCov_9fa48("544"), [stryMutAct_9fa48("545") ? "" : (stryCov_9fa48("545"), 'type'), stryMutAct_9fa48("546") ? "" : (stryCov_9fa48("546"), 'id'), stryMutAct_9fa48("547") ? "" : (stryCov_9fa48("547"), 'reason')]);
    if (stryMutAct_9fa48("550") ? false : stryMutAct_9fa48("549") ? true : stryMutAct_9fa48("548") ? required.every(prop => !!data[prop]) : (stryCov_9fa48("548", "549", "550"), !(stryMutAct_9fa48("551") ? required.some(prop => !!data[prop]) : (stryCov_9fa48("551"), required.every(stryMutAct_9fa48("552") ? () => undefined : (stryCov_9fa48("552"), prop => stryMutAct_9fa48("553") ? !data[prop] : (stryCov_9fa48("553"), !(stryMutAct_9fa48("554") ? data[prop] : (stryCov_9fa48("554"), !data[prop]))))))))) {
      if (stryMutAct_9fa48("555")) {
        {}
      } else {
        stryCov_9fa48("555");
        throw new Error(stryMutAct_9fa48("556") ? "" : (stryCov_9fa48("556"), '[[error:invalid-data]]'));
      }
    }
    const {
      type,
      id,
      reason
    } = data;
    await flags.validate(stryMutAct_9fa48("557") ? {} : (stryCov_9fa48("557"), {
      uid: caller.uid,
      type: type,
      id: id
    }));
    const flagObj = await flags.create(type, id, caller.uid, reason);
    flags.notify(flagObj, caller.uid);
    return flagObj;
  }
};
flagsApi.update = async (caller, data) => {
  if (stryMutAct_9fa48("558")) {
    {}
  } else {
    stryCov_9fa48("558");
    const allowed = await user.isPrivileged(caller.uid);
    if (stryMutAct_9fa48("561") ? false : stryMutAct_9fa48("560") ? true : stryMutAct_9fa48("559") ? allowed : (stryCov_9fa48("559", "560", "561"), !allowed)) {
      if (stryMutAct_9fa48("562")) {
        {}
      } else {
        stryCov_9fa48("562");
        throw new Error(stryMutAct_9fa48("563") ? "" : (stryCov_9fa48("563"), '[[error:no-privileges]]'));
      }
    }
    const {
      flagId
    } = data;
    delete data.flagId;
    await flags.update(flagId, caller.uid, data);
    return await flags.getHistory(flagId);
  }
};
flagsApi.appendNote = async (caller, data) => {
  if (stryMutAct_9fa48("564")) {
    {}
  } else {
    stryCov_9fa48("564");
    const allowed = await user.isPrivileged(caller.uid);
    if (stryMutAct_9fa48("567") ? false : stryMutAct_9fa48("566") ? true : stryMutAct_9fa48("565") ? allowed : (stryCov_9fa48("565", "566", "567"), !allowed)) {
      if (stryMutAct_9fa48("568")) {
        {}
      } else {
        stryCov_9fa48("568");
        throw new Error(stryMutAct_9fa48("569") ? "" : (stryCov_9fa48("569"), '[[error:no-privileges]]'));
      }
    }
    if (stryMutAct_9fa48("572") ? data.datetime || data.flagId : stryMutAct_9fa48("571") ? false : stryMutAct_9fa48("570") ? true : (stryCov_9fa48("570", "571", "572"), data.datetime && data.flagId)) {
      if (stryMutAct_9fa48("573")) {
        {}
      } else {
        stryCov_9fa48("573");
        try {
          if (stryMutAct_9fa48("574")) {
            {}
          } else {
            stryCov_9fa48("574");
            const note = await flags.getNote(data.flagId, data.datetime);
            if (stryMutAct_9fa48("577") ? note.uid === caller.uid : stryMutAct_9fa48("576") ? false : stryMutAct_9fa48("575") ? true : (stryCov_9fa48("575", "576", "577"), note.uid !== caller.uid)) {
              if (stryMutAct_9fa48("578")) {
                {}
              } else {
                stryCov_9fa48("578");
                throw new Error(stryMutAct_9fa48("579") ? "" : (stryCov_9fa48("579"), '[[error:no-privileges]]'));
              }
            }
          }
        } catch (e) {
          if (stryMutAct_9fa48("580")) {
            {}
          } else {
            stryCov_9fa48("580");
            // Okay if not does not exist in database
            if (stryMutAct_9fa48("583") ? e.message === '[[error:invalid-data]]' : stryMutAct_9fa48("582") ? false : stryMutAct_9fa48("581") ? true : (stryCov_9fa48("581", "582", "583"), e.message !== (stryMutAct_9fa48("584") ? "" : (stryCov_9fa48("584"), '[[error:invalid-data]]')))) {
              if (stryMutAct_9fa48("585")) {
                {}
              } else {
                stryCov_9fa48("585");
                throw e;
              }
            }
          }
        }
      }
    }
    await flags.appendNote(data.flagId, caller.uid, data.note, data.datetime);
    const [notes, history] = await Promise.all(stryMutAct_9fa48("586") ? [] : (stryCov_9fa48("586"), [flags.getNotes(data.flagId), flags.getHistory(data.flagId)]));
    return stryMutAct_9fa48("587") ? {} : (stryCov_9fa48("587"), {
      notes: notes,
      history: history
    });
  }
};
flagsApi.deleteNote = async (caller, data) => {
  if (stryMutAct_9fa48("588")) {
    {}
  } else {
    stryCov_9fa48("588");
    const note = await flags.getNote(data.flagId, data.datetime);
    if (stryMutAct_9fa48("591") ? note.uid === caller.uid : stryMutAct_9fa48("590") ? false : stryMutAct_9fa48("589") ? true : (stryCov_9fa48("589", "590", "591"), note.uid !== caller.uid)) {
      if (stryMutAct_9fa48("592")) {
        {}
      } else {
        stryCov_9fa48("592");
        throw new Error(stryMutAct_9fa48("593") ? "" : (stryCov_9fa48("593"), '[[error:no-privileges]]'));
      }
    }
    await flags.deleteNote(data.flagId, data.datetime);
    await flags.appendHistory(data.flagId, caller.uid, stryMutAct_9fa48("594") ? {} : (stryCov_9fa48("594"), {
      notes: stryMutAct_9fa48("595") ? "" : (stryCov_9fa48("595"), '[[flags:note-deleted]]'),
      datetime: Date.now()
    }));
    const [notes, history] = await Promise.all(stryMutAct_9fa48("596") ? [] : (stryCov_9fa48("596"), [flags.getNotes(data.flagId), flags.getHistory(data.flagId)]));
    return stryMutAct_9fa48("597") ? {} : (stryCov_9fa48("597"), {
      notes: notes,
      history: history
    });
  }
};