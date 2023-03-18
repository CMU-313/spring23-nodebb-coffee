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
const meta = require('../meta');
const plugins = require('../plugins');
const search = require('../search');
const categories = require('../categories');
const pagination = require('../pagination');
const privileges = require('../privileges');
const utils = require('../utils');
const helpers = require('./helpers');
const searchController = module.exports;
searchController.search = async function (req, res, next) {
  if (stryMutAct_9fa48("10971")) {
    {}
  } else {
    stryCov_9fa48("10971");
    if (stryMutAct_9fa48("10974") ? false : stryMutAct_9fa48("10973") ? true : stryMutAct_9fa48("10972") ? plugins.hooks.hasListeners('filter:search.query') : (stryCov_9fa48("10972", "10973", "10974"), !plugins.hooks.hasListeners(stryMutAct_9fa48("10975") ? "" : (stryCov_9fa48("10975"), 'filter:search.query')))) {
      if (stryMutAct_9fa48("10976")) {
        {}
      } else {
        stryCov_9fa48("10976");
        return next();
      }
    }
    const page = stryMutAct_9fa48("10979") ? Math.max(1, parseInt(req.query.page, 10)) && 1 : stryMutAct_9fa48("10978") ? false : stryMutAct_9fa48("10977") ? true : (stryCov_9fa48("10977", "10978", "10979"), Math.max(1, parseInt(req.query.page, 10)) || 1);
    const searchOnly = stryMutAct_9fa48("10982") ? parseInt(req.query.searchOnly, 10) !== 1 : stryMutAct_9fa48("10981") ? false : stryMutAct_9fa48("10980") ? true : (stryCov_9fa48("10980", "10981", "10982"), parseInt(req.query.searchOnly, 10) === 1);
    const userPrivileges = await utils.promiseParallel(stryMutAct_9fa48("10983") ? {} : (stryCov_9fa48("10983"), {
      'search:users': privileges.global.can(stryMutAct_9fa48("10984") ? "" : (stryCov_9fa48("10984"), 'search:users'), req.uid),
      'search:content': privileges.global.can(stryMutAct_9fa48("10985") ? "" : (stryCov_9fa48("10985"), 'search:content'), req.uid),
      'search:tags': privileges.global.can(stryMutAct_9fa48("10986") ? "" : (stryCov_9fa48("10986"), 'search:tags'), req.uid)
    }));
    req.query.in = stryMutAct_9fa48("10989") ? (req.query.in || meta.config.searchDefaultIn) && 'titlesposts' : stryMutAct_9fa48("10988") ? false : stryMutAct_9fa48("10987") ? true : (stryCov_9fa48("10987", "10988", "10989"), (stryMutAct_9fa48("10991") ? req.query.in && meta.config.searchDefaultIn : stryMutAct_9fa48("10990") ? false : (stryCov_9fa48("10990", "10991"), req.query.in || meta.config.searchDefaultIn)) || (stryMutAct_9fa48("10992") ? "" : (stryCov_9fa48("10992"), 'titlesposts')));
    let allowed = stryMutAct_9fa48("10995") ? (req.query.in === 'users' && userPrivileges['search:users'] || req.query.in === 'tags' && userPrivileges['search:tags'] || req.query.in === 'categories') && ['titles', 'titlesposts', 'posts'].includes(req.query.in) && userPrivileges['search:content'] : stryMutAct_9fa48("10994") ? false : stryMutAct_9fa48("10993") ? true : (stryCov_9fa48("10993", "10994", "10995"), (stryMutAct_9fa48("10997") ? (req.query.in === 'users' && userPrivileges['search:users'] || req.query.in === 'tags' && userPrivileges['search:tags']) && req.query.in === 'categories' : stryMutAct_9fa48("10996") ? false : (stryCov_9fa48("10996", "10997"), (stryMutAct_9fa48("10999") ? req.query.in === 'users' && userPrivileges['search:users'] && req.query.in === 'tags' && userPrivileges['search:tags'] : stryMutAct_9fa48("10998") ? false : (stryCov_9fa48("10998", "10999"), (stryMutAct_9fa48("11001") ? req.query.in === 'users' || userPrivileges['search:users'] : stryMutAct_9fa48("11000") ? false : (stryCov_9fa48("11000", "11001"), (stryMutAct_9fa48("11003") ? req.query.in !== 'users' : stryMutAct_9fa48("11002") ? true : (stryCov_9fa48("11002", "11003"), req.query.in === (stryMutAct_9fa48("11004") ? "" : (stryCov_9fa48("11004"), 'users')))) && userPrivileges[stryMutAct_9fa48("11005") ? "" : (stryCov_9fa48("11005"), 'search:users')])) || (stryMutAct_9fa48("11007") ? req.query.in === 'tags' || userPrivileges['search:tags'] : stryMutAct_9fa48("11006") ? false : (stryCov_9fa48("11006", "11007"), (stryMutAct_9fa48("11009") ? req.query.in !== 'tags' : stryMutAct_9fa48("11008") ? true : (stryCov_9fa48("11008", "11009"), req.query.in === (stryMutAct_9fa48("11010") ? "" : (stryCov_9fa48("11010"), 'tags')))) && userPrivileges[stryMutAct_9fa48("11011") ? "" : (stryCov_9fa48("11011"), 'search:tags')])))) || (stryMutAct_9fa48("11013") ? req.query.in !== 'categories' : stryMutAct_9fa48("11012") ? false : (stryCov_9fa48("11012", "11013"), req.query.in === (stryMutAct_9fa48("11014") ? "" : (stryCov_9fa48("11014"), 'categories')))))) || (stryMutAct_9fa48("11016") ? ['titles', 'titlesposts', 'posts'].includes(req.query.in) || userPrivileges['search:content'] : stryMutAct_9fa48("11015") ? false : (stryCov_9fa48("11015", "11016"), (stryMutAct_9fa48("11017") ? [] : (stryCov_9fa48("11017"), [stryMutAct_9fa48("11018") ? "" : (stryCov_9fa48("11018"), 'titles'), stryMutAct_9fa48("11019") ? "" : (stryCov_9fa48("11019"), 'titlesposts'), stryMutAct_9fa48("11020") ? "" : (stryCov_9fa48("11020"), 'posts')])).includes(req.query.in) && userPrivileges[stryMutAct_9fa48("11021") ? "" : (stryCov_9fa48("11021"), 'search:content')])));
    ({
      allowed
    } = await plugins.hooks.fire(stryMutAct_9fa48("11022") ? "" : (stryCov_9fa48("11022"), 'filter:search.isAllowed'), stryMutAct_9fa48("11023") ? {} : (stryCov_9fa48("11023"), {
      uid: req.uid,
      query: req.query,
      allowed
    })));
    if (stryMutAct_9fa48("11026") ? false : stryMutAct_9fa48("11025") ? true : stryMutAct_9fa48("11024") ? allowed : (stryCov_9fa48("11024", "11025", "11026"), !allowed)) {
      if (stryMutAct_9fa48("11027")) {
        {}
      } else {
        stryCov_9fa48("11027");
        return helpers.notAllowed(req, res);
      }
    }
    if (stryMutAct_9fa48("11030") ? req.query.categories || !Array.isArray(req.query.categories) : stryMutAct_9fa48("11029") ? false : stryMutAct_9fa48("11028") ? true : (stryCov_9fa48("11028", "11029", "11030"), req.query.categories && (stryMutAct_9fa48("11031") ? Array.isArray(req.query.categories) : (stryCov_9fa48("11031"), !Array.isArray(req.query.categories))))) {
      if (stryMutAct_9fa48("11032")) {
        {}
      } else {
        stryCov_9fa48("11032");
        req.query.categories = stryMutAct_9fa48("11033") ? [] : (stryCov_9fa48("11033"), [req.query.categories]);
      }
    }
    if (stryMutAct_9fa48("11036") ? req.query.hasTags || !Array.isArray(req.query.hasTags) : stryMutAct_9fa48("11035") ? false : stryMutAct_9fa48("11034") ? true : (stryCov_9fa48("11034", "11035", "11036"), req.query.hasTags && (stryMutAct_9fa48("11037") ? Array.isArray(req.query.hasTags) : (stryCov_9fa48("11037"), !Array.isArray(req.query.hasTags))))) {
      if (stryMutAct_9fa48("11038")) {
        {}
      } else {
        stryCov_9fa48("11038");
        req.query.hasTags = stryMutAct_9fa48("11039") ? [] : (stryCov_9fa48("11039"), [req.query.hasTags]);
      }
    }
    const data = stryMutAct_9fa48("11040") ? {} : (stryCov_9fa48("11040"), {
      query: req.query.term,
      searchIn: req.query.in,
      matchWords: stryMutAct_9fa48("11043") ? req.query.matchWords && 'all' : stryMutAct_9fa48("11042") ? false : stryMutAct_9fa48("11041") ? true : (stryCov_9fa48("11041", "11042", "11043"), req.query.matchWords || (stryMutAct_9fa48("11044") ? "" : (stryCov_9fa48("11044"), 'all'))),
      postedBy: req.query.by,
      categories: req.query.categories,
      searchChildren: req.query.searchChildren,
      hasTags: req.query.hasTags,
      replies: req.query.replies,
      repliesFilter: req.query.repliesFilter,
      timeRange: req.query.timeRange,
      timeFilter: req.query.timeFilter,
      sortBy: stryMutAct_9fa48("11047") ? (req.query.sortBy || meta.config.searchDefaultSortBy) && '' : stryMutAct_9fa48("11046") ? false : stryMutAct_9fa48("11045") ? true : (stryCov_9fa48("11045", "11046", "11047"), (stryMutAct_9fa48("11049") ? req.query.sortBy && meta.config.searchDefaultSortBy : stryMutAct_9fa48("11048") ? false : (stryCov_9fa48("11048", "11049"), req.query.sortBy || meta.config.searchDefaultSortBy)) || (stryMutAct_9fa48("11050") ? "Stryker was here!" : (stryCov_9fa48("11050"), ''))),
      sortDirection: req.query.sortDirection,
      page: page,
      itemsPerPage: req.query.itemsPerPage,
      uid: req.uid,
      qs: req.query
    });
    const [searchData, categoriesData] = await Promise.all(stryMutAct_9fa48("11051") ? [] : (stryCov_9fa48("11051"), [search.search(data), buildCategories(req.uid, searchOnly), recordSearch(data)]));
    searchData.pagination = pagination.create(page, searchData.pageCount, req.query);
    searchData.multiplePages = stryMutAct_9fa48("11055") ? searchData.pageCount <= 1 : stryMutAct_9fa48("11054") ? searchData.pageCount >= 1 : stryMutAct_9fa48("11053") ? false : stryMutAct_9fa48("11052") ? true : (stryCov_9fa48("11052", "11053", "11054", "11055"), searchData.pageCount > 1);
    searchData.search_query = validator.escape(String(stryMutAct_9fa48("11058") ? req.query.term && '' : stryMutAct_9fa48("11057") ? false : stryMutAct_9fa48("11056") ? true : (stryCov_9fa48("11056", "11057", "11058"), req.query.term || (stryMutAct_9fa48("11059") ? "Stryker was here!" : (stryCov_9fa48("11059"), '')))));
    searchData.term = req.query.term;
    if (stryMutAct_9fa48("11061") ? false : stryMutAct_9fa48("11060") ? true : (stryCov_9fa48("11060", "11061"), searchOnly)) {
      if (stryMutAct_9fa48("11062")) {
        {}
      } else {
        stryCov_9fa48("11062");
        return res.json(searchData);
      }
    }
    searchData.allCategories = categoriesData;
    searchData.allCategoriesCount = Math.max(10, Math.min(20, categoriesData.length));
    searchData.breadcrumbs = helpers.buildBreadcrumbs(stryMutAct_9fa48("11063") ? [] : (stryCov_9fa48("11063"), [stryMutAct_9fa48("11064") ? {} : (stryCov_9fa48("11064"), {
      text: stryMutAct_9fa48("11065") ? "" : (stryCov_9fa48("11065"), '[[global:search]]')
    })]));
    searchData.expandSearch = stryMutAct_9fa48("11066") ? req.query.term : (stryCov_9fa48("11066"), !req.query.term);
    searchData.showAsPosts = stryMutAct_9fa48("11069") ? !req.query.showAs && req.query.showAs === 'posts' : stryMutAct_9fa48("11068") ? false : stryMutAct_9fa48("11067") ? true : (stryCov_9fa48("11067", "11068", "11069"), (stryMutAct_9fa48("11070") ? req.query.showAs : (stryCov_9fa48("11070"), !req.query.showAs)) || (stryMutAct_9fa48("11072") ? req.query.showAs !== 'posts' : stryMutAct_9fa48("11071") ? false : (stryCov_9fa48("11071", "11072"), req.query.showAs === (stryMutAct_9fa48("11073") ? "" : (stryCov_9fa48("11073"), 'posts')))));
    searchData.showAsTopics = stryMutAct_9fa48("11076") ? req.query.showAs !== 'topics' : stryMutAct_9fa48("11075") ? false : stryMutAct_9fa48("11074") ? true : (stryCov_9fa48("11074", "11075", "11076"), req.query.showAs === (stryMutAct_9fa48("11077") ? "" : (stryCov_9fa48("11077"), 'topics')));
    searchData.title = stryMutAct_9fa48("11078") ? "" : (stryCov_9fa48("11078"), '[[global:header.search]]');
    searchData.searchDefaultSortBy = stryMutAct_9fa48("11081") ? meta.config.searchDefaultSortBy && '' : stryMutAct_9fa48("11080") ? false : stryMutAct_9fa48("11079") ? true : (stryCov_9fa48("11079", "11080", "11081"), meta.config.searchDefaultSortBy || (stryMutAct_9fa48("11082") ? "Stryker was here!" : (stryCov_9fa48("11082"), '')));
    searchData.searchDefaultIn = stryMutAct_9fa48("11085") ? meta.config.searchDefaultIn && 'titlesposts' : stryMutAct_9fa48("11084") ? false : stryMutAct_9fa48("11083") ? true : (stryCov_9fa48("11083", "11084", "11085"), meta.config.searchDefaultIn || (stryMutAct_9fa48("11086") ? "" : (stryCov_9fa48("11086"), 'titlesposts')));
    searchData.privileges = userPrivileges;
    res.render(stryMutAct_9fa48("11087") ? "" : (stryCov_9fa48("11087"), 'search'), searchData);
  }
};
const searches = {};
async function recordSearch(data) {
  if (stryMutAct_9fa48("11088")) {
    {}
  } else {
    stryCov_9fa48("11088");
    const {
      query,
      searchIn
    } = data;
    if (stryMutAct_9fa48("11090") ? false : stryMutAct_9fa48("11089") ? true : (stryCov_9fa48("11089", "11090"), query)) {
      if (stryMutAct_9fa48("11091")) {
        {}
      } else {
        stryCov_9fa48("11091");
        const cleanedQuery = stryMutAct_9fa48("11094") ? String(query).toLowerCase().slice(0, 255) : stryMutAct_9fa48("11093") ? String(query).trim().toUpperCase().slice(0, 255) : stryMutAct_9fa48("11092") ? String(query).trim().toLowerCase() : (stryCov_9fa48("11092", "11093", "11094"), String(query).trim().toLowerCase().slice(0, 255));
        if (stryMutAct_9fa48("11097") ? ['titles', 'titlesposts', 'posts'].includes(searchIn) || cleanedQuery.length > 2 : stryMutAct_9fa48("11096") ? false : stryMutAct_9fa48("11095") ? true : (stryCov_9fa48("11095", "11096", "11097"), (stryMutAct_9fa48("11098") ? [] : (stryCov_9fa48("11098"), [stryMutAct_9fa48("11099") ? "" : (stryCov_9fa48("11099"), 'titles'), stryMutAct_9fa48("11100") ? "" : (stryCov_9fa48("11100"), 'titlesposts'), stryMutAct_9fa48("11101") ? "" : (stryCov_9fa48("11101"), 'posts')])).includes(searchIn) && (stryMutAct_9fa48("11104") ? cleanedQuery.length <= 2 : stryMutAct_9fa48("11103") ? cleanedQuery.length >= 2 : stryMutAct_9fa48("11102") ? true : (stryCov_9fa48("11102", "11103", "11104"), cleanedQuery.length > 2)))) {
          if (stryMutAct_9fa48("11105")) {
            {}
          } else {
            stryCov_9fa48("11105");
            searches[data.uid] = stryMutAct_9fa48("11108") ? searches[data.uid] && {
              timeoutId: 0,
              queries: []
            } : stryMutAct_9fa48("11107") ? false : stryMutAct_9fa48("11106") ? true : (stryCov_9fa48("11106", "11107", "11108"), searches[data.uid] || (stryMutAct_9fa48("11109") ? {} : (stryCov_9fa48("11109"), {
              timeoutId: 0,
              queries: stryMutAct_9fa48("11110") ? ["Stryker was here"] : (stryCov_9fa48("11110"), [])
            })));
            searches[data.uid].queries.push(cleanedQuery);
            if (stryMutAct_9fa48("11112") ? false : stryMutAct_9fa48("11111") ? true : (stryCov_9fa48("11111", "11112"), searches[data.uid].timeoutId)) {
              if (stryMutAct_9fa48("11113")) {
                {}
              } else {
                stryCov_9fa48("11113");
                clearTimeout(searches[data.uid].timeoutId);
              }
            }
            searches[data.uid].timeoutId = setTimeout(async () => {
              if (stryMutAct_9fa48("11114")) {
                {}
              } else {
                stryCov_9fa48("11114");
                if (stryMutAct_9fa48("11117") ? searches[data.uid] || searches[data.uid].queries : stryMutAct_9fa48("11116") ? false : stryMutAct_9fa48("11115") ? true : (stryCov_9fa48("11115", "11116", "11117"), searches[data.uid] && searches[data.uid].queries)) {
                  if (stryMutAct_9fa48("11118")) {
                    {}
                  } else {
                    stryCov_9fa48("11118");
                    const copy = stryMutAct_9fa48("11119") ? searches[data.uid].queries : (stryCov_9fa48("11119"), searches[data.uid].queries.slice());
                    const filtered = stryMutAct_9fa48("11120") ? searches[data.uid].queries : (stryCov_9fa48("11120"), searches[data.uid].queries.filter(stryMutAct_9fa48("11121") ? () => undefined : (stryCov_9fa48("11121"), q => stryMutAct_9fa48("11122") ? copy.find(query => query.startsWith(q) && query.length > q.length) : (stryCov_9fa48("11122"), !copy.find(stryMutAct_9fa48("11123") ? () => undefined : (stryCov_9fa48("11123"), query => stryMutAct_9fa48("11126") ? query.startsWith(q) || query.length > q.length : stryMutAct_9fa48("11125") ? false : stryMutAct_9fa48("11124") ? true : (stryCov_9fa48("11124", "11125", "11126"), (stryMutAct_9fa48("11127") ? query.endsWith(q) : (stryCov_9fa48("11127"), query.startsWith(q))) && (stryMutAct_9fa48("11130") ? query.length <= q.length : stryMutAct_9fa48("11129") ? query.length >= q.length : stryMutAct_9fa48("11128") ? true : (stryCov_9fa48("11128", "11129", "11130"), query.length > q.length)))))))));
                    delete searches[data.uid];
                    await Promise.all(filtered.map(stryMutAct_9fa48("11131") ? () => undefined : (stryCov_9fa48("11131"), query => db.sortedSetIncrBy(stryMutAct_9fa48("11132") ? "" : (stryCov_9fa48("11132"), 'searches:all'), 1, query))));
                  }
                }
              }
            }, 5000);
          }
        }
      }
    }
  }
}
async function buildCategories(uid, searchOnly) {
  if (stryMutAct_9fa48("11133")) {
    {}
  } else {
    stryCov_9fa48("11133");
    if (stryMutAct_9fa48("11135") ? false : stryMutAct_9fa48("11134") ? true : (stryCov_9fa48("11134", "11135"), searchOnly)) {
      if (stryMutAct_9fa48("11136")) {
        {}
      } else {
        stryCov_9fa48("11136");
        return stryMutAct_9fa48("11137") ? ["Stryker was here"] : (stryCov_9fa48("11137"), []);
      }
    }
    const cids = await categories.getCidsByPrivilege(stryMutAct_9fa48("11138") ? "" : (stryCov_9fa48("11138"), 'categories:cid'), uid, stryMutAct_9fa48("11139") ? "" : (stryCov_9fa48("11139"), 'read'));
    let categoriesData = await categories.getCategoriesData(cids);
    categoriesData = stryMutAct_9fa48("11140") ? categoriesData : (stryCov_9fa48("11140"), categoriesData.filter(stryMutAct_9fa48("11141") ? () => undefined : (stryCov_9fa48("11141"), category => stryMutAct_9fa48("11144") ? category || !category.link : stryMutAct_9fa48("11143") ? false : stryMutAct_9fa48("11142") ? true : (stryCov_9fa48("11142", "11143", "11144"), category && (stryMutAct_9fa48("11145") ? category.link : (stryCov_9fa48("11145"), !category.link))))));
    categoriesData = categories.getTree(categoriesData);
    categoriesData = categories.buildForSelectCategories(categoriesData, stryMutAct_9fa48("11146") ? [] : (stryCov_9fa48("11146"), [stryMutAct_9fa48("11147") ? "" : (stryCov_9fa48("11147"), 'text'), stryMutAct_9fa48("11148") ? "" : (stryCov_9fa48("11148"), 'value')]));
    return (stryMutAct_9fa48("11149") ? [] : (stryCov_9fa48("11149"), [stryMutAct_9fa48("11150") ? {} : (stryCov_9fa48("11150"), {
      value: stryMutAct_9fa48("11151") ? "" : (stryCov_9fa48("11151"), 'all'),
      text: stryMutAct_9fa48("11152") ? "" : (stryCov_9fa48("11152"), '[[unread:all_categories]]')
    }), stryMutAct_9fa48("11153") ? {} : (stryCov_9fa48("11153"), {
      value: stryMutAct_9fa48("11154") ? "" : (stryCov_9fa48("11154"), 'watched'),
      text: stryMutAct_9fa48("11155") ? "" : (stryCov_9fa48("11155"), '[[category:watched-categories]]')
    })])).concat(categoriesData);
  }
}