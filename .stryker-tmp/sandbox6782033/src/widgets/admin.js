// @ts-nocheck
"use strict";

// Referenced @joonbang's TypeScript translation from P1: https://github.com/CMU-313/NodeBB/pull/151
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
var __awaiter = stryMutAct_9fa48("49869") ? this && this.__awaiter && function (thisArg, _arguments, P, generator) {
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
} : stryMutAct_9fa48("49868") ? false : stryMutAct_9fa48("49867") ? true : (stryCov_9fa48("49867", "49868", "49869"), (stryMutAct_9fa48("49871") ? this || this.__awaiter : stryMutAct_9fa48("49870") ? false : (stryCov_9fa48("49870", "49871"), this && this.__awaiter)) || function (thisArg, _arguments, P, generator) {
  if (stryMutAct_9fa48("49872")) {
    {}
  } else {
    stryCov_9fa48("49872");
    function adopt(value) {
      if (stryMutAct_9fa48("49873")) {
        {}
      } else {
        stryCov_9fa48("49873");
        return value instanceof P ? value : new P(function (resolve) {
          if (stryMutAct_9fa48("49874")) {
            {}
          } else {
            stryCov_9fa48("49874");
            resolve(value);
          }
        });
      }
    }
    return new (stryMutAct_9fa48("49877") ? P && (P = Promise) : stryMutAct_9fa48("49876") ? false : stryMutAct_9fa48("49875") ? true : (stryCov_9fa48("49875", "49876", "49877"), P || (P = Promise)))(function (resolve, reject) {
      if (stryMutAct_9fa48("49878")) {
        {}
      } else {
        stryCov_9fa48("49878");
        function fulfilled(value) {
          if (stryMutAct_9fa48("49879")) {
            {}
          } else {
            stryCov_9fa48("49879");
            try {
              if (stryMutAct_9fa48("49880")) {
                {}
              } else {
                stryCov_9fa48("49880");
                step(generator.next(value));
              }
            } catch (e) {
              if (stryMutAct_9fa48("49881")) {
                {}
              } else {
                stryCov_9fa48("49881");
                reject(e);
              }
            }
          }
        }
        function rejected(value) {
          if (stryMutAct_9fa48("49882")) {
            {}
          } else {
            stryCov_9fa48("49882");
            try {
              if (stryMutAct_9fa48("49883")) {
                {}
              } else {
                stryCov_9fa48("49883");
                step(generator[stryMutAct_9fa48("49884") ? "" : (stryCov_9fa48("49884"), "throw")](value));
              }
            } catch (e) {
              if (stryMutAct_9fa48("49885")) {
                {}
              } else {
                stryCov_9fa48("49885");
                reject(e);
              }
            }
          }
        }
        function step(result) {
          if (stryMutAct_9fa48("49886")) {
            {}
          } else {
            stryCov_9fa48("49886");
            result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
          }
        }
        step((generator = generator.apply(thisArg, stryMutAct_9fa48("49889") ? _arguments && [] : stryMutAct_9fa48("49888") ? false : stryMutAct_9fa48("49887") ? true : (stryCov_9fa48("49887", "49888", "49889"), _arguments || (stryMutAct_9fa48("49890") ? ["Stryker was here"] : (stryCov_9fa48("49890"), []))))).next());
      }
    });
  }
});
var __importDefault = stryMutAct_9fa48("49893") ? this && this.__importDefault && function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
} : stryMutAct_9fa48("49892") ? false : stryMutAct_9fa48("49891") ? true : (stryCov_9fa48("49891", "49892", "49893"), (stryMutAct_9fa48("49895") ? this || this.__importDefault : stryMutAct_9fa48("49894") ? false : (stryCov_9fa48("49894", "49895"), this && this.__importDefault)) || function (mod) {
  if (stryMutAct_9fa48("49896")) {
    {}
  } else {
    stryCov_9fa48("49896");
    return (stryMutAct_9fa48("49899") ? mod || mod.__esModule : stryMutAct_9fa48("49898") ? false : stryMutAct_9fa48("49897") ? true : (stryCov_9fa48("49897", "49898", "49899"), mod && mod.__esModule)) ? mod : stryMutAct_9fa48("49900") ? {} : (stryCov_9fa48("49900"), {
      "default": mod
    });
  }
});
Object.defineProperty(exports, stryMutAct_9fa48("49901") ? "" : (stryCov_9fa48("49901"), "__esModule"), stryMutAct_9fa48("49902") ? {} : (stryCov_9fa48("49902"), {
  value: stryMutAct_9fa48("49903") ? false : (stryCov_9fa48("49903"), true)
}));
exports.get = exports.getAreas = void 0;
const webserver_1 = __importDefault(require("../webserver"));
const plugins_1 = __importDefault(require("../plugins"));
const groups_1 = __importDefault(require("../groups"));
const index_1 = __importDefault(require("./index"));
const promisify_1 = __importDefault(require("../promisify"));
function getAreas() {
  if (stryMutAct_9fa48("49904")) {
    {}
  } else {
    stryCov_9fa48("49904");
    return __awaiter(this, void 0, void 0, function* () {
      if (stryMutAct_9fa48("49905")) {
        {}
      } else {
        stryCov_9fa48("49905");
        const defaultAreas = stryMutAct_9fa48("49906") ? [] : (stryCov_9fa48("49906"), [stryMutAct_9fa48("49907") ? {} : (stryCov_9fa48("49907"), {
          name: stryMutAct_9fa48("49908") ? "" : (stryCov_9fa48("49908"), 'Global Sidebar'),
          template: stryMutAct_9fa48("49909") ? "" : (stryCov_9fa48("49909"), 'global'),
          location: stryMutAct_9fa48("49910") ? "" : (stryCov_9fa48("49910"), 'sidebar')
        }), stryMutAct_9fa48("49911") ? {} : (stryCov_9fa48("49911"), {
          name: stryMutAct_9fa48("49912") ? "" : (stryCov_9fa48("49912"), 'Global Header'),
          template: stryMutAct_9fa48("49913") ? "" : (stryCov_9fa48("49913"), 'global'),
          location: stryMutAct_9fa48("49914") ? "" : (stryCov_9fa48("49914"), 'header')
        }), stryMutAct_9fa48("49915") ? {} : (stryCov_9fa48("49915"), {
          name: stryMutAct_9fa48("49916") ? "" : (stryCov_9fa48("49916"), 'Global Footer'),
          template: stryMutAct_9fa48("49917") ? "" : (stryCov_9fa48("49917"), 'global'),
          location: stryMutAct_9fa48("49918") ? "" : (stryCov_9fa48("49918"), 'footer')
        }), stryMutAct_9fa48("49919") ? {} : (stryCov_9fa48("49919"), {
          name: stryMutAct_9fa48("49920") ? "" : (stryCov_9fa48("49920"), 'Group Page (Left)'),
          template: stryMutAct_9fa48("49921") ? "" : (stryCov_9fa48("49921"), 'groups/details.tpl'),
          location: stryMutAct_9fa48("49922") ? "" : (stryCov_9fa48("49922"), 'left')
        }), stryMutAct_9fa48("49923") ? {} : (stryCov_9fa48("49923"), {
          name: stryMutAct_9fa48("49924") ? "" : (stryCov_9fa48("49924"), 'Group Page (Right)'),
          template: stryMutAct_9fa48("49925") ? "" : (stryCov_9fa48("49925"), 'groups/details.tpl'),
          location: stryMutAct_9fa48("49926") ? "" : (stryCov_9fa48("49926"), 'right')
        })]);
        const areas = yield plugins_1.default.hooks.fire(stryMutAct_9fa48("49927") ? "" : (stryCov_9fa48("49927"), 'filter:widgets.getAreas'), defaultAreas);
        areas.push(stryMutAct_9fa48("49928") ? {} : (stryCov_9fa48("49928"), {
          name: stryMutAct_9fa48("49929") ? "" : (stryCov_9fa48("49929"), 'Draft Zone'),
          template: stryMutAct_9fa48("49930") ? "" : (stryCov_9fa48("49930"), 'global'),
          location: stryMutAct_9fa48("49931") ? "" : (stryCov_9fa48("49931"), 'drafts')
        }));
        const areaData = yield Promise.all(areas.map(stryMutAct_9fa48("49932") ? () => undefined : (stryCov_9fa48("49932"), area => index_1.default.getArea(area.template, area.location))));
        areas.forEach((area, i) => {
          if (stryMutAct_9fa48("49933")) {
            {}
          } else {
            stryCov_9fa48("49933");
            area.data = areaData[i];
          }
        });
        return areas;
      }
    });
  }
}
exports.getAreas = getAreas;
function renderAdminTemplate() {
  if (stryMutAct_9fa48("49934")) {
    {}
  } else {
    stryCov_9fa48("49934");
    return __awaiter(this, void 0, void 0, function* () {
      if (stryMutAct_9fa48("49935")) {
        {}
      } else {
        stryCov_9fa48("49935");
        const groupsData = yield groups_1.default.getNonPrivilegeGroups(stryMutAct_9fa48("49936") ? "" : (stryCov_9fa48("49936"), 'groups:createtime'), 0, stryMutAct_9fa48("49937") ? +1 : (stryCov_9fa48("49937"), -1));
        stryMutAct_9fa48("49938") ? groupsData : (stryCov_9fa48("49938"), groupsData.sort(stryMutAct_9fa48("49939") ? () => undefined : (stryCov_9fa48("49939"), (a, b) => stryMutAct_9fa48("49940") ? b.system + a.system : (stryCov_9fa48("49940"), b.system - a.system))));
        // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access, @typescript-eslint/no-unsafe-call
        return yield webserver_1.default.app.renderAsync(stryMutAct_9fa48("49941") ? "" : (stryCov_9fa48("49941"), 'admin/partials/widget-settings'), stryMutAct_9fa48("49942") ? {} : (stryCov_9fa48("49942"), {
          groups: groupsData
        }));
      }
    });
  }
}
function buildTemplatesFromAreas(areas) {
  if (stryMutAct_9fa48("49943")) {
    {}
  } else {
    stryCov_9fa48("49943");
    const templates = stryMutAct_9fa48("49944") ? ["Stryker was here"] : (stryCov_9fa48("49944"), []);
    const list = {};
    let index = 0;
    areas.forEach(area => {
      if (stryMutAct_9fa48("49945")) {
        {}
      } else {
        stryCov_9fa48("49945");
        if (stryMutAct_9fa48("49948") ? typeof list[area.template] !== 'undefined' : stryMutAct_9fa48("49947") ? false : stryMutAct_9fa48("49946") ? true : (stryCov_9fa48("49946", "49947", "49948"), typeof list[area.template] === (stryMutAct_9fa48("49949") ? "" : (stryCov_9fa48("49949"), 'undefined')))) {
          if (stryMutAct_9fa48("49950")) {
            {}
          } else {
            stryCov_9fa48("49950");
            list[area.template] = index;
            templates.push(stryMutAct_9fa48("49951") ? {} : (stryCov_9fa48("49951"), {
              template: area.template,
              areas: stryMutAct_9fa48("49952") ? ["Stryker was here"] : (stryCov_9fa48("49952"), [])
            }));
            stryMutAct_9fa48("49953") ? index -= 1 : (stryCov_9fa48("49953"), index += 1);
          }
        }
        templates[list[area.template]].areas.push(stryMutAct_9fa48("49954") ? {} : (stryCov_9fa48("49954"), {
          name: area.name,
          location: area.location
        }));
      }
    });
    return templates;
  }
}
function getAvailableWidgets() {
  if (stryMutAct_9fa48("49955")) {
    {}
  } else {
    stryCov_9fa48("49955");
    return __awaiter(this, void 0, void 0, function* () {
      if (stryMutAct_9fa48("49956")) {
        {}
      } else {
        stryCov_9fa48("49956");
        const [availableWidgets, adminTemplate] = yield Promise.all(stryMutAct_9fa48("49957") ? [] : (stryCov_9fa48("49957"), [plugins_1.default.hooks.fire(stryMutAct_9fa48("49958") ? "" : (stryCov_9fa48("49958"), 'filter:widgets.getWidgets'), stryMutAct_9fa48("49959") ? ["Stryker was here"] : (stryCov_9fa48("49959"), [])), renderAdminTemplate()]));
        availableWidgets.forEach(w => {
          if (stryMutAct_9fa48("49960")) {
            {}
          } else {
            stryCov_9fa48("49960");
            stryMutAct_9fa48("49961") ? w.content -= adminTemplate : (stryCov_9fa48("49961"), w.content += adminTemplate);
          }
        });
        return availableWidgets;
      }
    });
  }
}
function get() {
  if (stryMutAct_9fa48("49962")) {
    {}
  } else {
    stryCov_9fa48("49962");
    return __awaiter(this, void 0, void 0, function* () {
      if (stryMutAct_9fa48("49963")) {
        {}
      } else {
        stryCov_9fa48("49963");
        const [areas, availableWidgets] = yield Promise.all(stryMutAct_9fa48("49964") ? [] : (stryCov_9fa48("49964"), [getAreas(), getAvailableWidgets()]));
        return stryMutAct_9fa48("49965") ? {} : (stryCov_9fa48("49965"), {
          templates: buildTemplatesFromAreas(areas),
          areas: areas,
          availableWidgets: availableWidgets
        });
      }
    });
  }
}
exports.get = get;
(0, promisify_1.default)(exports);