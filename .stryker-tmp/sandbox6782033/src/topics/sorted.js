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
const privileges = require('../privileges');
const user = require('../user');
const categories = require('../categories');
const meta = require('../meta');
const plugins = require('../plugins');
module.exports = function (Topics) {
  if (stryMutAct_9fa48("39747")) {
    {}
  } else {
    stryCov_9fa48("39747");
    Topics.getSortedTopics = async function (params) {
      if (stryMutAct_9fa48("39748")) {
        {}
      } else {
        stryCov_9fa48("39748");
        const data = stryMutAct_9fa48("39749") ? {} : (stryCov_9fa48("39749"), {
          nextStart: 0,
          topicCount: 0,
          topics: stryMutAct_9fa48("39750") ? ["Stryker was here"] : (stryCov_9fa48("39750"), [])
        });
        params.term = stryMutAct_9fa48("39753") ? params.term && 'alltime' : stryMutAct_9fa48("39752") ? false : stryMutAct_9fa48("39751") ? true : (stryCov_9fa48("39751", "39752", "39753"), params.term || (stryMutAct_9fa48("39754") ? "" : (stryCov_9fa48("39754"), 'alltime')));
        params.sort = stryMutAct_9fa48("39757") ? params.sort && 'recent' : stryMutAct_9fa48("39756") ? false : stryMutAct_9fa48("39755") ? true : (stryCov_9fa48("39755", "39756", "39757"), params.sort || (stryMutAct_9fa48("39758") ? "" : (stryCov_9fa48("39758"), 'recent')));
        params.query = stryMutAct_9fa48("39761") ? params.query && {} : stryMutAct_9fa48("39760") ? false : stryMutAct_9fa48("39759") ? true : (stryCov_9fa48("39759", "39760", "39761"), params.query || {});
        if (stryMutAct_9fa48("39764") ? params.hasOwnProperty('cids') && params.cids || !Array.isArray(params.cids) : stryMutAct_9fa48("39763") ? false : stryMutAct_9fa48("39762") ? true : (stryCov_9fa48("39762", "39763", "39764"), (stryMutAct_9fa48("39766") ? params.hasOwnProperty('cids') || params.cids : stryMutAct_9fa48("39765") ? true : (stryCov_9fa48("39765", "39766"), params.hasOwnProperty(stryMutAct_9fa48("39767") ? "" : (stryCov_9fa48("39767"), 'cids')) && params.cids)) && (stryMutAct_9fa48("39768") ? Array.isArray(params.cids) : (stryCov_9fa48("39768"), !Array.isArray(params.cids))))) {
          if (stryMutAct_9fa48("39769")) {
            {}
          } else {
            stryCov_9fa48("39769");
            params.cids = stryMutAct_9fa48("39770") ? [] : (stryCov_9fa48("39770"), [params.cids]);
          }
        }
        params.tags = stryMutAct_9fa48("39773") ? params.tags && [] : stryMutAct_9fa48("39772") ? false : stryMutAct_9fa48("39771") ? true : (stryCov_9fa48("39771", "39772", "39773"), params.tags || (stryMutAct_9fa48("39774") ? ["Stryker was here"] : (stryCov_9fa48("39774"), [])));
        if (stryMutAct_9fa48("39777") ? params.tags || !Array.isArray(params.tags) : stryMutAct_9fa48("39776") ? false : stryMutAct_9fa48("39775") ? true : (stryCov_9fa48("39775", "39776", "39777"), params.tags && (stryMutAct_9fa48("39778") ? Array.isArray(params.tags) : (stryCov_9fa48("39778"), !Array.isArray(params.tags))))) {
          if (stryMutAct_9fa48("39779")) {
            {}
          } else {
            stryCov_9fa48("39779");
            params.tags = stryMutAct_9fa48("39780") ? [] : (stryCov_9fa48("39780"), [params.tags]);
          }
        }
        data.tids = await getTids(params);
        data.tids = await sortTids(data.tids, params);
        data.tids = await filterTids(stryMutAct_9fa48("39781") ? data.tids : (stryCov_9fa48("39781"), data.tids.slice(0, meta.config.recentMaxTopics)), params);
        data.topicCount = data.tids.length;
        data.topics = await getTopics(data.tids, params);
        data.nextStart = stryMutAct_9fa48("39782") ? params.stop - 1 : (stryCov_9fa48("39782"), params.stop + 1);
        return data;
      }
    };
    async function getTids(params) {
      if (stryMutAct_9fa48("39783")) {
        {}
      } else {
        stryCov_9fa48("39783");
        if (stryMutAct_9fa48("39785") ? false : stryMutAct_9fa48("39784") ? true : (stryCov_9fa48("39784", "39785"), plugins.hooks.hasListeners(stryMutAct_9fa48("39786") ? "" : (stryCov_9fa48("39786"), 'filter:topics.getSortedTids')))) {
          if (stryMutAct_9fa48("39787")) {
            {}
          } else {
            stryCov_9fa48("39787");
            const result = await plugins.hooks.fire(stryMutAct_9fa48("39788") ? "" : (stryCov_9fa48("39788"), 'filter:topics.getSortedTids'), stryMutAct_9fa48("39789") ? {} : (stryCov_9fa48("39789"), {
              params: params,
              tids: stryMutAct_9fa48("39790") ? ["Stryker was here"] : (stryCov_9fa48("39790"), [])
            }));
            return result.tids;
          }
        }
        let tids = stryMutAct_9fa48("39791") ? ["Stryker was here"] : (stryCov_9fa48("39791"), []);
        if (stryMutAct_9fa48("39794") ? params.term === 'alltime' : stryMutAct_9fa48("39793") ? false : stryMutAct_9fa48("39792") ? true : (stryCov_9fa48("39792", "39793", "39794"), params.term !== (stryMutAct_9fa48("39795") ? "" : (stryCov_9fa48("39795"), 'alltime')))) {
          if (stryMutAct_9fa48("39796")) {
            {}
          } else {
            stryCov_9fa48("39796");
            tids = await Topics.getLatestTidsFromSet(stryMutAct_9fa48("39797") ? "" : (stryCov_9fa48("39797"), 'topics:tid'), 0, stryMutAct_9fa48("39798") ? +1 : (stryCov_9fa48("39798"), -1), params.term);
            if (stryMutAct_9fa48("39801") ? params.filter !== 'watched' : stryMutAct_9fa48("39800") ? false : stryMutAct_9fa48("39799") ? true : (stryCov_9fa48("39799", "39800", "39801"), params.filter === (stryMutAct_9fa48("39802") ? "" : (stryCov_9fa48("39802"), 'watched')))) {
              if (stryMutAct_9fa48("39803")) {
                {}
              } else {
                stryCov_9fa48("39803");
                tids = await Topics.filterWatchedTids(tids, params.uid);
              }
            }
          }
        } else if (stryMutAct_9fa48("39806") ? params.filter !== 'watched' : stryMutAct_9fa48("39805") ? false : stryMutAct_9fa48("39804") ? true : (stryCov_9fa48("39804", "39805", "39806"), params.filter === (stryMutAct_9fa48("39807") ? "" : (stryCov_9fa48("39807"), 'watched')))) {
          if (stryMutAct_9fa48("39808")) {
            {}
          } else {
            stryCov_9fa48("39808");
            tids = await db.getSortedSetRevRange(stryMutAct_9fa48("39809") ? `` : (stryCov_9fa48("39809"), `uid:${params.uid}:followed_tids`), 0, stryMutAct_9fa48("39810") ? +1 : (stryCov_9fa48("39810"), -1));
          }
        } else if (stryMutAct_9fa48("39812") ? false : stryMutAct_9fa48("39811") ? true : (stryCov_9fa48("39811", "39812"), params.cids)) {
          if (stryMutAct_9fa48("39813")) {
            {}
          } else {
            stryCov_9fa48("39813");
            tids = await getCidTids(params);
          }
        } else if (stryMutAct_9fa48("39815") ? false : stryMutAct_9fa48("39814") ? true : (stryCov_9fa48("39814", "39815"), params.tags.length)) {
          if (stryMutAct_9fa48("39816")) {
            {}
          } else {
            stryCov_9fa48("39816");
            tids = await getTagTids(params);
          }
        } else if (stryMutAct_9fa48("39819") ? params.sort !== 'old' : stryMutAct_9fa48("39818") ? false : stryMutAct_9fa48("39817") ? true : (stryCov_9fa48("39817", "39818", "39819"), params.sort === (stryMutAct_9fa48("39820") ? "" : (stryCov_9fa48("39820"), 'old')))) {
          if (stryMutAct_9fa48("39821")) {
            {}
          } else {
            stryCov_9fa48("39821");
            tids = await db.getSortedSetRange(stryMutAct_9fa48("39822") ? `` : (stryCov_9fa48("39822"), `topics:recent`), 0, stryMutAct_9fa48("39823") ? meta.config.recentMaxTopics + 1 : (stryCov_9fa48("39823"), meta.config.recentMaxTopics - 1));
          }
        } else {
          if (stryMutAct_9fa48("39824")) {
            {}
          } else {
            stryCov_9fa48("39824");
            tids = await db.getSortedSetRevRange(stryMutAct_9fa48("39825") ? `` : (stryCov_9fa48("39825"), `topics:${params.sort}`), 0, stryMutAct_9fa48("39826") ? meta.config.recentMaxTopics + 1 : (stryCov_9fa48("39826"), meta.config.recentMaxTopics - 1));
          }
        }
        return tids;
      }
    }
    async function getTagTids(params) {
      if (stryMutAct_9fa48("39827")) {
        {}
      } else {
        stryCov_9fa48("39827");
        const sets = stryMutAct_9fa48("39828") ? [] : (stryCov_9fa48("39828"), [(stryMutAct_9fa48("39831") ? params.sort !== 'old' : stryMutAct_9fa48("39830") ? false : stryMutAct_9fa48("39829") ? true : (stryCov_9fa48("39829", "39830", "39831"), params.sort === (stryMutAct_9fa48("39832") ? "" : (stryCov_9fa48("39832"), 'old')))) ? stryMutAct_9fa48("39833") ? "" : (stryCov_9fa48("39833"), 'topics:recent') : stryMutAct_9fa48("39834") ? `` : (stryCov_9fa48("39834"), `topics:${params.sort}`), ...params.tags.map(stryMutAct_9fa48("39835") ? () => undefined : (stryCov_9fa48("39835"), tag => stryMutAct_9fa48("39836") ? `` : (stryCov_9fa48("39836"), `tag:${tag}:topics`)))]);
        const method = (stryMutAct_9fa48("39839") ? params.sort !== 'old' : stryMutAct_9fa48("39838") ? false : stryMutAct_9fa48("39837") ? true : (stryCov_9fa48("39837", "39838", "39839"), params.sort === (stryMutAct_9fa48("39840") ? "" : (stryCov_9fa48("39840"), 'old')))) ? stryMutAct_9fa48("39841") ? "" : (stryCov_9fa48("39841"), 'getSortedSetIntersect') : stryMutAct_9fa48("39842") ? "" : (stryCov_9fa48("39842"), 'getSortedSetRevIntersect');
        return await db[method](stryMutAct_9fa48("39843") ? {} : (stryCov_9fa48("39843"), {
          sets: sets,
          start: 0,
          stop: stryMutAct_9fa48("39844") ? meta.config.recentMaxTopics + 1 : (stryCov_9fa48("39844"), meta.config.recentMaxTopics - 1),
          weights: sets.map(stryMutAct_9fa48("39845") ? () => undefined : (stryCov_9fa48("39845"), (s, index) => index ? 0 : 1))
        }));
      }
    }
    async function getCidTids(params) {
      if (stryMutAct_9fa48("39846")) {
        {}
      } else {
        stryCov_9fa48("39846");
        if (stryMutAct_9fa48("39848") ? false : stryMutAct_9fa48("39847") ? true : (stryCov_9fa48("39847", "39848"), params.tags.length)) {
          if (stryMutAct_9fa48("39849")) {
            {}
          } else {
            stryCov_9fa48("39849");
            return _.intersection(...(await Promise.all(params.tags.map(async tag => {
              if (stryMutAct_9fa48("39850")) {
                {}
              } else {
                stryCov_9fa48("39850");
                const sets = params.cids.map(stryMutAct_9fa48("39851") ? () => undefined : (stryCov_9fa48("39851"), cid => stryMutAct_9fa48("39852") ? `` : (stryCov_9fa48("39852"), `cid:${cid}:tag:${tag}:topics`)));
                return await db.getSortedSetRevRange(sets, 0, stryMutAct_9fa48("39853") ? +1 : (stryCov_9fa48("39853"), -1));
              }
            }))));
          }
        }
        const sets = stryMutAct_9fa48("39854") ? ["Stryker was here"] : (stryCov_9fa48("39854"), []);
        const pinnedSets = stryMutAct_9fa48("39855") ? ["Stryker was here"] : (stryCov_9fa48("39855"), []);
        params.cids.forEach(cid => {
          if (stryMutAct_9fa48("39856")) {
            {}
          } else {
            stryCov_9fa48("39856");
            if (stryMutAct_9fa48("39859") ? params.sort === 'recent' && params.sort === 'old' : stryMutAct_9fa48("39858") ? false : stryMutAct_9fa48("39857") ? true : (stryCov_9fa48("39857", "39858", "39859"), (stryMutAct_9fa48("39861") ? params.sort !== 'recent' : stryMutAct_9fa48("39860") ? false : (stryCov_9fa48("39860", "39861"), params.sort === (stryMutAct_9fa48("39862") ? "" : (stryCov_9fa48("39862"), 'recent')))) || (stryMutAct_9fa48("39864") ? params.sort !== 'old' : stryMutAct_9fa48("39863") ? false : (stryCov_9fa48("39863", "39864"), params.sort === (stryMutAct_9fa48("39865") ? "" : (stryCov_9fa48("39865"), 'old')))))) {
              if (stryMutAct_9fa48("39866")) {
                {}
              } else {
                stryCov_9fa48("39866");
                sets.push(stryMutAct_9fa48("39867") ? `` : (stryCov_9fa48("39867"), `cid:${cid}:tids`));
              }
            } else {
              if (stryMutAct_9fa48("39868")) {
                {}
              } else {
                stryCov_9fa48("39868");
                sets.push(stryMutAct_9fa48("39869") ? `` : (stryCov_9fa48("39869"), `cid:${cid}:tids${params.sort ? stryMutAct_9fa48("39870") ? `` : (stryCov_9fa48("39870"), `:${params.sort}`) : stryMutAct_9fa48("39871") ? "Stryker was here!" : (stryCov_9fa48("39871"), '')}`));
              }
            }
            pinnedSets.push(stryMutAct_9fa48("39872") ? `` : (stryCov_9fa48("39872"), `cid:${cid}:tids:pinned`));
          }
        });
        let pinnedTids = await db.getSortedSetRevRange(pinnedSets, 0, stryMutAct_9fa48("39873") ? +1 : (stryCov_9fa48("39873"), -1));
        pinnedTids = await Topics.tools.checkPinExpiry(pinnedTids);
        const method = (stryMutAct_9fa48("39876") ? params.sort !== 'old' : stryMutAct_9fa48("39875") ? false : stryMutAct_9fa48("39874") ? true : (stryCov_9fa48("39874", "39875", "39876"), params.sort === (stryMutAct_9fa48("39877") ? "" : (stryCov_9fa48("39877"), 'old')))) ? stryMutAct_9fa48("39878") ? "" : (stryCov_9fa48("39878"), 'getSortedSetRange') : stryMutAct_9fa48("39879") ? "" : (stryCov_9fa48("39879"), 'getSortedSetRevRange');
        const tids = await db[method](sets, 0, stryMutAct_9fa48("39880") ? meta.config.recentMaxTopics + 1 : (stryCov_9fa48("39880"), meta.config.recentMaxTopics - 1));
        return pinnedTids.concat(tids);
      }
    }
    async function sortTids(tids, params) {
      if (stryMutAct_9fa48("39881")) {
        {}
      } else {
        stryCov_9fa48("39881");
        if (stryMutAct_9fa48("39884") ? params.term === 'alltime' && !params.cids && !params.tags.length && params.filter !== 'watched' || !params.floatPinned : stryMutAct_9fa48("39883") ? false : stryMutAct_9fa48("39882") ? true : (stryCov_9fa48("39882", "39883", "39884"), (stryMutAct_9fa48("39886") ? params.term === 'alltime' && !params.cids && !params.tags.length || params.filter !== 'watched' : stryMutAct_9fa48("39885") ? true : (stryCov_9fa48("39885", "39886"), (stryMutAct_9fa48("39888") ? params.term === 'alltime' && !params.cids || !params.tags.length : stryMutAct_9fa48("39887") ? true : (stryCov_9fa48("39887", "39888"), (stryMutAct_9fa48("39890") ? params.term === 'alltime' || !params.cids : stryMutAct_9fa48("39889") ? true : (stryCov_9fa48("39889", "39890"), (stryMutAct_9fa48("39892") ? params.term !== 'alltime' : stryMutAct_9fa48("39891") ? true : (stryCov_9fa48("39891", "39892"), params.term === (stryMutAct_9fa48("39893") ? "" : (stryCov_9fa48("39893"), 'alltime')))) && (stryMutAct_9fa48("39894") ? params.cids : (stryCov_9fa48("39894"), !params.cids)))) && (stryMutAct_9fa48("39895") ? params.tags.length : (stryCov_9fa48("39895"), !params.tags.length)))) && (stryMutAct_9fa48("39897") ? params.filter === 'watched' : stryMutAct_9fa48("39896") ? true : (stryCov_9fa48("39896", "39897"), params.filter !== (stryMutAct_9fa48("39898") ? "" : (stryCov_9fa48("39898"), 'watched')))))) && (stryMutAct_9fa48("39899") ? params.floatPinned : (stryCov_9fa48("39899"), !params.floatPinned)))) {
          if (stryMutAct_9fa48("39900")) {
            {}
          } else {
            stryCov_9fa48("39900");
            return tids;
          }
        }
        const topicData = await Topics.getTopicsFields(tids, stryMutAct_9fa48("39901") ? [] : (stryCov_9fa48("39901"), [stryMutAct_9fa48("39902") ? "" : (stryCov_9fa48("39902"), 'tid'), stryMutAct_9fa48("39903") ? "" : (stryCov_9fa48("39903"), 'lastposttime'), stryMutAct_9fa48("39904") ? "" : (stryCov_9fa48("39904"), 'upvotes'), stryMutAct_9fa48("39905") ? "" : (stryCov_9fa48("39905"), 'downvotes'), stryMutAct_9fa48("39906") ? "" : (stryCov_9fa48("39906"), 'postcount'), stryMutAct_9fa48("39907") ? "" : (stryCov_9fa48("39907"), 'pinned')]));
        const sortMap = stryMutAct_9fa48("39908") ? {} : (stryCov_9fa48("39908"), {
          recent: sortRecent,
          old: sortOld,
          posts: sortPopular,
          votes: sortVotes,
          views: sortViews
        });
        const sortFn = stryMutAct_9fa48("39911") ? sortMap[params.sort] && sortRecent : stryMutAct_9fa48("39910") ? false : stryMutAct_9fa48("39909") ? true : (stryCov_9fa48("39909", "39910", "39911"), sortMap[params.sort] || sortRecent);
        if (stryMutAct_9fa48("39913") ? false : stryMutAct_9fa48("39912") ? true : (stryCov_9fa48("39912", "39913"), params.floatPinned)) {
          if (stryMutAct_9fa48("39914")) {
            {}
          } else {
            stryCov_9fa48("39914");
            floatPinned(topicData, sortFn);
          }
        } else {
          if (stryMutAct_9fa48("39915")) {
            {}
          } else {
            stryCov_9fa48("39915");
            stryMutAct_9fa48("39916") ? topicData : (stryCov_9fa48("39916"), topicData.sort(sortFn));
          }
        }
        return topicData.map(stryMutAct_9fa48("39917") ? () => undefined : (stryCov_9fa48("39917"), topic => stryMutAct_9fa48("39920") ? topic || topic.tid : stryMutAct_9fa48("39919") ? false : stryMutAct_9fa48("39918") ? true : (stryCov_9fa48("39918", "39919", "39920"), topic && topic.tid)));
      }
    }
    function floatPinned(topicData, sortFn) {
      if (stryMutAct_9fa48("39921")) {
        {}
      } else {
        stryCov_9fa48("39921");
        stryMutAct_9fa48("39922") ? topicData : (stryCov_9fa48("39922"), topicData.sort(stryMutAct_9fa48("39923") ? () => undefined : (stryCov_9fa48("39923"), (a, b) => (stryMutAct_9fa48("39926") ? a.pinned === b.pinned : stryMutAct_9fa48("39925") ? false : stryMutAct_9fa48("39924") ? true : (stryCov_9fa48("39924", "39925", "39926"), a.pinned !== b.pinned)) ? stryMutAct_9fa48("39927") ? b.pinned + a.pinned : (stryCov_9fa48("39927"), b.pinned - a.pinned) : sortFn(a, b))));
      }
    }
    function sortRecent(a, b) {
      if (stryMutAct_9fa48("39928")) {
        {}
      } else {
        stryCov_9fa48("39928");
        return stryMutAct_9fa48("39929") ? b.lastposttime + a.lastposttime : (stryCov_9fa48("39929"), b.lastposttime - a.lastposttime);
      }
    }
    function sortOld(a, b) {
      if (stryMutAct_9fa48("39930")) {
        {}
      } else {
        stryCov_9fa48("39930");
        return stryMutAct_9fa48("39931") ? a.lastposttime + b.lastposttime : (stryCov_9fa48("39931"), a.lastposttime - b.lastposttime);
      }
    }
    function sortVotes(a, b) {
      if (stryMutAct_9fa48("39932")) {
        {}
      } else {
        stryCov_9fa48("39932");
        if (stryMutAct_9fa48("39935") ? a.votes === b.votes : stryMutAct_9fa48("39934") ? false : stryMutAct_9fa48("39933") ? true : (stryCov_9fa48("39933", "39934", "39935"), a.votes !== b.votes)) {
          if (stryMutAct_9fa48("39936")) {
            {}
          } else {
            stryCov_9fa48("39936");
            return stryMutAct_9fa48("39937") ? b.votes + a.votes : (stryCov_9fa48("39937"), b.votes - a.votes);
          }
        }
        return stryMutAct_9fa48("39938") ? b.postcount + a.postcount : (stryCov_9fa48("39938"), b.postcount - a.postcount);
      }
    }
    function sortPopular(a, b) {
      if (stryMutAct_9fa48("39939")) {
        {}
      } else {
        stryCov_9fa48("39939");
        if (stryMutAct_9fa48("39942") ? a.postcount === b.postcount : stryMutAct_9fa48("39941") ? false : stryMutAct_9fa48("39940") ? true : (stryCov_9fa48("39940", "39941", "39942"), a.postcount !== b.postcount)) {
          if (stryMutAct_9fa48("39943")) {
            {}
          } else {
            stryCov_9fa48("39943");
            return stryMutAct_9fa48("39944") ? b.postcount + a.postcount : (stryCov_9fa48("39944"), b.postcount - a.postcount);
          }
        }
        return stryMutAct_9fa48("39945") ? b.viewcount + a.viewcount : (stryCov_9fa48("39945"), b.viewcount - a.viewcount);
      }
    }
    function sortViews(a, b) {
      if (stryMutAct_9fa48("39946")) {
        {}
      } else {
        stryCov_9fa48("39946");
        return stryMutAct_9fa48("39947") ? b.viewcount + a.viewcount : (stryCov_9fa48("39947"), b.viewcount - a.viewcount);
      }
    }
    async function filterTids(tids, params) {
      if (stryMutAct_9fa48("39948")) {
        {}
      } else {
        stryCov_9fa48("39948");
        const {
          filter
        } = params;
        const {
          uid
        } = params;
        if (stryMutAct_9fa48("39951") ? filter !== 'new' : stryMutAct_9fa48("39950") ? false : stryMutAct_9fa48("39949") ? true : (stryCov_9fa48("39949", "39950", "39951"), filter === (stryMutAct_9fa48("39952") ? "" : (stryCov_9fa48("39952"), 'new')))) {
          if (stryMutAct_9fa48("39953")) {
            {}
          } else {
            stryCov_9fa48("39953");
            tids = await Topics.filterNewTids(tids, uid);
          }
        } else if (stryMutAct_9fa48("39956") ? filter !== 'unreplied' : stryMutAct_9fa48("39955") ? false : stryMutAct_9fa48("39954") ? true : (stryCov_9fa48("39954", "39955", "39956"), filter === (stryMutAct_9fa48("39957") ? "" : (stryCov_9fa48("39957"), 'unreplied')))) {
          if (stryMutAct_9fa48("39958")) {
            {}
          } else {
            stryCov_9fa48("39958");
            tids = await Topics.filterUnrepliedTids(tids);
          }
        } else {
          if (stryMutAct_9fa48("39959")) {
            {}
          } else {
            stryCov_9fa48("39959");
            tids = await Topics.filterNotIgnoredTids(tids, uid);
          }
        }
        tids = await privileges.topics.filterTids(stryMutAct_9fa48("39960") ? "" : (stryCov_9fa48("39960"), 'topics:read'), tids, uid);
        let topicData = await Topics.getTopicsFields(tids, stryMutAct_9fa48("39961") ? [] : (stryCov_9fa48("39961"), [stryMutAct_9fa48("39962") ? "" : (stryCov_9fa48("39962"), 'uid'), stryMutAct_9fa48("39963") ? "" : (stryCov_9fa48("39963"), 'tid'), stryMutAct_9fa48("39964") ? "" : (stryCov_9fa48("39964"), 'cid')]));
        const topicCids = stryMutAct_9fa48("39965") ? _.uniq(topicData.map(topic => topic.cid)) : (stryCov_9fa48("39965"), _.uniq(topicData.map(stryMutAct_9fa48("39966") ? () => undefined : (stryCov_9fa48("39966"), topic => topic.cid))).filter(Boolean));
        async function getIgnoredCids() {
          if (stryMutAct_9fa48("39967")) {
            {}
          } else {
            stryCov_9fa48("39967");
            if (stryMutAct_9fa48("39970") ? (params.cids || filter === 'watched') && meta.config.disableRecentCategoryFilter : stryMutAct_9fa48("39969") ? false : stryMutAct_9fa48("39968") ? true : (stryCov_9fa48("39968", "39969", "39970"), (stryMutAct_9fa48("39972") ? params.cids && filter === 'watched' : stryMutAct_9fa48("39971") ? false : (stryCov_9fa48("39971", "39972"), params.cids || (stryMutAct_9fa48("39974") ? filter !== 'watched' : stryMutAct_9fa48("39973") ? false : (stryCov_9fa48("39973", "39974"), filter === (stryMutAct_9fa48("39975") ? "" : (stryCov_9fa48("39975"), 'watched')))))) || meta.config.disableRecentCategoryFilter)) {
              if (stryMutAct_9fa48("39976")) {
                {}
              } else {
                stryCov_9fa48("39976");
                return stryMutAct_9fa48("39977") ? ["Stryker was here"] : (stryCov_9fa48("39977"), []);
              }
            }
            return await categories.isIgnored(topicCids, uid);
          }
        }
        const [ignoredCids, filtered] = await Promise.all(stryMutAct_9fa48("39978") ? [] : (stryCov_9fa48("39978"), [getIgnoredCids(), stryMutAct_9fa48("39979") ? user.blocks : (stryCov_9fa48("39979"), user.blocks.filter(uid, topicData))]));
        const isCidIgnored = _.zipObject(topicCids, ignoredCids);
        topicData = filtered;
        const cids = stryMutAct_9fa48("39982") ? params.cids || params.cids.map(String) : stryMutAct_9fa48("39981") ? false : stryMutAct_9fa48("39980") ? true : (stryCov_9fa48("39980", "39981", "39982"), params.cids && params.cids.map(String));
        tids = stryMutAct_9fa48("39983") ? topicData.map(t => t.tid) : (stryCov_9fa48("39983"), topicData.filter(stryMutAct_9fa48("39984") ? () => undefined : (stryCov_9fa48("39984"), t => stryMutAct_9fa48("39987") ? t && t.cid && !isCidIgnored[t.cid] || !cids || cids.includes(String(t.cid)) : stryMutAct_9fa48("39986") ? false : stryMutAct_9fa48("39985") ? true : (stryCov_9fa48("39985", "39986", "39987"), (stryMutAct_9fa48("39989") ? t && t.cid || !isCidIgnored[t.cid] : stryMutAct_9fa48("39988") ? true : (stryCov_9fa48("39988", "39989"), (stryMutAct_9fa48("39991") ? t || t.cid : stryMutAct_9fa48("39990") ? true : (stryCov_9fa48("39990", "39991"), t && t.cid)) && (stryMutAct_9fa48("39992") ? isCidIgnored[t.cid] : (stryCov_9fa48("39992"), !isCidIgnored[t.cid])))) && (stryMutAct_9fa48("39994") ? !cids && cids.includes(String(t.cid)) : stryMutAct_9fa48("39993") ? true : (stryCov_9fa48("39993", "39994"), (stryMutAct_9fa48("39995") ? cids : (stryCov_9fa48("39995"), !cids)) || cids.includes(String(t.cid))))))).map(stryMutAct_9fa48("39996") ? () => undefined : (stryCov_9fa48("39996"), t => t.tid)));
        const result = await plugins.hooks.fire(stryMutAct_9fa48("39997") ? "" : (stryCov_9fa48("39997"), 'filter:topics.filterSortedTids'), stryMutAct_9fa48("39998") ? {} : (stryCov_9fa48("39998"), {
          tids: tids,
          params: params
        }));
        return result.tids;
      }
    }
    async function getTopics(tids, params) {
      if (stryMutAct_9fa48("39999")) {
        {}
      } else {
        stryCov_9fa48("39999");
        tids = stryMutAct_9fa48("40000") ? tids : (stryCov_9fa48("40000"), tids.slice(params.start, (stryMutAct_9fa48("40003") ? params.stop === -1 : stryMutAct_9fa48("40002") ? false : stryMutAct_9fa48("40001") ? true : (stryCov_9fa48("40001", "40002", "40003"), params.stop !== (stryMutAct_9fa48("40004") ? +1 : (stryCov_9fa48("40004"), -1)))) ? stryMutAct_9fa48("40005") ? params.stop - 1 : (stryCov_9fa48("40005"), params.stop + 1) : undefined));
        const topicData = await Topics.getTopicsByTids(tids, params);
        Topics.calculateTopicIndices(topicData, params.start);
        return topicData;
      }
    }
    Topics.calculateTopicIndices = function (topicData, start) {
      if (stryMutAct_9fa48("40006")) {
        {}
      } else {
        stryCov_9fa48("40006");
        topicData.forEach((topic, index) => {
          if (stryMutAct_9fa48("40007")) {
            {}
          } else {
            stryCov_9fa48("40007");
            if (stryMutAct_9fa48("40009") ? false : stryMutAct_9fa48("40008") ? true : (stryCov_9fa48("40008", "40009"), topic)) {
              if (stryMutAct_9fa48("40010")) {
                {}
              } else {
                stryCov_9fa48("40010");
                topic.index = stryMutAct_9fa48("40011") ? start - index : (stryCov_9fa48("40011"), start + index);
              }
            }
          }
        });
      }
    };
  }
};