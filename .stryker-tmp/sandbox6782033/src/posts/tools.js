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
const privileges = require('../privileges');
module.exports = function (Posts) {
  if (stryMutAct_9fa48("29974")) {
    {}
  } else {
    stryCov_9fa48("29974");
    Posts.tools = {};
    Posts.tools.delete = async function (uid, pid) {
      if (stryMutAct_9fa48("29975")) {
        {}
      } else {
        stryCov_9fa48("29975");
        return await togglePostDelete(uid, pid, stryMutAct_9fa48("29976") ? false : (stryCov_9fa48("29976"), true));
      }
    };
    Posts.tools.restore = async function (uid, pid) {
      if (stryMutAct_9fa48("29977")) {
        {}
      } else {
        stryCov_9fa48("29977");
        return await togglePostDelete(uid, pid, stryMutAct_9fa48("29978") ? true : (stryCov_9fa48("29978"), false));
      }
    };
    async function togglePostDelete(uid, pid, isDelete) {
      if (stryMutAct_9fa48("29979")) {
        {}
      } else {
        stryCov_9fa48("29979");
        const [postData, canDelete] = await Promise.all(stryMutAct_9fa48("29980") ? [] : (stryCov_9fa48("29980"), [Posts.getPostData(pid), privileges.posts.canDelete(pid, uid)]));
        if (stryMutAct_9fa48("29983") ? false : stryMutAct_9fa48("29982") ? true : stryMutAct_9fa48("29981") ? postData : (stryCov_9fa48("29981", "29982", "29983"), !postData)) {
          if (stryMutAct_9fa48("29984")) {
            {}
          } else {
            stryCov_9fa48("29984");
            throw new Error(stryMutAct_9fa48("29985") ? "" : (stryCov_9fa48("29985"), '[[error:no-post]]'));
          }
        }
        if (stryMutAct_9fa48("29988") ? postData.deleted || isDelete : stryMutAct_9fa48("29987") ? false : stryMutAct_9fa48("29986") ? true : (stryCov_9fa48("29986", "29987", "29988"), postData.deleted && isDelete)) {
          if (stryMutAct_9fa48("29989")) {
            {}
          } else {
            stryCov_9fa48("29989");
            throw new Error(stryMutAct_9fa48("29990") ? "" : (stryCov_9fa48("29990"), '[[error:post-already-deleted]]'));
          }
        } else if (stryMutAct_9fa48("29993") ? !postData.deleted || !isDelete : stryMutAct_9fa48("29992") ? false : stryMutAct_9fa48("29991") ? true : (stryCov_9fa48("29991", "29992", "29993"), (stryMutAct_9fa48("29994") ? postData.deleted : (stryCov_9fa48("29994"), !postData.deleted)) && (stryMutAct_9fa48("29995") ? isDelete : (stryCov_9fa48("29995"), !isDelete)))) {
          if (stryMutAct_9fa48("29996")) {
            {}
          } else {
            stryCov_9fa48("29996");
            throw new Error(stryMutAct_9fa48("29997") ? "" : (stryCov_9fa48("29997"), '[[error:post-already-restored]]'));
          }
        }
        if (stryMutAct_9fa48("30000") ? false : stryMutAct_9fa48("29999") ? true : stryMutAct_9fa48("29998") ? canDelete.flag : (stryCov_9fa48("29998", "29999", "30000"), !canDelete.flag)) {
          if (stryMutAct_9fa48("30001")) {
            {}
          } else {
            stryCov_9fa48("30001");
            throw new Error(canDelete.message);
          }
        }
        let post;
        if (stryMutAct_9fa48("30003") ? false : stryMutAct_9fa48("30002") ? true : (stryCov_9fa48("30002", "30003"), isDelete)) {
          if (stryMutAct_9fa48("30004")) {
            {}
          } else {
            stryCov_9fa48("30004");
            require('./cache').del(pid);
            post = await Posts.delete(pid, uid);
          }
        } else {
          if (stryMutAct_9fa48("30005")) {
            {}
          } else {
            stryCov_9fa48("30005");
            post = await Posts.restore(pid, uid);
            post = await Posts.parsePost(post);
          }
        }
        return post;
      }
    }
  }
};