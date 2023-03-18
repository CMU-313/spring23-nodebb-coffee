// @ts-nocheck
"use strict";

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
var __awaiter = stryMutAct_9fa48("28457") ? this && this.__awaiter && function (thisArg, _arguments, P, generator) {
  function adopt(value) {
    return value instanceof P ? value : new P(function (resolve) {
      resolve(value);
    });
  }
  return new (P || (P = Promise))(function (resolve, reject) {
    function fulfilled(value) {
      try {
        step(generator.next(value));
      } catch (e) {
        reject(e);
      }
    }
    function rejected(value) {
      try {
        step(generator["throw"](value));
      } catch (e) {
        reject(e);
      }
    }
    function step(result) {
      result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
    }
    step((generator = generator.apply(thisArg, _arguments || [])).next());
  });
} : stryMutAct_9fa48("28456") ? false : stryMutAct_9fa48("28455") ? true : (stryCov_9fa48("28455", "28456", "28457"), (stryMutAct_9fa48("28459") ? this || this.__awaiter : stryMutAct_9fa48("28458") ? false : (stryCov_9fa48("28458", "28459"), this && this.__awaiter)) || function (thisArg, _arguments, P, generator) {
  if (stryMutAct_9fa48("28460")) {
    {}
  } else {
    stryCov_9fa48("28460");
    function adopt(value) {
      if (stryMutAct_9fa48("28461")) {
        {}
      } else {
        stryCov_9fa48("28461");
        return value instanceof P ? value : new P(function (resolve) {
          if (stryMutAct_9fa48("28462")) {
            {}
          } else {
            stryCov_9fa48("28462");
            resolve(value);
          }
        });
      }
    }
    return new (stryMutAct_9fa48("28465") ? P && (P = Promise) : stryMutAct_9fa48("28464") ? false : stryMutAct_9fa48("28463") ? true : (stryCov_9fa48("28463", "28464", "28465"), P || (P = Promise)))(function (resolve, reject) {
      if (stryMutAct_9fa48("28466")) {
        {}
      } else {
        stryCov_9fa48("28466");
        function fulfilled(value) {
          if (stryMutAct_9fa48("28467")) {
            {}
          } else {
            stryCov_9fa48("28467");
            try {
              if (stryMutAct_9fa48("28468")) {
                {}
              } else {
                stryCov_9fa48("28468");
                step(generator.next(value));
              }
            } catch (e) {
              if (stryMutAct_9fa48("28469")) {
                {}
              } else {
                stryCov_9fa48("28469");
                reject(e);
              }
            }
          }
        }
        function rejected(value) {
          if (stryMutAct_9fa48("28470")) {
            {}
          } else {
            stryCov_9fa48("28470");
            try {
              if (stryMutAct_9fa48("28471")) {
                {}
              } else {
                stryCov_9fa48("28471");
                step(generator[stryMutAct_9fa48("28472") ? "" : (stryCov_9fa48("28472"), "throw")](value));
              }
            } catch (e) {
              if (stryMutAct_9fa48("28473")) {
                {}
              } else {
                stryCov_9fa48("28473");
                reject(e);
              }
            }
          }
        }
        function step(result) {
          if (stryMutAct_9fa48("28474")) {
            {}
          } else {
            stryCov_9fa48("28474");
            result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
          }
        }
        step((generator = generator.apply(thisArg, stryMutAct_9fa48("28477") ? _arguments && [] : stryMutAct_9fa48("28476") ? false : stryMutAct_9fa48("28475") ? true : (stryCov_9fa48("28475", "28476", "28477"), _arguments || (stryMutAct_9fa48("28478") ? ["Stryker was here"] : (stryCov_9fa48("28478"), []))))).next());
      }
    });
  }
});
Object.defineProperty(exports, stryMutAct_9fa48("28479") ? "" : (stryCov_9fa48("28479"), "__esModule"), stryMutAct_9fa48("28480") ? {} : (stryCov_9fa48("28480"), {
  value: stryMutAct_9fa48("28481") ? false : (stryCov_9fa48("28481"), true)
}));
const _ = require("lodash");
const meta = require("../meta");
const db = require("../database");
const plugins = require("../plugins");
const user = require("../user");
const topics = require("../topics");
const categories = require("../categories");
const groups = require("../groups");
const utils = require("../utils");
module.exports = function (Posts) {
  if (stryMutAct_9fa48("28482")) {
    {}
  } else {
    stryCov_9fa48("28482");
    Posts.create = function (data) {
      if (stryMutAct_9fa48("28483")) {
        {}
      } else {
        stryCov_9fa48("28483");
        return __awaiter(this, void 0, void 0, function* () {
          if (stryMutAct_9fa48("28484")) {
            {}
          } else {
            stryCov_9fa48("28484");
            // This is an internal method, consider using Topics.reply instead
            const {
              uid
            } = data;
            const {
              tid
            } = data;
            const content = data.content.toString();
            const timestamp = stryMutAct_9fa48("28487") ? data.timestamp && Date.now() : stryMutAct_9fa48("28486") ? false : stryMutAct_9fa48("28485") ? true : (stryCov_9fa48("28485", "28486", "28487"), data.timestamp || Date.now());
            const isMain = stryMutAct_9fa48("28490") ? data.isMain && false : stryMutAct_9fa48("28489") ? false : stryMutAct_9fa48("28488") ? true : (stryCov_9fa48("28488", "28489", "28490"), data.isMain || (stryMutAct_9fa48("28491") ? true : (stryCov_9fa48("28491"), false)));
            if (stryMutAct_9fa48("28494") ? !uid || parseInt(uid, 10) !== 0 : stryMutAct_9fa48("28493") ? false : stryMutAct_9fa48("28492") ? true : (stryCov_9fa48("28492", "28493", "28494"), (stryMutAct_9fa48("28495") ? uid : (stryCov_9fa48("28495"), !uid)) && (stryMutAct_9fa48("28497") ? parseInt(uid, 10) === 0 : stryMutAct_9fa48("28496") ? true : (stryCov_9fa48("28496", "28497"), parseInt(uid, 10) !== 0)))) {
              if (stryMutAct_9fa48("28498")) {
                {}
              } else {
                stryCov_9fa48("28498");
                throw new Error(stryMutAct_9fa48("28499") ? "" : (stryCov_9fa48("28499"), '[[error:invalid-uid]]'));
              }
            }
            if (stryMutAct_9fa48("28502") ? data.toPid || !utils.isNumber(data.toPid) : stryMutAct_9fa48("28501") ? false : stryMutAct_9fa48("28500") ? true : (stryCov_9fa48("28500", "28501", "28502"), data.toPid && (stryMutAct_9fa48("28503") ? utils.isNumber(data.toPid) : (stryCov_9fa48("28503"), !utils.isNumber(data.toPid))))) {
              if (stryMutAct_9fa48("28504")) {
                {}
              } else {
                stryCov_9fa48("28504");
                throw new Error(stryMutAct_9fa48("28505") ? "" : (stryCov_9fa48("28505"), '[[error:invalid-pid]]'));
              }
            }
            // The next line calls a function in a module that has not been updated to TS yet
            // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access, @typescript-eslint/no-unsafe-call
            const pid = yield db.incrObjectField(stryMutAct_9fa48("28506") ? "" : (stryCov_9fa48("28506"), 'global'), stryMutAct_9fa48("28507") ? "" : (stryCov_9fa48("28507"), 'nextPid'));
            // The next line calls a function in a module that has not been updated to TS yet
            // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access, @typescript-eslint/no-unsafe-call
            let anonname = yield user.getUserField(uid, stryMutAct_9fa48("28508") ? "" : (stryCov_9fa48("28508"), 'username'));
            if (stryMutAct_9fa48("28510") ? false : stryMutAct_9fa48("28509") ? true : (stryCov_9fa48("28509", "28510"), data.isanon)) {
              if (stryMutAct_9fa48("28511")) {
                {}
              } else {
                stryCov_9fa48("28511");
                anonname = stryMutAct_9fa48("28512") ? "" : (stryCov_9fa48("28512"), 'Anonymous');
              }
            }
            let postData = stryMutAct_9fa48("28513") ? {} : (stryCov_9fa48("28513"), {
              pid: pid,
              uid: uid,
              tid: tid,
              content: content,
              timestamp: timestamp,
              anon: anonname
            });
            if (stryMutAct_9fa48("28515") ? false : stryMutAct_9fa48("28514") ? true : (stryCov_9fa48("28514", "28515"), data.toPid)) {
              if (stryMutAct_9fa48("28516")) {
                {}
              } else {
                stryCov_9fa48("28516");
                postData.toPid = data.toPid;
              }
            }
            // The next line calls a function in a module that has not been updated to TS yet
            // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
            if (stryMutAct_9fa48("28519") ? data.ip || meta.config.trackIpPerPost : stryMutAct_9fa48("28518") ? false : stryMutAct_9fa48("28517") ? true : (stryCov_9fa48("28517", "28518", "28519"), data.ip && meta.config.trackIpPerPost)) {
              if (stryMutAct_9fa48("28520")) {
                {}
              } else {
                stryCov_9fa48("28520");
                postData.ip = data.ip;
              }
            }
            if (stryMutAct_9fa48("28523") ? data.handle || !parseInt(uid, 10) : stryMutAct_9fa48("28522") ? false : stryMutAct_9fa48("28521") ? true : (stryCov_9fa48("28521", "28522", "28523"), data.handle && (stryMutAct_9fa48("28524") ? parseInt(uid, 10) : (stryCov_9fa48("28524"), !parseInt(uid, 10))))) {
              if (stryMutAct_9fa48("28525")) {
                {}
              } else {
                stryCov_9fa48("28525");
                postData.handle = data.handle;
              }
            }
            // The next line calls a function in a module that has not been updated to TS yet
            // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
            let result = yield plugins.hooks.fire(stryMutAct_9fa48("28526") ? "" : (stryCov_9fa48("28526"), 'filter:post.create'), stryMutAct_9fa48("28527") ? {} : (stryCov_9fa48("28527"), {
              post: postData,
              data: data
            }));
            postData = result.post;
            // The next line calls a function in a module that has not been updated to TS yet
            // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access, @typescript-eslint/no-unsafe-call
            yield db.setObject(stryMutAct_9fa48("28528") ? `` : (stryCov_9fa48("28528"), `post:${postData.pid}`), postData);
            // The next line calls a function in a module that has not been updated to TS yet
            // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access, @typescript-eslint/no-unsafe-call
            const topicData = yield topics.getTopicFields(tid, stryMutAct_9fa48("28529") ? [] : (stryCov_9fa48("28529"), [stryMutAct_9fa48("28530") ? "" : (stryCov_9fa48("28530"), 'cid'), stryMutAct_9fa48("28531") ? "" : (stryCov_9fa48("28531"), 'pinned')]));
            postData.cid = topicData.cid;
            function addReplyTo(postData, timestamp) {
              if (stryMutAct_9fa48("28532")) {
                {}
              } else {
                stryCov_9fa48("28532");
                return __awaiter(this, void 0, void 0, function* () {
                  if (stryMutAct_9fa48("28533")) {
                    {}
                  } else {
                    stryCov_9fa48("28533");
                    if (stryMutAct_9fa48("28536") ? false : stryMutAct_9fa48("28535") ? true : stryMutAct_9fa48("28534") ? postData.toPid : (stryCov_9fa48("28534", "28535", "28536"), !postData.toPid)) {
                      if (stryMutAct_9fa48("28537")) {
                        {}
                      } else {
                        stryCov_9fa48("28537");
                        return;
                      }
                    }
                    yield Promise.all(stryMutAct_9fa48("28538") ? [] : (stryCov_9fa48("28538"), [
                    // The next line calls a function in a module that has not been updated to TS yet
                    // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access,@typescript-eslint/no-unsafe-call
                    db.sortedSetAdd(stryMutAct_9fa48("28539") ? `` : (stryCov_9fa48("28539"), `pid:${postData.toPid}:replies`), timestamp, postData.pid),
                    // The next line calls a function in a module that has not been updated to TS yet
                    // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access,@typescript-eslint/no-unsafe-call
                    db.incrObjectField(stryMutAct_9fa48("28540") ? `` : (stryCov_9fa48("28540"), `post:${postData.toPid}`), stryMutAct_9fa48("28541") ? "" : (stryCov_9fa48("28541"), 'replies'))]));
                  }
                });
              }
            }
            yield Promise.all(stryMutAct_9fa48("28542") ? [] : (stryCov_9fa48("28542"), [
            // The next line calls a function in a module that has not been updated to TS yet
            // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access, @typescript-eslint/no-unsafe-call
            db.sortedSetAdd(stryMutAct_9fa48("28543") ? "" : (stryCov_9fa48("28543"), 'posts:pid'), timestamp, postData.pid),
            // The next line calls a function in a module that has not been updated to TS yet
            // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access, @typescript-eslint/no-unsafe-call
            db.incrObjectField(stryMutAct_9fa48("28544") ? "" : (stryCov_9fa48("28544"), 'global'), stryMutAct_9fa48("28545") ? "" : (stryCov_9fa48("28545"), 'postCount')),
            // The next line calls a function in a module that has not been updated to TS yet
            // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access, @typescript-eslint/no-unsafe-call
            user.onNewPostMade(postData),
            // The next line calls a function in a module that has not been updated to TS yet
            // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access, @typescript-eslint/no-unsafe-call
            topics.onNewPostMade(postData),
            // The next line calls a function in a module that has not been updated to TS yet
            // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access, @typescript-eslint/no-unsafe-call
            categories.onNewPostMade(topicData.cid, topicData.pinned, postData),
            // The next line calls a function in a module that has not been updated to TS yet
            // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access, @typescript-eslint/no-unsafe-call
            groups.onNewPostMade(postData), addReplyTo(postData, timestamp),
            // The next line calls a function in a module that has not been updated to TS yet
            // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access, @typescript-eslint/no-unsafe-call
            Posts.uploads.sync(postData.pid)]));
            // The next line calls a function in a module that has not been updated to TS yet
            // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access, @typescript-eslint/no-unsafe-call
            result = yield plugins.hooks.fire(stryMutAct_9fa48("28546") ? "" : (stryCov_9fa48("28546"), 'filter:post.get'), stryMutAct_9fa48("28547") ? {} : (stryCov_9fa48("28547"), {
              post: postData,
              uid: data.uid
            }));
            result.post.isMain = isMain;
            // The next line calls a function in a module that has not been updated to TS yet
            // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access, @typescript-eslint/no-unsafe-call
            plugins.hooks.fire(stryMutAct_9fa48("28548") ? "" : (stryCov_9fa48("28548"), 'action:post.save'), stryMutAct_9fa48("28549") ? {} : (stryCov_9fa48("28549"), {
              post: _.clone(result.post)
            }));
            return result.post;
          }
        });
      }
    };
  }
};