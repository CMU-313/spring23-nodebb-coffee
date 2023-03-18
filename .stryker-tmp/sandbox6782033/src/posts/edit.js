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
const db = require('../database');
const meta = require('../meta');
const topics = require('../topics');
const user = require('../user');
const privileges = require('../privileges');
const plugins = require('../plugins');
const pubsub = require('../pubsub');
const utils = require('../utils');
const slugify = require('../slugify');
const translator = require('../translator');
module.exports = function (Posts) {
  if (stryMutAct_9fa48("29033")) {
    {}
  } else {
    stryCov_9fa48("29033");
    pubsub.on(stryMutAct_9fa48("29034") ? "" : (stryCov_9fa48("29034"), 'post:edit'), pid => {
      if (stryMutAct_9fa48("29035")) {
        {}
      } else {
        stryCov_9fa48("29035");
        require('./cache').del(pid);
      }
    });
    Posts.edit = async function (data) {
      if (stryMutAct_9fa48("29036")) {
        {}
      } else {
        stryCov_9fa48("29036");
        const canEdit = await privileges.posts.canEdit(data.pid, data.uid);
        if (stryMutAct_9fa48("29039") ? false : stryMutAct_9fa48("29038") ? true : stryMutAct_9fa48("29037") ? canEdit.flag : (stryCov_9fa48("29037", "29038", "29039"), !canEdit.flag)) {
          if (stryMutAct_9fa48("29040")) {
            {}
          } else {
            stryCov_9fa48("29040");
            throw new Error(canEdit.message);
          }
        }
        const postData = await Posts.getPostData(data.pid);
        if (stryMutAct_9fa48("29043") ? false : stryMutAct_9fa48("29042") ? true : stryMutAct_9fa48("29041") ? postData : (stryCov_9fa48("29041", "29042", "29043"), !postData)) {
          if (stryMutAct_9fa48("29044")) {
            {}
          } else {
            stryCov_9fa48("29044");
            throw new Error(stryMutAct_9fa48("29045") ? "" : (stryCov_9fa48("29045"), '[[error:no-post]]'));
          }
        }
        const topicData = await topics.getTopicFields(postData.tid, stryMutAct_9fa48("29046") ? [] : (stryCov_9fa48("29046"), [stryMutAct_9fa48("29047") ? "" : (stryCov_9fa48("29047"), 'cid'), stryMutAct_9fa48("29048") ? "" : (stryCov_9fa48("29048"), 'mainPid'), stryMutAct_9fa48("29049") ? "" : (stryCov_9fa48("29049"), 'title'), stryMutAct_9fa48("29050") ? "" : (stryCov_9fa48("29050"), 'timestamp'), stryMutAct_9fa48("29051") ? "" : (stryCov_9fa48("29051"), 'scheduled'), stryMutAct_9fa48("29052") ? "" : (stryCov_9fa48("29052"), 'slug'), stryMutAct_9fa48("29053") ? "" : (stryCov_9fa48("29053"), 'tags')]));
        await scheduledTopicCheck(data, topicData);
        const oldContent = postData.content; // for diffing purposes
        const editPostData = getEditPostData(data, topicData, postData);
        if (stryMutAct_9fa48("29055") ? false : stryMutAct_9fa48("29054") ? true : (stryCov_9fa48("29054", "29055"), data.handle)) {
          if (stryMutAct_9fa48("29056")) {
            {}
          } else {
            stryCov_9fa48("29056");
            editPostData.handle = data.handle;
          }
        }
        const result = await plugins.hooks.fire(stryMutAct_9fa48("29057") ? "" : (stryCov_9fa48("29057"), 'filter:post.edit'), stryMutAct_9fa48("29058") ? {} : (stryCov_9fa48("29058"), {
          req: data.req,
          post: editPostData,
          data: data,
          uid: data.uid
        }));
        const [editor, topic] = await Promise.all(stryMutAct_9fa48("29059") ? [] : (stryCov_9fa48("29059"), [user.getUserFields(data.uid, stryMutAct_9fa48("29060") ? [] : (stryCov_9fa48("29060"), [stryMutAct_9fa48("29061") ? "" : (stryCov_9fa48("29061"), 'username'), stryMutAct_9fa48("29062") ? "" : (stryCov_9fa48("29062"), 'userslug')])), editMainPost(data, postData, topicData)]));
        await Posts.setPostFields(data.pid, result.post);
        const contentChanged = stryMutAct_9fa48("29065") ? (data.content !== oldContent || topic.renamed) && topic.tagsupdated : stryMutAct_9fa48("29064") ? false : stryMutAct_9fa48("29063") ? true : (stryCov_9fa48("29063", "29064", "29065"), (stryMutAct_9fa48("29067") ? data.content !== oldContent && topic.renamed : stryMutAct_9fa48("29066") ? false : (stryCov_9fa48("29066", "29067"), (stryMutAct_9fa48("29069") ? data.content === oldContent : stryMutAct_9fa48("29068") ? false : (stryCov_9fa48("29068", "29069"), data.content !== oldContent)) || topic.renamed)) || topic.tagsupdated);
        if (stryMutAct_9fa48("29072") ? meta.config.enablePostHistory === 1 || contentChanged : stryMutAct_9fa48("29071") ? false : stryMutAct_9fa48("29070") ? true : (stryCov_9fa48("29070", "29071", "29072"), (stryMutAct_9fa48("29074") ? meta.config.enablePostHistory !== 1 : stryMutAct_9fa48("29073") ? true : (stryCov_9fa48("29073", "29074"), meta.config.enablePostHistory === 1)) && contentChanged)) {
          if (stryMutAct_9fa48("29075")) {
            {}
          } else {
            stryCov_9fa48("29075");
            await Posts.diffs.save(stryMutAct_9fa48("29076") ? {} : (stryCov_9fa48("29076"), {
              pid: data.pid,
              uid: data.uid,
              oldContent: oldContent,
              newContent: data.content,
              edited: editPostData.edited,
              topic
            }));
          }
        }
        await Posts.uploads.sync(data.pid);

        // Normalize data prior to constructing returnPostData (match types with getPostSummaryByPids)
        postData.deleted = stryMutAct_9fa48("29077") ? !postData.deleted : (stryCov_9fa48("29077"), !(stryMutAct_9fa48("29078") ? postData.deleted : (stryCov_9fa48("29078"), !postData.deleted)));
        const returnPostData = stryMutAct_9fa48("29079") ? {} : (stryCov_9fa48("29079"), {
          ...postData,
          ...result.post
        });
        returnPostData.cid = topic.cid;
        returnPostData.topic = topic;
        returnPostData.editedISO = utils.toISOString(editPostData.edited);
        returnPostData.changed = contentChanged;
        returnPostData.oldContent = oldContent;
        returnPostData.newContent = data.content;
        await topics.notifyFollowers(returnPostData, data.uid, stryMutAct_9fa48("29080") ? {} : (stryCov_9fa48("29080"), {
          type: stryMutAct_9fa48("29081") ? "" : (stryCov_9fa48("29081"), 'post-edit'),
          bodyShort: translator.compile(stryMutAct_9fa48("29082") ? "" : (stryCov_9fa48("29082"), 'notifications:user_edited_post'), editor.username, topic.title),
          nid: stryMutAct_9fa48("29083") ? `` : (stryCov_9fa48("29083"), `edit_post:${data.pid}:uid:${data.uid}`)
        }));
        await topics.syncBacklinks(returnPostData);
        plugins.hooks.fire(stryMutAct_9fa48("29084") ? "" : (stryCov_9fa48("29084"), 'action:post.edit'), stryMutAct_9fa48("29085") ? {} : (stryCov_9fa48("29085"), {
          post: _.clone(returnPostData),
          data: data,
          uid: data.uid
        }));
        require('./cache').del(String(postData.pid));
        pubsub.publish(stryMutAct_9fa48("29086") ? "" : (stryCov_9fa48("29086"), 'post:edit'), String(postData.pid));
        await Posts.parsePost(returnPostData);
        return stryMutAct_9fa48("29087") ? {} : (stryCov_9fa48("29087"), {
          topic: topic,
          editor: editor,
          post: returnPostData
        });
      }
    };
    async function editMainPost(data, postData, topicData) {
      if (stryMutAct_9fa48("29088")) {
        {}
      } else {
        stryCov_9fa48("29088");
        const {
          tid
        } = postData;
        const title = data.title ? stryMutAct_9fa48("29089") ? data.title : (stryCov_9fa48("29089"), data.title.trim()) : stryMutAct_9fa48("29090") ? "Stryker was here!" : (stryCov_9fa48("29090"), '');
        const isMain = stryMutAct_9fa48("29093") ? parseInt(data.pid, 10) !== parseInt(topicData.mainPid, 10) : stryMutAct_9fa48("29092") ? false : stryMutAct_9fa48("29091") ? true : (stryCov_9fa48("29091", "29092", "29093"), parseInt(data.pid, 10) === parseInt(topicData.mainPid, 10));
        if (stryMutAct_9fa48("29096") ? false : stryMutAct_9fa48("29095") ? true : stryMutAct_9fa48("29094") ? isMain : (stryCov_9fa48("29094", "29095", "29096"), !isMain)) {
          if (stryMutAct_9fa48("29097")) {
            {}
          } else {
            stryCov_9fa48("29097");
            return stryMutAct_9fa48("29098") ? {} : (stryCov_9fa48("29098"), {
              tid: tid,
              cid: topicData.cid,
              title: validator.escape(String(topicData.title)),
              isMainPost: stryMutAct_9fa48("29099") ? true : (stryCov_9fa48("29099"), false),
              renamed: stryMutAct_9fa48("29100") ? true : (stryCov_9fa48("29100"), false),
              tagsupdated: stryMutAct_9fa48("29101") ? true : (stryCov_9fa48("29101"), false)
            });
          }
        }
        const newTopicData = stryMutAct_9fa48("29102") ? {} : (stryCov_9fa48("29102"), {
          tid: tid,
          cid: topicData.cid,
          uid: postData.uid,
          mainPid: data.pid,
          timestamp: rescheduling(data, topicData) ? data.timestamp : topicData.timestamp
        });
        if (stryMutAct_9fa48("29104") ? false : stryMutAct_9fa48("29103") ? true : (stryCov_9fa48("29103", "29104"), title)) {
          if (stryMutAct_9fa48("29105")) {
            {}
          } else {
            stryCov_9fa48("29105");
            newTopicData.title = title;
            newTopicData.slug = stryMutAct_9fa48("29106") ? `` : (stryCov_9fa48("29106"), `${tid}/${stryMutAct_9fa48("29109") ? slugify(title) && 'topic' : stryMutAct_9fa48("29108") ? false : stryMutAct_9fa48("29107") ? true : (stryCov_9fa48("29107", "29108", "29109"), slugify(title) || (stryMutAct_9fa48("29110") ? "" : (stryCov_9fa48("29110"), 'topic')))}`);
          }
        }
        const tagsupdated = stryMutAct_9fa48("29113") ? Array.isArray(data.tags) || !_.isEqual(data.tags, topicData.tags.map(tag => tag.value)) : stryMutAct_9fa48("29112") ? false : stryMutAct_9fa48("29111") ? true : (stryCov_9fa48("29111", "29112", "29113"), Array.isArray(data.tags) && (stryMutAct_9fa48("29114") ? _.isEqual(data.tags, topicData.tags.map(tag => tag.value)) : (stryCov_9fa48("29114"), !_.isEqual(data.tags, topicData.tags.map(stryMutAct_9fa48("29115") ? () => undefined : (stryCov_9fa48("29115"), tag => tag.value))))));
        if (stryMutAct_9fa48("29117") ? false : stryMutAct_9fa48("29116") ? true : (stryCov_9fa48("29116", "29117"), tagsupdated)) {
          if (stryMutAct_9fa48("29118")) {
            {}
          } else {
            stryCov_9fa48("29118");
            const canTag = await privileges.categories.can(stryMutAct_9fa48("29119") ? "" : (stryCov_9fa48("29119"), 'topics:tag'), topicData.cid, data.uid);
            if (stryMutAct_9fa48("29122") ? false : stryMutAct_9fa48("29121") ? true : stryMutAct_9fa48("29120") ? canTag : (stryCov_9fa48("29120", "29121", "29122"), !canTag)) {
              if (stryMutAct_9fa48("29123")) {
                {}
              } else {
                stryCov_9fa48("29123");
                throw new Error(stryMutAct_9fa48("29124") ? "" : (stryCov_9fa48("29124"), '[[error:no-privileges]]'));
              }
            }
            await topics.validateTags(data.tags, topicData.cid, data.uid, tid);
          }
        }
        const results = await plugins.hooks.fire(stryMutAct_9fa48("29125") ? "" : (stryCov_9fa48("29125"), 'filter:topic.edit'), stryMutAct_9fa48("29126") ? {} : (stryCov_9fa48("29126"), {
          req: data.req,
          topic: newTopicData,
          data: data
        }));
        await db.setObject(stryMutAct_9fa48("29127") ? `` : (stryCov_9fa48("29127"), `topic:${tid}`), results.topic);
        if (stryMutAct_9fa48("29129") ? false : stryMutAct_9fa48("29128") ? true : (stryCov_9fa48("29128", "29129"), tagsupdated)) {
          if (stryMutAct_9fa48("29130")) {
            {}
          } else {
            stryCov_9fa48("29130");
            await topics.updateTopicTags(tid, data.tags);
          }
        }
        const tags = await topics.getTopicTagsObjects(tid);
        if (stryMutAct_9fa48("29132") ? false : stryMutAct_9fa48("29131") ? true : (stryCov_9fa48("29131", "29132"), rescheduling(data, topicData))) {
          if (stryMutAct_9fa48("29133")) {
            {}
          } else {
            stryCov_9fa48("29133");
            await topics.scheduled.reschedule(newTopicData);
          }
        }
        newTopicData.tags = data.tags;
        newTopicData.oldTitle = topicData.title;
        const renamed = stryMutAct_9fa48("29136") ? title || translator.escape(validator.escape(String(title))) !== topicData.title : stryMutAct_9fa48("29135") ? false : stryMutAct_9fa48("29134") ? true : (stryCov_9fa48("29134", "29135", "29136"), title && (stryMutAct_9fa48("29138") ? translator.escape(validator.escape(String(title))) === topicData.title : stryMutAct_9fa48("29137") ? true : (stryCov_9fa48("29137", "29138"), translator.escape(validator.escape(String(title))) !== topicData.title)));
        plugins.hooks.fire(stryMutAct_9fa48("29139") ? "" : (stryCov_9fa48("29139"), 'action:topic.edit'), stryMutAct_9fa48("29140") ? {} : (stryCov_9fa48("29140"), {
          topic: newTopicData,
          uid: data.uid
        }));
        return stryMutAct_9fa48("29141") ? {} : (stryCov_9fa48("29141"), {
          tid: tid,
          cid: newTopicData.cid,
          uid: postData.uid,
          title: validator.escape(String(title)),
          oldTitle: topicData.title,
          slug: stryMutAct_9fa48("29144") ? newTopicData.slug && topicData.slug : stryMutAct_9fa48("29143") ? false : stryMutAct_9fa48("29142") ? true : (stryCov_9fa48("29142", "29143", "29144"), newTopicData.slug || topicData.slug),
          isMainPost: stryMutAct_9fa48("29145") ? false : (stryCov_9fa48("29145"), true),
          renamed: renamed,
          tagsupdated: tagsupdated,
          tags: tags,
          oldTags: topicData.tags,
          rescheduled: rescheduling(data, topicData)
        });
      }
    }
    async function scheduledTopicCheck(data, topicData) {
      if (stryMutAct_9fa48("29146")) {
        {}
      } else {
        stryCov_9fa48("29146");
        if (stryMutAct_9fa48("29149") ? false : stryMutAct_9fa48("29148") ? true : stryMutAct_9fa48("29147") ? topicData.scheduled : (stryCov_9fa48("29147", "29148", "29149"), !topicData.scheduled)) {
          if (stryMutAct_9fa48("29150")) {
            {}
          } else {
            stryCov_9fa48("29150");
            return;
          }
        }
        const canSchedule = await privileges.categories.can(stryMutAct_9fa48("29151") ? "" : (stryCov_9fa48("29151"), 'topics:schedule'), topicData.cid, data.uid);
        if (stryMutAct_9fa48("29154") ? false : stryMutAct_9fa48("29153") ? true : stryMutAct_9fa48("29152") ? canSchedule : (stryCov_9fa48("29152", "29153", "29154"), !canSchedule)) {
          if (stryMutAct_9fa48("29155")) {
            {}
          } else {
            stryCov_9fa48("29155");
            throw new Error(stryMutAct_9fa48("29156") ? "" : (stryCov_9fa48("29156"), '[[error:no-privileges]]'));
          }
        }
        const isMain = stryMutAct_9fa48("29159") ? parseInt(data.pid, 10) !== parseInt(topicData.mainPid, 10) : stryMutAct_9fa48("29158") ? false : stryMutAct_9fa48("29157") ? true : (stryCov_9fa48("29157", "29158", "29159"), parseInt(data.pid, 10) === parseInt(topicData.mainPid, 10));
        if (stryMutAct_9fa48("29162") ? isMain || isNaN(data.timestamp) || data.timestamp < Date.now() : stryMutAct_9fa48("29161") ? false : stryMutAct_9fa48("29160") ? true : (stryCov_9fa48("29160", "29161", "29162"), isMain && (stryMutAct_9fa48("29164") ? isNaN(data.timestamp) && data.timestamp < Date.now() : stryMutAct_9fa48("29163") ? true : (stryCov_9fa48("29163", "29164"), isNaN(data.timestamp) || (stryMutAct_9fa48("29167") ? data.timestamp >= Date.now() : stryMutAct_9fa48("29166") ? data.timestamp <= Date.now() : stryMutAct_9fa48("29165") ? false : (stryCov_9fa48("29165", "29166", "29167"), data.timestamp < Date.now())))))) {
          if (stryMutAct_9fa48("29168")) {
            {}
          } else {
            stryCov_9fa48("29168");
            throw new Error(stryMutAct_9fa48("29169") ? "" : (stryCov_9fa48("29169"), '[[error:invalid-data]]'));
          }
        }
      }
    }
    function getEditPostData(data, topicData, postData) {
      if (stryMutAct_9fa48("29170")) {
        {}
      } else {
        stryCov_9fa48("29170");
        const editPostData = stryMutAct_9fa48("29171") ? {} : (stryCov_9fa48("29171"), {
          content: data.content,
          editor: data.uid
        });

        // For posts in scheduled topics, if edited before, use edit timestamp
        editPostData.edited = topicData.scheduled ? stryMutAct_9fa48("29172") ? (postData.edited || postData.timestamp) - 1 : (stryCov_9fa48("29172"), (stryMutAct_9fa48("29175") ? postData.edited && postData.timestamp : stryMutAct_9fa48("29174") ? false : stryMutAct_9fa48("29173") ? true : (stryCov_9fa48("29173", "29174", "29175"), postData.edited || postData.timestamp)) + 1) : Date.now();

        // if rescheduling the main post
        if (stryMutAct_9fa48("29177") ? false : stryMutAct_9fa48("29176") ? true : (stryCov_9fa48("29176", "29177"), rescheduling(data, topicData))) {
          if (stryMutAct_9fa48("29178")) {
            {}
          } else {
            stryCov_9fa48("29178");
            // For main posts, use timestamp coming from user (otherwise, it is ignored)
            editPostData.edited = data.timestamp;
            editPostData.timestamp = data.timestamp;
          }
        }
        return editPostData;
      }
    }
    function rescheduling(data, topicData) {
      if (stryMutAct_9fa48("29179")) {
        {}
      } else {
        stryCov_9fa48("29179");
        const isMain = stryMutAct_9fa48("29182") ? parseInt(data.pid, 10) !== parseInt(topicData.mainPid, 10) : stryMutAct_9fa48("29181") ? false : stryMutAct_9fa48("29180") ? true : (stryCov_9fa48("29180", "29181", "29182"), parseInt(data.pid, 10) === parseInt(topicData.mainPid, 10));
        return stryMutAct_9fa48("29185") ? isMain && topicData.scheduled || topicData.timestamp !== data.timestamp : stryMutAct_9fa48("29184") ? false : stryMutAct_9fa48("29183") ? true : (stryCov_9fa48("29183", "29184", "29185"), (stryMutAct_9fa48("29187") ? isMain || topicData.scheduled : stryMutAct_9fa48("29186") ? true : (stryCov_9fa48("29186", "29187"), isMain && topicData.scheduled)) && (stryMutAct_9fa48("29189") ? topicData.timestamp === data.timestamp : stryMutAct_9fa48("29188") ? true : (stryCov_9fa48("29188", "29189"), topicData.timestamp !== data.timestamp)));
      }
    }
  }
};