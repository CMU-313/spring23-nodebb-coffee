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
const batch = require('../../batch');
module.exports = stryMutAct_9fa48("42976") ? {} : (stryCov_9fa48("42976"), {
  name: stryMutAct_9fa48("42977") ? "" : (stryCov_9fa48("42977"), 'Clean up post hash data'),
  timestamp: Date.UTC(2019, 9, 7),
  method: async function () {
    if (stryMutAct_9fa48("42978")) {
      {}
    } else {
      stryCov_9fa48("42978");
      const {
        progress
      } = this;
      await cleanPost(progress);
      await cleanTopic(progress);
    }
  }
});
async function cleanPost(progress) {
  if (stryMutAct_9fa48("42979")) {
    {}
  } else {
    stryCov_9fa48("42979");
    await batch.processSortedSet(stryMutAct_9fa48("42980") ? "" : (stryCov_9fa48("42980"), 'posts:pid'), async pids => {
      if (stryMutAct_9fa48("42981")) {
        {}
      } else {
        stryCov_9fa48("42981");
        progress.incr(pids.length);
        const postData = await db.getObjects(pids.map(stryMutAct_9fa48("42982") ? () => undefined : (stryCov_9fa48("42982"), pid => stryMutAct_9fa48("42983") ? `` : (stryCov_9fa48("42983"), `post:${pid}`))));
        await Promise.all(postData.map(async post => {
          if (stryMutAct_9fa48("42984")) {
            {}
          } else {
            stryCov_9fa48("42984");
            if (stryMutAct_9fa48("42987") ? false : stryMutAct_9fa48("42986") ? true : stryMutAct_9fa48("42985") ? post : (stryCov_9fa48("42985", "42986", "42987"), !post)) {
              if (stryMutAct_9fa48("42988")) {
                {}
              } else {
                stryCov_9fa48("42988");
                return;
              }
            }
            const fieldsToDelete = stryMutAct_9fa48("42989") ? ["Stryker was here"] : (stryCov_9fa48("42989"), []);
            if (stryMutAct_9fa48("42992") ? post.hasOwnProperty('editor') || post.editor === '' : stryMutAct_9fa48("42991") ? false : stryMutAct_9fa48("42990") ? true : (stryCov_9fa48("42990", "42991", "42992"), post.hasOwnProperty(stryMutAct_9fa48("42993") ? "" : (stryCov_9fa48("42993"), 'editor')) && (stryMutAct_9fa48("42995") ? post.editor !== '' : stryMutAct_9fa48("42994") ? true : (stryCov_9fa48("42994", "42995"), post.editor === (stryMutAct_9fa48("42996") ? "Stryker was here!" : (stryCov_9fa48("42996"), '')))))) {
              if (stryMutAct_9fa48("42997")) {
                {}
              } else {
                stryCov_9fa48("42997");
                fieldsToDelete.push(stryMutAct_9fa48("42998") ? "" : (stryCov_9fa48("42998"), 'editor'));
              }
            }
            if (stryMutAct_9fa48("43001") ? post.hasOwnProperty('deleted') || parseInt(post.deleted, 10) === 0 : stryMutAct_9fa48("43000") ? false : stryMutAct_9fa48("42999") ? true : (stryCov_9fa48("42999", "43000", "43001"), post.hasOwnProperty(stryMutAct_9fa48("43002") ? "" : (stryCov_9fa48("43002"), 'deleted')) && (stryMutAct_9fa48("43004") ? parseInt(post.deleted, 10) !== 0 : stryMutAct_9fa48("43003") ? true : (stryCov_9fa48("43003", "43004"), parseInt(post.deleted, 10) === 0)))) {
              if (stryMutAct_9fa48("43005")) {
                {}
              } else {
                stryCov_9fa48("43005");
                fieldsToDelete.push(stryMutAct_9fa48("43006") ? "" : (stryCov_9fa48("43006"), 'deleted'));
              }
            }
            if (stryMutAct_9fa48("43009") ? post.hasOwnProperty('edited') || parseInt(post.edited, 10) === 0 : stryMutAct_9fa48("43008") ? false : stryMutAct_9fa48("43007") ? true : (stryCov_9fa48("43007", "43008", "43009"), post.hasOwnProperty(stryMutAct_9fa48("43010") ? "" : (stryCov_9fa48("43010"), 'edited')) && (stryMutAct_9fa48("43012") ? parseInt(post.edited, 10) !== 0 : stryMutAct_9fa48("43011") ? true : (stryCov_9fa48("43011", "43012"), parseInt(post.edited, 10) === 0)))) {
              if (stryMutAct_9fa48("43013")) {
                {}
              } else {
                stryCov_9fa48("43013");
                fieldsToDelete.push(stryMutAct_9fa48("43014") ? "" : (stryCov_9fa48("43014"), 'edited'));
              }
            }

            // cleanup legacy fields, these are not used anymore
            const legacyFields = stryMutAct_9fa48("43015") ? [] : (stryCov_9fa48("43015"), [stryMutAct_9fa48("43016") ? "" : (stryCov_9fa48("43016"), 'show_banned'), stryMutAct_9fa48("43017") ? "" : (stryCov_9fa48("43017"), 'fav_star_class'), stryMutAct_9fa48("43018") ? "" : (stryCov_9fa48("43018"), 'relativeEditTime'), stryMutAct_9fa48("43019") ? "" : (stryCov_9fa48("43019"), 'post_rep'), stryMutAct_9fa48("43020") ? "" : (stryCov_9fa48("43020"), 'relativeTime'), stryMutAct_9fa48("43021") ? "" : (stryCov_9fa48("43021"), 'fav_button_class'), stryMutAct_9fa48("43022") ? "" : (stryCov_9fa48("43022"), 'edited-class')]);
            legacyFields.forEach(field => {
              if (stryMutAct_9fa48("43023")) {
                {}
              } else {
                stryCov_9fa48("43023");
                if (stryMutAct_9fa48("43025") ? false : stryMutAct_9fa48("43024") ? true : (stryCov_9fa48("43024", "43025"), post.hasOwnProperty(field))) {
                  if (stryMutAct_9fa48("43026")) {
                    {}
                  } else {
                    stryCov_9fa48("43026");
                    fieldsToDelete.push(field);
                  }
                }
              }
            });
            if (stryMutAct_9fa48("43028") ? false : stryMutAct_9fa48("43027") ? true : (stryCov_9fa48("43027", "43028"), fieldsToDelete.length)) {
              if (stryMutAct_9fa48("43029")) {
                {}
              } else {
                stryCov_9fa48("43029");
                await db.deleteObjectFields(stryMutAct_9fa48("43030") ? `` : (stryCov_9fa48("43030"), `post:${post.pid}`), fieldsToDelete);
              }
            }
          }
        }));
      }
    }, stryMutAct_9fa48("43031") ? {} : (stryCov_9fa48("43031"), {
      batch: 500,
      progress: progress
    }));
  }
}
async function cleanTopic(progress) {
  if (stryMutAct_9fa48("43032")) {
    {}
  } else {
    stryCov_9fa48("43032");
    await batch.processSortedSet(stryMutAct_9fa48("43033") ? "" : (stryCov_9fa48("43033"), 'topics:tid'), async tids => {
      if (stryMutAct_9fa48("43034")) {
        {}
      } else {
        stryCov_9fa48("43034");
        progress.incr(tids.length);
        const topicData = await db.getObjects(tids.map(stryMutAct_9fa48("43035") ? () => undefined : (stryCov_9fa48("43035"), tid => stryMutAct_9fa48("43036") ? `` : (stryCov_9fa48("43036"), `topic:${tid}`))));
        await Promise.all(topicData.map(async topic => {
          if (stryMutAct_9fa48("43037")) {
            {}
          } else {
            stryCov_9fa48("43037");
            if (stryMutAct_9fa48("43040") ? false : stryMutAct_9fa48("43039") ? true : stryMutAct_9fa48("43038") ? topic : (stryCov_9fa48("43038", "43039", "43040"), !topic)) {
              if (stryMutAct_9fa48("43041")) {
                {}
              } else {
                stryCov_9fa48("43041");
                return;
              }
            }
            const fieldsToDelete = stryMutAct_9fa48("43042") ? ["Stryker was here"] : (stryCov_9fa48("43042"), []);
            if (stryMutAct_9fa48("43045") ? topic.hasOwnProperty('deleted') || parseInt(topic.deleted, 10) === 0 : stryMutAct_9fa48("43044") ? false : stryMutAct_9fa48("43043") ? true : (stryCov_9fa48("43043", "43044", "43045"), topic.hasOwnProperty(stryMutAct_9fa48("43046") ? "" : (stryCov_9fa48("43046"), 'deleted')) && (stryMutAct_9fa48("43048") ? parseInt(topic.deleted, 10) !== 0 : stryMutAct_9fa48("43047") ? true : (stryCov_9fa48("43047", "43048"), parseInt(topic.deleted, 10) === 0)))) {
              if (stryMutAct_9fa48("43049")) {
                {}
              } else {
                stryCov_9fa48("43049");
                fieldsToDelete.push(stryMutAct_9fa48("43050") ? "" : (stryCov_9fa48("43050"), 'deleted'));
              }
            }
            if (stryMutAct_9fa48("43053") ? topic.hasOwnProperty('pinned') || parseInt(topic.pinned, 10) === 0 : stryMutAct_9fa48("43052") ? false : stryMutAct_9fa48("43051") ? true : (stryCov_9fa48("43051", "43052", "43053"), topic.hasOwnProperty(stryMutAct_9fa48("43054") ? "" : (stryCov_9fa48("43054"), 'pinned')) && (stryMutAct_9fa48("43056") ? parseInt(topic.pinned, 10) !== 0 : stryMutAct_9fa48("43055") ? true : (stryCov_9fa48("43055", "43056"), parseInt(topic.pinned, 10) === 0)))) {
              if (stryMutAct_9fa48("43057")) {
                {}
              } else {
                stryCov_9fa48("43057");
                fieldsToDelete.push(stryMutAct_9fa48("43058") ? "" : (stryCov_9fa48("43058"), 'pinned'));
              }
            }
            if (stryMutAct_9fa48("43061") ? topic.hasOwnProperty('locked') || parseInt(topic.locked, 10) === 0 : stryMutAct_9fa48("43060") ? false : stryMutAct_9fa48("43059") ? true : (stryCov_9fa48("43059", "43060", "43061"), topic.hasOwnProperty(stryMutAct_9fa48("43062") ? "" : (stryCov_9fa48("43062"), 'locked')) && (stryMutAct_9fa48("43064") ? parseInt(topic.locked, 10) !== 0 : stryMutAct_9fa48("43063") ? true : (stryCov_9fa48("43063", "43064"), parseInt(topic.locked, 10) === 0)))) {
              if (stryMutAct_9fa48("43065")) {
                {}
              } else {
                stryCov_9fa48("43065");
                fieldsToDelete.push(stryMutAct_9fa48("43066") ? "" : (stryCov_9fa48("43066"), 'locked'));
              }
            }

            // cleanup legacy fields, these are not used anymore
            const legacyFields = stryMutAct_9fa48("43067") ? [] : (stryCov_9fa48("43067"), [stryMutAct_9fa48("43068") ? "" : (stryCov_9fa48("43068"), 'category_name'), stryMutAct_9fa48("43069") ? "" : (stryCov_9fa48("43069"), 'category_slug')]);
            legacyFields.forEach(field => {
              if (stryMutAct_9fa48("43070")) {
                {}
              } else {
                stryCov_9fa48("43070");
                if (stryMutAct_9fa48("43072") ? false : stryMutAct_9fa48("43071") ? true : (stryCov_9fa48("43071", "43072"), topic.hasOwnProperty(field))) {
                  if (stryMutAct_9fa48("43073")) {
                    {}
                  } else {
                    stryCov_9fa48("43073");
                    fieldsToDelete.push(field);
                  }
                }
              }
            });
            if (stryMutAct_9fa48("43075") ? false : stryMutAct_9fa48("43074") ? true : (stryCov_9fa48("43074", "43075"), fieldsToDelete.length)) {
              if (stryMutAct_9fa48("43076")) {
                {}
              } else {
                stryCov_9fa48("43076");
                await db.deleteObjectFields(stryMutAct_9fa48("43077") ? `` : (stryCov_9fa48("43077"), `topic:${topic.tid}`), fieldsToDelete);
              }
            }
          }
        }));
      }
    }, stryMutAct_9fa48("43078") ? {} : (stryCov_9fa48("43078"), {
      batch: 500,
      progress: progress
    }));
  }
}