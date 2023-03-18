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
const util = require('util');
const nconf = require('nconf');
const path = require('path');
const crypto = require('crypto');
const fs = require('fs').promises;
const db = require('../../database');
const api = require('../../api');
const groups = require('../../groups');
const meta = require('../../meta');
const privileges = require('../../privileges');
const user = require('../../user');
const utils = require('../../utils');
const helpers = require('../helpers');
const Users = module.exports;
const exportMetadata = new Map(stryMutAct_9fa48("12619") ? [] : (stryCov_9fa48("12619"), [stryMutAct_9fa48("12620") ? [] : (stryCov_9fa48("12620"), [stryMutAct_9fa48("12621") ? "" : (stryCov_9fa48("12621"), 'posts'), stryMutAct_9fa48("12622") ? [] : (stryCov_9fa48("12622"), [stryMutAct_9fa48("12623") ? "" : (stryCov_9fa48("12623"), 'csv'), stryMutAct_9fa48("12624") ? "" : (stryCov_9fa48("12624"), 'text/csv')])]), stryMutAct_9fa48("12625") ? [] : (stryCov_9fa48("12625"), [stryMutAct_9fa48("12626") ? "" : (stryCov_9fa48("12626"), 'uploads'), stryMutAct_9fa48("12627") ? [] : (stryCov_9fa48("12627"), [stryMutAct_9fa48("12628") ? "" : (stryCov_9fa48("12628"), 'zip'), stryMutAct_9fa48("12629") ? "" : (stryCov_9fa48("12629"), 'application/zip')])]), stryMutAct_9fa48("12630") ? [] : (stryCov_9fa48("12630"), [stryMutAct_9fa48("12631") ? "" : (stryCov_9fa48("12631"), 'profile'), stryMutAct_9fa48("12632") ? [] : (stryCov_9fa48("12632"), [stryMutAct_9fa48("12633") ? "" : (stryCov_9fa48("12633"), 'json'), stryMutAct_9fa48("12634") ? "" : (stryCov_9fa48("12634"), 'application/json')])])]));
const hasAdminPrivilege = async (uid, privilege) => {
  if (stryMutAct_9fa48("12635")) {
    {}
  } else {
    stryCov_9fa48("12635");
    const ok = await privileges.admin.can(stryMutAct_9fa48("12636") ? `` : (stryCov_9fa48("12636"), `admin:${privilege}`), uid);
    if (stryMutAct_9fa48("12639") ? false : stryMutAct_9fa48("12638") ? true : stryMutAct_9fa48("12637") ? ok : (stryCov_9fa48("12637", "12638", "12639"), !ok)) {
      if (stryMutAct_9fa48("12640")) {
        {}
      } else {
        stryCov_9fa48("12640");
        throw new Error(stryMutAct_9fa48("12641") ? "" : (stryCov_9fa48("12641"), '[[error:no-privileges]]'));
      }
    }
  }
};
Users.redirectBySlug = async (req, res) => {
  if (stryMutAct_9fa48("12642")) {
    {}
  } else {
    stryCov_9fa48("12642");
    const uid = await user.getUidByUserslug(req.params.userslug);
    if (stryMutAct_9fa48("12644") ? false : stryMutAct_9fa48("12643") ? true : (stryCov_9fa48("12643", "12644"), uid)) {
      if (stryMutAct_9fa48("12645")) {
        {}
      } else {
        stryCov_9fa48("12645");
        const path = stryMutAct_9fa48("12646") ? req.path.split('/').join('/') : (stryCov_9fa48("12646"), req.path.split(stryMutAct_9fa48("12647") ? "" : (stryCov_9fa48("12647"), '/')).slice(3).join(stryMutAct_9fa48("12648") ? "" : (stryCov_9fa48("12648"), '/')));
        const urlObj = new URL(stryMutAct_9fa48("12649") ? nconf.get('url') - req.url : (stryCov_9fa48("12649"), nconf.get(stryMutAct_9fa48("12650") ? "" : (stryCov_9fa48("12650"), 'url')) + req.url));
        res.redirect(308, stryMutAct_9fa48("12651") ? nconf.get('relative_path') - encodeURI(`/api/v3/users/${uid}/${path}${urlObj.search}`) : (stryCov_9fa48("12651"), nconf.get(stryMutAct_9fa48("12652") ? "" : (stryCov_9fa48("12652"), 'relative_path')) + encodeURI(stryMutAct_9fa48("12653") ? `` : (stryCov_9fa48("12653"), `/api/v3/users/${uid}/${path}${urlObj.search}`))));
      }
    } else {
      if (stryMutAct_9fa48("12654")) {
        {}
      } else {
        stryCov_9fa48("12654");
        helpers.formatApiResponse(404, res);
      }
    }
  }
};
Users.create = async (req, res) => {
  if (stryMutAct_9fa48("12655")) {
    {}
  } else {
    stryCov_9fa48("12655");
    await hasAdminPrivilege(req.uid, stryMutAct_9fa48("12656") ? "" : (stryCov_9fa48("12656"), 'users'));
    const userObj = await api.users.create(req, req.body);
    helpers.formatApiResponse(200, res, userObj);
  }
};
Users.exists = async (req, res) => {
  if (stryMutAct_9fa48("12657")) {
    {}
  } else {
    stryCov_9fa48("12657");
    helpers.formatApiResponse(200, res);
  }
};
Users.get = async (req, res) => {
  if (stryMutAct_9fa48("12658")) {
    {}
  } else {
    stryCov_9fa48("12658");
    const userData = await user.getUserData(req.params.uid);
    const publicUserData = await user.hidePrivateData(userData, req.uid);
    helpers.formatApiResponse(200, res, publicUserData);
  }
};
Users.update = async (req, res) => {
  if (stryMutAct_9fa48("12659")) {
    {}
  } else {
    stryCov_9fa48("12659");
    const userObj = await api.users.update(req, stryMutAct_9fa48("12660") ? {} : (stryCov_9fa48("12660"), {
      ...req.body,
      uid: req.params.uid
    }));
    helpers.formatApiResponse(200, res, userObj);
  }
};
Users.delete = async (req, res) => {
  if (stryMutAct_9fa48("12661")) {
    {}
  } else {
    stryCov_9fa48("12661");
    await api.users.delete(req, stryMutAct_9fa48("12662") ? {} : (stryCov_9fa48("12662"), {
      ...req.params,
      password: req.body.password
    }));
    helpers.formatApiResponse(200, res);
  }
};
Users.deleteContent = async (req, res) => {
  if (stryMutAct_9fa48("12663")) {
    {}
  } else {
    stryCov_9fa48("12663");
    await api.users.deleteContent(req, stryMutAct_9fa48("12664") ? {} : (stryCov_9fa48("12664"), {
      ...req.params,
      password: req.body.password
    }));
    helpers.formatApiResponse(200, res);
  }
};
Users.deleteAccount = async (req, res) => {
  if (stryMutAct_9fa48("12665")) {
    {}
  } else {
    stryCov_9fa48("12665");
    await api.users.deleteAccount(req, stryMutAct_9fa48("12666") ? {} : (stryCov_9fa48("12666"), {
      ...req.params,
      password: req.body.password
    }));
    helpers.formatApiResponse(200, res);
  }
};
Users.deleteMany = async (req, res) => {
  if (stryMutAct_9fa48("12667")) {
    {}
  } else {
    stryCov_9fa48("12667");
    await hasAdminPrivilege(req.uid, stryMutAct_9fa48("12668") ? "" : (stryCov_9fa48("12668"), 'users'));
    await api.users.deleteMany(req, req.body);
    helpers.formatApiResponse(200, res);
  }
};
Users.changePicture = async (req, res) => {
  if (stryMutAct_9fa48("12669")) {
    {}
  } else {
    stryCov_9fa48("12669");
    await api.users.changePicture(req, stryMutAct_9fa48("12670") ? {} : (stryCov_9fa48("12670"), {
      ...req.body,
      uid: req.params.uid
    }));
    helpers.formatApiResponse(200, res);
  }
};
Users.updateSettings = async (req, res) => {
  if (stryMutAct_9fa48("12671")) {
    {}
  } else {
    stryCov_9fa48("12671");
    const settings = await api.users.updateSettings(req, stryMutAct_9fa48("12672") ? {} : (stryCov_9fa48("12672"), {
      ...req.body,
      uid: req.params.uid
    }));
    helpers.formatApiResponse(200, res, settings);
  }
};
Users.changePassword = async (req, res) => {
  if (stryMutAct_9fa48("12673")) {
    {}
  } else {
    stryCov_9fa48("12673");
    await api.users.changePassword(req, stryMutAct_9fa48("12674") ? {} : (stryCov_9fa48("12674"), {
      ...req.body,
      uid: req.params.uid
    }));
    helpers.formatApiResponse(200, res);
  }
};
Users.follow = async (req, res) => {
  if (stryMutAct_9fa48("12675")) {
    {}
  } else {
    stryCov_9fa48("12675");
    await api.users.follow(req, req.params);
    helpers.formatApiResponse(200, res);
  }
};
Users.unfollow = async (req, res) => {
  if (stryMutAct_9fa48("12676")) {
    {}
  } else {
    stryCov_9fa48("12676");
    await api.users.unfollow(req, req.params);
    helpers.formatApiResponse(200, res);
  }
};
Users.ban = async (req, res) => {
  if (stryMutAct_9fa48("12677")) {
    {}
  } else {
    stryCov_9fa48("12677");
    await api.users.ban(req, stryMutAct_9fa48("12678") ? {} : (stryCov_9fa48("12678"), {
      ...req.body,
      uid: req.params.uid
    }));
    helpers.formatApiResponse(200, res);
  }
};
Users.unban = async (req, res) => {
  if (stryMutAct_9fa48("12679")) {
    {}
  } else {
    stryCov_9fa48("12679");
    await api.users.unban(req, stryMutAct_9fa48("12680") ? {} : (stryCov_9fa48("12680"), {
      ...req.body,
      uid: req.params.uid
    }));
    helpers.formatApiResponse(200, res);
  }
};
Users.mute = async (req, res) => {
  if (stryMutAct_9fa48("12681")) {
    {}
  } else {
    stryCov_9fa48("12681");
    await api.users.mute(req, stryMutAct_9fa48("12682") ? {} : (stryCov_9fa48("12682"), {
      ...req.body,
      uid: req.params.uid
    }));
    helpers.formatApiResponse(200, res);
  }
};
Users.unmute = async (req, res) => {
  if (stryMutAct_9fa48("12683")) {
    {}
  } else {
    stryCov_9fa48("12683");
    await api.users.unmute(req, stryMutAct_9fa48("12684") ? {} : (stryCov_9fa48("12684"), {
      ...req.body,
      uid: req.params.uid
    }));
    helpers.formatApiResponse(200, res);
  }
};
Users.generateToken = async (req, res) => {
  if (stryMutAct_9fa48("12685")) {
    {}
  } else {
    stryCov_9fa48("12685");
    await hasAdminPrivilege(req.uid, stryMutAct_9fa48("12686") ? "" : (stryCov_9fa48("12686"), 'settings'));
    if (stryMutAct_9fa48("12689") ? parseInt(req.params.uid, 10) === parseInt(req.user.uid, 10) : stryMutAct_9fa48("12688") ? false : stryMutAct_9fa48("12687") ? true : (stryCov_9fa48("12687", "12688", "12689"), parseInt(req.params.uid, 10) !== parseInt(req.user.uid, 10))) {
      if (stryMutAct_9fa48("12690")) {
        {}
      } else {
        stryCov_9fa48("12690");
        return helpers.formatApiResponse(401, res);
      }
    }
    const settings = await meta.settings.get(stryMutAct_9fa48("12691") ? "" : (stryCov_9fa48("12691"), 'core.api'));
    settings.tokens = stryMutAct_9fa48("12694") ? settings.tokens && [] : stryMutAct_9fa48("12693") ? false : stryMutAct_9fa48("12692") ? true : (stryCov_9fa48("12692", "12693", "12694"), settings.tokens || (stryMutAct_9fa48("12695") ? ["Stryker was here"] : (stryCov_9fa48("12695"), [])));
    const newToken = stryMutAct_9fa48("12696") ? {} : (stryCov_9fa48("12696"), {
      token: utils.generateUUID(),
      uid: req.user.uid,
      description: stryMutAct_9fa48("12699") ? req.body.description && '' : stryMutAct_9fa48("12698") ? false : stryMutAct_9fa48("12697") ? true : (stryCov_9fa48("12697", "12698", "12699"), req.body.description || (stryMutAct_9fa48("12700") ? "Stryker was here!" : (stryCov_9fa48("12700"), ''))),
      timestamp: Date.now()
    });
    settings.tokens.push(newToken);
    await meta.settings.set(stryMutAct_9fa48("12701") ? "" : (stryCov_9fa48("12701"), 'core.api'), settings);
    helpers.formatApiResponse(200, res, newToken);
  }
};
Users.deleteToken = async (req, res) => {
  if (stryMutAct_9fa48("12702")) {
    {}
  } else {
    stryCov_9fa48("12702");
    await hasAdminPrivilege(req.uid, stryMutAct_9fa48("12703") ? "" : (stryCov_9fa48("12703"), 'settings'));
    if (stryMutAct_9fa48("12706") ? parseInt(req.params.uid, 10) === parseInt(req.user.uid, 10) : stryMutAct_9fa48("12705") ? false : stryMutAct_9fa48("12704") ? true : (stryCov_9fa48("12704", "12705", "12706"), parseInt(req.params.uid, 10) !== parseInt(req.user.uid, 10))) {
      if (stryMutAct_9fa48("12707")) {
        {}
      } else {
        stryCov_9fa48("12707");
        return helpers.formatApiResponse(401, res);
      }
    }
    const settings = await meta.settings.get(stryMutAct_9fa48("12708") ? "" : (stryCov_9fa48("12708"), 'core.api'));
    const beforeLen = settings.tokens.length;
    settings.tokens = stryMutAct_9fa48("12709") ? settings.tokens : (stryCov_9fa48("12709"), settings.tokens.filter(stryMutAct_9fa48("12710") ? () => undefined : (stryCov_9fa48("12710"), tokenObj => stryMutAct_9fa48("12713") ? tokenObj.token === req.params.token : stryMutAct_9fa48("12712") ? false : stryMutAct_9fa48("12711") ? true : (stryCov_9fa48("12711", "12712", "12713"), tokenObj.token !== req.params.token))));
    if (stryMutAct_9fa48("12716") ? beforeLen === settings.tokens.length : stryMutAct_9fa48("12715") ? false : stryMutAct_9fa48("12714") ? true : (stryCov_9fa48("12714", "12715", "12716"), beforeLen !== settings.tokens.length)) {
      if (stryMutAct_9fa48("12717")) {
        {}
      } else {
        stryCov_9fa48("12717");
        await meta.settings.set(stryMutAct_9fa48("12718") ? "" : (stryCov_9fa48("12718"), 'core.api'), settings);
        helpers.formatApiResponse(200, res);
      }
    } else {
      if (stryMutAct_9fa48("12719")) {
        {}
      } else {
        stryCov_9fa48("12719");
        helpers.formatApiResponse(404, res);
      }
    }
  }
};
const getSessionAsync = util.promisify((sid, callback) => {
  if (stryMutAct_9fa48("12720")) {
    {}
  } else {
    stryCov_9fa48("12720");
    db.sessionStore.get(sid, stryMutAct_9fa48("12721") ? () => undefined : (stryCov_9fa48("12721"), (err, sessionObj) => callback(err, stryMutAct_9fa48("12724") ? sessionObj && null : stryMutAct_9fa48("12723") ? false : stryMutAct_9fa48("12722") ? true : (stryCov_9fa48("12722", "12723", "12724"), sessionObj || null))));
  }
});
Users.revokeSession = async (req, res) => {
  if (stryMutAct_9fa48("12725")) {
    {}
  } else {
    stryCov_9fa48("12725");
    // Only admins or global mods (besides the user themselves) can revoke sessions
    if (stryMutAct_9fa48("12728") ? parseInt(req.params.uid, 10) !== req.uid || !(await user.isAdminOrGlobalMod(req.uid)) : stryMutAct_9fa48("12727") ? false : stryMutAct_9fa48("12726") ? true : (stryCov_9fa48("12726", "12727", "12728"), (stryMutAct_9fa48("12730") ? parseInt(req.params.uid, 10) === req.uid : stryMutAct_9fa48("12729") ? true : (stryCov_9fa48("12729", "12730"), parseInt(req.params.uid, 10) !== req.uid)) && (stryMutAct_9fa48("12731") ? await user.isAdminOrGlobalMod(req.uid) : (stryCov_9fa48("12731"), !(await user.isAdminOrGlobalMod(req.uid)))))) {
      if (stryMutAct_9fa48("12732")) {
        {}
      } else {
        stryCov_9fa48("12732");
        return helpers.formatApiResponse(404, res);
      }
    }
    const sids = await db.getSortedSetRange(stryMutAct_9fa48("12733") ? `` : (stryCov_9fa48("12733"), `uid:${req.params.uid}:sessions`), 0, stryMutAct_9fa48("12734") ? +1 : (stryCov_9fa48("12734"), -1));
    let _id;
    for (const sid of sids) {
      if (stryMutAct_9fa48("12735")) {
        {}
      } else {
        stryCov_9fa48("12735");
        /* eslint-disable no-await-in-loop */
        const sessionObj = await getSessionAsync(sid);
        if (stryMutAct_9fa48("12738") ? sessionObj && sessionObj.meta || sessionObj.meta.uuid === req.params.uuid : stryMutAct_9fa48("12737") ? false : stryMutAct_9fa48("12736") ? true : (stryCov_9fa48("12736", "12737", "12738"), (stryMutAct_9fa48("12740") ? sessionObj || sessionObj.meta : stryMutAct_9fa48("12739") ? true : (stryCov_9fa48("12739", "12740"), sessionObj && sessionObj.meta)) && (stryMutAct_9fa48("12742") ? sessionObj.meta.uuid !== req.params.uuid : stryMutAct_9fa48("12741") ? true : (stryCov_9fa48("12741", "12742"), sessionObj.meta.uuid === req.params.uuid)))) {
          if (stryMutAct_9fa48("12743")) {
            {}
          } else {
            stryCov_9fa48("12743");
            _id = sid;
            break;
          }
        }
      }
    }
    if (stryMutAct_9fa48("12746") ? false : stryMutAct_9fa48("12745") ? true : stryMutAct_9fa48("12744") ? _id : (stryCov_9fa48("12744", "12745", "12746"), !_id)) {
      if (stryMutAct_9fa48("12747")) {
        {}
      } else {
        stryCov_9fa48("12747");
        throw new Error(stryMutAct_9fa48("12748") ? "" : (stryCov_9fa48("12748"), '[[error:no-session-found]]'));
      }
    }
    await user.auth.revokeSession(_id, req.params.uid);
    helpers.formatApiResponse(200, res);
  }
};
Users.invite = async (req, res) => {
  if (stryMutAct_9fa48("12749")) {
    {}
  } else {
    stryCov_9fa48("12749");
    const {
      emails,
      groupsToJoin = stryMutAct_9fa48("12750") ? ["Stryker was here"] : (stryCov_9fa48("12750"), [])
    } = req.body;
    if (stryMutAct_9fa48("12753") ? !emails && !Array.isArray(groupsToJoin) : stryMutAct_9fa48("12752") ? false : stryMutAct_9fa48("12751") ? true : (stryCov_9fa48("12751", "12752", "12753"), (stryMutAct_9fa48("12754") ? emails : (stryCov_9fa48("12754"), !emails)) || (stryMutAct_9fa48("12755") ? Array.isArray(groupsToJoin) : (stryCov_9fa48("12755"), !Array.isArray(groupsToJoin))))) {
      if (stryMutAct_9fa48("12756")) {
        {}
      } else {
        stryCov_9fa48("12756");
        return helpers.formatApiResponse(400, res, new Error(stryMutAct_9fa48("12757") ? "" : (stryCov_9fa48("12757"), '[[error:invalid-data]]')));
      }
    }

    // For simplicity, this API route is restricted to self-use only. This can change if needed.
    if (stryMutAct_9fa48("12760") ? parseInt(req.user.uid, 10) === parseInt(req.params.uid, 10) : stryMutAct_9fa48("12759") ? false : stryMutAct_9fa48("12758") ? true : (stryCov_9fa48("12758", "12759", "12760"), parseInt(req.user.uid, 10) !== parseInt(req.params.uid, 10))) {
      if (stryMutAct_9fa48("12761")) {
        {}
      } else {
        stryCov_9fa48("12761");
        return helpers.formatApiResponse(403, res, new Error(stryMutAct_9fa48("12762") ? "" : (stryCov_9fa48("12762"), '[[error:no-privileges]]')));
      }
    }
    const canInvite = await privileges.users.hasInvitePrivilege(req.uid);
    if (stryMutAct_9fa48("12765") ? false : stryMutAct_9fa48("12764") ? true : stryMutAct_9fa48("12763") ? canInvite : (stryCov_9fa48("12763", "12764", "12765"), !canInvite)) {
      if (stryMutAct_9fa48("12766")) {
        {}
      } else {
        stryCov_9fa48("12766");
        return helpers.formatApiResponse(403, res, new Error(stryMutAct_9fa48("12767") ? "" : (stryCov_9fa48("12767"), '[[error:no-privileges]]')));
      }
    }
    const {
      registrationType
    } = meta.config;
    const isAdmin = await user.isAdministrator(req.uid);
    if (stryMutAct_9fa48("12770") ? registrationType === 'admin-invite-only' || !isAdmin : stryMutAct_9fa48("12769") ? false : stryMutAct_9fa48("12768") ? true : (stryCov_9fa48("12768", "12769", "12770"), (stryMutAct_9fa48("12772") ? registrationType !== 'admin-invite-only' : stryMutAct_9fa48("12771") ? true : (stryCov_9fa48("12771", "12772"), registrationType === (stryMutAct_9fa48("12773") ? "" : (stryCov_9fa48("12773"), 'admin-invite-only')))) && (stryMutAct_9fa48("12774") ? isAdmin : (stryCov_9fa48("12774"), !isAdmin)))) {
      if (stryMutAct_9fa48("12775")) {
        {}
      } else {
        stryCov_9fa48("12775");
        return helpers.formatApiResponse(403, res, new Error(stryMutAct_9fa48("12776") ? "" : (stryCov_9fa48("12776"), '[[error:no-privileges]]')));
      }
    }
    const inviteGroups = (await groups.getUserInviteGroups(req.uid)).map(stryMutAct_9fa48("12777") ? () => undefined : (stryCov_9fa48("12777"), group => group.name));
    const cannotInvite = stryMutAct_9fa48("12778") ? groupsToJoin.every(group => !inviteGroups.includes(group)) : (stryCov_9fa48("12778"), groupsToJoin.some(stryMutAct_9fa48("12779") ? () => undefined : (stryCov_9fa48("12779"), group => stryMutAct_9fa48("12780") ? inviteGroups.includes(group) : (stryCov_9fa48("12780"), !inviteGroups.includes(group)))));
    if (stryMutAct_9fa48("12783") ? groupsToJoin.length > 0 || cannotInvite : stryMutAct_9fa48("12782") ? false : stryMutAct_9fa48("12781") ? true : (stryCov_9fa48("12781", "12782", "12783"), (stryMutAct_9fa48("12786") ? groupsToJoin.length <= 0 : stryMutAct_9fa48("12785") ? groupsToJoin.length >= 0 : stryMutAct_9fa48("12784") ? true : (stryCov_9fa48("12784", "12785", "12786"), groupsToJoin.length > 0)) && cannotInvite)) {
      if (stryMutAct_9fa48("12787")) {
        {}
      } else {
        stryCov_9fa48("12787");
        return helpers.formatApiResponse(403, res, new Error(stryMutAct_9fa48("12788") ? "" : (stryCov_9fa48("12788"), '[[error:no-privileges]]')));
      }
    }
    const max = meta.config.maximumInvites;
    const emailsArr = stryMutAct_9fa48("12789") ? emails.split(',').map(email => email.trim()) : (stryCov_9fa48("12789"), emails.split(stryMutAct_9fa48("12790") ? "" : (stryCov_9fa48("12790"), ',')).map(stryMutAct_9fa48("12791") ? () => undefined : (stryCov_9fa48("12791"), email => stryMutAct_9fa48("12792") ? email : (stryCov_9fa48("12792"), email.trim()))).filter(Boolean));
    for (const email of emailsArr) {
      if (stryMutAct_9fa48("12793")) {
        {}
      } else {
        stryCov_9fa48("12793");
        /* eslint-disable no-await-in-loop */
        let invites = 0;
        if (stryMutAct_9fa48("12795") ? false : stryMutAct_9fa48("12794") ? true : (stryCov_9fa48("12794", "12795"), max)) {
          if (stryMutAct_9fa48("12796")) {
            {}
          } else {
            stryCov_9fa48("12796");
            invites = await user.getInvitesNumber(req.uid);
          }
        }
        if (stryMutAct_9fa48("12799") ? !isAdmin && max || invites >= max : stryMutAct_9fa48("12798") ? false : stryMutAct_9fa48("12797") ? true : (stryCov_9fa48("12797", "12798", "12799"), (stryMutAct_9fa48("12801") ? !isAdmin || max : stryMutAct_9fa48("12800") ? true : (stryCov_9fa48("12800", "12801"), (stryMutAct_9fa48("12802") ? isAdmin : (stryCov_9fa48("12802"), !isAdmin)) && max)) && (stryMutAct_9fa48("12805") ? invites < max : stryMutAct_9fa48("12804") ? invites > max : stryMutAct_9fa48("12803") ? true : (stryCov_9fa48("12803", "12804", "12805"), invites >= max)))) {
          if (stryMutAct_9fa48("12806")) {
            {}
          } else {
            stryCov_9fa48("12806");
            return helpers.formatApiResponse(403, res, new Error(stryMutAct_9fa48("12807") ? `` : (stryCov_9fa48("12807"), `[[error:invite-maximum-met, ${invites}, ${max}]]`)));
          }
        }
        await user.sendInvitationEmail(req.uid, email, groupsToJoin);
      }
    }
    return helpers.formatApiResponse(200, res);
  }
};
Users.getInviteGroups = async function (req, res) {
  if (stryMutAct_9fa48("12808")) {
    {}
  } else {
    stryCov_9fa48("12808");
    if (stryMutAct_9fa48("12811") ? parseInt(req.params.uid, 10) === parseInt(req.user.uid, 10) : stryMutAct_9fa48("12810") ? false : stryMutAct_9fa48("12809") ? true : (stryCov_9fa48("12809", "12810", "12811"), parseInt(req.params.uid, 10) !== parseInt(req.user.uid, 10))) {
      if (stryMutAct_9fa48("12812")) {
        {}
      } else {
        stryCov_9fa48("12812");
        return helpers.formatApiResponse(401, res);
      }
    }
    const userInviteGroups = await groups.getUserInviteGroups(req.params.uid);
    return helpers.formatApiResponse(200, res, userInviteGroups.map(stryMutAct_9fa48("12813") ? () => undefined : (stryCov_9fa48("12813"), group => group.displayName)));
  }
};
Users.listEmails = async (req, res) => {
  if (stryMutAct_9fa48("12814")) {
    {}
  } else {
    stryCov_9fa48("12814");
    const [isPrivileged, {
      showemail
    }] = await Promise.all(stryMutAct_9fa48("12815") ? [] : (stryCov_9fa48("12815"), [user.isPrivileged(req.uid), user.getSettings(req.params.uid)]));
    const isSelf = stryMutAct_9fa48("12818") ? req.uid !== parseInt(req.params.uid, 10) : stryMutAct_9fa48("12817") ? false : stryMutAct_9fa48("12816") ? true : (stryCov_9fa48("12816", "12817", "12818"), req.uid === parseInt(req.params.uid, 10));
    if (stryMutAct_9fa48("12821") ? (isSelf || isPrivileged) && showemail : stryMutAct_9fa48("12820") ? false : stryMutAct_9fa48("12819") ? true : (stryCov_9fa48("12819", "12820", "12821"), (stryMutAct_9fa48("12823") ? isSelf && isPrivileged : stryMutAct_9fa48("12822") ? false : (stryCov_9fa48("12822", "12823"), isSelf || isPrivileged)) || showemail)) {
      if (stryMutAct_9fa48("12824")) {
        {}
      } else {
        stryCov_9fa48("12824");
        const emails = await db.getSortedSetRangeByScore(stryMutAct_9fa48("12825") ? "" : (stryCov_9fa48("12825"), 'email:uid'), 0, 500, req.params.uid, req.params.uid);
        helpers.formatApiResponse(200, res, stryMutAct_9fa48("12826") ? {} : (stryCov_9fa48("12826"), {
          emails
        }));
      }
    } else {
      if (stryMutAct_9fa48("12827")) {
        {}
      } else {
        stryCov_9fa48("12827");
        helpers.formatApiResponse(204, res);
      }
    }
  }
};
Users.getEmail = async (req, res) => {
  if (stryMutAct_9fa48("12828")) {
    {}
  } else {
    stryCov_9fa48("12828");
    const [isPrivileged, {
      showemail
    }, exists] = await Promise.all(stryMutAct_9fa48("12829") ? [] : (stryCov_9fa48("12829"), [user.isPrivileged(req.uid), user.getSettings(req.params.uid), db.isSortedSetMember(stryMutAct_9fa48("12830") ? "" : (stryCov_9fa48("12830"), 'email:uid'), stryMutAct_9fa48("12831") ? req.params.email.toUpperCase() : (stryCov_9fa48("12831"), req.params.email.toLowerCase()))]));
    const isSelf = stryMutAct_9fa48("12834") ? req.uid !== parseInt(req.params.uid, 10) : stryMutAct_9fa48("12833") ? false : stryMutAct_9fa48("12832") ? true : (stryCov_9fa48("12832", "12833", "12834"), req.uid === parseInt(req.params.uid, 10));
    if (stryMutAct_9fa48("12837") ? exists || isSelf || isPrivileged || showemail : stryMutAct_9fa48("12836") ? false : stryMutAct_9fa48("12835") ? true : (stryCov_9fa48("12835", "12836", "12837"), exists && (stryMutAct_9fa48("12839") ? (isSelf || isPrivileged) && showemail : stryMutAct_9fa48("12838") ? true : (stryCov_9fa48("12838", "12839"), (stryMutAct_9fa48("12841") ? isSelf && isPrivileged : stryMutAct_9fa48("12840") ? false : (stryCov_9fa48("12840", "12841"), isSelf || isPrivileged)) || showemail)))) {
      if (stryMutAct_9fa48("12842")) {
        {}
      } else {
        stryCov_9fa48("12842");
        helpers.formatApiResponse(204, res);
      }
    } else {
      if (stryMutAct_9fa48("12843")) {
        {}
      } else {
        stryCov_9fa48("12843");
        helpers.formatApiResponse(404, res);
      }
    }
  }
};
Users.confirmEmail = async (req, res) => {
  if (stryMutAct_9fa48("12844")) {
    {}
  } else {
    stryCov_9fa48("12844");
    const [pending, current, canManage] = await Promise.all(stryMutAct_9fa48("12845") ? [] : (stryCov_9fa48("12845"), [user.email.isValidationPending(req.params.uid, req.params.email), user.getUserField(req.params.uid, stryMutAct_9fa48("12846") ? "" : (stryCov_9fa48("12846"), 'email')), privileges.admin.can(stryMutAct_9fa48("12847") ? "" : (stryCov_9fa48("12847"), 'admin:users'), req.uid)]));
    if (stryMutAct_9fa48("12850") ? false : stryMutAct_9fa48("12849") ? true : stryMutAct_9fa48("12848") ? canManage : (stryCov_9fa48("12848", "12849", "12850"), !canManage)) {
      if (stryMutAct_9fa48("12851")) {
        {}
      } else {
        stryCov_9fa48("12851");
        return helpers.notAllowed(req, res);
      }
    }
    if (stryMutAct_9fa48("12853") ? false : stryMutAct_9fa48("12852") ? true : (stryCov_9fa48("12852", "12853"), pending)) {
      if (stryMutAct_9fa48("12854")) {
        {}
      } else {
        stryCov_9fa48("12854");
        // has active confirmation request
        const code = await db.get(stryMutAct_9fa48("12855") ? `` : (stryCov_9fa48("12855"), `confirm:byUid:${req.params.uid}`));
        await user.email.confirmByCode(code, req.session.id);
        helpers.formatApiResponse(200, res);
      }
    } else if (stryMutAct_9fa48("12858") ? current || current === req.params.email : stryMutAct_9fa48("12857") ? false : stryMutAct_9fa48("12856") ? true : (stryCov_9fa48("12856", "12857", "12858"), current && (stryMutAct_9fa48("12860") ? current !== req.params.email : stryMutAct_9fa48("12859") ? true : (stryCov_9fa48("12859", "12860"), current === req.params.email)))) {
      if (stryMutAct_9fa48("12861")) {
        {}
      } else {
        stryCov_9fa48("12861");
        // email in user hash (i.e. email passed into user.create)
        await user.email.confirmByUid(req.params.uid);
        helpers.formatApiResponse(200, res);
      }
    } else {
      if (stryMutAct_9fa48("12862")) {
        {}
      } else {
        stryCov_9fa48("12862");
        helpers.formatApiResponse(404, res);
      }
    }
  }
};
const prepareExport = async (req, res) => {
  if (stryMutAct_9fa48("12863")) {
    {}
  } else {
    stryCov_9fa48("12863");
    const [extension] = exportMetadata.get(req.params.type);
    const filename = stryMutAct_9fa48("12864") ? `` : (stryCov_9fa48("12864"), `${req.params.uid}_${req.params.type}.${extension}`);
    try {
      if (stryMutAct_9fa48("12865")) {
        {}
      } else {
        stryCov_9fa48("12865");
        const stat = await fs.stat(path.join(__dirname, stryMutAct_9fa48("12866") ? "" : (stryCov_9fa48("12866"), '../../../build/export'), filename));
        const modified = new Date(stat.mtimeMs);
        res.set(stryMutAct_9fa48("12867") ? "" : (stryCov_9fa48("12867"), 'Last-Modified'), modified.toUTCString());
        res.set(stryMutAct_9fa48("12868") ? "" : (stryCov_9fa48("12868"), 'ETag'), stryMutAct_9fa48("12869") ? `` : (stryCov_9fa48("12869"), `"${crypto.createHash(stryMutAct_9fa48("12870") ? "" : (stryCov_9fa48("12870"), 'md5')).update(String(stat.mtimeMs)).digest(stryMutAct_9fa48("12871") ? "" : (stryCov_9fa48("12871"), 'hex'))}"`));
        res.status(204);
        return stryMutAct_9fa48("12872") ? false : (stryCov_9fa48("12872"), true);
      }
    } catch (e) {
      if (stryMutAct_9fa48("12873")) {
        {}
      } else {
        stryCov_9fa48("12873");
        res.status(404);
        return stryMutAct_9fa48("12874") ? true : (stryCov_9fa48("12874"), false);
      }
    }
  }
};
Users.checkExportByType = async (req, res) => {
  if (stryMutAct_9fa48("12875")) {
    {}
  } else {
    stryCov_9fa48("12875");
    await prepareExport(req, res);
    res.end();
  }
};
Users.getExportByType = async (req, res) => {
  if (stryMutAct_9fa48("12876")) {
    {}
  } else {
    stryCov_9fa48("12876");
    const [extension, mime] = exportMetadata.get(req.params.type);
    const filename = stryMutAct_9fa48("12877") ? `` : (stryCov_9fa48("12877"), `${req.params.uid}_${req.params.type}.${extension}`);
    const exists = await prepareExport(req, res);
    if (stryMutAct_9fa48("12880") ? false : stryMutAct_9fa48("12879") ? true : stryMutAct_9fa48("12878") ? exists : (stryCov_9fa48("12878", "12879", "12880"), !exists)) {
      if (stryMutAct_9fa48("12881")) {
        {}
      } else {
        stryCov_9fa48("12881");
        return res.end();
      }
    }
    res.status(200);
    res.sendFile(filename, stryMutAct_9fa48("12882") ? {} : (stryCov_9fa48("12882"), {
      root: path.join(__dirname, stryMutAct_9fa48("12883") ? "" : (stryCov_9fa48("12883"), '../../../build/export')),
      headers: stryMutAct_9fa48("12884") ? {} : (stryCov_9fa48("12884"), {
        'Content-Type': mime,
        'Content-Disposition': stryMutAct_9fa48("12885") ? `` : (stryCov_9fa48("12885"), `attachment; filename=${filename}`)
      })
    }), err => {
      if (stryMutAct_9fa48("12886")) {
        {}
      } else {
        stryCov_9fa48("12886");
        if (stryMutAct_9fa48("12888") ? false : stryMutAct_9fa48("12887") ? true : (stryCov_9fa48("12887", "12888"), err)) {
          if (stryMutAct_9fa48("12889")) {
            {}
          } else {
            stryCov_9fa48("12889");
            throw err;
          }
        }
      }
    });
  }
};
Users.generateExportsByType = async (req, res) => {
  if (stryMutAct_9fa48("12890")) {
    {}
  } else {
    stryCov_9fa48("12890");
    await api.users.generateExport(req, req.params);
    helpers.formatApiResponse(202, res);
  }
};