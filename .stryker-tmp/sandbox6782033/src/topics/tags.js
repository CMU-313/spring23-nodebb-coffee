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
const async = require('async');
const validator = require('validator');
const _ = require('lodash');
const db = require('../database');
const meta = require('../meta');
const user = require('../user');
const categories = require('../categories');
const plugins = require('../plugins');
const utils = require('../utils');
const batch = require('../batch');
const cache = require('../cache');
module.exports = function (Topics) {
  if (stryMutAct_9fa48("40102")) {
    {}
  } else {
    stryCov_9fa48("40102");
    Topics.createTags = async function (tags, tid, timestamp) {
      if (stryMutAct_9fa48("40103")) {
        {}
      } else {
        stryCov_9fa48("40103");
        if (stryMutAct_9fa48("40106") ? !Array.isArray(tags) && !tags.length : stryMutAct_9fa48("40105") ? false : stryMutAct_9fa48("40104") ? true : (stryCov_9fa48("40104", "40105", "40106"), (stryMutAct_9fa48("40107") ? Array.isArray(tags) : (stryCov_9fa48("40107"), !Array.isArray(tags))) || (stryMutAct_9fa48("40108") ? tags.length : (stryCov_9fa48("40108"), !tags.length)))) {
          if (stryMutAct_9fa48("40109")) {
            {}
          } else {
            stryCov_9fa48("40109");
            return;
          }
        }
        const cid = await Topics.getTopicField(tid, stryMutAct_9fa48("40110") ? "" : (stryCov_9fa48("40110"), 'cid'));
        const topicSets = tags.map(stryMutAct_9fa48("40111") ? () => undefined : (stryCov_9fa48("40111"), tag => stryMutAct_9fa48("40112") ? `` : (stryCov_9fa48("40112"), `tag:${tag}:topics`))).concat(tags.map(stryMutAct_9fa48("40113") ? () => undefined : (stryCov_9fa48("40113"), tag => stryMutAct_9fa48("40114") ? `` : (stryCov_9fa48("40114"), `cid:${cid}:tag:${tag}:topics`))));
        await db.sortedSetsAdd(topicSets, timestamp, tid);
        await Topics.updateCategoryTagsCount(stryMutAct_9fa48("40115") ? [] : (stryCov_9fa48("40115"), [cid]), tags);
        await Promise.all(tags.map(updateTagCount));
      }
    };
    Topics.filterTags = async function (tags, cid) {
      if (stryMutAct_9fa48("40116")) {
        {}
      } else {
        stryCov_9fa48("40116");
        const result = await plugins.hooks.fire(stryMutAct_9fa48("40117") ? "" : (stryCov_9fa48("40117"), 'filter:tags.filter'), stryMutAct_9fa48("40118") ? {} : (stryCov_9fa48("40118"), {
          tags: tags,
          cid: cid
        }));
        tags = stryMutAct_9fa48("40119") ? _.uniq(result.tags).map(tag => utils.cleanUpTag(tag, meta.config.maximumTagLength)) : (stryCov_9fa48("40119"), _.uniq(result.tags).map(stryMutAct_9fa48("40120") ? () => undefined : (stryCov_9fa48("40120"), tag => utils.cleanUpTag(tag, meta.config.maximumTagLength))).filter(stryMutAct_9fa48("40121") ? () => undefined : (stryCov_9fa48("40121"), tag => stryMutAct_9fa48("40124") ? tag || tag.length >= (meta.config.minimumTagLength || 3) : stryMutAct_9fa48("40123") ? false : stryMutAct_9fa48("40122") ? true : (stryCov_9fa48("40122", "40123", "40124"), tag && (stryMutAct_9fa48("40127") ? tag.length < (meta.config.minimumTagLength || 3) : stryMutAct_9fa48("40126") ? tag.length > (meta.config.minimumTagLength || 3) : stryMutAct_9fa48("40125") ? true : (stryCov_9fa48("40125", "40126", "40127"), tag.length >= (stryMutAct_9fa48("40130") ? meta.config.minimumTagLength && 3 : stryMutAct_9fa48("40129") ? false : stryMutAct_9fa48("40128") ? true : (stryCov_9fa48("40128", "40129", "40130"), meta.config.minimumTagLength || 3))))))));
        return await filterCategoryTags(tags, cid);
      }
    };
    Topics.updateCategoryTagsCount = async function (cids, tags) {
      if (stryMutAct_9fa48("40131")) {
        {}
      } else {
        stryCov_9fa48("40131");
        await Promise.all(cids.map(async cid => {
          if (stryMutAct_9fa48("40132")) {
            {}
          } else {
            stryCov_9fa48("40132");
            const counts = await db.sortedSetsCard(tags.map(stryMutAct_9fa48("40133") ? () => undefined : (stryCov_9fa48("40133"), tag => stryMutAct_9fa48("40134") ? `` : (stryCov_9fa48("40134"), `cid:${cid}:tag:${tag}:topics`))));
            const tagToCount = _.zipObject(tags, counts);
            const set = stryMutAct_9fa48("40135") ? `` : (stryCov_9fa48("40135"), `cid:${cid}:tags`);
            const bulkAdd = stryMutAct_9fa48("40136") ? tags.map(tag => [set, tagToCount[tag], tag]) : (stryCov_9fa48("40136"), tags.filter(stryMutAct_9fa48("40137") ? () => undefined : (stryCov_9fa48("40137"), tag => stryMutAct_9fa48("40141") ? tagToCount[tag] <= 0 : stryMutAct_9fa48("40140") ? tagToCount[tag] >= 0 : stryMutAct_9fa48("40139") ? false : stryMutAct_9fa48("40138") ? true : (stryCov_9fa48("40138", "40139", "40140", "40141"), tagToCount[tag] > 0))).map(stryMutAct_9fa48("40142") ? () => undefined : (stryCov_9fa48("40142"), tag => stryMutAct_9fa48("40143") ? [] : (stryCov_9fa48("40143"), [set, tagToCount[tag], tag]))));
            const bulkRemove = stryMutAct_9fa48("40144") ? tags.map(tag => [set, tag]) : (stryCov_9fa48("40144"), tags.filter(stryMutAct_9fa48("40145") ? () => undefined : (stryCov_9fa48("40145"), tag => stryMutAct_9fa48("40149") ? tagToCount[tag] > 0 : stryMutAct_9fa48("40148") ? tagToCount[tag] < 0 : stryMutAct_9fa48("40147") ? false : stryMutAct_9fa48("40146") ? true : (stryCov_9fa48("40146", "40147", "40148", "40149"), tagToCount[tag] <= 0))).map(stryMutAct_9fa48("40150") ? () => undefined : (stryCov_9fa48("40150"), tag => stryMutAct_9fa48("40151") ? [] : (stryCov_9fa48("40151"), [set, tag]))));
            await Promise.all(stryMutAct_9fa48("40152") ? [] : (stryCov_9fa48("40152"), [db.sortedSetAddBulk(bulkAdd), db.sortedSetRemoveBulk(bulkRemove)]));
          }
        }));
        await db.sortedSetsRemoveRangeByScore(cids.map(stryMutAct_9fa48("40153") ? () => undefined : (stryCov_9fa48("40153"), cid => stryMutAct_9fa48("40154") ? `` : (stryCov_9fa48("40154"), `cid:${cid}:tags`))), stryMutAct_9fa48("40155") ? "" : (stryCov_9fa48("40155"), '-inf'), 0);
      }
    };
    Topics.validateTags = async function (tags, cid, uid, tid = null) {
      if (stryMutAct_9fa48("40156")) {
        {}
      } else {
        stryCov_9fa48("40156");
        if (stryMutAct_9fa48("40159") ? false : stryMutAct_9fa48("40158") ? true : stryMutAct_9fa48("40157") ? Array.isArray(tags) : (stryCov_9fa48("40157", "40158", "40159"), !Array.isArray(tags))) {
          if (stryMutAct_9fa48("40160")) {
            {}
          } else {
            stryCov_9fa48("40160");
            throw new Error(stryMutAct_9fa48("40161") ? "" : (stryCov_9fa48("40161"), '[[error:invalid-data]]'));
          }
        }
        tags = _.uniq(tags);
        const [categoryData, isPrivileged, currentTags] = await Promise.all(stryMutAct_9fa48("40162") ? [] : (stryCov_9fa48("40162"), [categories.getCategoryFields(cid, stryMutAct_9fa48("40163") ? [] : (stryCov_9fa48("40163"), [stryMutAct_9fa48("40164") ? "" : (stryCov_9fa48("40164"), 'minTags'), stryMutAct_9fa48("40165") ? "" : (stryCov_9fa48("40165"), 'maxTags')])), user.isPrivileged(uid), tid ? Topics.getTopicTags(tid) : stryMutAct_9fa48("40166") ? ["Stryker was here"] : (stryCov_9fa48("40166"), [])]));
        if (stryMutAct_9fa48("40170") ? tags.length >= parseInt(categoryData.minTags, 10) : stryMutAct_9fa48("40169") ? tags.length <= parseInt(categoryData.minTags, 10) : stryMutAct_9fa48("40168") ? false : stryMutAct_9fa48("40167") ? true : (stryCov_9fa48("40167", "40168", "40169", "40170"), tags.length < parseInt(categoryData.minTags, 10))) {
          if (stryMutAct_9fa48("40171")) {
            {}
          } else {
            stryCov_9fa48("40171");
            throw new Error(stryMutAct_9fa48("40172") ? `` : (stryCov_9fa48("40172"), `[[error:not-enough-tags, ${categoryData.minTags}]]`));
          }
        } else if (stryMutAct_9fa48("40176") ? tags.length <= parseInt(categoryData.maxTags, 10) : stryMutAct_9fa48("40175") ? tags.length >= parseInt(categoryData.maxTags, 10) : stryMutAct_9fa48("40174") ? false : stryMutAct_9fa48("40173") ? true : (stryCov_9fa48("40173", "40174", "40175", "40176"), tags.length > parseInt(categoryData.maxTags, 10))) {
          if (stryMutAct_9fa48("40177")) {
            {}
          } else {
            stryCov_9fa48("40177");
            throw new Error(stryMutAct_9fa48("40178") ? `` : (stryCov_9fa48("40178"), `[[error:too-many-tags, ${categoryData.maxTags}]]`));
          }
        }
        const addedTags = stryMutAct_9fa48("40179") ? tags : (stryCov_9fa48("40179"), tags.filter(stryMutAct_9fa48("40180") ? () => undefined : (stryCov_9fa48("40180"), tag => stryMutAct_9fa48("40181") ? currentTags.includes(tag) : (stryCov_9fa48("40181"), !currentTags.includes(tag)))));
        const removedTags = stryMutAct_9fa48("40182") ? currentTags : (stryCov_9fa48("40182"), currentTags.filter(stryMutAct_9fa48("40183") ? () => undefined : (stryCov_9fa48("40183"), tag => stryMutAct_9fa48("40184") ? tags.includes(tag) : (stryCov_9fa48("40184"), !tags.includes(tag)))));
        const systemTags = (stryMutAct_9fa48("40187") ? meta.config.systemTags && '' : stryMutAct_9fa48("40186") ? false : stryMutAct_9fa48("40185") ? true : (stryCov_9fa48("40185", "40186", "40187"), meta.config.systemTags || (stryMutAct_9fa48("40188") ? "Stryker was here!" : (stryCov_9fa48("40188"), '')))).split(stryMutAct_9fa48("40189") ? "" : (stryCov_9fa48("40189"), ','));
        if (stryMutAct_9fa48("40192") ? !isPrivileged && systemTags.length && addedTags.length || addedTags.some(tag => systemTags.includes(tag)) : stryMutAct_9fa48("40191") ? false : stryMutAct_9fa48("40190") ? true : (stryCov_9fa48("40190", "40191", "40192"), (stryMutAct_9fa48("40194") ? !isPrivileged && systemTags.length || addedTags.length : stryMutAct_9fa48("40193") ? true : (stryCov_9fa48("40193", "40194"), (stryMutAct_9fa48("40196") ? !isPrivileged || systemTags.length : stryMutAct_9fa48("40195") ? true : (stryCov_9fa48("40195", "40196"), (stryMutAct_9fa48("40197") ? isPrivileged : (stryCov_9fa48("40197"), !isPrivileged)) && systemTags.length)) && addedTags.length)) && (stryMutAct_9fa48("40198") ? addedTags.every(tag => systemTags.includes(tag)) : (stryCov_9fa48("40198"), addedTags.some(stryMutAct_9fa48("40199") ? () => undefined : (stryCov_9fa48("40199"), tag => systemTags.includes(tag))))))) {
          if (stryMutAct_9fa48("40200")) {
            {}
          } else {
            stryCov_9fa48("40200");
            throw new Error(stryMutAct_9fa48("40201") ? "" : (stryCov_9fa48("40201"), '[[error:cant-use-system-tag]]'));
          }
        }
        if (stryMutAct_9fa48("40204") ? !isPrivileged && systemTags.length && removedTags.length || removedTags.some(tag => systemTags.includes(tag)) : stryMutAct_9fa48("40203") ? false : stryMutAct_9fa48("40202") ? true : (stryCov_9fa48("40202", "40203", "40204"), (stryMutAct_9fa48("40206") ? !isPrivileged && systemTags.length || removedTags.length : stryMutAct_9fa48("40205") ? true : (stryCov_9fa48("40205", "40206"), (stryMutAct_9fa48("40208") ? !isPrivileged || systemTags.length : stryMutAct_9fa48("40207") ? true : (stryCov_9fa48("40207", "40208"), (stryMutAct_9fa48("40209") ? isPrivileged : (stryCov_9fa48("40209"), !isPrivileged)) && systemTags.length)) && removedTags.length)) && (stryMutAct_9fa48("40210") ? removedTags.every(tag => systemTags.includes(tag)) : (stryCov_9fa48("40210"), removedTags.some(stryMutAct_9fa48("40211") ? () => undefined : (stryCov_9fa48("40211"), tag => systemTags.includes(tag))))))) {
          if (stryMutAct_9fa48("40212")) {
            {}
          } else {
            stryCov_9fa48("40212");
            throw new Error(stryMutAct_9fa48("40213") ? "" : (stryCov_9fa48("40213"), '[[error:cant-remove-system-tag]]'));
          }
        }
      }
    };
    async function filterCategoryTags(tags, cid) {
      if (stryMutAct_9fa48("40214")) {
        {}
      } else {
        stryCov_9fa48("40214");
        const tagWhitelist = await categories.getTagWhitelist(stryMutAct_9fa48("40215") ? [] : (stryCov_9fa48("40215"), [cid]));
        if (stryMutAct_9fa48("40218") ? !Array.isArray(tagWhitelist[0]) && !tagWhitelist[0].length : stryMutAct_9fa48("40217") ? false : stryMutAct_9fa48("40216") ? true : (stryCov_9fa48("40216", "40217", "40218"), (stryMutAct_9fa48("40219") ? Array.isArray(tagWhitelist[0]) : (stryCov_9fa48("40219"), !Array.isArray(tagWhitelist[0]))) || (stryMutAct_9fa48("40220") ? tagWhitelist[0].length : (stryCov_9fa48("40220"), !tagWhitelist[0].length)))) {
          if (stryMutAct_9fa48("40221")) {
            {}
          } else {
            stryCov_9fa48("40221");
            return tags;
          }
        }
        const whitelistSet = new Set(tagWhitelist[0]);
        return stryMutAct_9fa48("40222") ? tags : (stryCov_9fa48("40222"), tags.filter(stryMutAct_9fa48("40223") ? () => undefined : (stryCov_9fa48("40223"), tag => whitelistSet.has(tag))));
      }
    }
    Topics.createEmptyTag = async function (tag) {
      if (stryMutAct_9fa48("40224")) {
        {}
      } else {
        stryCov_9fa48("40224");
        if (stryMutAct_9fa48("40227") ? false : stryMutAct_9fa48("40226") ? true : stryMutAct_9fa48("40225") ? tag : (stryCov_9fa48("40225", "40226", "40227"), !tag)) {
          if (stryMutAct_9fa48("40228")) {
            {}
          } else {
            stryCov_9fa48("40228");
            throw new Error(stryMutAct_9fa48("40229") ? "" : (stryCov_9fa48("40229"), '[[error:invalid-tag]]'));
          }
        }
        if (stryMutAct_9fa48("40233") ? tag.length >= (meta.config.minimumTagLength || 3) : stryMutAct_9fa48("40232") ? tag.length <= (meta.config.minimumTagLength || 3) : stryMutAct_9fa48("40231") ? false : stryMutAct_9fa48("40230") ? true : (stryCov_9fa48("40230", "40231", "40232", "40233"), tag.length < (stryMutAct_9fa48("40236") ? meta.config.minimumTagLength && 3 : stryMutAct_9fa48("40235") ? false : stryMutAct_9fa48("40234") ? true : (stryCov_9fa48("40234", "40235", "40236"), meta.config.minimumTagLength || 3)))) {
          if (stryMutAct_9fa48("40237")) {
            {}
          } else {
            stryCov_9fa48("40237");
            throw new Error(stryMutAct_9fa48("40238") ? "" : (stryCov_9fa48("40238"), '[[error:tag-too-short]]'));
          }
        }
        const isMember = await db.isSortedSetMember(stryMutAct_9fa48("40239") ? "" : (stryCov_9fa48("40239"), 'tags:topic:count'), tag);
        if (stryMutAct_9fa48("40242") ? false : stryMutAct_9fa48("40241") ? true : stryMutAct_9fa48("40240") ? isMember : (stryCov_9fa48("40240", "40241", "40242"), !isMember)) {
          if (stryMutAct_9fa48("40243")) {
            {}
          } else {
            stryCov_9fa48("40243");
            await db.sortedSetAdd(stryMutAct_9fa48("40244") ? "" : (stryCov_9fa48("40244"), 'tags:topic:count'), 0, tag);
            cache.del(stryMutAct_9fa48("40245") ? "" : (stryCov_9fa48("40245"), 'tags:topic:count'));
          }
        }
        const allCids = await categories.getAllCidsFromSet(stryMutAct_9fa48("40246") ? "" : (stryCov_9fa48("40246"), 'categories:cid'));
        const isMembers = await db.isMemberOfSortedSets(allCids.map(stryMutAct_9fa48("40247") ? () => undefined : (stryCov_9fa48("40247"), cid => stryMutAct_9fa48("40248") ? `` : (stryCov_9fa48("40248"), `cid:${cid}:tags`))), tag);
        const bulkAdd = stryMutAct_9fa48("40249") ? allCids.map(cid => [`cid:${cid}:tags`, 0, tag]) : (stryCov_9fa48("40249"), allCids.filter(stryMutAct_9fa48("40250") ? () => undefined : (stryCov_9fa48("40250"), (cid, index) => stryMutAct_9fa48("40251") ? isMembers[index] : (stryCov_9fa48("40251"), !isMembers[index]))).map(stryMutAct_9fa48("40252") ? () => undefined : (stryCov_9fa48("40252"), cid => stryMutAct_9fa48("40253") ? [] : (stryCov_9fa48("40253"), [stryMutAct_9fa48("40254") ? `` : (stryCov_9fa48("40254"), `cid:${cid}:tags`), 0, tag]))));
        await db.sortedSetAddBulk(bulkAdd);
      }
    };
    Topics.renameTags = async function (data) {
      if (stryMutAct_9fa48("40255")) {
        {}
      } else {
        stryCov_9fa48("40255");
        for (const tagData of data) {
          if (stryMutAct_9fa48("40256")) {
            {}
          } else {
            stryCov_9fa48("40256");
            // eslint-disable-next-line no-await-in-loop
            await renameTag(tagData.value, tagData.newName);
          }
        }
      }
    };
    async function renameTag(tag, newTagName) {
      if (stryMutAct_9fa48("40257")) {
        {}
      } else {
        stryCov_9fa48("40257");
        if (stryMutAct_9fa48("40260") ? !newTagName && tag === newTagName : stryMutAct_9fa48("40259") ? false : stryMutAct_9fa48("40258") ? true : (stryCov_9fa48("40258", "40259", "40260"), (stryMutAct_9fa48("40261") ? newTagName : (stryCov_9fa48("40261"), !newTagName)) || (stryMutAct_9fa48("40263") ? tag !== newTagName : stryMutAct_9fa48("40262") ? false : (stryCov_9fa48("40262", "40263"), tag === newTagName)))) {
          if (stryMutAct_9fa48("40264")) {
            {}
          } else {
            stryCov_9fa48("40264");
            return;
          }
        }
        newTagName = utils.cleanUpTag(newTagName, meta.config.maximumTagLength);
        await Topics.createEmptyTag(newTagName);
        const allCids = {};
        await batch.processSortedSet(stryMutAct_9fa48("40265") ? `` : (stryCov_9fa48("40265"), `tag:${tag}:topics`), async tids => {
          if (stryMutAct_9fa48("40266")) {
            {}
          } else {
            stryCov_9fa48("40266");
            const topicData = await Topics.getTopicsFields(tids, stryMutAct_9fa48("40267") ? [] : (stryCov_9fa48("40267"), [stryMutAct_9fa48("40268") ? "" : (stryCov_9fa48("40268"), 'tid'), stryMutAct_9fa48("40269") ? "" : (stryCov_9fa48("40269"), 'cid'), stryMutAct_9fa48("40270") ? "" : (stryCov_9fa48("40270"), 'tags')]));
            const cids = topicData.map(stryMutAct_9fa48("40271") ? () => undefined : (stryCov_9fa48("40271"), t => t.cid));
            topicData.forEach(t => {
              if (stryMutAct_9fa48("40272")) {
                {}
              } else {
                stryCov_9fa48("40272");
                allCids[t.cid] = stryMutAct_9fa48("40273") ? false : (stryCov_9fa48("40273"), true);
              }
            });
            const scores = await db.sortedSetScores(stryMutAct_9fa48("40274") ? `` : (stryCov_9fa48("40274"), `tag:${tag}:topics`), tids);
            // update tag:<tag>:topics
            await db.sortedSetAdd(stryMutAct_9fa48("40275") ? `` : (stryCov_9fa48("40275"), `tag:${newTagName}:topics`), scores, tids);
            await db.sortedSetRemove(stryMutAct_9fa48("40276") ? `` : (stryCov_9fa48("40276"), `tag:${tag}:topics`), tids);

            // update cid:<cid>:tag:<tag>:topics
            await db.sortedSetAddBulk(topicData.map(stryMutAct_9fa48("40277") ? () => undefined : (stryCov_9fa48("40277"), (t, index) => stryMutAct_9fa48("40278") ? [] : (stryCov_9fa48("40278"), [stryMutAct_9fa48("40279") ? `` : (stryCov_9fa48("40279"), `cid:${t.cid}:tag:${newTagName}:topics`), scores[index], t.tid]))));
            await db.sortedSetRemove(cids.map(stryMutAct_9fa48("40280") ? () => undefined : (stryCov_9fa48("40280"), cid => stryMutAct_9fa48("40281") ? `` : (stryCov_9fa48("40281"), `cid:${cid}:tag:${tag}:topics`))), tids);

            // update 'tags' field in topic hash
            topicData.forEach(topic => {
              if (stryMutAct_9fa48("40282")) {
                {}
              } else {
                stryCov_9fa48("40282");
                topic.tags = topic.tags.map(stryMutAct_9fa48("40283") ? () => undefined : (stryCov_9fa48("40283"), tagItem => tagItem.value));
                const index = topic.tags.indexOf(tag);
                if (stryMutAct_9fa48("40286") ? index === -1 : stryMutAct_9fa48("40285") ? false : stryMutAct_9fa48("40284") ? true : (stryCov_9fa48("40284", "40285", "40286"), index !== (stryMutAct_9fa48("40287") ? +1 : (stryCov_9fa48("40287"), -1)))) {
                  if (stryMutAct_9fa48("40288")) {
                    {}
                  } else {
                    stryCov_9fa48("40288");
                    topic.tags.splice(index, 1, newTagName);
                  }
                }
              }
            });
            await db.setObjectBulk(topicData.map(stryMutAct_9fa48("40289") ? () => undefined : (stryCov_9fa48("40289"), t => stryMutAct_9fa48("40290") ? [] : (stryCov_9fa48("40290"), [stryMutAct_9fa48("40291") ? `` : (stryCov_9fa48("40291"), `topic:${t.tid}`), stryMutAct_9fa48("40292") ? {} : (stryCov_9fa48("40292"), {
              tags: t.tags.join(stryMutAct_9fa48("40293") ? "" : (stryCov_9fa48("40293"), ','))
            })]))));
          }
        }, {});
        await Topics.deleteTag(tag);
        await updateTagCount(newTagName);
        await Topics.updateCategoryTagsCount(Object.keys(allCids), stryMutAct_9fa48("40294") ? [] : (stryCov_9fa48("40294"), [newTagName]));
      }
    }
    async function updateTagCount(tag) {
      if (stryMutAct_9fa48("40295")) {
        {}
      } else {
        stryCov_9fa48("40295");
        const count = await Topics.getTagTopicCount(tag);
        await db.sortedSetAdd(stryMutAct_9fa48("40296") ? "" : (stryCov_9fa48("40296"), 'tags:topic:count'), stryMutAct_9fa48("40299") ? count && 0 : stryMutAct_9fa48("40298") ? false : stryMutAct_9fa48("40297") ? true : (stryCov_9fa48("40297", "40298", "40299"), count || 0), tag);
        cache.del(stryMutAct_9fa48("40300") ? "" : (stryCov_9fa48("40300"), 'tags:topic:count'));
      }
    }
    Topics.getTagTids = async function (tag, start, stop) {
      if (stryMutAct_9fa48("40301")) {
        {}
      } else {
        stryCov_9fa48("40301");
        const tids = await db.getSortedSetRevRange(stryMutAct_9fa48("40302") ? `` : (stryCov_9fa48("40302"), `tag:${tag}:topics`), start, stop);
        const payload = await plugins.hooks.fire(stryMutAct_9fa48("40303") ? "" : (stryCov_9fa48("40303"), 'filter:topics.getTagTids'), stryMutAct_9fa48("40304") ? {} : (stryCov_9fa48("40304"), {
          tag,
          start,
          stop,
          tids
        }));
        return payload.tids;
      }
    };
    Topics.getTagTidsByCids = async function (tag, cids, start, stop) {
      if (stryMutAct_9fa48("40305")) {
        {}
      } else {
        stryCov_9fa48("40305");
        const keys = cids.map(stryMutAct_9fa48("40306") ? () => undefined : (stryCov_9fa48("40306"), cid => stryMutAct_9fa48("40307") ? `` : (stryCov_9fa48("40307"), `cid:${cid}:tag:${tag}:topics`)));
        const tids = await db.getSortedSetRevRange(keys, start, stop);
        const payload = await plugins.hooks.fire(stryMutAct_9fa48("40308") ? "" : (stryCov_9fa48("40308"), 'filter:topics.getTagTidsByCids'), stryMutAct_9fa48("40309") ? {} : (stryCov_9fa48("40309"), {
          tag,
          cids,
          start,
          stop,
          tids
        }));
        return payload.tids;
      }
    };
    Topics.getTagTopicCount = async function (tag, cids = stryMutAct_9fa48("40310") ? ["Stryker was here"] : (stryCov_9fa48("40310"), [])) {
      if (stryMutAct_9fa48("40311")) {
        {}
      } else {
        stryCov_9fa48("40311");
        let count = 0;
        if (stryMutAct_9fa48("40313") ? false : stryMutAct_9fa48("40312") ? true : (stryCov_9fa48("40312", "40313"), cids.length)) {
          if (stryMutAct_9fa48("40314")) {
            {}
          } else {
            stryCov_9fa48("40314");
            count = await db.sortedSetsCardSum(cids.map(stryMutAct_9fa48("40315") ? () => undefined : (stryCov_9fa48("40315"), cid => stryMutAct_9fa48("40316") ? `` : (stryCov_9fa48("40316"), `cid:${cid}:tag:${tag}:topics`))));
          }
        } else {
          if (stryMutAct_9fa48("40317")) {
            {}
          } else {
            stryCov_9fa48("40317");
            count = await db.sortedSetCard(stryMutAct_9fa48("40318") ? `` : (stryCov_9fa48("40318"), `tag:${tag}:topics`));
          }
        }
        const payload = await plugins.hooks.fire(stryMutAct_9fa48("40319") ? "" : (stryCov_9fa48("40319"), 'filter:topics.getTagTopicCount'), stryMutAct_9fa48("40320") ? {} : (stryCov_9fa48("40320"), {
          tag,
          count,
          cids
        }));
        return payload.count;
      }
    };
    Topics.deleteTags = async function (tags) {
      if (stryMutAct_9fa48("40321")) {
        {}
      } else {
        stryCov_9fa48("40321");
        if (stryMutAct_9fa48("40324") ? !Array.isArray(tags) && !tags.length : stryMutAct_9fa48("40323") ? false : stryMutAct_9fa48("40322") ? true : (stryCov_9fa48("40322", "40323", "40324"), (stryMutAct_9fa48("40325") ? Array.isArray(tags) : (stryCov_9fa48("40325"), !Array.isArray(tags))) || (stryMutAct_9fa48("40326") ? tags.length : (stryCov_9fa48("40326"), !tags.length)))) {
          if (stryMutAct_9fa48("40327")) {
            {}
          } else {
            stryCov_9fa48("40327");
            return;
          }
        }
        await removeTagsFromTopics(tags);
        const keys = tags.map(stryMutAct_9fa48("40328") ? () => undefined : (stryCov_9fa48("40328"), tag => stryMutAct_9fa48("40329") ? `` : (stryCov_9fa48("40329"), `tag:${tag}:topics`)));
        await db.deleteAll(keys);
        await db.sortedSetRemove(stryMutAct_9fa48("40330") ? "" : (stryCov_9fa48("40330"), 'tags:topic:count'), tags);
        cache.del(stryMutAct_9fa48("40331") ? "" : (stryCov_9fa48("40331"), 'tags:topic:count'));
        const cids = await categories.getAllCidsFromSet(stryMutAct_9fa48("40332") ? "" : (stryCov_9fa48("40332"), 'categories:cid'));
        await db.sortedSetRemove(cids.map(stryMutAct_9fa48("40333") ? () => undefined : (stryCov_9fa48("40333"), cid => stryMutAct_9fa48("40334") ? `` : (stryCov_9fa48("40334"), `cid:${cid}:tags`))), tags);
        const deleteKeys = stryMutAct_9fa48("40335") ? ["Stryker was here"] : (stryCov_9fa48("40335"), []);
        tags.forEach(tag => {
          if (stryMutAct_9fa48("40336")) {
            {}
          } else {
            stryCov_9fa48("40336");
            deleteKeys.push(stryMutAct_9fa48("40337") ? `` : (stryCov_9fa48("40337"), `tag:${tag}`));
            cids.forEach(cid => {
              if (stryMutAct_9fa48("40338")) {
                {}
              } else {
                stryCov_9fa48("40338");
                deleteKeys.push(stryMutAct_9fa48("40339") ? `` : (stryCov_9fa48("40339"), `cid:${cid}:tag:${tag}:topics`));
              }
            });
          }
        });
        await db.deleteAll(deleteKeys);
      }
    };
    async function removeTagsFromTopics(tags) {
      if (stryMutAct_9fa48("40340")) {
        {}
      } else {
        stryCov_9fa48("40340");
        await async.eachLimit(tags, 50, async tag => {
          if (stryMutAct_9fa48("40341")) {
            {}
          } else {
            stryCov_9fa48("40341");
            const tids = await db.getSortedSetRange(stryMutAct_9fa48("40342") ? `` : (stryCov_9fa48("40342"), `tag:${tag}:topics`), 0, stryMutAct_9fa48("40343") ? +1 : (stryCov_9fa48("40343"), -1));
            if (stryMutAct_9fa48("40346") ? false : stryMutAct_9fa48("40345") ? true : stryMutAct_9fa48("40344") ? tids.length : (stryCov_9fa48("40344", "40345", "40346"), !tids.length)) {
              if (stryMutAct_9fa48("40347")) {
                {}
              } else {
                stryCov_9fa48("40347");
                return;
              }
            }
            await db.deleteObjectFields(tids.map(stryMutAct_9fa48("40348") ? () => undefined : (stryCov_9fa48("40348"), tid => stryMutAct_9fa48("40349") ? `` : (stryCov_9fa48("40349"), `topic:${tid}`))), stryMutAct_9fa48("40350") ? [] : (stryCov_9fa48("40350"), [stryMutAct_9fa48("40351") ? "" : (stryCov_9fa48("40351"), 'tags')]));
          }
        });
      }
    }
    Topics.deleteTag = async function (tag) {
      if (stryMutAct_9fa48("40352")) {
        {}
      } else {
        stryCov_9fa48("40352");
        await Topics.deleteTags(stryMutAct_9fa48("40353") ? [] : (stryCov_9fa48("40353"), [tag]));
      }
    };
    Topics.getTags = async function (start, stop) {
      if (stryMutAct_9fa48("40354")) {
        {}
      } else {
        stryCov_9fa48("40354");
        return await getFromSet(stryMutAct_9fa48("40355") ? "" : (stryCov_9fa48("40355"), 'tags:topic:count'), start, stop);
      }
    };
    Topics.getCategoryTags = async function (cids, start, stop) {
      if (stryMutAct_9fa48("40356")) {
        {}
      } else {
        stryCov_9fa48("40356");
        if (stryMutAct_9fa48("40358") ? false : stryMutAct_9fa48("40357") ? true : (stryCov_9fa48("40357", "40358"), Array.isArray(cids))) {
          if (stryMutAct_9fa48("40359")) {
            {}
          } else {
            stryCov_9fa48("40359");
            return await db.getSortedSetRevUnion(stryMutAct_9fa48("40360") ? {} : (stryCov_9fa48("40360"), {
              sets: cids.map(stryMutAct_9fa48("40361") ? () => undefined : (stryCov_9fa48("40361"), cid => stryMutAct_9fa48("40362") ? `` : (stryCov_9fa48("40362"), `cid:${cid}:tags`))),
              start,
              stop
            }));
          }
        }
        return await db.getSortedSetRevRange(stryMutAct_9fa48("40363") ? `` : (stryCov_9fa48("40363"), `cid:${cids}:tags`), start, stop);
      }
    };
    Topics.getCategoryTagsData = async function (cids, start, stop) {
      if (stryMutAct_9fa48("40364")) {
        {}
      } else {
        stryCov_9fa48("40364");
        return await getFromSet(Array.isArray(cids) ? cids.map(stryMutAct_9fa48("40365") ? () => undefined : (stryCov_9fa48("40365"), cid => stryMutAct_9fa48("40366") ? `` : (stryCov_9fa48("40366"), `cid:${cid}:tags`))) : stryMutAct_9fa48("40367") ? `` : (stryCov_9fa48("40367"), `cid:${cids}:tags`), start, stop);
      }
    };
    async function getFromSet(set, start, stop) {
      if (stryMutAct_9fa48("40368")) {
        {}
      } else {
        stryCov_9fa48("40368");
        let tags;
        if (stryMutAct_9fa48("40370") ? false : stryMutAct_9fa48("40369") ? true : (stryCov_9fa48("40369", "40370"), Array.isArray(set))) {
          if (stryMutAct_9fa48("40371")) {
            {}
          } else {
            stryCov_9fa48("40371");
            tags = await db.getSortedSetRevUnion(stryMutAct_9fa48("40372") ? {} : (stryCov_9fa48("40372"), {
              sets: set,
              start,
              stop,
              withScores: stryMutAct_9fa48("40373") ? false : (stryCov_9fa48("40373"), true)
            }));
          }
        } else {
          if (stryMutAct_9fa48("40374")) {
            {}
          } else {
            stryCov_9fa48("40374");
            tags = await db.getSortedSetRevRangeWithScores(set, start, stop);
          }
        }
        const payload = await plugins.hooks.fire(stryMutAct_9fa48("40375") ? "" : (stryCov_9fa48("40375"), 'filter:tags.getAll'), stryMutAct_9fa48("40376") ? {} : (stryCov_9fa48("40376"), {
          tags: tags
        }));
        return await Topics.getTagData(payload.tags);
      }
    }
    Topics.getTagData = async function (tags) {
      if (stryMutAct_9fa48("40377")) {
        {}
      } else {
        stryCov_9fa48("40377");
        if (stryMutAct_9fa48("40380") ? false : stryMutAct_9fa48("40379") ? true : stryMutAct_9fa48("40378") ? tags.length : (stryCov_9fa48("40378", "40379", "40380"), !tags.length)) {
          if (stryMutAct_9fa48("40381")) {
            {}
          } else {
            stryCov_9fa48("40381");
            return stryMutAct_9fa48("40382") ? ["Stryker was here"] : (stryCov_9fa48("40382"), []);
          }
        }
        tags.forEach(tag => {
          if (stryMutAct_9fa48("40383")) {
            {}
          } else {
            stryCov_9fa48("40383");
            tag.valueEscaped = validator.escape(String(tag.value));
            tag.valueEncoded = encodeURIComponent(tag.valueEscaped);
            tag.class = tag.valueEscaped.replace(stryMutAct_9fa48("40384") ? /\S/g : (stryCov_9fa48("40384"), /\s/g), stryMutAct_9fa48("40385") ? "" : (stryCov_9fa48("40385"), '-'));
          }
        });
        return tags;
      }
    };
    Topics.getTopicTags = async function (tid) {
      if (stryMutAct_9fa48("40386")) {
        {}
      } else {
        stryCov_9fa48("40386");
        const data = await Topics.getTopicsTags(stryMutAct_9fa48("40387") ? [] : (stryCov_9fa48("40387"), [tid]));
        return stryMutAct_9fa48("40390") ? data || data[0] : stryMutAct_9fa48("40389") ? false : stryMutAct_9fa48("40388") ? true : (stryCov_9fa48("40388", "40389", "40390"), data && data[0]);
      }
    };
    Topics.getTopicsTags = async function (tids) {
      if (stryMutAct_9fa48("40391")) {
        {}
      } else {
        stryCov_9fa48("40391");
        const topicTagData = await Topics.getTopicsFields(tids, stryMutAct_9fa48("40392") ? [] : (stryCov_9fa48("40392"), [stryMutAct_9fa48("40393") ? "" : (stryCov_9fa48("40393"), 'tags')]));
        return tids.map(stryMutAct_9fa48("40394") ? () => undefined : (stryCov_9fa48("40394"), (tid, i) => topicTagData[i].tags.map(stryMutAct_9fa48("40395") ? () => undefined : (stryCov_9fa48("40395"), tagData => tagData.value))));
      }
    };
    Topics.getTopicTagsObjects = async function (tid) {
      if (stryMutAct_9fa48("40396")) {
        {}
      } else {
        stryCov_9fa48("40396");
        const data = await Topics.getTopicsTagsObjects(stryMutAct_9fa48("40397") ? [] : (stryCov_9fa48("40397"), [tid]));
        return (stryMutAct_9fa48("40400") ? Array.isArray(data) || data.length : stryMutAct_9fa48("40399") ? false : stryMutAct_9fa48("40398") ? true : (stryCov_9fa48("40398", "40399", "40400"), Array.isArray(data) && data.length)) ? data[0] : stryMutAct_9fa48("40401") ? ["Stryker was here"] : (stryCov_9fa48("40401"), []);
      }
    };
    Topics.getTopicsTagsObjects = async function (tids) {
      if (stryMutAct_9fa48("40402")) {
        {}
      } else {
        stryCov_9fa48("40402");
        const topicTags = await Topics.getTopicsTags(tids);
        const uniqueTopicTags = _.uniq(_.flatten(topicTags));
        const tags = uniqueTopicTags.map(stryMutAct_9fa48("40403") ? () => undefined : (stryCov_9fa48("40403"), tag => stryMutAct_9fa48("40404") ? {} : (stryCov_9fa48("40404"), {
          value: tag
        })));
        const tagData = await Topics.getTagData(tags);
        const tagDataMap = _.zipObject(uniqueTopicTags, tagData);
        topicTags.forEach((tags, index) => {
          if (stryMutAct_9fa48("40405")) {
            {}
          } else {
            stryCov_9fa48("40405");
            if (stryMutAct_9fa48("40407") ? false : stryMutAct_9fa48("40406") ? true : (stryCov_9fa48("40406", "40407"), Array.isArray(tags))) {
              if (stryMutAct_9fa48("40408")) {
                {}
              } else {
                stryCov_9fa48("40408");
                topicTags[index] = tags.map(stryMutAct_9fa48("40409") ? () => undefined : (stryCov_9fa48("40409"), tag => tagDataMap[tag]));
              }
            }
          }
        });
        return topicTags;
      }
    };
    Topics.addTags = async function (tags, tids) {
      if (stryMutAct_9fa48("40410")) {
        {}
      } else {
        stryCov_9fa48("40410");
        const topicData = await Topics.getTopicsFields(tids, stryMutAct_9fa48("40411") ? [] : (stryCov_9fa48("40411"), [stryMutAct_9fa48("40412") ? "" : (stryCov_9fa48("40412"), 'tid'), stryMutAct_9fa48("40413") ? "" : (stryCov_9fa48("40413"), 'cid'), stryMutAct_9fa48("40414") ? "" : (stryCov_9fa48("40414"), 'timestamp'), stryMutAct_9fa48("40415") ? "" : (stryCov_9fa48("40415"), 'tags')]));
        const bulkAdd = stryMutAct_9fa48("40416") ? ["Stryker was here"] : (stryCov_9fa48("40416"), []);
        const bulkSet = stryMutAct_9fa48("40417") ? ["Stryker was here"] : (stryCov_9fa48("40417"), []);
        topicData.forEach(t => {
          if (stryMutAct_9fa48("40418")) {
            {}
          } else {
            stryCov_9fa48("40418");
            const topicTags = t.tags.map(stryMutAct_9fa48("40419") ? () => undefined : (stryCov_9fa48("40419"), tagItem => tagItem.value));
            tags.forEach(tag => {
              if (stryMutAct_9fa48("40420")) {
                {}
              } else {
                stryCov_9fa48("40420");
                bulkAdd.push(stryMutAct_9fa48("40421") ? [] : (stryCov_9fa48("40421"), [stryMutAct_9fa48("40422") ? `` : (stryCov_9fa48("40422"), `tag:${tag}:topics`), t.timestamp, t.tid]));
                bulkAdd.push(stryMutAct_9fa48("40423") ? [] : (stryCov_9fa48("40423"), [stryMutAct_9fa48("40424") ? `` : (stryCov_9fa48("40424"), `cid:${t.cid}:tag:${tag}:topics`), t.timestamp, t.tid]));
                if (stryMutAct_9fa48("40427") ? false : stryMutAct_9fa48("40426") ? true : stryMutAct_9fa48("40425") ? topicTags.includes(tag) : (stryCov_9fa48("40425", "40426", "40427"), !topicTags.includes(tag))) {
                  if (stryMutAct_9fa48("40428")) {
                    {}
                  } else {
                    stryCov_9fa48("40428");
                    topicTags.push(tag);
                  }
                }
              }
            });
            bulkSet.push(stryMutAct_9fa48("40429") ? [] : (stryCov_9fa48("40429"), [stryMutAct_9fa48("40430") ? `` : (stryCov_9fa48("40430"), `topic:${t.tid}`), stryMutAct_9fa48("40431") ? {} : (stryCov_9fa48("40431"), {
              tags: topicTags.join(stryMutAct_9fa48("40432") ? "" : (stryCov_9fa48("40432"), ','))
            })]));
          }
        });
        await Promise.all(stryMutAct_9fa48("40433") ? [] : (stryCov_9fa48("40433"), [db.sortedSetAddBulk(bulkAdd), db.setObjectBulk(bulkSet)]));
        await Promise.all(tags.map(updateTagCount));
        await Topics.updateCategoryTagsCount(_.uniq(topicData.map(stryMutAct_9fa48("40434") ? () => undefined : (stryCov_9fa48("40434"), t => t.cid))), tags);
      }
    };
    Topics.removeTags = async function (tags, tids) {
      if (stryMutAct_9fa48("40435")) {
        {}
      } else {
        stryCov_9fa48("40435");
        const topicData = await Topics.getTopicsFields(tids, stryMutAct_9fa48("40436") ? [] : (stryCov_9fa48("40436"), [stryMutAct_9fa48("40437") ? "" : (stryCov_9fa48("40437"), 'tid'), stryMutAct_9fa48("40438") ? "" : (stryCov_9fa48("40438"), 'cid'), stryMutAct_9fa48("40439") ? "" : (stryCov_9fa48("40439"), 'tags')]));
        const bulkRemove = stryMutAct_9fa48("40440") ? ["Stryker was here"] : (stryCov_9fa48("40440"), []);
        const bulkSet = stryMutAct_9fa48("40441") ? ["Stryker was here"] : (stryCov_9fa48("40441"), []);
        topicData.forEach(t => {
          if (stryMutAct_9fa48("40442")) {
            {}
          } else {
            stryCov_9fa48("40442");
            const topicTags = t.tags.map(stryMutAct_9fa48("40443") ? () => undefined : (stryCov_9fa48("40443"), tagItem => tagItem.value));
            tags.forEach(tag => {
              if (stryMutAct_9fa48("40444")) {
                {}
              } else {
                stryCov_9fa48("40444");
                bulkRemove.push(stryMutAct_9fa48("40445") ? [] : (stryCov_9fa48("40445"), [stryMutAct_9fa48("40446") ? `` : (stryCov_9fa48("40446"), `tag:${tag}:topics`), t.tid]));
                bulkRemove.push(stryMutAct_9fa48("40447") ? [] : (stryCov_9fa48("40447"), [stryMutAct_9fa48("40448") ? `` : (stryCov_9fa48("40448"), `cid:${t.cid}:tag:${tag}:topics`), t.tid]));
                if (stryMutAct_9fa48("40450") ? false : stryMutAct_9fa48("40449") ? true : (stryCov_9fa48("40449", "40450"), topicTags.includes(tag))) {
                  if (stryMutAct_9fa48("40451")) {
                    {}
                  } else {
                    stryCov_9fa48("40451");
                    topicTags.splice(topicTags.indexOf(tag), 1);
                  }
                }
              }
            });
            bulkSet.push(stryMutAct_9fa48("40452") ? [] : (stryCov_9fa48("40452"), [stryMutAct_9fa48("40453") ? `` : (stryCov_9fa48("40453"), `topic:${t.tid}`), stryMutAct_9fa48("40454") ? {} : (stryCov_9fa48("40454"), {
              tags: topicTags.join(stryMutAct_9fa48("40455") ? "" : (stryCov_9fa48("40455"), ','))
            })]));
          }
        });
        await Promise.all(stryMutAct_9fa48("40456") ? [] : (stryCov_9fa48("40456"), [db.sortedSetRemoveBulk(bulkRemove), db.setObjectBulk(bulkSet)]));
        await Promise.all(tags.map(updateTagCount));
        await Topics.updateCategoryTagsCount(_.uniq(topicData.map(stryMutAct_9fa48("40457") ? () => undefined : (stryCov_9fa48("40457"), t => t.cid))), tags);
      }
    };
    Topics.updateTopicTags = async function (tid, tags) {
      if (stryMutAct_9fa48("40458")) {
        {}
      } else {
        stryCov_9fa48("40458");
        await Topics.deleteTopicTags(tid);
        const cid = await Topics.getTopicField(tid, stryMutAct_9fa48("40459") ? "" : (stryCov_9fa48("40459"), 'cid'));
        tags = await Topics.filterTags(tags, cid);
        await Topics.addTags(tags, stryMutAct_9fa48("40460") ? [] : (stryCov_9fa48("40460"), [tid]));
      }
    };
    Topics.deleteTopicTags = async function (tid) {
      if (stryMutAct_9fa48("40461")) {
        {}
      } else {
        stryCov_9fa48("40461");
        const topicData = await Topics.getTopicFields(tid, stryMutAct_9fa48("40462") ? [] : (stryCov_9fa48("40462"), [stryMutAct_9fa48("40463") ? "" : (stryCov_9fa48("40463"), 'cid'), stryMutAct_9fa48("40464") ? "" : (stryCov_9fa48("40464"), 'tags')]));
        const {
          cid
        } = topicData;
        const tags = topicData.tags.map(stryMutAct_9fa48("40465") ? () => undefined : (stryCov_9fa48("40465"), tagItem => tagItem.value));
        await db.deleteObjectField(stryMutAct_9fa48("40466") ? `` : (stryCov_9fa48("40466"), `topic:${tid}`), stryMutAct_9fa48("40467") ? "" : (stryCov_9fa48("40467"), 'tags'));
        const sets = tags.map(stryMutAct_9fa48("40468") ? () => undefined : (stryCov_9fa48("40468"), tag => stryMutAct_9fa48("40469") ? `` : (stryCov_9fa48("40469"), `tag:${tag}:topics`))).concat(tags.map(stryMutAct_9fa48("40470") ? () => undefined : (stryCov_9fa48("40470"), tag => stryMutAct_9fa48("40471") ? `` : (stryCov_9fa48("40471"), `cid:${cid}:tag:${tag}:topics`))));
        await db.sortedSetsRemove(sets, tid);
        await Topics.updateCategoryTagsCount(stryMutAct_9fa48("40472") ? [] : (stryCov_9fa48("40472"), [cid]), tags);
        await Promise.all(tags.map(updateTagCount));
      }
    };
    Topics.searchTags = async function (data) {
      if (stryMutAct_9fa48("40473")) {
        {}
      } else {
        stryCov_9fa48("40473");
        if (stryMutAct_9fa48("40476") ? !data && !data.query : stryMutAct_9fa48("40475") ? false : stryMutAct_9fa48("40474") ? true : (stryCov_9fa48("40474", "40475", "40476"), (stryMutAct_9fa48("40477") ? data : (stryCov_9fa48("40477"), !data)) || (stryMutAct_9fa48("40478") ? data.query : (stryCov_9fa48("40478"), !data.query)))) {
          if (stryMutAct_9fa48("40479")) {
            {}
          } else {
            stryCov_9fa48("40479");
            return stryMutAct_9fa48("40480") ? ["Stryker was here"] : (stryCov_9fa48("40480"), []);
          }
        }
        let result;
        if (stryMutAct_9fa48("40482") ? false : stryMutAct_9fa48("40481") ? true : (stryCov_9fa48("40481", "40482"), plugins.hooks.hasListeners(stryMutAct_9fa48("40483") ? "" : (stryCov_9fa48("40483"), 'filter:topics.searchTags')))) {
          if (stryMutAct_9fa48("40484")) {
            {}
          } else {
            stryCov_9fa48("40484");
            result = await plugins.hooks.fire(stryMutAct_9fa48("40485") ? "" : (stryCov_9fa48("40485"), 'filter:topics.searchTags'), stryMutAct_9fa48("40486") ? {} : (stryCov_9fa48("40486"), {
              data: data
            }));
          }
        } else {
          if (stryMutAct_9fa48("40487")) {
            {}
          } else {
            stryCov_9fa48("40487");
            result = await findMatches(data);
          }
        }
        result = await plugins.hooks.fire(stryMutAct_9fa48("40488") ? "" : (stryCov_9fa48("40488"), 'filter:tags.search'), stryMutAct_9fa48("40489") ? {} : (stryCov_9fa48("40489"), {
          data: data,
          matches: result.matches
        }));
        return result.matches;
      }
    };
    Topics.autocompleteTags = async function (data) {
      if (stryMutAct_9fa48("40490")) {
        {}
      } else {
        stryCov_9fa48("40490");
        if (stryMutAct_9fa48("40493") ? !data && !data.query : stryMutAct_9fa48("40492") ? false : stryMutAct_9fa48("40491") ? true : (stryCov_9fa48("40491", "40492", "40493"), (stryMutAct_9fa48("40494") ? data : (stryCov_9fa48("40494"), !data)) || (stryMutAct_9fa48("40495") ? data.query : (stryCov_9fa48("40495"), !data.query)))) {
          if (stryMutAct_9fa48("40496")) {
            {}
          } else {
            stryCov_9fa48("40496");
            return stryMutAct_9fa48("40497") ? ["Stryker was here"] : (stryCov_9fa48("40497"), []);
          }
        }
        let result;
        if (stryMutAct_9fa48("40499") ? false : stryMutAct_9fa48("40498") ? true : (stryCov_9fa48("40498", "40499"), plugins.hooks.hasListeners(stryMutAct_9fa48("40500") ? "" : (stryCov_9fa48("40500"), 'filter:topics.autocompleteTags')))) {
          if (stryMutAct_9fa48("40501")) {
            {}
          } else {
            stryCov_9fa48("40501");
            result = await plugins.hooks.fire(stryMutAct_9fa48("40502") ? "" : (stryCov_9fa48("40502"), 'filter:topics.autocompleteTags'), stryMutAct_9fa48("40503") ? {} : (stryCov_9fa48("40503"), {
              data: data
            }));
          }
        } else {
          if (stryMutAct_9fa48("40504")) {
            {}
          } else {
            stryCov_9fa48("40504");
            result = await findMatches(data);
          }
        }
        return result.matches;
      }
    };
    async function getAllTags() {
      if (stryMutAct_9fa48("40505")) {
        {}
      } else {
        stryCov_9fa48("40505");
        const cached = cache.get(stryMutAct_9fa48("40506") ? "" : (stryCov_9fa48("40506"), 'tags:topic:count'));
        if (stryMutAct_9fa48("40509") ? cached === undefined : stryMutAct_9fa48("40508") ? false : stryMutAct_9fa48("40507") ? true : (stryCov_9fa48("40507", "40508", "40509"), cached !== undefined)) {
          if (stryMutAct_9fa48("40510")) {
            {}
          } else {
            stryCov_9fa48("40510");
            return cached;
          }
        }
        const tags = await db.getSortedSetRevRangeWithScores(stryMutAct_9fa48("40511") ? "" : (stryCov_9fa48("40511"), 'tags:topic:count'), 0, stryMutAct_9fa48("40512") ? +1 : (stryCov_9fa48("40512"), -1));
        cache.set(stryMutAct_9fa48("40513") ? "" : (stryCov_9fa48("40513"), 'tags:topic:count'), tags);
        return tags;
      }
    }
    async function findMatches(data) {
      if (stryMutAct_9fa48("40514")) {
        {}
      } else {
        stryCov_9fa48("40514");
        let {
          query
        } = data;
        let tagWhitelist = stryMutAct_9fa48("40515") ? ["Stryker was here"] : (stryCov_9fa48("40515"), []);
        if (stryMutAct_9fa48("40517") ? false : stryMutAct_9fa48("40516") ? true : (stryCov_9fa48("40516", "40517"), parseInt(data.cid, 10))) {
          if (stryMutAct_9fa48("40518")) {
            {}
          } else {
            stryCov_9fa48("40518");
            tagWhitelist = await categories.getTagWhitelist(stryMutAct_9fa48("40519") ? [] : (stryCov_9fa48("40519"), [data.cid]));
          }
        }
        let tags = stryMutAct_9fa48("40520") ? ["Stryker was here"] : (stryCov_9fa48("40520"), []);
        if (stryMutAct_9fa48("40523") ? Array.isArray(tagWhitelist[0]) || tagWhitelist[0].length : stryMutAct_9fa48("40522") ? false : stryMutAct_9fa48("40521") ? true : (stryCov_9fa48("40521", "40522", "40523"), Array.isArray(tagWhitelist[0]) && tagWhitelist[0].length)) {
          if (stryMutAct_9fa48("40524")) {
            {}
          } else {
            stryCov_9fa48("40524");
            const scores = await db.sortedSetScores(stryMutAct_9fa48("40525") ? `` : (stryCov_9fa48("40525"), `cid:${data.cid}:tags`), tagWhitelist[0]);
            tags = tagWhitelist[0].map(stryMutAct_9fa48("40526") ? () => undefined : (stryCov_9fa48("40526"), (tag, index) => stryMutAct_9fa48("40527") ? {} : (stryCov_9fa48("40527"), {
              value: tag,
              score: scores[index]
            })));
          }
        } else if (stryMutAct_9fa48("40529") ? false : stryMutAct_9fa48("40528") ? true : (stryCov_9fa48("40528", "40529"), data.cids)) {
          if (stryMutAct_9fa48("40530")) {
            {}
          } else {
            stryCov_9fa48("40530");
            tags = await db.getSortedSetRevUnion(stryMutAct_9fa48("40531") ? {} : (stryCov_9fa48("40531"), {
              sets: data.cids.map(stryMutAct_9fa48("40532") ? () => undefined : (stryCov_9fa48("40532"), cid => stryMutAct_9fa48("40533") ? `` : (stryCov_9fa48("40533"), `cid:${cid}:tags`))),
              start: 0,
              stop: stryMutAct_9fa48("40534") ? +1 : (stryCov_9fa48("40534"), -1),
              withScores: stryMutAct_9fa48("40535") ? false : (stryCov_9fa48("40535"), true)
            }));
          }
        } else {
          if (stryMutAct_9fa48("40536")) {
            {}
          } else {
            stryCov_9fa48("40536");
            tags = await getAllTags();
          }
        }
        query = stryMutAct_9fa48("40537") ? query.toUpperCase() : (stryCov_9fa48("40537"), query.toLowerCase());
        const matches = stryMutAct_9fa48("40538") ? ["Stryker was here"] : (stryCov_9fa48("40538"), []);
        for (let i = 0; stryMutAct_9fa48("40541") ? i >= tags.length : stryMutAct_9fa48("40540") ? i <= tags.length : stryMutAct_9fa48("40539") ? false : (stryCov_9fa48("40539", "40540", "40541"), i < tags.length); stryMutAct_9fa48("40542") ? i -= 1 : (stryCov_9fa48("40542"), i += 1)) {
          if (stryMutAct_9fa48("40543")) {
            {}
          } else {
            stryCov_9fa48("40543");
            if (stryMutAct_9fa48("40546") ? tags[i].value || tags[i].value.toLowerCase().startsWith(query) : stryMutAct_9fa48("40545") ? false : stryMutAct_9fa48("40544") ? true : (stryCov_9fa48("40544", "40545", "40546"), tags[i].value && (stryMutAct_9fa48("40548") ? tags[i].value.toUpperCase().startsWith(query) : stryMutAct_9fa48("40547") ? tags[i].value.toLowerCase().endsWith(query) : (stryCov_9fa48("40547", "40548"), tags[i].value.toLowerCase().startsWith(query))))) {
              if (stryMutAct_9fa48("40549")) {
                {}
              } else {
                stryCov_9fa48("40549");
                matches.push(tags[i]);
                if (stryMutAct_9fa48("40553") ? matches.length <= 39 : stryMutAct_9fa48("40552") ? matches.length >= 39 : stryMutAct_9fa48("40551") ? false : stryMutAct_9fa48("40550") ? true : (stryCov_9fa48("40550", "40551", "40552", "40553"), matches.length > 39)) {
                  if (stryMutAct_9fa48("40554")) {
                    {}
                  } else {
                    stryCov_9fa48("40554");
                    break;
                  }
                }
              }
            }
          }
        }
        stryMutAct_9fa48("40555") ? matches : (stryCov_9fa48("40555"), matches.sort((a, b) => {
          if (stryMutAct_9fa48("40556")) {
            {}
          } else {
            stryCov_9fa48("40556");
            if (stryMutAct_9fa48("40560") ? a.value >= b.value : stryMutAct_9fa48("40559") ? a.value <= b.value : stryMutAct_9fa48("40558") ? false : stryMutAct_9fa48("40557") ? true : (stryCov_9fa48("40557", "40558", "40559", "40560"), a.value < b.value)) {
              if (stryMutAct_9fa48("40561")) {
                {}
              } else {
                stryCov_9fa48("40561");
                return stryMutAct_9fa48("40562") ? +1 : (stryCov_9fa48("40562"), -1);
              }
            } else if (stryMutAct_9fa48("40566") ? a.value <= b.value : stryMutAct_9fa48("40565") ? a.value >= b.value : stryMutAct_9fa48("40564") ? false : stryMutAct_9fa48("40563") ? true : (stryCov_9fa48("40563", "40564", "40565", "40566"), a.value > b.value)) {
              if (stryMutAct_9fa48("40567")) {
                {}
              } else {
                stryCov_9fa48("40567");
                return 1;
              }
            }
            return 0;
          }
        }));
        return stryMutAct_9fa48("40568") ? {} : (stryCov_9fa48("40568"), {
          matches: matches
        });
      }
    }
    Topics.searchAndLoadTags = async function (data) {
      if (stryMutAct_9fa48("40569")) {
        {}
      } else {
        stryCov_9fa48("40569");
        const searchResult = stryMutAct_9fa48("40570") ? {} : (stryCov_9fa48("40570"), {
          tags: stryMutAct_9fa48("40571") ? ["Stryker was here"] : (stryCov_9fa48("40571"), []),
          matchCount: 0,
          pageCount: 1
        });
        if (stryMutAct_9fa48("40574") ? (!data || !data.query) && !data.query.length : stryMutAct_9fa48("40573") ? false : stryMutAct_9fa48("40572") ? true : (stryCov_9fa48("40572", "40573", "40574"), (stryMutAct_9fa48("40576") ? !data && !data.query : stryMutAct_9fa48("40575") ? false : (stryCov_9fa48("40575", "40576"), (stryMutAct_9fa48("40577") ? data : (stryCov_9fa48("40577"), !data)) || (stryMutAct_9fa48("40578") ? data.query : (stryCov_9fa48("40578"), !data.query)))) || (stryMutAct_9fa48("40579") ? data.query.length : (stryCov_9fa48("40579"), !data.query.length)))) {
          if (stryMutAct_9fa48("40580")) {
            {}
          } else {
            stryCov_9fa48("40580");
            return searchResult;
          }
        }
        const tags = await Topics.searchTags(data);
        const tagData = await Topics.getTagData(tags.map(stryMutAct_9fa48("40581") ? () => undefined : (stryCov_9fa48("40581"), tag => stryMutAct_9fa48("40582") ? {} : (stryCov_9fa48("40582"), {
          value: tag.value
        }))));
        tagData.forEach((tag, index) => {
          if (stryMutAct_9fa48("40583")) {
            {}
          } else {
            stryCov_9fa48("40583");
            tag.score = tags[index].score;
          }
        });
        stryMutAct_9fa48("40584") ? tagData : (stryCov_9fa48("40584"), tagData.sort(stryMutAct_9fa48("40585") ? () => undefined : (stryCov_9fa48("40585"), (a, b) => stryMutAct_9fa48("40586") ? b.score + a.score : (stryCov_9fa48("40586"), b.score - a.score))));
        searchResult.tags = tagData;
        searchResult.matchCount = tagData.length;
        searchResult.pageCount = 1;
        return searchResult;
      }
    };
    Topics.getRelatedTopics = async function (topicData, uid) {
      if (stryMutAct_9fa48("40587")) {
        {}
      } else {
        stryCov_9fa48("40587");
        if (stryMutAct_9fa48("40589") ? false : stryMutAct_9fa48("40588") ? true : (stryCov_9fa48("40588", "40589"), plugins.hooks.hasListeners(stryMutAct_9fa48("40590") ? "" : (stryCov_9fa48("40590"), 'filter:topic.getRelatedTopics')))) {
          if (stryMutAct_9fa48("40591")) {
            {}
          } else {
            stryCov_9fa48("40591");
            const result = await plugins.hooks.fire(stryMutAct_9fa48("40592") ? "" : (stryCov_9fa48("40592"), 'filter:topic.getRelatedTopics'), stryMutAct_9fa48("40593") ? {} : (stryCov_9fa48("40593"), {
              topic: topicData,
              uid: uid,
              topics: stryMutAct_9fa48("40594") ? ["Stryker was here"] : (stryCov_9fa48("40594"), [])
            }));
            return result.topics;
          }
        }
        let maximumTopics = meta.config.maximumRelatedTopics;
        if (stryMutAct_9fa48("40597") ? (maximumTopics === 0 || !topicData.tags) && !topicData.tags.length : stryMutAct_9fa48("40596") ? false : stryMutAct_9fa48("40595") ? true : (stryCov_9fa48("40595", "40596", "40597"), (stryMutAct_9fa48("40599") ? maximumTopics === 0 && !topicData.tags : stryMutAct_9fa48("40598") ? false : (stryCov_9fa48("40598", "40599"), (stryMutAct_9fa48("40601") ? maximumTopics !== 0 : stryMutAct_9fa48("40600") ? false : (stryCov_9fa48("40600", "40601"), maximumTopics === 0)) || (stryMutAct_9fa48("40602") ? topicData.tags : (stryCov_9fa48("40602"), !topicData.tags)))) || (stryMutAct_9fa48("40603") ? topicData.tags.length : (stryCov_9fa48("40603"), !topicData.tags.length)))) {
          if (stryMutAct_9fa48("40604")) {
            {}
          } else {
            stryCov_9fa48("40604");
            return stryMutAct_9fa48("40605") ? ["Stryker was here"] : (stryCov_9fa48("40605"), []);
          }
        }
        maximumTopics = stryMutAct_9fa48("40608") ? maximumTopics && 5 : stryMutAct_9fa48("40607") ? false : stryMutAct_9fa48("40606") ? true : (stryCov_9fa48("40606", "40607", "40608"), maximumTopics || 5);
        let tids = await Promise.all(topicData.tags.map(stryMutAct_9fa48("40609") ? () => undefined : (stryCov_9fa48("40609"), tag => Topics.getTagTids(tag.value, 0, 5))));
        tids = stryMutAct_9fa48("40610") ? _.shuffle(_.uniq(_.flatten(tids))) : (stryCov_9fa48("40610"), _.shuffle(_.uniq(_.flatten(tids))).slice(0, maximumTopics));
        const topics = await Topics.getTopics(tids, uid);
        return stryMutAct_9fa48("40611") ? topics : (stryCov_9fa48("40611"), topics.filter(stryMutAct_9fa48("40612") ? () => undefined : (stryCov_9fa48("40612"), t => stryMutAct_9fa48("40615") ? t && !t.deleted || parseInt(t.uid, 10) !== parseInt(uid, 10) : stryMutAct_9fa48("40614") ? false : stryMutAct_9fa48("40613") ? true : (stryCov_9fa48("40613", "40614", "40615"), (stryMutAct_9fa48("40617") ? t || !t.deleted : stryMutAct_9fa48("40616") ? true : (stryCov_9fa48("40616", "40617"), t && (stryMutAct_9fa48("40618") ? t.deleted : (stryCov_9fa48("40618"), !t.deleted)))) && (stryMutAct_9fa48("40620") ? parseInt(t.uid, 10) === parseInt(uid, 10) : stryMutAct_9fa48("40619") ? true : (stryCov_9fa48("40619", "40620"), parseInt(t.uid, 10) !== parseInt(uid, 10)))))));
      }
    };
  }
};