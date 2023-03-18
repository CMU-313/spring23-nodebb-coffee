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
const db = require('../../database');
const posts = require('../../posts');
const flags = require('../../flags');
const events = require('../../events');
const privileges = require('../../privileges');
const plugins = require('../../plugins');
const social = require('../../social');
const user = require('../../user');
const utils = require('../../utils');
module.exports = function (SocketPosts) {
  if (stryMutAct_9fa48("36562")) {
    {}
  } else {
    stryCov_9fa48("36562");
    SocketPosts.loadPostTools = async function (socket, data) {
      if (stryMutAct_9fa48("36563")) {
        {}
      } else {
        stryCov_9fa48("36563");
        if (stryMutAct_9fa48("36566") ? (!data || !data.pid) && !data.cid : stryMutAct_9fa48("36565") ? false : stryMutAct_9fa48("36564") ? true : (stryCov_9fa48("36564", "36565", "36566"), (stryMutAct_9fa48("36568") ? !data && !data.pid : stryMutAct_9fa48("36567") ? false : (stryCov_9fa48("36567", "36568"), (stryMutAct_9fa48("36569") ? data : (stryCov_9fa48("36569"), !data)) || (stryMutAct_9fa48("36570") ? data.pid : (stryCov_9fa48("36570"), !data.pid)))) || (stryMutAct_9fa48("36571") ? data.cid : (stryCov_9fa48("36571"), !data.cid)))) {
          if (stryMutAct_9fa48("36572")) {
            {}
          } else {
            stryCov_9fa48("36572");
            throw new Error(stryMutAct_9fa48("36573") ? "" : (stryCov_9fa48("36573"), '[[error:invalid-data]]'));
          }
        }
        const results = await utils.promiseParallel(stryMutAct_9fa48("36574") ? {} : (stryCov_9fa48("36574"), {
          posts: posts.getPostFields(data.pid, stryMutAct_9fa48("36575") ? [] : (stryCov_9fa48("36575"), [stryMutAct_9fa48("36576") ? "" : (stryCov_9fa48("36576"), 'deleted'), stryMutAct_9fa48("36577") ? "" : (stryCov_9fa48("36577"), 'bookmarks'), stryMutAct_9fa48("36578") ? "" : (stryCov_9fa48("36578"), 'uid'), stryMutAct_9fa48("36579") ? "" : (stryCov_9fa48("36579"), 'ip'), stryMutAct_9fa48("36580") ? "" : (stryCov_9fa48("36580"), 'flagId')])),
          isAdmin: user.isAdministrator(socket.uid),
          isGlobalMod: user.isGlobalModerator(socket.uid),
          isModerator: user.isModerator(socket.uid, data.cid),
          canEdit: privileges.posts.canEdit(data.pid, socket.uid),
          canDelete: privileges.posts.canDelete(data.pid, socket.uid),
          canPurge: privileges.posts.canPurge(data.pid, socket.uid),
          canFlag: privileges.posts.canFlag(data.pid, socket.uid),
          flagged: flags.exists(stryMutAct_9fa48("36581") ? "" : (stryCov_9fa48("36581"), 'post'), data.pid, socket.uid),
          // specifically, whether THIS calling user flagged
          bookmarked: posts.hasBookmarked(data.pid, socket.uid),
          postSharing: social.getActivePostSharing(),
          history: posts.diffs.exists(data.pid),
          canViewInfo: privileges.global.can(stryMutAct_9fa48("36582") ? "" : (stryCov_9fa48("36582"), 'view:users:info'), socket.uid)
        }));
        const postData = results.posts;
        postData.absolute_url = stryMutAct_9fa48("36583") ? `` : (stryCov_9fa48("36583"), `${nconf.get(stryMutAct_9fa48("36584") ? "" : (stryCov_9fa48("36584"), 'url'))}/post/${data.pid}`);
        postData.bookmarked = results.bookmarked;
        postData.selfPost = stryMutAct_9fa48("36587") ? socket.uid || socket.uid === postData.uid : stryMutAct_9fa48("36586") ? false : stryMutAct_9fa48("36585") ? true : (stryCov_9fa48("36585", "36586", "36587"), socket.uid && (stryMutAct_9fa48("36589") ? socket.uid !== postData.uid : stryMutAct_9fa48("36588") ? true : (stryCov_9fa48("36588", "36589"), socket.uid === postData.uid)));
        postData.display_edit_tools = results.canEdit.flag;
        postData.display_delete_tools = results.canDelete.flag;
        postData.display_purge_tools = results.canPurge;
        postData.display_flag_tools = stryMutAct_9fa48("36592") ? socket.uid || results.canFlag.flag : stryMutAct_9fa48("36591") ? false : stryMutAct_9fa48("36590") ? true : (stryCov_9fa48("36590", "36591", "36592"), socket.uid && results.canFlag.flag);
        postData.display_moderator_tools = stryMutAct_9fa48("36595") ? postData.display_edit_tools && postData.display_delete_tools : stryMutAct_9fa48("36594") ? false : stryMutAct_9fa48("36593") ? true : (stryCov_9fa48("36593", "36594", "36595"), postData.display_edit_tools || postData.display_delete_tools);
        postData.display_move_tools = stryMutAct_9fa48("36598") ? results.isAdmin && results.isModerator : stryMutAct_9fa48("36597") ? false : stryMutAct_9fa48("36596") ? true : (stryCov_9fa48("36596", "36597", "36598"), results.isAdmin || results.isModerator);
        postData.display_change_owner_tools = stryMutAct_9fa48("36601") ? results.isAdmin && results.isModerator : stryMutAct_9fa48("36600") ? false : stryMutAct_9fa48("36599") ? true : (stryCov_9fa48("36599", "36600", "36601"), results.isAdmin || results.isModerator);
        postData.display_ip_ban = stryMutAct_9fa48("36604") ? results.isAdmin || results.isGlobalMod || !postData.selfPost : stryMutAct_9fa48("36603") ? false : stryMutAct_9fa48("36602") ? true : (stryCov_9fa48("36602", "36603", "36604"), (stryMutAct_9fa48("36606") ? results.isAdmin && results.isGlobalMod : stryMutAct_9fa48("36605") ? true : (stryCov_9fa48("36605", "36606"), results.isAdmin || results.isGlobalMod)) && (stryMutAct_9fa48("36607") ? postData.selfPost : (stryCov_9fa48("36607"), !postData.selfPost)));
        postData.display_history = results.history;
        postData.flags = stryMutAct_9fa48("36608") ? {} : (stryCov_9fa48("36608"), {
          flagId: stryMutAct_9fa48("36611") ? parseInt(results.posts.flagId, 10) && null : stryMutAct_9fa48("36610") ? false : stryMutAct_9fa48("36609") ? true : (stryCov_9fa48("36609", "36610", "36611"), parseInt(results.posts.flagId, 10) || null),
          can: results.canFlag.flag,
          exists: stryMutAct_9fa48("36612") ? !results.posts.flagId : (stryCov_9fa48("36612"), !(stryMutAct_9fa48("36613") ? results.posts.flagId : (stryCov_9fa48("36613"), !results.posts.flagId))),
          flagged: results.flagged,
          state: await db.getObjectField(stryMutAct_9fa48("36614") ? `` : (stryCov_9fa48("36614"), `flag:${postData.flagId}`), stryMutAct_9fa48("36615") ? "" : (stryCov_9fa48("36615"), 'state'))
        });
        if (stryMutAct_9fa48("36618") ? !results.isAdmin || !results.canViewInfo : stryMutAct_9fa48("36617") ? false : stryMutAct_9fa48("36616") ? true : (stryCov_9fa48("36616", "36617", "36618"), (stryMutAct_9fa48("36619") ? results.isAdmin : (stryCov_9fa48("36619"), !results.isAdmin)) && (stryMutAct_9fa48("36620") ? results.canViewInfo : (stryCov_9fa48("36620"), !results.canViewInfo)))) {
          if (stryMutAct_9fa48("36621")) {
            {}
          } else {
            stryCov_9fa48("36621");
            postData.ip = undefined;
          }
        }
        const {
          tools
        } = await plugins.hooks.fire(stryMutAct_9fa48("36622") ? "" : (stryCov_9fa48("36622"), 'filter:post.tools'), stryMutAct_9fa48("36623") ? {} : (stryCov_9fa48("36623"), {
          pid: data.pid,
          post: postData,
          uid: socket.uid,
          tools: stryMutAct_9fa48("36624") ? ["Stryker was here"] : (stryCov_9fa48("36624"), [])
        }));
        postData.tools = tools;
        return results;
      }
    };
    SocketPosts.changeOwner = async function (socket, data) {
      if (stryMutAct_9fa48("36625")) {
        {}
      } else {
        stryCov_9fa48("36625");
        if (stryMutAct_9fa48("36628") ? (!data || !Array.isArray(data.pids)) && !data.toUid : stryMutAct_9fa48("36627") ? false : stryMutAct_9fa48("36626") ? true : (stryCov_9fa48("36626", "36627", "36628"), (stryMutAct_9fa48("36630") ? !data && !Array.isArray(data.pids) : stryMutAct_9fa48("36629") ? false : (stryCov_9fa48("36629", "36630"), (stryMutAct_9fa48("36631") ? data : (stryCov_9fa48("36631"), !data)) || (stryMutAct_9fa48("36632") ? Array.isArray(data.pids) : (stryCov_9fa48("36632"), !Array.isArray(data.pids))))) || (stryMutAct_9fa48("36633") ? data.toUid : (stryCov_9fa48("36633"), !data.toUid)))) {
          if (stryMutAct_9fa48("36634")) {
            {}
          } else {
            stryCov_9fa48("36634");
            throw new Error(stryMutAct_9fa48("36635") ? "" : (stryCov_9fa48("36635"), '[[error:invalid-data]]'));
          }
        }
        const isAdminOrGlobalMod = await user.isAdminOrGlobalMod(socket.uid);
        if (stryMutAct_9fa48("36638") ? false : stryMutAct_9fa48("36637") ? true : stryMutAct_9fa48("36636") ? isAdminOrGlobalMod : (stryCov_9fa48("36636", "36637", "36638"), !isAdminOrGlobalMod)) {
          if (stryMutAct_9fa48("36639")) {
            {}
          } else {
            stryCov_9fa48("36639");
            throw new Error(stryMutAct_9fa48("36640") ? "" : (stryCov_9fa48("36640"), '[[error:no-privileges]]'));
          }
        }
        const postData = await posts.changeOwner(data.pids, data.toUid);
        const logs = postData.map(stryMutAct_9fa48("36641") ? () => undefined : (stryCov_9fa48("36641"), ({
          pid,
          uid,
          cid
        }) => events.log(stryMutAct_9fa48("36642") ? {} : (stryCov_9fa48("36642"), {
          type: stryMutAct_9fa48("36643") ? "" : (stryCov_9fa48("36643"), 'post-change-owner'),
          uid: socket.uid,
          ip: socket.ip,
          targetUid: data.toUid,
          pid: pid,
          originalUid: uid,
          cid: cid
        }))));
        await Promise.all(logs);
      }
    };
  }
};