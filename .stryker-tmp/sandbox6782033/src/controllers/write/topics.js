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
const validator = require('validator');
const db = require('../../database');
const api = require('../../api');
const topics = require('../../topics');
const privileges = require('../../privileges');
const helpers = require('../helpers');
const middleware = require('../../middleware');
const uploadsController = require('../uploads');
const Topics = module.exports;
Topics.get = async (req, res) => {
  if (stryMutAct_9fa48("12466")) {
    {}
  } else {
    stryCov_9fa48("12466");
    helpers.formatApiResponse(200, res, await api.topics.get(req, req.params));
  }
};
Topics.create = async (req, res) => {
  if (stryMutAct_9fa48("12467")) {
    {}
  } else {
    stryCov_9fa48("12467");
    const id = await lockPosting(req, stryMutAct_9fa48("12468") ? "" : (stryCov_9fa48("12468"), '[[error:already-posting]]'));
    try {
      if (stryMutAct_9fa48("12469")) {
        {}
      } else {
        stryCov_9fa48("12469");
        const payload = await api.topics.create(req, req.body);
        if (stryMutAct_9fa48("12471") ? false : stryMutAct_9fa48("12470") ? true : (stryCov_9fa48("12470", "12471"), payload.queued)) {
          if (stryMutAct_9fa48("12472")) {
            {}
          } else {
            stryCov_9fa48("12472");
            helpers.formatApiResponse(202, res, payload);
          }
        } else {
          if (stryMutAct_9fa48("12473")) {
            {}
          } else {
            stryCov_9fa48("12473");
            helpers.formatApiResponse(200, res, payload);
          }
        }
      }
    } finally {
      if (stryMutAct_9fa48("12474")) {
        {}
      } else {
        stryCov_9fa48("12474");
        await db.deleteObjectField(stryMutAct_9fa48("12475") ? "" : (stryCov_9fa48("12475"), 'locks'), id);
      }
    }
  }
};
Topics.reply = async (req, res) => {
  if (stryMutAct_9fa48("12476")) {
    {}
  } else {
    stryCov_9fa48("12476");
    const id = await lockPosting(req, stryMutAct_9fa48("12477") ? "" : (stryCov_9fa48("12477"), '[[error:already-posting]]'));
    try {
      if (stryMutAct_9fa48("12478")) {
        {}
      } else {
        stryCov_9fa48("12478");
        const payload = await api.topics.reply(req, stryMutAct_9fa48("12479") ? {} : (stryCov_9fa48("12479"), {
          ...req.body,
          tid: req.params.tid
        }));
        helpers.formatApiResponse(200, res, payload);
      }
    } finally {
      if (stryMutAct_9fa48("12480")) {
        {}
      } else {
        stryCov_9fa48("12480");
        await db.deleteObjectField(stryMutAct_9fa48("12481") ? "" : (stryCov_9fa48("12481"), 'locks'), id);
      }
    }
  }
};
async function lockPosting(req, error) {
  if (stryMutAct_9fa48("12482")) {
    {}
  } else {
    stryCov_9fa48("12482");
    const id = (stryMutAct_9fa48("12486") ? req.uid <= 0 : stryMutAct_9fa48("12485") ? req.uid >= 0 : stryMutAct_9fa48("12484") ? false : stryMutAct_9fa48("12483") ? true : (stryCov_9fa48("12483", "12484", "12485", "12486"), req.uid > 0)) ? req.uid : req.sessionID;
    const value = stryMutAct_9fa48("12487") ? `` : (stryCov_9fa48("12487"), `posting${id}`);
    const count = await db.incrObjectField(stryMutAct_9fa48("12488") ? "" : (stryCov_9fa48("12488"), 'locks'), value);
    if (stryMutAct_9fa48("12492") ? count <= 1 : stryMutAct_9fa48("12491") ? count >= 1 : stryMutAct_9fa48("12490") ? false : stryMutAct_9fa48("12489") ? true : (stryCov_9fa48("12489", "12490", "12491", "12492"), count > 1)) {
      if (stryMutAct_9fa48("12493")) {
        {}
      } else {
        stryCov_9fa48("12493");
        throw new Error(error);
      }
    }
    return value;
  }
}
Topics.delete = async (req, res) => {
  if (stryMutAct_9fa48("12494")) {
    {}
  } else {
    stryCov_9fa48("12494");
    await api.topics.delete(req, stryMutAct_9fa48("12495") ? {} : (stryCov_9fa48("12495"), {
      tids: stryMutAct_9fa48("12496") ? [] : (stryCov_9fa48("12496"), [req.params.tid])
    }));
    helpers.formatApiResponse(200, res);
  }
};
Topics.restore = async (req, res) => {
  if (stryMutAct_9fa48("12497")) {
    {}
  } else {
    stryCov_9fa48("12497");
    await api.topics.restore(req, stryMutAct_9fa48("12498") ? {} : (stryCov_9fa48("12498"), {
      tids: stryMutAct_9fa48("12499") ? [] : (stryCov_9fa48("12499"), [req.params.tid])
    }));
    helpers.formatApiResponse(200, res);
  }
};
Topics.purge = async (req, res) => {
  if (stryMutAct_9fa48("12500")) {
    {}
  } else {
    stryCov_9fa48("12500");
    await api.topics.purge(req, stryMutAct_9fa48("12501") ? {} : (stryCov_9fa48("12501"), {
      tids: stryMutAct_9fa48("12502") ? [] : (stryCov_9fa48("12502"), [req.params.tid])
    }));
    helpers.formatApiResponse(200, res);
  }
};
Topics.pin = async (req, res) => {
  if (stryMutAct_9fa48("12503")) {
    {}
  } else {
    stryCov_9fa48("12503");
    // Pin expiry was not available w/ sockets hence not included in api lib method
    if (stryMutAct_9fa48("12505") ? false : stryMutAct_9fa48("12504") ? true : (stryCov_9fa48("12504", "12505"), req.body.expiry)) {
      if (stryMutAct_9fa48("12506")) {
        {}
      } else {
        stryCov_9fa48("12506");
        await topics.tools.setPinExpiry(req.params.tid, req.body.expiry, req.uid);
      }
    }
    await api.topics.pin(req, stryMutAct_9fa48("12507") ? {} : (stryCov_9fa48("12507"), {
      tids: stryMutAct_9fa48("12508") ? [] : (stryCov_9fa48("12508"), [req.params.tid])
    }));
    helpers.formatApiResponse(200, res);
  }
};
Topics.unpin = async (req, res) => {
  if (stryMutAct_9fa48("12509")) {
    {}
  } else {
    stryCov_9fa48("12509");
    await api.topics.unpin(req, stryMutAct_9fa48("12510") ? {} : (stryCov_9fa48("12510"), {
      tids: stryMutAct_9fa48("12511") ? [] : (stryCov_9fa48("12511"), [req.params.tid])
    }));
    helpers.formatApiResponse(200, res);
  }
};
Topics.lock = async (req, res) => {
  if (stryMutAct_9fa48("12512")) {
    {}
  } else {
    stryCov_9fa48("12512");
    await api.topics.lock(req, stryMutAct_9fa48("12513") ? {} : (stryCov_9fa48("12513"), {
      tids: stryMutAct_9fa48("12514") ? [] : (stryCov_9fa48("12514"), [req.params.tid])
    }));
    helpers.formatApiResponse(200, res);
  }
};
Topics.unlock = async (req, res) => {
  if (stryMutAct_9fa48("12515")) {
    {}
  } else {
    stryCov_9fa48("12515");
    await api.topics.unlock(req, stryMutAct_9fa48("12516") ? {} : (stryCov_9fa48("12516"), {
      tids: stryMutAct_9fa48("12517") ? [] : (stryCov_9fa48("12517"), [req.params.tid])
    }));
    helpers.formatApiResponse(200, res);
  }
};
Topics.follow = async (req, res) => {
  if (stryMutAct_9fa48("12518")) {
    {}
  } else {
    stryCov_9fa48("12518");
    await api.topics.follow(req, req.params);
    helpers.formatApiResponse(200, res);
  }
};
Topics.ignore = async (req, res) => {
  if (stryMutAct_9fa48("12519")) {
    {}
  } else {
    stryCov_9fa48("12519");
    await api.topics.ignore(req, req.params);
    helpers.formatApiResponse(200, res);
  }
};
Topics.unfollow = async (req, res) => {
  if (stryMutAct_9fa48("12520")) {
    {}
  } else {
    stryCov_9fa48("12520");
    await api.topics.unfollow(req, req.params);
    helpers.formatApiResponse(200, res);
  }
};
Topics.addTags = async (req, res) => {
  if (stryMutAct_9fa48("12521")) {
    {}
  } else {
    stryCov_9fa48("12521");
    if (stryMutAct_9fa48("12524") ? false : stryMutAct_9fa48("12523") ? true : stryMutAct_9fa48("12522") ? await privileges.topics.canEdit(req.params.tid, req.user.uid) : (stryCov_9fa48("12522", "12523", "12524"), !(await privileges.topics.canEdit(req.params.tid, req.user.uid)))) {
      if (stryMutAct_9fa48("12525")) {
        {}
      } else {
        stryCov_9fa48("12525");
        return helpers.formatApiResponse(403, res);
      }
    }
    const cid = await topics.getTopicField(req.params.tid, stryMutAct_9fa48("12526") ? "" : (stryCov_9fa48("12526"), 'cid'));
    await topics.validateTags(req.body.tags, cid, req.user.uid, req.params.tid);
    const tags = await topics.filterTags(req.body.tags);
    await topics.addTags(tags, stryMutAct_9fa48("12527") ? [] : (stryCov_9fa48("12527"), [req.params.tid]));
    helpers.formatApiResponse(200, res);
  }
};
Topics.deleteTags = async (req, res) => {
  if (stryMutAct_9fa48("12528")) {
    {}
  } else {
    stryCov_9fa48("12528");
    if (stryMutAct_9fa48("12531") ? false : stryMutAct_9fa48("12530") ? true : stryMutAct_9fa48("12529") ? await privileges.topics.canEdit(req.params.tid, req.user.uid) : (stryCov_9fa48("12529", "12530", "12531"), !(await privileges.topics.canEdit(req.params.tid, req.user.uid)))) {
      if (stryMutAct_9fa48("12532")) {
        {}
      } else {
        stryCov_9fa48("12532");
        return helpers.formatApiResponse(403, res);
      }
    }
    await topics.deleteTopicTags(req.params.tid);
    helpers.formatApiResponse(200, res);
  }
};
Topics.getThumbs = async (req, res) => {
  if (stryMutAct_9fa48("12533")) {
    {}
  } else {
    stryCov_9fa48("12533");
    if (stryMutAct_9fa48("12535") ? false : stryMutAct_9fa48("12534") ? true : (stryCov_9fa48("12534", "12535"), isFinite(req.params.tid))) {
      if (stryMutAct_9fa48("12536")) {
        {}
      } else {
        stryCov_9fa48("12536");
        // post_uuids can be passed in occasionally, in that case no checks are necessary
        const [exists, canRead] = await Promise.all(stryMutAct_9fa48("12537") ? [] : (stryCov_9fa48("12537"), [topics.exists(req.params.tid), privileges.topics.can(stryMutAct_9fa48("12538") ? "" : (stryCov_9fa48("12538"), 'topics:read'), req.params.tid, req.uid)]));
        if (stryMutAct_9fa48("12541") ? !exists && !canRead : stryMutAct_9fa48("12540") ? false : stryMutAct_9fa48("12539") ? true : (stryCov_9fa48("12539", "12540", "12541"), (stryMutAct_9fa48("12542") ? exists : (stryCov_9fa48("12542"), !exists)) || (stryMutAct_9fa48("12543") ? canRead : (stryCov_9fa48("12543"), !canRead)))) {
          if (stryMutAct_9fa48("12544")) {
            {}
          } else {
            stryCov_9fa48("12544");
            return helpers.formatApiResponse(403, res);
          }
        }
      }
    }
    helpers.formatApiResponse(200, res, await topics.thumbs.get(req.params.tid));
  }
};
Topics.addThumb = async (req, res) => {
  if (stryMutAct_9fa48("12545")) {
    {}
  } else {
    stryCov_9fa48("12545");
    await checkThumbPrivileges(stryMutAct_9fa48("12546") ? {} : (stryCov_9fa48("12546"), {
      tid: req.params.tid,
      uid: req.user.uid,
      res
    }));
    if (stryMutAct_9fa48("12548") ? false : stryMutAct_9fa48("12547") ? true : (stryCov_9fa48("12547", "12548"), res.headersSent)) {
      if (stryMutAct_9fa48("12549")) {
        {}
      } else {
        stryCov_9fa48("12549");
        return;
      }
    }
    const files = await uploadsController.uploadThumb(req, res); // response is handled here

    // Add uploaded files to topic zset
    if (stryMutAct_9fa48("12552") ? files || files.length : stryMutAct_9fa48("12551") ? false : stryMutAct_9fa48("12550") ? true : (stryCov_9fa48("12550", "12551", "12552"), files && files.length)) {
      if (stryMutAct_9fa48("12553")) {
        {}
      } else {
        stryCov_9fa48("12553");
        await Promise.all(files.map(async fileObj => {
          if (stryMutAct_9fa48("12554")) {
            {}
          } else {
            stryCov_9fa48("12554");
            await topics.thumbs.associate(stryMutAct_9fa48("12555") ? {} : (stryCov_9fa48("12555"), {
              id: req.params.tid,
              path: stryMutAct_9fa48("12558") ? fileObj.path && fileObj.url : stryMutAct_9fa48("12557") ? false : stryMutAct_9fa48("12556") ? true : (stryCov_9fa48("12556", "12557", "12558"), fileObj.path || fileObj.url)
            }));
          }
        }));
      }
    }
  }
};
Topics.migrateThumbs = async (req, res) => {
  if (stryMutAct_9fa48("12559")) {
    {}
  } else {
    stryCov_9fa48("12559");
    await Promise.all(stryMutAct_9fa48("12560") ? [] : (stryCov_9fa48("12560"), [checkThumbPrivileges(stryMutAct_9fa48("12561") ? {} : (stryCov_9fa48("12561"), {
      tid: req.params.tid,
      uid: req.user.uid,
      res
    })), checkThumbPrivileges(stryMutAct_9fa48("12562") ? {} : (stryCov_9fa48("12562"), {
      tid: req.body.tid,
      uid: req.user.uid,
      res
    }))]));
    if (stryMutAct_9fa48("12564") ? false : stryMutAct_9fa48("12563") ? true : (stryCov_9fa48("12563", "12564"), res.headersSent)) {
      if (stryMutAct_9fa48("12565")) {
        {}
      } else {
        stryCov_9fa48("12565");
        return;
      }
    }
    await topics.thumbs.migrate(req.params.tid, req.body.tid);
    helpers.formatApiResponse(200, res);
  }
};
Topics.deleteThumb = async (req, res) => {
  if (stryMutAct_9fa48("12566")) {
    {}
  } else {
    stryCov_9fa48("12566");
    if (stryMutAct_9fa48("12569") ? false : stryMutAct_9fa48("12568") ? true : stryMutAct_9fa48("12567") ? req.body.path.startsWith('http') : (stryCov_9fa48("12567", "12568", "12569"), !(stryMutAct_9fa48("12570") ? req.body.path.endsWith('http') : (stryCov_9fa48("12570"), req.body.path.startsWith(stryMutAct_9fa48("12571") ? "" : (stryCov_9fa48("12571"), 'http')))))) {
      if (stryMutAct_9fa48("12572")) {
        {}
      } else {
        stryCov_9fa48("12572");
        await middleware.assert.path(req, res, () => {});
        if (stryMutAct_9fa48("12574") ? false : stryMutAct_9fa48("12573") ? true : (stryCov_9fa48("12573", "12574"), res.headersSent)) {
          if (stryMutAct_9fa48("12575")) {
            {}
          } else {
            stryCov_9fa48("12575");
            return;
          }
        }
      }
    }
    await checkThumbPrivileges(stryMutAct_9fa48("12576") ? {} : (stryCov_9fa48("12576"), {
      tid: req.params.tid,
      uid: req.user.uid,
      res
    }));
    if (stryMutAct_9fa48("12578") ? false : stryMutAct_9fa48("12577") ? true : (stryCov_9fa48("12577", "12578"), res.headersSent)) {
      if (stryMutAct_9fa48("12579")) {
        {}
      } else {
        stryCov_9fa48("12579");
        return;
      }
    }
    await topics.thumbs.delete(req.params.tid, req.body.path);
    helpers.formatApiResponse(200, res, await topics.thumbs.get(req.params.tid));
  }
};
Topics.reorderThumbs = async (req, res) => {
  if (stryMutAct_9fa48("12580")) {
    {}
  } else {
    stryCov_9fa48("12580");
    await checkThumbPrivileges(stryMutAct_9fa48("12581") ? {} : (stryCov_9fa48("12581"), {
      tid: req.params.tid,
      uid: req.user.uid,
      res
    }));
    if (stryMutAct_9fa48("12583") ? false : stryMutAct_9fa48("12582") ? true : (stryCov_9fa48("12582", "12583"), res.headersSent)) {
      if (stryMutAct_9fa48("12584")) {
        {}
      } else {
        stryCov_9fa48("12584");
        return;
      }
    }
    const exists = await topics.thumbs.exists(req.params.tid, req.body.path);
    if (stryMutAct_9fa48("12587") ? false : stryMutAct_9fa48("12586") ? true : stryMutAct_9fa48("12585") ? exists : (stryCov_9fa48("12585", "12586", "12587"), !exists)) {
      if (stryMutAct_9fa48("12588")) {
        {}
      } else {
        stryCov_9fa48("12588");
        return helpers.formatApiResponse(404, res);
      }
    }
    await topics.thumbs.associate(stryMutAct_9fa48("12589") ? {} : (stryCov_9fa48("12589"), {
      id: req.params.tid,
      path: req.body.path,
      score: req.body.order
    }));
    helpers.formatApiResponse(200, res);
  }
};
async function checkThumbPrivileges({
  tid,
  uid,
  res
}) {
  if (stryMutAct_9fa48("12590")) {
    {}
  } else {
    stryCov_9fa48("12590");
    // req.params.tid could be either a tid (pushing a new thumb to an existing topic)
    // or a post UUID (a new topic being composed)
    const isUUID = validator.isUUID(tid);

    // Sanity-check the tid if it's strictly not a uuid
    if (stryMutAct_9fa48("12593") ? !isUUID || isNaN(parseInt(tid, 10)) || !(await topics.exists(tid)) : stryMutAct_9fa48("12592") ? false : stryMutAct_9fa48("12591") ? true : (stryCov_9fa48("12591", "12592", "12593"), (stryMutAct_9fa48("12594") ? isUUID : (stryCov_9fa48("12594"), !isUUID)) && (stryMutAct_9fa48("12596") ? isNaN(parseInt(tid, 10)) && !(await topics.exists(tid)) : stryMutAct_9fa48("12595") ? true : (stryCov_9fa48("12595", "12596"), isNaN(parseInt(tid, 10)) || (stryMutAct_9fa48("12597") ? await topics.exists(tid) : (stryCov_9fa48("12597"), !(await topics.exists(tid)))))))) {
      if (stryMutAct_9fa48("12598")) {
        {}
      } else {
        stryCov_9fa48("12598");
        return helpers.formatApiResponse(404, res, new Error(stryMutAct_9fa48("12599") ? "" : (stryCov_9fa48("12599"), '[[error:no-topic]]')));
      }
    }

    // While drafts are not protected, tids are
    if (stryMutAct_9fa48("12602") ? !isUUID || !(await privileges.topics.canEdit(tid, uid)) : stryMutAct_9fa48("12601") ? false : stryMutAct_9fa48("12600") ? true : (stryCov_9fa48("12600", "12601", "12602"), (stryMutAct_9fa48("12603") ? isUUID : (stryCov_9fa48("12603"), !isUUID)) && (stryMutAct_9fa48("12604") ? await privileges.topics.canEdit(tid, uid) : (stryCov_9fa48("12604"), !(await privileges.topics.canEdit(tid, uid)))))) {
      if (stryMutAct_9fa48("12605")) {
        {}
      } else {
        stryCov_9fa48("12605");
        return helpers.formatApiResponse(403, res, new Error(stryMutAct_9fa48("12606") ? "" : (stryCov_9fa48("12606"), '[[error:no-privileges]]')));
      }
    }
  }
}
Topics.getEvents = async (req, res) => {
  if (stryMutAct_9fa48("12607")) {
    {}
  } else {
    stryCov_9fa48("12607");
    if (stryMutAct_9fa48("12610") ? false : stryMutAct_9fa48("12609") ? true : stryMutAct_9fa48("12608") ? await privileges.topics.can('topics:read', req.params.tid, req.uid) : (stryCov_9fa48("12608", "12609", "12610"), !(await privileges.topics.can(stryMutAct_9fa48("12611") ? "" : (stryCov_9fa48("12611"), 'topics:read'), req.params.tid, req.uid)))) {
      if (stryMutAct_9fa48("12612")) {
        {}
      } else {
        stryCov_9fa48("12612");
        return helpers.formatApiResponse(403, res);
      }
    }
    helpers.formatApiResponse(200, res, await topics.events.get(req.params.tid, req.uid));
  }
};
Topics.deleteEvent = async (req, res) => {
  if (stryMutAct_9fa48("12613")) {
    {}
  } else {
    stryCov_9fa48("12613");
    if (stryMutAct_9fa48("12616") ? false : stryMutAct_9fa48("12615") ? true : stryMutAct_9fa48("12614") ? await privileges.topics.isAdminOrMod(req.params.tid, req.uid) : (stryCov_9fa48("12614", "12615", "12616"), !(await privileges.topics.isAdminOrMod(req.params.tid, req.uid)))) {
      if (stryMutAct_9fa48("12617")) {
        {}
      } else {
        stryCov_9fa48("12617");
        return helpers.formatApiResponse(403, res);
      }
    }
    await topics.events.purge(req.params.tid, stryMutAct_9fa48("12618") ? [] : (stryCov_9fa48("12618"), [req.params.eventId]));
    helpers.formatApiResponse(200, res);
  }
};