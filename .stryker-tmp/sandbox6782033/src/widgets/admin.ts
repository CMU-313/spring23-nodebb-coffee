// @ts-nocheck
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
import webserver from '../webserver';
import plugins from '../plugins';
import groups from '../groups';
import index from './index';
import func from '../promisify';
type LayoutData = {
  templates: TemplateData[];
  areas: AreaData[];
  availableWidgets: Widget[];
};
type TemplateData = {
  template: string;
  areas: AreaData[];
};
type AreaData = {
  name: string;
  template?: string;
  location: string;
  data?: unknown;
};
interface Widget {
  content: string;
}
interface Group {
  system: number;
}
export async function getAreas(): Promise<AreaData[]> {
  if (stryMutAct_9fa48("49966")) {
    {}
  } else {
    stryCov_9fa48("49966");
    const defaultAreas: AreaData[] = stryMutAct_9fa48("49967") ? [] : (stryCov_9fa48("49967"), [stryMutAct_9fa48("49968") ? {} : (stryCov_9fa48("49968"), {
      name: stryMutAct_9fa48("49969") ? "" : (stryCov_9fa48("49969"), 'Global Sidebar'),
      template: stryMutAct_9fa48("49970") ? "" : (stryCov_9fa48("49970"), 'global'),
      location: stryMutAct_9fa48("49971") ? "" : (stryCov_9fa48("49971"), 'sidebar')
    }), stryMutAct_9fa48("49972") ? {} : (stryCov_9fa48("49972"), {
      name: stryMutAct_9fa48("49973") ? "" : (stryCov_9fa48("49973"), 'Global Header'),
      template: stryMutAct_9fa48("49974") ? "" : (stryCov_9fa48("49974"), 'global'),
      location: stryMutAct_9fa48("49975") ? "" : (stryCov_9fa48("49975"), 'header')
    }), stryMutAct_9fa48("49976") ? {} : (stryCov_9fa48("49976"), {
      name: stryMutAct_9fa48("49977") ? "" : (stryCov_9fa48("49977"), 'Global Footer'),
      template: stryMutAct_9fa48("49978") ? "" : (stryCov_9fa48("49978"), 'global'),
      location: stryMutAct_9fa48("49979") ? "" : (stryCov_9fa48("49979"), 'footer')
    }), stryMutAct_9fa48("49980") ? {} : (stryCov_9fa48("49980"), {
      name: stryMutAct_9fa48("49981") ? "" : (stryCov_9fa48("49981"), 'Group Page (Left)'),
      template: stryMutAct_9fa48("49982") ? "" : (stryCov_9fa48("49982"), 'groups/details.tpl'),
      location: stryMutAct_9fa48("49983") ? "" : (stryCov_9fa48("49983"), 'left')
    }), stryMutAct_9fa48("49984") ? {} : (stryCov_9fa48("49984"), {
      name: stryMutAct_9fa48("49985") ? "" : (stryCov_9fa48("49985"), 'Group Page (Right)'),
      template: stryMutAct_9fa48("49986") ? "" : (stryCov_9fa48("49986"), 'groups/details.tpl'),
      location: stryMutAct_9fa48("49987") ? "" : (stryCov_9fa48("49987"), 'right')
    })]);
    const areas: AreaData[] = (await plugins.hooks.fire('filter:widgets.getAreas', defaultAreas) as AreaData[]);
    areas.push(stryMutAct_9fa48("49988") ? {} : (stryCov_9fa48("49988"), {
      name: stryMutAct_9fa48("49989") ? "" : (stryCov_9fa48("49989"), 'Draft Zone'),
      template: stryMutAct_9fa48("49990") ? "" : (stryCov_9fa48("49990"), 'global'),
      location: stryMutAct_9fa48("49991") ? "" : (stryCov_9fa48("49991"), 'drafts')
    }));
    const areaData: unknown[] = await Promise.all(areas.map(stryMutAct_9fa48("49992") ? () => undefined : (stryCov_9fa48("49992"), area => index.getArea(area.template, area.location))));
    areas.forEach((area, i) => {
      if (stryMutAct_9fa48("49993")) {
        {}
      } else {
        stryCov_9fa48("49993");
        area.data = areaData[i];
      }
    });
    return areas;
  }
}
async function renderAdminTemplate(): Promise<unknown> {
  if (stryMutAct_9fa48("49994")) {
    {}
  } else {
    stryCov_9fa48("49994");
    const groupsData: Group[] = (await groups.getNonPrivilegeGroups('groups:createtime', 0, -1) as Group[]);
    stryMutAct_9fa48("49995") ? groupsData : (stryCov_9fa48("49995"), groupsData.sort(stryMutAct_9fa48("49996") ? () => undefined : (stryCov_9fa48("49996"), (a, b) => stryMutAct_9fa48("49997") ? b.system + a.system : (stryCov_9fa48("49997"), b.system - a.system))));
    // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access, @typescript-eslint/no-unsafe-call
    return (await webserver.app.renderAsync('admin/partials/widget-settings', {
      groups: groupsData
    }) as unknown);
  }
}
function buildTemplatesFromAreas(areas: AreaData[]): TemplateData[] {
  if (stryMutAct_9fa48("49998")) {
    {}
  } else {
    stryCov_9fa48("49998");
    const templates: TemplateData[] = stryMutAct_9fa48("49999") ? ["Stryker was here"] : (stryCov_9fa48("49999"), []);
    const list: {
      [key: string]: number;
    } = {};
    let index = 0;
    areas.forEach(area => {
      if (stryMutAct_9fa48("50000")) {
        {}
      } else {
        stryCov_9fa48("50000");
        if (stryMutAct_9fa48("50003") ? typeof list[area.template] !== 'undefined' : stryMutAct_9fa48("50002") ? false : stryMutAct_9fa48("50001") ? true : (stryCov_9fa48("50001", "50002", "50003"), typeof list[area.template] === (stryMutAct_9fa48("50004") ? "" : (stryCov_9fa48("50004"), 'undefined')))) {
          if (stryMutAct_9fa48("50005")) {
            {}
          } else {
            stryCov_9fa48("50005");
            list[area.template] = index;
            templates.push(stryMutAct_9fa48("50006") ? {} : (stryCov_9fa48("50006"), {
              template: area.template,
              areas: stryMutAct_9fa48("50007") ? ["Stryker was here"] : (stryCov_9fa48("50007"), [])
            }));
            stryMutAct_9fa48("50008") ? index -= 1 : (stryCov_9fa48("50008"), index += 1);
          }
        }
        templates[list[area.template]].areas.push(stryMutAct_9fa48("50009") ? {} : (stryCov_9fa48("50009"), {
          name: area.name,
          location: area.location
        }));
      }
    });
    return templates;
  }
}
async function getAvailableWidgets(): Promise<Widget[]> {
  if (stryMutAct_9fa48("50010")) {
    {}
  } else {
    stryCov_9fa48("50010");
    const [availableWidgets, adminTemplate]: [Widget[], unknown] = await Promise.all(stryMutAct_9fa48("50011") ? [] : (stryCov_9fa48("50011"), [(plugins.hooks.fire('filter:widgets.getWidgets', []) as Widget[]), renderAdminTemplate()]));
    availableWidgets.forEach((w: Widget) => {
      if (stryMutAct_9fa48("50012")) {
        {}
      } else {
        stryCov_9fa48("50012");
        stryMutAct_9fa48("50013") ? w.content -= adminTemplate : (stryCov_9fa48("50013"), w.content += adminTemplate);
      }
    });
    return availableWidgets;
  }
}
export async function get(): Promise<LayoutData> {
  if (stryMutAct_9fa48("50014")) {
    {}
  } else {
    stryCov_9fa48("50014");
    const [areas, availableWidgets]: [AreaData[], Widget[]] = await Promise.all(stryMutAct_9fa48("50015") ? [] : (stryCov_9fa48("50015"), [getAreas(), getAvailableWidgets()]));
    return stryMutAct_9fa48("50016") ? {} : (stryCov_9fa48("50016"), {
      templates: buildTemplatesFromAreas(areas),
      areas: areas,
      availableWidgets: availableWidgets
    });
  }
}
func(exports);