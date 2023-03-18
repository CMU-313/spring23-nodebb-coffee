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
var __awaiter = stryMutAct_9fa48("34685") ? this && this.__awaiter && function (thisArg, _arguments, P, generator) {
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
} : stryMutAct_9fa48("34684") ? false : stryMutAct_9fa48("34683") ? true : (stryCov_9fa48("34683", "34684", "34685"), (stryMutAct_9fa48("34687") ? this || this.__awaiter : stryMutAct_9fa48("34686") ? false : (stryCov_9fa48("34686", "34687"), this && this.__awaiter)) || function (thisArg, _arguments, P, generator) {
  if (stryMutAct_9fa48("34688")) {
    {}
  } else {
    stryCov_9fa48("34688");
    function adopt(value) {
      if (stryMutAct_9fa48("34689")) {
        {}
      } else {
        stryCov_9fa48("34689");
        return value instanceof P ? value : new P(function (resolve) {
          if (stryMutAct_9fa48("34690")) {
            {}
          } else {
            stryCov_9fa48("34690");
            resolve(value);
          }
        });
      }
    }
    return new (stryMutAct_9fa48("34693") ? P && (P = Promise) : stryMutAct_9fa48("34692") ? false : stryMutAct_9fa48("34691") ? true : (stryCov_9fa48("34691", "34692", "34693"), P || (P = Promise)))(function (resolve, reject) {
      if (stryMutAct_9fa48("34694")) {
        {}
      } else {
        stryCov_9fa48("34694");
        function fulfilled(value) {
          if (stryMutAct_9fa48("34695")) {
            {}
          } else {
            stryCov_9fa48("34695");
            try {
              if (stryMutAct_9fa48("34696")) {
                {}
              } else {
                stryCov_9fa48("34696");
                step(generator.next(value));
              }
            } catch (e) {
              if (stryMutAct_9fa48("34697")) {
                {}
              } else {
                stryCov_9fa48("34697");
                reject(e);
              }
            }
          }
        }
        function rejected(value) {
          if (stryMutAct_9fa48("34698")) {
            {}
          } else {
            stryCov_9fa48("34698");
            try {
              if (stryMutAct_9fa48("34699")) {
                {}
              } else {
                stryCov_9fa48("34699");
                step(generator[stryMutAct_9fa48("34700") ? "" : (stryCov_9fa48("34700"), "throw")](value));
              }
            } catch (e) {
              if (stryMutAct_9fa48("34701")) {
                {}
              } else {
                stryCov_9fa48("34701");
                reject(e);
              }
            }
          }
        }
        function step(result) {
          if (stryMutAct_9fa48("34702")) {
            {}
          } else {
            stryCov_9fa48("34702");
            result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
          }
        }
        step((generator = generator.apply(thisArg, stryMutAct_9fa48("34705") ? _arguments && [] : stryMutAct_9fa48("34704") ? false : stryMutAct_9fa48("34703") ? true : (stryCov_9fa48("34703", "34704", "34705"), _arguments || (stryMutAct_9fa48("34706") ? ["Stryker was here"] : (stryCov_9fa48("34706"), []))))).next());
      }
    });
  }
});
var __importDefault = stryMutAct_9fa48("34709") ? this && this.__importDefault && function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
} : stryMutAct_9fa48("34708") ? false : stryMutAct_9fa48("34707") ? true : (stryCov_9fa48("34707", "34708", "34709"), (stryMutAct_9fa48("34711") ? this || this.__importDefault : stryMutAct_9fa48("34710") ? false : (stryCov_9fa48("34710", "34711"), this && this.__importDefault)) || function (mod) {
  if (stryMutAct_9fa48("34712")) {
    {}
  } else {
    stryCov_9fa48("34712");
    return (stryMutAct_9fa48("34715") ? mod || mod.__esModule : stryMutAct_9fa48("34714") ? false : stryMutAct_9fa48("34713") ? true : (stryCov_9fa48("34713", "34714", "34715"), mod && mod.__esModule)) ? mod : stryMutAct_9fa48("34716") ? {} : (stryCov_9fa48("34716"), {
      "default": mod
    });
  }
});
Object.defineProperty(exports, stryMutAct_9fa48("34717") ? "" : (stryCov_9fa48("34717"), "__esModule"), stryMutAct_9fa48("34718") ? {} : (stryCov_9fa48("34718"), {
  value: stryMutAct_9fa48("34719") ? false : (stryCov_9fa48("34719"), true)
}));
exports.setActivePostSharingNetworks = exports.getActivePostSharing = exports.getPostSharing = void 0;
const lodash_1 = __importDefault(require("lodash"));
const plugins_1 = __importDefault(require("./plugins"));
const database_1 = __importDefault(require("./database"));
let postSharing = null;
function getPostSharing() {
  if (stryMutAct_9fa48("34720")) {
    {}
  } else {
    stryCov_9fa48("34720");
    return __awaiter(this, void 0, void 0, function* () {
      if (stryMutAct_9fa48("34721")) {
        {}
      } else {
        stryCov_9fa48("34721");
        if (stryMutAct_9fa48("34723") ? false : stryMutAct_9fa48("34722") ? true : (stryCov_9fa48("34722", "34723"), postSharing)) {
          if (stryMutAct_9fa48("34724")) {
            {}
          } else {
            stryCov_9fa48("34724");
            return lodash_1.default.cloneDeep(postSharing);
          }
        }
        let networks = stryMutAct_9fa48("34725") ? [] : (stryCov_9fa48("34725"), [stryMutAct_9fa48("34726") ? {} : (stryCov_9fa48("34726"), {
          id: stryMutAct_9fa48("34727") ? "" : (stryCov_9fa48("34727"), 'facebook'),
          name: stryMutAct_9fa48("34728") ? "" : (stryCov_9fa48("34728"), 'Facebook'),
          class: stryMutAct_9fa48("34729") ? "" : (stryCov_9fa48("34729"), 'fa-facebook'),
          activated: null
        }), stryMutAct_9fa48("34730") ? {} : (stryCov_9fa48("34730"), {
          id: stryMutAct_9fa48("34731") ? "" : (stryCov_9fa48("34731"), 'twitter'),
          name: stryMutAct_9fa48("34732") ? "" : (stryCov_9fa48("34732"), 'Twitter'),
          class: stryMutAct_9fa48("34733") ? "" : (stryCov_9fa48("34733"), 'fa-twitter'),
          activated: null
        })]);
        networks = yield plugins_1.default.hooks.fire(stryMutAct_9fa48("34734") ? "" : (stryCov_9fa48("34734"), 'filter:social.posts'), networks);
        // The next line calls a function in a module that has not been updated to TS yet
        // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access, @typescript-eslint/no-unsafe-call
        const activated = yield database_1.default.getSetMembers(stryMutAct_9fa48("34735") ? "" : (stryCov_9fa48("34735"), 'social:posts.activated'));
        networks.forEach(network => {
          if (stryMutAct_9fa48("34736")) {
            {}
          } else {
            stryCov_9fa48("34736");
            network.activated = activated.includes(network.id);
          }
        });
        postSharing = networks;
        return lodash_1.default.cloneDeep(networks);
      }
    });
  }
}
exports.getPostSharing = getPostSharing;
function getActivePostSharing() {
  if (stryMutAct_9fa48("34737")) {
    {}
  } else {
    stryCov_9fa48("34737");
    return __awaiter(this, void 0, void 0, function* () {
      if (stryMutAct_9fa48("34738")) {
        {}
      } else {
        stryCov_9fa48("34738");
        const networks = yield getPostSharing();
        return stryMutAct_9fa48("34739") ? networks : (stryCov_9fa48("34739"), networks.filter(stryMutAct_9fa48("34740") ? () => undefined : (stryCov_9fa48("34740"), network => stryMutAct_9fa48("34743") ? network || network.activated : stryMutAct_9fa48("34742") ? false : stryMutAct_9fa48("34741") ? true : (stryCov_9fa48("34741", "34742", "34743"), network && network.activated))));
      }
    });
  }
}
exports.getActivePostSharing = getActivePostSharing;
function setActivePostSharingNetworks(networkIDs) {
  if (stryMutAct_9fa48("34744")) {
    {}
  } else {
    stryCov_9fa48("34744");
    return __awaiter(this, void 0, void 0, function* () {
      if (stryMutAct_9fa48("34745")) {
        {}
      } else {
        stryCov_9fa48("34745");
        postSharing = null;
        // The next line calls a function in a module that has not been updated to TS yet
        // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access, @typescript-eslint/no-unsafe-call
        yield database_1.default.delete(stryMutAct_9fa48("34746") ? "" : (stryCov_9fa48("34746"), 'social:posts.activated'));
        if (stryMutAct_9fa48("34749") ? false : stryMutAct_9fa48("34748") ? true : stryMutAct_9fa48("34747") ? networkIDs.length : (stryCov_9fa48("34747", "34748", "34749"), !networkIDs.length)) {
          if (stryMutAct_9fa48("34750")) {
            {}
          } else {
            stryCov_9fa48("34750");
            return;
          }
        }
        // The next line calls a function in a module that has not been updated to TS yet
        // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access, @typescript-eslint/no-unsafe-call
        yield database_1.default.setAdd(stryMutAct_9fa48("34751") ? "" : (stryCov_9fa48("34751"), 'social:posts.activated'), networkIDs);
      }
    });
  }
}
exports.setActivePostSharingNetworks = setActivePostSharingNetworks;