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
const posts = require('../../posts');
const privileges = require('../../privileges');
const api = require('../../api');
const helpers = require('../helpers');
const apiHelpers = require('../../api/helpers');
const Posts = module.exports;
Posts.get = async (req, res) => {
  if (stryMutAct_9fa48("12413")) {
    {}
  } else {
    stryCov_9fa48("12413");
    helpers.formatApiResponse(200, res, await api.posts.get(req, stryMutAct_9fa48("12414") ? {} : (stryCov_9fa48("12414"), {
      pid: req.params.pid
    })));
  }
};
Posts.edit = async (req, res) => {
  if (stryMutAct_9fa48("12415")) {
    {}
  } else {
    stryCov_9fa48("12415");
    const editResult = await api.posts.edit(req, stryMutAct_9fa48("12416") ? {} : (stryCov_9fa48("12416"), {
      ...req.body,
      pid: req.params.pid,
      uid: req.uid,
      req: apiHelpers.buildReqObject(req)
    }));
    helpers.formatApiResponse(200, res, editResult);
  }
};
Posts.purge = async (req, res) => {
  if (stryMutAct_9fa48("12417")) {
    {}
  } else {
    stryCov_9fa48("12417");
    await api.posts.purge(req, stryMutAct_9fa48("12418") ? {} : (stryCov_9fa48("12418"), {
      pid: req.params.pid
    }));
    helpers.formatApiResponse(200, res);
  }
};
Posts.restore = async (req, res) => {
  if (stryMutAct_9fa48("12419")) {
    {}
  } else {
    stryCov_9fa48("12419");
    await api.posts.restore(req, stryMutAct_9fa48("12420") ? {} : (stryCov_9fa48("12420"), {
      pid: req.params.pid
    }));
    helpers.formatApiResponse(200, res);
  }
};
Posts.delete = async (req, res) => {
  if (stryMutAct_9fa48("12421")) {
    {}
  } else {
    stryCov_9fa48("12421");
    await api.posts.delete(req, stryMutAct_9fa48("12422") ? {} : (stryCov_9fa48("12422"), {
      pid: req.params.pid
    }));
    helpers.formatApiResponse(200, res);
  }
};
Posts.move = async (req, res) => {
  if (stryMutAct_9fa48("12423")) {
    {}
  } else {
    stryCov_9fa48("12423");
    await api.posts.move(req, stryMutAct_9fa48("12424") ? {} : (stryCov_9fa48("12424"), {
      pid: req.params.pid,
      tid: req.body.tid
    }));
    helpers.formatApiResponse(200, res);
  }
};
async function mock(req) {
  if (stryMutAct_9fa48("12425")) {
    {}
  } else {
    stryCov_9fa48("12425");
    const tid = await posts.getPostField(req.params.pid, stryMutAct_9fa48("12426") ? "" : (stryCov_9fa48("12426"), 'tid'));
    return stryMutAct_9fa48("12427") ? {} : (stryCov_9fa48("12427"), {
      pid: req.params.pid,
      room_id: stryMutAct_9fa48("12428") ? `` : (stryCov_9fa48("12428"), `topic_${tid}`)
    });
  }
}
Posts.vote = async (req, res) => {
  if (stryMutAct_9fa48("12429")) {
    {}
  } else {
    stryCov_9fa48("12429");
    const data = await mock(req);
    if (stryMutAct_9fa48("12433") ? req.body.delta <= 0 : stryMutAct_9fa48("12432") ? req.body.delta >= 0 : stryMutAct_9fa48("12431") ? false : stryMutAct_9fa48("12430") ? true : (stryCov_9fa48("12430", "12431", "12432", "12433"), req.body.delta > 0)) {
      if (stryMutAct_9fa48("12434")) {
        {}
      } else {
        stryCov_9fa48("12434");
        await api.posts.upvote(req, data);
      }
    } else if (stryMutAct_9fa48("12438") ? req.body.delta >= 0 : stryMutAct_9fa48("12437") ? req.body.delta <= 0 : stryMutAct_9fa48("12436") ? false : stryMutAct_9fa48("12435") ? true : (stryCov_9fa48("12435", "12436", "12437", "12438"), req.body.delta < 0)) {
      if (stryMutAct_9fa48("12439")) {
        {}
      } else {
        stryCov_9fa48("12439");
        await api.posts.downvote(req, data);
      }
    } else {
      if (stryMutAct_9fa48("12440")) {
        {}
      } else {
        stryCov_9fa48("12440");
        await api.posts.unvote(req, data);
      }
    }
    helpers.formatApiResponse(200, res);
  }
};
Posts.unvote = async (req, res) => {
  if (stryMutAct_9fa48("12441")) {
    {}
  } else {
    stryCov_9fa48("12441");
    const data = await mock(req);
    await api.posts.unvote(req, data);
    helpers.formatApiResponse(200, res);
  }
};
Posts.bookmark = async (req, res) => {
  if (stryMutAct_9fa48("12442")) {
    {}
  } else {
    stryCov_9fa48("12442");
    const data = await mock(req);
    await api.posts.bookmark(req, data);
    helpers.formatApiResponse(200, res);
  }
};
Posts.unbookmark = async (req, res) => {
  if (stryMutAct_9fa48("12443")) {
    {}
  } else {
    stryCov_9fa48("12443");
    const data = await mock(req);
    await api.posts.unbookmark(req, data);
    helpers.formatApiResponse(200, res);
  }
};
Posts.getDiffs = async (req, res) => {
  if (stryMutAct_9fa48("12444")) {
    {}
  } else {
    stryCov_9fa48("12444");
    helpers.formatApiResponse(200, res, await api.posts.getDiffs(req, stryMutAct_9fa48("12445") ? {} : (stryCov_9fa48("12445"), {
      ...req.params
    })));
  }
};
Posts.loadDiff = async (req, res) => {
  if (stryMutAct_9fa48("12446")) {
    {}
  } else {
    stryCov_9fa48("12446");
    helpers.formatApiResponse(200, res, await api.posts.loadDiff(req, stryMutAct_9fa48("12447") ? {} : (stryCov_9fa48("12447"), {
      ...req.params
    })));
  }
};
Posts.restoreDiff = async (req, res) => {
  if (stryMutAct_9fa48("12448")) {
    {}
  } else {
    stryCov_9fa48("12448");
    helpers.formatApiResponse(200, res, await api.posts.restoreDiff(req, stryMutAct_9fa48("12449") ? {} : (stryCov_9fa48("12449"), {
      ...req.params
    })));
  }
};
Posts.deleteDiff = async (req, res) => {
  if (stryMutAct_9fa48("12450")) {
    {}
  } else {
    stryCov_9fa48("12450");
    if (stryMutAct_9fa48("12453") ? false : stryMutAct_9fa48("12452") ? true : stryMutAct_9fa48("12451") ? parseInt(req.params.pid, 10) : (stryCov_9fa48("12451", "12452", "12453"), !parseInt(req.params.pid, 10))) {
      if (stryMutAct_9fa48("12454")) {
        {}
      } else {
        stryCov_9fa48("12454");
        throw new Error(stryMutAct_9fa48("12455") ? "" : (stryCov_9fa48("12455"), '[[error:invalid-data]]'));
      }
    }
    const cid = await posts.getCidByPid(req.params.pid);
    const [isAdmin, isModerator] = await Promise.all(stryMutAct_9fa48("12456") ? [] : (stryCov_9fa48("12456"), [privileges.users.isAdministrator(req.uid), privileges.users.isModerator(req.uid, cid)]));
    if (stryMutAct_9fa48("12459") ? false : stryMutAct_9fa48("12458") ? true : stryMutAct_9fa48("12457") ? isAdmin || isModerator : (stryCov_9fa48("12457", "12458", "12459"), !(stryMutAct_9fa48("12462") ? isAdmin && isModerator : stryMutAct_9fa48("12461") ? false : stryMutAct_9fa48("12460") ? true : (stryCov_9fa48("12460", "12461", "12462"), isAdmin || isModerator)))) {
      if (stryMutAct_9fa48("12463")) {
        {}
      } else {
        stryCov_9fa48("12463");
        return helpers.formatApiResponse(403, res, new Error(stryMutAct_9fa48("12464") ? "" : (stryCov_9fa48("12464"), '[[error:no-privileges]]')));
      }
    }
    await posts.diffs.delete(req.params.pid, req.params.timestamp, req.uid);
    helpers.formatApiResponse(200, res, await api.posts.getDiffs(req, stryMutAct_9fa48("12465") ? {} : (stryCov_9fa48("12465"), {
      ...req.params
    })));
  }
};