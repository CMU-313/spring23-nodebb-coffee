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
const nconf = require('nconf');
const validator = require('validator');
const plugins = require('../plugins');
const meta = require('../meta');
const translator = require('../translator');
const widgets = require('../widgets');
const utils = require('../utils');
const helpers = require('./helpers');
const relative_path = nconf.get(stryMutAct_9fa48("26094") ? "" : (stryCov_9fa48("26094"), 'relative_path'));
module.exports = function (middleware) {
  if (stryMutAct_9fa48("26095")) {
    {}
  } else {
    stryCov_9fa48("26095");
    middleware.processRender = function processRender(req, res, next) {
      if (stryMutAct_9fa48("26096")) {
        {}
      } else {
        stryCov_9fa48("26096");
        // res.render post-processing, modified from here: https://gist.github.com/mrlannigan/5051687
        const {
          render
        } = res;
        res.render = async function renderOverride(template, options, fn) {
          if (stryMutAct_9fa48("26097")) {
            {}
          } else {
            stryCov_9fa48("26097");
            const self = this;
            const {
              req
            } = this;
            async function renderMethod(template, options, fn) {
              if (stryMutAct_9fa48("26098")) {
                {}
              } else {
                stryCov_9fa48("26098");
                options = stryMutAct_9fa48("26101") ? options && {} : stryMutAct_9fa48("26100") ? false : stryMutAct_9fa48("26099") ? true : (stryCov_9fa48("26099", "26100", "26101"), options || {});
                if (stryMutAct_9fa48("26104") ? typeof options !== 'function' : stryMutAct_9fa48("26103") ? false : stryMutAct_9fa48("26102") ? true : (stryCov_9fa48("26102", "26103", "26104"), typeof options === (stryMutAct_9fa48("26105") ? "" : (stryCov_9fa48("26105"), 'function')))) {
                  if (stryMutAct_9fa48("26106")) {
                    {}
                  } else {
                    stryCov_9fa48("26106");
                    fn = options;
                    options = {};
                  }
                }
                options.loggedIn = stryMutAct_9fa48("26110") ? req.uid <= 0 : stryMutAct_9fa48("26109") ? req.uid >= 0 : stryMutAct_9fa48("26108") ? false : stryMutAct_9fa48("26107") ? true : (stryCov_9fa48("26107", "26108", "26109", "26110"), req.uid > 0);
                options.relative_path = relative_path;
                options.template = stryMutAct_9fa48("26111") ? {} : (stryCov_9fa48("26111"), {
                  name: template,
                  [template]: stryMutAct_9fa48("26112") ? false : (stryCov_9fa48("26112"), true)
                });
                options.url = stryMutAct_9fa48("26113") ? req.baseUrl - req.path.replace(/^\/api/, '') : (stryCov_9fa48("26113"), req.baseUrl + req.path.replace(stryMutAct_9fa48("26114") ? /\/api/ : (stryCov_9fa48("26114"), /^\/api/), stryMutAct_9fa48("26115") ? "Stryker was here!" : (stryCov_9fa48("26115"), '')));
                options.bodyClass = helpers.buildBodyClass(req, res, options);
                if (stryMutAct_9fa48("26117") ? false : stryMutAct_9fa48("26116") ? true : (stryCov_9fa48("26116", "26117"), req.loggedIn)) {
                  if (stryMutAct_9fa48("26118")) {
                    {}
                  } else {
                    stryCov_9fa48("26118");
                    res.set(stryMutAct_9fa48("26119") ? "" : (stryCov_9fa48("26119"), 'cache-control'), stryMutAct_9fa48("26120") ? "" : (stryCov_9fa48("26120"), 'private'));
                  }
                }
                const buildResult = await plugins.hooks.fire(stryMutAct_9fa48("26121") ? `` : (stryCov_9fa48("26121"), `filter:${template}.build`), stryMutAct_9fa48("26122") ? {} : (stryCov_9fa48("26122"), {
                  req: req,
                  res: res,
                  templateData: options
                }));
                if (stryMutAct_9fa48("26124") ? false : stryMutAct_9fa48("26123") ? true : (stryCov_9fa48("26123", "26124"), res.headersSent)) {
                  if (stryMutAct_9fa48("26125")) {
                    {}
                  } else {
                    stryCov_9fa48("26125");
                    return;
                  }
                }
                const templateToRender = stryMutAct_9fa48("26128") ? buildResult.templateData.templateToRender && template : stryMutAct_9fa48("26127") ? false : stryMutAct_9fa48("26126") ? true : (stryCov_9fa48("26126", "26127", "26128"), buildResult.templateData.templateToRender || template);
                const renderResult = await plugins.hooks.fire(stryMutAct_9fa48("26129") ? "" : (stryCov_9fa48("26129"), 'filter:middleware.render'), stryMutAct_9fa48("26130") ? {} : (stryCov_9fa48("26130"), {
                  req: req,
                  res: res,
                  templateData: buildResult.templateData
                }));
                if (stryMutAct_9fa48("26132") ? false : stryMutAct_9fa48("26131") ? true : (stryCov_9fa48("26131", "26132"), res.headersSent)) {
                  if (stryMutAct_9fa48("26133")) {
                    {}
                  } else {
                    stryCov_9fa48("26133");
                    return;
                  }
                }
                options = renderResult.templateData;
                options._header = stryMutAct_9fa48("26134") ? {} : (stryCov_9fa48("26134"), {
                  tags: await meta.tags.parse(req, renderResult, res.locals.metaTags, res.locals.linkTags)
                });
                options.widgets = await widgets.render(req.uid, stryMutAct_9fa48("26135") ? {} : (stryCov_9fa48("26135"), {
                  template: stryMutAct_9fa48("26136") ? `` : (stryCov_9fa48("26136"), `${template}.tpl`),
                  url: options.url,
                  templateData: options,
                  req: req,
                  res: res
                }));
                res.locals.template = template;
                options._locals = undefined;
                if (stryMutAct_9fa48("26138") ? false : stryMutAct_9fa48("26137") ? true : (stryCov_9fa48("26137", "26138"), res.locals.isAPI)) {
                  if (stryMutAct_9fa48("26139")) {
                    {}
                  } else {
                    stryCov_9fa48("26139");
                    if (stryMutAct_9fa48("26142") ? req.route || req.route.path === '/api/' : stryMutAct_9fa48("26141") ? false : stryMutAct_9fa48("26140") ? true : (stryCov_9fa48("26140", "26141", "26142"), req.route && (stryMutAct_9fa48("26144") ? req.route.path !== '/api/' : stryMutAct_9fa48("26143") ? true : (stryCov_9fa48("26143", "26144"), req.route.path === (stryMutAct_9fa48("26145") ? "" : (stryCov_9fa48("26145"), '/api/')))))) {
                      if (stryMutAct_9fa48("26146")) {
                        {}
                      } else {
                        stryCov_9fa48("26146");
                        options.title = stryMutAct_9fa48("26147") ? "" : (stryCov_9fa48("26147"), '[[pages:home]]');
                      }
                    }
                    req.app.set(stryMutAct_9fa48("26148") ? "" : (stryCov_9fa48("26148"), 'json spaces'), (stryMutAct_9fa48("26151") ? global.env === 'development' && req.query.pretty : stryMutAct_9fa48("26150") ? false : stryMutAct_9fa48("26149") ? true : (stryCov_9fa48("26149", "26150", "26151"), (stryMutAct_9fa48("26153") ? global.env !== 'development' : stryMutAct_9fa48("26152") ? false : (stryCov_9fa48("26152", "26153"), global.env === (stryMutAct_9fa48("26154") ? "" : (stryCov_9fa48("26154"), 'development')))) || req.query.pretty)) ? 4 : 0);
                    return res.json(options);
                  }
                }
                const optionsString = JSON.stringify(options).replace(/<\//g, stryMutAct_9fa48("26155") ? "" : (stryCov_9fa48("26155"), '<\\/'));
                const results = await utils.promiseParallel(stryMutAct_9fa48("26156") ? {} : (stryCov_9fa48("26156"), {
                  header: renderHeaderFooter(stryMutAct_9fa48("26157") ? "" : (stryCov_9fa48("26157"), 'renderHeader'), req, res, options),
                  content: renderContent(render, templateToRender, req, res, options),
                  footer: renderHeaderFooter(stryMutAct_9fa48("26158") ? "" : (stryCov_9fa48("26158"), 'renderFooter'), req, res, options)
                }));
                const str = stryMutAct_9fa48("26159") ? `` : (stryCov_9fa48("26159"), `${stryMutAct_9fa48("26160") ? results.header + (res.locals.postHeader || '') - results.content : (stryCov_9fa48("26160"), (stryMutAct_9fa48("26161") ? results.header - (res.locals.postHeader || '') : (stryCov_9fa48("26161"), results.header + (stryMutAct_9fa48("26164") ? res.locals.postHeader && '' : stryMutAct_9fa48("26163") ? false : stryMutAct_9fa48("26162") ? true : (stryCov_9fa48("26162", "26163", "26164"), res.locals.postHeader || (stryMutAct_9fa48("26165") ? "Stryker was here!" : (stryCov_9fa48("26165"), '')))))) + results.content)}<script id="ajaxify-data" type="application/json">${optionsString}</script>${stryMutAct_9fa48("26168") ? res.locals.preFooter && '' : stryMutAct_9fa48("26167") ? false : stryMutAct_9fa48("26166") ? true : (stryCov_9fa48("26166", "26167", "26168"), res.locals.preFooter || (stryMutAct_9fa48("26169") ? "Stryker was here!" : (stryCov_9fa48("26169"), '')))}${results.footer}`);
                if (stryMutAct_9fa48("26172") ? typeof fn === 'function' : stryMutAct_9fa48("26171") ? false : stryMutAct_9fa48("26170") ? true : (stryCov_9fa48("26170", "26171", "26172"), typeof fn !== (stryMutAct_9fa48("26173") ? "" : (stryCov_9fa48("26173"), 'function')))) {
                  if (stryMutAct_9fa48("26174")) {
                    {}
                  } else {
                    stryCov_9fa48("26174");
                    self.send(str);
                  }
                } else {
                  if (stryMutAct_9fa48("26175")) {
                    {}
                  } else {
                    stryCov_9fa48("26175");
                    fn(null, str);
                  }
                }
              }
            }
            try {
              if (stryMutAct_9fa48("26176")) {
                {}
              } else {
                stryCov_9fa48("26176");
                await renderMethod(template, options, fn);
              }
            } catch (err) {
              if (stryMutAct_9fa48("26177")) {
                {}
              } else {
                stryCov_9fa48("26177");
                next(err);
              }
            }
          }
        };
        next();
      }
    };
    async function renderContent(render, tpl, req, res, options) {
      if (stryMutAct_9fa48("26178")) {
        {}
      } else {
        stryCov_9fa48("26178");
        return new Promise((resolve, reject) => {
          if (stryMutAct_9fa48("26179")) {
            {}
          } else {
            stryCov_9fa48("26179");
            render.call(res, tpl, options, async (err, str) => {
              if (stryMutAct_9fa48("26180")) {
                {}
              } else {
                stryCov_9fa48("26180");
                if (stryMutAct_9fa48("26182") ? false : stryMutAct_9fa48("26181") ? true : (stryCov_9fa48("26181", "26182"), err)) reject(err);else resolve(await translate(str, getLang(req, res)));
              }
            });
          }
        });
      }
    }
    async function renderHeaderFooter(method, req, res, options) {
      if (stryMutAct_9fa48("26183")) {
        {}
      } else {
        stryCov_9fa48("26183");
        let str = stryMutAct_9fa48("26184") ? "Stryker was here!" : (stryCov_9fa48("26184"), '');
        if (stryMutAct_9fa48("26186") ? false : stryMutAct_9fa48("26185") ? true : (stryCov_9fa48("26185", "26186"), res.locals.renderHeader)) {
          if (stryMutAct_9fa48("26187")) {
            {}
          } else {
            stryCov_9fa48("26187");
            str = await middleware[method](req, res, options);
          }
        } else if (stryMutAct_9fa48("26189") ? false : stryMutAct_9fa48("26188") ? true : (stryCov_9fa48("26188", "26189"), res.locals.renderAdminHeader)) {
          if (stryMutAct_9fa48("26190")) {
            {}
          } else {
            stryCov_9fa48("26190");
            str = await middleware.admin[method](req, res, options);
          }
        } else {
          if (stryMutAct_9fa48("26191")) {
            {}
          } else {
            stryCov_9fa48("26191");
            str = stryMutAct_9fa48("26192") ? "Stryker was here!" : (stryCov_9fa48("26192"), '');
          }
        }
        return await translate(str, getLang(req, res));
      }
    }
    function getLang(req, res) {
      if (stryMutAct_9fa48("26193")) {
        {}
      } else {
        stryCov_9fa48("26193");
        let language = stryMutAct_9fa48("26196") ? res.locals.config && res.locals.config.userLang && 'en-GB' : stryMutAct_9fa48("26195") ? false : stryMutAct_9fa48("26194") ? true : (stryCov_9fa48("26194", "26195", "26196"), (stryMutAct_9fa48("26198") ? res.locals.config || res.locals.config.userLang : stryMutAct_9fa48("26197") ? false : (stryCov_9fa48("26197", "26198"), res.locals.config && res.locals.config.userLang)) || (stryMutAct_9fa48("26199") ? "" : (stryCov_9fa48("26199"), 'en-GB')));
        if (stryMutAct_9fa48("26201") ? false : stryMutAct_9fa48("26200") ? true : (stryCov_9fa48("26200", "26201"), res.locals.renderAdminHeader)) {
          if (stryMutAct_9fa48("26202")) {
            {}
          } else {
            stryCov_9fa48("26202");
            language = stryMutAct_9fa48("26205") ? res.locals.config && res.locals.config.acpLang && 'en-GB' : stryMutAct_9fa48("26204") ? false : stryMutAct_9fa48("26203") ? true : (stryCov_9fa48("26203", "26204", "26205"), (stryMutAct_9fa48("26207") ? res.locals.config || res.locals.config.acpLang : stryMutAct_9fa48("26206") ? false : (stryCov_9fa48("26206", "26207"), res.locals.config && res.locals.config.acpLang)) || (stryMutAct_9fa48("26208") ? "" : (stryCov_9fa48("26208"), 'en-GB')));
          }
        }
        return req.query.lang ? validator.escape(String(req.query.lang)) : language;
      }
    }
    async function translate(str, language) {
      if (stryMutAct_9fa48("26209")) {
        {}
      } else {
        stryCov_9fa48("26209");
        const translated = await translator.translate(str, language);
        return translator.unescape(translated);
      }
    }
  }
};