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
helpers.mergeBatch = function (batchData, start, stop, sort) {
  if (stryMutAct_9fa48("12938")) {
    {}
  } else {
    stryCov_9fa48("12938");
    function getFirst() {
      if (stryMutAct_9fa48("12939")) {
        {}
      } else {
        stryCov_9fa48("12939");
        let selectedArray = batchData[0];
        for (let i = 1; stryMutAct_9fa48("12942") ? i >= batchData.length : stryMutAct_9fa48("12941") ? i <= batchData.length : stryMutAct_9fa48("12940") ? false : (stryCov_9fa48("12940", "12941", "12942"), i < batchData.length); stryMutAct_9fa48("12943") ? i-- : (stryCov_9fa48("12943"), i++)) {
          if (stryMutAct_9fa48("12944")) {
            {}
          } else {
            stryCov_9fa48("12944");
            if (stryMutAct_9fa48("12947") ? batchData[i].length || !selectedArray.length || sort === 1 && batchData[i][0].score < selectedArray[0].score || sort === -1 && batchData[i][0].score > selectedArray[0].score : stryMutAct_9fa48("12946") ? false : stryMutAct_9fa48("12945") ? true : (stryCov_9fa48("12945", "12946", "12947"), batchData[i].length && (stryMutAct_9fa48("12949") ? (!selectedArray.length || sort === 1 && batchData[i][0].score < selectedArray[0].score) && sort === -1 && batchData[i][0].score > selectedArray[0].score : stryMutAct_9fa48("12948") ? true : (stryCov_9fa48("12948", "12949"), (stryMutAct_9fa48("12951") ? !selectedArray.length && sort === 1 && batchData[i][0].score < selectedArray[0].score : stryMutAct_9fa48("12950") ? false : (stryCov_9fa48("12950", "12951"), (stryMutAct_9fa48("12952") ? selectedArray.length : (stryCov_9fa48("12952"), !selectedArray.length)) || (stryMutAct_9fa48("12954") ? sort === 1 || batchData[i][0].score < selectedArray[0].score : stryMutAct_9fa48("12953") ? false : (stryCov_9fa48("12953", "12954"), (stryMutAct_9fa48("12956") ? sort !== 1 : stryMutAct_9fa48("12955") ? true : (stryCov_9fa48("12955", "12956"), sort === 1)) && (stryMutAct_9fa48("12959") ? batchData[i][0].score >= selectedArray[0].score : stryMutAct_9fa48("12958") ? batchData[i][0].score <= selectedArray[0].score : stryMutAct_9fa48("12957") ? true : (stryCov_9fa48("12957", "12958", "12959"), batchData[i][0].score < selectedArray[0].score)))))) || (stryMutAct_9fa48("12961") ? sort === -1 || batchData[i][0].score > selectedArray[0].score : stryMutAct_9fa48("12960") ? false : (stryCov_9fa48("12960", "12961"), (stryMutAct_9fa48("12963") ? sort !== -1 : stryMutAct_9fa48("12962") ? true : (stryCov_9fa48("12962", "12963"), sort === (stryMutAct_9fa48("12964") ? +1 : (stryCov_9fa48("12964"), -1)))) && (stryMutAct_9fa48("12967") ? batchData[i][0].score <= selectedArray[0].score : stryMutAct_9fa48("12966") ? batchData[i][0].score >= selectedArray[0].score : stryMutAct_9fa48("12965") ? true : (stryCov_9fa48("12965", "12966", "12967"), batchData[i][0].score > selectedArray[0].score)))))))) {
              if (stryMutAct_9fa48("12968")) {
                {}
              } else {
                stryCov_9fa48("12968");
                selectedArray = batchData[i];
              }
            }
          }
        }
        return selectedArray.length ? selectedArray.shift() : null;
      }
    }
    let item = null;
    const result = stryMutAct_9fa48("12969") ? ["Stryker was here"] : (stryCov_9fa48("12969"), []);
    do {
      if (stryMutAct_9fa48("12982")) {
        {}
      } else {
        stryCov_9fa48("12982");
        item = getFirst(batchData);
        if (stryMutAct_9fa48("12984") ? false : stryMutAct_9fa48("12983") ? true : (stryCov_9fa48("12983", "12984"), item)) {
          if (stryMutAct_9fa48("12985")) {
            {}
          } else {
            stryCov_9fa48("12985");
            result.push(item);
          }
        }
      }
    } while (stryMutAct_9fa48("12971") ? item || result.length < stop - start + 1 || stop === -1 : stryMutAct_9fa48("12970") ? false : (stryCov_9fa48("12970", "12971"), item && (stryMutAct_9fa48("12973") ? result.length < stop - start + 1 && stop === -1 : stryMutAct_9fa48("12972") ? true : (stryCov_9fa48("12972", "12973"), (stryMutAct_9fa48("12976") ? result.length >= stop - start + 1 : stryMutAct_9fa48("12975") ? result.length <= stop - start + 1 : stryMutAct_9fa48("12974") ? false : (stryCov_9fa48("12974", "12975", "12976"), result.length < (stryMutAct_9fa48("12977") ? stop - start - 1 : (stryCov_9fa48("12977"), (stryMutAct_9fa48("12978") ? stop + start : (stryCov_9fa48("12978"), stop - start)) + 1)))) || (stryMutAct_9fa48("12980") ? stop !== -1 : stryMutAct_9fa48("12979") ? false : (stryCov_9fa48("12979", "12980"), stop === (stryMutAct_9fa48("12981") ? +1 : (stryCov_9fa48("12981"), -1))))))));
    return result;
  }
};