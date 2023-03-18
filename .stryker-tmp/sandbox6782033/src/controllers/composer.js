// @ts-nocheck
"use strict";

// This is one of the two example TypeScript files included with the NodeBB repository
// It is meant to serve as an example to assist you with your HW1 translation
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
var __awaiter = stryMutAct_9fa48("9082") ? this && this.__awaiter && function (thisArg, _arguments, P, generator) {
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
} : stryMutAct_9fa48("9081") ? false : stryMutAct_9fa48("9080") ? true : (stryCov_9fa48("9080", "9081", "9082"), (stryMutAct_9fa48("9084") ? this || this.__awaiter : stryMutAct_9fa48("9083") ? false : (stryCov_9fa48("9083", "9084"), this && this.__awaiter)) || function (thisArg, _arguments, P, generator) {
  if (stryMutAct_9fa48("9085")) {
    {}
  } else {
    stryCov_9fa48("9085");
    function adopt(value) {
      if (stryMutAct_9fa48("9086")) {
        {}
      } else {
        stryCov_9fa48("9086");
        return value instanceof P ? value : new P(function (resolve) {
          if (stryMutAct_9fa48("9087")) {
            {}
          } else {
            stryCov_9fa48("9087");
            resolve(value);
          }
        });
      }
    }
    return new (stryMutAct_9fa48("9090") ? P && (P = Promise) : stryMutAct_9fa48("9089") ? false : stryMutAct_9fa48("9088") ? true : (stryCov_9fa48("9088", "9089", "9090"), P || (P = Promise)))(function (resolve, reject) {
      if (stryMutAct_9fa48("9091")) {
        {}
      } else {
        stryCov_9fa48("9091");
        function fulfilled(value) {
          if (stryMutAct_9fa48("9092")) {
            {}
          } else {
            stryCov_9fa48("9092");
            try {
              if (stryMutAct_9fa48("9093")) {
                {}
              } else {
                stryCov_9fa48("9093");
                step(generator.next(value));
              }
            } catch (e) {
              if (stryMutAct_9fa48("9094")) {
                {}
              } else {
                stryCov_9fa48("9094");
                reject(e);
              }
            }
          }
        }
        function rejected(value) {
          if (stryMutAct_9fa48("9095")) {
            {}
          } else {
            stryCov_9fa48("9095");
            try {
              if (stryMutAct_9fa48("9096")) {
                {}
              } else {
                stryCov_9fa48("9096");
                step(generator[stryMutAct_9fa48("9097") ? "" : (stryCov_9fa48("9097"), "throw")](value));
              }
            } catch (e) {
              if (stryMutAct_9fa48("9098")) {
                {}
              } else {
                stryCov_9fa48("9098");
                reject(e);
              }
            }
          }
        }
        function step(result) {
          if (stryMutAct_9fa48("9099")) {
            {}
          } else {
            stryCov_9fa48("9099");
            result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
          }
        }
        step((generator = generator.apply(thisArg, stryMutAct_9fa48("9102") ? _arguments && [] : stryMutAct_9fa48("9101") ? false : stryMutAct_9fa48("9100") ? true : (stryCov_9fa48("9100", "9101", "9102"), _arguments || (stryMutAct_9fa48("9103") ? ["Stryker was here"] : (stryCov_9fa48("9103"), []))))).next());
      }
    });
  }
});
var __importDefault = stryMutAct_9fa48("9106") ? this && this.__importDefault && function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
} : stryMutAct_9fa48("9105") ? false : stryMutAct_9fa48("9104") ? true : (stryCov_9fa48("9104", "9105", "9106"), (stryMutAct_9fa48("9108") ? this || this.__importDefault : stryMutAct_9fa48("9107") ? false : (stryCov_9fa48("9107", "9108"), this && this.__importDefault)) || function (mod) {
  if (stryMutAct_9fa48("9109")) {
    {}
  } else {
    stryCov_9fa48("9109");
    return (stryMutAct_9fa48("9112") ? mod || mod.__esModule : stryMutAct_9fa48("9111") ? false : stryMutAct_9fa48("9110") ? true : (stryCov_9fa48("9110", "9111", "9112"), mod && mod.__esModule)) ? mod : stryMutAct_9fa48("9113") ? {} : (stryCov_9fa48("9113"), {
      "default": mod
    });
  }
});
Object.defineProperty(exports, stryMutAct_9fa48("9114") ? "" : (stryCov_9fa48("9114"), "__esModule"), stryMutAct_9fa48("9115") ? {} : (stryCov_9fa48("9115"), {
  value: stryMutAct_9fa48("9116") ? false : (stryCov_9fa48("9116"), true)
}));
exports.post = exports.get = void 0;
const nconf_1 = __importDefault(require("nconf"));
const user_1 = __importDefault(require("../user"));
const plugins_1 = __importDefault(require("../plugins"));
const topics_1 = __importDefault(require("../topics"));
const posts_1 = __importDefault(require("../posts"));
const helpers_1 = __importDefault(require("./helpers"));
function get(req, res, callback) {
  if (stryMutAct_9fa48("9117")) {
    {}
  } else {
    stryCov_9fa48("9117");
    return __awaiter(this, void 0, void 0, function* () {
      if (stryMutAct_9fa48("9118")) {
        {}
      } else {
        stryCov_9fa48("9118");
        res.locals.metaTags = Object.assign(Object.assign({}, res.locals.metaTags), stryMutAct_9fa48("9119") ? {} : (stryCov_9fa48("9119"), {
          name: stryMutAct_9fa48("9120") ? "" : (stryCov_9fa48("9120"), 'robots'),
          content: stryMutAct_9fa48("9121") ? "" : (stryCov_9fa48("9121"), 'noindex')
        }));
        const data = yield plugins_1.default.hooks.fire(stryMutAct_9fa48("9122") ? "" : (stryCov_9fa48("9122"), 'filter:composer.build'), stryMutAct_9fa48("9123") ? {} : (stryCov_9fa48("9123"), {
          req: req,
          res: res,
          next: callback,
          templateData: {}
        }));
        if (stryMutAct_9fa48("9125") ? false : stryMutAct_9fa48("9124") ? true : (stryCov_9fa48("9124", "9125"), res.headersSent)) {
          if (stryMutAct_9fa48("9126")) {
            {}
          } else {
            stryCov_9fa48("9126");
            return;
          }
        }
        if (stryMutAct_9fa48("9129") ? !data && !data.templateData : stryMutAct_9fa48("9128") ? false : stryMutAct_9fa48("9127") ? true : (stryCov_9fa48("9127", "9128", "9129"), (stryMutAct_9fa48("9130") ? data : (stryCov_9fa48("9130"), !data)) || (stryMutAct_9fa48("9131") ? data.templateData : (stryCov_9fa48("9131"), !data.templateData)))) {
          if (stryMutAct_9fa48("9132")) {
            {}
          } else {
            stryCov_9fa48("9132");
            return callback(new Error(stryMutAct_9fa48("9133") ? "" : (stryCov_9fa48("9133"), '[[error:invalid-data]]')));
          }
        }
        if (stryMutAct_9fa48("9135") ? false : stryMutAct_9fa48("9134") ? true : (stryCov_9fa48("9134", "9135"), data.templateData.disabled)) {
          if (stryMutAct_9fa48("9136")) {
            {}
          } else {
            stryCov_9fa48("9136");
            res.render(stryMutAct_9fa48("9137") ? "Stryker was here!" : (stryCov_9fa48("9137"), ''), stryMutAct_9fa48("9138") ? {} : (stryCov_9fa48("9138"), {
              title: stryMutAct_9fa48("9139") ? "" : (stryCov_9fa48("9139"), '[[modules:composer.compose]]')
            }));
          }
        } else {
          if (stryMutAct_9fa48("9140")) {
            {}
          } else {
            stryCov_9fa48("9140");
            data.templateData.title = stryMutAct_9fa48("9141") ? "" : (stryCov_9fa48("9141"), '[[modules:composer.compose]]');
            res.render(stryMutAct_9fa48("9142") ? "" : (stryCov_9fa48("9142"), 'compose'), data.templateData);
          }
        }
      }
    });
  }
}
exports.get = get;
function post(req, res) {
  if (stryMutAct_9fa48("9143")) {
    {}
  } else {
    stryCov_9fa48("9143");
    return __awaiter(this, void 0, void 0, function* () {
      if (stryMutAct_9fa48("9144")) {
        {}
      } else {
        stryCov_9fa48("9144");
        const {
          body
        } = req;
        const data = stryMutAct_9fa48("9145") ? {} : (stryCov_9fa48("9145"), {
          uid: req.uid,
          req: req,
          timestamp: Date.now(),
          content: body.content,
          fromQueue: stryMutAct_9fa48("9146") ? true : (stryCov_9fa48("9146"), false)
        });
        req.body.noscript = stryMutAct_9fa48("9147") ? "" : (stryCov_9fa48("9147"), 'true');
        if (stryMutAct_9fa48("9150") ? false : stryMutAct_9fa48("9149") ? true : stryMutAct_9fa48("9148") ? data.content : (stryCov_9fa48("9148", "9149", "9150"), !data.content)) {
          if (stryMutAct_9fa48("9151")) {
            {}
          } else {
            stryCov_9fa48("9151");
            return yield helpers_1.default.noScriptErrors(req, res, stryMutAct_9fa48("9152") ? "" : (stryCov_9fa48("9152"), '[[error:invalid-data]]'), 400);
          }
        }
        function queueOrPost(postFn, data) {
          if (stryMutAct_9fa48("9153")) {
            {}
          } else {
            stryCov_9fa48("9153");
            return __awaiter(this, void 0, void 0, function* () {
              if (stryMutAct_9fa48("9154")) {
                {}
              } else {
                stryCov_9fa48("9154");
                // The next line calls a function in a module that has not been updated to TS yet
                // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access, @typescript-eslint/no-unsafe-call
                const shouldQueue = yield posts_1.default.shouldQueue(req.uid, data);
                if (stryMutAct_9fa48("9156") ? false : stryMutAct_9fa48("9155") ? true : (stryCov_9fa48("9155", "9156"), shouldQueue)) {
                  if (stryMutAct_9fa48("9157")) {
                    {}
                  } else {
                    stryCov_9fa48("9157");
                    delete data.req;
                    // The next line calls a function in a module that has not been updated to TS yet
                    // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access, @typescript-eslint/no-unsafe-call
                    return yield posts_1.default.addToQueue(data);
                  }
                }
                return yield postFn(data);
              }
            });
          }
        }
        try {
          if (stryMutAct_9fa48("9158")) {
            {}
          } else {
            stryCov_9fa48("9158");
            let result;
            if (stryMutAct_9fa48("9160") ? false : stryMutAct_9fa48("9159") ? true : (stryCov_9fa48("9159", "9160"), body.tid)) {
              if (stryMutAct_9fa48("9161")) {
                {}
              } else {
                stryCov_9fa48("9161");
                data.tid = body.tid;
                result = yield queueOrPost(topics_1.default.reply, data);
              }
            } else if (stryMutAct_9fa48("9163") ? false : stryMutAct_9fa48("9162") ? true : (stryCov_9fa48("9162", "9163"), body.cid)) {
              if (stryMutAct_9fa48("9164")) {
                {}
              } else {
                stryCov_9fa48("9164");
                data.cid = body.cid;
                data.title = body.title;
                data.tags = stryMutAct_9fa48("9165") ? ["Stryker was here"] : (stryCov_9fa48("9165"), []);
                data.thumb = stryMutAct_9fa48("9166") ? "Stryker was here!" : (stryCov_9fa48("9166"), '');
                result = yield queueOrPost(topics_1.default.post, data);
              }
            } else {
              if (stryMutAct_9fa48("9167")) {
                {}
              } else {
                stryCov_9fa48("9167");
                throw new Error(stryMutAct_9fa48("9168") ? "" : (stryCov_9fa48("9168"), '[[error:invalid-data]]'));
              }
            }
            if (stryMutAct_9fa48("9170") ? false : stryMutAct_9fa48("9169") ? true : (stryCov_9fa48("9169", "9170"), result.queued)) {
              if (stryMutAct_9fa48("9171")) {
                {}
              } else {
                stryCov_9fa48("9171");
                return res.redirect(stryMutAct_9fa48("9172") ? `` : (stryCov_9fa48("9172"), `${stryMutAct_9fa48("9175") ? nconf_1.default.get('relative_path') && '/' : stryMutAct_9fa48("9174") ? false : stryMutAct_9fa48("9173") ? true : (stryCov_9fa48("9173", "9174", "9175"), nconf_1.default.get(stryMutAct_9fa48("9176") ? "" : (stryCov_9fa48("9176"), 'relative_path')) || (stryMutAct_9fa48("9177") ? "" : (stryCov_9fa48("9177"), '/')))}?noScriptMessage=[[success:post-queued]]`));
              }
            }
            const uid = result.uid ? result.uid : result.topicData.uid;
            // The next line calls a function in a module that has not been updated to TS yet
            // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access, @typescript-eslint/no-unsafe-call
            user_1.default.updateOnlineUsers(uid);
            const path = result.pid ? stryMutAct_9fa48("9178") ? `` : (stryCov_9fa48("9178"), `/post/${result.pid}`) : stryMutAct_9fa48("9179") ? `` : (stryCov_9fa48("9179"), `/topic/${result.topicData.slug}`);
            res.redirect(stryMutAct_9fa48("9180") ? nconf_1.default.get('relative_path') - path : (stryCov_9fa48("9180"), nconf_1.default.get(stryMutAct_9fa48("9181") ? "" : (stryCov_9fa48("9181"), 'relative_path')) + path));
          }
        } catch (err) {
          if (stryMutAct_9fa48("9182")) {
            {}
          } else {
            stryCov_9fa48("9182");
            if (stryMutAct_9fa48("9184") ? false : stryMutAct_9fa48("9183") ? true : (stryCov_9fa48("9183", "9184"), err instanceof Error)) {
              if (stryMutAct_9fa48("9185")) {
                {}
              } else {
                stryCov_9fa48("9185");
                yield helpers_1.default.noScriptErrors(req, res, err.message, 400);
              }
            }
          }
        }
      }
    });
  }
}
exports.post = post;