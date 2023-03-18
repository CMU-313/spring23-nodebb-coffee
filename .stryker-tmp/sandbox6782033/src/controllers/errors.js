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
const winston = require('winston');
const validator = require('validator');
const translator = require('../translator');
const plugins = require('../plugins');
const middleware = require('../middleware');
const middlewareHelpers = require('../middleware/helpers');
const helpers = require('./helpers');
exports.handleURIErrors = async function handleURIErrors(err, req, res, next) {
  if (stryMutAct_9fa48("9310")) {
    {}
  } else {
    stryCov_9fa48("9310");
    // Handle cases where malformed URIs are passed in
    if (stryMutAct_9fa48("9312") ? false : stryMutAct_9fa48("9311") ? true : (stryCov_9fa48("9311", "9312"), err instanceof URIError)) {
      if (stryMutAct_9fa48("9313")) {
        {}
      } else {
        stryCov_9fa48("9313");
        const cleanPath = req.path.replace(new RegExp(stryMutAct_9fa48("9314") ? `` : (stryCov_9fa48("9314"), `^${nconf.get(stryMutAct_9fa48("9315") ? "" : (stryCov_9fa48("9315"), 'relative_path'))}`)), stryMutAct_9fa48("9316") ? "Stryker was here!" : (stryCov_9fa48("9316"), ''));
        const tidMatch = cleanPath.match(stryMutAct_9fa48("9319") ? /^\/topic\/(\D+)\// : stryMutAct_9fa48("9318") ? /^\/topic\/(\d)\// : stryMutAct_9fa48("9317") ? /\/topic\/(\d+)\// : (stryCov_9fa48("9317", "9318", "9319"), /^\/topic\/(\d+)\//));
        const cidMatch = cleanPath.match(stryMutAct_9fa48("9322") ? /^\/category\/(\D+)\// : stryMutAct_9fa48("9321") ? /^\/category\/(\d)\// : stryMutAct_9fa48("9320") ? /\/category\/(\d+)\// : (stryCov_9fa48("9320", "9321", "9322"), /^\/category\/(\d+)\//));
        if (stryMutAct_9fa48("9324") ? false : stryMutAct_9fa48("9323") ? true : (stryCov_9fa48("9323", "9324"), tidMatch)) {
          if (stryMutAct_9fa48("9325")) {
            {}
          } else {
            stryCov_9fa48("9325");
            res.redirect(stryMutAct_9fa48("9326") ? nconf.get('relative_path') - tidMatch[0] : (stryCov_9fa48("9326"), nconf.get(stryMutAct_9fa48("9327") ? "" : (stryCov_9fa48("9327"), 'relative_path')) + tidMatch[0]));
          }
        } else if (stryMutAct_9fa48("9329") ? false : stryMutAct_9fa48("9328") ? true : (stryCov_9fa48("9328", "9329"), cidMatch)) {
          if (stryMutAct_9fa48("9330")) {
            {}
          } else {
            stryCov_9fa48("9330");
            res.redirect(stryMutAct_9fa48("9331") ? nconf.get('relative_path') - cidMatch[0] : (stryCov_9fa48("9331"), nconf.get(stryMutAct_9fa48("9332") ? "" : (stryCov_9fa48("9332"), 'relative_path')) + cidMatch[0]));
          }
        } else {
          if (stryMutAct_9fa48("9333")) {
            {}
          } else {
            stryCov_9fa48("9333");
            winston.warn(stryMutAct_9fa48("9334") ? `` : (stryCov_9fa48("9334"), `[controller] Bad request: ${req.path}`));
            if (stryMutAct_9fa48("9337") ? req.path.endsWith(`${nconf.get('relative_path')}/api`) : stryMutAct_9fa48("9336") ? false : stryMutAct_9fa48("9335") ? true : (stryCov_9fa48("9335", "9336", "9337"), req.path.startsWith(stryMutAct_9fa48("9338") ? `` : (stryCov_9fa48("9338"), `${nconf.get(stryMutAct_9fa48("9339") ? "" : (stryCov_9fa48("9339"), 'relative_path'))}/api`)))) {
              if (stryMutAct_9fa48("9340")) {
                {}
              } else {
                stryCov_9fa48("9340");
                res.status(400).json(stryMutAct_9fa48("9341") ? {} : (stryCov_9fa48("9341"), {
                  error: stryMutAct_9fa48("9342") ? "" : (stryCov_9fa48("9342"), '[[global:400.title]]')
                }));
              }
            } else {
              if (stryMutAct_9fa48("9343")) {
                {}
              } else {
                stryCov_9fa48("9343");
                await middleware.buildHeaderAsync(req, res);
                res.status(400).render(stryMutAct_9fa48("9344") ? "" : (stryCov_9fa48("9344"), '400'), stryMutAct_9fa48("9345") ? {} : (stryCov_9fa48("9345"), {
                  error: validator.escape(String(err.message))
                }));
              }
            }
          }
        }
      }
    } else {
      if (stryMutAct_9fa48("9346")) {
        {}
      } else {
        stryCov_9fa48("9346");
        next(err);
      }
    }
  }
};

// this needs to have four arguments or express treats it as `(req, res, next)`
// don't remove `next`!
exports.handleErrors = async function handleErrors(err, req, res, next) {
  if (stryMutAct_9fa48("9347")) {
    {}
  } else {
    stryCov_9fa48("9347");
    // eslint-disable-line no-unused-vars
    const cases = stryMutAct_9fa48("9348") ? {} : (stryCov_9fa48("9348"), {
      EBADCSRFTOKEN: function () {
        if (stryMutAct_9fa48("9349")) {
          {}
        } else {
          stryCov_9fa48("9349");
          winston.error(stryMutAct_9fa48("9350") ? `` : (stryCov_9fa48("9350"), `${req.method} ${req.originalUrl}\n${err.message}`));
          res.sendStatus(403);
        }
      },
      'blacklisted-ip': function () {
        if (stryMutAct_9fa48("9351")) {
          {}
        } else {
          stryCov_9fa48("9351");
          res.status(403).type(stryMutAct_9fa48("9352") ? "" : (stryCov_9fa48("9352"), 'text/plain')).send(err.message);
        }
      }
    });
    const defaultHandler = async function () {
      if (stryMutAct_9fa48("9353")) {
        {}
      } else {
        stryCov_9fa48("9353");
        if (stryMutAct_9fa48("9355") ? false : stryMutAct_9fa48("9354") ? true : (stryCov_9fa48("9354", "9355"), res.headersSent)) {
          if (stryMutAct_9fa48("9356")) {
            {}
          } else {
            stryCov_9fa48("9356");
            return;
          }
        }
        // Display NodeBB error page
        const status = parseInt(err.status, 10);
        if (stryMutAct_9fa48("9359") ? status === 302 || status === 308 || err.path : stryMutAct_9fa48("9358") ? false : stryMutAct_9fa48("9357") ? true : (stryCov_9fa48("9357", "9358", "9359"), (stryMutAct_9fa48("9361") ? status === 302 && status === 308 : stryMutAct_9fa48("9360") ? true : (stryCov_9fa48("9360", "9361"), (stryMutAct_9fa48("9363") ? status !== 302 : stryMutAct_9fa48("9362") ? false : (stryCov_9fa48("9362", "9363"), status === 302)) || (stryMutAct_9fa48("9365") ? status !== 308 : stryMutAct_9fa48("9364") ? false : (stryCov_9fa48("9364", "9365"), status === 308)))) && err.path)) {
          if (stryMutAct_9fa48("9366")) {
            {}
          } else {
            stryCov_9fa48("9366");
            return res.locals.isAPI ? res.set(stryMutAct_9fa48("9367") ? "" : (stryCov_9fa48("9367"), 'X-Redirect'), err.path).status(200).json(err.path) : res.redirect(stryMutAct_9fa48("9368") ? nconf.get('relative_path') - err.path : (stryCov_9fa48("9368"), nconf.get(stryMutAct_9fa48("9369") ? "" : (stryCov_9fa48("9369"), 'relative_path')) + err.path));
          }
        }
        const path = String(stryMutAct_9fa48("9372") ? req.path && '' : stryMutAct_9fa48("9371") ? false : stryMutAct_9fa48("9370") ? true : (stryCov_9fa48("9370", "9371", "9372"), req.path || (stryMutAct_9fa48("9373") ? "Stryker was here!" : (stryCov_9fa48("9373"), ''))));
        if (stryMutAct_9fa48("9376") ? path.endsWith(`${nconf.get('relative_path')}/api/v3`) : stryMutAct_9fa48("9375") ? false : stryMutAct_9fa48("9374") ? true : (stryCov_9fa48("9374", "9375", "9376"), path.startsWith(stryMutAct_9fa48("9377") ? `` : (stryCov_9fa48("9377"), `${nconf.get(stryMutAct_9fa48("9378") ? "" : (stryCov_9fa48("9378"), 'relative_path'))}/api/v3`)))) {
          if (stryMutAct_9fa48("9379")) {
            {}
          } else {
            stryCov_9fa48("9379");
            let status = 500;
            if (stryMutAct_9fa48("9382") ? err.message.endsWith('[[') : stryMutAct_9fa48("9381") ? false : stryMutAct_9fa48("9380") ? true : (stryCov_9fa48("9380", "9381", "9382"), err.message.startsWith(stryMutAct_9fa48("9383") ? "" : (stryCov_9fa48("9383"), '[[')))) {
              if (stryMutAct_9fa48("9384")) {
                {}
              } else {
                stryCov_9fa48("9384");
                status = 400;
                err.message = await translator.translate(err.message);
              }
            }
            return helpers.formatApiResponse(status, res, err);
          }
        }
        winston.error(stryMutAct_9fa48("9385") ? `` : (stryCov_9fa48("9385"), `${req.method} ${req.originalUrl}\n${err.stack}`));
        res.status(stryMutAct_9fa48("9388") ? status && 500 : stryMutAct_9fa48("9387") ? false : stryMutAct_9fa48("9386") ? true : (stryCov_9fa48("9386", "9387", "9388"), status || 500));
        const data = stryMutAct_9fa48("9389") ? {} : (stryCov_9fa48("9389"), {
          path: validator.escape(path),
          error: validator.escape(String(err.message)),
          bodyClass: middlewareHelpers.buildBodyClass(req, res)
        });
        if (stryMutAct_9fa48("9391") ? false : stryMutAct_9fa48("9390") ? true : (stryCov_9fa48("9390", "9391"), res.locals.isAPI)) {
          if (stryMutAct_9fa48("9392")) {
            {}
          } else {
            stryCov_9fa48("9392");
            res.json(data);
          }
        } else {
          if (stryMutAct_9fa48("9393")) {
            {}
          } else {
            stryCov_9fa48("9393");
            await middleware.buildHeaderAsync(req, res);
            res.render(stryMutAct_9fa48("9394") ? "" : (stryCov_9fa48("9394"), '500'), data);
          }
        }
      }
    };
    const data = await getErrorHandlers(cases);
    try {
      if (stryMutAct_9fa48("9395")) {
        {}
      } else {
        stryCov_9fa48("9395");
        if (stryMutAct_9fa48("9397") ? false : stryMutAct_9fa48("9396") ? true : (stryCov_9fa48("9396", "9397"), data.cases.hasOwnProperty(err.code))) {
          if (stryMutAct_9fa48("9398")) {
            {}
          } else {
            stryCov_9fa48("9398");
            data.cases[err.code](err, req, res, defaultHandler);
          }
        } else {
          if (stryMutAct_9fa48("9399")) {
            {}
          } else {
            stryCov_9fa48("9399");
            await defaultHandler();
          }
        }
      }
    } catch (_err) {
      if (stryMutAct_9fa48("9400")) {
        {}
      } else {
        stryCov_9fa48("9400");
        winston.error(stryMutAct_9fa48("9401") ? `` : (stryCov_9fa48("9401"), `${req.method} ${req.originalUrl}\n${_err.stack}`));
        if (stryMutAct_9fa48("9404") ? false : stryMutAct_9fa48("9403") ? true : stryMutAct_9fa48("9402") ? res.headersSent : (stryCov_9fa48("9402", "9403", "9404"), !res.headersSent)) {
          if (stryMutAct_9fa48("9405")) {
            {}
          } else {
            stryCov_9fa48("9405");
            res.status(500).send(_err.message);
          }
        }
      }
    }
  }
};
async function getErrorHandlers(cases) {
  if (stryMutAct_9fa48("9406")) {
    {}
  } else {
    stryCov_9fa48("9406");
    try {
      if (stryMutAct_9fa48("9407")) {
        {}
      } else {
        stryCov_9fa48("9407");
        return await plugins.hooks.fire(stryMutAct_9fa48("9408") ? "" : (stryCov_9fa48("9408"), 'filter:error.handle'), stryMutAct_9fa48("9409") ? {} : (stryCov_9fa48("9409"), {
          cases: cases
        }));
      }
    } catch (err) {
      if (stryMutAct_9fa48("9410")) {
        {}
      } else {
        stryCov_9fa48("9410");
        // Assume defaults
        winston.warn(stryMutAct_9fa48("9411") ? `` : (stryCov_9fa48("9411"), `[errors/handle] Unable to retrieve plugin handlers for errors: ${err.message}`));
        return stryMutAct_9fa48("9412") ? {} : (stryCov_9fa48("9412"), {
          cases
        });
      }
    }
  }
}