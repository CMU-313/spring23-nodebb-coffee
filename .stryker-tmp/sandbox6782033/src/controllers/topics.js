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
const nconf = require('nconf');
const qs = require('querystring');
const user = require('../user');
const meta = require('../meta');
const topics = require('../topics');
const categories = require('../categories');
const posts = require('../posts');
const privileges = require('../privileges');
const helpers = require('./helpers');
const pagination = require('../pagination');
const utils = require('../utils');
const analytics = require('../analytics');
const topicsController = module.exports;
const url = nconf.get(stryMutAct_9fa48("11269") ? "" : (stryCov_9fa48("11269"), 'url'));
const relative_path = nconf.get(stryMutAct_9fa48("11270") ? "" : (stryCov_9fa48("11270"), 'relative_path'));
const upload_url = nconf.get(stryMutAct_9fa48("11271") ? "" : (stryCov_9fa48("11271"), 'upload_url'));
topicsController.get = async function getTopic(req, res, next) {
  if (stryMutAct_9fa48("11272")) {
    {}
  } else {
    stryCov_9fa48("11272");
    const tid = req.params.topic_id;
    if (stryMutAct_9fa48("11275") ? req.params.post_index && !utils.isNumber(req.params.post_index) && req.params.post_index !== 'unread' && !utils.isNumber(tid) : stryMutAct_9fa48("11274") ? false : stryMutAct_9fa48("11273") ? true : (stryCov_9fa48("11273", "11274", "11275"), (stryMutAct_9fa48("11277") ? req.params.post_index && !utils.isNumber(req.params.post_index) || req.params.post_index !== 'unread' : stryMutAct_9fa48("11276") ? false : (stryCov_9fa48("11276", "11277"), (stryMutAct_9fa48("11279") ? req.params.post_index || !utils.isNumber(req.params.post_index) : stryMutAct_9fa48("11278") ? true : (stryCov_9fa48("11278", "11279"), req.params.post_index && (stryMutAct_9fa48("11280") ? utils.isNumber(req.params.post_index) : (stryCov_9fa48("11280"), !utils.isNumber(req.params.post_index))))) && (stryMutAct_9fa48("11282") ? req.params.post_index === 'unread' : stryMutAct_9fa48("11281") ? true : (stryCov_9fa48("11281", "11282"), req.params.post_index !== (stryMutAct_9fa48("11283") ? "" : (stryCov_9fa48("11283"), 'unread')))))) || (stryMutAct_9fa48("11284") ? utils.isNumber(tid) : (stryCov_9fa48("11284"), !utils.isNumber(tid))))) {
      if (stryMutAct_9fa48("11285")) {
        {}
      } else {
        stryCov_9fa48("11285");
        return next();
      }
    }
    let postIndex = stryMutAct_9fa48("11288") ? parseInt(req.params.post_index, 10) && 1 : stryMutAct_9fa48("11287") ? false : stryMutAct_9fa48("11286") ? true : (stryCov_9fa48("11286", "11287", "11288"), parseInt(req.params.post_index, 10) || 1);
    const [userPrivileges, settings, topicData, rssToken] = await Promise.all(stryMutAct_9fa48("11289") ? [] : (stryCov_9fa48("11289"), [privileges.topics.get(tid, req.uid), user.getSettings(req.uid), topics.getTopicData(tid), user.auth.getFeedToken(req.uid)]));
    let currentPage = stryMutAct_9fa48("11292") ? parseInt(req.query.page, 10) && 1 : stryMutAct_9fa48("11291") ? false : stryMutAct_9fa48("11290") ? true : (stryCov_9fa48("11290", "11291", "11292"), parseInt(req.query.page, 10) || 1);
    const pageCount = Math.max(1, Math.ceil(stryMutAct_9fa48("11293") ? (topicData && topicData.postcount) * settings.postsPerPage : (stryCov_9fa48("11293"), (stryMutAct_9fa48("11296") ? topicData || topicData.postcount : stryMutAct_9fa48("11295") ? false : stryMutAct_9fa48("11294") ? true : (stryCov_9fa48("11294", "11295", "11296"), topicData && topicData.postcount)) / settings.postsPerPage)));
    const invalidPagination = stryMutAct_9fa48("11299") ? settings.usePagination || currentPage < 1 || currentPage > pageCount : stryMutAct_9fa48("11298") ? false : stryMutAct_9fa48("11297") ? true : (stryCov_9fa48("11297", "11298", "11299"), settings.usePagination && (stryMutAct_9fa48("11301") ? currentPage < 1 && currentPage > pageCount : stryMutAct_9fa48("11300") ? true : (stryCov_9fa48("11300", "11301"), (stryMutAct_9fa48("11304") ? currentPage >= 1 : stryMutAct_9fa48("11303") ? currentPage <= 1 : stryMutAct_9fa48("11302") ? false : (stryCov_9fa48("11302", "11303", "11304"), currentPage < 1)) || (stryMutAct_9fa48("11307") ? currentPage <= pageCount : stryMutAct_9fa48("11306") ? currentPage >= pageCount : stryMutAct_9fa48("11305") ? false : (stryCov_9fa48("11305", "11306", "11307"), currentPage > pageCount)))));
    if (stryMutAct_9fa48("11310") ? (!topicData || userPrivileges.disabled || invalidPagination) && topicData.scheduled && !userPrivileges.view_scheduled : stryMutAct_9fa48("11309") ? false : stryMutAct_9fa48("11308") ? true : (stryCov_9fa48("11308", "11309", "11310"), (stryMutAct_9fa48("11312") ? (!topicData || userPrivileges.disabled) && invalidPagination : stryMutAct_9fa48("11311") ? false : (stryCov_9fa48("11311", "11312"), (stryMutAct_9fa48("11314") ? !topicData && userPrivileges.disabled : stryMutAct_9fa48("11313") ? false : (stryCov_9fa48("11313", "11314"), (stryMutAct_9fa48("11315") ? topicData : (stryCov_9fa48("11315"), !topicData)) || userPrivileges.disabled)) || invalidPagination)) || (stryMutAct_9fa48("11317") ? topicData.scheduled || !userPrivileges.view_scheduled : stryMutAct_9fa48("11316") ? false : (stryCov_9fa48("11316", "11317"), topicData.scheduled && (stryMutAct_9fa48("11318") ? userPrivileges.view_scheduled : (stryCov_9fa48("11318"), !userPrivileges.view_scheduled)))))) {
      if (stryMutAct_9fa48("11319")) {
        {}
      } else {
        stryCov_9fa48("11319");
        return next();
      }
    }
    if (stryMutAct_9fa48("11322") ? !userPrivileges['topics:read'] && !topicData.scheduled && topicData.deleted && !userPrivileges.view_deleted : stryMutAct_9fa48("11321") ? false : stryMutAct_9fa48("11320") ? true : (stryCov_9fa48("11320", "11321", "11322"), (stryMutAct_9fa48("11323") ? userPrivileges['topics:read'] : (stryCov_9fa48("11323"), !userPrivileges[stryMutAct_9fa48("11324") ? "" : (stryCov_9fa48("11324"), 'topics:read')])) || (stryMutAct_9fa48("11326") ? !topicData.scheduled && topicData.deleted || !userPrivileges.view_deleted : stryMutAct_9fa48("11325") ? false : (stryCov_9fa48("11325", "11326"), (stryMutAct_9fa48("11328") ? !topicData.scheduled || topicData.deleted : stryMutAct_9fa48("11327") ? true : (stryCov_9fa48("11327", "11328"), (stryMutAct_9fa48("11329") ? topicData.scheduled : (stryCov_9fa48("11329"), !topicData.scheduled)) && topicData.deleted)) && (stryMutAct_9fa48("11330") ? userPrivileges.view_deleted : (stryCov_9fa48("11330"), !userPrivileges.view_deleted)))))) {
      if (stryMutAct_9fa48("11331")) {
        {}
      } else {
        stryCov_9fa48("11331");
        return helpers.notAllowed(req, res);
      }
    }
    if (stryMutAct_9fa48("11334") ? req.params.post_index !== 'unread' : stryMutAct_9fa48("11333") ? false : stryMutAct_9fa48("11332") ? true : (stryCov_9fa48("11332", "11333", "11334"), req.params.post_index === (stryMutAct_9fa48("11335") ? "" : (stryCov_9fa48("11335"), 'unread')))) {
      if (stryMutAct_9fa48("11336")) {
        {}
      } else {
        stryCov_9fa48("11336");
        postIndex = await topics.getUserBookmark(tid, req.uid);
      }
    }
    if (stryMutAct_9fa48("11339") ? !res.locals.isAPI && (!req.params.slug || topicData.slug !== `${tid}/${req.params.slug}`) || topicData.slug && topicData.slug !== `${tid}/` : stryMutAct_9fa48("11338") ? false : stryMutAct_9fa48("11337") ? true : (stryCov_9fa48("11337", "11338", "11339"), (stryMutAct_9fa48("11341") ? !res.locals.isAPI || !req.params.slug || topicData.slug !== `${tid}/${req.params.slug}` : stryMutAct_9fa48("11340") ? true : (stryCov_9fa48("11340", "11341"), (stryMutAct_9fa48("11342") ? res.locals.isAPI : (stryCov_9fa48("11342"), !res.locals.isAPI)) && (stryMutAct_9fa48("11344") ? !req.params.slug && topicData.slug !== `${tid}/${req.params.slug}` : stryMutAct_9fa48("11343") ? true : (stryCov_9fa48("11343", "11344"), (stryMutAct_9fa48("11345") ? req.params.slug : (stryCov_9fa48("11345"), !req.params.slug)) || (stryMutAct_9fa48("11347") ? topicData.slug === `${tid}/${req.params.slug}` : stryMutAct_9fa48("11346") ? false : (stryCov_9fa48("11346", "11347"), topicData.slug !== (stryMutAct_9fa48("11348") ? `` : (stryCov_9fa48("11348"), `${tid}/${req.params.slug}`)))))))) && (stryMutAct_9fa48("11350") ? topicData.slug || topicData.slug !== `${tid}/` : stryMutAct_9fa48("11349") ? true : (stryCov_9fa48("11349", "11350"), topicData.slug && (stryMutAct_9fa48("11352") ? topicData.slug === `${tid}/` : stryMutAct_9fa48("11351") ? true : (stryCov_9fa48("11351", "11352"), topicData.slug !== (stryMutAct_9fa48("11353") ? `` : (stryCov_9fa48("11353"), `${tid}/`)))))))) {
      if (stryMutAct_9fa48("11354")) {
        {}
      } else {
        stryCov_9fa48("11354");
        return helpers.redirect(res, stryMutAct_9fa48("11355") ? `` : (stryCov_9fa48("11355"), `/topic/${topicData.slug}${postIndex ? stryMutAct_9fa48("11356") ? `` : (stryCov_9fa48("11356"), `/${postIndex}`) : stryMutAct_9fa48("11357") ? "Stryker was here!" : (stryCov_9fa48("11357"), '')}${generateQueryString(req.query)}`), stryMutAct_9fa48("11358") ? false : (stryCov_9fa48("11358"), true));
      }
    }
    if (stryMutAct_9fa48("11361") ? utils.isNumber(postIndex) && topicData.postcount > 0 || postIndex < 1 || postIndex > topicData.postcount : stryMutAct_9fa48("11360") ? false : stryMutAct_9fa48("11359") ? true : (stryCov_9fa48("11359", "11360", "11361"), (stryMutAct_9fa48("11363") ? utils.isNumber(postIndex) || topicData.postcount > 0 : stryMutAct_9fa48("11362") ? true : (stryCov_9fa48("11362", "11363"), utils.isNumber(postIndex) && (stryMutAct_9fa48("11366") ? topicData.postcount <= 0 : stryMutAct_9fa48("11365") ? topicData.postcount >= 0 : stryMutAct_9fa48("11364") ? true : (stryCov_9fa48("11364", "11365", "11366"), topicData.postcount > 0)))) && (stryMutAct_9fa48("11368") ? postIndex < 1 && postIndex > topicData.postcount : stryMutAct_9fa48("11367") ? true : (stryCov_9fa48("11367", "11368"), (stryMutAct_9fa48("11371") ? postIndex >= 1 : stryMutAct_9fa48("11370") ? postIndex <= 1 : stryMutAct_9fa48("11369") ? false : (stryCov_9fa48("11369", "11370", "11371"), postIndex < 1)) || (stryMutAct_9fa48("11374") ? postIndex <= topicData.postcount : stryMutAct_9fa48("11373") ? postIndex >= topicData.postcount : stryMutAct_9fa48("11372") ? false : (stryCov_9fa48("11372", "11373", "11374"), postIndex > topicData.postcount)))))) {
      if (stryMutAct_9fa48("11375")) {
        {}
      } else {
        stryCov_9fa48("11375");
        return helpers.redirect(res, stryMutAct_9fa48("11376") ? `` : (stryCov_9fa48("11376"), `/topic/${tid}/${req.params.slug}${(stryMutAct_9fa48("11380") ? postIndex <= topicData.postcount : stryMutAct_9fa48("11379") ? postIndex >= topicData.postcount : stryMutAct_9fa48("11378") ? false : stryMutAct_9fa48("11377") ? true : (stryCov_9fa48("11377", "11378", "11379", "11380"), postIndex > topicData.postcount)) ? stryMutAct_9fa48("11381") ? `` : (stryCov_9fa48("11381"), `/${topicData.postcount}`) : stryMutAct_9fa48("11382") ? "Stryker was here!" : (stryCov_9fa48("11382"), '')}${generateQueryString(req.query)}`));
      }
    }
    postIndex = Math.max(1, postIndex);
    const sort = stryMutAct_9fa48("11385") ? req.query.sort && settings.topicPostSort : stryMutAct_9fa48("11384") ? false : stryMutAct_9fa48("11383") ? true : (stryCov_9fa48("11383", "11384", "11385"), req.query.sort || settings.topicPostSort);
    const set = (stryMutAct_9fa48("11388") ? sort !== 'most_votes' : stryMutAct_9fa48("11387") ? false : stryMutAct_9fa48("11386") ? true : (stryCov_9fa48("11386", "11387", "11388"), sort === (stryMutAct_9fa48("11389") ? "" : (stryCov_9fa48("11389"), 'most_votes')))) ? stryMutAct_9fa48("11390") ? `` : (stryCov_9fa48("11390"), `tid:${tid}:posts:votes`) : stryMutAct_9fa48("11391") ? `` : (stryCov_9fa48("11391"), `tid:${tid}:posts`);
    const reverse = stryMutAct_9fa48("11394") ? sort === 'newest_to_oldest' && sort === 'most_votes' : stryMutAct_9fa48("11393") ? false : stryMutAct_9fa48("11392") ? true : (stryCov_9fa48("11392", "11393", "11394"), (stryMutAct_9fa48("11396") ? sort !== 'newest_to_oldest' : stryMutAct_9fa48("11395") ? false : (stryCov_9fa48("11395", "11396"), sort === (stryMutAct_9fa48("11397") ? "" : (stryCov_9fa48("11397"), 'newest_to_oldest')))) || (stryMutAct_9fa48("11399") ? sort !== 'most_votes' : stryMutAct_9fa48("11398") ? false : (stryCov_9fa48("11398", "11399"), sort === (stryMutAct_9fa48("11400") ? "" : (stryCov_9fa48("11400"), 'most_votes')))));
    if (stryMutAct_9fa48("11403") ? settings.usePagination || !req.query.page : stryMutAct_9fa48("11402") ? false : stryMutAct_9fa48("11401") ? true : (stryCov_9fa48("11401", "11402", "11403"), settings.usePagination && (stryMutAct_9fa48("11404") ? req.query.page : (stryCov_9fa48("11404"), !req.query.page)))) {
      if (stryMutAct_9fa48("11405")) {
        {}
      } else {
        stryCov_9fa48("11405");
        currentPage = calculatePageFromIndex(postIndex, settings);
      }
    }
    const {
      start,
      stop
    } = calculateStartStop(currentPage, postIndex, settings);
    await topics.getTopicWithPosts(topicData, set, req.uid, start, stop, reverse);
    topics.modifyPostsByPrivilege(topicData, userPrivileges);
    topicData.tagWhitelist = categories.filterTagWhitelist(topicData.tagWhitelist, userPrivileges.isAdminOrMod);
    topicData.privileges = userPrivileges;
    topicData.topicStaleDays = meta.config.topicStaleDays;
    topicData[stryMutAct_9fa48("11406") ? "" : (stryCov_9fa48("11406"), 'reputation:disabled')] = meta.config[stryMutAct_9fa48("11407") ? "" : (stryCov_9fa48("11407"), 'reputation:disabled')];
    topicData[stryMutAct_9fa48("11408") ? "" : (stryCov_9fa48("11408"), 'downvote:disabled')] = meta.config[stryMutAct_9fa48("11409") ? "" : (stryCov_9fa48("11409"), 'downvote:disabled')];
    topicData[stryMutAct_9fa48("11410") ? "" : (stryCov_9fa48("11410"), 'feeds:disableRSS')] = stryMutAct_9fa48("11413") ? meta.config['feeds:disableRSS'] && 0 : stryMutAct_9fa48("11412") ? false : stryMutAct_9fa48("11411") ? true : (stryCov_9fa48("11411", "11412", "11413"), meta.config[stryMutAct_9fa48("11414") ? "" : (stryCov_9fa48("11414"), 'feeds:disableRSS')] || 0);
    topicData[stryMutAct_9fa48("11415") ? "" : (stryCov_9fa48("11415"), 'signatures:hideDuplicates')] = meta.config[stryMutAct_9fa48("11416") ? "" : (stryCov_9fa48("11416"), 'signatures:hideDuplicates')];
    topicData.bookmarkThreshold = meta.config.bookmarkThreshold;
    topicData.necroThreshold = meta.config.necroThreshold;
    topicData.postEditDuration = meta.config.postEditDuration;
    topicData.postDeleteDuration = meta.config.postDeleteDuration;
    topicData.scrollToMyPost = settings.scrollToMyPost;
    topicData.updateUrlWithPostIndex = settings.updateUrlWithPostIndex;
    topicData.allowMultipleBadges = stryMutAct_9fa48("11419") ? meta.config.allowMultipleBadges !== 1 : stryMutAct_9fa48("11418") ? false : stryMutAct_9fa48("11417") ? true : (stryCov_9fa48("11417", "11418", "11419"), meta.config.allowMultipleBadges === 1);
    topicData.privateUploads = stryMutAct_9fa48("11422") ? meta.config.privateUploads !== 1 : stryMutAct_9fa48("11421") ? false : stryMutAct_9fa48("11420") ? true : (stryCov_9fa48("11420", "11421", "11422"), meta.config.privateUploads === 1);
    topicData.showPostPreviewsOnHover = stryMutAct_9fa48("11425") ? meta.config.showPostPreviewsOnHover !== 1 : stryMutAct_9fa48("11424") ? false : stryMutAct_9fa48("11423") ? true : (stryCov_9fa48("11423", "11424", "11425"), meta.config.showPostPreviewsOnHover === 1);
    topicData.rssFeedUrl = stryMutAct_9fa48("11426") ? `` : (stryCov_9fa48("11426"), `${relative_path}/topic/${topicData.tid}.rss`);
    if (stryMutAct_9fa48("11428") ? false : stryMutAct_9fa48("11427") ? true : (stryCov_9fa48("11427", "11428"), req.loggedIn)) {
      if (stryMutAct_9fa48("11429")) {
        {}
      } else {
        stryCov_9fa48("11429");
        topicData.rssFeedUrl += stryMutAct_9fa48("11430") ? `` : (stryCov_9fa48("11430"), `?uid=${req.uid}&token=${rssToken}`);
      }
    }
    topicData.postIndex = postIndex;
    await Promise.all(stryMutAct_9fa48("11431") ? [] : (stryCov_9fa48("11431"), [buildBreadcrumbs(topicData), addOldCategory(topicData, userPrivileges), addTags(topicData, req, res), incrementViewCount(req, tid), markAsRead(req, tid), analytics.increment(stryMutAct_9fa48("11432") ? [] : (stryCov_9fa48("11432"), [stryMutAct_9fa48("11433") ? `` : (stryCov_9fa48("11433"), `pageviews:byCid:${topicData.category.cid}`)]))]));
    topicData.pagination = pagination.create(currentPage, pageCount, req.query);
    topicData.pagination.rel.forEach(rel => {
      if (stryMutAct_9fa48("11434")) {
        {}
      } else {
        stryCov_9fa48("11434");
        rel.href = stryMutAct_9fa48("11435") ? `` : (stryCov_9fa48("11435"), `${url}/topic/${topicData.slug}${rel.href}`);
        res.locals.linkTags.push(rel);
      }
    });
    res.render(stryMutAct_9fa48("11436") ? "" : (stryCov_9fa48("11436"), 'topic'), topicData);
  }
};
function generateQueryString(query) {
  if (stryMutAct_9fa48("11437")) {
    {}
  } else {
    stryCov_9fa48("11437");
    const qString = qs.stringify(query);
    return qString.length ? stryMutAct_9fa48("11438") ? `` : (stryCov_9fa48("11438"), `?${qString}`) : stryMutAct_9fa48("11439") ? "Stryker was here!" : (stryCov_9fa48("11439"), '');
  }
}
function calculatePageFromIndex(postIndex, settings) {
  if (stryMutAct_9fa48("11440")) {
    {}
  } else {
    stryCov_9fa48("11440");
    return stryMutAct_9fa48("11441") ? 1 - Math.floor((postIndex - 1) / settings.postsPerPage) : (stryCov_9fa48("11441"), 1 + Math.floor(stryMutAct_9fa48("11442") ? (postIndex - 1) * settings.postsPerPage : (stryCov_9fa48("11442"), (stryMutAct_9fa48("11443") ? postIndex + 1 : (stryCov_9fa48("11443"), postIndex - 1)) / settings.postsPerPage)));
  }
}
function calculateStartStop(page, postIndex, settings) {
  if (stryMutAct_9fa48("11444")) {
    {}
  } else {
    stryCov_9fa48("11444");
    let startSkip = 0;
    if (stryMutAct_9fa48("11447") ? false : stryMutAct_9fa48("11446") ? true : stryMutAct_9fa48("11445") ? settings.usePagination : (stryCov_9fa48("11445", "11446", "11447"), !settings.usePagination)) {
      if (stryMutAct_9fa48("11448")) {
        {}
      } else {
        stryCov_9fa48("11448");
        if (stryMutAct_9fa48("11452") ? postIndex <= 1 : stryMutAct_9fa48("11451") ? postIndex >= 1 : stryMutAct_9fa48("11450") ? false : stryMutAct_9fa48("11449") ? true : (stryCov_9fa48("11449", "11450", "11451", "11452"), postIndex > 1)) {
          if (stryMutAct_9fa48("11453")) {
            {}
          } else {
            stryCov_9fa48("11453");
            page = 1;
          }
        }
        startSkip = Math.max(0, stryMutAct_9fa48("11454") ? postIndex + Math.ceil(settings.postsPerPage / 2) : (stryCov_9fa48("11454"), postIndex - Math.ceil(stryMutAct_9fa48("11455") ? settings.postsPerPage * 2 : (stryCov_9fa48("11455"), settings.postsPerPage / 2))));
      }
    }
    const start = stryMutAct_9fa48("11456") ? (page - 1) * settings.postsPerPage - startSkip : (stryCov_9fa48("11456"), (stryMutAct_9fa48("11457") ? (page - 1) / settings.postsPerPage : (stryCov_9fa48("11457"), (stryMutAct_9fa48("11458") ? page + 1 : (stryCov_9fa48("11458"), page - 1)) * settings.postsPerPage)) + startSkip);
    const stop = stryMutAct_9fa48("11459") ? start + settings.postsPerPage + 1 : (stryCov_9fa48("11459"), (stryMutAct_9fa48("11460") ? start - settings.postsPerPage : (stryCov_9fa48("11460"), start + settings.postsPerPage)) - 1);
    return stryMutAct_9fa48("11461") ? {} : (stryCov_9fa48("11461"), {
      start: Math.max(0, start),
      stop: Math.max(0, stop)
    });
  }
}
async function incrementViewCount(req, tid) {
  if (stryMutAct_9fa48("11462")) {
    {}
  } else {
    stryCov_9fa48("11462");
    const allow = stryMutAct_9fa48("11465") ? req.uid > 0 && meta.config.guestsIncrementTopicViews && req.uid === 0 : stryMutAct_9fa48("11464") ? false : stryMutAct_9fa48("11463") ? true : (stryCov_9fa48("11463", "11464", "11465"), (stryMutAct_9fa48("11468") ? req.uid <= 0 : stryMutAct_9fa48("11467") ? req.uid >= 0 : stryMutAct_9fa48("11466") ? false : (stryCov_9fa48("11466", "11467", "11468"), req.uid > 0)) || (stryMutAct_9fa48("11470") ? meta.config.guestsIncrementTopicViews || req.uid === 0 : stryMutAct_9fa48("11469") ? false : (stryCov_9fa48("11469", "11470"), meta.config.guestsIncrementTopicViews && (stryMutAct_9fa48("11472") ? req.uid !== 0 : stryMutAct_9fa48("11471") ? true : (stryCov_9fa48("11471", "11472"), req.uid === 0)))));
    if (stryMutAct_9fa48("11474") ? false : stryMutAct_9fa48("11473") ? true : (stryCov_9fa48("11473", "11474"), allow)) {
      if (stryMutAct_9fa48("11475")) {
        {}
      } else {
        stryCov_9fa48("11475");
        req.session.tids_viewed = stryMutAct_9fa48("11478") ? req.session.tids_viewed && {} : stryMutAct_9fa48("11477") ? false : stryMutAct_9fa48("11476") ? true : (stryCov_9fa48("11476", "11477", "11478"), req.session.tids_viewed || {});
        const now = Date.now();
        const interval = stryMutAct_9fa48("11479") ? meta.config.incrementTopicViewsInterval / 60000 : (stryCov_9fa48("11479"), meta.config.incrementTopicViewsInterval * 60000);
        if (stryMutAct_9fa48("11482") ? !req.session.tids_viewed[tid] && req.session.tids_viewed[tid] < now - interval : stryMutAct_9fa48("11481") ? false : stryMutAct_9fa48("11480") ? true : (stryCov_9fa48("11480", "11481", "11482"), (stryMutAct_9fa48("11483") ? req.session.tids_viewed[tid] : (stryCov_9fa48("11483"), !req.session.tids_viewed[tid])) || (stryMutAct_9fa48("11486") ? req.session.tids_viewed[tid] >= now - interval : stryMutAct_9fa48("11485") ? req.session.tids_viewed[tid] <= now - interval : stryMutAct_9fa48("11484") ? false : (stryCov_9fa48("11484", "11485", "11486"), req.session.tids_viewed[tid] < (stryMutAct_9fa48("11487") ? now + interval : (stryCov_9fa48("11487"), now - interval)))))) {
          if (stryMutAct_9fa48("11488")) {
            {}
          } else {
            stryCov_9fa48("11488");
            await topics.increaseViewCount(tid);
            req.session.tids_viewed[tid] = now;
          }
        }
      }
    }
  }
}
async function markAsRead(req, tid) {
  if (stryMutAct_9fa48("11489")) {
    {}
  } else {
    stryCov_9fa48("11489");
    if (stryMutAct_9fa48("11491") ? false : stryMutAct_9fa48("11490") ? true : (stryCov_9fa48("11490", "11491"), req.loggedIn)) {
      if (stryMutAct_9fa48("11492")) {
        {}
      } else {
        stryCov_9fa48("11492");
        const markedRead = await topics.markAsRead(stryMutAct_9fa48("11493") ? [] : (stryCov_9fa48("11493"), [tid]), req.uid);
        const promises = stryMutAct_9fa48("11494") ? [] : (stryCov_9fa48("11494"), [topics.markTopicNotificationsRead(stryMutAct_9fa48("11495") ? [] : (stryCov_9fa48("11495"), [tid]), req.uid)]);
        if (stryMutAct_9fa48("11497") ? false : stryMutAct_9fa48("11496") ? true : (stryCov_9fa48("11496", "11497"), markedRead)) {
          if (stryMutAct_9fa48("11498")) {
            {}
          } else {
            stryCov_9fa48("11498");
            promises.push(topics.pushUnreadCount(req.uid));
          }
        }
        await Promise.all(promises);
      }
    }
  }
}
async function buildBreadcrumbs(topicData) {
  if (stryMutAct_9fa48("11499")) {
    {}
  } else {
    stryCov_9fa48("11499");
    const breadcrumbs = stryMutAct_9fa48("11500") ? [] : (stryCov_9fa48("11500"), [stryMutAct_9fa48("11501") ? {} : (stryCov_9fa48("11501"), {
      text: topicData.category.name,
      url: stryMutAct_9fa48("11502") ? `` : (stryCov_9fa48("11502"), `${relative_path}/category/${topicData.category.slug}`),
      cid: topicData.category.cid
    }), stryMutAct_9fa48("11503") ? {} : (stryCov_9fa48("11503"), {
      text: topicData.title
    })]);
    const parentCrumbs = await helpers.buildCategoryBreadcrumbs(topicData.category.parentCid);
    topicData.breadcrumbs = parentCrumbs.concat(breadcrumbs);
  }
}
async function addOldCategory(topicData, userPrivileges) {
  if (stryMutAct_9fa48("11504")) {
    {}
  } else {
    stryCov_9fa48("11504");
    if (stryMutAct_9fa48("11507") ? userPrivileges.isAdminOrMod || topicData.oldCid : stryMutAct_9fa48("11506") ? false : stryMutAct_9fa48("11505") ? true : (stryCov_9fa48("11505", "11506", "11507"), userPrivileges.isAdminOrMod && topicData.oldCid)) {
      if (stryMutAct_9fa48("11508")) {
        {}
      } else {
        stryCov_9fa48("11508");
        topicData.oldCategory = await categories.getCategoryFields(topicData.oldCid, stryMutAct_9fa48("11509") ? [] : (stryCov_9fa48("11509"), [stryMutAct_9fa48("11510") ? "" : (stryCov_9fa48("11510"), 'cid'), stryMutAct_9fa48("11511") ? "" : (stryCov_9fa48("11511"), 'name'), stryMutAct_9fa48("11512") ? "" : (stryCov_9fa48("11512"), 'icon'), stryMutAct_9fa48("11513") ? "" : (stryCov_9fa48("11513"), 'bgColor'), stryMutAct_9fa48("11514") ? "" : (stryCov_9fa48("11514"), 'color'), stryMutAct_9fa48("11515") ? "" : (stryCov_9fa48("11515"), 'slug')]));
      }
    }
  }
}
async function addTags(topicData, req, res) {
  if (stryMutAct_9fa48("11516")) {
    {}
  } else {
    stryCov_9fa48("11516");
    const postIndex = stryMutAct_9fa48("11519") ? parseInt(req.params.post_index, 10) && 0 : stryMutAct_9fa48("11518") ? false : stryMutAct_9fa48("11517") ? true : (stryCov_9fa48("11517", "11518", "11519"), parseInt(req.params.post_index, 10) || 0);
    const postAtIndex = topicData.posts.find(stryMutAct_9fa48("11520") ? () => undefined : (stryCov_9fa48("11520"), p => stryMutAct_9fa48("11523") ? parseInt(p.index, 10) !== parseInt(Math.max(0, postIndex - 1), 10) : stryMutAct_9fa48("11522") ? false : stryMutAct_9fa48("11521") ? true : (stryCov_9fa48("11521", "11522", "11523"), parseInt(p.index, 10) === parseInt(Math.max(0, stryMutAct_9fa48("11524") ? postIndex + 1 : (stryCov_9fa48("11524"), postIndex - 1)), 10))));
    let description = stryMutAct_9fa48("11525") ? "Stryker was here!" : (stryCov_9fa48("11525"), '');
    if (stryMutAct_9fa48("11528") ? postAtIndex || postAtIndex.content : stryMutAct_9fa48("11527") ? false : stryMutAct_9fa48("11526") ? true : (stryCov_9fa48("11526", "11527", "11528"), postAtIndex && postAtIndex.content)) {
      if (stryMutAct_9fa48("11529")) {
        {}
      } else {
        stryCov_9fa48("11529");
        description = utils.stripHTMLTags(utils.decodeHTMLEntities(postAtIndex.content));
      }
    }
    if (stryMutAct_9fa48("11533") ? description.length <= 255 : stryMutAct_9fa48("11532") ? description.length >= 255 : stryMutAct_9fa48("11531") ? false : stryMutAct_9fa48("11530") ? true : (stryCov_9fa48("11530", "11531", "11532", "11533"), description.length > 255)) {
      if (stryMutAct_9fa48("11534")) {
        {}
      } else {
        stryCov_9fa48("11534");
        description = stryMutAct_9fa48("11535") ? `` : (stryCov_9fa48("11535"), `${stryMutAct_9fa48("11536") ? description : (stryCov_9fa48("11536"), description.slice(0, 255))}...`);
      }
    }
    description = description.replace(/\n/g, stryMutAct_9fa48("11537") ? "" : (stryCov_9fa48("11537"), ' '));
    res.locals.metaTags = stryMutAct_9fa48("11538") ? [] : (stryCov_9fa48("11538"), [stryMutAct_9fa48("11539") ? {} : (stryCov_9fa48("11539"), {
      name: stryMutAct_9fa48("11540") ? "" : (stryCov_9fa48("11540"), 'title'),
      content: topicData.titleRaw
    }), stryMutAct_9fa48("11541") ? {} : (stryCov_9fa48("11541"), {
      name: stryMutAct_9fa48("11542") ? "" : (stryCov_9fa48("11542"), 'description'),
      content: description
    }), stryMutAct_9fa48("11543") ? {} : (stryCov_9fa48("11543"), {
      property: stryMutAct_9fa48("11544") ? "" : (stryCov_9fa48("11544"), 'og:title'),
      content: topicData.titleRaw
    }), stryMutAct_9fa48("11545") ? {} : (stryCov_9fa48("11545"), {
      property: stryMutAct_9fa48("11546") ? "" : (stryCov_9fa48("11546"), 'og:description'),
      content: description
    }), stryMutAct_9fa48("11547") ? {} : (stryCov_9fa48("11547"), {
      property: stryMutAct_9fa48("11548") ? "" : (stryCov_9fa48("11548"), 'og:type'),
      content: stryMutAct_9fa48("11549") ? "" : (stryCov_9fa48("11549"), 'article')
    }), stryMutAct_9fa48("11550") ? {} : (stryCov_9fa48("11550"), {
      property: stryMutAct_9fa48("11551") ? "" : (stryCov_9fa48("11551"), 'article:published_time'),
      content: utils.toISOString(topicData.timestamp)
    }), stryMutAct_9fa48("11552") ? {} : (stryCov_9fa48("11552"), {
      property: stryMutAct_9fa48("11553") ? "" : (stryCov_9fa48("11553"), 'article:modified_time'),
      content: utils.toISOString(topicData.lastposttime)
    }), stryMutAct_9fa48("11554") ? {} : (stryCov_9fa48("11554"), {
      property: stryMutAct_9fa48("11555") ? "" : (stryCov_9fa48("11555"), 'article:section'),
      content: topicData.category ? topicData.category.name : stryMutAct_9fa48("11556") ? "Stryker was here!" : (stryCov_9fa48("11556"), '')
    })]);
    await addOGImageTags(res, topicData, postAtIndex);
    res.locals.linkTags = stryMutAct_9fa48("11557") ? [] : (stryCov_9fa48("11557"), [stryMutAct_9fa48("11558") ? {} : (stryCov_9fa48("11558"), {
      rel: stryMutAct_9fa48("11559") ? "" : (stryCov_9fa48("11559"), 'canonical'),
      href: stryMutAct_9fa48("11560") ? `` : (stryCov_9fa48("11560"), `${url}/topic/${topicData.slug}`)
    })]);
    if (stryMutAct_9fa48("11563") ? false : stryMutAct_9fa48("11562") ? true : stryMutAct_9fa48("11561") ? topicData['feeds:disableRSS'] : (stryCov_9fa48("11561", "11562", "11563"), !topicData[stryMutAct_9fa48("11564") ? "" : (stryCov_9fa48("11564"), 'feeds:disableRSS')])) {
      if (stryMutAct_9fa48("11565")) {
        {}
      } else {
        stryCov_9fa48("11565");
        res.locals.linkTags.push(stryMutAct_9fa48("11566") ? {} : (stryCov_9fa48("11566"), {
          rel: stryMutAct_9fa48("11567") ? "" : (stryCov_9fa48("11567"), 'alternate'),
          type: stryMutAct_9fa48("11568") ? "" : (stryCov_9fa48("11568"), 'application/rss+xml'),
          href: topicData.rssFeedUrl
        }));
      }
    }
    if (stryMutAct_9fa48("11570") ? false : stryMutAct_9fa48("11569") ? true : (stryCov_9fa48("11569", "11570"), topicData.category)) {
      if (stryMutAct_9fa48("11571")) {
        {}
      } else {
        stryCov_9fa48("11571");
        res.locals.linkTags.push(stryMutAct_9fa48("11572") ? {} : (stryCov_9fa48("11572"), {
          rel: stryMutAct_9fa48("11573") ? "" : (stryCov_9fa48("11573"), 'up'),
          href: stryMutAct_9fa48("11574") ? `` : (stryCov_9fa48("11574"), `${url}/category/${topicData.category.slug}`)
        }));
      }
    }
  }
}
async function addOGImageTags(res, topicData, postAtIndex) {
  if (stryMutAct_9fa48("11575")) {
    {}
  } else {
    stryCov_9fa48("11575");
    const uploads = postAtIndex ? await posts.uploads.listWithSizes(postAtIndex.pid) : stryMutAct_9fa48("11576") ? ["Stryker was here"] : (stryCov_9fa48("11576"), []);
    const images = uploads.map(upload => {
      if (stryMutAct_9fa48("11577")) {
        {}
      } else {
        stryCov_9fa48("11577");
        upload.name = stryMutAct_9fa48("11578") ? `` : (stryCov_9fa48("11578"), `${stryMutAct_9fa48("11579") ? url - upload_url : (stryCov_9fa48("11579"), url + upload_url)}/${upload.name}`);
        return upload;
      }
    });
    if (stryMutAct_9fa48("11581") ? false : stryMutAct_9fa48("11580") ? true : (stryCov_9fa48("11580", "11581"), topicData.thumbs)) {
      if (stryMutAct_9fa48("11582")) {
        {}
      } else {
        stryCov_9fa48("11582");
        const path = require('path');
        const thumbs = stryMutAct_9fa48("11583") ? topicData.thumbs : (stryCov_9fa48("11583"), topicData.thumbs.filter(stryMutAct_9fa48("11584") ? () => undefined : (stryCov_9fa48("11584"), t => stryMutAct_9fa48("11587") ? t || images.every(img => path.normalize(img.name) !== path.normalize(url + t.url)) : stryMutAct_9fa48("11586") ? false : stryMutAct_9fa48("11585") ? true : (stryCov_9fa48("11585", "11586", "11587"), t && (stryMutAct_9fa48("11588") ? images.some(img => path.normalize(img.name) !== path.normalize(url + t.url)) : (stryCov_9fa48("11588"), images.every(stryMutAct_9fa48("11589") ? () => undefined : (stryCov_9fa48("11589"), img => stryMutAct_9fa48("11592") ? path.normalize(img.name) === path.normalize(url + t.url) : stryMutAct_9fa48("11591") ? false : stryMutAct_9fa48("11590") ? true : (stryCov_9fa48("11590", "11591", "11592"), path.normalize(img.name) !== path.normalize(stryMutAct_9fa48("11593") ? url - t.url : (stryCov_9fa48("11593"), url + t.url)))))))))));
        images.push(...thumbs.map(stryMutAct_9fa48("11594") ? () => undefined : (stryCov_9fa48("11594"), thumbObj => stryMutAct_9fa48("11595") ? {} : (stryCov_9fa48("11595"), {
          name: stryMutAct_9fa48("11596") ? url - thumbObj.url : (stryCov_9fa48("11596"), url + thumbObj.url)
        }))));
      }
    }
    if (stryMutAct_9fa48("11599") ? topicData.category.backgroundImage || !postAtIndex || !postAtIndex.index : stryMutAct_9fa48("11598") ? false : stryMutAct_9fa48("11597") ? true : (stryCov_9fa48("11597", "11598", "11599"), topicData.category.backgroundImage && (stryMutAct_9fa48("11601") ? !postAtIndex && !postAtIndex.index : stryMutAct_9fa48("11600") ? true : (stryCov_9fa48("11600", "11601"), (stryMutAct_9fa48("11602") ? postAtIndex : (stryCov_9fa48("11602"), !postAtIndex)) || (stryMutAct_9fa48("11603") ? postAtIndex.index : (stryCov_9fa48("11603"), !postAtIndex.index)))))) {
      if (stryMutAct_9fa48("11604")) {
        {}
      } else {
        stryCov_9fa48("11604");
        images.push(topicData.category.backgroundImage);
      }
    }
    if (stryMutAct_9fa48("11607") ? postAtIndex && postAtIndex.user || postAtIndex.user.picture : stryMutAct_9fa48("11606") ? false : stryMutAct_9fa48("11605") ? true : (stryCov_9fa48("11605", "11606", "11607"), (stryMutAct_9fa48("11609") ? postAtIndex || postAtIndex.user : stryMutAct_9fa48("11608") ? true : (stryCov_9fa48("11608", "11609"), postAtIndex && postAtIndex.user)) && postAtIndex.user.picture)) {
      if (stryMutAct_9fa48("11610")) {
        {}
      } else {
        stryCov_9fa48("11610");
        images.push(postAtIndex.user.picture);
      }
    }
    images.forEach(stryMutAct_9fa48("11611") ? () => undefined : (stryCov_9fa48("11611"), path => addOGImageTag(res, path)));
  }
}
function addOGImageTag(res, image) {
  if (stryMutAct_9fa48("11612")) {
    {}
  } else {
    stryCov_9fa48("11612");
    let imageUrl;
    if (stryMutAct_9fa48("11615") ? typeof image === 'string' || !image.startsWith('http') : stryMutAct_9fa48("11614") ? false : stryMutAct_9fa48("11613") ? true : (stryCov_9fa48("11613", "11614", "11615"), (stryMutAct_9fa48("11617") ? typeof image !== 'string' : stryMutAct_9fa48("11616") ? true : (stryCov_9fa48("11616", "11617"), typeof image === (stryMutAct_9fa48("11618") ? "" : (stryCov_9fa48("11618"), 'string')))) && (stryMutAct_9fa48("11619") ? image.startsWith('http') : (stryCov_9fa48("11619"), !(stryMutAct_9fa48("11620") ? image.endsWith('http') : (stryCov_9fa48("11620"), image.startsWith(stryMutAct_9fa48("11621") ? "" : (stryCov_9fa48("11621"), 'http')))))))) {
      if (stryMutAct_9fa48("11622")) {
        {}
      } else {
        stryCov_9fa48("11622");
        imageUrl = stryMutAct_9fa48("11623") ? url - image.replace(new RegExp(`^${relative_path}`), '') : (stryCov_9fa48("11623"), url + image.replace(new RegExp(stryMutAct_9fa48("11624") ? `` : (stryCov_9fa48("11624"), `^${relative_path}`)), stryMutAct_9fa48("11625") ? "Stryker was here!" : (stryCov_9fa48("11625"), '')));
      }
    } else if (stryMutAct_9fa48("11628") ? typeof image !== 'object' : stryMutAct_9fa48("11627") ? false : stryMutAct_9fa48("11626") ? true : (stryCov_9fa48("11626", "11627", "11628"), typeof image === (stryMutAct_9fa48("11629") ? "" : (stryCov_9fa48("11629"), 'object')))) {
      if (stryMutAct_9fa48("11630")) {
        {}
      } else {
        stryCov_9fa48("11630");
        imageUrl = image.name;
      }
    } else {
      if (stryMutAct_9fa48("11631")) {
        {}
      } else {
        stryCov_9fa48("11631");
        imageUrl = image;
      }
    }
    res.locals.metaTags.push(stryMutAct_9fa48("11632") ? {} : (stryCov_9fa48("11632"), {
      property: stryMutAct_9fa48("11633") ? "" : (stryCov_9fa48("11633"), 'og:image'),
      content: imageUrl,
      noEscape: stryMutAct_9fa48("11634") ? false : (stryCov_9fa48("11634"), true)
    }), stryMutAct_9fa48("11635") ? {} : (stryCov_9fa48("11635"), {
      property: stryMutAct_9fa48("11636") ? "" : (stryCov_9fa48("11636"), 'og:image:url'),
      content: imageUrl,
      noEscape: stryMutAct_9fa48("11637") ? false : (stryCov_9fa48("11637"), true)
    }));
    if (stryMutAct_9fa48("11640") ? typeof image === 'object' && image.width || image.height : stryMutAct_9fa48("11639") ? false : stryMutAct_9fa48("11638") ? true : (stryCov_9fa48("11638", "11639", "11640"), (stryMutAct_9fa48("11642") ? typeof image === 'object' || image.width : stryMutAct_9fa48("11641") ? true : (stryCov_9fa48("11641", "11642"), (stryMutAct_9fa48("11644") ? typeof image !== 'object' : stryMutAct_9fa48("11643") ? true : (stryCov_9fa48("11643", "11644"), typeof image === (stryMutAct_9fa48("11645") ? "" : (stryCov_9fa48("11645"), 'object')))) && image.width)) && image.height)) {
      if (stryMutAct_9fa48("11646")) {
        {}
      } else {
        stryCov_9fa48("11646");
        res.locals.metaTags.push(stryMutAct_9fa48("11647") ? {} : (stryCov_9fa48("11647"), {
          property: stryMutAct_9fa48("11648") ? "" : (stryCov_9fa48("11648"), 'og:image:width'),
          content: String(image.width)
        }), stryMutAct_9fa48("11649") ? {} : (stryCov_9fa48("11649"), {
          property: stryMutAct_9fa48("11650") ? "" : (stryCov_9fa48("11650"), 'og:image:height'),
          content: String(image.height)
        }));
      }
    }
  }
}
topicsController.teaser = async function (req, res, next) {
  if (stryMutAct_9fa48("11651")) {
    {}
  } else {
    stryCov_9fa48("11651");
    const tid = req.params.topic_id;
    if (stryMutAct_9fa48("11654") ? false : stryMutAct_9fa48("11653") ? true : stryMutAct_9fa48("11652") ? utils.isNumber(tid) : (stryCov_9fa48("11652", "11653", "11654"), !utils.isNumber(tid))) {
      if (stryMutAct_9fa48("11655")) {
        {}
      } else {
        stryCov_9fa48("11655");
        return next();
      }
    }
    const canRead = await privileges.topics.can(stryMutAct_9fa48("11656") ? "" : (stryCov_9fa48("11656"), 'topics:read'), tid, req.uid);
    if (stryMutAct_9fa48("11659") ? false : stryMutAct_9fa48("11658") ? true : stryMutAct_9fa48("11657") ? canRead : (stryCov_9fa48("11657", "11658", "11659"), !canRead)) {
      if (stryMutAct_9fa48("11660")) {
        {}
      } else {
        stryCov_9fa48("11660");
        return res.status(403).json(stryMutAct_9fa48("11661") ? "" : (stryCov_9fa48("11661"), '[[error:no-privileges]]'));
      }
    }
    const pid = await topics.getLatestUndeletedPid(tid);
    if (stryMutAct_9fa48("11664") ? false : stryMutAct_9fa48("11663") ? true : stryMutAct_9fa48("11662") ? pid : (stryCov_9fa48("11662", "11663", "11664"), !pid)) {
      if (stryMutAct_9fa48("11665")) {
        {}
      } else {
        stryCov_9fa48("11665");
        return res.status(404).json(stryMutAct_9fa48("11666") ? "" : (stryCov_9fa48("11666"), 'not-found'));
      }
    }
    const postData = await posts.getPostSummaryByPids(stryMutAct_9fa48("11667") ? [] : (stryCov_9fa48("11667"), [pid]), req.uid, stryMutAct_9fa48("11668") ? {} : (stryCov_9fa48("11668"), {
      stripTags: stryMutAct_9fa48("11669") ? true : (stryCov_9fa48("11669"), false)
    }));
    if (stryMutAct_9fa48("11672") ? false : stryMutAct_9fa48("11671") ? true : stryMutAct_9fa48("11670") ? postData.length : (stryCov_9fa48("11670", "11671", "11672"), !postData.length)) {
      if (stryMutAct_9fa48("11673")) {
        {}
      } else {
        stryCov_9fa48("11673");
        return res.status(404).json(stryMutAct_9fa48("11674") ? "" : (stryCov_9fa48("11674"), 'not-found'));
      }
    }
    res.json(postData[0]);
  }
};
topicsController.pagination = async function (req, res, next) {
  if (stryMutAct_9fa48("11675")) {
    {}
  } else {
    stryCov_9fa48("11675");
    const tid = req.params.topic_id;
    const currentPage = stryMutAct_9fa48("11678") ? parseInt(req.query.page, 10) && 1 : stryMutAct_9fa48("11677") ? false : stryMutAct_9fa48("11676") ? true : (stryCov_9fa48("11676", "11677", "11678"), parseInt(req.query.page, 10) || 1);
    if (stryMutAct_9fa48("11681") ? false : stryMutAct_9fa48("11680") ? true : stryMutAct_9fa48("11679") ? utils.isNumber(tid) : (stryCov_9fa48("11679", "11680", "11681"), !utils.isNumber(tid))) {
      if (stryMutAct_9fa48("11682")) {
        {}
      } else {
        stryCov_9fa48("11682");
        return next();
      }
    }
    const [userPrivileges, settings, topic] = await Promise.all(stryMutAct_9fa48("11683") ? [] : (stryCov_9fa48("11683"), [privileges.topics.get(tid, req.uid), user.getSettings(req.uid), topics.getTopicData(tid)]));
    if (stryMutAct_9fa48("11686") ? false : stryMutAct_9fa48("11685") ? true : stryMutAct_9fa48("11684") ? topic : (stryCov_9fa48("11684", "11685", "11686"), !topic)) {
      if (stryMutAct_9fa48("11687")) {
        {}
      } else {
        stryCov_9fa48("11687");
        return next();
      }
    }
    if (stryMutAct_9fa48("11690") ? !userPrivileges.read && !privileges.topics.canViewDeletedScheduled(topic, userPrivileges) : stryMutAct_9fa48("11689") ? false : stryMutAct_9fa48("11688") ? true : (stryCov_9fa48("11688", "11689", "11690"), (stryMutAct_9fa48("11691") ? userPrivileges.read : (stryCov_9fa48("11691"), !userPrivileges.read)) || (stryMutAct_9fa48("11692") ? privileges.topics.canViewDeletedScheduled(topic, userPrivileges) : (stryCov_9fa48("11692"), !privileges.topics.canViewDeletedScheduled(topic, userPrivileges))))) {
      if (stryMutAct_9fa48("11693")) {
        {}
      } else {
        stryCov_9fa48("11693");
        return helpers.notAllowed(req, res);
      }
    }
    const postCount = topic.postcount;
    const pageCount = Math.max(1, Math.ceil(stryMutAct_9fa48("11694") ? postCount * settings.postsPerPage : (stryCov_9fa48("11694"), postCount / settings.postsPerPage)));
    const paginationData = pagination.create(currentPage, pageCount);
    paginationData.rel.forEach(rel => {
      if (stryMutAct_9fa48("11695")) {
        {}
      } else {
        stryCov_9fa48("11695");
        rel.href = stryMutAct_9fa48("11696") ? `` : (stryCov_9fa48("11696"), `${url}/topic/${topic.slug}${rel.href}`);
      }
    });
    res.json(stryMutAct_9fa48("11697") ? {} : (stryCov_9fa48("11697"), {
      pagination: paginationData
    }));
  }
};