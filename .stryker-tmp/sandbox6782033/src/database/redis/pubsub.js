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
const util = require('util');
const winston = require('winston');
const {
  EventEmitter
} = require('events');
const connection = require('./connection');
let channelName;
const PubSub = function () {
  if (stryMutAct_9fa48("17407")) {
    {}
  } else {
    stryCov_9fa48("17407");
    const self = this;
    channelName = stryMutAct_9fa48("17408") ? `` : (stryCov_9fa48("17408"), `db:${nconf.get(stryMutAct_9fa48("17409") ? "" : (stryCov_9fa48("17409"), 'redis:database'))}:pubsub_channel`);
    self.queue = stryMutAct_9fa48("17410") ? ["Stryker was here"] : (stryCov_9fa48("17410"), []);
    connection.connect().then(client => {
      if (stryMutAct_9fa48("17411")) {
        {}
      } else {
        stryCov_9fa48("17411");
        self.subClient = client;
        self.subClient.subscribe(channelName);
        self.subClient.on(stryMutAct_9fa48("17412") ? "" : (stryCov_9fa48("17412"), 'message'), (channel, message) => {
          if (stryMutAct_9fa48("17413")) {
            {}
          } else {
            stryCov_9fa48("17413");
            if (stryMutAct_9fa48("17416") ? channel === channelName : stryMutAct_9fa48("17415") ? false : stryMutAct_9fa48("17414") ? true : (stryCov_9fa48("17414", "17415", "17416"), channel !== channelName)) {
              if (stryMutAct_9fa48("17417")) {
                {}
              } else {
                stryCov_9fa48("17417");
                return;
              }
            }
            try {
              if (stryMutAct_9fa48("17418")) {
                {}
              } else {
                stryCov_9fa48("17418");
                const msg = JSON.parse(message);
                self.emit(msg.event, msg.data);
              }
            } catch (err) {
              if (stryMutAct_9fa48("17419")) {
                {}
              } else {
                stryCov_9fa48("17419");
                winston.error(err.stack);
              }
            }
          }
        });
      }
    });
    connection.connect().then(client => {
      if (stryMutAct_9fa48("17420")) {
        {}
      } else {
        stryCov_9fa48("17420");
        self.pubClient = client;
        self.queue.forEach(stryMutAct_9fa48("17421") ? () => undefined : (stryCov_9fa48("17421"), payload => client.publish(channelName, payload)));
        self.queue.length = 0;
      }
    });
  }
};
util.inherits(PubSub, EventEmitter);
PubSub.prototype.publish = function (event, data) {
  if (stryMutAct_9fa48("17422")) {
    {}
  } else {
    stryCov_9fa48("17422");
    const payload = JSON.stringify(stryMutAct_9fa48("17423") ? {} : (stryCov_9fa48("17423"), {
      event: event,
      data: data
    }));
    if (stryMutAct_9fa48("17425") ? false : stryMutAct_9fa48("17424") ? true : (stryCov_9fa48("17424", "17425"), this.pubClient)) {
      if (stryMutAct_9fa48("17426")) {
        {}
      } else {
        stryCov_9fa48("17426");
        this.pubClient.publish(channelName, payload);
      }
    } else {
      if (stryMutAct_9fa48("17427")) {
        {}
      } else {
        stryCov_9fa48("17427");
        this.queue.push(payload);
      }
    }
  }
};
module.exports = new PubSub();