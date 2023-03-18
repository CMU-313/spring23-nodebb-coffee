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
const api = require('../../api');
const messaging = require('../../messaging');
const helpers = require('../helpers');
const Chats = module.exports;
Chats.list = async (req, res) => {
  if (stryMutAct_9fa48("12334")) {
    {}
  } else {
    stryCov_9fa48("12334");
    const page = stryMutAct_9fa48("12337") ? isFinite(req.query.page) && parseInt(req.query.page, 10) && 1 : stryMutAct_9fa48("12336") ? false : stryMutAct_9fa48("12335") ? true : (stryCov_9fa48("12335", "12336", "12337"), (stryMutAct_9fa48("12339") ? isFinite(req.query.page) || parseInt(req.query.page, 10) : stryMutAct_9fa48("12338") ? false : (stryCov_9fa48("12338", "12339"), isFinite(req.query.page) && parseInt(req.query.page, 10))) || 1);
    const perPage = stryMutAct_9fa48("12342") ? isFinite(req.query.perPage) && parseInt(req.query.perPage, 10) && 20 : stryMutAct_9fa48("12341") ? false : stryMutAct_9fa48("12340") ? true : (stryCov_9fa48("12340", "12341", "12342"), (stryMutAct_9fa48("12344") ? isFinite(req.query.perPage) || parseInt(req.query.perPage, 10) : stryMutAct_9fa48("12343") ? false : (stryCov_9fa48("12343", "12344"), isFinite(req.query.perPage) && parseInt(req.query.perPage, 10))) || 20);
    const start = stryMutAct_9fa48("12345") ? Math.max(0, page - 1) / perPage : (stryCov_9fa48("12345"), Math.max(0, stryMutAct_9fa48("12346") ? page + 1 : (stryCov_9fa48("12346"), page - 1)) * perPage);
    const stop = stryMutAct_9fa48("12347") ? start - perPage : (stryCov_9fa48("12347"), start + perPage);
    const {
      rooms
    } = await messaging.getRecentChats(req.uid, req.uid, start, stop);
    helpers.formatApiResponse(200, res, stryMutAct_9fa48("12348") ? {} : (stryCov_9fa48("12348"), {
      rooms
    }));
  }
};
Chats.create = async (req, res) => {
  if (stryMutAct_9fa48("12349")) {
    {}
  } else {
    stryCov_9fa48("12349");
    const roomObj = await api.chats.create(req, req.body);
    helpers.formatApiResponse(200, res, roomObj);
  }
};
Chats.exists = async (req, res) => {
  if (stryMutAct_9fa48("12350")) {
    {}
  } else {
    stryCov_9fa48("12350");
    helpers.formatApiResponse(200, res);
  }
};
Chats.get = async (req, res) => {
  if (stryMutAct_9fa48("12351")) {
    {}
  } else {
    stryCov_9fa48("12351");
    const roomObj = await messaging.loadRoom(req.uid, stryMutAct_9fa48("12352") ? {} : (stryCov_9fa48("12352"), {
      uid: stryMutAct_9fa48("12355") ? req.query.uid && req.uid : stryMutAct_9fa48("12354") ? false : stryMutAct_9fa48("12353") ? true : (stryCov_9fa48("12353", "12354", "12355"), req.query.uid || req.uid),
      roomId: req.params.roomId
    }));
    helpers.formatApiResponse(200, res, roomObj);
  }
};
Chats.post = async (req, res) => {
  if (stryMutAct_9fa48("12356")) {
    {}
  } else {
    stryCov_9fa48("12356");
    const messageObj = await api.chats.post(req, stryMutAct_9fa48("12357") ? {} : (stryCov_9fa48("12357"), {
      ...req.body,
      roomId: req.params.roomId
    }));
    helpers.formatApiResponse(200, res, messageObj);
  }
};
Chats.rename = async (req, res) => {
  if (stryMutAct_9fa48("12358")) {
    {}
  } else {
    stryCov_9fa48("12358");
    const roomObj = await api.chats.rename(req, stryMutAct_9fa48("12359") ? {} : (stryCov_9fa48("12359"), {
      ...req.body,
      roomId: req.params.roomId
    }));
    helpers.formatApiResponse(200, res, roomObj);
  }
};
Chats.users = async (req, res) => {
  if (stryMutAct_9fa48("12360")) {
    {}
  } else {
    stryCov_9fa48("12360");
    const users = await api.chats.users(req, stryMutAct_9fa48("12361") ? {} : (stryCov_9fa48("12361"), {
      ...req.params
    }));
    helpers.formatApiResponse(200, res, users);
  }
};
Chats.invite = async (req, res) => {
  if (stryMutAct_9fa48("12362")) {
    {}
  } else {
    stryCov_9fa48("12362");
    const users = await api.chats.invite(req, stryMutAct_9fa48("12363") ? {} : (stryCov_9fa48("12363"), {
      ...req.body,
      roomId: req.params.roomId
    }));
    helpers.formatApiResponse(200, res, users);
  }
};
Chats.kick = async (req, res) => {
  if (stryMutAct_9fa48("12364")) {
    {}
  } else {
    stryCov_9fa48("12364");
    const users = await api.chats.kick(req, stryMutAct_9fa48("12365") ? {} : (stryCov_9fa48("12365"), {
      ...req.body,
      roomId: req.params.roomId
    }));
    helpers.formatApiResponse(200, res, users);
  }
};
Chats.kickUser = async (req, res) => {
  if (stryMutAct_9fa48("12366")) {
    {}
  } else {
    stryCov_9fa48("12366");
    req.body.uids = stryMutAct_9fa48("12367") ? [] : (stryCov_9fa48("12367"), [req.params.uid]);
    const users = await api.chats.kick(req, stryMutAct_9fa48("12368") ? {} : (stryCov_9fa48("12368"), {
      ...req.body,
      roomId: req.params.roomId
    }));
    helpers.formatApiResponse(200, res, users);
  }
};
Chats.messages = {};
Chats.messages.list = async (req, res) => {
  if (stryMutAct_9fa48("12369")) {
    {}
  } else {
    stryCov_9fa48("12369");
    const messages = await messaging.getMessages(stryMutAct_9fa48("12370") ? {} : (stryCov_9fa48("12370"), {
      callerUid: req.uid,
      uid: stryMutAct_9fa48("12373") ? req.query.uid && req.uid : stryMutAct_9fa48("12372") ? false : stryMutAct_9fa48("12371") ? true : (stryCov_9fa48("12371", "12372", "12373"), req.query.uid || req.uid),
      roomId: req.params.roomId,
      start: stryMutAct_9fa48("12376") ? parseInt(req.query.start, 10) && 0 : stryMutAct_9fa48("12375") ? false : stryMutAct_9fa48("12374") ? true : (stryCov_9fa48("12374", "12375", "12376"), parseInt(req.query.start, 10) || 0),
      count: 50
    }));
    helpers.formatApiResponse(200, res, stryMutAct_9fa48("12377") ? {} : (stryCov_9fa48("12377"), {
      messages
    }));
  }
};
Chats.messages.get = async (req, res) => {
  if (stryMutAct_9fa48("12378")) {
    {}
  } else {
    stryCov_9fa48("12378");
    const messages = await messaging.getMessagesData(stryMutAct_9fa48("12379") ? [] : (stryCov_9fa48("12379"), [req.params.mid]), req.uid, req.params.roomId, stryMutAct_9fa48("12380") ? true : (stryCov_9fa48("12380"), false));
    helpers.formatApiResponse(200, res, messages.pop());
  }
};
Chats.messages.edit = async (req, res) => {
  if (stryMutAct_9fa48("12381")) {
    {}
  } else {
    stryCov_9fa48("12381");
    await messaging.canEdit(req.params.mid, req.uid);
    await messaging.editMessage(req.uid, req.params.mid, req.params.roomId, req.body.message);
    const messages = await messaging.getMessagesData(stryMutAct_9fa48("12382") ? [] : (stryCov_9fa48("12382"), [req.params.mid]), req.uid, req.params.roomId, stryMutAct_9fa48("12383") ? true : (stryCov_9fa48("12383"), false));
    helpers.formatApiResponse(200, res, messages.pop());
  }
};
Chats.messages.delete = async (req, res) => {
  if (stryMutAct_9fa48("12384")) {
    {}
  } else {
    stryCov_9fa48("12384");
    await messaging.canDelete(req.params.mid, req.uid);
    await messaging.deleteMessage(req.params.mid, req.uid);
    helpers.formatApiResponse(200, res);
  }
};
Chats.messages.restore = async (req, res) => {
  if (stryMutAct_9fa48("12385")) {
    {}
  } else {
    stryCov_9fa48("12385");
    await messaging.canDelete(req.params.mid, req.uid);
    await messaging.restoreMessage(req.params.mid, req.uid);
    helpers.formatApiResponse(200, res);
  }
};