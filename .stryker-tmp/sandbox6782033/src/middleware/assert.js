// @ts-nocheck
'use strict';

/**
 * The middlewares here strictly act to "assert" validity of the incoming
 * payload and throw an error otherwise.
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
const path = require('path');
const nconf = require('nconf');
const file = require('../file');
const user = require('../user');
const groups = require('../groups');
const topics = require('../topics');
const posts = require('../posts');
const messaging = require('../messaging');
const flags = require('../flags');
const slugify = require('../slugify');
const helpers = require('./helpers');
const controllerHelpers = require('../controllers/helpers');
const Assert = module.exports;
Assert.user = helpers.try(async (req, res, next) => {
  if (stryMutAct_9fa48("25264")) {
    {}
  } else {
    stryCov_9fa48("25264");
    if (stryMutAct_9fa48("25267") ? false : stryMutAct_9fa48("25266") ? true : stryMutAct_9fa48("25265") ? await user.exists(req.params.uid) : (stryCov_9fa48("25265", "25266", "25267"), !(await user.exists(req.params.uid)))) {
      if (stryMutAct_9fa48("25268")) {
        {}
      } else {
        stryCov_9fa48("25268");
        return controllerHelpers.formatApiResponse(404, res, new Error(stryMutAct_9fa48("25269") ? "" : (stryCov_9fa48("25269"), '[[error:no-user]]')));
      }
    }
    next();
  }
});
Assert.group = helpers.try(async (req, res, next) => {
  if (stryMutAct_9fa48("25270")) {
    {}
  } else {
    stryCov_9fa48("25270");
    const name = await groups.getGroupNameByGroupSlug(req.params.slug);
    if (stryMutAct_9fa48("25273") ? !name && !(await groups.exists(name)) : stryMutAct_9fa48("25272") ? false : stryMutAct_9fa48("25271") ? true : (stryCov_9fa48("25271", "25272", "25273"), (stryMutAct_9fa48("25274") ? name : (stryCov_9fa48("25274"), !name)) || (stryMutAct_9fa48("25275") ? await groups.exists(name) : (stryCov_9fa48("25275"), !(await groups.exists(name)))))) {
      if (stryMutAct_9fa48("25276")) {
        {}
      } else {
        stryCov_9fa48("25276");
        return controllerHelpers.formatApiResponse(404, res, new Error(stryMutAct_9fa48("25277") ? "" : (stryCov_9fa48("25277"), '[[error:no-group]]')));
      }
    }
    next();
  }
});
Assert.topic = helpers.try(async (req, res, next) => {
  if (stryMutAct_9fa48("25278")) {
    {}
  } else {
    stryCov_9fa48("25278");
    if (stryMutAct_9fa48("25281") ? false : stryMutAct_9fa48("25280") ? true : stryMutAct_9fa48("25279") ? await topics.exists(req.params.tid) : (stryCov_9fa48("25279", "25280", "25281"), !(await topics.exists(req.params.tid)))) {
      if (stryMutAct_9fa48("25282")) {
        {}
      } else {
        stryCov_9fa48("25282");
        return controllerHelpers.formatApiResponse(404, res, new Error(stryMutAct_9fa48("25283") ? "" : (stryCov_9fa48("25283"), '[[error:no-topic]]')));
      }
    }
    next();
  }
});
Assert.post = helpers.try(async (req, res, next) => {
  if (stryMutAct_9fa48("25284")) {
    {}
  } else {
    stryCov_9fa48("25284");
    if (stryMutAct_9fa48("25287") ? false : stryMutAct_9fa48("25286") ? true : stryMutAct_9fa48("25285") ? await posts.exists(req.params.pid) : (stryCov_9fa48("25285", "25286", "25287"), !(await posts.exists(req.params.pid)))) {
      if (stryMutAct_9fa48("25288")) {
        {}
      } else {
        stryCov_9fa48("25288");
        return controllerHelpers.formatApiResponse(404, res, new Error(stryMutAct_9fa48("25289") ? "" : (stryCov_9fa48("25289"), '[[error:no-post]]')));
      }
    }
    next();
  }
});
Assert.flag = helpers.try(async (req, res, next) => {
  if (stryMutAct_9fa48("25290")) {
    {}
  } else {
    stryCov_9fa48("25290");
    const canView = await flags.canView(req.params.flagId, req.uid);
    if (stryMutAct_9fa48("25293") ? false : stryMutAct_9fa48("25292") ? true : stryMutAct_9fa48("25291") ? canView : (stryCov_9fa48("25291", "25292", "25293"), !canView)) {
      if (stryMutAct_9fa48("25294")) {
        {}
      } else {
        stryCov_9fa48("25294");
        return controllerHelpers.formatApiResponse(404, res, new Error(stryMutAct_9fa48("25295") ? "" : (stryCov_9fa48("25295"), '[[error:no-flag]]')));
      }
    }
    next();
  }
});
Assert.path = helpers.try(async (req, res, next) => {
  if (stryMutAct_9fa48("25296")) {
    {}
  } else {
    stryCov_9fa48("25296");
    // file: URL support
    if (stryMutAct_9fa48("25299") ? req.body.path.endsWith('file:///') : stryMutAct_9fa48("25298") ? false : stryMutAct_9fa48("25297") ? true : (stryCov_9fa48("25297", "25298", "25299"), req.body.path.startsWith(stryMutAct_9fa48("25300") ? "" : (stryCov_9fa48("25300"), 'file:///')))) {
      if (stryMutAct_9fa48("25301")) {
        {}
      } else {
        stryCov_9fa48("25301");
        req.body.path = new URL(req.body.path).pathname;
      }
    }

    // Strip upload_url if found
    if (stryMutAct_9fa48("25304") ? req.body.path.endsWith(nconf.get('upload_url')) : stryMutAct_9fa48("25303") ? false : stryMutAct_9fa48("25302") ? true : (stryCov_9fa48("25302", "25303", "25304"), req.body.path.startsWith(nconf.get(stryMutAct_9fa48("25305") ? "" : (stryCov_9fa48("25305"), 'upload_url'))))) {
      if (stryMutAct_9fa48("25306")) {
        {}
      } else {
        stryCov_9fa48("25306");
        req.body.path = stryMutAct_9fa48("25307") ? req.body.path : (stryCov_9fa48("25307"), req.body.path.slice(nconf.get(stryMutAct_9fa48("25308") ? "" : (stryCov_9fa48("25308"), 'upload_url')).length));
      }
    }
    const pathToFile = path.join(nconf.get(stryMutAct_9fa48("25309") ? "" : (stryCov_9fa48("25309"), 'upload_path')), req.body.path);
    res.locals.cleanedPath = pathToFile;

    // Guard against path traversal
    if (stryMutAct_9fa48("25312") ? false : stryMutAct_9fa48("25311") ? true : stryMutAct_9fa48("25310") ? pathToFile.startsWith(nconf.get('upload_path')) : (stryCov_9fa48("25310", "25311", "25312"), !(stryMutAct_9fa48("25313") ? pathToFile.endsWith(nconf.get('upload_path')) : (stryCov_9fa48("25313"), pathToFile.startsWith(nconf.get(stryMutAct_9fa48("25314") ? "" : (stryCov_9fa48("25314"), 'upload_path'))))))) {
      if (stryMutAct_9fa48("25315")) {
        {}
      } else {
        stryCov_9fa48("25315");
        return controllerHelpers.formatApiResponse(403, res, new Error(stryMutAct_9fa48("25316") ? "" : (stryCov_9fa48("25316"), '[[error:invalid-path]]')));
      }
    }
    if (stryMutAct_9fa48("25319") ? false : stryMutAct_9fa48("25318") ? true : stryMutAct_9fa48("25317") ? await file.exists(pathToFile) : (stryCov_9fa48("25317", "25318", "25319"), !(await file.exists(pathToFile)))) {
      if (stryMutAct_9fa48("25320")) {
        {}
      } else {
        stryCov_9fa48("25320");
        return controllerHelpers.formatApiResponse(404, res, new Error(stryMutAct_9fa48("25321") ? "" : (stryCov_9fa48("25321"), '[[error:invalid-path]]')));
      }
    }
    next();
  }
});
Assert.folderName = helpers.try(async (req, res, next) => {
  if (stryMutAct_9fa48("25322")) {
    {}
  } else {
    stryCov_9fa48("25322");
    const folderName = slugify(path.basename(stryMutAct_9fa48("25323") ? req.body.folderName : (stryCov_9fa48("25323"), req.body.folderName.trim())));
    const folderPath = path.join(res.locals.cleanedPath, folderName);

    // slugify removes invalid characters, folderName may become empty
    if (stryMutAct_9fa48("25326") ? false : stryMutAct_9fa48("25325") ? true : stryMutAct_9fa48("25324") ? folderName : (stryCov_9fa48("25324", "25325", "25326"), !folderName)) {
      if (stryMutAct_9fa48("25327")) {
        {}
      } else {
        stryCov_9fa48("25327");
        return controllerHelpers.formatApiResponse(403, res, new Error(stryMutAct_9fa48("25328") ? "" : (stryCov_9fa48("25328"), '[[error:invalid-path]]')));
      }
    }
    if (stryMutAct_9fa48("25330") ? false : stryMutAct_9fa48("25329") ? true : (stryCov_9fa48("25329", "25330"), await file.exists(folderPath))) {
      if (stryMutAct_9fa48("25331")) {
        {}
      } else {
        stryCov_9fa48("25331");
        return controllerHelpers.formatApiResponse(403, res, new Error(stryMutAct_9fa48("25332") ? "" : (stryCov_9fa48("25332"), '[[error:folder-exists]]')));
      }
    }
    res.locals.folderPath = folderPath;
    next();
  }
});
Assert.room = helpers.try(async (req, res, next) => {
  if (stryMutAct_9fa48("25333")) {
    {}
  } else {
    stryCov_9fa48("25333");
    if (stryMutAct_9fa48("25336") ? false : stryMutAct_9fa48("25335") ? true : stryMutAct_9fa48("25334") ? isFinite(req.params.roomId) : (stryCov_9fa48("25334", "25335", "25336"), !isFinite(req.params.roomId))) {
      if (stryMutAct_9fa48("25337")) {
        {}
      } else {
        stryCov_9fa48("25337");
        return controllerHelpers.formatApiResponse(400, res, new Error(stryMutAct_9fa48("25338") ? "" : (stryCov_9fa48("25338"), '[[error:invalid-data]]')));
      }
    }
    const [exists, inRoom] = await Promise.all(stryMutAct_9fa48("25339") ? [] : (stryCov_9fa48("25339"), [await messaging.roomExists(req.params.roomId), await messaging.isUserInRoom(req.uid, req.params.roomId)]));
    if (stryMutAct_9fa48("25342") ? false : stryMutAct_9fa48("25341") ? true : stryMutAct_9fa48("25340") ? exists : (stryCov_9fa48("25340", "25341", "25342"), !exists)) {
      if (stryMutAct_9fa48("25343")) {
        {}
      } else {
        stryCov_9fa48("25343");
        return controllerHelpers.formatApiResponse(404, res, new Error(stryMutAct_9fa48("25344") ? "" : (stryCov_9fa48("25344"), '[[error:chat-room-does-not-exist]]')));
      }
    }
    if (stryMutAct_9fa48("25347") ? false : stryMutAct_9fa48("25346") ? true : stryMutAct_9fa48("25345") ? inRoom : (stryCov_9fa48("25345", "25346", "25347"), !inRoom)) {
      if (stryMutAct_9fa48("25348")) {
        {}
      } else {
        stryCov_9fa48("25348");
        return controllerHelpers.formatApiResponse(403, res, new Error(stryMutAct_9fa48("25349") ? "" : (stryCov_9fa48("25349"), '[[error:no-privileges]]')));
      }
    }
    next();
  }
});
Assert.message = helpers.try(async (req, res, next) => {
  if (stryMutAct_9fa48("25350")) {
    {}
  } else {
    stryCov_9fa48("25350");
    if (stryMutAct_9fa48("25353") ? (!isFinite(req.params.mid) || !(await messaging.messageExists(req.params.mid))) && !(await messaging.canViewMessage(req.params.mid, req.params.roomId, req.uid)) : stryMutAct_9fa48("25352") ? false : stryMutAct_9fa48("25351") ? true : (stryCov_9fa48("25351", "25352", "25353"), (stryMutAct_9fa48("25355") ? !isFinite(req.params.mid) && !(await messaging.messageExists(req.params.mid)) : stryMutAct_9fa48("25354") ? false : (stryCov_9fa48("25354", "25355"), (stryMutAct_9fa48("25356") ? isFinite(req.params.mid) : (stryCov_9fa48("25356"), !isFinite(req.params.mid))) || (stryMutAct_9fa48("25357") ? await messaging.messageExists(req.params.mid) : (stryCov_9fa48("25357"), !(await messaging.messageExists(req.params.mid)))))) || (stryMutAct_9fa48("25358") ? await messaging.canViewMessage(req.params.mid, req.params.roomId, req.uid) : (stryCov_9fa48("25358"), !(await messaging.canViewMessage(req.params.mid, req.params.roomId, req.uid)))))) {
      if (stryMutAct_9fa48("25359")) {
        {}
      } else {
        stryCov_9fa48("25359");
        return controllerHelpers.formatApiResponse(400, res, new Error(stryMutAct_9fa48("25360") ? "" : (stryCov_9fa48("25360"), '[[error:invalid-mid]]')));
      }
    }
    next();
  }
});