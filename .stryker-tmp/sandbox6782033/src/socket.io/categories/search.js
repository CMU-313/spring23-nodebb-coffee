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
const meta = require('../../meta');
const categories = require('../../categories');
const privileges = require('../../privileges');
const controllersHelpers = require('../../controllers/helpers');
const plugins = require('../../plugins');
module.exports = function (SocketCategories) {
  if (stryMutAct_9fa48("35342")) {
    {}
  } else {
    stryCov_9fa48("35342");
    // used by categorySearch module
    SocketCategories.categorySearch = async function (socket, data) {
      if (stryMutAct_9fa48("35343")) {
        {}
      } else {
        stryCov_9fa48("35343");
        let cids = stryMutAct_9fa48("35344") ? ["Stryker was here"] : (stryCov_9fa48("35344"), []);
        let matchedCids = stryMutAct_9fa48("35345") ? ["Stryker was here"] : (stryCov_9fa48("35345"), []);
        const privilege = stryMutAct_9fa48("35348") ? data.privilege && 'topics:read' : stryMutAct_9fa48("35347") ? false : stryMutAct_9fa48("35346") ? true : (stryCov_9fa48("35346", "35347", "35348"), data.privilege || (stryMutAct_9fa48("35349") ? "" : (stryCov_9fa48("35349"), 'topics:read')));
        data.states = (stryMutAct_9fa48("35352") ? data.states && ['watching', 'notwatching', 'ignoring'] : stryMutAct_9fa48("35351") ? false : stryMutAct_9fa48("35350") ? true : (stryCov_9fa48("35350", "35351", "35352"), data.states || (stryMutAct_9fa48("35353") ? [] : (stryCov_9fa48("35353"), [stryMutAct_9fa48("35354") ? "" : (stryCov_9fa48("35354"), 'watching'), stryMutAct_9fa48("35355") ? "" : (stryCov_9fa48("35355"), 'notwatching'), stryMutAct_9fa48("35356") ? "" : (stryCov_9fa48("35356"), 'ignoring')])))).map(stryMutAct_9fa48("35357") ? () => undefined : (stryCov_9fa48("35357"), state => categories.watchStates[state]));
        if (stryMutAct_9fa48("35359") ? false : stryMutAct_9fa48("35358") ? true : (stryCov_9fa48("35358", "35359"), data.search)) {
          if (stryMutAct_9fa48("35360")) {
            {}
          } else {
            stryCov_9fa48("35360");
            ({
              cids,
              matchedCids
            } = await findMatchedCids(socket.uid, data));
          }
        } else {
          if (stryMutAct_9fa48("35361")) {
            {}
          } else {
            stryCov_9fa48("35361");
            cids = await loadCids(socket.uid, data.parentCid);
          }
        }
        const visibleCategories = await controllersHelpers.getVisibleCategories(stryMutAct_9fa48("35362") ? {} : (stryCov_9fa48("35362"), {
          cids,
          uid: socket.uid,
          states: data.states,
          privilege,
          showLinks: data.showLinks,
          parentCid: data.parentCid
        }));
        if (stryMutAct_9fa48("35364") ? false : stryMutAct_9fa48("35363") ? true : (stryCov_9fa48("35363", "35364"), Array.isArray(data.selectedCids))) {
          if (stryMutAct_9fa48("35365")) {
            {}
          } else {
            stryCov_9fa48("35365");
            data.selectedCids = data.selectedCids.map(stryMutAct_9fa48("35366") ? () => undefined : (stryCov_9fa48("35366"), cid => parseInt(cid, 10)));
          }
        }
        let categoriesData = categories.buildForSelectCategories(visibleCategories, stryMutAct_9fa48("35367") ? [] : (stryCov_9fa48("35367"), [stryMutAct_9fa48("35368") ? "" : (stryCov_9fa48("35368"), 'disabledClass')]), data.parentCid);
        categoriesData = stryMutAct_9fa48("35369") ? categoriesData : (stryCov_9fa48("35369"), categoriesData.slice(0, 200));
        categoriesData.forEach(category => {
          if (stryMutAct_9fa48("35370")) {
            {}
          } else {
            stryCov_9fa48("35370");
            category.selected = data.selectedCids ? data.selectedCids.includes(category.cid) : stryMutAct_9fa48("35371") ? true : (stryCov_9fa48("35371"), false);
            if (stryMutAct_9fa48("35373") ? false : stryMutAct_9fa48("35372") ? true : (stryCov_9fa48("35372", "35373"), matchedCids.includes(category.cid))) {
              if (stryMutAct_9fa48("35374")) {
                {}
              } else {
                stryCov_9fa48("35374");
                category.match = stryMutAct_9fa48("35375") ? false : (stryCov_9fa48("35375"), true);
              }
            }
          }
        });
        const result = await plugins.hooks.fire(stryMutAct_9fa48("35376") ? "" : (stryCov_9fa48("35376"), 'filter:categories.categorySearch'), stryMutAct_9fa48("35377") ? {} : (stryCov_9fa48("35377"), {
          categories: categoriesData,
          ...data,
          uid: socket.uid
        }));
        return result.categories;
      }
    };
    async function findMatchedCids(uid, data) {
      if (stryMutAct_9fa48("35378")) {
        {}
      } else {
        stryCov_9fa48("35378");
        const result = await categories.search(stryMutAct_9fa48("35379") ? {} : (stryCov_9fa48("35379"), {
          uid: uid,
          query: data.search,
          qs: data.query,
          paginate: stryMutAct_9fa48("35380") ? true : (stryCov_9fa48("35380"), false)
        }));
        let matchedCids = result.categories.map(stryMutAct_9fa48("35381") ? () => undefined : (stryCov_9fa48("35381"), c => c.cid));
        // no need to filter if all 3 states are used
        const filterByWatchState = stryMutAct_9fa48("35382") ? Object.values(categories.watchStates).every(state => data.states.includes(state)) : (stryCov_9fa48("35382"), !(stryMutAct_9fa48("35383") ? Object.values(categories.watchStates).some(state => data.states.includes(state)) : (stryCov_9fa48("35383"), Object.values(categories.watchStates).every(stryMutAct_9fa48("35384") ? () => undefined : (stryCov_9fa48("35384"), state => data.states.includes(state))))));
        if (stryMutAct_9fa48("35386") ? false : stryMutAct_9fa48("35385") ? true : (stryCov_9fa48("35385", "35386"), filterByWatchState)) {
          if (stryMutAct_9fa48("35387")) {
            {}
          } else {
            stryCov_9fa48("35387");
            const states = await categories.getWatchState(matchedCids, uid);
            matchedCids = stryMutAct_9fa48("35388") ? matchedCids : (stryCov_9fa48("35388"), matchedCids.filter(stryMutAct_9fa48("35389") ? () => undefined : (stryCov_9fa48("35389"), (cid, index) => data.states.includes(states[index]))));
          }
        }
        const rootCids = _.uniq(_.flatten(await Promise.all(matchedCids.map(categories.getParentCids))));
        const allChildCids = _.uniq(_.flatten(await Promise.all(matchedCids.map(categories.getChildrenCids))));
        return stryMutAct_9fa48("35390") ? {} : (stryCov_9fa48("35390"), {
          cids: _.uniq(rootCids.concat(allChildCids).concat(matchedCids)),
          matchedCids: matchedCids
        });
      }
    }
    async function loadCids(uid, parentCid) {
      if (stryMutAct_9fa48("35391")) {
        {}
      } else {
        stryCov_9fa48("35391");
        let resultCids = stryMutAct_9fa48("35392") ? ["Stryker was here"] : (stryCov_9fa48("35392"), []);
        async function getCidsRecursive(cids) {
          if (stryMutAct_9fa48("35393")) {
            {}
          } else {
            stryCov_9fa48("35393");
            const categoryData = await categories.getCategoriesFields(cids, stryMutAct_9fa48("35394") ? [] : (stryCov_9fa48("35394"), [stryMutAct_9fa48("35395") ? "" : (stryCov_9fa48("35395"), 'subCategoriesPerPage')]));
            const cidToData = _.zipObject(cids, categoryData);
            await Promise.all(cids.map(async cid => {
              if (stryMutAct_9fa48("35396")) {
                {}
              } else {
                stryCov_9fa48("35396");
                const allChildCids = await categories.getAllCidsFromSet(stryMutAct_9fa48("35397") ? `` : (stryCov_9fa48("35397"), `cid:${cid}:children`));
                if (stryMutAct_9fa48("35399") ? false : stryMutAct_9fa48("35398") ? true : (stryCov_9fa48("35398", "35399"), allChildCids.length)) {
                  if (stryMutAct_9fa48("35400")) {
                    {}
                  } else {
                    stryCov_9fa48("35400");
                    const childCids = await privileges.categories.filterCids(stryMutAct_9fa48("35401") ? "" : (stryCov_9fa48("35401"), 'find'), allChildCids, uid);
                    resultCids.push(...(stryMutAct_9fa48("35402") ? childCids : (stryCov_9fa48("35402"), childCids.slice(0, cidToData[cid].subCategoriesPerPage))));
                    await getCidsRecursive(childCids);
                  }
                }
              }
            }));
          }
        }
        const allRootCids = await categories.getAllCidsFromSet(stryMutAct_9fa48("35403") ? `` : (stryCov_9fa48("35403"), `cid:${parentCid}:children`));
        const rootCids = await privileges.categories.filterCids(stryMutAct_9fa48("35404") ? "" : (stryCov_9fa48("35404"), 'find'), allRootCids, uid);
        const pageCids = stryMutAct_9fa48("35405") ? rootCids : (stryCov_9fa48("35405"), rootCids.slice(0, meta.config.categoriesPerPage));
        resultCids = pageCids;
        await getCidsRecursive(pageCids);
        return resultCids;
      }
    }
  }
};