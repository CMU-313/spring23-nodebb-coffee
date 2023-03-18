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
const validator = require('validator');
const db = require('../database');
const categories = require('../categories');
const utils = require('../utils');
const translator = require('../translator');
const plugins = require('../plugins');
const intFields = stryMutAct_9fa48("38128") ? [] : (stryCov_9fa48("38128"), [stryMutAct_9fa48("38129") ? "" : (stryCov_9fa48("38129"), 'tid'), stryMutAct_9fa48("38130") ? "" : (stryCov_9fa48("38130"), 'cid'), stryMutAct_9fa48("38131") ? "" : (stryCov_9fa48("38131"), 'uid'), stryMutAct_9fa48("38132") ? "" : (stryCov_9fa48("38132"), 'mainPid'), stryMutAct_9fa48("38133") ? "" : (stryCov_9fa48("38133"), 'postcount'), stryMutAct_9fa48("38134") ? "" : (stryCov_9fa48("38134"), 'viewcount'), stryMutAct_9fa48("38135") ? "" : (stryCov_9fa48("38135"), 'postercount'), stryMutAct_9fa48("38136") ? "" : (stryCov_9fa48("38136"), 'deleted'), stryMutAct_9fa48("38137") ? "" : (stryCov_9fa48("38137"), 'locked'), stryMutAct_9fa48("38138") ? "" : (stryCov_9fa48("38138"), 'pinned'), stryMutAct_9fa48("38139") ? "" : (stryCov_9fa48("38139"), 'pinExpiry'), stryMutAct_9fa48("38140") ? "" : (stryCov_9fa48("38140"), 'timestamp'), stryMutAct_9fa48("38141") ? "" : (stryCov_9fa48("38141"), 'upvotes'), stryMutAct_9fa48("38142") ? "" : (stryCov_9fa48("38142"), 'downvotes'), stryMutAct_9fa48("38143") ? "" : (stryCov_9fa48("38143"), 'lastposttime'), stryMutAct_9fa48("38144") ? "" : (stryCov_9fa48("38144"), 'deleterUid')]);
module.exports = function (Topics) {
  if (stryMutAct_9fa48("38145")) {
    {}
  } else {
    stryCov_9fa48("38145");
    Topics.getTopicsFields = async function (tids, fields) {
      if (stryMutAct_9fa48("38146")) {
        {}
      } else {
        stryCov_9fa48("38146");
        if (stryMutAct_9fa48("38149") ? !Array.isArray(tids) && !tids.length : stryMutAct_9fa48("38148") ? false : stryMutAct_9fa48("38147") ? true : (stryCov_9fa48("38147", "38148", "38149"), (stryMutAct_9fa48("38150") ? Array.isArray(tids) : (stryCov_9fa48("38150"), !Array.isArray(tids))) || (stryMutAct_9fa48("38151") ? tids.length : (stryCov_9fa48("38151"), !tids.length)))) {
          if (stryMutAct_9fa48("38152")) {
            {}
          } else {
            stryCov_9fa48("38152");
            return stryMutAct_9fa48("38153") ? ["Stryker was here"] : (stryCov_9fa48("38153"), []);
          }
        }

        // "scheduled" is derived from "timestamp"
        if (stryMutAct_9fa48("38156") ? fields.includes('scheduled') || !fields.includes('timestamp') : stryMutAct_9fa48("38155") ? false : stryMutAct_9fa48("38154") ? true : (stryCov_9fa48("38154", "38155", "38156"), fields.includes(stryMutAct_9fa48("38157") ? "" : (stryCov_9fa48("38157"), 'scheduled')) && (stryMutAct_9fa48("38158") ? fields.includes('timestamp') : (stryCov_9fa48("38158"), !fields.includes(stryMutAct_9fa48("38159") ? "" : (stryCov_9fa48("38159"), 'timestamp')))))) {
          if (stryMutAct_9fa48("38160")) {
            {}
          } else {
            stryCov_9fa48("38160");
            fields.push(stryMutAct_9fa48("38161") ? "" : (stryCov_9fa48("38161"), 'timestamp'));
          }
        }
        const keys = tids.map(stryMutAct_9fa48("38162") ? () => undefined : (stryCov_9fa48("38162"), tid => stryMutAct_9fa48("38163") ? `` : (stryCov_9fa48("38163"), `topic:${tid}`)));
        const topics = await db.getObjects(keys, fields);
        const result = await plugins.hooks.fire(stryMutAct_9fa48("38164") ? "" : (stryCov_9fa48("38164"), 'filter:topic.getFields'), stryMutAct_9fa48("38165") ? {} : (stryCov_9fa48("38165"), {
          tids: tids,
          topics: topics,
          fields: fields,
          keys: keys
        }));
        result.topics.forEach(stryMutAct_9fa48("38166") ? () => undefined : (stryCov_9fa48("38166"), topic => modifyTopic(topic, fields)));
        return result.topics;
      }
    };
    Topics.getTopicField = async function (tid, field) {
      if (stryMutAct_9fa48("38167")) {
        {}
      } else {
        stryCov_9fa48("38167");
        const topic = await Topics.getTopicFields(tid, stryMutAct_9fa48("38168") ? [] : (stryCov_9fa48("38168"), [field]));
        return topic ? topic[field] : null;
      }
    };
    Topics.getTopicFields = async function (tid, fields) {
      if (stryMutAct_9fa48("38169")) {
        {}
      } else {
        stryCov_9fa48("38169");
        const topics = await Topics.getTopicsFields(stryMutAct_9fa48("38170") ? [] : (stryCov_9fa48("38170"), [tid]), fields);
        return topics ? topics[0] : null;
      }
    };
    Topics.getTopicData = async function (tid) {
      if (stryMutAct_9fa48("38171")) {
        {}
      } else {
        stryCov_9fa48("38171");
        const topics = await Topics.getTopicsFields(stryMutAct_9fa48("38172") ? [] : (stryCov_9fa48("38172"), [tid]), stryMutAct_9fa48("38173") ? ["Stryker was here"] : (stryCov_9fa48("38173"), []));
        return (stryMutAct_9fa48("38176") ? topics || topics.length : stryMutAct_9fa48("38175") ? false : stryMutAct_9fa48("38174") ? true : (stryCov_9fa48("38174", "38175", "38176"), topics && topics.length)) ? topics[0] : null;
      }
    };
    Topics.getTopicsData = async function (tids) {
      if (stryMutAct_9fa48("38177")) {
        {}
      } else {
        stryCov_9fa48("38177");
        return await Topics.getTopicsFields(tids, stryMutAct_9fa48("38178") ? ["Stryker was here"] : (stryCov_9fa48("38178"), []));
      }
    };
    Topics.getCategoryData = async function (tid) {
      if (stryMutAct_9fa48("38179")) {
        {}
      } else {
        stryCov_9fa48("38179");
        const cid = await Topics.getTopicField(tid, stryMutAct_9fa48("38180") ? "" : (stryCov_9fa48("38180"), 'cid'));
        return await categories.getCategoryData(cid);
      }
    };
    Topics.setTopicField = async function (tid, field, value) {
      if (stryMutAct_9fa48("38181")) {
        {}
      } else {
        stryCov_9fa48("38181");
        await db.setObjectField(stryMutAct_9fa48("38182") ? `` : (stryCov_9fa48("38182"), `topic:${tid}`), field, value);
      }
    };
    Topics.setTopicFields = async function (tid, data) {
      if (stryMutAct_9fa48("38183")) {
        {}
      } else {
        stryCov_9fa48("38183");
        await db.setObject(stryMutAct_9fa48("38184") ? `` : (stryCov_9fa48("38184"), `topic:${tid}`), data);
      }
    };
    Topics.deleteTopicField = async function (tid, field) {
      if (stryMutAct_9fa48("38185")) {
        {}
      } else {
        stryCov_9fa48("38185");
        await db.deleteObjectField(stryMutAct_9fa48("38186") ? `` : (stryCov_9fa48("38186"), `topic:${tid}`), field);
      }
    };
    Topics.deleteTopicFields = async function (tid, fields) {
      if (stryMutAct_9fa48("38187")) {
        {}
      } else {
        stryCov_9fa48("38187");
        await db.deleteObjectFields(stryMutAct_9fa48("38188") ? `` : (stryCov_9fa48("38188"), `topic:${tid}`), fields);
      }
    };
  }
};
function escapeTitle(topicData) {
  if (stryMutAct_9fa48("38189")) {
    {}
  } else {
    stryCov_9fa48("38189");
    if (stryMutAct_9fa48("38191") ? false : stryMutAct_9fa48("38190") ? true : (stryCov_9fa48("38190", "38191"), topicData)) {
      if (stryMutAct_9fa48("38192")) {
        {}
      } else {
        stryCov_9fa48("38192");
        if (stryMutAct_9fa48("38194") ? false : stryMutAct_9fa48("38193") ? true : (stryCov_9fa48("38193", "38194"), topicData.title)) {
          if (stryMutAct_9fa48("38195")) {
            {}
          } else {
            stryCov_9fa48("38195");
            topicData.title = translator.escape(validator.escape(topicData.title));
          }
        }
        if (stryMutAct_9fa48("38197") ? false : stryMutAct_9fa48("38196") ? true : (stryCov_9fa48("38196", "38197"), topicData.titleRaw)) {
          if (stryMutAct_9fa48("38198")) {
            {}
          } else {
            stryCov_9fa48("38198");
            topicData.titleRaw = translator.escape(topicData.titleRaw);
          }
        }
      }
    }
  }
}
function modifyTopic(topic, fields) {
  if (stryMutAct_9fa48("38199")) {
    {}
  } else {
    stryCov_9fa48("38199");
    if (stryMutAct_9fa48("38202") ? false : stryMutAct_9fa48("38201") ? true : stryMutAct_9fa48("38200") ? topic : (stryCov_9fa48("38200", "38201", "38202"), !topic)) {
      if (stryMutAct_9fa48("38203")) {
        {}
      } else {
        stryCov_9fa48("38203");
        return;
      }
    }
    db.parseIntFields(topic, intFields, fields);
    if (stryMutAct_9fa48("38205") ? false : stryMutAct_9fa48("38204") ? true : (stryCov_9fa48("38204", "38205"), topic.hasOwnProperty(stryMutAct_9fa48("38206") ? "" : (stryCov_9fa48("38206"), 'title')))) {
      if (stryMutAct_9fa48("38207")) {
        {}
      } else {
        stryCov_9fa48("38207");
        topic.titleRaw = topic.title;
        topic.title = String(topic.title);
      }
    }
    escapeTitle(topic);
    if (stryMutAct_9fa48("38209") ? false : stryMutAct_9fa48("38208") ? true : (stryCov_9fa48("38208", "38209"), topic.hasOwnProperty(stryMutAct_9fa48("38210") ? "" : (stryCov_9fa48("38210"), 'timestamp')))) {
      if (stryMutAct_9fa48("38211")) {
        {}
      } else {
        stryCov_9fa48("38211");
        topic.timestampISO = utils.toISOString(topic.timestamp);
        if (stryMutAct_9fa48("38214") ? !fields.length && fields.includes('scheduled') : stryMutAct_9fa48("38213") ? false : stryMutAct_9fa48("38212") ? true : (stryCov_9fa48("38212", "38213", "38214"), (stryMutAct_9fa48("38215") ? fields.length : (stryCov_9fa48("38215"), !fields.length)) || fields.includes(stryMutAct_9fa48("38216") ? "" : (stryCov_9fa48("38216"), 'scheduled')))) {
          if (stryMutAct_9fa48("38217")) {
            {}
          } else {
            stryCov_9fa48("38217");
            topic.scheduled = stryMutAct_9fa48("38221") ? topic.timestamp <= Date.now() : stryMutAct_9fa48("38220") ? topic.timestamp >= Date.now() : stryMutAct_9fa48("38219") ? false : stryMutAct_9fa48("38218") ? true : (stryCov_9fa48("38218", "38219", "38220", "38221"), topic.timestamp > Date.now());
          }
        }
      }
    }
    if (stryMutAct_9fa48("38223") ? false : stryMutAct_9fa48("38222") ? true : (stryCov_9fa48("38222", "38223"), topic.hasOwnProperty(stryMutAct_9fa48("38224") ? "" : (stryCov_9fa48("38224"), 'lastposttime')))) {
      if (stryMutAct_9fa48("38225")) {
        {}
      } else {
        stryCov_9fa48("38225");
        topic.lastposttimeISO = utils.toISOString(topic.lastposttime);
      }
    }
    if (stryMutAct_9fa48("38227") ? false : stryMutAct_9fa48("38226") ? true : (stryCov_9fa48("38226", "38227"), topic.hasOwnProperty(stryMutAct_9fa48("38228") ? "" : (stryCov_9fa48("38228"), 'pinExpiry')))) {
      if (stryMutAct_9fa48("38229")) {
        {}
      } else {
        stryCov_9fa48("38229");
        topic.pinExpiryISO = utils.toISOString(topic.pinExpiry);
      }
    }
    if (stryMutAct_9fa48("38232") ? topic.hasOwnProperty('upvotes') || topic.hasOwnProperty('downvotes') : stryMutAct_9fa48("38231") ? false : stryMutAct_9fa48("38230") ? true : (stryCov_9fa48("38230", "38231", "38232"), topic.hasOwnProperty(stryMutAct_9fa48("38233") ? "" : (stryCov_9fa48("38233"), 'upvotes')) && topic.hasOwnProperty(stryMutAct_9fa48("38234") ? "" : (stryCov_9fa48("38234"), 'downvotes')))) {
      if (stryMutAct_9fa48("38235")) {
        {}
      } else {
        stryCov_9fa48("38235");
        topic.votes = stryMutAct_9fa48("38236") ? topic.upvotes + topic.downvotes : (stryCov_9fa48("38236"), topic.upvotes - topic.downvotes);
      }
    }
    if (stryMutAct_9fa48("38239") ? fields.includes('teaserPid') && !fields.length : stryMutAct_9fa48("38238") ? false : stryMutAct_9fa48("38237") ? true : (stryCov_9fa48("38237", "38238", "38239"), fields.includes(stryMutAct_9fa48("38240") ? "" : (stryCov_9fa48("38240"), 'teaserPid')) || (stryMutAct_9fa48("38241") ? fields.length : (stryCov_9fa48("38241"), !fields.length)))) {
      if (stryMutAct_9fa48("38242")) {
        {}
      } else {
        stryCov_9fa48("38242");
        topic.teaserPid = stryMutAct_9fa48("38245") ? topic.teaserPid && null : stryMutAct_9fa48("38244") ? false : stryMutAct_9fa48("38243") ? true : (stryCov_9fa48("38243", "38244", "38245"), topic.teaserPid || null);
      }
    }
    if (stryMutAct_9fa48("38248") ? fields.includes('tags') && !fields.length : stryMutAct_9fa48("38247") ? false : stryMutAct_9fa48("38246") ? true : (stryCov_9fa48("38246", "38247", "38248"), fields.includes(stryMutAct_9fa48("38249") ? "" : (stryCov_9fa48("38249"), 'tags')) || (stryMutAct_9fa48("38250") ? fields.length : (stryCov_9fa48("38250"), !fields.length)))) {
      if (stryMutAct_9fa48("38251")) {
        {}
      } else {
        stryCov_9fa48("38251");
        const tags = String(stryMutAct_9fa48("38254") ? topic.tags && '' : stryMutAct_9fa48("38253") ? false : stryMutAct_9fa48("38252") ? true : (stryCov_9fa48("38252", "38253", "38254"), topic.tags || (stryMutAct_9fa48("38255") ? "Stryker was here!" : (stryCov_9fa48("38255"), ''))));
        topic.tags = stryMutAct_9fa48("38256") ? tags.split(',').map(tag => {
          const escaped = validator.escape(String(tag));
          return {
            value: tag,
            valueEscaped: escaped,
            valueEncoded: encodeURIComponent(escaped),
            class: escaped.replace(/\s/g, '-')
          };
        }) : (stryCov_9fa48("38256"), tags.split(stryMutAct_9fa48("38257") ? "" : (stryCov_9fa48("38257"), ',')).filter(Boolean).map(tag => {
          if (stryMutAct_9fa48("38258")) {
            {}
          } else {
            stryCov_9fa48("38258");
            const escaped = validator.escape(String(tag));
            return stryMutAct_9fa48("38259") ? {} : (stryCov_9fa48("38259"), {
              value: tag,
              valueEscaped: escaped,
              valueEncoded: encodeURIComponent(escaped),
              class: escaped.replace(stryMutAct_9fa48("38260") ? /\S/g : (stryCov_9fa48("38260"), /\s/g), stryMutAct_9fa48("38261") ? "" : (stryCov_9fa48("38261"), '-'))
            });
          }
        }));
      }
    }
  }
}