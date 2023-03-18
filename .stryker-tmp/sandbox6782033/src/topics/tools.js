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
const db = require('../database');
const topics = require('.');
const categories = require('../categories');
const user = require('../user');
const plugins = require('../plugins');
const privileges = require('../privileges');
const utils = require('../utils');
module.exports = function (Topics) {
  if (stryMutAct_9fa48("40943")) {
    {}
  } else {
    stryCov_9fa48("40943");
    const topicTools = {};
    Topics.tools = topicTools;
    topicTools.delete = async function (tid, uid) {
      if (stryMutAct_9fa48("40944")) {
        {}
      } else {
        stryCov_9fa48("40944");
        return await toggleDelete(tid, uid, stryMutAct_9fa48("40945") ? false : (stryCov_9fa48("40945"), true));
      }
    };
    topicTools.restore = async function (tid, uid) {
      if (stryMutAct_9fa48("40946")) {
        {}
      } else {
        stryCov_9fa48("40946");
        return await toggleDelete(tid, uid, stryMutAct_9fa48("40947") ? true : (stryCov_9fa48("40947"), false));
      }
    };
    async function toggleDelete(tid, uid, isDelete) {
      if (stryMutAct_9fa48("40948")) {
        {}
      } else {
        stryCov_9fa48("40948");
        const topicData = await Topics.getTopicData(tid);
        if (stryMutAct_9fa48("40951") ? false : stryMutAct_9fa48("40950") ? true : stryMutAct_9fa48("40949") ? topicData : (stryCov_9fa48("40949", "40950", "40951"), !topicData)) {
          if (stryMutAct_9fa48("40952")) {
            {}
          } else {
            stryCov_9fa48("40952");
            throw new Error(stryMutAct_9fa48("40953") ? "" : (stryCov_9fa48("40953"), '[[error:no-topic]]'));
          }
        }
        // Scheduled topics can only be purged
        if (stryMutAct_9fa48("40955") ? false : stryMutAct_9fa48("40954") ? true : (stryCov_9fa48("40954", "40955"), topicData.scheduled)) {
          if (stryMutAct_9fa48("40956")) {
            {}
          } else {
            stryCov_9fa48("40956");
            throw new Error(stryMutAct_9fa48("40957") ? "" : (stryCov_9fa48("40957"), '[[error:invalid-data]]'));
          }
        }
        const canDelete = await privileges.topics.canDelete(tid, uid);
        const hook = isDelete ? stryMutAct_9fa48("40958") ? "" : (stryCov_9fa48("40958"), 'delete') : stryMutAct_9fa48("40959") ? "" : (stryCov_9fa48("40959"), 'restore');
        const data = await plugins.hooks.fire(stryMutAct_9fa48("40960") ? `` : (stryCov_9fa48("40960"), `filter:topic.${hook}`), stryMutAct_9fa48("40961") ? {} : (stryCov_9fa48("40961"), {
          topicData: topicData,
          uid: uid,
          isDelete: isDelete,
          canDelete: canDelete,
          canRestore: canDelete
        }));
        if (stryMutAct_9fa48("40964") ? !data.canDelete && data.isDelete && !data.canRestore && !data.isDelete : stryMutAct_9fa48("40963") ? false : stryMutAct_9fa48("40962") ? true : (stryCov_9fa48("40962", "40963", "40964"), (stryMutAct_9fa48("40966") ? !data.canDelete || data.isDelete : stryMutAct_9fa48("40965") ? false : (stryCov_9fa48("40965", "40966"), (stryMutAct_9fa48("40967") ? data.canDelete : (stryCov_9fa48("40967"), !data.canDelete)) && data.isDelete)) || (stryMutAct_9fa48("40969") ? !data.canRestore || !data.isDelete : stryMutAct_9fa48("40968") ? false : (stryCov_9fa48("40968", "40969"), (stryMutAct_9fa48("40970") ? data.canRestore : (stryCov_9fa48("40970"), !data.canRestore)) && (stryMutAct_9fa48("40971") ? data.isDelete : (stryCov_9fa48("40971"), !data.isDelete)))))) {
          if (stryMutAct_9fa48("40972")) {
            {}
          } else {
            stryCov_9fa48("40972");
            throw new Error(stryMutAct_9fa48("40973") ? "" : (stryCov_9fa48("40973"), '[[error:no-privileges]]'));
          }
        }
        if (stryMutAct_9fa48("40976") ? data.topicData.deleted || data.isDelete : stryMutAct_9fa48("40975") ? false : stryMutAct_9fa48("40974") ? true : (stryCov_9fa48("40974", "40975", "40976"), data.topicData.deleted && data.isDelete)) {
          if (stryMutAct_9fa48("40977")) {
            {}
          } else {
            stryCov_9fa48("40977");
            throw new Error(stryMutAct_9fa48("40978") ? "" : (stryCov_9fa48("40978"), '[[error:topic-already-deleted]]'));
          }
        } else if (stryMutAct_9fa48("40981") ? !data.topicData.deleted || !data.isDelete : stryMutAct_9fa48("40980") ? false : stryMutAct_9fa48("40979") ? true : (stryCov_9fa48("40979", "40980", "40981"), (stryMutAct_9fa48("40982") ? data.topicData.deleted : (stryCov_9fa48("40982"), !data.topicData.deleted)) && (stryMutAct_9fa48("40983") ? data.isDelete : (stryCov_9fa48("40983"), !data.isDelete)))) {
          if (stryMutAct_9fa48("40984")) {
            {}
          } else {
            stryCov_9fa48("40984");
            throw new Error(stryMutAct_9fa48("40985") ? "" : (stryCov_9fa48("40985"), '[[error:topic-already-restored]]'));
          }
        }
        if (stryMutAct_9fa48("40987") ? false : stryMutAct_9fa48("40986") ? true : (stryCov_9fa48("40986", "40987"), data.isDelete)) {
          if (stryMutAct_9fa48("40988")) {
            {}
          } else {
            stryCov_9fa48("40988");
            await Topics.delete(data.topicData.tid, data.uid);
          }
        } else {
          if (stryMutAct_9fa48("40989")) {
            {}
          } else {
            stryCov_9fa48("40989");
            await Topics.restore(data.topicData.tid);
          }
        }
        const events = await Topics.events.log(tid, stryMutAct_9fa48("40990") ? {} : (stryCov_9fa48("40990"), {
          type: isDelete ? stryMutAct_9fa48("40991") ? "" : (stryCov_9fa48("40991"), 'delete') : stryMutAct_9fa48("40992") ? "" : (stryCov_9fa48("40992"), 'restore'),
          uid
        }));
        data.topicData.deleted = data.isDelete ? 1 : 0;
        if (stryMutAct_9fa48("40994") ? false : stryMutAct_9fa48("40993") ? true : (stryCov_9fa48("40993", "40994"), data.isDelete)) {
          if (stryMutAct_9fa48("40995")) {
            {}
          } else {
            stryCov_9fa48("40995");
            plugins.hooks.fire(stryMutAct_9fa48("40996") ? "" : (stryCov_9fa48("40996"), 'action:topic.delete'), stryMutAct_9fa48("40997") ? {} : (stryCov_9fa48("40997"), {
              topic: data.topicData,
              uid: data.uid
            }));
          }
        } else {
          if (stryMutAct_9fa48("40998")) {
            {}
          } else {
            stryCov_9fa48("40998");
            plugins.hooks.fire(stryMutAct_9fa48("40999") ? "" : (stryCov_9fa48("40999"), 'action:topic.restore'), stryMutAct_9fa48("41000") ? {} : (stryCov_9fa48("41000"), {
              topic: data.topicData,
              uid: data.uid
            }));
          }
        }
        const userData = await user.getUserFields(data.uid, stryMutAct_9fa48("41001") ? [] : (stryCov_9fa48("41001"), [stryMutAct_9fa48("41002") ? "" : (stryCov_9fa48("41002"), 'username'), stryMutAct_9fa48("41003") ? "" : (stryCov_9fa48("41003"), 'userslug')]));
        return stryMutAct_9fa48("41004") ? {} : (stryCov_9fa48("41004"), {
          tid: data.topicData.tid,
          cid: data.topicData.cid,
          isDelete: data.isDelete,
          uid: data.uid,
          user: userData,
          events
        });
      }
    }
    topicTools.purge = async function (tid, uid) {
      if (stryMutAct_9fa48("41005")) {
        {}
      } else {
        stryCov_9fa48("41005");
        const topicData = await Topics.getTopicData(tid);
        if (stryMutAct_9fa48("41008") ? false : stryMutAct_9fa48("41007") ? true : stryMutAct_9fa48("41006") ? topicData : (stryCov_9fa48("41006", "41007", "41008"), !topicData)) {
          if (stryMutAct_9fa48("41009")) {
            {}
          } else {
            stryCov_9fa48("41009");
            throw new Error(stryMutAct_9fa48("41010") ? "" : (stryCov_9fa48("41010"), '[[error:no-topic]]'));
          }
        }
        const canPurge = await privileges.topics.canPurge(tid, uid);
        if (stryMutAct_9fa48("41013") ? false : stryMutAct_9fa48("41012") ? true : stryMutAct_9fa48("41011") ? canPurge : (stryCov_9fa48("41011", "41012", "41013"), !canPurge)) {
          if (stryMutAct_9fa48("41014")) {
            {}
          } else {
            stryCov_9fa48("41014");
            throw new Error(stryMutAct_9fa48("41015") ? "" : (stryCov_9fa48("41015"), '[[error:no-privileges]]'));
          }
        }
        await Topics.purgePostsAndTopic(tid, uid);
        return stryMutAct_9fa48("41016") ? {} : (stryCov_9fa48("41016"), {
          tid: tid,
          cid: topicData.cid,
          uid: uid
        });
      }
    };
    topicTools.lock = async function (tid, uid) {
      if (stryMutAct_9fa48("41017")) {
        {}
      } else {
        stryCov_9fa48("41017");
        return await toggleLock(tid, uid, stryMutAct_9fa48("41018") ? false : (stryCov_9fa48("41018"), true));
      }
    };
    topicTools.unlock = async function (tid, uid) {
      if (stryMutAct_9fa48("41019")) {
        {}
      } else {
        stryCov_9fa48("41019");
        return await toggleLock(tid, uid, stryMutAct_9fa48("41020") ? true : (stryCov_9fa48("41020"), false));
      }
    };
    async function toggleLock(tid, uid, lock) {
      if (stryMutAct_9fa48("41021")) {
        {}
      } else {
        stryCov_9fa48("41021");
        const topicData = await Topics.getTopicFields(tid, stryMutAct_9fa48("41022") ? [] : (stryCov_9fa48("41022"), [stryMutAct_9fa48("41023") ? "" : (stryCov_9fa48("41023"), 'tid'), stryMutAct_9fa48("41024") ? "" : (stryCov_9fa48("41024"), 'uid'), stryMutAct_9fa48("41025") ? "" : (stryCov_9fa48("41025"), 'cid')]));
        if (stryMutAct_9fa48("41028") ? !topicData && !topicData.cid : stryMutAct_9fa48("41027") ? false : stryMutAct_9fa48("41026") ? true : (stryCov_9fa48("41026", "41027", "41028"), (stryMutAct_9fa48("41029") ? topicData : (stryCov_9fa48("41029"), !topicData)) || (stryMutAct_9fa48("41030") ? topicData.cid : (stryCov_9fa48("41030"), !topicData.cid)))) {
          if (stryMutAct_9fa48("41031")) {
            {}
          } else {
            stryCov_9fa48("41031");
            throw new Error(stryMutAct_9fa48("41032") ? "" : (stryCov_9fa48("41032"), '[[error:no-topic]]'));
          }
        }
        const isAdminOrMod = await privileges.categories.isAdminOrMod(topicData.cid, uid);
        if (stryMutAct_9fa48("41035") ? false : stryMutAct_9fa48("41034") ? true : stryMutAct_9fa48("41033") ? isAdminOrMod : (stryCov_9fa48("41033", "41034", "41035"), !isAdminOrMod)) {
          if (stryMutAct_9fa48("41036")) {
            {}
          } else {
            stryCov_9fa48("41036");
            throw new Error(stryMutAct_9fa48("41037") ? "" : (stryCov_9fa48("41037"), '[[error:no-privileges]]'));
          }
        }
        await Topics.setTopicField(tid, stryMutAct_9fa48("41038") ? "" : (stryCov_9fa48("41038"), 'locked'), lock ? 1 : 0);
        topicData.events = await Topics.events.log(tid, stryMutAct_9fa48("41039") ? {} : (stryCov_9fa48("41039"), {
          type: lock ? stryMutAct_9fa48("41040") ? "" : (stryCov_9fa48("41040"), 'lock') : stryMutAct_9fa48("41041") ? "" : (stryCov_9fa48("41041"), 'unlock'),
          uid
        }));
        topicData.isLocked = lock; // deprecate in v2.0
        topicData.locked = lock;
        plugins.hooks.fire(stryMutAct_9fa48("41042") ? "" : (stryCov_9fa48("41042"), 'action:topic.lock'), stryMutAct_9fa48("41043") ? {} : (stryCov_9fa48("41043"), {
          topic: _.clone(topicData),
          uid: uid
        }));
        return topicData;
      }
    }
    topicTools.pin = async function (tid, uid) {
      if (stryMutAct_9fa48("41044")) {
        {}
      } else {
        stryCov_9fa48("41044");
        return await togglePin(tid, uid, stryMutAct_9fa48("41045") ? false : (stryCov_9fa48("41045"), true));
      }
    };
    topicTools.unpin = async function (tid, uid) {
      if (stryMutAct_9fa48("41046")) {
        {}
      } else {
        stryCov_9fa48("41046");
        return await togglePin(tid, uid, stryMutAct_9fa48("41047") ? true : (stryCov_9fa48("41047"), false));
      }
    };
    topicTools.setPinExpiry = async (tid, expiry, uid) => {
      if (stryMutAct_9fa48("41048")) {
        {}
      } else {
        stryCov_9fa48("41048");
        if (stryMutAct_9fa48("41051") ? isNaN(parseInt(expiry, 10)) && expiry <= Date.now() : stryMutAct_9fa48("41050") ? false : stryMutAct_9fa48("41049") ? true : (stryCov_9fa48("41049", "41050", "41051"), isNaN(parseInt(expiry, 10)) || (stryMutAct_9fa48("41054") ? expiry > Date.now() : stryMutAct_9fa48("41053") ? expiry < Date.now() : stryMutAct_9fa48("41052") ? false : (stryCov_9fa48("41052", "41053", "41054"), expiry <= Date.now())))) {
          if (stryMutAct_9fa48("41055")) {
            {}
          } else {
            stryCov_9fa48("41055");
            throw new Error(stryMutAct_9fa48("41056") ? "" : (stryCov_9fa48("41056"), '[[error:invalid-data]]'));
          }
        }
        const topicData = await Topics.getTopicFields(tid, stryMutAct_9fa48("41057") ? [] : (stryCov_9fa48("41057"), [stryMutAct_9fa48("41058") ? "" : (stryCov_9fa48("41058"), 'tid'), stryMutAct_9fa48("41059") ? "" : (stryCov_9fa48("41059"), 'uid'), stryMutAct_9fa48("41060") ? "" : (stryCov_9fa48("41060"), 'cid')]));
        const isAdminOrMod = await privileges.categories.isAdminOrMod(topicData.cid, uid);
        if (stryMutAct_9fa48("41063") ? false : stryMutAct_9fa48("41062") ? true : stryMutAct_9fa48("41061") ? isAdminOrMod : (stryCov_9fa48("41061", "41062", "41063"), !isAdminOrMod)) {
          if (stryMutAct_9fa48("41064")) {
            {}
          } else {
            stryCov_9fa48("41064");
            throw new Error(stryMutAct_9fa48("41065") ? "" : (stryCov_9fa48("41065"), '[[error:no-privileges]]'));
          }
        }
        await Topics.setTopicField(tid, stryMutAct_9fa48("41066") ? "" : (stryCov_9fa48("41066"), 'pinExpiry'), expiry);
        plugins.hooks.fire(stryMutAct_9fa48("41067") ? "" : (stryCov_9fa48("41067"), 'action:topic.setPinExpiry'), stryMutAct_9fa48("41068") ? {} : (stryCov_9fa48("41068"), {
          topic: _.clone(topicData),
          uid: uid
        }));
      }
    };
    topicTools.checkPinExpiry = async tids => {
      if (stryMutAct_9fa48("41069")) {
        {}
      } else {
        stryCov_9fa48("41069");
        const expiry = (await topics.getTopicsFields(tids, stryMutAct_9fa48("41070") ? [] : (stryCov_9fa48("41070"), [stryMutAct_9fa48("41071") ? "" : (stryCov_9fa48("41071"), 'pinExpiry')]))).map(stryMutAct_9fa48("41072") ? () => undefined : (stryCov_9fa48("41072"), obj => obj.pinExpiry));
        const now = Date.now();
        tids = await Promise.all(tids.map(async (tid, idx) => {
          if (stryMutAct_9fa48("41073")) {
            {}
          } else {
            stryCov_9fa48("41073");
            if (stryMutAct_9fa48("41076") ? expiry[idx] || parseInt(expiry[idx], 10) <= now : stryMutAct_9fa48("41075") ? false : stryMutAct_9fa48("41074") ? true : (stryCov_9fa48("41074", "41075", "41076"), expiry[idx] && (stryMutAct_9fa48("41079") ? parseInt(expiry[idx], 10) > now : stryMutAct_9fa48("41078") ? parseInt(expiry[idx], 10) < now : stryMutAct_9fa48("41077") ? true : (stryCov_9fa48("41077", "41078", "41079"), parseInt(expiry[idx], 10) <= now)))) {
              if (stryMutAct_9fa48("41080")) {
                {}
              } else {
                stryCov_9fa48("41080");
                await togglePin(tid, stryMutAct_9fa48("41081") ? "" : (stryCov_9fa48("41081"), 'system'), stryMutAct_9fa48("41082") ? true : (stryCov_9fa48("41082"), false));
                return null;
              }
            }
            return tid;
          }
        }));
        return stryMutAct_9fa48("41083") ? tids : (stryCov_9fa48("41083"), tids.filter(Boolean));
      }
    };
    async function togglePin(tid, uid, pin) {
      if (stryMutAct_9fa48("41084")) {
        {}
      } else {
        stryCov_9fa48("41084");
        const topicData = await Topics.getTopicData(tid);
        if (stryMutAct_9fa48("41087") ? false : stryMutAct_9fa48("41086") ? true : stryMutAct_9fa48("41085") ? topicData : (stryCov_9fa48("41085", "41086", "41087"), !topicData)) {
          if (stryMutAct_9fa48("41088")) {
            {}
          } else {
            stryCov_9fa48("41088");
            throw new Error(stryMutAct_9fa48("41089") ? "" : (stryCov_9fa48("41089"), '[[error:no-topic]]'));
          }
        }
        if (stryMutAct_9fa48("41091") ? false : stryMutAct_9fa48("41090") ? true : (stryCov_9fa48("41090", "41091"), topicData.scheduled)) {
          if (stryMutAct_9fa48("41092")) {
            {}
          } else {
            stryCov_9fa48("41092");
            throw new Error(stryMutAct_9fa48("41093") ? "" : (stryCov_9fa48("41093"), '[[error:cant-pin-scheduled]]'));
          }
        }
        if (stryMutAct_9fa48("41096") ? uid !== 'system' || !(await privileges.topics.isAdminOrMod(tid, uid)) : stryMutAct_9fa48("41095") ? false : stryMutAct_9fa48("41094") ? true : (stryCov_9fa48("41094", "41095", "41096"), (stryMutAct_9fa48("41098") ? uid === 'system' : stryMutAct_9fa48("41097") ? true : (stryCov_9fa48("41097", "41098"), uid !== (stryMutAct_9fa48("41099") ? "" : (stryCov_9fa48("41099"), 'system')))) && (stryMutAct_9fa48("41100") ? await privileges.topics.isAdminOrMod(tid, uid) : (stryCov_9fa48("41100"), !(await privileges.topics.isAdminOrMod(tid, uid)))))) {
          if (stryMutAct_9fa48("41101")) {
            {}
          } else {
            stryCov_9fa48("41101");
            throw new Error(stryMutAct_9fa48("41102") ? "" : (stryCov_9fa48("41102"), '[[error:no-privileges]]'));
          }
        }
        const promises = stryMutAct_9fa48("41103") ? [] : (stryCov_9fa48("41103"), [Topics.setTopicField(tid, stryMutAct_9fa48("41104") ? "" : (stryCov_9fa48("41104"), 'pinned'), pin ? 1 : 0), Topics.events.log(tid, stryMutAct_9fa48("41105") ? {} : (stryCov_9fa48("41105"), {
          type: pin ? stryMutAct_9fa48("41106") ? "" : (stryCov_9fa48("41106"), 'pin') : stryMutAct_9fa48("41107") ? "" : (stryCov_9fa48("41107"), 'unpin'),
          uid
        }))]);
        if (stryMutAct_9fa48("41109") ? false : stryMutAct_9fa48("41108") ? true : (stryCov_9fa48("41108", "41109"), pin)) {
          if (stryMutAct_9fa48("41110")) {
            {}
          } else {
            stryCov_9fa48("41110");
            promises.push(db.sortedSetAdd(stryMutAct_9fa48("41111") ? `` : (stryCov_9fa48("41111"), `cid:${topicData.cid}:tids:pinned`), Date.now(), tid));
            promises.push(db.sortedSetsRemove(stryMutAct_9fa48("41112") ? [] : (stryCov_9fa48("41112"), [stryMutAct_9fa48("41113") ? `` : (stryCov_9fa48("41113"), `cid:${topicData.cid}:tids`), stryMutAct_9fa48("41114") ? `` : (stryCov_9fa48("41114"), `cid:${topicData.cid}:tids:posts`), stryMutAct_9fa48("41115") ? `` : (stryCov_9fa48("41115"), `cid:${topicData.cid}:tids:votes`), stryMutAct_9fa48("41116") ? `` : (stryCov_9fa48("41116"), `cid:${topicData.cid}:tids:views`)]), tid));
          }
        } else {
          if (stryMutAct_9fa48("41117")) {
            {}
          } else {
            stryCov_9fa48("41117");
            promises.push(db.sortedSetRemove(stryMutAct_9fa48("41118") ? `` : (stryCov_9fa48("41118"), `cid:${topicData.cid}:tids:pinned`), tid));
            promises.push(Topics.deleteTopicField(tid, stryMutAct_9fa48("41119") ? "" : (stryCov_9fa48("41119"), 'pinExpiry')));
            promises.push(db.sortedSetAddBulk(stryMutAct_9fa48("41120") ? [] : (stryCov_9fa48("41120"), [stryMutAct_9fa48("41121") ? [] : (stryCov_9fa48("41121"), [stryMutAct_9fa48("41122") ? `` : (stryCov_9fa48("41122"), `cid:${topicData.cid}:tids`), topicData.lastposttime, tid]), stryMutAct_9fa48("41123") ? [] : (stryCov_9fa48("41123"), [stryMutAct_9fa48("41124") ? `` : (stryCov_9fa48("41124"), `cid:${topicData.cid}:tids:posts`), topicData.postcount, tid]), stryMutAct_9fa48("41125") ? [] : (stryCov_9fa48("41125"), [stryMutAct_9fa48("41126") ? `` : (stryCov_9fa48("41126"), `cid:${topicData.cid}:tids:votes`), stryMutAct_9fa48("41129") ? parseInt(topicData.votes, 10) && 0 : stryMutAct_9fa48("41128") ? false : stryMutAct_9fa48("41127") ? true : (stryCov_9fa48("41127", "41128", "41129"), parseInt(topicData.votes, 10) || 0), tid]), stryMutAct_9fa48("41130") ? [] : (stryCov_9fa48("41130"), [stryMutAct_9fa48("41131") ? `` : (stryCov_9fa48("41131"), `cid:${topicData.cid}:tids:views`), topicData.viewcount, tid])])));
            topicData.pinExpiry = undefined;
            topicData.pinExpiryISO = undefined;
          }
        }
        const results = await Promise.all(promises);
        topicData.isPinned = pin; // deprecate in v2.0
        topicData.pinned = pin;
        topicData.events = results[1];
        plugins.hooks.fire(stryMutAct_9fa48("41132") ? "" : (stryCov_9fa48("41132"), 'action:topic.pin'), stryMutAct_9fa48("41133") ? {} : (stryCov_9fa48("41133"), {
          topic: _.clone(topicData),
          uid
        }));
        return topicData;
      }
    }
    topicTools.orderPinnedTopics = async function (uid, data) {
      if (stryMutAct_9fa48("41134")) {
        {}
      } else {
        stryCov_9fa48("41134");
        const {
          tid,
          order
        } = data;
        const cid = await Topics.getTopicField(tid, stryMutAct_9fa48("41135") ? "" : (stryCov_9fa48("41135"), 'cid'));
        if (stryMutAct_9fa48("41138") ? (!cid || !tid || !utils.isNumber(order)) && order < 0 : stryMutAct_9fa48("41137") ? false : stryMutAct_9fa48("41136") ? true : (stryCov_9fa48("41136", "41137", "41138"), (stryMutAct_9fa48("41140") ? (!cid || !tid) && !utils.isNumber(order) : stryMutAct_9fa48("41139") ? false : (stryCov_9fa48("41139", "41140"), (stryMutAct_9fa48("41142") ? !cid && !tid : stryMutAct_9fa48("41141") ? false : (stryCov_9fa48("41141", "41142"), (stryMutAct_9fa48("41143") ? cid : (stryCov_9fa48("41143"), !cid)) || (stryMutAct_9fa48("41144") ? tid : (stryCov_9fa48("41144"), !tid)))) || (stryMutAct_9fa48("41145") ? utils.isNumber(order) : (stryCov_9fa48("41145"), !utils.isNumber(order))))) || (stryMutAct_9fa48("41148") ? order >= 0 : stryMutAct_9fa48("41147") ? order <= 0 : stryMutAct_9fa48("41146") ? false : (stryCov_9fa48("41146", "41147", "41148"), order < 0)))) {
          if (stryMutAct_9fa48("41149")) {
            {}
          } else {
            stryCov_9fa48("41149");
            throw new Error(stryMutAct_9fa48("41150") ? "" : (stryCov_9fa48("41150"), '[[error:invalid-data]]'));
          }
        }
        const isAdminOrMod = await privileges.categories.isAdminOrMod(cid, uid);
        if (stryMutAct_9fa48("41153") ? false : stryMutAct_9fa48("41152") ? true : stryMutAct_9fa48("41151") ? isAdminOrMod : (stryCov_9fa48("41151", "41152", "41153"), !isAdminOrMod)) {
          if (stryMutAct_9fa48("41154")) {
            {}
          } else {
            stryCov_9fa48("41154");
            throw new Error(stryMutAct_9fa48("41155") ? "" : (stryCov_9fa48("41155"), '[[error:no-privileges]]'));
          }
        }
        const pinnedTids = await db.getSortedSetRange(stryMutAct_9fa48("41156") ? `` : (stryCov_9fa48("41156"), `cid:${cid}:tids:pinned`), 0, stryMutAct_9fa48("41157") ? +1 : (stryCov_9fa48("41157"), -1));
        const currentIndex = pinnedTids.indexOf(String(tid));
        if (stryMutAct_9fa48("41160") ? currentIndex !== -1 : stryMutAct_9fa48("41159") ? false : stryMutAct_9fa48("41158") ? true : (stryCov_9fa48("41158", "41159", "41160"), currentIndex === (stryMutAct_9fa48("41161") ? +1 : (stryCov_9fa48("41161"), -1)))) {
          if (stryMutAct_9fa48("41162")) {
            {}
          } else {
            stryCov_9fa48("41162");
            return;
          }
        }
        const newOrder = stryMutAct_9fa48("41163") ? pinnedTids.length - order + 1 : (stryCov_9fa48("41163"), (stryMutAct_9fa48("41164") ? pinnedTids.length + order : (stryCov_9fa48("41164"), pinnedTids.length - order)) - 1);
        // moves tid to index order in the array
        if (stryMutAct_9fa48("41168") ? pinnedTids.length <= 1 : stryMutAct_9fa48("41167") ? pinnedTids.length >= 1 : stryMutAct_9fa48("41166") ? false : stryMutAct_9fa48("41165") ? true : (stryCov_9fa48("41165", "41166", "41167", "41168"), pinnedTids.length > 1)) {
          if (stryMutAct_9fa48("41169")) {
            {}
          } else {
            stryCov_9fa48("41169");
            pinnedTids.splice(Math.max(0, newOrder), 0, pinnedTids.splice(currentIndex, 1)[0]);
          }
        }
        await db.sortedSetAdd(stryMutAct_9fa48("41170") ? `` : (stryCov_9fa48("41170"), `cid:${cid}:tids:pinned`), pinnedTids.map(stryMutAct_9fa48("41171") ? () => undefined : (stryCov_9fa48("41171"), (tid, index) => index)), pinnedTids);
      }
    };
    topicTools.move = async function (tid, data) {
      if (stryMutAct_9fa48("41172")) {
        {}
      } else {
        stryCov_9fa48("41172");
        const cid = parseInt(data.cid, 10);
        const topicData = await Topics.getTopicData(tid);
        if (stryMutAct_9fa48("41175") ? false : stryMutAct_9fa48("41174") ? true : stryMutAct_9fa48("41173") ? topicData : (stryCov_9fa48("41173", "41174", "41175"), !topicData)) {
          if (stryMutAct_9fa48("41176")) {
            {}
          } else {
            stryCov_9fa48("41176");
            throw new Error(stryMutAct_9fa48("41177") ? "" : (stryCov_9fa48("41177"), '[[error:no-topic]]'));
          }
        }
        if (stryMutAct_9fa48("41180") ? cid !== topicData.cid : stryMutAct_9fa48("41179") ? false : stryMutAct_9fa48("41178") ? true : (stryCov_9fa48("41178", "41179", "41180"), cid === topicData.cid)) {
          if (stryMutAct_9fa48("41181")) {
            {}
          } else {
            stryCov_9fa48("41181");
            throw new Error(stryMutAct_9fa48("41182") ? "" : (stryCov_9fa48("41182"), '[[error:cant-move-topic-to-same-category]]'));
          }
        }
        const tags = await Topics.getTopicTags(tid);
        await db.sortedSetsRemove(stryMutAct_9fa48("41183") ? [] : (stryCov_9fa48("41183"), [stryMutAct_9fa48("41184") ? `` : (stryCov_9fa48("41184"), `cid:${topicData.cid}:tids`), stryMutAct_9fa48("41185") ? `` : (stryCov_9fa48("41185"), `cid:${topicData.cid}:tids:pinned`), stryMutAct_9fa48("41186") ? `` : (stryCov_9fa48("41186"), `cid:${topicData.cid}:tids:posts`), stryMutAct_9fa48("41187") ? `` : (stryCov_9fa48("41187"), `cid:${topicData.cid}:tids:votes`), stryMutAct_9fa48("41188") ? `` : (stryCov_9fa48("41188"), `cid:${topicData.cid}:tids:views`), stryMutAct_9fa48("41189") ? `` : (stryCov_9fa48("41189"), `cid:${topicData.cid}:tids:lastposttime`), stryMutAct_9fa48("41190") ? `` : (stryCov_9fa48("41190"), `cid:${topicData.cid}:recent_tids`), stryMutAct_9fa48("41191") ? `` : (stryCov_9fa48("41191"), `cid:${topicData.cid}:uid:${topicData.uid}:tids`), ...tags.map(stryMutAct_9fa48("41192") ? () => undefined : (stryCov_9fa48("41192"), tag => stryMutAct_9fa48("41193") ? `` : (stryCov_9fa48("41193"), `cid:${topicData.cid}:tag:${tag}:topics`)))]), tid);
        topicData.postcount = stryMutAct_9fa48("41196") ? topicData.postcount && 0 : stryMutAct_9fa48("41195") ? false : stryMutAct_9fa48("41194") ? true : (stryCov_9fa48("41194", "41195", "41196"), topicData.postcount || 0);
        const votes = stryMutAct_9fa48("41197") ? topicData.upvotes + topicData.downvotes : (stryCov_9fa48("41197"), topicData.upvotes - topicData.downvotes);
        const bulk = stryMutAct_9fa48("41198") ? [] : (stryCov_9fa48("41198"), [stryMutAct_9fa48("41199") ? [] : (stryCov_9fa48("41199"), [stryMutAct_9fa48("41200") ? `` : (stryCov_9fa48("41200"), `cid:${cid}:tids:lastposttime`), topicData.lastposttime, tid]), stryMutAct_9fa48("41201") ? [] : (stryCov_9fa48("41201"), [stryMutAct_9fa48("41202") ? `` : (stryCov_9fa48("41202"), `cid:${cid}:uid:${topicData.uid}:tids`), topicData.timestamp, tid]), ...tags.map(stryMutAct_9fa48("41203") ? () => undefined : (stryCov_9fa48("41203"), tag => stryMutAct_9fa48("41204") ? [] : (stryCov_9fa48("41204"), [stryMutAct_9fa48("41205") ? `` : (stryCov_9fa48("41205"), `cid:${cid}:tag:${tag}:topics`), topicData.timestamp, tid])))]);
        if (stryMutAct_9fa48("41207") ? false : stryMutAct_9fa48("41206") ? true : (stryCov_9fa48("41206", "41207"), topicData.pinned)) {
          if (stryMutAct_9fa48("41208")) {
            {}
          } else {
            stryCov_9fa48("41208");
            bulk.push(stryMutAct_9fa48("41209") ? [] : (stryCov_9fa48("41209"), [stryMutAct_9fa48("41210") ? `` : (stryCov_9fa48("41210"), `cid:${cid}:tids:pinned`), Date.now(), tid]));
          }
        } else {
          if (stryMutAct_9fa48("41211")) {
            {}
          } else {
            stryCov_9fa48("41211");
            bulk.push(stryMutAct_9fa48("41212") ? [] : (stryCov_9fa48("41212"), [stryMutAct_9fa48("41213") ? `` : (stryCov_9fa48("41213"), `cid:${cid}:tids`), topicData.lastposttime, tid]));
            bulk.push(stryMutAct_9fa48("41214") ? [] : (stryCov_9fa48("41214"), [stryMutAct_9fa48("41215") ? `` : (stryCov_9fa48("41215"), `cid:${cid}:tids:posts`), topicData.postcount, tid]));
            bulk.push(stryMutAct_9fa48("41216") ? [] : (stryCov_9fa48("41216"), [stryMutAct_9fa48("41217") ? `` : (stryCov_9fa48("41217"), `cid:${cid}:tids:votes`), votes, tid]));
            bulk.push(stryMutAct_9fa48("41218") ? [] : (stryCov_9fa48("41218"), [stryMutAct_9fa48("41219") ? `` : (stryCov_9fa48("41219"), `cid:${cid}:tids:views`), topicData.viewcount, tid]));
          }
        }
        await db.sortedSetAddBulk(bulk);
        const oldCid = topicData.cid;
        await categories.moveRecentReplies(tid, oldCid, cid);
        await Promise.all(stryMutAct_9fa48("41220") ? [] : (stryCov_9fa48("41220"), [categories.incrementCategoryFieldBy(oldCid, stryMutAct_9fa48("41221") ? "" : (stryCov_9fa48("41221"), 'topic_count'), stryMutAct_9fa48("41222") ? +1 : (stryCov_9fa48("41222"), -1)), categories.incrementCategoryFieldBy(cid, stryMutAct_9fa48("41223") ? "" : (stryCov_9fa48("41223"), 'topic_count'), 1), categories.updateRecentTidForCid(cid), categories.updateRecentTidForCid(oldCid), Topics.setTopicFields(tid, stryMutAct_9fa48("41224") ? {} : (stryCov_9fa48("41224"), {
          cid: cid,
          oldCid: oldCid
        })), Topics.updateCategoryTagsCount(stryMutAct_9fa48("41225") ? [] : (stryCov_9fa48("41225"), [oldCid, cid]), tags), Topics.events.log(tid, stryMutAct_9fa48("41226") ? {} : (stryCov_9fa48("41226"), {
          type: stryMutAct_9fa48("41227") ? "" : (stryCov_9fa48("41227"), 'move'),
          uid: data.uid,
          fromCid: oldCid
        }))]));
        const hookData = _.clone(data);
        hookData.fromCid = oldCid;
        hookData.toCid = cid;
        hookData.tid = tid;
        plugins.hooks.fire(stryMutAct_9fa48("41228") ? "" : (stryCov_9fa48("41228"), 'action:topic.move'), hookData);
      }
    };
  }
};