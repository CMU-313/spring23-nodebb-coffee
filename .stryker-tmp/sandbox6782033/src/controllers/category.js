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
const validator = require('validator');
const qs = require('querystring');
const db = require('../database');
const privileges = require('../privileges');
const user = require('../user');
const categories = require('../categories');
const meta = require('../meta');
const pagination = require('../pagination');
const helpers = require('./helpers');
const utils = require('../utils');
const translator = require('../translator');
const analytics = require('../analytics');
const categoryController = module.exports;
const url = nconf.get(stryMutAct_9fa48("8890") ? "" : (stryCov_9fa48("8890"), 'url'));
const relative_path = nconf.get(stryMutAct_9fa48("8891") ? "" : (stryCov_9fa48("8891"), 'relative_path'));
categoryController.get = async function (req, res, next) {
  if (stryMutAct_9fa48("8892")) {
    {}
  } else {
    stryCov_9fa48("8892");
    const cid = req.params.category_id;
    let currentPage = stryMutAct_9fa48("8895") ? parseInt(req.query.page, 10) && 1 : stryMutAct_9fa48("8894") ? false : stryMutAct_9fa48("8893") ? true : (stryCov_9fa48("8893", "8894", "8895"), parseInt(req.query.page, 10) || 1);
    let topicIndex = utils.isNumber(req.params.topic_index) ? stryMutAct_9fa48("8896") ? parseInt(req.params.topic_index, 10) + 1 : (stryCov_9fa48("8896"), parseInt(req.params.topic_index, 10) - 1) : 0;
    if (stryMutAct_9fa48("8899") ? req.params.topic_index && !utils.isNumber(req.params.topic_index) && !utils.isNumber(cid) : stryMutAct_9fa48("8898") ? false : stryMutAct_9fa48("8897") ? true : (stryCov_9fa48("8897", "8898", "8899"), (stryMutAct_9fa48("8901") ? req.params.topic_index || !utils.isNumber(req.params.topic_index) : stryMutAct_9fa48("8900") ? false : (stryCov_9fa48("8900", "8901"), req.params.topic_index && (stryMutAct_9fa48("8902") ? utils.isNumber(req.params.topic_index) : (stryCov_9fa48("8902"), !utils.isNumber(req.params.topic_index))))) || (stryMutAct_9fa48("8903") ? utils.isNumber(cid) : (stryCov_9fa48("8903"), !utils.isNumber(cid))))) {
      if (stryMutAct_9fa48("8904")) {
        {}
      } else {
        stryCov_9fa48("8904");
        return next();
      }
    }
    const [categoryFields, userPrivileges, userSettings, rssToken] = await Promise.all(stryMutAct_9fa48("8905") ? [] : (stryCov_9fa48("8905"), [categories.getCategoryFields(cid, stryMutAct_9fa48("8906") ? [] : (stryCov_9fa48("8906"), [stryMutAct_9fa48("8907") ? "" : (stryCov_9fa48("8907"), 'slug'), stryMutAct_9fa48("8908") ? "" : (stryCov_9fa48("8908"), 'disabled'), stryMutAct_9fa48("8909") ? "" : (stryCov_9fa48("8909"), 'link')])), privileges.categories.get(cid, req.uid), user.getSettings(req.uid), user.auth.getFeedToken(req.uid)]));
    if (stryMutAct_9fa48("8912") ? (!categoryFields.slug || categoryFields && categoryFields.disabled) && userSettings.usePagination && currentPage < 1 : stryMutAct_9fa48("8911") ? false : stryMutAct_9fa48("8910") ? true : (stryCov_9fa48("8910", "8911", "8912"), (stryMutAct_9fa48("8914") ? !categoryFields.slug && categoryFields && categoryFields.disabled : stryMutAct_9fa48("8913") ? false : (stryCov_9fa48("8913", "8914"), (stryMutAct_9fa48("8915") ? categoryFields.slug : (stryCov_9fa48("8915"), !categoryFields.slug)) || (stryMutAct_9fa48("8917") ? categoryFields || categoryFields.disabled : stryMutAct_9fa48("8916") ? false : (stryCov_9fa48("8916", "8917"), categoryFields && categoryFields.disabled)))) || (stryMutAct_9fa48("8919") ? userSettings.usePagination || currentPage < 1 : stryMutAct_9fa48("8918") ? false : (stryCov_9fa48("8918", "8919"), userSettings.usePagination && (stryMutAct_9fa48("8922") ? currentPage >= 1 : stryMutAct_9fa48("8921") ? currentPage <= 1 : stryMutAct_9fa48("8920") ? true : (stryCov_9fa48("8920", "8921", "8922"), currentPage < 1)))))) {
      if (stryMutAct_9fa48("8923")) {
        {}
      } else {
        stryCov_9fa48("8923");
        return next();
      }
    }
    if (stryMutAct_9fa48("8927") ? topicIndex >= 0 : stryMutAct_9fa48("8926") ? topicIndex <= 0 : stryMutAct_9fa48("8925") ? false : stryMutAct_9fa48("8924") ? true : (stryCov_9fa48("8924", "8925", "8926", "8927"), topicIndex < 0)) {
      if (stryMutAct_9fa48("8928")) {
        {}
      } else {
        stryCov_9fa48("8928");
        return helpers.redirect(res, stryMutAct_9fa48("8929") ? `` : (stryCov_9fa48("8929"), `/category/${categoryFields.slug}?${qs.stringify(req.query)}`));
      }
    }
    if (stryMutAct_9fa48("8932") ? false : stryMutAct_9fa48("8931") ? true : stryMutAct_9fa48("8930") ? userPrivileges.read : (stryCov_9fa48("8930", "8931", "8932"), !userPrivileges.read)) {
      if (stryMutAct_9fa48("8933")) {
        {}
      } else {
        stryCov_9fa48("8933");
        return helpers.notAllowed(req, res);
      }
    }
    if (stryMutAct_9fa48("8936") ? !res.locals.isAPI && !req.params.slug || categoryFields.slug && categoryFields.slug !== `${cid}/` : stryMutAct_9fa48("8935") ? false : stryMutAct_9fa48("8934") ? true : (stryCov_9fa48("8934", "8935", "8936"), (stryMutAct_9fa48("8938") ? !res.locals.isAPI || !req.params.slug : stryMutAct_9fa48("8937") ? true : (stryCov_9fa48("8937", "8938"), (stryMutAct_9fa48("8939") ? res.locals.isAPI : (stryCov_9fa48("8939"), !res.locals.isAPI)) && (stryMutAct_9fa48("8940") ? req.params.slug : (stryCov_9fa48("8940"), !req.params.slug)))) && (stryMutAct_9fa48("8942") ? categoryFields.slug || categoryFields.slug !== `${cid}/` : stryMutAct_9fa48("8941") ? true : (stryCov_9fa48("8941", "8942"), categoryFields.slug && (stryMutAct_9fa48("8944") ? categoryFields.slug === `${cid}/` : stryMutAct_9fa48("8943") ? true : (stryCov_9fa48("8943", "8944"), categoryFields.slug !== (stryMutAct_9fa48("8945") ? `` : (stryCov_9fa48("8945"), `${cid}/`)))))))) {
      if (stryMutAct_9fa48("8946")) {
        {}
      } else {
        stryCov_9fa48("8946");
        return helpers.redirect(res, stryMutAct_9fa48("8947") ? `` : (stryCov_9fa48("8947"), `/category/${categoryFields.slug}?${qs.stringify(req.query)}`), stryMutAct_9fa48("8948") ? false : (stryCov_9fa48("8948"), true));
      }
    }
    if (stryMutAct_9fa48("8950") ? false : stryMutAct_9fa48("8949") ? true : (stryCov_9fa48("8949", "8950"), categoryFields.link)) {
      if (stryMutAct_9fa48("8951")) {
        {}
      } else {
        stryCov_9fa48("8951");
        await db.incrObjectField(stryMutAct_9fa48("8952") ? `` : (stryCov_9fa48("8952"), `category:${cid}`), stryMutAct_9fa48("8953") ? "" : (stryCov_9fa48("8953"), 'timesClicked'));
        return helpers.redirect(res, validator.unescape(categoryFields.link));
      }
    }
    if (stryMutAct_9fa48("8956") ? false : stryMutAct_9fa48("8955") ? true : stryMutAct_9fa48("8954") ? userSettings.usePagination : (stryCov_9fa48("8954", "8955", "8956"), !userSettings.usePagination)) {
      if (stryMutAct_9fa48("8957")) {
        {}
      } else {
        stryCov_9fa48("8957");
        topicIndex = Math.max(0, stryMutAct_9fa48("8958") ? topicIndex + (Math.ceil(userSettings.topicsPerPage / 2) - 1) : (stryCov_9fa48("8958"), topicIndex - (stryMutAct_9fa48("8959") ? Math.ceil(userSettings.topicsPerPage / 2) + 1 : (stryCov_9fa48("8959"), Math.ceil(stryMutAct_9fa48("8960") ? userSettings.topicsPerPage * 2 : (stryCov_9fa48("8960"), userSettings.topicsPerPage / 2)) - 1))));
      }
    } else if (stryMutAct_9fa48("8963") ? false : stryMutAct_9fa48("8962") ? true : stryMutAct_9fa48("8961") ? req.query.page : (stryCov_9fa48("8961", "8962", "8963"), !req.query.page)) {
      if (stryMutAct_9fa48("8964")) {
        {}
      } else {
        stryCov_9fa48("8964");
        const index = Math.max(parseInt(stryMutAct_9fa48("8967") ? topicIndex && 0 : stryMutAct_9fa48("8966") ? false : stryMutAct_9fa48("8965") ? true : (stryCov_9fa48("8965", "8966", "8967"), topicIndex || 0), 10), 0);
        currentPage = Math.ceil(stryMutAct_9fa48("8968") ? (index + 1) * userSettings.topicsPerPage : (stryCov_9fa48("8968"), (stryMutAct_9fa48("8969") ? index - 1 : (stryCov_9fa48("8969"), index + 1)) / userSettings.topicsPerPage));
        topicIndex = 0;
      }
    }
    const targetUid = await user.getUidByUserslug(req.query.author);
    const start = stryMutAct_9fa48("8970") ? (currentPage - 1) * userSettings.topicsPerPage - topicIndex : (stryCov_9fa48("8970"), (stryMutAct_9fa48("8971") ? (currentPage - 1) / userSettings.topicsPerPage : (stryCov_9fa48("8971"), (stryMutAct_9fa48("8972") ? currentPage + 1 : (stryCov_9fa48("8972"), currentPage - 1)) * userSettings.topicsPerPage)) + topicIndex);
    const stop = stryMutAct_9fa48("8973") ? start + userSettings.topicsPerPage + 1 : (stryCov_9fa48("8973"), (stryMutAct_9fa48("8974") ? start - userSettings.topicsPerPage : (stryCov_9fa48("8974"), start + userSettings.topicsPerPage)) - 1);
    const categoryData = await categories.getCategoryById(stryMutAct_9fa48("8975") ? {} : (stryCov_9fa48("8975"), {
      uid: req.uid,
      cid: cid,
      start: start,
      stop: stop,
      sort: stryMutAct_9fa48("8978") ? req.query.sort && userSettings.categoryTopicSort : stryMutAct_9fa48("8977") ? false : stryMutAct_9fa48("8976") ? true : (stryCov_9fa48("8976", "8977", "8978"), req.query.sort || userSettings.categoryTopicSort),
      settings: userSettings,
      query: req.query,
      tag: req.query.tag,
      targetUid: targetUid
    }));
    if (stryMutAct_9fa48("8981") ? false : stryMutAct_9fa48("8980") ? true : stryMutAct_9fa48("8979") ? categoryData : (stryCov_9fa48("8979", "8980", "8981"), !categoryData)) {
      if (stryMutAct_9fa48("8982")) {
        {}
      } else {
        stryCov_9fa48("8982");
        return next();
      }
    }
    if (stryMutAct_9fa48("8986") ? topicIndex <= Math.max(categoryData.topic_count - 1, 0) : stryMutAct_9fa48("8985") ? topicIndex >= Math.max(categoryData.topic_count - 1, 0) : stryMutAct_9fa48("8984") ? false : stryMutAct_9fa48("8983") ? true : (stryCov_9fa48("8983", "8984", "8985", "8986"), topicIndex > Math.max(stryMutAct_9fa48("8987") ? categoryData.topic_count + 1 : (stryCov_9fa48("8987"), categoryData.topic_count - 1), 0))) {
      if (stryMutAct_9fa48("8988")) {
        {}
      } else {
        stryCov_9fa48("8988");
        return helpers.redirect(res, stryMutAct_9fa48("8989") ? `` : (stryCov_9fa48("8989"), `/category/${categoryData.slug}/${categoryData.topic_count}?${qs.stringify(req.query)}`));
      }
    }
    const pageCount = Math.max(1, Math.ceil(stryMutAct_9fa48("8990") ? categoryData.topic_count * userSettings.topicsPerPage : (stryCov_9fa48("8990"), categoryData.topic_count / userSettings.topicsPerPage)));
    if (stryMutAct_9fa48("8993") ? userSettings.usePagination || currentPage > pageCount : stryMutAct_9fa48("8992") ? false : stryMutAct_9fa48("8991") ? true : (stryCov_9fa48("8991", "8992", "8993"), userSettings.usePagination && (stryMutAct_9fa48("8996") ? currentPage <= pageCount : stryMutAct_9fa48("8995") ? currentPage >= pageCount : stryMutAct_9fa48("8994") ? true : (stryCov_9fa48("8994", "8995", "8996"), currentPage > pageCount)))) {
      if (stryMutAct_9fa48("8997")) {
        {}
      } else {
        stryCov_9fa48("8997");
        return next();
      }
    }
    categories.modifyTopicsByPrivilege(categoryData.topics, userPrivileges);
    categoryData.tagWhitelist = categories.filterTagWhitelist(categoryData.tagWhitelist, userPrivileges.isAdminOrMod);
    await buildBreadcrumbs(req, categoryData);
    if (stryMutAct_9fa48("8999") ? false : stryMutAct_9fa48("8998") ? true : (stryCov_9fa48("8998", "8999"), categoryData.children.length)) {
      if (stryMutAct_9fa48("9000")) {
        {}
      } else {
        stryCov_9fa48("9000");
        const allCategories = stryMutAct_9fa48("9001") ? ["Stryker was here"] : (stryCov_9fa48("9001"), []);
        categories.flattenCategories(allCategories, categoryData.children);
        await categories.getRecentTopicReplies(allCategories, req.uid, req.query);
        categoryData.subCategoriesLeft = Math.max(0, stryMutAct_9fa48("9002") ? categoryData.children.length + categoryData.subCategoriesPerPage : (stryCov_9fa48("9002"), categoryData.children.length - categoryData.subCategoriesPerPage));
        categoryData.hasMoreSubCategories = stryMutAct_9fa48("9006") ? categoryData.children.length <= categoryData.subCategoriesPerPage : stryMutAct_9fa48("9005") ? categoryData.children.length >= categoryData.subCategoriesPerPage : stryMutAct_9fa48("9004") ? false : stryMutAct_9fa48("9003") ? true : (stryCov_9fa48("9003", "9004", "9005", "9006"), categoryData.children.length > categoryData.subCategoriesPerPage);
        categoryData.nextSubCategoryStart = categoryData.subCategoriesPerPage;
        categoryData.children = stryMutAct_9fa48("9007") ? categoryData.children : (stryCov_9fa48("9007"), categoryData.children.slice(0, categoryData.subCategoriesPerPage));
        categoryData.children.forEach(child => {
          if (stryMutAct_9fa48("9008")) {
            {}
          } else {
            stryCov_9fa48("9008");
            if (stryMutAct_9fa48("9010") ? false : stryMutAct_9fa48("9009") ? true : (stryCov_9fa48("9009", "9010"), child)) {
              if (stryMutAct_9fa48("9011")) {
                {}
              } else {
                stryCov_9fa48("9011");
                helpers.trimChildren(child);
                helpers.setCategoryTeaser(child);
              }
            }
          }
        });
      }
    }
    categoryData.title = translator.escape(categoryData.name);
    categoryData.selectCategoryLabel = stryMutAct_9fa48("9012") ? "" : (stryCov_9fa48("9012"), '[[category:subcategories]]');
    categoryData.description = translator.escape(categoryData.description);
    categoryData.privileges = userPrivileges;
    categoryData.showSelect = userPrivileges.editable;
    categoryData.showTopicTools = userPrivileges.editable;
    categoryData.topicIndex = topicIndex;
    categoryData.rssFeedUrl = stryMutAct_9fa48("9013") ? `` : (stryCov_9fa48("9013"), `${url}/category/${categoryData.cid}.rss`);
    if (stryMutAct_9fa48("9015") ? false : stryMutAct_9fa48("9014") ? true : (stryCov_9fa48("9014", "9015"), parseInt(req.uid, 10))) {
      if (stryMutAct_9fa48("9016")) {
        {}
      } else {
        stryCov_9fa48("9016");
        categories.markAsRead(stryMutAct_9fa48("9017") ? [] : (stryCov_9fa48("9017"), [cid]), req.uid);
        categoryData.rssFeedUrl += stryMutAct_9fa48("9018") ? `` : (stryCov_9fa48("9018"), `?uid=${req.uid}&token=${rssToken}`);
      }
    }
    addTags(categoryData, res);
    categoryData[stryMutAct_9fa48("9019") ? "" : (stryCov_9fa48("9019"), 'feeds:disableRSS')] = stryMutAct_9fa48("9022") ? meta.config['feeds:disableRSS'] && 0 : stryMutAct_9fa48("9021") ? false : stryMutAct_9fa48("9020") ? true : (stryCov_9fa48("9020", "9021", "9022"), meta.config[stryMutAct_9fa48("9023") ? "" : (stryCov_9fa48("9023"), 'feeds:disableRSS')] || 0);
    categoryData[stryMutAct_9fa48("9024") ? "" : (stryCov_9fa48("9024"), 'reputation:disabled')] = meta.config[stryMutAct_9fa48("9025") ? "" : (stryCov_9fa48("9025"), 'reputation:disabled')];
    categoryData.pagination = pagination.create(currentPage, pageCount, req.query);
    categoryData.pagination.rel.forEach(rel => {
      if (stryMutAct_9fa48("9026")) {
        {}
      } else {
        stryCov_9fa48("9026");
        rel.href = stryMutAct_9fa48("9027") ? `` : (stryCov_9fa48("9027"), `${url}/category/${categoryData.slug}${rel.href}`);
        res.locals.linkTags.push(rel);
      }
    });
    analytics.increment(stryMutAct_9fa48("9028") ? [] : (stryCov_9fa48("9028"), [stryMutAct_9fa48("9029") ? `` : (stryCov_9fa48("9029"), `pageviews:byCid:${categoryData.cid}`)]));
    res.render(stryMutAct_9fa48("9030") ? "" : (stryCov_9fa48("9030"), 'category'), categoryData);
  }
};
async function buildBreadcrumbs(req, categoryData) {
  if (stryMutAct_9fa48("9031")) {
    {}
  } else {
    stryCov_9fa48("9031");
    const breadcrumbs = stryMutAct_9fa48("9032") ? [] : (stryCov_9fa48("9032"), [stryMutAct_9fa48("9033") ? {} : (stryCov_9fa48("9033"), {
      text: categoryData.name,
      url: stryMutAct_9fa48("9034") ? `` : (stryCov_9fa48("9034"), `${relative_path}/category/${categoryData.slug}`),
      cid: categoryData.cid
    })]);
    const crumbs = await helpers.buildCategoryBreadcrumbs(categoryData.parentCid);
    if (stryMutAct_9fa48("9037") ? req.originalUrl.startsWith(`${relative_path}/api/category`) && req.originalUrl.startsWith(`${relative_path}/category`) : stryMutAct_9fa48("9036") ? false : stryMutAct_9fa48("9035") ? true : (stryCov_9fa48("9035", "9036", "9037"), (stryMutAct_9fa48("9038") ? req.originalUrl.endsWith(`${relative_path}/api/category`) : (stryCov_9fa48("9038"), req.originalUrl.startsWith(stryMutAct_9fa48("9039") ? `` : (stryCov_9fa48("9039"), `${relative_path}/api/category`)))) || (stryMutAct_9fa48("9040") ? req.originalUrl.endsWith(`${relative_path}/category`) : (stryCov_9fa48("9040"), req.originalUrl.startsWith(stryMutAct_9fa48("9041") ? `` : (stryCov_9fa48("9041"), `${relative_path}/category`)))))) {
      if (stryMutAct_9fa48("9042")) {
        {}
      } else {
        stryCov_9fa48("9042");
        categoryData.breadcrumbs = crumbs.concat(breadcrumbs);
      }
    }
  }
}
function addTags(categoryData, res) {
  if (stryMutAct_9fa48("9043")) {
    {}
  } else {
    stryCov_9fa48("9043");
    res.locals.metaTags = stryMutAct_9fa48("9044") ? [] : (stryCov_9fa48("9044"), [stryMutAct_9fa48("9045") ? {} : (stryCov_9fa48("9045"), {
      name: stryMutAct_9fa48("9046") ? "" : (stryCov_9fa48("9046"), 'title'),
      content: categoryData.name,
      noEscape: stryMutAct_9fa48("9047") ? false : (stryCov_9fa48("9047"), true)
    }), stryMutAct_9fa48("9048") ? {} : (stryCov_9fa48("9048"), {
      property: stryMutAct_9fa48("9049") ? "" : (stryCov_9fa48("9049"), 'og:title'),
      content: categoryData.name,
      noEscape: stryMutAct_9fa48("9050") ? false : (stryCov_9fa48("9050"), true)
    }), stryMutAct_9fa48("9051") ? {} : (stryCov_9fa48("9051"), {
      name: stryMutAct_9fa48("9052") ? "" : (stryCov_9fa48("9052"), 'description'),
      content: categoryData.description,
      noEscape: stryMutAct_9fa48("9053") ? false : (stryCov_9fa48("9053"), true)
    }), stryMutAct_9fa48("9054") ? {} : (stryCov_9fa48("9054"), {
      property: stryMutAct_9fa48("9055") ? "" : (stryCov_9fa48("9055"), 'og:type'),
      content: stryMutAct_9fa48("9056") ? "" : (stryCov_9fa48("9056"), 'website')
    })]);
    if (stryMutAct_9fa48("9058") ? false : stryMutAct_9fa48("9057") ? true : (stryCov_9fa48("9057", "9058"), categoryData.backgroundImage)) {
      if (stryMutAct_9fa48("9059")) {
        {}
      } else {
        stryCov_9fa48("9059");
        if (stryMutAct_9fa48("9062") ? false : stryMutAct_9fa48("9061") ? true : stryMutAct_9fa48("9060") ? categoryData.backgroundImage.startsWith('http') : (stryCov_9fa48("9060", "9061", "9062"), !(stryMutAct_9fa48("9063") ? categoryData.backgroundImage.endsWith('http') : (stryCov_9fa48("9063"), categoryData.backgroundImage.startsWith(stryMutAct_9fa48("9064") ? "" : (stryCov_9fa48("9064"), 'http')))))) {
          if (stryMutAct_9fa48("9065")) {
            {}
          } else {
            stryCov_9fa48("9065");
            categoryData.backgroundImage = stryMutAct_9fa48("9066") ? url - categoryData.backgroundImage : (stryCov_9fa48("9066"), url + categoryData.backgroundImage);
          }
        }
        res.locals.metaTags.push(stryMutAct_9fa48("9067") ? {} : (stryCov_9fa48("9067"), {
          property: stryMutAct_9fa48("9068") ? "" : (stryCov_9fa48("9068"), 'og:image'),
          content: categoryData.backgroundImage
        }));
      }
    }
    res.locals.linkTags = stryMutAct_9fa48("9069") ? [] : (stryCov_9fa48("9069"), [stryMutAct_9fa48("9070") ? {} : (stryCov_9fa48("9070"), {
      rel: stryMutAct_9fa48("9071") ? "" : (stryCov_9fa48("9071"), 'up'),
      href: url
    })]);
    if (stryMutAct_9fa48("9074") ? false : stryMutAct_9fa48("9073") ? true : stryMutAct_9fa48("9072") ? categoryData['feeds:disableRSS'] : (stryCov_9fa48("9072", "9073", "9074"), !categoryData[stryMutAct_9fa48("9075") ? "" : (stryCov_9fa48("9075"), 'feeds:disableRSS')])) {
      if (stryMutAct_9fa48("9076")) {
        {}
      } else {
        stryCov_9fa48("9076");
        res.locals.linkTags.push(stryMutAct_9fa48("9077") ? {} : (stryCov_9fa48("9077"), {
          rel: stryMutAct_9fa48("9078") ? "" : (stryCov_9fa48("9078"), 'alternate'),
          type: stryMutAct_9fa48("9079") ? "" : (stryCov_9fa48("9079"), 'application/rss+xml'),
          href: categoryData.rssFeedUrl
        }));
      }
    }
  }
}