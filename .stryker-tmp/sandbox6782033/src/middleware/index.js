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
const async = require('async');
const path = require('path');
const csrf = require('csurf');
const validator = require('validator');
const nconf = require('nconf');
const toobusy = require('toobusy-js');
const util = require('util');
const plugins = require('../plugins');
const meta = require('../meta');
const user = require('../user');
const groups = require('../groups');
const analytics = require('../analytics');
const privileges = require('../privileges');
const cacheCreate = require('../cache/lru');
const helpers = require('./helpers');
const controllers = stryMutAct_9fa48("25834") ? {} : (stryCov_9fa48("25834"), {
  api: require('../controllers/api'),
  helpers: require('../controllers/helpers')
});
const delayCache = cacheCreate(stryMutAct_9fa48("25835") ? {} : (stryCov_9fa48("25835"), {
  ttl: stryMutAct_9fa48("25836") ? 1000 / 60 : (stryCov_9fa48("25836"), 1000 * 60)
}));
const middleware = module.exports;
const relative_path = nconf.get(stryMutAct_9fa48("25837") ? "" : (stryCov_9fa48("25837"), 'relative_path'));
middleware.regexes = stryMutAct_9fa48("25838") ? {} : (stryCov_9fa48("25838"), {
  timestampedUpload: stryMutAct_9fa48("25843") ? /^\d+-.$/ : stryMutAct_9fa48("25842") ? /^\D+-.+$/ : stryMutAct_9fa48("25841") ? /^\d-.+$/ : stryMutAct_9fa48("25840") ? /^\d+-.+/ : stryMutAct_9fa48("25839") ? /\d+-.+$/ : (stryCov_9fa48("25839", "25840", "25841", "25842", "25843"), /^\d+-.+$/)
});
const csrfMiddleware = csrf();
middleware.applyCSRF = function (req, res, next) {
  if (stryMutAct_9fa48("25844")) {
    {}
  } else {
    stryCov_9fa48("25844");
    if (stryMutAct_9fa48("25848") ? req.uid < 0 : stryMutAct_9fa48("25847") ? req.uid > 0 : stryMutAct_9fa48("25846") ? false : stryMutAct_9fa48("25845") ? true : (stryCov_9fa48("25845", "25846", "25847", "25848"), req.uid >= 0)) {
      if (stryMutAct_9fa48("25849")) {
        {}
      } else {
        stryCov_9fa48("25849");
        csrfMiddleware(req, res, next);
      }
    } else {
      if (stryMutAct_9fa48("25850")) {
        {}
      } else {
        stryCov_9fa48("25850");
        next();
      }
    }
  }
};
middleware.applyCSRFasync = util.promisify(middleware.applyCSRF);
middleware.ensureLoggedIn = (req, res, next) => {
  if (stryMutAct_9fa48("25851")) {
    {}
  } else {
    stryCov_9fa48("25851");
    if (stryMutAct_9fa48("25854") ? false : stryMutAct_9fa48("25853") ? true : stryMutAct_9fa48("25852") ? req.loggedIn : (stryCov_9fa48("25852", "25853", "25854"), !req.loggedIn)) {
      if (stryMutAct_9fa48("25855")) {
        {}
      } else {
        stryCov_9fa48("25855");
        return controllers.helpers.notAllowed(req, res);
      }
    }
    setImmediate(next);
  }
};
Object.assign(middleware, stryMutAct_9fa48("25856") ? {} : (stryCov_9fa48("25856"), {
  admin: require('./admin'),
  ...require('./header')
}));
require('./render')(middleware);
require('./maintenance')(middleware);
require('./user')(middleware);
middleware.uploads = require('./uploads');
require('./headers')(middleware);
require('./expose')(middleware);
middleware.assert = require('./assert');
middleware.stripLeadingSlashes = function stripLeadingSlashes(req, res, next) {
  if (stryMutAct_9fa48("25857")) {
    {}
  } else {
    stryCov_9fa48("25857");
    const target = req.originalUrl.replace(relative_path, stryMutAct_9fa48("25858") ? "Stryker was here!" : (stryCov_9fa48("25858"), ''));
    if (stryMutAct_9fa48("25861") ? target.endsWith('//') : stryMutAct_9fa48("25860") ? false : stryMutAct_9fa48("25859") ? true : (stryCov_9fa48("25859", "25860", "25861"), target.startsWith(stryMutAct_9fa48("25862") ? "" : (stryCov_9fa48("25862"), '//')))) {
      if (stryMutAct_9fa48("25863")) {
        {}
      } else {
        stryCov_9fa48("25863");
        return res.redirect(stryMutAct_9fa48("25864") ? relative_path - target.replace(/^\/+/, '/') : (stryCov_9fa48("25864"), relative_path + target.replace(stryMutAct_9fa48("25866") ? /^\// : stryMutAct_9fa48("25865") ? /\/+/ : (stryCov_9fa48("25865", "25866"), /^\/+/), stryMutAct_9fa48("25867") ? "" : (stryCov_9fa48("25867"), '/'))));
      }
    }
    next();
  }
};
middleware.pageView = helpers.try(async (req, res, next) => {
  if (stryMutAct_9fa48("25868")) {
    {}
  } else {
    stryCov_9fa48("25868");
    if (stryMutAct_9fa48("25870") ? false : stryMutAct_9fa48("25869") ? true : (stryCov_9fa48("25869", "25870"), req.loggedIn)) {
      if (stryMutAct_9fa48("25871")) {
        {}
      } else {
        stryCov_9fa48("25871");
        await Promise.all(stryMutAct_9fa48("25872") ? [] : (stryCov_9fa48("25872"), [user.updateOnlineUsers(req.uid), user.updateLastOnlineTime(req.uid)]));
      }
    }
    next();
    await analytics.pageView(stryMutAct_9fa48("25873") ? {} : (stryCov_9fa48("25873"), {
      ip: req.ip,
      uid: req.uid
    }));
    plugins.hooks.fire(stryMutAct_9fa48("25874") ? "" : (stryCov_9fa48("25874"), 'action:middleware.pageView'), stryMutAct_9fa48("25875") ? {} : (stryCov_9fa48("25875"), {
      req: req
    }));
  }
});
middleware.pluginHooks = helpers.try(async (req, res, next) => {
  if (stryMutAct_9fa48("25876")) {
    {}
  } else {
    stryCov_9fa48("25876");
    // TODO: Deprecate in v2.0
    await async.each(stryMutAct_9fa48("25879") ? plugins.loadedHooks['filter:router.page'] && [] : stryMutAct_9fa48("25878") ? false : stryMutAct_9fa48("25877") ? true : (stryCov_9fa48("25877", "25878", "25879"), plugins.loadedHooks[stryMutAct_9fa48("25880") ? "" : (stryCov_9fa48("25880"), 'filter:router.page')] || (stryMutAct_9fa48("25881") ? ["Stryker was here"] : (stryCov_9fa48("25881"), []))), (hookObj, next) => {
      if (stryMutAct_9fa48("25882")) {
        {}
      } else {
        stryCov_9fa48("25882");
        hookObj.method(req, res, next);
      }
    });
    await plugins.hooks.fire(stryMutAct_9fa48("25883") ? "" : (stryCov_9fa48("25883"), 'response:router.page'), stryMutAct_9fa48("25884") ? {} : (stryCov_9fa48("25884"), {
      req: req,
      res: res
    }));
    if (stryMutAct_9fa48("25887") ? false : stryMutAct_9fa48("25886") ? true : stryMutAct_9fa48("25885") ? res.headersSent : (stryCov_9fa48("25885", "25886", "25887"), !res.headersSent)) {
      if (stryMutAct_9fa48("25888")) {
        {}
      } else {
        stryCov_9fa48("25888");
        next();
      }
    }
  }
});
middleware.validateFiles = function validateFiles(req, res, next) {
  if (stryMutAct_9fa48("25889")) {
    {}
  } else {
    stryCov_9fa48("25889");
    if (stryMutAct_9fa48("25892") ? !Array.isArray(req.files.files) && !req.files.files.length : stryMutAct_9fa48("25891") ? false : stryMutAct_9fa48("25890") ? true : (stryCov_9fa48("25890", "25891", "25892"), (stryMutAct_9fa48("25893") ? Array.isArray(req.files.files) : (stryCov_9fa48("25893"), !Array.isArray(req.files.files))) || (stryMutAct_9fa48("25894") ? req.files.files.length : (stryCov_9fa48("25894"), !req.files.files.length)))) {
      if (stryMutAct_9fa48("25895")) {
        {}
      } else {
        stryCov_9fa48("25895");
        return next(new Error(stryMutAct_9fa48("25896") ? [] : (stryCov_9fa48("25896"), [stryMutAct_9fa48("25897") ? "" : (stryCov_9fa48("25897"), '[[error:invalid-files]]')])));
      }
    }
    next();
  }
};
middleware.prepareAPI = function prepareAPI(req, res, next) {
  if (stryMutAct_9fa48("25898")) {
    {}
  } else {
    stryCov_9fa48("25898");
    res.locals.isAPI = stryMutAct_9fa48("25899") ? false : (stryCov_9fa48("25899"), true);
    next();
  }
};
middleware.routeTouchIcon = function routeTouchIcon(req, res) {
  if (stryMutAct_9fa48("25900")) {
    {}
  } else {
    stryCov_9fa48("25900");
    if (stryMutAct_9fa48("25903") ? meta.config['brand:touchIcon'] || validator.isURL(meta.config['brand:touchIcon']) : stryMutAct_9fa48("25902") ? false : stryMutAct_9fa48("25901") ? true : (stryCov_9fa48("25901", "25902", "25903"), meta.config[stryMutAct_9fa48("25904") ? "" : (stryCov_9fa48("25904"), 'brand:touchIcon')] && validator.isURL(meta.config[stryMutAct_9fa48("25905") ? "" : (stryCov_9fa48("25905"), 'brand:touchIcon')]))) {
      if (stryMutAct_9fa48("25906")) {
        {}
      } else {
        stryCov_9fa48("25906");
        return res.redirect(meta.config[stryMutAct_9fa48("25907") ? "" : (stryCov_9fa48("25907"), 'brand:touchIcon')]);
      }
    }
    let iconPath = stryMutAct_9fa48("25908") ? "Stryker was here!" : (stryCov_9fa48("25908"), '');
    if (stryMutAct_9fa48("25910") ? false : stryMutAct_9fa48("25909") ? true : (stryCov_9fa48("25909", "25910"), meta.config[stryMutAct_9fa48("25911") ? "" : (stryCov_9fa48("25911"), 'brand:touchIcon')])) {
      if (stryMutAct_9fa48("25912")) {
        {}
      } else {
        stryCov_9fa48("25912");
        iconPath = path.join(nconf.get(stryMutAct_9fa48("25913") ? "" : (stryCov_9fa48("25913"), 'upload_path')), meta.config[stryMutAct_9fa48("25914") ? "" : (stryCov_9fa48("25914"), 'brand:touchIcon')].replace(/assets\/uploads/, stryMutAct_9fa48("25915") ? "Stryker was here!" : (stryCov_9fa48("25915"), '')));
      }
    } else {
      if (stryMutAct_9fa48("25916")) {
        {}
      } else {
        stryCov_9fa48("25916");
        iconPath = path.join(nconf.get(stryMutAct_9fa48("25917") ? "" : (stryCov_9fa48("25917"), 'base_dir')), stryMutAct_9fa48("25918") ? "" : (stryCov_9fa48("25918"), 'public/images/touch/512.png'));
      }
    }
    return res.sendFile(iconPath, stryMutAct_9fa48("25919") ? {} : (stryCov_9fa48("25919"), {
      maxAge: req.app.enabled(stryMutAct_9fa48("25920") ? "" : (stryCov_9fa48("25920"), 'cache')) ? 5184000000 : 0
    }));
  }
};
middleware.privateTagListing = helpers.try(async (req, res, next) => {
  if (stryMutAct_9fa48("25921")) {
    {}
  } else {
    stryCov_9fa48("25921");
    const canView = await privileges.global.can(stryMutAct_9fa48("25922") ? "" : (stryCov_9fa48("25922"), 'view:tags'), req.uid);
    if (stryMutAct_9fa48("25925") ? false : stryMutAct_9fa48("25924") ? true : stryMutAct_9fa48("25923") ? canView : (stryCov_9fa48("25923", "25924", "25925"), !canView)) {
      if (stryMutAct_9fa48("25926")) {
        {}
      } else {
        stryCov_9fa48("25926");
        return controllers.helpers.notAllowed(req, res);
      }
    }
    next();
  }
});
middleware.exposeGroupName = helpers.try(async (req, res, next) => {
  if (stryMutAct_9fa48("25927")) {
    {}
  } else {
    stryCov_9fa48("25927");
    await expose(stryMutAct_9fa48("25928") ? "" : (stryCov_9fa48("25928"), 'groupName'), groups.getGroupNameByGroupSlug, stryMutAct_9fa48("25929") ? "" : (stryCov_9fa48("25929"), 'slug'), req, res, next);
  }
});
middleware.exposeUid = helpers.try(async (req, res, next) => {
  if (stryMutAct_9fa48("25930")) {
    {}
  } else {
    stryCov_9fa48("25930");
    await expose(stryMutAct_9fa48("25931") ? "" : (stryCov_9fa48("25931"), 'uid'), user.getUidByUserslug, stryMutAct_9fa48("25932") ? "" : (stryCov_9fa48("25932"), 'userslug'), req, res, next);
  }
});
async function expose(exposedField, method, field, req, res, next) {
  if (stryMutAct_9fa48("25933")) {
    {}
  } else {
    stryCov_9fa48("25933");
    if (stryMutAct_9fa48("25936") ? false : stryMutAct_9fa48("25935") ? true : stryMutAct_9fa48("25934") ? req.params.hasOwnProperty(field) : (stryCov_9fa48("25934", "25935", "25936"), !req.params.hasOwnProperty(field))) {
      if (stryMutAct_9fa48("25937")) {
        {}
      } else {
        stryCov_9fa48("25937");
        return next();
      }
    }
    res.locals[exposedField] = await method(req.params[field]);
    next();
  }
}
middleware.privateUploads = function privateUploads(req, res, next) {
  if (stryMutAct_9fa48("25938")) {
    {}
  } else {
    stryCov_9fa48("25938");
    if (stryMutAct_9fa48("25941") ? req.loggedIn && !meta.config.privateUploads : stryMutAct_9fa48("25940") ? false : stryMutAct_9fa48("25939") ? true : (stryCov_9fa48("25939", "25940", "25941"), req.loggedIn || (stryMutAct_9fa48("25942") ? meta.config.privateUploads : (stryCov_9fa48("25942"), !meta.config.privateUploads)))) {
      if (stryMutAct_9fa48("25943")) {
        {}
      } else {
        stryCov_9fa48("25943");
        return next();
      }
    }
    if (stryMutAct_9fa48("25946") ? req.path.endsWith(`${nconf.get('relative_path')}/assets/uploads/files`) : stryMutAct_9fa48("25945") ? false : stryMutAct_9fa48("25944") ? true : (stryCov_9fa48("25944", "25945", "25946"), req.path.startsWith(stryMutAct_9fa48("25947") ? `` : (stryCov_9fa48("25947"), `${nconf.get(stryMutAct_9fa48("25948") ? "" : (stryCov_9fa48("25948"), 'relative_path'))}/assets/uploads/files`)))) {
      if (stryMutAct_9fa48("25949")) {
        {}
      } else {
        stryCov_9fa48("25949");
        const extensions = stryMutAct_9fa48("25950") ? (meta.config.privateUploadsExtensions || '').split(',') : (stryCov_9fa48("25950"), (stryMutAct_9fa48("25953") ? meta.config.privateUploadsExtensions && '' : stryMutAct_9fa48("25952") ? false : stryMutAct_9fa48("25951") ? true : (stryCov_9fa48("25951", "25952", "25953"), meta.config.privateUploadsExtensions || (stryMutAct_9fa48("25954") ? "Stryker was here!" : (stryCov_9fa48("25954"), '')))).split(stryMutAct_9fa48("25955") ? "" : (stryCov_9fa48("25955"), ',')).filter(Boolean));
        let ext = path.extname(req.path);
        ext = ext ? ext.replace(stryMutAct_9fa48("25956") ? /\./ : (stryCov_9fa48("25956"), /^\./), stryMutAct_9fa48("25957") ? "Stryker was here!" : (stryCov_9fa48("25957"), '')) : ext;
        if (stryMutAct_9fa48("25960") ? !extensions.length && extensions.includes(ext) : stryMutAct_9fa48("25959") ? false : stryMutAct_9fa48("25958") ? true : (stryCov_9fa48("25958", "25959", "25960"), (stryMutAct_9fa48("25961") ? extensions.length : (stryCov_9fa48("25961"), !extensions.length)) || extensions.includes(ext))) {
          if (stryMutAct_9fa48("25962")) {
            {}
          } else {
            stryCov_9fa48("25962");
            return res.status(403).json(stryMutAct_9fa48("25963") ? "" : (stryCov_9fa48("25963"), 'not-allowed'));
          }
        }
      }
    }
    next();
  }
};
middleware.busyCheck = function busyCheck(req, res, next) {
  if (stryMutAct_9fa48("25964")) {
    {}
  } else {
    stryCov_9fa48("25964");
    if (stryMutAct_9fa48("25967") ? global.env === 'production' && meta.config.eventLoopCheckEnabled || toobusy() : stryMutAct_9fa48("25966") ? false : stryMutAct_9fa48("25965") ? true : (stryCov_9fa48("25965", "25966", "25967"), (stryMutAct_9fa48("25969") ? global.env === 'production' || meta.config.eventLoopCheckEnabled : stryMutAct_9fa48("25968") ? true : (stryCov_9fa48("25968", "25969"), (stryMutAct_9fa48("25971") ? global.env !== 'production' : stryMutAct_9fa48("25970") ? true : (stryCov_9fa48("25970", "25971"), global.env === (stryMutAct_9fa48("25972") ? "" : (stryCov_9fa48("25972"), 'production')))) && meta.config.eventLoopCheckEnabled)) && toobusy())) {
      if (stryMutAct_9fa48("25973")) {
        {}
      } else {
        stryCov_9fa48("25973");
        analytics.increment(stryMutAct_9fa48("25974") ? "" : (stryCov_9fa48("25974"), 'errors:503'));
        res.status(503).type(stryMutAct_9fa48("25975") ? "" : (stryCov_9fa48("25975"), 'text/html')).sendFile(path.join(__dirname, stryMutAct_9fa48("25976") ? "" : (stryCov_9fa48("25976"), '../../public/503.html')));
      }
    } else {
      if (stryMutAct_9fa48("25977")) {
        {}
      } else {
        stryCov_9fa48("25977");
        setImmediate(next);
      }
    }
  }
};
middleware.applyBlacklist = async function applyBlacklist(req, res, next) {
  if (stryMutAct_9fa48("25978")) {
    {}
  } else {
    stryCov_9fa48("25978");
    try {
      if (stryMutAct_9fa48("25979")) {
        {}
      } else {
        stryCov_9fa48("25979");
        await meta.blacklist.test(req.ip);
        next();
      }
    } catch (err) {
      if (stryMutAct_9fa48("25980")) {
        {}
      } else {
        stryCov_9fa48("25980");
        next(err);
      }
    }
  }
};
middleware.delayLoading = function delayLoading(req, res, next) {
  if (stryMutAct_9fa48("25981")) {
    {}
  } else {
    stryCov_9fa48("25981");
    // Introduces an artificial delay during load so that brute force attacks are effectively mitigated

    // Add IP to cache so if too many requests are made, subsequent requests are blocked for a minute
    let timesSeen = stryMutAct_9fa48("25984") ? delayCache.get(req.ip) && 0 : stryMutAct_9fa48("25983") ? false : stryMutAct_9fa48("25982") ? true : (stryCov_9fa48("25982", "25983", "25984"), delayCache.get(req.ip) || 0);
    if (stryMutAct_9fa48("25988") ? timesSeen <= 10 : stryMutAct_9fa48("25987") ? timesSeen >= 10 : stryMutAct_9fa48("25986") ? false : stryMutAct_9fa48("25985") ? true : (stryCov_9fa48("25985", "25986", "25987", "25988"), timesSeen > 10)) {
      if (stryMutAct_9fa48("25989")) {
        {}
      } else {
        stryCov_9fa48("25989");
        return res.sendStatus(429);
      }
    }
    delayCache.set(req.ip, stryMutAct_9fa48("25990") ? timesSeen -= 1 : (stryCov_9fa48("25990"), timesSeen += 1));
    setTimeout(next, 1000);
  }
};
middleware.buildSkinAsset = helpers.try(async (req, res, next) => {
  if (stryMutAct_9fa48("25991")) {
    {}
  } else {
    stryCov_9fa48("25991");
    // If this middleware is reached, a skin was requested, so it is built on-demand
    const target = path.basename(req.originalUrl).match(stryMutAct_9fa48("25993") ? /(client-[^a-z]+)/ : stryMutAct_9fa48("25992") ? /(client-[a-z])/ : (stryCov_9fa48("25992", "25993"), /(client-[a-z]+)/));
    if (stryMutAct_9fa48("25996") ? false : stryMutAct_9fa48("25995") ? true : stryMutAct_9fa48("25994") ? target : (stryCov_9fa48("25994", "25995", "25996"), !target)) {
      if (stryMutAct_9fa48("25997")) {
        {}
      } else {
        stryCov_9fa48("25997");
        return next();
      }
    }
    await plugins.prepareForBuild(stryMutAct_9fa48("25998") ? [] : (stryCov_9fa48("25998"), [stryMutAct_9fa48("25999") ? "" : (stryCov_9fa48("25999"), 'client side styles')]));
    const css = await meta.css.buildBundle(target[0], stryMutAct_9fa48("26000") ? false : (stryCov_9fa48("26000"), true));
    require('../meta/minifier').killAll();
    res.status(200).type(stryMutAct_9fa48("26001") ? "" : (stryCov_9fa48("26001"), 'text/css')).send(css);
  }
});
middleware.addUploadHeaders = function addUploadHeaders(req, res, next) {
  if (stryMutAct_9fa48("26002")) {
    {}
  } else {
    stryCov_9fa48("26002");
    // Trim uploaded files' timestamps when downloading + force download if html
    let basename = path.basename(req.path);
    const extname = path.extname(req.path);
    if (stryMutAct_9fa48("26005") ? req.path.startsWith('/uploads/files/') || middleware.regexes.timestampedUpload.test(basename) : stryMutAct_9fa48("26004") ? false : stryMutAct_9fa48("26003") ? true : (stryCov_9fa48("26003", "26004", "26005"), (stryMutAct_9fa48("26006") ? req.path.endsWith('/uploads/files/') : (stryCov_9fa48("26006"), req.path.startsWith(stryMutAct_9fa48("26007") ? "" : (stryCov_9fa48("26007"), '/uploads/files/')))) && middleware.regexes.timestampedUpload.test(basename))) {
      if (stryMutAct_9fa48("26008")) {
        {}
      } else {
        stryCov_9fa48("26008");
        basename = stryMutAct_9fa48("26009") ? basename : (stryCov_9fa48("26009"), basename.slice(14));
        res.header(stryMutAct_9fa48("26010") ? "" : (stryCov_9fa48("26010"), 'Content-Disposition'), stryMutAct_9fa48("26011") ? `` : (stryCov_9fa48("26011"), `${(stryMutAct_9fa48("26012") ? extname.endsWith('.htm') : (stryCov_9fa48("26012"), extname.startsWith(stryMutAct_9fa48("26013") ? "" : (stryCov_9fa48("26013"), '.htm')))) ? stryMutAct_9fa48("26014") ? "" : (stryCov_9fa48("26014"), 'attachment') : stryMutAct_9fa48("26015") ? "" : (stryCov_9fa48("26015"), 'inline')}; filename="${basename}"`));
      }
    }
    next();
  }
};
middleware.validateAuth = helpers.try(async (req, res, next) => {
  if (stryMutAct_9fa48("26016")) {
    {}
  } else {
    stryCov_9fa48("26016");
    try {
      if (stryMutAct_9fa48("26017")) {
        {}
      } else {
        stryCov_9fa48("26017");
        await plugins.hooks.fire(stryMutAct_9fa48("26018") ? "" : (stryCov_9fa48("26018"), 'static:auth.validate'), stryMutAct_9fa48("26019") ? {} : (stryCov_9fa48("26019"), {
          user: res.locals.user,
          strategy: res.locals.strategy
        }));
        next();
      }
    } catch (err) {
      if (stryMutAct_9fa48("26020")) {
        {}
      } else {
        stryCov_9fa48("26020");
        const regenerateSession = util.promisify(stryMutAct_9fa48("26021") ? () => undefined : (stryCov_9fa48("26021"), cb => req.session.regenerate(cb)));
        await regenerateSession();
        req.uid = 0;
        req.loggedIn = stryMutAct_9fa48("26022") ? true : (stryCov_9fa48("26022"), false);
        next(err);
      }
    }
  }
});
middleware.checkRequired = function (fields, req, res, next) {
  if (stryMutAct_9fa48("26023")) {
    {}
  } else {
    stryCov_9fa48("26023");
    // Used in API calls to ensure that necessary parameters/data values are present
    const missing = stryMutAct_9fa48("26024") ? fields : (stryCov_9fa48("26024"), fields.filter(stryMutAct_9fa48("26025") ? () => undefined : (stryCov_9fa48("26025"), field => stryMutAct_9fa48("26026") ? req.body.hasOwnProperty(field) : (stryCov_9fa48("26026"), !req.body.hasOwnProperty(field)))));
    if (stryMutAct_9fa48("26029") ? false : stryMutAct_9fa48("26028") ? true : stryMutAct_9fa48("26027") ? missing.length : (stryCov_9fa48("26027", "26028", "26029"), !missing.length)) {
      if (stryMutAct_9fa48("26030")) {
        {}
      } else {
        stryCov_9fa48("26030");
        return next();
      }
    }
    controllers.helpers.formatApiResponse(400, res, new Error(stryMutAct_9fa48("26031") ? `` : (stryCov_9fa48("26031"), `[[error:required-parameters-missing, ${missing.join(stryMutAct_9fa48("26032") ? "" : (stryCov_9fa48("26032"), ' '))}]]`)));
  }
};