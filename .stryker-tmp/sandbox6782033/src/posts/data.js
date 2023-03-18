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
const db = require('../database');
const plugins = require('../plugins');
const utils = require('../utils');
const intFields = stryMutAct_9fa48("28601") ? [] : (stryCov_9fa48("28601"), [stryMutAct_9fa48("28602") ? "" : (stryCov_9fa48("28602"), 'uid'), stryMutAct_9fa48("28603") ? "" : (stryCov_9fa48("28603"), 'pid'), stryMutAct_9fa48("28604") ? "" : (stryCov_9fa48("28604"), 'tid'), stryMutAct_9fa48("28605") ? "" : (stryCov_9fa48("28605"), 'deleted'), stryMutAct_9fa48("28606") ? "" : (stryCov_9fa48("28606"), 'timestamp'), stryMutAct_9fa48("28607") ? "" : (stryCov_9fa48("28607"), 'upvotes'), stryMutAct_9fa48("28608") ? "" : (stryCov_9fa48("28608"), 'downvotes'), stryMutAct_9fa48("28609") ? "" : (stryCov_9fa48("28609"), 'deleterUid'), stryMutAct_9fa48("28610") ? "" : (stryCov_9fa48("28610"), 'edited'), stryMutAct_9fa48("28611") ? "" : (stryCov_9fa48("28611"), 'replies'), stryMutAct_9fa48("28612") ? "" : (stryCov_9fa48("28612"), 'bookmarks')]);
module.exports = function (Posts) {
  if (stryMutAct_9fa48("28613")) {
    {}
  } else {
    stryCov_9fa48("28613");
    Posts.getPostsFields = async function (pids, fields) {
      if (stryMutAct_9fa48("28614")) {
        {}
      } else {
        stryCov_9fa48("28614");
        if (stryMutAct_9fa48("28617") ? !Array.isArray(pids) && !pids.length : stryMutAct_9fa48("28616") ? false : stryMutAct_9fa48("28615") ? true : (stryCov_9fa48("28615", "28616", "28617"), (stryMutAct_9fa48("28618") ? Array.isArray(pids) : (stryCov_9fa48("28618"), !Array.isArray(pids))) || (stryMutAct_9fa48("28619") ? pids.length : (stryCov_9fa48("28619"), !pids.length)))) {
          if (stryMutAct_9fa48("28620")) {
            {}
          } else {
            stryCov_9fa48("28620");
            return stryMutAct_9fa48("28621") ? ["Stryker was here"] : (stryCov_9fa48("28621"), []);
          }
        }
        const keys = pids.map(stryMutAct_9fa48("28622") ? () => undefined : (stryCov_9fa48("28622"), pid => stryMutAct_9fa48("28623") ? `` : (stryCov_9fa48("28623"), `post:${pid}`)));
        const postData = await db.getObjects(keys, fields);
        const result = await plugins.hooks.fire(stryMutAct_9fa48("28624") ? "" : (stryCov_9fa48("28624"), 'filter:post.getFields'), stryMutAct_9fa48("28625") ? {} : (stryCov_9fa48("28625"), {
          pids: pids,
          posts: postData,
          fields: fields
        }));
        result.posts.forEach(stryMutAct_9fa48("28626") ? () => undefined : (stryCov_9fa48("28626"), post => modifyPost(post, fields)));
        return result.posts;
      }
    };
    Posts.getPostData = async function (pid) {
      if (stryMutAct_9fa48("28627")) {
        {}
      } else {
        stryCov_9fa48("28627");
        const posts = await Posts.getPostsFields(stryMutAct_9fa48("28628") ? [] : (stryCov_9fa48("28628"), [pid]), stryMutAct_9fa48("28629") ? ["Stryker was here"] : (stryCov_9fa48("28629"), []));
        return (stryMutAct_9fa48("28632") ? posts || posts.length : stryMutAct_9fa48("28631") ? false : stryMutAct_9fa48("28630") ? true : (stryCov_9fa48("28630", "28631", "28632"), posts && posts.length)) ? posts[0] : null;
      }
    };
    Posts.getPostsData = async function (pids) {
      if (stryMutAct_9fa48("28633")) {
        {}
      } else {
        stryCov_9fa48("28633");
        return await Posts.getPostsFields(pids, stryMutAct_9fa48("28634") ? ["Stryker was here"] : (stryCov_9fa48("28634"), []));
      }
    };
    Posts.getPostField = async function (pid, field) {
      if (stryMutAct_9fa48("28635")) {
        {}
      } else {
        stryCov_9fa48("28635");
        const post = await Posts.getPostFields(pid, stryMutAct_9fa48("28636") ? [] : (stryCov_9fa48("28636"), [field]));
        return post ? post[field] : null;
      }
    };
    Posts.getPostFields = async function (pid, fields) {
      if (stryMutAct_9fa48("28637")) {
        {}
      } else {
        stryCov_9fa48("28637");
        const posts = await Posts.getPostsFields(stryMutAct_9fa48("28638") ? [] : (stryCov_9fa48("28638"), [pid]), fields);
        return posts ? posts[0] : null;
      }
    };
    Posts.setPostField = async function (pid, field, value) {
      if (stryMutAct_9fa48("28639")) {
        {}
      } else {
        stryCov_9fa48("28639");
        await Posts.setPostFields(pid, stryMutAct_9fa48("28640") ? {} : (stryCov_9fa48("28640"), {
          [field]: value
        }));
      }
    };
    Posts.setPostFields = async function (pid, data) {
      if (stryMutAct_9fa48("28641")) {
        {}
      } else {
        stryCov_9fa48("28641");
        await db.setObject(stryMutAct_9fa48("28642") ? `` : (stryCov_9fa48("28642"), `post:${pid}`), data);
        plugins.hooks.fire(stryMutAct_9fa48("28643") ? "" : (stryCov_9fa48("28643"), 'action:post.setFields'), stryMutAct_9fa48("28644") ? {} : (stryCov_9fa48("28644"), {
          data: stryMutAct_9fa48("28645") ? {} : (stryCov_9fa48("28645"), {
            ...data,
            pid
          })
        }));
      }
    };
  }
};
function modifyPost(post, fields) {
  if (stryMutAct_9fa48("28646")) {
    {}
  } else {
    stryCov_9fa48("28646");
    if (stryMutAct_9fa48("28648") ? false : stryMutAct_9fa48("28647") ? true : (stryCov_9fa48("28647", "28648"), post)) {
      if (stryMutAct_9fa48("28649")) {
        {}
      } else {
        stryCov_9fa48("28649");
        db.parseIntFields(post, intFields, fields);
        if (stryMutAct_9fa48("28652") ? post.hasOwnProperty('upvotes') || post.hasOwnProperty('downvotes') : stryMutAct_9fa48("28651") ? false : stryMutAct_9fa48("28650") ? true : (stryCov_9fa48("28650", "28651", "28652"), post.hasOwnProperty(stryMutAct_9fa48("28653") ? "" : (stryCov_9fa48("28653"), 'upvotes')) && post.hasOwnProperty(stryMutAct_9fa48("28654") ? "" : (stryCov_9fa48("28654"), 'downvotes')))) {
          if (stryMutAct_9fa48("28655")) {
            {}
          } else {
            stryCov_9fa48("28655");
            post.votes = stryMutAct_9fa48("28656") ? post.upvotes + post.downvotes : (stryCov_9fa48("28656"), post.upvotes - post.downvotes);
          }
        }
        if (stryMutAct_9fa48("28658") ? false : stryMutAct_9fa48("28657") ? true : (stryCov_9fa48("28657", "28658"), post.hasOwnProperty(stryMutAct_9fa48("28659") ? "" : (stryCov_9fa48("28659"), 'timestamp')))) {
          if (stryMutAct_9fa48("28660")) {
            {}
          } else {
            stryCov_9fa48("28660");
            post.timestampISO = utils.toISOString(post.timestamp);
          }
        }
        if (stryMutAct_9fa48("28662") ? false : stryMutAct_9fa48("28661") ? true : (stryCov_9fa48("28661", "28662"), post.hasOwnProperty(stryMutAct_9fa48("28663") ? "" : (stryCov_9fa48("28663"), 'edited')))) {
          if (stryMutAct_9fa48("28664")) {
            {}
          } else {
            stryCov_9fa48("28664");
            post.editedISO = (stryMutAct_9fa48("28667") ? post.edited === 0 : stryMutAct_9fa48("28666") ? false : stryMutAct_9fa48("28665") ? true : (stryCov_9fa48("28665", "28666", "28667"), post.edited !== 0)) ? utils.toISOString(post.edited) : stryMutAct_9fa48("28668") ? "Stryker was here!" : (stryCov_9fa48("28668"), '');
          }
        }
      }
    }
  }
}