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
const rss = require('rss');
const nconf = require('nconf');
const validator = require('validator');
const posts = require('../posts');
const topics = require('../topics');
const user = require('../user');
const categories = require('../categories');
const meta = require('../meta');
const helpers = require('../controllers/helpers');
const privileges = require('../privileges');
const db = require('../database');
const utils = require('../utils');
const controllers404 = require('../controllers/404');
const terms = stryMutAct_9fa48("32810") ? {} : (stryCov_9fa48("32810"), {
  daily: stryMutAct_9fa48("32811") ? "" : (stryCov_9fa48("32811"), 'day'),
  weekly: stryMutAct_9fa48("32812") ? "" : (stryCov_9fa48("32812"), 'week'),
  monthly: stryMutAct_9fa48("32813") ? "" : (stryCov_9fa48("32813"), 'month'),
  alltime: stryMutAct_9fa48("32814") ? "" : (stryCov_9fa48("32814"), 'alltime')
});
module.exports = function (app, middleware) {
  if (stryMutAct_9fa48("32815")) {
    {}
  } else {
    stryCov_9fa48("32815");
    app.get(stryMutAct_9fa48("32816") ? "" : (stryCov_9fa48("32816"), '/topic/:topic_id.rss'), middleware.maintenanceMode, generateForTopic);
    app.get(stryMutAct_9fa48("32817") ? "" : (stryCov_9fa48("32817"), '/category/:category_id.rss'), middleware.maintenanceMode, generateForCategory);
    app.get(stryMutAct_9fa48("32818") ? "" : (stryCov_9fa48("32818"), '/topics.rss'), middleware.maintenanceMode, generateForTopics);
    app.get(stryMutAct_9fa48("32819") ? "" : (stryCov_9fa48("32819"), '/recent.rss'), middleware.maintenanceMode, generateForRecent);
    app.get(stryMutAct_9fa48("32820") ? "" : (stryCov_9fa48("32820"), '/top.rss'), middleware.maintenanceMode, generateForTop);
    app.get(stryMutAct_9fa48("32821") ? "" : (stryCov_9fa48("32821"), '/top/:term.rss'), middleware.maintenanceMode, generateForTop);
    app.get(stryMutAct_9fa48("32822") ? "" : (stryCov_9fa48("32822"), '/popular.rss'), middleware.maintenanceMode, generateForPopular);
    app.get(stryMutAct_9fa48("32823") ? "" : (stryCov_9fa48("32823"), '/popular/:term.rss'), middleware.maintenanceMode, generateForPopular);
    app.get(stryMutAct_9fa48("32824") ? "" : (stryCov_9fa48("32824"), '/recentposts.rss'), middleware.maintenanceMode, generateForRecentPosts);
    app.get(stryMutAct_9fa48("32825") ? "" : (stryCov_9fa48("32825"), '/category/:category_id/recentposts.rss'), middleware.maintenanceMode, generateForCategoryRecentPosts);
    app.get(stryMutAct_9fa48("32826") ? "" : (stryCov_9fa48("32826"), '/user/:userslug/topics.rss'), middleware.maintenanceMode, generateForUserTopics);
    app.get(stryMutAct_9fa48("32827") ? "" : (stryCov_9fa48("32827"), '/tags/:tag.rss'), middleware.maintenanceMode, generateForTag);
  }
};
async function validateTokenIfRequiresLogin(requiresLogin, cid, req, res) {
  if (stryMutAct_9fa48("32828")) {
    {}
  } else {
    stryCov_9fa48("32828");
    const uid = stryMutAct_9fa48("32831") ? parseInt(req.query.uid, 10) && 0 : stryMutAct_9fa48("32830") ? false : stryMutAct_9fa48("32829") ? true : (stryCov_9fa48("32829", "32830", "32831"), parseInt(req.query.uid, 10) || 0);
    const {
      token
    } = req.query;
    if (stryMutAct_9fa48("32834") ? false : stryMutAct_9fa48("32833") ? true : stryMutAct_9fa48("32832") ? requiresLogin : (stryCov_9fa48("32832", "32833", "32834"), !requiresLogin)) {
      if (stryMutAct_9fa48("32835")) {
        {}
      } else {
        stryCov_9fa48("32835");
        return stryMutAct_9fa48("32836") ? false : (stryCov_9fa48("32836"), true);
      }
    }
    if (stryMutAct_9fa48("32839") ? uid <= 0 && !token : stryMutAct_9fa48("32838") ? false : stryMutAct_9fa48("32837") ? true : (stryCov_9fa48("32837", "32838", "32839"), (stryMutAct_9fa48("32842") ? uid > 0 : stryMutAct_9fa48("32841") ? uid < 0 : stryMutAct_9fa48("32840") ? false : (stryCov_9fa48("32840", "32841", "32842"), uid <= 0)) || (stryMutAct_9fa48("32843") ? token : (stryCov_9fa48("32843"), !token)))) {
      if (stryMutAct_9fa48("32844")) {
        {}
      } else {
        stryCov_9fa48("32844");
        return helpers.notAllowed(req, res);
      }
    }
    const userToken = await db.getObjectField(stryMutAct_9fa48("32845") ? `` : (stryCov_9fa48("32845"), `user:${uid}`), stryMutAct_9fa48("32846") ? "" : (stryCov_9fa48("32846"), 'rss_token'));
    if (stryMutAct_9fa48("32849") ? userToken === token : stryMutAct_9fa48("32848") ? false : stryMutAct_9fa48("32847") ? true : (stryCov_9fa48("32847", "32848", "32849"), userToken !== token)) {
      if (stryMutAct_9fa48("32850")) {
        {}
      } else {
        stryCov_9fa48("32850");
        await user.auth.logAttempt(uid, req.ip);
        return helpers.notAllowed(req, res);
      }
    }
    const userPrivileges = await privileges.categories.get(cid, uid);
    if (stryMutAct_9fa48("32853") ? false : stryMutAct_9fa48("32852") ? true : stryMutAct_9fa48("32851") ? userPrivileges.read : (stryCov_9fa48("32851", "32852", "32853"), !userPrivileges.read)) {
      if (stryMutAct_9fa48("32854")) {
        {}
      } else {
        stryCov_9fa48("32854");
        return helpers.notAllowed(req, res);
      }
    }
    return stryMutAct_9fa48("32855") ? false : (stryCov_9fa48("32855"), true);
  }
}
async function generateForTopic(req, res, next) {
  if (stryMutAct_9fa48("32856")) {
    {}
  } else {
    stryCov_9fa48("32856");
    if (stryMutAct_9fa48("32858") ? false : stryMutAct_9fa48("32857") ? true : (stryCov_9fa48("32857", "32858"), meta.config[stryMutAct_9fa48("32859") ? "" : (stryCov_9fa48("32859"), 'feeds:disableRSS')])) {
      if (stryMutAct_9fa48("32860")) {
        {}
      } else {
        stryCov_9fa48("32860");
        return next();
      }
    }
    const tid = req.params.topic_id;
    const [userPrivileges, topic] = await Promise.all(stryMutAct_9fa48("32861") ? [] : (stryCov_9fa48("32861"), [privileges.topics.get(tid, req.uid), topics.getTopicData(tid)]));
    if (stryMutAct_9fa48("32864") ? false : stryMutAct_9fa48("32863") ? true : stryMutAct_9fa48("32862") ? privileges.topics.canViewDeletedScheduled(topic, userPrivileges) : (stryCov_9fa48("32862", "32863", "32864"), !privileges.topics.canViewDeletedScheduled(topic, userPrivileges))) {
      if (stryMutAct_9fa48("32865")) {
        {}
      } else {
        stryCov_9fa48("32865");
        return next();
      }
    }
    if (stryMutAct_9fa48("32867") ? false : stryMutAct_9fa48("32866") ? true : (stryCov_9fa48("32866", "32867"), await validateTokenIfRequiresLogin(stryMutAct_9fa48("32868") ? userPrivileges['topics:read'] : (stryCov_9fa48("32868"), !userPrivileges[stryMutAct_9fa48("32869") ? "" : (stryCov_9fa48("32869"), 'topics:read')]), topic.cid, req, res))) {
      if (stryMutAct_9fa48("32870")) {
        {}
      } else {
        stryCov_9fa48("32870");
        const topicData = await topics.getTopicWithPosts(topic, stryMutAct_9fa48("32871") ? `` : (stryCov_9fa48("32871"), `tid:${tid}:posts`), stryMutAct_9fa48("32874") ? (req.uid || req.query.uid) && 0 : stryMutAct_9fa48("32873") ? false : stryMutAct_9fa48("32872") ? true : (stryCov_9fa48("32872", "32873", "32874"), (stryMutAct_9fa48("32876") ? req.uid && req.query.uid : stryMutAct_9fa48("32875") ? false : (stryCov_9fa48("32875", "32876"), req.uid || req.query.uid)) || 0), 0, 24, stryMutAct_9fa48("32877") ? false : (stryCov_9fa48("32877"), true));
        topics.modifyPostsByPrivilege(topicData, userPrivileges);
        const feed = new rss(stryMutAct_9fa48("32878") ? {} : (stryCov_9fa48("32878"), {
          title: utils.stripHTMLTags(topicData.title, utils.tags),
          description: topicData.posts.length ? topicData.posts[0].content : stryMutAct_9fa48("32879") ? "Stryker was here!" : (stryCov_9fa48("32879"), ''),
          feed_url: stryMutAct_9fa48("32880") ? `` : (stryCov_9fa48("32880"), `${nconf.get(stryMutAct_9fa48("32881") ? "" : (stryCov_9fa48("32881"), 'url'))}/topic/${tid}.rss`),
          site_url: stryMutAct_9fa48("32882") ? `` : (stryCov_9fa48("32882"), `${nconf.get(stryMutAct_9fa48("32883") ? "" : (stryCov_9fa48("32883"), 'url'))}/topic/${topicData.slug}`),
          image_url: topicData.posts.length ? topicData.posts[0].picture : stryMutAct_9fa48("32884") ? "Stryker was here!" : (stryCov_9fa48("32884"), ''),
          author: topicData.posts.length ? topicData.posts[0].username : stryMutAct_9fa48("32885") ? "Stryker was here!" : (stryCov_9fa48("32885"), ''),
          ttl: 60
        }));
        if (stryMutAct_9fa48("32889") ? topicData.posts.length <= 0 : stryMutAct_9fa48("32888") ? topicData.posts.length >= 0 : stryMutAct_9fa48("32887") ? false : stryMutAct_9fa48("32886") ? true : (stryCov_9fa48("32886", "32887", "32888", "32889"), topicData.posts.length > 0)) {
          if (stryMutAct_9fa48("32890")) {
            {}
          } else {
            stryCov_9fa48("32890");
            feed.pubDate = new Date(parseInt(topicData.posts[0].timestamp, 10)).toUTCString();
          }
        }
        const replies = stryMutAct_9fa48("32891") ? topicData.posts : (stryCov_9fa48("32891"), topicData.posts.slice(1));
        replies.forEach(postData => {
          if (stryMutAct_9fa48("32892")) {
            {}
          } else {
            stryCov_9fa48("32892");
            if (stryMutAct_9fa48("32895") ? false : stryMutAct_9fa48("32894") ? true : stryMutAct_9fa48("32893") ? postData.deleted : (stryCov_9fa48("32893", "32894", "32895"), !postData.deleted)) {
              if (stryMutAct_9fa48("32896")) {
                {}
              } else {
                stryCov_9fa48("32896");
                const dateStamp = new Date(parseInt((stryMutAct_9fa48("32899") ? parseInt(postData.edited, 10) !== 0 : stryMutAct_9fa48("32898") ? false : stryMutAct_9fa48("32897") ? true : (stryCov_9fa48("32897", "32898", "32899"), parseInt(postData.edited, 10) === 0)) ? postData.timestamp : postData.edited, 10)).toUTCString();
                feed.item(stryMutAct_9fa48("32900") ? {} : (stryCov_9fa48("32900"), {
                  title: stryMutAct_9fa48("32901") ? `` : (stryCov_9fa48("32901"), `Reply to ${utils.stripHTMLTags(topicData.title, utils.tags)} on ${dateStamp}`),
                  description: postData.content,
                  url: stryMutAct_9fa48("32902") ? `` : (stryCov_9fa48("32902"), `${nconf.get(stryMutAct_9fa48("32903") ? "" : (stryCov_9fa48("32903"), 'url'))}/post/${postData.pid}`),
                  author: postData.user ? postData.user.username : stryMutAct_9fa48("32904") ? "Stryker was here!" : (stryCov_9fa48("32904"), ''),
                  date: dateStamp
                }));
              }
            }
          }
        });
        sendFeed(feed, res);
      }
    }
  }
}
async function generateForCategory(req, res, next) {
  if (stryMutAct_9fa48("32905")) {
    {}
  } else {
    stryCov_9fa48("32905");
    const cid = req.params.category_id;
    if (stryMutAct_9fa48("32908") ? meta.config['feeds:disableRSS'] && !parseInt(cid, 10) : stryMutAct_9fa48("32907") ? false : stryMutAct_9fa48("32906") ? true : (stryCov_9fa48("32906", "32907", "32908"), meta.config[stryMutAct_9fa48("32909") ? "" : (stryCov_9fa48("32909"), 'feeds:disableRSS')] || (stryMutAct_9fa48("32910") ? parseInt(cid, 10) : (stryCov_9fa48("32910"), !parseInt(cid, 10))))) {
      if (stryMutAct_9fa48("32911")) {
        {}
      } else {
        stryCov_9fa48("32911");
        return next();
      }
    }
    const uid = stryMutAct_9fa48("32914") ? (req.uid || req.query.uid) && 0 : stryMutAct_9fa48("32913") ? false : stryMutAct_9fa48("32912") ? true : (stryCov_9fa48("32912", "32913", "32914"), (stryMutAct_9fa48("32916") ? req.uid && req.query.uid : stryMutAct_9fa48("32915") ? false : (stryCov_9fa48("32915", "32916"), req.uid || req.query.uid)) || 0);
    const [userPrivileges, category, tids] = await Promise.all(stryMutAct_9fa48("32917") ? [] : (stryCov_9fa48("32917"), [privileges.categories.get(cid, req.uid), categories.getCategoryData(cid), db.getSortedSetRevIntersect(stryMutAct_9fa48("32918") ? {} : (stryCov_9fa48("32918"), {
      sets: stryMutAct_9fa48("32919") ? [] : (stryCov_9fa48("32919"), [stryMutAct_9fa48("32920") ? "" : (stryCov_9fa48("32920"), 'topics:tid'), stryMutAct_9fa48("32921") ? `` : (stryCov_9fa48("32921"), `cid:${cid}:tids:lastposttime`)]),
      start: 0,
      stop: 25,
      weights: stryMutAct_9fa48("32922") ? [] : (stryCov_9fa48("32922"), [1, 0])
    }))]));
    if (stryMutAct_9fa48("32925") ? !category && !category.name : stryMutAct_9fa48("32924") ? false : stryMutAct_9fa48("32923") ? true : (stryCov_9fa48("32923", "32924", "32925"), (stryMutAct_9fa48("32926") ? category : (stryCov_9fa48("32926"), !category)) || (stryMutAct_9fa48("32927") ? category.name : (stryCov_9fa48("32927"), !category.name)))) {
      if (stryMutAct_9fa48("32928")) {
        {}
      } else {
        stryCov_9fa48("32928");
        return next();
      }
    }
    if (stryMutAct_9fa48("32930") ? false : stryMutAct_9fa48("32929") ? true : (stryCov_9fa48("32929", "32930"), await validateTokenIfRequiresLogin(stryMutAct_9fa48("32931") ? userPrivileges.read : (stryCov_9fa48("32931"), !userPrivileges.read), cid, req, res))) {
      if (stryMutAct_9fa48("32932")) {
        {}
      } else {
        stryCov_9fa48("32932");
        let topicsData = await topics.getTopicsByTids(tids, uid);
        topicsData = await (stryMutAct_9fa48("32933") ? user.blocks : (stryCov_9fa48("32933"), user.blocks.filter(uid, topicsData)));
        const feed = await generateTopicsFeed(stryMutAct_9fa48("32934") ? {} : (stryCov_9fa48("32934"), {
          uid: uid,
          title: category.name,
          description: category.description,
          feed_url: stryMutAct_9fa48("32935") ? `` : (stryCov_9fa48("32935"), `/category/${cid}.rss`),
          site_url: stryMutAct_9fa48("32936") ? `` : (stryCov_9fa48("32936"), `/category/${category.cid}`)
        }), topicsData, stryMutAct_9fa48("32937") ? "" : (stryCov_9fa48("32937"), 'timestamp'));
        sendFeed(feed, res);
      }
    }
  }
}
async function generateForTopics(req, res, next) {
  if (stryMutAct_9fa48("32938")) {
    {}
  } else {
    stryCov_9fa48("32938");
    if (stryMutAct_9fa48("32940") ? false : stryMutAct_9fa48("32939") ? true : (stryCov_9fa48("32939", "32940"), meta.config[stryMutAct_9fa48("32941") ? "" : (stryCov_9fa48("32941"), 'feeds:disableRSS')])) {
      if (stryMutAct_9fa48("32942")) {
        {}
      } else {
        stryCov_9fa48("32942");
        return next();
      }
    }
    let token = null;
    if (stryMutAct_9fa48("32945") ? req.query.token || req.query.uid : stryMutAct_9fa48("32944") ? false : stryMutAct_9fa48("32943") ? true : (stryCov_9fa48("32943", "32944", "32945"), req.query.token && req.query.uid)) {
      if (stryMutAct_9fa48("32946")) {
        {}
      } else {
        stryCov_9fa48("32946");
        token = await db.getObjectField(stryMutAct_9fa48("32947") ? `` : (stryCov_9fa48("32947"), `user:${req.query.uid}`), stryMutAct_9fa48("32948") ? "" : (stryCov_9fa48("32948"), 'rss_token'));
      }
    }
    await sendTopicsFeed(stryMutAct_9fa48("32949") ? {} : (stryCov_9fa48("32949"), {
      uid: (stryMutAct_9fa48("32952") ? token || token === req.query.token : stryMutAct_9fa48("32951") ? false : stryMutAct_9fa48("32950") ? true : (stryCov_9fa48("32950", "32951", "32952"), token && (stryMutAct_9fa48("32954") ? token !== req.query.token : stryMutAct_9fa48("32953") ? true : (stryCov_9fa48("32953", "32954"), token === req.query.token)))) ? req.query.uid : req.uid,
      title: stryMutAct_9fa48("32955") ? "" : (stryCov_9fa48("32955"), 'Most recently created topics'),
      description: stryMutAct_9fa48("32956") ? "" : (stryCov_9fa48("32956"), 'A list of topics that have been created recently'),
      feed_url: stryMutAct_9fa48("32957") ? "" : (stryCov_9fa48("32957"), '/topics.rss'),
      useMainPost: stryMutAct_9fa48("32958") ? false : (stryCov_9fa48("32958"), true)
    }), stryMutAct_9fa48("32959") ? "" : (stryCov_9fa48("32959"), 'topics:tid'), res);
  }
}
async function generateForRecent(req, res, next) {
  if (stryMutAct_9fa48("32960")) {
    {}
  } else {
    stryCov_9fa48("32960");
    await generateSorted(stryMutAct_9fa48("32961") ? {} : (stryCov_9fa48("32961"), {
      title: stryMutAct_9fa48("32962") ? "" : (stryCov_9fa48("32962"), 'Recently Active Topics'),
      description: stryMutAct_9fa48("32963") ? "" : (stryCov_9fa48("32963"), 'A list of topics that have been active within the past 24 hours'),
      feed_url: stryMutAct_9fa48("32964") ? "" : (stryCov_9fa48("32964"), '/recent.rss'),
      site_url: stryMutAct_9fa48("32965") ? "" : (stryCov_9fa48("32965"), '/recent'),
      sort: stryMutAct_9fa48("32966") ? "" : (stryCov_9fa48("32966"), 'recent'),
      timestampField: stryMutAct_9fa48("32967") ? "" : (stryCov_9fa48("32967"), 'lastposttime'),
      term: stryMutAct_9fa48("32968") ? "" : (stryCov_9fa48("32968"), 'alltime')
    }), req, res, next);
  }
}
async function generateForTop(req, res, next) {
  if (stryMutAct_9fa48("32969")) {
    {}
  } else {
    stryCov_9fa48("32969");
    await generateSorted(stryMutAct_9fa48("32970") ? {} : (stryCov_9fa48("32970"), {
      title: stryMutAct_9fa48("32971") ? "" : (stryCov_9fa48("32971"), 'Top Voted Topics'),
      description: stryMutAct_9fa48("32972") ? "" : (stryCov_9fa48("32972"), 'A list of topics that have received the most votes'),
      feed_url: stryMutAct_9fa48("32973") ? `` : (stryCov_9fa48("32973"), `/top/${stryMutAct_9fa48("32976") ? req.params.term && 'daily' : stryMutAct_9fa48("32975") ? false : stryMutAct_9fa48("32974") ? true : (stryCov_9fa48("32974", "32975", "32976"), req.params.term || (stryMutAct_9fa48("32977") ? "" : (stryCov_9fa48("32977"), 'daily')))}.rss`),
      site_url: stryMutAct_9fa48("32978") ? `` : (stryCov_9fa48("32978"), `/top/${stryMutAct_9fa48("32981") ? req.params.term && 'daily' : stryMutAct_9fa48("32980") ? false : stryMutAct_9fa48("32979") ? true : (stryCov_9fa48("32979", "32980", "32981"), req.params.term || (stryMutAct_9fa48("32982") ? "" : (stryCov_9fa48("32982"), 'daily')))}`),
      sort: stryMutAct_9fa48("32983") ? "" : (stryCov_9fa48("32983"), 'votes'),
      timestampField: stryMutAct_9fa48("32984") ? "" : (stryCov_9fa48("32984"), 'timestamp'),
      term: stryMutAct_9fa48("32985") ? "" : (stryCov_9fa48("32985"), 'day')
    }), req, res, next);
  }
}
async function generateForPopular(req, res, next) {
  if (stryMutAct_9fa48("32986")) {
    {}
  } else {
    stryCov_9fa48("32986");
    await generateSorted(stryMutAct_9fa48("32987") ? {} : (stryCov_9fa48("32987"), {
      title: stryMutAct_9fa48("32988") ? "" : (stryCov_9fa48("32988"), 'Popular Topics'),
      description: stryMutAct_9fa48("32989") ? "" : (stryCov_9fa48("32989"), 'A list of topics that are sorted by post count'),
      feed_url: stryMutAct_9fa48("32990") ? `` : (stryCov_9fa48("32990"), `/popular/${stryMutAct_9fa48("32993") ? req.params.term && 'daily' : stryMutAct_9fa48("32992") ? false : stryMutAct_9fa48("32991") ? true : (stryCov_9fa48("32991", "32992", "32993"), req.params.term || (stryMutAct_9fa48("32994") ? "" : (stryCov_9fa48("32994"), 'daily')))}.rss`),
      site_url: stryMutAct_9fa48("32995") ? `` : (stryCov_9fa48("32995"), `/popular/${stryMutAct_9fa48("32998") ? req.params.term && 'daily' : stryMutAct_9fa48("32997") ? false : stryMutAct_9fa48("32996") ? true : (stryCov_9fa48("32996", "32997", "32998"), req.params.term || (stryMutAct_9fa48("32999") ? "" : (stryCov_9fa48("32999"), 'daily')))}`),
      sort: stryMutAct_9fa48("33000") ? "" : (stryCov_9fa48("33000"), 'posts'),
      timestampField: stryMutAct_9fa48("33001") ? "" : (stryCov_9fa48("33001"), 'timestamp'),
      term: stryMutAct_9fa48("33002") ? "" : (stryCov_9fa48("33002"), 'day')
    }), req, res, next);
  }
}
async function generateSorted(options, req, res, next) {
  if (stryMutAct_9fa48("33003")) {
    {}
  } else {
    stryCov_9fa48("33003");
    if (stryMutAct_9fa48("33005") ? false : stryMutAct_9fa48("33004") ? true : (stryCov_9fa48("33004", "33005"), meta.config[stryMutAct_9fa48("33006") ? "" : (stryCov_9fa48("33006"), 'feeds:disableRSS')])) {
      if (stryMutAct_9fa48("33007")) {
        {}
      } else {
        stryCov_9fa48("33007");
        return next();
      }
    }
    const term = stryMutAct_9fa48("33010") ? terms[req.params.term] && options.term : stryMutAct_9fa48("33009") ? false : stryMutAct_9fa48("33008") ? true : (stryCov_9fa48("33008", "33009", "33010"), terms[req.params.term] || options.term);
    let token = null;
    if (stryMutAct_9fa48("33013") ? req.query.token || req.query.uid : stryMutAct_9fa48("33012") ? false : stryMutAct_9fa48("33011") ? true : (stryCov_9fa48("33011", "33012", "33013"), req.query.token && req.query.uid)) {
      if (stryMutAct_9fa48("33014")) {
        {}
      } else {
        stryCov_9fa48("33014");
        token = await db.getObjectField(stryMutAct_9fa48("33015") ? `` : (stryCov_9fa48("33015"), `user:${req.query.uid}`), stryMutAct_9fa48("33016") ? "" : (stryCov_9fa48("33016"), 'rss_token'));
      }
    }
    const uid = (stryMutAct_9fa48("33019") ? token || token === req.query.token : stryMutAct_9fa48("33018") ? false : stryMutAct_9fa48("33017") ? true : (stryCov_9fa48("33017", "33018", "33019"), token && (stryMutAct_9fa48("33021") ? token !== req.query.token : stryMutAct_9fa48("33020") ? true : (stryCov_9fa48("33020", "33021"), token === req.query.token)))) ? req.query.uid : req.uid;
    const params = stryMutAct_9fa48("33022") ? {} : (stryCov_9fa48("33022"), {
      uid: uid,
      start: 0,
      stop: 19,
      term: term,
      sort: options.sort
    });
    const {
      cid
    } = req.query;
    if (stryMutAct_9fa48("33024") ? false : stryMutAct_9fa48("33023") ? true : (stryCov_9fa48("33023", "33024"), cid)) {
      if (stryMutAct_9fa48("33025")) {
        {}
      } else {
        stryCov_9fa48("33025");
        if (stryMutAct_9fa48("33028") ? false : stryMutAct_9fa48("33027") ? true : stryMutAct_9fa48("33026") ? await privileges.categories.can('topics:read', cid, uid) : (stryCov_9fa48("33026", "33027", "33028"), !(await privileges.categories.can(stryMutAct_9fa48("33029") ? "" : (stryCov_9fa48("33029"), 'topics:read'), cid, uid)))) {
          if (stryMutAct_9fa48("33030")) {
            {}
          } else {
            stryCov_9fa48("33030");
            return helpers.notAllowed(req, res);
          }
        }
        params.cids = stryMutAct_9fa48("33031") ? [] : (stryCov_9fa48("33031"), [cid]);
      }
    }
    const result = await topics.getSortedTopics(params);
    const feed = await generateTopicsFeed(stryMutAct_9fa48("33032") ? {} : (stryCov_9fa48("33032"), {
      uid: uid,
      title: options.title,
      description: options.description,
      feed_url: options.feed_url,
      site_url: options.site_url
    }), result.topics, options.timestampField);
    sendFeed(feed, res);
  }
}
async function sendTopicsFeed(options, set, res, timestampField) {
  if (stryMutAct_9fa48("33033")) {
    {}
  } else {
    stryCov_9fa48("33033");
    const start = options.hasOwnProperty(stryMutAct_9fa48("33034") ? "" : (stryCov_9fa48("33034"), 'start')) ? options.start : 0;
    const stop = options.hasOwnProperty(stryMutAct_9fa48("33035") ? "" : (stryCov_9fa48("33035"), 'stop')) ? options.stop : 19;
    const topicData = await topics.getTopicsFromSet(set, options.uid, start, stop);
    const feed = await generateTopicsFeed(options, topicData.topics, timestampField);
    sendFeed(feed, res);
  }
}
async function generateTopicsFeed(feedOptions, feedTopics, timestampField) {
  if (stryMutAct_9fa48("33036")) {
    {}
  } else {
    stryCov_9fa48("33036");
    feedOptions.ttl = 60;
    feedOptions.feed_url = stryMutAct_9fa48("33037") ? nconf.get('url') - feedOptions.feed_url : (stryCov_9fa48("33037"), nconf.get(stryMutAct_9fa48("33038") ? "" : (stryCov_9fa48("33038"), 'url')) + feedOptions.feed_url);
    feedOptions.site_url = stryMutAct_9fa48("33039") ? nconf.get('url') - feedOptions.site_url : (stryCov_9fa48("33039"), nconf.get(stryMutAct_9fa48("33040") ? "" : (stryCov_9fa48("33040"), 'url')) + feedOptions.site_url);
    feedTopics = stryMutAct_9fa48("33041") ? feedTopics : (stryCov_9fa48("33041"), feedTopics.filter(Boolean));
    const feed = new rss(feedOptions);
    if (stryMutAct_9fa48("33045") ? feedTopics.length <= 0 : stryMutAct_9fa48("33044") ? feedTopics.length >= 0 : stryMutAct_9fa48("33043") ? false : stryMutAct_9fa48("33042") ? true : (stryCov_9fa48("33042", "33043", "33044", "33045"), feedTopics.length > 0)) {
      if (stryMutAct_9fa48("33046")) {
        {}
      } else {
        stryCov_9fa48("33046");
        feed.pubDate = new Date(feedTopics[0][timestampField]).toUTCString();
      }
    }
    async function addFeedItem(topicData) {
      if (stryMutAct_9fa48("33047")) {
        {}
      } else {
        stryCov_9fa48("33047");
        const feedItem = stryMutAct_9fa48("33048") ? {} : (stryCov_9fa48("33048"), {
          title: utils.stripHTMLTags(topicData.title, utils.tags),
          url: stryMutAct_9fa48("33049") ? `` : (stryCov_9fa48("33049"), `${nconf.get(stryMutAct_9fa48("33050") ? "" : (stryCov_9fa48("33050"), 'url'))}/topic/${topicData.slug}`),
          date: new Date(topicData[timestampField]).toUTCString()
        });
        if (stryMutAct_9fa48("33052") ? false : stryMutAct_9fa48("33051") ? true : (stryCov_9fa48("33051", "33052"), topicData.deleted)) {
          if (stryMutAct_9fa48("33053")) {
            {}
          } else {
            stryCov_9fa48("33053");
            return;
          }
        }
        if (stryMutAct_9fa48("33056") ? topicData.teaser && topicData.teaser.user || !feedOptions.useMainPost : stryMutAct_9fa48("33055") ? false : stryMutAct_9fa48("33054") ? true : (stryCov_9fa48("33054", "33055", "33056"), (stryMutAct_9fa48("33058") ? topicData.teaser || topicData.teaser.user : stryMutAct_9fa48("33057") ? true : (stryCov_9fa48("33057", "33058"), topicData.teaser && topicData.teaser.user)) && (stryMutAct_9fa48("33059") ? feedOptions.useMainPost : (stryCov_9fa48("33059"), !feedOptions.useMainPost)))) {
          if (stryMutAct_9fa48("33060")) {
            {}
          } else {
            stryCov_9fa48("33060");
            feedItem.description = topicData.teaser.content;
            feedItem.author = topicData.teaser.user.username;
            feed.item(feedItem);
            return;
          }
        }
        const mainPost = await topics.getMainPost(topicData.tid, feedOptions.uid);
        if (stryMutAct_9fa48("33063") ? false : stryMutAct_9fa48("33062") ? true : stryMutAct_9fa48("33061") ? mainPost : (stryCov_9fa48("33061", "33062", "33063"), !mainPost)) {
          if (stryMutAct_9fa48("33064")) {
            {}
          } else {
            stryCov_9fa48("33064");
            feed.item(feedItem);
            return;
          }
        }
        feedItem.description = mainPost.content;
        feedItem.author = stryMutAct_9fa48("33067") ? mainPost.user || mainPost.user.username : stryMutAct_9fa48("33066") ? false : stryMutAct_9fa48("33065") ? true : (stryCov_9fa48("33065", "33066", "33067"), mainPost.user && mainPost.user.username);
        feed.item(feedItem);
      }
    }
    for (const topicData of feedTopics) {
      if (stryMutAct_9fa48("33068")) {
        {}
      } else {
        stryCov_9fa48("33068");
        /* eslint-disable no-await-in-loop */
        await addFeedItem(topicData);
      }
    }
    return feed;
  }
}
async function generateForRecentPosts(req, res, next) {
  if (stryMutAct_9fa48("33069")) {
    {}
  } else {
    stryCov_9fa48("33069");
    if (stryMutAct_9fa48("33071") ? false : stryMutAct_9fa48("33070") ? true : (stryCov_9fa48("33070", "33071"), meta.config[stryMutAct_9fa48("33072") ? "" : (stryCov_9fa48("33072"), 'feeds:disableRSS')])) {
      if (stryMutAct_9fa48("33073")) {
        {}
      } else {
        stryCov_9fa48("33073");
        return next();
      }
    }
    const page = stryMutAct_9fa48("33076") ? parseInt(req.query.page, 10) && 1 : stryMutAct_9fa48("33075") ? false : stryMutAct_9fa48("33074") ? true : (stryCov_9fa48("33074", "33075", "33076"), parseInt(req.query.page, 10) || 1);
    const postsPerPage = 20;
    const start = Math.max(0, stryMutAct_9fa48("33077") ? (page - 1) / postsPerPage : (stryCov_9fa48("33077"), (stryMutAct_9fa48("33078") ? page + 1 : (stryCov_9fa48("33078"), page - 1)) * postsPerPage));
    const stop = stryMutAct_9fa48("33079") ? start + postsPerPage + 1 : (stryCov_9fa48("33079"), (stryMutAct_9fa48("33080") ? start - postsPerPage : (stryCov_9fa48("33080"), start + postsPerPage)) - 1);
    const postData = await posts.getRecentPosts(req.uid, start, stop, stryMutAct_9fa48("33081") ? "" : (stryCov_9fa48("33081"), 'month'));
    const feed = generateForPostsFeed(stryMutAct_9fa48("33082") ? {} : (stryCov_9fa48("33082"), {
      title: stryMutAct_9fa48("33083") ? "" : (stryCov_9fa48("33083"), 'Recent Posts'),
      description: stryMutAct_9fa48("33084") ? "" : (stryCov_9fa48("33084"), 'A list of recent posts'),
      feed_url: stryMutAct_9fa48("33085") ? "" : (stryCov_9fa48("33085"), '/recentposts.rss'),
      site_url: stryMutAct_9fa48("33086") ? "" : (stryCov_9fa48("33086"), '/recentposts')
    }), postData);
    sendFeed(feed, res);
  }
}
async function generateForCategoryRecentPosts(req, res) {
  if (stryMutAct_9fa48("33087")) {
    {}
  } else {
    stryCov_9fa48("33087");
    if (stryMutAct_9fa48("33089") ? false : stryMutAct_9fa48("33088") ? true : (stryCov_9fa48("33088", "33089"), meta.config[stryMutAct_9fa48("33090") ? "" : (stryCov_9fa48("33090"), 'feeds:disableRSS')])) {
      if (stryMutAct_9fa48("33091")) {
        {}
      } else {
        stryCov_9fa48("33091");
        return controllers404.handle404(req, res);
      }
    }
    const cid = req.params.category_id;
    const page = stryMutAct_9fa48("33094") ? parseInt(req.query.page, 10) && 1 : stryMutAct_9fa48("33093") ? false : stryMutAct_9fa48("33092") ? true : (stryCov_9fa48("33092", "33093", "33094"), parseInt(req.query.page, 10) || 1);
    const topicsPerPage = 20;
    const start = Math.max(0, stryMutAct_9fa48("33095") ? (page - 1) / topicsPerPage : (stryCov_9fa48("33095"), (stryMutAct_9fa48("33096") ? page + 1 : (stryCov_9fa48("33096"), page - 1)) * topicsPerPage));
    const stop = stryMutAct_9fa48("33097") ? start + topicsPerPage + 1 : (stryCov_9fa48("33097"), (stryMutAct_9fa48("33098") ? start - topicsPerPage : (stryCov_9fa48("33098"), start + topicsPerPage)) - 1);
    const [userPrivileges, category, postData] = await Promise.all(stryMutAct_9fa48("33099") ? [] : (stryCov_9fa48("33099"), [privileges.categories.get(cid, req.uid), categories.getCategoryData(cid), categories.getRecentReplies(cid, stryMutAct_9fa48("33102") ? (req.uid || req.query.uid) && 0 : stryMutAct_9fa48("33101") ? false : stryMutAct_9fa48("33100") ? true : (stryCov_9fa48("33100", "33101", "33102"), (stryMutAct_9fa48("33104") ? req.uid && req.query.uid : stryMutAct_9fa48("33103") ? false : (stryCov_9fa48("33103", "33104"), req.uid || req.query.uid)) || 0), start, stop)]));
    if (stryMutAct_9fa48("33107") ? false : stryMutAct_9fa48("33106") ? true : stryMutAct_9fa48("33105") ? category : (stryCov_9fa48("33105", "33106", "33107"), !category)) {
      if (stryMutAct_9fa48("33108")) {
        {}
      } else {
        stryCov_9fa48("33108");
        return controllers404.handle404(req, res);
      }
    }
    if (stryMutAct_9fa48("33110") ? false : stryMutAct_9fa48("33109") ? true : (stryCov_9fa48("33109", "33110"), await validateTokenIfRequiresLogin(stryMutAct_9fa48("33111") ? userPrivileges.read : (stryCov_9fa48("33111"), !userPrivileges.read), cid, req, res))) {
      if (stryMutAct_9fa48("33112")) {
        {}
      } else {
        stryCov_9fa48("33112");
        const feed = generateForPostsFeed(stryMutAct_9fa48("33113") ? {} : (stryCov_9fa48("33113"), {
          title: stryMutAct_9fa48("33114") ? `` : (stryCov_9fa48("33114"), `${category.name} Recent Posts`),
          description: stryMutAct_9fa48("33115") ? `` : (stryCov_9fa48("33115"), `A list of recent posts from ${category.name}`),
          feed_url: stryMutAct_9fa48("33116") ? `` : (stryCov_9fa48("33116"), `/category/${cid}/recentposts.rss`),
          site_url: stryMutAct_9fa48("33117") ? `` : (stryCov_9fa48("33117"), `/category/${cid}/recentposts`)
        }), postData);
        sendFeed(feed, res);
      }
    }
  }
}
function generateForPostsFeed(feedOptions, posts) {
  if (stryMutAct_9fa48("33118")) {
    {}
  } else {
    stryCov_9fa48("33118");
    feedOptions.ttl = 60;
    feedOptions.feed_url = stryMutAct_9fa48("33119") ? nconf.get('url') - feedOptions.feed_url : (stryCov_9fa48("33119"), nconf.get(stryMutAct_9fa48("33120") ? "" : (stryCov_9fa48("33120"), 'url')) + feedOptions.feed_url);
    feedOptions.site_url = stryMutAct_9fa48("33121") ? nconf.get('url') - feedOptions.site_url : (stryCov_9fa48("33121"), nconf.get(stryMutAct_9fa48("33122") ? "" : (stryCov_9fa48("33122"), 'url')) + feedOptions.site_url);
    const feed = new rss(feedOptions);
    if (stryMutAct_9fa48("33126") ? posts.length <= 0 : stryMutAct_9fa48("33125") ? posts.length >= 0 : stryMutAct_9fa48("33124") ? false : stryMutAct_9fa48("33123") ? true : (stryCov_9fa48("33123", "33124", "33125", "33126"), posts.length > 0)) {
      if (stryMutAct_9fa48("33127")) {
        {}
      } else {
        stryCov_9fa48("33127");
        feed.pubDate = new Date(parseInt(posts[0].timestamp, 10)).toUTCString();
      }
    }
    posts.forEach(postData => {
      if (stryMutAct_9fa48("33128")) {
        {}
      } else {
        stryCov_9fa48("33128");
        feed.item(stryMutAct_9fa48("33129") ? {} : (stryCov_9fa48("33129"), {
          title: postData.topic ? postData.topic.title : stryMutAct_9fa48("33130") ? "Stryker was here!" : (stryCov_9fa48("33130"), ''),
          description: postData.content,
          url: stryMutAct_9fa48("33131") ? `` : (stryCov_9fa48("33131"), `${nconf.get(stryMutAct_9fa48("33132") ? "" : (stryCov_9fa48("33132"), 'url'))}/post/${postData.pid}`),
          author: postData.user ? postData.user.username : stryMutAct_9fa48("33133") ? "Stryker was here!" : (stryCov_9fa48("33133"), ''),
          date: new Date(parseInt(postData.timestamp, 10)).toUTCString()
        }));
      }
    });
    return feed;
  }
}
async function generateForUserTopics(req, res, next) {
  if (stryMutAct_9fa48("33134")) {
    {}
  } else {
    stryCov_9fa48("33134");
    if (stryMutAct_9fa48("33136") ? false : stryMutAct_9fa48("33135") ? true : (stryCov_9fa48("33135", "33136"), meta.config[stryMutAct_9fa48("33137") ? "" : (stryCov_9fa48("33137"), 'feeds:disableRSS')])) {
      if (stryMutAct_9fa48("33138")) {
        {}
      } else {
        stryCov_9fa48("33138");
        return next();
      }
    }
    const {
      userslug
    } = req.params;
    const uid = await user.getUidByUserslug(userslug);
    if (stryMutAct_9fa48("33141") ? false : stryMutAct_9fa48("33140") ? true : stryMutAct_9fa48("33139") ? uid : (stryCov_9fa48("33139", "33140", "33141"), !uid)) {
      if (stryMutAct_9fa48("33142")) {
        {}
      } else {
        stryCov_9fa48("33142");
        return next();
      }
    }
    const userData = await user.getUserFields(uid, stryMutAct_9fa48("33143") ? [] : (stryCov_9fa48("33143"), [stryMutAct_9fa48("33144") ? "" : (stryCov_9fa48("33144"), 'uid'), stryMutAct_9fa48("33145") ? "" : (stryCov_9fa48("33145"), 'username')]));
    await sendTopicsFeed(stryMutAct_9fa48("33146") ? {} : (stryCov_9fa48("33146"), {
      uid: req.uid,
      title: stryMutAct_9fa48("33147") ? `` : (stryCov_9fa48("33147"), `Topics by ${userData.username}`),
      description: stryMutAct_9fa48("33148") ? `` : (stryCov_9fa48("33148"), `A list of topics that are posted by ${userData.username}`),
      feed_url: stryMutAct_9fa48("33149") ? `` : (stryCov_9fa48("33149"), `/user/${userslug}/topics.rss`),
      site_url: stryMutAct_9fa48("33150") ? `` : (stryCov_9fa48("33150"), `/user/${userslug}/topics`)
    }), stryMutAct_9fa48("33151") ? `` : (stryCov_9fa48("33151"), `uid:${userData.uid}:topics`), res);
  }
}
async function generateForTag(req, res) {
  if (stryMutAct_9fa48("33152")) {
    {}
  } else {
    stryCov_9fa48("33152");
    if (stryMutAct_9fa48("33154") ? false : stryMutAct_9fa48("33153") ? true : (stryCov_9fa48("33153", "33154"), meta.config[stryMutAct_9fa48("33155") ? "" : (stryCov_9fa48("33155"), 'feeds:disableRSS')])) {
      if (stryMutAct_9fa48("33156")) {
        {}
      } else {
        stryCov_9fa48("33156");
        return controllers404.handle404(req, res);
      }
    }
    const tag = validator.escape(String(req.params.tag));
    const page = stryMutAct_9fa48("33159") ? parseInt(req.query.page, 10) && 1 : stryMutAct_9fa48("33158") ? false : stryMutAct_9fa48("33157") ? true : (stryCov_9fa48("33157", "33158", "33159"), parseInt(req.query.page, 10) || 1);
    const topicsPerPage = stryMutAct_9fa48("33162") ? meta.config.topicsPerPage && 20 : stryMutAct_9fa48("33161") ? false : stryMutAct_9fa48("33160") ? true : (stryCov_9fa48("33160", "33161", "33162"), meta.config.topicsPerPage || 20);
    const start = Math.max(0, stryMutAct_9fa48("33163") ? (page - 1) / topicsPerPage : (stryCov_9fa48("33163"), (stryMutAct_9fa48("33164") ? page + 1 : (stryCov_9fa48("33164"), page - 1)) * topicsPerPage));
    const stop = stryMutAct_9fa48("33165") ? start + topicsPerPage + 1 : (stryCov_9fa48("33165"), (stryMutAct_9fa48("33166") ? start - topicsPerPage : (stryCov_9fa48("33166"), start + topicsPerPage)) - 1);
    await sendTopicsFeed(stryMutAct_9fa48("33167") ? {} : (stryCov_9fa48("33167"), {
      uid: req.uid,
      title: stryMutAct_9fa48("33168") ? `` : (stryCov_9fa48("33168"), `Topics tagged with ${tag}`),
      description: stryMutAct_9fa48("33169") ? `` : (stryCov_9fa48("33169"), `A list of topics that have been tagged with ${tag}`),
      feed_url: stryMutAct_9fa48("33170") ? `` : (stryCov_9fa48("33170"), `/tags/${tag}.rss`),
      site_url: stryMutAct_9fa48("33171") ? `` : (stryCov_9fa48("33171"), `/tags/${tag}`),
      start: start,
      stop: stop
    }), stryMutAct_9fa48("33172") ? `` : (stryCov_9fa48("33172"), `tag:${tag}:topics`), res);
  }
}
function sendFeed(feed, res) {
  if (stryMutAct_9fa48("33173")) {
    {}
  } else {
    stryCov_9fa48("33173");
    const xml = feed.xml();
    res.type(stryMutAct_9fa48("33174") ? "" : (stryCov_9fa48("33174"), 'xml')).set(stryMutAct_9fa48("33175") ? "" : (stryCov_9fa48("33175"), 'Content-Length'), Buffer.byteLength(xml)).send(xml);
  }
}