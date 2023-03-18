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
module.exports = function (module) {
  if (stryMutAct_9fa48("16860")) {
    {}
  } else {
    stryCov_9fa48("16860");
    module.transaction = async function (perform, txClient) {
      if (stryMutAct_9fa48("16861")) {
        {}
      } else {
        stryCov_9fa48("16861");
        let res;
        if (stryMutAct_9fa48("16863") ? false : stryMutAct_9fa48("16862") ? true : (stryCov_9fa48("16862", "16863"), txClient)) {
          if (stryMutAct_9fa48("16864")) {
            {}
          } else {
            stryCov_9fa48("16864");
            await txClient.query(stryMutAct_9fa48("16865") ? `` : (stryCov_9fa48("16865"), `SAVEPOINT nodebb_subtx`));
            try {
              if (stryMutAct_9fa48("16866")) {
                {}
              } else {
                stryCov_9fa48("16866");
                res = await perform(txClient);
              }
            } catch (err) {
              if (stryMutAct_9fa48("16867")) {
                {}
              } else {
                stryCov_9fa48("16867");
                await txClient.query(stryMutAct_9fa48("16868") ? `` : (stryCov_9fa48("16868"), `ROLLBACK TO SAVEPOINT nodebb_subtx`));
                throw err;
              }
            }
            await txClient.query(stryMutAct_9fa48("16869") ? `` : (stryCov_9fa48("16869"), `RELEASE SAVEPOINT nodebb_subtx`));
            return res;
          }
        }
        // see https://node-postgres.com/features/transactions#a-pooled-client-with-async-await
        const client = await module.pool.connect();
        try {
          if (stryMutAct_9fa48("16870")) {
            {}
          } else {
            stryCov_9fa48("16870");
            await client.query(stryMutAct_9fa48("16871") ? "" : (stryCov_9fa48("16871"), 'BEGIN'));
            res = await perform(client);
            await client.query(stryMutAct_9fa48("16872") ? "" : (stryCov_9fa48("16872"), 'COMMIT'));
          }
        } catch (err) {
          if (stryMutAct_9fa48("16873")) {
            {}
          } else {
            stryCov_9fa48("16873");
            await client.query(stryMutAct_9fa48("16874") ? "" : (stryCov_9fa48("16874"), 'ROLLBACK'));
            throw err;
          }
        } finally {
          if (stryMutAct_9fa48("16875")) {
            {}
          } else {
            stryCov_9fa48("16875");
            client.release();
          }
        }
        return res;
      }
    };
  }
};