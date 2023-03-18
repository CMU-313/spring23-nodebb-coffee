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
const db = require('../../database');
module.exports = stryMutAct_9fa48("44345") ? {} : (stryCov_9fa48("44345"), {
  name: stryMutAct_9fa48("44346") ? "" : (stryCov_9fa48("44346"), 'Migrating flags to new schema'),
  timestamp: Date.UTC(2016, 11, 7),
  method: async function () {
    if (stryMutAct_9fa48("44347")) {
      {}
    } else {
      stryCov_9fa48("44347");
      const batch = require('../../batch');
      const posts = require('../../posts');
      const flags = require('../../flags');
      const {
        progress
      } = this;
      await batch.processSortedSet(stryMutAct_9fa48("44348") ? "" : (stryCov_9fa48("44348"), 'posts:pid'), async ids => {
        if (stryMutAct_9fa48("44349")) {
          {}
        } else {
          stryCov_9fa48("44349");
          let postData = await posts.getPostsByPids(ids, 1);
          postData = stryMutAct_9fa48("44350") ? postData : (stryCov_9fa48("44350"), postData.filter(stryMutAct_9fa48("44351") ? () => undefined : (stryCov_9fa48("44351"), post => post.hasOwnProperty(stryMutAct_9fa48("44352") ? "" : (stryCov_9fa48("44352"), 'flags')))));
          await Promise.all(postData.map(async post => {
            if (stryMutAct_9fa48("44353")) {
              {}
            } else {
              stryCov_9fa48("44353");
              progress.incr();
              const [uids, reasons] = await Promise.all(stryMutAct_9fa48("44354") ? [] : (stryCov_9fa48("44354"), [db.getSortedSetRangeWithScores(stryMutAct_9fa48("44355") ? `` : (stryCov_9fa48("44355"), `pid:${post.pid}:flag:uids`), 0, stryMutAct_9fa48("44356") ? +1 : (stryCov_9fa48("44356"), -1)), db.getSortedSetRange(stryMutAct_9fa48("44357") ? `` : (stryCov_9fa48("44357"), `pid:${post.pid}:flag:uid:reason`), 0, stryMutAct_9fa48("44358") ? +1 : (stryCov_9fa48("44358"), -1))]));

              // Adding in another check here in case a post was improperly dismissed
              // (flag count > 1 but no flags in db)
              if (stryMutAct_9fa48("44361") ? uids.length || reasons.length : stryMutAct_9fa48("44360") ? false : stryMutAct_9fa48("44359") ? true : (stryCov_9fa48("44359", "44360", "44361"), uids.length && reasons.length)) {
                if (stryMutAct_9fa48("44362")) {
                  {}
                } else {
                  stryCov_9fa48("44362");
                  // Just take the first entry
                  const datetime = uids[0].score;
                  const reason = reasons[0].split(stryMutAct_9fa48("44363") ? "" : (stryCov_9fa48("44363"), ':'))[1];
                  try {
                    if (stryMutAct_9fa48("44364")) {
                      {}
                    } else {
                      stryCov_9fa48("44364");
                      const flagObj = await flags.create(stryMutAct_9fa48("44365") ? "" : (stryCov_9fa48("44365"), 'post'), post.pid, uids[0].value, reason, datetime);
                      if (stryMutAct_9fa48("44368") ? post['flag:state'] && post['flag:assignee'] : stryMutAct_9fa48("44367") ? false : stryMutAct_9fa48("44366") ? true : (stryCov_9fa48("44366", "44367", "44368"), post[stryMutAct_9fa48("44369") ? "" : (stryCov_9fa48("44369"), 'flag:state')] || post[stryMutAct_9fa48("44370") ? "" : (stryCov_9fa48("44370"), 'flag:assignee')])) {
                        if (stryMutAct_9fa48("44371")) {
                          {}
                        } else {
                          stryCov_9fa48("44371");
                          await flags.update(flagObj.flagId, 1, stryMutAct_9fa48("44372") ? {} : (stryCov_9fa48("44372"), {
                            state: post[stryMutAct_9fa48("44373") ? "" : (stryCov_9fa48("44373"), 'flag:state')],
                            assignee: post[stryMutAct_9fa48("44374") ? "" : (stryCov_9fa48("44374"), 'flag:assignee')],
                            datetime: datetime
                          }));
                        }
                      }
                      if (stryMutAct_9fa48("44377") ? post.hasOwnProperty('flag:notes') || post['flag:notes'].length : stryMutAct_9fa48("44376") ? false : stryMutAct_9fa48("44375") ? true : (stryCov_9fa48("44375", "44376", "44377"), post.hasOwnProperty(stryMutAct_9fa48("44378") ? "" : (stryCov_9fa48("44378"), 'flag:notes')) && post[stryMutAct_9fa48("44379") ? "" : (stryCov_9fa48("44379"), 'flag:notes')].length)) {
                        if (stryMutAct_9fa48("44380")) {
                          {}
                        } else {
                          stryCov_9fa48("44380");
                          let history = JSON.parse(post[stryMutAct_9fa48("44381") ? "" : (stryCov_9fa48("44381"), 'flag:history')]);
                          history = stryMutAct_9fa48("44382") ? history[0] : (stryCov_9fa48("44382"), history.filter(stryMutAct_9fa48("44383") ? () => undefined : (stryCov_9fa48("44383"), event => stryMutAct_9fa48("44386") ? event.type !== 'notes' : stryMutAct_9fa48("44385") ? false : stryMutAct_9fa48("44384") ? true : (stryCov_9fa48("44384", "44385", "44386"), event.type === (stryMutAct_9fa48("44387") ? "" : (stryCov_9fa48("44387"), 'notes')))))[0]);
                          await flags.appendNote(flagObj.flagId, history.uid, post[stryMutAct_9fa48("44388") ? "" : (stryCov_9fa48("44388"), 'flag:notes')], history.timestamp);
                        }
                      }
                    }
                  } catch (err) {
                    if (stryMutAct_9fa48("44389")) {
                      {}
                    } else {
                      stryCov_9fa48("44389");
                      if (stryMutAct_9fa48("44392") ? err.message === '[[error:post-already-flagged]]' : stryMutAct_9fa48("44391") ? false : stryMutAct_9fa48("44390") ? true : (stryCov_9fa48("44390", "44391", "44392"), err.message !== (stryMutAct_9fa48("44393") ? "" : (stryCov_9fa48("44393"), '[[error:post-already-flagged]]')))) {
                        if (stryMutAct_9fa48("44394")) {
                          {}
                        } else {
                          stryCov_9fa48("44394");
                          throw err;
                        }
                      }
                    }
                  }
                }
              }
            }
          }));
        }
      }, stryMutAct_9fa48("44395") ? {} : (stryCov_9fa48("44395"), {
        progress: this.progress
      }));
    }
  }
});