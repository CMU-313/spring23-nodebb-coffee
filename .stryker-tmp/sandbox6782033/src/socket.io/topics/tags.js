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
const meta = require('../../meta');
const user = require('../../user');
const topics = require('../../topics');
const categories = require('../../categories');
const privileges = require('../../privileges');
const utils = require('../../utils');
module.exports = function (SocketTopics) {
  if (stryMutAct_9fa48("37023")) {
    {}
  } else {
    stryCov_9fa48("37023");
    SocketTopics.isTagAllowed = async function (socket, data) {
      if (stryMutAct_9fa48("37024")) {
        {}
      } else {
        stryCov_9fa48("37024");
        if (stryMutAct_9fa48("37027") ? (!data || !utils.isNumber(data.cid)) && !data.tag : stryMutAct_9fa48("37026") ? false : stryMutAct_9fa48("37025") ? true : (stryCov_9fa48("37025", "37026", "37027"), (stryMutAct_9fa48("37029") ? !data && !utils.isNumber(data.cid) : stryMutAct_9fa48("37028") ? false : (stryCov_9fa48("37028", "37029"), (stryMutAct_9fa48("37030") ? data : (stryCov_9fa48("37030"), !data)) || (stryMutAct_9fa48("37031") ? utils.isNumber(data.cid) : (stryCov_9fa48("37031"), !utils.isNumber(data.cid))))) || (stryMutAct_9fa48("37032") ? data.tag : (stryCov_9fa48("37032"), !data.tag)))) {
          if (stryMutAct_9fa48("37033")) {
            {}
          } else {
            stryCov_9fa48("37033");
            throw new Error(stryMutAct_9fa48("37034") ? "" : (stryCov_9fa48("37034"), '[[error:invalid-data]]'));
          }
        }
        const systemTags = (stryMutAct_9fa48("37037") ? meta.config.systemTags && '' : stryMutAct_9fa48("37036") ? false : stryMutAct_9fa48("37035") ? true : (stryCov_9fa48("37035", "37036", "37037"), meta.config.systemTags || (stryMutAct_9fa48("37038") ? "Stryker was here!" : (stryCov_9fa48("37038"), '')))).split(stryMutAct_9fa48("37039") ? "" : (stryCov_9fa48("37039"), ','));
        const [tagWhitelist, isPrivileged] = await Promise.all(stryMutAct_9fa48("37040") ? [] : (stryCov_9fa48("37040"), [categories.getTagWhitelist(stryMutAct_9fa48("37041") ? [] : (stryCov_9fa48("37041"), [data.cid])), user.isPrivileged(socket.uid)]));
        return stryMutAct_9fa48("37044") ? isPrivileged && !systemTags.includes(data.tag) && (!tagWhitelist[0].length || tagWhitelist[0].includes(data.tag)) : stryMutAct_9fa48("37043") ? false : stryMutAct_9fa48("37042") ? true : (stryCov_9fa48("37042", "37043", "37044"), isPrivileged || (stryMutAct_9fa48("37046") ? !systemTags.includes(data.tag) || !tagWhitelist[0].length || tagWhitelist[0].includes(data.tag) : stryMutAct_9fa48("37045") ? false : (stryCov_9fa48("37045", "37046"), (stryMutAct_9fa48("37047") ? systemTags.includes(data.tag) : (stryCov_9fa48("37047"), !systemTags.includes(data.tag))) && (stryMutAct_9fa48("37049") ? !tagWhitelist[0].length && tagWhitelist[0].includes(data.tag) : stryMutAct_9fa48("37048") ? true : (stryCov_9fa48("37048", "37049"), (stryMutAct_9fa48("37050") ? tagWhitelist[0].length : (stryCov_9fa48("37050"), !tagWhitelist[0].length)) || tagWhitelist[0].includes(data.tag))))));
      }
    };
    SocketTopics.canRemoveTag = async function (socket, data) {
      if (stryMutAct_9fa48("37051")) {
        {}
      } else {
        stryCov_9fa48("37051");
        if (stryMutAct_9fa48("37054") ? !data && !data.tag : stryMutAct_9fa48("37053") ? false : stryMutAct_9fa48("37052") ? true : (stryCov_9fa48("37052", "37053", "37054"), (stryMutAct_9fa48("37055") ? data : (stryCov_9fa48("37055"), !data)) || (stryMutAct_9fa48("37056") ? data.tag : (stryCov_9fa48("37056"), !data.tag)))) {
          if (stryMutAct_9fa48("37057")) {
            {}
          } else {
            stryCov_9fa48("37057");
            throw new Error(stryMutAct_9fa48("37058") ? "" : (stryCov_9fa48("37058"), '[[error:invalid-data]]'));
          }
        }
        const systemTags = (stryMutAct_9fa48("37061") ? meta.config.systemTags && '' : stryMutAct_9fa48("37060") ? false : stryMutAct_9fa48("37059") ? true : (stryCov_9fa48("37059", "37060", "37061"), meta.config.systemTags || (stryMutAct_9fa48("37062") ? "Stryker was here!" : (stryCov_9fa48("37062"), '')))).split(stryMutAct_9fa48("37063") ? "" : (stryCov_9fa48("37063"), ','));
        const isPrivileged = await user.isPrivileged(socket.uid);
        return stryMutAct_9fa48("37066") ? isPrivileged && !systemTags.includes(String(data.tag).trim()) : stryMutAct_9fa48("37065") ? false : stryMutAct_9fa48("37064") ? true : (stryCov_9fa48("37064", "37065", "37066"), isPrivileged || (stryMutAct_9fa48("37067") ? systemTags.includes(String(data.tag).trim()) : (stryCov_9fa48("37067"), !systemTags.includes(stryMutAct_9fa48("37068") ? String(data.tag) : (stryCov_9fa48("37068"), String(data.tag).trim())))));
      }
    };
    SocketTopics.autocompleteTags = async function (socket, data) {
      if (stryMutAct_9fa48("37069")) {
        {}
      } else {
        stryCov_9fa48("37069");
        if (stryMutAct_9fa48("37071") ? false : stryMutAct_9fa48("37070") ? true : (stryCov_9fa48("37070", "37071"), data.cid)) {
          if (stryMutAct_9fa48("37072")) {
            {}
          } else {
            stryCov_9fa48("37072");
            const canRead = await privileges.categories.can(stryMutAct_9fa48("37073") ? "" : (stryCov_9fa48("37073"), 'topics:read'), data.cid, socket.uid);
            if (stryMutAct_9fa48("37076") ? false : stryMutAct_9fa48("37075") ? true : stryMutAct_9fa48("37074") ? canRead : (stryCov_9fa48("37074", "37075", "37076"), !canRead)) {
              if (stryMutAct_9fa48("37077")) {
                {}
              } else {
                stryCov_9fa48("37077");
                throw new Error(stryMutAct_9fa48("37078") ? "" : (stryCov_9fa48("37078"), '[[error:no-privileges]]'));
              }
            }
          }
        }
        data.cids = await categories.getCidsByPrivilege(stryMutAct_9fa48("37079") ? "" : (stryCov_9fa48("37079"), 'categories:cid'), socket.uid, stryMutAct_9fa48("37080") ? "" : (stryCov_9fa48("37080"), 'topics:read'));
        const result = await topics.autocompleteTags(data);
        return result.map(stryMutAct_9fa48("37081") ? () => undefined : (stryCov_9fa48("37081"), tag => tag.value));
      }
    };
    SocketTopics.searchTags = async function (socket, data) {
      if (stryMutAct_9fa48("37082")) {
        {}
      } else {
        stryCov_9fa48("37082");
        const result = await searchTags(socket.uid, topics.searchTags, data);
        return result.map(stryMutAct_9fa48("37083") ? () => undefined : (stryCov_9fa48("37083"), tag => tag.value));
      }
    };
    SocketTopics.searchAndLoadTags = async function (socket, data) {
      if (stryMutAct_9fa48("37084")) {
        {}
      } else {
        stryCov_9fa48("37084");
        return await searchTags(socket.uid, topics.searchAndLoadTags, data);
      }
    };
    async function searchTags(uid, method, data) {
      if (stryMutAct_9fa48("37085")) {
        {}
      } else {
        stryCov_9fa48("37085");
        const allowed = await privileges.global.can(stryMutAct_9fa48("37086") ? "" : (stryCov_9fa48("37086"), 'search:tags'), uid);
        if (stryMutAct_9fa48("37089") ? false : stryMutAct_9fa48("37088") ? true : stryMutAct_9fa48("37087") ? allowed : (stryCov_9fa48("37087", "37088", "37089"), !allowed)) {
          if (stryMutAct_9fa48("37090")) {
            {}
          } else {
            stryCov_9fa48("37090");
            throw new Error(stryMutAct_9fa48("37091") ? "" : (stryCov_9fa48("37091"), '[[error:no-privileges]]'));
          }
        }
        if (stryMutAct_9fa48("37093") ? false : stryMutAct_9fa48("37092") ? true : (stryCov_9fa48("37092", "37093"), data.cid)) {
          if (stryMutAct_9fa48("37094")) {
            {}
          } else {
            stryCov_9fa48("37094");
            const canRead = await privileges.categories.can(stryMutAct_9fa48("37095") ? "" : (stryCov_9fa48("37095"), 'topics:read'), data.cid, uid);
            if (stryMutAct_9fa48("37098") ? false : stryMutAct_9fa48("37097") ? true : stryMutAct_9fa48("37096") ? canRead : (stryCov_9fa48("37096", "37097", "37098"), !canRead)) {
              if (stryMutAct_9fa48("37099")) {
                {}
              } else {
                stryCov_9fa48("37099");
                throw new Error(stryMutAct_9fa48("37100") ? "" : (stryCov_9fa48("37100"), '[[error:no-privileges]]'));
              }
            }
          }
        }
        data.cids = await categories.getCidsByPrivilege(stryMutAct_9fa48("37101") ? "" : (stryCov_9fa48("37101"), 'categories:cid'), uid, stryMutAct_9fa48("37102") ? "" : (stryCov_9fa48("37102"), 'topics:read'));
        return await method(data);
      }
    }
    SocketTopics.loadMoreTags = async function (socket, data) {
      if (stryMutAct_9fa48("37103")) {
        {}
      } else {
        stryCov_9fa48("37103");
        if (stryMutAct_9fa48("37106") ? !data && !utils.isNumber(data.after) : stryMutAct_9fa48("37105") ? false : stryMutAct_9fa48("37104") ? true : (stryCov_9fa48("37104", "37105", "37106"), (stryMutAct_9fa48("37107") ? data : (stryCov_9fa48("37107"), !data)) || (stryMutAct_9fa48("37108") ? utils.isNumber(data.after) : (stryCov_9fa48("37108"), !utils.isNumber(data.after))))) {
          if (stryMutAct_9fa48("37109")) {
            {}
          } else {
            stryCov_9fa48("37109");
            throw new Error(stryMutAct_9fa48("37110") ? "" : (stryCov_9fa48("37110"), '[[error:invalid-data]]'));
          }
        }
        const start = parseInt(data.after, 10);
        const stop = stryMutAct_9fa48("37111") ? start - 99 : (stryCov_9fa48("37111"), start + 99);
        const cids = await categories.getCidsByPrivilege(stryMutAct_9fa48("37112") ? "" : (stryCov_9fa48("37112"), 'categories:cid'), socket.uid, stryMutAct_9fa48("37113") ? "" : (stryCov_9fa48("37113"), 'topics:read'));
        const tags = await topics.getCategoryTagsData(cids, start, stop);
        return stryMutAct_9fa48("37114") ? {} : (stryCov_9fa48("37114"), {
          tags: stryMutAct_9fa48("37115") ? tags : (stryCov_9fa48("37115"), tags.filter(Boolean)),
          nextStart: stryMutAct_9fa48("37116") ? stop - 1 : (stryCov_9fa48("37116"), stop + 1)
        });
      }
    };
  }
};