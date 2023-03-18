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
const path = require('path');
const winston = require('winston');
const user = require('../user');
const privileges = require('../privileges');
const accountHelpers = require('./accounts/helpers');
const userController = module.exports;
userController.getCurrentUser = async function (req, res) {
  if (stryMutAct_9fa48("11935")) {
    {}
  } else {
    stryCov_9fa48("11935");
    if (stryMutAct_9fa48("11938") ? false : stryMutAct_9fa48("11937") ? true : stryMutAct_9fa48("11936") ? req.loggedIn : (stryCov_9fa48("11936", "11937", "11938"), !req.loggedIn)) {
      if (stryMutAct_9fa48("11939")) {
        {}
      } else {
        stryCov_9fa48("11939");
        return res.status(401).json(stryMutAct_9fa48("11940") ? "" : (stryCov_9fa48("11940"), 'not-authorized'));
      }
    }
    const userslug = await user.getUserField(req.uid, stryMutAct_9fa48("11941") ? "" : (stryCov_9fa48("11941"), 'userslug'));
    const userData = await accountHelpers.getUserDataByUserSlug(userslug, req.uid, req.query);
    res.json(userData);
  }
};
userController.getUserByUID = async function (req, res, next) {
  if (stryMutAct_9fa48("11942")) {
    {}
  } else {
    stryCov_9fa48("11942");
    await byType(stryMutAct_9fa48("11943") ? "" : (stryCov_9fa48("11943"), 'uid'), req, res, next);
  }
};
userController.getUserByUsername = async function (req, res, next) {
  if (stryMutAct_9fa48("11944")) {
    {}
  } else {
    stryCov_9fa48("11944");
    await byType(stryMutAct_9fa48("11945") ? "" : (stryCov_9fa48("11945"), 'username'), req, res, next);
  }
};
userController.getUserByEmail = async function (req, res, next) {
  if (stryMutAct_9fa48("11946")) {
    {}
  } else {
    stryCov_9fa48("11946");
    await byType(stryMutAct_9fa48("11947") ? "" : (stryCov_9fa48("11947"), 'email'), req, res, next);
  }
};
async function byType(type, req, res, next) {
  if (stryMutAct_9fa48("11948")) {
    {}
  } else {
    stryCov_9fa48("11948");
    const userData = await userController.getUserDataByField(req.uid, type, req.params[type]);
    if (stryMutAct_9fa48("11951") ? false : stryMutAct_9fa48("11950") ? true : stryMutAct_9fa48("11949") ? userData : (stryCov_9fa48("11949", "11950", "11951"), !userData)) {
      if (stryMutAct_9fa48("11952")) {
        {}
      } else {
        stryCov_9fa48("11952");
        return next();
      }
    }
    res.json(userData);
  }
}
userController.getUserDataByField = async function (callerUid, field, fieldValue) {
  if (stryMutAct_9fa48("11953")) {
    {}
  } else {
    stryCov_9fa48("11953");
    let uid = null;
    if (stryMutAct_9fa48("11956") ? field !== 'uid' : stryMutAct_9fa48("11955") ? false : stryMutAct_9fa48("11954") ? true : (stryCov_9fa48("11954", "11955", "11956"), field === (stryMutAct_9fa48("11957") ? "" : (stryCov_9fa48("11957"), 'uid')))) {
      if (stryMutAct_9fa48("11958")) {
        {}
      } else {
        stryCov_9fa48("11958");
        uid = fieldValue;
      }
    } else if (stryMutAct_9fa48("11961") ? field !== 'username' : stryMutAct_9fa48("11960") ? false : stryMutAct_9fa48("11959") ? true : (stryCov_9fa48("11959", "11960", "11961"), field === (stryMutAct_9fa48("11962") ? "" : (stryCov_9fa48("11962"), 'username')))) {
      if (stryMutAct_9fa48("11963")) {
        {}
      } else {
        stryCov_9fa48("11963");
        uid = await user.getUidByUsername(fieldValue);
      }
    } else if (stryMutAct_9fa48("11966") ? field !== 'email' : stryMutAct_9fa48("11965") ? false : stryMutAct_9fa48("11964") ? true : (stryCov_9fa48("11964", "11965", "11966"), field === (stryMutAct_9fa48("11967") ? "" : (stryCov_9fa48("11967"), 'email')))) {
      if (stryMutAct_9fa48("11968")) {
        {}
      } else {
        stryCov_9fa48("11968");
        uid = await user.getUidByEmail(fieldValue);
        if (stryMutAct_9fa48("11970") ? false : stryMutAct_9fa48("11969") ? true : (stryCov_9fa48("11969", "11970"), uid)) {
          if (stryMutAct_9fa48("11971")) {
            {}
          } else {
            stryCov_9fa48("11971");
            const isPrivileged = await user.isAdminOrGlobalMod(callerUid);
            const settings = await user.getSettings(uid);
            if (stryMutAct_9fa48("11974") ? !isPrivileged || settings && !settings.showemail : stryMutAct_9fa48("11973") ? false : stryMutAct_9fa48("11972") ? true : (stryCov_9fa48("11972", "11973", "11974"), (stryMutAct_9fa48("11975") ? isPrivileged : (stryCov_9fa48("11975"), !isPrivileged)) && (stryMutAct_9fa48("11977") ? settings || !settings.showemail : stryMutAct_9fa48("11976") ? true : (stryCov_9fa48("11976", "11977"), settings && (stryMutAct_9fa48("11978") ? settings.showemail : (stryCov_9fa48("11978"), !settings.showemail)))))) {
              if (stryMutAct_9fa48("11979")) {
                {}
              } else {
                stryCov_9fa48("11979");
                uid = 0;
              }
            }
          }
        }
      }
    }
    if (stryMutAct_9fa48("11982") ? false : stryMutAct_9fa48("11981") ? true : stryMutAct_9fa48("11980") ? uid : (stryCov_9fa48("11980", "11981", "11982"), !uid)) {
      if (stryMutAct_9fa48("11983")) {
        {}
      } else {
        stryCov_9fa48("11983");
        return null;
      }
    }
    return await userController.getUserDataByUID(callerUid, uid);
  }
};
userController.getUserDataByUID = async function (callerUid, uid) {
  if (stryMutAct_9fa48("11984")) {
    {}
  } else {
    stryCov_9fa48("11984");
    if (stryMutAct_9fa48("11987") ? false : stryMutAct_9fa48("11986") ? true : stryMutAct_9fa48("11985") ? parseInt(uid, 10) : (stryCov_9fa48("11985", "11986", "11987"), !parseInt(uid, 10))) {
      if (stryMutAct_9fa48("11988")) {
        {}
      } else {
        stryCov_9fa48("11988");
        throw new Error(stryMutAct_9fa48("11989") ? "" : (stryCov_9fa48("11989"), '[[error:no-user]]'));
      }
    }
    const canView = await privileges.global.can(stryMutAct_9fa48("11990") ? "" : (stryCov_9fa48("11990"), 'view:users'), callerUid);
    if (stryMutAct_9fa48("11993") ? false : stryMutAct_9fa48("11992") ? true : stryMutAct_9fa48("11991") ? canView : (stryCov_9fa48("11991", "11992", "11993"), !canView)) {
      if (stryMutAct_9fa48("11994")) {
        {}
      } else {
        stryCov_9fa48("11994");
        throw new Error(stryMutAct_9fa48("11995") ? "" : (stryCov_9fa48("11995"), '[[error:no-privileges]]'));
      }
    }
    let userData = await user.getUserData(uid);
    if (stryMutAct_9fa48("11998") ? false : stryMutAct_9fa48("11997") ? true : stryMutAct_9fa48("11996") ? userData : (stryCov_9fa48("11996", "11997", "11998"), !userData)) {
      if (stryMutAct_9fa48("11999")) {
        {}
      } else {
        stryCov_9fa48("11999");
        throw new Error(stryMutAct_9fa48("12000") ? "" : (stryCov_9fa48("12000"), '[[error:no-user]]'));
      }
    }
    userData = await user.hidePrivateData(userData, callerUid);
    return userData;
  }
};
userController.exportPosts = async function (req, res, next) {
  if (stryMutAct_9fa48("12001")) {
    {}
  } else {
    stryCov_9fa48("12001");
    sendExport(stryMutAct_9fa48("12002") ? `` : (stryCov_9fa48("12002"), `${res.locals.uid}_posts.csv`), stryMutAct_9fa48("12003") ? "" : (stryCov_9fa48("12003"), 'text/csv'), res, next);
  }
};
userController.exportUploads = function (req, res, next) {
  if (stryMutAct_9fa48("12004")) {
    {}
  } else {
    stryCov_9fa48("12004");
    sendExport(stryMutAct_9fa48("12005") ? `` : (stryCov_9fa48("12005"), `${res.locals.uid}_uploads.zip`), stryMutAct_9fa48("12006") ? "" : (stryCov_9fa48("12006"), 'application/zip'), res, next);
  }
};
userController.exportProfile = async function (req, res, next) {
  if (stryMutAct_9fa48("12007")) {
    {}
  } else {
    stryCov_9fa48("12007");
    sendExport(stryMutAct_9fa48("12008") ? `` : (stryCov_9fa48("12008"), `${res.locals.uid}_profile.json`), stryMutAct_9fa48("12009") ? "" : (stryCov_9fa48("12009"), 'application/json'), res, next);
  }
};

// DEPRECATED; Remove in NodeBB v3.0.0
function sendExport(filename, type, res, next) {
  if (stryMutAct_9fa48("12010")) {
    {}
  } else {
    stryCov_9fa48("12010");
    winston.warn(stryMutAct_9fa48("12011") ? `` : (stryCov_9fa48("12011"), `[users/export] Access via page API is deprecated, use GET /api/v3/users/:uid/exports/:type instead.`));
    res.sendFile(filename, stryMutAct_9fa48("12012") ? {} : (stryCov_9fa48("12012"), {
      root: path.join(__dirname, stryMutAct_9fa48("12013") ? "" : (stryCov_9fa48("12013"), '../../build/export')),
      headers: stryMutAct_9fa48("12014") ? {} : (stryCov_9fa48("12014"), {
        'Content-Type': type,
        'Content-Disposition': stryMutAct_9fa48("12015") ? `` : (stryCov_9fa48("12015"), `attachment; filename=${filename}`)
      })
    }), err => {
      if (stryMutAct_9fa48("12016")) {
        {}
      } else {
        stryCov_9fa48("12016");
        if (stryMutAct_9fa48("12018") ? false : stryMutAct_9fa48("12017") ? true : (stryCov_9fa48("12017", "12018"), err)) {
          if (stryMutAct_9fa48("12019")) {
            {}
          } else {
            stryCov_9fa48("12019");
            if (stryMutAct_9fa48("12022") ? err.code !== 'ENOENT' : stryMutAct_9fa48("12021") ? false : stryMutAct_9fa48("12020") ? true : (stryCov_9fa48("12020", "12021", "12022"), err.code === (stryMutAct_9fa48("12023") ? "" : (stryCov_9fa48("12023"), 'ENOENT')))) {
              if (stryMutAct_9fa48("12024")) {
                {}
              } else {
                stryCov_9fa48("12024");
                res.locals.isAPI = stryMutAct_9fa48("12025") ? true : (stryCov_9fa48("12025"), false);
                return next();
              }
            }
            return next(err);
          }
        }
      }
    });
  }
}
require('../promisify')(userController, stryMutAct_9fa48("12026") ? [] : (stryCov_9fa48("12026"), [stryMutAct_9fa48("12027") ? "" : (stryCov_9fa48("12027"), 'getCurrentUser'), stryMutAct_9fa48("12028") ? "" : (stryCov_9fa48("12028"), 'getUserByUID'), stryMutAct_9fa48("12029") ? "" : (stryCov_9fa48("12029"), 'getUserByUsername'), stryMutAct_9fa48("12030") ? "" : (stryCov_9fa48("12030"), 'getUserByEmail'), stryMutAct_9fa48("12031") ? "" : (stryCov_9fa48("12031"), 'exportPosts'), stryMutAct_9fa48("12032") ? "" : (stryCov_9fa48("12032"), 'exportUploads'), stryMutAct_9fa48("12033") ? "" : (stryCov_9fa48("12033"), 'exportProfile')]));