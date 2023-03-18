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
const _ = require('lodash');
const db = require('../../database');
const user = require('../../user');
const posts = require('../../posts');
const categories = require('../../categories');
const plugins = require('../../plugins');
const meta = require('../../meta');
const privileges = require('../../privileges');
const accountHelpers = require('./helpers');
const helpers = require('../helpers');
const utils = require('../../utils');
const profileController = module.exports;
profileController.get = async function (req, res, next) {
  if (stryMutAct_9fa48("6091")) {
    {}
  } else {
    stryCov_9fa48("6091");
    const lowercaseSlug = stryMutAct_9fa48("6092") ? req.params.userslug.toUpperCase() : (stryCov_9fa48("6092"), req.params.userslug.toLowerCase());
    if (stryMutAct_9fa48("6095") ? req.params.userslug === lowercaseSlug : stryMutAct_9fa48("6094") ? false : stryMutAct_9fa48("6093") ? true : (stryCov_9fa48("6093", "6094", "6095"), req.params.userslug !== lowercaseSlug)) {
      if (stryMutAct_9fa48("6096")) {
        {}
      } else {
        stryCov_9fa48("6096");
        if (stryMutAct_9fa48("6098") ? false : stryMutAct_9fa48("6097") ? true : (stryCov_9fa48("6097", "6098"), res.locals.isAPI)) {
          if (stryMutAct_9fa48("6099")) {
            {}
          } else {
            stryCov_9fa48("6099");
            req.params.userslug = lowercaseSlug;
          }
        } else {
          if (stryMutAct_9fa48("6100")) {
            {}
          } else {
            stryCov_9fa48("6100");
            return res.redirect(stryMutAct_9fa48("6101") ? `` : (stryCov_9fa48("6101"), `${nconf.get(stryMutAct_9fa48("6102") ? "" : (stryCov_9fa48("6102"), 'relative_path'))}/user/${lowercaseSlug}`));
          }
        }
      }
    }
    const userData = await accountHelpers.getUserDataByUserSlug(req.params.userslug, req.uid, req.query);
    if (stryMutAct_9fa48("6105") ? false : stryMutAct_9fa48("6104") ? true : stryMutAct_9fa48("6103") ? userData : (stryCov_9fa48("6103", "6104", "6105"), !userData)) {
      if (stryMutAct_9fa48("6106")) {
        {}
      } else {
        stryCov_9fa48("6106");
        return next();
      }
    }
    await incrementProfileViews(req, userData);
    const [latestPosts, bestPosts] = await Promise.all(stryMutAct_9fa48("6107") ? [] : (stryCov_9fa48("6107"), [getLatestPosts(req.uid, userData), getBestPosts(req.uid, userData), posts.parseSignature(userData, req.uid)]));
    if (stryMutAct_9fa48("6109") ? false : stryMutAct_9fa48("6108") ? true : (stryCov_9fa48("6108", "6109"), meta.config[stryMutAct_9fa48("6110") ? "" : (stryCov_9fa48("6110"), 'reputation:disabled')])) {
      if (stryMutAct_9fa48("6111")) {
        {}
      } else {
        stryCov_9fa48("6111");
        delete userData.reputation;
      }
    }
    userData.posts = latestPosts; // for backwards compat.
    userData.latestPosts = latestPosts;
    userData.bestPosts = bestPosts;
    userData.breadcrumbs = helpers.buildBreadcrumbs(stryMutAct_9fa48("6112") ? [] : (stryCov_9fa48("6112"), [stryMutAct_9fa48("6113") ? {} : (stryCov_9fa48("6113"), {
      text: userData.username
    })]));
    userData.title = userData.username;
    userData.allowCoverPicture = stryMutAct_9fa48("6116") ? (!userData.isSelf || !!meta.config['reputation:disabled']) && userData.reputation >= meta.config['min:rep:cover-picture'] : stryMutAct_9fa48("6115") ? false : stryMutAct_9fa48("6114") ? true : (stryCov_9fa48("6114", "6115", "6116"), (stryMutAct_9fa48("6118") ? !userData.isSelf && !!meta.config['reputation:disabled'] : stryMutAct_9fa48("6117") ? false : (stryCov_9fa48("6117", "6118"), (stryMutAct_9fa48("6119") ? userData.isSelf : (stryCov_9fa48("6119"), !userData.isSelf)) || (stryMutAct_9fa48("6120") ? !meta.config['reputation:disabled'] : (stryCov_9fa48("6120"), !(stryMutAct_9fa48("6121") ? meta.config['reputation:disabled'] : (stryCov_9fa48("6121"), !meta.config[stryMutAct_9fa48("6122") ? "" : (stryCov_9fa48("6122"), 'reputation:disabled')])))))) || (stryMutAct_9fa48("6125") ? userData.reputation < meta.config['min:rep:cover-picture'] : stryMutAct_9fa48("6124") ? userData.reputation > meta.config['min:rep:cover-picture'] : stryMutAct_9fa48("6123") ? false : (stryCov_9fa48("6123", "6124", "6125"), userData.reputation >= meta.config[stryMutAct_9fa48("6126") ? "" : (stryCov_9fa48("6126"), 'min:rep:cover-picture')])));

    // Show email changed modal on first access after said change
    userData.emailChanged = req.session.emailChanged;
    delete req.session.emailChanged;
    if (stryMutAct_9fa48("6129") ? false : stryMutAct_9fa48("6128") ? true : stryMutAct_9fa48("6127") ? userData.profileviews : (stryCov_9fa48("6127", "6128", "6129"), !userData.profileviews)) {
      if (stryMutAct_9fa48("6130")) {
        {}
      } else {
        stryCov_9fa48("6130");
        userData.profileviews = 1;
      }
    }
    addMetaTags(res, userData);
    userData.selectedGroup = stryMutAct_9fa48("6132") ? userData.groups.sort((a, b) => userData.groupTitleArray.indexOf(a.name) - userData.groupTitleArray.indexOf(b.name)) : stryMutAct_9fa48("6131") ? userData.groups.filter(group => group && userData.groupTitleArray.includes(group.name)) : (stryCov_9fa48("6131", "6132"), userData.groups.filter(stryMutAct_9fa48("6133") ? () => undefined : (stryCov_9fa48("6133"), group => stryMutAct_9fa48("6136") ? group || userData.groupTitleArray.includes(group.name) : stryMutAct_9fa48("6135") ? false : stryMutAct_9fa48("6134") ? true : (stryCov_9fa48("6134", "6135", "6136"), group && userData.groupTitleArray.includes(group.name)))).sort(stryMutAct_9fa48("6137") ? () => undefined : (stryCov_9fa48("6137"), (a, b) => stryMutAct_9fa48("6138") ? userData.groupTitleArray.indexOf(a.name) + userData.groupTitleArray.indexOf(b.name) : (stryCov_9fa48("6138"), userData.groupTitleArray.indexOf(a.name) - userData.groupTitleArray.indexOf(b.name)))));
    res.render(stryMutAct_9fa48("6139") ? "" : (stryCov_9fa48("6139"), 'account/profile'), userData);
  }
};
async function incrementProfileViews(req, userData) {
  if (stryMutAct_9fa48("6140")) {
    {}
  } else {
    stryCov_9fa48("6140");
    if (stryMutAct_9fa48("6144") ? req.uid < 1 : stryMutAct_9fa48("6143") ? req.uid > 1 : stryMutAct_9fa48("6142") ? false : stryMutAct_9fa48("6141") ? true : (stryCov_9fa48("6141", "6142", "6143", "6144"), req.uid >= 1)) {
      if (stryMutAct_9fa48("6145")) {
        {}
      } else {
        stryCov_9fa48("6145");
        req.session.uids_viewed = stryMutAct_9fa48("6148") ? req.session.uids_viewed && {} : stryMutAct_9fa48("6147") ? false : stryMutAct_9fa48("6146") ? true : (stryCov_9fa48("6146", "6147", "6148"), req.session.uids_viewed || {});
        if (stryMutAct_9fa48("6151") ? req.uid !== userData.uid || !req.session.uids_viewed[userData.uid] || req.session.uids_viewed[userData.uid] < Date.now() - 3600000 : stryMutAct_9fa48("6150") ? false : stryMutAct_9fa48("6149") ? true : (stryCov_9fa48("6149", "6150", "6151"), (stryMutAct_9fa48("6153") ? req.uid === userData.uid : stryMutAct_9fa48("6152") ? true : (stryCov_9fa48("6152", "6153"), req.uid !== userData.uid)) && (stryMutAct_9fa48("6155") ? !req.session.uids_viewed[userData.uid] && req.session.uids_viewed[userData.uid] < Date.now() - 3600000 : stryMutAct_9fa48("6154") ? true : (stryCov_9fa48("6154", "6155"), (stryMutAct_9fa48("6156") ? req.session.uids_viewed[userData.uid] : (stryCov_9fa48("6156"), !req.session.uids_viewed[userData.uid])) || (stryMutAct_9fa48("6159") ? req.session.uids_viewed[userData.uid] >= Date.now() - 3600000 : stryMutAct_9fa48("6158") ? req.session.uids_viewed[userData.uid] <= Date.now() - 3600000 : stryMutAct_9fa48("6157") ? false : (stryCov_9fa48("6157", "6158", "6159"), req.session.uids_viewed[userData.uid] < (stryMutAct_9fa48("6160") ? Date.now() + 3600000 : (stryCov_9fa48("6160"), Date.now() - 3600000)))))))) {
          if (stryMutAct_9fa48("6161")) {
            {}
          } else {
            stryCov_9fa48("6161");
            await user.incrementUserFieldBy(userData.uid, stryMutAct_9fa48("6162") ? "" : (stryCov_9fa48("6162"), 'profileviews'), 1);
            req.session.uids_viewed[userData.uid] = Date.now();
          }
        }
      }
    }
  }
}
async function getLatestPosts(callerUid, userData) {
  if (stryMutAct_9fa48("6163")) {
    {}
  } else {
    stryCov_9fa48("6163");
    return await getPosts(callerUid, userData, stryMutAct_9fa48("6164") ? "" : (stryCov_9fa48("6164"), 'pids'));
  }
}
async function getBestPosts(callerUid, userData) {
  if (stryMutAct_9fa48("6165")) {
    {}
  } else {
    stryCov_9fa48("6165");
    return await getPosts(callerUid, userData, stryMutAct_9fa48("6166") ? "" : (stryCov_9fa48("6166"), 'pids:votes'));
  }
}
async function getPosts(callerUid, userData, setSuffix) {
  if (stryMutAct_9fa48("6167")) {
    {}
  } else {
    stryCov_9fa48("6167");
    const cids = await categories.getCidsByPrivilege(stryMutAct_9fa48("6168") ? "" : (stryCov_9fa48("6168"), 'categories:cid'), callerUid, stryMutAct_9fa48("6169") ? "" : (stryCov_9fa48("6169"), 'topics:read'));
    const keys = cids.map(stryMutAct_9fa48("6170") ? () => undefined : (stryCov_9fa48("6170"), c => stryMutAct_9fa48("6171") ? `` : (stryCov_9fa48("6171"), `cid:${c}:uid:${userData.uid}:${setSuffix}`)));
    let hasMorePosts = stryMutAct_9fa48("6172") ? false : (stryCov_9fa48("6172"), true);
    let start = 0;
    const count = 10;
    const postData = stryMutAct_9fa48("6173") ? ["Stryker was here"] : (stryCov_9fa48("6173"), []);
    const [isAdmin, isModOfCids, canSchedule] = await Promise.all(stryMutAct_9fa48("6174") ? [] : (stryCov_9fa48("6174"), [user.isAdministrator(callerUid), user.isModerator(callerUid, cids), privileges.categories.isUserAllowedTo(stryMutAct_9fa48("6175") ? "" : (stryCov_9fa48("6175"), 'topics:schedule'), cids, callerUid)]));
    const cidToIsMod = _.zipObject(cids, isModOfCids);
    const cidToCanSchedule = _.zipObject(cids, canSchedule);
    do {
      if (stryMutAct_9fa48("6181")) {
        {}
      } else {
        stryCov_9fa48("6181");
        /* eslint-disable no-await-in-loop */
        let pids = await db.getSortedSetRevRange(keys, start, stryMutAct_9fa48("6182") ? start + count + 1 : (stryCov_9fa48("6182"), (stryMutAct_9fa48("6183") ? start - count : (stryCov_9fa48("6183"), start + count)) - 1));
        if (stryMutAct_9fa48("6186") ? !pids.length && pids.length < count : stryMutAct_9fa48("6185") ? false : stryMutAct_9fa48("6184") ? true : (stryCov_9fa48("6184", "6185", "6186"), (stryMutAct_9fa48("6187") ? pids.length : (stryCov_9fa48("6187"), !pids.length)) || (stryMutAct_9fa48("6190") ? pids.length >= count : stryMutAct_9fa48("6189") ? pids.length <= count : stryMutAct_9fa48("6188") ? false : (stryCov_9fa48("6188", "6189", "6190"), pids.length < count)))) {
          if (stryMutAct_9fa48("6191")) {
            {}
          } else {
            stryCov_9fa48("6191");
            hasMorePosts = stryMutAct_9fa48("6192") ? true : (stryCov_9fa48("6192"), false);
          }
        }
        if (stryMutAct_9fa48("6194") ? false : stryMutAct_9fa48("6193") ? true : (stryCov_9fa48("6193", "6194"), pids.length)) {
          if (stryMutAct_9fa48("6195")) {
            {}
          } else {
            stryCov_9fa48("6195");
            ({
              pids
            } = await plugins.hooks.fire(stryMutAct_9fa48("6196") ? "" : (stryCov_9fa48("6196"), 'filter:account.profile.getPids'), stryMutAct_9fa48("6197") ? {} : (stryCov_9fa48("6197"), {
              uid: callerUid,
              userData,
              setSuffix,
              pids
            })));
            const p = await posts.getPostSummaryByPids(pids, callerUid, stryMutAct_9fa48("6198") ? {} : (stryCov_9fa48("6198"), {
              stripTags: stryMutAct_9fa48("6199") ? true : (stryCov_9fa48("6199"), false)
            }));
            postData.push(...(stryMutAct_9fa48("6200") ? p : (stryCov_9fa48("6200"), p.filter(stryMutAct_9fa48("6201") ? () => undefined : (stryCov_9fa48("6201"), p => stryMutAct_9fa48("6204") ? p && p.topic || isAdmin || cidToIsMod[p.topic.cid] || p.topic.scheduled && cidToCanSchedule[p.topic.cid] || !p.deleted && !p.topic.deleted : stryMutAct_9fa48("6203") ? false : stryMutAct_9fa48("6202") ? true : (stryCov_9fa48("6202", "6203", "6204"), (stryMutAct_9fa48("6206") ? p || p.topic : stryMutAct_9fa48("6205") ? true : (stryCov_9fa48("6205", "6206"), p && p.topic)) && (stryMutAct_9fa48("6208") ? (isAdmin || cidToIsMod[p.topic.cid] || p.topic.scheduled && cidToCanSchedule[p.topic.cid]) && !p.deleted && !p.topic.deleted : stryMutAct_9fa48("6207") ? true : (stryCov_9fa48("6207", "6208"), (stryMutAct_9fa48("6210") ? (isAdmin || cidToIsMod[p.topic.cid]) && p.topic.scheduled && cidToCanSchedule[p.topic.cid] : stryMutAct_9fa48("6209") ? false : (stryCov_9fa48("6209", "6210"), (stryMutAct_9fa48("6212") ? isAdmin && cidToIsMod[p.topic.cid] : stryMutAct_9fa48("6211") ? false : (stryCov_9fa48("6211", "6212"), isAdmin || cidToIsMod[p.topic.cid])) || (stryMutAct_9fa48("6214") ? p.topic.scheduled || cidToCanSchedule[p.topic.cid] : stryMutAct_9fa48("6213") ? false : (stryCov_9fa48("6213", "6214"), p.topic.scheduled && cidToCanSchedule[p.topic.cid])))) || (stryMutAct_9fa48("6216") ? !p.deleted || !p.topic.deleted : stryMutAct_9fa48("6215") ? false : (stryCov_9fa48("6215", "6216"), (stryMutAct_9fa48("6217") ? p.deleted : (stryCov_9fa48("6217"), !p.deleted)) && (stryMutAct_9fa48("6218") ? p.topic.deleted : (stryCov_9fa48("6218"), !p.topic.deleted))))))))))));
          }
        }
        stryMutAct_9fa48("6219") ? start -= count : (stryCov_9fa48("6219"), start += count);
      }
    } while (stryMutAct_9fa48("6177") ? postData.length < count || hasMorePosts : stryMutAct_9fa48("6176") ? false : (stryCov_9fa48("6176", "6177"), (stryMutAct_9fa48("6180") ? postData.length >= count : stryMutAct_9fa48("6179") ? postData.length <= count : stryMutAct_9fa48("6178") ? true : (stryCov_9fa48("6178", "6179", "6180"), postData.length < count)) && hasMorePosts));
    return stryMutAct_9fa48("6220") ? postData : (stryCov_9fa48("6220"), postData.slice(0, count));
  }
}
function addMetaTags(res, userData) {
  if (stryMutAct_9fa48("6221")) {
    {}
  } else {
    stryCov_9fa48("6221");
    const plainAboutMe = userData.aboutme ? utils.stripHTMLTags(utils.decodeHTMLEntities(userData.aboutme)) : stryMutAct_9fa48("6222") ? "Stryker was here!" : (stryCov_9fa48("6222"), '');
    res.locals.metaTags = stryMutAct_9fa48("6223") ? [] : (stryCov_9fa48("6223"), [stryMutAct_9fa48("6224") ? {} : (stryCov_9fa48("6224"), {
      name: stryMutAct_9fa48("6225") ? "" : (stryCov_9fa48("6225"), 'title'),
      content: stryMutAct_9fa48("6228") ? userData.fullname && userData.username : stryMutAct_9fa48("6227") ? false : stryMutAct_9fa48("6226") ? true : (stryCov_9fa48("6226", "6227", "6228"), userData.fullname || userData.username),
      noEscape: stryMutAct_9fa48("6229") ? false : (stryCov_9fa48("6229"), true)
    }), stryMutAct_9fa48("6230") ? {} : (stryCov_9fa48("6230"), {
      name: stryMutAct_9fa48("6231") ? "" : (stryCov_9fa48("6231"), 'description'),
      content: plainAboutMe
    }), stryMutAct_9fa48("6232") ? {} : (stryCov_9fa48("6232"), {
      property: stryMutAct_9fa48("6233") ? "" : (stryCov_9fa48("6233"), 'og:title'),
      content: stryMutAct_9fa48("6236") ? userData.fullname && userData.username : stryMutAct_9fa48("6235") ? false : stryMutAct_9fa48("6234") ? true : (stryCov_9fa48("6234", "6235", "6236"), userData.fullname || userData.username),
      noEscape: stryMutAct_9fa48("6237") ? false : (stryCov_9fa48("6237"), true)
    }), stryMutAct_9fa48("6238") ? {} : (stryCov_9fa48("6238"), {
      property: stryMutAct_9fa48("6239") ? "" : (stryCov_9fa48("6239"), 'og:description'),
      content: plainAboutMe
    })]);
    if (stryMutAct_9fa48("6241") ? false : stryMutAct_9fa48("6240") ? true : (stryCov_9fa48("6240", "6241"), userData.picture)) {
      if (stryMutAct_9fa48("6242")) {
        {}
      } else {
        stryCov_9fa48("6242");
        res.locals.metaTags.push(stryMutAct_9fa48("6243") ? {} : (stryCov_9fa48("6243"), {
          property: stryMutAct_9fa48("6244") ? "" : (stryCov_9fa48("6244"), 'og:image'),
          content: userData.picture,
          noEscape: stryMutAct_9fa48("6245") ? false : (stryCov_9fa48("6245"), true)
        }), stryMutAct_9fa48("6246") ? {} : (stryCov_9fa48("6246"), {
          property: stryMutAct_9fa48("6247") ? "" : (stryCov_9fa48("6247"), 'og:image:url'),
          content: userData.picture,
          noEscape: stryMutAct_9fa48("6248") ? false : (stryCov_9fa48("6248"), true)
        }));
      }
    }
  }
}