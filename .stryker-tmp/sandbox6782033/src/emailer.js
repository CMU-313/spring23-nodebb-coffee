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
const nconf = require('nconf');
const Benchpress = require('benchpressjs');
const nodemailer = require('nodemailer');
const wellKnownServices = require('nodemailer/lib/well-known/services');
const {
  htmlToText
} = require('html-to-text');
const url = require('url');
const path = require('path');
const fs = require('fs');
const _ = require('lodash');
const jwt = require('jsonwebtoken');
const User = require('./user');
const Plugins = require('./plugins');
const meta = require('./meta');
const translator = require('./translator');
const pubsub = require('./pubsub');
const file = require('./file');
const viewsDir = nconf.get(stryMutAct_9fa48("18123") ? "" : (stryCov_9fa48("18123"), 'views_dir'));
const Emailer = module.exports;
let prevConfig;
let app;
Emailer.fallbackNotFound = stryMutAct_9fa48("18124") ? true : (stryCov_9fa48("18124"), false);
Emailer.transports = stryMutAct_9fa48("18125") ? {} : (stryCov_9fa48("18125"), {
  sendmail: nodemailer.createTransport(stryMutAct_9fa48("18126") ? {} : (stryCov_9fa48("18126"), {
    sendmail: stryMutAct_9fa48("18127") ? false : (stryCov_9fa48("18127"), true),
    newline: stryMutAct_9fa48("18128") ? "" : (stryCov_9fa48("18128"), 'unix')
  })),
  smtp: undefined
});
Emailer.listServices = stryMutAct_9fa48("18129") ? () => undefined : (stryCov_9fa48("18129"), () => Object.keys(wellKnownServices));
Emailer._defaultPayload = {};
const smtpSettingsChanged = config => {
  if (stryMutAct_9fa48("18130")) {
    {}
  } else {
    stryCov_9fa48("18130");
    const settings = stryMutAct_9fa48("18131") ? [] : (stryCov_9fa48("18131"), [stryMutAct_9fa48("18132") ? "" : (stryCov_9fa48("18132"), 'email:smtpTransport:enabled'), stryMutAct_9fa48("18133") ? "" : (stryCov_9fa48("18133"), 'email:smtpTransport:pool'), stryMutAct_9fa48("18134") ? "" : (stryCov_9fa48("18134"), 'email:smtpTransport:user'), stryMutAct_9fa48("18135") ? "" : (stryCov_9fa48("18135"), 'email:smtpTransport:pass'), stryMutAct_9fa48("18136") ? "" : (stryCov_9fa48("18136"), 'email:smtpTransport:service'), stryMutAct_9fa48("18137") ? "" : (stryCov_9fa48("18137"), 'email:smtpTransport:port'), stryMutAct_9fa48("18138") ? "" : (stryCov_9fa48("18138"), 'email:smtpTransport:host'), stryMutAct_9fa48("18139") ? "" : (stryCov_9fa48("18139"), 'email:smtpTransport:security')]);
    // config only has these properties if settings are saved on /admin/settings/email
    return stryMutAct_9fa48("18140") ? settings.every(key => config.hasOwnProperty(key) && config[key] !== prevConfig[key]) : (stryCov_9fa48("18140"), settings.some(stryMutAct_9fa48("18141") ? () => undefined : (stryCov_9fa48("18141"), key => stryMutAct_9fa48("18144") ? config.hasOwnProperty(key) || config[key] !== prevConfig[key] : stryMutAct_9fa48("18143") ? false : stryMutAct_9fa48("18142") ? true : (stryCov_9fa48("18142", "18143", "18144"), config.hasOwnProperty(key) && (stryMutAct_9fa48("18146") ? config[key] === prevConfig[key] : stryMutAct_9fa48("18145") ? true : (stryCov_9fa48("18145", "18146"), config[key] !== prevConfig[key]))))));
  }
};
const getHostname = () => {
  if (stryMutAct_9fa48("18147")) {
    {}
  } else {
    stryCov_9fa48("18147");
    const configUrl = nconf.get(stryMutAct_9fa48("18148") ? "" : (stryCov_9fa48("18148"), 'url'));
    const parsed = url.parse(configUrl);
    return parsed.hostname;
  }
};
const buildCustomTemplates = async config => {
  if (stryMutAct_9fa48("18149")) {
    {}
  } else {
    stryCov_9fa48("18149");
    try {
      if (stryMutAct_9fa48("18150")) {
        {}
      } else {
        stryCov_9fa48("18150");
        // If the new config contains any email override values, re-compile those templates
        const toBuild = stryMutAct_9fa48("18151") ? Object.keys(config).map(key => key.split(':')[2]) : (stryCov_9fa48("18151"), Object.keys(config).filter(stryMutAct_9fa48("18152") ? () => undefined : (stryCov_9fa48("18152"), prop => stryMutAct_9fa48("18153") ? prop.endsWith('email:custom:') : (stryCov_9fa48("18153"), prop.startsWith(stryMutAct_9fa48("18154") ? "" : (stryCov_9fa48("18154"), 'email:custom:'))))).map(stryMutAct_9fa48("18155") ? () => undefined : (stryCov_9fa48("18155"), key => key.split(stryMutAct_9fa48("18156") ? "" : (stryCov_9fa48("18156"), ':'))[2])));
        if (stryMutAct_9fa48("18159") ? false : stryMutAct_9fa48("18158") ? true : stryMutAct_9fa48("18157") ? toBuild.length : (stryCov_9fa48("18157", "18158", "18159"), !toBuild.length)) {
          if (stryMutAct_9fa48("18160")) {
            {}
          } else {
            stryCov_9fa48("18160");
            return;
          }
        }
        const [templates, allPaths] = await Promise.all(stryMutAct_9fa48("18161") ? [] : (stryCov_9fa48("18161"), [Emailer.getTemplates(config), file.walk(viewsDir)]));
        const templatesToBuild = stryMutAct_9fa48("18162") ? templates : (stryCov_9fa48("18162"), templates.filter(stryMutAct_9fa48("18163") ? () => undefined : (stryCov_9fa48("18163"), template => toBuild.includes(template.path))));
        const paths = _.fromPairs(allPaths.map(p => {
          if (stryMutAct_9fa48("18164")) {
            {}
          } else {
            stryCov_9fa48("18164");
            const relative = path.relative(viewsDir, p).replace(/\\/g, stryMutAct_9fa48("18165") ? "" : (stryCov_9fa48("18165"), '/'));
            return stryMutAct_9fa48("18166") ? [] : (stryCov_9fa48("18166"), [relative, p]);
          }
        }));
        await Promise.all(templatesToBuild.map(async template => {
          if (stryMutAct_9fa48("18167")) {
            {}
          } else {
            stryCov_9fa48("18167");
            const source = await meta.templates.processImports(paths, template.path, template.text);
            const compiled = await Benchpress.precompile(source, stryMutAct_9fa48("18168") ? {} : (stryCov_9fa48("18168"), {
              filename: template.path
            }));
            await fs.promises.writeFile(template.fullpath.replace(stryMutAct_9fa48("18169") ? /\.tpl/ : (stryCov_9fa48("18169"), /\.tpl$/), stryMutAct_9fa48("18170") ? "" : (stryCov_9fa48("18170"), '.js')), compiled);
          }
        }));
        Benchpress.flush();
        winston.verbose(stryMutAct_9fa48("18171") ? "" : (stryCov_9fa48("18171"), '[emailer] Built custom email templates'));
      }
    } catch (err) {
      if (stryMutAct_9fa48("18172")) {
        {}
      } else {
        stryCov_9fa48("18172");
        winston.error(stryMutAct_9fa48("18173") ? `` : (stryCov_9fa48("18173"), `[emailer] Failed to build custom email templates\n${err.stack}`));
      }
    }
  }
};
Emailer.getTemplates = async config => {
  if (stryMutAct_9fa48("18174")) {
    {}
  } else {
    stryCov_9fa48("18174");
    const emailsPath = path.join(viewsDir, stryMutAct_9fa48("18175") ? "" : (stryCov_9fa48("18175"), 'emails'));
    let emails = await file.walk(emailsPath);
    emails = stryMutAct_9fa48("18176") ? emails : (stryCov_9fa48("18176"), emails.filter(stryMutAct_9fa48("18177") ? () => undefined : (stryCov_9fa48("18177"), email => stryMutAct_9fa48("18178") ? email.endsWith('.js') : (stryCov_9fa48("18178"), !(stryMutAct_9fa48("18179") ? email.startsWith('.js') : (stryCov_9fa48("18179"), email.endsWith(stryMutAct_9fa48("18180") ? "" : (stryCov_9fa48("18180"), '.js'))))))));
    const templates = await Promise.all(emails.map(async email => {
      if (stryMutAct_9fa48("18181")) {
        {}
      } else {
        stryCov_9fa48("18181");
        const path = stryMutAct_9fa48("18182") ? email.replace(emailsPath, '').replace('.tpl', '') : (stryCov_9fa48("18182"), email.replace(emailsPath, stryMutAct_9fa48("18183") ? "Stryker was here!" : (stryCov_9fa48("18183"), '')).slice(1).replace(stryMutAct_9fa48("18184") ? "" : (stryCov_9fa48("18184"), '.tpl'), stryMutAct_9fa48("18185") ? "Stryker was here!" : (stryCov_9fa48("18185"), '')));
        const original = await fs.promises.readFile(email, stryMutAct_9fa48("18186") ? "" : (stryCov_9fa48("18186"), 'utf8'));
        return stryMutAct_9fa48("18187") ? {} : (stryCov_9fa48("18187"), {
          path: path,
          fullpath: email,
          text: stryMutAct_9fa48("18190") ? config[`email:custom:${path}`] && original : stryMutAct_9fa48("18189") ? false : stryMutAct_9fa48("18188") ? true : (stryCov_9fa48("18188", "18189", "18190"), config[stryMutAct_9fa48("18191") ? `` : (stryCov_9fa48("18191"), `email:custom:${path}`)] || original),
          original: original,
          isCustom: stryMutAct_9fa48("18192") ? !config[`email:custom:${path}`] : (stryCov_9fa48("18192"), !(stryMutAct_9fa48("18193") ? config[`email:custom:${path}`] : (stryCov_9fa48("18193"), !config[stryMutAct_9fa48("18194") ? `` : (stryCov_9fa48("18194"), `email:custom:${path}`)])))
        });
      }
    }));
    return templates;
  }
};
Emailer.setupFallbackTransport = config => {
  if (stryMutAct_9fa48("18195")) {
    {}
  } else {
    stryCov_9fa48("18195");
    winston.verbose(stryMutAct_9fa48("18196") ? "" : (stryCov_9fa48("18196"), '[emailer] Setting up fallback transport'));
    // Enable SMTP transport if enabled in ACP
    if (stryMutAct_9fa48("18199") ? parseInt(config['email:smtpTransport:enabled'], 10) !== 1 : stryMutAct_9fa48("18198") ? false : stryMutAct_9fa48("18197") ? true : (stryCov_9fa48("18197", "18198", "18199"), parseInt(config[stryMutAct_9fa48("18200") ? "" : (stryCov_9fa48("18200"), 'email:smtpTransport:enabled')], 10) === 1)) {
      if (stryMutAct_9fa48("18201")) {
        {}
      } else {
        stryCov_9fa48("18201");
        const smtpOptions = stryMutAct_9fa48("18202") ? {} : (stryCov_9fa48("18202"), {
          name: getHostname(),
          pool: config[stryMutAct_9fa48("18203") ? "" : (stryCov_9fa48("18203"), 'email:smtpTransport:pool')]
        });
        if (stryMutAct_9fa48("18206") ? config['email:smtpTransport:user'] && config['email:smtpTransport:pass'] : stryMutAct_9fa48("18205") ? false : stryMutAct_9fa48("18204") ? true : (stryCov_9fa48("18204", "18205", "18206"), config[stryMutAct_9fa48("18207") ? "" : (stryCov_9fa48("18207"), 'email:smtpTransport:user')] || config[stryMutAct_9fa48("18208") ? "" : (stryCov_9fa48("18208"), 'email:smtpTransport:pass')])) {
          if (stryMutAct_9fa48("18209")) {
            {}
          } else {
            stryCov_9fa48("18209");
            smtpOptions.auth = stryMutAct_9fa48("18210") ? {} : (stryCov_9fa48("18210"), {
              user: config[stryMutAct_9fa48("18211") ? "" : (stryCov_9fa48("18211"), 'email:smtpTransport:user')],
              pass: config[stryMutAct_9fa48("18212") ? "" : (stryCov_9fa48("18212"), 'email:smtpTransport:pass')]
            });
          }
        }
        if (stryMutAct_9fa48("18215") ? config['email:smtpTransport:service'] !== 'nodebb-custom-smtp' : stryMutAct_9fa48("18214") ? false : stryMutAct_9fa48("18213") ? true : (stryCov_9fa48("18213", "18214", "18215"), config[stryMutAct_9fa48("18216") ? "" : (stryCov_9fa48("18216"), 'email:smtpTransport:service')] === (stryMutAct_9fa48("18217") ? "" : (stryCov_9fa48("18217"), 'nodebb-custom-smtp')))) {
          if (stryMutAct_9fa48("18218")) {
            {}
          } else {
            stryCov_9fa48("18218");
            smtpOptions.port = config[stryMutAct_9fa48("18219") ? "" : (stryCov_9fa48("18219"), 'email:smtpTransport:port')];
            smtpOptions.host = config[stryMutAct_9fa48("18220") ? "" : (stryCov_9fa48("18220"), 'email:smtpTransport:host')];
            if (stryMutAct_9fa48("18223") ? config['email:smtpTransport:security'] !== 'NONE' : stryMutAct_9fa48("18222") ? false : stryMutAct_9fa48("18221") ? true : (stryCov_9fa48("18221", "18222", "18223"), config[stryMutAct_9fa48("18224") ? "" : (stryCov_9fa48("18224"), 'email:smtpTransport:security')] === (stryMutAct_9fa48("18225") ? "" : (stryCov_9fa48("18225"), 'NONE')))) {
              if (stryMutAct_9fa48("18226")) {
                {}
              } else {
                stryCov_9fa48("18226");
                smtpOptions.secure = stryMutAct_9fa48("18227") ? true : (stryCov_9fa48("18227"), false);
                smtpOptions.requireTLS = stryMutAct_9fa48("18228") ? true : (stryCov_9fa48("18228"), false);
                smtpOptions.ignoreTLS = stryMutAct_9fa48("18229") ? false : (stryCov_9fa48("18229"), true);
              }
            } else if (stryMutAct_9fa48("18232") ? config['email:smtpTransport:security'] !== 'STARTTLS' : stryMutAct_9fa48("18231") ? false : stryMutAct_9fa48("18230") ? true : (stryCov_9fa48("18230", "18231", "18232"), config[stryMutAct_9fa48("18233") ? "" : (stryCov_9fa48("18233"), 'email:smtpTransport:security')] === (stryMutAct_9fa48("18234") ? "" : (stryCov_9fa48("18234"), 'STARTTLS')))) {
              if (stryMutAct_9fa48("18235")) {
                {}
              } else {
                stryCov_9fa48("18235");
                smtpOptions.secure = stryMutAct_9fa48("18236") ? true : (stryCov_9fa48("18236"), false);
                smtpOptions.requireTLS = stryMutAct_9fa48("18237") ? false : (stryCov_9fa48("18237"), true);
                smtpOptions.ignoreTLS = stryMutAct_9fa48("18238") ? true : (stryCov_9fa48("18238"), false);
              }
            } else {
              if (stryMutAct_9fa48("18239")) {
                {}
              } else {
                stryCov_9fa48("18239");
                // meta.config['email:smtpTransport:security'] === 'ENCRYPTED' or undefined
                smtpOptions.secure = stryMutAct_9fa48("18240") ? false : (stryCov_9fa48("18240"), true);
                smtpOptions.requireTLS = stryMutAct_9fa48("18241") ? false : (stryCov_9fa48("18241"), true);
                smtpOptions.ignoreTLS = stryMutAct_9fa48("18242") ? true : (stryCov_9fa48("18242"), false);
              }
            }
          }
        } else {
          if (stryMutAct_9fa48("18243")) {
            {}
          } else {
            stryCov_9fa48("18243");
            smtpOptions.service = String(config[stryMutAct_9fa48("18244") ? "" : (stryCov_9fa48("18244"), 'email:smtpTransport:service')]);
          }
        }
        Emailer.transports.smtp = nodemailer.createTransport(smtpOptions);
        Emailer.fallbackTransport = Emailer.transports.smtp;
      }
    } else {
      if (stryMutAct_9fa48("18245")) {
        {}
      } else {
        stryCov_9fa48("18245");
        Emailer.fallbackTransport = Emailer.transports.sendmail;
      }
    }
  }
};
Emailer.registerApp = expressApp => {
  if (stryMutAct_9fa48("18246")) {
    {}
  } else {
    stryCov_9fa48("18246");
    app = expressApp;
    let logo = null;
    if (stryMutAct_9fa48("18248") ? false : stryMutAct_9fa48("18247") ? true : (stryCov_9fa48("18247", "18248"), meta.config.hasOwnProperty(stryMutAct_9fa48("18249") ? "" : (stryCov_9fa48("18249"), 'brand:emailLogo')))) {
      if (stryMutAct_9fa48("18250")) {
        {}
      } else {
        stryCov_9fa48("18250");
        logo = stryMutAct_9fa48("18251") ? (!meta.config['brand:emailLogo'].startsWith('http') ? nconf.get('url') : '') - meta.config['brand:emailLogo'] : (stryCov_9fa48("18251"), ((stryMutAct_9fa48("18252") ? meta.config['brand:emailLogo'].startsWith('http') : (stryCov_9fa48("18252"), !(stryMutAct_9fa48("18253") ? meta.config['brand:emailLogo'].endsWith('http') : (stryCov_9fa48("18253"), meta.config[stryMutAct_9fa48("18254") ? "" : (stryCov_9fa48("18254"), 'brand:emailLogo')].startsWith(stryMutAct_9fa48("18255") ? "" : (stryCov_9fa48("18255"), 'http')))))) ? nconf.get(stryMutAct_9fa48("18256") ? "" : (stryCov_9fa48("18256"), 'url')) : stryMutAct_9fa48("18257") ? "Stryker was here!" : (stryCov_9fa48("18257"), '')) + meta.config[stryMutAct_9fa48("18258") ? "" : (stryCov_9fa48("18258"), 'brand:emailLogo')]);
      }
    }
    Emailer._defaultPayload = stryMutAct_9fa48("18259") ? {} : (stryCov_9fa48("18259"), {
      url: nconf.get(stryMutAct_9fa48("18260") ? "" : (stryCov_9fa48("18260"), 'url')),
      site_title: stryMutAct_9fa48("18263") ? meta.config.title && 'NodeBB' : stryMutAct_9fa48("18262") ? false : stryMutAct_9fa48("18261") ? true : (stryCov_9fa48("18261", "18262", "18263"), meta.config.title || (stryMutAct_9fa48("18264") ? "" : (stryCov_9fa48("18264"), 'NodeBB'))),
      logo: stryMutAct_9fa48("18265") ? {} : (stryCov_9fa48("18265"), {
        src: logo,
        height: meta.config[stryMutAct_9fa48("18266") ? "" : (stryCov_9fa48("18266"), 'brand:emailLogo:height')],
        width: meta.config[stryMutAct_9fa48("18267") ? "" : (stryCov_9fa48("18267"), 'brand:emailLogo:width')]
      })
    });
    Emailer.setupFallbackTransport(meta.config);
    buildCustomTemplates(meta.config);

    // need to shallow clone the config object
    // otherwise prevConfig holds reference to meta.config object,
    // which is updated before the pubsub handler is called
    prevConfig = stryMutAct_9fa48("18268") ? {} : (stryCov_9fa48("18268"), {
      ...meta.config
    });
    pubsub.on(stryMutAct_9fa48("18269") ? "" : (stryCov_9fa48("18269"), 'config:update'), config => {
      if (stryMutAct_9fa48("18270")) {
        {}
      } else {
        stryCov_9fa48("18270");
        // config object only contains properties for the specific acp settings page
        // not the entire meta.config object
        if (stryMutAct_9fa48("18272") ? false : stryMutAct_9fa48("18271") ? true : (stryCov_9fa48("18271", "18272"), config)) {
          if (stryMutAct_9fa48("18273")) {
            {}
          } else {
            stryCov_9fa48("18273");
            // Update default payload if new logo is uploaded
            if (stryMutAct_9fa48("18275") ? false : stryMutAct_9fa48("18274") ? true : (stryCov_9fa48("18274", "18275"), config.hasOwnProperty(stryMutAct_9fa48("18276") ? "" : (stryCov_9fa48("18276"), 'brand:emailLogo')))) {
              if (stryMutAct_9fa48("18277")) {
                {}
              } else {
                stryCov_9fa48("18277");
                Emailer._defaultPayload.logo.src = config[stryMutAct_9fa48("18278") ? "" : (stryCov_9fa48("18278"), 'brand:emailLogo')];
              }
            }
            if (stryMutAct_9fa48("18280") ? false : stryMutAct_9fa48("18279") ? true : (stryCov_9fa48("18279", "18280"), config.hasOwnProperty(stryMutAct_9fa48("18281") ? "" : (stryCov_9fa48("18281"), 'brand:emailLogo:height')))) {
              if (stryMutAct_9fa48("18282")) {
                {}
              } else {
                stryCov_9fa48("18282");
                Emailer._defaultPayload.logo.height = config[stryMutAct_9fa48("18283") ? "" : (stryCov_9fa48("18283"), 'brand:emailLogo:height')];
              }
            }
            if (stryMutAct_9fa48("18285") ? false : stryMutAct_9fa48("18284") ? true : (stryCov_9fa48("18284", "18285"), config.hasOwnProperty(stryMutAct_9fa48("18286") ? "" : (stryCov_9fa48("18286"), 'brand:emailLogo:width')))) {
              if (stryMutAct_9fa48("18287")) {
                {}
              } else {
                stryCov_9fa48("18287");
                Emailer._defaultPayload.logo.width = config[stryMutAct_9fa48("18288") ? "" : (stryCov_9fa48("18288"), 'brand:emailLogo:width')];
              }
            }
            if (stryMutAct_9fa48("18290") ? false : stryMutAct_9fa48("18289") ? true : (stryCov_9fa48("18289", "18290"), smtpSettingsChanged(config))) {
              if (stryMutAct_9fa48("18291")) {
                {}
              } else {
                stryCov_9fa48("18291");
                Emailer.setupFallbackTransport(config);
              }
            }
            buildCustomTemplates(config);
            prevConfig = stryMutAct_9fa48("18292") ? {} : (stryCov_9fa48("18292"), {
              ...prevConfig,
              ...config
            });
          }
        }
      }
    });
    return Emailer;
  }
};
Emailer.send = async (template, uid, params) => {
  if (stryMutAct_9fa48("18293")) {
    {}
  } else {
    stryCov_9fa48("18293");
    if (stryMutAct_9fa48("18296") ? false : stryMutAct_9fa48("18295") ? true : stryMutAct_9fa48("18294") ? app : (stryCov_9fa48("18294", "18295", "18296"), !app)) {
      if (stryMutAct_9fa48("18297")) {
        {}
      } else {
        stryCov_9fa48("18297");
        throw Error(stryMutAct_9fa48("18298") ? "" : (stryCov_9fa48("18298"), '[emailer] App not ready!'));
      }
    }
    let userData = await User.getUserFields(uid, stryMutAct_9fa48("18299") ? [] : (stryCov_9fa48("18299"), [stryMutAct_9fa48("18300") ? "" : (stryCov_9fa48("18300"), 'email'), stryMutAct_9fa48("18301") ? "" : (stryCov_9fa48("18301"), 'username'), stryMutAct_9fa48("18302") ? "" : (stryCov_9fa48("18302"), 'email:confirmed'), stryMutAct_9fa48("18303") ? "" : (stryCov_9fa48("18303"), 'banned')]));

    // 'welcome' and 'verify-email' explicitly used passed-in email address
    if (stryMutAct_9fa48("18305") ? false : stryMutAct_9fa48("18304") ? true : (stryCov_9fa48("18304", "18305"), (stryMutAct_9fa48("18306") ? [] : (stryCov_9fa48("18306"), [stryMutAct_9fa48("18307") ? "" : (stryCov_9fa48("18307"), 'welcome'), stryMutAct_9fa48("18308") ? "" : (stryCov_9fa48("18308"), 'verify-email')])).includes(template))) {
      if (stryMutAct_9fa48("18309")) {
        {}
      } else {
        stryCov_9fa48("18309");
        userData.email = params.email;
      }
    }
    ({
      template,
      userData,
      params
    } = await Plugins.hooks.fire(stryMutAct_9fa48("18310") ? "" : (stryCov_9fa48("18310"), 'filter:email.prepare'), stryMutAct_9fa48("18311") ? {} : (stryCov_9fa48("18311"), {
      template,
      uid,
      userData,
      params
    })));
    if (stryMutAct_9fa48("18314") ? !meta.config.sendEmailToBanned || template !== 'banned' : stryMutAct_9fa48("18313") ? false : stryMutAct_9fa48("18312") ? true : (stryCov_9fa48("18312", "18313", "18314"), (stryMutAct_9fa48("18315") ? meta.config.sendEmailToBanned : (stryCov_9fa48("18315"), !meta.config.sendEmailToBanned)) && (stryMutAct_9fa48("18317") ? template === 'banned' : stryMutAct_9fa48("18316") ? true : (stryCov_9fa48("18316", "18317"), template !== (stryMutAct_9fa48("18318") ? "" : (stryCov_9fa48("18318"), 'banned')))))) {
      if (stryMutAct_9fa48("18319")) {
        {}
      } else {
        stryCov_9fa48("18319");
        if (stryMutAct_9fa48("18321") ? false : stryMutAct_9fa48("18320") ? true : (stryCov_9fa48("18320", "18321"), userData.banned)) {
          if (stryMutAct_9fa48("18322")) {
            {}
          } else {
            stryCov_9fa48("18322");
            winston.warn(stryMutAct_9fa48("18323") ? `` : (stryCov_9fa48("18323"), `[emailer/send] User ${userData.username} (uid: ${uid}) is banned; not sending email due to system config.`));
            return;
          }
        }
      }
    }
    if (stryMutAct_9fa48("18326") ? !userData && !userData.email : stryMutAct_9fa48("18325") ? false : stryMutAct_9fa48("18324") ? true : (stryCov_9fa48("18324", "18325", "18326"), (stryMutAct_9fa48("18327") ? userData : (stryCov_9fa48("18327"), !userData)) || (stryMutAct_9fa48("18328") ? userData.email : (stryCov_9fa48("18328"), !userData.email)))) {
      if (stryMutAct_9fa48("18329")) {
        {}
      } else {
        stryCov_9fa48("18329");
        if (stryMutAct_9fa48("18332") ? process.env.NODE_ENV !== 'development' : stryMutAct_9fa48("18331") ? false : stryMutAct_9fa48("18330") ? true : (stryCov_9fa48("18330", "18331", "18332"), process.env.NODE_ENV === (stryMutAct_9fa48("18333") ? "" : (stryCov_9fa48("18333"), 'development')))) {
          if (stryMutAct_9fa48("18334")) {
            {}
          } else {
            stryCov_9fa48("18334");
            winston.warn(stryMutAct_9fa48("18335") ? `` : (stryCov_9fa48("18335"), `uid : ${uid} has no email, not sending "${template}" email.`));
          }
        }
        return;
      }
    }
    const allowedTpls = stryMutAct_9fa48("18336") ? [] : (stryCov_9fa48("18336"), [stryMutAct_9fa48("18337") ? "" : (stryCov_9fa48("18337"), 'verify-email'), stryMutAct_9fa48("18338") ? "" : (stryCov_9fa48("18338"), 'welcome'), stryMutAct_9fa48("18339") ? "" : (stryCov_9fa48("18339"), 'registration_accepted'), stryMutAct_9fa48("18340") ? "" : (stryCov_9fa48("18340"), 'reset'), stryMutAct_9fa48("18341") ? "" : (stryCov_9fa48("18341"), 'reset_notify')]);
    if (stryMutAct_9fa48("18344") ? !meta.config.includeUnverifiedEmails && !userData['email:confirmed'] || !allowedTpls.includes(template) : stryMutAct_9fa48("18343") ? false : stryMutAct_9fa48("18342") ? true : (stryCov_9fa48("18342", "18343", "18344"), (stryMutAct_9fa48("18346") ? !meta.config.includeUnverifiedEmails || !userData['email:confirmed'] : stryMutAct_9fa48("18345") ? true : (stryCov_9fa48("18345", "18346"), (stryMutAct_9fa48("18347") ? meta.config.includeUnverifiedEmails : (stryCov_9fa48("18347"), !meta.config.includeUnverifiedEmails)) && (stryMutAct_9fa48("18348") ? userData['email:confirmed'] : (stryCov_9fa48("18348"), !userData[stryMutAct_9fa48("18349") ? "" : (stryCov_9fa48("18349"), 'email:confirmed')])))) && (stryMutAct_9fa48("18350") ? allowedTpls.includes(template) : (stryCov_9fa48("18350"), !allowedTpls.includes(template))))) {
      if (stryMutAct_9fa48("18351")) {
        {}
      } else {
        stryCov_9fa48("18351");
        if (stryMutAct_9fa48("18354") ? process.env.NODE_ENV !== 'development' : stryMutAct_9fa48("18353") ? false : stryMutAct_9fa48("18352") ? true : (stryCov_9fa48("18352", "18353", "18354"), process.env.NODE_ENV === (stryMutAct_9fa48("18355") ? "" : (stryCov_9fa48("18355"), 'development')))) {
          if (stryMutAct_9fa48("18356")) {
            {}
          } else {
            stryCov_9fa48("18356");
            winston.warn(stryMutAct_9fa48("18357") ? `` : (stryCov_9fa48("18357"), `uid : ${uid} (${userData.email}) has not confirmed email, not sending "${template}" email.`));
          }
        }
        return;
      }
    }
    const userSettings = await User.getSettings(uid);
    // Combined passed-in payload with default values
    params = stryMutAct_9fa48("18358") ? {} : (stryCov_9fa48("18358"), {
      ...Emailer._defaultPayload,
      ...params
    });
    params.uid = uid;
    params.username = userData.username;
    params.rtl = stryMutAct_9fa48("18361") ? (await translator.translate('[[language:dir]]', userSettings.userLang)) !== 'rtl' : stryMutAct_9fa48("18360") ? false : stryMutAct_9fa48("18359") ? true : (stryCov_9fa48("18359", "18360", "18361"), (await translator.translate(stryMutAct_9fa48("18362") ? "" : (stryCov_9fa48("18362"), '[[language:dir]]'), userSettings.userLang)) === (stryMutAct_9fa48("18363") ? "" : (stryCov_9fa48("18363"), 'rtl')));
    const result = await Plugins.hooks.fire(stryMutAct_9fa48("18364") ? "" : (stryCov_9fa48("18364"), 'filter:email.cancel'), stryMutAct_9fa48("18365") ? {} : (stryCov_9fa48("18365"), {
      cancel: stryMutAct_9fa48("18366") ? true : (stryCov_9fa48("18366"), false),
      // set to true in plugin to cancel sending email
      template: template,
      params: params
    }));
    if (stryMutAct_9fa48("18368") ? false : stryMutAct_9fa48("18367") ? true : (stryCov_9fa48("18367", "18368"), result.cancel)) {
      if (stryMutAct_9fa48("18369")) {
        {}
      } else {
        stryCov_9fa48("18369");
        return;
      }
    }
    await Emailer.sendToEmail(template, userData.email, userSettings.userLang, params);
  }
};
Emailer.sendToEmail = async (template, email, language, params) => {
  if (stryMutAct_9fa48("18370")) {
    {}
  } else {
    stryCov_9fa48("18370");
    const lang = stryMutAct_9fa48("18373") ? (language || meta.config.defaultLang) && 'en-GB' : stryMutAct_9fa48("18372") ? false : stryMutAct_9fa48("18371") ? true : (stryCov_9fa48("18371", "18372", "18373"), (stryMutAct_9fa48("18375") ? language && meta.config.defaultLang : stryMutAct_9fa48("18374") ? false : (stryCov_9fa48("18374", "18375"), language || meta.config.defaultLang)) || (stryMutAct_9fa48("18376") ? "" : (stryCov_9fa48("18376"), 'en-GB')));
    const unsubscribable = stryMutAct_9fa48("18377") ? [] : (stryCov_9fa48("18377"), [stryMutAct_9fa48("18378") ? "" : (stryCov_9fa48("18378"), 'digest'), stryMutAct_9fa48("18379") ? "" : (stryCov_9fa48("18379"), 'notification')]);

    // Digests and notifications can be one-click unsubbed
    let payload = stryMutAct_9fa48("18380") ? {} : (stryCov_9fa48("18380"), {
      template: template,
      uid: params.uid
    });
    if (stryMutAct_9fa48("18382") ? false : stryMutAct_9fa48("18381") ? true : (stryCov_9fa48("18381", "18382"), unsubscribable.includes(template))) {
      if (stryMutAct_9fa48("18383")) {
        {}
      } else {
        stryCov_9fa48("18383");
        if (stryMutAct_9fa48("18386") ? template !== 'notification' : stryMutAct_9fa48("18385") ? false : stryMutAct_9fa48("18384") ? true : (stryCov_9fa48("18384", "18385", "18386"), template === (stryMutAct_9fa48("18387") ? "" : (stryCov_9fa48("18387"), 'notification')))) {
          if (stryMutAct_9fa48("18388")) {
            {}
          } else {
            stryCov_9fa48("18388");
            payload.type = params.notification.type;
          }
        }
        payload = jwt.sign(payload, nconf.get(stryMutAct_9fa48("18389") ? "" : (stryCov_9fa48("18389"), 'secret')), stryMutAct_9fa48("18390") ? {} : (stryCov_9fa48("18390"), {
          expiresIn: stryMutAct_9fa48("18391") ? "" : (stryCov_9fa48("18391"), '30d')
        }));
        const unsubUrl = (stryMutAct_9fa48("18392") ? [] : (stryCov_9fa48("18392"), [nconf.get(stryMutAct_9fa48("18393") ? "" : (stryCov_9fa48("18393"), 'url')), stryMutAct_9fa48("18394") ? "" : (stryCov_9fa48("18394"), 'email'), stryMutAct_9fa48("18395") ? "" : (stryCov_9fa48("18395"), 'unsubscribe'), payload])).join(stryMutAct_9fa48("18396") ? "" : (stryCov_9fa48("18396"), '/'));
        params.headers = stryMutAct_9fa48("18397") ? {} : (stryCov_9fa48("18397"), {
          'List-Id': stryMutAct_9fa48("18398") ? `` : (stryCov_9fa48("18398"), `<${(stryMutAct_9fa48("18399") ? [] : (stryCov_9fa48("18399"), [template, params.uid, getHostname()])).join(stryMutAct_9fa48("18400") ? "" : (stryCov_9fa48("18400"), '.'))}>`),
          'List-Unsubscribe': stryMutAct_9fa48("18401") ? `` : (stryCov_9fa48("18401"), `<${unsubUrl}>`),
          'List-Unsubscribe-Post': stryMutAct_9fa48("18402") ? "" : (stryCov_9fa48("18402"), 'List-Unsubscribe=One-Click'),
          ...params.headers
        });
        params.unsubUrl = unsubUrl;
      }
    }
    const result = await Plugins.hooks.fire(stryMutAct_9fa48("18403") ? "" : (stryCov_9fa48("18403"), 'filter:email.params'), stryMutAct_9fa48("18404") ? {} : (stryCov_9fa48("18404"), {
      template: template,
      email: email,
      language: lang,
      params: params
    }));
    template = result.template;
    email = result.email;
    params = result.params;
    const [html, subject] = await Promise.all(stryMutAct_9fa48("18405") ? [] : (stryCov_9fa48("18405"), [Emailer.renderAndTranslate(template, params, result.language), translator.translate(params.subject, result.language)]));
    const data = await Plugins.hooks.fire(stryMutAct_9fa48("18406") ? "" : (stryCov_9fa48("18406"), 'filter:email.modify'), stryMutAct_9fa48("18407") ? {} : (stryCov_9fa48("18407"), {
      _raw: params,
      to: email,
      from: stryMutAct_9fa48("18410") ? meta.config['email:from'] && `no-reply@${getHostname()}` : stryMutAct_9fa48("18409") ? false : stryMutAct_9fa48("18408") ? true : (stryCov_9fa48("18408", "18409", "18410"), meta.config[stryMutAct_9fa48("18411") ? "" : (stryCov_9fa48("18411"), 'email:from')] || (stryMutAct_9fa48("18412") ? `` : (stryCov_9fa48("18412"), `no-reply@${getHostname()}`))),
      from_name: stryMutAct_9fa48("18415") ? meta.config['email:from_name'] && 'NodeBB' : stryMutAct_9fa48("18414") ? false : stryMutAct_9fa48("18413") ? true : (stryCov_9fa48("18413", "18414", "18415"), meta.config[stryMutAct_9fa48("18416") ? "" : (stryCov_9fa48("18416"), 'email:from_name')] || (stryMutAct_9fa48("18417") ? "" : (stryCov_9fa48("18417"), 'NodeBB'))),
      subject: stryMutAct_9fa48("18418") ? `` : (stryCov_9fa48("18418"), `[${meta.config.title}] ${_.unescape(subject)}`),
      html: html,
      plaintext: htmlToText(html, stryMutAct_9fa48("18419") ? {} : (stryCov_9fa48("18419"), {
        tags: stryMutAct_9fa48("18420") ? {} : (stryCov_9fa48("18420"), {
          img: stryMutAct_9fa48("18421") ? {} : (stryCov_9fa48("18421"), {
            format: stryMutAct_9fa48("18422") ? "" : (stryCov_9fa48("18422"), 'skip')
          })
        })
      })),
      template: template,
      uid: params.uid,
      pid: params.pid,
      fromUid: params.fromUid,
      headers: params.headers,
      rtl: params.rtl
    }));
    const usingFallback = stryMutAct_9fa48("18425") ? !Plugins.hooks.hasListeners('filter:email.send') || !Plugins.hooks.hasListeners('static:email.send') : stryMutAct_9fa48("18424") ? false : stryMutAct_9fa48("18423") ? true : (stryCov_9fa48("18423", "18424", "18425"), (stryMutAct_9fa48("18426") ? Plugins.hooks.hasListeners('filter:email.send') : (stryCov_9fa48("18426"), !Plugins.hooks.hasListeners(stryMutAct_9fa48("18427") ? "" : (stryCov_9fa48("18427"), 'filter:email.send')))) && (stryMutAct_9fa48("18428") ? Plugins.hooks.hasListeners('static:email.send') : (stryCov_9fa48("18428"), !Plugins.hooks.hasListeners(stryMutAct_9fa48("18429") ? "" : (stryCov_9fa48("18429"), 'static:email.send')))));
    try {
      if (stryMutAct_9fa48("18430")) {
        {}
      } else {
        stryCov_9fa48("18430");
        if (stryMutAct_9fa48("18432") ? false : stryMutAct_9fa48("18431") ? true : (stryCov_9fa48("18431", "18432"), Plugins.hooks.hasListeners(stryMutAct_9fa48("18433") ? "" : (stryCov_9fa48("18433"), 'filter:email.send')))) {
          if (stryMutAct_9fa48("18434")) {
            {}
          } else {
            stryCov_9fa48("18434");
            // Deprecated, remove in v1.19.0
            await Plugins.hooks.fire(stryMutAct_9fa48("18435") ? "" : (stryCov_9fa48("18435"), 'filter:email.send'), data);
          }
        } else if (stryMutAct_9fa48("18437") ? false : stryMutAct_9fa48("18436") ? true : (stryCov_9fa48("18436", "18437"), Plugins.hooks.hasListeners(stryMutAct_9fa48("18438") ? "" : (stryCov_9fa48("18438"), 'static:email.send')))) {
          if (stryMutAct_9fa48("18439")) {
            {}
          } else {
            stryCov_9fa48("18439");
            await Plugins.hooks.fire(stryMutAct_9fa48("18440") ? "" : (stryCov_9fa48("18440"), 'static:email.send'), data);
          }
        } else {
          if (stryMutAct_9fa48("18441")) {
            {}
          } else {
            stryCov_9fa48("18441");
            await Emailer.sendViaFallback(data);
          }
        }
      }
    } catch (err) {
      if (stryMutAct_9fa48("18442")) {
        {}
      } else {
        stryCov_9fa48("18442");
        if (stryMutAct_9fa48("18445") ? err.code === 'ENOENT' || usingFallback : stryMutAct_9fa48("18444") ? false : stryMutAct_9fa48("18443") ? true : (stryCov_9fa48("18443", "18444", "18445"), (stryMutAct_9fa48("18447") ? err.code !== 'ENOENT' : stryMutAct_9fa48("18446") ? true : (stryCov_9fa48("18446", "18447"), err.code === (stryMutAct_9fa48("18448") ? "" : (stryCov_9fa48("18448"), 'ENOENT')))) && usingFallback)) {
          if (stryMutAct_9fa48("18449")) {
            {}
          } else {
            stryCov_9fa48("18449");
            Emailer.fallbackNotFound = stryMutAct_9fa48("18450") ? false : (stryCov_9fa48("18450"), true);
            throw new Error(stryMutAct_9fa48("18451") ? "" : (stryCov_9fa48("18451"), '[[error:sendmail-not-found]]'));
          }
        } else {
          if (stryMutAct_9fa48("18452")) {
            {}
          } else {
            stryCov_9fa48("18452");
            throw err;
          }
        }
      }
    }
  }
};
Emailer.sendViaFallback = async data => {
  if (stryMutAct_9fa48("18453")) {
    {}
  } else {
    stryCov_9fa48("18453");
    // Some minor alterations to the data to conform to nodemailer standard
    data.text = data.plaintext;
    delete data.plaintext;

    // NodeMailer uses a combined "from"
    data.from = stryMutAct_9fa48("18454") ? `` : (stryCov_9fa48("18454"), `${data.from_name}<${data.from}>`);
    delete data.from_name;
    await Emailer.fallbackTransport.sendMail(data);
  }
};
Emailer.renderAndTranslate = async (template, params, lang) => {
  if (stryMutAct_9fa48("18455")) {
    {}
  } else {
    stryCov_9fa48("18455");
    const html = await app.renderAsync(stryMutAct_9fa48("18456") ? `` : (stryCov_9fa48("18456"), `emails/${template}`), params);
    return await translator.translate(html, lang);
  }
};
require('./promisify')(Emailer, stryMutAct_9fa48("18457") ? [] : (stryCov_9fa48("18457"), [stryMutAct_9fa48("18458") ? "" : (stryCov_9fa48("18458"), 'transports')]));