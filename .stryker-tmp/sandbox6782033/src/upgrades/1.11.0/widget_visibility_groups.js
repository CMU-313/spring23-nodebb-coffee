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
module.exports = stryMutAct_9fa48("42665") ? {} : (stryCov_9fa48("42665"), {
  name: stryMutAct_9fa48("42666") ? "" : (stryCov_9fa48("42666"), 'Widget visibility groups'),
  timestamp: Date.UTC(2018, 10, 10),
  method: async function () {
    if (stryMutAct_9fa48("42667")) {
      {}
    } else {
      stryCov_9fa48("42667");
      const widgetAdmin = require('../../widgets/admin');
      const widgets = require('../../widgets');
      const areas = await widgetAdmin.getAreas();
      for (const area of areas) {
        if (stryMutAct_9fa48("42668")) {
          {}
        } else {
          stryCov_9fa48("42668");
          if (stryMutAct_9fa48("42670") ? false : stryMutAct_9fa48("42669") ? true : (stryCov_9fa48("42669", "42670"), area.data.length)) {
            if (stryMutAct_9fa48("42671")) {
              {}
            } else {
              stryCov_9fa48("42671");
              // area.data is actually an array of widgets
              area.widgets = area.data;
              area.widgets.forEach(widget => {
                if (stryMutAct_9fa48("42672")) {
                  {}
                } else {
                  stryCov_9fa48("42672");
                  if (stryMutAct_9fa48("42675") ? widget || widget.data : stryMutAct_9fa48("42674") ? false : stryMutAct_9fa48("42673") ? true : (stryCov_9fa48("42673", "42674", "42675"), widget && widget.data)) {
                    if (stryMutAct_9fa48("42676")) {
                      {}
                    } else {
                      stryCov_9fa48("42676");
                      const groupsToShow = stryMutAct_9fa48("42677") ? [] : (stryCov_9fa48("42677"), [stryMutAct_9fa48("42678") ? "" : (stryCov_9fa48("42678"), 'administrators'), stryMutAct_9fa48("42679") ? "" : (stryCov_9fa48("42679"), 'Global Moderators')]);
                      if (stryMutAct_9fa48("42682") ? widget.data['hide-guests'] === 'on' : stryMutAct_9fa48("42681") ? false : stryMutAct_9fa48("42680") ? true : (stryCov_9fa48("42680", "42681", "42682"), widget.data[stryMutAct_9fa48("42683") ? "" : (stryCov_9fa48("42683"), 'hide-guests')] !== (stryMutAct_9fa48("42684") ? "" : (stryCov_9fa48("42684"), 'on')))) {
                        if (stryMutAct_9fa48("42685")) {
                          {}
                        } else {
                          stryCov_9fa48("42685");
                          groupsToShow.push(stryMutAct_9fa48("42686") ? "" : (stryCov_9fa48("42686"), 'guests'));
                        }
                      }
                      if (stryMutAct_9fa48("42689") ? widget.data['hide-registered'] === 'on' : stryMutAct_9fa48("42688") ? false : stryMutAct_9fa48("42687") ? true : (stryCov_9fa48("42687", "42688", "42689"), widget.data[stryMutAct_9fa48("42690") ? "" : (stryCov_9fa48("42690"), 'hide-registered')] !== (stryMutAct_9fa48("42691") ? "" : (stryCov_9fa48("42691"), 'on')))) {
                        if (stryMutAct_9fa48("42692")) {
                          {}
                        } else {
                          stryCov_9fa48("42692");
                          groupsToShow.push(stryMutAct_9fa48("42693") ? "" : (stryCov_9fa48("42693"), 'registered-users'));
                        }
                      }
                      widget.data.groups = groupsToShow;

                      // if we are showing to all 4 groups, set to empty array
                      // empty groups is shown to everyone
                      if (stryMutAct_9fa48("42696") ? groupsToShow.length !== 4 : stryMutAct_9fa48("42695") ? false : stryMutAct_9fa48("42694") ? true : (stryCov_9fa48("42694", "42695", "42696"), groupsToShow.length === 4)) {
                        if (stryMutAct_9fa48("42697")) {
                          {}
                        } else {
                          stryCov_9fa48("42697");
                          widget.data.groups.length = 0;
                        }
                      }
                    }
                  }
                }
              });
              // eslint-disable-next-line no-await-in-loop
              await widgets.setArea(area);
            }
          }
        }
      }
    }
  }
});