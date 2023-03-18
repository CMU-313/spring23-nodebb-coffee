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
const utils = require('../utils');
const user = require('../user');
const posts = require('../posts');
const topics = require('../topics');
const groups = require('../groups');
const meta = require('../meta');
const events = require('../events');
const privileges = require('../privileges');
const apiHelpers = require('./helpers');
const websockets = require('../socket.io');
const socketHelpers = require('../socket.io/helpers');
const postsAPI = module.exports;
postsAPI.get = async function (caller, data) {
  if (stryMutAct_9fa48("937")) {
    {}
  } else {
    stryCov_9fa48("937");
    const [userPrivileges, post, voted] = await Promise.all(stryMutAct_9fa48("938") ? [] : (stryCov_9fa48("938"), [privileges.posts.get(stryMutAct_9fa48("939") ? [] : (stryCov_9fa48("939"), [data.pid]), caller.uid), posts.getPostData(data.pid), posts.hasVoted(data.pid, caller.uid)]));
    if (stryMutAct_9fa48("942") ? false : stryMutAct_9fa48("941") ? true : stryMutAct_9fa48("940") ? post : (stryCov_9fa48("940", "941", "942"), !post)) {
      if (stryMutAct_9fa48("943")) {
        {}
      } else {
        stryCov_9fa48("943");
        return null;
      }
    }
    Object.assign(post, voted);
    const userPrivilege = userPrivileges[0];
    if (stryMutAct_9fa48("946") ? !userPrivilege.read && !userPrivilege['topics:read'] : stryMutAct_9fa48("945") ? false : stryMutAct_9fa48("944") ? true : (stryCov_9fa48("944", "945", "946"), (stryMutAct_9fa48("947") ? userPrivilege.read : (stryCov_9fa48("947"), !userPrivilege.read)) || (stryMutAct_9fa48("948") ? userPrivilege['topics:read'] : (stryCov_9fa48("948"), !userPrivilege[stryMutAct_9fa48("949") ? "" : (stryCov_9fa48("949"), 'topics:read')])))) {
      if (stryMutAct_9fa48("950")) {
        {}
      } else {
        stryCov_9fa48("950");
        return null;
      }
    }
    post.ip = userPrivilege.isAdminOrMod ? post.ip : undefined;
    const selfPost = stryMutAct_9fa48("953") ? caller.uid || caller.uid === parseInt(post.uid, 10) : stryMutAct_9fa48("952") ? false : stryMutAct_9fa48("951") ? true : (stryCov_9fa48("951", "952", "953"), caller.uid && (stryMutAct_9fa48("955") ? caller.uid !== parseInt(post.uid, 10) : stryMutAct_9fa48("954") ? true : (stryCov_9fa48("954", "955"), caller.uid === parseInt(post.uid, 10))));
    if (stryMutAct_9fa48("958") ? post.deleted || !(userPrivilege.isAdminOrMod || selfPost) : stryMutAct_9fa48("957") ? false : stryMutAct_9fa48("956") ? true : (stryCov_9fa48("956", "957", "958"), post.deleted && (stryMutAct_9fa48("959") ? userPrivilege.isAdminOrMod || selfPost : (stryCov_9fa48("959"), !(stryMutAct_9fa48("962") ? userPrivilege.isAdminOrMod && selfPost : stryMutAct_9fa48("961") ? false : stryMutAct_9fa48("960") ? true : (stryCov_9fa48("960", "961", "962"), userPrivilege.isAdminOrMod || selfPost)))))) {
      if (stryMutAct_9fa48("963")) {
        {}
      } else {
        stryCov_9fa48("963");
        post.content = stryMutAct_9fa48("964") ? "" : (stryCov_9fa48("964"), '[[topic:post_is_deleted]]');
      }
    }
    return post;
  }
};
postsAPI.edit = async function (caller, data) {
  if (stryMutAct_9fa48("965")) {
    {}
  } else {
    stryCov_9fa48("965");
    if (stryMutAct_9fa48("968") ? (!data || !data.pid) && meta.config.minimumPostLength !== 0 && !data.content : stryMutAct_9fa48("967") ? false : stryMutAct_9fa48("966") ? true : (stryCov_9fa48("966", "967", "968"), (stryMutAct_9fa48("970") ? !data && !data.pid : stryMutAct_9fa48("969") ? false : (stryCov_9fa48("969", "970"), (stryMutAct_9fa48("971") ? data : (stryCov_9fa48("971"), !data)) || (stryMutAct_9fa48("972") ? data.pid : (stryCov_9fa48("972"), !data.pid)))) || (stryMutAct_9fa48("974") ? meta.config.minimumPostLength !== 0 || !data.content : stryMutAct_9fa48("973") ? false : (stryCov_9fa48("973", "974"), (stryMutAct_9fa48("976") ? meta.config.minimumPostLength === 0 : stryMutAct_9fa48("975") ? true : (stryCov_9fa48("975", "976"), meta.config.minimumPostLength !== 0)) && (stryMutAct_9fa48("977") ? data.content : (stryCov_9fa48("977"), !data.content)))))) {
      if (stryMutAct_9fa48("978")) {
        {}
      } else {
        stryCov_9fa48("978");
        throw new Error(stryMutAct_9fa48("979") ? "" : (stryCov_9fa48("979"), '[[error:invalid-data]]'));
      }
    }
    if (stryMutAct_9fa48("982") ? false : stryMutAct_9fa48("981") ? true : stryMutAct_9fa48("980") ? caller.uid : (stryCov_9fa48("980", "981", "982"), !caller.uid)) {
      if (stryMutAct_9fa48("983")) {
        {}
      } else {
        stryCov_9fa48("983");
        throw new Error(stryMutAct_9fa48("984") ? "" : (stryCov_9fa48("984"), '[[error:not-logged-in]]'));
      }
    }
    // Trim and remove HTML (latter for composers that send in HTML, like redactor)
    const contentLen = stryMutAct_9fa48("985") ? utils.stripHTMLTags(data.content).length : (stryCov_9fa48("985"), utils.stripHTMLTags(data.content).trim().length);
    if (stryMutAct_9fa48("988") ? data.title || data.title.length < meta.config.minimumTitleLength : stryMutAct_9fa48("987") ? false : stryMutAct_9fa48("986") ? true : (stryCov_9fa48("986", "987", "988"), data.title && (stryMutAct_9fa48("991") ? data.title.length >= meta.config.minimumTitleLength : stryMutAct_9fa48("990") ? data.title.length <= meta.config.minimumTitleLength : stryMutAct_9fa48("989") ? true : (stryCov_9fa48("989", "990", "991"), data.title.length < meta.config.minimumTitleLength)))) {
      if (stryMutAct_9fa48("992")) {
        {}
      } else {
        stryCov_9fa48("992");
        throw new Error(stryMutAct_9fa48("993") ? `` : (stryCov_9fa48("993"), `[[error:title-too-short, ${meta.config.minimumTitleLength}]]`));
      }
    } else if (stryMutAct_9fa48("996") ? data.title || data.title.length > meta.config.maximumTitleLength : stryMutAct_9fa48("995") ? false : stryMutAct_9fa48("994") ? true : (stryCov_9fa48("994", "995", "996"), data.title && (stryMutAct_9fa48("999") ? data.title.length <= meta.config.maximumTitleLength : stryMutAct_9fa48("998") ? data.title.length >= meta.config.maximumTitleLength : stryMutAct_9fa48("997") ? true : (stryCov_9fa48("997", "998", "999"), data.title.length > meta.config.maximumTitleLength)))) {
      if (stryMutAct_9fa48("1000")) {
        {}
      } else {
        stryCov_9fa48("1000");
        throw new Error(stryMutAct_9fa48("1001") ? `` : (stryCov_9fa48("1001"), `[[error:title-too-long, ${meta.config.maximumTitleLength}]]`));
      }
    } else if (stryMutAct_9fa48("1004") ? meta.config.minimumPostLength !== 0 || contentLen < meta.config.minimumPostLength : stryMutAct_9fa48("1003") ? false : stryMutAct_9fa48("1002") ? true : (stryCov_9fa48("1002", "1003", "1004"), (stryMutAct_9fa48("1006") ? meta.config.minimumPostLength === 0 : stryMutAct_9fa48("1005") ? true : (stryCov_9fa48("1005", "1006"), meta.config.minimumPostLength !== 0)) && (stryMutAct_9fa48("1009") ? contentLen >= meta.config.minimumPostLength : stryMutAct_9fa48("1008") ? contentLen <= meta.config.minimumPostLength : stryMutAct_9fa48("1007") ? true : (stryCov_9fa48("1007", "1008", "1009"), contentLen < meta.config.minimumPostLength)))) {
      if (stryMutAct_9fa48("1010")) {
        {}
      } else {
        stryCov_9fa48("1010");
        throw new Error(stryMutAct_9fa48("1011") ? `` : (stryCov_9fa48("1011"), `[[error:content-too-short, ${meta.config.minimumPostLength}]]`));
      }
    } else if (stryMutAct_9fa48("1015") ? contentLen <= meta.config.maximumPostLength : stryMutAct_9fa48("1014") ? contentLen >= meta.config.maximumPostLength : stryMutAct_9fa48("1013") ? false : stryMutAct_9fa48("1012") ? true : (stryCov_9fa48("1012", "1013", "1014", "1015"), contentLen > meta.config.maximumPostLength)) {
      if (stryMutAct_9fa48("1016")) {
        {}
      } else {
        stryCov_9fa48("1016");
        throw new Error(stryMutAct_9fa48("1017") ? `` : (stryCov_9fa48("1017"), `[[error:content-too-long, ${meta.config.maximumPostLength}]]`));
      }
    }
    data.uid = caller.uid;
    data.req = apiHelpers.buildReqObject(caller);
    data.timestamp = stryMutAct_9fa48("1020") ? parseInt(data.timestamp, 10) && Date.now() : stryMutAct_9fa48("1019") ? false : stryMutAct_9fa48("1018") ? true : (stryCov_9fa48("1018", "1019", "1020"), parseInt(data.timestamp, 10) || Date.now());
    const editResult = await posts.edit(data);
    if (stryMutAct_9fa48("1022") ? false : stryMutAct_9fa48("1021") ? true : (stryCov_9fa48("1021", "1022"), editResult.topic.isMainPost)) {
      if (stryMutAct_9fa48("1023")) {
        {}
      } else {
        stryCov_9fa48("1023");
        await topics.thumbs.migrate(data.uuid, editResult.topic.tid);
      }
    }
    const selfPost = stryMutAct_9fa48("1026") ? parseInt(caller.uid, 10) !== parseInt(editResult.post.uid, 10) : stryMutAct_9fa48("1025") ? false : stryMutAct_9fa48("1024") ? true : (stryCov_9fa48("1024", "1025", "1026"), parseInt(caller.uid, 10) === parseInt(editResult.post.uid, 10));
    if (stryMutAct_9fa48("1029") ? !selfPost || editResult.post.changed : stryMutAct_9fa48("1028") ? false : stryMutAct_9fa48("1027") ? true : (stryCov_9fa48("1027", "1028", "1029"), (stryMutAct_9fa48("1030") ? selfPost : (stryCov_9fa48("1030"), !selfPost)) && editResult.post.changed)) {
      if (stryMutAct_9fa48("1031")) {
        {}
      } else {
        stryCov_9fa48("1031");
        await events.log(stryMutAct_9fa48("1032") ? {} : (stryCov_9fa48("1032"), {
          type: stryMutAct_9fa48("1033") ? `` : (stryCov_9fa48("1033"), `post-edit`),
          uid: caller.uid,
          ip: caller.ip,
          pid: editResult.post.pid,
          oldContent: editResult.post.oldContent,
          newContent: editResult.post.newContent
        }));
      }
    }
    if (stryMutAct_9fa48("1035") ? false : stryMutAct_9fa48("1034") ? true : (stryCov_9fa48("1034", "1035"), editResult.topic.renamed)) {
      if (stryMutAct_9fa48("1036")) {
        {}
      } else {
        stryCov_9fa48("1036");
        await events.log(stryMutAct_9fa48("1037") ? {} : (stryCov_9fa48("1037"), {
          type: stryMutAct_9fa48("1038") ? "" : (stryCov_9fa48("1038"), 'topic-rename'),
          uid: caller.uid,
          ip: caller.ip,
          tid: editResult.topic.tid,
          oldTitle: validator.escape(String(editResult.topic.oldTitle)),
          newTitle: validator.escape(String(editResult.topic.title))
        }));
      }
    }
    const postObj = await posts.getPostSummaryByPids(stryMutAct_9fa48("1039") ? [] : (stryCov_9fa48("1039"), [editResult.post.pid]), caller.uid, {});
    const returnData = stryMutAct_9fa48("1040") ? {} : (stryCov_9fa48("1040"), {
      ...postObj[0],
      ...editResult.post
    });
    returnData.topic = stryMutAct_9fa48("1041") ? {} : (stryCov_9fa48("1041"), {
      ...postObj[0].topic,
      ...editResult.post.topic
    });
    if (stryMutAct_9fa48("1044") ? false : stryMutAct_9fa48("1043") ? true : stryMutAct_9fa48("1042") ? editResult.post.deleted : (stryCov_9fa48("1042", "1043", "1044"), !editResult.post.deleted)) {
      if (stryMutAct_9fa48("1045")) {
        {}
      } else {
        stryCov_9fa48("1045");
        websockets.in(stryMutAct_9fa48("1046") ? `` : (stryCov_9fa48("1046"), `topic_${editResult.topic.tid}`)).emit(stryMutAct_9fa48("1047") ? "" : (stryCov_9fa48("1047"), 'event:post_edited'), editResult);
        return returnData;
      }
    }
    const memberData = await groups.getMembersOfGroups(stryMutAct_9fa48("1048") ? [] : (stryCov_9fa48("1048"), [stryMutAct_9fa48("1049") ? "" : (stryCov_9fa48("1049"), 'administrators'), stryMutAct_9fa48("1050") ? "" : (stryCov_9fa48("1050"), 'Global Moderators'), stryMutAct_9fa48("1051") ? `` : (stryCov_9fa48("1051"), `cid:${editResult.topic.cid}:privileges:moderate`), stryMutAct_9fa48("1052") ? `` : (stryCov_9fa48("1052"), `cid:${editResult.topic.cid}:privileges:groups:moderate`)]));
    const uids = _.uniq(_.flatten(memberData).concat(String(caller.uid)));
    uids.forEach(stryMutAct_9fa48("1053") ? () => undefined : (stryCov_9fa48("1053"), uid => websockets.in(stryMutAct_9fa48("1054") ? `` : (stryCov_9fa48("1054"), `uid_${uid}`)).emit(stryMutAct_9fa48("1055") ? "" : (stryCov_9fa48("1055"), 'event:post_edited'), editResult)));
    return returnData;
  }
};
postsAPI.delete = async function (caller, data) {
  if (stryMutAct_9fa48("1056")) {
    {}
  } else {
    stryCov_9fa48("1056");
    await deleteOrRestore(caller, data, stryMutAct_9fa48("1057") ? {} : (stryCov_9fa48("1057"), {
      command: stryMutAct_9fa48("1058") ? "" : (stryCov_9fa48("1058"), 'delete'),
      event: stryMutAct_9fa48("1059") ? "" : (stryCov_9fa48("1059"), 'event:post_deleted'),
      type: stryMutAct_9fa48("1060") ? "" : (stryCov_9fa48("1060"), 'post-delete')
    }));
  }
};
postsAPI.restore = async function (caller, data) {
  if (stryMutAct_9fa48("1061")) {
    {}
  } else {
    stryCov_9fa48("1061");
    await deleteOrRestore(caller, data, stryMutAct_9fa48("1062") ? {} : (stryCov_9fa48("1062"), {
      command: stryMutAct_9fa48("1063") ? "" : (stryCov_9fa48("1063"), 'restore'),
      event: stryMutAct_9fa48("1064") ? "" : (stryCov_9fa48("1064"), 'event:post_restored'),
      type: stryMutAct_9fa48("1065") ? "" : (stryCov_9fa48("1065"), 'post-restore')
    }));
  }
};
async function deleteOrRestore(caller, data, params) {
  if (stryMutAct_9fa48("1066")) {
    {}
  } else {
    stryCov_9fa48("1066");
    if (stryMutAct_9fa48("1069") ? !data && !data.pid : stryMutAct_9fa48("1068") ? false : stryMutAct_9fa48("1067") ? true : (stryCov_9fa48("1067", "1068", "1069"), (stryMutAct_9fa48("1070") ? data : (stryCov_9fa48("1070"), !data)) || (stryMutAct_9fa48("1071") ? data.pid : (stryCov_9fa48("1071"), !data.pid)))) {
      if (stryMutAct_9fa48("1072")) {
        {}
      } else {
        stryCov_9fa48("1072");
        throw new Error(stryMutAct_9fa48("1073") ? "" : (stryCov_9fa48("1073"), '[[error:invalid-data]]'));
      }
    }
    const postData = await posts.tools[params.command](caller.uid, data.pid);
    const results = await isMainAndLastPost(data.pid);
    if (stryMutAct_9fa48("1076") ? results.isMain || results.isLast : stryMutAct_9fa48("1075") ? false : stryMutAct_9fa48("1074") ? true : (stryCov_9fa48("1074", "1075", "1076"), results.isMain && results.isLast)) {
      if (stryMutAct_9fa48("1077")) {
        {}
      } else {
        stryCov_9fa48("1077");
        await deleteOrRestoreTopicOf(params.command, data.pid, caller);
      }
    }
    websockets.in(stryMutAct_9fa48("1078") ? `` : (stryCov_9fa48("1078"), `topic_${postData.tid}`)).emit(params.event, postData);
    await events.log(stryMutAct_9fa48("1079") ? {} : (stryCov_9fa48("1079"), {
      type: params.type,
      uid: caller.uid,
      pid: data.pid,
      tid: postData.tid,
      ip: caller.ip
    }));
  }
}
async function deleteOrRestoreTopicOf(command, pid, caller) {
  if (stryMutAct_9fa48("1080")) {
    {}
  } else {
    stryCov_9fa48("1080");
    const topic = await posts.getTopicFields(pid, stryMutAct_9fa48("1081") ? [] : (stryCov_9fa48("1081"), [stryMutAct_9fa48("1082") ? "" : (stryCov_9fa48("1082"), 'tid'), stryMutAct_9fa48("1083") ? "" : (stryCov_9fa48("1083"), 'cid'), stryMutAct_9fa48("1084") ? "" : (stryCov_9fa48("1084"), 'deleted'), stryMutAct_9fa48("1085") ? "" : (stryCov_9fa48("1085"), 'scheduled')]));
    // exempt scheduled topics from being deleted/restored
    if (stryMutAct_9fa48("1087") ? false : stryMutAct_9fa48("1086") ? true : (stryCov_9fa48("1086", "1087"), topic.scheduled)) {
      if (stryMutAct_9fa48("1088")) {
        {}
      } else {
        stryCov_9fa48("1088");
        return;
      }
    }
    // command: delete/restore
    await apiHelpers.doTopicAction(command, topic.deleted ? stryMutAct_9fa48("1089") ? "" : (stryCov_9fa48("1089"), 'event:topic_restored') : stryMutAct_9fa48("1090") ? "" : (stryCov_9fa48("1090"), 'event:topic_deleted'), caller, stryMutAct_9fa48("1091") ? {} : (stryCov_9fa48("1091"), {
      tids: stryMutAct_9fa48("1092") ? [] : (stryCov_9fa48("1092"), [topic.tid]),
      cid: topic.cid
    }));
  }
}
postsAPI.purge = async function (caller, data) {
  if (stryMutAct_9fa48("1093")) {
    {}
  } else {
    stryCov_9fa48("1093");
    if (stryMutAct_9fa48("1096") ? !data && !parseInt(data.pid, 10) : stryMutAct_9fa48("1095") ? false : stryMutAct_9fa48("1094") ? true : (stryCov_9fa48("1094", "1095", "1096"), (stryMutAct_9fa48("1097") ? data : (stryCov_9fa48("1097"), !data)) || (stryMutAct_9fa48("1098") ? parseInt(data.pid, 10) : (stryCov_9fa48("1098"), !parseInt(data.pid, 10))))) {
      if (stryMutAct_9fa48("1099")) {
        {}
      } else {
        stryCov_9fa48("1099");
        throw new Error(stryMutAct_9fa48("1100") ? "" : (stryCov_9fa48("1100"), '[[error:invalid-data]]'));
      }
    }
    const results = await isMainAndLastPost(data.pid);
    if (stryMutAct_9fa48("1103") ? results.isMain || !results.isLast : stryMutAct_9fa48("1102") ? false : stryMutAct_9fa48("1101") ? true : (stryCov_9fa48("1101", "1102", "1103"), results.isMain && (stryMutAct_9fa48("1104") ? results.isLast : (stryCov_9fa48("1104"), !results.isLast)))) {
      if (stryMutAct_9fa48("1105")) {
        {}
      } else {
        stryCov_9fa48("1105");
        throw new Error(stryMutAct_9fa48("1106") ? "" : (stryCov_9fa48("1106"), '[[error:cant-purge-main-post]]'));
      }
    }
    const isMainAndLast = stryMutAct_9fa48("1109") ? results.isMain || results.isLast : stryMutAct_9fa48("1108") ? false : stryMutAct_9fa48("1107") ? true : (stryCov_9fa48("1107", "1108", "1109"), results.isMain && results.isLast);
    const postData = await posts.getPostFields(data.pid, stryMutAct_9fa48("1110") ? [] : (stryCov_9fa48("1110"), [stryMutAct_9fa48("1111") ? "" : (stryCov_9fa48("1111"), 'toPid'), stryMutAct_9fa48("1112") ? "" : (stryCov_9fa48("1112"), 'tid')]));
    postData.pid = data.pid;
    const canPurge = await privileges.posts.canPurge(data.pid, caller.uid);
    if (stryMutAct_9fa48("1115") ? false : stryMutAct_9fa48("1114") ? true : stryMutAct_9fa48("1113") ? canPurge : (stryCov_9fa48("1113", "1114", "1115"), !canPurge)) {
      if (stryMutAct_9fa48("1116")) {
        {}
      } else {
        stryCov_9fa48("1116");
        throw new Error(stryMutAct_9fa48("1117") ? "" : (stryCov_9fa48("1117"), '[[error:no-privileges]]'));
      }
    }
    require('../posts/cache').del(data.pid);
    await posts.purge(data.pid, caller.uid);
    websockets.in(stryMutAct_9fa48("1118") ? `` : (stryCov_9fa48("1118"), `topic_${postData.tid}`)).emit(stryMutAct_9fa48("1119") ? "" : (stryCov_9fa48("1119"), 'event:post_purged'), postData);
    const topicData = await topics.getTopicFields(postData.tid, stryMutAct_9fa48("1120") ? [] : (stryCov_9fa48("1120"), [stryMutAct_9fa48("1121") ? "" : (stryCov_9fa48("1121"), 'title'), stryMutAct_9fa48("1122") ? "" : (stryCov_9fa48("1122"), 'cid')]));
    await events.log(stryMutAct_9fa48("1123") ? {} : (stryCov_9fa48("1123"), {
      type: stryMutAct_9fa48("1124") ? "" : (stryCov_9fa48("1124"), 'post-purge'),
      pid: data.pid,
      uid: caller.uid,
      ip: caller.ip,
      tid: postData.tid,
      title: String(topicData.title)
    }));
    if (stryMutAct_9fa48("1126") ? false : stryMutAct_9fa48("1125") ? true : (stryCov_9fa48("1125", "1126"), isMainAndLast)) {
      if (stryMutAct_9fa48("1127")) {
        {}
      } else {
        stryCov_9fa48("1127");
        await apiHelpers.doTopicAction(stryMutAct_9fa48("1128") ? "" : (stryCov_9fa48("1128"), 'purge'), stryMutAct_9fa48("1129") ? "" : (stryCov_9fa48("1129"), 'event:topic_purged'), caller, stryMutAct_9fa48("1130") ? {} : (stryCov_9fa48("1130"), {
          tids: stryMutAct_9fa48("1131") ? [] : (stryCov_9fa48("1131"), [postData.tid]),
          cid: topicData.cid
        }));
      }
    }
  }
};
async function isMainAndLastPost(pid) {
  if (stryMutAct_9fa48("1132")) {
    {}
  } else {
    stryCov_9fa48("1132");
    const [isMain, topicData] = await Promise.all(stryMutAct_9fa48("1133") ? [] : (stryCov_9fa48("1133"), [posts.isMain(pid), posts.getTopicFields(pid, stryMutAct_9fa48("1134") ? [] : (stryCov_9fa48("1134"), [stryMutAct_9fa48("1135") ? "" : (stryCov_9fa48("1135"), 'postcount')]))]));
    return stryMutAct_9fa48("1136") ? {} : (stryCov_9fa48("1136"), {
      isMain: isMain,
      isLast: stryMutAct_9fa48("1139") ? topicData || topicData.postcount === 1 : stryMutAct_9fa48("1138") ? false : stryMutAct_9fa48("1137") ? true : (stryCov_9fa48("1137", "1138", "1139"), topicData && (stryMutAct_9fa48("1141") ? topicData.postcount !== 1 : stryMutAct_9fa48("1140") ? true : (stryCov_9fa48("1140", "1141"), topicData.postcount === 1)))
    });
  }
}
postsAPI.move = async function (caller, data) {
  if (stryMutAct_9fa48("1142")) {
    {}
  } else {
    stryCov_9fa48("1142");
    if (stryMutAct_9fa48("1145") ? false : stryMutAct_9fa48("1144") ? true : stryMutAct_9fa48("1143") ? caller.uid : (stryCov_9fa48("1143", "1144", "1145"), !caller.uid)) {
      if (stryMutAct_9fa48("1146")) {
        {}
      } else {
        stryCov_9fa48("1146");
        throw new Error(stryMutAct_9fa48("1147") ? "" : (stryCov_9fa48("1147"), '[[error:not-logged-in]]'));
      }
    }
    if (stryMutAct_9fa48("1150") ? (!data || !data.pid) && !data.tid : stryMutAct_9fa48("1149") ? false : stryMutAct_9fa48("1148") ? true : (stryCov_9fa48("1148", "1149", "1150"), (stryMutAct_9fa48("1152") ? !data && !data.pid : stryMutAct_9fa48("1151") ? false : (stryCov_9fa48("1151", "1152"), (stryMutAct_9fa48("1153") ? data : (stryCov_9fa48("1153"), !data)) || (stryMutAct_9fa48("1154") ? data.pid : (stryCov_9fa48("1154"), !data.pid)))) || (stryMutAct_9fa48("1155") ? data.tid : (stryCov_9fa48("1155"), !data.tid)))) {
      if (stryMutAct_9fa48("1156")) {
        {}
      } else {
        stryCov_9fa48("1156");
        throw new Error(stryMutAct_9fa48("1157") ? "" : (stryCov_9fa48("1157"), '[[error:invalid-data]]'));
      }
    }
    const canMove = await Promise.all(stryMutAct_9fa48("1158") ? [] : (stryCov_9fa48("1158"), [privileges.topics.isAdminOrMod(data.tid, caller.uid), privileges.posts.canMove(data.pid, caller.uid)]));
    if (stryMutAct_9fa48("1161") ? false : stryMutAct_9fa48("1160") ? true : stryMutAct_9fa48("1159") ? canMove.every(Boolean) : (stryCov_9fa48("1159", "1160", "1161"), !(stryMutAct_9fa48("1162") ? canMove.some(Boolean) : (stryCov_9fa48("1162"), canMove.every(Boolean))))) {
      if (stryMutAct_9fa48("1163")) {
        {}
      } else {
        stryCov_9fa48("1163");
        throw new Error(stryMutAct_9fa48("1164") ? "" : (stryCov_9fa48("1164"), '[[error:no-privileges]]'));
      }
    }
    await topics.movePostToTopic(caller.uid, data.pid, data.tid);
    const [postDeleted, topicDeleted] = await Promise.all(stryMutAct_9fa48("1165") ? [] : (stryCov_9fa48("1165"), [posts.getPostField(data.pid, stryMutAct_9fa48("1166") ? "" : (stryCov_9fa48("1166"), 'deleted')), topics.getTopicField(data.tid, stryMutAct_9fa48("1167") ? "" : (stryCov_9fa48("1167"), 'deleted')), await events.log(stryMutAct_9fa48("1168") ? {} : (stryCov_9fa48("1168"), {
      type: stryMutAct_9fa48("1169") ? `` : (stryCov_9fa48("1169"), `post-move`),
      uid: caller.uid,
      ip: caller.ip,
      pid: data.pid,
      toTid: data.tid
    }))]));
    if (stryMutAct_9fa48("1172") ? !postDeleted || !topicDeleted : stryMutAct_9fa48("1171") ? false : stryMutAct_9fa48("1170") ? true : (stryCov_9fa48("1170", "1171", "1172"), (stryMutAct_9fa48("1173") ? postDeleted : (stryCov_9fa48("1173"), !postDeleted)) && (stryMutAct_9fa48("1174") ? topicDeleted : (stryCov_9fa48("1174"), !topicDeleted)))) {
      if (stryMutAct_9fa48("1175")) {
        {}
      } else {
        stryCov_9fa48("1175");
        socketHelpers.sendNotificationToPostOwner(data.pid, caller.uid, stryMutAct_9fa48("1176") ? "" : (stryCov_9fa48("1176"), 'move'), stryMutAct_9fa48("1177") ? "" : (stryCov_9fa48("1177"), 'notifications:moved_your_post'));
      }
    }
  }
};
postsAPI.upvote = async function (caller, data) {
  if (stryMutAct_9fa48("1178")) {
    {}
  } else {
    stryCov_9fa48("1178");
    return await apiHelpers.postCommand(caller, stryMutAct_9fa48("1179") ? "" : (stryCov_9fa48("1179"), 'upvote'), stryMutAct_9fa48("1180") ? "" : (stryCov_9fa48("1180"), 'voted'), stryMutAct_9fa48("1181") ? "" : (stryCov_9fa48("1181"), 'notifications:upvoted_your_post_in'), data);
  }
};
postsAPI.downvote = async function (caller, data) {
  if (stryMutAct_9fa48("1182")) {
    {}
  } else {
    stryCov_9fa48("1182");
    return await apiHelpers.postCommand(caller, stryMutAct_9fa48("1183") ? "" : (stryCov_9fa48("1183"), 'downvote'), stryMutAct_9fa48("1184") ? "" : (stryCov_9fa48("1184"), 'voted'), stryMutAct_9fa48("1185") ? "Stryker was here!" : (stryCov_9fa48("1185"), ''), data);
  }
};
postsAPI.unvote = async function (caller, data) {
  if (stryMutAct_9fa48("1186")) {
    {}
  } else {
    stryCov_9fa48("1186");
    return await apiHelpers.postCommand(caller, stryMutAct_9fa48("1187") ? "" : (stryCov_9fa48("1187"), 'unvote'), stryMutAct_9fa48("1188") ? "" : (stryCov_9fa48("1188"), 'voted'), stryMutAct_9fa48("1189") ? "Stryker was here!" : (stryCov_9fa48("1189"), ''), data);
  }
};
postsAPI.bookmark = async function (caller, data) {
  if (stryMutAct_9fa48("1190")) {
    {}
  } else {
    stryCov_9fa48("1190");
    return await apiHelpers.postCommand(caller, stryMutAct_9fa48("1191") ? "" : (stryCov_9fa48("1191"), 'bookmark'), stryMutAct_9fa48("1192") ? "" : (stryCov_9fa48("1192"), 'bookmarked'), stryMutAct_9fa48("1193") ? "Stryker was here!" : (stryCov_9fa48("1193"), ''), data);
  }
};
postsAPI.unbookmark = async function (caller, data) {
  if (stryMutAct_9fa48("1194")) {
    {}
  } else {
    stryCov_9fa48("1194");
    return await apiHelpers.postCommand(caller, stryMutAct_9fa48("1195") ? "" : (stryCov_9fa48("1195"), 'unbookmark'), stryMutAct_9fa48("1196") ? "" : (stryCov_9fa48("1196"), 'bookmarked'), stryMutAct_9fa48("1197") ? "Stryker was here!" : (stryCov_9fa48("1197"), ''), data);
  }
};
async function diffsPrivilegeCheck(pid, uid) {
  if (stryMutAct_9fa48("1198")) {
    {}
  } else {
    stryCov_9fa48("1198");
    const [deleted, privilegesData] = await Promise.all(stryMutAct_9fa48("1199") ? [] : (stryCov_9fa48("1199"), [posts.getPostField(pid, stryMutAct_9fa48("1200") ? "" : (stryCov_9fa48("1200"), 'deleted')), privileges.posts.get(stryMutAct_9fa48("1201") ? [] : (stryCov_9fa48("1201"), [pid]), uid)]));
    const allowed = stryMutAct_9fa48("1204") ? privilegesData[0]['posts:history'] || (deleted ? privilegesData[0]['posts:view_deleted'] : true) : stryMutAct_9fa48("1203") ? false : stryMutAct_9fa48("1202") ? true : (stryCov_9fa48("1202", "1203", "1204"), privilegesData[0][stryMutAct_9fa48("1205") ? "" : (stryCov_9fa48("1205"), 'posts:history')] && (deleted ? privilegesData[0][stryMutAct_9fa48("1206") ? "" : (stryCov_9fa48("1206"), 'posts:view_deleted')] : stryMutAct_9fa48("1207") ? false : (stryCov_9fa48("1207"), true)));
    if (stryMutAct_9fa48("1210") ? false : stryMutAct_9fa48("1209") ? true : stryMutAct_9fa48("1208") ? allowed : (stryCov_9fa48("1208", "1209", "1210"), !allowed)) {
      if (stryMutAct_9fa48("1211")) {
        {}
      } else {
        stryCov_9fa48("1211");
        throw new Error(stryMutAct_9fa48("1212") ? "" : (stryCov_9fa48("1212"), '[[error:no-privileges]]'));
      }
    }
  }
}
postsAPI.getDiffs = async (caller, data) => {
  if (stryMutAct_9fa48("1213")) {
    {}
  } else {
    stryCov_9fa48("1213");
    await diffsPrivilegeCheck(data.pid, caller.uid);
    const timestamps = await posts.diffs.list(data.pid);
    const post = await posts.getPostFields(data.pid, stryMutAct_9fa48("1214") ? [] : (stryCov_9fa48("1214"), [stryMutAct_9fa48("1215") ? "" : (stryCov_9fa48("1215"), 'timestamp'), stryMutAct_9fa48("1216") ? "" : (stryCov_9fa48("1216"), 'uid')]));
    const diffs = await posts.diffs.get(data.pid);
    const uids = diffs.map(stryMutAct_9fa48("1217") ? () => undefined : (stryCov_9fa48("1217"), diff => stryMutAct_9fa48("1220") ? diff.uid && null : stryMutAct_9fa48("1219") ? false : stryMutAct_9fa48("1218") ? true : (stryCov_9fa48("1218", "1219", "1220"), diff.uid || null)));
    uids.push(post.uid);
    let usernames = await user.getUsersFields(uids, stryMutAct_9fa48("1221") ? [] : (stryCov_9fa48("1221"), [stryMutAct_9fa48("1222") ? "" : (stryCov_9fa48("1222"), 'username')]));
    usernames = usernames.map(stryMutAct_9fa48("1223") ? () => undefined : (stryCov_9fa48("1223"), userObj => userObj.uid ? userObj.username : null));
    const cid = await posts.getCidByPid(data.pid);
    const [isAdmin, isModerator] = await Promise.all(stryMutAct_9fa48("1224") ? [] : (stryCov_9fa48("1224"), [user.isAdministrator(caller.uid), privileges.users.isModerator(caller.uid, cid)]));

    // timestamps returned by posts.diffs.list are strings
    timestamps.push(String(post.timestamp));
    return stryMutAct_9fa48("1225") ? {} : (stryCov_9fa48("1225"), {
      timestamps: timestamps,
      revisions: timestamps.map(stryMutAct_9fa48("1226") ? () => undefined : (stryCov_9fa48("1226"), (timestamp, idx) => stryMutAct_9fa48("1227") ? {} : (stryCov_9fa48("1227"), {
        timestamp: timestamp,
        username: usernames[idx]
      }))),
      // Only admins, global mods and moderator of that cid can delete a diff
      deletable: stryMutAct_9fa48("1230") ? isAdmin && isModerator : stryMutAct_9fa48("1229") ? false : stryMutAct_9fa48("1228") ? true : (stryCov_9fa48("1228", "1229", "1230"), isAdmin || isModerator),
      // These and post owners can restore to a different post version
      editable: stryMutAct_9fa48("1233") ? (isAdmin || isModerator) && parseInt(caller.uid, 10) === parseInt(post.uid, 10) : stryMutAct_9fa48("1232") ? false : stryMutAct_9fa48("1231") ? true : (stryCov_9fa48("1231", "1232", "1233"), (stryMutAct_9fa48("1235") ? isAdmin && isModerator : stryMutAct_9fa48("1234") ? false : (stryCov_9fa48("1234", "1235"), isAdmin || isModerator)) || (stryMutAct_9fa48("1237") ? parseInt(caller.uid, 10) !== parseInt(post.uid, 10) : stryMutAct_9fa48("1236") ? false : (stryCov_9fa48("1236", "1237"), parseInt(caller.uid, 10) === parseInt(post.uid, 10))))
    });
  }
};
postsAPI.loadDiff = async (caller, data) => {
  if (stryMutAct_9fa48("1238")) {
    {}
  } else {
    stryCov_9fa48("1238");
    await diffsPrivilegeCheck(data.pid, caller.uid);
    return await posts.diffs.load(data.pid, data.since, caller.uid);
  }
};
postsAPI.restoreDiff = async (caller, data) => {
  if (stryMutAct_9fa48("1239")) {
    {}
  } else {
    stryCov_9fa48("1239");
    const cid = await posts.getCidByPid(data.pid);
    const canEdit = await privileges.categories.can(stryMutAct_9fa48("1240") ? "" : (stryCov_9fa48("1240"), 'posts:edit'), cid, caller.uid);
    if (stryMutAct_9fa48("1243") ? false : stryMutAct_9fa48("1242") ? true : stryMutAct_9fa48("1241") ? canEdit : (stryCov_9fa48("1241", "1242", "1243"), !canEdit)) {
      if (stryMutAct_9fa48("1244")) {
        {}
      } else {
        stryCov_9fa48("1244");
        throw new Error(stryMutAct_9fa48("1245") ? "" : (stryCov_9fa48("1245"), '[[error:no-privileges]]'));
      }
    }
    const edit = await posts.diffs.restore(data.pid, data.since, caller.uid, apiHelpers.buildReqObject(caller));
    websockets.in(stryMutAct_9fa48("1246") ? `` : (stryCov_9fa48("1246"), `topic_${edit.topic.tid}`)).emit(stryMutAct_9fa48("1247") ? "" : (stryCov_9fa48("1247"), 'event:post_edited'), edit);
  }
};