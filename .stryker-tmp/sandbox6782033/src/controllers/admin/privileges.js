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
const categories = require('../../categories');
const privileges = require('../../privileges');
const privilegesController = module.exports;
privilegesController.get = async function (req, res) {
  if (stryMutAct_9fa48("7405")) {
    {}
  } else {
    stryCov_9fa48("7405");
    const cid = req.params.cid ? stryMutAct_9fa48("7408") ? parseInt(req.params.cid, 10) && 0 : stryMutAct_9fa48("7407") ? false : stryMutAct_9fa48("7406") ? true : (stryCov_9fa48("7406", "7407", "7408"), parseInt(req.params.cid, 10) || 0) : 0;
    const isAdminPriv = stryMutAct_9fa48("7411") ? req.params.cid !== 'admin' : stryMutAct_9fa48("7410") ? false : stryMutAct_9fa48("7409") ? true : (stryCov_9fa48("7409", "7410", "7411"), req.params.cid === (stryMutAct_9fa48("7412") ? "" : (stryCov_9fa48("7412"), 'admin')));
    let privilegesData;
    if (stryMutAct_9fa48("7416") ? cid <= 0 : stryMutAct_9fa48("7415") ? cid >= 0 : stryMutAct_9fa48("7414") ? false : stryMutAct_9fa48("7413") ? true : (stryCov_9fa48("7413", "7414", "7415", "7416"), cid > 0)) {
      if (stryMutAct_9fa48("7417")) {
        {}
      } else {
        stryCov_9fa48("7417");
        privilegesData = await privileges.categories.list(cid);
      }
    } else if (stryMutAct_9fa48("7420") ? cid !== 0 : stryMutAct_9fa48("7419") ? false : stryMutAct_9fa48("7418") ? true : (stryCov_9fa48("7418", "7419", "7420"), cid === 0)) {
      if (stryMutAct_9fa48("7421")) {
        {}
      } else {
        stryCov_9fa48("7421");
        privilegesData = await (isAdminPriv ? privileges.admin.list(req.uid) : privileges.global.list());
      }
    }
    const categoriesData = stryMutAct_9fa48("7422") ? [] : (stryCov_9fa48("7422"), [stryMutAct_9fa48("7423") ? {} : (stryCov_9fa48("7423"), {
      cid: 0,
      name: stryMutAct_9fa48("7424") ? "" : (stryCov_9fa48("7424"), '[[admin/manage/privileges:global]]'),
      icon: stryMutAct_9fa48("7425") ? "" : (stryCov_9fa48("7425"), 'fa-list')
    }), stryMutAct_9fa48("7426") ? {} : (stryCov_9fa48("7426"), {
      cid: stryMutAct_9fa48("7427") ? "" : (stryCov_9fa48("7427"), 'admin'),
      name: stryMutAct_9fa48("7428") ? "" : (stryCov_9fa48("7428"), '[[admin/manage/privileges:admin]]'),
      icon: stryMutAct_9fa48("7429") ? "" : (stryCov_9fa48("7429"), 'fa-lock')
    })]);
    let selectedCategory;
    categoriesData.forEach(category => {
      if (stryMutAct_9fa48("7430")) {
        {}
      } else {
        stryCov_9fa48("7430");
        if (stryMutAct_9fa48("7432") ? false : stryMutAct_9fa48("7431") ? true : (stryCov_9fa48("7431", "7432"), category)) {
          if (stryMutAct_9fa48("7433")) {
            {}
          } else {
            stryCov_9fa48("7433");
            category.selected = stryMutAct_9fa48("7436") ? category.cid !== (!isAdminPriv ? cid : 'admin') : stryMutAct_9fa48("7435") ? false : stryMutAct_9fa48("7434") ? true : (stryCov_9fa48("7434", "7435", "7436"), category.cid === ((stryMutAct_9fa48("7437") ? isAdminPriv : (stryCov_9fa48("7437"), !isAdminPriv)) ? cid : stryMutAct_9fa48("7438") ? "" : (stryCov_9fa48("7438"), 'admin')));
            if (stryMutAct_9fa48("7440") ? false : stryMutAct_9fa48("7439") ? true : (stryCov_9fa48("7439", "7440"), category.selected)) {
              if (stryMutAct_9fa48("7441")) {
                {}
              } else {
                stryCov_9fa48("7441");
                selectedCategory = category;
              }
            }
          }
        }
      }
    });
    if (stryMutAct_9fa48("7444") ? false : stryMutAct_9fa48("7443") ? true : stryMutAct_9fa48("7442") ? selectedCategory : (stryCov_9fa48("7442", "7443", "7444"), !selectedCategory)) {
      if (stryMutAct_9fa48("7445")) {
        {}
      } else {
        stryCov_9fa48("7445");
        selectedCategory = await categories.getCategoryFields(cid, stryMutAct_9fa48("7446") ? [] : (stryCov_9fa48("7446"), [stryMutAct_9fa48("7447") ? "" : (stryCov_9fa48("7447"), 'cid'), stryMutAct_9fa48("7448") ? "" : (stryCov_9fa48("7448"), 'name'), stryMutAct_9fa48("7449") ? "" : (stryCov_9fa48("7449"), 'icon'), stryMutAct_9fa48("7450") ? "" : (stryCov_9fa48("7450"), 'bgColor'), stryMutAct_9fa48("7451") ? "" : (stryCov_9fa48("7451"), 'color')]));
      }
    }
    const group = req.query.group ? req.query.group : stryMutAct_9fa48("7452") ? "Stryker was here!" : (stryCov_9fa48("7452"), '');
    res.render(stryMutAct_9fa48("7453") ? "" : (stryCov_9fa48("7453"), 'admin/manage/privileges'), stryMutAct_9fa48("7454") ? {} : (stryCov_9fa48("7454"), {
      privileges: privilegesData,
      categories: categoriesData,
      selectedCategory,
      cid,
      group,
      isAdminPriv
    }));
  }
};