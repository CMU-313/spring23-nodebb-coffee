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
const nconf = require('nconf');
const path = require('path');
const validator = require('validator');
const db = require('../database');
const file = require('../file');
const plugins = require('../plugins');
const posts = require('../posts');
const meta = require('../meta');
const cache = require('../cache');
const Thumbs = module.exports;
Thumbs.exists = async function (id, path) {
  if (stryMutAct_9fa48("40797")) {
    {}
  } else {
    stryCov_9fa48("40797");
    const isDraft = validator.isUUID(String(id));
    const set = stryMutAct_9fa48("40798") ? `` : (stryCov_9fa48("40798"), `${isDraft ? stryMutAct_9fa48("40799") ? "" : (stryCov_9fa48("40799"), 'draft') : stryMutAct_9fa48("40800") ? "" : (stryCov_9fa48("40800"), 'topic')}:${id}:thumbs`);
    return db.isSortedSetMember(set, path);
  }
};
Thumbs.load = async function (topicData) {
  if (stryMutAct_9fa48("40801")) {
    {}
  } else {
    stryCov_9fa48("40801");
    const topicsWithThumbs = stryMutAct_9fa48("40802") ? topicData : (stryCov_9fa48("40802"), topicData.filter(stryMutAct_9fa48("40803") ? () => undefined : (stryCov_9fa48("40803"), t => stryMutAct_9fa48("40806") ? t || parseInt(t.numThumbs, 10) > 0 : stryMutAct_9fa48("40805") ? false : stryMutAct_9fa48("40804") ? true : (stryCov_9fa48("40804", "40805", "40806"), t && (stryMutAct_9fa48("40809") ? parseInt(t.numThumbs, 10) <= 0 : stryMutAct_9fa48("40808") ? parseInt(t.numThumbs, 10) >= 0 : stryMutAct_9fa48("40807") ? true : (stryCov_9fa48("40807", "40808", "40809"), parseInt(t.numThumbs, 10) > 0))))));
    const tidsWithThumbs = topicsWithThumbs.map(stryMutAct_9fa48("40810") ? () => undefined : (stryCov_9fa48("40810"), t => t.tid));
    const thumbs = await Thumbs.get(tidsWithThumbs);
    const tidToThumbs = _.zipObject(tidsWithThumbs, thumbs);
    return topicData.map(stryMutAct_9fa48("40811") ? () => undefined : (stryCov_9fa48("40811"), t => (stryMutAct_9fa48("40814") ? t || t.tid : stryMutAct_9fa48("40813") ? false : stryMutAct_9fa48("40812") ? true : (stryCov_9fa48("40812", "40813", "40814"), t && t.tid)) ? stryMutAct_9fa48("40817") ? tidToThumbs[t.tid] && [] : stryMutAct_9fa48("40816") ? false : stryMutAct_9fa48("40815") ? true : (stryCov_9fa48("40815", "40816", "40817"), tidToThumbs[t.tid] || (stryMutAct_9fa48("40818") ? ["Stryker was here"] : (stryCov_9fa48("40818"), []))) : stryMutAct_9fa48("40819") ? ["Stryker was here"] : (stryCov_9fa48("40819"), [])));
  }
};
Thumbs.get = async function (tids) {
  if (stryMutAct_9fa48("40820")) {
    {}
  } else {
    stryCov_9fa48("40820");
    // Allow singular or plural usage
    let singular = stryMutAct_9fa48("40821") ? true : (stryCov_9fa48("40821"), false);
    if (stryMutAct_9fa48("40824") ? false : stryMutAct_9fa48("40823") ? true : stryMutAct_9fa48("40822") ? Array.isArray(tids) : (stryCov_9fa48("40822", "40823", "40824"), !Array.isArray(tids))) {
      if (stryMutAct_9fa48("40825")) {
        {}
      } else {
        stryCov_9fa48("40825");
        tids = stryMutAct_9fa48("40826") ? [] : (stryCov_9fa48("40826"), [tids]);
        singular = stryMutAct_9fa48("40827") ? false : (stryCov_9fa48("40827"), true);
      }
    }
    if (stryMutAct_9fa48("40830") ? !meta.config.allowTopicsThumbnail && !tids.length : stryMutAct_9fa48("40829") ? false : stryMutAct_9fa48("40828") ? true : (stryCov_9fa48("40828", "40829", "40830"), (stryMutAct_9fa48("40831") ? meta.config.allowTopicsThumbnail : (stryCov_9fa48("40831"), !meta.config.allowTopicsThumbnail)) || (stryMutAct_9fa48("40832") ? tids.length : (stryCov_9fa48("40832"), !tids.length)))) {
      if (stryMutAct_9fa48("40833")) {
        {}
      } else {
        stryCov_9fa48("40833");
        return singular ? stryMutAct_9fa48("40834") ? ["Stryker was here"] : (stryCov_9fa48("40834"), []) : tids.map(stryMutAct_9fa48("40835") ? () => undefined : (stryCov_9fa48("40835"), () => stryMutAct_9fa48("40836") ? ["Stryker was here"] : (stryCov_9fa48("40836"), [])));
      }
    }
    const hasTimestampPrefix = stryMutAct_9fa48("40839") ? /^\D+-/ : stryMutAct_9fa48("40838") ? /^\d-/ : stryMutAct_9fa48("40837") ? /\d+-/ : (stryCov_9fa48("40837", "40838", "40839"), /^\d+-/);
    const upload_url = stryMutAct_9fa48("40840") ? nconf.get('relative_path') - nconf.get('upload_url') : (stryCov_9fa48("40840"), nconf.get(stryMutAct_9fa48("40841") ? "" : (stryCov_9fa48("40841"), 'relative_path')) + nconf.get(stryMutAct_9fa48("40842") ? "" : (stryCov_9fa48("40842"), 'upload_url')));
    const sets = tids.map(stryMutAct_9fa48("40843") ? () => undefined : (stryCov_9fa48("40843"), tid => stryMutAct_9fa48("40844") ? `` : (stryCov_9fa48("40844"), `${validator.isUUID(String(tid)) ? stryMutAct_9fa48("40845") ? "" : (stryCov_9fa48("40845"), 'draft') : stryMutAct_9fa48("40846") ? "" : (stryCov_9fa48("40846"), 'topic')}:${tid}:thumbs`)));
    const thumbs = await Promise.all(sets.map(getThumbs));
    let response = thumbs.map(stryMutAct_9fa48("40847") ? () => undefined : (stryCov_9fa48("40847"), (thumbSet, idx) => thumbSet.map(stryMutAct_9fa48("40848") ? () => undefined : (stryCov_9fa48("40848"), thumb => stryMutAct_9fa48("40849") ? {} : (stryCov_9fa48("40849"), {
      id: tids[idx],
      name: (() => {
        if (stryMutAct_9fa48("40850")) {
          {}
        } else {
          stryCov_9fa48("40850");
          const name = path.basename(thumb);
          return hasTimestampPrefix.test(name) ? stryMutAct_9fa48("40851") ? name : (stryCov_9fa48("40851"), name.slice(14)) : name;
        }
      })(),
      url: (stryMutAct_9fa48("40852") ? thumb.endsWith('http') : (stryCov_9fa48("40852"), thumb.startsWith(stryMutAct_9fa48("40853") ? "" : (stryCov_9fa48("40853"), 'http')))) ? thumb : path.posix.join(upload_url, thumb)
    })))));
    ({
      thumbs: response
    } = await plugins.hooks.fire(stryMutAct_9fa48("40854") ? "" : (stryCov_9fa48("40854"), 'filter:topics.getThumbs'), stryMutAct_9fa48("40855") ? {} : (stryCov_9fa48("40855"), {
      tids,
      thumbs: response
    })));
    return singular ? response.pop() : response;
  }
};
async function getThumbs(set) {
  if (stryMutAct_9fa48("40856")) {
    {}
  } else {
    stryCov_9fa48("40856");
    const cached = cache.get(set);
    if (stryMutAct_9fa48("40859") ? cached === undefined : stryMutAct_9fa48("40858") ? false : stryMutAct_9fa48("40857") ? true : (stryCov_9fa48("40857", "40858", "40859"), cached !== undefined)) {
      if (stryMutAct_9fa48("40860")) {
        {}
      } else {
        stryCov_9fa48("40860");
        return stryMutAct_9fa48("40861") ? cached : (stryCov_9fa48("40861"), cached.slice());
      }
    }
    const thumbs = await db.getSortedSetRange(set, 0, stryMutAct_9fa48("40862") ? +1 : (stryCov_9fa48("40862"), -1));
    cache.set(set, thumbs);
    return stryMutAct_9fa48("40863") ? thumbs : (stryCov_9fa48("40863"), thumbs.slice());
  }
}
Thumbs.associate = async function ({
  id,
  path,
  score
}) {
  if (stryMutAct_9fa48("40864")) {
    {}
  } else {
    stryCov_9fa48("40864");
    // Associates a newly uploaded file as a thumb to the passed-in draft or topic
    const isDraft = validator.isUUID(String(id));
    const isLocal = stryMutAct_9fa48("40865") ? path.startsWith('http') : (stryCov_9fa48("40865"), !(stryMutAct_9fa48("40866") ? path.endsWith('http') : (stryCov_9fa48("40866"), path.startsWith(stryMutAct_9fa48("40867") ? "" : (stryCov_9fa48("40867"), 'http')))));
    const set = stryMutAct_9fa48("40868") ? `` : (stryCov_9fa48("40868"), `${isDraft ? stryMutAct_9fa48("40869") ? "" : (stryCov_9fa48("40869"), 'draft') : stryMutAct_9fa48("40870") ? "" : (stryCov_9fa48("40870"), 'topic')}:${id}:thumbs`);
    const numThumbs = await db.sortedSetCard(set);

    // Normalize the path to allow for changes in upload_path (and so upload_url can be appended if needed)
    if (stryMutAct_9fa48("40872") ? false : stryMutAct_9fa48("40871") ? true : (stryCov_9fa48("40871", "40872"), isLocal)) {
      if (stryMutAct_9fa48("40873")) {
        {}
      } else {
        stryCov_9fa48("40873");
        path = path.replace(nconf.get(stryMutAct_9fa48("40874") ? "" : (stryCov_9fa48("40874"), 'upload_path')), stryMutAct_9fa48("40875") ? "Stryker was here!" : (stryCov_9fa48("40875"), ''));
      }
    }
    const topics = require('.');
    await db.sortedSetAdd(set, isFinite(score) ? score : numThumbs, path);
    if (stryMutAct_9fa48("40878") ? false : stryMutAct_9fa48("40877") ? true : stryMutAct_9fa48("40876") ? isDraft : (stryCov_9fa48("40876", "40877", "40878"), !isDraft)) {
      if (stryMutAct_9fa48("40879")) {
        {}
      } else {
        stryCov_9fa48("40879");
        const numThumbs = await db.sortedSetCard(set);
        await topics.setTopicField(id, stryMutAct_9fa48("40880") ? "" : (stryCov_9fa48("40880"), 'numThumbs'), numThumbs);
      }
    }
    cache.del(set);

    // Associate thumbnails with the main pid (only on local upload)
    if (stryMutAct_9fa48("40883") ? !isDraft || isLocal : stryMutAct_9fa48("40882") ? false : stryMutAct_9fa48("40881") ? true : (stryCov_9fa48("40881", "40882", "40883"), (stryMutAct_9fa48("40884") ? isDraft : (stryCov_9fa48("40884"), !isDraft)) && isLocal)) {
      if (stryMutAct_9fa48("40885")) {
        {}
      } else {
        stryCov_9fa48("40885");
        const mainPid = (await topics.getMainPids(stryMutAct_9fa48("40886") ? [] : (stryCov_9fa48("40886"), [id])))[0];
        await posts.uploads.associate(mainPid, stryMutAct_9fa48("40887") ? path : (stryCov_9fa48("40887"), path.slice(1)));
      }
    }
  }
};
Thumbs.migrate = async function (uuid, id) {
  if (stryMutAct_9fa48("40888")) {
    {}
  } else {
    stryCov_9fa48("40888");
    // Converts the draft thumb zset to the topic zset (combines thumbs if applicable)
    const set = stryMutAct_9fa48("40889") ? `` : (stryCov_9fa48("40889"), `draft:${uuid}:thumbs`);
    const thumbs = await db.getSortedSetRangeWithScores(set, 0, stryMutAct_9fa48("40890") ? +1 : (stryCov_9fa48("40890"), -1));
    await Promise.all(thumbs.map(stryMutAct_9fa48("40891") ? () => undefined : (stryCov_9fa48("40891"), async thumb => await Thumbs.associate(stryMutAct_9fa48("40892") ? {} : (stryCov_9fa48("40892"), {
      id,
      path: thumb.value,
      score: thumb.score
    })))));
    await db.delete(set);
    cache.del(set);
  }
};
Thumbs.delete = async function (id, relativePaths) {
  if (stryMutAct_9fa48("40893")) {
    {}
  } else {
    stryCov_9fa48("40893");
    const isDraft = validator.isUUID(String(id));
    const set = stryMutAct_9fa48("40894") ? `` : (stryCov_9fa48("40894"), `${isDraft ? stryMutAct_9fa48("40895") ? "" : (stryCov_9fa48("40895"), 'draft') : stryMutAct_9fa48("40896") ? "" : (stryCov_9fa48("40896"), 'topic')}:${id}:thumbs`);
    if (stryMutAct_9fa48("40899") ? typeof relativePaths !== 'string' : stryMutAct_9fa48("40898") ? false : stryMutAct_9fa48("40897") ? true : (stryCov_9fa48("40897", "40898", "40899"), typeof relativePaths === (stryMutAct_9fa48("40900") ? "" : (stryCov_9fa48("40900"), 'string')))) {
      if (stryMutAct_9fa48("40901")) {
        {}
      } else {
        stryCov_9fa48("40901");
        relativePaths = stryMutAct_9fa48("40902") ? [] : (stryCov_9fa48("40902"), [relativePaths]);
      }
    } else if (stryMutAct_9fa48("40905") ? false : stryMutAct_9fa48("40904") ? true : stryMutAct_9fa48("40903") ? Array.isArray(relativePaths) : (stryCov_9fa48("40903", "40904", "40905"), !Array.isArray(relativePaths))) {
      if (stryMutAct_9fa48("40906")) {
        {}
      } else {
        stryCov_9fa48("40906");
        throw new Error(stryMutAct_9fa48("40907") ? "" : (stryCov_9fa48("40907"), '[[error:invalid-data]]'));
      }
    }
    const absolutePaths = relativePaths.map(stryMutAct_9fa48("40908") ? () => undefined : (stryCov_9fa48("40908"), relativePath => path.join(nconf.get(stryMutAct_9fa48("40909") ? "" : (stryCov_9fa48("40909"), 'upload_path')), relativePath)));
    const [associated, existsOnDisk] = await Promise.all(stryMutAct_9fa48("40910") ? [] : (stryCov_9fa48("40910"), [db.isSortedSetMembers(set, relativePaths), Promise.all(absolutePaths.map(stryMutAct_9fa48("40911") ? () => undefined : (stryCov_9fa48("40911"), async absolutePath => file.exists(absolutePath))))]));
    const toRemove = stryMutAct_9fa48("40912") ? ["Stryker was here"] : (stryCov_9fa48("40912"), []);
    const toDelete = stryMutAct_9fa48("40913") ? ["Stryker was here"] : (stryCov_9fa48("40913"), []);
    relativePaths.forEach((relativePath, idx) => {
      if (stryMutAct_9fa48("40914")) {
        {}
      } else {
        stryCov_9fa48("40914");
        if (stryMutAct_9fa48("40916") ? false : stryMutAct_9fa48("40915") ? true : (stryCov_9fa48("40915", "40916"), associated[idx])) {
          if (stryMutAct_9fa48("40917")) {
            {}
          } else {
            stryCov_9fa48("40917");
            toRemove.push(relativePath);
          }
        }
        if (stryMutAct_9fa48("40919") ? false : stryMutAct_9fa48("40918") ? true : (stryCov_9fa48("40918", "40919"), existsOnDisk[idx])) {
          if (stryMutAct_9fa48("40920")) {
            {}
          } else {
            stryCov_9fa48("40920");
            toDelete.push(absolutePaths[idx]);
          }
        }
      }
    });
    await db.sortedSetRemove(set, toRemove);
    if (stryMutAct_9fa48("40923") ? isDraft || toDelete.length : stryMutAct_9fa48("40922") ? false : stryMutAct_9fa48("40921") ? true : (stryCov_9fa48("40921", "40922", "40923"), isDraft && toDelete.length)) {
      if (stryMutAct_9fa48("40924")) {
        {}
      } else {
        stryCov_9fa48("40924");
        // drafts only; post upload dissociation handles disk deletion for topics
        await Promise.all(toDelete.map(stryMutAct_9fa48("40925") ? () => undefined : (stryCov_9fa48("40925"), async absolutePath => file.delete(absolutePath))));
      }
    }
    if (stryMutAct_9fa48("40928") ? toRemove.length || !isDraft : stryMutAct_9fa48("40927") ? false : stryMutAct_9fa48("40926") ? true : (stryCov_9fa48("40926", "40927", "40928"), toRemove.length && (stryMutAct_9fa48("40929") ? isDraft : (stryCov_9fa48("40929"), !isDraft)))) {
      if (stryMutAct_9fa48("40930")) {
        {}
      } else {
        stryCov_9fa48("40930");
        const topics = require('.');
        const mainPid = (await topics.getMainPids(stryMutAct_9fa48("40931") ? [] : (stryCov_9fa48("40931"), [id])))[0];
        await Promise.all(stryMutAct_9fa48("40932") ? [] : (stryCov_9fa48("40932"), [db.incrObjectFieldBy(stryMutAct_9fa48("40933") ? `` : (stryCov_9fa48("40933"), `topic:${id}`), stryMutAct_9fa48("40934") ? "" : (stryCov_9fa48("40934"), 'numThumbs'), stryMutAct_9fa48("40935") ? +toRemove.length : (stryCov_9fa48("40935"), -toRemove.length)), Promise.all(toRemove.map(stryMutAct_9fa48("40936") ? () => undefined : (stryCov_9fa48("40936"), async relativePath => posts.uploads.dissociate(mainPid, stryMutAct_9fa48("40937") ? relativePath : (stryCov_9fa48("40937"), relativePath.slice(1))))))]));
      }
    }
  }
};
Thumbs.deleteAll = async id => {
  if (stryMutAct_9fa48("40938")) {
    {}
  } else {
    stryCov_9fa48("40938");
    const isDraft = validator.isUUID(String(id));
    const set = stryMutAct_9fa48("40939") ? `` : (stryCov_9fa48("40939"), `${isDraft ? stryMutAct_9fa48("40940") ? "" : (stryCov_9fa48("40940"), 'draft') : stryMutAct_9fa48("40941") ? "" : (stryCov_9fa48("40941"), 'topic')}:${id}:thumbs`);
    const thumbs = await db.getSortedSetRange(set, 0, stryMutAct_9fa48("40942") ? +1 : (stryCov_9fa48("40942"), -1));
    await Thumbs.delete(id, thumbs);
  }
};