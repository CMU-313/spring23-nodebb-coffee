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
const categories = require('../categories');
const privileges = require('../privileges');
const user = require('../user');
const topics = require('../topics');
const SocketCategories = module.exports;
require('./categories/search')(SocketCategories);
SocketCategories.getRecentReplies = async function (socket, cid) {
  if (stryMutAct_9fa48("35406")) {
    {}
  } else {
    stryCov_9fa48("35406");
    return await categories.getRecentReplies(cid, socket.uid, 0, 4);
  }
};
SocketCategories.get = async function (socket) {
  if (stryMutAct_9fa48("35407")) {
    {}
  } else {
    stryCov_9fa48("35407");
    async function getCategories() {
      if (stryMutAct_9fa48("35408")) {
        {}
      } else {
        stryCov_9fa48("35408");
        const cids = await categories.getCidsByPrivilege(stryMutAct_9fa48("35409") ? "" : (stryCov_9fa48("35409"), 'categories:cid'), socket.uid, stryMutAct_9fa48("35410") ? "" : (stryCov_9fa48("35410"), 'find'));
        return await categories.getCategoriesData(cids);
      }
    }
    const [isAdmin, categoriesData] = await Promise.all(stryMutAct_9fa48("35411") ? [] : (stryCov_9fa48("35411"), [user.isAdministrator(socket.uid), getCategories()]));
    return stryMutAct_9fa48("35412") ? categoriesData : (stryCov_9fa48("35412"), categoriesData.filter(stryMutAct_9fa48("35413") ? () => undefined : (stryCov_9fa48("35413"), category => stryMutAct_9fa48("35416") ? category || !category.disabled || isAdmin : stryMutAct_9fa48("35415") ? false : stryMutAct_9fa48("35414") ? true : (stryCov_9fa48("35414", "35415", "35416"), category && (stryMutAct_9fa48("35418") ? !category.disabled && isAdmin : stryMutAct_9fa48("35417") ? true : (stryCov_9fa48("35417", "35418"), (stryMutAct_9fa48("35419") ? category.disabled : (stryCov_9fa48("35419"), !category.disabled)) || isAdmin))))));
  }
};
SocketCategories.getWatchedCategories = async function (socket) {
  if (stryMutAct_9fa48("35420")) {
    {}
  } else {
    stryCov_9fa48("35420");
    const [categoriesData, ignoredCids] = await Promise.all(stryMutAct_9fa48("35421") ? [] : (stryCov_9fa48("35421"), [categories.getCategoriesByPrivilege(stryMutAct_9fa48("35422") ? "" : (stryCov_9fa48("35422"), 'cid:0:children'), socket.uid, stryMutAct_9fa48("35423") ? "" : (stryCov_9fa48("35423"), 'find')), user.getIgnoredCategories(socket.uid)]));
    return stryMutAct_9fa48("35424") ? categoriesData : (stryCov_9fa48("35424"), categoriesData.filter(stryMutAct_9fa48("35425") ? () => undefined : (stryCov_9fa48("35425"), category => stryMutAct_9fa48("35428") ? category || !ignoredCids.includes(String(category.cid)) : stryMutAct_9fa48("35427") ? false : stryMutAct_9fa48("35426") ? true : (stryCov_9fa48("35426", "35427", "35428"), category && (stryMutAct_9fa48("35429") ? ignoredCids.includes(String(category.cid)) : (stryCov_9fa48("35429"), !ignoredCids.includes(String(category.cid))))))));
  }
};
SocketCategories.loadMore = async function (socket, data) {
  if (stryMutAct_9fa48("35430")) {
    {}
  } else {
    stryCov_9fa48("35430");
    if (stryMutAct_9fa48("35433") ? false : stryMutAct_9fa48("35432") ? true : stryMutAct_9fa48("35431") ? data : (stryCov_9fa48("35431", "35432", "35433"), !data)) {
      if (stryMutAct_9fa48("35434")) {
        {}
      } else {
        stryCov_9fa48("35434");
        throw new Error(stryMutAct_9fa48("35435") ? "" : (stryCov_9fa48("35435"), '[[error:invalid-data]]'));
      }
    }
    data.query = stryMutAct_9fa48("35438") ? data.query && {} : stryMutAct_9fa48("35437") ? false : stryMutAct_9fa48("35436") ? true : (stryCov_9fa48("35436", "35437", "35438"), data.query || {});
    const [userPrivileges, settings, targetUid] = await Promise.all(stryMutAct_9fa48("35439") ? [] : (stryCov_9fa48("35439"), [privileges.categories.get(data.cid, socket.uid), user.getSettings(socket.uid), user.getUidByUserslug(data.query.author)]));
    if (stryMutAct_9fa48("35442") ? false : stryMutAct_9fa48("35441") ? true : stryMutAct_9fa48("35440") ? userPrivileges.read : (stryCov_9fa48("35440", "35441", "35442"), !userPrivileges.read)) {
      if (stryMutAct_9fa48("35443")) {
        {}
      } else {
        stryCov_9fa48("35443");
        throw new Error(stryMutAct_9fa48("35444") ? "" : (stryCov_9fa48("35444"), '[[error:no-privileges]]'));
      }
    }
    const infScrollTopicsPerPage = 20;
    const sort = stryMutAct_9fa48("35447") ? data.sort && data.categoryTopicSort : stryMutAct_9fa48("35446") ? false : stryMutAct_9fa48("35445") ? true : (stryCov_9fa48("35445", "35446", "35447"), data.sort || data.categoryTopicSort);
    let start = Math.max(0, parseInt(data.after, 10));
    if (stryMutAct_9fa48("35450") ? data.direction !== -1 : stryMutAct_9fa48("35449") ? false : stryMutAct_9fa48("35448") ? true : (stryCov_9fa48("35448", "35449", "35450"), data.direction === (stryMutAct_9fa48("35451") ? +1 : (stryCov_9fa48("35451"), -1)))) {
      if (stryMutAct_9fa48("35452")) {
        {}
      } else {
        stryCov_9fa48("35452");
        stryMutAct_9fa48("35453") ? start += infScrollTopicsPerPage : (stryCov_9fa48("35453"), start -= infScrollTopicsPerPage);
      }
    }
    let stop = stryMutAct_9fa48("35454") ? start + infScrollTopicsPerPage + 1 : (stryCov_9fa48("35454"), (stryMutAct_9fa48("35455") ? start - infScrollTopicsPerPage : (stryCov_9fa48("35455"), start + infScrollTopicsPerPage)) - 1);
    start = Math.max(0, start);
    stop = Math.max(0, stop);
    const result = await categories.getCategoryTopics(stryMutAct_9fa48("35456") ? {} : (stryCov_9fa48("35456"), {
      uid: socket.uid,
      cid: data.cid,
      start: start,
      stop: stop,
      sort: sort,
      settings: settings,
      query: data.query,
      tag: data.query.tag,
      targetUid: targetUid
    }));
    categories.modifyTopicsByPrivilege(result.topics, userPrivileges);
    result.privileges = userPrivileges;
    result.template = stryMutAct_9fa48("35457") ? {} : (stryCov_9fa48("35457"), {
      category: stryMutAct_9fa48("35458") ? false : (stryCov_9fa48("35458"), true),
      name: stryMutAct_9fa48("35459") ? "" : (stryCov_9fa48("35459"), 'category')
    });
    return result;
  }
};
SocketCategories.getTopicCount = async function (socket, cid) {
  if (stryMutAct_9fa48("35460")) {
    {}
  } else {
    stryCov_9fa48("35460");
    return await categories.getCategoryField(cid, stryMutAct_9fa48("35461") ? "" : (stryCov_9fa48("35461"), 'topic_count'));
  }
};
SocketCategories.getCategoriesByPrivilege = async function (socket, privilege) {
  if (stryMutAct_9fa48("35462")) {
    {}
  } else {
    stryCov_9fa48("35462");
    return await categories.getCategoriesByPrivilege(stryMutAct_9fa48("35463") ? "" : (stryCov_9fa48("35463"), 'categories:cid'), socket.uid, privilege);
  }
};
SocketCategories.getMoveCategories = async function (socket, data) {
  if (stryMutAct_9fa48("35464")) {
    {}
  } else {
    stryCov_9fa48("35464");
    return await SocketCategories.getSelectCategories(socket, data);
  }
};
SocketCategories.getSelectCategories = async function (socket) {
  if (stryMutAct_9fa48("35465")) {
    {}
  } else {
    stryCov_9fa48("35465");
    const [isAdmin, categoriesData] = await Promise.all(stryMutAct_9fa48("35466") ? [] : (stryCov_9fa48("35466"), [user.isAdministrator(socket.uid), categories.buildForSelect(socket.uid, stryMutAct_9fa48("35467") ? "" : (stryCov_9fa48("35467"), 'find'), stryMutAct_9fa48("35468") ? [] : (stryCov_9fa48("35468"), [stryMutAct_9fa48("35469") ? "" : (stryCov_9fa48("35469"), 'disabled'), stryMutAct_9fa48("35470") ? "" : (stryCov_9fa48("35470"), 'link')]))]));
    return stryMutAct_9fa48("35471") ? categoriesData : (stryCov_9fa48("35471"), categoriesData.filter(stryMutAct_9fa48("35472") ? () => undefined : (stryCov_9fa48("35472"), category => stryMutAct_9fa48("35475") ? category && (!category.disabled || isAdmin) || !category.link : stryMutAct_9fa48("35474") ? false : stryMutAct_9fa48("35473") ? true : (stryCov_9fa48("35473", "35474", "35475"), (stryMutAct_9fa48("35477") ? category || !category.disabled || isAdmin : stryMutAct_9fa48("35476") ? true : (stryCov_9fa48("35476", "35477"), category && (stryMutAct_9fa48("35479") ? !category.disabled && isAdmin : stryMutAct_9fa48("35478") ? true : (stryCov_9fa48("35478", "35479"), (stryMutAct_9fa48("35480") ? category.disabled : (stryCov_9fa48("35480"), !category.disabled)) || isAdmin)))) && (stryMutAct_9fa48("35481") ? category.link : (stryCov_9fa48("35481"), !category.link))))));
  }
};
SocketCategories.setWatchState = async function (socket, data) {
  if (stryMutAct_9fa48("35482")) {
    {}
  } else {
    stryCov_9fa48("35482");
    if (stryMutAct_9fa48("35485") ? (!data || !data.cid) && !data.state : stryMutAct_9fa48("35484") ? false : stryMutAct_9fa48("35483") ? true : (stryCov_9fa48("35483", "35484", "35485"), (stryMutAct_9fa48("35487") ? !data && !data.cid : stryMutAct_9fa48("35486") ? false : (stryCov_9fa48("35486", "35487"), (stryMutAct_9fa48("35488") ? data : (stryCov_9fa48("35488"), !data)) || (stryMutAct_9fa48("35489") ? data.cid : (stryCov_9fa48("35489"), !data.cid)))) || (stryMutAct_9fa48("35490") ? data.state : (stryCov_9fa48("35490"), !data.state)))) {
      if (stryMutAct_9fa48("35491")) {
        {}
      } else {
        stryCov_9fa48("35491");
        throw new Error(stryMutAct_9fa48("35492") ? "" : (stryCov_9fa48("35492"), '[[error:invalid-data]]'));
      }
    }
    return await ignoreOrWatch(async (uid, cids) => {
      if (stryMutAct_9fa48("35493")) {
        {}
      } else {
        stryCov_9fa48("35493");
        await user.setCategoryWatchState(uid, cids, categories.watchStates[data.state]);
      }
    }, socket, data);
  }
};
SocketCategories.watch = async function (socket, data) {
  if (stryMutAct_9fa48("35494")) {
    {}
  } else {
    stryCov_9fa48("35494");
    return await ignoreOrWatch(user.watchCategory, socket, data);
  }
};
SocketCategories.ignore = async function (socket, data) {
  if (stryMutAct_9fa48("35495")) {
    {}
  } else {
    stryCov_9fa48("35495");
    return await ignoreOrWatch(user.ignoreCategory, socket, data);
  }
};
async function ignoreOrWatch(fn, socket, data) {
  if (stryMutAct_9fa48("35496")) {
    {}
  } else {
    stryCov_9fa48("35496");
    let targetUid = socket.uid;
    const cids = Array.isArray(data.cid) ? data.cid.map(stryMutAct_9fa48("35497") ? () => undefined : (stryCov_9fa48("35497"), cid => parseInt(cid, 10))) : stryMutAct_9fa48("35498") ? [] : (stryCov_9fa48("35498"), [parseInt(data.cid, 10)]);
    if (stryMutAct_9fa48("35500") ? false : stryMutAct_9fa48("35499") ? true : (stryCov_9fa48("35499", "35500"), data.hasOwnProperty(stryMutAct_9fa48("35501") ? "" : (stryCov_9fa48("35501"), 'uid')))) {
      if (stryMutAct_9fa48("35502")) {
        {}
      } else {
        stryCov_9fa48("35502");
        targetUid = data.uid;
      }
    }
    await user.isAdminOrGlobalModOrSelf(socket.uid, targetUid);
    const allCids = await categories.getAllCidsFromSet(stryMutAct_9fa48("35503") ? "" : (stryCov_9fa48("35503"), 'categories:cid'));
    const categoryData = await categories.getCategoriesFields(allCids, stryMutAct_9fa48("35504") ? [] : (stryCov_9fa48("35504"), [stryMutAct_9fa48("35505") ? "" : (stryCov_9fa48("35505"), 'cid'), stryMutAct_9fa48("35506") ? "" : (stryCov_9fa48("35506"), 'parentCid')]));

    // filter to subcategories of cid
    let cat;
    do {
      if (stryMutAct_9fa48("35508")) {
        {}
      } else {
        stryCov_9fa48("35508");
        cat = categoryData.find(stryMutAct_9fa48("35509") ? () => undefined : (stryCov_9fa48("35509"), c => stryMutAct_9fa48("35512") ? !cids.includes(c.cid) || cids.includes(c.parentCid) : stryMutAct_9fa48("35511") ? false : stryMutAct_9fa48("35510") ? true : (stryCov_9fa48("35510", "35511", "35512"), (stryMutAct_9fa48("35513") ? cids.includes(c.cid) : (stryCov_9fa48("35513"), !cids.includes(c.cid))) && cids.includes(c.parentCid))));
        if (stryMutAct_9fa48("35515") ? false : stryMutAct_9fa48("35514") ? true : (stryCov_9fa48("35514", "35515"), cat)) {
          if (stryMutAct_9fa48("35516")) {
            {}
          } else {
            stryCov_9fa48("35516");
            cids.push(cat.cid);
          }
        }
      }
    } while (stryMutAct_9fa48("35507") ? false : (stryCov_9fa48("35507"), cat));
    await fn(targetUid, cids);
    await topics.pushUnreadCount(targetUid);
    return cids;
  }
}
SocketCategories.isModerator = async function (socket, cid) {
  if (stryMutAct_9fa48("35517")) {
    {}
  } else {
    stryCov_9fa48("35517");
    return await user.isModerator(socket.uid, cid);
  }
};
SocketCategories.loadMoreSubCategories = async function (socket, data) {
  if (stryMutAct_9fa48("35518")) {
    {}
  } else {
    stryCov_9fa48("35518");
    if (stryMutAct_9fa48("35521") ? (!data || !data.cid) && !(parseInt(data.start, 10) > 0) : stryMutAct_9fa48("35520") ? false : stryMutAct_9fa48("35519") ? true : (stryCov_9fa48("35519", "35520", "35521"), (stryMutAct_9fa48("35523") ? !data && !data.cid : stryMutAct_9fa48("35522") ? false : (stryCov_9fa48("35522", "35523"), (stryMutAct_9fa48("35524") ? data : (stryCov_9fa48("35524"), !data)) || (stryMutAct_9fa48("35525") ? data.cid : (stryCov_9fa48("35525"), !data.cid)))) || (stryMutAct_9fa48("35526") ? parseInt(data.start, 10) > 0 : (stryCov_9fa48("35526"), !(stryMutAct_9fa48("35530") ? parseInt(data.start, 10) <= 0 : stryMutAct_9fa48("35529") ? parseInt(data.start, 10) >= 0 : stryMutAct_9fa48("35528") ? false : stryMutAct_9fa48("35527") ? true : (stryCov_9fa48("35527", "35528", "35529", "35530"), parseInt(data.start, 10) > 0)))))) {
      if (stryMutAct_9fa48("35531")) {
        {}
      } else {
        stryCov_9fa48("35531");
        throw new Error(stryMutAct_9fa48("35532") ? "" : (stryCov_9fa48("35532"), '[[error:invalid-data]]'));
      }
    }
    const allowed = await privileges.categories.can(stryMutAct_9fa48("35533") ? "" : (stryCov_9fa48("35533"), 'read'), data.cid, socket.uid);
    if (stryMutAct_9fa48("35536") ? false : stryMutAct_9fa48("35535") ? true : stryMutAct_9fa48("35534") ? allowed : (stryCov_9fa48("35534", "35535", "35536"), !allowed)) {
      if (stryMutAct_9fa48("35537")) {
        {}
      } else {
        stryCov_9fa48("35537");
        throw new Error(stryMutAct_9fa48("35538") ? "" : (stryCov_9fa48("35538"), '[[error:no-privileges]]'));
      }
    }
    const category = await categories.getCategoryData(data.cid);
    await categories.getChildrenTree(category, socket.uid);
    const allCategories = stryMutAct_9fa48("35539") ? ["Stryker was here"] : (stryCov_9fa48("35539"), []);
    categories.flattenCategories(allCategories, category.children);
    await categories.getRecentTopicReplies(allCategories, socket.uid);
    const start = parseInt(data.start, 10);
    return stryMutAct_9fa48("35540") ? category.children : (stryCov_9fa48("35540"), category.children.slice(start, stryMutAct_9fa48("35541") ? start - category.subCategoriesPerPage : (stryCov_9fa48("35541"), start + category.subCategoriesPerPage)));
  }
};
require('../promisify')(SocketCategories);