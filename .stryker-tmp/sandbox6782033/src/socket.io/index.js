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
const os = require('os');
const nconf = require('nconf');
const winston = require('winston');
const util = require('util');
const validator = require('validator');
const cookieParser = require('cookie-parser')(nconf.get(stryMutAct_9fa48("35992") ? "" : (stryCov_9fa48("35992"), 'secret')));
const db = require('../database');
const user = require('../user');
const logger = require('../logger');
const plugins = require('../plugins');
const ratelimit = require('../middleware/ratelimit');
const Namespaces = Object.create(null);
const Sockets = module.exports;
Sockets.init = async function (server) {
  if (stryMutAct_9fa48("35993")) {
    {}
  } else {
    stryCov_9fa48("35993");
    requireModules();
    const SocketIO = require('socket.io').Server;
    const io = new SocketIO(stryMutAct_9fa48("35994") ? {} : (stryCov_9fa48("35994"), {
      path: stryMutAct_9fa48("35995") ? `` : (stryCov_9fa48("35995"), `${nconf.get(stryMutAct_9fa48("35996") ? "" : (stryCov_9fa48("35996"), 'relative_path'))}/socket.io`)
    }));
    if (stryMutAct_9fa48("35998") ? false : stryMutAct_9fa48("35997") ? true : (stryCov_9fa48("35997", "35998"), nconf.get(stryMutAct_9fa48("35999") ? "" : (stryCov_9fa48("35999"), 'isCluster')))) {
      if (stryMutAct_9fa48("36000")) {
        {}
      } else {
        stryCov_9fa48("36000");
        if (stryMutAct_9fa48("36002") ? false : stryMutAct_9fa48("36001") ? true : (stryCov_9fa48("36001", "36002"), nconf.get(stryMutAct_9fa48("36003") ? "" : (stryCov_9fa48("36003"), 'redis')))) {
          if (stryMutAct_9fa48("36004")) {
            {}
          } else {
            stryCov_9fa48("36004");
            const adapter = await require('../database/redis').socketAdapter();
            io.adapter(adapter);
          }
        } else {
          if (stryMutAct_9fa48("36005")) {
            {}
          } else {
            stryCov_9fa48("36005");
            winston.warn(stryMutAct_9fa48("36006") ? "" : (stryCov_9fa48("36006"), 'clustering detected, you should setup redis!'));
          }
        }
      }
    }
    io.use(authorize);
    io.on(stryMutAct_9fa48("36007") ? "" : (stryCov_9fa48("36007"), 'connection'), onConnection);
    const opts = stryMutAct_9fa48("36008") ? {} : (stryCov_9fa48("36008"), {
      transports: stryMutAct_9fa48("36011") ? nconf.get('socket.io:transports') && ['polling', 'websocket'] : stryMutAct_9fa48("36010") ? false : stryMutAct_9fa48("36009") ? true : (stryCov_9fa48("36009", "36010", "36011"), nconf.get(stryMutAct_9fa48("36012") ? "" : (stryCov_9fa48("36012"), 'socket.io:transports')) || (stryMutAct_9fa48("36013") ? [] : (stryCov_9fa48("36013"), [stryMutAct_9fa48("36014") ? "" : (stryCov_9fa48("36014"), 'polling'), stryMutAct_9fa48("36015") ? "" : (stryCov_9fa48("36015"), 'websocket')]))),
      cookie: stryMutAct_9fa48("36016") ? true : (stryCov_9fa48("36016"), false)
    });
    /*
     * Restrict socket.io listener to cookie domain. If none is set, infer based on url.
     * Production only so you don't get accidentally locked out.
     * Can be overridden via config (socket.io:origins)
     */
    if (stryMutAct_9fa48("36019") ? process.env.NODE_ENV !== 'development' && nconf.get('socket.io:cors') : stryMutAct_9fa48("36018") ? false : stryMutAct_9fa48("36017") ? true : (stryCov_9fa48("36017", "36018", "36019"), (stryMutAct_9fa48("36021") ? process.env.NODE_ENV === 'development' : stryMutAct_9fa48("36020") ? false : (stryCov_9fa48("36020", "36021"), process.env.NODE_ENV !== (stryMutAct_9fa48("36022") ? "" : (stryCov_9fa48("36022"), 'development')))) || nconf.get(stryMutAct_9fa48("36023") ? "" : (stryCov_9fa48("36023"), 'socket.io:cors')))) {
      if (stryMutAct_9fa48("36024")) {
        {}
      } else {
        stryCov_9fa48("36024");
        const origins = nconf.get(stryMutAct_9fa48("36025") ? "" : (stryCov_9fa48("36025"), 'socket.io:origins'));
        opts.cors = stryMutAct_9fa48("36028") ? nconf.get('socket.io:cors') && {
          origin: origins,
          methods: ['GET', 'POST'],
          allowedHeaders: ['content-type']
        } : stryMutAct_9fa48("36027") ? false : stryMutAct_9fa48("36026") ? true : (stryCov_9fa48("36026", "36027", "36028"), nconf.get(stryMutAct_9fa48("36029") ? "" : (stryCov_9fa48("36029"), 'socket.io:cors')) || (stryMutAct_9fa48("36030") ? {} : (stryCov_9fa48("36030"), {
          origin: origins,
          methods: stryMutAct_9fa48("36031") ? [] : (stryCov_9fa48("36031"), [stryMutAct_9fa48("36032") ? "" : (stryCov_9fa48("36032"), 'GET'), stryMutAct_9fa48("36033") ? "" : (stryCov_9fa48("36033"), 'POST')]),
          allowedHeaders: stryMutAct_9fa48("36034") ? [] : (stryCov_9fa48("36034"), [stryMutAct_9fa48("36035") ? "" : (stryCov_9fa48("36035"), 'content-type')])
        })));
        winston.info(stryMutAct_9fa48("36036") ? `` : (stryCov_9fa48("36036"), `[socket.io] Restricting access to origin: ${origins}`));
      }
    }
    io.listen(server, opts);
    Sockets.server = io;
  }
};
function onConnection(socket) {
  if (stryMutAct_9fa48("36037")) {
    {}
  } else {
    stryCov_9fa48("36037");
    socket.ip = (stryMutAct_9fa48("36040") ? (socket.request.headers['x-forwarded-for'] || socket.request.connection.remoteAddress) && '' : stryMutAct_9fa48("36039") ? false : stryMutAct_9fa48("36038") ? true : (stryCov_9fa48("36038", "36039", "36040"), (stryMutAct_9fa48("36042") ? socket.request.headers['x-forwarded-for'] && socket.request.connection.remoteAddress : stryMutAct_9fa48("36041") ? false : (stryCov_9fa48("36041", "36042"), socket.request.headers[stryMutAct_9fa48("36043") ? "" : (stryCov_9fa48("36043"), 'x-forwarded-for')] || socket.request.connection.remoteAddress)) || (stryMutAct_9fa48("36044") ? "Stryker was here!" : (stryCov_9fa48("36044"), '')))).split(stryMutAct_9fa48("36045") ? "" : (stryCov_9fa48("36045"), ','))[0];
    socket.request.ip = socket.ip;
    logger.io_one(socket, socket.uid);
    onConnect(socket);
    socket.onAny((event, ...args) => {
      if (stryMutAct_9fa48("36046")) {
        {}
      } else {
        stryCov_9fa48("36046");
        const payload = stryMutAct_9fa48("36047") ? {} : (stryCov_9fa48("36047"), {
          data: (stryMutAct_9fa48("36048") ? [] : (stryCov_9fa48("36048"), [event])).concat(args)
        });
        const als = require('../als');
        als.run(stryMutAct_9fa48("36049") ? {} : (stryCov_9fa48("36049"), {
          uid: socket.uid
        }), onMessage, socket, payload);
      }
    });
    socket.on(stryMutAct_9fa48("36050") ? "" : (stryCov_9fa48("36050"), 'disconnect'), () => {
      if (stryMutAct_9fa48("36051")) {
        {}
      } else {
        stryCov_9fa48("36051");
        onDisconnect(socket);
      }
    });
  }
}
function onDisconnect(socket) {
  if (stryMutAct_9fa48("36052")) {
    {}
  } else {
    stryCov_9fa48("36052");
    require('./uploads').clear(socket.id);
    plugins.hooks.fire(stryMutAct_9fa48("36053") ? "" : (stryCov_9fa48("36053"), 'action:sockets.disconnect'), stryMutAct_9fa48("36054") ? {} : (stryCov_9fa48("36054"), {
      socket: socket
    }));
  }
}
async function onConnect(socket) {
  if (stryMutAct_9fa48("36055")) {
    {}
  } else {
    stryCov_9fa48("36055");
    try {
      if (stryMutAct_9fa48("36056")) {
        {}
      } else {
        stryCov_9fa48("36056");
        await validateSession(socket, stryMutAct_9fa48("36057") ? "" : (stryCov_9fa48("36057"), '[[error:invalid-session]]'));
      }
    } catch (e) {
      if (stryMutAct_9fa48("36058")) {
        {}
      } else {
        stryCov_9fa48("36058");
        if (stryMutAct_9fa48("36061") ? e.message !== '[[error:invalid-session]]' : stryMutAct_9fa48("36060") ? false : stryMutAct_9fa48("36059") ? true : (stryCov_9fa48("36059", "36060", "36061"), e.message === (stryMutAct_9fa48("36062") ? "" : (stryCov_9fa48("36062"), '[[error:invalid-session]]')))) {
          if (stryMutAct_9fa48("36063")) {
            {}
          } else {
            stryCov_9fa48("36063");
            socket.emit(stryMutAct_9fa48("36064") ? "" : (stryCov_9fa48("36064"), 'event:invalid_session'));
          }
        }
        return;
      }
    }
    if (stryMutAct_9fa48("36066") ? false : stryMutAct_9fa48("36065") ? true : (stryCov_9fa48("36065", "36066"), socket.uid)) {
      if (stryMutAct_9fa48("36067")) {
        {}
      } else {
        stryCov_9fa48("36067");
        socket.join(stryMutAct_9fa48("36068") ? `` : (stryCov_9fa48("36068"), `uid_${socket.uid}`));
        socket.join(stryMutAct_9fa48("36069") ? "" : (stryCov_9fa48("36069"), 'online_users'));
      }
    } else {
      if (stryMutAct_9fa48("36070")) {
        {}
      } else {
        stryCov_9fa48("36070");
        socket.join(stryMutAct_9fa48("36071") ? "" : (stryCov_9fa48("36071"), 'online_guests'));
      }
    }
    socket.join(stryMutAct_9fa48("36072") ? `` : (stryCov_9fa48("36072"), `sess_${socket.request.signedCookies[nconf.get(stryMutAct_9fa48("36073") ? "" : (stryCov_9fa48("36073"), 'sessionKey'))]}`));
    socket.emit(stryMutAct_9fa48("36074") ? "" : (stryCov_9fa48("36074"), 'checkSession'), socket.uid);
    socket.emit(stryMutAct_9fa48("36075") ? "" : (stryCov_9fa48("36075"), 'setHostname'), os.hostname());
    plugins.hooks.fire(stryMutAct_9fa48("36076") ? "" : (stryCov_9fa48("36076"), 'action:sockets.connect'), stryMutAct_9fa48("36077") ? {} : (stryCov_9fa48("36077"), {
      socket: socket
    }));
  }
}
async function onMessage(socket, payload) {
  if (stryMutAct_9fa48("36078")) {
    {}
  } else {
    stryCov_9fa48("36078");
    if (stryMutAct_9fa48("36081") ? false : stryMutAct_9fa48("36080") ? true : stryMutAct_9fa48("36079") ? payload.data.length : (stryCov_9fa48("36079", "36080", "36081"), !payload.data.length)) {
      if (stryMutAct_9fa48("36082")) {
        {}
      } else {
        stryCov_9fa48("36082");
        return winston.warn(stryMutAct_9fa48("36083") ? "" : (stryCov_9fa48("36083"), '[socket.io] Empty payload'));
      }
    }
    const eventName = payload.data[0];
    const params = (stryMutAct_9fa48("36086") ? typeof payload.data[1] !== 'function' : stryMutAct_9fa48("36085") ? false : stryMutAct_9fa48("36084") ? true : (stryCov_9fa48("36084", "36085", "36086"), typeof payload.data[1] === (stryMutAct_9fa48("36087") ? "" : (stryCov_9fa48("36087"), 'function')))) ? {} : payload.data[1];
    const callback = (stryMutAct_9fa48("36090") ? typeof payload.data[payload.data.length - 1] !== 'function' : stryMutAct_9fa48("36089") ? false : stryMutAct_9fa48("36088") ? true : (stryCov_9fa48("36088", "36089", "36090"), typeof payload.data[stryMutAct_9fa48("36091") ? payload.data.length + 1 : (stryCov_9fa48("36091"), payload.data.length - 1)] === (stryMutAct_9fa48("36092") ? "" : (stryCov_9fa48("36092"), 'function')))) ? payload.data[stryMutAct_9fa48("36093") ? payload.data.length + 1 : (stryCov_9fa48("36093"), payload.data.length - 1)] : function () {};
    if (stryMutAct_9fa48("36096") ? false : stryMutAct_9fa48("36095") ? true : stryMutAct_9fa48("36094") ? eventName : (stryCov_9fa48("36094", "36095", "36096"), !eventName)) {
      if (stryMutAct_9fa48("36097")) {
        {}
      } else {
        stryCov_9fa48("36097");
        return winston.warn(stryMutAct_9fa48("36098") ? "" : (stryCov_9fa48("36098"), '[socket.io] Empty method name'));
      }
    }
    const parts = eventName.toString().split(stryMutAct_9fa48("36099") ? "" : (stryCov_9fa48("36099"), '.'));
    const namespace = parts[0];
    const methodToCall = parts.reduce((prev, cur) => {
      if (stryMutAct_9fa48("36100")) {
        {}
      } else {
        stryCov_9fa48("36100");
        if (stryMutAct_9fa48("36103") ? prev !== null && prev[cur] || !prev.hasOwnProperty || prev.hasOwnProperty(cur) : stryMutAct_9fa48("36102") ? false : stryMutAct_9fa48("36101") ? true : (stryCov_9fa48("36101", "36102", "36103"), (stryMutAct_9fa48("36105") ? prev !== null || prev[cur] : stryMutAct_9fa48("36104") ? true : (stryCov_9fa48("36104", "36105"), (stryMutAct_9fa48("36107") ? prev === null : stryMutAct_9fa48("36106") ? true : (stryCov_9fa48("36106", "36107"), prev !== null)) && prev[cur])) && (stryMutAct_9fa48("36109") ? !prev.hasOwnProperty && prev.hasOwnProperty(cur) : stryMutAct_9fa48("36108") ? true : (stryCov_9fa48("36108", "36109"), (stryMutAct_9fa48("36110") ? prev.hasOwnProperty : (stryCov_9fa48("36110"), !prev.hasOwnProperty)) || prev.hasOwnProperty(cur))))) {
          if (stryMutAct_9fa48("36111")) {
            {}
          } else {
            stryCov_9fa48("36111");
            return prev[cur];
          }
        }
        return null;
      }
    }, Namespaces);
    if (stryMutAct_9fa48("36114") ? !methodToCall && typeof methodToCall !== 'function' : stryMutAct_9fa48("36113") ? false : stryMutAct_9fa48("36112") ? true : (stryCov_9fa48("36112", "36113", "36114"), (stryMutAct_9fa48("36115") ? methodToCall : (stryCov_9fa48("36115"), !methodToCall)) || (stryMutAct_9fa48("36117") ? typeof methodToCall === 'function' : stryMutAct_9fa48("36116") ? false : (stryCov_9fa48("36116", "36117"), typeof methodToCall !== (stryMutAct_9fa48("36118") ? "" : (stryCov_9fa48("36118"), 'function')))))) {
      if (stryMutAct_9fa48("36119")) {
        {}
      } else {
        stryCov_9fa48("36119");
        if (stryMutAct_9fa48("36122") ? process.env.NODE_ENV !== 'development' : stryMutAct_9fa48("36121") ? false : stryMutAct_9fa48("36120") ? true : (stryCov_9fa48("36120", "36121", "36122"), process.env.NODE_ENV === (stryMutAct_9fa48("36123") ? "" : (stryCov_9fa48("36123"), 'development')))) {
          if (stryMutAct_9fa48("36124")) {
            {}
          } else {
            stryCov_9fa48("36124");
            winston.warn(stryMutAct_9fa48("36125") ? `` : (stryCov_9fa48("36125"), `[socket.io] Unrecognized message: ${eventName}`));
          }
        }
        const escapedName = validator.escape(String(eventName));
        return callback(stryMutAct_9fa48("36126") ? {} : (stryCov_9fa48("36126"), {
          message: stryMutAct_9fa48("36127") ? `` : (stryCov_9fa48("36127"), `[[error:invalid-event, ${escapedName}]]`)
        }));
      }
    }
    socket.previousEvents = stryMutAct_9fa48("36130") ? socket.previousEvents && [] : stryMutAct_9fa48("36129") ? false : stryMutAct_9fa48("36128") ? true : (stryCov_9fa48("36128", "36129", "36130"), socket.previousEvents || (stryMutAct_9fa48("36131") ? ["Stryker was here"] : (stryCov_9fa48("36131"), [])));
    socket.previousEvents.push(eventName);
    if (stryMutAct_9fa48("36135") ? socket.previousEvents.length <= 20 : stryMutAct_9fa48("36134") ? socket.previousEvents.length >= 20 : stryMutAct_9fa48("36133") ? false : stryMutAct_9fa48("36132") ? true : (stryCov_9fa48("36132", "36133", "36134", "36135"), socket.previousEvents.length > 20)) {
      if (stryMutAct_9fa48("36136")) {
        {}
      } else {
        stryCov_9fa48("36136");
        socket.previousEvents.shift();
      }
    }
    if (stryMutAct_9fa48("36139") ? !eventName.startsWith('admin.') || ratelimit.isFlooding(socket) : stryMutAct_9fa48("36138") ? false : stryMutAct_9fa48("36137") ? true : (stryCov_9fa48("36137", "36138", "36139"), (stryMutAct_9fa48("36140") ? eventName.startsWith('admin.') : (stryCov_9fa48("36140"), !(stryMutAct_9fa48("36141") ? eventName.endsWith('admin.') : (stryCov_9fa48("36141"), eventName.startsWith(stryMutAct_9fa48("36142") ? "" : (stryCov_9fa48("36142"), 'admin.')))))) && ratelimit.isFlooding(socket))) {
      if (stryMutAct_9fa48("36143")) {
        {}
      } else {
        stryCov_9fa48("36143");
        winston.warn(stryMutAct_9fa48("36144") ? `` : (stryCov_9fa48("36144"), `[socket.io] Too many emits! Disconnecting uid : ${socket.uid}. Events : ${socket.previousEvents}`));
        return socket.disconnect();
      }
    }
    try {
      if (stryMutAct_9fa48("36145")) {
        {}
      } else {
        stryCov_9fa48("36145");
        await checkMaintenance(socket);
        await validateSession(socket, stryMutAct_9fa48("36146") ? "" : (stryCov_9fa48("36146"), '[[error:revalidate-failure]]'));
        if (stryMutAct_9fa48("36148") ? false : stryMutAct_9fa48("36147") ? true : (stryCov_9fa48("36147", "36148"), Namespaces[namespace].before)) {
          if (stryMutAct_9fa48("36149")) {
            {}
          } else {
            stryCov_9fa48("36149");
            await Namespaces[namespace].before(socket, eventName, params);
          }
        }
        if (stryMutAct_9fa48("36152") ? methodToCall.constructor || methodToCall.constructor.name === 'AsyncFunction' : stryMutAct_9fa48("36151") ? false : stryMutAct_9fa48("36150") ? true : (stryCov_9fa48("36150", "36151", "36152"), methodToCall.constructor && (stryMutAct_9fa48("36154") ? methodToCall.constructor.name !== 'AsyncFunction' : stryMutAct_9fa48("36153") ? true : (stryCov_9fa48("36153", "36154"), methodToCall.constructor.name === (stryMutAct_9fa48("36155") ? "" : (stryCov_9fa48("36155"), 'AsyncFunction')))))) {
          if (stryMutAct_9fa48("36156")) {
            {}
          } else {
            stryCov_9fa48("36156");
            const result = await methodToCall(socket, params);
            callback(null, result);
          }
        } else {
          if (stryMutAct_9fa48("36157")) {
            {}
          } else {
            stryCov_9fa48("36157");
            methodToCall(socket, params, (err, result) => {
              if (stryMutAct_9fa48("36158")) {
                {}
              } else {
                stryCov_9fa48("36158");
                callback(err ? stryMutAct_9fa48("36159") ? {} : (stryCov_9fa48("36159"), {
                  message: err.message
                }) : null, result);
              }
            });
          }
        }
      }
    } catch (err) {
      if (stryMutAct_9fa48("36160")) {
        {}
      } else {
        stryCov_9fa48("36160");
        winston.error(stryMutAct_9fa48("36161") ? `` : (stryCov_9fa48("36161"), `${eventName}\n${err.stack ? err.stack : err.message}`));
        callback(stryMutAct_9fa48("36162") ? {} : (stryCov_9fa48("36162"), {
          message: err.message
        }));
      }
    }
  }
}
function requireModules() {
  if (stryMutAct_9fa48("36163")) {
    {}
  } else {
    stryCov_9fa48("36163");
    const modules = stryMutAct_9fa48("36164") ? [] : (stryCov_9fa48("36164"), [stryMutAct_9fa48("36165") ? "" : (stryCov_9fa48("36165"), 'admin'), stryMutAct_9fa48("36166") ? "" : (stryCov_9fa48("36166"), 'categories'), stryMutAct_9fa48("36167") ? "" : (stryCov_9fa48("36167"), 'groups'), stryMutAct_9fa48("36168") ? "" : (stryCov_9fa48("36168"), 'meta'), stryMutAct_9fa48("36169") ? "" : (stryCov_9fa48("36169"), 'modules'), stryMutAct_9fa48("36170") ? "" : (stryCov_9fa48("36170"), 'notifications'), stryMutAct_9fa48("36171") ? "" : (stryCov_9fa48("36171"), 'plugins'), stryMutAct_9fa48("36172") ? "" : (stryCov_9fa48("36172"), 'posts'), stryMutAct_9fa48("36173") ? "" : (stryCov_9fa48("36173"), 'topics'), stryMutAct_9fa48("36174") ? "" : (stryCov_9fa48("36174"), 'user'), stryMutAct_9fa48("36175") ? "" : (stryCov_9fa48("36175"), 'blacklist'), stryMutAct_9fa48("36176") ? "" : (stryCov_9fa48("36176"), 'uploads')]);
    modules.forEach(module => {
      if (stryMutAct_9fa48("36177")) {
        {}
      } else {
        stryCov_9fa48("36177");
        Namespaces[module] = require(stryMutAct_9fa48("36178") ? `` : (stryCov_9fa48("36178"), `./${module}`));
      }
    });
  }
}
async function checkMaintenance(socket) {
  if (stryMutAct_9fa48("36179")) {
    {}
  } else {
    stryCov_9fa48("36179");
    const meta = require('../meta');
    if (stryMutAct_9fa48("36182") ? false : stryMutAct_9fa48("36181") ? true : stryMutAct_9fa48("36180") ? meta.config.maintenanceMode : (stryCov_9fa48("36180", "36181", "36182"), !meta.config.maintenanceMode)) {
      if (stryMutAct_9fa48("36183")) {
        {}
      } else {
        stryCov_9fa48("36183");
        return;
      }
    }
    const isAdmin = await user.isAdministrator(socket.uid);
    if (stryMutAct_9fa48("36185") ? false : stryMutAct_9fa48("36184") ? true : (stryCov_9fa48("36184", "36185"), isAdmin)) {
      if (stryMutAct_9fa48("36186")) {
        {}
      } else {
        stryCov_9fa48("36186");
        return;
      }
    }
    const validator = require('validator');
    throw new Error(stryMutAct_9fa48("36187") ? `` : (stryCov_9fa48("36187"), `[[pages:maintenance.text, ${validator.escape(String(stryMutAct_9fa48("36190") ? meta.config.title && 'NodeBB' : stryMutAct_9fa48("36189") ? false : stryMutAct_9fa48("36188") ? true : (stryCov_9fa48("36188", "36189", "36190"), meta.config.title || (stryMutAct_9fa48("36191") ? "" : (stryCov_9fa48("36191"), 'NodeBB')))))}]]`));
  }
}
const getSessionAsync = util.promisify(stryMutAct_9fa48("36192") ? () => undefined : (stryCov_9fa48("36192"), (sid, callback) => db.sessionStore.get(sid, stryMutAct_9fa48("36193") ? () => undefined : (stryCov_9fa48("36193"), (err, sessionObj) => callback(err, stryMutAct_9fa48("36196") ? sessionObj && null : stryMutAct_9fa48("36195") ? false : stryMutAct_9fa48("36194") ? true : (stryCov_9fa48("36194", "36195", "36196"), sessionObj || null))))));
async function validateSession(socket, errorMsg) {
  if (stryMutAct_9fa48("36197")) {
    {}
  } else {
    stryCov_9fa48("36197");
    const req = socket.request;
    const {
      sessionId
    } = await plugins.hooks.fire(stryMutAct_9fa48("36198") ? "" : (stryCov_9fa48("36198"), 'filter:sockets.sessionId'), stryMutAct_9fa48("36199") ? {} : (stryCov_9fa48("36199"), {
      sessionId: req.signedCookies ? req.signedCookies[nconf.get(stryMutAct_9fa48("36200") ? "" : (stryCov_9fa48("36200"), 'sessionKey'))] : null,
      request: req
    }));
    if (stryMutAct_9fa48("36203") ? false : stryMutAct_9fa48("36202") ? true : stryMutAct_9fa48("36201") ? sessionId : (stryCov_9fa48("36201", "36202", "36203"), !sessionId)) {
      if (stryMutAct_9fa48("36204")) {
        {}
      } else {
        stryCov_9fa48("36204");
        return;
      }
    }
    const sessionData = await getSessionAsync(sessionId);
    if (stryMutAct_9fa48("36207") ? false : stryMutAct_9fa48("36206") ? true : stryMutAct_9fa48("36205") ? sessionData : (stryCov_9fa48("36205", "36206", "36207"), !sessionData)) {
      if (stryMutAct_9fa48("36208")) {
        {}
      } else {
        stryCov_9fa48("36208");
        throw new Error(errorMsg);
      }
    }
    await plugins.hooks.fire(stryMutAct_9fa48("36209") ? "" : (stryCov_9fa48("36209"), 'static:sockets.validateSession'), stryMutAct_9fa48("36210") ? {} : (stryCov_9fa48("36210"), {
      req: req,
      socket: socket,
      session: sessionData
    }));
  }
}
const cookieParserAsync = util.promisify(stryMutAct_9fa48("36211") ? () => undefined : (stryCov_9fa48("36211"), (req, callback) => cookieParser(req, {}, stryMutAct_9fa48("36212") ? () => undefined : (stryCov_9fa48("36212"), err => callback(err)))));
async function authorize(socket, callback) {
  if (stryMutAct_9fa48("36213")) {
    {}
  } else {
    stryCov_9fa48("36213");
    const {
      request
    } = socket;
    if (stryMutAct_9fa48("36216") ? false : stryMutAct_9fa48("36215") ? true : stryMutAct_9fa48("36214") ? request : (stryCov_9fa48("36214", "36215", "36216"), !request)) {
      if (stryMutAct_9fa48("36217")) {
        {}
      } else {
        stryCov_9fa48("36217");
        return callback(new Error(stryMutAct_9fa48("36218") ? "" : (stryCov_9fa48("36218"), '[[error:not-authorized]]')));
      }
    }
    await cookieParserAsync(request);
    const {
      sessionId
    } = await plugins.hooks.fire(stryMutAct_9fa48("36219") ? "" : (stryCov_9fa48("36219"), 'filter:sockets.sessionId'), stryMutAct_9fa48("36220") ? {} : (stryCov_9fa48("36220"), {
      sessionId: request.signedCookies ? request.signedCookies[nconf.get(stryMutAct_9fa48("36221") ? "" : (stryCov_9fa48("36221"), 'sessionKey'))] : null,
      request: request
    }));
    const sessionData = await getSessionAsync(sessionId);
    if (stryMutAct_9fa48("36224") ? sessionData && sessionData.passport || sessionData.passport.user : stryMutAct_9fa48("36223") ? false : stryMutAct_9fa48("36222") ? true : (stryCov_9fa48("36222", "36223", "36224"), (stryMutAct_9fa48("36226") ? sessionData || sessionData.passport : stryMutAct_9fa48("36225") ? true : (stryCov_9fa48("36225", "36226"), sessionData && sessionData.passport)) && sessionData.passport.user)) {
      if (stryMutAct_9fa48("36227")) {
        {}
      } else {
        stryCov_9fa48("36227");
        request.session = sessionData;
        socket.uid = parseInt(sessionData.passport.user, 10);
      }
    } else {
      if (stryMutAct_9fa48("36228")) {
        {}
      } else {
        stryCov_9fa48("36228");
        socket.uid = 0;
      }
    }
    request.uid = socket.uid;
    callback();
  }
}
Sockets.in = function (room) {
  if (stryMutAct_9fa48("36229")) {
    {}
  } else {
    stryCov_9fa48("36229");
    return stryMutAct_9fa48("36232") ? Sockets.server || Sockets.server.in(room) : stryMutAct_9fa48("36231") ? false : stryMutAct_9fa48("36230") ? true : (stryCov_9fa48("36230", "36231", "36232"), Sockets.server && Sockets.server.in(room));
  }
};
Sockets.getUserSocketCount = function (uid) {
  if (stryMutAct_9fa48("36233")) {
    {}
  } else {
    stryCov_9fa48("36233");
    return Sockets.getCountInRoom(stryMutAct_9fa48("36234") ? `` : (stryCov_9fa48("36234"), `uid_${uid}`));
  }
};
Sockets.getCountInRoom = function (room) {
  if (stryMutAct_9fa48("36235")) {
    {}
  } else {
    stryCov_9fa48("36235");
    if (stryMutAct_9fa48("36238") ? false : stryMutAct_9fa48("36237") ? true : stryMutAct_9fa48("36236") ? Sockets.server : (stryCov_9fa48("36236", "36237", "36238"), !Sockets.server)) {
      if (stryMutAct_9fa48("36239")) {
        {}
      } else {
        stryCov_9fa48("36239");
        return 0;
      }
    }
    const roomMap = Sockets.server.sockets.adapter.rooms.get(room);
    return roomMap ? roomMap.size : 0;
  }
};
Sockets.warnDeprecated = (socket, replacement) => {
  if (stryMutAct_9fa48("36240")) {
    {}
  } else {
    stryCov_9fa48("36240");
    if (stryMutAct_9fa48("36243") ? socket.previousEvents || socket.emit : stryMutAct_9fa48("36242") ? false : stryMutAct_9fa48("36241") ? true : (stryCov_9fa48("36241", "36242", "36243"), socket.previousEvents && socket.emit)) {
      if (stryMutAct_9fa48("36244")) {
        {}
      } else {
        stryCov_9fa48("36244");
        socket.emit(stryMutAct_9fa48("36245") ? "" : (stryCov_9fa48("36245"), 'event:deprecated_call'), stryMutAct_9fa48("36246") ? {} : (stryCov_9fa48("36246"), {
          eventName: socket.previousEvents[stryMutAct_9fa48("36247") ? socket.previousEvents.length + 1 : (stryCov_9fa48("36247"), socket.previousEvents.length - 1)],
          replacement: replacement
        }));
      }
    }
    winston.warn(stryMutAct_9fa48("36248") ? `` : (stryCov_9fa48("36248"), `[deprecated]\n ${stryMutAct_9fa48("36249") ? new Error('-').stack.split('\n').join('\n') : (stryCov_9fa48("36249"), new Error(stryMutAct_9fa48("36250") ? "" : (stryCov_9fa48("36250"), '-')).stack.split(stryMutAct_9fa48("36251") ? "" : (stryCov_9fa48("36251"), '\n')).slice(2, 5).join(stryMutAct_9fa48("36252") ? "" : (stryCov_9fa48("36252"), '\n')))}\n     use ${replacement}`));
  }
};