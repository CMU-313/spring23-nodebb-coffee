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
const _ = require('lodash');
const winston = require('winston');
const validator = require('validator');
const db = require('./database');
const user = require('./user');
const groups = require('./groups');
const meta = require('./meta');
const notifications = require('./notifications');
const analytics = require('./analytics');
const categories = require('./categories');
const topics = require('./topics');
const posts = require('./posts');
const privileges = require('./privileges');
const plugins = require('./plugins');
const utils = require('./utils');
const batch = require('./batch');
const Flags = module.exports;
Flags._states = new Map(stryMutAct_9fa48("18737") ? [] : (stryCov_9fa48("18737"), [stryMutAct_9fa48("18738") ? [] : (stryCov_9fa48("18738"), [stryMutAct_9fa48("18739") ? "" : (stryCov_9fa48("18739"), 'open'), stryMutAct_9fa48("18740") ? {} : (stryCov_9fa48("18740"), {
  label: stryMutAct_9fa48("18741") ? "" : (stryCov_9fa48("18741"), '[[flags:state-open]]'),
  class: stryMutAct_9fa48("18742") ? "" : (stryCov_9fa48("18742"), 'danger')
})]), stryMutAct_9fa48("18743") ? [] : (stryCov_9fa48("18743"), [stryMutAct_9fa48("18744") ? "" : (stryCov_9fa48("18744"), 'wip'), stryMutAct_9fa48("18745") ? {} : (stryCov_9fa48("18745"), {
  label: stryMutAct_9fa48("18746") ? "" : (stryCov_9fa48("18746"), '[[flags:state-wip]]'),
  class: stryMutAct_9fa48("18747") ? "" : (stryCov_9fa48("18747"), 'warning')
})]), stryMutAct_9fa48("18748") ? [] : (stryCov_9fa48("18748"), [stryMutAct_9fa48("18749") ? "" : (stryCov_9fa48("18749"), 'resolved'), stryMutAct_9fa48("18750") ? {} : (stryCov_9fa48("18750"), {
  label: stryMutAct_9fa48("18751") ? "" : (stryCov_9fa48("18751"), '[[flags:state-resolved]]'),
  class: stryMutAct_9fa48("18752") ? "" : (stryCov_9fa48("18752"), 'success')
})]), stryMutAct_9fa48("18753") ? [] : (stryCov_9fa48("18753"), [stryMutAct_9fa48("18754") ? "" : (stryCov_9fa48("18754"), 'rejected'), stryMutAct_9fa48("18755") ? {} : (stryCov_9fa48("18755"), {
  label: stryMutAct_9fa48("18756") ? "" : (stryCov_9fa48("18756"), '[[flags:state-rejected]]'),
  class: stryMutAct_9fa48("18757") ? "" : (stryCov_9fa48("18757"), 'secondary')
})])]));
Flags.init = async function () {
  if (stryMutAct_9fa48("18758")) {
    {}
  } else {
    stryCov_9fa48("18758");
    // Query plugins for custom filter strategies and merge into core filter strategies
    function prepareSets(sets, orSets, prefix, value) {
      if (stryMutAct_9fa48("18759")) {
        {}
      } else {
        stryCov_9fa48("18759");
        if (stryMutAct_9fa48("18762") ? false : stryMutAct_9fa48("18761") ? true : stryMutAct_9fa48("18760") ? Array.isArray(value) : (stryCov_9fa48("18760", "18761", "18762"), !Array.isArray(value))) {
          if (stryMutAct_9fa48("18763")) {
            {}
          } else {
            stryCov_9fa48("18763");
            sets.push(stryMutAct_9fa48("18764") ? prefix - value : (stryCov_9fa48("18764"), prefix + value));
          }
        } else if (stryMutAct_9fa48("18766") ? false : stryMutAct_9fa48("18765") ? true : (stryCov_9fa48("18765", "18766"), value.length)) {
          if (stryMutAct_9fa48("18767")) {
            {}
          } else {
            stryCov_9fa48("18767");
            if (stryMutAct_9fa48("18770") ? value.length !== 1 : stryMutAct_9fa48("18769") ? false : stryMutAct_9fa48("18768") ? true : (stryCov_9fa48("18768", "18769", "18770"), value.length === 1)) {
              if (stryMutAct_9fa48("18771")) {
                {}
              } else {
                stryCov_9fa48("18771");
                sets.push(stryMutAct_9fa48("18772") ? prefix - value[0] : (stryCov_9fa48("18772"), prefix + value[0]));
              }
            } else {
              if (stryMutAct_9fa48("18773")) {
                {}
              } else {
                stryCov_9fa48("18773");
                orSets.push(value.map(stryMutAct_9fa48("18774") ? () => undefined : (stryCov_9fa48("18774"), x => stryMutAct_9fa48("18775") ? prefix - x : (stryCov_9fa48("18775"), prefix + x))));
              }
            }
          }
        }
      }
    }
    const hookData = stryMutAct_9fa48("18776") ? {} : (stryCov_9fa48("18776"), {
      filters: stryMutAct_9fa48("18777") ? {} : (stryCov_9fa48("18777"), {
        type: function (sets, orSets, key) {
          if (stryMutAct_9fa48("18778")) {
            {}
          } else {
            stryCov_9fa48("18778");
            prepareSets(sets, orSets, stryMutAct_9fa48("18779") ? "" : (stryCov_9fa48("18779"), 'flags:byType:'), key);
          }
        },
        state: function (sets, orSets, key) {
          if (stryMutAct_9fa48("18780")) {
            {}
          } else {
            stryCov_9fa48("18780");
            prepareSets(sets, orSets, stryMutAct_9fa48("18781") ? "" : (stryCov_9fa48("18781"), 'flags:byState:'), key);
          }
        },
        reporterId: function (sets, orSets, key) {
          if (stryMutAct_9fa48("18782")) {
            {}
          } else {
            stryCov_9fa48("18782");
            prepareSets(sets, orSets, stryMutAct_9fa48("18783") ? "" : (stryCov_9fa48("18783"), 'flags:byReporter:'), key);
          }
        },
        assignee: function (sets, orSets, key) {
          if (stryMutAct_9fa48("18784")) {
            {}
          } else {
            stryCov_9fa48("18784");
            prepareSets(sets, orSets, stryMutAct_9fa48("18785") ? "" : (stryCov_9fa48("18785"), 'flags:byAssignee:'), key);
          }
        },
        targetUid: function (sets, orSets, key) {
          if (stryMutAct_9fa48("18786")) {
            {}
          } else {
            stryCov_9fa48("18786");
            prepareSets(sets, orSets, stryMutAct_9fa48("18787") ? "" : (stryCov_9fa48("18787"), 'flags:byTargetUid:'), key);
          }
        },
        cid: function (sets, orSets, key) {
          if (stryMutAct_9fa48("18788")) {
            {}
          } else {
            stryCov_9fa48("18788");
            prepareSets(sets, orSets, stryMutAct_9fa48("18789") ? "" : (stryCov_9fa48("18789"), 'flags:byCid:'), key);
          }
        },
        page: function () {/* noop */},
        perPage: function () {/* noop */},
        quick: function (sets, orSets, key, uid) {
          if (stryMutAct_9fa48("18790")) {
            {}
          } else {
            stryCov_9fa48("18790");
            switch (key) {
              case stryMutAct_9fa48("18792") ? "" : (stryCov_9fa48("18792"), 'mine'):
                if (stryMutAct_9fa48("18791")) {} else {
                  stryCov_9fa48("18791");
                  sets.push(stryMutAct_9fa48("18793") ? `` : (stryCov_9fa48("18793"), `flags:byAssignee:${uid}`));
                  break;
                }
              case stryMutAct_9fa48("18795") ? "" : (stryCov_9fa48("18795"), 'unresolved'):
                if (stryMutAct_9fa48("18794")) {} else {
                  stryCov_9fa48("18794");
                  prepareSets(sets, orSets, stryMutAct_9fa48("18796") ? "" : (stryCov_9fa48("18796"), 'flags:byState:'), stryMutAct_9fa48("18797") ? [] : (stryCov_9fa48("18797"), [stryMutAct_9fa48("18798") ? "" : (stryCov_9fa48("18798"), 'open'), stryMutAct_9fa48("18799") ? "" : (stryCov_9fa48("18799"), 'wip')]));
                  break;
                }
            }
          }
        }
      }),
      states: Flags._states,
      helpers: stryMutAct_9fa48("18800") ? {} : (stryCov_9fa48("18800"), {
        prepareSets: prepareSets
      })
    });
    try {
      if (stryMutAct_9fa48("18801")) {
        {}
      } else {
        stryCov_9fa48("18801");
        ({
          filters: Flags._filters
        } = await plugins.hooks.fire(stryMutAct_9fa48("18802") ? "" : (stryCov_9fa48("18802"), 'filter:flags.getFilters'), hookData));
        ({
          filters: Flags._filters,
          states: Flags._states
        } = await plugins.hooks.fire(stryMutAct_9fa48("18803") ? "" : (stryCov_9fa48("18803"), 'filter:flags.init'), hookData));
      }
    } catch (err) {
      if (stryMutAct_9fa48("18804")) {
        {}
      } else {
        stryCov_9fa48("18804");
        winston.error(stryMutAct_9fa48("18805") ? `` : (stryCov_9fa48("18805"), `[flags/init] Could not retrieve filters\n${err.stack}`));
        Flags._filters = {};
      }
    }
  }
};
Flags.get = async function (flagId) {
  if (stryMutAct_9fa48("18806")) {
    {}
  } else {
    stryCov_9fa48("18806");
    const [base, notes, reports] = await Promise.all(stryMutAct_9fa48("18807") ? [] : (stryCov_9fa48("18807"), [db.getObject(stryMutAct_9fa48("18808") ? `` : (stryCov_9fa48("18808"), `flag:${flagId}`)), Flags.getNotes(flagId), Flags.getReports(flagId)]));
    if (stryMutAct_9fa48("18811") ? false : stryMutAct_9fa48("18810") ? true : stryMutAct_9fa48("18809") ? base : (stryCov_9fa48("18809", "18810", "18811"), !base)) {
      if (stryMutAct_9fa48("18812")) {
        {}
      } else {
        stryCov_9fa48("18812");
        return;
      }
    }
    const flagObj = stryMutAct_9fa48("18813") ? {} : (stryCov_9fa48("18813"), {
      state: stryMutAct_9fa48("18814") ? "" : (stryCov_9fa48("18814"), 'open'),
      assignee: null,
      ...base,
      datetimeISO: utils.toISOString(base.datetime),
      target_readable: stryMutAct_9fa48("18815") ? `` : (stryCov_9fa48("18815"), `${stryMutAct_9fa48("18816") ? base.type.charAt(0).toUpperCase() - base.type.slice(1) : (stryCov_9fa48("18816"), (stryMutAct_9fa48("18818") ? base.type.toUpperCase() : stryMutAct_9fa48("18817") ? base.type.charAt(0).toLowerCase() : (stryCov_9fa48("18817", "18818"), base.type.charAt(0).toUpperCase())) + (stryMutAct_9fa48("18819") ? base.type : (stryCov_9fa48("18819"), base.type.slice(1))))} ${base.targetId}`),
      target: await Flags.getTarget(base.type, base.targetId, 0),
      notes,
      reports
    });
    const data = await plugins.hooks.fire(stryMutAct_9fa48("18820") ? "" : (stryCov_9fa48("18820"), 'filter:flags.get'), stryMutAct_9fa48("18821") ? {} : (stryCov_9fa48("18821"), {
      flag: flagObj
    }));
    return data.flag;
  }
};
Flags.getCount = async function ({
  uid,
  filters,
  query
}) {
  if (stryMutAct_9fa48("18822")) {
    {}
  } else {
    stryCov_9fa48("18822");
    filters = stryMutAct_9fa48("18825") ? filters && {} : stryMutAct_9fa48("18824") ? false : stryMutAct_9fa48("18823") ? true : (stryCov_9fa48("18823", "18824", "18825"), filters || {});
    const flagIds = await Flags.getFlagIdsWithFilters(stryMutAct_9fa48("18826") ? {} : (stryCov_9fa48("18826"), {
      filters,
      uid,
      query
    }));
    return flagIds.length;
  }
};
Flags.getFlagIdsWithFilters = async function ({
  filters,
  uid,
  query
}) {
  if (stryMutAct_9fa48("18827")) {
    {}
  } else {
    stryCov_9fa48("18827");
    let sets = stryMutAct_9fa48("18828") ? ["Stryker was here"] : (stryCov_9fa48("18828"), []);
    const orSets = stryMutAct_9fa48("18829") ? ["Stryker was here"] : (stryCov_9fa48("18829"), []);

    // Default filter
    filters.page = filters.hasOwnProperty(stryMutAct_9fa48("18830") ? "" : (stryCov_9fa48("18830"), 'page')) ? Math.abs(stryMutAct_9fa48("18833") ? parseInt(filters.page, 10) && 1 : stryMutAct_9fa48("18832") ? false : stryMutAct_9fa48("18831") ? true : (stryCov_9fa48("18831", "18832", "18833"), parseInt(filters.page, 10) || 1)) : 1;
    filters.perPage = filters.hasOwnProperty(stryMutAct_9fa48("18834") ? "" : (stryCov_9fa48("18834"), 'perPage')) ? Math.abs(stryMutAct_9fa48("18837") ? parseInt(filters.perPage, 10) && 20 : stryMutAct_9fa48("18836") ? false : stryMutAct_9fa48("18835") ? true : (stryCov_9fa48("18835", "18836", "18837"), parseInt(filters.perPage, 10) || 20)) : 20;
    for (const type of Object.keys(filters)) {
      if (stryMutAct_9fa48("18838")) {
        {}
      } else {
        stryCov_9fa48("18838");
        if (stryMutAct_9fa48("18840") ? false : stryMutAct_9fa48("18839") ? true : (stryCov_9fa48("18839", "18840"), Flags._filters.hasOwnProperty(type))) {
          if (stryMutAct_9fa48("18841")) {
            {}
          } else {
            stryCov_9fa48("18841");
            Flags._filters[type](sets, orSets, filters[type], uid);
          }
        } else {
          if (stryMutAct_9fa48("18842")) {
            {}
          } else {
            stryCov_9fa48("18842");
            winston.warn(stryMutAct_9fa48("18843") ? `` : (stryCov_9fa48("18843"), `[flags/list] No flag filter type found: ${type}`));
          }
        }
      }
    }
    sets = (stryMutAct_9fa48("18846") ? sets.length && orSets.length : stryMutAct_9fa48("18845") ? false : stryMutAct_9fa48("18844") ? true : (stryCov_9fa48("18844", "18845", "18846"), sets.length || orSets.length)) ? sets : stryMutAct_9fa48("18847") ? [] : (stryCov_9fa48("18847"), [stryMutAct_9fa48("18848") ? "" : (stryCov_9fa48("18848"), 'flags:datetime')]); // No filter default

    let flagIds = stryMutAct_9fa48("18849") ? ["Stryker was here"] : (stryCov_9fa48("18849"), []);
    if (stryMutAct_9fa48("18852") ? sets.length !== 1 : stryMutAct_9fa48("18851") ? false : stryMutAct_9fa48("18850") ? true : (stryCov_9fa48("18850", "18851", "18852"), sets.length === 1)) {
      if (stryMutAct_9fa48("18853")) {
        {}
      } else {
        stryCov_9fa48("18853");
        flagIds = await db.getSortedSetRevRange(sets[0], 0, stryMutAct_9fa48("18854") ? +1 : (stryCov_9fa48("18854"), -1));
      }
    } else if (stryMutAct_9fa48("18858") ? sets.length <= 1 : stryMutAct_9fa48("18857") ? sets.length >= 1 : stryMutAct_9fa48("18856") ? false : stryMutAct_9fa48("18855") ? true : (stryCov_9fa48("18855", "18856", "18857", "18858"), sets.length > 1)) {
      if (stryMutAct_9fa48("18859")) {
        {}
      } else {
        stryCov_9fa48("18859");
        flagIds = await db.getSortedSetRevIntersect(stryMutAct_9fa48("18860") ? {} : (stryCov_9fa48("18860"), {
          sets: sets,
          start: 0,
          stop: stryMutAct_9fa48("18861") ? +1 : (stryCov_9fa48("18861"), -1),
          aggregate: stryMutAct_9fa48("18862") ? "" : (stryCov_9fa48("18862"), 'MAX')
        }));
      }
    }
    if (stryMutAct_9fa48("18864") ? false : stryMutAct_9fa48("18863") ? true : (stryCov_9fa48("18863", "18864"), orSets.length)) {
      if (stryMutAct_9fa48("18865")) {
        {}
      } else {
        stryCov_9fa48("18865");
        let _flagIds = await Promise.all(orSets.map(stryMutAct_9fa48("18866") ? () => undefined : (stryCov_9fa48("18866"), async orSet => await db.getSortedSetRevUnion(stryMutAct_9fa48("18867") ? {} : (stryCov_9fa48("18867"), {
          sets: orSet,
          start: 0,
          stop: stryMutAct_9fa48("18868") ? +1 : (stryCov_9fa48("18868"), -1),
          aggregate: stryMutAct_9fa48("18869") ? "" : (stryCov_9fa48("18869"), 'MAX')
        })))));

        // Each individual orSet is ANDed together to construct the final list of flagIds
        _flagIds = _.intersection(..._flagIds);

        // Merge with flagIds returned by sets
        if (stryMutAct_9fa48("18871") ? false : stryMutAct_9fa48("18870") ? true : (stryCov_9fa48("18870", "18871"), sets.length)) {
          if (stryMutAct_9fa48("18872")) {
            {}
          } else {
            stryCov_9fa48("18872");
            // If flag ids are already present, return a subset of flags that are in both sets
            flagIds = _.intersection(flagIds, _flagIds);
          }
        } else {
          if (stryMutAct_9fa48("18873")) {
            {}
          } else {
            stryCov_9fa48("18873");
            // Otherwise, return all flags returned via orSets
            flagIds = _.union(flagIds, _flagIds);
          }
        }
      }
    }
    const result = await plugins.hooks.fire(stryMutAct_9fa48("18874") ? "" : (stryCov_9fa48("18874"), 'filter:flags.getFlagIdsWithFilters'), stryMutAct_9fa48("18875") ? {} : (stryCov_9fa48("18875"), {
      filters,
      uid,
      query,
      flagIds
    }));
    return result.flagIds;
  }
};
Flags.list = async function (data) {
  if (stryMutAct_9fa48("18876")) {
    {}
  } else {
    stryCov_9fa48("18876");
    const filters = stryMutAct_9fa48("18879") ? data.filters && {} : stryMutAct_9fa48("18878") ? false : stryMutAct_9fa48("18877") ? true : (stryCov_9fa48("18877", "18878", "18879"), data.filters || {});
    let flagIds = await Flags.getFlagIdsWithFilters(stryMutAct_9fa48("18880") ? {} : (stryCov_9fa48("18880"), {
      filters,
      uid: data.uid,
      query: data.query
    }));
    flagIds = await (stryMutAct_9fa48("18881") ? Flags : (stryCov_9fa48("18881"), Flags.sort(flagIds, data.sort)));

    // Create subset for parsing based on page number (n=20)
    const flagsPerPage = Math.abs(stryMutAct_9fa48("18884") ? parseInt(filters.perPage, 10) && 1 : stryMutAct_9fa48("18883") ? false : stryMutAct_9fa48("18882") ? true : (stryCov_9fa48("18882", "18883", "18884"), parseInt(filters.perPage, 10) || 1));
    const pageCount = Math.ceil(stryMutAct_9fa48("18885") ? flagIds.length * flagsPerPage : (stryCov_9fa48("18885"), flagIds.length / flagsPerPage));
    flagIds = stryMutAct_9fa48("18886") ? flagIds : (stryCov_9fa48("18886"), flagIds.slice(stryMutAct_9fa48("18887") ? (filters.page - 1) / flagsPerPage : (stryCov_9fa48("18887"), (stryMutAct_9fa48("18888") ? filters.page + 1 : (stryCov_9fa48("18888"), filters.page - 1)) * flagsPerPage), stryMutAct_9fa48("18889") ? filters.page / flagsPerPage : (stryCov_9fa48("18889"), filters.page * flagsPerPage)));
    const reportCounts = await db.sortedSetsCard(flagIds.map(stryMutAct_9fa48("18890") ? () => undefined : (stryCov_9fa48("18890"), flagId => stryMutAct_9fa48("18891") ? `` : (stryCov_9fa48("18891"), `flag:${flagId}:reports`))));
    const flags = await Promise.all(flagIds.map(async (flagId, idx) => {
      if (stryMutAct_9fa48("18892")) {
        {}
      } else {
        stryCov_9fa48("18892");
        let flagObj = await db.getObject(stryMutAct_9fa48("18893") ? `` : (stryCov_9fa48("18893"), `flag:${flagId}`));
        flagObj = stryMutAct_9fa48("18894") ? {} : (stryCov_9fa48("18894"), {
          state: stryMutAct_9fa48("18895") ? "" : (stryCov_9fa48("18895"), 'open'),
          assignee: null,
          heat: reportCounts[idx],
          ...flagObj
        });
        flagObj.labelClass = Flags._states.get(flagObj.state).class;
        return Object.assign(flagObj, stryMutAct_9fa48("18896") ? {} : (stryCov_9fa48("18896"), {
          target_readable: stryMutAct_9fa48("18897") ? `` : (stryCov_9fa48("18897"), `${stryMutAct_9fa48("18898") ? flagObj.type.charAt(0).toUpperCase() - flagObj.type.slice(1) : (stryCov_9fa48("18898"), (stryMutAct_9fa48("18900") ? flagObj.type.toUpperCase() : stryMutAct_9fa48("18899") ? flagObj.type.charAt(0).toLowerCase() : (stryCov_9fa48("18899", "18900"), flagObj.type.charAt(0).toUpperCase())) + (stryMutAct_9fa48("18901") ? flagObj.type : (stryCov_9fa48("18901"), flagObj.type.slice(1))))} ${flagObj.targetId}`),
          datetimeISO: utils.toISOString(flagObj.datetime)
        }));
      }
    }));
    const payload = await plugins.hooks.fire(stryMutAct_9fa48("18902") ? "" : (stryCov_9fa48("18902"), 'filter:flags.list'), stryMutAct_9fa48("18903") ? {} : (stryCov_9fa48("18903"), {
      flags: flags,
      page: filters.page,
      uid: data.uid
    }));
    return stryMutAct_9fa48("18904") ? {} : (stryCov_9fa48("18904"), {
      flags: payload.flags,
      page: payload.page,
      pageCount: pageCount
    });
  }
};
Flags.sort = async function (flagIds, sort) {
  if (stryMutAct_9fa48("18905")) {
    {}
  } else {
    stryCov_9fa48("18905");
    const filterPosts = async flagIds => {
      if (stryMutAct_9fa48("18906")) {
        {}
      } else {
        stryCov_9fa48("18906");
        const keys = flagIds.map(stryMutAct_9fa48("18907") ? () => undefined : (stryCov_9fa48("18907"), id => stryMutAct_9fa48("18908") ? `` : (stryCov_9fa48("18908"), `flag:${id}`)));
        const types = await db.getObjectsFields(keys, stryMutAct_9fa48("18909") ? [] : (stryCov_9fa48("18909"), [stryMutAct_9fa48("18910") ? "" : (stryCov_9fa48("18910"), 'type')]));
        return stryMutAct_9fa48("18911") ? flagIds : (stryCov_9fa48("18911"), flagIds.filter(stryMutAct_9fa48("18912") ? () => undefined : (stryCov_9fa48("18912"), (id, idx) => stryMutAct_9fa48("18915") ? types[idx].type !== 'post' : stryMutAct_9fa48("18914") ? false : stryMutAct_9fa48("18913") ? true : (stryCov_9fa48("18913", "18914", "18915"), types[idx].type === (stryMutAct_9fa48("18916") ? "" : (stryCov_9fa48("18916"), 'post'))))));
      }
    };
    switch (sort) {
      // 'newest' is not handled because that is default
      case stryMutAct_9fa48("18918") ? "" : (stryCov_9fa48("18918"), 'oldest'):
        if (stryMutAct_9fa48("18917")) {} else {
          stryCov_9fa48("18917");
          flagIds = stryMutAct_9fa48("18919") ? flagIds : (stryCov_9fa48("18919"), flagIds.reverse());
          break;
        }
      case stryMutAct_9fa48("18921") ? "" : (stryCov_9fa48("18921"), 'reports'):
        if (stryMutAct_9fa48("18920")) {} else {
          stryCov_9fa48("18920");
          {
            if (stryMutAct_9fa48("18922")) {
              {}
            } else {
              stryCov_9fa48("18922");
              const keys = flagIds.map(stryMutAct_9fa48("18923") ? () => undefined : (stryCov_9fa48("18923"), id => stryMutAct_9fa48("18924") ? `` : (stryCov_9fa48("18924"), `flag:${id}:reports`)));
              const heat = await db.sortedSetsCard(keys);
              const mapped = heat.map(stryMutAct_9fa48("18925") ? () => undefined : (stryCov_9fa48("18925"), (el, i) => stryMutAct_9fa48("18926") ? {} : (stryCov_9fa48("18926"), {
                index: i,
                heat: el
              })));
              stryMutAct_9fa48("18927") ? mapped : (stryCov_9fa48("18927"), mapped.sort(stryMutAct_9fa48("18928") ? () => undefined : (stryCov_9fa48("18928"), (a, b) => stryMutAct_9fa48("18929") ? b.heat + a.heat : (stryCov_9fa48("18929"), b.heat - a.heat))));
              flagIds = mapped.map(stryMutAct_9fa48("18930") ? () => undefined : (stryCov_9fa48("18930"), obj => flagIds[obj.index]));
              break;
            }
          }
        }
      case stryMutAct_9fa48("18931") ? "" : (stryCov_9fa48("18931"), 'upvotes'): // fall-through
      case stryMutAct_9fa48("18932") ? "" : (stryCov_9fa48("18932"), 'downvotes'):
      case stryMutAct_9fa48("18934") ? "" : (stryCov_9fa48("18934"), 'replies'):
        if (stryMutAct_9fa48("18933")) {} else {
          stryCov_9fa48("18933");
          {
            if (stryMutAct_9fa48("18935")) {
              {}
            } else {
              stryCov_9fa48("18935");
              flagIds = await filterPosts(flagIds);
              const keys = flagIds.map(stryMutAct_9fa48("18936") ? () => undefined : (stryCov_9fa48("18936"), id => stryMutAct_9fa48("18937") ? `` : (stryCov_9fa48("18937"), `flag:${id}`)));
              const pids = (await db.getObjectsFields(keys, stryMutAct_9fa48("18938") ? [] : (stryCov_9fa48("18938"), [stryMutAct_9fa48("18939") ? "" : (stryCov_9fa48("18939"), 'targetId')]))).map(stryMutAct_9fa48("18940") ? () => undefined : (stryCov_9fa48("18940"), obj => obj.targetId));
              const votes = (await posts.getPostsFields(pids, stryMutAct_9fa48("18941") ? [] : (stryCov_9fa48("18941"), [sort]))).map(stryMutAct_9fa48("18942") ? () => undefined : (stryCov_9fa48("18942"), obj => stryMutAct_9fa48("18945") ? parseInt(obj[sort], 10) && 0 : stryMutAct_9fa48("18944") ? false : stryMutAct_9fa48("18943") ? true : (stryCov_9fa48("18943", "18944", "18945"), parseInt(obj[sort], 10) || 0)));
              const sortRef = flagIds.reduce((memo, cur, idx) => {
                if (stryMutAct_9fa48("18946")) {
                  {}
                } else {
                  stryCov_9fa48("18946");
                  memo[cur] = votes[idx];
                  return memo;
                }
              }, {});
              flagIds = stryMutAct_9fa48("18947") ? flagIds : (stryCov_9fa48("18947"), flagIds.sort(stryMutAct_9fa48("18948") ? () => undefined : (stryCov_9fa48("18948"), (a, b) => stryMutAct_9fa48("18949") ? sortRef[b] + sortRef[a] : (stryCov_9fa48("18949"), sortRef[b] - sortRef[a]))));
            }
          }
        }
    }
    return flagIds;
  }
};
Flags.validate = async function (payload) {
  if (stryMutAct_9fa48("18950")) {
    {}
  } else {
    stryCov_9fa48("18950");
    const [target, reporter] = await Promise.all(stryMutAct_9fa48("18951") ? [] : (stryCov_9fa48("18951"), [Flags.getTarget(payload.type, payload.id, payload.uid), user.getUserData(payload.uid)]));
    if (stryMutAct_9fa48("18954") ? false : stryMutAct_9fa48("18953") ? true : stryMutAct_9fa48("18952") ? target : (stryCov_9fa48("18952", "18953", "18954"), !target)) {
      if (stryMutAct_9fa48("18955")) {
        {}
      } else {
        stryCov_9fa48("18955");
        throw new Error(stryMutAct_9fa48("18956") ? "" : (stryCov_9fa48("18956"), '[[error:invalid-data]]'));
      }
    } else if (stryMutAct_9fa48("18958") ? false : stryMutAct_9fa48("18957") ? true : (stryCov_9fa48("18957", "18958"), target.deleted)) {
      if (stryMutAct_9fa48("18959")) {
        {}
      } else {
        stryCov_9fa48("18959");
        throw new Error(stryMutAct_9fa48("18960") ? "" : (stryCov_9fa48("18960"), '[[error:post-deleted]]'));
      }
    } else if (stryMutAct_9fa48("18963") ? !reporter && !reporter.userslug : stryMutAct_9fa48("18962") ? false : stryMutAct_9fa48("18961") ? true : (stryCov_9fa48("18961", "18962", "18963"), (stryMutAct_9fa48("18964") ? reporter : (stryCov_9fa48("18964"), !reporter)) || (stryMutAct_9fa48("18965") ? reporter.userslug : (stryCov_9fa48("18965"), !reporter.userslug)))) {
      if (stryMutAct_9fa48("18966")) {
        {}
      } else {
        stryCov_9fa48("18966");
        throw new Error(stryMutAct_9fa48("18967") ? "" : (stryCov_9fa48("18967"), '[[error:no-user]]'));
      }
    } else if (stryMutAct_9fa48("18969") ? false : stryMutAct_9fa48("18968") ? true : (stryCov_9fa48("18968", "18969"), reporter.banned)) {
      if (stryMutAct_9fa48("18970")) {
        {}
      } else {
        stryCov_9fa48("18970");
        throw new Error(stryMutAct_9fa48("18971") ? "" : (stryCov_9fa48("18971"), '[[error:user-banned]]'));
      }
    }

    // Disallow flagging of profiles/content of privileged users
    const [targetPrivileged, reporterPrivileged] = await Promise.all(stryMutAct_9fa48("18972") ? [] : (stryCov_9fa48("18972"), [user.isPrivileged(target.uid), user.isPrivileged(reporter.uid)]));
    if (stryMutAct_9fa48("18975") ? targetPrivileged || !reporterPrivileged : stryMutAct_9fa48("18974") ? false : stryMutAct_9fa48("18973") ? true : (stryCov_9fa48("18973", "18974", "18975"), targetPrivileged && (stryMutAct_9fa48("18976") ? reporterPrivileged : (stryCov_9fa48("18976"), !reporterPrivileged)))) {
      if (stryMutAct_9fa48("18977")) {
        {}
      } else {
        stryCov_9fa48("18977");
        throw new Error(stryMutAct_9fa48("18978") ? "" : (stryCov_9fa48("18978"), '[[error:cant-flag-privileged]]'));
      }
    }
    if (stryMutAct_9fa48("18981") ? payload.type !== 'post' : stryMutAct_9fa48("18980") ? false : stryMutAct_9fa48("18979") ? true : (stryCov_9fa48("18979", "18980", "18981"), payload.type === (stryMutAct_9fa48("18982") ? "" : (stryCov_9fa48("18982"), 'post')))) {
      if (stryMutAct_9fa48("18983")) {
        {}
      } else {
        stryCov_9fa48("18983");
        const editable = await privileges.posts.canEdit(payload.id, payload.uid);
        if (stryMutAct_9fa48("18986") ? !editable.flag && !meta.config['reputation:disabled'] || reporter.reputation < meta.config['min:rep:flag'] : stryMutAct_9fa48("18985") ? false : stryMutAct_9fa48("18984") ? true : (stryCov_9fa48("18984", "18985", "18986"), (stryMutAct_9fa48("18988") ? !editable.flag || !meta.config['reputation:disabled'] : stryMutAct_9fa48("18987") ? true : (stryCov_9fa48("18987", "18988"), (stryMutAct_9fa48("18989") ? editable.flag : (stryCov_9fa48("18989"), !editable.flag)) && (stryMutAct_9fa48("18990") ? meta.config['reputation:disabled'] : (stryCov_9fa48("18990"), !meta.config[stryMutAct_9fa48("18991") ? "" : (stryCov_9fa48("18991"), 'reputation:disabled')])))) && (stryMutAct_9fa48("18994") ? reporter.reputation >= meta.config['min:rep:flag'] : stryMutAct_9fa48("18993") ? reporter.reputation <= meta.config['min:rep:flag'] : stryMutAct_9fa48("18992") ? true : (stryCov_9fa48("18992", "18993", "18994"), reporter.reputation < meta.config[stryMutAct_9fa48("18995") ? "" : (stryCov_9fa48("18995"), 'min:rep:flag')])))) {
          if (stryMutAct_9fa48("18996")) {
            {}
          } else {
            stryCov_9fa48("18996");
            throw new Error(stryMutAct_9fa48("18997") ? `` : (stryCov_9fa48("18997"), `[[error:not-enough-reputation-to-flag, ${meta.config[stryMutAct_9fa48("18998") ? "" : (stryCov_9fa48("18998"), 'min:rep:flag')]}]]`));
          }
        }
      }
    } else if (stryMutAct_9fa48("19001") ? payload.type !== 'user' : stryMutAct_9fa48("19000") ? false : stryMutAct_9fa48("18999") ? true : (stryCov_9fa48("18999", "19000", "19001"), payload.type === (stryMutAct_9fa48("19002") ? "" : (stryCov_9fa48("19002"), 'user')))) {
      if (stryMutAct_9fa48("19003")) {
        {}
      } else {
        stryCov_9fa48("19003");
        if (stryMutAct_9fa48("19006") ? parseInt(payload.id, 10) !== parseInt(payload.uid, 10) : stryMutAct_9fa48("19005") ? false : stryMutAct_9fa48("19004") ? true : (stryCov_9fa48("19004", "19005", "19006"), parseInt(payload.id, 10) === parseInt(payload.uid, 10))) {
          if (stryMutAct_9fa48("19007")) {
            {}
          } else {
            stryCov_9fa48("19007");
            throw new Error(stryMutAct_9fa48("19008") ? "" : (stryCov_9fa48("19008"), '[[error:cant-flag-self]]'));
          }
        }
        const editable = await privileges.users.canEdit(payload.uid, payload.id);
        if (stryMutAct_9fa48("19011") ? !editable && !meta.config['reputation:disabled'] || reporter.reputation < meta.config['min:rep:flag'] : stryMutAct_9fa48("19010") ? false : stryMutAct_9fa48("19009") ? true : (stryCov_9fa48("19009", "19010", "19011"), (stryMutAct_9fa48("19013") ? !editable || !meta.config['reputation:disabled'] : stryMutAct_9fa48("19012") ? true : (stryCov_9fa48("19012", "19013"), (stryMutAct_9fa48("19014") ? editable : (stryCov_9fa48("19014"), !editable)) && (stryMutAct_9fa48("19015") ? meta.config['reputation:disabled'] : (stryCov_9fa48("19015"), !meta.config[stryMutAct_9fa48("19016") ? "" : (stryCov_9fa48("19016"), 'reputation:disabled')])))) && (stryMutAct_9fa48("19019") ? reporter.reputation >= meta.config['min:rep:flag'] : stryMutAct_9fa48("19018") ? reporter.reputation <= meta.config['min:rep:flag'] : stryMutAct_9fa48("19017") ? true : (stryCov_9fa48("19017", "19018", "19019"), reporter.reputation < meta.config[stryMutAct_9fa48("19020") ? "" : (stryCov_9fa48("19020"), 'min:rep:flag')])))) {
          if (stryMutAct_9fa48("19021")) {
            {}
          } else {
            stryCov_9fa48("19021");
            throw new Error(stryMutAct_9fa48("19022") ? `` : (stryCov_9fa48("19022"), `[[error:not-enough-reputation-to-flag, ${meta.config[stryMutAct_9fa48("19023") ? "" : (stryCov_9fa48("19023"), 'min:rep:flag')]}]]`));
          }
        }
      }
    } else {
      if (stryMutAct_9fa48("19024")) {
        {}
      } else {
        stryCov_9fa48("19024");
        throw new Error(stryMutAct_9fa48("19025") ? "" : (stryCov_9fa48("19025"), '[[error:invalid-data]]'));
      }
    }
  }
};
Flags.getNotes = async function (flagId) {
  if (stryMutAct_9fa48("19026")) {
    {}
  } else {
    stryCov_9fa48("19026");
    let notes = await db.getSortedSetRevRangeWithScores(stryMutAct_9fa48("19027") ? `` : (stryCov_9fa48("19027"), `flag:${flagId}:notes`), 0, stryMutAct_9fa48("19028") ? +1 : (stryCov_9fa48("19028"), -1));
    notes = await modifyNotes(notes);
    return notes;
  }
};
Flags.getNote = async function (flagId, datetime) {
  if (stryMutAct_9fa48("19029")) {
    {}
  } else {
    stryCov_9fa48("19029");
    datetime = parseInt(datetime, 10);
    if (stryMutAct_9fa48("19031") ? false : stryMutAct_9fa48("19030") ? true : (stryCov_9fa48("19030", "19031"), isNaN(datetime))) {
      if (stryMutAct_9fa48("19032")) {
        {}
      } else {
        stryCov_9fa48("19032");
        throw new Error(stryMutAct_9fa48("19033") ? "" : (stryCov_9fa48("19033"), '[[error:invalid-data]]'));
      }
    }
    let notes = await db.getSortedSetRangeByScoreWithScores(stryMutAct_9fa48("19034") ? `` : (stryCov_9fa48("19034"), `flag:${flagId}:notes`), 0, 1, datetime, datetime);
    if (stryMutAct_9fa48("19037") ? false : stryMutAct_9fa48("19036") ? true : stryMutAct_9fa48("19035") ? notes.length : (stryCov_9fa48("19035", "19036", "19037"), !notes.length)) {
      if (stryMutAct_9fa48("19038")) {
        {}
      } else {
        stryCov_9fa48("19038");
        throw new Error(stryMutAct_9fa48("19039") ? "" : (stryCov_9fa48("19039"), '[[error:invalid-data]]'));
      }
    }
    notes = await modifyNotes(notes);
    return notes[0];
  }
};
Flags.getFlagIdByTarget = async function (type, id) {
  if (stryMutAct_9fa48("19040")) {
    {}
  } else {
    stryCov_9fa48("19040");
    let method;
    switch (type) {
      case stryMutAct_9fa48("19042") ? "" : (stryCov_9fa48("19042"), 'post'):
        if (stryMutAct_9fa48("19041")) {} else {
          stryCov_9fa48("19041");
          method = posts.getPostField;
          break;
        }
      case stryMutAct_9fa48("19044") ? "" : (stryCov_9fa48("19044"), 'user'):
        if (stryMutAct_9fa48("19043")) {} else {
          stryCov_9fa48("19043");
          method = user.getUserField;
          break;
        }
      default:
        if (stryMutAct_9fa48("19045")) {} else {
          stryCov_9fa48("19045");
          throw new Error(stryMutAct_9fa48("19046") ? "" : (stryCov_9fa48("19046"), '[[error:invalid-data]]'));
        }
    }
    return await method(id, stryMutAct_9fa48("19047") ? "" : (stryCov_9fa48("19047"), 'flagId'));
  }
};
async function modifyNotes(notes) {
  if (stryMutAct_9fa48("19048")) {
    {}
  } else {
    stryCov_9fa48("19048");
    const uids = stryMutAct_9fa48("19049") ? ["Stryker was here"] : (stryCov_9fa48("19049"), []);
    notes = notes.map(note => {
      if (stryMutAct_9fa48("19050")) {
        {}
      } else {
        stryCov_9fa48("19050");
        const noteObj = JSON.parse(note.value);
        uids.push(noteObj[0]);
        return stryMutAct_9fa48("19051") ? {} : (stryCov_9fa48("19051"), {
          uid: noteObj[0],
          content: noteObj[1],
          datetime: note.score,
          datetimeISO: utils.toISOString(note.score)
        });
      }
    });
    const userData = await user.getUsersFields(uids, stryMutAct_9fa48("19052") ? [] : (stryCov_9fa48("19052"), [stryMutAct_9fa48("19053") ? "" : (stryCov_9fa48("19053"), 'username'), stryMutAct_9fa48("19054") ? "" : (stryCov_9fa48("19054"), 'userslug'), stryMutAct_9fa48("19055") ? "" : (stryCov_9fa48("19055"), 'picture')]));
    return notes.map((note, idx) => {
      if (stryMutAct_9fa48("19056")) {
        {}
      } else {
        stryCov_9fa48("19056");
        note.user = userData[idx];
        note.content = validator.escape(note.content);
        return note;
      }
    });
  }
}
Flags.deleteNote = async function (flagId, datetime) {
  if (stryMutAct_9fa48("19057")) {
    {}
  } else {
    stryCov_9fa48("19057");
    datetime = parseInt(datetime, 10);
    if (stryMutAct_9fa48("19059") ? false : stryMutAct_9fa48("19058") ? true : (stryCov_9fa48("19058", "19059"), isNaN(datetime))) {
      if (stryMutAct_9fa48("19060")) {
        {}
      } else {
        stryCov_9fa48("19060");
        throw new Error(stryMutAct_9fa48("19061") ? "" : (stryCov_9fa48("19061"), '[[error:invalid-data]]'));
      }
    }
    const note = await db.getSortedSetRangeByScore(stryMutAct_9fa48("19062") ? `` : (stryCov_9fa48("19062"), `flag:${flagId}:notes`), 0, 1, datetime, datetime);
    if (stryMutAct_9fa48("19065") ? false : stryMutAct_9fa48("19064") ? true : stryMutAct_9fa48("19063") ? note.length : (stryCov_9fa48("19063", "19064", "19065"), !note.length)) {
      if (stryMutAct_9fa48("19066")) {
        {}
      } else {
        stryCov_9fa48("19066");
        throw new Error(stryMutAct_9fa48("19067") ? "" : (stryCov_9fa48("19067"), '[[error:invalid-data]]'));
      }
    }
    await db.sortedSetRemove(stryMutAct_9fa48("19068") ? `` : (stryCov_9fa48("19068"), `flag:${flagId}:notes`), note[0]);
  }
};
Flags.create = async function (type, id, uid, reason, timestamp, forceFlag = stryMutAct_9fa48("19069") ? true : (stryCov_9fa48("19069"), false)) {
  if (stryMutAct_9fa48("19070")) {
    {}
  } else {
    stryCov_9fa48("19070");
    let doHistoryAppend = stryMutAct_9fa48("19071") ? true : (stryCov_9fa48("19071"), false);
    if (stryMutAct_9fa48("19074") ? false : stryMutAct_9fa48("19073") ? true : stryMutAct_9fa48("19072") ? timestamp : (stryCov_9fa48("19072", "19073", "19074"), !timestamp)) {
      if (stryMutAct_9fa48("19075")) {
        {}
      } else {
        stryCov_9fa48("19075");
        timestamp = Date.now();
        doHistoryAppend = stryMutAct_9fa48("19076") ? false : (stryCov_9fa48("19076"), true);
      }
    }
    const [flagExists, targetExists,, targetFlagged, targetUid, targetCid] = await Promise.all(stryMutAct_9fa48("19077") ? [] : (stryCov_9fa48("19077"), [
    // Sanity checks
    Flags.exists(type, id, uid), Flags.targetExists(type, id), Flags.canFlag(type, id, uid, forceFlag), Flags.targetFlagged(type, id),
    // Extra data for zset insertion
    Flags.getTargetUid(type, id), Flags.getTargetCid(type, id)]));
    if (stryMutAct_9fa48("19080") ? !forceFlag || flagExists : stryMutAct_9fa48("19079") ? false : stryMutAct_9fa48("19078") ? true : (stryCov_9fa48("19078", "19079", "19080"), (stryMutAct_9fa48("19081") ? forceFlag : (stryCov_9fa48("19081"), !forceFlag)) && flagExists)) {
      if (stryMutAct_9fa48("19082")) {
        {}
      } else {
        stryCov_9fa48("19082");
        throw new Error(stryMutAct_9fa48("19083") ? `` : (stryCov_9fa48("19083"), `[[error:${type}-already-flagged]]`));
      }
    } else if (stryMutAct_9fa48("19086") ? false : stryMutAct_9fa48("19085") ? true : stryMutAct_9fa48("19084") ? targetExists : (stryCov_9fa48("19084", "19085", "19086"), !targetExists)) {
      if (stryMutAct_9fa48("19087")) {
        {}
      } else {
        stryCov_9fa48("19087");
        throw new Error(stryMutAct_9fa48("19088") ? "" : (stryCov_9fa48("19088"), '[[error:invalid-data]]'));
      }
    }

    // If the flag already exists, just add the report
    if (stryMutAct_9fa48("19090") ? false : stryMutAct_9fa48("19089") ? true : (stryCov_9fa48("19089", "19090"), targetFlagged)) {
      if (stryMutAct_9fa48("19091")) {
        {}
      } else {
        stryCov_9fa48("19091");
        const flagId = await Flags.getFlagIdByTarget(type, id);
        await Promise.all(stryMutAct_9fa48("19092") ? [] : (stryCov_9fa48("19092"), [Flags.addReport(flagId, type, id, uid, reason, timestamp), Flags.update(flagId, uid, stryMutAct_9fa48("19093") ? {} : (stryCov_9fa48("19093"), {
          state: stryMutAct_9fa48("19094") ? "" : (stryCov_9fa48("19094"), 'open')
        }))]));
        return await Flags.get(flagId);
      }
    }
    const flagId = await db.incrObjectField(stryMutAct_9fa48("19095") ? "" : (stryCov_9fa48("19095"), 'global'), stryMutAct_9fa48("19096") ? "" : (stryCov_9fa48("19096"), 'nextFlagId'));
    const batched = stryMutAct_9fa48("19097") ? ["Stryker was here"] : (stryCov_9fa48("19097"), []);
    batched.push(db.setObject(stryMutAct_9fa48("19098") ? `` : (stryCov_9fa48("19098"), `flag:${flagId}`), stryMutAct_9fa48("19099") ? {} : (stryCov_9fa48("19099"), {
      flagId: flagId,
      type: type,
      targetId: id,
      targetUid: targetUid,
      datetime: timestamp
    })), Flags.addReport(flagId, type, id, uid, reason, timestamp), db.sortedSetAdd(stryMutAct_9fa48("19100") ? "" : (stryCov_9fa48("19100"), 'flags:datetime'), timestamp, flagId),
    // by time, the default
    db.sortedSetAdd(stryMutAct_9fa48("19101") ? `` : (stryCov_9fa48("19101"), `flags:byType:${type}`), timestamp, flagId),
    // by flag type
    db.sortedSetIncrBy(stryMutAct_9fa48("19102") ? "" : (stryCov_9fa48("19102"), 'flags:byTarget'), 1, (stryMutAct_9fa48("19103") ? [] : (stryCov_9fa48("19103"), [type, id])).join(stryMutAct_9fa48("19104") ? "" : (stryCov_9fa48("19104"), ':'))),
    // by flag target (score is count)
    analytics.increment(stryMutAct_9fa48("19105") ? "" : (stryCov_9fa48("19105"), 'flags')) // some fancy analytics
    );

    if (stryMutAct_9fa48("19107") ? false : stryMutAct_9fa48("19106") ? true : (stryCov_9fa48("19106", "19107"), targetUid)) {
      if (stryMutAct_9fa48("19108")) {
        {}
      } else {
        stryCov_9fa48("19108");
        batched.push(db.sortedSetAdd(stryMutAct_9fa48("19109") ? `` : (stryCov_9fa48("19109"), `flags:byTargetUid:${targetUid}`), timestamp, flagId)); // by target uid
      }
    }

    if (stryMutAct_9fa48("19111") ? false : stryMutAct_9fa48("19110") ? true : (stryCov_9fa48("19110", "19111"), targetCid)) {
      if (stryMutAct_9fa48("19112")) {
        {}
      } else {
        stryCov_9fa48("19112");
        batched.push(db.sortedSetAdd(stryMutAct_9fa48("19113") ? `` : (stryCov_9fa48("19113"), `flags:byCid:${targetCid}`), timestamp, flagId)); // by target cid
      }
    }

    if (stryMutAct_9fa48("19116") ? type !== 'post' : stryMutAct_9fa48("19115") ? false : stryMutAct_9fa48("19114") ? true : (stryCov_9fa48("19114", "19115", "19116"), type === (stryMutAct_9fa48("19117") ? "" : (stryCov_9fa48("19117"), 'post')))) {
      if (stryMutAct_9fa48("19118")) {
        {}
      } else {
        stryCov_9fa48("19118");
        batched.push(db.sortedSetAdd(stryMutAct_9fa48("19119") ? `` : (stryCov_9fa48("19119"), `flags:byPid:${id}`), timestamp, flagId),
        // by target pid
        posts.setPostField(id, stryMutAct_9fa48("19120") ? "" : (stryCov_9fa48("19120"), 'flagId'), flagId));
        if (stryMutAct_9fa48("19123") ? targetUid || parseInt(targetUid, 10) !== parseInt(uid, 10) : stryMutAct_9fa48("19122") ? false : stryMutAct_9fa48("19121") ? true : (stryCov_9fa48("19121", "19122", "19123"), targetUid && (stryMutAct_9fa48("19125") ? parseInt(targetUid, 10) === parseInt(uid, 10) : stryMutAct_9fa48("19124") ? true : (stryCov_9fa48("19124", "19125"), parseInt(targetUid, 10) !== parseInt(uid, 10))))) {
          if (stryMutAct_9fa48("19126")) {
            {}
          } else {
            stryCov_9fa48("19126");
            batched.push(user.incrementUserFlagsBy(targetUid, 1));
          }
        }
      }
    } else if (stryMutAct_9fa48("19129") ? type !== 'user' : stryMutAct_9fa48("19128") ? false : stryMutAct_9fa48("19127") ? true : (stryCov_9fa48("19127", "19128", "19129"), type === (stryMutAct_9fa48("19130") ? "" : (stryCov_9fa48("19130"), 'user')))) {
      if (stryMutAct_9fa48("19131")) {
        {}
      } else {
        stryCov_9fa48("19131");
        batched.push(user.setUserField(id, stryMutAct_9fa48("19132") ? "" : (stryCov_9fa48("19132"), 'flagId'), flagId));
      }
    }

    // Run all the database calls in one single batched call...
    await Promise.all(batched);
    if (stryMutAct_9fa48("19134") ? false : stryMutAct_9fa48("19133") ? true : (stryCov_9fa48("19133", "19134"), doHistoryAppend)) {
      if (stryMutAct_9fa48("19135")) {
        {}
      } else {
        stryCov_9fa48("19135");
        await Flags.update(flagId, uid, stryMutAct_9fa48("19136") ? {} : (stryCov_9fa48("19136"), {
          state: stryMutAct_9fa48("19137") ? "" : (stryCov_9fa48("19137"), 'open')
        }));
      }
    }
    const flagObj = await Flags.get(flagId);
    plugins.hooks.fire(stryMutAct_9fa48("19138") ? "" : (stryCov_9fa48("19138"), 'action:flags.create'), stryMutAct_9fa48("19139") ? {} : (stryCov_9fa48("19139"), {
      flag: flagObj
    }));
    return flagObj;
  }
};
Flags.purge = async function (flagIds) {
  if (stryMutAct_9fa48("19140")) {
    {}
  } else {
    stryCov_9fa48("19140");
    const flagData = stryMutAct_9fa48("19141") ? await db.getObjects(flagIds.map(flagId => `flag:${flagId}`)) : (stryCov_9fa48("19141"), (await db.getObjects(flagIds.map(stryMutAct_9fa48("19142") ? () => undefined : (stryCov_9fa48("19142"), flagId => stryMutAct_9fa48("19143") ? `` : (stryCov_9fa48("19143"), `flag:${flagId}`))))).filter(Boolean));
    const postFlags = stryMutAct_9fa48("19144") ? flagData : (stryCov_9fa48("19144"), flagData.filter(stryMutAct_9fa48("19145") ? () => undefined : (stryCov_9fa48("19145"), flagObj => stryMutAct_9fa48("19148") ? flagObj.type !== 'post' : stryMutAct_9fa48("19147") ? false : stryMutAct_9fa48("19146") ? true : (stryCov_9fa48("19146", "19147", "19148"), flagObj.type === (stryMutAct_9fa48("19149") ? "" : (stryCov_9fa48("19149"), 'post'))))));
    const userFlags = stryMutAct_9fa48("19150") ? flagData : (stryCov_9fa48("19150"), flagData.filter(stryMutAct_9fa48("19151") ? () => undefined : (stryCov_9fa48("19151"), flagObj => stryMutAct_9fa48("19154") ? flagObj.type !== 'user' : stryMutAct_9fa48("19153") ? false : stryMutAct_9fa48("19152") ? true : (stryCov_9fa48("19152", "19153", "19154"), flagObj.type === (stryMutAct_9fa48("19155") ? "" : (stryCov_9fa48("19155"), 'user'))))));
    const assignedFlags = stryMutAct_9fa48("19156") ? flagData : (stryCov_9fa48("19156"), flagData.filter(stryMutAct_9fa48("19157") ? () => undefined : (stryCov_9fa48("19157"), flagObj => stryMutAct_9fa48("19158") ? !flagObj.assignee : (stryCov_9fa48("19158"), !(stryMutAct_9fa48("19159") ? flagObj.assignee : (stryCov_9fa48("19159"), !flagObj.assignee))))));
    const [allReports, cids] = await Promise.all(stryMutAct_9fa48("19160") ? [] : (stryCov_9fa48("19160"), [db.getSortedSetsMembers(flagData.map(stryMutAct_9fa48("19161") ? () => undefined : (stryCov_9fa48("19161"), flagObj => stryMutAct_9fa48("19162") ? `` : (stryCov_9fa48("19162"), `flag:${flagObj.flagId}:reports`)))), categories.getAllCidsFromSet(stryMutAct_9fa48("19163") ? "" : (stryCov_9fa48("19163"), 'categories:cid'))]));
    const allReporterUids = allReports.map(stryMutAct_9fa48("19164") ? () => undefined : (stryCov_9fa48("19164"), flagReports => flagReports.map(stryMutAct_9fa48("19165") ? () => undefined : (stryCov_9fa48("19165"), report => stryMutAct_9fa48("19168") ? report || report.split(';')[0] : stryMutAct_9fa48("19167") ? false : stryMutAct_9fa48("19166") ? true : (stryCov_9fa48("19166", "19167", "19168"), report && report.split(stryMutAct_9fa48("19169") ? "" : (stryCov_9fa48("19169"), ';'))[0])))));
    const removeReporters = stryMutAct_9fa48("19170") ? ["Stryker was here"] : (stryCov_9fa48("19170"), []);
    flagData.forEach((flagObj, i) => {
      if (stryMutAct_9fa48("19171")) {
        {}
      } else {
        stryCov_9fa48("19171");
        if (stryMutAct_9fa48("19173") ? false : stryMutAct_9fa48("19172") ? true : (stryCov_9fa48("19172", "19173"), Array.isArray(allReporterUids[i]))) {
          if (stryMutAct_9fa48("19174")) {
            {}
          } else {
            stryCov_9fa48("19174");
            allReporterUids[i].forEach(uid => {
              if (stryMutAct_9fa48("19175")) {
                {}
              } else {
                stryCov_9fa48("19175");
                removeReporters.push(stryMutAct_9fa48("19176") ? [] : (stryCov_9fa48("19176"), [stryMutAct_9fa48("19177") ? `` : (stryCov_9fa48("19177"), `flags:hash`), (stryMutAct_9fa48("19178") ? [] : (stryCov_9fa48("19178"), [flagObj.type, flagObj.targetId, uid])).join(stryMutAct_9fa48("19179") ? "" : (stryCov_9fa48("19179"), ':'))]));
                removeReporters.push(stryMutAct_9fa48("19180") ? [] : (stryCov_9fa48("19180"), [stryMutAct_9fa48("19181") ? `` : (stryCov_9fa48("19181"), `flags:byReporter:${uid}`), flagObj.flagId]));
              }
            });
          }
        }
      }
    });
    await Promise.all(stryMutAct_9fa48("19182") ? [] : (stryCov_9fa48("19182"), [db.sortedSetRemoveBulk(stryMutAct_9fa48("19183") ? [] : (stryCov_9fa48("19183"), [...flagData.map(stryMutAct_9fa48("19184") ? () => undefined : (stryCov_9fa48("19184"), flagObj => stryMutAct_9fa48("19185") ? [] : (stryCov_9fa48("19185"), [stryMutAct_9fa48("19186") ? `` : (stryCov_9fa48("19186"), `flags:byType:${flagObj.type}`), flagObj.flagId]))), ...flagData.map(stryMutAct_9fa48("19187") ? () => undefined : (stryCov_9fa48("19187"), flagObj => stryMutAct_9fa48("19188") ? [] : (stryCov_9fa48("19188"), [stryMutAct_9fa48("19189") ? `` : (stryCov_9fa48("19189"), `flags:byState:${flagObj.state}`), flagObj.flagId]))), ...removeReporters, ...postFlags.map(stryMutAct_9fa48("19190") ? () => undefined : (stryCov_9fa48("19190"), flagObj => stryMutAct_9fa48("19191") ? [] : (stryCov_9fa48("19191"), [stryMutAct_9fa48("19192") ? `` : (stryCov_9fa48("19192"), `flags:byPid:${flagObj.targetId}`), flagObj.flagId]))), ...assignedFlags.map(stryMutAct_9fa48("19193") ? () => undefined : (stryCov_9fa48("19193"), flagObj => stryMutAct_9fa48("19194") ? [] : (stryCov_9fa48("19194"), [stryMutAct_9fa48("19195") ? `` : (stryCov_9fa48("19195"), `flags:byAssignee:${flagObj.assignee}`), flagObj.flagId]))), ...userFlags.map(stryMutAct_9fa48("19196") ? () => undefined : (stryCov_9fa48("19196"), flagObj => stryMutAct_9fa48("19197") ? [] : (stryCov_9fa48("19197"), [stryMutAct_9fa48("19198") ? `` : (stryCov_9fa48("19198"), `flags:byTargetUid:${flagObj.targetUid}`), flagObj.flagId])))])), db.deleteObjectFields(postFlags.map(stryMutAct_9fa48("19199") ? () => undefined : (stryCov_9fa48("19199"), flagObj => stryMutAct_9fa48("19200") ? `` : (stryCov_9fa48("19200"), `post:${flagObj.targetId}`)), stryMutAct_9fa48("19201") ? [] : (stryCov_9fa48("19201"), [stryMutAct_9fa48("19202") ? "" : (stryCov_9fa48("19202"), 'flagId')]))), db.deleteObjectFields(userFlags.map(stryMutAct_9fa48("19203") ? () => undefined : (stryCov_9fa48("19203"), flagObj => stryMutAct_9fa48("19204") ? `` : (stryCov_9fa48("19204"), `user:${flagObj.targetId}`)), stryMutAct_9fa48("19205") ? [] : (stryCov_9fa48("19205"), [stryMutAct_9fa48("19206") ? "" : (stryCov_9fa48("19206"), 'flagId')]))), db.deleteAll(stryMutAct_9fa48("19207") ? [] : (stryCov_9fa48("19207"), [...flagIds.map(stryMutAct_9fa48("19208") ? () => undefined : (stryCov_9fa48("19208"), flagId => stryMutAct_9fa48("19209") ? `` : (stryCov_9fa48("19209"), `flag:${flagId}`))), ...flagIds.map(stryMutAct_9fa48("19210") ? () => undefined : (stryCov_9fa48("19210"), flagId => stryMutAct_9fa48("19211") ? `` : (stryCov_9fa48("19211"), `flag:${flagId}:notes`))), ...flagIds.map(stryMutAct_9fa48("19212") ? () => undefined : (stryCov_9fa48("19212"), flagId => stryMutAct_9fa48("19213") ? `` : (stryCov_9fa48("19213"), `flag:${flagId}:reports`))), ...flagIds.map(stryMutAct_9fa48("19214") ? () => undefined : (stryCov_9fa48("19214"), flagId => stryMutAct_9fa48("19215") ? `` : (stryCov_9fa48("19215"), `flag:${flagId}:history`)))])), db.sortedSetRemove(cids.map(stryMutAct_9fa48("19216") ? () => undefined : (stryCov_9fa48("19216"), cid => stryMutAct_9fa48("19217") ? `` : (stryCov_9fa48("19217"), `flags:byCid:${cid}`))), flagIds), db.sortedSetRemove(stryMutAct_9fa48("19218") ? "" : (stryCov_9fa48("19218"), 'flags:datetime'), flagIds), db.sortedSetRemove(stryMutAct_9fa48("19219") ? "" : (stryCov_9fa48("19219"), 'flags:byTarget'), flagData.map(stryMutAct_9fa48("19220") ? () => undefined : (stryCov_9fa48("19220"), flagObj => (stryMutAct_9fa48("19221") ? [] : (stryCov_9fa48("19221"), [flagObj.type, flagObj.targetId])).join(stryMutAct_9fa48("19222") ? "" : (stryCov_9fa48("19222"), ':')))))]));
  }
};
Flags.getReports = async function (flagId) {
  if (stryMutAct_9fa48("19223")) {
    {}
  } else {
    stryCov_9fa48("19223");
    const payload = await db.getSortedSetRevRangeWithScores(stryMutAct_9fa48("19224") ? `` : (stryCov_9fa48("19224"), `flag:${flagId}:reports`), 0, stryMutAct_9fa48("19225") ? +1 : (stryCov_9fa48("19225"), -1));
    const [reports, uids] = payload.reduce((memo, cur) => {
      if (stryMutAct_9fa48("19226")) {
        {}
      } else {
        stryCov_9fa48("19226");
        const value = cur.value.split(stryMutAct_9fa48("19227") ? "" : (stryCov_9fa48("19227"), ';'));
        memo[1].push(value.shift());
        cur.value = validator.escape(String(value.join(stryMutAct_9fa48("19228") ? "" : (stryCov_9fa48("19228"), ';'))));
        memo[0].push(cur);
        return memo;
      }
    }, stryMutAct_9fa48("19229") ? [] : (stryCov_9fa48("19229"), [stryMutAct_9fa48("19230") ? ["Stryker was here"] : (stryCov_9fa48("19230"), []), stryMutAct_9fa48("19231") ? ["Stryker was here"] : (stryCov_9fa48("19231"), [])]));
    await Promise.all(reports.map(async (report, idx) => {
      if (stryMutAct_9fa48("19232")) {
        {}
      } else {
        stryCov_9fa48("19232");
        report.timestamp = report.score;
        report.timestampISO = new Date(report.score).toISOString();
        delete report.score;
        report.reporter = await user.getUserFields(uids[idx], stryMutAct_9fa48("19233") ? [] : (stryCov_9fa48("19233"), [stryMutAct_9fa48("19234") ? "" : (stryCov_9fa48("19234"), 'username'), stryMutAct_9fa48("19235") ? "" : (stryCov_9fa48("19235"), 'userslug'), stryMutAct_9fa48("19236") ? "" : (stryCov_9fa48("19236"), 'picture'), stryMutAct_9fa48("19237") ? "" : (stryCov_9fa48("19237"), 'reputation')]));
      }
    }));
    return reports;
  }
};
Flags.addReport = async function (flagId, type, id, uid, reason, timestamp) {
  if (stryMutAct_9fa48("19238")) {
    {}
  } else {
    stryCov_9fa48("19238");
    await db.sortedSetAddBulk(stryMutAct_9fa48("19239") ? [] : (stryCov_9fa48("19239"), [stryMutAct_9fa48("19240") ? [] : (stryCov_9fa48("19240"), [stryMutAct_9fa48("19241") ? `` : (stryCov_9fa48("19241"), `flags:byReporter:${uid}`), timestamp, flagId]), stryMutAct_9fa48("19242") ? [] : (stryCov_9fa48("19242"), [stryMutAct_9fa48("19243") ? `` : (stryCov_9fa48("19243"), `flag:${flagId}:reports`), timestamp, (stryMutAct_9fa48("19244") ? [] : (stryCov_9fa48("19244"), [uid, reason])).join(stryMutAct_9fa48("19245") ? "" : (stryCov_9fa48("19245"), ';'))]), stryMutAct_9fa48("19246") ? [] : (stryCov_9fa48("19246"), [stryMutAct_9fa48("19247") ? "" : (stryCov_9fa48("19247"), 'flags:hash'), flagId, (stryMutAct_9fa48("19248") ? [] : (stryCov_9fa48("19248"), [type, id, uid])).join(stryMutAct_9fa48("19249") ? "" : (stryCov_9fa48("19249"), ':'))])]));
    plugins.hooks.fire(stryMutAct_9fa48("19250") ? "" : (stryCov_9fa48("19250"), 'action:flags.addReport'), stryMutAct_9fa48("19251") ? {} : (stryCov_9fa48("19251"), {
      flagId,
      type,
      id,
      uid,
      reason,
      timestamp
    }));
  }
};
Flags.exists = async function (type, id, uid) {
  if (stryMutAct_9fa48("19252")) {
    {}
  } else {
    stryCov_9fa48("19252");
    return await db.isSortedSetMember(stryMutAct_9fa48("19253") ? "" : (stryCov_9fa48("19253"), 'flags:hash'), (stryMutAct_9fa48("19254") ? [] : (stryCov_9fa48("19254"), [type, id, uid])).join(stryMutAct_9fa48("19255") ? "" : (stryCov_9fa48("19255"), ':')));
  }
};
Flags.canView = async (flagId, uid) => {
  if (stryMutAct_9fa48("19256")) {
    {}
  } else {
    stryCov_9fa48("19256");
    const exists = await db.isSortedSetMember(stryMutAct_9fa48("19257") ? "" : (stryCov_9fa48("19257"), 'flags:datetime'), flagId);
    if (stryMutAct_9fa48("19260") ? false : stryMutAct_9fa48("19259") ? true : stryMutAct_9fa48("19258") ? exists : (stryCov_9fa48("19258", "19259", "19260"), !exists)) {
      if (stryMutAct_9fa48("19261")) {
        {}
      } else {
        stryCov_9fa48("19261");
        return stryMutAct_9fa48("19262") ? true : (stryCov_9fa48("19262"), false);
      }
    }
    const [{
      type,
      targetId
    }, isAdminOrGlobalMod] = await Promise.all(stryMutAct_9fa48("19263") ? [] : (stryCov_9fa48("19263"), [db.getObject(stryMutAct_9fa48("19264") ? `` : (stryCov_9fa48("19264"), `flag:${flagId}`)), user.isAdminOrGlobalMod(uid)]));
    if (stryMutAct_9fa48("19267") ? type !== 'post' : stryMutAct_9fa48("19266") ? false : stryMutAct_9fa48("19265") ? true : (stryCov_9fa48("19265", "19266", "19267"), type === (stryMutAct_9fa48("19268") ? "" : (stryCov_9fa48("19268"), 'post')))) {
      if (stryMutAct_9fa48("19269")) {
        {}
      } else {
        stryCov_9fa48("19269");
        const cid = await Flags.getTargetCid(type, targetId);
        const isModerator = await user.isModerator(uid, cid);
        return stryMutAct_9fa48("19272") ? isAdminOrGlobalMod && isModerator : stryMutAct_9fa48("19271") ? false : stryMutAct_9fa48("19270") ? true : (stryCov_9fa48("19270", "19271", "19272"), isAdminOrGlobalMod || isModerator);
      }
    }
    return isAdminOrGlobalMod;
  }
};
Flags.canFlag = async function (type, id, uid, skipLimitCheck = stryMutAct_9fa48("19273") ? true : (stryCov_9fa48("19273"), false)) {
  if (stryMutAct_9fa48("19274")) {
    {}
  } else {
    stryCov_9fa48("19274");
    const limit = meta.config[stryMutAct_9fa48("19275") ? "" : (stryCov_9fa48("19275"), 'flags:limitPerTarget')];
    if (stryMutAct_9fa48("19278") ? !skipLimitCheck || limit > 0 : stryMutAct_9fa48("19277") ? false : stryMutAct_9fa48("19276") ? true : (stryCov_9fa48("19276", "19277", "19278"), (stryMutAct_9fa48("19279") ? skipLimitCheck : (stryCov_9fa48("19279"), !skipLimitCheck)) && (stryMutAct_9fa48("19282") ? limit <= 0 : stryMutAct_9fa48("19281") ? limit >= 0 : stryMutAct_9fa48("19280") ? true : (stryCov_9fa48("19280", "19281", "19282"), limit > 0)))) {
      if (stryMutAct_9fa48("19283")) {
        {}
      } else {
        stryCov_9fa48("19283");
        const score = await db.sortedSetScore(stryMutAct_9fa48("19284") ? "" : (stryCov_9fa48("19284"), 'flags:byTarget'), stryMutAct_9fa48("19285") ? `` : (stryCov_9fa48("19285"), `${type}:${id}`));
        if (stryMutAct_9fa48("19289") ? score < limit : stryMutAct_9fa48("19288") ? score > limit : stryMutAct_9fa48("19287") ? false : stryMutAct_9fa48("19286") ? true : (stryCov_9fa48("19286", "19287", "19288", "19289"), score >= limit)) {
          if (stryMutAct_9fa48("19290")) {
            {}
          } else {
            stryCov_9fa48("19290");
            throw new Error(stryMutAct_9fa48("19291") ? `` : (stryCov_9fa48("19291"), `[[error:${type}-flagged-too-many-times]]`));
          }
        }
      }
    }
    const canRead = await privileges.posts.can(stryMutAct_9fa48("19292") ? "" : (stryCov_9fa48("19292"), 'topics:read'), id, uid);
    switch (type) {
      case stryMutAct_9fa48("19294") ? "" : (stryCov_9fa48("19294"), 'user'):
        if (stryMutAct_9fa48("19293")) {} else {
          stryCov_9fa48("19293");
          return stryMutAct_9fa48("19295") ? false : (stryCov_9fa48("19295"), true);
        }
      case stryMutAct_9fa48("19297") ? "" : (stryCov_9fa48("19297"), 'post'):
        if (stryMutAct_9fa48("19296")) {} else {
          stryCov_9fa48("19296");
          if (stryMutAct_9fa48("19300") ? false : stryMutAct_9fa48("19299") ? true : stryMutAct_9fa48("19298") ? canRead : (stryCov_9fa48("19298", "19299", "19300"), !canRead)) {
            if (stryMutAct_9fa48("19301")) {
              {}
            } else {
              stryCov_9fa48("19301");
              throw new Error(stryMutAct_9fa48("19302") ? "" : (stryCov_9fa48("19302"), '[[error:no-privileges]]'));
            }
          }
          break;
        }
      default:
        if (stryMutAct_9fa48("19303")) {} else {
          stryCov_9fa48("19303");
          throw new Error(stryMutAct_9fa48("19304") ? "" : (stryCov_9fa48("19304"), '[[error:invalid-data]]'));
        }
    }
  }
};
Flags.getTarget = async function (type, id, uid) {
  if (stryMutAct_9fa48("19305")) {
    {}
  } else {
    stryCov_9fa48("19305");
    if (stryMutAct_9fa48("19308") ? type !== 'user' : stryMutAct_9fa48("19307") ? false : stryMutAct_9fa48("19306") ? true : (stryCov_9fa48("19306", "19307", "19308"), type === (stryMutAct_9fa48("19309") ? "" : (stryCov_9fa48("19309"), 'user')))) {
      if (stryMutAct_9fa48("19310")) {
        {}
      } else {
        stryCov_9fa48("19310");
        const userData = await user.getUserData(id);
        return (stryMutAct_9fa48("19313") ? userData || userData.uid : stryMutAct_9fa48("19312") ? false : stryMutAct_9fa48("19311") ? true : (stryCov_9fa48("19311", "19312", "19313"), userData && userData.uid)) ? userData : {};
      }
    }
    if (stryMutAct_9fa48("19316") ? type !== 'post' : stryMutAct_9fa48("19315") ? false : stryMutAct_9fa48("19314") ? true : (stryCov_9fa48("19314", "19315", "19316"), type === (stryMutAct_9fa48("19317") ? "" : (stryCov_9fa48("19317"), 'post')))) {
      if (stryMutAct_9fa48("19318")) {
        {}
      } else {
        stryCov_9fa48("19318");
        let postData = await posts.getPostData(id);
        if (stryMutAct_9fa48("19321") ? false : stryMutAct_9fa48("19320") ? true : stryMutAct_9fa48("19319") ? postData : (stryCov_9fa48("19319", "19320", "19321"), !postData)) {
          if (stryMutAct_9fa48("19322")) {
            {}
          } else {
            stryCov_9fa48("19322");
            return {};
          }
        }
        postData = await posts.parsePost(postData);
        postData = await topics.addPostData(stryMutAct_9fa48("19323") ? [] : (stryCov_9fa48("19323"), [postData]), uid);
        return postData[0];
      }
    }
    throw new Error(stryMutAct_9fa48("19324") ? "" : (stryCov_9fa48("19324"), '[[error:invalid-data]]'));
  }
};
Flags.targetExists = async function (type, id) {
  if (stryMutAct_9fa48("19325")) {
    {}
  } else {
    stryCov_9fa48("19325");
    if (stryMutAct_9fa48("19328") ? type !== 'post' : stryMutAct_9fa48("19327") ? false : stryMutAct_9fa48("19326") ? true : (stryCov_9fa48("19326", "19327", "19328"), type === (stryMutAct_9fa48("19329") ? "" : (stryCov_9fa48("19329"), 'post')))) {
      if (stryMutAct_9fa48("19330")) {
        {}
      } else {
        stryCov_9fa48("19330");
        return await posts.exists(id);
      }
    } else if (stryMutAct_9fa48("19333") ? type !== 'user' : stryMutAct_9fa48("19332") ? false : stryMutAct_9fa48("19331") ? true : (stryCov_9fa48("19331", "19332", "19333"), type === (stryMutAct_9fa48("19334") ? "" : (stryCov_9fa48("19334"), 'user')))) {
      if (stryMutAct_9fa48("19335")) {
        {}
      } else {
        stryCov_9fa48("19335");
        return await user.exists(id);
      }
    }
    throw new Error(stryMutAct_9fa48("19336") ? "" : (stryCov_9fa48("19336"), '[[error:invalid-data]]'));
  }
};
Flags.targetFlagged = async function (type, id) {
  if (stryMutAct_9fa48("19337")) {
    {}
  } else {
    stryCov_9fa48("19337");
    return stryMutAct_9fa48("19341") ? (await db.sortedSetScore('flags:byTarget', [type, id].join(':'))) < 1 : stryMutAct_9fa48("19340") ? (await db.sortedSetScore('flags:byTarget', [type, id].join(':'))) > 1 : stryMutAct_9fa48("19339") ? false : stryMutAct_9fa48("19338") ? true : (stryCov_9fa48("19338", "19339", "19340", "19341"), (await db.sortedSetScore(stryMutAct_9fa48("19342") ? "" : (stryCov_9fa48("19342"), 'flags:byTarget'), (stryMutAct_9fa48("19343") ? [] : (stryCov_9fa48("19343"), [type, id])).join(stryMutAct_9fa48("19344") ? "" : (stryCov_9fa48("19344"), ':')))) >= 1);
  }
};
Flags.getTargetUid = async function (type, id) {
  if (stryMutAct_9fa48("19345")) {
    {}
  } else {
    stryCov_9fa48("19345");
    if (stryMutAct_9fa48("19348") ? type !== 'post' : stryMutAct_9fa48("19347") ? false : stryMutAct_9fa48("19346") ? true : (stryCov_9fa48("19346", "19347", "19348"), type === (stryMutAct_9fa48("19349") ? "" : (stryCov_9fa48("19349"), 'post')))) {
      if (stryMutAct_9fa48("19350")) {
        {}
      } else {
        stryCov_9fa48("19350");
        return await posts.getPostField(id, stryMutAct_9fa48("19351") ? "" : (stryCov_9fa48("19351"), 'uid'));
      }
    }
    return id;
  }
};
Flags.getTargetCid = async function (type, id) {
  if (stryMutAct_9fa48("19352")) {
    {}
  } else {
    stryCov_9fa48("19352");
    if (stryMutAct_9fa48("19355") ? type !== 'post' : stryMutAct_9fa48("19354") ? false : stryMutAct_9fa48("19353") ? true : (stryCov_9fa48("19353", "19354", "19355"), type === (stryMutAct_9fa48("19356") ? "" : (stryCov_9fa48("19356"), 'post')))) {
      if (stryMutAct_9fa48("19357")) {
        {}
      } else {
        stryCov_9fa48("19357");
        return await posts.getCidByPid(id);
      }
    }
    return null;
  }
};
Flags.update = async function (flagId, uid, changeset) {
  if (stryMutAct_9fa48("19358")) {
    {}
  } else {
    stryCov_9fa48("19358");
    const current = await db.getObjectFields(stryMutAct_9fa48("19359") ? `` : (stryCov_9fa48("19359"), `flag:${flagId}`), stryMutAct_9fa48("19360") ? [] : (stryCov_9fa48("19360"), [stryMutAct_9fa48("19361") ? "" : (stryCov_9fa48("19361"), 'uid'), stryMutAct_9fa48("19362") ? "" : (stryCov_9fa48("19362"), 'state'), stryMutAct_9fa48("19363") ? "" : (stryCov_9fa48("19363"), 'assignee'), stryMutAct_9fa48("19364") ? "" : (stryCov_9fa48("19364"), 'type'), stryMutAct_9fa48("19365") ? "" : (stryCov_9fa48("19365"), 'targetId')]));
    if (stryMutAct_9fa48("19368") ? false : stryMutAct_9fa48("19367") ? true : stryMutAct_9fa48("19366") ? current.type : (stryCov_9fa48("19366", "19367", "19368"), !current.type)) {
      if (stryMutAct_9fa48("19369")) {
        {}
      } else {
        stryCov_9fa48("19369");
        return;
      }
    }
    const now = stryMutAct_9fa48("19372") ? changeset.datetime && Date.now() : stryMutAct_9fa48("19371") ? false : stryMutAct_9fa48("19370") ? true : (stryCov_9fa48("19370", "19371", "19372"), changeset.datetime || Date.now());
    const notifyAssignee = async function (assigneeId) {
      if (stryMutAct_9fa48("19373")) {
        {}
      } else {
        stryCov_9fa48("19373");
        if (stryMutAct_9fa48("19376") ? assigneeId === '' && parseInt(uid, 10) === parseInt(assigneeId, 10) : stryMutAct_9fa48("19375") ? false : stryMutAct_9fa48("19374") ? true : (stryCov_9fa48("19374", "19375", "19376"), (stryMutAct_9fa48("19378") ? assigneeId !== '' : stryMutAct_9fa48("19377") ? false : (stryCov_9fa48("19377", "19378"), assigneeId === (stryMutAct_9fa48("19379") ? "Stryker was here!" : (stryCov_9fa48("19379"), '')))) || (stryMutAct_9fa48("19381") ? parseInt(uid, 10) !== parseInt(assigneeId, 10) : stryMutAct_9fa48("19380") ? false : (stryCov_9fa48("19380", "19381"), parseInt(uid, 10) === parseInt(assigneeId, 10))))) {
          if (stryMutAct_9fa48("19382")) {
            {}
          } else {
            stryCov_9fa48("19382");
            return;
          }
        }
        const notifObj = await notifications.create(stryMutAct_9fa48("19383") ? {} : (stryCov_9fa48("19383"), {
          type: stryMutAct_9fa48("19384") ? "" : (stryCov_9fa48("19384"), 'my-flags'),
          bodyShort: stryMutAct_9fa48("19385") ? `` : (stryCov_9fa48("19385"), `[[notifications:flag_assigned_to_you, ${flagId}]]`),
          bodyLong: stryMutAct_9fa48("19386") ? "Stryker was here!" : (stryCov_9fa48("19386"), ''),
          path: stryMutAct_9fa48("19387") ? `` : (stryCov_9fa48("19387"), `/flags/${flagId}`),
          nid: stryMutAct_9fa48("19388") ? `` : (stryCov_9fa48("19388"), `flags:assign:${flagId}:uid:${assigneeId}`),
          from: uid
        }));
        await notifications.push(notifObj, stryMutAct_9fa48("19389") ? [] : (stryCov_9fa48("19389"), [assigneeId]));
      }
    };
    const isAssignable = async function (assigneeId) {
      if (stryMutAct_9fa48("19390")) {
        {}
      } else {
        stryCov_9fa48("19390");
        let allowed = stryMutAct_9fa48("19391") ? true : (stryCov_9fa48("19391"), false);
        allowed = await user.isAdminOrGlobalMod(assigneeId);

        // Mods are also allowed to be assigned, if flag target is post in uid's moderated cid
        if (stryMutAct_9fa48("19394") ? !allowed || current.type === 'post' : stryMutAct_9fa48("19393") ? false : stryMutAct_9fa48("19392") ? true : (stryCov_9fa48("19392", "19393", "19394"), (stryMutAct_9fa48("19395") ? allowed : (stryCov_9fa48("19395"), !allowed)) && (stryMutAct_9fa48("19397") ? current.type !== 'post' : stryMutAct_9fa48("19396") ? true : (stryCov_9fa48("19396", "19397"), current.type === (stryMutAct_9fa48("19398") ? "" : (stryCov_9fa48("19398"), 'post')))))) {
          if (stryMutAct_9fa48("19399")) {
            {}
          } else {
            stryCov_9fa48("19399");
            const cid = await posts.getCidByPid(current.targetId);
            allowed = await user.isModerator(assigneeId, cid);
          }
        }
        return allowed;
      }
    };

    // Retrieve existing flag data to compare for history-saving/reference purposes
    const tasks = stryMutAct_9fa48("19400") ? ["Stryker was here"] : (stryCov_9fa48("19400"), []);
    for (const prop of Object.keys(changeset)) {
      if (stryMutAct_9fa48("19401")) {
        {}
      } else {
        stryCov_9fa48("19401");
        if (stryMutAct_9fa48("19404") ? current[prop] !== changeset[prop] : stryMutAct_9fa48("19403") ? false : stryMutAct_9fa48("19402") ? true : (stryCov_9fa48("19402", "19403", "19404"), current[prop] === changeset[prop])) {
          if (stryMutAct_9fa48("19405")) {
            {}
          } else {
            stryCov_9fa48("19405");
            delete changeset[prop];
          }
        } else if (stryMutAct_9fa48("19408") ? prop !== 'state' : stryMutAct_9fa48("19407") ? false : stryMutAct_9fa48("19406") ? true : (stryCov_9fa48("19406", "19407", "19408"), prop === (stryMutAct_9fa48("19409") ? "" : (stryCov_9fa48("19409"), 'state')))) {
          if (stryMutAct_9fa48("19410")) {
            {}
          } else {
            stryCov_9fa48("19410");
            if (stryMutAct_9fa48("19413") ? false : stryMutAct_9fa48("19412") ? true : stryMutAct_9fa48("19411") ? Flags._states.has(changeset[prop]) : (stryCov_9fa48("19411", "19412", "19413"), !Flags._states.has(changeset[prop]))) {
              if (stryMutAct_9fa48("19414")) {
                {}
              } else {
                stryCov_9fa48("19414");
                delete changeset[prop];
              }
            } else {
              if (stryMutAct_9fa48("19415")) {
                {}
              } else {
                stryCov_9fa48("19415");
                tasks.push(db.sortedSetAdd(stryMutAct_9fa48("19416") ? `` : (stryCov_9fa48("19416"), `flags:byState:${changeset[prop]}`), now, flagId));
                tasks.push(db.sortedSetRemove(stryMutAct_9fa48("19417") ? `` : (stryCov_9fa48("19417"), `flags:byState:${current[prop]}`), flagId));
                if (stryMutAct_9fa48("19420") ? changeset[prop] === 'resolved' || meta.config['flags:actionOnResolve'] === 'rescind' : stryMutAct_9fa48("19419") ? false : stryMutAct_9fa48("19418") ? true : (stryCov_9fa48("19418", "19419", "19420"), (stryMutAct_9fa48("19422") ? changeset[prop] !== 'resolved' : stryMutAct_9fa48("19421") ? true : (stryCov_9fa48("19421", "19422"), changeset[prop] === (stryMutAct_9fa48("19423") ? "" : (stryCov_9fa48("19423"), 'resolved')))) && (stryMutAct_9fa48("19425") ? meta.config['flags:actionOnResolve'] !== 'rescind' : stryMutAct_9fa48("19424") ? true : (stryCov_9fa48("19424", "19425"), meta.config[stryMutAct_9fa48("19426") ? "" : (stryCov_9fa48("19426"), 'flags:actionOnResolve')] === (stryMutAct_9fa48("19427") ? "" : (stryCov_9fa48("19427"), 'rescind')))))) {
                  if (stryMutAct_9fa48("19428")) {
                    {}
                  } else {
                    stryCov_9fa48("19428");
                    tasks.push(notifications.rescind(stryMutAct_9fa48("19429") ? `` : (stryCov_9fa48("19429"), `flag:${current.type}:${current.targetId}`)));
                  }
                }
                if (stryMutAct_9fa48("19432") ? changeset[prop] === 'rejected' || meta.config['flags:actionOnReject'] === 'rescind' : stryMutAct_9fa48("19431") ? false : stryMutAct_9fa48("19430") ? true : (stryCov_9fa48("19430", "19431", "19432"), (stryMutAct_9fa48("19434") ? changeset[prop] !== 'rejected' : stryMutAct_9fa48("19433") ? true : (stryCov_9fa48("19433", "19434"), changeset[prop] === (stryMutAct_9fa48("19435") ? "" : (stryCov_9fa48("19435"), 'rejected')))) && (stryMutAct_9fa48("19437") ? meta.config['flags:actionOnReject'] !== 'rescind' : stryMutAct_9fa48("19436") ? true : (stryCov_9fa48("19436", "19437"), meta.config[stryMutAct_9fa48("19438") ? "" : (stryCov_9fa48("19438"), 'flags:actionOnReject')] === (stryMutAct_9fa48("19439") ? "" : (stryCov_9fa48("19439"), 'rescind')))))) {
                  if (stryMutAct_9fa48("19440")) {
                    {}
                  } else {
                    stryCov_9fa48("19440");
                    tasks.push(notifications.rescind(stryMutAct_9fa48("19441") ? `` : (stryCov_9fa48("19441"), `flag:${current.type}:${current.targetId}`)));
                  }
                }
              }
            }
          }
        } else if (stryMutAct_9fa48("19444") ? prop !== 'assignee' : stryMutAct_9fa48("19443") ? false : stryMutAct_9fa48("19442") ? true : (stryCov_9fa48("19442", "19443", "19444"), prop === (stryMutAct_9fa48("19445") ? "" : (stryCov_9fa48("19445"), 'assignee')))) {
          if (stryMutAct_9fa48("19446")) {
            {}
          } else {
            stryCov_9fa48("19446");
            if (stryMutAct_9fa48("19449") ? changeset[prop] !== '' : stryMutAct_9fa48("19448") ? false : stryMutAct_9fa48("19447") ? true : (stryCov_9fa48("19447", "19448", "19449"), changeset[prop] === (stryMutAct_9fa48("19450") ? "Stryker was here!" : (stryCov_9fa48("19450"), '')))) {
              if (stryMutAct_9fa48("19451")) {
                {}
              } else {
                stryCov_9fa48("19451");
                tasks.push(db.sortedSetRemove(stryMutAct_9fa48("19452") ? `` : (stryCov_9fa48("19452"), `flags:byAssignee:${changeset[prop]}`), flagId));
                /* eslint-disable-next-line */
              }
            } else if (stryMutAct_9fa48("19455") ? false : stryMutAct_9fa48("19454") ? true : stryMutAct_9fa48("19453") ? await isAssignable(parseInt(changeset[prop], 10)) : (stryCov_9fa48("19453", "19454", "19455"), !(await isAssignable(parseInt(changeset[prop], 10))))) {
              if (stryMutAct_9fa48("19456")) {
                {}
              } else {
                stryCov_9fa48("19456");
                delete changeset[prop];
              }
            } else {
              if (stryMutAct_9fa48("19457")) {
                {}
              } else {
                stryCov_9fa48("19457");
                tasks.push(db.sortedSetAdd(stryMutAct_9fa48("19458") ? `` : (stryCov_9fa48("19458"), `flags:byAssignee:${changeset[prop]}`), now, flagId));
                tasks.push(notifyAssignee(changeset[prop]));
              }
            }
          }
        }
      }
    }
    if (stryMutAct_9fa48("19461") ? false : stryMutAct_9fa48("19460") ? true : stryMutAct_9fa48("19459") ? Object.keys(changeset).length : (stryCov_9fa48("19459", "19460", "19461"), !Object.keys(changeset).length)) {
      if (stryMutAct_9fa48("19462")) {
        {}
      } else {
        stryCov_9fa48("19462");
        return;
      }
    }
    tasks.push(db.setObject(stryMutAct_9fa48("19463") ? `` : (stryCov_9fa48("19463"), `flag:${flagId}`), changeset));
    tasks.push(Flags.appendHistory(flagId, uid, changeset));
    await Promise.all(tasks);
    plugins.hooks.fire(stryMutAct_9fa48("19464") ? "" : (stryCov_9fa48("19464"), 'action:flags.update'), stryMutAct_9fa48("19465") ? {} : (stryCov_9fa48("19465"), {
      flagId: flagId,
      changeset: changeset,
      uid: uid
    }));
  }
};
Flags.resolveFlag = async function (type, id, uid) {
  if (stryMutAct_9fa48("19466")) {
    {}
  } else {
    stryCov_9fa48("19466");
    const flagId = await Flags.getFlagIdByTarget(type, id);
    if (stryMutAct_9fa48("19468") ? false : stryMutAct_9fa48("19467") ? true : (stryCov_9fa48("19467", "19468"), parseInt(flagId, 10))) {
      if (stryMutAct_9fa48("19469")) {
        {}
      } else {
        stryCov_9fa48("19469");
        await Flags.update(flagId, uid, stryMutAct_9fa48("19470") ? {} : (stryCov_9fa48("19470"), {
          state: stryMutAct_9fa48("19471") ? "" : (stryCov_9fa48("19471"), 'resolved')
        }));
      }
    }
  }
};
Flags.resolveUserPostFlags = async function (uid, callerUid) {
  if (stryMutAct_9fa48("19472")) {
    {}
  } else {
    stryCov_9fa48("19472");
    if (stryMutAct_9fa48("19474") ? false : stryMutAct_9fa48("19473") ? true : (stryCov_9fa48("19473", "19474"), meta.config[stryMutAct_9fa48("19475") ? "" : (stryCov_9fa48("19475"), 'flags:autoResolveOnBan')])) {
      if (stryMutAct_9fa48("19476")) {
        {}
      } else {
        stryCov_9fa48("19476");
        await batch.processSortedSet(stryMutAct_9fa48("19477") ? `` : (stryCov_9fa48("19477"), `uid:${uid}:posts`), async pids => {
          if (stryMutAct_9fa48("19478")) {
            {}
          } else {
            stryCov_9fa48("19478");
            let postData = await posts.getPostsFields(pids, stryMutAct_9fa48("19479") ? [] : (stryCov_9fa48("19479"), [stryMutAct_9fa48("19480") ? "" : (stryCov_9fa48("19480"), 'pid'), stryMutAct_9fa48("19481") ? "" : (stryCov_9fa48("19481"), 'flagId')]));
            postData = stryMutAct_9fa48("19482") ? postData : (stryCov_9fa48("19482"), postData.filter(stryMutAct_9fa48("19483") ? () => undefined : (stryCov_9fa48("19483"), p => stryMutAct_9fa48("19486") ? p || p.flagId : stryMutAct_9fa48("19485") ? false : stryMutAct_9fa48("19484") ? true : (stryCov_9fa48("19484", "19485", "19486"), p && p.flagId))));
            for (const postObj of postData) {
              if (stryMutAct_9fa48("19487")) {
                {}
              } else {
                stryCov_9fa48("19487");
                if (stryMutAct_9fa48("19489") ? false : stryMutAct_9fa48("19488") ? true : (stryCov_9fa48("19488", "19489"), parseInt(postObj.flagId, 10))) {
                  if (stryMutAct_9fa48("19490")) {
                    {}
                  } else {
                    stryCov_9fa48("19490");
                    // eslint-disable-next-line no-await-in-loop
                    await Flags.update(postObj.flagId, callerUid, stryMutAct_9fa48("19491") ? {} : (stryCov_9fa48("19491"), {
                      state: stryMutAct_9fa48("19492") ? "" : (stryCov_9fa48("19492"), 'resolved')
                    }));
                  }
                }
              }
            }
          }
        }, stryMutAct_9fa48("19493") ? {} : (stryCov_9fa48("19493"), {
          batch: 500
        }));
      }
    }
  }
};
Flags.getHistory = async function (flagId) {
  if (stryMutAct_9fa48("19494")) {
    {}
  } else {
    stryCov_9fa48("19494");
    const uids = stryMutAct_9fa48("19495") ? ["Stryker was here"] : (stryCov_9fa48("19495"), []);
    let history = await db.getSortedSetRevRangeWithScores(stryMutAct_9fa48("19496") ? `` : (stryCov_9fa48("19496"), `flag:${flagId}:history`), 0, stryMutAct_9fa48("19497") ? +1 : (stryCov_9fa48("19497"), -1));
    const targetUid = await db.getObjectField(stryMutAct_9fa48("19498") ? `` : (stryCov_9fa48("19498"), `flag:${flagId}`), stryMutAct_9fa48("19499") ? "" : (stryCov_9fa48("19499"), 'targetUid'));
    history = history.map(entry => {
      if (stryMutAct_9fa48("19500")) {
        {}
      } else {
        stryCov_9fa48("19500");
        entry.value = JSON.parse(entry.value);
        uids.push(entry.value[0]);

        // Deserialise changeset
        const changeset = entry.value[1];
        if (stryMutAct_9fa48("19502") ? false : stryMutAct_9fa48("19501") ? true : (stryCov_9fa48("19501", "19502"), changeset.hasOwnProperty(stryMutAct_9fa48("19503") ? "" : (stryCov_9fa48("19503"), 'state')))) {
          if (stryMutAct_9fa48("19504")) {
            {}
          } else {
            stryCov_9fa48("19504");
            changeset.state = (stryMutAct_9fa48("19507") ? changeset.state !== undefined : stryMutAct_9fa48("19506") ? false : stryMutAct_9fa48("19505") ? true : (stryCov_9fa48("19505", "19506", "19507"), changeset.state === undefined)) ? stryMutAct_9fa48("19508") ? "Stryker was here!" : (stryCov_9fa48("19508"), '') : stryMutAct_9fa48("19509") ? `` : (stryCov_9fa48("19509"), `[[flags:state-${changeset.state}]]`);
          }
        }
        return stryMutAct_9fa48("19510") ? {} : (stryCov_9fa48("19510"), {
          uid: entry.value[0],
          fields: changeset,
          datetime: entry.score,
          datetimeISO: utils.toISOString(entry.score)
        });
      }
    });

    // Append ban history and username change data
    history = await mergeBanHistory(history, targetUid, uids);
    history = await mergeMuteHistory(history, targetUid, uids);
    history = await mergeUsernameEmailChanges(history, targetUid, uids);
    const userData = await user.getUsersFields(uids, stryMutAct_9fa48("19511") ? [] : (stryCov_9fa48("19511"), [stryMutAct_9fa48("19512") ? "" : (stryCov_9fa48("19512"), 'username'), stryMutAct_9fa48("19513") ? "" : (stryCov_9fa48("19513"), 'userslug'), stryMutAct_9fa48("19514") ? "" : (stryCov_9fa48("19514"), 'picture')]));
    history.forEach((event, idx) => {
      if (stryMutAct_9fa48("19515")) {
        {}
      } else {
        stryCov_9fa48("19515");
        event.user = userData[idx];
      }
    });

    // Resort by date
    history = stryMutAct_9fa48("19516") ? history : (stryCov_9fa48("19516"), history.sort(stryMutAct_9fa48("19517") ? () => undefined : (stryCov_9fa48("19517"), (a, b) => stryMutAct_9fa48("19518") ? b.datetime + a.datetime : (stryCov_9fa48("19518"), b.datetime - a.datetime))));
    return history;
  }
};
Flags.appendHistory = async function (flagId, uid, changeset) {
  if (stryMutAct_9fa48("19519")) {
    {}
  } else {
    stryCov_9fa48("19519");
    const datetime = stryMutAct_9fa48("19522") ? changeset.datetime && Date.now() : stryMutAct_9fa48("19521") ? false : stryMutAct_9fa48("19520") ? true : (stryCov_9fa48("19520", "19521", "19522"), changeset.datetime || Date.now());
    delete changeset.datetime;
    const payload = JSON.stringify(stryMutAct_9fa48("19523") ? [] : (stryCov_9fa48("19523"), [uid, changeset, datetime]));
    await db.sortedSetAdd(stryMutAct_9fa48("19524") ? `` : (stryCov_9fa48("19524"), `flag:${flagId}:history`), datetime, payload);
  }
};
Flags.appendNote = async function (flagId, uid, note, datetime) {
  if (stryMutAct_9fa48("19525")) {
    {}
  } else {
    stryCov_9fa48("19525");
    if (stryMutAct_9fa48("19527") ? false : stryMutAct_9fa48("19526") ? true : (stryCov_9fa48("19526", "19527"), datetime)) {
      if (stryMutAct_9fa48("19528")) {
        {}
      } else {
        stryCov_9fa48("19528");
        try {
          if (stryMutAct_9fa48("19529")) {
            {}
          } else {
            stryCov_9fa48("19529");
            await Flags.deleteNote(flagId, datetime);
          }
        } catch (e) {
          if (stryMutAct_9fa48("19530")) {
            {}
          } else {
            stryCov_9fa48("19530");
            // Do not throw if note doesn't exist
            if (stryMutAct_9fa48("19533") ? !e.message !== '[[error:invalid-data]]' : stryMutAct_9fa48("19532") ? false : stryMutAct_9fa48("19531") ? true : (stryCov_9fa48("19531", "19532", "19533"), (stryMutAct_9fa48("19534") ? e.message : (stryCov_9fa48("19534"), !e.message)) === (stryMutAct_9fa48("19535") ? "" : (stryCov_9fa48("19535"), '[[error:invalid-data]]')))) {
              if (stryMutAct_9fa48("19536")) {
                {}
              } else {
                stryCov_9fa48("19536");
                throw e;
              }
            }
          }
        }
      }
    }
    datetime = stryMutAct_9fa48("19539") ? datetime && Date.now() : stryMutAct_9fa48("19538") ? false : stryMutAct_9fa48("19537") ? true : (stryCov_9fa48("19537", "19538", "19539"), datetime || Date.now());
    const payload = JSON.stringify(stryMutAct_9fa48("19540") ? [] : (stryCov_9fa48("19540"), [uid, note]));
    await db.sortedSetAdd(stryMutAct_9fa48("19541") ? `` : (stryCov_9fa48("19541"), `flag:${flagId}:notes`), datetime, payload);
    await Flags.appendHistory(flagId, uid, stryMutAct_9fa48("19542") ? {} : (stryCov_9fa48("19542"), {
      notes: null,
      datetime: datetime
    }));
  }
};
Flags.notify = async function (flagObj, uid, notifySelf = stryMutAct_9fa48("19543") ? true : (stryCov_9fa48("19543"), false)) {
  if (stryMutAct_9fa48("19544")) {
    {}
  } else {
    stryCov_9fa48("19544");
    const [admins, globalMods] = await Promise.all(stryMutAct_9fa48("19545") ? [] : (stryCov_9fa48("19545"), [groups.getMembers(stryMutAct_9fa48("19546") ? "" : (stryCov_9fa48("19546"), 'administrators'), 0, stryMutAct_9fa48("19547") ? +1 : (stryCov_9fa48("19547"), -1)), groups.getMembers(stryMutAct_9fa48("19548") ? "" : (stryCov_9fa48("19548"), 'Global Moderators'), 0, stryMutAct_9fa48("19549") ? +1 : (stryCov_9fa48("19549"), -1))]));
    let uids = admins.concat(globalMods);
    let notifObj = null;
    const {
      displayname
    } = flagObj.reports[stryMutAct_9fa48("19550") ? flagObj.reports.length + 1 : (stryCov_9fa48("19550"), flagObj.reports.length - 1)].reporter;
    if (stryMutAct_9fa48("19553") ? flagObj.type !== 'post' : stryMutAct_9fa48("19552") ? false : stryMutAct_9fa48("19551") ? true : (stryCov_9fa48("19551", "19552", "19553"), flagObj.type === (stryMutAct_9fa48("19554") ? "" : (stryCov_9fa48("19554"), 'post')))) {
      if (stryMutAct_9fa48("19555")) {
        {}
      } else {
        stryCov_9fa48("19555");
        const [title, cid] = await Promise.all(stryMutAct_9fa48("19556") ? [] : (stryCov_9fa48("19556"), [topics.getTitleByPid(flagObj.targetId), posts.getCidByPid(flagObj.targetId)]));
        const modUids = await categories.getModeratorUids(stryMutAct_9fa48("19557") ? [] : (stryCov_9fa48("19557"), [cid]));
        const titleEscaped = utils.decodeHTMLEntities(title).replace(/%/g, stryMutAct_9fa48("19558") ? "" : (stryCov_9fa48("19558"), '&#37;')).replace(/,/g, stryMutAct_9fa48("19559") ? "" : (stryCov_9fa48("19559"), '&#44;'));
        notifObj = await notifications.create(stryMutAct_9fa48("19560") ? {} : (stryCov_9fa48("19560"), {
          type: stryMutAct_9fa48("19561") ? "" : (stryCov_9fa48("19561"), 'new-post-flag'),
          bodyShort: stryMutAct_9fa48("19562") ? `` : (stryCov_9fa48("19562"), `[[notifications:user_flagged_post_in, ${displayname}, ${titleEscaped}]]`),
          bodyLong: await plugins.hooks.fire(stryMutAct_9fa48("19563") ? "" : (stryCov_9fa48("19563"), 'filter:parse.raw'), String(stryMutAct_9fa48("19566") ? flagObj.description && '' : stryMutAct_9fa48("19565") ? false : stryMutAct_9fa48("19564") ? true : (stryCov_9fa48("19564", "19565", "19566"), flagObj.description || (stryMutAct_9fa48("19567") ? "Stryker was here!" : (stryCov_9fa48("19567"), ''))))),
          pid: flagObj.targetId,
          path: stryMutAct_9fa48("19568") ? `` : (stryCov_9fa48("19568"), `/flags/${flagObj.flagId}`),
          nid: stryMutAct_9fa48("19569") ? `` : (stryCov_9fa48("19569"), `flag:post:${flagObj.targetId}`),
          from: uid,
          mergeId: stryMutAct_9fa48("19570") ? `` : (stryCov_9fa48("19570"), `notifications:user_flagged_post_in|${flagObj.targetId}`),
          topicTitle: title
        }));
        uids = uids.concat(modUids[0]);
      }
    } else if (stryMutAct_9fa48("19573") ? flagObj.type !== 'user' : stryMutAct_9fa48("19572") ? false : stryMutAct_9fa48("19571") ? true : (stryCov_9fa48("19571", "19572", "19573"), flagObj.type === (stryMutAct_9fa48("19574") ? "" : (stryCov_9fa48("19574"), 'user')))) {
      if (stryMutAct_9fa48("19575")) {
        {}
      } else {
        stryCov_9fa48("19575");
        const targetDisplayname = (stryMutAct_9fa48("19578") ? flagObj.target || flagObj.target.user : stryMutAct_9fa48("19577") ? false : stryMutAct_9fa48("19576") ? true : (stryCov_9fa48("19576", "19577", "19578"), flagObj.target && flagObj.target.user)) ? flagObj.target.user.displayname : stryMutAct_9fa48("19579") ? "" : (stryCov_9fa48("19579"), '[[global:guest]]');
        notifObj = await notifications.create(stryMutAct_9fa48("19580") ? {} : (stryCov_9fa48("19580"), {
          type: stryMutAct_9fa48("19581") ? "" : (stryCov_9fa48("19581"), 'new-user-flag'),
          bodyShort: stryMutAct_9fa48("19582") ? `` : (stryCov_9fa48("19582"), `[[notifications:user_flagged_user, ${displayname}, ${targetDisplayname}]]`),
          bodyLong: await plugins.hooks.fire(stryMutAct_9fa48("19583") ? "" : (stryCov_9fa48("19583"), 'filter:parse.raw'), String(stryMutAct_9fa48("19586") ? flagObj.description && '' : stryMutAct_9fa48("19585") ? false : stryMutAct_9fa48("19584") ? true : (stryCov_9fa48("19584", "19585", "19586"), flagObj.description || (stryMutAct_9fa48("19587") ? "Stryker was here!" : (stryCov_9fa48("19587"), ''))))),
          path: stryMutAct_9fa48("19588") ? `` : (stryCov_9fa48("19588"), `/flags/${flagObj.flagId}`),
          nid: stryMutAct_9fa48("19589") ? `` : (stryCov_9fa48("19589"), `flag:user:${flagObj.targetId}`),
          from: uid,
          mergeId: stryMutAct_9fa48("19590") ? `` : (stryCov_9fa48("19590"), `notifications:user_flagged_user|${flagObj.targetId}`)
        }));
      }
    } else {
      if (stryMutAct_9fa48("19591")) {
        {}
      } else {
        stryCov_9fa48("19591");
        throw new Error(stryMutAct_9fa48("19592") ? "" : (stryCov_9fa48("19592"), '[[error:invalid-data]]'));
      }
    }
    plugins.hooks.fire(stryMutAct_9fa48("19593") ? "" : (stryCov_9fa48("19593"), 'action:flags.notify'), stryMutAct_9fa48("19594") ? {} : (stryCov_9fa48("19594"), {
      flag: flagObj,
      notification: notifObj,
      from: uid,
      to: uids
    }));
    if (stryMutAct_9fa48("19597") ? false : stryMutAct_9fa48("19596") ? true : stryMutAct_9fa48("19595") ? notifySelf : (stryCov_9fa48("19595", "19596", "19597"), !notifySelf)) {
      if (stryMutAct_9fa48("19598")) {
        {}
      } else {
        stryCov_9fa48("19598");
        uids = stryMutAct_9fa48("19599") ? uids : (stryCov_9fa48("19599"), uids.filter(stryMutAct_9fa48("19600") ? () => undefined : (stryCov_9fa48("19600"), _uid => stryMutAct_9fa48("19603") ? parseInt(_uid, 10) === parseInt(uid, 10) : stryMutAct_9fa48("19602") ? false : stryMutAct_9fa48("19601") ? true : (stryCov_9fa48("19601", "19602", "19603"), parseInt(_uid, 10) !== parseInt(uid, 10)))));
      }
    }
    await notifications.push(notifObj, uids);
  }
};
async function mergeBanHistory(history, targetUid, uids) {
  if (stryMutAct_9fa48("19604")) {
    {}
  } else {
    stryCov_9fa48("19604");
    return await mergeBanMuteHistory(history, uids, stryMutAct_9fa48("19605") ? {} : (stryCov_9fa48("19605"), {
      set: stryMutAct_9fa48("19606") ? `` : (stryCov_9fa48("19606"), `uid:${targetUid}:bans:timestamp`),
      label: stryMutAct_9fa48("19607") ? "" : (stryCov_9fa48("19607"), '[[user:banned]]'),
      reasonDefault: stryMutAct_9fa48("19608") ? "" : (stryCov_9fa48("19608"), '[[user:info.banned-no-reason]]'),
      expiryKey: stryMutAct_9fa48("19609") ? "" : (stryCov_9fa48("19609"), '[[user:info.banned-expiry]]')
    }));
  }
}
async function mergeMuteHistory(history, targetUid, uids) {
  if (stryMutAct_9fa48("19610")) {
    {}
  } else {
    stryCov_9fa48("19610");
    return await mergeBanMuteHistory(history, uids, stryMutAct_9fa48("19611") ? {} : (stryCov_9fa48("19611"), {
      set: stryMutAct_9fa48("19612") ? `` : (stryCov_9fa48("19612"), `uid:${targetUid}:mutes:timestamp`),
      label: stryMutAct_9fa48("19613") ? "" : (stryCov_9fa48("19613"), '[[user:muted]]'),
      reasonDefault: stryMutAct_9fa48("19614") ? "" : (stryCov_9fa48("19614"), '[[user:info.muted-no-reason]]'),
      expiryKey: stryMutAct_9fa48("19615") ? "" : (stryCov_9fa48("19615"), '[[user:info.muted-expiry]]')
    }));
  }
}
async function mergeBanMuteHistory(history, uids, params) {
  if (stryMutAct_9fa48("19616")) {
    {}
  } else {
    stryCov_9fa48("19616");
    let recentObjs = await db.getSortedSetRevRange(params.set, 0, 19);
    recentObjs = await db.getObjects(recentObjs);
    return history.concat(recentObjs.reduce((memo, cur) => {
      if (stryMutAct_9fa48("19617")) {
        {}
      } else {
        stryCov_9fa48("19617");
        uids.push(cur.fromUid);
        memo.push(stryMutAct_9fa48("19618") ? {} : (stryCov_9fa48("19618"), {
          uid: cur.fromUid,
          meta: stryMutAct_9fa48("19619") ? [] : (stryCov_9fa48("19619"), [stryMutAct_9fa48("19620") ? {} : (stryCov_9fa48("19620"), {
            key: params.label,
            value: validator.escape(String(stryMutAct_9fa48("19623") ? cur.reason && params.reasonDefault : stryMutAct_9fa48("19622") ? false : stryMutAct_9fa48("19621") ? true : (stryCov_9fa48("19621", "19622", "19623"), cur.reason || params.reasonDefault))),
            labelClass: stryMutAct_9fa48("19624") ? "" : (stryCov_9fa48("19624"), 'danger')
          }), stryMutAct_9fa48("19625") ? {} : (stryCov_9fa48("19625"), {
            key: params.expiryKey,
            value: new Date(parseInt(cur.expire, 10)).toISOString(),
            labelClass: stryMutAct_9fa48("19626") ? "" : (stryCov_9fa48("19626"), 'default')
          })]),
          datetime: parseInt(cur.timestamp, 10),
          datetimeISO: utils.toISOString(parseInt(cur.timestamp, 10))
        }));
        return memo;
      }
    }, stryMutAct_9fa48("19627") ? ["Stryker was here"] : (stryCov_9fa48("19627"), [])));
  }
}
async function mergeUsernameEmailChanges(history, targetUid, uids) {
  if (stryMutAct_9fa48("19628")) {
    {}
  } else {
    stryCov_9fa48("19628");
    const usernameChanges = await user.getHistory(stryMutAct_9fa48("19629") ? `` : (stryCov_9fa48("19629"), `user:${targetUid}:usernames`));
    const emailChanges = await user.getHistory(stryMutAct_9fa48("19630") ? `` : (stryCov_9fa48("19630"), `user:${targetUid}:emails`));
    return history.concat(usernameChanges.reduce((memo, changeObj) => {
      if (stryMutAct_9fa48("19631")) {
        {}
      } else {
        stryCov_9fa48("19631");
        uids.push(targetUid);
        memo.push(stryMutAct_9fa48("19632") ? {} : (stryCov_9fa48("19632"), {
          uid: targetUid,
          meta: stryMutAct_9fa48("19633") ? [] : (stryCov_9fa48("19633"), [stryMutAct_9fa48("19634") ? {} : (stryCov_9fa48("19634"), {
            key: stryMutAct_9fa48("19635") ? "" : (stryCov_9fa48("19635"), '[[user:change_username]]'),
            value: changeObj.value,
            labelClass: stryMutAct_9fa48("19636") ? "" : (stryCov_9fa48("19636"), 'primary')
          })]),
          datetime: changeObj.timestamp,
          datetimeISO: changeObj.timestampISO
        }));
        return memo;
      }
    }, stryMutAct_9fa48("19637") ? ["Stryker was here"] : (stryCov_9fa48("19637"), []))).concat(emailChanges.reduce((memo, changeObj) => {
      if (stryMutAct_9fa48("19638")) {
        {}
      } else {
        stryCov_9fa48("19638");
        uids.push(targetUid);
        memo.push(stryMutAct_9fa48("19639") ? {} : (stryCov_9fa48("19639"), {
          uid: targetUid,
          meta: stryMutAct_9fa48("19640") ? [] : (stryCov_9fa48("19640"), [stryMutAct_9fa48("19641") ? {} : (stryCov_9fa48("19641"), {
            key: stryMutAct_9fa48("19642") ? "" : (stryCov_9fa48("19642"), '[[user:change_email]]'),
            value: changeObj.value,
            labelClass: stryMutAct_9fa48("19643") ? "" : (stryCov_9fa48("19643"), 'primary')
          })]),
          datetime: changeObj.timestamp,
          datetimeISO: changeObj.timestampISO
        }));
        return memo;
      }
    }, stryMutAct_9fa48("19644") ? ["Stryker was here"] : (stryCov_9fa48("19644"), [])));
  }
}
require('./promisify')(Flags);