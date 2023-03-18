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
const fs = require('fs');
const util = require('util');
const path = require('path');
const os = require('os');
const nconf = require('nconf');
const express = require('express');
const chalk = require('chalk');
const app = express();
app.renderAsync = util.promisify(stryMutAct_9fa48("49608") ? () => undefined : (stryCov_9fa48("49608"), (tpl, data, callback) => app.render(tpl, data, callback)));
let server;
const winston = require('winston');
const flash = require('connect-flash');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const session = require('express-session');
const useragent = require('express-useragent');
const favicon = require('serve-favicon');
const detector = require('spider-detector');
const helmet = require('helmet');
const Benchpress = require('benchpressjs');
const db = require('./database');
const analytics = require('./analytics');
const file = require('./file');
const emailer = require('./emailer');
const meta = require('./meta');
const logger = require('./logger');
const plugins = require('./plugins');
const flags = require('./flags');
const topicEvents = require('./topics/events');
const privileges = require('./privileges');
const routes = require('./routes');
const auth = require('./routes/authentication');
const helpers = require('./helpers');
if (stryMutAct_9fa48("49610") ? false : stryMutAct_9fa48("49609") ? true : (stryCov_9fa48("49609", "49610"), nconf.get(stryMutAct_9fa48("49611") ? "" : (stryCov_9fa48("49611"), 'ssl')))) {
  if (stryMutAct_9fa48("49612")) {
    {}
  } else {
    stryCov_9fa48("49612");
    server = require('https').createServer(stryMutAct_9fa48("49613") ? {} : (stryCov_9fa48("49613"), {
      key: fs.readFileSync(nconf.get(stryMutAct_9fa48("49614") ? "" : (stryCov_9fa48("49614"), 'ssl')).key),
      cert: fs.readFileSync(nconf.get(stryMutAct_9fa48("49615") ? "" : (stryCov_9fa48("49615"), 'ssl')).cert)
    }), app);
  }
} else {
  if (stryMutAct_9fa48("49616")) {
    {}
  } else {
    stryCov_9fa48("49616");
    server = require('http').createServer(app);
  }
}
module.exports.server = server;
module.exports.app = app;
server.on(stryMutAct_9fa48("49617") ? "" : (stryCov_9fa48("49617"), 'error'), err => {
  if (stryMutAct_9fa48("49618")) {
    {}
  } else {
    stryCov_9fa48("49618");
    if (stryMutAct_9fa48("49621") ? err.code !== 'EADDRINUSE' : stryMutAct_9fa48("49620") ? false : stryMutAct_9fa48("49619") ? true : (stryCov_9fa48("49619", "49620", "49621"), err.code === (stryMutAct_9fa48("49622") ? "" : (stryCov_9fa48("49622"), 'EADDRINUSE')))) {
      if (stryMutAct_9fa48("49623")) {
        {}
      } else {
        stryCov_9fa48("49623");
        winston.error(stryMutAct_9fa48("49624") ? `` : (stryCov_9fa48("49624"), `NodeBB address in use, exiting...\n${err.stack}`));
      }
    } else {
      if (stryMutAct_9fa48("49625")) {
        {}
      } else {
        stryCov_9fa48("49625");
        winston.error(err.stack);
      }
    }
    throw err;
  }
});

// see https://github.com/isaacs/server-destroy/blob/master/index.js
const connections = {};
server.on(stryMutAct_9fa48("49626") ? "" : (stryCov_9fa48("49626"), 'connection'), conn => {
  if (stryMutAct_9fa48("49627")) {
    {}
  } else {
    stryCov_9fa48("49627");
    const key = stryMutAct_9fa48("49628") ? `` : (stryCov_9fa48("49628"), `${conn.remoteAddress}:${conn.remotePort}`);
    connections[key] = conn;
    conn.on(stryMutAct_9fa48("49629") ? "" : (stryCov_9fa48("49629"), 'close'), () => {
      if (stryMutAct_9fa48("49630")) {
        {}
      } else {
        stryCov_9fa48("49630");
        delete connections[key];
      }
    });
  }
});
exports.destroy = function (callback) {
  if (stryMutAct_9fa48("49631")) {
    {}
  } else {
    stryCov_9fa48("49631");
    server.close(callback);
    for (const connection of Object.values(connections)) {
      if (stryMutAct_9fa48("49632")) {
        {}
      } else {
        stryCov_9fa48("49632");
        connection.destroy();
      }
    }
  }
};
exports.listen = async function () {
  if (stryMutAct_9fa48("49633")) {
    {}
  } else {
    stryCov_9fa48("49633");
    emailer.registerApp(app);
    setupExpressApp(app);
    helpers.register();
    logger.init(app);
    await initializeNodeBB();
    winston.info(stryMutAct_9fa48("49634") ? "" : (stryCov_9fa48("49634"), '🎉 NodeBB Ready'));
    require('./socket.io').server.emit(stryMutAct_9fa48("49635") ? "" : (stryCov_9fa48("49635"), 'event:nodebb.ready'), stryMutAct_9fa48("49636") ? {} : (stryCov_9fa48("49636"), {
      'cache-buster': meta.config[stryMutAct_9fa48("49637") ? "" : (stryCov_9fa48("49637"), 'cache-buster')],
      hostname: os.hostname()
    }));
    plugins.hooks.fire(stryMutAct_9fa48("49638") ? "" : (stryCov_9fa48("49638"), 'action:nodebb.ready'));
    await listen();
  }
};
async function initializeNodeBB() {
  if (stryMutAct_9fa48("49639")) {
    {}
  } else {
    stryCov_9fa48("49639");
    const middleware = require('./middleware');
    await meta.themes.setupPaths();
    await plugins.init(app, middleware);
    await plugins.hooks.fire(stryMutAct_9fa48("49640") ? "" : (stryCov_9fa48("49640"), 'static:assets.prepare'), {});
    await plugins.hooks.fire(stryMutAct_9fa48("49641") ? "" : (stryCov_9fa48("49641"), 'static:app.preload'), stryMutAct_9fa48("49642") ? {} : (stryCov_9fa48("49642"), {
      app: app,
      middleware: middleware
    }));
    await routes(app, middleware);
    await privileges.init();
    await meta.blacklist.load();
    await flags.init();
    await analytics.init();
    await topicEvents.init();
  }
}
function setupExpressApp(app) {
  if (stryMutAct_9fa48("49643")) {
    {}
  } else {
    stryCov_9fa48("49643");
    const middleware = require('./middleware');
    const pingController = require('./controllers/ping');
    const relativePath = nconf.get(stryMutAct_9fa48("49644") ? "" : (stryCov_9fa48("49644"), 'relative_path'));
    const viewsDir = nconf.get(stryMutAct_9fa48("49645") ? "" : (stryCov_9fa48("49645"), 'views_dir'));
    app.engine(stryMutAct_9fa48("49646") ? "" : (stryCov_9fa48("49646"), 'tpl'), (filepath, data, next) => {
      if (stryMutAct_9fa48("49647")) {
        {}
      } else {
        stryCov_9fa48("49647");
        filepath = filepath.replace(stryMutAct_9fa48("49648") ? /\.tpl/ : (stryCov_9fa48("49648"), /\.tpl$/), stryMutAct_9fa48("49649") ? "" : (stryCov_9fa48("49649"), '.js'));
        Benchpress.__express(filepath, data, next);
      }
    });
    app.set(stryMutAct_9fa48("49650") ? "" : (stryCov_9fa48("49650"), 'view engine'), stryMutAct_9fa48("49651") ? "" : (stryCov_9fa48("49651"), 'tpl'));
    app.set(stryMutAct_9fa48("49652") ? "" : (stryCov_9fa48("49652"), 'views'), viewsDir);
    app.set(stryMutAct_9fa48("49653") ? "" : (stryCov_9fa48("49653"), 'json spaces'), (stryMutAct_9fa48("49656") ? global.env !== 'development' : stryMutAct_9fa48("49655") ? false : stryMutAct_9fa48("49654") ? true : (stryCov_9fa48("49654", "49655", "49656"), global.env === (stryMutAct_9fa48("49657") ? "" : (stryCov_9fa48("49657"), 'development')))) ? 4 : 0);
    app.use(flash());
    app.enable(stryMutAct_9fa48("49658") ? "" : (stryCov_9fa48("49658"), 'view cache'));
    if (stryMutAct_9fa48("49661") ? global.env === 'development' : stryMutAct_9fa48("49660") ? false : stryMutAct_9fa48("49659") ? true : (stryCov_9fa48("49659", "49660", "49661"), global.env !== (stryMutAct_9fa48("49662") ? "" : (stryCov_9fa48("49662"), 'development')))) {
      if (stryMutAct_9fa48("49663")) {
        {}
      } else {
        stryCov_9fa48("49663");
        app.enable(stryMutAct_9fa48("49664") ? "" : (stryCov_9fa48("49664"), 'cache'));
        app.enable(stryMutAct_9fa48("49665") ? "" : (stryCov_9fa48("49665"), 'minification'));
      }
    }
    if (stryMutAct_9fa48("49667") ? false : stryMutAct_9fa48("49666") ? true : (stryCov_9fa48("49666", "49667"), meta.config.useCompression)) {
      if (stryMutAct_9fa48("49668")) {
        {}
      } else {
        stryCov_9fa48("49668");
        const compression = require('compression');
        app.use(compression());
      }
    }
    if (stryMutAct_9fa48("49670") ? false : stryMutAct_9fa48("49669") ? true : (stryCov_9fa48("49669", "49670"), relativePath)) {
      if (stryMutAct_9fa48("49671")) {
        {}
      } else {
        stryCov_9fa48("49671");
        app.use((req, res, next) => {
          if (stryMutAct_9fa48("49672")) {
            {}
          } else {
            stryCov_9fa48("49672");
            if (stryMutAct_9fa48("49675") ? false : stryMutAct_9fa48("49674") ? true : stryMutAct_9fa48("49673") ? req.path.startsWith(relativePath) : (stryCov_9fa48("49673", "49674", "49675"), !(stryMutAct_9fa48("49676") ? req.path.endsWith(relativePath) : (stryCov_9fa48("49676"), req.path.startsWith(relativePath))))) {
              if (stryMutAct_9fa48("49677")) {
                {}
              } else {
                stryCov_9fa48("49677");
                return require('./controllers/helpers').redirect(res, req.path);
              }
            }
            next();
          }
        });
      }
    }
    app.get(stryMutAct_9fa48("49678") ? `` : (stryCov_9fa48("49678"), `${relativePath}/ping`), pingController.ping);
    app.get(stryMutAct_9fa48("49679") ? `` : (stryCov_9fa48("49679"), `${relativePath}/sping`), pingController.ping);
    setupFavicon(app);
    app.use(stryMutAct_9fa48("49680") ? `` : (stryCov_9fa48("49680"), `${relativePath}/apple-touch-icon`), middleware.routeTouchIcon);
    configureBodyParser(app);
    app.use(cookieParser(nconf.get(stryMutAct_9fa48("49681") ? "" : (stryCov_9fa48("49681"), 'secret'))));
    app.use(useragent.express());
    app.use(detector.middleware());
    app.use(session(stryMutAct_9fa48("49682") ? {} : (stryCov_9fa48("49682"), {
      store: db.sessionStore,
      secret: nconf.get(stryMutAct_9fa48("49683") ? "" : (stryCov_9fa48("49683"), 'secret')),
      key: nconf.get(stryMutAct_9fa48("49684") ? "" : (stryCov_9fa48("49684"), 'sessionKey')),
      cookie: setupCookie(),
      resave: stryMutAct_9fa48("49687") ? nconf.get('sessionResave') && false : stryMutAct_9fa48("49686") ? false : stryMutAct_9fa48("49685") ? true : (stryCov_9fa48("49685", "49686", "49687"), nconf.get(stryMutAct_9fa48("49688") ? "" : (stryCov_9fa48("49688"), 'sessionResave')) || (stryMutAct_9fa48("49689") ? true : (stryCov_9fa48("49689"), false))),
      saveUninitialized: stryMutAct_9fa48("49692") ? nconf.get('sessionSaveUninitialized') && false : stryMutAct_9fa48("49691") ? false : stryMutAct_9fa48("49690") ? true : (stryCov_9fa48("49690", "49691", "49692"), nconf.get(stryMutAct_9fa48("49693") ? "" : (stryCov_9fa48("49693"), 'sessionSaveUninitialized')) || (stryMutAct_9fa48("49694") ? true : (stryCov_9fa48("49694"), false)))
    })));
    setupHelmet(app);
    app.use(middleware.addHeaders);
    app.use(middleware.processRender);
    auth.initialize(app, middleware);
    const als = require('./als');
    app.use((req, res, next) => {
      if (stryMutAct_9fa48("49695")) {
        {}
      } else {
        stryCov_9fa48("49695");
        als.run(stryMutAct_9fa48("49696") ? {} : (stryCov_9fa48("49696"), {
          uid: req.uid
        }), next);
      }
    });
    app.use(middleware.autoLocale); // must be added after auth middlewares are added

    const toobusy = require('toobusy-js');
    toobusy.maxLag(meta.config.eventLoopLagThreshold);
    toobusy.interval(meta.config.eventLoopInterval);
  }
}
function setupHelmet(app) {
  if (stryMutAct_9fa48("49697")) {
    {}
  } else {
    stryCov_9fa48("49697");
    const options = stryMutAct_9fa48("49698") ? {} : (stryCov_9fa48("49698"), {
      contentSecurityPolicy: stryMutAct_9fa48("49699") ? true : (stryCov_9fa48("49699"), false),
      // defaults are too restrive and break plugins that load external assets... 🔜
      crossOriginOpenerPolicy: stryMutAct_9fa48("49700") ? {} : (stryCov_9fa48("49700"), {
        policy: meta.config[stryMutAct_9fa48("49701") ? "" : (stryCov_9fa48("49701"), 'cross-origin-opener-policy')]
      }),
      crossOriginResourcePolicy: stryMutAct_9fa48("49702") ? {} : (stryCov_9fa48("49702"), {
        policy: meta.config[stryMutAct_9fa48("49703") ? "" : (stryCov_9fa48("49703"), 'cross-origin-resource-policy')]
      }),
      referrerPolicy: stryMutAct_9fa48("49704") ? {} : (stryCov_9fa48("49704"), {
        policy: stryMutAct_9fa48("49705") ? "" : (stryCov_9fa48("49705"), 'strict-origin-when-cross-origin')
      })
    });
    if (stryMutAct_9fa48("49708") ? false : stryMutAct_9fa48("49707") ? true : stryMutAct_9fa48("49706") ? meta.config['cross-origin-embedder-policy'] : (stryCov_9fa48("49706", "49707", "49708"), !meta.config[stryMutAct_9fa48("49709") ? "" : (stryCov_9fa48("49709"), 'cross-origin-embedder-policy')])) {
      if (stryMutAct_9fa48("49710")) {
        {}
      } else {
        stryCov_9fa48("49710");
        options.crossOriginEmbedderPolicy = stryMutAct_9fa48("49711") ? true : (stryCov_9fa48("49711"), false);
      }
    }
    if (stryMutAct_9fa48("49713") ? false : stryMutAct_9fa48("49712") ? true : (stryCov_9fa48("49712", "49713"), meta.config[stryMutAct_9fa48("49714") ? "" : (stryCov_9fa48("49714"), 'hsts-enabled')])) {
      if (stryMutAct_9fa48("49715")) {
        {}
      } else {
        stryCov_9fa48("49715");
        options.hsts = stryMutAct_9fa48("49716") ? {} : (stryCov_9fa48("49716"), {
          maxAge: meta.config[stryMutAct_9fa48("49717") ? "" : (stryCov_9fa48("49717"), 'hsts-maxage')],
          includeSubDomains: stryMutAct_9fa48("49718") ? !meta.config['hsts-subdomains'] : (stryCov_9fa48("49718"), !(stryMutAct_9fa48("49719") ? meta.config['hsts-subdomains'] : (stryCov_9fa48("49719"), !meta.config[stryMutAct_9fa48("49720") ? "" : (stryCov_9fa48("49720"), 'hsts-subdomains')]))),
          preload: stryMutAct_9fa48("49721") ? !meta.config['hsts-preload'] : (stryCov_9fa48("49721"), !(stryMutAct_9fa48("49722") ? meta.config['hsts-preload'] : (stryCov_9fa48("49722"), !meta.config[stryMutAct_9fa48("49723") ? "" : (stryCov_9fa48("49723"), 'hsts-preload')])))
        });
      }
    }
    app.use(helmet(options));
  }
}
function setupFavicon(app) {
  if (stryMutAct_9fa48("49724")) {
    {}
  } else {
    stryCov_9fa48("49724");
    let faviconPath = stryMutAct_9fa48("49727") ? meta.config['brand:favicon'] && 'favicon.ico' : stryMutAct_9fa48("49726") ? false : stryMutAct_9fa48("49725") ? true : (stryCov_9fa48("49725", "49726", "49727"), meta.config[stryMutAct_9fa48("49728") ? "" : (stryCov_9fa48("49728"), 'brand:favicon')] || (stryMutAct_9fa48("49729") ? "" : (stryCov_9fa48("49729"), 'favicon.ico')));
    faviconPath = path.join(nconf.get(stryMutAct_9fa48("49730") ? "" : (stryCov_9fa48("49730"), 'base_dir')), stryMutAct_9fa48("49731") ? "" : (stryCov_9fa48("49731"), 'public'), faviconPath.replace(/assets\/uploads/, stryMutAct_9fa48("49732") ? "" : (stryCov_9fa48("49732"), 'uploads')));
    if (stryMutAct_9fa48("49734") ? false : stryMutAct_9fa48("49733") ? true : (stryCov_9fa48("49733", "49734"), file.existsSync(faviconPath))) {
      if (stryMutAct_9fa48("49735")) {
        {}
      } else {
        stryCov_9fa48("49735");
        app.use(nconf.get(stryMutAct_9fa48("49736") ? "" : (stryCov_9fa48("49736"), 'relative_path')), favicon(faviconPath));
      }
    }
  }
}
function configureBodyParser(app) {
  if (stryMutAct_9fa48("49737")) {
    {}
  } else {
    stryCov_9fa48("49737");
    const urlencodedOpts = stryMutAct_9fa48("49740") ? nconf.get('bodyParser:urlencoded') && {} : stryMutAct_9fa48("49739") ? false : stryMutAct_9fa48("49738") ? true : (stryCov_9fa48("49738", "49739", "49740"), nconf.get(stryMutAct_9fa48("49741") ? "" : (stryCov_9fa48("49741"), 'bodyParser:urlencoded')) || {});
    if (stryMutAct_9fa48("49744") ? false : stryMutAct_9fa48("49743") ? true : stryMutAct_9fa48("49742") ? urlencodedOpts.hasOwnProperty('extended') : (stryCov_9fa48("49742", "49743", "49744"), !urlencodedOpts.hasOwnProperty(stryMutAct_9fa48("49745") ? "" : (stryCov_9fa48("49745"), 'extended')))) {
      if (stryMutAct_9fa48("49746")) {
        {}
      } else {
        stryCov_9fa48("49746");
        urlencodedOpts.extended = stryMutAct_9fa48("49747") ? false : (stryCov_9fa48("49747"), true);
      }
    }
    app.use(bodyParser.urlencoded(urlencodedOpts));
    const jsonOpts = stryMutAct_9fa48("49750") ? nconf.get('bodyParser:json') && {} : stryMutAct_9fa48("49749") ? false : stryMutAct_9fa48("49748") ? true : (stryCov_9fa48("49748", "49749", "49750"), nconf.get(stryMutAct_9fa48("49751") ? "" : (stryCov_9fa48("49751"), 'bodyParser:json')) || {});
    app.use(bodyParser.json(jsonOpts));
  }
}
function setupCookie() {
  if (stryMutAct_9fa48("49752")) {
    {}
  } else {
    stryCov_9fa48("49752");
    const cookie = meta.configs.cookie.get();
    const ttl = stryMutAct_9fa48("49753") ? meta.getSessionTTLSeconds() / 1000 : (stryCov_9fa48("49753"), meta.getSessionTTLSeconds() * 1000);
    cookie.maxAge = ttl;
    return cookie;
  }
}
async function listen() {
  if (stryMutAct_9fa48("49754")) {
    {}
  } else {
    stryCov_9fa48("49754");
    let port = nconf.get(stryMutAct_9fa48("49755") ? "" : (stryCov_9fa48("49755"), 'port'));
    const isSocket = stryMutAct_9fa48("49758") ? isNaN(port) || !Array.isArray(port) : stryMutAct_9fa48("49757") ? false : stryMutAct_9fa48("49756") ? true : (stryCov_9fa48("49756", "49757", "49758"), isNaN(port) && (stryMutAct_9fa48("49759") ? Array.isArray(port) : (stryCov_9fa48("49759"), !Array.isArray(port))));
    const socketPath = isSocket ? nconf.get(stryMutAct_9fa48("49760") ? "" : (stryCov_9fa48("49760"), 'port')) : stryMutAct_9fa48("49761") ? "Stryker was here!" : (stryCov_9fa48("49761"), '');
    if (stryMutAct_9fa48("49763") ? false : stryMutAct_9fa48("49762") ? true : (stryCov_9fa48("49762", "49763"), Array.isArray(port))) {
      if (stryMutAct_9fa48("49764")) {
        {}
      } else {
        stryCov_9fa48("49764");
        if (stryMutAct_9fa48("49767") ? false : stryMutAct_9fa48("49766") ? true : stryMutAct_9fa48("49765") ? port.length : (stryCov_9fa48("49765", "49766", "49767"), !port.length)) {
          if (stryMutAct_9fa48("49768")) {
            {}
          } else {
            stryCov_9fa48("49768");
            winston.error(stryMutAct_9fa48("49769") ? "" : (stryCov_9fa48("49769"), '[startup] empty ports array in config.json'));
            process.exit();
          }
        }
        winston.warn(stryMutAct_9fa48("49770") ? "" : (stryCov_9fa48("49770"), '[startup] If you want to start nodebb on multiple ports please use loader.js'));
        winston.warn(stryMutAct_9fa48("49771") ? `` : (stryCov_9fa48("49771"), `[startup] Defaulting to first port in array, ${port[0]}`));
        port = port[0];
        if (stryMutAct_9fa48("49774") ? false : stryMutAct_9fa48("49773") ? true : stryMutAct_9fa48("49772") ? port : (stryCov_9fa48("49772", "49773", "49774"), !port)) {
          if (stryMutAct_9fa48("49775")) {
            {}
          } else {
            stryCov_9fa48("49775");
            winston.error(stryMutAct_9fa48("49776") ? "" : (stryCov_9fa48("49776"), '[startup] Invalid port, exiting'));
            process.exit();
          }
        }
      }
    }
    port = parseInt(port, 10);
    if (stryMutAct_9fa48("49779") ? port !== 80 && port !== 443 && nconf.get('trust_proxy') === true : stryMutAct_9fa48("49778") ? false : stryMutAct_9fa48("49777") ? true : (stryCov_9fa48("49777", "49778", "49779"), (stryMutAct_9fa48("49781") ? port !== 80 || port !== 443 : stryMutAct_9fa48("49780") ? false : (stryCov_9fa48("49780", "49781"), (stryMutAct_9fa48("49783") ? port === 80 : stryMutAct_9fa48("49782") ? true : (stryCov_9fa48("49782", "49783"), port !== 80)) && (stryMutAct_9fa48("49785") ? port === 443 : stryMutAct_9fa48("49784") ? true : (stryCov_9fa48("49784", "49785"), port !== 443)))) || (stryMutAct_9fa48("49787") ? nconf.get('trust_proxy') !== true : stryMutAct_9fa48("49786") ? false : (stryCov_9fa48("49786", "49787"), nconf.get(stryMutAct_9fa48("49788") ? "" : (stryCov_9fa48("49788"), 'trust_proxy')) === (stryMutAct_9fa48("49789") ? false : (stryCov_9fa48("49789"), true)))))) {
      if (stryMutAct_9fa48("49790")) {
        {}
      } else {
        stryCov_9fa48("49790");
        winston.info(stryMutAct_9fa48("49791") ? "" : (stryCov_9fa48("49791"), '🤝 Enabling \'trust proxy\''));
        app.enable(stryMutAct_9fa48("49792") ? "" : (stryCov_9fa48("49792"), 'trust proxy'));
      }
    }
    if (stryMutAct_9fa48("49795") ? port === 80 || port === 443 || process.env.NODE_ENV !== 'development' : stryMutAct_9fa48("49794") ? false : stryMutAct_9fa48("49793") ? true : (stryCov_9fa48("49793", "49794", "49795"), (stryMutAct_9fa48("49797") ? port === 80 && port === 443 : stryMutAct_9fa48("49796") ? true : (stryCov_9fa48("49796", "49797"), (stryMutAct_9fa48("49799") ? port !== 80 : stryMutAct_9fa48("49798") ? false : (stryCov_9fa48("49798", "49799"), port === 80)) || (stryMutAct_9fa48("49801") ? port !== 443 : stryMutAct_9fa48("49800") ? false : (stryCov_9fa48("49800", "49801"), port === 443)))) && (stryMutAct_9fa48("49803") ? process.env.NODE_ENV === 'development' : stryMutAct_9fa48("49802") ? true : (stryCov_9fa48("49802", "49803"), process.env.NODE_ENV !== (stryMutAct_9fa48("49804") ? "" : (stryCov_9fa48("49804"), 'development')))))) {
      if (stryMutAct_9fa48("49805")) {
        {}
      } else {
        stryCov_9fa48("49805");
        winston.info(stryMutAct_9fa48("49806") ? "" : (stryCov_9fa48("49806"), 'Using ports 80 and 443 is not recommend; use a proxy instead. See README.md'));
      }
    }
    const bind_address = (stryMutAct_9fa48("49809") ? nconf.get('bind_address') === '0.0.0.0' && !nconf.get('bind_address') : stryMutAct_9fa48("49808") ? false : stryMutAct_9fa48("49807") ? true : (stryCov_9fa48("49807", "49808", "49809"), (stryMutAct_9fa48("49811") ? nconf.get('bind_address') !== '0.0.0.0' : stryMutAct_9fa48("49810") ? false : (stryCov_9fa48("49810", "49811"), nconf.get(stryMutAct_9fa48("49812") ? "" : (stryCov_9fa48("49812"), 'bind_address')) === (stryMutAct_9fa48("49813") ? "" : (stryCov_9fa48("49813"), '0.0.0.0')))) || (stryMutAct_9fa48("49814") ? nconf.get('bind_address') : (stryCov_9fa48("49814"), !nconf.get(stryMutAct_9fa48("49815") ? "" : (stryCov_9fa48("49815"), 'bind_address')))))) ? stryMutAct_9fa48("49816") ? "" : (stryCov_9fa48("49816"), '0.0.0.0') : nconf.get(stryMutAct_9fa48("49817") ? "" : (stryCov_9fa48("49817"), 'bind_address'));
    const args = isSocket ? stryMutAct_9fa48("49818") ? [] : (stryCov_9fa48("49818"), [socketPath]) : stryMutAct_9fa48("49819") ? [] : (stryCov_9fa48("49819"), [port, bind_address]);
    let oldUmask;
    if (stryMutAct_9fa48("49821") ? false : stryMutAct_9fa48("49820") ? true : (stryCov_9fa48("49820", "49821"), isSocket)) {
      if (stryMutAct_9fa48("49822")) {
        {}
      } else {
        stryCov_9fa48("49822");
        oldUmask = process.umask(stryMutAct_9fa48("49823") ? "" : (stryCov_9fa48("49823"), '0000'));
        try {
          if (stryMutAct_9fa48("49824")) {
            {}
          } else {
            stryCov_9fa48("49824");
            await exports.testSocket(socketPath);
          }
        } catch (err) {
          if (stryMutAct_9fa48("49825")) {
            {}
          } else {
            stryCov_9fa48("49825");
            winston.error(stryMutAct_9fa48("49826") ? `` : (stryCov_9fa48("49826"), `[startup] NodeBB was unable to secure domain socket access (${socketPath})\n${err.stack}`));
            throw err;
          }
        }
      }
    }
    return new Promise((resolve, reject) => {
      if (stryMutAct_9fa48("49827")) {
        {}
      } else {
        stryCov_9fa48("49827");
        server.listen(...args.concat(stryMutAct_9fa48("49828") ? [] : (stryCov_9fa48("49828"), [function (err) {
          if (stryMutAct_9fa48("49829")) {
            {}
          } else {
            stryCov_9fa48("49829");
            const onText = stryMutAct_9fa48("49830") ? `` : (stryCov_9fa48("49830"), `${isSocket ? socketPath : stryMutAct_9fa48("49831") ? `` : (stryCov_9fa48("49831"), `${bind_address}:${port}`)}`);
            if (stryMutAct_9fa48("49833") ? false : stryMutAct_9fa48("49832") ? true : (stryCov_9fa48("49832", "49833"), err)) {
              if (stryMutAct_9fa48("49834")) {
                {}
              } else {
                stryCov_9fa48("49834");
                winston.error(stryMutAct_9fa48("49835") ? `` : (stryCov_9fa48("49835"), `[startup] NodeBB was unable to listen on: ${chalk.yellow(onText)}`));
                reject(err);
              }
            }
            winston.info(stryMutAct_9fa48("49836") ? `` : (stryCov_9fa48("49836"), `📡 NodeBB is now listening on: ${chalk.yellow(onText)}`));
            winston.info(stryMutAct_9fa48("49837") ? `` : (stryCov_9fa48("49837"), `🔗 Canonical URL: ${chalk.yellow(nconf.get(stryMutAct_9fa48("49838") ? "" : (stryCov_9fa48("49838"), 'url')))}`));
            if (stryMutAct_9fa48("49840") ? false : stryMutAct_9fa48("49839") ? true : (stryCov_9fa48("49839", "49840"), oldUmask)) {
              if (stryMutAct_9fa48("49841")) {
                {}
              } else {
                stryCov_9fa48("49841");
                process.umask(oldUmask);
              }
            }
            resolve();
          }
        }])));
      }
    });
  }
}
exports.testSocket = async function (socketPath) {
  if (stryMutAct_9fa48("49842")) {
    {}
  } else {
    stryCov_9fa48("49842");
    if (stryMutAct_9fa48("49845") ? typeof socketPath === 'string' : stryMutAct_9fa48("49844") ? false : stryMutAct_9fa48("49843") ? true : (stryCov_9fa48("49843", "49844", "49845"), typeof socketPath !== (stryMutAct_9fa48("49846") ? "" : (stryCov_9fa48("49846"), 'string')))) {
      if (stryMutAct_9fa48("49847")) {
        {}
      } else {
        stryCov_9fa48("49847");
        throw new Error(stryMutAct_9fa48("49848") ? `` : (stryCov_9fa48("49848"), `invalid socket path : ${socketPath}`));
      }
    }
    const net = require('net');
    const file = require('./file');
    const exists = await file.exists(socketPath);
    if (stryMutAct_9fa48("49851") ? false : stryMutAct_9fa48("49850") ? true : stryMutAct_9fa48("49849") ? exists : (stryCov_9fa48("49849", "49850", "49851"), !exists)) {
      if (stryMutAct_9fa48("49852")) {
        {}
      } else {
        stryCov_9fa48("49852");
        return;
      }
    }
    return new Promise((resolve, reject) => {
      if (stryMutAct_9fa48("49853")) {
        {}
      } else {
        stryCov_9fa48("49853");
        const testSocket = new net.Socket();
        testSocket.on(stryMutAct_9fa48("49854") ? "" : (stryCov_9fa48("49854"), 'error'), err => {
          if (stryMutAct_9fa48("49855")) {
            {}
          } else {
            stryCov_9fa48("49855");
            if (stryMutAct_9fa48("49858") ? err.code === 'ECONNREFUSED' : stryMutAct_9fa48("49857") ? false : stryMutAct_9fa48("49856") ? true : (stryCov_9fa48("49856", "49857", "49858"), err.code !== (stryMutAct_9fa48("49859") ? "" : (stryCov_9fa48("49859"), 'ECONNREFUSED')))) {
              if (stryMutAct_9fa48("49860")) {
                {}
              } else {
                stryCov_9fa48("49860");
                return reject(err);
              }
            }
            // The socket was stale, kick it out of the way
            fs.unlink(socketPath, err => {
              if (stryMutAct_9fa48("49861")) {
                {}
              } else {
                stryCov_9fa48("49861");
                if (stryMutAct_9fa48("49863") ? false : stryMutAct_9fa48("49862") ? true : (stryCov_9fa48("49862", "49863"), err)) reject(err);else resolve();
              }
            });
          }
        });
        testSocket.connect(stryMutAct_9fa48("49864") ? {} : (stryCov_9fa48("49864"), {
          path: socketPath
        }), () => {
          if (stryMutAct_9fa48("49865")) {
            {}
          } else {
            stryCov_9fa48("49865");
            // Something's listening here, abort
            reject(new Error(stryMutAct_9fa48("49866") ? "" : (stryCov_9fa48("49866"), 'port-in-use')));
          }
        });
      }
    });
  }
};
require('./promisify')(exports);