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
const winston = require('winston');
const _ = require('lodash');
const Benchpress = require('benchpressjs');
const plugins = require('../plugins');
const groups = require('../groups');
const translator = require('../translator');
const db = require('../database');
const apiController = require('../controllers/api');
const meta = require('../meta');
const widgets = module.exports;
widgets.render = async function (uid, options) {
  if (stryMutAct_9fa48("50017")) {
    {}
  } else {
    stryCov_9fa48("50017");
    if (stryMutAct_9fa48("50020") ? false : stryMutAct_9fa48("50019") ? true : stryMutAct_9fa48("50018") ? options.template : (stryCov_9fa48("50018", "50019", "50020"), !options.template)) {
      if (stryMutAct_9fa48("50021")) {
        {}
      } else {
        stryCov_9fa48("50021");
        throw new Error(stryMutAct_9fa48("50022") ? "" : (stryCov_9fa48("50022"), '[[error:invalid-data]]'));
      }
    }
    const data = await widgets.getWidgetDataForTemplates(stryMutAct_9fa48("50023") ? [] : (stryCov_9fa48("50023"), [stryMutAct_9fa48("50024") ? "" : (stryCov_9fa48("50024"), 'global'), options.template]));
    delete data.global.drafts;
    const locations = _.uniq(Object.keys(data.global).concat(Object.keys(data[options.template])));
    const widgetData = await Promise.all(locations.map(stryMutAct_9fa48("50025") ? () => undefined : (stryCov_9fa48("50025"), location => renderLocation(location, data, uid, options))));
    const returnData = {};
    locations.forEach((location, i) => {
      if (stryMutAct_9fa48("50026")) {
        {}
      } else {
        stryCov_9fa48("50026");
        if (stryMutAct_9fa48("50029") ? Array.isArray(widgetData[i]) || widgetData[i].length : stryMutAct_9fa48("50028") ? false : stryMutAct_9fa48("50027") ? true : (stryCov_9fa48("50027", "50028", "50029"), Array.isArray(widgetData[i]) && widgetData[i].length)) {
          if (stryMutAct_9fa48("50030")) {
            {}
          } else {
            stryCov_9fa48("50030");
            returnData[location] = stryMutAct_9fa48("50031") ? widgetData[i] : (stryCov_9fa48("50031"), widgetData[i].filter(Boolean));
          }
        }
      }
    });
    return returnData;
  }
};
async function renderLocation(location, data, uid, options) {
  if (stryMutAct_9fa48("50032")) {
    {}
  } else {
    stryCov_9fa48("50032");
    const widgetsAtLocation = (stryMutAct_9fa48("50035") ? data[options.template][location] && [] : stryMutAct_9fa48("50034") ? false : stryMutAct_9fa48("50033") ? true : (stryCov_9fa48("50033", "50034", "50035"), data[options.template][location] || (stryMutAct_9fa48("50036") ? ["Stryker was here"] : (stryCov_9fa48("50036"), [])))).concat(stryMutAct_9fa48("50039") ? data.global[location] && [] : stryMutAct_9fa48("50038") ? false : stryMutAct_9fa48("50037") ? true : (stryCov_9fa48("50037", "50038", "50039"), data.global[location] || (stryMutAct_9fa48("50040") ? ["Stryker was here"] : (stryCov_9fa48("50040"), []))));
    if (stryMutAct_9fa48("50043") ? false : stryMutAct_9fa48("50042") ? true : stryMutAct_9fa48("50041") ? widgetsAtLocation.length : (stryCov_9fa48("50041", "50042", "50043"), !widgetsAtLocation.length)) {
      if (stryMutAct_9fa48("50044")) {
        {}
      } else {
        stryCov_9fa48("50044");
        return stryMutAct_9fa48("50045") ? ["Stryker was here"] : (stryCov_9fa48("50045"), []);
      }
    }
    const renderedWidgets = await Promise.all(widgetsAtLocation.map(stryMutAct_9fa48("50046") ? () => undefined : (stryCov_9fa48("50046"), widget => renderWidget(widget, uid, options))));
    return renderedWidgets;
  }
}
async function renderWidget(widget, uid, options) {
  if (stryMutAct_9fa48("50047")) {
    {}
  } else {
    stryCov_9fa48("50047");
    if (stryMutAct_9fa48("50050") ? (!widget || !widget.data) && !!widget.data['hide-mobile'] && options.req.useragent.isMobile : stryMutAct_9fa48("50049") ? false : stryMutAct_9fa48("50048") ? true : (stryCov_9fa48("50048", "50049", "50050"), (stryMutAct_9fa48("50052") ? !widget && !widget.data : stryMutAct_9fa48("50051") ? false : (stryCov_9fa48("50051", "50052"), (stryMutAct_9fa48("50053") ? widget : (stryCov_9fa48("50053"), !widget)) || (stryMutAct_9fa48("50054") ? widget.data : (stryCov_9fa48("50054"), !widget.data)))) || (stryMutAct_9fa48("50056") ? !!widget.data['hide-mobile'] || options.req.useragent.isMobile : stryMutAct_9fa48("50055") ? false : (stryCov_9fa48("50055", "50056"), (stryMutAct_9fa48("50057") ? !widget.data['hide-mobile'] : (stryCov_9fa48("50057"), !(stryMutAct_9fa48("50058") ? widget.data['hide-mobile'] : (stryCov_9fa48("50058"), !widget.data[stryMutAct_9fa48("50059") ? "" : (stryCov_9fa48("50059"), 'hide-mobile')])))) && options.req.useragent.isMobile)))) {
      if (stryMutAct_9fa48("50060")) {
        {}
      } else {
        stryCov_9fa48("50060");
        return;
      }
    }
    const isVisible = await widgets.checkVisibility(widget.data, uid);
    if (stryMutAct_9fa48("50063") ? false : stryMutAct_9fa48("50062") ? true : stryMutAct_9fa48("50061") ? isVisible : (stryCov_9fa48("50061", "50062", "50063"), !isVisible)) {
      if (stryMutAct_9fa48("50064")) {
        {}
      } else {
        stryCov_9fa48("50064");
        return;
      }
    }
    let config = stryMutAct_9fa48("50067") ? options.res.locals.config && {} : stryMutAct_9fa48("50066") ? false : stryMutAct_9fa48("50065") ? true : (stryCov_9fa48("50065", "50066", "50067"), options.res.locals.config || {});
    if (stryMutAct_9fa48("50069") ? false : stryMutAct_9fa48("50068") ? true : (stryCov_9fa48("50068", "50069"), options.res.locals.isAPI)) {
      if (stryMutAct_9fa48("50070")) {
        {}
      } else {
        stryCov_9fa48("50070");
        config = await apiController.loadConfig(options.req);
      }
    }
    const userLang = stryMutAct_9fa48("50073") ? (config.userLang || meta.config.defaultLang) && 'en-GB' : stryMutAct_9fa48("50072") ? false : stryMutAct_9fa48("50071") ? true : (stryCov_9fa48("50071", "50072", "50073"), (stryMutAct_9fa48("50075") ? config.userLang && meta.config.defaultLang : stryMutAct_9fa48("50074") ? false : (stryCov_9fa48("50074", "50075"), config.userLang || meta.config.defaultLang)) || (stryMutAct_9fa48("50076") ? "" : (stryCov_9fa48("50076"), 'en-GB')));
    const templateData = _.assign({}, options.templateData, stryMutAct_9fa48("50077") ? {} : (stryCov_9fa48("50077"), {
      config: config
    }));
    const data = await plugins.hooks.fire(stryMutAct_9fa48("50078") ? `` : (stryCov_9fa48("50078"), `filter:widget.render:${widget.widget}`), stryMutAct_9fa48("50079") ? {} : (stryCov_9fa48("50079"), {
      uid: uid,
      area: options,
      templateData: templateData,
      data: widget.data,
      req: options.req,
      res: options.res
    }));
    if (stryMutAct_9fa48("50082") ? false : stryMutAct_9fa48("50081") ? true : stryMutAct_9fa48("50080") ? data : (stryCov_9fa48("50080", "50081", "50082"), !data)) {
      if (stryMutAct_9fa48("50083")) {
        {}
      } else {
        stryCov_9fa48("50083");
        return;
      }
    }
    let {
      html
    } = data;
    if (stryMutAct_9fa48("50086") ? widget.data.container || widget.data.container.match('{body}') : stryMutAct_9fa48("50085") ? false : stryMutAct_9fa48("50084") ? true : (stryCov_9fa48("50084", "50085", "50086"), widget.data.container && widget.data.container.match(stryMutAct_9fa48("50087") ? "" : (stryCov_9fa48("50087"), '{body}')))) {
      if (stryMutAct_9fa48("50088")) {
        {}
      } else {
        stryCov_9fa48("50088");
        html = await Benchpress.compileRender(widget.data.container, stryMutAct_9fa48("50089") ? {} : (stryCov_9fa48("50089"), {
          title: widget.data.title,
          body: html,
          template: stryMutAct_9fa48("50092") ? data.templateData || data.templateData.template : stryMutAct_9fa48("50091") ? false : stryMutAct_9fa48("50090") ? true : (stryCov_9fa48("50090", "50091", "50092"), data.templateData && data.templateData.template)
        }));
      }
    }
    if (stryMutAct_9fa48("50094") ? false : stryMutAct_9fa48("50093") ? true : (stryCov_9fa48("50093", "50094"), html)) {
      if (stryMutAct_9fa48("50095")) {
        {}
      } else {
        stryCov_9fa48("50095");
        html = await translator.translate(html, userLang);
      }
    }
    return stryMutAct_9fa48("50096") ? {} : (stryCov_9fa48("50096"), {
      html
    });
  }
}
widgets.checkVisibility = async function (data, uid) {
  if (stryMutAct_9fa48("50097")) {
    {}
  } else {
    stryCov_9fa48("50097");
    let isVisible = stryMutAct_9fa48("50098") ? false : (stryCov_9fa48("50098"), true);
    let isHidden = stryMutAct_9fa48("50099") ? true : (stryCov_9fa48("50099"), false);
    if (stryMutAct_9fa48("50101") ? false : stryMutAct_9fa48("50100") ? true : (stryCov_9fa48("50100", "50101"), data.groups.length)) {
      if (stryMutAct_9fa48("50102")) {
        {}
      } else {
        stryCov_9fa48("50102");
        isVisible = await groups.isMemberOfAny(uid, data.groups);
      }
    }
    if (stryMutAct_9fa48("50104") ? false : stryMutAct_9fa48("50103") ? true : (stryCov_9fa48("50103", "50104"), data.groupsHideFrom.length)) {
      if (stryMutAct_9fa48("50105")) {
        {}
      } else {
        stryCov_9fa48("50105");
        isHidden = await groups.isMemberOfAny(uid, data.groupsHideFrom);
      }
    }
    return stryMutAct_9fa48("50108") ? isVisible || !isHidden : stryMutAct_9fa48("50107") ? false : stryMutAct_9fa48("50106") ? true : (stryCov_9fa48("50106", "50107", "50108"), isVisible && (stryMutAct_9fa48("50109") ? isHidden : (stryCov_9fa48("50109"), !isHidden)));
  }
};
widgets.getWidgetDataForTemplates = async function (templates) {
  if (stryMutAct_9fa48("50110")) {
    {}
  } else {
    stryCov_9fa48("50110");
    const keys = templates.map(stryMutAct_9fa48("50111") ? () => undefined : (stryCov_9fa48("50111"), tpl => stryMutAct_9fa48("50112") ? `` : (stryCov_9fa48("50112"), `widgets:${tpl}`)));
    const data = await db.getObjects(keys);
    const returnData = {};
    templates.forEach((template, index) => {
      if (stryMutAct_9fa48("50113")) {
        {}
      } else {
        stryCov_9fa48("50113");
        returnData[template] = stryMutAct_9fa48("50116") ? returnData[template] && {} : stryMutAct_9fa48("50115") ? false : stryMutAct_9fa48("50114") ? true : (stryCov_9fa48("50114", "50115", "50116"), returnData[template] || {});
        const templateWidgetData = stryMutAct_9fa48("50119") ? data[index] && {} : stryMutAct_9fa48("50118") ? false : stryMutAct_9fa48("50117") ? true : (stryCov_9fa48("50117", "50118", "50119"), data[index] || {});
        const locations = Object.keys(templateWidgetData);
        locations.forEach(location => {
          if (stryMutAct_9fa48("50120")) {
            {}
          } else {
            stryCov_9fa48("50120");
            if (stryMutAct_9fa48("50123") ? templateWidgetData || templateWidgetData[location] : stryMutAct_9fa48("50122") ? false : stryMutAct_9fa48("50121") ? true : (stryCov_9fa48("50121", "50122", "50123"), templateWidgetData && templateWidgetData[location])) {
              if (stryMutAct_9fa48("50124")) {
                {}
              } else {
                stryCov_9fa48("50124");
                try {
                  if (stryMutAct_9fa48("50125")) {
                    {}
                  } else {
                    stryCov_9fa48("50125");
                    returnData[template][location] = parseWidgetData(templateWidgetData[location]);
                  }
                } catch (err) {
                  if (stryMutAct_9fa48("50126")) {
                    {}
                  } else {
                    stryCov_9fa48("50126");
                    winston.error(stryMutAct_9fa48("50127") ? `` : (stryCov_9fa48("50127"), `can not parse widget data. template:  ${template} location: ${location}`));
                    returnData[template][location] = stryMutAct_9fa48("50128") ? ["Stryker was here"] : (stryCov_9fa48("50128"), []);
                  }
                }
              }
            } else {
              if (stryMutAct_9fa48("50129")) {
                {}
              } else {
                stryCov_9fa48("50129");
                returnData[template][location] = stryMutAct_9fa48("50130") ? ["Stryker was here"] : (stryCov_9fa48("50130"), []);
              }
            }
          }
        });
      }
    });
    return returnData;
  }
};
widgets.getArea = async function (template, location) {
  if (stryMutAct_9fa48("50131")) {
    {}
  } else {
    stryCov_9fa48("50131");
    const result = await db.getObjectField(stryMutAct_9fa48("50132") ? `` : (stryCov_9fa48("50132"), `widgets:${template}`), location);
    if (stryMutAct_9fa48("50135") ? false : stryMutAct_9fa48("50134") ? true : stryMutAct_9fa48("50133") ? result : (stryCov_9fa48("50133", "50134", "50135"), !result)) {
      if (stryMutAct_9fa48("50136")) {
        {}
      } else {
        stryCov_9fa48("50136");
        return stryMutAct_9fa48("50137") ? ["Stryker was here"] : (stryCov_9fa48("50137"), []);
      }
    }
    return parseWidgetData(result);
  }
};
function parseWidgetData(data) {
  if (stryMutAct_9fa48("50138")) {
    {}
  } else {
    stryCov_9fa48("50138");
    const widgets = JSON.parse(data);
    widgets.forEach(widget => {
      if (stryMutAct_9fa48("50139")) {
        {}
      } else {
        stryCov_9fa48("50139");
        if (stryMutAct_9fa48("50141") ? false : stryMutAct_9fa48("50140") ? true : (stryCov_9fa48("50140", "50141"), widget)) {
          if (stryMutAct_9fa48("50142")) {
            {}
          } else {
            stryCov_9fa48("50142");
            widget.data.groups = stryMutAct_9fa48("50145") ? widget.data.groups && [] : stryMutAct_9fa48("50144") ? false : stryMutAct_9fa48("50143") ? true : (stryCov_9fa48("50143", "50144", "50145"), widget.data.groups || (stryMutAct_9fa48("50146") ? ["Stryker was here"] : (stryCov_9fa48("50146"), [])));
            if (stryMutAct_9fa48("50149") ? widget.data.groups || !Array.isArray(widget.data.groups) : stryMutAct_9fa48("50148") ? false : stryMutAct_9fa48("50147") ? true : (stryCov_9fa48("50147", "50148", "50149"), widget.data.groups && (stryMutAct_9fa48("50150") ? Array.isArray(widget.data.groups) : (stryCov_9fa48("50150"), !Array.isArray(widget.data.groups))))) {
              if (stryMutAct_9fa48("50151")) {
                {}
              } else {
                stryCov_9fa48("50151");
                widget.data.groups = stryMutAct_9fa48("50152") ? [] : (stryCov_9fa48("50152"), [widget.data.groups]);
              }
            }
            widget.data.groupsHideFrom = stryMutAct_9fa48("50155") ? widget.data.groupsHideFrom && [] : stryMutAct_9fa48("50154") ? false : stryMutAct_9fa48("50153") ? true : (stryCov_9fa48("50153", "50154", "50155"), widget.data.groupsHideFrom || (stryMutAct_9fa48("50156") ? ["Stryker was here"] : (stryCov_9fa48("50156"), [])));
            if (stryMutAct_9fa48("50159") ? widget.data.groupsHideFrom || !Array.isArray(widget.data.groupsHideFrom) : stryMutAct_9fa48("50158") ? false : stryMutAct_9fa48("50157") ? true : (stryCov_9fa48("50157", "50158", "50159"), widget.data.groupsHideFrom && (stryMutAct_9fa48("50160") ? Array.isArray(widget.data.groupsHideFrom) : (stryCov_9fa48("50160"), !Array.isArray(widget.data.groupsHideFrom))))) {
              if (stryMutAct_9fa48("50161")) {
                {}
              } else {
                stryCov_9fa48("50161");
                widget.data.groupsHideFrom = stryMutAct_9fa48("50162") ? [] : (stryCov_9fa48("50162"), [widget.data.groupsHideFrom]);
              }
            }
          }
        }
      }
    });
    return widgets;
  }
}
widgets.setArea = async function (area) {
  if (stryMutAct_9fa48("50163")) {
    {}
  } else {
    stryCov_9fa48("50163");
    if (stryMutAct_9fa48("50166") ? !area.location && !area.template : stryMutAct_9fa48("50165") ? false : stryMutAct_9fa48("50164") ? true : (stryCov_9fa48("50164", "50165", "50166"), (stryMutAct_9fa48("50167") ? area.location : (stryCov_9fa48("50167"), !area.location)) || (stryMutAct_9fa48("50168") ? area.template : (stryCov_9fa48("50168"), !area.template)))) {
      if (stryMutAct_9fa48("50169")) {
        {}
      } else {
        stryCov_9fa48("50169");
        throw new Error(stryMutAct_9fa48("50170") ? "" : (stryCov_9fa48("50170"), 'Missing location and template data'));
      }
    }
    await db.setObjectField(stryMutAct_9fa48("50171") ? `` : (stryCov_9fa48("50171"), `widgets:${area.template}`), area.location, JSON.stringify(area.widgets));
  }
};
widgets.setAreas = async function (areas) {
  if (stryMutAct_9fa48("50172")) {
    {}
  } else {
    stryCov_9fa48("50172");
    const templates = {};
    areas.forEach(area => {
      if (stryMutAct_9fa48("50173")) {
        {}
      } else {
        stryCov_9fa48("50173");
        if (stryMutAct_9fa48("50176") ? !area.location && !area.template : stryMutAct_9fa48("50175") ? false : stryMutAct_9fa48("50174") ? true : (stryCov_9fa48("50174", "50175", "50176"), (stryMutAct_9fa48("50177") ? area.location : (stryCov_9fa48("50177"), !area.location)) || (stryMutAct_9fa48("50178") ? area.template : (stryCov_9fa48("50178"), !area.template)))) {
          if (stryMutAct_9fa48("50179")) {
            {}
          } else {
            stryCov_9fa48("50179");
            throw new Error(stryMutAct_9fa48("50180") ? "" : (stryCov_9fa48("50180"), 'Missing location and template data'));
          }
        }
        templates[area.template] = stryMutAct_9fa48("50183") ? templates[area.template] && {} : stryMutAct_9fa48("50182") ? false : stryMutAct_9fa48("50181") ? true : (stryCov_9fa48("50181", "50182", "50183"), templates[area.template] || {});
        templates[area.template][area.location] = JSON.stringify(area.widgets);
      }
    });
    await db.setObjectBulk(Object.keys(templates).map(stryMutAct_9fa48("50184") ? () => undefined : (stryCov_9fa48("50184"), tpl => stryMutAct_9fa48("50185") ? [] : (stryCov_9fa48("50185"), [stryMutAct_9fa48("50186") ? `` : (stryCov_9fa48("50186"), `widgets:${tpl}`), templates[tpl]]))));
  }
};
widgets.reset = async function () {
  if (stryMutAct_9fa48("50187")) {
    {}
  } else {
    stryCov_9fa48("50187");
    const defaultAreas = stryMutAct_9fa48("50188") ? [] : (stryCov_9fa48("50188"), [stryMutAct_9fa48("50189") ? {} : (stryCov_9fa48("50189"), {
      name: stryMutAct_9fa48("50190") ? "" : (stryCov_9fa48("50190"), 'Draft Zone'),
      template: stryMutAct_9fa48("50191") ? "" : (stryCov_9fa48("50191"), 'global'),
      location: stryMutAct_9fa48("50192") ? "" : (stryCov_9fa48("50192"), 'header')
    }), stryMutAct_9fa48("50193") ? {} : (stryCov_9fa48("50193"), {
      name: stryMutAct_9fa48("50194") ? "" : (stryCov_9fa48("50194"), 'Draft Zone'),
      template: stryMutAct_9fa48("50195") ? "" : (stryCov_9fa48("50195"), 'global'),
      location: stryMutAct_9fa48("50196") ? "" : (stryCov_9fa48("50196"), 'footer')
    }), stryMutAct_9fa48("50197") ? {} : (stryCov_9fa48("50197"), {
      name: stryMutAct_9fa48("50198") ? "" : (stryCov_9fa48("50198"), 'Draft Zone'),
      template: stryMutAct_9fa48("50199") ? "" : (stryCov_9fa48("50199"), 'global'),
      location: stryMutAct_9fa48("50200") ? "" : (stryCov_9fa48("50200"), 'sidebar')
    })]);
    const [areas, drafts] = await Promise.all(stryMutAct_9fa48("50201") ? [] : (stryCov_9fa48("50201"), [plugins.hooks.fire(stryMutAct_9fa48("50202") ? "" : (stryCov_9fa48("50202"), 'filter:widgets.getAreas'), defaultAreas), widgets.getArea(stryMutAct_9fa48("50203") ? "" : (stryCov_9fa48("50203"), 'global'), stryMutAct_9fa48("50204") ? "" : (stryCov_9fa48("50204"), 'drafts'))]));
    let saveDrafts = stryMutAct_9fa48("50207") ? drafts && [] : stryMutAct_9fa48("50206") ? false : stryMutAct_9fa48("50205") ? true : (stryCov_9fa48("50205", "50206", "50207"), drafts || (stryMutAct_9fa48("50208") ? ["Stryker was here"] : (stryCov_9fa48("50208"), [])));
    for (const area of areas) {
      if (stryMutAct_9fa48("50209")) {
        {}
      } else {
        stryCov_9fa48("50209");
        /* eslint-disable no-await-in-loop */
        const areaData = await widgets.getArea(area.template, area.location);
        saveDrafts = saveDrafts.concat(areaData);
        area.widgets = stryMutAct_9fa48("50210") ? ["Stryker was here"] : (stryCov_9fa48("50210"), []);
        await widgets.setArea(area);
      }
    }
    await widgets.setArea(stryMutAct_9fa48("50211") ? {} : (stryCov_9fa48("50211"), {
      template: stryMutAct_9fa48("50212") ? "" : (stryCov_9fa48("50212"), 'global'),
      location: stryMutAct_9fa48("50213") ? "" : (stryCov_9fa48("50213"), 'drafts'),
      widgets: saveDrafts
    }));
  }
};
widgets.resetTemplate = async function (template) {
  if (stryMutAct_9fa48("50214")) {
    {}
  } else {
    stryCov_9fa48("50214");
    const area = await db.getObject(stryMutAct_9fa48("50215") ? `` : (stryCov_9fa48("50215"), `widgets:${template}.tpl`));
    if (stryMutAct_9fa48("50217") ? false : stryMutAct_9fa48("50216") ? true : (stryCov_9fa48("50216", "50217"), area)) {
      if (stryMutAct_9fa48("50218")) {
        {}
      } else {
        stryCov_9fa48("50218");
        const toBeDrafted = _.flatMap(Object.values(area), stryMutAct_9fa48("50219") ? () => undefined : (stryCov_9fa48("50219"), value => JSON.parse(value)));
        await db.delete(stryMutAct_9fa48("50220") ? `` : (stryCov_9fa48("50220"), `widgets:${template}.tpl`));
        let draftWidgets = await db.getObjectField(stryMutAct_9fa48("50221") ? "" : (stryCov_9fa48("50221"), 'widgets:global'), stryMutAct_9fa48("50222") ? "" : (stryCov_9fa48("50222"), 'drafts'));
        draftWidgets = JSON.parse(draftWidgets).concat(toBeDrafted);
        await db.setObjectField(stryMutAct_9fa48("50223") ? "" : (stryCov_9fa48("50223"), 'widgets:global'), stryMutAct_9fa48("50224") ? "" : (stryCov_9fa48("50224"), 'drafts'), JSON.stringify(draftWidgets));
      }
    }
  }
};
widgets.resetTemplates = async function (templates) {
  if (stryMutAct_9fa48("50225")) {
    {}
  } else {
    stryCov_9fa48("50225");
    for (const template of templates) {
      if (stryMutAct_9fa48("50226")) {
        {}
      } else {
        stryCov_9fa48("50226");
        /* eslint-disable no-await-in-loop */
        await widgets.resetTemplate(template);
      }
    }
  }
};
require('../promisify')(widgets);