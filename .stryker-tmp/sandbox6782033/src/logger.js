// @ts-nocheck
'use strict';

/*
 * Logger module: ability to dynamically turn on/off logging for http requests & socket.io events
 */
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
const path = require('path');
const winston = require('winston');
const util = require('util');
const morgan = require('morgan');
const file = require('./file');
const meta = require('./meta');
const opts = stryMutAct_9fa48("22043") ? {} : (stryCov_9fa48("22043"), {
  /*
   * state used by Logger
   */
  express: stryMutAct_9fa48("22044") ? {} : (stryCov_9fa48("22044"), {
    app: {},
    set: 0,
    ofn: null
  }),
  streams: stryMutAct_9fa48("22045") ? {} : (stryCov_9fa48("22045"), {
    log: stryMutAct_9fa48("22046") ? {} : (stryCov_9fa48("22046"), {
      f: process.stdout
    })
  })
});

/* -- Logger -- */
const Logger = module.exports;
Logger.init = function (app) {
  if (stryMutAct_9fa48("22047")) {
    {}
  } else {
    stryCov_9fa48("22047");
    opts.express.app = app;
    /* Open log file stream & initialize express logging if meta.config.logger* variables are set */
    Logger.setup();
  }
};
Logger.setup = function () {
  if (stryMutAct_9fa48("22048")) {
    {}
  } else {
    stryCov_9fa48("22048");
    Logger.setup_one(stryMutAct_9fa48("22049") ? "" : (stryCov_9fa48("22049"), 'loggerPath'), meta.config.loggerPath);
  }
};
Logger.setup_one = function (key, value) {
  if (stryMutAct_9fa48("22050")) {
    {}
  } else {
    stryCov_9fa48("22050");
    /*
     * 1. Open the logger stream: stdout or file
     * 2. Re-initialize the express logger hijack
     */
    if (stryMutAct_9fa48("22053") ? key !== 'loggerPath' : stryMutAct_9fa48("22052") ? false : stryMutAct_9fa48("22051") ? true : (stryCov_9fa48("22051", "22052", "22053"), key === (stryMutAct_9fa48("22054") ? "" : (stryCov_9fa48("22054"), 'loggerPath')))) {
      if (stryMutAct_9fa48("22055")) {
        {}
      } else {
        stryCov_9fa48("22055");
        Logger.setup_one_log(value);
        Logger.express_open();
      }
    }
  }
};
Logger.setup_one_log = function (value) {
  if (stryMutAct_9fa48("22056")) {
    {}
  } else {
    stryCov_9fa48("22056");
    /*
     * If logging is currently enabled, create a stream.
     * Otherwise, close the current stream
     */
    if (stryMutAct_9fa48("22059") ? meta.config.loggerStatus > 0 && meta.config.loggerIOStatus : stryMutAct_9fa48("22058") ? false : stryMutAct_9fa48("22057") ? true : (stryCov_9fa48("22057", "22058", "22059"), (stryMutAct_9fa48("22062") ? meta.config.loggerStatus <= 0 : stryMutAct_9fa48("22061") ? meta.config.loggerStatus >= 0 : stryMutAct_9fa48("22060") ? false : (stryCov_9fa48("22060", "22061", "22062"), meta.config.loggerStatus > 0)) || meta.config.loggerIOStatus)) {
      if (stryMutAct_9fa48("22063")) {
        {}
      } else {
        stryCov_9fa48("22063");
        const stream = Logger.open(value);
        if (stryMutAct_9fa48("22065") ? false : stryMutAct_9fa48("22064") ? true : (stryCov_9fa48("22064", "22065"), stream)) {
          if (stryMutAct_9fa48("22066")) {
            {}
          } else {
            stryCov_9fa48("22066");
            opts.streams.log.f = stream;
          }
        } else {
          if (stryMutAct_9fa48("22067")) {
            {}
          } else {
            stryCov_9fa48("22067");
            opts.streams.log.f = process.stdout;
          }
        }
      }
    } else {
      if (stryMutAct_9fa48("22068")) {
        {}
      } else {
        stryCov_9fa48("22068");
        Logger.close(opts.streams.log);
      }
    }
  }
};
Logger.open = function (value) {
  if (stryMutAct_9fa48("22069")) {
    {}
  } else {
    stryCov_9fa48("22069");
    /* Open the streams to log to: either a path or stdout */
    let stream;
    if (stryMutAct_9fa48("22071") ? false : stryMutAct_9fa48("22070") ? true : (stryCov_9fa48("22070", "22071"), value)) {
      if (stryMutAct_9fa48("22072")) {
        {}
      } else {
        stryCov_9fa48("22072");
        if (stryMutAct_9fa48("22074") ? false : stryMutAct_9fa48("22073") ? true : (stryCov_9fa48("22073", "22074"), file.existsSync(value))) {
          if (stryMutAct_9fa48("22075")) {
            {}
          } else {
            stryCov_9fa48("22075");
            const stats = fs.statSync(value);
            if (stryMutAct_9fa48("22077") ? false : stryMutAct_9fa48("22076") ? true : (stryCov_9fa48("22076", "22077"), stats)) {
              if (stryMutAct_9fa48("22078")) {
                {}
              } else {
                stryCov_9fa48("22078");
                if (stryMutAct_9fa48("22080") ? false : stryMutAct_9fa48("22079") ? true : (stryCov_9fa48("22079", "22080"), stats.isDirectory())) {
                  if (stryMutAct_9fa48("22081")) {
                    {}
                  } else {
                    stryCov_9fa48("22081");
                    stream = fs.createWriteStream(path.join(value, stryMutAct_9fa48("22082") ? "" : (stryCov_9fa48("22082"), 'nodebb.log')), stryMutAct_9fa48("22083") ? {} : (stryCov_9fa48("22083"), {
                      flags: stryMutAct_9fa48("22084") ? "" : (stryCov_9fa48("22084"), 'a')
                    }));
                  }
                } else {
                  if (stryMutAct_9fa48("22085")) {
                    {}
                  } else {
                    stryCov_9fa48("22085");
                    stream = fs.createWriteStream(value, stryMutAct_9fa48("22086") ? {} : (stryCov_9fa48("22086"), {
                      flags: stryMutAct_9fa48("22087") ? "" : (stryCov_9fa48("22087"), 'a')
                    }));
                  }
                }
              }
            }
          }
        } else {
          if (stryMutAct_9fa48("22088")) {
            {}
          } else {
            stryCov_9fa48("22088");
            stream = fs.createWriteStream(value, stryMutAct_9fa48("22089") ? {} : (stryCov_9fa48("22089"), {
              flags: stryMutAct_9fa48("22090") ? "" : (stryCov_9fa48("22090"), 'a')
            }));
          }
        }
        if (stryMutAct_9fa48("22092") ? false : stryMutAct_9fa48("22091") ? true : (stryCov_9fa48("22091", "22092"), stream)) {
          if (stryMutAct_9fa48("22093")) {
            {}
          } else {
            stryCov_9fa48("22093");
            stream.on(stryMutAct_9fa48("22094") ? "" : (stryCov_9fa48("22094"), 'error'), err => {
              if (stryMutAct_9fa48("22095")) {
                {}
              } else {
                stryCov_9fa48("22095");
                winston.error(err.stack);
              }
            });
          }
        }
      }
    } else {
      if (stryMutAct_9fa48("22096")) {
        {}
      } else {
        stryCov_9fa48("22096");
        stream = process.stdout;
      }
    }
    return stream;
  }
};
Logger.close = function (stream) {
  if (stryMutAct_9fa48("22097")) {
    {}
  } else {
    stryCov_9fa48("22097");
    if (stryMutAct_9fa48("22100") ? stream.f !== process.stdout || stream.f : stryMutAct_9fa48("22099") ? false : stryMutAct_9fa48("22098") ? true : (stryCov_9fa48("22098", "22099", "22100"), (stryMutAct_9fa48("22102") ? stream.f === process.stdout : stryMutAct_9fa48("22101") ? true : (stryCov_9fa48("22101", "22102"), stream.f !== process.stdout)) && stream.f)) {
      if (stryMutAct_9fa48("22103")) {
        {}
      } else {
        stryCov_9fa48("22103");
        stream.end();
      }
    }
    stream.f = null;
  }
};
Logger.monitorConfig = function (socket, data) {
  if (stryMutAct_9fa48("22104")) {
    {}
  } else {
    stryCov_9fa48("22104");
    /*
     * This monitor's when a user clicks "save" in the Logger section of the admin panel
     */
    Logger.setup_one(data.key, data.value);
    Logger.io_close(socket);
    Logger.io(socket);
  }
};
Logger.express_open = function () {
  if (stryMutAct_9fa48("22105")) {
    {}
  } else {
    stryCov_9fa48("22105");
    if (stryMutAct_9fa48("22108") ? opts.express.set === 1 : stryMutAct_9fa48("22107") ? false : stryMutAct_9fa48("22106") ? true : (stryCov_9fa48("22106", "22107", "22108"), opts.express.set !== 1)) {
      if (stryMutAct_9fa48("22109")) {
        {}
      } else {
        stryCov_9fa48("22109");
        opts.express.set = 1;
        opts.express.app.use(Logger.expressLogger);
      }
    }
    /*
     * Always initialize "ofn" (original function) with the original logger function
     */
    opts.express.ofn = morgan(stryMutAct_9fa48("22110") ? "" : (stryCov_9fa48("22110"), 'combined'), stryMutAct_9fa48("22111") ? {} : (stryCov_9fa48("22111"), {
      stream: opts.streams.log.f
    }));
  }
};
Logger.expressLogger = function (req, res, next) {
  if (stryMutAct_9fa48("22112")) {
    {}
  } else {
    stryCov_9fa48("22112");
    /*
     * The new express.logger
     *
     * This hijack allows us to turn logger on/off dynamically within express
     */
    if (stryMutAct_9fa48("22116") ? meta.config.loggerStatus <= 0 : stryMutAct_9fa48("22115") ? meta.config.loggerStatus >= 0 : stryMutAct_9fa48("22114") ? false : stryMutAct_9fa48("22113") ? true : (stryCov_9fa48("22113", "22114", "22115", "22116"), meta.config.loggerStatus > 0)) {
      if (stryMutAct_9fa48("22117")) {
        {}
      } else {
        stryCov_9fa48("22117");
        return opts.express.ofn(req, res, next);
      }
    }
    return next();
  }
};
Logger.prepare_io_string = function (_type, _uid, _args) {
  if (stryMutAct_9fa48("22118")) {
    {}
  } else {
    stryCov_9fa48("22118");
    /*
     * This prepares the output string for intercepted socket.io events
     *
     * The format is: io: <uid> <event> <args>
     */
    try {
      if (stryMutAct_9fa48("22119")) {
        {}
      } else {
        stryCov_9fa48("22119");
        return stryMutAct_9fa48("22120") ? `` : (stryCov_9fa48("22120"), `io: ${_uid} ${_type} ${util.inspect(Array.prototype.slice.call(_args), stryMutAct_9fa48("22121") ? {} : (stryCov_9fa48("22121"), {
          depth: 3
        }))}\n`);
      }
    } catch (err) {
      if (stryMutAct_9fa48("22122")) {
        {}
      } else {
        stryCov_9fa48("22122");
        winston.info(stryMutAct_9fa48("22123") ? "" : (stryCov_9fa48("22123"), 'Logger.prepare_io_string: Failed'), err);
        return stryMutAct_9fa48("22124") ? "" : (stryCov_9fa48("22124"), 'error');
      }
    }
  }
};
Logger.io_close = function (socket) {
  if (stryMutAct_9fa48("22125")) {
    {}
  } else {
    stryCov_9fa48("22125");
    /*
     * Restore all hijacked sockets to their original emit/on functions
     */
    if (stryMutAct_9fa48("22128") ? (!socket || !socket.io || !socket.io.sockets) && !socket.io.sockets.sockets : stryMutAct_9fa48("22127") ? false : stryMutAct_9fa48("22126") ? true : (stryCov_9fa48("22126", "22127", "22128"), (stryMutAct_9fa48("22130") ? (!socket || !socket.io) && !socket.io.sockets : stryMutAct_9fa48("22129") ? false : (stryCov_9fa48("22129", "22130"), (stryMutAct_9fa48("22132") ? !socket && !socket.io : stryMutAct_9fa48("22131") ? false : (stryCov_9fa48("22131", "22132"), (stryMutAct_9fa48("22133") ? socket : (stryCov_9fa48("22133"), !socket)) || (stryMutAct_9fa48("22134") ? socket.io : (stryCov_9fa48("22134"), !socket.io)))) || (stryMutAct_9fa48("22135") ? socket.io.sockets : (stryCov_9fa48("22135"), !socket.io.sockets)))) || (stryMutAct_9fa48("22136") ? socket.io.sockets.sockets : (stryCov_9fa48("22136"), !socket.io.sockets.sockets)))) {
      if (stryMutAct_9fa48("22137")) {
        {}
      } else {
        stryCov_9fa48("22137");
        return;
      }
    }
    const clientsMap = socket.io.sockets.sockets;
    for (const [, client] of clientsMap) {
      if (stryMutAct_9fa48("22138")) {
        {}
      } else {
        stryCov_9fa48("22138");
        if (stryMutAct_9fa48("22141") ? client.oEmit || client.oEmit !== client.emit : stryMutAct_9fa48("22140") ? false : stryMutAct_9fa48("22139") ? true : (stryCov_9fa48("22139", "22140", "22141"), client.oEmit && (stryMutAct_9fa48("22143") ? client.oEmit === client.emit : stryMutAct_9fa48("22142") ? true : (stryCov_9fa48("22142", "22143"), client.oEmit !== client.emit)))) {
          if (stryMutAct_9fa48("22144")) {
            {}
          } else {
            stryCov_9fa48("22144");
            client.emit = client.oEmit;
          }
        }
        if (stryMutAct_9fa48("22147") ? client.$onevent || client.$onevent !== client.onevent : stryMutAct_9fa48("22146") ? false : stryMutAct_9fa48("22145") ? true : (stryCov_9fa48("22145", "22146", "22147"), client.$onevent && (stryMutAct_9fa48("22149") ? client.$onevent === client.onevent : stryMutAct_9fa48("22148") ? true : (stryCov_9fa48("22148", "22149"), client.$onevent !== client.onevent)))) {
          if (stryMutAct_9fa48("22150")) {
            {}
          } else {
            stryCov_9fa48("22150");
            client.onevent = client.$onevent;
          }
        }
      }
    }
  }
};
Logger.io = function (socket) {
  if (stryMutAct_9fa48("22151")) {
    {}
  } else {
    stryCov_9fa48("22151");
    /*
     * Go through all of the currently established sockets & hook their .emit/.on
     */

    if (stryMutAct_9fa48("22154") ? (!socket || !socket.io || !socket.io.sockets) && !socket.io.sockets.sockets : stryMutAct_9fa48("22153") ? false : stryMutAct_9fa48("22152") ? true : (stryCov_9fa48("22152", "22153", "22154"), (stryMutAct_9fa48("22156") ? (!socket || !socket.io) && !socket.io.sockets : stryMutAct_9fa48("22155") ? false : (stryCov_9fa48("22155", "22156"), (stryMutAct_9fa48("22158") ? !socket && !socket.io : stryMutAct_9fa48("22157") ? false : (stryCov_9fa48("22157", "22158"), (stryMutAct_9fa48("22159") ? socket : (stryCov_9fa48("22159"), !socket)) || (stryMutAct_9fa48("22160") ? socket.io : (stryCov_9fa48("22160"), !socket.io)))) || (stryMutAct_9fa48("22161") ? socket.io.sockets : (stryCov_9fa48("22161"), !socket.io.sockets)))) || (stryMutAct_9fa48("22162") ? socket.io.sockets.sockets : (stryCov_9fa48("22162"), !socket.io.sockets.sockets)))) {
      if (stryMutAct_9fa48("22163")) {
        {}
      } else {
        stryCov_9fa48("22163");
        return;
      }
    }
    const clientsMap = socket.io.sockets.sockets;
    for (const [, socketObj] of clientsMap) {
      if (stryMutAct_9fa48("22164")) {
        {}
      } else {
        stryCov_9fa48("22164");
        Logger.io_one(socketObj, socketObj.uid);
      }
    }
  }
};
Logger.io_one = function (socket, uid) {
  if (stryMutAct_9fa48("22165")) {
    {}
  } else {
    stryCov_9fa48("22165");
    /*
     * This function replaces a socket's .emit/.on functions in order to intercept events
     */
    function override(method, name, errorMsg) {
      if (stryMutAct_9fa48("22166")) {
        {}
      } else {
        stryCov_9fa48("22166");
        return (...args) => {
          if (stryMutAct_9fa48("22167")) {
            {}
          } else {
            stryCov_9fa48("22167");
            if (stryMutAct_9fa48("22169") ? false : stryMutAct_9fa48("22168") ? true : (stryCov_9fa48("22168", "22169"), opts.streams.log.f)) {
              if (stryMutAct_9fa48("22170")) {
                {}
              } else {
                stryCov_9fa48("22170");
                opts.streams.log.f.write(Logger.prepare_io_string(name, uid, args));
              }
            }
            try {
              if (stryMutAct_9fa48("22171")) {
                {}
              } else {
                stryCov_9fa48("22171");
                method.apply(socket, args);
              }
            } catch (err) {
              if (stryMutAct_9fa48("22172")) {
                {}
              } else {
                stryCov_9fa48("22172");
                winston.info(errorMsg, err);
              }
            }
          }
        };
      }
    }
    if (stryMutAct_9fa48("22175") ? socket || meta.config.loggerIOStatus > 0 : stryMutAct_9fa48("22174") ? false : stryMutAct_9fa48("22173") ? true : (stryCov_9fa48("22173", "22174", "22175"), socket && (stryMutAct_9fa48("22178") ? meta.config.loggerIOStatus <= 0 : stryMutAct_9fa48("22177") ? meta.config.loggerIOStatus >= 0 : stryMutAct_9fa48("22176") ? true : (stryCov_9fa48("22176", "22177", "22178"), meta.config.loggerIOStatus > 0)))) {
      if (stryMutAct_9fa48("22179")) {
        {}
      } else {
        stryCov_9fa48("22179");
        // courtesy of: http://stackoverflow.com/a/9674248
        socket.oEmit = socket.emit;
        const {
          emit
        } = socket;
        socket.emit = override(emit, stryMutAct_9fa48("22180") ? "" : (stryCov_9fa48("22180"), 'emit'), stryMutAct_9fa48("22181") ? "" : (stryCov_9fa48("22181"), 'Logger.io_one: emit.apply: Failed'));
        socket.$onvent = socket.onevent;
        const $onevent = socket.onevent;
        socket.onevent = override($onevent, stryMutAct_9fa48("22182") ? "" : (stryCov_9fa48("22182"), 'on'), stryMutAct_9fa48("22183") ? "" : (stryCov_9fa48("22183"), 'Logger.io_one: $emit.apply: Failed'));
      }
    }
  }
};