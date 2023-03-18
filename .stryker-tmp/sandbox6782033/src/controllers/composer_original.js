// @ts-nocheck
// This is one of the two example files included with the NodeBB repository
// It is the original (untranslated) JavaScript file of composer.ts
// This file is meant to serve as an example to assist you with your
// HW1 translation. It is *not* meant to be run.
// You do not have to keep your original JavaScript file for this assignment

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
const user = require('../user');
const plugins = require('../plugins');
const topics = require('../topics');
const posts = require('../posts');
const helpers = require('./helpers');
exports.get = async function (req, res, callback) {
  if (stryMutAct_9fa48("9247")) {
    {}
  } else {
    stryCov_9fa48("9247");
    res.locals.metaTags = stryMutAct_9fa48("9248") ? {} : (stryCov_9fa48("9248"), {
      ...res.locals.metaTags,
      name: stryMutAct_9fa48("9249") ? "" : (stryCov_9fa48("9249"), 'robots'),
      content: stryMutAct_9fa48("9250") ? "" : (stryCov_9fa48("9250"), 'noindex')
    });
    const data = await plugins.hooks.fire(stryMutAct_9fa48("9251") ? "" : (stryCov_9fa48("9251"), 'filter:composer.build'), stryMutAct_9fa48("9252") ? {} : (stryCov_9fa48("9252"), {
      req: req,
      res: res,
      next: callback,
      templateData: {}
    }));
    if (stryMutAct_9fa48("9254") ? false : stryMutAct_9fa48("9253") ? true : (stryCov_9fa48("9253", "9254"), res.headersSent)) {
      if (stryMutAct_9fa48("9255")) {
        {}
      } else {
        stryCov_9fa48("9255");
        return;
      }
    }
    if (stryMutAct_9fa48("9258") ? !data && !data.templateData : stryMutAct_9fa48("9257") ? false : stryMutAct_9fa48("9256") ? true : (stryCov_9fa48("9256", "9257", "9258"), (stryMutAct_9fa48("9259") ? data : (stryCov_9fa48("9259"), !data)) || (stryMutAct_9fa48("9260") ? data.templateData : (stryCov_9fa48("9260"), !data.templateData)))) {
      if (stryMutAct_9fa48("9261")) {
        {}
      } else {
        stryCov_9fa48("9261");
        return callback(new Error(stryMutAct_9fa48("9262") ? "" : (stryCov_9fa48("9262"), '[[error:invalid-data]]')));
      }
    }
    if (stryMutAct_9fa48("9264") ? false : stryMutAct_9fa48("9263") ? true : (stryCov_9fa48("9263", "9264"), data.templateData.disabled)) {
      if (stryMutAct_9fa48("9265")) {
        {}
      } else {
        stryCov_9fa48("9265");
        res.render(stryMutAct_9fa48("9266") ? "Stryker was here!" : (stryCov_9fa48("9266"), ''), stryMutAct_9fa48("9267") ? {} : (stryCov_9fa48("9267"), {
          title: stryMutAct_9fa48("9268") ? "" : (stryCov_9fa48("9268"), '[[modules:composer.compose]]')
        }));
      }
    } else {
      if (stryMutAct_9fa48("9269")) {
        {}
      } else {
        stryCov_9fa48("9269");
        data.templateData.title = stryMutAct_9fa48("9270") ? "" : (stryCov_9fa48("9270"), '[[modules:composer.compose]]');
        res.render(stryMutAct_9fa48("9271") ? "" : (stryCov_9fa48("9271"), 'compose'), data.templateData);
      }
    }
  }
};
exports.post = async function (req, res) {
  if (stryMutAct_9fa48("9272")) {
    {}
  } else {
    stryCov_9fa48("9272");
    const {
      body
    } = req;
    const data = stryMutAct_9fa48("9273") ? {} : (stryCov_9fa48("9273"), {
      uid: req.uid,
      req: req,
      timestamp: Date.now(),
      content: body.content,
      fromQueue: stryMutAct_9fa48("9274") ? true : (stryCov_9fa48("9274"), false)
    });
    req.body.noscript = stryMutAct_9fa48("9275") ? "" : (stryCov_9fa48("9275"), 'true');
    if (stryMutAct_9fa48("9278") ? false : stryMutAct_9fa48("9277") ? true : stryMutAct_9fa48("9276") ? data.content : (stryCov_9fa48("9276", "9277", "9278"), !data.content)) {
      if (stryMutAct_9fa48("9279")) {
        {}
      } else {
        stryCov_9fa48("9279");
        return helpers.noScriptErrors(req, res, stryMutAct_9fa48("9280") ? "" : (stryCov_9fa48("9280"), '[[error:invalid-data]]'), 400);
      }
    }
    async function queueOrPost(postFn, data) {
      if (stryMutAct_9fa48("9281")) {
        {}
      } else {
        stryCov_9fa48("9281");
        const shouldQueue = await posts.shouldQueue(req.uid, data);
        if (stryMutAct_9fa48("9283") ? false : stryMutAct_9fa48("9282") ? true : (stryCov_9fa48("9282", "9283"), shouldQueue)) {
          if (stryMutAct_9fa48("9284")) {
            {}
          } else {
            stryCov_9fa48("9284");
            delete data.req;
            return await posts.addToQueue(data);
          }
        }
        return await postFn(data);
      }
    }
    try {
      if (stryMutAct_9fa48("9285")) {
        {}
      } else {
        stryCov_9fa48("9285");
        let result;
        if (stryMutAct_9fa48("9287") ? false : stryMutAct_9fa48("9286") ? true : (stryCov_9fa48("9286", "9287"), body.tid)) {
          if (stryMutAct_9fa48("9288")) {
            {}
          } else {
            stryCov_9fa48("9288");
            data.tid = body.tid;
            result = await queueOrPost(topics.reply, data);
          }
        } else if (stryMutAct_9fa48("9290") ? false : stryMutAct_9fa48("9289") ? true : (stryCov_9fa48("9289", "9290"), body.cid)) {
          if (stryMutAct_9fa48("9291")) {
            {}
          } else {
            stryCov_9fa48("9291");
            data.cid = body.cid;
            data.title = body.title;
            data.tags = stryMutAct_9fa48("9292") ? ["Stryker was here"] : (stryCov_9fa48("9292"), []);
            data.thumb = stryMutAct_9fa48("9293") ? "Stryker was here!" : (stryCov_9fa48("9293"), '');
            result = await queueOrPost(topics.post, data);
          }
        } else {
          if (stryMutAct_9fa48("9294")) {
            {}
          } else {
            stryCov_9fa48("9294");
            throw new Error(stryMutAct_9fa48("9295") ? "" : (stryCov_9fa48("9295"), '[[error:invalid-data]]'));
          }
        }
        if (stryMutAct_9fa48("9297") ? false : stryMutAct_9fa48("9296") ? true : (stryCov_9fa48("9296", "9297"), result.queued)) {
          if (stryMutAct_9fa48("9298")) {
            {}
          } else {
            stryCov_9fa48("9298");
            return res.redirect(stryMutAct_9fa48("9299") ? `` : (stryCov_9fa48("9299"), `${stryMutAct_9fa48("9302") ? nconf.get('relative_path') && '/' : stryMutAct_9fa48("9301") ? false : stryMutAct_9fa48("9300") ? true : (stryCov_9fa48("9300", "9301", "9302"), nconf.get(stryMutAct_9fa48("9303") ? "" : (stryCov_9fa48("9303"), 'relative_path')) || (stryMutAct_9fa48("9304") ? "" : (stryCov_9fa48("9304"), '/')))}?noScriptMessage=[[success:post-queued]]`));
          }
        }
        const uid = result.uid ? result.uid : result.topicData.uid;
        user.updateOnlineUsers(uid);
        const path = result.pid ? stryMutAct_9fa48("9305") ? `` : (stryCov_9fa48("9305"), `/post/${result.pid}`) : stryMutAct_9fa48("9306") ? `` : (stryCov_9fa48("9306"), `/topic/${result.topicData.slug}`);
        res.redirect(stryMutAct_9fa48("9307") ? nconf.get('relative_path') - path : (stryCov_9fa48("9307"), nconf.get(stryMutAct_9fa48("9308") ? "" : (stryCov_9fa48("9308"), 'relative_path')) + path));
      }
    } catch (err) {
      if (stryMutAct_9fa48("9309")) {
        {}
      } else {
        stryCov_9fa48("9309");
        helpers.noScriptErrors(req, res, err.message, 400);
      }
    }
  }
};