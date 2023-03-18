// @ts-nocheck
// This is one of the two example TypeScript files included with the NodeBB repository
// It is meant to serve as an example to assist you with your HW1 translation
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
import nconf from 'nconf';
import { Request, Response, NextFunction } from 'express';
import { TopicObject } from '../types';
import user from '../user';
import plugins from '../plugins';
import topics from '../topics';
import posts from '../posts';
import helpers from './helpers';
type ComposerBuildData = {
  templateData: TemplateData;
};
type TemplateData = {
  title: string;
  disabled: boolean;
};
type Locals = {
  metaTags: {
    [key: string]: string;
  };
};
export async function get(req: Request, res: Response<object, Locals>, callback: NextFunction): Promise<void> {
  if (stryMutAct_9fa48("9186")) {
    {}
  } else {
    stryCov_9fa48("9186");
    res.locals.metaTags = stryMutAct_9fa48("9187") ? {} : (stryCov_9fa48("9187"), {
      ...res.locals.metaTags,
      name: stryMutAct_9fa48("9188") ? "" : (stryCov_9fa48("9188"), 'robots'),
      content: stryMutAct_9fa48("9189") ? "" : (stryCov_9fa48("9189"), 'noindex')
    });
    const data: ComposerBuildData = (await plugins.hooks.fire('filter:composer.build', {
      req: req,
      res: res,
      next: callback,
      templateData: {}
    }) as ComposerBuildData);
    if (stryMutAct_9fa48("9191") ? false : stryMutAct_9fa48("9190") ? true : (stryCov_9fa48("9190", "9191"), res.headersSent)) {
      if (stryMutAct_9fa48("9192")) {
        {}
      } else {
        stryCov_9fa48("9192");
        return;
      }
    }
    if (stryMutAct_9fa48("9195") ? !data && !data.templateData : stryMutAct_9fa48("9194") ? false : stryMutAct_9fa48("9193") ? true : (stryCov_9fa48("9193", "9194", "9195"), (stryMutAct_9fa48("9196") ? data : (stryCov_9fa48("9196"), !data)) || (stryMutAct_9fa48("9197") ? data.templateData : (stryCov_9fa48("9197"), !data.templateData)))) {
      if (stryMutAct_9fa48("9198")) {
        {}
      } else {
        stryCov_9fa48("9198");
        return callback(new Error(stryMutAct_9fa48("9199") ? "" : (stryCov_9fa48("9199"), '[[error:invalid-data]]')));
      }
    }
    if (stryMutAct_9fa48("9201") ? false : stryMutAct_9fa48("9200") ? true : (stryCov_9fa48("9200", "9201"), data.templateData.disabled)) {
      if (stryMutAct_9fa48("9202")) {
        {}
      } else {
        stryCov_9fa48("9202");
        res.render(stryMutAct_9fa48("9203") ? "Stryker was here!" : (stryCov_9fa48("9203"), ''), stryMutAct_9fa48("9204") ? {} : (stryCov_9fa48("9204"), {
          title: stryMutAct_9fa48("9205") ? "" : (stryCov_9fa48("9205"), '[[modules:composer.compose]]')
        }));
      }
    } else {
      if (stryMutAct_9fa48("9206")) {
        {}
      } else {
        stryCov_9fa48("9206");
        data.templateData.title = stryMutAct_9fa48("9207") ? "" : (stryCov_9fa48("9207"), '[[modules:composer.compose]]');
        res.render(stryMutAct_9fa48("9208") ? "" : (stryCov_9fa48("9208"), 'compose'), data.templateData);
      }
    }
  }
}
type ComposerData = {
  uid: number;
  req: Request<object, object, ComposerData>;
  timestamp: number;
  content: string;
  fromQueue: boolean;
  tid?: number;
  cid?: number;
  title?: string;
  tags?: string[];
  thumb?: string;
  noscript?: string;
};
type QueueResult = {
  uid: number;
  queued: boolean;
  topicData: TopicObject;
  pid: number;
};
type PostFnType = (data: ComposerData) => Promise<QueueResult>;
export async function post(req: Request<object, object, ComposerData> & {
  uid: number;
}, res: Response): Promise<void> {
  if (stryMutAct_9fa48("9209")) {
    {}
  } else {
    stryCov_9fa48("9209");
    const {
      body
    } = req;
    const data: ComposerData = stryMutAct_9fa48("9210") ? {} : (stryCov_9fa48("9210"), {
      uid: req.uid,
      req: req,
      timestamp: Date.now(),
      content: body.content,
      fromQueue: stryMutAct_9fa48("9211") ? true : (stryCov_9fa48("9211"), false)
    });
    req.body.noscript = stryMutAct_9fa48("9212") ? "" : (stryCov_9fa48("9212"), 'true');
    if (stryMutAct_9fa48("9215") ? false : stryMutAct_9fa48("9214") ? true : stryMutAct_9fa48("9213") ? data.content : (stryCov_9fa48("9213", "9214", "9215"), !data.content)) {
      if (stryMutAct_9fa48("9216")) {
        {}
      } else {
        stryCov_9fa48("9216");
        return (await helpers.noScriptErrors(req, res, '[[error:invalid-data]]', 400) as Promise<void>);
      }
    }
    async function queueOrPost(postFn: PostFnType, data: ComposerData): Promise<QueueResult> {
      if (stryMutAct_9fa48("9217")) {
        {}
      } else {
        stryCov_9fa48("9217");
        // The next line calls a function in a module that has not been updated to TS yet
        // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access, @typescript-eslint/no-unsafe-call
        const shouldQueue: boolean = (await posts.shouldQueue(req.uid, data) as boolean);
        if (stryMutAct_9fa48("9219") ? false : stryMutAct_9fa48("9218") ? true : (stryCov_9fa48("9218", "9219"), shouldQueue)) {
          if (stryMutAct_9fa48("9220")) {
            {}
          } else {
            stryCov_9fa48("9220");
            delete data.req;

            // The next line calls a function in a module that has not been updated to TS yet
            // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access, @typescript-eslint/no-unsafe-call
            return (await posts.addToQueue(data) as QueueResult);
          }
        }
        return await postFn(data);
      }
    }
    try {
      if (stryMutAct_9fa48("9221")) {
        {}
      } else {
        stryCov_9fa48("9221");
        let result: QueueResult;
        if (stryMutAct_9fa48("9223") ? false : stryMutAct_9fa48("9222") ? true : (stryCov_9fa48("9222", "9223"), body.tid)) {
          if (stryMutAct_9fa48("9224")) {
            {}
          } else {
            stryCov_9fa48("9224");
            data.tid = body.tid;
            result = await queueOrPost((topics.reply as PostFnType), data);
          }
        } else if (stryMutAct_9fa48("9226") ? false : stryMutAct_9fa48("9225") ? true : (stryCov_9fa48("9225", "9226"), body.cid)) {
          if (stryMutAct_9fa48("9227")) {
            {}
          } else {
            stryCov_9fa48("9227");
            data.cid = body.cid;
            data.title = body.title;
            data.tags = stryMutAct_9fa48("9228") ? ["Stryker was here"] : (stryCov_9fa48("9228"), []);
            data.thumb = stryMutAct_9fa48("9229") ? "Stryker was here!" : (stryCov_9fa48("9229"), '');
            result = await queueOrPost((topics.post as PostFnType), data);
          }
        } else {
          if (stryMutAct_9fa48("9230")) {
            {}
          } else {
            stryCov_9fa48("9230");
            throw new Error(stryMutAct_9fa48("9231") ? "" : (stryCov_9fa48("9231"), '[[error:invalid-data]]'));
          }
        }
        if (stryMutAct_9fa48("9233") ? false : stryMutAct_9fa48("9232") ? true : (stryCov_9fa48("9232", "9233"), result.queued)) {
          if (stryMutAct_9fa48("9234")) {
            {}
          } else {
            stryCov_9fa48("9234");
            return res.redirect(stryMutAct_9fa48("9235") ? `` : (stryCov_9fa48("9235"), `${stryMutAct_9fa48("9238") ? (nconf.get('relative_path') as string) && '/' : stryMutAct_9fa48("9237") ? false : stryMutAct_9fa48("9236") ? true : (stryCov_9fa48("9236", "9237", "9238"), (nconf.get('relative_path') as string) || (stryMutAct_9fa48("9239") ? "" : (stryCov_9fa48("9239"), '/')))}?noScriptMessage=[[success:post-queued]]`));
          }
        }
        const uid: number = result.uid ? result.uid : result.topicData.uid;

        // The next line calls a function in a module that has not been updated to TS yet
        // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access, @typescript-eslint/no-unsafe-call
        user.updateOnlineUsers(uid);
        const path: string = result.pid ? stryMutAct_9fa48("9240") ? `` : (stryCov_9fa48("9240"), `/post/${result.pid}`) : stryMutAct_9fa48("9241") ? `` : (stryCov_9fa48("9241"), `/topic/${result.topicData.slug}`);
        res.redirect(stryMutAct_9fa48("9242") ? (nconf.get('relative_path') as string) - path : (stryCov_9fa48("9242"), (nconf.get('relative_path') as string) + path));
      }
    } catch (err: unknown) {
      if (stryMutAct_9fa48("9243")) {
        {}
      } else {
        stryCov_9fa48("9243");
        if (stryMutAct_9fa48("9245") ? false : stryMutAct_9fa48("9244") ? true : (stryCov_9fa48("9244", "9245"), err instanceof Error)) {
          if (stryMutAct_9fa48("9246")) {
            {}
          } else {
            stryCov_9fa48("9246");
            await helpers.noScriptErrors(req, res, err.message, 400);
          }
        }
      }
    }
  }
}