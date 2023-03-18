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
const user = require('../user');
const privileges = require('../privileges');
const search = require('../search');
module.exports = function (Topics) {
  if (stryMutAct_9fa48("40012")) {
    {}
  } else {
    stryCov_9fa48("40012");
    Topics.getSuggestedTopics = async function (tid, uid, start, stop, cutoff = 0) {
      if (stryMutAct_9fa48("40013")) {
        {}
      } else {
        stryCov_9fa48("40013");
        let tids;
        tid = parseInt(tid, 10);
        cutoff = (stryMutAct_9fa48("40016") ? cutoff !== 0 : stryMutAct_9fa48("40015") ? false : stryMutAct_9fa48("40014") ? true : (stryCov_9fa48("40014", "40015", "40016"), cutoff === 0)) ? cutoff : stryMutAct_9fa48("40017") ? cutoff / 2592000000 : (stryCov_9fa48("40017"), cutoff * 2592000000);
        const [tagTids, searchTids] = await Promise.all(stryMutAct_9fa48("40018") ? [] : (stryCov_9fa48("40018"), [getTidsWithSameTags(tid, cutoff), getSearchTids(tid, uid, cutoff)]));
        tids = _.uniq(tagTids.concat(searchTids));
        let categoryTids = stryMutAct_9fa48("40019") ? ["Stryker was here"] : (stryCov_9fa48("40019"), []);
        if (stryMutAct_9fa48("40022") ? stop !== -1 || tids.length < stop - start + 1 : stryMutAct_9fa48("40021") ? false : stryMutAct_9fa48("40020") ? true : (stryCov_9fa48("40020", "40021", "40022"), (stryMutAct_9fa48("40024") ? stop === -1 : stryMutAct_9fa48("40023") ? true : (stryCov_9fa48("40023", "40024"), stop !== (stryMutAct_9fa48("40025") ? +1 : (stryCov_9fa48("40025"), -1)))) && (stryMutAct_9fa48("40028") ? tids.length >= stop - start + 1 : stryMutAct_9fa48("40027") ? tids.length <= stop - start + 1 : stryMutAct_9fa48("40026") ? true : (stryCov_9fa48("40026", "40027", "40028"), tids.length < (stryMutAct_9fa48("40029") ? stop - start - 1 : (stryCov_9fa48("40029"), (stryMutAct_9fa48("40030") ? stop + start : (stryCov_9fa48("40030"), stop - start)) + 1)))))) {
          if (stryMutAct_9fa48("40031")) {
            {}
          } else {
            stryCov_9fa48("40031");
            categoryTids = await getCategoryTids(tid, cutoff);
          }
        }
        tids = _.shuffle(_.uniq(tids.concat(categoryTids)));
        tids = await privileges.topics.filterTids(stryMutAct_9fa48("40032") ? "" : (stryCov_9fa48("40032"), 'topics:read'), tids, uid);
        let topicData = await Topics.getTopicsByTids(tids, uid);
        topicData = stryMutAct_9fa48("40033") ? topicData : (stryCov_9fa48("40033"), topicData.filter(stryMutAct_9fa48("40034") ? () => undefined : (stryCov_9fa48("40034"), topic => stryMutAct_9fa48("40037") ? topic || topic.tid !== tid : stryMutAct_9fa48("40036") ? false : stryMutAct_9fa48("40035") ? true : (stryCov_9fa48("40035", "40036", "40037"), topic && (stryMutAct_9fa48("40039") ? topic.tid === tid : stryMutAct_9fa48("40038") ? true : (stryCov_9fa48("40038", "40039"), topic.tid !== tid))))));
        topicData = await (stryMutAct_9fa48("40040") ? user.blocks : (stryCov_9fa48("40040"), user.blocks.filter(uid, topicData)));
        topicData = stryMutAct_9fa48("40042") ? topicData.sort((t1, t2) => t2.timestamp - t1.timestamp) : stryMutAct_9fa48("40041") ? topicData.slice(start, stop !== -1 ? stop + 1 : undefined) : (stryCov_9fa48("40041", "40042"), topicData.slice(start, (stryMutAct_9fa48("40045") ? stop === -1 : stryMutAct_9fa48("40044") ? false : stryMutAct_9fa48("40043") ? true : (stryCov_9fa48("40043", "40044", "40045"), stop !== (stryMutAct_9fa48("40046") ? +1 : (stryCov_9fa48("40046"), -1)))) ? stryMutAct_9fa48("40047") ? stop - 1 : (stryCov_9fa48("40047"), stop + 1) : undefined).sort(stryMutAct_9fa48("40048") ? () => undefined : (stryCov_9fa48("40048"), (t1, t2) => stryMutAct_9fa48("40049") ? t2.timestamp + t1.timestamp : (stryCov_9fa48("40049"), t2.timestamp - t1.timestamp))));
        return topicData;
      }
    };
    async function getTidsWithSameTags(tid, cutoff) {
      if (stryMutAct_9fa48("40050")) {
        {}
      } else {
        stryCov_9fa48("40050");
        const tags = await Topics.getTopicTags(tid);
        let tids = (stryMutAct_9fa48("40053") ? cutoff !== 0 : stryMutAct_9fa48("40052") ? false : stryMutAct_9fa48("40051") ? true : (stryCov_9fa48("40051", "40052", "40053"), cutoff === 0)) ? await db.getSortedSetRevRange(tags.map(stryMutAct_9fa48("40054") ? () => undefined : (stryCov_9fa48("40054"), tag => stryMutAct_9fa48("40055") ? `` : (stryCov_9fa48("40055"), `tag:${tag}:topics`))), 0, stryMutAct_9fa48("40056") ? +1 : (stryCov_9fa48("40056"), -1)) : await db.getSortedSetRevRangeByScore(tags.map(stryMutAct_9fa48("40057") ? () => undefined : (stryCov_9fa48("40057"), tag => stryMutAct_9fa48("40058") ? `` : (stryCov_9fa48("40058"), `tag:${tag}:topics`))), 0, stryMutAct_9fa48("40059") ? +1 : (stryCov_9fa48("40059"), -1), stryMutAct_9fa48("40060") ? "" : (stryCov_9fa48("40060"), '+inf'), stryMutAct_9fa48("40061") ? Date.now() + cutoff : (stryCov_9fa48("40061"), Date.now() - cutoff));
        tids = stryMutAct_9fa48("40062") ? tids : (stryCov_9fa48("40062"), tids.filter(stryMutAct_9fa48("40063") ? () => undefined : (stryCov_9fa48("40063"), _tid => stryMutAct_9fa48("40066") ? _tid === tid : stryMutAct_9fa48("40065") ? false : stryMutAct_9fa48("40064") ? true : (stryCov_9fa48("40064", "40065", "40066"), _tid !== tid)))); // remove self
        return stryMutAct_9fa48("40067") ? _.shuffle(_.uniq(tids)).map(Number) : (stryCov_9fa48("40067"), _.shuffle(_.uniq(tids)).slice(0, 10).map(Number));
      }
    }
    async function getSearchTids(tid, uid, cutoff) {
      if (stryMutAct_9fa48("40068")) {
        {}
      } else {
        stryCov_9fa48("40068");
        const topicData = await Topics.getTopicFields(tid, stryMutAct_9fa48("40069") ? [] : (stryCov_9fa48("40069"), [stryMutAct_9fa48("40070") ? "" : (stryCov_9fa48("40070"), 'title'), stryMutAct_9fa48("40071") ? "" : (stryCov_9fa48("40071"), 'cid')]));
        const data = await search.search(stryMutAct_9fa48("40072") ? {} : (stryCov_9fa48("40072"), {
          query: topicData.title,
          searchIn: stryMutAct_9fa48("40073") ? "" : (stryCov_9fa48("40073"), 'titles'),
          matchWords: stryMutAct_9fa48("40074") ? "" : (stryCov_9fa48("40074"), 'any'),
          categories: stryMutAct_9fa48("40075") ? [] : (stryCov_9fa48("40075"), [topicData.cid]),
          uid: uid,
          returnIds: stryMutAct_9fa48("40076") ? false : (stryCov_9fa48("40076"), true),
          timeRange: (stryMutAct_9fa48("40079") ? cutoff === 0 : stryMutAct_9fa48("40078") ? false : stryMutAct_9fa48("40077") ? true : (stryCov_9fa48("40077", "40078", "40079"), cutoff !== 0)) ? stryMutAct_9fa48("40080") ? cutoff * 1000 : (stryCov_9fa48("40080"), cutoff / 1000) : 0,
          timeFilter: stryMutAct_9fa48("40081") ? "" : (stryCov_9fa48("40081"), 'newer')
        }));
        data.tids = stryMutAct_9fa48("40082") ? data.tids : (stryCov_9fa48("40082"), data.tids.filter(stryMutAct_9fa48("40083") ? () => undefined : (stryCov_9fa48("40083"), _tid => stryMutAct_9fa48("40086") ? _tid === tid : stryMutAct_9fa48("40085") ? false : stryMutAct_9fa48("40084") ? true : (stryCov_9fa48("40084", "40085", "40086"), _tid !== tid)))); // remove self
        return stryMutAct_9fa48("40087") ? _.shuffle(data.tids).map(Number) : (stryCov_9fa48("40087"), _.shuffle(data.tids).slice(0, 10).map(Number));
      }
    }
    async function getCategoryTids(tid, cutoff) {
      if (stryMutAct_9fa48("40088")) {
        {}
      } else {
        stryCov_9fa48("40088");
        const cid = await Topics.getTopicField(tid, stryMutAct_9fa48("40089") ? "" : (stryCov_9fa48("40089"), 'cid'));
        const tids = (stryMutAct_9fa48("40092") ? cutoff !== 0 : stryMutAct_9fa48("40091") ? false : stryMutAct_9fa48("40090") ? true : (stryCov_9fa48("40090", "40091", "40092"), cutoff === 0)) ? await db.getSortedSetRevRange(stryMutAct_9fa48("40093") ? `` : (stryCov_9fa48("40093"), `cid:${cid}:tids:lastposttime`), 0, 9) : await db.getSortedSetRevRangeByScore(stryMutAct_9fa48("40094") ? `` : (stryCov_9fa48("40094"), `cid:${cid}:tids:lastposttime`), 0, 9, stryMutAct_9fa48("40095") ? "" : (stryCov_9fa48("40095"), '+inf'), stryMutAct_9fa48("40096") ? Date.now() + cutoff : (stryCov_9fa48("40096"), Date.now() - cutoff));
        return _.shuffle(stryMutAct_9fa48("40097") ? tids.map(Number) : (stryCov_9fa48("40097"), tids.map(Number).filter(stryMutAct_9fa48("40098") ? () => undefined : (stryCov_9fa48("40098"), _tid => stryMutAct_9fa48("40101") ? _tid === tid : stryMutAct_9fa48("40100") ? false : stryMutAct_9fa48("40099") ? true : (stryCov_9fa48("40099", "40100", "40101"), _tid !== tid)))));
      }
    }
  }
};