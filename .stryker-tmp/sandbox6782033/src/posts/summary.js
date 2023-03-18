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
const _ = require('lodash');
const topics = require('../topics');
const user = require('../user');
const plugins = require('../plugins');
const categories = require('../categories');
const utils = require('../utils');
module.exports = function (Posts) {
  if (stryMutAct_9fa48("29859")) {
    {}
  } else {
    stryCov_9fa48("29859");
    Posts.getPostSummaryByPids = async function (pids, uid, options) {
      if (stryMutAct_9fa48("29860")) {
        {}
      } else {
        stryCov_9fa48("29860");
        if (stryMutAct_9fa48("29863") ? !Array.isArray(pids) && !pids.length : stryMutAct_9fa48("29862") ? false : stryMutAct_9fa48("29861") ? true : (stryCov_9fa48("29861", "29862", "29863"), (stryMutAct_9fa48("29864") ? Array.isArray(pids) : (stryCov_9fa48("29864"), !Array.isArray(pids))) || (stryMutAct_9fa48("29865") ? pids.length : (stryCov_9fa48("29865"), !pids.length)))) {
          if (stryMutAct_9fa48("29866")) {
            {}
          } else {
            stryCov_9fa48("29866");
            return stryMutAct_9fa48("29867") ? ["Stryker was here"] : (stryCov_9fa48("29867"), []);
          }
        }
        options.stripTags = options.hasOwnProperty(stryMutAct_9fa48("29868") ? "" : (stryCov_9fa48("29868"), 'stripTags')) ? options.stripTags : stryMutAct_9fa48("29869") ? true : (stryCov_9fa48("29869"), false);
        options.parse = options.hasOwnProperty(stryMutAct_9fa48("29870") ? "" : (stryCov_9fa48("29870"), 'parse')) ? options.parse : stryMutAct_9fa48("29871") ? false : (stryCov_9fa48("29871"), true);
        options.extraFields = options.hasOwnProperty(stryMutAct_9fa48("29872") ? "" : (stryCov_9fa48("29872"), 'extraFields')) ? options.extraFields : stryMutAct_9fa48("29873") ? ["Stryker was here"] : (stryCov_9fa48("29873"), []);
        const fields = (stryMutAct_9fa48("29874") ? [] : (stryCov_9fa48("29874"), [stryMutAct_9fa48("29875") ? "" : (stryCov_9fa48("29875"), 'pid'), stryMutAct_9fa48("29876") ? "" : (stryCov_9fa48("29876"), 'tid'), stryMutAct_9fa48("29877") ? "" : (stryCov_9fa48("29877"), 'content'), stryMutAct_9fa48("29878") ? "" : (stryCov_9fa48("29878"), 'uid'), stryMutAct_9fa48("29879") ? "" : (stryCov_9fa48("29879"), 'timestamp'), stryMutAct_9fa48("29880") ? "" : (stryCov_9fa48("29880"), 'deleted'), stryMutAct_9fa48("29881") ? "" : (stryCov_9fa48("29881"), 'upvotes'), stryMutAct_9fa48("29882") ? "" : (stryCov_9fa48("29882"), 'downvotes'), stryMutAct_9fa48("29883") ? "" : (stryCov_9fa48("29883"), 'replies'), stryMutAct_9fa48("29884") ? "" : (stryCov_9fa48("29884"), 'handle')])).concat(options.extraFields);
        let posts = await Posts.getPostsFields(pids, fields);
        posts = stryMutAct_9fa48("29885") ? posts : (stryCov_9fa48("29885"), posts.filter(Boolean));
        posts = await (stryMutAct_9fa48("29886") ? user.blocks : (stryCov_9fa48("29886"), user.blocks.filter(uid, posts)));
        const uids = _.uniq(posts.map(stryMutAct_9fa48("29887") ? () => undefined : (stryCov_9fa48("29887"), p => stryMutAct_9fa48("29890") ? p || p.uid : stryMutAct_9fa48("29889") ? false : stryMutAct_9fa48("29888") ? true : (stryCov_9fa48("29888", "29889", "29890"), p && p.uid))));
        const tids = _.uniq(posts.map(stryMutAct_9fa48("29891") ? () => undefined : (stryCov_9fa48("29891"), p => stryMutAct_9fa48("29894") ? p || p.tid : stryMutAct_9fa48("29893") ? false : stryMutAct_9fa48("29892") ? true : (stryCov_9fa48("29892", "29893", "29894"), p && p.tid))));
        const [users, topicsAndCategories] = await Promise.all(stryMutAct_9fa48("29895") ? [] : (stryCov_9fa48("29895"), [user.getUsersFields(uids, stryMutAct_9fa48("29896") ? [] : (stryCov_9fa48("29896"), [stryMutAct_9fa48("29897") ? "" : (stryCov_9fa48("29897"), 'uid'), stryMutAct_9fa48("29898") ? "" : (stryCov_9fa48("29898"), 'username'), stryMutAct_9fa48("29899") ? "" : (stryCov_9fa48("29899"), 'userslug'), stryMutAct_9fa48("29900") ? "" : (stryCov_9fa48("29900"), 'picture'), stryMutAct_9fa48("29901") ? "" : (stryCov_9fa48("29901"), 'status')])), getTopicAndCategories(tids)]));
        const uidToUser = toObject(stryMutAct_9fa48("29902") ? "" : (stryCov_9fa48("29902"), 'uid'), users);
        const tidToTopic = toObject(stryMutAct_9fa48("29903") ? "" : (stryCov_9fa48("29903"), 'tid'), topicsAndCategories.topics);
        const cidToCategory = toObject(stryMutAct_9fa48("29904") ? "" : (stryCov_9fa48("29904"), 'cid'), topicsAndCategories.categories);
        posts.forEach(post => {
          if (stryMutAct_9fa48("29905")) {
            {}
          } else {
            stryCov_9fa48("29905");
            // If the post author isn't represented in the retrieved users' data,
            // then it means they were deleted, assume guest.
            if (stryMutAct_9fa48("29908") ? false : stryMutAct_9fa48("29907") ? true : stryMutAct_9fa48("29906") ? uidToUser.hasOwnProperty(post.uid) : (stryCov_9fa48("29906", "29907", "29908"), !uidToUser.hasOwnProperty(post.uid))) {
              if (stryMutAct_9fa48("29909")) {
                {}
              } else {
                stryCov_9fa48("29909");
                post.uid = 0;
              }
            }
            post.user = uidToUser[post.uid];
            Posts.overrideGuestHandle(post, post.handle);
            post.handle = undefined;
            post.topic = tidToTopic[post.tid];
            post.category = stryMutAct_9fa48("29912") ? post.topic || cidToCategory[post.topic.cid] : stryMutAct_9fa48("29911") ? false : stryMutAct_9fa48("29910") ? true : (stryCov_9fa48("29910", "29911", "29912"), post.topic && cidToCategory[post.topic.cid]);
            post.isMainPost = stryMutAct_9fa48("29915") ? post.topic || post.pid === post.topic.mainPid : stryMutAct_9fa48("29914") ? false : stryMutAct_9fa48("29913") ? true : (stryCov_9fa48("29913", "29914", "29915"), post.topic && (stryMutAct_9fa48("29917") ? post.pid !== post.topic.mainPid : stryMutAct_9fa48("29916") ? true : (stryCov_9fa48("29916", "29917"), post.pid === post.topic.mainPid)));
            post.deleted = stryMutAct_9fa48("29920") ? post.deleted !== 1 : stryMutAct_9fa48("29919") ? false : stryMutAct_9fa48("29918") ? true : (stryCov_9fa48("29918", "29919", "29920"), post.deleted === 1);
            post.timestampISO = utils.toISOString(post.timestamp);
          }
        });
        posts = stryMutAct_9fa48("29921") ? posts : (stryCov_9fa48("29921"), posts.filter(stryMutAct_9fa48("29922") ? () => undefined : (stryCov_9fa48("29922"), post => tidToTopic[post.tid])));
        posts = await parsePosts(posts, options);
        const result = await plugins.hooks.fire(stryMutAct_9fa48("29923") ? "" : (stryCov_9fa48("29923"), 'filter:post.getPostSummaryByPids'), stryMutAct_9fa48("29924") ? {} : (stryCov_9fa48("29924"), {
          posts: posts,
          uid: uid
        }));
        return result.posts;
      }
    };
    async function parsePosts(posts, options) {
      if (stryMutAct_9fa48("29925")) {
        {}
      } else {
        stryCov_9fa48("29925");
        return await Promise.all(posts.map(async post => {
          if (stryMutAct_9fa48("29926")) {
            {}
          } else {
            stryCov_9fa48("29926");
            if (stryMutAct_9fa48("29929") ? !post.content && !options.parse : stryMutAct_9fa48("29928") ? false : stryMutAct_9fa48("29927") ? true : (stryCov_9fa48("29927", "29928", "29929"), (stryMutAct_9fa48("29930") ? post.content : (stryCov_9fa48("29930"), !post.content)) || (stryMutAct_9fa48("29931") ? options.parse : (stryCov_9fa48("29931"), !options.parse)))) {
              if (stryMutAct_9fa48("29932")) {
                {}
              } else {
                stryCov_9fa48("29932");
                post.content = post.content ? validator.escape(String(post.content)) : post.content;
                return post;
              }
            }
            post = await Posts.parsePost(post);
            if (stryMutAct_9fa48("29934") ? false : stryMutAct_9fa48("29933") ? true : (stryCov_9fa48("29933", "29934"), options.stripTags)) {
              if (stryMutAct_9fa48("29935")) {
                {}
              } else {
                stryCov_9fa48("29935");
                post.content = stripTags(post.content);
              }
            }
            return post;
          }
        }));
      }
    }
    async function getTopicAndCategories(tids) {
      if (stryMutAct_9fa48("29936")) {
        {}
      } else {
        stryCov_9fa48("29936");
        const topicsData = await topics.getTopicsFields(tids, stryMutAct_9fa48("29937") ? [] : (stryCov_9fa48("29937"), [stryMutAct_9fa48("29938") ? "" : (stryCov_9fa48("29938"), 'uid'), stryMutAct_9fa48("29939") ? "" : (stryCov_9fa48("29939"), 'tid'), stryMutAct_9fa48("29940") ? "" : (stryCov_9fa48("29940"), 'title'), stryMutAct_9fa48("29941") ? "" : (stryCov_9fa48("29941"), 'cid'), stryMutAct_9fa48("29942") ? "" : (stryCov_9fa48("29942"), 'tags'), stryMutAct_9fa48("29943") ? "" : (stryCov_9fa48("29943"), 'slug'), stryMutAct_9fa48("29944") ? "" : (stryCov_9fa48("29944"), 'deleted'), stryMutAct_9fa48("29945") ? "" : (stryCov_9fa48("29945"), 'scheduled'), stryMutAct_9fa48("29946") ? "" : (stryCov_9fa48("29946"), 'postcount'), stryMutAct_9fa48("29947") ? "" : (stryCov_9fa48("29947"), 'mainPid'), stryMutAct_9fa48("29948") ? "" : (stryCov_9fa48("29948"), 'teaserPid')]));
        const cids = _.uniq(topicsData.map(stryMutAct_9fa48("29949") ? () => undefined : (stryCov_9fa48("29949"), topic => stryMutAct_9fa48("29952") ? topic || topic.cid : stryMutAct_9fa48("29951") ? false : stryMutAct_9fa48("29950") ? true : (stryCov_9fa48("29950", "29951", "29952"), topic && topic.cid))));
        const categoriesData = await categories.getCategoriesFields(cids, stryMutAct_9fa48("29953") ? [] : (stryCov_9fa48("29953"), [stryMutAct_9fa48("29954") ? "" : (stryCov_9fa48("29954"), 'cid'), stryMutAct_9fa48("29955") ? "" : (stryCov_9fa48("29955"), 'name'), stryMutAct_9fa48("29956") ? "" : (stryCov_9fa48("29956"), 'icon'), stryMutAct_9fa48("29957") ? "" : (stryCov_9fa48("29957"), 'slug'), stryMutAct_9fa48("29958") ? "" : (stryCov_9fa48("29958"), 'parentCid'), stryMutAct_9fa48("29959") ? "" : (stryCov_9fa48("29959"), 'bgColor'), stryMutAct_9fa48("29960") ? "" : (stryCov_9fa48("29960"), 'color'), stryMutAct_9fa48("29961") ? "" : (stryCov_9fa48("29961"), 'backgroundImage'), stryMutAct_9fa48("29962") ? "" : (stryCov_9fa48("29962"), 'imageClass')]));
        return stryMutAct_9fa48("29963") ? {} : (stryCov_9fa48("29963"), {
          topics: topicsData,
          categories: categoriesData
        });
      }
    }
    function toObject(key, data) {
      if (stryMutAct_9fa48("29964")) {
        {}
      } else {
        stryCov_9fa48("29964");
        const obj = {};
        for (let i = 0; stryMutAct_9fa48("29967") ? i >= data.length : stryMutAct_9fa48("29966") ? i <= data.length : stryMutAct_9fa48("29965") ? false : (stryCov_9fa48("29965", "29966", "29967"), i < data.length); stryMutAct_9fa48("29968") ? i -= 1 : (stryCov_9fa48("29968"), i += 1)) {
          if (stryMutAct_9fa48("29969")) {
            {}
          } else {
            stryCov_9fa48("29969");
            obj[data[i][key]] = data[i];
          }
        }
        return obj;
      }
    }
    function stripTags(content) {
      if (stryMutAct_9fa48("29970")) {
        {}
      } else {
        stryCov_9fa48("29970");
        if (stryMutAct_9fa48("29972") ? false : stryMutAct_9fa48("29971") ? true : (stryCov_9fa48("29971", "29972"), content)) {
          if (stryMutAct_9fa48("29973")) {
            {}
          } else {
            stryCov_9fa48("29973");
            return utils.stripHTMLTags(content, utils.stripTags);
          }
        }
        return content;
      }
    }
  }
};